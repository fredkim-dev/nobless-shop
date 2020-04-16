<?php

namespace App\Repository;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository as BaseProductRepository;

class ProductRepository extends BaseProductRepository
{
    public function findRandomlyByTaxonId(int $idTaxon, ?array $latestIds = array()): array
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
}
