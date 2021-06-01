<?php

declare(strict_types=1);

namespace App\Controller\BitBag;

use App\Entity\Product\Product;
use App\Component\ProductBundle\AddProductBundleToCartCommand;
use App\Entity\Product\ProductVariant;
use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Persistence\ObjectManager;
use FOS\RestBundle\View\View;
use Sylius\Bundle\OrderBundle\Controller\OrderItemController as BaseOrderItemController;
use Sylius\Bundle\ResourceBundle\Controller;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\CartActions;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Metadata\MetadataInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
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

    /** @var EngineInterface */
    protected $templatingEngine;

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
        SessionInterface $session,
        EngineInterface $templatingEngine
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
        $this->templatingEngine = $templatingEngine;
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
            // If bundle with selected variants is in cart and reach the quantity limit, display error message
            $productOutOfStockId = $this->checkProductQtyInCart($form->getData()->getProductBundleItems());
            if ($productOutOfStockId !== null) {
                $response = [
                    'message' => $this->container->get('translator')->trans('sylius.form.bag.limit_in_cart_reached'),
                    'product_id' => $productOutOfStockId
                ];

                return new Response(json_encode($response), 500);
            }

            $newAddBundleToCart = new AddProductBundleToCartCommand($cart, $orderItem, $product, $form->getData()->getProductBundleItems());
            return $this->handleForm($form, $configuration, $orderItem, $request, $newAddBundleToCart, $cart);
        }

        if (!$configuration->isHtmlRequest()) {
            $productOutOfStockId = $this->checkProductQtyInCart($form->getData()->getProductBundleItems());
            $message = '';
            if ($productOutOfStockId === null && count($form->getErrors()) > 0) {
                $message = $form->getErrors()[0]->getMessage();
            }

            $response = [
                'message' => $this->container->get('translator')->trans($message)
            ];

            return new Response(json_encode($response), 500);
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
        AddProductBundleToCartCommand $addProductBundleToCartCommand,
        OrderInterface $cart): ?Response
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

        if ($request->isXmlHttpRequest()) {
            $template = '@SyliusShop/Cart/Summary/Ajax/items.html.twig';
            return $this->templatingEngine->renderResponse($template, [
                'items' => $cart->getItems(),
                'newItem' => $this->getCartItem($cart, $orderItem),
                'subtotal' => $cart->getItemsTotal()
            ]);
        }

        return $this->redirectHandler->redirectToResource($configuration, $orderItem);
    }

    private function checkProductQtyInCart(array $dataProductBundleItems): ?int
    {
        $cart = $this->getCurrentCart();

        foreach ($cart->getItems() as $existingItem) {
            if ($existingItem->getProduct()->isBundle()
                && $this->checkBundleVariants($dataProductBundleItems, $existingItem->getProductBundleOrderItems())) {
                return $this->maxBundleQtyInCartIsReached($dataProductBundleItems, $existingItem);
            }
        }
        return null;
    }

    /**
     * Check if bundle products are in stock
     *
     * @param array $bundleItems
     * @param OrderItemInterface $existingItem
     * @return mixed
     */
    private function maxBundleQtyInCartIsReached(array $bundleItems, OrderItemInterface $existingItem): ?int
    {
        $qtyAdded = 1;
        $bundleItemsMaxQty = 0;
        foreach($bundleItems as $key => $item) {
            $calculatedMaxQty = Product::MAX_QTY_IN_CART;
            if ($calculatedMaxQty > (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold())) {
                $calculatedMaxQty = (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold());
            }
            if ($calculatedMaxQty < Product::MAX_QTY_IN_CART && $existingItem->getQuantity() + $qtyAdded > $calculatedMaxQty) {
                return $item->getProductVariant()->getProduct()->getId();
            } elseif ($calculatedMaxQty == Product::MAX_QTY_IN_CART && $existingItem->getQuantity() + $qtyAdded > $calculatedMaxQty) {
                $bundleItemsMaxQty++;
            }
        }

        return $bundleItemsMaxQty == count($bundleItems) ? 0 : null;
    }

    private function getCartItem(OrderInterface $cart, OrderItemInterface $orderItem): OrderItemInterface
    {
        foreach($cart->getItems() as $cartItem) {
            if ($cartItem->getId() === $orderItem->getId()
                || ($cartItem->getProduct()->isBundle() && $this->checkBundleVariants($cartItem->getProductBundleOrderItems()->toArray(), $orderItem->getProductBundleOrderItems()))) {
                return $cartItem;
            }
        }
    }

    private function checkBundleVariants(array $cartProductBundleOrderItems, ArrayCollection $newCartProductBundleOrderItems): bool
    {
        $allTheSame = 0;
        foreach($cartProductBundleOrderItems as $key => $bundleOrderItem) {
            /** @var ProductVariant $bundleOrderItemVariant */
            $bundleOrderItemVariant = $bundleOrderItem->getProductVariant();
            if ($bundleOrderItemVariant === $newCartProductBundleOrderItems[$key]->getProductVariant()) {
                $allTheSame++;
            }
        }

        return $allTheSame > 0 && $allTheSame == count($cartProductBundleOrderItems);
    }
}
