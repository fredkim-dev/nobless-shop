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
      let productContainerHeight = (0, _jquery2.default)('.cart-dropdown').height() - (0, _jquery2.default)('header').height() - (0, _jquery2.default)('#cartActions').outerHeight() - (0, _jquery2.default)('#cartWidgetTitle').outerHeight() - 20;
      (0, _jquery2.default)('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      (0, _jquery2.default)('#headerCartItems').css('height', productContainerHeight + 'px');

      if (!(0, _jquery2.default)('#headerCartNewItem').hasClass('d-none')) {
        productContainerHeight = (0, _jquery2.default)('.cart-dropdown').height() - (0, _jquery2.default)('header').height() - (0, _jquery2.default)('#cartActions').outerHeight() - 20;
        (0, _jquery2.default)('#headerCartNewItem').css('height', productContainerHeight + 'px');
      }

      (0, _jquery2.default)('body').addClass("offcanvas-active");
    }
  });
  (0, _jquery2.default)('.menu-icones .dropdown').on('hidden.bs.dropdown', function (e) {
    (0, _jquery2.default)(".screen-overlay-cart").removeClass("show");

    if ((0, _jquery2.default)(document).width() <= 1200) {
      (0, _jquery2.default)('body').removeClass("offcanvas-active");
    } // Cart Icon


    if ((0, _jquery2.default)(this).closest('.dropdown').hasClass('cart-btn')) {
      (0, _jquery2.default)('#headerCartNewItem').html('').addClass('d-none');
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

var _syliusLoadableForms = __webpack_require__(/*! ./js/sylius-loadable-forms */ "./themes/NoblessTheme/assets/js/sylius-loadable-forms.js");

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


  (0, _syliusLoadableForms.SyliusLoadableForms)();
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

var _syliusLoadableForms = __webpack_require__(/*! ./sylius-loadable-forms */ "./themes/NoblessTheme/assets/js/sylius-loadable-forms.js");

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
    loadAjaxPasswordReset(); // Actions when modal is closed

    $('#resetPasswordModal').on('show.bs.modal', function (e) {
      if (!$('.modal-content').hasClass('is-success')) {
        // Ajax load
        const modalBody = $('.reset-password .modal-dialog .modal-body');
        const overlay = document.querySelector('[data-js-loading-overlay]');
        const url = $(this).data('ajax-password-request-url');
        $('form.loadable', this).addClass('loading');
        $.ajax({
          type: "GET",
          url,
          success: function success(response) {
            modalBody.html(response);
            loadAjaxPasswordReset();
            (0, _syliusLoadableForms.SyliusLoadableForm)($('form.loadable', modalBody)[0]);
          }
        });
      }
    }).on('hide.bs.modal', function (e) {
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

function loadAjaxPasswordReset() {
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
        $('.modal-content').addClass('is-success');
      },
      error: function error(_error) {
        $('.reset-password .modal-dialog input.form-control').addClass('is-invalid');
        $('.modal-dialog .form-errors .form-error-message').text($($.parseHTML(_error.responseText)[1]).find('.form-errors ul li').text());
        $(form).removeClass('loading');
      }
    });
  });
}

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
        (0, _jquery2.default)('#headerCartNewItem').html((0, _jquery2.default)(responseData).find('.ajax-new-item')[0].innerHTML).removeClass('d-none');
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

/***/ "./themes/NoblessTheme/assets/js/sylius-loadable-forms.js":
/*!****************************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/sylius-loadable-forms.js ***!
  \****************************************************************/
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

const SyliusLoadableForm = el => {
  const overlay = document.querySelector('[data-js-loading-overlay]');
  el.appendChild(overlay.cloneNode(true));
  el.addEventListener('submit', () => {
    el.classList.add('loading');
  });
};

