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

use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Sylius\Bundle\ShopBundle\Locale\LocaleSwitcherInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Sylius\Component\Locale\Provider\LocaleProviderInterface;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class LocaleSwitchController extends ResourceController
{
    /** @var EngineInterface */
    private $templatingEngine;

    /** @var LocaleContextInterface */
    private $localeContext;

    /** @var LocaleProviderInterface */
    private $localeProvider;

    /** @var LocaleSwitcherInterface */
    private $localeSwitcher;

    public function __construct(
        EngineInterface $templatingEngine,
        LocaleContextInterface $localeContext,
        LocaleProviderInterface $localeProvider,
        LocaleSwitcherInterface $localeSwitcher
    ) {
        $this->templatingEngine = $templatingEngine;
        $this->localeContext = $localeContext;
        $this->localeProvider = $localeProvider;
        $this->localeSwitcher = $localeSwitcher;
    }

    public function renderAction(): Response
    {
        return $this->templatingEngine->renderResponse('@SyliusShop/Menu/_localeSwitch.html.twig', [
            'active' => $this->localeContext->getLocaleCode(),
            'locales' => $this->localeProvider->getAvailableLocalesCodes(),
        ]);
    }

    public function renderMobileMenuAction(): Response
    {
        return $this->templatingEngine->renderResponse('@SyliusShop/Menu/_mobileLocaleSwitch.html.twig', [
            'active' => $this->localeContext->getLocaleCode(),
            'locales' => $this->localeProvider->getAvailableLocalesCodes(),
        ]);
    }

    public function switchAction(Request $request, ?string $code = null): Response
    {
        if (null === $code) {
            // Get previous locale from url referer to avoid redirecting to default locale
            if (null !== $request->server->get('HTTP_REFERER')) {
                $code = explode('/', $request->server->get('HTTP_REFERER'))[3];
            } else {
                $code = $this->localeProvider->getDefaultLocaleCode();
            }
        }

        if (!in_array($code, $this->localeProvider->getAvailableLocalesCodes(), true)) {
            throw new HttpException(
                Response::HTTP_NOT_ACCEPTABLE,
                sprintf('The locale code "%s" is invalid.', $code)
            );
        }

        return $this->localeSwitcher->handle($request, $code);
    }
}
