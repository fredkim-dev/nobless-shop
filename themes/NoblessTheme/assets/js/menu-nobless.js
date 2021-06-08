import $ from 'jquery';
import { resizeContent } from '../functions';

/**
 * Resize function to keep all the main-content visible
 */
const resizeMainContainer = function resizeFunction() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
}

/**
 * Manage dropdown on mobile size
 */
const navbarCollapse = function navbarCollapseFunctions() {
  const navbarContainer = $('#mainNavbar');
  navbarContainer.collapse({
    toggle: false
  });

  navbarContainer.on('shown.bs.collapse', function(e){
    resizeContent();
  });

  navbarContainer.on('hidden.bs.collapse', function(e){
    resizeContent();
  });
}

/**
 * Megamenu functions
 * .has-megamenu to use dropdown functions
 */
const megamenu = function megamenuFunctions() {
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

const menuIcones = function menuIconesFunctions() {
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

const resizeMenu = function resizeMenuFunctions(element) {
  if ($(document).width() > 1200) {
    closeMobileMenu();
    $('#headerCartItems').css('height', '');
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

export { resizeMainContainer, navbarCollapse, megamenu, menuIcones, resizeMenu };
