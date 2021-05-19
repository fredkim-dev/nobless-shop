(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./themes/BootstrapTheme/assets/js/fontawesome.js":
/*!********************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/fontawesome.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");

var _faStar = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStar */ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js");

var _faShoppingBag = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingBag */ "./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js");

var _faCheck = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");

var _faExclamationCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamationCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js");

var _faInfoCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faInfoCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js");

var _faChevronUp = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronUp */ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js");

var _faMapMarkerAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMapMarkerAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js");

var _faShuttleVan = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShuttleVan */ "./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js");

var _faCreditCard = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCreditCard */ "./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js");

var _faFlag = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faFlag */ "./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js");

var _faCcMastercard = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcMastercard */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js");

var _faCcVisa = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcVisa */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js");

var _faCcPaypal = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcPaypal */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js");

var _faTimes = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");

var _faSearch = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js");

var _faPlus = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPlus */ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js");

var _faPencilAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPencilAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js");

var _faSyncAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSyncAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js");

var _faQuestionCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faQuestionCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faQuestionCircle.js");

// FontAwesome Icons
// Import icons one by one to reduce size of the output
_fontawesomeSvgCore.library.add(_faStar.faStar, _faQuestionCircle.faQuestionCircle, _faShoppingBag.faShoppingBag, _faCheck.faCheck, _faExclamationCircle.faExclamationCircle, _faInfoCircle.faInfoCircle, _faChevronUp.faChevronUp, _faMapMarkerAlt.faMapMarkerAlt, _faShuttleVan.faShuttleVan, _faCreditCard.faCreditCard, _faFlag.faFlag, _faCcMastercard.faCcMastercard, _faCcVisa.faCcVisa, _faCcPaypal.faCcPaypal, _faTimes.faTimes, _faSearch.faSearch, _faPlus.faPlus, _faPencilAlt.faPencilAlt, _faSyncAlt.faSyncAlt);

_fontawesomeSvgCore.dom.watch();

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-add-to-cart.js":
/*!***************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-add-to-cart.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _formSerialize = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");

var _formSerialize2 = _interopRequireDefault(_formSerialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusAddToCart = el => {
  const element = el;
  const url = element.getAttribute('action');
  const redirectUrl = element.getAttribute('data-redirect');
  const validationElement = element.querySelector('[data-js-add-to-cart="error"]');
  element.addEventListener('submit', e => {
    const request = _axios2.default.post(url, (0, _formSerialize2.default)(element));

    e.preventDefault();
    request.then(() => {
      validationElement.classList.add('d-none');
      window.location.href = redirectUrl;
    });
    request.catch(error => {
      validationElement.classList.remove('d-none');
      let validationMessage = '';
      Object.entries(error.response.data).forEach(([, message]) => {
        validationMessage += message.errors;
      });
      validationElement.innerHTML = validationMessage;
      element.classList.remove('loading');
    });
  });
};

exports.default = SyliusAddToCart;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-api-login.js":
/*!*************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-api-login.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusApiLogin = el => {
  const element = el;
  const signInButton = element.querySelector('.btn');
  const validationField = element.querySelector('.alert');
  const url = signInButton.getAttribute('data-js-login-url');
  const emailField = element.querySelector('input[type="email"]');
  const passwordField = element.querySelector('input[type="password"]');
  const csrfTokenField = element.querySelector('input[type="hidden"]');
  const csrfTokenName = csrfTokenField.getAttribute('name');
  signInButton.addEventListener('click', e => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('_username', emailField.value);
    params.append('_password', passwordField.value);
    params.append([csrfTokenName], csrfTokenField.value);

    _axios2.default.post(url, params).then(() => {
      window.location.reload();
    }).catch(error => {
      validationField.classList.remove('d-none');
      validationField.innerHTML = error.response.data.message;
    });
  });
};

exports.default = SyliusApiLogin;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-api-toggle.js":
/*!**************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-api-toggle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusApiToggle = el => {
  const element = el;
  const url = element.getAttribute('data-js-login-check-email-url');
  const toggleableElement = document.querySelector('[data-js-login="form"]');
  element.addEventListener('keyup', (0, _lodash2.default)(e => {
    toggleableElement.classList.add('d-none');

    if (e.target.value.length > 3) {
      _axios2.default.get(url, {
        params: {
          email: e.target.value
        }
      }).then(() => {
        toggleableElement.classList.remove('d-none');
      }).catch(() => {
        toggleableElement.classList.add('d-none');
      });
    }
  }, 1500));
};

exports.default = SyliusApiToggle;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-loadable-forms.js":
/*!******************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-loadable-forms.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusLoadableForms = function SyliusLoadableForms() {
  const overlay = document.querySelector('[data-js-loading-overlay]');
  document.querySelectorAll('form.loadable').forEach(form => {
    form.appendChild(overlay.cloneNode(true));
    form.addEventListener('submit', () => {
      form.classList.add('loading');
    });
  });
};

exports.default = SyliusLoadableForms;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-rating.js":
/*!**********************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-rating.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SyliusRating {
  constructor(container, settings) {
    this.container = container;
    this.settings = settings;

    if (this.container) {
      this.ratingMax = Number(this.container.dataset.jsRatingMax) || 5;
      this.ratingAverage = Number(this.container.dataset.jsRatingAverage) || 0;
      this.viewOnly = this.container.dataset.jsRatingViewonly !== 'false';
      this.btnOnElement = this.container.querySelector('[data-js-rating-btn-on]');
      this.btnOffElement = this.container.querySelector('[data-js-rating-btn-off]');
      this.render();
    }
  }

  render() {
    this.container.innerHTML = '';
    const renderElement = document.createElement('div');

    for (let i = 1; i <= this.ratingMax; i++) {
      const element = document.createElement('span');
      element.dataset.jsRatingValue = i;

      if (this.viewOnly === false) {
        element.addEventListener('click', this.changeInputValue.bind(this));
      }

      if (i <= this.ratingAverage) {
        element.innerHTML = this.btnOnElement.innerHTML;
      } else {
        element.innerHTML = this.btnOffElement.innerHTML;
      }

      renderElement.appendChild(element);
    }

    this.container.appendChild(renderElement);
  }

  changeInputValue(e) {
    const value = Number(e.currentTarget.dataset.jsRatingValue);
    this.ratingAverage = value;
    this.container.dataset.jsRatingAverage = value;
    this.render();
    this.settings.onRate(value);
  }

}

exports.default = SyliusRating;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-remove-from-cart.js":
/*!********************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-remove-from-cart.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusRemoveFromCart = el => {
  const element = el;
  const redirectUrl = element.getAttribute('data-js-remove-from-cart-redirect-url');
  const csrfToken = element.getAttribute('data-js-remove-from-cart-csrf-token');
  const url = element.getAttribute('data-js-remove-from-cart-api-url');
  element.addEventListener('click', e => {
    e.preventDefault();

    _axios2.default.delete(url, {
      data: {
        _csrf_token: csrfToken
      }
    }).then(() => {
      window.location.replace(redirectUrl);
    });
  });
};

exports.default = SyliusRemoveFromCart;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-toggle.js":
/*!**********************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-toggle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SyliusToggle {
  constructor(trigger) {
    this.trigger = trigger;
    this.trigger.addEventListener('change', this.toggle.bind(this));
    this.toggleElement = document.querySelector(this.trigger.dataset.jsToggle);
    this.toggle();
  }

  toggle() {
    if (this.trigger.checked) {
      this.toggleElement.style.display = '';
    } else {
      this.toggleElement.style.display = 'none';
    }
  }

}

exports.default = SyliusToggle;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-variant-images.js":
/*!******************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-variant-images.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
class SyliusVariantImages {
  constructor() {
    this.mainImageLink = document.querySelector('[data-js-product-image]');
    this.mainImage = this.mainImageLink.querySelector('img');
    this.defaultImageLink = this.mainImageLink.getAttribute('href');
    this.defaultImageSrc = this.mainImage.getAttribute('src');
    document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
      item.addEventListener('change', () => this.setImage());
    });
    this.setImage();
  }

  getActiveVariant() {
    const items = document.querySelectorAll(`
      input[name="sylius_add_to_cart[cartItem][variant]"]:checked, 
      select[name*="sylius_add_to_cart[cartItem][variant]"] option:checked
    `);
    return [...items].map(el => el.value).join(' ');
  }

  getActiveImageSrc(variant) {
    let imageLink = this.defaultImageLink;
    let imageSrc = this.defaultImageSrc;
    const item = document.querySelector(`
      .sylius-image-variants [data-variant-code="${variant}"], 
      .sylius-image-variants [data-variant-options="${variant} "]
    `);

    if (item) {
      const parent = item.closest('[data-js-product-thumbnail]');
      imageLink = parent.querySelector('a').getAttribute('href');
      imageSrc = parent.querySelector('img').getAttribute('data-large-thumbnail');
    }

    return {
      imageLink,
      imageSrc
    };
  }

  setImage() {
    const img = this.getActiveImageSrc(this.getActiveVariant());
    this.mainImageLink.setAttribute('href', img.imageLink);
    this.mainImage.setAttribute('src', img.imageSrc);
  }

}

exports.default = SyliusVariantImages;

/***/ }),

/***/ "./themes/BootstrapTheme/assets/js/sylius-variants-prices.js":
/*!*******************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-variants-prices.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const handleProductOptionsChange = function handleProductOptionsChange() {
  document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
    item.addEventListener('change', () => {
      let selector = '';
      document.querySelectorAll('#sylius-product-adding-to-cart select[data-option]').forEach(element => {
        const select = element;
        const option = select[select.selectedIndex].value;
        selector += `[data-${select.getAttribute('data-option')}="${option}"]`;
      });
      const price = document.querySelector('#sylius-variants-pricing').querySelector(selector).getAttribute('data-value');

      if (price !== undefined) {
        document.querySelector('[data-js-product-price]').innerHTML = price;
        document.querySelector('button[type=submit]').removeAttribute('disabled');
      } else {
        document.querySelector('[data-js-product-price]').innerHTML = document.querySelector('#sylius-variants-pricing').getAttribute('data-unavailable-text');
        document.querySelector('button[type=submit]').setAttribute('disabled', 'disabled');
      }
    });
  });
};

const handleProductVariantsChange = function handleProductVariantsChange() {
  document.querySelectorAll('[name="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
    item.addEventListener('change', e => {
      const price = item.closest('tr').querySelector('[data-js-product-variant-price]').innerHTML;
      document.querySelector('[data-js-product-price]').innerHTML = price;
    });
  });
};

const SyliusVariantsPrices = () => {
  const syliusVariantsPricing = document.getElementById('sylius-variants-pricing') || null;
  const syliusProductVariants = document.getElementById('sylius-product-variants') || null;

  if (syliusVariantsPricing) {
    handleProductOptionsChange();
  } else if (syliusProductVariants) {
    handleProductVariantsChange();
  }
};

exports.default = SyliusVariantsPrices;

/***/ }),

/***/ "./themes/NoblessTheme/assets/entry.js":
/*!*********************************************!*\
  !*** ./themes/NoblessTheme/assets/entry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! popper.js/dist/popper.min */ "./node_modules/popper.js/dist/popper.min.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

__webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");

var _functions = __webpack_require__(/*! ./functions */ "./themes/NoblessTheme/assets/functions.js");

__webpack_require__(/*! ./indexBootstrapTheme */ "./themes/NoblessTheme/assets/indexBootstrapTheme.js");

__webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");

__webpack_require__(/*! ./scss/index.scss */ "./themes/NoblessTheme/assets/scss/index.scss");

__webpack_require__(/*! ./media/logo.png */ "./themes/NoblessTheme/assets/media/logo.png");

__webpack_require__(/*! ./media/return-policy.png */ "./themes/NoblessTheme/assets/media/return-policy.png");

__webpack_require__(/*! ./media/delivery-truck.png */ "./themes/NoblessTheme/assets/media/delivery-truck.png");

__webpack_require__(/*! ./media/card.png */ "./themes/NoblessTheme/assets/media/card.png");

__webpack_require__(/*! ./media/mastercard.png */ "./themes/NoblessTheme/assets/media/mastercard.png");

__webpack_require__(/*! ./media/visa.png */ "./themes/NoblessTheme/assets/media/visa.png");

__webpack_require__(/*! ./media/paypal.png */ "./themes/NoblessTheme/assets/media/paypal.png");

__webpack_require__(/*! ./media/colissimo.png */ "./themes/NoblessTheme/assets/media/colissimo.png");

__webpack_require__(/*! ./media/chronopost.png */ "./themes/NoblessTheme/assets/media/chronopost.png");

__webpack_require__(/*! ./media/mondial-relay.png */ "./themes/NoblessTheme/assets/media/mondial-relay.png");

__webpack_require__(/*! ./media/account-icon.png */ "./themes/NoblessTheme/assets/media/account-icon.png");

__webpack_require__(/*! ./media/shopping-bag-icon.png */ "./themes/NoblessTheme/assets/media/shopping-bag-icon.png");

__webpack_require__(/*! ./media/back.png */ "./themes/NoblessTheme/assets/media/back.png");

__webpack_require__(/*! ./media/next.png */ "./themes/NoblessTheme/assets/media/next.png");

__webpack_require__(/*! ./media/icon-fr.png */ "./themes/NoblessTheme/assets/media/icon-fr.png");

__webpack_require__(/*! ./media/icon-de.png */ "./themes/NoblessTheme/assets/media/icon-de.png");

__webpack_require__(/*! ./media/icon-it.png */ "./themes/NoblessTheme/assets/media/icon-it.png");

__webpack_require__(/*! ./media/icon-es.png */ "./themes/NoblessTheme/assets/media/icon-es.png");

__webpack_require__(/*! ./media/icon-en.png */ "./themes/NoblessTheme/assets/media/icon-en.png");

__webpack_require__(/*! ./media/reload.png */ "./themes/NoblessTheme/assets/media/reload.png");

/* JS plugins */

/* Css files */

/* Media files */
window.onload = _functions.init;
window.onresize = _functions.resizeContent;

/***/ }),

/***/ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js":
/*!************************************************************!*\
  !*** ./themes/NoblessTheme/assets/fresco/js/fresco.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Fresco - A Beautiful Responsive Lightbox - v2.3.0
 * (c) 2012-2019 Nick Stakenburg
 *
 * https://www.frescojs.com
 *
 * @license: https://creativecommons.org/licenses/by/4.0
 */
