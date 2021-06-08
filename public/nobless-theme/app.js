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

var _orderNobless = __webpack_require__(/*! ./js/order-nobless */ "./themes/NoblessTheme/assets/js/order-nobless.js");

var _orderNobless2 = _interopRequireDefault(_orderNobless);

var _menuNobless = __webpack_require__(/*! ./js/menu-nobless */ "./themes/NoblessTheme/assets/js/menu-nobless.js");

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Functions called when content is resized */
function resizeContent() {
  (0, _menuNobless.resizeMainContainer)();
  (0, _carousel.carousel)();

  if ((0, _jquery2.default)(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _shareProduct2.default)();
  (0, _menuNobless.resizeMenu)((0, _jquery2.default)('#menuButton').attr('data-trigger'));
  (0, _productNobless.resizeFilterMenu)();
  (0, _jquery2.default)('.header-dropdown').show();

  _fresco2.default.hide();
}
/** Main functions init */


function init() {
  (0, _carousel.carousel)();
  (0, _menuNobless.navbarCollapse)(); // Product functions

  (0, _shareProduct2.default)();
  (0, _productNobless.product)();
  (0, _productNobless.filterProducts)(); // Menu functions

  (0, _menuNobless.megamenu)();
  (0, _menuNobless.menuIcones)(); // Other pages functions

  (0, _orderNobless2.default)();
  (0, _loginNobless2.default)();
  (0, _cartNobless2.default)();
  (0, _checkoutNobless2.default)();
  (0, _contactNobless2.default)();
  (0, _menuNobless.resizeMainContainer)();

  if ((0, _jquery2.default)(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _carousel.replaceCarouselArrow)();
  (0, _carousel.replaceCarouselArrowCart)(); // PREVENT INSIDE CLICK DROPDOWN

  (0, _jquery2.default)('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  }); // Create tooltip

  (0, _jquery2.default)(function () {
    (0, _jquery2.default)('[data-toggle="tooltip"]').tooltip();
  }); // Show menu after page is loaded

  (0, _jquery2.default)('.mobile-offcanvas').show();
  (0, _jquery2.default)('.header-dropdown').show();
  (0, _jquery2.default)('#productsFiltersMobile .dropdown-menu').show();
}

exports.init = init;
exports.resizeContent = resizeContent;

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
  createProductCarousel($('#carouselSummaryItemsMobile'), true);
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


function createProductCarousel(carouselElement, isCartItemsCarousel = false) {
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
      replaceCarouselArrowCart(carouselElement);
    }
  } else {
    if ($(document).width() < 768 && carouselElement[0].slick && carouselElement[0].slick.unslicked) {
      carouselElement.slick(options);
    }

    if (isCartItemsCarousel) {
      carouselElement.on('setPosition', function (slick) {
        replaceCarouselArrowCart(carouselElement);
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
  if (element === undefined) return;
  const imgSliderHeight = $('.slick-active img', element).outerHeight();
  const arrowTopValue = Math.round(imgSliderHeight - 0.2 * imgSliderHeight);
  element.next().css('top', arrowTopValue + 'px');
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

/***/ "./themes/NoblessTheme/assets/js/menu-nobless.js":
/*!*******************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/menu-nobless.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeMenu = exports.menuIcones = exports.megamenu = exports.navbarCollapse = exports.resizeMainContainer = undefined;

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _functions = __webpack_require__(/*! ../functions */ "./themes/NoblessTheme/assets/functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resize function to keep all the main-content visible
 */
const resizeMainContainer = function resizeFunction() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
};
/**
 * Manage dropdown on mobile size
 */


const navbarCollapse = function navbarCollapseFunctions() {
  const navbarContainer = (0, _jquery2.default)('#mainNavbar');
  navbarContainer.collapse({
    toggle: false
  });
  navbarContainer.on('shown.bs.collapse', function (e) {
    (0, _functions.resizeContent)();
  });
  navbarContainer.on('hidden.bs.collapse', function (e) {
    (0, _functions.resizeContent)();
  });
};
/**
 * Megamenu functions
 * .has-megamenu to use dropdown functions
 */


const megamenu = function megamenuFunctions() {
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
};

const menuIcones = function menuIconesFunctions() {
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
};

const resizeMenu = function resizeMenuFunctions(element) {
  if ((0, _jquery2.default)(document).width() > 1200) {
    closeMobileMenu();
    (0, _jquery2.default)('#headerCartItems').css('height', '');
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
};

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

exports.resizeMainContainer = resizeMainContainer;
exports.navbarCollapse = navbarCollapse;
exports.megamenu = megamenu;
exports.menuIcones = menuIcones;
exports.resizeMenu = resizeMenu;

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/order-nobless.js":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/order-nobless.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ordersGrid = function mainFunctions() {
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
};

exports.default = ordersGrid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NhcnQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9jaGVja291dC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NvbnRhY3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9sb2dpbi1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL21lbnUtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9vcmRlci1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3Byb2R1Y3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zaGFyZS1wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtY2FydC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy11cGRhdGUtcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBcGlMb2dpbiIsImVsIiwiZWxlbWVudCIsInNpZ25JbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0aW9uRmllbGQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImxlbmd0aCIsImdldCIsImVtYWlsIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50VGFyZ2V0Iiwib25SYXRlIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImNsb3Nlc3QiLCJpbWciLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwic2VsZWN0Iiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJkZWZpbmUiLCIkIiwiRnJlc2NvIiwiZXh0ZW5kIiwidmVyc2lvbiIsIlNraW5zIiwiZnJlc2NvIiwiQm91bmRzIiwidmlld3BvcnQiLCJ3aWR0aCIsIkJyb3dzZXIiLCJNb2JpbGVTYWZhcmkiLCJBbmRyb2lkIiwiR2Vja28iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklFIiwiYXR0YWNoRXZlbnQiLCJpbmRleE9mIiwiZiIsIk9wZXJhIiwib3BlcmEiLCJwYXJzZUZsb2F0IiwiV2ViS2l0IiwibWF0Y2giLCJDaHJvbWUiLCJDaHJvbWVNb2JpbGUiLCJJRU1vYmlsZSIsInQiLCJSZWdFeHAiLCJleGVjIiwiX3NsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImJhc2VUb1N0cmluZyIsIl8iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsIlN0cmluZyIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9uIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJFdmVudCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzdXBwb3J0cyIsIm5hdHVyYWxXaWR0aCIsIkltYWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImlzTG9hZGVkIiwib3B0aW9ucyIsIm1ldGhvZCIsInBvbGxGYWxsYmFja0FmdGVyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwicHJveHkiLCJzdWNjZXNzIiwiaW50ZXJ2YWxzIiwiX2lwb3MiLCJfdGltZSIsIl9kZWxheSIsInBvbGwiLCJmYWxsYmFjayIsIl9wb2xsaW5nIiwiX3VzZWRQb2xsRmFsbGJhY2siLCJfZmFsbGJhY2tJbWciLCJuYXR1cmFsSGVpZ2h0Iiwib25lcnJvciIsInNyYyIsImFib3J0IiwiY2xlYXJUaW1lb3V0IiwiX2NhbGxlZFN1Y2Nlc3MiLCJfY2FsbGVkRXJyb3IiLCJfdGltZXJzIiwic2V0IiwiY2xlYXIiLCJjbGVhckFsbCIsIlR5cGUiLCJpc1ZpZGVvIiwiaW1hZ2UiLCJleHRlbnNpb25zIiwiZGV0ZWN0IiwiaW5BcnJheSIsImV4dGVuc2lvbiIsInZpbWVvIiwiaWQiLCJ5b3V0dWJlIiwiVmltZW9UaHVtYm5haWwiLCJsb2FkIiwicHJvdG9jb2wiLCJfeGhyIiwiZ2V0SlNPTiIsInRodW1ibmFpbF91cmwiLCJjYWNoZSIsInB1c2giLCJWaW1lb1JlYWR5IiwiY2FsbGJhY2siLCJkaW1lbnNpb25zIiwiT3B0aW9ucyIsImRlZmF1bHRzIiwiZWZmZWN0cyIsImNvbnRlbnQiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsIm92ZXJsYXkiLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJhdHRyIiwicG9zaXRpb25PdXRzaWRlIiwicHJldmlvdXNJbnNpZGUiLCJuZXh0SW5zaWRlIiwiY2xvc2VJbnNpZGUiLCJncm91cGVkIiwiaW5mb0luc2lkZSIsImluZm9QYWRkZXJJbnNpZGUiLCJwb3NJbnNpZGUiLCJjYXB0aW9uSW5zaWRlIiwicG9zaXRpb25JbnNpZGUiLCJfZ2V0U3Vycm91bmRpbmdQYWdlcyIsInByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcyIsInByZWxvYWRpbmciLCJwcmVsb2FkZWQiLCJsb2FkZWQiLCJwcmVsb2FkUmVhZHkiLCJsb2FkaW5nIiwiX3NwaW5uZXJEZWxheSIsImltYWdlUmVhZHkiLCJfbWFya0FzTG9hZGVkIiwic2V0RGltZW5zaW9ucyIsInByZXBlbmQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ2aW1lb1JlYWR5IiwiX2Fib3J0U3Bpbm5lckRlbGF5IiwiaW5zZXJ0VmlkZW8iLCJwbGF5ZXJJZnJhbWUiLCJwYXJhbSIsIl9kYXRhIiwiX2NvbnRlbnREaW1lbnNpb25zIiwiZnJhbWVib3JkZXIiLCJyYWlzZSIsImxhc3RDaGlsZCIsInN0b3BJbmFjdGl2ZSIsInVwZGF0ZVVJIiwiX3VpIiwiaGlkZUluYWN0aXZlIiwib25TaG93IiwiYWZ0ZXJQb3NpdGlvbiIsInJlbW92ZVZpZGVvIiwicmVtb3ZlVHJhY2tpbmciLCJfdHJhY2siLCJyZW1vdmVkIiwiX2dldEluZm9IZWlnaHQiLCJfd2hpbGVWaXNpYmxlIiwiaXMiLCJoYXNDbGFzcyIsInZpc2liaWxpdHkiLCJ1cGRhdGVGb3JjZWQiLCJmdWxsQ2xpY2siLCJfbm9PdmVyZmxvdyIsInBhcnNlSW50IiwiX3Bvc2l0aW9uT3V0c2lkZSIsImwiLCJ1IiwiYyIsInAiLCJtIiwidiIsImciLCJfaW5mb0hlaWdodCIsIl9wYWRkaW5nIiwiX2JhY2tncm91bmREaW1lbnNpb25zIiwiYm90dG9tIiwiZ2V0WFlQIiwicmVtb3ZlQXR0ciIsImZpbmQiLCJnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwIiwiZ2V0TG9hZGluZ0NvdW50IiwiaGFuZGxlVHJhY2tpbmciLCJzZXRYWSIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVQb3NpdGlvbnMiLCJfdHJhY2tpbmdfdGltZXIiLCJjbGVhclRyYWNraW5nVGltZXIiLCJzdGFydFRyYWNraW5nIiwiX2hhbmRsZVRyYWNraW5nIiwic3RvcFRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJpc1RyYWNraW5nIiwiY2xlYXJUcmFja2luZyIsImdyZXAiLCJfeHkiLCJzZXRYWVAiLCJfeHlwIiwiVmlldyIsIm9iamVjdCIsImdyb3VwIiwiZXZhbCIsInN1cHBvcnRlZCIsInVwZGF0ZURpbWVuc2lvbnMiLCJfZGltZW5zaW9ucyIsIl9GcmVzY28iLCJfZGlzYWJsZWQiLCJfZmFsbGJhY2siLCJzdGFydERlbGVnYXRpbmciLCJfZGVsZWdhdGVIYW5kbGVyIiwiZGVsZWdhdGUiLCJfc2V0Q2xpY2tYWUhhbmRsZXIiLCJzZXRDbGlja1hZIiwic3RvcERlbGVnYXRpbmciLCJzaG93RmFsbGJhY2siLCJvYmplY3RfdHlwZSIsIl9kZ28iLCJncm91cE9wdGlvbnMiLCJlbGVtZW50cyIsImZpbHRlciIsImdyb3VwRXh0ZW5kIiwiZmlyc3RVSSIsInBvc2l0aW9uSW5BUEciLCJocmVmIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ0b29sdGlwIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsImVsZW0iLCJjYXJvdXNlbCIsIm1haW5GdW5jdGlvbnMiLCJjcmVhdGVDYXJvdXNlbCIsImNyZWF0ZVByb2R1Y3RDYXJvdXNlbCIsImNhcm91c2VsRWxlbWVudCIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFwcGVuZEFycm93cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2xpY2siLCJldmVudCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiaXNDYXJ0SXRlbXNDYXJvdXNlbCIsIm1vYmlsZUZpcnN0IiwicmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0IiwidW5zbGlja2VkIiwiY3JlYXRlQWRkcmVzc0Nhcm91c2VsIiwib3B0cyIsInJvd3MiLCJzbGlkZXNQZXJSb3ciLCJhZGFwdGl2ZUhlaWdodCIsInZpc2libGVTbGlkZXJEaXYiLCJjcmVhdGVHYWxsZXJ5RGVza3RvcCIsImltYWdlcyIsImluZGV4IiwiaGVpZ2h0Q29udGVudCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsImltZ1NlbGVjdG9yIiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImJvZHlDb250YWluZXIiLCJjYXJ0IiwibmV3UXR5IiwidmFsIiwiaW5wdXRRdHlOYW1lIiwiY291cG9uIiwiYm9udXNQb2ludHMiLCJzYXZlQnV0dG9uIiwiY2FuY2VsQnRuIiwiY2hlY2tvdXQiLCJhZGRyZXNzVHlwZSIsImdldENsYXNzTGlzdCIsInByZXYiLCJtYW5hZ2VBZGRyZXNzVHlwZSIsImNob29zZUFkZHJlc3MiLCJzaG93QWRkRm9ybSIsImZpZWxkIiwiZmllbGROYW1lIiwidG9TYXZlIiwidG9SZXBsYWNlIiwiY2hlY2tvdXRTYXZlQWRkcmVzcyIsImZpbGxBbGxBZGRyZXNzZXMiLCJzdWJtaXQiLCJoaWRlQ2hhbmdlQWRkcmVzcyIsImhpZGVTYXZlQWRkcmVzc0Zvcm0iLCJjYW5jZWxDaGFuZ2VBZGRyZXNzIiwiZmllbGRTZWxlY3RvciIsImZvcm1GaWVsZCIsImNob3NlbkFkZHJlc3NUZXh0IiwiY2hvc2VuVmFsdWUiLCJ0ZXh0Iiwic3Vic3RyaW5nIiwidHJpbSIsImdldERhdGFGaWVsZE5hbWUiLCJwcm9wIiwiZm9ybSIsImZpbGxPdGhlckFkZHJlc3MiLCJhamF4Iiwic2VyaWFsaXplIiwiZGF0YVN1Y2Nlc3NEaXYiLCJub0FkZHJlc3MiLCJmaWxsRGF0YUFmdGVyU2F2ZSIsImdldE90aGVyQWRkcmVzc1R5cGUiLCJzaG93TWFpbkZvcm0iLCJwYXJzZUhUTUwiLCJyZXNwb25zZVRleHQiLCJmaWVsZEVycm9yIiwiYWZ0ZXIiLCJmaWxsQWRkcmVzcyIsImZpZWxkSWQiLCJrZWVwQ2FtZWxGaWVsZCIsImRhdGFUb0ZpbGwiLCJyZWdleCIsImluY2x1ZGVzIiwib3RoZXJBZGRyZXNzVHlwZSIsImZpbGxPdGhlckZvcm0iLCJvdGhlckZpZWxkSWQiLCJpZFRvRmlsbCIsIm5ld1ZhbHVlIiwiZm9ybUZpZWxkTmFtZSIsImZpZWxkVG9SZXBsYWNlIiwib2xkRGF0YSIsImNsYXNzTmFtZSIsImZpZWxkTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwidGV4dFRvUmVwbGFjZSIsInNlbGVjdG9yVHlwZSIsIm1hdGNoZXMiLCJjb250YWN0UGFnZSIsIm1vZGFsIiwic3RhdHVzIiwiZXJyb3JMaXN0IiwidG9BcnJheSIsIm91dGVyVGV4dCIsImxvZ2luUGFnZSIsIm1vZGFsSWQiLCJmb3JtRWxlbWVudCIsInZlcmlmeUFjY291bnRPYmplY3QiLCJsb2FkQWpheFBhc3N3b3JkUmVzZXQiLCJtb2RhbEJvZHkiLCJyZWdpc3RlckZvcm0iLCJpbnB1dFJlZ2lzdGVyRm9ybSIsImludmFsaWRTcGFuIiwicmVzaXplTWFpbkNvbnRhaW5lciIsInJlc2l6ZUZ1bmN0aW9uIiwiZm9vdGVySGVpZ2h0IiwiY29udGVudEhlaWdodCIsIm5hdmJhckNvbGxhcHNlIiwibmF2YmFyQ29sbGFwc2VGdW5jdGlvbnMiLCJuYXZiYXJDb250YWluZXIiLCJjb2xsYXBzZSIsIm1lZ2FtZW51IiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImRldmVsb3BNb2JpbGVNZW51IiwibWVudUljb25lcyIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJoZWFkZXJPdXRlckhlaWdodCIsInByb2R1Y3RDb250YWluZXJIZWlnaHQiLCJyZXNpemVNZW51IiwicmVzaXplTWVudUZ1bmN0aW9ucyIsImhlYWRlckhlaWdodCIsIm9mZmNhbnZhc19pZCIsImRpdlRvT3BlbiIsIm9yZGVyc0dyaWQiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yIiwicHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSIsInByaWNlTWluU2VsZWN0b3IiLCJwcmljZU1heFNlbGVjdG9yIiwicHJvZHVjdCIsImJ1bmRsZUl0ZW0iLCJ2YXJpYW50TGlzdENvbnRhaW5lciIsImZpbHRlclByb2R1Y3RzIiwiZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucyIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwiY3JpdGVyaWEiLCJwcmljZUlucHV0IiwicHJpY2VTbGlkZXIiLCJwcmljZVNsaWRlck1vYmlsZSIsImNyZWF0ZVByaWNlU2xpZGVyIiwiaXNOYU4iLCJmcm9tQ2hhckNvZGUiLCJzZXRTbGlkZXJOZXdWYWx1ZSIsInNpemVGaWx0ZXJJbnB1dCIsImNoZWNrUHJpY2VWYWx1ZSIsImlucHV0VG9DaGVjayIsInJlc2l6ZUZpbHRlck1lbnUiLCJyZXNpemVGaWx0ZXJNb2JpbGVNZW51IiwiaGVhZGVyQ29udGFpbmVyIiwiaGVhZGVyQmFubmVyIiwiZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCIsImNvbnRhaW5lclNlbGVjdG9yIiwicHJpY2VDb250YWluZXIiLCJwcmljZVJhbmdlIiwicHJpY2VNaW4iLCJwcmljZU1heCIsInRheG9uTWluUHJpY2UiLCJmaXJzdCIsInRheG9uTWF4UHJpY2UiLCJyYW5nZVNsaWRlck9wdGlvbnMiLCJzdGFydCIsInJhbmdlIiwic3RlcCIsImNvbm5lY3QiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJiZWhhdmlvdXIiLCJ0b29sdGlwcyIsInNsaWRlciIsIm5vVWlTbGlkZXIiLCJwcmljZVNsaWRlck9iamVjdCIsInByaWNlTWluVmFsdWUiLCJwcmljZU1heFZhbHVlIiwic2hhcmVQcm9kdWN0IiwialF1ZXJ5Iiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29uc29sZSIsImxvZyIsIm1haWxUbyIsIm1haWx0byIsIlN5bGl1c0FkZFRvQ2FydCIsInZhbGlkYXRpb25FbGVtZW50IiwiYWRkVG9DYXJ0Rm9ybSIsInNlbGVjdGVkU2l6ZSIsImJ1bmRsZUl0ZW1zQ291bnQiLCJjbG9uZU5vZGUiLCJyZXF1ZXN0IiwicmVzcG9uc2VEYXRhIiwibGFzdCIsImVycm9yTWVzc2FnZSIsImVycm9yRWwiLCJwcm9kdWN0X2lkIiwidG9TdHJpbmciLCJjYXJ0V2lkZ2V0Q29udGFpbmVyIiwiYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucyIsImRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIiwidXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyIsInVwZGF0ZUNhcnRXaWRnZXQiLCJjYXJ0Q291bnQiLCJhZGRUb0NhcnRGdW5jdGlvbnMiLCJhZGRUb0NhcnQiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwiU3lsaXVzTG9hZGFibGVGb3JtIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJyZWRpcmVjdFVybCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwiY29udGFpbnMiLCJTeWxpdXNVcGRhdGVRdWFudGl0eSIsIm5ld1F1YW50aXR5IiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBdUJBQSw0QkFBUUMsR0FBUixDQUFZQyxj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RnhZLEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxJQUFoQixDQUFzQjZ6QixRQUF0QixFQUF2RixFQUF5SGx3QixPQUF6SCxDQUFpSSxNQUFqSSxFQUF5SWdQLFdBQXpJLENBQXFKLFFBQXJKO0FBQ0EsOEJBQUUsa0JBQUYsRUFBc0JBLFdBQXRCLENBQWtDLFNBQWxDO0FBQ0Q7QUFDRixLQVREO0FBVUQsR0FsQkQ7QUFtQkQsQ0F4QkQ7O2tCQTBCZW1pQixvQjs7Ozs7Ozs7Ozs7O0FDMUNmO0FBQWUsZ0hBQWlELEU7Ozs7Ozs7Ozs7OztBQ0FoRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG5pbXBvcnQgeyBjYXJvdXNlbCwgcmVwbGFjZUNhcm91c2VsQXJyb3csIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCwgY3JlYXRlR2FsbGVyeURlc2t0b3AgfSBmcm9tICcuL2pzL2Nhcm91c2VsLmpzJztcbmltcG9ydCBjaGVja291dCBmcm9tICcuL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHtwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudX0gZnJvbSAnLi9qcy9wcm9kdWN0LW5vYmxlc3MnO1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9qcy9jYXJ0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHNoYXJlUHJvZHVjdCBmcm9tICcuL2pzL3NoYXJlLXByb2R1Y3QuanMnO1xuaW1wb3J0IGxvZ2luUGFnZSBmcm9tICcuL2pzL2xvZ2luLW5vYmxlc3MuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vanMvY29udGFjdC1ub2JsZXNzJztcbmltcG9ydCBvcmRlcnNHcmlkIGZyb20gJy4vanMvb3JkZXItbm9ibGVzcyc7XG5pbXBvcnQgeyByZXNpemVNYWluQ29udGFpbmVyLCByZXNpemVNZW51LCBuYXZiYXJDb2xsYXBzZSwgbWVnYW1lbnUsIG1lbnVJY29uZXMgfSBmcm9tICcuL2pzL21lbnUtbm9ibGVzcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKiogRnVuY3Rpb25zIGNhbGxlZCB3aGVuIGNvbnRlbnQgaXMgcmVzaXplZCAqL1xuZnVuY3Rpb24gcmVzaXplQ29udGVudCgpIHtcbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBjYXJvdXNlbCgpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgc2hhcmVQcm9kdWN0KCk7XG4gIHJlc2l6ZU1lbnUoJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKSk7XG4gIHJlc2l6ZUZpbHRlck1lbnUoKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuLyoqIE1haW4gZnVuY3Rpb25zIGluaXQgKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlKCk7XG4gIC8vIFByb2R1Y3QgZnVuY3Rpb25zXG4gIHNoYXJlUHJvZHVjdCgpO1xuICBwcm9kdWN0KCk7XG4gIGZpbHRlclByb2R1Y3RzKCk7XG4gIC8vIE1lbnUgZnVuY3Rpb25zXG4gIG1lZ2FtZW51KCk7XG4gIG1lbnVJY29uZXMoKTtcbiAgLy8gT3RoZXIgcGFnZXMgZnVuY3Rpb25zXG4gIG9yZGVyc0dyaWQoKTtcbiAgbG9naW5QYWdlKCk7XG4gIGNhcnQoKTtcbiAgY2hlY2tvdXQoKTtcbiAgY29udGFjdFBhZ2UoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcblxuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTlxuICAkKCcuZHJvcGRvd24tbWVudScpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgLy8gQ3JlYXRlIHRvb2x0aXBcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgfSk7XG4gIC8vIFNob3cgbWVudSBhZnRlciBwYWdlIGlzIGxvYWRlZFxuICAkKCcubW9iaWxlLW9mZmNhbnZhcycpLnNob3coKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLnNob3coKTtcbn1cblxuZXhwb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuLy9pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbi8vIGltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IHsgU3lsaXVzTG9hZGFibGVGb3JtcyB9IGZyb20gJy4vanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcbmltcG9ydCB7YWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgYWRkVG9DYXJ0RnVuY3Rpb25zIH0gZnJvbSAnLi9qcy9zeWxpdXMtY2FydC1jb21tb24nO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICBhZGRUb0NhcnRGdW5jdGlvbnMoKTtcblxuICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgLy9TeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIC8vIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIC8vIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgLy8gfVxuICAvLyBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICAvLyB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJPVVNFTCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgRnJlc2NvIGZyb20gJy4uL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuY29uc3QgY2Fyb3VzZWwgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKSk7XG5cbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNwcm9kdWN0R2FsbGVyeScpKTtcbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpLCB0cnVlKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIG1haW4gY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgc2xpZGVzVG9TaG93OiA0LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuXG4gICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGNhcm91c2Vsc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50LCBpc0NhcnRJdGVtc0Nhcm91c2VsID0gZmFsc2UpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBjYXJvdXNlbEVsZW1lbnRbMF0uc2xpY2sgJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKHNsaWNrKXtcbiAgICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGNhcm91c2VsRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgY2Fyb3VzZWwgd2hlbiB1c2VyIGhhdmUgbW9yZSB0aGFuIDQgYWRkcmVzc2VzIGluIENoZWNrb3V0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNzAwLFxuICAgIHJvd3M6IDIsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHNsaWRlc1BlclJvdzogMixcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHJvd3M6IDMsXG4gICAgICAgICAgc2xpZGVzUGVyUm93OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgdmlzaWJsZVNsaWRlckRpdiA9ICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ2Qtbm9uZScpO1xuICBpZih2aXNpYmxlU2xpZGVyRGl2ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0cyk7XG4gIH0gZWxzZSBpZiAoY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBjYXJvdXNlbCBhcnJvd3MgdmVydGljYWxseVxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3QgaW1nU2VsZWN0b3IgPSAnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJztcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgbGV0IGFycm93VG9wVmFsdWU7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IsIGNhcm91c2VsRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoY2Fyb3VzZWxFbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH0gZWxzZSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJChpbWdTZWxlY3Rvcikub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoJy5zbGlkZXItY29udHJvbHMnKS5ub3QoJy5wcm9kdWN0LWdhbGxlcnknKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIG9ubHkgb24gY2FydCBpdGVtcyBjYXJvdXNlbFxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBjb25zdCBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIGltZycsIGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAtIDAuMiAqIGltZ1NsaWRlckhlaWdodCk7XG4gIGVsZW1lbnQubmV4dCgpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xufVxuXG5leHBvcnQge2Nhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgY29udGFpbmVyID0gJCgnI2NhcnRQYWdlJyk7XG5jb25zdCBib2R5Q29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBjYXJ0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gV2hlbiByZWxvYWRpbmcgcXVhbnRpdGllc1xuICAvLyBEZXNrdG9wXG4gICQoJy5yZWxvYWQtcXR5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1pdGVtLWluZm8nKS5oYXNDbGFzcygnb3V0LW9mLXN0b2NrJykpIHtcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xuICAgICAgaWYgKG5ld1F0eSA8PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgY3VzdG9tZXIgdG8gYWRkIG1vcmUgdGhhbiA1IHRpbWVzIGEgcHJvZHVjdFxuICAkKCcucXR5JywgY29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIElmIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLCBub3RoaW5nIGhhcHBlbnNcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS5hdHRyKCdtYXgnKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICAgIGlmIChjb3Vwb24gPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKGNvdXBvbik7XG4gICAgICB9XG5cbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gY291cG9uIGNvZGUgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IGJvbnVzIHBvaW50c1xuICAkKCcuYm9udXMtcG9pbnRzLWJ0bicsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgY291cG9uIGNvZGVcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgYm9udXNQb2ludHMgPSAkKCcuYm9udXMtcG9pbnRzJykudmFsKCk7XG4gICAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgICAgfVxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmRlbGV0ZS1ib251cy1wb2ludHMnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGJvbnVzIHBvaW50c1xuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBib251cyBwb2ludHMgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5ib251cy1wb2ludHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCcnKTtcbiAgfSk7XG5cbiAgaWYoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCQoJyNiaXRiYWctYm9udXMtcG9pbnRzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5ib251cy1wb2ludHMnKS52YWwoJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCkpO1xuICB9XG5cbiAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYnV0dG9uIGxpbmtlZCB0byBjaGVja291dCBwYWdlXG4gICQoJ2EuYnRuLXRvLWNoZWNrb3V0JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ0hFQ0tPVVQgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgeyBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcblxuLy8gTWFpbiBmdW5jdGlvbiB1c2VkIGluIGluaXRcbmNvbnN0IHNhdmVCdXR0b24gPSAkKCcjY2hlY2tvdXRQYWdlIC5zYXZlLWluLWFjY291bnQnKTtcbmNvbnN0IGNhbmNlbEJ0biA9ICQoJyNjaGVja291dFBhZ2UgLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycpO1xuXG5jb25zdCBjaGVja291dCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjaGVja291dFBhZ2UnKTtcbiAgLy8gV2hlbiB0aGUgdXNlciB3YW50cyB0byBjaGFuZ2UgaGlzIGFkZHJlc3NcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2NsaWNrZWQnKSAmJiAhJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuXG4gICAgICBjYW5jZWxCdG4uc2hvdygpO1xuICAgICAgY2FuY2VsQnRuLnByZXYoKS5oaWRlKCk7XG5cbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0gLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnY2hhbmdlJywgY29udGFpbmVyKTtcbiAgICAgIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCgkKCcjY2Fyb3VzZWxBZGRyZXNzTGlzdCcpKTtcbiAgICAgIC8vIENyZWF0ZSBldmVudCBvbiBhZGRyZXNzIGl0ZW0gYWZ0ZXIgY2Fyb3VzZWwgaXMgb3BlblxuICAgICAgJCgnLmNob29zZS1hZGRyZXNzIC5jaG9vc2UtYWRkcmVzcy1pdGVtIGFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2hvb3NlQWRkcmVzcygkKHRoaXMpLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgd2FudHMgdG8gYWRkIGEgbmV3IGFkZHJlc3MgdG8gaGlzIGFjY291bnRcbiAgJCgnYS5jaGVja291dC1hZGQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCgkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzLmNsaWNrZWQnLCBjb250YWluZXIpWzBdKVsxXTtcbiAgICBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBzYXZlIGEgbmV3IGFkZHJlc3NcbiAgc2F2ZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhZGRyZXNzVHlwZSA9ICdzaGlwcGluZyc7XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgICAgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbM107XG4gICAgICAkKCcjY2hlY2tvdXRQYWdlIC5kYXRhLScgKyBhZGRyZXNzVHlwZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGQgKyAnXSc7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGROYW1lO1xuICAgICAgICBjb25zdCB0b1JlcGxhY2UgPSAnLmNoYW5nZS0nKyBhZGRyZXNzVHlwZSArJy1hZGRyZXNzICcgKyBmaWVsZE5hbWU7XG4gICAgICAgICQodG9SZXBsYWNlKS52YWwoJCh0b1NhdmUpLnZhbCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVja291dFNhdmVBZGRyZXNzKHRoaXMsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIGFkZHJlc3MgcGFnZSBuZXh0IGJ1dHRvblxuICAkKCcubWFpbi1hZGRyZXNzLWZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBmaWxsQWxsQWRkcmVzc2VzKGNvbnRhaW5lcik7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBjaGFuZ2VzXG4gICQoJ2EuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgYWRkXG4gICQoJ2EuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuLy8gV2hlbiB1c2VyIGNob3NlIGFuIGFkZHJlc3MgaXMgdGhlIGFkZHJlc3NlcyBsaXN0XG5mdW5jdGlvbiBjaG9vc2VBZGRyZXNzKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgJCgnLmRhdGEtYWRkcmVzcycsIGVsZW1lbnQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZmllbGROYW1lID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgIGNvbnN0IGZpZWxkU2VsZWN0b3IgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddXCJdJztcbiAgICBjb25zdCBmb3JtRmllbGQgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZpZWxkU2VsZWN0b3I7XG4gICAgY29uc3QgY2hvc2VuQWRkcmVzc1RleHQgPSAnLmRhdGEtJysgYWRkcmVzc1R5cGUgKycuJyArIGZpZWxkTmFtZTtcblxuICAgIGxldCBjaG9zZW5WYWx1ZSA9ICQodGhpcykudGV4dCgpO1xuICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLnRleHQoY2hvc2VuVmFsdWUpO1xuXG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgY2hvc2VuVmFsdWUgPSAkKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwgMik7XG4gICAgfVxuICAgICQoZm9ybUZpZWxkKS52YWwoY2hvc2VuVmFsdWUpO1xuXG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gJ3N0cmVldDInKSB7XG4gICAgICBpZiAoJCh0aGlzKS50ZXh0KCkudHJpbSgpICE9PSAnJykge1xuICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJChjaG9zZW5BZGRyZXNzVGV4dCkuY2xvc2VzdCgnYWRkcmVzcycpLmF0dHIoJ2RhdGEtJyArIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSwgY2hvc2VuVmFsdWUpO1xuICB9KTtcbiAgJCgnI3N5bGl1c19jaGVja291dF9hZGRyZXNzX2RpZmZlcmVudEJpbGxpbmdBZGRyZXNzJywgY29udGFpbmVyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG59XG5cbi8qIFNhdmUgYWRkcmVzcyBpbiB1c2VyIGFjY291bnQgOiBSZXR1cm5zIGVycm9ycyBpbiBmb3JtIGlmIG5vdCB2YWxpZCAqL1xuZnVuY3Rpb24gY2hlY2tvdXRTYXZlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGZvcm0gPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgJCgnaW5wdXRbbmFtZT1cImFkZHJlc3NfdHlwZVwiXScsIGZvcm0pLnZhbChhZGRyZXNzVHlwZSk7XG4gIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICQuYWpheCh7XG4gICAgdHlwZTogXCJQT1NUXCIsXG4gICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGRhdGFTdWNjZXNzRGl2ID0gJChyZXNwb25zZSk7XG4gICAgICBjb25zdCBub0FkZHJlc3MgPSBzYXZlQnV0dG9uLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKTtcbiAgICAgIGlmKGRhdGFTdWNjZXNzRGl2Lmhhc0NsYXNzKCdzYXZlLWFkZHJlc3Mtc3VjY2VzcycpKSB7XG4gICAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuZGF0YS0nICsgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG5cbiAgICAgICAgICBmaWxsRGF0YUFmdGVyU2F2ZSh0aGlzLCBhZGRyZXNzVHlwZSwgZmllbGROYW1lLCBkYXRhU3VjY2Vzc0Rpdik7XG4gICAgICAgICAgLy8gSWYgVXNlciBkb2Vzbid0IGhhdmUgYWRkcmVzc2VzXG4gICAgICAgICAgaWYgKG5vQWRkcmVzcykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoJy5jaG9zZW4tYWRkcmVzcyAuZGF0YS0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICBmaWxsRGF0YUFmdGVyU2F2ZShlbGVtZW50LCBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSwgZmllbGROYW1lLCBkYXRhU3VjY2Vzc0Rpdik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCgnLmFkZHJlc3MtYm9vaycsIGNvbnRhaW5lcikuaHRtbCgkKCcuYWRkcmVzcy1ib29rJywgZGF0YVN1Y2Nlc3NEaXYpLmh0bWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobm9BZGRyZXNzKSB7XG4gICAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgJCgnLm5vLWFkZHJlc3Nlcy10ZXh0JywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgc2hvd01haW5Gb3JtKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9yLW1lc3NhZ2UnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xhYmVsJykuYXR0cignZm9yJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtpZD1cIicrIGZpZWxkTmFtZSArJ1wiXScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj48c3BhbiBjbGFzcz1cImZvcm0tZXJyb3ItbWVzc2FnZSBkLWJsb2NrXCI+JyArIGZpZWxkRXJyb3IgKyAnPC9zcGFuPjwvc3Bhbj4nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcbn1cblxuLyogRmlsbCBhZGRyZXNzIGZvcm0gZmllbGRzIHRvIGF2b2lkIGVycm9ycyAqL1xuZnVuY3Rpb24gZmlsbEFkZHJlc3MoZmllbGRJZCwgYWRkcmVzc1R5cGUsIGZvcm0sIGNvbnRhaW5lcikge1xuICBjb25zdCBrZWVwQ2FtZWxGaWVsZCA9IFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2NvdW50cnlDb2RlJ107XG4gIGNvbnN0IGRhdGFUb0ZpbGwgPSAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mby4nICsgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikuZGF0YSgpO1xuICAkKGZvcm0gKyAnIFtpZF49XCInICsgZmllbGRJZCArICdcIl0nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKFxcdyspXFxdJC9nbTtcbiAgICBsZXQgZmllbGROYW1lID0gcmVnZXguZXhlYygkKHRoaXMpLmF0dHIoJ25hbWUnKSlbMV07XG4gICAgaWYgKCFrZWVwQ2FtZWxGaWVsZC5pbmNsdWRlcyhmaWVsZE5hbWUpKSB7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgJCh0aGlzKS52YWwoZGF0YVRvRmlsbFtmaWVsZE5hbWVdKTtcbiAgfSk7XG4gICQoJyNpbkFjY291bnRfc2F2ZV9kaWZmZXJlbnRCaWxsaW5nQWRkcmVzcycsIGNvbnRhaW5lcikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xufVxuXG4vKiBGaWxsIGFkZHJlc3NlcyB3aGVuIHVzZXIgY2xpY2tzIG9uIG5leHQgYnV0dG9uICovXG5mdW5jdGlvbiBmaWxsQWxsQWRkcmVzc2VzKGNvbnRhaW5lcikge1xuICBbJ3NoaXBwaW5nJywgJ2JpbGxpbmcnXS5mb3JFYWNoKChhZGRyZXNzVHlwZSkgPT4ge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAnc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3MnO1xuICAgIGZpbGxBZGRyZXNzKGZpZWxkSWQsIGFkZHJlc3NUeXBlLCAnLm1haW4tYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKVxuICB9KVxufVxuXG4vKiBGaWxsIG90aGVyIGFkZHJlc3MgdHlwZSBmb3JtIHdoZW4gc2F2aW5nIG5ldyBhZGRyZXNzICovXG5mdW5jdGlvbiBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgY29uc3Qgb3RoZXJBZGRyZXNzVHlwZSA9IGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpO1xuICBsZXQgZmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZTtcbiAgaWYgKHNhdmVCdXR0b24uaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpKSB7XG4gICAgZmlsbE90aGVyRm9ybShhZGRyZXNzVHlwZSwgb3RoZXJBZGRyZXNzVHlwZSwgJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgZmlsbEFkZHJlc3MoZmllbGRJZCwgb3RoZXJBZGRyZXNzVHlwZSwgJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcik7XG4gIH1cbn1cblxuLy8gRmlsbCBvdGhlciBuZXcgYWRkcmVzcyBmb3JtIE9OTFkgSUYgdXNlciBkb24ndCBoYXZlIGFkZHJlc3NlcyB5ZXRcbmZ1bmN0aW9uIGZpbGxPdGhlckZvcm0oYWRkcmVzc1R5cGUsIG90aGVyQWRkcmVzc1R5cGUsIGZvcm0sIGNvbnRhaW5lcikge1xuICBjb25zdCBmaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBhZGRyZXNzVHlwZTtcbiAgY29uc3Qgb3RoZXJGaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBvdGhlckFkZHJlc3NUeXBlO1xuICAkKGZvcm0gKyAnIFtpZF49XCInICsgZmllbGRJZCArICdcIl0nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKFxcdyspXFxdJC9nbTtcbiAgICBsZXQgZmllbGROYW1lID0gcmVnZXguZXhlYygkKHRoaXMpLmF0dHIoJ25hbWUnKSlbMV07XG4gICAgaWYgKGZpZWxkTmFtZSAhPT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGNvbnN0IGlkVG9GaWxsID0gJyMnICsgb3RoZXJGaWVsZElkICsgJ18nICsgZmllbGROYW1lO1xuICAgICQoaWRUb0ZpbGwpLnZhbCgkKHRoaXMpLnZhbCgpKTtcbiAgfSk7XG59XG5cbi8vIEZpbGwgZm9ybSBhbmQgZGl2IGRhdGEgd2hlbiBzYXZlIG5ldyBhZGRyZXNzXG5mdW5jdGlvbiBmaWxsRGF0YUFmdGVyU2F2ZShlbGVtZW50LCBhZGRyZXNzVHlwZSwgZmllbGROYW1lLCBjb250YWluZXIpIHtcbiAgLy8gR2V0IHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgY29uc3QgbmV3VmFsdWUgPSAkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKS5odG1sKCk7XG5cbiAgLy8gQ3JlYXRlIG1haW4gZm9ybSBmaWVsZCBzZWxlY3RvclxuICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXSc7XG4gIGNvbnN0IGZpZWxkVG9SZXBsYWNlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gIC8vIFJlcGxhY2UgZmllbGQgd2l0aCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gICQoZmllbGRUb1JlcGxhY2UpLnZhbChuZXdWYWx1ZSk7XG5cbiAgLy8gUmVwbGFjZSB0ZXh0IHdpdGggdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICAkKGVsZW1lbnQpLnRleHQobmV3VmFsdWUpO1xuICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgJChlbGVtZW50KS50ZXh0KCQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy5jb3VudHJ5TmFtZScsIGNvbnRhaW5lcikuaHRtbCgpKTtcbiAgfVxuXG4gIC8vIFNob3cgb3IgaGlkZSBzdHJlZXQyIGNvbnRhaW5lciBhY2NvcmRpbmcgdG8gdmFsdWVcbiAgaWYgKGZpZWxkTmFtZSA9PT0gJ3N0cmVldDInKSB7XG4gICAgaWYgKCQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBjb250YWluZXIpLmh0bWwoKS50cmltKCkgIT09ICcnKSB7XG4gICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaWxsIGFkZHJlc3MgZGl2IGRhdGFcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jYW5jZWwtaW5mby4nICsgYWRkcmVzc1R5cGUpLmF0dHIoJ2RhdGEtJyArIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSwgbmV3VmFsdWUpO1xufVxuXG4vKiBTaG93IE1haW4gZm9ybSB3aGVuIHVzZXIgaGF2ZSBubyBhZGRyZXNzZXMgKi9cbmZ1bmN0aW9uIHNob3dNYWluRm9ybShjb250YWluZXIpIHtcbiAgLy8gSGlkZSBkaXYgbWVudGlvbmluZyB0aGF0IHVzZSBkb2Vzbid0IGhhdmUgYWRkcmVzc2VzXG4gICQoJy5uby1hZGRyZXNzLXlldCcsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG4gIC8vIEhpZGUgYWRkIG5ldyBhZGRyZXNzIGZvcm1cbiAgJCgnLmFkZC1zaGlwcGluZy1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAvLyBIaWRlIGFkZCBuZXcgYWRkcmVzcyBmb3JtIHRpdGxlXG4gICQoJy5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUgLnVzZScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUgLmFkZCcsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAvLyBTaG93IG5hdmlnYXRpb24gYnV0dG9ucyBmcm9tIG1haW4gZm9ybVxuICAkKCcuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJykubmV4dCgnYS5idG4nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59XG5cbi8qIEhpZGUgYWRkcmVzcyBtb2RpZmljYXRpb24gY29udGFpbmVyICovXG5mdW5jdGlvbiBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpIHtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgY2FuY2VsQnRuLmhpZGUoKTtcbiAgY2FuY2VsQnRuLnByZXYoKS5zaG93KCk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgJCgnI21haW5Db250ZW50Q29udGFpbmVyJylbMF0uc2Nyb2xsVG9wID0gMDtcbn1cblxuLyogUmVtb3ZlIGVycm9yIGluZGljYXRvcnMgd2hlbiBzYXZlIGFkZHJlc3MgZm9ybSBpcyBzdWJtaXR0ZWQgKi9cbmZ1bmN0aW9uIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKSB7XG4gIC8vIFVzZSBhZGRyZXNzVHlwZSBjaG9zZW4gd2hlbiBzYXZlIGZvcm0gaXMgc2hvd25cbiAgbGV0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHNhdmVCdXR0b25bMF0pWzNdO1xuICBpZiAoYWRkcmVzc1R5cGUgPT09ICduby1hZGRyZXNzZXMnKSB7XG4gICAgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3Qoc2F2ZUJ1dHRvblswXSlbNF07XG4gIH1cbiAgJCgnLmNoYW5nZS0nICsgYWRkcmVzc1R5cGUgKyAnLXRpdGxlJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy5jaGFuZ2UtJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBmb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gaW5wdXQsIC5zYXZlLWFkZHJlc3MtZm9ybSBzZWxlY3QnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAuaW52YWxpZC1mZWVkYmFjaycsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG59XG5cbi8qIFJlcGxhY2UgYWxsIGZvcm0gYW5kIGRpc3BsYXllZCBhZGRyZXNzIGRhdGEgd2hlbiBjYW5jZWwgbW9kaWZpY2F0aW9ucyAqL1xuZnVuY3Rpb24gY2FuY2VsQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpIHtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb2xkRGF0YSA9ICQodGhpcykuZGF0YSgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gKHRoaXMuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykpWzFdO1xuICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGREYXRhKTtcblxuICAgIGZpZWxkTmFtZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGZpZWxkTmFtZSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ2NvdW50cnlOYW1lJykge1xuICAgICAgICBmaWVsZE5hbWUgPSAnY291bnRyeUNvZGUnXG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0VG9SZXBsYWNlID0gJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICcuJyArIGZpZWxkTmFtZTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddXCJdJztcbiAgICAgIGNvbnN0IGZpZWxkVG9SZXBsYWNlID0gJy5tYWluLWFkZHJlc3MtZm9ybSAnICsgZm9ybUZpZWxkTmFtZTtcblxuICAgICAgLy8gU2V0IGZvcm0gd2l0aCBvbGQgZGF0YVxuICAgICAgJChmaWVsZFRvUmVwbGFjZSwgY29udGFpbmVyKS52YWwob2xkRGF0YVtlbGVtZW50XSk7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgICAvLyBTZXQgY2hvc2VuIEFkZHJlc3Mgd2l0aCBvbGQgZGF0YVxuICAgICAgICAkKHRleHRUb1JlcGxhY2UpLnRleHQob2xkRGF0YVtlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBTaG93IGFkZCBhZGRyZXNzIGZvcm1cbmZ1bmN0aW9uIHNob3dBZGRGb3JtKGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXScsIGNvbnRhaW5lcikudmFsKCcnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuXG4gIC8vIEhpZGUgYWxsIHNhdmUgYWRkcmVzcyBmb3JtcyBiZWZvcmUgc2hvd2luZyB0aGUgY2hvc2VuIG9uZVxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5hZGQtJyArIGFkZHJlc3NUeXBlICsgJy1hZGRyZXNzJywgY29udGFpbmVyKS5zaG93KCk7XG59XG5cbi8qIE1hbmFnZSB3aGF0IHR5cGUgb2YgYWRkcmVzcyB3aWxsIGJlIHJlcGxhY2UgYW5kL29yIHNhdmVkICovXG5mdW5jdGlvbiBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgc2VsZWN0b3JUeXBlLCBjb250YWluZXIpIHtcbiAgJCgnLicgKyBzZWxlY3RvclR5cGUgKyAnLScgKyBhZGRyZXNzVHlwZSArICctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLicgKyBzZWxlY3RvclR5cGUgKyAnLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICctdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAvLyBBbHNvIE1hbmFnZSBTYXZlQnV0dG9uIGNsYXNzXG4gIHNhdmVCdXR0b24uYWRkQ2xhc3MoYWRkcmVzc1R5cGUpO1xuICBzYXZlQnV0dG9uLnJlbW92ZUNsYXNzKGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqL1xuLyogQ09NTU9OIEZVTkNUSU9OUyAqL1xuLyoqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBHZXQgY2xhc3MgbGlzdCBmcm9tIGdpdmVuIGVsZW1lbnRcbmZ1bmN0aW9uIGdldENsYXNzTGlzdChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xufVxuXG4vLyBHZXQgZmllbGQgbmFtZSB0byBmaWxsIGRhdGEgaW5mbyBpbiAuY2FuY2VsLWluZm8gZGl2XG5mdW5jdGlvbiBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSkge1xuICBjb25zdCBtYXRjaGVzID0gL1tBLVpdL2dtLmV4ZWMoZmllbGROYW1lKTtcbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICByZXR1cm4gKGZpZWxkTmFtZS5zdWJzdHIoMCwgbWF0Y2hlcy5pbmRleCkgKyAnLScgKyBmaWVsZE5hbWUuc3Vic3RyKG1hdGNoZXMuaW5kZXgsIGZpZWxkTmFtZS5sZW5ndGgpKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkTmFtZTtcbn1cblxuLy8gR2V0IG90aGVyIGFkZHJlc3MgdHlwZSBmcm9tIGFkZHJlc3MgdHlwZSBnaXZlXG5mdW5jdGlvbiBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSB7XG4gIHJldHVybiAoYWRkcmVzc1R5cGUgPT09ICdzaGlwcGluZycpID8gJ2JpbGxpbmcnIDogJ3NoaXBwaW5nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tvdXQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ09OVEFDVCBQQUdFIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gQWpheCBjYWxsIHdoZW4gY29udGFjdCBmb3JtIGlzIHN1Ym1pdHRlZFxuICAkKCcjY29udGFjdFBhZ2UgZm9ybSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCAubW9kYWwtYm9keSBkaXYnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgLy8gRGVsZXRlIGFsbCBlcnJvcnMgb2YgZm9ybSB3aGVuIHN1Y2Nlc3NcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdJykudmFsKCcnKS5wcm9wKCBcImNoZWNrZWRcIiwgZmFsc2UgKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdLCAjY29udGFjdFBhZ2UgW2Zvcl49XCJzeWxpdXNfY29udGFjdF9cIl0nKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA2KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAgIGNvbnN0IGVycm9yTGlzdCA9ICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnc3BhbicpLnRvQXJyYXkoKTtcbiAgICAgICAgICBlcnJvckxpc3QuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iub3V0ZXJUZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IuY2xhc3NOYW1lICE9PSAnYWNjZXB0Q2d2Jykge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgICAgICAgICAgICAgIC5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj4nICsgZXJyb3Iub3V0ZXJUZXh0ICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5uZXh0KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDE3KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIC5jb250YWN0LWVycm9yJykuaHRtbCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcblxuICAvLyBBZGQgbmV3IGZpZWxkIHdoZW4gY2hvc2VuIHN1YmplY3QgaXMgXCJvdGhlclwiXG4gICQoJyNzeWxpdXNfY29udGFjdF9zdWJqZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZigkKGUudGFyZ2V0KS52YWwoKSA9PT0gJ290aGVyJykge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0JykuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBMT0dJTiBQQUdFIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IHsgU3lsaXVzTG9hZGFibGVGb3JtIH0gZnJvbSAnLi9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG5jb25zdCBsb2dpblBhZ2UgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBPcGVuIHJlc2V0IHBhc3N3b3JkIG1vZGFsXG4gICQoJy5yZXNldC1wYXNzd29yZC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJCh0aGlzKS5kYXRhKCdtb2RhbElkJyk7XG4gICAgJChtb2RhbElkKS5tb2RhbCgnc2hvdycpO1xuICAgICQoJy5oZWFkZXItZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KVxuXG4gIC8vIE9ubHkgd2hlbiBjbGFzcyBsb2dpbi1mb3JtIGV4aXN0cyBpbiBwYWdlXG4gIGlmKCQoJy5sb2dpbi1mb3JtJykpIHtcbiAgICAkKCcuc3VibWl0LWxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybUVsZW1lbnQpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT25seSB3aGVuIGNsYXNzIHZlcmlmeS1hY2NvdW50IGV4aXN0cyBpbiBwYWdlXG4gIGNvbnN0IHZlcmlmeUFjY291bnRPYmplY3QgPSAkKCcudmVyaWZ5LWFjY291bnQnKTtcbiAgaWYodmVyaWZ5QWNjb3VudE9iamVjdCkge1xuICAgIHZlcmlmeUFjY291bnRPYmplY3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHdoZW4gcmVzZXRQYXNzd29yZFN1Ym1pdCBidXR0b24gZXhpc3RzIGluIHBhZ2UsIEFqYXggY2FsbCB0byByZXNldCBwYXNzd29yZFxuICBpZiAoJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKSkge1xuICAgIGxvYWRBamF4UGFzc3dvcmRSZXNldCgpO1xuXG4gICAgLy8gQWN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghJCgnLm1vZGFsLWNvbnRlbnQnKS5oYXNDbGFzcygnaXMtc3VjY2VzcycpKSB7XG4gICAgICAgIC8vIEFqYXggbG9hZFxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuICAgICAgICBjb25zdCB1cmwgPSAkKHRoaXMpLmRhdGEoJ2FqYXgtcGFzc3dvcmQtcmVxdWVzdC11cmwnKTtcbiAgICAgICAgJCgnZm9ybS5sb2FkYWJsZScsIHRoaXMpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG1vZGFsQm9keS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvYWRBamF4UGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgU3lsaXVzTG9hZGFibGVGb3JtKCQoJ2Zvcm0ubG9hZGFibGUnLCBtb2RhbEJvZHkpWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0nKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybSBpbnB1dCcpLnZhbCgnJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGVtYWlsIGlzIHZhbGlkIGJlZm9yZSBzdWJtaXQgcmVnaXN0ZXIgZm9ybVxuICAkKCdidXR0b24uc3VibWl0LXJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSAkKCQoZS50YXJnZXQpLmRhdGEoJ2Zvcm0nKSk7XG4gICAgY29uc3QgaW5wdXRSZWdpc3RlckZvcm0gPSByZWdpc3RlckZvcm0uZmluZCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbCA9IGlucHV0UmVnaXN0ZXJGb3JtLnZhbCgpO1xuICAgIGNvbnN0IGludmFsaWRTcGFuID0gaW5wdXRSZWdpc3RlckZvcm0uY2xvc2VzdCgnZGl2JykubmV4dCgnc3BhbicpO1xuICAgIGlmIChyZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgaW52YWxpZFNwYW4ucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIGlucHV0UmVnaXN0ZXJGb3JtLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICByZWdpc3RlckZvcm0uc3VibWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludmFsaWRTcGFuLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgICBpbnB1dFJlZ2lzdGVyRm9ybS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBlbWFpbCBmaWVsZCBpcyBmaWxsZWQgYW5kIGN1c3RvbWVyIHdhbnRzIHRvIG1vZGlmeSBpdHMgdmFsdWVcbiAgJCgnLnJlZ2lzdGVyLWZvcm0gaW5wdXQsIC5oZWFkZXItcmVnaXN0ZXItZm9ybSBpbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICBjb25zdCBlbWFpbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIGlmIChyZWdleC50ZXN0KGVtYWlsKSAmJiAkKGUudGFyZ2V0KS5oYXNDbGFzcygnaXMtaW52YWxpZCcpKSB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRBamF4UGFzc3dvcmRSZXNldCgpIHtcbiAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQ6bm90KC5zdWNjZXNzKScpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luUGFnZTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyByZXNpemVDb250ZW50IH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmNvbnN0IHJlc2l6ZU1haW5Db250YWluZXIgPSBmdW5jdGlvbiByZXNpemVGdW5jdGlvbigpIHtcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCI7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmNvbnN0IG5hdmJhckNvbGxhcHNlID0gZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VGdW5jdGlvbnMoKSB7XG4gIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9ICQoJyNtYWluTmF2YmFyJyk7XG4gIG5hdmJhckNvbnRhaW5lci5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBuYXZiYXJDb250YWluZXIub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBuYXZiYXJDb250YWluZXIub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWVnYW1lbnUgZnVuY3Rpb25zXG4gKiAuaGFzLW1lZ2FtZW51IHRvIHVzZSBkcm9wZG93biBmdW5jdGlvbnNcbiAqL1xuY29uc3QgbWVnYW1lbnUgPSBmdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuY29uc3QgbWVudUljb25lcyA9IGZ1bmN0aW9uIG1lbnVJY29uZXNGdW5jdGlvbnMoKSB7XG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgbGV0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpIC0gJCgnI2NhcnRXaWRnZXRUaXRsZScpLm91dGVySGVpZ2h0KCkgLSAyMDtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1jYXJ0JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICAgICAgaWYgKCEkKCcjaGVhZGVyQ2FydE5ld0l0ZW0nKS5oYXNDbGFzcygnZC1ub25lJykpIHtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCkgLSAyMDtcbiAgICAgICAgJCgnI2hlYWRlckNhcnROZXdJdGVtJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9XG5cbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICAgIC8vIENhcnQgSWNvblxuICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoJy5kcm9wZG93bicpLmhhc0NsYXNzKCdjYXJ0LWJ0bicpKSB7XG4gICAgICAkKCcjaGVhZGVyQ2FydE5ld0l0ZW0nKS5odG1sKCcnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsJykuYWRkQ2xhc3MoJ2QtZmxleCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNjYXJ0QWN0aW9ucyAuaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcuY2FydC1kcm9wZG93biAuY2xvc2UtY2FydC13aWRnZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuIC5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuY29uc3QgcmVzaXplTWVudSA9IGZ1bmN0aW9uIHJlc2l6ZU1lbnVGdW5jdGlvbnMoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG4gIHJlc2l6ZU1lbnUob2ZmY2FudmFzX2lkKTtcblxuICAkKG9mZmNhbnZhc19pZCkuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyVGF4b25zJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyQWNjb3VudExpbmtzJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5zaG93KCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcblxuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgJChcIi5tb2JpbGUtb2ZmY2FudmFzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgJChvZmZjYW52YXNfaWQpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuXG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJUYXhvbnMnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJBY2NvdW50TGlua3MnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLmhpZGUoKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBkZXZlbG9wTW9iaWxlTWVudShkaXZUb09wZW4pIHtcbiAgaWYgKGRpdlRvT3BlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKGRpdlRvT3Blbikuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxufVxuXG5leHBvcnQgeyByZXNpemVNYWluQ29udGFpbmVyLCBuYXZiYXJDb2xsYXBzZSwgbWVnYW1lbnUsIG1lbnVJY29uZXMsIHJlc2l6ZU1lbnUgfTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IG9yZGVyc0dyaWQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBEZXNrdG9wIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0cicsIHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAvLyBNb2JpbGUgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5yZW1vdmVDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5hZGRDbGFzcygnaW5pdCcpO1xuICB9KVxuXG4gICQoJy5hcnJvdy1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2Lm9yZGVyLWRldGFpbHMnKS5wcmV2KCdkaXYnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3JkZXJzR3JpZDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqL1xuLyogUFJPRFVDVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuXG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yID0gJyNwcm9kdWN0c0ZpbHRlcnMnO1xuY29uc3QgcHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSA9ICcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJztcblxuY29uc3QgcHJpY2VNaW5TZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzFdXCJdJztcbmNvbnN0IHByaWNlTWF4U2VsZWN0b3IgPSAnaW5wdXRbbmFtZT1cImNyaXRlcmlhW3ByaWNlXVtwcmljZV8yXVwiXSc7XG5cbmNvbnN0IHByb2R1Y3QgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBNYW5hZ2UgdmFyaWFudCBsaXN0IHdoZW4gY2xpY2tpbmcgaW4gc2l6ZSBhdmFpbGFibGVcbiAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lOm5vdCgudmFyaWFudC1kaXNhYmxlZCknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW0gPSAkKHRoaXMpLmRhdGEoJ2J1bmRsZS1pdGVtJyk7XG4gICAgY29uc3QgdmFyaWFudExpc3RDb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi52YXJpYW50LWxpc3QnKTtcblxuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCgnLmludmFsaWQtZmVlZGJhY2snLCB2YXJpYW50TGlzdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJyk7XG5cbiAgICBpZiAoJCh0aGlzKS5kYXRhKCdhbG1vc3Qtb3V0JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLmxhc3QtcHJvZHVjdC1pbi1zdG9jaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmxhc3QtcHJvZHVjdC1pbi1zdG9jaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAvLyBTaG93IG9yIGhpZGUgdmFyaWFudHMgbGlzdCBpbiBwcm9kdWN0cyBjYXJvdXNlbCBhY2NvcmRpbmcgdG8gc2NyZWVuIHNpemVcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCAudmFyaWFudHMtY29udGFpbmVyJykuaGlkZSgpO1xuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wJylcbiAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTQ0MCkge1xuICAgICAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuc2hvdygpO1xuICAgICAgfVxuICAgIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLmhpZGUoKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiBjbGlja2luZyBvbiBhZGQgdG8gY2FydCBidXR0b24gPT4gU0VFIHN5bGl1cy1hZGQtdG8tY2FydC5qc1xuICAvLyQoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCAuYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vfSlcblxuICAkKCdpbnB1dFtpZF49XCJiaXRiYWdfc3lsaXVzX3Byb2R1Y3RfYnVuZGxlX3BsdWdpbl9hZGRfcHJvZHVjdF9idW5kbGVfdG9fY2FydF9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykuZmluZCgnc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykuYWRkQ2xhc3MoJ2lucHV0LWNoZWNrZWQnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSlcbn07XG5cbmNvbnN0IGZpbHRlclByb2R1Y3RzID0gZnVuY3Rpb24gZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBjcml0ZXJpYSA9IHF1ZXJ5U3RyaW5nLmluZGV4T2YoJ2NyaXRlcmlhJyk7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpO1xuXG4gIGxldCBwcmljZVNsaWRlcjtcbiAgbGV0IHByaWNlU2xpZGVyTW9iaWxlO1xuXG4gIGlmIChwcmljZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBwcmljZVNsaWRlciA9IGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIHByaWNlQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgY2hhbmdlcyBwcmljZSBpbnB1dCB2YWx1ZVxuICAgIHByaWNlSW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYoZS53aGljaCAhPT0gOCAmJiAhaXNOYU4oU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKSkpe1xuICAgICAgICBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNQU5BR0UgREVTS1RPUCBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50XG4gIGNvbnN0IHNpemVGaWx0ZXJJbnB1dCA9ICQoJyNzaXplRmlsdGVyIGlucHV0Jyk7XG4gIHNpemVGaWx0ZXJJbnB1dC5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICBpZih0aGlzLmNoZWNrZWQpIHtcbiAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJ2lucHV0W2RhdGEtaWQ9XCInICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgc2l6ZUZpbHRlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzIG9uIGRlc2t0b3BcbiAgJCgnYS52YWxpZGF0ZS1maWx0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlckZvcm0nKS5zdWJtaXQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBNT0JJTEUgRklMVEVSU1xuICAgKi9cbiAgLy8gU2l6ZSBmaWx0ZXIgbWFuYWdlbWVudCBvbiBtb2JpbGVcbiAgJCgnI2NyaXRlcmlhU2l6ZU1vYmlsZSBpbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgaW5wdXRUb0NoZWNrID0gJChlLnRhcmdldCkuZGF0YSgnaWQnKTtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykucmVtb3ZlQXR0cignY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTb3J0aW5nXG4gICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIGlucHV0LmlucHV0LXNvcnRpbmcnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIGlucHV0JykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIC5jaGVja21hcmsgLmNoZWNrZWQnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoZS50YXJnZXQpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICQoZS50YXJnZXQpLm5leHQoJy5jaGVja21hcmsnKS5maW5kKCcuY2hlY2tlZCcpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gIH0pO1xuXG4gIC8vIFZhbGlkYXRlIGZpbHRlcnNcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnZhbCgpID09PSAnY3JlYXRlZEF0Jykge1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnJlbW92ZSgpO1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmctY3JlYXRlZEF0JykuYXR0cignY2hlY2tlZCcsIHRydWUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1pbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIC8vIE1vYmlsZSBmaWx0ZXJzIGJlaGF2aW91clxuICAkKCcucHJvZHVjdC1maWx0ZXJzLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgcmVzaXplRmlsdGVyTWVudSgpO1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBHRU5FUkFMIEZVTkNUSU9OU1xuICAgKi9cbiAgLy8gSGlkZSByZWluaXRpYWxpemF0aW9uIGJ1dHRvbiB3aGVuIGZpbHRlcnMgaGF2ZSBubyBjcml0ZXJpYVxuICBpZiAoY3JpdGVyaWEgIT09IC0xKSB7XG4gICAgJCgnLnJlaW5pdC1maWx0ZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgfVxuICAvLyBBZGQgYWN0aW9uIHRvIGNsb3NlIGljb25cbiAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuZHJvcGRvd24tdG9nZ2xlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkudHJpZ2dlcignY2xpY2snKTtcbiAgfSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB3aW5kb3cgaXMgcmVzaXplZCB0byBhdm9pZCBzaG93aW5nIGZpbHRlciBtb2JpbGUgbWVudSBvbiBkZXNrdG9wXG4gKi9cbmNvbnN0IHJlc2l6ZUZpbHRlck1lbnUgPSBmdW5jdGlvbiByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9ICQoJyNoZWFkZXJDb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkZXJCYW5uZXIgPSAkKCcuaGVhZGVyLWJhbm5lcicpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlckNvbnRhaW5lci5oZWlnaHQoKSAtIGhlYWRlckJhbm5lci5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9IGhlYWRlckNvbnRhaW5lci5vdXRlckhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGZpbHRlckxpc3RDb250YWluZXJIZWlnaHQgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51JykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNmaWx0ZXJTdWJtaXQnKS5vdXRlckhlaWdodCgpIC0gMTA7XG4gICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZScpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2ZpbHRlckxpc3QnKS5jc3MoJ2hlaWdodCcsIGZpbHRlckxpc3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcmljZSBzbGlkZXIgb24gdGF4b24gcGFnZXNcbiAqXG4gKiBAcGFyYW0gcHJpY2VJbnB1dFxuICogQHBhcmFtIGNvbnRhaW5lclNlbGVjdG9yXG4gKiBAcmV0dXJucyBub1VpU2xpZGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gIGNvbnN0IHByaWNlQ29udGFpbmVyID0gJChjb250YWluZXJTZWxlY3Rvcik7XG4gIGNvbnN0IHByaWNlUmFuZ2UgPSAkKCcjcHJpY2VSYW5nZScsIHByaWNlQ29udGFpbmVyKVswXTtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgLy8gUHJlcGFyZSBzbGlkZXIgb3B0aW9uc1xuICBjb25zdCB0YXhvbk1pblByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWluJykpO1xuICBjb25zdCB0YXhvbk1heFByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWF4JykpO1xuICBjb25zdCByYW5nZVNsaWRlck9wdGlvbnMgPSB7XG4gICAgc3RhcnQ6IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldLFxuXG4gICAgcmFuZ2U6IHtcbiAgICAgICdtaW4nOiBbdGF4b25NaW5QcmljZV0sXG4gICAgICAnbWF4JzogW3RheG9uTWF4UHJpY2VdXG4gICAgfSxcbiAgICBzdGVwOiAxLFxuICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgZm9ybWF0OiB7XG4gICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVoYXZpb3VyOiAndGFwJyxcbiAgICB0b29sdGlwczogZmFsc2VcbiAgfTtcblxuICBjb25zdCBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICBzbGlkZXIub24oJ3NsaWRlJywgZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICBwcmljZU1pbi52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICBwcmljZU1heC52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNsaWRlcjtcbn1cblxuZnVuY3Rpb24gc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXIsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3VmFsdWUgPSBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXTtcbiAgcHJpY2VTbGlkZXIuc2V0KG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBwcmljZSB2YWx1ZXMgYmVmb3JlIHNlbmQgZm9ybVxuICogQHBhcmFtIHByaWNlU2xpZGVyT2JqZWN0XG4gKiBAcGFyYW0gcHJpY2VDb250YWluZXJcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyT2JqZWN0LCBwcmljZUNvbnRhaW5lcikge1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKS5maXJzdCgpO1xuICBsZXQgcHJpY2VNaW5WYWx1ZSA9IHByaWNlTWluLnZhbCgpO1xuICBsZXQgcHJpY2VNYXhWYWx1ZSA9IHByaWNlTWF4LnZhbCgpO1xuICBpZiAocHJpY2VNaW4udmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgaWYgKHByaWNlTWluLnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIHByaWNlTWluLnZhbChwcmljZU1pblZhbHVlKTtcbiAgaWYgKHByaWNlTWF4LnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIGlmIChwcmljZU1heC52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBwcmljZU1heC52YWwocHJpY2VNYXhWYWx1ZSk7XG4gIHByaWNlU2xpZGVyT2JqZWN0LnNldChbcHJpY2VNaW5WYWx1ZSwgcHJpY2VNYXhWYWx1ZV0pO1xufVxuXG5leHBvcnQgeyBwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTSEFSRSBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBzaGFyZVByb2R1Y3QgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmVEcm9wZG93bicpKSB7XG4gICAgalF1ZXJ5KCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpO1xuICAgIC8vIEZhY2Vib29rIFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHdpblRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAoMzUwIC8gMik7XG4gICAgICBjb25zdCB3aW5MZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKDYwMCAvIDIpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5kYXRhc2V0LnVybDtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jyt1cmwsICdGYWNlYm9vayAtIE5vYmxlenogU2hvcCcsICd0b3A9JyArIHdpblRvcCArICcsbGVmdD0nICsgd2luTGVmdCArICcsdG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPTYwMCxoZWlnaHQ9MzUwJyk7XG4gICAgfSk7XG5cbiAgICAvLyBQaW50ZXJlc3QgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGludGVyZXN0U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsUGludGVyZXN0U2hhcmUnKS5jbGljaygpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDb3B5IHRvIENsaXBib2FyZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMaW5rJyk7XG4gICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZW5hYmxlJyk7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dC52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdzaG93Jyk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTsgfSwgMTUwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coYENvcHkgZmFpbGVkISAke2Vycm9yfWApIH0pXG4gICAgfSk7XG5cbiAgICAvLyBNYWlsIFRvXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBtYWlsVG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuZGF0YXNldC5tYWlsdG87XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1haWxUbztcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGFyZVByb2R1Y3Q7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMgfSBmcm9tICcuL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcbiAgbGV0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJyk7XG5cbiAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gJCgnaW5wdXRbbmFtZV49XCInICsgJChhZGRUb0NhcnRGb3JtKS5kYXRhKCduYW1lVG9DaGVjaycpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoO1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW1zQ291bnQgPSAkKCdkaXYuYnVuZGxlLWl0ZW0nKS5sZW5ndGg7XG4gICAgaWYoc2VsZWN0ZWRTaXplID4gMCAmJiBzZWxlY3RlZFNpemUgPCBidW5kbGVJdGVtc0NvdW50ICkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdDpub3QoLmlucHV0LWNoZWNrZWQpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPT09IDApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRhYmxlJywgJ2xvYWRpbmcnKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuICAgICAgcmVxdWVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICQucGFyc2VIVE1MKHJlc3BvbnNlLmRhdGEpWzBdO1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgICBpZiAoISQoJyNlbXB0eUNhcnQnKS5oYXNDbGFzcygnZC1ub25lJykpIHtcbiAgICAgICAgICAkKCcjY2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWZsZXgnKTtcbiAgICAgICAgICAkKCcjZW1wdHlDYXJ0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKS5zY3JvbGxUb3AoMCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcuY2FydC1jb3VudCcpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNvdW50LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUwpO1xuICAgICAgICAkKCcjaGVhZGVyQ2FydE5ld0l0ZW0nKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1uZXctaXRlbScpWzBdLmlubmVySFRNTCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcuZHJvcGRvd24uY2FydC1idG4gLmRyb3Bkb3duLXRvZ2dsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCcpLnJlbW92ZUNsYXNzKCdkLWZsZXgnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCBzcGFuJykubGFzdCgpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtc3VidG90YWwnKVswXS5pbm5lckhUTUwpO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG5cbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJ1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJykuZm9yRWFjaChmdW5jdGlvbihlcnJvckVsKSB7XG4gICAgICAgICAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLnByb2R1Y3RfaWQgPiAwKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdW2RhdGEtcHJvZHVjdC1pZD1cIicrIGVycm9yLnJlc3BvbnNlLmRhdGEucHJvZHVjdF9pZCArJ1wiXScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl1bZGF0YS1idW5kbGUtZXJyb3JdJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKS50b1N0cmluZygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAoZXJyb3IucmVzcG9uc2UuZGF0YSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTeWxpdXNBZGRUb0NhcnQgZnJvbSAnLi9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1VwZGF0ZVF1YW50aXR5IGZyb20gJy4vc3lsaXVzLXVwZGF0ZS1xdWFudGl0eSc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5cbmNvbnN0IGNhcnRXaWRnZXRDb250YWluZXIgPSAkKCcjaGVhZGVyQ2FydEl0ZW1zJyk7XG5jb25zdCBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zID0gZnVuY3Rpb24gZG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKSB7XG4gIC8vIEFmdGVyIERvbSByZXBsYWNlbWVudCwgc2V0IGFjdGlvbnMgaW4gY2FydCB3aWRnZXQgYWdhaW5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZWxvYWQtcXR5LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1VwZGF0ZVF1YW50aXR5KGVsKSk7XG5cbiAgJCgnLmFqYXgtcXR5JywgY2FydFdpZGdldENvbnRhaW5lcikub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcucmVsb2FkLXF0eS5hamF4JykuYXR0cignZGF0YS1qcy11cGRhdGUtcXR5LXZhbHVlJywgJCh0aGlzKS52YWwoKSk7XG4gICAgaWYgKHBhcnNlSW50KCQodGhpcykudmFsKCkpID49IHBhcnNlSW50KCQodGhpcykuYXR0cignbWF4JykpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21heCcpKTtcbiAgICB9IGVsc2UgaWYocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPCBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21pbicpKSkge1xuICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS5hdHRyKCdtaW4nKSk7XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zID0gZnVuY3Rpb24gdXBkYXRlQ2FydFdpZGdldChyZXNwb25zZSkge1xuICBjb25zdCByZXNwb25zZURhdGEgPSAkLnBhcnNlSFRNTChyZXNwb25zZS5kYXRhKVswXTtcbiAgY29uc3QgY2FydENvdW50ID0gJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNvdW50LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUw7XG4gIGNhcnRXaWRnZXRDb250YWluZXIuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTCkuc2Nyb2xsVG9wKDApLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICQoJy5jYXJ0LWNvdW50JykuaHRtbChjYXJ0Q291bnQpO1xuICAkKCcjY2FydEFjdGlvbnMgLmNhcnQtc3VidG90YWwgc3BhbicpLmxhc3QoKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LXN1YnRvdGFsJylbMF0uaW5uZXJIVE1MKTtcbiAgaWYgKHBhcnNlSW50KGNhcnRDb3VudCkgPT09IDApIHtcbiAgICAkKCcjY2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2QtZmxleCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcjZW1wdHlDYXJ0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG59XG5cbmNvbnN0IGFkZFRvQ2FydEZ1bmN0aW9ucyA9IGZ1bmN0aW9uIGFkZFRvQ2FydCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcbn1cblxuZXhwb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucywgYWRkVG9DYXJ0RnVuY3Rpb25zIH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybSA9IChlbCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGVsLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBTeWxpdXNMb2FkYWJsZUZvcm1zLCBTeWxpdXNMb2FkYWJsZUZvcm0gfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMsIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgfSBmcm9tICcuL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5hZGRDbGFzcygnbG9hZGluZycpLnNjcm9sbFRvcCgwKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVkaXJlY3RVcmwgIT09IHVuZGVmaW5lZCAmJiAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9kdWN0LWFqYXgnKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIH0gZnJvbSAnLi9zeWxpdXMtY2FydC1jb21tb24nO1xuXG5jb25zdCBTeWxpdXNVcGRhdGVRdWFudGl0eSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXVwZGF0ZS1xdHktdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXVwZGF0ZS1xdHktY3NyZi10b2tlbicpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICQoJyNjYXJ0QWN0aW9ucyAucXVhbnRpdHktZXJyb3InKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpXG4gICAgY29uc3QgbmV3UXVhbnRpdHkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy11cGRhdGUtcXR5LXZhbHVlJyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCB7fSx7IGRhdGE6IHtfY3NyZl90b2tlbjogY3NyZlRva2VuLCBxdWFudGl0eTogbmV3UXVhbnRpdHkgfX0gKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zY3JvbGxUb3AoMCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5xdWFudGl0eS1lcnJvcicpLmFkZENsYXNzKCdkLWJsb2NrJykuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKGVycm9yLnJlc3BvbnNlLmRhdGEpLnRvU3RyaW5nKCkpLmNsb3Nlc3QoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1VwZGF0ZVF1YW50aXR5O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYWNjb3VudC1pY29uLmJhOTY5Yzk5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2JhY2suY2QxMWYwZmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2FyZC5iNzU3MWIxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jaHJvbm9wb3N0LmVlZGU2YWJjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NvbGlzc2ltby4wYjc5YTcxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9kZWxpdmVyeS10cnVjay45YzNkZmNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWRlLjlhMzE4NTlkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZW4uMzAyZWU3YmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lcy42YWE3MDdmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWZyLjg0NmQ3ZTY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24taXQuMzU1NWEzNmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbG9nby4yYzJhOWNjMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tYXN0ZXJjYXJkLjA0MGY0MWJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21vbmRpYWwtcmVsYXkuZTcyNjg5N2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbmV4dC5mYjY0NjA5NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9wYXlwYWwuOTUyNjI1ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmVsb2FkLjNiNzUwZDQ2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JldHVybi1wb2xpY3kuNjdkOGE3NTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvc2hvcHBpbmctYmFnLWljb24uN2ZkZWMyNzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvdmlzYS42OTljNDAzOS5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9