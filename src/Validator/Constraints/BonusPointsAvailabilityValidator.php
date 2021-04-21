<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsAwareInterface;
use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsInterface;
use BitBag\SyliusBonusPointsPlugin\Resolver\BonusPointsResolverInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Webmozart\Assert\Assert;

final class BonusPointsAvailabilityValidator extends ConstraintValidator
{
    /** @var BonusPointsResolverInterface */
    private $bonusPointsResolver;

    /** @var RepositoryInterface */
    private $bonusPointsRepository;

    public function __construct(BonusPointsResolverInterface $bonusPointsResolver, RepositoryInterface $bonusPointsRepository)
    {
        $this->bonusPointsResolver = $bonusPointsResolver;
        $this->bonusPointsRepository = $bonusPointsRepository;
    }

    public function validate($order, Constraint $constraint): void
    {
        return;
    }
}
