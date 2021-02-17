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

use BitBag\SyliusCmsPlugin\Twig\Extension\RenderBlockExtension;
use Sylius\Bundle\CoreBundle\Form\Type\ContactType;
use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Sylius\Bundle\ShopBundle\EmailManager\ContactEmailManagerInterface;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Customer\Context\CustomerContextInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\RouterInterface;
use Webmozart\Assert\Assert;

class ContactController extends ResourceController
{
    /** @var RouterInterface */
    private $router;

    /** @var FormFactoryInterface */
    private $formFactory;

    /** @var EngineInterface */
    private $templatingEngine;

    /** @var ChannelContextInterface */
    private $channelContext;

    /** @var CustomerContextInterface */
    private $customerContext;

    /** @var LocaleContextInterface */
    private $localeContext;

    /** @var ContactEmailManagerInterface */
    private $contactEmailManager;

    /** @var RenderBlockExtension */
    private $blockExtension;

    public function __construct(
        RouterInterface $router,
        FormFactoryInterface $formFactory,
        EngineInterface $templatingEngine,
        ChannelContextInterface $channelContext,
        CustomerContextInterface $customerContext,
        LocaleContextInterface $localeContext,
        ContactEmailManagerInterface $contactEmailManager,
        RenderBlockExtension $blockExtension
    ) {
        $this->router = $router;
        $this->formFactory = $formFactory;
        $this->templatingEngine = $templatingEngine;
        $this->channelContext = $channelContext;
        $this->customerContext = $customerContext;
        $this->localeContext = $localeContext;
        $this->contactEmailManager = $contactEmailManager;
        $this->blockExtension = $blockExtension;
    }

    public function requestAction(Request $request): Response
    {
        $formType = $this->getSyliusAttribute($request, 'form', ContactType::class);
        $form = $this->formFactory->create($formType, null, $this->getFormOptions());

        if ($request->isMethod('POST')) {
            if ($form->handleRequest($request)->isValid()) {
                $data = $form->getData();

                $channel = $this->channelContext->getChannel();

                /** @var ChannelInterface $channel */
                Assert::isInstanceOf($channel, ChannelInterface::class);

                $contactEmail = $channel->getContactEmail();

                if (null === $contactEmail) {
                    $errorMessage = $this->getSyliusAttribute(
                        $request,
                        'error_flash',
                        'sylius.contact.request_error'
                    );

                    $html = $this->container->get('templating')->renderResponse(
                        '@SyliusShop/Contact/requestResponse.html.twig',
                        [
                            'message' => $errorMessage,
                            'error' => true,
                            'form' => false
                        ]
                    );

                    return new Response($html, 417);
                }

                $localeCode = $this->localeContext->getLocaleCode();
                $this->contactEmailManager->sendContactRequest($data, [$contactEmail], $channel, $localeCode);

                return $this->container->get('templating')->renderResponse(
                    '@SyliusShop/Contact/requestResponse.html.twig',
                    [
                        'message' => '',
                        'error' => false,
                        'form' => false
                    ]
                );
            }

            $html = $this->container->get('templating')->renderResponse(
                '@SyliusShop/Contact/requestResponse.html.twig',
                [
                    'message' => '',
                    'error' => true,
                    'form' => $form->createView()
                ]
            );
            return new Response($html, 406);
        }

        $template = $this->getSyliusAttribute($request, 'template', '@SyliusShop/Contact/request.html.twig');

        return $this->templatingEngine->renderResponse($template, ['form' => $form->createView()]);
    }

    private function getSyliusAttribute(Request $request, string $attributeName, ?string $default): ?string
    {
        $attributes = $request->attributes->get('_sylius');

        return $attributes[$attributeName] ?? $default;
    }

    private function getFormOptions(): array
    {
        $customer = $this->customerContext->getCustomer();

        if (null === $customer) {
            return [];
        }

        return ['customer' => $customer];
    }
}