!function (i, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(undefined, function ($) {
  var Fresco = {};
  $.extend(Fresco, {
    version: "2.3.0"
  }), Fresco.Skins = {
    fresco: {}
  };
  var Bounds = {
    viewport: function viewport() {
      var i = {
        width: $(window).width()
      };

      if (Browser.MobileSafari || Browser.Android && Browser.Gecko) {
        var e = document.documentElement.clientWidth / window.innerWidth;
        i.height = window.innerHeight * e;
      } else i.height = $(window).height();

      return i;
    }
  },
      Browser = (e = navigator.userAgent, {
    IE: !(!window.attachEvent || -1 !== e.indexOf("Opera")) && f("MSIE "),
    Opera: -1 < e.indexOf("Opera") && (!!window.opera && opera.version && parseFloat(opera.version()) || 7.55),
    WebKit: -1 < e.indexOf("AppleWebKit/") && f("AppleWebKit/"),
    Gecko: -1 < e.indexOf("Gecko") && -1 === e.indexOf("KHTML") && f("rv:"),
    MobileSafari: !!e.match(/Apple.*Mobile.*Safari/),
    Chrome: -1 < e.indexOf("Chrome") && f("Chrome/"),
    ChromeMobile: -1 < e.indexOf("CrMo") && f("CrMo/"),
    Android: -1 < e.indexOf("Android") && f("Android "),
    IEMobile: -1 < e.indexOf("IEMobile") && f("IEMobile/")
  }),
      e;

  function f(i) {
    var t = new RegExp(i + "([\\d.]+)").exec(e);
    return !t || parseFloat(t[1]);
  }

  var _slice = Array.prototype.slice;

  function baseToString(i) {
    return "string" == typeof i ? i : null == i ? "" : i + "";
  }

  var _ = {
    isElement: function isElement(i) {
      return i && 1 === i.nodeType;
    },
    String: {
      capitalize: function capitalize(i) {
        return (i = baseToString(i)) && i.charAt(0).toUpperCase() + i.slice(1);
      }
    }
  };
  $(document.documentElement).on("mousewheel DOMMouseScroll", function (i) {
    var e;

    if (i.originalEvent.wheelDelta ? e = i.originalEvent.wheelDelta / 120 : i.originalEvent.detail && (e = -i.originalEvent.detail / 3), e) {
      var t = $.Event("fresco:mousewheel");
      $(i.target).trigger(t, e), t.isPropagationStopped() && i.stopPropagation(), t.isDefaultPrevented() && i.preventDefault();
    }
  });
  var Fit = {
    within: function within(i, e) {
      for (var t = $.extend({
        height: !0,
        width: !0
      }, arguments[2] || {}), s = $.extend({}, e), n = 1, o = 5, a = t.width, h = t.height; 0 < o && (a && s.width > i.width || h && s.height > i.height);) {
        var r = 1,
            d = 1;
        a && s.width > i.width && (r = i.width / s.width), h && s.height > i.height && (d = i.height / s.height), n = Math.min(r, d), s = {
          width: e.width * n,
          height: e.height * n
        }, o--;
      }

      return s.width = Math.max(s.width, 0), s.height = Math.max(s.height, 0), s;
    }
  };
  $.extend($.easing, {
    frescoEaseInCubic: function frescoEaseInCubic(i, e, t, s, n) {
      return s * (e /= n) * e * e + t;
    },
    frescoEaseInSine: function frescoEaseInSine(i, e, t, s, n) {
      return -s * Math.cos(e / n * (Math.PI / 2)) + s + t;
    },
    frescoEaseOutSine: function frescoEaseOutSine(i, e, t, s, n) {
      return s * Math.sin(e / n * (Math.PI / 2)) + t;
    }
  });
  var Support = (O = document.createElement("div"), P = "Webkit Moz O ms Khtml".split(" "), {
    canvas: (ba = document.createElement("canvas"), !(!ba.getContext || !ba.getContext("2d"))),
    css: {
      animation: S("animation"),
      transform: S("transform"),
      prefixed: function prefixed(i) {
        return S(i, "prefix");
      }
    },
    svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    touch: function () {
      try {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      } catch (i) {
        return !1;
      }
    }()
  }),
      ba,
      O,
      P;

  function S(i, e) {
    var t = i.charAt(0).toUpperCase() + i.substr(1);
    return function (i, e) {
      for (var t in i) if (void 0 !== O.style[i[t]]) return "prefix" !== e || i[t];

      return !1;
    }((i + " " + P.join(t + " ") + t).split(" "), e);
  }

  Support.detectMobileTouch = function () {
    Support.mobileTouch = Support.touch && (Browser.MobileSafari || Browser.Android || Browser.IEMobile || Browser.ChromeMobile || !/^(Win|Mac|Linux)/.test(navigator.platform));
  }, Support.detectMobileTouch();

  var ImageReady = function ImageReady() {
    return this.initialize.apply(this, Array.prototype.slice.call(arguments));
  };

  function Timers() {
    return this.initialize.apply(this, _slice.call(arguments));
  }

  function getURIData(s) {
    var n = {
      type: "image"
    };
    return $.each(Types, function (i, e) {
      var t = e.data(s);
      t && ((n = t).type = i, n.url = s);
    }), n;
  }

  function detectExtension(i) {
    var e = (i || "").replace(/\?.*/g, "").match(/\.([^.]{3,4})$/);
    return e ? e[1].toLowerCase() : null;
  }

  $.extend(ImageReady.prototype, {
    supports: {
      naturalWidth: "naturalWidth" in new Image()
    },
    initialize: function initialize(i, e, t) {
      this.img = $(i)[0], this.successCallback = e, this.errorCallback = t, this.isLoaded = !1, this.options = $.extend({
        method: "naturalWidth",
        pollFallbackAfter: 1e3
      }, arguments[3] || {}), this.supports.naturalWidth && "onload" !== this.options.method ? this.img.complete && "undefined" !== $.type(this.img.naturalWidth) ? setTimeout($.proxy(function () {
        0 < this.img.naturalWidth ? this.success() : this.error();
      }, this)) : ($(this.img).bind("error", $.proxy(function () {
        setTimeout($.proxy(function () {
          this.error();
        }, this));
      }, this)), this.intervals = [[1e3, 10], [2e3, 50], [4e3, 100], [2e4, 500]], this._ipos = 0, this._time = 0, this._delay = this.intervals[this._ipos][1], this.poll()) : setTimeout($.proxy(this.fallback, this));
    },
    poll: function poll() {
      this._polling = setTimeout($.proxy(function () {
        if (0 < this.img.naturalWidth) this.success();else {
          if (this._time += this._delay, this.options.pollFallbackAfter && this._time >= this.options.pollFallbackAfter && !this._usedPollFallback && (this._usedPollFallback = !0, this.fallback()), this._time > this.intervals[this._ipos][0]) {
            if (!this.intervals[this._ipos + 1]) return void this.error();
            this._ipos++, this._delay = this.intervals[this._ipos][1];
          }

          this.poll();
        }
      }, this), this._delay);
    },
    fallback: function fallback() {
      var i = new Image();
      (this._fallbackImg = i).onload = $.proxy(function () {
        i.onload = function () {}, this.supports.naturalWidth || (this.img.naturalWidth = i.width, this.img.naturalHeight = i.height), this.success();
      }, this), i.onerror = $.proxy(this.error, this), i.src = this.img.src;
    },
    abort: function abort() {
      this._fallbackImg && (this._fallbackImg.onload = function () {}), this._polling && (clearTimeout(this._polling), this._polling = null);
    },
    success: function success() {
      this._calledSuccess || (this._calledSuccess = !0, this.isLoaded = !0, this.successCallback(this));
    },
    error: function error() {
      this._calledError || (this._calledError = !0, this.abort(), this.errorCallback && this.errorCallback(this));
    }
  }), $.extend(Timers.prototype, {
    initialize: function initialize() {
      this._timers = {};
    },
    set: function set(i, e, t) {
      this._timers[i] = setTimeout(e, t);
    },
    get: function get(i) {
      return this._timers[i];
    },
    clear: function clear(i) {
      i ? this._timers[i] && (clearTimeout(this._timers[i]), delete this._timers[i]) : this.clearAll();
    },
    clearAll: function clearAll() {
      $.each(this._timers, function (i, e) {
        clearTimeout(e);
      }), this._timers = {};
    }
  });

  var Type = {
    isVideo: function isVideo(i) {
      return /^(youtube|vimeo)$/.test(i);
    }
  },
      Types = {
    image: {
      extensions: "bmp gif jpeg jpg png webp",
      detect: function detect(i) {
        return -1 < $.inArray(detectExtension(i), this.extensions.split(" "));
      },
      data: function data(i) {
        return !!this.detect() && {
          extension: detectExtension(i)
        };
      }
    },
    vimeo: {
      detect: function detect(i) {
        var e = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(i);
        return !(!e || !e[2]) && e[2];
      },
      data: function data(i) {
        var e = this.detect(i);
        return !!e && {
          id: e
        };
      }
    },
    youtube: {
      detect: function detect(i) {
        var e = /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(i);
        return e && e[2] ? e[2] : !(!(e = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(i)) || !e[3]) && e[3];
      },
      data: function data(i) {
        var e = this.detect(i);
        return !!e && {
          id: e
        };
      }
    }
  },
      VimeoThumbnail = function () {
    function i() {
      return this.initialize.apply(this, _slice.call(arguments));
    }

    $.extend(i.prototype, {
      initialize: function initialize(i, e, t) {
        this.url = i, this.successCallback = e, this.errorCallback = t, this.load();
      },
      load: function load() {
        var i = s.get(this.url);
        if (i) return this.successCallback(i.data.url);
        var e = "http" + (window.location && "https:" === window.location.protocol ? "s" : "") + ":",
            t = getURIData(this.url).id;
        this._xhr = $.getJSON(e + "//vimeo.com/api/oembed.json?url=" + e + "//vimeo.com/" + t + "&callback=?", $.proxy(function (i) {
          if (i && i.thumbnail_url) {
            var e = {
              url: i.thumbnail_url
            };
            s.set(this.url, e), this.successCallback(e.url);
          } else this.errorCallback();
        }, this));
      },
      abort: function abort() {
        this._xhr && (this._xhr.abort(), this._xhr = null);
      }
    });
    var s = {
      cache: [],
      get: function get(i) {
        for (var e = null, t = 0; t < this.cache.length; t++) this.cache[t] && this.cache[t].url === i && (e = this.cache[t]);

        return e;
      },
      set: function set(i, e) {
        this.remove(i), this.cache.push({
          url: i,
          data: e
        });
      },
      remove: function remove(i) {
        for (var e = 0; e < this.cache.length; e++) this.cache[e] && this.cache[e].url === i && delete this.cache[e];
      }
    };
    return i;
  }(),
      VimeoReady = function () {
    function i() {
      return this.initialize.apply(this, _slice.call(arguments));
    }

    $.extend(i.prototype, {
      initialize: function initialize(i, e) {
        this.url = i, this.callback = e, this.load();
      },
      load: function load() {
        var i = s.get(this.url);
        if (i) return this.callback(i.data);
        var e = "http" + (window.location && "https:" === window.location.protocol ? "s" : "") + ":",
            t = getURIData(this.url).id;
        this._xhr = $.getJSON(e + "//vimeo.com/api/oembed.json?url=" + e + "//vimeo.com/" + t + "&maxwidth=9999999&maxheight=9999999&callback=?", $.proxy(function (i) {
          var e = {
            dimensions: {
              width: i.width,
              height: i.height
            }
          };
          s.set(this.url, e), this.callback && this.callback(e);
        }, this));
      },
      abort: function abort() {
        this._xhr && (this._xhr.abort(), this._xhr = null);
      }
    });
    var s = {
      cache: [],
      get: function get(i) {
        for (var e = null, t = 0; t < this.cache.length; t++) this.cache[t] && this.cache[t].url === i && (e = this.cache[t]);

        return e;
      },
      set: function set(i, e) {
        this.remove(i), this.cache.push({
          url: i,
          data: e
        });
      },
      remove: function remove(i) {
        for (var e = 0; e < this.cache.length; e++) this.cache[e] && this.cache[e].url === i && delete this.cache[e];
      }
    };
    return i;
  }(),
      Options = {
    defaults: {
      effects: {
        content: {
          show: 0,
          hide: 0
        },
        spinner: {
          show: 150,
          hide: 150
        },
        window: {
          show: 440,
          hide: 300
        },
        thumbnail: {
          show: 300,
          delay: 150
        },
        thumbnails: {
          slide: 0
        }
      },
      keyboard: {
        left: !0,
        right: !0,
        esc: !0
      },
      loadedMethod: "naturalWidth",
      loop: !1,
      onClick: "previous-next",
      overflow: !1,
      overlay: {
        close: !0
      },
      preload: [1, 2],
      position: !0,
      skin: "fresco",
      spinner: !0,
      spinnerDelay: 300,
      sync: !0,
      thumbnails: "horizontal",
      ui: "outside",
      uiDelay: 3e3,
      vimeo: {
        autoplay: 1,
        api: 1,
        title: 1,
        byline: 1,
        portrait: 0,
        loop: 0
      },
      youtube: {
        autoplay: 1,
        controls: 1,
        enablejsapi: 1,
        hd: 1,
        iv_load_policy: 3,
        loop: 0,
        modestbranding: 1,
        rel: 0,
        vq: "hd1080"
      },
      initialTypeOptions: {
        image: {},
        vimeo: {
          width: 1280
        },
        youtube: {
          width: 1280,
          height: 720
        }
      }
    },
    create: function create(i, e, t) {
      t = t || {}, (i = i || {}).skin = i.skin || this.defaults.skin;
      var s = i.skin ? $.extend({}, Fresco.Skins[i.skin] || Fresco.Skins[this.defaults.skin]) : {},
          n = $.extend(!0, {}, this.defaults, s);
      n.initialTypeOptions && (e && n.initialTypeOptions[e] && (n = $.extend(!0, {}, n.initialTypeOptions[e], n)), delete n.initialTypeOptions);
      var o = $.extend(!0, {}, n, i);

      if (Support.mobileTouch && "inside" === o.ui && (o.ui = "outside"), (!o.effects || Browser.IE && Browser.IE < 9) && (o.effects = {}, $.each(this.defaults.effects, function (e, i) {
        $.each(o.effects[e] = $.extend({}, i), function (i) {
          o.effects[e][i] = 0;
        });
      }), o.spinner = !1), o.keyboard && ("boolean" === $.type(o.keyboard) && (o.keyboard = {}, $.each(this.defaults.keyboard, function (i, e) {
        o.keyboard[i] = !0;
      })), "vimeo" !== e && "youtube" !== e || $.extend(o.keyboard, {
        left: !1,
        right: !1
      })), !o.overflow || Support.mobileTouch ? o.overflow = {
        x: !1,
        y: !1
      } : "boolean" === $.type(o.overflow) && (o.overflow = {
        x: !1,
        y: !0
      }), "vimeo" !== e && "youtube" !== e || (o.overlap = !1), (Browser.IE && Browser.IE < 9 || Support.mobileTouch) && (o.thumbnail = !1, o.thumbnails = !1), "youtube" !== e && (o.width && !o.maxWidth && (o.maxWidth = o.width), o.height && !o.maxHeight && (o.maxHeight = o.height)), !o.thumbnail && "boolean" !== $.type(o.thumbnail)) {
        var a = !1;

        switch (e) {
          case "youtube":
            a = "http" + (window.location && "https:" === window.location.protocol ? "s" : "") + ":" + "//img.youtube.com/vi/" + t.id + "/0.jpg";
            break;

          case "image":
          case "vimeo":
            a = !0;
        }

        o.thumbnail = a;
      }

      return o;
    }
  },
      Overlay = {
    initialize: function initialize() {
      this.build(), this.visible = !1;
    },
    build: function build() {
      this.element = $("<div>").addClass("fr-overlay").hide().append($("<div>").addClass("fr-overlay-background")), this.element.on("click", $.proxy(function () {
        var i = Pages.page;
        i && i.view && i.view.options.overlay && !i.view.options.overlay.close || Window.hide();
      }, this)), Support.mobileTouch && this.element.addClass("fr-mobile-touch"), this.element.on("fresco:mousewheel", function (i) {
        i.preventDefault();
      });
    },
    setSkin: function setSkin(i) {
      this.skin && this.element.removeClass("fr-overlay-skin-" + this.skin), this.element.addClass("fr-overlay-skin-" + i), this.skin = i;
    },
    attach: function attach() {
      $(document.body).append(this.element);
    },
    detach: function detach() {
      this.element.detach();
    },
    show: function show(i, e) {
      if (this.visible) i && i();else {
        this.visible = !0, this.attach(), this.max();
        var t = Pages.page && Pages.page.view.options.effects.window.show || 0,
            s = ("number" === $.type(e) ? e : t) || 0;
        this.element.stop(!0).fadeTo(s, 1, i);
      }
    },
    hide: function hide(i, e) {
      if (this.visible) {
        var t = Pages.page && Pages.page.view.options.effects.window.hide || 0,
            s = ("number" === $.type(e) ? e : t) || 0;
        this.element.stop(!0).fadeOut(s || 0, $.proxy(function () {
          this.detach(), this.visible = !1, i && i();
        }, this));
      } else i && i();
    },
    getScrollDimensions: function getScrollDimensions() {
      var n = {};
      return $.each(["width", "height"], function (i, e) {
        var t = e.substr(0, 1).toUpperCase() + e.substr(1),
            s = document.documentElement;
        n[e] = (Browser.IE ? Math.max(s["offset" + t], s["scroll" + t]) : Browser.WebKit ? document.body["scroll" + t] : s["scroll" + t]) || 0;
      }), n;
    },
    max: function max() {
      var i;

      if (Browser.MobileSafari && Browser.WebKit && Browser.WebKit < 533.18 && (i = this.getScrollDimensions(), this.element.css(i)), Browser.IE && Browser.IE < 9) {
        var e = Bounds.viewport();
        this.element.css({
          height: e.height,
          width: e.width
        });
      }

      Support.mobileTouch && !i && this.element.css({
        height: this.getScrollDimensions().height
      });
    }
  },
      Window = {
    initialize: function initialize() {
      this.queues = [], this.queues.hide = $({}), this.pages = [], this._tracking = [], this._first = !0, this.timers = new Timers(), this.build(), this.setSkin(Options.defaults.skin);
    },
    build: function build() {
      if (this.element = $("<div>").addClass("fr-window fr-measured").hide().append(this._box = $("<div>").addClass("fr-box").append(this._pages = $("<div>").addClass("fr-pages"))).append(this._thumbnails = $("<div>").addClass("fr-thumbnails")), Overlay.initialize(), Pages.initialize(this._pages), Thumbnails.initialize(this._thumbnails), Spinner.initialize(), UI.initialize(), this.element.addClass("fr" + (Support.mobileTouch ? "" : "-no") + "-mobile-touch"), this.element.addClass("fr" + (Support.svg ? "" : "-no") + "-svg"), Browser.IE) for (var i = 7; i <= 9; i++) Browser.IE < i && this.element.addClass("fr-ltIE" + i);
      this.element.on("fresco:mousewheel", function (i) {
        i.preventDefault();
      });
    },
    attach: function attach() {
      this._attached || ($(document.body).append(this.element), this._attached = !0);
    },
    detach: function detach() {
      this._attached && (this.element.detach(), this._attached = !1);
    },
    setSkin: function setSkin(i) {
      this._skin && this.element.removeClass("fr-window-skin-" + this._skin), this.element.addClass("fr-window-skin-" + i), Overlay.setSkin(i), this._skin = i;
    },
    setShowingType: function setShowingType(i) {
      this._showingType !== i && (this._showingType && (this.element.removeClass("fr-showing-type-" + this._showingType), Type.isVideo(this._showingType) && this.element.removeClass("fr-showing-type-video")), this.element.addClass("fr-showing-type-" + i), Type.isVideo(i) && this.element.addClass("fr-showing-type-video"), this._showingType = i);
    },
    startObservingResize: function startObservingResize() {
      this._onWindowResizeHandler || $(window).on("resize orientationchange", this._onWindowResizeHandler = $.proxy(this._onWindowResize, this));
    },
    stopObservingResize: function stopObservingResize() {
      this._onWindowResizeHandler && ($(window).off("resize orientationchange", this._onWindowResizeHandler), this._onWindowResizeHandler = null);
    },
    _onScroll: function _onScroll() {
      Support.mobileTouch && this.timers.set("scroll", $.proxy(this.adjustToScroll, this), 0);
    },
    _onWindowResize: function _onWindowResize() {
      var i;
      (i = Pages.page) && (Thumbnails.fitToViewport(), this.updateBoxDimensions(), i.fitToBox(), UI.update(), UI.adjustPrevNext(null, 0), Spinner.center(), Overlay.max(), UI._onWindowResize(), this._onScroll());
    },
    adjustToScroll: function adjustToScroll() {
      Support.mobileTouch && this.element.css({
        top: $(window).scrollTop()
      });
    },
    getBoxDimensions: function getBoxDimensions() {
      return this._boxDimensions;
    },
    updateBoxDimensions: function updateBoxDimensions() {
      if (Pages.page) {
        var i = Bounds.viewport(),
            e = Thumbnails.getDimensions(),
            t = "horizontal" === Thumbnails._orientation;
        this._boxDimensions = {
          width: t ? i.width : i.width - e.width,
          height: t ? i.height - e.height : i.height
        }, this._boxPosition = {
          top: 0,
          left: t ? 0 : e.width
        }, this._box.css($.extend({}, this._boxDimensions, this._boxPosition));
      }
    },
    show: function show(i, e) {
      if (this.visible) i && i();else {
        this.visible = !0, this.opening = !0, this.attach(), this.timers.clear("show-window"), this.timers.clear("hide-overlay"), this.adjustToScroll();
        var t = ("number" === $.type(e) ? e : Pages.page && Pages.page.view.options.effects.window.show) || 0,
            s = 2;
        Overlay[Pages.page && Pages.page.view.options.overlay ? "show" : "hide"](function () {
          i && --s < 1 && i();
        }, t), this.timers.set("show-window", $.proxy(function () {
          this._show($.proxy(function () {
            this.opening = !1, i && --s < 1 && i();
          }, this), t);
        }, this), 1 < t ? Math.min(.5 * t, 50) : 1);
      }
    },
    _show: function _show(i, e) {
      var t = ("number" === $.type(e) ? e : Pages.page && Pages.page.view.options.effects.window.show) || 0;
      this.element.stop(!0).fadeTo(t, 1, i);
    },
    hide: function hide(e) {
      if (this.view) {
        var i = this.queues.hide;
        i.queue([]), this.timers.clear("show-window"), this.timers.clear("hide-overlay");
        var t = Pages.page ? Pages.page.view.options.effects.window.hide : 0;
        i.queue($.proxy(function (i) {
          Pages.stop(), Spinner.hide(), i();
        }, this)), i.queue($.proxy(function (i) {
          UI.disable(), UI.hide(null, t), Keyboard.disable(), i();
        }, this)), i.queue($.proxy(function (i) {
          var e = 2;
          this._hide(function () {
            --e < 1 && i();
          }, t), this.timers.set("hide-overlay", $.proxy(function () {
            Overlay.hide(function () {
              --e < 1 && i();
            }, t);
          }, this), 1 < t ? Math.min(.5 * t, 150) : 1), this._first = !0;
        }, this)), i.queue($.proxy(function (i) {
          this._reset(), this.stopObservingResize(), Pages.removeAll(), Thumbnails.clear(), this.timers.clear(), this._position = -1;
          var e = Pages.page && Pages.page.view.options.afterHide;
          "function" === $.type(e) && e.call(Fresco), this.view = null, this.opening = !1, this.closing = !1, this.detach(), i();
        }, this)), "function" === $.type(e) && i.queue($.proxy(function (i) {
          e(), i();
        }, this));
      }
    },
    _hide: function _hide(i, e) {
      var t = ("number" === $.type(e) ? e : Pages.page && Pages.page.view.options.effects.window.hide) || 0;
      this.element.stop(!0).fadeOut(t, i);
    },
    load: function load(i, e) {
      this.views = i, this.attach(), Thumbnails.load(i), Pages.load(i), this.startObservingResize(), e && this.setPosition(e);
    },
    setPosition: function setPosition(i, e) {
      this._position = i, this.view = this.views[i - 1], this.stopHideQueue(), this.page = Pages.show(i, $.proxy(function () {
        e && e();
      }, this));
    },
    stopHideQueue: function stopHideQueue() {
      this.queues.hide.queue([]);
    },
    _reset: function _reset() {
      this.visible = !1, UI.hide(null, 0), UI.reset();
    },
    mayPrevious: function mayPrevious() {
      return this.view && this.view.options.loop && this.views && 1 < this.views.length || 1 !== this._position;
    },
    previous: function previous(i) {
      var e = this.mayPrevious();
      (i || e) && this.setPosition(this.getSurroundingIndexes().previous);
    },
    mayNext: function mayNext() {
      var i = this.views && 1 < this.views.length;
      return this.view && this.view.options.loop && i || i && 1 !== this.getSurroundingIndexes().next;
    },
    next: function next(i) {
      var e = this.mayNext();
      (i || e) && this.setPosition(this.getSurroundingIndexes().next);
    },
    getSurroundingIndexes: function getSurroundingIndexes() {
      if (!this.views) return {};
      var i = this._position,
          e = this.views.length;
      return {
        previous: i <= 1 ? e : i - 1,
        next: e <= i ? 1 : i + 1
      };
    }
  },
      Keyboard = {
    enabled: !1,
    keyCode: {
      left: 37,
      right: 39,
      esc: 27
    },
    enable: function enable(i) {
      this.disable(), i && ($(document).on("keydown", this._onKeyDownHandler = $.proxy(this.onKeyDown, this)).on("keyup", this._onKeyUpHandler = $.proxy(this.onKeyUp, this)), this.enabled = i);
    },
    disable: function disable() {
      this.enabled = !1, this._onKeyUpHandler && ($(document).off("keyup", this._onKeyUpHandler).off("keydown", this._onKeyDownHandler), this._onKeyUpHandler = this._onKeyDownHandler = null);
    },
    onKeyDown: function onKeyDown(i) {
      if (this.enabled) {
        var e = this.getKeyByKeyCode(i.keyCode);
        if (e && (!e || !this.enabled || this.enabled[e])) switch (i.preventDefault(), i.stopPropagation(), e) {
          case "left":
            Window.previous();
            break;

          case "right":
            Window.next();
        }
      }
    },
    onKeyUp: function onKeyUp(i) {
      if (this.enabled) {
        var e = this.getKeyByKeyCode(i.keyCode);
        if (e && (!e || !this.enabled || this.enabled[e])) switch (e) {
          case "esc":
            Window.hide();
        }
      }
    },
    getKeyByKeyCode: function getKeyByKeyCode(i) {
      for (var e in this.keyCode) if (this.keyCode[e] === i) return e;

      return null;
    }
  },
      Page = (Lc = 0, Mc = {}, Nc = $("<div>").addClass("fr-stroke fr-stroke-top fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color")).add($("<div>").addClass("fr-stroke fr-stroke-bottom fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-left fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-right fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color"))), $.extend(Oc.prototype, {
    initialize: function initialize(i, e, t) {
      this.view = i, this.dimensions = {
        width: 0,
        height: 0
      }, this.uid = Lc++, this._position = e, this._total = t, this._fullClick = !1, this._visible = !1, this.queues = {}, this.queues.showhide = $({});
    },
    create: function create() {
      if (!this._created) {
        Pages.element.append(this.element = $("<div>").addClass("fr-page").append(this.container = $("<div>").addClass("fr-container")).css({
          opacity: 0
        }).hide());
        var i = this.view.options.position && 1 < this._total;

        if (i && this.element.addClass("fr-has-position"), (this.view.caption || i) && (this.element.append(this.info = $("<div>").addClass("fr-info").append($("<div>").addClass("fr-info-background")).append(Nc.clone(!0)).append(this.infoPadder = $("<div>").addClass("fr-info-padder"))), i && (this.element.addClass("fr-has-position"), this.infoPadder.append(this.pos = $("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total)))), this.view.caption && this.infoPadder.append(this.caption = $("<div>").addClass("fr-caption").html(this.view.caption))), this.container.append(this.background = $("<div>").addClass("fr-content-background")).append(this.content = $("<div>").addClass("fr-content")), "image" == this.view.type && (this.content.append(this.image = $("<img>").addClass("fr-content-element").attr({
          src: this.view.url
        })), this.content.append(Nc.clone(!0))), i && "outside" == this.view.options.ui && this.container.append(this.positionOutside = $("<div>").addClass("fr-position-outside").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total))), "inside" == this.view.options.ui) {
          this.content.append(this.previousInside = $("<div>").addClass("fr-side fr-side-previous fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.nextInside = $("<div>").addClass("fr-side fr-side-next fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.closeInside = $("<div>").addClass("fr-close fr-toggle-ui").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), (this.view.caption || i && this.view.grouped.caption) && (this.content.append(this.infoInside = $("<div>").addClass("fr-info fr-toggle-ui").append($("<div>").addClass("fr-info-background")).append(Nc.clone(!0)).append(this.infoPadderInside = $("<div>").addClass("fr-info-padder"))), i && this.infoPadderInside.append(this.posInside = $("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total))), this.view.caption && this.infoPadderInside.append(this.captionInside = $("<div>").addClass("fr-caption").html(this.view.caption))), this.view.caption || !i || this.view.grouped.caption || this.content.append(this.positionInside = $("<div>").addClass("fr-position-inside fr-toggle-ui").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total)));
          var e = this.view.options.loop && 1 < this._total || 1 != this._position,
              t = this.view.options.loop && 1 < this._total || this._position < this._total;
          this.previousInside[(e ? "remove" : "add") + "Class"]("fr-side-disabled"), this.nextInside[(t ? "remove" : "add") + "Class"]("fr-side-disabled");
        }

        $.each(["x", "y"], $.proxy(function (i, e) {
          this.view.options.overflow[e] && this.element.addClass("fr-overflow-" + e);
        }, this)), this.element.addClass("fr-type-" + this.view.type), Type.isVideo(this.view.type) && this.element.addClass("fr-type-video"), this._total < 2 && this.element.addClass("fr-no-sides"), this._created = !0;
      }
    },
    _getSurroundingPages: function _getSurroundingPages() {
      var i;
      if (!(i = this.view.options.preload)) return [];

      for (var e = [], t = Math.max(1, this._position - i[0]), s = Math.min(this._position + i[1], this._total), n = this._position, o = n; o <= s; o++) (a = Pages.pages[o - 1])._position != n && e.push(a);

      for (o = n; t <= o; o--) {
        var a;
        (a = Pages.pages[o - 1])._position != n && e.push(a);
      }

      return e;
    },
    preloadSurroundingImages: function preloadSurroundingImages() {
      var i = this._getSurroundingPages();

      $.each(i, $.proxy(function (i, e) {
        e.preload();
      }, this));
    },
    preload: function preload() {
      this.preloading || this.preloaded || "image" != this.view.type || !this.view.options.preload || this.loaded || (this.create(), this.preloading = !0, this.preloadReady = new ImageReady(this.image[0], $.proxy(function (i) {
        this.loaded = !0, Mc[this.view.url] = !0, this.preloading = !1, this.preloaded = !0, this.dimensions = {
          width: i.img.naturalWidth,
          height: i.img.naturalHeight
        };
      }, this), null, {
        method: "naturalWidth"
      }));
    },
    load: function load(e, i) {
      if (this.create(), this.loaded) e && e();else switch (this.abort(), this.loading = !0, this.view.options.spinner && (this._spinnerDelay = setTimeout($.proxy(function () {
        Spinner.show();
      }, this), this.view.options.spinnerDelay || 0)), this.view.type) {
        case "image":
          if (this.error) return void (e && e());
          this.imageReady = new ImageReady(this.image[0], $.proxy(function (i) {
            this._markAsLoaded(), this.setDimensions({
              width: i.img.naturalWidth,
              height: i.img.naturalHeight
            }), e && e();
          }, this), $.proxy(function () {
            this._markAsLoaded(), this.image.hide(), this.content.prepend(this.error = $("<div>").addClass("fr-error fr-content-element").append($("<div>").addClass("fr-error-icon"))), this.element.addClass("fr-has-error"), this.setDimensions({
              width: this.error.outerWidth(),
              height: this.error.outerHeight()
            }), this.error.css({
              width: "100%",
              height: "100%"
            }), e && e();
          }, this), {
            method: this.view.options.loadedMethod
          });
          break;

        case "vimeo":
          this.vimeoReady = new VimeoReady(this.view.url, $.proxy(function (i) {
            this._markAsLoaded(), this.setDimensions({
              width: i.dimensions.width,
              height: i.dimensions.height
            }), e && e();
          }, this));
          break;

        case "youtube":
          this._markAsLoaded(), this.setDimensions({
            width: this.view.options.width,
            height: this.view.options.height
          }), e && e();
      }
    },
    setDimensions: function setDimensions(i) {
      if (this.dimensions = i, this.view.options.maxWidth || this.view.options.maxHeight) {
        var e = this.view.options,
            t = {
          width: e.maxWidth ? e.maxWidth : this.dimensions.width,
          height: e.maxHeight ? e.maxHeight : this.dimensions.height
        };
        this.dimensions = Fit.within(t, this.dimensions);
      }
    },
    _markAsLoaded: function _markAsLoaded() {
      this._abortSpinnerDelay(), this.loading = !1, this.loaded = !0, Mc[this.view.url] = !0, Spinner.hide(null, null, this._position);
    },
    isVideo: function isVideo() {
      return Type.isVideo(this.view.type);
    },
    insertVideo: function insertVideo(i) {
      if (!this.playerIframe && this.isVideo()) {
        var e = "http" + (window.location && "https:" === window.location.protocol ? "s" : "") + ":",
            t = $.extend({}, this.view.options[this.view.type] || {}),
            s = $.param(t),
            n = {
          vimeo: e + "//player.vimeo.com/video/{id}?{queryString}",
          youtube: e + "//www.youtube.com/embed/{id}?{queryString}"
        }[this.view.type].replace("{id}", this.view._data.id).replace("{queryString}", s);
        this.content.prepend(this.playerIframe = $("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>").addClass("fr-content-element").attr({
          src: n,
          height: this._contentDimensions.height,
          width: this._contentDimensions.width,
          frameborder: 0
        })), i && i();
      } else i && i();
    },
    raise: function raise() {
      var i = Pages.element[0].lastChild;
      i && i === this.element[0] || Pages.element.append(this.element);
    },
    show: function show(e) {
      var i = this.queues.showhide;
      i.queue([]), i.queue($.proxy(function (i) {
        var e = this.view.options.spinner && !Mc[this.view.url];
        Spinner._visible && !e && Spinner.hide(), Pages.stopInactive(), i();
      }, this)), i.queue($.proxy(function (i) {
        this.updateUI(), UI.set(this._ui), i();
      }, this)), i.queue($.proxy(function (i) {
        Keyboard.enable(this.view.options.keyboard), i();
      }, this)), i.queue($.proxy(function (i) {
        Spinner.setSkin(this.view.options.skin), this.load($.proxy(function () {
          this.preloadSurroundingImages(), i();
        }, this));
      }, this)), i.queue($.proxy(function (i) {
        this.raise(), Window.setSkin(this.view.options.skin), UI.enable(), this.fitToBox(), Window.adjustToScroll(), i();
      }, this)), this.isVideo() && i.queue($.proxy(function (i) {
        this.insertVideo($.proxy(function () {
          i();
        }));
      }, this)), this.view.options.sync || i.queue($.proxy(function (i) {
        Pages.hideInactive(i);
      }, this)), i.queue($.proxy(function (i) {
        var e = 3,
            t = this.view.options.effects.content.show;
        Window.setShowingType(this.view.type), Window.visible || (t = this.view.options.effects.window.show, "function" === $.type(this.view.options.onShow) && this.view.options.onShow.call(Fresco)), this.view.options.sync && (e++, Pages.hideInactive(function () {
          --e < 1 && i();
        })), Window.show(function () {
          --e < 1 && i();
        }, this.view.options.effects.window.show), this._show(function () {
          --e < 1 && i();
        }, t), UI.adjustPrevNext(function () {
          --e < 1 && i();
        }, Window._first ? 0 : t), Window._first ? (UI.show(null, 0), Window._first = !1) : UI.show(null, 0);
        var s = this.view.options.afterPosition;
        "function" === $.type(s) && s.call(Fresco, this._position);
      }, this)), i.queue($.proxy(function (i) {
        this._visible = !0, e && e(), i();
      }, this));
    },
    _show: function _show(i, e) {
      var t = Window.visible ? "number" === $.type(e) ? e : this.view.options.effects.content.show : 0;
      this.element.stop(!0).show().fadeTo(t || 0, 1, i);
    },
    hide: function hide(i, e) {
      if (this.element) {
        this.removeVideo(), this.abort();
        var t = "number" === $.type(e) ? e : this.view.options.effects.content.hide;
        this.isVideo() && (t = 0), this.element.stop(!0).fadeTo(t, 0, "frescoEaseInCubic", $.proxy(function () {
          this.element.hide(), this._visible = !1, Pages.removeTracking(this._position), i && i();
        }, this));
      } else i && i();
    },
    stop: function stop() {
      this.queues.showhide.queue([]), this.element && this.element.stop(!0), this.abort();
    },
    removeVideo: function removeVideo() {
      this.playerIframe && (this.playerIframe[0].src = "//about:blank", this.playerIframe.remove(), this.playerIframe = null);
    },
    remove: function remove() {
      this.stop(), this.removeVideo(), this.element && this.element.remove(), this._track && (Pages.removeTracking(this._position), this._track = !1), this.preloadReady && (this.preloadReady.abort(), this.preloadReady = null, this.preloading = null, this.preloaded = null), this._visible = !1, this.removed = !0;
    },
    abort: function abort() {
      this.imageReady && (this.imageReady.abort(), this.imageReady = null), this.vimeoReady && (this.vimeoReady.abort(), this.vimeoReady = null), this._abortSpinnerDelay(), this.loading = !1;
    },
    _abortSpinnerDelay: function _abortSpinnerDelay() {
      this._spinnerDelay && (clearTimeout(this._spinnerDelay), this._spinnerDelay = null);
    },
    _getInfoHeight: function _getInfoHeight(i) {
      var e = this.view.options.position && 1 < this._total;

      switch (this._ui) {
        case "fullclick":
        case "inside":
          if (!this.view.caption && !e) return 0;
          break;

        case "outside":
          if (!this.view.caption) return 0;
      }

      var t = "inside" === this._ui ? this.infoInside : this.info;
      "outside" === this._ui && (i = Math.min(i, Window._boxDimensions.width));
      var s,
          n = t[0].style.width;
      return "inside" !== this._ui && "fullclick" !== this._ui || (n = "100%"), t.css({
        width: i + "px"
      }), s = parseFloat(t.outerHeight()), t.css({
        width: n
      }), s;
    },
    _whileVisible: function _whileVisible(i, e) {
      var t = [],
          s = Window.element.add(this.element);
      e && (s = s.add(e)), $.each(s, function (i, e) {
        $(e).is(":visible") || t.push($(e).show());
      });
      var n = this.element.hasClass("fr-no-caption");
      this.element.removeClass("fr-no-caption");
      var o = this.element.hasClass("fr-has-caption");
      this.element.addClass("fr-has-caption"), Window.element.css({
        visibility: "hidden"
      }), i(), Window.element.css({
        visibility: "visible"
      }), n && this.element.addClass("fr-no-caption"), o || this.element.removeClass("fr-has-caption"), $.each(t, function (i, e) {
        e.hide();
      });
    },
    updateForced: function updateForced() {
      this.create(), this._fullClick = this.view.options.fullClick, this._noOverflow = !1, 0 < parseInt(this.element.css("min-width")) && (this._fullClick = !0), 0 < parseInt(this.element.css("min-height")) && (this._noOverflow = !0);
    },
    updateUI: function updateUI() {
      this.updateForced();
      var i = this._fullClick ? "fullclick" : this.view.options.ui;
      this._ui && this.element.removeClass("fr-ui-" + this._ui), this.element.addClass("fr-ui-" + i), this._ui = i;
    },
    fitToBox: function fitToBox() {
      if (this.content) {
        this.element;
        var t = $.extend({}, Window.getBoxDimensions()),
            i = $.extend({}, this.dimensions),
            e = this.container;
        this.updateUI();
        var s = {
          left: parseInt(e.css("padding-left")),
          top: parseInt(e.css("padding-top"))
        };

        if ("outside" === this._ui && this._positionOutside) {
          var n = 0;
          this._whileVisible($.proxy(function () {
            this._positionOutside.is(":visible") && (n = this._positionOutside.outerWidth(!0));
          }, this)), n > s.left && (s.left = n);
        }

        t.width -= 2 * s.left, t.height -= 2 * s.top;
        var o,
            a,
            h = {
          width: !0,
          height: !!this._noOverflow || !this.view.options.overflow.y
        },
            r = Fit.within(t, i, h),
            d = $.extend({}, r),
            l = (this.content, 0),
            u = "inside" === this._ui,
            c = u ? this.infoInside : this.info,
            p = u ? this.captionInside : this.caption,
            f = u ? this.posInside : this.pos,
            m = !!p;

        switch (this._ui) {
          case "outside":
            var v = $.extend({}, d);
            this.caption && (a = this.caption, this._whileVisible($.proxy(function () {
              for (var i = 0; i < 2;) {
                l = this._getInfoHeight(d.width);
                var e = t.height - d.height;
                e < l && (d = Fit.within({
                  width: d.width,
                  height: Math.max(d.height - (l - e), 0)
                }, d, h)), i++;
              }

              l = this._getInfoHeight(d.width), (!this.view.options.overflow.y && l + d.height > t.height || c && "none" === c.css("display") || l >= .5 * d.height) && (m = !1, l = 0, d = v);
            }, this), a)), c && c.css({
              width: d.width + "px"
            }), o = {
              width: d.width,
              height: d.height + l
            };
            break;

          case "inside":
            this.caption && (a = p, this._whileVisible($.proxy(function () {
              (l = this._getInfoHeight(d.width)) >= .45 * d.height && (m = !1, l = 0);
            }, this), a)), o = d;
            break;

          case "fullclick":
            var g = [];
            p && g.push(p), this._whileVisible($.proxy(function () {
              if ((p || f) && c.css({
                width: "100%"
              }), l = this._getInfoHeight(Window._boxDimensions.width), p && l > .5 * t.height) if (m = !1, f) {
                var i = this.caption.is(":visible");
                this.caption.hide(), l = this._getInfoHeight(Window._boxDimensions.width), i && this.caption.show();
              } else l = 0;
              d = Fit.within({
                width: t.width,
                height: Math.max(0, t.height - l)
              }, d, h), o = d;
            }, this), g), this.content.css({
              "padding-bottom": 0
            });
        }

        p && p[m ? "show" : "hide"](), this.element[(m ? "remove" : "add") + "Class"]("fr-no-caption"), this.element[(m ? "add" : "remove") + "Class"]("fr-has-caption"), this.content.css(d), this.background.css(o), this.playerIframe && this.playerIframe.attr(d), this.overlap = {
          y: o.height + ("fullclick" === this._ui ? l : 0) - Window._boxDimensions.height,
          x: 0
        }, this._track = !this._noOverflow && this.view.options.overflow.y && 0 < this.overlap.y, this._infoHeight = l, this._padding = s, this._contentDimensions = d, this._backgroundDimensions = o, Pages[(this._track ? "set" : "remove") + "Tracking"](this._position), this.position();
      }
    },
    position: function position() {
      if (this.content) {
        var i = this._contentDimensions,
            e = this._backgroundDimensions,
            t = {
          top: .5 * Window._boxDimensions.height - .5 * e.height,
          left: .5 * Window._boxDimensions.width - .5 * e.width
        },
            s = {
          top: t.top + i.height,
          left: t.left
        },
            n = 0,
            o = "inside" === this._ui ? this.infoInside : this.info;

        switch (this._ui) {
          case "fullclick":
            t.top = .5 * (Window._boxDimensions.height - this._infoHeight) - .5 * e.height, s = {
              top: Window._boxDimensions.height - this._infoHeight,
              left: 0,
              bottom: "auto"
            }, n = this._infoHeight;
            break;

          case "inside":
            s = {
              top: "auto",
              left: 0,
              bottom: 0
            };
        }

        if (0 < this.overlap.y) {
          var a = Pages.getXYP();

          switch (t.top = 0 - a.y * this.overlap.y, this._ui) {
            case "outside":
            case "fullclick":
              s.top = Window._boxDimensions.height - this._infoHeight;
              break;

            case "inside":
              var h = t.top + i.height - Window._boxDimensions.height,
                  r = -1 * t.top;

              if (s.bottom = h, this.closeInside.css({
                top: r
              }), 1 < this._total) {
                var d = Window.element.is(":visible");
                d || Window.element.show();
                var l = this.previousInside.attr("style");
                this.previousInside.removeAttr("style");
                var u = parseInt(this.previousInside.css("margin-top"));
                this.previousInside.attr({
                  style: l
                }), d || Window.element.hide();
                var c = this.previousInside.add(this.nextInside),
                    p = .5 * this.overlap.y;
                c.css({
                  "margin-top": u + (r - p)
                }), this.positionInside && this.positionInside.css({
                  bottom: h
                });
              }

          }
        } else "inside" === this._ui && this.element.find(".fr-info, .fr-side, .fr-close, .fr-position-inside").removeAttr("style");

        o && o.css(s), this.container.css({
          bottom: n
        }), this.content.css(t), this.background.css(t);
      }
    }
  }), Oc),
      Lc,
      Mc,
      Nc;

  function Oc() {
    return this.initialize.apply(this, _slice.call(arguments));
  }

  var Pages = {
    initialize: function initialize(i) {
      this.element = i, this.pages = [], this.uid = 1, this._tracking = [];
    },
    load: function load(i) {
      this.views = i, this.removeAll(), $.each(i, $.proxy(function (i, e) {
        this.pages.push(new Page(e, i + 1, this.views.length));
      }, this));
    },
    show: function show(i, e) {
      var t = this.pages[i - 1];
      this.page && this.page.uid === t.uid || (this.page = t, Thumbnails.show(i), Window.updateBoxDimensions(), t.show($.proxy(function () {
        e && e();
      }, this)));
    },
    getPositionInActivePageGroup: function getPositionInActivePageGroup(t) {
      var s = 0;
      return $.each(this.pages, function (i, e) {
        e.view.element && e.view.element === t && (s = i + 1);
      }), s;
    },
    getLoadingCount: function getLoadingCount() {
      var t = 0;
      return $.each(this.pages, function (i, e) {
        e.loading && t++;
      }), t;
    },
    removeAll: function removeAll() {
      $.each(this.pages, function (i, e) {
        e.remove();
      }), this.pages = [];
    },
    hideInactive: function hideInactive(t, s) {
      var n = [];
      $.each(this.pages, $.proxy(function (i, e) {
        e.uid !== this.page.uid && n.push(e);
      }, this));
      var o = 0 + n.length;
      return o < 1 ? t && t() : $.each(n, function (i, e) {
        e.hide(function () {
          t && --o < 1 && t();
        }, s);
      }), n.length;
    },
    stopInactive: function stopInactive() {
      $.each(this.pages, $.proxy(function (i, e) {
        e.uid !== this.page.uid && e.stop();
      }, this));
    },
    stop: function stop() {
      $.each(this.pages, function (i, e) {
        e.stop();
      });
    },
    handleTracking: function handleTracking(i) {
      Browser.IE && Browser.IE < 9 ? (this.setXY({
        x: i.pageX,
        y: i.pageY
      }), this.updatePositions()) : this._tracking_timer = setTimeout($.proxy(function () {
        this.setXY({
          x: i.pageX,
          y: i.pageY
        }), this.updatePositions();
      }, this), 30);
    },
    clearTrackingTimer: function clearTrackingTimer() {
      this._tracking_timer && (clearTimeout(this._tracking_timer), this._tracking_timer = null);
    },
    startTracking: function startTracking() {
      Support.mobileTouch || this._handleTracking || $(document.documentElement).on("mousemove", this._handleTracking = $.proxy(this.handleTracking, this));
    },
    stopTracking: function stopTracking() {
      !Support.mobileTouch && this._handleTracking && ($(document.documentElement).off("mousemove", this._handleTracking), this._handleTracking = null, this.clearTrackingTimer());
    },
    setTracking: function setTracking(i) {
      this.isTracking(i) || (this._tracking.push(this.pages[i - 1]), 1 === this._tracking.length && this.startTracking());
    },
    clearTracking: function clearTracking() {
      this._tracking = [];
    },
    removeTracking: function removeTracking(e) {
      this._tracking = $.grep(this._tracking, function (i) {
        return i._position !== e;
      }), this._tracking.length < 1 && this.stopTracking();
    },
    isTracking: function isTracking(t) {
      var s = !1;
      return $.each(this._tracking, function (i, e) {
        if (e._position === t) return !(s = !0);
      }), s;
    },
    setXY: function setXY(i) {
      this._xy = i;
    },
    getXYP: function getXYP() {
      var i = Pages.page,
          t = $.extend({}, Window._boxDimensions),
          e = $.extend({}, this._xy);
      e.y -= $(window).scrollTop(), i && ("outside" === i._ui || "fullclick" === i._ui) && 0 < i._infoHeight && (t.height -= i._infoHeight), e.y -= Window._boxPosition.top;
      var s = {
        x: 0,
        y: Math.min(Math.max(e.y / t.height, 0), 1)
      },
          n = {
        x: "width",
        y: "height"
      },
          o = {};
      return $.each("y".split(" "), $.proxy(function (i, e) {
        o[e] = Math.min(Math.max(20 / t[n[e]], 0), 1), s[e] *= 1 + 2 * o[e], s[e] -= o[e], s[e] = Math.min(Math.max(s[e], 0), 1);
      }, this)), this.setXYP(s), this._xyp;
    },
    setXYP: function setXYP(i) {
      this._xyp = i;
    },
    updatePositions: function updatePositions() {
      this._tracking.length < 1 || $.each(this._tracking, function (i, e) {
        e.position();
      });
    }
  };

  function View() {
    this.initialize.apply(this, _slice.call(arguments));
  }

  $.extend(View.prototype, {
    initialize: function initialize(object) {
      var options = arguments[1] || {},
          data = {};
      if ("string" === $.type(object)) object = {
        url: object
      };else if (object && 1 === object.nodeType) {
        var element = $(object);
        object = {
          element: element[0],
          url: element.attr("href"),
          caption: element.attr("data-fresco-caption"),
          group: element.attr("data-fresco-group"),
          extension: element.attr("data-fresco-extension"),
          type: element.attr("data-fresco-type"),
          options: element.attr("data-fresco-options") && eval("({" + element.attr("data-fresco-options") + "})") || {}
        };
      }
      return object && (object.extension || (object.extension = detectExtension(object.url)), object.type || (data = getURIData(object.url), object._data = data, object.type = data.type)), object._data || (object._data = getURIData(object.url)), object && object.options ? object.options = $.extend(!0, $.extend({}, options), $.extend({}, object.options)) : object.options = $.extend({}, options), object.options = Options.create(object.options, object.type, object._data), $.extend(this, object), this;
    }
  });
  var Spinner = {
    supported: Support.css.transform && Support.css.animation,
    initialize: function initialize(i) {
      this.element = $("<div>").addClass("fr-spinner").hide();

      for (var e = 1; e <= 12; e++) this.element.append($("<div>").addClass("fr-spin-" + e));

      this.element.on("click", $.proxy(function () {
        Window.hide();
      }, this)), this.element.on("fresco:mousewheel", function (i) {
        i.preventDefault();
      });
    },
    setSkin: function setSkin(i) {
      this.supported && (this._skin && this.element.removeClass("fr-spinner-skin-" + this._skin), this.updateDimensions(), this.element.addClass("fr-spinner-skin-" + i), this._skin = i);
    },
    updateDimensions: function updateDimensions() {
      var i = this._attached;
      i || this.attach(), this._dimensions = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, i || this.detach();
    },
    attach: function attach() {
      this._attached || ($(document.body).append(this.element), this._attached = !0);
    },
    detach: function detach() {
      this._attached && (this.element.detach(), this._attached = !1);
    },
    show: function show(i, e) {
      this._visible = !0, this.attach(), this.center();
      var t = Pages.page && Pages.page.view.options.effects.spinner.show || 0,
          s = ("number" === $.type(e) ? e : t) || 0;
      this.element.stop(!0).fadeTo(s, 1, i);
    },
    hide: function hide(i, e, t) {
      this._visible = !1;
      var s = Pages.page && Pages.page.view.options.effects.spinner.hide || 0,
          n = ("number" === $.type(e) ? e : s) || 0;
      this.element.stop(!0).fadeOut(n || 0, $.proxy(function () {
        this.detach(), i && i();
      }, this));
    },
    center: function center() {
      if (this.supported) {
        this._dimensions || this.updateDimensions();
        var i = Pages.page,
            e = 0;
        i && "fullclick" === i._ui && i._whileVisible(function () {
          e = i._getInfoHeight(Window._boxDimensions.width);
        }), this.element.css({
          top: Window._boxPosition.top + .5 * Window._boxDimensions.height - .5 * this._dimensions.height - .5 * e,
          left: Window._boxPosition.left + .5 * Window._boxDimensions.width - .5 * this._dimensions.width
        });
      }
    }
  },
      _Fresco = {
    _disabled: !1,
    _fallback: !0,
    initialize: function initialize() {
      Window.initialize(), this._disabled || this.startDelegating();
    },
    startDelegating: function startDelegating() {
      this._delegateHandler || $(document.documentElement).on("click", ".fresco[href]", this._delegateHandler = $.proxy(this.delegate, this)).on("click", this._setClickXYHandler = $.proxy(this.setClickXY, this));
    },
    stopDelegating: function stopDelegating() {
      this._delegateHandler && ($(document.documentElement).off("click", ".fresco[href]", this._delegateHandler).off("click", this._setClickXYHandler), this._setClickXYHandler = null, this._delegateHandler = null);
    },
    setClickXY: function setClickXY(i) {
      Pages.setXY({
        x: i.pageX,
        y: i.pageY
      });
    },
    delegate: function delegate(i) {
      if (!this._disabled) {
        i.stopPropagation(), i.preventDefault();
        var e = i.currentTarget;
        this.setClickXY(i), _Fresco.show(e);
      }
    },
    show: function show(object) {
      if (this._disabled) this.showFallback.apply(_Fresco, _slice.call(arguments));else {
        var options = arguments[1] || {},
            position = arguments[2];
        arguments[1] && "number" === $.type(arguments[1]) && (position = arguments[1], options = {});

        var views = [],
            object_type,
            isElement = _.isElement(object);

        switch (object_type = $.type(object)) {
          case "string":
          case "object":
            var view = new View(object, options),
                _dgo = "data-fresco-group-options",
                groupOptions = {};

            if (view.group) {
              if (isElement) {
                var elements = $('.fresco[data-fresco-group="' + $(object).attr("data-fresco-group") + '"]');
                elements.filter("[" + _dgo + "]").each(function (i, element) {
                  $.extend(groupOptions, eval("({" + ($(element).attr(_dgo) || "") + "})"));
                }), elements.each(function (i, e) {
                  position || e !== object || (position = i + 1), views.push(new View(e, $.extend({}, groupOptions, options)));
                });
              }
            } else isElement && $(object).is("[" + _dgo + "]") && ($.extend(groupOptions, eval("({" + ($(object).attr(_dgo) || "") + "})")), view = new View(object, $.extend({}, groupOptions, options))), views.push(view);

            break;

          case "array":
            $.each(object, function (i, e) {
              var t = new View(e, options);
              views.push(t);
            });
        }

        var groupExtend = {
          grouped: {
            caption: !1
          }
        },
            firstUI = views[0].options.ui,
            positionInAPG;
        $.each(views, function (i, e) {
          e.caption && (groupExtend.grouped.caption = !0), 0 < i && e.options.ui !== firstUI && (e.options.ui = firstUI);
        }), $.each(views, function (i, e) {
          e = $.extend(e, groupExtend);
        }), (!position || position < 1) && (position = 1), position > views.length && (position = views.length), isElement && (positionInAPG = Pages.getPositionInActivePageGroup(object)) ? Window.setPosition(positionInAPG) : Window.load(views, position);
      }
    },
    showFallback: function showFallback(i) {
      if (this._fallback) {
        var e = function i(e) {
          var t = $.type(e);
          return "string" === t ? e : "array" === t && e[0] ? i(e[0]) : _.isElement(e) && $(e).attr("href") ? $(e).attr("href") : !!e.url && e.url;
        }(i);

        e && (window.location.href = e);
      }
    }
  };
  $.extend(Fresco, {
    show: function show(i) {
      return _Fresco.show.apply(_Fresco, _slice.call(arguments)), this;
    },
    hide: function hide() {
      return Window.hide(), this;
    },
    disable: function disable() {
      return _Fresco.stopDelegating(), _Fresco._disabled = !0, this;
    },
    enable: function enable() {
      return _Fresco._disabled = !1, _Fresco.startDelegating(), this;
    },
    fallback: function fallback(i) {
      return _Fresco._fallback = i, this;
    },
    setDefaultSkin: function setDefaultSkin(i) {
      return Options.defaults.skin = i, this;
    }
  }), (Browser.IE && Browser.IE < 7 || "number" === $.type(Browser.Android) && Browser.Android < 3 || Browser.MobileSafari && "number" === $.type(Browser.WebKit) && Browser.WebKit < 533.18) && (_Fresco.show = _Fresco.showFallback);
  var Thumbnails = {
    initialize: function initialize(i) {
      this.element = i, this._thumbnails = [], this._orientation = "vertical", this._vars = {
        thumbnail: {},
        thumbnailFrame: {},
        thumbnails: {}
      }, this.build(), this.startObserving();
    },
    build: function build() {
      this.element.append(this.wrapper = $("<div>").addClass("fr-thumbnails-wrapper").append(this._slider = $("<div>").addClass("fr-thumbnails-slider").append(this._previous = $("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-previous").append(this._previous_button = $("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon")))).append(this._thumbs = $("<div>").addClass("fr-thumbnails-thumbs").append(this._slide = $("<div>").addClass("fr-thumbnails-slide"))).append(this._next = $("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-next").append(this._next_button = $("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon"))))));
    },
    startObserving: function startObserving() {
      this._slider.delegate(".fr-thumbnail", "click", $.proxy(function (i) {
        i.stopPropagation();
        var e = $(i.target).closest(".fr-thumbnail")[0],
            t = e && $(e).data("fr-position");
        t && (this.setActive(t), Window.setPosition(t));
      }, this)), this._slider.bind("click", function (i) {
        i.stopPropagation();
      }), this._previous.bind("click", $.proxy(this.previousPage, this)), this._next.bind("click", $.proxy(this.nextPage, this));
    },
    load: function load(i) {
      this.clear();
      var t = "horizontal",
          s = !1;
      $.each(i, $.proxy(function (i, e) {
        "vertical" === e.options.thumbnails && (t = "vertical"), e.options.thumbnails || (s = !0);
      }, this)), this.setOrientation(t), this._disabledGroup = s, $.each(i, $.proxy(function (i, e) {
        this._thumbnails.push(new Thumbnail(e, i + 1));
      }, this)), this.fitToViewport();
    },
    clear: function clear() {
      $.each(this._thumbnails, function (i, e) {
        e.remove();
      }), this._thumbnails = [], this._position = -1, this._page = -1;
    },
    setOrientation: function setOrientation(i) {
      this._orientation && Window.element.removeClass("fr-thumbnails-" + this._orientation), Window.element.addClass("fr-thumbnails-" + i), this._orientation = i;
    },
    disable: function disable() {
      Window.element.removeClass("fr-thumbnails-enabled").addClass("fr-thumbnails-disabled"), this._disabled = !0;
    },
    enable: function enable() {
      Window.element.removeClass("fr-thumbnails-disabled").addClass("fr-thumbnails-enabled"), this._disabled = !1;
    },
    enabled: function enabled() {
      return !this._disabled;
    },
    disabled: function disabled() {
      return this._disabled;
    },
    updateVars: function updateVars() {
      var i = Window.element,
          e = this._vars,
          t = "horizontal" === this._orientation,
          s = t ? "top" : "left",
          n = t ? "left" : "top",
          o = t ? "bottom" : "left",
          a = t ? "top" : "right",
          h = t ? "width" : "height",
          r = t ? "height" : "width",
          d = {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top"
      };
      this.element.removeClass("fr-thumbnails-measured");
      var l = i.is(":visible");
      if (l || i.show(), this.disabled() && this.enable(), !this.element.is(":visible") || this._thumbnails.length < 2 || this._disabledGroup) return this.disable(), $.extend(this._vars.thumbnails, {
        width: 0,
        height: 0
      }), l || i.hide(), void this.element.addClass("fr-thumbnails-measured");
      this.enable();

      var u = this._previous,
          c = this._next,
          p = Bounds.viewport(),
          f = this.element["inner" + _.String.capitalize(r)](),
          m = parseInt(this._thumbs.css("padding-" + s)) || 0,
          v = Math.max(f - 2 * m, 0),
          g = parseInt(this._thumbs.css("padding-" + n)) || 0,
          w = (parseInt(this.element.css("margin-" + o)) || 0) + (parseInt(this.element.css("margin-" + a)) || 0);

      $.extend(e.thumbnails, {
        height: f + w,
        width: p[t ? "width" : "height"],
        paddingTop: m
      }), $.extend(e.thumbnail, {
        height: v,
        width: v
      }), $.extend(e.thumbnailFrame, {
        width: v + 2 * g,
        height: f
      }), e.sides = {
        previous: {
          width: c["inner" + _.String.capitalize(h)](),
          marginLeft: parseInt(u.css("margin-" + n)) || 0,
          marginRight: parseInt(u.css("margin-" + d[n])) || 0
        },
        next: {
          width: c["inner" + _.String.capitalize(h)](),
          marginLeft: parseInt(c.css("margin-" + n)) || 0,
          marginRight: parseInt(c.css("margin-" + d[n])) || 0
        }
      };
      var b = p[h],
          y = e.thumbnailFrame.width,
          x = this._thumbnails.length;
      e.thumbnails.width = b, e.sides.enabled = 1 < x * y / b;
      var k = b,
          C = e.sides,
          S = C.previous,
          W = C.next,
          M = S.marginLeft + S.width + S.marginRight + W.marginLeft + W.width + W.marginRight;
      e.sides.enabled && (k -= M);
      var T = x * y;
      T < (k = Math.floor(k / y) * y) && (k = T);
      var I = k + (e.sides.enabled ? M : 0);
      e.ipp = Math.round(k / y), this._mode = "page", e.ipp <= 1 && (I = k = b, e.sides.enabled = !1, this._mode = "center"), e.pages = Math.ceil(x * y / k), e.wrapper = {
        width: I + 1,
        height: f
      }, e.thumbs = {
        width: k,
        height: f
      }, e.slide = {
        width: x * y + 1,
        height: f
      }, l || i.hide(), this.element.addClass("fr-thumbnails-measured");
    },
    hide: function hide() {
      this.disable(), this.thumbnails.hide(), this._visible = !1;
    },
    getDimensions: function getDimensions() {
      var i = "horizontal" === this._orientation;
      return {
        width: i ? this._vars.thumbnails.width : this._vars.thumbnails.height,
        height: i ? this._vars.thumbnails.height : this._vars.thumbnails.width
      };
    },
    fitToViewport: function fitToViewport() {
      if (this.updateVars(), !this.disabled()) {
        var i = $.extend({}, this._vars),
            e = "horizontal" === this._orientation;
        $.each(this._thumbnails, function (i, e) {
          e.resize();
        }), this._previous[i.sides.enabled ? "show" : "hide"](), this._next[i.sides.enabled ? "show" : "hide"](), this._thumbs.css({
          width: i.thumbs[e ? "width" : "height"],
          height: i.thumbs[e ? "height" : "width"]
        }), this._slide.css({
          width: i.slide[e ? "width" : "height"],
          height: i.slide[e ? "height" : "width"]
        });
        var t = {
          width: i.wrapper[e ? "width" : "height"],
          height: i.wrapper[e ? "height" : "width"]
        };
        t["margin-" + (e ? "left" : "top")] = Math.round(-.5 * i.wrapper.width) + "px", t["margin-" + (e ? "top" : "left")] = 0, this.wrapper.css(t), this._position && this.moveTo(this._position, !0);
      }
    },
    moveToPage: function moveToPage(i) {
      if (!(i < 1 || i > this._vars.pages || i === this._page)) {
        var e = this._vars.ipp * (i - 1) + 1;
        this.moveTo(e);
      }
    },
    previousPage: function previousPage() {
      this.moveToPage(this._page - 1);
    },
    nextPage: function nextPage() {
      this.moveToPage(this._page + 1);
    },
    show: function show(i) {
      var e = this._position < 0;
      i < 1 && (i = 1);
      var t = this._thumbnails.length;
      t < i && (i = t), this._position = i, this.setActive(i), "page" === this._mode && this._page === Math.ceil(i / this._vars.ipp) || this.moveTo(i, e);
    },
    moveTo: function moveTo(i, e) {
      if (this.updateVars(), !this.disabled()) {
        var t,
            s,
            n = "horizontal" === this._orientation,
            o = .5 * Bounds.viewport()[n ? "width" : "height"],
            a = this._vars.thumbnailFrame.width;

        if ("page" === this._mode) {
          s = Math.ceil(i / this._vars.ipp), this._page = s, t = a * (this._page - 1) * this._vars.ipp * -1;
          var h = "fr-thumbnails-side-button-disabled";
          this._previous_button[(s < 2 ? "add" : "remove") + "Class"](h), this._next_button[(s >= this._vars.pages ? "add" : "remove") + "Class"](h);
        } else t = o + -1 * (a * (i - 1) + .5 * a);

        s = Pages.page;
        var r = {},
            d = {};
        r[n ? "top" : "left"] = 0, d[n ? "left" : "top"] = t + "px", this._slide.stop(!0).css(r).animate(d, e ? 0 : s && s.view.options.effects.thumbnails.slide || 0, $.proxy(function () {
          this.loadCurrentPage();
        }, this));
      }
    },
    loadCurrentPage: function loadCurrentPage() {
      var i, e;

      if (this._position && this._vars.thumbnailFrame.width && !(this._thumbnails.length < 1)) {
        if ("page" === this._mode) {
          if (this._page < 1) return;
          i = (this._page - 1) * this._vars.ipp + 1, e = Math.min(i - 1 + this._vars.ipp, this._thumbnails.length);
        } else {
          var t = Math.ceil(this._vars.thumbnails.width / this._vars.thumbnailFrame.width);
          i = Math.max(Math.floor(Math.max(this._position - .5 * t, 0)), 1), e = Math.ceil(Math.min(this._position + .5 * t)), this._thumbnails.length < e && (e = this._thumbnails.length);
        }

        for (var s = i; s <= e; s++) this._thumbnails[s - 1].load();
      }
    },
    setActive: function setActive(i) {
      this._slide.find(".fr-thumbnail-active").removeClass("fr-thumbnail-active");

      var e = i && this._thumbnails[i - 1];
      e && e.activate();
    },
    refresh: function refresh() {
      this._position && this.setPosition(this._position);
    }
  };

  function Thumbnail() {
    this.initialize.apply(this, _slice.call(arguments));
  }

  $.extend(Thumbnail.prototype, {
    initialize: function initialize(i, e) {
      this.view = i, this._position = e, this.preBuild();
    },
    preBuild: function preBuild() {
      this.thumbnail = $("<div>").addClass("fr-thumbnail").data("fr-position", this._position);
    },
    build: function build() {
      if (!this.thumbnailFrame) {
        var i = this.view.options;
        Thumbnails._slide.append(this.thumbnailFrame = $("<div>").addClass("fr-thumbnail-frame").append(this.thumbnail.append(this.thumbnailWrapper = $("<div>").addClass("fr-thumbnail-wrapper")))), "image" === this.view.type && this.thumbnail.addClass("fr-load-thumbnail").data("thumbnail", {
          view: this.view,
          src: i.thumbnail || this.view.url
        });
        var e = i.thumbnail && i.thumbnail.icon;
        e && this.thumbnail.append($("<div>").addClass("fr-thumbnail-icon fr-thumbnail-icon-" + e)), this.thumbnail.append($("<div>").addClass("fr-thumbnail-overlay").append($("<div>").addClass("fr-thumbnail-overlay-background")).append(this.loading = $("<div>").addClass("fr-thumbnail-loading").append($("<div>").addClass("fr-thumbnail-loading-background")).append(this.spinner = $("<div>").addClass("fr-thumbnail-spinner").hide().append($("<div>").addClass("fr-thumbnail-spinner-spin")))).append($("<div>").addClass("fr-thumbnail-overlay-border"))), this.thumbnail.append($("<div>").addClass("fr-thumbnail-state")), this.resize();
      }
    },
    remove: function remove() {
      this.thumbnailFrame && (this.thumbnailFrame.remove(), this.thumbnailFrame = null, this.image = null), this.ready && (this.ready.abort(), this.ready = null), this.vimeoThumbnail && (this.vimeoThumbnail.abort(), this.vimeoThumbnail = null), this._loading = !1, this._removed = !0, this.view = null, this._clearDelay();
    },
    load: function load() {
      if (!(this._loaded || this._loading || this._removed)) {
        this.thumbnailWrapper || this.build(), this._loading = !0;
        var i = this.view.options.thumbnail,
            e = i && "boolean" === $.type(i) ? this.view.url : i || this.view.url;
        if (this._url = e) if ("vimeo" === this.view.type) {
          if (e === i) this._url = e, this._load(this._url);else switch (this.view.type) {
            case "vimeo":
              this.vimeoThumbnail = new VimeoThumbnail(this.view.url, $.proxy(function (i) {
                this._url = i, this._load(i);
              }, this), $.proxy(function () {
                this._error();
              }, this));
          }
        } else this._load(this._url);
      }
    },
    activate: function activate() {
      this.thumbnail.addClass("fr-thumbnail-active");
    },
    _load: function _load(i) {
      this.thumbnailWrapper.prepend(this.image = $("<img>").addClass("fr-thumbnail-image").attr({
        src: i
      }).css({
        opacity: 1e-4
      })), this.fadeInSpinner(), this.ready = new ImageReady(this.image[0], $.proxy(function (i) {
        var e = i.img;
        this.thumbnailFrame && this._loading && (this._loaded = !0, this._loading = !1, this._dimensions = {
          width: e.naturalWidth,
          height: e.naturalHeight
        }, this.resize(), this.show());
      }, this), $.proxy(function () {
        this._error();
      }, this), {
        method: this.view.options.loadedMethod
      });
    },
    _error: function _error() {
      this._loaded = !0, this._loading = !1, this.thumbnail.addClass("fr-thumbnail-error"), this.image && this.image.hide(), this.thumbnailWrapper.append($("<div>").addClass("fr-thumbnail-image")), this.show();
    },
    fadeInSpinner: function fadeInSpinner() {
      if (Spinner.supported && this.view.options.spinner) {
        this._clearDelay();

        var i = this.view.options.effects.thumbnail;
        this._delay = setTimeout($.proxy(function () {
          this.spinner.stop(!0).fadeTo(i.show || 0, 1);
        }, this), this.view.options.spinnerDelay || 0);
      }
    },
    show: function show() {
      this._clearDelay();

      var i = this.view.options.effects.thumbnail;
      this.loading.stop(!0).delay(i.delay).fadeTo(i.show, 0);
    },
    _clearDelay: function _clearDelay() {
      this._delay && (clearTimeout(this._delay), this._delay = null);
    },
    resize: function resize() {
      if (this.thumbnailFrame) {
        var i = "horizontal" === Thumbnails._orientation;

        if (this.thumbnailFrame.css({
          width: Thumbnails._vars.thumbnailFrame[i ? "width" : "height"],
          height: Thumbnails._vars.thumbnailFrame[i ? "height" : "width"]
        }), this.thumbnailFrame.css({
          top: i ? 0 : Thumbnails._vars.thumbnailFrame.width * (this._position - 1),
          left: i ? Thumbnails._vars.thumbnailFrame.width * (this._position - 1) : 0
        }), this.thumbnailWrapper) {
          var e = Thumbnails._vars.thumbnail;

          if (this.thumbnail.css({
            width: e.width,
            height: e.height,
            "margin-top": Math.round(-.5 * e.height),
            "margin-left": Math.round(-.5 * e.width),
            "margin-bottom": 0,
            "margin-right": 0
          }), this._dimensions) {
            var t,
                s = {
              width: e.width,
              height: e.height
            },
                n = Math.max(s.width, s.height),
                o = $.extend({}, this._dimensions);

            if (o.width > s.width && o.height > s.height) {
              var a = 1,
                  h = 1;
              (t = Fit.within(s, o)).width < s.width && (a = s.width / t.width), t.height < s.height && (h = s.height / t.height);
              var r = Math.max(a, h);
              1 < r && (t.width *= r, t.height *= r), $.each("width height".split(" "), function (i, e) {
                t[e] = Math.round(t[e]);
              });
            } else t = Fit.within(this._dimensions, o.width < s.width || o.height < s.height ? {
              width: n,
              height: n
            } : s);

            var d = Math.round(.5 * s.width - .5 * t.width),
                l = Math.round(.5 * s.height - .5 * t.height);
            this.image.removeAttr("style").css($.extend({}, t, {
              top: l,
              left: d
            }));
          }
        }
      }
    }
  });
  var UI = {
    _modes: ["fullclick", "outside", "inside"],
    _ui: !1,
    _validClickTargetSelector: [".fr-content-element", ".fr-content", ".fr-content > .fr-stroke", ".fr-content > .fr-stroke .fr-stroke-color"].join(", "),
    initialize: function initialize(i) {
      $.each(this._modes, $.proxy(function (i, e) {
        this[e].initialize();
      }, this)), Window.element.addClass("fr-ui-inside-hidden fr-ui-fullclick-hidden");
    },
    set: function set(i) {
      this._ui && (Window.element.removeClass("fr-window-ui-" + this._ui), Overlay.element.removeClass("fr-overlay-ui-" + this._ui)), Window.element.addClass("fr-window-ui-" + i), Overlay.element.addClass("fr-overlay-ui-" + i), this._enabled && this._ui && this._ui !== i && (this[this._ui].disable(), this[i].enable(), UI[i].show()), this._ui = i;
    },
    _onWindowResize: function _onWindowResize() {
      Support.mobileTouch && this.show();
    },
    enable: function enable() {
      $.each(this._modes, $.proxy(function (i, e) {
        UI[e][e === this._ui ? "enable" : "disable"]();
      }, this)), this._enabled = !0;
    },
    disable: function disable() {
      $.each(this._modes, $.proxy(function (i, e) {
        UI[e].disable();
      }, this)), this._enabled = !1;
    },
    adjustPrevNext: function adjustPrevNext(i, e) {
      UI[this._ui].adjustPrevNext(i, e);
    },
    show: function show(i, e) {
      UI[this._ui].show(i, e);
    },
    hide: function hide(i, e) {
      UI[this._ui].hide(i, e);
    },
    reset: function reset() {
      $.each(this._modes, $.proxy(function (i, e) {
        UI[e].reset();
      }, this));
    },
    update: function update() {
      var i = Pages.page;
      i && this.set(i._ui);
    }
  };
  return UI.fullclick = {
    initialize: function initialize() {
      this.build(), this._scrollLeft = -1;
    },
    build: function build() {
      Window._box.append(this._previous = $("<div>").addClass("fr-side fr-side-previous fr-side-previous-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next = $("<div>").addClass("fr-side fr-side-next fr-side-next-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close = $("<div>").addClass("fr-close fr-close-fullclick").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).hide(), this._close.on("click", $.proxy(function (i) {
        i.preventDefault(), Window.hide();
      }, this)), this._previous.on("click", $.proxy(function (i) {
        Window.previous(), this._onMouseMove(i);
      }, this)), this._next.on("click", $.proxy(function (i) {
        Window.next(), this._onMouseMove(i);
      }, this));
    },
    enable: function enable() {
      this.bind();
    },
    disable: function disable() {
      this.unbind();
    },
    reset: function reset() {
      Window.timers.clear("ui-fullclick"), this._x = -1, this._y = -1, this._scrollLeft = -1, this.resetPrevNext(), this._onMouseLeave();
    },
    resetPrevNext: function resetPrevNext() {
      this._previous.add(this._next).stop(!0).removeAttr("style");
    },
    bind: function bind() {
      this._onMouseUpHandler || (this.unbind(), Window._pages.on("mouseup", ".fr-container", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), Support.mobileTouch || (Window.element.on("mouseenter", this._showHandler = $.proxy(this.show, this)).on("mouseleave", this._hideHandler = $.proxy(this.hide, this)), Window.element.on("mousemove", this._mousemoveHandler = $.proxy(function (i) {
        var e = i.pageX,
            t = i.pageY;
        this._hoveringSideButton || t === this._y && e === this._x || (this._x = e, this._y = t, this.show(), this.startTimer());
      }, this)), Window._pages.on("mousemove", ".fr-container", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-container", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-container", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))));
    },
    unbind: function unbind() {
      this._onMouseUpHandler && (Window._pages.off("mouseup", ".fr-container", this._onMouseUpHandler), this._onMouseUpHandler = null, this._showHandler && (Window.element.off("mouseenter", this._showHandler).off("mouseleave", this._hideHandler).off("mousemove", this._mousemoveHandler), Window._pages.off("mousemove", ".fr-container", this._onMouseMoveHandler).off("mouseleave", ".fr-container", this._onMouseLeaveHandler).off("mouseenter", ".fr-container", this._onMouseEnterHandler), Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._showHandler = null));
    },
    adjustPrevNext: function adjustPrevNext(i, e) {
      var t = Pages.page;

      if (t) {
        var s = Window.element.is(":visible");
        s || Window.element.show();

        var n = this._previous.attr("style");

        this._previous.removeAttr("style");

        var o = parseInt(this._previous.css("margin-top"));
        this._previous.attr({
          style: n
        }), s || Window.element.hide();

        var a = t._infoHeight || 0,
            h = this._previous.add(this._next),
            r = {
          "margin-top": o - .5 * a
        },
            d = "number" === $.type(e) ? e : Pages.page && Pages.page.view.options.effects.content.show || 0;

        this.opening && (d = 0), h.stop(!0).animate(r, d, i), this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"]("fr-side-disabled"), this._next[(Window.mayNext() ? "remove" : "add") + "Class"]("fr-side-disabled"), h[(t._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"), i && i();
      } else i && i();
    },
    _onScroll: function _onScroll() {
      this._scrollLeft = $(window).scrollLeft();
    },
    _onMouseMove: function _onMouseMove(i) {
      if (!Support.mobileTouch) {
        var e = this._getEventSide(i),
            t = _.String.capitalize(e),
            s = !!e && Window["may" + t]();

        if (e !== this._hoveringSide || s !== this._mayClickHoveringSide) switch (this._hoveringSide = e, this._mayClickHoveringSide = s, Window._box[(s ? "add" : "remove") + "Class"]("fr-hovering-clickable"), e) {
          case "previous":
            Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");

            break;

          case "next":
            Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous");

        }
      }
    },
    _onMouseLeave: function _onMouseLeave(i) {
      Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), this._hoveringSide = !1;
    },
    _onMouseUp: function _onMouseUp(i) {
      if (!(1 < i.which)) if (1 !== Pages.pages.length) {
        var e = this._getEventSide(i);

        Window[e](), this._onMouseMove(i);
      } else Window.hide();
    },
    _onMouseEnter: function _onMouseEnter(i) {
      this._onMouseMove(i);
    },
    _getEventSide: function _getEventSide(i) {
      -1 < this._scrollLeft ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft();
      return i.pageX - Window._boxPosition.left - this._scrollLeft < .5 * Window._boxDimensions.width ? "previous" : "next";
    },
    _onSideMouseEnter: function _onSideMouseEnter(i) {
      this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(i), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)](), this.clearTimer();
    },
    _onSideMouseLeave: function _onSideMouseLeave(i) {
      this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1, this.startTimer();
    },
    show: function show(i) {
      if (this._visible) return this.startTimer(), void ("function" === $.type(i) && i());
      this._visible = !0, this.startTimer(), Window.element.addClass("fr-visible-fullclick-ui").removeClass("fr-hidden-fullclick-ui"), Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).show(), "function" === $.type(i) && i();
    },
    hide: function hide(i) {
      var e = Pages.page && Pages.page.view.type;
      this._visible && (!e || "youtube" !== e && "vimeo" !== e) && (this._visible = !1, Window.element.removeClass("fr-visible-fullclick-ui").addClass("fr-hidden-fullclick-ui")), "function" === $.type(i) && i();
    },
    clearTimer: function clearTimer() {
      Support.mobileTouch || Window.timers.clear("ui-fullclick");
    },
    startTimer: function startTimer() {
      Support.mobileTouch || (this.clearTimer(), Window.timers.set("ui-fullclick", $.proxy(function () {
        this.hide();
      }, this), Window.view ? Window.view.options.uiDelay : 0));
    }
  }, UI.inside = {
    initialize: function initialize() {},
    enable: function enable() {
      this.bind();
    },
    disable: function disable() {
      this.unbind();
    },
    bind: function bind() {
      this._onMouseUpHandler || (this.unbind(), Window._pages.on("mouseup", ".fr-content", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), Window._pages.on("click", ".fr-content .fr-close", $.proxy(function (i) {
        i.preventDefault(), Window.hide();
      }, this)).on("click", ".fr-content .fr-side-previous", $.proxy(function (i) {
        Window.previous(), this._onMouseMove(i);
      }, this)).on("click", ".fr-content .fr-side-next", $.proxy(function (i) {
        Window.next(), this._onMouseMove(i);
      }, this)), Window.element.on("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler = $.proxy(this._delegateOverlayClose, this)), Support.mobileTouch || (Window.element.on("mouseenter", ".fr-content", this._showHandler = $.proxy(this.show, this)).on("mouseleave", ".fr-content", this._hideHandler = $.proxy(this.hide, this)), Window.element.on("mousemove", ".fr-content", this._mousemoveHandler = $.proxy(function (i) {
        var e = i.pageX,
            t = i.pageY;
        this._hoveringSideButton || t === this._y && e === this._x || (this._x = e, this._y = t, this.show(), this.startTimer());
      }, this)), Window._pages.on("mousemove", ".fr-info, .fr-close", $.proxy(function (i) {
        i.stopPropagation(), this._onMouseLeave(i);
      }, this)), Window._pages.on("mousemove", ".fr-info", $.proxy(function () {
        this.clearTimer();
      }, this)), Window._pages.on("mousemove", ".fr-content", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-content", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-content", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))));
    },
    unbind: function unbind() {
      this._onMouseUpHandler && (Window._pages.off("mouseup", ".fr-content", this._onMouseUpHandler), this._onMouseUpHandler = null, Window._pages.off("click", ".fr-content .fr-close").off("click", ".fr-content .fr-side-previous").off("click", ".fr-content .fr-side-next"), Window.element.off("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler), this._showHandler && (Window.element.off("mouseenter", ".fr-content", this._showHandler).off("mouseleave", ".fr-content", this._hideHandler).off("mousemove", ".fr-content", this._mousemoveHandler), Window._pages.off("mousemove", ".fr-info, .fr-close"), Window._pages.off("mousemove", ".fr-info"), Window._pages.off("mousemove", ".fr-content-element", this._onMouseMoveHandler).off("mouseleave", ".fr-content", this._onMouseLeaveHandler).off("mouseenter", ".fr-content", this._onMouseEnterHandler), Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._showHandler = null));
    },
    reset: function reset() {
      Window.timers.clear("ui-fullclick"), this._x = -1, this._y = -1, this._scrollLeft = -1, this._hoveringSide = !1, this._onMouseLeave();
    },
    adjustPrevNext: function adjustPrevNext(i) {
      i && i();
    },
    _onScroll: function _onScroll() {
      this._scrollLeft = $(window).scrollLeft();
    },
    _delegateOverlayClose: function _delegateOverlayClose(i) {
      var e = Pages.page;
      e && e.view.options.overlay && !e.view.options.overlay.close || $(i.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper") && (i.preventDefault(), i.stopPropagation(), Window.hide());
    },
    _onMouseMove: function _onMouseMove(i) {
      if (!Support.mobileTouch) {
        var e = this._getEventSide(i),
            t = _.String.capitalize(e),
            s = !!e && Window["may" + t]();

        if ((1 === Pages.pages.length || Pages.page && "close" === Pages.page.view.options.onClick) && (e = !1), e !== this._hoveringSide || s !== this._mayClickHoveringSide) if (this._hoveringSide = e, this._mayClickHoveringSide = s, e) switch (Window._box[(s ? "add" : "remove") + "Class"]("fr-hovering-clickable"), e) {
          case "previous":
            Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");

            break;

          case "next":
            Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous");

        } else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next");
      }
    },
    _onMouseLeave: function _onMouseLeave(i) {
      Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), this._hoveringSide = !1;
    },
    _onMouseUp: function _onMouseUp(i) {
      if (!(1 < i.which) && $(i.target).is(UI._validClickTargetSelector)) if (1 === Pages.pages.length || Pages.page && "close" === Pages.page.view.options.onClick) Window.hide();else {
        var e = this._getEventSide(i);

        Window[e](), this._onMouseMove(i);
      }
    },
    _onMouseEnter: function _onMouseEnter(i) {
      this._onMouseMove(i);
    },
    _getEventSide: function _getEventSide(i) {
      -1 < this._scrollLeft ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft();
      return i.pageX - Window._boxPosition.left - this._scrollLeft < .5 * Window._boxDimensions.width ? "previous" : "next";
    },
    _onSideMouseEnter: function _onSideMouseEnter(i) {
      this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(i), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)](), this.clearTimer();
    },
    _onSideMouseLeave: function _onSideMouseLeave(i) {
      this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1, this.startTimer();
    },
    show: function show(i) {
      if (this._visible) return this.startTimer(), void ("function" === $.type(i) && i());
      this._visible = !0, this.startTimer(), Window.element.addClass("fr-visible-inside-ui").removeClass("fr-hidden-inside-ui"), "function" === $.type(i) && i();
    },
    hide: function hide(i) {
      this._visible && (this._visible = !1, Window.element.removeClass("fr-visible-inside-ui").addClass("fr-hidden-inside-ui")), "function" === $.type(i) && i();
    },
    clearTimer: function clearTimer() {
      Support.mobileTouch || Window.timers.clear("ui-inside");
    },
    startTimer: function startTimer() {
      Support.mobileTouch || (this.clearTimer(), Window.timers.set("ui-inside", $.proxy(function () {
        this.hide();
      }, this), Window.view ? Window.view.options.uiDelay : 0));
    }
  }, UI.outside = {
    initialize: function initialize() {
      this.build(), this._scrollLeft = -1;
    },
    build: function build() {
      Window._box.append(this._previous = $("<div>").addClass("fr-side fr-side-previous fr-side-previous-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next = $("<div>").addClass("fr-side fr-side-next fr-side-next-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close = $("<div>").addClass("fr-close fr-close-outside").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).hide(), this._close.on("click", $.proxy(function (i) {
        i.preventDefault(), Window.hide();
      }, this)), this._previous.on("click", $.proxy(function (i) {
        Window.previous(), this._onMouseMove(i);
      }, this)), this._next.on("click", $.proxy(function (i) {
        Window.next(), this._onMouseMove(i);
      }, this));
    },
    enable: function enable() {
      this.bind();
    },
    disable: function disable() {
      this.unbind();
    },
    reset: function reset() {
      Window.timers.clear("ui-outside"), this._x = -1, this._y = -1, this._scrollLeft = -1, this._onMouseLeave();
    },
    bind: function bind() {
      this._onMouseUpHandler || (this.unbind(), Window.element.on("mouseup", ".fr-content", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), Window.element.on("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler = $.proxy(this._delegateOverlayClose, this)), Support.mobileTouch || (Window._pages.on("mousemove", ".fr-content", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-content", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-content", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))));
    },
    unbind: function unbind() {
      this._onMouseUpHandler && (Window.element.off("mouseup", ".fr-content", this._onMouseUpHandler), this._onMouseUpHandler = null, Window.element.off("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler), this._onMouseMoveHandler && (Window._pages.off("mousemove", ".fr-content", this._onMouseMoveHandler).off("mouseleave", ".fr-content", this._onMouseLeaveHandler).off("mouseenter", ".fr-content", this._onMouseEnterHandler), Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._onMouseMoveHandler = null));
    },
    adjustPrevNext: function adjustPrevNext(i, e) {
      var t = Pages.page;

      if (t) {
        var s = this._previous.add(this._next);

        this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"]("fr-side-disabled"), this._next[(Window.mayNext() ? "remove" : "add") + "Class"]("fr-side-disabled"), s[(t._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"), i && i();
      } else i && i();
    },
    _onScroll: function _onScroll() {
      this._scrollLeft = $(window).scrollLeft();
    },
    _delegateOverlayClose: function _delegateOverlayClose(i) {
      var e = Pages.page;
      e && e.view.options.overlay && !e.view.options.overlay.close || $(i.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper") && (i.preventDefault(), i.stopPropagation(), Window.hide());
    },
    _onMouseMove: function _onMouseMove(i) {
      if (!Support.mobileTouch) {
        var e = this._getEventSide(i),
            t = _.String.capitalize(e),
            s = !!e && Window["may" + t]();

        if ((1 === Pages.pages.length || Pages.page && "close" === Pages.page.view.options.onClick) && (e = !1), e !== this._hoveringSide || s !== this._mayClickHoveringSide) if (this._hoveringSide = e, this._mayClickHoveringSide = s, e) switch (Window._box[(s ? "add" : "remove") + "Class"]("fr-hovering-clickable"), e) {
          case "previous":
            Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");

            break;

          case "next":
            Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous");

        } else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next");
      }
    },
    _onMouseLeave: function _onMouseLeave(i) {
      Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), this._hoveringSide = !1;
    },
    _onMouseUp: function _onMouseUp(i) {
      if (!(1 < i.which) && $(i.target).is(UI._validClickTargetSelector)) if (1 === Pages.pages.length || Pages.page && "close" === Pages.page.view.options.onClick) Window.hide();else {
        var e = this._getEventSide(i);

        Window[e](), this._onMouseMove(i);
      }
    },
    _onMouseEnter: function _onMouseEnter(i) {
      this._onMouseMove(i);
    },
    _getEventSide: function _getEventSide(i) {
      -1 < this._scrollLeft ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft();
      return i.pageX - Window._boxPosition.left - this._scrollLeft < .5 * Window._boxDimensions.width ? "previous" : "next";
    },
    show: function show() {
      Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).show();
    },
    hide: function hide() {},
    _onSideMouseEnter: function _onSideMouseEnter(i) {
      this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(i), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)]();
    },
    _onSideMouseLeave: function _onSideMouseLeave(i) {
      this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1;
    },
    clearTimer: function clearTimer() {}
  }, $(document).ready(function (i) {
    _Fresco.initialize();
  }), Fresco;
});

