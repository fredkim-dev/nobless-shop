<?php

declare(strict_types=1);

namespace App\Form\Rule;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;


final class NoRuleConfigurationType extends AbstractType
{


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('configuration', HiddenType::class, [
            ])
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_bonus_points_strategy_rule_no_rule_configuration';
    }
}
