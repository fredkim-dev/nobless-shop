<?php

namespace App\Repository;

use App\Entity\Product\Product;
use Doctrine\ORM\QueryBuilder;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository as BaseProductRepository;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\TaxonInterface;

class ProductRepository extends BaseProductRepository
{
    /**
     * Return last products for homepage and product page
     *
     * @return int|mixed|string
     */
    public function findLatest()
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('p.enabled = true')
            ->andWhere('taxon.code <> :code')
            ->setParameter('code', 'bundles')
            ->orderBy('p.id', 'DESC')
            ->setMaxResults(12)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * Return last products by taxon id (used for homepage bundle list)
     *
     * @param int $idTaxon
     * @return array
     */
    public function findLatestByTaxonId(int $idTaxon): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('p.enabled = true')
            ->andWhere('taxon.id = :id')
            ->setParameter('id', $idTaxon)
            ->addOrderBy('p.id', 'DESC')
            ->setMaxResults(12)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOthersTaxons(Product $product): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.enabled = true')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('taxon.id NOT IN (:taxonToExclude)')
            ->setParameter('taxonToExclude', $product->getMainTaxon()->getId())
            ->andWhere('taxon.code <> :taxonCodeToExclude')
            ->setParameter('taxonCodeToExclude', 'bundles')
            ->orderBy('RAND()')
            ->setMaxResults(12)
            ->getQuery()
            ->getResult()
        ;
    }

    public function createShopListQueryBuilder(
        ChannelInterface $channel,
        TaxonInterface $taxon,
        string $locale,
        array $sorting = [],
        bool $includeAllDescendants = false,
        array $criteria = []
    ): QueryBuilder {
        $queryBuilder = $this->createQueryBuilder('o')
            ->distinct()
            ->addSelect('translation')
            ->addSelect('productTaxon')
            ->innerJoin('o.translations', 'translation', 'WITH', 'translation.locale = :locale')
            ->innerJoin('o.productTaxons', 'productTaxon');

        /*if ($includeAllDescendants) {
            $queryBuilder
                ->innerJoin('productTaxon.taxon', 'taxon')
                ->andWhere('taxon.left >= :taxonLeft')
                ->andWhere('taxon.right <= :taxonRight')
                ->andWhere('taxon.root = :taxonRoot')
                ->setParameter('taxonLeft', $taxon->getLeft())
                ->setParameter('taxonRight', $taxon->getRight())
                ->setParameter('taxonRoot', $taxon->getRoot())
            ;
        }*/

        $queryBuilder
            ->andWhere('productTaxon.taxon = :taxon')
            ->andWhere(':channel MEMBER OF o.channels')
            ->andWhere('o.enabled = true')
            ->setParameter('taxon', $taxon)
            ->setParameter('locale', $locale)
            ->setParameter('channel', $channel)
        ;

        // Grid hack, we do not need to join these if we don't sort by price
        if (isset($sorting['price'])) {
            // Another hack, the subquery to get the first position variant
            $subQuery = $this->createQueryBuilder('m')
                ->select('min(v.position)')
                ->innerJoin('m.variants', 'v')
                ->andWhere('m.id = :product_id')
            ;

            $queryBuilder
                ->addSelect('variant')
                ->addSelect('channelPricing')
                ->innerJoin('o.variants', 'variant')
                ->innerJoin('variant.channelPricings', 'channelPricing')
                ->andWhere('channelPricing.channelCode = :channelCode')
                ->andWhere(
                    $queryBuilder->expr()->in(
                        'variant.position',
                        str_replace(':product_id', 'o.id', $subQuery->getDQL())
                    )
                )
                ->setParameter('channelCode', $channel->getCode())
            ;
        }

        if (count($criteria) > 0) {
            $hasSize = $hasPrice = false;
            $subQuerySize = $this->createQueryBuilder('s')
                ->select('s.id')
                ->innerJoin('s.variants', 'vs')
            ;

            /*
             * If size filter is selected
             */
            if (isset($criteria['size'])) {
                $hasSize = true;
                $subQuerySize
                    ->innerJoin('vs.optionValues', 'ov')
                    ->andWhere('vs.onHand > 0')
                    ->andWhere('ov.code in (:size)')
                ;
            }

            /*
             * If price filter is selected
             */
            if (isset($criteria['price'])) {
                $hasPrice = true;
                $subQuerySize
                    ->innerJoin('vs.channelPricings', 'cp')
                    ->andWhere('cp.price BETWEEN :priceBelow AND :priceAbove')
                ;
            }

            // Replace value in DQL query
            $subQueryDQL = $subQuerySize->getDQL();
            if ($hasSize) {
                $sizeToCheck = "'" . implode('\',\'', $criteria['size']['size']) . "'";
                $subQueryDQL = str_replace(':size', $sizeToCheck, $subQueryDQL);
            }
            if($hasPrice) {
                $priceBelow = ceil($criteria['price']['price_1']) * 100;
                $priceAbove = ceil($criteria['price']['price_2']) * 100;

                $subQueryDQL = str_replace(':priceBelow', $priceBelow, $subQueryDQL);
                $subQueryDQL = str_replace(':priceAbove', $priceAbove, $subQueryDQL);
            }

            $queryBuilder
                ->andWhere(
                    $queryBuilder->expr()->in(
                        'o.id',
                        $subQueryDQL
                    )
                )
            ;
        }

        return $queryBuilder;
    }
}
