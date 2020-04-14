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

