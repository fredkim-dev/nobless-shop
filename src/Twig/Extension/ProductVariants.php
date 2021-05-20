<?php


namespace App\Twig\Extension;

use App\Entity\Product\Product;
use App\Entity\Product\ProductVariant;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Twig\Environment;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItem;

class ProductVariants extends AbstractExtension
{
    private $twig;

    private $entityManager;

    private $productBundleOrderItemRepository;

    public function __construct(Environment $twig, EntityManagerInterface $entityManager, RepositoryInterface $productBundleOrderItemRepository)
    {
        $this->entityManager = $entityManager;
        $this->twig = $twig;
        $this->productBundleOrderItemRepository = $productBundleOrderItemRepository;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('sylius_product_variants', [$this, 'getVariants'], ['is_safe' => ['html']]),
            new TwigFunction('sylius_product_out_of_stock', [$this, 'hasProductOutOfStock'], ['is_safe' => ['html']]),
            new TwigFunction('sylius_bundle_out_of_stock', [$this, 'isBundleOutOfStock'], ['is_safe' => ['html']]),
            new TwigFunction('sylius_bundle_max_qty_in_cart', [$this, 'bundleMaxQtyInCart'], ['is_safe' => ['html']])
        ];
    }

    public function getVariants(Product $product): string
    {
        $variants = $this->entityManager->getRepository(ProductVariant::class)->getProductVariants($product);
        return $this->twig->render('@SyliusShop/Product/_boxVariant.html.twig', [
            'productVariants' => $variants,
        ]);
    }

    /**
     * Check if products out of stock are in the cart
     *
     * @param OrderInterface $order
     * @return bool
     */
    public function hasProductOutOfStock(OrderInterface $order): bool
    {
        foreach($order->getItems() as $item) {
            if (!$item->getVariant()->getProduct()->isBundle()) {
                $productQty = (int)($item->getVariant()->getOnHand() - $item->getVariant()->getOnHold());
                $productIsEnabled = $item->getVariant()->getProduct()->isEnabled();
                if ($productQty <= 0 || $productQty < $item->getQuantity() || !$productIsEnabled) {
                    return true;
                }
            } elseif ($this->isBundleOutOfStock($item)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if bundle is out of stock according to its product stock
     *
     * @param OrderItemInterface $orderItem
     * @return bool
     */
    public function isBundleOutOfStock(OrderItemInterface $orderItem): bool
    {
        $items = $this->productBundleOrderItemRepository->findBy([
            'orderItem' => $orderItem,
        ]);

        foreach($items as $item) {
            $productQty = (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold());
            $productIsEnabled = $item->getProductVariant()->getProduct()->isEnabled();
            if ($productQty <= 0 || $productQty < $item->getQuantity() || !$productIsEnabled) {
                return true;
            }
        }

        return false;
    }

    /**
     * Returns maximum quantity of the bundle in cart, according to its product stock
     *
     * @param OrderItemInterface $orderItem
     * @return int
     */
    public function bundleMaxQtyInCart(OrderItemInterface $orderItem): int
    {
        $items = $this->productBundleOrderItemRepository->findBy([
            'orderItem' => $orderItem,
        ]);

        $maxQtyInCart = Product::MAX_QTY_IN_CART;
        foreach($items as $key => $item) {
            if ($maxQtyInCart > (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold())) {
                $maxQtyInCart = (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold());
            }
        }

        return $maxQtyInCart;
    }

}
