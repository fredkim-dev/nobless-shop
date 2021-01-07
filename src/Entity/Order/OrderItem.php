<?php

declare(strict_types=1);

namespace App\Entity\Order;

use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\OrderItem as BaseOrderItem;
use BitBag\SyliusProductBundlePlugin\Entity\OrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemsAwareTrait;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_order_item")
 */
class OrderItem extends BaseOrderItem implements OrderItemInterface
{
    use ProductBundleOrderItemsAwareTrait;

    /**
     * @var ArrayCollection;
     * @ORM\OneToMany(targetEntity="BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItem", mappedBy="orderItem", cascade={"persist"})
     */
    protected $productBundleOrderItems;

    public function __construct()
    {
        parent::__construct();
        $this->init();
    }

    public function addProductBundleItem(ProductBundleOrderItemInterface $productBundleOrderItem): self
    {
        $productBundleOrderItem->setOrderItem($this);
        if (!$this->productBundleOrderItems->contains($productBundleOrderItem)) {
            $this->productBundleOrderItems[] = $productBundleOrderItem;
        }

        return $this;
    }

    public function getProductBundleOrderItems(): ArrayCollection
    {
        return new ArrayCollection($this->productBundleOrderItems->getValues());
    }
}
