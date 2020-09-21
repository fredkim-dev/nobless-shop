/* JS plugins */
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/js/bootstrap.min';
import { init, resizeContent } from './functions';
import './indexBootstrapTheme';

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

window.onload = init;
window.onresize = resizeContent;

