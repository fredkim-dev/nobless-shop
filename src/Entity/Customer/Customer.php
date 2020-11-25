<?php

declare(strict_types=1);

namespace App\Entity\Customer;

use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\Customer as BaseCustomer;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_customer")
 */
class Customer extends BaseCustomer
{
     /** @ORM\Column(type="boolean", name="accept_cgv", nullable=false) */
    private $acceptCgv;

    public function getAcceptCgv(): ?bool
    {
        return $this->acceptCgv;
    }

    public function setAcceptCgv(bool $acceptCgv): void
    {
        $this->acceptCgv = $acceptCgv;
    }

}
