<?php

declare(strict_types=1);

namespace App\Controller\Shop;

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
        $currentLocale = $this->container->get('sylius.context.locale')->getLocaleCode();

        /** @var ArrayCollection $taxons */
        $taxons = $this->container->get('sylius.repository.taxon')
            ->findChildrenByChannelMenuTaxon(null, $currentLocale);

        if (count($taxons) === 0) {
            throw new NotFoundHttpException('No Taxons, no products.');
        }

        /** @var Taxon $taxon */
        $productsList = array();
        foreach ($taxons as $taxon) {
            $taxonProducts = $this->container->get('sylius.repository.product')->findByTaxonId($taxon->getId());
            foreach ($taxonProducts as $product) {
                array_push($productsList, $product);
            }
        }
        shuffle($productsList);

        return $this->templatingEngine->renderResponse('@SyliusShop/Homepage/latestProducts.html.twig',
            array(
                'products' => $productsList
            )
        );
    }

    /*public function getLastBundles(): Response
    {
        return $this->templatingEngine->renderResponse('custom.html.twig');
    }*/

    public function displayBundleTitleAction(Request $request): Response
    {
        $currentLocale = $this->container->get('sylius.context.locale')->getLocaleCode();

        /** @var Taxon $taxon */
        $taxon = $this->container->get('sylius.repository.taxon')
            ->findOneBySlug('bundles', $currentLocale);

        if (!isset($taxon)) {
            throw new NotFoundHttpException('Requested taxon does not exist.');
        }

        return new Response($taxon->getName());
    }
}
