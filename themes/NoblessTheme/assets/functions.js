import 'slick-carousel/slick/slick.min';
import Fresco from './fresco/js/fresco.min';
import noUiSlider from 'nouislider';

/**
 * Resize function to keep all the main-content visible
 */
function resizeMainContainer() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
}

function replaceCarouselArrow(carouselElement) {
  let imgSliderHeight;
  if (carouselElement != undefined) {
    imgSliderHeight = $('.slick-active .card-img-top', carouselElement).outerHeight();
    const arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $(carouselElement).next('.slider-controls').css('top', arrowTopValue + 'px');
  } else {
    imgSliderHeight = $('.slick-active .card-img-top').outerHeight();
    const arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $('.slider-controls').not('.product-gallery').css('top', arrowTopValue + 'px');

  }
}

/**
 * Carousel creation
 */
function createCarousel() {
  if (jQuery('#carouselLatestProducts') && !jQuery('#carouselLatestProducts').hasClass('slick-initialized')) {
    jQuery('#carouselLatestProducts').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      appendArrows: jQuery('#carouselLatestProducts').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    $('#carouselLatestProducts').on('setPosition', function(event, slick, currentSlide, nextSlide){
      replaceCarouselArrow(jQuery('#carouselLatestProducts'));
    });
  }

  if(jQuery('#carouselLatestBundles') && !jQuery('#carouselLatestBundles').hasClass('slick-initialized')) {
    jQuery('#carouselLatestBundles').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      appendArrows: jQuery('#carouselLatestBundles').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    $('#carouselLatestBundles').on('setPosition', function(event, slick, currentSlide, nextSlide){
      replaceCarouselArrow(jQuery('#carouselLatestBundles'));
    });
  }

  if (jQuery('#productGallery') && !jQuery('#productGallery').hasClass('slick-initialized')) {
    jQuery('#productGallery').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      appendArrows: jQuery('#productGallery').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
      nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: "unslick"
        }
      ]
    });
  } else {
    // Resize Product Gallery slider when resizing from desktop to mobile
    const opts = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      appendArrows: jQuery('#productGallery').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
      nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: "unslick"
        }
      ]
    };
    var slider = $('#productGallery');
    if($(document).width() < 768 && slider[0].slick && slider[0].slick.unslicked) {
      slider.slick(opts);
    }
  }

  if (jQuery('#carouselCompleteYourStyle') && !jQuery('#carouselCompleteYourStyle').hasClass('slick-initialized')) {
    jQuery('#carouselCompleteYourStyle').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      appendArrows: jQuery('#carouselCompleteYourStyle').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    $('#carouselCompleteYourStyle').on('setPosition', function(event, slick, currentSlide, nextSlide){
      replaceCarouselArrow(jQuery('#carouselCompleteYourStyle'));
    });
  }

}

/**
 * Create product gallery for desktop when resize
 */
function createGalleryDesktop() {
  const images = [];
  $('.fresco-slide').each(function(index) {
    const image = {
      url : $(this).data('image'),
      thumbnail : $(this).data('thumbnail'),
    };
    images.push(image);
  });
  const heightContent = Math.max( document.body.scrollHeight, document.body.offsetHeight,
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

  document.querySelectorAll('.fresco-slide').forEach((item, index) => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      Fresco.show(
        images,
        {
          thumbnails: 'vertical',
          loop: true,
          height: heightContent
        },
        Number(index + 1)
      );

    })
  });
}

/**
 * Fix product description div on top (right column) when scrolling
 */
/*function fixProductDescriptionDiv() {
  if ($('#images-container').height() - $('#product-sticky').height() - $('#headerContainer').height() - 24 >= -($('#images-container').offset().top)) {
    document.getElementById('product-sticky').classList.remove('sticky-bottom');
    document.getElementById('product-sticky').classList.add('sticky-top-custom');
  } else {
    document.getElementById('product-sticky').classList.add('sticky-bottom');
    document.getElementById('product-sticky').classList.remove('sticky-top-custom');
  }
}*/

