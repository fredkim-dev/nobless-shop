<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace App\Form\Extension;

use Sylius\Bundle\CoreBundle\Form\Type\Customer\CustomerRegistrationType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Sylius\Bundle\CustomerBundle\Form\Type\GenderType;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\FormBuilderInterface;

final class CustomerRegistrationTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options = []): void
    {
        $builder
            ->add('birthday', BirthdayType::class, [
                'label' => 'sylius.form.customer.birthday',
                'widget' => 'single_text',
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'sylius.form.customer.birthday.not_blank',
                        'groups' => ['sylius', 'sylius_user_registration'], 
                    ])
                ],
            ])
            ->add('gender', GenderType::class, [
                'label' => 'sylius.form.customer.gender',
            ])
            ->add('subscribedToNewsletter', CheckboxType::class, [
                'required' => false,
                'label' => 'sylius.form.customer.subscribed_to_newsletter_noblezz',
            ])
            ->add('acceptCgv', CheckboxType::class, [
                'value' => false,
                'required' => true,
                'constraints' => [
                    new IsTrue(['groups' => ['sylius', 'sylius_user_registration']])
                ],
                'attr' => [
                    'checked' => false,
                ]
            ])
        ;
    }

    public static function getExtendedTypes(): iterable
    {
        return [CustomerRegistrationType::class];
    }
}
