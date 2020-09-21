import 'slick-carousel/slick/slick.min';

/**
 * Resize function to keep all the main-content visible
 */
function resizeContent() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
}

/**
 * Carousel creation
 */
function createCarousel() {
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function init() {
  createCarousel();
  resizeContent();
}

export { init, resizeContent };
