
// Main function used in init
const saveButton = $('#checkoutPage .save-in-account');
const cancelBtn = $('#checkoutPage .cancel-change-address');

const checkout = function mainFunctions(container) {
  // When the user wants to change his address
  $('.chosen-address .change-address', container).on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass('clicked') && !$('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');

      cancelBtn.show();
      cancelBtn.prev().hide();

      $('.checkout-address-form', container).show();

      addressTypeManage(this, 'change', container);
      setAddressCarousel();
    } else if ($('.save-address-form', container).hasClass('d-block')) {
      addressTypeManage(this, 'add', container);
    }
    setChooseNewAddress($('.choose-address-item', container), container);
  });

  // When user wants to add a new address to his account
  $('a.checkout-add-address', container).on('click', function(e) {
    e.preventDefault();
    const classListBtn = $('.chosen-address .change-address.clicked', container)[0].className.split(/\s+/);
    $('.checkout-address-form', container).hide();
    $('.save-checkout-address-navigation', container).hide();
    $('.save-address-form input[type="text"]', container).val('');
    $('.save-address-form', container).addClass('d-block');
    $('.save-address-form .add-' + classListBtn[1] + '-address', container).show();
    addressTypeManage(saveButton, 'add', container);
  });

  // When user save a new address
  $('.save-address-navigation button', container).on('click', function(e) {
    e.preventDefault();
    const classListBtn = e.currentTarget.className.split(/\s+/);
    $('#checkoutPage .data-' + classListBtn[3]).each(function() {
      const classList = this.className.split(/\s+/);
      const fieldName = '[name="sylius_checkout_address[' + classListBtn[3] + 'Address][' + classList[1] + ']';
      const toSave = '#checkoutPage .main-address-form ' + fieldName;
      const toReplace = '.change-'+ classListBtn[3] +'-address ' + fieldName;
      $(toReplace).val($(toSave).val());
    });
    checkoutSaveAddress(e.currentTarget, classListBtn[3], container);
  });

  // When user clicks on address page next button
  $('.main-address-form button.btn-primary', container).on('click', function(e) {
    e.preventDefault();
    $('.checkout-address-form', container).hide();
    $(this).closest('form').addClass('loading').submit();
  })

  // When user cancels the address changes
  $('a.cancel-change-address', container).on('click', function(e) {
    e.preventDefault();
    hideChangeAddress(container);
    hideSaveAddressForm(container);
    cancelChangeAddress(container);
  });

  // When user cancels the address add
  $('a.cancel-add-checkout-address', container).on('click', function(e) {
    $('.checkout-address-form', container).show();
    $('.save-checkout-address-navigation', container).show();
    $('.save-address-form', container).removeClass('d-block');
    $('.save-address-form [class^="add-"]', container).hide();
    hideSaveAddressForm(container);
  });
};

const setChooseNewAddress = function chooseAddress(element, container) {
  // When user chose an address
  element.on('click', function(e) {
    $('.data-address', this).each(function() {
      const fieldName = this.className.split(/\s+/)[1];
      const addressType = $('.chosen-address .change-address.clicked', container)[0].className.split(/\s+/)[1];
      const fieldSelector = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
      const formField = '#checkoutPage .main-address-form ' + fieldSelector;
      const chosenAddressText = '.data-'+ addressType +'.' + fieldName;

      if (fieldName === 'countryCode') {
        $(formField).val($(this).text().substring(0, 2));
      } else {
        $(formField).val($(this).text());
      }

      if (fieldName === 'street2') {
        if ($(this).text().trim() !== '') {
          $('.street2-container-' + addressType).removeClass('d-none');
        } else {
          $('.street2-container-' + addressType).addClass('d-none');
        }
      }
      $(chosenAddressText).text($(this).text());
    });
    hideChangeAddress(container);
  });
}

