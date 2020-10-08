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

/**
 * Carousel creation
 */
function createCarousel() {
  if (jQuery('#carouselLatestProducts') && !jQuery('#carouselLatestProducts').hasClass('slick-initialized')) {
    jQuery('#carouselLatestProducts').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestProducts').next('.slider-controls'),
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 992,
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
  }

  if(jQuery('#carouselLatestBundles') && !jQuery('#carouselLatestBundles').hasClass('slick-initialized')) {
    jQuery('#carouselLatestBundles').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestBundles').next('.slider-controls'),
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 992,
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
  }

  if (jQuery('#productGallery') && !jQuery('#productGallery').hasClass('slick-initialized')) {
    jQuery('#productGallery').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      appendArrows: jQuery('#productGallery').next('.slider-controls'),
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
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
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
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
    if ($(document).width() > 768) {
      $('.variants-container', this).addClass('d-flex');
    }
  }).on('mouseleave', function() {
    if ($(document).width() > 768) {
      $('.variants-container', this).removeClass('d-flex');
    }
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

function resizeContent() {
  resizeMainContainer();
  createCarousel();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  shareFunctions();
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
    e.preventDefault();   
  });
  shareFunctions();
  productFunctions();

  resizeMainContainer();
  if ($(document).width() > 768) {
    createGalleryDesktop();
  }
  if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }
  
}

export { init, fixProductDescriptionDiv, resizeContent };
