<?php

declare(strict_types=1);

namespace App\Entity\Product;

use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\Product as BaseProduct;
use Sylius\Component\Product\Model\ProductTranslationInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundlesAwareTrait;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleInterface;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_product")
 */
class Product extends BaseProduct implements ProductInterface
{
    use ProductBundlesAwareTrait;

    /** @var ProductBundleInterface
     * @ORM\OneToOne(targetEntity="BitBag\SyliusProductBundlePlugin\Entity\ProductBundleInterface", mappedBy="product", cascade={"persist"})
     */
    protected $productBundle;

    /**
     * Max product quantity in cart
     */
    const MAX_QTY_IN_CART = 5;

    /**
     * Limit quantity to display "Last products in stock"
     */
    const LAST_PRODUCT_IN_STOCK = 2;

    protected function createTranslation(): ProductTranslationInterface
    {
        return new ProductTranslation();
    }
}