function productFunctions() {
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function(event) {
    const bundleItem = $(this).data('bundle-item');
    if(bundleItem !== undefined) {
      $('.variant-name[data-bundle-item="' + bundleItem + '"]').removeClass('variant-selected');
    } else {
      $('.variant-list .variant-name').removeClass('variant-selected');
    }
    $(this).addClass('variant-selected');
  });

  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top')
  .on('mouseenter', function() {
    if ($(document).width() > 1440) {
      $('.variants-container', this).show();
    }
  }).on('mouseleave', function() {
    $('.variants-container', this).hide();
  });

  $('#sylius-product-adding-to-cart .btn-primary').on('click', function(e) {
    e.preventDefault();
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
}

function filterProductFunctions() {
  const queryString = window.location.search;
  const criteria = queryString.indexOf('criteria');
  const priceInput = $('.price-filter .price-input');
  let priceSlider;
  let priceSliderMobile;
  const priceMin = $('#productsFilters input[name="criteria[price][price_1]"]');
  const priceMax = $('#productsFilters input[name="criteria[price][price_2]"]');
  const priceMinMobile = $('#productsFiltersMobile input[name="criteria[price][price_1]"]');
  const priceMaxMobile = $('#productsFiltersMobile input[name="criteria[price][price_2]"]');
  if (priceInput.length > 0) {
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

    // Desktop Slider
    const priceRange = $('#productsFilters #priceRange');
    priceSlider = noUiSlider.create(priceRange[0], rangeSliderOptions);
    priceSlider.on('slide', function(newValue) {
      priceMin.val(parseInt(newValue[0]));
      priceMax.val(parseInt(newValue[1]));
    });

    // Mobile Slider
    const priceRangeMobile = $('#productsFiltersMobile #priceRange');
    priceSliderMobile = noUiSlider.create(priceRangeMobile[0], rangeSliderOptions);
    priceSliderMobile.on('slide', function(newValue) {
      priceMinMobile.val(parseInt(newValue[0]));
      priceMaxMobile.val(parseInt(newValue[1]));
    });

    // When user changes price input value
    priceInput.on('keyup', function(e) {
      if(e.which !== 8 && !isNaN(String.fromCharCode(e.which))){
        const newValue = [priceMin.val(), priceMax.val()];
        priceSlider.set(newValue);
        const newValueMobile = [priceMinMobile.val(), priceMaxMobile.val()];
        priceSliderMobile.set(newValueMobile);
      }
    });
  }

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
  $('a.validate-filter').on('click', function(e) {
    e.preventDefault();
    checkPriceValue(priceSlider, priceMin, priceMax);
    checkPriceValue(priceSliderMobile, priceMinMobile, priceMaxMobile);
    $('#productFilterForm').submit();
  });

  $('#productFilterMobileForm button.btn-primary').on('click', function(e) {
    e.preventDefault();
    if($('.input-sorting:checked').val() === 'createdAt') {
      $('.input-sorting:checked').remove();
      $('.input-sorting-createdAt').attr('checked', true).removeClass('d-none').addClass('d-inline-block');
    }
    checkPriceValue(priceSlider, priceMin, priceMax);
    checkPriceValue(priceSliderMobile, priceMinMobile, priceMaxMobile);
    $(this).closest('form').submit();
  })

  if (criteria !== -1) {
    $('.reinit-filter').removeClass('d-none')
  }

  // Mobile filters
  $('.product-filters.dropdown').on('show.bs.dropdown', function(e) {
    if ($(document).width() <= 1200) {
      resizeFilterMobileMenu();
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');

      $(".screen-overlay-filters").addClass("show");
      $('body').addClass("offcanvas-active");
      $('#productsFiltersMobile .close').removeClass("d-none");
    }
  }).on('hidden.bs.dropdown', function(e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-filters").removeClass("show");
      $('body').removeClass("offcanvas-active");
      $('#productsFiltersMobile .close').addClass("d-none");
    }
  });

  $('#productsFiltersMobile .close').on('click', function(e) {
    e.preventDefault();
    $('#productsFiltersMobile .dropdown-toggle').trigger('click');
  })
}

