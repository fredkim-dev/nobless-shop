<?php

declare(strict_types=1);

namespace App\Entity\Order;

use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\OrderItem as BaseOrderItem;

use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemInterface;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_order_item")
 */
class OrderItem extends BaseOrderItem
{
    public function addProductBundleItem(ProductBundleOrderItemInterface $productBundleOrderItem): void
    {
        $productBundleOrderItem->setOrderItem($this);
    }
}
