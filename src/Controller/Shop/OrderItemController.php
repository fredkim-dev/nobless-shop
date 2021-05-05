<?php

declare(strict_types=1);

namespace App\Controller\Shop;

use App\Entity\Order\Order;
use App\Entity\Product\Product;
use BitBag\SyliusProductBundlePlugin\Command\AddProductBundleToCartCommand;
use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Doctrine\Common\Persistence\ObjectManager;
use FOS\RestBundle\View\View;
use Sylius\Bundle\OrderBundle\Controller\AddToCartCommandInterface;
use Sylius\Bundle\OrderBundle\Controller\OrderItemController as BaseOrderItemController;
use Sylius\Bundle\ResourceBundle\Controller;
use Sylius\Component\Core\Factory\CartItemFactory;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\CartActions;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Metadata\MetadataInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Messenger\MessageBusInterface;

class OrderItemController extends BaseOrderItemController
{
    /** @var MessageBusInterface */
    protected $messageBus;

    /** @var CartItemFactory */
    protected $cartItemFactory;

    /** @var SessionInterface */
    protected $session;

    public function __construct(
        MetadataInterface $metadata,
        Controller\RequestConfigurationFactoryInterface $requestConfigurationFactory,
        Controller\ViewHandlerInterface $viewHandler,
        RepositoryInterface $repository,
        FactoryInterface $factory,
        Controller\NewResourceFactoryInterface $newResourceFactory,
        ObjectManager $manager,
        Controller\SingleResourceProviderInterface $singleResourceProvider,
        Controller\ResourcesCollectionProviderInterface $resourcesFinder,
        Controller\ResourceFormFactoryInterface $resourceFormFactory,
        Controller\RedirectHandlerInterface $redirectHandler,
        Controller\FlashHelperInterface $flashHelper,
        Controller\AuthorizationCheckerInterface $authorizationChecker,
        Controller\EventDispatcherInterface $eventDispatcher,
        Controller\StateMachineInterface $stateMachine,
        Controller\ResourceUpdateHandlerInterface $resourceUpdateHandler,
        Controller\ResourceDeleteHandlerInterface $resourceDeleteHandler,
        MessageBusInterface $messageBus,
        CartItemFactory $cartItemFactory,
        SessionInterface $session
    ) {
        parent::__construct(
            $metadata,
            $requestConfigurationFactory,
            $viewHandler,
            $repository,
            $factory,
            $newResourceFactory,
            $manager,
            $singleResourceProvider,
            $resourcesFinder,
            $resourceFormFactory,
            $redirectHandler,
            $flashHelper,
            $authorizationChecker,
            $eventDispatcher,
            $stateMachine,
            $resourceUpdateHandler,
            $resourceDeleteHandler
        );

        $this->messageBus = $messageBus;
        $this->cartItemFactory = $cartItemFactory;
        $this->session = $session;
    }