function checkPriceValue(priceSliderObject, priceMin, priceMax) {
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

/**
 * Manage dropdown on mobile size
 */
function navbarCollapseInit() {
  jQuery('#mainNavbar').collapse({
    toggle: false
  });

  jQuery('#mainNavbar').on('shown.bs.collapse', function(e){
    resizeContent();
  });

  jQuery('#mainNavbar').on('hidden.bs.collapse', function(e){
    resizeContent();
  });
}

/**
 * Megamenu functions
 * .has-megamenu to use dropdown functions
 */
function megamenuFunctions() {
  // Button hover simulates click on it
  $('#menuButtonMain, #megamenuDropdown').on('mouseenter', function() {
    if (!$('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      $('#menuButton').trigger('click');
    }
  }).on('mouseleave', function() {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      $('#menuButton').trigger('click');
    }
  });

  /*$('#mainContentContainer').on('click', function() {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      if ($(document).width() <= 1033) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });*/

  $('#menuButtonMain').on('click', function() {
    if ($(document).width() < 1200) {
      if ($('#navbarMainMobile').hasClass('show')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  });

  // Megamenu functions : manage mobile menu
  $(".screen-overlay").on('click', function(e){
    closeMobileMenu();
  });

  $('a.nav-taxon').on('mouseenter', function(event) {
    if ($(document).width() > 1200) {
      if ($('div.menu-img-'+$(this).data('taxon')+' img').length > 0) {
        $('div.menu-img').hide();
        $('div.menu-img-'+$(this).data('taxon')).show();
      }
    }
  });

  $("#navbarMainMobile").on("click", function(e) {
    e.stopPropagation();
  });

  $('.active.locale-link, .navbarTaxonsLink, .log-link').on('click', function(e) {
    developMobileMenu($(this).data('divToOpen'));
  });

  $('#openAccountMenu').on('click', function(e) {
    openMobileMenu();
    developMobileMenu($('.log-link').data('divToOpen'));
  });

  $('#menuButtonMain .back').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.navbar > div').hide();
    $('#navbarMain').show();

    $('#menuButtonMain .back').hide();
    $('#menuButtonMain .close').show();
  });

  $('.dropdown.cart-btn').on('show.bs.dropdown', function() {
    closeMobileMenu();
  });
}

function menuIconesFunctions() {
  $('.menu-icones .dropdown').on('show.bs.dropdown', function(e) {
    if ($(document).width() <= 1200) {
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      const productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight();
      $('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      $('#headerCartItems').css('height', productContainerHeight + 'px')

      $(".screen-overlay-cart").addClass("show");
      $('body').addClass("offcanvas-active");
    }
  });

  $('.menu-icones .dropdown').on('hidden.bs.dropdown', function(e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-cart").removeClass("show");
      $('body').removeClass("offcanvas-active");
    }
  });
}

function resizeMenu(element) {
  if ($(document).width() > 1200) {
    closeMobileMenu();
    $('#headerCartItems').css('height', '');
    $(".screen-overlay").removeClass("show");
    $(".screen-overlay-cart").removeClass("show");
  } else {
    const headerHeight = $('#headerContainer').height() - $('.header-banner').height();
    const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
    const productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight();
    $(element).css('top', headerHeight + 'px');
    $(element).css('height', 'calc(100% - ' + headerHeight + 'px)');
    $(element + ' #menuMobileLinks').css('bottom', headerHeight + 'px');
    $('.screen-overlay').css('top', headerOuterHeight + 'px');
    $('#headerCartItems').css('height', productContainerHeight + 'px');
  }
}

function resizeFilterMobileMenu() {
  if ($(document).width() > 1200) {
    $(".screen-overlay-filters").removeClass("show");
  } else {
    const headerHeight = $('#headerContainer').height() - $('.header-banner').height();
    const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
    const filterListContainerHeight = $('#productsFiltersMobile .dropdown-menu').height() - $('header').height() - $('#filterSubmit').outerHeight() - 10;
    $('#productsFiltersMobile').css('height', 'calc(100% - ' + headerHeight + 'px)');
    $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
    $('#filterList').css('height', filterListContainerHeight + 'px');
  }
}

function openMobileMenu() {
  var offcanvas_id = $('#menuButton').attr('data-trigger');
  resizeMenu(offcanvas_id);

  $(offcanvas_id).addClass("show");
  $('#menuButtonMain').removeClass('show');
  $('.dropdown a.btn-close').addClass('show');

  $('body').addClass("offcanvas-active");
  $(".screen-overlay").addClass("show");

  $('#navbarMain').show();
  $('#navbarLocale').hide();

  $('#menuButtonMain .close').show();
  $('#menuButtonMain .back').hide();
}

function closeMobileMenu() {
  var offcanvas_id = $('#menuButton').attr('data-trigger');

  $(".screen-overlay").removeClass("show");
  $(".mobile-offcanvas").removeClass("show");
  $(offcanvas_id).removeClass("show");
  $("body").removeClass("offcanvas-active");

  $('.dropdown a.btn-close').removeClass('show');
  $('#menuButtonMain').addClass('show');

  $('body').removeClass("offcanvas-active");
  $(".screen-overlay").removeClass("show");

  $('#navbarMain').show();
  $('#navbarLocale').hide();

  $('#menuButtonMain .close').hide();
  $('#menuButtonMain .back').hide();
}

function developMobileMenu(divToOpen) {
  if (divToOpen !== undefined) {
    $('.navbar > div').hide();
    $(divToOpen).show();

    $('#menuButtonMain .close').hide();
    $('#menuButtonMain .back').css('display', 'block');
  }
}

function loginFunctions() {
  if($('.login-form')) {
    $('.submit-login').on('click', function(e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement).submit();
    });
  }

  if($('.verify-account')) {
    $('.verify-account').on('click', function(e) {
      e.preventDefault();
      $(this).closest('form').submit();
    });
  }

  if ($('#resetPasswordSubmit')) {
    $('#resetPasswordSubmit').on('click', function(event) {
      event.preventDefault();
      $('.reset-password .modal-dialog .form-error-message').html('');
      const form = $(this).closest('form');
      $(form).addClass('loading');
      $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        success: function(response) {
          $('.reset-password .modal-dialog').append(response);
          $('.reset-password .modal-dialog .modal-content:not(.success)').addClass('d-none');
          $('.modal-dialog input.form-control').removeClass('is-invalid');
          $(form).removeClass('loading');
        },
        error: function(error) {
          $('.reset-password .modal-dialog input.form-control').addClass('is-invalid');
          $('.modal-dialog .form-errors .form-error-message').text($($.parseHTML(error.responseText)[1]).find('.form-errors ul li').text());
          $(form).removeClass('loading');
        }
      })
    });

    $('#resetPasswordModal').on('hide.bs.modal', function (e) {
      $('.reset-password .modal-dialog input.form-control').removeClass('is-invalid');
      $('.reset-password .modal-dialog form').removeClass('loading');
      $('.reset-password .modal-dialog form input').val('');
      $('.reset-password .modal-dialog .form-error-message').html('');
    })
  }

  $('button.submit-register').on('click', function(e) {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    let email = $(e.target).closest('form').find('input').val();
    let registerForm = $(e.target).closest('form');
    let invalidSpan = $(e.target).prev('span');
    if($(e.target).data('form') !== undefined) {
      registerForm = $($(e.target).data('form'));
      email = $(registerForm).find('input').val()
      invalidSpan = $($(registerForm).find('.invalid-feedback'));
    }
    if (regex.test(email)) {
      invalidSpan.removeClass('d-block');
      registerForm.find('input').removeClass('is-invalid');
      registerForm.submit();
    } else {
      invalidSpan.addClass('d-block');
      registerForm.find('input').addClass('is-invalid');
    }
  });
}

