/************************/
/* CART PAGE MANAGEMENT */
/************************/

const container = $('#cartPage');
const bodyContainer = $('body');

const cart = function mainFunctions() {
  // When reloading quantities
  // Desktop
  $('.reload-qty', container).on('click', function() {
    if ($(this).hasClass('mobile')) {
      $('form.form-to-submit').trigger('submit');
    } else {
      $(this).closest('form').trigger('submit');
    }
  });

  // Mobile
  $('.mobile-qty', container).on('input', function() {
    const newQty = parseInt($(this).val());
    if (newQty >= parseInt($(this).attr('max'))) {
      const inputQtyName = $(this).data('input-qty');
      $('input[name="' + inputQtyName + '"]').val(newQty);
    }
  });

  // Prevent customer to add more than 5 times a product
  $('.qty', container).on('input', function (e) {
    if (parseInt($(this).val()) >= parseInt($(this).attr('max'))) {
      $(this).val($(this).attr('max'));
    }
  });

  // Apply coupon code
  $('.coupon-code-btn', container).on('click', function() {
    // If cart has product not in stock, disable coupon code
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      const coupon = $('.coupon-code').val();
      if (coupon === '') {
        $('#sylius_cart_promotionCoupon').val('')
      } else {
        $('#sylius_cart_promotionCoupon').val(coupon);
      }

      $('form.form-to-submit').trigger('submit');
    }
  });

  // When coupon code input is filled, hide error container
  bodyContainer.on("keydown", ".coupon-code", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.coupon-error').html('');
  });

  if($('.coupon-code-error .form-error-message', container).html() !== undefined) {
    $('.coupon-input').addClass('invalid-code');
    $('.coupon-error').html($('.coupon-code-error .form-error-message').html());
    $('.coupon-code').val($('#sylius_cart_promotionCoupon').val());
  }

  // Apply bonus points
  $('.bonus-points-btn', container).on('click', function() {
    // If cart has product not in stock, disable coupon code
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      const bonusPoints = $('.bonus-points').val();
      if (bonusPoints === '') {
        $('#sylius_cart_bonusPoints').val('');
      } else {
        $('#sylius_cart_bonusPoints').val(bonusPoints);
      }
      $('form.form-to-submit').trigger('submit');
    }
  });

  $('.delete-bonus-points', container).on('click', function() {
    // If cart has product not in stock, disable bonus points
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      $('#sylius_cart_bonusPoints').val('');
      $('form.form-to-submit').trigger('submit');
    }
  });

  // When bonus points input is filled, hide error container
  bodyContainer.on("keydown", ".bonus-points", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.bonus-points-error').html('');
  });

  if($('#bitbag-bonus-points .form-error-message', container).html() !== undefined) {
    $('.bonus-points-input').addClass('invalid-code');
    $('.bonus-points-error').html($('#bitbag-bonus-points .form-error-message').html());
    $('.bonus-points').val($('#sylius_cart_bonusPoints').val());
  }

  // If cart has product not in stock, disable button linked to checkout page
  $('a.btn-to-checkout', container).on('click', function(e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
    }
  });
}

export default cart;