/***/ }),

/***/ "./themes/NoblessTheme/assets/functions.js":
/*!*************************************************!*\
  !*** ./themes/NoblessTheme/assets/functions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeContent = exports.init = undefined;

__webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");

var _fresco = __webpack_require__(/*! ./fresco/js/fresco.min */ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js");

var _fresco2 = _interopRequireDefault(_fresco);

var _carousel = __webpack_require__(/*! ./js/carousel.js */ "./themes/NoblessTheme/assets/js/carousel.js");

var _checkoutNobless = __webpack_require__(/*! ./js/checkout-nobless.js */ "./themes/NoblessTheme/assets/js/checkout-nobless.js");

var _checkoutNobless2 = _interopRequireDefault(_checkoutNobless);

var _productNobless = __webpack_require__(/*! ./js/product-nobless */ "./themes/NoblessTheme/assets/js/product-nobless.js");

var _cartNobless = __webpack_require__(/*! ./js/cart-nobless.js */ "./themes/NoblessTheme/assets/js/cart-nobless.js");

var _cartNobless2 = _interopRequireDefault(_cartNobless);

var _shareProduct = __webpack_require__(/*! ./js/share-product.js */ "./themes/NoblessTheme/assets/js/share-product.js");

var _shareProduct2 = _interopRequireDefault(_shareProduct);

