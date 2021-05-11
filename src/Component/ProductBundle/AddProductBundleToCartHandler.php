<?php

declare(strict_types=1);

namespace App\Component\ProductBundle;

use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemInterface;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class AddProductBundleToCartHandler implements MessageHandlerInterface
{
    /** @var FactoryInterface */
    private $productBundleOrderItemFactory;

    /** @var OrderModifierInterface */
    private $orderModifier;

    /** @var EntityManagerInterface */
    private $orderEntityManager;

    public function __construct(
        FactoryInterface $productBundleOrderItemFactory,
        OrderModifierInterface $orderModifier,
        EntityManagerInterface $orderEntityManager
    ) {
        $this->productBundleOrderItemFactory = $productBundleOrderItemFactory;
        $this->orderModifier = $orderModifier;
        $this->orderEntityManager = $orderEntityManager;
    }

    public function __invoke(AddProductBundleToCartCommand $addProductBundleToCartCommand): void
    {
        $cart = $addProductBundleToCartCommand->getCart();
        $cartItem = $addProductBundleToCartCommand->getCartItem();

        foreach ($addProductBundleToCartCommand->getProductBundleItems() as $productBundleItem) {
            /** @var ProductBundleOrderItemInterface $productBundleOrderItem */
            $productBundleOrderItem = $this->productBundleOrderItemFactory->createNew();

            $productBundleOrderItem->setProductVariant($productBundleItem->getProductVariant());
            $productBundleOrderItem->setQuantity($productBundleItem->getQuantity());
            $productBundleOrderItem->setProductBundleItem($productBundleItem->getProductBundleItem());
            $cartItem->addProductBundleOrderItem($productBundleOrderItem);
            $cartItem->setVariant($productBundleItem->getProductBundleItem()->getProductBundle()->getProduct()->getVariants()[0]);
        }

        $this->orderModifier->addToOrder($cart, $cartItem);
        $this->orderEntityManager->persist($cart);
        $this->orderEntityManager->flush();
    }
}
