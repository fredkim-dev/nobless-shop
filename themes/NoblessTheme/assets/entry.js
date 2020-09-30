/* JS plugins */
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/js/bootstrap.min';
import { init, fixProductDescriptionDiv, resizeContent } from './functions';
import './indexBootstrapTheme';
import 'slick-carousel/slick/slick.min';

/* Css files */
import './scss/index.scss';
/* Media files */
import './media/logo.png';
import './media/return-policy.png';
import './media/delivery-truck.png';
import './media/card.png';
import './media/mastercard.png';
import './media/visa.png';
import './media/paypal.png';
import './media/colissimo.png';
import './media/chronopost.png';
import './media/mondial-relay.png';

window.onload = init;
window.onresize = resizeContent;
window.onscroll = fixProductDescriptionDiv;

