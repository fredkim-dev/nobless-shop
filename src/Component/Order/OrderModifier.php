<?php

declare(strict_types=1);

namespace App\Component\Order;

use Sylius\Component\Order\Modifier\OrderModifier as BaseOrderModifier;
use Sylius\Component\Order\Model\OrderInterface;
use Sylius\Component\Order\Model\OrderItemInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;

final class OrderModifier implements OrderModifierInterface
{
    /** @var OrderProcessorInterface */
    private $orderProcessor;

    /** @var OrderItemQuantityModifierInterface */
    private $orderItemQuantityModifier;

    /** @var BaseOrderModifier */
    private $_parent;

    public function __construct(
        OrderProcessorInterface $orderProcessor,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier,
        ?BaseOrderModifier $baseOrderModifier
    ) {
        $this->orderProcessor = $orderProcessor;
        $this->orderItemQuantityModifier = $orderItemQuantityModifier;
        $this->_parent = $baseOrderModifier;
    }

    public function addToOrder(OrderInterface $order, OrderItemInterface $item): void
    {
        $this->resolveOrderItem($order, $item);

        $this->orderProcessor->process($order);
    }

    public function updateQuantityInOrder(OrderInterface $order, OrderItemInterface $item, int $quantity): void
    {
        $this->resolveOrderItem($order, $item, $quantity);

        $this->orderProcessor->process($order);
    }

    public function removeFromOrder(OrderInterface $order, OrderItemInterface $item): void
    {
        $this->_parent->removeFromOrder($order, $item);
    }

    private function resolveOrderItem(OrderInterface $order, OrderItemInterface $item, int $quantity = 0): void
    {
        $newProductVariant = [];
        foreach($item->getProductBundleOrderItems() as $bundleOrderItem) {
            $newProductVariant[] = $bundleOrderItem->getProductVariant()->getCode();
        }

        foreach ($order->getItems() as $existingItem) {
            if ($item->equals($existingItem) && $item->getVariant()->getProduct()->isBundle()) {
                $existingProductVariant = [];
                foreach($existingItem->getProductBundleOrderItems() as $existingBundleOrderItem) {
                    $existingProductVariant[] = $existingBundleOrderItem->getProductVariant()->getCode();
                }

                if(count(array_diff($newProductVariant, $existingProductVariant)) == 0) {
                    $targetQuantity = $quantity;
                    if ($quantity == 0) {
                        $targetQuantity = $existingItem->getQuantity() + $item->getQuantity();
                    }
                    $this->orderItemQuantityModifier->modify(
                        $existingItem,
                        $targetQuantity
                    );

                    return;
                }

            } elseif ($item->equals($existingItem)) {
                $targetQuantity = $quantity;
                if ($quantity == 0) {
                    $targetQuantity = $existingItem->getQuantity() + $item->getQuantity();
                }
                $this->orderItemQuantityModifier->modify(
                    $existingItem,
                    $targetQuantity
                );

                return;
            }
        }

        $order->addItem($item);
    }
}
