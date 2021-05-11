/**********************/
/* PRODUCT MANAGEMENT */
/**********************/
import noUiSlider from 'nouislider';

const priceContainerSelector = '#productsFilters';
const priceContainerSelectorMobile = '#productsFiltersMobile';

const priceMinSelector = 'input[name="criteria[price][price_1]"]';
const priceMaxSelector = 'input[name="criteria[price][price_2]"]';

const product = function mainFunctions() {
  // Manage variant list when clicking in size available
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function(event) {
    const bundleItem = $(this).data('bundle-item');
    const variantListContainer = $(this).closest('div.variant-list');

    if(bundleItem !== undefined) {
      $('.variant-name[data-bundle-item="' + bundleItem + '"]').removeClass('variant-selected');
    } else {
      $('.variant-list .variant-name').removeClass('variant-selected');
    }
    $('.invalid-feedback', variantListContainer).removeClass('d-block').addClass('d-none');

    if ($(this).data('almost-out') !== undefined) {
      $('.last-product-in-stock', variantListContainer).removeClass('d-none').addClass('d-block');
    } else {
      $('.last-product-in-stock', variantListContainer).removeClass('d-block').addClass('d-none');
    }
    $(this).addClass('variant-selected');
  });

  // Show or hide variants list in products carousel according to screen size
  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top')
    .on('mouseenter', function() {
      if ($(document).width() > 1440) {
        $('.variants-container', this).show();
      }
    }).on('mouseleave', function() {
    $('.variants-container', this).hide();
  });

  // When clicking on add to cart button
  $('#sylius-product-adding-to-cart .btn-primary').on('click', function(e) {
    e.preventDefault();
    $('.variant-list .invalid-feedback').removeClass('d-block').addClass('d-none');
    const addToCartForm = $(this).closest('form');
    const selectedSize = $('input[name^="' + $(addToCartForm).data('nameToCheck') + '"]:checked').length;
    const bundleItemsCount = $('div.bundle-item').length;
    if(selectedSize > 0 && selectedSize < bundleItemsCount ) {
      $(addToCartForm).find('.empty-product:not(.input-checked)').removeClass('d-none').addClass('d-block');
    } else if (selectedSize === 0) {
      $(addToCartForm).find('.empty-product').removeClass('d-none').addClass('d-block');
    } else {
      $(addToCartForm).find('.empty-product').addClass('d-none').removeClass('d-block');
      $(addToCartForm).trigger('submit');
    }
  })

  $('input[id^="bitbag_sylius_product_bundle_plugin_add_product_bundle_to_cart_"]').on('change', function(e) {
    $(this).closest('div').find('span.invalid-feedback').addClass('input-checked').addClass('d-none').removeClass('d-block');
  })
};

const filterProducts = function filterProductFunctions() {
  const queryString = window.location.search;
  const criteria = queryString.indexOf('criteria');
  const priceInput = $('.price-filter .price-input');

  let priceSlider;
  let priceSliderMobile;

  if (priceInput.length > 0) {
    priceSlider = createPriceSlider(priceInput, priceContainerSelector);
    priceSliderMobile = createPriceSlider(priceInput, priceContainerSelectorMobile);

    // When user changes price input value
    priceInput.on('keyup', function(e) {
      if(e.which !== 8 && !isNaN(String.fromCharCode(e.which))){
        setSliderNewValue(priceSlider, $(priceContainerSelector));
        setSliderNewValue(priceSliderMobile, $(priceContainerSelectorMobile));
      }
    });
  }

  /**
   * MANAGE DESKTOP FILTERS
   */
  // Size filter management
  const sizeFilterInput = $('#sizeFilter input');
  sizeFilterInput.each(function( index ) {
    if(this.checked) {
      $(this).next('label').addClass('selected');
      $('input[data-id="' + $(this).attr('id') + '"]').attr('checked', 'checked').next('label').addClass('selected');
    }
  });
  sizeFilterInput.on('change', function(e) {
    if(e.target.checked) {
      $(e.target).next('label').addClass('selected');
    } else {
      $(e.target).next('label').removeClass('selected');
    }
  });
  // Validate filters on desktop
  $('a.validate-filter').on('click', function(e) {
    e.preventDefault();
    checkPriceValue(priceSlider, $(priceContainerSelector));
    checkPriceValue(priceSliderMobile, $(priceContainerSelectorMobile));
    $('#productFilterForm').submit();
  });

  /**
   * MANAGE MOBILE FILTERS
   */
  // Size filter management on mobile
  $('#criteriaSizeMobile input').on('change', function(e) {
    const inputToCheck = $(e.target).data('id');
    if(e.target.checked) {
      $(e.target).next('label').addClass('selected');
      $('#' + inputToCheck).attr('checked', 'checked').next('label').addClass('selected');
    } else {
      $(e.target).next('label').removeClass('selected');
      $('#' + inputToCheck).removeAttr('checked').next('label').removeClass('selected');
    }
  });

  // Sorting
  $('#productFilterMobileForm .radio-container input.input-sorting').on('change', function(e) {
    $('#productFilterMobileForm .radio-container input').removeAttr('checked');
    $('#productFilterMobileForm .radio-container .checkmark .checked').removeClass('d-block');
    $(e.target).attr('checked', 'checked');
    $(e.target).next('.checkmark').find('.checked').addClass('d-block');
  });

  // Validate filters
  $('#productFilterMobileForm button.btn-primary').on('click', function(e) {
    e.preventDefault();
    if($('.input-sorting:checked').val() === 'createdAt') {
      $('.input-sorting:checked').remove();
      $('.input-sorting-createdAt').attr('checked', true).removeClass('d-none').addClass('d-inline-block');
    }
    checkPriceValue(priceSlider, $(priceContainerSelector));
    checkPriceValue(priceSliderMobile, $(priceContainerSelectorMobile));
    $(this).closest('form').submit();
  })

  // Mobile filters behaviour
  $('.product-filters.dropdown').on('show.bs.dropdown', function(e) {
    if ($(document).width() <= 1200) {
      resizeFilterMenu();
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');

      $(".screen-overlay-filters").addClass("show");
      $('body').addClass("offcanvas-active");
      $('.close', $(priceContainerSelectorMobile)).removeClass("d-none");
    }
  }).on('hidden.bs.dropdown', function(e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-filters").removeClass("show");
      $('body').removeClass("offcanvas-active");
      $('.close', $(priceContainerSelectorMobile)).addClass("d-none");
    }
  });

  /**
   * GENERAL FUNCTIONS
   */
  // Hide reinitialization button when filters have no criteria
  if (criteria !== -1) {
    $('.reinit-filter').removeClass('d-none')
  }
  // Add action to close icon
  $('.close', $(priceContainerSelectorMobile)).on('click', function(e) {
    e.preventDefault();
    $('.dropdown-toggle', $(priceContainerSelectorMobile)).trigger('click');
  })
}