/* Save address in user account : Returns errors in form if not valid */
function checkoutSaveAddress(element, addressType, container) {
  const form = $(element).closest('form')
  if ($('input[name="address_type"]', form).length) {
    $('input[name="address_type"]', form).val(addressType);
  }
  fillOtherAddress(addressType, container);
  $('.save-address-form form', container).addClass('loading');

  $.ajax({
    type: "POST",
    url: form.attr('action'),
    data: form.serialize(),
    success: function(response) {
      const dataSuccessDiv = $(response);
      if(dataSuccessDiv.hasClass('save-address-success')) {
        $('.chosen-address .data-' + addressType, container).each(function() {
          const classList = this.className.split(/\s+/);
          const fieldName = classList[1];

          const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
          const fieldToReplace = '#checkoutPage .main-address-form ' + formFieldName;

          let newValue = $('.data-' + addressType + '-success.' + fieldName, dataSuccessDiv).html();

          $(fieldToReplace).val(newValue);
          $(this).text(newValue)
          if (fieldName === 'countryCode') {
            $(this).text($('.data-' + addressType + '-success.countryName', dataSuccessDiv).html());
          }

          if (fieldName === 'street2') {
            if ($('.data-' + addressType + '-success.' + fieldName, dataSuccessDiv).html().trim() !== '') {
              $('.street2-container-' + addressType).removeClass('d-none');
            } else {
              $('.street2-container-' + addressType).addClass('d-none');
            }
          }
          $('.address-book', container).html($('.address-book', dataSuccessDiv).html());
        });
        hideChangeAddress(container);
        hideSaveAddressForm(container);
      }
    },
    error: function(error) {
      hideSaveAddressForm(container);
      $($.parseHTML(error.responseText)[1]).find('.form-error-message').each(function() {
        const fieldName = $(this).closest('label').attr('for');
        const fieldError = $(this).text();
        $('.save-address-form [id="'+ fieldName +'"]', container).addClass('is-invalid').after('<span class="invalid-feedback d-block"><span class="form-error-message d-block">' + fieldError + '</span></span>');
      });
    }
  })
}

/* Fill other address fields to avoid errors */
function fillOtherAddress(addressType, container) {
  const otherAddressType = (addressType === 'shipping') ? 'billing' : 'shipping';
  $('.save-address-form input[id^="inAccount_save_' + otherAddressType + '"]', container).each(function() {
    const regex = /\[(\w+)\]$/gm;
    const fieldName = regex.exec($(this).attr('name'))[1];
    const dataToFill = $('.chosen-address address.cancel-info.' + otherAddressType, container).data();
    $(this).val(dataToFill[fieldName]);
  });
  $('#inAccount_save_differentBillingAddress', container).prop('checked', true);
}

/* Hide address modification container */
function hideChangeAddress(container) {
  $('.save-checkout-address-navigation', container).show();
  $('.checkout-address-form', container).hide();
  cancelBtn.hide();
  cancelBtn.prev().show();
  $('.save-address-form', container).removeClass('d-block');
  $('.chosen-address .change-address', container).removeClass('clicked');
  $('#mainContentContainer')[0].scrollTop = 0;
}

/* Remove error indicators when save address form is submitted */
function hideSaveAddressForm(container) {
  $('.save-address-form form', container).removeClass('loading');
  $('.save-address-form input', container).removeClass('is-invalid');
  $('.save-address-form .invalid-feedback', container).remove();
}

/* Replace all form and displayed address data when cancel modifications */
function cancelChangeAddress(container) {
  $('.chosen-address address.cancel-info', container).each(function() {
    const oldData = $(this).data();
    const addressType = (this.className.split(/\s+/))[1];
    const fieldNames = Object.keys(oldData);

    fieldNames.forEach(function(element) {
      let fieldName = element;
      if (element === 'countryName') {
        fieldName = 'countryCode'
      }
      const textToReplace = '.data-' + addressType + '.' + fieldName;
      const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
      const fieldToReplace = '.main-address-form ' + formFieldName;

      // Set form with old data
      $(fieldToReplace, container).val(oldData[element]);
      if (element === 'countryCode') {
        $(fieldToReplace, container).val(oldData[element]);
      } else {
        // Set chosen Address with old data
        $(textToReplace).text(oldData[element]);
      }
    });
  });
}

/* Create carousel when user have more than 4 addresses */
function setAddressCarousel() {
  const opts = {
    infinite: true,
    speed: 700,
    rows: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    adaptiveHeight: true,
    appendArrows: jQuery('#carouselAddressList').next('.slider-controls'),
    prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Next</button></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows: 4,
          slidesPerRow: 1
        }
      }
    ]
  };

  let slider = $('#carouselAddressList');
  if(slider && !slider.hasClass('slick-initialized')) {
    slider.slick(opts);
  }
}

/* Manage what type of address will be replace and/or saved */
function addressTypeManage(btnElement, selectorType, container) {
  if ($(btnElement).hasClass('shipping')) {
    $('.' + selectorType + '-shipping-title', container).show();
    $('.' + selectorType + '-billing-title', container).hide();
    saveButton.removeClass('billing');
    saveButton.addClass('shipping');
  }
  if ($(btnElement).hasClass('billing')) {
    $('.' + selectorType + '-billing-title', container).show();
    $('.' + selectorType + '-shipping-title', container).hide();
    saveButton.removeClass('shipping');
    saveButton.addClass('billing');
  }
}

export default checkout;
