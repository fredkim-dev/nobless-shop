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
    } // Cart Icon


    if ($(this).closest('.dropdown').hasClass('cart-btn')) {
      $('#headerCartNewItem').html('');
      $('#headerCartItems').removeClass('d-none');
      $('#cartActions .cart-subtotal').addClass('d-flex').removeClass('d-none');
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
    }
  });
};

const updateCartWidgetFunctions = function updateCartWidget(response) {
  const responseData = _jquery2.default.parseHTML(response.data)[0];

  cartWidgetContainer.html((0, _jquery2.default)(responseData).find('.ajax-cart-items')[0].innerHTML).scrollTop(0).removeClass('loading');
  (0, _jquery2.default)('.cart-count').html((0, _jquery2.default)(responseData).find('.ajax-count-cart-items')[0].innerHTML);
  (0, _jquery2.default)('#cartActions .cart-subtotal span').last().html((0, _jquery2.default)(responseData).find('.ajax-cart-subtotal')[0].innerHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NhcnQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9jaGVja291dC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NvbnRhY3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9sb2dpbi1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3Byb2R1Y3Qtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zaGFyZS1wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtY2FydC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLXVwZGF0ZS1xdWFudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9hY2NvdW50LWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2JhY2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2Nocm9ub3Bvc3QucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NvbGlzc2ltby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZGUucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZW4ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZXMucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZnIucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24taXQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21vbmRpYWwtcmVsYXkucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL25leHQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmVsb2FkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FwaUxvZ2luIiwiZWwiLCJlbGVtZW50Iiwic2lnbkluQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInZhbGlkYXRpb25GaWVsZCIsInVybCIsImdldEF0dHJpYnV0ZSIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2F0Y2giLCJlcnJvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlubmVySFRNTCIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJTeWxpdXNBcGlUb2dnbGUiLCJ0b2dnbGVhYmxlRWxlbWVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwibGVuZ3RoIiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiY3VycmVudFRhcmdldCIsIm9uUmF0ZSIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwiaXRlbSIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiY2xvc2VzdCIsImltZyIsInNldEF0dHJpYnV0ZSIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJ1bmRlZmluZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImluZGV4T2YiLCJmIiwiT3BlcmEiLCJvcGVyYSIsInBhcnNlRmxvYXQiLCJXZWJLaXQiLCJtYXRjaCIsIkNocm9tZSIsIkNocm9tZU1vYmlsZSIsIklFTW9iaWxlIiwidCIsIlJlZ0V4cCIsImV4ZWMiLCJfc2xpY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYmFzZVRvU3RyaW5nIiwiXyIsImlzRWxlbWVudCIsIm5vZGVUeXBlIiwiU3RyaW5nIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsIkV2ZW50IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJGaXQiLCJ3aXRoaW4iLCJhcmd1bWVudHMiLCJzIiwibiIsIm8iLCJhIiwiaCIsInIiLCJkIiwiTWF0aCIsIm1pbiIsIm1heCIsImVhc2luZyIsImZyZXNjb0Vhc2VJbkN1YmljIiwiZnJlc2NvRWFzZUluU2luZSIsImNvcyIsIlBJIiwiZnJlc2NvRWFzZU91dFNpbmUiLCJzaW4iLCJTdXBwb3J0IiwiTyIsIlAiLCJzcGxpdCIsImNhbnZhcyIsImJhIiwiZ2V0Q29udGV4dCIsImNzcyIsImFuaW1hdGlvbiIsIlMiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJzdWJzdHIiLCJkZXRlY3RNb2JpbGVUb3VjaCIsIm1vYmlsZVRvdWNoIiwidGVzdCIsInBsYXRmb3JtIiwiSW1hZ2VSZWFkeSIsImluaXRpYWxpemUiLCJhcHBseSIsImNhbGwiLCJUaW1lcnMiLCJnZXRVUklEYXRhIiwidHlwZSIsImVhY2giLCJUeXBlcyIsImRldGVjdEV4dGVuc2lvbiIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwiY29udGVudCIsInNob3ciLCJoaWRlIiwic3Bpbm5lciIsInRodW1ibmFpbCIsImRlbGF5IiwidGh1bWJuYWlscyIsInNsaWRlIiwia2V5Ym9hcmQiLCJsZWZ0IiwicmlnaHQiLCJlc2MiLCJsb2FkZWRNZXRob2QiLCJsb29wIiwib25DbGljayIsIm92ZXJmbG93IiwiY2xvc2UiLCJwcmVsb2FkIiwicG9zaXRpb24iLCJza2luIiwic3Bpbm5lckRlbGF5Iiwic3luYyIsInVpIiwidWlEZWxheSIsImF1dG9wbGF5IiwiYXBpIiwidGl0bGUiLCJieWxpbmUiLCJwb3J0cmFpdCIsImNvbnRyb2xzIiwiZW5hYmxlanNhcGkiLCJoZCIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJ2cSIsImluaXRpYWxUeXBlT3B0aW9ucyIsImNyZWF0ZSIsIngiLCJ5Iiwib3ZlcmxhcCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiT3ZlcmxheSIsImJ1aWxkIiwidmlzaWJsZSIsImFkZENsYXNzIiwiUGFnZXMiLCJwYWdlIiwidmlldyIsIldpbmRvdyIsInNldFNraW4iLCJyZW1vdmVDbGFzcyIsImF0dGFjaCIsImJvZHkiLCJkZXRhY2giLCJzdG9wIiwiZmFkZVRvIiwiZmFkZU91dCIsImdldFNjcm9sbERpbWVuc2lvbnMiLCJxdWV1ZXMiLCJwYWdlcyIsIl90cmFja2luZyIsIl9maXJzdCIsInRpbWVycyIsIl9ib3giLCJfcGFnZXMiLCJfdGh1bWJuYWlscyIsIlRodW1ibmFpbHMiLCJTcGlubmVyIiwiVUkiLCJfYXR0YWNoZWQiLCJfc2tpbiIsInNldFNob3dpbmdUeXBlIiwiX3Nob3dpbmdUeXBlIiwic3RhcnRPYnNlcnZpbmdSZXNpemUiLCJfb25XaW5kb3dSZXNpemVIYW5kbGVyIiwiX29uV2luZG93UmVzaXplIiwic3RvcE9ic2VydmluZ1Jlc2l6ZSIsIm9mZiIsIl9vblNjcm9sbCIsImFkanVzdFRvU2Nyb2xsIiwiZml0VG9WaWV3cG9ydCIsInVwZGF0ZUJveERpbWVuc2lvbnMiLCJmaXRUb0JveCIsInVwZGF0ZSIsImFkanVzdFByZXZOZXh0IiwiY2VudGVyIiwidG9wIiwic2Nyb2xsVG9wIiwiZ2V0Qm94RGltZW5zaW9ucyIsIl9ib3hEaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsIl9vcmllbnRhdGlvbiIsIl9ib3hQb3NpdGlvbiIsIm9wZW5pbmciLCJfc2hvdyIsInF1ZXVlIiwiZGlzYWJsZSIsIktleWJvYXJkIiwiX2hpZGUiLCJfcmVzZXQiLCJyZW1vdmVBbGwiLCJfcG9zaXRpb24iLCJhZnRlckhpZGUiLCJjbG9zaW5nIiwidmlld3MiLCJzZXRQb3NpdGlvbiIsInN0b3BIaWRlUXVldWUiLCJyZXNldCIsIm1heVByZXZpb3VzIiwicHJldmlvdXMiLCJnZXRTdXJyb3VuZGluZ0luZGV4ZXMiLCJtYXlOZXh0IiwibmV4dCIsImVuYWJsZWQiLCJrZXlDb2RlIiwiZW5hYmxlIiwiX29uS2V5RG93bkhhbmRsZXIiLCJvbktleURvd24iLCJfb25LZXlVcEhhbmRsZXIiLCJvbktleVVwIiwiZ2V0S2V5QnlLZXlDb2RlIiwiUGFnZSIsIkxjIiwiTWMiLCJOYyIsIk9jIiwidWlkIiwiX3RvdGFsIiwiX2Z1bGxDbGljayIsIl92aXNpYmxlIiwic2hvd2hpZGUiLCJfY3JlYXRlZCIsIm9wYWNpdHkiLCJjYXB0aW9uIiwiaW5mbyIsImNsb25lIiwiaW5mb1BhZGRlciIsInBvcyIsImh0bWwiLCJiYWNrZ3JvdW5kIiwiYXR0ciIsInBvc2l0aW9uT3V0c2lkZSIsInByZXZpb3VzSW5zaWRlIiwibmV4dEluc2lkZSIsImNsb3NlSW5zaWRlIiwiZ3JvdXBlZCIsImluZm9JbnNpZGUiLCJpbmZvUGFkZGVySW5zaWRlIiwicG9zSW5zaWRlIiwiY2FwdGlvbkluc2lkZSIsInBvc2l0aW9uSW5zaWRlIiwiX2dldFN1cnJvdW5kaW5nUGFnZXMiLCJwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMiLCJwcmVsb2FkaW5nIiwicHJlbG9hZGVkIiwibG9hZGVkIiwicHJlbG9hZFJlYWR5IiwibG9hZGluZyIsIl9zcGlubmVyRGVsYXkiLCJpbWFnZVJlYWR5IiwiX21hcmtBc0xvYWRlZCIsInNldERpbWVuc2lvbnMiLCJwcmVwZW5kIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwidmltZW9SZWFkeSIsIl9hYm9ydFNwaW5uZXJEZWxheSIsImluc2VydFZpZGVvIiwicGxheWVySWZyYW1lIiwicGFyYW0iLCJfZGF0YSIsIl9jb250ZW50RGltZW5zaW9ucyIsImZyYW1lYm9yZGVyIiwicmFpc2UiLCJsYXN0Q2hpbGQiLCJzdG9wSW5hY3RpdmUiLCJ1cGRhdGVVSSIsIl91aSIsImhpZGVJbmFjdGl2ZSIsIm9uU2hvdyIsImFmdGVyUG9zaXRpb24iLCJyZW1vdmVWaWRlbyIsInJlbW92ZVRyYWNraW5nIiwiX3RyYWNrIiwicmVtb3ZlZCIsIl9nZXRJbmZvSGVpZ2h0IiwiX3doaWxlVmlzaWJsZSIsImlzIiwiaGFzQ2xhc3MiLCJ2aXNpYmlsaXR5IiwidXBkYXRlRm9yY2VkIiwiZnVsbENsaWNrIiwiX25vT3ZlcmZsb3ciLCJwYXJzZUludCIsIl9wb3NpdGlvbk91dHNpZGUiLCJsIiwidSIsImMiLCJwIiwibSIsInYiLCJnIiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwiaHJlZiIsInNldERlZmF1bHRTa2luIiwiX3ZhcnMiLCJ0aHVtYm5haWxGcmFtZSIsInN0YXJ0T2JzZXJ2aW5nIiwid3JhcHBlciIsIl9zbGlkZXIiLCJfcHJldmlvdXMiLCJfcHJldmlvdXNfYnV0dG9uIiwiX3RodW1icyIsIl9zbGlkZSIsIl9uZXh0IiwiX25leHRfYnV0dG9uIiwic2V0QWN0aXZlIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJzZXRPcmllbnRhdGlvbiIsIl9kaXNhYmxlZEdyb3VwIiwiVGh1bWJuYWlsIiwiX3BhZ2UiLCJkaXNhYmxlZCIsInVwZGF0ZVZhcnMiLCJ3IiwicGFkZGluZ1RvcCIsInNpZGVzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYiIsImsiLCJDIiwiVyIsIk0iLCJUIiwiZmxvb3IiLCJJIiwiaXBwIiwicm91bmQiLCJfbW9kZSIsImNlaWwiLCJ0aHVtYnMiLCJyZXNpemUiLCJtb3ZlVG8iLCJtb3ZlVG9QYWdlIiwiYW5pbWF0ZSIsImxvYWRDdXJyZW50UGFnZSIsImFjdGl2YXRlIiwicmVmcmVzaCIsInByZUJ1aWxkIiwidGh1bWJuYWlsV3JhcHBlciIsImljb24iLCJyZWFkeSIsInZpbWVvVGh1bWJuYWlsIiwiX2xvYWRpbmciLCJfcmVtb3ZlZCIsIl9jbGVhckRlbGF5IiwiX2xvYWRlZCIsIl91cmwiLCJfbG9hZCIsIl9lcnJvciIsImZhZGVJblNwaW5uZXIiLCJfbW9kZXMiLCJfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yIiwiX2VuYWJsZWQiLCJmdWxsY2xpY2siLCJfc2Nyb2xsTGVmdCIsIl9jbG9zZSIsIl9vbk1vdXNlTW92ZSIsInVuYmluZCIsIl94IiwiX3kiLCJyZXNldFByZXZOZXh0IiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlVXBIYW5kbGVyIiwiX29uTW91c2VVcCIsIl9zaG93SGFuZGxlciIsIl9oaWRlSGFuZGxlciIsIl9tb3VzZW1vdmVIYW5kbGVyIiwiX2hvdmVyaW5nU2lkZUJ1dHRvbiIsInN0YXJ0VGltZXIiLCJfb25Nb3VzZU1vdmVIYW5kbGVyIiwiX29uTW91c2VMZWF2ZUhhbmRsZXIiLCJfb25Nb3VzZUVudGVySGFuZGxlciIsIl9vbk1vdXNlRW50ZXIiLCJfb25TaWRlTW91c2VFbnRlckhhbmRsZXIiLCJfb25TaWRlTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciIsIl9vblNpZGVNb3VzZUxlYXZlIiwiX29uU2Nyb2xsSGFuZGxlciIsInNjcm9sbExlZnQiLCJfZ2V0RXZlbnRTaWRlIiwiX2hvdmVyaW5nU2lkZSIsIl9tYXlDbGlja0hvdmVyaW5nU2lkZSIsIndoaWNoIiwiY2xlYXJUaW1lciIsImluc2lkZSIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIiLCJfZGVsZWdhdGVPdmVybGF5Q2xvc2UiLCJvdXRzaWRlIiwicmVzaXplTWFpbkNvbnRhaW5lciIsImZvb3RlckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJqUXVlcnkiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJldmVudCIsImRldmVsb3BNb2JpbGVNZW51IiwibWVudUljb25lc0Z1bmN0aW9ucyIsImhlYWRlck91dGVySGVpZ2h0IiwicHJvZHVjdENvbnRhaW5lckhlaWdodCIsInJlc2l6ZU1lbnUiLCJoZWFkZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJvcmRlcnNHcmlkRnVuY3Rpb25zIiwicHJldiIsInRvb2x0aXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94IiwiZWxlbSIsImNhcm91c2VsIiwibWFpbkZ1bmN0aW9ucyIsImNyZWF0ZUNhcm91c2VsIiwiY3JlYXRlUHJvZHVjdENhcm91c2VsIiwiY2Fyb3VzZWxFbGVtZW50IiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXBwZW5kQXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzbGljayIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiaXNDYXJ0SXRlbXNDYXJvdXNlbCIsIm1vYmlsZUZpcnN0IiwicmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0IiwidW5zbGlja2VkIiwiY3JlYXRlQWRkcmVzc0Nhcm91c2VsIiwib3B0cyIsInJvd3MiLCJzbGlkZXNQZXJSb3ciLCJhZGFwdGl2ZUhlaWdodCIsInZpc2libGVTbGlkZXJEaXYiLCJjcmVhdGVHYWxsZXJ5RGVza3RvcCIsImltYWdlcyIsImluZGV4IiwiaGVpZ2h0Q29udGVudCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImltZ1NlbGVjdG9yIiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImJvZHlDb250YWluZXIiLCJjYXJ0IiwibmV3UXR5IiwidmFsIiwiaW5wdXRRdHlOYW1lIiwiY291cG9uIiwiYm9udXNQb2ludHMiLCJzYXZlQnV0dG9uIiwiY2FuY2VsQnRuIiwiY2hlY2tvdXQiLCJhZGRyZXNzVHlwZSIsImdldENsYXNzTGlzdCIsIm1hbmFnZUFkZHJlc3NUeXBlIiwiY2hvb3NlQWRkcmVzcyIsInNob3dBZGRGb3JtIiwiZmllbGQiLCJmaWVsZE5hbWUiLCJ0b1NhdmUiLCJ0b1JlcGxhY2UiLCJjaGVja291dFNhdmVBZGRyZXNzIiwiZmlsbEFsbEFkZHJlc3NlcyIsInN1Ym1pdCIsImhpZGVDaGFuZ2VBZGRyZXNzIiwiaGlkZVNhdmVBZGRyZXNzRm9ybSIsImNhbmNlbENoYW5nZUFkZHJlc3MiLCJmaWVsZFNlbGVjdG9yIiwiZm9ybUZpZWxkIiwiY2hvc2VuQWRkcmVzc1RleHQiLCJjaG9zZW5WYWx1ZSIsInRleHQiLCJzdWJzdHJpbmciLCJ0cmltIiwiZ2V0RGF0YUZpZWxkTmFtZSIsInByb3AiLCJmaWxsT3RoZXJBZGRyZXNzIiwiYWpheCIsInNlcmlhbGl6ZSIsImRhdGFTdWNjZXNzRGl2Iiwibm9BZGRyZXNzIiwiZmlsbERhdGFBZnRlclNhdmUiLCJnZXRPdGhlckFkZHJlc3NUeXBlIiwic2hvd01haW5Gb3JtIiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0IiwiZmllbGRFcnJvciIsImFmdGVyIiwiZmlsbEFkZHJlc3MiLCJmaWVsZElkIiwia2VlcENhbWVsRmllbGQiLCJkYXRhVG9GaWxsIiwicmVnZXgiLCJpbmNsdWRlcyIsIm90aGVyQWRkcmVzc1R5cGUiLCJmaWxsT3RoZXJGb3JtIiwib3RoZXJGaWVsZElkIiwiaWRUb0ZpbGwiLCJuZXdWYWx1ZSIsImZvcm1GaWVsZE5hbWUiLCJmaWVsZFRvUmVwbGFjZSIsIm9sZERhdGEiLCJjbGFzc05hbWUiLCJmaWVsZE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInRleHRUb1JlcGxhY2UiLCJzZWxlY3RvclR5cGUiLCJtYXRjaGVzIiwiY29udGFjdFBhZ2UiLCJtb2RhbCIsInN0YXR1cyIsImVycm9yTGlzdCIsInRvQXJyYXkiLCJvdXRlclRleHQiLCJsb2dpblBhZ2UiLCJtb2RhbElkIiwiZm9ybUVsZW1lbnQiLCJ2ZXJpZnlBY2NvdW50T2JqZWN0IiwicmVnaXN0ZXJGb3JtIiwiaW5wdXRSZWdpc3RlckZvcm0iLCJpbnZhbGlkU3BhbiIsInByaWNlQ29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlIiwicHJpY2VNaW5TZWxlY3RvciIsInByaWNlTWF4U2VsZWN0b3IiLCJwcm9kdWN0IiwiYnVuZGxlSXRlbSIsInZhcmlhbnRMaXN0Q29udGFpbmVyIiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwiU3lsaXVzQWRkVG9DYXJ0IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsInJlcXVlc3QiLCJyZXNwb25zZURhdGEiLCJsYXN0IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbCIsInByb2R1Y3RfaWQiLCJ0b1N0cmluZyIsImNhcnRXaWRnZXRDb250YWluZXIiLCJhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIiwiZG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMiLCJ1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIiwidXBkYXRlQ2FydFdpZGdldCIsImFkZFRvQ2FydEZ1bmN0aW9ucyIsImFkZFRvQ2FydCIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwicmVkaXJlY3RVcmwiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsImNvbnRhaW5zIiwiU3lsaXVzVXBkYXRlUXVhbnRpdHkiLCJuZXdRdWFudGl0eSIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxLQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUEsTUFBTUMsY0FBYyxHQUFJQyxFQUFELElBQVE7QUFDN0IsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1FLFlBQVksR0FBR0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLE1BQXRCLENBQXJCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHSCxPQUFPLENBQUNFLGFBQVIsQ0FBc0IsUUFBdEIsQ0FBeEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdILFlBQVksQ0FBQ0ksWUFBYixDQUEwQixtQkFBMUIsQ0FBWjtBQUNBLFFBQU1DLFVBQVUsR0FBR04sT0FBTyxDQUFDRSxhQUFSLENBQXNCLHFCQUF0QixDQUFuQjtBQUNBLFFBQU1LLGFBQWEsR0FBR1AsT0FBTyxDQUFDRSxhQUFSLENBQXNCLHdCQUF0QixDQUF0QjtBQUNBLFFBQU1NLGNBQWMsR0FBR1IsT0FBTyxDQUFDRSxhQUFSLENBQXNCLHNCQUF0QixDQUF2QjtBQUNBLFFBQU1PLGFBQWEsR0FBR0QsY0FBYyxDQUFDSCxZQUFmLENBQTRCLE1BQTVCLENBQXRCO0FBRUFKLGNBQVksQ0FBQ1MsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBd0NDLENBQUQsSUFBTztBQUM1Q0EsS0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLE1BQVAsQ0FBYyxXQUFkLEVBQTJCVCxVQUFVLENBQUNVLEtBQXRDO0FBQ0FILFVBQU0sQ0FBQ0UsTUFBUCxDQUFjLFdBQWQsRUFBMkJSLGFBQWEsQ0FBQ1MsS0FBekM7QUFDQUgsVUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBQ04sYUFBRCxDQUFkLEVBQStCRCxjQUFjLENBQUNRLEtBQTlDOztBQUVBQyxvQkFBTUMsSUFBTixDQUFXZCxHQUFYLEVBQWdCUyxNQUFoQixFQUNHTSxJQURILENBQ1EsTUFBTTtBQUFFQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQTJCLEtBRDNDLEVBRUdDLEtBRkgsQ0FFVUMsS0FBRCxJQUFXO0FBQ2hCckIscUJBQWUsQ0FBQ3NCLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQyxRQUFqQztBQUNBdkIscUJBQWUsQ0FBQ3dCLFNBQWhCLEdBQTRCSCxLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBZixDQUFvQkMsT0FBaEQ7QUFDRCxLQUxIO0FBTUQsR0FkRDtBQWVELENBekJEOztrQkEyQmVoQyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7Ozs7QUFDQTs7Ozs7O0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBLE1BQU1pQyxlQUFlLEdBQUloQyxFQUFELElBQVE7QUFDOUIsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1LLEdBQUcsR0FBR0osT0FBTyxDQUFDSyxZQUFSLENBQXFCLCtCQUFyQixDQUFaO0FBQ0EsUUFBTTJCLGlCQUFpQixHQUFHQyxRQUFRLENBQUMvQixhQUFULENBQXVCLHdCQUF2QixDQUExQjtBQUVBRixTQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLHNCQUFVQyxDQUFELElBQU87QUFDaERxQixxQkFBaUIsQ0FBQ1AsU0FBbEIsQ0FBNEJqRCxHQUE1QixDQUFnQyxRQUFoQzs7QUFFQSxRQUFJbUMsQ0FBQyxDQUFDdUIsTUFBRixDQUFTbEIsS0FBVCxDQUFlbUIsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM3QmxCLHNCQUFNbUIsR0FBTixDQUFVaEMsR0FBVixFQUFlO0FBQUVTLGNBQU0sRUFBRTtBQUFFd0IsZUFBSyxFQUFFMUIsQ0FBQyxDQUFDdUIsTUFBRixDQUFTbEI7QUFBbEI7QUFBVixPQUFmLEVBQ0dHLElBREgsQ0FDUSxNQUFNO0FBQUVhLHlCQUFpQixDQUFDUCxTQUFsQixDQUE0QkMsTUFBNUIsQ0FBbUMsUUFBbkM7QUFBK0MsT0FEL0QsRUFFR0gsS0FGSCxDQUVTLE1BQU07QUFBRVMseUJBQWlCLENBQUNQLFNBQWxCLENBQTRCakQsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFBNEMsT0FGN0Q7QUFHRDtBQUNGLEdBUmlDLEVBUS9CLElBUitCLENBQWxDO0FBU0QsQ0FkRDs7a0JBZ0JldUQsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxNQUFNTyxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBVCxHQUErQjtBQUN6RCxRQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWhCO0FBRUErQixVQUFRLENBQUNPLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFvREMsSUFBRCxJQUFVO0FBQzNEQSxRQUFJLENBQUNDLFdBQUwsQ0FBaUJKLE9BQU8sQ0FBQ0ssU0FBUixDQUFrQixJQUFsQixDQUFqQjtBQUNBRixRQUFJLENBQUNoQyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxNQUFNO0FBQ3BDZ0MsVUFBSSxDQUFDakIsU0FBTCxDQUFlakQsR0FBZixDQUFtQixTQUFuQjtBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUQsQ0FURDs7a0JBV2U4RCxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTyxZQUFOLENBQW1CO0FBQ2pCQyxhQUFXLENBQUNDLFNBQUQsRUFBWUMsUUFBWixFQUFzQjtBQUMvQixTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFFBQUksS0FBS0QsU0FBVCxFQUFvQjtBQUNsQixXQUFLRSxTQUFMLEdBQWlCQyxNQUFNLENBQUMsS0FBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCQyxXQUF4QixDQUFOLElBQThDLENBQS9EO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQkgsTUFBTSxDQUFDLEtBQUtILFNBQUwsQ0FBZUksT0FBZixDQUF1QkcsZUFBeEIsQ0FBTixJQUFrRCxDQUF2RTtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS1IsU0FBTCxDQUFlSSxPQUFmLENBQXVCSyxnQkFBdkIsS0FBNEMsT0FBNUQ7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQUtWLFNBQUwsQ0FBZTdDLGFBQWYsQ0FBNkIseUJBQTdCLENBQXBCO0FBQ0EsV0FBS3dELGFBQUwsR0FBcUIsS0FBS1gsU0FBTCxDQUFlN0MsYUFBZixDQUE2QiwwQkFBN0IsQ0FBckI7QUFFQSxXQUFLeUQsTUFBTDtBQUNEO0FBQ0Y7O0FBRURBLFFBQU0sR0FBRztBQUNQLFNBQUtaLFNBQUwsQ0FBZXBCLFNBQWYsR0FBMkIsRUFBM0I7QUFDQSxVQUFNaUMsYUFBYSxHQUFHM0IsUUFBUSxDQUFDNEIsYUFBVCxDQUF1QixLQUF2QixDQUF0Qjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksS0FBS2IsU0FBMUIsRUFBcUNhLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBTTlELE9BQU8sR0FBR2lDLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQTdELGFBQU8sQ0FBQ21ELE9BQVIsQ0FBZ0JZLGFBQWhCLEdBQWdDRCxDQUFoQzs7QUFFQSxVQUFJLEtBQUtQLFFBQUwsS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0J2RCxlQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLEtBQUtzRCxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbEM7QUFDRDs7QUFFRCxVQUFJSCxDQUFDLElBQUksS0FBS1QsYUFBZCxFQUE2QjtBQUMzQnJELGVBQU8sQ0FBQzJCLFNBQVIsR0FBb0IsS0FBSzhCLFlBQUwsQ0FBa0I5QixTQUF0QztBQUNELE9BRkQsTUFFTztBQUNMM0IsZUFBTyxDQUFDMkIsU0FBUixHQUFvQixLQUFLK0IsYUFBTCxDQUFtQi9CLFNBQXZDO0FBQ0Q7O0FBRURpQyxtQkFBYSxDQUFDakIsV0FBZCxDQUEwQjNDLE9BQTFCO0FBQ0Q7O0FBQ0QsU0FBSytDLFNBQUwsQ0FBZUosV0FBZixDQUEyQmlCLGFBQTNCO0FBQ0Q7O0FBRURJLGtCQUFnQixDQUFDckQsQ0FBRCxFQUFJO0FBQ2xCLFVBQU1LLEtBQUssR0FBR2tDLE1BQU0sQ0FBQ3ZDLENBQUMsQ0FBQ3VELGFBQUYsQ0FBZ0JmLE9BQWhCLENBQXdCWSxhQUF6QixDQUFwQjtBQUNBLFNBQUtWLGFBQUwsR0FBcUJyQyxLQUFyQjtBQUNBLFNBQUsrQixTQUFMLENBQWVJLE9BQWYsQ0FBdUJHLGVBQXZCLEdBQXlDdEMsS0FBekM7QUFDQSxTQUFLMkMsTUFBTDtBQUNBLFNBQUtYLFFBQUwsQ0FBY21CLE1BQWQsQ0FBcUJuRCxLQUFyQjtBQUNEOztBQTdDZ0I7O2tCQWdESjZCLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTXVCLFlBQU4sQ0FBbUI7QUFDakJ0QixhQUFXLENBQUN1QixPQUFELEVBQVU7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0EsT0FBTCxDQUFhM0QsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBSzRELE1BQUwsQ0FBWUwsSUFBWixDQUFpQixJQUFqQixDQUF4QztBQUNBLFNBQUtNLGFBQUwsR0FBcUJ0QyxRQUFRLENBQUMvQixhQUFULENBQXVCLEtBQUttRSxPQUFMLENBQWFsQixPQUFiLENBQXFCcUIsUUFBNUMsQ0FBckI7QUFDQSxTQUFLRixNQUFMO0FBQ0Q7O0FBRURBLFFBQU0sR0FBRztBQUNQLFFBQUksS0FBS0QsT0FBTCxDQUFhSSxPQUFqQixFQUEwQjtBQUN4QixXQUFLRixhQUFMLENBQW1CRyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsRUFBbkM7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLSixhQUFMLENBQW1CRyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGOztBQWRnQjs7a0JBaUJKUCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBLE1BQU1RLG1CQUFOLENBQTBCO0FBQ3hCOUIsYUFBVyxHQUFHO0FBQ1osU0FBSytCLGFBQUwsR0FBcUI1QyxRQUFRLENBQUMvQixhQUFULENBQXVCLHlCQUF2QixDQUFyQjtBQUNBLFNBQUs0RSxTQUFMLEdBQWlCLEtBQUtELGFBQUwsQ0FBbUIzRSxhQUFuQixDQUFpQyxLQUFqQyxDQUFqQjtBQUNBLFNBQUs2RSxnQkFBTCxHQUF3QixLQUFLRixhQUFMLENBQW1CeEUsWUFBbkIsQ0FBZ0MsTUFBaEMsQ0FBeEI7QUFDQSxTQUFLMkUsZUFBTCxHQUF1QixLQUFLRixTQUFMLENBQWV6RSxZQUFmLENBQTRCLEtBQTVCLENBQXZCO0FBRUE0QixZQUFRLENBQUNPLGdCQUFULENBQTBCLGlEQUExQixFQUE2RUMsT0FBN0UsQ0FBc0Z3QyxJQUFELElBQVU7QUFDN0ZBLFVBQUksQ0FBQ3ZFLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU0sS0FBS3dFLFFBQUwsRUFBdEM7QUFDRCxLQUZEO0FBSUEsU0FBS0EsUUFBTDtBQUNEOztBQUVEQyxrQkFBZ0IsR0FBRztBQUNqQixVQUFNQyxLQUFLLEdBQUduRCxRQUFRLENBQUNPLGdCQUFULENBQTJCO0FBQzdDO0FBQ0E7QUFDQSxLQUhrQixDQUFkO0FBS0EsV0FBTyxDQUFDLEdBQUc0QyxLQUFKLEVBQVdDLEdBQVgsQ0FBZXRGLEVBQUUsSUFBSUEsRUFBRSxDQUFDaUIsS0FBeEIsRUFBK0JzRSxJQUEvQixDQUFvQyxHQUFwQyxDQUFQO0FBQ0Q7O0FBRURDLG1CQUFpQixDQUFDQyxPQUFELEVBQVU7QUFDekIsUUFBSUMsU0FBUyxHQUFHLEtBQUtWLGdCQUFyQjtBQUNBLFFBQUlXLFFBQVEsR0FBRyxLQUFLVixlQUFwQjtBQUNBLFVBQU1DLElBQUksR0FBR2hELFFBQVEsQ0FBQy9CLGFBQVQsQ0FBd0I7QUFDekMsbURBQW1Ec0YsT0FBUTtBQUMzRCxzREFBc0RBLE9BQVE7QUFDOUQsS0FIaUIsQ0FBYjs7QUFLQSxRQUFJUCxJQUFKLEVBQVU7QUFDUixZQUFNVSxNQUFNLEdBQUdWLElBQUksQ0FBQ1csT0FBTCxDQUFhLDZCQUFiLENBQWY7QUFDQUgsZUFBUyxHQUFHRSxNQUFNLENBQUN6RixhQUFQLENBQXFCLEdBQXJCLEVBQTBCRyxZQUExQixDQUF1QyxNQUF2QyxDQUFaO0FBQ0FxRixjQUFRLEdBQUdDLE1BQU0sQ0FBQ3pGLGFBQVAsQ0FBcUIsS0FBckIsRUFBNEJHLFlBQTVCLENBQXlDLHNCQUF6QyxDQUFYO0FBQ0Q7O0FBRUQsV0FBTztBQUFFb0YsZUFBRjtBQUFhQztBQUFiLEtBQVA7QUFDRDs7QUFFRFIsVUFBUSxHQUFHO0FBQ1QsVUFBTVcsR0FBRyxHQUFHLEtBQUtOLGlCQUFMLENBQXVCLEtBQUtKLGdCQUFMLEVBQXZCLENBQVo7QUFDQSxTQUFLTixhQUFMLENBQW1CaUIsWUFBbkIsQ0FBZ0MsTUFBaEMsRUFBd0NELEdBQUcsQ0FBQ0osU0FBNUM7QUFDQSxTQUFLWCxTQUFMLENBQWVnQixZQUFmLENBQTRCLEtBQTVCLEVBQW1DRCxHQUFHLENBQUNILFFBQXZDO0FBQ0Q7O0FBNUN1Qjs7a0JBK0NYZCxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxNQUFNbUIsMEJBQTBCLEdBQUcsU0FBU0EsMEJBQVQsR0FBc0M7QUFDdkU5RCxVQUFRLENBQUNPLGdCQUFULENBQTBCLGlEQUExQixFQUE2RUMsT0FBN0UsQ0FBc0Z3QyxJQUFELElBQVU7QUFDN0ZBLFFBQUksQ0FBQ3ZFLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU07QUFDcEMsVUFBSXNGLFFBQVEsR0FBRyxFQUFmO0FBRUEvRCxjQUFRLENBQUNPLGdCQUFULENBQTBCLG9EQUExQixFQUFnRkMsT0FBaEYsQ0FBeUZ6QyxPQUFELElBQWE7QUFDbkcsY0FBTWlHLE1BQU0sR0FBR2pHLE9BQWY7QUFDQSxjQUFNa0csTUFBTSxHQUFHRCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0UsYUFBUixDQUFOLENBQTZCbkYsS0FBNUM7QUFDQWdGLGdCQUFRLElBQUssU0FBUUMsTUFBTSxDQUFDNUYsWUFBUCxDQUFvQixhQUFwQixDQUFtQyxLQUFJNkYsTUFBTyxJQUFuRTtBQUNELE9BSkQ7QUFNQSxZQUFNRSxLQUFLLEdBQUduRSxRQUFRLENBQUMvQixhQUFULENBQXVCLDBCQUF2QixFQUFtREEsYUFBbkQsQ0FBaUU4RixRQUFqRSxFQUEyRTNGLFlBQTNFLENBQXdGLFlBQXhGLENBQWQ7O0FBRUEsVUFBSStGLEtBQUssS0FBS0MsU0FBZCxFQUF5QjtBQUN2QnBFLGdCQUFRLENBQUMvQixhQUFULENBQXVCLHlCQUF2QixFQUFrRHlCLFNBQWxELEdBQThEeUUsS0FBOUQ7QUFDQW5FLGdCQUFRLENBQUMvQixhQUFULENBQXVCLHFCQUF2QixFQUE4Q29HLGVBQTlDLENBQThELFVBQTlEO0FBQ0QsT0FIRCxNQUdPO0FBQ0xyRSxnQkFBUSxDQUFDL0IsYUFBVCxDQUF1Qix5QkFBdkIsRUFBa0R5QixTQUFsRCxHQUE4RE0sUUFBUSxDQUFDL0IsYUFBVCxDQUF1QiwwQkFBdkIsRUFBbURHLFlBQW5ELENBQWdFLHVCQUFoRSxDQUE5RDtBQUNBNEIsZ0JBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDNEYsWUFBOUMsQ0FBMkQsVUFBM0QsRUFBdUUsVUFBdkU7QUFDRDtBQUNGLEtBbEJEO0FBbUJELEdBcEJEO0FBcUJELENBdEJEOztBQXdCQSxNQUFNUywyQkFBMkIsR0FBRyxTQUFTQSwyQkFBVCxHQUF1QztBQUN6RXRFLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsZ0RBQTFCLEVBQTRFQyxPQUE1RSxDQUFxRndDLElBQUQsSUFBVTtBQUM1RkEsUUFBSSxDQUFDdkUsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBaUNDLENBQUQsSUFBTztBQUNyQyxZQUFNeUYsS0FBSyxHQUFHbkIsSUFBSSxDQUFDVyxPQUFMLENBQWEsSUFBYixFQUFtQjFGLGFBQW5CLENBQWlDLGlDQUFqQyxFQUFvRXlCLFNBQWxGO0FBQ0FNLGNBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEeUIsU0FBbEQsR0FBOER5RSxLQUE5RDtBQUNELEtBSEQ7QUFJRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQSxNQUFNSSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLHFCQUFxQixHQUFHeEUsUUFBUSxDQUFDeUUsY0FBVCxDQUF3Qix5QkFBeEIsS0FBc0QsSUFBcEY7QUFDQSxRQUFNQyxxQkFBcUIsR0FBRzFFLFFBQVEsQ0FBQ3lFLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGOztBQUVBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3pCViw4QkFBMEI7QUFDM0IsR0FGRCxNQUVPLElBQUlZLHFCQUFKLEVBQTJCO0FBQ2hDSiwrQkFBMkI7QUFDNUI7QUFDRixDQVREOztrQkFXZUMsb0I7Ozs7Ozs7Ozs7Ozs7O0FDdERmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTlCQTs7QUFRQTs7QUFFQTtBQXNCQXBGLE1BQU0sQ0FBQ3dGLE1BQVAsR0FBZ0JDLGVBQWhCO0FBQ0F6RixNQUFNLENBQUMwRixRQUFQLEdBQWtCQyx3QkFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBU2pELENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFVBQXNDcUcsaUNBQU8sQ0FBQyx5RUFBRCxDQUFELG9DQUFZckcsQ0FBWjtBQUFBO0FBQUE7QUFBQSxvR0FBNUMsR0FBMkQsU0FBM0Q7QUFBMEosQ0FBeEssWUFBOEssVUFBU3NHLENBQVQsRUFBVztBQUFDLE1BQUlDLE1BQU0sR0FBQyxFQUFYO0FBQWNELEdBQUMsQ0FBQ0UsTUFBRixDQUFTRCxNQUFULEVBQWdCO0FBQUNFLFdBQU8sRUFBQztBQUFULEdBQWhCLEdBQW1DRixNQUFNLENBQUNHLEtBQVAsR0FBYTtBQUFDQyxVQUFNLEVBQUM7QUFBUixHQUFoRDtBQUE0RCxNQUFJQyxNQUFNLEdBQUM7QUFBQ0MsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBSTFELENBQUMsR0FBQztBQUFDMkQsYUFBSyxFQUFDUixDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVXFHLEtBQVY7QUFBUCxPQUFOOztBQUFnQyxVQUFHQyxPQUFPLENBQUNDLFlBQVIsSUFBc0JELE9BQU8sQ0FBQ0UsT0FBUixJQUFpQkYsT0FBTyxDQUFDRyxLQUFsRCxFQUF3RDtBQUFDLFlBQUlsSCxDQUFDLEdBQUNzQixRQUFRLENBQUM2RixlQUFULENBQXlCQyxXQUF6QixHQUFxQzNHLE1BQU0sQ0FBQzRHLFVBQWxEO0FBQTZEbEUsU0FBQyxDQUFDbUUsTUFBRixHQUFTN0csTUFBTSxDQUFDOEcsV0FBUCxHQUFtQnZILENBQTVCO0FBQThCLE9BQXBKLE1BQXlKbUQsQ0FBQyxDQUFDbUUsTUFBRixHQUFTaEIsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU2RyxNQUFWLEVBQVQ7O0FBQTRCLGFBQU9uRSxDQUFQO0FBQVM7QUFBblAsR0FBWDtBQUFBLE1BQWdRNEQsT0FBTyxJQUFFL0csQ0FBQyxHQUFDd0gsU0FBUyxDQUFDQyxTQUFaLEVBQXNCO0FBQUNDLE1BQUUsRUFBQyxFQUFFLENBQUNqSCxNQUFNLENBQUNrSCxXQUFSLElBQXFCLENBQUMsQ0FBRCxLQUFLM0gsQ0FBQyxDQUFDNEgsT0FBRixDQUFVLE9BQVYsQ0FBNUIsS0FBaURDLENBQUMsQ0FBQyxPQUFELENBQXREO0FBQWdFQyxTQUFLLEVBQUMsQ0FBQyxDQUFELEdBQUc5SCxDQUFDLENBQUM0SCxPQUFGLENBQVUsT0FBVixDQUFILEtBQXdCLENBQUMsQ0FBQ25ILE1BQU0sQ0FBQ3NILEtBQVQsSUFBZ0JBLEtBQUssQ0FBQ3RCLE9BQXRCLElBQStCdUIsVUFBVSxDQUFDRCxLQUFLLENBQUN0QixPQUFOLEVBQUQsQ0FBekMsSUFBNEQsSUFBcEYsQ0FBdEU7QUFBZ0t3QixVQUFNLEVBQUMsQ0FBQyxDQUFELEdBQUdqSSxDQUFDLENBQUM0SCxPQUFGLENBQVUsY0FBVixDQUFILElBQThCQyxDQUFDLENBQUMsY0FBRCxDQUF0TTtBQUF1TlgsU0FBSyxFQUFDLENBQUMsQ0FBRCxHQUFHbEgsQ0FBQyxDQUFDNEgsT0FBRixDQUFVLE9BQVYsQ0FBSCxJQUF1QixDQUFDLENBQUQsS0FBSzVILENBQUMsQ0FBQzRILE9BQUYsQ0FBVSxPQUFWLENBQTVCLElBQWdEQyxDQUFDLENBQUMsS0FBRCxDQUE5UTtBQUFzUmIsZ0JBQVksRUFBQyxDQUFDLENBQUNoSCxDQUFDLENBQUNrSSxLQUFGLENBQVEsdUJBQVIsQ0FBclM7QUFBc1VDLFVBQU0sRUFBQyxDQUFDLENBQUQsR0FBR25JLENBQUMsQ0FBQzRILE9BQUYsQ0FBVSxRQUFWLENBQUgsSUFBd0JDLENBQUMsQ0FBQyxTQUFELENBQXRXO0FBQWtYTyxnQkFBWSxFQUFDLENBQUMsQ0FBRCxHQUFHcEksQ0FBQyxDQUFDNEgsT0FBRixDQUFVLE1BQVYsQ0FBSCxJQUFzQkMsQ0FBQyxDQUFDLE9BQUQsQ0FBdFo7QUFBZ2FaLFdBQU8sRUFBQyxDQUFDLENBQUQsR0FBR2pILENBQUMsQ0FBQzRILE9BQUYsQ0FBVSxTQUFWLENBQUgsSUFBeUJDLENBQUMsQ0FBQyxVQUFELENBQWxjO0FBQStjUSxZQUFRLEVBQUMsQ0FBQyxDQUFELEdBQUdySSxDQUFDLENBQUM0SCxPQUFGLENBQVUsVUFBVixDQUFILElBQTBCQyxDQUFDLENBQUMsV0FBRDtBQUFuZixHQUF4QixDQUF2UTtBQUFBLE1BQWt5QjdILENBQWx5Qjs7QUFBb3lCLFdBQVM2SCxDQUFULENBQVcxRSxDQUFYLEVBQWE7QUFBQyxRQUFJbUYsQ0FBQyxHQUFDLElBQUlDLE1BQUosQ0FBV3BGLENBQUMsR0FBQyxXQUFiLEVBQTBCcUYsSUFBMUIsQ0FBK0J4SSxDQUEvQixDQUFOO0FBQXdDLFdBQU0sQ0FBQ3NJLENBQUQsSUFBSU4sVUFBVSxDQUFDTSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQXBCO0FBQTJCOztBQUFBLE1BQUlHLE1BQU0sR0FBQ0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUEzQjs7QUFBaUMsV0FBU0MsWUFBVCxDQUFzQjFGLENBQXRCLEVBQXdCO0FBQUMsV0FBTSxZQUFVLE9BQU9BLENBQWpCLEdBQW1CQSxDQUFuQixHQUFxQixRQUFNQSxDQUFOLEdBQVEsRUFBUixHQUFXQSxDQUFDLEdBQUMsRUFBeEM7QUFBMkM7O0FBQUEsTUFBSTJGLENBQUMsR0FBQztBQUFDQyxhQUFTLEVBQUMsbUJBQVM1RixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLElBQUUsTUFBSUEsQ0FBQyxDQUFDNkYsUUFBaEI7QUFBeUIsS0FBaEQ7QUFBaURDLFVBQU0sRUFBQztBQUFDQyxnQkFBVSxFQUFDLG9CQUFTL0YsQ0FBVCxFQUFXO0FBQUMsZUFBTSxDQUFDQSxDQUFDLEdBQUMwRixZQUFZLENBQUMxRixDQUFELENBQWYsS0FBcUJBLENBQUMsQ0FBQ2dHLE1BQUYsQ0FBUyxDQUFULEVBQVlDLFdBQVosS0FBMEJqRyxDQUFDLENBQUN5RixLQUFGLENBQVEsQ0FBUixDQUFyRDtBQUFnRTtBQUF4RjtBQUF4RCxHQUFOO0FBQXlKdEMsR0FBQyxDQUFDaEYsUUFBUSxDQUFDNkYsZUFBVixDQUFELENBQTRCa0MsRUFBNUIsQ0FBK0IsMkJBQS9CLEVBQTJELFVBQVNsRyxDQUFULEVBQVc7QUFBQyxRQUFJbkQsQ0FBSjs7QUFBTSxRQUFHbUQsQ0FBQyxDQUFDbUcsYUFBRixDQUFnQkMsVUFBaEIsR0FBMkJ2SixDQUFDLEdBQUNtRCxDQUFDLENBQUNtRyxhQUFGLENBQWdCQyxVQUFoQixHQUEyQixHQUF4RCxHQUE0RHBHLENBQUMsQ0FBQ21HLGFBQUYsQ0FBZ0JFLE1BQWhCLEtBQXlCeEosQ0FBQyxHQUFDLENBQUNtRCxDQUFDLENBQUNtRyxhQUFGLENBQWdCRSxNQUFqQixHQUF3QixDQUFuRCxDQUE1RCxFQUFrSHhKLENBQXJILEVBQXVIO0FBQUMsVUFBSXNJLENBQUMsR0FBQ2hDLENBQUMsQ0FBQ21ELEtBQUYsQ0FBUSxtQkFBUixDQUFOO0FBQW1DbkQsT0FBQyxDQUFDbkQsQ0FBQyxDQUFDNUIsTUFBSCxDQUFELENBQVltQyxPQUFaLENBQW9CNEUsQ0FBcEIsRUFBc0J0SSxDQUF0QixHQUF5QnNJLENBQUMsQ0FBQ29CLG9CQUFGLE1BQTBCdkcsQ0FBQyxDQUFDd0csZUFBRixFQUFuRCxFQUF1RXJCLENBQUMsQ0FBQ3NCLGtCQUFGLE1BQXdCekcsQ0FBQyxDQUFDbEQsY0FBRixFQUEvRjtBQUFrSDtBQUFDLEdBQTNWO0FBQTZWLE1BQUk0SixHQUFHLEdBQUM7QUFBQ0MsVUFBTSxFQUFDLGdCQUFTM0csQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsV0FBSSxJQUFJc0ksQ0FBQyxHQUFDaEMsQ0FBQyxDQUFDRSxNQUFGLENBQVM7QUFBQ2MsY0FBTSxFQUFDLENBQUMsQ0FBVDtBQUFXUixhQUFLLEVBQUMsQ0FBQztBQUFsQixPQUFULEVBQThCaUQsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFjLEVBQTVDLENBQU4sRUFBc0RDLENBQUMsR0FBQzFELENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXhHLENBQVosQ0FBeEQsRUFBdUVpSyxDQUFDLEdBQUMsQ0FBekUsRUFBMkVDLENBQUMsR0FBQyxDQUE3RSxFQUErRUMsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDeEIsS0FBbkYsRUFBeUZzRCxDQUFDLEdBQUM5QixDQUFDLENBQUNoQixNQUFqRyxFQUF3RyxJQUFFNEMsQ0FBRixLQUFNQyxDQUFDLElBQUVILENBQUMsQ0FBQ2xELEtBQUYsR0FBUTNELENBQUMsQ0FBQzJELEtBQWIsSUFBb0JzRCxDQUFDLElBQUVKLENBQUMsQ0FBQzFDLE1BQUYsR0FBU25FLENBQUMsQ0FBQ21FLE1BQXhDLENBQXhHLEdBQXlKO0FBQUMsWUFBSStDLENBQUMsR0FBQyxDQUFOO0FBQUEsWUFBUUMsQ0FBQyxHQUFDLENBQVY7QUFBWUgsU0FBQyxJQUFFSCxDQUFDLENBQUNsRCxLQUFGLEdBQVEzRCxDQUFDLENBQUMyRCxLQUFiLEtBQXFCdUQsQ0FBQyxHQUFDbEgsQ0FBQyxDQUFDMkQsS0FBRixHQUFRa0QsQ0FBQyxDQUFDbEQsS0FBakMsR0FBd0NzRCxDQUFDLElBQUVKLENBQUMsQ0FBQzFDLE1BQUYsR0FBU25FLENBQUMsQ0FBQ21FLE1BQWQsS0FBdUJnRCxDQUFDLEdBQUNuSCxDQUFDLENBQUNtRSxNQUFGLEdBQVMwQyxDQUFDLENBQUMxQyxNQUFwQyxDQUF4QyxFQUFvRjJDLENBQUMsR0FBQ00sSUFBSSxDQUFDQyxHQUFMLENBQVNILENBQVQsRUFBV0MsQ0FBWCxDQUF0RixFQUFvR04sQ0FBQyxHQUFDO0FBQUNsRCxlQUFLLEVBQUM5RyxDQUFDLENBQUM4RyxLQUFGLEdBQVFtRCxDQUFmO0FBQWlCM0MsZ0JBQU0sRUFBQ3RILENBQUMsQ0FBQ3NILE1BQUYsR0FBUzJDO0FBQWpDLFNBQXRHLEVBQTBJQyxDQUFDLEVBQTNJO0FBQThJOztBQUFBLGFBQU9GLENBQUMsQ0FBQ2xELEtBQUYsR0FBUXlELElBQUksQ0FBQ0UsR0FBTCxDQUFTVCxDQUFDLENBQUNsRCxLQUFYLEVBQWlCLENBQWpCLENBQVIsRUFBNEJrRCxDQUFDLENBQUMxQyxNQUFGLEdBQVNpRCxJQUFJLENBQUNFLEdBQUwsQ0FBU1QsQ0FBQyxDQUFDMUMsTUFBWCxFQUFrQixDQUFsQixDQUFyQyxFQUEwRDBDLENBQWpFO0FBQW1FO0FBQTdZLEdBQVI7QUFBdVoxRCxHQUFDLENBQUNFLE1BQUYsQ0FBU0YsQ0FBQyxDQUFDb0UsTUFBWCxFQUFrQjtBQUFDQyxxQkFBaUIsRUFBQywyQkFBU3hILENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTBCLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsYUFBT0QsQ0FBQyxJQUFFaEssQ0FBQyxJQUFFaUssQ0FBTCxDQUFELEdBQVNqSyxDQUFULEdBQVdBLENBQVgsR0FBYXNJLENBQXBCO0FBQXNCLEtBQTdEO0FBQThEc0Msb0JBQWdCLEVBQUMsMEJBQVN6SCxDQUFULEVBQVduRCxDQUFYLEVBQWFzSSxDQUFiLEVBQWUwQixDQUFmLEVBQWlCQyxDQUFqQixFQUFtQjtBQUFDLGFBQU0sQ0FBQ0QsQ0FBRCxHQUFHTyxJQUFJLENBQUNNLEdBQUwsQ0FBUzdLLENBQUMsR0FBQ2lLLENBQUYsSUFBS00sSUFBSSxDQUFDTyxFQUFMLEdBQVEsQ0FBYixDQUFULENBQUgsR0FBNkJkLENBQTdCLEdBQStCMUIsQ0FBckM7QUFBdUMsS0FBMUk7QUFBMkl5QyxxQkFBaUIsRUFBQywyQkFBUzVILENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTBCLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsYUFBT0QsQ0FBQyxHQUFDTyxJQUFJLENBQUNTLEdBQUwsQ0FBU2hMLENBQUMsR0FBQ2lLLENBQUYsSUFBS00sSUFBSSxDQUFDTyxFQUFMLEdBQVEsQ0FBYixDQUFULENBQUYsR0FBNEJ4QyxDQUFuQztBQUFxQztBQUF0TixHQUFsQjtBQUEyTyxNQUFJMkMsT0FBTyxJQUFFQyxDQUFDLEdBQUM1SixRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQXZCLENBQUYsRUFBZ0NpSSxDQUFDLEdBQUMsd0JBQXdCQyxLQUF4QixDQUE4QixHQUE5QixDQUFsQyxFQUFxRTtBQUFDQyxVQUFNLEdBQUVDLEVBQUUsR0FBQ2hLLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBSCxFQUFvQyxFQUFFLENBQUNvSSxFQUFFLENBQUNDLFVBQUosSUFBZ0IsQ0FBQ0QsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUFuQixDQUF0QyxDQUFQO0FBQXNGQyxPQUFHLEVBQUM7QUFBQ0MsZUFBUyxFQUFDQyxDQUFDLENBQUMsV0FBRCxDQUFaO0FBQTBCQyxlQUFTLEVBQUNELENBQUMsQ0FBQyxXQUFELENBQXJDO0FBQW1ERSxjQUFRLEVBQUMsa0JBQVN6SSxDQUFULEVBQVc7QUFBQyxlQUFPdUksQ0FBQyxDQUFDdkksQ0FBRCxFQUFHLFFBQUgsQ0FBUjtBQUFxQjtBQUE3RixLQUExRjtBQUF5TDBJLE9BQUcsRUFBQyxDQUFDLENBQUN2SyxRQUFRLENBQUN3SyxlQUFYLElBQTRCLENBQUMsQ0FBQ3hLLFFBQVEsQ0FBQ3dLLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXNELEtBQXRELEVBQTZEQyxhQUF4UjtBQUFzU0MsU0FBSyxFQUFDLFlBQVU7QUFBQyxVQUFHO0FBQUMsZUFBTSxDQUFDLEVBQUUsa0JBQWlCdkwsTUFBakIsSUFBeUJBLE1BQU0sQ0FBQ3dMLGFBQVAsSUFBc0IzSyxRQUFRLFlBQVkySyxhQUFyRSxDQUFQO0FBQTJGLE9BQS9GLENBQStGLE9BQU05SSxDQUFOLEVBQVE7QUFBQyxlQUFNLENBQUMsQ0FBUDtBQUFTO0FBQUMsS0FBN0g7QUFBNVMsR0FBdkUsQ0FBWDtBQUFBLE1BQWdnQm1JLEVBQWhnQjtBQUFBLE1BQW1nQkosQ0FBbmdCO0FBQUEsTUFBcWdCQyxDQUFyZ0I7O0FBQXVnQixXQUFTTyxDQUFULENBQVd2SSxDQUFYLEVBQWFuRCxDQUFiLEVBQWU7QUFBQyxRQUFJc0ksQ0FBQyxHQUFDbkYsQ0FBQyxDQUFDZ0csTUFBRixDQUFTLENBQVQsRUFBWUMsV0FBWixLQUEwQmpHLENBQUMsQ0FBQytJLE1BQUYsQ0FBUyxDQUFULENBQWhDO0FBQTRDLFdBQU8sVUFBUy9JLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSXNJLENBQVIsSUFBYW5GLENBQWIsRUFBZSxJQUFHLEtBQUssQ0FBTCxLQUFTK0gsQ0FBQyxDQUFDbkgsS0FBRixDQUFRWixDQUFDLENBQUNtRixDQUFELENBQVQsQ0FBWixFQUEwQixPQUFNLGFBQVd0SSxDQUFYLElBQWNtRCxDQUFDLENBQUNtRixDQUFELENBQXJCOztBQUF5QixhQUFNLENBQUMsQ0FBUDtBQUFTLEtBQXpGLENBQTBGLENBQUNuRixDQUFDLEdBQUMsR0FBRixHQUFNZ0ksQ0FBQyxDQUFDeEcsSUFBRixDQUFPMkQsQ0FBQyxHQUFDLEdBQVQsQ0FBTixHQUFvQkEsQ0FBckIsRUFBd0I4QyxLQUF4QixDQUE4QixHQUE5QixDQUExRixFQUE2SHBMLENBQTdILENBQVA7QUFBdUk7O0FBQUFpTCxTQUFPLENBQUNrQixpQkFBUixHQUEwQixZQUFVO0FBQUNsQixXQUFPLENBQUNtQixXQUFSLEdBQW9CbkIsT0FBTyxDQUFDZSxLQUFSLEtBQWdCakYsT0FBTyxDQUFDQyxZQUFSLElBQXNCRCxPQUFPLENBQUNFLE9BQTlCLElBQXVDRixPQUFPLENBQUNzQixRQUEvQyxJQUF5RHRCLE9BQU8sQ0FBQ3FCLFlBQWpFLElBQStFLENBQUMsbUJBQW1CaUUsSUFBbkIsQ0FBd0I3RSxTQUFTLENBQUM4RSxRQUFsQyxDQUFoRyxDQUFwQjtBQUFpSyxHQUF0TSxFQUF1TXJCLE9BQU8sQ0FBQ2tCLGlCQUFSLEVBQXZNOztBQUFtTyxNQUFJSSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxHQUFVO0FBQUMsV0FBTyxLQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQi9ELEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0I4RCxJQUF0QixDQUEyQjNDLFNBQTNCLENBQTNCLENBQVA7QUFBeUUsR0FBbkc7O0FBQW9HLFdBQVM0QyxNQUFULEdBQWlCO0FBQUMsV0FBTyxLQUFLSCxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQmhFLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsQ0FBUDtBQUEwRDs7QUFBQSxXQUFTNkMsVUFBVCxDQUFvQjVDLENBQXBCLEVBQXNCO0FBQUMsUUFBSUMsQ0FBQyxHQUFDO0FBQUM0QyxVQUFJLEVBQUM7QUFBTixLQUFOO0FBQXFCLFdBQU92RyxDQUFDLENBQUN3RyxJQUFGLENBQU9DLEtBQVAsRUFBYSxVQUFTNUosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQ3RJLENBQUMsQ0FBQ2tCLElBQUYsQ0FBTzhJLENBQVAsQ0FBTjtBQUFnQjFCLE9BQUMsS0FBRyxDQUFDMkIsQ0FBQyxHQUFDM0IsQ0FBSCxFQUFNdUUsSUFBTixHQUFXMUosQ0FBWCxFQUFhOEcsQ0FBQyxDQUFDeEssR0FBRixHQUFNdUssQ0FBdEIsQ0FBRDtBQUEwQixLQUFyRSxHQUF1RUMsQ0FBOUU7QUFBZ0Y7O0FBQUEsV0FBUytDLGVBQVQsQ0FBeUI3SixDQUF6QixFQUEyQjtBQUFDLFFBQUluRCxDQUFDLEdBQUMsQ0FBQ21ELENBQUMsSUFBRSxFQUFKLEVBQVE4SixPQUFSLENBQWdCLE9BQWhCLEVBQXdCLEVBQXhCLEVBQTRCL0UsS0FBNUIsQ0FBa0MsZ0JBQWxDLENBQU47QUFBMEQsV0FBT2xJLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLa04sV0FBTCxFQUFELEdBQW9CLElBQTVCO0FBQWlDOztBQUFBNUcsR0FBQyxDQUFDRSxNQUFGLENBQVMrRixVQUFVLENBQUM1RCxTQUFwQixFQUE4QjtBQUFDd0UsWUFBUSxFQUFDO0FBQUNDLGtCQUFZLEVBQUMsa0JBQWlCLElBQUlDLEtBQUo7QUFBL0IsS0FBVjtBQUFvRGIsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhc0ksQ0FBYixFQUFlO0FBQUMsV0FBS3BELEdBQUwsR0FBU29CLENBQUMsQ0FBQ25ELENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBVCxFQUFpQixLQUFLbUssZUFBTCxHQUFxQnROLENBQXRDLEVBQXdDLEtBQUt1TixhQUFMLEdBQW1CakYsQ0FBM0QsRUFBNkQsS0FBS2tGLFFBQUwsR0FBYyxDQUFDLENBQTVFLEVBQThFLEtBQUtDLE9BQUwsR0FBYW5ILENBQUMsQ0FBQ0UsTUFBRixDQUFTO0FBQUNrSCxjQUFNLEVBQUMsY0FBUjtBQUF1QkMseUJBQWlCLEVBQUM7QUFBekMsT0FBVCxFQUF1RDVELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBYyxFQUFyRSxDQUEzRixFQUFvSyxLQUFLb0QsUUFBTCxDQUFjQyxZQUFkLElBQTRCLGFBQVcsS0FBS0ssT0FBTCxDQUFhQyxNQUFwRCxHQUEyRCxLQUFLeEksR0FBTCxDQUFTMEksUUFBVCxJQUFtQixnQkFBY3RILENBQUMsQ0FBQ3VHLElBQUYsQ0FBTyxLQUFLM0gsR0FBTCxDQUFTa0ksWUFBaEIsQ0FBakMsR0FBK0RTLFVBQVUsQ0FBQ3ZILENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsWUFBRSxLQUFLNUksR0FBTCxDQUFTa0ksWUFBWCxHQUF3QixLQUFLVyxPQUFMLEVBQXhCLEdBQXVDLEtBQUtsTixLQUFMLEVBQXZDO0FBQW9ELE9BQXZFLEVBQXdFLElBQXhFLENBQUQsQ0FBekUsSUFBMEp5RixDQUFDLENBQUMsS0FBS3BCLEdBQU4sQ0FBRCxDQUFZNUIsSUFBWixDQUFpQixPQUFqQixFQUF5QmdELENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUNELGtCQUFVLENBQUN2SCxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLGVBQUtqTixLQUFMO0FBQWEsU0FBaEMsRUFBaUMsSUFBakMsQ0FBRCxDQUFWO0FBQW1ELE9BQXRFLEVBQXVFLElBQXZFLENBQXpCLEdBQXVHLEtBQUttTixTQUFMLEdBQWUsQ0FBQyxDQUFDLEdBQUQsRUFBSyxFQUFMLENBQUQsRUFBVSxDQUFDLEdBQUQsRUFBSyxFQUFMLENBQVYsRUFBbUIsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFuQixFQUE2QixDQUFDLEdBQUQsRUFBSyxHQUFMLENBQTdCLENBQXRILEVBQThKLEtBQUtDLEtBQUwsR0FBVyxDQUF6SyxFQUEySyxLQUFLQyxLQUFMLEdBQVcsQ0FBdEwsRUFBd0wsS0FBS0MsTUFBTCxHQUFZLEtBQUtILFNBQUwsQ0FBZSxLQUFLQyxLQUFwQixFQUEyQixDQUEzQixDQUFwTSxFQUFrTyxLQUFLRyxJQUFMLEVBQTVYLENBQTNELEdBQW9jUCxVQUFVLENBQUN2SCxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS08sUUFBYixFQUFzQixJQUF0QixDQUFELENBQWxuQjtBQUFncEIsS0FBL3RCO0FBQWd1QkQsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS0UsUUFBTCxHQUFjVCxVQUFVLENBQUN2SCxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLFlBQUcsSUFBRSxLQUFLNUksR0FBTCxDQUFTa0ksWUFBZCxFQUEyQixLQUFLVyxPQUFMLEdBQTNCLEtBQThDO0FBQUMsY0FBRyxLQUFLRyxLQUFMLElBQVksS0FBS0MsTUFBakIsRUFBd0IsS0FBS1YsT0FBTCxDQUFhRSxpQkFBYixJQUFnQyxLQUFLTyxLQUFMLElBQVksS0FBS1QsT0FBTCxDQUFhRSxpQkFBekQsSUFBNEUsQ0FBQyxLQUFLWSxpQkFBbEYsS0FBc0csS0FBS0EsaUJBQUwsR0FBdUIsQ0FBQyxDQUF4QixFQUEwQixLQUFLRixRQUFMLEVBQWhJLENBQXhCLEVBQXlLLEtBQUtILEtBQUwsR0FBVyxLQUFLRixTQUFMLENBQWUsS0FBS0MsS0FBcEIsRUFBMkIsQ0FBM0IsQ0FBdkwsRUFBcU47QUFBQyxnQkFBRyxDQUFDLEtBQUtELFNBQUwsQ0FBZSxLQUFLQyxLQUFMLEdBQVcsQ0FBMUIsQ0FBSixFQUFpQyxPQUFPLEtBQUssS0FBS3BOLEtBQUwsRUFBWjtBQUF5QixpQkFBS29OLEtBQUwsSUFBYSxLQUFLRSxNQUFMLEdBQVksS0FBS0gsU0FBTCxDQUFlLEtBQUtDLEtBQXBCLEVBQTJCLENBQTNCLENBQXpCO0FBQXVEOztBQUFBLGVBQUtHLElBQUw7QUFBWTtBQUFDLE9BQXRaLEVBQXVaLElBQXZaLENBQUQsRUFBOFosS0FBS0QsTUFBbmEsQ0FBeEI7QUFBbWMsS0FBbnJDO0FBQW9yQ0UsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBSWxMLENBQUMsR0FBQyxJQUFJa0ssS0FBSixFQUFOO0FBQWdCLE9BQUMsS0FBS21CLFlBQUwsR0FBa0JyTCxDQUFuQixFQUFzQjhDLE1BQXRCLEdBQTZCSyxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDM0ssU0FBQyxDQUFDOEMsTUFBRixHQUFTLFlBQVUsQ0FBRSxDQUFyQixFQUFzQixLQUFLa0gsUUFBTCxDQUFjQyxZQUFkLEtBQTZCLEtBQUtsSSxHQUFMLENBQVNrSSxZQUFULEdBQXNCakssQ0FBQyxDQUFDMkQsS0FBeEIsRUFBOEIsS0FBSzVCLEdBQUwsQ0FBU3VKLGFBQVQsR0FBdUJ0TCxDQUFDLENBQUNtRSxNQUFwRixDQUF0QixFQUFrSCxLQUFLeUcsT0FBTCxFQUFsSDtBQUFpSSxPQUFwSixFQUFxSixJQUFySixDQUE3QixFQUF3TDVLLENBQUMsQ0FBQ3VMLE9BQUYsR0FBVXBJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLak4sS0FBYixFQUFtQixJQUFuQixDQUFsTSxFQUEyTnNDLENBQUMsQ0FBQ3dMLEdBQUYsR0FBTSxLQUFLekosR0FBTCxDQUFTeUosR0FBMU87QUFBOE8sS0FBdDhDO0FBQXU4Q0MsU0FBSyxFQUFDLGlCQUFVO0FBQUMsV0FBS0osWUFBTCxLQUFvQixLQUFLQSxZQUFMLENBQWtCdkksTUFBbEIsR0FBeUIsWUFBVSxDQUFFLENBQXpELEdBQTJELEtBQUtxSSxRQUFMLEtBQWdCTyxZQUFZLENBQUMsS0FBS1AsUUFBTixDQUFaLEVBQTRCLEtBQUtBLFFBQUwsR0FBYyxJQUExRCxDQUEzRDtBQUEySCxLQUFubEQ7QUFBb2xEUCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLZSxjQUFMLEtBQXNCLEtBQUtBLGNBQUwsR0FBb0IsQ0FBQyxDQUFyQixFQUF1QixLQUFLdEIsUUFBTCxHQUFjLENBQUMsQ0FBdEMsRUFBd0MsS0FBS0YsZUFBTCxDQUFxQixJQUFyQixDQUE5RDtBQUEwRixLQUFqc0Q7QUFBa3NEek0sU0FBSyxFQUFDLGlCQUFVO0FBQUMsV0FBS2tPLFlBQUwsS0FBb0IsS0FBS0EsWUFBTCxHQUFrQixDQUFDLENBQW5CLEVBQXFCLEtBQUtILEtBQUwsRUFBckIsRUFBa0MsS0FBS3JCLGFBQUwsSUFBb0IsS0FBS0EsYUFBTCxDQUFtQixJQUFuQixDQUExRTtBQUFvRztBQUF2ekQsR0FBOUIsR0FBdzFEakgsQ0FBQyxDQUFDRSxNQUFGLENBQVNtRyxNQUFNLENBQUNoRSxTQUFoQixFQUEwQjtBQUFDNkQsY0FBVSxFQUFDLHNCQUFVO0FBQUMsV0FBS3dDLE9BQUwsR0FBYSxFQUFiO0FBQWdCLEtBQXZDO0FBQXdDQyxPQUFHLEVBQUMsYUFBUzlMLENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTtBQUFDLFdBQUswRyxPQUFMLENBQWE3TCxDQUFiLElBQWdCMEssVUFBVSxDQUFDN04sQ0FBRCxFQUFHc0ksQ0FBSCxDQUExQjtBQUFnQyxLQUE1RjtBQUE2RjdHLE9BQUcsRUFBQyxhQUFTMEIsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLNkwsT0FBTCxDQUFhN0wsQ0FBYixDQUFQO0FBQXVCLEtBQXBJO0FBQXFJK0wsU0FBSyxFQUFDLGVBQVMvTCxDQUFULEVBQVc7QUFBQ0EsT0FBQyxHQUFDLEtBQUs2TCxPQUFMLENBQWE3TCxDQUFiLE1BQWtCMEwsWUFBWSxDQUFDLEtBQUtHLE9BQUwsQ0FBYTdMLENBQWIsQ0FBRCxDQUFaLEVBQThCLE9BQU8sS0FBSzZMLE9BQUwsQ0FBYTdMLENBQWIsQ0FBdkQsQ0FBRCxHQUF5RSxLQUFLZ00sUUFBTCxFQUExRTtBQUEwRixLQUFqUDtBQUFrUEEsWUFBUSxFQUFDLG9CQUFVO0FBQUM3SSxPQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBS2tDLE9BQVosRUFBb0IsVUFBUzdMLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDNk8sb0JBQVksQ0FBQzdPLENBQUQsQ0FBWjtBQUFnQixPQUFsRCxHQUFvRCxLQUFLZ1AsT0FBTCxHQUFhLEVBQWpFO0FBQW9FO0FBQTFVLEdBQTFCLENBQXgxRDs7QUFBK3JFLE1BQUlJLElBQUksR0FBQztBQUFDQyxXQUFPLEVBQUMsaUJBQVNsTSxDQUFULEVBQVc7QUFBQyxhQUFNLG9CQUFvQmtKLElBQXBCLENBQXlCbEosQ0FBekIsQ0FBTjtBQUFrQztBQUF2RCxHQUFUO0FBQUEsTUFBa0U0SixLQUFLLEdBQUM7QUFBQ3VDLFNBQUssRUFBQztBQUFDQyxnQkFBVSxFQUFDLDJCQUFaO0FBQXdDQyxZQUFNLEVBQUMsZ0JBQVNyTSxDQUFULEVBQVc7QUFBQyxlQUFNLENBQUMsQ0FBRCxHQUFHbUQsQ0FBQyxDQUFDbUosT0FBRixDQUFVekMsZUFBZSxDQUFDN0osQ0FBRCxDQUF6QixFQUE2QixLQUFLb00sVUFBTCxDQUFnQm5FLEtBQWhCLENBQXNCLEdBQXRCLENBQTdCLENBQVQ7QUFBa0UsT0FBN0g7QUFBOEhsSyxVQUFJLEVBQUMsY0FBU2lDLENBQVQsRUFBVztBQUFDLGVBQU0sQ0FBQyxDQUFDLEtBQUtxTSxNQUFMLEVBQUYsSUFBaUI7QUFBQ0UsbUJBQVMsRUFBQzFDLGVBQWUsQ0FBQzdKLENBQUQ7QUFBMUIsU0FBdkI7QUFBc0Q7QUFBck0sS0FBUDtBQUE4TXdNLFNBQUssRUFBQztBQUFDSCxZQUFNLEVBQUMsZ0JBQVNyTSxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLDJDQUEyQ3dJLElBQTNDLENBQWdEckYsQ0FBaEQsQ0FBTjtBQUF5RCxlQUFNLEVBQUUsQ0FBQ25ELENBQUQsSUFBSSxDQUFDQSxDQUFDLENBQUMsQ0FBRCxDQUFSLEtBQWNBLENBQUMsQ0FBQyxDQUFELENBQXJCO0FBQXlCLE9BQXRHO0FBQXVHa0IsVUFBSSxFQUFDLGNBQVNpQyxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLEtBQUt3UCxNQUFMLENBQVlyTSxDQUFaLENBQU47QUFBcUIsZUFBTSxDQUFDLENBQUNuRCxDQUFGLElBQUs7QUFBQzRQLFlBQUUsRUFBQzVQO0FBQUosU0FBWDtBQUFrQjtBQUEvSixLQUFwTjtBQUFxWDZQLFdBQU8sRUFBQztBQUFDTCxZQUFNLEVBQUMsZ0JBQVNyTSxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLHVFQUF1RXdJLElBQXZFLENBQTRFckYsQ0FBNUUsQ0FBTjtBQUFxRixlQUFPbkQsQ0FBQyxJQUFFQSxDQUFDLENBQUMsQ0FBRCxDQUFKLEdBQVFBLENBQUMsQ0FBQyxDQUFELENBQVQsR0FBYSxFQUFFLEVBQUVBLENBQUMsR0FBQywyRUFBMkV3SSxJQUEzRSxDQUFnRnJGLENBQWhGLENBQUosS0FBeUYsQ0FBQ25ELENBQUMsQ0FBQyxDQUFELENBQTdGLEtBQW1HQSxDQUFDLENBQUMsQ0FBRCxDQUF4SDtBQUE0SCxPQUFyTztBQUFzT2tCLFVBQUksRUFBQyxjQUFTaUMsQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQyxLQUFLd1AsTUFBTCxDQUFZck0sQ0FBWixDQUFOO0FBQXFCLGVBQU0sQ0FBQyxDQUFDbkQsQ0FBRixJQUFLO0FBQUM0UCxZQUFFLEVBQUM1UDtBQUFKLFNBQVg7QUFBa0I7QUFBOVI7QUFBN1gsR0FBeEU7QUFBQSxNQUFzdUI4UCxjQUFjLEdBQUMsWUFBVTtBQUFDLGFBQVMzTSxDQUFULEdBQVk7QUFBQyxhQUFPLEtBQUtxSixVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQmhFLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsQ0FBUDtBQUEwRDs7QUFBQXpELEtBQUMsQ0FBQ0UsTUFBRixDQUFTckQsQ0FBQyxDQUFDd0YsU0FBWCxFQUFxQjtBQUFDNkQsZ0JBQVUsRUFBQyxvQkFBU3JKLENBQVQsRUFBV25ELENBQVgsRUFBYXNJLENBQWIsRUFBZTtBQUFDLGFBQUs3SSxHQUFMLEdBQVMwRCxDQUFULEVBQVcsS0FBS21LLGVBQUwsR0FBcUJ0TixDQUFoQyxFQUFrQyxLQUFLdU4sYUFBTCxHQUFtQmpGLENBQXJELEVBQXVELEtBQUt5SCxJQUFMLEVBQXZEO0FBQW1FLE9BQS9GO0FBQWdHQSxVQUFJLEVBQUMsZ0JBQVU7QUFBQyxZQUFJNU0sQ0FBQyxHQUFDNkcsQ0FBQyxDQUFDdkksR0FBRixDQUFNLEtBQUtoQyxHQUFYLENBQU47QUFBc0IsWUFBRzBELENBQUgsRUFBSyxPQUFPLEtBQUttSyxlQUFMLENBQXFCbkssQ0FBQyxDQUFDakMsSUFBRixDQUFPekIsR0FBNUIsQ0FBUDtBQUF3QyxZQUFJTyxDQUFDLEdBQUMsVUFBUVMsTUFBTSxDQUFDQyxRQUFQLElBQWlCLGFBQVdELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnNQLFFBQTVDLEdBQXFELEdBQXJELEdBQXlELEVBQWpFLElBQXFFLEdBQTNFO0FBQUEsWUFBK0UxSCxDQUFDLEdBQUNzRSxVQUFVLENBQUMsS0FBS25OLEdBQU4sQ0FBVixDQUFxQm1RLEVBQXRHO0FBQXlHLGFBQUtLLElBQUwsR0FBVTNKLENBQUMsQ0FBQzRKLE9BQUYsQ0FBVWxRLENBQUMsR0FBQyxrQ0FBRixHQUFxQ0EsQ0FBckMsR0FBdUMsY0FBdkMsR0FBc0RzSSxDQUF0RCxHQUF3RCxhQUFsRSxFQUFnRmhDLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsY0FBR0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNnTixhQUFSLEVBQXNCO0FBQUMsZ0JBQUluUSxDQUFDLEdBQUM7QUFBQ1AsaUJBQUcsRUFBQzBELENBQUMsQ0FBQ2dOO0FBQVAsYUFBTjtBQUE0Qm5HLGFBQUMsQ0FBQ2lGLEdBQUYsQ0FBTSxLQUFLeFAsR0FBWCxFQUFlTyxDQUFmLEdBQWtCLEtBQUtzTixlQUFMLENBQXFCdE4sQ0FBQyxDQUFDUCxHQUF2QixDQUFsQjtBQUE4QyxXQUFqRyxNQUFzRyxLQUFLOE4sYUFBTDtBQUFxQixTQUEvSSxFQUFnSixJQUFoSixDQUFoRixDQUFWO0FBQWlQLE9BQTdnQjtBQUE4Z0JxQixXQUFLLEVBQUMsaUJBQVU7QUFBQyxhQUFLcUIsSUFBTCxLQUFZLEtBQUtBLElBQUwsQ0FBVXJCLEtBQVYsSUFBa0IsS0FBS3FCLElBQUwsR0FBVSxJQUF4QztBQUE4QztBQUE3a0IsS0FBckI7QUFBcW1CLFFBQUlqRyxDQUFDLEdBQUM7QUFBQ29HLFdBQUssRUFBQyxFQUFQO0FBQVUzTyxTQUFHLEVBQUMsYUFBUzBCLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSW5ELENBQUMsR0FBQyxJQUFOLEVBQVdzSSxDQUFDLEdBQUMsQ0FBakIsRUFBbUJBLENBQUMsR0FBQyxLQUFLOEgsS0FBTCxDQUFXNU8sTUFBaEMsRUFBdUM4RyxDQUFDLEVBQXhDLEVBQTJDLEtBQUs4SCxLQUFMLENBQVc5SCxDQUFYLEtBQWUsS0FBSzhILEtBQUwsQ0FBVzlILENBQVgsRUFBYzdJLEdBQWQsS0FBb0IwRCxDQUFuQyxLQUF1Q25ELENBQUMsR0FBQyxLQUFLb1EsS0FBTCxDQUFXOUgsQ0FBWCxDQUF6Qzs7QUFBd0QsZUFBT3RJLENBQVA7QUFBUyxPQUF0STtBQUF1SWlQLFNBQUcsRUFBQyxhQUFTOUwsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS2UsTUFBTCxDQUFZb0MsQ0FBWixHQUFlLEtBQUtpTixLQUFMLENBQVdDLElBQVgsQ0FBZ0I7QUFBQzVRLGFBQUcsRUFBQzBELENBQUw7QUFBT2pDLGNBQUksRUFBQ2xCO0FBQVosU0FBaEIsQ0FBZjtBQUErQyxPQUF4TTtBQUF5TWUsWUFBTSxFQUFDLGdCQUFTb0MsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJbkQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtvUSxLQUFMLENBQVc1TyxNQUF6QixFQUFnQ3hCLENBQUMsRUFBakMsRUFBb0MsS0FBS29RLEtBQUwsQ0FBV3BRLENBQVgsS0FBZSxLQUFLb1EsS0FBTCxDQUFXcFEsQ0FBWCxFQUFjUCxHQUFkLEtBQW9CMEQsQ0FBbkMsSUFBc0MsT0FBTyxLQUFLaU4sS0FBTCxDQUFXcFEsQ0FBWCxDQUE3QztBQUEyRDtBQUEzVCxLQUFOO0FBQW1VLFdBQU9tRCxDQUFQO0FBQVMsR0FBbmdDLEVBQXJ2QjtBQUFBLE1BQTJ2RG1OLFVBQVUsR0FBQyxZQUFVO0FBQUMsYUFBU25OLENBQVQsR0FBWTtBQUFDLGFBQU8sS0FBS3FKLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLElBQXRCLEVBQTJCaEUsTUFBTSxDQUFDaUUsSUFBUCxDQUFZM0MsU0FBWixDQUEzQixDQUFQO0FBQTBEOztBQUFBekQsS0FBQyxDQUFDRSxNQUFGLENBQVNyRCxDQUFDLENBQUN3RixTQUFYLEVBQXFCO0FBQUM2RCxnQkFBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS1AsR0FBTCxHQUFTMEQsQ0FBVCxFQUFXLEtBQUtvTixRQUFMLEdBQWN2USxDQUF6QixFQUEyQixLQUFLK1AsSUFBTCxFQUEzQjtBQUF1QyxPQUFqRTtBQUFrRUEsVUFBSSxFQUFDLGdCQUFVO0FBQUMsWUFBSTVNLENBQUMsR0FBQzZHLENBQUMsQ0FBQ3ZJLEdBQUYsQ0FBTSxLQUFLaEMsR0FBWCxDQUFOO0FBQXNCLFlBQUcwRCxDQUFILEVBQUssT0FBTyxLQUFLb04sUUFBTCxDQUFjcE4sQ0FBQyxDQUFDakMsSUFBaEIsQ0FBUDtBQUE2QixZQUFJbEIsQ0FBQyxHQUFDLFVBQVFTLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixhQUFXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JzUCxRQUE1QyxHQUFxRCxHQUFyRCxHQUF5RCxFQUFqRSxJQUFxRSxHQUEzRTtBQUFBLFlBQStFMUgsQ0FBQyxHQUFDc0UsVUFBVSxDQUFDLEtBQUtuTixHQUFOLENBQVYsQ0FBcUJtUSxFQUF0RztBQUF5RyxhQUFLSyxJQUFMLEdBQVUzSixDQUFDLENBQUM0SixPQUFGLENBQVVsUSxDQUFDLEdBQUMsa0NBQUYsR0FBcUNBLENBQXJDLEdBQXVDLGNBQXZDLEdBQXNEc0ksQ0FBdEQsR0FBd0QsZ0RBQWxFLEVBQW1IaEMsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxjQUFJbkQsQ0FBQyxHQUFDO0FBQUN3USxzQkFBVSxFQUFDO0FBQUMxSixtQkFBSyxFQUFDM0QsQ0FBQyxDQUFDMkQsS0FBVDtBQUFlUSxvQkFBTSxFQUFDbkUsQ0FBQyxDQUFDbUU7QUFBeEI7QUFBWixXQUFOO0FBQW1EMEMsV0FBQyxDQUFDaUYsR0FBRixDQUFNLEtBQUt4UCxHQUFYLEVBQWVPLENBQWYsR0FBa0IsS0FBS3VRLFFBQUwsSUFBZSxLQUFLQSxRQUFMLENBQWN2USxDQUFkLENBQWpDO0FBQWtELFNBQXpILEVBQTBILElBQTFILENBQW5ILENBQVY7QUFBOFAsT0FBamY7QUFBa2Y0TyxXQUFLLEVBQUMsaUJBQVU7QUFBQyxhQUFLcUIsSUFBTCxLQUFZLEtBQUtBLElBQUwsQ0FBVXJCLEtBQVYsSUFBa0IsS0FBS3FCLElBQUwsR0FBVSxJQUF4QztBQUE4QztBQUFqakIsS0FBckI7QUFBeWtCLFFBQUlqRyxDQUFDLEdBQUM7QUFBQ29HLFdBQUssRUFBQyxFQUFQO0FBQVUzTyxTQUFHLEVBQUMsYUFBUzBCLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSW5ELENBQUMsR0FBQyxJQUFOLEVBQVdzSSxDQUFDLEdBQUMsQ0FBakIsRUFBbUJBLENBQUMsR0FBQyxLQUFLOEgsS0FBTCxDQUFXNU8sTUFBaEMsRUFBdUM4RyxDQUFDLEVBQXhDLEVBQTJDLEtBQUs4SCxLQUFMLENBQVc5SCxDQUFYLEtBQWUsS0FBSzhILEtBQUwsQ0FBVzlILENBQVgsRUFBYzdJLEdBQWQsS0FBb0IwRCxDQUFuQyxLQUF1Q25ELENBQUMsR0FBQyxLQUFLb1EsS0FBTCxDQUFXOUgsQ0FBWCxDQUF6Qzs7QUFBd0QsZUFBT3RJLENBQVA7QUFBUyxPQUF0STtBQUF1SWlQLFNBQUcsRUFBQyxhQUFTOUwsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS2UsTUFBTCxDQUFZb0MsQ0FBWixHQUFlLEtBQUtpTixLQUFMLENBQVdDLElBQVgsQ0FBZ0I7QUFBQzVRLGFBQUcsRUFBQzBELENBQUw7QUFBT2pDLGNBQUksRUFBQ2xCO0FBQVosU0FBaEIsQ0FBZjtBQUErQyxPQUF4TTtBQUF5TWUsWUFBTSxFQUFDLGdCQUFTb0MsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJbkQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtvUSxLQUFMLENBQVc1TyxNQUF6QixFQUFnQ3hCLENBQUMsRUFBakMsRUFBb0MsS0FBS29RLEtBQUwsQ0FBV3BRLENBQVgsS0FBZSxLQUFLb1EsS0FBTCxDQUFXcFEsQ0FBWCxFQUFjUCxHQUFkLEtBQW9CMEQsQ0FBbkMsSUFBc0MsT0FBTyxLQUFLaU4sS0FBTCxDQUFXcFEsQ0FBWCxDQUE3QztBQUEyRDtBQUEzVCxLQUFOO0FBQW1VLFdBQU9tRCxDQUFQO0FBQVMsR0FBditCLEVBQXR3RDtBQUFBLE1BQWd2RnNOLE9BQU8sR0FBQztBQUFDQyxZQUFRLEVBQUM7QUFBQ0MsYUFBTyxFQUFDO0FBQUNDLGVBQU8sRUFBQztBQUFDQyxjQUFJLEVBQUMsQ0FBTjtBQUFRQyxjQUFJLEVBQUM7QUFBYixTQUFUO0FBQXlCQyxlQUFPLEVBQUM7QUFBQ0YsY0FBSSxFQUFDLEdBQU47QUFBVUMsY0FBSSxFQUFDO0FBQWYsU0FBakM7QUFBcURyUSxjQUFNLEVBQUM7QUFBQ29RLGNBQUksRUFBQyxHQUFOO0FBQVVDLGNBQUksRUFBQztBQUFmLFNBQTVEO0FBQWdGRSxpQkFBUyxFQUFDO0FBQUNILGNBQUksRUFBQyxHQUFOO0FBQVVJLGVBQUssRUFBQztBQUFoQixTQUExRjtBQUErR0Msa0JBQVUsRUFBQztBQUFDQyxlQUFLLEVBQUM7QUFBUDtBQUExSCxPQUFUO0FBQThJQyxjQUFRLEVBQUM7QUFBQ0MsWUFBSSxFQUFDLENBQUMsQ0FBUDtBQUFTQyxhQUFLLEVBQUMsQ0FBQyxDQUFoQjtBQUFrQkMsV0FBRyxFQUFDLENBQUM7QUFBdkIsT0FBdko7QUFBaUxDLGtCQUFZLEVBQUMsY0FBOUw7QUFBNk1DLFVBQUksRUFBQyxDQUFDLENBQW5OO0FBQXFOQyxhQUFPLEVBQUMsZUFBN047QUFBNk9DLGNBQVEsRUFBQyxDQUFDLENBQXZQO0FBQXlQL1AsYUFBTyxFQUFDO0FBQUNnUSxhQUFLLEVBQUMsQ0FBQztBQUFSLE9BQWpRO0FBQTRRQyxhQUFPLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFwUjtBQUEwUkMsY0FBUSxFQUFDLENBQUMsQ0FBcFM7QUFBc1NDLFVBQUksRUFBQyxRQUEzUztBQUFvVGhCLGFBQU8sRUFBQyxDQUFDLENBQTdUO0FBQStUaUIsa0JBQVksRUFBQyxHQUE1VTtBQUFnVkMsVUFBSSxFQUFDLENBQUMsQ0FBdFY7QUFBd1ZmLGdCQUFVLEVBQUMsWUFBblc7QUFBZ1hnQixRQUFFLEVBQUMsU0FBblg7QUFBNlhDLGFBQU8sRUFBQyxHQUFyWTtBQUF5WXhDLFdBQUssRUFBQztBQUFDeUMsZ0JBQVEsRUFBQyxDQUFWO0FBQVlDLFdBQUcsRUFBQyxDQUFoQjtBQUFrQkMsYUFBSyxFQUFDLENBQXhCO0FBQTBCQyxjQUFNLEVBQUMsQ0FBakM7QUFBbUNDLGdCQUFRLEVBQUMsQ0FBNUM7QUFBOENmLFlBQUksRUFBQztBQUFuRCxPQUEvWTtBQUFxYzVCLGFBQU8sRUFBQztBQUFDdUMsZ0JBQVEsRUFBQyxDQUFWO0FBQVlLLGdCQUFRLEVBQUMsQ0FBckI7QUFBdUJDLG1CQUFXLEVBQUMsQ0FBbkM7QUFBcUNDLFVBQUUsRUFBQyxDQUF4QztBQUEwQ0Msc0JBQWMsRUFBQyxDQUF6RDtBQUEyRG5CLFlBQUksRUFBQyxDQUFoRTtBQUFrRW9CLHNCQUFjLEVBQUMsQ0FBakY7QUFBbUZDLFdBQUcsRUFBQyxDQUF2RjtBQUF5RkMsVUFBRSxFQUFDO0FBQTVGLE9BQTdjO0FBQW1qQkMsd0JBQWtCLEVBQUM7QUFBQzFELGFBQUssRUFBQyxFQUFQO0FBQVVLLGFBQUssRUFBQztBQUFDN0ksZUFBSyxFQUFDO0FBQVAsU0FBaEI7QUFBNkIrSSxlQUFPLEVBQUM7QUFBQy9JLGVBQUssRUFBQyxJQUFQO0FBQVlRLGdCQUFNLEVBQUM7QUFBbkI7QUFBckM7QUFBdGtCLEtBQVY7QUFBK29CMkwsVUFBTSxFQUFDLGdCQUFTOVAsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhc0ksQ0FBYixFQUFlO0FBQUNBLE9BQUMsR0FBQ0EsQ0FBQyxJQUFFLEVBQUwsRUFBUSxDQUFDbkYsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBTixFQUFVNE8sSUFBVixHQUFlNU8sQ0FBQyxDQUFDNE8sSUFBRixJQUFRLEtBQUtyQixRQUFMLENBQWNxQixJQUE3QztBQUFrRCxVQUFJL0gsQ0FBQyxHQUFDN0csQ0FBQyxDQUFDNE8sSUFBRixHQUFPekwsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZRCxNQUFNLENBQUNHLEtBQVAsQ0FBYXZELENBQUMsQ0FBQzRPLElBQWYsS0FBc0J4TCxNQUFNLENBQUNHLEtBQVAsQ0FBYSxLQUFLZ0ssUUFBTCxDQUFjcUIsSUFBM0IsQ0FBbEMsQ0FBUCxHQUEyRSxFQUFqRjtBQUFBLFVBQW9GOUgsQ0FBQyxHQUFDM0QsQ0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBWixFQUFlLEtBQUtrSyxRQUFwQixFQUE2QjFHLENBQTdCLENBQXRGO0FBQXNIQyxPQUFDLENBQUMrSSxrQkFBRixLQUF1QmhULENBQUMsSUFBRWlLLENBQUMsQ0FBQytJLGtCQUFGLENBQXFCaFQsQ0FBckIsQ0FBSCxLQUE2QmlLLENBQUMsR0FBQzNELENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQUMsQ0FBVixFQUFZLEVBQVosRUFBZXlELENBQUMsQ0FBQytJLGtCQUFGLENBQXFCaFQsQ0FBckIsQ0FBZixFQUF1Q2lLLENBQXZDLENBQS9CLEdBQTBFLE9BQU9BLENBQUMsQ0FBQytJLGtCQUExRztBQUE4SCxVQUFJOUksQ0FBQyxHQUFDNUQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBWixFQUFleUQsQ0FBZixFQUFpQjlHLENBQWpCLENBQU47O0FBQTBCLFVBQUc4SCxPQUFPLENBQUNtQixXQUFSLElBQXFCLGFBQVdsQyxDQUFDLENBQUNnSSxFQUFsQyxLQUF1Q2hJLENBQUMsQ0FBQ2dJLEVBQUYsR0FBSyxTQUE1QyxHQUF1RCxDQUFDLENBQUNoSSxDQUFDLENBQUN5RyxPQUFILElBQVk1SixPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBcEMsTUFBeUN3QyxDQUFDLENBQUN5RyxPQUFGLEdBQVUsRUFBVixFQUFhckssQ0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUs0RCxRQUFMLENBQWNDLE9BQXJCLEVBQTZCLFVBQVMzUSxDQUFULEVBQVdtRCxDQUFYLEVBQWE7QUFBQ21ELFNBQUMsQ0FBQ3dHLElBQUYsQ0FBTzVDLENBQUMsQ0FBQ3lHLE9BQUYsQ0FBVTNRLENBQVYsSUFBYXNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXJELENBQVosQ0FBcEIsRUFBbUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMrRyxXQUFDLENBQUN5RyxPQUFGLENBQVUzUSxDQUFWLEVBQWFtRCxDQUFiLElBQWdCLENBQWhCO0FBQWtCLFNBQWpFO0FBQW1FLE9BQTlHLENBQWIsRUFBNkgrRyxDQUFDLENBQUM2RyxPQUFGLEdBQVUsQ0FBQyxDQUFqTCxDQUF2RCxFQUEyTzdHLENBQUMsQ0FBQ2tILFFBQUYsS0FBYSxjQUFZOUssQ0FBQyxDQUFDdUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDa0gsUUFBVCxDQUFaLEtBQWlDbEgsQ0FBQyxDQUFDa0gsUUFBRixHQUFXLEVBQVgsRUFBYzlLLENBQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLNEQsUUFBTCxDQUFjVSxRQUFyQixFQUE4QixVQUFTak8sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrSyxTQUFDLENBQUNrSCxRQUFGLENBQVdqTyxDQUFYLElBQWMsQ0FBQyxDQUFmO0FBQWlCLE9BQTdELENBQS9DLEdBQStHLFlBQVVuRCxDQUFWLElBQWEsY0FBWUEsQ0FBekIsSUFBNEJzRyxDQUFDLENBQUNFLE1BQUYsQ0FBUzBELENBQUMsQ0FBQ2tILFFBQVgsRUFBb0I7QUFBQ0MsWUFBSSxFQUFDLENBQUMsQ0FBUDtBQUFTQyxhQUFLLEVBQUMsQ0FBQztBQUFoQixPQUFwQixDQUF4SixDQUEzTyxFQUE0YSxDQUFDcEgsQ0FBQyxDQUFDeUgsUUFBSCxJQUFhMUcsT0FBTyxDQUFDbUIsV0FBckIsR0FBaUNsQyxDQUFDLENBQUN5SCxRQUFGLEdBQVc7QUFBQ3VCLFNBQUMsRUFBQyxDQUFDLENBQUo7QUFBTUMsU0FBQyxFQUFDLENBQUM7QUFBVCxPQUE1QyxHQUF3RCxjQUFZN00sQ0FBQyxDQUFDdUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDeUgsUUFBVCxDQUFaLEtBQWlDekgsQ0FBQyxDQUFDeUgsUUFBRixHQUFXO0FBQUN1QixTQUFDLEVBQUMsQ0FBQyxDQUFKO0FBQU1DLFNBQUMsRUFBQyxDQUFDO0FBQVQsT0FBNUMsQ0FBcGUsRUFBNmhCLFlBQVVuVCxDQUFWLElBQWEsY0FBWUEsQ0FBekIsS0FBNkJrSyxDQUFDLENBQUNrSixPQUFGLEdBQVUsQ0FBQyxDQUF4QyxDQUE3aEIsRUFBd2tCLENBQUNyTSxPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBdkIsSUFBMEJ1RCxPQUFPLENBQUNtQixXQUFuQyxNQUFrRGxDLENBQUMsQ0FBQzhHLFNBQUYsR0FBWSxDQUFDLENBQWIsRUFBZTlHLENBQUMsQ0FBQ2dILFVBQUYsR0FBYSxDQUFDLENBQS9FLENBQXhrQixFQUEwcEIsY0FBWWxSLENBQVosS0FBZ0JrSyxDQUFDLENBQUNwRCxLQUFGLElBQVMsQ0FBQ29ELENBQUMsQ0FBQ21KLFFBQVosS0FBdUJuSixDQUFDLENBQUNtSixRQUFGLEdBQVduSixDQUFDLENBQUNwRCxLQUFwQyxHQUEyQ29ELENBQUMsQ0FBQzVDLE1BQUYsSUFBVSxDQUFDNEMsQ0FBQyxDQUFDb0osU0FBYixLQUF5QnBKLENBQUMsQ0FBQ29KLFNBQUYsR0FBWXBKLENBQUMsQ0FBQzVDLE1BQXZDLENBQTNELENBQTFwQixFQUFxd0IsQ0FBQzRDLENBQUMsQ0FBQzhHLFNBQUgsSUFBYyxjQUFZMUssQ0FBQyxDQUFDdUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDOEcsU0FBVCxDQUFseUIsRUFBc3pCO0FBQUMsWUFBSTdHLENBQUMsR0FBQyxDQUFDLENBQVA7O0FBQVMsZ0JBQU9uSyxDQUFQO0FBQVUsZUFBSSxTQUFKO0FBQWNtSyxhQUFDLEdBQUMsVUFBUTFKLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixhQUFXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JzUCxRQUE1QyxHQUFxRCxHQUFyRCxHQUF5RCxFQUFqRSxJQUFxRSxHQUFyRSxHQUF5RSx1QkFBekUsR0FBaUcxSCxDQUFDLENBQUNzSCxFQUFuRyxHQUFzRyxRQUF4RztBQUFpSDs7QUFBTSxlQUFJLE9BQUo7QUFBWSxlQUFJLE9BQUo7QUFBWXpGLGFBQUMsR0FBQyxDQUFDLENBQUg7QUFBdks7O0FBQTRLRCxTQUFDLENBQUM4RyxTQUFGLEdBQVk3RyxDQUFaO0FBQWM7O0FBQUEsYUFBT0QsQ0FBUDtBQUFTO0FBQXorRCxHQUF4dkY7QUFBQSxNQUFtdUpxSixPQUFPLEdBQUM7QUFBQy9HLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSCxLQUFMLElBQWEsS0FBS0MsT0FBTCxHQUFhLENBQUMsQ0FBM0I7QUFBNkIsS0FBcEQ7QUFBcURELFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtuVSxPQUFMLEdBQWFpSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLFlBQXBCLEVBQWtDNUMsSUFBbEMsR0FBeUMxUSxNQUF6QyxDQUFnRGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsdUJBQXBCLENBQWhELENBQWIsRUFBMkcsS0FBS3JVLE9BQUwsQ0FBYWdLLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0IvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLFlBQUkzSyxDQUFDLEdBQUN3USxLQUFLLENBQUNDLElBQVo7QUFBaUJ6USxTQUFDLElBQUVBLENBQUMsQ0FBQzBRLElBQUwsSUFBVzFRLENBQUMsQ0FBQzBRLElBQUYsQ0FBT3BHLE9BQVAsQ0FBZTdMLE9BQTFCLElBQW1DLENBQUN1QixDQUFDLENBQUMwUSxJQUFGLENBQU9wRyxPQUFQLENBQWU3TCxPQUFmLENBQXVCZ1EsS0FBM0QsSUFBa0VrQyxNQUFNLENBQUNoRCxJQUFQLEVBQWxFO0FBQWdGLE9BQXBILEVBQXFILElBQXJILENBQXhCLENBQTNHLEVBQStQN0YsT0FBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLL00sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixpQkFBdEIsQ0FBcFIsRUFBNlQsS0FBS3JVLE9BQUwsQ0FBYWdLLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQW9DLFVBQVNsRyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDbEQsY0FBRjtBQUFtQixPQUFuRSxDQUE3VDtBQUFrWSxLQUF4YztBQUF5YzhULFdBQU8sRUFBQyxpQkFBUzVRLENBQVQsRUFBVztBQUFDLFdBQUs0TyxJQUFMLElBQVcsS0FBSzFTLE9BQUwsQ0FBYTJVLFdBQWIsQ0FBeUIscUJBQW1CLEtBQUtqQyxJQUFqRCxDQUFYLEVBQWtFLEtBQUsxUyxPQUFMLENBQWFxVSxRQUFiLENBQXNCLHFCQUFtQnZRLENBQXpDLENBQWxFLEVBQThHLEtBQUs0TyxJQUFMLEdBQVU1TyxDQUF4SDtBQUEwSCxLQUF2bEI7QUFBd2xCOFEsVUFBTSxFQUFDLGtCQUFVO0FBQUMzTixPQUFDLENBQUNoRixRQUFRLENBQUM0UyxJQUFWLENBQUQsQ0FBaUI5VCxNQUFqQixDQUF3QixLQUFLZixPQUE3QjtBQUFzQyxLQUFocEI7QUFBaXBCOFUsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBSzlVLE9BQUwsQ0FBYThVLE1BQWI7QUFBc0IsS0FBenJCO0FBQTByQnRELFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLeVQsT0FBUixFQUFnQnRRLENBQUMsSUFBRUEsQ0FBQyxFQUFKLENBQWhCLEtBQTJCO0FBQUMsYUFBS3NRLE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS1EsTUFBTCxFQUFoQixFQUE4QixLQUFLeEosR0FBTCxFQUE5QjtBQUF5QyxZQUFJbkMsQ0FBQyxHQUFDcUwsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ2xRLE1BQWhDLENBQXVDb1EsSUFBbkQsSUFBeUQsQ0FBL0Q7QUFBQSxZQUFpRTdHLENBQUMsR0FBQyxDQUFDLGFBQVcxRCxDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCc0ksQ0FBeEIsS0FBNEIsQ0FBL0Y7QUFBaUcsYUFBS2pKLE9BQUwsQ0FBYStVLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkJySyxDQUE3QixFQUErQixDQUEvQixFQUFpQzdHLENBQWpDO0FBQW9DO0FBQUMsS0FBeDVCO0FBQXk1QjJOLFFBQUksRUFBQyxjQUFTM04sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLeVQsT0FBUixFQUFnQjtBQUFDLFlBQUluTCxDQUFDLEdBQUNxTCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDbFEsTUFBaEMsQ0FBdUNxUSxJQUFuRCxJQUF5RCxDQUEvRDtBQUFBLFlBQWlFOUcsQ0FBQyxHQUFDLENBQUMsYUFBVzFELENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUJzSSxDQUF4QixLQUE0QixDQUEvRjtBQUFpRyxhQUFLakosT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCRSxPQUF0QixDQUE4QnRLLENBQUMsSUFBRSxDQUFqQyxFQUFtQzFELENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3FHLE1BQUwsSUFBYyxLQUFLVixPQUFMLEdBQWEsQ0FBQyxDQUE1QixFQUE4QnRRLENBQUMsSUFBRUEsQ0FBQyxFQUFsQztBQUFxQyxTQUF4RCxFQUF5RCxJQUF6RCxDQUFuQztBQUFtRyxPQUFyTixNQUEwTkEsQ0FBQyxJQUFFQSxDQUFDLEVBQUo7QUFBTyxLQUE3b0M7QUFBOG9Db1IsdUJBQW1CLEVBQUMsK0JBQVU7QUFBQyxVQUFJdEssQ0FBQyxHQUFDLEVBQU47QUFBUyxhQUFPM0QsQ0FBQyxDQUFDd0csSUFBRixDQUFPLENBQUMsT0FBRCxFQUFTLFFBQVQsQ0FBUCxFQUEwQixVQUFTM0osQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsWUFBSXNJLENBQUMsR0FBQ3RJLENBQUMsQ0FBQ2tNLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFjOUMsV0FBZCxLQUE0QnBKLENBQUMsQ0FBQ2tNLE1BQUYsQ0FBUyxDQUFULENBQWxDO0FBQUEsWUFBOENsQyxDQUFDLEdBQUMxSSxRQUFRLENBQUM2RixlQUF6RDtBQUF5RThDLFNBQUMsQ0FBQ2pLLENBQUQsQ0FBRCxHQUFLLENBQUMrRyxPQUFPLENBQUNXLEVBQVIsR0FBVzZDLElBQUksQ0FBQ0UsR0FBTCxDQUFTVCxDQUFDLENBQUMsV0FBUzFCLENBQVYsQ0FBVixFQUF1QjBCLENBQUMsQ0FBQyxXQUFTMUIsQ0FBVixDQUF4QixDQUFYLEdBQWlEdkIsT0FBTyxDQUFDa0IsTUFBUixHQUFlM0csUUFBUSxDQUFDNFMsSUFBVCxDQUFjLFdBQVM1TCxDQUF2QixDQUFmLEdBQXlDMEIsQ0FBQyxDQUFDLFdBQVMxQixDQUFWLENBQTVGLEtBQTJHLENBQWhIO0FBQWtILE9BQW5PLEdBQXFPMkIsQ0FBNU87QUFBOE8sS0FBcDZDO0FBQXE2Q1EsT0FBRyxFQUFDLGVBQVU7QUFBQyxVQUFJdEgsQ0FBSjs7QUFBTSxVQUFHNEQsT0FBTyxDQUFDQyxZQUFSLElBQXNCRCxPQUFPLENBQUNrQixNQUE5QixJQUFzQ2xCLE9BQU8sQ0FBQ2tCLE1BQVIsR0FBZSxNQUFyRCxLQUE4RDlFLENBQUMsR0FBQyxLQUFLb1IsbUJBQUwsRUFBRixFQUE2QixLQUFLbFYsT0FBTCxDQUFhbU0sR0FBYixDQUFpQnJJLENBQWpCLENBQTNGLEdBQWdINEQsT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixHQUFXLENBQTFJLEVBQTRJO0FBQUMsWUFBSTFILENBQUMsR0FBQzRHLE1BQU0sQ0FBQ0MsUUFBUCxFQUFOO0FBQXdCLGFBQUt4SCxPQUFMLENBQWFtTSxHQUFiLENBQWlCO0FBQUNsRSxnQkFBTSxFQUFDdEgsQ0FBQyxDQUFDc0gsTUFBVjtBQUFpQlIsZUFBSyxFQUFDOUcsQ0FBQyxDQUFDOEc7QUFBekIsU0FBakI7QUFBa0Q7O0FBQUFtRSxhQUFPLENBQUNtQixXQUFSLElBQXFCLENBQUNqSixDQUF0QixJQUF5QixLQUFLOUQsT0FBTCxDQUFhbU0sR0FBYixDQUFpQjtBQUFDbEUsY0FBTSxFQUFDLEtBQUtpTixtQkFBTCxHQUEyQmpOO0FBQW5DLE9BQWpCLENBQXpCO0FBQXNGO0FBQXZ1RCxHQUEzdUo7QUFBQSxNQUFvOU13TSxNQUFNLEdBQUM7QUFBQ3RILGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSSxNQUFMLEdBQVksRUFBWixFQUFlLEtBQUtBLE1BQUwsQ0FBWTFELElBQVosR0FBaUJ4SyxDQUFDLENBQUMsRUFBRCxDQUFqQyxFQUFzQyxLQUFLbU8sS0FBTCxHQUFXLEVBQWpELEVBQW9ELEtBQUtDLFNBQUwsR0FBZSxFQUFuRSxFQUFzRSxLQUFLQyxNQUFMLEdBQVksQ0FBQyxDQUFuRixFQUFxRixLQUFLQyxNQUFMLEdBQVksSUFBSWpJLE1BQUosRUFBakcsRUFBNEcsS0FBSzZHLEtBQUwsRUFBNUcsRUFBeUgsS0FBS08sT0FBTCxDQUFhdEQsT0FBTyxDQUFDQyxRQUFSLENBQWlCcUIsSUFBOUIsQ0FBekg7QUFBNkosS0FBcEw7QUFBcUx5QixTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFHLEtBQUtuVSxPQUFMLEdBQWFpSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHVCQUFwQixFQUE2QzVDLElBQTdDLEdBQW9EMVEsTUFBcEQsQ0FBMkQsS0FBS3lVLElBQUwsR0FBVXZPLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsUUFBcEIsRUFBOEJ0VCxNQUE5QixDQUFxQyxLQUFLMFUsTUFBTCxHQUFZeE8sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixVQUFwQixDQUFqRCxDQUFyRSxFQUF3SnRULE1BQXhKLENBQStKLEtBQUsyVSxXQUFMLEdBQWlCek8sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUFoTCxDQUFiLEVBQW1PSCxPQUFPLENBQUMvRyxVQUFSLEVBQW5PLEVBQXdQbUgsS0FBSyxDQUFDbkgsVUFBTixDQUFpQixLQUFLc0ksTUFBdEIsQ0FBeFAsRUFBc1JFLFVBQVUsQ0FBQ3hJLFVBQVgsQ0FBc0IsS0FBS3VJLFdBQTNCLENBQXRSLEVBQThURSxPQUFPLENBQUN6SSxVQUFSLEVBQTlULEVBQW1WMEksRUFBRSxDQUFDMUksVUFBSCxFQUFuVixFQUFtVyxLQUFLbk4sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixRQUFNekksT0FBTyxDQUFDbUIsV0FBUixHQUFvQixFQUFwQixHQUF1QixLQUE3QixJQUFvQyxlQUExRCxDQUFuVyxFQUE4YSxLQUFLL00sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixRQUFNekksT0FBTyxDQUFDWSxHQUFSLEdBQVksRUFBWixHQUFlLEtBQXJCLElBQTRCLE1BQWxELENBQTlhLEVBQXdlOUUsT0FBTyxDQUFDVyxFQUFuZixFQUFzZixLQUFJLElBQUl2RSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsQ0FBZixFQUFpQkEsQ0FBQyxFQUFsQixFQUFxQjRELE9BQU8sQ0FBQ1csRUFBUixHQUFXdkUsQ0FBWCxJQUFjLEtBQUs5RCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLFlBQVV2USxDQUFoQyxDQUFkO0FBQWlELFdBQUs5RCxPQUFMLENBQWFnSyxFQUFiLENBQWdCLG1CQUFoQixFQUFvQyxVQUFTbEcsQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ2xELGNBQUY7QUFBbUIsT0FBbkU7QUFBcUUsS0FBdjBCO0FBQXcwQmdVLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtrQixTQUFMLEtBQWlCN08sQ0FBQyxDQUFDaEYsUUFBUSxDQUFDNFMsSUFBVixDQUFELENBQWlCOVQsTUFBakIsQ0FBd0IsS0FBS2YsT0FBN0IsR0FBc0MsS0FBSzhWLFNBQUwsR0FBZSxDQUFDLENBQXZFO0FBQTBFLEtBQXA2QjtBQUFxNkJoQixVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLZ0IsU0FBTCxLQUFpQixLQUFLOVYsT0FBTCxDQUFhOFUsTUFBYixJQUFzQixLQUFLZ0IsU0FBTCxHQUFlLENBQUMsQ0FBdkQ7QUFBMEQsS0FBai9CO0FBQWsvQnBCLFdBQU8sRUFBQyxpQkFBUzVRLENBQVQsRUFBVztBQUFDLFdBQUtpUyxLQUFMLElBQVksS0FBSy9WLE9BQUwsQ0FBYTJVLFdBQWIsQ0FBeUIsb0JBQWtCLEtBQUtvQixLQUFoRCxDQUFaLEVBQW1FLEtBQUsvVixPQUFMLENBQWFxVSxRQUFiLENBQXNCLG9CQUFrQnZRLENBQXhDLENBQW5FLEVBQThHb1EsT0FBTyxDQUFDUSxPQUFSLENBQWdCNVEsQ0FBaEIsQ0FBOUcsRUFBaUksS0FBS2lTLEtBQUwsR0FBV2pTLENBQTVJO0FBQThJLEtBQXBwQztBQUFxcENrUyxrQkFBYyxFQUFDLHdCQUFTbFMsQ0FBVCxFQUFXO0FBQUMsV0FBS21TLFlBQUwsS0FBb0JuUyxDQUFwQixLQUF3QixLQUFLbVMsWUFBTCxLQUFvQixLQUFLalcsT0FBTCxDQUFhMlUsV0FBYixDQUF5QixxQkFBbUIsS0FBS3NCLFlBQWpELEdBQStEbEcsSUFBSSxDQUFDQyxPQUFMLENBQWEsS0FBS2lHLFlBQWxCLEtBQWlDLEtBQUtqVyxPQUFMLENBQWEyVSxXQUFiLENBQXlCLHVCQUF6QixDQUFwSCxHQUF1SyxLQUFLM1UsT0FBTCxDQUFhcVUsUUFBYixDQUFzQixxQkFBbUJ2USxDQUF6QyxDQUF2SyxFQUFtTmlNLElBQUksQ0FBQ0MsT0FBTCxDQUFhbE0sQ0FBYixLQUFpQixLQUFLOUQsT0FBTCxDQUFhcVUsUUFBYixDQUFzQix1QkFBdEIsQ0FBcE8sRUFBbVIsS0FBSzRCLFlBQUwsR0FBa0JuUyxDQUE3VDtBQUFnVSxLQUFoL0M7QUFBaS9Db1Msd0JBQW9CLEVBQUMsZ0NBQVU7QUFBQyxXQUFLQyxzQkFBTCxJQUE2QmxQLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVNEksRUFBVixDQUFhLDBCQUFiLEVBQXdDLEtBQUttTSxzQkFBTCxHQUE0QmxQLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLMkgsZUFBYixFQUE2QixJQUE3QixDQUFwRSxDQUE3QjtBQUFxSSxLQUF0cEQ7QUFBdXBEQyx1QkFBbUIsRUFBQywrQkFBVTtBQUFDLFdBQUtGLHNCQUFMLEtBQThCbFAsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVVrVixHQUFWLENBQWMsMEJBQWQsRUFBeUMsS0FBS0gsc0JBQTlDLEdBQXNFLEtBQUtBLHNCQUFMLEdBQTRCLElBQWhJO0FBQXNJLEtBQTV6RDtBQUE2ekRJLGFBQVMsRUFBQyxxQkFBVTtBQUFDM0ssYUFBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLd0ksTUFBTCxDQUFZM0YsR0FBWixDQUFnQixRQUFoQixFQUF5QjNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK0gsY0FBYixFQUE0QixJQUE1QixDQUF6QixFQUEyRCxDQUEzRCxDQUFyQjtBQUFtRixLQUFyNkQ7QUFBczZESixtQkFBZSxFQUFDLDJCQUFVO0FBQUMsVUFBSXRTLENBQUo7QUFBTSxPQUFDQSxDQUFDLEdBQUN3USxLQUFLLENBQUNDLElBQVQsTUFBaUJvQixVQUFVLENBQUNjLGFBQVgsSUFBMkIsS0FBS0MsbUJBQUwsRUFBM0IsRUFBc0Q1UyxDQUFDLENBQUM2UyxRQUFGLEVBQXRELEVBQW1FZCxFQUFFLENBQUNlLE1BQUgsRUFBbkUsRUFBK0VmLEVBQUUsQ0FBQ2dCLGNBQUgsQ0FBa0IsSUFBbEIsRUFBdUIsQ0FBdkIsQ0FBL0UsRUFBeUdqQixPQUFPLENBQUNrQixNQUFSLEVBQXpHLEVBQTBINUMsT0FBTyxDQUFDOUksR0FBUixFQUExSCxFQUF3SXlLLEVBQUUsQ0FBQ08sZUFBSCxFQUF4SSxFQUE2SixLQUFLRyxTQUFMLEVBQTlLO0FBQWdNLEtBQXZvRTtBQUF3b0VDLGtCQUFjLEVBQUMsMEJBQVU7QUFBQzVLLGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUIsS0FBSy9NLE9BQUwsQ0FBYW1NLEdBQWIsQ0FBaUI7QUFBQzRLLFdBQUcsRUFBQzlQLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVNFYsU0FBVjtBQUFMLE9BQWpCLENBQXJCO0FBQW1FLEtBQXJ1RTtBQUFzdUVDLG9CQUFnQixFQUFDLDRCQUFVO0FBQUMsYUFBTyxLQUFLQyxjQUFaO0FBQTJCLEtBQTd4RTtBQUE4eEVSLHVCQUFtQixFQUFDLCtCQUFVO0FBQUMsVUFBR3BDLEtBQUssQ0FBQ0MsSUFBVCxFQUFjO0FBQUMsWUFBSXpRLENBQUMsR0FBQ3lELE1BQU0sQ0FBQ0MsUUFBUCxFQUFOO0FBQUEsWUFBd0I3RyxDQUFDLEdBQUNnVixVQUFVLENBQUN3QixhQUFYLEVBQTFCO0FBQUEsWUFBcURsTyxDQUFDLEdBQUMsaUJBQWUwTSxVQUFVLENBQUN5QixZQUFqRjtBQUE4RixhQUFLRixjQUFMLEdBQW9CO0FBQUN6UCxlQUFLLEVBQUN3QixDQUFDLEdBQUNuRixDQUFDLENBQUMyRCxLQUFILEdBQVMzRCxDQUFDLENBQUMyRCxLQUFGLEdBQVE5RyxDQUFDLENBQUM4RyxLQUEzQjtBQUFpQ1EsZ0JBQU0sRUFBQ2dCLENBQUMsR0FBQ25GLENBQUMsQ0FBQ21FLE1BQUYsR0FBU3RILENBQUMsQ0FBQ3NILE1BQVosR0FBbUJuRSxDQUFDLENBQUNtRTtBQUE5RCxTQUFwQixFQUEwRixLQUFLb1AsWUFBTCxHQUFrQjtBQUFDTixhQUFHLEVBQUMsQ0FBTDtBQUFPL0UsY0FBSSxFQUFDL0ksQ0FBQyxHQUFDLENBQUQsR0FBR3RJLENBQUMsQ0FBQzhHO0FBQWxCLFNBQTVHLEVBQXFJLEtBQUsrTixJQUFMLENBQVVySixHQUFWLENBQWNsRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBSytQLGNBQWpCLEVBQWdDLEtBQUtHLFlBQXJDLENBQWQsQ0FBckk7QUFBdU07QUFBQyxLQUFsbkY7QUFBbW5GN0YsUUFBSSxFQUFDLGNBQVMxTixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxVQUFHLEtBQUt5VCxPQUFSLEVBQWdCdFEsQ0FBQyxJQUFFQSxDQUFDLEVBQUosQ0FBaEIsS0FBMkI7QUFBQyxhQUFLc1EsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLa0QsT0FBTCxHQUFhLENBQUMsQ0FBOUIsRUFBZ0MsS0FBSzFDLE1BQUwsRUFBaEMsRUFBOEMsS0FBS1csTUFBTCxDQUFZMUYsS0FBWixDQUFrQixhQUFsQixDQUE5QyxFQUErRSxLQUFLMEYsTUFBTCxDQUFZMUYsS0FBWixDQUFrQixjQUFsQixDQUEvRSxFQUFpSCxLQUFLMkcsY0FBTCxFQUFqSDtBQUF1SSxZQUFJdk4sQ0FBQyxHQUFDLENBQUMsYUFBV2hDLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIyVCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDbFEsTUFBaEMsQ0FBdUNvUSxJQUEzRSxLQUFrRixDQUF4RjtBQUFBLFlBQTBGN0csQ0FBQyxHQUFDLENBQTVGO0FBQThGdUosZUFBTyxDQUFDSSxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QjdMLE9BQXBDLEdBQTRDLE1BQTVDLEdBQW1ELE1BQXBELENBQVAsQ0FBbUUsWUFBVTtBQUFDdUIsV0FBQyxJQUFFLEVBQUU2RyxDQUFGLEdBQUksQ0FBUCxJQUFVN0csQ0FBQyxFQUFYO0FBQWMsU0FBNUYsRUFBNkZtRixDQUE3RixHQUFnRyxLQUFLc00sTUFBTCxDQUFZM0YsR0FBWixDQUFnQixhQUFoQixFQUE4QjNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBSzhJLEtBQUwsQ0FBV3RRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsaUJBQUs2SSxPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCeFQsQ0FBQyxJQUFFLEVBQUU2RyxDQUFGLEdBQUksQ0FBUCxJQUFVN0csQ0FBQyxFQUEzQjtBQUE4QixXQUFqRCxFQUFrRCxJQUFsRCxDQUFYLEVBQW1FbUYsQ0FBbkU7QUFBc0UsU0FBekYsRUFBMEYsSUFBMUYsQ0FBOUIsRUFBOEgsSUFBRUEsQ0FBRixHQUFJaUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBR2xDLENBQVosRUFBYyxFQUFkLENBQUosR0FBc0IsQ0FBcEosQ0FBaEc7QUFBdVA7QUFBQyxLQUEvbkc7QUFBZ29Hc08sU0FBSyxFQUFDLGVBQVN6VCxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxVQUFJc0ksQ0FBQyxHQUFDLENBQUMsYUFBV2hDLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIyVCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDbFEsTUFBaEMsQ0FBdUNvUSxJQUEzRSxLQUFrRixDQUF4RjtBQUEwRixXQUFLeFIsT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCQyxNQUF0QixDQUE2Qi9MLENBQTdCLEVBQStCLENBQS9CLEVBQWlDbkYsQ0FBakM7QUFBb0MsS0FBbHhHO0FBQW14RzJOLFFBQUksRUFBQyxjQUFTOVEsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLNlQsSUFBUixFQUFhO0FBQUMsWUFBSTFRLENBQUMsR0FBQyxLQUFLcVIsTUFBTCxDQUFZMUQsSUFBbEI7QUFBdUIzTixTQUFDLENBQUMwVCxLQUFGLENBQVEsRUFBUixHQUFZLEtBQUtqQyxNQUFMLENBQVkxRixLQUFaLENBQWtCLGFBQWxCLENBQVosRUFBNkMsS0FBSzBGLE1BQUwsQ0FBWTFGLEtBQVosQ0FBa0IsY0FBbEIsQ0FBN0M7QUFBK0UsWUFBSTVHLENBQUMsR0FBQ3FMLEtBQUssQ0FBQ0MsSUFBTixHQUFXRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCa0QsT0FBeEIsQ0FBZ0NsUSxNQUFoQyxDQUF1Q3FRLElBQWxELEdBQXVELENBQTdEO0FBQStEM04sU0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQ3dRLGVBQUssQ0FBQ1MsSUFBTixJQUFhYSxPQUFPLENBQUNuRSxJQUFSLEVBQWIsRUFBNEIzTixDQUFDLEVBQTdCO0FBQWdDLFNBQXBELEVBQXFELElBQXJELENBQVIsR0FBb0VBLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMrUixZQUFFLENBQUM0QixPQUFILElBQWE1QixFQUFFLENBQUNwRSxJQUFILENBQVEsSUFBUixFQUFheEksQ0FBYixDQUFiLEVBQTZCeU8sUUFBUSxDQUFDRCxPQUFULEVBQTdCLEVBQWdEM1QsQ0FBQyxFQUFqRDtBQUFvRCxTQUF4RSxFQUF5RSxJQUF6RSxDQUFSLENBQXBFLEVBQTRKQSxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGNBQUluRCxDQUFDLEdBQUMsQ0FBTjtBQUFRLGVBQUtnWCxLQUFMLENBQVcsWUFBVTtBQUFDLGNBQUVoWCxDQUFGLEdBQUksQ0FBSixJQUFPbUQsQ0FBQyxFQUFSO0FBQVcsV0FBakMsRUFBa0NtRixDQUFsQyxHQUFxQyxLQUFLc00sTUFBTCxDQUFZM0YsR0FBWixDQUFnQixjQUFoQixFQUErQjNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUN5RixtQkFBTyxDQUFDekMsSUFBUixDQUFhLFlBQVU7QUFBQyxnQkFBRTlRLENBQUYsR0FBSSxDQUFKLElBQU9tRCxDQUFDLEVBQVI7QUFBVyxhQUFuQyxFQUFvQ21GLENBQXBDO0FBQXVDLFdBQTFELEVBQTJELElBQTNELENBQS9CLEVBQWdHLElBQUVBLENBQUYsR0FBSWlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUdsQyxDQUFaLEVBQWMsR0FBZCxDQUFKLEdBQXVCLENBQXZILENBQXJDLEVBQStKLEtBQUtxTSxNQUFMLEdBQVksQ0FBQyxDQUE1SztBQUE4SyxTQUExTSxFQUEyTSxJQUEzTSxDQUFSLENBQTVKLEVBQXNYeFIsQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxlQUFLOFQsTUFBTCxJQUFjLEtBQUt2QixtQkFBTCxFQUFkLEVBQXlDL0IsS0FBSyxDQUFDdUQsU0FBTixFQUF6QyxFQUEyRGxDLFVBQVUsQ0FBQzlGLEtBQVgsRUFBM0QsRUFBOEUsS0FBSzBGLE1BQUwsQ0FBWTFGLEtBQVosRUFBOUUsRUFBa0csS0FBS2lJLFNBQUwsR0FBZSxDQUFDLENBQWxIO0FBQW9ILGNBQUluWCxDQUFDLEdBQUMyVCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JwRyxPQUFoQixDQUF3QjJKLFNBQTFDO0FBQW9ELHlCQUFhOVEsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFiLElBQXdCQSxDQUFDLENBQUMwTSxJQUFGLENBQU9uRyxNQUFQLENBQXhCLEVBQXVDLEtBQUtzTixJQUFMLEdBQVUsSUFBakQsRUFBc0QsS0FBSzhDLE9BQUwsR0FBYSxDQUFDLENBQXBFLEVBQXNFLEtBQUtVLE9BQUwsR0FBYSxDQUFDLENBQXBGLEVBQXNGLEtBQUtsRCxNQUFMLEVBQXRGLEVBQW9HaFIsQ0FBQyxFQUFyRztBQUF3RyxTQUFwUyxFQUFxUyxJQUFyUyxDQUFSLENBQXRYLEVBQTBxQixlQUFhbUQsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFiLElBQXdCbUQsQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQ25ELFdBQUMsSUFBR21ELENBQUMsRUFBTDtBQUFRLFNBQTVCLEVBQTZCLElBQTdCLENBQVIsQ0FBbHNCO0FBQTh1QjtBQUFDLEtBQXRzSTtBQUF1c0k2VCxTQUFLLEVBQUMsZUFBUzdULENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFVBQUlzSSxDQUFDLEdBQUMsQ0FBQyxhQUFXaEMsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QjJULEtBQUssQ0FBQ0MsSUFBTixJQUFZRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCa0QsT0FBeEIsQ0FBZ0NsUSxNQUFoQyxDQUF1Q3FRLElBQTNFLEtBQWtGLENBQXhGO0FBQTBGLFdBQUt6UixPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JFLE9BQXRCLENBQThCaE0sQ0FBOUIsRUFBZ0NuRixDQUFoQztBQUFtQyxLQUF4MUk7QUFBeTFJNE0sUUFBSSxFQUFDLGNBQVM1TSxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxXQUFLc1gsS0FBTCxHQUFXblUsQ0FBWCxFQUFhLEtBQUs4USxNQUFMLEVBQWIsRUFBMkJlLFVBQVUsQ0FBQ2pGLElBQVgsQ0FBZ0I1TSxDQUFoQixDQUEzQixFQUE4Q3dRLEtBQUssQ0FBQzVELElBQU4sQ0FBVzVNLENBQVgsQ0FBOUMsRUFBNEQsS0FBS29TLG9CQUFMLEVBQTVELEVBQXdGdlYsQ0FBQyxJQUFFLEtBQUt1WCxXQUFMLENBQWlCdlgsQ0FBakIsQ0FBM0Y7QUFBK0csS0FBMzlJO0FBQTQ5SXVYLGVBQVcsRUFBQyxxQkFBU3BVLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFdBQUttWCxTQUFMLEdBQWVoVSxDQUFmLEVBQWlCLEtBQUswUSxJQUFMLEdBQVUsS0FBS3lELEtBQUwsQ0FBV25VLENBQUMsR0FBQyxDQUFiLENBQTNCLEVBQTJDLEtBQUtxVSxhQUFMLEVBQTNDLEVBQWdFLEtBQUs1RCxJQUFMLEdBQVVELEtBQUssQ0FBQzlDLElBQU4sQ0FBVzFOLENBQVgsRUFBYW1ELENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUM5TixTQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLE9BQTFCLEVBQTJCLElBQTNCLENBQWIsQ0FBMUU7QUFBeUgsS0FBL21KO0FBQWduSndYLGlCQUFhLEVBQUMseUJBQVU7QUFBQyxXQUFLaEQsTUFBTCxDQUFZMUQsSUFBWixDQUFpQitGLEtBQWpCLENBQXVCLEVBQXZCO0FBQTJCLEtBQXBxSjtBQUFxcUpJLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUt4RCxPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCeUIsRUFBRSxDQUFDcEUsSUFBSCxDQUFRLElBQVIsRUFBYSxDQUFiLENBQWhCLEVBQWdDb0UsRUFBRSxDQUFDdUMsS0FBSCxFQUFoQztBQUEyQyxLQUFsdUo7QUFBbXVKQyxlQUFXLEVBQUMsdUJBQVU7QUFBQyxhQUFPLEtBQUs3RCxJQUFMLElBQVcsS0FBS0EsSUFBTCxDQUFVcEcsT0FBVixDQUFrQmdFLElBQTdCLElBQW1DLEtBQUs2RixLQUF4QyxJQUErQyxJQUFFLEtBQUtBLEtBQUwsQ0FBVzlWLE1BQTVELElBQW9FLE1BQUksS0FBSzJWLFNBQXBGO0FBQThGLEtBQXgxSjtBQUF5MUpRLFlBQVEsRUFBQyxrQkFBU3hVLENBQVQsRUFBVztBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBSzBYLFdBQUwsRUFBTjtBQUF5QixPQUFDdlUsQ0FBQyxJQUFFbkQsQ0FBSixLQUFRLEtBQUt1WCxXQUFMLENBQWlCLEtBQUtLLHFCQUFMLEdBQTZCRCxRQUE5QyxDQUFSO0FBQWdFLEtBQXY4SjtBQUF3OEpFLFdBQU8sRUFBQyxtQkFBVTtBQUFDLFVBQUkxVSxDQUFDLEdBQUMsS0FBS21VLEtBQUwsSUFBWSxJQUFFLEtBQUtBLEtBQUwsQ0FBVzlWLE1BQS9CO0FBQXNDLGFBQU8sS0FBS3FTLElBQUwsSUFBVyxLQUFLQSxJQUFMLENBQVVwRyxPQUFWLENBQWtCZ0UsSUFBN0IsSUFBbUN0TyxDQUFuQyxJQUFzQ0EsQ0FBQyxJQUFFLE1BQUksS0FBS3lVLHFCQUFMLEdBQTZCRSxJQUFqRjtBQUFzRixLQUF2bEs7QUFBd2xLQSxRQUFJLEVBQUMsY0FBUzNVLENBQVQsRUFBVztBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBSzZYLE9BQUwsRUFBTjtBQUFxQixPQUFDMVUsQ0FBQyxJQUFFbkQsQ0FBSixLQUFRLEtBQUt1WCxXQUFMLENBQWlCLEtBQUtLLHFCQUFMLEdBQTZCRSxJQUE5QyxDQUFSO0FBQTRELEtBQTFySztBQUEycktGLHlCQUFxQixFQUFDLGlDQUFVO0FBQUMsVUFBRyxDQUFDLEtBQUtOLEtBQVQsRUFBZSxPQUFNLEVBQU47QUFBUyxVQUFJblUsQ0FBQyxHQUFDLEtBQUtnVSxTQUFYO0FBQUEsVUFBcUJuWCxDQUFDLEdBQUMsS0FBS3NYLEtBQUwsQ0FBVzlWLE1BQWxDO0FBQXlDLGFBQU07QUFBQ21XLGdCQUFRLEVBQUN4VSxDQUFDLElBQUUsQ0FBSCxHQUFLbkQsQ0FBTCxHQUFPbUQsQ0FBQyxHQUFDLENBQW5CO0FBQXFCMlUsWUFBSSxFQUFDOVgsQ0FBQyxJQUFFbUQsQ0FBSCxHQUFLLENBQUwsR0FBT0EsQ0FBQyxHQUFDO0FBQW5DLE9BQU47QUFBNEM7QUFBejBLLEdBQTM5TTtBQUFBLE1BQXN5WDRULFFBQVEsR0FBQztBQUFDZ0IsV0FBTyxFQUFDLENBQUMsQ0FBVjtBQUFZQyxXQUFPLEVBQUM7QUFBQzNHLFVBQUksRUFBQyxFQUFOO0FBQVNDLFdBQUssRUFBQyxFQUFmO0FBQWtCQyxTQUFHLEVBQUM7QUFBdEIsS0FBcEI7QUFBOEMwRyxVQUFNLEVBQUMsZ0JBQVM5VSxDQUFULEVBQVc7QUFBQyxXQUFLMlQsT0FBTCxJQUFlM1QsQ0FBQyxLQUFHbUQsQ0FBQyxDQUFDaEYsUUFBRCxDQUFELENBQVkrSCxFQUFaLENBQWUsU0FBZixFQUF5QixLQUFLNk8saUJBQUwsR0FBdUI1UixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS3FLLFNBQWIsRUFBdUIsSUFBdkIsQ0FBaEQsRUFBOEU5TyxFQUE5RSxDQUFpRixPQUFqRixFQUF5RixLQUFLK08sZUFBTCxHQUFxQjlSLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLdUssT0FBYixFQUFxQixJQUFyQixDQUE5RyxHQUEwSSxLQUFLTixPQUFMLEdBQWE1VSxDQUExSixDQUFoQjtBQUE2SyxLQUE5TztBQUErTzJULFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUtpQixPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCLEtBQUtLLGVBQUwsS0FBdUI5UixDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXFVLEdBQVosQ0FBZ0IsT0FBaEIsRUFBd0IsS0FBS3lDLGVBQTdCLEVBQThDekMsR0FBOUMsQ0FBa0QsU0FBbEQsRUFBNEQsS0FBS3VDLGlCQUFqRSxHQUFvRixLQUFLRSxlQUFMLEdBQXFCLEtBQUtGLGlCQUFMLEdBQXVCLElBQXZKLENBQWhCO0FBQTZLLEtBQS9hO0FBQWdiQyxhQUFTLEVBQUMsbUJBQVNoVixDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUs0VSxPQUFSLEVBQWdCO0FBQUMsWUFBSS9YLENBQUMsR0FBQyxLQUFLc1ksZUFBTCxDQUFxQm5WLENBQUMsQ0FBQzZVLE9BQXZCLENBQU47QUFBc0MsWUFBR2hZLENBQUMsS0FBRyxDQUFDQSxDQUFELElBQUksQ0FBQyxLQUFLK1gsT0FBVixJQUFtQixLQUFLQSxPQUFMLENBQWEvWCxDQUFiLENBQXRCLENBQUosRUFBMkMsUUFBT21ELENBQUMsQ0FBQ2xELGNBQUYsSUFBbUJrRCxDQUFDLENBQUN3RyxlQUFGLEVBQW5CLEVBQXVDM0osQ0FBOUM7QUFBaUQsZUFBSSxNQUFKO0FBQVc4VCxrQkFBTSxDQUFDNkQsUUFBUDtBQUFrQjs7QUFBTSxlQUFJLE9BQUo7QUFBWTdELGtCQUFNLENBQUNnRSxJQUFQO0FBQWhHO0FBQStHO0FBQUMsS0FBeHBCO0FBQXlwQk8sV0FBTyxFQUFDLGlCQUFTbFYsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLNFUsT0FBUixFQUFnQjtBQUFDLFlBQUkvWCxDQUFDLEdBQUMsS0FBS3NZLGVBQUwsQ0FBcUJuVixDQUFDLENBQUM2VSxPQUF2QixDQUFOO0FBQXNDLFlBQUdoWSxDQUFDLEtBQUcsQ0FBQ0EsQ0FBRCxJQUFJLENBQUMsS0FBSytYLE9BQVYsSUFBbUIsS0FBS0EsT0FBTCxDQUFhL1gsQ0FBYixDQUF0QixDQUFKLEVBQTJDLFFBQU9BLENBQVA7QUFBVSxlQUFJLEtBQUo7QUFBVThULGtCQUFNLENBQUNoRCxJQUFQO0FBQXBCO0FBQW1DO0FBQUMsS0FBbnpCO0FBQW96QndILG1CQUFlLEVBQUMseUJBQVNuVixDQUFULEVBQVc7QUFBQyxXQUFJLElBQUluRCxDQUFSLElBQWEsS0FBS2dZLE9BQWxCLEVBQTBCLElBQUcsS0FBS0EsT0FBTCxDQUFhaFksQ0FBYixNQUFrQm1ELENBQXJCLEVBQXVCLE9BQU9uRCxDQUFQOztBQUFTLGFBQU8sSUFBUDtBQUFZO0FBQXQ1QixHQUEveVg7QUFBQSxNQUF1c1p1WSxJQUFJLElBQUVDLEVBQUUsR0FBQyxDQUFILEVBQUtDLEVBQUUsR0FBQyxFQUFSLEVBQVdDLEVBQUUsR0FBQ3BTLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsOENBQXBCLEVBQW9FdFQsTUFBcEUsQ0FBMkVrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGlCQUFwQixDQUEzRSxFQUFtSDdWLEdBQW5ILENBQXVIeUksQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixpREFBcEIsRUFBdUV0VCxNQUF2RSxDQUE4RWtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsaUJBQXBCLENBQTlFLENBQXZILEVBQThPN1YsR0FBOU8sQ0FBa1B5SSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDZDQUFwQixFQUFtRXRULE1BQW5FLENBQTBFa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixpQkFBcEIsQ0FBMUUsQ0FBbFAsRUFBcVc3VixHQUFyVyxDQUF5V3lJLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsOENBQXBCLEVBQW9FdFQsTUFBcEUsQ0FBMkVrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGlCQUFwQixDQUEzRSxDQUF6VyxDQUFkLEVBQTJlcE4sQ0FBQyxDQUFDRSxNQUFGLENBQVNtUyxFQUFFLENBQUNoUSxTQUFaLEVBQXNCO0FBQUM2RCxjQUFVLEVBQUMsb0JBQVNySixDQUFULEVBQVduRCxDQUFYLEVBQWFzSSxDQUFiLEVBQWU7QUFBQyxXQUFLdUwsSUFBTCxHQUFVMVEsQ0FBVixFQUFZLEtBQUtxTixVQUFMLEdBQWdCO0FBQUMxSixhQUFLLEVBQUMsQ0FBUDtBQUFTUSxjQUFNLEVBQUM7QUFBaEIsT0FBNUIsRUFBK0MsS0FBS3NSLEdBQUwsR0FBU0osRUFBRSxFQUExRCxFQUE2RCxLQUFLckIsU0FBTCxHQUFlblgsQ0FBNUUsRUFBOEUsS0FBSzZZLE1BQUwsR0FBWXZRLENBQTFGLEVBQTRGLEtBQUt3USxVQUFMLEdBQWdCLENBQUMsQ0FBN0csRUFBK0csS0FBS0MsUUFBTCxHQUFjLENBQUMsQ0FBOUgsRUFBZ0ksS0FBS3ZFLE1BQUwsR0FBWSxFQUE1SSxFQUErSSxLQUFLQSxNQUFMLENBQVl3RSxRQUFaLEdBQXFCMVMsQ0FBQyxDQUFDLEVBQUQsQ0FBcks7QUFBMEssS0FBdE07QUFBdU0yTSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFHLENBQUMsS0FBS2dHLFFBQVQsRUFBa0I7QUFBQ3RGLGFBQUssQ0FBQ3RVLE9BQU4sQ0FBY2UsTUFBZCxDQUFxQixLQUFLZixPQUFMLEdBQWFpSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLFNBQXBCLEVBQStCdFQsTUFBL0IsQ0FBc0MsS0FBS2dDLFNBQUwsR0FBZWtFLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsY0FBcEIsQ0FBckQsRUFBMEZsSSxHQUExRixDQUE4RjtBQUFDME4saUJBQU8sRUFBQztBQUFULFNBQTlGLEVBQTJHcEksSUFBM0csRUFBbEM7QUFBcUosWUFBSTNOLENBQUMsR0FBQyxLQUFLMFEsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnFFLFFBQWxCLElBQTRCLElBQUUsS0FBSytHLE1BQXpDOztBQUFnRCxZQUFHMVYsQ0FBQyxJQUFFLEtBQUs5RCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGlCQUF0QixDQUFILEVBQTRDLENBQUMsS0FBS0csSUFBTCxDQUFVc0YsT0FBVixJQUFtQmhXLENBQXBCLE1BQXlCLEtBQUs5RCxPQUFMLENBQWFlLE1BQWIsQ0FBb0IsS0FBS2daLElBQUwsR0FBVTlTLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsU0FBcEIsRUFBK0J0VCxNQUEvQixDQUFzQ2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isb0JBQXBCLENBQXRDLEVBQWlGdFQsTUFBakYsQ0FBd0ZzWSxFQUFFLENBQUNXLEtBQUgsQ0FBUyxDQUFDLENBQVYsQ0FBeEYsRUFBc0dqWixNQUF0RyxDQUE2RyxLQUFLa1osVUFBTCxHQUFnQmhULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLENBQTdILENBQTlCLEdBQW1NdlEsQ0FBQyxLQUFHLEtBQUs5RCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGlCQUF0QixHQUF5QyxLQUFLNEYsVUFBTCxDQUFnQmxaLE1BQWhCLENBQXVCLEtBQUttWixHQUFMLEdBQVNqVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGFBQXBCLEVBQW1DdFQsTUFBbkMsQ0FBMENrRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlvTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBMUMsQ0FBaEMsQ0FBNUMsQ0FBcE0sRUFBNlksS0FBS2hGLElBQUwsQ0FBVXNGLE9BQVYsSUFBbUIsS0FBS0csVUFBTCxDQUFnQmxaLE1BQWhCLENBQXVCLEtBQUsrWSxPQUFMLEdBQWE3UyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLFlBQXBCLEVBQWtDOEYsSUFBbEMsQ0FBdUMsS0FBSzNGLElBQUwsQ0FBVXNGLE9BQWpELENBQXBDLENBQXpiLENBQTVDLEVBQXFrQixLQUFLL1csU0FBTCxDQUFlaEMsTUFBZixDQUFzQixLQUFLcVosVUFBTCxHQUFnQm5ULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsdUJBQXBCLENBQXRDLEVBQW9GdFQsTUFBcEYsQ0FBMkYsS0FBS3dRLE9BQUwsR0FBYXRLLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsWUFBcEIsQ0FBeEcsQ0FBcmtCLEVBQWd0QixXQUFTLEtBQUtHLElBQUwsQ0FBVWhILElBQW5CLEtBQTBCLEtBQUsrRCxPQUFMLENBQWF4USxNQUFiLENBQW9CLEtBQUtrUCxLQUFMLEdBQVdoSixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG9CQUFwQixFQUEwQ2dHLElBQTFDLENBQStDO0FBQUMvSyxhQUFHLEVBQUMsS0FBS2tGLElBQUwsQ0FBVXBVO0FBQWYsU0FBL0MsQ0FBL0IsR0FBb0csS0FBS21SLE9BQUwsQ0FBYXhRLE1BQWIsQ0FBb0JzWSxFQUFFLENBQUNXLEtBQUgsQ0FBUyxDQUFDLENBQVYsQ0FBcEIsQ0FBOUgsQ0FBaHRCLEVBQWkzQmxXLENBQUMsSUFBRSxhQUFXLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCeUUsRUFBaEMsSUFBb0MsS0FBSzlQLFNBQUwsQ0FBZWhDLE1BQWYsQ0FBc0IsS0FBS3VaLGVBQUwsR0FBcUJyVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixFQUEyQ3RULE1BQTNDLENBQWtEa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQix3QkFBcEIsQ0FBbEQsRUFBaUd0VCxNQUFqRyxDQUF3R2tHLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWW9OLFFBQVosQ0FBcUIsa0JBQXJCLEVBQXlDOEYsSUFBekMsQ0FBOEMsS0FBS3JDLFNBQUwsR0FBZSxLQUFmLEdBQXFCLEtBQUswQixNQUF4RSxDQUF4RyxDQUEzQyxDQUFyNUIsRUFBMG5DLFlBQVUsS0FBS2hGLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J5RSxFQUF6cEMsRUFBNHBDO0FBQUMsZUFBS3RCLE9BQUwsQ0FBYXhRLE1BQWIsQ0FBb0IsS0FBS3daLGNBQUwsR0FBb0J0VCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHVDQUFwQixFQUE2RHRULE1BQTdELENBQW9Fa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0N0VCxNQUF0QyxDQUE2Q2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGdFQsTUFBL0YsQ0FBc0drRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUFwRSxDQUF4QyxFQUFnUXRULE1BQWhRLENBQXVRLEtBQUt5WixVQUFMLEdBQWdCdlQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixtQ0FBcEIsRUFBeUR0VCxNQUF6RCxDQUFnRWtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDdFQsTUFBdEMsQ0FBNkNrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRnRULE1BQS9GLENBQXNHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBaEUsQ0FBdlIsRUFBMmV0VCxNQUEzZSxDQUFrZixLQUFLMFosV0FBTCxHQUFpQnhULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsdUJBQXBCLEVBQTZDdFQsTUFBN0MsQ0FBb0RrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUFwRCxFQUFnR3RULE1BQWhHLENBQXVHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUF2RyxDQUFuZ0IsR0FBaXBCLENBQUMsS0FBS0csSUFBTCxDQUFVc0YsT0FBVixJQUFtQmhXLENBQUMsSUFBRSxLQUFLMFEsSUFBTCxDQUFVa0csT0FBVixDQUFrQlosT0FBekMsTUFBb0QsS0FBS3ZJLE9BQUwsQ0FBYXhRLE1BQWIsQ0FBb0IsS0FBSzRaLFVBQUwsR0FBZ0IxVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNCQUFwQixFQUE0Q3RULE1BQTVDLENBQW1Ea0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixvQkFBcEIsQ0FBbkQsRUFBOEZ0VCxNQUE5RixDQUFxR3NZLEVBQUUsQ0FBQ1csS0FBSCxDQUFTLENBQUMsQ0FBVixDQUFyRyxFQUFtSGpaLE1BQW5ILENBQTBILEtBQUs2WixnQkFBTCxHQUFzQjNULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLENBQWhKLENBQXBDLEdBQTROdlEsQ0FBQyxJQUFFLEtBQUs4VyxnQkFBTCxDQUFzQjdaLE1BQXRCLENBQTZCLEtBQUs4WixTQUFMLEdBQWU1VCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGFBQXBCLEVBQW1DdFQsTUFBbkMsQ0FBMENrRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlvTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBMUMsQ0FBNUMsQ0FBL04sRUFBdVksS0FBS2hGLElBQUwsQ0FBVXNGLE9BQVYsSUFBbUIsS0FBS2MsZ0JBQUwsQ0FBc0I3WixNQUF0QixDQUE2QixLQUFLK1osYUFBTCxHQUFtQjdULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0M4RixJQUFsQyxDQUF1QyxLQUFLM0YsSUFBTCxDQUFVc0YsT0FBakQsQ0FBaEQsQ0FBOWMsQ0FBanBCLEVBQTJzQyxLQUFLdEYsSUFBTCxDQUFVc0YsT0FBVixJQUFtQixDQUFDaFcsQ0FBcEIsSUFBdUIsS0FBSzBRLElBQUwsQ0FBVWtHLE9BQVYsQ0FBa0JaLE9BQXpDLElBQWtELEtBQUt2SSxPQUFMLENBQWF4USxNQUFiLENBQW9CLEtBQUtnYSxjQUFMLEdBQW9COVQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixpQ0FBcEIsRUFBdUR0VCxNQUF2RCxDQUE4RGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isd0JBQXBCLENBQTlELEVBQTZHdFQsTUFBN0csQ0FBb0hrRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlvTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBcEgsQ0FBeEMsQ0FBN3ZDO0FBQTIrQyxjQUFJN1ksQ0FBQyxHQUFDLEtBQUs2VCxJQUFMLENBQVVwRyxPQUFWLENBQWtCZ0UsSUFBbEIsSUFBd0IsSUFBRSxLQUFLb0gsTUFBL0IsSUFBdUMsS0FBRyxLQUFLMUIsU0FBckQ7QUFBQSxjQUErRDdPLENBQUMsR0FBQyxLQUFLdUwsSUFBTCxDQUFVcEcsT0FBVixDQUFrQmdFLElBQWxCLElBQXdCLElBQUUsS0FBS29ILE1BQS9CLElBQXVDLEtBQUsxQixTQUFMLEdBQWUsS0FBSzBCLE1BQTVIO0FBQW1JLGVBQUtlLGNBQUwsQ0FBb0IsQ0FBQzVaLENBQUMsR0FBQyxRQUFELEdBQVUsS0FBWixJQUFtQixPQUF2QyxFQUFnRCxrQkFBaEQsR0FBb0UsS0FBSzZaLFVBQUwsQ0FBZ0IsQ0FBQ3ZSLENBQUMsR0FBQyxRQUFELEdBQVUsS0FBWixJQUFtQixPQUFuQyxFQUE0QyxrQkFBNUMsQ0FBcEU7QUFBb0k7O0FBQUFoQyxTQUFDLENBQUN3RyxJQUFGLENBQU8sQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFQLEVBQWlCeEcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxlQUFLNlQsSUFBTCxDQUFVcEcsT0FBVixDQUFrQmtFLFFBQWxCLENBQTJCM1IsQ0FBM0IsS0FBK0IsS0FBS1gsT0FBTCxDQUFhcVUsUUFBYixDQUFzQixpQkFBZTFULENBQXJDLENBQS9CO0FBQXVFLFNBQTdGLEVBQThGLElBQTlGLENBQWpCLEdBQXNILEtBQUtYLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0IsYUFBVyxLQUFLRyxJQUFMLENBQVVoSCxJQUEzQyxDQUF0SCxFQUF1S3VDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQUt3RSxJQUFMLENBQVVoSCxJQUF2QixLQUE4QixLQUFLeE4sT0FBTCxDQUFhcVUsUUFBYixDQUFzQixlQUF0QixDQUFyTSxFQUE0TyxLQUFLbUYsTUFBTCxHQUFZLENBQVosSUFBZSxLQUFLeFosT0FBTCxDQUFhcVUsUUFBYixDQUFzQixhQUF0QixDQUEzUCxFQUFnUyxLQUFLdUYsUUFBTCxHQUFjLENBQUMsQ0FBL1M7QUFBaVQ7QUFBQyxLQUFsbkg7QUFBbW5Ib0Isd0JBQW9CLEVBQUMsZ0NBQVU7QUFBQyxVQUFJbFgsQ0FBSjtBQUFNLFVBQUcsRUFBRUEsQ0FBQyxHQUFDLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCb0UsT0FBdEIsQ0FBSCxFQUFrQyxPQUFNLEVBQU47O0FBQVMsV0FBSSxJQUFJN1IsQ0FBQyxHQUFDLEVBQU4sRUFBU3NJLENBQUMsR0FBQ2lDLElBQUksQ0FBQ0UsR0FBTCxDQUFTLENBQVQsRUFBVyxLQUFLME0sU0FBTCxHQUFlaFUsQ0FBQyxDQUFDLENBQUQsQ0FBM0IsQ0FBWCxFQUEyQzZHLENBQUMsR0FBQ08sSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBSzJNLFNBQUwsR0FBZWhVLENBQUMsQ0FBQyxDQUFELENBQXpCLEVBQTZCLEtBQUswVixNQUFsQyxDQUE3QyxFQUF1RjVPLENBQUMsR0FBQyxLQUFLa04sU0FBOUYsRUFBd0dqTixDQUFDLEdBQUNELENBQTlHLEVBQWdIQyxDQUFDLElBQUVGLENBQW5ILEVBQXFIRSxDQUFDLEVBQXRILEVBQXlILENBQUNDLENBQUMsR0FBQ3dKLEtBQUssQ0FBQ2MsS0FBTixDQUFZdkssQ0FBQyxHQUFDLENBQWQsQ0FBSCxFQUFxQmlOLFNBQXJCLElBQWdDbE4sQ0FBaEMsSUFBbUNqSyxDQUFDLENBQUNxUSxJQUFGLENBQU9sRyxDQUFQLENBQW5DOztBQUE2QyxXQUFJRCxDQUFDLEdBQUNELENBQU4sRUFBUTNCLENBQUMsSUFBRTRCLENBQVgsRUFBYUEsQ0FBQyxFQUFkLEVBQWlCO0FBQUMsWUFBSUMsQ0FBSjtBQUFNLFNBQUNBLENBQUMsR0FBQ3dKLEtBQUssQ0FBQ2MsS0FBTixDQUFZdkssQ0FBQyxHQUFDLENBQWQsQ0FBSCxFQUFxQmlOLFNBQXJCLElBQWdDbE4sQ0FBaEMsSUFBbUNqSyxDQUFDLENBQUNxUSxJQUFGLENBQU9sRyxDQUFQLENBQW5DO0FBQTZDOztBQUFBLGFBQU9uSyxDQUFQO0FBQVMsS0FBeDdIO0FBQXk3SHNhLDRCQUF3QixFQUFDLG9DQUFVO0FBQUMsVUFBSW5YLENBQUMsR0FBQyxLQUFLa1gsb0JBQUwsRUFBTjs7QUFBa0MvVCxPQUFDLENBQUN3RyxJQUFGLENBQU8zSixDQUFQLEVBQVNtRCxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM2UixPQUFGO0FBQVksT0FBbEMsRUFBbUMsSUFBbkMsQ0FBVDtBQUFtRCxLQUFsakk7QUFBbWpJQSxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLMEksVUFBTCxJQUFpQixLQUFLQyxTQUF0QixJQUFpQyxXQUFTLEtBQUszRyxJQUFMLENBQVVoSCxJQUFwRCxJQUEwRCxDQUFDLEtBQUtnSCxJQUFMLENBQVVwRyxPQUFWLENBQWtCb0UsT0FBN0UsSUFBc0YsS0FBSzRJLE1BQTNGLEtBQW9HLEtBQUt4SCxNQUFMLElBQWMsS0FBS3NILFVBQUwsR0FBZ0IsQ0FBQyxDQUEvQixFQUFpQyxLQUFLRyxZQUFMLEdBQWtCLElBQUluTyxVQUFKLENBQWUsS0FBSytDLEtBQUwsQ0FBVyxDQUFYLENBQWYsRUFBNkJoSixDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGFBQUtzWCxNQUFMLEdBQVksQ0FBQyxDQUFiLEVBQWVoQyxFQUFFLENBQUMsS0FBSzVFLElBQUwsQ0FBVXBVLEdBQVgsQ0FBRixHQUFrQixDQUFDLENBQWxDLEVBQW9DLEtBQUs4YSxVQUFMLEdBQWdCLENBQUMsQ0FBckQsRUFBdUQsS0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBdkUsRUFBeUUsS0FBS2hLLFVBQUwsR0FBZ0I7QUFBQzFKLGVBQUssRUFBQzNELENBQUMsQ0FBQytCLEdBQUYsQ0FBTWtJLFlBQWI7QUFBMEI5RixnQkFBTSxFQUFDbkUsQ0FBQyxDQUFDK0IsR0FBRixDQUFNdUo7QUFBdkMsU0FBekY7QUFBK0ksT0FBbkssRUFBb0ssSUFBcEssQ0FBN0IsRUFBdU0sSUFBdk0sRUFBNE07QUFBQ2YsY0FBTSxFQUFDO0FBQVIsT0FBNU0sQ0FBdko7QUFBNlgsS0FBbjhJO0FBQW84SXFDLFFBQUksRUFBQyxjQUFTL1AsQ0FBVCxFQUFXbUQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLOFAsTUFBTCxJQUFjLEtBQUt3SCxNQUF0QixFQUE2QnphLENBQUMsSUFBRUEsQ0FBQyxFQUFKLENBQTdCLEtBQXlDLFFBQU8sS0FBSzRPLEtBQUwsSUFBYSxLQUFLK0wsT0FBTCxHQUFhLENBQUMsQ0FBM0IsRUFBNkIsS0FBSzlHLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JzRCxPQUFsQixLQUE0QixLQUFLNkosYUFBTCxHQUFtQi9NLFVBQVUsQ0FBQ3ZILENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUNtSCxlQUFPLENBQUNwRSxJQUFSO0FBQWUsT0FBbEMsRUFBbUMsSUFBbkMsQ0FBRCxFQUEwQyxLQUFLZ0QsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnVFLFlBQWxCLElBQWdDLENBQTFFLENBQXpELENBQTdCLEVBQW9LLEtBQUs2QixJQUFMLENBQVVoSCxJQUFyTDtBQUEyTCxhQUFJLE9BQUo7QUFBWSxjQUFHLEtBQUtoTSxLQUFSLEVBQWMsT0FBTyxNQUFLYixDQUFDLElBQUVBLENBQUMsRUFBVCxDQUFQO0FBQW9CLGVBQUs2YSxVQUFMLEdBQWdCLElBQUl0TyxVQUFKLENBQWUsS0FBSytDLEtBQUwsQ0FBVyxDQUFYLENBQWYsRUFBNkJoSixDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGlCQUFLMlgsYUFBTCxJQUFxQixLQUFLQyxhQUFMLENBQW1CO0FBQUNqVSxtQkFBSyxFQUFDM0QsQ0FBQyxDQUFDK0IsR0FBRixDQUFNa0ksWUFBYjtBQUEwQjlGLG9CQUFNLEVBQUNuRSxDQUFDLENBQUMrQixHQUFGLENBQU11SjtBQUF2QyxhQUFuQixDQUFyQixFQUErRnpPLENBQUMsSUFBRUEsQ0FBQyxFQUFuRztBQUFzRyxXQUExSCxFQUEySCxJQUEzSCxDQUE3QixFQUE4SnNHLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsaUJBQUtnTixhQUFMLElBQXFCLEtBQUt4TCxLQUFMLENBQVd3QixJQUFYLEVBQXJCLEVBQXVDLEtBQUtGLE9BQUwsQ0FBYW9LLE9BQWIsQ0FBcUIsS0FBS25hLEtBQUwsR0FBV3lGLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsNkJBQXBCLEVBQW1EdFQsTUFBbkQsQ0FBMERrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGVBQXBCLENBQTFELENBQWhDLENBQXZDLEVBQXdLLEtBQUtyVSxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGNBQXRCLENBQXhLLEVBQThNLEtBQUtxSCxhQUFMLENBQW1CO0FBQUNqVSxtQkFBSyxFQUFDLEtBQUtqRyxLQUFMLENBQVdvYSxVQUFYLEVBQVA7QUFBK0IzVCxvQkFBTSxFQUFDLEtBQUt6RyxLQUFMLENBQVdxYSxXQUFYO0FBQXRDLGFBQW5CLENBQTlNLEVBQWtTLEtBQUtyYSxLQUFMLENBQVcySyxHQUFYLENBQWU7QUFBQzFFLG1CQUFLLEVBQUMsTUFBUDtBQUFjUSxvQkFBTSxFQUFDO0FBQXJCLGFBQWYsQ0FBbFMsRUFBK1V0SCxDQUFDLElBQUVBLENBQUMsRUFBblY7QUFBc1YsV0FBelcsRUFBMFcsSUFBMVcsQ0FBOUosRUFBOGdCO0FBQUMwTixrQkFBTSxFQUFDLEtBQUttRyxJQUFMLENBQVVwRyxPQUFWLENBQWtCK0Q7QUFBMUIsV0FBOWdCLENBQWhCO0FBQXVrQjs7QUFBTSxhQUFJLE9BQUo7QUFBWSxlQUFLMkosVUFBTCxHQUFnQixJQUFJN0ssVUFBSixDQUFlLEtBQUt1RCxJQUFMLENBQVVwVSxHQUF6QixFQUE2QjZHLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsaUJBQUsyWCxhQUFMLElBQXFCLEtBQUtDLGFBQUwsQ0FBbUI7QUFBQ2pVLG1CQUFLLEVBQUMzRCxDQUFDLENBQUNxTixVQUFGLENBQWExSixLQUFwQjtBQUEwQlEsb0JBQU0sRUFBQ25FLENBQUMsQ0FBQ3FOLFVBQUYsQ0FBYWxKO0FBQTlDLGFBQW5CLENBQXJCLEVBQStGdEgsQ0FBQyxJQUFFQSxDQUFDLEVBQW5HO0FBQXNHLFdBQTFILEVBQTJILElBQTNILENBQTdCLENBQWhCO0FBQStLOztBQUFNLGFBQUksU0FBSjtBQUFjLGVBQUs4YSxhQUFMLElBQXFCLEtBQUtDLGFBQUwsQ0FBbUI7QUFBQ2pVLGlCQUFLLEVBQUMsS0FBSytNLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0IzRyxLQUF6QjtBQUErQlEsa0JBQU0sRUFBQyxLQUFLdU0sSUFBTCxDQUFVcEcsT0FBVixDQUFrQm5HO0FBQXhELFdBQW5CLENBQXJCLEVBQXlHdEgsQ0FBQyxJQUFFQSxDQUFDLEVBQTdHO0FBQXJnQztBQUFzbkMsS0FBdG5MO0FBQXVuTCthLGlCQUFhLEVBQUMsdUJBQVM1WCxDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUtxTixVQUFMLEdBQWdCck4sQ0FBaEIsRUFBa0IsS0FBSzBRLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0I0RixRQUFsQixJQUE0QixLQUFLUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCNkYsU0FBbkUsRUFBNkU7QUFBQyxZQUFJdFQsQ0FBQyxHQUFDLEtBQUs2VCxJQUFMLENBQVVwRyxPQUFoQjtBQUFBLFlBQXdCbkYsQ0FBQyxHQUFDO0FBQUN4QixlQUFLLEVBQUM5RyxDQUFDLENBQUNxVCxRQUFGLEdBQVdyVCxDQUFDLENBQUNxVCxRQUFiLEdBQXNCLEtBQUs3QyxVQUFMLENBQWdCMUosS0FBN0M7QUFBbURRLGdCQUFNLEVBQUN0SCxDQUFDLENBQUNzVCxTQUFGLEdBQVl0VCxDQUFDLENBQUNzVCxTQUFkLEdBQXdCLEtBQUs5QyxVQUFMLENBQWdCbEo7QUFBbEcsU0FBMUI7QUFBb0ksYUFBS2tKLFVBQUwsR0FBZ0IzRyxHQUFHLENBQUNDLE1BQUosQ0FBV3hCLENBQVgsRUFBYSxLQUFLa0ksVUFBbEIsQ0FBaEI7QUFBOEM7QUFBQyxLQUFsNUw7QUFBbTVMc0ssaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFdBQUtNLGtCQUFMLElBQTBCLEtBQUtULE9BQUwsR0FBYSxDQUFDLENBQXhDLEVBQTBDLEtBQUtGLE1BQUwsR0FBWSxDQUFDLENBQXZELEVBQXlEaEMsRUFBRSxDQUFDLEtBQUs1RSxJQUFMLENBQVVwVSxHQUFYLENBQUYsR0FBa0IsQ0FBQyxDQUE1RSxFQUE4RXdWLE9BQU8sQ0FBQ25FLElBQVIsQ0FBYSxJQUFiLEVBQWtCLElBQWxCLEVBQXVCLEtBQUtxRyxTQUE1QixDQUE5RTtBQUFxSCxLQUFqaU07QUFBa2lNOUgsV0FBTyxFQUFDLG1CQUFVO0FBQUMsYUFBT0QsSUFBSSxDQUFDQyxPQUFMLENBQWEsS0FBS3dFLElBQUwsQ0FBVWhILElBQXZCLENBQVA7QUFBb0MsS0FBemxNO0FBQTBsTXdPLGVBQVcsRUFBQyxxQkFBU2xZLENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQyxLQUFLbVksWUFBTixJQUFvQixLQUFLak0sT0FBTCxFQUF2QixFQUFzQztBQUFDLFlBQUlyUCxDQUFDLEdBQUMsVUFBUVMsTUFBTSxDQUFDQyxRQUFQLElBQWlCLGFBQVdELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnNQLFFBQTVDLEdBQXFELEdBQXJELEdBQXlELEVBQWpFLElBQXFFLEdBQTNFO0FBQUEsWUFBK0UxSCxDQUFDLEdBQUNoQyxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBS3FOLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0IsS0FBS29HLElBQUwsQ0FBVWhILElBQTVCLEtBQW1DLEVBQS9DLENBQWpGO0FBQUEsWUFBb0k3QyxDQUFDLEdBQUMxRCxDQUFDLENBQUNpVixLQUFGLENBQVFqVCxDQUFSLENBQXRJO0FBQUEsWUFBaUoyQixDQUFDLEdBQUM7QUFBQzBGLGVBQUssRUFBQzNQLENBQUMsR0FBQyw2Q0FBVDtBQUF1RDZQLGlCQUFPLEVBQUM3UCxDQUFDLEdBQUM7QUFBakUsVUFBK0csS0FBSzZULElBQUwsQ0FBVWhILElBQXpILEVBQStISSxPQUEvSCxDQUF1SSxNQUF2SSxFQUE4SSxLQUFLNEcsSUFBTCxDQUFVMkgsS0FBVixDQUFnQjVMLEVBQTlKLEVBQWtLM0MsT0FBbEssQ0FBMEssZUFBMUssRUFBMExqRCxDQUExTCxDQUFuSjtBQUFnVixhQUFLNEcsT0FBTCxDQUFhb0ssT0FBYixDQUFxQixLQUFLTSxZQUFMLEdBQWtCaFYsQ0FBQyxDQUFDLG1FQUFELENBQUQsQ0FBdUVvTixRQUF2RSxDQUFnRixvQkFBaEYsRUFBc0dnRyxJQUF0RyxDQUEyRztBQUFDL0ssYUFBRyxFQUFDMUUsQ0FBTDtBQUFPM0MsZ0JBQU0sRUFBQyxLQUFLbVUsa0JBQUwsQ0FBd0JuVSxNQUF0QztBQUE2Q1IsZUFBSyxFQUFDLEtBQUsyVSxrQkFBTCxDQUF3QjNVLEtBQTNFO0FBQWlGNFUscUJBQVcsRUFBQztBQUE3RixTQUEzRyxDQUF2QyxHQUFvUHZZLENBQUMsSUFBRUEsQ0FBQyxFQUF4UDtBQUEyUCxPQUFsbkIsTUFBdW5CQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQWh2TjtBQUFpdk53WSxTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFJeFksQ0FBQyxHQUFDd1EsS0FBSyxDQUFDdFUsT0FBTixDQUFjLENBQWQsRUFBaUJ1YyxTQUF2QjtBQUFpQ3pZLE9BQUMsSUFBRUEsQ0FBQyxLQUFHLEtBQUs5RCxPQUFMLENBQWEsQ0FBYixDQUFQLElBQXdCc1UsS0FBSyxDQUFDdFUsT0FBTixDQUFjZSxNQUFkLENBQXFCLEtBQUtmLE9BQTFCLENBQXhCO0FBQTJELEtBQTkxTjtBQUErMU53UixRQUFJLEVBQUMsY0FBUzdRLENBQVQsRUFBVztBQUFDLFVBQUltRCxDQUFDLEdBQUMsS0FBS3FSLE1BQUwsQ0FBWXdFLFFBQWxCO0FBQTJCN1YsT0FBQyxDQUFDMFQsS0FBRixDQUFRLEVBQVIsR0FBWTFULENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQyxLQUFLNlQsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnNELE9BQWxCLElBQTJCLENBQUMwSCxFQUFFLENBQUMsS0FBSzVFLElBQUwsQ0FBVXBVLEdBQVgsQ0FBcEM7QUFBb0R3VixlQUFPLENBQUM4RCxRQUFSLElBQWtCLENBQUMvWSxDQUFuQixJQUFzQmlWLE9BQU8sQ0FBQ25FLElBQVIsRUFBdEIsRUFBcUM2QyxLQUFLLENBQUNrSSxZQUFOLEVBQXJDLEVBQTBEMVksQ0FBQyxFQUEzRDtBQUE4RCxPQUF0SSxFQUF1SSxJQUF2SSxDQUFSLENBQVosRUFBa0tBLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsYUFBSzJZLFFBQUwsSUFBZ0I1RyxFQUFFLENBQUNqRyxHQUFILENBQU8sS0FBSzhNLEdBQVosQ0FBaEIsRUFBaUM1WSxDQUFDLEVBQWxDO0FBQXFDLE9BQXpELEVBQTBELElBQTFELENBQVIsQ0FBbEssRUFBMk9BLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUM0VCxnQkFBUSxDQUFDa0IsTUFBVCxDQUFnQixLQUFLcEUsSUFBTCxDQUFVcEcsT0FBVixDQUFrQjJELFFBQWxDLEdBQTRDak8sQ0FBQyxFQUE3QztBQUFnRCxPQUFwRSxFQUFxRSxJQUFyRSxDQUFSLENBQTNPLEVBQStUQSxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDOFIsZUFBTyxDQUFDbEIsT0FBUixDQUFnQixLQUFLRixJQUFMLENBQVVwRyxPQUFWLENBQWtCc0UsSUFBbEMsR0FBd0MsS0FBS2hDLElBQUwsQ0FBVXpKLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3dNLHdCQUFMLElBQWdDblgsQ0FBQyxFQUFqQztBQUFvQyxTQUF2RCxFQUF3RCxJQUF4RCxDQUFWLENBQXhDO0FBQWlILE9BQXJJLEVBQXNJLElBQXRJLENBQVIsQ0FBL1QsRUFBb2RBLENBQUMsQ0FBQzBULEtBQUYsQ0FBUXZRLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsYUFBS3dZLEtBQUwsSUFBYTdILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLEtBQUtGLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JzRSxJQUFqQyxDQUFiLEVBQW9EbUQsRUFBRSxDQUFDK0MsTUFBSCxFQUFwRCxFQUFnRSxLQUFLakMsUUFBTCxFQUFoRSxFQUFnRmxDLE1BQU0sQ0FBQytCLGNBQVAsRUFBaEYsRUFBd0cxUyxDQUFDLEVBQXpHO0FBQTRHLE9BQWhJLEVBQWlJLElBQWpJLENBQVIsQ0FBcGQsRUFBb21CLEtBQUtrTSxPQUFMLE1BQWdCbE0sQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxhQUFLa1ksV0FBTCxDQUFpQi9VLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMzSyxXQUFDO0FBQUcsU0FBdkIsQ0FBakI7QUFBMkMsT0FBL0QsRUFBZ0UsSUFBaEUsQ0FBUixDQUFwbkIsRUFBbXNCLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCd0UsSUFBbEIsSUFBd0I5TyxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDd1EsYUFBSyxDQUFDcUksWUFBTixDQUFtQjdZLENBQW5CO0FBQXNCLE9BQTFDLEVBQTJDLElBQTNDLENBQVIsQ0FBM3RCLEVBQXF4QkEsQ0FBQyxDQUFDMFQsS0FBRixDQUFRdlEsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDLENBQU47QUFBQSxZQUFRc0ksQ0FBQyxHQUFDLEtBQUt1TCxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJDLE9BQTFCLENBQWtDQyxJQUE1QztBQUFpRGlELGNBQU0sQ0FBQ3VCLGNBQVAsQ0FBc0IsS0FBS3hCLElBQUwsQ0FBVWhILElBQWhDLEdBQXNDaUgsTUFBTSxDQUFDTCxPQUFQLEtBQWlCbkwsQ0FBQyxHQUFDLEtBQUt1TCxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJsUSxNQUExQixDQUFpQ29RLElBQW5DLEVBQXdDLGVBQWF2SyxDQUFDLENBQUN1RyxJQUFGLENBQU8sS0FBS2dILElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J3TyxNQUF6QixDQUFiLElBQStDLEtBQUtwSSxJQUFMLENBQVVwRyxPQUFWLENBQWtCd08sTUFBbEIsQ0FBeUJ2UCxJQUF6QixDQUE4Qm5HLE1BQTlCLENBQXhHLENBQXRDLEVBQXFMLEtBQUtzTixJQUFMLENBQVVwRyxPQUFWLENBQWtCd0UsSUFBbEIsS0FBeUJqUyxDQUFDLElBQUcyVCxLQUFLLENBQUNxSSxZQUFOLENBQW1CLFlBQVU7QUFBQyxZQUFFaGMsQ0FBRixHQUFJLENBQUosSUFBT21ELENBQUMsRUFBUjtBQUFXLFNBQXpDLENBQTdCLENBQXJMLEVBQThQMlEsTUFBTSxDQUFDakQsSUFBUCxDQUFZLFlBQVU7QUFBQyxZQUFFN1EsQ0FBRixHQUFJLENBQUosSUFBT21ELENBQUMsRUFBUjtBQUFXLFNBQWxDLEVBQW1DLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJsUSxNQUExQixDQUFpQ29RLElBQXBFLENBQTlQLEVBQXdVLEtBQUsrRixLQUFMLENBQVcsWUFBVTtBQUFDLFlBQUU1VyxDQUFGLEdBQUksQ0FBSixJQUFPbUQsQ0FBQyxFQUFSO0FBQVcsU0FBakMsRUFBa0NtRixDQUFsQyxDQUF4VSxFQUE2VzRNLEVBQUUsQ0FBQ2dCLGNBQUgsQ0FBa0IsWUFBVTtBQUFDLFlBQUVsVyxDQUFGLEdBQUksQ0FBSixJQUFPbUQsQ0FBQyxFQUFSO0FBQVcsU0FBeEMsRUFBeUMyUSxNQUFNLENBQUNhLE1BQVAsR0FBYyxDQUFkLEdBQWdCck0sQ0FBekQsQ0FBN1csRUFBeWF3TCxNQUFNLENBQUNhLE1BQVAsSUFBZU8sRUFBRSxDQUFDckUsSUFBSCxDQUFRLElBQVIsRUFBYSxDQUFiLEdBQWdCaUQsTUFBTSxDQUFDYSxNQUFQLEdBQWMsQ0FBQyxDQUE5QyxJQUFpRE8sRUFBRSxDQUFDckUsSUFBSCxDQUFRLElBQVIsRUFBYSxDQUFiLENBQTFkO0FBQTBlLFlBQUk3RyxDQUFDLEdBQUMsS0FBSzZKLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J5TyxhQUF4QjtBQUFzQyx1QkFBYTVWLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdDLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxDQUFDMEMsSUFBRixDQUFPbkcsTUFBUCxFQUFjLEtBQUs0USxTQUFuQixDQUF4QjtBQUFzRCxPQUEzb0IsRUFBNG9CLElBQTVvQixDQUFSLENBQXJ4QixFQUFnN0NoVSxDQUFDLENBQUMwVCxLQUFGLENBQVF2USxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLGFBQUs0VixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCL1ksQ0FBQyxJQUFFQSxDQUFDLEVBQXJCLEVBQXdCbUQsQ0FBQyxFQUF6QjtBQUE0QixPQUFoRCxFQUFpRCxJQUFqRCxDQUFSLENBQWg3QztBQUFnL0MsS0FBMzNRO0FBQTQzUXlULFNBQUssRUFBQyxlQUFTelQsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQ3dMLE1BQU0sQ0FBQ0wsT0FBUCxHQUFlLGFBQVduTixDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCLEtBQUs2VCxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJDLE9BQTFCLENBQWtDQyxJQUF4RSxHQUE2RSxDQUFuRjtBQUFxRixXQUFLeFIsT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCdkQsSUFBdEIsR0FBNkJ3RCxNQUE3QixDQUFvQy9MLENBQUMsSUFBRSxDQUF2QyxFQUF5QyxDQUF6QyxFQUEyQ25GLENBQTNDO0FBQThDLEtBQW5oUjtBQUFvaFIyTixRQUFJLEVBQUMsY0FBUzNOLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLFVBQUcsS0FBS1gsT0FBUixFQUFnQjtBQUFDLGFBQUs4YyxXQUFMLElBQW1CLEtBQUt2TixLQUFMLEVBQW5CO0FBQWdDLFlBQUl0RyxDQUFDLEdBQUMsYUFBV2hDLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzdNLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIsS0FBSzZULElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQkMsT0FBMUIsQ0FBa0NFLElBQS9EO0FBQW9FLGFBQUt6QixPQUFMLE9BQWlCL0csQ0FBQyxHQUFDLENBQW5CLEdBQXNCLEtBQUtqSixPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JDLE1BQXRCLENBQTZCL0wsQ0FBN0IsRUFBK0IsQ0FBL0IsRUFBaUMsbUJBQWpDLEVBQXFEaEMsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFLek8sT0FBTCxDQUFheVIsSUFBYixJQUFvQixLQUFLaUksUUFBTCxHQUFjLENBQUMsQ0FBbkMsRUFBcUNwRixLQUFLLENBQUN5SSxjQUFOLENBQXFCLEtBQUtqRixTQUExQixDQUFyQyxFQUEwRWhVLENBQUMsSUFBRUEsQ0FBQyxFQUE5RTtBQUFpRixTQUFwRyxFQUFxRyxJQUFyRyxDQUFyRCxDQUF0QjtBQUF1TCxPQUE1UyxNQUFpVEEsQ0FBQyxJQUFFQSxDQUFDLEVBQUo7QUFBTyxLQUEvMVI7QUFBZzJSaVIsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS0ksTUFBTCxDQUFZd0UsUUFBWixDQUFxQm5DLEtBQXJCLENBQTJCLEVBQTNCLEdBQStCLEtBQUt4WCxPQUFMLElBQWMsS0FBS0EsT0FBTCxDQUFhK1UsSUFBYixDQUFrQixDQUFDLENBQW5CLENBQTdDLEVBQW1FLEtBQUt4RixLQUFMLEVBQW5FO0FBQWdGLEtBQWg4UjtBQUFpOFJ1TixlQUFXLEVBQUMsdUJBQVU7QUFBQyxXQUFLYixZQUFMLEtBQW9CLEtBQUtBLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIzTSxHQUFyQixHQUF5QixlQUF6QixFQUF5QyxLQUFLMk0sWUFBTCxDQUFrQnZhLE1BQWxCLEVBQXpDLEVBQW9FLEtBQUt1YSxZQUFMLEdBQWtCLElBQTFHO0FBQWdILEtBQXhrUztBQUF5a1N2YSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLcVQsSUFBTCxJQUFZLEtBQUsrSCxXQUFMLEVBQVosRUFBK0IsS0FBSzljLE9BQUwsSUFBYyxLQUFLQSxPQUFMLENBQWEwQixNQUFiLEVBQTdDLEVBQW1FLEtBQUtzYixNQUFMLEtBQWMxSSxLQUFLLENBQUN5SSxjQUFOLENBQXFCLEtBQUtqRixTQUExQixHQUFxQyxLQUFLa0YsTUFBTCxHQUFZLENBQUMsQ0FBaEUsQ0FBbkUsRUFBc0ksS0FBSzNCLFlBQUwsS0FBb0IsS0FBS0EsWUFBTCxDQUFrQjlMLEtBQWxCLElBQTBCLEtBQUs4TCxZQUFMLEdBQWtCLElBQTVDLEVBQWlELEtBQUtILFVBQUwsR0FBZ0IsSUFBakUsRUFBc0UsS0FBS0MsU0FBTCxHQUFlLElBQXpHLENBQXRJLEVBQXFQLEtBQUt6QixRQUFMLEdBQWMsQ0FBQyxDQUFwUSxFQUFzUSxLQUFLdUQsT0FBTCxHQUFhLENBQUMsQ0FBcFI7QUFBc1IsS0FBajNTO0FBQWszUzFOLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtpTSxVQUFMLEtBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JqTSxLQUFoQixJQUF3QixLQUFLaU0sVUFBTCxHQUFnQixJQUExRCxHQUFnRSxLQUFLTSxVQUFMLEtBQWtCLEtBQUtBLFVBQUwsQ0FBZ0J2TSxLQUFoQixJQUF3QixLQUFLdU0sVUFBTCxHQUFnQixJQUExRCxDQUFoRSxFQUFnSSxLQUFLQyxrQkFBTCxFQUFoSSxFQUEwSixLQUFLVCxPQUFMLEdBQWEsQ0FBQyxDQUF4SztBQUEwSyxLQUE3aVQ7QUFBOGlUUyxzQkFBa0IsRUFBQyw4QkFBVTtBQUFDLFdBQUtSLGFBQUwsS0FBcUIvTCxZQUFZLENBQUMsS0FBSytMLGFBQU4sQ0FBWixFQUFpQyxLQUFLQSxhQUFMLEdBQW1CLElBQXpFO0FBQStFLEtBQTNwVDtBQUE0cFQyQixrQkFBYyxFQUFDLHdCQUFTcFosQ0FBVCxFQUFXO0FBQUMsVUFBSW5ELENBQUMsR0FBQyxLQUFLNlQsSUFBTCxDQUFVcEcsT0FBVixDQUFrQnFFLFFBQWxCLElBQTRCLElBQUUsS0FBSytHLE1BQXpDOztBQUFnRCxjQUFPLEtBQUtrRCxHQUFaO0FBQWlCLGFBQUksV0FBSjtBQUFnQixhQUFJLFFBQUo7QUFBYSxjQUFHLENBQUMsS0FBS2xJLElBQUwsQ0FBVXNGLE9BQVgsSUFBb0IsQ0FBQ25aLENBQXhCLEVBQTBCLE9BQU8sQ0FBUDtBQUFTOztBQUFNLGFBQUksU0FBSjtBQUFjLGNBQUcsQ0FBQyxLQUFLNlQsSUFBTCxDQUFVc0YsT0FBZCxFQUFzQixPQUFPLENBQVA7QUFBM0g7O0FBQW9JLFVBQUk3USxDQUFDLEdBQUMsYUFBVyxLQUFLeVQsR0FBaEIsR0FBb0IsS0FBSy9CLFVBQXpCLEdBQW9DLEtBQUtaLElBQS9DO0FBQW9ELG9CQUFZLEtBQUsyQyxHQUFqQixLQUF1QjVZLENBQUMsR0FBQ29ILElBQUksQ0FBQ0MsR0FBTCxDQUFTckgsQ0FBVCxFQUFXMlEsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQWpDLENBQXpCO0FBQWtFLFVBQUlrRCxDQUFKO0FBQUEsVUFBTUMsQ0FBQyxHQUFDM0IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLdkUsS0FBTCxDQUFXK0MsS0FBbkI7QUFBeUIsYUFBTSxhQUFXLEtBQUtpVixHQUFoQixJQUFxQixnQkFBYyxLQUFLQSxHQUF4QyxLQUE4QzlSLENBQUMsR0FBQyxNQUFoRCxHQUF3RDNCLENBQUMsQ0FBQ2tELEdBQUYsQ0FBTTtBQUFDMUUsYUFBSyxFQUFDM0QsQ0FBQyxHQUFDO0FBQVQsT0FBTixDQUF4RCxFQUE4RTZHLENBQUMsR0FBQ2hDLFVBQVUsQ0FBQ00sQ0FBQyxDQUFDNFMsV0FBRixFQUFELENBQTFGLEVBQTRHNVMsQ0FBQyxDQUFDa0QsR0FBRixDQUFNO0FBQUMxRSxhQUFLLEVBQUNtRDtBQUFQLE9BQU4sQ0FBNUcsRUFBNkhELENBQW5JO0FBQXFJLEtBQS9uVTtBQUFnb1V3UyxpQkFBYSxFQUFDLHVCQUFTclosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQyxFQUFOO0FBQUEsVUFBUzBCLENBQUMsR0FBQzhKLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXhCLEdBQWYsQ0FBbUIsS0FBS3dCLE9BQXhCLENBQVg7QUFBNENXLE9BQUMsS0FBR2dLLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbk0sR0FBRixDQUFNbUMsQ0FBTixDQUFMLENBQUQsRUFBZ0JzRyxDQUFDLENBQUN3RyxJQUFGLENBQU85QyxDQUFQLEVBQVMsVUFBUzdHLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDc0csU0FBQyxDQUFDdEcsQ0FBRCxDQUFELENBQUt5YyxFQUFMLENBQVEsVUFBUixLQUFxQm5VLENBQUMsQ0FBQytILElBQUYsQ0FBTy9KLENBQUMsQ0FBQ3RHLENBQUQsQ0FBRCxDQUFLNlEsSUFBTCxFQUFQLENBQXJCO0FBQXlDLE9BQWhFLENBQWhCO0FBQWtGLFVBQUk1RyxDQUFDLEdBQUMsS0FBSzVLLE9BQUwsQ0FBYXFkLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBTjtBQUE2QyxXQUFLcmQsT0FBTCxDQUFhMlUsV0FBYixDQUF5QixlQUF6QjtBQUEwQyxVQUFJOUosQ0FBQyxHQUFDLEtBQUs3SyxPQUFMLENBQWFxZCxRQUFiLENBQXNCLGdCQUF0QixDQUFOO0FBQThDLFdBQUtyZCxPQUFMLENBQWFxVSxRQUFiLENBQXNCLGdCQUF0QixHQUF3Q0ksTUFBTSxDQUFDelUsT0FBUCxDQUFlbU0sR0FBZixDQUFtQjtBQUFDbVIsa0JBQVUsRUFBQztBQUFaLE9BQW5CLENBQXhDLEVBQWtGeFosQ0FBQyxFQUFuRixFQUFzRjJRLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZW1NLEdBQWYsQ0FBbUI7QUFBQ21SLGtCQUFVLEVBQUM7QUFBWixPQUFuQixDQUF0RixFQUFpSTFTLENBQUMsSUFBRSxLQUFLNUssT0FBTCxDQUFhcVUsUUFBYixDQUFzQixlQUF0QixDQUFwSSxFQUEyS3hKLENBQUMsSUFBRSxLQUFLN0ssT0FBTCxDQUFhMlUsV0FBYixDQUF5QixnQkFBekIsQ0FBOUssRUFBeU4xTixDQUFDLENBQUN3RyxJQUFGLENBQU94RSxDQUFQLEVBQVMsVUFBU25GLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM4USxJQUFGO0FBQVMsT0FBaEMsQ0FBek47QUFBMlAsS0FBMXBWO0FBQTJwVjhMLGdCQUFZLEVBQUMsd0JBQVU7QUFBQyxXQUFLM0osTUFBTCxJQUFjLEtBQUs2RixVQUFMLEdBQWdCLEtBQUtqRixJQUFMLENBQVVwRyxPQUFWLENBQWtCb1AsU0FBaEQsRUFBMEQsS0FBS0MsV0FBTCxHQUFpQixDQUFDLENBQTVFLEVBQThFLElBQUVDLFFBQVEsQ0FBQyxLQUFLMWQsT0FBTCxDQUFhbU0sR0FBYixDQUFpQixXQUFqQixDQUFELENBQVYsS0FBNEMsS0FBS3NOLFVBQUwsR0FBZ0IsQ0FBQyxDQUE3RCxDQUE5RSxFQUE4SSxJQUFFaUUsUUFBUSxDQUFDLEtBQUsxZCxPQUFMLENBQWFtTSxHQUFiLENBQWlCLFlBQWpCLENBQUQsQ0FBVixLQUE2QyxLQUFLc1IsV0FBTCxHQUFpQixDQUFDLENBQS9ELENBQTlJO0FBQWdOLEtBQW40VjtBQUFvNFZoQixZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLYyxZQUFMO0FBQW9CLFVBQUl6WixDQUFDLEdBQUMsS0FBSzJWLFVBQUwsR0FBZ0IsV0FBaEIsR0FBNEIsS0FBS2pGLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0J5RSxFQUFwRDtBQUF1RCxXQUFLNkosR0FBTCxJQUFVLEtBQUsxYyxPQUFMLENBQWEyVSxXQUFiLENBQXlCLFdBQVMsS0FBSytILEdBQXZDLENBQVYsRUFBc0QsS0FBSzFjLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0IsV0FBU3ZRLENBQS9CLENBQXRELEVBQXdGLEtBQUs0WSxHQUFMLEdBQVM1WSxDQUFqRztBQUFtRyxLQUF0a1c7QUFBdWtXNlMsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBRyxLQUFLcEYsT0FBUixFQUFnQjtBQUFDLGFBQUt2UixPQUFMO0FBQWEsWUFBSWlKLENBQUMsR0FBQ2hDLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXNOLE1BQU0sQ0FBQ3dDLGdCQUFQLEVBQVosQ0FBTjtBQUFBLFlBQTZDblQsQ0FBQyxHQUFDbUQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZLEtBQUtnSyxVQUFqQixDQUEvQztBQUFBLFlBQTRFeFEsQ0FBQyxHQUFDLEtBQUtvQyxTQUFuRjtBQUE2RixhQUFLMFosUUFBTDtBQUFnQixZQUFJOVIsQ0FBQyxHQUFDO0FBQUNxSCxjQUFJLEVBQUMwTCxRQUFRLENBQUMvYyxDQUFDLENBQUN3TCxHQUFGLENBQU0sY0FBTixDQUFELENBQWQ7QUFBc0M0SyxhQUFHLEVBQUMyRyxRQUFRLENBQUMvYyxDQUFDLENBQUN3TCxHQUFGLENBQU0sYUFBTixDQUFEO0FBQWxELFNBQU47O0FBQWdGLFlBQUcsY0FBWSxLQUFLdVEsR0FBakIsSUFBc0IsS0FBS2lCLGdCQUE5QixFQUErQztBQUFDLGNBQUkvUyxDQUFDLEdBQUMsQ0FBTjtBQUFRLGVBQUt1UyxhQUFMLENBQW1CbFcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxpQkFBS2tQLGdCQUFMLENBQXNCUCxFQUF0QixDQUF5QixVQUF6QixNQUF1Q3hTLENBQUMsR0FBQyxLQUFLK1MsZ0JBQUwsQ0FBc0IvQixVQUF0QixDQUFpQyxDQUFDLENBQWxDLENBQXpDO0FBQStFLFdBQWxHLEVBQW1HLElBQW5HLENBQW5CLEdBQTZIaFIsQ0FBQyxHQUFDRCxDQUFDLENBQUNxSCxJQUFKLEtBQVdySCxDQUFDLENBQUNxSCxJQUFGLEdBQU9wSCxDQUFsQixDQUE3SDtBQUFrSjs7QUFBQTNCLFNBQUMsQ0FBQ3hCLEtBQUYsSUFBUyxJQUFFa0QsQ0FBQyxDQUFDcUgsSUFBYixFQUFrQi9JLENBQUMsQ0FBQ2hCLE1BQUYsSUFBVSxJQUFFMEMsQ0FBQyxDQUFDb00sR0FBaEM7QUFBb0MsWUFBSWxNLENBQUo7QUFBQSxZQUFNQyxDQUFOO0FBQUEsWUFBUUMsQ0FBQyxHQUFDO0FBQUN0RCxlQUFLLEVBQUMsQ0FBQyxDQUFSO0FBQVVRLGdCQUFNLEVBQUMsQ0FBQyxDQUFDLEtBQUt3VixXQUFQLElBQW9CLENBQUMsS0FBS2pKLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JrRSxRQUFsQixDQUEyQndCO0FBQWpFLFNBQVY7QUFBQSxZQUE4RTlJLENBQUMsR0FBQ1IsR0FBRyxDQUFDQyxNQUFKLENBQVd4QixDQUFYLEVBQWFuRixDQUFiLEVBQWVpSCxDQUFmLENBQWhGO0FBQUEsWUFBa0dFLENBQUMsR0FBQ2hFLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWTZELENBQVosQ0FBcEc7QUFBQSxZQUFtSDRTLENBQUMsSUFBRSxLQUFLck0sT0FBTCxFQUFhLENBQWYsQ0FBcEg7QUFBQSxZQUFzSXNNLENBQUMsR0FBQyxhQUFXLEtBQUtuQixHQUF4SjtBQUFBLFlBQTRKb0IsQ0FBQyxHQUFDRCxDQUFDLEdBQUMsS0FBS2xELFVBQU4sR0FBaUIsS0FBS1osSUFBckw7QUFBQSxZQUEwTGdFLENBQUMsR0FBQ0YsQ0FBQyxHQUFDLEtBQUsvQyxhQUFOLEdBQW9CLEtBQUtoQixPQUF0TjtBQUFBLFlBQThOdFIsQ0FBQyxHQUFDcVYsQ0FBQyxHQUFDLEtBQUtoRCxTQUFOLEdBQWdCLEtBQUtYLEdBQXRQO0FBQUEsWUFBMFA4RCxDQUFDLEdBQUMsQ0FBQyxDQUFDRCxDQUE5UDs7QUFBZ1EsZ0JBQU8sS0FBS3JCLEdBQVo7QUFBaUIsZUFBSSxTQUFKO0FBQWMsZ0JBQUl1QixDQUFDLEdBQUNoWCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVk4RCxDQUFaLENBQU47QUFBcUIsaUJBQUs2TyxPQUFMLEtBQWVoUCxDQUFDLEdBQUMsS0FBS2dQLE9BQVAsRUFBZSxLQUFLcUQsYUFBTCxDQUFtQmxXLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsbUJBQUksSUFBSTNLLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxDQUFkLEdBQWlCO0FBQUM4WixpQkFBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0JqUyxDQUFDLENBQUN4RCxLQUF0QixDQUFGO0FBQStCLG9CQUFJOUcsQ0FBQyxHQUFDc0ksQ0FBQyxDQUFDaEIsTUFBRixHQUFTZ0QsQ0FBQyxDQUFDaEQsTUFBakI7QUFBd0J0SCxpQkFBQyxHQUFDaWQsQ0FBRixLQUFNM1MsQ0FBQyxHQUFDVCxHQUFHLENBQUNDLE1BQUosQ0FBVztBQUFDaEQsdUJBQUssRUFBQ3dELENBQUMsQ0FBQ3hELEtBQVQ7QUFBZVEsd0JBQU0sRUFBQ2lELElBQUksQ0FBQ0UsR0FBTCxDQUFTSCxDQUFDLENBQUNoRCxNQUFGLElBQVUyVixDQUFDLEdBQUNqZCxDQUFaLENBQVQsRUFBd0IsQ0FBeEI7QUFBdEIsaUJBQVgsRUFBNkRzSyxDQUE3RCxFQUErREYsQ0FBL0QsQ0FBUixHQUEyRWpILENBQUMsRUFBNUU7QUFBK0U7O0FBQUE4WixlQUFDLEdBQUMsS0FBS1YsY0FBTCxDQUFvQmpTLENBQUMsQ0FBQ3hELEtBQXRCLENBQUYsRUFBK0IsQ0FBQyxDQUFDLEtBQUsrTSxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0UsUUFBbEIsQ0FBMkJ3QixDQUE1QixJQUErQjhKLENBQUMsR0FBQzNTLENBQUMsQ0FBQ2hELE1BQUosR0FBV2dCLENBQUMsQ0FBQ2hCLE1BQTVDLElBQW9ENlYsQ0FBQyxJQUFFLFdBQVNBLENBQUMsQ0FBQzNSLEdBQUYsQ0FBTSxTQUFOLENBQWhFLElBQWtGeVIsQ0FBQyxJQUFFLEtBQUczUyxDQUFDLENBQUNoRCxNQUEzRixNQUFxRytWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS0osQ0FBQyxHQUFDLENBQVAsRUFBUzNTLENBQUMsR0FBQ2dULENBQWhILENBQS9CO0FBQWtKLGFBQTdULEVBQThULElBQTlULENBQW5CLEVBQXVWblQsQ0FBdlYsQ0FBOUIsR0FBeVhnVCxDQUFDLElBQUVBLENBQUMsQ0FBQzNSLEdBQUYsQ0FBTTtBQUFDMUUsbUJBQUssRUFBQ3dELENBQUMsQ0FBQ3hELEtBQUYsR0FBUTtBQUFmLGFBQU4sQ0FBNVgsRUFBd1pvRCxDQUFDLEdBQUM7QUFBQ3BELG1CQUFLLEVBQUN3RCxDQUFDLENBQUN4RCxLQUFUO0FBQWVRLG9CQUFNLEVBQUNnRCxDQUFDLENBQUNoRCxNQUFGLEdBQVMyVjtBQUEvQixhQUExWjtBQUE0Yjs7QUFBTSxlQUFJLFFBQUo7QUFBYSxpQkFBSzlELE9BQUwsS0FBZWhQLENBQUMsR0FBQ2lULENBQUYsRUFBSSxLQUFLWixhQUFMLENBQW1CbFcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFDbVAsQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0JqUyxDQUFDLENBQUN4RCxLQUF0QixDQUFILEtBQWtDLE1BQUl3RCxDQUFDLENBQUNoRCxNQUF4QyxLQUFpRCtWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS0osQ0FBQyxHQUFDLENBQXhEO0FBQTJELGFBQTlFLEVBQStFLElBQS9FLENBQW5CLEVBQXdHOVMsQ0FBeEcsQ0FBbkIsR0FBK0hELENBQUMsR0FBQ0ksQ0FBakk7QUFBbUk7O0FBQU0sZUFBSSxXQUFKO0FBQWdCLGdCQUFJaVQsQ0FBQyxHQUFDLEVBQU47QUFBU0gsYUFBQyxJQUFFRyxDQUFDLENBQUNsTixJQUFGLENBQU8rTSxDQUFQLENBQUgsRUFBYSxLQUFLWixhQUFMLENBQW1CbFcsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxrQkFBRyxDQUFDc1AsQ0FBQyxJQUFFdlYsQ0FBSixLQUFRc1YsQ0FBQyxDQUFDM1IsR0FBRixDQUFNO0FBQUMxRSxxQkFBSyxFQUFDO0FBQVAsZUFBTixDQUFSLEVBQThCbVcsQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0J6SSxNQUFNLENBQUN5QyxjQUFQLENBQXNCelAsS0FBMUMsQ0FBaEMsRUFBaUZzVyxDQUFDLElBQUVILENBQUMsR0FBQyxLQUFHM1UsQ0FBQyxDQUFDaEIsTUFBOUYsRUFBcUcsSUFBRytWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS3hWLENBQVIsRUFBVTtBQUFDLG9CQUFJMUUsQ0FBQyxHQUFDLEtBQUtnVyxPQUFMLENBQWFzRCxFQUFiLENBQWdCLFVBQWhCLENBQU47QUFBa0MscUJBQUt0RCxPQUFMLENBQWFySSxJQUFiLElBQW9CbU0sQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0J6SSxNQUFNLENBQUN5QyxjQUFQLENBQXNCelAsS0FBMUMsQ0FBdEIsRUFBdUUzRCxDQUFDLElBQUUsS0FBS2dXLE9BQUwsQ0FBYXRJLElBQWIsRUFBMUU7QUFBOEYsZUFBM0ksTUFBZ0pvTSxDQUFDLEdBQUMsQ0FBRjtBQUFJM1MsZUFBQyxHQUFDVCxHQUFHLENBQUNDLE1BQUosQ0FBVztBQUFDaEQscUJBQUssRUFBQ3dCLENBQUMsQ0FBQ3hCLEtBQVQ7QUFBZVEsc0JBQU0sRUFBQ2lELElBQUksQ0FBQ0UsR0FBTCxDQUFTLENBQVQsRUFBV25DLENBQUMsQ0FBQ2hCLE1BQUYsR0FBUzJWLENBQXBCO0FBQXRCLGVBQVgsRUFBeUQzUyxDQUF6RCxFQUEyREYsQ0FBM0QsQ0FBRixFQUFnRUYsQ0FBQyxHQUFDSSxDQUFsRTtBQUFvRSxhQUFoVixFQUFpVixJQUFqVixDQUFuQixFQUEwV2lULENBQTFXLENBQWIsRUFBMFgsS0FBSzNNLE9BQUwsQ0FBYXBGLEdBQWIsQ0FBaUI7QUFBQyxnQ0FBaUI7QUFBbEIsYUFBakIsQ0FBMVg7QUFBcnFCOztBQUFza0M0UixTQUFDLElBQUVBLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLE1BQUQsR0FBUSxNQUFWLENBQUQsRUFBSCxFQUF3QixLQUFLaGUsT0FBTCxDQUFhLENBQUNnZSxDQUFDLEdBQUMsUUFBRCxHQUFVLEtBQVosSUFBbUIsT0FBaEMsRUFBeUMsZUFBekMsQ0FBeEIsRUFBa0YsS0FBS2hlLE9BQUwsQ0FBYSxDQUFDZ2UsQ0FBQyxHQUFDLEtBQUQsR0FBTyxRQUFULElBQW1CLE9BQWhDLEVBQXlDLGdCQUF6QyxDQUFsRixFQUE2SSxLQUFLek0sT0FBTCxDQUFhcEYsR0FBYixDQUFpQmxCLENBQWpCLENBQTdJLEVBQWlLLEtBQUttUCxVQUFMLENBQWdCak8sR0FBaEIsQ0FBb0J0QixDQUFwQixDQUFqSyxFQUF3TCxLQUFLb1IsWUFBTCxJQUFtQixLQUFLQSxZQUFMLENBQWtCNUIsSUFBbEIsQ0FBdUJwUCxDQUF2QixDQUEzTSxFQUFxTyxLQUFLOEksT0FBTCxHQUFhO0FBQUNELFdBQUMsRUFBQ2pKLENBQUMsQ0FBQzVDLE1BQUYsSUFBVSxnQkFBYyxLQUFLeVUsR0FBbkIsR0FBdUJrQixDQUF2QixHQUF5QixDQUFuQyxJQUFzQ25KLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JqUCxNQUEvRDtBQUFzRTRMLFdBQUMsRUFBQztBQUF4RSxTQUFsUCxFQUE2VCxLQUFLbUosTUFBTCxHQUFZLENBQUMsS0FBS1MsV0FBTixJQUFtQixLQUFLakosSUFBTCxDQUFVcEcsT0FBVixDQUFrQmtFLFFBQWxCLENBQTJCd0IsQ0FBOUMsSUFBaUQsSUFBRSxLQUFLQyxPQUFMLENBQWFELENBQXpZLEVBQTJZLEtBQUtxSyxXQUFMLEdBQWlCUCxDQUE1WixFQUE4WixLQUFLUSxRQUFMLEdBQWN6VCxDQUE1YSxFQUE4YSxLQUFLeVIsa0JBQUwsR0FBd0JuUixDQUF0YyxFQUF3YyxLQUFLb1QscUJBQUwsR0FBMkJ4VCxDQUFuZSxFQUFxZXlKLEtBQUssQ0FBQyxDQUFDLEtBQUswSSxNQUFMLEdBQVksS0FBWixHQUFrQixRQUFuQixJQUE2QixVQUE5QixDQUFMLENBQStDLEtBQUtsRixTQUFwRCxDQUFyZSxFQUFvaUIsS0FBS3JGLFFBQUwsRUFBcGlCO0FBQW9qQjtBQUFDLEtBQS81YTtBQUFnNmFBLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFVBQUcsS0FBS2xCLE9BQVIsRUFBZ0I7QUFBQyxZQUFJek4sQ0FBQyxHQUFDLEtBQUtzWSxrQkFBWDtBQUFBLFlBQThCemIsQ0FBQyxHQUFDLEtBQUswZCxxQkFBckM7QUFBQSxZQUEyRHBWLENBQUMsR0FBQztBQUFDOE4sYUFBRyxFQUFDLEtBQUd0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBekIsR0FBZ0MsS0FBR3RILENBQUMsQ0FBQ3NILE1BQTFDO0FBQWlEK0osY0FBSSxFQUFDLEtBQUd5QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCelAsS0FBekIsR0FBK0IsS0FBRzlHLENBQUMsQ0FBQzhHO0FBQTFGLFNBQTdEO0FBQUEsWUFBOEprRCxDQUFDLEdBQUM7QUFBQ29NLGFBQUcsRUFBQzlOLENBQUMsQ0FBQzhOLEdBQUYsR0FBTWpULENBQUMsQ0FBQ21FLE1BQWI7QUFBb0IrSixjQUFJLEVBQUMvSSxDQUFDLENBQUMrSTtBQUEzQixTQUFoSztBQUFBLFlBQWlNcEgsQ0FBQyxHQUFDLENBQW5NO0FBQUEsWUFBcU1DLENBQUMsR0FBQyxhQUFXLEtBQUs2UixHQUFoQixHQUFvQixLQUFLL0IsVUFBekIsR0FBb0MsS0FBS1osSUFBaFA7O0FBQXFQLGdCQUFPLEtBQUsyQyxHQUFaO0FBQWlCLGVBQUksV0FBSjtBQUFnQnpULGFBQUMsQ0FBQzhOLEdBQUYsR0FBTSxNQUFJdEMsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQmpQLE1BQXRCLEdBQTZCLEtBQUtrVyxXQUF0QyxJQUFtRCxLQUFHeGQsQ0FBQyxDQUFDc0gsTUFBOUQsRUFBcUUwQyxDQUFDLEdBQUM7QUFBQ29NLGlCQUFHLEVBQUN0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBdEIsR0FBNkIsS0FBS2tXLFdBQXZDO0FBQW1Ebk0sa0JBQUksRUFBQyxDQUF4RDtBQUEwRHNNLG9CQUFNLEVBQUM7QUFBakUsYUFBdkUsRUFBZ0oxVCxDQUFDLEdBQUMsS0FBS3VULFdBQXZKO0FBQW1LOztBQUFNLGVBQUksUUFBSjtBQUFheFQsYUFBQyxHQUFDO0FBQUNvTSxpQkFBRyxFQUFDLE1BQUw7QUFBWS9FLGtCQUFJLEVBQUMsQ0FBakI7QUFBbUJzTSxvQkFBTSxFQUFDO0FBQTFCLGFBQUY7QUFBdk47O0FBQXNQLFlBQUcsSUFBRSxLQUFLdkssT0FBTCxDQUFhRCxDQUFsQixFQUFvQjtBQUFDLGNBQUloSixDQUFDLEdBQUN3SixLQUFLLENBQUNpSyxNQUFOLEVBQU47O0FBQXFCLGtCQUFPdFYsQ0FBQyxDQUFDOE4sR0FBRixHQUFNLElBQUVqTSxDQUFDLENBQUNnSixDQUFGLEdBQUksS0FBS0MsT0FBTCxDQUFhRCxDQUF6QixFQUEyQixLQUFLNEksR0FBdkM7QUFBNEMsaUJBQUksU0FBSjtBQUFjLGlCQUFJLFdBQUo7QUFBZ0IvUixlQUFDLENBQUNvTSxHQUFGLEdBQU10QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBdEIsR0FBNkIsS0FBS2tXLFdBQXhDO0FBQW9EOztBQUFNLGlCQUFJLFFBQUo7QUFBYSxrQkFBSXBULENBQUMsR0FBQzlCLENBQUMsQ0FBQzhOLEdBQUYsR0FBTWpULENBQUMsQ0FBQ21FLE1BQVIsR0FBZXdNLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JqUCxNQUEzQztBQUFBLGtCQUFrRCtDLENBQUMsR0FBQyxDQUFDLENBQUQsR0FBRy9CLENBQUMsQ0FBQzhOLEdBQXpEOztBQUE2RCxrQkFBR3BNLENBQUMsQ0FBQzJULE1BQUYsR0FBU3ZULENBQVQsRUFBVyxLQUFLMFAsV0FBTCxDQUFpQnRPLEdBQWpCLENBQXFCO0FBQUM0SyxtQkFBRyxFQUFDL0w7QUFBTCxlQUFyQixDQUFYLEVBQXlDLElBQUUsS0FBS3dPLE1BQW5ELEVBQTBEO0FBQUMsb0JBQUl2TyxDQUFDLEdBQUN3SixNQUFNLENBQUN6VSxPQUFQLENBQWVvZCxFQUFmLENBQWtCLFVBQWxCLENBQU47QUFBb0NuUyxpQkFBQyxJQUFFd0osTUFBTSxDQUFDelUsT0FBUCxDQUFld1IsSUFBZixFQUFIO0FBQXlCLG9CQUFJb00sQ0FBQyxHQUFDLEtBQUtyRCxjQUFMLENBQW9CRixJQUFwQixDQUF5QixPQUF6QixDQUFOO0FBQXdDLHFCQUFLRSxjQUFMLENBQW9CaUUsVUFBcEIsQ0FBK0IsT0FBL0I7QUFBd0Msb0JBQUlYLENBQUMsR0FBQ0gsUUFBUSxDQUFDLEtBQUtuRCxjQUFMLENBQW9CcE8sR0FBcEIsQ0FBd0IsWUFBeEIsQ0FBRCxDQUFkO0FBQXNELHFCQUFLb08sY0FBTCxDQUFvQkYsSUFBcEIsQ0FBeUI7QUFBQzNWLHVCQUFLLEVBQUNrWjtBQUFQLGlCQUF6QixHQUFvQzNTLENBQUMsSUFBRXdKLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXlSLElBQWYsRUFBdkM7QUFBNkQsb0JBQUlxTSxDQUFDLEdBQUMsS0FBS3ZELGNBQUwsQ0FBb0IvYixHQUFwQixDQUF3QixLQUFLZ2MsVUFBN0IsQ0FBTjtBQUFBLG9CQUErQ3VELENBQUMsR0FBQyxLQUFHLEtBQUtoSyxPQUFMLENBQWFELENBQWpFO0FBQW1FZ0ssaUJBQUMsQ0FBQzNSLEdBQUYsQ0FBTTtBQUFDLGdDQUFhMFIsQ0FBQyxJQUFFN1MsQ0FBQyxHQUFDK1MsQ0FBSjtBQUFmLGlCQUFOLEdBQThCLEtBQUtoRCxjQUFMLElBQXFCLEtBQUtBLGNBQUwsQ0FBb0I1TyxHQUFwQixDQUF3QjtBQUFDbVMsd0JBQU0sRUFBQ3ZUO0FBQVIsaUJBQXhCLENBQW5EO0FBQXVGOztBQUFucUI7QUFBcXFCLFNBQS9zQixNQUFtdEIsYUFBVyxLQUFLMlIsR0FBaEIsSUFBcUIsS0FBSzFjLE9BQUwsQ0FBYXllLElBQWIsQ0FBa0Isb0RBQWxCLEVBQXdFRCxVQUF4RSxDQUFtRixPQUFuRixDQUFyQjs7QUFBaUgzVCxTQUFDLElBQUVBLENBQUMsQ0FBQ3NCLEdBQUYsQ0FBTXhCLENBQU4sQ0FBSCxFQUFZLEtBQUs1SCxTQUFMLENBQWVvSixHQUFmLENBQW1CO0FBQUNtUyxnQkFBTSxFQUFDMVQ7QUFBUixTQUFuQixDQUFaLEVBQTJDLEtBQUsyRyxPQUFMLENBQWFwRixHQUFiLENBQWlCbEQsQ0FBakIsQ0FBM0MsRUFBK0QsS0FBS21SLFVBQUwsQ0FBZ0JqTyxHQUFoQixDQUFvQmxELENBQXBCLENBQS9EO0FBQXNGO0FBQUM7QUFBMzBkLEdBQXRCLENBQTNlLEVBQSswZXFRLEVBQWoxZSxDQUEzc1o7QUFBQSxNQUFnaTRCSCxFQUFoaTRCO0FBQUEsTUFBbWk0QkMsRUFBbmk0QjtBQUFBLE1BQXNpNEJDLEVBQXRpNEI7O0FBQXlpNEIsV0FBU0MsRUFBVCxHQUFhO0FBQUMsV0FBTyxLQUFLbk0sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkJoRSxNQUFNLENBQUNpRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCLENBQVA7QUFBMEQ7O0FBQUEsTUFBSTRKLEtBQUssR0FBQztBQUFDbkgsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXO0FBQUMsV0FBSzlELE9BQUwsR0FBYThELENBQWIsRUFBZSxLQUFLc1IsS0FBTCxHQUFXLEVBQTFCLEVBQTZCLEtBQUttRSxHQUFMLEdBQVMsQ0FBdEMsRUFBd0MsS0FBS2xFLFNBQUwsR0FBZSxFQUF2RDtBQUEwRCxLQUFsRjtBQUFtRjNFLFFBQUksRUFBQyxjQUFTNU0sQ0FBVCxFQUFXO0FBQUMsV0FBS21VLEtBQUwsR0FBV25VLENBQVgsRUFBYSxLQUFLK1QsU0FBTCxFQUFiLEVBQThCNVEsQ0FBQyxDQUFDd0csSUFBRixDQUFPM0osQ0FBUCxFQUFTbUQsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxhQUFLeVUsS0FBTCxDQUFXcEUsSUFBWCxDQUFnQixJQUFJa0ksSUFBSixDQUFTdlksQ0FBVCxFQUFXbUQsQ0FBQyxHQUFDLENBQWIsRUFBZSxLQUFLbVUsS0FBTCxDQUFXOVYsTUFBMUIsQ0FBaEI7QUFBbUQsT0FBekUsRUFBMEUsSUFBMUUsQ0FBVCxDQUE5QjtBQUF3SCxLQUE1TjtBQUE2TnFQLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQyxLQUFLbU0sS0FBTCxDQUFXdFIsQ0FBQyxHQUFDLENBQWIsQ0FBTjtBQUFzQixXQUFLeVEsSUFBTCxJQUFXLEtBQUtBLElBQUwsQ0FBVWdGLEdBQVYsS0FBZ0J0USxDQUFDLENBQUNzUSxHQUE3QixLQUFtQyxLQUFLaEYsSUFBTCxHQUFVdEwsQ0FBVixFQUFZME0sVUFBVSxDQUFDbkUsSUFBWCxDQUFnQjFOLENBQWhCLENBQVosRUFBK0IyUSxNQUFNLENBQUNpQyxtQkFBUCxFQUEvQixFQUE0RHpOLENBQUMsQ0FBQ3VJLElBQUYsQ0FBT3ZLLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUM5TixTQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLE9BQTFCLEVBQTJCLElBQTNCLENBQVAsQ0FBL0Y7QUFBeUksS0FBL1k7QUFBZ1orZCxnQ0FBNEIsRUFBQyxzQ0FBU3pWLENBQVQsRUFBVztBQUFDLFVBQUkwQixDQUFDLEdBQUMsQ0FBTjtBQUFRLGFBQU8xRCxDQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBSzJILEtBQVosRUFBa0IsVUFBU3RSLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM2VCxJQUFGLENBQU94VSxPQUFQLElBQWdCVyxDQUFDLENBQUM2VCxJQUFGLENBQU94VSxPQUFQLEtBQWlCaUosQ0FBakMsS0FBcUMwQixDQUFDLEdBQUM3RyxDQUFDLEdBQUMsQ0FBekM7QUFBNEMsT0FBNUUsR0FBOEU2RyxDQUFyRjtBQUF1RixLQUF4aEI7QUFBeWhCZ1UsbUJBQWUsRUFBQywyQkFBVTtBQUFDLFVBQUkxVixDQUFDLEdBQUMsQ0FBTjtBQUFRLGFBQU9oQyxDQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBSzJILEtBQVosRUFBa0IsVUFBU3RSLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUMyYSxPQUFGLElBQVdyUyxDQUFDLEVBQVo7QUFBZSxPQUEvQyxHQUFpREEsQ0FBeEQ7QUFBMEQsS0FBdG5CO0FBQXVuQjRPLGFBQVMsRUFBQyxxQkFBVTtBQUFDNVEsT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUsySCxLQUFaLEVBQWtCLFVBQVN0UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDZSxNQUFGO0FBQVcsT0FBM0MsR0FBNkMsS0FBSzBULEtBQUwsR0FBVyxFQUF4RDtBQUEyRCxLQUF2c0I7QUFBd3NCdUgsZ0JBQVksRUFBQyxzQkFBUzFULENBQVQsRUFBVzBCLENBQVgsRUFBYTtBQUFDLFVBQUlDLENBQUMsR0FBQyxFQUFOO0FBQVMzRCxPQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBSzJILEtBQVosRUFBa0JuTyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM0WSxHQUFGLEtBQVEsS0FBS2hGLElBQUwsQ0FBVWdGLEdBQWxCLElBQXVCM08sQ0FBQyxDQUFDb0csSUFBRixDQUFPclEsQ0FBUCxDQUF2QjtBQUFpQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUFsQjtBQUFpRixVQUFJa0ssQ0FBQyxHQUFDLElBQUVELENBQUMsQ0FBQ3pJLE1BQVY7QUFBaUIsYUFBTzBJLENBQUMsR0FBQyxDQUFGLEdBQUk1QixDQUFDLElBQUVBLENBQUMsRUFBUixHQUFXaEMsQ0FBQyxDQUFDd0csSUFBRixDQUFPN0MsQ0FBUCxFQUFTLFVBQVM5RyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDOFEsSUFBRixDQUFPLFlBQVU7QUFBQ3hJLFdBQUMsSUFBRSxFQUFFNEIsQ0FBRixHQUFJLENBQVAsSUFBVTVCLENBQUMsRUFBWDtBQUFjLFNBQWhDLEVBQWlDMEIsQ0FBakM7QUFBb0MsT0FBM0QsQ0FBWCxFQUF3RUMsQ0FBQyxDQUFDekksTUFBakY7QUFBd0YsS0FBdDZCO0FBQXU2QnFhLGdCQUFZLEVBQUMsd0JBQVU7QUFBQ3ZWLE9BQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLMkgsS0FBWixFQUFrQm5PLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQzRZLEdBQUYsS0FBUSxLQUFLaEYsSUFBTCxDQUFVZ0YsR0FBbEIsSUFBdUI1WSxDQUFDLENBQUNvVSxJQUFGLEVBQXZCO0FBQWdDLE9BQXRELEVBQXVELElBQXZELENBQWxCO0FBQWdGLEtBQS9nQztBQUFnaENBLFFBQUksRUFBQyxnQkFBVTtBQUFDOU4sT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUsySCxLQUFaLEVBQWtCLFVBQVN0UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDb1UsSUFBRjtBQUFTLE9BQXpDO0FBQTJDLEtBQTNrQztBQUE0a0M2SixrQkFBYyxFQUFDLHdCQUFTOWEsQ0FBVCxFQUFXO0FBQUM0RCxhQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBdkIsSUFBMEIsS0FBS3dXLEtBQUwsQ0FBVztBQUFDaEwsU0FBQyxFQUFDL1AsQ0FBQyxDQUFDZ2IsS0FBTDtBQUFXaEwsU0FBQyxFQUFDaFEsQ0FBQyxDQUFDaWI7QUFBZixPQUFYLEdBQWtDLEtBQUtDLGVBQUwsRUFBNUQsSUFBb0YsS0FBS0MsZUFBTCxHQUFxQnpRLFVBQVUsQ0FBQ3ZILENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBS29RLEtBQUwsQ0FBVztBQUFDaEwsV0FBQyxFQUFDL1AsQ0FBQyxDQUFDZ2IsS0FBTDtBQUFXaEwsV0FBQyxFQUFDaFEsQ0FBQyxDQUFDaWI7QUFBZixTQUFYLEdBQWtDLEtBQUtDLGVBQUwsRUFBbEM7QUFBeUQsT0FBNUUsRUFBNkUsSUFBN0UsQ0FBRCxFQUFvRixFQUFwRixDQUFuSDtBQUEyTSxLQUFsekM7QUFBbXpDRSxzQkFBa0IsRUFBQyw4QkFBVTtBQUFDLFdBQUtELGVBQUwsS0FBdUJ6UCxZQUFZLENBQUMsS0FBS3lQLGVBQU4sQ0FBWixFQUFtQyxLQUFLQSxlQUFMLEdBQXFCLElBQS9FO0FBQXFGLEtBQXQ2QztBQUF1NkNFLGlCQUFhLEVBQUMseUJBQVU7QUFBQ3ZULGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUIsS0FBS3FTLGVBQTFCLElBQTJDblksQ0FBQyxDQUFDaEYsUUFBUSxDQUFDNkYsZUFBVixDQUFELENBQTRCa0MsRUFBNUIsQ0FBK0IsV0FBL0IsRUFBMkMsS0FBS29WLGVBQUwsR0FBcUJuWSxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS21RLGNBQWIsRUFBNEIsSUFBNUIsQ0FBaEUsQ0FBM0M7QUFBOEksS0FBOWtEO0FBQStrRFMsZ0JBQVksRUFBQyx3QkFBVTtBQUFDLE9BQUN6VCxPQUFPLENBQUNtQixXQUFULElBQXNCLEtBQUtxUyxlQUEzQixLQUE2Q25ZLENBQUMsQ0FBQ2hGLFFBQVEsQ0FBQzZGLGVBQVYsQ0FBRCxDQUE0QndPLEdBQTVCLENBQWdDLFdBQWhDLEVBQTRDLEtBQUs4SSxlQUFqRCxHQUFrRSxLQUFLQSxlQUFMLEdBQXFCLElBQXZGLEVBQTRGLEtBQUtGLGtCQUFMLEVBQXpJO0FBQW9LLEtBQTN3RDtBQUE0d0RJLGVBQVcsRUFBQyxxQkFBU3hiLENBQVQsRUFBVztBQUFDLFdBQUt5YixVQUFMLENBQWdCemIsQ0FBaEIsTUFBcUIsS0FBS3VSLFNBQUwsQ0FBZXJFLElBQWYsQ0FBb0IsS0FBS29FLEtBQUwsQ0FBV3RSLENBQUMsR0FBQyxDQUFiLENBQXBCLEdBQXFDLE1BQUksS0FBS3VSLFNBQUwsQ0FBZWxULE1BQW5CLElBQTJCLEtBQUtnZCxhQUFMLEVBQXJGO0FBQTJHLEtBQS80RDtBQUFnNURLLGlCQUFhLEVBQUMseUJBQVU7QUFBQyxXQUFLbkssU0FBTCxHQUFlLEVBQWY7QUFBa0IsS0FBMzdEO0FBQTQ3RDBILGtCQUFjLEVBQUMsd0JBQVNwYyxDQUFULEVBQVc7QUFBQyxXQUFLMFUsU0FBTCxHQUFlcE8sQ0FBQyxDQUFDd1ksSUFBRixDQUFPLEtBQUtwSyxTQUFaLEVBQXNCLFVBQVN2UixDQUFULEVBQVc7QUFBQyxlQUFPQSxDQUFDLENBQUNnVSxTQUFGLEtBQWNuWCxDQUFyQjtBQUF1QixPQUF6RCxDQUFmLEVBQTBFLEtBQUswVSxTQUFMLENBQWVsVCxNQUFmLEdBQXNCLENBQXRCLElBQXlCLEtBQUtrZCxZQUFMLEVBQW5HO0FBQXVILEtBQTlrRTtBQUEra0VFLGNBQVUsRUFBQyxvQkFBU3RXLENBQVQsRUFBVztBQUFDLFVBQUkwQixDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQVMsYUFBTzFELENBQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLNEgsU0FBWixFQUFzQixVQUFTdlIsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsWUFBR0EsQ0FBQyxDQUFDbVgsU0FBRixLQUFjN08sQ0FBakIsRUFBbUIsT0FBTSxFQUFFMEIsQ0FBQyxHQUFDLENBQUMsQ0FBTCxDQUFOO0FBQWMsT0FBckUsR0FBdUVBLENBQTlFO0FBQWdGLEtBQS9yRTtBQUFnc0VrVSxTQUFLLEVBQUMsZUFBUy9hLENBQVQsRUFBVztBQUFDLFdBQUs0YixHQUFMLEdBQVM1YixDQUFUO0FBQVcsS0FBN3RFO0FBQTh0RXlhLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUl6YSxDQUFDLEdBQUN3USxLQUFLLENBQUNDLElBQVo7QUFBQSxVQUFpQnRMLENBQUMsR0FBQ2hDLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWXNOLE1BQU0sQ0FBQ3lDLGNBQW5CLENBQW5CO0FBQUEsVUFBc0R2VyxDQUFDLEdBQUNzRyxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBS3VZLEdBQWpCLENBQXhEO0FBQThFL2UsT0FBQyxDQUFDbVQsQ0FBRixJQUFLN00sQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU0VixTQUFWLEVBQUwsRUFBMkJsVCxDQUFDLEtBQUcsY0FBWUEsQ0FBQyxDQUFDNFksR0FBZCxJQUFtQixnQkFBYzVZLENBQUMsQ0FBQzRZLEdBQXRDLENBQUQsSUFBNkMsSUFBRTVZLENBQUMsQ0FBQ3FhLFdBQWpELEtBQStEbFYsQ0FBQyxDQUFDaEIsTUFBRixJQUFVbkUsQ0FBQyxDQUFDcWEsV0FBM0UsQ0FBM0IsRUFBbUh4ZCxDQUFDLENBQUNtVCxDQUFGLElBQUtXLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JOLEdBQTVJO0FBQWdKLFVBQUlwTSxDQUFDLEdBQUM7QUFBQ2tKLFNBQUMsRUFBQyxDQUFIO0FBQUtDLFNBQUMsRUFBQzVJLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUNFLEdBQUwsQ0FBU3pLLENBQUMsQ0FBQ21ULENBQUYsR0FBSTdLLENBQUMsQ0FBQ2hCLE1BQWYsRUFBc0IsQ0FBdEIsQ0FBVCxFQUFrQyxDQUFsQztBQUFQLE9BQU47QUFBQSxVQUFtRDJDLENBQUMsR0FBQztBQUFDaUosU0FBQyxFQUFDLE9BQUg7QUFBV0MsU0FBQyxFQUFDO0FBQWIsT0FBckQ7QUFBQSxVQUE0RWpKLENBQUMsR0FBQyxFQUE5RTtBQUFpRixhQUFPNUQsQ0FBQyxDQUFDd0csSUFBRixDQUFPLElBQUkxQixLQUFKLENBQVUsR0FBVixDQUFQLEVBQXNCOUUsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ2tLLFNBQUMsQ0FBQ2xLLENBQUQsQ0FBRCxHQUFLdUssSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTLEtBQUduQyxDQUFDLENBQUMyQixDQUFDLENBQUNqSyxDQUFELENBQUYsQ0FBYixFQUFvQixDQUFwQixDQUFULEVBQWdDLENBQWhDLENBQUwsRUFBd0NnSyxDQUFDLENBQUNoSyxDQUFELENBQUQsSUFBTSxJQUFFLElBQUVrSyxDQUFDLENBQUNsSyxDQUFELENBQW5ELEVBQXVEZ0ssQ0FBQyxDQUFDaEssQ0FBRCxDQUFELElBQU1rSyxDQUFDLENBQUNsSyxDQUFELENBQTlELEVBQWtFZ0ssQ0FBQyxDQUFDaEssQ0FBRCxDQUFELEdBQUt1SyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsQ0FBQ2hLLENBQUQsQ0FBVixFQUFjLENBQWQsQ0FBVCxFQUEwQixDQUExQixDQUF2RTtBQUFvRyxPQUExSCxFQUEySCxJQUEzSCxDQUF0QixHQUF3SixLQUFLZ2YsTUFBTCxDQUFZaFYsQ0FBWixDQUF4SixFQUF1SyxLQUFLaVYsSUFBbkw7QUFBd0wsS0FBdnRGO0FBQXd0RkQsVUFBTSxFQUFDLGdCQUFTN2IsQ0FBVCxFQUFXO0FBQUMsV0FBSzhiLElBQUwsR0FBVTliLENBQVY7QUFBWSxLQUF2dkY7QUFBd3ZGa2IsbUJBQWUsRUFBQywyQkFBVTtBQUFDLFdBQUszSixTQUFMLENBQWVsVCxNQUFmLEdBQXNCLENBQXRCLElBQXlCOEUsQ0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUs0SCxTQUFaLEVBQXNCLFVBQVN2UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDOFIsUUFBRjtBQUFhLE9BQWpELENBQXpCO0FBQTRFO0FBQS8xRixHQUFWOztBQUEyMkYsV0FBU29OLElBQVQsR0FBZTtBQUFDLFNBQUsxUyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQmhFLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0I7QUFBbUQ7O0FBQUF6RCxHQUFDLENBQUNFLE1BQUYsQ0FBUzBZLElBQUksQ0FBQ3ZXLFNBQWQsRUFBd0I7QUFBQzZELGNBQVUsRUFBQyxvQkFBUzJTLE1BQVQsRUFBZ0I7QUFBQyxVQUFJMVIsT0FBTyxHQUFDMUQsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFjLEVBQTFCO0FBQUEsVUFBNkI3SSxJQUFJLEdBQUMsRUFBbEM7QUFBcUMsVUFBRyxhQUFXb0YsQ0FBQyxDQUFDdUcsSUFBRixDQUFPc1MsTUFBUCxDQUFkLEVBQTZCQSxNQUFNLEdBQUM7QUFBQzFmLFdBQUcsRUFBQzBmO0FBQUwsT0FBUCxDQUE3QixLQUFzRCxJQUFHQSxNQUFNLElBQUUsTUFBSUEsTUFBTSxDQUFDblcsUUFBdEIsRUFBK0I7QUFBQyxZQUFJM0osT0FBTyxHQUFDaUgsQ0FBQyxDQUFDNlksTUFBRCxDQUFiO0FBQXNCQSxjQUFNLEdBQUM7QUFBQzlmLGlCQUFPLEVBQUNBLE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQW9CSSxhQUFHLEVBQUNKLE9BQU8sQ0FBQ3FhLElBQVIsQ0FBYSxNQUFiLENBQXhCO0FBQTZDUCxpQkFBTyxFQUFDOVosT0FBTyxDQUFDcWEsSUFBUixDQUFhLHFCQUFiLENBQXJEO0FBQXlGMEYsZUFBSyxFQUFDL2YsT0FBTyxDQUFDcWEsSUFBUixDQUFhLG1CQUFiLENBQS9GO0FBQWlJaEssbUJBQVMsRUFBQ3JRLE9BQU8sQ0FBQ3FhLElBQVIsQ0FBYSx1QkFBYixDQUEzSTtBQUFpTDdNLGNBQUksRUFBQ3hOLE9BQU8sQ0FBQ3FhLElBQVIsQ0FBYSxrQkFBYixDQUF0TDtBQUF1TmpNLGlCQUFPLEVBQUNwTyxPQUFPLENBQUNxYSxJQUFSLENBQWEscUJBQWIsS0FBcUMyRixJQUFJLENBQUMsT0FBS2hnQixPQUFPLENBQUNxYSxJQUFSLENBQWEscUJBQWIsQ0FBTCxHQUF5QyxJQUExQyxDQUF6QyxJQUEwRjtBQUF6VCxTQUFQO0FBQW9VO0FBQUEsYUFBT3lGLE1BQU0sS0FBR0EsTUFBTSxDQUFDelAsU0FBUCxLQUFtQnlQLE1BQU0sQ0FBQ3pQLFNBQVAsR0FBaUIxQyxlQUFlLENBQUNtUyxNQUFNLENBQUMxZixHQUFSLENBQW5ELEdBQWlFMGYsTUFBTSxDQUFDdFMsSUFBUCxLQUFjM0wsSUFBSSxHQUFDMEwsVUFBVSxDQUFDdVMsTUFBTSxDQUFDMWYsR0FBUixDQUFmLEVBQTRCMGYsTUFBTSxDQUFDM0QsS0FBUCxHQUFhdGEsSUFBekMsRUFBOENpZSxNQUFNLENBQUN0UyxJQUFQLEdBQVkzTCxJQUFJLENBQUMyTCxJQUE3RSxDQUFwRSxDQUFOLEVBQThKc1MsTUFBTSxDQUFDM0QsS0FBUCxLQUFlMkQsTUFBTSxDQUFDM0QsS0FBUCxHQUFhNU8sVUFBVSxDQUFDdVMsTUFBTSxDQUFDMWYsR0FBUixDQUF0QyxDQUE5SixFQUFrTjBmLE1BQU0sSUFBRUEsTUFBTSxDQUFDMVIsT0FBZixHQUF1QjBSLE1BQU0sQ0FBQzFSLE9BQVAsR0FBZW5ILENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQUMsQ0FBVixFQUFZRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVlpSCxPQUFaLENBQVosRUFBaUNuSCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVkyWSxNQUFNLENBQUMxUixPQUFuQixDQUFqQyxDQUF0QyxHQUFvRzBSLE1BQU0sQ0FBQzFSLE9BQVAsR0FBZW5ILENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWWlILE9BQVosQ0FBclUsRUFBMFYwUixNQUFNLENBQUMxUixPQUFQLEdBQWVnRCxPQUFPLENBQUN3QyxNQUFSLENBQWVrTSxNQUFNLENBQUMxUixPQUF0QixFQUE4QjBSLE1BQU0sQ0FBQ3RTLElBQXJDLEVBQTBDc1MsTUFBTSxDQUFDM0QsS0FBakQsQ0FBelcsRUFBaWFsVixDQUFDLENBQUNFLE1BQUYsQ0FBUyxJQUFULEVBQWMyWSxNQUFkLENBQWphLEVBQXViLElBQTliO0FBQW1jO0FBQXI3QixHQUF4QjtBQUFnOUIsTUFBSWxLLE9BQU8sR0FBQztBQUFDcUssYUFBUyxFQUFDclUsT0FBTyxDQUFDTyxHQUFSLENBQVlHLFNBQVosSUFBdUJWLE9BQU8sQ0FBQ08sR0FBUixDQUFZQyxTQUE5QztBQUF3RGUsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXO0FBQUMsV0FBSzlELE9BQUwsR0FBYWlILENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0M1QyxJQUFsQyxFQUFiOztBQUFzRCxXQUFJLElBQUk5USxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsRUFBZixFQUFrQkEsQ0FBQyxFQUFuQixFQUFzQixLQUFLWCxPQUFMLENBQWFlLE1BQWIsQ0FBb0JrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGFBQVcxVCxDQUEvQixDQUFwQjs7QUFBdUQsV0FBS1gsT0FBTCxDQUFhZ0ssRUFBYixDQUFnQixPQUFoQixFQUF3Qi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUNnRyxjQUFNLENBQUNoRCxJQUFQO0FBQWMsT0FBakMsRUFBa0MsSUFBbEMsQ0FBeEIsR0FBaUUsS0FBS3pSLE9BQUwsQ0FBYWdLLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQW9DLFVBQVNsRyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDbEQsY0FBRjtBQUFtQixPQUFuRSxDQUFqRTtBQUFzSSxLQUF4VjtBQUF5VjhULFdBQU8sRUFBQyxpQkFBUzVRLENBQVQsRUFBVztBQUFDLFdBQUttYyxTQUFMLEtBQWlCLEtBQUtsSyxLQUFMLElBQVksS0FBSy9WLE9BQUwsQ0FBYTJVLFdBQWIsQ0FBeUIscUJBQW1CLEtBQUtvQixLQUFqRCxDQUFaLEVBQW9FLEtBQUttSyxnQkFBTCxFQUFwRSxFQUE0RixLQUFLbGdCLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0IscUJBQW1CdlEsQ0FBekMsQ0FBNUYsRUFBd0ksS0FBS2lTLEtBQUwsR0FBV2pTLENBQXBLO0FBQXVLLEtBQXBoQjtBQUFxaEJvYyxvQkFBZ0IsRUFBQyw0QkFBVTtBQUFDLFVBQUlwYyxDQUFDLEdBQUMsS0FBS2dTLFNBQVg7QUFBcUJoUyxPQUFDLElBQUUsS0FBSzhRLE1BQUwsRUFBSCxFQUFpQixLQUFLdUwsV0FBTCxHQUFpQjtBQUFDMVksYUFBSyxFQUFDLEtBQUt6SCxPQUFMLENBQWE0YixVQUFiLEVBQVA7QUFBaUMzVCxjQUFNLEVBQUMsS0FBS2pJLE9BQUwsQ0FBYTZiLFdBQWI7QUFBeEMsT0FBbEMsRUFBc0cvWCxDQUFDLElBQUUsS0FBS2dSLE1BQUwsRUFBekc7QUFBdUgsS0FBN3JCO0FBQThyQkYsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS2tCLFNBQUwsS0FBaUI3TyxDQUFDLENBQUNoRixRQUFRLENBQUM0UyxJQUFWLENBQUQsQ0FBaUI5VCxNQUFqQixDQUF3QixLQUFLZixPQUE3QixHQUFzQyxLQUFLOFYsU0FBTCxHQUFlLENBQUMsQ0FBdkU7QUFBMEUsS0FBMXhCO0FBQTJ4QmhCLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtnQixTQUFMLEtBQWlCLEtBQUs5VixPQUFMLENBQWE4VSxNQUFiLElBQXNCLEtBQUtnQixTQUFMLEdBQWUsQ0FBQyxDQUF2RDtBQUEwRCxLQUF2MkI7QUFBdzJCdEUsUUFBSSxFQUFDLGNBQVMxTixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxXQUFLK1ksUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQixLQUFLOUUsTUFBTCxFQUFqQixFQUErQixLQUFLa0MsTUFBTCxFQUEvQjtBQUE2QyxVQUFJN04sQ0FBQyxHQUFDcUwsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ0ksT0FBaEMsQ0FBd0NGLElBQXBELElBQTBELENBQWhFO0FBQUEsVUFBa0U3RyxDQUFDLEdBQUMsQ0FBQyxhQUFXMUQsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QnNJLENBQXhCLEtBQTRCLENBQWhHO0FBQWtHLFdBQUtqSixPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JDLE1BQXRCLENBQTZCckssQ0FBN0IsRUFBK0IsQ0FBL0IsRUFBaUM3RyxDQUFqQztBQUFvQyxLQUE5aUM7QUFBK2lDMk4sUUFBSSxFQUFDLGNBQVMzTixDQUFULEVBQVduRCxDQUFYLEVBQWFzSSxDQUFiLEVBQWU7QUFBQyxXQUFLeVEsUUFBTCxHQUFjLENBQUMsQ0FBZjtBQUFpQixVQUFJL08sQ0FBQyxHQUFDMkosS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ0ksT0FBaEMsQ0FBd0NELElBQXBELElBQTBELENBQWhFO0FBQUEsVUFBa0U3RyxDQUFDLEdBQUMsQ0FBQyxhQUFXM0QsQ0FBQyxDQUFDdUcsSUFBRixDQUFPN00sQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QmdLLENBQXhCLEtBQTRCLENBQWhHO0FBQWtHLFdBQUszSyxPQUFMLENBQWErVSxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JFLE9BQXRCLENBQThCckssQ0FBQyxJQUFFLENBQWpDLEVBQW1DM0QsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxhQUFLcUcsTUFBTCxJQUFjaFIsQ0FBQyxJQUFFQSxDQUFDLEVBQWxCO0FBQXFCLE9BQXhDLEVBQXlDLElBQXpDLENBQW5DO0FBQW1GLEtBQTF3QztBQUEyd0NnVCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFHLEtBQUttSixTQUFSLEVBQWtCO0FBQUMsYUFBS0UsV0FBTCxJQUFrQixLQUFLRCxnQkFBTCxFQUFsQjtBQUEwQyxZQUFJcGMsQ0FBQyxHQUFDd1EsS0FBSyxDQUFDQyxJQUFaO0FBQUEsWUFBaUI1VCxDQUFDLEdBQUMsQ0FBbkI7QUFBcUJtRCxTQUFDLElBQUUsZ0JBQWNBLENBQUMsQ0FBQzRZLEdBQW5CLElBQXdCNVksQ0FBQyxDQUFDcVosYUFBRixDQUFnQixZQUFVO0FBQUN4YyxXQUFDLEdBQUNtRCxDQUFDLENBQUNvWixjQUFGLENBQWlCekksTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQXZDLENBQUY7QUFBZ0QsU0FBM0UsQ0FBeEIsRUFBcUcsS0FBS3pILE9BQUwsQ0FBYW1NLEdBQWIsQ0FBaUI7QUFBQzRLLGFBQUcsRUFBQ3RDLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JOLEdBQXBCLEdBQXdCLEtBQUd0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCalAsTUFBakQsR0FBd0QsS0FBRyxLQUFLa1ksV0FBTCxDQUFpQmxZLE1BQTVFLEdBQW1GLEtBQUd0SCxDQUEzRjtBQUE2RnFSLGNBQUksRUFBQ3lDLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUFwQixHQUF5QixLQUFHeUMsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQWxELEdBQXdELEtBQUcsS0FBSzBZLFdBQUwsQ0FBaUIxWTtBQUE5SyxTQUFqQixDQUFyRztBQUE0UztBQUFDO0FBQTVwRCxHQUFaO0FBQUEsTUFBMHFEMlksT0FBTyxHQUFDO0FBQUNDLGFBQVMsRUFBQyxDQUFDLENBQVo7QUFBY0MsYUFBUyxFQUFDLENBQUMsQ0FBekI7QUFBMkJuVCxjQUFVLEVBQUMsc0JBQVU7QUFBQ3NILFlBQU0sQ0FBQ3RILFVBQVAsSUFBb0IsS0FBS2tULFNBQUwsSUFBZ0IsS0FBS0UsZUFBTCxFQUFwQztBQUEyRCxLQUE1RztBQUE2R0EsbUJBQWUsRUFBQywyQkFBVTtBQUFDLFdBQUtDLGdCQUFMLElBQXVCdlosQ0FBQyxDQUFDaEYsUUFBUSxDQUFDNkYsZUFBVixDQUFELENBQTRCa0MsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBdUMsZUFBdkMsRUFBdUQsS0FBS3dXLGdCQUFMLEdBQXNCdlosQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtnUyxRQUFiLEVBQXNCLElBQXRCLENBQTdFLEVBQTBHelcsRUFBMUcsQ0FBNkcsT0FBN0csRUFBcUgsS0FBSzBXLGtCQUFMLEdBQXdCelosQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtrUyxVQUFiLEVBQXdCLElBQXhCLENBQTdJLENBQXZCO0FBQW1NLEtBQTNVO0FBQTRVQyxrQkFBYyxFQUFDLDBCQUFVO0FBQUMsV0FBS0osZ0JBQUwsS0FBd0J2WixDQUFDLENBQUNoRixRQUFRLENBQUM2RixlQUFWLENBQUQsQ0FBNEJ3TyxHQUE1QixDQUFnQyxPQUFoQyxFQUF3QyxlQUF4QyxFQUF3RCxLQUFLa0ssZ0JBQTdELEVBQStFbEssR0FBL0UsQ0FBbUYsT0FBbkYsRUFBMkYsS0FBS29LLGtCQUFoRyxHQUFvSCxLQUFLQSxrQkFBTCxHQUF3QixJQUE1SSxFQUFpSixLQUFLRixnQkFBTCxHQUFzQixJQUEvTDtBQUFxTSxLQUEzaUI7QUFBNGlCRyxjQUFVLEVBQUMsb0JBQVM3YyxDQUFULEVBQVc7QUFBQ3dRLFdBQUssQ0FBQ3VLLEtBQU4sQ0FBWTtBQUFDaEwsU0FBQyxFQUFDL1AsQ0FBQyxDQUFDZ2IsS0FBTDtBQUFXaEwsU0FBQyxFQUFDaFEsQ0FBQyxDQUFDaWI7QUFBZixPQUFaO0FBQW1DLEtBQXRtQjtBQUF1bUIwQixZQUFRLEVBQUMsa0JBQVMzYyxDQUFULEVBQVc7QUFBQyxVQUFHLENBQUMsS0FBS3VjLFNBQVQsRUFBbUI7QUFBQ3ZjLFNBQUMsQ0FBQ3dHLGVBQUYsSUFBb0J4RyxDQUFDLENBQUNsRCxjQUFGLEVBQXBCO0FBQXVDLFlBQUlELENBQUMsR0FBQ21ELENBQUMsQ0FBQ0ksYUFBUjtBQUFzQixhQUFLeWMsVUFBTCxDQUFnQjdjLENBQWhCLEdBQW1Cc2MsT0FBTyxDQUFDNU8sSUFBUixDQUFhN1EsQ0FBYixDQUFuQjtBQUFtQztBQUFDLEtBQWp2QjtBQUFrdkI2USxRQUFJLEVBQUMsY0FBU3NPLE1BQVQsRUFBZ0I7QUFBQyxVQUFHLEtBQUtPLFNBQVIsRUFBa0IsS0FBS1EsWUFBTCxDQUFrQnpULEtBQWxCLENBQXdCZ1QsT0FBeEIsRUFBZ0NoWCxNQUFNLENBQUNpRSxJQUFQLENBQVkzQyxTQUFaLENBQWhDLEVBQWxCLEtBQThFO0FBQUMsWUFBSTBELE9BQU8sR0FBQzFELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBYyxFQUExQjtBQUFBLFlBQTZCK0gsUUFBUSxHQUFDL0gsU0FBUyxDQUFDLENBQUQsQ0FBL0M7QUFBbURBLGlCQUFTLENBQUMsQ0FBRCxDQUFULElBQWMsYUFBV3pELENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzlDLFNBQVMsQ0FBQyxDQUFELENBQWhCLENBQXpCLEtBQWdEK0gsUUFBUSxHQUFDL0gsU0FBUyxDQUFDLENBQUQsQ0FBbEIsRUFBc0IwRCxPQUFPLEdBQUMsRUFBOUU7O0FBQWtGLFlBQUk2SixLQUFLLEdBQUMsRUFBVjtBQUFBLFlBQWE2SSxXQUFiO0FBQUEsWUFBeUJwWCxTQUFTLEdBQUNELENBQUMsQ0FBQ0MsU0FBRixDQUFZb1csTUFBWixDQUFuQzs7QUFBdUQsZ0JBQU9nQixXQUFXLEdBQUM3WixDQUFDLENBQUN1RyxJQUFGLENBQU9zUyxNQUFQLENBQW5CO0FBQW1DLGVBQUksUUFBSjtBQUFhLGVBQUksUUFBSjtBQUFhLGdCQUFJdEwsSUFBSSxHQUFDLElBQUlxTCxJQUFKLENBQVNDLE1BQVQsRUFBZ0IxUixPQUFoQixDQUFUO0FBQUEsZ0JBQWtDMlMsSUFBSSxHQUFDLDJCQUF2QztBQUFBLGdCQUFtRUMsWUFBWSxHQUFDLEVBQWhGOztBQUFtRixnQkFBR3hNLElBQUksQ0FBQ3VMLEtBQVIsRUFBYztBQUFDLGtCQUFHclcsU0FBSCxFQUFhO0FBQUMsb0JBQUl1WCxRQUFRLEdBQUNoYSxDQUFDLENBQUMsZ0NBQThCQSxDQUFDLENBQUM2WSxNQUFELENBQUQsQ0FBVXpGLElBQVYsQ0FBZSxtQkFBZixDQUE5QixHQUFrRSxJQUFuRSxDQUFkO0FBQXVGNEcsd0JBQVEsQ0FBQ0MsTUFBVCxDQUFnQixNQUFJSCxJQUFKLEdBQVMsR0FBekIsRUFBOEJ0VCxJQUE5QixDQUFtQyxVQUFTM0osQ0FBVCxFQUFXOUQsT0FBWCxFQUFtQjtBQUFDaUgsbUJBQUMsQ0FBQ0UsTUFBRixDQUFTNlosWUFBVCxFQUFzQmhCLElBQUksQ0FBQyxRQUFNL1ksQ0FBQyxDQUFDakgsT0FBRCxDQUFELENBQVdxYSxJQUFYLENBQWdCMEcsSUFBaEIsS0FBdUIsRUFBN0IsSUFBaUMsSUFBbEMsQ0FBMUI7QUFBbUUsaUJBQTFILEdBQTRIRSxRQUFRLENBQUN4VCxJQUFULENBQWMsVUFBUzNKLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDOFIsMEJBQVEsSUFBRTlSLENBQUMsS0FBR21mLE1BQWQsS0FBdUJyTixRQUFRLEdBQUMzTyxDQUFDLEdBQUMsQ0FBbEMsR0FBcUNtVSxLQUFLLENBQUNqSCxJQUFOLENBQVcsSUFBSTZPLElBQUosQ0FBU2xmLENBQVQsRUFBV3NHLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWTZaLFlBQVosRUFBeUI1UyxPQUF6QixDQUFYLENBQVgsQ0FBckM7QUFBK0YsaUJBQTNILENBQTVIO0FBQXlQO0FBQUMsYUFBOVcsTUFBbVgxRSxTQUFTLElBQUV6QyxDQUFDLENBQUM2WSxNQUFELENBQUQsQ0FBVTFDLEVBQVYsQ0FBYSxNQUFJMkQsSUFBSixHQUFTLEdBQXRCLENBQVgsS0FBd0M5WixDQUFDLENBQUNFLE1BQUYsQ0FBUzZaLFlBQVQsRUFBc0JoQixJQUFJLENBQUMsUUFBTS9ZLENBQUMsQ0FBQzZZLE1BQUQsQ0FBRCxDQUFVekYsSUFBVixDQUFlMEcsSUFBZixLQUFzQixFQUE1QixJQUFnQyxJQUFqQyxDQUExQixHQUFrRXZNLElBQUksR0FBQyxJQUFJcUwsSUFBSixDQUFTQyxNQUFULEVBQWdCN1ksQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZNlosWUFBWixFQUF5QjVTLE9BQXpCLENBQWhCLENBQS9HLEdBQW1LNkosS0FBSyxDQUFDakgsSUFBTixDQUFXd0QsSUFBWCxDQUFuSzs7QUFBb0w7O0FBQU0sZUFBSSxPQUFKO0FBQVl2TixhQUFDLENBQUN3RyxJQUFGLENBQU9xUyxNQUFQLEVBQWMsVUFBU2hjLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLGtCQUFJc0ksQ0FBQyxHQUFDLElBQUk0VyxJQUFKLENBQVNsZixDQUFULEVBQVd5TixPQUFYLENBQU47QUFBMEI2SixtQkFBSyxDQUFDakgsSUFBTixDQUFXL0gsQ0FBWDtBQUFjLGFBQXBFO0FBQXpzQjs7QUFBK3dCLFlBQUlrWSxXQUFXLEdBQUM7QUFBQ3pHLGlCQUFPLEVBQUM7QUFBQ1osbUJBQU8sRUFBQyxDQUFDO0FBQVY7QUFBVCxTQUFoQjtBQUFBLFlBQXVDc0gsT0FBTyxHQUFDbkosS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTN0osT0FBVCxDQUFpQnlFLEVBQWhFO0FBQUEsWUFBbUV3TyxhQUFuRTtBQUFpRnBhLFNBQUMsQ0FBQ3dHLElBQUYsQ0FBT3dLLEtBQVAsRUFBYSxVQUFTblUsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNBLFdBQUMsQ0FBQ21aLE9BQUYsS0FBWXFILFdBQVcsQ0FBQ3pHLE9BQVosQ0FBb0JaLE9BQXBCLEdBQTRCLENBQUMsQ0FBekMsR0FBNEMsSUFBRWhXLENBQUYsSUFBS25ELENBQUMsQ0FBQ3lOLE9BQUYsQ0FBVXlFLEVBQVYsS0FBZXVPLE9BQXBCLEtBQThCemdCLENBQUMsQ0FBQ3lOLE9BQUYsQ0FBVXlFLEVBQVYsR0FBYXVPLE9BQTNDLENBQTVDO0FBQWdHLFNBQTNILEdBQTZIbmEsQ0FBQyxDQUFDd0csSUFBRixDQUFPd0ssS0FBUCxFQUFhLFVBQVNuVSxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsV0FBQyxHQUFDc0csQ0FBQyxDQUFDRSxNQUFGLENBQVN4RyxDQUFULEVBQVd3Z0IsV0FBWCxDQUFGO0FBQTBCLFNBQXJELENBQTdILEVBQW9MLENBQUMsQ0FBQzFPLFFBQUQsSUFBV0EsUUFBUSxHQUFDLENBQXJCLE1BQTBCQSxRQUFRLEdBQUMsQ0FBbkMsQ0FBcEwsRUFBME5BLFFBQVEsR0FBQ3dGLEtBQUssQ0FBQzlWLE1BQWYsS0FBd0JzUSxRQUFRLEdBQUN3RixLQUFLLENBQUM5VixNQUF2QyxDQUExTixFQUF5UXVILFNBQVMsS0FBRzJYLGFBQWEsR0FBQy9NLEtBQUssQ0FBQ29LLDRCQUFOLENBQW1Db0IsTUFBbkMsQ0FBakIsQ0FBVCxHQUFzRXJMLE1BQU0sQ0FBQ3lELFdBQVAsQ0FBbUJtSixhQUFuQixDQUF0RSxHQUF3RzVNLE1BQU0sQ0FBQy9ELElBQVAsQ0FBWXVILEtBQVosRUFBa0J4RixRQUFsQixDQUFqWDtBQUE2WTtBQUFDLEtBQWp3RTtBQUFrd0VvTyxnQkFBWSxFQUFDLHNCQUFTL2MsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLd2MsU0FBUixFQUFrQjtBQUFDLFlBQUkzZixDQUFDLEdBQUMsU0FBU21ELENBQVQsQ0FBV25ELENBQVgsRUFBYTtBQUFDLGNBQUlzSSxDQUFDLEdBQUNoQyxDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQU47QUFBZ0IsaUJBQU0sYUFBV3NJLENBQVgsR0FBYXRJLENBQWIsR0FBZSxZQUFVc0ksQ0FBVixJQUFhdEksQ0FBQyxDQUFDLENBQUQsQ0FBZCxHQUFrQm1ELENBQUMsQ0FBQ25ELENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBbkIsR0FBMEI4SSxDQUFDLENBQUNDLFNBQUYsQ0FBWS9JLENBQVosS0FBZ0JzRyxDQUFDLENBQUN0RyxDQUFELENBQUQsQ0FBSzBaLElBQUwsQ0FBVSxNQUFWLENBQWhCLEdBQWtDcFQsQ0FBQyxDQUFDdEcsQ0FBRCxDQUFELENBQUswWixJQUFMLENBQVUsTUFBVixDQUFsQyxHQUFvRCxDQUFDLENBQUMxWixDQUFDLENBQUNQLEdBQUosSUFBU08sQ0FBQyxDQUFDUCxHQUE5RztBQUFrSCxTQUFoSixDQUFpSjBELENBQWpKLENBQU47O0FBQTBKbkQsU0FBQyxLQUFHUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JpZ0IsSUFBaEIsR0FBcUIzZ0IsQ0FBeEIsQ0FBRDtBQUE0QjtBQUFDO0FBQXIrRSxHQUFsckQ7QUFBeXBJc0csR0FBQyxDQUFDRSxNQUFGLENBQVNELE1BQVQsRUFBZ0I7QUFBQ3NLLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXO0FBQUMsYUFBT3NjLE9BQU8sQ0FBQzVPLElBQVIsQ0FBYXBFLEtBQWIsQ0FBbUJnVCxPQUFuQixFQUEyQmhYLE1BQU0sQ0FBQ2lFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsR0FBbUQsSUFBMUQ7QUFBK0QsS0FBakY7QUFBa0YrRyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxhQUFPZ0QsTUFBTSxDQUFDaEQsSUFBUCxJQUFjLElBQXJCO0FBQTBCLEtBQTVIO0FBQTZIZ0csV0FBTyxFQUFDLG1CQUFVO0FBQUMsYUFBTzJJLE9BQU8sQ0FBQ1EsY0FBUixJQUF5QlIsT0FBTyxDQUFDQyxTQUFSLEdBQWtCLENBQUMsQ0FBNUMsRUFBOEMsSUFBckQ7QUFBMEQsS0FBMU07QUFBMk16SCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxhQUFPd0gsT0FBTyxDQUFDQyxTQUFSLEdBQWtCLENBQUMsQ0FBbkIsRUFBcUJELE9BQU8sQ0FBQ0csZUFBUixFQUFyQixFQUErQyxJQUF0RDtBQUEyRCxLQUF4UjtBQUF5UnZSLFlBQVEsRUFBQyxrQkFBU2xMLENBQVQsRUFBVztBQUFDLGFBQU9zYyxPQUFPLENBQUNFLFNBQVIsR0FBa0J4YyxDQUFsQixFQUFvQixJQUEzQjtBQUFnQyxLQUE5VTtBQUErVXlkLGtCQUFjLEVBQUMsd0JBQVN6ZCxDQUFULEVBQVc7QUFBQyxhQUFPc04sT0FBTyxDQUFDQyxRQUFSLENBQWlCcUIsSUFBakIsR0FBc0I1TyxDQUF0QixFQUF3QixJQUEvQjtBQUFvQztBQUE5WSxHQUFoQixHQUFpYSxDQUFDNEQsT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixHQUFXLENBQXZCLElBQTBCLGFBQVdwQixDQUFDLENBQUN1RyxJQUFGLENBQU85RixPQUFPLENBQUNFLE9BQWYsQ0FBWCxJQUFvQ0YsT0FBTyxDQUFDRSxPQUFSLEdBQWdCLENBQTlFLElBQWlGRixPQUFPLENBQUNDLFlBQVIsSUFBc0IsYUFBV1YsQ0FBQyxDQUFDdUcsSUFBRixDQUFPOUYsT0FBTyxDQUFDa0IsTUFBZixDQUFqQyxJQUF5RGxCLE9BQU8sQ0FBQ2tCLE1BQVIsR0FBZSxNQUExSixNQUFvS3dYLE9BQU8sQ0FBQzVPLElBQVIsR0FBYTRPLE9BQU8sQ0FBQ1MsWUFBekwsQ0FBamE7QUFBd21CLE1BQUlsTCxVQUFVLEdBQUM7QUFBQ3hJLGNBQVUsRUFBQyxvQkFBU3JKLENBQVQsRUFBVztBQUFDLFdBQUs5RCxPQUFMLEdBQWE4RCxDQUFiLEVBQWUsS0FBSzRSLFdBQUwsR0FBaUIsRUFBaEMsRUFBbUMsS0FBSzBCLFlBQUwsR0FBa0IsVUFBckQsRUFBZ0UsS0FBS29LLEtBQUwsR0FBVztBQUFDN1AsaUJBQVMsRUFBQyxFQUFYO0FBQWM4UCxzQkFBYyxFQUFDLEVBQTdCO0FBQWdDNVAsa0JBQVUsRUFBQztBQUEzQyxPQUEzRSxFQUEwSCxLQUFLc0MsS0FBTCxFQUExSCxFQUF1SSxLQUFLdU4sY0FBTCxFQUF2STtBQUE2SixLQUFyTDtBQUFzTHZOLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtuVSxPQUFMLENBQWFlLE1BQWIsQ0FBb0IsS0FBSzRnQixPQUFMLEdBQWExYSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHVCQUFwQixFQUE2Q3RULE1BQTdDLENBQW9ELEtBQUs2Z0IsT0FBTCxHQUFhM2EsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixzQkFBcEIsRUFBNEN0VCxNQUE1QyxDQUFtRCxLQUFLOGdCLFNBQUwsR0FBZTVhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0RBQXBCLEVBQXNFdFQsTUFBdEUsQ0FBNkUsS0FBSytnQixnQkFBTCxHQUFzQjdhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLEVBQWlEdFQsTUFBakQsQ0FBd0RrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNDQUFwQixDQUF4RCxFQUFxSHRULE1BQXJILENBQTRIa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQ0FBcEIsQ0FBNUgsQ0FBbkcsQ0FBbEUsRUFBMFZ0VCxNQUExVixDQUFpVyxLQUFLZ2hCLE9BQUwsR0FBYTlhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isc0JBQXBCLEVBQTRDdFQsTUFBNUMsQ0FBbUQsS0FBS2loQixNQUFMLEdBQVkvYSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUEvRCxDQUE5VyxFQUEwZHRULE1BQTFkLENBQWllLEtBQUtraEIsS0FBTCxHQUFXaGIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiw0Q0FBcEIsRUFBa0V0VCxNQUFsRSxDQUF5RSxLQUFLbWhCLFlBQUwsR0FBa0JqYixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixFQUFpRHRULE1BQWpELENBQXdEa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixzQ0FBcEIsQ0FBeEQsRUFBcUh0VCxNQUFySCxDQUE0SGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0NBQXBCLENBQTVILENBQTNGLENBQTVlLENBQWpFLENBQWpDO0FBQWcyQixLQUF2aUM7QUFBd2lDcU4sa0JBQWMsRUFBQywwQkFBVTtBQUFDLFdBQUtFLE9BQUwsQ0FBYW5CLFFBQWIsQ0FBc0IsZUFBdEIsRUFBc0MsT0FBdEMsRUFBOEN4WixDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUN3RyxlQUFGO0FBQW9CLFlBQUkzSixDQUFDLEdBQUNzRyxDQUFDLENBQUNuRCxDQUFDLENBQUM1QixNQUFILENBQUQsQ0FBWTBELE9BQVosQ0FBb0IsZUFBcEIsRUFBcUMsQ0FBckMsQ0FBTjtBQUFBLFlBQThDcUQsQ0FBQyxHQUFDdEksQ0FBQyxJQUFFc0csQ0FBQyxDQUFDdEcsQ0FBRCxDQUFELENBQUtrQixJQUFMLENBQVUsYUFBVixDQUFuRDtBQUE0RW9ILFNBQUMsS0FBRyxLQUFLa1osU0FBTCxDQUFlbFosQ0FBZixHQUFrQndMLE1BQU0sQ0FBQ3lELFdBQVAsQ0FBbUJqUCxDQUFuQixDQUFyQixDQUFEO0FBQTZDLE9BQWpLLEVBQWtLLElBQWxLLENBQTlDLEdBQXVOLEtBQUsyWSxPQUFMLENBQWEzZCxJQUFiLENBQWtCLE9BQWxCLEVBQTBCLFVBQVNILENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUN3RyxlQUFGO0FBQW9CLE9BQTFELENBQXZOLEVBQW1SLEtBQUt1WCxTQUFMLENBQWU1ZCxJQUFmLENBQW9CLE9BQXBCLEVBQTRCZ0QsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUsyVCxZQUFiLEVBQTBCLElBQTFCLENBQTVCLENBQW5SLEVBQWdWLEtBQUtILEtBQUwsQ0FBV2hlLElBQVgsQ0FBZ0IsT0FBaEIsRUFBd0JnRCxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSzRULFFBQWIsRUFBc0IsSUFBdEIsQ0FBeEIsQ0FBaFY7QUFBcVksS0FBdjhDO0FBQXc4QzNSLFFBQUksRUFBQyxjQUFTNU0sQ0FBVCxFQUFXO0FBQUMsV0FBSytMLEtBQUw7QUFBYSxVQUFJNUcsQ0FBQyxHQUFDLFlBQU47QUFBQSxVQUFtQjBCLENBQUMsR0FBQyxDQUFDLENBQXRCO0FBQXdCMUQsT0FBQyxDQUFDd0csSUFBRixDQUFPM0osQ0FBUCxFQUFTbUQsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyx1QkFBYUEsQ0FBQyxDQUFDeU4sT0FBRixDQUFVeUQsVUFBdkIsS0FBb0M1SSxDQUFDLEdBQUMsVUFBdEMsR0FBa0R0SSxDQUFDLENBQUN5TixPQUFGLENBQVV5RCxVQUFWLEtBQXVCbEgsQ0FBQyxHQUFDLENBQUMsQ0FBMUIsQ0FBbEQ7QUFBK0UsT0FBckcsRUFBc0csSUFBdEcsQ0FBVCxHQUFzSCxLQUFLMlgsY0FBTCxDQUFvQnJaLENBQXBCLENBQXRILEVBQTZJLEtBQUtzWixjQUFMLEdBQW9CNVgsQ0FBakssRUFBbUsxRCxDQUFDLENBQUN3RyxJQUFGLENBQU8zSixDQUFQLEVBQVNtRCxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDLGFBQUsrVSxXQUFMLENBQWlCMUUsSUFBakIsQ0FBc0IsSUFBSXdSLFNBQUosQ0FBYzdoQixDQUFkLEVBQWdCbUQsQ0FBQyxHQUFDLENBQWxCLENBQXRCO0FBQTRDLE9BQWxFLEVBQW1FLElBQW5FLENBQVQsQ0FBbkssRUFBc1AsS0FBSzJTLGFBQUwsRUFBdFA7QUFBMlEsS0FBendEO0FBQTB3RDVHLFNBQUssRUFBQyxpQkFBVTtBQUFDNUksT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUtpSSxXQUFaLEVBQXdCLFVBQVM1UixDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDZSxNQUFGO0FBQVcsT0FBakQsR0FBbUQsS0FBS2dVLFdBQUwsR0FBaUIsRUFBcEUsRUFBdUUsS0FBS29DLFNBQUwsR0FBZSxDQUFDLENBQXZGLEVBQXlGLEtBQUsySyxLQUFMLEdBQVcsQ0FBQyxDQUFyRztBQUF1RyxLQUFsNEQ7QUFBbTRESCxrQkFBYyxFQUFDLHdCQUFTeGUsQ0FBVCxFQUFXO0FBQUMsV0FBS3NULFlBQUwsSUFBbUIzQyxNQUFNLENBQUN6VSxPQUFQLENBQWUyVSxXQUFmLENBQTJCLG1CQUFpQixLQUFLeUMsWUFBakQsQ0FBbkIsRUFBa0YzQyxNQUFNLENBQUN6VSxPQUFQLENBQWVxVSxRQUFmLENBQXdCLG1CQUFpQnZRLENBQXpDLENBQWxGLEVBQThILEtBQUtzVCxZQUFMLEdBQWtCdFQsQ0FBaEo7QUFBa0osS0FBaGpFO0FBQWlqRTJULFdBQU8sRUFBQyxtQkFBVTtBQUFDaEQsWUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQix1QkFBM0IsRUFBb0ROLFFBQXBELENBQTZELHdCQUE3RCxHQUF1RixLQUFLZ00sU0FBTCxHQUFlLENBQUMsQ0FBdkc7QUFBeUcsS0FBN3FFO0FBQThxRXpILFVBQU0sRUFBQyxrQkFBVTtBQUFDbkUsWUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQix3QkFBM0IsRUFBcUROLFFBQXJELENBQThELHVCQUE5RCxHQUF1RixLQUFLZ00sU0FBTCxHQUFlLENBQUMsQ0FBdkc7QUFBeUcsS0FBenlFO0FBQTB5RTNILFdBQU8sRUFBQyxtQkFBVTtBQUFDLGFBQU0sQ0FBQyxLQUFLMkgsU0FBWjtBQUFzQixLQUFuMUU7QUFBbzFFcUMsWUFBUSxFQUFDLG9CQUFVO0FBQUMsYUFBTyxLQUFLckMsU0FBWjtBQUFzQixLQUE5M0U7QUFBKzNFc0MsY0FBVSxFQUFDLHNCQUFVO0FBQUMsVUFBSTdlLENBQUMsR0FBQzJRLE1BQU0sQ0FBQ3pVLE9BQWI7QUFBQSxVQUFxQlcsQ0FBQyxHQUFDLEtBQUs2Z0IsS0FBNUI7QUFBQSxVQUFrQ3ZZLENBQUMsR0FBQyxpQkFBZSxLQUFLbU8sWUFBeEQ7QUFBQSxVQUFxRXpNLENBQUMsR0FBQzFCLENBQUMsR0FBQyxLQUFELEdBQU8sTUFBL0U7QUFBQSxVQUFzRjJCLENBQUMsR0FBQzNCLENBQUMsR0FBQyxNQUFELEdBQVEsS0FBakc7QUFBQSxVQUF1RzRCLENBQUMsR0FBQzVCLENBQUMsR0FBQyxRQUFELEdBQVUsTUFBcEg7QUFBQSxVQUEySDZCLENBQUMsR0FBQzdCLENBQUMsR0FBQyxLQUFELEdBQU8sT0FBckk7QUFBQSxVQUE2SThCLENBQUMsR0FBQzlCLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBeko7QUFBQSxVQUFrSytCLENBQUMsR0FBQy9CLENBQUMsR0FBQyxRQUFELEdBQVUsT0FBL0s7QUFBQSxVQUF1TGdDLENBQUMsR0FBQztBQUFDK0csWUFBSSxFQUFDLE9BQU47QUFBY0MsYUFBSyxFQUFDLE1BQXBCO0FBQTJCOEUsV0FBRyxFQUFDLFFBQS9CO0FBQXdDdUgsY0FBTSxFQUFDO0FBQS9DLE9BQXpMO0FBQStPLFdBQUt0ZSxPQUFMLENBQWEyVSxXQUFiLENBQXlCLHdCQUF6QjtBQUFtRCxVQUFJaUosQ0FBQyxHQUFDOVosQ0FBQyxDQUFDc1osRUFBRixDQUFLLFVBQUwsQ0FBTjtBQUF1QixVQUFHUSxDQUFDLElBQUU5WixDQUFDLENBQUMwTixJQUFGLEVBQUgsRUFBWSxLQUFLa1IsUUFBTCxNQUFpQixLQUFLOUosTUFBTCxFQUE3QixFQUEyQyxDQUFDLEtBQUs1WSxPQUFMLENBQWFvZCxFQUFiLENBQWdCLFVBQWhCLENBQUQsSUFBOEIsS0FBSzFILFdBQUwsQ0FBaUJ2VCxNQUFqQixHQUF3QixDQUF0RCxJQUF5RCxLQUFLb2dCLGNBQTVHLEVBQTJILE9BQU8sS0FBSzlLLE9BQUwsSUFBZXhRLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEtBQUtxYSxLQUFMLENBQVczUCxVQUFwQixFQUErQjtBQUFDcEssYUFBSyxFQUFDLENBQVA7QUFBU1EsY0FBTSxFQUFDO0FBQWhCLE9BQS9CLENBQWYsRUFBa0UyVixDQUFDLElBQUU5WixDQUFDLENBQUMyTixJQUFGLEVBQXJFLEVBQThFLEtBQUssS0FBS3pSLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0Isd0JBQXRCLENBQTFGO0FBQTBJLFdBQUt1RSxNQUFMOztBQUFjLFVBQUlpRixDQUFDLEdBQUMsS0FBS2dFLFNBQVg7QUFBQSxVQUFxQi9ELENBQUMsR0FBQyxLQUFLbUUsS0FBNUI7QUFBQSxVQUFrQ2xFLENBQUMsR0FBQ3hXLE1BQU0sQ0FBQ0MsUUFBUCxFQUFwQztBQUFBLFVBQXNEZ0IsQ0FBQyxHQUFDLEtBQUt4SSxPQUFMLENBQWEsVUFBUXlKLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CbUIsQ0FBcEIsQ0FBckIsR0FBeEQ7QUFBQSxVQUF1R2dULENBQUMsR0FBQ04sUUFBUSxDQUFDLEtBQUtxRSxPQUFMLENBQWE1VixHQUFiLENBQWlCLGFBQVd4QixDQUE1QixDQUFELENBQVIsSUFBMEMsQ0FBbko7QUFBQSxVQUFxSnNULENBQUMsR0FBQy9TLElBQUksQ0FBQ0UsR0FBTCxDQUFTNUMsQ0FBQyxHQUFDLElBQUV3VixDQUFiLEVBQWUsQ0FBZixDQUF2SjtBQUFBLFVBQXlLRSxDQUFDLEdBQUNSLFFBQVEsQ0FBQyxLQUFLcUUsT0FBTCxDQUFhNVYsR0FBYixDQUFpQixhQUFXdkIsQ0FBNUIsQ0FBRCxDQUFSLElBQTBDLENBQXJOO0FBQUEsVUFBdU5nWSxDQUFDLEdBQUMsQ0FBQ2xGLFFBQVEsQ0FBQyxLQUFLMWQsT0FBTCxDQUFhbU0sR0FBYixDQUFpQixZQUFVdEIsQ0FBM0IsQ0FBRCxDQUFSLElBQXlDLENBQTFDLEtBQThDNlMsUUFBUSxDQUFDLEtBQUsxZCxPQUFMLENBQWFtTSxHQUFiLENBQWlCLFlBQVVyQixDQUEzQixDQUFELENBQVIsSUFBeUMsQ0FBdkYsQ0FBek47O0FBQW1UN0QsT0FBQyxDQUFDRSxNQUFGLENBQVN4RyxDQUFDLENBQUNrUixVQUFYLEVBQXNCO0FBQUM1SixjQUFNLEVBQUNPLENBQUMsR0FBQ29hLENBQVY7QUFBWW5iLGFBQUssRUFBQ3NXLENBQUMsQ0FBQzlVLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBWCxDQUFuQjtBQUF3QzRaLGtCQUFVLEVBQUM3RTtBQUFuRCxPQUF0QixHQUE2RS9XLENBQUMsQ0FBQ0UsTUFBRixDQUFTeEcsQ0FBQyxDQUFDZ1IsU0FBWCxFQUFxQjtBQUFDMUosY0FBTSxFQUFDZ1csQ0FBUjtBQUFVeFcsYUFBSyxFQUFDd1c7QUFBaEIsT0FBckIsQ0FBN0UsRUFBc0hoWCxDQUFDLENBQUNFLE1BQUYsQ0FBU3hHLENBQUMsQ0FBQzhnQixjQUFYLEVBQTBCO0FBQUNoYSxhQUFLLEVBQUN3VyxDQUFDLEdBQUMsSUFBRUMsQ0FBWDtBQUFhalcsY0FBTSxFQUFDTztBQUFwQixPQUExQixDQUF0SCxFQUF3SzdILENBQUMsQ0FBQ21pQixLQUFGLEdBQVE7QUFBQ3hLLGdCQUFRLEVBQUM7QUFBQzdRLGVBQUssRUFBQ3FXLENBQUMsQ0FBQyxVQUFRclUsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JrQixDQUFwQixDQUFULENBQUQsRUFBUDtBQUEyQ2dZLG9CQUFVLEVBQUNyRixRQUFRLENBQUNHLENBQUMsQ0FBQzFSLEdBQUYsQ0FBTSxZQUFVdkIsQ0FBaEIsQ0FBRCxDQUFSLElBQThCLENBQXBGO0FBQXNGb1kscUJBQVcsRUFBQ3RGLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDMVIsR0FBRixDQUFNLFlBQVVsQixDQUFDLENBQUNMLENBQUQsQ0FBakIsQ0FBRCxDQUFSLElBQWlDO0FBQW5JLFNBQVY7QUFBZ0o2TixZQUFJLEVBQUM7QUFBQ2hSLGVBQUssRUFBQ3FXLENBQUMsQ0FBQyxVQUFRclUsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JrQixDQUFwQixDQUFULENBQUQsRUFBUDtBQUEyQ2dZLG9CQUFVLEVBQUNyRixRQUFRLENBQUNJLENBQUMsQ0FBQzNSLEdBQUYsQ0FBTSxZQUFVdkIsQ0FBaEIsQ0FBRCxDQUFSLElBQThCLENBQXBGO0FBQXNGb1kscUJBQVcsRUFBQ3RGLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDM1IsR0FBRixDQUFNLFlBQVVsQixDQUFDLENBQUNMLENBQUQsQ0FBakIsQ0FBRCxDQUFSLElBQWlDO0FBQW5JO0FBQXJKLE9BQWhMO0FBQTRjLFVBQUlxWSxDQUFDLEdBQUNsRixDQUFDLENBQUNoVCxDQUFELENBQVA7QUFBQSxVQUFXK0ksQ0FBQyxHQUFDblQsQ0FBQyxDQUFDOGdCLGNBQUYsQ0FBaUJoYSxLQUE5QjtBQUFBLFVBQW9Db00sQ0FBQyxHQUFDLEtBQUs2QixXQUFMLENBQWlCdlQsTUFBdkQ7QUFBOER4QixPQUFDLENBQUNrUixVQUFGLENBQWFwSyxLQUFiLEdBQW1Cd2IsQ0FBbkIsRUFBcUJ0aUIsQ0FBQyxDQUFDbWlCLEtBQUYsQ0FBUXBLLE9BQVIsR0FBZ0IsSUFBRTdFLENBQUMsR0FBQ0MsQ0FBRixHQUFJbVAsQ0FBM0M7QUFBNkMsVUFBSUMsQ0FBQyxHQUFDRCxDQUFOO0FBQUEsVUFBUUUsQ0FBQyxHQUFDeGlCLENBQUMsQ0FBQ21pQixLQUFaO0FBQUEsVUFBa0J6VyxDQUFDLEdBQUM4VyxDQUFDLENBQUM3SyxRQUF0QjtBQUFBLFVBQStCOEssQ0FBQyxHQUFDRCxDQUFDLENBQUMxSyxJQUFuQztBQUFBLFVBQXdDNEssQ0FBQyxHQUFDaFgsQ0FBQyxDQUFDMFcsVUFBRixHQUFhMVcsQ0FBQyxDQUFDNUUsS0FBZixHQUFxQjRFLENBQUMsQ0FBQzJXLFdBQXZCLEdBQW1DSSxDQUFDLENBQUNMLFVBQXJDLEdBQWdESyxDQUFDLENBQUMzYixLQUFsRCxHQUF3RDJiLENBQUMsQ0FBQ0osV0FBcEc7QUFBZ0hyaUIsT0FBQyxDQUFDbWlCLEtBQUYsQ0FBUXBLLE9BQVIsS0FBa0J3SyxDQUFDLElBQUVHLENBQXJCO0FBQXdCLFVBQUlDLENBQUMsR0FBQ3pQLENBQUMsR0FBQ0MsQ0FBUjtBQUFVd1AsT0FBQyxJQUFFSixDQUFDLEdBQUNoWSxJQUFJLENBQUNxWSxLQUFMLENBQVdMLENBQUMsR0FBQ3BQLENBQWIsSUFBZ0JBLENBQXBCLENBQUQsS0FBMEJvUCxDQUFDLEdBQUNJLENBQTVCO0FBQStCLFVBQUlFLENBQUMsR0FBQ04sQ0FBQyxJQUFFdmlCLENBQUMsQ0FBQ21pQixLQUFGLENBQVFwSyxPQUFSLEdBQWdCMkssQ0FBaEIsR0FBa0IsQ0FBcEIsQ0FBUDtBQUE4QjFpQixPQUFDLENBQUM4aUIsR0FBRixHQUFNdlksSUFBSSxDQUFDd1ksS0FBTCxDQUFXUixDQUFDLEdBQUNwUCxDQUFiLENBQU4sRUFBc0IsS0FBSzZQLEtBQUwsR0FBVyxNQUFqQyxFQUF3Q2hqQixDQUFDLENBQUM4aUIsR0FBRixJQUFPLENBQVAsS0FBV0QsQ0FBQyxHQUFDTixDQUFDLEdBQUNELENBQUosRUFBTXRpQixDQUFDLENBQUNtaUIsS0FBRixDQUFRcEssT0FBUixHQUFnQixDQUFDLENBQXZCLEVBQXlCLEtBQUtpTCxLQUFMLEdBQVcsUUFBL0MsQ0FBeEMsRUFBaUdoakIsQ0FBQyxDQUFDeVUsS0FBRixHQUFRbEssSUFBSSxDQUFDMFksSUFBTCxDQUFVL1AsQ0FBQyxHQUFDQyxDQUFGLEdBQUlvUCxDQUFkLENBQXpHLEVBQTBIdmlCLENBQUMsQ0FBQ2doQixPQUFGLEdBQVU7QUFBQ2xhLGFBQUssRUFBQytiLENBQUMsR0FBQyxDQUFUO0FBQVd2YixjQUFNLEVBQUNPO0FBQWxCLE9BQXBJLEVBQXlKN0gsQ0FBQyxDQUFDa2pCLE1BQUYsR0FBUztBQUFDcGMsYUFBSyxFQUFDeWIsQ0FBUDtBQUFTamIsY0FBTSxFQUFDTztBQUFoQixPQUFsSyxFQUFxTDdILENBQUMsQ0FBQ21SLEtBQUYsR0FBUTtBQUFDckssYUFBSyxFQUFDb00sQ0FBQyxHQUFDQyxDQUFGLEdBQUksQ0FBWDtBQUFhN0wsY0FBTSxFQUFDTztBQUFwQixPQUE3TCxFQUFvTm9WLENBQUMsSUFBRTlaLENBQUMsQ0FBQzJOLElBQUYsRUFBdk4sRUFBZ08sS0FBS3pSLE9BQUwsQ0FBYXFVLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWhPO0FBQWdSLEtBQTF5STtBQUEyeUk1QyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLZ0csT0FBTCxJQUFlLEtBQUs1RixVQUFMLENBQWdCSixJQUFoQixFQUFmLEVBQXNDLEtBQUtpSSxRQUFMLEdBQWMsQ0FBQyxDQUFyRDtBQUF1RCxLQUFsM0k7QUFBbTNJdkMsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFVBQUlyVCxDQUFDLEdBQUMsaUJBQWUsS0FBS3NULFlBQTFCO0FBQXVDLGFBQU07QUFBQzNQLGFBQUssRUFBQzNELENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXM1AsVUFBWCxDQUFzQnBLLEtBQXZCLEdBQTZCLEtBQUsrWixLQUFMLENBQVczUCxVQUFYLENBQXNCNUosTUFBM0Q7QUFBa0VBLGNBQU0sRUFBQ25FLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXM1AsVUFBWCxDQUFzQjVKLE1BQXZCLEdBQThCLEtBQUt1WixLQUFMLENBQVczUCxVQUFYLENBQXNCcEs7QUFBOUgsT0FBTjtBQUEySSxLQUE5ako7QUFBK2pKZ1AsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFVBQUcsS0FBS2tNLFVBQUwsSUFBa0IsQ0FBQyxLQUFLRCxRQUFMLEVBQXRCLEVBQXNDO0FBQUMsWUFBSTVlLENBQUMsR0FBQ21ELENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWSxLQUFLcWEsS0FBakIsQ0FBTjtBQUFBLFlBQThCN2dCLENBQUMsR0FBQyxpQkFBZSxLQUFLeVcsWUFBcEQ7QUFBaUVuUSxTQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBS2lJLFdBQVosRUFBd0IsVUFBUzVSLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDQSxXQUFDLENBQUNtakIsTUFBRjtBQUFXLFNBQWpELEdBQW1ELEtBQUtqQyxTQUFMLENBQWUvZCxDQUFDLENBQUNnZixLQUFGLENBQVFwSyxPQUFSLEdBQWdCLE1BQWhCLEdBQXVCLE1BQXRDLEdBQW5ELEVBQW1HLEtBQUt1SixLQUFMLENBQVduZSxDQUFDLENBQUNnZixLQUFGLENBQVFwSyxPQUFSLEdBQWdCLE1BQWhCLEdBQXVCLE1BQWxDLEdBQW5HLEVBQStJLEtBQUtxSixPQUFMLENBQWE1VixHQUFiLENBQWlCO0FBQUMxRSxlQUFLLEVBQUMzRCxDQUFDLENBQUMrZixNQUFGLENBQVNsakIsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUFuQixDQUFQO0FBQW9Dc0gsZ0JBQU0sRUFBQ25FLENBQUMsQ0FBQytmLE1BQUYsQ0FBU2xqQixDQUFDLEdBQUMsUUFBRCxHQUFVLE9BQXBCO0FBQTNDLFNBQWpCLENBQS9JLEVBQTBPLEtBQUtxaEIsTUFBTCxDQUFZN1YsR0FBWixDQUFnQjtBQUFDMUUsZUFBSyxFQUFDM0QsQ0FBQyxDQUFDZ08sS0FBRixDQUFRblIsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUFsQixDQUFQO0FBQW1Dc0gsZ0JBQU0sRUFBQ25FLENBQUMsQ0FBQ2dPLEtBQUYsQ0FBUW5SLENBQUMsR0FBQyxRQUFELEdBQVUsT0FBbkI7QUFBMUMsU0FBaEIsQ0FBMU87QUFBa1UsWUFBSXNJLENBQUMsR0FBQztBQUFDeEIsZUFBSyxFQUFDM0QsQ0FBQyxDQUFDNmQsT0FBRixDQUFVaGhCLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBcEIsQ0FBUDtBQUFxQ3NILGdCQUFNLEVBQUNuRSxDQUFDLENBQUM2ZCxPQUFGLENBQVVoaEIsQ0FBQyxHQUFDLFFBQUQsR0FBVSxPQUFyQjtBQUE1QyxTQUFOO0FBQWlGc0ksU0FBQyxDQUFDLGFBQVd0SSxDQUFDLEdBQUMsTUFBRCxHQUFRLEtBQXBCLENBQUQsQ0FBRCxHQUE4QnVLLElBQUksQ0FBQ3dZLEtBQUwsQ0FBVyxDQUFDLEVBQUQsR0FBSTVmLENBQUMsQ0FBQzZkLE9BQUYsQ0FBVWxhLEtBQXpCLElBQWdDLElBQTlELEVBQW1Fd0IsQ0FBQyxDQUFDLGFBQVd0SSxDQUFDLEdBQUMsS0FBRCxHQUFPLE1BQW5CLENBQUQsQ0FBRCxHQUE4QixDQUFqRyxFQUFtRyxLQUFLZ2hCLE9BQUwsQ0FBYXhWLEdBQWIsQ0FBaUJsRCxDQUFqQixDQUFuRyxFQUF1SCxLQUFLNk8sU0FBTCxJQUFnQixLQUFLaU0sTUFBTCxDQUFZLEtBQUtqTSxTQUFqQixFQUEyQixDQUFDLENBQTVCLENBQXZJO0FBQXNLO0FBQUMsS0FBMXZLO0FBQTJ2S2tNLGNBQVUsRUFBQyxvQkFBU2xnQixDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUVBLENBQUMsR0FBQyxDQUFGLElBQUtBLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXcE0sS0FBbEIsSUFBeUJ0UixDQUFDLEtBQUcsS0FBSzJlLEtBQXBDLENBQUgsRUFBOEM7QUFBQyxZQUFJOWhCLENBQUMsR0FBQyxLQUFLNmdCLEtBQUwsQ0FBV2lDLEdBQVgsSUFBZ0IzZixDQUFDLEdBQUMsQ0FBbEIsSUFBcUIsQ0FBM0I7QUFBNkIsYUFBS2lnQixNQUFMLENBQVlwakIsQ0FBWjtBQUFlO0FBQUMsS0FBOTJLO0FBQSsyS3loQixnQkFBWSxFQUFDLHdCQUFVO0FBQUMsV0FBSzRCLFVBQUwsQ0FBZ0IsS0FBS3ZCLEtBQUwsR0FBVyxDQUEzQjtBQUE4QixLQUFyNks7QUFBczZLSixZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLMkIsVUFBTCxDQUFnQixLQUFLdkIsS0FBTCxHQUFXLENBQTNCO0FBQThCLEtBQXg5SztBQUF5OUtqUixRQUFJLEVBQUMsY0FBUzFOLENBQVQsRUFBVztBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBS21YLFNBQUwsR0FBZSxDQUFyQjtBQUF1QmhVLE9BQUMsR0FBQyxDQUFGLEtBQU1BLENBQUMsR0FBQyxDQUFSO0FBQVcsVUFBSW1GLENBQUMsR0FBQyxLQUFLeU0sV0FBTCxDQUFpQnZULE1BQXZCO0FBQThCOEcsT0FBQyxHQUFDbkYsQ0FBRixLQUFNQSxDQUFDLEdBQUNtRixDQUFSLEdBQVcsS0FBSzZPLFNBQUwsR0FBZWhVLENBQTFCLEVBQTRCLEtBQUtxZSxTQUFMLENBQWVyZSxDQUFmLENBQTVCLEVBQThDLFdBQVMsS0FBSzZmLEtBQWQsSUFBcUIsS0FBS2xCLEtBQUwsS0FBYXZYLElBQUksQ0FBQzBZLElBQUwsQ0FBVTlmLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXaUMsR0FBdkIsQ0FBbEMsSUFBK0QsS0FBS00sTUFBTCxDQUFZamdCLENBQVosRUFBY25ELENBQWQsQ0FBN0c7QUFBOEgsS0FBeHFMO0FBQXlxTG9qQixVQUFNLEVBQUMsZ0JBQVNqZ0IsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLZ2lCLFVBQUwsSUFBa0IsQ0FBQyxLQUFLRCxRQUFMLEVBQXRCLEVBQXNDO0FBQUMsWUFBSXpaLENBQUo7QUFBQSxZQUFNMEIsQ0FBTjtBQUFBLFlBQVFDLENBQUMsR0FBQyxpQkFBZSxLQUFLd00sWUFBOUI7QUFBQSxZQUEyQ3ZNLENBQUMsR0FBQyxLQUFHdEQsTUFBTSxDQUFDQyxRQUFQLEdBQWtCb0QsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUE1QixDQUFoRDtBQUFBLFlBQXNGRSxDQUFDLEdBQUMsS0FBSzBXLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmhhLEtBQWxIOztBQUF3SCxZQUFHLFdBQVMsS0FBS2tjLEtBQWpCLEVBQXVCO0FBQUNoWixXQUFDLEdBQUNPLElBQUksQ0FBQzBZLElBQUwsQ0FBVTlmLENBQUMsR0FBQyxLQUFLMGQsS0FBTCxDQUFXaUMsR0FBdkIsQ0FBRixFQUE4QixLQUFLaEIsS0FBTCxHQUFXOVgsQ0FBekMsRUFBMkMxQixDQUFDLEdBQUM2QixDQUFDLElBQUUsS0FBSzJYLEtBQUwsR0FBVyxDQUFiLENBQUQsR0FBaUIsS0FBS2pCLEtBQUwsQ0FBV2lDLEdBQTVCLEdBQWdDLENBQUMsQ0FBOUU7QUFBZ0YsY0FBSTFZLENBQUMsR0FBQyxvQ0FBTjtBQUEyQyxlQUFLK1csZ0JBQUwsQ0FBc0IsQ0FBQ25YLENBQUMsR0FBQyxDQUFGLEdBQUksS0FBSixHQUFVLFFBQVgsSUFBcUIsT0FBM0MsRUFBb0RJLENBQXBELEdBQXVELEtBQUttWCxZQUFMLENBQWtCLENBQUN2WCxDQUFDLElBQUUsS0FBSzZXLEtBQUwsQ0FBV3BNLEtBQWQsR0FBb0IsS0FBcEIsR0FBMEIsUUFBM0IsSUFBcUMsT0FBdkQsRUFBZ0VySyxDQUFoRSxDQUF2RDtBQUEwSCxTQUE3USxNQUFrUjlCLENBQUMsR0FBQzRCLENBQUMsR0FBQyxDQUFDLENBQUQsSUFBSUMsQ0FBQyxJQUFFaEgsQ0FBQyxHQUFDLENBQUosQ0FBRCxHQUFRLEtBQUdnSCxDQUFmLENBQUo7O0FBQXNCSCxTQUFDLEdBQUMySixLQUFLLENBQUNDLElBQVI7QUFBYSxZQUFJdkosQ0FBQyxHQUFDLEVBQU47QUFBQSxZQUFTQyxDQUFDLEdBQUMsRUFBWDtBQUFjRCxTQUFDLENBQUNKLENBQUMsR0FBQyxLQUFELEdBQU8sTUFBVCxDQUFELEdBQWtCLENBQWxCLEVBQW9CSyxDQUFDLENBQUNMLENBQUMsR0FBQyxNQUFELEdBQVEsS0FBVixDQUFELEdBQWtCM0IsQ0FBQyxHQUFDLElBQXhDLEVBQTZDLEtBQUsrWSxNQUFMLENBQVlqTixJQUFaLENBQWlCLENBQUMsQ0FBbEIsRUFBcUI1SSxHQUFyQixDQUF5Qm5CLENBQXpCLEVBQTRCaVosT0FBNUIsQ0FBb0NoWixDQUFwQyxFQUFzQ3RLLENBQUMsR0FBQyxDQUFELEdBQUdnSyxDQUFDLElBQUVBLENBQUMsQ0FBQzZKLElBQUYsQ0FBT3BHLE9BQVAsQ0FBZWtELE9BQWYsQ0FBdUJPLFVBQXZCLENBQWtDQyxLQUFyQyxJQUE0QyxDQUF0RixFQUF3RjdLLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3lWLGVBQUw7QUFBdUIsU0FBMUMsRUFBMkMsSUFBM0MsQ0FBeEYsQ0FBN0M7QUFBdUw7QUFBQyxLQUF4MU07QUFBeTFNQSxtQkFBZSxFQUFDLDJCQUFVO0FBQUMsVUFBSXBnQixDQUFKLEVBQU1uRCxDQUFOOztBQUFRLFVBQUcsS0FBS21YLFNBQUwsSUFBZ0IsS0FBSzBKLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmhhLEtBQTFDLElBQWlELEVBQUUsS0FBS2lPLFdBQUwsQ0FBaUJ2VCxNQUFqQixHQUF3QixDQUExQixDQUFwRCxFQUFpRjtBQUFDLFlBQUcsV0FBUyxLQUFLd2hCLEtBQWpCLEVBQXVCO0FBQUMsY0FBRyxLQUFLbEIsS0FBTCxHQUFXLENBQWQsRUFBZ0I7QUFBTzNlLFdBQUMsR0FBQyxDQUFDLEtBQUsyZSxLQUFMLEdBQVcsQ0FBWixJQUFlLEtBQUtqQixLQUFMLENBQVdpQyxHQUExQixHQUE4QixDQUFoQyxFQUFrQzlpQixDQUFDLEdBQUN1SyxJQUFJLENBQUNDLEdBQUwsQ0FBU3JILENBQUMsR0FBQyxDQUFGLEdBQUksS0FBSzBkLEtBQUwsQ0FBV2lDLEdBQXhCLEVBQTRCLEtBQUsvTixXQUFMLENBQWlCdlQsTUFBN0MsQ0FBcEM7QUFBeUYsU0FBeEksTUFBNEk7QUFBQyxjQUFJOEcsQ0FBQyxHQUFDaUMsSUFBSSxDQUFDMFksSUFBTCxDQUFVLEtBQUtwQyxLQUFMLENBQVczUCxVQUFYLENBQXNCcEssS0FBdEIsR0FBNEIsS0FBSytaLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmhhLEtBQWhFLENBQU47QUFBNkUzRCxXQUFDLEdBQUNvSCxJQUFJLENBQUNFLEdBQUwsQ0FBU0YsSUFBSSxDQUFDcVksS0FBTCxDQUFXclksSUFBSSxDQUFDRSxHQUFMLENBQVMsS0FBSzBNLFNBQUwsR0FBZSxLQUFHN08sQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBWCxDQUFULEVBQXFELENBQXJELENBQUYsRUFBMER0SSxDQUFDLEdBQUN1SyxJQUFJLENBQUMwWSxJQUFMLENBQVUxWSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLMk0sU0FBTCxHQUFlLEtBQUc3TyxDQUEzQixDQUFWLENBQTVELEVBQXFHLEtBQUt5TSxXQUFMLENBQWlCdlQsTUFBakIsR0FBd0J4QixDQUF4QixLQUE0QkEsQ0FBQyxHQUFDLEtBQUsrVSxXQUFMLENBQWlCdlQsTUFBL0MsQ0FBckc7QUFBNEo7O0FBQUEsYUFBSSxJQUFJd0ksQ0FBQyxHQUFDN0csQ0FBVixFQUFZNkcsQ0FBQyxJQUFFaEssQ0FBZixFQUFpQmdLLENBQUMsRUFBbEIsRUFBcUIsS0FBSytLLFdBQUwsQ0FBaUIvSyxDQUFDLEdBQUMsQ0FBbkIsRUFBc0IrRixJQUF0QjtBQUE2QjtBQUFDLEtBQXYzTjtBQUF3M055UixhQUFTLEVBQUMsbUJBQVNyZSxDQUFULEVBQVc7QUFBQyxXQUFLa2UsTUFBTCxDQUFZdkQsSUFBWixDQUFpQixzQkFBakIsRUFBeUM5SixXQUF6QyxDQUFxRCxxQkFBckQ7O0FBQTRFLFVBQUloVSxDQUFDLEdBQUNtRCxDQUFDLElBQUUsS0FBSzRSLFdBQUwsQ0FBaUI1UixDQUFDLEdBQUMsQ0FBbkIsQ0FBVDtBQUErQm5ELE9BQUMsSUFBRUEsQ0FBQyxDQUFDd2pCLFFBQUYsRUFBSDtBQUFnQixLQUF6Z087QUFBMGdPQyxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLdE0sU0FBTCxJQUFnQixLQUFLSSxXQUFMLENBQWlCLEtBQUtKLFNBQXRCLENBQWhCO0FBQWlEO0FBQTlrTyxHQUFmOztBQUErbE8sV0FBUzBLLFNBQVQsR0FBb0I7QUFBQyxTQUFLclYsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkJoRSxNQUFNLENBQUNpRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCO0FBQW1EOztBQUFBekQsR0FBQyxDQUFDRSxNQUFGLENBQVNxYixTQUFTLENBQUNsWixTQUFuQixFQUE2QjtBQUFDNkQsY0FBVSxFQUFDLG9CQUFTckosQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsV0FBSzZULElBQUwsR0FBVTFRLENBQVYsRUFBWSxLQUFLZ1UsU0FBTCxHQUFlblgsQ0FBM0IsRUFBNkIsS0FBSzBqQixRQUFMLEVBQTdCO0FBQTZDLEtBQXZFO0FBQXdFQSxZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLMVMsU0FBTCxHQUFlMUssQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixjQUFwQixFQUFvQ3hTLElBQXBDLENBQXlDLGFBQXpDLEVBQXVELEtBQUtpVyxTQUE1RCxDQUFmO0FBQXNGLEtBQWxMO0FBQW1MM0QsU0FBSyxFQUFDLGlCQUFVO0FBQUMsVUFBRyxDQUFDLEtBQUtzTixjQUFULEVBQXdCO0FBQUMsWUFBSTNkLENBQUMsR0FBQyxLQUFLMFEsSUFBTCxDQUFVcEcsT0FBaEI7QUFBd0J1SCxrQkFBVSxDQUFDcU0sTUFBWCxDQUFrQmpoQixNQUFsQixDQUF5QixLQUFLMGdCLGNBQUwsR0FBb0J4YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG9CQUFwQixFQUEwQ3RULE1BQTFDLENBQWlELEtBQUs0USxTQUFMLENBQWU1USxNQUFmLENBQXNCLEtBQUt1akIsZ0JBQUwsR0FBc0JyZCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNCQUFwQixDQUE1QyxDQUFqRCxDQUE3QyxHQUF5TCxZQUFVLEtBQUtHLElBQUwsQ0FBVWhILElBQXBCLElBQTBCLEtBQUttRSxTQUFMLENBQWUwQyxRQUFmLENBQXdCLG1CQUF4QixFQUE2Q3hTLElBQTdDLENBQWtELFdBQWxELEVBQThEO0FBQUMyUyxjQUFJLEVBQUMsS0FBS0EsSUFBWDtBQUFnQmxGLGFBQUcsRUFBQ3hMLENBQUMsQ0FBQzZOLFNBQUYsSUFBYSxLQUFLNkMsSUFBTCxDQUFVcFU7QUFBM0MsU0FBOUQsQ0FBbk47QUFBa1UsWUFBSU8sQ0FBQyxHQUFDbUQsQ0FBQyxDQUFDNk4sU0FBRixJQUFhN04sQ0FBQyxDQUFDNk4sU0FBRixDQUFZNFMsSUFBL0I7QUFBb0M1akIsU0FBQyxJQUFFLEtBQUtnUixTQUFMLENBQWU1USxNQUFmLENBQXNCa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQix5Q0FBdUMxVCxDQUEzRCxDQUF0QixDQUFILEVBQXdGLEtBQUtnUixTQUFMLENBQWU1USxNQUFmLENBQXNCa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixzQkFBcEIsRUFBNEN0VCxNQUE1QyxDQUFtRGtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsaUNBQXBCLENBQW5ELEVBQTJHdFQsTUFBM0csQ0FBa0gsS0FBS3VhLE9BQUwsR0FBYXJVLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0Isc0JBQXBCLEVBQTRDdFQsTUFBNUMsQ0FBbURrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGlDQUFwQixDQUFuRCxFQUEyR3RULE1BQTNHLENBQWtILEtBQUsyUSxPQUFMLEdBQWF6SyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHNCQUFwQixFQUE0QzVDLElBQTVDLEdBQW1EMVEsTUFBbkQsQ0FBMERrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUExRCxDQUEvSCxDQUEvSCxFQUE0V3RULE1BQTVXLENBQW1Ya0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiw2QkFBcEIsQ0FBblgsQ0FBdEIsQ0FBeEYsRUFBc2hCLEtBQUsxQyxTQUFMLENBQWU1USxNQUFmLENBQXNCa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixvQkFBcEIsQ0FBdEIsQ0FBdGhCLEVBQXVsQixLQUFLeVAsTUFBTCxFQUF2bEI7QUFBcW1CO0FBQUMsS0FBanNDO0FBQWtzQ3BpQixVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLK2YsY0FBTCxLQUFzQixLQUFLQSxjQUFMLENBQW9CL2YsTUFBcEIsSUFBNkIsS0FBSytmLGNBQUwsR0FBb0IsSUFBakQsRUFBc0QsS0FBS3hSLEtBQUwsR0FBVyxJQUF2RixHQUE2RixLQUFLdVUsS0FBTCxLQUFhLEtBQUtBLEtBQUwsQ0FBV2pWLEtBQVgsSUFBbUIsS0FBS2lWLEtBQUwsR0FBVyxJQUEzQyxDQUE3RixFQUE4SSxLQUFLQyxjQUFMLEtBQXNCLEtBQUtBLGNBQUwsQ0FBb0JsVixLQUFwQixJQUE0QixLQUFLa1YsY0FBTCxHQUFvQixJQUF0RSxDQUE5SSxFQUEwTixLQUFLQyxRQUFMLEdBQWMsQ0FBQyxDQUF6TyxFQUEyTyxLQUFLQyxRQUFMLEdBQWMsQ0FBQyxDQUExUCxFQUE0UCxLQUFLblEsSUFBTCxHQUFVLElBQXRRLEVBQTJRLEtBQUtvUSxXQUFMLEVBQTNRO0FBQThSLEtBQWwvQztBQUFtL0NsVSxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxVQUFHLEVBQUUsS0FBS21VLE9BQUwsSUFBYyxLQUFLSCxRQUFuQixJQUE2QixLQUFLQyxRQUFwQyxDQUFILEVBQWlEO0FBQUMsYUFBS0wsZ0JBQUwsSUFBdUIsS0FBS25RLEtBQUwsRUFBdkIsRUFBb0MsS0FBS3VRLFFBQUwsR0FBYyxDQUFDLENBQW5EO0FBQXFELFlBQUk1Z0IsQ0FBQyxHQUFDLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCdUQsU0FBeEI7QUFBQSxZQUFrQ2hSLENBQUMsR0FBQ21ELENBQUMsSUFBRSxjQUFZbUQsQ0FBQyxDQUFDdUcsSUFBRixDQUFPMUosQ0FBUCxDQUFmLEdBQXlCLEtBQUswUSxJQUFMLENBQVVwVSxHQUFuQyxHQUF1QzBELENBQUMsSUFBRSxLQUFLMFEsSUFBTCxDQUFVcFUsR0FBeEY7QUFBNEYsWUFBRyxLQUFLMGtCLElBQUwsR0FBVW5rQixDQUFiLEVBQWUsSUFBRyxZQUFVLEtBQUs2VCxJQUFMLENBQVVoSCxJQUF2QjtBQUE0QixjQUFHN00sQ0FBQyxLQUFHbUQsQ0FBUCxFQUFTLEtBQUtnaEIsSUFBTCxHQUFVbmtCLENBQVYsRUFBWSxLQUFLb2tCLEtBQUwsQ0FBVyxLQUFLRCxJQUFoQixDQUFaLENBQVQsS0FBZ0QsUUFBTyxLQUFLdFEsSUFBTCxDQUFVaEgsSUFBakI7QUFBdUIsaUJBQUksT0FBSjtBQUFZLG1CQUFLaVgsY0FBTCxHQUFvQixJQUFJaFUsY0FBSixDQUFtQixLQUFLK0QsSUFBTCxDQUFVcFUsR0FBN0IsRUFBaUM2RyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDLHFCQUFLZ2hCLElBQUwsR0FBVWhoQixDQUFWLEVBQVksS0FBS2loQixLQUFMLENBQVdqaEIsQ0FBWCxDQUFaO0FBQTBCLGVBQTlDLEVBQStDLElBQS9DLENBQWpDLEVBQXNGbUQsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxxQkFBS3VXLE1BQUw7QUFBYyxlQUFqQyxFQUFrQyxJQUFsQyxDQUF0RixDQUFwQjtBQUFuQztBQUE1RSxlQUF1USxLQUFLRCxLQUFMLENBQVcsS0FBS0QsSUFBaEI7QUFBc0I7QUFBQyxLQUFuL0Q7QUFBby9EWCxZQUFRLEVBQUMsb0JBQVU7QUFBQyxXQUFLeFMsU0FBTCxDQUFlMEMsUUFBZixDQUF3QixxQkFBeEI7QUFBK0MsS0FBdmpFO0FBQXdqRTBRLFNBQUssRUFBQyxlQUFTamhCLENBQVQsRUFBVztBQUFDLFdBQUt3Z0IsZ0JBQUwsQ0FBc0IzSSxPQUF0QixDQUE4QixLQUFLMUwsS0FBTCxHQUFXaEosQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixvQkFBcEIsRUFBMENnRyxJQUExQyxDQUErQztBQUFDL0ssV0FBRyxFQUFDeEw7QUFBTCxPQUEvQyxFQUF3RHFJLEdBQXhELENBQTREO0FBQUMwTixlQUFPLEVBQUM7QUFBVCxPQUE1RCxDQUF6QyxHQUFzSCxLQUFLb0wsYUFBTCxFQUF0SCxFQUEySSxLQUFLVCxLQUFMLEdBQVcsSUFBSXRYLFVBQUosQ0FBZSxLQUFLK0MsS0FBTCxDQUFXLENBQVgsQ0FBZixFQUE2QmhKLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQ21ELENBQUMsQ0FBQytCLEdBQVI7QUFBWSxhQUFLNGIsY0FBTCxJQUFxQixLQUFLaUQsUUFBMUIsS0FBcUMsS0FBS0csT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLSCxRQUFMLEdBQWMsQ0FBQyxDQUEvQixFQUFpQyxLQUFLdkUsV0FBTCxHQUFpQjtBQUFDMVksZUFBSyxFQUFDOUcsQ0FBQyxDQUFDb04sWUFBVDtBQUFzQjlGLGdCQUFNLEVBQUN0SCxDQUFDLENBQUN5TztBQUEvQixTQUFsRCxFQUFnRyxLQUFLMFUsTUFBTCxFQUFoRyxFQUE4RyxLQUFLdFMsSUFBTCxFQUFuSjtBQUFnSyxPQUFoTSxFQUFpTSxJQUFqTSxDQUE3QixFQUFvT3ZLLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBS3VXLE1BQUw7QUFBYyxPQUFqQyxFQUFrQyxJQUFsQyxDQUFwTyxFQUE0UTtBQUFDM1csY0FBTSxFQUFDLEtBQUttRyxJQUFMLENBQVVwRyxPQUFWLENBQWtCK0Q7QUFBMUIsT0FBNVEsQ0FBdEo7QUFBMmMsS0FBcmhGO0FBQXNoRjZTLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtILE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS0gsUUFBTCxHQUFjLENBQUMsQ0FBL0IsRUFBaUMsS0FBSy9TLFNBQUwsQ0FBZTBDLFFBQWYsQ0FBd0Isb0JBQXhCLENBQWpDLEVBQStFLEtBQUtwRSxLQUFMLElBQVksS0FBS0EsS0FBTCxDQUFXd0IsSUFBWCxFQUEzRixFQUE2RyxLQUFLNlMsZ0JBQUwsQ0FBc0J2akIsTUFBdEIsQ0FBNkJrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG9CQUFwQixDQUE3QixDQUE3RyxFQUFxTCxLQUFLN0MsSUFBTCxFQUFyTDtBQUFpTSxLQUF6dUY7QUFBMHVGeVQsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFVBQUdyUCxPQUFPLENBQUNxSyxTQUFSLElBQW1CLEtBQUt6TCxJQUFMLENBQVVwRyxPQUFWLENBQWtCc0QsT0FBeEMsRUFBZ0Q7QUFBQyxhQUFLa1QsV0FBTDs7QUFBbUIsWUFBSTlnQixDQUFDLEdBQUMsS0FBSzBRLElBQUwsQ0FBVXBHLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQkssU0FBaEM7QUFBMEMsYUFBSzdDLE1BQUwsR0FBWU4sVUFBVSxDQUFDdkgsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFLaUQsT0FBTCxDQUFhcUQsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCQyxNQUF0QixDQUE2QmxSLENBQUMsQ0FBQzBOLElBQUYsSUFBUSxDQUFyQyxFQUF1QyxDQUF2QztBQUEwQyxTQUE3RCxFQUE4RCxJQUE5RCxDQUFELEVBQXFFLEtBQUtnRCxJQUFMLENBQVVwRyxPQUFWLENBQWtCdUUsWUFBbEIsSUFBZ0MsQ0FBckcsQ0FBdEI7QUFBOEg7QUFBQyxLQUFoL0Y7QUFBaS9GbkIsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS29ULFdBQUw7O0FBQW1CLFVBQUk5Z0IsQ0FBQyxHQUFDLEtBQUswUSxJQUFMLENBQVVwRyxPQUFWLENBQWtCa0QsT0FBbEIsQ0FBMEJLLFNBQWhDO0FBQTBDLFdBQUsySixPQUFMLENBQWF2RyxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JuRCxLQUF0QixDQUE0QjlOLENBQUMsQ0FBQzhOLEtBQTlCLEVBQXFDb0QsTUFBckMsQ0FBNENsUixDQUFDLENBQUMwTixJQUE5QyxFQUFtRCxDQUFuRDtBQUFzRCxLQUFwbkc7QUFBcW5Hb1QsZUFBVyxFQUFDLHVCQUFVO0FBQUMsV0FBSzlWLE1BQUwsS0FBY1UsWUFBWSxDQUFDLEtBQUtWLE1BQU4sQ0FBWixFQUEwQixLQUFLQSxNQUFMLEdBQVksSUFBcEQ7QUFBMEQsS0FBdHNHO0FBQXVzR2dWLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUcsS0FBS3JDLGNBQVIsRUFBdUI7QUFBQyxZQUFJM2QsQ0FBQyxHQUFDLGlCQUFlNlIsVUFBVSxDQUFDeUIsWUFBaEM7O0FBQTZDLFlBQUcsS0FBS3FLLGNBQUwsQ0FBb0J0VixHQUFwQixDQUF3QjtBQUFDMUUsZUFBSyxFQUFDa08sVUFBVSxDQUFDNkwsS0FBWCxDQUFpQkMsY0FBakIsQ0FBZ0MzZCxDQUFDLEdBQUMsT0FBRCxHQUFTLFFBQTFDLENBQVA7QUFBMkRtRSxnQkFBTSxFQUFDME4sVUFBVSxDQUFDNkwsS0FBWCxDQUFpQkMsY0FBakIsQ0FBZ0MzZCxDQUFDLEdBQUMsUUFBRCxHQUFVLE9BQTNDO0FBQWxFLFNBQXhCLEdBQWdKLEtBQUsyZCxjQUFMLENBQW9CdFYsR0FBcEIsQ0FBd0I7QUFBQzRLLGFBQUcsRUFBQ2pULENBQUMsR0FBQyxDQUFELEdBQUc2UixVQUFVLENBQUM2TCxLQUFYLENBQWlCQyxjQUFqQixDQUFnQ2hhLEtBQWhDLElBQXVDLEtBQUtxUSxTQUFMLEdBQWUsQ0FBdEQsQ0FBVDtBQUFrRTlGLGNBQUksRUFBQ2xPLENBQUMsR0FBQzZSLFVBQVUsQ0FBQzZMLEtBQVgsQ0FBaUJDLGNBQWpCLENBQWdDaGEsS0FBaEMsSUFBdUMsS0FBS3FRLFNBQUwsR0FBZSxDQUF0RCxDQUFELEdBQTBEO0FBQWxJLFNBQXhCLENBQWhKLEVBQThTLEtBQUt3TSxnQkFBdFQsRUFBdVU7QUFBQyxjQUFJM2pCLENBQUMsR0FBQ2dWLFVBQVUsQ0FBQzZMLEtBQVgsQ0FBaUI3UCxTQUF2Qjs7QUFBaUMsY0FBRyxLQUFLQSxTQUFMLENBQWV4RixHQUFmLENBQW1CO0FBQUMxRSxpQkFBSyxFQUFDOUcsQ0FBQyxDQUFDOEcsS0FBVDtBQUFlUSxrQkFBTSxFQUFDdEgsQ0FBQyxDQUFDc0gsTUFBeEI7QUFBK0IsMEJBQWFpRCxJQUFJLENBQUN3WSxLQUFMLENBQVcsQ0FBQyxFQUFELEdBQUkvaUIsQ0FBQyxDQUFDc0gsTUFBakIsQ0FBNUM7QUFBcUUsMkJBQWNpRCxJQUFJLENBQUN3WSxLQUFMLENBQVcsQ0FBQyxFQUFELEdBQUkvaUIsQ0FBQyxDQUFDOEcsS0FBakIsQ0FBbkY7QUFBMkcsNkJBQWdCLENBQTNIO0FBQTZILDRCQUFlO0FBQTVJLFdBQW5CLEdBQW1LLEtBQUswWSxXQUEzSyxFQUF1TDtBQUFDLGdCQUFJbFgsQ0FBSjtBQUFBLGdCQUFNMEIsQ0FBQyxHQUFDO0FBQUNsRCxtQkFBSyxFQUFDOUcsQ0FBQyxDQUFDOEcsS0FBVDtBQUFlUSxvQkFBTSxFQUFDdEgsQ0FBQyxDQUFDc0g7QUFBeEIsYUFBUjtBQUFBLGdCQUF3QzJDLENBQUMsR0FBQ00sSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsQ0FBQ2xELEtBQVgsRUFBaUJrRCxDQUFDLENBQUMxQyxNQUFuQixDQUExQztBQUFBLGdCQUFxRTRDLENBQUMsR0FBQzVELENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWSxLQUFLZ1osV0FBakIsQ0FBdkU7O0FBQXFHLGdCQUFHdFYsQ0FBQyxDQUFDcEQsS0FBRixHQUFRa0QsQ0FBQyxDQUFDbEQsS0FBVixJQUFpQm9ELENBQUMsQ0FBQzVDLE1BQUYsR0FBUzBDLENBQUMsQ0FBQzFDLE1BQS9CLEVBQXNDO0FBQUMsa0JBQUk2QyxDQUFDLEdBQUMsQ0FBTjtBQUFBLGtCQUFRQyxDQUFDLEdBQUMsQ0FBVjtBQUFZLGVBQUM5QixDQUFDLEdBQUN1QixHQUFHLENBQUNDLE1BQUosQ0FBV0UsQ0FBWCxFQUFhRSxDQUFiLENBQUgsRUFBb0JwRCxLQUFwQixHQUEwQmtELENBQUMsQ0FBQ2xELEtBQTVCLEtBQW9DcUQsQ0FBQyxHQUFDSCxDQUFDLENBQUNsRCxLQUFGLEdBQVF3QixDQUFDLENBQUN4QixLQUFoRCxHQUF1RHdCLENBQUMsQ0FBQ2hCLE1BQUYsR0FBUzBDLENBQUMsQ0FBQzFDLE1BQVgsS0FBb0I4QyxDQUFDLEdBQUNKLENBQUMsQ0FBQzFDLE1BQUYsR0FBU2dCLENBQUMsQ0FBQ2hCLE1BQWpDLENBQXZEO0FBQWdHLGtCQUFJK0MsQ0FBQyxHQUFDRSxJQUFJLENBQUNFLEdBQUwsQ0FBU04sQ0FBVCxFQUFXQyxDQUFYLENBQU47QUFBb0Isa0JBQUVDLENBQUYsS0FBTS9CLENBQUMsQ0FBQ3hCLEtBQUYsSUFBU3VELENBQVQsRUFBVy9CLENBQUMsQ0FBQ2hCLE1BQUYsSUFBVStDLENBQTNCLEdBQThCL0QsQ0FBQyxDQUFDd0csSUFBRixDQUFPLGVBQWUxQixLQUFmLENBQXFCLEdBQXJCLENBQVAsRUFBaUMsVUFBU2pJLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDc0ksaUJBQUMsQ0FBQ3RJLENBQUQsQ0FBRCxHQUFLdUssSUFBSSxDQUFDd1ksS0FBTCxDQUFXemEsQ0FBQyxDQUFDdEksQ0FBRCxDQUFaLENBQUw7QUFBc0IsZUFBckUsQ0FBOUI7QUFBcUcsYUFBNVEsTUFBaVJzSSxDQUFDLEdBQUN1QixHQUFHLENBQUNDLE1BQUosQ0FBVyxLQUFLMFYsV0FBaEIsRUFBNEJ0VixDQUFDLENBQUNwRCxLQUFGLEdBQVFrRCxDQUFDLENBQUNsRCxLQUFWLElBQWlCb0QsQ0FBQyxDQUFDNUMsTUFBRixHQUFTMEMsQ0FBQyxDQUFDMUMsTUFBNUIsR0FBbUM7QUFBQ1IsbUJBQUssRUFBQ21ELENBQVA7QUFBUzNDLG9CQUFNLEVBQUMyQztBQUFoQixhQUFuQyxHQUFzREQsQ0FBbEYsQ0FBRjs7QUFBdUYsZ0JBQUlNLENBQUMsR0FBQ0MsSUFBSSxDQUFDd1ksS0FBTCxDQUFXLEtBQUcvWSxDQUFDLENBQUNsRCxLQUFMLEdBQVcsS0FBR3dCLENBQUMsQ0FBQ3hCLEtBQTNCLENBQU47QUFBQSxnQkFBd0NtVyxDQUFDLEdBQUMxUyxJQUFJLENBQUN3WSxLQUFMLENBQVcsS0FBRy9ZLENBQUMsQ0FBQzFDLE1BQUwsR0FBWSxLQUFHZ0IsQ0FBQyxDQUFDaEIsTUFBNUIsQ0FBMUM7QUFBOEUsaUJBQUtnSSxLQUFMLENBQVd1TyxVQUFYLENBQXNCLE9BQXRCLEVBQStCclMsR0FBL0IsQ0FBbUNsRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVk4QixDQUFaLEVBQWM7QUFBQzhOLGlCQUFHLEVBQUM2RyxDQUFMO0FBQU81TCxrQkFBSSxFQUFDL0c7QUFBWixhQUFkLENBQW5DO0FBQWtFO0FBQUM7QUFBQztBQUFDO0FBQS81SSxHQUE3QjtBQUErN0ksTUFBSTRLLEVBQUUsR0FBQztBQUFDcVAsVUFBTSxFQUFDLENBQUMsV0FBRCxFQUFhLFNBQWIsRUFBdUIsUUFBdkIsQ0FBUjtBQUF5Q3hJLE9BQUcsRUFBQyxDQUFDLENBQTlDO0FBQWdEeUksNkJBQXlCLEVBQUMsQ0FBQyxxQkFBRCxFQUF1QixhQUF2QixFQUFxQywwQkFBckMsRUFBZ0UsMkNBQWhFLEVBQTZHN2YsSUFBN0csQ0FBa0gsSUFBbEgsQ0FBMUU7QUFBa002SCxjQUFVLEVBQUMsb0JBQVNySixDQUFULEVBQVc7QUFBQ21ELE9BQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLeVgsTUFBWixFQUFtQmplLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsYUFBS0EsQ0FBTCxFQUFRd00sVUFBUjtBQUFxQixPQUEzQyxFQUE0QyxJQUE1QyxDQUFuQixHQUFzRXNILE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXFVLFFBQWYsQ0FBd0IsNENBQXhCLENBQXRFO0FBQTRJLEtBQXJXO0FBQXNXekUsT0FBRyxFQUFDLGFBQVM5TCxDQUFULEVBQVc7QUFBQyxXQUFLNFksR0FBTCxLQUFXakksTUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQixrQkFBZ0IsS0FBSytILEdBQWhELEdBQXFEeEksT0FBTyxDQUFDbFUsT0FBUixDQUFnQjJVLFdBQWhCLENBQTRCLG1CQUFpQixLQUFLK0gsR0FBbEQsQ0FBaEUsR0FBd0hqSSxNQUFNLENBQUN6VSxPQUFQLENBQWVxVSxRQUFmLENBQXdCLGtCQUFnQnZRLENBQXhDLENBQXhILEVBQW1Lb1EsT0FBTyxDQUFDbFUsT0FBUixDQUFnQnFVLFFBQWhCLENBQXlCLG1CQUFpQnZRLENBQTFDLENBQW5LLEVBQWdOLEtBQUtzaEIsUUFBTCxJQUFlLEtBQUsxSSxHQUFwQixJQUF5QixLQUFLQSxHQUFMLEtBQVc1WSxDQUFwQyxLQUF3QyxLQUFLLEtBQUs0WSxHQUFWLEVBQWVqRixPQUFmLElBQXlCLEtBQUszVCxDQUFMLEVBQVE4VSxNQUFSLEVBQXpCLEVBQTBDL0MsRUFBRSxDQUFDL1IsQ0FBRCxDQUFGLENBQU0wTixJQUFOLEVBQWxGLENBQWhOLEVBQWdULEtBQUtrTCxHQUFMLEdBQVM1WSxDQUF6VDtBQUEyVCxLQUFqckI7QUFBa3JCc1MsbUJBQWUsRUFBQywyQkFBVTtBQUFDeEssYUFBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLeUUsSUFBTCxFQUFyQjtBQUFpQyxLQUE5dUI7QUFBK3VCb0gsVUFBTSxFQUFDLGtCQUFVO0FBQUMzUixPQUFDLENBQUN3RyxJQUFGLENBQU8sS0FBS3lYLE1BQVosRUFBbUJqZSxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBV25ELENBQVgsRUFBYTtBQUFDa1YsVUFBRSxDQUFDbFYsQ0FBRCxDQUFGLENBQU1BLENBQUMsS0FBRyxLQUFLK2IsR0FBVCxHQUFhLFFBQWIsR0FBc0IsU0FBNUI7QUFBeUMsT0FBL0QsRUFBZ0UsSUFBaEUsQ0FBbkIsR0FBMEYsS0FBSzBJLFFBQUwsR0FBYyxDQUFDLENBQXpHO0FBQTJHLEtBQTUyQjtBQUE2MkIzTixXQUFPLEVBQUMsbUJBQVU7QUFBQ3hRLE9BQUMsQ0FBQ3dHLElBQUYsQ0FBTyxLQUFLeVgsTUFBWixFQUFtQmplLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixVQUFFLENBQUNsVixDQUFELENBQUYsQ0FBTThXLE9BQU47QUFBZ0IsT0FBdEMsRUFBdUMsSUFBdkMsQ0FBbkIsR0FBaUUsS0FBSzJOLFFBQUwsR0FBYyxDQUFDLENBQWhGO0FBQWtGLEtBQWw5QjtBQUFtOUJ2TyxrQkFBYyxFQUFDLHdCQUFTL1MsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixRQUFFLENBQUMsS0FBSzZHLEdBQU4sQ0FBRixDQUFhN0YsY0FBYixDQUE0Qi9TLENBQTVCLEVBQThCbkQsQ0FBOUI7QUFBaUMsS0FBamhDO0FBQWtoQzZRLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixRQUFFLENBQUMsS0FBSzZHLEdBQU4sQ0FBRixDQUFhbEwsSUFBYixDQUFrQjFOLENBQWxCLEVBQW9CbkQsQ0FBcEI7QUFBdUIsS0FBNWpDO0FBQTZqQzhRLFFBQUksRUFBQyxjQUFTM04sQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUNrVixRQUFFLENBQUMsS0FBSzZHLEdBQU4sQ0FBRixDQUFhakwsSUFBYixDQUFrQjNOLENBQWxCLEVBQW9CbkQsQ0FBcEI7QUFBdUIsS0FBdm1DO0FBQXdtQ3lYLFNBQUssRUFBQyxpQkFBVTtBQUFDblIsT0FBQyxDQUFDd0csSUFBRixDQUFPLEtBQUt5WCxNQUFaLEVBQW1CamUsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQ2tWLFVBQUUsQ0FBQ2xWLENBQUQsQ0FBRixDQUFNeVgsS0FBTjtBQUFjLE9BQXBDLEVBQXFDLElBQXJDLENBQW5CO0FBQStELEtBQXhyQztBQUF5ckN4QixVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFJOVMsQ0FBQyxHQUFDd1EsS0FBSyxDQUFDQyxJQUFaO0FBQWlCelEsT0FBQyxJQUFFLEtBQUs4TCxHQUFMLENBQVM5TCxDQUFDLENBQUM0WSxHQUFYLENBQUg7QUFBbUI7QUFBL3VDLEdBQVA7QUFBd3ZDLFNBQU83RyxFQUFFLENBQUN3UCxTQUFILEdBQWE7QUFBQ2xZLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSCxLQUFMLElBQWEsS0FBS21SLFdBQUwsR0FBaUIsQ0FBQyxDQUEvQjtBQUFpQyxLQUF4RDtBQUF5RG5SLFNBQUssRUFBQyxpQkFBVTtBQUFDTSxZQUFNLENBQUNlLElBQVAsQ0FBWXpVLE1BQVosQ0FBbUIsS0FBSzhnQixTQUFMLEdBQWU1YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLGtFQUFwQixFQUF3RnRULE1BQXhGLENBQStGa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0N0VCxNQUF0QyxDQUE2Q2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGdFQsTUFBL0YsQ0FBc0drRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUEvRixDQUFsQyxFQUFxUnRULE1BQXJSLENBQTRSLEtBQUtraEIsS0FBTCxHQUFXaGIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiwwREFBcEIsRUFBZ0Z0VCxNQUFoRixDQUF1RmtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDdFQsTUFBdEMsQ0FBNkNrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRnRULE1BQS9GLENBQXNHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBdkYsQ0FBdlMsRUFBa2hCdFQsTUFBbGhCLENBQXloQixLQUFLd2tCLE1BQUwsR0FBWXRlLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsNkJBQXBCLEVBQW1EdFQsTUFBbkQsQ0FBMERrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUExRCxFQUFzR3RULE1BQXRHLENBQTZHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUE3RyxDQUFyaUIsR0FBeXJCM00sT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixJQUFZLENBQXhCLElBQTJCLEtBQUt3WixTQUFMLENBQWVyakIsR0FBZixDQUFtQixLQUFLeWpCLEtBQXhCLEVBQStCempCLEdBQS9CLENBQW1DLEtBQUsrbUIsTUFBeEMsRUFBZ0Q5VCxJQUFoRCxFQUFwdEIsRUFBMndCLEtBQUs4VCxNQUFMLENBQVl2YixFQUFaLENBQWUsT0FBZixFQUF1Qi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ2xELGNBQUYsSUFBbUI2VCxNQUFNLENBQUNoRCxJQUFQLEVBQW5CO0FBQWlDLE9BQXJELEVBQXNELElBQXRELENBQXZCLENBQTN3QixFQUErMUIsS0FBS29RLFNBQUwsQ0FBZTdYLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMEIvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDMlEsY0FBTSxDQUFDNkQsUUFBUCxJQUFrQixLQUFLa04sWUFBTCxDQUFrQjFoQixDQUFsQixDQUFsQjtBQUF1QyxPQUEzRCxFQUE0RCxJQUE1RCxDQUExQixDQUEvMUIsRUFBNDdCLEtBQUttZSxLQUFMLENBQVdqWSxFQUFYLENBQWMsT0FBZCxFQUFzQi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMyUSxjQUFNLENBQUNnRSxJQUFQLElBQWMsS0FBSytNLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBZDtBQUFtQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUF0QixDQUE1N0I7QUFBaWhDLEtBQTNsQztBQUE0bEM4VSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLM1UsSUFBTDtBQUFZLEtBQTFuQztBQUEybkN3VCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLZ08sTUFBTDtBQUFjLEtBQTVwQztBQUE2cENyTixTQUFLLEVBQUMsaUJBQVU7QUFBQzNELFlBQU0sQ0FBQ2MsTUFBUCxDQUFjMUYsS0FBZCxDQUFvQixjQUFwQixHQUFvQyxLQUFLNlYsRUFBTCxHQUFRLENBQUMsQ0FBN0MsRUFBK0MsS0FBS0MsRUFBTCxHQUFRLENBQUMsQ0FBeEQsRUFBMEQsS0FBS0wsV0FBTCxHQUFpQixDQUFDLENBQTVFLEVBQThFLEtBQUtNLGFBQUwsRUFBOUUsRUFBbUcsS0FBS0MsYUFBTCxFQUFuRztBQUF3SCxLQUF0eUM7QUFBdXlDRCxpQkFBYSxFQUFDLHlCQUFVO0FBQUMsV0FBSy9ELFNBQUwsQ0FBZXJqQixHQUFmLENBQW1CLEtBQUt5akIsS0FBeEIsRUFBK0JsTixJQUEvQixDQUFvQyxDQUFDLENBQXJDLEVBQXdDeUosVUFBeEMsQ0FBbUQsT0FBbkQ7QUFBNEQsS0FBNTNDO0FBQTYzQ3ZhLFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUs2aEIsaUJBQUwsS0FBeUIsS0FBS0wsTUFBTCxJQUFjaFIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjekwsRUFBZCxDQUFpQixTQUFqQixFQUEyQixlQUEzQixFQUEyQyxLQUFLOGIsaUJBQUwsR0FBdUI3ZSxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS3NYLFVBQWIsRUFBd0IsSUFBeEIsQ0FBbEUsQ0FBZCxFQUErR25hLE9BQU8sQ0FBQ21CLFdBQVIsS0FBc0IwSCxNQUFNLENBQUN6VSxPQUFQLENBQWVnSyxFQUFmLENBQWtCLFlBQWxCLEVBQStCLEtBQUtnYyxZQUFMLEdBQWtCL2UsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUsrQyxJQUFiLEVBQWtCLElBQWxCLENBQWpELEVBQTBFeEgsRUFBMUUsQ0FBNkUsWUFBN0UsRUFBMEYsS0FBS2ljLFlBQUwsR0FBa0JoZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS2dELElBQWIsRUFBa0IsSUFBbEIsQ0FBNUcsR0FBcUlnRCxNQUFNLENBQUN6VSxPQUFQLENBQWVnSyxFQUFmLENBQWtCLFdBQWxCLEVBQThCLEtBQUtrYyxpQkFBTCxHQUF1QmpmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMsWUFBSW5ELENBQUMsR0FBQ21ELENBQUMsQ0FBQ2diLEtBQVI7QUFBQSxZQUFjN1YsQ0FBQyxHQUFDbkYsQ0FBQyxDQUFDaWIsS0FBbEI7QUFBd0IsYUFBS29ILG1CQUFMLElBQTBCbGQsQ0FBQyxLQUFHLEtBQUswYyxFQUFULElBQWFobEIsQ0FBQyxLQUFHLEtBQUsra0IsRUFBaEQsS0FBcUQsS0FBS0EsRUFBTCxHQUFRL2tCLENBQVIsRUFBVSxLQUFLZ2xCLEVBQUwsR0FBUTFjLENBQWxCLEVBQW9CLEtBQUt1SSxJQUFMLEVBQXBCLEVBQWdDLEtBQUs0VSxVQUFMLEVBQXJGO0FBQXdHLE9BQXBKLEVBQXFKLElBQXJKLENBQXJELENBQXJJLEVBQXNWM1IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjekwsRUFBZCxDQUFpQixXQUFqQixFQUE2QixlQUE3QixFQUE2QyxLQUFLcWMsbUJBQUwsR0FBeUJwZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSytXLFlBQWIsRUFBMEIsSUFBMUIsQ0FBdEUsRUFBdUd4YixFQUF2RyxDQUEwRyxZQUExRyxFQUF1SCxlQUF2SCxFQUF1SSxLQUFLc2Msb0JBQUwsR0FBMEJyZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS29YLGFBQWIsRUFBMkIsSUFBM0IsQ0FBakssRUFBbU03YixFQUFuTSxDQUFzTSxZQUF0TSxFQUFtTixlQUFuTixFQUFtTyxLQUFLdWMsb0JBQUwsR0FBMEJ0ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSytYLGFBQWIsRUFBMkIsSUFBM0IsQ0FBN1AsQ0FBdFYsRUFBcW5CL1IsTUFBTSxDQUFDelUsT0FBUCxDQUFlZ0ssRUFBZixDQUFrQixZQUFsQixFQUErQixVQUEvQixFQUEwQyxLQUFLeWMsd0JBQUwsR0FBOEJ4ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS2lZLGlCQUFiLEVBQStCLElBQS9CLENBQXhFLEVBQThHMWMsRUFBOUcsQ0FBaUgsWUFBakgsRUFBOEgsVUFBOUgsRUFBeUksS0FBSzJjLHdCQUFMLEdBQThCMWYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUttWSxpQkFBYixFQUErQixJQUEvQixDQUF2SyxDQUFybkIsRUFBazBCM2YsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU0SSxFQUFWLENBQWEsUUFBYixFQUFzQixLQUFLNmMsZ0JBQUwsR0FBc0I1ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSzhILFNBQWIsRUFBdUIsSUFBdkIsQ0FBNUMsQ0FBeDFCLENBQXhJO0FBQTRpQyxLQUF6N0U7QUFBMDdFa1AsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS0ssaUJBQUwsS0FBeUJyUixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNEIsZUFBNUIsRUFBNEMsS0FBS3dQLGlCQUFqRCxHQUFvRSxLQUFLQSxpQkFBTCxHQUF1QixJQUEzRixFQUFnRyxLQUFLRSxZQUFMLEtBQW9CdlIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixZQUFuQixFQUFnQyxLQUFLMFAsWUFBckMsRUFBbUQxUCxHQUFuRCxDQUF1RCxZQUF2RCxFQUFvRSxLQUFLMlAsWUFBekUsRUFBdUYzUCxHQUF2RixDQUEyRixXQUEzRixFQUF1RyxLQUFLNFAsaUJBQTVHLEdBQStIelIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLGVBQTlCLEVBQThDLEtBQUsrUCxtQkFBbkQsRUFBd0UvUCxHQUF4RSxDQUE0RSxZQUE1RSxFQUF5RixlQUF6RixFQUF5RyxLQUFLZ1Esb0JBQTlHLEVBQW9JaFEsR0FBcEksQ0FBd0ksWUFBeEksRUFBcUosZUFBckosRUFBcUssS0FBS2lRLG9CQUExSyxDQUEvSCxFQUErVDlSLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXNXLEdBQWYsQ0FBbUIsWUFBbkIsRUFBZ0MsVUFBaEMsRUFBMkMsS0FBS21RLHdCQUFoRCxFQUEwRW5RLEdBQTFFLENBQThFLFlBQTlFLEVBQTJGLFVBQTNGLEVBQXNHLEtBQUtxUSx3QkFBM0csQ0FBL1QsRUFBb2MxZixDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVWtWLEdBQVYsQ0FBYyxRQUFkLEVBQXVCLEtBQUt1USxnQkFBNUIsQ0FBcGMsRUFBa2YsS0FBS2IsWUFBTCxHQUFrQixJQUF4aEIsQ0FBekg7QUFBd3BCLEtBQXBtRztBQUFxbUduUCxrQkFBYyxFQUFDLHdCQUFTL1MsQ0FBVCxFQUFXbkQsQ0FBWCxFQUFhO0FBQUMsVUFBSXNJLENBQUMsR0FBQ3FMLEtBQUssQ0FBQ0MsSUFBWjs7QUFBaUIsVUFBR3RMLENBQUgsRUFBSztBQUFDLFlBQUkwQixDQUFDLEdBQUM4SixNQUFNLENBQUN6VSxPQUFQLENBQWVvZCxFQUFmLENBQWtCLFVBQWxCLENBQU47QUFBb0N6UyxTQUFDLElBQUU4SixNQUFNLENBQUN6VSxPQUFQLENBQWV3UixJQUFmLEVBQUg7O0FBQXlCLFlBQUk1RyxDQUFDLEdBQUMsS0FBS2lYLFNBQUwsQ0FBZXhILElBQWYsQ0FBb0IsT0FBcEIsQ0FBTjs7QUFBbUMsYUFBS3dILFNBQUwsQ0FBZXJELFVBQWYsQ0FBMEIsT0FBMUI7O0FBQW1DLFlBQUkzVCxDQUFDLEdBQUM2UyxRQUFRLENBQUMsS0FBS21FLFNBQUwsQ0FBZTFWLEdBQWYsQ0FBbUIsWUFBbkIsQ0FBRCxDQUFkO0FBQWlELGFBQUswVixTQUFMLENBQWV4SCxJQUFmLENBQW9CO0FBQUMzVixlQUFLLEVBQUNrRztBQUFQLFNBQXBCLEdBQStCRCxDQUFDLElBQUU4SixNQUFNLENBQUN6VSxPQUFQLENBQWV5UixJQUFmLEVBQWxDOztBQUF3RCxZQUFJM0csQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDa1YsV0FBRixJQUFlLENBQXJCO0FBQUEsWUFBdUJwVCxDQUFDLEdBQUMsS0FBSzhXLFNBQUwsQ0FBZXJqQixHQUFmLENBQW1CLEtBQUt5akIsS0FBeEIsQ0FBekI7QUFBQSxZQUF3RGpYLENBQUMsR0FBQztBQUFDLHdCQUFhSCxDQUFDLEdBQUMsS0FBR0M7QUFBbkIsU0FBMUQ7QUFBQSxZQUFnRkcsQ0FBQyxHQUFDLGFBQVdoRSxDQUFDLENBQUN1RyxJQUFGLENBQU83TSxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCMlQsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCcEcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ0MsT0FBaEMsQ0FBd0NDLElBQXBELElBQTBELENBQW5LOztBQUFxSyxhQUFLOEYsT0FBTCxLQUFlck0sQ0FBQyxHQUFDLENBQWpCLEdBQW9CRixDQUFDLENBQUNnSyxJQUFGLENBQU8sQ0FBQyxDQUFSLEVBQVdrUCxPQUFYLENBQW1CalosQ0FBbkIsRUFBcUJDLENBQXJCLEVBQXVCbkgsQ0FBdkIsQ0FBcEIsRUFBOEMsS0FBSytkLFNBQUwsQ0FBZSxDQUFDcE4sTUFBTSxDQUFDNEQsV0FBUCxLQUFxQixRQUFyQixHQUE4QixLQUEvQixJQUFzQyxPQUFyRCxFQUE4RCxrQkFBOUQsQ0FBOUMsRUFBZ0ksS0FBSzRKLEtBQUwsQ0FBVyxDQUFDeE4sTUFBTSxDQUFDK0QsT0FBUCxLQUFpQixRQUFqQixHQUEwQixLQUEzQixJQUFrQyxPQUE3QyxFQUFzRCxrQkFBdEQsQ0FBaEksRUFBME16TixDQUFDLENBQUMsQ0FBQzlCLENBQUMsQ0FBQ3VRLE1BQUYsR0FBUyxDQUFULEdBQVcsS0FBWCxHQUFpQixRQUFsQixJQUE0QixPQUE3QixDQUFELENBQXVDLGdCQUF2QyxDQUExTSxFQUFtUTFWLENBQUMsSUFBRUEsQ0FBQyxFQUF2UTtBQUEwUSxPQUFqcUIsTUFBc3FCQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQWgwSDtBQUFpMEh5UyxhQUFTLEVBQUMscUJBQVU7QUFBQyxXQUFLK08sV0FBTCxHQUFpQnJlLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVMGxCLFVBQVYsRUFBakI7QUFBd0MsS0FBOTNIO0FBQSszSHRCLGdCQUFZLEVBQUMsc0JBQVMxaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUlwTSxDQUFDLEdBQUMsS0FBS29tQixhQUFMLENBQW1CampCLENBQW5CLENBQU47QUFBQSxZQUE0Qm1GLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JsSixDQUFwQixDQUE5QjtBQUFBLFlBQXFEZ0ssQ0FBQyxHQUFDLENBQUMsQ0FBQ2hLLENBQUYsSUFBSzhULE1BQU0sQ0FBQyxRQUFNeEwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHdEksQ0FBQyxLQUFHLEtBQUtxbUIsYUFBVCxJQUF3QnJjLENBQUMsS0FBRyxLQUFLc2MscUJBQXBDLEVBQTBELFFBQU8sS0FBS0QsYUFBTCxHQUFtQnJtQixDQUFuQixFQUFxQixLQUFLc21CLHFCQUFMLEdBQTJCdGMsQ0FBaEQsRUFBa0Q4SixNQUFNLENBQUNlLElBQVAsQ0FBWSxDQUFDN0ssQ0FBQyxHQUFDLEtBQUQsR0FBTyxRQUFULElBQW1CLE9BQS9CLEVBQXdDLHVCQUF4QyxDQUFsRCxFQUFtSGhLLENBQTFIO0FBQTZILGVBQUksVUFBSjtBQUFlOFQsa0JBQU0sQ0FBQ2UsSUFBUCxDQUFZbkIsUUFBWixDQUFxQixzQkFBckIsRUFBNkNNLFdBQTdDLENBQXlELGtCQUF6RDs7QUFBNkU7O0FBQU0sZUFBSSxNQUFKO0FBQVdGLGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsa0JBQXJCLEVBQXlDTSxXQUF6QyxDQUFxRCxzQkFBckQ7O0FBQTFPO0FBQXdUO0FBQUMsS0FBbDNJO0FBQW0zSWtSLGlCQUFhLEVBQUMsdUJBQVMvaEIsQ0FBVCxFQUFXO0FBQUMyUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS3FTLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUExL0k7QUFBMi9JakIsY0FBVSxFQUFDLG9CQUFTamlCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUNvakIsS0FBTixDQUFILEVBQWdCLElBQUcsTUFBSTVTLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBbkIsRUFBMEI7QUFBQyxZQUFJeEIsQ0FBQyxHQUFDLEtBQUtvbUIsYUFBTCxDQUFtQmpqQixDQUFuQixDQUFOOztBQUE0QjJRLGNBQU0sQ0FBQzlULENBQUQsQ0FBTixJQUFZLEtBQUs2a0IsWUFBTCxDQUFrQjFoQixDQUFsQixDQUFaO0FBQWlDLE9BQXhGLE1BQTZGMlEsTUFBTSxDQUFDaEQsSUFBUDtBQUFjLEtBQTdvSjtBQUE4b0orVSxpQkFBYSxFQUFDLHVCQUFTMWlCLENBQVQsRUFBVztBQUFDLFdBQUswaEIsWUFBTCxDQUFrQjFoQixDQUFsQjtBQUFxQixLQUE3cko7QUFBOHJKaWpCLGlCQUFhLEVBQUMsdUJBQVNqakIsQ0FBVCxFQUFXO0FBQUMsT0FBQyxDQUFELEdBQUcsS0FBS3doQixXQUFSLEdBQW9CLEtBQUtBLFdBQXpCLEdBQXFDLEtBQUtBLFdBQUwsR0FBaUJyZSxDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVTBsQixVQUFWLEVBQXREO0FBQTZFLGFBQU9oakIsQ0FBQyxDQUFDZ2IsS0FBRixHQUFRckssTUFBTSxDQUFDNEMsWUFBUCxDQUFvQnJGLElBQTVCLEdBQWlDLEtBQUtzVCxXQUF0QyxHQUFrRCxLQUFHN1EsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnpQLEtBQTNFLEdBQWlGLFVBQWpGLEdBQTRGLE1BQW5HO0FBQTBHLEtBQS80SjtBQUFnNUppZixxQkFBaUIsRUFBQywyQkFBUzVpQixDQUFULEVBQVc7QUFBQyxXQUFLcWlCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixLQUFLRCxhQUFMLENBQW1CampCLENBQW5CLENBQS9DLEVBQXFFLEtBQUttakIscUJBQUwsR0FBMkJ4UyxNQUFNLENBQUMsUUFBTWhMLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CLEtBQUttZCxhQUF6QixDQUFQLENBQU4sRUFBaEcsRUFBd0osS0FBS0csVUFBTCxFQUF4SjtBQUEwSyxLQUF4bEs7QUFBeWxLUCxxQkFBaUIsRUFBQywyQkFBUzlpQixDQUFULEVBQVc7QUFBQyxXQUFLcWlCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixDQUFDLENBQWhELEVBQWtELEtBQUtDLHFCQUFMLEdBQTJCLENBQUMsQ0FBOUUsRUFBZ0YsS0FBS2IsVUFBTCxFQUFoRjtBQUFrRyxLQUF6dEs7QUFBMHRLNVUsUUFBSSxFQUFDLGNBQVMxTixDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUs0VixRQUFSLEVBQWlCLE9BQU8sS0FBSzBNLFVBQUwsSUFBa0IsTUFBSyxlQUFhbmYsQ0FBQyxDQUFDdUcsSUFBRixDQUFPMUosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQTlCLENBQXpCO0FBQTJELFdBQUs0VixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCLEtBQUswTSxVQUFMLEVBQWpCLEVBQW1DM1IsTUFBTSxDQUFDelUsT0FBUCxDQUFlcVUsUUFBZixDQUF3Qix5QkFBeEIsRUFBbURNLFdBQW5ELENBQStELHdCQUEvRCxDQUFuQyxFQUE0SGpOLE9BQU8sQ0FBQ1csRUFBUixJQUFZWCxPQUFPLENBQUNXLEVBQVIsSUFBWSxDQUF4QixJQUEyQixLQUFLd1osU0FBTCxDQUFlcmpCLEdBQWYsQ0FBbUIsS0FBS3lqQixLQUF4QixFQUErQnpqQixHQUEvQixDQUFtQyxLQUFLK21CLE1BQXhDLEVBQWdEL1QsSUFBaEQsRUFBdkosRUFBOE0sZUFBYXZLLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzFKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUF2TztBQUEwTyxLQUFqaUw7QUFBa2lMMk4sUUFBSSxFQUFDLGNBQVMzTixDQUFULEVBQVc7QUFBQyxVQUFJbkQsQ0FBQyxHQUFDMlQsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCaEgsSUFBbEM7QUFBdUMsV0FBS2tNLFFBQUwsS0FBZ0IsQ0FBQy9ZLENBQUQsSUFBSSxjQUFZQSxDQUFaLElBQWUsWUFBVUEsQ0FBN0MsTUFBa0QsS0FBSytZLFFBQUwsR0FBYyxDQUFDLENBQWYsRUFBaUJqRixNQUFNLENBQUN6VSxPQUFQLENBQWUyVSxXQUFmLENBQTJCLHlCQUEzQixFQUFzRE4sUUFBdEQsQ0FBK0Qsd0JBQS9ELENBQW5FLEdBQTZKLGVBQWFwTixDQUFDLENBQUN1RyxJQUFGLENBQU8xSixDQUFQLENBQWIsSUFBd0JBLENBQUMsRUFBdEw7QUFBeUwsS0FBbnhMO0FBQW94THFqQixjQUFVLEVBQUMsc0JBQVU7QUFBQ3ZiLGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUIwSCxNQUFNLENBQUNjLE1BQVAsQ0FBYzFGLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBckI7QUFBeUQsS0FBbjJMO0FBQW8yTHVXLGNBQVUsRUFBQyxzQkFBVTtBQUFDeGEsYUFBTyxDQUFDbUIsV0FBUixLQUFzQixLQUFLb2EsVUFBTCxJQUFrQjFTLE1BQU0sQ0FBQ2MsTUFBUCxDQUFjM0YsR0FBZCxDQUFrQixjQUFsQixFQUFpQzNJLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBS2dELElBQUw7QUFBWSxPQUEvQixFQUFnQyxJQUFoQyxDQUFqQyxFQUF1RWdELE1BQU0sQ0FBQ0QsSUFBUCxHQUFZQyxNQUFNLENBQUNELElBQVAsQ0FBWXBHLE9BQVosQ0FBb0IwRSxPQUFoQyxHQUF3QyxDQUEvRyxDQUF4QztBQUEySjtBQUFyaE0sR0FBYixFQUFvaU0rQyxFQUFFLENBQUN1UixNQUFILEdBQVU7QUFBQ2phLGNBQVUsRUFBQyxzQkFBVSxDQUFFLENBQXhCO0FBQXlCeUwsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBSzNVLElBQUw7QUFBWSxLQUF2RDtBQUF3RHdULFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUtnTyxNQUFMO0FBQWMsS0FBekY7QUFBMEZ4aEIsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBSzZoQixpQkFBTCxLQUF5QixLQUFLTCxNQUFMLElBQWNoUixNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFNBQWpCLEVBQTJCLGFBQTNCLEVBQXlDLEtBQUs4YixpQkFBTCxHQUF1QjdlLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLc1gsVUFBYixFQUF3QixJQUF4QixDQUFoRSxDQUFkLEVBQTZHdFIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjekwsRUFBZCxDQUFpQixPQUFqQixFQUF5Qix1QkFBekIsRUFBaUQvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUNsRCxjQUFGLElBQW1CNlQsTUFBTSxDQUFDaEQsSUFBUCxFQUFuQjtBQUFpQyxPQUFyRCxFQUFzRCxJQUF0RCxDQUFqRCxFQUE4R3pILEVBQTlHLENBQWlILE9BQWpILEVBQXlILCtCQUF6SCxFQUF5Si9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMyUSxjQUFNLENBQUM2RCxRQUFQLElBQWtCLEtBQUtrTixZQUFMLENBQWtCMWhCLENBQWxCLENBQWxCO0FBQXVDLE9BQTNELEVBQTRELElBQTVELENBQXpKLEVBQTROa0csRUFBNU4sQ0FBK04sT0FBL04sRUFBdU8sMkJBQXZPLEVBQW1RL0MsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQzJRLGNBQU0sQ0FBQ2dFLElBQVAsSUFBYyxLQUFLK00sWUFBTCxDQUFrQjFoQixDQUFsQixDQUFkO0FBQW1DLE9BQXZELEVBQXdELElBQXhELENBQW5RLENBQTdHLEVBQSthMlEsTUFBTSxDQUFDelUsT0FBUCxDQUFlZ0ssRUFBZixDQUFrQixPQUFsQixFQUEwQix1REFBMUIsRUFBa0YsS0FBS3FkLDRCQUFMLEdBQWtDcGdCLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLNlkscUJBQWIsRUFBbUMsSUFBbkMsQ0FBcEgsQ0FBL2EsRUFBNmtCMWIsT0FBTyxDQUFDbUIsV0FBUixLQUFzQjBILE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsWUFBbEIsRUFBK0IsYUFBL0IsRUFBNkMsS0FBS2djLFlBQUwsR0FBa0IvZSxDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSytDLElBQWIsRUFBa0IsSUFBbEIsQ0FBL0QsRUFBd0Z4SCxFQUF4RixDQUEyRixZQUEzRixFQUF3RyxhQUF4RyxFQUFzSCxLQUFLaWMsWUFBTCxHQUFrQmhmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLZ0QsSUFBYixFQUFrQixJQUFsQixDQUF4SSxHQUFpS2dELE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsV0FBbEIsRUFBOEIsYUFBOUIsRUFBNEMsS0FBS2tjLGlCQUFMLEdBQXVCamYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFVBQVMzSyxDQUFULEVBQVc7QUFBQyxZQUFJbkQsQ0FBQyxHQUFDbUQsQ0FBQyxDQUFDZ2IsS0FBUjtBQUFBLFlBQWM3VixDQUFDLEdBQUNuRixDQUFDLENBQUNpYixLQUFsQjtBQUF3QixhQUFLb0gsbUJBQUwsSUFBMEJsZCxDQUFDLEtBQUcsS0FBSzBjLEVBQVQsSUFBYWhsQixDQUFDLEtBQUcsS0FBSytrQixFQUFoRCxLQUFxRCxLQUFLQSxFQUFMLEdBQVEva0IsQ0FBUixFQUFVLEtBQUtnbEIsRUFBTCxHQUFRMWMsQ0FBbEIsRUFBb0IsS0FBS3VJLElBQUwsRUFBcEIsRUFBZ0MsS0FBSzRVLFVBQUwsRUFBckY7QUFBd0csT0FBcEosRUFBcUosSUFBckosQ0FBbkUsQ0FBakssRUFBZ1kzUixNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLHFCQUE3QixFQUFtRC9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ3dHLGVBQUYsSUFBb0IsS0FBS3ViLGFBQUwsQ0FBbUIvaEIsQ0FBbkIsQ0FBcEI7QUFBMEMsT0FBOUQsRUFBK0QsSUFBL0QsQ0FBbkQsQ0FBaFksRUFBeWYyUSxNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLFVBQTdCLEVBQXdDL0MsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLFlBQVU7QUFBQyxhQUFLMFksVUFBTDtBQUFrQixPQUFyQyxFQUFzQyxJQUF0QyxDQUF4QyxDQUF6ZixFQUE4a0IxUyxNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLGFBQTdCLEVBQTJDLEtBQUtxYyxtQkFBTCxHQUF5QnBmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1csWUFBYixFQUEwQixJQUExQixDQUFwRSxFQUFxR3hiLEVBQXJHLENBQXdHLFlBQXhHLEVBQXFILGFBQXJILEVBQW1JLEtBQUtzYyxvQkFBTCxHQUEwQnJmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLb1gsYUFBYixFQUEyQixJQUEzQixDQUE3SixFQUErTDdiLEVBQS9MLENBQWtNLFlBQWxNLEVBQStNLGFBQS9NLEVBQTZOLEtBQUt1YyxvQkFBTCxHQUEwQnRmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1gsYUFBYixFQUEyQixJQUEzQixDQUF2UCxDQUE5a0IsRUFBdTJCL1IsTUFBTSxDQUFDelUsT0FBUCxDQUFlZ0ssRUFBZixDQUFrQixZQUFsQixFQUErQixVQUEvQixFQUEwQyxLQUFLeWMsd0JBQUwsR0FBOEJ4ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBS2lZLGlCQUFiLEVBQStCLElBQS9CLENBQXhFLEVBQThHMWMsRUFBOUcsQ0FBaUgsWUFBakgsRUFBOEgsVUFBOUgsRUFBeUksS0FBSzJjLHdCQUFMLEdBQThCMWYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUttWSxpQkFBYixFQUErQixJQUEvQixDQUF2SyxDQUF2MkIsRUFBb2pDM2YsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVU0SSxFQUFWLENBQWEsUUFBYixFQUFzQixLQUFLNmMsZ0JBQUwsR0FBc0I1ZixDQUFDLENBQUN3SCxLQUFGLENBQVEsS0FBSzhILFNBQWIsRUFBdUIsSUFBdkIsQ0FBNUMsQ0FBMWtDLENBQXRtQjtBQUE0dkQsS0FBdDJEO0FBQXUyRGtQLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtLLGlCQUFMLEtBQXlCclIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFNBQWxCLEVBQTRCLGFBQTVCLEVBQTBDLEtBQUt3UCxpQkFBL0MsR0FBa0UsS0FBS0EsaUJBQUwsR0FBdUIsSUFBekYsRUFBOEZyUixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMEIsdUJBQTFCLEVBQW1EQSxHQUFuRCxDQUF1RCxPQUF2RCxFQUErRCwrQkFBL0QsRUFBZ0dBLEdBQWhHLENBQW9HLE9BQXBHLEVBQTRHLDJCQUE1RyxDQUE5RixFQUF1TzdCLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXNXLEdBQWYsQ0FBbUIsT0FBbkIsRUFBMkIsdURBQTNCLEVBQW1GLEtBQUsrUSw0QkFBeEYsQ0FBdk8sRUFBNlYsS0FBS3JCLFlBQUwsS0FBb0J2UixNQUFNLENBQUN6VSxPQUFQLENBQWVzVyxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLGFBQWhDLEVBQThDLEtBQUswUCxZQUFuRCxFQUFpRTFQLEdBQWpFLENBQXFFLFlBQXJFLEVBQWtGLGFBQWxGLEVBQWdHLEtBQUsyUCxZQUFyRyxFQUFtSDNQLEdBQW5ILENBQXVILFdBQXZILEVBQW1JLGFBQW5JLEVBQWlKLEtBQUs0UCxpQkFBdEosR0FBeUt6UixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIscUJBQTlCLENBQXpLLEVBQThON0IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLFVBQTlCLENBQTlOLEVBQXdRN0IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLHFCQUE5QixFQUFvRCxLQUFLK1AsbUJBQXpELEVBQThFL1AsR0FBOUUsQ0FBa0YsWUFBbEYsRUFBK0YsYUFBL0YsRUFBNkcsS0FBS2dRLG9CQUFsSCxFQUF3SWhRLEdBQXhJLENBQTRJLFlBQTVJLEVBQXlKLGFBQXpKLEVBQXVLLEtBQUtpUSxvQkFBNUssQ0FBeFEsRUFBMGM5UixNQUFNLENBQUN6VSxPQUFQLENBQWVzVyxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLFVBQWhDLEVBQTJDLEtBQUttUSx3QkFBaEQsRUFBMEVuUSxHQUExRSxDQUE4RSxZQUE5RSxFQUEyRixVQUEzRixFQUFzRyxLQUFLcVEsd0JBQTNHLENBQTFjLEVBQStrQjFmLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVa1YsR0FBVixDQUFjLFFBQWQsRUFBdUIsS0FBS3VRLGdCQUE1QixDQUEva0IsRUFBNm5CLEtBQUtiLFlBQUwsR0FBa0IsSUFBbnFCLENBQXRYO0FBQWdpQyxLQUF6NUY7QUFBMDVGNU4sU0FBSyxFQUFDLGlCQUFVO0FBQUMzRCxZQUFNLENBQUNjLE1BQVAsQ0FBYzFGLEtBQWQsQ0FBb0IsY0FBcEIsR0FBb0MsS0FBSzZWLEVBQUwsR0FBUSxDQUFDLENBQTdDLEVBQStDLEtBQUtDLEVBQUwsR0FBUSxDQUFDLENBQXhELEVBQTBELEtBQUtMLFdBQUwsR0FBaUIsQ0FBQyxDQUE1RSxFQUE4RSxLQUFLMEIsYUFBTCxHQUFtQixDQUFDLENBQWxHLEVBQW9HLEtBQUtuQixhQUFMLEVBQXBHO0FBQXlILEtBQXBpRztBQUFxaUdoUCxrQkFBYyxFQUFDLHdCQUFTL1MsQ0FBVCxFQUFXO0FBQUNBLE9BQUMsSUFBRUEsQ0FBQyxFQUFKO0FBQU8sS0FBdmtHO0FBQXdrR3lTLGFBQVMsRUFBQyxxQkFBVTtBQUFDLFdBQUsrTyxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUFqQjtBQUF3QyxLQUFyb0c7QUFBc29HUSx5QkFBcUIsRUFBQywrQkFBU3hqQixDQUFULEVBQVc7QUFBQyxVQUFJbkQsQ0FBQyxHQUFDMlQsS0FBSyxDQUFDQyxJQUFaO0FBQWlCNVQsT0FBQyxJQUFFQSxDQUFDLENBQUM2VCxJQUFGLENBQU9wRyxPQUFQLENBQWU3TCxPQUFsQixJQUEyQixDQUFDNUIsQ0FBQyxDQUFDNlQsSUFBRixDQUFPcEcsT0FBUCxDQUFlN0wsT0FBZixDQUF1QmdRLEtBQW5ELElBQTBEdEwsQ0FBQyxDQUFDbkQsQ0FBQyxDQUFDNUIsTUFBSCxDQUFELENBQVlrYixFQUFaLENBQWUsdURBQWYsTUFBMEV0WixDQUFDLENBQUNsRCxjQUFGLElBQW1Ca0QsQ0FBQyxDQUFDd0csZUFBRixFQUFuQixFQUF1Q21LLE1BQU0sQ0FBQ2hELElBQVAsRUFBakgsQ0FBMUQ7QUFBMEwsS0FBbjNHO0FBQW8zRytULGdCQUFZLEVBQUMsc0JBQVMxaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUlwTSxDQUFDLEdBQUMsS0FBS29tQixhQUFMLENBQW1CampCLENBQW5CLENBQU47QUFBQSxZQUE0Qm1GLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JsSixDQUFwQixDQUE5QjtBQUFBLFlBQXFEZ0ssQ0FBQyxHQUFDLENBQUMsQ0FBQ2hLLENBQUYsSUFBSzhULE1BQU0sQ0FBQyxRQUFNeEwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHLENBQUMsTUFBSXFMLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBdkUsTUFBa0YxUixDQUFDLEdBQUMsQ0FBQyxDQUFyRixHQUF3RkEsQ0FBQyxLQUFHLEtBQUtxbUIsYUFBVCxJQUF3QnJjLENBQUMsS0FBRyxLQUFLc2MscUJBQTVILEVBQWtKLElBQUcsS0FBS0QsYUFBTCxHQUFtQnJtQixDQUFuQixFQUFxQixLQUFLc21CLHFCQUFMLEdBQTJCdGMsQ0FBaEQsRUFBa0RoSyxDQUFyRCxFQUF1RCxRQUFPOFQsTUFBTSxDQUFDZSxJQUFQLENBQVksQ0FBQzdLLENBQUMsR0FBQyxLQUFELEdBQU8sUUFBVCxJQUFtQixPQUEvQixFQUF3Qyx1QkFBeEMsR0FBaUVoSyxDQUF4RTtBQUEyRSxlQUFJLFVBQUo7QUFBZThULGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsc0JBQXJCLEVBQTZDTSxXQUE3QyxDQUF5RCxrQkFBekQ7O0FBQTZFOztBQUFNLGVBQUksTUFBSjtBQUFXRixrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLGtCQUFyQixFQUF5Q00sV0FBekMsQ0FBcUQsc0JBQXJEOztBQUF4TCxTQUF2RCxNQUFpVUYsTUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCO0FBQXVGO0FBQUMsS0FBL2hJO0FBQWdpSWtSLGlCQUFhLEVBQUMsdUJBQVMvaEIsQ0FBVCxFQUFXO0FBQUMyUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS3FTLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUF2cUk7QUFBd3FJakIsY0FBVSxFQUFDLG9CQUFTamlCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUNvakIsS0FBTixLQUFjamdCLENBQUMsQ0FBQ25ELENBQUMsQ0FBQzVCLE1BQUgsQ0FBRCxDQUFZa2IsRUFBWixDQUFldkgsRUFBRSxDQUFDc1AseUJBQWxCLENBQWpCLEVBQThELElBQUcsTUFBSTdRLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBekUsRUFBaUZvQyxNQUFNLENBQUNoRCxJQUFQLEdBQWpGLEtBQW1HO0FBQUMsWUFBSTlRLENBQUMsR0FBQyxLQUFLb21CLGFBQUwsQ0FBbUJqakIsQ0FBbkIsQ0FBTjs7QUFBNEIyUSxjQUFNLENBQUM5VCxDQUFELENBQU4sSUFBWSxLQUFLNmtCLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBWjtBQUFpQztBQUFDLEtBQS81STtBQUFnNkkwaUIsaUJBQWEsRUFBQyx1QkFBUzFpQixDQUFULEVBQVc7QUFBQyxXQUFLMGhCLFlBQUwsQ0FBa0IxaEIsQ0FBbEI7QUFBcUIsS0FBLzhJO0FBQWc5SWlqQixpQkFBYSxFQUFDLHVCQUFTampCLENBQVQsRUFBVztBQUFDLE9BQUMsQ0FBRCxHQUFHLEtBQUt3aEIsV0FBUixHQUFvQixLQUFLQSxXQUF6QixHQUFxQyxLQUFLQSxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUF0RDtBQUE2RSxhQUFPaGpCLENBQUMsQ0FBQ2diLEtBQUYsR0FBUXJLLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUE1QixHQUFpQyxLQUFLc1QsV0FBdEMsR0FBa0QsS0FBRzdRLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0J6UCxLQUEzRSxHQUFpRixVQUFqRixHQUE0RixNQUFuRztBQUEwRyxLQUFqcUo7QUFBa3FKaWYscUJBQWlCLEVBQUMsMkJBQVM1aUIsQ0FBVCxFQUFXO0FBQUMsV0FBS3FpQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsS0FBS0QsYUFBTCxDQUFtQmpqQixDQUFuQixDQUEvQyxFQUFxRSxLQUFLbWpCLHFCQUFMLEdBQTJCeFMsTUFBTSxDQUFDLFFBQU1oTCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQixLQUFLbWQsYUFBekIsQ0FBUCxDQUFOLEVBQWhHLEVBQXdKLEtBQUtHLFVBQUwsRUFBeEo7QUFBMEssS0FBMTJKO0FBQTIySlAscUJBQWlCLEVBQUMsMkJBQVM5aUIsQ0FBVCxFQUFXO0FBQUMsV0FBS3FpQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsQ0FBQyxDQUFoRCxFQUFrRCxLQUFLQyxxQkFBTCxHQUEyQixDQUFDLENBQTlFLEVBQWdGLEtBQUtiLFVBQUwsRUFBaEY7QUFBa0csS0FBMytKO0FBQTQrSjVVLFFBQUksRUFBQyxjQUFTMU4sQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLNFYsUUFBUixFQUFpQixPQUFPLEtBQUswTSxVQUFMLElBQWtCLE1BQUssZUFBYW5mLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzFKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUE5QixDQUF6QjtBQUEyRCxXQUFLNFYsUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQixLQUFLME0sVUFBTCxFQUFqQixFQUFtQzNSLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZXFVLFFBQWYsQ0FBd0Isc0JBQXhCLEVBQWdETSxXQUFoRCxDQUE0RCxxQkFBNUQsQ0FBbkMsRUFBc0gsZUFBYTFOLENBQUMsQ0FBQ3VHLElBQUYsQ0FBTzFKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUEvSTtBQUFrSixLQUEzdEs7QUFBNHRLMk4sUUFBSSxFQUFDLGNBQVMzTixDQUFULEVBQVc7QUFBQyxXQUFLNFYsUUFBTCxLQUFnQixLQUFLQSxRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCakYsTUFBTSxDQUFDelUsT0FBUCxDQUFlMlUsV0FBZixDQUEyQixzQkFBM0IsRUFBbUROLFFBQW5ELENBQTRELHFCQUE1RCxDQUFqQyxHQUFxSCxlQUFhcE4sQ0FBQyxDQUFDdUcsSUFBRixDQUFPMUosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQTlJO0FBQWlKLEtBQTkzSztBQUErM0txakIsY0FBVSxFQUFDLHNCQUFVO0FBQUN2YixhQUFPLENBQUNtQixXQUFSLElBQXFCMEgsTUFBTSxDQUFDYyxNQUFQLENBQWMxRixLQUFkLENBQW9CLFdBQXBCLENBQXJCO0FBQXNELEtBQTM4SztBQUE0OEt1VyxjQUFVLEVBQUMsc0JBQVU7QUFBQ3hhLGFBQU8sQ0FBQ21CLFdBQVIsS0FBc0IsS0FBS29hLFVBQUwsSUFBa0IxUyxNQUFNLENBQUNjLE1BQVAsQ0FBYzNGLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIzSSxDQUFDLENBQUN3SCxLQUFGLENBQVEsWUFBVTtBQUFDLGFBQUtnRCxJQUFMO0FBQVksT0FBL0IsRUFBZ0MsSUFBaEMsQ0FBOUIsRUFBb0VnRCxNQUFNLENBQUNELElBQVAsR0FBWUMsTUFBTSxDQUFDRCxJQUFQLENBQVlwRyxPQUFaLENBQW9CMEUsT0FBaEMsR0FBd0MsQ0FBNUcsQ0FBeEM7QUFBd0o7QUFBMW5MLEdBQTlpTSxFQUEwcVgrQyxFQUFFLENBQUMwUixPQUFILEdBQVc7QUFBQ3BhLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUtnSCxLQUFMLElBQWEsS0FBS21SLFdBQUwsR0FBaUIsQ0FBQyxDQUEvQjtBQUFpQyxLQUF4RDtBQUF5RG5SLFNBQUssRUFBQyxpQkFBVTtBQUFDTSxZQUFNLENBQUNlLElBQVAsQ0FBWXpVLE1BQVosQ0FBbUIsS0FBSzhnQixTQUFMLEdBQWU1YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLG1EQUFwQixFQUF5RXRULE1BQXpFLENBQWdGa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0N0VCxNQUF0QyxDQUE2Q2tHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGdFQsTUFBL0YsQ0FBc0drRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUFoRixDQUFsQyxFQUFzUXRULE1BQXRRLENBQTZRLEtBQUtraEIsS0FBTCxHQUFXaGIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQiwyQ0FBcEIsRUFBaUV0VCxNQUFqRSxDQUF3RWtHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDdFQsTUFBdEMsQ0FBNkNrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRnRULE1BQS9GLENBQXNHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBeEUsQ0FBeFIsRUFBb2Z0VCxNQUFwZixDQUEyZixLQUFLd2tCLE1BQUwsR0FBWXRlLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29OLFFBQVgsQ0FBb0IsMkJBQXBCLEVBQWlEdFQsTUFBakQsQ0FBd0RrRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdvTixRQUFYLENBQW9CLHFCQUFwQixDQUF4RCxFQUFvR3RULE1BQXBHLENBQTJHa0csQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb04sUUFBWCxDQUFvQixlQUFwQixDQUEzRyxDQUF2Z0IsR0FBeXBCM00sT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixJQUFZLENBQXhCLElBQTJCLEtBQUt3WixTQUFMLENBQWVyakIsR0FBZixDQUFtQixLQUFLeWpCLEtBQXhCLEVBQStCempCLEdBQS9CLENBQW1DLEtBQUsrbUIsTUFBeEMsRUFBZ0Q5VCxJQUFoRCxFQUFwckIsRUFBMnVCLEtBQUs4VCxNQUFMLENBQVl2YixFQUFaLENBQWUsT0FBZixFQUF1Qi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ2xELGNBQUYsSUFBbUI2VCxNQUFNLENBQUNoRCxJQUFQLEVBQW5CO0FBQWlDLE9BQXJELEVBQXNELElBQXRELENBQXZCLENBQTN1QixFQUErekIsS0FBS29RLFNBQUwsQ0FBZTdYLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMEIvQyxDQUFDLENBQUN3SCxLQUFGLENBQVEsVUFBUzNLLENBQVQsRUFBVztBQUFDMlEsY0FBTSxDQUFDNkQsUUFBUCxJQUFrQixLQUFLa04sWUFBTCxDQUFrQjFoQixDQUFsQixDQUFsQjtBQUF1QyxPQUEzRCxFQUE0RCxJQUE1RCxDQUExQixDQUEvekIsRUFBNDVCLEtBQUttZSxLQUFMLENBQVdqWSxFQUFYLENBQWMsT0FBZCxFQUFzQi9DLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxVQUFTM0ssQ0FBVCxFQUFXO0FBQUMyUSxjQUFNLENBQUNnRSxJQUFQLElBQWMsS0FBSytNLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBZDtBQUFtQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUF0QixDQUE1NUI7QUFBaS9CLEtBQTNqQztBQUE0akM4VSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLM1UsSUFBTDtBQUFZLEtBQTFsQztBQUEybEN3VCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLZ08sTUFBTDtBQUFjLEtBQTVuQztBQUE2bkNyTixTQUFLLEVBQUMsaUJBQVU7QUFBQzNELFlBQU0sQ0FBQ2MsTUFBUCxDQUFjMUYsS0FBZCxDQUFvQixZQUFwQixHQUFrQyxLQUFLNlYsRUFBTCxHQUFRLENBQUMsQ0FBM0MsRUFBNkMsS0FBS0MsRUFBTCxHQUFRLENBQUMsQ0FBdEQsRUFBd0QsS0FBS0wsV0FBTCxHQUFpQixDQUFDLENBQTFFLEVBQTRFLEtBQUtPLGFBQUwsRUFBNUU7QUFBaUcsS0FBL3VDO0FBQWd2QzVoQixRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLNmhCLGlCQUFMLEtBQXlCLEtBQUtMLE1BQUwsSUFBY2hSLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsYUFBNUIsRUFBMEMsS0FBSzhiLGlCQUFMLEdBQXVCN2UsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtzWCxVQUFiLEVBQXdCLElBQXhCLENBQWpFLENBQWQsRUFBOEd0UixNQUFNLENBQUN6VSxPQUFQLENBQWVnSyxFQUFmLENBQWtCLE9BQWxCLEVBQTBCLHVEQUExQixFQUFrRixLQUFLcWQsNEJBQUwsR0FBa0NwZ0IsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUs2WSxxQkFBYixFQUFtQyxJQUFuQyxDQUFwSCxDQUE5RyxFQUE0UTFiLE9BQU8sQ0FBQ21CLFdBQVIsS0FBc0IwSCxNQUFNLENBQUNnQixNQUFQLENBQWN6TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLGFBQTdCLEVBQTJDLEtBQUtxYyxtQkFBTCxHQUF5QnBmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1csWUFBYixFQUEwQixJQUExQixDQUFwRSxFQUFxR3hiLEVBQXJHLENBQXdHLFlBQXhHLEVBQXFILGFBQXJILEVBQW1JLEtBQUtzYyxvQkFBTCxHQUEwQnJmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLb1gsYUFBYixFQUEyQixJQUEzQixDQUE3SixFQUErTDdiLEVBQS9MLENBQWtNLFlBQWxNLEVBQStNLGFBQS9NLEVBQTZOLEtBQUt1YyxvQkFBTCxHQUEwQnRmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLK1gsYUFBYixFQUEyQixJQUEzQixDQUF2UCxHQUF5Ui9SLE1BQU0sQ0FBQ3pVLE9BQVAsQ0FBZWdLLEVBQWYsQ0FBa0IsWUFBbEIsRUFBK0IsVUFBL0IsRUFBMEMsS0FBS3ljLHdCQUFMLEdBQThCeGYsQ0FBQyxDQUFDd0gsS0FBRixDQUFRLEtBQUtpWSxpQkFBYixFQUErQixJQUEvQixDQUF4RSxFQUE4RzFjLEVBQTlHLENBQWlILFlBQWpILEVBQThILFVBQTlILEVBQXlJLEtBQUsyYyx3QkFBTCxHQUE4QjFmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLbVksaUJBQWIsRUFBK0IsSUFBL0IsQ0FBdkssQ0FBelIsRUFBc2UzZixDQUFDLENBQUM3RixNQUFELENBQUQsQ0FBVTRJLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLEtBQUs2YyxnQkFBTCxHQUFzQjVmLENBQUMsQ0FBQ3dILEtBQUYsQ0FBUSxLQUFLOEgsU0FBYixFQUF1QixJQUF2QixDQUE1QyxDQUE1ZixDQUFyUztBQUE2MkIsS0FBN21FO0FBQThtRWtQLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtLLGlCQUFMLEtBQXlCclIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixTQUFuQixFQUE2QixhQUE3QixFQUEyQyxLQUFLd1AsaUJBQWhELEdBQW1FLEtBQUtBLGlCQUFMLEdBQXVCLElBQTFGLEVBQStGclIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixPQUFuQixFQUEyQix1REFBM0IsRUFBbUYsS0FBSytRLDRCQUF4RixDQUEvRixFQUFxTixLQUFLaEIsbUJBQUwsS0FBMkI1UixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIsYUFBOUIsRUFBNEMsS0FBSytQLG1CQUFqRCxFQUFzRS9QLEdBQXRFLENBQTBFLFlBQTFFLEVBQXVGLGFBQXZGLEVBQXFHLEtBQUtnUSxvQkFBMUcsRUFBZ0loUSxHQUFoSSxDQUFvSSxZQUFwSSxFQUFpSixhQUFqSixFQUErSixLQUFLaVEsb0JBQXBLLEdBQTBMOVIsTUFBTSxDQUFDelUsT0FBUCxDQUFlc1csR0FBZixDQUFtQixZQUFuQixFQUFnQyxVQUFoQyxFQUEyQyxLQUFLbVEsd0JBQWhELEVBQTBFblEsR0FBMUUsQ0FBOEUsWUFBOUUsRUFBMkYsVUFBM0YsRUFBc0csS0FBS3FRLHdCQUEzRyxDQUExTCxFQUErVDFmLENBQUMsQ0FBQzdGLE1BQUQsQ0FBRCxDQUFVa1YsR0FBVixDQUFjLFFBQWQsRUFBdUIsS0FBS3VRLGdCQUE1QixDQUEvVCxFQUE2VyxLQUFLUixtQkFBTCxHQUF5QixJQUFqYSxDQUE5TztBQUFzcEIsS0FBdHhGO0FBQXV4RnhQLGtCQUFjLEVBQUMsd0JBQVMvUyxDQUFULEVBQVduRCxDQUFYLEVBQWE7QUFBQyxVQUFJc0ksQ0FBQyxHQUFDcUwsS0FBSyxDQUFDQyxJQUFaOztBQUFpQixVQUFHdEwsQ0FBSCxFQUFLO0FBQUMsWUFBSTBCLENBQUMsR0FBQyxLQUFLa1gsU0FBTCxDQUFlcmpCLEdBQWYsQ0FBbUIsS0FBS3lqQixLQUF4QixDQUFOOztBQUFxQyxhQUFLSixTQUFMLENBQWUsQ0FBQ3BOLE1BQU0sQ0FBQzRELFdBQVAsS0FBcUIsUUFBckIsR0FBOEIsS0FBL0IsSUFBc0MsT0FBckQsRUFBOEQsa0JBQTlELEdBQWtGLEtBQUs0SixLQUFMLENBQVcsQ0FBQ3hOLE1BQU0sQ0FBQytELE9BQVAsS0FBaUIsUUFBakIsR0FBMEIsS0FBM0IsSUFBa0MsT0FBN0MsRUFBc0Qsa0JBQXRELENBQWxGLEVBQTRKN04sQ0FBQyxDQUFDLENBQUMxQixDQUFDLENBQUN1USxNQUFGLEdBQVMsQ0FBVCxHQUFXLEtBQVgsR0FBaUIsUUFBbEIsSUFBNEIsT0FBN0IsQ0FBRCxDQUF1QyxnQkFBdkMsQ0FBNUosRUFBcU4xVixDQUFDLElBQUVBLENBQUMsRUFBek47QUFBNE4sT0FBdlEsTUFBNFFBLENBQUMsSUFBRUEsQ0FBQyxFQUFKO0FBQU8sS0FBeGxHO0FBQXlsR3lTLGFBQVMsRUFBQyxxQkFBVTtBQUFDLFdBQUsrTyxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUFqQjtBQUF3QyxLQUF0cEc7QUFBdXBHUSx5QkFBcUIsRUFBQywrQkFBU3hqQixDQUFULEVBQVc7QUFBQyxVQUFJbkQsQ0FBQyxHQUFDMlQsS0FBSyxDQUFDQyxJQUFaO0FBQWlCNVQsT0FBQyxJQUFFQSxDQUFDLENBQUM2VCxJQUFGLENBQU9wRyxPQUFQLENBQWU3TCxPQUFsQixJQUEyQixDQUFDNUIsQ0FBQyxDQUFDNlQsSUFBRixDQUFPcEcsT0FBUCxDQUFlN0wsT0FBZixDQUF1QmdRLEtBQW5ELElBQTBEdEwsQ0FBQyxDQUFDbkQsQ0FBQyxDQUFDNUIsTUFBSCxDQUFELENBQVlrYixFQUFaLENBQWUsdURBQWYsTUFBMEV0WixDQUFDLENBQUNsRCxjQUFGLElBQW1Ca0QsQ0FBQyxDQUFDd0csZUFBRixFQUFuQixFQUF1Q21LLE1BQU0sQ0FBQ2hELElBQVAsRUFBakgsQ0FBMUQ7QUFBMEwsS0FBcDRHO0FBQXE0RytULGdCQUFZLEVBQUMsc0JBQVMxaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUlwTSxDQUFDLEdBQUMsS0FBS29tQixhQUFMLENBQW1CampCLENBQW5CLENBQU47QUFBQSxZQUE0Qm1GLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0JsSixDQUFwQixDQUE5QjtBQUFBLFlBQXFEZ0ssQ0FBQyxHQUFDLENBQUMsQ0FBQ2hLLENBQUYsSUFBSzhULE1BQU0sQ0FBQyxRQUFNeEwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHLENBQUMsTUFBSXFMLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBdkUsTUFBa0YxUixDQUFDLEdBQUMsQ0FBQyxDQUFyRixHQUF3RkEsQ0FBQyxLQUFHLEtBQUtxbUIsYUFBVCxJQUF3QnJjLENBQUMsS0FBRyxLQUFLc2MscUJBQTVILEVBQWtKLElBQUcsS0FBS0QsYUFBTCxHQUFtQnJtQixDQUFuQixFQUFxQixLQUFLc21CLHFCQUFMLEdBQTJCdGMsQ0FBaEQsRUFBa0RoSyxDQUFyRCxFQUF1RCxRQUFPOFQsTUFBTSxDQUFDZSxJQUFQLENBQVksQ0FBQzdLLENBQUMsR0FBQyxLQUFELEdBQU8sUUFBVCxJQUFtQixPQUEvQixFQUF3Qyx1QkFBeEMsR0FBaUVoSyxDQUF4RTtBQUEyRSxlQUFJLFVBQUo7QUFBZThULGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsc0JBQXJCLEVBQTZDTSxXQUE3QyxDQUF5RCxrQkFBekQ7O0FBQTZFOztBQUFNLGVBQUksTUFBSjtBQUFXRixrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLGtCQUFyQixFQUF5Q00sV0FBekMsQ0FBcUQsc0JBQXJEOztBQUF4TCxTQUF2RCxNQUFpVUYsTUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCO0FBQXVGO0FBQUMsS0FBaGpJO0FBQWlqSWtSLGlCQUFhLEVBQUMsdUJBQVMvaEIsQ0FBVCxFQUFXO0FBQUMyUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS3FTLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUF4ckk7QUFBeXJJakIsY0FBVSxFQUFDLG9CQUFTamlCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUNvakIsS0FBTixLQUFjamdCLENBQUMsQ0FBQ25ELENBQUMsQ0FBQzVCLE1BQUgsQ0FBRCxDQUFZa2IsRUFBWixDQUFldkgsRUFBRSxDQUFDc1AseUJBQWxCLENBQWpCLEVBQThELElBQUcsTUFBSTdRLEtBQUssQ0FBQ2MsS0FBTixDQUFZalQsTUFBaEIsSUFBd0JtUyxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQnBHLE9BQWhCLENBQXdCaUUsT0FBekUsRUFBaUZvQyxNQUFNLENBQUNoRCxJQUFQLEdBQWpGLEtBQW1HO0FBQUMsWUFBSTlRLENBQUMsR0FBQyxLQUFLb21CLGFBQUwsQ0FBbUJqakIsQ0FBbkIsQ0FBTjs7QUFBNEIyUSxjQUFNLENBQUM5VCxDQUFELENBQU4sSUFBWSxLQUFLNmtCLFlBQUwsQ0FBa0IxaEIsQ0FBbEIsQ0FBWjtBQUFpQztBQUFDLEtBQWg3STtBQUFpN0kwaUIsaUJBQWEsRUFBQyx1QkFBUzFpQixDQUFULEVBQVc7QUFBQyxXQUFLMGhCLFlBQUwsQ0FBa0IxaEIsQ0FBbEI7QUFBcUIsS0FBaCtJO0FBQWkrSWlqQixpQkFBYSxFQUFDLHVCQUFTampCLENBQVQsRUFBVztBQUFDLE9BQUMsQ0FBRCxHQUFHLEtBQUt3aEIsV0FBUixHQUFvQixLQUFLQSxXQUF6QixHQUFxQyxLQUFLQSxXQUFMLEdBQWlCcmUsQ0FBQyxDQUFDN0YsTUFBRCxDQUFELENBQVUwbEIsVUFBVixFQUF0RDtBQUE2RSxhQUFPaGpCLENBQUMsQ0FBQ2diLEtBQUYsR0FBUXJLLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUE1QixHQUFpQyxLQUFLc1QsV0FBdEMsR0FBa0QsS0FBRzdRLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0J6UCxLQUEzRSxHQUFpRixVQUFqRixHQUE0RixNQUFuRztBQUEwRyxLQUFscko7QUFBbXJKK0osUUFBSSxFQUFDLGdCQUFVO0FBQUM5SixhQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLElBQVksQ0FBeEIsSUFBMkIsS0FBS3daLFNBQUwsQ0FBZXJqQixHQUFmLENBQW1CLEtBQUt5akIsS0FBeEIsRUFBK0J6akIsR0FBL0IsQ0FBbUMsS0FBSyttQixNQUF4QyxFQUFnRC9ULElBQWhELEVBQTNCO0FBQWtGLEtBQXJ4SjtBQUFzeEpDLFFBQUksRUFBQyxnQkFBVSxDQUFFLENBQXZ5SjtBQUF3eUppVixxQkFBaUIsRUFBQywyQkFBUzVpQixDQUFULEVBQVc7QUFBQyxXQUFLcWlCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixLQUFLRCxhQUFMLENBQW1CampCLENBQW5CLENBQS9DLEVBQXFFLEtBQUttakIscUJBQUwsR0FBMkJ4UyxNQUFNLENBQUMsUUFBTWhMLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CLEtBQUttZCxhQUF6QixDQUFQLENBQU4sRUFBaEc7QUFBd0osS0FBOTlKO0FBQSs5SkoscUJBQWlCLEVBQUMsMkJBQVM5aUIsQ0FBVCxFQUFXO0FBQUMsV0FBS3FpQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsQ0FBQyxDQUFoRCxFQUFrRCxLQUFLQyxxQkFBTCxHQUEyQixDQUFDLENBQTlFO0FBQWdGLEtBQTdrSztBQUE4a0tFLGNBQVUsRUFBQyxzQkFBVSxDQUFFO0FBQXJtSyxHQUFyclgsRUFBNHhoQmxnQixDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXVpQixLQUFaLENBQWtCLFVBQVMxZ0IsQ0FBVCxFQUFXO0FBQUNzYyxXQUFPLENBQUNqVCxVQUFSO0FBQXFCLEdBQW5ELENBQTV4aEIsRUFBaTFoQmpHLE1BQXgxaEI7QUFBKzFoQixDQUFseHdFLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBUEE7QUFRQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVNzZ0IsbUJBQVQsR0FBK0I7QUFDN0IsUUFBTUMsWUFBWSxHQUFHeGxCLFFBQVEsQ0FBQ3lFLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDZ2hCLFlBQWhFO0FBQ0EsUUFBTUMsYUFBYSxHQUFHdm1CLE1BQU0sQ0FBQzhHLFdBQVAsR0FBcUJqRyxRQUFRLENBQUN5RSxjQUFULENBQXdCLGlCQUF4QixFQUEyQ2doQixZQUFoRSxHQUErRUQsWUFBckc7QUFDQXhsQixVQUFRLENBQUN5RSxjQUFULENBQXdCLHNCQUF4QixFQUFnRGhDLEtBQWhELENBQXNEdUQsTUFBdEQsR0FBK0QwZixhQUFhLEdBQUcsSUFBL0U7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0Msa0JBQVQsR0FBOEI7QUFDNUJDLFFBQU0sQ0FBQyxhQUFELENBQU4sQ0FBc0JDLFFBQXRCLENBQStCO0FBQzdCeGpCLFVBQU0sRUFBRTtBQURxQixHQUEvQjtBQUlBdWpCLFFBQU0sQ0FBQyxhQUFELENBQU4sQ0FBc0I3ZCxFQUF0QixDQUF5QixtQkFBekIsRUFBOEMsVUFBU3JKLENBQVQsRUFBVztBQUN2RG9HLGlCQUFhO0FBQ2QsR0FGRDtBQUlBOGdCLFFBQU0sQ0FBQyxhQUFELENBQU4sQ0FBc0I3ZCxFQUF0QixDQUF5QixvQkFBekIsRUFBK0MsVUFBU3JKLENBQVQsRUFBVztBQUN4RG9HLGlCQUFhO0FBQ2QsR0FGRDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNnaEIsaUJBQVQsR0FBNkI7QUFDM0I7QUFDQTlnQixHQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3QytDLEVBQXhDLENBQTJDLFlBQTNDLEVBQXlELFlBQVc7QUFDbEUsUUFBSSxDQUFDL0MsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJvVyxRQUE3QixDQUFzQyxNQUF0QyxDQUFELElBQWtEcFcsQ0FBQyxDQUFDaEYsUUFBRCxDQUFELENBQVl3RixLQUFaLEtBQXNCLElBQTVFLEVBQWtGO0FBQ2hGUixPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNUMsT0FBakIsQ0FBeUIsT0FBekI7QUFDRDtBQUNGLEdBSkQsRUFJRzJGLEVBSkgsQ0FJTSxZQUpOLEVBSW9CLFlBQVc7QUFDN0IsUUFBSS9DLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCb1csUUFBN0IsQ0FBc0MsTUFBdEMsS0FBaURwVyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosS0FBc0IsSUFBM0UsRUFBaUY7QUFDL0VSLE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUI1QyxPQUFqQixDQUF5QixPQUF6QjtBQUNEO0FBQ0YsR0FSRDtBQVVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFNEMsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIrQyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQzFDLFFBQUkvQyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsVUFBSVIsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJvVyxRQUF2QixDQUFnQyxNQUFoQyxDQUFKLEVBQTZDO0FBQzNDMkssdUJBQWU7QUFDaEIsT0FGRCxNQUVPO0FBQ0xDLHNCQUFjO0FBQ2Y7QUFDRjtBQUNGLEdBUkQsRUFwQjJCLENBOEIzQjs7QUFDQWhoQixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQitDLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNySixDQUFULEVBQVc7QUFDMUNxbkIsbUJBQWU7QUFDaEIsR0FGRDtBQUlBL2dCLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxFQUFqQixDQUFvQixZQUFwQixFQUFrQyxVQUFTa2UsS0FBVCxFQUFnQjtBQUNoRCxRQUFJamhCLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QixVQUFJUixDQUFDLENBQUMsa0JBQWdCQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFwRixJQUFSLENBQWEsT0FBYixDQUFoQixHQUFzQyxNQUF2QyxDQUFELENBQWdETSxNQUFoRCxHQUF5RCxDQUE3RCxFQUFnRTtBQUM5RDhFLFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J3SyxJQUFsQjtBQUNBeEssU0FBQyxDQUFDLGtCQUFnQkEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcEYsSUFBUixDQUFhLE9BQWIsQ0FBakIsQ0FBRCxDQUF5QzJQLElBQXpDO0FBQ0Q7QUFDRjtBQUNGLEdBUEQ7QUFTQXZLLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCK0MsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU3JKLENBQVQsRUFBWTtBQUM3Q0EsS0FBQyxDQUFDMkosZUFBRjtBQUNELEdBRkQ7QUFJQXJELEdBQUMsQ0FBQyxtREFBRCxDQUFELENBQXVEK0MsRUFBdkQsQ0FBMEQsT0FBMUQsRUFBbUUsVUFBU3JKLENBQVQsRUFBWTtBQUM3RXduQixxQkFBaUIsQ0FBQ2xoQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFwRixJQUFSLENBQWEsV0FBYixDQUFELENBQWpCO0FBQ0QsR0FGRDtBQUlBb0YsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IrQyxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxVQUFTckosQ0FBVCxFQUFZO0FBQzVDc25CLGtCQUFjO0FBQ2RFLHFCQUFpQixDQUFDbGhCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXBGLElBQWYsQ0FBb0IsV0FBcEIsQ0FBRCxDQUFqQjtBQUNELEdBSEQ7QUFLQW9GLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCK0MsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBU3JKLENBQVQsRUFBWTtBQUNqREEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FELEtBQUMsQ0FBQzJKLGVBQUY7QUFDQXJELEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ3SyxJQUFuQjtBQUNBeEssS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnVLLElBQWpCO0FBRUF2SyxLQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQndLLElBQTNCO0FBQ0F4SyxLQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QnVLLElBQTVCO0FBQ0QsR0FSRDtBQVVBdkssR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IrQyxFQUF4QixDQUEyQixrQkFBM0IsRUFBK0MsWUFBVztBQUN4RGdlLG1CQUFlO0FBQ2hCLEdBRkQ7QUFHRDs7QUFFRCxTQUFTSSxtQkFBVCxHQUErQjtBQUM3Qm5oQixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QitDLEVBQTVCLENBQStCLGtCQUEvQixFQUFtRCxVQUFTckosQ0FBVCxFQUFZO0FBQzdELFFBQUlzRyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosTUFBdUIsSUFBM0IsRUFBaUM7QUFDL0IsWUFBTTRnQixpQkFBaUIsR0FBR3BoQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRVLFdBQXRCLEtBQXNDNVUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixFQUFoRTtBQUNBLFlBQU1xZ0Isc0JBQXNCLEdBQUdyaEIsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixLQUErQmhCLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLE1BQVosRUFBL0IsR0FBc0RoQixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCNFUsV0FBbEIsRUFBckY7QUFDQTVVLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCa0YsR0FBMUIsQ0FBOEIsS0FBOUIsRUFBcUNrYyxpQkFBaUIsR0FBRyxJQUF6RDtBQUNBcGhCLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCa0YsR0FBdEIsQ0FBMEIsUUFBMUIsRUFBb0NtYyxzQkFBc0IsR0FBRyxJQUE3RDtBQUVBcmhCLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCb04sUUFBMUIsQ0FBbUMsTUFBbkM7QUFDQXBOLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9OLFFBQVYsQ0FBbUIsa0JBQW5CO0FBQ0Q7QUFDRixHQVZEO0FBWUFwTixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QitDLEVBQTVCLENBQStCLG9CQUEvQixFQUFxRCxVQUFTckosQ0FBVCxFQUFZO0FBQy9ELFFBQUlzRyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosTUFBdUIsSUFBM0IsRUFBaUM7QUFDL0JSLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCME4sV0FBMUIsQ0FBc0MsTUFBdEM7QUFDQTFOLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTBOLFdBQVYsQ0FBc0Isa0JBQXRCO0FBQ0QsS0FKOEQsQ0FLL0Q7OztBQUNBLFFBQUkxTixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFyQixPQUFSLENBQWdCLFdBQWhCLEVBQTZCeVgsUUFBN0IsQ0FBc0MsVUFBdEMsQ0FBSixFQUF1RDtBQUNyRHBXLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCa1QsSUFBeEIsQ0FBNkIsRUFBN0I7QUFDQWxULE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCME4sV0FBdEIsQ0FBa0MsUUFBbEM7QUFDQTFOLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDb04sUUFBakMsQ0FBMEMsUUFBMUMsRUFBb0RNLFdBQXBELENBQWdFLFFBQWhFO0FBQ0Q7QUFDRixHQVhEO0FBWUQ7O0FBRUQsU0FBUzRULFVBQVQsQ0FBb0J2b0IsT0FBcEIsRUFBNkI7QUFDM0IsTUFBSWlILENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QnVnQixtQkFBZTtBQUNmL2dCLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCa0YsR0FBdEIsQ0FBMEIsUUFBMUIsRUFBb0MsRUFBcEM7QUFDQWxGLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCME4sV0FBckIsQ0FBaUMsTUFBakM7QUFDQTFOLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCME4sV0FBMUIsQ0FBc0MsTUFBdEM7QUFDRCxHQUxELE1BS087QUFDTCxVQUFNNlQsWUFBWSxHQUFHdmhCLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0IsTUFBdEIsS0FBaUNoQixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLE1BQXBCLEVBQXREO0FBQ0EsVUFBTW9nQixpQkFBaUIsR0FBR3BoQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRVLFdBQXRCLEtBQXNDNVUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixFQUFoRTtBQUNBLFVBQU1xZ0Isc0JBQXNCLEdBQUdyaEIsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixLQUErQmhCLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLE1BQVosRUFBL0IsR0FBc0RoQixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCNFUsV0FBbEIsRUFBckY7QUFDQTVVLEtBQUMsQ0FBQ2pILE9BQUQsQ0FBRCxDQUFXbU0sR0FBWCxDQUFlLEtBQWYsRUFBc0JxYyxZQUFZLEdBQUcsSUFBckM7QUFDQXZoQixLQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBV21NLEdBQVgsQ0FBZSxRQUFmLEVBQXlCLGlCQUFpQnFjLFlBQWpCLEdBQWdDLEtBQXpEO0FBQ0F2aEIsS0FBQyxDQUFDakgsT0FBTyxHQUFHLG1CQUFYLENBQUQsQ0FBaUNtTSxHQUFqQyxDQUFxQyxRQUFyQyxFQUErQ3FjLFlBQVksR0FBRyxJQUE5RDtBQUNBdmhCLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCa0YsR0FBckIsQ0FBeUIsS0FBekIsRUFBZ0NrYyxpQkFBaUIsR0FBRyxJQUFwRDtBQUNBcGhCLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCa0YsR0FBdEIsQ0FBMEIsUUFBMUIsRUFBb0NtYyxzQkFBc0IsR0FBRyxJQUE3RDtBQUNEO0FBQ0Y7O0FBR0QsU0FBU0wsY0FBVCxHQUEwQjtBQUN4QixNQUFJUSxZQUFZLEdBQUd4aEIsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQm9ULElBQWpCLENBQXNCLGNBQXRCLENBQW5CO0FBQ0FrTyxZQUFVLENBQUNFLFlBQUQsQ0FBVjtBQUVBeGhCLEdBQUMsQ0FBQ3doQixZQUFELENBQUQsQ0FBZ0JwVSxRQUFoQixDQUF5QixNQUF6QjtBQUNBcE4sR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIwTixXQUFyQixDQUFpQyxNQUFqQztBQUNBMU4sR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJvTixRQUEzQixDQUFvQyxNQUFwQztBQUVBcE4sR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb04sUUFBVixDQUFtQixrQkFBbkI7QUFDQXBOLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb04sUUFBckIsQ0FBOEIsTUFBOUI7QUFFQXBOLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJ1SyxJQUFqQjtBQUNBdkssR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQndLLElBQW5CO0FBQ0F4SyxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cd0ssSUFBbkI7QUFDQXhLLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCd0ssSUFBekI7QUFFQXhLLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCdUssSUFBNUI7QUFDQXZLLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCd0ssSUFBM0I7QUFDRDs7QUFFRCxTQUFTdVcsZUFBVCxHQUEyQjtBQUN6QixNQUFJUyxZQUFZLEdBQUd4aEIsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQm9ULElBQWpCLENBQXNCLGNBQXRCLENBQW5CO0FBRUFwVCxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjBOLFdBQXJCLENBQWlDLE1BQWpDO0FBQ0ExTixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QjBOLFdBQXZCLENBQW1DLE1BQW5DO0FBQ0ExTixHQUFDLENBQUN3aEIsWUFBRCxDQUFELENBQWdCOVQsV0FBaEIsQ0FBNEIsTUFBNUI7QUFDQTFOLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTBOLFdBQVYsQ0FBc0Isa0JBQXRCO0FBRUExTixHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjBOLFdBQTNCLENBQXVDLE1BQXZDO0FBQ0ExTixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQm9OLFFBQXJCLENBQThCLE1BQTlCO0FBRUFwTixHQUFDLENBQUMsTUFBRCxDQUFELENBQVUwTixXQUFWLENBQXNCLGtCQUF0QjtBQUNBMU4sR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIwTixXQUFyQixDQUFpQyxNQUFqQztBQUVBMU4sR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnVLLElBQWpCO0FBQ0F2SyxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cd0ssSUFBbkI7QUFDQXhLLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ3SyxJQUFuQjtBQUNBeEssR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ3SyxJQUF6QjtBQUVBeEssR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJ3SyxJQUE1QjtBQUNBeEssR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJ3SyxJQUEzQjtBQUNEOztBQUVELFNBQVMwVyxpQkFBVCxDQUEyQk8sU0FBM0IsRUFBc0M7QUFDcEMsTUFBSUEsU0FBUyxLQUFLcmlCLFNBQWxCLEVBQTZCO0FBQzNCWSxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cd0ssSUFBbkI7QUFDQXhLLEtBQUMsQ0FBQ3loQixTQUFELENBQUQsQ0FBYWxYLElBQWI7QUFFQXZLLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCd0ssSUFBNUI7QUFDQXhLLEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCa0YsR0FBM0IsQ0FBK0IsU0FBL0IsRUFBMEMsT0FBMUM7QUFDRDtBQUNGOztBQUVELFNBQVN3YyxtQkFBVCxHQUErQjtBQUM3QjtBQUNBMWhCLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCK0MsRUFBNUIsQ0FBK0Isb0JBQS9CLEVBQXFELFVBQVNySixDQUFULEVBQVk7QUFDL0RzRyxLQUFDLENBQUN0RyxDQUFDLENBQUN1QixNQUFILENBQUQsQ0FBWTBELE9BQVosQ0FBb0IsSUFBcEIsRUFBMEIrTyxXQUExQixDQUFzQyxNQUF0QztBQUNELEdBRkQ7QUFJQTFOLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCK0MsRUFBNUIsQ0FBK0Isa0JBQS9CLEVBQW1ELFVBQVNySixDQUFULEVBQVk7QUFDN0RzRyxLQUFDLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBRCxDQUFjME4sV0FBZCxDQUEwQixNQUExQjtBQUNBMU4sS0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVkwRCxPQUFaLENBQW9CLElBQXBCLEVBQTBCeU8sUUFBMUIsQ0FBbUMsTUFBbkM7QUFDRCxHQUhELEVBTjZCLENBVzdCOztBQUNBcE4sR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIrQyxFQUEzQixDQUE4QixrQkFBOUIsRUFBa0QsVUFBVXJKLENBQVYsRUFBYTtBQUM3RHNHLEtBQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZMG1CLElBQVosQ0FBaUIsS0FBakIsRUFBd0JqVSxXQUF4QixDQUFvQyxNQUFwQztBQUNELEdBRkQ7QUFHQTFOLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCK0MsRUFBM0IsQ0FBOEIsb0JBQTlCLEVBQW9ELFVBQVVySixDQUFWLEVBQWE7QUFDL0RzRyxLQUFDLENBQUN0RyxDQUFDLENBQUN1QixNQUFILENBQUQsQ0FBWTBtQixJQUFaLENBQWlCLEtBQWpCLEVBQXdCdlUsUUFBeEIsQ0FBaUMsTUFBakM7QUFDRCxHQUZEO0FBR0FwTixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCK0MsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN2Qy9DLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsbUJBQWhCLEVBQXFDZ2pCLElBQXJDLENBQTBDLEtBQTFDLEVBQWlEdmtCLE9BQWpELENBQXlELE9BQXpEO0FBQ0QsR0FGRDtBQUdEOztBQUdELFNBQVMwQyxhQUFULEdBQXlCO0FBQ3ZCeWdCLHFCQUFtQjtBQUNuQjs7QUFDQSxNQUFJdmdCLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixLQUFzQixHQUExQixFQUErQjtBQUM3QjtBQUNEOztBQUNEO0FBQ0E4Z0IsWUFBVSxDQUFDdGhCLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJvVCxJQUFqQixDQUFzQixjQUF0QixDQUFELENBQVY7QUFDQTtBQUNBcFQsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J1SyxJQUF0Qjs7QUFDQXRLLG1CQUFPdUssSUFBUDtBQUNEOztBQUVELFNBQVM1SyxJQUFULEdBQWdCO0FBQ2Q7QUFDQStnQixvQkFBa0I7QUFDbEIzZ0IsR0FBQyxDQUFDLFlBQVk7QUFDWkEsS0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI0aEIsT0FBN0I7QUFDRCxHQUZBLENBQUQsQ0FIYyxDQU1kOztBQUNBNWhCLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CK0MsRUFBcEIsQ0FBdUIsbUJBQXZCLEVBQTRDLFVBQVVySixDQUFWLEVBQWE7QUFDdkRBLEtBQUMsQ0FBQ21vQix3QkFBRjtBQUNELEdBRkQ7QUFHQTtBQUNBO0FBQ0Esd0NBWmMsQ0FhZDs7QUFDQWYsbUJBQWlCO0FBQ2pCSyxxQkFBbUI7QUFFbkJPLHFCQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFFQTtBQUVBbkIscUJBQW1COztBQUNuQixNQUFJdmdCLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixLQUFzQixHQUExQixFQUErQjtBQUM3QjtBQUNEOztBQUNEO0FBQ0E7QUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNFOztBQUNBUixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnVLLElBQXZCO0FBQ0F2SyxHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnVLLElBQXRCO0FBQ0F2SyxHQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ3VLLElBQTNDO0FBQ0Q7O1FBRVEzSyxJLEdBQUFBLEk7UUFBTUUsYSxHQUFBQSxhOzs7Ozs7Ozs7Ozs7Ozs7QUMxUmY7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQVlBO0FBQ0E7QUFJQTtBQUNBOUYsZ0JBQU1vUSxRQUFOLENBQWUwWCxPQUFmLENBQXVCN25CLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGtEQUE5QztBQUNBRCxnQkFBTW9RLFFBQU4sQ0FBZTBYLE9BQWYsQ0FBdUI3bkIsSUFBdkIsQ0FBNEI4bkIsTUFBNUIsR0FBcUMsZ0RBQXJDO0FBQ0EvbkIsZ0JBQU1vUSxRQUFOLENBQWUwWCxPQUFmLENBQXVCN25CLElBQXZCLENBQTRCLGtCQUE1QixJQUFrRCxnQkFBbEQ7QUFFQWUsUUFBUSxDQUFDdkIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07QUFDbEQ7QUFDQSxRQUFNdW9CLFNBQVMsR0FBRyx5QkFBVTtBQUFFampCLFlBQVEsRUFBRTtBQUFaLEdBQVYsQ0FBbEI7QUFFQTtBQUVBLHdEQU5rRCxDQVFsRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0Esd0NBdEJrRCxDQXdCbEQ7O0FBQ0EvRCxVQUFRLENBQUNPLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBdUR5bUIsSUFBRCxJQUFVO0FBQzlELFFBQUlybUIsc0JBQUosQ0FBaUJxbUIsSUFBakIsRUFBdUI7QUFDckIva0IsWUFBTSxDQUFDbkQsS0FBRCxFQUFRO0FBQ1ppQixnQkFBUSxDQUFDL0IsYUFBVCxDQUF3QixpQ0FBZ0NjLEtBQUssR0FBRyxDQUFFLEVBQWxFLEVBQXFFeUQsT0FBckUsR0FBK0UsSUFBL0U7QUFDRDs7QUFIb0IsS0FBdkI7QUFLRCxHQU5ELEVBekJrRCxDQWlDbEQ7O0FBQ0EsTUFBSXhDLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsaUJBQXZCLENBQUosRUFBK0M7QUFDN0MsbUNBQWdCK0IsUUFBUSxDQUFDL0IsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBaEI7QUFDQSxrQ0FBZStCLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWY7QUFDRCxHQXJDaUQsQ0F1Q2xEOzs7QUFDQStCLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxPQUE5QyxDQUFzRHltQixJQUFJLElBQUksSUFBSTlrQixzQkFBSixDQUFpQjhrQixJQUFqQixDQUE5RCxFQXhDa0QsQ0EwQ2xEOztBQUNBLE1BQUlqbkIsUUFBUSxDQUFDL0IsYUFBVCxDQUF1Qiw2Q0FBdkIsQ0FBSixFQUEyRTtBQUFFLFFBQUkwRSw2QkFBSjtBQUE0QixHQTNDdkQsQ0E2Q2xEOzs7QUFDQTtBQUNELENBL0NELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7OztBQUhBOztBQUNBOztBQUNBO0FBR0EsTUFBTXVrQixRQUFRLEdBQUcsU0FBU0MsYUFBVCxHQUF5QjtBQUN4Q0MsZ0JBQWMsQ0FBQ3BpQixDQUFDLENBQUMseUJBQUQsQ0FBRixDQUFkO0FBQ0FvaUIsZ0JBQWMsQ0FBQ3BpQixDQUFDLENBQUMsd0JBQUQsQ0FBRixDQUFkO0FBQ0FvaUIsZ0JBQWMsQ0FBQ3BpQixDQUFDLENBQUMsNEJBQUQsQ0FBRixDQUFkO0FBRUFxaUIsdUJBQXFCLENBQUNyaUIsQ0FBQyxDQUFDLGlCQUFELENBQUYsQ0FBckI7QUFDQXFpQix1QkFBcUIsQ0FBQ3JpQixDQUFDLENBQUMsNkJBQUQsQ0FBRixDQUFyQjtBQUNELENBUEQ7QUFTQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNvaUIsY0FBVCxDQUF3QkUsZUFBeEIsRUFBeUM7QUFDdkMsUUFBTW5iLE9BQU8sR0FBRztBQUNkb2IsWUFBUSxFQUFFLElBREk7QUFFZEMsU0FBSyxFQUFFLEdBRk87QUFHZEMsZ0JBQVksRUFBRSxDQUhBO0FBSWRDLGtCQUFjLEVBQUUsQ0FKRjtBQUtkQyxnQkFBWSxFQUFFTCxlQUFlLENBQUM5USxJQUFoQixDQUFxQixrQkFBckIsQ0FMQTtBQU1kb1IsYUFBUyxFQUFFLGlHQU5HO0FBT2RDLGFBQVMsRUFBRSw0RkFQRztBQVFkQyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRWhuQixjQUFRLEVBQUU7QUFDUjBtQixvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRSxDQUZSO0FBR1JILGdCQUFRLEVBQUU7QUFIRjtBQUZaLEtBRFUsRUFTVjtBQUNFUSxnQkFBVSxFQUFFLElBRGQ7QUFFRWhuQixjQUFRLEVBQUU7QUFDUjBtQixvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRSxDQUZSO0FBR1JILGdCQUFRLEVBQUU7QUFIRjtBQUZaLEtBVFUsRUFpQlY7QUFDRVEsZ0JBQVUsRUFBRSxHQURkO0FBRUVobkIsY0FBUSxFQUFFO0FBQ1IwbUIsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUU7QUFGUjtBQUZaLEtBakJVO0FBUkUsR0FBaEI7O0FBa0NBLE1BQUlKLGVBQWUsSUFBSSxDQUFDQSxlQUFlLENBQUNsTSxRQUFoQixDQUF5QixtQkFBekIsQ0FBeEIsRUFBdUU7QUFDckVrTSxtQkFBZSxDQUFDVSxLQUFoQixDQUFzQjdiLE9BQXRCO0FBRUFtYixtQkFBZSxDQUFDdmYsRUFBaEIsQ0FBbUIsYUFBbkIsRUFBa0MsVUFBU2tlLEtBQVQsRUFBZ0IrQixLQUFoQixFQUF1QkMsWUFBdkIsRUFBcUNDLFNBQXJDLEVBQStDO0FBQy9FQywwQkFBb0IsQ0FBQ2IsZUFBRCxDQUFwQjtBQUNELEtBRkQ7QUFHRDtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTRCxxQkFBVCxDQUErQkMsZUFBL0IsRUFBZ0Q7QUFDOUMsTUFBSWMsbUJBQW1CLEdBQUlkLGVBQWUsS0FBS3RpQixDQUFDLENBQUMsNkJBQUQsQ0FBaEQ7QUFDQSxRQUFNbUgsT0FBTyxHQUFHO0FBQ1pvYixZQUFRLEVBQUUsSUFERTtBQUVaQyxTQUFLLEVBQUUsR0FGSztBQUdaQyxnQkFBWSxFQUFFLENBSEY7QUFJWkMsa0JBQWMsRUFBRSxDQUpKO0FBS1pXLGVBQVcsRUFBRSxJQUxEO0FBTVpWLGdCQUFZLEVBQUVMLGVBQWUsQ0FBQzlRLElBQWhCLENBQXFCLGtCQUFyQixDQU5GO0FBT1pvUixhQUFTLEVBQUUsNEZBUEM7QUFRWkMsYUFBUyxFQUFFLHdGQVJDO0FBU1pDLGNBQVUsRUFBRSxDQUNaO0FBQ0VDLGdCQUFVLEVBQUUsR0FEZDtBQUVFaG5CLGNBQVEsRUFBRTtBQUNSMG1CLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFO0FBRlI7QUFGWixLQURZLEVBUVo7QUFDRUssZ0JBQVUsRUFBRSxHQURkO0FBRUVobkIsY0FBUSxFQUFFO0FBRlosS0FSWTtBQVRBLEdBQWhCOztBQXdCQSxNQUFJdW1CLGVBQWUsSUFBSSxDQUFDQSxlQUFlLENBQUNsTSxRQUFoQixDQUF5QixtQkFBekIsQ0FBeEIsRUFBdUU7QUFDckVrTSxtQkFBZSxDQUFDVSxLQUFoQixDQUFzQjdiLE9BQXRCOztBQUNBLFFBQUlpYyxtQkFBSixFQUF5QjtBQUN2QkUsOEJBQXdCO0FBQ3pCO0FBQ0YsR0FMRCxNQUtPO0FBQ0wsUUFBR3RqQixDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosS0FBc0IsR0FBdEIsSUFBNkI4aEIsZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQlUsS0FBaEQsSUFBeURWLGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJVLEtBQW5CLENBQXlCTyxTQUFyRixFQUFnRztBQUM5RmpCLHFCQUFlLENBQUNVLEtBQWhCLENBQXNCN2IsT0FBdEI7QUFDRDs7QUFDRCxRQUFJaWMsbUJBQUosRUFBeUI7QUFDdkJkLHFCQUFlLENBQUN2ZixFQUFoQixDQUFtQixhQUFuQixFQUFrQyxVQUFTaWdCLEtBQVQsRUFBZTtBQUMvQ00sZ0NBQXdCO0FBQ3pCLE9BRkQ7QUFHRDtBQUNGO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNFLHFCQUFULENBQStCbEIsZUFBL0IsRUFBZ0Q7QUFDOUMsUUFBTW1CLElBQUksR0FBRztBQUNYbEIsWUFBUSxFQUFFLElBREM7QUFFWEMsU0FBSyxFQUFFLEdBRkk7QUFHWGtCLFFBQUksRUFBRSxDQUhLO0FBSVhqQixnQkFBWSxFQUFFLENBSkg7QUFLWEMsa0JBQWMsRUFBRSxDQUxMO0FBTVhpQixnQkFBWSxFQUFFLENBTkg7QUFPWEMsa0JBQWMsRUFBRSxJQVBMO0FBUVhqQixnQkFBWSxFQUFFTCxlQUFlLENBQUM5USxJQUFoQixDQUFxQixrQkFBckIsQ0FSSDtBQVNYb1IsYUFBUyxFQUFFLGlHQVRBO0FBVVhDLGFBQVMsRUFBRSw0RkFWQTtBQVdYQyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRWhuQixjQUFRLEVBQUU7QUFDUjJuQixZQUFJLEVBQUUsQ0FERTtBQUVSQyxvQkFBWSxFQUFFO0FBRk47QUFGWixLQURVO0FBWEQsR0FBYjtBQXNCQSxRQUFNRSxnQkFBZ0IsR0FBRyxDQUFDdkIsZUFBZSxDQUFDbE0sUUFBaEIsQ0FBeUIsUUFBekIsQ0FBMUI7O0FBQ0EsTUFBR3lOLGdCQUFnQixJQUFJLENBQUN2QixlQUFlLENBQUNsTSxRQUFoQixDQUF5QixtQkFBekIsQ0FBeEIsRUFBdUU7QUFDckVrTSxtQkFBZSxDQUFDVSxLQUFoQixDQUFzQlMsSUFBdEI7QUFDRCxHQUZELE1BRU8sSUFBSW5CLGVBQWUsQ0FBQ2xNLFFBQWhCLENBQXlCLG1CQUF6QixDQUFKLEVBQW1EO0FBQ3hEa00sbUJBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0IsU0FBdEI7QUFDQVYsbUJBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0JTLElBQXRCO0FBQ0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0ssb0JBQVQsR0FBZ0M7QUFDOUIsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQS9qQixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cd0csSUFBbkIsQ0FBd0IsVUFBU3dkLEtBQVQsRUFBZ0I7QUFDdEMsVUFBTWhiLEtBQUssR0FBRztBQUNaN1AsU0FBRyxFQUFHNkcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcEYsSUFBUixDQUFhLE9BQWIsQ0FETTtBQUVaOFAsZUFBUyxFQUFHMUssQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcEYsSUFBUixDQUFhLFdBQWI7QUFGQSxLQUFkO0FBSUFtcEIsVUFBTSxDQUFDaGEsSUFBUCxDQUFZZixLQUFaO0FBQ0QsR0FORDtBQU9BLFFBQU1pYixhQUFhLEdBQUdoZ0IsSUFBSSxDQUFDRSxHQUFMLENBQVVuSixRQUFRLENBQUM0UyxJQUFULENBQWNzVyxZQUF4QixFQUFzQ2xwQixRQUFRLENBQUM0UyxJQUFULENBQWN1VyxZQUFwRCxFQUNwQm5wQixRQUFRLENBQUM2RixlQUFULENBQXlCNGYsWUFETCxFQUNtQnpsQixRQUFRLENBQUM2RixlQUFULENBQXlCcWpCLFlBRDVDLEVBQzBEbHBCLFFBQVEsQ0FBQzZGLGVBQVQsQ0FBeUJzakIsWUFEbkYsQ0FBdEI7QUFHQW5wQixVQUFRLENBQUNPLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFtRCxDQUFDd0MsSUFBRCxFQUFPZ21CLEtBQVAsS0FBaUI7QUFDbEVobUIsUUFBSSxDQUFDdkUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU3duQixLQUFULEVBQWdCO0FBQzdDQSxXQUFLLENBQUN0bkIsY0FBTjs7QUFDQXNHLHVCQUFPc0ssSUFBUCxDQUNFd1osTUFERixFQUVFO0FBQ0VuWixrQkFBVSxFQUFFLFVBRGQ7QUFFRU8sWUFBSSxFQUFFLElBRlI7QUFHRW5LLGNBQU0sRUFBRWlqQjtBQUhWLE9BRkYsRUFPRWhvQixNQUFNLENBQUMrbkIsS0FBSyxHQUFHLENBQVQsQ0FQUjtBQVVELEtBWkQ7QUFhRCxHQWREO0FBZUQ7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNiLG9CQUFULENBQThCYixlQUE5QixFQUErQztBQUM3QyxRQUFNOEIsV0FBVyxHQUFHLDZCQUFwQjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxhQUFKOztBQUNBLE1BQUloQyxlQUFlLEtBQUtsakIsU0FBeEIsRUFBbUM7QUFDakNpbEIsbUJBQWUsR0FBR3JrQixDQUFDLENBQUNva0IsV0FBRCxFQUFjOUIsZUFBZCxDQUFELENBQWdDMU4sV0FBaEMsRUFBbEI7QUFDQTBQLGlCQUFhLEdBQUdyZ0IsSUFBSSxDQUFDd1ksS0FBTCxDQUFXNEgsZUFBZSxHQUFHLENBQWxCLEdBQXNCLEVBQWpDLENBQWhCO0FBQ0Fya0IsS0FBQyxDQUFDc2lCLGVBQUQsQ0FBRCxDQUFtQjlRLElBQW5CLENBQXdCLGtCQUF4QixFQUE0Q3RNLEdBQTVDLENBQWdELEtBQWhELEVBQXVEb2YsYUFBYSxHQUFHLElBQXZFO0FBQ0QsR0FKRCxNQUlPO0FBQ0xELG1CQUFlLEdBQUdya0IsQ0FBQyxDQUFDb2tCLFdBQUQsQ0FBRCxDQUFleFAsV0FBZixFQUFsQjtBQUNBMFAsaUJBQWEsR0FBR3JnQixJQUFJLENBQUN3WSxLQUFMLENBQVc0SCxlQUFlLEdBQUcsQ0FBbEIsR0FBc0IsRUFBakMsQ0FBaEI7QUFDQXJrQixLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnVrQixHQUF0QixDQUEwQixrQkFBMUIsRUFBOENyZixHQUE5QyxDQUFrRCxLQUFsRCxFQUF5RG9mLGFBQWEsR0FBRyxJQUF6RTtBQUNEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2hCLHdCQUFULENBQWtDdnFCLE9BQWxDLEVBQTJDO0FBQ3pDLFFBQU1zckIsZUFBZSxHQUFHcmtCLENBQUMsQ0FBQyxtQkFBRCxFQUFzQmpILE9BQXRCLENBQUQsQ0FBZ0M2YixXQUFoQyxFQUF4QjtBQUNBLFFBQU0wUCxhQUFhLEdBQUdyZ0IsSUFBSSxDQUFDd1ksS0FBTCxDQUFXNEgsZUFBWCxDQUF0QjtBQUNBcmtCLEdBQUMsQ0FBQ2pILE9BQUQsQ0FBRCxDQUFXeVksSUFBWCxDQUFnQixrQkFBaEIsRUFBb0N0TSxHQUFwQyxDQUF3QyxLQUF4QyxFQUErQ29mLGFBQWEsR0FBRyxJQUEvRDtBQUNEOztRQUVPcEMsUSxHQUFBQSxRO1FBQVVpQixvQixHQUFBQSxvQjtRQUFzQkcsd0IsR0FBQUEsd0I7UUFBMEJFLHFCLEdBQUFBLHFCO1FBQXVCTSxvQixHQUFBQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNekY7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNaG9CLFNBQVMsR0FBR2tFLENBQUMsQ0FBQyxXQUFELENBQW5CO0FBQ0EsTUFBTXdrQixhQUFhLEdBQUd4a0IsQ0FBQyxDQUFDLE1BQUQsQ0FBdkI7O0FBRUEsTUFBTXlrQixJQUFJLEdBQUcsU0FBU3RDLGFBQVQsR0FBeUI7QUFDcEM7QUFDQTtBQUNBbmlCLEdBQUMsQ0FBQyxhQUFELEVBQWdCbEUsU0FBaEIsQ0FBRCxDQUE0QmlILEVBQTVCLENBQStCLE9BQS9CLEVBQXdDLFlBQVc7QUFDakQsUUFBSS9DLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9XLFFBQVIsQ0FBaUIsUUFBakIsQ0FBSixFQUFnQztBQUM5QnBXLE9BQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCNUMsT0FBekIsQ0FBaUMsUUFBakM7QUFDRCxLQUZELE1BRU87QUFDTDRDLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0J2QixPQUF4QixDQUFnQyxRQUFoQztBQUNEO0FBQ0YsR0FORCxFQUhvQyxDQVdwQzs7QUFDQTRDLEdBQUMsQ0FBQyxhQUFELEVBQWdCbEUsU0FBaEIsQ0FBRCxDQUE0QmlILEVBQTVCLENBQStCLE9BQS9CLEVBQXdDLFlBQVc7QUFDakQsVUFBTTJoQixNQUFNLEdBQUdqTyxRQUFRLENBQUN6VyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEya0IsR0FBUixFQUFELENBQXZCOztBQUNBLFFBQUlELE1BQU0sSUFBSWpPLFFBQVEsQ0FBQ3pXLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9ULElBQVIsQ0FBYSxLQUFiLENBQUQsQ0FBdEIsRUFBNkM7QUFDM0MsWUFBTXdSLFlBQVksR0FBRzVrQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFwRixJQUFSLENBQWEsV0FBYixDQUFyQjtBQUNBb0YsT0FBQyxDQUFDLGlCQUFpQjRrQixZQUFqQixHQUFnQyxJQUFqQyxDQUFELENBQXdDRCxHQUF4QyxDQUE0Q0QsTUFBNUM7QUFDRDtBQUNGLEdBTkQsRUFab0MsQ0FvQnBDOztBQUNBMWtCLEdBQUMsQ0FBQyxNQUFELEVBQVNsRSxTQUFULENBQUQsQ0FBcUJpSCxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFVckosQ0FBVixFQUFhO0FBQzVDLFFBQUkrYyxRQUFRLENBQUN6VyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEya0IsR0FBUixFQUFELENBQVIsSUFBMkJsTyxRQUFRLENBQUN6VyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVCxJQUFSLENBQWEsS0FBYixDQUFELENBQXZDLEVBQThEO0FBQzVEcFQsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMmtCLEdBQVIsQ0FBWTNrQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVCxJQUFSLENBQWEsS0FBYixDQUFaO0FBQ0Q7QUFDRixHQUpELEVBckJvQyxDQTJCcEM7O0FBQ0FwVCxHQUFDLENBQUMsa0JBQUQsRUFBcUJsRSxTQUFyQixDQUFELENBQWlDaUgsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkMsWUFBVztBQUN0RDtBQUNBLFFBQUksQ0FBQy9DLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCb1csUUFBdEIsQ0FBK0IsVUFBL0IsQ0FBTCxFQUFpRDtBQUMvQyxZQUFNeU8sTUFBTSxHQUFHN2tCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0Iya0IsR0FBbEIsRUFBZjs7QUFDQSxVQUFJRSxNQUFNLEtBQUssRUFBZixFQUFtQjtBQUNqQjdrQixTQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQzJrQixHQUFsQyxDQUFzQyxFQUF0QztBQUNELE9BRkQsTUFFTztBQUNMM2tCLFNBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDMmtCLEdBQWxDLENBQXNDRSxNQUF0QztBQUNEOztBQUVEN2tCLE9BQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCNUMsT0FBekIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGLEdBWkQsRUE1Qm9DLENBMENwQzs7QUFDQW9uQixlQUFhLENBQUN6aEIsRUFBZCxDQUFpQixTQUFqQixFQUE0QixjQUE1QixFQUE0QyxZQUFZO0FBQ3REL0MsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixLQUFoQixFQUF1QitPLFdBQXZCLENBQW1DLGNBQW5DO0FBQ0ExTixLQUFDLENBQUMsZUFBRCxDQUFELENBQW1Ca1QsSUFBbkIsQ0FBd0IsRUFBeEI7QUFDRCxHQUhEOztBQUtBLE1BQUdsVCxDQUFDLENBQUMsd0NBQUQsRUFBMkNsRSxTQUEzQyxDQUFELENBQXVEb1gsSUFBdkQsT0FBa0U5VCxTQUFyRSxFQUFnRjtBQUM5RVksS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9OLFFBQW5CLENBQTRCLGNBQTVCO0FBQ0FwTixLQUFDLENBQUMsZUFBRCxDQUFELENBQW1Ca1QsSUFBbkIsQ0FBd0JsVCxDQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0Q2tULElBQTVDLEVBQXhCO0FBQ0FsVCxLQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMmtCLEdBQWxCLENBQXNCM2tCLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDMmtCLEdBQWxDLEVBQXRCO0FBQ0QsR0FwRG1DLENBc0RwQzs7O0FBQ0Eza0IsR0FBQyxDQUFDLG1CQUFELEVBQXNCbEUsU0FBdEIsQ0FBRCxDQUFrQ2lILEVBQWxDLENBQXFDLE9BQXJDLEVBQThDLFlBQVc7QUFDdkQ7QUFDQSxRQUFJLENBQUMvQyxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQm9XLFFBQXRCLENBQStCLFVBQS9CLENBQUwsRUFBaUQ7QUFDL0MsWUFBTTBPLFdBQVcsR0FBRzlrQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CMmtCLEdBQW5CLEVBQXBCOztBQUNBLFVBQUlHLFdBQVcsS0FBSyxFQUFwQixFQUF3QjtBQUN0QjlrQixTQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjJrQixHQUE5QixDQUFrQyxFQUFsQztBQUNELE9BRkQsTUFFTztBQUNMM2tCLFNBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCMmtCLEdBQTlCLENBQWtDRyxXQUFsQztBQUNEOztBQUNEOWtCLE9BQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCNUMsT0FBekIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGLEdBWEQ7QUFhQTRDLEdBQUMsQ0FBQyxzQkFBRCxFQUF5QmxFLFNBQXpCLENBQUQsQ0FBcUNpSCxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxZQUFXO0FBQzFEO0FBQ0EsUUFBSSxDQUFDL0MsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JvVyxRQUF0QixDQUErQixVQUEvQixDQUFMLEVBQWlEO0FBQy9DcFcsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIya0IsR0FBOUIsQ0FBa0MsRUFBbEM7QUFDQTNrQixPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjVDLE9BQXpCLENBQWlDLFFBQWpDO0FBQ0Q7QUFDRixHQU5ELEVBcEVvQyxDQTRFcEM7O0FBQ0FvbkIsZUFBYSxDQUFDemhCLEVBQWQsQ0FBaUIsU0FBakIsRUFBNEIsZUFBNUIsRUFBNkMsWUFBWTtBQUN2RC9DLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIrTyxXQUF2QixDQUFtQyxjQUFuQztBQUNBMU4sS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJrVCxJQUF6QixDQUE4QixFQUE5QjtBQUNELEdBSEQ7O0FBS0EsTUFBR2xULENBQUMsQ0FBQywwQ0FBRCxFQUE2Q2xFLFNBQTdDLENBQUQsQ0FBeURvWCxJQUF6RCxPQUFvRTlULFNBQXZFLEVBQWtGO0FBQ2hGWSxLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qm9OLFFBQXpCLENBQWtDLGNBQWxDO0FBQ0FwTixLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QmtULElBQXpCLENBQThCbFQsQ0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOENrVCxJQUE5QyxFQUE5QjtBQUNBbFQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjJrQixHQUFuQixDQUF1QjNrQixDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjJrQixHQUE5QixFQUF2QjtBQUNELEdBdEZtQyxDQXdGcEM7OztBQUNBM2tCLEdBQUMsQ0FBQyxtQkFBRCxFQUFzQmxFLFNBQXRCLENBQUQsQ0FBa0NpSCxFQUFsQyxDQUFxQyxPQUFyQyxFQUE4QyxVQUFTckosQ0FBVCxFQUFZO0FBQ3hELFFBQUlzRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVyxRQUFSLENBQWlCLFVBQWpCLENBQUosRUFBa0M7QUFDaEMxYyxPQUFDLENBQUNDLGNBQUY7QUFDRDtBQUNGLEdBSkQ7QUFLRCxDQTlGRDs7a0JBZ0dlOHFCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR2Y7O0FBSkE7O0FBQ0E7O0FBQ0E7QUFJQTtBQUNBLE1BQU1NLFVBQVUsR0FBRy9rQixDQUFDLENBQUMsZ0NBQUQsQ0FBcEI7QUFDQSxNQUFNZ2xCLFNBQVMsR0FBR2hsQixDQUFDLENBQUMsc0NBQUQsQ0FBbkI7O0FBRUEsTUFBTWlsQixRQUFRLEdBQUcsU0FBUzlDLGFBQVQsR0FBeUI7QUFDeEMsUUFBTXJtQixTQUFTLEdBQUdrRSxDQUFDLENBQUMsZUFBRCxDQUFuQixDQUR3QyxDQUV4Qzs7QUFDQUEsR0FBQyxDQUFDLGlDQUFELEVBQW9DbEUsU0FBcEMsQ0FBRCxDQUFnRGlILEVBQWhELENBQW1ELE9BQW5ELEVBQTRELFVBQVNySixDQUFULEVBQVk7QUFDdEVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU11ckIsV0FBVyxHQUFHQyxZQUFZLENBQUMsSUFBRCxDQUFaLENBQW1CLENBQW5CLENBQXBCOztBQUNBLFFBQUksQ0FBQ25sQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVyxRQUFSLENBQWlCLFNBQWpCLENBQUQsSUFBZ0MsQ0FBQ3BXLENBQUMsQ0FBQyxvQkFBRCxFQUF1QmxFLFNBQXZCLENBQUQsQ0FBbUNzYSxRQUFuQyxDQUE0QyxTQUE1QyxDQUFyQyxFQUE2RjtBQUMzRnBXLE9BQUMsQ0FBQyxpQ0FBRCxFQUFvQ2xFLFNBQXBDLENBQUQsQ0FBZ0Q0UixXQUFoRCxDQUE0RCxTQUE1RDtBQUNBMU4sT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb04sUUFBUixDQUFpQixTQUFqQjtBQUVBNFgsZUFBUyxDQUFDemEsSUFBVjtBQUNBeWEsZUFBUyxDQUFDckQsSUFBVixHQUFpQm5YLElBQWpCO0FBRUF4SyxPQUFDLENBQUMsd0JBQUQsRUFBMkJsRSxTQUEzQixDQUFELENBQXVDeU8sSUFBdkM7QUFDQXZLLE9BQUMsQ0FBQywyQ0FBRCxFQUE4Q2xFLFNBQTlDLENBQUQsQ0FBMEQwTyxJQUExRDtBQUVBNGEsdUJBQWlCLENBQUNGLFdBQUQsRUFBYyxRQUFkLEVBQXdCcHBCLFNBQXhCLENBQWpCO0FBQ0EsMkNBQXNCa0UsQ0FBQyxDQUFDLHNCQUFELENBQXZCLEVBWDJGLENBWTNGOztBQUNBQSxPQUFDLENBQUMsOENBQUQsRUFBaURsRSxTQUFqRCxDQUFELENBQTZEaUgsRUFBN0QsQ0FBZ0UsT0FBaEUsRUFBeUUsVUFBU3JKLENBQVQsRUFBWTtBQUNuRjJyQixxQkFBYSxDQUFDcmxCLENBQUMsQ0FBQyxJQUFELENBQUYsRUFBVWtsQixXQUFWLEVBQXVCcHBCLFNBQXZCLENBQWI7QUFDRCxPQUZEO0FBR0QsS0FoQkQsTUFnQk8sSUFBSWtFLENBQUMsQ0FBQyxvQkFBRCxFQUF1QmxFLFNBQXZCLENBQUQsQ0FBbUNzYSxRQUFuQyxDQUE0QyxTQUE1QyxDQUFKLEVBQTREO0FBQ2pFcFcsT0FBQyxDQUFDLGlDQUFELEVBQW9DbEUsU0FBcEMsQ0FBRCxDQUFnRDRSLFdBQWhELENBQTRELFNBQTVEO0FBQ0ExTixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFvTixRQUFSLENBQWlCLFNBQWpCO0FBQ0FnWSx1QkFBaUIsQ0FBQ0YsV0FBRCxFQUFjLEtBQWQsRUFBcUJwcEIsU0FBckIsQ0FBakI7QUFDRDtBQUNGLEdBeEJELEVBSHdDLENBNkJ0Qzs7QUFDRmtFLEdBQUMsQ0FBQyx3QkFBRCxFQUEyQmxFLFNBQTNCLENBQUQsQ0FBdUNpSCxFQUF2QyxDQUEwQyxPQUExQyxFQUFtRCxVQUFTckosQ0FBVCxFQUFZO0FBQzdEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNdXJCLFdBQVcsR0FBR0MsWUFBWSxDQUFDbmxCLENBQUMsQ0FBQyx5Q0FBRCxFQUE0Q2xFLFNBQTVDLENBQUQsQ0FBd0QsQ0FBeEQsQ0FBRCxDQUFaLENBQXlFLENBQXpFLENBQXBCO0FBQ0F3cEIsZUFBVyxDQUFDSixXQUFELEVBQWNwcEIsU0FBZCxDQUFYO0FBQ0FzcEIscUJBQWlCLENBQUNGLFdBQUQsRUFBYyxLQUFkLEVBQXFCcHBCLFNBQXJCLENBQWpCO0FBQ0QsR0FMRCxFQTlCd0MsQ0FxQ3hDOztBQUNBaXBCLFlBQVUsQ0FBQ2hpQixFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFTckosQ0FBVCxFQUFZO0FBQ2pDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJdXJCLFdBQVcsR0FBRyxVQUFsQjs7QUFDQSxRQUFJLENBQUNsbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb1csUUFBUixDQUFpQixjQUFqQixDQUFMLEVBQXVDO0FBQ3JDOE8saUJBQVcsR0FBR0MsWUFBWSxDQUFDLElBQUQsQ0FBWixDQUFtQixDQUFuQixDQUFkO0FBQ0FubEIsT0FBQyxDQUFDLHlCQUF5QmtsQixXQUExQixDQUFELENBQXdDMWUsSUFBeEMsQ0FBNkMsWUFBVztBQUN0RCxjQUFNK2UsS0FBSyxHQUFHSixZQUFZLENBQUMsSUFBRCxDQUFaLENBQW1CLENBQW5CLENBQWQ7QUFDQSxjQUFNSyxTQUFTLEdBQUcsb0NBQW9DTixXQUFwQyxHQUFrRCxXQUFsRCxHQUFnRUssS0FBaEUsR0FBd0UsR0FBMUY7QUFDQSxjQUFNRSxNQUFNLEdBQUcsc0NBQXNDRCxTQUFyRDtBQUNBLGNBQU1FLFNBQVMsR0FBRyxhQUFZUixXQUFaLEdBQXlCLFdBQXpCLEdBQXVDTSxTQUF6RDtBQUNBeGxCLFNBQUMsQ0FBQzBsQixTQUFELENBQUQsQ0FBYWYsR0FBYixDQUFpQjNrQixDQUFDLENBQUN5bEIsTUFBRCxDQUFELENBQVVkLEdBQVYsRUFBakI7QUFDRCxPQU5EO0FBT0Q7O0FBQ0RnQix1QkFBbUIsQ0FBQyxJQUFELEVBQU9ULFdBQVAsRUFBb0JwcEIsU0FBcEIsQ0FBbkI7QUFDRCxHQWRELEVBdEN3QyxDQXNEeEM7O0FBQ0FrRSxHQUFDLENBQUMsdUNBQUQsRUFBMENsRSxTQUExQyxDQUFELENBQXNEaUgsRUFBdEQsQ0FBeUQsT0FBekQsRUFBa0UsVUFBU3JKLENBQVQsRUFBWTtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FxRyxLQUFDLENBQUMsd0JBQUQsRUFBMkJsRSxTQUEzQixDQUFELENBQXVDME8sSUFBdkM7QUFDQW9iLG9CQUFnQixDQUFDOXBCLFNBQUQsQ0FBaEI7QUFDQWtFLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0J5TyxRQUF4QixDQUFpQyxTQUFqQyxFQUE0Q3lZLE1BQTVDO0FBQ0QsR0FMRCxFQXZEd0MsQ0E4RHhDOztBQUNBN2xCLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmxFLFNBQTVCLENBQUQsQ0FBd0NpSCxFQUF4QyxDQUEyQyxPQUEzQyxFQUFvRCxVQUFTckosQ0FBVCxFQUFZO0FBQzlEQSxLQUFDLENBQUNDLGNBQUY7QUFDQW1zQixxQkFBaUIsQ0FBQ2hxQixTQUFELENBQWpCO0FBQ0FpcUIsdUJBQW1CLENBQUNqcUIsU0FBRCxDQUFuQjtBQUNBa3FCLHVCQUFtQixDQUFDbHFCLFNBQUQsQ0FBbkI7QUFDRCxHQUxELEVBL0R3QyxDQXNFeEM7O0FBQ0FrRSxHQUFDLENBQUMsK0JBQUQsRUFBa0NsRSxTQUFsQyxDQUFELENBQThDaUgsRUFBOUMsQ0FBaUQsT0FBakQsRUFBMEQsVUFBU3JKLENBQVQsRUFBWTtBQUNwRXNHLEtBQUMsQ0FBQyx3QkFBRCxFQUEyQmxFLFNBQTNCLENBQUQsQ0FBdUN5TyxJQUF2QztBQUNBdkssS0FBQyxDQUFDLG1DQUFELEVBQXNDbEUsU0FBdEMsQ0FBRCxDQUFrRHlPLElBQWxEO0FBQ0F2SyxLQUFDLENBQUMsb0JBQUQsRUFBdUJsRSxTQUF2QixDQUFELENBQW1DNFIsV0FBbkMsQ0FBK0MsU0FBL0M7QUFDQTFOLEtBQUMsQ0FBQyxvQ0FBRCxFQUF1Q2xFLFNBQXZDLENBQUQsQ0FBbUQwTyxJQUFuRDtBQUNBdWIsdUJBQW1CLENBQUNqcUIsU0FBRCxDQUFuQjtBQUNELEdBTkQ7QUFPRCxDQTlFRCxDLENBZ0ZBOzs7QUFDQSxTQUFTdXBCLGFBQVQsQ0FBdUJ0c0IsT0FBdkIsRUFBZ0Ntc0IsV0FBaEMsRUFBNkNwcEIsU0FBN0MsRUFBd0Q7QUFDdERrRSxHQUFDLENBQUMsZUFBRCxFQUFrQmpILE9BQWxCLENBQUQsQ0FBNEJ5TixJQUE1QixDQUFpQyxZQUFXO0FBQzFDLFVBQU1nZixTQUFTLEdBQUdMLFlBQVksQ0FBQyxJQUFELENBQVosQ0FBbUIsQ0FBbkIsQ0FBbEI7QUFDQSxVQUFNYyxhQUFhLEdBQUcsb0NBQW9DZixXQUFwQyxHQUFrRCxXQUFsRCxHQUFnRU0sU0FBaEUsR0FBNEUsS0FBbEc7QUFDQSxVQUFNVSxTQUFTLEdBQUcsc0NBQXNDRCxhQUF4RDtBQUNBLFVBQU1FLGlCQUFpQixHQUFHLFdBQVVqQixXQUFWLEdBQXVCLEdBQXZCLEdBQTZCTSxTQUF2RDtBQUVBLFFBQUlZLFdBQVcsR0FBR3BtQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxbUIsSUFBUixFQUFsQjtBQUNBcm1CLEtBQUMsQ0FBQ21tQixpQkFBRCxDQUFELENBQXFCRSxJQUFyQixDQUEwQkQsV0FBMUI7O0FBRUEsUUFBSVosU0FBUyxLQUFLLGFBQWxCLEVBQWlDO0FBQy9CWSxpQkFBVyxHQUFHcG1CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFtQixJQUFSLEdBQWVDLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBZDtBQUNEOztBQUNEdG1CLEtBQUMsQ0FBQ2ttQixTQUFELENBQUQsQ0FBYXZCLEdBQWIsQ0FBaUJ5QixXQUFqQjs7QUFFQSxRQUFJWixTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsVUFBSXhsQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxbUIsSUFBUixHQUFlRSxJQUFmLE9BQTBCLEVBQTlCLEVBQWtDO0FBQ2hDdm1CLFNBQUMsQ0FBQyx3QkFBd0JrbEIsV0FBekIsQ0FBRCxDQUF1Q3hYLFdBQXZDLENBQW1ELFFBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wxTixTQUFDLENBQUMsd0JBQXdCa2xCLFdBQXpCLENBQUQsQ0FBdUM5WCxRQUF2QyxDQUFnRCxRQUFoRDtBQUNEO0FBQ0Y7O0FBRURwTixLQUFDLENBQUNtbUIsaUJBQUQsQ0FBRCxDQUFxQnhuQixPQUFyQixDQUE2QixTQUE3QixFQUF3Q3lVLElBQXhDLENBQTZDLFVBQVVvVCxnQkFBZ0IsQ0FBQ2hCLFNBQUQsQ0FBdkUsRUFBb0ZZLFdBQXBGO0FBQ0QsR0F2QkQ7QUF3QkFwbUIsR0FBQyxDQUFDLGtEQUFELEVBQXFEbEUsU0FBckQsQ0FBRCxDQUFpRTJxQixJQUFqRSxDQUFzRSxTQUF0RSxFQUFpRixJQUFqRjtBQUNBWCxtQkFBaUIsQ0FBQ2hxQixTQUFELENBQWpCO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBUzZwQixtQkFBVCxDQUE2QjVzQixPQUE3QixFQUFzQ21zQixXQUF0QyxFQUFtRHBwQixTQUFuRCxFQUE4RDtBQUM1RCxRQUFNTCxJQUFJLEdBQUd1RSxDQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBVzRGLE9BQVgsQ0FBbUIsTUFBbkIsQ0FBYjtBQUNBcUIsR0FBQyxDQUFDLDRCQUFELEVBQStCdkUsSUFBL0IsQ0FBRCxDQUFzQ2twQixHQUF0QyxDQUEwQ08sV0FBMUM7QUFDQXdCLGtCQUFnQixDQUFDeEIsV0FBRCxFQUFjcHBCLFNBQWQsQ0FBaEI7QUFFQWtFLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmxFLFNBQTVCLENBQUQsQ0FBd0NzUixRQUF4QyxDQUFpRCxTQUFqRDtBQUNBcE4sR0FBQyxDQUFDMm1CLElBQUYsQ0FBTztBQUNMcGdCLFFBQUksRUFBRSxNQUREO0FBRUxwTixPQUFHLEVBQUVzQyxJQUFJLENBQUMyWCxJQUFMLENBQVUsUUFBVixDQUZBO0FBR0x4WSxRQUFJLEVBQUVhLElBQUksQ0FBQ21yQixTQUFMLEVBSEQ7QUFJTG5mLFdBQU8sRUFBRSxpQkFBUzlNLFFBQVQsRUFBbUI7QUFDMUIsWUFBTWtzQixjQUFjLEdBQUc3bUIsQ0FBQyxDQUFDckYsUUFBRCxDQUF4QjtBQUNBLFlBQU1tc0IsU0FBUyxHQUFHL0IsVUFBVSxDQUFDM08sUUFBWCxDQUFvQixjQUFwQixDQUFsQjs7QUFDQSxVQUFHeVEsY0FBYyxDQUFDelEsUUFBZixDQUF3QixzQkFBeEIsQ0FBSCxFQUFvRDtBQUNsRHBXLFNBQUMsQ0FBQywyQkFBMkJrbEIsV0FBNUIsRUFBeUNwcEIsU0FBekMsQ0FBRCxDQUFxRDBLLElBQXJELENBQTBELFlBQVc7QUFDbkUsZ0JBQU1nZixTQUFTLEdBQUdMLFlBQVksQ0FBQyxJQUFELENBQVosQ0FBbUIsQ0FBbkIsQ0FBbEI7QUFFQTRCLDJCQUFpQixDQUFDLElBQUQsRUFBTzdCLFdBQVAsRUFBb0JNLFNBQXBCLEVBQStCcUIsY0FBL0IsQ0FBakIsQ0FIbUUsQ0FJbkU7O0FBQ0EsY0FBSUMsU0FBSixFQUFlO0FBQ2Isa0JBQU0vdEIsT0FBTyxHQUFHaUgsQ0FBQyxDQUFDLDJCQUEyQmduQixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBOUMsR0FBOEQsR0FBOUQsR0FBb0VNLFNBQXJFLEVBQWdGMXBCLFNBQWhGLENBQWpCO0FBQ0FpckIsNkJBQWlCLENBQUNodUIsT0FBRCxFQUFVaXVCLG1CQUFtQixDQUFDOUIsV0FBRCxDQUE3QixFQUE0Q00sU0FBNUMsRUFBdURxQixjQUF2RCxDQUFqQjtBQUNEOztBQUVEN21CLFdBQUMsQ0FBQyxlQUFELEVBQWtCbEUsU0FBbEIsQ0FBRCxDQUE4Qm9YLElBQTlCLENBQW1DbFQsQ0FBQyxDQUFDLGVBQUQsRUFBa0I2bUIsY0FBbEIsQ0FBRCxDQUFtQzNULElBQW5DLEVBQW5DO0FBQ0QsU0FYRDs7QUFZQSxZQUFJNFQsU0FBSixFQUFlO0FBQ2I5bUIsV0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUMwTixXQUF6QyxDQUFxRCxRQUFyRDtBQUNBMU4sV0FBQyxDQUFDLG9CQUFELEVBQXVCbEUsU0FBdkIsQ0FBRCxDQUFtQ3NSLFFBQW5DLENBQTRDLFFBQTVDO0FBQ0E2WixzQkFBWSxDQUFDbnJCLFNBQUQsQ0FBWjtBQUNEOztBQUNEZ3FCLHlCQUFpQixDQUFDaHFCLFNBQUQsQ0FBakI7QUFDQWlxQiwyQkFBbUIsQ0FBQ2pxQixTQUFELENBQW5CO0FBQ0Q7QUFDRixLQTVCSTtBQTZCTHZCLFNBQUssRUFBRSxlQUFTQSxNQUFULEVBQWdCO0FBQ3JCd3JCLHlCQUFtQixDQUFDanFCLFNBQUQsQ0FBbkI7QUFDQWtFLE9BQUMsQ0FBQ0EsQ0FBQyxDQUFDa25CLFNBQUYsQ0FBWTNzQixNQUFLLENBQUM0c0IsWUFBbEIsRUFBZ0MsQ0FBaEMsQ0FBRCxDQUFELENBQXNDM1AsSUFBdEMsQ0FBMkMscUJBQTNDLEVBQWtFaFIsSUFBbEUsQ0FBdUUsWUFBVztBQUNoRixjQUFNZ2YsU0FBUyxHQUFHeGxCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUJ5VSxJQUF6QixDQUE4QixLQUE5QixDQUFsQjtBQUNBLGNBQU1nVSxVQUFVLEdBQUdwbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcW1CLElBQVIsRUFBbkI7QUFDQXJtQixTQUFDLENBQUMsNkJBQTRCd2xCLFNBQTVCLEdBQXVDLElBQXhDLEVBQThDMXBCLFNBQTlDLENBQUQsQ0FBMERzUixRQUExRCxDQUFtRSxZQUFuRSxFQUFpRmlhLEtBQWpGLENBQXVGLHFGQUFxRkQsVUFBckYsR0FBa0csZ0JBQXpMO0FBQ0QsT0FKRDtBQUtEO0FBcENJLEdBQVA7QUFzQ0Q7QUFFRDs7O0FBQ0EsU0FBU0UsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJyQyxXQUE5QixFQUEyQ3pwQixJQUEzQyxFQUFpREssU0FBakQsRUFBNEQ7QUFDMUQsUUFBTTByQixjQUFjLEdBQUcsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixhQUExQixDQUF2QjtBQUNBLFFBQU1DLFVBQVUsR0FBR3puQixDQUFDLENBQUMseUNBQXlDa2xCLFdBQTFDLEVBQXVEcHBCLFNBQXZELENBQUQsQ0FBbUVsQixJQUFuRSxFQUFuQjtBQUNBb0YsR0FBQyxDQUFDdkUsSUFBSSxHQUFHLFNBQVAsR0FBbUI4ckIsT0FBbkIsR0FBNkIsSUFBOUIsRUFBb0N6ckIsU0FBcEMsQ0FBRCxDQUFnRDBLLElBQWhELENBQXFELFlBQVc7QUFDOUQsVUFBTWtoQixLQUFLLEdBQUcsY0FBZDtBQUNBLFFBQUlsQyxTQUFTLEdBQUdrQyxLQUFLLENBQUN4bEIsSUFBTixDQUFXbEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb1QsSUFBUixDQUFhLE1BQWIsQ0FBWCxFQUFpQyxDQUFqQyxDQUFoQjs7QUFDQSxRQUFJLENBQUNvVSxjQUFjLENBQUNHLFFBQWYsQ0FBd0JuQyxTQUF4QixDQUFMLEVBQXlDO0FBQ3ZDQSxlQUFTLEdBQUdBLFNBQVMsQ0FBQzVlLFdBQVYsRUFBWjtBQUNEOztBQUNENUcsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMmtCLEdBQVIsQ0FBWThDLFVBQVUsQ0FBQ2pDLFNBQUQsQ0FBdEI7QUFDRCxHQVBEO0FBUUF4bEIsR0FBQyxDQUFDLHlDQUFELEVBQTRDbEUsU0FBNUMsQ0FBRCxDQUF3RDJxQixJQUF4RCxDQUE2RCxTQUE3RCxFQUF3RSxJQUF4RTtBQUNEO0FBRUQ7OztBQUNBLFNBQVNiLGdCQUFULENBQTBCOXBCLFNBQTFCLEVBQXFDO0FBQ25DLEdBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0JOLE9BQXhCLENBQWlDMHBCLFdBQUQsSUFBaUI7QUFDL0MsVUFBTXFDLE9BQU8sR0FBRyw2QkFBNkJyQyxXQUE3QixHQUEyQyxTQUEzRDtBQUNBb0MsZUFBVyxDQUFDQyxPQUFELEVBQVVyQyxXQUFWLEVBQXVCLG9CQUF2QixFQUE2Q3BwQixTQUE3QyxDQUFYO0FBQ0QsR0FIRDtBQUlEO0FBRUQ7OztBQUNBLFNBQVM0cUIsZ0JBQVQsQ0FBMEJ4QixXQUExQixFQUF1Q3BwQixTQUF2QyxFQUFrRDtBQUNoRCxRQUFNOHJCLGdCQUFnQixHQUFHWixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBNUM7QUFDQSxNQUFJcUMsT0FBTyxHQUFHLG9CQUFvQkssZ0JBQWxDOztBQUNBLE1BQUk3QyxVQUFVLENBQUMzTyxRQUFYLENBQW9CLGNBQXBCLENBQUosRUFBeUM7QUFDdkN5UixpQkFBYSxDQUFDM0MsV0FBRCxFQUFjMEMsZ0JBQWQsRUFBZ0Msb0JBQWhDLEVBQXNEOXJCLFNBQXRELENBQWI7QUFDRCxHQUZELE1BRU87QUFDTHdyQixlQUFXLENBQUNDLE9BQUQsRUFBVUssZ0JBQVYsRUFBNEIsb0JBQTVCLEVBQWtEOXJCLFNBQWxELENBQVg7QUFDRDtBQUNGLEMsQ0FFRDs7O0FBQ0EsU0FBUytyQixhQUFULENBQXVCM0MsV0FBdkIsRUFBb0MwQyxnQkFBcEMsRUFBc0Ruc0IsSUFBdEQsRUFBNERLLFNBQTVELEVBQXVFO0FBQ3JFLFFBQU15ckIsT0FBTyxHQUFHLG9CQUFvQnJDLFdBQXBDO0FBQ0EsUUFBTTRDLFlBQVksR0FBRyxvQkFBb0JGLGdCQUF6QztBQUNBNW5CLEdBQUMsQ0FBQ3ZFLElBQUksR0FBRyxTQUFQLEdBQW1COHJCLE9BQW5CLEdBQTZCLElBQTlCLEVBQW9DenJCLFNBQXBDLENBQUQsQ0FBZ0QwSyxJQUFoRCxDQUFxRCxZQUFXO0FBQzlELFVBQU1raEIsS0FBSyxHQUFHLGNBQWQ7QUFDQSxRQUFJbEMsU0FBUyxHQUFHa0MsS0FBSyxDQUFDeGxCLElBQU4sQ0FBV2xDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9ULElBQVIsQ0FBYSxNQUFiLENBQVgsRUFBaUMsQ0FBakMsQ0FBaEI7O0FBQ0EsUUFBSW9TLFNBQVMsS0FBSyxhQUFsQixFQUFpQztBQUMvQkEsZUFBUyxHQUFHQSxTQUFTLENBQUM1ZSxXQUFWLEVBQVo7QUFDRDs7QUFDRCxVQUFNbWhCLFFBQVEsR0FBRyxNQUFNRCxZQUFOLEdBQXFCLEdBQXJCLEdBQTJCdEMsU0FBNUM7QUFDQXhsQixLQUFDLENBQUMrbkIsUUFBRCxDQUFELENBQVlwRCxHQUFaLENBQWdCM2tCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJrQixHQUFSLEVBQWhCO0FBQ0QsR0FSRDtBQVNELEMsQ0FFRDs7O0FBQ0EsU0FBU29DLGlCQUFULENBQTJCaHVCLE9BQTNCLEVBQW9DbXNCLFdBQXBDLEVBQWlETSxTQUFqRCxFQUE0RDFwQixTQUE1RCxFQUF1RTtBQUNyRTtBQUNBLFFBQU1rc0IsUUFBUSxHQUFHaG9CLENBQUMsQ0FBQyxXQUFXa2xCLFdBQVgsR0FBeUIsV0FBekIsR0FBdUNNLFNBQXhDLEVBQW1EMXBCLFNBQW5ELENBQUQsQ0FBK0RvWCxJQUEvRCxFQUFqQixDQUZxRSxDQUlyRTs7QUFDQSxRQUFNK1UsYUFBYSxHQUFHLG9DQUFvQy9DLFdBQXBDLEdBQWtELFdBQWxELEdBQWdFTSxTQUFoRSxHQUE0RSxHQUFsRztBQUNBLFFBQU0wQyxjQUFjLEdBQUcsc0NBQXNDRCxhQUE3RCxDQU5xRSxDQVFyRTs7QUFDQWpvQixHQUFDLENBQUNrb0IsY0FBRCxDQUFELENBQWtCdkQsR0FBbEIsQ0FBc0JxRCxRQUF0QixFQVRxRSxDQVdyRTs7QUFDQWhvQixHQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBV3N0QixJQUFYLENBQWdCMkIsUUFBaEI7O0FBQ0EsTUFBSXhDLFNBQVMsS0FBSyxhQUFsQixFQUFpQztBQUMvQnhsQixLQUFDLENBQUNqSCxPQUFELENBQUQsQ0FBV3N0QixJQUFYLENBQWdCcm1CLENBQUMsQ0FBQyxXQUFXa2xCLFdBQVgsR0FBeUIsc0JBQTFCLEVBQWtEcHBCLFNBQWxELENBQUQsQ0FBOERvWCxJQUE5RCxFQUFoQjtBQUNELEdBZm9FLENBaUJyRTs7O0FBQ0EsTUFBSXNTLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQixRQUFJeGxCLENBQUMsQ0FBQyxXQUFXa2xCLFdBQVgsR0FBeUIsV0FBekIsR0FBdUNNLFNBQXhDLEVBQW1EMXBCLFNBQW5ELENBQUQsQ0FBK0RvWCxJQUEvRCxHQUFzRXFULElBQXRFLE9BQWlGLEVBQXJGLEVBQXlGO0FBQ3ZGdm1CLE9BQUMsQ0FBQyx3QkFBd0JrbEIsV0FBekIsQ0FBRCxDQUF1Q3hYLFdBQXZDLENBQW1ELFFBQW5EO0FBQ0QsS0FGRCxNQUVPO0FBQ0wxTixPQUFDLENBQUMsd0JBQXdCa2xCLFdBQXpCLENBQUQsQ0FBdUM5WCxRQUF2QyxDQUFnRCxRQUFoRDtBQUNEO0FBQ0YsR0F4Qm9FLENBMEJyRTs7O0FBQ0FwTixHQUFDLENBQUMsa0NBQWtDa2xCLFdBQW5DLENBQUQsQ0FBaUQ5UixJQUFqRCxDQUFzRCxVQUFVb1QsZ0JBQWdCLENBQUNoQixTQUFELENBQWhGLEVBQTZGd0MsUUFBN0Y7QUFDRDtBQUVEOzs7QUFDQSxTQUFTZixZQUFULENBQXNCbnJCLFNBQXRCLEVBQWlDO0FBQy9CO0FBQ0FrRSxHQUFDLENBQUMsaUJBQUQsRUFBb0JsRSxTQUFwQixDQUFELENBQWdDckIsTUFBaEMsR0FGK0IsQ0FHL0I7O0FBQ0F1RixHQUFDLENBQUMsdUJBQUQsRUFBMEJsRSxTQUExQixDQUFELENBQXNDNFIsV0FBdEMsQ0FBa0QsU0FBbEQsRUFKK0IsQ0FLL0I7O0FBQ0ExTixHQUFDLENBQUMsb0JBQUQsRUFBdUJsRSxTQUF2QixDQUFELENBQW1Dc1IsUUFBbkMsQ0FBNEMsUUFBNUM7QUFDQXBOLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmxFLFNBQTVCLENBQUQsQ0FBd0M0UixXQUF4QyxDQUFvRCxRQUFwRDtBQUNBMU4sR0FBQyxDQUFDLHlCQUFELEVBQTRCbEUsU0FBNUIsQ0FBRCxDQUF3Q3NSLFFBQXhDLENBQWlELFFBQWpELEVBUitCLENBUy9COztBQUNBcE4sR0FBQyxDQUFDLDhCQUFELEVBQWlDbEUsU0FBakMsQ0FBRCxDQUE2QzRSLFdBQTdDLENBQXlELFFBQXpELEVBQW1FOEQsSUFBbkUsQ0FBd0UsT0FBeEUsRUFBaUZwRSxRQUFqRixDQUEwRixRQUExRjtBQUNBcE4sR0FBQyxDQUFDLG1DQUFELEVBQXNDbEUsU0FBdEMsQ0FBRCxDQUFrRDRSLFdBQWxELENBQThELFFBQTlEO0FBQ0ExTixHQUFDLENBQUMsaUNBQUQsRUFBb0NsRSxTQUFwQyxDQUFELENBQWdENFIsV0FBaEQsQ0FBNEQsUUFBNUQ7QUFDRDtBQUVEOzs7QUFDQSxTQUFTb1ksaUJBQVQsQ0FBMkJocUIsU0FBM0IsRUFBc0M7QUFDcENrRSxHQUFDLENBQUMsbUNBQUQsRUFBc0NsRSxTQUF0QyxDQUFELENBQWtEeU8sSUFBbEQ7QUFDQXZLLEdBQUMsQ0FBQyx3QkFBRCxFQUEyQmxFLFNBQTNCLENBQUQsQ0FBdUMwTyxJQUF2QztBQUNBd2EsV0FBUyxDQUFDeGEsSUFBVjtBQUNBd2EsV0FBUyxDQUFDckQsSUFBVixHQUFpQnBYLElBQWpCO0FBQ0F2SyxHQUFDLENBQUMsb0JBQUQsRUFBdUJsRSxTQUF2QixDQUFELENBQW1DNFIsV0FBbkMsQ0FBK0MsU0FBL0M7QUFDQTFOLEdBQUMsQ0FBQyxpQ0FBRCxFQUFvQ2xFLFNBQXBDLENBQUQsQ0FBZ0Q0UixXQUFoRCxDQUE0RCxTQUE1RDtBQUNBMU4sR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIsQ0FBM0IsRUFBOEIrUCxTQUE5QixHQUEwQyxDQUExQztBQUNEO0FBRUQ7OztBQUNBLFNBQVNnVyxtQkFBVCxDQUE2QmpxQixTQUE3QixFQUF3QztBQUN0QztBQUNBLE1BQUlvcEIsV0FBVyxHQUFHQyxZQUFZLENBQUNKLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBWixDQUE0QixDQUE1QixDQUFsQjs7QUFDQSxNQUFJRyxXQUFXLEtBQUssY0FBcEIsRUFBb0M7QUFDbENBLGVBQVcsR0FBR0MsWUFBWSxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQVosQ0FBNEIsQ0FBNUIsQ0FBZDtBQUNEOztBQUNEL2tCLEdBQUMsQ0FBQyxhQUFha2xCLFdBQWIsR0FBMkIsUUFBNUIsRUFBc0NwcEIsU0FBdEMsQ0FBRCxDQUFrRHlPLElBQWxEO0FBQ0F2SyxHQUFDLENBQUMsYUFBYWduQixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBaEMsR0FBZ0QsUUFBakQsRUFBMkRwcEIsU0FBM0QsQ0FBRCxDQUF1RTBPLElBQXZFO0FBRUF4SyxHQUFDLENBQUMseUJBQUQsRUFBNEJsRSxTQUE1QixDQUFELENBQXdDNFIsV0FBeEMsQ0FBb0QsU0FBcEQ7QUFDQTFOLEdBQUMsQ0FBQyxxREFBRCxFQUF3RGxFLFNBQXhELENBQUQsQ0FBb0U0UixXQUFwRSxDQUFnRixZQUFoRjtBQUNBMU4sR0FBQyxDQUFDLHNDQUFELEVBQXlDbEUsU0FBekMsQ0FBRCxDQUFxRHJCLE1BQXJEO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBU3VyQixtQkFBVCxDQUE2QmxxQixTQUE3QixFQUF3QztBQUN0Q2tFLEdBQUMsQ0FBQyxxQ0FBRCxFQUF3Q2xFLFNBQXhDLENBQUQsQ0FBb0QwSyxJQUFwRCxDQUF5RCxZQUFXO0FBQ2xFLFVBQU0yaEIsT0FBTyxHQUFHbm9CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsRUFBaEI7QUFDQSxVQUFNc3FCLFdBQVcsR0FBSSxLQUFLa0QsU0FBTCxDQUFldGpCLEtBQWYsQ0FBcUIsS0FBckIsQ0FBRCxDQUE4QixDQUE5QixDQUFwQjtBQUNBLFVBQU11akIsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosT0FBWixDQUFuQjtBQUVBRSxjQUFVLENBQUM3c0IsT0FBWCxDQUFvQnpDLE9BQUQsSUFBYTtBQUM5QixVQUFJeXNCLFNBQVMsR0FBR3pzQixPQUFoQjs7QUFDQSxVQUFJQSxPQUFPLEtBQUssYUFBaEIsRUFBK0I7QUFDN0J5c0IsaUJBQVMsR0FBRyxhQUFaO0FBQ0Q7O0FBQ0QsWUFBTWdELGFBQWEsR0FBRyxXQUFXdEQsV0FBWCxHQUF5QixHQUF6QixHQUErQk0sU0FBckQ7QUFDQSxZQUFNeUMsYUFBYSxHQUFHLG9DQUFvQy9DLFdBQXBDLEdBQWtELFdBQWxELEdBQWdFTSxTQUFoRSxHQUE0RSxLQUFsRztBQUNBLFlBQU0wQyxjQUFjLEdBQUcsd0JBQXdCRCxhQUEvQyxDQVA4QixDQVM5Qjs7QUFDQWpvQixPQUFDLENBQUNrb0IsY0FBRCxFQUFpQnBzQixTQUFqQixDQUFELENBQTZCNm9CLEdBQTdCLENBQWlDd0QsT0FBTyxDQUFDcHZCLE9BQUQsQ0FBeEM7O0FBQ0EsVUFBSUEsT0FBTyxLQUFLLGFBQWhCLEVBQStCO0FBQzdCO0FBQ0FpSCxTQUFDLENBQUN3b0IsYUFBRCxDQUFELENBQWlCbkMsSUFBakIsQ0FBc0I4QixPQUFPLENBQUNwdkIsT0FBRCxDQUE3QjtBQUNEO0FBQ0YsS0FmRDtBQWdCRCxHQXJCRDtBQXNCRCxDLENBRUQ7OztBQUNBLFNBQVN1c0IsV0FBVCxDQUFxQkosV0FBckIsRUFBa0NwcEIsU0FBbEMsRUFBNkM7QUFDM0NrRSxHQUFDLENBQUMsd0JBQUQsRUFBMkJsRSxTQUEzQixDQUFELENBQXVDME8sSUFBdkM7QUFDQXhLLEdBQUMsQ0FBQyxtQ0FBRCxFQUFzQ2xFLFNBQXRDLENBQUQsQ0FBa0QwTyxJQUFsRDtBQUVBeEssR0FBQyxDQUFDLHVDQUFELEVBQTBDbEUsU0FBMUMsQ0FBRCxDQUFzRDRSLFdBQXRELENBQWtFLFFBQWxFO0FBQ0ExTixHQUFDLENBQUMsdUNBQUQsRUFBMENsRSxTQUExQyxDQUFELENBQXNENm9CLEdBQXRELENBQTBELEVBQTFEO0FBQ0Eza0IsR0FBQyxDQUFDLG9CQUFELEVBQXVCbEUsU0FBdkIsQ0FBRCxDQUFtQ3NSLFFBQW5DLENBQTRDLFNBQTVDLEVBTjJDLENBUTNDOztBQUNBcE4sR0FBQyxDQUFDLG9DQUFELEVBQXVDbEUsU0FBdkMsQ0FBRCxDQUFtRDBPLElBQW5EO0FBQ0F4SyxHQUFDLENBQUMsNkJBQTZCa2xCLFdBQTdCLEdBQTJDLFVBQTVDLEVBQXdEcHBCLFNBQXhELENBQUQsQ0FBb0V5TyxJQUFwRTtBQUNEO0FBRUQ7OztBQUNBLFNBQVM2YSxpQkFBVCxDQUEyQkYsV0FBM0IsRUFBd0N1RCxZQUF4QyxFQUFzRDNzQixTQUF0RCxFQUFpRTtBQUMvRGtFLEdBQUMsQ0FBQyxNQUFNeW9CLFlBQU4sR0FBcUIsR0FBckIsR0FBMkJ2RCxXQUEzQixHQUF5QyxRQUExQyxFQUFvRHBwQixTQUFwRCxDQUFELENBQWdFeU8sSUFBaEU7QUFDQXZLLEdBQUMsQ0FBQyxNQUFNeW9CLFlBQU4sR0FBcUIsR0FBckIsR0FBMkJ6QixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBOUMsR0FBOEQsUUFBL0QsRUFBeUVwcEIsU0FBekUsQ0FBRCxDQUFxRjBPLElBQXJGLEdBRitELENBSS9EOztBQUNBdWEsWUFBVSxDQUFDM1gsUUFBWCxDQUFvQjhYLFdBQXBCO0FBQ0FILFlBQVUsQ0FBQ3JYLFdBQVgsQ0FBdUJzWixtQkFBbUIsQ0FBQzlCLFdBQUQsQ0FBMUM7QUFDRDtBQUVEOztBQUNBOztBQUNBO0FBRUE7OztBQUNBLFNBQVNDLFlBQVQsQ0FBc0Jwc0IsT0FBdEIsRUFBK0I7QUFDN0IsU0FBT0EsT0FBTyxDQUFDcXZCLFNBQVIsQ0FBa0J0akIsS0FBbEIsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBUzBoQixnQkFBVCxDQUEwQmhCLFNBQTFCLEVBQXFDO0FBQ25DLFFBQU1rRCxPQUFPLEdBQUcsVUFBVXhtQixJQUFWLENBQWVzakIsU0FBZixDQUFoQjs7QUFDQSxNQUFJa0QsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFdBQU8sQ0FBQ2xELFNBQVMsQ0FBQzVmLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0I4aUIsT0FBTyxDQUFDMUUsS0FBNUIsSUFBcUMsR0FBckMsR0FBMkN3QixTQUFTLENBQUM1ZixNQUFWLENBQWlCOGlCLE9BQU8sQ0FBQzFFLEtBQXpCLEVBQWdDd0IsU0FBUyxDQUFDdHFCLE1BQTFDLENBQTVDLEVBQStGMEwsV0FBL0YsRUFBUDtBQUNEOztBQUVELFNBQU80ZSxTQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTd0IsbUJBQVQsQ0FBNkI5QixXQUE3QixFQUEwQztBQUN4QyxTQUFRQSxXQUFXLEtBQUssVUFBakIsR0FBK0IsU0FBL0IsR0FBMkMsVUFBbEQ7QUFDRDs7a0JBRWNELFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV2Y7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNMEQsV0FBVyxHQUFHLFNBQVN4RyxhQUFULEdBQXlCO0FBQzNDO0FBQ0FuaUIsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIrQyxFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxVQUFTckosQ0FBVCxFQUFZO0FBQ3BEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNOEIsSUFBSSxHQUFHdUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixNQUFoQixDQUFiO0FBQ0FxQixLQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUTJSLFFBQVIsQ0FBaUIsU0FBakI7QUFDQXBOLEtBQUMsQ0FBQzJtQixJQUFGLENBQU87QUFDTHBnQixVQUFJLEVBQUUsTUFERDtBQUVMcE4sU0FBRyxFQUFFc0MsSUFBSSxDQUFDMlgsSUFBTCxDQUFVLFFBQVYsQ0FGQTtBQUdMeFksVUFBSSxFQUFFYSxJQUFJLENBQUNtckIsU0FBTCxFQUhEO0FBSUxuZixhQUFPLEVBQUUsaUJBQVM5TSxRQUFULEVBQW1CO0FBQzFCcUYsU0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNrVCxJQUEzQyxDQUFnRHZZLFFBQWhEO0FBQ0FxRixTQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjRvQixLQUEzQixDQUFpQyxNQUFqQyxFQUYwQixDQUcxQjs7QUFDQTVvQixTQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQzJrQixHQUEzQyxDQUErQyxFQUEvQyxFQUFtRDhCLElBQW5ELENBQXlELFNBQXpELEVBQW9FLEtBQXBFO0FBQ0F6bUIsU0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0YwTixXQUFsRixDQUE4RixZQUE5RjtBQUNBMU4sU0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0N2RixNQUF4QztBQUNBdUYsU0FBQyxDQUFDdkUsSUFBRCxDQUFELENBQVFpUyxXQUFSLENBQW9CLFNBQXBCO0FBQ0QsT0FaSTtBQWFMblQsV0FBSyxFQUFFLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckIsWUFBSUEsTUFBSyxDQUFDc3VCLE1BQU4sS0FBaUIsR0FBckIsRUFBMEI7QUFDeEI3b0IsV0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0N2RixNQUF4QztBQUNBLGdCQUFNcXVCLFNBQVMsR0FBRzlvQixDQUFDLENBQUNBLENBQUMsQ0FBQ2tuQixTQUFGLENBQVkzc0IsTUFBSyxDQUFDNHNCLFlBQWxCLEVBQWdDLENBQWhDLENBQUQsQ0FBRCxDQUFzQzNQLElBQXRDLENBQTJDLE1BQTNDLEVBQW1EdVIsT0FBbkQsRUFBbEI7QUFDQUQsbUJBQVMsQ0FBQ3R0QixPQUFWLENBQWtCakIsS0FBSyxJQUFJO0FBQ3pCLGdCQUFJQSxLQUFLLENBQUN5dUIsU0FBTixLQUFvQixFQUF4QixFQUE0QjtBQUMxQixrQkFBSXp1QixLQUFLLENBQUM2dEIsU0FBTixLQUFvQixXQUF4QixFQUFxQztBQUNuQ3BvQixpQkFBQyxDQUFDLHFCQUFxQnpGLEtBQUssQ0FBQzZ0QixTQUE1QixDQUFELENBQ0doYixRQURILENBQ1ksWUFEWixFQUVHaWEsS0FGSCxDQUVTLDRDQUE0QzlzQixLQUFLLENBQUN5dUIsU0FBbEQsR0FBOEQsU0FGdkU7QUFHRCxlQUpELE1BSU87QUFDTGhwQixpQkFBQyxDQUFDLHFCQUFxQnpGLEtBQUssQ0FBQzZ0QixTQUE1QixDQUFELENBQ0c1VyxJQURILENBQ1EsT0FEUixFQUVHcEUsUUFGSCxDQUVZLFlBRlo7QUFHRDtBQUNGO0FBQ0YsV0FaRDtBQWFEOztBQUVELFlBQUk3UyxNQUFLLENBQUNzdUIsTUFBTixLQUFpQixHQUFyQixFQUEwQjtBQUN4QjdvQixXQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ2tULElBQWpDLENBQXNDbFQsQ0FBQyxDQUFDa25CLFNBQUYsQ0FBWTNzQixNQUFLLENBQUM0c0IsWUFBbEIsRUFBZ0MsQ0FBaEMsQ0FBdEM7QUFDRDs7QUFFRG5uQixTQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUWlTLFdBQVIsQ0FBb0IsU0FBcEI7QUFDRDtBQXJDSSxLQUFQO0FBdUNELEdBM0NELEVBRjJDLENBK0MzQzs7QUFDQTFOLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCK0MsRUFBN0IsQ0FBZ0MsUUFBaEMsRUFBMEMsVUFBU3JKLENBQVQsRUFBWTtBQUNwRCxRQUFHc0csQ0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVkwcEIsR0FBWixPQUFzQixPQUF6QixFQUFrQztBQUNoQzNrQixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnVLLElBQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x2SyxPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQndLLElBQXBCO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0F2REQ7O2tCQXlEZW1lLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGY7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNTSxTQUFTLEdBQUcsU0FBUzlHLGFBQVQsR0FBeUI7QUFDekM7QUFDQW5pQixHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQitDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFVBQVNySixDQUFULEVBQVk7QUFDaERBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU11dkIsT0FBTyxHQUFHbHBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxTQUFiLENBQWhCO0FBQ0FvRixLQUFDLENBQUNrcEIsT0FBRCxDQUFELENBQVdOLEtBQVgsQ0FBaUIsTUFBakI7QUFDQTVvQixLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjBOLFdBQXRCLENBQWtDLE1BQWxDO0FBQ0QsR0FMRCxFQUZ5QyxDQVN6Qzs7QUFDQSxNQUFHMU4sQ0FBQyxDQUFDLGFBQUQsQ0FBSixFQUFxQjtBQUNuQkEsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQitDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQVNySixDQUFULEVBQVk7QUFDekNBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU13dkIsV0FBVyxHQUFHbnBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxNQUFiLENBQXBCO0FBQ0FvRixPQUFDLENBQUNtcEIsV0FBRCxDQUFELENBQWV0RCxNQUFmO0FBQ0QsS0FKRDtBQUtELEdBaEJ3QyxDQWtCekM7OztBQUNBLFFBQU11RCxtQkFBbUIsR0FBR3BwQixDQUFDLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsTUFBR29wQixtQkFBSCxFQUF3QjtBQUN0QkEsdUJBQW1CLENBQUNybUIsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU3JKLENBQVQsRUFBWTtBQUMxQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FxRyxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFyQixPQUFSLENBQWdCLE1BQWhCLEVBQXdCa25CLE1BQXhCO0FBQ0QsS0FIRDtBQUlELEdBekJ3QyxDQTJCekM7OztBQUNBLE1BQUk3bEIsQ0FBQyxDQUFDLHNCQUFELENBQUwsRUFBK0I7QUFDN0JBLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCK0MsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsVUFBU2tlLEtBQVQsRUFBZ0I7QUFDcERBLFdBQUssQ0FBQ3RuQixjQUFOO0FBQ0FxRyxPQUFDLENBQUMsbURBQUQsQ0FBRCxDQUF1RGtULElBQXZELENBQTRELEVBQTVEO0FBQ0EsWUFBTXpYLElBQUksR0FBR3VFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0IsTUFBaEIsQ0FBYjtBQUNBcUIsT0FBQyxDQUFDdkUsSUFBRCxDQUFELENBQVEyUixRQUFSLENBQWlCLFNBQWpCO0FBQ0FwTixPQUFDLENBQUMybUIsSUFBRixDQUFPO0FBQ0xwZ0IsWUFBSSxFQUFFLE1BREQ7QUFFTHBOLFdBQUcsRUFBRXNDLElBQUksQ0FBQzJYLElBQUwsQ0FBVSxRQUFWLENBRkE7QUFHTHhZLFlBQUksRUFBRWEsSUFBSSxDQUFDbXJCLFNBQUwsRUFIRDtBQUlMbmYsZUFBTyxFQUFFLGlCQUFTOU0sUUFBVCxFQUFtQjtBQUMxQnFGLFdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbEcsTUFBbkMsQ0FBMENhLFFBQTFDO0FBQ0FxRixXQUFDLENBQUMsNERBQUQsQ0FBRCxDQUFnRW9OLFFBQWhFLENBQXlFLFFBQXpFO0FBQ0FwTixXQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQzBOLFdBQXRDLENBQWtELFlBQWxEO0FBQ0ExTixXQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUWlTLFdBQVIsQ0FBb0IsU0FBcEI7QUFDRCxTQVRJO0FBVUxuVCxhQUFLLEVBQUUsZUFBU0EsTUFBVCxFQUFnQjtBQUNyQnlGLFdBQUMsQ0FBQyxrREFBRCxDQUFELENBQXNEb04sUUFBdEQsQ0FBK0QsWUFBL0Q7QUFDQXBOLFdBQUMsQ0FBQyxnREFBRCxDQUFELENBQW9EcW1CLElBQXBELENBQXlEcm1CLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDa25CLFNBQUYsQ0FBWTNzQixNQUFLLENBQUM0c0IsWUFBbEIsRUFBZ0MsQ0FBaEMsQ0FBRCxDQUFELENBQXNDM1AsSUFBdEMsQ0FBMkMsb0JBQTNDLEVBQWlFNk8sSUFBakUsRUFBekQ7QUFDQXJtQixXQUFDLENBQUN2RSxJQUFELENBQUQsQ0FBUWlTLFdBQVIsQ0FBb0IsU0FBcEI7QUFDRDtBQWRJLE9BQVA7QUFnQkQsS0FyQkQsRUFENkIsQ0F3QjdCOztBQUNBMU4sS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIrQyxFQUF6QixDQUE0QixlQUE1QixFQUE2QyxVQUFVckosQ0FBVixFQUFhO0FBQ3hEc0csT0FBQyxDQUFDLGtEQUFELENBQUQsQ0FBc0QwTixXQUF0RCxDQUFrRSxZQUFsRTtBQUNBMU4sT0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0MwTixXQUF4QyxDQUFvRCxTQUFwRDtBQUNBMU4sT0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOEMya0IsR0FBOUMsQ0FBa0QsRUFBbEQ7QUFDQTNrQixPQUFDLENBQUMsbURBQUQsQ0FBRCxDQUF1RGtULElBQXZELENBQTRELEVBQTVEO0FBQ0QsS0FMRDtBQU1ELEdBM0R3QyxDQTZEekM7OztBQUNBbFQsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIrQyxFQUE1QixDQUErQixPQUEvQixFQUF3QyxVQUFTckosQ0FBVCxFQUFZO0FBQ2xEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNK3RCLEtBQUssR0FBRyxjQUFkO0FBQ0EsVUFBTTJCLFlBQVksR0FBR3JwQixDQUFDLENBQUNBLENBQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZTCxJQUFaLENBQWlCLE1BQWpCLENBQUQsQ0FBdEI7QUFDQSxVQUFNMHVCLGlCQUFpQixHQUFHRCxZQUFZLENBQUM3UixJQUFiLENBQWtCLE9BQWxCLENBQTFCO0FBQ0EsVUFBTXBjLEtBQUssR0FBR2t1QixpQkFBaUIsQ0FBQzNFLEdBQWxCLEVBQWQ7QUFDQSxVQUFNNEUsV0FBVyxHQUFHRCxpQkFBaUIsQ0FBQzNxQixPQUFsQixDQUEwQixLQUExQixFQUFpQzZTLElBQWpDLENBQXNDLE1BQXRDLENBQXBCOztBQUNBLFFBQUlrVyxLQUFLLENBQUMzaEIsSUFBTixDQUFXM0ssS0FBWCxDQUFKLEVBQXVCO0FBQ3JCbXVCLGlCQUFXLENBQUM3YixXQUFaLENBQXdCLFNBQXhCO0FBQ0E0Yix1QkFBaUIsQ0FBQzViLFdBQWxCLENBQThCLFlBQTlCO0FBQ0EyYixrQkFBWSxDQUFDeEQsTUFBYjtBQUNELEtBSkQsTUFJTztBQUNMMEQsaUJBQVcsQ0FBQ25jLFFBQVosQ0FBcUIsU0FBckI7QUFDQWtjLHVCQUFpQixDQUFDbGMsUUFBbEIsQ0FBMkIsWUFBM0I7QUFDRDtBQUNGLEdBZkQsRUE5RHlDLENBK0V6Qzs7QUFDQXBOLEdBQUMsQ0FBQyxtREFBRCxDQUFELENBQXVEK0MsRUFBdkQsQ0FBMEQsT0FBMUQsRUFBbUUsVUFBU3JKLENBQVQsRUFBWTtBQUM3RSxVQUFNZ3VCLEtBQUssR0FBRyxjQUFkO0FBQ0EsVUFBTXRzQixLQUFLLEdBQUc0RSxDQUFDLENBQUN0RyxDQUFDLENBQUN1QixNQUFILENBQUQsQ0FBWTBELE9BQVosQ0FBb0IsTUFBcEIsRUFBNEI2WSxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQ21OLEdBQTFDLEVBQWQ7O0FBQ0EsUUFBSStDLEtBQUssQ0FBQzNoQixJQUFOLENBQVczSyxLQUFYLEtBQXFCNEUsQ0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVltYixRQUFaLENBQXFCLFlBQXJCLENBQXpCLEVBQTZEO0FBQzNEcFcsT0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVkwRCxPQUFaLENBQW9CLEtBQXBCLEVBQTJCNlMsSUFBM0IsQ0FBZ0MsTUFBaEMsRUFBd0M5RCxXQUF4QyxDQUFvRCxTQUFwRDtBQUNBMU4sT0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVl5UyxXQUFaLENBQXdCLFlBQXhCO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0F4RkQ7O2tCQTBGZXViLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZmOzs7Ozs7QUFIQTs7QUFDQTs7QUFDQTtBQUdBLE1BQU1PLHNCQUFzQixHQUFHLGtCQUEvQjtBQUNBLE1BQU1DLDRCQUE0QixHQUFHLHdCQUFyQztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLHdDQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLHdDQUF6Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBU3pILGFBQVQsR0FBeUI7QUFDdkM7QUFDQW5pQixHQUFDLENBQUMsb0RBQUQsQ0FBRCxDQUF3RCtDLEVBQXhELENBQTJELE9BQTNELEVBQW9FLFVBQVNrZSxLQUFULEVBQWdCO0FBQ2xGLFVBQU00SSxVQUFVLEdBQUc3cEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcEYsSUFBUixDQUFhLGFBQWIsQ0FBbkI7QUFDQSxVQUFNa3ZCLG9CQUFvQixHQUFHOXBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXJCLE9BQVIsQ0FBZ0Isa0JBQWhCLENBQTdCOztBQUVBLFFBQUdrckIsVUFBVSxLQUFLenFCLFNBQWxCLEVBQTZCO0FBQzNCWSxPQUFDLENBQUMscUNBQXFDNnBCLFVBQXJDLEdBQWtELElBQW5ELENBQUQsQ0FBMERuYyxXQUExRCxDQUFzRSxrQkFBdEU7QUFDRCxLQUZELE1BRU87QUFDTDFOLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDME4sV0FBakMsQ0FBNkMsa0JBQTdDO0FBQ0Q7O0FBQ0QxTixLQUFDLENBQUMsbUJBQUQsRUFBc0I4cEIsb0JBQXRCLENBQUQsQ0FBNkNwYyxXQUE3QyxDQUF5RCxTQUF6RCxFQUFvRU4sUUFBcEUsQ0FBNkUsUUFBN0U7O0FBRUEsUUFBSXBOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXBGLElBQVIsQ0FBYSxZQUFiLE1BQStCd0UsU0FBbkMsRUFBOEM7QUFDNUNZLE9BQUMsQ0FBQyx3QkFBRCxFQUEyQjhwQixvQkFBM0IsQ0FBRCxDQUFrRHBjLFdBQWxELENBQThELFFBQTlELEVBQXdFTixRQUF4RSxDQUFpRixTQUFqRjtBQUNELEtBRkQsTUFFTztBQUNMcE4sT0FBQyxDQUFDLHdCQUFELEVBQTJCOHBCLG9CQUEzQixDQUFELENBQWtEcGMsV0FBbEQsQ0FBOEQsU0FBOUQsRUFBeUVOLFFBQXpFLENBQWtGLFFBQWxGO0FBQ0Q7O0FBQ0RwTixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFvTixRQUFSLENBQWlCLGtCQUFqQjtBQUNELEdBakJELEVBRnVDLENBcUJ2Qzs7QUFDQXBOLEdBQUMsQ0FBQyxrREFBRCxDQUFELENBQXNEd0ssSUFBdEQ7QUFDQXhLLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQ0crQyxFQURILENBQ00sWUFETixFQUNvQixZQUFXO0FBQzNCLFFBQUkvQyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJSLE9BQUMsQ0FBQyxxQkFBRCxFQUF3QixJQUF4QixDQUFELENBQStCdUssSUFBL0I7QUFDRDtBQUNGLEdBTEgsRUFLS3hILEVBTEwsQ0FLUSxZQUxSLEVBS3NCLFlBQVc7QUFDL0IvQyxLQUFDLENBQUMscUJBQUQsRUFBd0IsSUFBeEIsQ0FBRCxDQUErQndLLElBQS9CO0FBQ0QsR0FQRCxFQXZCdUMsQ0FnQ3ZDO0FBQ0E7QUFDRTtBQUNGOztBQUVBeEssR0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0YrQyxFQUFsRixDQUFxRixRQUFyRixFQUErRixVQUFTckosQ0FBVCxFQUFZO0FBQ3pHc0csS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixLQUFoQixFQUF1QjZZLElBQXZCLENBQTRCLHVCQUE1QixFQUFxRHBLLFFBQXJELENBQThELGVBQTlELEVBQStFQSxRQUEvRSxDQUF3RixRQUF4RixFQUFrR00sV0FBbEcsQ0FBOEcsU0FBOUc7QUFDRCxHQUZEO0FBR0QsQ0F4Q0Q7O0FBMENBLE1BQU1xYyxjQUFjLEdBQUcsU0FBU0Msc0JBQVQsR0FBa0M7QUFDdkQsUUFBTUMsV0FBVyxHQUFHOXZCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjh2QixNQUFwQztBQUNBLFFBQU1DLFFBQVEsR0FBR0YsV0FBVyxDQUFDM29CLE9BQVosQ0FBb0IsVUFBcEIsQ0FBakI7QUFDQSxRQUFNOG9CLFVBQVUsR0FBR3BxQixDQUFDLENBQUMsNEJBQUQsQ0FBcEI7QUFFQSxNQUFJcXFCLFdBQUo7QUFDQSxNQUFJQyxpQkFBSjs7QUFFQSxNQUFJRixVQUFVLENBQUNsdkIsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6Qm12QixlQUFXLEdBQUdFLGlCQUFpQixDQUFDSCxVQUFELEVBQWFaLHNCQUFiLENBQS9CO0FBQ0FjLHFCQUFpQixHQUFHQyxpQkFBaUIsQ0FBQ0gsVUFBRCxFQUFhWCw0QkFBYixDQUFyQyxDQUZ5QixDQUl6Qjs7QUFDQVcsY0FBVSxDQUFDcm5CLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQVNySixDQUFULEVBQVk7QUFDakMsVUFBR0EsQ0FBQyxDQUFDdW1CLEtBQUYsS0FBWSxDQUFaLElBQWlCLENBQUN1SyxLQUFLLENBQUM3bkIsTUFBTSxDQUFDOG5CLFlBQVAsQ0FBb0Ivd0IsQ0FBQyxDQUFDdW1CLEtBQXRCLENBQUQsQ0FBMUIsRUFBeUQ7QUFDdkR5Syx5QkFBaUIsQ0FBQ0wsV0FBRCxFQUFjcnFCLENBQUMsQ0FBQ3dwQixzQkFBRCxDQUFmLENBQWpCO0FBQ0FrQix5QkFBaUIsQ0FBQ0osaUJBQUQsRUFBb0J0cUIsQ0FBQyxDQUFDeXBCLDRCQUFELENBQXJCLENBQWpCO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7QUFFRDtBQUNGO0FBQ0E7QUFDRTs7O0FBQ0EsUUFBTWtCLGVBQWUsR0FBRzNxQixDQUFDLENBQUMsbUJBQUQsQ0FBekI7QUFDQTJxQixpQkFBZSxDQUFDbmtCLElBQWhCLENBQXFCLFVBQVV3ZCxLQUFWLEVBQWtCO0FBQ3JDLFFBQUcsS0FBS3htQixPQUFSLEVBQWlCO0FBQ2Z3QyxPQUFDLENBQUMsSUFBRCxDQUFELENBQVF3UixJQUFSLENBQWEsT0FBYixFQUFzQnBFLFFBQXRCLENBQStCLFVBQS9CO0FBQ0FwTixPQUFDLENBQUMsb0JBQW9CQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvVCxJQUFSLENBQWEsSUFBYixDQUFwQixHQUF5QyxJQUExQyxDQUFELENBQWlEQSxJQUFqRCxDQUFzRCxTQUF0RCxFQUFpRSxTQUFqRSxFQUE0RTVCLElBQTVFLENBQWlGLE9BQWpGLEVBQTBGcEUsUUFBMUYsQ0FBbUcsVUFBbkc7QUFDRDtBQUNGLEdBTEQ7QUFNQXVkLGlCQUFlLENBQUM1bkIsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBU3JKLENBQVQsRUFBWTtBQUN2QyxRQUFHQSxDQUFDLENBQUN1QixNQUFGLENBQVN1QyxPQUFaLEVBQXFCO0FBQ25Cd0MsT0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVl1VyxJQUFaLENBQWlCLE9BQWpCLEVBQTBCcEUsUUFBMUIsQ0FBbUMsVUFBbkM7QUFDRCxLQUZELE1BRU87QUFDTHBOLE9BQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZdVcsSUFBWixDQUFpQixPQUFqQixFQUEwQjlELFdBQTFCLENBQXNDLFVBQXRDO0FBQ0Q7QUFDRixHQU5ELEVBaEN1RCxDQXVDdkQ7O0FBQ0ExTixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QitDLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQVNySixDQUFULEVBQVk7QUFDN0NBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBaXhCLG1CQUFlLENBQUNQLFdBQUQsRUFBY3JxQixDQUFDLENBQUN3cEIsc0JBQUQsQ0FBZixDQUFmO0FBQ0FvQixtQkFBZSxDQUFDTixpQkFBRCxFQUFvQnRxQixDQUFDLENBQUN5cEIsNEJBQUQsQ0FBckIsQ0FBZjtBQUNBenBCLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCNmxCLE1BQXhCO0FBQ0QsR0FMRDtBQU9BO0FBQ0Y7QUFDQTtBQUNFOztBQUNBN2xCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCK0MsRUFBL0IsQ0FBa0MsUUFBbEMsRUFBNEMsVUFBU3JKLENBQVQsRUFBWTtBQUN0RCxVQUFNbXhCLFlBQVksR0FBRzdxQixDQUFDLENBQUN0RyxDQUFDLENBQUN1QixNQUFILENBQUQsQ0FBWUwsSUFBWixDQUFpQixJQUFqQixDQUFyQjs7QUFDQSxRQUFHbEIsQ0FBQyxDQUFDdUIsTUFBRixDQUFTdUMsT0FBWixFQUFxQjtBQUNuQndDLE9BQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZdVcsSUFBWixDQUFpQixPQUFqQixFQUEwQnBFLFFBQTFCLENBQW1DLFVBQW5DO0FBQ0FwTixPQUFDLENBQUMsTUFBTTZxQixZQUFQLENBQUQsQ0FBc0J6WCxJQUF0QixDQUEyQixTQUEzQixFQUFzQyxTQUF0QyxFQUFpRDVCLElBQWpELENBQXNELE9BQXRELEVBQStEcEUsUUFBL0QsQ0FBd0UsVUFBeEU7QUFDRCxLQUhELE1BR087QUFDTHBOLE9BQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZdVcsSUFBWixDQUFpQixPQUFqQixFQUEwQjlELFdBQTFCLENBQXNDLFVBQXRDO0FBQ0ExTixPQUFDLENBQUMsTUFBTTZxQixZQUFQLENBQUQsQ0FBc0J0VCxVQUF0QixDQUFpQyxTQUFqQyxFQUE0Qy9GLElBQTVDLENBQWlELE9BQWpELEVBQTBEOUQsV0FBMUQsQ0FBc0UsVUFBdEU7QUFDRDtBQUNGLEdBVEQsRUFuRHVELENBOER2RDs7QUFDQTFOLEdBQUMsQ0FBQywrREFBRCxDQUFELENBQW1FK0MsRUFBbkUsQ0FBc0UsUUFBdEUsRUFBZ0YsVUFBU3JKLENBQVQsRUFBWTtBQUMxRnNHLEtBQUMsQ0FBQyxpREFBRCxDQUFELENBQXFEdVgsVUFBckQsQ0FBZ0UsU0FBaEU7QUFDQXZYLEtBQUMsQ0FBQywrREFBRCxDQUFELENBQW1FME4sV0FBbkUsQ0FBK0UsU0FBL0U7QUFDQTFOLEtBQUMsQ0FBQ3RHLENBQUMsQ0FBQ3VCLE1BQUgsQ0FBRCxDQUFZbVksSUFBWixDQUFpQixTQUFqQixFQUE0QixTQUE1QjtBQUNBcFQsS0FBQyxDQUFDdEcsQ0FBQyxDQUFDdUIsTUFBSCxDQUFELENBQVl1VyxJQUFaLENBQWlCLFlBQWpCLEVBQStCZ0csSUFBL0IsQ0FBb0MsVUFBcEMsRUFBZ0RwSyxRQUFoRCxDQUF5RCxTQUF6RDtBQUNELEdBTEQsRUEvRHVELENBc0V2RDs7QUFDQXBOLEdBQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEK0MsRUFBakQsQ0FBb0QsT0FBcEQsRUFBNkQsVUFBU3JKLENBQVQsRUFBWTtBQUN2RUEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUdxRyxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjJrQixHQUE1QixPQUFzQyxXQUF6QyxFQUFzRDtBQUNwRDNrQixPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QnZGLE1BQTVCO0FBQ0F1RixPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9ULElBQTlCLENBQW1DLFNBQW5DLEVBQThDLElBQTlDLEVBQW9EMUYsV0FBcEQsQ0FBZ0UsUUFBaEUsRUFBMEVOLFFBQTFFLENBQW1GLGdCQUFuRjtBQUNEOztBQUNEd2QsbUJBQWUsQ0FBQ1AsV0FBRCxFQUFjcnFCLENBQUMsQ0FBQ3dwQixzQkFBRCxDQUFmLENBQWY7QUFDQW9CLG1CQUFlLENBQUNOLGlCQUFELEVBQW9CdHFCLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFyQixDQUFmO0FBQ0F6cEIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRckIsT0FBUixDQUFnQixNQUFoQixFQUF3QmtuQixNQUF4QjtBQUNELEdBVEQsRUF2RXVELENBa0Z2RDs7QUFDQTdsQixHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQitDLEVBQS9CLENBQWtDLGtCQUFsQyxFQUFzRCxVQUFTckosQ0FBVCxFQUFZO0FBQ2hFLFFBQUlzRyxDQUFDLENBQUNoRixRQUFELENBQUQsQ0FBWXdGLEtBQVosTUFBdUIsSUFBM0IsRUFBaUM7QUFDL0JzcUIsc0JBQWdCO0FBQ2hCLFlBQU0xSixpQkFBaUIsR0FBR3BoQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRVLFdBQXRCLEtBQXNDNVUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixFQUFoRTtBQUNBaEIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJrRixHQUE3QixDQUFpQyxLQUFqQyxFQUF3Q2tjLGlCQUFpQixHQUFHLElBQTVEO0FBRUFwaEIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJvTixRQUE3QixDQUFzQyxNQUF0QztBQUNBcE4sT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb04sUUFBVixDQUFtQixrQkFBbkI7QUFDQXBOLE9BQUMsQ0FBQyxRQUFELEVBQVdBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFaLENBQUQsQ0FBNkMvYixXQUE3QyxDQUF5RCxRQUF6RDtBQUNEO0FBQ0YsR0FWRCxFQVVHM0ssRUFWSCxDQVVNLG9CQVZOLEVBVTRCLFVBQVNySixDQUFULEVBQVk7QUFDdEMsUUFBSXNHLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixNQUF1QixJQUEzQixFQUFpQztBQUMvQlIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIwTixXQUE3QixDQUF5QyxNQUF6QztBQUNBMU4sT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVME4sV0FBVixDQUFzQixrQkFBdEI7QUFDQTFOLE9BQUMsQ0FBQyxRQUFELEVBQVdBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFaLENBQUQsQ0FBNkNyYyxRQUE3QyxDQUFzRCxRQUF0RDtBQUNEO0FBQ0YsR0FoQkQ7QUFrQkE7QUFDRjtBQUNBO0FBQ0U7O0FBQ0EsTUFBSStjLFFBQVEsS0FBSyxDQUFDLENBQWxCLEVBQXFCO0FBQ25CbnFCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CME4sV0FBcEIsQ0FBZ0MsUUFBaEM7QUFDRCxHQTNHc0QsQ0E0R3ZEOzs7QUFDQTFOLEdBQUMsQ0FBQyxRQUFELEVBQVdBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUFaLENBQUQsQ0FBNkMxbUIsRUFBN0MsQ0FBZ0QsT0FBaEQsRUFBeUQsVUFBU3JKLENBQVQsRUFBWTtBQUNuRUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FxRyxLQUFDLENBQUMsa0JBQUQsRUFBcUJBLENBQUMsQ0FBQ3lwQiw0QkFBRCxDQUF0QixDQUFELENBQXVEcnNCLE9BQXZELENBQStELE9BQS9EO0FBQ0QsR0FIRDtBQUlELENBakhEO0FBbUhBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTB0QixnQkFBZ0IsR0FBRyxTQUFTQyxzQkFBVCxHQUFrQztBQUN6RCxNQUFJL3FCLENBQUMsQ0FBQ2hGLFFBQUQsQ0FBRCxDQUFZd0YsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QlIsS0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIwTixXQUE3QixDQUF5QyxNQUF6QztBQUNELEdBRkQsTUFFTztBQUNMLFVBQU1zZCxlQUFlLEdBQUdockIsQ0FBQyxDQUFDLGtCQUFELENBQXpCO0FBQ0EsVUFBTWlyQixZQUFZLEdBQUdqckIsQ0FBQyxDQUFDLGdCQUFELENBQXRCO0FBQ0EsVUFBTXVoQixZQUFZLEdBQUd5SixlQUFlLENBQUNocUIsTUFBaEIsS0FBMkJpcUIsWUFBWSxDQUFDanFCLE1BQWIsRUFBaEQ7QUFDQSxVQUFNb2dCLGlCQUFpQixHQUFHNEosZUFBZSxDQUFDcFcsV0FBaEIsS0FBZ0NxVyxZQUFZLENBQUNqcUIsTUFBYixFQUExRDtBQUNBLFVBQU1rcUIseUJBQXlCLEdBQUdsckIsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNnQixNQUEzQyxLQUFzRGhCLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLE1BQVosRUFBdEQsR0FBNkVoQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CNFUsV0FBbkIsRUFBN0UsR0FBZ0gsRUFBbEo7QUFDQTVVLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCa0YsR0FBNUIsQ0FBZ0MsUUFBaEMsRUFBMEMsaUJBQWlCcWMsWUFBakIsR0FBZ0MsS0FBMUU7QUFDQXZoQixLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmtGLEdBQTdCLENBQWlDLEtBQWpDLEVBQXdDa2MsaUJBQWlCLEdBQUcsSUFBNUQ7QUFDQXBoQixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa0YsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0JnbUIseUJBQXlCLEdBQUcsSUFBM0Q7QUFDRDtBQUNGLENBYkQ7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1gsaUJBQVQsQ0FBMkJILFVBQTNCLEVBQXVDZSxpQkFBdkMsRUFBMEQ7QUFDeEQsUUFBTUMsY0FBYyxHQUFHcHJCLENBQUMsQ0FBQ21yQixpQkFBRCxDQUF4QjtBQUNBLFFBQU1FLFVBQVUsR0FBR3JyQixDQUFDLENBQUMsYUFBRCxFQUFnQm9yQixjQUFoQixDQUFELENBQWlDLENBQWpDLENBQW5CO0FBQ0EsUUFBTUUsUUFBUSxHQUFHdHJCLENBQUMsQ0FBQzBwQixnQkFBRCxFQUFtQjBCLGNBQW5CLENBQWxCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHdnJCLENBQUMsQ0FBQzJwQixnQkFBRCxFQUFtQnlCLGNBQW5CLENBQWxCLENBSndELENBS3hEOztBQUNBLFFBQU1JLGFBQWEsR0FBRzlwQixVQUFVLENBQUMwb0IsVUFBVSxDQUFDcUIsS0FBWCxHQUFtQjd3QixJQUFuQixDQUF3QixLQUF4QixDQUFELENBQWhDO0FBQ0EsUUFBTTh3QixhQUFhLEdBQUdocUIsVUFBVSxDQUFDMG9CLFVBQVUsQ0FBQ3FCLEtBQVgsR0FBbUI3d0IsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBRCxDQUFoQztBQUNBLFFBQU0rd0Isa0JBQWtCLEdBQUc7QUFDekJDLFNBQUssRUFBRSxDQUFDTixRQUFRLENBQUMzRyxHQUFULEVBQUQsRUFBaUI0RyxRQUFRLENBQUM1RyxHQUFULEVBQWpCLENBRGtCO0FBR3pCa0gsU0FBSyxFQUFFO0FBQ0wsYUFBTyxDQUFDTCxhQUFELENBREY7QUFFTCxhQUFPLENBQUNFLGFBQUQ7QUFGRixLQUhrQjtBQU96QkksUUFBSSxFQUFFLENBUG1CO0FBUXpCQyxXQUFPLEVBQUUsSUFSZ0I7QUFTekJDLFVBQU0sRUFBRTtBQUNOQyxRQUFFLEVBQUUsWUFBVWx5QixLQUFWLEVBQWlCO0FBQ25CLGVBQU9BLEtBQVA7QUFDRCxPQUhLO0FBSU5teUIsVUFBSSxFQUFFLGNBQVVueUIsS0FBVixFQUFpQjtBQUNyQixlQUFPQSxLQUFQO0FBQ0Q7QUFOSyxLQVRpQjtBQWlCekJveUIsYUFBUyxFQUFFLEtBakJjO0FBa0J6QkMsWUFBUSxFQUFFO0FBbEJlLEdBQTNCOztBQXFCQSxRQUFNQyxNQUFNLEdBQUdDLHFCQUFXM2YsTUFBWCxDQUFrQjBlLFVBQWxCLEVBQThCTSxrQkFBOUIsQ0FBZjs7QUFDQVUsUUFBTSxDQUFDdHBCLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVNpbEIsUUFBVCxFQUFtQjtBQUNwQ3NELFlBQVEsQ0FBQzNHLEdBQVQsQ0FBYWxPLFFBQVEsQ0FBQ3VSLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBckI7QUFDQXVELFlBQVEsQ0FBQzVHLEdBQVQsQ0FBYWxPLFFBQVEsQ0FBQ3VSLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBckI7QUFDRCxHQUhEO0FBS0EsU0FBT3FFLE1BQVA7QUFDRDs7QUFFRCxTQUFTM0IsaUJBQVQsQ0FBMkJMLFdBQTNCLEVBQXdDZSxjQUF4QyxFQUF3RDtBQUN0RCxRQUFNRSxRQUFRLEdBQUd0ckIsQ0FBQyxDQUFDMHBCLGdCQUFELEVBQW1CMEIsY0FBbkIsQ0FBbEI7QUFDQSxRQUFNRyxRQUFRLEdBQUd2ckIsQ0FBQyxDQUFDMnBCLGdCQUFELEVBQW1CeUIsY0FBbkIsQ0FBbEI7QUFFQSxRQUFNcEQsUUFBUSxHQUFHLENBQUNzRCxRQUFRLENBQUMzRyxHQUFULEVBQUQsRUFBaUI0RyxRQUFRLENBQUM1RyxHQUFULEVBQWpCLENBQWpCO0FBQ0EwRixhQUFXLENBQUMxaEIsR0FBWixDQUFnQnFmLFFBQWhCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTNEMsZUFBVCxDQUF5QjJCLGlCQUF6QixFQUE0Q25CLGNBQTVDLEVBQTREO0FBQzFELFFBQU1FLFFBQVEsR0FBR3RyQixDQUFDLENBQUMwcEIsZ0JBQUQsRUFBbUIwQixjQUFuQixDQUFsQjtBQUNBLFFBQU1HLFFBQVEsR0FBR3ZyQixDQUFDLENBQUMycEIsZ0JBQUQsRUFBbUJ5QixjQUFuQixDQUFsQjtBQUNBLFFBQU1oQixVQUFVLEdBQUdwcUIsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0N5ckIsS0FBaEMsRUFBbkI7QUFDQSxNQUFJZSxhQUFhLEdBQUdsQixRQUFRLENBQUMzRyxHQUFULEVBQXBCO0FBQ0EsTUFBSThILGFBQWEsR0FBR2xCLFFBQVEsQ0FBQzVHLEdBQVQsRUFBcEI7O0FBQ0EsTUFBSTJHLFFBQVEsQ0FBQzNHLEdBQVQsS0FBaUJ5RixVQUFVLENBQUN4dkIsSUFBWCxDQUFnQixLQUFoQixDQUFyQixFQUE2QztBQUMzQzR4QixpQkFBYSxHQUFHcEMsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFDRDs7QUFDRCxNQUFJMHdCLFFBQVEsQ0FBQzNHLEdBQVQsS0FBaUJ5RixVQUFVLENBQUN4dkIsSUFBWCxDQUFnQixLQUFoQixDQUFyQixFQUE2QztBQUMzQzR4QixpQkFBYSxHQUFHcEMsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFDRDs7QUFDRDB3QixVQUFRLENBQUMzRyxHQUFULENBQWE2SCxhQUFiOztBQUNBLE1BQUlqQixRQUFRLENBQUM1RyxHQUFULEtBQWlCeUYsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBckIsRUFBNkM7QUFDM0M2eEIsaUJBQWEsR0FBR3JDLFVBQVUsQ0FBQ3h2QixJQUFYLENBQWdCLEtBQWhCLENBQWhCO0FBQ0Q7O0FBQ0QsTUFBSTJ3QixRQUFRLENBQUM1RyxHQUFULEtBQWlCeUYsVUFBVSxDQUFDeHZCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBckIsRUFBNkM7QUFDM0M2eEIsaUJBQWEsR0FBR3JDLFVBQVUsQ0FBQ3h2QixJQUFYLENBQWdCLEtBQWhCLENBQWhCO0FBQ0Q7O0FBQ0Qyd0IsVUFBUSxDQUFDNUcsR0FBVCxDQUFhOEgsYUFBYjtBQUNBRixtQkFBaUIsQ0FBQzVqQixHQUFsQixDQUFzQixDQUFDNmpCLGFBQUQsRUFBZ0JDLGFBQWhCLENBQXRCO0FBQ0Q7O1FBRVE3QyxPLEdBQUFBLE87UUFBU0csYyxHQUFBQSxjO1FBQWdCZSxnQixHQUFBQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNRbEM7O0FBQ0E7O0FBQ0E7QUFFQSxNQUFNNEIsWUFBWSxHQUFHLFNBQVN2SyxhQUFULEdBQXlCO0FBQzVDLE1BQUdubkIsUUFBUSxDQUFDeUUsY0FBVCxDQUF3QixlQUF4QixDQUFILEVBQTZDO0FBQzNDbWhCLFVBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUJnQixPQUFyQixDQUE2QixTQUE3QixFQUQyQyxDQUUzQzs7QUFDQTVtQixZQUFRLENBQUN5RSxjQUFULENBQXdCLGVBQXhCLEVBQXlDaEcsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLFVBQVV3bkIsS0FBVixFQUFpQjtBQUNsRkEsV0FBSyxDQUFDdG5CLGNBQU47QUFDQSxZQUFNZ3pCLE1BQU0sR0FBSUMsTUFBTSxDQUFDNXJCLE1BQVAsR0FBZ0IsQ0FBakIsR0FBdUIsTUFBTSxDQUE1QztBQUNBLFlBQU02ckIsT0FBTyxHQUFJRCxNQUFNLENBQUNwc0IsS0FBUCxHQUFlLENBQWhCLEdBQXNCLE1BQU0sQ0FBNUM7QUFDQSxZQUFNckgsR0FBRyxHQUFHNkIsUUFBUSxDQUFDeUUsY0FBVCxDQUF3QixlQUF4QixFQUF5Q3ZELE9BQXpDLENBQWlEL0MsR0FBN0Q7QUFDQWdCLFlBQU0sQ0FBQzJ5QixJQUFQLENBQVksMENBQXdDM3pCLEdBQXBELEVBQXlELHlCQUF6RCxFQUFvRixTQUFTd3pCLE1BQVQsR0FBa0IsUUFBbEIsR0FBNkJFLE9BQTdCLEdBQXVDLDBDQUEzSDtBQUNELEtBTkQsRUFIMkMsQ0FXM0M7O0FBQ0E3eEIsWUFBUSxDQUFDeUUsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENoRyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0UsVUFBVXduQixLQUFWLEVBQWlCO0FBQ25GQSxXQUFLLENBQUN0bkIsY0FBTjtBQUNBcUIsY0FBUSxDQUFDeUUsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENzdEIsS0FBOUM7QUFDRCxLQUhELEVBWjJDLENBa0IzQzs7QUFDQS94QixZQUFRLENBQUN5RSxjQUFULENBQXdCLFdBQXhCLEVBQXFDaEcsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVV3bkIsS0FBVixFQUFpQjtBQUM5RUEsV0FBSyxDQUFDdG5CLGNBQU47QUFDQSxZQUFNcXpCLFFBQVEsR0FBR2h5QixRQUFRLENBQUN5RSxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0FPLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0aEIsT0FBaEIsQ0FBd0IsUUFBeEI7QUFDQTFnQixlQUFTLENBQUMrckIsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJGLFFBQVEsQ0FBQ2p6QixLQUF2QyxFQUNHRyxJQURILENBQ1EsTUFBTTtBQUNWOEYsU0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRoQixPQUFoQixDQUF3QixNQUF4QjtBQUNBcmEsa0JBQVUsQ0FBQyxZQUFXO0FBQUV2SCxXQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNGhCLE9BQWhCLENBQXdCLFNBQXhCO0FBQXFDLFNBQW5ELEVBQXFELElBQXJELENBQVY7QUFDRCxPQUpILEVBS0d0bkIsS0FMSCxDQUtVQyxLQUFELElBQVc7QUFBRTR5QixlQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZTd5QixLQUFNLEVBQWxDO0FBQXNDLE9BTDVEO0FBTUQsS0FWRCxFQW5CMkMsQ0ErQjNDOztBQUNBUyxZQUFRLENBQUN5RSxjQUFULENBQXdCLFdBQXhCLEVBQXFDaEcsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVN3bkIsS0FBVCxFQUFnQjtBQUM3RUEsV0FBSyxDQUFDdG5CLGNBQU47QUFDQSxZQUFNMHpCLE1BQU0sR0FBR3J5QixRQUFRLENBQUN5RSxjQUFULENBQXdCLFdBQXhCLEVBQXFDdkQsT0FBckMsQ0FBNkNveEIsTUFBNUQ7QUFDQW56QixZQUFNLENBQUNDLFFBQVAsQ0FBZ0JpZ0IsSUFBaEIsR0FBdUJnVCxNQUF2QjtBQUNELEtBSkQ7QUFLRDtBQUNGLENBdkNEOztrQkF5Q2VYLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0EsTUFBTWEsZUFBZSxHQUFJejBCLEVBQUQsSUFBUTtBQUM5QixRQUFNQyxPQUFPLEdBQUdELEVBQWhCO0FBQ0EsUUFBTUssR0FBRyxHQUFHSixPQUFPLENBQUNLLFlBQVIsQ0FBcUIsUUFBckIsQ0FBWjtBQUNBLFFBQU1rQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQy9CLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWhCO0FBQ0EsTUFBSXUwQixpQkFBaUIsR0FBR3owQixPQUFPLENBQUNFLGFBQVIsQ0FBc0IsK0JBQXRCLENBQXhCO0FBRUFGLFNBQU8sQ0FBQ1UsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBb0NDLENBQUQsSUFBTztBQUN4Q0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTTh6QixhQUFhLEdBQUcsc0JBQUUxMEIsT0FBRixFQUFXNEYsT0FBWCxDQUFtQixNQUFuQixDQUF0QjtBQUVBNnVCLHFCQUFpQixDQUFDaHpCLFNBQWxCLENBQTRCQyxNQUE1QixDQUFtQyxTQUFuQztBQUNBLFVBQU1pekIsWUFBWSxHQUFHLHNCQUFFLGtCQUFrQixzQkFBRUQsYUFBRixFQUFpQjd5QixJQUFqQixDQUFzQixhQUF0QixDQUFsQixHQUF5RCxZQUEzRCxFQUF5RU0sTUFBOUY7QUFDQSxVQUFNeXlCLGdCQUFnQixHQUFHLHNCQUFFLGlCQUFGLEVBQXFCenlCLE1BQTlDOztBQUNBLFFBQUd3eUIsWUFBWSxHQUFHLENBQWYsSUFBb0JBLFlBQVksR0FBR0MsZ0JBQXRDLEVBQXlEO0FBQ3ZELDRCQUFFRixhQUFGLEVBQWlCalcsSUFBakIsQ0FBc0Isb0NBQXRCLEVBQTREOUosV0FBNUQsQ0FBd0UsUUFBeEUsRUFBa0ZOLFFBQWxGLENBQTJGLFNBQTNGO0FBQ0QsS0FGRCxNQUVPLElBQUlzZ0IsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzdCLDRCQUFFRCxhQUFGLEVBQWlCalcsSUFBakIsQ0FBc0IsZ0JBQXRCLEVBQXdDOUosV0FBeEMsQ0FBb0QsUUFBcEQsRUFBOEROLFFBQTlELENBQXVFLFNBQXZFO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsNEJBQUVxZ0IsYUFBRixFQUFpQmpXLElBQWpCLENBQXNCLGdCQUF0QixFQUF3Q3BLLFFBQXhDLENBQWlELFFBQWpELEVBQTJETSxXQUEzRCxDQUF1RSxTQUF2RTtBQUVBM1UsYUFBTyxDQUFDeUIsU0FBUixDQUFrQmpELEdBQWxCLENBQXNCLFVBQXRCLEVBQWtDLFNBQWxDO0FBQ0F3QixhQUFPLENBQUMyQyxXQUFSLENBQW9CSixPQUFPLENBQUNLLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBcEI7O0FBQ0EsWUFBTWl5QixPQUFPLEdBQUc1ekIsZ0JBQU1DLElBQU4sQ0FBV2QsR0FBWCxFQUFnQiw2QkFBVUosT0FBVixDQUFoQixDQUFoQjs7QUFDQTYwQixhQUFPLENBQUMxekIsSUFBUixDQUFjUyxRQUFELElBQWM7QUFDekI2eUIseUJBQWlCLENBQUNoekIsU0FBbEIsQ0FBNEJDLE1BQTVCLENBQW1DLFNBQW5DOztBQUNBLGNBQU1vekIsWUFBWSxHQUFHN3RCLGlCQUFFa25CLFNBQUYsQ0FBWXZzQixRQUFRLENBQUNDLElBQXJCLEVBQTJCLENBQTNCLENBQXJCOztBQUNBLDhCQUFFLGtCQUFGLEVBQXNCc1ksSUFBdEIsQ0FBMkIsc0JBQUUyYSxZQUFGLEVBQWdCclcsSUFBaEIsQ0FBcUIsa0JBQXJCLEVBQXlDLENBQXpDLEVBQTRDOWMsU0FBdkUsRUFBa0ZxVixTQUFsRixDQUE0RixDQUE1RixFQUErRjNDLFFBQS9GLENBQXdHLFFBQXhHO0FBQ0EsOEJBQUUsYUFBRixFQUFpQjhGLElBQWpCLENBQXNCLHNCQUFFMmEsWUFBRixFQUFnQnJXLElBQWhCLENBQXFCLHdCQUFyQixFQUErQyxDQUEvQyxFQUFrRDljLFNBQXhFO0FBQ0EsOEJBQUUsb0JBQUYsRUFBd0J3WSxJQUF4QixDQUE2QixzQkFBRTJhLFlBQUYsRUFBZ0JyVyxJQUFoQixDQUFxQixnQkFBckIsRUFBdUMsQ0FBdkMsRUFBMEM5YyxTQUF2RTtBQUNBLDhCQUFFLHFDQUFGLEVBQXlDMEMsT0FBekMsQ0FBaUQsT0FBakQ7QUFDQSw4QkFBRSw2QkFBRixFQUFpQ3NRLFdBQWpDLENBQTZDLFFBQTdDLEVBQXVETixRQUF2RCxDQUFnRSxRQUFoRTtBQUNBLDhCQUFFLGtDQUFGLEVBQXNDMGdCLElBQXRDLEdBQTZDNWEsSUFBN0MsQ0FBa0Qsc0JBQUUyYSxZQUFGLEVBQWdCclcsSUFBaEIsQ0FBcUIscUJBQXJCLEVBQTRDLENBQTVDLEVBQStDOWMsU0FBakc7QUFFQTNCLGVBQU8sQ0FBQ3lCLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0E7QUFFRCxPQWJELEVBYUdILEtBYkgsQ0FhVUMsS0FBRCxJQUFXO0FBQ2xCLFlBQUlBLEtBQUssS0FBSzZFLFNBQWQsRUFBeUI7QUFDdkIsY0FBSTJ1QixZQUFZLEdBQUcsRUFBbkI7QUFDQWgxQixpQkFBTyxDQUFDeUIsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFDQU8sa0JBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFTd3lCLE9BQVQsRUFBa0I7QUFDdkVBLG1CQUFPLENBQUN4ekIsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFDRCxXQUZEOztBQUdBLGNBQUlGLEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxJQUFmLENBQW9CQyxPQUFwQixLQUFnQ3VFLFNBQXBDLEVBQStDO0FBQzdDLGdCQUFJN0UsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBQWYsQ0FBb0JxekIsVUFBcEIsR0FBaUMsQ0FBckMsRUFBd0M7QUFDdENULCtCQUFpQixHQUFHejBCLE9BQU8sQ0FBQ0UsYUFBUixDQUFzQixvREFBbURzQixLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBZixDQUFvQnF6QixVQUF2RSxHQUFtRixJQUF6RyxDQUFwQjtBQUNELGFBRkQsTUFFTztBQUNMVCwrQkFBaUIsR0FBR3owQixPQUFPLENBQUNFLGFBQVIsQ0FBc0Isa0RBQXRCLENBQXBCO0FBQ0Q7O0FBQ0Q4MEIsd0JBQVksR0FBSXh6QixLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBZixDQUFvQkMsT0FBckIsQ0FBOEJxekIsUUFBOUIsRUFBZjtBQUNELFdBUEQsTUFPTztBQUNMSCx3QkFBWSxHQUFJeHpCLEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxJQUFoQixDQUFzQnN6QixRQUF0QixFQUFmO0FBQ0Q7O0FBQ0RWLDJCQUFpQixDQUFDOXlCLFNBQWxCLEdBQThCcXpCLFlBQTlCO0FBQ0FQLDJCQUFpQixDQUFDaHpCLFNBQWxCLENBQTRCakQsR0FBNUIsQ0FBZ0MsU0FBaEM7QUFDRDtBQUNGLE9BakNEO0FBa0NEO0FBQ0YsR0FwREQ7QUFxREQsQ0EzREQ7O2tCQTZEZWcyQixlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNWSxtQkFBbUIsR0FBRyxzQkFBRSxrQkFBRixDQUE1Qjs7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyxTQUFTQyx1QkFBVCxHQUFtQztBQUN0RTtBQUNBcnpCLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsbUNBQTFCLEVBQ0dDLE9BREgsQ0FDVzFDLEVBQUUsSUFBSSxvQ0FBcUJBLEVBQXJCLENBRGpCO0FBRUFrQyxVQUFRLENBQUNPLGdCQUFULENBQTBCLDZCQUExQixFQUNHQyxPQURILENBQ1cxQyxFQUFFLElBQUksb0NBQXFCQSxFQUFyQixDQURqQjtBQUdBLHdCQUFFLFdBQUYsRUFBZXExQixtQkFBZixFQUFvQ3ByQixFQUFwQyxDQUF1QyxPQUF2QyxFQUFnRCxVQUFTckosQ0FBVCxFQUFZO0FBQzFELDBCQUFFLElBQUYsRUFBUThYLElBQVIsR0FBZTlELFdBQWYsQ0FBMkIsUUFBM0I7QUFDQSwwQkFBRSxrQkFBRixFQUFzQjBGLElBQXRCLENBQTJCLDBCQUEzQixFQUF1RCxzQkFBRSxJQUFGLEVBQVF1UixHQUFSLEVBQXZEOztBQUNBLFFBQUlsTyxRQUFRLENBQUMsc0JBQUUsSUFBRixFQUFRa08sR0FBUixFQUFELENBQVIsSUFBMkJsTyxRQUFRLENBQUMsc0JBQUUsSUFBRixFQUFRckQsSUFBUixDQUFhLEtBQWIsQ0FBRCxDQUF2QyxFQUE4RDtBQUM1RCw0QkFBRSxJQUFGLEVBQVF1UixHQUFSLENBQVksc0JBQUUsSUFBRixFQUFRdlIsSUFBUixDQUFhLEtBQWIsQ0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9ELENBZEQ7O0FBZ0JBLE1BQU1rYix5QkFBeUIsR0FBRyxTQUFTQyxnQkFBVCxDQUEwQjV6QixRQUExQixFQUFvQztBQUNwRSxRQUFNa3pCLFlBQVksR0FBRzd0QixpQkFBRWtuQixTQUFGLENBQVl2c0IsUUFBUSxDQUFDQyxJQUFyQixFQUEyQixDQUEzQixDQUFyQjs7QUFDQXV6QixxQkFBbUIsQ0FBQ2piLElBQXBCLENBQXlCLHNCQUFFMmEsWUFBRixFQUFnQnJXLElBQWhCLENBQXFCLGtCQUFyQixFQUF5QyxDQUF6QyxFQUE0QzljLFNBQXJFLEVBQWdGcVYsU0FBaEYsQ0FBMEYsQ0FBMUYsRUFBNkZyQyxXQUE3RixDQUF5RyxTQUF6RztBQUNBLHdCQUFFLGFBQUYsRUFBaUJ3RixJQUFqQixDQUFzQixzQkFBRTJhLFlBQUYsRUFBZ0JyVyxJQUFoQixDQUFxQix3QkFBckIsRUFBK0MsQ0FBL0MsRUFBa0Q5YyxTQUF4RTtBQUNBLHdCQUFFLGtDQUFGLEVBQXNDb3pCLElBQXRDLEdBQTZDNWEsSUFBN0MsQ0FBa0Qsc0JBQUUyYSxZQUFGLEVBQWdCclcsSUFBaEIsQ0FBcUIscUJBQXJCLEVBQTRDLENBQTVDLEVBQStDOWMsU0FBakc7QUFDRCxDQUxEOztBQU9BLE1BQU04ekIsa0JBQWtCLEdBQUcsU0FBU0MsU0FBVCxHQUFxQjtBQUM5Q3p6QixVQUFRLENBQUNPLGdCQUFULENBQTBCLDhCQUExQixFQUNHQyxPQURILENBQ1cxQyxFQUFFLElBQUksK0JBQWdCQSxFQUFoQixDQURqQjtBQUVELENBSEQ7O1FBS1NzMUIsNEIsR0FBQUEsNEI7UUFBOEJFLHlCLEdBQUFBLHlCO1FBQTJCRSxrQixHQUFBQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJsRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBTUEsTUFBTUUsb0JBQW9CLEdBQUk1MUIsRUFBRCxJQUFRO0FBQ25DLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNNjFCLFdBQVcsR0FBRzUxQixPQUFPLENBQUNLLFlBQVIsQ0FBcUIsdUNBQXJCLENBQXBCO0FBQ0EsUUFBTXcxQixTQUFTLEdBQUc3MUIsT0FBTyxDQUFDSyxZQUFSLENBQXFCLHFDQUFyQixDQUFsQjtBQUNBLFFBQU1ELEdBQUcsR0FBR0osT0FBTyxDQUFDSyxZQUFSLENBQXFCLGtDQUFyQixDQUFaO0FBRUFMLFNBQU8sQ0FBQ1UsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBbUNDLENBQUQsSUFBTztBQUN2Q0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsMEJBQUUsa0JBQUYsRUFBc0J5VCxRQUF0QixDQUErQixTQUEvQixFQUEwQzJDLFNBQTFDLENBQW9ELENBQXBEOztBQUVBL1Ysb0JBQU02MEIsTUFBTixDQUFhMTFCLEdBQWIsRUFBa0I7QUFBRXlCLFVBQUksRUFBRTtBQUFFazBCLG1CQUFXLEVBQUVGO0FBQWY7QUFBUixLQUFsQixFQUNHMTBCLElBREgsQ0FDU1MsUUFBRCxJQUFjO0FBQ2xCLFVBQUlnMEIsV0FBVyxLQUFLdnZCLFNBQWhCLElBQTZCLENBQUNyRyxPQUFPLENBQUN5QixTQUFSLENBQWtCdTBCLFFBQWxCLENBQTJCLHFCQUEzQixDQUFsQyxFQUFxRjtBQUNuRjUwQixjQUFNLENBQUNDLFFBQVAsQ0FBZ0J1TSxPQUFoQixDQUF3QmdvQixXQUF4QjtBQUNELE9BRkQsTUFFTztBQUNMLHlEQUEwQmgwQixRQUExQjtBQUNBO0FBQ0Q7QUFDRixLQVJIO0FBU0QsR0FiRDtBQWNELENBcEJEOztrQkFzQmUrekIsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFPQSxNQUFNTSxvQkFBb0IsR0FBSWwyQixFQUFELElBQVE7QUFDbkMsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1LLEdBQUcsR0FBR0osT0FBTyxDQUFDSyxZQUFSLENBQXFCLHdCQUFyQixDQUFaO0FBQ0EsUUFBTXcxQixTQUFTLEdBQUc3MUIsT0FBTyxDQUFDSyxZQUFSLENBQXFCLCtCQUFyQixDQUFsQjtBQUVBTCxTQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQW1DQyxDQUFELElBQU87QUFDdkMsMEJBQUUsOEJBQUYsRUFBa0NnVSxXQUFsQyxDQUE4QyxTQUE5QztBQUNBLFVBQU11aEIsV0FBVyxHQUFHbDJCLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQiwwQkFBckIsQ0FBcEI7O0FBQ0EsVUFBTXcwQixPQUFPLEdBQUc1ekIsZ0JBQU1DLElBQU4sQ0FBV2QsR0FBWCxFQUFnQixFQUFoQixFQUFtQjtBQUFFeUIsVUFBSSxFQUFFO0FBQUNrMEIsbUJBQVcsRUFBRUYsU0FBZDtBQUF5Qk0sZ0JBQVEsRUFBRUQ7QUFBbkM7QUFBUixLQUFuQixDQUFoQjs7QUFFQXYxQixLQUFDLENBQUNDLGNBQUY7QUFDQSwwQkFBRSxrQkFBRixFQUFzQnlULFFBQXRCLENBQStCLFNBQS9CLEVBQTBDMkMsU0FBMUMsQ0FBb0QsQ0FBcEQ7QUFFQTZkLFdBQU8sQ0FBQzF6QixJQUFSLENBQWNTLFFBQUQsSUFBYztBQUN6Qix1REFBMEJBLFFBQTFCO0FBQ0E7QUFFRCxLQUpELEVBSUdMLEtBSkgsQ0FJVUMsS0FBRCxJQUFXO0FBQ2xCLFVBQUlBLEtBQUssS0FBSzZFLFNBQWQsRUFBeUI7QUFDdkIsOEJBQUUsOEJBQUYsRUFBa0NnTyxRQUFsQyxDQUEyQyxTQUEzQyxFQUFzRG9LLElBQXRELENBQTJELHFCQUEzRCxFQUFrRnRFLElBQWxGLENBQXdGM1ksS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBQWhCLENBQXNCc3pCLFFBQXRCLEVBQXZGLEVBQXlIdnZCLE9BQXpILENBQWlJLE1BQWpJLEVBQXlJK08sV0FBekksQ0FBcUosUUFBcko7QUFDQSw4QkFBRSxrQkFBRixFQUFzQkEsV0FBdEIsQ0FBa0MsU0FBbEM7QUFDRDtBQUNGLEtBVEQ7QUFVRCxHQWxCRDtBQW1CRCxDQXhCRDs7a0JBMEJlc2hCLG9COzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBZSxnSEFBaUQsRTs7Ozs7Ozs7Ozs7O0FDQWhFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0F4RDtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSw4R0FBK0MsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsNkdBQThDLEU7Ozs7Ozs7Ozs7OztBQ0E3RDtBQUFlLGtIQUFtRCxFOzs7Ozs7Ozs7Ozs7QUNBbEU7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSw4R0FBK0MsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsaUhBQWtELEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSwwR0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxxSEFBc0QsRTs7Ozs7Ozs7Ozs7O0FDQXJFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7O0FDQXhELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNMb2FkYWJsZUZvcm1zO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2FjY291bnQtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYmFjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL25leHQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWZyLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1kZS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24taXQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVzLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JlbG9hZC5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbi8vIEdFTkVSQUwgRlVOQ1RJT05TXG5pbXBvcnQgeyBjYXJvdXNlbCwgcmVwbGFjZUNhcm91c2VsQXJyb3csIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCwgY3JlYXRlR2FsbGVyeURlc2t0b3AgfSBmcm9tICcuL2pzL2Nhcm91c2VsLmpzJztcbmltcG9ydCBjaGVja291dCBmcm9tICcuL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHtwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudX0gZnJvbSAnLi9qcy9wcm9kdWN0LW5vYmxlc3MnO1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9qcy9jYXJ0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHNoYXJlUHJvZHVjdCBmcm9tICcuL2pzL3NoYXJlLXByb2R1Y3QuanMnO1xuaW1wb3J0IGxvZ2luUGFnZSBmcm9tICcuL2pzL2xvZ2luLW5vYmxlc3MuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vanMvY29udGFjdC1ub2JsZXNzJztcbi8vIE1FTlUgRlVOQ1RJT05TXG4vLyBPUkRFUlMgR1JJRCBGVU5DVElPTlNcblxuXG4vKipcbiAqIFJlc2l6ZSBmdW5jdGlvbiB0byBrZWVwIGFsbCB0aGUgbWFpbi1jb250ZW50IHZpc2libGVcbiAqL1xuZnVuY3Rpb24gcmVzaXplTWFpbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCI7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAvKiQoJyNtYWluQ29udGVudENvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Ki9cblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKVxuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgICAvLyBDYXJ0IEljb25cbiAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KCcuZHJvcGRvd24nKS5oYXNDbGFzcygnY2FydC1idG4nKSkge1xuICAgICAgJCgnI2hlYWRlckNhcnROZXdJdGVtJykuaHRtbCgnJyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsJykuYWRkQ2xhc3MoJ2QtZmxleCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJUYXhvbnMnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJBY2NvdW50TGlua3MnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9yZGVyc0dyaWRGdW5jdGlvbnMoKSB7XG4gIC8vIERlc2t0b3AgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJ3RyJywgdGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gIC8vIE1vYmlsZSBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmFkZENsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJy5hcnJvdy1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2Lm9yZGVyLWRldGFpbHMnKS5wcmV2KCdkaXYnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGNhcm91c2VsKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBzaGFyZVByb2R1Y3QoKTtcbiAgcmVzaXplTWVudSgkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpKTtcbiAgcmVzaXplRmlsdGVyTWVudSgpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICBGcmVzY28uaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjYXJvdXNlbCgpO1xuICBuYXZiYXJDb2xsYXBzZUluaXQoKTtcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgfSk7XG4gIC8vIFBSRVZFTlQgSU5TSURFIENMSUNLIERST1BET1dOXG4gICQoJy5kcm9wZG93bi1tZW51Jykub24oXCJjbGljay5icy5kcm9wZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICBzaGFyZVByb2R1Y3QoKTtcbiAgcHJvZHVjdCgpO1xuICBmaWx0ZXJQcm9kdWN0cygpO1xuICAvLyBNZW51IEZ1bmN0aW9uc1xuICBtZWdhbWVudUZ1bmN0aW9ucygpO1xuICBtZW51SWNvbmVzRnVuY3Rpb25zKCk7XG5cbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2UoKTtcbiAgY2FydCgpO1xuICBjaGVja291dCgpO1xuXG4gIGNvbnRhY3RQYWdlKCk7XG5cbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgcmVwbGFjZUNhcm91c2VsQXJyb3coKTtcbiAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgfSovXG4gIC8vIFNob3cgbWVudSBhZnRlciBwYWdlIGlzIGxvYWRlZFxuICAkKCcubW9iaWxlLW9mZmNhbnZhcycpLnNob3coKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLnNob3coKTtcbn1cblxuZXhwb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuLy9pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbi8vIGltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5pbXBvcnQge2FmdGVyRG9tUmVwbGFjZW1lbnRGdW5jdGlvbnMsIGFkZFRvQ2FydEZ1bmN0aW9ucyB9IGZyb20gJy4vanMvc3lsaXVzLWNhcnQtY29tbW9uJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgYWRkVG9DYXJ0RnVuY3Rpb25zKCk7XG5cbiAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIC8vU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICAvLyBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICAvLyBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWFkZHJlc3MnKSkge1xuICAvLyAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIC8vIH1cbiAgLy8gY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIC8vIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWFkZHJlc3MnKSkge1xuICAvLyAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgLy8gfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ0FST1VTRUwgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IEZyZXNjbyBmcm9tICcuLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbmNvbnN0IGNhcm91c2VsID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSk7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSk7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykpO1xuXG4gIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbCgkKCcjcHJvZHVjdEdhbGxlcnknKSk7XG4gIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbCgkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBtYWluIGNhcm91c2Vsc1xuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNzAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcblxuICAgIGNhcm91c2VsRWxlbWVudC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGNhcm91c2VsRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBjYXJvdXNlbHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdENhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBsZXQgaXNDYXJ0SXRlbXNDYXJvdXNlbCA9IChjYXJvdXNlbEVsZW1lbnQgPT09ICQoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBjYXJvdXNlbEVsZW1lbnRbMF0uc2xpY2sgJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKHNsaWNrKXtcbiAgICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgY2Fyb3VzZWwgd2hlbiB1c2VyIGhhdmUgbW9yZSB0aGFuIDQgYWRkcmVzc2VzIGluIENoZWNrb3V0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNzAwLFxuICAgIHJvd3M6IDIsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHNsaWRlc1BlclJvdzogMixcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhcHBlbmRBcnJvd3M6IGNhcm91c2VsRWxlbWVudC5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHJvd3M6IDMsXG4gICAgICAgICAgc2xpZGVzUGVyUm93OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgdmlzaWJsZVNsaWRlckRpdiA9ICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ2Qtbm9uZScpO1xuICBpZih2aXNpYmxlU2xpZGVyRGl2ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0cyk7XG4gIH0gZWxzZSBpZiAoY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBjYXJvdXNlbCBhcnJvd3MgdmVydGljYWxseVxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgY29uc3QgaW1nU2VsZWN0b3IgPSAnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJztcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgbGV0IGFycm93VG9wVmFsdWU7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IsIGNhcm91c2VsRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoY2Fyb3VzZWxFbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH0gZWxzZSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJChpbWdTZWxlY3Rvcikub3V0ZXJIZWlnaHQoKTtcbiAgICBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoJy5zbGlkZXItY29udHJvbHMnKS5ub3QoJy5wcm9kdWN0LWdhbGxlcnknKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIG9ubHkgb24gY2FydCBpdGVtcyBjYXJvdXNlbFxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KGVsZW1lbnQpIHtcbiAgY29uc3QgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSBpbWcnLCBlbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICBjb25zdCBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQpO1xuICAkKGVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbn1cblxuZXhwb3J0IHtjYXJvdXNlbCwgcmVwbGFjZUNhcm91c2VsQXJyb3csIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCwgY3JlYXRlQWRkcmVzc0Nhcm91c2VsLCBjcmVhdGVHYWxsZXJ5RGVza3RvcH07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQ0FSVCBQQUdFIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGNvbnRhaW5lciA9ICQoJyNjYXJ0UGFnZScpO1xuY29uc3QgYm9keUNvbnRhaW5lciA9ICQoJ2JvZHknKTtcblxuY29uc3QgY2FydCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIFdoZW4gcmVsb2FkaW5nIHF1YW50aXRpZXNcbiAgLy8gRGVza3RvcFxuICAkKCcucmVsb2FkLXF0eScsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21vYmlsZScpKSB7XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTW9iaWxlXG4gICQoJy5tb2JpbGUtcXR5JywgY29udGFpbmVyKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpKTtcbiAgICBpZiAobmV3UXR5IDw9IHBhcnNlSW50KCQodGhpcykuYXR0cignbWF4JykpKSB7XG4gICAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICAgJCgnaW5wdXRbbmFtZT1cIicgKyBpbnB1dFF0eU5hbWUgKyAnXCJdJykudmFsKG5ld1F0eSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBQcmV2ZW50IGN1c3RvbWVyIHRvIGFkZCBtb3JlIHRoYW4gNSB0aW1lcyBhIHByb2R1Y3RcbiAgJCgnLnF0eScsIGNvbnRhaW5lcikub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPj0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSkpIHtcbiAgICAgICQodGhpcykudmFsKCQodGhpcykuYXR0cignbWF4JykpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQXBwbHkgY291cG9uIGNvZGVcbiAgJCgnLmNvdXBvbi1jb2RlLWJ0bicsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgY291cG9uIGNvZGVcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgY291cG9uID0gJCgnLmNvdXBvbi1jb2RlJykudmFsKCk7XG4gICAgICBpZiAoY291cG9uID09PSAnJykge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKCcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbChjb3Vwb24pO1xuICAgICAgfVxuXG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGNvdXBvbiBjb2RlIGlucHV0IGlzIGZpbGxlZCwgaGlkZSBlcnJvciBjb250YWluZXJcbiAgYm9keUNvbnRhaW5lci5vbihcImtleWRvd25cIiwgXCIuY291cG9uLWNvZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCcnKTtcbiAgfSk7XG5cbiAgaWYoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnLCBjb250YWluZXIpLmh0bWwoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmNvdXBvbi1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmNvdXBvbi1jb2RlJykudmFsKCQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoKSk7XG4gIH1cblxuICAvLyBBcHBseSBib251cyBwb2ludHNcbiAgJCgnLmJvbnVzLXBvaW50cy1idG4nLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGNvdXBvbiBjb2RlXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGJvbnVzUG9pbnRzID0gJCgnLmJvbnVzLXBvaW50cycpLnZhbCgpO1xuICAgICAgaWYgKGJvbnVzUG9pbnRzID09PSAnJykge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKGJvbnVzUG9pbnRzKTtcbiAgICAgIH1cbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5kZWxldGUtYm9udXMtcG9pbnRzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBib251cyBwb2ludHNcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCcnKTtcbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gYm9udXMgcG9pbnRzIGlucHV0IGlzIGZpbGxlZCwgaGlkZSBlcnJvciBjb250YWluZXJcbiAgYm9keUNvbnRhaW5lci5vbihcImtleWRvd25cIiwgXCIuYm9udXMtcG9pbnRzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIGlmKCQoJyNiaXRiYWctYm9udXMtcG9pbnRzIC5mb3JtLWVycm9yLW1lc3NhZ2UnLCBjb250YWluZXIpLmh0bWwoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWVycm9yJykuaHRtbCgkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuYm9udXMtcG9pbnRzJykudmFsKCQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgpKTtcbiAgfVxuXG4gIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGJ1dHRvbiBsaW5rZWQgdG8gY2hlY2tvdXQgcGFnZVxuICAkKCdhLmJ0bi10by1jaGVja291dCcsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FydDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENIRUNLT1VUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IHsgY3JlYXRlQWRkcmVzc0Nhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5cbi8vIE1haW4gZnVuY3Rpb24gdXNlZCBpbiBpbml0XG5jb25zdCBzYXZlQnV0dG9uID0gJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1pbi1hY2NvdW50Jyk7XG5jb25zdCBjYW5jZWxCdG4gPSAkKCcjY2hlY2tvdXRQYWdlIC5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnKTtcblxuY29uc3QgY2hlY2tvdXQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjb25zdCBjb250YWluZXIgPSAkKCcjY2hlY2tvdXRQYWdlJyk7XG4gIC8vIFdoZW4gdGhlIHVzZXIgd2FudHMgdG8gY2hhbmdlIGhpcyBhZGRyZXNzXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdjbGlja2VkJykgJiYgISQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGFzQ2xhc3MoJ2QtYmxvY2snKSkge1xuICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcblxuICAgICAgY2FuY2VsQnRuLnNob3coKTtcbiAgICAgIGNhbmNlbEJ0bi5wcmV2KCkuaGlkZSgpO1xuXG4gICAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2NoYW5nZScsIGNvbnRhaW5lcik7XG4gICAgICBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQWRkcmVzc0xpc3QnKSk7XG4gICAgICAvLyBDcmVhdGUgZXZlbnQgb24gYWRkcmVzcyBpdGVtIGFmdGVyIGNhcm91c2VsIGlzIG9wZW5cbiAgICAgICQoJy5jaG9vc2UtYWRkcmVzcyAuY2hvb3NlLWFkZHJlc3MtaXRlbSBhZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNob29zZUFkZHJlc3MoJCh0aGlzKSwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGFzQ2xhc3MoJ2QtYmxvY2snKSkge1xuICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnYWRkJywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gICAgLy8gV2hlbiB1c2VyIHdhbnRzIHRvIGFkZCBhIG5ldyBhZGRyZXNzIHRvIGhpcyBhY2NvdW50XG4gICQoJ2EuY2hlY2tvdXQtYWRkLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QoJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcy5jbGlja2VkJywgY29udGFpbmVyKVswXSlbMV07XG4gICAgc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgc2F2ZSBhIG5ldyBhZGRyZXNzXG4gIHNhdmVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYWRkcmVzc1R5cGUgPSAnc2hpcHBpbmcnO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzNdO1xuICAgICAgJCgnI2NoZWNrb3V0UGFnZSAuZGF0YS0nICsgYWRkcmVzc1R5cGUpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkICsgJ10nO1xuICAgICAgICBjb25zdCB0b1NhdmUgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZpZWxkTmFtZTtcbiAgICAgICAgY29uc3QgdG9SZXBsYWNlID0gJy5jaGFuZ2UtJysgYWRkcmVzc1R5cGUgKyctYWRkcmVzcyAnICsgZmllbGROYW1lO1xuICAgICAgICAkKHRvUmVwbGFjZSkudmFsKCQodG9TYXZlKS52YWwoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2hlY2tvdXRTYXZlQWRkcmVzcyh0aGlzLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiBhZGRyZXNzIHBhZ2UgbmV4dCBidXR0b25cbiAgJCgnLm1haW4tYWRkcmVzcy1mb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmFkZENsYXNzKCdsb2FkaW5nJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgY2hhbmdlc1xuICAkKCdhLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBjYW5jZWxzIHRoZSBhZGRyZXNzIGFkZFxuICAkKCdhLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICB9KTtcbn07XG5cbi8vIFdoZW4gdXNlciBjaG9zZSBhbiBhZGRyZXNzIGlzIHRoZSBhZGRyZXNzZXMgbGlzdFxuZnVuY3Rpb24gY2hvb3NlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5kYXRhLWFkZHJlc3MnLCBlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBjb25zdCBmaWVsZFNlbGVjdG9yID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZFNlbGVjdG9yO1xuICAgIGNvbnN0IGNob3NlbkFkZHJlc3NUZXh0ID0gJy5kYXRhLScrIGFkZHJlc3NUeXBlICsnLicgKyBmaWVsZE5hbWU7XG5cbiAgICBsZXQgY2hvc2VuVmFsdWUgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS50ZXh0KGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCkuc3Vic3RyaW5nKDAsIDIpO1xuICAgIH1cbiAgICAkKGZvcm1GaWVsZCkudmFsKGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgICAgaWYgKCQodGhpcykudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLmNsb3Nlc3QoJ2FkZHJlc3MnKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIGNob3NlblZhbHVlKTtcbiAgfSk7XG4gICQoJyNzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc19kaWZmZXJlbnRCaWxsaW5nQWRkcmVzcycsIGNvbnRhaW5lcikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xufVxuXG4vKiBTYXZlIGFkZHJlc3MgaW4gdXNlciBhY2NvdW50IDogUmV0dXJucyBlcnJvcnMgaW4gZm9ybSBpZiBub3QgdmFsaWQgKi9cbmZ1bmN0aW9uIGNoZWNrb3V0U2F2ZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBmb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJyk7XG4gICQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX3R5cGVcIl0nLCBmb3JtKS52YWwoYWRkcmVzc1R5cGUpO1xuICBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBmb3JtJywgY29udGFpbmVyKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBkYXRhU3VjY2Vzc0RpdiA9ICQocmVzcG9uc2UpO1xuICAgICAgY29uc3Qgbm9BZGRyZXNzID0gc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJyk7XG4gICAgICBpZihkYXRhU3VjY2Vzc0Rpdi5oYXNDbGFzcygnc2F2ZS1hZGRyZXNzLXN1Y2Nlc3MnKSkge1xuICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuXG4gICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUodGhpcywgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIC8vIElmIFVzZXIgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAgICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy4nICsgZmllbGROYW1lLCBjb250YWluZXIpO1xuICAgICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSksIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQoJy5hZGRyZXNzLWJvb2snLCBjb250YWluZXIpLmh0bWwoJCgnLmFkZHJlc3MtYm9vaycsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vQWRkcmVzcykge1xuICAgICAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5uby1hZGRyZXNzZXMtdGV4dCcsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgIHNob3dNYWluRm9ybShjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvci1tZXNzYWdlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJCh0aGlzKS5jbG9zZXN0KCdsYWJlbCcpLmF0dHIoJ2ZvcicpO1xuICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbaWQ9XCInKyBmaWVsZE5hbWUgKydcIl0nLCBjb250YWluZXIpLmFkZENsYXNzKCdpcy1pbnZhbGlkJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+PHNwYW4gY2xhc3M9XCJmb3JtLWVycm9yLW1lc3NhZ2UgZC1ibG9ja1wiPicgKyBmaWVsZEVycm9yICsgJzwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG59XG5cbi8qIEZpbGwgYWRkcmVzcyBmb3JtIGZpZWxkcyB0byBhdm9pZCBlcnJvcnMgKi9cbmZ1bmN0aW9uIGZpbGxBZGRyZXNzKGZpZWxkSWQsIGFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3Qga2VlcENhbWVsRmllbGQgPSBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdjb3VudHJ5Q29kZSddO1xuICBjb25zdCBkYXRhVG9GaWxsID0gJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmRhdGEoKTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmICgha2VlcENhbWVsRmllbGQuaW5jbHVkZXMoZmllbGROYW1lKSkge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgICQodGhpcykudmFsKGRhdGFUb0ZpbGxbZmllbGROYW1lXSk7XG4gIH0pO1xuICAkKCcjaW5BY2NvdW50X3NhdmVfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbn1cblxuLyogRmlsbCBhZGRyZXNzZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBuZXh0IGJ1dHRvbiAqL1xuZnVuY3Rpb24gZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpIHtcbiAgWydzaGlwcGluZycsICdiaWxsaW5nJ10uZm9yRWFjaCgoYWRkcmVzc1R5cGUpID0+IHtcbiAgICBjb25zdCBmaWVsZElkID0gJ3N5bGl1c19jaGVja291dF9hZGRyZXNzXycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzJztcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgJy5tYWluLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcilcbiAgfSlcbn1cblxuLyogRmlsbCBvdGhlciBhZGRyZXNzIHR5cGUgZm9ybSB3aGVuIHNhdmluZyBuZXcgYWRkcmVzcyAqL1xuZnVuY3Rpb24gZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IG90aGVyQWRkcmVzc1R5cGUgPSBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKTtcbiAgbGV0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gIGlmIChzYXZlQnV0dG9uLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgIGZpbGxPdGhlckZvcm0oYWRkcmVzc1R5cGUsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIGZpbGxBZGRyZXNzKGZpZWxkSWQsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9XG59XG5cbi8vIEZpbGwgb3RoZXIgbmV3IGFkZHJlc3MgZm9ybSBPTkxZIElGIHVzZXIgZG9uJ3QgaGF2ZSBhZGRyZXNzZXMgeWV0XG5mdW5jdGlvbiBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3QgZmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgYWRkcmVzc1R5cGU7XG4gIGNvbnN0IG90aGVyRmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmIChmaWVsZE5hbWUgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBjb25zdCBpZFRvRmlsbCA9ICcjJyArIG90aGVyRmllbGRJZCArICdfJyArIGZpZWxkTmFtZTtcbiAgICAkKGlkVG9GaWxsKS52YWwoJCh0aGlzKS52YWwoKSk7XG4gIH0pO1xufVxuXG4vLyBGaWxsIGZvcm0gYW5kIGRpdiBkYXRhIHdoZW4gc2F2ZSBuZXcgYWRkcmVzc1xuZnVuY3Rpb24gZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgY29udGFpbmVyKSB7XG4gIC8vIEdldCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gIGNvbnN0IG5ld1ZhbHVlID0gJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpO1xuXG4gIC8vIENyZWF0ZSBtYWluIGZvcm0gZmllbGQgc2VsZWN0b3JcbiAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ10nO1xuICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZm9ybUZpZWxkTmFtZTtcblxuICAvLyBSZXBsYWNlIGZpZWxkIHdpdGggdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICAkKGZpZWxkVG9SZXBsYWNlKS52YWwobmV3VmFsdWUpO1xuXG4gIC8vIFJlcGxhY2UgdGV4dCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChlbGVtZW50KS50ZXh0KG5ld1ZhbHVlKTtcbiAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICQoZWxlbWVudCkudGV4dCgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuY291bnRyeU5hbWUnLCBjb250YWluZXIpLmh0bWwoKSk7XG4gIH1cblxuICAvLyBTaG93IG9yIGhpZGUgc3RyZWV0MiBjb250YWluZXIgYWNjb3JkaW5nIHRvIHZhbHVlXG4gIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgIGlmICgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKS5odG1sKCkudHJpbSgpICE9PSAnJykge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBhZGRyZXNzIGRpdiBkYXRhXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIG5ld1ZhbHVlKTtcbn1cblxuLyogU2hvdyBNYWluIGZvcm0gd2hlbiB1c2VyIGhhdmUgbm8gYWRkcmVzc2VzICovXG5mdW5jdGlvbiBzaG93TWFpbkZvcm0oY29udGFpbmVyKSB7XG4gIC8vIEhpZGUgZGl2IG1lbnRpb25pbmcgdGhhdCB1c2UgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAkKCcubm8tYWRkcmVzcy15ZXQnLCBjb250YWluZXIpLnJlbW92ZSgpO1xuICAvLyBIaWRlIGFkZCBuZXcgYWRkcmVzcyBmb3JtXG4gICQoJy5hZGQtc2hpcHBpbmctYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybSB0aXRsZVxuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC51c2UnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC5hZGQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgLy8gU2hvdyBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBtYWluIGZvcm1cbiAgJCgnLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLm5leHQoJ2EuYnRuJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufVxuXG4vKiBIaWRlIGFkZHJlc3MgbW9kaWZpY2F0aW9uIGNvbnRhaW5lciAqL1xuZnVuY3Rpb24gaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5wcmV2KCkuc2hvdygpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICQoJyNtYWluQ29udGVudENvbnRhaW5lcicpWzBdLnNjcm9sbFRvcCA9IDA7XG59XG5cbi8qIFJlbW92ZSBlcnJvciBpbmRpY2F0b3JzIHdoZW4gc2F2ZSBhZGRyZXNzIGZvcm0gaXMgc3VibWl0dGVkICovXG5mdW5jdGlvbiBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcikge1xuICAvLyBVc2UgYWRkcmVzc1R5cGUgY2hvc2VuIHdoZW4gc2F2ZSBmb3JtIGlzIHNob3duXG4gIGxldCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVszXTtcbiAgaWYgKGFkZHJlc3NUeXBlID09PSAnbm8tYWRkcmVzc2VzJykge1xuICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHNhdmVCdXR0b25bMF0pWzRdO1xuICB9XG4gICQoJy5jaGFuZ2UtJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hhbmdlLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICctdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0LCAuc2F2ZS1hZGRyZXNzLWZvcm0gc2VsZWN0JywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmludmFsaWQtZmVlZGJhY2snLCBjb250YWluZXIpLnJlbW92ZSgpO1xufVxuXG4vKiBSZXBsYWNlIGFsbCBmb3JtIGFuZCBkaXNwbGF5ZWQgYWRkcmVzcyBkYXRhIHdoZW4gY2FuY2VsIG1vZGlmaWNhdGlvbnMgKi9cbmZ1bmN0aW9uIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9sZERhdGEgPSAkKHRoaXMpLmRhdGEoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9ICh0aGlzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pKVsxXTtcbiAgICBjb25zdCBmaWVsZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRGF0YSk7XG5cbiAgICBmaWVsZE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdjb3VudHJ5TmFtZScpIHtcbiAgICAgICAgZmllbGROYW1lID0gJ2NvdW50cnlDb2RlJ1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dFRvUmVwbGFjZSA9ICcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLicgKyBmaWVsZE5hbWU7XG4gICAgICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgICAgIC8vIFNldCBmb3JtIHdpdGggb2xkIGRhdGFcbiAgICAgICQoZmllbGRUb1JlcGxhY2UsIGNvbnRhaW5lcikudmFsKG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgaWYgKGVsZW1lbnQgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgICAgLy8gU2V0IGNob3NlbiBBZGRyZXNzIHdpdGggb2xkIGRhdGFcbiAgICAgICAgJCh0ZXh0VG9SZXBsYWNlKS50ZXh0KG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gU2hvdyBhZGQgYWRkcmVzcyBmb3JtXG5mdW5jdGlvbiBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nLCBjb250YWluZXIpLnZhbCgnJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcblxuICAvLyBIaWRlIGFsbCBzYXZlIGFkZHJlc3MgZm9ybXMgYmVmb3JlIHNob3dpbmcgdGhlIGNob3NlbiBvbmVcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAuYWRkLScgKyBhZGRyZXNzVHlwZSArICctYWRkcmVzcycsIGNvbnRhaW5lcikuc2hvdygpO1xufVxuXG4vKiBNYW5hZ2Ugd2hhdCB0eXBlIG9mIGFkZHJlc3Mgd2lsbCBiZSByZXBsYWNlIGFuZC9vciBzYXZlZCAqL1xuZnVuY3Rpb24gbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsIHNlbGVjdG9yVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgYWRkcmVzc1R5cGUgKyAnLXRpdGxlJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgLy8gQWxzbyBNYW5hZ2UgU2F2ZUJ1dHRvbiBjbGFzc1xuICBzYXZlQnV0dG9uLmFkZENsYXNzKGFkZHJlc3NUeXBlKTtcbiAgc2F2ZUJ1dHRvbi5yZW1vdmVDbGFzcyhnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTU1PTiBGVU5DVElPTlMgKi9cbi8qKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2V0IGNsYXNzIGxpc3QgZnJvbSBnaXZlbiBlbGVtZW50XG5mdW5jdGlvbiBnZXRDbGFzc0xpc3QoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbn1cblxuLy8gR2V0IGZpZWxkIG5hbWUgdG8gZmlsbCBkYXRhIGluZm8gaW4gLmNhbmNlbC1pbmZvIGRpdlxuZnVuY3Rpb24gZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IC9bQS1aXS9nbS5leGVjKGZpZWxkTmFtZSk7XG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIChmaWVsZE5hbWUuc3Vic3RyKDAsIG1hdGNoZXMuaW5kZXgpICsgJy0nICsgZmllbGROYW1lLnN1YnN0cihtYXRjaGVzLmluZGV4LCBmaWVsZE5hbWUubGVuZ3RoKSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZE5hbWU7XG59XG5cbi8vIEdldCBvdGhlciBhZGRyZXNzIHR5cGUgZnJvbSBhZGRyZXNzIHR5cGUgZ2l2ZVxuZnVuY3Rpb24gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkge1xuICByZXR1cm4gKGFkZHJlc3NUeXBlID09PSAnc2hpcHBpbmcnKSA/ICdiaWxsaW5nJyA6ICdzaGlwcGluZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrb3V0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTlRBQ1QgUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjb250YWN0UGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIEFqYXggY2FsbCB3aGVuIGNvbnRhY3QgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgJCgnI2NvbnRhY3RQYWdlIGZvcm0gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwgLm1vZGFsLWJvZHkgZGl2JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZXJyb3JzIG9mIGZvcm0gd2hlbiBzdWNjZXNzXG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXScpLnZhbCgnJykucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlICk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXSwgI2NvbnRhY3RQYWdlIFtmb3JePVwic3lsaXVzX2NvbnRhY3RfXCJdJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNikge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBlcnJvckxpc3QgPSAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJ3NwYW4nKS50b0FycmF5KCk7XG4gICAgICAgICAgZXJyb3JMaXN0LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLm91dGVyVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmNsYXNzTmFtZSAhPT0gJ2FjY2VwdENndicpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgICAgICAgICAgICAuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+JyArIGVycm9yLm91dGVyVGV4dCArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAubmV4dCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQxNykge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSAuY29udGFjdC1lcnJvcicpLmh0bWwoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbiAgLy8gQWRkIG5ldyBmaWVsZCB3aGVuIGNob3NlbiBzdWJqZWN0IGlzIFwib3RoZXJcIlxuICAkKCcjc3lsaXVzX2NvbnRhY3Rfc3ViamVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoJChlLnRhcmdldCkudmFsKCkgPT09ICdvdGhlcicpIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0Jykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogTE9HSU4gUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgbG9naW5QYWdlID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gT3BlbiByZXNldCBwYXNzd29yZCBtb2RhbFxuICAkKCcucmVzZXQtcGFzc3dvcmQtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQodGhpcykuZGF0YSgnbW9kYWxJZCcpO1xuICAgICQobW9kYWxJZCkubW9kYWwoJ3Nob3cnKTtcbiAgICAkKCcuaGVhZGVyLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSlcblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgbG9naW4tZm9ybSBleGlzdHMgaW4gcGFnZVxuICBpZigkKCcubG9naW4tZm9ybScpKSB7XG4gICAgJCgnLnN1Ym1pdC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50KS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiBjbGFzcyB2ZXJpZnktYWNjb3VudCBleGlzdHMgaW4gcGFnZVxuICBjb25zdCB2ZXJpZnlBY2NvdW50T2JqZWN0ID0gJCgnLnZlcmlmeS1hY2NvdW50Jyk7XG4gIGlmKHZlcmlmeUFjY291bnRPYmplY3QpIHtcbiAgICB2ZXJpZnlBY2NvdW50T2JqZWN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT25seSB3aGVuIHJlc2V0UGFzc3dvcmRTdWJtaXQgYnV0dG9uIGV4aXN0cyBpbiBwYWdlLCBBamF4IGNhbGwgdG8gcmVzZXQgcGFzc3dvcmRcbiAgaWYgKCQoJyNyZXNldFBhc3N3b3JkU3VibWl0JykpIHtcbiAgICAkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZycpLmFwcGVuZChyZXNwb25zZSk7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQ6bm90KC5zdWNjZXNzKScpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAkKCcubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3JzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS50ZXh0KCQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3JzIHVsIGxpJykudGV4dCgpKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyBBY3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRNb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQnKS52YWwoJycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgIH0pXG4gIH1cblxuICAvLyBDaGVjayBpZiBlbWFpbCBpcyB2YWxpZCBiZWZvcmUgc3VibWl0IHJlZ2lzdGVyIGZvcm1cbiAgJCgnYnV0dG9uLnN1Ym1pdC1yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykpO1xuICAgIGNvbnN0IGlucHV0UmVnaXN0ZXJGb3JtID0gcmVnaXN0ZXJGb3JtLmZpbmQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWwgPSBpbnB1dFJlZ2lzdGVyRm9ybS52YWwoKTtcbiAgICBjb25zdCBpbnZhbGlkU3BhbiA9IGlucHV0UmVnaXN0ZXJGb3JtLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgIGludmFsaWRTcGFuLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICBpbnB1dFJlZ2lzdGVyRm9ybS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgcmVnaXN0ZXJGb3JtLnN1Ym1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkU3Bhbi5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0uYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gZW1haWwgZmllbGQgaXMgZmlsbGVkIGFuZCBjdXN0b21lciB3YW50cyB0byBtb2RpZnkgaXRzIHZhbHVlXG4gICQoJy5yZWdpc3Rlci1mb3JtIGlucHV0LCAuaGVhZGVyLXJlZ2lzdGVyLWZvcm0gaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkgJiYgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2lzLWludmFsaWQnKSkge1xuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnZGl2JykubmV4dCgnc3BhbicpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpblBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcblxuY29uc3QgcHJpY2VDb250YWluZXJTZWxlY3RvciA9ICcjcHJvZHVjdHNGaWx0ZXJzJztcbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUgPSAnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSc7XG5cbmNvbnN0IHByaWNlTWluU2VsZWN0b3IgPSAnaW5wdXRbbmFtZT1cImNyaXRlcmlhW3ByaWNlXVtwcmljZV8xXVwiXSc7XG5jb25zdCBwcmljZU1heFNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nO1xuXG5jb25zdCBwcm9kdWN0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gTWFuYWdlIHZhcmlhbnQgbGlzdCB3aGVuIGNsaWNraW5nIGluIHNpemUgYXZhaWxhYmxlXG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGNvbnN0IHZhcmlhbnRMaXN0Q29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCdkaXYudmFyaWFudC1saXN0Jyk7XG5cbiAgICBpZihidW5kbGVJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICQoJy52YXJpYW50LW5hbWVbZGF0YS1idW5kbGUtaXRlbT1cIicgKyBidW5kbGVJdGVtICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgICQoJy5pbnZhbGlkLWZlZWRiYWNrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKCQodGhpcykuZGF0YSgnYWxtb3N0LW91dCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICQoJy5sYXN0LXByb2R1Y3QtaW4tc3RvY2snLCB2YXJpYW50TGlzdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5sYXN0LXByb2R1Y3QtaW4tc3RvY2snLCB2YXJpYW50TGlzdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgLy8gU2hvdyBvciBoaWRlIHZhcmlhbnRzIGxpc3QgaW4gcHJvZHVjdHMgY2Fyb3VzZWwgYWNjb3JkaW5nIHRvIHNjcmVlbiBzaXplXG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AgLnZhcmlhbnRzLWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCcpXG4gICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDE0NDApIHtcbiAgICAgICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLnNob3coKTtcbiAgICAgIH1cbiAgICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xuXG4gIC8vIFdoZW4gY2xpY2tpbmcgb24gYWRkIHRvIGNhcnQgYnV0dG9uID0+IFNFRSBzeWxpdXMtYWRkLXRvLWNhcnQuanNcbiAgLy8kKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL30pXG5cbiAgJCgnaW5wdXRbaWRePVwiYml0YmFnX3N5bGl1c19wcm9kdWN0X2J1bmRsZV9wbHVnaW5fYWRkX3Byb2R1Y3RfYnVuZGxlX3RvX2NhcnRfXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLmZpbmQoJ3NwYW4uaW52YWxpZC1mZWVkYmFjaycpLmFkZENsYXNzKCdpbnB1dC1jaGVja2VkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIH0pXG59O1xuXG5jb25zdCBmaWx0ZXJQcm9kdWN0cyA9IGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgY3JpdGVyaWEgPSBxdWVyeVN0cmluZy5pbmRleE9mKCdjcml0ZXJpYScpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKTtcblxuICBsZXQgcHJpY2VTbGlkZXI7XG4gIGxldCBwcmljZVNsaWRlck1vYmlsZTtcblxuICBpZiAocHJpY2VJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgcHJpY2VTbGlkZXIgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICBwcmljZVNsaWRlck1vYmlsZSA9IGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpO1xuXG4gICAgLy8gV2hlbiB1c2VyIGNoYW5nZXMgcHJpY2UgaW5wdXQgdmFsdWVcbiAgICBwcmljZUlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKGUud2hpY2ggIT09IDggJiYgIWlzTmFOKFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKXtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgICAgICBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTUFOQUdFIERFU0tUT1AgRklMVEVSU1xuICAgKi9cbiAgLy8gU2l6ZSBmaWx0ZXIgbWFuYWdlbWVudFxuICBjb25zdCBzaXplRmlsdGVySW5wdXQgPSAkKCcjc2l6ZUZpbHRlciBpbnB1dCcpO1xuICBzaXplRmlsdGVySW5wdXQuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgaWYodGhpcy5jaGVja2VkKSB7XG4gICAgICAkKHRoaXMpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCdpbnB1dFtkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIHNpemVGaWx0ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gVmFsaWRhdGUgZmlsdGVycyBvbiBkZXNrdG9wXG4gICQoJ2EudmFsaWRhdGUtZmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJGb3JtJykuc3VibWl0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNQU5BR0UgTU9CSUxFIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnQgb24gbW9iaWxlXG4gICQoJyNjcml0ZXJpYVNpemVNb2JpbGUgaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlucHV0VG9DaGVjayA9ICQoZS50YXJnZXQpLmRhdGEoJ2lkJyk7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydGluZ1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dC5pbnB1dC1zb3J0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dCcpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciAuY2hlY2ttYXJrIC5jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAkKGUudGFyZ2V0KS5uZXh0KCcuY2hlY2ttYXJrJykuZmluZCgnLmNoZWNrZWQnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICB9KTtcblxuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzXG4gICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSBidXR0b24uYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCQoJy5pbnB1dC1zb3J0aW5nOmNoZWNrZWQnKS52YWwoKSA9PT0gJ2NyZWF0ZWRBdCcpIHtcbiAgICAgICQoJy5pbnB1dC1zb3J0aW5nOmNoZWNrZWQnKS5yZW1vdmUoKTtcbiAgICAgICQoJy5pbnB1dC1zb3J0aW5nLWNyZWF0ZWRBdCcpLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtaW5saW5lLWJsb2NrJyk7XG4gICAgfVxuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBNb2JpbGUgZmlsdGVycyBiZWhhdmlvdXJcbiAgJCgnLnByb2R1Y3QtZmlsdGVycy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIHJlc2l6ZUZpbHRlck1lbnUoKTtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogR0VORVJBTCBGVU5DVElPTlNcbiAgICovXG4gIC8vIEhpZGUgcmVpbml0aWFsaXphdGlvbiBidXR0b24gd2hlbiBmaWx0ZXJzIGhhdmUgbm8gY3JpdGVyaWFcbiAgaWYgKGNyaXRlcmlhICE9PSAtMSkge1xuICAgICQoJy5yZWluaXQtZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gIH1cbiAgLy8gQWRkIGFjdGlvbiB0byBjbG9zZSBpY29uXG4gICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmRyb3Bkb3duLXRvZ2dsZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pXG59XG5cbi8qKlxuICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gd2luZG93IGlzIHJlc2l6ZWQgdG8gYXZvaWQgc2hvd2luZyBmaWx0ZXIgbW9iaWxlIG1lbnUgb24gZGVza3RvcFxuICovXG5jb25zdCByZXNpemVGaWx0ZXJNZW51ID0gZnVuY3Rpb24gcmVzaXplRmlsdGVyTW9iaWxlTWVudSgpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSAkKCcjaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyQmFubmVyID0gJCgnLmhlYWRlci1iYW5uZXInKTtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXJDb250YWluZXIuaGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSBoZWFkZXJDb250YWluZXIub3V0ZXJIZWlnaHQoKSAtIGhlYWRlckJhbm5lci5oZWlnaHQoKTtcbiAgICBjb25zdCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjZmlsdGVyU3VibWl0Jykub3V0ZXJIZWlnaHQoKSAtIDEwO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnKS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNmaWx0ZXJMaXN0JykuY3NzKCdoZWlnaHQnLCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJpY2Ugc2xpZGVyIG9uIHRheG9uIHBhZ2VzXG4gKlxuICogQHBhcmFtIHByaWNlSW5wdXRcbiAqIEBwYXJhbSBjb250YWluZXJTZWxlY3RvclxuICogQHJldHVybnMgbm9VaVNsaWRlclxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBjb250YWluZXJTZWxlY3Rvcikge1xuICBjb25zdCBwcmljZUNvbnRhaW5lciA9ICQoY29udGFpbmVyU2VsZWN0b3IpO1xuICBjb25zdCBwcmljZVJhbmdlID0gJCgnI3ByaWNlUmFuZ2UnLCBwcmljZUNvbnRhaW5lcilbMF07XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIC8vIFByZXBhcmUgc2xpZGVyIG9wdGlvbnNcbiAgY29uc3QgdGF4b25NaW5QcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21pbicpKTtcbiAgY29uc3QgdGF4b25NYXhQcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21heCcpKTtcbiAgY29uc3QgcmFuZ2VTbGlkZXJPcHRpb25zID0ge1xuICAgIHN0YXJ0OiBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXSxcblxuICAgIHJhbmdlOiB7XG4gICAgICAnbWluJzogW3RheG9uTWluUHJpY2VdLFxuICAgICAgJ21heCc6IFt0YXhvbk1heFByaWNlXVxuICAgIH0sXG4gICAgc3RlcDogMSxcbiAgICBjb25uZWN0OiB0cnVlLFxuICAgIGZvcm1hdDoge1xuICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZnJvbTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJlaGF2aW91cjogJ3RhcCcsXG4gICAgdG9vbHRpcHM6IGZhbHNlXG4gIH07XG5cbiAgY29uc3Qgc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgc2xpZGVyLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgcHJpY2VNaW4udmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgcHJpY2VNYXgudmFsKHBhcnNlSW50KG5ld1ZhbHVlWzFdKSk7XG4gIH0pO1xuXG4gIHJldHVybiBzbGlkZXI7XG59XG5cbmZ1bmN0aW9uIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCBwcmljZUNvbnRhaW5lcikge1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld1ZhbHVlID0gW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV07XG4gIHByaWNlU2xpZGVyLnNldChuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgcHJpY2UgdmFsdWVzIGJlZm9yZSBzZW5kIGZvcm1cbiAqIEBwYXJhbSBwcmljZVNsaWRlck9iamVjdFxuICogQHBhcmFtIHByaWNlQ29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck9iamVjdCwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0JykuZmlyc3QoKTtcbiAgbGV0IHByaWNlTWluVmFsdWUgPSBwcmljZU1pbi52YWwoKTtcbiAgbGV0IHByaWNlTWF4VmFsdWUgPSBwcmljZU1heC52YWwoKTtcbiAgaWYgKHByaWNlTWluLnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIGlmIChwcmljZU1pbi52YWwoKSA+IHByaWNlSW5wdXQuZGF0YSgnbWF4JykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKTtcbiAgfVxuICBwcmljZU1pbi52YWwocHJpY2VNaW5WYWx1ZSk7XG4gIGlmIChwcmljZU1heC52YWwoKSA+IHByaWNlSW5wdXQuZGF0YSgnbWF4JykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKTtcbiAgfVxuICBpZiAocHJpY2VNYXgudmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgcHJpY2VNYXgudmFsKHByaWNlTWF4VmFsdWUpO1xuICBwcmljZVNsaWRlck9iamVjdC5zZXQoW3ByaWNlTWluVmFsdWUsIHByaWNlTWF4VmFsdWVdKTtcbn1cblxuZXhwb3J0IHsgcHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnUgfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogU0hBUkUgUFJPRFVDVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3Qgc2hhcmVQcm9kdWN0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhcmVQcm9kdWN0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zIH0gZnJvbSAnLi9zeWxpdXMtY2FydC1jb21tb24nO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG4gIGxldCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnZm9ybScpO1xuXG4gICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgIGNvbnN0IHNlbGVjdGVkU2l6ZSA9ICQoJ2lucHV0W25hbWVePVwiJyArICQoYWRkVG9DYXJ0Rm9ybSkuZGF0YSgnbmFtZVRvQ2hlY2snKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aDtcbiAgICBjb25zdCBidW5kbGVJdGVtc0NvdW50ID0gJCgnZGl2LmJ1bmRsZS1pdGVtJykubGVuZ3RoO1xuICAgIGlmKHNlbGVjdGVkU2l6ZSA+IDAgJiYgc2VsZWN0ZWRTaXplIDwgYnVuZGxlSXRlbXNDb3VudCApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3Q6bm90KC5pbnB1dC1jaGVja2VkKScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaXplID09PSAwKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcblxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2FkYWJsZScsICdsb2FkaW5nJyk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcbiAgICAgIHJlcXVlc3QudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSAkLnBhcnNlSFRNTChyZXNwb25zZS5kYXRhKVswXTtcbiAgICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LWNhcnQtaXRlbXMnKVswXS5pbm5lckhUTUwpLnNjcm9sbFRvcCgwKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJy5jYXJ0LWNvdW50JykuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY291bnQtY2FydC1pdGVtcycpWzBdLmlubmVySFRNTCk7XG4gICAgICAgICQoJyNoZWFkZXJDYXJ0TmV3SXRlbScpLmh0bWwoJChyZXNwb25zZURhdGEpLmZpbmQoJy5hamF4LW5ldy1pdGVtJylbMF0uaW5uZXJIVE1MKTtcbiAgICAgICAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuIC5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLmNhcnQtc3VidG90YWwnKS5yZW1vdmVDbGFzcygnZC1mbGV4JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcjY2FydEFjdGlvbnMgLmNhcnQtc3VidG90YWwgc3BhbicpLmxhc3QoKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LXN1YnRvdGFsJylbMF0uaW5uZXJIVE1MKTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJydcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52YWxpZC1mZWVkYmFjaycpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JFbCkge1xuICAgICAgICAgICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5wcm9kdWN0X2lkID4gMCkge1xuICAgICAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXVtkYXRhLXByb2R1Y3QtaWQ9XCInKyBlcnJvci5yZXNwb25zZS5kYXRhLnByb2R1Y3RfaWQgKydcIl0nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdW2RhdGEtYnVuZGxlLWVycm9yXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gKGVycm9yLnJlc3BvbnNlLmRhdGEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4vc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNVcGRhdGVRdWFudGl0eSBmcm9tICcuL3N5bGl1cy11cGRhdGUtcXVhbnRpdHknO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4vc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuXG5jb25zdCBjYXJ0V2lkZ2V0Q29udGFpbmVyID0gJCgnI2hlYWRlckNhcnRJdGVtcycpO1xuY29uc3QgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucyA9IGZ1bmN0aW9uIGRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCkge1xuICAvLyBBZnRlciBEb20gcmVwbGFjZW1lbnQsIHNldCBhY3Rpb25zIGluIGNhcnQgd2lkZ2V0IGFnYWluXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVsb2FkLXF0eS1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNVcGRhdGVRdWFudGl0eShlbCkpO1xuXG4gICQoJy5hamF4LXF0eScsIGNhcnRXaWRnZXRDb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgJCgnLnJlbG9hZC1xdHkuYWpheCcpLmF0dHIoJ2RhdGEtanMtdXBkYXRlLXF0eS12YWx1ZScsICQodGhpcykudmFsKCkpO1xuICAgIGlmIChwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA+PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS5hdHRyKCdtYXgnKSk7XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zID0gZnVuY3Rpb24gdXBkYXRlQ2FydFdpZGdldChyZXNwb25zZSkge1xuICBjb25zdCByZXNwb25zZURhdGEgPSAkLnBhcnNlSFRNTChyZXNwb25zZS5kYXRhKVswXTtcbiAgY2FydFdpZGdldENvbnRhaW5lci5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKS5zY3JvbGxUb3AoMCkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLmNhcnQtY291bnQnKS5odG1sKCQocmVzcG9uc2VEYXRhKS5maW5kKCcuYWpheC1jb3VudC1jYXJ0LWl0ZW1zJylbMF0uaW5uZXJIVE1MKTtcbiAgJCgnI2NhcnRBY3Rpb25zIC5jYXJ0LXN1YnRvdGFsIHNwYW4nKS5sYXN0KCkuaHRtbCgkKHJlc3BvbnNlRGF0YSkuZmluZCgnLmFqYXgtY2FydC1zdWJ0b3RhbCcpWzBdLmlubmVySFRNTCk7XG59XG5cbmNvbnN0IGFkZFRvQ2FydEZ1bmN0aW9ucyA9IGZ1bmN0aW9uIGFkZFRvQ2FydCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcbn1cblxuZXhwb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucywgYWRkVG9DYXJ0RnVuY3Rpb25zIH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zLCB1cGRhdGVDYXJ0V2lkZ2V0RnVuY3Rpb25zIH0gZnJvbSAnLi9zeWxpdXMtY2FydC1jb21tb24nO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zY3JvbGxUb3AoMCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlZGlyZWN0VXJsICE9PSB1bmRlZmluZWQgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvZHVjdC1hamF4JykpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgYWZ0ZXJEb21SZXBsYWNlbWVudEZ1bmN0aW9ucywgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyB9IGZyb20gJy4vc3lsaXVzLWNhcnQtY29tbW9uJztcblxuY29uc3QgU3lsaXVzVXBkYXRlUXVhbnRpdHkgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy11cGRhdGUtcXR5LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy11cGRhdGUtcXR5LWNzcmYtdG9rZW4nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAkKCcjY2FydEFjdGlvbnMgLnF1YW50aXR5LWVycm9yJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKVxuICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtdXBkYXRlLXF0eS12YWx1ZScpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwge30seyBkYXRhOiB7X2NzcmZfdG9rZW46IGNzcmZUb2tlbiwgcXVhbnRpdHk6IG5ld1F1YW50aXR5IH19ICk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmFkZENsYXNzKCdsb2FkaW5nJykuc2Nyb2xsVG9wKDApO1xuXG4gICAgcmVxdWVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdXBkYXRlQ2FydFdpZGdldEZ1bmN0aW9ucyhyZXNwb25zZSk7XG4gICAgICBhZnRlckRvbVJlcGxhY2VtZW50RnVuY3Rpb25zKCk7XG5cbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICQoJyNjYXJ0QWN0aW9ucyAucXVhbnRpdHktZXJyb3InKS5hZGRDbGFzcygnZC1ibG9jaycpLmZpbmQoJy5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKChlcnJvci5yZXNwb25zZS5kYXRhKS50b1N0cmluZygpKS5jbG9zZXN0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNVcGRhdGVRdWFudGl0eTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==