<?php

declare(strict_types=1);

namespace App\OrderProcessing;

use BitBag\SyliusBonusPointsPlugin\Context\CustomerBonusPointsContextInterface;
use BitBag\SyliusBonusPointsPlugin\Entity\AdjustmentInterface;
use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsAwareInterface;
use BitBag\SyliusBonusPointsPlugin\Entity\BonusPointsInterface;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Webmozart\Assert\Assert;

final class OrderBonusPointsProcessor implements OrderProcessorInterface
{
    /** @var RepositoryInterface */
    private $bonusPointsRepository;

    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var CustomerBonusPointsContextInterface */
    private $customerBonusPointsContext;

    public function __construct(
        RepositoryInterface $bonusPointsRepository,
        AdjustmentFactoryInterface $adjustmentFactory,
        EntityManagerInterface $entityManager,
        CustomerBonusPointsContextInterface $customerBonusPointsContext
    )
    {
        $this->bonusPointsRepository = $bonusPointsRepository;
        $this->adjustmentFactory = $adjustmentFactory;
        $this->entityManager = $entityManager;
        $this->customerBonusPointsContext = $customerBonusPointsContext;
    }

    public function process(OrderInterface $order): void
    {
        Assert::isInstanceOf($order, BonusPointsAwareInterface::class);

        /** @var BonusPointsInterface $bonusPoints */
        $bonusPoints = $this->bonusPointsRepository->findOneBy([
            'order' => $order,
            'isUsed' => true,
        ]);

        if (null === $bonusPoints) {
            return;
        }

        $customerBonusPoints = $this->customerBonusPointsContext->getCustomerBonusPoints();
        $bonusPointsAmount = $bonusPoints->getPoints();
        $specialCase = false;
        // If customer validates bonus points input without anything
        if ($order->getBonusPoints() === null) {
            $bonusPointsAmount = 0;
            $specialCase = true;
        } elseif ($order->getItemsTotal() < $bonusPointsAmount) {
            $bonusPointsAmount = $order->getItemsTotal();
            $specialCase = true;
        }

        if ($specialCase) {
            foreach($customerBonusPoints->getBonusPointsUsed() as $bonusPointsUsed) {
                if ($order === $bonusPointsUsed->getOrder() && true === $bonusPointsUsed->isUsed()) {
                    $bonusPointsUsed->setPoints($bonusPointsAmount);
                }
                $this->entityManager->flush();
            }
        }

        $order->removeAdjustments(AdjustmentInterface::ORDER_BONUS_POINTS_ADJUSTMENT);

        $adjustment = $this->adjustmentFactory->createWithData(
            AdjustmentInterface::ORDER_BONUS_POINTS_ADJUSTMENT,
            AdjustmentInterface::ORDER_BONUS_POINTS_ADJUSTMENT,
            (-1 * $bonusPointsAmount)
        );

        $adjustment->setOriginCode(AdjustmentInterface::ORDER_BONUS_POINTS_ADJUSTMENT);

        $adjustment->setAdjustable($order);

        $order->addAdjustment($adjustment);
    }
}
