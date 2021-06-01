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
import serialize from 'form-serialize';
import $ from 'jquery';
import { afterDomReplacementFunctions, updateCartWidgetFunctions } from './sylius-cart-common';

const SyliusUpdateQuantity = (el) => {
  const element = el;
  const url = element.getAttribute('data-js-update-qty-url');
  const csrfToken = element.getAttribute('data-js-update-qty-csrf-token');

  element.addEventListener('click', (e) => {
    $('#cartActions .quantity-error').removeClass('d-block')
    const newQuantity = element.getAttribute('data-js-update-qty-value');
    const request = axios.post(url, {},{ data: {_csrf_token: csrfToken, quantity: newQuantity }} );

    e.preventDefault();
    $('#headerCartItems').addClass('loading').scrollTop(0);

    request.then((response) => {
      updateCartWidgetFunctions(response);
      afterDomReplacementFunctions();

    }).catch((error) => {
      if (error !== undefined) {
        $('#cartActions .quantity-error').addClass('d-block').find('.form-error-message').html((error.response.data).toString()).closest('span').removeClass('d-none');
        $('#headerCartItems').removeClass('loading');
      }
    });
  });
};

export default SyliusUpdateQuantity;
