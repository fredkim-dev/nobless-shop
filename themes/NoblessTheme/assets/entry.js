/* JS plugins */
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/js/bootstrap.min';
import { init, resizeContent } from './functions';
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
import './media/account-icon.png';
import './media/shopping-bag-icon.png';
import './media/back.png';
import './media/next.png';
import './media/icon-fr.png';
import './media/icon-de.png';
import './media/icon-it.png';
import './media/icon-es.png';
import './media/icon-en.png';
import './media/reload.png';

window.onload = init;
window.onresize = resizeContent;

