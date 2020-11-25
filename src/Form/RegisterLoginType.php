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

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;

final class RegisterLoginType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', EmailType::class, [
                'required' => true,
                'attr'  => [
                    'placeholder' => 'sylius.form.login.username',
                    'class' => 'form-control'
                ]
            ])
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'sylius_register_login';
    }
}
