<?php

declare(strict_types=1);

namespace App\Controller\BitBag;

use App\Entity\Order\Order;
use App\Entity\Product\Product;
use App\Component\ProductBundle\AddProductBundleToCartCommand;
use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Doctrine\Common\Persistence\ObjectManager;
use FOS\RestBundle\View\View;
use Sylius\Bundle\OrderBundle\Controller\AddToCartCommandInterface;
use Sylius\Bundle\OrderBundle\Controller\OrderItemController as BaseOrderItemController;
use Sylius\Bundle\ResourceBundle\Controller;
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
        $this->session = $session;
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
            // If bundle with selected variants is in cart and reach the quantity limit, redirect to product page
            $message = $this->checkProductQtyInCart($form->getData());
            if ($message !== '') {
                return $this->redirectToProductPage($form->getData(), $request, $message);
            }

            $newAddBundleToCart = new AddProductBundleToCartCommand($cart, $orderItem, $product, $form->getData()->getProductBundleItems());
            return $this->handleForm($form, $configuration, $orderItem, $request, $newAddBundleToCart);
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

    private function handleForm(
        FormInterface $form,
        Controller\RequestConfiguration $configuration,
        OrderItemInterface $orderItem,
        Request $request,
        AddProductBundleToCartCommand $addProductBundleToCartCommand): ?Response
    {
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

    private function checkProductQtyInCart($data): string
    {
        $qtyAdded = 1;
        /** @var OrderItemInterface $item */
        $item = $data->getCartItem();

        foreach ($data->getCart()->getItems() as $existingItem) {
            if ($this->checkBundleQtyInCart($data->getProductBundleItems(), $existingItem, $qtyAdded)) {
                return 'sylius.ui.limit_in_cart_reached';
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
        $selectedVariant = [];
        foreach($data->getProductBundleItems() as $item) {
            $selectedVariant[$item->getProductVariant()->getId()] = $item->getProductVariant()->getOptionValues()[0];
        }
        $this->session->set('selectedVariant', $selectedVariant);
        $this->addFlash('error', $this->get('translator')->trans($message));
        return $this->redirect($request->headers->get('referer'));
    }

}