var _loginNobless = __webpack_require__(/*! ./js/login-nobless.js */ "./themes/NoblessTheme/assets/js/login-nobless.js");

var _loginNobless2 = _interopRequireDefault(_loginNobless);

var _contactNobless = __webpack_require__(/*! ./js/contact-nobless */ "./themes/NoblessTheme/assets/js/contact-nobless.js");

var _contactNobless2 = _interopRequireDefault(_contactNobless);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// GENERAL FUNCTIONS
// MENU FUNCTIONS
// ORDERS GRID FUNCTIONS

/**
 * Resize function to keep all the main-content visible
 */
function resizeMainContainer() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
}
/**
 * Manage dropdown on mobile size
 */


function navbarCollapseInit() {
  jQuery('#mainNavbar').collapse({
    toggle: false
  });
  jQuery('#mainNavbar').on('shown.bs.collapse', function (e) {
    resizeContent();
  });
  jQuery('#mainNavbar').on('hidden.bs.collapse', function (e) {
    resizeContent();
  });
}
/**
 * Megamenu functions
 * .has-megamenu to use dropdown functions
 */


function megamenuFunctions() {
  // Button hover simulates click on it
  $('#menuButtonMain, #megamenuDropdown').on('mouseenter', function () {
    if (!$('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      $('#menuButton').trigger('click');
    }
  }).on('mouseleave', function () {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      $('#menuButton').trigger('click');
    }
  });
  /*$('#mainContentContainer').on('click', function() {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      if ($(document).width() <= 1033) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });*/

  $('#menuButtonMain').on('click', function () {
    if ($(document).width() < 1200) {
      if ($('#navbarMainMobile').hasClass('show')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  }); // Megamenu functions : manage mobile menu

  $(".screen-overlay").on('click', function (e) {
    closeMobileMenu();
  });
  $('a.nav-taxon').on('mouseenter', function (event) {
    if ($(document).width() > 1200) {
      if ($('div.menu-img-' + $(this).data('taxon') + ' img').length > 0) {
        $('div.menu-img').hide();
        $('div.menu-img-' + $(this).data('taxon')).show();
      }
    }
  });
  $("#navbarMainMobile").on("click", function (e) {
    e.stopPropagation();
  });
  $('.active.locale-link, .navbarTaxonsLink, .log-link').on('click', function (e) {
    developMobileMenu($(this).data('divToOpen'));
  });
  $('#openAccountMenu').on('click', function (e) {
    openMobileMenu();
    developMobileMenu($('.log-link').data('divToOpen'));
  });
  $('#menuButtonMain .back').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.navbar > div').hide();
    $('#navbarMain').show();
    $('#menuButtonMain .back').hide();
    $('#menuButtonMain .close').show();
  });
  $('.dropdown.cart-btn').on('show.bs.dropdown', function () {
    closeMobileMenu();
  });
}

