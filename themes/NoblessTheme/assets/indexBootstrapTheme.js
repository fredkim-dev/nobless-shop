/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

import GLightbox from 'glightbox';
import axios from 'axios';

import '../../BootstrapTheme/assets/js/fontawesome';
import SyliusRating from '../../BootstrapTheme/assets/js/sylius-rating';
import SyliusToggle from '../../BootstrapTheme/assets/js/sylius-toggle';
import SyliusAddToCart from '../../BootstrapTheme/assets/js/sylius-add-to-cart';
import SyliusRemoveFromCart from '../../BootstrapTheme/assets/js/sylius-remove-from-cart';
import SyliusApiToggle from '../../BootstrapTheme/assets/js/sylius-api-toggle';
import SyliusApiLogin from '../../BootstrapTheme/assets/js/sylius-api-login';
import SyliusVariantsPrices from '../../BootstrapTheme/assets/js/sylius-variants-prices';
import SyliusVariantImages from '../../BootstrapTheme/assets/js/sylius-variant-images';
import SyliusProvinceField from '../../BootstrapTheme/assets/js/sylius-province-field';
// import SyliusAddressBook from './js/sylius-address-book';
import SyliusLoadableForms from '../../BootstrapTheme/assets/js/sylius-loadable-forms';

// Global axios settings
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
axios.defaults.headers.post.accept = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  const glightbox = GLightbox({ selector: 'glightbox' });

  // Add to cart
  document.querySelectorAll('[data-js-add-to-cart="form"]')
    .forEach(el => SyliusAddToCart(el));

  // Remove from cart
  document.querySelectorAll('[data-js-remove-from-cart-button]')
    .forEach(el => SyliusRemoveFromCart(el));

  // Province field
  SyliusProvinceField();

  // Address book
  // const syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');
  // if (syliusShippingAddress && syliusShippingAddress.querySelector('.choose-address')) {
  //   SyliusAddressBook(syliusShippingAddress);
  // }
  // const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');
  // if (syliusBillingAddress && syliusBillingAddress.querySelector('.choose-address')) {
  //   SyliusAddressBook(syliusBillingAddress);
  // }

  // Variant prices
  SyliusVariantsPrices();

  // Star rating
  document.querySelectorAll('[data-js-rating]').forEach((elem) => {
    new SyliusRating(elem, {
      onRate(value) {
        document.querySelector(`#sylius_product_review_rating_${value - 1}`).checked = true;
      },
    });
  });

  // Toggle and login from checkout
  if (document.querySelector('[data-js-login]')) {
    SyliusApiToggle(document.querySelector('[data-js-login="email"]'));
    SyliusApiLogin(document.querySelector('[data-js-login]'));
  }

  // Toggle billing address on the checkout page
  document.querySelectorAll('[data-js-toggle]').forEach(elem => new SyliusToggle(elem));

  // Product images for variants
  if (document.querySelector('[data-variant-options], [data-variant-code]')) { new SyliusVariantImages(); }

  // Loadable forms
  SyliusLoadableForms();
});
