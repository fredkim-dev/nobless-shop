<?php

declare(strict_types=1);

namespace App\Form\Extension;

use BitBag\SyliusBonusPointsPlugin\Context\CustomerBonusPointsContextInterface;
use BitBag\SyliusBonusPointsPlugin\Resolver\BonusPointsResolverInterface;
use Sylius\Bundle\MoneyBundle\Form\Type\MoneyType;
use Sylius\Bundle\OrderBundle\Form\Type\CartType;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\LessThanOrEqual;
use Symfony\Component\Validator\Constraints\Range;

final class CartTypeExtension extends AbstractTypeExtension
{
    /** @var CustomerBonusPointsContextInterface */
    private $customerBonusPointsContext;

    /** @var BonusPointsResolverInterface */
    private $bonusPointsResolver;

    /** @var CartContextInterface */
    private $cartContext;

    public function __construct(
        CustomerBonusPointsContextInterface $customerBonusPointsContext,
        BonusPointsResolverInterface $bonusPointsResolver,
        CartContextInterface $cartContext
    ) {
        $this->customerBonusPointsContext = $customerBonusPointsContext;
        $this->bonusPointsResolver = $bonusPointsResolver;
        $this->cartContext = $cartContext;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if (null === $this->customerBonusPointsContext->getCustomerBonusPoints()) {
            return;
        }

        /** @var OrderInterface $cart */
        $cart = $this->cartContext->getCart();

        $bonusPointsAvailable = $this->bonusPointsResolver->resolveBonusPoints($cart);
        if ($bonusPointsAvailable === 0) {
            return;
        }

        $builder
            ->add('bonusPoints', MoneyType::class, [
                'required' => false,
                'currency' => false,
                'scale' => 0,
                'constraints' => [
                    new Range([
                        'min' => 1,
                        'groups' => ['sylius'],
                    ]),
                    new LessThanOrEqual([
                        'value' => $bonusPointsAvailable,
                        'message' => 'bitbag_sylius_bonus_points.order.bonus_points.not_available',
                        'groups' => ['sylius']
                    ])
                ]
            ])
        ;
    }

    public static function getExtendedTypes(): iterable
    {
        return [CartType::class];
    }
}
