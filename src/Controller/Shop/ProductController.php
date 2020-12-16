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

namespace App\Controller\Shop;

use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends ResourceController
{
    /** @var EngineInterface */
    protected $templatingEngine;

    public function __construct(EngineInterface $templatingEngine) {
        $this->templatingEngine = $templatingEngine;
    }

    public function completeYourStyleAction(Request $request): Response
    {
        $productRepository = $this->container->get('sylius.repository.product');
        $productId = $request->get('product');

        $product = $productRepository->find($productId);
        $products = [];

        foreach($productRepository->findOthersTaxons($product) as $key => $otherProduct) {
            if ($key == 6) {
                break;
            }
            $products[] = $otherProduct;
        }

        return $this->templatingEngine->renderResponse('@SyliusShop/Product/Show/completeYourStyle.html.twig', [
            'complete_your_style_products' => $products
        ]);
    }
}
