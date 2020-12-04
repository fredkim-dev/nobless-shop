import 'slick-carousel/slick/slick.min';
import Fresco from './fresco/js/fresco.min';

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
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestProducts').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestBundles').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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
          breakpoint: 768, 
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
          breakpoint: 768, 
          settings: "unslick" 
        }
      ]
    };
    var slider = $('#productGallery');
    if($(document).width() < 768 && slider[0].slick && slider[0].slick.unslicked) {
      slider.slick(opts);
    }
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
function fixProductDescriptionDiv() {
  if ($('#images-container').height() - $('#product-sticky').height() - $('#headerContainer').height() - 24 >= -($('#images-container').offset().top)) {
    document.getElementById('product-sticky').classList.remove('sticky-bottom');
    document.getElementById('product-sticky').classList.add('sticky-top-custom');
  } else {
    document.getElementById('product-sticky').classList.add('sticky-bottom');
    document.getElementById('product-sticky').classList.remove('sticky-top-custom');
  }
}

function productFunctions() {
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function(event) {
    $('.variant-list .variant-name').removeClass('variant-selected');
    $(this).addClass('variant-selected');
  });

  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top')
  .on('mouseenter', function() {
    if ($(document).width() > 1000) {
      $('.variants-container', this).show();
    }
  }).on('mouseleave', function() {
    $('.variants-container', this).hide();
  });
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
    if (!$('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 992) {
      if ($(document).width() > 1024) {
        $('#menuButton').trigger('click');
      } else if ($(document).width() <= 1024) {
        $('.dropdown-menu.megamenu').addClass('show');
      }
    }
  }).on('mouseleave', function() {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 992) {
      if ($(document).width() > 1024) {
        $('#menuButton').trigger('click');
      } else if ($(document).width() <= 1024) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });

  $('#mainContentContainer').on('click', function() {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 992) {
      if ($(document).width() <= 1033) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });

  $('#menuButtonMain').on('click', function() {
    if ($(document).width() < 992) {
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
    if ($(document).width() <= 992) {
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      const productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight();
      $('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      $('#headerCartItems').css('height', productContainerHeight + 'px')

      $(".screen-overlay-cart").addClass("show");
      $('body').addClass("offcanvas-active");
    }
  });

  $('.menu-icones .dropdown').on('hidden.bs.dropdown', function(e) {
    if ($(document).width() <= 992) {
      $(".screen-overlay-cart").removeClass("show");
      $('body').removeClass("offcanvas-active");
    }
  });
}

function resizeMenu(element) {
  if ($(document).width() > 992) {
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

function formFunctions() {
  if($('.login-form') || $('.register-form')) {
    $('.btn-form').on('click', function(e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement + ' button').trigger('click');
    });
  }

  if($('.verify-account')) {
    $('.verify-account').on('click', function(e) {
      e.preventDefault();
      $(this).closest('form').trigger('submit');
    });
  }

  if ($('#resetPasswordSubmit')) {
    $('#resetPasswordSubmit').on('click', function(e) {
      e.preventDefault();
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
    $('#sylius_cart_promotionCoupon').val(coupon);
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
  // Menu Functions
  megamenuFunctions();
  menuIconesFunctions();

  formFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  cartFunctions();

  resizeMainContainer();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  replaceCarouselArrow();
  if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }
  // Show mobile menu after page is loaded
  $('.mobile-offcanvas').show();
}

export { init, fixProductDescriptionDiv, resizeContent };