$('.register-form input').on('keyup', function(e) {
  const regex = /\S+@\S+\.\S+/;
  const email = $(e.target).closest('form').find('input').val();
  if (regex.test(email) && $(e.target).hasClass('is-invalid')) {
    $(e.target).closest('div').next('span').removeClass('d-block');
    $(e.target).removeClass('is-invalid');
  }
});

/**
 * Contact Page function
 */
function contactPageFunction() {
  $('#contactPage form button').on('click', function(e) {
    e.preventDefault();
    const form = $(this).closest('form');
    $(form).addClass('loading');
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      success: function(response) {
        $('#contactResponseModal .modal-body div').html(response);
        $('#contactResponseModal').modal('show');
        // Delete all errors of form when success
        $('#contactPage [name^="sylius_contact"]').val('').prop( "checked", false );
        $('#contactPage [name^="sylius_contact"], #contactPage [for^="sylius_contact_"]').removeClass('is-invalid');
        $('#contactPage span.invalid-feedback').remove();
        $(form).removeClass('loading');
      },
      error: function(error) {
        if (error.status === 406) {
          $('#contactPage span.invalid-feedback').remove();
          const errorList = $($.parseHTML(error.responseText)[1]).find('span').toArray();
          errorList.forEach(error => {
            if (error.outerText !== '') {
              if (error.className !== 'acceptCgv') {
                $('#sylius_contact_' + error.className)
                  .addClass('is-invalid')
                  .after('<span class="invalid-feedback d-block">' + error.outerText + '</span>');
              } else {
                $('#sylius_contact_' + error.className)
                  .next('label')
                  .addClass('is-invalid');
              }
            }
          });
        }

        if (error.status === 417) {
          $('#contactPage .contact-error').html($.parseHTML(error.responseText)[1]);
        }

        console.log(error);

        $(form).removeClass('loading');
      }
    })
  });

  $('#sylius_contact_subject').on('change', function(e) {
    if($(e.target).val() === 'other') {
      $('.other-subject').show();
    } else {
      $('.other-subject').hide();
    }
  });
}

/**
 * Share function
 */
