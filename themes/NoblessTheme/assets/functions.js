import 'slick-carousel/slick/slick.min';
import Fresco from './fresco/js/fresco.min';

// GENERAL FUNCTIONS
import { carousel, replaceCarouselArrow, replaceCarouselArrowCart, createGalleryDesktop } from './js/carousel.js';
import checkout from './js/checkout-nobless.js';
import {product, filterProducts, resizeFilterMenu} from './js/product-nobless';
import cart from './js/cart-nobless.js';
import shareProduct from './js/share-product.js';
// MENU FUNCTIONS
// LOGIN FUNCTIONS
// CONTACT FUNCTIONS
// ORDERS GRID FUNCTIONS


/**
 * Resize function to keep all the main-content visible
 */
function resizeMainContainer() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
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
  $('#navbarTaxons').hide();
  $('#navbarAccountLinks').hide();

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
  $('#navbarTaxons').hide();
  $('#navbarAccountLinks').hide();

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
    const registerForm = $($(e.target).data('form'));
    const inputRegisterForm = registerForm.find('input');
    const email = inputRegisterForm.val();
    const invalidSpan = inputRegisterForm.closest('div').next('span');
    if (regex.test(email)) {
      invalidSpan.removeClass('d-block');
      inputRegisterForm.removeClass('is-invalid');
      registerForm.submit();
    } else {
      invalidSpan.addClass('d-block');
      inputRegisterForm.addClass('is-invalid');
    }
  });
}

$('.register-form input, .header-register-form input').on('keyup', function(e) {
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
  carousel();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  shareFunctions();
  resizeMenu($('#menuButton').attr('data-trigger'));
  resizeFilterMenu();
  $('.header-dropdown').show();
  Fresco.hide();
}

function init() {
  carousel();
  navbarCollapseInit();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // PREVENT INSIDE CLICK DROPDOWN
  $('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  shareProduct();
  product();
  filterProducts();
  // Menu Functions
  megamenuFunctions();
  menuIconesFunctions();

  loginFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  cart();
  checkout();

  contactPageFunction();

  resizeMainContainer();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  replaceCarouselArrow();
  replaceCarouselArrowCart();
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
