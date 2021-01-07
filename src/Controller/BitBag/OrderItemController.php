<?php

declare(strict_types=1);

namespace App\Controller\BitBag;

use BitBag\SyliusProductBundlePlugin\Command\AddProductBundleToCartCommand;
use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Doctrine\Common\Persistence\ObjectManager;
use FOS\RestBundle\View\View;
use Sylius\Bundle\OrderBundle\Controller\OrderItemController as BaseOrderItemController;
use Sylius\Bundle\ResourceBundle\Controller;
use Sylius\Component\Core\Factory\CartItemFactory;
use Sylius\Component\Order\CartActions;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Metadata\MetadataInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Messenger\MessageBusInterface;

class OrderItemController extends BaseOrderItemController
{
    /** @var MessageBusInterface */
    protected $messageBus;

    /** @var CartItemFactory */
    protected $cartItemFactory;

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
        CartItemFactory $cartItemFactory
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
            return $this->handleBadAjaxRequestView($configuration, $form);
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
}
