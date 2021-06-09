<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class ProductBundleOrderItemExtensionCustom extends AbstractExtension
{
    /** @var RepositoryInterface */
    private $productBundleOrderItemRepository;

    /** @var Environment */
    private $twig;

    public function __construct(RepositoryInterface $productBundleOrderItemRepository, Environment $twig)
    {
        $this->productBundleOrderItemRepository = $productBundleOrderItemRepository;
        $this->twig = $twig;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('bitbag_render_product_bundle_cart_widget_order_items', [$this, 'renderProductBundleCartWidgetOrderItems'], ['is_safe' => ['html']]),
            new TwigFunction('bitbag_render_product_bundle_checkout_order_items', [$this, 'renderProductBundleCheckoutOrderItems'], ['is_safe' => ['html']]),
        ];
    }

    public function renderProductBundleCartWidgetOrderItems(OrderItemInterface $orderItem): string
    {
        /** @var ProductInterface $product */
        $product = $orderItem->getProduct();

        if (!$product->isBundle()) {
            return '';
        }

        $items = $this->productBundleOrderItemRepository->findBy([
            'orderItem' => $orderItem,
        ]);

        return $this->twig->render('@BitBagSyliusProductBundlePlugin/Admin/Order/Show/_productBundleCartWidgetOrderItems.html.twig', [
            'items' => $items,
        ]);
    }

    public function renderProductBundleCheckoutOrderItems(OrderItemInterface $orderItem): string
    {
        /** @var ProductInterface $product */
        $product = $orderItem->getProduct();

        if (!$product->isBundle()) {
            return '';
        }

        $items = $this->productBundleOrderItemRepository->findBy([
            'orderItem' => $orderItem,
        ]);

        return $this->twig->render('@BitBagSyliusProductBundlePlugin/Admin/Order/Show/_productBundleCheckoutOrderItems.html.twig', [
            'items' => $items,
        ]);
    }
}
