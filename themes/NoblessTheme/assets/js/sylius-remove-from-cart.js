/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

import axios from 'axios';
import $ from 'jquery';
import { afterDomReplacementFunctions, updateCartWidgetFunctions } from './sylius-cart-common';

const SyliusRemoveFromCart = (el) => {
  const element = el;
  const redirectUrl = element.getAttribute('data-js-remove-from-cart-redirect-url');
  const csrfToken = element.getAttribute('data-js-remove-from-cart-csrf-token');
  const url = element.getAttribute('data-js-remove-from-cart-api-url');

  element.addEventListener('click', (e) => {
    e.preventDefault();
    $('#headerCartItems').addClass('loading').scrollTop(0);

    axios.delete(url, { data: { _csrf_token: csrfToken } })
      .then((response) => {
        if (redirectUrl !== undefined && !element.classList.contains('delete-product-ajax')) {
          window.location.replace(redirectUrl);
        } else {
          updateCartWidgetFunctions(response);
          afterDomReplacementFunctions();
        }
      });
  });
};

export default SyliusRemoveFromCart;
