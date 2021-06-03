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

use App\Validator\Constraints\UnknownPasswordEmail;
use Sylius\Bundle\UserBundle\Form\Type\UserRequestPasswordResetType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GroupSequence;

final class UserRequestPasswordResetTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'sylius.user.email',
                'constraints' => [
                    new UnknownPasswordEmail([
                        'groups' => ['requestPassword']
                    ])
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'validation_groups' => new GroupSequence(['requestPassword']),
        ]);
    }


    public static function getExtendedTypes(): iterable
    {
        return [UserRequestPasswordResetType::class];
    }
}