exports.SyliusLoadableForms = SyliusLoadableForms;
exports.SyliusLoadableForm = SyliusLoadableForm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NhcnQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9jaGVja291dC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NvbnRhY3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9sb2dpbi1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3Byb2R1Y3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zaGFyZS1wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtY2FydC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy11cGRhdGUtcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBcGlMb2dpbiIsImVsIiwiZWxlbWVudCIsInNpZ25JbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0aW9uRmllbGQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImxlbmd0aCIsImdldCIsImVtYWlsIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50VGFyZ2V0Iiwib25SYXRlIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImNsb3Nlc3QiLCJpbWciLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwic2VsZWN0Iiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJkZWZpbmUiLCIkIiwiRnJlc2NvIiwiZXh0ZW5kIiwidmVyc2lvbiIsIlNraW5zIiwiZnJlc2NvIiwiQm91bmRzIiwidmlld3BvcnQiLCJ3aWR0aCIsIkJyb3dzZXIiLCJNb2JpbGVTYWZhcmkiLCJBbmRyb2lkIiwiR2Vja28iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklFIiwiYXR0YWNoRXZlbnQiLCJpbmRleE9mIiwiZiIsIk9wZXJhIiwib3BlcmEiLCJwYXJzZUZsb2F0IiwiV2ViS2l0IiwibWF0Y2giLCJDaHJvbWUiLCJDaHJvbWVNb2JpbGUiLCJJRU1vYmlsZSIsInQiLCJSZWdFeHAiLCJleGVjIiwiX3NsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImJhc2VUb1N0cmluZyIsIl8iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsIlN0cmluZyIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9uIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJFdmVudCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzdXBwb3J0cyIsIm5hdHVyYWxXaWR0aCIsIkltYWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImlzTG9hZGVkIiwib3B0aW9ucyIsIm1ldGhvZCIsInBvbGxGYWxsYmFja0FmdGVyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwicHJveHkiLCJzdWNjZXNzIiwiaW50ZXJ2YWxzIiwiX2lwb3MiLCJfdGltZSIsIl9kZWxheSIsInBvbGwiLCJmYWxsYmFjayIsIl9wb2xsaW5nIiwiX3VzZWRQb2xsRmFsbGJhY2siLCJfZmFsbGJhY2tJbWciLCJuYXR1cmFsSGVpZ2h0Iiwib25lcnJvciIsInNyYyIsImFib3J0IiwiY2xlYXJUaW1lb3V0IiwiX2NhbGxlZFN1Y2Nlc3MiLCJfY2FsbGVkRXJyb3IiLCJfdGltZXJzIiwic2V0IiwiY2xlYXIiLCJjbGVhckFsbCIsIlR5cGUiLCJpc1ZpZGVvIiwiaW1hZ2UiLCJleHRlbnNpb25zIiwiZGV0ZWN0IiwiaW5BcnJheSIsImV4dGVuc2lvbiIsInZpbWVvIiwiaWQiLCJ5b3V0dWJlIiwiVmltZW9UaHVtYm5haWwiLCJsb2FkIiwicHJvdG9jb2wiLCJfeGhyIiwiZ2V0SlNPTiIsInRodW1ibmFpbF91cmwiLCJjYWNoZSIsInB1c2giLCJWaW1lb1JlYWR5IiwiY2FsbGJhY2siLCJkaW1lbnNpb25zIiwiT3B0aW9ucyIsImRlZmF1bHRzIiwiZWZmZWN0cyIsImNvbnRlbnQiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsIm92ZXJsYXkiLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJhdHRyIiwicG9zaXRpb25PdXRzaWRlIiwicHJldmlvdXNJbnNpZGUiLCJuZXh0SW5zaWRlIiwiY2xvc2VJbnNpZGUiLCJncm91cGVkIiwiaW5mb0luc2lkZSIsImluZm9QYWRkZXJJbnNpZGUiLCJwb3NJbnNpZGUiLCJjYXB0aW9uSW5zaWRlIiwicG9zaXRpb25JbnNpZGUiLCJfZ2V0U3Vycm91bmRpbmdQYWdlcyIsInByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcyIsInByZWxvYWRpbmciLCJwcmVsb2FkZWQiLCJsb2FkZWQiLCJwcmVsb2FkUmVhZHkiLCJsb2FkaW5nIiwiX3NwaW5uZXJEZWxheSIsImltYWdlUmVhZHkiLCJfbWFya0FzTG9hZGVkIiwic2V0RGltZW5zaW9ucyIsInByZXBlbmQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ2aW1lb1JlYWR5IiwiX2Fib3J0U3Bpbm5lckRlbGF5IiwiaW5zZXJ0VmlkZW8iLCJwbGF5ZXJJZnJhbWUiLCJwYXJhbSIsIl9kYXRhIiwiX2NvbnRlbnREaW1lbnNpb25zIiwiZnJhbWVib3JkZXIiLCJyYWlzZSIsImxhc3RDaGlsZCIsInN0b3BJbmFjdGl2ZSIsInVwZGF0ZVVJIiwiX3VpIiwiaGlkZUluYWN0aXZlIiwib25TaG93IiwiYWZ0ZXJQb3NpdGlvbiIsInJlbW92ZVZpZGVvIiwicmVtb3ZlVHJhY2tpbmciLCJfdHJhY2siLCJyZW1vdmVkIiwiX2dldEluZm9IZWlnaHQiLCJfd2hpbGVWaXNpYmxlIiwiaXMiLCJoYXNDbGFzcyIsInZpc2liaWxpdHkiLCJ1cGRhdGVGb3JjZWQiLCJmdWxsQ2xpY2siLCJfbm9PdmVyZmxvdyIsInBhcnNlSW50IiwiX3Bvc2l0aW9uT3V0c2lkZSIsImwiLCJ1IiwiYyIsInAiLCJtIiwidiIsImciLCJfaW5mb0hlaWdodCIsIl9wYWRkaW5nIiwiX2JhY2tncm91bmREaW1lbnNpb25zIiwiYm90dG9tIiwiZ2V0WFlQIiwicmVtb3ZlQXR0ciIsImZpbmQiLCJnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwIiwiZ2V0TG9hZGluZ0NvdW50IiwiaGFuZGxlVHJhY2tpbmciLCJzZXRYWSIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVQb3NpdGlvbnMiLCJfdHJhY2tpbmdfdGltZXIiLCJjbGVhclRyYWNraW5nVGltZXIiLCJzdGFydFRyYWNraW5nIiwiX2hhbmRsZVRyYWNraW5nIiwic3RvcFRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJpc1RyYWNraW5nIiwiY2xlYXJUcmFja2luZyIsImdyZXAiLCJfeHkiLCJzZXRYWVAiLCJfeHlwIiwiVmlldyIsIm9iamVjdCIsImdyb3VwIiwiZXZhbCIsInN1cHBvcnRlZCIsInVwZGF0ZURpbWVuc2lvbnMiLCJfZGltZW5zaW9ucyIsIl9GcmVzY28iLCJfZGlzYWJsZWQiLCJfZmFsbGJhY2siLCJzdGFydERlbGVnYXRpbmciLCJfZGVsZWdhdGVIYW5kbGVyIiwiZGVsZWdhdGUiLCJfc2V0Q2xpY2tYWUhhbmRsZXIiLCJzZXRDbGlja1hZIiwic3RvcERlbGVnYXRpbmciLCJzaG93RmFsbGJhY2siLCJvYmplY3RfdHlwZSIsIl9kZ28iLCJncm91cE9wdGlvbnMiLCJlbGVtZW50cyIsImZpbHRlciIsImdyb3VwRXh0ZW5kIiwiZmlyc3RVSSIsInBvc2l0aW9uSW5BUEciLCJocmVmIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImpRdWVyeSIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImV2ZW50IiwiZGV2ZWxvcE1vYmlsZU1lbnUiLCJtZW51SWNvbmVzRnVuY3Rpb25zIiwiaGVhZGVyT3V0ZXJIZWlnaHQiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsIm9mZmNhbnZhc19pZCIsImRpdlRvT3BlbiIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJwcmV2IiwidG9vbHRpcCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhlYWRlcnMiLCJhY2NlcHQiLCJnbGlnaHRib3giLCJlbGVtIiwiY2Fyb3VzZWwiLCJtYWluRnVuY3Rpb25zIiwiY3JlYXRlQ2Fyb3VzZWwiLCJjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwiLCJjYXJvdXNlbEVsZW1lbnQiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNsaWNrIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwicmVwbGFjZUNhcm91c2VsQXJyb3ciLCJpc0NhcnRJdGVtc0Nhcm91c2VsIiwibW9iaWxlRmlyc3QiLCJyZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQiLCJ1bnNsaWNrZWQiLCJjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwiLCJvcHRzIiwicm93cyIsInNsaWRlc1BlclJvdyIsImFkYXB0aXZlSGVpZ2h0IiwidmlzaWJsZVNsaWRlckRpdiIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW1nU2VsZWN0b3IiLCJpbWdTbGlkZXJIZWlnaHQiLCJhcnJvd1RvcFZhbHVlIiwibm90IiwiYm9keUNvbnRhaW5lciIsImNhcnQiLCJuZXdRdHkiLCJ2YWwiLCJpbnB1dFF0eU5hbWUiLCJjb3Vwb24iLCJib251c1BvaW50cyIsInNhdmVCdXR0b24iLCJjYW5jZWxCdG4iLCJjaGVja291dCIsImFkZHJlc3NUeXBlIiwiZ2V0Q2xhc3NMaXN0IiwibWFuYWdlQWRkcmVzc1R5cGUiLCJjaG9vc2VBZGRyZXNzIiwic2hvd0FkZEZvcm0iLCJmaWVsZCIsImZpZWxkTmFtZSIsInRvU2F2ZSIsInRvUmVwbGFjZSIsImNoZWNrb3V0U2F2ZUFkZHJlc3MiLCJmaWxsQWxsQWRkcmVzc2VzIiwic3VibWl0IiwiaGlkZUNoYW5nZUFkZHJlc3MiLCJoaWRlU2F2ZUFkZHJlc3NGb3JtIiwiY2FuY2VsQ2hhbmdlQWRkcmVzcyIsImZpZWxkU2VsZWN0b3IiLCJmb3JtRmllbGQiLCJjaG9zZW5BZGRyZXNzVGV4dCIsImNob3NlblZhbHVlIiwidGV4dCIsInN1YnN0cmluZyIsInRyaW0iLCJnZXREYXRhRmllbGROYW1lIiwicHJvcCIsImZvcm0iLCJmaWxsT3RoZXJBZGRyZXNzIiwiYWpheCIsInNlcmlhbGl6ZSIsImRhdGFTdWNjZXNzRGl2Iiwibm9BZGRyZXNzIiwiZmlsbERhdGFBZnRlclNhdmUiLCJnZXRPdGhlckFkZHJlc3NUeXBlIiwic2hvd01haW5Gb3JtIiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0IiwiZmllbGRFcnJvciIsImFmdGVyIiwiZmlsbEFkZHJlc3MiLCJmaWVsZElkIiwia2VlcENhbWVsRmllbGQiLCJkYXRhVG9GaWxsIiwicmVnZXgiLCJpbmNsdWRlcyIsIm90aGVyQWRkcmVzc1R5cGUiLCJmaWxsT3RoZXJGb3JtIiwib3RoZXJGaWVsZElkIiwiaWRUb0ZpbGwiLCJuZXdWYWx1ZSIsImZvcm1GaWVsZE5hbWUiLCJmaWVsZFRvUmVwbGFjZSIsIm9sZERhdGEiLCJjbGFzc05hbWUiLCJmaWVsZE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInRleHRUb1JlcGxhY2UiLCJzZWxlY3RvclR5cGUiLCJtYXRjaGVzIiwiY29udGFjdFBhZ2UiLCJtb2RhbCIsInN0YXR1cyIsImVycm9yTGlzdCIsInRvQXJyYXkiLCJvdXRlclRleHQiLCJsb2dpblBhZ2UiLCJtb2RhbElkIiwiZm9ybUVsZW1lbnQiLCJ2ZXJpZnlBY2NvdW50T2JqZWN0IiwibG9hZEFqYXhQYXNzd29yZFJlc2V0IiwibW9kYWxCb2R5IiwicmVnaXN0ZXJGb3JtIiwiaW5wdXRSZWdpc3RlckZvcm0iLCJpbnZhbGlkU3BhbiIsInByaWNlQ29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlIiwicHJpY2VNaW5TZWxlY3RvciIsInByaWNlTWF4U2VsZWN0b3IiLCJwcm9kdWN0IiwiYnVuZGxlSXRlbSIsInZhcmlhbnRMaXN0Q29udGFpbmVyIiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwiU3lsaXVzQWRkVG9DYXJ0IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsImNsb25lTm9kZSIsInJlcXVlc3QiLCJyZXNwb25zZURhdGEiLCJsYXN0IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbCIsInByb2R1Y3RfaWQiLCJ0b1N0cmluZyIsImNhcnRXaWRnZXRDb250YWluZXIiLCJhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIiwiZG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMiLCJ1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIiwidXBkYXRlQ2FydFdpZGdldCIsImNhcnRDb3VudCIsImFkZFRvQ2FydEZ1bmN0aW9ucyIsImFkZFRvQ2FydCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJTeWxpdXNMb2FkYWJsZUZvcm0iLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsInJlZGlyZWN0VXJsIiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJjb250YWlucyIsIlN5bGl1c1VwZGF0ZVF1YW50aXR5IiwibmV3UXVhbnRpdHkiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtCQUFqTixFQUEy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ZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG4vLyBHRU5FUkFMIEZVTkNUSU9OU1xuaW1wb3J0IHsgY2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wIH0gZnJvbSAnLi9qcy9jYXJvdXNlbC5qcyc7XG5pbXBvcnQgY2hlY2tvdXQgZnJvbSAnLi9qcy9jaGVja291dC1ub2JsZXNzLmpzJztcbmltcG9ydCB7cHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnV9IGZyb20gJy4vanMvcHJvZHVjdC1ub2JsZXNzJztcbmltcG9ydCBjYXJ0IGZyb20gJy4vanMvY2FydC1ub2JsZXNzLmpzJztcbmltcG9ydCBzaGFyZVByb2R1Y3QgZnJvbSAnLi9qcy9zaGFyZS1wcm9kdWN0LmpzJztcbmltcG9ydCBsb2dpblBhZ2UgZnJvbSAnLi9qcy9sb2dpbi1ub2JsZXNzLmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2pzL2NvbnRhY3Qtbm9ibGVzcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gTUVOVSBGVU5DVElPTlNcbi8vIE9SREVSUyBHUklEIEZVTkNUSU9OU1xuXG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VJbml0KCkge1xuICBqUXVlcnkoJyNtYWluTmF2YmFyJykuY29sbGFwc2Uoe1xuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1lZ2FtZW51IGZ1bmN0aW9uc1xuICogLmhhcy1tZWdhbWVudSB0byB1c2UgZHJvcGRvd24gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIG1lZ2FtZW51RnVuY3Rpb25zKCkge1xuICAvLyBCdXR0b24gaG92ZXIgc2ltdWxhdGVzIGNsaWNrIG9uIGl0XG4gICQoJyNtZW51QnV0dG9uTWFpbiwgI21lZ2FtZW51RHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qJCgnI21haW5Db250ZW50Q29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAzMykge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTsqL1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgaWYgKCQoJyNuYXZiYXJNYWluTW9iaWxlJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNZWdhbWVudSBmdW5jdGlvbnMgOiBtYW5hZ2UgbW9iaWxlIG1lbnVcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG5cbiAgJCgnYS5uYXYtdGF4b24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKycgaW1nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCdkaXYubWVudS1pbWcnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChcIiNuYXZiYXJNYWluTW9iaWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoJy5hY3RpdmUubG9jYWxlLWxpbmssIC5uYXZiYXJUYXhvbnNMaW5rLCAubG9nLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCh0aGlzKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNvcGVuQWNjb3VudE1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKCcubG9nLWxpbmsnKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5zaG93KCk7XG4gIH0pO1xuXG4gICQoJy5kcm9wZG93bi5jYXJ0LWJ0bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51SWNvbmVzRnVuY3Rpb25zKCkge1xuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKSAtICQoJyNjYXJ0V2lkZ2V0VGl0bGUnKS5vdXRlckhlaWdodCgpIC0gMjA7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgIGlmICghJCgnI2hlYWRlckNhcnROZXdJdGVtJykuaGFzQ2xhc3MoJ2Qtbm9uZScpKSB7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpIC0gMjA7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICAgICAgfVxuXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgICAvLyBDYXJ0IEljb25cbiAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KCcuZHJvcGRvd24nKS5oYXNDbGFzcygnY2FydC1idG4nKSkge1xuICAgICAgJCgnI2hlYWRlckNhcnROZXdJdGVtJykuaHRtbCgnJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCcpLmFkZENsYXNzKCdkLWZsZXgnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjY2FydEFjdGlvbnMgLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmNhcnQtZHJvcGRvd24gLmNsb3NlLWNhcnQtd2lkZ2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5kcm9wZG93bi5jYXJ0LWJ0biAuZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyVGF4b25zJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyQWNjb3VudExpbmtzJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlUHJvZHVjdCgpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlUHJvZHVjdCgpO1xuICBwcm9kdWN0KCk7XG4gIGZpbHRlclByb2R1Y3RzKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICBvcmRlcnNHcmlkRnVuY3Rpb25zKCk7XG4gIGxvZ2luUGFnZSgpO1xuICBjYXJ0KCk7XG4gIGNoZWNrb3V0KCk7XG5cbiAgY29udGFjdFBhZ2UoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgLyppZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9Ki9cbiAgLy8gU2hvdyBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51Jykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG4vL2ltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuLy8gaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgeyBTeWxpdXNMb2FkYWJsZUZvcm1zIH0gZnJvbSAnLi9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuaW1wb3J0IHthZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCBhZGRUb0NhcnRGdW5jdGlvbnMgfSBmcm9tICcuL2pzL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIGFkZFRvQ2FydEZ1bmN0aW9ucygpO1xuXG4gIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICAvL1N5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgLy8gY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICAvLyB9XG4gIC8vIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICAvLyBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIC8vIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUk9VU0VMIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBGcmVzY28gZnJvbSAnLi4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG5jb25zdCBjYXJvdXNlbCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcblxuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI3Byb2R1Y3RHYWxsZXJ5JykpO1xuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgbWFpbiBjYXJvdXNlbHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG5cbiAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGlzQ2FydEl0ZW1zQ2Fyb3VzZWwgPSAoY2Fyb3VzZWxFbGVtZW50ID09PSAkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrICYmIGNhcm91c2VsRWxlbWVudFswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGlzQ2FydEl0ZW1zQ2Fyb3VzZWwpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihzbGljayl7XG4gICAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGNhcm91c2VsIHdoZW4gdXNlciBoYXZlIG1vcmUgdGhhbiA0IGFkZHJlc3NlcyBpbiBDaGVja291dFxuICovXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICByb3dzOiAyLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzbGlkZXNQZXJSb3c6IDIsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByb3dzOiAzLFxuICAgICAgICAgIHNsaWRlc1BlclJvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IHZpc2libGVTbGlkZXJEaXYgPSAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdkLW5vbmUnKTtcbiAgaWYodmlzaWJsZVNsaWRlckRpdiAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9IGVsc2UgaWYgKGNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljaygndW5zbGljaycpO1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRzKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJlc2NvLXNsaWRlJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBGcmVzY28uc2hvdyhcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICB7XG4gICAgICAgICAgdGh1bWJuYWlsczogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBOdW1iZXIoaW5kZXggKyAxKVxuICAgICAgKTtcblxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIHZlcnRpY2FsbHlcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NlbGVjdG9yID0gJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCc7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGxldCBhcnJvd1RvcFZhbHVlO1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKGltZ1NlbGVjdG9yLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIGNhcm91c2VsIGFycm93cyBvbmx5IG9uIGNhcnQgaXRlbXMgY2Fyb3VzZWxcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydChlbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgaW1nJywgZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0KTtcbiAgJChlbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG59XG5cbmV4cG9ydCB7Y2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCwgY3JlYXRlR2FsbGVyeURlc2t0b3B9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUlQgUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBjb250YWluZXIgPSAkKCcjY2FydFBhZ2UnKTtcbmNvbnN0IGJvZHlDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IGNhcnQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBXaGVuIHJlbG9hZGluZyBxdWFudGl0aWVzXG4gIC8vIERlc2t0b3BcbiAgJCgnLnJlbG9hZC1xdHknLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1pdGVtLWluZm8nKS5oYXNDbGFzcygnb3V0LW9mLXN0b2NrJykpIHtcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1vYmlsZVxuICAkKCcubW9iaWxlLXF0eScsIGNvbnRhaW5lcikub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKHRoaXMpLmNsb3Nlc3QoJy5jYXJ0LWl0ZW0taW5mbycpLmhhc0NsYXNzKCdvdXQtb2Ytc3RvY2snKSkge1xuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSk7XG4gICAgICBpZiAobmV3UXR5IDw9IHBhcnNlSW50KCQodGhpcykuYXR0cignbWF4JykpKSB7XG4gICAgICAgIGNvbnN0IGlucHV0UXR5TmFtZSA9ICQodGhpcykuZGF0YSgnaW5wdXQtcXR5Jyk7XG4gICAgICAgICQoJ2lucHV0W25hbWU9XCInICsgaW5wdXRRdHlOYW1lICsgJ1wiXScpLnZhbChuZXdRdHkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gUHJldmVudCBjdXN0b21lciB0byBhZGQgbW9yZSB0aGFuIDUgdGltZXMgYSBwcm9kdWN0XG4gICQoJy5xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gSWYgcHJvZHVjdCBpcyBvdXQgb2Ygc3RvY2ssIG5vdGhpbmcgaGFwcGVuc1xuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1pdGVtLWluZm8nKS5oYXNDbGFzcygnb3V0LW9mLXN0b2NrJykpIHtcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGlmIChwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA+PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21heCcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGNvdXBvbiBjb2RlXG4gICQoJy5jb3Vwb24tY29kZS1idG4nLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGNvdXBvbiBjb2RlXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGNvdXBvbiA9ICQoJy5jb3Vwb24tY29kZScpLnZhbCgpO1xuICAgICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICAgIH1cblxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBjb3Vwb24gY29kZSBpbnB1dCBpcyBmaWxsZWQsIGhpZGUgZXJyb3IgY29udGFpbmVyXG4gIGJvZHlDb250YWluZXIub24oXCJrZXlkb3duXCIsIFwiLmNvdXBvbi1jb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIGlmKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJywgY29udGFpbmVyKS5odG1sKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5jb3Vwb24taW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5jb3Vwb24tY29kZScpLnZhbCgkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKCkpO1xuICB9XG5cbiAgLy8gQXBwbHkgYm9udXMgcG9pbnRzXG4gICQoJy5ib251cy1wb2ludHMtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBib251c1BvaW50cyA9ICQoJy5ib251cy1wb2ludHMnKS52YWwoKTtcbiAgICAgIGlmIChib251c1BvaW50cyA9PT0gJycpIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbChib251c1BvaW50cyk7XG4gICAgICB9XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcuZGVsZXRlLWJvbnVzLXBvaW50cycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYm9udXMgcG9pbnRzXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGJvbnVzIHBvaW50cyBpbnB1dCBpcyBmaWxsZWQsIGhpZGUgZXJyb3IgY29udGFpbmVyXG4gIGJvZHlDb250YWluZXIub24oXCJrZXlkb3duXCIsIFwiLmJvbnVzLXBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJywgY29udGFpbmVyKS5odG1sKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5ib251cy1wb2ludHMtaW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmJvbnVzLXBvaW50cycpLnZhbCgkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoKSk7XG4gIH1cblxuICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBidXR0b24gbGlua2VkIHRvIGNoZWNrb3V0IHBhZ2VcbiAgJCgnYS5idG4tdG8tY2hlY2tvdXQnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcnQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDSEVDS09VVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7IGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuXG4vLyBNYWluIGZ1bmN0aW9uIHVzZWQgaW4gaW5pdFxuY29uc3Qgc2F2ZUJ1dHRvbiA9ICQoJyNjaGVja291dFBhZ2UgLnNhdmUtaW4tYWNjb3VudCcpO1xuY29uc3QgY2FuY2VsQnRuID0gJCgnI2NoZWNrb3V0UGFnZSAuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJyk7XG5cbmNvbnN0IGNoZWNrb3V0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gJCgnI2NoZWNrb3V0UGFnZScpO1xuICAvLyBXaGVuIHRoZSB1c2VyIHdhbnRzIHRvIGNoYW5nZSBoaXMgYWRkcmVzc1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY2xpY2tlZCcpICYmICEkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG5cbiAgICAgIGNhbmNlbEJ0bi5zaG93KCk7XG4gICAgICBjYW5jZWxCdG4ucHJldigpLmhpZGUoKTtcblxuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdjaGFuZ2UnLCBjb250YWluZXIpO1xuICAgICAgY3JlYXRlQWRkcmVzc0Nhcm91c2VsKCQoJyNjYXJvdXNlbEFkZHJlc3NMaXN0JykpO1xuICAgICAgLy8gQ3JlYXRlIGV2ZW50IG9uIGFkZHJlc3MgaXRlbSBhZnRlciBjYXJvdXNlbCBpcyBvcGVuXG4gICAgICAkKCcuY2hvb3NlLWFkZHJlc3MgLmNob29zZS1hZGRyZXNzLWl0ZW0gYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjaG9vc2VBZGRyZXNzKCQodGhpcyksIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICAgIC8vIFdoZW4gdXNlciB3YW50cyB0byBhZGQgYSBuZXcgYWRkcmVzcyB0byBoaXMgYWNjb3VudFxuICAkKCdhLmNoZWNrb3V0LWFkZC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KCQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MuY2xpY2tlZCcsIGNvbnRhaW5lcilbMF0pWzFdO1xuICAgIHNob3dBZGRGb3JtKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnYWRkJywgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIHNhdmUgYSBuZXcgYWRkcmVzc1xuICBzYXZlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFkZHJlc3NUeXBlID0gJ3NoaXBwaW5nJztcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpKSB7XG4gICAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVszXTtcbiAgICAgICQoJyNjaGVja291dFBhZ2UgLmRhdGEtJyArIGFkZHJlc3NUeXBlKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZCArICddJztcbiAgICAgICAgY29uc3QgdG9TYXZlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZE5hbWU7XG4gICAgICAgIGNvbnN0IHRvUmVwbGFjZSA9ICcuY2hhbmdlLScrIGFkZHJlc3NUeXBlICsnLWFkZHJlc3MgJyArIGZpZWxkTmFtZTtcbiAgICAgICAgJCh0b1JlcGxhY2UpLnZhbCgkKHRvU2F2ZSkudmFsKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrb3V0U2F2ZUFkZHJlc3ModGhpcywgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBjbGlja3Mgb24gYWRkcmVzcyBwYWdlIG5leHQgYnV0dG9uXG4gICQoJy5tYWluLWFkZHJlc3MtZm9ybSBidXR0b24uYnRuLXByaW1hcnknLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRDbGFzcygnbG9hZGluZycpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIC8vIFdoZW4gdXNlciBjYW5jZWxzIHRoZSBhZGRyZXNzIGNoYW5nZXNcbiAgJCgnYS5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgY2FuY2VsQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBhZGRcbiAgJCgnYS5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG4vLyBXaGVuIHVzZXIgY2hvc2UgYW4gYWRkcmVzcyBpcyB0aGUgYWRkcmVzc2VzIGxpc3RcbmZ1bmN0aW9uIGNob29zZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuZGF0YS1hZGRyZXNzJywgZWxlbWVudCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgY29uc3QgZmllbGRTZWxlY3RvciA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGRTZWxlY3RvcjtcbiAgICBjb25zdCBjaG9zZW5BZGRyZXNzVGV4dCA9ICcuZGF0YS0nKyBhZGRyZXNzVHlwZSArJy4nICsgZmllbGROYW1lO1xuXG4gICAgbGV0IGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgJChjaG9zZW5BZGRyZXNzVGV4dCkudGV4dChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBjaG9zZW5WYWx1ZSA9ICQodGhpcykudGV4dCgpLnN1YnN0cmluZygwLCAyKTtcbiAgICB9XG4gICAgJChmb3JtRmllbGQpLnZhbChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICAgIGlmICgkKHRoaXMpLnRleHQoKS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS5jbG9zZXN0KCdhZGRyZXNzJykuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBjaG9zZW5WYWx1ZSk7XG4gIH0pO1xuICAkKCcjc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbn1cblxuLyogU2F2ZSBhZGRyZXNzIGluIHVzZXIgYWNjb3VudCA6IFJldHVybnMgZXJyb3JzIGluIGZvcm0gaWYgbm90IHZhbGlkICovXG5mdW5jdGlvbiBjaGVja291dFNhdmVBZGRyZXNzKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgY29uc3QgZm9ybSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnZm9ybScpO1xuICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc190eXBlXCJdJywgZm9ybSkudmFsKGFkZHJlc3NUeXBlKTtcbiAgZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc3QgZGF0YVN1Y2Nlc3NEaXYgPSAkKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IG5vQWRkcmVzcyA9IHNhdmVCdXR0b24uaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpO1xuICAgICAgaWYoZGF0YVN1Y2Nlc3NEaXYuaGFzQ2xhc3MoJ3NhdmUtYWRkcmVzcy1zdWNjZXNzJykpIHtcbiAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcblxuICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKHRoaXMsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICAvLyBJZiBVc2VyIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgICAgICAgICBpZiAobm9BZGRyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICcuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKCcuYWRkcmVzcy1ib29rJywgY29udGFpbmVyKS5odG1sKCQoJy5hZGRyZXNzLWJvb2snLCBkYXRhU3VjY2Vzc0RpdikuaHRtbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAkKCcubm8tYWRkcmVzc2VzLXRleHQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICBzaG93TWFpbkZvcm0oY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICQodGhpcykuY2xvc2VzdCgnbGFiZWwnKS5hdHRyKCdmb3InKTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2lkPVwiJysgZmllbGROYW1lICsnXCJdJywgY29udGFpbmVyKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1lcnJvci1tZXNzYWdlIGQtYmxvY2tcIj4nICsgZmllbGRFcnJvciArICc8L3NwYW4+PC9zcGFuPicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KVxufVxuXG4vKiBGaWxsIGFkZHJlc3MgZm9ybSBmaWVsZHMgdG8gYXZvaWQgZXJyb3JzICovXG5mdW5jdGlvbiBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGtlZXBDYW1lbEZpZWxkID0gWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnY291bnRyeUNvZGUnXTtcbiAgY29uc3QgZGF0YVRvRmlsbCA9ICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5kYXRhKCk7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoIWtlZXBDYW1lbEZpZWxkLmluY2x1ZGVzKGZpZWxkTmFtZSkpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICAkKHRoaXMpLnZhbChkYXRhVG9GaWxsW2ZpZWxkTmFtZV0pO1xuICB9KTtcbiAgJCgnI2luQWNjb3VudF9zYXZlX2RpZmZlcmVudEJpbGxpbmdBZGRyZXNzJywgY29udGFpbmVyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG59XG5cbi8qIEZpbGwgYWRkcmVzc2VzIHdoZW4gdXNlciBjbGlja3Mgb24gbmV4dCBidXR0b24gKi9cbmZ1bmN0aW9uIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKSB7XG4gIFsnc2hpcHBpbmcnLCAnYmlsbGluZyddLmZvckVhY2goKGFkZHJlc3NUeXBlKSA9PiB7XG4gICAgY29uc3QgZmllbGRJZCA9ICdzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc18nICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzcyc7XG4gICAgZmlsbEFkZHJlc3MoZmllbGRJZCwgYWRkcmVzc1R5cGUsICcubWFpbi1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpXG4gIH0pXG59XG5cbi8qIEZpbGwgb3RoZXIgYWRkcmVzcyB0eXBlIGZvcm0gd2hlbiBzYXZpbmcgbmV3IGFkZHJlc3MgKi9cbmZ1bmN0aW9uIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBvdGhlckFkZHJlc3NUeXBlID0gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSk7XG4gIGxldCBmaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBvdGhlckFkZHJlc3NUeXBlO1xuICBpZiAoc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfVxufVxuXG4vLyBGaWxsIG90aGVyIG5ldyBhZGRyZXNzIGZvcm0gT05MWSBJRiB1c2VyIGRvbid0IGhhdmUgYWRkcmVzc2VzIHlldFxuZnVuY3Rpb24gZmlsbE90aGVyRm9ybShhZGRyZXNzVHlwZSwgb3RoZXJBZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIGFkZHJlc3NUeXBlO1xuICBjb25zdCBvdGhlckZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoZmllbGROYW1lICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgY29uc3QgaWRUb0ZpbGwgPSAnIycgKyBvdGhlckZpZWxkSWQgKyAnXycgKyBmaWVsZE5hbWU7XG4gICAgJChpZFRvRmlsbCkudmFsKCQodGhpcykudmFsKCkpO1xuICB9KTtcbn1cblxuLy8gRmlsbCBmb3JtIGFuZCBkaXYgZGF0YSB3aGVuIHNhdmUgbmV3IGFkZHJlc3NcbmZ1bmN0aW9uIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGNvbnRhaW5lcikge1xuICAvLyBHZXQgdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICBjb25zdCBuZXdWYWx1ZSA9ICQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBjb250YWluZXIpLmh0bWwoKTtcblxuICAvLyBDcmVhdGUgbWFpbiBmb3JtIGZpZWxkIHNlbGVjdG9yXG4gIGNvbnN0IGZvcm1GaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddJztcbiAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgLy8gUmVwbGFjZSBmaWVsZCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChmaWVsZFRvUmVwbGFjZSkudmFsKG5ld1ZhbHVlKTtcblxuICAvLyBSZXBsYWNlIHRleHQgd2l0aCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gICQoZWxlbWVudCkudGV4dChuZXdWYWx1ZSk7XG4gIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAkKGVsZW1lbnQpLnRleHQoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLmNvdW50cnlOYW1lJywgY29udGFpbmVyKS5odG1sKCkpO1xuICB9XG5cbiAgLy8gU2hvdyBvciBoaWRlIHN0cmVldDIgY29udGFpbmVyIGFjY29yZGluZyB0byB2YWx1ZVxuICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICBpZiAoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbGwgYWRkcmVzcyBkaXYgZGF0YVxuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSkuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBuZXdWYWx1ZSk7XG59XG5cbi8qIFNob3cgTWFpbiBmb3JtIHdoZW4gdXNlciBoYXZlIG5vIGFkZHJlc3NlcyAqL1xuZnVuY3Rpb24gc2hvd01haW5Gb3JtKGNvbnRhaW5lcikge1xuICAvLyBIaWRlIGRpdiBtZW50aW9uaW5nIHRoYXQgdXNlIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgJCgnLm5vLWFkZHJlc3MteWV0JywgY29udGFpbmVyKS5yZW1vdmUoKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybVxuICAkKCcuYWRkLXNoaXBwaW5nLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIC8vIEhpZGUgYWRkIG5ldyBhZGRyZXNzIGZvcm0gdGl0bGVcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAudXNlJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAuYWRkJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gIC8vIFNob3cgbmF2aWdhdGlvbiBidXR0b25zIGZyb20gbWFpbiBmb3JtXG4gICQoJy5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5uZXh0KCdhLmJ0bicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn1cblxuLyogSGlkZSBhZGRyZXNzIG1vZGlmaWNhdGlvbiBjb250YWluZXIgKi9cbmZ1bmN0aW9uIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICBjYW5jZWxCdG4uaGlkZSgpO1xuICBjYW5jZWxCdG4ucHJldigpLnNob3coKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKVswXS5zY3JvbGxUb3AgPSAwO1xufVxuXG4vKiBSZW1vdmUgZXJyb3IgaW5kaWNhdG9ycyB3aGVuIHNhdmUgYWRkcmVzcyBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuZnVuY3Rpb24gaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpIHtcbiAgLy8gVXNlIGFkZHJlc3NUeXBlIGNob3NlbiB3aGVuIHNhdmUgZm9ybSBpcyBzaG93blxuICBsZXQgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3Qoc2F2ZUJ1dHRvblswXSlbM107XG4gIGlmIChhZGRyZXNzVHlwZSA9PT0gJ25vLWFkZHJlc3NlcycpIHtcbiAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVs0XTtcbiAgfVxuICAkKCcuY2hhbmdlLScgKyBhZGRyZXNzVHlwZSArICctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoYW5nZS0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dCwgLnNhdmUtYWRkcmVzcy1mb3JtIHNlbGVjdCcsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5pbnZhbGlkLWZlZWRiYWNrJywgY29udGFpbmVyKS5yZW1vdmUoKTtcbn1cblxuLyogUmVwbGFjZSBhbGwgZm9ybSBhbmQgZGlzcGxheWVkIGFkZHJlc3MgZGF0YSB3aGVuIGNhbmNlbCBtb2RpZmljYXRpb25zICovXG5mdW5jdGlvbiBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvbGREYXRhID0gJCh0aGlzKS5kYXRhKCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSAodGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKSlbMV07XG4gICAgY29uc3QgZmllbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZERhdGEpO1xuXG4gICAgZmllbGROYW1lcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgZmllbGROYW1lID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnY291bnRyeU5hbWUnKSB7XG4gICAgICAgIGZpZWxkTmFtZSA9ICdjb3VudHJ5Q29kZSdcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRUb1JlcGxhY2UgPSAnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy4nICsgZmllbGROYW1lO1xuICAgICAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgICAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gICAgICAvLyBTZXQgZm9ybSB3aXRoIG9sZCBkYXRhXG4gICAgICAkKGZpZWxkVG9SZXBsYWNlLCBjb250YWluZXIpLnZhbChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIGlmIChlbGVtZW50ICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICAgIC8vIFNldCBjaG9zZW4gQWRkcmVzcyB3aXRoIG9sZCBkYXRhXG4gICAgICAgICQodGV4dFRvUmVwbGFjZSkudGV4dChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIFNob3cgYWRkIGFkZHJlc3MgZm9ybVxuZnVuY3Rpb24gc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJywgY29udGFpbmVyKS52YWwoJycpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG5cbiAgLy8gSGlkZSBhbGwgc2F2ZSBhZGRyZXNzIGZvcm1zIGJlZm9yZSBzaG93aW5nIHRoZSBjaG9zZW4gb25lXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmFkZC0nICsgYWRkcmVzc1R5cGUgKyAnLWFkZHJlc3MnLCBjb250YWluZXIpLnNob3coKTtcbn1cblxuLyogTWFuYWdlIHdoYXQgdHlwZSBvZiBhZGRyZXNzIHdpbGwgYmUgcmVwbGFjZSBhbmQvb3Igc2F2ZWQgKi9cbmZ1bmN0aW9uIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCBzZWxlY3RvclR5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gIC8vIEFsc28gTWFuYWdlIFNhdmVCdXR0b24gY2xhc3NcbiAgc2F2ZUJ1dHRvbi5hZGRDbGFzcyhhZGRyZXNzVHlwZSk7XG4gIHNhdmVCdXR0b24ucmVtb3ZlQ2xhc3MoZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT01NT04gRlVOQ1RJT05TICovXG4vKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEdldCBjbGFzcyBsaXN0IGZyb20gZ2l2ZW4gZWxlbWVudFxuZnVuY3Rpb24gZ2V0Q2xhc3NMaXN0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG59XG5cbi8vIEdldCBmaWVsZCBuYW1lIHRvIGZpbGwgZGF0YSBpbmZvIGluIC5jYW5jZWwtaW5mbyBkaXZcbmZ1bmN0aW9uIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSAvW0EtWl0vZ20uZXhlYyhmaWVsZE5hbWUpO1xuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoZmllbGROYW1lLnN1YnN0cigwLCBtYXRjaGVzLmluZGV4KSArICctJyArIGZpZWxkTmFtZS5zdWJzdHIobWF0Y2hlcy5pbmRleCwgZmllbGROYW1lLmxlbmd0aCkpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGROYW1lO1xufVxuXG4vLyBHZXQgb3RoZXIgYWRkcmVzcyB0eXBlIGZyb20gYWRkcmVzcyB0eXBlIGdpdmVcbmZ1bmN0aW9uIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpIHtcbiAgcmV0dXJuIChhZGRyZXNzVHlwZSA9PT0gJ3NoaXBwaW5nJykgPyAnYmlsbGluZycgOiAnc2hpcHBpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja291dDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT05UQUNUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgY29udGFjdFBhZ2UgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBBamF4IGNhbGwgd2hlbiBjb250YWN0IGZvcm0gaXMgc3VibWl0dGVkXG4gICQoJyNjb250YWN0UGFnZSBmb3JtIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsIC5tb2RhbC1ib2R5IGRpdicpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAvLyBEZWxldGUgYWxsIGVycm9ycyBvZiBmb3JtIHdoZW4gc3VjY2Vzc1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0nKS52YWwoJycpLnByb3AoIFwiY2hlY2tlZFwiLCBmYWxzZSApO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0sICNjb250YWN0UGFnZSBbZm9yXj1cInN5bGl1c19jb250YWN0X1wiXScpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDYpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgZXJyb3JMaXN0ID0gJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCdzcGFuJykudG9BcnJheSgpO1xuICAgICAgICAgIGVycm9yTGlzdC5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5vdXRlclRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5jbGFzc05hbWUgIT09ICdhY2NlcHRDZ3YnKSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICAgICAgICAgICAgLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPicgKyBlcnJvci5vdXRlclRleHQgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLm5leHQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MTcpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2UgLmNvbnRhY3QtZXJyb3InKS5odG1sKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIC8vIEFkZCBuZXcgZmllbGQgd2hlbiBjaG9zZW4gc3ViamVjdCBpcyBcIm90aGVyXCJcbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIExPR0lOIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBTeWxpdXNMb2FkYWJsZUZvcm0gfSBmcm9tICcuL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbmNvbnN0IGxvZ2luUGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE9wZW4gcmVzZXQgcGFzc3dvcmQgbW9kYWxcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG5cbiAgLy8gT25seSB3aGVuIGNsYXNzIGxvZ2luLWZvcm0gZXhpc3RzIGluIHBhZ2VcbiAgaWYoJCgnLmxvZ2luLWZvcm0nKSkge1xuICAgICQoJy5zdWJtaXQtbG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRWxlbWVudCA9ICQodGhpcykuZGF0YSgnZm9ybScpO1xuICAgICAgJChmb3JtRWxlbWVudCkuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgdmVyaWZ5LWFjY291bnQgZXhpc3RzIGluIHBhZ2VcbiAgY29uc3QgdmVyaWZ5QWNjb3VudE9iamVjdCA9ICQoJy52ZXJpZnktYWNjb3VudCcpO1xuICBpZih2ZXJpZnlBY2NvdW50T2JqZWN0KSB7XG4gICAgdmVyaWZ5QWNjb3VudE9iamVjdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiByZXNldFBhc3N3b3JkU3VibWl0IGJ1dHRvbiBleGlzdHMgaW4gcGFnZSwgQWpheCBjYWxsIHRvIHJlc2V0IHBhc3N3b3JkXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgbG9hZEFqYXhQYXNzd29yZFJlc2V0KCk7XG5cbiAgICAvLyBBY3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRNb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCEkKCcubW9kYWwtY29udGVudCcpLmhhc0NsYXNzKCdpcy1zdWNjZXNzJykpIHtcbiAgICAgICAgLy8gQWpheCBsb2FkXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9ICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG4gICAgICAgIGNvbnN0IHVybCA9ICQodGhpcykuZGF0YSgnYWpheC1wYXNzd29yZC1yZXF1ZXN0LXVybCcpO1xuICAgICAgICAkKCdmb3JtLmxvYWRhYmxlJywgdGhpcykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgbW9kYWxCb2R5Lmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9hZEFqYXhQYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICBTeWxpdXNMb2FkYWJsZUZvcm0oJCgnZm9ybS5sb2FkYWJsZScsIG1vZGFsQm9keSlbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgdmFsaWQgYmVmb3JlIHN1Ym1pdCByZWdpc3RlciBmb3JtXG4gICQoJ2J1dHRvbi5zdWJtaXQtcmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICQoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpKTtcbiAgICBjb25zdCBpbnB1dFJlZ2lzdGVyRm9ybSA9IHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsID0gaW5wdXRSZWdpc3RlckZvcm0udmFsKCk7XG4gICAgY29uc3QgaW52YWxpZFNwYW4gPSBpbnB1dFJlZ2lzdGVyRm9ybS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJyk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBpbnZhbGlkU3Bhbi5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFNwYW4uYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIGlucHV0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGVtYWlsIGZpZWxkIGlzIGZpbGxlZCBhbmQgY3VzdG9tZXIgd2FudHMgdG8gbW9kaWZ5IGl0cyB2YWx1ZVxuICAkKCcucmVnaXN0ZXItZm9ybSBpbnB1dCwgLmhlYWRlci1yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IGVtYWlsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gbG9hZEFqYXhQYXNzd29yZFJlc2V0KCkge1xuICAkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaXMtc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKCcubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9ycyAuZm9ybS1lcnJvci1tZXNzYWdlJykudGV4dCgkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9ycyB1bCBsaScpLnRleHQoKSk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5QYWdlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3IgPSAnI3Byb2R1Y3RzRmlsdGVycyc7XG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlID0gJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnO1xuXG5jb25zdCBwcmljZU1pblNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nO1xuY29uc3QgcHJpY2VNYXhTZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJztcblxuY29uc3QgcHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE1hbmFnZSB2YXJpYW50IGxpc3Qgd2hlbiBjbGlja2luZyBpbiBzaXplIGF2YWlsYWJsZVxuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnVuZGxlSXRlbSA9ICQodGhpcykuZGF0YSgnYnVuZGxlLWl0ZW0nKTtcbiAgICBjb25zdCB2YXJpYW50TGlzdENvbnRhaW5lciA9ICQodGhpcykuY2xvc2VzdCgnZGl2LnZhcmlhbnQtbGlzdCcpO1xuXG4gICAgaWYoYnVuZGxlSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcudmFyaWFudC1uYW1lW2RhdGEtYnVuZGxlLWl0ZW09XCInICsgYnVuZGxlSXRlbSArICdcIl0nKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWUnKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICAkKCcuaW52YWxpZC1mZWVkYmFjaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcblxuICAgIGlmICgkKHRoaXMpLmRhdGEoJ2FsbW9zdC1vdXQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgICAkKHRoaXMpLmFkZENsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gIH0pO1xuXG4gIC8vIFNob3cgb3IgaGlkZSB2YXJpYW50cyBsaXN0IGluIHByb2R1Y3RzIGNhcm91c2VsIGFjY29yZGluZyB0byBzY3JlZW4gc2l6ZVxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgICB9XG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAvLyBXaGVuIGNsaWNraW5nIG9uIGFkZCB0byBjYXJ0IGJ1dHRvbiA9PiBTRUUgc3lsaXVzLWFkZC10by1jYXJ0LmpzXG4gIC8vJCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IC5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgLy99KVxuXG4gICQoJ2lucHV0W2lkXj1cImJpdGJhZ19zeWxpdXNfcHJvZHVjdF9idW5kbGVfcGx1Z2luX2FkZF9wcm9kdWN0X2J1bmRsZV90b19jYXJ0X1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5maW5kKCdzcGFuLmludmFsaWQtZmVlZGJhY2snKS5hZGRDbGFzcygnaW5wdXQtY2hlY2tlZCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICB9KVxufTtcblxuY29uc3QgZmlsdGVyUHJvZHVjdHMgPSBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zKCkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IGNyaXRlcmlhID0gcXVlcnlTdHJpbmcuaW5kZXhPZignY3JpdGVyaWEnKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0Jyk7XG5cbiAgbGV0IHByaWNlU2xpZGVyO1xuICBsZXQgcHJpY2VTbGlkZXJNb2JpbGU7XG5cbiAgaWYgKHByaWNlSW5wdXQubGVuZ3RoID4gMCkge1xuICAgIHByaWNlU2xpZGVyID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvcik7XG4gICAgcHJpY2VTbGlkZXJNb2JpbGUgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKTtcblxuICAgIC8vIFdoZW4gdXNlciBjaGFuZ2VzIHByaWNlIGlucHV0IHZhbHVlXG4gICAgcHJpY2VJbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZihlLndoaWNoICE9PSA4ICYmICFpc05hTihTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSl7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBERVNLVE9QIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnRcbiAgY29uc3Qgc2l6ZUZpbHRlcklucHV0ID0gJCgnI3NpemVGaWx0ZXIgaW5wdXQnKTtcbiAgc2l6ZUZpbHRlcklucHV0LmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuICAgIGlmKHRoaXMuY2hlY2tlZCkge1xuICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnaW5wdXRbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICBzaXplRmlsdGVySW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIC8vIFZhbGlkYXRlIGZpbHRlcnMgb24gZGVza3RvcFxuICAkKCdhLnZhbGlkYXRlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyRm9ybScpLnN1Ym1pdCgpO1xuICB9KTtcblxuICAvKipcbiAgICogTUFOQUdFIE1PQklMRSBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50IG9uIG1vYmlsZVxuICAkKCcjY3JpdGVyaWFTaXplTW9iaWxlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSAkKGUudGFyZ2V0KS5kYXRhKCdpZCcpO1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5yZW1vdmVBdHRyKCdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQuaW5wdXQtc29ydGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyayAuY2hlY2tlZCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJChlLnRhcmdldCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgJChlLnRhcmdldCkubmV4dCgnLmNoZWNrbWFyaycpLmZpbmQoJy5jaGVja2VkJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSk7XG5cbiAgLy8gVmFsaWRhdGUgZmlsdGVyc1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZigkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykudmFsKCkgPT09ICdjcmVhdGVkQXQnKSB7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykucmVtb3ZlKCk7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZy1jcmVhdGVkQXQnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWlubGluZS1ibG9jaycpO1xuICAgIH1cbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gTW9iaWxlIGZpbHRlcnMgYmVoYXZpb3VyXG4gICQoJy5wcm9kdWN0LWZpbHRlcnMuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSkub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdFTkVSQUwgRlVOQ1RJT05TXG4gICAqL1xuICAvLyBIaWRlIHJlaW5pdGlhbGl6YXRpb24gYnV0dG9uIHdoZW4gZmlsdGVycyBoYXZlIG5vIGNyaXRlcmlhXG4gIGlmIChjcml0ZXJpYSAhPT0gLTEpIHtcbiAgICAkKCcucmVpbml0LWZpbHRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICB9XG4gIC8vIEFkZCBhY3Rpb24gdG8gY2xvc2UgaWNvblxuICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5kcm9wZG93bi10b2dnbGUnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkIHRvIGF2b2lkIHNob3dpbmcgZmlsdGVyIG1vYmlsZSBtZW51IG9uIGRlc2t0b3BcbiAqL1xuY29uc3QgcmVzaXplRmlsdGVyTWVudSA9IGZ1bmN0aW9uIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gJCgnI2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlckJhbm5lciA9ICQoJy5oZWFkZXItYmFubmVyJyk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLmhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLm91dGVySGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCA9ICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2ZpbHRlclN1Ym1pdCcpLm91dGVySGVpZ2h0KCkgLSAxMDtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJykuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjZmlsdGVyTGlzdCcpLmNzcygnaGVpZ2h0JywgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByaWNlIHNsaWRlciBvbiB0YXhvbiBwYWdlc1xuICpcbiAqIEBwYXJhbSBwcmljZUlucHV0XG4gKiBAcGFyYW0gY29udGFpbmVyU2VsZWN0b3JcbiAqIEByZXR1cm5zIG5vVWlTbGlkZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgY29uc3QgcHJpY2VDb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgY29uc3QgcHJpY2VSYW5nZSA9ICQoJyNwcmljZVJhbmdlJywgcHJpY2VDb250YWluZXIpWzBdO1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICAvLyBQcmVwYXJlIHNsaWRlciBvcHRpb25zXG4gIGNvbnN0IHRheG9uTWluUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtaW4nKSk7XG4gIGNvbnN0IHRheG9uTWF4UHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtYXgnKSk7XG4gIGNvbnN0IHJhbmdlU2xpZGVyT3B0aW9ucyA9IHtcbiAgICBzdGFydDogW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV0sXG5cbiAgICByYW5nZToge1xuICAgICAgJ21pbic6IFt0YXhvbk1pblByaWNlXSxcbiAgICAgICdtYXgnOiBbdGF4b25NYXhQcmljZV1cbiAgICB9LFxuICAgIHN0ZXA6IDEsXG4gICAgY29ubmVjdDogdHJ1ZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWhhdmlvdXI6ICd0YXAnLFxuICAgIHRvb2x0aXBzOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKHByaWNlUmFuZ2UsIHJhbmdlU2xpZGVyT3B0aW9ucyk7XG4gIHNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIHByaWNlTWluLnZhbChwYXJzZUludChuZXdWYWx1ZVswXSkpO1xuICAgIHByaWNlTWF4LnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICB9KTtcblxuICByZXR1cm4gc2xpZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcblxuICBjb25zdCBuZXdWYWx1ZSA9IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldO1xuICBwcmljZVNsaWRlci5zZXQobmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrIHByaWNlIHZhbHVlcyBiZWZvcmUgc2VuZCBmb3JtXG4gKiBAcGFyYW0gcHJpY2VTbGlkZXJPYmplY3RcbiAqIEBwYXJhbSBwcmljZUNvbnRhaW5lclxuICovXG5mdW5jdGlvbiBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJPYmplY3QsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpLmZpcnN0KCk7XG4gIGxldCBwcmljZU1pblZhbHVlID0gcHJpY2VNaW4udmFsKCk7XG4gIGxldCBwcmljZU1heFZhbHVlID0gcHJpY2VNYXgudmFsKCk7XG4gIGlmIChwcmljZU1pbi52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBpZiAocHJpY2VNaW4udmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgcHJpY2VNaW4udmFsKHByaWNlTWluVmFsdWUpO1xuICBpZiAocHJpY2VNYXgudmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgaWYgKHByaWNlTWF4LnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIHByaWNlTWF4LnZhbChwcmljZU1heFZhbHVlKTtcbiAgcHJpY2VTbGlkZXJPYmplY3Quc2V0KFtwcmljZU1pblZhbHVlLCBwcmljZU1heFZhbHVlXSk7XG59XG5cbmV4cG9ydCB7IHByb2R1Y3QsIGZpbHRlclByb2R1Y3RzLCByZXNpemVGaWx0ZXJNZW51IH07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNIQVJFIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IHNoYXJlUHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlUHJvZHVjdDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucyB9IGZyb20gJy4vc3lsaXVzLWNhcnQtY29tbW9uJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuICBsZXQgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEZvcm0gPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJ2Zvcm0nKTtcblxuICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSAkKCdpbnB1dFtuYW1lXj1cIicgKyAkKGFkZFRvQ2FydEZvcm0pLmRhdGEoJ25hbWVUb0NoZWNrJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgY29uc3QgYnVuZGxlSXRlbXNDb3VudCA9ICQoJ2Rpdi5idW5kbGUtaXRlbScpLmxlbmd0aDtcbiAgICBpZihzZWxlY3RlZFNpemUgPiAwICYmIHNlbGVjdGVkU2l6ZSA8IGJ1bmRsZUl0ZW1zQ291bnQgKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0Om5vdCguaW5wdXQtY2hlY2tlZCknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PT0gMCkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG5cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGFibGUnLCAnbG9hZGluZycpO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG4gICAgICByZXF1ZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gJC5wYXJzZUhUTUwocmVzcG9uc2UuZGF0YSlbMF07XG4gICAgICAgICQoJyNjYXJ0QWN0aW9ucyAuaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAgIGlmICghJCgnI2VtcHR5Q2FydCcpLmhhc0NsYXNzKCdkLW5vbmUnKSkge1xuICAgICAgICAgICQoJyNjYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtZmxleCcpO1xuICAgICAgICAgICQoJyNlbXB0eUNhcnQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUwpLnNjcm9sbFRvcCgwKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJy5jYXJ0LWNvdW50JykuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY291bnQtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTCk7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LW5ldy1pdGVtJylbMF0uaW5uZXJIVE1MKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJy5kcm9wZG93bi5jYXJ0LWJ0biAuZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsJykucmVtb3ZlQ2xhc3MoJ2QtZmxleCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsIHNwYW4nKS5sYXN0KCkuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1zdWJ0b3RhbCcpWzBdLmlubmVySFRNTCk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmFsaWQtZmVlZGJhY2snKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yRWwpIHtcbiAgICAgICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEucHJvZHVjdF9pZCA+IDApIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl1bZGF0YS1wcm9kdWN0LWlkPVwiJysgZXJyb3IucmVzcG9uc2UuZGF0YS5wcm9kdWN0X2lkICsnXCJdJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXVtkYXRhLWJ1bmRsZS1lcnJvcl0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZS5kYXRhKS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzVXBkYXRlUXVhbnRpdHkgZnJvbSAnLi9zeWxpdXMtdXBkYXRlLXF1YW50aXR5JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcblxuY29uc3QgY2FydFdpZGdldENvbnRhaW5lciA9ICQoJyNoZWFkZXJDYXJ0SXRlbXMnKTtcbmNvbnN0IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMgPSBmdW5jdGlvbiBkb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpIHtcbiAgLy8gQWZ0ZXIgRG9tIHJlcGxhY2VtZW50LCBzZXQgYWN0aW9ucyBpbiBjYXJ0IHdpZGdldCBhZ2FpblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbG9hZC1xdHktYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzVXBkYXRlUXVhbnRpdHkoZWwpKTtcblxuICAkKCcuYWpheC1xdHknLCBjYXJ0V2lkZ2V0Q29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJy5yZWxvYWQtcXR5LmFqYXgnKS5hdHRyKCdkYXRhLWpzLXVwZGF0ZS1xdHktdmFsdWUnLCAkKHRoaXMpLnZhbCgpKTtcbiAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICQodGhpcykudmFsKCQodGhpcykuYXR0cignbWF4JykpO1xuICAgIH0gZWxzZSBpZihwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA8IHBhcnNlSW50KCQodGhpcykuYXR0cignbWluJykpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21pbicpKTtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgPSBmdW5jdGlvbiB1cGRhdGVDYXJ0V2lkZ2V0KHJlc3BvbnNlKSB7XG4gIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICQucGFyc2VIVE1MKHJlc3BvbnNlLmRhdGEpWzBdO1xuICBjb25zdCBjYXJ0Q291bnQgPSAkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY291bnQtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTDtcbiAgY2FydFdpZGdldENvbnRhaW5lci5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKS5zY3JvbGxUb3AoMCkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLmNhcnQtY291bnQnKS5odG1sKGNhcnRDb3VudCk7XG4gICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCBzcGFuJykubGFzdCgpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtc3VidG90YWwnKVswXS5pbm5lckhUTUwpO1xuICBpZiAocGFyc2VJbnQoY2FydENvdW50KSA9PT0gMCkge1xuICAgICQoJyNjYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnZC1mbGV4JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJyNlbXB0eUNhcnQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9DYXJ0RnVuY3Rpb25zID0gZnVuY3Rpb24gYWRkVG9DYXJ0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xufVxuXG5leHBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zLCBhZGRUb0NhcnRGdW5jdGlvbnMgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtID0gKGVsKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZWwuYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IFN5bGl1c0xvYWRhYmxlRm9ybXMsIFN5bGl1c0xvYWRhYmxlRm9ybSB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyB9IGZyb20gJy4vc3lsaXVzLWNhcnQtY29tbW9uJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmFkZENsYXNzKCdsb2FkaW5nJykuc2Nyb2xsVG9wKDApO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZWRpcmVjdFVybCAhPT0gdW5kZWZpbmVkICYmICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXByb2R1Y3QtYWpheCcpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMsIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgfSBmcm9tICcuL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbmNvbnN0IFN5bGl1c1VwZGF0ZVF1YW50aXR5ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtdXBkYXRlLXF0eS11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtdXBkYXRlLXF0eS1jc3JmLXRva2VuJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgJCgnI2NhcnRBY3Rpb25zIC5xdWFudGl0eS1lcnJvcicpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJylcbiAgICBjb25zdCBuZXdRdWFudGl0eSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXVwZGF0ZS1xdHktdmFsdWUnKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHt9LHsgZGF0YToge19jc3JmX3Rva2VuOiBjc3JmVG9rZW4sIHF1YW50aXR5OiBuZXdRdWFudGl0eSB9fSApO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5hZGRDbGFzcygnbG9hZGluZycpLnNjcm9sbFRvcCgwKTtcblxuICAgIHJlcXVlc3QudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMocmVzcG9uc2UpO1xuICAgICAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLnF1YW50aXR5LWVycm9yJykuYWRkQ2xhc3MoJ2QtYmxvY2snKS5maW5kKCcuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgoZXJyb3IucmVzcG9uc2UuZGF0YSkudG9TdHJpbmcoKSkuY2xvc2VzdCgnc3BhbicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVXBkYXRlUXVhbnRpdHk7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uYmE5NjljOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYmFjay5jZDExZjBmYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jYXJkLmI3NTcxYjEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuZWVkZTZhYmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY29saXNzaW1vLjBiNzlhNzEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2RlbGl2ZXJ5LXRydWNrLjljM2RmY2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOWEzMTg1OWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lbi4zMDJlZTdiZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjZhYTcwN2Y1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZnIuODQ2ZDdlNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1pdC4zNTU1YTM2Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjJjMmE5Y2MzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuMDQwZjQxYmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS5lNzI2ODk3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9uZXh0LmZiNjQ2MDk1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC45NTI2MjVmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZWxvYWQuM2I3NTBkNDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmV0dXJuLXBvbGljeS42N2Q4YTc1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43ZmRlYzI3MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjY5OWM0MDM5LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=