import '../../BootstrapTheme/assets/js/index';
import './scss/index.scss';
import './media/logo.png';
import '../../BootstrapTheme/assets/js/fontawesome';
import '@fortawesome/fontawesome-free/js/all';

/**
 * Resize function to keep all the main-content visible
 */
function resizeContent() { 
    var footerHeight = document.getElementById('footerContainer').clientHeight
    var contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
    document.getElementById("mainContentContainer").style.height = contentHeight+"px";
}

window.onload = resizeContent;
window.onresize = resizeContent;

var menuDropdown = document.getElementById('mainNavbar');

menuDropdown.addEventListener('shown.bs.collapse', function(e){
    resizeContent();
}, false);
menuDropdown.addEventListener('hidden.bs.collapse', function(e){
    resizeContent();
}, false);