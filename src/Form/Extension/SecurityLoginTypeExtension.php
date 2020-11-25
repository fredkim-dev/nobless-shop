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

use Sylius\Bundle\UiBundle\Form\Type\SecurityLoginType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

final class SecurityLoginTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('_username', TextType::class, [
                'attr'  => [
                    'placeholder' => 'sylius.form.login.username'
                ]
            ])
            ->add('_password', PasswordType::class, [
                'attr'  => [
                    'placeholder' => 'sylius.form.login.password'
                ]
            ])
        ;
    }

    public static function getExtendedTypes(): iterable
    {
        return [SecurityLoginType::class];
    }
}
