<?php

namespace App\Form\Type\Filter;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SizeFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('size',ChoiceType::class, [
            'label' => false,
            'choices' => [
                'S' => 'S',
                'M' => 'M',
                'L' => 'L',
                'XL' => 'XL',
                'XXL' => 'XXL',
            ],
            'expanded' => true,
            'multiple' => true
        ]);
    }

    public function configureOptions(OptionsResolver $resolver) {}
}
