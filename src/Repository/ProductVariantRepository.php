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

namespace App\Repository;

use App\Entity\Product\Product;
use App\Entity\Taxonomy\Taxon;
use BitBag\SyliusProductBundlePlugin\Repository\ProductVariantRepository as BaseProductVariantRepository;

class ProductVariantRepository extends BaseProductVariantRepository
{
    public function getMinAndMaxPrices(Taxon $taxonomy)
    {
        return $this->createQueryBuilder('pv')
            ->select('min(cp.price) as minPrice, max(cp.price) as maxPrice')
            ->innerJoin('pv.channelPricings', 'cp')
            ->innerJoin('pv.product', 'p')
            ->innerJoin('p.productTaxons', 't')
            ->andWhere('t.taxon = :taxon')
            ->setParameter('taxon', $taxonomy)
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function getProductVariants(Product $product)
    {
        return $this->createQueryBuilder('pv')
            ->addSelect('ov')
            ->innerJoin('pv.optionValues', 'ov')
            ->andWhere('pv.product = :product')
            ->setParameter('product', $product)
            ->getQuery()
            ->getArrayResult()
        ;
    }
}
