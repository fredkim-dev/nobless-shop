<?php

declare(strict_types=1);

namespace App\Controller\Shop;

use App\Entity\User\ShopUser;
use Doctrine\Common\Collections\ArrayCollection;
use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\Response;
use Sylius\Component\Taxonomy\Model\Taxon;

class HomepageController extends ResourceController
{
    /** @var EngineInterface */
    private $templatingEngine;

    public function __construct(EngineInterface $templatingEngine)
    {
        $this->templatingEngine = $templatingEngine;
    }

    public function indexAction(Request $request): Response
    {
        return $this->templatingEngine->renderResponse('@SyliusShop/Homepage/index.html.twig');
    }

    public function latestProductsAction(Request $request): Response
    {
        $textCenterClass = $request->get('is_product') ? 'text-center' : '';
        $separatorCenterClass = $request->get('is_product') ? 'mx-auto' : 'mx-3';

        $productsList = $this->container->get('sylius.repository.product')->findLatest();
        shuffle($productsList);

        return $this->templatingEngine->renderResponse('@SyliusShop/Homepage/latestProducts.html.twig',
            array(
                'products' => $productsList,
                'text_center_class' => $textCenterClass,
                'separator_center_class' => $separatorCenterClass
            )
        );
    }

    public function latestBundlesAction(): Response
    {
        $currentLocale = $this->container->get('sylius.context.locale')->getLocaleCode();

        /** @var Taxon $taxon */
        $taxon = $this->container->get('sylius.repository.taxon')
            ->findOneBySlug('bundles', $currentLocale);

        if (!($taxon instanceof Taxon)) {
            throw new NotFoundHttpException('Taxon does not exist with this slug');
        }

        $bundlesList = array();
        $latest = $this->container->get('sylius.repository.product')->findLatestByTaxonId($taxon->getId());
        foreach ($latest as $lBundle) {
            array_push($bundlesList, $lBundle);
        }

        return $this->templatingEngine->renderResponse('@SyliusShop/Homepage/latestBundles.html.twig',
            array(
                'bundles' => $bundlesList
            )
        );
    }
}