function shareFunctions() {
  if(document.getElementById('shareDropdown')) {
    jQuery('#copyShare').tooltip('disable');
    // Facebook Share
    document.getElementById('facebookShare').addEventListener('click', function (event) {
      event.preventDefault();
      const winTop = (screen.height / 2) - (350 / 2);
      const winLeft = (screen.width / 2) - (600 / 2);
      const url = document.getElementById('facebookShare').dataset.url;
      window.open('http://www.facebook.com/sharer.php?u='+url, 'Facebook - Noblezz Shop', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=600,height=350');
    });

    // Pinterest Share
    document.getElementById('pinterestShare').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('realPinterestShare').click();
    });


    // Copy to Clipboard
    document.getElementById('copyShare').addEventListener('click', function (event) {
      event.preventDefault();
      const copyText = document.getElementById('pageLink');
      $('#copyShare').tooltip('enable');
      navigator.clipboard.writeText(copyText.value)
        .then(() => {
          $('#copyShare').tooltip('show');
          setTimeout(function() { $('#copyShare').tooltip('disable'); }, 1500);
        })
        .catch((error) => { console.log(`Copy failed! ${error}`) })
    });

    // Mail To
    document.getElementById('mailShare').addEventListener('click', function(event) {
      event.preventDefault();
      const mailTo = document.getElementById('mailShare').dataset.mailto;
      window.location.href = mailTo;
    });
  }
}

function cartFunctions() {
  // Reload Qty
  $('.reload-qty').on('click', function() {
    if ($(this).hasClass('mobile')) {
      $('form.form-to-submit').trigger('submit');
    } else {
      $(this).closest('form').trigger('submit');
    }
  });

  // Apply coupon code
  $('.coupon-code-btn').on('click', function() {
    const coupon = $('.coupon-code').val();
    if (coupon === '') {
      $('#sylius_cart_promotionCoupon').val('')
    } else {
      $('#sylius_cart_promotionCoupon').val(coupon);
    }

    $('form.form-to-submit').trigger('submit');
  });

  $("body").on("keydown", ".coupon-code", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.coupon-error').html('');
  });

  // Change quantity on mobile
  $('.mobile-qty').on('change', function() {
    const newQty = $(this).val();
    const inputQtyName = $(this).data('input-qty');
    $('input[name="' + inputQtyName + '"]').val(newQty);
  });

  if($('.coupon-code-error .form-error-message').html() != undefined) {
    $('.coupon-input').addClass('invalid-code');
    $('.coupon-error').html($('.coupon-code-error .form-error-message').html());
    $('.coupon-code').val($('#sylius_cart_promotionCoupon').val());
  }
}

function ordersGridFunctions() {
  // Desktop Accordion
  $('#orderAccordionDesktop').on('hidden.bs.collapse', function(e) {
    $(e.target).closest('tr').removeClass('show');
  });

  $('#orderAccordionDesktop').on('show.bs.collapse', function(e) {
    $('tr', this).removeClass('show');
    $(e.target).closest('tr').addClass('show');
  });

  // Mobile Accordion
  $('#orderAccordionMobile').on('show.bs.collapse', function (e) {
    $(e.target).prev('div').removeClass('init');
  })
  $('#orderAccordionMobile').on('hidden.bs.collapse', function (e) {
    $(e.target).prev('div').addClass('init');
  })
  $('.arrow-close').on('click', function() {
    $(this).closest('div.order-details').prev('div').trigger('click');
  });
}

function loginPageFunctions() {
  $('.reset-password-open').on('click', function(e) {
    e.preventDefault();
    const modalId = $(this).data('modalId');
    $(modalId).modal('show');
    $('.header-dropdown').removeClass('show');
  })
}

function resizeContent() {
  resizeMainContainer();
  createCarousel();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  shareFunctions();
  resizeMenu($('#menuButton').attr('data-trigger'));
  resizeFilterMobileMenu();
  Fresco.hide();
}

function init() {
  createCarousel();
  navbarCollapseInit();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // PREVENT INSIDE CLICK DROPDOWN
  $('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  shareFunctions();
  productFunctions();
  filterProductFunctions();
  // Menu Functions
  megamenuFunctions();
  menuIconesFunctions();

  loginFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  cartFunctions();

  contactPageFunction();

  resizeMainContainer();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  replaceCarouselArrow();
  /*if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }*/
  // Show menu after page is loaded
  $('.mobile-offcanvas').show();
  $('.header-dropdown').show();
  $('#productsFiltersMobile .dropdown-menu').show();
}

export { init, resizeContent };
