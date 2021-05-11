<?php

declare(strict_types=1);

namespace App\Component\ProductBundle;

use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Sylius\Component\Order\Model\OrderInterface;

final class AddProductBundleToCartCommand implements \ArrayAccess
{
    /** @var OrderInterface */
    private $cart;

    /** @var OrderItemInterface */
    private $cartItem;

    /** @var ProductInterface */
    private $product;

    /** @var AddProductBundleItemToCartCommand[] */
    private $productBundleItems = [];

    public function __construct(OrderInterface $cart, OrderItemInterface $cartItem, ProductInterface $product, $newBundleItems = [])
    {
        $this->cart = $cart;
        $this->cartItem = $cartItem;
        $this->product = $product;

        /** @var ProductBundleItemInterface $productBundleItem */
        foreach ($product->getProductBundle()->getProductBundleItems() as $key => $productBundleItem) {
            $productVariant = isset($newBundleItems[$key]) ? $newBundleItems[$key]->getProductVariant() : null;
            $this->productBundleItems[] = new AddProductBundleItemToCartCommand($productBundleItem, $productVariant);
        }
    }

    public function getProduct(): ProductInterface
    {
        return $this->product;
    }

    public function getProductBundleItems(): array
    {
        return $this->productBundleItems;
    }

    public function getCart(): OrderInterface
    {
        return $this->cart;
    }

    public function getCartItem(): OrderItemInterface
    {
        return $this->cartItem;
    }

    public function offsetExists($offset)
    {
        return property_exists($this, $offset);
    }

    public function offsetGet($offset)
    {
        return $this->$offset;
    }

    public function offsetSet($offset, $value)
    {
        $this->$offset = $value;
    }

    public function offsetUnset($offset)
    {
        unset($this->$offset);
    }


}
