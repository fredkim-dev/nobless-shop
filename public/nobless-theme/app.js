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
  let responsive = [{
    breakpoint: 550,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: "unslick"
  }];

  if (isCartItemsCarousel) {
    responsive = [{
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: "unslick"
    }];
  }

  const options = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
    nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Next</button></div>',
    responsive
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

  $('.bundle-details').on('mouseover touchmove', function (e) {
    const details = $('.custom-tooltip', $(this)).html();

    if (details.trim() !== '') {
      $('.bundle-details-tooltip').html(details).css({
        'left': $(this).offset().left + 20,
        'top': $(this).offset().top + 20,
        'display': 'block'
      });
    }
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
    const reloadQtyDiv = (0, _jquery2.default)('.reload-qty.ajax');
    const maxValue = (0, _jquery2.default)(this).attr('max');
    const minValue = (0, _jquery2.default)(this).attr('min');
    (0, _jquery2.default)(this).next().removeClass('d-none');
    reloadQtyDiv.attr('data-js-update-qty-value', (0, _jquery2.default)(this).val());

    if (parseInt((0, _jquery2.default)(this).val()) >= parseInt(maxValue)) {
      (0, _jquery2.default)(this).val(maxValue);
      reloadQtyDiv.attr('data-js-update-qty-value', maxValue);
    } else if (parseInt((0, _jquery2.default)(this).val()) < parseInt(minValue)) {
      (0, _jquery2.default)(this).val(minValue);
      reloadQtyDiv.attr('data-js-update-qty-value', minValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NhcnQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9jaGVja291dC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NvbnRhY3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9sb2dpbi1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3Byb2R1Y3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zaGFyZS1wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtY2FydC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy11cGRhdGUtcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBcGlMb2dpbiIsImVsIiwiZWxlbWVudCIsInNpZ25JbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0aW9uRmllbGQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImxlbmd0aCIsImdldCIsImVtYWlsIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50VGFyZ2V0Iiwib25SYXRlIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImNsb3Nlc3QiLCJpbWciLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwic2VsZWN0Iiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJkZWZpbmUiLCIkIiwiRnJlc2NvIiwiZXh0ZW5kIiwidmVyc2lvbiIsIlNraW5zIiwiZnJlc2NvIiwiQm91bmRzIiwidmlld3BvcnQiLCJ3aWR0aCIsIkJyb3dzZXIiLCJNb2JpbGVTYWZhcmkiLCJBbmRyb2lkIiwiR2Vja28iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklFIiwiYXR0YWNoRXZlbnQiLCJpbmRleE9mIiwiZiIsIk9wZXJhIiwib3BlcmEiLCJwYXJzZUZsb2F0IiwiV2ViS2l0IiwibWF0Y2giLCJDaHJvbWUiLCJDaHJvbWVNb2JpbGUiLCJJRU1vYmlsZSIsInQiLCJSZWdFeHAiLCJleGVjIiwiX3NsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImJhc2VUb1N0cmluZyIsIl8iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsIlN0cmluZyIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9uIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJFdmVudCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzdXBwb3J0cyIsIm5hdHVyYWxXaWR0aCIsIkltYWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImlzTG9hZGVkIiwib3B0aW9ucyIsIm1ldGhvZCIsInBvbGxGYWxsYmFja0FmdGVyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwicHJveHkiLCJzdWNjZXNzIiwiaW50ZXJ2YWxzIiwiX2lwb3MiLCJfdGltZSIsIl9kZWxheSIsInBvbGwiLCJmYWxsYmFjayIsIl9wb2xsaW5nIiwiX3VzZWRQb2xsRmFsbGJhY2siLCJfZmFsbGJhY2tJbWciLCJuYXR1cmFsSGVpZ2h0Iiwib25lcnJvciIsInNyYyIsImFib3J0IiwiY2xlYXJUaW1lb3V0IiwiX2NhbGxlZFN1Y2Nlc3MiLCJfY2FsbGVkRXJyb3IiLCJfdGltZXJzIiwic2V0IiwiY2xlYXIiLCJjbGVhckFsbCIsIlR5cGUiLCJpc1ZpZGVvIiwiaW1hZ2UiLCJleHRlbnNpb25zIiwiZGV0ZWN0IiwiaW5BcnJheSIsImV4dGVuc2lvbiIsInZpbWVvIiwiaWQiLCJ5b3V0dWJlIiwiVmltZW9UaHVtYm5haWwiLCJsb2FkIiwicHJvdG9jb2wiLCJfeGhyIiwiZ2V0SlNPTiIsInRodW1ibmFpbF91cmwiLCJjYWNoZSIsInB1c2giLCJWaW1lb1JlYWR5IiwiY2FsbGJhY2siLCJkaW1lbnNpb25zIiwiT3B0aW9ucyIsImRlZmF1bHRzIiwiZWZmZWN0cyIsImNvbnRlbnQiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsIm92ZXJsYXkiLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJhdHRyIiwicG9zaXRpb25PdXRzaWRlIiwicHJldmlvdXNJbnNpZGUiLCJuZXh0SW5zaWRlIiwiY2xvc2VJbnNpZGUiLCJncm91cGVkIiwiaW5mb0luc2lkZSIsImluZm9QYWRkZXJJbnNpZGUiLCJwb3NJbnNpZGUiLCJjYXB0aW9uSW5zaWRlIiwicG9zaXRpb25JbnNpZGUiLCJfZ2V0U3Vycm91bmRpbmdQYWdlcyIsInByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcyIsInByZWxvYWRpbmciLCJwcmVsb2FkZWQiLCJsb2FkZWQiLCJwcmVsb2FkUmVhZHkiLCJsb2FkaW5nIiwiX3NwaW5uZXJEZWxheSIsImltYWdlUmVhZHkiLCJfbWFya0FzTG9hZGVkIiwic2V0RGltZW5zaW9ucyIsInByZXBlbmQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ2aW1lb1JlYWR5IiwiX2Fib3J0U3Bpbm5lckRlbGF5IiwiaW5zZXJ0VmlkZW8iLCJwbGF5ZXJJZnJhbWUiLCJwYXJhbSIsIl9kYXRhIiwiX2NvbnRlbnREaW1lbnNpb25zIiwiZnJhbWVib3JkZXIiLCJyYWlzZSIsImxhc3RDaGlsZCIsInN0b3BJbmFjdGl2ZSIsInVwZGF0ZVVJIiwiX3VpIiwiaGlkZUluYWN0aXZlIiwib25TaG93IiwiYWZ0ZXJQb3NpdGlvbiIsInJlbW92ZVZpZGVvIiwicmVtb3ZlVHJhY2tpbmciLCJfdHJhY2siLCJyZW1vdmVkIiwiX2dldEluZm9IZWlnaHQiLCJfd2hpbGVWaXNpYmxlIiwiaXMiLCJoYXNDbGFzcyIsInZpc2liaWxpdHkiLCJ1cGRhdGVGb3JjZWQiLCJmdWxsQ2xpY2siLCJfbm9PdmVyZmxvdyIsInBhcnNlSW50IiwiX3Bvc2l0aW9uT3V0c2lkZSIsImwiLCJ1IiwiYyIsInAiLCJtIiwidiIsImciLCJfaW5mb0hlaWdodCIsIl9wYWRkaW5nIiwiX2JhY2tncm91bmREaW1lbnNpb25zIiwiYm90dG9tIiwiZ2V0WFlQIiwicmVtb3ZlQXR0ciIsImZpbmQiLCJnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwIiwiZ2V0TG9hZGluZ0NvdW50IiwiaGFuZGxlVHJhY2tpbmciLCJzZXRYWSIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVQb3NpdGlvbnMiLCJfdHJhY2tpbmdfdGltZXIiLCJjbGVhclRyYWNraW5nVGltZXIiLCJzdGFydFRyYWNraW5nIiwiX2hhbmRsZVRyYWNraW5nIiwic3RvcFRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJpc1RyYWNraW5nIiwiY2xlYXJUcmFja2luZyIsImdyZXAiLCJfeHkiLCJzZXRYWVAiLCJfeHlwIiwiVmlldyIsIm9iamVjdCIsImdyb3VwIiwiZXZhbCIsInN1cHBvcnRlZCIsInVwZGF0ZURpbWVuc2lvbnMiLCJfZGltZW5zaW9ucyIsIl9GcmVzY28iLCJfZGlzYWJsZWQiLCJfZmFsbGJhY2siLCJzdGFydERlbGVnYXRpbmciLCJfZGVsZWdhdGVIYW5kbGVyIiwiZGVsZWdhdGUiLCJfc2V0Q2xpY2tYWUhhbmRsZXIiLCJzZXRDbGlja1hZIiwic3RvcERlbGVnYXRpbmciLCJzaG93RmFsbGJhY2siLCJvYmplY3RfdHlwZSIsIl9kZ28iLCJncm91cE9wdGlvbnMiLCJlbGVtZW50cyIsImZpbHRlciIsImdyb3VwRXh0ZW5kIiwiZmlyc3RVSSIsInBvc2l0aW9uSW5BUEciLCJocmVmIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImpRdWVyeSIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImV2ZW50IiwiZGV2ZWxvcE1vYmlsZU1lbnUiLCJtZW51SWNvbmVzRnVuY3Rpb25zIiwiaGVhZGVyT3V0ZXJIZWlnaHQiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsIm9mZmNhbnZhc19pZCIsImRpdlRvT3BlbiIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJwcmV2IiwidG9vbHRpcCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhlYWRlcnMiLCJhY2NlcHQiLCJnbGlnaHRib3giLCJlbGVtIiwiY2Fyb3VzZWwiLCJtYWluRnVuY3Rpb25zIiwiY3JlYXRlQ2Fyb3VzZWwiLCJjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwiLCJjYXJvdXNlbEVsZW1lbnQiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNsaWNrIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwicmVwbGFjZUNhcm91c2VsQXJyb3ciLCJpc0NhcnRJdGVtc0Nhcm91c2VsIiwibW9iaWxlRmlyc3QiLCJyZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQiLCJ1bnNsaWNrZWQiLCJjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwiLCJvcHRzIiwicm93cyIsInNsaWRlc1BlclJvdyIsImFkYXB0aXZlSGVpZ2h0IiwidmlzaWJsZVNsaWRlckRpdiIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW1nU2VsZWN0b3IiLCJpbWdTbGlkZXJIZWlnaHQiLCJhcnJvd1RvcFZhbHVlIiwibm90IiwiYm9keUNvbnRhaW5lciIsImNhcnQiLCJuZXdRdHkiLCJ2YWwiLCJpbnB1dFF0eU5hbWUiLCJjb3Vwb24iLCJib251c1BvaW50cyIsInNhdmVCdXR0b24iLCJjYW5jZWxCdG4iLCJjaGVja291dCIsImFkZHJlc3NUeXBlIiwiZ2V0Q2xhc3NMaXN0IiwibWFuYWdlQWRkcmVzc1R5cGUiLCJjaG9vc2VBZGRyZXNzIiwic2hvd0FkZEZvcm0iLCJmaWVsZCIsImZpZWxkTmFtZSIsInRvU2F2ZSIsInRvUmVwbGFjZSIsImNoZWNrb3V0U2F2ZUFkZHJlc3MiLCJmaWxsQWxsQWRkcmVzc2VzIiwic3VibWl0IiwiaGlkZUNoYW5nZUFkZHJlc3MiLCJoaWRlU2F2ZUFkZHJlc3NGb3JtIiwiY2FuY2VsQ2hhbmdlQWRkcmVzcyIsImRldGFpbHMiLCJ0cmltIiwib2Zmc2V0IiwiZmllbGRTZWxlY3RvciIsImZvcm1GaWVsZCIsImNob3NlbkFkZHJlc3NUZXh0IiwiY2hvc2VuVmFsdWUiLCJ0ZXh0Iiwic3Vic3RyaW5nIiwiZ2V0RGF0YUZpZWxkTmFtZSIsInByb3AiLCJmb3JtIiwiZmlsbE90aGVyQWRkcmVzcyIsImFqYXgiLCJzZXJpYWxpemUiLCJkYXRhU3VjY2Vzc0RpdiIsIm5vQWRkcmVzcyIsImZpbGxEYXRhQWZ0ZXJTYXZlIiwiZ2V0T3RoZXJBZGRyZXNzVHlwZSIsInNob3dNYWluRm9ybSIsInBhcnNlSFRNTCIsInJlc3BvbnNlVGV4dCIsImZpZWxkRXJyb3IiLCJhZnRlciIsImZpbGxBZGRyZXNzIiwiZmllbGRJZCIsImtlZXBDYW1lbEZpZWxkIiwiZGF0YVRvRmlsbCIsInJlZ2V4IiwiaW5jbHVkZXMiLCJvdGhlckFkZHJlc3NUeXBlIiwiZmlsbE90aGVyRm9ybSIsIm90aGVyRmllbGRJZCIsImlkVG9GaWxsIiwibmV3VmFsdWUiLCJmb3JtRmllbGROYW1lIiwiZmllbGRUb1JlcGxhY2UiLCJvbGREYXRhIiwiY2xhc3NOYW1lIiwiZmllbGROYW1lcyIsIk9iamVjdCIsImtleXMiLCJ0ZXh0VG9SZXBsYWNlIiwic2VsZWN0b3JUeXBlIiwibWF0Y2hlcyIsImNvbnRhY3RQYWdlIiwibW9kYWwiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJ0b0FycmF5Iiwib3V0ZXJUZXh0IiwibG9naW5QYWdlIiwibW9kYWxJZCIsImZvcm1FbGVtZW50IiwidmVyaWZ5QWNjb3VudE9iamVjdCIsImxvYWRBamF4UGFzc3dvcmRSZXNldCIsIm1vZGFsQm9keSIsInJlZ2lzdGVyRm9ybSIsImlucHV0UmVnaXN0ZXJGb3JtIiwiaW52YWxpZFNwYW4iLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yIiwicHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSIsInByaWNlTWluU2VsZWN0b3IiLCJwcmljZU1heFNlbGVjdG9yIiwicHJvZHVjdCIsImJ1bmRsZUl0ZW0iLCJ2YXJpYW50TGlzdENvbnRhaW5lciIsImZpbHRlclByb2R1Y3RzIiwiZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucyIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwiY3JpdGVyaWEiLCJwcmljZUlucHV0IiwicHJpY2VTbGlkZXIiLCJwcmljZVNsaWRlck1vYmlsZSIsImNyZWF0ZVByaWNlU2xpZGVyIiwiaXNOYU4iLCJmcm9tQ2hhckNvZGUiLCJzZXRTbGlkZXJOZXdWYWx1ZSIsInNpemVGaWx0ZXJJbnB1dCIsImNoZWNrUHJpY2VWYWx1ZSIsImlucHV0VG9DaGVjayIsInJlc2l6ZUZpbHRlck1lbnUiLCJyZXNpemVGaWx0ZXJNb2JpbGVNZW51IiwiaGVhZGVyQ29udGFpbmVyIiwiaGVhZGVyQmFubmVyIiwiZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCIsImNvbnRhaW5lclNlbGVjdG9yIiwicHJpY2VDb250YWluZXIiLCJwcmljZVJhbmdlIiwicHJpY2VNaW4iLCJwcmljZU1heCIsInRheG9uTWluUHJpY2UiLCJmaXJzdCIsInRheG9uTWF4UHJpY2UiLCJyYW5nZVNsaWRlck9wdGlvbnMiLCJzdGFydCIsInJhbmdlIiwic3RlcCIsImNvbm5lY3QiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJiZWhhdmlvdXIiLCJ0b29sdGlwcyIsInNsaWRlciIsIm5vVWlTbGlkZXIiLCJwcmljZVNsaWRlck9iamVjdCIsInByaWNlTWluVmFsdWUiLCJwcmljZU1heFZhbHVlIiwic2hhcmVQcm9kdWN0Iiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29uc29sZSIsImxvZyIsIm1haWxUbyIsIm1haWx0byIsIlN5bGl1c0FkZFRvQ2FydCIsInZhbGlkYXRpb25FbGVtZW50IiwiYWRkVG9DYXJ0Rm9ybSIsInNlbGVjdGVkU2l6ZSIsImJ1bmRsZUl0ZW1zQ291bnQiLCJjbG9uZU5vZGUiLCJyZXF1ZXN0IiwicmVzcG9uc2VEYXRhIiwibGFzdCIsImVycm9yTWVzc2FnZSIsImVycm9yRWwiLCJwcm9kdWN0X2lkIiwidG9TdHJpbmciLCJjYXJ0V2lkZ2V0Q29udGFpbmVyIiwiYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucyIsImRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIiwicmVsb2FkUXR5RGl2IiwibWF4VmFsdWUiLCJtaW5WYWx1ZSIsInVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMiLCJ1cGRhdGVDYXJ0V2lkZ2V0IiwiY2FydENvdW50IiwiYWRkVG9DYXJ0RnVuY3Rpb25zIiwiYWRkVG9DYXJ0IiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIlN5bGl1c0xvYWRhYmxlRm9ybSIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwicmVkaXJlY3RVcmwiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsImNvbnRhaW5zIiwiU3lsaXVzVXBkYXRlUXVhbnRpdHkiLCJuZXdRdWFudGl0eSIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFr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Q0F4QkQ7O2tCQTBCZWtpQixvQjs7Ozs7Ozs7Ozs7O0FDMUNmO0FBQWUsZ0hBQWlELEU7Ozs7Ozs7Ozs7OztBQ0FoRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG4vLyBHRU5FUkFMIEZVTkNUSU9OU1xuaW1wb3J0IHsgY2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wIH0gZnJvbSAnLi9qcy9jYXJvdXNlbC5qcyc7XG5pbXBvcnQgY2hlY2tvdXQgZnJvbSAnLi9qcy9jaGVja291dC1ub2JsZXNzLmpzJztcbmltcG9ydCB7cHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnV9IGZyb20gJy4vanMvcHJvZHVjdC1ub2JsZXNzJztcbmltcG9ydCBjYXJ0IGZyb20gJy4vanMvY2FydC1ub2JsZXNzLmpzJztcbmltcG9ydCBzaGFyZVByb2R1Y3QgZnJvbSAnLi9qcy9zaGFyZS1wcm9kdWN0LmpzJztcbmltcG9ydCBsb2dpblBhZ2UgZnJvbSAnLi9qcy9sb2dpbi1ub2JsZXNzLmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2pzL2NvbnRhY3Qtbm9ibGVzcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gTUVOVSBGVU5DVElPTlNcbi8vIE9SREVSUyBHUklEIEZVTkNUSU9OU1xuXG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VJbml0KCkge1xuICBqUXVlcnkoJyNtYWluTmF2YmFyJykuY29sbGFwc2Uoe1xuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1lZ2FtZW51IGZ1bmN0aW9uc1xuICogLmhhcy1tZWdhbWVudSB0byB1c2UgZHJvcGRvd24gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIG1lZ2FtZW51RnVuY3Rpb25zKCkge1xuICAvLyBCdXR0b24gaG92ZXIgc2ltdWxhdGVzIGNsaWNrIG9uIGl0XG4gICQoJyNtZW51QnV0dG9uTWFpbiwgI21lZ2FtZW51RHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qJCgnI21haW5Db250ZW50Q29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAzMykge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTsqL1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgaWYgKCQoJyNuYXZiYXJNYWluTW9iaWxlJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNZWdhbWVudSBmdW5jdGlvbnMgOiBtYW5hZ2UgbW9iaWxlIG1lbnVcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG5cbiAgJCgnYS5uYXYtdGF4b24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKycgaW1nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCdkaXYubWVudS1pbWcnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChcIiNuYXZiYXJNYWluTW9iaWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoJy5hY3RpdmUubG9jYWxlLWxpbmssIC5uYXZiYXJUYXhvbnNMaW5rLCAubG9nLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCh0aGlzKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNvcGVuQWNjb3VudE1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKCcubG9nLWxpbmsnKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5zaG93KCk7XG4gIH0pO1xuXG4gICQoJy5kcm9wZG93bi5jYXJ0LWJ0bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51SWNvbmVzRnVuY3Rpb25zKCkge1xuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKSAtICQoJyNjYXJ0V2lkZ2V0VGl0bGUnKS5vdXRlckhlaWdodCgpIC0gMjA7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgIGlmICghJCgnI2hlYWRlckNhcnROZXdJdGVtJykuaGFzQ2xhc3MoJ2Qtbm9uZScpKSB7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpIC0gMjA7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICAgICAgfVxuXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgICAvLyBDYXJ0IEljb25cbiAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KCcuZHJvcGRvd24nKS5oYXNDbGFzcygnY2FydC1idG4nKSkge1xuICAgICAgJCgnI2hlYWRlckNhcnROZXdJdGVtJykuaHRtbCgnJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNjYXJ0QWN0aW9ucyAuY2FydC1zdWJ0b3RhbCcpLmFkZENsYXNzKCdkLWZsZXgnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjY2FydEFjdGlvbnMgLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmNhcnQtZHJvcGRvd24gLmNsb3NlLWNhcnQtd2lkZ2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5kcm9wZG93bi5jYXJ0LWJ0biAuZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyVGF4b25zJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyQWNjb3VudExpbmtzJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlUHJvZHVjdCgpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlUHJvZHVjdCgpO1xuICBwcm9kdWN0KCk7XG4gIGZpbHRlclByb2R1Y3RzKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICBvcmRlcnNHcmlkRnVuY3Rpb25zKCk7XG4gIGxvZ2luUGFnZSgpO1xuICBjYXJ0KCk7XG4gIGNoZWNrb3V0KCk7XG5cbiAgY29udGFjdFBhZ2UoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgLyppZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9Ki9cbiAgLy8gU2hvdyBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51Jykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG4vL2ltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuLy8gaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgeyBTeWxpdXNMb2FkYWJsZUZvcm1zIH0gZnJvbSAnLi9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuaW1wb3J0IHthZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCBhZGRUb0NhcnRGdW5jdGlvbnMgfSBmcm9tICcuL2pzL3N5bGl1cy1jYXJ0LWNvbW1vbic7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIGFkZFRvQ2FydEZ1bmN0aW9ucygpO1xuXG4gIGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMoKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICAvL1N5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgLy8gY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICAvLyB9XG4gIC8vIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICAvLyBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIC8vIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUk9VU0VMIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBGcmVzY28gZnJvbSAnLi4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG5jb25zdCBjYXJvdXNlbCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcblxuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI3Byb2R1Y3RHYWxsZXJ5JykpO1xuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJyksIHRydWUpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgbWFpbiBjYXJvdXNlbHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG5cbiAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQsIGlzQ2FydEl0ZW1zQ2Fyb3VzZWwgPSBmYWxzZSkge1xuICBsZXQgcmVzcG9uc2l2ZSA9IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICB9XG4gIF07XG4gIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgcmVzcG9uc2l2ZSA9IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMzUwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgfVxuICAgIF07XG4gIH1cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZVxuICB9XG5cbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBjYXJvdXNlbEVsZW1lbnRbMF0uc2xpY2sgJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKHNsaWNrKXtcbiAgICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGNhcm91c2VsRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgY2Fyb3VzZWwgd2hlbiB1c2VyIGhhdmUgbW9yZSB0aGFuIDQgYWRkcmVzc2VzIGluIENoZWNrb3V0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNzAwLFxuICAgIHJvd3M6IDIsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHNsaWRlc1BlclJvdzogMixcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHJvd3M6IDMsXG4gICAgICAgICAgc2xpZGVzUGVyUm93OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgdmlzaWJsZVNsaWRlckRpdiA9ICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ2Qtbm9uZScpO1xuICBpZih2aXNpYmxlU2xpZGVyRGl2ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0cyk7XG4gIH0gZWxzZSBpZiAoY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBjYXJvdXNlbCBhcnJvd3MgdmVydGljYWxseVxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3QgaW1nU2VsZWN0b3IgPSAnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJztcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgbGV0IGFycm93VG9wVmFsdWU7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IsIGNhcm91c2VsRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoY2Fyb3VzZWxFbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH0gZWxzZSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJChpbWdTZWxlY3Rvcikub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoJy5zbGlkZXItY29udHJvbHMnKS5ub3QoJy5wcm9kdWN0LWdhbGxlcnknKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIG9ubHkgb24gY2FydCBpdGVtcyBjYXJvdXNlbFxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBjb25zdCBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIGltZycsIGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAtIDAuMiAqIGltZ1NsaWRlckhlaWdodCk7XG4gIGVsZW1lbnQubmV4dCgpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xufVxuXG5leHBvcnQge2Nhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgY29udGFpbmVyID0gJCgnI2NhcnRQYWdlJyk7XG5jb25zdCBib2R5Q29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBjYXJ0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gV2hlbiByZWxvYWRpbmcgcXVhbnRpdGllc1xuICAvLyBEZXNrdG9wXG4gICQoJy5yZWxvYWQtcXR5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1pdGVtLWluZm8nKS5oYXNDbGFzcygnb3V0LW9mLXN0b2NrJykpIHtcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xuICAgICAgaWYgKG5ld1F0eSA8PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgY3VzdG9tZXIgdG8gYWRkIG1vcmUgdGhhbiA1IHRpbWVzIGEgcHJvZHVjdFxuICAkKCcucXR5JywgY29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIElmIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLCBub3RoaW5nIGhhcHBlbnNcbiAgICBpZiAoISQodGhpcykuY2xvc2VzdCgnLmNhcnQtaXRlbS1pbmZvJykuaGFzQ2xhc3MoJ291dC1vZi1zdG9jaycpKSB7XG4gICAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS5hdHRyKCdtYXgnKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICAgIGlmIChjb3Vwb24gPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKGNvdXBvbik7XG4gICAgICB9XG5cbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gY291cG9uIGNvZGUgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IGJvbnVzIHBvaW50c1xuICAkKCcuYm9udXMtcG9pbnRzLWJ0bicsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgY291cG9uIGNvZGVcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgYm9udXNQb2ludHMgPSAkKCcuYm9udXMtcG9pbnRzJykudmFsKCk7XG4gICAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgICAgfVxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmRlbGV0ZS1ib251cy1wb2ludHMnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGJvbnVzIHBvaW50c1xuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBib251cyBwb2ludHMgaW5wdXQgaXMgZmlsbGVkLCBoaWRlIGVycm9yIGNvbnRhaW5lclxuICBib2R5Q29udGFpbmVyLm9uKFwia2V5ZG93blwiLCBcIi5ib251cy1wb2ludHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCcnKTtcbiAgfSk7XG5cbiAgaWYoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScsIGNvbnRhaW5lcikuaHRtbCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5ib251cy1wb2ludHMtZXJyb3InKS5odG1sKCQoJyNiaXRiYWctYm9udXMtcG9pbnRzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5ib251cy1wb2ludHMnKS52YWwoJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCkpO1xuICB9XG5cbiAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYnV0dG9uIGxpbmtlZCB0byBjaGVja291dCBwYWdlXG4gICQoJ2EuYnRuLXRvLWNoZWNrb3V0JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ0hFQ0tPVVQgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgeyBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcblxuLy8gTWFpbiBmdW5jdGlvbiB1c2VkIGluIGluaXRcbmNvbnN0IHNhdmVCdXR0b24gPSAkKCcjY2hlY2tvdXRQYWdlIC5zYXZlLWluLWFjY291bnQnKTtcbmNvbnN0IGNhbmNlbEJ0biA9ICQoJyNjaGVja291dFBhZ2UgLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycpO1xuXG5jb25zdCBjaGVja291dCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjaGVja291dFBhZ2UnKTtcbiAgLy8gV2hlbiB0aGUgdXNlciB3YW50cyB0byBjaGFuZ2UgaGlzIGFkZHJlc3NcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2NsaWNrZWQnKSAmJiAhJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuXG4gICAgICBjYW5jZWxCdG4uc2hvdygpO1xuICAgICAgY2FuY2VsQnRuLnByZXYoKS5oaWRlKCk7XG5cbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0gLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnY2hhbmdlJywgY29udGFpbmVyKTtcbiAgICAgIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCgkKCcjY2Fyb3VzZWxBZGRyZXNzTGlzdCcpKTtcbiAgICAgIC8vIENyZWF0ZSBldmVudCBvbiBhZGRyZXNzIGl0ZW0gYWZ0ZXIgY2Fyb3VzZWwgaXMgb3BlblxuICAgICAgJCgnLmNob29zZS1hZGRyZXNzIC5jaG9vc2UtYWRkcmVzcy1pdGVtIGFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2hvb3NlQWRkcmVzcygkKHRoaXMpLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgd2FudHMgdG8gYWRkIGEgbmV3IGFkZHJlc3MgdG8gaGlzIGFjY291bnRcbiAgJCgnYS5jaGVja291dC1hZGQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCgkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzLmNsaWNrZWQnLCBjb250YWluZXIpWzBdKVsxXTtcbiAgICBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBzYXZlIGEgbmV3IGFkZHJlc3NcbiAgc2F2ZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhZGRyZXNzVHlwZSA9ICdzaGlwcGluZyc7XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgICAgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbM107XG4gICAgICAkKCcjY2hlY2tvdXRQYWdlIC5kYXRhLScgKyBhZGRyZXNzVHlwZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGQgKyAnXSc7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGROYW1lO1xuICAgICAgICBjb25zdCB0b1JlcGxhY2UgPSAnLmNoYW5nZS0nKyBhZGRyZXNzVHlwZSArJy1hZGRyZXNzICcgKyBmaWVsZE5hbWU7XG4gICAgICAgICQodG9SZXBsYWNlKS52YWwoJCh0b1NhdmUpLnZhbCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVja291dFNhdmVBZGRyZXNzKHRoaXMsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIGFkZHJlc3MgcGFnZSBuZXh0IGJ1dHRvblxuICAkKCcubWFpbi1hZGRyZXNzLWZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBmaWxsQWxsQWRkcmVzc2VzKGNvbnRhaW5lcik7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBjaGFuZ2VzXG4gICQoJ2EuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgYWRkXG4gICQoJ2EuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIEJ1bmRsZSBkZXRhaWxzIHRvb2x0aXBcbiAgJCgnLmJ1bmRsZS1kZXRhaWxzJylcbiAgICAub24oJ21vdXNlb3ZlciB0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBkZXRhaWxzID0gJCgnLmN1c3RvbS10b29sdGlwJywgJCh0aGlzKSkuaHRtbCgpO1xuICAgICAgaWYgKGRldGFpbHMudHJpbSgpICE9PSAnJykge1xuICAgICAgICAkKCcuYnVuZGxlLWRldGFpbHMtdG9vbHRpcCcpLmh0bWwoZGV0YWlscykuY3NzKHsnbGVmdCc6ICQodGhpcykub2Zmc2V0KCkubGVmdCArIDIwLCAndG9wJzogJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAyMCwgJ2Rpc3BsYXknOiAnYmxvY2snfSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgJCgnLmJ1bmRsZS1kZXRhaWxzLXRvb2x0aXAnKS5odG1sKCcnKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XG4gICAgfSk7XG5cbn07XG5cbi8vIFdoZW4gdXNlciBjaG9zZSBhbiBhZGRyZXNzIGlzIHRoZSBhZGRyZXNzZXMgbGlzdFxuZnVuY3Rpb24gY2hvb3NlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5kYXRhLWFkZHJlc3MnLCBlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBjb25zdCBmaWVsZFNlbGVjdG9yID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZFNlbGVjdG9yO1xuICAgIGNvbnN0IGNob3NlbkFkZHJlc3NUZXh0ID0gJy5kYXRhLScrIGFkZHJlc3NUeXBlICsnLicgKyBmaWVsZE5hbWU7XG5cbiAgICBsZXQgY2hvc2VuVmFsdWUgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS50ZXh0KGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCkuc3Vic3RyaW5nKDAsIDIpO1xuICAgIH1cbiAgICAkKGZvcm1GaWVsZCkudmFsKGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgICAgaWYgKCQodGhpcykudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLmNsb3Nlc3QoJ2FkZHJlc3MnKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIGNob3NlblZhbHVlKTtcbiAgfSk7XG4gICQoJyNzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc19kaWZmZXJlbnRCaWxsaW5nQWRkcmVzcycsIGNvbnRhaW5lcikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xufVxuXG4vKiBTYXZlIGFkZHJlc3MgaW4gdXNlciBhY2NvdW50IDogUmV0dXJucyBlcnJvcnMgaW4gZm9ybSBpZiBub3QgdmFsaWQgKi9cbmZ1bmN0aW9uIGNoZWNrb3V0U2F2ZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBmb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJyk7XG4gICQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX3R5cGVcIl0nLCBmb3JtKS52YWwoYWRkcmVzc1R5cGUpO1xuICBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBmb3JtJywgY29udGFpbmVyKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBkYXRhU3VjY2Vzc0RpdiA9ICQocmVzcG9uc2UpO1xuICAgICAgY29uc3Qgbm9BZGRyZXNzID0gc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJyk7XG4gICAgICBpZihkYXRhU3VjY2Vzc0Rpdi5oYXNDbGFzcygnc2F2ZS1hZGRyZXNzLXN1Y2Nlc3MnKSkge1xuICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuXG4gICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUodGhpcywgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIC8vIElmIFVzZXIgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAgICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy4nICsgZmllbGROYW1lLCBjb250YWluZXIpO1xuICAgICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSksIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQoJy5hZGRyZXNzLWJvb2snLCBjb250YWluZXIpLmh0bWwoJCgnLmFkZHJlc3MtYm9vaycsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vQWRkcmVzcykge1xuICAgICAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5uby1hZGRyZXNzZXMtdGV4dCcsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgIHNob3dNYWluRm9ybShjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvci1tZXNzYWdlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJCh0aGlzKS5jbG9zZXN0KCdsYWJlbCcpLmF0dHIoJ2ZvcicpO1xuICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbaWQ9XCInKyBmaWVsZE5hbWUgKydcIl0nLCBjb250YWluZXIpLmFkZENsYXNzKCdpcy1pbnZhbGlkJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+PHNwYW4gY2xhc3M9XCJmb3JtLWVycm9yLW1lc3NhZ2UgZC1ibG9ja1wiPicgKyBmaWVsZEVycm9yICsgJzwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG59XG5cbi8qIEZpbGwgYWRkcmVzcyBmb3JtIGZpZWxkcyB0byBhdm9pZCBlcnJvcnMgKi9cbmZ1bmN0aW9uIGZpbGxBZGRyZXNzKGZpZWxkSWQsIGFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3Qga2VlcENhbWVsRmllbGQgPSBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdjb3VudHJ5Q29kZSddO1xuICBjb25zdCBkYXRhVG9GaWxsID0gJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmRhdGEoKTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmICgha2VlcENhbWVsRmllbGQuaW5jbHVkZXMoZmllbGROYW1lKSkge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgICQodGhpcykudmFsKGRhdGFUb0ZpbGxbZmllbGROYW1lXSk7XG4gIH0pO1xuICAkKCcjaW5BY2NvdW50X3NhdmVfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbn1cblxuLyogRmlsbCBhZGRyZXNzZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBuZXh0IGJ1dHRvbiAqL1xuZnVuY3Rpb24gZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpIHtcbiAgWydzaGlwcGluZycsICdiaWxsaW5nJ10uZm9yRWFjaCgoYWRkcmVzc1R5cGUpID0+IHtcbiAgICBjb25zdCBmaWVsZElkID0gJ3N5bGl1c19jaGVja291dF9hZGRyZXNzXycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzJztcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgJy5tYWluLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcilcbiAgfSlcbn1cblxuLyogRmlsbCBvdGhlciBhZGRyZXNzIHR5cGUgZm9ybSB3aGVuIHNhdmluZyBuZXcgYWRkcmVzcyAqL1xuZnVuY3Rpb24gZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IG90aGVyQWRkcmVzc1R5cGUgPSBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKTtcbiAgbGV0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gIGlmIChzYXZlQnV0dG9uLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgIGZpbGxPdGhlckZvcm0oYWRkcmVzc1R5cGUsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIGZpbGxBZGRyZXNzKGZpZWxkSWQsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9XG59XG5cbi8vIEZpbGwgb3RoZXIgbmV3IGFkZHJlc3MgZm9ybSBPTkxZIElGIHVzZXIgZG9uJ3QgaGF2ZSBhZGRyZXNzZXMgeWV0XG5mdW5jdGlvbiBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3QgZmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgYWRkcmVzc1R5cGU7XG4gIGNvbnN0IG90aGVyRmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmIChmaWVsZE5hbWUgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBjb25zdCBpZFRvRmlsbCA9ICcjJyArIG90aGVyRmllbGRJZCArICdfJyArIGZpZWxkTmFtZTtcbiAgICAkKGlkVG9GaWxsKS52YWwoJCh0aGlzKS52YWwoKSk7XG4gIH0pO1xufVxuXG4vLyBGaWxsIGZvcm0gYW5kIGRpdiBkYXRhIHdoZW4gc2F2ZSBuZXcgYWRkcmVzc1xuZnVuY3Rpb24gZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgY29udGFpbmVyKSB7XG4gIC8vIEdldCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gIGNvbnN0IG5ld1ZhbHVlID0gJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpO1xuXG4gIC8vIENyZWF0ZSBtYWluIGZvcm0gZmllbGQgc2VsZWN0b3JcbiAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ10nO1xuICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZm9ybUZpZWxkTmFtZTtcblxuICAvLyBSZXBsYWNlIGZpZWxkIHdpdGggdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICAkKGZpZWxkVG9SZXBsYWNlKS52YWwobmV3VmFsdWUpO1xuXG4gIC8vIFJlcGxhY2UgdGV4dCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChlbGVtZW50KS50ZXh0KG5ld1ZhbHVlKTtcbiAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICQoZWxlbWVudCkudGV4dCgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuY291bnRyeU5hbWUnLCBjb250YWluZXIpLmh0bWwoKSk7XG4gIH1cblxuICAvLyBTaG93IG9yIGhpZGUgc3RyZWV0MiBjb250YWluZXIgYWNjb3JkaW5nIHRvIHZhbHVlXG4gIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgIGlmICgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKS5odG1sKCkudHJpbSgpICE9PSAnJykge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBhZGRyZXNzIGRpdiBkYXRhXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIG5ld1ZhbHVlKTtcbn1cblxuLyogU2hvdyBNYWluIGZvcm0gd2hlbiB1c2VyIGhhdmUgbm8gYWRkcmVzc2VzICovXG5mdW5jdGlvbiBzaG93TWFpbkZvcm0oY29udGFpbmVyKSB7XG4gIC8vIEhpZGUgZGl2IG1lbnRpb25pbmcgdGhhdCB1c2UgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAkKCcubm8tYWRkcmVzcy15ZXQnLCBjb250YWluZXIpLnJlbW92ZSgpO1xuICAvLyBIaWRlIGFkZCBuZXcgYWRkcmVzcyBmb3JtXG4gICQoJy5hZGQtc2hpcHBpbmctYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybSB0aXRsZVxuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC51c2UnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC5hZGQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgLy8gU2hvdyBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBtYWluIGZvcm1cbiAgJCgnLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLm5leHQoJ2EuYnRuJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufVxuXG4vKiBIaWRlIGFkZHJlc3MgbW9kaWZpY2F0aW9uIGNvbnRhaW5lciAqL1xuZnVuY3Rpb24gaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5wcmV2KCkuc2hvdygpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICQoJyNtYWluQ29udGVudENvbnRhaW5lcicpWzBdLnNjcm9sbFRvcCA9IDA7XG59XG5cbi8qIFJlbW92ZSBlcnJvciBpbmRpY2F0b3JzIHdoZW4gc2F2ZSBhZGRyZXNzIGZvcm0gaXMgc3VibWl0dGVkICovXG5mdW5jdGlvbiBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcikge1xuICAvLyBVc2UgYWRkcmVzc1R5cGUgY2hvc2VuIHdoZW4gc2F2ZSBmb3JtIGlzIHNob3duXG4gIGxldCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVszXTtcbiAgaWYgKGFkZHJlc3NUeXBlID09PSAnbm8tYWRkcmVzc2VzJykge1xuICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHNhdmVCdXR0b25bMF0pWzRdO1xuICB9XG4gICQoJy5jaGFuZ2UtJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hhbmdlLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICctdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0LCAuc2F2ZS1hZGRyZXNzLWZvcm0gc2VsZWN0JywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmludmFsaWQtZmVlZGJhY2snLCBjb250YWluZXIpLnJlbW92ZSgpO1xufVxuXG4vKiBSZXBsYWNlIGFsbCBmb3JtIGFuZCBkaXNwbGF5ZWQgYWRkcmVzcyBkYXRhIHdoZW4gY2FuY2VsIG1vZGlmaWNhdGlvbnMgKi9cbmZ1bmN0aW9uIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9sZERhdGEgPSAkKHRoaXMpLmRhdGEoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9ICh0aGlzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pKVsxXTtcbiAgICBjb25zdCBmaWVsZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRGF0YSk7XG5cbiAgICBmaWVsZE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdjb3VudHJ5TmFtZScpIHtcbiAgICAgICAgZmllbGROYW1lID0gJ2NvdW50cnlDb2RlJ1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dFRvUmVwbGFjZSA9ICcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLicgKyBmaWVsZE5hbWU7XG4gICAgICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgICAgIC8vIFNldCBmb3JtIHdpdGggb2xkIGRhdGFcbiAgICAgICQoZmllbGRUb1JlcGxhY2UsIGNvbnRhaW5lcikudmFsKG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgaWYgKGVsZW1lbnQgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgICAgLy8gU2V0IGNob3NlbiBBZGRyZXNzIHdpdGggb2xkIGRhdGFcbiAgICAgICAgJCh0ZXh0VG9SZXBsYWNlKS50ZXh0KG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gU2hvdyBhZGQgYWRkcmVzcyBmb3JtXG5mdW5jdGlvbiBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nLCBjb250YWluZXIpLnZhbCgnJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcblxuICAvLyBIaWRlIGFsbCBzYXZlIGFkZHJlc3MgZm9ybXMgYmVmb3JlIHNob3dpbmcgdGhlIGNob3NlbiBvbmVcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAuYWRkLScgKyBhZGRyZXNzVHlwZSArICctYWRkcmVzcycsIGNvbnRhaW5lcikuc2hvdygpO1xufVxuXG4vKiBNYW5hZ2Ugd2hhdCB0eXBlIG9mIGFkZHJlc3Mgd2lsbCBiZSByZXBsYWNlIGFuZC9vciBzYXZlZCAqL1xuZnVuY3Rpb24gbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsIHNlbGVjdG9yVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgYWRkcmVzc1R5cGUgKyAnLXRpdGxlJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgLy8gQWxzbyBNYW5hZ2UgU2F2ZUJ1dHRvbiBjbGFzc1xuICBzYXZlQnV0dG9uLmFkZENsYXNzKGFkZHJlc3NUeXBlKTtcbiAgc2F2ZUJ1dHRvbi5yZW1vdmVDbGFzcyhnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTU1PTiBGVU5DVElPTlMgKi9cbi8qKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2V0IGNsYXNzIGxpc3QgZnJvbSBnaXZlbiBlbGVtZW50XG5mdW5jdGlvbiBnZXRDbGFzc0xpc3QoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbn1cblxuLy8gR2V0IGZpZWxkIG5hbWUgdG8gZmlsbCBkYXRhIGluZm8gaW4gLmNhbmNlbC1pbmZvIGRpdlxuZnVuY3Rpb24gZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IC9bQS1aXS9nbS5leGVjKGZpZWxkTmFtZSk7XG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIChmaWVsZE5hbWUuc3Vic3RyKDAsIG1hdGNoZXMuaW5kZXgpICsgJy0nICsgZmllbGROYW1lLnN1YnN0cihtYXRjaGVzLmluZGV4LCBmaWVsZE5hbWUubGVuZ3RoKSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZE5hbWU7XG59XG5cbi8vIEdldCBvdGhlciBhZGRyZXNzIHR5cGUgZnJvbSBhZGRyZXNzIHR5cGUgZ2l2ZVxuZnVuY3Rpb24gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkge1xuICByZXR1cm4gKGFkZHJlc3NUeXBlID09PSAnc2hpcHBpbmcnKSA/ICdiaWxsaW5nJyA6ICdzaGlwcGluZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrb3V0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTlRBQ1QgUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjb250YWN0UGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIEFqYXggY2FsbCB3aGVuIGNvbnRhY3QgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgJCgnI2NvbnRhY3RQYWdlIGZvcm0gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwgLm1vZGFsLWJvZHkgZGl2JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZXJyb3JzIG9mIGZvcm0gd2hlbiBzdWNjZXNzXG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXScpLnZhbCgnJykucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlICk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXSwgI2NvbnRhY3RQYWdlIFtmb3JePVwic3lsaXVzX2NvbnRhY3RfXCJdJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNikge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBlcnJvckxpc3QgPSAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJ3NwYW4nKS50b0FycmF5KCk7XG4gICAgICAgICAgZXJyb3JMaXN0LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLm91dGVyVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmNsYXNzTmFtZSAhPT0gJ2FjY2VwdENndicpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgICAgICAgICAgICAuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+JyArIGVycm9yLm91dGVyVGV4dCArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAubmV4dCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQxNykge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSAuY29udGFjdC1lcnJvcicpLmh0bWwoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbiAgLy8gQWRkIG5ldyBmaWVsZCB3aGVuIGNob3NlbiBzdWJqZWN0IGlzIFwib3RoZXJcIlxuICAkKCcjc3lsaXVzX2NvbnRhY3Rfc3ViamVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoJChlLnRhcmdldCkudmFsKCkgPT09ICdvdGhlcicpIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0Jykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogTE9HSU4gUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IFN5bGl1c0xvYWRhYmxlRm9ybSB9IGZyb20gJy4vc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuY29uc3QgbG9naW5QYWdlID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gT3BlbiByZXNldCBwYXNzd29yZCBtb2RhbFxuICAkKCcucmVzZXQtcGFzc3dvcmQtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQodGhpcykuZGF0YSgnbW9kYWxJZCcpO1xuICAgICQobW9kYWxJZCkubW9kYWwoJ3Nob3cnKTtcbiAgICAkKCcuaGVhZGVyLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSlcblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgbG9naW4tZm9ybSBleGlzdHMgaW4gcGFnZVxuICBpZigkKCcubG9naW4tZm9ybScpKSB7XG4gICAgJCgnLnN1Ym1pdC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50KS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiBjbGFzcyB2ZXJpZnktYWNjb3VudCBleGlzdHMgaW4gcGFnZVxuICBjb25zdCB2ZXJpZnlBY2NvdW50T2JqZWN0ID0gJCgnLnZlcmlmeS1hY2NvdW50Jyk7XG4gIGlmKHZlcmlmeUFjY291bnRPYmplY3QpIHtcbiAgICB2ZXJpZnlBY2NvdW50T2JqZWN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT25seSB3aGVuIHJlc2V0UGFzc3dvcmRTdWJtaXQgYnV0dG9uIGV4aXN0cyBpbiBwYWdlLCBBamF4IGNhbGwgdG8gcmVzZXQgcGFzc3dvcmRcbiAgaWYgKCQoJyNyZXNldFBhc3N3b3JkU3VibWl0JykpIHtcbiAgICBsb2FkQWpheFBhc3N3b3JkUmVzZXQoKTtcblxuICAgIC8vIEFjdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAkKCcjcmVzZXRQYXNzd29yZE1vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoISQoJy5tb2RhbC1jb250ZW50JykuaGFzQ2xhc3MoJ2lzLXN1Y2Nlc3MnKSkge1xuICAgICAgICAvLyBBamF4IGxvYWRcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHknKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gJCh0aGlzKS5kYXRhKCdhamF4LXBhc3N3b3JkLXJlcXVlc3QtdXJsJyk7XG4gICAgICAgICQoJ2Zvcm0ubG9hZGFibGUnLCB0aGlzKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBtb2RhbEJvZHkuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2FkQWpheFBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIFN5bGl1c0xvYWRhYmxlRm9ybSgkKCdmb3JtLmxvYWRhYmxlJywgbW9kYWxCb2R5KVswXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQnKS52YWwoJycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgIH0pXG4gIH1cblxuICAvLyBDaGVjayBpZiBlbWFpbCBpcyB2YWxpZCBiZWZvcmUgc3VibWl0IHJlZ2lzdGVyIGZvcm1cbiAgJCgnYnV0dG9uLnN1Ym1pdC1yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykpO1xuICAgIGNvbnN0IGlucHV0UmVnaXN0ZXJGb3JtID0gcmVnaXN0ZXJGb3JtLmZpbmQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWwgPSBpbnB1dFJlZ2lzdGVyRm9ybS52YWwoKTtcbiAgICBjb25zdCBpbnZhbGlkU3BhbiA9IGlucHV0UmVnaXN0ZXJGb3JtLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgIGludmFsaWRTcGFuLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICBpbnB1dFJlZ2lzdGVyRm9ybS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgcmVnaXN0ZXJGb3JtLnN1Ym1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkU3Bhbi5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0uYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gZW1haWwgZmllbGQgaXMgZmlsbGVkIGFuZCBjdXN0b21lciB3YW50cyB0byBtb2RpZnkgaXRzIHZhbHVlXG4gICQoJy5yZWdpc3Rlci1mb3JtIGlucHV0LCAuaGVhZGVyLXJlZ2lzdGVyLWZvcm0gaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkgJiYgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2lzLWludmFsaWQnKSkge1xuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnZGl2JykubmV4dCgnc3BhbicpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBsb2FkQWpheFBhc3N3b3JkUmVzZXQoKSB7XG4gICQoJyNyZXNldFBhc3N3b3JkU3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZycpLmFwcGVuZChyZXNwb25zZSk7XG4gICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50Om5vdCguc3VjY2VzcyknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmFkZENsYXNzKCdpcy1zdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoJy5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3JzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS50ZXh0KCQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3JzIHVsIGxpJykudGV4dCgpKTtcbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcblxuY29uc3QgcHJpY2VDb250YWluZXJTZWxlY3RvciA9ICcjcHJvZHVjdHNGaWx0ZXJzJztcbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUgPSAnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSc7XG5cbmNvbnN0IHByaWNlTWluU2VsZWN0b3IgPSAnaW5wdXRbbmFtZT1cImNyaXRlcmlhW3ByaWNlXVtwcmljZV8xXVwiXSc7XG5jb25zdCBwcmljZU1heFNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nO1xuXG5jb25zdCBwcm9kdWN0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gTWFuYWdlIHZhcmlhbnQgbGlzdCB3aGVuIGNsaWNraW5nIGluIHNpemUgYXZhaWxhYmxlXG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGNvbnN0IHZhcmlhbnRMaXN0Q29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCdkaXYudmFyaWFudC1saXN0Jyk7XG5cbiAgICBpZihidW5kbGVJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICQoJy52YXJpYW50LW5hbWVbZGF0YS1idW5kbGUtaXRlbT1cIicgKyBidW5kbGVJdGVtICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgICQoJy5pbnZhbGlkLWZlZWRiYWNrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKCQodGhpcykuZGF0YSgnYWxtb3N0LW91dCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICQoJy5sYXN0LXByb2R1Y3QtaW4tc3RvY2snLCB2YXJpYW50TGlzdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5sYXN0LXByb2R1Y3QtaW4tc3RvY2snLCB2YXJpYW50TGlzdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgLy8gU2hvdyBvciBoaWRlIHZhcmlhbnRzIGxpc3QgaW4gcHJvZHVjdHMgY2Fyb3VzZWwgYWNjb3JkaW5nIHRvIHNjcmVlbiBzaXplXG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AgLnZhcmlhbnRzLWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCcpXG4gICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDE0NDApIHtcbiAgICAgICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLnNob3coKTtcbiAgICAgIH1cbiAgICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xuXG4gIC8vIFdoZW4gY2xpY2tpbmcgb24gYWRkIHRvIGNhcnQgYnV0dG9uID0+IFNFRSBzeWxpdXMtYWRkLXRvLWNhcnQuanNcbiAgLy8kKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL30pXG5cbiAgJCgnaW5wdXRbaWRePVwiYml0YmFnX3N5bGl1c19wcm9kdWN0X2J1bmRsZV9wbHVnaW5fYWRkX3Byb2R1Y3RfYnVuZGxlX3RvX2NhcnRfXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLmZpbmQoJ3NwYW4uaW52YWxpZC1mZWVkYmFjaycpLmFkZENsYXNzKCdpbnB1dC1jaGVja2VkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIH0pXG59O1xuXG5jb25zdCBmaWx0ZXJQcm9kdWN0cyA9IGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgY3JpdGVyaWEgPSBxdWVyeVN0cmluZy5pbmRleE9mKCdjcml0ZXJpYScpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKTtcblxuICBsZXQgcHJpY2VTbGlkZXI7XG4gIGxldCBwcmljZVNsaWRlck1vYmlsZTtcblxuICBpZiAocHJpY2VJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgcHJpY2VTbGlkZXIgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICBwcmljZVNsaWRlck1vYmlsZSA9IGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpO1xuXG4gICAgLy8gV2hlbiB1c2VyIGNoYW5nZXMgcHJpY2UgaW5wdXQgdmFsdWVcbiAgICBwcmljZUlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKGUud2hpY2ggIT09IDggJiYgIWlzTmFOKFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKXtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgICAgICBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTUFOQUdFIERFU0tUT1AgRklMVEVSU1xuICAgKi9cbiAgLy8gU2l6ZSBmaWx0ZXIgbWFuYWdlbWVudFxuICBjb25zdCBzaXplRmlsdGVySW5wdXQgPSAkKCcjc2l6ZUZpbHRlciBpbnB1dCcpO1xuICBzaXplRmlsdGVySW5wdXQuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgaWYodGhpcy5jaGVja2VkKSB7XG4gICAgICAkKHRoaXMpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCdpbnB1dFtkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIHNpemVGaWx0ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gVmFsaWRhdGUgZmlsdGVycyBvbiBkZXNrdG9wXG4gICQoJ2EudmFsaWRhdGUtZmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJGb3JtJykuc3VibWl0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNQU5BR0UgTU9CSUxFIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnQgb24gbW9iaWxlXG4gICQoJyNjcml0ZXJpYVNpemVNb2JpbGUgaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlucHV0VG9DaGVjayA9ICQoZS50YXJnZXQpLmRhdGEoJ2lkJyk7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydGluZ1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dC5pbnB1dC1zb3J0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dCcpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciAuY2hlY2ttYXJrIC5jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAkKGUudGFyZ2V0KS5uZXh0KCcuY2hlY2ttYXJrJykuZmluZCgnLmNoZWNrZWQnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICB9KTtcblxuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzXG4gICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSBidXR0b24uYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCQoJy5pbnB1dC1zb3J0aW5nOmNoZWNrZWQnKS52YWwoKSA9PT0gJ2NyZWF0ZWRBdCcpIHtcbiAgICAgICQoJy5pbnB1dC1zb3J0aW5nOmNoZWNrZWQnKS5yZW1vdmUoKTtcbiAgICAgICQoJy5pbnB1dC1zb3J0aW5nLWNyZWF0ZWRBdCcpLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtaW5saW5lLWJsb2NrJyk7XG4gICAgfVxuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBNb2JpbGUgZmlsdGVycyBiZWhhdmlvdXJcbiAgJCgnLnByb2R1Y3QtZmlsdGVycy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIHJlc2l6ZUZpbHRlck1lbnUoKTtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogR0VORVJBTCBGVU5DVElPTlNcbiAgICovXG4gIC8vIEhpZGUgcmVpbml0aWFsaXphdGlvbiBidXR0b24gd2hlbiBmaWx0ZXJzIGhhdmUgbm8gY3JpdGVyaWFcbiAgaWYgKGNyaXRlcmlhICE9PSAtMSkge1xuICAgICQoJy5yZWluaXQtZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gIH1cbiAgLy8gQWRkIGFjdGlvbiB0byBjbG9zZSBpY29uXG4gICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmRyb3Bkb3duLXRvZ2dsZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pXG59XG5cbi8qKlxuICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gd2luZG93IGlzIHJlc2l6ZWQgdG8gYXZvaWQgc2hvd2luZyBmaWx0ZXIgbW9iaWxlIG1lbnUgb24gZGVza3RvcFxuICovXG5jb25zdCByZXNpemVGaWx0ZXJNZW51ID0gZnVuY3Rpb24gcmVzaXplRmlsdGVyTW9iaWxlTWVudSgpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSAkKCcjaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyQmFubmVyID0gJCgnLmhlYWRlci1iYW5uZXInKTtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXJDb250YWluZXIuaGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSBoZWFkZXJDb250YWluZXIub3V0ZXJIZWlnaHQoKSAtIGhlYWRlckJhbm5lci5oZWlnaHQoKTtcbiAgICBjb25zdCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjZmlsdGVyU3VibWl0Jykub3V0ZXJIZWlnaHQoKSAtIDEwO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnKS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNmaWx0ZXJMaXN0JykuY3NzKCdoZWlnaHQnLCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJpY2Ugc2xpZGVyIG9uIHRheG9uIHBhZ2VzXG4gKlxuICogQHBhcmFtIHByaWNlSW5wdXRcbiAqIEBwYXJhbSBjb250YWluZXJTZWxlY3RvclxuICogQHJldHVybnMgbm9VaVNsaWRlclxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBjb250YWluZXJTZWxlY3Rvcikge1xuICBjb25zdCBwcmljZUNvbnRhaW5lciA9ICQoY29udGFpbmVyU2VsZWN0b3IpO1xuICBjb25zdCBwcmljZVJhbmdlID0gJCgnI3ByaWNlUmFuZ2UnLCBwcmljZUNvbnRhaW5lcilbMF07XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIC8vIFByZXBhcmUgc2xpZGVyIG9wdGlvbnNcbiAgY29uc3QgdGF4b25NaW5QcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21pbicpKTtcbiAgY29uc3QgdGF4b25NYXhQcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21heCcpKTtcbiAgY29uc3QgcmFuZ2VTbGlkZXJPcHRpb25zID0ge1xuICAgIHN0YXJ0OiBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXSxcblxuICAgIHJhbmdlOiB7XG4gICAgICAnbWluJzogW3RheG9uTWluUHJpY2VdLFxuICAgICAgJ21heCc6IFt0YXhvbk1heFByaWNlXVxuICAgIH0sXG4gICAgc3RlcDogMSxcbiAgICBjb25uZWN0OiB0cnVlLFxuICAgIGZvcm1hdDoge1xuICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZnJvbTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJlaGF2aW91cjogJ3RhcCcsXG4gICAgdG9vbHRpcHM6IGZhbHNlXG4gIH07XG5cbiAgY29uc3Qgc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgc2xpZGVyLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgcHJpY2VNaW4udmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgcHJpY2VNYXgudmFsKHBhcnNlSW50KG5ld1ZhbHVlWzFdKSk7XG4gIH0pO1xuXG4gIHJldHVybiBzbGlkZXI7XG59XG5cbmZ1bmN0aW9uIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCBwcmljZUNvbnRhaW5lcikge1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld1ZhbHVlID0gW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV07XG4gIHByaWNlU2xpZGVyLnNldChuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgcHJpY2UgdmFsdWVzIGJlZm9yZSBzZW5kIGZvcm1cbiAqIEBwYXJhbSBwcmljZVNsaWRlck9iamVjdFxuICogQHBhcmFtIHByaWNlQ29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck9iamVjdCwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0JykuZmlyc3QoKTtcbiAgbGV0IHByaWNlTWluVmFsdWUgPSBwcmljZU1pbi52YWwoKTtcbiAgbGV0IHByaWNlTWF4VmFsdWUgPSBwcmljZU1heC52YWwoKTtcbiAgaWYgKHByaWNlTWluLnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIGlmIChwcmljZU1pbi52YWwoKSA+IHByaWNlSW5wdXQuZGF0YSgnbWF4JykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKTtcbiAgfVxuICBwcmljZU1pbi52YWwocHJpY2VNaW5WYWx1ZSk7XG4gIGlmIChwcmljZU1heC52YWwoKSA+IHByaWNlSW5wdXQuZGF0YSgnbWF4JykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKTtcbiAgfVxuICBpZiAocHJpY2VNYXgudmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgcHJpY2VNYXgudmFsKHByaWNlTWF4VmFsdWUpO1xuICBwcmljZVNsaWRlck9iamVjdC5zZXQoW3ByaWNlTWluVmFsdWUsIHByaWNlTWF4VmFsdWVdKTtcbn1cblxuZXhwb3J0IHsgcHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnUgfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogU0hBUkUgUFJPRFVDVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3Qgc2hhcmVQcm9kdWN0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhcmVQcm9kdWN0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIH0gZnJvbSAnLi9zeWxpdXMtY2FydC1jb21tb24nO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG4gIGxldCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnZm9ybScpO1xuXG4gICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgIGNvbnN0IHNlbGVjdGVkU2l6ZSA9ICQoJ2lucHV0W25hbWVePVwiJyArICQoYWRkVG9DYXJ0Rm9ybSkuZGF0YSgnbmFtZVRvQ2hlY2snKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aDtcbiAgICBjb25zdCBidW5kbGVJdGVtc0NvdW50ID0gJCgnZGl2LmJ1bmRsZS1pdGVtJykubGVuZ3RoO1xuICAgIGlmKHNlbGVjdGVkU2l6ZSA+IDAgJiYgc2VsZWN0ZWRTaXplIDwgYnVuZGxlSXRlbXNDb3VudCApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3Q6bm90KC5pbnB1dC1jaGVja2VkKScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaXplID09PSAwKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcblxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2FkYWJsZScsICdsb2FkaW5nJyk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcbiAgICAgIHJlcXVlc3QudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSAkLnBhcnNlSFRNTChyZXNwb25zZS5kYXRhKVswXTtcbiAgICAgICAgJCgnI2NhcnRBY3Rpb25zIC5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgICAgaWYgKCEkKCcjZW1wdHlDYXJ0JykuaGFzQ2xhc3MoJ2Qtbm9uZScpKSB7XG4gICAgICAgICAgJCgnI2NhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1mbGV4Jyk7XG4gICAgICAgICAgJCgnI2VtcHR5Q2FydCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTCkuc2Nyb2xsVG9wKDApLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnLmNhcnQtY291bnQnKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jb3VudC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKTtcbiAgICAgICAgJCgnI2hlYWRlckNhcnROZXdJdGVtJykuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtbmV3LWl0ZW0nKVswXS5pbm5lckhUTUwpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuIC5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLmNhcnQtc3VidG90YWwnKS5yZW1vdmVDbGFzcygnZC1mbGV4JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLmNhcnQtc3VidG90YWwgc3BhbicpLmxhc3QoKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LXN1YnRvdGFsJylbMF0uaW5uZXJIVE1MKTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJydcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52YWxpZC1mZWVkYmFjaycpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JFbCkge1xuICAgICAgICAgICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5wcm9kdWN0X2lkID4gMCkge1xuICAgICAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXVtkYXRhLXByb2R1Y3QtaWQ9XCInKyBlcnJvci5yZXNwb25zZS5kYXRhLnByb2R1Y3RfaWQgKydcIl0nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdW2RhdGEtYnVuZGxlLWVycm9yXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gKGVycm9yLnJlc3BvbnNlLmRhdGEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4vc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNVcGRhdGVRdWFudGl0eSBmcm9tICcuL3N5bGl1cy11cGRhdGUtcXVhbnRpdHknO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4vc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuXG5jb25zdCBjYXJ0V2lkZ2V0Q29udGFpbmVyID0gJCgnI2hlYWRlckNhcnRJdGVtcycpO1xuY29uc3QgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucyA9IGZ1bmN0aW9uIGRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCkge1xuICAvLyBBZnRlciBEb20gcmVwbGFjZW1lbnQsIHNldCBhY3Rpb25zIGluIGNhcnQgd2lkZ2V0IGFnYWluXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVsb2FkLXF0eS1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNVcGRhdGVRdWFudGl0eShlbCkpO1xuXG4gICQoJy5hamF4LXF0eScsIGNhcnRXaWRnZXRDb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCByZWxvYWRRdHlEaXYgPSAkKCcucmVsb2FkLXF0eS5hamF4Jyk7XG4gICAgY29uc3QgbWF4VmFsdWUgPSAkKHRoaXMpLmF0dHIoJ21heCcpO1xuICAgIGNvbnN0IG1pblZhbHVlID0gJCh0aGlzKS5hdHRyKCdtaW4nKTtcbiAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgcmVsb2FkUXR5RGl2LmF0dHIoJ2RhdGEtanMtdXBkYXRlLXF0eS12YWx1ZScsICQodGhpcykudmFsKCkpO1xuICAgIGlmIChwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA+PSBwYXJzZUludChtYXhWYWx1ZSkpIHtcbiAgICAgICQodGhpcykudmFsKG1heFZhbHVlKTtcbiAgICAgIHJlbG9hZFF0eURpdi5hdHRyKCdkYXRhLWpzLXVwZGF0ZS1xdHktdmFsdWUnLCBtYXhWYWx1ZSk7XG4gICAgfSBlbHNlIGlmKHBhcnNlSW50KCQodGhpcykudmFsKCkpIDwgcGFyc2VJbnQobWluVmFsdWUpKSB7XG4gICAgICAkKHRoaXMpLnZhbChtaW5WYWx1ZSk7XG4gICAgICByZWxvYWRRdHlEaXYuYXR0cignZGF0YS1qcy11cGRhdGUtcXR5LXZhbHVlJywgbWluVmFsdWUpO1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyA9IGZ1bmN0aW9uIHVwZGF0ZUNhcnRXaWRnZXQocmVzcG9uc2UpIHtcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gJC5wYXJzZUhUTUwocmVzcG9uc2UuZGF0YSlbMF07XG4gIGNvbnN0IGNhcnRDb3VudCA9ICQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jb3VudC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MO1xuICBjYXJ0V2lkZ2V0Q29udGFpbmVyLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUwpLnNjcm9sbFRvcCgwKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAkKCcuY2FydC1jb3VudCcpLmh0bWwoY2FydENvdW50KTtcbiAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsIHNwYW4nKS5sYXN0KCkuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1zdWJ0b3RhbCcpWzBdLmlubmVySFRNTCk7XG4gIGlmIChwYXJzZUludChjYXJ0Q291bnQpID09PSAwKSB7XG4gICAgJCgnI2NhcnRJdGVtcycpLnJlbW92ZUNsYXNzKCdkLWZsZXgnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJCgnI2VtcHR5Q2FydCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxufVxuXG5jb25zdCBhZGRUb0NhcnRGdW5jdGlvbnMgPSBmdW5jdGlvbiBhZGRUb0NhcnQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG59XG5cbmV4cG9ydCB7IGFmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMsIHVwZGF0ZUNhcnRXaWRnZXRGdW5jdGlvbnMsIGFkZFRvQ2FydEZ1bmN0aW9ucyB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm0gPSAoZWwpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBlbC5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgU3lsaXVzTG9hZGFibGVGb3JtcywgU3lsaXVzTG9hZGFibGVGb3JtIH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIH0gZnJvbSAnLi9zeWxpdXMtY2FydC1jb21tb24nO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zY3JvbGxUb3AoMCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlZGlyZWN0VXJsICE9PSB1bmRlZmluZWQgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvZHVjdC1hamF4JykpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyB9IGZyb20gJy4vc3lsaXVzLWNhcnQtY29tbW9uJztcblxuY29uc3QgU3lsaXVzVXBkYXRlUXVhbnRpdHkgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy11cGRhdGUtcXR5LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy11cGRhdGUtcXR5LWNzcmYtdG9rZW4nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAkKCcjY2FydEFjdGlvbnMgLnF1YW50aXR5LWVycm9yJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKVxuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtdXBkYXRlLXF0eS12YWx1ZScpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwge30seyBkYXRhOiB7X2NzcmZfdG9rZW46IGNzcmZUb2tlbiwgcXVhbnRpdHk6IG5ld1F1YW50aXR5IH19ICk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmFkZENsYXNzKCdsb2FkaW5nJykuc2Nyb2xsVG9wKDApO1xuXG4gICAgcmVxdWVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyhyZXNwb25zZSk7XG4gICAgICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG5cbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICQoJyNjYXJ0QWN0aW9ucyAucXVhbnRpdHktZXJyb3InKS5hZGRDbGFzcygnZC1ibG9jaycpLmZpbmQoJy5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKChlcnJvci5yZXNwb25zZS5kYXRhKS50b1N0cmluZygpKS5jbG9zZXN0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNVcGRhdGVRdWFudGl0eTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==