function menuIconesFunctions() {
  $('.menu-icones .dropdown').on('show.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      const productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight();
      $('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      $('#headerCartItems').css('height', productContainerHeight + 'px');
      $(".screen-overlay-cart").addClass("show");
      $('body').addClass("offcanvas-active");
    }
  });
  $('.menu-icones .dropdown').on('hidden.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-cart").removeClass("show");
      $('body').removeClass("offcanvas-active");
    }
  });
}

function resizeMenu(element) {
  if ($(document).width() > 1200) {
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
  $('#navbarTaxons').hide();
  $('#navbarAccountLinks').hide();
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
  $('#navbarTaxons').hide();
  $('#navbarAccountLinks').hide();
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

function ordersGridFunctions() {
  // Desktop Accordion
  $('#orderAccordionDesktop').on('hidden.bs.collapse', function (e) {
    $(e.target).closest('tr').removeClass('show');
  });
  $('#orderAccordionDesktop').on('show.bs.collapse', function (e) {
    $('tr', this).removeClass('show');
    $(e.target).closest('tr').addClass('show');
  }); // Mobile Accordion

  $('#orderAccordionMobile').on('show.bs.collapse', function (e) {
    $(e.target).prev('div').removeClass('init');
  });
  $('#orderAccordionMobile').on('hidden.bs.collapse', function (e) {
    $(e.target).prev('div').addClass('init');
  });
  $('.arrow-close').on('click', function () {
    $(this).closest('div.order-details').prev('div').trigger('click');
  });
}

function resizeContent() {
  resizeMainContainer();
  (0, _carousel.carousel)();

  if ($(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _shareProduct2.default)();
  resizeMenu($('#menuButton').attr('data-trigger'));
  (0, _productNobless.resizeFilterMenu)();
  $('.header-dropdown').show();

  _fresco2.default.hide();
}

function init() {
  (0, _carousel.carousel)();
  navbarCollapseInit();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // PREVENT INSIDE CLICK DROPDOWN

  $('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  (0, _shareProduct2.default)();
  (0, _productNobless.product)();
  (0, _productNobless.filterProducts)(); // Menu Functions

  megamenuFunctions();
  menuIconesFunctions();
  ordersGridFunctions();
  (0, _loginNobless2.default)();
  (0, _cartNobless2.default)();
  (0, _checkoutNobless2.default)();
  (0, _contactNobless2.default)();
  resizeMainContainer();

  if ($(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _carousel.replaceCarouselArrow)();
  (0, _carousel.replaceCarouselArrowCart)();
  /*if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }*/
  // Show menu after page is loaded

  $('.mobile-offcanvas').show();
  $('.header-dropdown').show();
  $('#productsFiltersMobile .dropdown-menu').show();
}

exports.init = init;
exports.resizeContent = resizeContent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/indexBootstrapTheme.js":
/*!***********************************************************!*\
  !*** ./themes/NoblessTheme/assets/indexBootstrapTheme.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _glightbox = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");

var _glightbox2 = _interopRequireDefault(_glightbox);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(/*! ../../BootstrapTheme/assets/js/fontawesome */ "./themes/BootstrapTheme/assets/js/fontawesome.js");

var _syliusRating = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-rating */ "./themes/BootstrapTheme/assets/js/sylius-rating.js");

var _syliusRating2 = _interopRequireDefault(_syliusRating);

var _syliusToggle = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-toggle */ "./themes/BootstrapTheme/assets/js/sylius-toggle.js");

var _syliusToggle2 = _interopRequireDefault(_syliusToggle);

var _syliusAddToCart = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-add-to-cart */ "./themes/BootstrapTheme/assets/js/sylius-add-to-cart.js");

var _syliusAddToCart2 = _interopRequireDefault(_syliusAddToCart);

var _syliusRemoveFromCart = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-remove-from-cart */ "./themes/BootstrapTheme/assets/js/sylius-remove-from-cart.js");

var _syliusRemoveFromCart2 = _interopRequireDefault(_syliusRemoveFromCart);

var _syliusApiToggle = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-api-toggle */ "./themes/BootstrapTheme/assets/js/sylius-api-toggle.js");

var _syliusApiToggle2 = _interopRequireDefault(_syliusApiToggle);

var _syliusApiLogin = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-api-login */ "./themes/BootstrapTheme/assets/js/sylius-api-login.js");

var _syliusApiLogin2 = _interopRequireDefault(_syliusApiLogin);

var _syliusVariantsPrices = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-variants-prices */ "./themes/BootstrapTheme/assets/js/sylius-variants-prices.js");

var _syliusVariantsPrices2 = _interopRequireDefault(_syliusVariantsPrices);

var _syliusVariantImages = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-variant-images */ "./themes/BootstrapTheme/assets/js/sylius-variant-images.js");

var _syliusVariantImages2 = _interopRequireDefault(_syliusVariantImages);

var _syliusLoadableForms = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-loadable-forms */ "./themes/BootstrapTheme/assets/js/sylius-loadable-forms.js");

var _syliusLoadableForms2 = _interopRequireDefault(_syliusLoadableForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
//import SyliusProvinceField from '../../BootstrapTheme/assets/js/sylius-province-field';
// import SyliusAddressBook from './js/sylius-address-book';
// Global axios settings
_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
_axios2.default.defaults.headers.post.accept = 'application/json, text/javascript, */*; q=0.01';
_axios2.default.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  const glightbox = (0, _glightbox2.default)({
    selector: 'glightbox'
  }); // Add to cart

  document.querySelectorAll('[data-js-add-to-cart="form"]').forEach(el => (0, _syliusAddToCart2.default)(el)); // Remove from cart

  document.querySelectorAll('[data-js-remove-from-cart-button]').forEach(el => (0, _syliusRemoveFromCart2.default)(el)); // Province field
  //SyliusProvinceField();
  // Address book
  // const syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');
  // if (syliusShippingAddress && syliusShippingAddress.querySelector('.choose-address')) {
  //   SyliusAddressBook(syliusShippingAddress);
  // }
  // const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');
  // if (syliusBillingAddress && syliusBillingAddress.querySelector('.choose-address')) {
  //   SyliusAddressBook(syliusBillingAddress);
  // }
  // Variant prices

  (0, _syliusVariantsPrices2.default)(); // Star rating

  document.querySelectorAll('[data-js-rating]').forEach(elem => {
    new _syliusRating2.default(elem, {
      onRate(value) {
        document.querySelector(`#sylius_product_review_rating_${value - 1}`).checked = true;
      }

    });
  }); // Toggle and login from checkout

  if (document.querySelector('[data-js-login]')) {
    (0, _syliusApiToggle2.default)(document.querySelector('[data-js-login="email"]'));
    (0, _syliusApiLogin2.default)(document.querySelector('[data-js-login]'));
  } // Toggle billing address on the checkout page


  document.querySelectorAll('[data-js-toggle]').forEach(elem => new _syliusToggle2.default(elem)); // Product images for variants

  if (document.querySelector('[data-variant-options], [data-variant-code]')) {
    new _syliusVariantImages2.default();
  } // Loadable forms


  (0, _syliusLoadableForms2.default)();
});

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/carousel.js":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/carousel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGalleryDesktop = exports.createAddressCarousel = exports.replaceCarouselArrowCart = exports.replaceCarouselArrow = exports.carousel = undefined;

var _fresco = __webpack_require__(/*! ../fresco/js/fresco.min */ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js");

var _fresco2 = _interopRequireDefault(_fresco);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***********************/

/* CAROUSEL MANAGEMENT */

/***********************/
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
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  };

  if (carouselElement && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(options);
    carouselElement.on('setPosition', function (event, slick, currentSlide, nextSlide) {
      replaceCarouselArrow(carouselElement);
    });
  }
}
/**
 * Create product carousels
 */


function createProductCarousel(carouselElement) {
  let isCartItemsCarousel = carouselElement === $('#carouselSummaryItemsMobile');
  const options = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
    nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Next</button></div>',
    responsive: [{
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: "unslick"
    }]
  };

  if (carouselElement && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(options);

    if (isCartItemsCarousel) {
      replaceCarouselArrowCart();
    }
  } else {
    if ($(document).width() < 768 && carouselElement[0].slick && carouselElement[0].slick.unslicked) {
      carouselElement.slick(options);
    }

    if (isCartItemsCarousel) {
      carouselElement.on('setPosition', function (slick) {
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
    responsive: [{
      breakpoint: 1200,
      settings: {
        rows: 3,
        slidesPerRow: 1
      }
    }]
  };
  const visibleSliderDiv = !carouselElement.hasClass('d-none');

  if (visibleSliderDiv && !carouselElement.hasClass('slick-initialized')) {
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
  $('.fresco-slide').each(function (index) {
    const image = {
      url: $(this).data('image'),
      thumbnail: $(this).data('thumbnail')
    };
    images.push(image);
  });
  const heightContent = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  document.querySelectorAll('.fresco-slide').forEach((item, index) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      _fresco2.default.show(images, {
        thumbnails: 'vertical',
        loop: true,
        height: heightContent
      }, Number(index + 1));
    });
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

exports.carousel = carousel;
exports.replaceCarouselArrow = replaceCarouselArrow;
exports.replaceCarouselArrowCart = replaceCarouselArrowCart;
exports.createAddressCarousel = createAddressCarousel;
exports.createGalleryDesktop = createGalleryDesktop;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/cart-nobless.js":
/*!*******************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/cart-nobless.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/************************/

/* CART PAGE MANAGEMENT */

/************************/
const container = $('#cartPage');
const bodyContainer = $('body');

const cart = function mainFunctions() {
  // When reloading quantities
  // Desktop
  $('.reload-qty', container).on('click', function () {
    if ($(this).hasClass('mobile')) {
      $('form.form-to-submit').trigger('submit');
    } else {
      $(this).closest('form').trigger('submit');
    }
  }); // Mobile

  $('.mobile-qty', container).on('input', function () {
    const newQty = parseInt($(this).val());

    if (newQty <= parseInt($(this).attr('max'))) {
      const inputQtyName = $(this).data('input-qty');
      $('input[name="' + inputQtyName + '"]').val(newQty);
    }
  }); // Prevent customer to add more than 5 times a product

  $('.qty', container).on('input', function (e) {
    if (parseInt($(this).val()) >= parseInt($(this).attr('max'))) {
      $(this).val($(this).attr('max'));
    }
  }); // Apply coupon code

  $('.coupon-code-btn', container).on('click', function () {
    // If cart has product not in stock, disable coupon code
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      const coupon = $('.coupon-code').val();

      if (coupon === '') {
        $('#sylius_cart_promotionCoupon').val('');
      } else {
        $('#sylius_cart_promotionCoupon').val(coupon);
      }

      $('form.form-to-submit').trigger('submit');
    }
  }); // When coupon code input is filled, hide error container

  bodyContainer.on("keydown", ".coupon-code", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.coupon-error').html('');
  });

  if ($('.coupon-code-error .form-error-message', container).html() !== undefined) {
    $('.coupon-input').addClass('invalid-code');
    $('.coupon-error').html($('.coupon-code-error .form-error-message').html());
    $('.coupon-code').val($('#sylius_cart_promotionCoupon').val());
  } // Apply bonus points


  $('.bonus-points-btn', container).on('click', function () {
    // If cart has product not in stock, disable coupon code
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      const bonusPoints = $('.bonus-points').val();

      if (bonusPoints === '') {
        $('#sylius_cart_bonusPoints').val('');
      } else {
        $('#sylius_cart_bonusPoints').val(bonusPoints);
      }

      $('form.form-to-submit').trigger('submit');
    }
  });
  $('.delete-bonus-points', container).on('click', function () {
    // If cart has product not in stock, disable bonus points
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      $('#sylius_cart_bonusPoints').val('');
      $('form.form-to-submit').trigger('submit');
    }
  }); // When bonus points input is filled, hide error container

  bodyContainer.on("keydown", ".bonus-points", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.bonus-points-error').html('');
  });

  if ($('#bitbag-bonus-points .form-error-message', container).html() !== undefined) {
    $('.bonus-points-input').addClass('invalid-code');
    $('.bonus-points-error').html($('#bitbag-bonus-points .form-error-message').html());
    $('.bonus-points').val($('#sylius_cart_bonusPoints').val());
  } // If cart has product not in stock, disable button linked to checkout page


  $('a.btn-to-checkout', container).on('click', function (e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
    }
  });
};

exports.default = cart;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/checkout-nobless.js":
/*!***********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/checkout-nobless.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _carousel = __webpack_require__(/*! ./carousel */ "./themes/NoblessTheme/assets/js/carousel.js");

/***********************/

/* CHECKOUT MANAGEMENT */

/***********************/
// Main function used in init
const saveButton = $('#checkoutPage .save-in-account');
const cancelBtn = $('#checkoutPage .cancel-change-address');

const checkout = function mainFunctions() {
  const container = $('#checkoutPage'); // When the user wants to change his address

  $('.chosen-address .change-address', container).on('click', function (e) {
    e.preventDefault();
    const addressType = getClassList(this)[1];

    if (!$(this).hasClass('clicked') && !$('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');
      cancelBtn.show();
      cancelBtn.prev().hide();
      $('.checkout-address-form', container).show();
      $('.checkout-address-form .new-address-title', container).hide();
      manageAddressType(addressType, 'change', container);
      (0, _carousel.createAddressCarousel)($('#carouselAddressList')); // Create event on address item after carousel is open

      $('.choose-address .choose-address-item address', container).on('click', function (e) {
        chooseAddress($(this), addressType, container);
      });
    } else if ($('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');
      manageAddressType(addressType, 'add', container);
    }
  }); // When user wants to add a new address to his account

  $('a.checkout-add-address', container).on('click', function (e) {
    e.preventDefault();
    const addressType = getClassList($('.chosen-address .change-address.clicked', container)[0])[1];
    showAddForm(addressType, container);
    manageAddressType(addressType, 'add', container);
  }); // When user save a new address

  saveButton.on('click', function (e) {
    e.preventDefault();
    let addressType = 'shipping';

    if (!$(this).hasClass('no-addresses')) {
      addressType = getClassList(this)[3];
      $('#checkoutPage .data-' + addressType).each(function () {
        const field = getClassList(this)[1];
        const fieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + field + ']';
        const toSave = '#checkoutPage .main-address-form ' + fieldName;
        const toReplace = '.change-' + addressType + '-address ' + fieldName;
        $(toReplace).val($(toSave).val());
      });
    }

    checkoutSaveAddress(this, addressType, container);
  }); // When user clicks on address page next button

  $('.main-address-form button.btn-primary', container).on('click', function (e) {
    e.preventDefault();
    $('.checkout-address-form', container).hide();
    fillAllAddresses(container);
    $(this).closest('form').addClass('loading').submit();
  }); // When user cancels the address changes

  $('a.cancel-change-address', container).on('click', function (e) {
    e.preventDefault();
    hideChangeAddress(container);
    hideSaveAddressForm(container);
    cancelChangeAddress(container);
  }); // When user cancels the address add

  $('a.cancel-add-checkout-address', container).on('click', function (e) {
    $('.checkout-address-form', container).show();
    $('.save-checkout-address-navigation', container).show();
    $('.save-address-form', container).removeClass('d-block');
    $('.save-address-form [class^="add-"]', container).hide();
    hideSaveAddressForm(container);
  });
}; // When user chose an address is the addresses list


function chooseAddress(element, addressType, container) {
  $('.data-address', element).each(function () {
    const fieldName = getClassList(this)[1];
    const fieldSelector = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
    const formField = '#checkoutPage .main-address-form ' + fieldSelector;
    const chosenAddressText = '.data-' + addressType + '.' + fieldName;
    let chosenValue = $(this).text();
    $(chosenAddressText).text(chosenValue);

    if (fieldName === 'countryCode') {
      chosenValue = $(this).text().substring(0, 2);
    }

    $(formField).val(chosenValue);

    if (fieldName === 'street2') {
      if ($(this).text().trim() !== '') {
        $('.street2-container-' + addressType).removeClass('d-none');
      } else {
        $('.street2-container-' + addressType).addClass('d-none');
      }
    }

    $(chosenAddressText).closest('address').attr('data-' + getDataFieldName(fieldName), chosenValue);
  });
  $('#sylius_checkout_address_differentBillingAddress', container).prop('checked', true);
  hideChangeAddress(container);
}
/* Save address in user account : Returns errors in form if not valid */


function checkoutSaveAddress(element, addressType, container) {
  const form = $(element).closest('form');
  $('input[name="address_type"]', form).val(addressType);
  fillOtherAddress(addressType, container);
  $('.save-address-form form', container).addClass('loading');
  $.ajax({
    type: "POST",
    url: form.attr('action'),
    data: form.serialize(),
    success: function success(response) {
      const dataSuccessDiv = $(response);
      const noAddress = saveButton.hasClass('no-addresses');

      if (dataSuccessDiv.hasClass('save-address-success')) {
        $('.chosen-address .data-' + addressType, container).each(function () {
          const fieldName = getClassList(this)[1];
          fillDataAfterSave(this, addressType, fieldName, dataSuccessDiv); // If User doesn't have addresses

          if (noAddress) {
            const element = $('.chosen-address .data-' + getOtherAddressType(addressType) + '.' + fieldName, container);
            fillDataAfterSave(element, getOtherAddressType(addressType), fieldName, dataSuccessDiv);
          }

          $('.address-book', container).html($('.address-book', dataSuccessDiv).html());
        });

        if (noAddress) {
          $('.chosen-address address.cancel-info').removeClass('d-none');
          $('.no-addresses-text', container).addClass('d-none');
          showMainForm(container);
        }

        hideChangeAddress(container);
        hideSaveAddressForm(container);
      }
    },
    error: function error(_error) {
      hideSaveAddressForm(container);
      $($.parseHTML(_error.responseText)[1]).find('.form-error-message').each(function () {
        const fieldName = $(this).closest('label').attr('for');
        const fieldError = $(this).text();
        $('.save-address-form [id="' + fieldName + '"]', container).addClass('is-invalid').after('<span class="invalid-feedback d-block"><span class="form-error-message d-block">' + fieldError + '</span></span>');
      });
    }
  });
}
/* Fill address form fields to avoid errors */


function fillAddress(fieldId, addressType, form, container) {
  const keepCamelField = ['firstName', 'lastName', 'countryCode'];
  const dataToFill = $('.chosen-address address.cancel-info.' + addressType, container).data();
  $(form + ' [id^="' + fieldId + '"]', container).each(function () {
    const regex = /\[(\w+)\]$/gm;
    let fieldName = regex.exec($(this).attr('name'))[1];

    if (!keepCamelField.includes(fieldName)) {
      fieldName = fieldName.toLowerCase();
    }

    $(this).val(dataToFill[fieldName]);
  });
  $('#inAccount_save_differentBillingAddress', container).prop('checked', true);
}
/* Fill addresses when user clicks on next button */


function fillAllAddresses(container) {
  ['shipping', 'billing'].forEach(addressType => {
    const fieldId = 'sylius_checkout_address_' + addressType + 'Address';
    fillAddress(fieldId, addressType, '.main-address-form', container);
  });
}
/* Fill other address type form when saving new address */


function fillOtherAddress(addressType, container) {
  const otherAddressType = getOtherAddressType(addressType);
  let fieldId = 'inAccount_save_' + otherAddressType;

  if (saveButton.hasClass('no-addresses')) {
    fillOtherForm(addressType, otherAddressType, '.save-address-form', container);
  } else {
    fillAddress(fieldId, otherAddressType, '.save-address-form', container);
  }
} // Fill other new address form ONLY IF user don't have addresses yet


function fillOtherForm(addressType, otherAddressType, form, container) {
  const fieldId = 'inAccount_save_' + addressType;
  const otherFieldId = 'inAccount_save_' + otherAddressType;
  $(form + ' [id^="' + fieldId + '"]', container).each(function () {
    const regex = /\[(\w+)\]$/gm;
    let fieldName = regex.exec($(this).attr('name'))[1];

    if (fieldName !== 'countryCode') {
      fieldName = fieldName.toLowerCase();
    }

    const idToFill = '#' + otherFieldId + '_' + fieldName;
    $(idToFill).val($(this).val());
  });
} // Fill form and div data when save new address


function fillDataAfterSave(element, addressType, fieldName, container) {
  // Get value from ajax return
  const newValue = $('.data-' + addressType + '-success.' + fieldName, container).html(); // Create main form field selector

  const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
  const fieldToReplace = '#checkoutPage .main-address-form ' + formFieldName; // Replace field with value from ajax return

  $(fieldToReplace).val(newValue); // Replace text with value from ajax return

  $(element).text(newValue);

  if (fieldName === 'countryCode') {
    $(element).text($('.data-' + addressType + '-success.countryName', container).html());
  } // Show or hide street2 container according to value


  if (fieldName === 'street2') {
    if ($('.data-' + addressType + '-success.' + fieldName, container).html().trim() !== '') {
      $('.street2-container-' + addressType).removeClass('d-none');
    } else {
      $('.street2-container-' + addressType).addClass('d-none');
    }
  } // Fill address div data


  $('.chosen-address .cancel-info.' + addressType).attr('data-' + getDataFieldName(fieldName), newValue);
}
/* Show Main form when user have no addresses */


