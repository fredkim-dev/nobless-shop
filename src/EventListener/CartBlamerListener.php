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

namespace App\EventListener;

use App\Component\Order\OrderModifier;
use App\Entity\Order\OrderItem;
use BitBag\SyliusProductBundlePlugin\Entity\ProductBundleOrderItemInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Sylius\Bundle\UserBundle\Event\UserEvent;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ShopUserInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;
use Sylius\Component\Resource\Exception\UnexpectedTypeException;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;
use Sylius\Component\Resource\Repository\RepositoryInterface;

/**
 * @author Michał Marcinkowski <michal.marcinkowski@lakion.com>
 */
final class CartBlamerListener
{
    /**
     * @var ObjectManager
     */
    private $cartManager;

    /**
     * @var CartContextInterface
     */
    private $cartContext;

    /**
     * @var CartContextInterface
     */
    private $sessionCartContext;

    /**
     * @var RepositoryInterface
     */
    private $productBundleOrderItemRepository;

    /**
     * @var OrderModifier
     */
    private $orderModifier;

    /**
     * @var OrderItemQuantityModifierInterface
     */
    private $orderItemQuantityModifier;

    /**
     * @param ObjectManager        $cartManager
     * @param CartContextInterface $cartContext
     * @param CartContextInterface $sessionCartContext
     * @param RepositoryInterface $productBundleOrderItemRepository
     * @param OrderModifier $orderModifier
     * @param OrderItemQuantityModifierInterface $orderItemQuantityModifier
     */
    public function __construct(
        ObjectManager $cartManager,
        CartContextInterface $cartContext,
        CartContextInterface $sessionCartContext,
        RepositoryInterface $productBundleOrderItemRepository,
        OrderModifier $orderModifier,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier
    ) {
        $this->cartManager        = $cartManager;
        $this->cartContext        = $cartContext;
        $this->sessionCartContext = $sessionCartContext;
        $this->productBundleOrderItemRepository = $productBundleOrderItemRepository;
        $this->orderModifier = $orderModifier;
        $this->orderItemQuantityModifier = $orderItemQuantityModifier;
    }

    /**
     * @param UserEvent $userEvent
     */
    public function onImplicitLogin(UserEvent $userEvent): void
    {
        $user = $userEvent->getUser();
        if (!$user instanceof ShopUserInterface) {
            return;
        }

        $this->blame($user);
    }

    /**
     * @param InteractiveLoginEvent $interactiveLoginEvent
     */
    public function onInteractiveLogin(InteractiveLoginEvent $interactiveLoginEvent): void
    {
        $user = $interactiveLoginEvent->getAuthenticationToken()->getUser();
        if (!$user instanceof ShopUserInterface) {
            return;
        }

        $this->blame($user);
    }

    /**
     * @param ShopUserInterface $user
     */
    private function blame(ShopUserInterface $user): void
    {
        $cart = $this->getCart();
        if (null === $cart) {
            return;
        }

        $cartItems = [];
        foreach ($cart->getItems() as $itemCart) {
            $cartItems[] = $itemCart;
        }

        try {
            $sessionCart = $this->sessionCartContext->getCart();
        } catch (CartNotFoundException $e) {
            $sessionCart = null;
        }
        if ($sessionCart !== null && $sessionCart->getId() !== $cart->getId()) {
            /** @var OrderItemInterface $item */
            foreach ($sessionCart->getItems() as $item) {
                $newItemInOldCart = array_filter($cartItems, function($oldItem) use($item) {
                    return $oldItem->getVariant()->getId() === $item->getVariant()->getId();
                });

                if ($item->getVariant()->getProduct()->isBundle()
                && !$this->checkOrderItemBundleItems($cartItems, $item)) {
                    $this->addProductBundleOrderItemsToCart($cart, $item, $this->getBundleItems($item));
                } elseif (count($newItemInOldCart) === 0) {
                    $cart->addItem($item);
                }
            }
            $this->cartManager->remove($sessionCart);
            $this->cartManager->persist($sessionCart);
        } else {
            $cart->setCustomer($user->getCustomer());
        }
        $this->cartManager->persist($cart);
        $this->cartManager->flush();
    }

    /**
     * @return OrderInterface|null
     *
     * @throws UnexpectedTypeException
     */
    private function getCart(): ?OrderInterface
    {
        try {
            $cart = $this->cartContext->getCart();
        } catch (CartNotFoundException $exception) {
            return null;
        }

        if (!$cart instanceof OrderInterface) {
            throw new UnexpectedTypeException($cart, OrderInterface::class);
        }

        return $cart;
    }

    /**
     * Necessary function to add the bundle items info to OrderItem
     *
     * @param OrderInterface $cart
     * @param OrderItemInterface $item
     * @param array $bundleItems
     */
    private function addProductBundleOrderItemsToCart(OrderInterface $cart, OrderItemInterface $item, array $bundleItems): void
    {
        $newCartItem = new OrderItem();
        /** @var ProductBundleOrderItemInterface $bundleItem */
        foreach($bundleItems as $bundleItem) {
            $this->orderItemQuantityModifier->modify(
                $newCartItem,
                1
            );
            $newCartItem->addProductBundleOrderItem($bundleItem);
            $newCartItem->setVariant($bundleItem->getProductBundleItem()->getProductBundle()->getProduct()->getVariants()[0]);
        }
        $this->cartManager->persist($newCartItem);

        $this->orderModifier->addToOrder($cart, $newCartItem);
    }

    /**
     * @param OrderItemInterface $orderItem
     * @return array
     */
    private function getBundleItems(OrderItemInterface $orderItem): array
    {
        $orderItemBundleItems = $this->productBundleOrderItemRepository->findBy([
            'orderItem' => $orderItem,
        ]);
        $items = [];
        foreach($orderItemBundleItems as $bundleItem) {
            $items[$bundleItem->getProductVariant()->getId()] = $bundleItem;
        }

        return $items;
    }

    /**
     * Check if bundle with selected variants is in cart
     *
     * @param array $cartItems
     * @param OrderItemInterface $newOrderItem
     * @return bool
     */
    private function checkOrderItemBundleItems(array $cartItems, OrderItemInterface $newOrderItem): bool
    {
        $newBundleItems = $this->getBundleItems($newOrderItem);
        foreach($cartItems as $oldCartItem) {
            if ($oldCartItem->getVariant()->getId() != $newOrderItem->getVariant()->getId()) continue;

            $oldBundleItems = $this->getBundleItems($oldCartItem);
            if(empty(array_diff_key($oldBundleItems, $newBundleItems))) {
                return true;
            }

        }

        return false;
    }
}
