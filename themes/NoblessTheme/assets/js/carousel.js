/***********************/
/* CAROUSEL MANAGEMENT */
/***********************/
import Fresco from '../fresco/js/fresco.min';

const carousel = function mainFunctions() {
  createCarousel($('#carouselLatestProducts'));
  createCarousel($('#carouselLatestBundles'));
  createCarousel($('#carouselCompleteYourStyle'));

  createProductCarousel($('#productGallery'));
  createProductCarousel($('#carouselSummaryItemsMobile'));
};

/**
 * Create main carousels
 */
function createCarousel(carouselElement) {
  const options = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Next</button></div>',
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
  };
  if (carouselElement && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(options);

    carouselElement.on('setPosition', function(event, slick, currentSlide, nextSlide){
      replaceCarouselArrow(carouselElement);
    });
  }
}

/**
 * Create product carousels
 */
function createProductCarousel(carouselElement) {
  let isCartItemsCarousel = (carouselElement === $('#carouselSummaryItemsMobile'));
  const options = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      appendArrows: carouselElement.next('.slider-controls'),
      prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
      nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Next</button></div>',
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
  }

  if (carouselElement && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(options);
    if (isCartItemsCarousel) {
      replaceCarouselArrowCart();
    }
  } else {
    if($(document).width() < 768 && carouselElement[0].slick && carouselElement[0].slick.unslicked) {
      carouselElement.slick(options);
    }
    if (isCartItemsCarousel) {
      carouselElement.on('setPosition', function(slick){
        replaceCarouselArrowCart();
      });
    }
  }
}

/**
 * Create carousel when user have more than 4 addresses in Checkout
 */
function createAddressCarousel(carouselElement) {
  const opts = {
    infinite: true,
    speed: 700,
    rows: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    adaptiveHeight: true,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Next</button></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows: 3,
          slidesPerRow: 1
        }
      }
    ]
  };

  const visibleSliderDiv = !carouselElement.hasClass('d-none');
  if(visibleSliderDiv && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(opts);
  } else if (carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick('unslick');
    carouselElement.slick(opts);
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
 * Replace carousel arrows vertically
 */
function replaceCarouselArrow(carouselElement) {
  const imgSelector = '.slick-active .card-img-top';
  let imgSliderHeight;
  let arrowTopValue;
  if (carouselElement !== undefined) {
    imgSliderHeight = $(imgSelector, carouselElement).outerHeight();
    arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $(carouselElement).next('.slider-controls').css('top', arrowTopValue + 'px');
  } else {
    imgSliderHeight = $(imgSelector).outerHeight();
    arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $('.slider-controls').not('.product-gallery').css('top', arrowTopValue + 'px');
  }
}

/**
 * Replace carousel arrows only on cart items carousel
 * @param element
 */
function replaceCarouselArrowCart(element) {
  const imgSliderHeight = $('.slick-active img', element).outerHeight();
  const arrowTopValue = Math.round(imgSliderHeight);
  $(element).next('.slider-controls').css('top', arrowTopValue + 'px');
}

export {carousel, replaceCarouselArrow, replaceCarouselArrowCart, createAddressCarousel, createGalleryDesktop};
