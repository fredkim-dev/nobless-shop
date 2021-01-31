<?php

namespace App\Menu;

use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;

final class AdminMenuListener
{
    public function addAdminMenuItems(MenuBuilderEvent $event): void
    {
        $menu = $event->getMenu();
        $subMenu = $menu->getChild('customers');

        $subMenu
            ->addChild('bonus_points', ['route' => 'bitbag_sylius_bonus_points_admin_bonus_points_index'])
            ->setLabel('Bonus points')
            ->setLabelAttribute('icon', 'trophy')
        ;
    }
}
