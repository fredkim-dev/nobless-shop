<?php

namespace App\Repository;

use App\Entity\Product\Product;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository as BaseProductRepository;

class ProductRepository extends BaseProductRepository
{
    /**
     * @param int $idTaxon
     * @param array|null $latestIds
     * @param bool $onlyOne
     * @return array
     */
    public function findRandomlyByTaxonId(int $idTaxon, ?array $latestIds = array(), bool $onlyOne = false): array
    {
        $qb = $this->createQueryBuilder('p')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('taxon.id = :id')
            ->setParameter('id', $idTaxon)
        ;

        if (count($latestIds) > 0) {
            $qb
                ->andWhere('p.id NOT IN (:latestIds)')
                ->setParameter('latestIds', $latestIds)
            ;
        }

        if ($onlyOne) {
            return $qb
                ->orderBy('RAND()')
                ->setMaxResults(1)
                ->getQuery()
                ->getResult()
            ;
        }

        return $qb
            ->orderBy('RAND()')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findLatestByTaxonId(int $idTaxon): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('taxon.id = :id')
            ->setParameter('id', $idTaxon)
            ->addOrderBy('p.id', 'DESC')
            ->setMaxResults(4)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOthersTaxons(Product $product): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('taxon.id NOT IN (:taxonToExclude)')
            ->setParameter('taxonToExclude', $product->getMainTaxon()->getId())
            ->andWhere('taxon.code <> :taxonCodeToExclude')
            ->setParameter('taxonCodeToExclude', 'bundles')
            ->orderBy('RAND()')
            ->getQuery()
            ->getResult()
        ;

    }
}
