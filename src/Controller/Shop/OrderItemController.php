<?php

declare(strict_types=1);

namespace App\Controller\Shop;

use App\Entity\Product\Product;
use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\View\View;
use Sylius\Bundle\OrderBundle\Controller\AddToCartCommandInterface;
use Sylius\Bundle\OrderBundle\Controller\OrderItemController as BaseOrderItemController;
use Sylius\Bundle\ResourceBundle\Controller\RequestConfiguration;
use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Sylius\Component\Order\CartActions;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class OrderItemController extends ResourceController
{
    /** @var BaseOrderItemController */
    protected $_parent;

    /** @var SessionInterface */
    protected $session;

    public function __construct(
        BaseOrderItemController $parent,
        SessionInterface $session
    ) {
        $this->_parent = $parent;
        $this->session = $session;
    }

    public function addAction(Request $request): Response
    {
        $cart = $this->getCurrentCart();
        $configuration = $this->_parent->requestConfigurationFactory->create($this->_parent->metadata, $request);

        $this->_parent->isGrantedOr403($configuration, CartActions::ADD);
        /** @var \Sylius\Component\Order\Model\OrderItemInterface $orderItem */
        $orderItem = $this->_parent->newResourceFactory->create($configuration, $this->_parent->factory);

        $this->getQuantityModifier()->modify($orderItem, 1);

        $form = $this->getFormFactory()->create(
            $configuration->getFormType(),
            $this->createAddToCartCommand($cart, $orderItem),
            $configuration->getFormOptions()
        );

        if ($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
            /** @var AddToCartCommandInterface $addToCartCommand */
            $addToCartCommand = $form->getData();

            $errors = $this->getCartItemErrors($addToCartCommand->getCartItem());
            if (0 < count($errors)) {
                $form = $this->getAddToCartFormWithErrors($errors, $form);

                return $this->handleBadAjaxRequestView($configuration, $form);
            }

            // Check if product qty in cart is already greater than the limit
            $message = $this->checkProductQtyInCart($addToCartCommand);
            if ($message !== '') {
                return $this->redirectToProductPage($addToCartCommand, $request, $message);
            }

            $event = $this->_parent->eventDispatcher->dispatchPreEvent(CartActions::ADD, $configuration, $orderItem);

            if ($event->isStopped() && !$configuration->isHtmlRequest()) {
                throw new HttpException($event->getErrorCode(), $event->getMessage());
            }
            if ($event->isStopped()) {
                $this->_parent->flashHelper->addFlashFromEvent($configuration, $event);

                return $this->_parent->redirectHandler->redirectToIndex($configuration, $orderItem);
            }

            $this->getOrderModifier()->addToOrder($addToCartCommand->getCart(), $addToCartCommand->getCartItem());

            $cartManager = $this->getCartManager();
            $cartManager->persist($cart);
            $cartManager->flush();

            $resourceControllerEvent = $this->_parent->eventDispatcher->dispatchPostEvent(CartActions::ADD, $configuration, $orderItem);
            if ($resourceControllerEvent->hasResponse()) {
                return $resourceControllerEvent->getResponse();
            }

            $this->_parent->flashHelper->addSuccessFlash($configuration, CartActions::ADD, $orderItem);

            if ($request->isXmlHttpRequest()) {
                return $this->_parent->viewHandler->handle($configuration, View::create([], Response::HTTP_CREATED));
            }

            return $this->_parent->redirectHandler->redirectToResource($configuration, $orderItem);
        }


        if (!$configuration->isHtmlRequest()) {
            $message = $this->checkProductQtyInCart($form->getData());
            if ($message === '' && count($form->getErrors()) > 0) {
                $message = $form->getErrors()[0]->getMessage();
            }

            return $this->redirectToProductPage($form->getData(), $request, $message);
        }

        $view = View::create()
            ->setData([
                'configuration' => $configuration,
                $this->_parent->metadata->getName() => $orderItem,
                'form' => $form->createView(),
            ])
            ->setTemplate($configuration->getTemplate(CartActions::ADD . '.html'))
        ;

        return $this->_parent->viewHandler->handle($configuration, $view);
    }

    public function removeAction(Request $request): Response
    {
        $configuration = $this->_parent->requestConfigurationFactory->create($this->_parent->metadata, $request);

        $this->_parent->isGrantedOr403($configuration, CartActions::REMOVE);
        /** @var \Sylius\Component\Order\Model\OrderItemInterface $orderItem */
        $orderItem = $this->_parent->findOr404($configuration);

        $event = $this->_parent->eventDispatcher->dispatchPreEvent(CartActions::REMOVE, $configuration, $orderItem);

        if ($configuration->isCsrfProtectionEnabled() && !$this->_parent->isCsrfTokenValid((string) $orderItem->getId(), $request->request->get('_csrf_token'))) {
            throw new HttpException(Response::HTTP_FORBIDDEN, 'Invalid csrf token.');
        }

        if ($event->isStopped() && !$configuration->isHtmlRequest()) {
            throw new HttpException($event->getErrorCode(), $event->getMessage());
        }
        if ($event->isStopped()) {
            $this->_parent->flashHelper->addFlashFromEvent($configuration, $event);

            return $this->_parent->redirectHandler->redirectToIndex($configuration, $orderItem);
        }

        $cart = $this->getCurrentCart();
        if ($cart !== $orderItem->getOrder()) {
            $this->addFlash('error', $this->get('translator')->trans('sylius.cart.cannot_modify', [], 'flashes'));

            if (!$configuration->isHtmlRequest()) {
                return $this->_parent->viewHandler->handle($configuration, View::create(null, Response::HTTP_NO_CONTENT));
            }

            return $this->_parent->redirectHandler->redirectToIndex($configuration, $orderItem);
        }

        $this->getOrderModifier()->removeFromOrder($cart, $orderItem);

        //$this->_parent->repository->remove($orderItem);

        $cartManager = $this->getCartManager();
        $cartManager->persist($cart);
        $cartManager->flush();

        $this->_parent->eventDispatcher->dispatchPostEvent(CartActions::REMOVE, $configuration, $orderItem);


        if (!$configuration->isHtmlRequest()) {
            return $this->_parent->viewHandler->handle($configuration, View::create(null, Response::HTTP_NO_CONTENT));
        }

        $this->_parent->flashHelper->addSuccessFlash($configuration, CartActions::REMOVE, $orderItem);

        return new Response();
    }

    private function checkProductQtyInCart($data): string
    {
        $qtyAdded = 1;
        /** @var OrderItemInterface $item */
        $item = $data->getCartItem();
        $productVariant = $item->getVariant();
        $calculatedMaxQty = $productVariant->getOnHand() - $productVariant->getOnHold();
        if ($calculatedMaxQty > Product::MAX_QTY_IN_CART) {
            $calculatedMaxQty = Product::MAX_QTY_IN_CART;
        }

        foreach ($data->getCart()->getItems() as $existingItem) {
            if ($item->equals($existingItem) && $existingItem->getQuantity() + $qtyAdded > $calculatedMaxQty) {
                return 'sylius.form.bag.limit_in_cart_reached';
            }
        }
        return '';
    }

    /**
     * Redirect to product page when form contains errors
     *
     * @param $data
     * @param Request $request
     * @param string $message
     * @return RedirectResponse
     */
    private function redirectToProductPage($data, Request $request, string $message): RedirectResponse
    {
        $this->session->set('selectedVariant', $data->getCartItem()->getVariant()->getOptionValues()[0]);
        $this->addFlash('error', $this->get('translator')->trans($message));
        return $this->redirect($request->headers->get('referer'));
    }

    protected function getCurrentCart(): OrderInterface
    {
        return $this->getContext()->getCart();
    }

    protected function getContext(): CartContextInterface
    {
        return $this->get('sylius.context.cart');
    }

    protected function createAddToCartCommand(OrderInterface $cart, \Sylius\Component\Order\Model\OrderItemInterface $cartItem): AddToCartCommandInterface
    {
        return $this->get('sylius.factory.add_to_cart_command')->createWithCartAndCartItem($cart, $cartItem);
    }

    protected function getFormFactory(): FormFactoryInterface
    {
        return $this->get('form.factory');
    }

    protected function getQuantityModifier(): OrderItemQuantityModifierInterface
    {
        return $this->get('sylius.order_item_quantity_modifier');
    }

    protected function getOrderModifier(): OrderModifierInterface
    {
        return $this->get('sylius.order_modifier');
    }

    protected function getCartManager(): EntityManagerInterface
    {
        return $this->get('sylius.manager.order');
    }

    protected function getCartItemErrors(OrderItemInterface $orderItem): ConstraintViolationListInterface
    {
        return $this
            ->get('validator')
            ->validate($orderItem, null, $this->getParameter('sylius.form.type.order_item.validation_groups'))
            ;
    }

    protected function getAddToCartFormWithErrors(ConstraintViolationListInterface $errors, FormInterface $form): FormInterface
    {
        foreach ($errors as $error) {
            $form->get('cartItem')->get($error->getPropertyPath())->addError(new FormError($error->getMessage()));
        }

        return $form;
    }

    protected function handleBadAjaxRequestView(RequestConfiguration $configuration, FormInterface $form): Response
    {
        return $this->_parentviewHandler->handle(
            $configuration,
            View::create($form, Response::HTTP_BAD_REQUEST)->setData(['errors' => $form->getErrors(true, true)])
        );
    }

}
