import 'slick-carousel/slick/slick.min';
import Fresco from './fresco/js/fresco.min';

// GENERAL FUNCTIONS
import { carousel, replaceCarouselArrow, replaceCarouselArrowCart, createGalleryDesktop } from './js/carousel.js';
import checkout from './js/checkout-nobless.js';
import {product, filterProducts, resizeFilterMenu} from './js/product-nobless';
import cart from './js/cart-nobless.js';
import shareProduct from './js/share-product.js';
import loginPage from './js/login-nobless.js';
import contactPage from './js/contact-nobless';
import $ from 'jquery';
// MENU FUNCTIONS
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
    $(".screen-overlay-cart").addClass("show");
    if ($(document).width() <= 1200) {
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      let productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight() - $('#cartWidgetTitle').outerHeight() - 20;
      $('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      $('#headerCartItems').css('height', productContainerHeight + 'px');
      if (!$('#headerCartNewItem').hasClass('d-none')) {
        productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight() - 20;
        $('#headerCartNewItem').css('height', productContainerHeight + 'px');
      }

      $('body').addClass("offcanvas-active");
    }
  });

  $('.menu-icones .dropdown').on('hidden.bs.dropdown', function(e) {
    $(".screen-overlay-cart").removeClass("show");
    if ($(document).width() <= 1200) {
      $('body').removeClass("offcanvas-active");
    }
    // Cart Icon
    if ($(this).closest('.dropdown').hasClass('cart-btn')) {
      $('#headerCartNewItem').html('').addClass('d-none');
      $('#headerCartItems').removeClass('d-none');
      $('#cartActions .cart-subtotal').addClass('d-flex').removeClass('d-none');
      $('#cartActions .invalid-feedback').removeClass('d-block');
    }
  });

  $('.cart-dropdown .close-cart-widget').on('click', function(e) {
    $('.dropdown.cart-btn .dropdown-toggle').trigger('click');
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


function resizeContent() {
  resizeMainContainer();
  carousel();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  shareProduct();
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

  ordersGridFunctions();
  loginPage();
  cart();
  checkout();

  contactPage();

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
