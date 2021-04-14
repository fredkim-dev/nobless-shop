<?php

namespace App\Form\Type\Filter;

use App\Entity\Product\ProductTaxon;
use App\Entity\Product\ProductVariant;
use App\Entity\Taxonomy\Taxon;
use Sylius\Bundle\TaxonomyBundle\Doctrine\ORM\TaxonRepository;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class PriceFilterType extends AbstractType
{
    private $entityManager;

    private $requestStack;

    private $localeContext;

    private $taxonRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        RequestStack $requestStack,
        LocaleContextInterface $localeContext,
        TaxonRepository $taxonRepository)
    {
        $this->entityManager = $entityManager;
        $this->requestStack = $requestStack;
        $this->localeContext = $localeContext;
        $this->taxonRepository = $taxonRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $taxonSlug = $this->requestStack->getCurrentRequest()->get('slug');
        $taxon = $this->taxonRepository->findOneBySlug($taxonSlug, $this->localeContext->getLocaleCode());
        $minMaxPrices = $this->entityManager->getRepository(ProductVariant::class)->getMinAndMaxPrices($taxon)[0];
        $minPrice = floor($minMaxPrices['minPrice'] / 100);
        $maxPrice = ceil($minMaxPrices['maxPrice'] / 100);
        $builder
            ->add('price_1',MoneyType::class, [
                'label' => false,
                'divisor' => 100,
                'scale' => 0,
                'empty_data' => (string)$minPrice,
                'attr' => [
                    'data-min' => (string)$minPrice,
                    'data-max' => (string)$maxPrice,
                    'class' => 'price-input'
                ]
            ])
            ->add('price_2',MoneyType::class, [
                'label' => false,
                'divisor' => 100,
                'scale' => 0,
                'empty_data' => (string)$maxPrice,
                'attr' => [
                    'data-min' => (string)$minPrice,
                    'data-max' => (string)$maxPrice,
                    'class' => 'price-input'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {}
}
