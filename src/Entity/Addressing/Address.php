<?php

declare(strict_types=1);

namespace App\Entity\Addressing;

use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\Address as BaseAddress;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_address")
 */
class Address extends BaseAddress
{
    /** @ORM\Column(type="string", name="street_2", nullable=true) */
   private $street2;

   public function getStreet2(): ?string
   {
       return $this->street2;
   }

   public function setStreet2(string $street2): void
   {
       $this->street2 = $street2;
   }

}
