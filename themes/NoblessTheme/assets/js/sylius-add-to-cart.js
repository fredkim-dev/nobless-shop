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
import { afterDomReplacementFunctions } from './sylius-cart-common';

const SyliusAddToCart = (el) => {
  const element = el;
  const url = element.getAttribute('action');
  const overlay = document.querySelector('[data-js-loading-overlay]');
  let validationElement = element.querySelector('[data-js-add-to-cart="error"]');

  element.addEventListener('submit', (e) => {
    e.preventDefault();
    const addToCartForm = $(element).closest('form');

    validationElement.classList.remove('d-block');
    const selectedSize = $('input[name^="' + $(addToCartForm).data('nameToCheck') + '"]:checked').length;
    const bundleItemsCount = $('div.bundle-item').length;
    if(selectedSize > 0 && selectedSize < bundleItemsCount ) {
      $(addToCartForm).find('.empty-product:not(.input-checked)').removeClass('d-none').addClass('d-block');
    } else if (selectedSize === 0) {
      $(addToCartForm).find('.empty-product').removeClass('d-none').addClass('d-block');
    } else {
      $(addToCartForm).find('.empty-product').addClass('d-none').removeClass('d-block');

      element.classList.add('loadable', 'loading');
      element.appendChild(overlay.cloneNode(true));
      const request = axios.post(url, serialize(element));
      request.then((response) => {
        validationElement.classList.remove('d-block');
        const responseData = $.parseHTML(response.data)[0];
        $('#cartActions .invalid-feedback').removeClass('d-block');
        if (!$('#emptyCart').hasClass('d-none')) {
          $('#cartItems').removeClass('d-none').addClass('d-flex');
          $('#emptyCart').addClass('d-none');
        }
        $('#headerCartItems').html($(responseData).find('.ajax-cart-items')[0].innerHTML).scrollTop(0).addClass('d-none');
        $('.cart-count').html($(responseData).find('.ajax-count-cart-items')[0].innerHTML);
        $('#headerCartNewItem').html($(responseData).find('.ajax-new-item')[0].innerHTML);
        $('.dropdown.cart-btn .dropdown-toggle').trigger('click');
        $('#cartActions .cart-subtotal').removeClass('d-flex').addClass('d-none');
        $('#cartActions .cart-subtotal span').last().html($(responseData).find('.ajax-cart-subtotal')[0].innerHTML);

        element.classList.remove('loading');
        afterDomReplacementFunctions();

      }).catch((error) => {
        if (error !== undefined) {
          let errorMessage = ''
          element.classList.remove('loading');
          document.querySelectorAll('.invalid-feedback').forEach(function(errorEl) {
            errorEl.classList.remove('d-block');
          });
          if (error.response.data.message !== undefined) {
            if (error.response.data.product_id > 0) {
              validationElement = element.querySelector('[data-js-add-to-cart="error"][data-product-id="'+ error.response.data.product_id +'"]');
            } else {
              validationElement = element.querySelector('[data-js-add-to-cart="error"][data-bundle-error]');
            }
            errorMessage = (error.response.data.message).toString();
          } else {
            errorMessage = (error.response.data).toString();
          }
          validationElement.innerHTML = errorMessage;
          validationElement.classList.add('d-block')
        }
      });
    }
  });
};

export default SyliusAddToCart;