function showMainForm(container) {
  // Hide div mentioning that use doesn't have addresses
  $('.no-address-yet', container).remove(); // Hide add new address form

  $('.add-shipping-address', container).removeClass('d-block'); // Hide add new address form title

  $('.new-address-title', container).addClass('d-none');
  $('.new-address-title .use', container).removeClass('d-none');
  $('.new-address-title .add', container).addClass('d-none'); // Show navigation buttons from main form

  $('.cancel-add-checkout-address', container).removeClass('d-none').next('a.btn').addClass('d-none');
  $('.save-checkout-address-navigation', container).removeClass('d-none');
  $('.chosen-address .change-address', container).removeClass('d-none');
}
/* Hide address modification container */


function hideChangeAddress(container) {
  $('.save-checkout-address-navigation', container).show();
  $('.checkout-address-form', container).hide();
  cancelBtn.hide();
  cancelBtn.prev().show();
  $('.save-address-form', container).removeClass('d-block');
  $('.chosen-address .change-address', container).removeClass('clicked');
  $('#mainContentContainer')[0].scrollTop = 0;
}
/* Remove error indicators when save address form is submitted */


function hideSaveAddressForm(container) {
  // Use addressType chosen when save form is shown
  let addressType = getClassList(saveButton[0])[3];

  if (addressType === 'no-addresses') {
    addressType = getClassList(saveButton[0])[4];
  }

  $('.change-' + addressType + '-title', container).show();
  $('.change-' + getOtherAddressType(addressType) + '-title', container).hide();
  $('.save-address-form form', container).removeClass('loading');
  $('.save-address-form input, .save-address-form select', container).removeClass('is-invalid');
  $('.save-address-form .invalid-feedback', container).remove();
}
/* Replace all form and displayed address data when cancel modifications */


function cancelChangeAddress(container) {
  $('.chosen-address address.cancel-info', container).each(function () {
    const oldData = $(this).data();
    const addressType = this.className.split(/\s+/)[1];
    const fieldNames = Object.keys(oldData);
    fieldNames.forEach(element => {
      let fieldName = element;

      if (element === 'countryName') {
        fieldName = 'countryCode';
      }

      const textToReplace = '.data-' + addressType + '.' + fieldName;
      const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
      const fieldToReplace = '.main-address-form ' + formFieldName; // Set form with old data

      $(fieldToReplace, container).val(oldData[element]);

      if (element !== 'countryCode') {
        // Set chosen Address with old data
        $(textToReplace).text(oldData[element]);
      }
    });
  });
} // Show add address form


function showAddForm(addressType, container) {
  $('.checkout-address-form', container).hide();
  $('.save-checkout-address-navigation', container).hide();
  $('.save-address-form .new-address-title', container).removeClass('d-none');
  $('.save-address-form input[type="text"]', container).val('');
  $('.save-address-form', container).addClass('d-block'); // Hide all save address forms before showing the chosen one

  $('.save-address-form [class^="add-"]', container).hide();
  $('.save-address-form .add-' + addressType + '-address', container).show();
}
/* Manage what type of address will be replace and/or saved */


function manageAddressType(addressType, selectorType, container) {
  $('.' + selectorType + '-' + addressType + '-title', container).show();
  $('.' + selectorType + '-' + getOtherAddressType(addressType) + '-title', container).hide(); // Also Manage SaveButton class

  saveButton.addClass(addressType);
  saveButton.removeClass(getOtherAddressType(addressType));
}
/********************/

/* COMMON FUNCTIONS */

/********************/
// Get class list from given element


function getClassList(element) {
  return element.className.split(/\s+/);
} // Get field name to fill data info in .cancel-info div


function getDataFieldName(fieldName) {
  const matches = /[A-Z]/gm.exec(fieldName);

  if (matches !== null) {
    return (fieldName.substr(0, matches.index) + '-' + fieldName.substr(matches.index, fieldName.length)).toLowerCase();
  }

  return fieldName;
} // Get other address type from address type give


function getOtherAddressType(addressType) {
  return addressType === 'shipping' ? 'billing' : 'shipping';
}

exports.default = checkout;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/contact-nobless.js":
/*!**********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/contact-nobless.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/***************************/

/* CONTACT PAGE MANAGEMENT */

/***************************/
const contactPage = function mainFunctions() {
  // Ajax call when contact form is submitted
  $('#contactPage form button').on('click', function (e) {
    e.preventDefault();
    const form = $(this).closest('form');
    $(form).addClass('loading');
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      success: function success(response) {
        $('#contactResponseModal .modal-body div').html(response);
        $('#contactResponseModal').modal('show'); // Delete all errors of form when success

        $('#contactPage [name^="sylius_contact"]').val('').prop("checked", false);
        $('#contactPage [name^="sylius_contact"], #contactPage [for^="sylius_contact_"]').removeClass('is-invalid');
        $('#contactPage span.invalid-feedback').remove();
        $(form).removeClass('loading');
      },
      error: function error(_error) {
        if (_error.status === 406) {
          $('#contactPage span.invalid-feedback').remove();
          const errorList = $($.parseHTML(_error.responseText)[1]).find('span').toArray();
          errorList.forEach(error => {
            if (error.outerText !== '') {
              if (error.className !== 'acceptCgv') {
                $('#sylius_contact_' + error.className).addClass('is-invalid').after('<span class="invalid-feedback d-block">' + error.outerText + '</span>');
              } else {
                $('#sylius_contact_' + error.className).next('label').addClass('is-invalid');
              }
            }
          });
        }

        if (_error.status === 417) {
          $('#contactPage .contact-error').html($.parseHTML(_error.responseText)[1]);
        }

        $(form).removeClass('loading');
      }
    });
  }); // Add new field when chosen subject is "other"

  $('#sylius_contact_subject').on('change', function (e) {
    if ($(e.target).val() === 'other') {
      $('.other-subject').show();
    } else {
      $('.other-subject').hide();
    }
  });
};

exports.default = contactPage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/login-nobless.js":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/login-nobless.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*************************/

/* LOGIN PAGE MANAGEMENT */

/*************************/
const loginPage = function mainFunctions() {
  // Open reset password modal
  $('.reset-password-open').on('click', function (e) {
    e.preventDefault();
    const modalId = $(this).data('modalId');
    $(modalId).modal('show');
    $('.header-dropdown').removeClass('show');
  }); // Only when class login-form exists in page

  if ($('.login-form')) {
    $('.submit-login').on('click', function (e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement).submit();
    });
  } // Only when class verify-account exists in page


  const verifyAccountObject = $('.verify-account');

  if (verifyAccountObject) {
    verifyAccountObject.on('click', function (e) {
      e.preventDefault();
      $(this).closest('form').submit();
    });
  } // Only when resetPasswordSubmit button exists in page, Ajax call to reset password


  if ($('#resetPasswordSubmit')) {
    $('#resetPasswordSubmit').on('click', function (event) {
      event.preventDefault();
      $('.reset-password .modal-dialog .form-error-message').html('');
      const form = $(this).closest('form');
      $(form).addClass('loading');
      $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        success: function success(response) {
          $('.reset-password .modal-dialog').append(response);
          $('.reset-password .modal-dialog .modal-content:not(.success)').addClass('d-none');
          $('.modal-dialog input.form-control').removeClass('is-invalid');
          $(form).removeClass('loading');
        },
        error: function error(_error) {
          $('.reset-password .modal-dialog input.form-control').addClass('is-invalid');
          $('.modal-dialog .form-errors .form-error-message').text($($.parseHTML(_error.responseText)[1]).find('.form-errors ul li').text());
          $(form).removeClass('loading');
        }
      });
    }); // Actions when modal is closed

    $('#resetPasswordModal').on('hide.bs.modal', function (e) {
      $('.reset-password .modal-dialog input.form-control').removeClass('is-invalid');
      $('.reset-password .modal-dialog form').removeClass('loading');
      $('.reset-password .modal-dialog form input').val('');
      $('.reset-password .modal-dialog .form-error-message').html('');
    });
  } // Check if email is valid before submit register form


  $('button.submit-register').on('click', function (e) {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    const registerForm = $($(e.target).data('form'));
    const inputRegisterForm = registerForm.find('input');
    const email = inputRegisterForm.val();
    const invalidSpan = inputRegisterForm.closest('div').next('span');

    if (regex.test(email)) {
      invalidSpan.removeClass('d-block');
      inputRegisterForm.removeClass('is-invalid');
      registerForm.submit();
    } else {
      invalidSpan.addClass('d-block');
      inputRegisterForm.addClass('is-invalid');
    }
  }); // When email field is filled and customer wants to modify its value

  $('.register-form input, .header-register-form input').on('keyup', function (e) {
    const regex = /\S+@\S+\.\S+/;
    const email = $(e.target).closest('form').find('input').val();

    if (regex.test(email) && $(e.target).hasClass('is-invalid')) {
      $(e.target).closest('div').next('span').removeClass('d-block');
      $(e.target).removeClass('is-invalid');
    }
  });
};

exports.default = loginPage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/product-nobless.js":
/*!**********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/product-nobless.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeFilterMenu = exports.filterProducts = exports.product = undefined;

var _nouislider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");

var _nouislider2 = _interopRequireDefault(_nouislider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**********************/

/* PRODUCT MANAGEMENT */

/**********************/
const priceContainerSelector = '#productsFilters';
const priceContainerSelectorMobile = '#productsFiltersMobile';
const priceMinSelector = 'input[name="criteria[price][price_1]"]';
const priceMaxSelector = 'input[name="criteria[price][price_2]"]';

const product = function mainFunctions() {
  // Manage variant list when clicking in size available
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function (event) {
    const bundleItem = $(this).data('bundle-item');
    const variantListContainer = $(this).closest('div.variant-list');

    if (bundleItem !== undefined) {
      $('.variant-name[data-bundle-item="' + bundleItem + '"]').removeClass('variant-selected');
    } else {
      $('.variant-list .variant-name').removeClass('variant-selected');
    }

    $('.invalid-feedback', variantListContainer).removeClass('d-block').addClass('d-none');

    if ($(this).data('almost-out') !== undefined) {
      $('.last-product-in-stock', variantListContainer).removeClass('d-none').addClass('d-block');
    } else {
      $('.last-product-in-stock', variantListContainer).removeClass('d-block').addClass('d-none');
    }

    $(this).addClass('variant-selected');
  }); // Show or hide variants list in products carousel according to screen size

  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top').on('mouseenter', function () {
    if ($(document).width() > 1440) {
      $('.variants-container', this).show();
    }
  }).on('mouseleave', function () {
    $('.variants-container', this).hide();
  }); // When clicking on add to cart button

  $('#sylius-product-adding-to-cart .btn-primary').on('click', function (e) {
    e.preventDefault();
    $('.variant-list .invalid-feedback').removeClass('d-block').addClass('d-none');
    const addToCartForm = $(this).closest('form');
    const selectedSize = $('input[name^="' + $(addToCartForm).data('nameToCheck') + '"]:checked').length;
    const bundleItemsCount = $('div.bundle-item').length;

    if (selectedSize > 0 && selectedSize < bundleItemsCount) {
      $(addToCartForm).find('.empty-product:not(.input-checked)').removeClass('d-none').addClass('d-block');
    } else if (selectedSize === 0) {
      $(addToCartForm).find('.empty-product').removeClass('d-none').addClass('d-block');
    } else {
      $(addToCartForm).find('.empty-product').addClass('d-none').removeClass('d-block');
      $(addToCartForm).trigger('submit');
    }
  });
  $('input[id^="bitbag_sylius_product_bundle_plugin_add_product_bundle_to_cart_"]').on('change', function (e) {
    $(this).closest('div').find('span.invalid-feedback').addClass('input-checked').addClass('d-none').removeClass('d-block');
  });
};

const filterProducts = function filterProductFunctions() {
  const queryString = window.location.search;
  const criteria = queryString.indexOf('criteria');
  const priceInput = $('.price-filter .price-input');
  let priceSlider;
  let priceSliderMobile;

  if (priceInput.length > 0) {
    priceSlider = createPriceSlider(priceInput, priceContainerSelector);
    priceSliderMobile = createPriceSlider(priceInput, priceContainerSelectorMobile); // When user changes price input value

    priceInput.on('keyup', function (e) {
      if (e.which !== 8 && !isNaN(String.fromCharCode(e.which))) {
        setSliderNewValue(priceSlider, $(priceContainerSelector));
        setSliderNewValue(priceSliderMobile, $(priceContainerSelectorMobile));
      }
    });
  }
  /**
   * MANAGE DESKTOP FILTERS
   */
  // Size filter management


  const sizeFilterInput = $('#sizeFilter input');
  sizeFilterInput.each(function (index) {
    if (this.checked) {
      $(this).next('label').addClass('selected');
      $('input[data-id="' + $(this).attr('id') + '"]').attr('checked', 'checked').next('label').addClass('selected');
    }
  });
  sizeFilterInput.on('change', function (e) {
    if (e.target.checked) {
      $(e.target).next('label').addClass('selected');
    } else {
      $(e.target).next('label').removeClass('selected');
    }
  }); // Validate filters on desktop

  $('a.validate-filter').on('click', function (e) {
    e.preventDefault();
    checkPriceValue(priceSlider, $(priceContainerSelector));
    checkPriceValue(priceSliderMobile, $(priceContainerSelectorMobile));
    $('#productFilterForm').submit();
  });
  /**
   * MANAGE MOBILE FILTERS
   */
  // Size filter management on mobile

  $('#criteriaSizeMobile input').on('change', function (e) {
    const inputToCheck = $(e.target).data('id');

    if (e.target.checked) {
      $(e.target).next('label').addClass('selected');
      $('#' + inputToCheck).attr('checked', 'checked').next('label').addClass('selected');
    } else {
      $(e.target).next('label').removeClass('selected');
      $('#' + inputToCheck).removeAttr('checked').next('label').removeClass('selected');
    }
  }); // Sorting

  $('#productFilterMobileForm .radio-container input.input-sorting').on('change', function (e) {
    $('#productFilterMobileForm .radio-container input').removeAttr('checked');
    $('#productFilterMobileForm .radio-container .checkmark .checked').removeClass('d-block');
    $(e.target).attr('checked', 'checked');
    $(e.target).next('.checkmark').find('.checked').addClass('d-block');
  }); // Validate filters

  $('#productFilterMobileForm button.btn-primary').on('click', function (e) {
    e.preventDefault();

    if ($('.input-sorting:checked').val() === 'createdAt') {
      $('.input-sorting:checked').remove();
      $('.input-sorting-createdAt').attr('checked', true).removeClass('d-none').addClass('d-inline-block');
    }

    checkPriceValue(priceSlider, $(priceContainerSelector));
    checkPriceValue(priceSliderMobile, $(priceContainerSelectorMobile));
    $(this).closest('form').submit();
  }); // Mobile filters behaviour

  $('.product-filters.dropdown').on('show.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      resizeFilterMenu();
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
      $(".screen-overlay-filters").addClass("show");
      $('body').addClass("offcanvas-active");
      $('.close', $(priceContainerSelectorMobile)).removeClass("d-none");
    }
  }).on('hidden.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-filters").removeClass("show");
      $('body').removeClass("offcanvas-active");
      $('.close', $(priceContainerSelectorMobile)).addClass("d-none");
    }
  });
  /**
   * GENERAL FUNCTIONS
   */
  // Hide reinitialization button when filters have no criteria

  if (criteria !== -1) {
    $('.reinit-filter').removeClass('d-none');
  } // Add action to close icon


  $('.close', $(priceContainerSelectorMobile)).on('click', function (e) {
    e.preventDefault();
    $('.dropdown-toggle', $(priceContainerSelectorMobile)).trigger('click');
  });
};
/**
 * Function called when window is resized to avoid showing filter mobile menu on desktop
 */


const resizeFilterMenu = function resizeFilterMobileMenu() {
  if ($(document).width() > 1200) {
    $(".screen-overlay-filters").removeClass("show");
  } else {
    const headerContainer = $('#headerContainer');
    const headerBanner = $('.header-banner');
    const headerHeight = headerContainer.height() - headerBanner.height();
    const headerOuterHeight = headerContainer.outerHeight() - headerBanner.height();
    const filterListContainerHeight = $('#productsFiltersMobile .dropdown-menu').height() - $('header').height() - $('#filterSubmit').outerHeight() - 10;
    $('#productsFiltersMobile').css('height', 'calc(100% - ' + headerHeight + 'px)');
    $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
    $('#filterList').css('height', filterListContainerHeight + 'px');
  }
};
/**
 * Create price slider on taxon pages
 *
 * @param priceInput
 * @param containerSelector
 * @returns noUiSlider
 */


function createPriceSlider(priceInput, containerSelector) {
  const priceContainer = $(containerSelector);
  const priceRange = $('#priceRange', priceContainer)[0];
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer); // Prepare slider options

  const taxonMinPrice = parseFloat(priceInput.first().data('min'));
  const taxonMaxPrice = parseFloat(priceInput.first().data('max'));
  const rangeSliderOptions = {
    start: [priceMin.val(), priceMax.val()],
    range: {
      'min': [taxonMinPrice],
      'max': [taxonMaxPrice]
    },
    step: 1,
    connect: true,
    format: {
      to: function to(value) {
        return value;
      },
      from: function from(value) {
        return value;
      }
    },
    behaviour: 'tap',
    tooltips: false
  };

  const slider = _nouislider2.default.create(priceRange, rangeSliderOptions);

  slider.on('slide', function (newValue) {
    priceMin.val(parseInt(newValue[0]));
    priceMax.val(parseInt(newValue[1]));
  });
  return slider;
}

function setSliderNewValue(priceSlider, priceContainer) {
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);
  const newValue = [priceMin.val(), priceMax.val()];
  priceSlider.set(newValue);
}
/**
 * Check price values before send form
 * @param priceSliderObject
 * @param priceContainer
 */


function checkPriceValue(priceSliderObject, priceContainer) {
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);
  const priceInput = $('.price-filter .price-input').first();
  let priceMinValue = priceMin.val();
  let priceMaxValue = priceMax.val();

  if (priceMin.val() < priceInput.data('min')) {
    priceMinValue = priceInput.data('min');
  }

  if (priceMin.val() > priceInput.data('max')) {
    priceMinValue = priceInput.data('max');
  }

  priceMin.val(priceMinValue);

  if (priceMax.val() > priceInput.data('max')) {
    priceMaxValue = priceInput.data('max');
  }

  if (priceMax.val() < priceInput.data('min')) {
    priceMaxValue = priceInput.data('min');
  }

  priceMax.val(priceMaxValue);
  priceSliderObject.set([priceMinValue, priceMaxValue]);
}

exports.product = product;
exports.filterProducts = filterProducts;
exports.resizeFilterMenu = resizeFilterMenu;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/share-product.js":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/share-product.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/****************************/

/* SHARE PRODUCT MANAGEMENT */

/****************************/
const shareProduct = function mainFunctions() {
  if (document.getElementById('shareDropdown')) {
    jQuery('#copyShare').tooltip('disable'); // Facebook Share

    document.getElementById('facebookShare').addEventListener('click', function (event) {
      event.preventDefault();
      const winTop = screen.height / 2 - 350 / 2;
      const winLeft = screen.width / 2 - 600 / 2;
      const url = document.getElementById('facebookShare').dataset.url;
      window.open('http://www.facebook.com/sharer.php?u=' + url, 'Facebook - Noblezz Shop', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=600,height=350');
    }); // Pinterest Share

    document.getElementById('pinterestShare').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('realPinterestShare').click();
    }); // Copy to Clipboard

    document.getElementById('copyShare').addEventListener('click', function (event) {
      event.preventDefault();
      const copyText = document.getElementById('pageLink');
      $('#copyShare').tooltip('enable');
      navigator.clipboard.writeText(copyText.value).then(() => {
        $('#copyShare').tooltip('show');
        setTimeout(function () {
          $('#copyShare').tooltip('disable');
        }, 1500);
      }).catch(error => {
        console.log(`Copy failed! ${error}`);
      });
    }); // Mail To

    document.getElementById('mailShare').addEventListener('click', function (event) {
      event.preventDefault();
      const mailTo = document.getElementById('mailShare').dataset.mailto;
      window.location.href = mailTo;
    });
  }
};

exports.default = shareProduct;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/account-icon.png":
/*!***********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/account-icon.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/account-icon.ba969c99.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/back.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/back.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/back.cd11f0fb.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/card.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/card.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/card.b7571b12.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/chronopost.png":
/*!*********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/chronopost.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/chronopost.eede6abc.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/colissimo.png":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/colissimo.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/colissimo.0b79a712.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/delivery-truck.png":
/*!*************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/delivery-truck.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/delivery-truck.9c3dfcd8.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-de.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-de.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/icon-de.9a31859d.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-en.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-en.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/icon-en.302ee7bf.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-es.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-es.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/icon-es.6aa707f5.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-fr.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-fr.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/icon-fr.846d7e68.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-it.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-it.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/icon-it.3555a36b.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/logo.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/logo.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/logo.2c2a9cc3.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/mastercard.png":
/*!*********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/mastercard.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/mastercard.040f41bb.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/mondial-relay.png":
/*!************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/mondial-relay.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/mondial-relay.e726897f.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/next.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/next.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/next.fb646095.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/paypal.png":
/*!*****************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/paypal.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/paypal.952625f5.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/reload.png":
/*!*****************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/reload.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/reload.3b750d46.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/return-policy.png":
/*!************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/return-policy.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/return-policy.67d8a753.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/shopping-bag-icon.png":
/*!****************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/shopping-bag-icon.png ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/shopping-bag-icon.7fdec270.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/visa.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/visa.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/nobless-theme/images/visa.699c4039.png");

/***/ }),

