<?php


namespace App\Twig\Extension;

use App\Entity\Order\Order;
use App\Entity\Product\Product;
use App\Entity\Product\ProductVariant;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Twig\Environment;

class ProductVariants extends AbstractExtension
{
    private $twig;

    private $entityManager;

    public function __construct(Environment $twig, EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->twig = $twig;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('sylius_product_variants', [$this, 'getVariants'], ['is_safe' => ['html']]),
            new TwigFunction('sylius_product_out_of_stock', [$this, 'hasProductOutOfStock'], ['is_safe' => ['html']])
        ];
    }

    public function getVariants(Product $product): string
    {
        $variants = $this->entityManager->getRepository(ProductVariant::class)->getProductVariants($product);
        return $this->twig->render('@SyliusShop/Product/_boxVariant.html.twig', [
            'productVariants' => $variants,
        ]);
    }

    /**
     * Check if products out of stock are in the cart
     *
     * @param OrderInterface $order
     * @return bool
     */
    public function hasProductOutOfStock(OrderInterface $order): bool
    {
        foreach($order->getItems() as $product) {
            if ($product->getVariant()->getOnHand() === 0) {
                return true;
            }
        }

        return false;
    }
}
