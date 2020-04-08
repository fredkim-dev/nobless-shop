<?php

namespace App\Repository;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository as BaseProductRepository;

class ProductRepository extends BaseProductRepository
{
    public function findByTaxonId(int $idTaxon): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.mainTaxon', 'taxon')
            ->andWhere('taxon.id = :id')
            ->setParameter('id', $idTaxon)
            ->setMaxResults(4)
            ->addOrderBy('p.id', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
}
