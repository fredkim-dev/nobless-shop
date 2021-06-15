/***********************/
/* CHECKOUT MANAGEMENT */
/***********************/

import { createAddressCarousel } from './carousel';

// Main function used in init
const saveButton = $('#checkoutPage .save-in-account');
const cancelBtn = $('#checkoutPage .cancel-change-address');

const checkout = function mainFunctions() {
  const container = $('#checkoutPage');
  // When the user wants to change his address
  $('.chosen-address .change-address', container).on('click', function(e) {
    e.preventDefault();
    const addressType = getClassList(this)[1];
    if (!$(this).hasClass('clicked') && !$('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');

      cancelBtn.show();
      cancelBtn.prev().hide();

      $('.checkout-address-form', container).show();
      $('.checkout-address-form .new-address-title', container).hide();

      manageAddressType(addressType, 'change', container);
      createAddressCarousel($('#carouselAddressList'));
      // Create event on address item after carousel is open
      $('.choose-address .choose-address-item address', container).on('click', function(e) {
        chooseAddress($(this), addressType, container);
      });
    } else if ($('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');
      manageAddressType(addressType, 'add', container);
    }
  });

    // When user wants to add a new address to his account
  $('a.checkout-add-address', container).on('click', function(e) {
    e.preventDefault();
    const addressType = getClassList($('.chosen-address .change-address.clicked', container)[0])[1];
    showAddForm(addressType, container);
    manageAddressType(addressType, 'add', container);
  });

  // When user save a new address
  saveButton.on('click', function(e) {
    e.preventDefault();
    let addressType = 'shipping';
    if (!$(this).hasClass('no-addresses')) {
      addressType = getClassList(this)[3];
      $('#checkoutPage .data-' + addressType).each(function() {
        const field = getClassList(this)[1];
        const fieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + field + ']';
        const toSave = '#checkoutPage .main-address-form ' + fieldName;
        const toReplace = '.change-'+ addressType +'-address ' + fieldName;
        $(toReplace).val($(toSave).val());
      });
    }
    checkoutSaveAddress(this, addressType, container);
  });

  // When user clicks on address page next button
  $('.main-address-form button.btn-primary', container).on('click', function(e) {
    e.preventDefault();
    $('.checkout-address-form', container).hide();
    fillAllAddresses(container);
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

  // Bundle details tooltip
  $('.bundle-details')
    .on('mouseover touchmove', function(e) {
      const details = $('.custom-tooltip', $(this)).html();
      if (details.trim() !== '') {
        $('.bundle-details-tooltip').html(details).css({'left': $(this).offset().left + 20, 'top': $(this).offset().top + 20, 'display': 'block'});
      }
    })
    .on('mouseout', function(e) {
      $('.bundle-details-tooltip').html('').css({'display': 'none'});
    });

};

// When user chose an address is the addresses list
function chooseAddress(element, addressType, container) {
  $('.data-address', element).each(function() {
    const fieldName = getClassList(this)[1];
    const fieldSelector = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
    const formField = '#checkoutPage .main-address-form ' + fieldSelector;
    const chosenAddressText = '.data-'+ addressType +'.' + fieldName;

    let chosenValue = $(this).text();
    $(chosenAddressText).text(chosenValue);

    if (fieldName === 'countryCode') {
      chosenValue = $(this).text().substring(0, 2);
    }
    $(formField).val(chosenValue);

    if (fieldName === 'street2') {
      if ($(this).text().trim() !== '') {
        $('.street2-container-' + addressType).removeClass('d-none');
      } else {
        $('.street2-container-' + addressType).addClass('d-none');
      }
    }

    $(chosenAddressText).closest('address').attr('data-' + getDataFieldName(fieldName), chosenValue);
  });
  $('#sylius_checkout_address_differentBillingAddress', container).prop('checked', true);
  hideChangeAddress(container);
}

/* Save address in user account : Returns errors in form if not valid */
function checkoutSaveAddress(element, addressType, container) {
  const form = $(element).closest('form');
  $('input[name="address_type"]', form).val(addressType);
  fillOtherAddress(addressType, container);

  $('.save-address-form form', container).addClass('loading');
  $.ajax({
    type: "POST",
    url: form.attr('action'),
    data: form.serialize(),
    success: function(response) {
      const dataSuccessDiv = $(response);
      const noAddress = saveButton.hasClass('no-addresses');
      if(dataSuccessDiv.hasClass('save-address-success')) {
        $('.chosen-address .data-' + addressType, container).each(function() {
          const fieldName = getClassList(this)[1];

          fillDataAfterSave(this, addressType, fieldName, dataSuccessDiv);
          // If User doesn't have addresses
          if (noAddress) {
            const element = $('.chosen-address .data-' + getOtherAddressType(addressType) + '.' + fieldName, container);
            fillDataAfterSave(element, getOtherAddressType(addressType), fieldName, dataSuccessDiv);
          }

          $('.address-book', container).html($('.address-book', dataSuccessDiv).html());
        });
        if (noAddress) {
          $('.chosen-address address.cancel-info').removeClass('d-none');
          $('.no-addresses-text', container).addClass('d-none');
          showMainForm(container);
        }
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

/* Fill address form fields to avoid errors */
function fillAddress(fieldId, addressType, form, container) {
  const keepCamelField = ['firstName', 'lastName', 'countryCode'];
  const dataToFill = $('.chosen-address address.cancel-info.' + addressType, container).data();
  $(form + ' [id^="' + fieldId + '"]', container).each(function() {
    const regex = /\[(\w+)\]$/gm;
    let fieldName = regex.exec($(this).attr('name'))[1];
    if (!keepCamelField.includes(fieldName)) {
      fieldName = fieldName.toLowerCase();
    }
    $(this).val(dataToFill[fieldName]);
  });
  $('#inAccount_save_differentBillingAddress', container).prop('checked', true);
}

/* Fill addresses when user clicks on next button */
function fillAllAddresses(container) {
  ['shipping', 'billing'].forEach((addressType) => {
    const fieldId = 'sylius_checkout_address_' + addressType + 'Address';
    fillAddress(fieldId, addressType, '.main-address-form', container)
  })
}

/* Fill other address type form when saving new address */
function fillOtherAddress(addressType, container) {
  const otherAddressType = getOtherAddressType(addressType);
  let fieldId = 'inAccount_save_' + otherAddressType;
  if (saveButton.hasClass('no-addresses')) {
    fillOtherForm(addressType, otherAddressType, '.save-address-form', container);
  } else {
    fillAddress(fieldId, otherAddressType, '.save-address-form', container);
  }
}

// Fill other new address form ONLY IF user don't have addresses yet
function fillOtherForm(addressType, otherAddressType, form, container) {
  const fieldId = 'inAccount_save_' + addressType;
  const otherFieldId = 'inAccount_save_' + otherAddressType;
  $(form + ' [id^="' + fieldId + '"]', container).each(function() {
    const regex = /\[(\w+)\]$/gm;
    let fieldName = regex.exec($(this).attr('name'))[1];
    if (fieldName !== 'countryCode') {
      fieldName = fieldName.toLowerCase();
    }
    const idToFill = '#' + otherFieldId + '_' + fieldName;
    $(idToFill).val($(this).val());
  });
}

// Fill form and div data when save new address
function fillDataAfterSave(element, addressType, fieldName, container) {
  // Get value from ajax return
  const newValue = $('.data-' + addressType + '-success.' + fieldName, container).html();

  // Create main form field selector
  const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
  const fieldToReplace = '#checkoutPage .main-address-form ' + formFieldName;

  // Replace field with value from ajax return
  $(fieldToReplace).val(newValue);

  // Replace text with value from ajax return
  $(element).text(newValue);
  if (fieldName === 'countryCode') {
    $(element).text($('.data-' + addressType + '-success.countryName', container).html());
  }

  // Show or hide street2 container according to value
  if (fieldName === 'street2') {
    if ($('.data-' + addressType + '-success.' + fieldName, container).html().trim() !== '') {
      $('.street2-container-' + addressType).removeClass('d-none');
    } else {
      $('.street2-container-' + addressType).addClass('d-none');
    }
  }

  // Fill address div data
  $('.chosen-address .cancel-info.' + addressType).attr('data-' + getDataFieldName(fieldName), newValue);
}

/* Show Main form when user have no addresses */
function showMainForm(container) {
  // Hide div mentioning that use doesn't have addresses
  $('.no-address-yet', container).remove();
  // Hide add new address form
  $('.add-shipping-address', container).removeClass('d-block');
  // Hide add new address form title
  $('.new-address-title', container).addClass('d-none');
  $('.new-address-title .use', container).removeClass('d-none');
  $('.new-address-title .add', container).addClass('d-none');
  // Show navigation buttons from main form
  $('.cancel-add-checkout-address', container).removeClass('d-none').next('a.btn').addClass('d-none');
  $('.save-checkout-address-navigation', container).removeClass('d-none');
  $('.chosen-address .change-address', container).removeClass('d-none');
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
  // Use addressType chosen when save form is shown
  let addressType = getClassList(saveButton[0])[3];
  if (addressType === 'no-addresses') {
    addressType = getClassList(saveButton[0])[4];
  }
  $('.change-' + addressType + '-title', container).show();
  $('.change-' + getOtherAddressType(addressType) + '-title', container).hide();

  $('.save-address-form form', container).removeClass('loading');
  $('.save-address-form input, .save-address-form select', container).removeClass('is-invalid');
  $('.save-address-form .invalid-feedback', container).remove();
}

/* Replace all form and displayed address data when cancel modifications */
function cancelChangeAddress(container) {
  $('.chosen-address address.cancel-info', container).each(function() {
    const oldData = $(this).data();
    const addressType = (this.className.split(/\s+/))[1];
    const fieldNames = Object.keys(oldData);

    fieldNames.forEach((element) => {
      let fieldName = element;
      if (element === 'countryName') {
        fieldName = 'countryCode'
      }
      const textToReplace = '.data-' + addressType + '.' + fieldName;
      const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
      const fieldToReplace = '.main-address-form ' + formFieldName;

      // Set form with old data
      $(fieldToReplace, container).val(oldData[element]);
      if (element !== 'countryCode') {
        // Set chosen Address with old data
        $(textToReplace).text(oldData[element]);
      }
    });
  });
}

// Show add address form
function showAddForm(addressType, container) {
  $('.checkout-address-form', container).hide();
  $('.save-checkout-address-navigation', container).hide();

  $('.save-address-form .new-address-title', container).removeClass('d-none');
  $('.save-address-form input[type="text"]', container).val('');
  $('.save-address-form', container).addClass('d-block');

  // Hide all save address forms before showing the chosen one
  $('.save-address-form [class^="add-"]', container).hide();
  $('.save-address-form .add-' + addressType + '-address', container).show();
}

/* Manage what type of address will be replace and/or saved */
function manageAddressType(addressType, selectorType, container) {
  $('.' + selectorType + '-' + addressType + '-title', container).show();
  $('.' + selectorType + '-' + getOtherAddressType(addressType) + '-title', container).hide();

  // Also Manage SaveButton class
  saveButton.addClass(addressType);
  saveButton.removeClass(getOtherAddressType(addressType));
}

/********************/
/* COMMON FUNCTIONS */
/********************/

// Get class list from given element
function getClassList(element) {
  return element.className.split(/\s+/);
}

// Get field name to fill data info in .cancel-info div
function getDataFieldName(fieldName) {
  const matches = /[A-Z]/gm.exec(fieldName);
  if (matches !== null) {
    return (fieldName.substr(0, matches.index) + '-' + fieldName.substr(matches.index, fieldName.length)).toLowerCase();
  }

  return fieldName;
}

// Get other address type from address type give
function getOtherAddressType(addressType) {
  return (addressType === 'shipping') ? 'billing' : 'shipping';
}

export default checkout;
