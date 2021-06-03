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
/* WEBPACK VAR INJECTION */(function(jQuery) {

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

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

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
  (0, _jquery2.default)('#menuButtonMain, #megamenuDropdown').on('mouseenter', function () {
    if (!(0, _jquery2.default)('.dropdown-menu.megamenu').hasClass('show') && (0, _jquery2.default)(document).width() > 1200) {
      (0, _jquery2.default)('#menuButton').trigger('click');
    }
  }).on('mouseleave', function () {
    if ((0, _jquery2.default)('.dropdown-menu.megamenu').hasClass('show') && (0, _jquery2.default)(document).width() > 1200) {
      (0, _jquery2.default)('#menuButton').trigger('click');
    }
  });
  /*$('#mainContentContainer').on('click', function() {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 1200) {
      if ($(document).width() <= 1033) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });*/

  (0, _jquery2.default)('#menuButtonMain').on('click', function () {
    if ((0, _jquery2.default)(document).width() < 1200) {
      if ((0, _jquery2.default)('#navbarMainMobile').hasClass('show')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  }); // Megamenu functions : manage mobile menu

  (0, _jquery2.default)(".screen-overlay").on('click', function (e) {
    closeMobileMenu();
  });
  (0, _jquery2.default)('a.nav-taxon').on('mouseenter', function (event) {
    if ((0, _jquery2.default)(document).width() > 1200) {
      if ((0, _jquery2.default)('div.menu-img-' + (0, _jquery2.default)(this).data('taxon') + ' img').length > 0) {
        (0, _jquery2.default)('div.menu-img').hide();
        (0, _jquery2.default)('div.menu-img-' + (0, _jquery2.default)(this).data('taxon')).show();
      }
    }
  });
  (0, _jquery2.default)("#navbarMainMobile").on("click", function (e) {
    e.stopPropagation();
  });
  (0, _jquery2.default)('.active.locale-link, .navbarTaxonsLink, .log-link').on('click', function (e) {
    developMobileMenu((0, _jquery2.default)(this).data('divToOpen'));
  });
  (0, _jquery2.default)('#openAccountMenu').on('click', function (e) {
    openMobileMenu();
    developMobileMenu((0, _jquery2.default)('.log-link').data('divToOpen'));
  });
  (0, _jquery2.default)('#menuButtonMain .back').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    (0, _jquery2.default)('.navbar > div').hide();
    (0, _jquery2.default)('#navbarMain').show();
    (0, _jquery2.default)('#menuButtonMain .back').hide();
    (0, _jquery2.default)('#menuButtonMain .close').show();
  });
  (0, _jquery2.default)('.dropdown.cart-btn').on('show.bs.dropdown', function () {
    closeMobileMenu();
  });
}

function menuIconesFunctions() {
  (0, _jquery2.default)('.menu-icones .dropdown').on('show.bs.dropdown', function (e) {
    (0, _jquery2.default)(".screen-overlay-cart").addClass("show");

    if ((0, _jquery2.default)(document).width() <= 1200) {
      const headerOuterHeight = (0, _jquery2.default)('#headerContainer').outerHeight() - (0, _jquery2.default)('.header-banner').height();
      const productContainerHeight = (0, _jquery2.default)('.cart-dropdown').height() - (0, _jquery2.default)('header').height() - (0, _jquery2.default)('#cartActions').outerHeight();
      (0, _jquery2.default)('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      (0, _jquery2.default)('#headerCartItems').css('height', productContainerHeight + 'px');
      (0, _jquery2.default)('body').addClass("offcanvas-active");
    }
  });
  (0, _jquery2.default)('.menu-icones .dropdown').on('hidden.bs.dropdown', function (e) {
    (0, _jquery2.default)(".screen-overlay-cart").removeClass("show");

    if ((0, _jquery2.default)(document).width() <= 1200) {
      (0, _jquery2.default)('body').removeClass("offcanvas-active");
    } // Cart Icon


    if ((0, _jquery2.default)(this).closest('.dropdown').hasClass('cart-btn')) {
      (0, _jquery2.default)('#headerCartNewItem').html('');
      (0, _jquery2.default)('#headerCartItems').removeClass('d-none');
      (0, _jquery2.default)('#cartActions .cart-subtotal').addClass('d-flex').removeClass('d-none');
      (0, _jquery2.default)('#cartActions .invalid-feedback').removeClass('d-block');
    }
  });
  (0, _jquery2.default)('.cart-dropdown .close-cart-widget').on('click', function (e) {
    (0, _jquery2.default)('.dropdown.cart-btn .dropdown-toggle').trigger('click');
  });
}

function resizeMenu(element) {
  if ((0, _jquery2.default)(document).width() > 1200) {
    closeMobileMenu();
    (0, _jquery2.default)('#headerCartItems').css('height', '');
    (0, _jquery2.default)(".screen-overlay").removeClass("show");
    (0, _jquery2.default)(".screen-overlay-cart").removeClass("show");
  } else {
    const headerHeight = (0, _jquery2.default)('#headerContainer').height() - (0, _jquery2.default)('.header-banner').height();
    const headerOuterHeight = (0, _jquery2.default)('#headerContainer').outerHeight() - (0, _jquery2.default)('.header-banner').height();
    const productContainerHeight = (0, _jquery2.default)('.cart-dropdown').height() - (0, _jquery2.default)('header').height() - (0, _jquery2.default)('#cartActions').outerHeight();
    (0, _jquery2.default)(element).css('top', headerHeight + 'px');
    (0, _jquery2.default)(element).css('height', 'calc(100% - ' + headerHeight + 'px)');
    (0, _jquery2.default)(element + ' #menuMobileLinks').css('bottom', headerHeight + 'px');
    (0, _jquery2.default)('.screen-overlay').css('top', headerOuterHeight + 'px');
    (0, _jquery2.default)('#headerCartItems').css('height', productContainerHeight + 'px');
  }
}

function openMobileMenu() {
  var offcanvas_id = (0, _jquery2.default)('#menuButton').attr('data-trigger');
  resizeMenu(offcanvas_id);
  (0, _jquery2.default)(offcanvas_id).addClass("show");
  (0, _jquery2.default)('#menuButtonMain').removeClass('show');
  (0, _jquery2.default)('.dropdown a.btn-close').addClass('show');
  (0, _jquery2.default)('body').addClass("offcanvas-active");
  (0, _jquery2.default)(".screen-overlay").addClass("show");
  (0, _jquery2.default)('#navbarMain').show();
  (0, _jquery2.default)('#navbarLocale').hide();
  (0, _jquery2.default)('#navbarTaxons').hide();
  (0, _jquery2.default)('#navbarAccountLinks').hide();
  (0, _jquery2.default)('#menuButtonMain .close').show();
  (0, _jquery2.default)('#menuButtonMain .back').hide();
}

function closeMobileMenu() {
  var offcanvas_id = (0, _jquery2.default)('#menuButton').attr('data-trigger');
  (0, _jquery2.default)(".screen-overlay").removeClass("show");
  (0, _jquery2.default)(".mobile-offcanvas").removeClass("show");
  (0, _jquery2.default)(offcanvas_id).removeClass("show");
  (0, _jquery2.default)("body").removeClass("offcanvas-active");
  (0, _jquery2.default)('.dropdown a.btn-close').removeClass('show');
  (0, _jquery2.default)('#menuButtonMain').addClass('show');
  (0, _jquery2.default)('body').removeClass("offcanvas-active");
  (0, _jquery2.default)(".screen-overlay").removeClass("show");
  (0, _jquery2.default)('#navbarMain').show();
  (0, _jquery2.default)('#navbarLocale').hide();
  (0, _jquery2.default)('#navbarTaxons').hide();
  (0, _jquery2.default)('#navbarAccountLinks').hide();
  (0, _jquery2.default)('#menuButtonMain .close').hide();
  (0, _jquery2.default)('#menuButtonMain .back').hide();
}

function developMobileMenu(divToOpen) {
  if (divToOpen !== undefined) {
    (0, _jquery2.default)('.navbar > div').hide();
    (0, _jquery2.default)(divToOpen).show();
    (0, _jquery2.default)('#menuButtonMain .close').hide();
    (0, _jquery2.default)('#menuButtonMain .back').css('display', 'block');
  }
}

function ordersGridFunctions() {
  // Desktop Accordion
  (0, _jquery2.default)('#orderAccordionDesktop').on('hidden.bs.collapse', function (e) {
    (0, _jquery2.default)(e.target).closest('tr').removeClass('show');
  });
  (0, _jquery2.default)('#orderAccordionDesktop').on('show.bs.collapse', function (e) {
    (0, _jquery2.default)('tr', this).removeClass('show');
    (0, _jquery2.default)(e.target).closest('tr').addClass('show');
  }); // Mobile Accordion

  (0, _jquery2.default)('#orderAccordionMobile').on('show.bs.collapse', function (e) {
    (0, _jquery2.default)(e.target).prev('div').removeClass('init');
  });
  (0, _jquery2.default)('#orderAccordionMobile').on('hidden.bs.collapse', function (e) {
    (0, _jquery2.default)(e.target).prev('div').addClass('init');
  });
  (0, _jquery2.default)('.arrow-close').on('click', function () {
    (0, _jquery2.default)(this).closest('div.order-details').prev('div').trigger('click');
  });
}

function resizeContent() {
  resizeMainContainer();
  (0, _carousel.carousel)();

  if ((0, _jquery2.default)(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _shareProduct2.default)();
  resizeMenu((0, _jquery2.default)('#menuButton').attr('data-trigger'));
  (0, _productNobless.resizeFilterMenu)();
  (0, _jquery2.default)('.header-dropdown').show();

  _fresco2.default.hide();
}

function init() {
  (0, _carousel.carousel)();
  navbarCollapseInit();
  (0, _jquery2.default)(function () {
    (0, _jquery2.default)('[data-toggle="tooltip"]').tooltip();
  }); // PREVENT INSIDE CLICK DROPDOWN

  (0, _jquery2.default)('.dropdown-menu').on("click.bs.dropdown", function (e) {
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

  if ((0, _jquery2.default)(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _carousel.replaceCarouselArrow)();
  (0, _carousel.replaceCarouselArrowCart)();
  /*if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }*/
  // Show menu after page is loaded

  (0, _jquery2.default)('.mobile-offcanvas').show();
  (0, _jquery2.default)('.header-dropdown').show();
  (0, _jquery2.default)('#productsFiltersMobile .dropdown-menu').show();
}

exports.init = init;
exports.resizeContent = resizeContent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

var _syliusCartCommon = __webpack_require__(/*! ./js/sylius-cart-common */ "./themes/NoblessTheme/assets/js/sylius-cart-common.js");

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
  });
  (0, _syliusCartCommon.addToCartFunctions)();
  (0, _syliusCartCommon.afterDomReplacementFunctions)(); // Province field
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/************************/

/* CART PAGE MANAGEMENT */

/************************/
const container = (0, _jquery2.default)('#cartPage');
const bodyContainer = (0, _jquery2.default)('body');

const cart = function mainFunctions() {
  // When reloading quantities
  // Desktop
  (0, _jquery2.default)('.reload-qty', container).on('click', function () {
    if (!(0, _jquery2.default)(this).closest('.cart-item-info').hasClass('out-of-stock')) {
      if ((0, _jquery2.default)(this).hasClass('mobile')) {
        (0, _jquery2.default)('form.form-to-submit').trigger('submit');
      } else {
        (0, _jquery2.default)(this).closest('form').trigger('submit');
      }
    }
  }); // Mobile

  (0, _jquery2.default)('.mobile-qty', container).on('input', function () {
    if (!(0, _jquery2.default)(this).closest('.cart-item-info').hasClass('out-of-stock')) {
      (0, _jquery2.default)(this).next().removeClass('d-none');
      const newQty = parseInt((0, _jquery2.default)(this).val());

      if (newQty <= parseInt((0, _jquery2.default)(this).attr('max'))) {
        const inputQtyName = (0, _jquery2.default)(this).data('input-qty');
        (0, _jquery2.default)('input[name="' + inputQtyName + '"]').val(newQty);
      }
    }
  }); // Prevent customer to add more than 5 times a product

  (0, _jquery2.default)('.qty', container).on('input', function (e) {
    // If product is out of stock, nothing happens
    if (!(0, _jquery2.default)(this).closest('.cart-item-info').hasClass('out-of-stock')) {
      (0, _jquery2.default)(this).next().removeClass('d-none');

      if (parseInt((0, _jquery2.default)(this).val()) >= parseInt((0, _jquery2.default)(this).attr('max'))) {
        (0, _jquery2.default)(this).val((0, _jquery2.default)(this).attr('max'));
      }
    }
  }); // Apply coupon code

  (0, _jquery2.default)('.coupon-code-btn', container).on('click', function () {
    // If cart has product not in stock, disable coupon code
    if (!(0, _jquery2.default)('.btn-to-checkout').hasClass('disabled')) {
      const coupon = (0, _jquery2.default)('.coupon-code').val();

      if (coupon === '') {
        (0, _jquery2.default)('#sylius_cart_promotionCoupon').val('');
      } else {
        (0, _jquery2.default)('#sylius_cart_promotionCoupon').val(coupon);
      }

      (0, _jquery2.default)('form.form-to-submit').trigger('submit');
    }
  }); // When coupon code input is filled, hide error container

  bodyContainer.on("keydown", ".coupon-code", function () {
    (0, _jquery2.default)(this).closest('div').removeClass('invalid-code');
    (0, _jquery2.default)('.coupon-error').html('');
  });

  if ((0, _jquery2.default)('.coupon-code-error .form-error-message', container).html() !== undefined) {
    (0, _jquery2.default)('.coupon-input').addClass('invalid-code');
    (0, _jquery2.default)('.coupon-error').html((0, _jquery2.default)('.coupon-code-error .form-error-message').html());
    (0, _jquery2.default)('.coupon-code').val((0, _jquery2.default)('#sylius_cart_promotionCoupon').val());
  } // Apply bonus points


  (0, _jquery2.default)('.bonus-points-btn', container).on('click', function () {
    // If cart has product not in stock, disable coupon code
    if (!(0, _jquery2.default)('.btn-to-checkout').hasClass('disabled')) {
      const bonusPoints = (0, _jquery2.default)('.bonus-points').val();

      if (bonusPoints === '') {
        (0, _jquery2.default)('#sylius_cart_bonusPoints').val('');
      } else {
        (0, _jquery2.default)('#sylius_cart_bonusPoints').val(bonusPoints);
      }

      (0, _jquery2.default)('form.form-to-submit').trigger('submit');
    }
  });
  (0, _jquery2.default)('.delete-bonus-points', container).on('click', function () {
    // If cart has product not in stock, disable bonus points
    if (!(0, _jquery2.default)('.btn-to-checkout').hasClass('disabled')) {
      (0, _jquery2.default)('#sylius_cart_bonusPoints').val('');
      (0, _jquery2.default)('form.form-to-submit').trigger('submit');
    }
  }); // When bonus points input is filled, hide error container

  bodyContainer.on("keydown", ".bonus-points", function () {
    (0, _jquery2.default)(this).closest('div').removeClass('invalid-code');
    (0, _jquery2.default)('.bonus-points-error').html('');
  });

  if ((0, _jquery2.default)('#bitbag-bonus-points .form-error-message', container).html() !== undefined) {
    (0, _jquery2.default)('.bonus-points-input').addClass('invalid-code');
    (0, _jquery2.default)('.bonus-points-error').html((0, _jquery2.default)('#bitbag-bonus-points .form-error-message').html());
    (0, _jquery2.default)('.bonus-points').val((0, _jquery2.default)('#sylius_cart_bonusPoints').val());
  } // If cart has product not in stock, disable button linked to checkout page


  (0, _jquery2.default)('a.btn-to-checkout', container).on('click', function (e) {
    if ((0, _jquery2.default)(this).hasClass('disabled')) {
      e.preventDefault();
    }
  });
};

exports.default = cart;

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
  }); // When clicking on add to cart button => SEE sylius-add-to-cart.js
  //$('#sylius-product-adding-to-cart .btn-primary').on('click', function(e) {
  //e.preventDefault();
  //})

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

/***/ "./themes/NoblessTheme/assets/js/sylius-add-to-cart.js":
/*!*************************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/sylius-add-to-cart.js ***!
  \*************************************************************/
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

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _syliusCartCommon = __webpack_require__(/*! ./sylius-cart-common */ "./themes/NoblessTheme/assets/js/sylius-cart-common.js");

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
  const overlay = document.querySelector('[data-js-loading-overlay]');
  let validationElement = element.querySelector('[data-js-add-to-cart="error"]');
  element.addEventListener('submit', e => {
    e.preventDefault();
    const addToCartForm = (0, _jquery2.default)(element).closest('form');
    validationElement.classList.remove('d-block');
    const selectedSize = (0, _jquery2.default)('input[name^="' + (0, _jquery2.default)(addToCartForm).data('nameToCheck') + '"]:checked').length;
    const bundleItemsCount = (0, _jquery2.default)('div.bundle-item').length;

    if (selectedSize > 0 && selectedSize < bundleItemsCount) {
      (0, _jquery2.default)(addToCartForm).find('.empty-product:not(.input-checked)').removeClass('d-none').addClass('d-block');
    } else if (selectedSize === 0) {
      (0, _jquery2.default)(addToCartForm).find('.empty-product').removeClass('d-none').addClass('d-block');
    } else {
      (0, _jquery2.default)(addToCartForm).find('.empty-product').addClass('d-none').removeClass('d-block');
      element.classList.add('loadable', 'loading');
      element.appendChild(overlay.cloneNode(true));

      const request = _axios2.default.post(url, (0, _formSerialize2.default)(element));

      request.then(response => {
        validationElement.classList.remove('d-block');

        const responseData = _jquery2.default.parseHTML(response.data)[0];

        (0, _jquery2.default)('#cartActions .invalid-feedback').removeClass('d-block');

        if (!(0, _jquery2.default)('#emptyCart').hasClass('d-none')) {
          (0, _jquery2.default)('#cartItems').removeClass('d-none').addClass('d-flex');
          (0, _jquery2.default)('#emptyCart').addClass('d-none');
        }

        (0, _jquery2.default)('#headerCartItems').html((0, _jquery2.default)(responseData).find('.ajax-cart-items')[0].innerHTML).scrollTop(0).addClass('d-none');
        (0, _jquery2.default)('.cart-count').html((0, _jquery2.default)(responseData).find('.ajax-count-cart-items')[0].innerHTML);
        (0, _jquery2.default)('#headerCartNewItem').html((0, _jquery2.default)(responseData).find('.ajax-new-item')[0].innerHTML);
        (0, _jquery2.default)('.dropdown.cart-btn .dropdown-toggle').trigger('click');
        (0, _jquery2.default)('#cartActions .cart-subtotal').removeClass('d-flex').addClass('d-none');
        (0, _jquery2.default)('#cartActions .cart-subtotal span').last().html((0, _jquery2.default)(responseData).find('.ajax-cart-subtotal')[0].innerHTML);
        element.classList.remove('loading');
        (0, _syliusCartCommon.afterDomReplacementFunctions)();
      }).catch(error => {
        if (error !== undefined) {
          let errorMessage = '';
          element.classList.remove('loading');
          document.querySelectorAll('.invalid-feedback').forEach(function (errorEl) {
            errorEl.classList.remove('d-block');
          });

          if (error.response.data.message !== undefined) {
            if (error.response.data.product_id > 0) {
              validationElement = element.querySelector('[data-js-add-to-cart="error"][data-product-id="' + error.response.data.product_id + '"]');
            } else {
              validationElement = element.querySelector('[data-js-add-to-cart="error"][data-bundle-error]');
            }

            errorMessage = error.response.data.message.toString();
          } else {
            errorMessage = error.response.data.toString();
          }

          validationElement.innerHTML = errorMessage;
          validationElement.classList.add('d-block');
        }
      });
    }
  });
};

exports.default = SyliusAddToCart;

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/sylius-cart-common.js":
/*!*************************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/sylius-cart-common.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCartFunctions = exports.updateCartWidgetFunctions = exports.afterDomReplacementFunctions = undefined;

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _syliusAddToCart = __webpack_require__(/*! ./sylius-add-to-cart */ "./themes/NoblessTheme/assets/js/sylius-add-to-cart.js");

var _syliusAddToCart2 = _interopRequireDefault(_syliusAddToCart);

var _syliusUpdateQuantity = __webpack_require__(/*! ./sylius-update-quantity */ "./themes/NoblessTheme/assets/js/sylius-update-quantity.js");

var _syliusUpdateQuantity2 = _interopRequireDefault(_syliusUpdateQuantity);

var _syliusRemoveFromCart = __webpack_require__(/*! ./sylius-remove-from-cart */ "./themes/NoblessTheme/assets/js/sylius-remove-from-cart.js");

var _syliusRemoveFromCart2 = _interopRequireDefault(_syliusRemoveFromCart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cartWidgetContainer = (0, _jquery2.default)('#headerCartItems');

const afterDomReplacementFunctions = function domReplacementFunctions() {
  // After Dom replacement, set actions in cart widget again
  document.querySelectorAll('[data-js-remove-from-cart-button]').forEach(el => (0, _syliusRemoveFromCart2.default)(el));
  document.querySelectorAll('[data-js-reload-qty-button]').forEach(el => (0, _syliusUpdateQuantity2.default)(el));
  (0, _jquery2.default)('.ajax-qty', cartWidgetContainer).on('input', function (e) {
    (0, _jquery2.default)(this).next().removeClass('d-none');
    (0, _jquery2.default)('.reload-qty.ajax').attr('data-js-update-qty-value', (0, _jquery2.default)(this).val());

    if (parseInt((0, _jquery2.default)(this).val()) >= parseInt((0, _jquery2.default)(this).attr('max'))) {
      (0, _jquery2.default)(this).val((0, _jquery2.default)(this).attr('max'));
    } else if (parseInt((0, _jquery2.default)(this).val()) < parseInt((0, _jquery2.default)(this).attr('min'))) {
      (0, _jquery2.default)(this).val((0, _jquery2.default)(this).attr('min'));
    }
  });
};

const updateCartWidgetFunctions = function updateCartWidget(response) {
  const responseData = _jquery2.default.parseHTML(response.data)[0];

  const cartCount = (0, _jquery2.default)(responseData).find('.ajax-count-cart-items')[0].innerHTML;
  cartWidgetContainer.html((0, _jquery2.default)(responseData).find('.ajax-cart-items')[0].innerHTML).scrollTop(0).removeClass('loading');
  (0, _jquery2.default)('.cart-count').html(cartCount);
  (0, _jquery2.default)('#cartActions .cart-subtotal span').last().html((0, _jquery2.default)(responseData).find('.ajax-cart-subtotal')[0].innerHTML);

  if (parseInt(cartCount) === 0) {
    (0, _jquery2.default)('#cartItems').removeClass('d-flex').addClass('d-none');
    (0, _jquery2.default)('#emptyCart').removeClass('d-none');
  }
};

const addToCartFunctions = function addToCart() {
  document.querySelectorAll('[data-js-add-to-cart="form"]').forEach(el => (0, _syliusAddToCart2.default)(el));
};

exports.afterDomReplacementFunctions = afterDomReplacementFunctions;
exports.updateCartWidgetFunctions = updateCartWidgetFunctions;
exports.addToCartFunctions = addToCartFunctions;

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/sylius-remove-from-cart.js":
/*!******************************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/sylius-remove-from-cart.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _syliusCartCommon = __webpack_require__(/*! ./sylius-cart-common */ "./themes/NoblessTheme/assets/js/sylius-cart-common.js");

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
    (0, _jquery2.default)('#headerCartItems').addClass('loading').scrollTop(0);

    _axios2.default.delete(url, {
      data: {
        _csrf_token: csrfToken
      }
    }).then(response => {
      if (redirectUrl !== undefined && !element.classList.contains('delete-product-ajax')) {
        window.location.replace(redirectUrl);
      } else {
        (0, _syliusCartCommon.updateCartWidgetFunctions)(response);
        (0, _syliusCartCommon.afterDomReplacementFunctions)();
      }
    });
  });
};

exports.default = SyliusRemoveFromCart;

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/sylius-update-quantity.js":
/*!*****************************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/sylius-update-quantity.js ***!
  \*****************************************************************/
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

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _syliusCartCommon = __webpack_require__(/*! ./sylius-cart-common */ "./themes/NoblessTheme/assets/js/sylius-cart-common.js");

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
const SyliusUpdateQuantity = el => {
  const element = el;
  const url = element.getAttribute('data-js-update-qty-url');
  const csrfToken = element.getAttribute('data-js-update-qty-csrf-token');
  element.addEventListener('click', e => {
    (0, _jquery2.default)('#cartActions .quantity-error').removeClass('d-block');
    const newQuantity = element.getAttribute('data-js-update-qty-value');

    const request = _axios2.default.post(url, {}, {
      data: {
        _csrf_token: csrfToken,
        quantity: newQuantity
      }
    });

    e.preventDefault();
    (0, _jquery2.default)('#headerCartItems').addClass('loading').scrollTop(0);
    request.then(response => {
      (0, _syliusCartCommon.updateCartWidgetFunctions)(response);
      (0, _syliusCartCommon.afterDomReplacementFunctions)();
    }).catch(error => {
      if (error !== undefined) {
        (0, _jquery2.default)('#cartActions .quantity-error').addClass('d-block').find('.form-error-message').html(error.response.data.toString()).closest('span').removeClass('d-none');
        (0, _jquery2.default)('#headerCartItems').removeClass('loading');
      }
    });
  });
};

exports.default = SyliusUpdateQuantity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NhcnQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9jaGVja291dC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NvbnRhY3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9sb2dpbi1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3Byb2R1Y3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zaGFyZS1wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtY2FydC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLXVwZGF0ZS1xdWFudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9hY2NvdW50LWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2JhY2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2Nocm9ub3Bvc3QucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NvbGlzc2ltby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZGUucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZW4ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZXMucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZnIucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24taXQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21vbmRpYWwtcmVsYXkucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL25leHQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmVsb2FkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FwaUxvZ2luIiwiZWwiLCJlbGVtZW50Iiwic2lnbkluQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInZhbGlkYXRpb25GaWVsZCIsInVybCIsImdldEF0dHJpYnV0ZSIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2F0Y2giLCJlcnJvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlubmVySFRNTCIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJTeWxpdXNBcGlUb2dnbGUiLCJ0b2dnbGVhYmxlRWxlbWVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwibGVuZ3RoIiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiY3VycmVudFRhcmdldCIsIm9uUmF0ZSIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwiaXRlbSIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiY2xvc2VzdCIsImltZyIsInNldEF0dHJpYnV0ZSIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJ1bmRlZmluZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImluZGV4T2YiLCJmIiwiT3BlcmEiLCJvcGVyYSIsInBhcnNlRmxvYXQiLCJXZWJLaXQiLCJtYXRjaCIsIkNocm9tZSIsIkNocm9tZU1vYmlsZSIsIklFTW9iaWxlIiwidCIsIlJlZ0V4cCIsImV4ZWMiLCJfc2xpY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYmFzZVRvU3RyaW5nIiwiXyIsImlzRWxlbWVudCIsIm5vZGVUeXBlIiwiU3RyaW5nIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsIkV2ZW50IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJGaXQiLCJ3aXRoaW4iLCJhcmd1bWVudHMiLCJzIiwibiIsIm8iLCJhIiwiaCIsInIiLCJkIiwiTWF0aCIsIm1pbiIsIm1heCIsImVhc2luZyIsImZyZXNjb0Vhc2VJbkN1YmljIiwiZnJlc2NvRWFzZUluU2luZSIsImNvcyIsIlBJIiwiZnJlc2NvRWFzZU91dFNpbmUiLCJzaW4iLCJTdXBwb3J0IiwiTyIsIlAiLCJzcGxpdCIsImNhbnZhcyIsImJhIiwiZ2V0Q29udGV4dCIsImNzcyIsImFuaW1hdGlvbiIsIlMiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJzdWJzdHIiLCJkZXRlY3RNb2JpbGVUb3VjaCIsIm1vYmlsZVRvdWNoIiwidGVzdCIsInBsYXRmb3JtIiwiSW1hZ2VSZWFkeSIsImluaXRpYWxpemUiLCJhcHBseSIsImNhbGwiLCJUaW1lcnMiLCJnZXRVUklEYXRhIiwidHlwZSIsImVhY2giLCJUeXBlcyIsImRldGVjdEV4dGVuc2lvbiIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwiY29udGVudCIsInNob3ciLCJoaWRlIiwic3Bpbm5lciIsInRodW1ibmFpbCIsImRlbGF5IiwidGh1bWJuYWlscyIsInNsaWRlIiwia2V5Ym9hcmQiLCJsZWZ0IiwicmlnaHQiLCJlc2MiLCJsb2FkZWRNZXRob2QiLCJsb29wIiwib25DbGljayIsIm92ZXJmbG93IiwiY2xvc2UiLCJwcmVsb2FkIiwicG9zaXRpb24iLCJza2luIiwic3Bpbm5lckRlbGF5Iiwic3luYyIsInVpIiwidWlEZWxheSIsImF1dG9wbGF5IiwiYXBpIiwidGl0bGUiLCJieWxpbmUiLCJwb3J0cmFpdCIsImNvbnRyb2xzIiwiZW5hYmxlanNhcGkiLCJoZCIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJ2cSIsImluaXRpYWxUeXBlT3B0aW9ucyIsImNyZWF0ZSIsIngiLCJ5Iiwib3ZlcmxhcCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiT3ZlcmxheSIsImJ1aWxkIiwidmlzaWJsZSIsImFkZENsYXNzIiwiUGFnZXMiLCJwYWdlIiwidmlldyIsIldpbmRvdyIsInNldFNraW4iLCJyZW1vdmVDbGFzcyIsImF0dGFjaCIsImJvZHkiLCJkZXRhY2giLCJzdG9wIiwiZmFkZVRvIiwiZmFkZU91dCIsImdldFNjcm9sbERpbWVuc2lvbnMiLCJxdWV1ZXMiLCJwYWdlcyIsIl90cmFja2luZyIsIl9maXJzdCIsInRpbWVycyIsIl9ib3giLCJfcGFnZXMiLCJfdGh1bWJuYWlscyIsIlRodW1ibmFpbHMiLCJTcGlubmVyIiwiVUkiLCJfYXR0YWNoZWQiLCJfc2tpbiIsInNldFNob3dpbmdUeXBlIiwiX3Nob3dpbmdUeXBlIiwic3RhcnRPYnNlcnZpbmdSZXNpemUiLCJfb25XaW5kb3dSZXNpemVIYW5kbGVyIiwiX29uV2luZG93UmVzaXplIiwic3RvcE9ic2VydmluZ1Jlc2l6ZSIsIm9mZiIsIl9vblNjcm9sbCIsImFkanVzdFRvU2Nyb2xsIiwiZml0VG9WaWV3cG9ydCIsInVwZGF0ZUJveERpbWVuc2lvbnMiLCJmaXRUb0JveCIsInVwZGF0ZSIsImFkanVzdFByZXZOZXh0IiwiY2VudGVyIiwidG9wIiwic2Nyb2xsVG9wIiwiZ2V0Qm94RGltZW5zaW9ucyIsIl9ib3hEaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsIl9vcmllbnRhdGlvbiIsIl9ib3hQb3NpdGlvbiIsIm9wZW5pbmciLCJfc2hvdyIsInF1ZXVlIiwiZGlzYWJsZSIsIktleWJvYXJkIiwiX2hpZGUiLCJfcmVzZXQiLCJyZW1vdmVBbGwiLCJfcG9zaXRpb24iLCJhZnRlckhpZGUiLCJjbG9zaW5nIiwidmlld3MiLCJzZXRQb3NpdGlvbiIsInN0b3BIaWRlUXVldWUiLCJyZXNldCIsIm1heVByZXZpb3VzIiwicHJldmlvdXMiLCJnZXRTdXJyb3VuZGluZ0luZGV4ZXMiLCJtYXlOZXh0IiwibmV4dCIsImVuYWJsZWQiLCJrZXlDb2RlIiwiZW5hYmxlIiwiX29uS2V5RG93bkhhbmRsZXIiLCJvbktleURvd24iLCJfb25LZXlVcEhhbmRsZXIiLCJvbktleVVwIiwiZ2V0S2V5QnlLZXlDb2RlIiwiUGFnZSIsIkxjIiwiTWMiLCJOYyIsIk9jIiwidWlkIiwiX3RvdGFsIiwiX2Z1bGxDbGljayIsIl92aXNpYmxlIiwic2hvd2hpZGUiLCJfY3JlYXRlZCIsIm9wYWNpdHkiLCJjYXB0aW9uIiwiaW5mbyIsImNsb25lIiwiaW5mb1BhZGRlciIsInBvcyIsImh0bWwiLCJiYWNrZ3JvdW5kIiwiYXR0ciIsInBvc2l0aW9uT3V0c2lkZSIsInByZXZpb3VzSW5zaWRlIiwibmV4dEluc2lkZSIsImNsb3NlSW5zaWRlIiwiZ3JvdXBlZCIsImluZm9JbnNpZGUiLCJpbmZvUGFkZGVySW5zaWRlIiwicG9zSW5zaWRlIiwiY2FwdGlvbkluc2lkZSIsInBvc2l0aW9uSW5zaWRlIiwiX2dldFN1cnJvdW5kaW5nUGFnZXMiLCJwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMiLCJwcmVsb2FkaW5nIiwicHJlbG9hZGVkIiwibG9hZGVkIiwicHJlbG9hZFJlYWR5IiwibG9hZGluZyIsIl9zcGlubmVyRGVsYXkiLCJpbWFnZVJlYWR5IiwiX21hcmtBc0xvYWRlZCIsInNldERpbWVuc2lvbnMiLCJwcmVwZW5kIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwidmltZW9SZWFkeSIsIl9hYm9ydFNwaW5uZXJEZWxheSIsImluc2VydFZpZGVvIiwicGxheWVySWZyYW1lIiwicGFyYW0iLCJfZGF0YSIsIl9jb250ZW50RGltZW5zaW9ucyIsImZyYW1lYm9yZGVyIiwicmFpc2UiLCJsYXN0Q2hpbGQiLCJzdG9wSW5hY3RpdmUiLCJ1cGRhdGVVSSIsIl91aSIsImhpZGVJbmFjdGl2ZSIsIm9uU2hvdyIsImFmdGVyUG9zaXRpb24iLCJyZW1vdmVWaWRlbyIsInJlbW92ZVRyYWNraW5nIiwiX3RyYWNrIiwicmVtb3ZlZCIsIl9nZXRJbmZvSGVpZ2h0IiwiX3doaWxlVmlzaWJsZSIsImlzIiwiaGFzQ2xhc3MiLCJ2aXNpYmlsaXR5IiwidXBkYXRlRm9yY2VkIiwiZnVsbENsaWNrIiwiX25vT3ZlcmZsb3ciLCJwYXJzZUludCIsIl9wb3NpdGlvbk91dHNpZGUiLCJsIiwidSIsImMiLCJwIiwibSIsInYiLCJnIiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwiaHJlZiIsInNldERlZmF1bHRTa2luIiwiX3ZhcnMiLCJ0aHVtYm5haWxGcmFtZSIsInN0YXJ0T2JzZXJ2aW5nIiwid3JhcHBlciIsIl9zbGlkZXIiLCJfcHJldmlvdXMiLCJfcHJldmlvdXNfYnV0dG9uIiwiX3RodW1icyIsIl9zbGlkZSIsIl9uZXh0IiwiX25leHRfYnV0dG9uIiwic2V0QWN0aXZlIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJzZXRPcmllbnRhdGlvbiIsIl9kaXNhYmxlZEdyb3VwIiwiVGh1bWJuYWlsIiwiX3BhZ2UiLCJkaXNhYmxlZCIsInVwZGF0ZVZhcnMiLCJ3IiwicGFkZGluZ1RvcCIsInNpZGVzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYiIsImsiLCJDIiwiVyIsIk0iLCJUIiwiZmxvb3IiLCJJIiwiaXBwIiwicm91bmQiLCJfbW9kZSIsImNlaWwiLCJ0aHVtYnMiLCJyZXNpemUiLCJtb3ZlVG8iLCJtb3ZlVG9QYWdlIiwiYW5pbWF0ZSIsImxvYWRDdXJyZW50UGFnZSIsImFjdGl2YXRlIiwicmVmcmVzaCIsInByZUJ1aWxkIiwidGh1bWJuYWlsV3JhcHBlciIsImljb24iLCJyZWFkeSIsInZpbWVvVGh1bWJuYWlsIiwiX2xvYWRpbmciLCJfcmVtb3ZlZCIsIl9jbGVhckRlbGF5IiwiX2xvYWRlZCIsIl91cmwiLCJfbG9hZCIsIl9lcnJvciIsImZhZGVJblNwaW5uZXIiLCJfbW9kZXMiLCJfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yIiwiX2VuYWJsZWQiLCJmdWxsY2xpY2siLCJfc2Nyb2xsTGVmdCIsIl9jbG9zZSIsIl9vbk1vdXNlTW92ZSIsInVuYmluZCIsIl94IiwiX3kiLCJyZXNldFByZXZOZXh0IiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlVXBIYW5kbGVyIiwiX29uTW91c2VVcCIsIl9zaG93SGFuZGxlciIsIl9oaWRlSGFuZGxlciIsIl9tb3VzZW1vdmVIYW5kbGVyIiwiX2hvdmVyaW5nU2lkZUJ1dHRvbiIsInN0YXJ0VGltZXIiLCJfb25Nb3VzZU1vdmVIYW5kbGVyIiwiX29uTW91c2VMZWF2ZUhhbmRsZXIiLCJfb25Nb3VzZUVudGVySGFuZGxlciIsIl9vbk1vdXNlRW50ZXIiLCJfb25TaWRlTW91c2VFbnRlckhhbmRsZXIiLCJfb25TaWRlTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciIsIl9vblNpZGVNb3VzZUxlYXZlIiwiX29uU2Nyb2xsSGFuZGxlciIsInNjcm9sbExlZnQiLCJfZ2V0RXZlbnRTaWRlIiwiX2hvdmVyaW5nU2lkZSIsIl9tYXlDbGlja0hvdmVyaW5nU2lkZSIsIndoaWNoIiwiY2xlYXJUaW1lciIsImluc2lkZSIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIiLCJfZGVsZWdhdGVPdmVybGF5Q2xvc2UiLCJvdXRzaWRlIiwicmVzaXplTWFpbkNvbnRhaW5lciIsImZvb3RlckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJqUXVlcnkiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJldmVudCIsImRldmVsb3BNb2JpbGVNZW51IiwibWVudUljb25lc0Z1bmN0aW9ucyIsImhlYWRlck91dGVySGVpZ2h0IiwicHJvZHVjdENvbnRhaW5lckhlaWdodCIsInJlc2l6ZU1lbnUiLCJoZWFkZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJvcmRlcnNHcmlkRnVuY3Rpb25zIiwicHJldiIsInRvb2x0aXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94IiwiZWxlbSIsImNhcm91c2VsIiwibWFpbkZ1bmN0aW9ucyIsImNyZWF0ZUNhcm91c2VsIiwiY3JlYXRlUHJvZHVjdENhcm91c2VsIiwiY2Fyb3VzZWxFbGVtZW50IiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXBwZW5kQXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzbGljayIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiaXNDYXJ0SXRlbXNDYXJvdXNlbCIsIm1vYmlsZUZpcnN0IiwicmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0IiwidW5zbGlja2VkIiwiY3JlYXRlQWRkcmVzc0Nhcm91c2VsIiwib3B0cyIsInJvd3MiLCJzbGlkZXNQZXJSb3ciLCJhZGFwdGl2ZUhlaWdodCIsInZpc2libGVTbGlkZXJEaXYiLCJjcmVhdGVHYWxsZXJ5RGVza3RvcCIsImltYWdlcyIsImluZGV4IiwiaGVpZ2h0Q29udGVudCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImltZ1NlbGVjdG9yIiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImJvZHlDb250YWluZXIiLCJjYXJ0IiwibmV3UXR5IiwidmFsIiwiaW5wdXRRdHlOYW1lIiwiY291cG9uIiwiYm9udXNQb2ludHMiLCJzYXZlQnV0dG9uIiwiY2FuY2VsQnRuIiwiY2hlY2tvdXQiLCJhZGRyZXNzVHlwZSIsImdldENsYXNzTGlzdCIsIm1hbmFnZUFkZHJlc3NUeXBlIiwiY2hvb3NlQWRkcmVzcyIsInNob3dBZGRGb3JtIiwiZmllbGQiLCJmaWVsZE5hbWUiLCJ0b1NhdmUiLCJ0b1JlcGxhY2UiLCJjaGVja291dFNhdmVBZGRyZXNzIiwiZmlsbEFsbEFkZHJlc3NlcyIsInN1Ym1pdCIsImhpZGVDaGFuZ2VBZGRyZXNzIiwiaGlkZVNhdmVBZGRyZXNzRm9ybSIsImNhbmNlbENoYW5nZUFkZHJlc3MiLCJmaWVsZFNlbGVjdG9yIiwiZm9ybUZpZWxkIiwiY2hvc2VuQWRkcmVzc1RleHQiLCJjaG9zZW5WYWx1ZSIsInRleHQiLCJzdWJzdHJpbmciLCJ0cmltIiwiZ2V0RGF0YUZpZWxkTmFtZSIsInByb3AiLCJmaWxsT3RoZXJBZGRyZXNzIiwiYWpheCIsInNlcmlhbGl6ZSIsImRhdGFTdWNjZXNzRGl2Iiwibm9BZGRyZXNzIiwiZmlsbERhdGFBZnRlclNhdmUiLCJnZXRPdGhlckFkZHJlc3NUeXBlIiwic2hvd01haW5Gb3JtIiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0IiwiZmllbGRFcnJvciIsImFmdGVyIiwiZmlsbEFkZHJlc3MiLCJmaWVsZElkIiwia2VlcENhbWVsRmllbGQiLCJkYXRhVG9GaWxsIiwicmVnZXgiLCJpbmNsdWRlcyIsIm90aGVyQWRkcmVzc1R5cGUiLCJmaWxsT3RoZXJGb3JtIiwib3RoZXJGaWVsZElkIiwiaWRUb0ZpbGwiLCJuZXdWYWx1ZSIsImZvcm1GaWVsZE5hbWUiLCJmaWVsZFRvUmVwbGFjZSIsIm9sZERhdGEiLCJjbGFzc05hbWUiLCJmaWVsZE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInRleHRUb1JlcGxhY2UiLCJzZWxlY3RvclR5cGUiLCJtYXRjaGVzIiwiY29udGFjdFBhZ2UiLCJtb2RhbCIsInN0YXR1cyIsImVycm9yTGlzdCIsInRvQXJyYXkiLCJvdXRlclRleHQiLCJsb2dpblBhZ2UiLCJtb2RhbElkIiwiZm9ybUVsZW1lbnQiLCJ2ZXJpZnlBY2NvdW50T2JqZWN0IiwicmVnaXN0ZXJGb3JtIiwiaW5wdXRSZWdpc3RlckZvcm0iLCJpbnZhbGlkU3BhbiIsInByaWNlQ29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlIiwicHJpY2VNaW5TZWxlY3RvciIsInByaWNlTWF4U2VsZWN0b3IiLCJwcm9kdWN0IiwiYnVuZGxlSXRlbSIsInZhcmlhbnRMaXN0Q29udGFpbmVyIiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwiU3lsaXVzQWRkVG9DYXJ0IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsInJlcXVlc3QiLCJyZXNwb25zZURhdGEiLCJsYXN0IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbCIsInByb2R1Y3RfaWQiLCJ0b1N0cmluZyIsImNhcnRXaWRnZXRDb250YWluZXIiLCJhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIiwiZG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMiLCJ1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIiwidXBkYXRlQ2FydFdpZGdldCIsImNhcnRDb3VudCIsImFkZFRvQ2FydEZ1bmN0aW9ucyIsImFkZFRvQ2FydCIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwicmVkaXJlY3RVcmwiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsImNvbnRhaW5zIiwiU3lsaXVzVXBkYXRlUXVhbnRpdHkiLCJuZXdRdWFudGl0eSIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxLQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUEsTUFBTUMsY0FBYyxHQUFJQyxFQUFELElBQVE7QUFDN0IsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1FLFlBQVksR0FBR0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLE1BQXRCLENBQXJCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHSCxPQUFPLENBQUNFLGFBQVIsQ0FBc0IsUUFBdEIsQ0FBeEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdILFlBQVksQ0FBQ0ksWUFBYixDQUEwQixtQkFBMUIsQ0FBWjtBQUNBLFFBQU1DLFVBQVUsR0FBR04sT0FBTyxDQUFDRSxhQUFSLENBQXNCLHFCQUF0QixDQUFuQjtBQUNBLFFBQU1LLGFBQWEsR0FBR1AsT0FBTyxDQUFDRSxhQUFSLENBQXNCLHdCQUF0QixDQUF0QjtBQUNBLFFBQU1NLGNBQWMsR0FBR1IsT0FBTyxDQUFDRSxhQUFSLENBQXNCLHNCQUF0QixDQUF2QjtBQUNBLFFBQU1PLGFBQWEsR0FBR0QsY0FBYyxDQUFDSCxZQUFmLENBQTRCLE1BQTVCLENBQXRCO0FBRUFKLGNBQVksQ0FBQ1MsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBd0NDLENBQUQsSUFBTztBQUM1Q0EsS0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLE1BQVAsQ0FBYyxXQUFkLEVBQTJCVCxVQUFVLENBQUNVLEtBQXRDO0FBQ0FILFVBQU0sQ0FBQ0UsTUFBUCxDQUFjLFdBQWQsRUFBMkJSLGFBQWEsQ0FBQ1MsS0FBekM7QUFDQUgsVUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBQ04sYUFBRCxDQUFkLEVBQStCRCxjQUFjLENBQUNRLEtBQTlDOztBQUVBQyxvQkFBTUMsSUFBTixDQUFXZCxHQUFYLEVBQWdCUyxNQUFoQixFQUNHTSxJQURILENBQ1EsTUFBTTtBQUFFQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQTJCLEtBRDNDLEVBRUdDLEtBRkgsQ0FFVUMsS0FBRCxJQUFXO0FBQ2hCckIscUJBQWUsQ0FBQ3NCLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQyxRQUFqQztBQUNBdkIscUJBQWUsQ0FBQ3dCLFNBQWhCLEdBQTRCSCxLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBZixDQUFvQkMsT0FBaEQ7QUFDRCxLQUxIO0FBTUQsR0FkRDtBQWVELENBekJEOztrQkEyQmVoQyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7Ozs7QUFDQTs7Ozs7O0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBLE1BQU1pQyxlQUFlLEdBQUloQyxFQUFELElBQVE7QUFDOUIsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1LLEdBQUcsR0FBR0osT0FBTyxDQUFDSyxZQUFSLENBQXFCLCtCQUFyQixDQUFaO0FBQ0EsUUFBTTJCLGlCQUFpQixHQUFHQyxRQUFRLENBQUMvQixhQUFULENBQXVCLHdCQUF2QixDQUExQjtBQUVBRixTQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLHNCQUFVQyxDQUFELElBQU87QUFDaERxQixxQkFBaUIsQ0FBQ1AsU0FBbEIsQ0FBNEJqRCxHQUE1QixDQUFnQyxRQUFoQzs7QUFFQSxRQUFJbUMsQ0FBQyxDQUFDdUIsTUFBRixDQUFTbEIsS0FBVCxDQUFlbUIsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM3QmxCLHNCQUFNbUIsR0FBTixDQUFVaEMsR0FBVixFQUFlO0FBQUVTLGNBQU0sRUFBRTtBQUFFd0IsZUFBSyxFQUFFMUIsQ0FBQyxDQUFDdUIsTUFBRixDQUFTbEI7QUFBbEI7QUFBVixPQUFmLEVBQ0dHLElBREgsQ0FDUSxNQUFNO0FBQUVhLHlCQUFpQixDQUFDUCxTQUFsQixDQUE0QkMsTUFBNUIsQ0FBbUMsUUFBbkM7QUFBK0MsT0FEL0QsRUFFR0gsS0FGSCxDQUVTLE1BQU07QUFBRVMseUJBQWlCLENBQUNQLFNBQWxCLENBQTRCakQsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFBNEMsT0FGN0Q7QUFHRDtBQUNGLEdBUmlDLEVBUS9CLElBUitCLENBQWxDO0FBU0QsQ0FkRDs7a0JBZ0JldUQsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxNQUFNTyxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBVCxHQUErQjtBQUN6RCxRQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWhCO0FBRUErQixVQUFRLENBQUNPLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFvREMsSUFBRCxJQUFVO0FBQzNEQSxRQUFJLENBQUNDLFdBQUwsQ0FBaUJKLE9BQU8sQ0FBQ0ssU0FBUixDQUFrQixJQUFsQixDQUFqQjtBQUNBRixRQUFJLENBQUNoQyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxNQUFNO0FBQ3BDZ0MsVUFBSSxDQUFDakIsU0FBTCxDQUFlakQsR0FBZixDQUFtQixTQUFuQjtBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUQsQ0FURDs7a0JBV2U4RCxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTyxZQUFOLENBQW1CO0FBQ2pCQyxhQUFXLENBQUNDLFNBQUQsRUFBWUMsUUFBWixFQUFzQjtBQUMvQixTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFFBQUksS0FBS0QsU0FBVCxFQUFvQjtBQUNsQixXQUFLRSxTQUFMLEdBQWlCQyxNQUFNLENBQUMsS0FBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCQyxXQUF4QixDQUFOLElBQThDLENBQS9EO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQkgsTUFBTSxDQUFDLEtBQUtILFNBQUwsQ0FBZUksT0FBZixDQUF1QkcsZUFBeEIsQ0FBTixJQUFrRCxDQUF2RTtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS1IsU0FBTCxDQUFlSSxPQUFmLENBQXVCSyxnQkFBdkIsS0FBNEMsT0FBNUQ7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQUtWLFNBQUwsQ0FBZTdDLGFBQWYsQ0FBNkIseUJBQTdCLENBQXBCO0FBQ0EsV0FBS3dELGFBQUwsR0FBcUIsS0FBS1gsU0FBTCxDQUFlN0MsYUFBZixDQUE2QiwwQkFBN0IsQ0FBckI7QUFFQSxXQUFLeUQsTUFBTDtBQUNEO0FBQ0Y7O0FBRURBLFFBQU0sR0FBRztBQUNQLFNBQUtaLFNBQUwsQ0FBZXBCLFNBQWYsR0FBMkIsRUFBM0I7QUFDQSxVQUFNaUMsYUFBYSxHQUFHM0IsUUFBUSxDQUFDNEIsYUFBVCxDQUF1QixLQUF2QixDQUF0Qjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksS0FBS2IsU0FBMUIsRUFBcUNhLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBTTlELE9BQU8sR0FBR2lDLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQTdELGFBQU8sQ0FBQ21ELE9BQVIsQ0FBZ0JZLGFBQWhCLEdBQWdDRCxDQUFoQzs7QUFFQSxVQUFJLEtBQUtQLFFBQUwsS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0J2RCxlQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLEtBQUtzRCxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbEM7QUFDRDs7QUFFRCxVQUFJSCxDQUFDLElBQUksS0FBS1QsYUFBZCxFQUE2QjtBQUMzQnJELGVBQU8sQ0FBQzJCLFNBQVIsR0FBb0IsS0FBSzhCLFlBQUwsQ0FBa0I5QixTQUF0QztBQUNELE9BRkQsTUFFTztBQUNMM0IsZUFBTyxDQUFDMkIsU0FBUixHQUFvQixLQUFLK0IsYUFBTCxDQUFtQi9CLFNBQXZDO0FBQ0Q7O0FBRURpQyxtQkFBYSxDQUFDakIsV0FBZCxDQUEwQjNDLE9BQTFCO0FBQ0Q7O0FBQ0QsU0FBSytDLFNBQUwsQ0FBZUosV0FBZixDQUEyQmlCLGFBQTNCO0FBQ0Q7O0FBRURJLGtCQUFnQixDQUFDckQsQ0FBRCxFQUFJO0FBQ2xCLFVBQU1LLEtBQUssR0FBR2tDLE1BQU0sQ0FBQ3ZDLENBQUMsQ0FBQ3VELGFBQUYsQ0FBZ0JmLE9BQWhCLENBQXdCWSxhQUF6QixDQUFwQjtBQUNBLFNBQUtWLGFBQUwsR0FBcUJyQyxLQUFyQjtBQUNBLFNBQUsrQixTQUFMLENBQWVJLE9BQWYsQ0FBdUJHLGVBQXZCLEdBQXlDdEMsS0FBekM7QUFDQSxTQUFLMkMsTUFBTDtBQUNBLFNBQUtYLFFBQUwsQ0FBY21CLE1BQWQsQ0FBcUJuRCxLQUFyQjtBQUNEOztBQTdDZ0I7O2tCQWdESjZCLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTXVCLFlBQU4sQ0FBbUI7QUFDakJ0QixhQUFXLENBQUN1QixPQUFELEVBQVU7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0EsT0FBTCxDQUFhM0QsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBSzRELE1BQUwsQ0FBWUwsSUFBWixDQUFpQixJQUFqQixDQUF4QztBQUNBLFNBQUtNLGFBQUwsR0FBcUJ0QyxRQUFRLENBQUMvQixhQUFULENBQXVCLEtBQUttRSxPQUFMLENBQWFsQixPQUFiLENBQXFCcUIsUUFBNUMsQ0FBckI7QUFDQSxTQUFLRixNQUFMO0FBQ0Q7O0FBRURBLFFBQU0sR0FBRztBQUNQLFFBQUksS0FBS0QsT0FBTCxDQUFhSSxPQUFqQixFQUEwQjtBQUN4QixXQUFLRixhQUFMLENBQW1CRyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsRUFBbkM7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLSixhQUFMLENBQW1CRyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGOztBQWRnQjs7a0JBaUJKUCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBLE1BQU1RLG1CQUFOLENBQTBCO0FBQ3hCOUIsYUFBVyxHQUFHO0FBQ1osU0FBSytCLGFBQUwsR0FBcUI1QyxRQUFRLENBQUMvQixhQUFULENBQXVCLHlCQUF2QixDQUFyQjtBQUNBLFNBQUs0RSxTQUFMLEdBQWlCLEtBQUtELGFBQUwsQ0FBbUIzRSxhQUFuQixDQUFpQyxLQUFqQyxDQUFqQjtBQUNBLFNBQUs2RSxnQkFBTCxHQUF3QixLQUFLRixhQUFMLENBQW1CeEUsWUFBbkIsQ0FBZ0MsTUFBaEMsQ0FBeEI7QUFDQSxTQUFLMkUsZUFBTCxHQUF1QixLQUFLRixTQUFMLENBQWV6RSxZQUFmLENBQTRCLEtBQTVCLENBQXZCO0FBRUE0QixZQUFRLENBQUNPLGdCQUFULENBQTBCLGlEQUExQixFQUE2RUMsT0FBN0UsQ0FBc0Z3QyxJQUFELElBQVU7QUFDN0ZBLFVBQUksQ0FBQ3ZFLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU0sS0FBS3dFLFFBQUwsRUFBdEM7QUFDRCxLQUZEO0FBSUEsU0FBS0EsUUFBTDtBQUNEOztBQUVEQyxrQkFBZ0IsR0FBRztBQUNqQixVQUFNQyxLQUFLLEdBQUduRCxRQUFRLENBQUNPLGdCQUFULENBQTJCO0FBQzdDO0FBQ0E7QUFDQSxLQUhrQixDQUFkO0FBS0EsV0FBTyxDQUFDLEdBQUc0QyxLQUFKLEVBQVdDLEdBQVgsQ0FBZXRGLEVBQUUsSUFBSUEsRUFBRSxDQUFDaUIsS0FBeEIsRUFBK0JzRSxJQUEvQixDQUFvQyxHQUFwQyxDQUFQO0FBQ0Q7O0FBRURDLG1CQUFpQixDQUFDQyxPQUFELEVBQVU7QUFDekIsUUFBSUMsU0FBUyxHQUFHLEtBQUtWLGdCQUFyQjtBQUNBLFFBQUlXLFFBQVEsR0FBRyxLQUFLVixlQUFwQjtBQUNBLFVBQU1DLElBQUksR0FBR2hELFFBQVEsQ0FBQy9CLGFBQVQsQ0FBd0I7QUFDekMsbURBQW1Ec0YsT0FBUTtBQUMzRCxzREFBc0RBLE9BQVE7QUFDOUQsS0FIaUIsQ0FBYjs7QUFLQSxRQUFJUCxJQUFKLEVBQVU7QUFDUixZQUFNVSxNQUFNLEdBQUdWLElBQUksQ0FBQ1csT0FBTCxDQUFhLDZCQUFiLENBQWY7QUFDQUgsZUFBUyxHQUFHRSxNQUFNLENBQUN6RixhQUFQLENBQXFCLEdBQXJCLEVBQTBCRyxZQUExQixDQUF1QyxNQUF2QyxDQUFaO0FBQ0FxRixjQUFRLEdBQUdDLE1BQU0sQ0FBQ3pGLGFBQVAsQ0FBcUIsS0FBckIsRUFBNEJHLFlBQTVCLENBQXlDLHNCQUF6QyxDQUFYO0FBQ0Q7O0FBRUQsV0FBTztBQUFFb0YsZUFBRjtBQUFhQztBQUFiLEtBQVA7QUFDRDs7QUFFRFIsVUFBUSxHQUFHO0FBQ1QsVUFBTVcsR0FBRyxHQUFHLEtBQUtOLGlCQUFMLENBQXVCLEtBQUtKLGdCQUFMLEVBQXZCLENBQVo7QUFDQSxTQUFLTixhQUFMLENBQW1CaUIsWUFBbkIsQ0FBZ0MsTUFBaEMsRUFBd0NELEdBQUcsQ0FBQ0osU0FBNUM7QUFDQSxTQUFLWCxTQUFMLENBQWVnQixZQUFmLENBQTRCLEtBQTVCLEVBQW1DRCxHQUFHLENBQUNILFFBQXZDO0FBQ0Q7O0FBNUN1Qjs7a0JBK0NYZCxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxNQUFNbUIsMEJBQTBCLEdBQUcsU0FBU0EsMEJBQVQsR0FBc0M7QUFDdkU5RCxVQUFRLENBQUNPLGdCQUFULENBQTBCLGlEQUExQixFQUE2RUMsT0FBN0UsQ0FBc0Z3QyxJQUFELElBQVU7QUFDN0ZBLFFBQUksQ0FBQ3ZFLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU07QUFDcEMsVUFBSXNGLFFBQVEsR0FBRyxFQUFmO0FBRUEvRCxjQUFRLENBQUNPLGdCQUFULENBQTBCLG9EQUExQixFQUFnRkMsT0FBaEYsQ0FBeUZ6QyxPQUFELElBQWE7QUFDbkcsY0FBTWlHLE1BQU0sR0FBR2pHLE9BQWY7QUFDQSxjQUFNa0csTUFBTSxHQUFHRCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0UsYUFBUixDQUFOLENBQTZCbkYsS0FBNUM7QUFDQWdGLGdCQUFRLElBQUssU0FBUUMsTUFBTSxDQUFDNUYsWUFBUCxDQUFvQixhQUFwQixDQUFtQyxLQUFJNkYsTUFBTyxJQUFuRTtBQUNELE9BSkQ7QUFNQSxZQUFNRSxLQUFLLEdBQUduRSxRQUFRLENBQUMvQixhQUFULENBQXVCLDBCQUF2QixFQUFtREEsYUFBbkQsQ0FBaUU4RixRQUFqRSxFQUEyRTNGLFlBQTNFLENBQXdGLFlBQXhGLENBQWQ7O0FBRUEsVUFBSStGLEtBQUssS0FBS0MsU0FBZCxFQUF5QjtBQUN2QnBFLGdCQUFRLENBQUMvQixhQUFULENBQXVCLHlCQUF2QixFQUFrRHlCLFNBQWxELEdBQThEeUUsS0FBOUQ7QUFDQW5FLGdCQUFRLENBQUMvQixhQUFULENBQXVCLHFCQUF2QixFQUE4Q29HLGVBQTlDLENBQThELFVBQTlEO0FBQ0QsT0FIRCxNQUdPO0FBQ0xyRSxnQkFBUSxDQUFDL0IsYUFBVCxDQUF1Qix5QkFBdkIsRUFBa0R5QixTQUFsRCxHQUE4RE0sUUFBUSxDQUFDL0IsYUFBVCxDQUF1QiwwQkFBdkIsRUFBbURHLFlBQW5ELENBQWdFLHVCQUFoRSxDQUE5RDtBQUNBNEIsZ0JBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDNEYsWUFBOUMsQ0FBMkQsVUFBM0QsRUFBdUUsVUFBdkU7QUFDRDtBQUNGLEtBbEJEO0FBbUJELEdBcEJEO0FBcUJELENBdEJEOztBQXdCQSxNQUFNUywyQkFBMkIsR0FBRyxTQUFTQSwyQkFBVCxHQUF1QztBQUN6RXRFLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsZ0RBQTFCLEVBQTRFQyxPQUE1RSxDQUFxRndDLElBQUQsSUFBVTtBQUM1RkEsUUFBSSxDQUFDdkUsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBaUNDLENBQUQsSUFBTztBQUNyQyxZQUFNeUYsS0FBSyxHQUFHbkIsSUFBSSxDQUFDVyxPQUFMLENBQWEsSUFBYixFQUFtQjFGLGFBQW5CLENBQWlDLGlDQUFqQyxFQUFvRXlCLFNBQWxGO0FBQ0FNLGNBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEeUIsU0FBbEQsR0FBOER5RSxLQUE5RDtBQUNELEtBSEQ7QUFJRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQSxNQUFNSSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLHFCQUFxQixHQUFHeEUsUUFBUSxDQUFDeUUsY0FBVCxDQUF3Qix5QkFBeEIsS0FBc0QsSUFBcEY7QUFDQSxRQUFNQyxxQkFBcUIsR0FBRzFFLFFBQVEsQ0FBQ3lFLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGOztBQUVBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3pCViw4QkFBMEI7QUFDM0IsR0FGRCxNQUVPLElBQUlZLHFCQUFKLEVBQTJCO0FBQ2hDSiwrQkFBMkI7QUFDNUI7QUFDRixDQVREOztrQkFXZUMsb0I7Ozs7Ozs7Ozs7Ozs7O0FDdERmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTlCQTs7QUFRQTs7QUFFQTtBQXNCQXBGLE1BQU0sQ0FBQ3dGLE1BQVAsR0FBZ0JDLGVBQWhCO0FBQ0F6RixNQUFNLENBQUMwRixRQUFQLEdBQWtCQyx3QkFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBU2pELENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFVBQXNDcUcsaUNBQU8sQ0FBQyx5RUFBRCxDQUFELG9DQUFZckcsQ0FBWjtBQUFBO0FBQUE7QUFBQSxvR0FBNUMsR0FBMkQsU0FBM0Q7QUFBMEosQ0FBeEssWUFBOEssVUFBU3NHLENBQVQsRUFBVztBQUFDLE1BQUlDLE1BQU0sR0FBQyxFQUFYO0FBQWNELEdBQUMsQ0FBQ0UsTUFBRixDQUFTRCxNQUFULEVBQWdCO0FBQUNFLFdBQU8sRUFBQztBQUFULEdBQWhCLEdBQW1DRixNQUFNLENBQUNHLEtBQVAsR0FBYTtBQUFDQyxVQUFNLEVBQUM7QUFBUixHQUFoRDtBQUE0RCxNQUFJQyxNQUFNLEdBQUM7QUFBQ0MsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBSTFELENBQUMsR0FBQztBQUFDMkQsYUFBSyxFQUFDUixDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVXFHLEtBQVY7QUFBUCxPQUFOOztBQUFnQyxVQUFHQyxPQUFPLENBQUNDLFlBQVIsSUFBc0JELE9BQU8sQ0FBQ0UsT0FBUixJQUFpQkYsT0FBTyxDQUFDRyxLQUFsRCxFQUF3RDtBQUFDLFlBQUlsSCxDQUFDLEdBQUNzQixRQUFRLENBQUM2RixlQUFULENBQXlCQyxXQUF6QixHQUFxQzNHLE1BQU0sQ0FBQzRHLFVBQWxEO0FBQTZEbEUsU0FBQyxDQUFDbUUsTUFBRixHQUFTN0csTUFBTSxDQUFDOEcsV0FBUCxHQUFtQnZILENBQTVCO0FBQThCLE9BQXBKLE1BQXlKbUQsQ0FBQyxDQUFDbUUsTUFBRixHQUFTaEIsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU2RyxNQUFWLEVBQVQ7O0FBQTRCLGFBQU9uRSxDQUFQO0FBQVM7QUFBblAsR0FBWDtBQUFBLE1BQWdRNEQsT0FBTyxJQUFFL0csQ0FBQyxHQUFDd0gsU0FBUyxDQUFDQyxTQUFaLEVBQXNCO0FBQUNDLE1BQUUsRUFBQyxFQUFFLENBQUNqSCxNQUFNLENBQUNrSCxXQUFSLElBQXFCLENBQUMsQ0FBRCxLQUFLM0gsQ0FBQyxDQUFDNEgsT0FBRixDQUFVLE9BQVYsQ0FBNUIsS0FBaURDLENBQUMsQ0FBQyxPQUFELENBQXREO0FBQWdFQyxTQUFLLEVBQUMsQ0FBQyxDQUFELEdBQUc5SCxDQUFDLENBQUM0SCxPQUFGLENBQVUsT0FBVixDQUFILEtBQXdCLENBQUMsQ0FBQ25ILE1BQU0sQ0FBQ3NILEtBQVQsSUFBZ0JBLEtBQUssQ0FBQ3RCLE9BQXRCLElBQStCdUIsVUFBVSxDQUFDRCxLQUFLLENBQUN0QixPQUFOLEVBQUQsQ0FBekMsSUFBNEQsSUFBcEYsQ0FBdEU7QUFBZ0t3QixVQUFNLEVBQUMsQ0FBQyxDQUFELEdBQUdqSSxDQUFDLENBQUM0SCxPQUFGLENBQVUsY0FBVixDQUFILElBQThCQyxDQUFDLENBQUMsY0FBRCxDQUF0TTtBQUF1TlgsU0FBSyxFQUFDLENBQUMsQ0FBRCxHQUFHbEgsQ0FBQyxDQUFDNEgsT0FBRixDQUFVLE9BQVYsQ0FBSCxJQUF1QixDQUFDLENBQUQsS0FBSzVILENBQUMsQ0FBQzRILE9BQUYsQ0FBVSxPQUFWLENBQTVCLElBQWdEQyxDQUFDLENBQUMsS0FBRCxDQUE5UTtBQUFzUmIsZ0JBQVksRUFBQyxDQUFDLENBQUNoSCxDQUFDLENBQUNrSSxLQUFGLENBQVEsdUJBQVIsQ0FBclM7QUFBc1VDLFVBQU0sRUFBQyxDQUFDLENBQUQsR0FBR25JLENBQUMsQ0FBQzRILE9BQUYsQ0FBVSxRQUFWLENBQUgsSUFBd0JDLENBQUMsQ0FBQyxTQUFELENBQXRXO0FBQWtYTyxnQkFBWSxFQUFDLENBQUMsQ0FBRCxHQUFHcEksQ0FBQyxDQUFDNEgsT0FBRixDQUFVLE1BQVYsQ0FBSCxJQUFzQkMsQ0FBQyxDQUFDLE9BQUQsQ0FBdFo7QUFBZ2FaLFdBQU8sRUFBQyxDQUFDLENBQUQsR0FBR2pILENBQUMsQ0FBQzRILE9BQUYsQ0FBVSxTQUFWLENBQUgsSUFBeUJDLENBQUMsQ0FBQyxVQUFELENBQWxjO0FBQStjUSxZQUFRLEVBQUMsQ0FBQyxDQUFELEdBQUdySSxDQUFDLENBQUM0SCxPQUFGLENBQVUsVUFBVixDQUFILElBQTBCQyxDQUFDLENBQUMsV0FBRDtBQUFuZixHQUF4QixDQUF2UTtBQUFBLE1BQWt5QjdILENBQWx5Qjs7QUFBb3lCLFdBQVM2SCxDQUFULENBQVcxRSxDQUFYLEVBQWE7QUFBQyxRQUFJbUYsQ0FBQyxHQUFDLElBQUlDLE1BQUosQ0FBV3BGLENBQUMsR0FBQyxXQUFiLEVBQTBCcUYsSUFBMUIsQ0FBK0J4SSxDQUEvQixDQUFOO0FBQXdDLFdBQU0sQ0FBQ3NJLENBQUQsSUFBSU4sVUFBVSxDQUFDTSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQXBCO0FBQTJCOztBQUFBLE1BQUlHLE1BQU0sR0FBQ0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUEzQjs7QUFBaUMsV0FBU0MsWUFBVCxDQUFzQjFGLENBQXRCLEVBQXdCO0FBQUMsV0FBTSxZQUFVLE9BQU9BLENBQWpCLEdBQW1CQSxDQUFuQixHQUFxQixRQUFNQSxDQUFOLEdBQVEsRUFBUixHQUFXQSxDQUFDLEdBQUMsRUFBeEM7QUFBMkM7O0FBQUEsTUFBSTJGLENBQUMsR0FBQztBQUFDQyxhQUFTLEVBQUMsbUJBQVM1RixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLElBQUUsTUFBSUEsQ0FBQyxDQUFDNkYsUUFBaEI7QUFBeUIsS0FBaEQ7QUFBaURDLFVBQU0sRUFBQztBQUFDQyxnQkFBVSxFQUFDLG9CQUFTL0YsQ0FBVCxFQUFXO0FBQUMsZUFBTSxDQUFDQSxDQUFDLEdBQUMwRixZQUFZLENBQUMxRixDQUFELENBQWYsS0FBcUJBLENBQUMsQ0FBQ2dHLE1BQUYsQ0FBUyxDQUFULEVBQVlDLFdBQVosS0FBMEJqRyxDQUFDLENBQUN5RixLQUFGLENBQVEsQ0FBUixDQUFyRDtBQUFnRTtBQUF4RjtBQUF4RCxHQUFOO0FBQXlKdEMsR0FBQyxDQUFDaEYsUUFBUSxDQUFDNkYsZUFBVixDQUFELENBQTRCa0MsRUFBNUIsQ0FBK0IsMkJBQS9CLEVBQTJELFVBQVNsRyxDQUFULEVBQVc7QUFBQyxRQUFJbkQsQ0FBSjs7QUFBTSxRQUFHbUQsQ0FBQyxDQUFDbUcsYUFBRixDQUFnQkMsVUFBaEIsR0FBMkJ2SixDQUFDLEdBQUNtRCxDQUFDLENBQUNtRyxhQUFGLENBQWdCQyxVQUFoQixHQUEyQixHQUF4RCxHQUE0RHBHLENBQUMsQ0FBQ21HLGFBQUYsQ0FBZ0JFLE1BQWhCLEtBQXlCeEosQ0FBQyxHQUFDLENBQUNtRCxDQUFDLENBQUNtRyxhQUFGLENBQWdCRSxNQUFqQixHQUF3QixDQUFuRCxDQUE1RCxFQUFrSHhKLENBQXJILEVBQXVIO0FBQUMsVUFBSXNJLENBQUMsR0FBQ2hDLENBQUMsQ0FBQ21ELEtBQUYsQ0FBUSxtQkFBUixDQUFOO0FBQW1DbkQsT0FBQyxDQUFDbkQsQ0FBQyxDQUFDNUIsTUFBSCxDQUFELENBQVltQyxPQUFaLENBQW9CNEUsQ0FBcEIsRUFBc0J0SSxDQUF0QixHQUF5QnNJLENBQUMsQ0FBQ29CLG9CQUFGLE1BQTBCdkcsQ0FBQyxDQUFDd0csZUFBRixFQUFuRCxFQUF1RXJCLENBQUMsQ0FBQ3NCLGtCQUFGLE1BQXdCekcsQ0FBQyxDQUFDbEQsY0FBRixFQUEvRjtBQUFrSDtBQUFDLEdBQTNWO0FBQTZWLE1BQUk0SixHQUFHLEdBQUM7QUFBQ0MsVUFBTSxFQUFDLGdCQUFTM0csQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsV0FBSSxJQUFJc0ksQ0FBQyxHQUFDaEMsQ0FBQyxDQUFDRSxNQUFGLENBQVM7QUFBQ2MsY0FBTSxFQUFDLENBQUMsQ0FBVDtBQUFXUixhQUFLLEVBQUMsQ0FBQztBQUFsQixPQUFULEVBQThCaUQsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFjLEVBQTVDLENBQU4sRUFBc0RDLENBQUMsR0FBQzFELENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXhHLENBQVosQ0FBeEQsRUFBdUVpSyxDQUFDLEdBQUMsQ0FBekUsRUFBMkVDLENBQUMsR0FBQyxDQUE3RSxFQUErRUMsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDeEIsS0FBbkYsRUFBeUZzRCxDQUFDLEdBQUM5QixDQUFDLENBQUNoQixNQUFqRyxFQUF3RyxJQUFFNEMsQ0FBRixLQUFNQyxDQUFDLElBQUVILENBQUMsQ0FBQ2xELEtBQUYsR0FBUTNELENBQUMsQ0FBQzJELEtBQWIsSUFBb0JzRCxDQUFDLElBQUVKLENBQUMsQ0FBQzFDLE1BQUYsR0FBU25FLENBQUMsQ0FBQ21FLE1BQXhDLENBQXhHLEdBQXlKO0FBQUMsWUFBSStDLENBQUMsR0FBQyxDQUFOO0FBQUEsWUFBUUMsQ0FBQyxHQUFDLENBQVY7QUFBWUgsU0FBQyxJQUFFSCxDQUFDLENBQUNsRCxLQUFGLEdBQVEzRCxDQUFDLENBQUMyRCxLQUFiLEtBQXFCdUQsQ0FBQyxHQUFDbEgsQ0FBQyxDQUFDMkQsS0FBRixHQUFRa0QsQ0FBQyxDQUFDbEQsS0FBakMsR0FBd0NzRCxDQUFDLElBQUVKLENBQUMsQ0FBQzFDLE1BQUYsR0FBU25FLENBQUMsQ0FBQ21FLE1BQWQsS0FBdUJnRCxDQUFDLEdBQUNuSCxDQUFDLENBQUNtRSxNQUFGLEdBQVMwQyxDQUFDLENBQUMxQyxNQUFwQyxDQUF4QyxFQUFvRjJDLENBQUMsR0FBQ00sSUFBSSxDQUFDQyxHQUFMLENBQVNILENBQVQsRUFBV0MsQ0FBWCxDQUF0RixFQUFvR04sQ0FBQyxHQUFDO0FBQUNsRCxlQUFLLEVBQUM5RyxDQUFDLENBQUM4RyxLQUFGLEdBQVFtRCxDQUFmO0FBQWlCM0MsZ0JBQU0sRUFBQ3RILENBQUMsQ0FBQ3NILE1BQUYsR0FBUzJDO0FBQWpDLFNBQXRHLEVBQTBJQyxDQUFDLEVBQTNJO0FBQThJOztBQUFBLGFBQU9GLENBQUMsQ0FBQ2xELEtBQUYsR0FBUXlELElBQUksQ0FBQ0UsR0FBTCxDQUFTVCxDQUFDLENBQUNsRCxLQUFYLEVBQWlCLENBQWpCLENBQVIsRUFBNEJrRCxDQUFDLENBQUMxQyxNQUFGLEdBQVNpRCxJQUFJLENBQUNFLEdBQUwsQ0FBU1QsQ0FBQyxDQUFDMUMsTUFBWCxFQUFrQixDQUFsQixDQUFyQyxFQUEwRDBDLENBQWpFO0FBQW1FO0FBQTdZLEdBQVI7QUFBdVoxRCxHQUFDLENBQUNFLE1BQUYsQ0FBU0YsQ0FBQyxDQUFDb0UsTUFBWCxFQUFrQjtBQUFDQyxxQkFBaUIsRUFBQywyQkFBU3hILENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTBCLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsYUFBT0QsQ0FBQyxJQUFFaEssQ0FBQyxJQUFFaUssQ0FBTCxDQUFELEdBQVNqSyxDQUFULEdBQVdBLENBQVgsR0FBYXNJLENBQXBCO0FBQXNCLEtBQTdEO0FBQThEc0Msb0JBQWdCLEVBQUMsMEJBQVN6SCxDQUFULEVBQVduRCxDQUFYLEVBQWFzSSxDQUFiLEVBQWUwQixDQUFmLEVBQWlCQyxDQUFqQixFQUFtQjtBQUFDLGFBQU0sQ0FBQ0QsQ0FBRCxHQUFHTyxJQUFJLENBQUNNLEdBQUwsQ0FBUzdLLENBQUMsR0FBQ2lLLENBQUYsSUFBS00sSUFBSSxDQUFDTyxFQUFMLEdBQVEsQ0FBYixDQUFULENBQUgsR0FBNkJkLENBQTdCLEdBQStCMUIsQ0FBckM7QUFBdUMsS0FBMUk7QUFBMkl5QyxxQkFBaUIsRUFBQywyQkFBUzVILENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTBCLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsYUFBT0QsQ0FBQyxHQUFDTyxJQUFJLENBQUNTLEdBQUwsQ0FBU2hMLENBQUMsR0FBQ2lLLENBQUYsSUFBS00sSUFBSSxDQUFDTyxFQUFMLEdBQVEsQ0FBYixDQUFULENBQUYsR0FBNEJ4QyxDQUFuQztBQUFxQztBQUF0TixHQUFsQjtBQUEyTyxNQUFJMkMsT0FBTyxJQUFFQyxDQUFDLEdBQUM1SixRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQXZCLENBQUYsRUFBZ0NpSSxDQUFDLEdBQUMsd0JBQXdCQyxLQUF4QixDQUE4QixHQUE5QixDQUFsQyxFQUFxRTtBQUFDQyxVQUFNLEdBQUVDLEVBQUUsR0FBQ2hLLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBSCxFQUFvQyxFQUFFLENBQUNvSSxFQUFFLENBQUNDLFVBQUosSUFBZ0IsQ0FBQ0QsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUFuQixDQUF0QyxDQUFQO0FBQXNGQyxPQUFHLEVBQUM7QUFBQ0MsZUFBUyxFQUFDQyxDQUFDLENBQUMsV0FBRCxDQUFaO0FBQTBCQyxlQUFTLEVBQUNELENBQUMsQ0FBQyxXQUFELENBQXJDO0FBQW1ERSxjQUFRLEVBQUMsa0JBQVN6SSxDQUFULEVBQVc7QUFBQyxlQUFPdUksQ0FBQyxDQUFDdkksQ0FBRCxFQUFHLFFBQUgsQ0FBUjtBQUFxQjtBQUE3RixLQUExRjtBQUF5TDBJLE9BQUcsRUFBQyxDQUFDLENBQUN2SyxRQUFRLENBQUN3SyxlQUFYLElBQTRCLENBQUMsQ0FBQ3hLLFFBQVEsQ0FBQ3dLLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXNELEtBQXRELEVBQTZEQyxhQUF4UjtBQUFzU0MsU0FBSyxFQUFDLFlBQVU7QUFBQyxVQUFHO0FBQUMsZUFBTSxDQUFDLEVBQUUsa0JBQWlCdkwsTUFBakIsSUFBeUJBLE1BQU0sQ0FBQ3dMLGFBQVAsSUFBc0IzSyxRQUFRLFlBQVkySyxhQUFyRSxDQUFQO0FBQTJGLE9BQS9GLENBQStGLE9BQU05SSxDQUFOLEVBQVE7QUFBQyxlQUFNLENBQUMsQ0FBUDtBQUFTO0FBQUMsS0FBN0g7QUFBNVMsR0FBdkUsQ0FBWDtBQUFBLE1BQWdnQm1JLEVBQWhnQjtBQUFBLE1BQW1nQkosQ0FBbmdCO0FBQUEsTUFBcWdCQyxDQUFyZ0I7O0FBQXVnQixXQUFTTyxDQUFULENBQVd2SSxDQUFYLEVBQWFuRCxDQUFiLEVBQWU7QUFBQyxRQUFJc0ksQ0FBQyxHQUFDbkYsQ0FBQyxDQUFDZ0csTUFBRixDQUFTLENBQVQsRUFBWUMsV0FBWixLQUEwQmpHLENBQUMsQ0FBQytJLE1BQUYsQ0FBUyxDQUFULENBQWhDO0FBQTRDLFdBQU8sVUFBUy9JLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSXNJLENBQVIsSUFBYW5GLENBQWIsRUFBZSxJQUFHLEtBQUssQ0FBTCxLQUFTK0gsQ0FBQyxDQUFDbkgsS0FBRixDQUFRWixDQUFDLENBQUNtRixDQUFELENBQVQsQ0FBWixFQUEwQixPQUFNLGFBQVd0SSxDQUFYLElBQWNtRCxDQUFDLENBQUNtRixDQUFELENBQXJCOztBQUF5QixhQUFNLENBQUMsQ0FBUDtBQUFTLEtBQXpGLENBQTBGLENBQUNuRixDQUFDLEdBQUMsR0FBRixHQUFNZ0ksQ0FBQyxDQUFDeEcsSUFBRixDQUFPMkQsQ0FBQyxHQUFDLEdBQVQsQ0FBTixHQUFvQkEsQ0FBckIsRUFBd0I4QyxLQUF4QixDQUE4QixHQUE5QixDQUExRixFQUE2SHBMLENBQTdILENBQVA7QUFBdUk7O0FBQUFpTCxTQUFPLENBQUNrQixpQkFBUixHQUEwQixZQUFVO0FBQUNsQixXQUFPLENBQUNtQixXQUFSLEdBQW9CbkIsT0FBTyxDQUFDZSxLQUFSLEtBQWdCakYsT0FBTyxDQUFDQyxZQUFSLElBQXNCRCxPQUFPLENBQUNFLE9BQTlCLElBQXVDRixPQUFPLENBQUNzQixRQUEvQyxJQUF5RHRCLE9BQU8sQ0FBQ3FCLFlBQWpFLElBQStFLENBQUMsbUJBQW1CaUUsSUFBbkIsQ0FBd0I3RSxTQUFTLENBQUM4RSxRQUFsQyxDQUFoRyxDQUFwQjtBQUFpSyxHQUF0TSxFQUF1TXJCLE9BQU8sQ0FBQ2tCLGlCQUFSLEVBQXZNOztBQUFtTyxNQUFJSSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxHQUFVO0FBQUMsV0FBTyxLQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQi9ELEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0I4RCxJQUF0QixDQUEyQjNDLFNBQTNCLENBQTNCLENBQVA7QUFBeUUsR0FBbkc7O0FBQW9HLFdBQVM0QyxNQUFULEdBQWlCO0FBQUMsV0FBTyxLQUFLSCxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQmhFLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsQ0FBUDtBQUEwRDs7QUFBQSxXQUFTNkMsVUFBVCxDQUFvQjVDLENBQXBCLEVBQXNCO0FBQUMsUUFBSUMsQ0FBQyxHQUFDO0FBQUM0QyxVQUFJLEVBQUM7QUFBTixLQUFOO0FBQXFCLFdBQU92RyxDQUFDLENBQUN3RyxJQUFGLENBQU9DLEtBQVAsRUFBYSxVQUFTNUosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQ3RJLENBQUMsQ0FBQ2tCLElBQUYsQ0FBTzhJLENBQVAsQ0FBTjtBQUFnQjFCLE9BQUMsS0FBRyxDQUFDMkIsQ0FBQyxHQUFDM0IsQ0FBSCxFQUFNdUUsSUFBTixHQUFXMUosQ0FBWCxFQUFhOEcsQ0FBQyxDQUFDeEssR0FBRixHQUFNdUssQ0FBdEIsQ0FBRDtBQUEwQixLQUFyRSxHQUF1RUMsQ0FBOUU7QUFBZ0Y7O0FBQUEsV0FBUytDLGVBQVQsQ0FBeUI3SixDQUF6QixFQUEyQjtBQUFDLFFBQUluRCxDQUFDLEdBQUMsQ0FBQ21ELENBQUMsSUFBRSxFQUFKLEVBQVE4SixPQUFSLENBQWdCLE9BQWhCLEVBQXdCLEVBQXhCLEVBQTRCL0UsS0FBNUIsQ0FBa0MsZ0JBQWxDLENBQU47QUFBMEQsV0FBT2xJLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLa04sV0FBTCxFQUFELEdBQW9CLElBQTVCO0FBQWlDOztBQUFBNUcsR0FBQyxDQUFDRSxNQUFGLENBQVMrRixVQUFVLENBQUM1RCxTQUFwQixFQUE4QjtBQUFDd0UsWUFBUSxFQUFDO0FBQUNDLGtCQUFZLEVBQUMsa0JBQWlCLElBQUlDLEtBQUo7QUFBL0IsS0FBVjtBQUFvRGIsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhc0ksQ0FBYixFQUFlO0FBQUMsV0FBS3BELEdBQUwsR0FBU29CLENBQUMsQ0FBQ25ELENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBVCxFQUFpQixLQUFLbUssZUFBTCxHQUFxQnROLENBQXRDLEVBQXdDLEtBQUt1TixhQUFMLEdBQW1CakYsQ0FBM0QsRUFBNkQsS0FBS2tGLFFBQUwsR0FBYyxDQUFDLENBQTVFLEVBQThFLEtBQUtDLE9BQUwsR0FBYW5ILENBQUMsQ0FBQ0UsTUFBRixDQUFTO0FBQUNrSCxjQUFNLEVBQUMsY0FBUjtBQUF1QkMseUJBQWlCLEVBQUM7QUFBekMsT0FBVCxFQUF1RDVELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBYyxFQUFyRSxDQUEzRixFQUFvSyxLQUFLb0QsUUFBTCxDQUFjQyxZQUFkLElBQTRCLGFBQVcsS0FBS0ssT0FBTCxDQUFhQyxNQUFwRCxHQUEyRCxLQUFLeEksR0FBTCxDQUFTMEksUUFBVCxJQUFtQixnQkFBY3RILENBQUMsQ0FBQ3VHLElBQUYsQ0FBTyxLQUFLM0gsR0FBTCxDQUFTa0ksWUFBaEIsQ0FBakMsR0FBK0RTLFVBQVUsQ0FBQ3ZILENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsWUFBRSxLQUFLNUksR0FBTCxDQUFTa0ksWUFBWCxHQUF3QixLQUFLVyxPQUFMLEVBQXhCLEdBQXVDLEtBQUtsTixLQUFMLEVBQXZDO0FBQW9ELE9BQXZFLEVBQXdFLElBQXhFLENBQUQsQ0FBekUsSUFBMEp5RixDQUFDLENBQUMsS0FBS3BCLEdBQU4sQ0FBRCxDQUFZNUIsSUFBWixDQUFpQixPQUFqQixFQUF5QmdELENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUNELGtCQUFVLENBQUN2SCxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLGVBQUtqTixLQUFMO0FBQWEsU0FBaEMsRUFBaUMsSUFBakMsQ0FBRCxDQUFWO0FBQW1ELE9BQXRFLEVBQXVFLElBQXZFLENBQXpCLEdBQXVHLEtBQUttTixTQUFMLEdBQWUsQ0FBQyxDQUFDLEdBQUQsRUFBSyxFQUFMLENBQUQsRUFBVSxDQUFDLEdBQUQsRUFBSyxFQUFMLENBQVYsRUFBbUIsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFuQixFQUE2QixDQUFDLEdBQUQsRUFBSyxHQUFMLENBQTdCLENBQXRILEVBQThKLEtBQUtDLEtBQUwsR0FBVyxDQUF6SyxFQUEySyxLQUFLQyxLQUFMLEdBQVcsQ0FBdEwsRUFBd0wsS0FBS0MsTUFBTCxHQUFZLEtBQUtILFNBQUwsQ0FBZSxLQUFLQyxLQUFwQixFQUEyQixDQUEzQixDQUFwTSxFQUFrTyxLQUFLRyxJQUFMLEVBQTVYLENBQTNELEdBQW9jUCxVQUFVLENBQUN2SCxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS08sUUFBYixFQUFzQixJQUF0QixDQUFELENBQWxuQjtBQUFncEIsS0FBL3RCO0FBQWd1QkQsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS0UsUUFBTCxHQUFjVCxVQUFVLENBQUN2SCxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLFlBQUcsSUFBRSxLQUFLNUksR0FBTCxDQUFTa0ksWUFBZCxFQUEyQixLQUFLVyxPQUFMLEdBQTNCLEtBQThDO0FBQUMsY0FBRyxLQUFLRyxLQUFMLElBQVksS0FBS0MsTUFBakIsRUFBd0IsS0FBS1YsT0FBTCxDQUFhRSxpQkFBYixJQUFnQyxLQUFLTyxLQUFMLElBQVksS0FBS1QsT0FBTCxDQUFhRSxpQkFBekQsSUFBNEUsQ0FBQyxLQUFLWSxpQkFBbEYsS0FBc0csS0FBS0EsaUJBQUwsR0FBdUIsQ0FBQyxDQUF4QixFQUEwQixLQUFLRixRQUFMLEVBQWhJLENBQXhCLEVBQXlLLEtBQUtILEtBQUwsR0FBVyxLQUFLRixTQUFMLENBQWUsS0FBS0MsS0FBcEIsRUFBMkIsQ0FBM0IsQ0FBdkwsRUFBcU47QUFBQyxnQkFBRyxDQUFDLEtBQUtELFNBQUwsQ0FBZSxLQUFLQyxLQUFMLEdBQVcsQ0FBMUIsQ0FBSixFQUFpQyxPQUFPLEtBQUssS0FBS3BOLEtBQUwsRUFBWjtBQUF5QixpQkFBS29OLEtBQUwsSUFBYSxLQUFLRSxNQUFMLEdBQVksS0FBS0gsU0FBTCxDQUFlLEtBQUtDLEtBQXBCLEVBQTJCLENBQTNCLENBQXpCO0FBQXVEOztBQUFBLGVBQUtHLElBQUw7QUFBWTtBQUFDLE9BQXRaLEVBQXVaLElBQXZaLENBQUQsRUFBOFosS0FBS0QsTUFBbmEsQ0FBeEI7QUFBbWMsS0FBbnJDO0FBQW9yQ0UsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBSWxMLENBQUMsR0FBQyxJQUFJa0ssS0FBSixFQUFOO0FBQWdCLE9BQUMsS0FBS21CLFlBQUwsR0FBa0JyTCxDQUFuQixFQUFzQjhDLE1BQXRCLEdBQTZCSyxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDM0ssU0FBQyxDQUFDOEMsTUFBRixHQUFTLFlBQVUsQ0FBRSxDQUFyQixFQUFzQixLQUFLa0gsUUFBTCxDQUFjQyxZQUFkLEtBQTZCLEtBQUtsSSxHQUFMLENBQVNrSSxZQUFULEdBQXNCakssQ0FBQyxDQUFDMkQsS0FBeEIsRUFBOEIsS0FBSzVCLEdBQUwsQ0FBU3VKLGFBQVQsR0FBdUJ0TCxDQUFDLENBQUNtRSxNQUFwRixDQUF0QixFQUFrSCxLQUFLeUcsT0FBTCxFQUFsSDtBQUFpSSxPQUFwSixFQUFxSixJQUFySixDQUE3QixFQUF3TDVLLENBQUMsQ0FBQ3VMLE9BQUYsR0FBVXBJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLak4sS0FBYixFQUFtQixJQUFuQixDQUFsTSxFQUEyTnNDLENBQUMsQ0FBQ3dMLEdBQUYsR0FBTSxLQUFLekosR0FBTCxDQUFTeUosR0FBMU87QUFBOE8sS0FBdDhDO0FBQXU4Q0MsU0FBSyxFQUFDLGlCQUFVO0FBQUMsV0FBS0osWUFBTCxLQUFvQixLQUFLQSxZQUFMLENBQWtCdkksTUFBbEIsR0FBeUIsWUFBVSxDQUFFLENBQXpELEdBQTJELEtBQUtxSSxRQUFMLEtBQWdCTyxZQUFZLENBQUMsS0FBS1AsUUFBTixDQUFaLEVBQTRCLEtBQUtBLFFBQUwsR0FBYyxJQUExRCxDQUEzRDtBQUEySCxLQUFubEQ7QUFBb2xEUCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLZSxjQUFMLEtBQXNCLEtBQUtBLGNBQUwsR0FBb0IsQ0FBQyxDQUFyQixFQUF1QixLQUFLdEIsUUFBTCxHQUFjLENBQUMsQ0FBdEMsRUFBd0MsS0FBS0YsZUFBTCxDQUFxQixJQUFyQixDQUE5RDtBQUEwRixLQUFqc0Q7QUFBa3NEek0sU0FBSyxFQUFDLGlCQUFVO0FBQUMsV0FBS2tPLFlBQUwsS0FBb0IsS0FBS0EsWUFBTCxHQUFrQixDQUFDLENBQW5CLEVBQXFCLEtBQUtILEtBQUwsRUFBckIsRUFBa0MsS0FBS3JCLGFBQUwsSUFBb0IsS0FBS0EsYUFBTCxDQUFtQixJQUFuQixDQUExRTtBQUFvRztBQUF2ekQsR0FBOUIsR0FBdzFEakgsQ0FBQyxDQUFDRSxNQUFGLENBQVNtRyxNQUFNLENBQUNoRSxTQUFoQixFQUEwQjtBQUFDNkQsY0FBVSxFQUFDLHNCQUFVO0FBQUMsV0FBS3dDLE9BQUwsR0FBYSxFQUFiO0FBQWdCLEtBQXZDO0FBQXdDQyxPQUFHLEVBQUMsYUFBUzlMLENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTtBQUFDLFdBQUswRyxPQUFMLENBQWE3TCxDQUFiLElBQWdCMEssVUFBVSxDQUFDN04sQ0FBRCxFQUFHc0ksQ0FBSCxDQUExQjtBQUFnQyxLQUE1RjtBQUE2RjdHLE9BQUcsRUFBQyxhQUFTMEIsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLNkwsT0FBTCxDQUFhN0wsQ0FBYixDQUFQO0FBQXVCLEtBQXBJO0FBQXFJK0wsU0FBSyxFQUFDLGVBQVMvTCxDQUFULEVBQVc7QUFBQ0EsT0FBQyxHQUFDLEtBQUs2TCxPQUFMLENBQWE3TCxDQUFiLE1BQWtCMEwsWUFBWSxDQUFDLEtBQUtHLE9BQUwsQ0FBYTdMLENBQWIsQ0FBRCxDQUFaLEVBQThCLE9BQU8sS0FBSzZMLE9BQUwsQ0FBYTdMLENBQWIsQ0FBdkQsQ0FBRCxHQUF5RSxLQUFLZ00sUUFBTCxFQUExRTtBQUEwRixLQUFqUDtBQUFrUEEsWUFBUSxFQUFDLG9CQUFVO0FBQUM3SSxPQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBS2tDLE9BQVosRUFBb0IsVUFBUzdMLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDNk8sb0JBQVksQ0FBQzdPLENBQUQsQ0FBWjtBQUFnQixPQUFsRCxHQUFvRCxLQUFLZ1AsT0FBTCxHQUFhLEVBQWpFO0FBQW9FO0FBQTFVLEdBQTFCLENBQXgxRDs7QUFBK3JFLE1BQUlJLElBQUksR0FBQztBQUFDQyxXQUFPLEVBQUMsaUJBQVNsTSxDQUFULEVBQVc7QUFBQyxhQUFNLG9CQUFvQmtKLElBQXBCLENBQXlCbEosQ0FBekIsQ0FBTjtBQUFrQztBQUF2RCxHQUFUO0FBQUEsTUFBa0U0SixLQUFLLEdBQUM7QUFBQ3VDLFNBQUssRUFBQztBQUFDQyxnQkFBVSxFQUFDLDJCQUFaO0FBQXdDQyxZQUFNLEVBQUMsZ0JBQVNyTSxDQUFULEVBQVc7QUFBQyxlQUFNLENBQUMsQ0FBRCxHQUFHbUQsQ0FBQyxDQUFDbUosT0FBRixDQUFVekMsZUFBZSxDQUFDN0osQ0FBRCxDQUF6QixFQUE2QixLQUFLb00sVUFBTCxDQUFnQm5FLEtBQWhCLENBQXNCLEdBQXRCLENBQTdCLENBQVQ7QUFBa0UsT0FBN0g7QUFBOEhsSyxVQUFJLEVBQUMsY0FBU2lDLENBQVQsRUFBVztBQUFDLGVBQU0sQ0FBQyxDQUFDLEtBQUtxTSxNQUFMLEVBQUYsSUFBaUI7QUFBQ0UsbUJBQVMsRUFBQzFDLGVBQWUsQ0FBQzdKLENBQUQ7QUFBMUIsU0FBdkI7QUFBc0Q7QUFBck0sS0FBUDtBQUE4TXdNLFNBQUssRUFBQztBQUFDSCxZQUFNLEVBQUMsZ0JBQVNyTSxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLDJDQUEyQ3dJLElBQTNDLENBQWdEckYsQ0FBaEQsQ0FBTjtBQUF5RCxlQUFNLEVBQUUsQ0FBQ25ELENBQUQsSUFBSSxDQUFDQSxDQUFDLENBQUMsQ0FBRCxDQUFSLEtBQWNBLENBQUMsQ0FBQyxDQUFELENBQXJCO0FBQXlCLE9BQXRHO0FBQXVHa0IsVUFBSSxFQUFDLGNBQVNpQyxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLEtBQUt3UCxNQUFMLENBQVlyTSxDQUFaLENBQU47QUFBcUIsZUFBTSxDQUFDLENBQUNuRCxDQUFGLElBQUs7QUFBQzRQLFlBQUUsRUFBQzVQO0FBQUosU0FBWDtBQUFrQjtBQUEvSixLQUFwTjtBQUFxWDZQLFdBQU8sRUFBQztBQUFDTCxZQUFNLEVBQUMsZ0JBQVNyTSxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLHVFQUF1RXdJLElBQXZFLENBQTRFckYsQ0FBNUUsQ0FBTjtBQUFxRixlQUFPbkQsQ0FBQyxJQUFFQSxDQUFDLENBQUMsQ0FBRCxDQUFKLEdBQVFBLENBQUMsQ0FBQyxDQUFELENBQVQsR0FBYSxFQUFFLEVBQUVBLENBQUMsR0FBQywyRUFBMkV3SSxJQUEzRSxDQUFnRnJGLENBQWhGLENBQUosS0FBeUYsQ0FBQ25ELENBQUMsQ0FBQyxDQUFELENBQTdGLEtBQW1HQSxDQUFDLENBQUMsQ0FBRCxDQUF4SDtBQUE0SCxPQUFyTztBQUFzT2tCLFVBQUksRUFBQyxjQUFTaUMsQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQyxLQUFLd1AsTUFBTCxDQUFZck0sQ0FBWixDQUFOO0FBQXFCLGVBQU0sQ0FBQyxDQUFDbkQsQ0FBRixJQUFLO0FBQUM0UCxZQUFFLEVBQUM1UDtBQUFKLFNBQVg7QUFBa0I7QUFBOVI7QUFBN1gsR0FBeEU7QUFBQSxNQUFzdUI4UCxjQUFjLEdBQUMsWUFBVTtBQUFDLGFBQVMzTSxDQUFULEdBQVk7QUFBQyxhQUFPLEtBQUtxSixVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQmhFLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsQ0FBUDtBQUEwRDs7QUFBQXpELEtBQUMsQ0FBQ0UsTUFBRixDQUFTckQsQ0FBQyxDQUFDd0YsU0FBWCxFQUFxQjtBQUFDNkQsZ0JBQVUsRUFBQyxvQkFBU3JKLENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTtBQUFDLGFBQUs3SSxHQUFMLEdBQVMwRCxDQUFULEVBQVcsS0FBS21LLGVBQUwsR0FBcUJ0TixDQUFoQyxFQUFrQyxLQUFLdU4sYUFBTCxHQUFtQmpGLENBQXJELEVBQXVELEtBQUt5SCxJQUFMLEVBQXZEO0FBQW1FLE9BQS9GO0FBQWdHQSxVQUFJLEVBQUMsZ0JBQVU7QUFBQyxZQUFJNU0sQ0FBQyxHQUFDNkcsQ0FBQyxDQUFDdkksR0FBRixDQUFNLEtBQUtoQyxHQUFYLENBQU47QUFBc0IsWUFBRzBELENBQUgsRUFBSyxPQUFPLEtBQUttSyxlQUFMLENBQXFCbkssQ0FBQyxDQUFDakMsSUFBRixDQUFPekIsR0FBNUIsQ0FBUDtBQUF3QyxZQUFJTyxDQUFDLEdBQUMsVUFBUVMsTUFBTSxDQUFDQyxRQUFQLElBQWlCLGFBQVdELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnNQLFFBQTVDLEdBQXFELEdBQXJELEdBQXlELEVBQWpFLElBQXFFLEdBQTNFO0FBQUEsWUFBK0UxSCxDQUFDLEdBQUNzRSxVQUFVLENBQUMsS0FBS25OLEdBQU4sQ0FBVixDQUFxQm1RLEVBQXRHO0FBQXlHLGFBQUtLLElBQUwsR0FBVTNKLENBQUMsQ0FBQzRKLE9BQUYsQ0FBVWxRLENBQUMsR0FBQyxrQ0FBRixHQUFxQ0EsQ0FBckMsR0FBdUMsY0FBdkMsR0FBc0RzSSxDQUF0RCxHQUF3RCxhQUFsRSxFQUFnRmhDLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsY0FBR0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNnTixhQUFSLEVBQXNCO0FBQUMsZ0JBQUluUSxDQUFDLEdBQUM7QUFBQ1AsaUJBQUcsRUFBQzBELENBQUMsQ0FBQ2dOO0FBQVAsYUFBTjtBQUE0Qm5HLGFBQUMsQ0FBQ2lGLEdBQUYsQ0FBTSxLQUFLeFAsR0FBWCxFQUFlTyxDQUFmLEdBQWtCLEtBQUtzTixlQUFMLENBQXFCdE4sQ0FBQyxDQUFDUCxHQUF2QixDQUFsQjtBQUE4QyxXQUFqRyxNQUFzRyxLQUFLOE4sYUFBTDtBQUFxQixTQUEvSSxFQUFnSixJQUFoSixDQUFoRixDQUFWO0FBQWlQLE9BQTdnQjtBQUE4Z0JxQixXQUFLLEVBQUMsaUJBQVU7QUFBQyxhQUFLcUIsSUFBTCxLQUFZLEtBQUtBLElBQUwsQ0FBVXJCLEtBQVYsSUFBa0IsS0FBS3FCLElBQUwsR0FBVSxJQUF4QztBQUE4QztBQUE3a0IsS0FBckI7QUFBcW1CLFFBQUlqRyxDQUFDLEdBQUM7QUFBQ29HLFdBQUssRUFBQyxFQUFQO0FBQVUzTyxTQUFHLEVBQUMsYUFBUzBCLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSW5ELENBQUMsR0FBQyxJQUFOLEVBQVdzSSxDQUFDLEdBQUMsQ0FBakIsRUFBbUJBLENBQUMsR0FBQyxLQUFLOEgsS0FBTCxDQUFXNU8sTUFBaEMsRUFBdUM4RyxDQUFDLEVBQXhDLEVBQTJDLEtBQUs4SCxLQUFMLENBQVc5SCxDQUFYLEtBQWUsS0FBSzhILEtBQUwsQ0FBVzlILENBQVgsRUFBYzdJLEdBQWQsS0FBb0IwRCxDQUFuQyxLQUF1Q25ELENBQUMsR0FBQyxLQUFLb1EsS0FBTCxDQUFXOUgsQ0FBWCxDQUF6Qzs7QUFBd0QsZUFBT3RJLENBQVA7QUFBUyxPQUF0STtBQUF1SWlQLFNBQUcsRUFBQyxhQUFTOUwsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS2UsTUFBTCxDQUFZb0MsQ0FBWixHQUFlLEtBQUtpTixLQUFMLENBQVdDLElBQVgsQ0FBZ0I7QUFBQzVRLGFBQUcsRUFBQzBELENBQUw7QUFBT2pDLGNBQUksRUFBQ2xCO0FBQVosU0FBaEIsQ0FBZjtBQUErQyxPQUF4TTtBQUF5TWUsWUFBTSxFQUFDLGdCQUFTb0MsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJbkQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtvUSxLQUFMLENBQVc1TyxNQUF6QixFQUFnQ3hCLENBQUMsRUFBakMsRUFBb0MsS0FBS29RLEtBQUwsQ0FBV3BRLENBQVgsS0FBZSxLQUFLb1EsS0FBTCxDQUFXcFEsQ0FBWCxFQUFjUCxHQUFkLEtBQW9CMEQsQ0FBbkMsSUFBc0MsT0FBTyxLQUFLaU4sS0FBTCxDQUFXcFEsQ0FBWCxDQUE3QztBQUEyRDtBQUEzVCxLQUFOO0FBQW1VLFdBQU9tRCxDQUFQO0FBQVMsR0FBbmdDLEVBQXJ2QjtBQUFBLE1BQTJ2RG1OLFVBQVUsR0FBQyxZQUFVO0FBQUMsYUFBU25OLENBQVQsR0FBWTtBQUFDLGFBQU8sS0FBS3FKLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLElBQXRCLEVBQTJCaEUsTUFBTSxDQUFDaUUsSUFBUCxDQUFZM0MsU0FBWixDQUEzQixDQUFQO0FBQTBEOztBQUFBekQsS0FBQyxDQUFDRSxNQUFGLENBQVNyRCxDQUFDLENBQUN3RixTQUFYLEVBQXFCO0FBQUM2RCxnQkFBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS1AsR0FBTCxHQUFTMEQsQ0FBVCxFQUFXLEtBQUtvTixRQUFMLEdBQWN2USxDQUF6QixFQUEyQixLQUFLK1AsSUFBTCxFQUEzQjtBQUF1QyxPQUFqRTtBQUFrRUEsVUFBSSxFQUFDLGdCQUFVO0FBQUMsWUFBSTVNLENBQUMsR0FBQzZHLENBQUMsQ0FBQ3ZJLEdBQUYsQ0FBTSxLQUFLaEMsR0FBWCxDQUFOO0FBQXNCLFlBQUcwRCxDQUFILEVBQUssT0FBTyxLQUFLb04sUUFBTCxDQUFjcE4sQ0FBQyxDQUFDakMsSUFBaEIsQ0FBUDtBQUE2QixZQUFJbEIsQ0FBQyxHQUFDLFVBQVFTLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixhQUFXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JzUCxRQUE1QyxHQUFxRCxHQUFyRCxHQUF5RCxFQUFqRSxJQUFxRSxHQUEzRTtBQUFBLFlBQStFMUgsQ0FBQyxHQUFDc0UsVUFBVSxDQUFDLEtBQUtuTixHQUFOLENBQVYsQ0FBcUJtUSxFQUF0RztBQUF5RyxhQUFLSyxJQUFMLEdBQVUzSixDQUFDLENBQUM0SixPQUFGLENBQVVsUSxDQUFDLEdBQUMsa0NBQUYsR0FBcUNBLENBQXJDLEdBQXVDLGNBQXZDLEdBQXNEc0ksQ0FBdEQsR0FBd0QsZ0RBQWxFLEVBQW1IaEMsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxjQUFJbkQsQ0FBQyxHQUFDO0FBQUN3USxzQkFBVSxFQUFDO0FBQUMxSixtQkFBSyxFQUFDM0QsQ0FBQyxDQUFDMkQsS0FBVDtBQUFlUSxvQkFBTSxFQUFDbkUsQ0FBQyxDQUFDbUU7QUFBeEI7QUFBWixXQUFOO0FBQW1EMEMsV0FBQyxDQUFDaUYsR0FBRixDQUFNLEtBQUt4UCxHQUFYLEVBQWVPLENBQWYsR0FBa0IsS0FBS3VRLFFBQUwsSUFBZSxLQUFLQSxRQUFMLENBQWN2USxDQUFkLENBQWpDO0FBQWtELFNBQXpILEVBQTBILElBQTFILENBQW5ILENBQVY7QUFBOFAsT0FBamY7QUFBa2Y0TyxXQUFLLEVBQUMsaUJBQVU7QUFBQyxhQUFLcUIsSUFBTCxLQUFZLEtBQUtBLElBQUwsQ0FBVXJCLEtBQVYsSUFBa0IsS0FBS3FCLElBQUwsR0FBVSxJQUF4QztBQUE4QztBQUFqakIsS0FBckI7QUFBeWtCLFFBQUlqRyxDQUFDLEdBQUM7QUFBQ29HLFdBQUssRUFBQyxFQUFQO0FBQVUzTyxTQUFHLEVBQUMsYUFBUzBCLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSW5ELENBQUMsR0FBQyxJQUFOLEVBQVdzSSxDQUFDLEdBQUMsQ0FBakIsRUFBbUJBLENBQUMsR0FBQyxLQUFLOEgsS0FBTCxDQUFXNU8sTUFBaEMsRUFBdUM4RyxDQUFDLEVBQXhDLEVBQTJDLEtBQUs4SCxLQUFMLENBQVc5SCxDQUFYLEtBQWUsS0FBSzhILEtBQUwsQ0FBVzlILENBQVgsRUFBYzdJLEdBQWQsS0FBb0IwRCxDQUFuQyxLQUF1Q25ELENBQUMsR0FBQyxLQUFLb1EsS0FBTCxDQUFXOUgsQ0FBWCxDQUF6Qzs7QUFBd0QsZUFBT3RJLENBQVA7QUFBUyxPQUF0STtBQUF1SWlQLFNBQUcsRUFBQyxhQUFTOUwsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS2UsTUFBTCxDQUFZb0MsQ0FBWixHQUFlLEtBQUtpTixLQUFMLENBQVdDLElBQVgsQ0FBZ0I7QUFBQzVRLGFBQUcsRUFBQzBELENBQUw7QUFBT2pDLGNBQUksRUFBQ2xCO0FBQVosU0FBaEIsQ0FBZjtBQUErQyxPQUF4TTtBQUF5TWUsWUFBTSxFQUFDLGdCQUFTb0MsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJbkQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtvUSxLQUFMLENBQVc1TyxNQUF6QixFQUFnQ3hCLENBQUMsRUFBakMsRUFBb0MsS0FBS29RLEtBQUwsQ0FBV3BRLENBQVgsS0FBZSxLQUFLb1EsS0FBTCxDQUFXcFEsQ0FBWCxFQUFjUCxHQUFkLEtBQW9CMEQsQ0FBbkMsSUFBc0MsT0FBTyxLQUFLaU4sS0FBTCxDQUFXcFEsQ0FBWCxDQUE3QztBQUEyRDtBQUEzVCxLQUFOO0FBQW1VLFdBQU9tRCxDQUFQO0FBQVMsR0FBditCLEVBQXR3RDtBQUFBLE1BQWd2RnNOLE9BQU8sR0FBQztBQUFDQyxZQUFRLEVBQUM7QUFBQ0MsYUFBTyxFQUFDO0FBQUNDLGVBQU8sRUFBQztBQUFDQyxjQUFJLEVBQUMsQ0FBTjtBQUFRQyxjQUFJLEVBQUM7QUFBYixTQUFUO0FBQXlCQyxlQUFPLEVBQUM7QUFBQ0YsY0FBSSxFQUFDLEdBQU47QUFBVUMsY0FBSSxFQUFDO0FBQWYsU0FBakM7QUFBcURyUSxjQUFNLEVBQUM7QUFBQ29RLGNBQUksRUFBQyxHQUFOO0FBQVVDLGNBQUksRUFBQztBQUFmLFNBQTVEO0FBQWdGRSxpQkFBUyxFQUFDO0FBQUNILGNBQUksRUFBQyxHQUFOO0FBQVVJLGVBQUssRUFBQztBQUFoQixTQUExRjtBQUErR0Msa0JBQVUsRUFBQztBQUFDQyxlQUFLLEVBQUM7QUFBUDtBQUExSCxPQUFUO0FBQThJQyxjQUFRLEVBQUM7QUFBQ0MsWUFBSSxFQUFDLENBQUMsQ0FBUDtBQUFTQyxhQUFLLEVBQUMsQ0FBQyxDQUFoQjtBQUFrQkMsV0FBRyxFQUFDLENBQUM7QUFBdkIsT0FBdko7QUFBaUxDLGtCQUFZLEVBQUMsY0FBOUw7QUFBNk1DLFVBQUksRUFBQyxDQUFDLENBQW5OO0FBQXFOQyxhQUFPLEVBQUMsZUFBN047QUFBNk9DLGNBQVEsRUFBQyxDQUFDLENBQXZQO0FBQXlQL1AsYUFBTyxFQUFDO0FBQUNnUSxhQUFLLEVBQUMsQ0FBQztBQUFSLE9BQWpRO0FBQTRRQyxhQUFPLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFwUjtBQUEwUkMsY0FBUSxFQUFDLENBQUMsQ0FBcFM7QUFBc1NDLFVBQUksRUFBQyxRQUEzUztBQUFvVGhCLGFBQU8sRUFBQyxDQUFDLENBQTdUO0FBQStUaUIsa0JBQVksRUFBQyxHQUE1VTtBQUFnVkMsVUFBSSxFQUFDLENBQUMsQ0FBdFY7QUFBd1ZmLGdCQUFVLEVBQUMsWUFBblc7QUFBZ1hnQixRQUFFLEVBQUMsU0FBblg7QUFBNlhDLGFBQU8sRUFBQyxHQUFyWTtBQUF5WXhDLFdBQUssRUFBQztBQUFDeUMsZ0JBQVEsRUFBQyxDQUFWO0FBQVlDLFdBQUcsRUFBQyxDQUFoQjtBQUFrQkMsYUFBSyxFQUFDLENBQXhCO0FBQTBCQyxjQUFNLEVBQUMsQ0FBakM7QUFBbUNDLGdCQUFRLEVBQUMsQ0FBNUM7QUFBOENmLFlBQUksRUFBQztBQUFuRCxPQUEvWTtBQUFxYzVCLGFBQU8sRUFBQztBQUFDdUMsZ0JBQVEsRUFBQyxDQUFWO0FBQVlLLGdCQUFRLEVBQUMsQ0FBckI7QUFBdUJDLG1CQUFXLEVBQUMsQ0FBbkM7QUFBcUNDLFVBQUUsRUFBQyxDQUF4QztBQUEwQ0Msc0JBQWMsRUFBQyxDQUF6RDtBQUEyRG5CLFlBQUksRUFBQyxDQUFoRTtBQUFrRW9CLHNCQUFjLEVBQUMsQ0FBakY7QUFBbUZDLFdBQUcsRUFBQyxDQUF2RjtBQUF5RkMsVUFBRSxFQUFDO0FBQTVGLE9BQTdjO0FBQW1qQkMsd0JBQWtCLEVBQUM7QUFBQzFELGFBQUssRUFBQyxFQUFQO0FBQVVLLGFBQUssRUFBQztBQUFDN0ksZUFBSyxFQUFDO0FBQVAsU0FBaEI7QUFBNkIrSSxlQUFPLEVBQUM7QUFBQy9JLGVBQUssRUFBQyxJQUFQO0FBQVlRLGdCQUFNLEVBQUM7QUFBbkI7QUFBckM7QUFBdGtCLEtBQVY7QUFBK29CMkwsVUFBTSxFQUFDLGdCQUFTOVAsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhc0ksQ0FBYixFQUFlO0FBQUNBLE9BQUMsR0FBQ0EsQ0FBQyxJQUFFLEVBQUwsRUFBUSxDQUFDbkYsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBTixFQUFVNE8sSUFBVixHQUFlNU8sQ0FBQyxDQUFDNE8sSUFBRixJQUFRLEtBQUtyQixRQUFMLENBQWNxQixJQUE3QztBQUFrRCxVQUFJL0gsQ0FBQyxHQUFDN0csQ0FBQyxDQUFDNE8sSUFBRixHQUFPekwsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZRCxNQUFNLENBQUNHLEtBQVAsQ0FBYXZELENBQUMsQ0FBQzRPLElBQWYsS0FBc0J4TCxNQUFNLENBQUNHLEtBQVAsQ0FBYSxLQUFLZ0ssUUFBTCxDQUFjcUIsSUFBM0IsQ0FBbEMsQ0FBUCxHQUEyRSxFQUFqRjtBQUFBLFVBQW9GOUgsQ0FBQyxHQUFDM0QsQ0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBWixFQUFlLEtBQUtrSyxRQUFwQixFQUE2QjFHLENBQTdCLENBQXRGO0FBQXNIQyxPQUFDLENBQUMrSSxrQkFBRixLQUF1QmhULENBQUMsSUFBRWlLLENBQUMsQ0FBQytJLGtCQUFGLENBQXFCaFQsQ0FBckIsQ0FBSCxLQUE2QmlLLENBQUMsR0FBQzNELENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQUMsQ0FBVixFQUFZLEVBQVosRUFBZXlELENBQUMsQ0FBQytJLGtCQUFGLENBQXFCaFQsQ0FBckIsQ0FBZixFQUF1Q2lLLENBQXZDLENBQS9CLEdBQTBFLE9BQU9BLENBQUMsQ0FBQytJLGtCQUExRztBQUE4SCxVQUFJOUksQ0FBQyxHQUFDNUQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBWixFQUFleUQsQ0FBZixFQUFpQjlHLENBQWpCLENBQU47O0FBQTBCLFVBQUc4SCxPQUFPLENBQUNtQixXQUFSLElBQXFCLGFBQVdsQyxDQUFDLENBQUNnSSxFQUFsQyxLQUF1Q2hJLENBQUMsQ0FBQ2dJLEVBQUYsR0FBSyxTQUE1QyxHQUF1RCxDQUFDLENBQUNoSSxDQUFDLENBQUN5RyxPQUFILElBQVk1SixPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBcEMsTUFBeUN3QyxDQUFDLENBQUN5RyxPQUFGLEdBQVUsRUFBVixFQUFhckssQ0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUs0RCxRQUFMLENBQWNDLE9BQXJCLEVBQTZCLFVBQVMzUSxDQUFULEVBQVdtRCxDQUFYLEVBQWE7QUFBQ21ELFNBQUMsQ0FBQ3dHLElBQUYsQ0FBTzVDLENBQUMsQ0FBQ3lHLE9BQUYsQ0FBVTNRLENBQVYsSUFBYXNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXJELENBQVosQ0FBcEIsRUFBbUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMrRyxXQUFDLENBQUN5RyxPQUFGLENBQVUzUSxDQUFWLEVBQWFtRCxDQUFiLElBQWdCLENBQWhCO0FBQWtCLFNBQWpFO0FBQW1FLE9BQTlHLENBQWIsRUFBNkgrRyxDQUFDLENBQUM2RyxPQUFGLEdBQVUsQ0FBQyxDQUFqTCxDQUF2RCxFQUEyTzdHLENBQUMsQ0FBQ2tILFFBQUYsS0FBYSxjQUFZOUssQ0FBQyxDQUFDdUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDa0gsUUFBVCxDQUFaLEtBQWlDbEgsQ0FBQyxDQUFDa0gsUUFBRixHQUFXLEVBQVgsRUFBYzlLLENBQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLNEQsUUFBTCxDQUFjVSxRQUFyQixFQUE4QixVQUFTak8sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrSyxTQUFDLENBQUNrSCxRQUFGLENBQVdqTyxDQUFYLElBQWMsQ0FBQyxDQUFmO0FBQWlCLE9BQTdELENBQS9DLEdBQStHLFlBQVVuRCxDQUFWLElBQWEsY0FBWUEsQ0FBekIsSUFBNEJzRyxDQUFDLENBQUNFLE1BQUYsQ0FBUzBELENBQUMsQ0FBQ2tILFFBQVgsRUFBb0I7QUFBQ0MsWUFBSSxFQUFDLENBQUMsQ0FBUDtBQUFTQyxhQUFLLEVBQUMsQ0FBQztBQUFoQixPQUFwQixDQUF4SixDQUEzTyxFQUE0YSxDQUFDcEgsQ0FBQyxDQUFDeUgsUUFBSCxJQUFhMUcsT0FBTyxDQUFDbUIsV0FBckIsR0FBaUNsQyxDQUFDLENBQUN5SCxRQUFGLEdBQVc7QUFBQ3VCLFNBQUMsRUFBQyxDQUFDLENBQUo7QUFBTUMsU0FBQyxFQUFDLENBQUM7QUFBVCxPQUE1QyxHQUF3RCxjQUFZN00sQ0FBQyxDQUFDdUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDeUgsUUFBVCxDQUFaLEtBQWlDekgsQ0FBQyxDQUFDeUgsUUFBRixHQUFXO0FBQUN1QixTQUFDLEVBQUMsQ0FBQyxDQUFKO0FBQU1DLFNBQUMsRUFBQyxDQUFDO0FBQVQsT0FBNUMsQ0FBcGUsRUFBNmhCLFlBQVVuVCxDQUFWLElBQWEsY0FBWUEsQ0FBekIsS0FBNkJrSyxDQUFDLENBQUNrSixPQUFGLEdBQVUsQ0FBQyxDQUF4QyxDQUE3aEIsRUFBd2tCLENBQUNyTSxPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBdkIsSUFBMEJ1RCxPQUFPLENBQUNtQixXQUFuQyxNQUFrRGxDLENBQUMsQ0FBQzhHLFNBQUYsR0FBWSxDQUFDLENBQWIsRUFBZTlHLENBQUMsQ0FBQ2dILFVBQUYsR0FBYSxDQUFDLENBQS9FLENBQXhrQixFQUEwcEIsY0FBWWxSLENBQVosS0FBZ0JrSyxDQUFDLENBQUNwRCxLQUFGLElBQVMsQ0FBQ29ELENBQUMsQ0FBQ21KLFFBQVosS0FBdUJuSixDQUFDLENBQUNtSixRQUFGLEdBQVduSixDQUFDLENBQUNwRCxLQUFwQyxHQUEyQ29ELENBQUMsQ0FBQzVDLE1BQUYsSUFBVSxDQUFDNEMsQ0FBQyxDQUFDb0osU0FBYixLQUF5QnBKLENBQUMsQ0FBQ29KLFNBQUYsR0FBWXBKLENBQUMsQ0FBQzVDLE1BQXZDLENBQTNELENBQTFwQixFQUFxd0IsQ0FBQzRDLENBQUMsQ0FBQzhHLFNBQUgsSUFBYyxjQUFZMUssQ0FBQyxDQUFDdUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDOEcsU0FBVCxDQUFseUIsRUFBc3pCO0FBQUMsWUFBSTdHLENBQUMsR0FBQyxDQUFDLENBQVA7O0FBQVMsZ0JBQU9uSyxDQUFQO0FBQVUsZUFBSSxTQUFKO0FBQWNtSyxhQUFDLEdBQUMsVUFBUTFKLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixhQUFXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JzUCxRQUE1QyxHQUFxRCxHQUFyRCxHQUF5RCxFQUFqRSxJQUFxRSxHQUFyRSxHQUF5RSx1QkFBekUsR0FBaUcxSCxDQUFDLENBQUNzSCxFQUFuRyxHQUFzRyxRQUF4RztBQUFpSDs7QUFBTSxlQUFJLE9BQUo7QUFBWSxlQUFJLE9BQUo7QUFBWXpGLGFBQUMsR0FBQyxDQUFDLENBQUg7QUFBdks7O0FBQTRLRCxTQUFDLENBQUM4RyxTQUFGLEdBQVk3RyxDQUFaO0FBQWM7O0FBQUEsYUFBT0QsQ0FBUDtBQUFTO0FBQXorRCxHQUF4dkY7QUFBQSxNQUFtdUpxSixPQUFPLEdBQUM7QUFBQy9HLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSCxLQUFMLElBQWEsS0FBS0MsT0FBTCxHQUFhLENBQUMsQ0FBM0I7QUFBNkIsS0FBcEQ7QUFBcURELFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtuVSxPQUFMLEdBQWFpSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLFlBQXBCLEVBQWtDNUMsSUFBbEMsR0FBeUMxUSxNQUF6QyxDQUFnRGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsdUJBQXBCLENBQWhELENBQWIsRUFBMkcsS0FBS3JVLE9BQUwsQ0FBYWdLLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0IvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLFlBQUkzSyxDQUFDLEdBQUN3USxLQUFLLENBQUNDLElBQVo7QUFBaUJ6USxTQUFDLElBQUVBLENBQUMsQ0FBQzBRLElBQUwsSUFBVzFRLENBQUMsQ0FBQzBRLElBQUYsQ0FBT3BHLE9BQVAsQ0FBZTdMLE9BQTFCLElBQW1DLENBQUN1QixDQUFDLENBQUMwUSxJQUFGLENBQU9wRyxPQUFQLENBQWU3TCxPQUFmLENBQXVCZ1EsS0FBM0QsSUFBa0VrQyxNQUFNLENBQUNoRCxJQUFQLEVBQWxFO0FBQWdGLE9BQXBILEVBQXFILElBQXJILENBQXhCLENBQTNHLEVBQStQN0YsT0FBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLL00sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixpQkFBdEIsQ0FBcFIsRUFBNlQsS0FBS3JVLE9BQUwsQ0FBYWdLLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQW9DLFVBQVNsRyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDbEQsY0FBRjtBQUFtQixPQUFuRSxDQUE3VDtBQUFrWSxLQUF4YztBQUF5YzhULFdBQU8sRUFBQyxpQkFBUzVRLENBQVQsRUFBVztBQUFDLFdBQUs0TyxJQUFMLElBQVcsS0FBSzFTLE9BQUwsQ0FBYTJVLFdBQWIsQ0FBeUIscUJBQW1CLEtBQUtqQyxJQUFqRCxDQUFYLEVBQWtFLEtBQUsxUyxPQUFMLENBQWFxVSxRQUFiLENBQXNCLHFCQUFtQnZRLENBQXpDLENBQWxFLEVBQThHLEtBQUs0TyxJQUFMLEdBQVU1TyxDQUF4SDtBQUEwSCxLQUF2bEI7QUFBd2xCOFEsVUFBTSxFQUFDLGtCQUFVO0FBQUMzTixPQUFDLENBQUNoRixRQUFRLENBQUM0UyxJQUFWLENBQUQsQ0FBaUI5VCxNQUFqQixDQUF3QixLQUFLZixPQUE3QjtBQUFzQyxLQUFocEI7QUFBaXBCOFUsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBSzlVLE9BQUwsQ0FBYThVLE1BQWI7QUFBc0IsS0FBenJCO0FBQTByQnRELFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLeVQsT0FBUixFQUFnQnRRLENBQUMsSUFBRUEsQ0FBQyxFQUFKLENBQWhCLEtBQTJCO0FBQUMsYUFBS3NRLE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS1EsTUFBTCxFQUFoQixFQUE4QixLQUFLeEosR0FBTCxFQUE5QjtBQUF5QyxZQUFJbkMsQ0FBQyxHQUFDcUwsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ2xRLE1BQWhDLENBQXVDb1EsSUFBbkQsSUFBeUQsQ0FBL0Q7QUFBQSxZQUFpRTdHLENBQUMsR0FBQyxDQUFDLGFBQVcxRCxDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCc0ksQ0FBeEIsS0FBNEIsQ0FBL0Y7QUFBaUcsYUFBS2pKLE9BQUwsQ0FBYStVLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkJySyxDQUE3QixFQUErQixDQUEvQixFQUFpQzdHLENBQWpDO0FBQW9DO0FBQUMsS0FBeDVCO0FBQXk1QjJOLFFBQUksRUFBQyxjQUFTM04sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLeVQsT0FBUixFQUFnQjtBQUFDLFlBQUluTCxDQUFDLEdBQUNxTCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDbFEsTUFBaEMsQ0FBdUNxUSxJQUFuRCxJQUF5RCxDQUEvRDtBQUFBLFlBQWlFOUcsQ0FBQyxHQUFDLENBQUMsYUFBVzFELENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUJzSSxDQUF4QixLQUE0QixDQUEvRjtBQUFpRyxhQUFLakosT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCRSxPQUF0QixDQUE4QnRLLENBQUMsSUFBRSxDQUFqQyxFQUFtQzFELENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3FHLE1BQUwsSUFBYyxLQUFLVixPQUFMLEdBQWEsQ0FBQyxDQUE1QixFQUE4QnRRLENBQUMsSUFBRUEsQ0FBQyxFQUFsQztBQUFxQyxTQUF4RCxFQUF5RCxJQUF6RCxDQUFuQztBQUFtRyxPQUFyTixNQUEwTkEsQ0FBQyxJQUFFQSxDQUFDLEVBQUo7QUFBTyxLQUE3b0M7QUFBOG9Db1IsdUJBQW1CLEVBQUMsK0JBQVU7QUFBQyxVQUFJdEssQ0FBQyxHQUFDLEVBQU47QUFBUyxhQUFPM0QsQ0FBQyxDQUFDd0csSUFBRixDQUFPLENBQUMsT0FBRCxFQUFTLFFBQVQsQ0FBUCxFQUEwQixVQUFTM0osQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsWUFBSXNJLENBQUMsR0FBQ3RJLENBQUMsQ0FBQ2tNLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFjOUMsV0FBZCxLQUE0QnBKLENBQUMsQ0FBQ2tNLE1BQUYsQ0FBUyxDQUFULENBQWxDO0FBQUEsWUFBOENsQyxDQUFDLEdBQUMxSSxRQUFRLENBQUM2RixlQUF6RDtBQUF5RThDLFNBQUMsQ0FBQ2pLLENBQUQsQ0FBRCxHQUFLLENBQUMrRyxPQUFPLENBQUNXLEVBQVIsR0FBVzZDLElBQUksQ0FBQ0UsR0FBTCxDQUFTVCxDQUFDLENBQUMsV0FBUzFCLENBQVYsQ0FBVixFQUF1QjBCLENBQUMsQ0FBQyxXQUFTMUIsQ0FBVixDQUF4QixDQUFYLEdBQWlEdkIsT0FBTyxDQUFDa0IsTUFBUixHQUFlM0csUUFBUSxDQUFDNFMsSUFBVCxDQUFjLFdBQVM1TCxDQUF2QixDQUFmLEdBQXlDMEIsQ0FBQyxDQUFDLFdBQVMxQixDQUFWLENBQTVGLEtBQTJHLENBQWhIO0FBQWtILE9BQW5PLEdBQXFPMkIsQ0FBNU87QUFBOE8sS0FBcDZDO0FBQXE2Q1EsT0FBRyxFQUFDLGVBQVU7QUFBQyxVQUFJdEgsQ0FBSjs7QUFBTSxVQUFHNEQsT0FBTyxDQUFDQyxZQUFSLElBQXNCRCxPQUFPLENBQUNrQixNQUE5QixJQUFzQ2xCLE9BQU8sQ0FBQ2tCLE1BQVIsR0FBZSxNQUFyRCxLQUE4RDlFLENBQUMsR0FBQyxLQUFLb1IsbUJBQUwsRUFBRixFQUE2QixLQUFLbFYsT0FBTCxDQUFhbU0sR0FBYixDQUFpQnJJLENBQWpCLENBQTNGLEdBQWdINEQsT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixHQUFXLENBQTFJLEVBQTRJO0FBQUMsWUFBSTFILENBQUMsR0FBQzRHLE1BQU0sQ0FBQ0MsUUFBUCxFQUFOO0FBQXdCLGFBQUt4SCxPQUFMLENBQWFtTSxHQUFiLENBQWlCO0FBQUNsRSxnQkFBTSxFQUFDdEgsQ0FBQyxDQUFDc0gsTUFBVjtBQUFpQlIsZUFBSyxFQUFDOUcsQ0FBQyxDQUFDOEc7QUFBekIsU0FBakI7QUFBa0Q7O0FBQUFtRSxhQUFPLENBQUNtQixXQUFSLElBQXFCLENBQUNqSixDQUF0QixJQUF5QixLQUFLOUQsT0FBTCxDQUFhbU0sR0FBYixDQUFpQjtBQUFDbEUsY0FBTSxFQUFDLEtBQUtpTixtQkFBTCxHQUEyQmpOO0FBQW5DLE9BQWpCLENBQXpCO0FBQXNGO0FBQXZ1RCxHQUEzdUo7QUFBQSxNQUFvOU13TSxNQUFNLEdBQUM7QUFBQ3RILGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSSxNQUFMLEdBQVksRUFBWixFQUFlLEtBQUtBLE1BQUwsQ0FBWTFELElBQVosR0FBaUJ4SyxDQUFDLENBQUMsRUFBRCxDQUFqQyxFQUFzQyxLQUFLbU8sS0FBTCxHQUFXLEVBQWpELEVBQW9ELEtBQUtDLFNBQUwsR0FBZSxFQUFuRSxFQUFzRSxLQUFLQyxNQUFMLEdBQVksQ0FBQyxDQUFuRixFQUFxRixLQUFLQyxNQUFMLEdBQVksSUFBSWpJLE1BQUosRUFBakcsRUFBNEcsS0FBSzZHLEtBQUwsRUFBNUcsRUFBeUgsS0FBS08sT0FBTCxDQUFhdEQsT0FBTyxDQUFDQyxRQUFSLENBQWlCcUIsSUFBOUIsQ0FBekg7QUFBNkosS0FBcEw7QUFBcUx5QixTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFHLEtBQUtuVSxPQUFMLEdBQWFpSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHVCQUFwQixFQUE2QzVDLElBQTdDLEdBQW9EMVEsTUFBcEQsQ0FBMkQsS0FBS3lVLElBQUwsR0FBVXZPLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsUUFBcEIsRUFBOEJ0VCxNQUE5QixDQUFxQyxLQUFLMFUsTUFBTCxHQUFZeE8sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixVQUFwQixDQUFqRCxDQUFyRSxFQUF3SnRULE1BQXhKLENBQStKLEtBQUsyVSxXQUFMLEdBQWlCek8sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUFoTCxDQUFiLEVBQW1PSCxPQUFPLENBQUMvRyxVQUFSLEVBQW5PLEVBQXdQbUgsS0FBSyxDQUFDbkgsVUFBTixDQUFpQixLQUFLc0ksTUFBdEIsQ0FBeFAsRUFBc1JFLFVBQVUsQ0FBQ3hJLFVBQVgsQ0FBc0IsS0FBS3VJLFdBQTNCLENBQXRSLEVBQThURSxPQUFPLENBQUN6SSxVQUFSLEVBQTlULEVBQW1WMEksRUFBRSxDQUFDMUksVUFBSCxFQUFuVixFQUFtVyxLQUFLbk4sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixRQUFNekksT0FBTyxDQUFDbUIsV0FBUixHQUFvQixFQUFwQixHQUF1QixLQUE3QixJQUFvQyxlQUExRCxDQUFuVyxFQUE4YSxLQUFLL00sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixRQUFNekksT0FBTyxDQUFDWSxHQUFSLEdBQVksRUFBWixHQUFlLEtBQXJCLElBQTRCLE1BQWxELENBQTlhLEVBQXdlOUUsT0FBTyxDQUFDVyxFQUFuZixFQUFzZixLQUFJLElBQUl2RSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsQ0FBZixFQUFpQkEsQ0FBQyxFQUFsQixFQUFxQjRELE9BQU8sQ0FBQ1csRUFBUixHQUFXdkUsQ0FBWCxJQUFjLEtBQUs5RCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLFlBQVV2USxDQUFoQyxDQUFkO0FBQWlELFdBQUs5RCxPQUFMLENBQWFnSyxFQUFiLENBQWdCLG1CQUFoQixFQUFvQyxVQUFTbEcsQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ2xELGNBQUY7QUFBbUIsT0FBbkU7QUFBcUUsS0FBdjBCO0FBQXcwQmdVLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtrQixTQUFMLEtBQWlCN08sQ0FBQyxDQUFDaEYsUUFBUSxDQUFDNFMsSUFBVixDQUFELENBQWlCOVQsTUFBakIsQ0FBd0IsS0FBS2YsT0FBN0IsR0FBc0MsS0FBSzhWLFNBQUwsR0FBZSxDQUFDLENBQXZFO0FBQTBFLEtBQXA2QjtBQUFxNkJoQixVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLZ0IsU0FBTCxLQUFpQixLQUFLOVYsT0FBTCxDQUFhOFUsTUFBYixJQUFzQixLQUFLZ0IsU0FBTCxHQUFlLENBQUMsQ0FBdkQ7QUFBMEQsS0FBai9CO0FBQWsvQnBCLFdBQU8sRUFBQyxpQkFBUzVRLENBQVQsRUFBVztBQUFDLFdBQUtpUyxLQUFMLElBQVksS0FBSy9WLE9BQUwsQ0FBYTJVLFdBQWIsQ0FBeUIsb0JBQWtCLEtBQUtvQixLQUFoRCxDQUFaLEVBQW1FLEtBQUsvVixPQUFMLENBQWFxVSxRQUFiLENBQXNCLG9CQUFrQnZRLENBQXhDLENBQW5FLEVBQThHb1EsT0FBTyxDQUFDUSxPQUFSLENBQWdCNVEsQ0FBaEIsQ0FBOUcsRUFBaUksS0FBS2lTLEtBQUwsR0FBV2pTLENBQTVJO0FBQThJLEtBQXBwQztBQUFxcENrUyxrQkFBYyxFQUFDLHdCQUFTbFMsQ0FBVCxFQUFXO0FBQUMsV0FBS21TLFlBQUwsS0FBb0JuUyxDQUFwQixLQUF3QixLQUFLbVMsWUFBTCxLQUFvQixLQUFLalcsT0FBTCxDQUFhMlUsV0FBYixDQUF5QixxQkFBbUIsS0FBS3NCLFlBQWpELEdBQStEbEcsSUFBSSxDQUFDQyxPQUFMLENBQWEsS0FBS2lHLFlBQWxCLEtBQWlDLEtBQUtqVyxPQUFMLENBQWEyVSxXQUFiLENBQXlCLHVCQUF6QixDQUFwSCxHQUF1SyxLQUFLM1UsT0FBTCxDQUFhcVUsUUFBYixDQUFzQixxQkFBbUJ2USxDQUF6QyxDQUF2SyxFQUFtTmlNLElBQUksQ0FBQ0MsT0FBTCxDQUFhbE0sQ0FBYixLQUFpQixLQUFLOUQsT0FBTCxDQUFhcVUsUUFBYixDQUFzQix1QkFBdEIsQ0FBcE8sRUFBbVIsS0FBSzRCLFlBQUwsR0FBa0JuUyxDQUE3VDtBQUFnVSxLQUFoL0M7QUFBaS9Db1Msd0JBQW9CLEVBQUMsZ0NBQVU7QUFBQyxXQUFLQyxzQkFBTCxJQUE2QmxQLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVNEksRUFBVixDQUFhLDBCQUFiLEVBQXdDLEtBQUttTSxzQkFBTCxHQUE0QmxQLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLMkgsZUFBYixFQUE2QixJQUE3QixDQUFwRSxDQUE3QjtBQUFxSSxLQUF0cEQ7QUFBdXBEQyx1QkFBbUIsRUFBQywrQkFBVTtBQUFDLFdBQUtGLHNCQUFMLEtBQThCbFAsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVVrVixHQUFWLENBQWMsMEJBQWQsRUFBeUMsS0FBS0gsc0JBQTlDLEdBQXNFLEtBQUtBLHNCQUFMLEdBQTRCLElBQWhJO0FBQXNJLEtBQTV6RDtBQUE2ekRJLGFBQVMsRUFBQyxxQkFBVTtBQUFDM0ssYUFBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLd0ksTUFBTCxDQUFZM0YsR0FBWixDQUFnQixRQUFoQixFQUF5QjNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK0gsY0FBYixFQUE0QixJQUE1QixDQUF6QixFQUEyRCxDQUEzRCxDQUFyQjtBQUFtRixLQUFyNkQ7QUFBczZESixtQkFBZSxFQUFDLDJCQUFVO0FBQUMsVUFBSXRTLENBQUo7QUFBTSxPQUFDQSxDQUFDLEdBQUN3USxLQUFLLENBQUNDLElBQVQsTUFBaUJvQixVQUFVLENBQUNjLGFBQVgsSUFBMkIsS0FBS0MsbUJBQUwsRUFBM0IsRUFBc0Q1UyxDQUFDLENBQUM2UyxRQUFGLEVBQXRELEVBQW1FZCxFQUFFLENBQUNlLE1BQUgsRUFBbkUsRUFBK0VmLEVBQUUsQ0FBQ2dCLGNBQUgsQ0FBa0IsSUFBbEIsRUFBdUIsQ0FBdkIsQ0FBL0UsRUFBeUdqQixPQUFPLENBQUNrQixNQUFSLEVBQXpHLEVBQTBINUMsT0FBTyxDQUFDOUksR0FBUixFQUExSCxFQUF3SXlLLEVBQUUsQ0FBQ08sZUFBSCxFQUF4SSxFQUE2SixLQUFLRyxTQUFMLEVBQTlLO0FBQWdNLEtBQXZvRTtBQUF3b0VDLGtCQUFjLEVBQUMsMEJBQVU7QUFBQzVLLGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUIsS0FBSy9NLE9BQUwsQ0FBYW1NLEdBQWIsQ0FBaUI7QUFBQzRLLFdBQUcsRUFBQzlQLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVNFYsU0FBVjtBQUFMLE9BQWpCLENBQXJCO0FBQW1FLEtBQXJ1RTtBQUFzdUVDLG9CQUFnQixFQUFDLDRCQUFVO0FBQUMsYUFBTyxLQUFLQyxjQUFaO0FBQTJCLEtBQTd4RTtBQUE4eEVSLHVCQUFtQixFQUFDLCtCQUFVO0FBQUMsVUFBR3BDLEtBQUssQ0FBQ0MsSUFBVCxFQUFjO0FBQUMsWUFBSXpRLENBQUMsR0FBQ3lELE1BQU0sQ0FBQ0MsUUFBUCxFQUFOO0FBQUEsWUFBd0I3RyxDQUFDLEdBQUNnVixVQUFVLENBQUN3QixhQUFYLEVBQTFCO0FBQUEsWUFBcURsTyxDQUFDLEdBQUMsaUJBQWUwTSxVQUFVLENBQUN5QixZQUFqRjtBQUE4RixhQUFLRixjQUFMLEdBQW9CO0FBQUN6UCxlQUFLLEVBQUN3QixDQUFDLEdBQUNuRixDQUFDLENBQUMyRCxLQUFILEdBQVMzRCxDQUFDLENBQUMyRCxLQUFGLEdBQVE5RyxDQUFDLENBQUM4RyxLQUEzQjtBQUFpQ1EsZ0JBQU0sRUFBQ2dCLENBQUMsR0FBQ25GLENBQUMsQ0FBQ21FLE1BQUYsR0FBU3RILENBQUMsQ0FBQ3NILE1BQVosR0FBbUJuRSxDQUFDLENBQUNtRTtBQUE5RCxTQUFwQixFQUEwRixLQUFLb1AsWUFBTCxHQUFrQjtBQUFDTixhQUFHLEVBQUMsQ0FBTDtBQUFPL0UsY0FBSSxFQUFDL0ksQ0FBQyxHQUFDLENBQUQsR0FBR3RJLENBQUMsQ0FBQzhHO0FBQWxCLFNBQTVHLEVBQXFJLEtBQUsrTixJQUFMLENBQVVySixHQUFWLENBQWNsRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBSytQLGNBQWpCLEVBQWdDLEtBQUtHLFlBQXJDLENBQWQsQ0FBckk7QUFBdU07QUFBQyxLQUFsbkY7QUFBbW5GN0YsUUFBSSxFQUFDLGNBQVMxTixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxVQUFHLEtBQUt5VCxPQUFSLEVBQWdCdFEsQ0FBQyxJQUFFQSxDQUFDLEVBQUosQ0FBaEIsS0FBMkI7QUFBQyxhQUFLc1EsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLa0QsT0FBTCxHQUFhLENBQUMsQ0FBOUIsRUFBZ0MsS0FBSzFDLE1BQUwsRUFBaEMsRUFBOEMsS0FBS1csTUFBTCxDQUFZMUYsS0FBWixDQUFrQixhQUFsQixDQUE5QyxFQUErRSxLQUFLMEYsTUFBTCxDQUFZMUYsS0FBWixDQUFrQixjQUFsQixDQUEvRSxFQUFpSCxLQUFLMkcsY0FBTCxFQUFqSDtBQUF1SSxZQUFJdk4sQ0FBQyxHQUFDLENBQUMsYUFBV2hDLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIyVCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDbFEsTUFBaEMsQ0FBdUNvUSxJQUEzRSxLQUFrRixDQUF4RjtBQUFBLFlBQTBGN0csQ0FBQyxHQUFDLENBQTVGO0FBQThGdUosZUFBTyxDQUFDSSxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QjdMLE9BQXBDLEdBQTRDLE1BQTVDLEdBQW1ELE1BQXBELENBQVAsQ0FBbUUsWUFBVTtBQUFDdUIsV0FBQyxJQUFFLEVBQUU2RyxDQUFGLEdBQUksQ0FBUCxJQUFVN0csQ0FBQyxFQUFYO0FBQWMsU0FBNUYsRUFBNkZtRixDQUE3RixHQUFnRyxLQUFLc00sTUFBTCxDQUFZM0YsR0FBWixDQUFnQixhQUFoQixFQUE4QjNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBSzhJLEtBQUwsQ0FBV3RRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsaUJBQUs2SSxPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCeFQsQ0FBQyxJQUFFLEVBQUU2RyxDQUFGLEdBQUksQ0FBUCxJQUFVN0csQ0FBQyxFQUEzQjtBQUE4QixXQUFqRCxFQUFrRCxJQUFsRCxDQUFYLEVBQW1FbUYsQ0FBbkU7QUFBc0UsU0FBekYsRUFBMEYsSUFBMUYsQ0FBOUIsRUFBOEgsSUFBRUEsQ0FBRixHQUFJaUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBR2xDLENBQVosRUFBYyxFQUFkLENBQUosR0FBc0IsQ0FBcEosQ0FBaEc7QUFBdVA7QUFBQyxLQUEvbkc7QUFBZ29Hc08sU0FBSyxFQUFDLGVBQVN6VCxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxVQUFJc0ksQ0FBQyxHQUFDLENBQUMsYUFBV2hDLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIyVCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDbFEsTUFBaEMsQ0FBdUNvUSxJQUEzRSxLQUFrRixDQUF4RjtBQUEwRixXQUFLeFIsT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCQyxNQUF0QixDQUE2Qi9MLENBQTdCLEVBQStCLENBQS9CLEVBQWlDbkYsQ0FBakM7QUFBb0MsS0FBbHhHO0FBQW14RzJOLFFBQUksRUFBQyxjQUFTOVEsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLNlQsSUFBUixFQUFhO0FBQUMsWUFBSTFRLENBQUMsR0FBQyxLQUFLcVIsTUFBTCxDQUFZMUQsSUFBbEI7QUFBdUIzTixTQUFDLENBQUMwVCxLQUFGLENBQVEsRUFBUixHQUFZLEtBQUtqQyxNQUFMLENBQVkxRixLQUFaLENBQWtCLGFBQWxCLENBQVosRUFBNkMsS0FBSzBGLE1BQUwsQ0FBWTFGLEtBQVosQ0FBa0IsY0FBbEIsQ0FBN0M7QUFBK0UsWUFBSTVHLENBQUMsR0FBQ3FMLEtBQUssQ0FBQ0MsSUFBTixHQUFXRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCa0QsT0FBeEIsQ0FBZ0NsUSxNQUFoQyxDQUF1Q3FRLElBQWxELEdBQXVELENBQTdEO0FBQStEM04sU0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQ3dRLGVBQUssQ0FBQ1MsSUFBTixJQUFhYSxPQUFPLENBQUNuRSxJQUFSLEVBQWIsRUFBNEIzTixDQUFDLEVBQTdCO0FBQWdDLFNBQXBELEVBQXFELElBQXJELENBQVIsR0FBb0VBLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMrUixZQUFFLENBQUM0QixPQUFILElBQWE1QixFQUFFLENBQUNwRSxJQUFILENBQVEsSUFBUixFQUFheEksQ0FBYixDQUFiLEVBQTZCeU8sUUFBUSxDQUFDRCxPQUFULEVBQTdCLEVBQWdEM1QsQ0FBQyxFQUFqRDtBQUFvRCxTQUF4RSxFQUF5RSxJQUF6RSxDQUFSLENBQXBFLEVBQTRKQSxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGNBQUluRCxDQUFDLEdBQUMsQ0FBTjtBQUFRLGVBQUtnWCxLQUFMLENBQVcsWUFBVTtBQUFDLGNBQUVoWCxDQUFGLEdBQUksQ0FBSixJQUFPbUQsQ0FBQyxFQUFSO0FBQVcsV0FBakMsRUFBa0NtRixDQUFsQyxHQUFxQyxLQUFLc00sTUFBTCxDQUFZM0YsR0FBWixDQUFnQixjQUFoQixFQUErQjNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUN5RixtQkFBTyxDQUFDekMsSUFBUixDQUFhLFlBQVU7QUFBQyxnQkFBRTlRLENBQUYsR0FBSSxDQUFKLElBQU9tRCxDQUFDLEVBQVI7QUFBVyxhQUFuQyxFQUFvQ21GLENBQXBDO0FBQXVDLFdBQTFELEVBQTJELElBQTNELENBQS9CLEVBQWdHLElBQUVBLENBQUYsR0FBSWlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUdsQyxDQUFaLEVBQWMsR0FBZCxDQUFKLEdBQXVCLENBQXZILENBQXJDLEVBQStKLEtBQUtxTSxNQUFMLEdBQVksQ0FBQyxDQUE1SztBQUE4SyxTQUExTSxFQUEyTSxJQUEzTSxDQUFSLENBQTVKLEVBQXNYeFIsQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxlQUFLOFQsTUFBTCxJQUFjLEtBQUt2QixtQkFBTCxFQUFkLEVBQXlDL0IsS0FBSyxDQUFDdUQsU0FBTixFQUF6QyxFQUEyRGxDLFVBQVUsQ0FBQzlGLEtBQVgsRUFBM0QsRUFBOEUsS0FBSzBGLE1BQUwsQ0FBWTFGLEtBQVosRUFBOUUsRUFBa0csS0FBS2lJLFNBQUwsR0FBZSxDQUFDLENBQWxIO0FBQW9ILGNBQUluWCxDQUFDLEdBQUMyVCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QjJKLFNBQTFDO0FBQW9ELHlCQUFhOVEsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFiLElBQXdCQSxDQUFDLENBQUMwTSxJQUFGLENBQU9uRyxNQUFQLENBQXhCLEVBQXVDLEtBQUtzTixJQUFMLEdBQVUsSUFBakQsRUFBc0QsS0FBSzhDLE9BQUwsR0FBYSxDQUFDLENBQXBFLEVBQXNFLEtBQUtVLE9BQUwsR0FBYSxDQUFDLENBQXBGLEVBQXNGLEtBQUtsRCxNQUFMLEVBQXRGLEVBQW9HaFIsQ0FBQyxFQUFyRztBQUF3RyxTQUFwUyxFQUFxUyxJQUFyUyxDQUFSLENBQXRYLEVBQTBxQixlQUFhbUQsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFiLElBQXdCbUQsQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQ25ELFdBQUMsSUFBR21ELENBQUMsRUFBTDtBQUFRLFNBQTVCLEVBQTZCLElBQTdCLENBQVIsQ0FBbHNCO0FBQTh1QjtBQUFDLEtBQXRzSTtBQUF1c0k2VCxTQUFLLEVBQUMsZUFBUzdULENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFVBQUlzSSxDQUFDLEdBQUMsQ0FBQyxhQUFXaEMsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QjJULEtBQUssQ0FBQ0MsSUFBTixJQUFZRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCa0QsT0FBeEIsQ0FBZ0NsUSxNQUFoQyxDQUF1Q3FRLElBQTNFLEtBQWtGLENBQXhGO0FBQTBGLFdBQUt6UixPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JFLE9BQXRCLENBQThCaE0sQ0FBOUIsRUFBZ0NuRixDQUFoQztBQUFtQyxLQUF4MUk7QUFBeTFJNE0sUUFBSSxFQUFDLGNBQVM1TSxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxXQUFLc1gsS0FBTCxHQUFXblUsQ0FBWCxFQUFhLEtBQUs4USxNQUFMLEVBQWIsRUFBMkJlLFVBQVUsQ0FBQ2pGLElBQVgsQ0FBZ0I1TSxDQUFoQixDQUEzQixFQUE4Q3dRLEtBQUssQ0FBQzVELElBQU4sQ0FBVzVNLENBQVgsQ0FBOUMsRUFBNEQsS0FBS29TLG9CQUFMLEVBQTVELEVBQXdGdlYsQ0FBQyxJQUFFLEtBQUt1WCxXQUFMLENBQWlCdlgsQ0FBakIsQ0FBM0Y7QUFBK0csS0FBMzlJO0FBQTQ5SXVYLGVBQVcsRUFBQyxxQkFBU3BVLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFdBQUttWCxTQUFMLEdBQWVoVSxDQUFmLEVBQWlCLEtBQUswUSxJQUFMLEdBQVUsS0FBS3lELEtBQUwsQ0FBV25VLENBQUMsR0FBQyxDQUFiLENBQTNCLEVBQTJDLEtBQUtxVSxhQUFMLEVBQTNDLEVBQWdFLEtBQUs1RCxJQUFMLEdBQVVELEtBQUssQ0FBQzlDLElBQU4sQ0FBVzFOLENBQVgsRUFBYW1ELENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUM5TixTQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLE9BQTFCLEVBQTJCLElBQTNCLENBQWIsQ0FBMUU7QUFBeUgsS0FBL21KO0FBQWduSndYLGlCQUFhLEVBQUMseUJBQVU7QUFBQyxXQUFLaEQsTUFBTCxDQUFZMUQsSUFBWixDQUFpQitGLEtBQWpCLENBQXVCLEVBQXZCO0FBQTJCLEtBQXBxSjtBQUFxcUpJLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUt4RCxPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCeUIsRUFBRSxDQUFDcEUsSUFBSCxDQUFRLElBQVIsRUFBYSxDQUFiLENBQWhCLEVBQWdDb0UsRUFBRSxDQUFDdUMsS0FBSCxFQUFoQztBQUEyQyxLQUFsdUo7QUFBbXVKQyxlQUFXLEVBQUMsdUJBQVU7QUFBQyxhQUFPLEtBQUs3RCxJQUFMLElBQVcsS0FBS0EsSUFBTCxDQUFVcEcsT0FBVixDQUFrQmdFLElBQTdCLElBQW1DLEtBQUs2RixLQUF4QyxJQUErQyxJQUFFLEtBQUtBLEtBQUwsQ0FBVzlWLE1BQTVELElBQW9FLE1BQUksS0FBSzJWLFNBQXBGO0FBQThGLEtBQXgxSjtBQUF5MUpRLFlBQVEsRUFBQyxrQkFBU3hVLENBQVQsRUFBVztBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBSzBYLFdBQUwsRUFBTjtBQUF5QixPQUFDdlUsQ0FBQyxJQUFFbkQsQ0FBSixLQUFRLEtBQUt1WCxXQUFMLENBQWlCLEtBQUtLLHFCQUFMLEdBQTZCRCxRQUE5QyxDQUFSO0FBQWdFLEtBQXY4SjtBQUF3OEpFLFdBQU8sRUFBQyxtQkFBVTtBQUFDLFVBQUkxVSxDQUFDLEdBQUMsS0FBS21VLEtBQUwsSUFBWSxJQUFFLEtBQUtBLEtBQUwsQ0FBVzlWLE1BQS9CO0FBQXNDLGFBQU8sS0FBS3FTLElBQUwsSUFBVyxLQUFLQSxJQUFMLENBQVVwRyxPQUFWLENBQWtCZ0UsSUFBN0IsSUFBbUN0TyxDQUFuQyxJQUFzQ0EsQ0FBQyxJQUFFLE1BQUksS0FBS3lVLHFCQUFMLEdBQTZCRSxJQUFqRjtBQUFzRixLQUF2bEs7QUFBd2xLQSxRQUFJLEVBQUMsY0FBUzNVLENBQVQsRUFBVztBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBSzZYLE9BQUwsRUFBTjtBQUFxQixPQUFDMVUsQ0FBQyxJQUFFbkQsQ0FBSixLQUFRLEtBQUt1WCxXQUFMLENBQWlCLEtBQUtLLHFCQUFMLEdBQTZCRSxJQUE5QyxDQUFSO0FBQTRELEtBQTFySztBQUEycktGLHlCQUFxQixFQUFDLGlDQUFVO0FBQUMsVUFBRyxDQUFDLEtBQUtOLEtBQVQsRUFBZSxPQUFNLEVBQU47QUFBUyxVQUFJblUsQ0FBQyxHQUFDLEtBQUtnVSxTQUFYO0FBQUEsVUFBcUJuWCxDQUFDLEdBQUMsS0FBS3NYLEtBQUwsQ0FBVzlWLE1BQWxDO0FBQXlDLGFBQU07QUFBQ21XLGdCQUFRLEVBQUN4VSxDQUFDLElBQUUsQ0FBSCxHQUFLbkQsQ0FBTCxHQUFPbUQsQ0FBQyxHQUFDLENBQW5CO0FBQXFCMlUsWUFBSSxFQUFDOVgsQ0FBQyxJQUFFbUQsQ0FBSCxHQUFLLENBQUwsR0FBT0EsQ0FBQyxHQUFDO0FBQW5DLE9BQU47QUFBNEM7QUFBejBLLEdBQTM5TTtBQUFBLE1BQXN5WDRULFFBQVEsR0FBQztBQUFDZ0IsV0FBTyxFQUFDLENBQUMsQ0FBVjtBQUFZQyxXQUFPLEVBQUM7QUFBQzNHLFVBQUksRUFBQyxFQUFOO0FBQVNDLFdBQUssRUFBQyxFQUFmO0FBQWtCQyxTQUFHLEVBQUM7QUFBdEIsS0FBcEI7QUFBOEMwRyxVQUFNLEVBQUMsZ0JBQVM5VSxDQUFULEVBQVc7QUFBQyxXQUFLMlQsT0FBTCxJQUFlM1QsQ0FBQyxLQUFHbUQsQ0FBQyxDQUFDaEYsUUFBRCxDQUFELENBQVkrSCxFQUFaLENBQWUsU0FBZixFQUF5QixLQUFLNk8saUJBQUwsR0FBdUI1UixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS3FLLFNBQWIsRUFBdUIsSUFBdkIsQ0FBaEQsRUFBOEU5TyxFQUE5RSxDQUFpRixPQUFqRixFQUF5RixLQUFLK08sZUFBTCxHQUFxQjlSLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLdUssT0FBYixFQUFxQixJQUFyQixDQUE5RyxHQUEwSSxLQUFLTixPQUFMLEdBQWE1VSxDQUExSixDQUFoQjtBQUE2SyxLQUE5TztBQUErTzJULFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUtpQixPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCLEtBQUtLLGVBQUwsS0FBdUI5UixDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXFVLEdBQVosQ0FBZ0IsT0FBaEIsRUFBd0IsS0FBS3lDLGVBQTdCLEVBQThDekMsR0FBOUMsQ0FBa0QsU0FBbEQsRUFBNEQsS0FBS3VDLGlCQUFqRSxHQUFvRixLQUFLRSxlQUFMLEdBQXFCLEtBQUtGLGlCQUFMLEdBQXVCLElBQXZKLENBQWhCO0FBQTZLLEtBQS9hO0FBQWdiQyxhQUFTLEVBQUMsbUJBQVNoVixDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUs0VSxPQUFSLEVBQWdCO0FBQUMsWUFBSS9YLENBQUMsR0FBQyxLQUFLc1ksZUFBTCxDQUFxQm5WLENBQUMsQ0FBQzZVLE9BQXZCLENBQU47QUFBc0MsWUFBR2hZLENBQUMsS0FBRyxDQUFDQSxDQUFELElBQUksQ0FBQyxLQUFLK1gsT0FBVixJQUFtQixLQUFLQSxPQUFMLENBQWEvWCxDQUFiLENBQXRCLENBQUosRUFBMkMsUUFBT21ELENBQUMsQ0FBQ2xELGNBQUYsSUFBbUJrRCxDQUFDLENBQUN3RyxlQUFGLEVBQW5CLEVBQXVDM0osQ0FBOUM7QUFBaUQsZUFBSSxNQUFKO0FBQVc4VCxrQkFBTSxDQUFDNkQsUUFBUDtBQUFrQjs7QUFBTSxlQUFJLE9BQUo7QUFBWTdELGtCQUFNLENBQUNnRSxJQUFQO0FBQWhHO0FBQStHO0FBQUMsS0FBeHBCO0FBQXlwQk8sV0FBTyxFQUFDLGlCQUFTbFYsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLNFUsT0FBUixFQUFnQjtBQUFDLFlBQUkvWCxDQUFDLEdBQUMsS0FBS3NZLGVBQUwsQ0FBcUJuVixDQUFDLENBQUM2VSxPQUF2QixDQUFOO0FBQXNDLFlBQUdoWSxDQUFDLEtBQUcsQ0FBQ0EsQ0FBRCxJQUFJLENBQUMsS0FBSytYLE9BQVYsSUFBbUIsS0FBS0EsT0FBTCxDQUFhL1gsQ0FBYixDQUF0QixDQUFKLEVBQTJDLFFBQU9BLENBQVA7QUFBVSxlQUFJLEtBQUo7QUFBVThULGtCQUFNLENBQUNoRCxJQUFQO0FBQXBCO0FBQW1DO0FBQUMsS0FBbnpCO0FBQW96QndILG1CQUFlLEVBQUMseUJBQVNuVixDQUFULEVBQVc7QUFBQyxXQUFJLElBQUluRCxDQUFSLElBQWEsS0FBS2dZLE9BQWxCLEVBQTBCLElBQUcsS0FBS0EsT0FBTCxDQUFhaFksQ0FBYixNQUFrQm1ELENBQXJCLEVBQXVCLE9BQU9uRCxDQUFQOztBQUFTLGFBQU8sSUFBUDtBQUFZO0FBQXQ1QixHQUEveVg7QUFBQSxNQUF1c1p1WSxJQUFJLElBQUVDLEVBQUUsR0FBQyxDQUFILEVBQUtDLEVBQUUsR0FBQyxFQUFSLEVBQVdDLEVBQUUsR0FBQ3BTLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsOENBQXBCLEVBQW9FdFQsTUFBcEUsQ0FBMkVrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGlCQUFwQixDQUEzRSxFQUFtSDdWLEdBQW5ILENBQXVIeUksQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixpREFBcEIsRUFBdUV0VCxNQUF2RSxDQUE4RWtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsaUJBQXBCLENBQTlFLENBQXZILEVBQThPN1YsR0FBOU8sQ0FBa1B5SSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDZDQUFwQixFQUFtRXRULE1BQW5FLENBQTBFa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixpQkFBcEIsQ0FBMUUsQ0FBbFAsRUFBcVc3VixHQUFyVyxDQUF5V3lJLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsOENBQXBCLEVBQW9FdFQsTUFBcEUsQ0FBMkVrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGlCQUFwQixDQUEzRSxDQUF6VyxDQUFkLEVBQTJlcE4sQ0FBQyxDQUFDRSxNQUFGLENBQVNtUyxFQUFFLENBQUNoUSxTQUFaLEVBQXNCO0FBQUM2RCxjQUFVLEVBQUMsb0JBQVNySixDQUFULEVBQVduRCxDQUFYLEVBQWFzSSxDQUFiLEVBQWU7QUFBQyxXQUFLdUwsSUFBTCxHQUFVMVEsQ0FBVixFQUFZLEtBQUtxTixVQUFMLEdBQWdCO0FBQUMxSixhQUFLLEVBQUMsQ0FBUDtBQUFTUSxjQUFNLEVBQUM7QUFBaEIsT0FBNUIsRUFBK0MsS0FBS3NSLEdBQUwsR0FBU0osRUFBRSxFQUExRCxFQUE2RCxLQUFLckIsU0FBTCxHQUFlblgsQ0FBNUUsRUFBOEUsS0FBSzZZLE1BQUwsR0FBWXZRLENBQTFGLEVBQTRGLEtBQUt3USxVQUFMLEdBQWdCLENBQUMsQ0FBN0csRUFBK0csS0FBS0MsUUFBTCxHQUFjLENBQUMsQ0FBOUgsRUFBZ0ksS0FBS3ZFLE1BQUwsR0FBWSxFQUE1SSxFQUErSSxLQUFLQSxNQUFMLENBQVl3RSxRQUFaLEdBQXFCMVMsQ0FBQyxDQUFDLEVBQUQsQ0FBcks7QUFBMEssS0FBdE07QUFBdU0yTSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFHLENBQUMsS0FBS2dHLFFBQVQsRUFBa0I7QUFBQ3RGLGFBQUssQ0FBQ3RVLE9BQU4sQ0FBY2UsTUFBZCxDQUFxQixLQUFLZixPQUFMLEdBQWFpSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLFNBQXBCLEVBQStCdFQsTUFBL0IsQ0FBc0MsS0FBS2dDLFNBQUwsR0FBZWtFLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsY0FBcEIsQ0FBckQsRUFBMEZsSSxHQUExRixDQUE4RjtBQUFDME4saUJBQU8sRUFBQztBQUFULFNBQTlGLEVBQTJHcEksSUFBM0csRUFBbEM7QUFBcUosWUFBSTNOLENBQUMsR0FBQyxLQUFLMFEsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnFFLFFBQWxCLElBQTRCLElBQUUsS0FBSytHLE1BQXpDOztBQUFnRCxZQUFHMVYsQ0FBQyxJQUFFLEtBQUs5RCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGlCQUF0QixDQUFILEVBQTRDLENBQUMsS0FBS0csSUFBTCxDQUFVc0YsT0FBVixJQUFtQmhXLENBQXBCLE1BQXlCLEtBQUs5RCxPQUFMLENBQWFlLE1BQWIsQ0FBb0IsS0FBS2daLElBQUwsR0FBVTlTLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsU0FBcEIsRUFBK0J0VCxNQUEvQixDQUFzQ2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isb0JBQXBCLENBQXRDLEVBQWlGdFQsTUFBakYsQ0FBd0ZzWSxFQUFFLENBQUNXLEtBQUgsQ0FBUyxDQUFDLENBQVYsQ0FBeEYsRUFBc0dqWixNQUF0RyxDQUE2RyxLQUFLa1osVUFBTCxHQUFnQmhULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLENBQTdILENBQTlCLEdBQW1NdlEsQ0FBQyxLQUFHLEtBQUs5RCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGlCQUF0QixHQUF5QyxLQUFLNEYsVUFBTCxDQUFnQmxaLE1BQWhCLENBQXVCLEtBQUttWixHQUFMLEdBQVNqVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGFBQXBCLEVBQW1DdFQsTUFBbkMsQ0FBMENrRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlvTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBMUMsQ0FBaEMsQ0FBNUMsQ0FBcE0sRUFBNlksS0FBS2hGLElBQUwsQ0FBVXNGLE9BQVYsSUFBbUIsS0FBS0csVUFBTCxDQUFnQmxaLE1BQWhCLENBQXVCLEtBQUsrWSxPQUFMLEdBQWE3UyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLFlBQXBCLEVBQWtDOEYsSUFBbEMsQ0FBdUMsS0FBSzNGLElBQUwsQ0FBVXNGLE9BQWpELENBQXBDLENBQXpiLENBQTVDLEVBQXFrQixLQUFLL1csU0FBTCxDQUFlaEMsTUFBZixDQUFzQixLQUFLcVosVUFBTCxHQUFnQm5ULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsdUJBQXBCLENBQXRDLEVBQW9GdFQsTUFBcEYsQ0FBMkYsS0FBS3dRLE9BQUwsR0FBYXRLLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsWUFBcEIsQ0FBeEcsQ0FBcmtCLEVBQWd0QixXQUFTLEtBQUtHLElBQUwsQ0FBVWhILElBQW5CLEtBQTBCLEtBQUsrRCxPQUFMLENBQWF4USxNQUFiLENBQW9CLEtBQUtrUCxLQUFMLEdBQVdoSixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG9CQUFwQixFQUEwQ2dHLElBQTFDLENBQStDO0FBQUMvSyxhQUFHLEVBQUMsS0FBS2tGLElBQUwsQ0FBVXBVO0FBQWYsU0FBL0MsQ0FBL0IsR0FBb0csS0FBS21SLE9BQUwsQ0FBYXhRLE1BQWIsQ0FBb0JzWSxFQUFFLENBQUNXLEtBQUgsQ0FBUyxDQUFDLENBQVYsQ0FBcEIsQ0FBOUgsQ0FBaHRCLEVBQWkzQmxXLENBQUMsSUFBRSxhQUFXLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCeUUsRUFBaEMsSUFBb0MsS0FBSzlQLFNBQUwsQ0FBZWhDLE1BQWYsQ0FBc0IsS0FBS3VaLGVBQUwsR0FBcUJyVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixFQUEyQ3RULE1BQTNDLENBQWtEa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQix3QkFBcEIsQ0FBbEQsRUFBaUd0VCxNQUFqRyxDQUF3R2tHLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWW9OLFFBQVosQ0FBcUIsa0JBQXJCLEVBQXlDOEYsSUFBekMsQ0FBOEMsS0FBS3JDLFNBQUwsR0FBZSxLQUFmLEdBQXFCLEtBQUswQixNQUF4RSxDQUF4RyxDQUEzQyxDQUFyNUIsRUFBMG5DLFlBQVUsS0FBS2hGLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J5RSxFQUF6cEMsRUFBNHBDO0FBQUMsZUFBS3RCLE9BQUwsQ0FBYXhRLE1BQWIsQ0FBb0IsS0FBS3daLGNBQUwsR0FBb0J0VCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHVDQUFwQixFQUE2RHRULE1BQTdELENBQW9Fa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0N0VCxNQUF0QyxDQUE2Q2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGdFQsTUFBL0YsQ0FBc0drRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUFwRSxDQUF4QyxFQUFnUXRULE1BQWhRLENBQXVRLEtBQUt5WixVQUFMLEdBQWdCdlQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixtQ0FBcEIsRUFBeUR0VCxNQUF6RCxDQUFnRWtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDdFQsTUFBdEMsQ0FBNkNrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRnRULE1BQS9GLENBQXNHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBaEUsQ0FBdlIsRUFBMmV0VCxNQUEzZSxDQUFrZixLQUFLMFosV0FBTCxHQUFpQnhULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsdUJBQXBCLEVBQTZDdFQsTUFBN0MsQ0FBb0RrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUFwRCxFQUFnR3RULE1BQWhHLENBQXVHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUF2RyxDQUFuZ0IsR0FBaXBCLENBQUMsS0FBS0csSUFBTCxDQUFVc0YsT0FBVixJQUFtQmhXLENBQUMsSUFBRSxLQUFLMFEsSUFBTCxDQUFVa0csT0FBVixDQUFrQlosT0FBekMsTUFBb0QsS0FBS3ZJLE9BQUwsQ0FBYXhRLE1BQWIsQ0FBb0IsS0FBSzRaLFVBQUwsR0FBZ0IxVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNCQUFwQixFQUE0Q3RULE1BQTVDLENBQW1Ea0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixvQkFBcEIsQ0FBbkQsRUFBOEZ0VCxNQUE5RixDQUFxR3NZLEVBQUUsQ0FBQ1csS0FBSCxDQUFTLENBQUMsQ0FBVixDQUFyRyxFQUFtSGpaLE1BQW5ILENBQTBILEtBQUs2WixnQkFBTCxHQUFzQjNULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLENBQWhKLENBQXBDLEdBQTROdlEsQ0FBQyxJQUFFLEtBQUs4VyxnQkFBTCxDQUFzQjdaLE1BQXRCLENBQTZCLEtBQUs4WixTQUFMLEdBQWU1VCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGFBQXBCLEVBQW1DdFQsTUFBbkMsQ0FBMENrRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlvTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBMUMsQ0FBNUMsQ0FBL04sRUFBdVksS0FBS2hGLElBQUwsQ0FBVXNGLE9BQVYsSUFBbUIsS0FBS2MsZ0JBQUwsQ0FBc0I3WixNQUF0QixDQUE2QixLQUFLK1osYUFBTCxHQUFtQjdULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0M4RixJQUFsQyxDQUF1QyxLQUFLM0YsSUFBTCxDQUFVc0YsT0FBakQsQ0FBaEQsQ0FBOWMsQ0FBanBCLEVBQTJzQyxLQUFLdEYsSUFBTCxDQUFVc0YsT0FBVixJQUFtQixDQUFDaFcsQ0FBcEIsSUFBdUIsS0FBSzBRLElBQUwsQ0FBVWtHLE9BQVYsQ0FBa0JaLE9BQXpDLElBQWtELEtBQUt2SSxPQUFMLENBQWF4USxNQUFiLENBQW9CLEtBQUtnYSxjQUFMLEdBQW9COVQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixpQ0FBcEIsRUFBdUR0VCxNQUF2RCxDQUE4RGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isd0JBQXBCLENBQTlELEVBQTZHdFQsTUFBN0csQ0FBb0hrRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlvTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBcEgsQ0FBeEMsQ0FBN3ZDO0FBQTIrQyxjQUFJN1ksQ0FBQyxHQUFDLEtBQUs2VCxJQUFMLENBQVVwRyxPQUFWLENBQWtCZ0UsSUFBbEIsSUFBd0IsSUFBRSxLQUFLb0gsTUFBL0IsSUFBdUMsS0FBRyxLQUFLMUIsU0FBckQ7QUFBQSxjQUErRDdPLENBQUMsR0FBQyxLQUFLdUwsSUFBTCxDQUFVcEcsT0FBVixDQUFrQmdFLElBQWxCLElBQXdCLElBQUUsS0FBS29ILE1BQS9CLElBQXVDLEtBQUsxQixTQUFMLEdBQWUsS0FBSzBCLE1BQTVIO0FBQW1JLGVBQUtlLGNBQUwsQ0FBb0IsQ0FBQzVaLENBQUMsR0FBQyxRQUFELEdBQVUsS0FBWixJQUFtQixPQUF2QyxFQUFnRCxrQkFBaEQsR0FBb0UsS0FBSzZaLFVBQUwsQ0FBZ0IsQ0FBQ3ZSLENBQUMsR0FBQyxRQUFELEdBQVUsS0FBWixJQUFtQixPQUFuQyxFQUE0QyxrQkFBNUMsQ0FBcEU7QUFBb0k7O0FBQUFoQyxTQUFDLENBQUN3RyxJQUFGLENBQU8sQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFQLEVBQWlCeEcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxlQUFLNlQsSUFBTCxDQUFVcEcsT0FBVixDQUFrQmtFLFFBQWxCLENBQTJCM1IsQ0FBM0IsS0FBK0IsS0FBS1gsT0FBTCxDQUFhcVUsUUFBYixDQUFzQixpQkFBZTFULENBQXJDLENBQS9CO0FBQXVFLFNBQTdGLEVBQThGLElBQTlGLENBQWpCLEdBQXNILEtBQUtYLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0IsYUFBVyxLQUFLRyxJQUFMLENBQVVoSCxJQUEzQyxDQUF0SCxFQUF1S3VDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQUt3RSxJQUFMLENBQVVoSCxJQUF2QixLQUE4QixLQUFLeE4sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixlQUF0QixDQUFyTSxFQUE0TyxLQUFLbUYsTUFBTCxHQUFZLENBQVosSUFBZSxLQUFLeFosT0FBTCxDQUFhcVUsUUFBYixDQUFzQixhQUF0QixDQUEzUCxFQUFnUyxLQUFLdUYsUUFBTCxHQUFjLENBQUMsQ0FBL1M7QUFBaVQ7QUFBQyxLQUFsbkg7QUFBbW5Ib0Isd0JBQW9CLEVBQUMsZ0NBQVU7QUFBQyxVQUFJbFgsQ0FBSjtBQUFNLFVBQUcsRUFBRUEsQ0FBQyxHQUFDLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCb0UsT0FBdEIsQ0FBSCxFQUFrQyxPQUFNLEVBQU47O0FBQVMsV0FBSSxJQUFJN1IsQ0FBQyxHQUFDLEVBQU4sRUFBU3NJLENBQUMsR0FBQ2lDLElBQUksQ0FBQ0UsR0FBTCxDQUFTLENBQVQsRUFBVyxLQUFLME0sU0FBTCxHQUFlaFUsQ0FBQyxDQUFDLENBQUQsQ0FBM0IsQ0FBWCxFQUEyQzZHLENBQUMsR0FBQ08sSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBSzJNLFNBQUwsR0FBZWhVLENBQUMsQ0FBQyxDQUFELENBQXpCLEVBQTZCLEtBQUswVixNQUFsQyxDQUE3QyxFQUF1RjVPLENBQUMsR0FBQyxLQUFLa04sU0FBOUYsRUFBd0dqTixDQUFDLEdBQUNELENBQTlHLEVBQWdIQyxDQUFDLElBQUVGLENBQW5ILEVBQXFIRSxDQUFDLEVBQXRILEVBQXlILENBQUNDLENBQUMsR0FBQ3dKLEtBQUssQ0FBQ2MsS0FBTixDQUFZdkssQ0FBQyxHQUFDLENBQWQsQ0FBSCxFQUFxQmlOLFNBQXJCLElBQWdDbE4sQ0FBaEMsSUFBbUNqSyxDQUFDLENBQUNxUSxJQUFGLENBQU9sRyxDQUFQLENBQW5DOztBQUE2QyxXQUFJRCxDQUFDLEdBQUNELENBQU4sRUFBUTNCLENBQUMsSUFBRTRCLENBQVgsRUFBYUEsQ0FBQyxFQUFkLEVBQWlCO0FBQUMsWUFBSUMsQ0FBSjtBQUFNLFNBQUNBLENBQUMsR0FBQ3dKLEtBQUssQ0FBQ2MsS0FBTixDQUFZdkssQ0FBQyxHQUFDLENBQWQsQ0FBSCxFQUFxQmlOLFNBQXJCLElBQWdDbE4sQ0FBaEMsSUFBbUNqSyxDQUFDLENBQUNxUSxJQUFGLENBQU9sRyxDQUFQLENBQW5DO0FBQTZDOztBQUFBLGFBQU9uSyxDQUFQO0FBQVMsS0FBeDdIO0FBQXk3SHNhLDRCQUF3QixFQUFDLG9DQUFVO0FBQUMsVUFBSW5YLENBQUMsR0FBQyxLQUFLa1gsb0JBQUwsRUFBTjs7QUFBa0MvVCxPQUFDLENBQUN3RyxJQUFGLENBQU8zSixDQUFQLEVBQVNtRCxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM2UixPQUFGO0FBQVksT0FBbEMsRUFBbUMsSUFBbkMsQ0FBVDtBQUFtRCxLQUFsakk7QUFBbWpJQSxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLMEksVUFBTCxJQUFpQixLQUFLQyxTQUF0QixJQUFpQyxXQUFTLEtBQUszRyxJQUFMLENBQVVoSCxJQUFwRCxJQUEwRCxDQUFDLEtBQUtnSCxJQUFMLENBQVVwRyxPQUFWLENBQWtCb0UsT0FBN0UsSUFBc0YsS0FBSzRJLE1BQTNGLEtBQW9HLEtBQUt4SCxNQUFMLElBQWMsS0FBS3NILFVBQUwsR0FBZ0IsQ0FBQyxDQUEvQixFQUFpQyxLQUFLRyxZQUFMLEdBQWtCLElBQUluTyxVQUFKLENBQWUsS0FBSytDLEtBQUwsQ0FBVyxDQUFYLENBQWYsRUFBNkJoSixDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGFBQUtzWCxNQUFMLEdBQVksQ0FBQyxDQUFiLEVBQWVoQyxFQUFFLENBQUMsS0FBSzVFLElBQUwsQ0FBVXBVLEdBQVgsQ0FBRixHQUFrQixDQUFDLENBQWxDLEVBQW9DLEtBQUs4YSxVQUFMLEdBQWdCLENBQUMsQ0FBckQsRUFBdUQsS0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBdkUsRUFBeUUsS0FBS2hLLFVBQUwsR0FBZ0I7QUFBQzFKLGVBQUssRUFBQzNELENBQUMsQ0FBQytCLEdBQUYsQ0FBTWtJLFlBQWI7QUFBMEI5RixnQkFBTSxFQUFDbkUsQ0FBQyxDQUFDK0IsR0FBRixDQUFNdUo7QUFBdkMsU0FBekY7QUFBK0ksT0FBbkssRUFBb0ssSUFBcEssQ0FBN0IsRUFBdU0sSUFBdk0sRUFBNE07QUFBQ2YsY0FBTSxFQUFDO0FBQVIsT0FBNU0sQ0FBdko7QUFBNlgsS0FBbjhJO0FBQW84SXFDLFFBQUksRUFBQyxjQUFTL1AsQ0FBVCxFQUFXbUQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLOFAsTUFBTCxJQUFjLEtBQUt3SCxNQUF0QixFQUE2QnphLENBQUMsSUFBRUEsQ0FBQyxFQUFKLENBQTdCLEtBQXlDLFFBQU8sS0FBSzRPLEtBQUwsSUFBYSxLQUFLK0wsT0FBTCxHQUFhLENBQUMsQ0FBM0IsRUFBNkIsS0FBSzlHLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JzRCxPQUFsQixLQUE0QixLQUFLNkosYUFBTCxHQUFtQi9NLFVBQVUsQ0FBQ3ZILENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUNtSCxlQUFPLENBQUNwRSxJQUFSO0FBQWUsT0FBbEMsRUFBbUMsSUFBbkMsQ0FBRCxFQUEwQyxLQUFLZ0QsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnVFLFlBQWxCLElBQWdDLENBQTFFLENBQXpELENBQTdCLEVBQW9LLEtBQUs2QixJQUFMLENBQVVoSCxJQUFyTDtBQUEyTCxhQUFJLE9BQUo7QUFBWSxjQUFHLEtBQUtoTSxLQUFSLEVBQWMsT0FBTyxNQUFLYixDQUFDLElBQUVBLENBQUMsRUFBVCxDQUFQO0FBQW9CLGVBQUs2YSxVQUFMLEdBQWdCLElBQUl0TyxVQUFKLENBQWUsS0FBSytDLEtBQUwsQ0FBVyxDQUFYLENBQWYsRUFBNkJoSixDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGlCQUFLMlgsYUFBTCxJQUFxQixLQUFLQyxhQUFMLENBQW1CO0FBQUNqVSxtQkFBSyxFQUFDM0QsQ0FBQyxDQUFDK0IsR0FBRixDQUFNa0ksWUFBYjtBQUEwQjlGLG9CQUFNLEVBQUNuRSxDQUFDLENBQUMrQixHQUFGLENBQU11SjtBQUF2QyxhQUFuQixDQUFyQixFQUErRnpPLENBQUMsSUFBRUEsQ0FBQyxFQUFuRztBQUFzRyxXQUExSCxFQUEySCxJQUEzSCxDQUE3QixFQUE4SnNHLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsaUJBQUtnTixhQUFMLElBQXFCLEtBQUt4TCxLQUFMLENBQVd3QixJQUFYLEVBQXJCLEVBQXVDLEtBQUtGLE9BQUwsQ0FBYW9LLE9BQWIsQ0FBcUIsS0FBS25hLEtBQUwsR0FBV3lGLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsNkJBQXBCLEVBQW1EdFQsTUFBbkQsQ0FBMERrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGVBQXBCLENBQTFELENBQWhDLENBQXZDLEVBQXdLLEtBQUtyVSxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGNBQXRCLENBQXhLLEVBQThNLEtBQUtxSCxhQUFMLENBQW1CO0FBQUNqVSxtQkFBSyxFQUFDLEtBQUtqRyxLQUFMLENBQVdvYSxVQUFYLEVBQVA7QUFBK0IzVCxvQkFBTSxFQUFDLEtBQUt6RyxLQUFMLENBQVdxYSxXQUFYO0FBQXRDLGFBQW5CLENBQTlNLEVBQWtTLEtBQUtyYSxLQUFMLENBQVcySyxHQUFYLENBQWU7QUFBQzFFLG1CQUFLLEVBQUMsTUFBUDtBQUFjUSxvQkFBTSxFQUFDO0FBQXJCLGFBQWYsQ0FBbFMsRUFBK1V0SCxDQUFDLElBQUVBLENBQUMsRUFBblY7QUFBc1YsV0FBelcsRUFBMFcsSUFBMVcsQ0FBOUosRUFBOGdCO0FBQUMwTixrQkFBTSxFQUFDLEtBQUttRyxJQUFMLENBQVVwRyxPQUFWLENBQWtCK0Q7QUFBMUIsV0FBOWdCLENBQWhCO0FBQXVrQjs7QUFBTSxhQUFJLE9BQUo7QUFBWSxlQUFLMkosVUFBTCxHQUFnQixJQUFJN0ssVUFBSixDQUFlLEtBQUt1RCxJQUFMLENBQVVwVSxHQUF6QixFQUE2QjZHLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsaUJBQUsyWCxhQUFMLElBQXFCLEtBQUtDLGFBQUwsQ0FBbUI7QUFBQ2pVLG1CQUFLLEVBQUMzRCxDQUFDLENBQUNxTixVQUFGLENBQWExSixLQUFwQjtBQUEwQlEsb0JBQU0sRUFBQ25FLENBQUMsQ0FBQ3FOLFVBQUYsQ0FBYWxKO0FBQTlDLGFBQW5CLENBQXJCLEVBQStGdEgsQ0FBQyxJQUFFQSxDQUFDLEVBQW5HO0FBQXNHLFdBQTFILEVBQTJILElBQTNILENBQTdCLENBQWhCO0FBQStLOztBQUFNLGFBQUksU0FBSjtBQUFjLGVBQUs4YSxhQUFMLElBQXFCLEtBQUtDLGFBQUwsQ0FBbUI7QUFBQ2pVLGlCQUFLLEVBQUMsS0FBSytNLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0IzRyxLQUF6QjtBQUErQlEsa0JBQU0sRUFBQyxLQUFLdU0sSUFBTCxDQUFVcEcsT0FBVixDQUFrQm5HO0FBQXhELFdBQW5CLENBQXJCLEVBQXlHdEgsQ0FBQyxJQUFFQSxDQUFDLEVBQTdHO0FBQXJnQztBQUFzbkMsS0FBdG5MO0FBQXVuTCthLGlCQUFhLEVBQUMsdUJBQVM1WCxDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUtxTixVQUFMLEdBQWdCck4sQ0FBaEIsRUFBa0IsS0FBSzBRLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0I0RixRQUFsQixJQUE0QixLQUFLUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCNkYsU0FBbkUsRUFBNkU7QUFBQyxZQUFJdFQsQ0FBQyxHQUFDLEtBQUs2VCxJQUFMLENBQVVwRyxPQUFoQjtBQUFBLFlBQXdCbkYsQ0FBQyxHQUFDO0FBQUN4QixlQUFLLEVBQUM5RyxDQUFDLENBQUNxVCxRQUFGLEdBQVdyVCxDQUFDLENBQUNxVCxRQUFiLEdBQXNCLEtBQUs3QyxVQUFMLENBQWdCMUosS0FBN0M7QUFBbURRLGdCQUFNLEVBQUN0SCxDQUFDLENBQUNzVCxTQUFGLEdBQVl0VCxDQUFDLENBQUNzVCxTQUFkLEdBQXdCLEtBQUs5QyxVQUFMLENBQWdCbEo7QUFBbEcsU0FBMUI7QUFBb0ksYUFBS2tKLFVBQUwsR0FBZ0IzRyxHQUFHLENBQUNDLE1BQUosQ0FBV3hCLENBQVgsRUFBYSxLQUFLa0ksVUFBbEIsQ0FBaEI7QUFBOEM7QUFBQyxLQUFsNUw7QUFBbTVMc0ssaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFdBQUtNLGtCQUFMLElBQTBCLEtBQUtULE9BQUwsR0FBYSxDQUFDLENBQXhDLEVBQTBDLEtBQUtGLE1BQUwsR0FBWSxDQUFDLENBQXZELEVBQXlEaEMsRUFBRSxDQUFDLEtBQUs1RSxJQUFMLENBQVVwVSxHQUFYLENBQUYsR0FBa0IsQ0FBQyxDQUE1RSxFQUE4RXdWLE9BQU8sQ0FBQ25FLElBQVIsQ0FBYSxJQUFiLEVBQWtCLElBQWxCLEVBQXVCLEtBQUtxRyxTQUE1QixDQUE5RTtBQUFxSCxLQUFqaU07QUFBa2lNOUgsV0FBTyxFQUFDLG1CQUFVO0FBQUMsYUFBT0QsSUFBSSxDQUFDQyxPQUFMLENBQWEsS0FBS3dFLElBQUwsQ0FBVWhILElBQXZCLENBQVA7QUFBb0MsS0FBemxNO0FBQTBsTXdPLGVBQVcsRUFBQyxxQkFBU2xZLENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQyxLQUFLbVksWUFBTixJQUFvQixLQUFLak0sT0FBTCxFQUF2QixFQUFzQztBQUFDLFlBQUlyUCxDQUFDLEdBQUMsVUFBUVMsTUFBTSxDQUFDQyxRQUFQLElBQWlCLGFBQVdELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnNQLFFBQTVDLEdBQXFELEdBQXJELEdBQXlELEVBQWpFLElBQXFFLEdBQTNFO0FBQUEsWUFBK0UxSCxDQUFDLEdBQUNoQyxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBS3FOLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0IsS0FBS29HLElBQUwsQ0FBVWhILElBQTVCLEtBQW1DLEVBQS9DLENBQWpGO0FBQUEsWUFBb0k3QyxDQUFDLEdBQUMxRCxDQUFDLENBQUNpVixLQUFGLENBQVFqVCxDQUFSLENBQXRJO0FBQUEsWUFBaUoyQixDQUFDLEdBQUM7QUFBQzBGLGVBQUssRUFBQzNQLENBQUMsR0FBQyw2Q0FBVDtBQUF1RDZQLGlCQUFPLEVBQUM3UCxDQUFDLEdBQUM7QUFBakUsVUFBK0csS0FBSzZULElBQUwsQ0FBVWhILElBQXpILEVBQStISSxPQUEvSCxDQUF1SSxNQUF2SSxFQUE4SSxLQUFLNEcsSUFBTCxDQUFVMkgsS0FBVixDQUFnQjVMLEVBQTlKLEVBQWtLM0MsT0FBbEssQ0FBMEssZUFBMUssRUFBMExqRCxDQUExTCxDQUFuSjtBQUFnVixhQUFLNEcsT0FBTCxDQUFhb0ssT0FBYixDQUFxQixLQUFLTSxZQUFMLEdBQWtCaFYsQ0FBQyxDQUFDLG1FQUFELENBQUQsQ0FBdUVvTixRQUF2RSxDQUFnRixvQkFBaEYsRUFBc0dnRyxJQUF0RyxDQUEyRztBQUFDL0ssYUFBRyxFQUFDMUUsQ0FBTDtBQUFPM0MsZ0JBQU0sRUFBQyxLQUFLbVUsa0JBQUwsQ0FBd0JuVSxNQUF0QztBQUE2Q1IsZUFBSyxFQUFDLEtBQUsyVSxrQkFBTCxDQUF3QjNVLEtBQTNFO0FBQWlGNFUscUJBQVcsRUFBQztBQUE3RixTQUEzRyxDQUF2QyxHQUFvUHZZLENBQUMsSUFBRUEsQ0FBQyxFQUF4UDtBQUEyUCxPQUFsbkIsTUFBdW5CQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQWh2TjtBQUFpdk53WSxTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFJeFksQ0FBQyxHQUFDd1EsS0FBSyxDQUFDdFUsT0FBTixDQUFjLENBQWQsRUFBaUJ1YyxTQUF2QjtBQUFpQ3pZLE9BQUMsSUFBRUEsQ0FBQyxLQUFHLEtBQUs5RCxPQUFMLENBQWEsQ0FBYixDQUFQLElBQXdCc1UsS0FBSyxDQUFDdFUsT0FBTixDQUFjZSxNQUFkLENBQXFCLEtBQUtmLE9BQTFCLENBQXhCO0FBQTJELEtBQTkxTjtBQUErMU53UixRQUFJLEVBQUMsY0FBUzdRLENBQVQsRUFBVztBQUFDLFVBQUltRCxDQUFDLEdBQUMsS0FBS3FSLE1BQUwsQ0FBWXdFLFFBQWxCO0FBQTJCN1YsT0FBQyxDQUFDMFQsS0FBRixDQUFRLEVBQVIsR0FBWTFULENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQyxLQUFLNlQsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnNELE9BQWxCLElBQTJCLENBQUMwSCxFQUFFLENBQUMsS0FBSzVFLElBQUwsQ0FBVXBVLEdBQVgsQ0FBcEM7QUFBb0R3VixlQUFPLENBQUM4RCxRQUFSLElBQWtCLENBQUMvWSxDQUFuQixJQUFzQmlWLE9BQU8sQ0FBQ25FLElBQVIsRUFBdEIsRUFBcUM2QyxLQUFLLENBQUNrSSxZQUFOLEVBQXJDLEVBQTBEMVksQ0FBQyxFQUEzRDtBQUE4RCxPQUF0SSxFQUF1SSxJQUF2SSxDQUFSLENBQVosRUFBa0tBLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsYUFBSzJZLFFBQUwsSUFBZ0I1RyxFQUFFLENBQUNqRyxHQUFILENBQU8sS0FBSzhNLEdBQVosQ0FBaEIsRUFBaUM1WSxDQUFDLEVBQWxDO0FBQXFDLE9BQXpELEVBQTBELElBQTFELENBQVIsQ0FBbEssRUFBMk9BLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUM0VCxnQkFBUSxDQUFDa0IsTUFBVCxDQUFnQixLQUFLcEUsSUFBTCxDQUFVcEcsT0FBVixDQUFrQjJELFFBQWxDLEdBQTRDak8sQ0FBQyxFQUE3QztBQUFnRCxPQUFwRSxFQUFxRSxJQUFyRSxDQUFSLENBQTNPLEVBQStUQSxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDOFIsZUFBTyxDQUFDbEIsT0FBUixDQUFnQixLQUFLRixJQUFMLENBQVVwRyxPQUFWLENBQWtCc0UsSUFBbEMsR0FBd0MsS0FBS2hDLElBQUwsQ0FBVXpKLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3dNLHdCQUFMLElBQWdDblgsQ0FBQyxFQUFqQztBQUFvQyxTQUF2RCxFQUF3RCxJQUF4RCxDQUFWLENBQXhDO0FBQWlILE9BQXJJLEVBQXNJLElBQXRJLENBQVIsQ0FBL1QsRUFBb2RBLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsYUFBS3dZLEtBQUwsSUFBYTdILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLEtBQUtGLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JzRSxJQUFqQyxDQUFiLEVBQW9EbUQsRUFBRSxDQUFDK0MsTUFBSCxFQUFwRCxFQUFnRSxLQUFLakMsUUFBTCxFQUFoRSxFQUFnRmxDLE1BQU0sQ0FBQytCLGNBQVAsRUFBaEYsRUFBd0cxUyxDQUFDLEVBQXpHO0FBQTRHLE9BQWhJLEVBQWlJLElBQWpJLENBQVIsQ0FBcGQsRUFBb21CLEtBQUtrTSxPQUFMLE1BQWdCbE0sQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxhQUFLa1ksV0FBTCxDQUFpQi9VLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMzSyxXQUFDO0FBQUcsU0FBdkIsQ0FBakI7QUFBMkMsT0FBL0QsRUFBZ0UsSUFBaEUsQ0FBUixDQUFwbkIsRUFBbXNCLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCd0UsSUFBbEIsSUFBd0I5TyxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDd1EsYUFBSyxDQUFDcUksWUFBTixDQUFtQjdZLENBQW5CO0FBQXNCLE9BQTFDLEVBQTJDLElBQTNDLENBQVIsQ0FBM3RCLEVBQXF4QkEsQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLENBQU47QUFBQSxZQUFRc0ksQ0FBQyxHQUFDLEtBQUt1TCxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJDLE9BQTFCLENBQWtDQyxJQUE1QztBQUFpRGlELGNBQU0sQ0FBQ3VCLGNBQVAsQ0FBc0IsS0FBS3hCLElBQUwsQ0FBVWhILElBQWhDLEdBQXNDaUgsTUFBTSxDQUFDTCxPQUFQLEtBQWlCbkwsQ0FBQyxHQUFDLEtBQUt1TCxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJsUSxNQUExQixDQUFpQ29RLElBQW5DLEVBQXdDLGVBQWF2SyxDQUFDLENBQUN1RyxJQUFGLENBQU8sS0FBS2dILElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J3TyxNQUF6QixDQUFiLElBQStDLEtBQUtwSSxJQUFMLENBQVVwRyxPQUFWLENBQWtCd08sTUFBbEIsQ0FBeUJ2UCxJQUF6QixDQUE4Qm5HLE1BQTlCLENBQXhHLENBQXRDLEVBQXFMLEtBQUtzTixJQUFMLENBQVVwRyxPQUFWLENBQWtCd0UsSUFBbEIsS0FBeUJqUyxDQUFDLElBQUcyVCxLQUFLLENBQUNxSSxZQUFOLENBQW1CLFlBQVU7QUFBQyxZQUFFaGMsQ0FBRixHQUFJLENBQUosSUFBT21ELENBQUMsRUFBUjtBQUFXLFNBQXpDLENBQTdCLENBQXJMLEVBQThQMlEsTUFBTSxDQUFDakQsSUFBUCxDQUFZLFlBQVU7QUFBQyxZQUFFN1EsQ0FBRixHQUFJLENBQUosSUFBT21ELENBQUMsRUFBUjtBQUFXLFNBQWxDLEVBQW1DLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJsUSxNQUExQixDQUFpQ29RLElBQXBFLENBQTlQLEVBQXdVLEtBQUsrRixLQUFMLENBQVcsWUFBVTtBQUFDLFlBQUU1VyxDQUFGLEdBQUksQ0FBSixJQUFPbUQsQ0FBQyxFQUFSO0FBQVcsU0FBakMsRUFBa0NtRixDQUFsQyxDQUF4VSxFQUE2VzRNLEVBQUUsQ0FBQ2dCLGNBQUgsQ0FBa0IsWUFBVTtBQUFDLFlBQUVsVyxDQUFGLEdBQUksQ0FBSixJQUFPbUQsQ0FBQyxFQUFSO0FBQVcsU0FBeEMsRUFBeUMyUSxNQUFNLENBQUNhLE1BQVAsR0FBYyxDQUFkLEdBQWdCck0sQ0FBekQsQ0FBN1csRUFBeWF3TCxNQUFNLENBQUNhLE1BQVAsSUFBZU8sRUFBRSxDQUFDckUsSUFBSCxDQUFRLElBQVIsRUFBYSxDQUFiLEdBQWdCaUQsTUFBTSxDQUFDYSxNQUFQLEdBQWMsQ0FBQyxDQUE5QyxJQUFpRE8sRUFBRSxDQUFDckUsSUFBSCxDQUFRLElBQVIsRUFBYSxDQUFiLENBQTFkO0FBQTBlLFlBQUk3RyxDQUFDLEdBQUMsS0FBSzZKLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J5TyxhQUF4QjtBQUFzQyx1QkFBYTVWLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdDLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxDQUFDMEMsSUFBRixDQUFPbkcsTUFBUCxFQUFjLEtBQUs0USxTQUFuQixDQUF4QjtBQUFzRCxPQUEzb0IsRUFBNG9CLElBQTVvQixDQUFSLENBQXJ4QixFQUFnN0NoVSxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGFBQUs0VixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCL1ksQ0FBQyxJQUFFQSxDQUFDLEVBQXJCLEVBQXdCbUQsQ0FBQyxFQUF6QjtBQUE0QixPQUFoRCxFQUFpRCxJQUFqRCxDQUFSLENBQWg3QztBQUFnL0MsS0FBMzNRO0FBQTQzUXlULFNBQUssRUFBQyxlQUFTelQsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQ3dMLE1BQU0sQ0FBQ0wsT0FBUCxHQUFlLGFBQVduTixDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCLEtBQUs2VCxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJDLE9BQTFCLENBQWtDQyxJQUF4RSxHQUE2RSxDQUFuRjtBQUFxRixXQUFLeFIsT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCdkQsSUFBdEIsR0FBNkJ3RCxNQUE3QixDQUFvQy9MLENBQUMsSUFBRSxDQUF2QyxFQUF5QyxDQUF6QyxFQUEyQ25GLENBQTNDO0FBQThDLEtBQW5oUjtBQUFvaFIyTixRQUFJLEVBQUMsY0FBUzNOLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFVBQUcsS0FBS1gsT0FBUixFQUFnQjtBQUFDLGFBQUs4YyxXQUFMLElBQW1CLEtBQUt2TixLQUFMLEVBQW5CO0FBQWdDLFlBQUl0RyxDQUFDLEdBQUMsYUFBV2hDLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIsS0FBSzZULElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQkMsT0FBMUIsQ0FBa0NFLElBQS9EO0FBQW9FLGFBQUt6QixPQUFMLE9BQWlCL0csQ0FBQyxHQUFDLENBQW5CLEdBQXNCLEtBQUtqSixPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JDLE1BQXRCLENBQTZCL0wsQ0FBN0IsRUFBK0IsQ0FBL0IsRUFBaUMsbUJBQWpDLEVBQXFEaEMsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFLek8sT0FBTCxDQUFheVIsSUFBYixJQUFvQixLQUFLaUksUUFBTCxHQUFjLENBQUMsQ0FBbkMsRUFBcUNwRixLQUFLLENBQUN5SSxjQUFOLENBQXFCLEtBQUtqRixTQUExQixDQUFyQyxFQUEwRWhVLENBQUMsSUFBRUEsQ0FBQyxFQUE5RTtBQUFpRixTQUFwRyxFQUFxRyxJQUFyRyxDQUFyRCxDQUF0QjtBQUF1TCxPQUE1UyxNQUFpVEEsQ0FBQyxJQUFFQSxDQUFDLEVBQUo7QUFBTyxLQUEvMVI7QUFBZzJSaVIsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS0ksTUFBTCxDQUFZd0UsUUFBWixDQUFxQm5DLEtBQXJCLENBQTJCLEVBQTNCLEdBQStCLEtBQUt4WCxPQUFMLElBQWMsS0FBS0EsT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLENBQTdDLEVBQW1FLEtBQUt4RixLQUFMLEVBQW5FO0FBQWdGLEtBQWg4UjtBQUFpOFJ1TixlQUFXLEVBQUMsdUJBQVU7QUFBQyxXQUFLYixZQUFMLEtBQW9CLEtBQUtBLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIzTSxHQUFyQixHQUF5QixlQUF6QixFQUF5QyxLQUFLMk0sWUFBTCxDQUFrQnZhLE1BQWxCLEVBQXpDLEVBQW9FLEtBQUt1YSxZQUFMLEdBQWtCLElBQTFHO0FBQWdILEtBQXhrUztBQUF5a1N2YSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLcVQsSUFBTCxJQUFZLEtBQUsrSCxXQUFMLEVBQVosRUFBK0IsS0FBSzljLE9BQUwsSUFBYyxLQUFLQSxPQUFMLENBQWEwQixNQUFiLEVBQTdDLEVBQW1FLEtBQUtzYixNQUFMLEtBQWMxSSxLQUFLLENBQUN5SSxjQUFOLENBQXFCLEtBQUtqRixTQUExQixHQUFxQyxLQUFLa0YsTUFBTCxHQUFZLENBQUMsQ0FBaEUsQ0FBbkUsRUFBc0ksS0FBSzNCLFlBQUwsS0FBb0IsS0FBS0EsWUFBTCxDQUFrQjlMLEtBQWxCLElBQTBCLEtBQUs4TCxZQUFMLEdBQWtCLElBQTVDLEVBQWlELEtBQUtILFVBQUwsR0FBZ0IsSUFBakUsRUFBc0UsS0FBS0MsU0FBTCxHQUFlLElBQXpHLENBQXRJLEVBQXFQLEtBQUt6QixRQUFMLEdBQWMsQ0FBQyxDQUFwUSxFQUFzUSxLQUFLdUQsT0FBTCxHQUFhLENBQUMsQ0FBcFI7QUFBc1IsS0FBajNTO0FBQWszUzFOLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtpTSxVQUFMLEtBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JqTSxLQUFoQixJQUF3QixLQUFLaU0sVUFBTCxHQUFnQixJQUExRCxHQUFnRSxLQUFLTSxVQUFMLEtBQWtCLEtBQUtBLFVBQUwsQ0FBZ0J2TSxLQUFoQixJQUF3QixLQUFLdU0sVUFBTCxHQUFnQixJQUExRCxDQUFoRSxFQUFnSSxLQUFLQyxrQkFBTCxFQUFoSSxFQUEwSixLQUFLVCxPQUFMLEdBQWEsQ0FBQyxDQUF4SztBQUEwSyxLQUE3aVQ7QUFBOGlUUyxzQkFBa0IsRUFBQyw4QkFBVTtBQUFDLFdBQUtSLGFBQUwsS0FBcUIvTCxZQUFZLENBQUMsS0FBSytMLGFBQU4sQ0FBWixFQUFpQyxLQUFLQSxhQUFMLEdBQW1CLElBQXpFO0FBQStFLEtBQTNwVDtBQUE0cFQyQixrQkFBYyxFQUFDLHdCQUFTcFosQ0FBVCxFQUFXO0FBQUMsVUFBSW5ELENBQUMsR0FBQyxLQUFLNlQsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnFFLFFBQWxCLElBQTRCLElBQUUsS0FBSytHLE1BQXpDOztBQUFnRCxjQUFPLEtBQUtrRCxHQUFaO0FBQWlCLGFBQUksV0FBSjtBQUFnQixhQUFJLFFBQUo7QUFBYSxjQUFHLENBQUMsS0FBS2xJLElBQUwsQ0FBVXNGLE9BQVgsSUFBb0IsQ0FBQ25aLENBQXhCLEVBQTBCLE9BQU8sQ0FBUDtBQUFTOztBQUFNLGFBQUksU0FBSjtBQUFjLGNBQUcsQ0FBQyxLQUFLNlQsSUFBTCxDQUFVc0YsT0FBZCxFQUFzQixPQUFPLENBQVA7QUFBM0g7O0FBQW9JLFVBQUk3USxDQUFDLEdBQUMsYUFBVyxLQUFLeVQsR0FBaEIsR0FBb0IsS0FBSy9CLFVBQXpCLEdBQW9DLEtBQUtaLElBQS9DO0FBQW9ELG9CQUFZLEtBQUsyQyxHQUFqQixLQUF1QjVZLENBQUMsR0FBQ29ILElBQUksQ0FBQ0MsR0FBTCxDQUFTckgsQ0FBVCxFQUFXMlEsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQWpDLENBQXpCO0FBQWtFLFVBQUlrRCxDQUFKO0FBQUEsVUFBTUMsQ0FBQyxHQUFDM0IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLdkUsS0FBTCxDQUFXK0MsS0FBbkI7QUFBeUIsYUFBTSxhQUFXLEtBQUtpVixHQUFoQixJQUFxQixnQkFBYyxLQUFLQSxHQUF4QyxLQUE4QzlSLENBQUMsR0FBQyxNQUFoRCxHQUF3RDNCLENBQUMsQ0FBQ2tELEdBQUYsQ0FBTTtBQUFDMUUsYUFBSyxFQUFDM0QsQ0FBQyxHQUFDO0FBQVQsT0FBTixDQUF4RCxFQUE4RTZHLENBQUMsR0FBQ2hDLFVBQVUsQ0FBQ00sQ0FBQyxDQUFDNFMsV0FBRixFQUFELENBQTFGLEVBQTRHNVMsQ0FBQyxDQUFDa0QsR0FBRixDQUFNO0FBQUMxRSxhQUFLLEVBQUNtRDtBQUFQLE9BQU4sQ0FBNUcsRUFBNkhELENBQW5JO0FBQXFJLEtBQS9uVTtBQUFnb1V3UyxpQkFBYSxFQUFDLHVCQUFTclosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQyxFQUFOO0FBQUEsVUFBUzBCLENBQUMsR0FBQzhKLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXhCLEdBQWYsQ0FBbUIsS0FBS3dCLE9BQXhCLENBQVg7QUFBNENXLE9BQUMsS0FBR2dLLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbk0sR0FBRixDQUFNbUMsQ0FBTixDQUFMLENBQUQsRUFBZ0JzRyxDQUFDLENBQUN3RyxJQUFGLENBQU85QyxDQUFQLEVBQVMsVUFBUzdHLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDc0csU0FBQyxDQUFDdEcsQ0FBRCxDQUFELENBQUt5YyxFQUFMLENBQVEsVUFBUixLQUFxQm5VLENBQUMsQ0FBQytILElBQUYsQ0FBTy9KLENBQUMsQ0FBQ3RHLENBQUQsQ0FBRCxDQUFLNlEsSUFBTCxFQUFQLENBQXJCO0FBQXlDLE9BQWhFLENBQWhCO0FBQWtGLFVBQUk1RyxDQUFDLEdBQUMsS0FBSzVLLE9BQUwsQ0FBYXFkLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBTjtBQUE2QyxXQUFLcmQsT0FBTCxDQUFhMlUsV0FBYixDQUF5QixlQUF6QjtBQUEwQyxVQUFJOUosQ0FBQyxHQUFDLEtBQUs3SyxPQUFMLENBQWFxZCxRQUFiLENBQXNCLGdCQUF0QixDQUFOO0FBQThDLFdBQUtyZCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGdCQUF0QixHQUF3Q0ksTUFBTSxDQUFDelUsT0FBUCxDQUFlbU0sR0FBZixDQUFtQjtBQUFDbVIsa0JBQVUsRUFBQztBQUFaLE9BQW5CLENBQXhDLEVBQWtGeFosQ0FBQyxFQUFuRixFQUFzRjJRLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZW1NLEdBQWYsQ0FBbUI7QUFBQ21SLGtCQUFVLEVBQUM7QUFBWixPQUFuQixDQUF0RixFQUFpSTFTLENBQUMsSUFBRSxLQUFLNUssT0FBTCxDQUFhcVUsUUFBYixDQUFzQixlQUF0QixDQUFwSSxFQUEyS3hKLENBQUMsSUFBRSxLQUFLN0ssT0FBTCxDQUFhMlUsV0FBYixDQUF5QixnQkFBekIsQ0FBOUssRUFBeU4xTixDQUFDLENBQUN3RyxJQUFGLENBQU94RSxDQUFQLEVBQVMsVUFBU25GLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM4USxJQUFGO0FBQVMsT0FBaEMsQ0FBek47QUFBMlAsS0FBMXBWO0FBQTJwVjhMLGdCQUFZLEVBQUMsd0JBQVU7QUFBQyxXQUFLM0osTUFBTCxJQUFjLEtBQUs2RixVQUFMLEdBQWdCLEtBQUtqRixJQUFMLENBQVVwRyxPQUFWLENBQWtCb1AsU0FBaEQsRUFBMEQsS0FBS0MsV0FBTCxHQUFpQixDQUFDLENBQTVFLEVBQThFLElBQUVDLFFBQVEsQ0FBQyxLQUFLMWQsT0FBTCxDQUFhbU0sR0FBYixDQUFpQixXQUFqQixDQUFELENBQVYsS0FBNEMsS0FBS3NOLFVBQUwsR0FBZ0IsQ0FBQyxDQUE3RCxDQUE5RSxFQUE4SSxJQUFFaUUsUUFBUSxDQUFDLEtBQUsxZCxPQUFMLENBQWFtTSxHQUFiLENBQWlCLFlBQWpCLENBQUQsQ0FBVixLQUE2QyxLQUFLc1IsV0FBTCxHQUFpQixDQUFDLENBQS9ELENBQTlJO0FBQWdOLEtBQW40VjtBQUFvNFZoQixZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLYyxZQUFMO0FBQW9CLFVBQUl6WixDQUFDLEdBQUMsS0FBSzJWLFVBQUwsR0FBZ0IsV0FBaEIsR0FBNEIsS0FBS2pGLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J5RSxFQUFwRDtBQUF1RCxXQUFLNkosR0FBTCxJQUFVLEtBQUsxYyxPQUFMLENBQWEyVSxXQUFiLENBQXlCLFdBQVMsS0FBSytILEdBQXZDLENBQVYsRUFBc0QsS0FBSzFjLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0IsV0FBU3ZRLENBQS9CLENBQXRELEVBQXdGLEtBQUs0WSxHQUFMLEdBQVM1WSxDQUFqRztBQUFtRyxLQUF0a1c7QUFBdWtXNlMsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBRyxLQUFLcEYsT0FBUixFQUFnQjtBQUFDLGFBQUt2UixPQUFMO0FBQWEsWUFBSWlKLENBQUMsR0FBQ2hDLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXNOLE1BQU0sQ0FBQ3dDLGdCQUFQLEVBQVosQ0FBTjtBQUFBLFlBQTZDblQsQ0FBQyxHQUFDbUQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZLEtBQUtnSyxVQUFqQixDQUEvQztBQUFBLFlBQTRFeFEsQ0FBQyxHQUFDLEtBQUtvQyxTQUFuRjtBQUE2RixhQUFLMFosUUFBTDtBQUFnQixZQUFJOVIsQ0FBQyxHQUFDO0FBQUNxSCxjQUFJLEVBQUMwTCxRQUFRLENBQUMvYyxDQUFDLENBQUN3TCxHQUFGLENBQU0sY0FBTixDQUFELENBQWQ7QUFBc0M0SyxhQUFHLEVBQUMyRyxRQUFRLENBQUMvYyxDQUFDLENBQUN3TCxHQUFGLENBQU0sYUFBTixDQUFEO0FBQWxELFNBQU47O0FBQWdGLFlBQUcsY0FBWSxLQUFLdVEsR0FBakIsSUFBc0IsS0FBS2lCLGdCQUE5QixFQUErQztBQUFDLGNBQUkvUyxDQUFDLEdBQUMsQ0FBTjtBQUFRLGVBQUt1UyxhQUFMLENBQW1CbFcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxpQkFBS2tQLGdCQUFMLENBQXNCUCxFQUF0QixDQUF5QixVQUF6QixNQUF1Q3hTLENBQUMsR0FBQyxLQUFLK1MsZ0JBQUwsQ0FBc0IvQixVQUF0QixDQUFpQyxDQUFDLENBQWxDLENBQXpDO0FBQStFLFdBQWxHLEVBQW1HLElBQW5HLENBQW5CLEdBQTZIaFIsQ0FBQyxHQUFDRCxDQUFDLENBQUNxSCxJQUFKLEtBQVdySCxDQUFDLENBQUNxSCxJQUFGLEdBQU9wSCxDQUFsQixDQUE3SDtBQUFrSjs7QUFBQTNCLFNBQUMsQ0FBQ3hCLEtBQUYsSUFBUyxJQUFFa0QsQ0FBQyxDQUFDcUgsSUFBYixFQUFrQi9JLENBQUMsQ0FBQ2hCLE1BQUYsSUFBVSxJQUFFMEMsQ0FBQyxDQUFDb00sR0FBaEM7QUFBb0MsWUFBSWxNLENBQUo7QUFBQSxZQUFNQyxDQUFOO0FBQUEsWUFBUUMsQ0FBQyxHQUFDO0FBQUN0RCxlQUFLLEVBQUMsQ0FBQyxDQUFSO0FBQVVRLGdCQUFNLEVBQUMsQ0FBQyxDQUFDLEtBQUt3VixXQUFQLElBQW9CLENBQUMsS0FBS2pKLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JrRSxRQUFsQixDQUEyQndCO0FBQWpFLFNBQVY7QUFBQSxZQUE4RTlJLENBQUMsR0FBQ1IsR0FBRyxDQUFDQyxNQUFKLENBQVd4QixDQUFYLEVBQWFuRixDQUFiLEVBQWVpSCxDQUFmLENBQWhGO0FBQUEsWUFBa0dFLENBQUMsR0FBQ2hFLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWTZELENBQVosQ0FBcEc7QUFBQSxZQUFtSDRTLENBQUMsSUFBRSxLQUFLck0sT0FBTCxFQUFhLENBQWYsQ0FBcEg7QUFBQSxZQUFzSXNNLENBQUMsR0FBQyxhQUFXLEtBQUtuQixHQUF4SjtBQUFBLFlBQTRKb0IsQ0FBQyxHQUFDRCxDQUFDLEdBQUMsS0FBS2xELFVBQU4sR0FBaUIsS0FBS1osSUFBckw7QUFBQSxZQUEwTGdFLENBQUMsR0FBQ0YsQ0FBQyxHQUFDLEtBQUsvQyxhQUFOLEdBQW9CLEtBQUtoQixPQUF0TjtBQUFBLFlBQThOdFIsQ0FBQyxHQUFDcVYsQ0FBQyxHQUFDLEtBQUtoRCxTQUFOLEdBQWdCLEtBQUtYLEdBQXRQO0FBQUEsWUFBMFA4RCxDQUFDLEdBQUMsQ0FBQyxDQUFDRCxDQUE5UDs7QUFBZ1EsZ0JBQU8sS0FBS3JCLEdBQVo7QUFBaUIsZUFBSSxTQUFKO0FBQWMsZ0JBQUl1QixDQUFDLEdBQUNoWCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVk4RCxDQUFaLENBQU47QUFBcUIsaUJBQUs2TyxPQUFMLEtBQWVoUCxDQUFDLEdBQUMsS0FBS2dQLE9BQVAsRUFBZSxLQUFLcUQsYUFBTCxDQUFtQmxXLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsbUJBQUksSUFBSTNLLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxDQUFkLEdBQWlCO0FBQUM4WixpQkFBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0JqUyxDQUFDLENBQUN4RCxLQUF0QixDQUFGO0FBQStCLG9CQUFJOUcsQ0FBQyxHQUFDc0ksQ0FBQyxDQUFDaEIsTUFBRixHQUFTZ0QsQ0FBQyxDQUFDaEQsTUFBakI7QUFBd0J0SCxpQkFBQyxHQUFDaWQsQ0FBRixLQUFNM1MsQ0FBQyxHQUFDVCxHQUFHLENBQUNDLE1BQUosQ0FBVztBQUFDaEQsdUJBQUssRUFBQ3dELENBQUMsQ0FBQ3hELEtBQVQ7QUFBZVEsd0JBQU0sRUFBQ2lELElBQUksQ0FBQ0UsR0FBTCxDQUFTSCxDQUFDLENBQUNoRCxNQUFGLElBQVUyVixDQUFDLEdBQUNqZCxDQUFaLENBQVQsRUFBd0IsQ0FBeEI7QUFBdEIsaUJBQVgsRUFBNkRzSyxDQUE3RCxFQUErREYsQ0FBL0QsQ0FBUixHQUEyRWpILENBQUMsRUFBNUU7QUFBK0U7O0FBQUE4WixlQUFDLEdBQUMsS0FBS1YsY0FBTCxDQUFvQmpTLENBQUMsQ0FBQ3hELEtBQXRCLENBQUYsRUFBK0IsQ0FBQyxDQUFDLEtBQUsrTSxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0UsUUFBbEIsQ0FBMkJ3QixDQUE1QixJQUErQjhKLENBQUMsR0FBQzNTLENBQUMsQ0FBQ2hELE1BQUosR0FBV2dCLENBQUMsQ0FBQ2hCLE1BQTVDLElBQW9ENlYsQ0FBQyxJQUFFLFdBQVNBLENBQUMsQ0FBQzNSLEdBQUYsQ0FBTSxTQUFOLENBQWhFLElBQWtGeVIsQ0FBQyxJQUFFLEtBQUczUyxDQUFDLENBQUNoRCxNQUEzRixNQUFxRytWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS0osQ0FBQyxHQUFDLENBQVAsRUFBUzNTLENBQUMsR0FBQ2dULENBQWhILENBQS9CO0FBQWtKLGFBQTdULEVBQThULElBQTlULENBQW5CLEVBQXVWblQsQ0FBdlYsQ0FBOUIsR0FBeVhnVCxDQUFDLElBQUVBLENBQUMsQ0FBQzNSLEdBQUYsQ0FBTTtBQUFDMUUsbUJBQUssRUFBQ3dELENBQUMsQ0FBQ3hELEtBQUYsR0FBUTtBQUFmLGFBQU4sQ0FBNVgsRUFBd1pvRCxDQUFDLEdBQUM7QUFBQ3BELG1CQUFLLEVBQUN3RCxDQUFDLENBQUN4RCxLQUFUO0FBQWVRLG9CQUFNLEVBQUNnRCxDQUFDLENBQUNoRCxNQUFGLEdBQVMyVjtBQUEvQixhQUExWjtBQUE0Yjs7QUFBTSxlQUFJLFFBQUo7QUFBYSxpQkFBSzlELE9BQUwsS0FBZWhQLENBQUMsR0FBQ2lULENBQUYsRUFBSSxLQUFLWixhQUFMLENBQW1CbFcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFDbVAsQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0JqUyxDQUFDLENBQUN4RCxLQUF0QixDQUFILEtBQWtDLE1BQUl3RCxDQUFDLENBQUNoRCxNQUF4QyxLQUFpRCtWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS0osQ0FBQyxHQUFDLENBQXhEO0FBQTJELGFBQTlFLEVBQStFLElBQS9FLENBQW5CLEVBQXdHOVMsQ0FBeEcsQ0FBbkIsR0FBK0hELENBQUMsR0FBQ0ksQ0FBakk7QUFBbUk7O0FBQU0sZUFBSSxXQUFKO0FBQWdCLGdCQUFJaVQsQ0FBQyxHQUFDLEVBQU47QUFBU0gsYUFBQyxJQUFFRyxDQUFDLENBQUNsTixJQUFGLENBQU8rTSxDQUFQLENBQUgsRUFBYSxLQUFLWixhQUFMLENBQW1CbFcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxrQkFBRyxDQUFDc1AsQ0FBQyxJQUFFdlYsQ0FBSixLQUFRc1YsQ0FBQyxDQUFDM1IsR0FBRixDQUFNO0FBQUMxRSxxQkFBSyxFQUFDO0FBQVAsZUFBTixDQUFSLEVBQThCbVcsQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0J6SSxNQUFNLENBQUN5QyxjQUFQLENBQXNCelAsS0FBMUMsQ0FBaEMsRUFBaUZzVyxDQUFDLElBQUVILENBQUMsR0FBQyxLQUFHM1UsQ0FBQyxDQUFDaEIsTUFBOUYsRUFBcUcsSUFBRytWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS3hWLENBQVIsRUFBVTtBQUFDLG9CQUFJMUUsQ0FBQyxHQUFDLEtBQUtnVyxPQUFMLENBQWFzRCxFQUFiLENBQWdCLFVBQWhCLENBQU47QUFBa0MscUJBQUt0RCxPQUFMLENBQWFySSxJQUFiLElBQW9CbU0sQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0J6SSxNQUFNLENBQUN5QyxjQUFQLENBQXNCelAsS0FBMUMsQ0FBdEIsRUFBdUUzRCxDQUFDLElBQUUsS0FBS2dXLE9BQUwsQ0FBYXRJLElBQWIsRUFBMUU7QUFBOEYsZUFBM0ksTUFBZ0pvTSxDQUFDLEdBQUMsQ0FBRjtBQUFJM1MsZUFBQyxHQUFDVCxHQUFHLENBQUNDLE1BQUosQ0FBVztBQUFDaEQscUJBQUssRUFBQ3dCLENBQUMsQ0FBQ3hCLEtBQVQ7QUFBZVEsc0JBQU0sRUFBQ2lELElBQUksQ0FBQ0UsR0FBTCxDQUFTLENBQVQsRUFBV25DLENBQUMsQ0FBQ2hCLE1BQUYsR0FBUzJWLENBQXBCO0FBQXRCLGVBQVgsRUFBeUQzUyxDQUF6RCxFQUEyREYsQ0FBM0QsQ0FBRixFQUFnRUYsQ0FBQyxHQUFDSSxDQUFsRTtBQUFvRSxhQUFoVixFQUFpVixJQUFqVixDQUFuQixFQUEwV2lULENBQTFXLENBQWIsRUFBMFgsS0FBSzNNLE9BQUwsQ0FBYXBGLEdBQWIsQ0FBaUI7QUFBQyxnQ0FBaUI7QUFBbEIsYUFBakIsQ0FBMVg7QUFBcnFCOztBQUFza0M0UixTQUFDLElBQUVBLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLE1BQUQsR0FBUSxNQUFWLENBQUQsRUFBSCxFQUF3QixLQUFLaGUsT0FBTCxDQUFhLENBQUNnZSxDQUFDLEdBQUMsUUFBRCxHQUFVLEtBQVosSUFBbUIsT0FBaEMsRUFBeUMsZUFBekMsQ0FBeEIsRUFBa0YsS0FBS2hlLE9BQUwsQ0FBYSxDQUFDZ2UsQ0FBQyxHQUFDLEtBQUQsR0FBTyxRQUFULElBQW1CLE9BQWhDLEVBQXlDLGdCQUF6QyxDQUFsRixFQUE2SSxLQUFLek0sT0FBTCxDQUFhcEYsR0FBYixDQUFpQmxCLENBQWpCLENBQTdJLEVBQWlLLEtBQUttUCxVQUFMLENBQWdCak8sR0FBaEIsQ0FBb0J0QixDQUFwQixDQUFqSyxFQUF3TCxLQUFLb1IsWUFBTCxJQUFtQixLQUFLQSxZQUFMLENBQWtCNUIsSUFBbEIsQ0FBdUJwUCxDQUF2QixDQUEzTSxFQUFxTyxLQUFLOEksT0FBTCxHQUFhO0FBQUNELFdBQUMsRUFBQ2pKLENBQUMsQ0FBQzVDLE1BQUYsSUFBVSxnQkFBYyxLQUFLeVUsR0FBbkIsR0FBdUJrQixDQUF2QixHQUF5QixDQUFuQyxJQUFzQ25KLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JqUCxNQUEvRDtBQUFzRTRMLFdBQUMsRUFBQztBQUF4RSxTQUFsUCxFQUE2VCxLQUFLbUosTUFBTCxHQUFZLENBQUMsS0FBS1MsV0FBTixJQUFtQixLQUFLakosSUFBTCxDQUFVcEcsT0FBVixDQUFrQmtFLFFBQWxCLENBQTJCd0IsQ0FBOUMsSUFBaUQsSUFBRSxLQUFLQyxPQUFMLENBQWFELENBQXpZLEVBQTJZLEtBQUtxSyxXQUFMLEdBQWlCUCxDQUE1WixFQUE4WixLQUFLUSxRQUFMLEdBQWN6VCxDQUE1YSxFQUE4YSxLQUFLeVIsa0JBQUwsR0FBd0JuUixDQUF0YyxFQUF3YyxLQUFLb1QscUJBQUwsR0FBMkJ4VCxDQUFuZSxFQUFxZXlKLEtBQUssQ0FBQyxDQUFDLEtBQUswSSxNQUFMLEdBQVksS0FBWixHQUFrQixRQUFuQixJQUE2QixVQUE5QixDQUFMLENBQStDLEtBQUtsRixTQUFwRCxDQUFyZSxFQUFvaUIsS0FBS3JGLFFBQUwsRUFBcGlCO0FBQW9qQjtBQUFDLEtBQS81YTtBQUFnNmFBLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFVBQUcsS0FBS2xCLE9BQVIsRUFBZ0I7QUFBQyxZQUFJek4sQ0FBQyxHQUFDLEtBQUtzWSxrQkFBWDtBQUFBLFlBQThCemIsQ0FBQyxHQUFDLEtBQUswZCxxQkFBckM7QUFBQSxZQUEyRHBWLENBQUMsR0FBQztBQUFDOE4sYUFBRyxFQUFDLEtBQUd0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBekIsR0FBZ0MsS0FBR3RILENBQUMsQ0FBQ3NILE1BQTFDO0FBQWlEK0osY0FBSSxFQUFDLEtBQUd5QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCelAsS0FBekIsR0FBK0IsS0FBRzlHLENBQUMsQ0FBQzhHO0FBQTFGLFNBQTdEO0FBQUEsWUFBOEprRCxDQUFDLEdBQUM7QUFBQ29NLGFBQUcsRUFBQzlOLENBQUMsQ0FBQzhOLEdBQUYsR0FBTWpULENBQUMsQ0FBQ21FLE1BQWI7QUFBb0IrSixjQUFJLEVBQUMvSSxDQUFDLENBQUMrSTtBQUEzQixTQUFoSztBQUFBLFlBQWlNcEgsQ0FBQyxHQUFDLENBQW5NO0FBQUEsWUFBcU1DLENBQUMsR0FBQyxhQUFXLEtBQUs2UixHQUFoQixHQUFvQixLQUFLL0IsVUFBekIsR0FBb0MsS0FBS1osSUFBaFA7O0FBQXFQLGdCQUFPLEtBQUsyQyxHQUFaO0FBQWlCLGVBQUksV0FBSjtBQUFnQnpULGFBQUMsQ0FBQzhOLEdBQUYsR0FBTSxNQUFJdEMsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQmpQLE1BQXRCLEdBQTZCLEtBQUtrVyxXQUF0QyxJQUFtRCxLQUFHeGQsQ0FBQyxDQUFDc0gsTUFBOUQsRUFBcUUwQyxDQUFDLEdBQUM7QUFBQ29NLGlCQUFHLEVBQUN0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBdEIsR0FBNkIsS0FBS2tXLFdBQXZDO0FBQW1Ebk0sa0JBQUksRUFBQyxDQUF4RDtBQUEwRHNNLG9CQUFNLEVBQUM7QUFBakUsYUFBdkUsRUFBZ0oxVCxDQUFDLEdBQUMsS0FBS3VULFdBQXZKO0FBQW1LOztBQUFNLGVBQUksUUFBSjtBQUFheFQsYUFBQyxHQUFDO0FBQUNvTSxpQkFBRyxFQUFDLE1BQUw7QUFBWS9FLGtCQUFJLEVBQUMsQ0FBakI7QUFBbUJzTSxvQkFBTSxFQUFDO0FBQTFCLGFBQUY7QUFBdk47O0FBQXNQLFlBQUcsSUFBRSxLQUFLdkssT0FBTCxDQUFhRCxDQUFsQixFQUFvQjtBQUFDLGNBQUloSixDQUFDLEdBQUN3SixLQUFLLENBQUNpSyxNQUFOLEVBQU47O0FBQXFCLGtCQUFPdFYsQ0FBQyxDQUFDOE4sR0FBRixHQUFNLElBQUVqTSxDQUFDLENBQUNnSixDQUFGLEdBQUksS0FBS0MsT0FBTCxDQUFhRCxDQUF6QixFQUEyQixLQUFLNEksR0FBdkM7QUFBNEMsaUJBQUksU0FBSjtBQUFjLGlCQUFJLFdBQUo7QUFBZ0IvUixlQUFDLENBQUNvTSxHQUFGLEdBQU10QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBdEIsR0FBNkIsS0FBS2tXLFdBQXhDO0FBQW9EOztBQUFNLGlCQUFJLFFBQUo7QUFBYSxrQkFBSXBULENBQUMsR0FBQzlCLENBQUMsQ0FBQzhOLEdBQUYsR0FBTWpULENBQUMsQ0FBQ21FLE1BQVIsR0FBZXdNLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JqUCxNQUEzQztBQUFBLGtCQUFrRCtDLENBQUMsR0FBQyxDQUFDLENBQUQsR0FBRy9CLENBQUMsQ0FBQzhOLEdBQXpEOztBQUE2RCxrQkFBR3BNLENBQUMsQ0FBQzJULE1BQUYsR0FBU3ZULENBQVQsRUFBVyxLQUFLMFAsV0FBTCxDQUFpQnRPLEdBQWpCLENBQXFCO0FBQUM0SyxtQkFBRyxFQUFDL0w7QUFBTCxlQUFyQixDQUFYLEVBQXlDLElBQUUsS0FBS3dPLE1BQW5ELEVBQTBEO0FBQUMsb0JBQUl2TyxDQUFDLEdBQUN3SixNQUFNLENBQUN6VSxPQUFQLENBQWVvZCxFQUFmLENBQWtCLFVBQWxCLENBQU47QUFBb0NuUyxpQkFBQyxJQUFFd0osTUFBTSxDQUFDelUsT0FBUCxDQUFld1IsSUFBZixFQUFIO0FBQXlCLG9CQUFJb00sQ0FBQyxHQUFDLEtBQUtyRCxjQUFMLENBQW9CRixJQUFwQixDQUF5QixPQUF6QixDQUFOO0FBQXdDLHFCQUFLRSxjQUFMLENBQW9CaUUsVUFBcEIsQ0FBK0IsT0FBL0I7QUFBd0Msb0JBQUlYLENBQUMsR0FBQ0gsUUFBUSxDQUFDLEtBQUtuRCxjQUFMLENBQW9CcE8sR0FBcEIsQ0FBd0IsWUFBeEIsQ0FBRCxDQUFkO0FBQXNELHFCQUFLb08sY0FBTCxDQUFvQkYsSUFBcEIsQ0FBeUI7QUFBQzNWLHVCQUFLLEVBQUNrWjtBQUFQLGlCQUF6QixHQUFvQzNTLENBQUMsSUFBRXdKLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXlSLElBQWYsRUFBdkM7QUFBNkQsb0JBQUlxTSxDQUFDLEdBQUMsS0FBS3ZELGNBQUwsQ0FBb0IvYixHQUFwQixDQUF3QixLQUFLZ2MsVUFBN0IsQ0FBTjtBQUFBLG9CQUErQ3VELENBQUMsR0FBQyxLQUFHLEtBQUtoSyxPQUFMLENBQWFELENBQWpFO0FBQW1FZ0ssaUJBQUMsQ0FBQzNSLEdBQUYsQ0FBTTtBQUFDLGdDQUFhMFIsQ0FBQyxJQUFFN1MsQ0FBQyxHQUFDK1MsQ0FBSjtBQUFmLGlCQUFOLEdBQThCLEtBQUtoRCxjQUFMLElBQXFCLEtBQUtBLGNBQUwsQ0FBb0I1TyxHQUFwQixDQUF3QjtBQUFDbVMsd0JBQU0sRUFBQ3ZUO0FBQVIsaUJBQXhCLENBQW5EO0FBQXVGOztBQUFucUI7QUFBcXFCLFNBQS9zQixNQUFtdEIsYUFBVyxLQUFLMlIsR0FBaEIsSUFBcUIsS0FBSzFjLE9BQUwsQ0FBYXllLElBQWIsQ0FBa0Isb0RBQWxCLEVBQXdFRCxVQUF4RSxDQUFtRixPQUFuRixDQUFyQjs7QUFBaUgzVCxTQUFDLElBQUVBLENBQUMsQ0FBQ3NCLEdBQUYsQ0FBTXhCLENBQU4sQ0FBSCxFQUFZLEtBQUs1SCxTQUFMLENBQWVvSixHQUFmLENBQW1CO0FBQUNtUyxnQkFBTSxFQUFDMVQ7QUFBUixTQUFuQixDQUFaLEVBQTJDLEtBQUsyRyxPQUFMLENBQWFwRixHQUFiLENBQWlCbEQsQ0FBakIsQ0FBM0MsRUFBK0QsS0FBS21SLFVBQUwsQ0FBZ0JqTyxHQUFoQixDQUFvQmxELENBQXBCLENBQS9EO0FBQXNGO0FBQUM7QUFBMzBkLEdBQXRCLENBQTNlLEVBQSswZXFRLEVBQWoxZSxDQUEzc1o7QUFBQSxNQUFnaTRCSCxFQUFoaTRCO0FBQUEsTUFBbWk0QkMsRUFBbmk0QjtBQUFBLE1BQXNpNEJDLEVBQXRpNEI7O0FBQXlpNEIsV0FBU0MsRUFBVCxHQUFhO0FBQUMsV0FBTyxLQUFLbk0sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkJoRSxNQUFNLENBQUNpRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCLENBQVA7QUFBMEQ7O0FBQUEsTUFBSTRKLEtBQUssR0FBQztBQUFDbkgsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXO0FBQUMsV0FBSzlELE9BQUwsR0FBYThELENBQWIsRUFBZSxLQUFLc1IsS0FBTCxHQUFXLEVBQTFCLEVBQTZCLEtBQUttRSxHQUFMLEdBQVMsQ0FBdEMsRUFBd0MsS0FBS2xFLFNBQUwsR0FBZSxFQUF2RDtBQUEwRCxLQUFsRjtBQUFtRjNFLFFBQUksRUFBQyxjQUFTNU0sQ0FBVCxFQUFXO0FBQUMsV0FBS21VLEtBQUwsR0FBV25VLENBQVgsRUFBYSxLQUFLK1QsU0FBTCxFQUFiLEVBQThCNVEsQ0FBQyxDQUFDd0csSUFBRixDQUFPM0osQ0FBUCxFQUFTbUQsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxhQUFLeVUsS0FBTCxDQUFXcEUsSUFBWCxDQUFnQixJQUFJa0ksSUFBSixDQUFTdlksQ0FBVCxFQUFXbUQsQ0FBQyxHQUFDLENBQWIsRUFBZSxLQUFLbVUsS0FBTCxDQUFXOVYsTUFBMUIsQ0FBaEI7QUFBbUQsT0FBekUsRUFBMEUsSUFBMUUsQ0FBVCxDQUE5QjtBQUF3SCxLQUE1TjtBQUE2TnFQLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQyxLQUFLbU0sS0FBTCxDQUFXdFIsQ0FBQyxHQUFDLENBQWIsQ0FBTjtBQUFzQixXQUFLeVEsSUFBTCxJQUFXLEtBQUtBLElBQUwsQ0FBVWdGLEdBQVYsS0FBZ0J0USxDQUFDLENBQUNzUSxHQUE3QixLQUFtQyxLQUFLaEYsSUFBTCxHQUFVdEwsQ0FBVixFQUFZME0sVUFBVSxDQUFDbkUsSUFBWCxDQUFnQjFOLENBQWhCLENBQVosRUFBK0IyUSxNQUFNLENBQUNpQyxtQkFBUCxFQUEvQixFQUE0RHpOLENBQUMsQ0FBQ3VJLElBQUYsQ0FBT3ZLLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUM5TixTQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLE9BQTFCLEVBQTJCLElBQTNCLENBQVAsQ0FBL0Y7QUFBeUksS0FBL1k7QUFBZ1orZCxnQ0FBNEIsRUFBQyxzQ0FBU3pWLENBQVQsRUFBVztBQUFDLFVBQUkwQixDQUFDLEdBQUMsQ0FBTjtBQUFRLGFBQU8xRCxDQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBSzJILEtBQVosRUFBa0IsVUFBU3RSLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM2VCxJQUFGLENBQU94VSxPQUFQLElBQWdCVyxDQUFDLENBQUM2VCxJQUFGLENBQU94VSxPQUFQLEtBQWlCaUosQ0FBakMsS0FBcUMwQixDQUFDLEdBQUM3RyxDQUFDLEdBQUMsQ0FBekM7QUFBNEMsT0FBNUUsR0FBOEU2RyxDQUFyRjtBQUF1RixLQUF4aEI7QUFBeWhCZ1UsbUJBQWUsRUFBQywyQkFBVTtBQUFDLFVBQUkxVixDQUFDLEdBQUMsQ0FBTjtBQUFRLGFBQU9oQyxDQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBSzJILEtBQVosRUFBa0IsVUFBU3RSLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUMyYSxPQUFGLElBQVdyUyxDQUFDLEVBQVo7QUFBZSxPQUEvQyxHQUFpREEsQ0FBeEQ7QUFBMEQsS0FBdG5CO0FBQXVuQjRPLGFBQVMsRUFBQyxxQkFBVTtBQUFDNVEsT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUsySCxLQUFaLEVBQWtCLFVBQVN0UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDZSxNQUFGO0FBQVcsT0FBM0MsR0FBNkMsS0FBSzBULEtBQUwsR0FBVyxFQUF4RDtBQUEyRCxLQUF2c0I7QUFBd3NCdUgsZ0JBQVksRUFBQyxzQkFBUzFULENBQVQsRUFBVzBCLENBQVgsRUFBYTtBQUFDLFVBQUlDLENBQUMsR0FBQyxFQUFOO0FBQVMzRCxPQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBSzJILEtBQVosRUFBa0JuTyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM0WSxHQUFGLEtBQVEsS0FBS2hGLElBQUwsQ0FBVWdGLEdBQWxCLElBQXVCM08sQ0FBQyxDQUFDb0csSUFBRixDQUFPclEsQ0FBUCxDQUF2QjtBQUFpQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUFsQjtBQUFpRixVQUFJa0ssQ0FBQyxHQUFDLElBQUVELENBQUMsQ0FBQ3pJLE1BQVY7QUFBaUIsYUFBTzBJLENBQUMsR0FBQyxDQUFGLEdBQUk1QixDQUFDLElBQUVBLENBQUMsRUFBUixHQUFXaEMsQ0FBQyxDQUFDd0csSUFBRixDQUFPN0MsQ0FBUCxFQUFTLFVBQVM5RyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDOFEsSUFBRixDQUFPLFlBQVU7QUFBQ3hJLFdBQUMsSUFBRSxFQUFFNEIsQ0FBRixHQUFJLENBQVAsSUFBVTVCLENBQUMsRUFBWDtBQUFjLFNBQWhDLEVBQWlDMEIsQ0FBakM7QUFBb0MsT0FBM0QsQ0FBWCxFQUF3RUMsQ0FBQyxDQUFDekksTUFBakY7QUFBd0YsS0FBdDZCO0FBQXU2QnFhLGdCQUFZLEVBQUMsd0JBQVU7QUFBQ3ZWLE9BQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLMkgsS0FBWixFQUFrQm5PLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQzRZLEdBQUYsS0FBUSxLQUFLaEYsSUFBTCxDQUFVZ0YsR0FBbEIsSUFBdUI1WSxDQUFDLENBQUNvVSxJQUFGLEVBQXZCO0FBQWdDLE9BQXRELEVBQXVELElBQXZELENBQWxCO0FBQWdGLEtBQS9nQztBQUFnaENBLFFBQUksRUFBQyxnQkFBVTtBQUFDOU4sT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUsySCxLQUFaLEVBQWtCLFVBQVN0UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDb1UsSUFBRjtBQUFTLE9BQXpDO0FBQTJDLEtBQTNrQztBQUE0a0M2SixrQkFBYyxFQUFDLHdCQUFTOWEsQ0FBVCxFQUFXO0FBQUM0RCxhQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBdkIsSUFBMEIsS0FBS3dXLEtBQUwsQ0FBVztBQUFDaEwsU0FBQyxFQUFDL1AsQ0FBQyxDQUFDZ2IsS0FBTDtBQUFXaEwsU0FBQyxFQUFDaFEsQ0FBQyxDQUFDaWI7QUFBZixPQUFYLEdBQWtDLEtBQUtDLGVBQUwsRUFBNUQsSUFBb0YsS0FBS0MsZUFBTCxHQUFxQnpRLFVBQVUsQ0FBQ3ZILENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBS29RLEtBQUwsQ0FBVztBQUFDaEwsV0FBQyxFQUFDL1AsQ0FBQyxDQUFDZ2IsS0FBTDtBQUFXaEwsV0FBQyxFQUFDaFEsQ0FBQyxDQUFDaWI7QUFBZixTQUFYLEdBQWtDLEtBQUtDLGVBQUwsRUFBbEM7QUFBeUQsT0FBNUUsRUFBNkUsSUFBN0UsQ0FBRCxFQUFvRixFQUFwRixDQUFuSDtBQUEyTSxLQUFsekM7QUFBbXpDRSxzQkFBa0IsRUFBQyw4QkFBVTtBQUFDLFdBQUtELGVBQUwsS0FBdUJ6UCxZQUFZLENBQUMsS0FBS3lQLGVBQU4sQ0FBWixFQUFtQyxLQUFLQSxlQUFMLEdBQXFCLElBQS9FO0FBQXFGLEtBQXQ2QztBQUF1NkNFLGlCQUFhLEVBQUMseUJBQVU7QUFBQ3ZULGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUIsS0FBS3FTLGVBQTFCLElBQTJDblksQ0FBQyxDQUFDaEYsUUFBUSxDQUFDNkYsZUFBVixDQUFELENBQTRCa0MsRUFBNUIsQ0FBK0IsV0FBL0IsRUFBMkMsS0FBS29WLGVBQUwsR0FBcUJuWSxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS21RLGNBQWIsRUFBNEIsSUFBNUIsQ0FBaEUsQ0FBM0M7QUFBOEksS0FBOWtEO0FBQStrRFMsZ0JBQVksRUFBQyx3QkFBVTtBQUFDLE9BQUN6VCxPQUFPLENBQUNtQixXQUFULElBQXNCLEtBQUtxUyxlQUEzQixLQUE2Q25ZLENBQUMsQ0FBQ2hGLFFBQVEsQ0FBQzZGLGVBQVYsQ0FBRCxDQUE0QndPLEdBQTVCLENBQWdDLFdBQWhDLEVBQTRDLEtBQUs4SSxlQUFqRCxHQUFrRSxLQUFLQSxlQUFMLEdBQXFCLElBQXZGLEVBQTRGLEtBQUtGLGtCQUFMLEVBQXpJO0FBQW9LLEtBQTN3RDtBQUE0d0RJLGVBQVcsRUFBQyxxQkFBU3hiLENBQVQsRUFBVztBQUFDLFdBQUt5YixVQUFMLENBQWdCemIsQ0FBaEIsTUFBcUIsS0FBS3VSLFNBQUwsQ0FBZXJFLElBQWYsQ0FBb0IsS0FBS29FLEtBQUwsQ0FBV3RSLENBQUMsR0FBQyxDQUFiLENBQXBCLEdBQXFDLE1BQUksS0FBS3VSLFNBQUwsQ0FBZWxULE1BQW5CLElBQTJCLEtBQUtnZCxhQUFMLEVBQXJGO0FBQTJHLEtBQS80RDtBQUFnNURLLGlCQUFhLEVBQUMseUJBQVU7QUFBQyxXQUFLbkssU0FBTCxHQUFlLEVBQWY7QUFBa0IsS0FBMzdEO0FBQTQ3RDBILGtCQUFjLEVBQUMsd0JBQVNwYyxDQUFULEVBQVc7QUFBQyxXQUFLMFUsU0FBTCxHQUFlcE8sQ0FBQyxDQUFDd1ksSUFBRixDQUFPLEtBQUtwSyxTQUFaLEVBQXNCLFVBQVN2UixDQUFULEVBQVc7QUFBQyxlQUFPQSxDQUFDLENBQUNnVSxTQUFGLEtBQWNuWCxDQUFyQjtBQUF1QixPQUF6RCxDQUFmLEVBQTBFLEtBQUswVSxTQUFMLENBQWVsVCxNQUFmLEdBQXNCLENBQXRCLElBQXlCLEtBQUtrZCxZQUFMLEVBQW5HO0FBQXVILEtBQTlrRTtBQUEra0VFLGNBQVUsRUFBQyxvQkFBU3RXLENBQVQsRUFBVztBQUFDLFVBQUkwQixDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQVMsYUFBTzFELENBQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLNEgsU0FBWixFQUFzQixVQUFTdlIsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsWUFBR0EsQ0FBQyxDQUFDbVgsU0FBRixLQUFjN08sQ0FBakIsRUFBbUIsT0FBTSxFQUFFMEIsQ0FBQyxHQUFDLENBQUMsQ0FBTCxDQUFOO0FBQWMsT0FBckUsR0FBdUVBLENBQTlFO0FBQWdGLEtBQS9yRTtBQUFnc0VrVSxTQUFLLEVBQUMsZUFBUy9hLENBQVQsRUFBVztBQUFDLFdBQUs0YixHQUFMLEdBQVM1YixDQUFUO0FBQVcsS0FBN3RFO0FBQTh0RXlhLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUl6YSxDQUFDLEdBQUN3USxLQUFLLENBQUNDLElBQVo7QUFBQSxVQUFpQnRMLENBQUMsR0FBQ2hDLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXNOLE1BQU0sQ0FBQ3lDLGNBQW5CLENBQW5CO0FBQUEsVUFBc0R2VyxDQUFDLEdBQUNzRyxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBS3VZLEdBQWpCLENBQXhEO0FBQThFL2UsT0FBQyxDQUFDbVQsQ0FBRixJQUFLN00sQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU0VixTQUFWLEVBQUwsRUFBMkJsVCxDQUFDLEtBQUcsY0FBWUEsQ0FBQyxDQUFDNFksR0FBZCxJQUFtQixnQkFBYzVZLENBQUMsQ0FBQzRZLEdBQXRDLENBQUQsSUFBNkMsSUFBRTVZLENBQUMsQ0FBQ3FhLFdBQWpELEtBQStEbFYsQ0FBQyxDQUFDaEIsTUFBRixJQUFVbkUsQ0FBQyxDQUFDcWEsV0FBM0UsQ0FBM0IsRUFBbUh4ZCxDQUFDLENBQUNtVCxDQUFGLElBQUtXLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JOLEdBQTVJO0FBQWdKLFVBQUlwTSxDQUFDLEdBQUM7QUFBQ2tKLFNBQUMsRUFBQyxDQUFIO0FBQUtDLFNBQUMsRUFBQzVJLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUNFLEdBQUwsQ0FBU3pLLENBQUMsQ0FBQ21ULENBQUYsR0FBSTdLLENBQUMsQ0FBQ2hCLE1BQWYsRUFBc0IsQ0FBdEIsQ0FBVCxFQUFrQyxDQUFsQztBQUFQLE9BQU47QUFBQSxVQUFtRDJDLENBQUMsR0FBQztBQUFDaUosU0FBQyxFQUFDLE9BQUg7QUFBV0MsU0FBQyxFQUFDO0FBQWIsT0FBckQ7QUFBQSxVQUE0RWpKLENBQUMsR0FBQyxFQUE5RTtBQUFpRixhQUFPNUQsQ0FBQyxDQUFDd0csSUFBRixDQUFPLElBQUkxQixLQUFKLENBQVUsR0FBVixDQUFQLEVBQXNCOUUsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ2tLLFNBQUMsQ0FBQ2xLLENBQUQsQ0FBRCxHQUFLdUssSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTLEtBQUduQyxDQUFDLENBQUMyQixDQUFDLENBQUNqSyxDQUFELENBQUYsQ0FBYixFQUFvQixDQUFwQixDQUFULEVBQWdDLENBQWhDLENBQUwsRUFBd0NnSyxDQUFDLENBQUNoSyxDQUFELENBQUQsSUFBTSxJQUFFLElBQUVrSyxDQUFDLENBQUNsSyxDQUFELENBQW5ELEVBQXVEZ0ssQ0FBQyxDQUFDaEssQ0FBRCxDQUFELElBQU1rSyxDQUFDLENBQUNsSyxDQUFELENBQTlELEVBQWtFZ0ssQ0FBQyxDQUFDaEssQ0FBRCxDQUFELEdBQUt1SyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsQ0FBQ2hLLENBQUQsQ0FBVixFQUFjLENBQWQsQ0FBVCxFQUEwQixDQUExQixDQUF2RTtBQUFvRyxPQUExSCxFQUEySCxJQUEzSCxDQUF0QixHQUF3SixLQUFLZ2YsTUFBTCxDQUFZaFYsQ0FBWixDQUF4SixFQUF1SyxLQUFLaVYsSUFBbkw7QUFBd0wsS0FBdnRGO0FBQXd0RkQsVUFBTSxFQUFDLGdCQUFTN2IsQ0FBVCxFQUFXO0FBQUMsV0FBSzhiLElBQUwsR0FBVTliLENBQVY7QUFBWSxLQUF2dkY7QUFBd3ZGa2IsbUJBQWUsRUFBQywyQkFBVTtBQUFDLFdBQUszSixTQUFMLENBQWVsVCxNQUFmLEdBQXNCLENBQXRCLElBQXlCOEUsQ0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUs0SCxTQUFaLEVBQXNCLFVBQVN2UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDOFIsUUFBRjtBQUFhLE9BQWpELENBQXpCO0FBQTRFO0FBQS8xRixHQUFWOztBQUEyMkYsV0FBU29OLElBQVQsR0FBZTtBQUFDLFNBQUsxUyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQmhFLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0I7QUFBbUQ7O0FBQUF6RCxHQUFDLENBQUNFLE1BQUYsQ0FBUzBZLElBQUksQ0FBQ3ZXLFNBQWQsRUFBd0I7QUFBQzZELGNBQVUsRUFBQyxvQkFBUzJTLE1BQVQsRUFBZ0I7QUFBQyxVQUFJMVIsT0FBTyxHQUFDMUQsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFjLEVBQTFCO0FBQUEsVUFBNkI3SSxJQUFJLEdBQUMsRUFBbEM7QUFBcUMsVUFBRyxhQUFXb0YsQ0FBQyxDQUFDdUcsSUFBRixDQUFPc1MsTUFBUCxDQUFkLEVBQTZCQSxNQUFNLEdBQUM7QUFBQzFmLFdBQUcsRUFBQzBmO0FBQUwsT0FBUCxDQUE3QixLQUFzRCxJQUFHQSxNQUFNLElBQUUsTUFBSUEsTUFBTSxDQUFDblcsUUFBdEIsRUFBK0I7QUFBQyxZQUFJM0osT0FBTyxHQUFDaUgsQ0FBQyxDQUFDNlksTUFBRCxDQUFiO0FBQXNCQSxjQUFNLEdBQUM7QUFBQzlmLGlCQUFPLEVBQUNBLE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQW9CSSxhQUFHLEVBQUNKLE9BQU8sQ0FBQ3FhLElBQVIsQ0FBYSxNQUFiLENBQXhCO0FBQTZDUCxpQkFBTyxFQUFDOVosT0FBTyxDQUFDcWEsSUFBUixDQUFhLHFCQUFiLENBQXJEO0FBQXlGMEYsZUFBSyxFQUFDL2YsT0FBTyxDQUFDcWEsSUFBUixDQUFhLG1CQUFiLENBQS9GO0FBQWlJaEssbUJBQVMsRUFBQ3JRLE9BQU8sQ0FBQ3FhLElBQVIsQ0FBYSx1QkFBYixDQUEzSTtBQUFpTDdNLGNBQUksRUFBQ3hOLE9BQU8sQ0FBQ3FhLElBQVIsQ0FBYSxrQkFBYixDQUF0TDtBQUF1TmpNLGlCQUFPLEVBQUNwTyxPQUFPLENBQUNxYSxJQUFSLENBQWEscUJBQWIsS0FBcUMyRixJQUFJLENBQUMsT0FBS2hnQixPQUFPLENBQUNxYSxJQUFSLENBQWEscUJBQWIsQ0FBTCxHQUF5QyxJQUExQyxDQUF6QyxJQUEwRjtBQUF6VCxTQUFQO0FBQW9VO0FBQUEsYUFBT3lGLE1BQU0sS0FBR0EsTUFBTSxDQUFDelAsU0FBUCxLQUFtQnlQLE1BQU0sQ0FBQ3pQLFNBQVAsR0FBaUIxQyxlQUFlLENBQUNtUyxNQUFNLENBQUMxZixHQUFSLENBQW5ELEdBQWlFMGYsTUFBTSxDQUFDdFMsSUFBUCxLQUFjM0wsSUFBSSxHQUFDMEwsVUFBVSxDQUFDdVMsTUFBTSxDQUFDMWYsR0FBUixDQUFmLEVBQTRCMGYsTUFBTSxDQUFDM0QsS0FBUCxHQUFhdGEsSUFBekMsRUFBOENpZSxNQUFNLENBQUN0UyxJQUFQLEdBQVkzTCxJQUFJLENBQUMyTCxJQUE3RSxDQUFwRSxDQUFOLEVBQThKc1MsTUFBTSxDQUFDM0QsS0FBUCxLQUFlMkQsTUFBTSxDQUFDM0QsS0FBUCxHQUFhNU8sVUFBVSxDQUFDdVMsTUFBTSxDQUFDMWYsR0FBUixDQUF0QyxDQUE5SixFQUFrTjBmLE1BQU0sSUFBRUEsTUFBTSxDQUFDMVIsT0FBZixHQUF1QjBSLE1BQU0sQ0FBQzFSLE9BQVAsR0FBZW5ILENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQUMsQ0FBVixFQUFZRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVlpSCxPQUFaLENBQVosRUFBaUNuSCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVkyWSxNQUFNLENBQUMxUixPQUFuQixDQUFqQyxDQUF0QyxHQUFvRzBSLE1BQU0sQ0FBQzFSLE9BQVAsR0FBZW5ILENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWWlILE9BQVosQ0FBclUsRUFBMFYwUixNQUFNLENBQUMxUixPQUFQLEdBQWVnRCxPQUFPLENBQUN3QyxNQUFSLENBQWVrTSxNQUFNLENBQUMxUixPQUF0QixFQUE4QjBSLE1BQU0sQ0FBQ3RTLElBQXJDLEVBQTBDc1MsTUFBTSxDQUFDM0QsS0FBakQsQ0FBelcsRUFBaWFsVixDQUFDLENBQUNFLE1BQUYsQ0FBUyxJQUFULEVBQWMyWSxNQUFkLENBQWphLEVBQXViLElBQTliO0FBQW1jO0FBQXI3QixHQUF4QjtBQUFnOUIsTUFBSWxLLE9BQU8sR0FBQztBQUFDcUssYUFBUyxFQUFDclUsT0FBTyxDQUFDTyxHQUFSLENBQVlHLFNBQVosSUFBdUJWLE9BQU8sQ0FBQ08sR0FBUixDQUFZQyxTQUE5QztBQUF3RGUsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXO0FBQUMsV0FBSzlELE9BQUwsR0FBYWlILENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0M1QyxJQUFsQyxFQUFiOztBQUFzRCxXQUFJLElBQUk5USxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsRUFBZixFQUFrQkEsQ0FBQyxFQUFuQixFQUFzQixLQUFLWCxPQUFMLENBQWFlLE1BQWIsQ0FBb0JrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGFBQVcxVCxDQUEvQixDQUFwQjs7QUFBdUQsV0FBS1gsT0FBTCxDQUFhZ0ssRUFBYixDQUFnQixPQUFoQixFQUF3Qi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUNnRyxjQUFNLENBQUNoRCxJQUFQO0FBQWMsT0FBakMsRUFBa0MsSUFBbEMsQ0FBeEIsR0FBaUUsS0FBS3pSLE9BQUwsQ0FBYWdLLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQW9DLFVBQVNsRyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDbEQsY0FBRjtBQUFtQixPQUFuRSxDQUFqRTtBQUFzSSxLQUF4VjtBQUF5VjhULFdBQU8sRUFBQyxpQkFBUzVRLENBQVQsRUFBVztBQUFDLFdBQUttYyxTQUFMLEtBQWlCLEtBQUtsSyxLQUFMLElBQVksS0FBSy9WLE9BQUwsQ0FBYTJVLFdBQWIsQ0FBeUIscUJBQW1CLEtBQUtvQixLQUFqRCxDQUFaLEVBQW9FLEtBQUttSyxnQkFBTCxFQUFwRSxFQUE0RixLQUFLbGdCLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0IscUJBQW1CdlEsQ0FBekMsQ0FBNUYsRUFBd0ksS0FBS2lTLEtBQUwsR0FBV2pTLENBQXBLO0FBQXVLLEtBQXBoQjtBQUFxaEJvYyxvQkFBZ0IsRUFBQyw0QkFBVTtBQUFDLFVBQUlwYyxDQUFDLEdBQUMsS0FBS2dTLFNBQVg7QUFBcUJoUyxPQUFDLElBQUUsS0FBSzhRLE1BQUwsRUFBSCxFQUFpQixLQUFLdUwsV0FBTCxHQUFpQjtBQUFDMVksYUFBSyxFQUFDLEtBQUt6SCxPQUFMLENBQWE0YixVQUFiLEVBQVA7QUFBaUMzVCxjQUFNLEVBQUMsS0FBS2pJLE9BQUwsQ0FBYTZiLFdBQWI7QUFBeEMsT0FBbEMsRUFBc0cvWCxDQUFDLElBQUUsS0FBS2dSLE1BQUwsRUFBekc7QUFBdUgsS0FBN3JCO0FBQThyQkYsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS2tCLFNBQUwsS0FBaUI3TyxDQUFDLENBQUNoRixRQUFRLENBQUM0UyxJQUFWLENBQUQsQ0FBaUI5VCxNQUFqQixDQUF3QixLQUFLZixPQUE3QixHQUFzQyxLQUFLOFYsU0FBTCxHQUFlLENBQUMsQ0FBdkU7QUFBMEUsS0FBMXhCO0FBQTJ4QmhCLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtnQixTQUFMLEtBQWlCLEtBQUs5VixPQUFMLENBQWE4VSxNQUFiLElBQXNCLEtBQUtnQixTQUFMLEdBQWUsQ0FBQyxDQUF2RDtBQUEwRCxLQUF2MkI7QUFBdzJCdEUsUUFBSSxFQUFDLGNBQVMxTixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxXQUFLK1ksUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQixLQUFLOUUsTUFBTCxFQUFqQixFQUErQixLQUFLa0MsTUFBTCxFQUEvQjtBQUE2QyxVQUFJN04sQ0FBQyxHQUFDcUwsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ0ksT0FBaEMsQ0FBd0NGLElBQXBELElBQTBELENBQWhFO0FBQUEsVUFBa0U3RyxDQUFDLEdBQUMsQ0FBQyxhQUFXMUQsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QnNJLENBQXhCLEtBQTRCLENBQWhHO0FBQWtHLFdBQUtqSixPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JDLE1BQXRCLENBQTZCckssQ0FBN0IsRUFBK0IsQ0FBL0IsRUFBaUM3RyxDQUFqQztBQUFvQyxLQUE5aUM7QUFBK2lDMk4sUUFBSSxFQUFDLGNBQVMzTixDQUFULEVBQVduRCxDQUFYLEVBQWFzSSxDQUFiLEVBQWU7QUFBQyxXQUFLeVEsUUFBTCxHQUFjLENBQUMsQ0FBZjtBQUFpQixVQUFJL08sQ0FBQyxHQUFDMkosS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ0ksT0FBaEMsQ0FBd0NELElBQXBELElBQTBELENBQWhFO0FBQUEsVUFBa0U3RyxDQUFDLEdBQUMsQ0FBQyxhQUFXM0QsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QmdLLENBQXhCLEtBQTRCLENBQWhHO0FBQWtHLFdBQUszSyxPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JFLE9BQXRCLENBQThCckssQ0FBQyxJQUFFLENBQWpDLEVBQW1DM0QsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxhQUFLcUcsTUFBTCxJQUFjaFIsQ0FBQyxJQUFFQSxDQUFDLEVBQWxCO0FBQXFCLE9BQXhDLEVBQXlDLElBQXpDLENBQW5DO0FBQW1GLEtBQTF3QztBQUEyd0NnVCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFHLEtBQUttSixTQUFSLEVBQWtCO0FBQUMsYUFBS0UsV0FBTCxJQUFrQixLQUFLRCxnQkFBTCxFQUFsQjtBQUEwQyxZQUFJcGMsQ0FBQyxHQUFDd1EsS0FBSyxDQUFDQyxJQUFaO0FBQUEsWUFBaUI1VCxDQUFDLEdBQUMsQ0FBbkI7QUFBcUJtRCxTQUFDLElBQUUsZ0JBQWNBLENBQUMsQ0FBQzRZLEdBQW5CLElBQXdCNVksQ0FBQyxDQUFDcVosYUFBRixDQUFnQixZQUFVO0FBQUN4YyxXQUFDLEdBQUNtRCxDQUFDLENBQUNvWixjQUFGLENBQWlCekksTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQXZDLENBQUY7QUFBZ0QsU0FBM0UsQ0FBeEIsRUFBcUcsS0FBS3pILE9BQUwsQ0FBYW1NLEdBQWIsQ0FBaUI7QUFBQzRLLGFBQUcsRUFBQ3RDLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JOLEdBQXBCLEdBQXdCLEtBQUd0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBakQsR0FBd0QsS0FBRyxLQUFLa1ksV0FBTCxDQUFpQmxZLE1BQTVFLEdBQW1GLEtBQUd0SCxDQUEzRjtBQUE2RnFSLGNBQUksRUFBQ3lDLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUFwQixHQUF5QixLQUFHeUMsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQWxELEdBQXdELEtBQUcsS0FBSzBZLFdBQUwsQ0FBaUIxWTtBQUE5SyxTQUFqQixDQUFyRztBQUE0UztBQUFDO0FBQTVwRCxHQUFaO0FBQUEsTUFBMHFEMlksT0FBTyxHQUFDO0FBQUNDLGFBQVMsRUFBQyxDQUFDLENBQVo7QUFBY0MsYUFBUyxFQUFDLENBQUMsQ0FBekI7QUFBMkJuVCxjQUFVLEVBQUMsc0JBQVU7QUFBQ3NILFlBQU0sQ0FBQ3RILFVBQVAsSUFBb0IsS0FBS2tULFNBQUwsSUFBZ0IsS0FBS0UsZUFBTCxFQUFwQztBQUEyRCxLQUE1RztBQUE2R0EsbUJBQWUsRUFBQywyQkFBVTtBQUFDLFdBQUtDLGdCQUFMLElBQXVCdlosQ0FBQyxDQUFDaEYsUUFBUSxDQUFDNkYsZUFBVixDQUFELENBQTRCa0MsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBdUMsZUFBdkMsRUFBdUQsS0FBS3dXLGdCQUFMLEdBQXNCdlosQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtnUyxRQUFiLEVBQXNCLElBQXRCLENBQTdFLEVBQTBHelcsRUFBMUcsQ0FBNkcsT0FBN0csRUFBcUgsS0FBSzBXLGtCQUFMLEdBQXdCelosQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtrUyxVQUFiLEVBQXdCLElBQXhCLENBQTdJLENBQXZCO0FBQW1NLEtBQTNVO0FBQTRVQyxrQkFBYyxFQUFDLDBCQUFVO0FBQUMsV0FBS0osZ0JBQUwsS0FBd0J2WixDQUFDLENBQUNoRixRQUFRLENBQUM2RixlQUFWLENBQUQsQ0FBNEJ3TyxHQUE1QixDQUFnQyxPQUFoQyxFQUF3QyxlQUF4QyxFQUF3RCxLQUFLa0ssZ0JBQTdELEVBQStFbEssR0FBL0UsQ0FBbUYsT0FBbkYsRUFBMkYsS0FBS29LLGtCQUFoRyxHQUFvSCxLQUFLQSxrQkFBTCxHQUF3QixJQUE1SSxFQUFpSixLQUFLRixnQkFBTCxHQUFzQixJQUEvTDtBQUFxTSxLQUEzaUI7QUFBNGlCRyxjQUFVLEVBQUMsb0JBQVM3YyxDQUFULEVBQVc7QUFBQ3dRLFdBQUssQ0FBQ3VLLEtBQU4sQ0FBWTtBQUFDaEwsU0FBQyxFQUFDL1AsQ0FBQyxDQUFDZ2IsS0FBTDtBQUFXaEwsU0FBQyxFQUFDaFEsQ0FBQyxDQUFDaWI7QUFBZixPQUFaO0FBQW1DLEtBQXRtQjtBQUF1bUIwQixZQUFRLEVBQUMsa0JBQVMzYyxDQUFULEVBQVc7QUFBQyxVQUFHLENBQUMsS0FBS3VjLFNBQVQsRUFBbUI7QUFBQ3ZjLFNBQUMsQ0FBQ3dHLGVBQUYsSUFBb0J4RyxDQUFDLENBQUNsRCxjQUFGLEVBQXBCO0FBQXVDLFlBQUlELENBQUMsR0FBQ21ELENBQUMsQ0FBQ0ksYUFBUjtBQUFzQixhQUFLeWMsVUFBTCxDQUFnQjdjLENBQWhCLEdBQW1Cc2MsT0FBTyxDQUFDNU8sSUFBUixDQUFhN1EsQ0FBYixDQUFuQjtBQUFtQztBQUFDLEtBQWp2QjtBQUFrdkI2USxRQUFJLEVBQUMsY0FBU3NPLE1BQVQsRUFBZ0I7QUFBQyxVQUFHLEtBQUtPLFNBQVIsRUFBa0IsS0FBS1EsWUFBTCxDQUFrQnpULEtBQWxCLENBQXdCZ1QsT0FBeEIsRUFBZ0NoWCxNQUFNLENBQUNpRSxJQUFQLENBQVkzQyxTQUFaLENBQWhDLEVBQWxCLEtBQThFO0FBQUMsWUFBSTBELE9BQU8sR0FBQzFELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBYyxFQUExQjtBQUFBLFlBQTZCK0gsUUFBUSxHQUFDL0gsU0FBUyxDQUFDLENBQUQsQ0FBL0M7QUFBbURBLGlCQUFTLENBQUMsQ0FBRCxDQUFULElBQWMsYUFBV3pELENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzlDLFNBQVMsQ0FBQyxDQUFELENBQWhCLENBQXpCLEtBQWdEK0gsUUFBUSxHQUFDL0gsU0FBUyxDQUFDLENBQUQsQ0FBbEIsRUFBc0IwRCxPQUFPLEdBQUMsRUFBOUU7O0FBQWtGLFlBQUk2SixLQUFLLEdBQUMsRUFBVjtBQUFBLFlBQWE2SSxXQUFiO0FBQUEsWUFBeUJwWCxTQUFTLEdBQUNELENBQUMsQ0FBQ0MsU0FBRixDQUFZb1csTUFBWixDQUFuQzs7QUFBdUQsZ0JBQU9nQixXQUFXLEdBQUM3WixDQUFDLENBQUN1RyxJQUFGLENBQU9zUyxNQUFQLENBQW5CO0FBQW1DLGVBQUksUUFBSjtBQUFhLGVBQUksUUFBSjtBQUFhLGdCQUFJdEwsSUFBSSxHQUFDLElBQUlxTCxJQUFKLENBQVNDLE1BQVQsRUFBZ0IxUixPQUFoQixDQUFUO0FBQUEsZ0JBQWtDMlMsSUFBSSxHQUFDLDJCQUF2QztBQUFBLGdCQUFtRUMsWUFBWSxHQUFDLEVBQWhGOztBQUFtRixnQkFBR3hNLElBQUksQ0FBQ3VMLEtBQVIsRUFBYztBQUFDLGtCQUFHclcsU0FBSCxFQUFhO0FBQUMsb0JBQUl1WCxRQUFRLEdBQUNoYSxDQUFDLENBQUMsZ0NBQThCQSxDQUFDLENBQUM2WSxNQUFELENBQUQsQ0FBVXpGLElBQVYsQ0FBZSxtQkFBZixDQUE5QixHQUFrRSxJQUFuRSxDQUFkO0FBQXVGNEcsd0JBQVEsQ0FBQ0MsTUFBVCxDQUFnQixNQUFJSCxJQUFKLEdBQVMsR0FBekIsRUFBOEJ0VCxJQUE5QixDQUFtQyxVQUFTM0osQ0FBVCxFQUFXOUQsT0FBWCxFQUFtQjtBQUFDaUgsbUJBQUMsQ0FBQ0UsTUFBRixDQUFTNlosWUFBVCxFQUFzQmhCLElBQUksQ0FBQyxRQUFNL1ksQ0FBQyxDQUFDakgsT0FBRCxDQUFELENBQVdxYSxJQUFYLENBQWdCMEcsSUFBaEIsS0FBdUIsRUFBN0IsSUFBaUMsSUFBbEMsQ0FBMUI7QUFBbUUsaUJBQTFILEdBQTRIRSxRQUFRLENBQUN4VCxJQUFULENBQWMsVUFBUzNKLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDOFIsMEJBQVEsSUFBRTlSLENBQUMsS0FBR21mLE1BQWQsS0FBdUJyTixRQUFRLEdBQUMzTyxDQUFDLEdBQUMsQ0FBbEMsR0FBcUNtVSxLQUFLLENBQUNqSCxJQUFOLENBQVcsSUFBSTZPLElBQUosQ0FBU2xmLENBQVQsRUFBV3NHLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWTZaLFlBQVosRUFBeUI1UyxPQUF6QixDQUFYLENBQVgsQ0FBckM7QUFBK0YsaUJBQTNILENBQTVIO0FBQXlQO0FBQUMsYUFBOVcsTUFBbVgxRSxTQUFTLElBQUV6QyxDQUFDLENBQUM2WSxNQUFELENBQUQsQ0FBVTFDLEVBQVYsQ0FBYSxNQUFJMkQsSUFBSixHQUFTLEdBQXRCLENBQVgsS0FBd0M5WixDQUFDLENBQUNFLE1BQUYsQ0FBUzZaLFlBQVQsRUFBc0JoQixJQUFJLENBQUMsUUFBTS9ZLENBQUMsQ0FBQzZZLE1BQUQsQ0FBRCxDQUFVekYsSUFBVixDQUFlMEcsSUFBZixLQUFzQixFQUE1QixJQUFnQyxJQUFqQyxDQUExQixHQUFrRXZNLElBQUksR0FBQyxJQUFJcUwsSUFBSixDQUFTQyxNQUFULEVBQWdCN1ksQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZNlosWUFBWixFQUF5QjVTLE9BQXpCLENBQWhCLENBQS9HLEdBQW1LNkosS0FBSyxDQUFDakgsSUFBTixDQUFXd0QsSUFBWCxDQUFuSzs7QUFBb0w7O0FBQU0sZUFBSSxPQUFKO0FBQVl2TixhQUFDLENBQUN3RyxJQUFGLENBQU9xUyxNQUFQLEVBQWMsVUFBU2hjLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLGtCQUFJc0ksQ0FBQyxHQUFDLElBQUk0VyxJQUFKLENBQVNsZixDQUFULEVBQVd5TixPQUFYLENBQU47QUFBMEI2SixtQkFBSyxDQUFDakgsSUFBTixDQUFXL0gsQ0FBWDtBQUFjLGFBQXBFO0FBQXpzQjs7QUFBK3dCLFlBQUlrWSxXQUFXLEdBQUM7QUFBQ3pHLGlCQUFPLEVBQUM7QUFBQ1osbUJBQU8sRUFBQyxDQUFDO0FBQVY7QUFBVCxTQUFoQjtBQUFBLFlBQXVDc0gsT0FBTyxHQUFDbkosS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTN0osT0FBVCxDQUFpQnlFLEVBQWhFO0FBQUEsWUFBbUV3TyxhQUFuRTtBQUFpRnBhLFNBQUMsQ0FBQ3dHLElBQUYsQ0FBT3dLLEtBQVAsRUFBYSxVQUFTblUsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNBLFdBQUMsQ0FBQ21aLE9BQUYsS0FBWXFILFdBQVcsQ0FBQ3pHLE9BQVosQ0FBb0JaLE9BQXBCLEdBQTRCLENBQUMsQ0FBekMsR0FBNEMsSUFBRWhXLENBQUYsSUFBS25ELENBQUMsQ0FBQ3lOLE9BQUYsQ0FBVXlFLEVBQVYsS0FBZXVPLE9BQXBCLEtBQThCemdCLENBQUMsQ0FBQ3lOLE9BQUYsQ0FBVXlFLEVBQVYsR0FBYXVPLE9BQTNDLENBQTVDO0FBQWdHLFNBQTNILEdBQTZIbmEsQ0FBQyxDQUFDd0csSUFBRixDQUFPd0ssS0FBUCxFQUFhLFVBQVNuVSxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsV0FBQyxHQUFDc0csQ0FBQyxDQUFDRSxNQUFGLENBQVN4RyxDQUFULEVBQVd3Z0IsV0FBWCxDQUFGO0FBQTBCLFNBQXJELENBQTdILEVBQW9MLENBQUMsQ0FBQzFPLFFBQUQsSUFBV0EsUUFBUSxHQUFDLENBQXJCLE1BQTBCQSxRQUFRLEdBQUMsQ0FBbkMsQ0FBcEwsRUFBME5BLFFBQVEsR0FBQ3dGLEtBQUssQ0FBQzlWLE1BQWYsS0FBd0JzUSxRQUFRLEdBQUN3RixLQUFLLENBQUM5VixNQUF2QyxDQUExTixFQUF5UXVILFNBQVMsS0FBRzJYLGFBQWEsR0FBQy9NLEtBQUssQ0FBQ29LLDRCQUFOLENBQW1Db0IsTUFBbkMsQ0FBakIsQ0FBVCxHQUFzRXJMLE1BQU0sQ0FBQ3lELFdBQVAsQ0FBbUJtSixhQUFuQixDQUF0RSxHQUF3RzVNLE1BQU0sQ0FBQy9ELElBQVAsQ0FBWXVILEtBQVosRUFBa0J4RixRQUFsQixDQUFqWDtBQUE2WTtBQUFDLEtBQWp3RTtBQUFrd0VvTyxnQkFBWSxFQUFDLHNCQUFTL2MsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLd2MsU0FBUixFQUFrQjtBQUFDLFlBQUkzZixDQUFDLEdBQUMsU0FBU21ELENBQVQsQ0FBV25ELENBQVgsRUFBYTtBQUFDLGNBQUlzSSxDQUFDLEdBQUNoQyxDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQU47QUFBZ0IsaUJBQU0sYUFBV3NJLENBQVgsR0FBYXRJLENBQWIsR0FBZSxZQUFVc0ksQ0FBVixJQUFhdEksQ0FBQyxDQUFDLENBQUQsQ0FBZCxHQUFrQm1ELENBQUMsQ0FBQ25ELENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBbkIsR0FBMEI4SSxDQUFDLENBQUNDLFNBQUYsQ0FBWS9JLENBQVosS0FBZ0JzRyxDQUFDLENBQUN0RyxDQUFELENBQUQsQ0FBSzBaLElBQUwsQ0FBVSxNQUFWLENBQWhCLEdBQWtDcFQsQ0FBQyxDQUFDdEcsQ0FBRCxDQUFELENBQUswWixJQUFMLENBQVUsTUFBVixDQUFsQyxHQUFvRCxDQUFDLENBQUMxWixDQUFDLENBQUNQLEdBQUosSUFBU08sQ0FBQyxDQUFDUCxHQUE5RztBQUFrSCxTQUFoSixDQUFpSjBELENBQWpKLENBQU47O0FBQTBKbkQsU0FBQyxLQUFHUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JpZ0IsSUFBaEIsR0FBcUIzZ0IsQ0FBeEIsQ0FBRDtBQUE0QjtBQUFDO0FBQXIrRSxHQUFsckQ7QUFBeXBJc0csR0FBQyxDQUFDRSxNQUFGLENBQVNELE1BQVQsRUFBZ0I7QUFBQ3NLLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXO0FBQUMsYUFBT3NjLE9BQU8sQ0FBQzVPLElBQVIsQ0FBYXBFLEtBQWIsQ0FBbUJnVCxPQUFuQixFQUEyQmhYLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsR0FBbUQsSUFBMUQ7QUFBK0QsS0FBakY7QUFBa0YrRyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxhQUFPZ0QsTUFBTSxDQUFDaEQsSUFBUCxJQUFjLElBQXJCO0FBQTBCLEtBQTVIO0FBQTZIZ0csV0FBTyxFQUFDLG1CQUFVO0FBQUMsYUFBTzJJLE9BQU8sQ0FBQ1EsY0FBUixJQUF5QlIsT0FBTyxDQUFDQyxTQUFSLEdBQWtCLENBQUMsQ0FBNUMsRUFBOEMsSUFBckQ7QUFBMEQsS0FBMU07QUFBMk16SCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxhQUFPd0gsT0FBTyxDQUFDQyxTQUFSLEdBQWtCLENBQUMsQ0FBbkIsRUFBcUJELE9BQU8sQ0FBQ0csZUFBUixFQUFyQixFQUErQyxJQUF0RDtBQUEyRCxLQUF4UjtBQUF5UnZSLFlBQVEsRUFBQyxrQkFBU2xMLENBQVQsRUFBVztBQUFDLGFBQU9zYyxPQUFPLENBQUNFLFNBQVIsR0FBa0J4YyxDQUFsQixFQUFvQixJQUEzQjtBQUFnQyxLQUE5VTtBQUErVXlkLGtCQUFjLEVBQUMsd0JBQVN6ZCxDQUFULEVBQVc7QUFBQyxhQUFPc04sT0FBTyxDQUFDQyxRQUFSLENBQWlCcUIsSUFBakIsR0FBc0I1TyxDQUF0QixFQUF3QixJQUEvQjtBQUFvQztBQUE5WSxHQUFoQixHQUFpYSxDQUFDNEQsT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixHQUFXLENBQXZCLElBQTBCLGFBQVdwQixDQUFDLENBQUN1RyxJQUFGLENBQU85RixPQUFPLENBQUNFLE9BQWYsQ0FBWCxJQUFvQ0YsT0FBTyxDQUFDRSxPQUFSLEdBQWdCLENBQTlFLElBQWlGRixPQUFPLENBQUNDLFlBQVIsSUFBc0IsYUFBV1YsQ0FBQyxDQUFDdUcsSUFBRixDQUFPOUYsT0FBTyxDQUFDa0IsTUFBZixDQUFqQyxJQUF5RGxCLE9BQU8sQ0FBQ2tCLE1BQVIsR0FBZSxNQUExSixNQUFvS3dYLE9BQU8sQ0FBQzVPLElBQVIsR0FBYTRPLE9BQU8sQ0FBQ1MsWUFBekwsQ0FBamE7QUFBd21CLE1BQUlsTCxVQUFVLEdBQUM7QUFBQ3hJLGNBQVUsRUFBQyxvQkFBU3JKLENBQVQsRUFBVztBQUFDLFdBQUs5RCxPQUFMLEdBQWE4RCxDQUFiLEVBQWUsS0FBSzRSLFdBQUwsR0FBaUIsRUFBaEMsRUFBbUMsS0FBSzBCLFlBQUwsR0FBa0IsVUFBckQsRUFBZ0UsS0FBS29LLEtBQUwsR0FBVztBQUFDN1AsaUJBQVMsRUFBQyxFQUFYO0FBQWM4UCxzQkFBYyxFQUFDLEVBQTdCO0FBQWdDNVAsa0JBQVUsRUFBQztBQUEzQyxPQUEzRSxFQUEwSCxLQUFLc0MsS0FBTCxFQUExSCxFQUF1SSxLQUFLdU4sY0FBTCxFQUF2STtBQUE2SixLQUFyTDtBQUFzTHZOLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtuVSxPQUFMLENBQWFlLE1BQWIsQ0FBb0IsS0FBSzRnQixPQUFMLEdBQWExYSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHVCQUFwQixFQUE2Q3RULE1BQTdDLENBQW9ELEtBQUs2Z0IsT0FBTCxHQUFhM2EsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixzQkFBcEIsRUFBNEN0VCxNQUE1QyxDQUFtRCxLQUFLOGdCLFNBQUwsR0FBZTVhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0RBQXBCLEVBQXNFdFQsTUFBdEUsQ0FBNkUsS0FBSytnQixnQkFBTCxHQUFzQjdhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLEVBQWlEdFQsTUFBakQsQ0FBd0RrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNDQUFwQixDQUF4RCxFQUFxSHRULE1BQXJILENBQTRIa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQ0FBcEIsQ0FBNUgsQ0FBbkcsQ0FBbEUsRUFBMFZ0VCxNQUExVixDQUFpVyxLQUFLZ2hCLE9BQUwsR0FBYTlhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isc0JBQXBCLEVBQTRDdFQsTUFBNUMsQ0FBbUQsS0FBS2loQixNQUFMLEdBQVkvYSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUEvRCxDQUE5VyxFQUEwZHRULE1BQTFkLENBQWllLEtBQUtraEIsS0FBTCxHQUFXaGIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiw0Q0FBcEIsRUFBa0V0VCxNQUFsRSxDQUF5RSxLQUFLbWhCLFlBQUwsR0FBa0JqYixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixFQUFpRHRULE1BQWpELENBQXdEa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixzQ0FBcEIsQ0FBeEQsRUFBcUh0VCxNQUFySCxDQUE0SGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0NBQXBCLENBQTVILENBQTNGLENBQTVlLENBQWpFLENBQWpDO0FBQWcyQixLQUF2aUM7QUFBd2lDcU4sa0JBQWMsRUFBQywwQkFBVTtBQUFDLFdBQUtFLE9BQUwsQ0FBYW5CLFFBQWIsQ0FBc0IsZUFBdEIsRUFBc0MsT0FBdEMsRUFBOEN4WixDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUN3RyxlQUFGO0FBQW9CLFlBQUkzSixDQUFDLEdBQUNzRyxDQUFDLENBQUNuRCxDQUFDLENBQUM1QixNQUFILENBQUQsQ0FBWTBELE9BQVosQ0FBb0IsZUFBcEIsRUFBcUMsQ0FBckMsQ0FBTjtBQUFBLFlBQThDcUQsQ0FBQyxHQUFDdEksQ0FBQyxJQUFFc0csQ0FBQyxDQUFDdEcsQ0FBRCxDQUFELENBQUtrQixJQUFMLENBQVUsYUFBVixDQUFuRDtBQUE0RW9ILFNBQUMsS0FBRyxLQUFLa1osU0FBTCxDQUFlbFosQ0FBZixHQUFrQndMLE1BQU0sQ0FBQ3lELFdBQVAsQ0FBbUJqUCxDQUFuQixDQUFyQixDQUFEO0FBQTZDLE9BQWpLLEVBQWtLLElBQWxLLENBQTlDLEdBQXVOLEtBQUsyWSxPQUFMLENBQWEzZCxJQUFiLENBQWtCLE9BQWxCLEVBQTBCLFVBQVNILENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUN3RyxlQUFGO0FBQW9CLE9BQTFELENBQXZOLEVBQW1SLEtBQUt1WCxTQUFMLENBQWU1ZCxJQUFmLENBQW9CLE9BQXBCLEVBQTRCZ0QsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUsyVCxZQUFiLEVBQTBCLElBQTFCLENBQTVCLENBQW5SLEVBQWdWLEtBQUtILEtBQUwsQ0FBV2hlLElBQVgsQ0FBZ0IsT0FBaEIsRUFBd0JnRCxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSzRULFFBQWIsRUFBc0IsSUFBdEIsQ0FBeEIsQ0FBaFY7QUFBcVksS0FBdjhDO0FBQXc4QzNSLFFBQUksRUFBQyxjQUFTNU0sQ0FBVCxFQUFXO0FBQUMsV0FBSytMLEtBQUw7QUFBYSxVQUFJNUcsQ0FBQyxHQUFDLFlBQU47QUFBQSxVQUFtQjBCLENBQUMsR0FBQyxDQUFDLENBQXRCO0FBQXdCMUQsT0FBQyxDQUFDd0csSUFBRixDQUFPM0osQ0FBUCxFQUFTbUQsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyx1QkFBYUEsQ0FBQyxDQUFDeU4sT0FBRixDQUFVeUQsVUFBdkIsS0FBb0M1SSxDQUFDLEdBQUMsVUFBdEMsR0FBa0R0SSxDQUFDLENBQUN5TixPQUFGLENBQVV5RCxVQUFWLEtBQXVCbEgsQ0FBQyxHQUFDLENBQUMsQ0FBMUIsQ0FBbEQ7QUFBK0UsT0FBckcsRUFBc0csSUFBdEcsQ0FBVCxHQUFzSCxLQUFLMlgsY0FBTCxDQUFvQnJaLENBQXBCLENBQXRILEVBQTZJLEtBQUtzWixjQUFMLEdBQW9CNVgsQ0FBakssRUFBbUsxRCxDQUFDLENBQUN3RyxJQUFGLENBQU8zSixDQUFQLEVBQVNtRCxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLGFBQUsrVSxXQUFMLENBQWlCMUUsSUFBakIsQ0FBc0IsSUFBSXdSLFNBQUosQ0FBYzdoQixDQUFkLEVBQWdCbUQsQ0FBQyxHQUFDLENBQWxCLENBQXRCO0FBQTRDLE9BQWxFLEVBQW1FLElBQW5FLENBQVQsQ0FBbkssRUFBc1AsS0FBSzJTLGFBQUwsRUFBdFA7QUFBMlEsS0FBendEO0FBQTB3RDVHLFNBQUssRUFBQyxpQkFBVTtBQUFDNUksT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUtpSSxXQUFaLEVBQXdCLFVBQVM1UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDZSxNQUFGO0FBQVcsT0FBakQsR0FBbUQsS0FBS2dVLFdBQUwsR0FBaUIsRUFBcEUsRUFBdUUsS0FBS29DLFNBQUwsR0FBZSxDQUFDLENBQXZGLEVBQXlGLEtBQUsySyxLQUFMLEdBQVcsQ0FBQyxDQUFyRztBQUF1RyxLQUFsNEQ7QUFBbTRESCxrQkFBYyxFQUFDLHdCQUFTeGUsQ0FBVCxFQUFXO0FBQUMsV0FBS3NULFlBQUwsSUFBbUIzQyxNQUFNLENBQUN6VSxPQUFQLENBQWUyVSxXQUFmLENBQTJCLG1CQUFpQixLQUFLeUMsWUFBakQsQ0FBbkIsRUFBa0YzQyxNQUFNLENBQUN6VSxPQUFQLENBQWVxVSxRQUFmLENBQXdCLG1CQUFpQnZRLENBQXpDLENBQWxGLEVBQThILEtBQUtzVCxZQUFMLEdBQWtCdFQsQ0FBaEo7QUFBa0osS0FBaGpFO0FBQWlqRTJULFdBQU8sRUFBQyxtQkFBVTtBQUFDaEQsWUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQix1QkFBM0IsRUFBb0ROLFFBQXBELENBQTZELHdCQUE3RCxHQUF1RixLQUFLZ00sU0FBTCxHQUFlLENBQUMsQ0FBdkc7QUFBeUcsS0FBN3FFO0FBQThxRXpILFVBQU0sRUFBQyxrQkFBVTtBQUFDbkUsWUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQix3QkFBM0IsRUFBcUROLFFBQXJELENBQThELHVCQUE5RCxHQUF1RixLQUFLZ00sU0FBTCxHQUFlLENBQUMsQ0FBdkc7QUFBeUcsS0FBenlFO0FBQTB5RTNILFdBQU8sRUFBQyxtQkFBVTtBQUFDLGFBQU0sQ0FBQyxLQUFLMkgsU0FBWjtBQUFzQixLQUFuMUU7QUFBbzFFcUMsWUFBUSxFQUFDLG9CQUFVO0FBQUMsYUFBTyxLQUFLckMsU0FBWjtBQUFzQixLQUE5M0U7QUFBKzNFc0MsY0FBVSxFQUFDLHNCQUFVO0FBQUMsVUFBSTdlLENBQUMsR0FBQzJRLE1BQU0sQ0FBQ3pVLE9BQWI7QUFBQSxVQUFxQlcsQ0FBQyxHQUFDLEtBQUs2Z0IsS0FBNUI7QUFBQSxVQUFrQ3ZZLENBQUMsR0FBQyxpQkFBZSxLQUFLbU8sWUFBeEQ7QUFBQSxVQUFxRXpNLENBQUMsR0FBQzFCLENBQUMsR0FBQyxLQUFELEdBQU8sTUFBL0U7QUFBQSxVQUFzRjJCLENBQUMsR0FBQzNCLENBQUMsR0FBQyxNQUFELEdBQVEsS0FBakc7QUFBQSxVQUF1RzRCLENBQUMsR0FBQzVCLENBQUMsR0FBQyxRQUFELEdBQVUsTUFBcEg7QUFBQSxVQUEySDZCLENBQUMsR0FBQzdCLENBQUMsR0FBQyxLQUFELEdBQU8sT0FBckk7QUFBQSxVQUE2SThCLENBQUMsR0FBQzlCLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBeko7QUFBQSxVQUFrSytCLENBQUMsR0FBQy9CLENBQUMsR0FBQyxRQUFELEdBQVUsT0FBL0s7QUFBQSxVQUF1TGdDLENBQUMsR0FBQztBQUFDK0csWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDLE1BQXBCO0FBQTJCOEUsV0FBRyxFQUFDLFFBQS9CO0FBQXdDdUgsY0FBTSxFQUFDO0FBQS9DLE9BQXpMO0FBQStPLFdBQUt0ZSxPQUFMLENBQWEyVSxXQUFiLENBQXlCLHdCQUF6QjtBQUFtRCxVQUFJaUosQ0FBQyxHQUFDOVosQ0FBQyxDQUFDc1osRUFBRixDQUFLLFVBQUwsQ0FBTjtBQUF1QixVQUFHUSxDQUFDLElBQUU5WixDQUFDLENBQUMwTixJQUFGLEVBQUgsRUFBWSxLQUFLa1IsUUFBTCxNQUFpQixLQUFLOUosTUFBTCxFQUE3QixFQUEyQyxDQUFDLEtBQUs1WSxPQUFMLENBQWFvZCxFQUFiLENBQWdCLFVBQWhCLENBQUQsSUFBOEIsS0FBSzFILFdBQUwsQ0FBaUJ2VCxNQUFqQixHQUF3QixDQUF0RCxJQUF5RCxLQUFLb2dCLGNBQTVHLEVBQTJILE9BQU8sS0FBSzlLLE9BQUwsSUFBZXhRLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEtBQUtxYSxLQUFMLENBQVczUCxVQUFwQixFQUErQjtBQUFDcEssYUFBSyxFQUFDLENBQVA7QUFBU1EsY0FBTSxFQUFDO0FBQWhCLE9BQS9CLENBQWYsRUFBa0UyVixDQUFDLElBQUU5WixDQUFDLENBQUMyTixJQUFGLEVBQXJFLEVBQThFLEtBQUssS0FBS3pSLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0Isd0JBQXRCLENBQTFGO0FBQTBJLFdBQUt1RSxNQUFMOztBQUFjLFVBQUlpRixDQUFDLEdBQUMsS0FBS2dFLFNBQVg7QUFBQSxVQUFxQi9ELENBQUMsR0FBQyxLQUFLbUUsS0FBNUI7QUFBQSxVQUFrQ2xFLENBQUMsR0FBQ3hXLE1BQU0sQ0FBQ0MsUUFBUCxFQUFwQztBQUFBLFVBQXNEZ0IsQ0FBQyxHQUFDLEtBQUt4SSxPQUFMLENBQWEsVUFBUXlKLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CbUIsQ0FBcEIsQ0FBckIsR0FBeEQ7QUFBQSxVQUF1R2dULENBQUMsR0FBQ04sUUFBUSxDQUFDLEtBQUtxRSxPQUFMLENBQWE1VixHQUFiLENBQWlCLGFBQVd4QixDQUE1QixDQUFELENBQVIsSUFBMEMsQ0FBbko7QUFBQSxVQUFxSnNULENBQUMsR0FBQy9TLElBQUksQ0FBQ0UsR0FBTCxDQUFTNUMsQ0FBQyxHQUFDLElBQUV3VixDQUFiLEVBQWUsQ0FBZixDQUF2SjtBQUFBLFVBQXlLRSxDQUFDLEdBQUNSLFFBQVEsQ0FBQyxLQUFLcUUsT0FBTCxDQUFhNVYsR0FBYixDQUFpQixhQUFXdkIsQ0FBNUIsQ0FBRCxDQUFSLElBQTBDLENBQXJOO0FBQUEsVUFBdU5nWSxDQUFDLEdBQUMsQ0FBQ2xGLFFBQVEsQ0FBQyxLQUFLMWQsT0FBTCxDQUFhbU0sR0FBYixDQUFpQixZQUFVdEIsQ0FBM0IsQ0FBRCxDQUFSLElBQXlDLENBQTFDLEtBQThDNlMsUUFBUSxDQUFDLEtBQUsxZCxPQUFMLENBQWFtTSxHQUFiLENBQWlCLFlBQVVyQixDQUEzQixDQUFELENBQVIsSUFBeUMsQ0FBdkYsQ0FBek47O0FBQW1UN0QsT0FBQyxDQUFDRSxNQUFGLENBQVN4RyxDQUFDLENBQUNrUixVQUFYLEVBQXNCO0FBQUM1SixjQUFNLEVBQUNPLENBQUMsR0FBQ29hLENBQVY7QUFBWW5iLGFBQUssRUFBQ3NXLENBQUMsQ0FBQzlVLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBWCxDQUFuQjtBQUF3QzRaLGtCQUFVLEVBQUM3RTtBQUFuRCxPQUF0QixHQUE2RS9XLENBQUMsQ0FBQ0UsTUFBRixDQUFTeEcsQ0FBQyxDQUFDZ1IsU0FBWCxFQUFxQjtBQUFDMUosY0FBTSxFQUFDZ1csQ0FBUjtBQUFVeFcsYUFBSyxFQUFDd1c7QUFBaEIsT0FBckIsQ0FBN0UsRUFBc0hoWCxDQUFDLENBQUNFLE1BQUYsQ0FBU3hHLENBQUMsQ0FBQzhnQixjQUFYLEVBQTBCO0FBQUNoYSxhQUFLLEVBQUN3VyxDQUFDLEdBQUMsSUFBRUMsQ0FBWDtBQUFhalcsY0FBTSxFQUFDTztBQUFwQixPQUExQixDQUF0SCxFQUF3SzdILENBQUMsQ0FBQ21pQixLQUFGLEdBQVE7QUFBQ3hLLGdCQUFRLEVBQUM7QUFBQzdRLGVBQUssRUFBQ3FXLENBQUMsQ0FBQyxVQUFRclUsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JrQixDQUFwQixDQUFULENBQUQsRUFBUDtBQUEyQ2dZLG9CQUFVLEVBQUNyRixRQUFRLENBQUNHLENBQUMsQ0FBQzFSLEdBQUYsQ0FBTSxZQUFVdkIsQ0FBaEIsQ0FBRCxDQUFSLElBQThCLENBQXBGO0FBQXNGb1kscUJBQVcsRUFBQ3RGLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDMVIsR0FBRixDQUFNLFlBQVVsQixDQUFDLENBQUNMLENBQUQsQ0FBakIsQ0FBRCxDQUFSLElBQWlDO0FBQW5JLFNBQVY7QUFBZ0o2TixZQUFJLEVBQUM7QUFBQ2hSLGVBQUssRUFBQ3FXLENBQUMsQ0FBQyxVQUFRclUsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JrQixDQUFwQixDQUFULENBQUQsRUFBUDtBQUEyQ2dZLG9CQUFVLEVBQUNyRixRQUFRLENBQUNJLENBQUMsQ0FBQzNSLEdBQUYsQ0FBTSxZQUFVdkIsQ0FBaEIsQ0FBRCxDQUFSLElBQThCLENBQXBGO0FBQXNGb1kscUJBQVcsRUFBQ3RGLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDM1IsR0FBRixDQUFNLFlBQVVsQixDQUFDLENBQUNMLENBQUQsQ0FBakIsQ0FBRCxDQUFSLElBQWlDO0FBQW5JO0FBQXJKLE9BQWhMO0FBQTRjLFVBQUlxWSxDQUFDLEdBQUNsRixDQUFDLENBQUNoVCxDQUFELENBQVA7QUFBQSxVQUFXK0ksQ0FBQyxHQUFDblQsQ0FBQyxDQUFDOGdCLGNBQUYsQ0FBaUJoYSxLQUE5QjtBQUFBLFVBQW9Db00sQ0FBQyxHQUFDLEtBQUs2QixXQUFMLENBQWlCdlQsTUFBdkQ7QUFBOER4QixPQUFDLENBQUNrUixVQUFGLENBQWFwSyxLQUFiLEdBQW1Cd2IsQ0FBbkIsRUFBcUJ0aUIsQ0FBQyxDQUFDbWlCLEtBQUYsQ0FBUXBLLE9BQVIsR0FBZ0IsSUFBRTdFLENBQUMsR0FBQ0MsQ0FBRixHQUFJbVAsQ0FBM0M7QUFBNkMsVUFBSUMsQ0FBQyxHQUFDRCxDQUFOO0FBQUEsVUFBUUUsQ0FBQyxHQUFDeGlCLENBQUMsQ0FBQ21pQixLQUFaO0FBQUEsVUFBa0J6VyxDQUFDLEdBQUM4VyxDQUFDLENBQUM3SyxRQUF0QjtBQUFBLFVBQStCOEssQ0FBQyxHQUFDRCxDQUFDLENBQUMxSyxJQUFuQztBQUFBLFVBQXdDNEssQ0FBQyxHQUFDaFgsQ0FBQyxDQUFDMFcsVUFBRixHQUFhMVcsQ0FBQyxDQUFDNUUsS0FBZixHQUFxQjRFLENBQUMsQ0FBQzJXLFdBQXZCLEdBQW1DSSxDQUFDLENBQUNMLFVBQXJDLEdBQWdESyxDQUFDLENBQUMzYixLQUFsRCxHQUF3RDJiLENBQUMsQ0FBQ0osV0FBcEc7QUFBZ0hyaUIsT0FBQyxDQUFDbWlCLEtBQUYsQ0FBUXBLLE9BQVIsS0FBa0J3SyxDQUFDLElBQUVHLENBQXJCO0FBQXdCLFVBQUlDLENBQUMsR0FBQ3pQLENBQUMsR0FBQ0MsQ0FBUjtBQUFVd1AsT0FBQyxJQUFFSixDQUFDLEdBQUNoWSxJQUFJLENBQUNxWSxLQUFMLENBQVdMLENBQUMsR0FBQ3BQLENBQWIsSUFBZ0JBLENBQXBCLENBQUQsS0FBMEJvUCxDQUFDLEdBQUNJLENBQTVCO0FBQStCLFVBQUlFLENBQUMsR0FBQ04sQ0FBQyxJQUFFdmlCLENBQUMsQ0FBQ21pQixLQUFGLENBQVFwSyxPQUFSLEdBQWdCMkssQ0FBaEIsR0FBa0IsQ0FBcEIsQ0FBUDtBQUE4QjFpQixPQUFDLENBQUM4aUIsR0FBRixHQUFNdlksSUFBSSxDQUFDd1ksS0FBTCxDQUFXUixDQUFDLEdBQUNwUCxDQUFiLENBQU4sRUFBc0IsS0FBSzZQLEtBQUwsR0FBVyxNQUFqQyxFQUF3Q2hqQixDQUFDLENBQUM4aUIsR0FBRixJQUFPLENBQVAsS0FBV0QsQ0FBQyxHQUFDTixDQUFDLEdBQUNELENBQUosRUFBTXRpQixDQUFDLENBQUNtaUIsS0FBRixDQUFRcEssT0FBUixHQUFnQixDQUFDLENBQXZCLEVBQXlCLEtBQUtpTCxLQUFMLEdBQVcsUUFBL0MsQ0FBeEMsRUFBaUdoakIsQ0FBQyxDQUFDeVUsS0FBRixHQUFRbEssSUFBSSxDQUFDMFksSUFBTCxDQUFVL1AsQ0FBQyxHQUFDQyxDQUFGLEdBQUlvUCxDQUFkLENBQXpHLEVBQTBIdmlCLENBQUMsQ0FBQ2doQixPQUFGLEdBQVU7QUFBQ2xhLGFBQUssRUFBQytiLENBQUMsR0FBQyxDQUFUO0FBQVd2YixjQUFNLEVBQUNPO0FBQWxCLE9BQXBJLEVBQXlKN0gsQ0FBQyxDQUFDa2pCLE1BQUYsR0FBUztBQUFDcGMsYUFBSyxFQUFDeWIsQ0FBUDtBQUFTamIsY0FBTSxFQUFDTztBQUFoQixPQUFsSyxFQUFxTDdILENBQUMsQ0FBQ21SLEtBQUYsR0FBUTtBQUFDckssYUFBSyxFQUFDb00sQ0FBQyxHQUFDQyxDQUFGLEdBQUksQ0FBWDtBQUFhN0wsY0FBTSxFQUFDTztBQUFwQixPQUE3TCxFQUFvTm9WLENBQUMsSUFBRTlaLENBQUMsQ0FBQzJOLElBQUYsRUFBdk4sRUFBZ08sS0FBS3pSLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWhPO0FBQWdSLEtBQTF5STtBQUEyeUk1QyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLZ0csT0FBTCxJQUFlLEtBQUs1RixVQUFMLENBQWdCSixJQUFoQixFQUFmLEVBQXNDLEtBQUtpSSxRQUFMLEdBQWMsQ0FBQyxDQUFyRDtBQUF1RCxLQUFsM0k7QUFBbTNJdkMsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFVBQUlyVCxDQUFDLEdBQUMsaUJBQWUsS0FBS3NULFlBQTFCO0FBQXVDLGFBQU07QUFBQzNQLGFBQUssRUFBQzNELENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXM1AsVUFBWCxDQUFzQnBLLEtBQXZCLEdBQTZCLEtBQUsrWixLQUFMLENBQVczUCxVQUFYLENBQXNCNUosTUFBM0Q7QUFBa0VBLGNBQU0sRUFBQ25FLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXM1AsVUFBWCxDQUFzQjVKLE1BQXZCLEdBQThCLEtBQUt1WixLQUFMLENBQVczUCxVQUFYLENBQXNCcEs7QUFBOUgsT0FBTjtBQUEySSxLQUE5ako7QUFBK2pKZ1AsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFVBQUcsS0FBS2tNLFVBQUwsSUFBa0IsQ0FBQyxLQUFLRCxRQUFMLEVBQXRCLEVBQXNDO0FBQUMsWUFBSTVlLENBQUMsR0FBQ21ELENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWSxLQUFLcWEsS0FBakIsQ0FBTjtBQUFBLFlBQThCN2dCLENBQUMsR0FBQyxpQkFBZSxLQUFLeVcsWUFBcEQ7QUFBaUVuUSxTQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBS2lJLFdBQVosRUFBd0IsVUFBUzVSLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxXQUFDLENBQUNtakIsTUFBRjtBQUFXLFNBQWpELEdBQW1ELEtBQUtqQyxTQUFMLENBQWUvZCxDQUFDLENBQUNnZixLQUFGLENBQVFwSyxPQUFSLEdBQWdCLE1BQWhCLEdBQXVCLE1BQXRDLEdBQW5ELEVBQW1HLEtBQUt1SixLQUFMLENBQVduZSxDQUFDLENBQUNnZixLQUFGLENBQVFwSyxPQUFSLEdBQWdCLE1BQWhCLEdBQXVCLE1BQWxDLEdBQW5HLEVBQStJLEtBQUtxSixPQUFMLENBQWE1VixHQUFiLENBQWlCO0FBQUMxRSxlQUFLLEVBQUMzRCxDQUFDLENBQUMrZixNQUFGLENBQVNsakIsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUFuQixDQUFQO0FBQW9Dc0gsZ0JBQU0sRUFBQ25FLENBQUMsQ0FBQytmLE1BQUYsQ0FBU2xqQixDQUFDLEdBQUMsUUFBRCxHQUFVLE9BQXBCO0FBQTNDLFNBQWpCLENBQS9JLEVBQTBPLEtBQUtxaEIsTUFBTCxDQUFZN1YsR0FBWixDQUFnQjtBQUFDMUUsZUFBSyxFQUFDM0QsQ0FBQyxDQUFDZ08sS0FBRixDQUFRblIsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUFsQixDQUFQO0FBQW1Dc0gsZ0JBQU0sRUFBQ25FLENBQUMsQ0FBQ2dPLEtBQUYsQ0FBUW5SLENBQUMsR0FBQyxRQUFELEdBQVUsT0FBbkI7QUFBMUMsU0FBaEIsQ0FBMU87QUFBa1UsWUFBSXNJLENBQUMsR0FBQztBQUFDeEIsZUFBSyxFQUFDM0QsQ0FBQyxDQUFDNmQsT0FBRixDQUFVaGhCLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBcEIsQ0FBUDtBQUFxQ3NILGdCQUFNLEVBQUNuRSxDQUFDLENBQUM2ZCxPQUFGLENBQVVoaEIsQ0FBQyxHQUFDLFFBQUQsR0FBVSxPQUFyQjtBQUE1QyxTQUFOO0FBQWlGc0ksU0FBQyxDQUFDLGFBQVd0SSxDQUFDLEdBQUMsTUFBRCxHQUFRLEtBQXBCLENBQUQsQ0FBRCxHQUE4QnVLLElBQUksQ0FBQ3dZLEtBQUwsQ0FBVyxDQUFDLEVBQUQsR0FBSTVmLENBQUMsQ0FBQzZkLE9BQUYsQ0FBVWxhLEtBQXpCLElBQWdDLElBQTlELEVBQW1Fd0IsQ0FBQyxDQUFDLGFBQVd0SSxDQUFDLEdBQUMsS0FBRCxHQUFPLE1BQW5CLENBQUQsQ0FBRCxHQUE4QixDQUFqRyxFQUFtRyxLQUFLZ2hCLE9BQUwsQ0FBYXhWLEdBQWIsQ0FBaUJsRCxDQUFqQixDQUFuRyxFQUF1SCxLQUFLNk8sU0FBTCxJQUFnQixLQUFLaU0sTUFBTCxDQUFZLEtBQUtqTSxTQUFqQixFQUEyQixDQUFDLENBQTVCLENBQXZJO0FBQXNLO0FBQUMsS0FBMXZLO0FBQTJ2S2tNLGNBQVUsRUFBQyxvQkFBU2xnQixDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUVBLENBQUMsR0FBQyxDQUFGLElBQUtBLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXcE0sS0FBbEIsSUFBeUJ0UixDQUFDLEtBQUcsS0FBSzJlLEtBQXBDLENBQUgsRUFBOEM7QUFBQyxZQUFJOWhCLENBQUMsR0FBQyxLQUFLNmdCLEtBQUwsQ0FBV2lDLEdBQVgsSUFBZ0IzZixDQUFDLEdBQUMsQ0FBbEIsSUFBcUIsQ0FBM0I7QUFBNkIsYUFBS2lnQixNQUFMLENBQVlwakIsQ0FBWjtBQUFlO0FBQUMsS0FBOTJLO0FBQSsyS3loQixnQkFBWSxFQUFDLHdCQUFVO0FBQUMsV0FBSzRCLFVBQUwsQ0FBZ0IsS0FBS3ZCLEtBQUwsR0FBVyxDQUEzQjtBQUE4QixLQUFyNks7QUFBczZLSixZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLMkIsVUFBTCxDQUFnQixLQUFLdkIsS0FBTCxHQUFXLENBQTNCO0FBQThCLEtBQXg5SztBQUF5OUtqUixRQUFJLEVBQUMsY0FBUzFOLENBQVQsRUFBVztBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBS21YLFNBQUwsR0FBZSxDQUFyQjtBQUF1QmhVLE9BQUMsR0FBQyxDQUFGLEtBQU1BLENBQUMsR0FBQyxDQUFSO0FBQVcsVUFBSW1GLENBQUMsR0FBQyxLQUFLeU0sV0FBTCxDQUFpQnZULE1BQXZCO0FBQThCOEcsT0FBQyxHQUFDbkYsQ0FBRixLQUFNQSxDQUFDLEdBQUNtRixDQUFSLEdBQVcsS0FBSzZPLFNBQUwsR0FBZWhVLENBQTFCLEVBQTRCLEtBQUtxZSxTQUFMLENBQWVyZSxDQUFmLENBQTVCLEVBQThDLFdBQVMsS0FBSzZmLEtBQWQsSUFBcUIsS0FBS2xCLEtBQUwsS0FBYXZYLElBQUksQ0FBQzBZLElBQUwsQ0FBVTlmLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXaUMsR0FBdkIsQ0FBbEMsSUFBK0QsS0FBS00sTUFBTCxDQUFZamdCLENBQVosRUFBY25ELENBQWQsQ0FBN0c7QUFBOEgsS0FBeHFMO0FBQXlxTG9qQixVQUFNLEVBQUMsZ0JBQVNqZ0IsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLZ2lCLFVBQUwsSUFBa0IsQ0FBQyxLQUFLRCxRQUFMLEVBQXRCLEVBQXNDO0FBQUMsWUFBSXpaLENBQUo7QUFBQSxZQUFNMEIsQ0FBTjtBQUFBLFlBQVFDLENBQUMsR0FBQyxpQkFBZSxLQUFLd00sWUFBOUI7QUFBQSxZQUEyQ3ZNLENBQUMsR0FBQyxLQUFHdEQsTUFBTSxDQUFDQyxRQUFQLEdBQWtCb0QsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUE1QixDQUFoRDtBQUFBLFlBQXNGRSxDQUFDLEdBQUMsS0FBSzBXLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmhhLEtBQWxIOztBQUF3SCxZQUFHLFdBQVMsS0FBS2tjLEtBQWpCLEVBQXVCO0FBQUNoWixXQUFDLEdBQUNPLElBQUksQ0FBQzBZLElBQUwsQ0FBVTlmLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXaUMsR0FBdkIsQ0FBRixFQUE4QixLQUFLaEIsS0FBTCxHQUFXOVgsQ0FBekMsRUFBMkMxQixDQUFDLEdBQUM2QixDQUFDLElBQUUsS0FBSzJYLEtBQUwsR0FBVyxDQUFiLENBQUQsR0FBaUIsS0FBS2pCLEtBQUwsQ0FBV2lDLEdBQTVCLEdBQWdDLENBQUMsQ0FBOUU7QUFBZ0YsY0FBSTFZLENBQUMsR0FBQyxvQ0FBTjtBQUEyQyxlQUFLK1csZ0JBQUwsQ0FBc0IsQ0FBQ25YLENBQUMsR0FBQyxDQUFGLEdBQUksS0FBSixHQUFVLFFBQVgsSUFBcUIsT0FBM0MsRUFBb0RJLENBQXBELEdBQXVELEtBQUttWCxZQUFMLENBQWtCLENBQUN2WCxDQUFDLElBQUUsS0FBSzZXLEtBQUwsQ0FBV3BNLEtBQWQsR0FBb0IsS0FBcEIsR0FBMEIsUUFBM0IsSUFBcUMsT0FBdkQsRUFBZ0VySyxDQUFoRSxDQUF2RDtBQUEwSCxTQUE3USxNQUFrUjlCLENBQUMsR0FBQzRCLENBQUMsR0FBQyxDQUFDLENBQUQsSUFBSUMsQ0FBQyxJQUFFaEgsQ0FBQyxHQUFDLENBQUosQ0FBRCxHQUFRLEtBQUdnSCxDQUFmLENBQUo7O0FBQXNCSCxTQUFDLEdBQUMySixLQUFLLENBQUNDLElBQVI7QUFBYSxZQUFJdkosQ0FBQyxHQUFDLEVBQU47QUFBQSxZQUFTQyxDQUFDLEdBQUMsRUFBWDtBQUFjRCxTQUFDLENBQUNKLENBQUMsR0FBQyxLQUFELEdBQU8sTUFBVCxDQUFELEdBQWtCLENBQWxCLEVBQW9CSyxDQUFDLENBQUNMLENBQUMsR0FBQyxNQUFELEdBQVEsS0FBVixDQUFELEdBQWtCM0IsQ0FBQyxHQUFDLElBQXhDLEVBQTZDLEtBQUsrWSxNQUFMLENBQVlqTixJQUFaLENBQWlCLENBQUMsQ0FBbEIsRUFBcUI1SSxHQUFyQixDQUF5Qm5CLENBQXpCLEVBQTRCaVosT0FBNUIsQ0FBb0NoWixDQUFwQyxFQUFzQ3RLLENBQUMsR0FBQyxDQUFELEdBQUdnSyxDQUFDLElBQUVBLENBQUMsQ0FBQzZKLElBQUYsQ0FBT3BHLE9BQVAsQ0FBZWtELE9BQWYsQ0FBdUJPLFVBQXZCLENBQWtDQyxLQUFyQyxJQUE0QyxDQUF0RixFQUF3RjdLLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3lWLGVBQUw7QUFBdUIsU0FBMUMsRUFBMkMsSUFBM0MsQ0FBeEYsQ0FBN0M7QUFBdUw7QUFBQyxLQUF4MU07QUFBeTFNQSxtQkFBZSxFQUFDLDJCQUFVO0FBQUMsVUFBSXBnQixDQUFKLEVBQU1uRCxDQUFOOztBQUFRLFVBQUcsS0FBS21YLFNBQUwsSUFBZ0IsS0FBSzBKLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmhhLEtBQTFDLElBQWlELEVBQUUsS0FBS2lPLFdBQUwsQ0FBaUJ2VCxNQUFqQixHQUF3QixDQUExQixDQUFwRCxFQUFpRjtBQUFDLFlBQUcsV0FBUyxLQUFLd2hCLEtBQWpCLEVBQXVCO0FBQUMsY0FBRyxLQUFLbEIsS0FBTCxHQUFXLENBQWQsRUFBZ0I7QUFBTzNlLFdBQUMsR0FBQyxDQUFDLEtBQUsyZSxLQUFMLEdBQVcsQ0FBWixJQUFlLEtBQUtqQixLQUFMLENBQVdpQyxHQUExQixHQUE4QixDQUFoQyxFQUFrQzlpQixDQUFDLEdBQUN1SyxJQUFJLENBQUNDLEdBQUwsQ0FBU3JILENBQUMsR0FBQyxDQUFGLEdBQUksS0FBSzBkLEtBQUwsQ0FBV2lDLEdBQXhCLEVBQTRCLEtBQUsvTixXQUFMLENBQWlCdlQsTUFBN0MsQ0FBcEM7QUFBeUYsU0FBeEksTUFBNEk7QUFBQyxjQUFJOEcsQ0FBQyxHQUFDaUMsSUFBSSxDQUFDMFksSUFBTCxDQUFVLEtBQUtwQyxLQUFMLENBQVczUCxVQUFYLENBQXNCcEssS0FBdEIsR0FBNEIsS0FBSytaLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmhhLEtBQWhFLENBQU47QUFBNkUzRCxXQUFDLEdBQUNvSCxJQUFJLENBQUNFLEdBQUwsQ0FBU0YsSUFBSSxDQUFDcVksS0FBTCxDQUFXclksSUFBSSxDQUFDRSxHQUFMLENBQVMsS0FBSzBNLFNBQUwsR0FBZSxLQUFHN08sQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBWCxDQUFULEVBQXFELENBQXJELENBQUYsRUFBMER0SSxDQUFDLEdBQUN1SyxJQUFJLENBQUMwWSxJQUFMLENBQVUxWSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLMk0sU0FBTCxHQUFlLEtBQUc3TyxDQUEzQixDQUFWLENBQTVELEVBQXFHLEtBQUt5TSxXQUFMLENBQWlCdlQsTUFBakIsR0FBd0J4QixDQUF4QixLQUE0QkEsQ0FBQyxHQUFDLEtBQUsrVSxXQUFMLENBQWlCdlQsTUFBL0MsQ0FBckc7QUFBNEo7O0FBQUEsYUFBSSxJQUFJd0ksQ0FBQyxHQUFDN0csQ0FBVixFQUFZNkcsQ0FBQyxJQUFFaEssQ0FBZixFQUFpQmdLLENBQUMsRUFBbEIsRUFBcUIsS0FBSytLLFdBQUwsQ0FBaUIvSyxDQUFDLEdBQUMsQ0FBbkIsRUFBc0IrRixJQUF0QjtBQUE2QjtBQUFDLEtBQXYzTjtBQUF3M055UixhQUFTLEVBQUMsbUJBQVNyZSxDQUFULEVBQVc7QUFBQyxXQUFLa2UsTUFBTCxDQUFZdkQsSUFBWixDQUFpQixzQkFBakIsRUFBeUM5SixXQUF6QyxDQUFxRCxxQkFBckQ7O0FBQTRFLFVBQUloVSxDQUFDLEdBQUNtRCxDQUFDLElBQUUsS0FBSzRSLFdBQUwsQ0FBaUI1UixDQUFDLEdBQUMsQ0FBbkIsQ0FBVDtBQUErQm5ELE9BQUMsSUFBRUEsQ0FBQyxDQUFDd2pCLFFBQUYsRUFBSDtBQUFnQixLQUF6Z087QUFBMGdPQyxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLdE0sU0FBTCxJQUFnQixLQUFLSSxXQUFMLENBQWlCLEtBQUtKLFNBQXRCLENBQWhCO0FBQWlEO0FBQTlrTyxHQUFmOztBQUErbE8sV0FBUzBLLFNBQVQsR0FBb0I7QUFBQyxTQUFLclYsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkJoRSxNQUFNLENBQUNpRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCO0FBQW1EOztBQUFBekQsR0FBQyxDQUFDRSxNQUFGLENBQVNxYixTQUFTLENBQUNsWixTQUFuQixFQUE2QjtBQUFDNkQsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsV0FBSzZULElBQUwsR0FBVTFRLENBQVYsRUFBWSxLQUFLZ1UsU0FBTCxHQUFlblgsQ0FBM0IsRUFBNkIsS0FBSzBqQixRQUFMLEVBQTdCO0FBQTZDLEtBQXZFO0FBQXdFQSxZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLMVMsU0FBTCxHQUFlMUssQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixjQUFwQixFQUFvQ3hTLElBQXBDLENBQXlDLGFBQXpDLEVBQXVELEtBQUtpVyxTQUE1RCxDQUFmO0FBQXNGLEtBQWxMO0FBQW1MM0QsU0FBSyxFQUFDLGlCQUFVO0FBQUMsVUFBRyxDQUFDLEtBQUtzTixjQUFULEVBQXdCO0FBQUMsWUFBSTNkLENBQUMsR0FBQyxLQUFLMFEsSUFBTCxDQUFVcEcsT0FBaEI7QUFBd0J1SCxrQkFBVSxDQUFDcU0sTUFBWCxDQUFrQmpoQixNQUFsQixDQUF5QixLQUFLMGdCLGNBQUwsR0FBb0J4YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG9CQUFwQixFQUEwQ3RULE1BQTFDLENBQWlELEtBQUs0USxTQUFMLENBQWU1USxNQUFmLENBQXNCLEtBQUt1akIsZ0JBQUwsR0FBc0JyZCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNCQUFwQixDQUE1QyxDQUFqRCxDQUE3QyxHQUF5TCxZQUFVLEtBQUtHLElBQUwsQ0FBVWhILElBQXBCLElBQTBCLEtBQUttRSxTQUFMLENBQWUwQyxRQUFmLENBQXdCLG1CQUF4QixFQUE2Q3hTLElBQTdDLENBQWtELFdBQWxELEVBQThEO0FBQUMyUyxjQUFJLEVBQUMsS0FBS0EsSUFBWDtBQUFnQmxGLGFBQUcsRUFBQ3hMLENBQUMsQ0FBQzZOLFNBQUYsSUFBYSxLQUFLNkMsSUFBTCxDQUFVcFU7QUFBM0MsU0FBOUQsQ0FBbk47QUFBa1UsWUFBSU8sQ0FBQyxHQUFDbUQsQ0FBQyxDQUFDNk4sU0FBRixJQUFhN04sQ0FBQyxDQUFDNk4sU0FBRixDQUFZNFMsSUFBL0I7QUFBb0M1akIsU0FBQyxJQUFFLEtBQUtnUixTQUFMLENBQWU1USxNQUFmLENBQXNCa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQix5Q0FBdUMxVCxDQUEzRCxDQUF0QixDQUFILEVBQXdGLEtBQUtnUixTQUFMLENBQWU1USxNQUFmLENBQXNCa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixzQkFBcEIsRUFBNEN0VCxNQUE1QyxDQUFtRGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsaUNBQXBCLENBQW5ELEVBQTJHdFQsTUFBM0csQ0FBa0gsS0FBS3VhLE9BQUwsR0FBYXJVLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isc0JBQXBCLEVBQTRDdFQsTUFBNUMsQ0FBbURrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGlDQUFwQixDQUFuRCxFQUEyR3RULE1BQTNHLENBQWtILEtBQUsyUSxPQUFMLEdBQWF6SyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNCQUFwQixFQUE0QzVDLElBQTVDLEdBQW1EMVEsTUFBbkQsQ0FBMERrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUExRCxDQUEvSCxDQUEvSCxFQUE0V3RULE1BQTVXLENBQW1Ya0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiw2QkFBcEIsQ0FBblgsQ0FBdEIsQ0FBeEYsRUFBc2hCLEtBQUsxQyxTQUFMLENBQWU1USxNQUFmLENBQXNCa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixvQkFBcEIsQ0FBdEIsQ0FBdGhCLEVBQXVsQixLQUFLeVAsTUFBTCxFQUF2bEI7QUFBcW1CO0FBQUMsS0FBanNDO0FBQWtzQ3BpQixVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLK2YsY0FBTCxLQUFzQixLQUFLQSxjQUFMLENBQW9CL2YsTUFBcEIsSUFBNkIsS0FBSytmLGNBQUwsR0FBb0IsSUFBakQsRUFBc0QsS0FBS3hSLEtBQUwsR0FBVyxJQUF2RixHQUE2RixLQUFLdVUsS0FBTCxLQUFhLEtBQUtBLEtBQUwsQ0FBV2pWLEtBQVgsSUFBbUIsS0FBS2lWLEtBQUwsR0FBVyxJQUEzQyxDQUE3RixFQUE4SSxLQUFLQyxjQUFMLEtBQXNCLEtBQUtBLGNBQUwsQ0FBb0JsVixLQUFwQixJQUE0QixLQUFLa1YsY0FBTCxHQUFvQixJQUF0RSxDQUE5SSxFQUEwTixLQUFLQyxRQUFMLEdBQWMsQ0FBQyxDQUF6TyxFQUEyTyxLQUFLQyxRQUFMLEdBQWMsQ0FBQyxDQUExUCxFQUE0UCxLQUFLblEsSUFBTCxHQUFVLElBQXRRLEVBQTJRLEtBQUtvUSxXQUFMLEVBQTNRO0FBQThSLEtBQWwvQztBQUFtL0NsVSxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxVQUFHLEVBQUUsS0FBS21VLE9BQUwsSUFBYyxLQUFLSCxRQUFuQixJQUE2QixLQUFLQyxRQUFwQyxDQUFILEVBQWlEO0FBQUMsYUFBS0wsZ0JBQUwsSUFBdUIsS0FBS25RLEtBQUwsRUFBdkIsRUFBb0MsS0FBS3VRLFFBQUwsR0FBYyxDQUFDLENBQW5EO0FBQXFELFlBQUk1Z0IsQ0FBQyxHQUFDLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCdUQsU0FBeEI7QUFBQSxZQUFrQ2hSLENBQUMsR0FBQ21ELENBQUMsSUFBRSxjQUFZbUQsQ0FBQyxDQUFDdUcsSUFBRixDQUFPMUosQ0FBUCxDQUFmLEdBQXlCLEtBQUswUSxJQUFMLENBQVVwVSxHQUFuQyxHQUF1QzBELENBQUMsSUFBRSxLQUFLMFEsSUFBTCxDQUFVcFUsR0FBeEY7QUFBNEYsWUFBRyxLQUFLMGtCLElBQUwsR0FBVW5rQixDQUFiLEVBQWUsSUFBRyxZQUFVLEtBQUs2VCxJQUFMLENBQVVoSCxJQUF2QjtBQUE0QixjQUFHN00sQ0FBQyxLQUFHbUQsQ0FBUCxFQUFTLEtBQUtnaEIsSUFBTCxHQUFVbmtCLENBQVYsRUFBWSxLQUFLb2tCLEtBQUwsQ0FBVyxLQUFLRCxJQUFoQixDQUFaLENBQVQsS0FBZ0QsUUFBTyxLQUFLdFEsSUFBTCxDQUFVaEgsSUFBakI7QUFBdUIsaUJBQUksT0FBSjtBQUFZLG1CQUFLaVgsY0FBTCxHQUFvQixJQUFJaFUsY0FBSixDQUFtQixLQUFLK0QsSUFBTCxDQUFVcFUsR0FBN0IsRUFBaUM2RyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLHFCQUFLZ2hCLElBQUwsR0FBVWhoQixDQUFWLEVBQVksS0FBS2loQixLQUFMLENBQVdqaEIsQ0FBWCxDQUFaO0FBQTBCLGVBQTlDLEVBQStDLElBQS9DLENBQWpDLEVBQXNGbUQsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxxQkFBS3VXLE1BQUw7QUFBYyxlQUFqQyxFQUFrQyxJQUFsQyxDQUF0RixDQUFwQjtBQUFuQztBQUE1RSxlQUF1USxLQUFLRCxLQUFMLENBQVcsS0FBS0QsSUFBaEI7QUFBc0I7QUFBQyxLQUFuL0Q7QUFBby9EWCxZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLeFMsU0FBTCxDQUFlMEMsUUFBZixDQUF3QixxQkFBeEI7QUFBK0MsS0FBdmpFO0FBQXdqRTBRLFNBQUssRUFBQyxlQUFTamhCLENBQVQsRUFBVztBQUFDLFdBQUt3Z0IsZ0JBQUwsQ0FBc0IzSSxPQUF0QixDQUE4QixLQUFLMUwsS0FBTCxHQUFXaEosQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixvQkFBcEIsRUFBMENnRyxJQUExQyxDQUErQztBQUFDL0ssV0FBRyxFQUFDeEw7QUFBTCxPQUEvQyxFQUF3RHFJLEdBQXhELENBQTREO0FBQUMwTixlQUFPLEVBQUM7QUFBVCxPQUE1RCxDQUF6QyxHQUFzSCxLQUFLb0wsYUFBTCxFQUF0SCxFQUEySSxLQUFLVCxLQUFMLEdBQVcsSUFBSXRYLFVBQUosQ0FBZSxLQUFLK0MsS0FBTCxDQUFXLENBQVgsQ0FBZixFQUE2QmhKLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQ21ELENBQUMsQ0FBQytCLEdBQVI7QUFBWSxhQUFLNGIsY0FBTCxJQUFxQixLQUFLaUQsUUFBMUIsS0FBcUMsS0FBS0csT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLSCxRQUFMLEdBQWMsQ0FBQyxDQUEvQixFQUFpQyxLQUFLdkUsV0FBTCxHQUFpQjtBQUFDMVksZUFBSyxFQUFDOUcsQ0FBQyxDQUFDb04sWUFBVDtBQUFzQjlGLGdCQUFNLEVBQUN0SCxDQUFDLENBQUN5TztBQUEvQixTQUFsRCxFQUFnRyxLQUFLMFUsTUFBTCxFQUFoRyxFQUE4RyxLQUFLdFMsSUFBTCxFQUFuSjtBQUFnSyxPQUFoTSxFQUFpTSxJQUFqTSxDQUE3QixFQUFvT3ZLLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBS3VXLE1BQUw7QUFBYyxPQUFqQyxFQUFrQyxJQUFsQyxDQUFwTyxFQUE0UTtBQUFDM1csY0FBTSxFQUFDLEtBQUttRyxJQUFMLENBQVVwRyxPQUFWLENBQWtCK0Q7QUFBMUIsT0FBNVEsQ0FBdEo7QUFBMmMsS0FBcmhGO0FBQXNoRjZTLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtILE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS0gsUUFBTCxHQUFjLENBQUMsQ0FBL0IsRUFBaUMsS0FBSy9TLFNBQUwsQ0FBZTBDLFFBQWYsQ0FBd0Isb0JBQXhCLENBQWpDLEVBQStFLEtBQUtwRSxLQUFMLElBQVksS0FBS0EsS0FBTCxDQUFXd0IsSUFBWCxFQUEzRixFQUE2RyxLQUFLNlMsZ0JBQUwsQ0FBc0J2akIsTUFBdEIsQ0FBNkJrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG9CQUFwQixDQUE3QixDQUE3RyxFQUFxTCxLQUFLN0MsSUFBTCxFQUFyTDtBQUFpTSxLQUF6dUY7QUFBMHVGeVQsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFVBQUdyUCxPQUFPLENBQUNxSyxTQUFSLElBQW1CLEtBQUt6TCxJQUFMLENBQVVwRyxPQUFWLENBQWtCc0QsT0FBeEMsRUFBZ0Q7QUFBQyxhQUFLa1QsV0FBTDs7QUFBbUIsWUFBSTlnQixDQUFDLEdBQUMsS0FBSzBRLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQkssU0FBaEM7QUFBMEMsYUFBSzdDLE1BQUwsR0FBWU4sVUFBVSxDQUFDdkgsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFLaUQsT0FBTCxDQUFhcUQsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCQyxNQUF0QixDQUE2QmxSLENBQUMsQ0FBQzBOLElBQUYsSUFBUSxDQUFyQyxFQUF1QyxDQUF2QztBQUEwQyxTQUE3RCxFQUE4RCxJQUE5RCxDQUFELEVBQXFFLEtBQUtnRCxJQUFMLENBQVVwRyxPQUFWLENBQWtCdUUsWUFBbEIsSUFBZ0MsQ0FBckcsQ0FBdEI7QUFBOEg7QUFBQyxLQUFoL0Y7QUFBaS9GbkIsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS29ULFdBQUw7O0FBQW1CLFVBQUk5Z0IsQ0FBQyxHQUFDLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJLLFNBQWhDO0FBQTBDLFdBQUsySixPQUFMLENBQWF2RyxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JuRCxLQUF0QixDQUE0QjlOLENBQUMsQ0FBQzhOLEtBQTlCLEVBQXFDb0QsTUFBckMsQ0FBNENsUixDQUFDLENBQUMwTixJQUE5QyxFQUFtRCxDQUFuRDtBQUFzRCxLQUFwbkc7QUFBcW5Hb1QsZUFBVyxFQUFDLHVCQUFVO0FBQUMsV0FBSzlWLE1BQUwsS0FBY1UsWUFBWSxDQUFDLEtBQUtWLE1BQU4sQ0FBWixFQUEwQixLQUFLQSxNQUFMLEdBQVksSUFBcEQ7QUFBMEQsS0FBdHNHO0FBQXVzR2dWLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUcsS0FBS3JDLGNBQVIsRUFBdUI7QUFBQyxZQUFJM2QsQ0FBQyxHQUFDLGlCQUFlNlIsVUFBVSxDQUFDeUIsWUFBaEM7O0FBQTZDLFlBQUcsS0FBS3FLLGNBQUwsQ0FBb0J0VixHQUFwQixDQUF3QjtBQUFDMUUsZUFBSyxFQUFDa08sVUFBVSxDQUFDNkwsS0FBWCxDQUFpQkMsY0FBakIsQ0FBZ0MzZCxDQUFDLEdBQUMsT0FBRCxHQUFTLFFBQTFDLENBQVA7QUFBMkRtRSxnQkFBTSxFQUFDME4sVUFBVSxDQUFDNkwsS0FBWCxDQUFpQkMsY0FBakIsQ0FBZ0MzZCxDQUFDLEdBQUMsUUFBRCxHQUFVLE9BQTNDO0FBQWxFLFNBQXhCLEdBQWdKLEtBQUsyZCxjQUFMLENBQW9CdFYsR0FBcEIsQ0FBd0I7QUFBQzRLLGFBQUcsRUFBQ2pULENBQUMsR0FBQyxDQUFELEdBQUc2UixVQUFVLENBQUM2TCxLQUFYLENBQWlCQyxjQUFqQixDQUFnQ2hhLEtBQWhDLElBQXVDLEtBQUtxUSxTQUFMLEdBQWUsQ0FBdEQsQ0FBVDtBQUFrRTlGLGNBQUksRUFBQ2xPLENBQUMsR0FBQzZSLFVBQVUsQ0FBQzZMLEtBQVgsQ0FBaUJDLGNBQWpCLENBQWdDaGEsS0FBaEMsSUFBdUMsS0FBS3FRLFNBQUwsR0FBZSxDQUF0RCxDQUFELEdBQTBEO0FBQWxJLFNBQXhCLENBQWhKLEVBQThTLEtBQUt3TSxnQkFBdFQsRUFBdVU7QUFBQyxjQUFJM2pCLENBQUMsR0FBQ2dWLFVBQVUsQ0FBQzZMLEtBQVgsQ0FBaUI3UCxTQUF2Qjs7QUFBaUMsY0FBRyxLQUFLQSxTQUFMLENBQWV4RixHQUFmLENBQW1CO0FBQUMxRSxpQkFBSyxFQUFDOUcsQ0FBQyxDQUFDOEcsS0FBVDtBQUFlUSxrQkFBTSxFQUFDdEgsQ0FBQyxDQUFDc0gsTUFBeEI7QUFBK0IsMEJBQWFpRCxJQUFJLENBQUN3WSxLQUFMLENBQVcsQ0FBQyxFQUFELEdBQUkvaUIsQ0FBQyxDQUFDc0gsTUFBakIsQ0FBNUM7QUFBcUUsMkJBQWNpRCxJQUFJLENBQUN3WSxLQUFMLENBQVcsQ0FBQyxFQUFELEdBQUkvaUIsQ0FBQyxDQUFDOEcsS0FBakIsQ0FBbkY7QUFBMkcsNkJBQWdCLENBQTNIO0FBQTZILDRCQUFlO0FBQTVJLFdBQW5CLEdBQW1LLEtBQUswWSxXQUEzSyxFQUF1TDtBQUFDLGdCQUFJbFgsQ0FBSjtBQUFBLGdCQUFNMEIsQ0FBQyxHQUFDO0FBQUNsRCxtQkFBSyxFQUFDOUcsQ0FBQyxDQUFDOEcsS0FBVDtBQUFlUSxvQkFBTSxFQUFDdEgsQ0FBQyxDQUFDc0g7QUFBeEIsYUFBUjtBQUFBLGdCQUF3QzJDLENBQUMsR0FBQ00sSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsQ0FBQ2xELEtBQVgsRUFBaUJrRCxDQUFDLENBQUMxQyxNQUFuQixDQUExQztBQUFBLGdCQUFxRTRDLENBQUMsR0FBQzVELENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWSxLQUFLZ1osV0FBakIsQ0FBdkU7O0FBQXFHLGdCQUFHdFYsQ0FBQyxDQUFDcEQsS0FBRixHQUFRa0QsQ0FBQyxDQUFDbEQsS0FBVixJQUFpQm9ELENBQUMsQ0FBQzVDLE1BQUYsR0FBUzBDLENBQUMsQ0FBQzFDLE1BQS9CLEVBQXNDO0FBQUMsa0JBQUk2QyxDQUFDLEdBQUMsQ0FBTjtBQUFBLGtCQUFRQyxDQUFDLEdBQUMsQ0FBVjtBQUFZLGVBQUM5QixDQUFDLEdBQUN1QixHQUFHLENBQUNDLE1BQUosQ0FBV0UsQ0FBWCxFQUFhRSxDQUFiLENBQUgsRUFBb0JwRCxLQUFwQixHQUEwQmtELENBQUMsQ0FBQ2xELEtBQTVCLEtBQW9DcUQsQ0FBQyxHQUFDSCxDQUFDLENBQUNsRCxLQUFGLEdBQVF3QixDQUFDLENBQUN4QixLQUFoRCxHQUF1RHdCLENBQUMsQ0FBQ2hCLE1BQUYsR0FBUzBDLENBQUMsQ0FBQzFDLE1BQVgsS0FBb0I4QyxDQUFDLEdBQUNKLENBQUMsQ0FBQzFDLE1BQUYsR0FBU2dCLENBQUMsQ0FBQ2hCLE1BQWpDLENBQXZEO0FBQWdHLGtCQUFJK0MsQ0FBQyxHQUFDRSxJQUFJLENBQUNFLEdBQUwsQ0FBU04sQ0FBVCxFQUFXQyxDQUFYLENBQU47QUFBb0Isa0JBQUVDLENBQUYsS0FBTS9CLENBQUMsQ0FBQ3hCLEtBQUYsSUFBU3VELENBQVQsRUFBVy9CLENBQUMsQ0FBQ2hCLE1BQUYsSUFBVStDLENBQTNCLEdBQThCL0QsQ0FBQyxDQUFDd0csSUFBRixDQUFPLGVBQWUxQixLQUFmLENBQXFCLEdBQXJCLENBQVAsRUFBaUMsVUFBU2pJLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDc0ksaUJBQUMsQ0FBQ3RJLENBQUQsQ0FBRCxHQUFLdUssSUFBSSxDQUFDd1ksS0FBTCxDQUFXemEsQ0FBQyxDQUFDdEksQ0FBRCxDQUFaLENBQUw7QUFBc0IsZUFBckUsQ0FBOUI7QUFBcUcsYUFBNVEsTUFBaVJzSSxDQUFDLEdBQUN1QixHQUFHLENBQUNDLE1BQUosQ0FBVyxLQUFLMFYsV0FBaEIsRUFBNEJ0VixDQUFDLENBQUNwRCxLQUFGLEdBQVFrRCxDQUFDLENBQUNsRCxLQUFWLElBQWlCb0QsQ0FBQyxDQUFDNUMsTUFBRixHQUFTMEMsQ0FBQyxDQUFDMUMsTUFBNUIsR0FBbUM7QUFBQ1IsbUJBQUssRUFBQ21ELENBQVA7QUFBUzNDLG9CQUFNLEVBQUMyQztBQUFoQixhQUFuQyxHQUFzREQsQ0FBbEYsQ0FBRjs7QUFBdUYsZ0JBQUlNLENBQUMsR0FBQ0MsSUFBSSxDQUFDd1ksS0FBTCxDQUFXLEtBQUcvWSxDQUFDLENBQUNsRCxLQUFMLEdBQVcsS0FBR3dCLENBQUMsQ0FBQ3hCLEtBQTNCLENBQU47QUFBQSxnQkFBd0NtVyxDQUFDLEdBQUMxUyxJQUFJLENBQUN3WSxLQUFMLENBQVcsS0FBRy9ZLENBQUMsQ0FBQzFDLE1BQUwsR0FBWSxLQUFHZ0IsQ0FBQyxDQUFDaEIsTUFBNUIsQ0FBMUM7QUFBOEUsaUJBQUtnSSxLQUFMLENBQVd1TyxVQUFYLENBQXNCLE9BQXRCLEVBQStCclMsR0FBL0IsQ0FBbUNsRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVk4QixDQUFaLEVBQWM7QUFBQzhOLGlCQUFHLEVBQUM2RyxDQUFMO0FBQU81TCxrQkFBSSxFQUFDL0c7QUFBWixhQUFkLENBQW5DO0FBQWtFO0FBQUM7QUFBQztBQUFDO0FBQS81SSxHQUE3QjtBQUErN0ksTUFBSTRLLEVBQUUsR0FBQztBQUFDcVAsVUFBTSxFQUFDLENBQUMsV0FBRCxFQUFhLFNBQWIsRUFBdUIsUUFBdkIsQ0FBUjtBQUF5Q3hJLE9BQUcsRUFBQyxDQUFDLENBQTlDO0FBQWdEeUksNkJBQXlCLEVBQUMsQ0FBQyxxQkFBRCxFQUF1QixhQUF2QixFQUFxQywwQkFBckMsRUFBZ0UsMkNBQWhFLEVBQTZHN2YsSUFBN0csQ0FBa0gsSUFBbEgsQ0FBMUU7QUFBa002SCxjQUFVLEVBQUMsb0JBQVNySixDQUFULEVBQVc7QUFBQ21ELE9BQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLeVgsTUFBWixFQUFtQmplLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS0EsQ0FBTCxFQUFRd00sVUFBUjtBQUFxQixPQUEzQyxFQUE0QyxJQUE1QyxDQUFuQixHQUFzRXNILE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXFVLFFBQWYsQ0FBd0IsNENBQXhCLENBQXRFO0FBQTRJLEtBQXJXO0FBQXNXekUsT0FBRyxFQUFDLGFBQVM5TCxDQUFULEVBQVc7QUFBQyxXQUFLNFksR0FBTCxLQUFXakksTUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQixrQkFBZ0IsS0FBSytILEdBQWhELEdBQXFEeEksT0FBTyxDQUFDbFUsT0FBUixDQUFnQjJVLFdBQWhCLENBQTRCLG1CQUFpQixLQUFLK0gsR0FBbEQsQ0FBaEUsR0FBd0hqSSxNQUFNLENBQUN6VSxPQUFQLENBQWVxVSxRQUFmLENBQXdCLGtCQUFnQnZRLENBQXhDLENBQXhILEVBQW1Lb1EsT0FBTyxDQUFDbFUsT0FBUixDQUFnQnFVLFFBQWhCLENBQXlCLG1CQUFpQnZRLENBQTFDLENBQW5LLEVBQWdOLEtBQUtzaEIsUUFBTCxJQUFlLEtBQUsxSSxHQUFwQixJQUF5QixLQUFLQSxHQUFMLEtBQVc1WSxDQUFwQyxLQUF3QyxLQUFLLEtBQUs0WSxHQUFWLEVBQWVqRixPQUFmLElBQXlCLEtBQUszVCxDQUFMLEVBQVE4VSxNQUFSLEVBQXpCLEVBQTBDL0MsRUFBRSxDQUFDL1IsQ0FBRCxDQUFGLENBQU0wTixJQUFOLEVBQWxGLENBQWhOLEVBQWdULEtBQUtrTCxHQUFMLEdBQVM1WSxDQUF6VDtBQUEyVCxLQUFqckI7QUFBa3JCc1MsbUJBQWUsRUFBQywyQkFBVTtBQUFDeEssYUFBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLeUUsSUFBTCxFQUFyQjtBQUFpQyxLQUE5dUI7QUFBK3VCb0gsVUFBTSxFQUFDLGtCQUFVO0FBQUMzUixPQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBS3lYLE1BQVosRUFBbUJqZSxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDa1YsVUFBRSxDQUFDbFYsQ0FBRCxDQUFGLENBQU1BLENBQUMsS0FBRyxLQUFLK2IsR0FBVCxHQUFhLFFBQWIsR0FBc0IsU0FBNUI7QUFBeUMsT0FBL0QsRUFBZ0UsSUFBaEUsQ0FBbkIsR0FBMEYsS0FBSzBJLFFBQUwsR0FBYyxDQUFDLENBQXpHO0FBQTJHLEtBQTUyQjtBQUE2MkIzTixXQUFPLEVBQUMsbUJBQVU7QUFBQ3hRLE9BQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLeVgsTUFBWixFQUFtQmplLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixVQUFFLENBQUNsVixDQUFELENBQUYsQ0FBTThXLE9BQU47QUFBZ0IsT0FBdEMsRUFBdUMsSUFBdkMsQ0FBbkIsR0FBaUUsS0FBSzJOLFFBQUwsR0FBYyxDQUFDLENBQWhGO0FBQWtGLEtBQWw5QjtBQUFtOUJ2TyxrQkFBYyxFQUFDLHdCQUFTL1MsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixRQUFFLENBQUMsS0FBSzZHLEdBQU4sQ0FBRixDQUFhN0YsY0FBYixDQUE0Qi9TLENBQTVCLEVBQThCbkQsQ0FBOUI7QUFBaUMsS0FBamhDO0FBQWtoQzZRLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixRQUFFLENBQUMsS0FBSzZHLEdBQU4sQ0FBRixDQUFhbEwsSUFBYixDQUFrQjFOLENBQWxCLEVBQW9CbkQsQ0FBcEI7QUFBdUIsS0FBNWpDO0FBQTZqQzhRLFFBQUksRUFBQyxjQUFTM04sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixRQUFFLENBQUMsS0FBSzZHLEdBQU4sQ0FBRixDQUFhakwsSUFBYixDQUFrQjNOLENBQWxCLEVBQW9CbkQsQ0FBcEI7QUFBdUIsS0FBdm1DO0FBQXdtQ3lYLFNBQUssRUFBQyxpQkFBVTtBQUFDblIsT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUt5WCxNQUFaLEVBQW1CamUsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ2tWLFVBQUUsQ0FBQ2xWLENBQUQsQ0FBRixDQUFNeVgsS0FBTjtBQUFjLE9BQXBDLEVBQXFDLElBQXJDLENBQW5CO0FBQStELEtBQXhyQztBQUF5ckN4QixVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFJOVMsQ0FBQyxHQUFDd1EsS0FBSyxDQUFDQyxJQUFaO0FBQWlCelEsT0FBQyxJQUFFLEtBQUs4TCxHQUFMLENBQVM5TCxDQUFDLENBQUM0WSxHQUFYLENBQUg7QUFBbUI7QUFBL3VDLEdBQVA7QUFBd3ZDLFNBQU83RyxFQUFFLENBQUN3UCxTQUFILEdBQWE7QUFBQ2xZLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSCxLQUFMLElBQWEsS0FBS21SLFdBQUwsR0FBaUIsQ0FBQyxDQUEvQjtBQUFpQyxLQUF4RDtBQUF5RG5SLFNBQUssRUFBQyxpQkFBVTtBQUFDTSxZQUFNLENBQUNlLElBQVAsQ0FBWXpVLE1BQVosQ0FBbUIsS0FBSzhnQixTQUFMLEdBQWU1YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGtFQUFwQixFQUF3RnRULE1BQXhGLENBQStGa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0N0VCxNQUF0QyxDQUE2Q2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGdFQsTUFBL0YsQ0FBc0drRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUEvRixDQUFsQyxFQUFxUnRULE1BQXJSLENBQTRSLEtBQUtraEIsS0FBTCxHQUFXaGIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiwwREFBcEIsRUFBZ0Z0VCxNQUFoRixDQUF1RmtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDdFQsTUFBdEMsQ0FBNkNrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRnRULE1BQS9GLENBQXNHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBdkYsQ0FBdlMsRUFBa2hCdFQsTUFBbGhCLENBQXloQixLQUFLd2tCLE1BQUwsR0FBWXRlLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsNkJBQXBCLEVBQW1EdFQsTUFBbkQsQ0FBMERrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUExRCxFQUFzR3RULE1BQXRHLENBQTZHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUE3RyxDQUFyaUIsR0FBeXJCM00sT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixJQUFZLENBQXhCLElBQTJCLEtBQUt3WixTQUFMLENBQWVyakIsR0FBZixDQUFtQixLQUFLeWpCLEtBQXhCLEVBQStCempCLEdBQS9CLENBQW1DLEtBQUsrbUIsTUFBeEMsRUFBZ0Q5VCxJQUFoRCxFQUFwdEIsRUFBMndCLEtBQUs4VCxNQUFMLENBQVl2YixFQUFaLENBQWUsT0FBZixFQUF1Qi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ2xELGNBQUYsSUFBbUI2VCxNQUFNLENBQUNoRCxJQUFQLEVBQW5CO0FBQWlDLE9BQXJELEVBQXNELElBQXRELENBQXZCLENBQTN3QixFQUErMUIsS0FBS29RLFNBQUwsQ0FBZTdYLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMEIvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDMlEsY0FBTSxDQUFDNkQsUUFBUCxJQUFrQixLQUFLa04sWUFBTCxDQUFrQjFoQixDQUFsQixDQUFsQjtBQUF1QyxPQUEzRCxFQUE0RCxJQUE1RCxDQUExQixDQUEvMUIsRUFBNDdCLEtBQUttZSxLQUFMLENBQVdqWSxFQUFYLENBQWMsT0FBZCxFQUFzQi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMyUSxjQUFNLENBQUNnRSxJQUFQLElBQWMsS0FBSytNLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBZDtBQUFtQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUF0QixDQUE1N0I7QUFBaWhDLEtBQTNsQztBQUE0bEM4VSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLM1UsSUFBTDtBQUFZLEtBQTFuQztBQUEybkN3VCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLZ08sTUFBTDtBQUFjLEtBQTVwQztBQUE2cENyTixTQUFLLEVBQUMsaUJBQVU7QUFBQzNELFlBQU0sQ0FBQ2MsTUFBUCxDQUFjMUYsS0FBZCxDQUFvQixjQUFwQixHQUFvQyxLQUFLNlYsRUFBTCxHQUFRLENBQUMsQ0FBN0MsRUFBK0MsS0FBS0MsRUFBTCxHQUFRLENBQUMsQ0FBeEQsRUFBMEQsS0FBS0wsV0FBTCxHQUFpQixDQUFDLENBQTVFLEVBQThFLEtBQUtNLGFBQUwsRUFBOUUsRUFBbUcsS0FBS0MsYUFBTCxFQUFuRztBQUF3SCxLQUF0eUM7QUFBdXlDRCxpQkFBYSxFQUFDLHlCQUFVO0FBQUMsV0FBSy9ELFNBQUwsQ0FBZXJqQixHQUFmLENBQW1CLEtBQUt5akIsS0FBeEIsRUFBK0JsTixJQUEvQixDQUFvQyxDQUFDLENBQXJDLEVBQXdDeUosVUFBeEMsQ0FBbUQsT0FBbkQ7QUFBNEQsS0FBNTNDO0FBQTYzQ3ZhLFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUs2aEIsaUJBQUwsS0FBeUIsS0FBS0wsTUFBTCxJQUFjaFIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjekwsRUFBZCxDQUFpQixTQUFqQixFQUEyQixlQUEzQixFQUEyQyxLQUFLOGIsaUJBQUwsR0FBdUI3ZSxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS3NYLFVBQWIsRUFBd0IsSUFBeEIsQ0FBbEUsQ0FBZCxFQUErR25hLE9BQU8sQ0FBQ21CLFdBQVIsS0FBc0IwSCxNQUFNLENBQUN6VSxPQUFQLENBQWVnSyxFQUFmLENBQWtCLFlBQWxCLEVBQStCLEtBQUtnYyxZQUFMLEdBQWtCL2UsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUsrQyxJQUFiLEVBQWtCLElBQWxCLENBQWpELEVBQTBFeEgsRUFBMUUsQ0FBNkUsWUFBN0UsRUFBMEYsS0FBS2ljLFlBQUwsR0FBa0JoZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS2dELElBQWIsRUFBa0IsSUFBbEIsQ0FBNUcsR0FBcUlnRCxNQUFNLENBQUN6VSxPQUFQLENBQWVnSyxFQUFmLENBQWtCLFdBQWxCLEVBQThCLEtBQUtrYyxpQkFBTCxHQUF1QmpmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQ21ELENBQUMsQ0FBQ2diLEtBQVI7QUFBQSxZQUFjN1YsQ0FBQyxHQUFDbkYsQ0FBQyxDQUFDaWIsS0FBbEI7QUFBd0IsYUFBS29ILG1CQUFMLElBQTBCbGQsQ0FBQyxLQUFHLEtBQUswYyxFQUFULElBQWFobEIsQ0FBQyxLQUFHLEtBQUsra0IsRUFBaEQsS0FBcUQsS0FBS0EsRUFBTCxHQUFRL2tCLENBQVIsRUFBVSxLQUFLZ2xCLEVBQUwsR0FBUTFjLENBQWxCLEVBQW9CLEtBQUt1SSxJQUFMLEVBQXBCLEVBQWdDLEtBQUs0VSxVQUFMLEVBQXJGO0FBQXdHLE9BQXBKLEVBQXFKLElBQXJKLENBQXJELENBQXJJLEVBQXNWM1IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjekwsRUFBZCxDQUFpQixXQUFqQixFQUE2QixlQUE3QixFQUE2QyxLQUFLcWMsbUJBQUwsR0FBeUJwZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSytXLFlBQWIsRUFBMEIsSUFBMUIsQ0FBdEUsRUFBdUd4YixFQUF2RyxDQUEwRyxZQUExRyxFQUF1SCxlQUF2SCxFQUF1SSxLQUFLc2Msb0JBQUwsR0FBMEJyZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS29YLGFBQWIsRUFBMkIsSUFBM0IsQ0FBakssRUFBbU03YixFQUFuTSxDQUFzTSxZQUF0TSxFQUFtTixlQUFuTixFQUFtTyxLQUFLdWMsb0JBQUwsR0FBMEJ0ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSytYLGFBQWIsRUFBMkIsSUFBM0IsQ0FBN1AsQ0FBdFYsRUFBcW5CL1IsTUFBTSxDQUFDelUsT0FBUCxDQUFlZ0ssRUFBZixDQUFrQixZQUFsQixFQUErQixVQUEvQixFQUEwQyxLQUFLeWMsd0JBQUwsR0FBOEJ4ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS2lZLGlCQUFiLEVBQStCLElBQS9CLENBQXhFLEVBQThHMWMsRUFBOUcsQ0FBaUgsWUFBakgsRUFBOEgsVUFBOUgsRUFBeUksS0FBSzJjLHdCQUFMLEdBQThCMWYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUttWSxpQkFBYixFQUErQixJQUEvQixDQUF2SyxDQUFybkIsRUFBazBCM2YsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU0SSxFQUFWLENBQWEsUUFBYixFQUFzQixLQUFLNmMsZ0JBQUwsR0FBc0I1ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSzhILFNBQWIsRUFBdUIsSUFBdkIsQ0FBNUMsQ0FBeDFCLENBQXhJO0FBQTRpQyxLQUF6N0U7QUFBMDdFa1AsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS0ssaUJBQUwsS0FBeUJyUixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNEIsZUFBNUIsRUFBNEMsS0FBS3dQLGlCQUFqRCxHQUFvRSxLQUFLQSxpQkFBTCxHQUF1QixJQUEzRixFQUFnRyxLQUFLRSxZQUFMLEtBQW9CdlIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixZQUFuQixFQUFnQyxLQUFLMFAsWUFBckMsRUFBbUQxUCxHQUFuRCxDQUF1RCxZQUF2RCxFQUFvRSxLQUFLMlAsWUFBekUsRUFBdUYzUCxHQUF2RixDQUEyRixXQUEzRixFQUF1RyxLQUFLNFAsaUJBQTVHLEdBQStIelIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLGVBQTlCLEVBQThDLEtBQUsrUCxtQkFBbkQsRUFBd0UvUCxHQUF4RSxDQUE0RSxZQUE1RSxFQUF5RixlQUF6RixFQUF5RyxLQUFLZ1Esb0JBQTlHLEVBQW9JaFEsR0FBcEksQ0FBd0ksWUFBeEksRUFBcUosZUFBckosRUFBcUssS0FBS2lRLG9CQUExSyxDQUEvSCxFQUErVDlSLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXNXLEdBQWYsQ0FBbUIsWUFBbkIsRUFBZ0MsVUFBaEMsRUFBMkMsS0FBS21RLHdCQUFoRCxFQUEwRW5RLEdBQTFFLENBQThFLFlBQTlFLEVBQTJGLFVBQTNGLEVBQXNHLEtBQUtxUSx3QkFBM0csQ0FBL1QsRUFBb2MxZixDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVWtWLEdBQVYsQ0FBYyxRQUFkLEVBQXVCLEtBQUt1USxnQkFBNUIsQ0FBcGMsRUFBa2YsS0FBS2IsWUFBTCxHQUFrQixJQUF4aEIsQ0FBekg7QUFBd3BCLEtBQXBtRztBQUFxbUduUCxrQkFBYyxFQUFDLHdCQUFTL1MsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQ3FMLEtBQUssQ0FBQ0MsSUFBWjs7QUFBaUIsVUFBR3RMLENBQUgsRUFBSztBQUFDLFlBQUkwQixDQUFDLEdBQUM4SixNQUFNLENBQUN6VSxPQUFQLENBQWVvZCxFQUFmLENBQWtCLFVBQWxCLENBQU47QUFBb0N6UyxTQUFDLElBQUU4SixNQUFNLENBQUN6VSxPQUFQLENBQWV3UixJQUFmLEVBQUg7O0FBQXlCLFlBQUk1RyxDQUFDLEdBQUMsS0FBS2lYLFNBQUwsQ0FBZXhILElBQWYsQ0FBb0IsT0FBcEIsQ0FBTjs7QUFBbUMsYUFBS3dILFNBQUwsQ0FBZXJELFVBQWYsQ0FBMEIsT0FBMUI7O0FBQW1DLFlBQUkzVCxDQUFDLEdBQUM2UyxRQUFRLENBQUMsS0FBS21FLFNBQUwsQ0FBZTFWLEdBQWYsQ0FBbUIsWUFBbkIsQ0FBRCxDQUFkO0FBQWlELGFBQUswVixTQUFMLENBQWV4SCxJQUFmLENBQW9CO0FBQUMzVixlQUFLLEVBQUNrRztBQUFQLFNBQXBCLEdBQStCRCxDQUFDLElBQUU4SixNQUFNLENBQUN6VSxPQUFQLENBQWV5UixJQUFmLEVBQWxDOztBQUF3RCxZQUFJM0csQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDa1YsV0FBRixJQUFlLENBQXJCO0FBQUEsWUFBdUJwVCxDQUFDLEdBQUMsS0FBSzhXLFNBQUwsQ0FBZXJqQixHQUFmLENBQW1CLEtBQUt5akIsS0FBeEIsQ0FBekI7QUFBQSxZQUF3RGpYLENBQUMsR0FBQztBQUFDLHdCQUFhSCxDQUFDLEdBQUMsS0FBR0M7QUFBbkIsU0FBMUQ7QUFBQSxZQUFnRkcsQ0FBQyxHQUFDLGFBQVdoRSxDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCMlQsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ0MsT0FBaEMsQ0FBd0NDLElBQXBELElBQTBELENBQW5LOztBQUFxSyxhQUFLOEYsT0FBTCxLQUFlck0sQ0FBQyxHQUFDLENBQWpCLEdBQW9CRixDQUFDLENBQUNnSyxJQUFGLENBQU8sQ0FBQyxDQUFSLEVBQVdrUCxPQUFYLENBQW1CalosQ0FBbkIsRUFBcUJDLENBQXJCLEVBQXVCbkgsQ0FBdkIsQ0FBcEIsRUFBOEMsS0FBSytkLFNBQUwsQ0FBZSxDQUFDcE4sTUFBTSxDQUFDNEQsV0FBUCxLQUFxQixRQUFyQixHQUE4QixLQUEvQixJQUFzQyxPQUFyRCxFQUE4RCxrQkFBOUQsQ0FBOUMsRUFBZ0ksS0FBSzRKLEtBQUwsQ0FBVyxDQUFDeE4sTUFBTSxDQUFDK0QsT0FBUCxLQUFpQixRQUFqQixHQUEwQixLQUEzQixJQUFrQyxPQUE3QyxFQUFzRCxrQkFBdEQsQ0FBaEksRUFBME16TixDQUFDLENBQUMsQ0FBQzlCLENBQUMsQ0FBQ3VRLE1BQUYsR0FBUyxDQUFULEdBQVcsS0FBWCxHQUFpQixRQUFsQixJQUE0QixPQUE3QixDQUFELENBQXVDLGdCQUF2QyxDQUExTSxFQUFtUTFWLENBQUMsSUFBRUEsQ0FBQyxFQUF2UTtBQUEwUSxPQUFqcUIsTUFBc3FCQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQWgwSDtBQUFpMEh5UyxhQUFTLEVBQUMscUJBQVU7QUFBQyxXQUFLK08sV0FBTCxHQUFpQnJlLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVMGxCLFVBQVYsRUFBakI7QUFBd0MsS0FBOTNIO0FBQSszSHRCLGdCQUFZLEVBQUMsc0JBQVMxaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUlwTSxDQUFDLEdBQUMsS0FBS29tQixhQUFMLENBQW1CampCLENBQW5CLENBQU47QUFBQSxZQUE0Qm1GLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JsSixDQUFwQixDQUE5QjtBQUFBLFlBQXFEZ0ssQ0FBQyxHQUFDLENBQUMsQ0FBQ2hLLENBQUYsSUFBSzhULE1BQU0sQ0FBQyxRQUFNeEwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHdEksQ0FBQyxLQUFHLEtBQUtxbUIsYUFBVCxJQUF3QnJjLENBQUMsS0FBRyxLQUFLc2MscUJBQXBDLEVBQTBELFFBQU8sS0FBS0QsYUFBTCxHQUFtQnJtQixDQUFuQixFQUFxQixLQUFLc21CLHFCQUFMLEdBQTJCdGMsQ0FBaEQsRUFBa0Q4SixNQUFNLENBQUNlLElBQVAsQ0FBWSxDQUFDN0ssQ0FBQyxHQUFDLEtBQUQsR0FBTyxRQUFULElBQW1CLE9BQS9CLEVBQXdDLHVCQUF4QyxDQUFsRCxFQUFtSGhLLENBQTFIO0FBQTZILGVBQUksVUFBSjtBQUFlOFQsa0JBQU0sQ0FBQ2UsSUFBUCxDQUFZbkIsUUFBWixDQUFxQixzQkFBckIsRUFBNkNNLFdBQTdDLENBQXlELGtCQUF6RDs7QUFBNkU7O0FBQU0sZUFBSSxNQUFKO0FBQVdGLGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsa0JBQXJCLEVBQXlDTSxXQUF6QyxDQUFxRCxzQkFBckQ7O0FBQTFPO0FBQXdUO0FBQUMsS0FBbDNJO0FBQW0zSWtSLGlCQUFhLEVBQUMsdUJBQVMvaEIsQ0FBVCxFQUFXO0FBQUMyUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS3FTLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUExL0k7QUFBMi9JakIsY0FBVSxFQUFDLG9CQUFTamlCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUNvakIsS0FBTixDQUFILEVBQWdCLElBQUcsTUFBSTVTLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBbkIsRUFBMEI7QUFBQyxZQUFJeEIsQ0FBQyxHQUFDLEtBQUtvbUIsYUFBTCxDQUFtQmpqQixDQUFuQixDQUFOOztBQUE0QjJRLGNBQU0sQ0FBQzlULENBQUQsQ0FBTixJQUFZLEtBQUs2a0IsWUFBTCxDQUFrQjFoQixDQUFsQixDQUFaO0FBQWlDLE9BQXhGLE1BQTZGMlEsTUFBTSxDQUFDaEQsSUFBUDtBQUFjLEtBQTdvSjtBQUE4b0orVSxpQkFBYSxFQUFDLHVCQUFTMWlCLENBQVQsRUFBVztBQUFDLFdBQUswaEIsWUFBTCxDQUFrQjFoQixDQUFsQjtBQUFxQixLQUE3cko7QUFBOHJKaWpCLGlCQUFhLEVBQUMsdUJBQVNqakIsQ0FBVCxFQUFXO0FBQUMsT0FBQyxDQUFELEdBQUcsS0FBS3doQixXQUFSLEdBQW9CLEtBQUtBLFdBQXpCLEdBQXFDLEtBQUtBLFdBQUwsR0FBaUJyZSxDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVTBsQixVQUFWLEVBQXREO0FBQTZFLGFBQU9oakIsQ0FBQyxDQUFDZ2IsS0FBRixHQUFRckssTUFBTSxDQUFDNEMsWUFBUCxDQUFvQnJGLElBQTVCLEdBQWlDLEtBQUtzVCxXQUF0QyxHQUFrRCxLQUFHN1EsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQTNFLEdBQWlGLFVBQWpGLEdBQTRGLE1BQW5HO0FBQTBHLEtBQS80SjtBQUFnNUppZixxQkFBaUIsRUFBQywyQkFBUzVpQixDQUFULEVBQVc7QUFBQyxXQUFLcWlCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixLQUFLRCxhQUFMLENBQW1CampCLENBQW5CLENBQS9DLEVBQXFFLEtBQUttakIscUJBQUwsR0FBMkJ4UyxNQUFNLENBQUMsUUFBTWhMLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CLEtBQUttZCxhQUF6QixDQUFQLENBQU4sRUFBaEcsRUFBd0osS0FBS0csVUFBTCxFQUF4SjtBQUEwSyxLQUF4bEs7QUFBeWxLUCxxQkFBaUIsRUFBQywyQkFBUzlpQixDQUFULEVBQVc7QUFBQyxXQUFLcWlCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixDQUFDLENBQWhELEVBQWtELEtBQUtDLHFCQUFMLEdBQTJCLENBQUMsQ0FBOUUsRUFBZ0YsS0FBS2IsVUFBTCxFQUFoRjtBQUFrRyxLQUF6dEs7QUFBMHRLNVUsUUFBSSxFQUFDLGNBQVMxTixDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUs0VixRQUFSLEVBQWlCLE9BQU8sS0FBSzBNLFVBQUwsSUFBa0IsTUFBSyxlQUFhbmYsQ0FBQyxDQUFDdUcsSUFBRixDQUFPMUosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQTlCLENBQXpCO0FBQTJELFdBQUs0VixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCLEtBQUswTSxVQUFMLEVBQWpCLEVBQW1DM1IsTUFBTSxDQUFDelUsT0FBUCxDQUFlcVUsUUFBZixDQUF3Qix5QkFBeEIsRUFBbURNLFdBQW5ELENBQStELHdCQUEvRCxDQUFuQyxFQUE0SGpOLE9BQU8sQ0FBQ1csRUFBUixJQUFZWCxPQUFPLENBQUNXLEVBQVIsSUFBWSxDQUF4QixJQUEyQixLQUFLd1osU0FBTCxDQUFlcmpCLEdBQWYsQ0FBbUIsS0FBS3lqQixLQUF4QixFQUErQnpqQixHQUEvQixDQUFtQyxLQUFLK21CLE1BQXhDLEVBQWdEL1QsSUFBaEQsRUFBdkosRUFBOE0sZUFBYXZLLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzFKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUF2TztBQUEwTyxLQUFqaUw7QUFBa2lMMk4sUUFBSSxFQUFDLGNBQVMzTixDQUFULEVBQVc7QUFBQyxVQUFJbkQsQ0FBQyxHQUFDMlQsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCaEgsSUFBbEM7QUFBdUMsV0FBS2tNLFFBQUwsS0FBZ0IsQ0FBQy9ZLENBQUQsSUFBSSxjQUFZQSxDQUFaLElBQWUsWUFBVUEsQ0FBN0MsTUFBa0QsS0FBSytZLFFBQUwsR0FBYyxDQUFDLENBQWYsRUFBaUJqRixNQUFNLENBQUN6VSxPQUFQLENBQWUyVSxXQUFmLENBQTJCLHlCQUEzQixFQUFzRE4sUUFBdEQsQ0FBK0Qsd0JBQS9ELENBQW5FLEdBQTZKLGVBQWFwTixDQUFDLENBQUN1RyxJQUFGLENBQU8xSixDQUFQLENBQWIsSUFBd0JBLENBQUMsRUFBdEw7QUFBeUwsS0FBbnhMO0FBQW94THFqQixjQUFVLEVBQUMsc0JBQVU7QUFBQ3ZiLGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUIwSCxNQUFNLENBQUNjLE1BQVAsQ0FBYzFGLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBckI7QUFBeUQsS0FBbjJMO0FBQW8yTHVXLGNBQVUsRUFBQyxzQkFBVTtBQUFDeGEsYUFBTyxDQUFDbUIsV0FBUixLQUFzQixLQUFLb2EsVUFBTCxJQUFrQjFTLE1BQU0sQ0FBQ2MsTUFBUCxDQUFjM0YsR0FBZCxDQUFrQixjQUFsQixFQUFpQzNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBS2dELElBQUw7QUFBWSxPQUEvQixFQUFnQyxJQUFoQyxDQUFqQyxFQUF1RWdELE1BQU0sQ0FBQ0QsSUFBUCxHQUFZQyxNQUFNLENBQUNELElBQVAsQ0FBWXBHLE9BQVosQ0FBb0IwRSxPQUFoQyxHQUF3QyxDQUEvRyxDQUF4QztBQUEySjtBQUFyaE0sR0FBYixFQUFvaU0rQyxFQUFFLENBQUN1UixNQUFILEdBQVU7QUFBQ2phLGNBQVUsRUFBQyxzQkFBVSxDQUFFLENBQXhCO0FBQXlCeUwsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBSzNVLElBQUw7QUFBWSxLQUF2RDtBQUF3RHdULFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUtnTyxNQUFMO0FBQWMsS0FBekY7QUFBMEZ4aEIsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBSzZoQixpQkFBTCxLQUF5QixLQUFLTCxNQUFMLElBQWNoUixNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFNBQWpCLEVBQTJCLGFBQTNCLEVBQXlDLEtBQUs4YixpQkFBTCxHQUF1QjdlLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLc1gsVUFBYixFQUF3QixJQUF4QixDQUFoRSxDQUFkLEVBQTZHdFIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjekwsRUFBZCxDQUFpQixPQUFqQixFQUF5Qix1QkFBekIsRUFBaUQvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUNsRCxjQUFGLElBQW1CNlQsTUFBTSxDQUFDaEQsSUFBUCxFQUFuQjtBQUFpQyxPQUFyRCxFQUFzRCxJQUF0RCxDQUFqRCxFQUE4R3pILEVBQTlHLENBQWlILE9BQWpILEVBQXlILCtCQUF6SCxFQUF5Si9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMyUSxjQUFNLENBQUM2RCxRQUFQLElBQWtCLEtBQUtrTixZQUFMLENBQWtCMWhCLENBQWxCLENBQWxCO0FBQXVDLE9BQTNELEVBQTRELElBQTVELENBQXpKLEVBQTROa0csRUFBNU4sQ0FBK04sT0FBL04sRUFBdU8sMkJBQXZPLEVBQW1RL0MsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQzJRLGNBQU0sQ0FBQ2dFLElBQVAsSUFBYyxLQUFLK00sWUFBTCxDQUFrQjFoQixDQUFsQixDQUFkO0FBQW1DLE9BQXZELEVBQXdELElBQXhELENBQW5RLENBQTdHLEVBQSthMlEsTUFBTSxDQUFDelUsT0FBUCxDQUFlZ0ssRUFBZixDQUFrQixPQUFsQixFQUEwQix1REFBMUIsRUFBa0YsS0FBS3FkLDRCQUFMLEdBQWtDcGdCLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLNlkscUJBQWIsRUFBbUMsSUFBbkMsQ0FBcEgsQ0FBL2EsRUFBNmtCMWIsT0FBTyxDQUFDbUIsV0FBUixLQUFzQjBILE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsWUFBbEIsRUFBK0IsYUFBL0IsRUFBNkMsS0FBS2djLFlBQUwsR0FBa0IvZSxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSytDLElBQWIsRUFBa0IsSUFBbEIsQ0FBL0QsRUFBd0Z4SCxFQUF4RixDQUEyRixZQUEzRixFQUF3RyxhQUF4RyxFQUFzSCxLQUFLaWMsWUFBTCxHQUFrQmhmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLZ0QsSUFBYixFQUFrQixJQUFsQixDQUF4SSxHQUFpS2dELE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsV0FBbEIsRUFBOEIsYUFBOUIsRUFBNEMsS0FBS2tjLGlCQUFMLEdBQXVCamYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDbUQsQ0FBQyxDQUFDZ2IsS0FBUjtBQUFBLFlBQWM3VixDQUFDLEdBQUNuRixDQUFDLENBQUNpYixLQUFsQjtBQUF3QixhQUFLb0gsbUJBQUwsSUFBMEJsZCxDQUFDLEtBQUcsS0FBSzBjLEVBQVQsSUFBYWhsQixDQUFDLEtBQUcsS0FBSytrQixFQUFoRCxLQUFxRCxLQUFLQSxFQUFMLEdBQVEva0IsQ0FBUixFQUFVLEtBQUtnbEIsRUFBTCxHQUFRMWMsQ0FBbEIsRUFBb0IsS0FBS3VJLElBQUwsRUFBcEIsRUFBZ0MsS0FBSzRVLFVBQUwsRUFBckY7QUFBd0csT0FBcEosRUFBcUosSUFBckosQ0FBbkUsQ0FBakssRUFBZ1kzUixNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLHFCQUE3QixFQUFtRC9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ3dHLGVBQUYsSUFBb0IsS0FBS3ViLGFBQUwsQ0FBbUIvaEIsQ0FBbkIsQ0FBcEI7QUFBMEMsT0FBOUQsRUFBK0QsSUFBL0QsQ0FBbkQsQ0FBaFksRUFBeWYyUSxNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLFVBQTdCLEVBQXdDL0MsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxhQUFLMFksVUFBTDtBQUFrQixPQUFyQyxFQUFzQyxJQUF0QyxDQUF4QyxDQUF6ZixFQUE4a0IxUyxNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLGFBQTdCLEVBQTJDLEtBQUtxYyxtQkFBTCxHQUF5QnBmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1csWUFBYixFQUEwQixJQUExQixDQUFwRSxFQUFxR3hiLEVBQXJHLENBQXdHLFlBQXhHLEVBQXFILGFBQXJILEVBQW1JLEtBQUtzYyxvQkFBTCxHQUEwQnJmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLb1gsYUFBYixFQUEyQixJQUEzQixDQUE3SixFQUErTDdiLEVBQS9MLENBQWtNLFlBQWxNLEVBQStNLGFBQS9NLEVBQTZOLEtBQUt1YyxvQkFBTCxHQUEwQnRmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1gsYUFBYixFQUEyQixJQUEzQixDQUF2UCxDQUE5a0IsRUFBdTJCL1IsTUFBTSxDQUFDelUsT0FBUCxDQUFlZ0ssRUFBZixDQUFrQixZQUFsQixFQUErQixVQUEvQixFQUEwQyxLQUFLeWMsd0JBQUwsR0FBOEJ4ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS2lZLGlCQUFiLEVBQStCLElBQS9CLENBQXhFLEVBQThHMWMsRUFBOUcsQ0FBaUgsWUFBakgsRUFBOEgsVUFBOUgsRUFBeUksS0FBSzJjLHdCQUFMLEdBQThCMWYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUttWSxpQkFBYixFQUErQixJQUEvQixDQUF2SyxDQUF2MkIsRUFBb2pDM2YsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU0SSxFQUFWLENBQWEsUUFBYixFQUFzQixLQUFLNmMsZ0JBQUwsR0FBc0I1ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSzhILFNBQWIsRUFBdUIsSUFBdkIsQ0FBNUMsQ0FBMWtDLENBQXRtQjtBQUE0dkQsS0FBdDJEO0FBQXUyRGtQLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtLLGlCQUFMLEtBQXlCclIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFNBQWxCLEVBQTRCLGFBQTVCLEVBQTBDLEtBQUt3UCxpQkFBL0MsR0FBa0UsS0FBS0EsaUJBQUwsR0FBdUIsSUFBekYsRUFBOEZyUixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMEIsdUJBQTFCLEVBQW1EQSxHQUFuRCxDQUF1RCxPQUF2RCxFQUErRCwrQkFBL0QsRUFBZ0dBLEdBQWhHLENBQW9HLE9BQXBHLEVBQTRHLDJCQUE1RyxDQUE5RixFQUF1TzdCLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXNXLEdBQWYsQ0FBbUIsT0FBbkIsRUFBMkIsdURBQTNCLEVBQW1GLEtBQUsrUSw0QkFBeEYsQ0FBdk8sRUFBNlYsS0FBS3JCLFlBQUwsS0FBb0J2UixNQUFNLENBQUN6VSxPQUFQLENBQWVzVyxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLGFBQWhDLEVBQThDLEtBQUswUCxZQUFuRCxFQUFpRTFQLEdBQWpFLENBQXFFLFlBQXJFLEVBQWtGLGFBQWxGLEVBQWdHLEtBQUsyUCxZQUFyRyxFQUFtSDNQLEdBQW5ILENBQXVILFdBQXZILEVBQW1JLGFBQW5JLEVBQWlKLEtBQUs0UCxpQkFBdEosR0FBeUt6UixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIscUJBQTlCLENBQXpLLEVBQThON0IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLFVBQTlCLENBQTlOLEVBQXdRN0IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLHFCQUE5QixFQUFvRCxLQUFLK1AsbUJBQXpELEVBQThFL1AsR0FBOUUsQ0FBa0YsWUFBbEYsRUFBK0YsYUFBL0YsRUFBNkcsS0FBS2dRLG9CQUFsSCxFQUF3SWhRLEdBQXhJLENBQTRJLFlBQTVJLEVBQXlKLGFBQXpKLEVBQXVLLEtBQUtpUSxvQkFBNUssQ0FBeFEsRUFBMGM5UixNQUFNLENBQUN6VSxPQUFQLENBQWVzVyxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLFVBQWhDLEVBQTJDLEtBQUttUSx3QkFBaEQsRUFBMEVuUSxHQUExRSxDQUE4RSxZQUE5RSxFQUEyRixVQUEzRixFQUFzRyxLQUFLcVEsd0JBQTNHLENBQTFjLEVBQStrQjFmLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVa1YsR0FBVixDQUFjLFFBQWQsRUFBdUIsS0FBS3VRLGdCQUE1QixDQUEva0IsRUFBNm5CLEtBQUtiLFlBQUwsR0FBa0IsSUFBbnFCLENBQXRYO0FBQWdpQyxLQUF6NUY7QUFBMDVGNU4sU0FBSyxFQUFDLGlCQUFVO0FBQUMzRCxZQUFNLENBQUNjLE1BQVAsQ0FBYzFGLEtBQWQsQ0FBb0IsY0FBcEIsR0FBb0MsS0FBSzZWLEVBQUwsR0FBUSxDQUFDLENBQTdDLEVBQStDLEtBQUtDLEVBQUwsR0FBUSxDQUFDLENBQXhELEVBQTBELEtBQUtMLFdBQUwsR0FBaUIsQ0FBQyxDQUE1RSxFQUE4RSxLQUFLMEIsYUFBTCxHQUFtQixDQUFDLENBQWxHLEVBQW9HLEtBQUtuQixhQUFMLEVBQXBHO0FBQXlILEtBQXBpRztBQUFxaUdoUCxrQkFBYyxFQUFDLHdCQUFTL1MsQ0FBVCxFQUFXO0FBQUNBLE9BQUMsSUFBRUEsQ0FBQyxFQUFKO0FBQU8sS0FBdmtHO0FBQXdrR3lTLGFBQVMsRUFBQyxxQkFBVTtBQUFDLFdBQUsrTyxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUFqQjtBQUF3QyxLQUFyb0c7QUFBc29HUSx5QkFBcUIsRUFBQywrQkFBU3hqQixDQUFULEVBQVc7QUFBQyxVQUFJbkQsQ0FBQyxHQUFDMlQsS0FBSyxDQUFDQyxJQUFaO0FBQWlCNVQsT0FBQyxJQUFFQSxDQUFDLENBQUM2VCxJQUFGLENBQU9wRyxPQUFQLENBQWU3TCxPQUFsQixJQUEyQixDQUFDNUIsQ0FBQyxDQUFDNlQsSUFBRixDQUFPcEcsT0FBUCxDQUFlN0wsT0FBZixDQUF1QmdRLEtBQW5ELElBQTBEdEwsQ0FBQyxDQUFDbkQsQ0FBQyxDQUFDNUIsTUFBSCxDQUFELENBQVlrYixFQUFaLENBQWUsdURBQWYsTUFBMEV0WixDQUFDLENBQUNsRCxjQUFGLElBQW1Ca0QsQ0FBQyxDQUFDd0csZUFBRixFQUFuQixFQUF1Q21LLE1BQU0sQ0FBQ2hELElBQVAsRUFBakgsQ0FBMUQ7QUFBMEwsS0FBbjNHO0FBQW8zRytULGdCQUFZLEVBQUMsc0JBQVMxaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUlwTSxDQUFDLEdBQUMsS0FBS29tQixhQUFMLENBQW1CampCLENBQW5CLENBQU47QUFBQSxZQUE0Qm1GLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JsSixDQUFwQixDQUE5QjtBQUFBLFlBQXFEZ0ssQ0FBQyxHQUFDLENBQUMsQ0FBQ2hLLENBQUYsSUFBSzhULE1BQU0sQ0FBQyxRQUFNeEwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHLENBQUMsTUFBSXFMLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBdkUsTUFBa0YxUixDQUFDLEdBQUMsQ0FBQyxDQUFyRixHQUF3RkEsQ0FBQyxLQUFHLEtBQUtxbUIsYUFBVCxJQUF3QnJjLENBQUMsS0FBRyxLQUFLc2MscUJBQTVILEVBQWtKLElBQUcsS0FBS0QsYUFBTCxHQUFtQnJtQixDQUFuQixFQUFxQixLQUFLc21CLHFCQUFMLEdBQTJCdGMsQ0FBaEQsRUFBa0RoSyxDQUFyRCxFQUF1RCxRQUFPOFQsTUFBTSxDQUFDZSxJQUFQLENBQVksQ0FBQzdLLENBQUMsR0FBQyxLQUFELEdBQU8sUUFBVCxJQUFtQixPQUEvQixFQUF3Qyx1QkFBeEMsR0FBaUVoSyxDQUF4RTtBQUEyRSxlQUFJLFVBQUo7QUFBZThULGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsc0JBQXJCLEVBQTZDTSxXQUE3QyxDQUF5RCxrQkFBekQ7O0FBQTZFOztBQUFNLGVBQUksTUFBSjtBQUFXRixrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLGtCQUFyQixFQUF5Q00sV0FBekMsQ0FBcUQsc0JBQXJEOztBQUF4TCxTQUF2RCxNQUFpVUYsTUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCO0FBQXVGO0FBQUMsS0FBL2hJO0FBQWdpSWtSLGlCQUFhLEVBQUMsdUJBQVMvaEIsQ0FBVCxFQUFXO0FBQUMyUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS3FTLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUF2cUk7QUFBd3FJakIsY0FBVSxFQUFDLG9CQUFTamlCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUNvakIsS0FBTixLQUFjamdCLENBQUMsQ0FBQ25ELENBQUMsQ0FBQzVCLE1BQUgsQ0FBRCxDQUFZa2IsRUFBWixDQUFldkgsRUFBRSxDQUFDc1AseUJBQWxCLENBQWpCLEVBQThELElBQUcsTUFBSTdRLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBekUsRUFBaUZvQyxNQUFNLENBQUNoRCxJQUFQLEdBQWpGLEtBQW1HO0FBQUMsWUFBSTlRLENBQUMsR0FBQyxLQUFLb21CLGFBQUwsQ0FBbUJqakIsQ0FBbkIsQ0FBTjs7QUFBNEIyUSxjQUFNLENBQUM5VCxDQUFELENBQU4sSUFBWSxLQUFLNmtCLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBWjtBQUFpQztBQUFDLEtBQS81STtBQUFnNkkwaUIsaUJBQWEsRUFBQyx1QkFBUzFpQixDQUFULEVBQVc7QUFBQyxXQUFLMGhCLFlBQUwsQ0FBa0IxaEIsQ0FBbEI7QUFBcUIsS0FBLzhJO0FBQWc5SWlqQixpQkFBYSxFQUFDLHVCQUFTampCLENBQVQsRUFBVztBQUFDLE9BQUMsQ0FBRCxHQUFHLEtBQUt3aEIsV0FBUixHQUFvQixLQUFLQSxXQUF6QixHQUFxQyxLQUFLQSxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUF0RDtBQUE2RSxhQUFPaGpCLENBQUMsQ0FBQ2diLEtBQUYsR0FBUXJLLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUE1QixHQUFpQyxLQUFLc1QsV0FBdEMsR0FBa0QsS0FBRzdRLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0J6UCxLQUEzRSxHQUFpRixVQUFqRixHQUE0RixNQUFuRztBQUEwRyxLQUFqcUo7QUFBa3FKaWYscUJBQWlCLEVBQUMsMkJBQVM1aUIsQ0FBVCxFQUFXO0FBQUMsV0FBS3FpQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsS0FBS0QsYUFBTCxDQUFtQmpqQixDQUFuQixDQUEvQyxFQUFxRSxLQUFLbWpCLHFCQUFMLEdBQTJCeFMsTUFBTSxDQUFDLFFBQU1oTCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQixLQUFLbWQsYUFBekIsQ0FBUCxDQUFOLEVBQWhHLEVBQXdKLEtBQUtHLFVBQUwsRUFBeEo7QUFBMEssS0FBMTJKO0FBQTIySlAscUJBQWlCLEVBQUMsMkJBQVM5aUIsQ0FBVCxFQUFXO0FBQUMsV0FBS3FpQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsQ0FBQyxDQUFoRCxFQUFrRCxLQUFLQyxxQkFBTCxHQUEyQixDQUFDLENBQTlFLEVBQWdGLEtBQUtiLFVBQUwsRUFBaEY7QUFBa0csS0FBMytKO0FBQTQrSjVVLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLNFYsUUFBUixFQUFpQixPQUFPLEtBQUswTSxVQUFMLElBQWtCLE1BQUssZUFBYW5mLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzFKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUE5QixDQUF6QjtBQUEyRCxXQUFLNFYsUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQixLQUFLME0sVUFBTCxFQUFqQixFQUFtQzNSLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXFVLFFBQWYsQ0FBd0Isc0JBQXhCLEVBQWdETSxXQUFoRCxDQUE0RCxxQkFBNUQsQ0FBbkMsRUFBc0gsZUFBYTFOLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzFKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUEvSTtBQUFrSixLQUEzdEs7QUFBNHRLMk4sUUFBSSxFQUFDLGNBQVMzTixDQUFULEVBQVc7QUFBQyxXQUFLNFYsUUFBTCxLQUFnQixLQUFLQSxRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCakYsTUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQixzQkFBM0IsRUFBbUROLFFBQW5ELENBQTRELHFCQUE1RCxDQUFqQyxHQUFxSCxlQUFhcE4sQ0FBQyxDQUFDdUcsSUFBRixDQUFPMUosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQTlJO0FBQWlKLEtBQTkzSztBQUErM0txakIsY0FBVSxFQUFDLHNCQUFVO0FBQUN2YixhQUFPLENBQUNtQixXQUFSLElBQXFCMEgsTUFBTSxDQUFDYyxNQUFQLENBQWMxRixLQUFkLENBQW9CLFdBQXBCLENBQXJCO0FBQXNELEtBQTM4SztBQUE0OEt1VyxjQUFVLEVBQUMsc0JBQVU7QUFBQ3hhLGFBQU8sQ0FBQ21CLFdBQVIsS0FBc0IsS0FBS29hLFVBQUwsSUFBa0IxUyxNQUFNLENBQUNjLE1BQVAsQ0FBYzNGLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIzSSxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLGFBQUtnRCxJQUFMO0FBQVksT0FBL0IsRUFBZ0MsSUFBaEMsQ0FBOUIsRUFBb0VnRCxNQUFNLENBQUNELElBQVAsR0FBWUMsTUFBTSxDQUFDRCxJQUFQLENBQVlwRyxPQUFaLENBQW9CMEUsT0FBaEMsR0FBd0MsQ0FBNUcsQ0FBeEM7QUFBd0o7QUFBMW5MLEdBQTlpTSxFQUEwcVgrQyxFQUFFLENBQUMwUixPQUFILEdBQVc7QUFBQ3BhLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSCxLQUFMLElBQWEsS0FBS21SLFdBQUwsR0FBaUIsQ0FBQyxDQUEvQjtBQUFpQyxLQUF4RDtBQUF5RG5SLFNBQUssRUFBQyxpQkFBVTtBQUFDTSxZQUFNLENBQUNlLElBQVAsQ0FBWXpVLE1BQVosQ0FBbUIsS0FBSzhnQixTQUFMLEdBQWU1YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG1EQUFwQixFQUF5RXRULE1BQXpFLENBQWdGa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0N0VCxNQUF0QyxDQUE2Q2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGdFQsTUFBL0YsQ0FBc0drRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUFoRixDQUFsQyxFQUFzUXRULE1BQXRRLENBQTZRLEtBQUtraEIsS0FBTCxHQUFXaGIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiwyQ0FBcEIsRUFBaUV0VCxNQUFqRSxDQUF3RWtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDdFQsTUFBdEMsQ0FBNkNrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRnRULE1BQS9GLENBQXNHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBeEUsQ0FBeFIsRUFBb2Z0VCxNQUFwZixDQUEyZixLQUFLd2tCLE1BQUwsR0FBWXRlLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLEVBQWlEdFQsTUFBakQsQ0FBd0RrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF4RCxFQUFvR3RULE1BQXBHLENBQTJHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUEzRyxDQUF2Z0IsR0FBeXBCM00sT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixJQUFZLENBQXhCLElBQTJCLEtBQUt3WixTQUFMLENBQWVyakIsR0FBZixDQUFtQixLQUFLeWpCLEtBQXhCLEVBQStCempCLEdBQS9CLENBQW1DLEtBQUsrbUIsTUFBeEMsRUFBZ0Q5VCxJQUFoRCxFQUFwckIsRUFBMnVCLEtBQUs4VCxNQUFMLENBQVl2YixFQUFaLENBQWUsT0FBZixFQUF1Qi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ2xELGNBQUYsSUFBbUI2VCxNQUFNLENBQUNoRCxJQUFQLEVBQW5CO0FBQWlDLE9BQXJELEVBQXNELElBQXRELENBQXZCLENBQTN1QixFQUErekIsS0FBS29RLFNBQUwsQ0FBZTdYLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMEIvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDMlEsY0FBTSxDQUFDNkQsUUFBUCxJQUFrQixLQUFLa04sWUFBTCxDQUFrQjFoQixDQUFsQixDQUFsQjtBQUF1QyxPQUEzRCxFQUE0RCxJQUE1RCxDQUExQixDQUEvekIsRUFBNDVCLEtBQUttZSxLQUFMLENBQVdqWSxFQUFYLENBQWMsT0FBZCxFQUFzQi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMyUSxjQUFNLENBQUNnRSxJQUFQLElBQWMsS0FBSytNLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBZDtBQUFtQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUF0QixDQUE1NUI7QUFBaS9CLEtBQTNqQztBQUE0akM4VSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLM1UsSUFBTDtBQUFZLEtBQTFsQztBQUEybEN3VCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLZ08sTUFBTDtBQUFjLEtBQTVuQztBQUE2bkNyTixTQUFLLEVBQUMsaUJBQVU7QUFBQzNELFlBQU0sQ0FBQ2MsTUFBUCxDQUFjMUYsS0FBZCxDQUFvQixZQUFwQixHQUFrQyxLQUFLNlYsRUFBTCxHQUFRLENBQUMsQ0FBM0MsRUFBNkMsS0FBS0MsRUFBTCxHQUFRLENBQUMsQ0FBdEQsRUFBd0QsS0FBS0wsV0FBTCxHQUFpQixDQUFDLENBQTFFLEVBQTRFLEtBQUtPLGFBQUwsRUFBNUU7QUFBaUcsS0FBL3VDO0FBQWd2QzVoQixRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLNmhCLGlCQUFMLEtBQXlCLEtBQUtMLE1BQUwsSUFBY2hSLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsYUFBNUIsRUFBMEMsS0FBSzhiLGlCQUFMLEdBQXVCN2UsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtzWCxVQUFiLEVBQXdCLElBQXhCLENBQWpFLENBQWQsRUFBOEd0UixNQUFNLENBQUN6VSxPQUFQLENBQWVnSyxFQUFmLENBQWtCLE9BQWxCLEVBQTBCLHVEQUExQixFQUFrRixLQUFLcWQsNEJBQUwsR0FBa0NwZ0IsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUs2WSxxQkFBYixFQUFtQyxJQUFuQyxDQUFwSCxDQUE5RyxFQUE0UTFiLE9BQU8sQ0FBQ21CLFdBQVIsS0FBc0IwSCxNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLGFBQTdCLEVBQTJDLEtBQUtxYyxtQkFBTCxHQUF5QnBmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1csWUFBYixFQUEwQixJQUExQixDQUFwRSxFQUFxR3hiLEVBQXJHLENBQXdHLFlBQXhHLEVBQXFILGFBQXJILEVBQW1JLEtBQUtzYyxvQkFBTCxHQUEwQnJmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLb1gsYUFBYixFQUEyQixJQUEzQixDQUE3SixFQUErTDdiLEVBQS9MLENBQWtNLFlBQWxNLEVBQStNLGFBQS9NLEVBQTZOLEtBQUt1YyxvQkFBTCxHQUEwQnRmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1gsYUFBYixFQUEyQixJQUEzQixDQUF2UCxHQUF5Ui9SLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsWUFBbEIsRUFBK0IsVUFBL0IsRUFBMEMsS0FBS3ljLHdCQUFMLEdBQThCeGYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtpWSxpQkFBYixFQUErQixJQUEvQixDQUF4RSxFQUE4RzFjLEVBQTlHLENBQWlILFlBQWpILEVBQThILFVBQTlILEVBQXlJLEtBQUsyYyx3QkFBTCxHQUE4QjFmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLbVksaUJBQWIsRUFBK0IsSUFBL0IsQ0FBdkssQ0FBelIsRUFBc2UzZixDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVTRJLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLEtBQUs2YyxnQkFBTCxHQUFzQjVmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLOEgsU0FBYixFQUF1QixJQUF2QixDQUE1QyxDQUE1ZixDQUFyUztBQUE2MkIsS0FBN21FO0FBQThtRWtQLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtLLGlCQUFMLEtBQXlCclIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixTQUFuQixFQUE2QixhQUE3QixFQUEyQyxLQUFLd1AsaUJBQWhELEdBQW1FLEtBQUtBLGlCQUFMLEdBQXVCLElBQTFGLEVBQStGclIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixPQUFuQixFQUEyQix1REFBM0IsRUFBbUYsS0FBSytRLDRCQUF4RixDQUEvRixFQUFxTixLQUFLaEIsbUJBQUwsS0FBMkI1UixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIsYUFBOUIsRUFBNEMsS0FBSytQLG1CQUFqRCxFQUFzRS9QLEdBQXRFLENBQTBFLFlBQTFFLEVBQXVGLGFBQXZGLEVBQXFHLEtBQUtnUSxvQkFBMUcsRUFBZ0loUSxHQUFoSSxDQUFvSSxZQUFwSSxFQUFpSixhQUFqSixFQUErSixLQUFLaVEsb0JBQXBLLEdBQTBMOVIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixZQUFuQixFQUFnQyxVQUFoQyxFQUEyQyxLQUFLbVEsd0JBQWhELEVBQTBFblEsR0FBMUUsQ0FBOEUsWUFBOUUsRUFBMkYsVUFBM0YsRUFBc0csS0FBS3FRLHdCQUEzRyxDQUExTCxFQUErVDFmLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVa1YsR0FBVixDQUFjLFFBQWQsRUFBdUIsS0FBS3VRLGdCQUE1QixDQUEvVCxFQUE2VyxLQUFLUixtQkFBTCxHQUF5QixJQUFqYSxDQUE5TztBQUFzcEIsS0FBdHhGO0FBQXV4RnhQLGtCQUFjLEVBQUMsd0JBQVMvUyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxVQUFJc0ksQ0FBQyxHQUFDcUwsS0FBSyxDQUFDQyxJQUFaOztBQUFpQixVQUFHdEwsQ0FBSCxFQUFLO0FBQUMsWUFBSTBCLENBQUMsR0FBQyxLQUFLa1gsU0FBTCxDQUFlcmpCLEdBQWYsQ0FBbUIsS0FBS3lqQixLQUF4QixDQUFOOztBQUFxQyxhQUFLSixTQUFMLENBQWUsQ0FBQ3BOLE1BQU0sQ0FBQzRELFdBQVAsS0FBcUIsUUFBckIsR0FBOEIsS0FBL0IsSUFBc0MsT0FBckQsRUFBOEQsa0JBQTlELEdBQWtGLEtBQUs0SixLQUFMLENBQVcsQ0FBQ3hOLE1BQU0sQ0FBQytELE9BQVAsS0FBaUIsUUFBakIsR0FBMEIsS0FBM0IsSUFBa0MsT0FBN0MsRUFBc0Qsa0JBQXRELENBQWxGLEVBQTRKN04sQ0FBQyxDQUFDLENBQUMxQixDQUFDLENBQUN1USxNQUFGLEdBQVMsQ0FBVCxHQUFXLEtBQVgsR0FBaUIsUUFBbEIsSUFBNEIsT0FBN0IsQ0FBRCxDQUF1QyxnQkFBdkMsQ0FBNUosRUFBcU4xVixDQUFDLElBQUVBLENBQUMsRUFBek47QUFBNE4sT0FBdlEsTUFBNFFBLENBQUMsSUFBRUEsQ0FBQyxFQUFKO0FBQU8sS0FBeGxHO0FBQXlsR3lTLGFBQVMsRUFBQyxxQkFBVTtBQUFDLFdBQUsrTyxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUFqQjtBQUF3QyxLQUF0cEc7QUFBdXBHUSx5QkFBcUIsRUFBQywrQkFBU3hqQixDQUFULEVBQVc7QUFBQyxVQUFJbkQsQ0FBQyxHQUFDMlQsS0FBSyxDQUFDQyxJQUFaO0FBQWlCNVQsT0FBQyxJQUFFQSxDQUFDLENBQUM2VCxJQUFGLENBQU9wRyxPQUFQLENBQWU3TCxPQUFsQixJQUEyQixDQUFDNUIsQ0FBQyxDQUFDNlQsSUFBRixDQUFPcEcsT0FBUCxDQUFlN0wsT0FBZixDQUF1QmdRLEtBQW5ELElBQTBEdEwsQ0FBQyxDQUFDbkQsQ0FBQyxDQUFDNUIsTUFBSCxDQUFELENBQVlrYixFQUFaLENBQWUsdURBQWYsTUFBMEV0WixDQUFDLENBQUNsRCxjQUFGLElBQW1Ca0QsQ0FBQyxDQUFDd0csZUFBRixFQUFuQixFQUF1Q21LLE1BQU0sQ0FBQ2hELElBQVAsRUFBakgsQ0FBMUQ7QUFBMEwsS0FBcDRHO0FBQXE0RytULGdCQUFZLEVBQUMsc0JBQVMxaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUlwTSxDQUFDLEdBQUMsS0FBS29tQixhQUFMLENBQW1CampCLENBQW5CLENBQU47QUFBQSxZQUE0Qm1GLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JsSixDQUFwQixDQUE5QjtBQUFBLFlBQXFEZ0ssQ0FBQyxHQUFDLENBQUMsQ0FBQ2hLLENBQUYsSUFBSzhULE1BQU0sQ0FBQyxRQUFNeEwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHLENBQUMsTUFBSXFMLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBdkUsTUFBa0YxUixDQUFDLEdBQUMsQ0FBQyxDQUFyRixHQUF3RkEsQ0FBQyxLQUFHLEtBQUtxbUIsYUFBVCxJQUF3QnJjLENBQUMsS0FBRyxLQUFLc2MscUJBQTVILEVBQWtKLElBQUcsS0FBS0QsYUFBTCxHQUFtQnJtQixDQUFuQixFQUFxQixLQUFLc21CLHFCQUFMLEdBQTJCdGMsQ0FBaEQsRUFBa0RoSyxDQUFyRCxFQUF1RCxRQUFPOFQsTUFBTSxDQUFDZSxJQUFQLENBQVksQ0FBQzdLLENBQUMsR0FBQyxLQUFELEdBQU8sUUFBVCxJQUFtQixPQUEvQixFQUF3Qyx1QkFBeEMsR0FBaUVoSyxDQUF4RTtBQUEyRSxlQUFJLFVBQUo7QUFBZThULGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsc0JBQXJCLEVBQTZDTSxXQUE3QyxDQUF5RCxrQkFBekQ7O0FBQTZFOztBQUFNLGVBQUksTUFBSjtBQUFXRixrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLGtCQUFyQixFQUF5Q00sV0FBekMsQ0FBcUQsc0JBQXJEOztBQUF4TCxTQUF2RCxNQUFpVUYsTUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCO0FBQXVGO0FBQUMsS0FBaGpJO0FBQWlqSWtSLGlCQUFhLEVBQUMsdUJBQVMvaEIsQ0FBVCxFQUFXO0FBQUMyUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS3FTLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUF4ckk7QUFBeXJJakIsY0FBVSxFQUFDLG9CQUFTamlCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUNvakIsS0FBTixLQUFjamdCLENBQUMsQ0FBQ25ELENBQUMsQ0FBQzVCLE1BQUgsQ0FBRCxDQUFZa2IsRUFBWixDQUFldkgsRUFBRSxDQUFDc1AseUJBQWxCLENBQWpCLEVBQThELElBQUcsTUFBSTdRLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBekUsRUFBaUZvQyxNQUFNLENBQUNoRCxJQUFQLEdBQWpGLEtBQW1HO0FBQUMsWUFBSTlRLENBQUMsR0FBQyxLQUFLb21CLGFBQUwsQ0FBbUJqakIsQ0FBbkIsQ0FBTjs7QUFBNEIyUSxjQUFNLENBQUM5VCxDQUFELENBQU4sSUFBWSxLQUFLNmtCLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBWjtBQUFpQztBQUFDLEtBQWg3STtBQUFpN0kwaUIsaUJBQWEsRUFBQyx1QkFBUzFpQixDQUFULEVBQVc7QUFBQyxXQUFLMGhCLFlBQUwsQ0FBa0IxaEIsQ0FBbEI7QUFBcUIsS0FBaCtJO0FBQWkrSWlqQixpQkFBYSxFQUFDLHVCQUFTampCLENBQVQsRUFBVztBQUFDLE9BQUMsQ0FBRCxHQUFHLEtBQUt3aEIsV0FBUixHQUFvQixLQUFLQSxXQUF6QixHQUFxQyxLQUFLQSxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUF0RDtBQUE2RSxhQUFPaGpCLENBQUMsQ0FBQ2diLEtBQUYsR0FBUXJLLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUE1QixHQUFpQyxLQUFLc1QsV0FBdEMsR0FBa0QsS0FBRzdRLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0J6UCxLQUEzRSxHQUFpRixVQUFqRixHQUE0RixNQUFuRztBQUEwRyxLQUFscko7QUFBbXJKK0osUUFBSSxFQUFDLGdCQUFVO0FBQUM5SixhQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLElBQVksQ0FBeEIsSUFBMkIsS0FBS3daLFNBQUwsQ0FBZXJqQixHQUFmLENBQW1CLEtBQUt5akIsS0FBeEIsRUFBK0J6akIsR0FBL0IsQ0FBbUMsS0FBSyttQixNQUF4QyxFQUFnRC9ULElBQWhELEVBQTNCO0FBQWtGLEtBQXJ4SjtBQUFzeEpDLFFBQUksRUFBQyxnQkFBVSxDQUFFLENBQXZ5SjtBQUF3eUppVixxQkFBaUIsRUFBQywyQkFBUzVpQixDQUFULEVBQVc7QUFBQyxXQUFLcWlCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixLQUFLRCxhQUFMLENBQW1CampCLENBQW5CLENBQS9DLEVBQXFFLEtBQUttakIscUJBQUwsR0FBMkJ4UyxNQUFNLENBQUMsUUFBTWhMLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CLEtBQUttZCxhQUF6QixDQUFQLENBQU4sRUFBaEc7QUFBd0osS0FBOTlKO0FBQSs5SkoscUJBQWlCLEVBQUMsMkJBQVM5aUIsQ0FBVCxFQUFXO0FBQUMsV0FBS3FpQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsQ0FBQyxDQUFoRCxFQUFrRCxLQUFLQyxxQkFBTCxHQUEyQixDQUFDLENBQTlFO0FBQWdGLEtBQTdrSztBQUE4a0tFLGNBQVUsRUFBQyxzQkFBVSxDQUFFO0FBQXJtSyxHQUFyclgsRUFBNHhoQmxnQixDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXVpQixLQUFaLENBQWtCLFVBQVMxZ0IsQ0FBVCxFQUFXO0FBQUNzYyxXQUFPLENBQUNqVCxVQUFSO0FBQXFCLEdBQW5ELENBQTV4aEIsRUFBaTFoQmpHLE1BQXgxaEI7QUFBKzFoQixDQUFseHdFLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFSQTtBQVNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3NnQixtQkFBVCxHQUErQjtBQUM3QixRQUFNQyxZQUFZLEdBQUd4bEIsUUFBUSxDQUFDeUUsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNnaEIsWUFBaEU7QUFDQSxRQUFNQyxhQUFhLEdBQUd2bUIsTUFBTSxDQUFDOEcsV0FBUCxHQUFxQmpHLFFBQVEsQ0FBQ3lFLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDZ2hCLFlBQWhFLEdBQStFRCxZQUFyRztBQUNBeGxCLFVBQVEsQ0FBQ3lFLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEaEMsS0FBaEQsQ0FBc0R1RCxNQUF0RCxHQUErRDBmLGFBQWEsR0FBRyxJQUEvRTtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QkMsUUFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQkMsUUFBdEIsQ0FBK0I7QUFDN0J4akIsVUFBTSxFQUFFO0FBRHFCLEdBQS9CO0FBSUF1akIsUUFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQjdkLEVBQXRCLENBQXlCLG1CQUF6QixFQUE4QyxVQUFTckosQ0FBVCxFQUFXO0FBQ3ZEb0csaUJBQWE7QUFDZCxHQUZEO0FBSUE4Z0IsUUFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQjdkLEVBQXRCLENBQXlCLG9CQUF6QixFQUErQyxVQUFTckosQ0FBVCxFQUFXO0FBQ3hEb0csaUJBQWE7QUFDZCxHQUZEO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2doQixpQkFBVCxHQUE2QjtBQUMzQjtBQUNBLHdCQUFFLG9DQUFGLEVBQXdDL2QsRUFBeEMsQ0FBMkMsWUFBM0MsRUFBeUQsWUFBVztBQUNsRSxRQUFJLENBQUMsc0JBQUUseUJBQUYsRUFBNkJxVCxRQUE3QixDQUFzQyxNQUF0QyxDQUFELElBQWtELHNCQUFFcGIsUUFBRixFQUFZd0YsS0FBWixLQUFzQixJQUE1RSxFQUFrRjtBQUNoRiw0QkFBRSxhQUFGLEVBQWlCcEQsT0FBakIsQ0FBeUIsT0FBekI7QUFDRDtBQUNGLEdBSkQsRUFJRzJGLEVBSkgsQ0FJTSxZQUpOLEVBSW9CLFlBQVc7QUFDN0IsUUFBSSxzQkFBRSx5QkFBRixFQUE2QnFULFFBQTdCLENBQXNDLE1BQXRDLEtBQWlELHNCQUFFcGIsUUFBRixFQUFZd0YsS0FBWixLQUFzQixJQUEzRSxFQUFpRjtBQUMvRSw0QkFBRSxhQUFGLEVBQWlCcEQsT0FBakIsQ0FBeUIsT0FBekI7QUFDRDtBQUNGLEdBUkQ7QUFVQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRSx3QkFBRSxpQkFBRixFQUFxQjJGLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsUUFBSSxzQkFBRS9ILFFBQUYsRUFBWXdGLEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsVUFBSSxzQkFBRSxtQkFBRixFQUF1QjRWLFFBQXZCLENBQWdDLE1BQWhDLENBQUosRUFBNkM7QUFDM0MySyx1QkFBZTtBQUNoQixPQUZELE1BRU87QUFDTEMsc0JBQWM7QUFDZjtBQUNGO0FBQ0YsR0FSRCxFQXBCMkIsQ0E4QjNCOztBQUNBLHdCQUFFLGlCQUFGLEVBQXFCamUsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU3JKLENBQVQsRUFBVztBQUMxQ3FuQixtQkFBZTtBQUNoQixHQUZEO0FBSUEsd0JBQUUsYUFBRixFQUFpQmhlLEVBQWpCLENBQW9CLFlBQXBCLEVBQWtDLFVBQVNrZSxLQUFULEVBQWdCO0FBQ2hELFFBQUksc0JBQUVqbUIsUUFBRixFQUFZd0YsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QixVQUFJLHNCQUFFLGtCQUFnQixzQkFBRSxJQUFGLEVBQVE1RixJQUFSLENBQWEsT0FBYixDQUFoQixHQUFzQyxNQUF4QyxFQUFnRE0sTUFBaEQsR0FBeUQsQ0FBN0QsRUFBZ0U7QUFDOUQsOEJBQUUsY0FBRixFQUFrQnNQLElBQWxCO0FBQ0EsOEJBQUUsa0JBQWdCLHNCQUFFLElBQUYsRUFBUTVQLElBQVIsQ0FBYSxPQUFiLENBQWxCLEVBQXlDMlAsSUFBekM7QUFDRDtBQUNGO0FBQ0YsR0FQRDtBQVNBLHdCQUFFLG1CQUFGLEVBQXVCeEgsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU3JKLENBQVQsRUFBWTtBQUM3Q0EsS0FBQyxDQUFDMkosZUFBRjtBQUNELEdBRkQ7QUFJQSx3QkFBRSxtREFBRixFQUF1RE4sRUFBdkQsQ0FBMEQsT0FBMUQsRUFBbUUsVUFBU3JKLENBQVQsRUFBWTtBQUM3RXduQixxQkFBaUIsQ0FBQyxzQkFBRSxJQUFGLEVBQVF0bUIsSUFBUixDQUFhLFdBQWIsQ0FBRCxDQUFqQjtBQUNELEdBRkQ7QUFJQSx3QkFBRSxrQkFBRixFQUFzQm1JLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFVBQVNySixDQUFULEVBQVk7QUFDNUNzbkIsa0JBQWM7QUFDZEUscUJBQWlCLENBQUMsc0JBQUUsV0FBRixFQUFldG1CLElBQWYsQ0FBb0IsV0FBcEIsQ0FBRCxDQUFqQjtBQUNELEdBSEQ7QUFLQSx3QkFBRSx1QkFBRixFQUEyQm1JLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFVBQVNySixDQUFULEVBQVk7QUFDakRBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUMySixlQUFGO0FBQ0EsMEJBQUUsZUFBRixFQUFtQm1ILElBQW5CO0FBQ0EsMEJBQUUsYUFBRixFQUFpQkQsSUFBakI7QUFFQSwwQkFBRSx1QkFBRixFQUEyQkMsSUFBM0I7QUFDQSwwQkFBRSx3QkFBRixFQUE0QkQsSUFBNUI7QUFDRCxHQVJEO0FBVUEsd0JBQUUsb0JBQUYsRUFBd0J4SCxFQUF4QixDQUEyQixrQkFBM0IsRUFBK0MsWUFBVztBQUN4RGdlLG1CQUFlO0FBQ2hCLEdBRkQ7QUFHRDs7QUFFRCxTQUFTSSxtQkFBVCxHQUErQjtBQUM3Qix3QkFBRSx3QkFBRixFQUE0QnBlLEVBQTVCLENBQStCLGtCQUEvQixFQUFtRCxVQUFTckosQ0FBVCxFQUFZO0FBQzdELDBCQUFFLHNCQUFGLEVBQTBCMFQsUUFBMUIsQ0FBbUMsTUFBbkM7O0FBQ0EsUUFBSSxzQkFBRXBTLFFBQUYsRUFBWXdGLEtBQVosTUFBdUIsSUFBM0IsRUFBaUM7QUFDL0IsWUFBTTRnQixpQkFBaUIsR0FBRyxzQkFBRSxrQkFBRixFQUFzQnhNLFdBQXRCLEtBQXNDLHNCQUFFLGdCQUFGLEVBQW9CNVQsTUFBcEIsRUFBaEU7QUFDQSxZQUFNcWdCLHNCQUFzQixHQUFHLHNCQUFFLGdCQUFGLEVBQW9CcmdCLE1BQXBCLEtBQStCLHNCQUFFLFFBQUYsRUFBWUEsTUFBWixFQUEvQixHQUFzRCxzQkFBRSxjQUFGLEVBQWtCNFQsV0FBbEIsRUFBckY7QUFDQSw0QkFBRSxzQkFBRixFQUEwQjFQLEdBQTFCLENBQThCLEtBQTlCLEVBQXFDa2MsaUJBQWlCLEdBQUcsSUFBekQ7QUFDQSw0QkFBRSxrQkFBRixFQUFzQmxjLEdBQXRCLENBQTBCLFFBQTFCLEVBQW9DbWMsc0JBQXNCLEdBQUcsSUFBN0Q7QUFFQSw0QkFBRSxNQUFGLEVBQVVqVSxRQUFWLENBQW1CLGtCQUFuQjtBQUNEO0FBQ0YsR0FWRDtBQVlBLHdCQUFFLHdCQUFGLEVBQTRCckssRUFBNUIsQ0FBK0Isb0JBQS9CLEVBQXFELFVBQVNySixDQUFULEVBQVk7QUFDL0QsMEJBQUUsc0JBQUYsRUFBMEJnVSxXQUExQixDQUFzQyxNQUF0Qzs7QUFDQSxRQUFJLHNCQUFFMVMsUUFBRixFQUFZd0YsS0FBWixNQUF1QixJQUEzQixFQUFpQztBQUMvQiw0QkFBRSxNQUFGLEVBQVVrTixXQUFWLENBQXNCLGtCQUF0QjtBQUNELEtBSjhELENBSy9EOzs7QUFDQSxRQUFJLHNCQUFFLElBQUYsRUFBUS9PLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJ5WCxRQUE3QixDQUFzQyxVQUF0QyxDQUFKLEVBQXVEO0FBQ3JELDRCQUFFLG9CQUFGLEVBQXdCbEQsSUFBeEIsQ0FBNkIsRUFBN0I7QUFDQSw0QkFBRSxrQkFBRixFQUFzQnhGLFdBQXRCLENBQWtDLFFBQWxDO0FBQ0EsNEJBQUUsNkJBQUYsRUFBaUNOLFFBQWpDLENBQTBDLFFBQTFDLEVBQW9ETSxXQUFwRCxDQUFnRSxRQUFoRTtBQUNBLDRCQUFFLGdDQUFGLEVBQW9DQSxXQUFwQyxDQUFnRCxTQUFoRDtBQUNEO0FBQ0YsR0FaRDtBQWNBLHdCQUFFLG1DQUFGLEVBQXVDM0ssRUFBdkMsQ0FBMEMsT0FBMUMsRUFBbUQsVUFBU3JKLENBQVQsRUFBWTtBQUM3RCwwQkFBRSxxQ0FBRixFQUF5QzBELE9BQXpDLENBQWlELE9BQWpEO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNra0IsVUFBVCxDQUFvQnZvQixPQUFwQixFQUE2QjtBQUMzQixNQUFJLHNCQUFFaUMsUUFBRixFQUFZd0YsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QnVnQixtQkFBZTtBQUNmLDBCQUFFLGtCQUFGLEVBQXNCN2IsR0FBdEIsQ0FBMEIsUUFBMUIsRUFBb0MsRUFBcEM7QUFDQSwwQkFBRSxpQkFBRixFQUFxQndJLFdBQXJCLENBQWlDLE1BQWpDO0FBQ0EsMEJBQUUsc0JBQUYsRUFBMEJBLFdBQTFCLENBQXNDLE1BQXRDO0FBQ0QsR0FMRCxNQUtPO0FBQ0wsVUFBTTZULFlBQVksR0FBRyxzQkFBRSxrQkFBRixFQUFzQnZnQixNQUF0QixLQUFpQyxzQkFBRSxnQkFBRixFQUFvQkEsTUFBcEIsRUFBdEQ7QUFDQSxVQUFNb2dCLGlCQUFpQixHQUFHLHNCQUFFLGtCQUFGLEVBQXNCeE0sV0FBdEIsS0FBc0Msc0JBQUUsZ0JBQUYsRUFBb0I1VCxNQUFwQixFQUFoRTtBQUNBLFVBQU1xZ0Isc0JBQXNCLEdBQUcsc0JBQUUsZ0JBQUYsRUFBb0JyZ0IsTUFBcEIsS0FBK0Isc0JBQUUsUUFBRixFQUFZQSxNQUFaLEVBQS9CLEdBQXNELHNCQUFFLGNBQUYsRUFBa0I0VCxXQUFsQixFQUFyRjtBQUNBLDBCQUFFN2IsT0FBRixFQUFXbU0sR0FBWCxDQUFlLEtBQWYsRUFBc0JxYyxZQUFZLEdBQUcsSUFBckM7QUFDQSwwQkFBRXhvQixPQUFGLEVBQVdtTSxHQUFYLENBQWUsUUFBZixFQUF5QixpQkFBaUJxYyxZQUFqQixHQUFnQyxLQUF6RDtBQUNBLDBCQUFFeG9CLE9BQU8sR0FBRyxtQkFBWixFQUFpQ21NLEdBQWpDLENBQXFDLFFBQXJDLEVBQStDcWMsWUFBWSxHQUFHLElBQTlEO0FBQ0EsMEJBQUUsaUJBQUYsRUFBcUJyYyxHQUFyQixDQUF5QixLQUF6QixFQUFnQ2tjLGlCQUFpQixHQUFHLElBQXBEO0FBQ0EsMEJBQUUsa0JBQUYsRUFBc0JsYyxHQUF0QixDQUEwQixRQUExQixFQUFvQ21jLHNCQUFzQixHQUFHLElBQTdEO0FBQ0Q7QUFDRjs7QUFHRCxTQUFTTCxjQUFULEdBQTBCO0FBQ3hCLE1BQUlRLFlBQVksR0FBRyxzQkFBRSxhQUFGLEVBQWlCcE8sSUFBakIsQ0FBc0IsY0FBdEIsQ0FBbkI7QUFDQWtPLFlBQVUsQ0FBQ0UsWUFBRCxDQUFWO0FBRUEsd0JBQUVBLFlBQUYsRUFBZ0JwVSxRQUFoQixDQUF5QixNQUF6QjtBQUNBLHdCQUFFLGlCQUFGLEVBQXFCTSxXQUFyQixDQUFpQyxNQUFqQztBQUNBLHdCQUFFLHVCQUFGLEVBQTJCTixRQUEzQixDQUFvQyxNQUFwQztBQUVBLHdCQUFFLE1BQUYsRUFBVUEsUUFBVixDQUFtQixrQkFBbkI7QUFDQSx3QkFBRSxpQkFBRixFQUFxQkEsUUFBckIsQ0FBOEIsTUFBOUI7QUFFQSx3QkFBRSxhQUFGLEVBQWlCN0MsSUFBakI7QUFDQSx3QkFBRSxlQUFGLEVBQW1CQyxJQUFuQjtBQUNBLHdCQUFFLGVBQUYsRUFBbUJBLElBQW5CO0FBQ0Esd0JBQUUscUJBQUYsRUFBeUJBLElBQXpCO0FBRUEsd0JBQUUsd0JBQUYsRUFBNEJELElBQTVCO0FBQ0Esd0JBQUUsdUJBQUYsRUFBMkJDLElBQTNCO0FBQ0Q7O0FBRUQsU0FBU3VXLGVBQVQsR0FBMkI7QUFDekIsTUFBSVMsWUFBWSxHQUFHLHNCQUFFLGFBQUYsRUFBaUJwTyxJQUFqQixDQUFzQixjQUF0QixDQUFuQjtBQUVBLHdCQUFFLGlCQUFGLEVBQXFCMUYsV0FBckIsQ0FBaUMsTUFBakM7QUFDQSx3QkFBRSxtQkFBRixFQUF1QkEsV0FBdkIsQ0FBbUMsTUFBbkM7QUFDQSx3QkFBRThULFlBQUYsRUFBZ0I5VCxXQUFoQixDQUE0QixNQUE1QjtBQUNBLHdCQUFFLE1BQUYsRUFBVUEsV0FBVixDQUFzQixrQkFBdEI7QUFFQSx3QkFBRSx1QkFBRixFQUEyQkEsV0FBM0IsQ0FBdUMsTUFBdkM7QUFDQSx3QkFBRSxpQkFBRixFQUFxQk4sUUFBckIsQ0FBOEIsTUFBOUI7QUFFQSx3QkFBRSxNQUFGLEVBQVVNLFdBQVYsQ0FBc0Isa0JBQXRCO0FBQ0Esd0JBQUUsaUJBQUYsRUFBcUJBLFdBQXJCLENBQWlDLE1BQWpDO0FBRUEsd0JBQUUsYUFBRixFQUFpQm5ELElBQWpCO0FBQ0Esd0JBQUUsZUFBRixFQUFtQkMsSUFBbkI7QUFDQSx3QkFBRSxlQUFGLEVBQW1CQSxJQUFuQjtBQUNBLHdCQUFFLHFCQUFGLEVBQXlCQSxJQUF6QjtBQUVBLHdCQUFFLHdCQUFGLEVBQTRCQSxJQUE1QjtBQUNBLHdCQUFFLHVCQUFGLEVBQTJCQSxJQUEzQjtBQUNEOztBQUVELFNBQVMwVyxpQkFBVCxDQUEyQk8sU0FBM0IsRUFBc0M7QUFDcEMsTUFBSUEsU0FBUyxLQUFLcmlCLFNBQWxCLEVBQTZCO0FBQzNCLDBCQUFFLGVBQUYsRUFBbUJvTCxJQUFuQjtBQUNBLDBCQUFFaVgsU0FBRixFQUFhbFgsSUFBYjtBQUVBLDBCQUFFLHdCQUFGLEVBQTRCQyxJQUE1QjtBQUNBLDBCQUFFLHVCQUFGLEVBQTJCdEYsR0FBM0IsQ0FBK0IsU0FBL0IsRUFBMEMsT0FBMUM7QUFDRDtBQUNGOztBQUVELFNBQVN3YyxtQkFBVCxHQUErQjtBQUM3QjtBQUNBLHdCQUFFLHdCQUFGLEVBQTRCM2UsRUFBNUIsQ0FBK0Isb0JBQS9CLEVBQXFELFVBQVNySixDQUFULEVBQVk7QUFDL0QsMEJBQUVBLENBQUMsQ0FBQ3VCLE1BQUosRUFBWTBELE9BQVosQ0FBb0IsSUFBcEIsRUFBMEIrTyxXQUExQixDQUFzQyxNQUF0QztBQUNELEdBRkQ7QUFJQSx3QkFBRSx3QkFBRixFQUE0QjNLLEVBQTVCLENBQStCLGtCQUEvQixFQUFtRCxVQUFTckosQ0FBVCxFQUFZO0FBQzdELDBCQUFFLElBQUYsRUFBUSxJQUFSLEVBQWNnVSxXQUFkLENBQTBCLE1BQTFCO0FBQ0EsMEJBQUVoVSxDQUFDLENBQUN1QixNQUFKLEVBQVkwRCxPQUFaLENBQW9CLElBQXBCLEVBQTBCeU8sUUFBMUIsQ0FBbUMsTUFBbkM7QUFDRCxHQUhELEVBTjZCLENBVzdCOztBQUNBLHdCQUFFLHVCQUFGLEVBQTJCckssRUFBM0IsQ0FBOEIsa0JBQTlCLEVBQWtELFVBQVVySixDQUFWLEVBQWE7QUFDN0QsMEJBQUVBLENBQUMsQ0FBQ3VCLE1BQUosRUFBWTBtQixJQUFaLENBQWlCLEtBQWpCLEVBQXdCalUsV0FBeEIsQ0FBb0MsTUFBcEM7QUFDRCxHQUZEO0FBR0Esd0JBQUUsdUJBQUYsRUFBMkIzSyxFQUEzQixDQUE4QixvQkFBOUIsRUFBb0QsVUFBVXJKLENBQVYsRUFBYTtBQUMvRCwwQkFBRUEsQ0FBQyxDQUFDdUIsTUFBSixFQUFZMG1CLElBQVosQ0FBaUIsS0FBakIsRUFBd0J2VSxRQUF4QixDQUFpQyxNQUFqQztBQUNELEdBRkQ7QUFHQSx3QkFBRSxjQUFGLEVBQWtCckssRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN2QywwQkFBRSxJQUFGLEVBQVFwRSxPQUFSLENBQWdCLG1CQUFoQixFQUFxQ2dqQixJQUFyQyxDQUEwQyxLQUExQyxFQUFpRHZrQixPQUFqRCxDQUF5RCxPQUF6RDtBQUNELEdBRkQ7QUFHRDs7QUFHRCxTQUFTMEMsYUFBVCxHQUF5QjtBQUN2QnlnQixxQkFBbUI7QUFDbkI7O0FBQ0EsTUFBSSxzQkFBRXZsQixRQUFGLEVBQVl3RixLQUFaLEtBQXNCLEdBQTFCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBQ0Q7QUFDQThnQixZQUFVLENBQUMsc0JBQUUsYUFBRixFQUFpQmxPLElBQWpCLENBQXNCLGNBQXRCLENBQUQsQ0FBVjtBQUNBO0FBQ0Esd0JBQUUsa0JBQUYsRUFBc0I3SSxJQUF0Qjs7QUFDQXRLLG1CQUFPdUssSUFBUDtBQUNEOztBQUVELFNBQVM1SyxJQUFULEdBQWdCO0FBQ2Q7QUFDQStnQixvQkFBa0I7QUFDbEIsd0JBQUUsWUFBWTtBQUNaLDBCQUFFLHlCQUFGLEVBQTZCaUIsT0FBN0I7QUFDRCxHQUZELEVBSGMsQ0FNZDs7QUFDQSx3QkFBRSxnQkFBRixFQUFvQjdlLEVBQXBCLENBQXVCLG1CQUF2QixFQUE0QyxVQUFVckosQ0FBVixFQUFhO0FBQ3ZEQSxLQUFDLENBQUNtb0Isd0JBQUY7QUFDRCxHQUZEO0FBR0E7QUFDQTtBQUNBLHdDQVpjLENBYWQ7O0FBQ0FmLG1CQUFpQjtBQUNqQksscUJBQW1CO0FBRW5CTyxxQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBRUE7QUFFQW5CLHFCQUFtQjs7QUFDbkIsTUFBSSxzQkFBRXZsQixRQUFGLEVBQVl3RixLQUFaLEtBQXNCLEdBQTFCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBQ0Q7QUFDQTtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0U7O0FBQ0Esd0JBQUUsbUJBQUYsRUFBdUIrSixJQUF2QjtBQUNBLHdCQUFFLGtCQUFGLEVBQXNCQSxJQUF0QjtBQUNBLHdCQUFFLHVDQUFGLEVBQTJDQSxJQUEzQztBQUNEOztRQUVRM0ssSSxHQUFBQSxJO1FBQU1FLGEsR0FBQUEsYTs7Ozs7Ozs7Ozs7Ozs7O0FDaFNmOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFZQTtBQUNBO0FBSUE7QUFDQTlGLGdCQUFNb1EsUUFBTixDQUFlMFgsT0FBZixDQUF1QjduQixJQUF2QixDQUE0QixjQUE1QixJQUE4QyxrREFBOUM7QUFDQUQsZ0JBQU1vUSxRQUFOLENBQWUwWCxPQUFmLENBQXVCN25CLElBQXZCLENBQTRCOG5CLE1BQTVCLEdBQXFDLGdEQUFyQztBQUNBL25CLGdCQUFNb1EsUUFBTixDQUFlMFgsT0FBZixDQUF1QjduQixJQUF2QixDQUE0QixrQkFBNUIsSUFBa0QsZ0JBQWxEO0FBRUFlLFFBQVEsQ0FBQ3ZCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ2xEO0FBQ0EsUUFBTXVvQixTQUFTLEdBQUcseUJBQVU7QUFBRWpqQixZQUFRLEVBQUU7QUFBWixHQUFWLENBQWxCO0FBRUE7QUFFQSx3REFOa0QsQ0FRbEQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLHdDQXRCa0QsQ0F3QmxEOztBQUNBL0QsVUFBUSxDQUFDTyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE9BQTlDLENBQXVEeW1CLElBQUQsSUFBVTtBQUM5RCxRQUFJcm1CLHNCQUFKLENBQWlCcW1CLElBQWpCLEVBQXVCO0FBQ3JCL2tCLFlBQU0sQ0FBQ25ELEtBQUQsRUFBUTtBQUNaaUIsZ0JBQVEsQ0FBQy9CLGFBQVQsQ0FBd0IsaUNBQWdDYyxLQUFLLEdBQUcsQ0FBRSxFQUFsRSxFQUFxRXlELE9BQXJFLEdBQStFLElBQS9FO0FBQ0Q7O0FBSG9CLEtBQXZCO0FBS0QsR0FORCxFQXpCa0QsQ0FpQ2xEOztBQUNBLE1BQUl4QyxRQUFRLENBQUMvQixhQUFULENBQXVCLGlCQUF2QixDQUFKLEVBQStDO0FBQzdDLG1DQUFnQitCLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIseUJBQXZCLENBQWhCO0FBQ0Esa0NBQWUrQixRQUFRLENBQUMvQixhQUFULENBQXVCLGlCQUF2QixDQUFmO0FBQ0QsR0FyQ2lELENBdUNsRDs7O0FBQ0ErQixVQUFRLENBQUNPLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBc0R5bUIsSUFBSSxJQUFJLElBQUk5a0Isc0JBQUosQ0FBaUI4a0IsSUFBakIsQ0FBOUQsRUF4Q2tELENBMENsRDs7QUFDQSxNQUFJam5CLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsNkNBQXZCLENBQUosRUFBMkU7QUFBRSxRQUFJMEUsNkJBQUo7QUFBNEIsR0EzQ3ZELENBNkNsRDs7O0FBQ0E7QUFDRCxDQS9DRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7QUFIQTs7QUFDQTs7QUFDQTtBQUdBLE1BQU11a0IsUUFBUSxHQUFHLFNBQVNDLGFBQVQsR0FBeUI7QUFDeENDLGdCQUFjLENBQUNwaUIsQ0FBQyxDQUFDLHlCQUFELENBQUYsQ0FBZDtBQUNBb2lCLGdCQUFjLENBQUNwaUIsQ0FBQyxDQUFDLHdCQUFELENBQUYsQ0FBZDtBQUNBb2lCLGdCQUFjLENBQUNwaUIsQ0FBQyxDQUFDLDRCQUFELENBQUYsQ0FBZDtBQUVBcWlCLHVCQUFxQixDQUFDcmlCLENBQUMsQ0FBQyxpQkFBRCxDQUFGLENBQXJCO0FBQ0FxaUIsdUJBQXFCLENBQUNyaUIsQ0FBQyxDQUFDLDZCQUFELENBQUYsQ0FBckI7QUFDRCxDQVBEO0FBU0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTb2lCLGNBQVQsQ0FBd0JFLGVBQXhCLEVBQXlDO0FBQ3ZDLFFBQU1uYixPQUFPLEdBQUc7QUFDZG9iLFlBQVEsRUFBRSxJQURJO0FBRWRDLFNBQUssRUFBRSxHQUZPO0FBR2RDLGdCQUFZLEVBQUUsQ0FIQTtBQUlkQyxrQkFBYyxFQUFFLENBSkY7QUFLZEMsZ0JBQVksRUFBRUwsZUFBZSxDQUFDOVEsSUFBaEIsQ0FBcUIsa0JBQXJCLENBTEE7QUFNZG9SLGFBQVMsRUFBRSxpR0FORztBQU9kQyxhQUFTLEVBQUUsNEZBUEc7QUFRZEMsY0FBVSxFQUFFLENBQ1Y7QUFDRUMsZ0JBQVUsRUFBRSxJQURkO0FBRUVobkIsY0FBUSxFQUFFO0FBQ1IwbUIsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSSCxnQkFBUSxFQUFFO0FBSEY7QUFGWixLQURVLEVBU1Y7QUFDRVEsZ0JBQVUsRUFBRSxJQURkO0FBRUVobkIsY0FBUSxFQUFFO0FBQ1IwbUIsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSSCxnQkFBUSxFQUFFO0FBSEY7QUFGWixLQVRVLEVBaUJWO0FBQ0VRLGdCQUFVLEVBQUUsR0FEZDtBQUVFaG5CLGNBQVEsRUFBRTtBQUNSMG1CLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFO0FBRlI7QUFGWixLQWpCVTtBQVJFLEdBQWhCOztBQWtDQSxNQUFJSixlQUFlLElBQUksQ0FBQ0EsZUFBZSxDQUFDbE0sUUFBaEIsQ0FBeUIsbUJBQXpCLENBQXhCLEVBQXVFO0FBQ3JFa00sbUJBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0I3YixPQUF0QjtBQUVBbWIsbUJBQWUsQ0FBQ3ZmLEVBQWhCLENBQW1CLGFBQW5CLEVBQWtDLFVBQVNrZSxLQUFULEVBQWdCK0IsS0FBaEIsRUFBdUJDLFlBQXZCLEVBQXFDQyxTQUFyQyxFQUErQztBQUMvRUMsMEJBQW9CLENBQUNiLGVBQUQsQ0FBcEI7QUFDRCxLQUZEO0FBR0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0QscUJBQVQsQ0FBK0JDLGVBQS9CLEVBQWdEO0FBQzlDLE1BQUljLG1CQUFtQixHQUFJZCxlQUFlLEtBQUt0aUIsQ0FBQyxDQUFDLDZCQUFELENBQWhEO0FBQ0EsUUFBTW1ILE9BQU8sR0FBRztBQUNab2IsWUFBUSxFQUFFLElBREU7QUFFWkMsU0FBSyxFQUFFLEdBRks7QUFHWkMsZ0JBQVksRUFBRSxDQUhGO0FBSVpDLGtCQUFjLEVBQUUsQ0FKSjtBQUtaVyxlQUFXLEVBQUUsSUFMRDtBQU1aVixnQkFBWSxFQUFFTCxlQUFlLENBQUM5USxJQUFoQixDQUFxQixrQkFBckIsQ0FORjtBQU9ab1IsYUFBUyxFQUFFLDRGQVBDO0FBUVpDLGFBQVMsRUFBRSx3RkFSQztBQVNaQyxjQUFVLEVBQUUsQ0FDWjtBQUNFQyxnQkFBVSxFQUFFLEdBRGQ7QUFFRWhuQixjQUFRLEVBQUU7QUFDUjBtQixvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FEWSxFQVFaO0FBQ0VLLGdCQUFVLEVBQUUsR0FEZDtBQUVFaG5CLGNBQVEsRUFBRTtBQUZaLEtBUlk7QUFUQSxHQUFoQjs7QUF3QkEsTUFBSXVtQixlQUFlLElBQUksQ0FBQ0EsZUFBZSxDQUFDbE0sUUFBaEIsQ0FBeUIsbUJBQXpCLENBQXhCLEVBQXVFO0FBQ3JFa00sbUJBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0I3YixPQUF0Qjs7QUFDQSxRQUFJaWMsbUJBQUosRUFBeUI7QUFDdkJFLDhCQUF3QjtBQUN6QjtBQUNGLEdBTEQsTUFLTztBQUNMLFFBQUd0akIsQ0FBQyxDQUFDaEYsUUFBRCxDQUFELENBQVl3RixLQUFaLEtBQXNCLEdBQXRCLElBQTZCOGhCLGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJVLEtBQWhELElBQXlEVixlQUFlLENBQUMsQ0FBRCxDQUFmLENBQW1CVSxLQUFuQixDQUF5Qk8sU0FBckYsRUFBZ0c7QUFDOUZqQixxQkFBZSxDQUFDVSxLQUFoQixDQUFzQjdiLE9BQXRCO0FBQ0Q7O0FBQ0QsUUFBSWljLG1CQUFKLEVBQXlCO0FBQ3ZCZCxxQkFBZSxDQUFDdmYsRUFBaEIsQ0FBbUIsYUFBbkIsRUFBa0MsVUFBU2lnQixLQUFULEVBQWU7QUFDL0NNLGdDQUF3QjtBQUN6QixPQUZEO0FBR0Q7QUFDRjtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTRSxxQkFBVCxDQUErQmxCLGVBQS9CLEVBQWdEO0FBQzlDLFFBQU1tQixJQUFJLEdBQUc7QUFDWGxCLFlBQVEsRUFBRSxJQURDO0FBRVhDLFNBQUssRUFBRSxHQUZJO0FBR1hrQixRQUFJLEVBQUUsQ0FISztBQUlYakIsZ0JBQVksRUFBRSxDQUpIO0FBS1hDLGtCQUFjLEVBQUUsQ0FMTDtBQU1YaUIsZ0JBQVksRUFBRSxDQU5IO0FBT1hDLGtCQUFjLEVBQUUsSUFQTDtBQVFYakIsZ0JBQVksRUFBRUwsZUFBZSxDQUFDOVEsSUFBaEIsQ0FBcUIsa0JBQXJCLENBUkg7QUFTWG9SLGFBQVMsRUFBRSxpR0FUQTtBQVVYQyxhQUFTLEVBQUUsNEZBVkE7QUFXWEMsY0FBVSxFQUFFLENBQ1Y7QUFDRUMsZ0JBQVUsRUFBRSxJQURkO0FBRUVobkIsY0FBUSxFQUFFO0FBQ1IybkIsWUFBSSxFQUFFLENBREU7QUFFUkMsb0JBQVksRUFBRTtBQUZOO0FBRlosS0FEVTtBQVhELEdBQWI7QUFzQkEsUUFBTUUsZ0JBQWdCLEdBQUcsQ0FBQ3ZCLGVBQWUsQ0FBQ2xNLFFBQWhCLENBQXlCLFFBQXpCLENBQTFCOztBQUNBLE1BQUd5TixnQkFBZ0IsSUFBSSxDQUFDdkIsZUFBZSxDQUFDbE0sUUFBaEIsQ0FBeUIsbUJBQXpCLENBQXhCLEVBQXVFO0FBQ3JFa00sbUJBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0JTLElBQXRCO0FBQ0QsR0FGRCxNQUVPLElBQUluQixlQUFlLENBQUNsTSxRQUFoQixDQUF5QixtQkFBekIsQ0FBSixFQUFtRDtBQUN4RGtNLG1CQUFlLENBQUNVLEtBQWhCLENBQXNCLFNBQXRCO0FBQ0FWLG1CQUFlLENBQUNVLEtBQWhCLENBQXNCUyxJQUF0QjtBQUNEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNLLG9CQUFULEdBQWdDO0FBQzlCLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EvakIsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQndHLElBQW5CLENBQXdCLFVBQVN3ZCxLQUFULEVBQWdCO0FBQ3RDLFVBQU1oYixLQUFLLEdBQUc7QUFDWjdQLFNBQUcsRUFBRzZHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxPQUFiLENBRE07QUFFWjhQLGVBQVMsRUFBRzFLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxXQUFiO0FBRkEsS0FBZDtBQUlBbXBCLFVBQU0sQ0FBQ2hhLElBQVAsQ0FBWWYsS0FBWjtBQUNELEdBTkQ7QUFPQSxRQUFNaWIsYUFBYSxHQUFHaGdCLElBQUksQ0FBQ0UsR0FBTCxDQUFVbkosUUFBUSxDQUFDNFMsSUFBVCxDQUFjc1csWUFBeEIsRUFBc0NscEIsUUFBUSxDQUFDNFMsSUFBVCxDQUFjdVcsWUFBcEQsRUFDcEJucEIsUUFBUSxDQUFDNkYsZUFBVCxDQUF5QjRmLFlBREwsRUFDbUJ6bEIsUUFBUSxDQUFDNkYsZUFBVCxDQUF5QnFqQixZQUQ1QyxFQUMwRGxwQixRQUFRLENBQUM2RixlQUFULENBQXlCc2pCLFlBRG5GLENBQXRCO0FBR0FucEIsVUFBUSxDQUFDTyxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0MsT0FBM0MsQ0FBbUQsQ0FBQ3dDLElBQUQsRUFBT2dtQixLQUFQLEtBQWlCO0FBQ2xFaG1CLFFBQUksQ0FBQ3ZFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVN3bkIsS0FBVCxFQUFnQjtBQUM3Q0EsV0FBSyxDQUFDdG5CLGNBQU47O0FBQ0FzRyx1QkFBT3NLLElBQVAsQ0FDRXdaLE1BREYsRUFFRTtBQUNFblosa0JBQVUsRUFBRSxVQURkO0FBRUVPLFlBQUksRUFBRSxJQUZSO0FBR0VuSyxjQUFNLEVBQUVpakI7QUFIVixPQUZGLEVBT0Vob0IsTUFBTSxDQUFDK25CLEtBQUssR0FBRyxDQUFULENBUFI7QUFVRCxLQVpEO0FBYUQsR0FkRDtBQWVEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTYixvQkFBVCxDQUE4QmIsZUFBOUIsRUFBK0M7QUFDN0MsUUFBTThCLFdBQVcsR0FBRyw2QkFBcEI7QUFDQSxNQUFJQyxlQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFDQSxNQUFJaEMsZUFBZSxLQUFLbGpCLFNBQXhCLEVBQW1DO0FBQ2pDaWxCLG1CQUFlLEdBQUdya0IsQ0FBQyxDQUFDb2tCLFdBQUQsRUFBYzlCLGVBQWQsQ0FBRCxDQUFnQzFOLFdBQWhDLEVBQWxCO0FBQ0EwUCxpQkFBYSxHQUFHcmdCLElBQUksQ0FBQ3dZLEtBQUwsQ0FBVzRILGVBQWUsR0FBRyxDQUFsQixHQUFzQixFQUFqQyxDQUFoQjtBQUNBcmtCLEtBQUMsQ0FBQ3NpQixlQUFELENBQUQsQ0FBbUI5USxJQUFuQixDQUF3QixrQkFBeEIsRUFBNEN0TSxHQUE1QyxDQUFnRCxLQUFoRCxFQUF1RG9mLGFBQWEsR0FBRyxJQUF2RTtBQUNELEdBSkQsTUFJTztBQUNMRCxtQkFBZSxHQUFHcmtCLENBQUMsQ0FBQ29rQixXQUFELENBQUQsQ0FBZXhQLFdBQWYsRUFBbEI7QUFDQTBQLGlCQUFhLEdBQUdyZ0IsSUFBSSxDQUFDd1ksS0FBTCxDQUFXNEgsZUFBZSxHQUFHLENBQWxCLEdBQXNCLEVBQWpDLENBQWhCO0FBQ0Fya0IsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J1a0IsR0FBdEIsQ0FBMEIsa0JBQTFCLEVBQThDcmYsR0FBOUMsQ0FBa0QsS0FBbEQsRUFBeURvZixhQUFhLEdBQUcsSUFBekU7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNoQix3QkFBVCxDQUFrQ3ZxQixPQUFsQyxFQUEyQztBQUN6QyxRQUFNc3JCLGVBQWUsR0FBR3JrQixDQUFDLENBQUMsbUJBQUQsRUFBc0JqSCxPQUF0QixDQUFELENBQWdDNmIsV0FBaEMsRUFBeEI7QUFDQSxRQUFNMFAsYUFBYSxHQUFHcmdCLElBQUksQ0FBQ3dZLEtBQUwsQ0FBVzRILGVBQVgsQ0FBdEI7QUFDQXJrQixHQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBV3lZLElBQVgsQ0FBZ0Isa0JBQWhCLEVBQW9DdE0sR0FBcEMsQ0FBd0MsS0FBeEMsRUFBK0NvZixhQUFhLEdBQUcsSUFBL0Q7QUFDRDs7UUFFT3BDLFEsR0FBQUEsUTtRQUFVaUIsb0IsR0FBQUEsb0I7UUFBc0JHLHdCLEdBQUFBLHdCO1FBQTBCRSxxQixHQUFBQSxxQjtRQUF1Qk0sb0IsR0FBQUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TXpGOzs7Ozs7QUFKQTs7QUFDQTs7QUFDQTtBQUlBLE1BQU1ob0IsU0FBUyxHQUFHLHNCQUFFLFdBQUYsQ0FBbEI7QUFDQSxNQUFNMG9CLGFBQWEsR0FBRyxzQkFBRSxNQUFGLENBQXRCOztBQUVBLE1BQU1DLElBQUksR0FBRyxTQUFTdEMsYUFBVCxHQUF5QjtBQUNwQztBQUNBO0FBQ0Esd0JBQUUsYUFBRixFQUFpQnJtQixTQUFqQixFQUE0QmlILEVBQTVCLENBQStCLE9BQS9CLEVBQXdDLFlBQVc7QUFDakQsUUFBSSxDQUFDLHNCQUFFLElBQUYsRUFBUXBFLE9BQVIsQ0FBZ0IsaUJBQWhCLEVBQW1DeVgsUUFBbkMsQ0FBNEMsY0FBNUMsQ0FBTCxFQUFrRTtBQUNoRSxVQUFJLHNCQUFFLElBQUYsRUFBUUEsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQzlCLDhCQUFFLHFCQUFGLEVBQXlCaFosT0FBekIsQ0FBaUMsUUFBakM7QUFDRCxPQUZELE1BRU87QUFDTCw4QkFBRSxJQUFGLEVBQVF1QixPQUFSLENBQWdCLE1BQWhCLEVBQXdCdkIsT0FBeEIsQ0FBZ0MsUUFBaEM7QUFDRDtBQUNGO0FBQ0YsR0FSRCxFQUhvQyxDQWFwQzs7QUFDQSx3QkFBRSxhQUFGLEVBQWlCdEIsU0FBakIsRUFBNEJpSCxFQUE1QixDQUErQixPQUEvQixFQUF3QyxZQUFXO0FBQ2pELFFBQUksQ0FBQyxzQkFBRSxJQUFGLEVBQVFwRSxPQUFSLENBQWdCLGlCQUFoQixFQUFtQ3lYLFFBQW5DLENBQTRDLGNBQTVDLENBQUwsRUFBa0U7QUFDaEUsNEJBQUUsSUFBRixFQUFRNUUsSUFBUixHQUFlOUQsV0FBZixDQUEyQixRQUEzQjtBQUNBLFlBQU1nWCxNQUFNLEdBQUdqTyxRQUFRLENBQUMsc0JBQUUsSUFBRixFQUFRa08sR0FBUixFQUFELENBQXZCOztBQUNBLFVBQUlELE1BQU0sSUFBSWpPLFFBQVEsQ0FBQyxzQkFBRSxJQUFGLEVBQVFyRCxJQUFSLENBQWEsS0FBYixDQUFELENBQXRCLEVBQTZDO0FBQzNDLGNBQU13UixZQUFZLEdBQUcsc0JBQUUsSUFBRixFQUFRaHFCLElBQVIsQ0FBYSxXQUFiLENBQXJCO0FBQ0EsOEJBQUUsaUJBQWlCZ3FCLFlBQWpCLEdBQWdDLElBQWxDLEVBQXdDRCxHQUF4QyxDQUE0Q0QsTUFBNUM7QUFDRDtBQUNGO0FBQ0YsR0FURCxFQWRvQyxDQXlCcEM7O0FBQ0Esd0JBQUUsTUFBRixFQUFVNW9CLFNBQVYsRUFBcUJpSCxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFVckosQ0FBVixFQUFhO0FBQzVDO0FBQ0EsUUFBSSxDQUFDLHNCQUFFLElBQUYsRUFBUWlGLE9BQVIsQ0FBZ0IsaUJBQWhCLEVBQW1DeVgsUUFBbkMsQ0FBNEMsY0FBNUMsQ0FBTCxFQUFrRTtBQUNoRSw0QkFBRSxJQUFGLEVBQVE1RSxJQUFSLEdBQWU5RCxXQUFmLENBQTJCLFFBQTNCOztBQUNBLFVBQUkrSSxRQUFRLENBQUMsc0JBQUUsSUFBRixFQUFRa08sR0FBUixFQUFELENBQVIsSUFBMkJsTyxRQUFRLENBQUMsc0JBQUUsSUFBRixFQUFRckQsSUFBUixDQUFhLEtBQWIsQ0FBRCxDQUF2QyxFQUE4RDtBQUM1RCw4QkFBRSxJQUFGLEVBQVF1UixHQUFSLENBQVksc0JBQUUsSUFBRixFQUFRdlIsSUFBUixDQUFhLEtBQWIsQ0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVJELEVBMUJvQyxDQW9DcEM7O0FBQ0Esd0JBQUUsa0JBQUYsRUFBc0J0WCxTQUF0QixFQUFpQ2lILEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDLFlBQVc7QUFDdEQ7QUFDQSxRQUFJLENBQUMsc0JBQUUsa0JBQUYsRUFBc0JxVCxRQUF0QixDQUErQixVQUEvQixDQUFMLEVBQWlEO0FBQy9DLFlBQU15TyxNQUFNLEdBQUcsc0JBQUUsY0FBRixFQUFrQkYsR0FBbEIsRUFBZjs7QUFDQSxVQUFJRSxNQUFNLEtBQUssRUFBZixFQUFtQjtBQUNqQiw4QkFBRSw4QkFBRixFQUFrQ0YsR0FBbEMsQ0FBc0MsRUFBdEM7QUFDRCxPQUZELE1BRU87QUFDTCw4QkFBRSw4QkFBRixFQUFrQ0EsR0FBbEMsQ0FBc0NFLE1BQXRDO0FBQ0Q7O0FBRUQsNEJBQUUscUJBQUYsRUFBeUJ6bkIsT0FBekIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGLEdBWkQsRUFyQ29DLENBbURwQzs7QUFDQW9uQixlQUFhLENBQUN6aEIsRUFBZCxDQUFpQixTQUFqQixFQUE0QixjQUE1QixFQUE0QyxZQUFZO0FBQ3RELDBCQUFFLElBQUYsRUFBUXBFLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIrTyxXQUF2QixDQUFtQyxjQUFuQztBQUNBLDBCQUFFLGVBQUYsRUFBbUJ3RixJQUFuQixDQUF3QixFQUF4QjtBQUNELEdBSEQ7O0FBS0EsTUFBRyxzQkFBRSx3Q0FBRixFQUE0Q3BYLFNBQTVDLEVBQXVEb1gsSUFBdkQsT0FBa0U5VCxTQUFyRSxFQUFnRjtBQUM5RSwwQkFBRSxlQUFGLEVBQW1CZ08sUUFBbkIsQ0FBNEIsY0FBNUI7QUFDQSwwQkFBRSxlQUFGLEVBQW1COEYsSUFBbkIsQ0FBd0Isc0JBQUUsd0NBQUYsRUFBNENBLElBQTVDLEVBQXhCO0FBQ0EsMEJBQUUsY0FBRixFQUFrQnlSLEdBQWxCLENBQXNCLHNCQUFFLDhCQUFGLEVBQWtDQSxHQUFsQyxFQUF0QjtBQUNELEdBN0RtQyxDQStEcEM7OztBQUNBLHdCQUFFLG1CQUFGLEVBQXVCN29CLFNBQXZCLEVBQWtDaUgsRUFBbEMsQ0FBcUMsT0FBckMsRUFBOEMsWUFBVztBQUN2RDtBQUNBLFFBQUksQ0FBQyxzQkFBRSxrQkFBRixFQUFzQnFULFFBQXRCLENBQStCLFVBQS9CLENBQUwsRUFBaUQ7QUFDL0MsWUFBTTBPLFdBQVcsR0FBRyxzQkFBRSxlQUFGLEVBQW1CSCxHQUFuQixFQUFwQjs7QUFDQSxVQUFJRyxXQUFXLEtBQUssRUFBcEIsRUFBd0I7QUFDdEIsOEJBQUUsMEJBQUYsRUFBOEJILEdBQTlCLENBQWtDLEVBQWxDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsOEJBQUUsMEJBQUYsRUFBOEJBLEdBQTlCLENBQWtDRyxXQUFsQztBQUNEOztBQUNELDRCQUFFLHFCQUFGLEVBQXlCMW5CLE9BQXpCLENBQWlDLFFBQWpDO0FBQ0Q7QUFDRixHQVhEO0FBYUEsd0JBQUUsc0JBQUYsRUFBMEJ0QixTQUExQixFQUFxQ2lILEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELFlBQVc7QUFDMUQ7QUFDQSxRQUFJLENBQUMsc0JBQUUsa0JBQUYsRUFBc0JxVCxRQUF0QixDQUErQixVQUEvQixDQUFMLEVBQWlEO0FBQy9DLDRCQUFFLDBCQUFGLEVBQThCdU8sR0FBOUIsQ0FBa0MsRUFBbEM7QUFDQSw0QkFBRSxxQkFBRixFQUF5QnZuQixPQUF6QixDQUFpQyxRQUFqQztBQUNEO0FBQ0YsR0FORCxFQTdFb0MsQ0FxRnBDOztBQUNBb25CLGVBQWEsQ0FBQ3poQixFQUFkLENBQWlCLFNBQWpCLEVBQTRCLGVBQTVCLEVBQTZDLFlBQVk7QUFDdkQsMEJBQUUsSUFBRixFQUFRcEUsT0FBUixDQUFnQixLQUFoQixFQUF1QitPLFdBQXZCLENBQW1DLGNBQW5DO0FBQ0EsMEJBQUUscUJBQUYsRUFBeUJ3RixJQUF6QixDQUE4QixFQUE5QjtBQUNELEdBSEQ7O0FBS0EsTUFBRyxzQkFBRSwwQ0FBRixFQUE4Q3BYLFNBQTlDLEVBQXlEb1gsSUFBekQsT0FBb0U5VCxTQUF2RSxFQUFrRjtBQUNoRiwwQkFBRSxxQkFBRixFQUF5QmdPLFFBQXpCLENBQWtDLGNBQWxDO0FBQ0EsMEJBQUUscUJBQUYsRUFBeUI4RixJQUF6QixDQUE4QixzQkFBRSwwQ0FBRixFQUE4Q0EsSUFBOUMsRUFBOUI7QUFDQSwwQkFBRSxlQUFGLEVBQW1CeVIsR0FBbkIsQ0FBdUIsc0JBQUUsMEJBQUYsRUFBOEJBLEdBQTlCLEVBQXZCO0FBQ0QsR0EvRm1DLENBaUdwQzs7O0FBQ0Esd0JBQUUsbUJBQUYsRUFBdUI3b0IsU0FBdkIsRUFBa0NpSCxFQUFsQyxDQUFxQyxPQUFyQyxFQUE4QyxVQUFTckosQ0FBVCxFQUFZO0FBQ3hELFFBQUksc0JBQUUsSUFBRixFQUFRMGMsUUFBUixDQUFpQixVQUFqQixDQUFKLEVBQWtDO0FBQ2hDMWMsT0FBQyxDQUFDQyxjQUFGO0FBQ0Q7QUFDRixHQUpEO0FBS0QsQ0F2R0Q7O2tCQXlHZThxQixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R2Y7O0FBSkE7O0FBQ0E7O0FBQ0E7QUFJQTtBQUNBLE1BQU1NLFVBQVUsR0FBRy9rQixDQUFDLENBQUMsZ0NBQUQsQ0FBcEI7QUFDQSxNQUFNZ2xCLFNBQVMsR0FBR2hsQixDQUFDLENBQUMsc0NBQUQsQ0FBbkI7O0FBRUEsTUFBTWlsQixRQUFRLEdBQUcsU0FBUzlDLGFBQVQsR0FBeUI7QUFDeEMsUUFBTXJtQixTQUFTLEdBQUdrRSxDQUFDLENBQUMsZUFBRCxDQUFuQixDQUR3QyxDQUV4Qzs7QUFDQUEsR0FBQyxDQUFDLGlDQUFELEVBQW9DbEUsU0FBcEMsQ0FBRCxDQUFnRGlILEVBQWhELENBQW1ELE9BQW5ELEVBQTRELFVBQVNySixDQUFULEVBQVk7QUFDdEVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU11ckIsV0FBVyxHQUFHQyxZQUFZLENBQUMsSUFBRCxDQUFaLENBQW1CLENBQW5CLENBQXBCOztBQUNBLFFBQUksQ0FBQ25sQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVyxRQUFSLENBQWlCLFNBQWpCLENBQUQsSUFBZ0MsQ0FBQ3BXLENBQUMsQ0FBQyxvQkFBRCxFQUF1QmxFLFNBQXZCLENBQUQsQ0FBbUNzYSxRQUFuQyxDQUE0QyxTQUE1QyxDQUFyQyxFQUE2RjtBQUMzRnBXLE9BQUMsQ0FBQyxpQ0FBRCxFQUFvQ2xFLFNBQXBDLENBQUQsQ0FBZ0Q0UixXQUFoRCxDQUE0RCxTQUE1RDtBQUNBMU4sT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb04sUUFBUixDQUFpQixTQUFqQjtBQUVBNFgsZUFBUyxDQUFDemEsSUFBVjtBQUNBeWEsZUFBUyxDQUFDckQsSUFBVixHQUFpQm5YLElBQWpCO0FBRUF4SyxPQUFDLENBQUMsd0JBQUQsRUFBMkJsRSxTQUEzQixDQUFELENBQXVDeU8sSUFBdkM7QUFDQXZLLE9BQUMsQ0FBQywyQ0FBRCxFQUE4Q2xFLFNBQTlDLENBQUQsQ0FBMEQwTyxJQUExRDtBQUVBNGEsdUJBQWlCLENBQUNGLFdBQUQsRUFBYyxRQUFkLEVBQXdCcHBCLFNBQXhCLENBQWpCO0FBQ0EsMkNBQXNCa0UsQ0FBQyxDQUFDLHNCQUFELENBQXZCLEVBWDJGLENBWTNGOztBQUNBQSxPQUFDLENBQUMsOENBQUQsRUFBaURsRSxTQUFqRCxDQUFELENBQTZEaUgsRUFBN0QsQ0FBZ0UsT0FBaEUsRUFBeUUsVUFBU3JKLENBQVQsRUFBWTtBQUNuRjJyQixxQkFBYSxDQUFDcmxCLENBQUMsQ0FBQyxJQUFELENBQUYsRUFBVWtsQixXQUFWLEVBQXVCcHBCLFNBQXZCLENBQWI7QUFDRCxPQUZEO0FBR0QsS0FoQkQsTUFnQk8sSUFBSWtFLENBQUMsQ0FBQyxvQkFBRCxFQUF1QmxFLFNBQXZCLENBQUQsQ0FBbUNzYSxRQUFuQyxDQUE0QyxTQUE1QyxDQUFKLEVBQTREO0FBQ2pFcFcsT0FBQyxDQUFDLGlDQUFELEVBQW9DbEUsU0FBcEMsQ0FBRCxDQUFnRDRSLFdBQWhELENBQTRELFNBQTVEO0FBQ0ExTixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFvTixRQUFSLENBQWlCLFNBQWpCO0FBQ0FnWSx1QkFBaUIsQ0FBQ0YsV0FBRCxFQUFjLEtBQWQsRUFBcUJwcEIsU0FBckIsQ0FBakI7QUFDRDtBQUNGLEdBeEJELEVBSHdDLENBNkJ0Qzs7QUFDRmtFLEdBQUMsQ0FBQyx3QkFBRCxFQUEyQmxFLFNBQTNCLENBQUQsQ0FBdUNpSCxFQUF2QyxDQUEwQyxPQUExQyxFQUFtRCxVQUFTckosQ0FBVCxFQUFZO0FBQzdEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNdXJCLFdBQVcsR0FBR0MsWUFBWSxDQUFDbmxCLENBQUMsQ0FBQyx5Q0FBRCxFQUE0Q2xFLFNBQTVDLENBQUQsQ0FBd0QsQ0FBeEQsQ0FBRCxDQUFaLENBQXlFLENBQXpFLENBQXBCO0FBQ0F3cEIsZUFBVyxDQUFDSixXQUFELEVBQWNwcEIsU0FBZCxDQUFYO0FBQ0FzcEIscUJBQWlCLENBQUNGLFdBQUQsRUFBYyxLQUFkLEVBQXFCcHBCLFNBQXJCLENBQWpCO0FBQ0QsR0FMRCxFQTlCd0MsQ0FxQ3hDOztBQUNBaXBCLFlBQVUsQ0FBQ2hpQixFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFTckosQ0FBVCxFQUFZO0FBQ2pDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJdXJCLFdBQVcsR0FBRyxVQUFsQjs7QUFDQSxRQUFJLENBQUNsbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb1csUUFBUixDQUFpQixjQUFqQixDQUFMLEVBQXVDO0FBQ3JDOE8saUJBQVcsR0FBR0MsWUFBWSxDQUFDLElBQUQsQ0FBWixDQUFtQixDQUFuQixDQUFkO0FBQ0FubEIsT0FBQyxDQUFDLHlCQUF5QmtsQixXQUExQixDQUFELENBQXdDMWUsSUFBeEMsQ0FBNkMsWUFBVztBQUN0RCxjQUFNK2UsS0FBSyxHQUFHSixZQUFZLENBQUMsSUFBRCxDQUFaLENBQW1CLENBQW5CLENBQWQ7QUFDQSxjQUFNSyxTQUFTLEdBQUcsb0NBQW9DTixXQUFwQyxHQUFrRCxXQUFsRCxHQUFnRUssS0FBaEUsR0FBd0UsR0FBMUY7QUFDQSxjQUFNRSxNQUFNLEdBQUcsc0NBQXNDRCxTQUFyRDtBQUNBLGNBQU1FLFNBQVMsR0FBRyxhQUFZUixXQUFaLEdBQXlCLFdBQXpCLEdBQXVDTSxTQUF6RDtBQUNBeGxCLFNBQUMsQ0FBQzBsQixTQUFELENBQUQsQ0FBYWYsR0FBYixDQUFpQjNrQixDQUFDLENBQUN5bEIsTUFBRCxDQUFELENBQVVkLEdBQVYsRUFBakI7QUFDRCxPQU5EO0FBT0Q7O0FBQ0RnQix1QkFBbUIsQ0FBQyxJQUFELEVBQU9ULFdBQVAsRUFBb0JwcEIsU0FBcEIsQ0FBbkI7QUFDRCxHQWRELEVBdEN3QyxDQXNEeEM7O0FBQ0FrRSxHQUFDLENBQUMsdUNBQUQsRUFBMENsRSxTQUExQyxDQUFELENBQXNEaUgsRUFBdEQsQ0FBeUQsT0FBekQsRUFBa0UsVUFBU3JKLENBQVQsRUFBWTtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FxRyxLQUFDLENBQUMsd0JBQUQsRUFBMkJsRSxTQUEzQixDQUFELENBQXVDME8sSUFBdkM7QUFDQW9iLG9CQUFnQixDQUFDOXBCLFNBQUQsQ0FBaEI7QUFDQWtFLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0J5TyxRQUF4QixDQUFpQyxTQUFqQyxFQUE0Q3lZLE1BQTVDO0FBQ0QsR0FMRCxFQXZEd0MsQ0E4RHhDOztBQUNBN2xCLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmxFLFNBQTVCLENBQUQsQ0FBd0NpSCxFQUF4QyxDQUEyQyxPQUEzQyxFQUFvRCxVQUFTckosQ0FBVCxFQUFZO0FBQzlEQSxLQUFDLENBQUNDLGNBQUY7QUFDQW1zQixxQkFBaUIsQ0FBQ2hxQixTQUFELENBQWpCO0FBQ0FpcUIsdUJBQW1CLENBQUNqcUIsU0FBRCxDQUFuQjtBQUNBa3FCLHVCQUFtQixDQUFDbHFCLFNBQUQsQ0FBbkI7QUFDRCxHQUxELEVBL0R3QyxDQXNFeEM7O0FBQ0FrRSxHQUFDLENBQUMsK0JBQUQsRUFBa0NsRSxTQUFsQyxDQUFELENBQThDaUgsRUFBOUMsQ0FBaUQsT0FBakQsRUFBMEQsVUFBU3JKLENBQVQsRUFBWTtBQUNwRXNHLEtBQUMsQ0FBQyx3QkFBRCxFQUEyQmxFLFNBQTNCLENBQUQsQ0FBdUN5TyxJQUF2QztBQUNBdkssS0FBQyxDQUFDLG1DQUFELEVBQXNDbEUsU0FBdEMsQ0FBRCxDQUFrRHlPLElBQWxEO0FBQ0F2SyxLQUFDLENBQUMsb0JBQUQsRUFBdUJsRSxTQUF2QixDQUFELENBQW1DNFIsV0FBbkMsQ0FBK0MsU0FBL0M7QUFDQTFOLEtBQUMsQ0FBQyxvQ0FBRCxFQUF1Q2xFLFNBQXZDLENBQUQsQ0FBbUQwTyxJQUFuRDtBQUNBdWIsdUJBQW1CLENBQUNqcUIsU0FBRCxDQUFuQjtBQUNELEdBTkQ7QUFPRCxDQTlFRCxDLENBZ0ZBOzs7QUFDQSxTQUFTdXBCLGFBQVQsQ0FBdUJ0c0IsT0FBdkIsRUFBZ0Ntc0IsV0FBaEMsRUFBNkNwcEIsU0FBN0MsRUFBd0Q7QUFDdERrRSxHQUFDLENBQUMsZUFBRCxFQUFrQmpILE9BQWxCLENBQUQsQ0FBNEJ5TixJQUE1QixDQUFpQyxZQUFXO0FBQzFDLFVBQU1nZixTQUFTLEdBQUdMLFlBQVksQ0FBQyxJQUFELENBQVosQ0FBbUIsQ0FBbkIsQ0FBbEI7QUFDQSxVQUFNYyxhQUFhLEdBQUcsb0NBQW9DZixXQUFwQyxHQUFrRCxXQUFsRCxHQUFnRU0sU0FBaEUsR0FBNEUsS0FBbEc7QUFDQSxVQUFNVSxTQUFTLEdBQUcsc0NBQXNDRCxhQUF4RDtBQUNBLFVBQU1FLGlCQUFpQixHQUFHLFdBQVVqQixXQUFWLEdBQXVCLEdBQXZCLEdBQTZCTSxTQUF2RDtBQUVBLFFBQUlZLFdBQVcsR0FBR3BtQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxbUIsSUFBUixFQUFsQjtBQUNBcm1CLEtBQUMsQ0FBQ21tQixpQkFBRCxDQUFELENBQXFCRSxJQUFyQixDQUEwQkQsV0FBMUI7O0FBRUEsUUFBSVosU0FBUyxLQUFLLGFBQWxCLEVBQWlDO0FBQy9CWSxpQkFBVyxHQUFHcG1CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFtQixJQUFSLEdBQWVDLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBZDtBQUNEOztBQUNEdG1CLEtBQUMsQ0FBQ2ttQixTQUFELENBQUQsQ0FBYXZCLEdBQWIsQ0FBaUJ5QixXQUFqQjs7QUFFQSxRQUFJWixTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsVUFBSXhsQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxbUIsSUFBUixHQUFlRSxJQUFmLE9BQTBCLEVBQTlCLEVBQWtDO0FBQ2hDdm1CLFNBQUMsQ0FBQyx3QkFBd0JrbEIsV0FBekIsQ0FBRCxDQUF1Q3hYLFdBQXZDLENBQW1ELFFBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wxTixTQUFDLENBQUMsd0JBQXdCa2xCLFdBQXpCLENBQUQsQ0FBdUM5WCxRQUF2QyxDQUFnRCxRQUFoRDtBQUNEO0FBQ0Y7O0FBRURwTixLQUFDLENBQUNtbUIsaUJBQUQsQ0FBRCxDQUFxQnhuQixPQUFyQixDQUE2QixTQUE3QixFQUF3Q3lVLElBQXhDLENBQTZDLFVBQVVvVCxnQkFBZ0IsQ0FBQ2hCLFNBQUQsQ0FBdkUsRUFBb0ZZLFdBQXBGO0FBQ0QsR0F2QkQ7QUF3QkFwbUIsR0FBQyxDQUFDLGtEQUFELEVBQXFEbEUsU0FBckQsQ0FBRCxDQUFpRTJxQixJQUFqRSxDQUFzRSxTQUF0RSxFQUFpRixJQUFqRjtBQUNBWCxtQkFBaUIsQ0FBQ2hxQixTQUFELENBQWpCO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBUzZwQixtQkFBVCxDQUE2QjVzQixPQUE3QixFQUFzQ21zQixXQUF0QyxFQUFtRHBwQixTQUFuRCxFQUE4RDtBQUM1RCxRQUFNTCxJQUFJLEdBQUd1RSxDQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBVzRGLE9BQVgsQ0FBbUIsTUFBbkIsQ0FBYjtBQUNBcUIsR0FBQyxDQUFDLDRCQUFELEVBQStCdkUsSUFBL0IsQ0FBRCxDQUFzQ2twQixHQUF0QyxDQUEwQ08sV0FBMUM7QUFDQXdCLGtCQUFnQixDQUFDeEIsV0FBRCxFQUFjcHBCLFNBQWQsQ0FBaEI7QUFFQWtFLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmxFLFNBQTVCLENBQUQsQ0FBd0NzUixRQUF4QyxDQUFpRCxTQUFqRDtBQUNBcE4sR0FBQyxDQUFDMm1CLElBQUYsQ0FBTztBQUNMcGdCLFFBQUksRUFBRSxNQUREO0FBRUxwTixPQUFHLEVBQUVzQyxJQUFJLENBQUMyWCxJQUFMLENBQVUsUUFBVixDQUZBO0FBR0x4WSxRQUFJLEVBQUVhLElBQUksQ0FBQ21yQixTQUFMLEVBSEQ7QUFJTG5mLFdBQU8sRUFBRSxpQkFBUzlNLFFBQVQsRUFBbUI7QUFDMUIsWUFBTWtzQixjQUFjLEdBQUc3bUIsQ0FBQyxDQUFDckYsUUFBRCxDQUF4QjtBQUNBLFlBQU1tc0IsU0FBUyxHQUFHL0IsVUFBVSxDQUFDM08sUUFBWCxDQUFvQixjQUFwQixDQUFsQjs7QUFDQSxVQUFHeVEsY0FBYyxDQUFDelEsUUFBZixDQUF3QixzQkFBeEIsQ0FBSCxFQUFvRDtBQUNsRHBXLFNBQUMsQ0FBQywyQkFBMkJrbEIsV0FBNUIsRUFBeUNwcEIsU0FBekMsQ0FBRCxDQUFxRDBLLElBQXJELENBQTBELFlBQVc7QUFDbkUsZ0JBQU1nZixTQUFTLEdBQUdMLFlBQVksQ0FBQyxJQUFELENBQVosQ0FBbUIsQ0FBbkIsQ0FBbEI7QUFFQTRCLDJCQUFpQixDQUFDLElBQUQsRUFBTzdCLFdBQVAsRUFBb0JNLFNBQXBCLEVBQStCcUIsY0FBL0IsQ0FBakIsQ0FIbUUsQ0FJbkU7O0FBQ0EsY0FBSUMsU0FBSixFQUFlO0FBQ2Isa0JBQU0vdEIsT0FBTyxHQUFHaUgsQ0FBQyxDQUFDLDJCQUEyQmduQixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBOUMsR0FBOEQsR0FBOUQsR0FBb0VNLFNBQXJFLEVBQWdGMXBCLFNBQWhGLENBQWpCO0FBQ0FpckIsNkJBQWlCLENBQUNodUIsT0FBRCxFQUFVaXVCLG1CQUFtQixDQUFDOUIsV0FBRCxDQUE3QixFQUE0Q00sU0FBNUMsRUFBdURxQixjQUF2RCxDQUFqQjtBQUNEOztBQUVEN21CLFdBQUMsQ0FBQyxlQUFELEVBQWtCbEUsU0FBbEIsQ0FBRCxDQUE4Qm9YLElBQTlCLENBQW1DbFQsQ0FBQyxDQUFDLGVBQUQsRUFBa0I2bUIsY0FBbEIsQ0FBRCxDQUFtQzNULElBQW5DLEVBQW5DO0FBQ0QsU0FYRDs7QUFZQSxZQUFJNFQsU0FBSixFQUFlO0FBQ2I5bUIsV0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUMwTixXQUF6QyxDQUFxRCxRQUFyRDtBQUNBMU4sV0FBQyxDQUFDLG9CQUFELEVBQXVCbEUsU0FBdkIsQ0FBRCxDQUFtQ3NSLFFBQW5DLENBQTRDLFFBQTVDO0FBQ0E2WixzQkFBWSxDQUFDbnJCLFNBQUQsQ0FBWjtBQUNEOztBQUNEZ3FCLHlCQUFpQixDQUFDaHFCLFNBQUQsQ0FBakI7QUFDQWlxQiwyQkFBbUIsQ0FBQ2pxQixTQUFELENBQW5CO0FBQ0Q7QUFDRixLQTVCSTtBQTZCTHZCLFNBQUssRUFBRSxlQUFTQSxNQUFULEVBQWdCO0FBQ3JCd3JCLHlCQUFtQixDQUFDanFCLFNBQUQsQ0FBbkI7QUFDQWtFLE9BQUMsQ0FBQ0EsQ0FBQyxDQUFDa25CLFNBQUYsQ0FBWTNzQixNQUFLLENBQUM0c0IsWUFBbEIsRUFBZ0MsQ0FBaEMsQ0FBRCxDQUFELENBQXNDM1AsSUFBdEMsQ0FBMkMscUJBQTNDLEVBQWtFaFIsSUFBbEUsQ0FBdUUsWUFBVztBQUNoRixjQUFNZ2YsU0FBUyxHQUFHeGxCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUJ5VSxJQUF6QixDQUE4QixLQUE5QixDQUFsQjtBQUNBLGNBQU1nVSxVQUFVLEdBQUdwbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcW1CLElBQVIsRUFBbkI7QUFDQXJtQixTQUFDLENBQUMsNkJBQTRCd2xCLFNBQTVCLEdBQXVDLElBQXhDLEVBQThDMXBCLFNBQTlDLENBQUQsQ0FBMERzUixRQUExRCxDQUFtRSxZQUFuRSxFQUFpRmlhLEtBQWpGLENBQXVGLHFGQUFxRkQsVUFBckYsR0FBa0csZ0JBQXpMO0FBQ0QsT0FKRDtBQUtEO0FBcENJLEdBQVA7QUFzQ0Q7QUFFRDs7O0FBQ0EsU0FBU0UsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJyQyxXQUE5QixFQUEyQ3pwQixJQUEzQyxFQUFpREssU0FBakQsRUFBNEQ7QUFDMUQsUUFBTTByQixjQUFjLEdBQUcsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixhQUExQixDQUF2QjtBQUNBLFFBQU1DLFVBQVUsR0FBR3puQixDQUFDLENBQUMseUNBQXlDa2xCLFdBQTFDLEVBQXVEcHBCLFNBQXZELENBQUQsQ0FBbUVsQixJQUFuRSxFQUFuQjtBQUNBb0YsR0FBQyxDQUFDdkUsSUFBSSxHQUFHLFNBQVAsR0FBbUI4ckIsT0FBbkIsR0FBNkIsSUFBOUIsRUFBb0N6ckIsU0FBcEMsQ0FBRCxDQUFnRDBLLElBQWhELENBQXFELFlBQVc7QUFDOUQsVUFBTWtoQixLQUFLLEdBQUcsY0FBZDtBQUNBLFFBQUlsQyxTQUFTLEdBQUdrQyxLQUFLLENBQUN4bEIsSUFBTixDQUFXbEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb1QsSUFBUixDQUFhLE1BQWIsQ0FBWCxFQUFpQyxDQUFqQyxDQUFoQjs7QUFDQSxRQUFJLENBQUNvVSxjQUFjLENBQUNHLFFBQWYsQ0FBd0JuQyxTQUF4QixDQUFMLEVBQXlDO0FBQ3ZDQSxlQUFTLEdBQUdBLFNBQVMsQ0FBQzVlLFdBQVYsRUFBWjtBQUNEOztBQUNENUcsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMmtCLEdBQVIsQ0FBWThDLFVBQVUsQ0FBQ2pDLFNBQUQsQ0FBdEI7QUFDRCxHQVBEO0FBUUF4bEIsR0FBQyxDQUFDLHlDQUFELEVBQTRDbEUsU0FBNUMsQ0FBRCxDQUF3RDJxQixJQUF4RCxDQUE2RCxTQUE3RCxFQUF3RSxJQUF4RTtBQUNEO0FBRUQ7OztBQUNBLFNBQVNiLGdCQUFULENBQTBCOXBCLFNBQTFCLEVBQXFDO0FBQ25DLEdBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0JOLE9BQXhCLENBQWlDMHBCLFdBQUQsSUFBaUI7QUFDL0MsVUFBTXFDLE9BQU8sR0FBRyw2QkFBNkJyQyxXQUE3QixHQUEyQyxTQUEzRDtBQUNBb0MsZUFBVyxDQUFDQyxPQUFELEVBQVVyQyxXQUFWLEVBQXVCLG9CQUF2QixFQUE2Q3BwQixTQUE3QyxDQUFYO0FBQ0QsR0FIRDtBQUlEO0FBRUQ7OztBQUNBLFNBQVM0cUIsZ0JBQVQsQ0FBMEJ4QixXQUExQixFQUF1Q3BwQixTQUF2QyxFQUFrRDtBQUNoRCxRQUFNOHJCLGdCQUFnQixHQUFHWixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBNUM7QUFDQSxNQUFJcUMsT0FBTyxHQUFHLG9CQUFvQkssZ0JBQWxDOztBQUNBLE1BQUk3QyxVQUFVLENBQUMzTyxRQUFYLENBQW9CLGNBQXBCLENBQUosRUFBeUM7QUFDdkN5UixpQkFBYSxDQUFDM0MsV0FBRCxFQUFjMEMsZ0JBQWQsRUFBZ0Msb0JBQWhDLEVBQXNEOXJCLFNBQXRELENBQWI7QUFDRCxHQUZELE1BRU87QUFDTHdyQixlQUFXLENBQUNDLE9BQUQsRUFBVUssZ0JBQVYsRUFBNEIsb0JBQTVCLEVBQWtEOXJCLFNBQWxELENBQVg7QUFDRDtBQUNGLEMsQ0FFRDs7O0FBQ0EsU0FBUytyQixhQUFULENBQXVCM0MsV0FBdkIsRUFBb0MwQyxnQkFBcEMsRUFBc0Ruc0IsSUFBdEQsRUFBNERLLFNBQTVELEVBQXVFO0FBQ3JFLFFBQU15ckIsT0FBTyxHQUFHLG9CQUFvQnJDLFdBQXBDO0FBQ0EsUUFBTTRDLFlBQVksR0FBRyxvQkFBb0JGLGdCQUF6QztBQUNBNW5CLEdBQUMsQ0FBQ3ZFLElBQUksR0FBRyxTQUFQLEdBQW1COHJCLE9BQW5CLEdBQTZCLElBQTlCLEVBQW9DenJCLFNBQXBDLENBQUQsQ0FBZ0QwSyxJQUFoRCxDQUFxRCxZQUFXO0FBQzlELFVBQU1raEIsS0FBSyxHQUFHLGNBQWQ7QUFDQSxRQUFJbEMsU0FBUyxHQUFHa0MsS0FBSyxDQUFDeGxCLElBQU4sQ0FBV2xDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9ULElBQVIsQ0FBYSxNQUFiLENBQVgsRUFBaUMsQ0FBakMsQ0FBaEI7O0FBQ0EsUUFBSW9TLFNBQVMsS0FBSyxhQUFsQixFQUFpQztBQUMvQkEsZUFBUyxHQUFHQSxTQUFTLENBQUM1ZSxXQUFWLEVBQVo7QUFDRDs7QUFDRCxVQUFNbWhCLFFBQVEsR0FBRyxNQUFNRCxZQUFOLEdBQXFCLEdBQXJCLEdBQTJCdEMsU0FBNUM7QUFDQXhsQixLQUFDLENBQUMrbkIsUUFBRCxDQUFELENBQVlwRCxHQUFaLENBQWdCM2tCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJrQixHQUFSLEVBQWhCO0FBQ0QsR0FSRDtBQVNELEMsQ0FFRDs7O0FBQ0EsU0FBU29DLGlCQUFULENBQTJCaHVCLE9BQTNCLEVBQW9DbXNCLFdBQXBDLEVBQWlETSxTQUFqRCxFQUE0RDFwQixTQUE1RCxFQUF1RTtBQUNyRTtBQUNBLFFBQU1rc0IsUUFBUSxHQUFHaG9CLENBQUMsQ0FBQyxXQUFXa2xCLFdBQVgsR0FBeUIsV0FBekIsR0FBdUNNLFNBQXhDLEVBQW1EMXBCLFNBQW5ELENBQUQsQ0FBK0RvWCxJQUEvRCxFQUFqQixDQUZxRSxDQUlyRTs7QUFDQSxRQUFNK1UsYUFBYSxHQUFHLG9DQUFvQy9DLFdBQXBDLEdBQWtELFdBQWxELEdBQWdFTSxTQUFoRSxHQUE0RSxHQUFsRztBQUNBLFFBQU0wQyxjQUFjLEdBQUcsc0NBQXNDRCxhQUE3RCxDQU5xRSxDQVFyRTs7QUFDQWpvQixHQUFDLENBQUNrb0IsY0FBRCxDQUFELENBQWtCdkQsR0FBbEIsQ0FBc0JxRCxRQUF0QixFQVRxRSxDQVdyRTs7QUFDQWhvQixHQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBV3N0QixJQUFYLENBQWdCMkIsUUFBaEI7O0FBQ0EsTUFBSXhDLFNBQVMsS0FBSyxhQUFsQixFQUFpQztBQUMvQnhsQixLQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBV3N0QixJQUFYLENBQWdCcm1CLENBQUMsQ0FBQyxXQUFXa2xCLFdBQVgsR0FBeUIsc0JBQTFCLEVBQWtEcHBCLFNBQWxELENBQUQsQ0FBOERvWCxJQUE5RCxFQUFoQjtBQUNELEdBZm9FLENBaUJyRTs7O0FBQ0EsTUFBSXNTLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQixRQUFJeGxCLENBQUMsQ0FBQyxXQUFXa2xCLFdBQVgsR0FBeUIsV0FBekIsR0FBdUNNLFNBQXhDLEVBQW1EMXBCLFNBQW5ELENBQUQsQ0FBK0RvWCxJQUEvRCxHQUFzRXFULElBQXRFLE9BQWlGLEVBQXJGLEVBQXlGO0FBQ3ZGdm1CLE9BQUMsQ0FBQyx3QkFBd0JrbEIsV0FBekIsQ0FBRCxDQUF1Q3hYLFdBQXZDLENBQW1ELFFBQW5EO0FBQ0QsS0FGRCxNQUVPO0FBQ0wxTixPQUFDLENBQUMsd0JBQXdCa2xCLFdBQXpCLENBQUQsQ0FBdUM5WCxRQUF2QyxDQUFnRCxRQUFoRDtBQUNEO0FBQ0YsR0F4Qm9FLENBMEJyRTs7O0FBQ0FwTixHQUFDLENBQUMsa0NBQWtDa2xCLFdBQW5DLENBQUQsQ0FBaUQ5UixJQUFqRCxDQUFzRCxVQUFVb1QsZ0JBQWdCLENBQUNoQixTQUFELENBQWhGLEVBQTZGd0MsUUFBN0Y7QUFDRDtBQUVEOzs7QUFDQSxTQUFTZixZQUFULENBQXNCbnJCLFNBQXRCLEVBQWlDO0FBQy9CO0FBQ0FrRSxHQUFDLENBQUMsaUJBQUQsRUFBb0JsRSxTQUFwQixDQUFELENBQWdDckIsTUFBaEMsR0FGK0IsQ0FHL0I7O0FBQ0F1RixHQUFDLENBQUMsdUJBQUQsRUFBMEJsRSxTQUExQixDQUFELENBQXNDNFIsV0FBdEMsQ0FBa0QsU0FBbEQsRUFKK0IsQ0FLL0I7O0FBQ0ExTixHQUFDLENBQUMsb0JBQUQsRUFBdUJsRSxTQUF2QixDQUFELENBQW1Dc1IsUUFBbkMsQ0FBNEMsUUFBNUM7QUFDQXBOLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmxFLFNBQTVCLENBQUQsQ0FBd0M0UixXQUF4QyxDQUFvRCxRQUFwRDtBQUNBMU4sR0FBQyxDQUFDLHlCQUFELEVBQTRCbEUsU0FBNUIsQ0FBRCxDQUF3Q3NSLFFBQXhDLENBQWlELFFBQWpELEVBUitCLENBUy9COztBQUNBcE4sR0FBQyxDQUFDLDhCQUFELEVBQWlDbEUsU0FBakMsQ0FBRCxDQUE2QzRSLFdBQTdDLENBQXlELFFBQXpELEVBQW1FOEQsSUFBbkUsQ0FBd0UsT0FBeEUsRUFBaUZwRSxRQUFqRixDQUEwRixRQUExRjtBQUNBcE4sR0FBQyxDQUFDLG1DQUFELEVBQXNDbEUsU0FBdEMsQ0FBRCxDQUFrRDRSLFdBQWxELENBQThELFFBQTlEO0FBQ0ExTixHQUFDLENBQUMsaUNBQUQsRUFBb0NsRSxTQUFwQyxDQUFELENBQWdENFIsV0FBaEQsQ0FBNEQsUUFBNUQ7QUFDRDtBQUVEOzs7QUFDQSxTQUFTb1ksaUJBQVQsQ0FBMkJocUIsU0FBM0IsRUFBc0M7QUFDcENrRSxHQUFDLENBQUMsbUNBQUQsRUFBc0NsRSxTQUF0QyxDQUFELENBQWtEeU8sSUFBbEQ7QUFDQXZLLEdBQUMsQ0FBQyx3QkFBRCxFQUEyQmxFLFNBQTNCLENBQUQsQ0FBdUMwTyxJQUF2QztBQUNBd2EsV0FBUyxDQUFDeGEsSUFBVjtBQUNBd2EsV0FBUyxDQUFDckQsSUFBVixHQUFpQnBYLElBQWpCO0FBQ0F2SyxHQUFDLENBQUMsb0JBQUQsRUFBdUJsRSxTQUF2QixDQUFELENBQW1DNFIsV0FBbkMsQ0FBK0MsU0FBL0M7QUFDQTFOLEdBQUMsQ0FBQyxpQ0FBRCxFQUFvQ2xFLFNBQXBDLENBQUQsQ0FBZ0Q0UixXQUFoRCxDQUE0RCxTQUE1RDtBQUNBMU4sR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIsQ0FBM0IsRUFBOEIrUCxTQUE5QixHQUEwQyxDQUExQztBQUNEO0FBRUQ7OztBQUNBLFNBQVNnVyxtQkFBVCxDQUE2QmpxQixTQUE3QixFQUF3QztBQUN0QztBQUNBLE1BQUlvcEIsV0FBVyxHQUFHQyxZQUFZLENBQUNKLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBWixDQUE0QixDQUE1QixDQUFsQjs7QUFDQSxNQUFJRyxXQUFXLEtBQUssY0FBcEIsRUFBb0M7QUFDbENBLGVBQVcsR0FBR0MsWUFBWSxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQVosQ0FBNEIsQ0FBNUIsQ0FBZDtBQUNEOztBQUNEL2tCLEdBQUMsQ0FBQyxhQUFha2xCLFdBQWIsR0FBMkIsUUFBNUIsRUFBc0NwcEIsU0FBdEMsQ0FBRCxDQUFrRHlPLElBQWxEO0FBQ0F2SyxHQUFDLENBQUMsYUFBYWduQixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBaEMsR0FBZ0QsUUFBakQsRUFBMkRwcEIsU0FBM0QsQ0FBRCxDQUF1RTBPLElBQXZFO0FBRUF4SyxHQUFDLENBQUMseUJBQUQsRUFBNEJsRSxTQUE1QixDQUFELENBQXdDNFIsV0FBeEMsQ0FBb0QsU0FBcEQ7QUFDQTFOLEdBQUMsQ0FBQyxxREFBRCxFQUF3RGxFLFNBQXhELENBQUQsQ0FBb0U0UixXQUFwRSxDQUFnRixZQUFoRjtBQUNBMU4sR0FBQyxDQUFDLHNDQUFELEVBQXlDbEUsU0FBekMsQ0FBRCxDQUFxRHJCLE1BQXJEO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBU3VyQixtQkFBVCxDQUE2QmxxQixTQUE3QixFQUF3QztBQUN0Q2tFLEdBQUMsQ0FBQyxxQ0FBRCxFQUF3Q2xFLFNBQXhDLENBQUQsQ0FBb0QwSyxJQUFwRCxDQUF5RCxZQUFXO0FBQ2xFLFVBQU0yaEIsT0FBTyxHQUFHbm9CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsRUFBaEI7QUFDQSxVQUFNc3FCLFdBQVcsR0FBSSxLQUFLa0QsU0FBTCxDQUFldGpCLEtBQWYsQ0FBcUIsS0FBckIsQ0FBRCxDQUE4QixDQUE5QixDQUFwQjtBQUNBLFVBQU11akIsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosT0FBWixDQUFuQjtBQUVBRSxjQUFVLENBQUM3c0IsT0FBWCxDQUFvQnpDLE9BQUQsSUFBYTtBQUM5QixVQUFJeXNCLFNBQVMsR0FBR3pzQixPQUFoQjs7QUFDQSxVQUFJQSxPQUFPLEtBQUssYUFBaEIsRUFBK0I7QUFDN0J5c0IsaUJBQVMsR0FBRyxhQUFaO0FBQ0Q7O0FBQ0QsWUFBTWdELGFBQWEsR0FBRyxXQUFXdEQsV0FBWCxHQUF5QixHQUF6QixHQUErQk0sU0FBckQ7QUFDQSxZQUFNeUMsYUFBYSxHQUFHLG9DQUFvQy9DLFdBQXBDLEdBQWtELFdBQWxELEdBQWdFTSxTQUFoRSxHQUE0RSxLQUFsRztBQUNBLFlBQU0wQyxjQUFjLEdBQUcsd0JBQXdCRCxhQUEvQyxDQVA4QixDQVM5Qjs7QUFDQWpvQixPQUFDLENBQUNrb0IsY0FBRCxFQUFpQnBzQixTQUFqQixDQUFELENBQTZCNm9CLEdBQTdCLENBQWlDd0QsT0FBTyxDQUFDcHZCLE9BQUQsQ0FBeEM7O0FBQ0EsVUFBSUEsT0FBTyxLQUFLLGFBQWhCLEVBQStCO0FBQzdCO0FBQ0FpSCxTQUFDLENBQUN3b0IsYUFBRCxDQUFELENBQWlCbkMsSUFBakIsQ0FBc0I4QixPQUFPLENBQUNwdkIsT0FBRCxDQUE3QjtBQUNEO0FBQ0YsS0FmRDtBQWdCRCxHQXJCRDtBQXNCRCxDLENBRUQ7OztBQUNBLFNBQVN1c0IsV0FBVCxDQUFxQkosV0FBckIsRUFBa0NwcEIsU0FBbEMsRUFBNkM7QUFDM0NrRSxHQUFDLENBQUMsd0JBQUQsRUFBMkJsRSxTQUEzQixDQUFELENBQXVDME8sSUFBdkM7QUFDQXhLLEdBQUMsQ0FBQyxtQ0FBRCxFQUFzQ2xFLFNBQXRDLENBQUQsQ0FBa0QwTyxJQUFsRDtBQUVBeEssR0FBQyxDQUFDLHVDQUFELEVBQTBDbEUsU0FBMUMsQ0FBRCxDQUFzRDRSLFdBQXRELENBQWtFLFFBQWxFO0FBQ0ExTixHQUFDLENBQUMsdUNBQUQsRUFBMENsRSxTQUExQyxDQUFELENBQXNENm9CLEdBQXRELENBQTBELEVBQTFEO0FBQ0Eza0IsR0FBQyxDQUFDLG9CQUFELEVBQXVCbEUsU0FBdkIsQ0FBRCxDQUFtQ3NSLFFBQW5DLENBQTRDLFNBQTVDLEVBTjJDLENBUTNDOztBQUNBcE4sR0FBQyxDQUFDLG9DQUFELEVBQXVDbEUsU0FBdkMsQ0FBRCxDQUFtRDBPLElBQW5EO0FBQ0F4SyxHQUFDLENBQUMsNkJBQTZCa2xCLFdBQTdCLEdBQTJDLFVBQTVDLEVBQXdEcHBCLFNBQXhELENBQUQsQ0FBb0V5TyxJQUFwRTtBQUNEO0FBRUQ7OztBQUNBLFNBQVM2YSxpQkFBVCxDQUEyQkYsV0FBM0IsRUFBd0N1RCxZQUF4QyxFQUFzRDNzQixTQUF0RCxFQUFpRTtBQUMvRGtFLEdBQUMsQ0FBQyxNQUFNeW9CLFlBQU4sR0FBcUIsR0FBckIsR0FBMkJ2RCxXQUEzQixHQUF5QyxRQUExQyxFQUFvRHBwQixTQUFwRCxDQUFELENBQWdFeU8sSUFBaEU7QUFDQXZLLEdBQUMsQ0FBQyxNQUFNeW9CLFlBQU4sR0FBcUIsR0FBckIsR0FBMkJ6QixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBOUMsR0FBOEQsUUFBL0QsRUFBeUVwcEIsU0FBekUsQ0FBRCxDQUFxRjBPLElBQXJGLEdBRitELENBSS9EOztBQUNBdWEsWUFBVSxDQUFDM1gsUUFBWCxDQUFvQjhYLFdBQXBCO0FBQ0FILFlBQVUsQ0FBQ3JYLFdBQVgsQ0FBdUJzWixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBMUM7QUFDRDtBQUVEOztBQUNBOztBQUNBO0FBRUE7OztBQUNBLFNBQVNDLFlBQVQsQ0FBc0Jwc0IsT0FBdEIsRUFBK0I7QUFDN0IsU0FBT0EsT0FBTyxDQUFDcXZCLFNBQVIsQ0FBa0J0akIsS0FBbEIsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBUzBoQixnQkFBVCxDQUEwQmhCLFNBQTFCLEVBQXFDO0FBQ25DLFFBQU1rRCxPQUFPLEdBQUcsVUFBVXhtQixJQUFWLENBQWVzakIsU0FBZixDQUFoQjs7QUFDQSxNQUFJa0QsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFdBQU8sQ0FBQ2xELFNBQVMsQ0FBQzVmLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0I4aUIsT0FBTyxDQUFDMUUsS0FBNUIsSUFBcUMsR0FBckMsR0FBMkN3QixTQUFTLENBQUM1ZixNQUFWLENBQWlCOGlCLE9BQU8sQ0FBQzFFLEtBQXpCLEVBQWdDd0IsU0FBUyxDQUFDdHFCLE1BQTFDLENBQTVDLEVBQStGMEwsV0FBL0YsRUFBUDtBQUNEOztBQUVELFNBQU80ZSxTQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTd0IsbUJBQVQsQ0FBNkI5QixXQUE3QixFQUEwQztBQUN4QyxTQUFRQSxXQUFXLEtBQUssVUFBakIsR0FBK0IsU0FBL0IsR0FBMkMsVUFBbEQ7QUFDRDs7a0JBRWNELFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV2Y7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNMEQsV0FBVyxHQUFHLFNBQVN4RyxhQUFULEdBQXlCO0FBQzNDO0FBQ0FuaUIsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIrQyxFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxVQUFTckosQ0FBVCxFQUFZO0FBQ3BEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNOEIsSUFBSSxHQUFHdUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixNQUFoQixDQUFiO0FBQ0FxQixLQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUTJSLFFBQVIsQ0FBaUIsU0FBakI7QUFDQXBOLEtBQUMsQ0FBQzJtQixJQUFGLENBQU87QUFDTHBnQixVQUFJLEVBQUUsTUFERDtBQUVMcE4sU0FBRyxFQUFFc0MsSUFBSSxDQUFDMlgsSUFBTCxDQUFVLFFBQVYsQ0FGQTtBQUdMeFksVUFBSSxFQUFFYSxJQUFJLENBQUNtckIsU0FBTCxFQUhEO0FBSUxuZixhQUFPLEVBQUUsaUJBQVM5TSxRQUFULEVBQW1CO0FBQzFCcUYsU0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNrVCxJQUEzQyxDQUFnRHZZLFFBQWhEO0FBQ0FxRixTQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjRvQixLQUEzQixDQUFpQyxNQUFqQyxFQUYwQixDQUcxQjs7QUFDQTVvQixTQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQzJrQixHQUEzQyxDQUErQyxFQUEvQyxFQUFtRDhCLElBQW5ELENBQXlELFNBQXpELEVBQW9FLEtBQXBFO0FBQ0F6bUIsU0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0YwTixXQUFsRixDQUE4RixZQUE5RjtBQUNBMU4sU0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0N2RixNQUF4QztBQUNBdUYsU0FBQyxDQUFDdkUsSUFBRCxDQUFELENBQVFpUyxXQUFSLENBQW9CLFNBQXBCO0FBQ0QsT0FaSTtBQWFMblQsV0FBSyxFQUFFLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckIsWUFBSUEsTUFBSyxDQUFDc3VCLE1BQU4sS0FBaUIsR0FBckIsRUFBMEI7QUFDeEI3b0IsV0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0N2RixNQUF4QztBQUNBLGdCQUFNcXVCLFNBQVMsR0FBRzlvQixDQUFDLENBQUNBLENBQUMsQ0FBQ2tuQixTQUFGLENBQVkzc0IsTUFBSyxDQUFDNHNCLFlBQWxCLEVBQWdDLENBQWhDLENBQUQsQ0FBRCxDQUFzQzNQLElBQXRDLENBQTJDLE1BQTNDLEVBQW1EdVIsT0FBbkQsRUFBbEI7QUFDQUQsbUJBQVMsQ0FBQ3R0QixPQUFWLENBQWtCakIsS0FBSyxJQUFJO0FBQ3pCLGdCQUFJQSxLQUFLLENBQUN5dUIsU0FBTixLQUFvQixFQUF4QixFQUE0QjtBQUMxQixrQkFBSXp1QixLQUFLLENBQUM2dEIsU0FBTixLQUFvQixXQUF4QixFQUFxQztBQUNuQ3BvQixpQkFBQyxDQUFDLHFCQUFxQnpGLEtBQUssQ0FBQzZ0QixTQUE1QixDQUFELENBQ0doYixRQURILENBQ1ksWUFEWixFQUVHaWEsS0FGSCxDQUVTLDRDQUE0QzlzQixLQUFLLENBQUN5dUIsU0FBbEQsR0FBOEQsU0FGdkU7QUFHRCxlQUpELE1BSU87QUFDTGhwQixpQkFBQyxDQUFDLHFCQUFxQnpGLEtBQUssQ0FBQzZ0QixTQUE1QixDQUFELENBQ0c1VyxJQURILENBQ1EsT0FEUixFQUVHcEUsUUFGSCxDQUVZLFlBRlo7QUFHRDtBQUNGO0FBQ0YsV0FaRDtBQWFEOztBQUVELFlBQUk3UyxNQUFLLENBQUNzdUIsTUFBTixLQUFpQixHQUFyQixFQUEwQjtBQUN4QjdvQixXQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ2tULElBQWpDLENBQXNDbFQsQ0FBQyxDQUFDa25CLFNBQUYsQ0FBWTNzQixNQUFLLENBQUM0c0IsWUFBbEIsRUFBZ0MsQ0FBaEMsQ0FBdEM7QUFDRDs7QUFFRG5uQixTQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUWlTLFdBQVIsQ0FBb0IsU0FBcEI7QUFDRDtBQXJDSSxLQUFQO0FBdUNELEdBM0NELEVBRjJDLENBK0MzQzs7QUFDQTFOLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCK0MsRUFBN0IsQ0FBZ0MsUUFBaEMsRUFBMEMsVUFBU3JKLENBQVQsRUFBWTtBQUNwRCxRQUFHc0csQ0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVkwcEIsR0FBWixPQUFzQixPQUF6QixFQUFrQztBQUNoQzNrQixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnVLLElBQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x2SyxPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQndLLElBQXBCO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0F2REQ7O2tCQXlEZW1lLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGY7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNTSxTQUFTLEdBQUcsU0FBUzlHLGFBQVQsR0FBeUI7QUFDekM7QUFDQW5pQixHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQitDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFVBQVNySixDQUFULEVBQVk7QUFDaERBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU11dkIsT0FBTyxHQUFHbHBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxTQUFiLENBQWhCO0FBQ0FvRixLQUFDLENBQUNrcEIsT0FBRCxDQUFELENBQVdOLEtBQVgsQ0FBaUIsTUFBakI7QUFDQTVvQixLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjBOLFdBQXRCLENBQWtDLE1BQWxDO0FBQ0QsR0FMRCxFQUZ5QyxDQVN6Qzs7QUFDQSxNQUFHMU4sQ0FBQyxDQUFDLGFBQUQsQ0FBSixFQUFxQjtBQUNuQkEsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQitDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQVNySixDQUFULEVBQVk7QUFDekNBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU13dkIsV0FBVyxHQUFHbnBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxNQUFiLENBQXBCO0FBQ0FvRixPQUFDLENBQUNtcEIsV0FBRCxDQUFELENBQWV0RCxNQUFmO0FBQ0QsS0FKRDtBQUtELEdBaEJ3QyxDQWtCekM7OztBQUNBLFFBQU11RCxtQkFBbUIsR0FBR3BwQixDQUFDLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsTUFBR29wQixtQkFBSCxFQUF3QjtBQUN0QkEsdUJBQW1CLENBQUNybUIsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU3JKLENBQVQsRUFBWTtBQUMxQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FxRyxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFyQixPQUFSLENBQWdCLE1BQWhCLEVBQXdCa25CLE1BQXhCO0FBQ0QsS0FIRDtBQUlELEdBekJ3QyxDQTJCekM7OztBQUNBLE1BQUk3bEIsQ0FBQyxDQUFDLHNCQUFELENBQUwsRUFBK0I7QUFDN0JBLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCK0MsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsVUFBU2tlLEtBQVQsRUFBZ0I7QUFDcERBLFdBQUssQ0FBQ3RuQixjQUFOO0FBQ0FxRyxPQUFDLENBQUMsbURBQUQsQ0FBRCxDQUF1RGtULElBQXZELENBQTRELEVBQTVEO0FBQ0EsWUFBTXpYLElBQUksR0FBR3VFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsTUFBaEIsQ0FBYjtBQUNBcUIsT0FBQyxDQUFDdkUsSUFBRCxDQUFELENBQVEyUixRQUFSLENBQWlCLFNBQWpCO0FBQ0FwTixPQUFDLENBQUMybUIsSUFBRixDQUFPO0FBQ0xwZ0IsWUFBSSxFQUFFLE1BREQ7QUFFTHBOLFdBQUcsRUFBRXNDLElBQUksQ0FBQzJYLElBQUwsQ0FBVSxRQUFWLENBRkE7QUFHTHhZLFlBQUksRUFBRWEsSUFBSSxDQUFDbXJCLFNBQUwsRUFIRDtBQUlMbmYsZUFBTyxFQUFFLGlCQUFTOU0sUUFBVCxFQUFtQjtBQUMxQnFGLFdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbEcsTUFBbkMsQ0FBMENhLFFBQTFDO0FBQ0FxRixXQUFDLENBQUMsNERBQUQsQ0FBRCxDQUFnRW9OLFFBQWhFLENBQXlFLFFBQXpFO0FBQ0FwTixXQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQzBOLFdBQXRDLENBQWtELFlBQWxEO0FBQ0ExTixXQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUWlTLFdBQVIsQ0FBb0IsU0FBcEI7QUFDRCxTQVRJO0FBVUxuVCxhQUFLLEVBQUUsZUFBU0EsTUFBVCxFQUFnQjtBQUNyQnlGLFdBQUMsQ0FBQyxrREFBRCxDQUFELENBQXNEb04sUUFBdEQsQ0FBK0QsWUFBL0Q7QUFDQXBOLFdBQUMsQ0FBQyxnREFBRCxDQUFELENBQW9EcW1CLElBQXBELENBQXlEcm1CLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDa25CLFNBQUYsQ0FBWTNzQixNQUFLLENBQUM0c0IsWUFBbEIsRUFBZ0MsQ0FBaEMsQ0FBRCxDQUFELENBQXNDM1AsSUFBdEMsQ0FBMkMsb0JBQTNDLEVBQWlFNk8sSUFBakUsRUFBekQ7QUFDQXJtQixXQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUWlTLFdBQVIsQ0FBb0IsU0FBcEI7QUFDRDtBQWRJLE9BQVA7QUFnQkQsS0FyQkQsRUFENkIsQ0F3QjdCOztBQUNBMU4sS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIrQyxFQUF6QixDQUE0QixlQUE1QixFQUE2QyxVQUFVckosQ0FBVixFQUFhO0FBQ3hEc0csT0FBQyxDQUFDLGtEQUFELENBQUQsQ0FBc0QwTixXQUF0RCxDQUFrRSxZQUFsRTtBQUNBMU4sT0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0MwTixXQUF4QyxDQUFvRCxTQUFwRDtBQUNBMU4sT0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOEMya0IsR0FBOUMsQ0FBa0QsRUFBbEQ7QUFDQTNrQixPQUFDLENBQUMsbURBQUQsQ0FBRCxDQUF1RGtULElBQXZELENBQTRELEVBQTVEO0FBQ0QsS0FMRDtBQU1ELEdBM0R3QyxDQTZEekM7OztBQUNBbFQsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIrQyxFQUE1QixDQUErQixPQUEvQixFQUF3QyxVQUFTckosQ0FBVCxFQUFZO0FBQ2xEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNK3RCLEtBQUssR0FBRyxjQUFkO0FBQ0EsVUFBTTJCLFlBQVksR0FBR3JwQixDQUFDLENBQUNBLENBQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZTCxJQUFaLENBQWlCLE1BQWpCLENBQUQsQ0FBdEI7QUFDQSxVQUFNMHVCLGlCQUFpQixHQUFHRCxZQUFZLENBQUM3UixJQUFiLENBQWtCLE9BQWxCLENBQTFCO0FBQ0EsVUFBTXBjLEtBQUssR0FBR2t1QixpQkFBaUIsQ0FBQzNFLEdBQWxCLEVBQWQ7QUFDQSxVQUFNNEUsV0FBVyxHQUFHRCxpQkFBaUIsQ0FBQzNxQixPQUFsQixDQUEwQixLQUExQixFQUFpQzZTLElBQWpDLENBQXNDLE1BQXRDLENBQXBCOztBQUNBLFFBQUlrVyxLQUFLLENBQUMzaEIsSUFBTixDQUFXM0ssS0FBWCxDQUFKLEVBQXVCO0FBQ3JCbXVCLGlCQUFXLENBQUM3YixXQUFaLENBQXdCLFNBQXhCO0FBQ0E0Yix1QkFBaUIsQ0FBQzViLFdBQWxCLENBQThCLFlBQTlCO0FBQ0EyYixrQkFBWSxDQUFDeEQsTUFBYjtBQUNELEtBSkQsTUFJTztBQUNMMEQsaUJBQVcsQ0FBQ25jLFFBQVosQ0FBcUIsU0FBckI7QUFDQWtjLHVCQUFpQixDQUFDbGMsUUFBbEIsQ0FBMkIsWUFBM0I7QUFDRDtBQUNGLEdBZkQsRUE5RHlDLENBK0V6Qzs7QUFDQXBOLEdBQUMsQ0FBQyxtREFBRCxDQUFELENBQXVEK0MsRUFBdkQsQ0FBMEQsT0FBMUQsRUFBbUUsVUFBU3JKLENBQVQsRUFBWTtBQUM3RSxVQUFNZ3VCLEtBQUssR0FBRyxjQUFkO0FBQ0EsVUFBTXRzQixLQUFLLEdBQUc0RSxDQUFDLENBQUN0RyxDQUFDLENBQUN1QixNQUFILENBQUQsQ0FBWTBELE9BQVosQ0FBb0IsTUFBcEIsRUFBNEI2WSxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQ21OLEdBQTFDLEVBQWQ7O0FBQ0EsUUFBSStDLEtBQUssQ0FBQzNoQixJQUFOLENBQVczSyxLQUFYLEtBQXFCNEUsQ0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVltYixRQUFaLENBQXFCLFlBQXJCLENBQXpCLEVBQTZEO0FBQzNEcFcsT0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVkwRCxPQUFaLENBQW9CLEtBQXBCLEVBQTJCNlMsSUFBM0IsQ0FBZ0MsTUFBaEMsRUFBd0M5RCxXQUF4QyxDQUFvRCxTQUFwRDtBQUNBMU4sT0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVl5UyxXQUFaLENBQXdCLFlBQXhCO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0F4RkQ7O2tCQTBGZXViLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZmOzs7Ozs7QUFIQTs7QUFDQTs7QUFDQTtBQUdBLE1BQU1PLHNCQUFzQixHQUFHLGtCQUEvQjtBQUNBLE1BQU1DLDRCQUE0QixHQUFHLHdCQUFyQztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLHdDQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLHdDQUF6Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBU3pILGFBQVQsR0FBeUI7QUFDdkM7QUFDQW5pQixHQUFDLENBQUMsb0RBQUQsQ0FBRCxDQUF3RCtDLEVBQXhELENBQTJELE9BQTNELEVBQW9FLFVBQVNrZSxLQUFULEVBQWdCO0FBQ2xGLFVBQU00SSxVQUFVLEdBQUc3cEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcEYsSUFBUixDQUFhLGFBQWIsQ0FBbkI7QUFDQSxVQUFNa3ZCLG9CQUFvQixHQUFHOXBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0Isa0JBQWhCLENBQTdCOztBQUVBLFFBQUdrckIsVUFBVSxLQUFLenFCLFNBQWxCLEVBQTZCO0FBQzNCWSxPQUFDLENBQUMscUNBQXFDNnBCLFVBQXJDLEdBQWtELElBQW5ELENBQUQsQ0FBMERuYyxXQUExRCxDQUFzRSxrQkFBdEU7QUFDRCxLQUZELE1BRU87QUFDTDFOLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDME4sV0FBakMsQ0FBNkMsa0JBQTdDO0FBQ0Q7O0FBQ0QxTixLQUFDLENBQUMsbUJBQUQsRUFBc0I4cEIsb0JBQXRCLENBQUQsQ0FBNkNwYyxXQUE3QyxDQUF5RCxTQUF6RCxFQUFvRU4sUUFBcEUsQ0FBNkUsUUFBN0U7O0FBRUEsUUFBSXBOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxZQUFiLE1BQStCd0UsU0FBbkMsRUFBOEM7QUFDNUNZLE9BQUMsQ0FBQyx3QkFBRCxFQUEyQjhwQixvQkFBM0IsQ0FBRCxDQUFrRHBjLFdBQWxELENBQThELFFBQTlELEVBQXdFTixRQUF4RSxDQUFpRixTQUFqRjtBQUNELEtBRkQsTUFFTztBQUNMcE4sT0FBQyxDQUFDLHdCQUFELEVBQTJCOHBCLG9CQUEzQixDQUFELENBQWtEcGMsV0FBbEQsQ0FBOEQsU0FBOUQsRUFBeUVOLFFBQXpFLENBQWtGLFFBQWxGO0FBQ0Q7O0FBQ0RwTixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFvTixRQUFSLENBQWlCLGtCQUFqQjtBQUNELEdBakJELEVBRnVDLENBcUJ2Qzs7QUFDQXBOLEdBQUMsQ0FBQyxrREFBRCxDQUFELENBQXNEd0ssSUFBdEQ7QUFDQXhLLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQ0crQyxFQURILENBQ00sWUFETixFQUNvQixZQUFXO0FBQzNCLFFBQUkvQyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJSLE9BQUMsQ0FBQyxxQkFBRCxFQUF3QixJQUF4QixDQUFELENBQStCdUssSUFBL0I7QUFDRDtBQUNGLEdBTEgsRUFLS3hILEVBTEwsQ0FLUSxZQUxSLEVBS3NCLFlBQVc7QUFDL0IvQyxLQUFDLENBQUMscUJBQUQsRUFBd0IsSUFBeEIsQ0FBRCxDQUErQndLLElBQS9CO0FBQ0QsR0FQRCxFQXZCdUMsQ0FnQ3ZDO0FBQ0E7QUFDRTtBQUNGOztBQUVBeEssR0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0YrQyxFQUFsRixDQUFxRixRQUFyRixFQUErRixVQUFTckosQ0FBVCxFQUFZO0FBQ3pHc0csS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixLQUFoQixFQUF1QjZZLElBQXZCLENBQTRCLHVCQUE1QixFQUFxRHBLLFFBQXJELENBQThELGVBQTlELEVBQStFQSxRQUEvRSxDQUF3RixRQUF4RixFQUFrR00sV0FBbEcsQ0FBOEcsU0FBOUc7QUFDRCxHQUZEO0FBR0QsQ0F4Q0Q7O0FBMENBLE1BQU1xYyxjQUFjLEdBQUcsU0FBU0Msc0JBQVQsR0FBa0M7QUFDdkQsUUFBTUMsV0FBVyxHQUFHOXZCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjh2QixNQUFwQztBQUNBLFFBQU1DLFFBQVEsR0FBR0YsV0FBVyxDQUFDM29CLE9BQVosQ0FBb0IsVUFBcEIsQ0FBakI7QUFDQSxRQUFNOG9CLFVBQVUsR0FBR3BxQixDQUFDLENBQUMsNEJBQUQsQ0FBcEI7QUFFQSxNQUFJcXFCLFdBQUo7QUFDQSxNQUFJQyxpQkFBSjs7QUFFQSxNQUFJRixVQUFVLENBQUNsdkIsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6Qm12QixlQUFXLEdBQUdFLGlCQUFpQixDQUFDSCxVQUFELEVBQWFaLHNCQUFiLENBQS9CO0FBQ0FjLHFCQUFpQixHQUFHQyxpQkFBaUIsQ0FBQ0gsVUFBRCxFQUFhWCw0QkFBYixDQUFyQyxDQUZ5QixDQUl6Qjs7QUFDQVcsY0FBVSxDQUFDcm5CLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQVNySixDQUFULEVBQVk7QUFDakMsVUFBR0EsQ0FBQyxDQUFDdW1CLEtBQUYsS0FBWSxDQUFaLElBQWlCLENBQUN1SyxLQUFLLENBQUM3bkIsTUFBTSxDQUFDOG5CLFlBQVAsQ0FBb0Ivd0IsQ0FBQyxDQUFDdW1CLEtBQXRCLENBQUQsQ0FBMUIsRUFBeUQ7QUFDdkR5Syx5QkFBaUIsQ0FBQ0wsV0FBRCxFQUFjcnFCLENBQUMsQ0FBQ3dwQixzQkFBRCxDQUFmLENBQWpCO0FBQ0FrQix5QkFBaUIsQ0FBQ0osaUJBQUQsRUFBb0J0cUIsQ0FBQyxDQUFDeXBCLDRCQUFELENBQXJCLENBQWpCO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7QUFFRDtBQUNGO0FBQ0E7QUFDRTs7O0FBQ0EsUUFBTWtCLGVBQWUsR0FBRzNxQixDQUFDLENBQUMsbUJBQUQsQ0FBekI7QUFDQTJxQixpQkFBZSxDQUFDbmtCLElBQWhCLENBQXFCLFVBQVV3ZCxLQUFWLEVBQWtCO0FBQ3JDLFFBQUcsS0FBS3htQixPQUFSLEVBQWlCO0FBQ2Z3QyxPQUFDLENBQUMsSUFBRCxDQUFELENBQVF3UixJQUFSLENBQWEsT0FBYixFQUFzQnBFLFFBQXRCLENBQStCLFVBQS9CO0FBQ0FwTixPQUFDLENBQUMsb0JBQW9CQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVCxJQUFSLENBQWEsSUFBYixDQUFwQixHQUF5QyxJQUExQyxDQUFELENBQWlEQSxJQUFqRCxDQUFzRCxTQUF0RCxFQUFpRSxTQUFqRSxFQUE0RTVCLElBQTVFLENBQWlGLE9BQWpGLEVBQTBGcEUsUUFBMUYsQ0FBbUcsVUFBbkc7QUFDRDtBQUNGLEdBTEQ7QUFNQXVkLGlCQUFlLENBQUM1bkIsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBU3JKLENBQVQsRUFBWTtBQUN2QyxRQUFHQSxDQUFDLENBQUN1QixNQUFGLENBQVN1QyxPQUFaLEVBQXFCO0FBQ25Cd0MsT0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVl1VyxJQUFaLENBQWlCLE9BQWpCLEVBQTBCcEUsUUFBMUIsQ0FBbUMsVUFBbkM7QUFDRCxLQUZELE1BRU87QUFDTHBOLE9BQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZdVcsSUFBWixDQUFpQixPQUFqQixFQUEwQjlELFdBQTFCLENBQXNDLFVBQXRDO0FBQ0Q7QUFDRixHQU5ELEVBaEN1RCxDQXVDdkQ7O0FBQ0ExTixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QitDLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQVNySixDQUFULEVBQVk7QUFDN0NBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBaXhCLG1CQUFlLENBQUNQLFdBQUQsRUFBY3JxQixDQUFDLENBQUN3cEIsc0JBQUQsQ0FBZixDQUFmO0FBQ0FvQixtQkFBZSxDQUFDTixpQkFBRCxFQUFvQnRxQixDQUFDLENBQUN5cEIsNEJBQUQsQ0FBckIsQ0FBZjtBQUNBenBCLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCNmxCLE1BQXhCO0FBQ0QsR0FMRDtBQU9BO0FBQ0Y7QUFDQTtBQUNFOztBQUNBN2xCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCK0MsRUFBL0IsQ0FBa0MsUUFBbEMsRUFBNEMsVUFBU3JKLENBQVQsRUFBWTtBQUN0RCxVQUFNbXhCLFlBQVksR0FBRzdxQixDQUFDLENBQUN0RyxDQUFDLENBQUN1QixNQUFILENBQUQsQ0FBWUwsSUFBWixDQUFpQixJQUFqQixDQUFyQjs7QUFDQSxRQUFHbEIsQ0FBQyxDQUFDdUIsTUFBRixDQUFTdUMsT0FBWixFQUFxQjtBQUNuQndDLE9BQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZdVcsSUFBWixDQUFpQixPQUFqQixFQUEwQnBFLFFBQTFCLENBQW1DLFVBQW5DO0FBQ0FwTixPQUFDLENBQUMsTUFBTTZxQixZQUFQLENBQUQsQ0FBc0J6WCxJQUF0QixDQUEyQixTQUEzQixFQUFzQyxTQUF0QyxFQUFpRDVCLElBQWpELENBQXNELE9BQXRELEVBQStEcEUsUUFBL0QsQ0FBd0UsVUFBeEU7QUFDRCxLQUhELE1BR087QUFDTHBOLE9BQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZdVcsSUFBWixDQUFpQixPQUFqQixFQUEwQjlELFdBQTFCLENBQXNDLFVBQXRDO0FBQ0ExTixPQUFDLENBQUMsTUFBTTZxQixZQUFQLENBQUQsQ0FBc0J0VCxVQUF0QixDQUFpQyxTQUFqQyxFQUE0Qy9GLElBQTVDLENBQWlELE9BQWpELEVBQTBEOUQsV0FBMUQsQ0FBc0UsVUFBdEU7QUFDRDtBQUNGLEdBVEQsRUFuRHVELENBOER2RDs7QUFDQTFOLEdBQUMsQ0FBQywrREFBRCxDQUFELENBQW1FK0MsRUFBbkUsQ0FBc0UsUUFBdEUsRUFBZ0YsVUFBU3JKLENBQVQsRUFBWTtBQUMxRnNHLEtBQUMsQ0FBQyxpREFBRCxDQUFELENBQXFEdVgsVUFBckQsQ0FBZ0UsU0FBaEU7QUFDQXZYLEtBQUMsQ0FBQywrREFBRCxDQUFELENBQW1FME4sV0FBbkUsQ0FBK0UsU0FBL0U7QUFDQTFOLEtBQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZbVksSUFBWixDQUFpQixTQUFqQixFQUE0QixTQUE1QjtBQUNBcFQsS0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVl1VyxJQUFaLENBQWlCLFlBQWpCLEVBQStCZ0csSUFBL0IsQ0FBb0MsVUFBcEMsRUFBZ0RwSyxRQUFoRCxDQUF5RCxTQUF6RDtBQUNELEdBTEQsRUEvRHVELENBc0V2RDs7QUFDQXBOLEdBQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEK0MsRUFBakQsQ0FBb0QsT0FBcEQsRUFBNkQsVUFBU3JKLENBQVQsRUFBWTtBQUN2RUEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUdxRyxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjJrQixHQUE1QixPQUFzQyxXQUF6QyxFQUFzRDtBQUNwRDNrQixPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QnZGLE1BQTVCO0FBQ0F1RixPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9ULElBQTlCLENBQW1DLFNBQW5DLEVBQThDLElBQTlDLEVBQW9EMUYsV0FBcEQsQ0FBZ0UsUUFBaEUsRUFBMEVOLFFBQTFFLENBQW1GLGdCQUFuRjtBQUNEOztBQUNEd2QsbUJBQWUsQ0FBQ1AsV0FBRCxFQUFjcnFCLENBQUMsQ0FBQ3dwQixzQkFBRCxDQUFmLENBQWY7QUFDQW9CLG1CQUFlLENBQUNOLGlCQUFELEVBQW9CdHFCLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFyQixDQUFmO0FBQ0F6cEIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixNQUFoQixFQUF3QmtuQixNQUF4QjtBQUNELEdBVEQsRUF2RXVELENBa0Z2RDs7QUFDQTdsQixHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQitDLEVBQS9CLENBQWtDLGtCQUFsQyxFQUFzRCxVQUFTckosQ0FBVCxFQUFZO0FBQ2hFLFFBQUlzRyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosTUFBdUIsSUFBM0IsRUFBaUM7QUFDL0JzcUIsc0JBQWdCO0FBQ2hCLFlBQU0xSixpQkFBaUIsR0FBR3BoQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRVLFdBQXRCLEtBQXNDNVUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixFQUFoRTtBQUNBaEIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJrRixHQUE3QixDQUFpQyxLQUFqQyxFQUF3Q2tjLGlCQUFpQixHQUFHLElBQTVEO0FBRUFwaEIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJvTixRQUE3QixDQUFzQyxNQUF0QztBQUNBcE4sT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb04sUUFBVixDQUFtQixrQkFBbkI7QUFDQXBOLE9BQUMsQ0FBQyxRQUFELEVBQVdBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFaLENBQUQsQ0FBNkMvYixXQUE3QyxDQUF5RCxRQUF6RDtBQUNEO0FBQ0YsR0FWRCxFQVVHM0ssRUFWSCxDQVVNLG9CQVZOLEVBVTRCLFVBQVNySixDQUFULEVBQVk7QUFDdEMsUUFBSXNHLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixNQUF1QixJQUEzQixFQUFpQztBQUMvQlIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIwTixXQUE3QixDQUF5QyxNQUF6QztBQUNBMU4sT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVME4sV0FBVixDQUFzQixrQkFBdEI7QUFDQTFOLE9BQUMsQ0FBQyxRQUFELEVBQVdBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFaLENBQUQsQ0FBNkNyYyxRQUE3QyxDQUFzRCxRQUF0RDtBQUNEO0FBQ0YsR0FoQkQ7QUFrQkE7QUFDRjtBQUNBO0FBQ0U7O0FBQ0EsTUFBSStjLFFBQVEsS0FBSyxDQUFDLENBQWxCLEVBQXFCO0FBQ25CbnFCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CME4sV0FBcEIsQ0FBZ0MsUUFBaEM7QUFDRCxHQTNHc0QsQ0E0R3ZEOzs7QUFDQTFOLEdBQUMsQ0FBQyxRQUFELEVBQVdBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFaLENBQUQsQ0FBNkMxbUIsRUFBN0MsQ0FBZ0QsT0FBaEQsRUFBeUQsVUFBU3JKLENBQVQsRUFBWTtBQUNuRUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FxRyxLQUFDLENBQUMsa0JBQUQsRUFBcUJBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUF0QixDQUFELENBQXVEcnNCLE9BQXZELENBQStELE9BQS9EO0FBQ0QsR0FIRDtBQUlELENBakhEO0FBbUhBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTB0QixnQkFBZ0IsR0FBRyxTQUFTQyxzQkFBVCxHQUFrQztBQUN6RCxNQUFJL3FCLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QlIsS0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIwTixXQUE3QixDQUF5QyxNQUF6QztBQUNELEdBRkQsTUFFTztBQUNMLFVBQU1zZCxlQUFlLEdBQUdockIsQ0FBQyxDQUFDLGtCQUFELENBQXpCO0FBQ0EsVUFBTWlyQixZQUFZLEdBQUdqckIsQ0FBQyxDQUFDLGdCQUFELENBQXRCO0FBQ0EsVUFBTXVoQixZQUFZLEdBQUd5SixlQUFlLENBQUNocUIsTUFBaEIsS0FBMkJpcUIsWUFBWSxDQUFDanFCLE1BQWIsRUFBaEQ7QUFDQSxVQUFNb2dCLGlCQUFpQixHQUFHNEosZUFBZSxDQUFDcFcsV0FBaEIsS0FBZ0NxVyxZQUFZLENBQUNqcUIsTUFBYixFQUExRDtBQUNBLFVBQU1rcUIseUJBQXlCLEdBQUdsckIsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNnQixNQUEzQyxLQUFzRGhCLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLE1BQVosRUFBdEQsR0FBNkVoQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CNFUsV0FBbkIsRUFBN0UsR0FBZ0gsRUFBbEo7QUFDQTVVLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCa0YsR0FBNUIsQ0FBZ0MsUUFBaEMsRUFBMEMsaUJBQWlCcWMsWUFBakIsR0FBZ0MsS0FBMUU7QUFDQXZoQixLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmtGLEdBQTdCLENBQWlDLEtBQWpDLEVBQXdDa2MsaUJBQWlCLEdBQUcsSUFBNUQ7QUFDQXBoQixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa0YsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0JnbUIseUJBQXlCLEdBQUcsSUFBM0Q7QUFDRDtBQUNGLENBYkQ7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1gsaUJBQVQsQ0FBMkJILFVBQTNCLEVBQXVDZSxpQkFBdkMsRUFBMEQ7QUFDeEQsUUFBTUMsY0FBYyxHQUFHcHJCLENBQUMsQ0FBQ21yQixpQkFBRCxDQUF4QjtBQUNBLFFBQU1FLFVBQVUsR0FBR3JyQixDQUFDLENBQUMsYUFBRCxFQUFnQm9yQixjQUFoQixDQUFELENBQWlDLENBQWpDLENBQW5CO0FBQ0EsUUFBTUUsUUFBUSxHQUFHdHJCLENBQUMsQ0FBQzBwQixnQkFBRCxFQUFtQjBCLGNBQW5CLENBQWxCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHdnJCLENBQUMsQ0FBQzJwQixnQkFBRCxFQUFtQnlCLGNBQW5CLENBQWxCLENBSndELENBS3hEOztBQUNBLFFBQU1JLGFBQWEsR0FBRzlwQixVQUFVLENBQUMwb0IsVUFBVSxDQUFDcUIsS0FBWCxHQUFtQjd3QixJQUFuQixDQUF3QixLQUF4QixDQUFELENBQWhDO0FBQ0EsUUFBTTh3QixhQUFhLEdBQUdocUIsVUFBVSxDQUFDMG9CLFVBQVUsQ0FBQ3FCLEtBQVgsR0FBbUI3d0IsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBRCxDQUFoQztBQUNBLFFBQU0rd0Isa0JBQWtCLEdBQUc7QUFDekJDLFNBQUssRUFBRSxDQUFDTixRQUFRLENBQUMzRyxHQUFULEVBQUQsRUFBaUI0RyxRQUFRLENBQUM1RyxHQUFULEVBQWpCLENBRGtCO0FBR3pCa0gsU0FBSyxFQUFFO0FBQ0wsYUFBTyxDQUFDTCxhQUFELENBREY7QUFFTCxhQUFPLENBQUNFLGFBQUQ7QUFGRixLQUhrQjtBQU96QkksUUFBSSxFQUFFLENBUG1CO0FBUXpCQyxXQUFPLEVBQUUsSUFSZ0I7QUFTekJDLFVBQU0sRUFBRTtBQUNOQyxRQUFFLEVBQUUsWUFBVWx5QixLQUFWLEVBQWlCO0FBQ25CLGVBQU9BLEtBQVA7QUFDRCxPQUhLO0FBSU5teUIsVUFBSSxFQUFFLGNBQVVueUIsS0FBVixFQUFpQjtBQUNyQixlQUFPQSxLQUFQO0FBQ0Q7QUFOSyxLQVRpQjtBQWlCekJveUIsYUFBUyxFQUFFLEtBakJjO0FBa0J6QkMsWUFBUSxFQUFFO0FBbEJlLEdBQTNCOztBQXFCQSxRQUFNQyxNQUFNLEdBQUdDLHFCQUFXM2YsTUFBWCxDQUFrQjBlLFVBQWxCLEVBQThCTSxrQkFBOUIsQ0FBZjs7QUFDQVUsUUFBTSxDQUFDdHBCLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVNpbEIsUUFBVCxFQUFtQjtBQUNwQ3NELFlBQVEsQ0FBQzNHLEdBQVQsQ0FBYWxPLFFBQVEsQ0FBQ3VSLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBckI7QUFDQXVELFlBQVEsQ0FBQzVHLEdBQVQsQ0FBYWxPLFFBQVEsQ0FBQ3VSLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBckI7QUFDRCxHQUhEO0FBS0EsU0FBT3FFLE1BQVA7QUFDRDs7QUFFRCxTQUFTM0IsaUJBQVQsQ0FBMkJMLFdBQTNCLEVBQXdDZSxjQUF4QyxFQUF3RDtBQUN0RCxRQUFNRSxRQUFRLEdBQUd0ckIsQ0FBQyxDQUFDMHBCLGdCQUFELEVBQW1CMEIsY0FBbkIsQ0FBbEI7QUFDQSxRQUFNRyxRQUFRLEdBQUd2ckIsQ0FBQyxDQUFDMnBCLGdCQUFELEVBQW1CeUIsY0FBbkIsQ0FBbEI7QUFFQSxRQUFNcEQsUUFBUSxHQUFHLENBQUNzRCxRQUFRLENBQUMzRyxHQUFULEVBQUQsRUFBaUI0RyxRQUFRLENBQUM1RyxHQUFULEVBQWpCLENBQWpCO0FBQ0EwRixhQUFXLENBQUMxaEIsR0FBWixDQUFnQnFmLFFBQWhCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTNEMsZUFBVCxDQUF5QjJCLGlCQUF6QixFQUE0Q25CLGNBQTVDLEVBQTREO0FBQzFELFFBQU1FLFFBQVEsR0FBR3RyQixDQUFDLENBQUMwcEIsZ0JBQUQsRUFBbUIwQixjQUFuQixDQUFsQjtBQUNBLFFBQU1HLFFBQVEsR0FBR3ZyQixDQUFDLENBQUMycEIsZ0JBQUQsRUFBbUJ5QixjQUFuQixDQUFsQjtBQUNBLFFBQU1oQixVQUFVLEdBQUdwcUIsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0N5ckIsS0FBaEMsRUFBbkI7QUFDQSxNQUFJZSxhQUFhLEdBQUdsQixRQUFRLENBQUMzRyxHQUFULEVBQXBCO0FBQ0EsTUFBSThILGFBQWEsR0FBR2xCLFFBQVEsQ0FBQzVHLEdBQVQsRUFBcEI7O0FBQ0EsTUFBSTJHLFFBQVEsQ0FBQzNHLEdBQVQsS0FBaUJ5RixVQUFVLENBQUN4dkIsSUFBWCxDQUFnQixLQUFoQixDQUFyQixFQUE2QztBQUMzQzR4QixpQkFBYSxHQUFHcEMsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFDRDs7QUFDRCxNQUFJMHdCLFFBQVEsQ0FBQzNHLEdBQVQsS0FBaUJ5RixVQUFVLENBQUN4dkIsSUFBWCxDQUFnQixLQUFoQixDQUFyQixFQUE2QztBQUMzQzR4QixpQkFBYSxHQUFHcEMsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFDRDs7QUFDRDB3QixVQUFRLENBQUMzRyxHQUFULENBQWE2SCxhQUFiOztBQUNBLE1BQUlqQixRQUFRLENBQUM1RyxHQUFULEtBQWlCeUYsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBckIsRUFBNkM7QUFDM0M2eEIsaUJBQWEsR0FBR3JDLFVBQVUsQ0FBQ3h2QixJQUFYLENBQWdCLEtBQWhCLENBQWhCO0FBQ0Q7O0FBQ0QsTUFBSTJ3QixRQUFRLENBQUM1RyxHQUFULEtBQWlCeUYsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBckIsRUFBNkM7QUFDM0M2eEIsaUJBQWEsR0FBR3JDLFVBQVUsQ0FBQ3h2QixJQUFYLENBQWdCLEtBQWhCLENBQWhCO0FBQ0Q7O0FBQ0Qyd0IsVUFBUSxDQUFDNUcsR0FBVCxDQUFhOEgsYUFBYjtBQUNBRixtQkFBaUIsQ0FBQzVqQixHQUFsQixDQUFzQixDQUFDNmpCLGFBQUQsRUFBZ0JDLGFBQWhCLENBQXRCO0FBQ0Q7O1FBRVE3QyxPLEdBQUFBLE87UUFBU0csYyxHQUFBQSxjO1FBQWdCZSxnQixHQUFBQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNRbEM7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNNEIsWUFBWSxHQUFHLFNBQVN2SyxhQUFULEdBQXlCO0FBQzVDLE1BQUdubkIsUUFBUSxDQUFDeUUsY0FBVCxDQUF3QixlQUF4QixDQUFILEVBQTZDO0FBQzNDbWhCLFVBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUJnQixPQUFyQixDQUE2QixTQUE3QixFQUQyQyxDQUUzQzs7QUFDQTVtQixZQUFRLENBQUN5RSxjQUFULENBQXdCLGVBQXhCLEVBQXlDaEcsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLFVBQVV3bkIsS0FBVixFQUFpQjtBQUNsRkEsV0FBSyxDQUFDdG5CLGNBQU47QUFDQSxZQUFNZ3pCLE1BQU0sR0FBSUMsTUFBTSxDQUFDNXJCLE1BQVAsR0FBZ0IsQ0FBakIsR0FBdUIsTUFBTSxDQUE1QztBQUNBLFlBQU02ckIsT0FBTyxHQUFJRCxNQUFNLENBQUNwc0IsS0FBUCxHQUFlLENBQWhCLEdBQXNCLE1BQU0sQ0FBNUM7QUFDQSxZQUFNckgsR0FBRyxHQUFHNkIsUUFBUSxDQUFDeUUsY0FBVCxDQUF3QixlQUF4QixFQUF5Q3ZELE9BQXpDLENBQWlEL0MsR0FBN0Q7QUFDQWdCLFlBQU0sQ0FBQzJ5QixJQUFQLENBQVksMENBQXdDM3pCLEdBQXBELEVBQXlELHlCQUF6RCxFQUFvRixTQUFTd3pCLE1BQVQsR0FBa0IsUUFBbEIsR0FBNkJFLE9BQTdCLEdBQXVDLDBDQUEzSDtBQUNELEtBTkQsRUFIMkMsQ0FXM0M7O0FBQ0E3eEIsWUFBUSxDQUFDeUUsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENoRyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0UsVUFBVXduQixLQUFWLEVBQWlCO0FBQ25GQSxXQUFLLENBQUN0bkIsY0FBTjtBQUNBcUIsY0FBUSxDQUFDeUUsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENzdEIsS0FBOUM7QUFDRCxLQUhELEVBWjJDLENBa0IzQzs7QUFDQS94QixZQUFRLENBQUN5RSxjQUFULENBQXdCLFdBQXhCLEVBQXFDaEcsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVV3bkIsS0FBVixFQUFpQjtBQUM5RUEsV0FBSyxDQUFDdG5CLGNBQU47QUFDQSxZQUFNcXpCLFFBQVEsR0FBR2h5QixRQUFRLENBQUN5RSxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0FPLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0aEIsT0FBaEIsQ0FBd0IsUUFBeEI7QUFDQTFnQixlQUFTLENBQUMrckIsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJGLFFBQVEsQ0FBQ2p6QixLQUF2QyxFQUNHRyxJQURILENBQ1EsTUFBTTtBQUNWOEYsU0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRoQixPQUFoQixDQUF3QixNQUF4QjtBQUNBcmEsa0JBQVUsQ0FBQyxZQUFXO0FBQUV2SCxXQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNGhCLE9BQWhCLENBQXdCLFNBQXhCO0FBQXFDLFNBQW5ELEVBQXFELElBQXJELENBQVY7QUFDRCxPQUpILEVBS0d0bkIsS0FMSCxDQUtVQyxLQUFELElBQVc7QUFBRTR5QixlQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZTd5QixLQUFNLEVBQWxDO0FBQXNDLE9BTDVEO0FBTUQsS0FWRCxFQW5CMkMsQ0ErQjNDOztBQUNBUyxZQUFRLENBQUN5RSxjQUFULENBQXdCLFdBQXhCLEVBQXFDaEcsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVN3bkIsS0FBVCxFQUFnQjtBQUM3RUEsV0FBSyxDQUFDdG5CLGNBQU47QUFDQSxZQUFNMHpCLE1BQU0sR0FBR3J5QixRQUFRLENBQUN5RSxjQUFULENBQXdCLFdBQXhCLEVBQXFDdkQsT0FBckMsQ0FBNkNveEIsTUFBNUQ7QUFDQW56QixZQUFNLENBQUNDLFFBQVAsQ0FBZ0JpZ0IsSUFBaEIsR0FBdUJnVCxNQUF2QjtBQUNELEtBSkQ7QUFLRDtBQUNGLENBdkNEOztrQkF5Q2VYLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0EsTUFBTWEsZUFBZSxHQUFJejBCLEVBQUQsSUFBUTtBQUM5QixRQUFNQyxPQUFPLEdBQUdELEVBQWhCO0FBQ0EsUUFBTUssR0FBRyxHQUFHSixPQUFPLENBQUNLLFlBQVIsQ0FBcUIsUUFBckIsQ0FBWjtBQUNBLFFBQU1rQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWhCO0FBQ0EsTUFBSXUwQixpQkFBaUIsR0FBR3owQixPQUFPLENBQUNFLGFBQVIsQ0FBc0IsK0JBQXRCLENBQXhCO0FBRUFGLFNBQU8sQ0FBQ1UsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBb0NDLENBQUQsSUFBTztBQUN4Q0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTTh6QixhQUFhLEdBQUcsc0JBQUUxMEIsT0FBRixFQUFXNEYsT0FBWCxDQUFtQixNQUFuQixDQUF0QjtBQUVBNnVCLHFCQUFpQixDQUFDaHpCLFNBQWxCLENBQTRCQyxNQUE1QixDQUFtQyxTQUFuQztBQUNBLFVBQU1pekIsWUFBWSxHQUFHLHNCQUFFLGtCQUFrQixzQkFBRUQsYUFBRixFQUFpQjd5QixJQUFqQixDQUFzQixhQUF0QixDQUFsQixHQUF5RCxZQUEzRCxFQUF5RU0sTUFBOUY7QUFDQSxVQUFNeXlCLGdCQUFnQixHQUFHLHNCQUFFLGlCQUFGLEVBQXFCenlCLE1BQTlDOztBQUNBLFFBQUd3eUIsWUFBWSxHQUFHLENBQWYsSUFBb0JBLFlBQVksR0FBR0MsZ0JBQXRDLEVBQXlEO0FBQ3ZELDRCQUFFRixhQUFGLEVBQWlCalcsSUFBakIsQ0FBc0Isb0NBQXRCLEVBQTREOUosV0FBNUQsQ0FBd0UsUUFBeEUsRUFBa0ZOLFFBQWxGLENBQTJGLFNBQTNGO0FBQ0QsS0FGRCxNQUVPLElBQUlzZ0IsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzdCLDRCQUFFRCxhQUFGLEVBQWlCalcsSUFBakIsQ0FBc0IsZ0JBQXRCLEVBQXdDOUosV0FBeEMsQ0FBb0QsUUFBcEQsRUFBOEROLFFBQTlELENBQXVFLFNBQXZFO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsNEJBQUVxZ0IsYUFBRixFQUFpQmpXLElBQWpCLENBQXNCLGdCQUF0QixFQUF3Q3BLLFFBQXhDLENBQWlELFFBQWpELEVBQTJETSxXQUEzRCxDQUF1RSxTQUF2RTtBQUVBM1UsYUFBTyxDQUFDeUIsU0FBUixDQUFrQmpELEdBQWxCLENBQXNCLFVBQXRCLEVBQWtDLFNBQWxDO0FBQ0F3QixhQUFPLENBQUMyQyxXQUFSLENBQW9CSixPQUFPLENBQUNLLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBcEI7O0FBQ0EsWUFBTWl5QixPQUFPLEdBQUc1ekIsZ0JBQU1DLElBQU4sQ0FBV2QsR0FBWCxFQUFnQiw2QkFBVUosT0FBVixDQUFoQixDQUFoQjs7QUFDQTYwQixhQUFPLENBQUMxekIsSUFBUixDQUFjUyxRQUFELElBQWM7QUFDekI2eUIseUJBQWlCLENBQUNoekIsU0FBbEIsQ0FBNEJDLE1BQTVCLENBQW1DLFNBQW5DOztBQUNBLGNBQU1vekIsWUFBWSxHQUFHN3RCLGlCQUFFa25CLFNBQUYsQ0FBWXZzQixRQUFRLENBQUNDLElBQXJCLEVBQTJCLENBQTNCLENBQXJCOztBQUNBLDhCQUFFLGdDQUFGLEVBQW9DOFMsV0FBcEMsQ0FBZ0QsU0FBaEQ7O0FBQ0EsWUFBSSxDQUFDLHNCQUFFLFlBQUYsRUFBZ0IwSSxRQUFoQixDQUF5QixRQUF6QixDQUFMLEVBQXlDO0FBQ3ZDLGdDQUFFLFlBQUYsRUFBZ0IxSSxXQUFoQixDQUE0QixRQUE1QixFQUFzQ04sUUFBdEMsQ0FBK0MsUUFBL0M7QUFDQSxnQ0FBRSxZQUFGLEVBQWdCQSxRQUFoQixDQUF5QixRQUF6QjtBQUNEOztBQUNELDhCQUFFLGtCQUFGLEVBQXNCOEYsSUFBdEIsQ0FBMkIsc0JBQUUyYSxZQUFGLEVBQWdCclcsSUFBaEIsQ0FBcUIsa0JBQXJCLEVBQXlDLENBQXpDLEVBQTRDOWMsU0FBdkUsRUFBa0ZxVixTQUFsRixDQUE0RixDQUE1RixFQUErRjNDLFFBQS9GLENBQXdHLFFBQXhHO0FBQ0EsOEJBQUUsYUFBRixFQUFpQjhGLElBQWpCLENBQXNCLHNCQUFFMmEsWUFBRixFQUFnQnJXLElBQWhCLENBQXFCLHdCQUFyQixFQUErQyxDQUEvQyxFQUFrRDljLFNBQXhFO0FBQ0EsOEJBQUUsb0JBQUYsRUFBd0J3WSxJQUF4QixDQUE2QixzQkFBRTJhLFlBQUYsRUFBZ0JyVyxJQUFoQixDQUFxQixnQkFBckIsRUFBdUMsQ0FBdkMsRUFBMEM5YyxTQUF2RTtBQUNBLDhCQUFFLHFDQUFGLEVBQXlDMEMsT0FBekMsQ0FBaUQsT0FBakQ7QUFDQSw4QkFBRSw2QkFBRixFQUFpQ3NRLFdBQWpDLENBQTZDLFFBQTdDLEVBQXVETixRQUF2RCxDQUFnRSxRQUFoRTtBQUNBLDhCQUFFLGtDQUFGLEVBQXNDMGdCLElBQXRDLEdBQTZDNWEsSUFBN0MsQ0FBa0Qsc0JBQUUyYSxZQUFGLEVBQWdCclcsSUFBaEIsQ0FBcUIscUJBQXJCLEVBQTRDLENBQTVDLEVBQStDOWMsU0FBakc7QUFFQTNCLGVBQU8sQ0FBQ3lCLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0E7QUFFRCxPQWxCRCxFQWtCR0gsS0FsQkgsQ0FrQlVDLEtBQUQsSUFBVztBQUNsQixZQUFJQSxLQUFLLEtBQUs2RSxTQUFkLEVBQXlCO0FBQ3ZCLGNBQUkydUIsWUFBWSxHQUFHLEVBQW5CO0FBQ0FoMUIsaUJBQU8sQ0FBQ3lCLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0FPLGtCQUFRLENBQUNPLGdCQUFULENBQTBCLG1CQUExQixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBU3d5QixPQUFULEVBQWtCO0FBQ3ZFQSxtQkFBTyxDQUFDeHpCLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0QsV0FGRDs7QUFHQSxjQUFJRixLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBZixDQUFvQkMsT0FBcEIsS0FBZ0N1RSxTQUFwQyxFQUErQztBQUM3QyxnQkFBSTdFLEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxJQUFmLENBQW9CcXpCLFVBQXBCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3RDVCwrQkFBaUIsR0FBR3owQixPQUFPLENBQUNFLGFBQVIsQ0FBc0Isb0RBQW1Ec0IsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBQWYsQ0FBb0JxekIsVUFBdkUsR0FBbUYsSUFBekcsQ0FBcEI7QUFDRCxhQUZELE1BRU87QUFDTFQsK0JBQWlCLEdBQUd6MEIsT0FBTyxDQUFDRSxhQUFSLENBQXNCLGtEQUF0QixDQUFwQjtBQUNEOztBQUNEODBCLHdCQUFZLEdBQUl4ekIsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBQWYsQ0FBb0JDLE9BQXJCLENBQThCcXpCLFFBQTlCLEVBQWY7QUFDRCxXQVBELE1BT087QUFDTEgsd0JBQVksR0FBSXh6QixLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBaEIsQ0FBc0JzekIsUUFBdEIsRUFBZjtBQUNEOztBQUNEViwyQkFBaUIsQ0FBQzl5QixTQUFsQixHQUE4QnF6QixZQUE5QjtBQUNBUCwyQkFBaUIsQ0FBQ2h6QixTQUFsQixDQUE0QmpELEdBQTVCLENBQWdDLFNBQWhDO0FBQ0Q7QUFDRixPQXRDRDtBQXVDRDtBQUNGLEdBekREO0FBMERELENBaEVEOztrQkFrRWVnMkIsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTVksbUJBQW1CLEdBQUcsc0JBQUUsa0JBQUYsQ0FBNUI7O0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsU0FBU0MsdUJBQVQsR0FBbUM7QUFDdEU7QUFDQXJ6QixVQUFRLENBQUNPLGdCQUFULENBQTBCLG1DQUExQixFQUNHQyxPQURILENBQ1cxQyxFQUFFLElBQUksb0NBQXFCQSxFQUFyQixDQURqQjtBQUVBa0MsVUFBUSxDQUFDTyxnQkFBVCxDQUEwQiw2QkFBMUIsRUFDR0MsT0FESCxDQUNXMUMsRUFBRSxJQUFJLG9DQUFxQkEsRUFBckIsQ0FEakI7QUFHQSx3QkFBRSxXQUFGLEVBQWVxMUIsbUJBQWYsRUFBb0NwckIsRUFBcEMsQ0FBdUMsT0FBdkMsRUFBZ0QsVUFBU3JKLENBQVQsRUFBWTtBQUMxRCwwQkFBRSxJQUFGLEVBQVE4WCxJQUFSLEdBQWU5RCxXQUFmLENBQTJCLFFBQTNCO0FBQ0EsMEJBQUUsa0JBQUYsRUFBc0IwRixJQUF0QixDQUEyQiwwQkFBM0IsRUFBdUQsc0JBQUUsSUFBRixFQUFRdVIsR0FBUixFQUF2RDs7QUFDQSxRQUFJbE8sUUFBUSxDQUFDLHNCQUFFLElBQUYsRUFBUWtPLEdBQVIsRUFBRCxDQUFSLElBQTJCbE8sUUFBUSxDQUFDLHNCQUFFLElBQUYsRUFBUXJELElBQVIsQ0FBYSxLQUFiLENBQUQsQ0FBdkMsRUFBOEQ7QUFDNUQsNEJBQUUsSUFBRixFQUFRdVIsR0FBUixDQUFZLHNCQUFFLElBQUYsRUFBUXZSLElBQVIsQ0FBYSxLQUFiLENBQVo7QUFDRCxLQUZELE1BRU8sSUFBR3FELFFBQVEsQ0FBQyxzQkFBRSxJQUFGLEVBQVFrTyxHQUFSLEVBQUQsQ0FBUixHQUEwQmxPLFFBQVEsQ0FBQyxzQkFBRSxJQUFGLEVBQVFyRCxJQUFSLENBQWEsS0FBYixDQUFELENBQXJDLEVBQTREO0FBQ2pFLDRCQUFFLElBQUYsRUFBUXVSLEdBQVIsQ0FBWSxzQkFBRSxJQUFGLEVBQVF2UixJQUFSLENBQWEsS0FBYixDQUFaO0FBQ0Q7QUFDRixHQVJEO0FBU0QsQ0FoQkQ7O0FBa0JBLE1BQU1rYix5QkFBeUIsR0FBRyxTQUFTQyxnQkFBVCxDQUEwQjV6QixRQUExQixFQUFvQztBQUNwRSxRQUFNa3pCLFlBQVksR0FBRzd0QixpQkFBRWtuQixTQUFGLENBQVl2c0IsUUFBUSxDQUFDQyxJQUFyQixFQUEyQixDQUEzQixDQUFyQjs7QUFDQSxRQUFNNHpCLFNBQVMsR0FBRyxzQkFBRVgsWUFBRixFQUFnQnJXLElBQWhCLENBQXFCLHdCQUFyQixFQUErQyxDQUEvQyxFQUFrRDljLFNBQXBFO0FBQ0F5ekIscUJBQW1CLENBQUNqYixJQUFwQixDQUF5QixzQkFBRTJhLFlBQUYsRUFBZ0JyVyxJQUFoQixDQUFxQixrQkFBckIsRUFBeUMsQ0FBekMsRUFBNEM5YyxTQUFyRSxFQUFnRnFWLFNBQWhGLENBQTBGLENBQTFGLEVBQTZGckMsV0FBN0YsQ0FBeUcsU0FBekc7QUFDQSx3QkFBRSxhQUFGLEVBQWlCd0YsSUFBakIsQ0FBc0JzYixTQUF0QjtBQUNBLHdCQUFFLGtDQUFGLEVBQXNDVixJQUF0QyxHQUE2QzVhLElBQTdDLENBQWtELHNCQUFFMmEsWUFBRixFQUFnQnJXLElBQWhCLENBQXFCLHFCQUFyQixFQUE0QyxDQUE1QyxFQUErQzljLFNBQWpHOztBQUNBLE1BQUkrYixRQUFRLENBQUMrWCxTQUFELENBQVIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0IsMEJBQUUsWUFBRixFQUFnQjlnQixXQUFoQixDQUE0QixRQUE1QixFQUFzQ04sUUFBdEMsQ0FBK0MsUUFBL0M7QUFDQSwwQkFBRSxZQUFGLEVBQWdCTSxXQUFoQixDQUE0QixRQUE1QjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSxNQUFNK2dCLGtCQUFrQixHQUFHLFNBQVNDLFNBQVQsR0FBcUI7QUFDOUMxekIsVUFBUSxDQUFDTyxnQkFBVCxDQUEwQiw4QkFBMUIsRUFDR0MsT0FESCxDQUNXMUMsRUFBRSxJQUFJLCtCQUFnQkEsRUFBaEIsQ0FEakI7QUFFRCxDQUhEOztRQUtTczFCLDRCLEdBQUFBLDRCO1FBQThCRSx5QixHQUFBQSx5QjtRQUEyQkcsa0IsR0FBQUEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCbEU7Ozs7QUFDQTs7OztBQUNBOzs7O0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQU1BLE1BQU1FLG9CQUFvQixHQUFJNzFCLEVBQUQsSUFBUTtBQUNuQyxRQUFNQyxPQUFPLEdBQUdELEVBQWhCO0FBQ0EsUUFBTTgxQixXQUFXLEdBQUc3MUIsT0FBTyxDQUFDSyxZQUFSLENBQXFCLHVDQUFyQixDQUFwQjtBQUNBLFFBQU15MUIsU0FBUyxHQUFHOTFCLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQixxQ0FBckIsQ0FBbEI7QUFDQSxRQUFNRCxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQixrQ0FBckIsQ0FBWjtBQUVBTCxTQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQW1DQyxDQUFELElBQU87QUFDdkNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLDBCQUFFLGtCQUFGLEVBQXNCeVQsUUFBdEIsQ0FBK0IsU0FBL0IsRUFBMEMyQyxTQUExQyxDQUFvRCxDQUFwRDs7QUFFQS9WLG9CQUFNODBCLE1BQU4sQ0FBYTMxQixHQUFiLEVBQWtCO0FBQUV5QixVQUFJLEVBQUU7QUFBRW0wQixtQkFBVyxFQUFFRjtBQUFmO0FBQVIsS0FBbEIsRUFDRzMwQixJQURILENBQ1NTLFFBQUQsSUFBYztBQUNsQixVQUFJaTBCLFdBQVcsS0FBS3h2QixTQUFoQixJQUE2QixDQUFDckcsT0FBTyxDQUFDeUIsU0FBUixDQUFrQncwQixRQUFsQixDQUEyQixxQkFBM0IsQ0FBbEMsRUFBcUY7QUFDbkY3MEIsY0FBTSxDQUFDQyxRQUFQLENBQWdCdU0sT0FBaEIsQ0FBd0Jpb0IsV0FBeEI7QUFDRCxPQUZELE1BRU87QUFDTCx5REFBMEJqMEIsUUFBMUI7QUFDQTtBQUNEO0FBQ0YsS0FSSDtBQVNELEdBYkQ7QUFjRCxDQXBCRDs7a0JBc0JlZzBCLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0EsTUFBTU0sb0JBQW9CLEdBQUluMkIsRUFBRCxJQUFRO0FBQ25DLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNSyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQix3QkFBckIsQ0FBWjtBQUNBLFFBQU15MUIsU0FBUyxHQUFHOTFCLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQiwrQkFBckIsQ0FBbEI7QUFFQUwsU0FBTyxDQUFDVSxnQkFBUixDQUF5QixPQUF6QixFQUFtQ0MsQ0FBRCxJQUFPO0FBQ3ZDLDBCQUFFLDhCQUFGLEVBQWtDZ1UsV0FBbEMsQ0FBOEMsU0FBOUM7QUFDQSxVQUFNd2hCLFdBQVcsR0FBR24yQixPQUFPLENBQUNLLFlBQVIsQ0FBcUIsMEJBQXJCLENBQXBCOztBQUNBLFVBQU13MEIsT0FBTyxHQUFHNXpCLGdCQUFNQyxJQUFOLENBQVdkLEdBQVgsRUFBZ0IsRUFBaEIsRUFBbUI7QUFBRXlCLFVBQUksRUFBRTtBQUFDbTBCLG1CQUFXLEVBQUVGLFNBQWQ7QUFBeUJNLGdCQUFRLEVBQUVEO0FBQW5DO0FBQVIsS0FBbkIsQ0FBaEI7O0FBRUF4MUIsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsMEJBQUUsa0JBQUYsRUFBc0J5VCxRQUF0QixDQUErQixTQUEvQixFQUEwQzJDLFNBQTFDLENBQW9ELENBQXBEO0FBRUE2ZCxXQUFPLENBQUMxekIsSUFBUixDQUFjUyxRQUFELElBQWM7QUFDekIsdURBQTBCQSxRQUExQjtBQUNBO0FBRUQsS0FKRCxFQUlHTCxLQUpILENBSVVDLEtBQUQsSUFBVztBQUNsQixVQUFJQSxLQUFLLEtBQUs2RSxTQUFkLEVBQXlCO0FBQ3ZCLDhCQUFFLDhCQUFGLEVBQWtDZ08sUUFBbEMsQ0FBMkMsU0FBM0MsRUFBc0RvSyxJQUF0RCxDQUEyRCxxQkFBM0QsRUFBa0Z0RSxJQUFsRixDQUF3RjNZLEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxJQUFoQixDQUFzQnN6QixRQUF0QixFQUF2RixFQUF5SHZ2QixPQUF6SCxDQUFpSSxNQUFqSSxFQUF5SStPLFdBQXpJLENBQXFKLFFBQXJKO0FBQ0EsOEJBQUUsa0JBQUYsRUFBc0JBLFdBQXRCLENBQWtDLFNBQWxDO0FBQ0Q7QUFDRixLQVREO0FBVUQsR0FsQkQ7QUFtQkQsQ0F4QkQ7O2tCQTBCZXVoQixvQjs7Ozs7Ozs7Ozs7O0FDMUNmO0FBQWUsZ0hBQWlELEU7Ozs7Ozs7Ozs7OztBQ0FoRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG4vLyBHRU5FUkFMIEZVTkNUSU9OU1xuaW1wb3J0IHsgY2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wIH0gZnJvbSAnLi9qcy9jYXJvdXNlbC5qcyc7XG5pbXBvcnQgY2hlY2tvdXQgZnJvbSAnLi9qcy9jaGVja291dC1ub2JsZXNzLmpzJztcbmltcG9ydCB7cHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnV9IGZyb20gJy4vanMvcHJvZHVjdC1ub2JsZXNzJztcbmltcG9ydCBjYXJ0IGZyb20gJy4vanMvY2FydC1ub2JsZXNzLmpzJztcbmltcG9ydCBzaGFyZVByb2R1Y3QgZnJvbSAnLi9qcy9zaGFyZS1wcm9kdWN0LmpzJztcbmltcG9ydCBsb2dpblBhZ2UgZnJvbSAnLi9qcy9sb2dpbi1ub2JsZXNzLmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2pzL2NvbnRhY3Qtbm9ibGVzcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gTUVOVSBGVU5DVElPTlNcbi8vIE9SREVSUyBHUklEIEZVTkNUSU9OU1xuXG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VJbml0KCkge1xuICBqUXVlcnkoJyNtYWluTmF2YmFyJykuY29sbGFwc2Uoe1xuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1lZ2FtZW51IGZ1bmN0aW9uc1xuICogLmhhcy1tZWdhbWVudSB0byB1c2UgZHJvcGRvd24gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIG1lZ2FtZW51RnVuY3Rpb25zKCkge1xuICAvLyBCdXR0b24gaG92ZXIgc2ltdWxhdGVzIGNsaWNrIG9uIGl0XG4gICQoJyNtZW51QnV0dG9uTWFpbiwgI21lZ2FtZW51RHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qJCgnI21haW5Db250ZW50Q29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAzMykge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTsqL1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgaWYgKCQoJyNuYXZiYXJNYWluTW9iaWxlJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNZWdhbWVudSBmdW5jdGlvbnMgOiBtYW5hZ2UgbW9iaWxlIG1lbnVcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG5cbiAgJCgnYS5uYXYtdGF4b24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKycgaW1nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCdkaXYubWVudS1pbWcnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChcIiNuYXZiYXJNYWluTW9iaWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoJy5hY3RpdmUubG9jYWxlLWxpbmssIC5uYXZiYXJUYXhvbnNMaW5rLCAubG9nLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCh0aGlzKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNvcGVuQWNjb3VudE1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKCcubG9nLWxpbmsnKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5zaG93KCk7XG4gIH0pO1xuXG4gICQoJy5kcm9wZG93bi5jYXJ0LWJ0bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51SWNvbmVzRnVuY3Rpb25zKCkge1xuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWNhcnQnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4JylcblxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gICAgLy8gQ2FydCBJY29uXG4gICAgaWYgKCQodGhpcykuY2xvc2VzdCgnLmRyb3Bkb3duJykuaGFzQ2xhc3MoJ2NhcnQtYnRuJykpIHtcbiAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmh0bWwoJycpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCcpLmFkZENsYXNzKCdkLWZsZXgnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjY2FydEFjdGlvbnMgLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmNhcnQtZHJvcGRvd24gLmNsb3NlLWNhcnQtd2lkZ2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5kcm9wZG93bi5jYXJ0LWJ0biAuZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyVGF4b25zJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyQWNjb3VudExpbmtzJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlUHJvZHVjdCgpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlUHJvZHVjdCgpO1xuICBwcm9kdWN0KCk7XG4gIGZpbHRlclByb2R1Y3RzKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICBvcmRlcnNHcmlkRnVuY3Rpb25zKCk7XG4gIGxvZ2luUGFnZSgpO1xuICBjYXJ0KCk7XG4gIGNoZWNrb3V0KCk7XG5cbiAgY29udGFjdFBhZ2UoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgLyppZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9Ki9cbiAgLy8gU2hvdyBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51Jykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG4vL2ltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuLy8gaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcbmltcG9ydCB7YWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgYWRkVG9DYXJ0RnVuY3Rpb25zIH0gZnJvbSAnLi9qcy9zeWxpdXMtY2FydC1jb21tb24nO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICBhZGRUb0NhcnRGdW5jdGlvbnMoKTtcblxuICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgLy9TeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIC8vIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIC8vIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgLy8gfVxuICAvLyBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICAvLyB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJPVVNFTCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgRnJlc2NvIGZyb20gJy4uL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuY29uc3QgY2Fyb3VzZWwgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKSk7XG5cbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNwcm9kdWN0R2FsbGVyeScpKTtcbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIG1haW4gY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgc2xpZGVzVG9TaG93OiA0LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuXG4gICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGNhcm91c2Vsc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpc0NhcnRJdGVtc0Nhcm91c2VsID0gKGNhcm91c2VsRWxlbWVudCA9PT0gJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG4gICAgaWYgKGlzQ2FydEl0ZW1zQ2Fyb3VzZWwpIHtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIGNhcm91c2VsRWxlbWVudFswXS5zbGljayAmJiBjYXJvdXNlbEVsZW1lbnRbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oc2xpY2spe1xuICAgICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBjYXJvdXNlbCB3aGVuIHVzZXIgaGF2ZSBtb3JlIHRoYW4gNCBhZGRyZXNzZXMgaW4gQ2hlY2tvdXRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc0Nhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBvcHRzID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgcm93czogMixcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgc2xpZGVzUGVyUm93OiAyLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcm93czogMyxcbiAgICAgICAgICBzbGlkZXNQZXJSb3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCB2aXNpYmxlU2xpZGVyRGl2ID0gIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnZC1ub25lJyk7XG4gIGlmKHZpc2libGVTbGlkZXJEaXYgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRzKTtcbiAgfSBlbHNlIGlmIChjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0cyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBnYWxsZXJ5IGZvciBkZXNrdG9wIHdoZW4gcmVzaXplXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCkge1xuICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgJCgnLmZyZXNjby1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHVybCA6ICQodGhpcykuZGF0YSgnaW1hZ2UnKSxcbiAgICAgIHRodW1ibmFpbCA6ICQodGhpcykuZGF0YSgndGh1bWJuYWlsJyksXG4gICAgfTtcbiAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBoZWlnaHRDb250ZW50ID0gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGNhcm91c2VsIGFycm93cyB2ZXJ0aWNhbGx5XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93KGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBpbWdTZWxlY3RvciA9ICcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnO1xuICBsZXQgaW1nU2xpZGVySGVpZ2h0O1xuICBsZXQgYXJyb3dUb3BWYWx1ZTtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJChpbWdTZWxlY3RvciwgY2Fyb3VzZWxFbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgIGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJChjYXJvdXNlbEVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfSBlbHNlIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKGltZ1NlbGVjdG9yKS5vdXRlckhlaWdodCgpO1xuICAgIGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJCgnLnNsaWRlci1jb250cm9scycpLm5vdCgnLnByb2R1Y3QtZ2FsbGVyeScpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9XG59XG5cbi8qKlxuICogUmVwbGFjZSBjYXJvdXNlbCBhcnJvd3Mgb25seSBvbiBjYXJ0IGl0ZW1zIGNhcm91c2VsXG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoZWxlbWVudCkge1xuICBjb25zdCBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIGltZycsIGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCk7XG4gICQoZWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xufVxuXG5leHBvcnQge2Nhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgY29udGFpbmVyID0gJCgnI2NhcnRQYWdlJyk7XG5jb25zdCBib2R5Q29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBjYXJ0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gV2hlbiByZWxvYWRpbmcgcXVhbnRpdGllc1xuICAvLyBEZXNrdG9wXG4gICQoJy5yZWxvYWQtcXR5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1pdGVtLWluZm8nKS5oYXNDbGFzcygnb3V0LW9mLXN0b2NrJykpIHtcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xuICAgICAgaWYgKG5ld1F0eSA8PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgY3VzdG9tZXIgdG8gYWRkIG1vcmUgdGhhbiA1IHRpbWVzIGEgcHJvZHVjdFxuICAkKCcucXR5JywgY29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIElmIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLCBub3RoaW5nIGhhcHBlbnNcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS5hdHRyKCdtYXgnKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICAgIGlmIChjb3Vwb24gPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKGNvdXBvbik7XG4gICAgICB9XG5cbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gY291cG9uIGNvZGUgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IGJvbnVzIHBvaW50c1xuICAkKCcuYm9udXMtcG9pbnRzLWJ0bicsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgY291cG9uIGNvZGVcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgYm9udXNQb2ludHMgPSAkKCcuYm9udXMtcG9pbnRzJykudmFsKCk7XG4gICAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgICAgfVxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmRlbGV0ZS1ib251cy1wb2ludHMnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGJvbnVzIHBvaW50c1xuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBib251cyBwb2ludHMgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5ib251cy1wb2ludHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCcnKTtcbiAgfSk7XG5cbiAgaWYoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCQoJyNiaXRiYWctYm9udXMtcG9pbnRzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5ib251cy1wb2ludHMnKS52YWwoJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCkpO1xuICB9XG5cbiAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYnV0dG9uIGxpbmtlZCB0byBjaGVja291dCBwYWdlXG4gICQoJ2EuYnRuLXRvLWNoZWNrb3V0JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ0hFQ0tPVVQgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgeyBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcblxuLy8gTWFpbiBmdW5jdGlvbiB1c2VkIGluIGluaXRcbmNvbnN0IHNhdmVCdXR0b24gPSAkKCcjY2hlY2tvdXRQYWdlIC5zYXZlLWluLWFjY291bnQnKTtcbmNvbnN0IGNhbmNlbEJ0biA9ICQoJyNjaGVja291dFBhZ2UgLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycpO1xuXG5jb25zdCBjaGVja291dCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjaGVja291dFBhZ2UnKTtcbiAgLy8gV2hlbiB0aGUgdXNlciB3YW50cyB0byBjaGFuZ2UgaGlzIGFkZHJlc3NcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2NsaWNrZWQnKSAmJiAhJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuXG4gICAgICBjYW5jZWxCdG4uc2hvdygpO1xuICAgICAgY2FuY2VsQnRuLnByZXYoKS5oaWRlKCk7XG5cbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0gLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnY2hhbmdlJywgY29udGFpbmVyKTtcbiAgICAgIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCgkKCcjY2Fyb3VzZWxBZGRyZXNzTGlzdCcpKTtcbiAgICAgIC8vIENyZWF0ZSBldmVudCBvbiBhZGRyZXNzIGl0ZW0gYWZ0ZXIgY2Fyb3VzZWwgaXMgb3BlblxuICAgICAgJCgnLmNob29zZS1hZGRyZXNzIC5jaG9vc2UtYWRkcmVzcy1pdGVtIGFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2hvb3NlQWRkcmVzcygkKHRoaXMpLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgd2FudHMgdG8gYWRkIGEgbmV3IGFkZHJlc3MgdG8gaGlzIGFjY291bnRcbiAgJCgnYS5jaGVja291dC1hZGQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCgkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzLmNsaWNrZWQnLCBjb250YWluZXIpWzBdKVsxXTtcbiAgICBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBzYXZlIGEgbmV3IGFkZHJlc3NcbiAgc2F2ZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhZGRyZXNzVHlwZSA9ICdzaGlwcGluZyc7XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgICAgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbM107XG4gICAgICAkKCcjY2hlY2tvdXRQYWdlIC5kYXRhLScgKyBhZGRyZXNzVHlwZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGQgKyAnXSc7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGROYW1lO1xuICAgICAgICBjb25zdCB0b1JlcGxhY2UgPSAnLmNoYW5nZS0nKyBhZGRyZXNzVHlwZSArJy1hZGRyZXNzICcgKyBmaWVsZE5hbWU7XG4gICAgICAgICQodG9SZXBsYWNlKS52YWwoJCh0b1NhdmUpLnZhbCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVja291dFNhdmVBZGRyZXNzKHRoaXMsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIGFkZHJlc3MgcGFnZSBuZXh0IGJ1dHRvblxuICAkKCcubWFpbi1hZGRyZXNzLWZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBmaWxsQWxsQWRkcmVzc2VzKGNvbnRhaW5lcik7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBjaGFuZ2VzXG4gICQoJ2EuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgYWRkXG4gICQoJ2EuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuLy8gV2hlbiB1c2VyIGNob3NlIGFuIGFkZHJlc3MgaXMgdGhlIGFkZHJlc3NlcyBsaXN0XG5mdW5jdGlvbiBjaG9vc2VBZGRyZXNzKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgJCgnLmRhdGEtYWRkcmVzcycsIGVsZW1lbnQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZmllbGROYW1lID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgIGNvbnN0IGZpZWxkU2VsZWN0b3IgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddXCJdJztcbiAgICBjb25zdCBmb3JtRmllbGQgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZpZWxkU2VsZWN0b3I7XG4gICAgY29uc3QgY2hvc2VuQWRkcmVzc1RleHQgPSAnLmRhdGEtJysgYWRkcmVzc1R5cGUgKycuJyArIGZpZWxkTmFtZTtcblxuICAgIGxldCBjaG9zZW5WYWx1ZSA9ICQodGhpcykudGV4dCgpO1xuICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLnRleHQoY2hvc2VuVmFsdWUpO1xuXG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgY2hvc2VuVmFsdWUgPSAkKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwgMik7XG4gICAgfVxuICAgICQoZm9ybUZpZWxkKS52YWwoY2hvc2VuVmFsdWUpO1xuXG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gJ3N0cmVldDInKSB7XG4gICAgICBpZiAoJCh0aGlzKS50ZXh0KCkudHJpbSgpICE9PSAnJykge1xuICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJChjaG9zZW5BZGRyZXNzVGV4dCkuY2xvc2VzdCgnYWRkcmVzcycpLmF0dHIoJ2RhdGEtJyArIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSwgY2hvc2VuVmFsdWUpO1xuICB9KTtcbiAgJCgnI3N5bGl1c19jaGVja291dF9hZGRyZXNzX2RpZmZlcmVudEJpbGxpbmdBZGRyZXNzJywgY29udGFpbmVyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG59XG5cbi8qIFNhdmUgYWRkcmVzcyBpbiB1c2VyIGFjY291bnQgOiBSZXR1cm5zIGVycm9ycyBpbiBmb3JtIGlmIG5vdCB2YWxpZCAqL1xuZnVuY3Rpb24gY2hlY2tvdXRTYXZlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGZvcm0gPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgJCgnaW5wdXRbbmFtZT1cImFkZHJlc3NfdHlwZVwiXScsIGZvcm0pLnZhbChhZGRyZXNzVHlwZSk7XG4gIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICQuYWpheCh7XG4gICAgdHlwZTogXCJQT1NUXCIsXG4gICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGRhdGFTdWNjZXNzRGl2ID0gJChyZXNwb25zZSk7XG4gICAgICBjb25zdCBub0FkZHJlc3MgPSBzYXZlQnV0dG9uLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKTtcbiAgICAgIGlmKGRhdGFTdWNjZXNzRGl2Lmhhc0NsYXNzKCdzYXZlLWFkZHJlc3Mtc3VjY2VzcycpKSB7XG4gICAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuZGF0YS0nICsgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG5cbiAgICAgICAgICBmaWxsRGF0YUFmdGVyU2F2ZSh0aGlzLCBhZGRyZXNzVHlwZSwgZmllbGROYW1lLCBkYXRhU3VjY2Vzc0Rpdik7XG4gICAgICAgICAgLy8gSWYgVXNlciBkb2Vzbid0IGhhdmUgYWRkcmVzc2VzXG4gICAgICAgICAgaWYgKG5vQWRkcmVzcykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoJy5jaG9zZW4tYWRkcmVzcyAuZGF0YS0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICBmaWxsRGF0YUFmdGVyU2F2ZShlbGVtZW50LCBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSwgZmllbGROYW1lLCBkYXRhU3VjY2Vzc0Rpdik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCgnLmFkZHJlc3MtYm9vaycsIGNvbnRhaW5lcikuaHRtbCgkKCcuYWRkcmVzcy1ib29rJywgZGF0YVN1Y2Nlc3NEaXYpLmh0bWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm9BZGRyZXNzKSB7XG4gICAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgJCgnLm5vLWFkZHJlc3Nlcy10ZXh0JywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgc2hvd01haW5Gb3JtKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9yLW1lc3NhZ2UnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xhYmVsJykuYXR0cignZm9yJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtpZD1cIicrIGZpZWxkTmFtZSArJ1wiXScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj48c3BhbiBjbGFzcz1cImZvcm0tZXJyb3ItbWVzc2FnZSBkLWJsb2NrXCI+JyArIGZpZWxkRXJyb3IgKyAnPC9zcGFuPjwvc3Bhbj4nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcbn1cblxuLyogRmlsbCBhZGRyZXNzIGZvcm0gZmllbGRzIHRvIGF2b2lkIGVycm9ycyAqL1xuZnVuY3Rpb24gZmlsbEFkZHJlc3MoZmllbGRJZCwgYWRkcmVzc1R5cGUsIGZvcm0sIGNvbnRhaW5lcikge1xuICBjb25zdCBrZWVwQ2FtZWxGaWVsZCA9IFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2NvdW50cnlDb2RlJ107XG4gIGNvbnN0IGRhdGFUb0ZpbGwgPSAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mby4nICsgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikuZGF0YSgpO1xuICAkKGZvcm0gKyAnIFtpZF49XCInICsgZmllbGRJZCArICdcIl0nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKFxcdyspXFxdJC9nbTtcbiAgICBsZXQgZmllbGROYW1lID0gcmVnZXguZXhlYygkKHRoaXMpLmF0dHIoJ25hbWUnKSlbMV07XG4gICAgaWYgKCFrZWVwQ2FtZWxGaWVsZC5pbmNsdWRlcyhmaWVsZE5hbWUpKSB7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgJCh0aGlzKS52YWwoZGF0YVRvRmlsbFtmaWVsZE5hbWVdKTtcbiAgfSk7XG4gICQoJyNpbkFjY291bnRfc2F2ZV9kaWZmZXJlbnRCaWxsaW5nQWRkcmVzcycsIGNvbnRhaW5lcikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xufVxuXG4vKiBGaWxsIGFkZHJlc3NlcyB3aGVuIHVzZXIgY2xpY2tzIG9uIG5leHQgYnV0dG9uICovXG5mdW5jdGlvbiBmaWxsQWxsQWRkcmVzc2VzKGNvbnRhaW5lcikge1xuICBbJ3NoaXBwaW5nJywgJ2JpbGxpbmcnXS5mb3JFYWNoKChhZGRyZXNzVHlwZSkgPT4ge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAnc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3MnO1xuICAgIGZpbGxBZGRyZXNzKGZpZWxkSWQsIGFkZHJlc3NUeXBlLCAnLm1haW4tYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKVxuICB9KVxufVxuXG4vKiBGaWxsIG90aGVyIGFkZHJlc3MgdHlwZSBmb3JtIHdoZW4gc2F2aW5nIG5ldyBhZGRyZXNzICovXG5mdW5jdGlvbiBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgY29uc3Qgb3RoZXJBZGRyZXNzVHlwZSA9IGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpO1xuICBsZXQgZmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZTtcbiAgaWYgKHNhdmVCdXR0b24uaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpKSB7XG4gICAgZmlsbE90aGVyRm9ybShhZGRyZXNzVHlwZSwgb3RoZXJBZGRyZXNzVHlwZSwgJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgZmlsbEFkZHJlc3MoZmllbGRJZCwgb3RoZXJBZGRyZXNzVHlwZSwgJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcik7XG4gIH1cbn1cblxuLy8gRmlsbCBvdGhlciBuZXcgYWRkcmVzcyBmb3JtIE9OTFkgSUYgdXNlciBkb24ndCBoYXZlIGFkZHJlc3NlcyB5ZXRcbmZ1bmN0aW9uIGZpbGxPdGhlckZvcm0oYWRkcmVzc1R5cGUsIG90aGVyQWRkcmVzc1R5cGUsIGZvcm0sIGNvbnRhaW5lcikge1xuICBjb25zdCBmaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBhZGRyZXNzVHlwZTtcbiAgY29uc3Qgb3RoZXJGaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBvdGhlckFkZHJlc3NUeXBlO1xuICAkKGZvcm0gKyAnIFtpZF49XCInICsgZmllbGRJZCArICdcIl0nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKFxcdyspXFxdJC9nbTtcbiAgICBsZXQgZmllbGROYW1lID0gcmVnZXguZXhlYygkKHRoaXMpLmF0dHIoJ25hbWUnKSlbMV07XG4gICAgaWYgKGZpZWxkTmFtZSAhPT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGNvbnN0IGlkVG9GaWxsID0gJyMnICsgb3RoZXJGaWVsZElkICsgJ18nICsgZmllbGROYW1lO1xuICAgICQoaWRUb0ZpbGwpLnZhbCgkKHRoaXMpLnZhbCgpKTtcbiAgfSk7XG59XG5cbi8vIEZpbGwgZm9ybSBhbmQgZGl2IGRhdGEgd2hlbiBzYXZlIG5ldyBhZGRyZXNzXG5mdW5jdGlvbiBmaWxsRGF0YUFmdGVyU2F2ZShlbGVtZW50LCBhZGRyZXNzVHlwZSwgZmllbGROYW1lLCBjb250YWluZXIpIHtcbiAgLy8gR2V0IHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgY29uc3QgbmV3VmFsdWUgPSAkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKS5odG1sKCk7XG5cbiAgLy8gQ3JlYXRlIG1haW4gZm9ybSBmaWVsZCBzZWxlY3RvclxuICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXSc7XG4gIGNvbnN0IGZpZWxkVG9SZXBsYWNlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gIC8vIFJlcGxhY2UgZmllbGQgd2l0aCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gICQoZmllbGRUb1JlcGxhY2UpLnZhbChuZXdWYWx1ZSk7XG5cbiAgLy8gUmVwbGFjZSB0ZXh0IHdpdGggdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICAkKGVsZW1lbnQpLnRleHQobmV3VmFsdWUpO1xuICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgJChlbGVtZW50KS50ZXh0KCQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy5jb3VudHJ5TmFtZScsIGNvbnRhaW5lcikuaHRtbCgpKTtcbiAgfVxuXG4gIC8vIFNob3cgb3IgaGlkZSBzdHJlZXQyIGNvbnRhaW5lciBhY2NvcmRpbmcgdG8gdmFsdWVcbiAgaWYgKGZpZWxkTmFtZSA9PT0gJ3N0cmVldDInKSB7XG4gICAgaWYgKCQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBjb250YWluZXIpLmh0bWwoKS50cmltKCkgIT09ICcnKSB7XG4gICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaWxsIGFkZHJlc3MgZGl2IGRhdGFcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jYW5jZWwtaW5mby4nICsgYWRkcmVzc1R5cGUpLmF0dHIoJ2RhdGEtJyArIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSwgbmV3VmFsdWUpO1xufVxuXG4vKiBTaG93IE1haW4gZm9ybSB3aGVuIHVzZXIgaGF2ZSBubyBhZGRyZXNzZXMgKi9cbmZ1bmN0aW9uIHNob3dNYWluRm9ybShjb250YWluZXIpIHtcbiAgLy8gSGlkZSBkaXYgbWVudGlvbmluZyB0aGF0IHVzZSBkb2Vzbid0IGhhdmUgYWRkcmVzc2VzXG4gICQoJy5uby1hZGRyZXNzLXlldCcsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG4gIC8vIEhpZGUgYWRkIG5ldyBhZGRyZXNzIGZvcm1cbiAgJCgnLmFkZC1zaGlwcGluZy1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAvLyBIaWRlIGFkZCBuZXcgYWRkcmVzcyBmb3JtIHRpdGxlXG4gICQoJy5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUgLnVzZScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUgLmFkZCcsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAvLyBTaG93IG5hdmlnYXRpb24gYnV0dG9ucyBmcm9tIG1haW4gZm9ybVxuICAkKCcuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJykubmV4dCgnYS5idG4nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59XG5cbi8qIEhpZGUgYWRkcmVzcyBtb2RpZmljYXRpb24gY29udGFpbmVyICovXG5mdW5jdGlvbiBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpIHtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgY2FuY2VsQnRuLmhpZGUoKTtcbiAgY2FuY2VsQnRuLnByZXYoKS5zaG93KCk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgJCgnI21haW5Db250ZW50Q29udGFpbmVyJylbMF0uc2Nyb2xsVG9wID0gMDtcbn1cblxuLyogUmVtb3ZlIGVycm9yIGluZGljYXRvcnMgd2hlbiBzYXZlIGFkZHJlc3MgZm9ybSBpcyBzdWJtaXR0ZWQgKi9cbmZ1bmN0aW9uIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKSB7XG4gIC8vIFVzZSBhZGRyZXNzVHlwZSBjaG9zZW4gd2hlbiBzYXZlIGZvcm0gaXMgc2hvd25cbiAgbGV0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHNhdmVCdXR0b25bMF0pWzNdO1xuICBpZiAoYWRkcmVzc1R5cGUgPT09ICduby1hZGRyZXNzZXMnKSB7XG4gICAgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3Qoc2F2ZUJ1dHRvblswXSlbNF07XG4gIH1cbiAgJCgnLmNoYW5nZS0nICsgYWRkcmVzc1R5cGUgKyAnLXRpdGxlJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy5jaGFuZ2UtJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBmb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gaW5wdXQsIC5zYXZlLWFkZHJlc3MtZm9ybSBzZWxlY3QnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAuaW52YWxpZC1mZWVkYmFjaycsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG59XG5cbi8qIFJlcGxhY2UgYWxsIGZvcm0gYW5kIGRpc3BsYXllZCBhZGRyZXNzIGRhdGEgd2hlbiBjYW5jZWwgbW9kaWZpY2F0aW9ucyAqL1xuZnVuY3Rpb24gY2FuY2VsQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpIHtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb2xkRGF0YSA9ICQodGhpcykuZGF0YSgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gKHRoaXMuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykpWzFdO1xuICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGREYXRhKTtcblxuICAgIGZpZWxkTmFtZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGZpZWxkTmFtZSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ2NvdW50cnlOYW1lJykge1xuICAgICAgICBmaWVsZE5hbWUgPSAnY291bnRyeUNvZGUnXG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0VG9SZXBsYWNlID0gJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICcuJyArIGZpZWxkTmFtZTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddXCJdJztcbiAgICAgIGNvbnN0IGZpZWxkVG9SZXBsYWNlID0gJy5tYWluLWFkZHJlc3MtZm9ybSAnICsgZm9ybUZpZWxkTmFtZTtcblxuICAgICAgLy8gU2V0IGZvcm0gd2l0aCBvbGQgZGF0YVxuICAgICAgJChmaWVsZFRvUmVwbGFjZSwgY29udGFpbmVyKS52YWwob2xkRGF0YVtlbGVtZW50XSk7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgICAvLyBTZXQgY2hvc2VuIEFkZHJlc3Mgd2l0aCBvbGQgZGF0YVxuICAgICAgICAkKHRleHRUb1JlcGxhY2UpLnRleHQob2xkRGF0YVtlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBTaG93IGFkZCBhZGRyZXNzIGZvcm1cbmZ1bmN0aW9uIHNob3dBZGRGb3JtKGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXScsIGNvbnRhaW5lcikudmFsKCcnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuXG4gIC8vIEhpZGUgYWxsIHNhdmUgYWRkcmVzcyBmb3JtcyBiZWZvcmUgc2hvd2luZyB0aGUgY2hvc2VuIG9uZVxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5hZGQtJyArIGFkZHJlc3NUeXBlICsgJy1hZGRyZXNzJywgY29udGFpbmVyKS5zaG93KCk7XG59XG5cbi8qIE1hbmFnZSB3aGF0IHR5cGUgb2YgYWRkcmVzcyB3aWxsIGJlIHJlcGxhY2UgYW5kL29yIHNhdmVkICovXG5mdW5jdGlvbiBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgc2VsZWN0b3JUeXBlLCBjb250YWluZXIpIHtcbiAgJCgnLicgKyBzZWxlY3RvclR5cGUgKyAnLScgKyBhZGRyZXNzVHlwZSArICctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLicgKyBzZWxlY3RvclR5cGUgKyAnLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICctdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAvLyBBbHNvIE1hbmFnZSBTYXZlQnV0dG9uIGNsYXNzXG4gIHNhdmVCdXR0b24uYWRkQ2xhc3MoYWRkcmVzc1R5cGUpO1xuICBzYXZlQnV0dG9uLnJlbW92ZUNsYXNzKGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqL1xuLyogQ09NTU9OIEZVTkNUSU9OUyAqL1xuLyoqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBHZXQgY2xhc3MgbGlzdCBmcm9tIGdpdmVuIGVsZW1lbnRcbmZ1bmN0aW9uIGdldENsYXNzTGlzdChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xufVxuXG4vLyBHZXQgZmllbGQgbmFtZSB0byBmaWxsIGRhdGEgaW5mbyBpbiAuY2FuY2VsLWluZm8gZGl2XG5mdW5jdGlvbiBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSkge1xuICBjb25zdCBtYXRjaGVzID0gL1tBLVpdL2dtLmV4ZWMoZmllbGROYW1lKTtcbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICByZXR1cm4gKGZpZWxkTmFtZS5zdWJzdHIoMCwgbWF0Y2hlcy5pbmRleCkgKyAnLScgKyBmaWVsZE5hbWUuc3Vic3RyKG1hdGNoZXMuaW5kZXgsIGZpZWxkTmFtZS5sZW5ndGgpKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkTmFtZTtcbn1cblxuLy8gR2V0IG90aGVyIGFkZHJlc3MgdHlwZSBmcm9tIGFkZHJlc3MgdHlwZSBnaXZlXG5mdW5jdGlvbiBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSB7XG4gIHJldHVybiAoYWRkcmVzc1R5cGUgPT09ICdzaGlwcGluZycpID8gJ2JpbGxpbmcnIDogJ3NoaXBwaW5nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tvdXQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ09OVEFDVCBQQUdFIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gQWpheCBjYWxsIHdoZW4gY29udGFjdCBmb3JtIGlzIHN1Ym1pdHRlZFxuICAkKCcjY29udGFjdFBhZ2UgZm9ybSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCAubW9kYWwtYm9keSBkaXYnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgLy8gRGVsZXRlIGFsbCBlcnJvcnMgb2YgZm9ybSB3aGVuIHN1Y2Nlc3NcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdJykudmFsKCcnKS5wcm9wKCBcImNoZWNrZWRcIiwgZmFsc2UgKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdLCAjY29udGFjdFBhZ2UgW2Zvcl49XCJzeWxpdXNfY29udGFjdF9cIl0nKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA2KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAgIGNvbnN0IGVycm9yTGlzdCA9ICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnc3BhbicpLnRvQXJyYXkoKTtcbiAgICAgICAgICBlcnJvckxpc3QuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iub3V0ZXJUZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IuY2xhc3NOYW1lICE9PSAnYWNjZXB0Q2d2Jykge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgICAgICAgICAgICAgIC5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj4nICsgZXJyb3Iub3V0ZXJUZXh0ICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5uZXh0KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDE3KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIC5jb250YWN0LWVycm9yJykuaHRtbCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcblxuICAvLyBBZGQgbmV3IGZpZWxkIHdoZW4gY2hvc2VuIHN1YmplY3QgaXMgXCJvdGhlclwiXG4gICQoJyNzeWxpdXNfY29udGFjdF9zdWJqZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZigkKGUudGFyZ2V0KS52YWwoKSA9PT0gJ290aGVyJykge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0JykuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBMT0dJTiBQQUdFIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBsb2dpblBhZ2UgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBPcGVuIHJlc2V0IHBhc3N3b3JkIG1vZGFsXG4gICQoJy5yZXNldC1wYXNzd29yZC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJCh0aGlzKS5kYXRhKCdtb2RhbElkJyk7XG4gICAgJChtb2RhbElkKS5tb2RhbCgnc2hvdycpO1xuICAgICQoJy5oZWFkZXItZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KVxuXG4gIC8vIE9ubHkgd2hlbiBjbGFzcyBsb2dpbi1mb3JtIGV4aXN0cyBpbiBwYWdlXG4gIGlmKCQoJy5sb2dpbi1mb3JtJykpIHtcbiAgICAkKCcuc3VibWl0LWxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybUVsZW1lbnQpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT25seSB3aGVuIGNsYXNzIHZlcmlmeS1hY2NvdW50IGV4aXN0cyBpbiBwYWdlXG4gIGNvbnN0IHZlcmlmeUFjY291bnRPYmplY3QgPSAkKCcudmVyaWZ5LWFjY291bnQnKTtcbiAgaWYodmVyaWZ5QWNjb3VudE9iamVjdCkge1xuICAgIHZlcmlmeUFjY291bnRPYmplY3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHdoZW4gcmVzZXRQYXNzd29yZFN1Ym1pdCBidXR0b24gZXhpc3RzIGluIHBhZ2UsIEFqYXggY2FsbCB0byByZXNldCBwYXNzd29yZFxuICBpZiAoJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKSkge1xuICAgICQoJyNyZXNldFBhc3N3b3JkU3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vIEFjdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAkKCcjcmVzZXRQYXNzd29yZE1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0nKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dCcpLnZhbCgnJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGVtYWlsIGlzIHZhbGlkIGJlZm9yZSBzdWJtaXQgcmVnaXN0ZXIgZm9ybVxuICAkKCdidXR0b24uc3VibWl0LXJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSAkKCQoZS50YXJnZXQpLmRhdGEoJ2Zvcm0nKSk7XG4gICAgY29uc3QgaW5wdXRSZWdpc3RlckZvcm0gPSByZWdpc3RlckZvcm0uZmluZCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbCA9IGlucHV0UmVnaXN0ZXJGb3JtLnZhbCgpO1xuICAgIGNvbnN0IGludmFsaWRTcGFuID0gaW5wdXRSZWdpc3RlckZvcm0uY2xvc2VzdCgnZGl2JykubmV4dCgnc3BhbicpO1xuICAgIGlmIChyZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgaW52YWxpZFNwYW4ucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIGlucHV0UmVnaXN0ZXJGb3JtLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICByZWdpc3RlckZvcm0uc3VibWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludmFsaWRTcGFuLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgICBpbnB1dFJlZ2lzdGVyRm9ybS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBlbWFpbCBmaWVsZCBpcyBmaWxsZWQgYW5kIGN1c3RvbWVyIHdhbnRzIHRvIG1vZGlmeSBpdHMgdmFsdWVcbiAgJCgnLnJlZ2lzdGVyLWZvcm0gaW5wdXQsIC5oZWFkZXItcmVnaXN0ZXItZm9ybSBpbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICBjb25zdCBlbWFpbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIGlmIChyZWdleC50ZXN0KGVtYWlsKSAmJiAkKGUudGFyZ2V0KS5oYXNDbGFzcygnaXMtaW52YWxpZCcpKSB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luUGFnZTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqL1xuLyogUFJPRFVDVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuXG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yID0gJyNwcm9kdWN0c0ZpbHRlcnMnO1xuY29uc3QgcHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSA9ICcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJztcblxuY29uc3QgcHJpY2VNaW5TZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzFdXCJdJztcbmNvbnN0IHByaWNlTWF4U2VsZWN0b3IgPSAnaW5wdXRbbmFtZT1cImNyaXRlcmlhW3ByaWNlXVtwcmljZV8yXVwiXSc7XG5cbmNvbnN0IHByb2R1Y3QgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBNYW5hZ2UgdmFyaWFudCBsaXN0IHdoZW4gY2xpY2tpbmcgaW4gc2l6ZSBhdmFpbGFibGVcbiAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lOm5vdCgudmFyaWFudC1kaXNhYmxlZCknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW0gPSAkKHRoaXMpLmRhdGEoJ2J1bmRsZS1pdGVtJyk7XG4gICAgY29uc3QgdmFyaWFudExpc3RDb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi52YXJpYW50LWxpc3QnKTtcblxuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCgnLmludmFsaWQtZmVlZGJhY2snLCB2YXJpYW50TGlzdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJyk7XG5cbiAgICBpZiAoJCh0aGlzKS5kYXRhKCdhbG1vc3Qtb3V0JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLmxhc3QtcHJvZHVjdC1pbi1zdG9jaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmxhc3QtcHJvZHVjdC1pbi1zdG9jaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAvLyBTaG93IG9yIGhpZGUgdmFyaWFudHMgbGlzdCBpbiBwcm9kdWN0cyBjYXJvdXNlbCBhY2NvcmRpbmcgdG8gc2NyZWVuIHNpemVcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCAudmFyaWFudHMtY29udGFpbmVyJykuaGlkZSgpO1xuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wJylcbiAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTQ0MCkge1xuICAgICAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuc2hvdygpO1xuICAgICAgfVxuICAgIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLmhpZGUoKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiBjbGlja2luZyBvbiBhZGQgdG8gY2FydCBidXR0b24gPT4gU0VFIHN5bGl1cy1hZGQtdG8tY2FydC5qc1xuICAvLyQoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCAuYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vfSlcblxuICAkKCdpbnB1dFtpZF49XCJiaXRiYWdfc3lsaXVzX3Byb2R1Y3RfYnVuZGxlX3BsdWdpbl9hZGRfcHJvZHVjdF9idW5kbGVfdG9fY2FydF9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykuZmluZCgnc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykuYWRkQ2xhc3MoJ2lucHV0LWNoZWNrZWQnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSlcbn07XG5cbmNvbnN0IGZpbHRlclByb2R1Y3RzID0gZnVuY3Rpb24gZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBjcml0ZXJpYSA9IHF1ZXJ5U3RyaW5nLmluZGV4T2YoJ2NyaXRlcmlhJyk7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpO1xuXG4gIGxldCBwcmljZVNsaWRlcjtcbiAgbGV0IHByaWNlU2xpZGVyTW9iaWxlO1xuXG4gIGlmIChwcmljZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBwcmljZVNsaWRlciA9IGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIHByaWNlQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgY2hhbmdlcyBwcmljZSBpbnB1dCB2YWx1ZVxuICAgIHByaWNlSW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYoZS53aGljaCAhPT0gOCAmJiAhaXNOYU4oU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKSkpe1xuICAgICAgICBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNQU5BR0UgREVTS1RPUCBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50XG4gIGNvbnN0IHNpemVGaWx0ZXJJbnB1dCA9ICQoJyNzaXplRmlsdGVyIGlucHV0Jyk7XG4gIHNpemVGaWx0ZXJJbnB1dC5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICBpZih0aGlzLmNoZWNrZWQpIHtcbiAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJ2lucHV0W2RhdGEtaWQ9XCInICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgc2l6ZUZpbHRlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzIG9uIGRlc2t0b3BcbiAgJCgnYS52YWxpZGF0ZS1maWx0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlckZvcm0nKS5zdWJtaXQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBNT0JJTEUgRklMVEVSU1xuICAgKi9cbiAgLy8gU2l6ZSBmaWx0ZXIgbWFuYWdlbWVudCBvbiBtb2JpbGVcbiAgJCgnI2NyaXRlcmlhU2l6ZU1vYmlsZSBpbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgaW5wdXRUb0NoZWNrID0gJChlLnRhcmdldCkuZGF0YSgnaWQnKTtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykucmVtb3ZlQXR0cignY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTb3J0aW5nXG4gICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIGlucHV0LmlucHV0LXNvcnRpbmcnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIGlucHV0JykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIC5jaGVja21hcmsgLmNoZWNrZWQnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoZS50YXJnZXQpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICQoZS50YXJnZXQpLm5leHQoJy5jaGVja21hcmsnKS5maW5kKCcuY2hlY2tlZCcpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gIH0pO1xuXG4gIC8vIFZhbGlkYXRlIGZpbHRlcnNcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnZhbCgpID09PSAnY3JlYXRlZEF0Jykge1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnJlbW92ZSgpO1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmctY3JlYXRlZEF0JykuYXR0cignY2hlY2tlZCcsIHRydWUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1pbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIC8vIE1vYmlsZSBmaWx0ZXJzIGJlaGF2aW91clxuICAkKCcucHJvZHVjdC1maWx0ZXJzLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgcmVzaXplRmlsdGVyTWVudSgpO1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBHRU5FUkFMIEZVTkNUSU9OU1xuICAgKi9cbiAgLy8gSGlkZSByZWluaXRpYWxpemF0aW9uIGJ1dHRvbiB3aGVuIGZpbHRlcnMgaGF2ZSBubyBjcml0ZXJpYVxuICBpZiAoY3JpdGVyaWEgIT09IC0xKSB7XG4gICAgJCgnLnJlaW5pdC1maWx0ZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgfVxuICAvLyBBZGQgYWN0aW9uIHRvIGNsb3NlIGljb25cbiAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuZHJvcGRvd24tdG9nZ2xlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkudHJpZ2dlcignY2xpY2snKTtcbiAgfSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB3aW5kb3cgaXMgcmVzaXplZCB0byBhdm9pZCBzaG93aW5nIGZpbHRlciBtb2JpbGUgbWVudSBvbiBkZXNrdG9wXG4gKi9cbmNvbnN0IHJlc2l6ZUZpbHRlck1lbnUgPSBmdW5jdGlvbiByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9ICQoJyNoZWFkZXJDb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkZXJCYW5uZXIgPSAkKCcuaGVhZGVyLWJhbm5lcicpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlckNvbnRhaW5lci5oZWlnaHQoKSAtIGhlYWRlckJhbm5lci5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9IGhlYWRlckNvbnRhaW5lci5vdXRlckhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGZpbHRlckxpc3RDb250YWluZXJIZWlnaHQgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51JykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNmaWx0ZXJTdWJtaXQnKS5vdXRlckhlaWdodCgpIC0gMTA7XG4gICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZScpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2ZpbHRlckxpc3QnKS5jc3MoJ2hlaWdodCcsIGZpbHRlckxpc3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcmljZSBzbGlkZXIgb24gdGF4b24gcGFnZXNcbiAqXG4gKiBAcGFyYW0gcHJpY2VJbnB1dFxuICogQHBhcmFtIGNvbnRhaW5lclNlbGVjdG9yXG4gKiBAcmV0dXJucyBub1VpU2xpZGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gIGNvbnN0IHByaWNlQ29udGFpbmVyID0gJChjb250YWluZXJTZWxlY3Rvcik7XG4gIGNvbnN0IHByaWNlUmFuZ2UgPSAkKCcjcHJpY2VSYW5nZScsIHByaWNlQ29udGFpbmVyKVswXTtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgLy8gUHJlcGFyZSBzbGlkZXIgb3B0aW9uc1xuICBjb25zdCB0YXhvbk1pblByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWluJykpO1xuICBjb25zdCB0YXhvbk1heFByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWF4JykpO1xuICBjb25zdCByYW5nZVNsaWRlck9wdGlvbnMgPSB7XG4gICAgc3RhcnQ6IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldLFxuXG4gICAgcmFuZ2U6IHtcbiAgICAgICdtaW4nOiBbdGF4b25NaW5QcmljZV0sXG4gICAgICAnbWF4JzogW3RheG9uTWF4UHJpY2VdXG4gICAgfSxcbiAgICBzdGVwOiAxLFxuICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgZm9ybWF0OiB7XG4gICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVoYXZpb3VyOiAndGFwJyxcbiAgICB0b29sdGlwczogZmFsc2VcbiAgfTtcblxuICBjb25zdCBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICBzbGlkZXIub24oJ3NsaWRlJywgZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICBwcmljZU1pbi52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICBwcmljZU1heC52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNsaWRlcjtcbn1cblxuZnVuY3Rpb24gc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXIsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3VmFsdWUgPSBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXTtcbiAgcHJpY2VTbGlkZXIuc2V0KG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBwcmljZSB2YWx1ZXMgYmVmb3JlIHNlbmQgZm9ybVxuICogQHBhcmFtIHByaWNlU2xpZGVyT2JqZWN0XG4gKiBAcGFyYW0gcHJpY2VDb250YWluZXJcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyT2JqZWN0LCBwcmljZUNvbnRhaW5lcikge1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKS5maXJzdCgpO1xuICBsZXQgcHJpY2VNaW5WYWx1ZSA9IHByaWNlTWluLnZhbCgpO1xuICBsZXQgcHJpY2VNYXhWYWx1ZSA9IHByaWNlTWF4LnZhbCgpO1xuICBpZiAocHJpY2VNaW4udmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgaWYgKHByaWNlTWluLnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIHByaWNlTWluLnZhbChwcmljZU1pblZhbHVlKTtcbiAgaWYgKHByaWNlTWF4LnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIGlmIChwcmljZU1heC52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBwcmljZU1heC52YWwocHJpY2VNYXhWYWx1ZSk7XG4gIHByaWNlU2xpZGVyT2JqZWN0LnNldChbcHJpY2VNaW5WYWx1ZSwgcHJpY2VNYXhWYWx1ZV0pO1xufVxuXG5leHBvcnQgeyBwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTSEFSRSBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBzaGFyZVByb2R1Y3QgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmVEcm9wZG93bicpKSB7XG4gICAgalF1ZXJ5KCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpO1xuICAgIC8vIEZhY2Vib29rIFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHdpblRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAoMzUwIC8gMik7XG4gICAgICBjb25zdCB3aW5MZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKDYwMCAvIDIpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5kYXRhc2V0LnVybDtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jyt1cmwsICdGYWNlYm9vayAtIE5vYmxlenogU2hvcCcsICd0b3A9JyArIHdpblRvcCArICcsbGVmdD0nICsgd2luTGVmdCArICcsdG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPTYwMCxoZWlnaHQ9MzUwJyk7XG4gICAgfSk7XG5cbiAgICAvLyBQaW50ZXJlc3QgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGludGVyZXN0U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsUGludGVyZXN0U2hhcmUnKS5jbGljaygpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDb3B5IHRvIENsaXBib2FyZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMaW5rJyk7XG4gICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZW5hYmxlJyk7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dC52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdzaG93Jyk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTsgfSwgMTUwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coYENvcHkgZmFpbGVkISAke2Vycm9yfWApIH0pXG4gICAgfSk7XG5cbiAgICAvLyBNYWlsIFRvXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBtYWlsVG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuZGF0YXNldC5tYWlsdG87XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1haWxUbztcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGFyZVByb2R1Y3Q7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMgfSBmcm9tICcuL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcbiAgbGV0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJyk7XG5cbiAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gJCgnaW5wdXRbbmFtZV49XCInICsgJChhZGRUb0NhcnRGb3JtKS5kYXRhKCduYW1lVG9DaGVjaycpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoO1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW1zQ291bnQgPSAkKCdkaXYuYnVuZGxlLWl0ZW0nKS5sZW5ndGg7XG4gICAgaWYoc2VsZWN0ZWRTaXplID4gMCAmJiBzZWxlY3RlZFNpemUgPCBidW5kbGVJdGVtc0NvdW50ICkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdDpub3QoLmlucHV0LWNoZWNrZWQpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPT09IDApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRhYmxlJywgJ2xvYWRpbmcnKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuICAgICAgcmVxdWVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICQucGFyc2VIVE1MKHJlc3BvbnNlLmRhdGEpWzBdO1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgICBpZiAoISQoJyNlbXB0eUNhcnQnKS5oYXNDbGFzcygnZC1ub25lJykpIHtcbiAgICAgICAgICAkKCcjY2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWZsZXgnKTtcbiAgICAgICAgICAkKCcjZW1wdHlDYXJ0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKS5zY3JvbGxUb3AoMCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcuY2FydC1jb3VudCcpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNvdW50LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUwpO1xuICAgICAgICAkKCcjaGVhZGVyQ2FydE5ld0l0ZW0nKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1uZXctaXRlbScpWzBdLmlubmVySFRNTCk7XG4gICAgICAgICQoJy5kcm9wZG93bi5jYXJ0LWJ0biAuZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsJykucmVtb3ZlQ2xhc3MoJ2QtZmxleCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsIHNwYW4nKS5sYXN0KCkuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1zdWJ0b3RhbCcpWzBdLmlubmVySFRNTCk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmFsaWQtZmVlZGJhY2snKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yRWwpIHtcbiAgICAgICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEucHJvZHVjdF9pZCA+IDApIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl1bZGF0YS1wcm9kdWN0LWlkPVwiJysgZXJyb3IucmVzcG9uc2UuZGF0YS5wcm9kdWN0X2lkICsnXCJdJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXVtkYXRhLWJ1bmRsZS1lcnJvcl0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZS5kYXRhKS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzVXBkYXRlUXVhbnRpdHkgZnJvbSAnLi9zeWxpdXMtdXBkYXRlLXF1YW50aXR5JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcblxuY29uc3QgY2FydFdpZGdldENvbnRhaW5lciA9ICQoJyNoZWFkZXJDYXJ0SXRlbXMnKTtcbmNvbnN0IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMgPSBmdW5jdGlvbiBkb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpIHtcbiAgLy8gQWZ0ZXIgRG9tIHJlcGxhY2VtZW50LCBzZXQgYWN0aW9ucyBpbiBjYXJ0IHdpZGdldCBhZ2FpblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbG9hZC1xdHktYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzVXBkYXRlUXVhbnRpdHkoZWwpKTtcblxuICAkKCcuYWpheC1xdHknLCBjYXJ0V2lkZ2V0Q29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJy5yZWxvYWQtcXR5LmFqYXgnKS5hdHRyKCdkYXRhLWpzLXVwZGF0ZS1xdHktdmFsdWUnLCAkKHRoaXMpLnZhbCgpKTtcbiAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICQodGhpcykudmFsKCQodGhpcykuYXR0cignbWF4JykpO1xuICAgIH0gZWxzZSBpZihwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA8IHBhcnNlSW50KCQodGhpcykuYXR0cignbWluJykpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21pbicpKTtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgPSBmdW5jdGlvbiB1cGRhdGVDYXJ0V2lkZ2V0KHJlc3BvbnNlKSB7XG4gIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICQucGFyc2VIVE1MKHJlc3BvbnNlLmRhdGEpWzBdO1xuICBjb25zdCBjYXJ0Q291bnQgPSAkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY291bnQtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTDtcbiAgY2FydFdpZGdldENvbnRhaW5lci5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKS5zY3JvbGxUb3AoMCkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLmNhcnQtY291bnQnKS5odG1sKGNhcnRDb3VudCk7XG4gICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCBzcGFuJykubGFzdCgpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtc3VidG90YWwnKVswXS5pbm5lckhUTUwpO1xuICBpZiAocGFyc2VJbnQoY2FydENvdW50KSA9PT0gMCkge1xuICAgICQoJyNjYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnZC1mbGV4JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJyNlbXB0eUNhcnQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9DYXJ0RnVuY3Rpb25zID0gZnVuY3Rpb24gYWRkVG9DYXJ0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xufVxuXG5leHBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zLCBhZGRUb0NhcnRGdW5jdGlvbnMgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMsIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgfSBmcm9tICcuL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5hZGRDbGFzcygnbG9hZGluZycpLnNjcm9sbFRvcCgwKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVkaXJlY3RVcmwgIT09IHVuZGVmaW5lZCAmJiAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9kdWN0LWFqYXgnKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIH0gZnJvbSAnLi9zeWxpdXMtY2FydC1jb21tb24nO1xuXG5jb25zdCBTeWxpdXNVcGRhdGVRdWFudGl0eSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXVwZGF0ZS1xdHktdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXVwZGF0ZS1xdHktY3NyZi10b2tlbicpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICQoJyNjYXJ0QWN0aW9ucyAucXVhbnRpdHktZXJyb3InKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpXG4gICAgY29uc3QgbmV3UXVhbnRpdHkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy11cGRhdGUtcXR5LXZhbHVlJyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCB7fSx7IGRhdGE6IHtfY3NyZl90b2tlbjogY3NyZlRva2VuLCBxdWFudGl0eTogbmV3UXVhbnRpdHkgfX0gKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zY3JvbGxUb3AoMCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5xdWFudGl0eS1lcnJvcicpLmFkZENsYXNzKCdkLWJsb2NrJykuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKGVycm9yLnJlc3BvbnNlLmRhdGEpLnRvU3RyaW5nKCkpLmNsb3Nlc3QoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1VwZGF0ZVF1YW50aXR5O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYWNjb3VudC1pY29uLmJhOTY5Yzk5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2JhY2suY2QxMWYwZmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2FyZC5iNzU3MWIxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jaHJvbm9wb3N0LmVlZGU2YWJjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NvbGlzc2ltby4wYjc5YTcxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9kZWxpdmVyeS10cnVjay45YzNkZmNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWRlLjlhMzE4NTlkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZW4uMzAyZWU3YmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lcy42YWE3MDdmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWZyLjg0NmQ3ZTY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24taXQuMzU1NWEzNmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbG9nby4yYzJhOWNjMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tYXN0ZXJjYXJkLjA0MGY0MWJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21vbmRpYWwtcmVsYXkuZTcyNjg5N2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbmV4dC5mYjY0NjA5NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9wYXlwYWwuOTUyNjI1ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmVsb2FkLjNiNzUwZDQ2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JldHVybi1wb2xpY3kuNjdkOGE3NTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvc2hvcHBpbmctYmFnLWljb24uN2ZkZWMyNzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvdmlzYS42OTljNDAzOS5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9