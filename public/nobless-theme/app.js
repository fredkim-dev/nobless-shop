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
  }); // Bundle details tooltip

  $('.bundle-details').on('mouseover', function (e) {
    $('.bundle-details-tooltip').html($('.custom-tooltip', $(this)).html()).css({
      'left': $(this).offset().left + 20,
      'top': $(this).offset().top + 20,
      'display': 'block'
    });
  }).on('mouseout', function (e) {
    $('.bundle-details-tooltip').html('').css({
      'display': 'none'
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NhcnQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9jaGVja291dC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NvbnRhY3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9sb2dpbi1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3Byb2R1Y3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zaGFyZS1wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtY2FydC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy11cGRhdGUtcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBcGlMb2dpbiIsImVsIiwiZWxlbWVudCIsInNpZ25JbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0aW9uRmllbGQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImxlbmd0aCIsImdldCIsImVtYWlsIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50VGFyZ2V0Iiwib25SYXRlIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImNsb3Nlc3QiLCJpbWciLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwic2VsZWN0Iiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJkZWZpbmUiLCIkIiwiRnJlc2NvIiwiZXh0ZW5kIiwidmVyc2lvbiIsIlNraW5zIiwiZnJlc2NvIiwiQm91bmRzIiwidmlld3BvcnQiLCJ3aWR0aCIsIkJyb3dzZXIiLCJNb2JpbGVTYWZhcmkiLCJBbmRyb2lkIiwiR2Vja28iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklFIiwiYXR0YWNoRXZlbnQiLCJpbmRleE9mIiwiZiIsIk9wZXJhIiwib3BlcmEiLCJwYXJzZUZsb2F0IiwiV2ViS2l0IiwibWF0Y2giLCJDaHJvbWUiLCJDaHJvbWVNb2JpbGUiLCJJRU1vYmlsZSIsInQiLCJSZWdFeHAiLCJleGVjIiwiX3NsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImJhc2VUb1N0cmluZyIsIl8iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsIlN0cmluZyIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9uIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJFdmVudCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzdXBwb3J0cyIsIm5hdHVyYWxXaWR0aCIsIkltYWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImlzTG9hZGVkIiwib3B0aW9ucyIsIm1ldGhvZCIsInBvbGxGYWxsYmFja0FmdGVyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwicHJveHkiLCJzdWNjZXNzIiwiaW50ZXJ2YWxzIiwiX2lwb3MiLCJfdGltZSIsIl9kZWxheSIsInBvbGwiLCJmYWxsYmFjayIsIl9wb2xsaW5nIiwiX3VzZWRQb2xsRmFsbGJhY2siLCJfZmFsbGJhY2tJbWciLCJuYXR1cmFsSGVpZ2h0Iiwib25lcnJvciIsInNyYyIsImFib3J0IiwiY2xlYXJUaW1lb3V0IiwiX2NhbGxlZFN1Y2Nlc3MiLCJfY2FsbGVkRXJyb3IiLCJfdGltZXJzIiwic2V0IiwiY2xlYXIiLCJjbGVhckFsbCIsIlR5cGUiLCJpc1ZpZGVvIiwiaW1hZ2UiLCJleHRlbnNpb25zIiwiZGV0ZWN0IiwiaW5BcnJheSIsImV4dGVuc2lvbiIsInZpbWVvIiwiaWQiLCJ5b3V0dWJlIiwiVmltZW9UaHVtYm5haWwiLCJsb2FkIiwicHJvdG9jb2wiLCJfeGhyIiwiZ2V0SlNPTiIsInRodW1ibmFpbF91cmwiLCJjYWNoZSIsInB1c2giLCJWaW1lb1JlYWR5IiwiY2FsbGJhY2siLCJkaW1lbnNpb25zIiwiT3B0aW9ucyIsImRlZmF1bHRzIiwiZWZmZWN0cyIsImNvbnRlbnQiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsIm92ZXJsYXkiLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJhdHRyIiwicG9zaXRpb25PdXRzaWRlIiwicHJldmlvdXNJbnNpZGUiLCJuZXh0SW5zaWRlIiwiY2xvc2VJbnNpZGUiLCJncm91cGVkIiwiaW5mb0luc2lkZSIsImluZm9QYWRkZXJJbnNpZGUiLCJwb3NJbnNpZGUiLCJjYXB0aW9uSW5zaWRlIiwicG9zaXRpb25JbnNpZGUiLCJfZ2V0U3Vycm91bmRpbmdQYWdlcyIsInByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcyIsInByZWxvYWRpbmciLCJwcmVsb2FkZWQiLCJsb2FkZWQiLCJwcmVsb2FkUmVhZHkiLCJsb2FkaW5nIiwiX3NwaW5uZXJEZWxheSIsImltYWdlUmVhZHkiLCJfbWFya0FzTG9hZGVkIiwic2V0RGltZW5zaW9ucyIsInByZXBlbmQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ2aW1lb1JlYWR5IiwiX2Fib3J0U3Bpbm5lckRlbGF5IiwiaW5zZXJ0VmlkZW8iLCJwbGF5ZXJJZnJhbWUiLCJwYXJhbSIsIl9kYXRhIiwiX2NvbnRlbnREaW1lbnNpb25zIiwiZnJhbWVib3JkZXIiLCJyYWlzZSIsImxhc3RDaGlsZCIsInN0b3BJbmFjdGl2ZSIsInVwZGF0ZVVJIiwiX3VpIiwiaGlkZUluYWN0aXZlIiwib25TaG93IiwiYWZ0ZXJQb3NpdGlvbiIsInJlbW92ZVZpZGVvIiwicmVtb3ZlVHJhY2tpbmciLCJfdHJhY2siLCJyZW1vdmVkIiwiX2dldEluZm9IZWlnaHQiLCJfd2hpbGVWaXNpYmxlIiwiaXMiLCJoYXNDbGFzcyIsInZpc2liaWxpdHkiLCJ1cGRhdGVGb3JjZWQiLCJmdWxsQ2xpY2siLCJfbm9PdmVyZmxvdyIsInBhcnNlSW50IiwiX3Bvc2l0aW9uT3V0c2lkZSIsImwiLCJ1IiwiYyIsInAiLCJtIiwidiIsImciLCJfaW5mb0hlaWdodCIsIl9wYWRkaW5nIiwiX2JhY2tncm91bmREaW1lbnNpb25zIiwiYm90dG9tIiwiZ2V0WFlQIiwicmVtb3ZlQXR0ciIsImZpbmQiLCJnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwIiwiZ2V0TG9hZGluZ0NvdW50IiwiaGFuZGxlVHJhY2tpbmciLCJzZXRYWSIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVQb3NpdGlvbnMiLCJfdHJhY2tpbmdfdGltZXIiLCJjbGVhclRyYWNraW5nVGltZXIiLCJzdGFydFRyYWNraW5nIiwiX2hhbmRsZVRyYWNraW5nIiwic3RvcFRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJpc1RyYWNraW5nIiwiY2xlYXJUcmFja2luZyIsImdyZXAiLCJfeHkiLCJzZXRYWVAiLCJfeHlwIiwiVmlldyIsIm9iamVjdCIsImdyb3VwIiwiZXZhbCIsInN1cHBvcnRlZCIsInVwZGF0ZURpbWVuc2lvbnMiLCJfZGltZW5zaW9ucyIsIl9GcmVzY28iLCJfZGlzYWJsZWQiLCJfZmFsbGJhY2siLCJzdGFydERlbGVnYXRpbmciLCJfZGVsZWdhdGVIYW5kbGVyIiwiZGVsZWdhdGUiLCJfc2V0Q2xpY2tYWUhhbmRsZXIiLCJzZXRDbGlja1hZIiwic3RvcERlbGVnYXRpbmciLCJzaG93RmFsbGJhY2siLCJvYmplY3RfdHlwZSIsIl9kZ28iLCJncm91cE9wdGlvbnMiLCJlbGVtZW50cyIsImZpbHRlciIsImdyb3VwRXh0ZW5kIiwiZmlyc3RVSSIsInBvc2l0aW9uSW5BUEciLCJocmVmIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImpRdWVyeSIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImV2ZW50IiwiZGV2ZWxvcE1vYmlsZU1lbnUiLCJtZW51SWNvbmVzRnVuY3Rpb25zIiwiaGVhZGVyT3V0ZXJIZWlnaHQiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsIm9mZmNhbnZhc19pZCIsImRpdlRvT3BlbiIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJwcmV2IiwidG9vbHRpcCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhlYWRlcnMiLCJhY2NlcHQiLCJnbGlnaHRib3giLCJlbGVtIiwiY2Fyb3VzZWwiLCJtYWluRnVuY3Rpb25zIiwiY3JlYXRlQ2Fyb3VzZWwiLCJjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwiLCJjYXJvdXNlbEVsZW1lbnQiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNsaWNrIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwicmVwbGFjZUNhcm91c2VsQXJyb3ciLCJpc0NhcnRJdGVtc0Nhcm91c2VsIiwibW9iaWxlRmlyc3QiLCJyZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQiLCJ1bnNsaWNrZWQiLCJjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwiLCJvcHRzIiwicm93cyIsInNsaWRlc1BlclJvdyIsImFkYXB0aXZlSGVpZ2h0IiwidmlzaWJsZVNsaWRlckRpdiIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW1nU2VsZWN0b3IiLCJpbWdTbGlkZXJIZWlnaHQiLCJhcnJvd1RvcFZhbHVlIiwibm90IiwiYm9keUNvbnRhaW5lciIsImNhcnQiLCJuZXdRdHkiLCJ2YWwiLCJpbnB1dFF0eU5hbWUiLCJjb3Vwb24iLCJib251c1BvaW50cyIsInNhdmVCdXR0b24iLCJjYW5jZWxCdG4iLCJjaGVja291dCIsImFkZHJlc3NUeXBlIiwiZ2V0Q2xhc3NMaXN0IiwibWFuYWdlQWRkcmVzc1R5cGUiLCJjaG9vc2VBZGRyZXNzIiwic2hvd0FkZEZvcm0iLCJmaWVsZCIsImZpZWxkTmFtZSIsInRvU2F2ZSIsInRvUmVwbGFjZSIsImNoZWNrb3V0U2F2ZUFkZHJlc3MiLCJmaWxsQWxsQWRkcmVzc2VzIiwic3VibWl0IiwiaGlkZUNoYW5nZUFkZHJlc3MiLCJoaWRlU2F2ZUFkZHJlc3NGb3JtIiwiY2FuY2VsQ2hhbmdlQWRkcmVzcyIsIm9mZnNldCIsImZpZWxkU2VsZWN0b3IiLCJmb3JtRmllbGQiLCJjaG9zZW5BZGRyZXNzVGV4dCIsImNob3NlblZhbHVlIiwidGV4dCIsInN1YnN0cmluZyIsInRyaW0iLCJnZXREYXRhRmllbGROYW1lIiwicHJvcCIsImZvcm0iLCJmaWxsT3RoZXJBZGRyZXNzIiwiYWpheCIsInNlcmlhbGl6ZSIsImRhdGFTdWNjZXNzRGl2Iiwibm9BZGRyZXNzIiwiZmlsbERhdGFBZnRlclNhdmUiLCJnZXRPdGhlckFkZHJlc3NUeXBlIiwic2hvd01haW5Gb3JtIiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0IiwiZmllbGRFcnJvciIsImFmdGVyIiwiZmlsbEFkZHJlc3MiLCJmaWVsZElkIiwia2VlcENhbWVsRmllbGQiLCJkYXRhVG9GaWxsIiwicmVnZXgiLCJpbmNsdWRlcyIsIm90aGVyQWRkcmVzc1R5cGUiLCJmaWxsT3RoZXJGb3JtIiwib3RoZXJGaWVsZElkIiwiaWRUb0ZpbGwiLCJuZXdWYWx1ZSIsImZvcm1GaWVsZE5hbWUiLCJmaWVsZFRvUmVwbGFjZSIsIm9sZERhdGEiLCJjbGFzc05hbWUiLCJmaWVsZE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInRleHRUb1JlcGxhY2UiLCJzZWxlY3RvclR5cGUiLCJtYXRjaGVzIiwiY29udGFjdFBhZ2UiLCJtb2RhbCIsInN0YXR1cyIsImVycm9yTGlzdCIsInRvQXJyYXkiLCJvdXRlclRleHQiLCJsb2dpblBhZ2UiLCJtb2RhbElkIiwiZm9ybUVsZW1lbnQiLCJ2ZXJpZnlBY2NvdW50T2JqZWN0IiwibG9hZEFqYXhQYXNzd29yZFJlc2V0IiwibW9kYWxCb2R5IiwicmVnaXN0ZXJGb3JtIiwiaW5wdXRSZWdpc3RlckZvcm0iLCJpbnZhbGlkU3BhbiIsInByaWNlQ29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlIiwicHJpY2VNaW5TZWxlY3RvciIsInByaWNlTWF4U2VsZWN0b3IiLCJwcm9kdWN0IiwiYnVuZGxlSXRlbSIsInZhcmlhbnRMaXN0Q29udGFpbmVyIiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwiU3lsaXVzQWRkVG9DYXJ0IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsImNsb25lTm9kZSIsInJlcXVlc3QiLCJyZXNwb25zZURhdGEiLCJsYXN0IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbCIsInByb2R1Y3RfaWQiLCJ0b1N0cmluZyIsImNhcnRXaWRnZXRDb250YWluZXIiLCJhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIiwiZG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMiLCJ1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIiwidXBkYXRlQ2FydFdpZGdldCIsImNhcnRDb3VudCIsImFkZFRvQ2FydEZ1bmN0aW9ucyIsImFkZFRvQ2FydCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJTeWxpdXNMb2FkYWJsZUZvcm0iLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsInJlZGlyZWN0VXJsIiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJjb250YWlucyIsIlN5bGl1c1VwZGF0ZVF1YW50aXR5IiwibmV3UXVhbnRpdHkiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtC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OztBQ0F4RDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSwwR0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUsaUhBQWtELEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLHFIQUFzRCxFOzs7Ozs7Ozs7Ozs7QUNBckU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBeEQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhUXVlc3Rpb25DaXJjbGUsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNSYXRpbmcge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJhdGluZ01heCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nTWF4KSB8fCA1O1xuICAgICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlKSB8fCAwO1xuICAgICAgdGhpcy52aWV3T25seSA9IHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdWaWV3b25seSAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuYnRuT25FbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vbl0nKTtcbiAgICAgIHRoaXMuYnRuT2ZmRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb2ZmXScpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnJhdGluZ01heDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWxlbWVudC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUgPSBpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T25seSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPD0gdGhpcy5yYXRpbmdBdmVyYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PbkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9mZkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0VmFsdWUoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUpO1xuICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzLm9uUmF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmF0aW5nO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IodHJpZ2dlcikge1xuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50cmlnZ2VyLmRhdGFzZXQuanNUb2dnbGUpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlci5jaGVja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNsYXNzIFN5bGl1c1ZhcmlhbnRJbWFnZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LWltYWdlXScpO1xuICAgIHRoaXMubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2VMaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlTGluayA9IHRoaXMubWFpbkltYWdlTGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZVNyYyA9IHRoaXMubWFpbkltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldEltYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgaW5wdXRbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl06Y2hlY2tlZCwgXG4gICAgICBzZWxlY3RbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdIG9wdGlvbjpjaGVja2VkXG4gICAgYCk7XG5cbiAgICByZXR1cm4gWy4uLml0ZW1zXS5tYXAoZWwgPT4gZWwudmFsdWUpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUltYWdlU3JjKHZhcmlhbnQpIHtcbiAgICBsZXQgaW1hZ2VMaW5rID0gdGhpcy5kZWZhdWx0SW1hZ2VMaW5rO1xuICAgIGxldCBpbWFnZVNyYyA9IHRoaXMuZGVmYXVsdEltYWdlU3JjO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1jb2RlPVwiJHt2YXJpYW50fVwiXSwgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtb3B0aW9ucz1cIiR7dmFyaWFudH0gXCJdXG4gICAgYCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1qcy1wcm9kdWN0LXRodW1ibmFpbF0nKTtcbiAgICAgIGltYWdlTGluayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBpbWFnZVNyYyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFyZ2UtdGh1bWJuYWlsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1hZ2VMaW5rLCBpbWFnZVNyYyB9O1xuICB9XG5cbiAgc2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRBY3RpdmVJbWFnZVNyYyh0aGlzLmdldEFjdGl2ZVZhcmlhbnQoKSk7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGltZy5pbWFnZUxpbmspO1xuICAgIHRoaXMubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmltYWdlU3JjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50SW1hZ2VzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSAnJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IHNlbGVjdFtkYXRhLW9wdGlvbl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHNlbGVjdG9yICs9IGBbZGF0YS0ke3NlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAocHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdW5hdmFpbGFibGUtdGV4dCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtdmFyaWFudC1wcmljZV0nKS5pbm5lckhUTUw7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBzeWxpdXNWYXJpYW50c1ByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKSB8fCBudWxsO1xuICBjb25zdCBzeWxpdXNQcm9kdWN0VmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXByb2R1Y3QtdmFyaWFudHMnKSB8fCBudWxsO1xuXG4gIGlmIChzeWxpdXNWYXJpYW50c1ByaWNpbmcpIHtcbiAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICB9IGVsc2UgaWYgKHN5bGl1c1Byb2R1Y3RWYXJpYW50cykge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50c1ByaWNlcztcbiIsIi8qIEpTIHBsdWdpbnMgKi9cbmltcG9ydCAncG9wcGVyLmpzL2Rpc3QvcG9wcGVyLm1pbic7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCAnLi9pbmRleEJvb3RzdHJhcFRoZW1lJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcblxuLyogQ3NzIGZpbGVzICovXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbi8qIE1lZGlhIGZpbGVzICovXG5pbXBvcnQgJy4vbWVkaWEvbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JldHVybi1wb2xpY3kucG5nJztcbmltcG9ydCAnLi9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tYXN0ZXJjYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvdmlzYS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3BheXBhbC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NvbGlzc2ltby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2Nocm9ub3Bvc3QucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYWNjb3VudC1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9iYWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbmV4dC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZnIucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWRlLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1pdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZXMucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVuLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmVsb2FkLnBuZyc7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcblxuIiwiLyoqXG4gKiBGcmVzY28gLSBBIEJlYXV0aWZ1bCBSZXNwb25zaXZlIExpZ2h0Ym94IC0gdjIuMy4wXG4gKiAoYykgMjAxMi0yMDE5IE5pY2sgU3Rha2VuYnVyZ1xuICpcbiAqIGh0dHBzOi8vd3d3LmZyZXNjb2pzLmNvbVxuICpcbiAqIEBsaWNlbnNlOiBodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wXG4gKi9cbiFmdW5jdGlvbihpLGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImpxdWVyeVwiKSk6aS5GcmVzY289ZShqUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKCQpe3ZhciBGcmVzY289e307JC5leHRlbmQoRnJlc2NvLHt2ZXJzaW9uOlwiMi4zLjBcIn0pLEZyZXNjby5Ta2lucz17ZnJlc2NvOnt9fTt2YXIgQm91bmRzPXt2aWV3cG9ydDpmdW5jdGlvbigpe3ZhciBpPXt3aWR0aDokKHdpbmRvdykud2lkdGgoKX07aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZCYmQnJvd3Nlci5HZWNrbyl7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoO2kuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCplfWVsc2UgaS5oZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3JldHVybiBpfX0sQnJvd3Nlcj0oZT1uYXZpZ2F0b3IudXNlckFnZW50LHtJRTohKCF3aW5kb3cuYXR0YWNoRXZlbnR8fC0xIT09ZS5pbmRleE9mKFwiT3BlcmFcIikpJiZmKFwiTVNJRSBcIiksT3BlcmE6LTE8ZS5pbmRleE9mKFwiT3BlcmFcIikmJighIXdpbmRvdy5vcGVyYSYmb3BlcmEudmVyc2lvbiYmcGFyc2VGbG9hdChvcGVyYS52ZXJzaW9uKCkpfHw3LjU1KSxXZWJLaXQ6LTE8ZS5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpJiZmKFwiQXBwbGVXZWJLaXQvXCIpLEdlY2tvOi0xPGUuaW5kZXhPZihcIkdlY2tvXCIpJiYtMT09PWUuaW5kZXhPZihcIktIVE1MXCIpJiZmKFwicnY6XCIpLE1vYmlsZVNhZmFyaTohIWUubWF0Y2goL0FwcGxlLipNb2JpbGUuKlNhZmFyaS8pLENocm9tZTotMTxlLmluZGV4T2YoXCJDaHJvbWVcIikmJmYoXCJDaHJvbWUvXCIpLENocm9tZU1vYmlsZTotMTxlLmluZGV4T2YoXCJDck1vXCIpJiZmKFwiQ3JNby9cIiksQW5kcm9pZDotMTxlLmluZGV4T2YoXCJBbmRyb2lkXCIpJiZmKFwiQW5kcm9pZCBcIiksSUVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiSUVNb2JpbGVcIikmJmYoXCJJRU1vYmlsZS9cIil9KSxlO2Z1bmN0aW9uIGYoaSl7dmFyIHQ9bmV3IFJlZ0V4cChpK1wiKFtcXFxcZC5dKylcIikuZXhlYyhlKTtyZXR1cm4hdHx8cGFyc2VGbG9hdCh0WzFdKX12YXIgX3NsaWNlPUFycmF5LnByb3RvdHlwZS5zbGljZTtmdW5jdGlvbiBiYXNlVG9TdHJpbmcoaSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGk/aTpudWxsPT1pP1wiXCI6aStcIlwifXZhciBfPXtpc0VsZW1lbnQ6ZnVuY3Rpb24oaSl7cmV0dXJuIGkmJjE9PT1pLm5vZGVUeXBlfSxTdHJpbmc6e2NhcGl0YWxpemU6ZnVuY3Rpb24oaSl7cmV0dXJuKGk9YmFzZVRvU3RyaW5nKGkpKSYmaS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnNsaWNlKDEpfX19OyQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIixmdW5jdGlvbihpKXt2YXIgZTtpZihpLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YT9lPWkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhLzEyMDppLm9yaWdpbmFsRXZlbnQuZGV0YWlsJiYoZT0taS5vcmlnaW5hbEV2ZW50LmRldGFpbC8zKSxlKXt2YXIgdD0kLkV2ZW50KFwiZnJlc2NvOm1vdXNld2hlZWxcIik7JChpLnRhcmdldCkudHJpZ2dlcih0LGUpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaS5zdG9wUHJvcGFnYXRpb24oKSx0LmlzRGVmYXVsdFByZXZlbnRlZCgpJiZpLnByZXZlbnREZWZhdWx0KCl9fSk7dmFyIEZpdD17d2l0aGluOmZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0PSQuZXh0ZW5kKHtoZWlnaHQ6ITAsd2lkdGg6ITB9LGFyZ3VtZW50c1syXXx8e30pLHM9JC5leHRlbmQoe30sZSksbj0xLG89NSxhPXQud2lkdGgsaD10LmhlaWdodDswPG8mJihhJiZzLndpZHRoPmkud2lkdGh8fGgmJnMuaGVpZ2h0PmkuaGVpZ2h0KTspe3ZhciByPTEsZD0xO2EmJnMud2lkdGg+aS53aWR0aCYmKHI9aS53aWR0aC9zLndpZHRoKSxoJiZzLmhlaWdodD5pLmhlaWdodCYmKGQ9aS5oZWlnaHQvcy5oZWlnaHQpLG49TWF0aC5taW4ocixkKSxzPXt3aWR0aDplLndpZHRoKm4saGVpZ2h0OmUuaGVpZ2h0Km59LG8tLX1yZXR1cm4gcy53aWR0aD1NYXRoLm1heChzLndpZHRoLDApLHMuaGVpZ2h0PU1hdGgubWF4KHMuaGVpZ2h0LDApLHN9fTskLmV4dGVuZCgkLmVhc2luZyx7ZnJlc2NvRWFzZUluQ3ViaWM6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcyooZS89bikqZSplK3R9LGZyZXNjb0Vhc2VJblNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4tcypNYXRoLmNvcyhlL24qKE1hdGguUEkvMikpK3MrdH0sZnJlc2NvRWFzZU91dFNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcypNYXRoLnNpbihlL24qKE1hdGguUEkvMikpK3R9fSk7dmFyIFN1cHBvcnQ9KE89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxQPVwiV2Via2l0IE1veiBPIG1zIEtodG1sXCIuc3BsaXQoXCIgXCIpLHtjYW52YXM6KGJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksISghYmEuZ2V0Q29udGV4dHx8IWJhLmdldENvbnRleHQoXCIyZFwiKSkpLGNzczp7YW5pbWF0aW9uOlMoXCJhbmltYXRpb25cIiksdHJhbnNmb3JtOlMoXCJ0cmFuc2Zvcm1cIikscHJlZml4ZWQ6ZnVuY3Rpb24oaSl7cmV0dXJuIFMoaSxcInByZWZpeFwiKX19LHN2ZzohIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyYmISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QsdG91Y2g6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl9Y2F0Y2goaSl7cmV0dXJuITF9fSgpfSksYmEsTyxQO2Z1bmN0aW9uIFMoaSxlKXt2YXIgdD1pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc3Vic3RyKDEpO3JldHVybiBmdW5jdGlvbihpLGUpe2Zvcih2YXIgdCBpbiBpKWlmKHZvaWQgMCE9PU8uc3R5bGVbaVt0XV0pcmV0dXJuXCJwcmVmaXhcIiE9PWV8fGlbdF07cmV0dXJuITF9KChpK1wiIFwiK1Auam9pbih0K1wiIFwiKSt0KS5zcGxpdChcIiBcIiksZSl9U3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaD1mdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2g9U3VwcG9ydC50b3VjaCYmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWR8fEJyb3dzZXIuSUVNb2JpbGV8fEJyb3dzZXIuQ2hyb21lTW9iaWxlfHwhL14oV2lufE1hY3xMaW51eCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSl9LFN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2goKTt2YXIgSW1hZ2VSZWFkeT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07ZnVuY3Rpb24gVGltZXJzKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfWZ1bmN0aW9uIGdldFVSSURhdGEocyl7dmFyIG49e3R5cGU6XCJpbWFnZVwifTtyZXR1cm4gJC5lYWNoKFR5cGVzLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5kYXRhKHMpO3QmJigobj10KS50eXBlPWksbi51cmw9cyl9KSxufWZ1bmN0aW9uIGRldGVjdEV4dGVuc2lvbihpKXt2YXIgZT0oaXx8XCJcIikucmVwbGFjZSgvXFw/LiovZyxcIlwiKS5tYXRjaCgvXFwuKFteLl17Myw0fSkkLyk7cmV0dXJuIGU/ZVsxXS50b0xvd2VyQ2FzZSgpOm51bGx9JC5leHRlbmQoSW1hZ2VSZWFkeS5wcm90b3R5cGUse3N1cHBvcnRzOntuYXR1cmFsV2lkdGg6XCJuYXR1cmFsV2lkdGhcImluIG5ldyBJbWFnZX0saW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5pbWc9JChpKVswXSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMuaXNMb2FkZWQ9ITEsdGhpcy5vcHRpb25zPSQuZXh0ZW5kKHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixwb2xsRmFsbGJhY2tBZnRlcjoxZTN9LGFyZ3VtZW50c1szXXx8e30pLHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRoJiZcIm9ubG9hZFwiIT09dGhpcy5vcHRpb25zLm1ldGhvZD90aGlzLmltZy5jb21wbGV0ZSYmXCJ1bmRlZmluZWRcIiE9PSQudHlwZSh0aGlzLmltZy5uYXR1cmFsV2lkdGgpP3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpezA8dGhpcy5pbWcubmF0dXJhbFdpZHRoP3RoaXMuc3VjY2VzcygpOnRoaXMuZXJyb3IoKX0sdGhpcykpOigkKHRoaXMuaW1nKS5iaW5kKFwiZXJyb3JcIiwkLnByb3h5KGZ1bmN0aW9uKCl7c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lcnJvcigpfSx0aGlzKSl9LHRoaXMpKSx0aGlzLmludGVydmFscz1bWzFlMywxMF0sWzJlMyw1MF0sWzRlMywxMDBdLFsyZTQsNTAwXV0sdGhpcy5faXBvcz0wLHRoaXMuX3RpbWU9MCx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXSx0aGlzLnBvbGwoKSk6c2V0VGltZW91dCgkLnByb3h5KHRoaXMuZmFsbGJhY2ssdGhpcykpfSxwb2xsOmZ1bmN0aW9uKCl7dGhpcy5fcG9sbGluZz1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtpZigwPHRoaXMuaW1nLm5hdHVyYWxXaWR0aCl0aGlzLnN1Y2Nlc3MoKTtlbHNle2lmKHRoaXMuX3RpbWUrPXRoaXMuX2RlbGF5LHRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmdGhpcy5fdGltZT49dGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiYhdGhpcy5fdXNlZFBvbGxGYWxsYmFjayYmKHRoaXMuX3VzZWRQb2xsRmFsbGJhY2s9ITAsdGhpcy5mYWxsYmFjaygpKSx0aGlzLl90aW1lPnRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzBdKXtpZighdGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvcysxXSlyZXR1cm4gdm9pZCB0aGlzLmVycm9yKCk7dGhpcy5faXBvcysrLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdfXRoaXMucG9sbCgpfX0sdGhpcyksdGhpcy5fZGVsYXkpfSxmYWxsYmFjazpmdW5jdGlvbigpe3ZhciBpPW5ldyBJbWFnZTsodGhpcy5fZmFsbGJhY2tJbWc9aSkub25sb2FkPSQucHJveHkoZnVuY3Rpb24oKXtpLm9ubG9hZD1mdW5jdGlvbigpe30sdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGh8fCh0aGlzLmltZy5uYXR1cmFsV2lkdGg9aS53aWR0aCx0aGlzLmltZy5uYXR1cmFsSGVpZ2h0PWkuaGVpZ2h0KSx0aGlzLnN1Y2Nlc3MoKX0sdGhpcyksaS5vbmVycm9yPSQucHJveHkodGhpcy5lcnJvcix0aGlzKSxpLnNyYz10aGlzLmltZy5zcmN9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5fZmFsbGJhY2tJbWcmJih0aGlzLl9mYWxsYmFja0ltZy5vbmxvYWQ9ZnVuY3Rpb24oKXt9KSx0aGlzLl9wb2xsaW5nJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3BvbGxpbmcpLHRoaXMuX3BvbGxpbmc9bnVsbCl9LHN1Y2Nlc3M6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRTdWNjZXNzfHwodGhpcy5fY2FsbGVkU3VjY2Vzcz0hMCx0aGlzLmlzTG9hZGVkPSEwLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKHRoaXMpKX0sZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRFcnJvcnx8KHRoaXMuX2NhbGxlZEVycm9yPSEwLHRoaXMuYWJvcnQoKSx0aGlzLmVycm9yQ2FsbGJhY2smJnRoaXMuZXJyb3JDYWxsYmFjayh0aGlzKSl9fSksJC5leHRlbmQoVGltZXJzLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX3RpbWVycz17fX0sc2V0OmZ1bmN0aW9uKGksZSx0KXt0aGlzLl90aW1lcnNbaV09c2V0VGltZW91dChlLHQpfSxnZXQ6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXMuX3RpbWVyc1tpXX0sY2xlYXI6ZnVuY3Rpb24oaSl7aT90aGlzLl90aW1lcnNbaV0mJihjbGVhclRpbWVvdXQodGhpcy5fdGltZXJzW2ldKSxkZWxldGUgdGhpcy5fdGltZXJzW2ldKTp0aGlzLmNsZWFyQWxsKCl9LGNsZWFyQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RpbWVycyxmdW5jdGlvbihpLGUpe2NsZWFyVGltZW91dChlKX0pLHRoaXMuX3RpbWVycz17fX19KTt2YXIgVHlwZT17aXNWaWRlbzpmdW5jdGlvbihpKXtyZXR1cm4vXih5b3V0dWJlfHZpbWVvKSQvLnRlc3QoaSl9fSxUeXBlcz17aW1hZ2U6e2V4dGVuc2lvbnM6XCJibXAgZ2lmIGpwZWcganBnIHBuZyB3ZWJwXCIsZGV0ZWN0OmZ1bmN0aW9uKGkpe3JldHVybi0xPCQuaW5BcnJheShkZXRlY3RFeHRlbnNpb24oaSksdGhpcy5leHRlbnNpb25zLnNwbGl0KFwiIFwiKSl9LGRhdGE6ZnVuY3Rpb24oaSl7cmV0dXJuISF0aGlzLmRldGVjdCgpJiZ7ZXh0ZW5zaW9uOmRldGVjdEV4dGVuc2lvbihpKX19fSx2aW1lbzp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8odmltZW9cXC5jb20pXFwvKFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpO3JldHVybiEoIWV8fCFlWzJdKSYmZVsyXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19LHlvdXR1YmU6e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC93YXRjaFxcPyg/PS4qdmk/PShbYS16QS1aMC05LV9dKykpKD86XFxTKyk/JC8uZXhlYyhpKTtyZXR1cm4gZSYmZVsyXT9lWzJdOiEoIShlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLyh2aT9cXC98dVxcL3xlbWJlZFxcLyk/KFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpKXx8IWVbM10pJiZlWzNdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX19LFZpbWVvVGh1bWJuYWlsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy51cmw9aSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGkuZGF0YS51cmwpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2lmKGkmJmkudGh1bWJuYWlsX3VybCl7dmFyIGU9e3VybDppLnRodW1ibmFpbF91cmx9O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGUudXJsKX1lbHNlIHRoaXMuZXJyb3JDYWxsYmFjaygpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksVmltZW9SZWFkeT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnVybD1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLmNhbGxiYWNrKGkuZGF0YSk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImbWF4d2lkdGg9OTk5OTk5OSZtYXhoZWlnaHQ9OTk5OTk5OSZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT17ZGltZW5zaW9uczp7d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHR9fTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrKGUpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksT3B0aW9ucz17ZGVmYXVsdHM6e2VmZmVjdHM6e2NvbnRlbnQ6e3Nob3c6MCxoaWRlOjB9LHNwaW5uZXI6e3Nob3c6MTUwLGhpZGU6MTUwfSx3aW5kb3c6e3Nob3c6NDQwLGhpZGU6MzAwfSx0aHVtYm5haWw6e3Nob3c6MzAwLGRlbGF5OjE1MH0sdGh1bWJuYWlsczp7c2xpZGU6MH19LGtleWJvYXJkOntsZWZ0OiEwLHJpZ2h0OiEwLGVzYzohMH0sbG9hZGVkTWV0aG9kOlwibmF0dXJhbFdpZHRoXCIsbG9vcDohMSxvbkNsaWNrOlwicHJldmlvdXMtbmV4dFwiLG92ZXJmbG93OiExLG92ZXJsYXk6e2Nsb3NlOiEwfSxwcmVsb2FkOlsxLDJdLHBvc2l0aW9uOiEwLHNraW46XCJmcmVzY29cIixzcGlubmVyOiEwLHNwaW5uZXJEZWxheTozMDAsc3luYzohMCx0aHVtYm5haWxzOlwiaG9yaXpvbnRhbFwiLHVpOlwib3V0c2lkZVwiLHVpRGVsYXk6M2UzLHZpbWVvOnthdXRvcGxheToxLGFwaToxLHRpdGxlOjEsYnlsaW5lOjEscG9ydHJhaXQ6MCxsb29wOjB9LHlvdXR1YmU6e2F1dG9wbGF5OjEsY29udHJvbHM6MSxlbmFibGVqc2FwaToxLGhkOjEsaXZfbG9hZF9wb2xpY3k6Myxsb29wOjAsbW9kZXN0YnJhbmRpbmc6MSxyZWw6MCx2cTpcImhkMTA4MFwifSxpbml0aWFsVHlwZU9wdGlvbnM6e2ltYWdlOnt9LHZpbWVvOnt3aWR0aDoxMjgwfSx5b3V0dWJlOnt3aWR0aDoxMjgwLGhlaWdodDo3MjB9fX0sY3JlYXRlOmZ1bmN0aW9uKGksZSx0KXt0PXR8fHt9LChpPWl8fHt9KS5za2luPWkuc2tpbnx8dGhpcy5kZWZhdWx0cy5za2luO3ZhciBzPWkuc2tpbj8kLmV4dGVuZCh7fSxGcmVzY28uU2tpbnNbaS5za2luXXx8RnJlc2NvLlNraW5zW3RoaXMuZGVmYXVsdHMuc2tpbl0pOnt9LG49JC5leHRlbmQoITAse30sdGhpcy5kZWZhdWx0cyxzKTtuLmluaXRpYWxUeXBlT3B0aW9ucyYmKGUmJm4uaW5pdGlhbFR5cGVPcHRpb25zW2VdJiYobj0kLmV4dGVuZCghMCx7fSxuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSxuKSksZGVsZXRlIG4uaW5pdGlhbFR5cGVPcHRpb25zKTt2YXIgbz0kLmV4dGVuZCghMCx7fSxuLGkpO2lmKFN1cHBvcnQubW9iaWxlVG91Y2gmJlwiaW5zaWRlXCI9PT1vLnVpJiYoby51aT1cIm91dHNpZGVcIiksKCFvLmVmZmVjdHN8fEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSkmJihvLmVmZmVjdHM9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMuZWZmZWN0cyxmdW5jdGlvbihlLGkpeyQuZWFjaChvLmVmZmVjdHNbZV09JC5leHRlbmQoe30saSksZnVuY3Rpb24oaSl7by5lZmZlY3RzW2VdW2ldPTB9KX0pLG8uc3Bpbm5lcj0hMSksby5rZXlib2FyZCYmKFwiYm9vbGVhblwiPT09JC50eXBlKG8ua2V5Ym9hcmQpJiYoby5rZXlib2FyZD17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5rZXlib2FyZCxmdW5jdGlvbihpLGUpe28ua2V5Ym9hcmRbaV09ITB9KSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwkLmV4dGVuZChvLmtleWJvYXJkLHtsZWZ0OiExLHJpZ2h0OiExfSkpLCFvLm92ZXJmbG93fHxTdXBwb3J0Lm1vYmlsZVRvdWNoP28ub3ZlcmZsb3c9e3g6ITEseTohMX06XCJib29sZWFuXCI9PT0kLnR5cGUoby5vdmVyZmxvdykmJihvLm92ZXJmbG93PXt4OiExLHk6ITB9KSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fChvLm92ZXJsYXA9ITEpLChCcm93c2VyLklFJiZCcm93c2VyLklFPDl8fFN1cHBvcnQubW9iaWxlVG91Y2gpJiYoby50aHVtYm5haWw9ITEsby50aHVtYm5haWxzPSExKSxcInlvdXR1YmVcIiE9PWUmJihvLndpZHRoJiYhby5tYXhXaWR0aCYmKG8ubWF4V2lkdGg9by53aWR0aCksby5oZWlnaHQmJiFvLm1heEhlaWdodCYmKG8ubWF4SGVpZ2h0PW8uaGVpZ2h0KSksIW8udGh1bWJuYWlsJiZcImJvb2xlYW5cIiE9PSQudHlwZShvLnRodW1ibmFpbCkpe3ZhciBhPSExO3N3aXRjaChlKXtjYXNlXCJ5b3V0dWJlXCI6YT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiK1wiLy9pbWcueW91dHViZS5jb20vdmkvXCIrdC5pZCtcIi8wLmpwZ1wiO2JyZWFrO2Nhc2VcImltYWdlXCI6Y2FzZVwidmltZW9cIjphPSEwfW8udGh1bWJuYWlsPWF9cmV0dXJuIG99fSxPdmVybGF5PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMudmlzaWJsZT0hMX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheVwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXktYmFja2dyb3VuZFwiKSksdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZpLnZpZXcmJmkudmlldy5vcHRpb25zLm92ZXJsYXkmJiFpLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHxXaW5kb3cuaGlkZSgpfSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIrdGhpcy5za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIraSksdGhpcy5za2luPWl9LGF0dGFjaDpmdW5jdGlvbigpeyQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5kZXRhY2goKX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLm1heCgpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSl7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZXx8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQoc3x8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSx0aGlzLnZpc2libGU9ITEsaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LGdldFNjcm9sbERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgbj17fTtyZXR1cm4gJC5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oaSxlKXt2YXIgdD1lLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSkscz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7bltlXT0oQnJvd3Nlci5JRT9NYXRoLm1heChzW1wib2Zmc2V0XCIrdF0sc1tcInNjcm9sbFwiK3RdKTpCcm93c2VyLldlYktpdD9kb2N1bWVudC5ib2R5W1wic2Nyb2xsXCIrdF06c1tcInNjcm9sbFwiK3RdKXx8MH0pLG59LG1heDpmdW5jdGlvbigpe3ZhciBpO2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZCcm93c2VyLldlYktpdCYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4JiYoaT10aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuY3NzKGkpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpe3ZhciBlPUJvdW5kcy52aWV3cG9ydCgpO3RoaXMuZWxlbWVudC5jc3Moe2hlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRofSl9U3VwcG9ydC5tb2JpbGVUb3VjaCYmIWkmJnRoaXMuZWxlbWVudC5jc3Moe2hlaWdodDp0aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKS5oZWlnaHR9KX19LFdpbmRvdz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzPVtdLHRoaXMucXVldWVzLmhpZGU9JCh7fSksdGhpcy5wYWdlcz1bXSx0aGlzLl90cmFja2luZz1bXSx0aGlzLl9maXJzdD0hMCx0aGlzLnRpbWVycz1uZXcgVGltZXJzLHRoaXMuYnVpbGQoKSx0aGlzLnNldFNraW4oT3B0aW9ucy5kZWZhdWx0cy5za2luKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZih0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItd2luZG93IGZyLW1lYXN1cmVkXCIpLmhpZGUoKS5hcHBlbmQodGhpcy5fYm94PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWJveFwiKS5hcHBlbmQodGhpcy5fcGFnZXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZXNcIikpKS5hcHBlbmQodGhpcy5fdGh1bWJuYWlscz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzXCIpKSxPdmVybGF5LmluaXRpYWxpemUoKSxQYWdlcy5pbml0aWFsaXplKHRoaXMuX3BhZ2VzKSxUaHVtYm5haWxzLmluaXRpYWxpemUodGhpcy5fdGh1bWJuYWlscyksU3Bpbm5lci5pbml0aWFsaXplKCksVUkuaW5pdGlhbGl6ZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQubW9iaWxlVG91Y2g/XCJcIjpcIi1ub1wiKStcIi1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5zdmc/XCJcIjpcIi1ub1wiKStcIi1zdmdcIiksQnJvd3Nlci5JRSlmb3IodmFyIGk9NztpPD05O2krKylCcm93c2VyLklFPGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWx0SUVcIitpKTt0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXNraW4tXCIraSksT3ZlcmxheS5zZXRTa2luKGkpLHRoaXMuX3NraW49aX0sc2V0U2hvd2luZ1R5cGU6ZnVuY3Rpb24oaSl7dGhpcy5fc2hvd2luZ1R5cGUhPT1pJiYodGhpcy5fc2hvd2luZ1R5cGUmJih0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIrdGhpcy5fc2hvd2luZ1R5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLl9zaG93aW5nVHlwZSkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK2kpLFR5cGUuaXNWaWRlbyhpKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpLHRoaXMuX3Nob3dpbmdUeXBlPWkpfSxzdGFydE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcnx8JCh3aW5kb3cpLm9uKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPSQucHJveHkodGhpcy5fb25XaW5kb3dSZXNpemUsdGhpcykpfSxzdG9wT2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyJiYoJCh3aW5kb3cpLm9mZihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciksdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPW51bGwpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnRpbWVycy5zZXQoXCJzY3JvbGxcIiwkLnByb3h5KHRoaXMuYWRqdXN0VG9TY3JvbGwsdGhpcyksMCl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3ZhciBpOyhpPVBhZ2VzLnBhZ2UpJiYoVGh1bWJuYWlscy5maXRUb1ZpZXdwb3J0KCksdGhpcy51cGRhdGVCb3hEaW1lbnNpb25zKCksaS5maXRUb0JveCgpLFVJLnVwZGF0ZSgpLFVJLmFkanVzdFByZXZOZXh0KG51bGwsMCksU3Bpbm5lci5jZW50ZXIoKSxPdmVybGF5Lm1heCgpLFVJLl9vbldpbmRvd1Jlc2l6ZSgpLHRoaXMuX29uU2Nyb2xsKCkpfSxhZGp1c3RUb1Njcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5jc3Moe3RvcDokKHdpbmRvdykuc2Nyb2xsVG9wKCl9KX0sZ2V0Qm94RGltZW5zaW9uczpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib3hEaW1lbnNpb25zfSx1cGRhdGVCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7aWYoUGFnZXMucGFnZSl7dmFyIGk9Qm91bmRzLnZpZXdwb3J0KCksZT1UaHVtYm5haWxzLmdldERpbWVuc2lvbnMoKSx0PVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247dGhpcy5fYm94RGltZW5zaW9ucz17d2lkdGg6dD9pLndpZHRoOmkud2lkdGgtZS53aWR0aCxoZWlnaHQ6dD9pLmhlaWdodC1lLmhlaWdodDppLmhlaWdodH0sdGhpcy5fYm94UG9zaXRpb249e3RvcDowLGxlZnQ6dD8wOmUud2lkdGh9LHRoaXMuX2JveC5jc3MoJC5leHRlbmQoe30sdGhpcy5fYm94RGltZW5zaW9ucyx0aGlzLl9ib3hQb3NpdGlvbikpfX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5vcGVuaW5nPSEwLHRoaXMuYXR0YWNoKCksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKSx0aGlzLmFkanVzdFRvU2Nyb2xsKCk7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MCxzPTI7T3ZlcmxheVtQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vdmVybGF5P1wic2hvd1wiOlwiaGlkZVwiXShmdW5jdGlvbigpe2kmJi0tczwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcInNob3ctd2luZG93XCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Nob3coJC5wcm94eShmdW5jdGlvbigpe3RoaXMub3BlbmluZz0hMSxpJiYtLXM8MSYmaSgpfSx0aGlzKSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsNTApOjEpfX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGUpe2lmKHRoaXMudmlldyl7dmFyIGk9dGhpcy5xdWV1ZXMuaGlkZTtpLnF1ZXVlKFtdKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpO3ZhciB0PVBhZ2VzLnBhZ2U/UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZTowO2kucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5zdG9wKCksU3Bpbm5lci5oaWRlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1VJLmRpc2FibGUoKSxVSS5oaWRlKG51bGwsdCksS2V5Ym9hcmQuZGlzYWJsZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0yO3RoaXMuX2hpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJoaWRlLW92ZXJsYXlcIiwkLnByb3h5KGZ1bmN0aW9uKCl7T3ZlcmxheS5oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDE1MCk6MSksdGhpcy5fZmlyc3Q9ITB9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fcmVzZXQoKSx0aGlzLnN0b3BPYnNlcnZpbmdSZXNpemUoKSxQYWdlcy5yZW1vdmVBbGwoKSxUaHVtYm5haWxzLmNsZWFyKCksdGhpcy50aW1lcnMuY2xlYXIoKSx0aGlzLl9wb3NpdGlvbj0tMTt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5hZnRlckhpZGU7XCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZlLmNhbGwoRnJlc2NvKSx0aGlzLnZpZXc9bnVsbCx0aGlzLm9wZW5pbmc9ITEsdGhpcy5jbG9zaW5nPSExLHRoaXMuZGV0YWNoKCksaSgpfSx0aGlzKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7ZSgpLGkoKX0sdGhpcykpfX0sX2hpZGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGUpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHQsaSl9LGxvYWQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXdzPWksdGhpcy5hdHRhY2goKSxUaHVtYm5haWxzLmxvYWQoaSksUGFnZXMubG9hZChpKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nUmVzaXplKCksZSYmdGhpcy5zZXRQb3NpdGlvbihlKX0sc2V0UG9zaXRpb246ZnVuY3Rpb24oaSxlKXt0aGlzLl9wb3NpdGlvbj1pLHRoaXMudmlldz10aGlzLnZpZXdzW2ktMV0sdGhpcy5zdG9wSGlkZVF1ZXVlKCksdGhpcy5wYWdlPVBhZ2VzLnNob3coaSwkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSl9LHN0b3BIaWRlUXVldWU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5oaWRlLnF1ZXVlKFtdKX0sX3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy52aXNpYmxlPSExLFVJLmhpZGUobnVsbCwwKSxVSS5yZXNldCgpfSxtYXlQcmV2aW91czpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJnRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGh8fDEhPT10aGlzLl9wb3NpdGlvbn0scHJldmlvdXM6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlQcmV2aW91cygpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLnByZXZpb3VzKX0sbWF5TmV4dDpmdW5jdGlvbigpe3ZhciBpPXRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmaXx8aSYmMSE9PXRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dH0sbmV4dDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heU5leHQoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0KX0sZ2V0U3Vycm91bmRpbmdJbmRleGVzOmZ1bmN0aW9uKCl7aWYoIXRoaXMudmlld3MpcmV0dXJue307dmFyIGk9dGhpcy5fcG9zaXRpb24sZT10aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm57cHJldmlvdXM6aTw9MT9lOmktMSxuZXh0OmU8PWk/MTppKzF9fX0sS2V5Ym9hcmQ9e2VuYWJsZWQ6ITEsa2V5Q29kZTp7bGVmdDozNyxyaWdodDozOSxlc2M6Mjd9LGVuYWJsZTpmdW5jdGlvbihpKXt0aGlzLmRpc2FibGUoKSxpJiYoJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlEb3duLHRoaXMpKS5vbihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5VXAsdGhpcykpLHRoaXMuZW5hYmxlZD1pKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMSx0aGlzLl9vbktleVVwSGFuZGxlciYmKCQoZG9jdW1lbnQpLm9mZihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXIpLm9mZihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyKSx0aGlzLl9vbktleVVwSGFuZGxlcj10aGlzLl9vbktleURvd25IYW5kbGVyPW51bGwpfSxvbktleURvd246ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksZSl7Y2FzZVwibGVmdFwiOldpbmRvdy5wcmV2aW91cygpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6V2luZG93Lm5leHQoKX19fSxvbktleVVwOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGUpe2Nhc2VcImVzY1wiOldpbmRvdy5oaWRlKCl9fX0sZ2V0S2V5QnlLZXlDb2RlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZSBpbiB0aGlzLmtleUNvZGUpaWYodGhpcy5rZXlDb2RlW2VdPT09aSlyZXR1cm4gZTtyZXR1cm4gbnVsbH19LFBhZ2U9KExjPTAsTWM9e30sTmM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS10b3AgZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtYm90dG9tIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1sZWZ0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtcmlnaHQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKSwkLmV4dGVuZChPYy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudmlldz1pLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6MCxoZWlnaHQ6MH0sdGhpcy51aWQ9TGMrKyx0aGlzLl9wb3NpdGlvbj1lLHRoaXMuX3RvdGFsPXQsdGhpcy5fZnVsbENsaWNrPSExLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5xdWV1ZXM9e30sdGhpcy5xdWV1ZXMuc2hvd2hpZGU9JCh7fSl9LGNyZWF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9jcmVhdGVkKXtQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZVwiKS5hcHBlbmQodGhpcy5jb250YWluZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGFpbmVyXCIpKS5jc3Moe29wYWNpdHk6MH0pLmhpZGUoKSk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7aWYoaSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSkmJih0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuaW5mbz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiYodGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLHRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5wb3M9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5jYXB0aW9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5iYWNrZ3JvdW5kPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuY29udGVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50XCIpKSxcImltYWdlXCI9PXRoaXMudmlldy50eXBlJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6dGhpcy52aWV3LnVybH0pKSx0aGlzLmNvbnRlbnQuYXBwZW5kKE5jLmNsb25lKCEwKSkpLGkmJlwib3V0c2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSYmdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucG9zaXRpb25PdXRzaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksXCJpbnNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkpe3RoaXMuY29udGVudC5hcHBlbmQodGhpcy5wcmV2aW91c0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMubmV4dEluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5jbG9zZUluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksKHRoaXMudmlldy5jYXB0aW9ufHxpJiZ0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9uKSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbmZvSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8gZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXJJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMucG9zSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5jYXB0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLnZpZXcuY2FwdGlvbnx8IWl8fHRoaXMudmlldy5ncm91cGVkLmNhcHRpb258fHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5wb3NpdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1pbnNpZGUgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpO3ZhciBlPXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fDEhPXRoaXMuX3Bvc2l0aW9uLHQ9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8dGhpcy5fcG9zaXRpb248dGhpcy5fdG90YWw7dGhpcy5wcmV2aW91c0luc2lkZVsoZT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMubmV4dEluc2lkZVsodD9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpfSQuZWFjaChbXCJ4XCIsXCJ5XCJdLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvd1tlXSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmZsb3ctXCIrZSl9LHRoaXMpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLVwiK3RoaXMudmlldy50eXBlKSxUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLXZpZGVvXCIpLHRoaXMuX3RvdGFsPDImJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLXNpZGVzXCIpLHRoaXMuX2NyZWF0ZWQ9ITB9fSxfZ2V0U3Vycm91bmRpbmdQYWdlczpmdW5jdGlvbigpe3ZhciBpO2lmKCEoaT10aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkKSlyZXR1cm5bXTtmb3IodmFyIGU9W10sdD1NYXRoLm1heCgxLHRoaXMuX3Bvc2l0aW9uLWlbMF0pLHM9TWF0aC5taW4odGhpcy5fcG9zaXRpb24raVsxXSx0aGlzLl90b3RhbCksbj10aGlzLl9wb3NpdGlvbixvPW47bzw9cztvKyspKGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSk7Zm9yKG89bjt0PD1vO28tLSl7dmFyIGE7KGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSl9cmV0dXJuIGV9LHByZWxvYWRTdXJyb3VuZGluZ0ltYWdlczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2dldFN1cnJvdW5kaW5nUGFnZXMoKTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS5wcmVsb2FkKCl9LHRoaXMpKX0scHJlbG9hZDpmdW5jdGlvbigpe3RoaXMucHJlbG9hZGluZ3x8dGhpcy5wcmVsb2FkZWR8fFwiaW1hZ2VcIiE9dGhpcy52aWV3LnR5cGV8fCF0aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkfHx0aGlzLmxvYWRlZHx8KHRoaXMuY3JlYXRlKCksdGhpcy5wcmVsb2FkaW5nPSEwLHRoaXMucHJlbG9hZFJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCx0aGlzLnByZWxvYWRpbmc9ITEsdGhpcy5wcmVsb2FkZWQ9ITAsdGhpcy5kaW1lbnNpb25zPXt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9fSx0aGlzKSxudWxsLHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIn0pKX0sbG9hZDpmdW5jdGlvbihlLGkpe2lmKHRoaXMuY3JlYXRlKCksdGhpcy5sb2FkZWQpZSYmZSgpO2Vsc2Ugc3dpdGNoKHRoaXMuYWJvcnQoKSx0aGlzLmxvYWRpbmc9ITAsdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmKHRoaXMuX3NwaW5uZXJEZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtTcGlubmVyLnNob3coKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKSksdGhpcy52aWV3LnR5cGUpe2Nhc2VcImltYWdlXCI6aWYodGhpcy5lcnJvcilyZXR1cm4gdm9pZChlJiZlKCkpO3RoaXMuaW1hZ2VSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9KSxlJiZlKCl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLmltYWdlLmhpZGUoKSx0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLmVycm9yPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yIGZyLWNvbnRlbnQtZWxlbWVudFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3ItaWNvblwiKSkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1lcnJvclwiKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMuZXJyb3Iub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVycm9yLm91dGVySGVpZ2h0KCl9KSx0aGlzLmVycm9yLmNzcyh7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksZSYmZSgpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pO2JyZWFrO2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1JlYWR5PW5ldyBWaW1lb1JlYWR5KHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6aS5kaW1lbnNpb25zLmhlaWdodH0pLGUmJmUoKX0sdGhpcykpO2JyZWFrO2Nhc2VcInlvdXR1YmVcIjp0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMudmlldy5vcHRpb25zLndpZHRoLGhlaWdodDp0aGlzLnZpZXcub3B0aW9ucy5oZWlnaHR9KSxlJiZlKCl9fSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZGltZW5zaW9ucz1pLHRoaXMudmlldy5vcHRpb25zLm1heFdpZHRofHx0aGlzLnZpZXcub3B0aW9ucy5tYXhIZWlnaHQpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLHQ9e3dpZHRoOmUubWF4V2lkdGg/ZS5tYXhXaWR0aDp0aGlzLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmUubWF4SGVpZ2h0P2UubWF4SGVpZ2h0OnRoaXMuZGltZW5zaW9ucy5oZWlnaHR9O3RoaXMuZGltZW5zaW9ucz1GaXQud2l0aGluKHQsdGhpcy5kaW1lbnNpb25zKX19LF9tYXJrQXNMb2FkZWQ6ZnVuY3Rpb24oKXt0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMSx0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCxTcGlubmVyLmhpZGUobnVsbCxudWxsLHRoaXMuX3Bvc2l0aW9uKX0saXNWaWRlbzpmdW5jdGlvbigpe3JldHVybiBUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpfSxpbnNlcnRWaWRlbzpmdW5jdGlvbihpKXtpZighdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMuaXNWaWRlbygpKXt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9JC5leHRlbmQoe30sdGhpcy52aWV3Lm9wdGlvbnNbdGhpcy52aWV3LnR5cGVdfHx7fSkscz0kLnBhcmFtKHQpLG49e3ZpbWVvOmUrXCIvL3BsYXllci52aW1lby5jb20vdmlkZW8ve2lkfT97cXVlcnlTdHJpbmd9XCIseW91dHViZTplK1wiLy93d3cueW91dHViZS5jb20vZW1iZWQve2lkfT97cXVlcnlTdHJpbmd9XCJ9W3RoaXMudmlldy50eXBlXS5yZXBsYWNlKFwie2lkfVwiLHRoaXMudmlldy5fZGF0YS5pZCkucmVwbGFjZShcIntxdWVyeVN0cmluZ31cIixzKTt0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLnBsYXllcklmcmFtZT0kKFwiPGlmcmFtZSB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOm4saGVpZ2h0OnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLmhlaWdodCx3aWR0aDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy53aWR0aCxmcmFtZWJvcmRlcjowfSkpLGkmJmkoKX1lbHNlIGkmJmkoKX0scmFpc2U6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5lbGVtZW50WzBdLmxhc3RDaGlsZDtpJiZpPT09dGhpcy5lbGVtZW50WzBdfHxQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxzaG93OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMucXVldWVzLnNob3doaWRlO2kucXVldWUoW10pLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYhTWNbdGhpcy52aWV3LnVybF07U3Bpbm5lci5fdmlzaWJsZSYmIWUmJlNwaW5uZXIuaGlkZSgpLFBhZ2VzLnN0b3BJbmFjdGl2ZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnVwZGF0ZVVJKCksVUkuc2V0KHRoaXMuX3VpKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7S2V5Ym9hcmQuZW5hYmxlKHRoaXMudmlldy5vcHRpb25zLmtleWJvYXJkKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7U3Bpbm5lci5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLHRoaXMubG9hZCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMoKSxpKCl9LHRoaXMpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnJhaXNlKCksV2luZG93LnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksVUkuZW5hYmxlKCksdGhpcy5maXRUb0JveCgpLFdpbmRvdy5hZGp1c3RUb1Njcm9sbCgpLGkoKX0sdGhpcykpLHRoaXMuaXNWaWRlbygpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5pbnNlcnRWaWRlbygkLnByb3h5KGZ1bmN0aW9uKCl7aSgpfSkpfSx0aGlzKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luY3x8aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLmhpZGVJbmFjdGl2ZShpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0zLHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c7V2luZG93LnNldFNob3dpbmdUeXBlKHRoaXMudmlldy50eXBlKSxXaW5kb3cudmlzaWJsZXx8KHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyxcImZ1bmN0aW9uXCI9PT0kLnR5cGUodGhpcy52aWV3Lm9wdGlvbnMub25TaG93KSYmdGhpcy52aWV3Lm9wdGlvbnMub25TaG93LmNhbGwoRnJlc2NvKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luYyYmKGUrKyxQYWdlcy5oaWRlSW5hY3RpdmUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSkpLFdpbmRvdy5zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyksdGhpcy5fc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLFVJLmFkanVzdFByZXZOZXh0KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sV2luZG93Ll9maXJzdD8wOnQpLFdpbmRvdy5fZmlyc3Q/KFVJLnNob3cobnVsbCwwKSxXaW5kb3cuX2ZpcnN0PSExKTpVSS5zaG93KG51bGwsMCk7dmFyIHM9dGhpcy52aWV3Lm9wdGlvbnMuYWZ0ZXJQb3NpdGlvbjtcImZ1bmN0aW9uXCI9PT0kLnR5cGUocykmJnMuY2FsbChGcmVzY28sdGhpcy5fcG9zaXRpb24pfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGU9ITAsZSYmZSgpLGkoKX0sdGhpcykpfSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PVdpbmRvdy52aXNpYmxlP1wibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdzowO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5zaG93KCkuZmFkZVRvKHR8fDAsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMuZWxlbWVudCl7dGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuYWJvcnQoKTt2YXIgdD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LmhpZGU7dGhpcy5pc1ZpZGVvKCkmJih0PTApLHRoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwwLFwiZnJlc2NvRWFzZUluQ3ViaWNcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmhpZGUoKSx0aGlzLl92aXNpYmxlPSExLFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sc3RvcDpmdW5jdGlvbigpe3RoaXMucXVldWVzLnNob3doaWRlLnF1ZXVlKFtdKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5zdG9wKCEwKSx0aGlzLmFib3J0KCl9LHJlbW92ZVZpZGVvOmZ1bmN0aW9uKCl7dGhpcy5wbGF5ZXJJZnJhbWUmJih0aGlzLnBsYXllcklmcmFtZVswXS5zcmM9XCIvL2Fib3V0OmJsYW5rXCIsdGhpcy5wbGF5ZXJJZnJhbWUucmVtb3ZlKCksdGhpcy5wbGF5ZXJJZnJhbWU9bnVsbCl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpLHRoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5yZW1vdmUoKSx0aGlzLl90cmFjayYmKFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLl90cmFjaz0hMSksdGhpcy5wcmVsb2FkUmVhZHkmJih0aGlzLnByZWxvYWRSZWFkeS5hYm9ydCgpLHRoaXMucHJlbG9hZFJlYWR5PW51bGwsdGhpcy5wcmVsb2FkaW5nPW51bGwsdGhpcy5wcmVsb2FkZWQ9bnVsbCksdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnJlbW92ZWQ9ITB9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5pbWFnZVJlYWR5JiYodGhpcy5pbWFnZVJlYWR5LmFib3J0KCksdGhpcy5pbWFnZVJlYWR5PW51bGwpLHRoaXMudmltZW9SZWFkeSYmKHRoaXMudmltZW9SZWFkeS5hYm9ydCgpLHRoaXMudmltZW9SZWFkeT1udWxsKSx0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMX0sX2Fib3J0U3Bpbm5lckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fc3Bpbm5lckRlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX3NwaW5uZXJEZWxheSksdGhpcy5fc3Bpbm5lckRlbGF5PW51bGwpfSxfZ2V0SW5mb0hlaWdodDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOmNhc2VcImluc2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbiYmIWUpcmV0dXJuIDA7YnJlYWs7Y2FzZVwib3V0c2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbilyZXR1cm4gMH12YXIgdD1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztcIm91dHNpZGVcIj09PXRoaXMuX3VpJiYoaT1NYXRoLm1pbihpLFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkpO3ZhciBzLG49dFswXS5zdHlsZS53aWR0aDtyZXR1cm5cImluc2lkZVwiIT09dGhpcy5fdWkmJlwiZnVsbGNsaWNrXCIhPT10aGlzLl91aXx8KG49XCIxMDAlXCIpLHQuY3NzKHt3aWR0aDppK1wicHhcIn0pLHM9cGFyc2VGbG9hdCh0Lm91dGVySGVpZ2h0KCkpLHQuY3NzKHt3aWR0aDpufSksc30sX3doaWxlVmlzaWJsZTpmdW5jdGlvbihpLGUpe3ZhciB0PVtdLHM9V2luZG93LmVsZW1lbnQuYWRkKHRoaXMuZWxlbWVudCk7ZSYmKHM9cy5hZGQoZSkpLCQuZWFjaChzLGZ1bmN0aW9uKGksZSl7JChlKS5pcyhcIjp2aXNpYmxlXCIpfHx0LnB1c2goJChlKS5zaG93KCkpfSk7dmFyIG49dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3ZhciBvPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksaSgpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLG4mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLWNhcHRpb25cIiksb3x8dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksJC5lYWNoKHQsZnVuY3Rpb24oaSxlKXtlLmhpZGUoKX0pfSx1cGRhdGVGb3JjZWQ6ZnVuY3Rpb24oKXt0aGlzLmNyZWF0ZSgpLHRoaXMuX2Z1bGxDbGljaz10aGlzLnZpZXcub3B0aW9ucy5mdWxsQ2xpY2ssdGhpcy5fbm9PdmVyZmxvdz0hMSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4td2lkdGhcIikpJiYodGhpcy5fZnVsbENsaWNrPSEwKSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4taGVpZ2h0XCIpKSYmKHRoaXMuX25vT3ZlcmZsb3c9ITApfSx1cGRhdGVVSTpmdW5jdGlvbigpe3RoaXMudXBkYXRlRm9yY2VkKCk7dmFyIGk9dGhpcy5fZnVsbENsaWNrP1wiZnVsbGNsaWNrXCI6dGhpcy52aWV3Lm9wdGlvbnMudWk7dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXVpLVwiK3RoaXMuX3VpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1cIitpKSx0aGlzLl91aT1pfSxmaXRUb0JveDpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dGhpcy5lbGVtZW50O3ZhciB0PSQuZXh0ZW5kKHt9LFdpbmRvdy5nZXRCb3hEaW1lbnNpb25zKCkpLGk9JC5leHRlbmQoe30sdGhpcy5kaW1lbnNpb25zKSxlPXRoaXMuY29udGFpbmVyO3RoaXMudXBkYXRlVUkoKTt2YXIgcz17bGVmdDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctbGVmdFwiKSksdG9wOnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy10b3BcIikpfTtpZihcIm91dHNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLl9wb3NpdGlvbk91dHNpZGUpe3ZhciBuPTA7dGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbk91dHNpZGUuaXMoXCI6dmlzaWJsZVwiKSYmKG49dGhpcy5fcG9zaXRpb25PdXRzaWRlLm91dGVyV2lkdGgoITApKX0sdGhpcykpLG4+cy5sZWZ0JiYocy5sZWZ0PW4pfXQud2lkdGgtPTIqcy5sZWZ0LHQuaGVpZ2h0LT0yKnMudG9wO3ZhciBvLGEsaD17d2lkdGg6ITAsaGVpZ2h0OiEhdGhpcy5fbm9PdmVyZmxvd3x8IXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93Lnl9LHI9Rml0LndpdGhpbih0LGksaCksZD0kLmV4dGVuZCh7fSxyKSxsPSh0aGlzLmNvbnRlbnQsMCksdT1cImluc2lkZVwiPT09dGhpcy5fdWksYz11P3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm8scD11P3RoaXMuY2FwdGlvbkluc2lkZTp0aGlzLmNhcHRpb24sZj11P3RoaXMucG9zSW5zaWRlOnRoaXMucG9zLG09ISFwO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOnZhciB2PSQuZXh0ZW5kKHt9LGQpO3RoaXMuY2FwdGlvbiYmKGE9dGhpcy5jYXB0aW9uLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTwyOyl7bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpO3ZhciBlPXQuaGVpZ2h0LWQuaGVpZ2h0O2U8bCYmKGQ9Rml0LndpdGhpbih7d2lkdGg6ZC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoZC5oZWlnaHQtKGwtZSksMCl9LGQsaCkpLGkrK31sPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCksKCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiZsK2QuaGVpZ2h0PnQuaGVpZ2h0fHxjJiZcIm5vbmVcIj09PWMuY3NzKFwiZGlzcGxheVwiKXx8bD49LjUqZC5oZWlnaHQpJiYobT0hMSxsPTAsZD12KX0sdGhpcyksYSkpLGMmJmMuY3NzKHt3aWR0aDpkLndpZHRoK1wicHhcIn0pLG89e3dpZHRoOmQud2lkdGgsaGVpZ2h0OmQuaGVpZ2h0K2x9O2JyZWFrO2Nhc2VcImluc2lkZVwiOnRoaXMuY2FwdGlvbiYmKGE9cCx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpeyhsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCkpPj0uNDUqZC5oZWlnaHQmJihtPSExLGw9MCl9LHRoaXMpLGEpKSxvPWQ7YnJlYWs7Y2FzZVwiZnVsbGNsaWNrXCI6dmFyIGc9W107cCYmZy5wdXNoKHApLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoKHB8fGYpJiZjLmNzcyh7d2lkdGg6XCIxMDAlXCJ9KSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxwJiZsPi41KnQuaGVpZ2h0KWlmKG09ITEsZil7dmFyIGk9dGhpcy5jYXB0aW9uLmlzKFwiOnZpc2libGVcIik7dGhpcy5jYXB0aW9uLmhpZGUoKSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxpJiZ0aGlzLmNhcHRpb24uc2hvdygpfWVsc2UgbD0wO2Q9Rml0LndpdGhpbih7d2lkdGg6dC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoMCx0LmhlaWdodC1sKX0sZCxoKSxvPWR9LHRoaXMpLGcpLHRoaXMuY29udGVudC5jc3Moe1wicGFkZGluZy1ib3R0b21cIjowfSl9cCYmcFttP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuZWxlbWVudFsobT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1uby1jYXB0aW9uXCIpLHRoaXMuZWxlbWVudFsobT9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1oYXMtY2FwdGlvblwiKSx0aGlzLmNvbnRlbnQuY3NzKGQpLHRoaXMuYmFja2dyb3VuZC5jc3MobyksdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMucGxheWVySWZyYW1lLmF0dHIoZCksdGhpcy5vdmVybGFwPXt5Om8uaGVpZ2h0KyhcImZ1bGxjbGlja1wiPT09dGhpcy5fdWk/bDowKS1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHg6MH0sdGhpcy5fdHJhY2s9IXRoaXMuX25vT3ZlcmZsb3cmJnRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJjA8dGhpcy5vdmVybGFwLnksdGhpcy5faW5mb0hlaWdodD1sLHRoaXMuX3BhZGRpbmc9cyx0aGlzLl9jb250ZW50RGltZW5zaW9ucz1kLHRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zPW8sUGFnZXNbKHRoaXMuX3RyYWNrP1wic2V0XCI6XCJyZW1vdmVcIikrXCJUcmFja2luZ1wiXSh0aGlzLl9wb3NpdGlvbiksdGhpcy5wb3NpdGlvbigpfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3ZhciBpPXRoaXMuX2NvbnRlbnREaW1lbnNpb25zLGU9dGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnMsdD17dG9wOi41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqZS5oZWlnaHQsbGVmdDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqZS53aWR0aH0scz17dG9wOnQudG9wK2kuaGVpZ2h0LGxlZnQ6dC5sZWZ0fSxuPTAsbz1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOnQudG9wPS41KihXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQpLS41KmUuaGVpZ2h0LHM9e3RvcDpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQsbGVmdDowLGJvdHRvbTpcImF1dG9cIn0sbj10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnM9e3RvcDpcImF1dG9cIixsZWZ0OjAsYm90dG9tOjB9fWlmKDA8dGhpcy5vdmVybGFwLnkpe3ZhciBhPVBhZ2VzLmdldFhZUCgpO3N3aXRjaCh0LnRvcD0wLWEueSp0aGlzLm92ZXJsYXAueSx0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOmNhc2VcImZ1bGxjbGlja1wiOnMudG9wPVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjp2YXIgaD10LnRvcCtpLmhlaWdodC1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHI9LTEqdC50b3A7aWYocy5ib3R0b209aCx0aGlzLmNsb3NlSW5zaWRlLmNzcyh7dG9wOnJ9KSwxPHRoaXMuX3RvdGFsKXt2YXIgZD1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO2R8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbD10aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoXCJzdHlsZVwiKTt0aGlzLnByZXZpb3VzSW5zaWRlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgdT1wYXJzZUludCh0aGlzLnByZXZpb3VzSW5zaWRlLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMucHJldmlvdXNJbnNpZGUuYXR0cih7c3R5bGU6bH0pLGR8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYz10aGlzLnByZXZpb3VzSW5zaWRlLmFkZCh0aGlzLm5leHRJbnNpZGUpLHA9LjUqdGhpcy5vdmVybGFwLnk7Yy5jc3Moe1wibWFyZ2luLXRvcFwiOnUrKHItcCl9KSx0aGlzLnBvc2l0aW9uSW5zaWRlJiZ0aGlzLnBvc2l0aW9uSW5zaWRlLmNzcyh7Ym90dG9tOmh9KX19fWVsc2VcImluc2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5maW5kKFwiLmZyLWluZm8sIC5mci1zaWRlLCAuZnItY2xvc2UsIC5mci1wb3NpdGlvbi1pbnNpZGVcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpO28mJm8uY3NzKHMpLHRoaXMuY29udGFpbmVyLmNzcyh7Ym90dG9tOm59KSx0aGlzLmNvbnRlbnQuY3NzKHQpLHRoaXMuYmFja2dyb3VuZC5jc3ModCl9fX0pLE9jKSxMYyxNYyxOYztmdW5jdGlvbiBPYygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX12YXIgUGFnZXM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5wYWdlcz1bXSx0aGlzLnVpZD0xLHRoaXMuX3RyYWNraW5nPVtdfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMudmlld3M9aSx0aGlzLnJlbW92ZUFsbCgpLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnBhZ2VzLnB1c2gobmV3IFBhZ2UoZSxpKzEsdGhpcy52aWV3cy5sZW5ndGgpKX0sdGhpcykpfSxzaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpcy5wYWdlc1tpLTFdO3RoaXMucGFnZSYmdGhpcy5wYWdlLnVpZD09PXQudWlkfHwodGhpcy5wYWdlPXQsVGh1bWJuYWlscy5zaG93KGkpLFdpbmRvdy51cGRhdGVCb3hEaW1lbnNpb25zKCksdC5zaG93KCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKSl9LGdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXA6ZnVuY3Rpb24odCl7dmFyIHM9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnZpZXcuZWxlbWVudCYmZS52aWV3LmVsZW1lbnQ9PT10JiYocz1pKzEpfSksc30sZ2V0TG9hZGluZ0NvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLmxvYWRpbmcmJnQrK30pLHR9LHJlbW92ZUFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMucGFnZXM9W119LGhpZGVJbmFjdGl2ZTpmdW5jdGlvbih0LHMpe3ZhciBuPVtdOyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJm4ucHVzaChlKX0sdGhpcykpO3ZhciBvPTArbi5sZW5ndGg7cmV0dXJuIG88MT90JiZ0KCk6JC5lYWNoKG4sZnVuY3Rpb24oaSxlKXtlLmhpZGUoZnVuY3Rpb24oKXt0JiYtLW88MSYmdCgpfSxzKX0pLG4ubGVuZ3RofSxzdG9wSW5hY3RpdmU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZlLnN0b3AoKX0sdGhpcykpfSxzdG9wOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnN0b3AoKX0pfSxoYW5kbGVUcmFja2luZzpmdW5jdGlvbihpKXtCcm93c2VyLklFJiZCcm93c2VyLklFPDk/KHRoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpKTp0aGlzLl90cmFja2luZ190aW1lcj1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKX0sdGhpcyksMzApfSxjbGVhclRyYWNraW5nVGltZXI6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZ190aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLl90cmFja2luZ190aW1lciksdGhpcy5fdHJhY2tpbmdfdGltZXI9bnVsbCl9LHN0YXJ0VHJhY2tpbmc6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHx0aGlzLl9oYW5kbGVUcmFja2luZ3x8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmc9JC5wcm94eSh0aGlzLmhhbmRsZVRyYWNraW5nLHRoaXMpKX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7IVN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuX2hhbmRsZVRyYWNraW5nJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nKSx0aGlzLl9oYW5kbGVUcmFja2luZz1udWxsLHRoaXMuY2xlYXJUcmFja2luZ1RpbWVyKCkpfSxzZXRUcmFja2luZzpmdW5jdGlvbihpKXt0aGlzLmlzVHJhY2tpbmcoaSl8fCh0aGlzLl90cmFja2luZy5wdXNoKHRoaXMucGFnZXNbaS0xXSksMT09PXRoaXMuX3RyYWNraW5nLmxlbmd0aCYmdGhpcy5zdGFydFRyYWNraW5nKCkpfSxjbGVhclRyYWNraW5nOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmc9W119LHJlbW92ZVRyYWNraW5nOmZ1bmN0aW9uKGUpe3RoaXMuX3RyYWNraW5nPSQuZ3JlcCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpKXtyZXR1cm4gaS5fcG9zaXRpb24hPT1lfSksdGhpcy5fdHJhY2tpbmcubGVuZ3RoPDEmJnRoaXMuc3RvcFRyYWNraW5nKCl9LGlzVHJhY2tpbmc6ZnVuY3Rpb24odCl7dmFyIHM9ITE7cmV0dXJuICQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2lmKGUuX3Bvc2l0aW9uPT09dClyZXR1cm4hKHM9ITApfSksc30sc2V0WFk6ZnVuY3Rpb24oaSl7dGhpcy5feHk9aX0sZ2V0WFlQOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZSx0PSQuZXh0ZW5kKHt9LFdpbmRvdy5fYm94RGltZW5zaW9ucyksZT0kLmV4dGVuZCh7fSx0aGlzLl94eSk7ZS55LT0kKHdpbmRvdykuc2Nyb2xsVG9wKCksaSYmKFwib3V0c2lkZVwiPT09aS5fdWl8fFwiZnVsbGNsaWNrXCI9PT1pLl91aSkmJjA8aS5faW5mb0hlaWdodCYmKHQuaGVpZ2h0LT1pLl9pbmZvSGVpZ2h0KSxlLnktPVdpbmRvdy5fYm94UG9zaXRpb24udG9wO3ZhciBzPXt4OjAseTpNYXRoLm1pbihNYXRoLm1heChlLnkvdC5oZWlnaHQsMCksMSl9LG49e3g6XCJ3aWR0aFwiLHk6XCJoZWlnaHRcIn0sbz17fTtyZXR1cm4gJC5lYWNoKFwieVwiLnNwbGl0KFwiIFwiKSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7b1tlXT1NYXRoLm1pbihNYXRoLm1heCgyMC90W25bZV1dLDApLDEpLHNbZV0qPTErMipvW2VdLHNbZV0tPW9bZV0sc1tlXT1NYXRoLm1pbihNYXRoLm1heChzW2VdLDApLDEpfSx0aGlzKSksdGhpcy5zZXRYWVAocyksdGhpcy5feHlwfSxzZXRYWVA6ZnVuY3Rpb24oaSl7dGhpcy5feHlwPWl9LHVwZGF0ZVBvc2l0aW9uczpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nLmxlbmd0aDwxfHwkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtlLnBvc2l0aW9uKCl9KX19O2Z1bmN0aW9uIFZpZXcoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChWaWV3LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihvYmplY3Qpe3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30sZGF0YT17fTtpZihcInN0cmluZ1wiPT09JC50eXBlKG9iamVjdCkpb2JqZWN0PXt1cmw6b2JqZWN0fTtlbHNlIGlmKG9iamVjdCYmMT09PW9iamVjdC5ub2RlVHlwZSl7dmFyIGVsZW1lbnQ9JChvYmplY3QpO29iamVjdD17ZWxlbWVudDplbGVtZW50WzBdLHVybDplbGVtZW50LmF0dHIoXCJocmVmXCIpLGNhcHRpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tY2FwdGlvblwiKSxncm91cDplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSxleHRlbnNpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZXh0ZW5zaW9uXCIpLHR5cGU6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tdHlwZVwiKSxvcHRpb25zOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikmJmV2YWwoXCIoe1wiK2VsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikrXCJ9KVwiKXx8e319fXJldHVybiBvYmplY3QmJihvYmplY3QuZXh0ZW5zaW9ufHwob2JqZWN0LmV4dGVuc2lvbj1kZXRlY3RFeHRlbnNpb24ob2JqZWN0LnVybCkpLG9iamVjdC50eXBlfHwoZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpLG9iamVjdC5fZGF0YT1kYXRhLG9iamVjdC50eXBlPWRhdGEudHlwZSkpLG9iamVjdC5fZGF0YXx8KG9iamVjdC5fZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpKSxvYmplY3QmJm9iamVjdC5vcHRpb25zP29iamVjdC5vcHRpb25zPSQuZXh0ZW5kKCEwLCQuZXh0ZW5kKHt9LG9wdGlvbnMpLCQuZXh0ZW5kKHt9LG9iamVjdC5vcHRpb25zKSk6b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoe30sb3B0aW9ucyksb2JqZWN0Lm9wdGlvbnM9T3B0aW9ucy5jcmVhdGUob2JqZWN0Lm9wdGlvbnMsb2JqZWN0LnR5cGUsb2JqZWN0Ll9kYXRhKSwkLmV4dGVuZCh0aGlzLG9iamVjdCksdGhpc319KTt2YXIgU3Bpbm5lcj17c3VwcG9ydGVkOlN1cHBvcnQuY3NzLnRyYW5zZm9ybSYmU3VwcG9ydC5jc3MuYW5pbWF0aW9uLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW5uZXJcIikuaGlkZSgpO2Zvcih2YXIgZT0xO2U8PTEyO2UrKyl0aGlzLmVsZW1lbnQuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW4tXCIrZSkpO3RoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe1dpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc3VwcG9ydGVkJiYodGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMudXBkYXRlRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIitpKSx0aGlzLl9za2luPWkpfSx1cGRhdGVEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fYXR0YWNoZWQ7aXx8dGhpcy5hdHRhY2goKSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKX0saXx8dGhpcy5kZXRhY2goKX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzaG93OmZ1bmN0aW9uKGksZSl7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMuY2VudGVyKCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSx0KXt0aGlzLl92aXNpYmxlPSExO3ZhciBzPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5oaWRlfHwwLG49KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpzKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChufHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLGkmJmkoKX0sdGhpcykpfSxjZW50ZXI6ZnVuY3Rpb24oKXtpZih0aGlzLnN1cHBvcnRlZCl7dGhpcy5fZGltZW5zaW9uc3x8dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7dmFyIGk9UGFnZXMucGFnZSxlPTA7aSYmXCJmdWxsY2xpY2tcIj09PWkuX3VpJiZpLl93aGlsZVZpc2libGUoZnVuY3Rpb24oKXtlPWkuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKX0pLHRoaXMuZWxlbWVudC5jc3Moe3RvcDpXaW5kb3cuX2JveFBvc2l0aW9uLnRvcCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KnRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LS41KmUsbGVmdDpXaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQrLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KnRoaXMuX2RpbWVuc2lvbnMud2lkdGh9KX19fSxfRnJlc2NvPXtfZGlzYWJsZWQ6ITEsX2ZhbGxiYWNrOiEwLGluaXRpYWxpemU6ZnVuY3Rpb24oKXtXaW5kb3cuaW5pdGlhbGl6ZSgpLHRoaXMuX2Rpc2FibGVkfHx0aGlzLnN0YXJ0RGVsZWdhdGluZygpfSxzdGFydERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXJ8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPSQucHJveHkodGhpcy5kZWxlZ2F0ZSx0aGlzKSkub24oXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPSQucHJveHkodGhpcy5zZXRDbGlja1hZLHRoaXMpKX0sc3RvcERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXImJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXIpLm9mZihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXIpLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPW51bGwsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPW51bGwpfSxzZXRDbGlja1hZOmZ1bmN0aW9uKGkpe1BhZ2VzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSl9LGRlbGVnYXRlOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLl9kaXNhYmxlZCl7aS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9aS5jdXJyZW50VGFyZ2V0O3RoaXMuc2V0Q2xpY2tYWShpKSxfRnJlc2NvLnNob3coZSl9fSxzaG93OmZ1bmN0aW9uKG9iamVjdCl7aWYodGhpcy5fZGlzYWJsZWQpdGhpcy5zaG93RmFsbGJhY2suYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtlbHNle3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30scG9zaXRpb249YXJndW1lbnRzWzJdO2FyZ3VtZW50c1sxXSYmXCJudW1iZXJcIj09PSQudHlwZShhcmd1bWVudHNbMV0pJiYocG9zaXRpb249YXJndW1lbnRzWzFdLG9wdGlvbnM9e30pO3ZhciB2aWV3cz1bXSxvYmplY3RfdHlwZSxpc0VsZW1lbnQ9Xy5pc0VsZW1lbnQob2JqZWN0KTtzd2l0Y2gob2JqZWN0X3R5cGU9JC50eXBlKG9iamVjdCkpe2Nhc2VcInN0cmluZ1wiOmNhc2VcIm9iamVjdFwiOnZhciB2aWV3PW5ldyBWaWV3KG9iamVjdCxvcHRpb25zKSxfZGdvPVwiZGF0YS1mcmVzY28tZ3JvdXAtb3B0aW9uc1wiLGdyb3VwT3B0aW9ucz17fTtpZih2aWV3Lmdyb3VwKXtpZihpc0VsZW1lbnQpe3ZhciBlbGVtZW50cz0kKCcuZnJlc2NvW2RhdGEtZnJlc2NvLWdyb3VwPVwiJyskKG9iamVjdCkuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpKydcIl0nKTtlbGVtZW50cy5maWx0ZXIoXCJbXCIrX2RnbytcIl1cIikuZWFjaChmdW5jdGlvbihpLGVsZW1lbnQpeyQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChlbGVtZW50KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKX0pLGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oaSxlKXtwb3NpdGlvbnx8ZSE9PW9iamVjdHx8KHBvc2l0aW9uPWkrMSksdmlld3MucHVzaChuZXcgVmlldyhlLCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpfSl9fWVsc2UgaXNFbGVtZW50JiYkKG9iamVjdCkuaXMoXCJbXCIrX2RnbytcIl1cIikmJigkLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQob2JqZWN0KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKSx2aWV3PW5ldyBWaWV3KG9iamVjdCwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKSx2aWV3cy5wdXNoKHZpZXcpO2JyZWFrO2Nhc2VcImFycmF5XCI6JC5lYWNoKG9iamVjdCxmdW5jdGlvbihpLGUpe3ZhciB0PW5ldyBWaWV3KGUsb3B0aW9ucyk7dmlld3MucHVzaCh0KX0pfXZhciBncm91cEV4dGVuZD17Z3JvdXBlZDp7Y2FwdGlvbjohMX19LGZpcnN0VUk9dmlld3NbMF0ub3B0aW9ucy51aSxwb3NpdGlvbkluQVBHOyQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2UuY2FwdGlvbiYmKGdyb3VwRXh0ZW5kLmdyb3VwZWQuY2FwdGlvbj0hMCksMDxpJiZlLm9wdGlvbnMudWkhPT1maXJzdFVJJiYoZS5vcHRpb25zLnVpPWZpcnN0VUkpfSksJC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZT0kLmV4dGVuZChlLGdyb3VwRXh0ZW5kKX0pLCghcG9zaXRpb258fHBvc2l0aW9uPDEpJiYocG9zaXRpb249MSkscG9zaXRpb24+dmlld3MubGVuZ3RoJiYocG9zaXRpb249dmlld3MubGVuZ3RoKSxpc0VsZW1lbnQmJihwb3NpdGlvbkluQVBHPVBhZ2VzLmdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAob2JqZWN0KSk/V2luZG93LnNldFBvc2l0aW9uKHBvc2l0aW9uSW5BUEcpOldpbmRvdy5sb2FkKHZpZXdzLHBvc2l0aW9uKX19LHNob3dGYWxsYmFjazpmdW5jdGlvbihpKXtpZih0aGlzLl9mYWxsYmFjayl7dmFyIGU9ZnVuY3Rpb24gaShlKXt2YXIgdD0kLnR5cGUoZSk7cmV0dXJuXCJzdHJpbmdcIj09PXQ/ZTpcImFycmF5XCI9PT10JiZlWzBdP2koZVswXSk6Xy5pc0VsZW1lbnQoZSkmJiQoZSkuYXR0cihcImhyZWZcIik/JChlKS5hdHRyKFwiaHJlZlwiKTohIWUudXJsJiZlLnVybH0oaSk7ZSYmKHdpbmRvdy5sb2NhdGlvbi5ocmVmPWUpfX19OyQuZXh0ZW5kKEZyZXNjbyx7c2hvdzpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5zaG93LmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiBXaW5kb3cuaGlkZSgpLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5zdG9wRGVsZWdhdGluZygpLF9GcmVzY28uX2Rpc2FibGVkPSEwLHRoaXN9LGVuYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLl9kaXNhYmxlZD0hMSxfRnJlc2NvLnN0YXJ0RGVsZWdhdGluZygpLHRoaXN9LGZhbGxiYWNrOmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLl9mYWxsYmFjaz1pLHRoaXN9LHNldERlZmF1bHRTa2luOmZ1bmN0aW9uKGkpe3JldHVybiBPcHRpb25zLmRlZmF1bHRzLnNraW49aSx0aGlzfX0pLChCcm93c2VyLklFJiZCcm93c2VyLklFPDd8fFwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5BbmRyb2lkKSYmQnJvd3Nlci5BbmRyb2lkPDN8fEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuV2ViS2l0KSYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4KSYmKF9GcmVzY28uc2hvdz1fRnJlc2NvLnNob3dGYWxsYmFjayk7dmFyIFRodW1ibmFpbHM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIsdGhpcy5fdmFycz17dGh1bWJuYWlsOnt9LHRodW1ibmFpbEZyYW1lOnt9LHRodW1ibmFpbHM6e319LHRoaXMuYnVpbGQoKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nKCl9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLndyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy13cmFwcGVyXCIpLmFwcGVuZCh0aGlzLl9zbGlkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZXJcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtcHJldmlvdXNcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzX2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX3RodW1icz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXRodW1ic1wiKS5hcHBlbmQodGhpcy5fc2xpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZVwiKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtbmV4dFwiKS5hcHBlbmQodGhpcy5fbmV4dF9idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpKSl9LHN0YXJ0T2JzZXJ2aW5nOmZ1bmN0aW9uKCl7dGhpcy5fc2xpZGVyLmRlbGVnYXRlKFwiLmZyLXRodW1ibmFpbFwiLFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGU9JChpLnRhcmdldCkuY2xvc2VzdChcIi5mci10aHVtYm5haWxcIilbMF0sdD1lJiYkKGUpLmRhdGEoXCJmci1wb3NpdGlvblwiKTt0JiYodGhpcy5zZXRBY3RpdmUodCksV2luZG93LnNldFBvc2l0aW9uKHQpKX0sdGhpcykpLHRoaXMuX3NsaWRlci5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpfSksdGhpcy5fcHJldmlvdXMuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLnByZXZpb3VzUGFnZSx0aGlzKSksdGhpcy5fbmV4dC5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMubmV4dFBhZ2UsdGhpcykpfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMuY2xlYXIoKTt2YXIgdD1cImhvcml6b250YWxcIixzPSExOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtcInZlcnRpY2FsXCI9PT1lLm9wdGlvbnMudGh1bWJuYWlscyYmKHQ9XCJ2ZXJ0aWNhbFwiKSxlLm9wdGlvbnMudGh1bWJuYWlsc3x8KHM9ITApfSx0aGlzKSksdGhpcy5zZXRPcmllbnRhdGlvbih0KSx0aGlzLl9kaXNhYmxlZEdyb3VwPXMsJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMuX3RodW1ibmFpbHMucHVzaChuZXcgVGh1bWJuYWlsKGUsaSsxKSl9LHRoaXMpKSx0aGlzLmZpdFRvVmlld3BvcnQoKX0sY2xlYXI6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX3Bvc2l0aW9uPS0xLHRoaXMuX3BhZ2U9LTF9LHNldE9yaWVudGF0aW9uOmZ1bmN0aW9uKGkpe3RoaXMuX29yaWVudGF0aW9uJiZXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIrdGhpcy5fb3JpZW50YXRpb24pLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1cIitpKSx0aGlzLl9vcmllbnRhdGlvbj1pfSxkaXNhYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSEwfSxlbmFibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITF9LGVuYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5fZGlzYWJsZWR9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rpc2FibGVkfSx1cGRhdGVWYXJzOmZ1bmN0aW9uKCl7dmFyIGk9V2luZG93LmVsZW1lbnQsZT10aGlzLl92YXJzLHQ9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixzPXQ/XCJ0b3BcIjpcImxlZnRcIixuPXQ/XCJsZWZ0XCI6XCJ0b3BcIixvPXQ/XCJib3R0b21cIjpcImxlZnRcIixhPXQ/XCJ0b3BcIjpcInJpZ2h0XCIsaD10P1wid2lkdGhcIjpcImhlaWdodFwiLHI9dD9cImhlaWdodFwiOlwid2lkdGhcIixkPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIix0b3A6XCJib3R0b21cIixib3R0b206XCJ0b3BcIn07dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt2YXIgbD1pLmlzKFwiOnZpc2libGVcIik7aWYobHx8aS5zaG93KCksdGhpcy5kaXNhYmxlZCgpJiZ0aGlzLmVuYWJsZSgpLCF0aGlzLmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKXx8dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8Mnx8dGhpcy5fZGlzYWJsZWRHcm91cClyZXR1cm4gdGhpcy5kaXNhYmxlKCksJC5leHRlbmQodGhpcy5fdmFycy50aHVtYm5haWxzLHt3aWR0aDowLGhlaWdodDowfSksbHx8aS5oaWRlKCksdm9pZCB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3RoaXMuZW5hYmxlKCk7dmFyIHU9dGhpcy5fcHJldmlvdXMsYz10aGlzLl9uZXh0LHA9Qm91bmRzLnZpZXdwb3J0KCksZj10aGlzLmVsZW1lbnRbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUocildKCksbT1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIitzKSl8fDAsdj1NYXRoLm1heChmLTIqbSwwKSxnPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK24pKXx8MCx3PShwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK28pKXx8MCkrKHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrYSkpfHwwKTskLmV4dGVuZChlLnRodW1ibmFpbHMse2hlaWdodDpmK3csd2lkdGg6cFt0P1wid2lkdGhcIjpcImhlaWdodFwiXSxwYWRkaW5nVG9wOm19KSwkLmV4dGVuZChlLnRodW1ibmFpbCx7aGVpZ2h0OnYsd2lkdGg6dn0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsRnJhbWUse3dpZHRoOnYrMipnLGhlaWdodDpmfSksZS5zaWRlcz17cHJldmlvdXM6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfSxuZXh0Ont3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH19O3ZhciBiPXBbaF0seT1lLnRodW1ibmFpbEZyYW1lLndpZHRoLHg9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7ZS50aHVtYm5haWxzLndpZHRoPWIsZS5zaWRlcy5lbmFibGVkPTE8eCp5L2I7dmFyIGs9YixDPWUuc2lkZXMsUz1DLnByZXZpb3VzLFc9Qy5uZXh0LE09Uy5tYXJnaW5MZWZ0K1Mud2lkdGgrUy5tYXJnaW5SaWdodCtXLm1hcmdpbkxlZnQrVy53aWR0aCtXLm1hcmdpblJpZ2h0O2Uuc2lkZXMuZW5hYmxlZCYmKGstPU0pO3ZhciBUPXgqeTtUPChrPU1hdGguZmxvb3Ioay95KSp5KSYmKGs9VCk7dmFyIEk9aysoZS5zaWRlcy5lbmFibGVkP006MCk7ZS5pcHA9TWF0aC5yb3VuZChrL3kpLHRoaXMuX21vZGU9XCJwYWdlXCIsZS5pcHA8PTEmJihJPWs9YixlLnNpZGVzLmVuYWJsZWQ9ITEsdGhpcy5fbW9kZT1cImNlbnRlclwiKSxlLnBhZ2VzPU1hdGguY2VpbCh4KnkvayksZS53cmFwcGVyPXt3aWR0aDpJKzEsaGVpZ2h0OmZ9LGUudGh1bWJzPXt3aWR0aDprLGhlaWdodDpmfSxlLnNsaWRlPXt3aWR0aDp4KnkrMSxoZWlnaHQ6Zn0sbHx8aS5oaWRlKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKX0saGlkZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZSgpLHRoaXMudGh1bWJuYWlscy5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247cmV0dXJue3dpZHRoOmk/dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoOnRoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQsaGVpZ2h0Omk/dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodDp0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGh9fSxmaXRUb1ZpZXdwb3J0OmZ1bmN0aW9uKCl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIGk9JC5leHRlbmQoe30sdGhpcy5fdmFycyksZT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uOyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZXNpemUoKX0pLHRoaXMuX3ByZXZpb3VzW2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl9uZXh0W2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl90aHVtYnMuY3NzKHt3aWR0aDppLnRodW1ic1tlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS50aHVtYnNbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLl9zbGlkZS5jc3Moe3dpZHRoOmkuc2xpZGVbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkuc2xpZGVbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KTt2YXIgdD17d2lkdGg6aS53cmFwcGVyW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLndyYXBwZXJbZT9cImhlaWdodFwiOlwid2lkdGhcIl19O3RbXCJtYXJnaW4tXCIrKGU/XCJsZWZ0XCI6XCJ0b3BcIildPU1hdGgucm91bmQoLS41Kmkud3JhcHBlci53aWR0aCkrXCJweFwiLHRbXCJtYXJnaW4tXCIrKGU/XCJ0b3BcIjpcImxlZnRcIildPTAsdGhpcy53cmFwcGVyLmNzcyh0KSx0aGlzLl9wb3NpdGlvbiYmdGhpcy5tb3ZlVG8odGhpcy5fcG9zaXRpb24sITApfX0sbW92ZVRvUGFnZTpmdW5jdGlvbihpKXtpZighKGk8MXx8aT50aGlzLl92YXJzLnBhZ2VzfHxpPT09dGhpcy5fcGFnZSkpe3ZhciBlPXRoaXMuX3ZhcnMuaXBwKihpLTEpKzE7dGhpcy5tb3ZlVG8oZSl9fSxwcmV2aW91c1BhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZS0xKX0sbmV4dFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZSsxKX0sc2hvdzpmdW5jdGlvbihpKXt2YXIgZT10aGlzLl9wb3NpdGlvbjwwO2k8MSYmKGk9MSk7dmFyIHQ9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7dDxpJiYoaT10KSx0aGlzLl9wb3NpdGlvbj1pLHRoaXMuc2V0QWN0aXZlKGkpLFwicGFnZVwiPT09dGhpcy5fbW9kZSYmdGhpcy5fcGFnZT09PU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKXx8dGhpcy5tb3ZlVG8oaSxlKX0sbW92ZVRvOmZ1bmN0aW9uKGksZSl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIHQscyxuPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24sbz0uNSpCb3VuZHMudmlld3BvcnQoKVtuP1wid2lkdGhcIjpcImhlaWdodFwiXSxhPXRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGg7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtzPU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKSx0aGlzLl9wYWdlPXMsdD1hKih0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKi0xO3ZhciBoPVwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1kaXNhYmxlZFwiO3RoaXMuX3ByZXZpb3VzX2J1dHRvblsoczwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKSx0aGlzLl9uZXh0X2J1dHRvblsocz49dGhpcy5fdmFycy5wYWdlcz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCl9ZWxzZSB0PW8rLTEqKGEqKGktMSkrLjUqYSk7cz1QYWdlcy5wYWdlO3ZhciByPXt9LGQ9e307cltuP1widG9wXCI6XCJsZWZ0XCJdPTAsZFtuP1wibGVmdFwiOlwidG9wXCJdPXQrXCJweFwiLHRoaXMuX3NsaWRlLnN0b3AoITApLmNzcyhyKS5hbmltYXRlKGQsZT8wOnMmJnMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlscy5zbGlkZXx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5sb2FkQ3VycmVudFBhZ2UoKX0sdGhpcykpfX0sbG9hZEN1cnJlbnRQYWdlOmZ1bmN0aW9uKCl7dmFyIGksZTtpZih0aGlzLl9wb3NpdGlvbiYmdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCYmISh0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwxKSl7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtpZih0aGlzLl9wYWdlPDEpcmV0dXJuO2k9KHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHArMSxlPU1hdGgubWluKGktMSt0aGlzLl92YXJzLmlwcCx0aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9ZWxzZXt2YXIgdD1NYXRoLmNlaWwodGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoL3RoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgpO2k9TWF0aC5tYXgoTWF0aC5mbG9vcihNYXRoLm1heCh0aGlzLl9wb3NpdGlvbi0uNSp0LDApKSwxKSxlPU1hdGguY2VpbChNYXRoLm1pbih0aGlzLl9wb3NpdGlvbisuNSp0KSksdGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8ZSYmKGU9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWZvcih2YXIgcz1pO3M8PWU7cysrKXRoaXMuX3RodW1ibmFpbHNbcy0xXS5sb2FkKCl9fSxzZXRBY3RpdmU6ZnVuY3Rpb24oaSl7dGhpcy5fc2xpZGUuZmluZChcIi5mci10aHVtYm5haWwtYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKTt2YXIgZT1pJiZ0aGlzLl90aHVtYm5haWxzW2ktMV07ZSYmZS5hY3RpdmF0ZSgpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb24mJnRoaXMuc2V0UG9zaXRpb24odGhpcy5fcG9zaXRpb24pfX07ZnVuY3Rpb24gVGh1bWJuYWlsKCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVGh1bWJuYWlsLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudmlldz1pLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5wcmVCdWlsZCgpfSxwcmVCdWlsZDpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbFwiKS5kYXRhKFwiZnItcG9zaXRpb25cIix0aGlzLl9wb3NpdGlvbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYoIXRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPXRoaXMudmlldy5vcHRpb25zO1RodW1ibmFpbHMuX3NsaWRlLmFwcGVuZCh0aGlzLnRodW1ibmFpbEZyYW1lPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1mcmFtZVwiKS5hcHBlbmQodGhpcy50aHVtYm5haWwuYXBwZW5kKHRoaXMudGh1bWJuYWlsV3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtd3JhcHBlclwiKSkpKSxcImltYWdlXCI9PT10aGlzLnZpZXcudHlwZSYmdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci1sb2FkLXRodW1ibmFpbFwiKS5kYXRhKFwidGh1bWJuYWlsXCIse3ZpZXc6dGhpcy52aWV3LHNyYzppLnRodW1ibmFpbHx8dGhpcy52aWV3LnVybH0pO3ZhciBlPWkudGh1bWJuYWlsJiZpLnRodW1ibmFpbC5pY29uO2UmJnRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaWNvbiBmci10aHVtYm5haWwtaWNvbi1cIitlKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5sb2FkaW5nPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZy1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5zcGlubmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyXCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXItc3BpblwiKSkpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYm9yZGVyXCIpKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zdGF0ZVwiKSksdGhpcy5yZXNpemUoKX19LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsRnJhbWUmJih0aGlzLnRodW1ibmFpbEZyYW1lLnJlbW92ZSgpLHRoaXMudGh1bWJuYWlsRnJhbWU9bnVsbCx0aGlzLmltYWdlPW51bGwpLHRoaXMucmVhZHkmJih0aGlzLnJlYWR5LmFib3J0KCksdGhpcy5yZWFkeT1udWxsKSx0aGlzLnZpbWVvVGh1bWJuYWlsJiYodGhpcy52aW1lb1RodW1ibmFpbC5hYm9ydCgpLHRoaXMudmltZW9UaHVtYm5haWw9bnVsbCksdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9yZW1vdmVkPSEwLHRoaXMudmlldz1udWxsLHRoaXMuX2NsZWFyRGVsYXkoKX0sbG9hZDpmdW5jdGlvbigpe2lmKCEodGhpcy5fbG9hZGVkfHx0aGlzLl9sb2FkaW5nfHx0aGlzLl9yZW1vdmVkKSl7dGhpcy50aHVtYm5haWxXcmFwcGVyfHx0aGlzLmJ1aWxkKCksdGhpcy5fbG9hZGluZz0hMDt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy50aHVtYm5haWwsZT1pJiZcImJvb2xlYW5cIj09PSQudHlwZShpKT90aGlzLnZpZXcudXJsOml8fHRoaXMudmlldy51cmw7aWYodGhpcy5fdXJsPWUpaWYoXCJ2aW1lb1wiPT09dGhpcy52aWV3LnR5cGUpaWYoZT09PWkpdGhpcy5fdXJsPWUsdGhpcy5fbG9hZCh0aGlzLl91cmwpO2Vsc2Ugc3dpdGNoKHRoaXMudmlldy50eXBlKXtjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9UaHVtYm5haWw9bmV3IFZpbWVvVGh1bWJuYWlsKHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl91cmw9aSx0aGlzLl9sb2FkKGkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykpfWVsc2UgdGhpcy5fbG9hZCh0aGlzLl91cmwpfX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIil9LF9sb2FkOmZ1bmN0aW9uKGkpe3RoaXMudGh1bWJuYWlsV3JhcHBlci5wcmVwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpLmF0dHIoe3NyYzppfSkuY3NzKHtvcGFjaXR5OjFlLTR9KSksdGhpcy5mYWRlSW5TcGlubmVyKCksdGhpcy5yZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5pbWc7dGhpcy50aHVtYm5haWxGcmFtZSYmdGhpcy5fbG9hZGluZyYmKHRoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOmUubmF0dXJhbFdpZHRoLGhlaWdodDplLm5hdHVyYWxIZWlnaHR9LHRoaXMucmVzaXplKCksdGhpcy5zaG93KCkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KX0sX2Vycm9yOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZXJyb3JcIiksdGhpcy5pbWFnZSYmdGhpcy5pbWFnZS5oaWRlKCksdGhpcy50aHVtYm5haWxXcmFwcGVyLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikpLHRoaXMuc2hvdygpfSxmYWRlSW5TcGlubmVyOmZ1bmN0aW9uKCl7aWYoU3Bpbm5lci5zdXBwb3J0ZWQmJnRoaXMudmlldy5vcHRpb25zLnNwaW5uZXIpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLl9kZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNwaW5uZXIuc3RvcCghMCkuZmFkZVRvKGkuc2hvd3x8MCwxKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKX19LHNob3c6ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5sb2FkaW5nLnN0b3AoITApLmRlbGF5KGkuZGVsYXkpLmZhZGVUbyhpLnNob3csMCl9LF9jbGVhckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fZGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpLHRoaXMuX2RlbGF5PW51bGwpfSxyZXNpemU6ZnVuY3Rpb24oKXtpZih0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO2lmKHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt3aWR0aDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3RvcDppPzA6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSksbGVmdDppP1RodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpOjB9KSx0aGlzLnRodW1ibmFpbFdyYXBwZXIpe3ZhciBlPVRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsO2lmKHRoaXMudGh1bWJuYWlsLmNzcyh7d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHQsXCJtYXJnaW4tdG9wXCI6TWF0aC5yb3VuZCgtLjUqZS5oZWlnaHQpLFwibWFyZ2luLWxlZnRcIjpNYXRoLnJvdW5kKC0uNSplLndpZHRoKSxcIm1hcmdpbi1ib3R0b21cIjowLFwibWFyZ2luLXJpZ2h0XCI6MH0pLHRoaXMuX2RpbWVuc2lvbnMpe3ZhciB0LHM9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxuPU1hdGgubWF4KHMud2lkdGgscy5oZWlnaHQpLG89JC5leHRlbmQoe30sdGhpcy5fZGltZW5zaW9ucyk7aWYoby53aWR0aD5zLndpZHRoJiZvLmhlaWdodD5zLmhlaWdodCl7dmFyIGE9MSxoPTE7KHQ9Rml0LndpdGhpbihzLG8pKS53aWR0aDxzLndpZHRoJiYoYT1zLndpZHRoL3Qud2lkdGgpLHQuaGVpZ2h0PHMuaGVpZ2h0JiYoaD1zLmhlaWdodC90LmhlaWdodCk7dmFyIHI9TWF0aC5tYXgoYSxoKTsxPHImJih0LndpZHRoKj1yLHQuaGVpZ2h0Kj1yKSwkLmVhY2goXCJ3aWR0aCBoZWlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oaSxlKXt0W2VdPU1hdGgucm91bmQodFtlXSl9KX1lbHNlIHQ9Rml0LndpdGhpbih0aGlzLl9kaW1lbnNpb25zLG8ud2lkdGg8cy53aWR0aHx8by5oZWlnaHQ8cy5oZWlnaHQ/e3dpZHRoOm4saGVpZ2h0Om59OnMpO3ZhciBkPU1hdGgucm91bmQoLjUqcy53aWR0aC0uNSp0LndpZHRoKSxsPU1hdGgucm91bmQoLjUqcy5oZWlnaHQtLjUqdC5oZWlnaHQpO3RoaXMuaW1hZ2UucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcygkLmV4dGVuZCh7fSx0LHt0b3A6bCxsZWZ0OmR9KSl9fX19fSk7dmFyIFVJPXtfbW9kZXM6W1wiZnVsbGNsaWNrXCIsXCJvdXRzaWRlXCIsXCJpbnNpZGVcIl0sX3VpOiExLF92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3I6W1wiLmZyLWNvbnRlbnQtZWxlbWVudFwiLFwiLmZyLWNvbnRlbnRcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZVwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlIC5mci1zdHJva2UtY29sb3JcIl0uam9pbihcIiwgXCIpLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzW2VdLmluaXRpYWxpemUoKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktaW5zaWRlLWhpZGRlbiBmci11aS1mdWxsY2xpY2staGlkZGVuXCIpfSxzZXQ6ZnVuY3Rpb24oaSl7dGhpcy5fdWkmJihXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy11aS1cIit0aGlzLl91aSksT3ZlcmxheS5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS11aS1cIit0aGlzLl91aSkpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXVpLVwiK2kpLE92ZXJsYXkuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktdWktXCIraSksdGhpcy5fZW5hYmxlZCYmdGhpcy5fdWkmJnRoaXMuX3VpIT09aSYmKHRoaXNbdGhpcy5fdWldLmRpc2FibGUoKSx0aGlzW2ldLmVuYWJsZSgpLFVJW2ldLnNob3coKSksdGhpcy5fdWk9aX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5zaG93KCl9LGVuYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV1bZT09PXRoaXMuX3VpP1wiZW5hYmxlXCI6XCJkaXNhYmxlXCJdKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSEwfSxkaXNhYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5kaXNhYmxlKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSExfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5hZGp1c3RQcmV2TmV4dChpLGUpfSxzaG93OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLnNob3coaSxlKX0saGlkZTpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5oaWRlKGksZSl9LHJlc2V0OmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5yZXNldCgpfSx0aGlzKSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmdGhpcy5zZXQoaS5fdWkpfX07cmV0dXJuIFVJLmZ1bGxjbGljaz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2UtZnVsbGNsaWNrXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMucmVzZXRQcmV2TmV4dCgpLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxyZXNldFByZXZOZXh0OmZ1bmN0aW9uKCl7dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLnN0b3AoITApLnJlbW92ZUF0dHIoXCJzdHlsZVwiKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtzfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIG49dGhpcy5fcHJldmlvdXMuYXR0cihcInN0eWxlXCIpO3RoaXMuX3ByZXZpb3VzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgbz1wYXJzZUludCh0aGlzLl9wcmV2aW91cy5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLl9wcmV2aW91cy5hdHRyKHtzdHlsZTpufSksc3x8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBhPXQuX2luZm9IZWlnaHR8fDAsaD10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkscj17XCJtYXJnaW4tdG9wXCI6by0uNSphfSxkPVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvd3x8MDt0aGlzLm9wZW5pbmcmJihkPTApLGguc3RvcCghMCkuYW5pbWF0ZShyLGQsaSksdGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLGhbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZihlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpc3dpdGNoKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpKWlmKDEhPT1QYWdlcy5wYWdlcy5sZW5ndGgpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX1lbHNlIFdpbmRvdy5oaWRlKCl9LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3LnR5cGU7dGhpcy5fdmlzaWJsZSYmKCFlfHxcInlvdXR1YmVcIiE9PWUmJlwidmltZW9cIiE9PWUpJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktZnVsbGNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkuaW5zaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7fSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5fb25Nb3VzZUxlYXZlKGkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5jbGVhclRpbWVyKCl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuX3BhZ2VzLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIpLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudC1lbGVtZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpKXtpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGUmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1pbnNpZGVcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1pbnNpZGVcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5vdXRzaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktb3V0c2lkZVwiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KTt0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksc1sodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LHNob3c6ZnVuY3Rpb24oKXtCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCl9LGhpZGU6ZnVuY3Rpb24oKXt9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe319LCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGkpe19GcmVzY28uaW5pdGlhbGl6ZSgpfSksRnJlc2NvfSk7IiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuaW1wb3J0IEZyZXNjbyBmcm9tICcuL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuLy8gR0VORVJBTCBGVU5DVElPTlNcbmltcG9ydCB7IGNhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVHYWxsZXJ5RGVza3RvcCB9IGZyb20gJy4vanMvY2Fyb3VzZWwuanMnO1xuaW1wb3J0IGNoZWNrb3V0IGZyb20gJy4vanMvY2hlY2tvdXQtbm9ibGVzcy5qcyc7XG5pbXBvcnQge3Byb2R1Y3QsIGZpbHRlclByb2R1Y3RzLCByZXNpemVGaWx0ZXJNZW51fSBmcm9tICcuL2pzL3Byb2R1Y3Qtbm9ibGVzcyc7XG5pbXBvcnQgY2FydCBmcm9tICcuL2pzL2NhcnQtbm9ibGVzcy5qcyc7XG5pbXBvcnQgc2hhcmVQcm9kdWN0IGZyb20gJy4vanMvc2hhcmUtcHJvZHVjdC5qcyc7XG5pbXBvcnQgbG9naW5QYWdlIGZyb20gJy4vanMvbG9naW4tbm9ibGVzcy5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9qcy9jb250YWN0LW5vYmxlc3MnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIE1FTlUgRlVOQ1RJT05TXG4vLyBPUkRFUlMgR1JJRCBGVU5DVElPTlNcblxuXG4vKipcbiAqIFJlc2l6ZSBmdW5jdGlvbiB0byBrZWVwIGFsbCB0aGUgbWFpbi1jb250ZW50IHZpc2libGVcbiAqL1xuZnVuY3Rpb24gcmVzaXplTWFpbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCI7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAvKiQoJyNtYWluQ29udGVudENvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Ki9cblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICBsZXQgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCkgLSAkKCcjY2FydFdpZGdldFRpdGxlJykub3V0ZXJIZWlnaHQoKSAtIDIwO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWNhcnQnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICBpZiAoISQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmhhc0NsYXNzKCdkLW5vbmUnKSkge1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKSAtIDIwO1xuICAgICAgICAkKCcjaGVhZGVyQ2FydE5ld0l0ZW0nKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cblxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gICAgLy8gQ2FydCBJY29uXG4gICAgaWYgKCQodGhpcykuY2xvc2VzdCgnLmRyb3Bkb3duJykuaGFzQ2xhc3MoJ2NhcnQtYnRuJykpIHtcbiAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmh0bWwoJycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjY2FydEFjdGlvbnMgLmNhcnQtc3VidG90YWwnKS5hZGRDbGFzcygnZC1mbGV4JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2NhcnRBY3Rpb25zIC5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5jYXJ0LWRyb3Bkb3duIC5jbG9zZS1jYXJ0LXdpZGdldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcuZHJvcGRvd24uY2FydC1idG4gLmRyb3Bkb3duLXRvZ2dsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJUYXhvbnMnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJBY2NvdW50TGlua3MnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9yZGVyc0dyaWRGdW5jdGlvbnMoKSB7XG4gIC8vIERlc2t0b3AgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJ3RyJywgdGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gIC8vIE1vYmlsZSBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmFkZENsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJy5hcnJvdy1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2Lm9yZGVyLWRldGFpbHMnKS5wcmV2KCdkaXYnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGNhcm91c2VsKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBzaGFyZVByb2R1Y3QoKTtcbiAgcmVzaXplTWVudSgkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpKTtcbiAgcmVzaXplRmlsdGVyTWVudSgpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICBGcmVzY28uaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjYXJvdXNlbCgpO1xuICBuYXZiYXJDb2xsYXBzZUluaXQoKTtcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgfSk7XG4gIC8vIFBSRVZFTlQgSU5TSURFIENMSUNLIERST1BET1dOXG4gICQoJy5kcm9wZG93bi1tZW51Jykub24oXCJjbGljay5icy5kcm9wZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICBzaGFyZVByb2R1Y3QoKTtcbiAgcHJvZHVjdCgpO1xuICBmaWx0ZXJQcm9kdWN0cygpO1xuICAvLyBNZW51IEZ1bmN0aW9uc1xuICBtZWdhbWVudUZ1bmN0aW9ucygpO1xuICBtZW51SWNvbmVzRnVuY3Rpb25zKCk7XG5cbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2UoKTtcbiAgY2FydCgpO1xuICBjaGVja291dCgpO1xuXG4gIGNvbnRhY3RQYWdlKCk7XG5cbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgcmVwbGFjZUNhcm91c2VsQXJyb3coKTtcbiAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgfSovXG4gIC8vIFNob3cgbWVudSBhZnRlciBwYWdlIGlzIGxvYWRlZFxuICAkKCcubW9iaWxlLW9mZmNhbnZhcycpLnNob3coKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLnNob3coKTtcbn1cblxuZXhwb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuLy9pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbi8vIGltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IHsgU3lsaXVzTG9hZGFibGVGb3JtcyB9IGZyb20gJy4vanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcbmltcG9ydCB7YWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgYWRkVG9DYXJ0RnVuY3Rpb25zIH0gZnJvbSAnLi9qcy9zeWxpdXMtY2FydC1jb21tb24nO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICBhZGRUb0NhcnRGdW5jdGlvbnMoKTtcblxuICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgLy9TeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIC8vIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIC8vIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgLy8gfVxuICAvLyBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICAvLyB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJPVVNFTCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgRnJlc2NvIGZyb20gJy4uL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuY29uc3QgY2Fyb3VzZWwgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKSk7XG5cbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNwcm9kdWN0R2FsbGVyeScpKTtcbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpLCB0cnVlKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIG1haW4gY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgc2xpZGVzVG9TaG93OiA0LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuXG4gICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGNhcm91c2Vsc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50LCBpc0NhcnRJdGVtc0Nhcm91c2VsID0gZmFsc2UpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBjYXJvdXNlbEVsZW1lbnRbMF0uc2xpY2sgJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKHNsaWNrKXtcbiAgICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGNhcm91c2VsRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgY2Fyb3VzZWwgd2hlbiB1c2VyIGhhdmUgbW9yZSB0aGFuIDQgYWRkcmVzc2VzIGluIENoZWNrb3V0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNzAwLFxuICAgIHJvd3M6IDIsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHNsaWRlc1BlclJvdzogMixcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHJvd3M6IDMsXG4gICAgICAgICAgc2xpZGVzUGVyUm93OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgdmlzaWJsZVNsaWRlckRpdiA9ICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ2Qtbm9uZScpO1xuICBpZih2aXNpYmxlU2xpZGVyRGl2ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0cyk7XG4gIH0gZWxzZSBpZiAoY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBjYXJvdXNlbCBhcnJvd3MgdmVydGljYWxseVxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3QgaW1nU2VsZWN0b3IgPSAnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJztcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgbGV0IGFycm93VG9wVmFsdWU7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IsIGNhcm91c2VsRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoY2Fyb3VzZWxFbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH0gZWxzZSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJChpbWdTZWxlY3Rvcikub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoJy5zbGlkZXItY29udHJvbHMnKS5ub3QoJy5wcm9kdWN0LWdhbGxlcnknKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIG9ubHkgb24gY2FydCBpdGVtcyBjYXJvdXNlbFxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBjb25zdCBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIGltZycsIGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAtIDAuMiAqIGltZ1NsaWRlckhlaWdodCk7XG4gIGVsZW1lbnQubmV4dCgpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xufVxuXG5leHBvcnQge2Nhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgY29udGFpbmVyID0gJCgnI2NhcnRQYWdlJyk7XG5jb25zdCBib2R5Q29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBjYXJ0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gV2hlbiByZWxvYWRpbmcgcXVhbnRpdGllc1xuICAvLyBEZXNrdG9wXG4gICQoJy5yZWxvYWQtcXR5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1pdGVtLWluZm8nKS5oYXNDbGFzcygnb3V0LW9mLXN0b2NrJykpIHtcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xuICAgICAgaWYgKG5ld1F0eSA8PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgY3VzdG9tZXIgdG8gYWRkIG1vcmUgdGhhbiA1IHRpbWVzIGEgcHJvZHVjdFxuICAkKCcucXR5JywgY29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIElmIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLCBub3RoaW5nIGhhcHBlbnNcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS5hdHRyKCdtYXgnKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICAgIGlmIChjb3Vwb24gPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKGNvdXBvbik7XG4gICAgICB9XG5cbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gY291cG9uIGNvZGUgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IGJvbnVzIHBvaW50c1xuICAkKCcuYm9udXMtcG9pbnRzLWJ0bicsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgY291cG9uIGNvZGVcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgYm9udXNQb2ludHMgPSAkKCcuYm9udXMtcG9pbnRzJykudmFsKCk7XG4gICAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgICAgfVxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmRlbGV0ZS1ib251cy1wb2ludHMnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGJvbnVzIHBvaW50c1xuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBib251cyBwb2ludHMgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5ib251cy1wb2ludHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCcnKTtcbiAgfSk7XG5cbiAgaWYoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCQoJyNiaXRiYWctYm9udXMtcG9pbnRzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5ib251cy1wb2ludHMnKS52YWwoJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCkpO1xuICB9XG5cbiAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYnV0dG9uIGxpbmtlZCB0byBjaGVja291dCBwYWdlXG4gICQoJ2EuYnRuLXRvLWNoZWNrb3V0JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ0hFQ0tPVVQgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgeyBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcblxuLy8gTWFpbiBmdW5jdGlvbiB1c2VkIGluIGluaXRcbmNvbnN0IHNhdmVCdXR0b24gPSAkKCcjY2hlY2tvdXRQYWdlIC5zYXZlLWluLWFjY291bnQnKTtcbmNvbnN0IGNhbmNlbEJ0biA9ICQoJyNjaGVja291dFBhZ2UgLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycpO1xuXG5jb25zdCBjaGVja291dCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjaGVja291dFBhZ2UnKTtcbiAgLy8gV2hlbiB0aGUgdXNlciB3YW50cyB0byBjaGFuZ2UgaGlzIGFkZHJlc3NcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2NsaWNrZWQnKSAmJiAhJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuXG4gICAgICBjYW5jZWxCdG4uc2hvdygpO1xuICAgICAgY2FuY2VsQnRuLnByZXYoKS5oaWRlKCk7XG5cbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0gLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnY2hhbmdlJywgY29udGFpbmVyKTtcbiAgICAgIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCgkKCcjY2Fyb3VzZWxBZGRyZXNzTGlzdCcpKTtcbiAgICAgIC8vIENyZWF0ZSBldmVudCBvbiBhZGRyZXNzIGl0ZW0gYWZ0ZXIgY2Fyb3VzZWwgaXMgb3BlblxuICAgICAgJCgnLmNob29zZS1hZGRyZXNzIC5jaG9vc2UtYWRkcmVzcy1pdGVtIGFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2hvb3NlQWRkcmVzcygkKHRoaXMpLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgd2FudHMgdG8gYWRkIGEgbmV3IGFkZHJlc3MgdG8gaGlzIGFjY291bnRcbiAgJCgnYS5jaGVja291dC1hZGQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCgkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzLmNsaWNrZWQnLCBjb250YWluZXIpWzBdKVsxXTtcbiAgICBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBzYXZlIGEgbmV3IGFkZHJlc3NcbiAgc2F2ZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhZGRyZXNzVHlwZSA9ICdzaGlwcGluZyc7XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgICAgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbM107XG4gICAgICAkKCcjY2hlY2tvdXRQYWdlIC5kYXRhLScgKyBhZGRyZXNzVHlwZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGQgKyAnXSc7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGROYW1lO1xuICAgICAgICBjb25zdCB0b1JlcGxhY2UgPSAnLmNoYW5nZS0nKyBhZGRyZXNzVHlwZSArJy1hZGRyZXNzICcgKyBmaWVsZE5hbWU7XG4gICAgICAgICQodG9SZXBsYWNlKS52YWwoJCh0b1NhdmUpLnZhbCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVja291dFNhdmVBZGRyZXNzKHRoaXMsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIGFkZHJlc3MgcGFnZSBuZXh0IGJ1dHRvblxuICAkKCcubWFpbi1hZGRyZXNzLWZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBmaWxsQWxsQWRkcmVzc2VzKGNvbnRhaW5lcik7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBjaGFuZ2VzXG4gICQoJ2EuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgYWRkXG4gICQoJ2EuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIEJ1bmRsZSBkZXRhaWxzIHRvb2x0aXBcbiAgJCgnLmJ1bmRsZS1kZXRhaWxzJylcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoJy5idW5kbGUtZGV0YWlscy10b29sdGlwJykuaHRtbCgkKCcuY3VzdG9tLXRvb2x0aXAnLCAkKHRoaXMpKS5odG1sKCkpLmNzcyh7J2xlZnQnOiAkKHRoaXMpLm9mZnNldCgpLmxlZnQgKyAyMCwgJ3RvcCc6ICQodGhpcykub2Zmc2V0KCkudG9wICsgMjAsICdkaXNwbGF5JzogJ2Jsb2NrJ30pO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoJy5idW5kbGUtZGV0YWlscy10b29sdGlwJykuaHRtbCgnJykuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pO1xuICAgIH0pXG59O1xuXG4vLyBXaGVuIHVzZXIgY2hvc2UgYW4gYWRkcmVzcyBpcyB0aGUgYWRkcmVzc2VzIGxpc3RcbmZ1bmN0aW9uIGNob29zZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuZGF0YS1hZGRyZXNzJywgZWxlbWVudCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgY29uc3QgZmllbGRTZWxlY3RvciA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGRTZWxlY3RvcjtcbiAgICBjb25zdCBjaG9zZW5BZGRyZXNzVGV4dCA9ICcuZGF0YS0nKyBhZGRyZXNzVHlwZSArJy4nICsgZmllbGROYW1lO1xuXG4gICAgbGV0IGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgJChjaG9zZW5BZGRyZXNzVGV4dCkudGV4dChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBjaG9zZW5WYWx1ZSA9ICQodGhpcykudGV4dCgpLnN1YnN0cmluZygwLCAyKTtcbiAgICB9XG4gICAgJChmb3JtRmllbGQpLnZhbChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICAgIGlmICgkKHRoaXMpLnRleHQoKS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS5jbG9zZXN0KCdhZGRyZXNzJykuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBjaG9zZW5WYWx1ZSk7XG4gIH0pO1xuICAkKCcjc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbn1cblxuLyogU2F2ZSBhZGRyZXNzIGluIHVzZXIgYWNjb3VudCA6IFJldHVybnMgZXJyb3JzIGluIGZvcm0gaWYgbm90IHZhbGlkICovXG5mdW5jdGlvbiBjaGVja291dFNhdmVBZGRyZXNzKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgY29uc3QgZm9ybSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnZm9ybScpO1xuICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc190eXBlXCJdJywgZm9ybSkudmFsKGFkZHJlc3NUeXBlKTtcbiAgZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc3QgZGF0YVN1Y2Nlc3NEaXYgPSAkKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IG5vQWRkcmVzcyA9IHNhdmVCdXR0b24uaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpO1xuICAgICAgaWYoZGF0YVN1Y2Nlc3NEaXYuaGFzQ2xhc3MoJ3NhdmUtYWRkcmVzcy1zdWNjZXNzJykpIHtcbiAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcblxuICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKHRoaXMsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICAvLyBJZiBVc2VyIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgICAgICAgICBpZiAobm9BZGRyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICcuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKCcuYWRkcmVzcy1ib29rJywgY29udGFpbmVyKS5odG1sKCQoJy5hZGRyZXNzLWJvb2snLCBkYXRhU3VjY2Vzc0RpdikuaHRtbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAkKCcubm8tYWRkcmVzc2VzLXRleHQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICBzaG93TWFpbkZvcm0oY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICQodGhpcykuY2xvc2VzdCgnbGFiZWwnKS5hdHRyKCdmb3InKTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2lkPVwiJysgZmllbGROYW1lICsnXCJdJywgY29udGFpbmVyKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1lcnJvci1tZXNzYWdlIGQtYmxvY2tcIj4nICsgZmllbGRFcnJvciArICc8L3NwYW4+PC9zcGFuPicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KVxufVxuXG4vKiBGaWxsIGFkZHJlc3MgZm9ybSBmaWVsZHMgdG8gYXZvaWQgZXJyb3JzICovXG5mdW5jdGlvbiBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGtlZXBDYW1lbEZpZWxkID0gWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnY291bnRyeUNvZGUnXTtcbiAgY29uc3QgZGF0YVRvRmlsbCA9ICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5kYXRhKCk7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoIWtlZXBDYW1lbEZpZWxkLmluY2x1ZGVzKGZpZWxkTmFtZSkpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICAkKHRoaXMpLnZhbChkYXRhVG9GaWxsW2ZpZWxkTmFtZV0pO1xuICB9KTtcbiAgJCgnI2luQWNjb3VudF9zYXZlX2RpZmZlcmVudEJpbGxpbmdBZGRyZXNzJywgY29udGFpbmVyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG59XG5cbi8qIEZpbGwgYWRkcmVzc2VzIHdoZW4gdXNlciBjbGlja3Mgb24gbmV4dCBidXR0b24gKi9cbmZ1bmN0aW9uIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKSB7XG4gIFsnc2hpcHBpbmcnLCAnYmlsbGluZyddLmZvckVhY2goKGFkZHJlc3NUeXBlKSA9PiB7XG4gICAgY29uc3QgZmllbGRJZCA9ICdzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc18nICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzcyc7XG4gICAgZmlsbEFkZHJlc3MoZmllbGRJZCwgYWRkcmVzc1R5cGUsICcubWFpbi1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpXG4gIH0pXG59XG5cbi8qIEZpbGwgb3RoZXIgYWRkcmVzcyB0eXBlIGZvcm0gd2hlbiBzYXZpbmcgbmV3IGFkZHJlc3MgKi9cbmZ1bmN0aW9uIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBvdGhlckFkZHJlc3NUeXBlID0gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSk7XG4gIGxldCBmaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBvdGhlckFkZHJlc3NUeXBlO1xuICBpZiAoc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfVxufVxuXG4vLyBGaWxsIG90aGVyIG5ldyBhZGRyZXNzIGZvcm0gT05MWSBJRiB1c2VyIGRvbid0IGhhdmUgYWRkcmVzc2VzIHlldFxuZnVuY3Rpb24gZmlsbE90aGVyRm9ybShhZGRyZXNzVHlwZSwgb3RoZXJBZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIGFkZHJlc3NUeXBlO1xuICBjb25zdCBvdGhlckZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoZmllbGROYW1lICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgY29uc3QgaWRUb0ZpbGwgPSAnIycgKyBvdGhlckZpZWxkSWQgKyAnXycgKyBmaWVsZE5hbWU7XG4gICAgJChpZFRvRmlsbCkudmFsKCQodGhpcykudmFsKCkpO1xuICB9KTtcbn1cblxuLy8gRmlsbCBmb3JtIGFuZCBkaXYgZGF0YSB3aGVuIHNhdmUgbmV3IGFkZHJlc3NcbmZ1bmN0aW9uIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGNvbnRhaW5lcikge1xuICAvLyBHZXQgdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICBjb25zdCBuZXdWYWx1ZSA9ICQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBjb250YWluZXIpLmh0bWwoKTtcblxuICAvLyBDcmVhdGUgbWFpbiBmb3JtIGZpZWxkIHNlbGVjdG9yXG4gIGNvbnN0IGZvcm1GaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddJztcbiAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgLy8gUmVwbGFjZSBmaWVsZCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChmaWVsZFRvUmVwbGFjZSkudmFsKG5ld1ZhbHVlKTtcblxuICAvLyBSZXBsYWNlIHRleHQgd2l0aCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gICQoZWxlbWVudCkudGV4dChuZXdWYWx1ZSk7XG4gIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAkKGVsZW1lbnQpLnRleHQoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLmNvdW50cnlOYW1lJywgY29udGFpbmVyKS5odG1sKCkpO1xuICB9XG5cbiAgLy8gU2hvdyBvciBoaWRlIHN0cmVldDIgY29udGFpbmVyIGFjY29yZGluZyB0byB2YWx1ZVxuICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICBpZiAoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbGwgYWRkcmVzcyBkaXYgZGF0YVxuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSkuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBuZXdWYWx1ZSk7XG59XG5cbi8qIFNob3cgTWFpbiBmb3JtIHdoZW4gdXNlciBoYXZlIG5vIGFkZHJlc3NlcyAqL1xuZnVuY3Rpb24gc2hvd01haW5Gb3JtKGNvbnRhaW5lcikge1xuICAvLyBIaWRlIGRpdiBtZW50aW9uaW5nIHRoYXQgdXNlIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgJCgnLm5vLWFkZHJlc3MteWV0JywgY29udGFpbmVyKS5yZW1vdmUoKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybVxuICAkKCcuYWRkLXNoaXBwaW5nLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIC8vIEhpZGUgYWRkIG5ldyBhZGRyZXNzIGZvcm0gdGl0bGVcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAudXNlJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAuYWRkJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gIC8vIFNob3cgbmF2aWdhdGlvbiBidXR0b25zIGZyb20gbWFpbiBmb3JtXG4gICQoJy5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5uZXh0KCdhLmJ0bicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn1cblxuLyogSGlkZSBhZGRyZXNzIG1vZGlmaWNhdGlvbiBjb250YWluZXIgKi9cbmZ1bmN0aW9uIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICBjYW5jZWxCdG4uaGlkZSgpO1xuICBjYW5jZWxCdG4ucHJldigpLnNob3coKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKVswXS5zY3JvbGxUb3AgPSAwO1xufVxuXG4vKiBSZW1vdmUgZXJyb3IgaW5kaWNhdG9ycyB3aGVuIHNhdmUgYWRkcmVzcyBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuZnVuY3Rpb24gaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpIHtcbiAgLy8gVXNlIGFkZHJlc3NUeXBlIGNob3NlbiB3aGVuIHNhdmUgZm9ybSBpcyBzaG93blxuICBsZXQgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3Qoc2F2ZUJ1dHRvblswXSlbM107XG4gIGlmIChhZGRyZXNzVHlwZSA9PT0gJ25vLWFkZHJlc3NlcycpIHtcbiAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVs0XTtcbiAgfVxuICAkKCcuY2hhbmdlLScgKyBhZGRyZXNzVHlwZSArICctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoYW5nZS0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dCwgLnNhdmUtYWRkcmVzcy1mb3JtIHNlbGVjdCcsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5pbnZhbGlkLWZlZWRiYWNrJywgY29udGFpbmVyKS5yZW1vdmUoKTtcbn1cblxuLyogUmVwbGFjZSBhbGwgZm9ybSBhbmQgZGlzcGxheWVkIGFkZHJlc3MgZGF0YSB3aGVuIGNhbmNlbCBtb2RpZmljYXRpb25zICovXG5mdW5jdGlvbiBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvbGREYXRhID0gJCh0aGlzKS5kYXRhKCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSAodGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKSlbMV07XG4gICAgY29uc3QgZmllbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZERhdGEpO1xuXG4gICAgZmllbGROYW1lcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgZmllbGROYW1lID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnY291bnRyeU5hbWUnKSB7XG4gICAgICAgIGZpZWxkTmFtZSA9ICdjb3VudHJ5Q29kZSdcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRUb1JlcGxhY2UgPSAnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy4nICsgZmllbGROYW1lO1xuICAgICAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgICAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gICAgICAvLyBTZXQgZm9ybSB3aXRoIG9sZCBkYXRhXG4gICAgICAkKGZpZWxkVG9SZXBsYWNlLCBjb250YWluZXIpLnZhbChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIGlmIChlbGVtZW50ICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICAgIC8vIFNldCBjaG9zZW4gQWRkcmVzcyB3aXRoIG9sZCBkYXRhXG4gICAgICAgICQodGV4dFRvUmVwbGFjZSkudGV4dChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIFNob3cgYWRkIGFkZHJlc3MgZm9ybVxuZnVuY3Rpb24gc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJywgY29udGFpbmVyKS52YWwoJycpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG5cbiAgLy8gSGlkZSBhbGwgc2F2ZSBhZGRyZXNzIGZvcm1zIGJlZm9yZSBzaG93aW5nIHRoZSBjaG9zZW4gb25lXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmFkZC0nICsgYWRkcmVzc1R5cGUgKyAnLWFkZHJlc3MnLCBjb250YWluZXIpLnNob3coKTtcbn1cblxuLyogTWFuYWdlIHdoYXQgdHlwZSBvZiBhZGRyZXNzIHdpbGwgYmUgcmVwbGFjZSBhbmQvb3Igc2F2ZWQgKi9cbmZ1bmN0aW9uIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCBzZWxlY3RvclR5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gIC8vIEFsc28gTWFuYWdlIFNhdmVCdXR0b24gY2xhc3NcbiAgc2F2ZUJ1dHRvbi5hZGRDbGFzcyhhZGRyZXNzVHlwZSk7XG4gIHNhdmVCdXR0b24ucmVtb3ZlQ2xhc3MoZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT01NT04gRlVOQ1RJT05TICovXG4vKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEdldCBjbGFzcyBsaXN0IGZyb20gZ2l2ZW4gZWxlbWVudFxuZnVuY3Rpb24gZ2V0Q2xhc3NMaXN0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG59XG5cbi8vIEdldCBmaWVsZCBuYW1lIHRvIGZpbGwgZGF0YSBpbmZvIGluIC5jYW5jZWwtaW5mbyBkaXZcbmZ1bmN0aW9uIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSAvW0EtWl0vZ20uZXhlYyhmaWVsZE5hbWUpO1xuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoZmllbGROYW1lLnN1YnN0cigwLCBtYXRjaGVzLmluZGV4KSArICctJyArIGZpZWxkTmFtZS5zdWJzdHIobWF0Y2hlcy5pbmRleCwgZmllbGROYW1lLmxlbmd0aCkpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGROYW1lO1xufVxuXG4vLyBHZXQgb3RoZXIgYWRkcmVzcyB0eXBlIGZyb20gYWRkcmVzcyB0eXBlIGdpdmVcbmZ1bmN0aW9uIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpIHtcbiAgcmV0dXJuIChhZGRyZXNzVHlwZSA9PT0gJ3NoaXBwaW5nJykgPyAnYmlsbGluZycgOiAnc2hpcHBpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja291dDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT05UQUNUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgY29udGFjdFBhZ2UgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBBamF4IGNhbGwgd2hlbiBjb250YWN0IGZvcm0gaXMgc3VibWl0dGVkXG4gICQoJyNjb250YWN0UGFnZSBmb3JtIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsIC5tb2RhbC1ib2R5IGRpdicpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAvLyBEZWxldGUgYWxsIGVycm9ycyBvZiBmb3JtIHdoZW4gc3VjY2Vzc1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0nKS52YWwoJycpLnByb3AoIFwiY2hlY2tlZFwiLCBmYWxzZSApO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0sICNjb250YWN0UGFnZSBbZm9yXj1cInN5bGl1c19jb250YWN0X1wiXScpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDYpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgZXJyb3JMaXN0ID0gJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCdzcGFuJykudG9BcnJheSgpO1xuICAgICAgICAgIGVycm9yTGlzdC5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5vdXRlclRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5jbGFzc05hbWUgIT09ICdhY2NlcHRDZ3YnKSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICAgICAgICAgICAgLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPicgKyBlcnJvci5vdXRlclRleHQgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLm5leHQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MTcpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2UgLmNvbnRhY3QtZXJyb3InKS5odG1sKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIC8vIEFkZCBuZXcgZmllbGQgd2hlbiBjaG9zZW4gc3ViamVjdCBpcyBcIm90aGVyXCJcbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIExPR0lOIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBTeWxpdXNMb2FkYWJsZUZvcm0gfSBmcm9tICcuL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbmNvbnN0IGxvZ2luUGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE9wZW4gcmVzZXQgcGFzc3dvcmQgbW9kYWxcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG5cbiAgLy8gT25seSB3aGVuIGNsYXNzIGxvZ2luLWZvcm0gZXhpc3RzIGluIHBhZ2VcbiAgaWYoJCgnLmxvZ2luLWZvcm0nKSkge1xuICAgICQoJy5zdWJtaXQtbG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRWxlbWVudCA9ICQodGhpcykuZGF0YSgnZm9ybScpO1xuICAgICAgJChmb3JtRWxlbWVudCkuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgdmVyaWZ5LWFjY291bnQgZXhpc3RzIGluIHBhZ2VcbiAgY29uc3QgdmVyaWZ5QWNjb3VudE9iamVjdCA9ICQoJy52ZXJpZnktYWNjb3VudCcpO1xuICBpZih2ZXJpZnlBY2NvdW50T2JqZWN0KSB7XG4gICAgdmVyaWZ5QWNjb3VudE9iamVjdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiByZXNldFBhc3N3b3JkU3VibWl0IGJ1dHRvbiBleGlzdHMgaW4gcGFnZSwgQWpheCBjYWxsIHRvIHJlc2V0IHBhc3N3b3JkXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgbG9hZEFqYXhQYXNzd29yZFJlc2V0KCk7XG5cbiAgICAvLyBBY3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRNb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCEkKCcubW9kYWwtY29udGVudCcpLmhhc0NsYXNzKCdpcy1zdWNjZXNzJykpIHtcbiAgICAgICAgLy8gQWpheCBsb2FkXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9ICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG4gICAgICAgIGNvbnN0IHVybCA9ICQodGhpcykuZGF0YSgnYWpheC1wYXNzd29yZC1yZXF1ZXN0LXVybCcpO1xuICAgICAgICAkKCdmb3JtLmxvYWRhYmxlJywgdGhpcykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgbW9kYWxCb2R5Lmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9hZEFqYXhQYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICBTeWxpdXNMb2FkYWJsZUZvcm0oJCgnZm9ybS5sb2FkYWJsZScsIG1vZGFsQm9keSlbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgdmFsaWQgYmVmb3JlIHN1Ym1pdCByZWdpc3RlciBmb3JtXG4gICQoJ2J1dHRvbi5zdWJtaXQtcmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICQoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpKTtcbiAgICBjb25zdCBpbnB1dFJlZ2lzdGVyRm9ybSA9IHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsID0gaW5wdXRSZWdpc3RlckZvcm0udmFsKCk7XG4gICAgY29uc3QgaW52YWxpZFNwYW4gPSBpbnB1dFJlZ2lzdGVyRm9ybS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJyk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBpbnZhbGlkU3Bhbi5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFNwYW4uYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIGlucHV0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGVtYWlsIGZpZWxkIGlzIGZpbGxlZCBhbmQgY3VzdG9tZXIgd2FudHMgdG8gbW9kaWZ5IGl0cyB2YWx1ZVxuICAkKCcucmVnaXN0ZXItZm9ybSBpbnB1dCwgLmhlYWRlci1yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IGVtYWlsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gbG9hZEFqYXhQYXNzd29yZFJlc2V0KCkge1xuICAkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaXMtc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKCcubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9ycyAuZm9ybS1lcnJvci1tZXNzYWdlJykudGV4dCgkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9ycyB1bCBsaScpLnRleHQoKSk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5QYWdlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3IgPSAnI3Byb2R1Y3RzRmlsdGVycyc7XG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlID0gJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnO1xuXG5jb25zdCBwcmljZU1pblNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nO1xuY29uc3QgcHJpY2VNYXhTZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJztcblxuY29uc3QgcHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE1hbmFnZSB2YXJpYW50IGxpc3Qgd2hlbiBjbGlja2luZyBpbiBzaXplIGF2YWlsYWJsZVxuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnVuZGxlSXRlbSA9ICQodGhpcykuZGF0YSgnYnVuZGxlLWl0ZW0nKTtcbiAgICBjb25zdCB2YXJpYW50TGlzdENvbnRhaW5lciA9ICQodGhpcykuY2xvc2VzdCgnZGl2LnZhcmlhbnQtbGlzdCcpO1xuXG4gICAgaWYoYnVuZGxlSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcudmFyaWFudC1uYW1lW2RhdGEtYnVuZGxlLWl0ZW09XCInICsgYnVuZGxlSXRlbSArICdcIl0nKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWUnKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICAkKCcuaW52YWxpZC1mZWVkYmFjaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcblxuICAgIGlmICgkKHRoaXMpLmRhdGEoJ2FsbW9zdC1vdXQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgICAkKHRoaXMpLmFkZENsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gIH0pO1xuXG4gIC8vIFNob3cgb3IgaGlkZSB2YXJpYW50cyBsaXN0IGluIHByb2R1Y3RzIGNhcm91c2VsIGFjY29yZGluZyB0byBzY3JlZW4gc2l6ZVxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgICB9XG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAvLyBXaGVuIGNsaWNraW5nIG9uIGFkZCB0byBjYXJ0IGJ1dHRvbiA9PiBTRUUgc3lsaXVzLWFkZC10by1jYXJ0LmpzXG4gIC8vJCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IC5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgLy99KVxuXG4gICQoJ2lucHV0W2lkXj1cImJpdGJhZ19zeWxpdXNfcHJvZHVjdF9idW5kbGVfcGx1Z2luX2FkZF9wcm9kdWN0X2J1bmRsZV90b19jYXJ0X1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5maW5kKCdzcGFuLmludmFsaWQtZmVlZGJhY2snKS5hZGRDbGFzcygnaW5wdXQtY2hlY2tlZCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICB9KVxufTtcblxuY29uc3QgZmlsdGVyUHJvZHVjdHMgPSBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zKCkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IGNyaXRlcmlhID0gcXVlcnlTdHJpbmcuaW5kZXhPZignY3JpdGVyaWEnKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0Jyk7XG5cbiAgbGV0IHByaWNlU2xpZGVyO1xuICBsZXQgcHJpY2VTbGlkZXJNb2JpbGU7XG5cbiAgaWYgKHByaWNlSW5wdXQubGVuZ3RoID4gMCkge1xuICAgIHByaWNlU2xpZGVyID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvcik7XG4gICAgcHJpY2VTbGlkZXJNb2JpbGUgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKTtcblxuICAgIC8vIFdoZW4gdXNlciBjaGFuZ2VzIHByaWNlIGlucHV0IHZhbHVlXG4gICAgcHJpY2VJbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZihlLndoaWNoICE9PSA4ICYmICFpc05hTihTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSl7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBERVNLVE9QIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnRcbiAgY29uc3Qgc2l6ZUZpbHRlcklucHV0ID0gJCgnI3NpemVGaWx0ZXIgaW5wdXQnKTtcbiAgc2l6ZUZpbHRlcklucHV0LmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuICAgIGlmKHRoaXMuY2hlY2tlZCkge1xuICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnaW5wdXRbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICBzaXplRmlsdGVySW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIC8vIFZhbGlkYXRlIGZpbHRlcnMgb24gZGVza3RvcFxuICAkKCdhLnZhbGlkYXRlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyRm9ybScpLnN1Ym1pdCgpO1xuICB9KTtcblxuICAvKipcbiAgICogTUFOQUdFIE1PQklMRSBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50IG9uIG1vYmlsZVxuICAkKCcjY3JpdGVyaWFTaXplTW9iaWxlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSAkKGUudGFyZ2V0KS5kYXRhKCdpZCcpO1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5yZW1vdmVBdHRyKCdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQuaW5wdXQtc29ydGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyayAuY2hlY2tlZCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJChlLnRhcmdldCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgJChlLnRhcmdldCkubmV4dCgnLmNoZWNrbWFyaycpLmZpbmQoJy5jaGVja2VkJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSk7XG5cbiAgLy8gVmFsaWRhdGUgZmlsdGVyc1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZigkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykudmFsKCkgPT09ICdjcmVhdGVkQXQnKSB7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykucmVtb3ZlKCk7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZy1jcmVhdGVkQXQnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWlubGluZS1ibG9jaycpO1xuICAgIH1cbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gTW9iaWxlIGZpbHRlcnMgYmVoYXZpb3VyXG4gICQoJy5wcm9kdWN0LWZpbHRlcnMuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSkub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdFTkVSQUwgRlVOQ1RJT05TXG4gICAqL1xuICAvLyBIaWRlIHJlaW5pdGlhbGl6YXRpb24gYnV0dG9uIHdoZW4gZmlsdGVycyBoYXZlIG5vIGNyaXRlcmlhXG4gIGlmIChjcml0ZXJpYSAhPT0gLTEpIHtcbiAgICAkKCcucmVpbml0LWZpbHRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICB9XG4gIC8vIEFkZCBhY3Rpb24gdG8gY2xvc2UgaWNvblxuICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5kcm9wZG93bi10b2dnbGUnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkIHRvIGF2b2lkIHNob3dpbmcgZmlsdGVyIG1vYmlsZSBtZW51IG9uIGRlc2t0b3BcbiAqL1xuY29uc3QgcmVzaXplRmlsdGVyTWVudSA9IGZ1bmN0aW9uIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gJCgnI2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlckJhbm5lciA9ICQoJy5oZWFkZXItYmFubmVyJyk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLmhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLm91dGVySGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCA9ICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2ZpbHRlclN1Ym1pdCcpLm91dGVySGVpZ2h0KCkgLSAxMDtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJykuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjZmlsdGVyTGlzdCcpLmNzcygnaGVpZ2h0JywgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByaWNlIHNsaWRlciBvbiB0YXhvbiBwYWdlc1xuICpcbiAqIEBwYXJhbSBwcmljZUlucHV0XG4gKiBAcGFyYW0gY29udGFpbmVyU2VsZWN0b3JcbiAqIEByZXR1cm5zIG5vVWlTbGlkZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgY29uc3QgcHJpY2VDb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgY29uc3QgcHJpY2VSYW5nZSA9ICQoJyNwcmljZVJhbmdlJywgcHJpY2VDb250YWluZXIpWzBdO1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICAvLyBQcmVwYXJlIHNsaWRlciBvcHRpb25zXG4gIGNvbnN0IHRheG9uTWluUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtaW4nKSk7XG4gIGNvbnN0IHRheG9uTWF4UHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtYXgnKSk7XG4gIGNvbnN0IHJhbmdlU2xpZGVyT3B0aW9ucyA9IHtcbiAgICBzdGFydDogW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV0sXG5cbiAgICByYW5nZToge1xuICAgICAgJ21pbic6IFt0YXhvbk1pblByaWNlXSxcbiAgICAgICdtYXgnOiBbdGF4b25NYXhQcmljZV1cbiAgICB9LFxuICAgIHN0ZXA6IDEsXG4gICAgY29ubmVjdDogdHJ1ZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWhhdmlvdXI6ICd0YXAnLFxuICAgIHRvb2x0aXBzOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKHByaWNlUmFuZ2UsIHJhbmdlU2xpZGVyT3B0aW9ucyk7XG4gIHNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIHByaWNlTWluLnZhbChwYXJzZUludChuZXdWYWx1ZVswXSkpO1xuICAgIHByaWNlTWF4LnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICB9KTtcblxuICByZXR1cm4gc2xpZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcblxuICBjb25zdCBuZXdWYWx1ZSA9IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldO1xuICBwcmljZVNsaWRlci5zZXQobmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrIHByaWNlIHZhbHVlcyBiZWZvcmUgc2VuZCBmb3JtXG4gKiBAcGFyYW0gcHJpY2VTbGlkZXJPYmplY3RcbiAqIEBwYXJhbSBwcmljZUNvbnRhaW5lclxuICovXG5mdW5jdGlvbiBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJPYmplY3QsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpLmZpcnN0KCk7XG4gIGxldCBwcmljZU1pblZhbHVlID0gcHJpY2VNaW4udmFsKCk7XG4gIGxldCBwcmljZU1heFZhbHVlID0gcHJpY2VNYXgudmFsKCk7XG4gIGlmIChwcmljZU1pbi52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBpZiAocHJpY2VNaW4udmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgcHJpY2VNaW4udmFsKHByaWNlTWluVmFsdWUpO1xuICBpZiAocHJpY2VNYXgudmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgaWYgKHByaWNlTWF4LnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIHByaWNlTWF4LnZhbChwcmljZU1heFZhbHVlKTtcbiAgcHJpY2VTbGlkZXJPYmplY3Quc2V0KFtwcmljZU1pblZhbHVlLCBwcmljZU1heFZhbHVlXSk7XG59XG5cbmV4cG9ydCB7IHByb2R1Y3QsIGZpbHRlclByb2R1Y3RzLCByZXNpemVGaWx0ZXJNZW51IH07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNIQVJFIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IHNoYXJlUHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlUHJvZHVjdDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucyB9IGZyb20gJy4vc3lsaXVzLWNhcnQtY29tbW9uJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuICBsZXQgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEZvcm0gPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJ2Zvcm0nKTtcblxuICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSAkKCdpbnB1dFtuYW1lXj1cIicgKyAkKGFkZFRvQ2FydEZvcm0pLmRhdGEoJ25hbWVUb0NoZWNrJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgY29uc3QgYnVuZGxlSXRlbXNDb3VudCA9ICQoJ2Rpdi5idW5kbGUtaXRlbScpLmxlbmd0aDtcbiAgICBpZihzZWxlY3RlZFNpemUgPiAwICYmIHNlbGVjdGVkU2l6ZSA8IGJ1bmRsZUl0ZW1zQ291bnQgKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0Om5vdCguaW5wdXQtY2hlY2tlZCknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PT0gMCkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG5cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGFibGUnLCAnbG9hZGluZycpO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG4gICAgICByZXF1ZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gJC5wYXJzZUhUTUwocmVzcG9uc2UuZGF0YSlbMF07XG4gICAgICAgICQoJyNjYXJ0QWN0aW9ucyAuaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAgIGlmICghJCgnI2VtcHR5Q2FydCcpLmhhc0NsYXNzKCdkLW5vbmUnKSkge1xuICAgICAgICAgICQoJyNjYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtZmxleCcpO1xuICAgICAgICAgICQoJyNlbXB0eUNhcnQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUwpLnNjcm9sbFRvcCgwKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJy5jYXJ0LWNvdW50JykuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY291bnQtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTCk7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LW5ldy1pdGVtJylbMF0uaW5uZXJIVE1MKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJy5kcm9wZG93bi5jYXJ0LWJ0biAuZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsJykucmVtb3ZlQ2xhc3MoJ2QtZmxleCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsIHNwYW4nKS5sYXN0KCkuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1zdWJ0b3RhbCcpWzBdLmlubmVySFRNTCk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmFsaWQtZmVlZGJhY2snKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yRWwpIHtcbiAgICAgICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEucHJvZHVjdF9pZCA+IDApIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl1bZGF0YS1wcm9kdWN0LWlkPVwiJysgZXJyb3IucmVzcG9uc2UuZGF0YS5wcm9kdWN0X2lkICsnXCJdJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXVtkYXRhLWJ1bmRsZS1lcnJvcl0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZS5kYXRhKS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzVXBkYXRlUXVhbnRpdHkgZnJvbSAnLi9zeWxpdXMtdXBkYXRlLXF1YW50aXR5JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcblxuY29uc3QgY2FydFdpZGdldENvbnRhaW5lciA9ICQoJyNoZWFkZXJDYXJ0SXRlbXMnKTtcbmNvbnN0IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMgPSBmdW5jdGlvbiBkb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpIHtcbiAgLy8gQWZ0ZXIgRG9tIHJlcGxhY2VtZW50LCBzZXQgYWN0aW9ucyBpbiBjYXJ0IHdpZGdldCBhZ2FpblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbG9hZC1xdHktYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzVXBkYXRlUXVhbnRpdHkoZWwpKTtcblxuICAkKCcuYWpheC1xdHknLCBjYXJ0V2lkZ2V0Q29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJy5yZWxvYWQtcXR5LmFqYXgnKS5hdHRyKCdkYXRhLWpzLXVwZGF0ZS1xdHktdmFsdWUnLCAkKHRoaXMpLnZhbCgpKTtcbiAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICQodGhpcykudmFsKCQodGhpcykuYXR0cignbWF4JykpO1xuICAgIH0gZWxzZSBpZihwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA8IHBhcnNlSW50KCQodGhpcykuYXR0cignbWluJykpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21pbicpKTtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgPSBmdW5jdGlvbiB1cGRhdGVDYXJ0V2lkZ2V0KHJlc3BvbnNlKSB7XG4gIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICQucGFyc2VIVE1MKHJlc3BvbnNlLmRhdGEpWzBdO1xuICBjb25zdCBjYXJ0Q291bnQgPSAkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY291bnQtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTDtcbiAgY2FydFdpZGdldENvbnRhaW5lci5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKS5zY3JvbGxUb3AoMCkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLmNhcnQtY291bnQnKS5odG1sKGNhcnRDb3VudCk7XG4gICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCBzcGFuJykubGFzdCgpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtc3VidG90YWwnKVswXS5pbm5lckhUTUwpO1xuICBpZiAocGFyc2VJbnQoY2FydENvdW50KSA9PT0gMCkge1xuICAgICQoJyNjYXJ0SXRlbXMnKS5yZW1vdmVDbGFzcygnZC1mbGV4JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJyNlbXB0eUNhcnQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9DYXJ0RnVuY3Rpb25zID0gZnVuY3Rpb24gYWRkVG9DYXJ0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xufVxuXG5leHBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zLCBhZGRUb0NhcnRGdW5jdGlvbnMgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtID0gKGVsKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZWwuYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IFN5bGl1c0xvYWRhYmxlRm9ybXMsIFN5bGl1c0xvYWRhYmxlRm9ybSB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyB9IGZyb20gJy4vc3lsaXVzLWNhcnQtY29tbW9uJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmFkZENsYXNzKCdsb2FkaW5nJykuc2Nyb2xsVG9wKDApO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZWRpcmVjdFVybCAhPT0gdW5kZWZpbmVkICYmICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXByb2R1Y3QtYWpheCcpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMsIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMgfSBmcm9tICcuL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbmNvbnN0IFN5bGl1c1VwZGF0ZVF1YW50aXR5ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtdXBkYXRlLXF0eS11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtdXBkYXRlLXF0eS1jc3JmLXRva2VuJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgJCgnI2NhcnRBY3Rpb25zIC5xdWFudGl0eS1lcnJvcicpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJylcbiAgICBjb25zdCBuZXdRdWFudGl0eSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXVwZGF0ZS1xdHktdmFsdWUnKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHt9LHsgZGF0YToge19jc3JmX3Rva2VuOiBjc3JmVG9rZW4sIHF1YW50aXR5OiBuZXdRdWFudGl0eSB9fSApO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5hZGRDbGFzcygnbG9hZGluZycpLnNjcm9sbFRvcCgwKTtcblxuICAgIHJlcXVlc3QudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMocmVzcG9uc2UpO1xuICAgICAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLnF1YW50aXR5LWVycm9yJykuYWRkQ2xhc3MoJ2QtYmxvY2snKS5maW5kKCcuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgoZXJyb3IucmVzcG9uc2UuZGF0YSkudG9TdHJpbmcoKSkuY2xvc2VzdCgnc3BhbicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVXBkYXRlUXVhbnRpdHk7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uYmE5NjljOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYmFjay5jZDExZjBmYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jYXJkLmI3NTcxYjEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuZWVkZTZhYmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY29saXNzaW1vLjBiNzlhNzEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2RlbGl2ZXJ5LXRydWNrLjljM2RmY2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOWEzMTg1OWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lbi4zMDJlZTdiZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjZhYTcwN2Y1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZnIuODQ2ZDdlNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1pdC4zNTU1YTM2Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjJjMmE5Y2MzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuMDQwZjQxYmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS5lNzI2ODk3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9uZXh0LmZiNjQ2MDk1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC45NTI2MjVmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZWxvYWQuM2I3NTBkNDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmV0dXJuLXBvbGljeS42N2Q4YTc1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43ZmRlYzI3MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjY5OWM0MDM5LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=