    public function addAction(Request $request): Response
    {
        $cart = $this->getCurrentCart();
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

        $this->isGrantedOr403($configuration, CartActions::ADD);
        /** @var \Sylius\Component\Order\Model\OrderItemInterface $orderItem */
        $orderItem = $this->newResourceFactory->create($configuration, $this->factory);

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

            $event = $this->eventDispatcher->dispatchPreEvent(CartActions::ADD, $configuration, $orderItem);

            if ($event->isStopped() && !$configuration->isHtmlRequest()) {
                throw new HttpException($event->getErrorCode(), $event->getMessage());
            }
            if ($event->isStopped()) {
                $this->flashHelper->addFlashFromEvent($configuration, $event);

                return $this->redirectHandler->redirectToIndex($configuration, $orderItem);
            }

            $this->getOrderModifier()->addToOrder($addToCartCommand->getCart(), $addToCartCommand->getCartItem());

            $cartManager = $this->getCartManager();
            $cartManager->persist($cart);
            $cartManager->flush();

            $resourceControllerEvent = $this->eventDispatcher->dispatchPostEvent(CartActions::ADD, $configuration, $orderItem);
            if ($resourceControllerEvent->hasResponse()) {
                return $resourceControllerEvent->getResponse();
            }

            $this->flashHelper->addSuccessFlash($configuration, CartActions::ADD, $orderItem);

            if ($request->isXmlHttpRequest()) {
                return $this->viewHandler->handle($configuration, View::create([], Response::HTTP_CREATED));
            }

            return $this->redirectHandler->redirectToResource($configuration, $orderItem);
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
                $this->metadata->getName() => $orderItem,
                'form' => $form->createView(),
            ])
            ->setTemplate($configuration->getTemplate(CartActions::ADD . '.html'))
        ;

        return $this->viewHandler->handle($configuration, $view);
    }

    public function addProductBundleAction(Request $request): Response
    {
        $cart = $this->getCurrentCart();
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

        $this->isGrantedOr403($configuration, CartActions::ADD);

        /** @var OrderItemInterface $orderItem */
        $orderItem = $this->newResourceFactory->create($configuration, $this->factory);

        $this->getQuantityModifier()->modify($orderItem, 1);

        /** @var ProductInterface $product */
        $product = $orderItem->getProduct();

        $form = $this->getFormFactory()->create(
            $configuration->getFormType(),
            new AddProductBundleToCartCommand($cart, $orderItem, $product),
            $configuration->getFormOptions()
        );

        if ($request->isMethod(Request::METHOD_POST) && $form->handleRequest($request)->isValid()) {
            // Check if product qty in cart is already greater than the limit
            /** @var AddToCartCommandInterface $addToCartCommand */
            $addToCartCommand = $form->getData();
            $message = $this->checkProductQtyInCart($addToCartCommand);
            if ($message !== '') {
                return $this->redirectToProductPage($addToCartCommand, $request, $message, true);
            }

            if(!$this->checkIfBundleIsInCart($cart, $form->getData())) {
                $newOrderItem = $this->cartItemFactory->createForProduct($product);
                $this->getQuantityModifier()->modify($newOrderItem, 1);
                $newForm = $this->getFormFactory()->create(
                    $configuration->getFormType(),
                    new AddProductBundleToCartCommand($cart, $newOrderItem, $product),
                    $configuration->getFormOptions()
                );

                return $this->handleForm($newForm, $configuration, $newOrderItem, $request, new AddProductBundleToCartCommand($cart, $newOrderItem, $product));
            }
            return $this->handleForm($form, $configuration, $orderItem, $request);
        }

        if (!$configuration->isHtmlRequest()) {
            $message = $this->checkProductQtyInCart($form->getData());
            if ($message === '' && count($form->getErrors()) > 0) {
                $message = $form->getErrors()[0]->getMessage();
            }

            return $this->redirectToProductPage($form->getData(), $request, $message, true);
        }

        $view = View::create()
            ->setData([
                'configuration' => $configuration,
                $this->metadata->getName() => $orderItem,
                'form' => $form->createView(),
            ])
            ->setTemplate($configuration->getTemplate(CartActions::ADD . '.html'))
        ;

        return $this->viewHandler->handle($configuration, $view);
    }

    private function handleForm(
        FormInterface $form,
        Controller\RequestConfiguration $configuration,
        OrderItemInterface $orderItem,
        Request $request,
        AddProductBundleToCartCommand $addProductBundleToCartCommand = null): ?Response
    {
        if ($addProductBundleToCartCommand === null) {
            /** @var AddProductBundleToCartCommand $addProductBundleToCartCommand */
            $addProductBundleToCartCommand = $form->getData();
        }

        $errors = $this->getCartItemErrors($orderItem);
        if (0 < count($errors)) {
            $form = $this->getAddToCartFormWithErrors($errors, $form);

            return $this->handleBadAjaxRequestView($configuration, $form);
        }
        $event = $this->eventDispatcher->dispatchPreEvent(CartActions::ADD, $configuration, $orderItem);
        if ($event->isStopped() && !$configuration->isHtmlRequest()) {
            throw new HttpException($event->getErrorCode(), $event->getMessage());
        }
        if ($event->isStopped()) {
            $this->flashHelper->addFlashFromEvent($configuration, $event);

            return $this->redirectHandler->redirectToIndex($configuration, $orderItem);
        }
        $this->messageBus->dispatch($addProductBundleToCartCommand);
        $resourceControllerEvent = $this->eventDispatcher->dispatchPostEvent(CartActions::ADD, $configuration, $orderItem);
        if ($resourceControllerEvent->hasResponse()) {
            return $resourceControllerEvent->getResponse();
        }
        $this->flashHelper->addSuccessFlash($configuration, CartActions::ADD, $orderItem);

        if ($request->isXmlHttpRequest()) {
            $response = $this->viewHandler->handle($configuration, View::create([], Response::HTTP_CREATED));
        } else {
            $response = $this->redirectHandler->redirectToResource($configuration, $orderItem);
        }

        return $response;
    }

    private function checkIfBundleIsInCart($cart, $formData): bool
    {
        $existingProductVariant = [];
        foreach($cart->getItems() as $cartItem) {
            if ($cartItem->getVariant()->getCode() === $formData->getProduct()->getCode()) {
                foreach($cartItem->getProductBundleOrderItems() as $bundleOrderItem) {
                    $existingProductVariant[] = $bundleOrderItem->getProductBundleItem()->getProductVariant()->getCode();
                }
            }
        }

        $countSameVariant = 0;
        foreach($formData->getProductBundleItems() as $productBundleItem) {
            if(in_array($productBundleItem->getProductVariant()->getCode(), $existingProductVariant)) {
                $countSameVariant++;
            }
        }

        return $countSameVariant === count($formData->getProductBundleItems()) ?? false;
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
            $isBundle = $productVariant->getProduct()->isBundle();
            if ($item->equals($existingItem)) {
                if (($isBundle && $this->checkBundleQtyInCart($data->getProductBundleItems(), $existingItem, $qtyAdded))
                    || (!$isBundle && $existingItem->getQuantity() + $qtyAdded > $calculatedMaxQty)) {
                        return 'sylius.ui.limit_in_cart_reached';
                }
                return '';
            }
        }
        return '';
    }

    /**
     * Check if bundle products are in stock, redirect to product page if not
     *
     * @param array $bundleItems
     * @param OrderItemInterface $existingItem
     * @param int $qtyAdded
     * @return bool
     */
    private function checkBundleQtyInCart(array $bundleItems, OrderItemInterface $existingItem, int $qtyAdded) : bool
    {
        foreach($bundleItems as $key => $item) {
            $calculatedMaxQty = Product::MAX_QTY_IN_CART;
            if ($calculatedMaxQty > (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold())) {
                $calculatedMaxQty = (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold());
            }
            if ($existingItem->getQuantity() + $qtyAdded > $calculatedMaxQty) {
                return true;
            }
        }

        return false;
    }

    /**
     * Redirect to product page when form contains errors
     *
     * @param $data
     * @param Request $request
     * @param string $message
     * @param bool $isBundle
     * @return RedirectResponse
     */
    private function redirectToProductPage($data, Request $request, string $message, bool $isBundle = false): RedirectResponse
    {
        if (!$isBundle) {
            $selectedVariant = $data->getCartItem()->getVariant()->getOptionValues()[0];
        } else {
            $selectedVariant = [];
            foreach($data->getProductBundleItems() as $item) {
                $selectedVariant[$item->getProductVariant()->getId()] = $item->getProductVariant()->getOptionValues()[0];
            }
        }
        $this->session->set('selectedVariant', $selectedVariant);
        $this->addFlash('error', $this->get('translator')->trans($message));
        return $this->redirect($request->headers->get('referer'));
    }

}
