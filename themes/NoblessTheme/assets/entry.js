/* JS plugins */
import 'popper.js/dist/popper.min';
import 'slick-carousel/slick/slick.min';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/js/bootstrap.min';
import './indexBootstrapTheme';
/* Css files */
import './scss/index.scss';
/* Media files */
import './media/logo.png';

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
  jQuery('#carouselLatest').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: jQuery('#carouselLatest').next("#slider-controls"),
    prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

/**
 * Manage dropdown on mobile size
 */
const menuDropdown = document.getElementById('mainNavbar');

if (menuDropdown) {
  menuDropdown.addEventListener('shown.bs.collapse', function(e){
    resizeContent();
  }, false);
  menuDropdown.addEventListener('hidden.bs.collapse', function(e){
    resizeContent();
  }, false);
}

function init() {
  createCarousel();
  resizeContent();
}

window.onload = init;
window.onresize = resizeContent;

