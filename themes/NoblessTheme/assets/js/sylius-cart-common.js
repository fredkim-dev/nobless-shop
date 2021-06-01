import $ from 'jquery';
import SyliusAddToCart from './sylius-add-to-cart';
import SyliusUpdateQuantity from './sylius-update-quantity';
import SyliusRemoveFromCart from './sylius-remove-from-cart';

const cartWidgetContainer = $('#headerCartItems');
const afterDomReplacementFunctions = function domReplacementFunctions() {
  // After Dom replacement, set actions in cart widget again
  document.querySelectorAll('[data-js-remove-from-cart-button]')
    .forEach(el => SyliusRemoveFromCart(el));
  document.querySelectorAll('[data-js-reload-qty-button]')
    .forEach(el => SyliusUpdateQuantity(el));

  $('.ajax-qty', cartWidgetContainer).on('input', function(e) {
    $(this).next().removeClass('d-none');
    $('.reload-qty.ajax').attr('data-js-update-qty-value', $(this).val());
    if (parseInt($(this).val()) >= parseInt($(this).attr('max'))) {
      $(this).val($(this).attr('max'));
    }
  })
}

const updateCartWidgetFunctions = function updateCartWidget(response) {
  const responseData = $.parseHTML(response.data)[0];
  cartWidgetContainer.html($(responseData).find('.ajax-cart-items')[0].innerHTML).scrollTop(0).removeClass('loading');
  $('.cart-count').html($(responseData).find('.ajax-count-cart-items')[0].innerHTML);
  $('#cartActions .cart-subtotal span').last().html($(responseData).find('.ajax-cart-subtotal')[0].innerHTML);
}

const addToCartFunctions = function addToCart() {
  document.querySelectorAll('[data-js-add-to-cart="form"]')
    .forEach(el => SyliusAddToCart(el));
}

export { afterDomReplacementFunctions, updateCartWidgetFunctions, addToCartFunctions };
