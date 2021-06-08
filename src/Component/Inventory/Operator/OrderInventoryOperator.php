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

namespace App\Component\Inventory\Operator;

use Sylius\Component\Core\Inventory\Operator\OrderInventoryOperatorInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\OrderPaymentStates;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Webmozart\Assert\Assert;

final class OrderInventoryOperator implements OrderInventoryOperatorInterface
{
    /** @var RepositoryInterface $productBundleOrderItemRepository */
    protected $productBundleOrderItemRepository;

    public function __construct(RepositoryInterface $productBundleOrderItemRepository)
    {
        $this->productBundleOrderItemRepository = $productBundleOrderItemRepository;
    }

    /**
     * {@inheritdoc}
     */
    public function cancel(OrderInterface $order): void
    {
        if (in_array(
            $order->getPaymentState(),
            [OrderPaymentStates::STATE_PAID, OrderPaymentStates::STATE_REFUNDED],
            true
        )) {
            $this->giveBack($order);

            return;
        }

        $this->release($order);
    }

    /**
     * {@inheritdoc}
     */
    public function hold(OrderInterface $order): void
    {
        /** @var OrderItemInterface $orderItem */
        foreach ($order->getItems() as $orderItem) {
            $variant = $orderItem->getVariant();

            if ($variant->getProduct()->isBundle()) {
                $this->holdBundle($orderItem);
                continue;
            }

            if (!$variant->isTracked()) {
                continue;
            }

            $variant->setOnHold($variant->getOnHold() + $orderItem->getQuantity());
        }
    }

    /**
     * {@inheritdoc}
     */
    public function sell(OrderInterface $order): void
    {
        /** @var OrderItemInterface $orderItem */
        foreach ($order->getItems() as $orderItem) {
            $variant = $orderItem->getVariant();

            if ($variant->getProduct()->isBundle()) {
                $this->sellBundle($orderItem);
                continue;
            }

            if (!$variant->isTracked()) {
                continue;
            }

            Assert::greaterThanEq(
                ($variant->getOnHold() - $orderItem->getQuantity()),
                0,
                sprintf(
                    'Not enough units to decrease on hold quantity from the inventory of a variant "%s".',
                    $variant->getName()
                )
            );

            Assert::greaterThanEq(
                ($variant->getOnHand() - $orderItem->getQuantity()),
                0,
                sprintf(
                    'Not enough units to decrease on hand quantity from the inventory of a variant "%s".',
                    $variant->getName()
                )
            );

            $variant->setOnHold($variant->getOnHold() - $orderItem->getQuantity());
            $variant->setOnHand($variant->getOnHand() - $orderItem->getQuantity());
        }
    }

    /**
     * @throws \InvalidArgumentException
     */
    private function release(OrderInterface $order): void
    {
        /** @var OrderItemInterface $orderItem */
        foreach ($order->getItems() as $orderItem) {
            $variant = $orderItem->getVariant();

            if ($variant->getProduct()->isBundle()) {
                $this->releaseBundle($orderItem);
                continue;
            }

            if (!$variant->isTracked()) {
                continue;
            }

            Assert::greaterThanEq(
                ($variant->getOnHold() - $orderItem->getQuantity()),
                0,
                sprintf(
                    'Not enough units to decrease on hold quantity from the inventory of a variant "%s".',
                    $variant->getName()
                )
            );

            $variant->setOnHold($variant->getOnHold() - $orderItem->getQuantity());
        }
    }

    private function giveBack(OrderInterface $order): void
    {
        /** @var OrderItemInterface $orderItem */
        foreach ($order->getItems() as $orderItem) {
            $variant = $orderItem->getVariant();

            if ($variant->getProduct()->isBundle()) {
                $this->giveBackBundle($orderItem);
                continue;
            }

            if (!$variant->isTracked()) {
                continue;
            }

            $variant->setOnHand($variant->getOnHand() + $orderItem->getQuantity());
        }
    }

    /*******************************/
    /* BUNDLE INVENTORY MANAGEMENT */
    /*******************************/

    /**
     * @param OrderItemInterface $orderItem
     */
    private function holdBundle(OrderItemInterface $orderItem): void
    {
        foreach($this->getBundleItems($orderItem) as $item) {
            $variant = $item->getProductVariant();
            $variant->setOnHold($variant->getOnHold() + $orderItem->getQuantity());
        }
    }

    /**
     * @param OrderItemInterface $orderItem
     */
    private function sellBundle(OrderItemInterface $orderItem): void
    {
        foreach($this->getBundleItems($orderItem) as $item) {
            $variant = $item->getProductVariant();

            Assert::greaterThanEq(
                ($variant->getOnHold() - $orderItem->getQuantity()),
                0,
                sprintf(
                    'Not enough units to decrease on hold quantity from the inventory of a variant "%s".',
                    $variant->getName()
                )
            );

            Assert::greaterThanEq(
                ($variant->getOnHand() - $orderItem->getQuantity()),
                0,
                sprintf(
                    'Not enough units to decrease on hand quantity from the inventory of a variant "%s".',
                    $variant->getName()
                )
            );

            $variant->setOnHold($variant->getOnHold() - $orderItem->getQuantity());
            $variant->setOnHand($variant->getOnHand() - $orderItem->getQuantity());
        }
    }

    /**
     * @param OrderItemInterface $orderItem
     * @throws \InvalidArgumentException
     */
    private function releaseBundle(OrderItemInterface $orderItem): void
    {
        foreach($this->getBundleItems($orderItem) as $item) {
            $variant = $item->getProductVariant();

            Assert::greaterThanEq(
                ($variant->getOnHold() - $orderItem->getQuantity()),
                0,
                sprintf(
                    'Not enough units to decrease on hold quantity from the inventory of a variant "%s".',
                    $variant->getName()
                )
            );

            $variant->setOnHold($variant->getOnHold() - $orderItem->getQuantity());
        }
    }

    /**
     * @param OrderItemInterface $orderItem
     */
    private function giveBackBundle(OrderItemInterface $orderItem): void
    {
        foreach($this->getBundleItems($orderItem) as $item) {
            $variant = $item->getProductVariant();
            $variant->setOnHand($variant->getOnHand() + $orderItem->getQuantity());
        }
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
