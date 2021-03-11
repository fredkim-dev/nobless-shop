<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace App\Controller\Shop;

use App\Entity\Addressing\Address;
use App\Entity\Customer\Customer;
use App\Entity\Order\Order;
use Doctrine\Common\Persistence\ObjectManager;
use Sylius\Bundle\CoreBundle\Controller\OrderController as BaseOrderController;
use FOS\RestBundle\View\View;
use Sylius\Bundle\ResourceBundle\Controller\AuthorizationCheckerInterface;
use Sylius\Bundle\ResourceBundle\Controller\FlashHelperInterface;
use Sylius\Bundle\ResourceBundle\Controller\NewResourceFactoryInterface;
use Sylius\Bundle\ResourceBundle\Controller\RedirectHandlerInterface;
use Sylius\Bundle\ResourceBundle\Controller\RequestConfiguration;
use Sylius\Bundle\ResourceBundle\Controller\RequestConfigurationFactoryInterface;
use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Sylius\Bundle\ResourceBundle\Controller\ResourceDeleteHandlerInterface;
use Sylius\Bundle\ResourceBundle\Controller\ResourceFormFactoryInterface;
use Sylius\Bundle\ResourceBundle\Controller\ResourcesCollectionProviderInterface;
use Sylius\Bundle\ResourceBundle\Controller\ResourceUpdateHandlerInterface;
use Sylius\Bundle\ResourceBundle\Controller\SingleResourceProviderInterface;
use Sylius\Bundle\ResourceBundle\Controller\StateMachineInterface;
use Sylius\Bundle\ResourceBundle\Controller\ViewHandlerInterface;
use Sylius\Bundle\ResourceBundle\Event\ResourceControllerEvent;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Sylius\Component\Order\Repository\OrderRepositoryInterface;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Metadata\MetadataInterface;
use Sylius\Component\Resource\Model\ResourceInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\Component\Resource\ResourceActions;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class OrderController extends ResourceController
{
    /**
     * @var BaseOrderController
     */
    protected $_parent;

    public function __construct(BaseOrderController $baseOrderController)
    {
        $this->_parent = $baseOrderController;
    }

    /**
     * Save Address in User Account and in Order Entity during Checkout, Ajax Style
     *
     * @param Request $request
     * @return Response
     */
    public function saveAddressInAccountAction(Request $request): Response
    {
        $configuration = $this->_parent->requestConfigurationFactory->create($this->_parent->metadata, $request);

        $this->_parent->isGrantedOr403($configuration, ResourceActions::UPDATE);
        $order = $this->_parent->findOr404($configuration);

        $form = $this->_parent->resourceFormFactory->create($configuration, $order);

        if (in_array($request->getMethod(), ['POST', 'PUT', 'PATCH'], true)) {
            if ($form->handleRequest($request)->isValid()) {
                /**
                 * @var Order $order
                 */
                $order = $form->getData();

                $newAddress = $this->createNewAddress($order, $request->request->get('address_type'));
                /**
                 * @var Customer $customer
                 */
                $customer = $order->getCustomer();
                $customer->addAddress($newAddress);

                $this->container->get('sylius.manager.customer')->flush();

                return $this->saveOrder($form, $configuration);
            }
        }

        return $this->showResponse($request, $order, $form, $configuration);
    }

    public function updateAction(Request $request): Response
    {
        $configuration = $this->_parent->requestConfigurationFactory->create($this->_parent->metadata, $request);

        $this->_parent->isGrantedOr403($configuration, ResourceActions::UPDATE);
        $resource = $this->_parent->findOr404($configuration);

        $form = $this->_parent->resourceFormFactory->create($configuration, $resource);
        $formSaveAccount = $this->_parent->resourceFormFactory->create($configuration, $resource);
        $customIds = [
            'shipping_firstname' => 'save_shipping_firstname',
            'shipping_lastname' => 'save_shipping_lastname',
            'shipping_street' => 'save_shipping_street',
            'shipping_street2' => 'save_shipping_street2',
            'shipping_countrycode' => 'save_shipping_countryCode',
            'shipping_city' => 'save_shipping_city',
            'shipping_postcode' => 'save_shipping_postcode',
            'billing_firstname' => 'save_billing_firstname',
            'billing_lastname' => 'save_billing_lastname',
            'billing_street' => 'save_billing_street',
            'billing_street2' => 'save_billing_street2',
            'billing_countrycode' => 'save_billing_countryCode',
            'billing_city' => 'save_billing_city',
            'billing_postcode' => 'save_billing_postcode',
        ];

        if (in_array($request->getMethod(), ['POST', 'PUT', 'PATCH'], true) && $form->handleRequest($request)->isValid()) {
            $resource = $form->getData();

            /** @var ResourceControllerEvent $event */
            $event = $this->_parent->eventDispatcher->dispatchPreEvent(ResourceActions::UPDATE, $configuration, $resource);

            if ($event->isStopped() && !$configuration->isHtmlRequest()) {
                throw new HttpException($event->getErrorCode(), $event->getMessage());
            }
            if ($event->isStopped()) {
                $this->_parent->flashHelper->addFlashFromEvent($configuration, $event);

                $eventResponse = $event->getResponse();
                if (null !== $eventResponse) {
                    return $eventResponse;
                }

                return $this->_parent->redirectHandler->redirectToResource($configuration, $resource);
            }

            try {
                $this->_parent->resourceUpdateHandler->handle($resource, $configuration, $this->_parent->manager);
            } catch (UpdateHandlingException $exception) {
                if (!$configuration->isHtmlRequest()) {
                    return $this->_parent->viewHandler->handle(
                        $configuration,
                        View::create($form, $exception->getApiResponseCode())
                    );
                }

                $this->_parent->flashHelper->addErrorFlash($configuration, $exception->getFlash());

                return $this->_parent->redirectHandler->redirectToReferer($configuration);
            }

            if ($configuration->isHtmlRequest()) {
                $this->_parent->flashHelper->addSuccessFlash($configuration, ResourceActions::UPDATE, $resource);
            }

            $postEvent = $this->_parent->eventDispatcher->dispatchPostEvent(ResourceActions::UPDATE, $configuration, $resource);

            if (!$configuration->isHtmlRequest()) {
                $view = $configuration->getParameters()->get('return_content', false) ? View::create($resource, Response::HTTP_OK) : View::create(null, Response::HTTP_NO_CONTENT);

                return $this->_parent->viewHandler->handle($configuration, $view);
            }

            $postEventResponse = $postEvent->getResponse();
            if (null !== $postEventResponse) {
                return $postEventResponse;
            }

            return $this->_parent->redirectHandler->redirectToResource($configuration, $resource);
        }

        if (!$configuration->isHtmlRequest()) {
            return $this->_parent->viewHandler->handle($configuration, View::create($form, Response::HTTP_BAD_REQUEST));
        }

        $initializeEvent = $this->_parent->eventDispatcher->dispatchInitializeEvent(ResourceActions::UPDATE, $configuration, $resource);
        $initializeEventResponse = $initializeEvent->getResponse();
        if (null !== $initializeEventResponse) {
            return $initializeEventResponse;
        }

        $view = View::create()
            ->setData([
                'configuration' => $configuration,
                'metadata' => $this->_parent->metadata,
                'resource' => $resource,
                $this->_parent->metadata->getName() => $resource,
                'form' => $form->createView(),
                'formSave' => $formSaveAccount->createView(),
                'ids' => $customIds,
            ])
            ->setTemplate($configuration->getTemplate(ResourceActions::UPDATE . '.html'))
        ;

        return $this->_parent->viewHandler->handle($configuration, $view);
    }

    public function widgetAction(Request $request): Response
    {
        return $this->_parent->widgetAction($request);
    }

    private function getSyliusAttribute(Request $request, string $attribute, $default = null)
    {
        $attributes = $request->attributes->get('_sylius');

        return $attributes[$attribute] ?? $default;
    }

    protected function getCartSummaryRoute(): string
    {
        return 'sylius_cart_summary';
    }

    protected function getCurrentCart(): OrderInterface
    {
        return $this->getContext()->getCart();
    }

    protected function getContext(): CartContextInterface
    {
        return $this->get('sylius.context.cart');
    }

    protected function getOrderRepository(): OrderRepositoryInterface
    {
        return $this->get('sylius.repository.order');
    }

    protected function getEventDispatcher(): EventDispatcherInterface
    {
        return $this->container->get('event_dispatcher');
    }

    /**
     * Save Order Entity in ajax calls
     *
     * @param FormInterface $form
     * @param RequestConfiguration $configuration
     * @return Response
     */
    protected function saveOrder(FormInterface $form, RequestConfiguration $configuration): Response
    {
        $order = $form->getData();

        /** @var ResourceControllerEvent $event */
        $event = $this->_parent->eventDispatcher->dispatchPreEvent(ResourceActions::UPDATE, $configuration, $order);

        if ($event->isStopped() && !$configuration->isHtmlRequest()) {
            throw new HttpException($event->getErrorCode(), $event->getMessage());
        }

        if ($event->isStopped()) {
            $eventResponse = $event->getResponse();
            if (null !== $eventResponse) {
                return $eventResponse;
            }

            return $this->_parent->redirectHandler->redirectToResource($configuration, $order);
        }

        try {
            $this->_parent->resourceUpdateHandler->handle($order, $configuration, $this->_parent->manager);
        } catch (UpdateHandlingException $exception) {
            if (!$configuration->isHtmlRequest()) {
                return $this->_parent->viewHandler->handle(
                    $configuration,
                    View::create($form, $exception->getApiResponseCode())
                );
            }

            return $this->_parent->redirectHandler->redirectToReferer($configuration);
        }

        $this->_parent->eventDispatcher->dispatchPostEvent(ResourceActions::UPDATE, $configuration, $order);

        return $this->container->get('templating')->renderResponse(
            '@SyliusShop/Checkout/Address/Save/dataSaved.html.twig',
            [
                'shipping' => $form->getViewData()->getShippingAddress(),
                'billing' => $form->getViewData()->getBillingAddress()
            ]
        );
    }

    /**
     * Response from ajax calls
     *
     * @param Request $request
     * @param ResourceInterface $order
     * @param FormInterface $form
     * @param RequestConfiguration $configuration
     * @return Response
     */
    protected function showResponse(Request $request, ResourceInterface $order, FormInterface $form, RequestConfiguration $configuration): Response
    {
        if (!$configuration->isHtmlRequest()) {
            return $this->_parent->viewHandler->handle($configuration, View::create($form, Response::HTTP_BAD_REQUEST));
        }

        $initializeEvent = $this->_parent->eventDispatcher->dispatchInitializeEvent(ResourceActions::UPDATE, $configuration, $order);
        $initializeEventResponse = $initializeEvent->getResponse();
        if (null !== $initializeEventResponse) {
            return $initializeEventResponse;
        }

        if ($request->isXMLHttpRequest()) {
            $customIds = [
                'shipping_firstname' => 'save_shipping_firstname',
                'shipping_lastname' => 'save_shipping_lastname',
                'shipping_street' => 'save_shipping_street',
                'shipping_street2' => 'save_shipping_street2',
                'shipping_countrycode' => 'save_shipping_countryCode',
                'shipping_city' => 'save_shipping_city',
                'shipping_postcode' => 'save_shipping_postcode',
                'billing_firstname' => 'save_billing_firstname',
                'billing_lastname' => 'save_billing_lastname',
                'billing_street' => 'save_billing_street',
                'billing_street2' => 'save_billing_street2',
                'billing_countrycode' => 'save_billing_countryCode',
                'billing_city' => 'save_billing_city',
                'billing_postcode' => 'save_billing_postcode',
            ];

            $html = $this->container->get('templating')->renderResponse(
                '@SyliusShop/Checkout/Address/_saveAddressNavigation.html.twig',
                [
                    'form' => $form->createView(),
                    'order' => $order,
                    'ids' => $customIds
                ]
            );

            return new Response($html, 400);
        }

        return $this->container->get('templating')->renderResponse(
            '@SyliusShop/Checkout/Address/_saveAddressNavigation.html.twig',
            [
                'form' => $form->createView(),
                'order' => $order
            ]
        );
    }

    /**
     * create new Address to Save in Customer Account
     *
     * @param Order $order
     * @param string $addressType
     * @return Address
     */
    protected function createNewAddress(Order $order, string $addressType): Address
    {
        /**
         * @var Address $addressToSave
         */
        $addressToSave = $order->{'get' . $addressType . 'Address'}();
        $newAddress = $this->container->get('sylius.factory.address')->createNew();

        $newAddress->setFirstName($addressToSave->getFirstName());
        $newAddress->setLastName($addressToSave->getLastName());
        $newAddress->setCountryCode($addressToSave->getCountryCode());
        $newAddress->setCity($addressToSave->getCity());
        $newAddress->setStreet($addressToSave->getStreet());
        $newAddress->setPostcode($addressToSave->getPostcode());

        $street2 = $addressToSave->getStreet2();
        if ($street2 === null) {
            $street2 = '';
        }
        $newAddress->setStreet2($street2);

        return $newAddress;
    }
}