/**
 * Function called when window is resized to avoid showing filter mobile menu on desktop
 */
const resizeFilterMenu = function resizeFilterMobileMenu() {
  if ($(document).width() > 1200) {
    $(".screen-overlay-filters").removeClass("show");
  } else {
    const headerContainer = $('#headerContainer');
    const headerBanner = $('.header-banner');
    const headerHeight = headerContainer.height() - headerBanner.height();
    const headerOuterHeight = headerContainer.outerHeight() - headerBanner.height();
    const filterListContainerHeight = $('#productsFiltersMobile .dropdown-menu').height() - $('header').height() - $('#filterSubmit').outerHeight() - 10;
    $('#productsFiltersMobile').css('height', 'calc(100% - ' + headerHeight + 'px)');
    $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
    $('#filterList').css('height', filterListContainerHeight + 'px');
  }
}

/**
 * Create price slider on taxon pages
 *
 * @param priceInput
 * @param containerSelector
 * @returns noUiSlider
 */
function createPriceSlider(priceInput, containerSelector) {
  const priceContainer = $(containerSelector);
  const priceRange = $('#priceRange', priceContainer)[0];
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);
  // Prepare slider options
  const taxonMinPrice = parseFloat(priceInput.first().data('min'));
  const taxonMaxPrice = parseFloat(priceInput.first().data('max'));
  const rangeSliderOptions = {
    start: [priceMin.val(), priceMax.val()],

    range: {
      'min': [taxonMinPrice],
      'max': [taxonMaxPrice]
    },
    step: 1,
    connect: true,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return value;
      }
    },
    behaviour: 'tap',
    tooltips: false
  };

  const slider = noUiSlider.create(priceRange, rangeSliderOptions);
  slider.on('slide', function(newValue) {
    priceMin.val(parseInt(newValue[0]));
    priceMax.val(parseInt(newValue[1]));
  });

  return slider;
}

function setSliderNewValue(priceSlider, priceContainer) {
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);

  const newValue = [priceMin.val(), priceMax.val()];
  priceSlider.set(newValue);
}

/**
 * Check price values before send form
 * @param priceSliderObject
 * @param priceContainer
 */
function checkPriceValue(priceSliderObject, priceContainer) {
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);
  const priceInput = $('.price-filter .price-input').first();
  let priceMinValue = priceMin.val();
  let priceMaxValue = priceMax.val();
  if (priceMin.val() < priceInput.data('min')) {
    priceMinValue = priceInput.data('min');
  }
  if (priceMin.val() > priceInput.data('max')) {
    priceMinValue = priceInput.data('max');
  }
  priceMin.val(priceMinValue);
  if (priceMax.val() > priceInput.data('max')) {
    priceMaxValue = priceInput.data('max');
  }
  if (priceMax.val() < priceInput.data('min')) {
    priceMaxValue = priceInput.data('min');
  }
  priceMax.val(priceMaxValue);
  priceSliderObject.set([priceMinValue, priceMaxValue]);
}

export { product, filterProducts, resizeFilterMenu };
