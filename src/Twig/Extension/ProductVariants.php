<?php


namespace App\Twig\Extension;

use App\Entity\Product\Product;
use App\Entity\Product\ProductVariant;
use Doctrine\Common\Collections\ArrayCollection;
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
            new TwigFunction('sylius_order_has_product_out_of_stock', [$this, 'orderHasProductOutOfStock'], ['is_safe' => ['html']]),
            new TwigFunction('sylius_order_item_out_of_stock', [$this, 'isOutOfStock'], ['is_safe' => ['html']]),
            new TwigFunction('sylius_max_qty_in_cart', [$this, 'maxQtyInCart'], ['is_safe' => ['html']])
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
     * Check if products in cart are out of stock
     *
     * @param OrderInterface $order
     * @return bool
     */
    public function orderHasProductOutOfStock(OrderInterface $order): bool
    {
        foreach($order->getItems() as $item) {
            if ($this->isOutOfStock($item)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if OrderItem is out of stock
     *
     * @param OrderItemInterface $orderItem
     * @return bool
     */
    public function isOutOfStock(OrderItemInterface $orderItem): bool
    {
        if ($orderItem->getVariant()->getProduct()->isBundle()) {
            return $this->isBundleOutOfStock($orderItem);
        } else {
            return $this->isProductOutOfStock($orderItem);
        }
    }

    /**
     * Check if products from bundle are available or not
     *
     * @param OrderItemInterface $orderItem
     * @return bool
     */
    public function isProductOutOfStock(OrderItemInterface $orderItem): bool
    {
        $productQty = (int)($orderItem->getVariant()->getOnHand() - $orderItem->getVariant()->getOnHold());
        $productIsEnabled = $orderItem->getVariant()->getProduct()->isEnabled();
        if ($productQty <= 0 || $productQty < $orderItem->getQuantity() || !$productIsEnabled) {
            return true;
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
        foreach($this->getBundleItems($orderItem) as $item) {
            $productQty = (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold());
            $productIsEnabled = $item->getProductVariant()->getProduct()->isEnabled();
            if ($productQty <= 0 || $productQty < $item->getQuantity() || !$productIsEnabled) {
                return true;
            }
        }

        return false;
    }

    public function maxQtyInCart(OrderItemInterface $orderItem): int
    {
        $maxQtyInCart = Product::MAX_QTY_IN_CART;
        if ($orderItem->getVariant()->getProduct()->isBundle()) {
            foreach($this->getBundleItems($orderItem) as $key => $item) {
                $maxQtyInCart = $this->getMaxQtyInCart($item, $maxQtyInCart, true);
            }
        } else {
            $maxQtyInCart = $this->getMaxQtyInCart($orderItem, $maxQtyInCart);
        }

        return $maxQtyInCart;
    }

    /**
     * @param $item
     * @param int $maxQtyInCart
     * @param bool $isBundle
     * @return int
     */
    public function getMaxQtyInCart($item, int $maxQtyInCart, bool $isBundle = false): int
    {
        if ($isBundle) {
            $stock = (int)($item->getProductVariant()->getOnHand() - $item->getProductVariant()->getOnHold());
        } else {
            $stock = (int)($item->getVariant()->getOnHand() - $item->getVariant()->getOnHold());
        }
        return ($maxQtyInCart > $stock) ? $stock : $maxQtyInCart;
    }

    /**
     * @param OrderItemInterface $orderItem
     * @return object[]
     */
    private function getBundleItems(OrderItemInterface $orderItem)
    {
        return $this->productBundleOrderItemRepository->findBy([
            'orderItem' => $orderItem,
        ]);
    }

}
