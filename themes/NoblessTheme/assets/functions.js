import 'slick-carousel/slick/slick.min';
import Fresco from './fresco/js/fresco.min';

import { carousel, replaceCarouselArrow, replaceCarouselArrowCart, createGalleryDesktop } from './js/carousel.js';
import checkout from './js/checkout-nobless.js';
import {product, filterProducts, resizeFilterMenu} from './js/product-nobless';
import cart from './js/cart-nobless.js';
import shareProduct from './js/share-product.js';
import loginPage from './js/login-nobless.js';
import contactPage from './js/contact-nobless';
import ordersGrid from './js/order-nobless';
import { resizeMainContainer, resizeMenu, navbarCollapse, megamenu, menuIcones } from './js/menu-nobless';
import $ from 'jquery';

/** Functions called when content is resized */
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

/** Main functions init */
function init() {
  carousel();
  navbarCollapse();
  // Product functions
  shareProduct();
  product();
  filterProducts();
  // Menu functions
  megamenu();
  menuIcones();
  // Other pages functions
  ordersGrid();
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

  // PREVENT INSIDE CLICK DROPDOWN
  $('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  // Create tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // Show menu after page is loaded
  $('.mobile-offcanvas').show();
  $('.header-dropdown').show();
  $('#productsFiltersMobile .dropdown-menu').show();
}

export { init, resizeContent };
