<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use BitBag\SyliusBonusPointsPlugin\Context\CustomerBonusPointsContextInterface;
use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class BonusPointsExtensionCustom extends AbstractExtension
{
    /** @var CustomerBonusPointsContextInterface */
    private $customerBonusPointsContext;

    /** @var CartContextInterface */
    private $cartContext;

    public function __construct(CustomerBonusPointsContextInterface $bonusPointsResolver, CartContextInterface $cartContext)
    {
        $this->customerBonusPointsContext = $bonusPointsResolver;
        $this->cartContext = $cartContext;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('bitbag_all_bonus_points', [$this, 'getAllBonusPoints']),
        ];
    }

    public function getAllBonusPoints(): int
    {
        $customerBonusPoints = $this->customerBonusPointsContext->getCustomerBonusPoints();

        if (null == $customerBonusPoints) {
            return 0;
        }

        $bonusPointsTotal = 0;

        /** @var BonusPointsInterface $bonusPoints */
        foreach ($customerBonusPoints->getBonusPoints() as $bonusPoints) {
            if ($bonusPoints->getExpiresAt() >= (new \DateTime())) {
                $bonusPointsTotal += $bonusPoints->getPoints();
            }
        }

        if ($bonusPointsTotal === 0) {
            return 0;
        }

        foreach ($customerBonusPoints->getBonusPointsUsed() as $bonusPointsUsed) {
            if ($this->cartContext->getCart() !== $bonusPointsUsed->getOrder()) {
                $bonusPointsTotal -= $bonusPointsUsed->getPoints();
            }
        }

        return ($bonusPointsTotal > 0) ? $bonusPointsTotal : 0;
    }
}
