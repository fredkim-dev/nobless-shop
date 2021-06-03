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

use App\Entity\Customer\Customer;
use Sylius\Bundle\CoreBundle\Form\Type\ContactType;
use Sylius\Bundle\CustomerBundle\Form\Type\GenderType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\NotBlank;

final class ContactTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('gender', GenderType::class, [
                'label' => 'sylius.form.customer.gender',
            ])
            ->add('firstname', TextType::class, [
                'label' => 'sylius.ui.first_name',
                'constraints' => [
                    new NotBlank([
                        'message' => 'sylius.contact.firstname.not_blank',
                    ])
                ],
            ])
            ->add('lastname', TextType::class, [
                'label' => 'sylius.ui.lastname',
                'constraints' => [
                    new NotBlank([
                        'message' => 'sylius.contact.lastname.not_blank',
                    ])
                ],
            ])
            ->add('phoneNumber', TextType::class, [
                'label' => 'sylius.ui.phone_number',
                'required' => false
            ])
            ->add('subject', ChoiceType::class, [
                'label' => 'sylius.ui.subject',
                'choices' => [
                    'order_payment' => 'order_payment',
                    'delivery' => 'delivery',
                    'refund' => 'refund',
                    'product_info' => 'product_info',
                    'account' => 'account',
                    'loyalty_program' => 'loyalty_program',
                    'personal_data' => 'personal_data',
                    'partnership' => 'partnership',
                    'career' => 'career',
                    'noblezz' => 'noblezz',
                    'brand_rights' => 'brand_rights',
                    'other' => 'other'
                ],
                'choice_label' => function ($choice, $key, $value) {
                    return 'sylius.form.contact.choice.subject.' . $key;
                },
                'constraints' => [
                    new NotBlank([
                        'message' => 'sylius.contact.lastname.not_blank',
                    ])
                ],
            ])
            ->add('other_subject', TextType::class, [
                'label' => 'sylius.ui.other_subject',
                'attr' => [
                    'placeholder' => 'sylius.ui.other_subject'
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => 'sylius.ui.message',
                'constraints' => [
                    new NotBlank([
                        'message' => 'sylius.contact.message.not_blank',
                    ]),
                ],
                'attr' => [
                    'rows' => 10
                ]
            ])
            ->add('acceptCgv', CheckboxType::class, [
                'value' => false,
                'required' => true,
                'constraints' => [
                    new IsTrue()
                ],
                'attr' => [
                    'checked' => false,
                ]
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($options): void {
                /** @var Customer $customer */
                $customer = $options['customer'];
                if (null === $customer) {
                    return;
                }

                $data = $event->getData();
                $data['email'] = $customer->getEmail();
                $data['gender'] = $customer->getGender();
                $data['firstname'] = $customer->getFirstName();
                $data['lastname'] = $customer->getLastName();

                $event->setData($data);
            })
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'customer' => null
            ])
        ;
    }

    public static function getExtendedTypes(): iterable
    {
        return [ContactType::class];
    }
}
