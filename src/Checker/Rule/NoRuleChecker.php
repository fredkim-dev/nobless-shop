<?php

declare(strict_types=1);

namespace App\Checker\Rule;

use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Model\TaxonInterface;
use Sylius\Component\Promotion\Exception\UnsupportedTypeException;
use Sylius\Component\Taxonomy\Repository\TaxonRepositoryInterface;
use Webmozart\Assert\Assert;
use BitBag\SyliusBonusPointsPlugin\Checker\Rule\BonusPointsStrategyRuleCheckerInterface;

final class NoRuleChecker implements BonusPointsStrategyRuleCheckerInterface
{
    public const TYPE = 'none';

    public function isEligible(OrderItemInterface $orderItem, array $configuration): bool
    {
        $product = $orderItem->getProduct();

        if (!$product instanceof ProductInterface) {
            throw new UnsupportedTypeException($product, ProductInterface::class);
        }

        return true;
    }
}