/***/ "./themes/NoblessTheme/assets/scss/index.scss":
/*!****************************************************!*\
  !*** ./themes/NoblessTheme/assets/scss/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./themes/NoblessTheme/assets/entry.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnJlc2NvL2pzL2ZyZXNjby5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2luZGV4Qm9vdHN0cmFwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2FydC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY29udGFjdC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2xvZ2luLW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvcHJvZHVjdC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3NoYXJlLXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBZGRUb0NhcnQiLCJlbCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVxdWVzdCIsImF4aW9zIiwicG9zdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmb3JFYWNoIiwibWVzc2FnZSIsImVycm9ycyIsImlubmVySFRNTCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsIlN5bGl1c1JhdGluZyIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsImN1cnJlbnRUYXJnZXQiLCJvblJhdGUiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwicmVwbGFjZSIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwiaXRlbSIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiY2xvc2VzdCIsImltZyIsInNldEF0dHJpYnV0ZSIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJ1bmRlZmluZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImluZGV4T2YiLCJmIiwiT3BlcmEiLCJvcGVyYSIsInBhcnNlRmxvYXQiLCJXZWJLaXQiLCJtYXRjaCIsIkNocm9tZSIsIkNocm9tZU1vYmlsZSIsIklFTW9iaWxlIiwidCIsIlJlZ0V4cCIsImV4ZWMiLCJfc2xpY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYmFzZVRvU3RyaW5nIiwiXyIsImlzRWxlbWVudCIsIm5vZGVUeXBlIiwiU3RyaW5nIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsIkV2ZW50IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJGaXQiLCJ3aXRoaW4iLCJhcmd1bWVudHMiLCJzIiwibiIsIm8iLCJhIiwiaCIsInIiLCJkIiwiTWF0aCIsIm1pbiIsIm1heCIsImVhc2luZyIsImZyZXNjb0Vhc2VJbkN1YmljIiwiZnJlc2NvRWFzZUluU2luZSIsImNvcyIsIlBJIiwiZnJlc2NvRWFzZU91dFNpbmUiLCJzaW4iLCJTdXBwb3J0IiwiTyIsIlAiLCJzcGxpdCIsImNhbnZhcyIsImJhIiwiZ2V0Q29udGV4dCIsImNzcyIsImFuaW1hdGlvbiIsIlMiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJzdWJzdHIiLCJkZXRlY3RNb2JpbGVUb3VjaCIsIm1vYmlsZVRvdWNoIiwidGVzdCIsInBsYXRmb3JtIiwiSW1hZ2VSZWFkeSIsImluaXRpYWxpemUiLCJhcHBseSIsImNhbGwiLCJUaW1lcnMiLCJnZXRVUklEYXRhIiwidHlwZSIsImVhY2giLCJUeXBlcyIsImRldGVjdEV4dGVuc2lvbiIsInRvTG93ZXJDYXNlIiwic3VwcG9ydHMiLCJuYXR1cmFsV2lkdGgiLCJJbWFnZSIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJpc0xvYWRlZCIsIm9wdGlvbnMiLCJtZXRob2QiLCJwb2xsRmFsbGJhY2tBZnRlciIsImNvbXBsZXRlIiwic2V0VGltZW91dCIsInByb3h5Iiwic3VjY2VzcyIsImludGVydmFscyIsIl9pcG9zIiwiX3RpbWUiLCJfZGVsYXkiLCJwb2xsIiwiZmFsbGJhY2siLCJfcG9sbGluZyIsIl91c2VkUG9sbEZhbGxiYWNrIiwiX2ZhbGxiYWNrSW1nIiwibmF0dXJhbEhlaWdodCIsIm9uZXJyb3IiLCJzcmMiLCJhYm9ydCIsImNsZWFyVGltZW91dCIsIl9jYWxsZWRTdWNjZXNzIiwiX2NhbGxlZEVycm9yIiwiX3RpbWVycyIsInNldCIsImNsZWFyIiwiY2xlYXJBbGwiLCJUeXBlIiwiaXNWaWRlbyIsImltYWdlIiwiZXh0ZW5zaW9ucyIsImRldGVjdCIsImluQXJyYXkiLCJleHRlbnNpb24iLCJ2aW1lbyIsImlkIiwieW91dHViZSIsIlZpbWVvVGh1bWJuYWlsIiwibG9hZCIsInByb3RvY29sIiwiX3hociIsImdldEpTT04iLCJ0aHVtYm5haWxfdXJsIiwiY2FjaGUiLCJwdXNoIiwiVmltZW9SZWFkeSIsImNhbGxiYWNrIiwiZGltZW5zaW9ucyIsIk9wdGlvbnMiLCJkZWZhdWx0cyIsImVmZmVjdHMiLCJjb250ZW50Iiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJhdHRyIiwicG9zaXRpb25PdXRzaWRlIiwicHJldmlvdXNJbnNpZGUiLCJuZXh0SW5zaWRlIiwiY2xvc2VJbnNpZGUiLCJncm91cGVkIiwiaW5mb0luc2lkZSIsImluZm9QYWRkZXJJbnNpZGUiLCJwb3NJbnNpZGUiLCJjYXB0aW9uSW5zaWRlIiwicG9zaXRpb25JbnNpZGUiLCJfZ2V0U3Vycm91bmRpbmdQYWdlcyIsInByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcyIsInByZWxvYWRpbmciLCJwcmVsb2FkZWQiLCJsb2FkZWQiLCJwcmVsb2FkUmVhZHkiLCJsb2FkaW5nIiwiX3NwaW5uZXJEZWxheSIsImltYWdlUmVhZHkiLCJfbWFya0FzTG9hZGVkIiwic2V0RGltZW5zaW9ucyIsInByZXBlbmQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ2aW1lb1JlYWR5IiwiX2Fib3J0U3Bpbm5lckRlbGF5IiwiaW5zZXJ0VmlkZW8iLCJwbGF5ZXJJZnJhbWUiLCJwYXJhbSIsIl9kYXRhIiwiX2NvbnRlbnREaW1lbnNpb25zIiwiZnJhbWVib3JkZXIiLCJyYWlzZSIsImxhc3RDaGlsZCIsInN0b3BJbmFjdGl2ZSIsInVwZGF0ZVVJIiwiX3VpIiwiaGlkZUluYWN0aXZlIiwib25TaG93IiwiYWZ0ZXJQb3NpdGlvbiIsInJlbW92ZVZpZGVvIiwicmVtb3ZlVHJhY2tpbmciLCJfdHJhY2siLCJyZW1vdmVkIiwiX2dldEluZm9IZWlnaHQiLCJfd2hpbGVWaXNpYmxlIiwiaXMiLCJoYXNDbGFzcyIsInZpc2liaWxpdHkiLCJ1cGRhdGVGb3JjZWQiLCJmdWxsQ2xpY2siLCJfbm9PdmVyZmxvdyIsInBhcnNlSW50IiwiX3Bvc2l0aW9uT3V0c2lkZSIsImwiLCJ1IiwiYyIsInAiLCJtIiwidiIsImciLCJfaW5mb0hlaWdodCIsIl9wYWRkaW5nIiwiX2JhY2tncm91bmREaW1lbnNpb25zIiwiYm90dG9tIiwiZ2V0WFlQIiwicmVtb3ZlQXR0ciIsImZpbmQiLCJnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwIiwiZ2V0TG9hZGluZ0NvdW50IiwiaGFuZGxlVHJhY2tpbmciLCJzZXRYWSIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVQb3NpdGlvbnMiLCJfdHJhY2tpbmdfdGltZXIiLCJjbGVhclRyYWNraW5nVGltZXIiLCJzdGFydFRyYWNraW5nIiwiX2hhbmRsZVRyYWNraW5nIiwic3RvcFRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJpc1RyYWNraW5nIiwiY2xlYXJUcmFja2luZyIsImdyZXAiLCJfeHkiLCJzZXRYWVAiLCJfeHlwIiwiVmlldyIsIm9iamVjdCIsImdyb3VwIiwiZXZhbCIsInN1cHBvcnRlZCIsInVwZGF0ZURpbWVuc2lvbnMiLCJfZGltZW5zaW9ucyIsIl9GcmVzY28iLCJfZGlzYWJsZWQiLCJfZmFsbGJhY2siLCJzdGFydERlbGVnYXRpbmciLCJfZGVsZWdhdGVIYW5kbGVyIiwiZGVsZWdhdGUiLCJfc2V0Q2xpY2tYWUhhbmRsZXIiLCJzZXRDbGlja1hZIiwic3RvcERlbGVnYXRpbmciLCJzaG93RmFsbGJhY2siLCJvYmplY3RfdHlwZSIsIl9kZ28iLCJncm91cE9wdGlvbnMiLCJlbGVtZW50cyIsImZpbHRlciIsImdyb3VwRXh0ZW5kIiwiZmlyc3RVSSIsInBvc2l0aW9uSW5BUEciLCJzZXREZWZhdWx0U2tpbiIsIl92YXJzIiwidGh1bWJuYWlsRnJhbWUiLCJzdGFydE9ic2VydmluZyIsIndyYXBwZXIiLCJfc2xpZGVyIiwiX3ByZXZpb3VzIiwiX3ByZXZpb3VzX2J1dHRvbiIsIl90aHVtYnMiLCJfc2xpZGUiLCJfbmV4dCIsIl9uZXh0X2J1dHRvbiIsInNldEFjdGl2ZSIsInByZXZpb3VzUGFnZSIsIm5leHRQYWdlIiwic2V0T3JpZW50YXRpb24iLCJfZGlzYWJsZWRHcm91cCIsIlRodW1ibmFpbCIsIl9wYWdlIiwiZGlzYWJsZWQiLCJ1cGRhdGVWYXJzIiwidyIsInBhZGRpbmdUb3AiLCJzaWRlcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImIiLCJrIiwiQyIsIlciLCJNIiwiVCIsImZsb29yIiwiSSIsImlwcCIsInJvdW5kIiwiX21vZGUiLCJjZWlsIiwidGh1bWJzIiwicmVzaXplIiwibW92ZVRvIiwibW92ZVRvUGFnZSIsImFuaW1hdGUiLCJsb2FkQ3VycmVudFBhZ2UiLCJhY3RpdmF0ZSIsInJlZnJlc2giLCJwcmVCdWlsZCIsInRodW1ibmFpbFdyYXBwZXIiLCJpY29uIiwicmVhZHkiLCJ2aW1lb1RodW1ibmFpbCIsIl9sb2FkaW5nIiwiX3JlbW92ZWQiLCJfY2xlYXJEZWxheSIsIl9sb2FkZWQiLCJfdXJsIiwiX2xvYWQiLCJfZXJyb3IiLCJmYWRlSW5TcGlubmVyIiwiX21vZGVzIiwiX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvciIsIl9lbmFibGVkIiwiZnVsbGNsaWNrIiwiX3Njcm9sbExlZnQiLCJfY2xvc2UiLCJfb25Nb3VzZU1vdmUiLCJ1bmJpbmQiLCJfeCIsIl95IiwicmVzZXRQcmV2TmV4dCIsIl9vbk1vdXNlTGVhdmUiLCJfb25Nb3VzZVVwSGFuZGxlciIsIl9vbk1vdXNlVXAiLCJfc2hvd0hhbmRsZXIiLCJfaGlkZUhhbmRsZXIiLCJfbW91c2Vtb3ZlSGFuZGxlciIsIl9ob3ZlcmluZ1NpZGVCdXR0b24iLCJzdGFydFRpbWVyIiwiX29uTW91c2VNb3ZlSGFuZGxlciIsIl9vbk1vdXNlTGVhdmVIYW5kbGVyIiwiX29uTW91c2VFbnRlckhhbmRsZXIiLCJfb25Nb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyIiwiX29uU2lkZU1vdXNlRW50ZXIiLCJfb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIiLCJfb25TaWRlTW91c2VMZWF2ZSIsIl9vblNjcm9sbEhhbmRsZXIiLCJzY3JvbGxMZWZ0IiwiX2dldEV2ZW50U2lkZSIsIl9ob3ZlcmluZ1NpZGUiLCJfbWF5Q2xpY2tIb3ZlcmluZ1NpZGUiLCJ3aGljaCIsImNsZWFyVGltZXIiLCJpbnNpZGUiLCJfZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlIiwib3V0c2lkZSIsInJlc2l6ZU1haW5Db250YWluZXIiLCJmb290ZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwibmF2YmFyQ29sbGFwc2VJbml0IiwialF1ZXJ5IiwiY29sbGFwc2UiLCJtZWdhbWVudUZ1bmN0aW9ucyIsImNsb3NlTW9iaWxlTWVudSIsIm9wZW5Nb2JpbGVNZW51IiwiZXZlbnQiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJoZWFkZXJPdXRlckhlaWdodCIsInByb2R1Y3RDb250YWluZXJIZWlnaHQiLCJyZXNpemVNZW51IiwiaGVhZGVySGVpZ2h0Iiwib2ZmY2FudmFzX2lkIiwiZGl2VG9PcGVuIiwib3JkZXJzR3JpZEZ1bmN0aW9ucyIsInByZXYiLCJ0b29sdGlwIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsImVsZW0iLCJjYXJvdXNlbCIsIm1haW5GdW5jdGlvbnMiLCJjcmVhdGVDYXJvdXNlbCIsImNyZWF0ZVByb2R1Y3RDYXJvdXNlbCIsImNhcm91c2VsRWxlbWVudCIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFwcGVuZEFycm93cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2xpY2siLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJyZXBsYWNlQ2Fyb3VzZWxBcnJvdyIsImlzQ2FydEl0ZW1zQ2Fyb3VzZWwiLCJtb2JpbGVGaXJzdCIsInJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCIsInVuc2xpY2tlZCIsImNyZWF0ZUFkZHJlc3NDYXJvdXNlbCIsIm9wdHMiLCJyb3dzIiwic2xpZGVzUGVyUm93IiwiYWRhcHRpdmVIZWlnaHQiLCJ2aXNpYmxlU2xpZGVyRGl2IiwiY3JlYXRlR2FsbGVyeURlc2t0b3AiLCJpbWFnZXMiLCJpbmRleCIsImhlaWdodENvbnRlbnQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpbWdTZWxlY3RvciIsImltZ1NsaWRlckhlaWdodCIsImFycm93VG9wVmFsdWUiLCJub3QiLCJib2R5Q29udGFpbmVyIiwiY2FydCIsIm5ld1F0eSIsInZhbCIsImlucHV0UXR5TmFtZSIsImNvdXBvbiIsImJvbnVzUG9pbnRzIiwic2F2ZUJ1dHRvbiIsImNhbmNlbEJ0biIsImNoZWNrb3V0IiwiYWRkcmVzc1R5cGUiLCJnZXRDbGFzc0xpc3QiLCJtYW5hZ2VBZGRyZXNzVHlwZSIsImNob29zZUFkZHJlc3MiLCJzaG93QWRkRm9ybSIsImZpZWxkIiwiZmllbGROYW1lIiwidG9TYXZlIiwidG9SZXBsYWNlIiwiY2hlY2tvdXRTYXZlQWRkcmVzcyIsImZpbGxBbGxBZGRyZXNzZXMiLCJzdWJtaXQiLCJoaWRlQ2hhbmdlQWRkcmVzcyIsImhpZGVTYXZlQWRkcmVzc0Zvcm0iLCJjYW5jZWxDaGFuZ2VBZGRyZXNzIiwiZmllbGRTZWxlY3RvciIsImZvcm1GaWVsZCIsImNob3NlbkFkZHJlc3NUZXh0IiwiY2hvc2VuVmFsdWUiLCJ0ZXh0Iiwic3Vic3RyaW5nIiwidHJpbSIsImdldERhdGFGaWVsZE5hbWUiLCJwcm9wIiwiZmlsbE90aGVyQWRkcmVzcyIsImFqYXgiLCJzZXJpYWxpemUiLCJkYXRhU3VjY2Vzc0RpdiIsIm5vQWRkcmVzcyIsImZpbGxEYXRhQWZ0ZXJTYXZlIiwiZ2V0T3RoZXJBZGRyZXNzVHlwZSIsInNob3dNYWluRm9ybSIsInBhcnNlSFRNTCIsInJlc3BvbnNlVGV4dCIsImZpZWxkRXJyb3IiLCJhZnRlciIsImZpbGxBZGRyZXNzIiwiZmllbGRJZCIsImtlZXBDYW1lbEZpZWxkIiwiZGF0YVRvRmlsbCIsInJlZ2V4IiwiaW5jbHVkZXMiLCJvdGhlckFkZHJlc3NUeXBlIiwiZmlsbE90aGVyRm9ybSIsIm90aGVyRmllbGRJZCIsImlkVG9GaWxsIiwibmV3VmFsdWUiLCJmb3JtRmllbGROYW1lIiwiZmllbGRUb1JlcGxhY2UiLCJvbGREYXRhIiwiY2xhc3NOYW1lIiwiZmllbGROYW1lcyIsImtleXMiLCJ0ZXh0VG9SZXBsYWNlIiwic2VsZWN0b3JUeXBlIiwibWF0Y2hlcyIsImNvbnRhY3RQYWdlIiwibW9kYWwiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJ0b0FycmF5Iiwib3V0ZXJUZXh0IiwibG9naW5QYWdlIiwibW9kYWxJZCIsImZvcm1FbGVtZW50IiwidmVyaWZ5QWNjb3VudE9iamVjdCIsInJlZ2lzdGVyRm9ybSIsImlucHV0UmVnaXN0ZXJGb3JtIiwiaW52YWxpZFNwYW4iLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yIiwicHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSIsInByaWNlTWluU2VsZWN0b3IiLCJwcmljZU1heFNlbGVjdG9yIiwicHJvZHVjdCIsImJ1bmRsZUl0ZW0iLCJ2YXJpYW50TGlzdENvbnRhaW5lciIsImFkZFRvQ2FydEZvcm0iLCJzZWxlY3RlZFNpemUiLCJidW5kbGVJdGVtc0NvdW50IiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9h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S0Q7QUFDRixDQXZDRDs7a0JBeUNlWCxZOzs7Ozs7Ozs7Ozs7O0FDN0NmO0FBQWUsZ0hBQWlELEU7Ozs7Ozs7Ozs7OztBQ0FoRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9yLnJlc3BvbnNlLmRhdGEpLmZvckVhY2goKFssIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2UuZXJyb3JzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNMb2FkYWJsZUZvcm1zO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2FjY291bnQtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYmFjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL25leHQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWZyLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1kZS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24taXQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVzLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JlbG9hZC5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbi8vIEdFTkVSQUwgRlVOQ1RJT05TXG5pbXBvcnQgeyBjYXJvdXNlbCwgcmVwbGFjZUNhcm91c2VsQXJyb3csIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCwgY3JlYXRlR2FsbGVyeURlc2t0b3AgfSBmcm9tICcuL2pzL2Nhcm91c2VsLmpzJztcbmltcG9ydCBjaGVja291dCBmcm9tICcuL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHtwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudX0gZnJvbSAnLi9qcy9wcm9kdWN0LW5vYmxlc3MnO1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9qcy9jYXJ0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHNoYXJlUHJvZHVjdCBmcm9tICcuL2pzL3NoYXJlLXByb2R1Y3QuanMnO1xuaW1wb3J0IGxvZ2luUGFnZSBmcm9tICcuL2pzL2xvZ2luLW5vYmxlc3MuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vanMvY29udGFjdC1ub2JsZXNzJztcbi8vIE1FTlUgRlVOQ1RJT05TXG4vLyBPUkRFUlMgR1JJRCBGVU5DVElPTlNcblxuXG4vKipcbiAqIFJlc2l6ZSBmdW5jdGlvbiB0byBrZWVwIGFsbCB0aGUgbWFpbi1jb250ZW50IHZpc2libGVcbiAqL1xuZnVuY3Rpb24gcmVzaXplTWFpbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCI7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAvKiQoJyNtYWluQ29udGVudENvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Ki9cblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKVxuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyVGF4b25zJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyQWNjb3VudExpbmtzJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlUHJvZHVjdCgpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlUHJvZHVjdCgpO1xuICBwcm9kdWN0KCk7XG4gIGZpbHRlclByb2R1Y3RzKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICBvcmRlcnNHcmlkRnVuY3Rpb25zKCk7XG4gIGxvZ2luUGFnZSgpO1xuICBjYXJ0KCk7XG4gIGNoZWNrb3V0KCk7XG5cbiAgY29udGFjdFBhZ2UoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgLyppZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9Ki9cbiAgLy8gU2hvdyBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51Jykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBZGRUb0NhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG4vL2ltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuLy8gaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICAvL1N5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgLy8gY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICAvLyB9XG4gIC8vIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICAvLyBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIC8vIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUk9VU0VMIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBGcmVzY28gZnJvbSAnLi4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG5jb25zdCBjYXJvdXNlbCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcblxuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI3Byb2R1Y3RHYWxsZXJ5JykpO1xuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgbWFpbiBjYXJvdXNlbHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG5cbiAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGlzQ2FydEl0ZW1zQ2Fyb3VzZWwgPSAoY2Fyb3VzZWxFbGVtZW50ID09PSAkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrICYmIGNhcm91c2VsRWxlbWVudFswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGlzQ2FydEl0ZW1zQ2Fyb3VzZWwpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihzbGljayl7XG4gICAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGNhcm91c2VsIHdoZW4gdXNlciBoYXZlIG1vcmUgdGhhbiA0IGFkZHJlc3NlcyBpbiBDaGVja291dFxuICovXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICByb3dzOiAyLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzbGlkZXNQZXJSb3c6IDIsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByb3dzOiAzLFxuICAgICAgICAgIHNsaWRlc1BlclJvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IHZpc2libGVTbGlkZXJEaXYgPSAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdkLW5vbmUnKTtcbiAgaWYodmlzaWJsZVNsaWRlckRpdiAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9IGVsc2UgaWYgKGNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljaygndW5zbGljaycpO1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRzKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJlc2NvLXNsaWRlJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBGcmVzY28uc2hvdyhcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICB7XG4gICAgICAgICAgdGh1bWJuYWlsczogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBOdW1iZXIoaW5kZXggKyAxKVxuICAgICAgKTtcblxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIHZlcnRpY2FsbHlcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NlbGVjdG9yID0gJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCc7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGxldCBhcnJvd1RvcFZhbHVlO1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKGltZ1NlbGVjdG9yLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIGNhcm91c2VsIGFycm93cyBvbmx5IG9uIGNhcnQgaXRlbXMgY2Fyb3VzZWxcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydChlbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgaW1nJywgZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0KTtcbiAgJChlbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG59XG5cbmV4cG9ydCB7Y2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCwgY3JlYXRlR2FsbGVyeURlc2t0b3B9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUlQgUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjb250YWluZXIgPSAkKCcjY2FydFBhZ2UnKTtcbmNvbnN0IGJvZHlDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IGNhcnQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBXaGVuIHJlbG9hZGluZyBxdWFudGl0aWVzXG4gIC8vIERlc2t0b3BcbiAgJCgnLnJlbG9hZC1xdHknLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1vYmlsZVxuICAkKCcubW9iaWxlLXF0eScsIGNvbnRhaW5lcikub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSk7XG4gICAgaWYgKG5ld1F0eSA8PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgY29uc3QgaW5wdXRRdHlOYW1lID0gJCh0aGlzKS5kYXRhKCdpbnB1dC1xdHknKTtcbiAgICAgICQoJ2lucHV0W25hbWU9XCInICsgaW5wdXRRdHlOYW1lICsgJ1wiXScpLnZhbChuZXdRdHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUHJldmVudCBjdXN0b21lciB0byBhZGQgbW9yZSB0aGFuIDUgdGltZXMgYSBwcm9kdWN0XG4gICQoJy5xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHBhcnNlSW50KCQodGhpcykudmFsKCkpID49IHBhcnNlSW50KCQodGhpcykuYXR0cignbWF4JykpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21heCcpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGNvdXBvbiBjb2RlXG4gICQoJy5jb3Vwb24tY29kZS1idG4nLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGNvdXBvbiBjb2RlXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGNvdXBvbiA9ICQoJy5jb3Vwb24tY29kZScpLnZhbCgpO1xuICAgICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICAgIH1cblxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBjb3Vwb24gY29kZSBpbnB1dCBpcyBmaWxsZWQsIGhpZGUgZXJyb3IgY29udGFpbmVyXG4gIGJvZHlDb250YWluZXIub24oXCJrZXlkb3duXCIsIFwiLmNvdXBvbi1jb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIGlmKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJywgY29udGFpbmVyKS5odG1sKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5jb3Vwb24taW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5jb3Vwb24tY29kZScpLnZhbCgkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKCkpO1xuICB9XG5cbiAgLy8gQXBwbHkgYm9udXMgcG9pbnRzXG4gICQoJy5ib251cy1wb2ludHMtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBib251c1BvaW50cyA9ICQoJy5ib251cy1wb2ludHMnKS52YWwoKTtcbiAgICAgIGlmIChib251c1BvaW50cyA9PT0gJycpIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbChib251c1BvaW50cyk7XG4gICAgICB9XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcuZGVsZXRlLWJvbnVzLXBvaW50cycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYm9udXMgcG9pbnRzXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGJvbnVzIHBvaW50cyBpbnB1dCBpcyBmaWxsZWQsIGhpZGUgZXJyb3IgY29udGFpbmVyXG4gIGJvZHlDb250YWluZXIub24oXCJrZXlkb3duXCIsIFwiLmJvbnVzLXBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJywgY29udGFpbmVyKS5odG1sKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5ib251cy1wb2ludHMtaW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmJvbnVzLXBvaW50cycpLnZhbCgkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoKSk7XG4gIH1cblxuICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBidXR0b24gbGlua2VkIHRvIGNoZWNrb3V0IHBhZ2VcbiAgJCgnYS5idG4tdG8tY2hlY2tvdXQnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcnQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDSEVDS09VVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7IGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuXG4vLyBNYWluIGZ1bmN0aW9uIHVzZWQgaW4gaW5pdFxuY29uc3Qgc2F2ZUJ1dHRvbiA9ICQoJyNjaGVja291dFBhZ2UgLnNhdmUtaW4tYWNjb3VudCcpO1xuY29uc3QgY2FuY2VsQnRuID0gJCgnI2NoZWNrb3V0UGFnZSAuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJyk7XG5cbmNvbnN0IGNoZWNrb3V0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gJCgnI2NoZWNrb3V0UGFnZScpO1xuICAvLyBXaGVuIHRoZSB1c2VyIHdhbnRzIHRvIGNoYW5nZSBoaXMgYWRkcmVzc1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY2xpY2tlZCcpICYmICEkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG5cbiAgICAgIGNhbmNlbEJ0bi5zaG93KCk7XG4gICAgICBjYW5jZWxCdG4ucHJldigpLmhpZGUoKTtcblxuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdjaGFuZ2UnLCBjb250YWluZXIpO1xuICAgICAgY3JlYXRlQWRkcmVzc0Nhcm91c2VsKCQoJyNjYXJvdXNlbEFkZHJlc3NMaXN0JykpO1xuICAgICAgLy8gQ3JlYXRlIGV2ZW50IG9uIGFkZHJlc3MgaXRlbSBhZnRlciBjYXJvdXNlbCBpcyBvcGVuXG4gICAgICAkKCcuY2hvb3NlLWFkZHJlc3MgLmNob29zZS1hZGRyZXNzLWl0ZW0gYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjaG9vc2VBZGRyZXNzKCQodGhpcyksIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICAgIC8vIFdoZW4gdXNlciB3YW50cyB0byBhZGQgYSBuZXcgYWRkcmVzcyB0byBoaXMgYWNjb3VudFxuICAkKCdhLmNoZWNrb3V0LWFkZC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KCQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MuY2xpY2tlZCcsIGNvbnRhaW5lcilbMF0pWzFdO1xuICAgIHNob3dBZGRGb3JtKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnYWRkJywgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIHNhdmUgYSBuZXcgYWRkcmVzc1xuICBzYXZlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFkZHJlc3NUeXBlID0gJ3NoaXBwaW5nJztcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpKSB7XG4gICAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVszXTtcbiAgICAgICQoJyNjaGVja291dFBhZ2UgLmRhdGEtJyArIGFkZHJlc3NUeXBlKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZCArICddJztcbiAgICAgICAgY29uc3QgdG9TYXZlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZE5hbWU7XG4gICAgICAgIGNvbnN0IHRvUmVwbGFjZSA9ICcuY2hhbmdlLScrIGFkZHJlc3NUeXBlICsnLWFkZHJlc3MgJyArIGZpZWxkTmFtZTtcbiAgICAgICAgJCh0b1JlcGxhY2UpLnZhbCgkKHRvU2F2ZSkudmFsKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrb3V0U2F2ZUFkZHJlc3ModGhpcywgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBjbGlja3Mgb24gYWRkcmVzcyBwYWdlIG5leHQgYnV0dG9uXG4gICQoJy5tYWluLWFkZHJlc3MtZm9ybSBidXR0b24uYnRuLXByaW1hcnknLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRDbGFzcygnbG9hZGluZycpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIC8vIFdoZW4gdXNlciBjYW5jZWxzIHRoZSBhZGRyZXNzIGNoYW5nZXNcbiAgJCgnYS5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgY2FuY2VsQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBhZGRcbiAgJCgnYS5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG4vLyBXaGVuIHVzZXIgY2hvc2UgYW4gYWRkcmVzcyBpcyB0aGUgYWRkcmVzc2VzIGxpc3RcbmZ1bmN0aW9uIGNob29zZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuZGF0YS1hZGRyZXNzJywgZWxlbWVudCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgY29uc3QgZmllbGRTZWxlY3RvciA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGRTZWxlY3RvcjtcbiAgICBjb25zdCBjaG9zZW5BZGRyZXNzVGV4dCA9ICcuZGF0YS0nKyBhZGRyZXNzVHlwZSArJy4nICsgZmllbGROYW1lO1xuXG4gICAgbGV0IGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgJChjaG9zZW5BZGRyZXNzVGV4dCkudGV4dChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBjaG9zZW5WYWx1ZSA9ICQodGhpcykudGV4dCgpLnN1YnN0cmluZygwLCAyKTtcbiAgICB9XG4gICAgJChmb3JtRmllbGQpLnZhbChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICAgIGlmICgkKHRoaXMpLnRleHQoKS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS5jbG9zZXN0KCdhZGRyZXNzJykuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBjaG9zZW5WYWx1ZSk7XG4gIH0pO1xuICAkKCcjc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbn1cblxuLyogU2F2ZSBhZGRyZXNzIGluIHVzZXIgYWNjb3VudCA6IFJldHVybnMgZXJyb3JzIGluIGZvcm0gaWYgbm90IHZhbGlkICovXG5mdW5jdGlvbiBjaGVja291dFNhdmVBZGRyZXNzKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgY29uc3QgZm9ybSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnZm9ybScpO1xuICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc190eXBlXCJdJywgZm9ybSkudmFsKGFkZHJlc3NUeXBlKTtcbiAgZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc3QgZGF0YVN1Y2Nlc3NEaXYgPSAkKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IG5vQWRkcmVzcyA9IHNhdmVCdXR0b24uaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpO1xuICAgICAgaWYoZGF0YVN1Y2Nlc3NEaXYuaGFzQ2xhc3MoJ3NhdmUtYWRkcmVzcy1zdWNjZXNzJykpIHtcbiAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcblxuICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKHRoaXMsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICAvLyBJZiBVc2VyIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgICAgICAgICBpZiAobm9BZGRyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICcuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKCcuYWRkcmVzcy1ib29rJywgY29udGFpbmVyKS5odG1sKCQoJy5hZGRyZXNzLWJvb2snLCBkYXRhU3VjY2Vzc0RpdikuaHRtbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAkKCcubm8tYWRkcmVzc2VzLXRleHQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICBzaG93TWFpbkZvcm0oY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICQodGhpcykuY2xvc2VzdCgnbGFiZWwnKS5hdHRyKCdmb3InKTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2lkPVwiJysgZmllbGROYW1lICsnXCJdJywgY29udGFpbmVyKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1lcnJvci1tZXNzYWdlIGQtYmxvY2tcIj4nICsgZmllbGRFcnJvciArICc8L3NwYW4+PC9zcGFuPicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KVxufVxuXG4vKiBGaWxsIGFkZHJlc3MgZm9ybSBmaWVsZHMgdG8gYXZvaWQgZXJyb3JzICovXG5mdW5jdGlvbiBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGtlZXBDYW1lbEZpZWxkID0gWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnY291bnRyeUNvZGUnXTtcbiAgY29uc3QgZGF0YVRvRmlsbCA9ICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5kYXRhKCk7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoIWtlZXBDYW1lbEZpZWxkLmluY2x1ZGVzKGZpZWxkTmFtZSkpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICAkKHRoaXMpLnZhbChkYXRhVG9GaWxsW2ZpZWxkTmFtZV0pO1xuICB9KTtcbiAgJCgnI2luQWNjb3VudF9zYXZlX2RpZmZlcmVudEJpbGxpbmdBZGRyZXNzJywgY29udGFpbmVyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG59XG5cbi8qIEZpbGwgYWRkcmVzc2VzIHdoZW4gdXNlciBjbGlja3Mgb24gbmV4dCBidXR0b24gKi9cbmZ1bmN0aW9uIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKSB7XG4gIFsnc2hpcHBpbmcnLCAnYmlsbGluZyddLmZvckVhY2goKGFkZHJlc3NUeXBlKSA9PiB7XG4gICAgY29uc3QgZmllbGRJZCA9ICdzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc18nICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzcyc7XG4gICAgZmlsbEFkZHJlc3MoZmllbGRJZCwgYWRkcmVzc1R5cGUsICcubWFpbi1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpXG4gIH0pXG59XG5cbi8qIEZpbGwgb3RoZXIgYWRkcmVzcyB0eXBlIGZvcm0gd2hlbiBzYXZpbmcgbmV3IGFkZHJlc3MgKi9cbmZ1bmN0aW9uIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBvdGhlckFkZHJlc3NUeXBlID0gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSk7XG4gIGxldCBmaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBvdGhlckFkZHJlc3NUeXBlO1xuICBpZiAoc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfVxufVxuXG4vLyBGaWxsIG90aGVyIG5ldyBhZGRyZXNzIGZvcm0gT05MWSBJRiB1c2VyIGRvbid0IGhhdmUgYWRkcmVzc2VzIHlldFxuZnVuY3Rpb24gZmlsbE90aGVyRm9ybShhZGRyZXNzVHlwZSwgb3RoZXJBZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIGFkZHJlc3NUeXBlO1xuICBjb25zdCBvdGhlckZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoZmllbGROYW1lICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgY29uc3QgaWRUb0ZpbGwgPSAnIycgKyBvdGhlckZpZWxkSWQgKyAnXycgKyBmaWVsZE5hbWU7XG4gICAgJChpZFRvRmlsbCkudmFsKCQodGhpcykudmFsKCkpO1xuICB9KTtcbn1cblxuLy8gRmlsbCBmb3JtIGFuZCBkaXYgZGF0YSB3aGVuIHNhdmUgbmV3IGFkZHJlc3NcbmZ1bmN0aW9uIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGNvbnRhaW5lcikge1xuICAvLyBHZXQgdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICBjb25zdCBuZXdWYWx1ZSA9ICQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBjb250YWluZXIpLmh0bWwoKTtcblxuICAvLyBDcmVhdGUgbWFpbiBmb3JtIGZpZWxkIHNlbGVjdG9yXG4gIGNvbnN0IGZvcm1GaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddJztcbiAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgLy8gUmVwbGFjZSBmaWVsZCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChmaWVsZFRvUmVwbGFjZSkudmFsKG5ld1ZhbHVlKTtcblxuICAvLyBSZXBsYWNlIHRleHQgd2l0aCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gICQoZWxlbWVudCkudGV4dChuZXdWYWx1ZSk7XG4gIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAkKGVsZW1lbnQpLnRleHQoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLmNvdW50cnlOYW1lJywgY29udGFpbmVyKS5odG1sKCkpO1xuICB9XG5cbiAgLy8gU2hvdyBvciBoaWRlIHN0cmVldDIgY29udGFpbmVyIGFjY29yZGluZyB0byB2YWx1ZVxuICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICBpZiAoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbGwgYWRkcmVzcyBkaXYgZGF0YVxuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSkuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBuZXdWYWx1ZSk7XG59XG5cbi8qIFNob3cgTWFpbiBmb3JtIHdoZW4gdXNlciBoYXZlIG5vIGFkZHJlc3NlcyAqL1xuZnVuY3Rpb24gc2hvd01haW5Gb3JtKGNvbnRhaW5lcikge1xuICAvLyBIaWRlIGRpdiBtZW50aW9uaW5nIHRoYXQgdXNlIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgJCgnLm5vLWFkZHJlc3MteWV0JywgY29udGFpbmVyKS5yZW1vdmUoKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybVxuICAkKCcuYWRkLXNoaXBwaW5nLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIC8vIEhpZGUgYWRkIG5ldyBhZGRyZXNzIGZvcm0gdGl0bGVcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAudXNlJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAuYWRkJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gIC8vIFNob3cgbmF2aWdhdGlvbiBidXR0b25zIGZyb20gbWFpbiBmb3JtXG4gICQoJy5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5uZXh0KCdhLmJ0bicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn1cblxuLyogSGlkZSBhZGRyZXNzIG1vZGlmaWNhdGlvbiBjb250YWluZXIgKi9cbmZ1bmN0aW9uIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICBjYW5jZWxCdG4uaGlkZSgpO1xuICBjYW5jZWxCdG4ucHJldigpLnNob3coKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKVswXS5zY3JvbGxUb3AgPSAwO1xufVxuXG4vKiBSZW1vdmUgZXJyb3IgaW5kaWNhdG9ycyB3aGVuIHNhdmUgYWRkcmVzcyBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuZnVuY3Rpb24gaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpIHtcbiAgLy8gVXNlIGFkZHJlc3NUeXBlIGNob3NlbiB3aGVuIHNhdmUgZm9ybSBpcyBzaG93blxuICBsZXQgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3Qoc2F2ZUJ1dHRvblswXSlbM107XG4gIGlmIChhZGRyZXNzVHlwZSA9PT0gJ25vLWFkZHJlc3NlcycpIHtcbiAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVs0XTtcbiAgfVxuICAkKCcuY2hhbmdlLScgKyBhZGRyZXNzVHlwZSArICctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoYW5nZS0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dCwgLnNhdmUtYWRkcmVzcy1mb3JtIHNlbGVjdCcsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5pbnZhbGlkLWZlZWRiYWNrJywgY29udGFpbmVyKS5yZW1vdmUoKTtcbn1cblxuLyogUmVwbGFjZSBhbGwgZm9ybSBhbmQgZGlzcGxheWVkIGFkZHJlc3MgZGF0YSB3aGVuIGNhbmNlbCBtb2RpZmljYXRpb25zICovXG5mdW5jdGlvbiBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvbGREYXRhID0gJCh0aGlzKS5kYXRhKCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSAodGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKSlbMV07XG4gICAgY29uc3QgZmllbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZERhdGEpO1xuXG4gICAgZmllbGROYW1lcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgZmllbGROYW1lID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnY291bnRyeU5hbWUnKSB7XG4gICAgICAgIGZpZWxkTmFtZSA9ICdjb3VudHJ5Q29kZSdcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRUb1JlcGxhY2UgPSAnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy4nICsgZmllbGROYW1lO1xuICAgICAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgICAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gICAgICAvLyBTZXQgZm9ybSB3aXRoIG9sZCBkYXRhXG4gICAgICAkKGZpZWxkVG9SZXBsYWNlLCBjb250YWluZXIpLnZhbChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIGlmIChlbGVtZW50ICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICAgIC8vIFNldCBjaG9zZW4gQWRkcmVzcyB3aXRoIG9sZCBkYXRhXG4gICAgICAgICQodGV4dFRvUmVwbGFjZSkudGV4dChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIFNob3cgYWRkIGFkZHJlc3MgZm9ybVxuZnVuY3Rpb24gc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJywgY29udGFpbmVyKS52YWwoJycpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG5cbiAgLy8gSGlkZSBhbGwgc2F2ZSBhZGRyZXNzIGZvcm1zIGJlZm9yZSBzaG93aW5nIHRoZSBjaG9zZW4gb25lXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmFkZC0nICsgYWRkcmVzc1R5cGUgKyAnLWFkZHJlc3MnLCBjb250YWluZXIpLnNob3coKTtcbn1cblxuLyogTWFuYWdlIHdoYXQgdHlwZSBvZiBhZGRyZXNzIHdpbGwgYmUgcmVwbGFjZSBhbmQvb3Igc2F2ZWQgKi9cbmZ1bmN0aW9uIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCBzZWxlY3RvclR5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gIC8vIEFsc28gTWFuYWdlIFNhdmVCdXR0b24gY2xhc3NcbiAgc2F2ZUJ1dHRvbi5hZGRDbGFzcyhhZGRyZXNzVHlwZSk7XG4gIHNhdmVCdXR0b24ucmVtb3ZlQ2xhc3MoZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT01NT04gRlVOQ1RJT05TICovXG4vKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEdldCBjbGFzcyBsaXN0IGZyb20gZ2l2ZW4gZWxlbWVudFxuZnVuY3Rpb24gZ2V0Q2xhc3NMaXN0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG59XG5cbi8vIEdldCBmaWVsZCBuYW1lIHRvIGZpbGwgZGF0YSBpbmZvIGluIC5jYW5jZWwtaW5mbyBkaXZcbmZ1bmN0aW9uIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSAvW0EtWl0vZ20uZXhlYyhmaWVsZE5hbWUpO1xuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoZmllbGROYW1lLnN1YnN0cigwLCBtYXRjaGVzLmluZGV4KSArICctJyArIGZpZWxkTmFtZS5zdWJzdHIobWF0Y2hlcy5pbmRleCwgZmllbGROYW1lLmxlbmd0aCkpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGROYW1lO1xufVxuXG4vLyBHZXQgb3RoZXIgYWRkcmVzcyB0eXBlIGZyb20gYWRkcmVzcyB0eXBlIGdpdmVcbmZ1bmN0aW9uIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpIHtcbiAgcmV0dXJuIChhZGRyZXNzVHlwZSA9PT0gJ3NoaXBwaW5nJykgPyAnYmlsbGluZycgOiAnc2hpcHBpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja291dDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT05UQUNUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgY29udGFjdFBhZ2UgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBBamF4IGNhbGwgd2hlbiBjb250YWN0IGZvcm0gaXMgc3VibWl0dGVkXG4gICQoJyNjb250YWN0UGFnZSBmb3JtIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsIC5tb2RhbC1ib2R5IGRpdicpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAvLyBEZWxldGUgYWxsIGVycm9ycyBvZiBmb3JtIHdoZW4gc3VjY2Vzc1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0nKS52YWwoJycpLnByb3AoIFwiY2hlY2tlZFwiLCBmYWxzZSApO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0sICNjb250YWN0UGFnZSBbZm9yXj1cInN5bGl1c19jb250YWN0X1wiXScpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDYpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgZXJyb3JMaXN0ID0gJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCdzcGFuJykudG9BcnJheSgpO1xuICAgICAgICAgIGVycm9yTGlzdC5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5vdXRlclRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5jbGFzc05hbWUgIT09ICdhY2NlcHRDZ3YnKSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICAgICAgICAgICAgLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPicgKyBlcnJvci5vdXRlclRleHQgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLm5leHQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MTcpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2UgLmNvbnRhY3QtZXJyb3InKS5odG1sKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIC8vIEFkZCBuZXcgZmllbGQgd2hlbiBjaG9zZW4gc3ViamVjdCBpcyBcIm90aGVyXCJcbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIExPR0lOIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGxvZ2luUGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE9wZW4gcmVzZXQgcGFzc3dvcmQgbW9kYWxcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG5cbiAgLy8gT25seSB3aGVuIGNsYXNzIGxvZ2luLWZvcm0gZXhpc3RzIGluIHBhZ2VcbiAgaWYoJCgnLmxvZ2luLWZvcm0nKSkge1xuICAgICQoJy5zdWJtaXQtbG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRWxlbWVudCA9ICQodGhpcykuZGF0YSgnZm9ybScpO1xuICAgICAgJChmb3JtRWxlbWVudCkuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgdmVyaWZ5LWFjY291bnQgZXhpc3RzIGluIHBhZ2VcbiAgY29uc3QgdmVyaWZ5QWNjb3VudE9iamVjdCA9ICQoJy52ZXJpZnktYWNjb3VudCcpO1xuICBpZih2ZXJpZnlBY2NvdW50T2JqZWN0KSB7XG4gICAgdmVyaWZ5QWNjb3VudE9iamVjdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiByZXNldFBhc3N3b3JkU3VibWl0IGJ1dHRvbiBleGlzdHMgaW4gcGFnZSwgQWpheCBjYWxsIHRvIHJlc2V0IHBhc3N3b3JkXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50Om5vdCguc3VjY2VzcyknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKCcubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9ycyAuZm9ybS1lcnJvci1tZXNzYWdlJykudGV4dCgkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9ycyB1bCBsaScpLnRleHQoKSk7XG4gICAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gQWN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgdmFsaWQgYmVmb3JlIHN1Ym1pdCByZWdpc3RlciBmb3JtXG4gICQoJ2J1dHRvbi5zdWJtaXQtcmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICQoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpKTtcbiAgICBjb25zdCBpbnB1dFJlZ2lzdGVyRm9ybSA9IHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsID0gaW5wdXRSZWdpc3RlckZvcm0udmFsKCk7XG4gICAgY29uc3QgaW52YWxpZFNwYW4gPSBpbnB1dFJlZ2lzdGVyRm9ybS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJyk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBpbnZhbGlkU3Bhbi5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFNwYW4uYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIGlucHV0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGVtYWlsIGZpZWxkIGlzIGZpbGxlZCBhbmQgY3VzdG9tZXIgd2FudHMgdG8gbW9kaWZ5IGl0cyB2YWx1ZVxuICAkKCcucmVnaXN0ZXItZm9ybSBpbnB1dCwgLmhlYWRlci1yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IGVtYWlsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5QYWdlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3IgPSAnI3Byb2R1Y3RzRmlsdGVycyc7XG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlID0gJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnO1xuXG5jb25zdCBwcmljZU1pblNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nO1xuY29uc3QgcHJpY2VNYXhTZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJztcblxuY29uc3QgcHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE1hbmFnZSB2YXJpYW50IGxpc3Qgd2hlbiBjbGlja2luZyBpbiBzaXplIGF2YWlsYWJsZVxuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnVuZGxlSXRlbSA9ICQodGhpcykuZGF0YSgnYnVuZGxlLWl0ZW0nKTtcbiAgICBjb25zdCB2YXJpYW50TGlzdENvbnRhaW5lciA9ICQodGhpcykuY2xvc2VzdCgnZGl2LnZhcmlhbnQtbGlzdCcpO1xuXG4gICAgaWYoYnVuZGxlSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcudmFyaWFudC1uYW1lW2RhdGEtYnVuZGxlLWl0ZW09XCInICsgYnVuZGxlSXRlbSArICdcIl0nKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWUnKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICAkKCcuaW52YWxpZC1mZWVkYmFjaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcblxuICAgIGlmICgkKHRoaXMpLmRhdGEoJ2FsbW9zdC1vdXQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgICAkKHRoaXMpLmFkZENsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gIH0pO1xuXG4gIC8vIFNob3cgb3IgaGlkZSB2YXJpYW50cyBsaXN0IGluIHByb2R1Y3RzIGNhcm91c2VsIGFjY29yZGluZyB0byBzY3JlZW4gc2l6ZVxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgICB9XG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAvLyBXaGVuIGNsaWNraW5nIG9uIGFkZCB0byBjYXJ0IGJ1dHRvblxuICAkKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcudmFyaWFudC1saXN0IC5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgIGNvbnN0IHNlbGVjdGVkU2l6ZSA9ICQoJ2lucHV0W25hbWVePVwiJyArICQoYWRkVG9DYXJ0Rm9ybSkuZGF0YSgnbmFtZVRvQ2hlY2snKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aDtcbiAgICBjb25zdCBidW5kbGVJdGVtc0NvdW50ID0gJCgnZGl2LmJ1bmRsZS1pdGVtJykubGVuZ3RoO1xuICAgIGlmKHNlbGVjdGVkU2l6ZSA+IDAgJiYgc2VsZWN0ZWRTaXplIDwgYnVuZGxlSXRlbXNDb3VudCApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3Q6bm90KC5pbnB1dC1jaGVja2VkKScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaXplID09PSAwKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KVxuXG4gICQoJ2lucHV0W2lkXj1cImJpdGJhZ19zeWxpdXNfcHJvZHVjdF9idW5kbGVfcGx1Z2luX2FkZF9wcm9kdWN0X2J1bmRsZV90b19jYXJ0X1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5maW5kKCdzcGFuLmludmFsaWQtZmVlZGJhY2snKS5hZGRDbGFzcygnaW5wdXQtY2hlY2tlZCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICB9KVxufTtcblxuY29uc3QgZmlsdGVyUHJvZHVjdHMgPSBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zKCkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IGNyaXRlcmlhID0gcXVlcnlTdHJpbmcuaW5kZXhPZignY3JpdGVyaWEnKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0Jyk7XG5cbiAgbGV0IHByaWNlU2xpZGVyO1xuICBsZXQgcHJpY2VTbGlkZXJNb2JpbGU7XG5cbiAgaWYgKHByaWNlSW5wdXQubGVuZ3RoID4gMCkge1xuICAgIHByaWNlU2xpZGVyID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvcik7XG4gICAgcHJpY2VTbGlkZXJNb2JpbGUgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKTtcblxuICAgIC8vIFdoZW4gdXNlciBjaGFuZ2VzIHByaWNlIGlucHV0IHZhbHVlXG4gICAgcHJpY2VJbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZihlLndoaWNoICE9PSA4ICYmICFpc05hTihTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSl7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBERVNLVE9QIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnRcbiAgY29uc3Qgc2l6ZUZpbHRlcklucHV0ID0gJCgnI3NpemVGaWx0ZXIgaW5wdXQnKTtcbiAgc2l6ZUZpbHRlcklucHV0LmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuICAgIGlmKHRoaXMuY2hlY2tlZCkge1xuICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnaW5wdXRbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICBzaXplRmlsdGVySW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIC8vIFZhbGlkYXRlIGZpbHRlcnMgb24gZGVza3RvcFxuICAkKCdhLnZhbGlkYXRlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyRm9ybScpLnN1Ym1pdCgpO1xuICB9KTtcblxuICAvKipcbiAgICogTUFOQUdFIE1PQklMRSBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50IG9uIG1vYmlsZVxuICAkKCcjY3JpdGVyaWFTaXplTW9iaWxlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSAkKGUudGFyZ2V0KS5kYXRhKCdpZCcpO1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5yZW1vdmVBdHRyKCdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQuaW5wdXQtc29ydGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyayAuY2hlY2tlZCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJChlLnRhcmdldCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgJChlLnRhcmdldCkubmV4dCgnLmNoZWNrbWFyaycpLmZpbmQoJy5jaGVja2VkJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSk7XG5cbiAgLy8gVmFsaWRhdGUgZmlsdGVyc1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZigkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykudmFsKCkgPT09ICdjcmVhdGVkQXQnKSB7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykucmVtb3ZlKCk7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZy1jcmVhdGVkQXQnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWlubGluZS1ibG9jaycpO1xuICAgIH1cbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gTW9iaWxlIGZpbHRlcnMgYmVoYXZpb3VyXG4gICQoJy5wcm9kdWN0LWZpbHRlcnMuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSkub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdFTkVSQUwgRlVOQ1RJT05TXG4gICAqL1xuICAvLyBIaWRlIHJlaW5pdGlhbGl6YXRpb24gYnV0dG9uIHdoZW4gZmlsdGVycyBoYXZlIG5vIGNyaXRlcmlhXG4gIGlmIChjcml0ZXJpYSAhPT0gLTEpIHtcbiAgICAkKCcucmVpbml0LWZpbHRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICB9XG4gIC8vIEFkZCBhY3Rpb24gdG8gY2xvc2UgaWNvblxuICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5kcm9wZG93bi10b2dnbGUnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkIHRvIGF2b2lkIHNob3dpbmcgZmlsdGVyIG1vYmlsZSBtZW51IG9uIGRlc2t0b3BcbiAqL1xuY29uc3QgcmVzaXplRmlsdGVyTWVudSA9IGZ1bmN0aW9uIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gJCgnI2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlckJhbm5lciA9ICQoJy5oZWFkZXItYmFubmVyJyk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLmhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLm91dGVySGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCA9ICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2ZpbHRlclN1Ym1pdCcpLm91dGVySGVpZ2h0KCkgLSAxMDtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJykuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjZmlsdGVyTGlzdCcpLmNzcygnaGVpZ2h0JywgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByaWNlIHNsaWRlciBvbiB0YXhvbiBwYWdlc1xuICpcbiAqIEBwYXJhbSBwcmljZUlucHV0XG4gKiBAcGFyYW0gY29udGFpbmVyU2VsZWN0b3JcbiAqIEByZXR1cm5zIG5vVWlTbGlkZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgY29uc3QgcHJpY2VDb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgY29uc3QgcHJpY2VSYW5nZSA9ICQoJyNwcmljZVJhbmdlJywgcHJpY2VDb250YWluZXIpWzBdO1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICAvLyBQcmVwYXJlIHNsaWRlciBvcHRpb25zXG4gIGNvbnN0IHRheG9uTWluUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtaW4nKSk7XG4gIGNvbnN0IHRheG9uTWF4UHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtYXgnKSk7XG4gIGNvbnN0IHJhbmdlU2xpZGVyT3B0aW9ucyA9IHtcbiAgICBzdGFydDogW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV0sXG5cbiAgICByYW5nZToge1xuICAgICAgJ21pbic6IFt0YXhvbk1pblByaWNlXSxcbiAgICAgICdtYXgnOiBbdGF4b25NYXhQcmljZV1cbiAgICB9LFxuICAgIHN0ZXA6IDEsXG4gICAgY29ubmVjdDogdHJ1ZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWhhdmlvdXI6ICd0YXAnLFxuICAgIHRvb2x0aXBzOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKHByaWNlUmFuZ2UsIHJhbmdlU2xpZGVyT3B0aW9ucyk7XG4gIHNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIHByaWNlTWluLnZhbChwYXJzZUludChuZXdWYWx1ZVswXSkpO1xuICAgIHByaWNlTWF4LnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICB9KTtcblxuICByZXR1cm4gc2xpZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcblxuICBjb25zdCBuZXdWYWx1ZSA9IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldO1xuICBwcmljZVNsaWRlci5zZXQobmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrIHByaWNlIHZhbHVlcyBiZWZvcmUgc2VuZCBmb3JtXG4gKiBAcGFyYW0gcHJpY2VTbGlkZXJPYmplY3RcbiAqIEBwYXJhbSBwcmljZUNvbnRhaW5lclxuICovXG5mdW5jdGlvbiBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJPYmplY3QsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpLmZpcnN0KCk7XG4gIGxldCBwcmljZU1pblZhbHVlID0gcHJpY2VNaW4udmFsKCk7XG4gIGxldCBwcmljZU1heFZhbHVlID0gcHJpY2VNYXgudmFsKCk7XG4gIGlmIChwcmljZU1pbi52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBpZiAocHJpY2VNaW4udmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgcHJpY2VNaW4udmFsKHByaWNlTWluVmFsdWUpO1xuICBpZiAocHJpY2VNYXgudmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgaWYgKHByaWNlTWF4LnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIHByaWNlTWF4LnZhbChwcmljZU1heFZhbHVlKTtcbiAgcHJpY2VTbGlkZXJPYmplY3Quc2V0KFtwcmljZU1pblZhbHVlLCBwcmljZU1heFZhbHVlXSk7XG59XG5cbmV4cG9ydCB7IHByb2R1Y3QsIGZpbHRlclByb2R1Y3RzLCByZXNpemVGaWx0ZXJNZW51IH07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNIQVJFIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IHNoYXJlUHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlUHJvZHVjdDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==