<?php

declare(strict_types=1);

namespace App\Entity\Order;

use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsAwareInterface;
use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsAwareTrait;
use Doctrine\ORM\Mapping as ORM;
use Sylius\Component\Core\Model\Order as BaseOrder;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_order")
 */
class Order extends BaseOrder implements BonusPointsAwareInterface
{
    use BonusPointsAwareTrait;

    /** @ORM\Column(type="integer", name="bonus_points", nullable=true) */
    protected $bonusPoints;
}
