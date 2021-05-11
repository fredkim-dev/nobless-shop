<?php

declare(strict_types=1);

namespace App\Form\Extension;

use App\Component\ProductBundle\AddProductBundleToCartCommand;
use BitBag\SyliusProductBundlePlugin\Entity\ProductInterface;
use Sylius\Bundle\OrderBundle\Form\Type\CartItemType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class BitBagAddProductBundleToCartType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('cartItem', CartItemType::class, [
                'product' => $options['product'],
            ])
            ->add('productBundleItems', CollectionType::class, [
                'entry_type' => BitBagAddProductBundleItemToCartType::class,
                'entry_options' => [
                    'product' => $options['product'],
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefined([
                'product',
            ])
            ->setAllowedTypes('product', ProductInterface::class)
            ->setDefaults([
                'data_class' => AddProductBundleToCartCommand::class,
            ])
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_sylius_product_bundle_plugin_add_product_bundle_to_cart';
    }
}
