<?php

declare(strict_types=1);

namespace App\Entity\Order;

use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\OrderItem as BaseOrderItem;

use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemInterface;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_order_item")
 */
class OrderItem extends BaseOrderItem
{
    /**
     * @ORM\OneToMany(targetEntity="BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemInterface", mappedBy="orderItem", cascade={"persist"})
     */
    protected $productBundleItems;

    public function __construct()
    {
        parent::__construct();

        $this->productBundleItems = new ArrayCollection();
    }

    public function addProductBundleItem(ProductBundleOrderItemInterface $productBundleOrderItem): self
    {
        $productBundleOrderItem->setOrderItem($this);
        if (!$this->productBundleItems->contains($productBundleOrderItem)) {
            $this->productBundleItems[] = $productBundleOrderItem;
        }

        return $this;
    }

    public function getProductBundleItems(): ArrayCollection
    {
        return $this->productBundleItems;
    }
}
