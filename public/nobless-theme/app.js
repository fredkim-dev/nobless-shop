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

/***/ "./themes/BootstrapTheme/assets/js/sylius-province-field.js":
/*!******************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-province-field.js ***!
  \******************************************************************/
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
const getProvinceInputValue = function getProvinceInputValue(valueSelector) {
  const val = valueSelector ? valueSelector.value : null;
  return !val || val == undefined ? '' : `value="${val}"`;
};

const SyliusProvinceField = function SyliusProvinceField() {
  const countrySelect = document.querySelectorAll('select[name$="[countryCode]"]');
  const changeEvent = new Event('change');
  countrySelect.forEach(countrySelectItem => {
    countrySelectItem.addEventListener('change', event => {
      const select = event.currentTarget;
      const provinceContainer = select.closest('.form-group').nextElementSibling;
      const provinceSelectFieldName = select.getAttribute('name').replace('country', 'province');
      const provinceInputFieldName = select.getAttribute('name').replace('countryCode', 'provinceName');
      const provinceSelectFieldId = select.getAttribute('id').replace('country', 'province');
      const provinceInputFieldId = select.getAttribute('id').replace('countryCode', 'provinceName');

      if (select.value === '' || select.value == undefined) {
        provinceContainer.innerHTML = '';
        return;
      }

      provinceContainer.setAttribute('data-loading', '');

      _axios2.default.get(provinceContainer.getAttribute('data-url'), {
        params: {
          countryCode: select.value
        }
      }).then(response => {
        if (!response.data.content) {
          provinceContainer.removeAttribute('data-loading');
          provinceContainer.innerHTML = '';
        } else if (response.data.content.indexOf('select') !== -1) {
          const provinceSelectValue = getProvinceInputValue(provinceContainer.querySelector('select > option[selected$="selected"]'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', `name="${provinceSelectFieldName}"${provinceSelectValue}`).replace('id="sylius_address_province"', `id="${provinceSelectFieldId}"`).replace('option value="" selected="selected"', 'option value=""').replace(`option ${provinceSelectValue}`, `option ${provinceSelectValue}" selected="selected"`);
          provinceContainer.querySelector('select').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        } else {
          const provinceInputValue = getProvinceInputValue(provinceContainer.querySelector('input'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', `name="${provinceInputFieldName}"${provinceInputValue}`).replace('id="sylius_address_province"', `id="${provinceInputFieldId}"`);
          provinceContainer.querySelector('input').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        }
      });
    });

    if (countrySelectItem.value !== '') {
      countrySelectItem.dispatchEvent(changeEvent);
    }
  });
};

exports.default = SyliusProvinceField;

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

  shareFunctions();
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

var _syliusProvinceField = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-province-field */ "./themes/BootstrapTheme/assets/js/sylius-province-field.js");

var _syliusProvinceField2 = _interopRequireDefault(_syliusProvinceField);

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

  (0, _syliusProvinceField2.default)(); // Address book
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
      breakpoint: 992,
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

  $('.mobile-qty', container).on('change', function () {
    const newQty = $(this).val();
    const inputQtyName = $(this).data('input-qty');
    $('input[name="' + inputQtyName + '"]').val(newQty);
  }); // Prevent customer to add more than 7 times a product

  $('.qty', container).on('change', function (e) {
    if ($(this).val() >= $(this).attr('max')) {
      $(this).val($(this).attr('max'));
      const itemId = $(this).data('item-id');
      $('.qty-max-in-cart-reached-' + itemId).removeClass('d-none');
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

    if (bundleItem !== undefined) {
      $('.variant-name[data-bundle-item="' + bundleItem + '"]').removeClass('variant-selected');
    } else {
      $('.variant-list .variant-name').removeClass('variant-selected');
    }

    $('.variant-list .invalid-feedback').removeClass('d-block').addClass('d-none');

    if ($(this).data('almost-out') !== undefined) {
      $('.last-product-in-stock').removeClass('d-none').addClass('d-block');
    } else {
      $('.last-product-in-stock').removeClass('d-block').addClass('d-none');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnJlc2NvL2pzL2ZyZXNjby5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2luZGV4Qm9vdHN0cmFwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2FydC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY29udGFjdC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2xvZ2luLW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvcHJvZHVjdC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3NoYXJlLXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBZGRUb0NhcnQiLCJlbCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVxdWVzdCIsImF4aW9zIiwicG9zdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmb3JFYWNoIiwibWVzc2FnZSIsImVycm9ycyIsImlubmVySFRNTCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJ1bmRlZmluZWQiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50Iiwic2VsZWN0IiwiY3VycmVudFRhcmdldCIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsIm5leHRFbGVtZW50U2libGluZyIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicmVwbGFjZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImluZGV4T2YiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIlN5bGl1c1JhdGluZyIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsIm9uUmF0ZSIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJTeWxpdXNUb2dnbGUiLCJ0cmlnZ2VyIiwidG9nZ2xlIiwidG9nZ2xlRWxlbWVudCIsImpzVG9nZ2xlIiwiY2hlY2tlZCIsInN0eWxlIiwiZGlzcGxheSIsIlN5bGl1c1ZhcmlhbnRJbWFnZXMiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwiZGVmYXVsdEltYWdlTGluayIsImRlZmF1bHRJbWFnZVNyYyIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvbiIsIm9yaWdpbmFsRXZlbnQiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJGaXQiLCJ3aXRoaW4iLCJhcmd1bWVudHMiLCJzIiwibiIsIm8iLCJhIiwiaCIsInIiLCJkIiwiTWF0aCIsIm1pbiIsIm1heCIsImVhc2luZyIsImZyZXNjb0Vhc2VJbkN1YmljIiwiZnJlc2NvRWFzZUluU2luZSIsImNvcyIsIlBJIiwiZnJlc2NvRWFzZU91dFNpbmUiLCJzaW4iLCJTdXBwb3J0IiwiTyIsIlAiLCJzcGxpdCIsImNhbnZhcyIsImJhIiwiZ2V0Q29udGV4dCIsImNzcyIsImFuaW1hdGlvbiIsIlMiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJzdWJzdHIiLCJkZXRlY3RNb2JpbGVUb3VjaCIsIm1vYmlsZVRvdWNoIiwidGVzdCIsInBsYXRmb3JtIiwiSW1hZ2VSZWFkeSIsImluaXRpYWxpemUiLCJhcHBseSIsImNhbGwiLCJUaW1lcnMiLCJnZXRVUklEYXRhIiwidHlwZSIsImVhY2giLCJUeXBlcyIsImRldGVjdEV4dGVuc2lvbiIsInRvTG93ZXJDYXNlIiwic3VwcG9ydHMiLCJuYXR1cmFsV2lkdGgiLCJJbWFnZSIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJpc0xvYWRlZCIsIm9wdGlvbnMiLCJtZXRob2QiLCJwb2xsRmFsbGJhY2tBZnRlciIsImNvbXBsZXRlIiwic2V0VGltZW91dCIsInByb3h5Iiwic3VjY2VzcyIsImludGVydmFscyIsIl9pcG9zIiwiX3RpbWUiLCJfZGVsYXkiLCJwb2xsIiwiZmFsbGJhY2siLCJfcG9sbGluZyIsIl91c2VkUG9sbEZhbGxiYWNrIiwiX2ZhbGxiYWNrSW1nIiwibmF0dXJhbEhlaWdodCIsIm9uZXJyb3IiLCJzcmMiLCJhYm9ydCIsImNsZWFyVGltZW91dCIsIl9jYWxsZWRTdWNjZXNzIiwiX2NhbGxlZEVycm9yIiwiX3RpbWVycyIsInNldCIsImNsZWFyIiwiY2xlYXJBbGwiLCJUeXBlIiwiaXNWaWRlbyIsImltYWdlIiwiZXh0ZW5zaW9ucyIsImRldGVjdCIsImluQXJyYXkiLCJleHRlbnNpb24iLCJ2aW1lbyIsImlkIiwieW91dHViZSIsIlZpbWVvVGh1bWJuYWlsIiwibG9hZCIsInByb3RvY29sIiwiX3hociIsImdldEpTT04iLCJ0aHVtYm5haWxfdXJsIiwiY2FjaGUiLCJwdXNoIiwiVmltZW9SZWFkeSIsImNhbGxiYWNrIiwiZGltZW5zaW9ucyIsIk9wdGlvbnMiLCJkZWZhdWx0cyIsImVmZmVjdHMiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsImNsb3NlIiwicHJlbG9hZCIsInBvc2l0aW9uIiwic2tpbiIsInNwaW5uZXJEZWxheSIsInN5bmMiLCJ1aSIsInVpRGVsYXkiLCJhdXRvcGxheSIsImFwaSIsInRpdGxlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJjb250cm9scyIsImVuYWJsZWpzYXBpIiwiaGQiLCJpdl9sb2FkX3BvbGljeSIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwidnEiLCJpbml0aWFsVHlwZU9wdGlvbnMiLCJjcmVhdGUiLCJ4IiwieSIsIm92ZXJsYXAiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIk92ZXJsYXkiLCJidWlsZCIsInZpc2libGUiLCJhZGRDbGFzcyIsIlBhZ2VzIiwicGFnZSIsInZpZXciLCJXaW5kb3ciLCJzZXRTa2luIiwicmVtb3ZlQ2xhc3MiLCJhdHRhY2giLCJib2R5IiwiZGV0YWNoIiwic3RvcCIsImZhZGVUbyIsImZhZGVPdXQiLCJnZXRTY3JvbGxEaW1lbnNpb25zIiwicXVldWVzIiwicGFnZXMiLCJfdHJhY2tpbmciLCJfZmlyc3QiLCJ0aW1lcnMiLCJfYm94IiwiX3BhZ2VzIiwiX3RodW1ibmFpbHMiLCJUaHVtYm5haWxzIiwiU3Bpbm5lciIsIlVJIiwiX2F0dGFjaGVkIiwiX3NraW4iLCJzZXRTaG93aW5nVHlwZSIsIl9zaG93aW5nVHlwZSIsInN0YXJ0T2JzZXJ2aW5nUmVzaXplIiwiX29uV2luZG93UmVzaXplSGFuZGxlciIsIl9vbldpbmRvd1Jlc2l6ZSIsInN0b3BPYnNlcnZpbmdSZXNpemUiLCJvZmYiLCJfb25TY3JvbGwiLCJhZGp1c3RUb1Njcm9sbCIsImZpdFRvVmlld3BvcnQiLCJ1cGRhdGVCb3hEaW1lbnNpb25zIiwiZml0VG9Cb3giLCJ1cGRhdGUiLCJhZGp1c3RQcmV2TmV4dCIsImNlbnRlciIsInRvcCIsInNjcm9sbFRvcCIsImdldEJveERpbWVuc2lvbnMiLCJfYm94RGltZW5zaW9ucyIsImdldERpbWVuc2lvbnMiLCJfb3JpZW50YXRpb24iLCJfYm94UG9zaXRpb24iLCJvcGVuaW5nIiwiX3Nob3ciLCJxdWV1ZSIsImRpc2FibGUiLCJLZXlib2FyZCIsIl9oaWRlIiwiX3Jlc2V0IiwicmVtb3ZlQWxsIiwiX3Bvc2l0aW9uIiwiYWZ0ZXJIaWRlIiwiY2xvc2luZyIsInZpZXdzIiwic2V0UG9zaXRpb24iLCJzdG9wSGlkZVF1ZXVlIiwicmVzZXQiLCJtYXlQcmV2aW91cyIsInByZXZpb3VzIiwiZ2V0U3Vycm91bmRpbmdJbmRleGVzIiwibWF5TmV4dCIsIm5leHQiLCJlbmFibGVkIiwia2V5Q29kZSIsImVuYWJsZSIsIl9vbktleURvd25IYW5kbGVyIiwib25LZXlEb3duIiwiX29uS2V5VXBIYW5kbGVyIiwib25LZXlVcCIsImdldEtleUJ5S2V5Q29kZSIsIlBhZ2UiLCJMYyIsIk1jIiwiTmMiLCJPYyIsInVpZCIsIl90b3RhbCIsIl9mdWxsQ2xpY2siLCJfdmlzaWJsZSIsInNob3doaWRlIiwiX2NyZWF0ZWQiLCJvcGFjaXR5IiwiY2FwdGlvbiIsImluZm8iLCJjbG9uZSIsImluZm9QYWRkZXIiLCJwb3MiLCJodG1sIiwiYmFja2dyb3VuZCIsImF0dHIiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiZyIsIl9pbmZvSGVpZ2h0IiwiX3BhZGRpbmciLCJfYmFja2dyb3VuZERpbWVuc2lvbnMiLCJib3R0b20iLCJnZXRYWVAiLCJyZW1vdmVBdHRyIiwiZmluZCIsImdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAiLCJnZXRMb2FkaW5nQ291bnQiLCJoYW5kbGVUcmFja2luZyIsInNldFhZIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZVBvc2l0aW9ucyIsIl90cmFja2luZ190aW1lciIsImNsZWFyVHJhY2tpbmdUaW1lciIsInN0YXJ0VHJhY2tpbmciLCJfaGFuZGxlVHJhY2tpbmciLCJzdG9wVHJhY2tpbmciLCJzZXRUcmFja2luZyIsImlzVHJhY2tpbmciLCJjbGVhclRyYWNraW5nIiwiZ3JlcCIsIl94eSIsInNldFhZUCIsIl94eXAiLCJWaWV3Iiwib2JqZWN0IiwiZ3JvdXAiLCJldmFsIiwic3VwcG9ydGVkIiwidXBkYXRlRGltZW5zaW9ucyIsIl9kaW1lbnNpb25zIiwiX0ZyZXNjbyIsIl9kaXNhYmxlZCIsIl9mYWxsYmFjayIsInN0YXJ0RGVsZWdhdGluZyIsIl9kZWxlZ2F0ZUhhbmRsZXIiLCJkZWxlZ2F0ZSIsIl9zZXRDbGlja1hZSGFuZGxlciIsInNldENsaWNrWFkiLCJzdG9wRGVsZWdhdGluZyIsInNob3dGYWxsYmFjayIsIm9iamVjdF90eXBlIiwiX2RnbyIsImdyb3VwT3B0aW9ucyIsImVsZW1lbnRzIiwiZmlsdGVyIiwiZ3JvdXBFeHRlbmQiLCJmaXJzdFVJIiwicG9zaXRpb25JbkFQRyIsInNldERlZmF1bHRTa2luIiwiX3ZhcnMiLCJ0aHVtYm5haWxGcmFtZSIsInN0YXJ0T2JzZXJ2aW5nIiwid3JhcHBlciIsIl9zbGlkZXIiLCJfcHJldmlvdXMiLCJfcHJldmlvdXNfYnV0dG9uIiwiX3RodW1icyIsIl9zbGlkZSIsIl9uZXh0IiwiX25leHRfYnV0dG9uIiwic2V0QWN0aXZlIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJzZXRPcmllbnRhdGlvbiIsIl9kaXNhYmxlZEdyb3VwIiwiVGh1bWJuYWlsIiwiX3BhZ2UiLCJkaXNhYmxlZCIsInVwZGF0ZVZhcnMiLCJ3IiwicGFkZGluZ1RvcCIsInNpZGVzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYiIsImsiLCJDIiwiVyIsIk0iLCJUIiwiZmxvb3IiLCJJIiwiaXBwIiwicm91bmQiLCJfbW9kZSIsImNlaWwiLCJ0aHVtYnMiLCJyZXNpemUiLCJtb3ZlVG8iLCJtb3ZlVG9QYWdlIiwiYW5pbWF0ZSIsImxvYWRDdXJyZW50UGFnZSIsImFjdGl2YXRlIiwicmVmcmVzaCIsInByZUJ1aWxkIiwidGh1bWJuYWlsV3JhcHBlciIsImljb24iLCJyZWFkeSIsInZpbWVvVGh1bWJuYWlsIiwiX2xvYWRpbmciLCJfcmVtb3ZlZCIsIl9jbGVhckRlbGF5IiwiX2xvYWRlZCIsIl91cmwiLCJfbG9hZCIsIl9lcnJvciIsImZhZGVJblNwaW5uZXIiLCJfbW9kZXMiLCJfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yIiwiX2VuYWJsZWQiLCJmdWxsY2xpY2siLCJfc2Nyb2xsTGVmdCIsIl9jbG9zZSIsIl9vbk1vdXNlTW92ZSIsInVuYmluZCIsIl94IiwiX3kiLCJyZXNldFByZXZOZXh0IiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlVXBIYW5kbGVyIiwiX29uTW91c2VVcCIsIl9zaG93SGFuZGxlciIsIl9oaWRlSGFuZGxlciIsIl9tb3VzZW1vdmVIYW5kbGVyIiwiX2hvdmVyaW5nU2lkZUJ1dHRvbiIsInN0YXJ0VGltZXIiLCJfb25Nb3VzZU1vdmVIYW5kbGVyIiwiX29uTW91c2VMZWF2ZUhhbmRsZXIiLCJfb25Nb3VzZUVudGVySGFuZGxlciIsIl9vbk1vdXNlRW50ZXIiLCJfb25TaWRlTW91c2VFbnRlckhhbmRsZXIiLCJfb25TaWRlTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciIsIl9vblNpZGVNb3VzZUxlYXZlIiwiX29uU2Nyb2xsSGFuZGxlciIsInNjcm9sbExlZnQiLCJfZ2V0RXZlbnRTaWRlIiwiX2hvdmVyaW5nU2lkZSIsIl9tYXlDbGlja0hvdmVyaW5nU2lkZSIsIndoaWNoIiwiY2xlYXJUaW1lciIsImluc2lkZSIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIiLCJfZGVsZWdhdGVPdmVybGF5Q2xvc2UiLCJvdXRzaWRlIiwicmVzaXplTWFpbkNvbnRhaW5lciIsImZvb3RlckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJqUXVlcnkiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJoZWFkZXJPdXRlckhlaWdodCIsInByb2R1Y3RDb250YWluZXJIZWlnaHQiLCJyZXNpemVNZW51IiwiaGVhZGVySGVpZ2h0Iiwib2ZmY2FudmFzX2lkIiwiZGl2VG9PcGVuIiwib3JkZXJzR3JpZEZ1bmN0aW9ucyIsInByZXYiLCJzaGFyZUZ1bmN0aW9ucyIsInRvb2x0aXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94IiwiZWxlbSIsImNhcm91c2VsIiwibWFpbkZ1bmN0aW9ucyIsImNyZWF0ZUNhcm91c2VsIiwiY3JlYXRlUHJvZHVjdENhcm91c2VsIiwiY2Fyb3VzZWxFbGVtZW50IiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXBwZW5kQXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzbGljayIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiaXNDYXJ0SXRlbXNDYXJvdXNlbCIsIm1vYmlsZUZpcnN0IiwicmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0IiwidW5zbGlja2VkIiwiY3JlYXRlQWRkcmVzc0Nhcm91c2VsIiwib3B0cyIsInJvd3MiLCJzbGlkZXNQZXJSb3ciLCJhZGFwdGl2ZUhlaWdodCIsInZpc2libGVTbGlkZXJEaXYiLCJjcmVhdGVHYWxsZXJ5RGVza3RvcCIsImltYWdlcyIsImluZGV4IiwiaGVpZ2h0Q29udGVudCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImltZ1NlbGVjdG9yIiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImJvZHlDb250YWluZXIiLCJjYXJ0IiwibmV3UXR5IiwiaW5wdXRRdHlOYW1lIiwiaXRlbUlkIiwiY291cG9uIiwiYm9udXNQb2ludHMiLCJzYXZlQnV0dG9uIiwiY2FuY2VsQnRuIiwiY2hlY2tvdXQiLCJhZGRyZXNzVHlwZSIsImdldENsYXNzTGlzdCIsIm1hbmFnZUFkZHJlc3NUeXBlIiwiY2hvb3NlQWRkcmVzcyIsInNob3dBZGRGb3JtIiwiZmllbGQiLCJmaWVsZE5hbWUiLCJ0b1NhdmUiLCJ0b1JlcGxhY2UiLCJjaGVja291dFNhdmVBZGRyZXNzIiwiZmlsbEFsbEFkZHJlc3NlcyIsInN1Ym1pdCIsImhpZGVDaGFuZ2VBZGRyZXNzIiwiaGlkZVNhdmVBZGRyZXNzRm9ybSIsImNhbmNlbENoYW5nZUFkZHJlc3MiLCJmaWVsZFNlbGVjdG9yIiwiZm9ybUZpZWxkIiwiY2hvc2VuQWRkcmVzc1RleHQiLCJjaG9zZW5WYWx1ZSIsInRleHQiLCJzdWJzdHJpbmciLCJ0cmltIiwiZ2V0RGF0YUZpZWxkTmFtZSIsInByb3AiLCJmaWxsT3RoZXJBZGRyZXNzIiwiYWpheCIsInNlcmlhbGl6ZSIsImRhdGFTdWNjZXNzRGl2Iiwibm9BZGRyZXNzIiwiZmlsbERhdGFBZnRlclNhdmUiLCJnZXRPdGhlckFkZHJlc3NUeXBlIiwic2hvd01haW5Gb3JtIiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0IiwiZmllbGRFcnJvciIsImFmdGVyIiwiZmlsbEFkZHJlc3MiLCJmaWVsZElkIiwia2VlcENhbWVsRmllbGQiLCJkYXRhVG9GaWxsIiwicmVnZXgiLCJpbmNsdWRlcyIsIm90aGVyQWRkcmVzc1R5cGUiLCJmaWxsT3RoZXJGb3JtIiwib3RoZXJGaWVsZElkIiwiaWRUb0ZpbGwiLCJuZXdWYWx1ZSIsImZvcm1GaWVsZE5hbWUiLCJmaWVsZFRvUmVwbGFjZSIsIm9sZERhdGEiLCJjbGFzc05hbWUiLCJmaWVsZE5hbWVzIiwia2V5cyIsInRleHRUb1JlcGxhY2UiLCJzZWxlY3RvclR5cGUiLCJtYXRjaGVzIiwiY29udGFjdFBhZ2UiLCJtb2RhbCIsInN0YXR1cyIsImVycm9yTGlzdCIsInRvQXJyYXkiLCJvdXRlclRleHQiLCJsb2dpblBhZ2UiLCJtb2RhbElkIiwiZm9ybUVsZW1lbnQiLCJ2ZXJpZnlBY2NvdW50T2JqZWN0IiwicmVnaXN0ZXJGb3JtIiwiaW5wdXRSZWdpc3RlckZvcm0iLCJpbnZhbGlkU3BhbiIsInByaWNlQ29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlIiwicHJpY2VNaW5TZWxlY3RvciIsInByaWNlTWF4U2VsZWN0b3IiLCJwcm9kdWN0IiwiYnVuZGxlSXRlbSIsImFkZFRvQ2FydEZvcm0iLCJzZWxlY3RlZFNpemUiLCJidW5kbGVJdGVtc0NvdW50IiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxL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YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhUXVlc3Rpb25DaXJjbGUsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlLmVycm9ycztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2FjY291bnQtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYmFjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL25leHQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWZyLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1kZS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24taXQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVzLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JlbG9hZC5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbi8vIEdFTkVSQUwgRlVOQ1RJT05TXG5pbXBvcnQgeyBjYXJvdXNlbCwgcmVwbGFjZUNhcm91c2VsQXJyb3csIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCwgY3JlYXRlR2FsbGVyeURlc2t0b3AgfSBmcm9tICcuL2pzL2Nhcm91c2VsLmpzJztcbmltcG9ydCBjaGVja291dCBmcm9tICcuL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHtwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudX0gZnJvbSAnLi9qcy9wcm9kdWN0LW5vYmxlc3MnO1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9qcy9jYXJ0LW5vYmxlc3MuanMnO1xuaW1wb3J0IHNoYXJlUHJvZHVjdCBmcm9tICcuL2pzL3NoYXJlLXByb2R1Y3QuanMnO1xuaW1wb3J0IGxvZ2luUGFnZSBmcm9tICcuL2pzL2xvZ2luLW5vYmxlc3MuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vanMvY29udGFjdC1ub2JsZXNzJztcbi8vIE1FTlUgRlVOQ1RJT05TXG4vLyBPUkRFUlMgR1JJRCBGVU5DVElPTlNcblxuXG4vKipcbiAqIFJlc2l6ZSBmdW5jdGlvbiB0byBrZWVwIGFsbCB0aGUgbWFpbi1jb250ZW50IHZpc2libGVcbiAqL1xuZnVuY3Rpb24gcmVzaXplTWFpbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCI7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAvKiQoJyNtYWluQ29udGVudENvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Ki9cblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKVxuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyVGF4b25zJykuaGlkZSgpO1xuICAkKCcjbmF2YmFyQWNjb3VudExpbmtzJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHJlc2l6ZU1lbnUoJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKSk7XG4gIHJlc2l6ZUZpbHRlck1lbnUoKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTlxuICAkKCcuZHJvcGRvd24tbWVudScpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgc2hhcmVQcm9kdWN0KCk7XG4gIHByb2R1Y3QoKTtcbiAgZmlsdGVyUHJvZHVjdHMoKTtcbiAgLy8gTWVudSBGdW5jdGlvbnNcbiAgbWVnYW1lbnVGdW5jdGlvbnMoKTtcbiAgbWVudUljb25lc0Z1bmN0aW9ucygpO1xuXG4gIG9yZGVyc0dyaWRGdW5jdGlvbnMoKTtcbiAgbG9naW5QYWdlKCk7XG4gIGNhcnQoKTtcbiAgY2hlY2tvdXQoKTtcblxuICBjb250YWN0UGFnZSgpO1xuXG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHJlcGxhY2VDYXJvdXNlbEFycm93KCk7XG4gIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAvKmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gIH0qL1xuICAvLyBTaG93IG1lbnUgYWZ0ZXIgcGFnZSBpcyBsb2FkZWRcbiAgJCgnLm1vYmlsZS1vZmZjYW52YXMnKS5zaG93KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5zaG93KCk7XG59XG5cbmV4cG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9mb250YXdlc29tZSc7XG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuLy8gaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICBTeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIC8vIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIC8vIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgLy8gfVxuICAvLyBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICAvLyB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJPVVNFTCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgRnJlc2NvIGZyb20gJy4uL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuY29uc3QgY2Fyb3VzZWwgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKSk7XG5cbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNwcm9kdWN0R2FsbGVyeScpKTtcbiAgY3JlYXRlUHJvZHVjdENhcm91c2VsKCQoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIG1haW4gY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgc2xpZGVzVG9TaG93OiA0LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdGlvbnMpO1xuXG4gICAgY2Fyb3VzZWxFbGVtZW50Lm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGNhcm91c2Vsc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpc0NhcnRJdGVtc0Nhcm91c2VsID0gKGNhcm91c2VsRWxlbWVudCA9PT0gJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG4gICAgaWYgKGlzQ2FydEl0ZW1zQ2Fyb3VzZWwpIHtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIGNhcm91c2VsRWxlbWVudFswXS5zbGljayAmJiBjYXJvdXNlbEVsZW1lbnRbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChpc0NhcnRJdGVtc0Nhcm91c2VsKSB7XG4gICAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oc2xpY2spe1xuICAgICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBjYXJvdXNlbCB3aGVuIHVzZXIgaGF2ZSBtb3JlIHRoYW4gNCBhZGRyZXNzZXMgaW4gQ2hlY2tvdXRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc0Nhcm91c2VsKGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBvcHRzID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgcm93czogMixcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgc2xpZGVzUGVyUm93OiAyLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgIGFwcGVuZEFycm93czogY2Fyb3VzZWxFbGVtZW50Lm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcm93czogMyxcbiAgICAgICAgICBzbGlkZXNQZXJSb3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCB2aXNpYmxlU2xpZGVyRGl2ID0gIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnZC1ub25lJyk7XG4gIGlmKHZpc2libGVTbGlkZXJEaXYgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRzKTtcbiAgfSBlbHNlIGlmIChjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0cyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBnYWxsZXJ5IGZvciBkZXNrdG9wIHdoZW4gcmVzaXplXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCkge1xuICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgJCgnLmZyZXNjby1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHVybCA6ICQodGhpcykuZGF0YSgnaW1hZ2UnKSxcbiAgICAgIHRodW1ibmFpbCA6ICQodGhpcykuZGF0YSgndGh1bWJuYWlsJyksXG4gICAgfTtcbiAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBoZWlnaHRDb250ZW50ID0gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGNhcm91c2VsIGFycm93cyB2ZXJ0aWNhbGx5XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93KGNhcm91c2VsRWxlbWVudCkge1xuICBjb25zdCBpbWdTZWxlY3RvciA9ICcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnO1xuICBsZXQgaW1nU2xpZGVySGVpZ2h0O1xuICBsZXQgYXJyb3dUb3BWYWx1ZTtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJChpbWdTZWxlY3RvciwgY2Fyb3VzZWxFbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgIGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJChjYXJvdXNlbEVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfSBlbHNlIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKGltZ1NlbGVjdG9yKS5vdXRlckhlaWdodCgpO1xuICAgIGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJCgnLnNsaWRlci1jb250cm9scycpLm5vdCgnLnByb2R1Y3QtZ2FsbGVyeScpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9XG59XG5cbi8qKlxuICogUmVwbGFjZSBjYXJvdXNlbCBhcnJvd3Mgb25seSBvbiBjYXJ0IGl0ZW1zIGNhcm91c2VsXG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoZWxlbWVudCkge1xuICBjb25zdCBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIGltZycsIGVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCk7XG4gICQoZWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xufVxuXG5leHBvcnQge2Nhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDQVJUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgY29udGFpbmVyID0gJCgnI2NhcnRQYWdlJyk7XG5jb25zdCBib2R5Q29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBjYXJ0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gV2hlbiByZWxvYWRpbmcgcXVhbnRpdGllc1xuICAvLyBEZXNrdG9wXG4gICQoJy5yZWxvYWQtcXR5JywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBNb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknLCBjb250YWluZXIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdRdHkgPSAkKHRoaXMpLnZhbCgpO1xuICAgIGNvbnN0IGlucHV0UXR5TmFtZSA9ICQodGhpcykuZGF0YSgnaW5wdXQtcXR5Jyk7XG4gICAgJCgnaW5wdXRbbmFtZT1cIicgKyBpbnB1dFF0eU5hbWUgKyAnXCJdJykudmFsKG5ld1F0eSk7XG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgY3VzdG9tZXIgdG8gYWRkIG1vcmUgdGhhbiA3IHRpbWVzIGEgcHJvZHVjdFxuICAkKCcucXR5JywgY29udGFpbmVyKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA+PSAkKHRoaXMpLmF0dHIoJ21heCcpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21heCcpKTtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9ICQodGhpcykuZGF0YSgnaXRlbS1pZCcpO1xuICAgICAgJCgnLnF0eS1tYXgtaW4tY2FydC1yZWFjaGVkLScgKyBpdGVtSWQpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gQXBwbHkgY291cG9uIGNvZGVcbiAgJCgnLmNvdXBvbi1jb2RlLWJ0bicsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgY291cG9uIGNvZGVcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgY291cG9uID0gJCgnLmNvdXBvbi1jb2RlJykudmFsKCk7XG4gICAgICBpZiAoY291cG9uID09PSAnJykge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKCcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbChjb3Vwb24pO1xuICAgICAgfVxuXG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGNvdXBvbiBjb2RlIGlucHV0IGlzIGZpbGxlZCwgaGlkZSBlcnJvciBjb250YWluZXJcbiAgYm9keUNvbnRhaW5lci5vbihcImtleWRvd25cIiwgXCIuY291cG9uLWNvZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCcnKTtcbiAgfSk7XG5cbiAgaWYoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnLCBjb250YWluZXIpLmh0bWwoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmNvdXBvbi1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmNvdXBvbi1jb2RlJykudmFsKCQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoKSk7XG4gIH1cblxuICAvLyBBcHBseSBib251cyBwb2ludHNcbiAgJCgnLmJvbnVzLXBvaW50cy1idG4nLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGNvdXBvbiBjb2RlXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGJvbnVzUG9pbnRzID0gJCgnLmJvbnVzLXBvaW50cycpLnZhbCgpO1xuICAgICAgaWYgKGJvbnVzUG9pbnRzID09PSAnJykge1xuICAgICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKGJvbnVzUG9pbnRzKTtcbiAgICAgIH1cbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5kZWxldGUtYm9udXMtcG9pbnRzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBib251cyBwb2ludHNcbiAgICBpZiAoISQoJy5idG4tdG8tY2hlY2tvdXQnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCcnKTtcbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gYm9udXMgcG9pbnRzIGlucHV0IGlzIGZpbGxlZCwgaGlkZSBlcnJvciBjb250YWluZXJcbiAgYm9keUNvbnRhaW5lci5vbihcImtleWRvd25cIiwgXCIuYm9udXMtcG9pbnRzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIGlmKCQoJyNiaXRiYWctYm9udXMtcG9pbnRzIC5mb3JtLWVycm9yLW1lc3NhZ2UnLCBjb250YWluZXIpLmh0bWwoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuYm9udXMtcG9pbnRzLWVycm9yJykuaHRtbCgkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuYm9udXMtcG9pbnRzJykudmFsKCQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgpKTtcbiAgfVxuXG4gIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGJ1dHRvbiBsaW5rZWQgdG8gY2hlY2tvdXQgcGFnZVxuICAkKCdhLmJ0bi10by1jaGVja291dCcsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FydDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENIRUNLT1VUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IHsgY3JlYXRlQWRkcmVzc0Nhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5cbi8vIE1haW4gZnVuY3Rpb24gdXNlZCBpbiBpbml0XG5jb25zdCBzYXZlQnV0dG9uID0gJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1pbi1hY2NvdW50Jyk7XG5jb25zdCBjYW5jZWxCdG4gPSAkKCcjY2hlY2tvdXRQYWdlIC5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnKTtcblxuY29uc3QgY2hlY2tvdXQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjb25zdCBjb250YWluZXIgPSAkKCcjY2hlY2tvdXRQYWdlJyk7XG4gIC8vIFdoZW4gdGhlIHVzZXIgd2FudHMgdG8gY2hhbmdlIGhpcyBhZGRyZXNzXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdjbGlja2VkJykgJiYgISQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGFzQ2xhc3MoJ2QtYmxvY2snKSkge1xuICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcblxuICAgICAgY2FuY2VsQnRuLnNob3coKTtcbiAgICAgIGNhbmNlbEJ0bi5wcmV2KCkuaGlkZSgpO1xuXG4gICAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2NoYW5nZScsIGNvbnRhaW5lcik7XG4gICAgICBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQWRkcmVzc0xpc3QnKSk7XG4gICAgICAvLyBDcmVhdGUgZXZlbnQgb24gYWRkcmVzcyBpdGVtIGFmdGVyIGNhcm91c2VsIGlzIG9wZW5cbiAgICAgICQoJy5jaG9vc2UtYWRkcmVzcyAuY2hvb3NlLWFkZHJlc3MtaXRlbSBhZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNob29zZUFkZHJlc3MoJCh0aGlzKSwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGFzQ2xhc3MoJ2QtYmxvY2snKSkge1xuICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnYWRkJywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gICAgLy8gV2hlbiB1c2VyIHdhbnRzIHRvIGFkZCBhIG5ldyBhZGRyZXNzIHRvIGhpcyBhY2NvdW50XG4gICQoJ2EuY2hlY2tvdXQtYWRkLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QoJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcy5jbGlja2VkJywgY29udGFpbmVyKVswXSlbMV07XG4gICAgc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgc2F2ZSBhIG5ldyBhZGRyZXNzXG4gIHNhdmVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYWRkcmVzc1R5cGUgPSAnc2hpcHBpbmcnO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzNdO1xuICAgICAgJCgnI2NoZWNrb3V0UGFnZSAuZGF0YS0nICsgYWRkcmVzc1R5cGUpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkICsgJ10nO1xuICAgICAgICBjb25zdCB0b1NhdmUgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZpZWxkTmFtZTtcbiAgICAgICAgY29uc3QgdG9SZXBsYWNlID0gJy5jaGFuZ2UtJysgYWRkcmVzc1R5cGUgKyctYWRkcmVzcyAnICsgZmllbGROYW1lO1xuICAgICAgICAkKHRvUmVwbGFjZSkudmFsKCQodG9TYXZlKS52YWwoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2hlY2tvdXRTYXZlQWRkcmVzcyh0aGlzLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiBhZGRyZXNzIHBhZ2UgbmV4dCBidXR0b25cbiAgJCgnLm1haW4tYWRkcmVzcy1mb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmFkZENsYXNzKCdsb2FkaW5nJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgY2hhbmdlc1xuICAkKCdhLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBjYW5jZWxzIHRoZSBhZGRyZXNzIGFkZFxuICAkKCdhLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICB9KTtcbn07XG5cbi8vIFdoZW4gdXNlciBjaG9zZSBhbiBhZGRyZXNzIGlzIHRoZSBhZGRyZXNzZXMgbGlzdFxuZnVuY3Rpb24gY2hvb3NlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5kYXRhLWFkZHJlc3MnLCBlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBjb25zdCBmaWVsZFNlbGVjdG9yID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZFNlbGVjdG9yO1xuICAgIGNvbnN0IGNob3NlbkFkZHJlc3NUZXh0ID0gJy5kYXRhLScrIGFkZHJlc3NUeXBlICsnLicgKyBmaWVsZE5hbWU7XG5cbiAgICBsZXQgY2hvc2VuVmFsdWUgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS50ZXh0KGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCkuc3Vic3RyaW5nKDAsIDIpO1xuICAgIH1cbiAgICAkKGZvcm1GaWVsZCkudmFsKGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgICAgaWYgKCQodGhpcykudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLmNsb3Nlc3QoJ2FkZHJlc3MnKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIGNob3NlblZhbHVlKTtcbiAgfSk7XG4gICQoJyNzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc19kaWZmZXJlbnRCaWxsaW5nQWRkcmVzcycsIGNvbnRhaW5lcikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xufVxuXG4vKiBTYXZlIGFkZHJlc3MgaW4gdXNlciBhY2NvdW50IDogUmV0dXJucyBlcnJvcnMgaW4gZm9ybSBpZiBub3QgdmFsaWQgKi9cbmZ1bmN0aW9uIGNoZWNrb3V0U2F2ZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBmb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJyk7XG4gICQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX3R5cGVcIl0nLCBmb3JtKS52YWwoYWRkcmVzc1R5cGUpO1xuICBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBmb3JtJywgY29udGFpbmVyKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBkYXRhU3VjY2Vzc0RpdiA9ICQocmVzcG9uc2UpO1xuICAgICAgY29uc3Qgbm9BZGRyZXNzID0gc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJyk7XG4gICAgICBpZihkYXRhU3VjY2Vzc0Rpdi5oYXNDbGFzcygnc2F2ZS1hZGRyZXNzLXN1Y2Nlc3MnKSkge1xuICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuXG4gICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUodGhpcywgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIC8vIElmIFVzZXIgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAgICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy4nICsgZmllbGROYW1lLCBjb250YWluZXIpO1xuICAgICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSksIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQoJy5hZGRyZXNzLWJvb2snLCBjb250YWluZXIpLmh0bWwoJCgnLmFkZHJlc3MtYm9vaycsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vQWRkcmVzcykge1xuICAgICAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5uby1hZGRyZXNzZXMtdGV4dCcsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgIHNob3dNYWluRm9ybShjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvci1tZXNzYWdlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJCh0aGlzKS5jbG9zZXN0KCdsYWJlbCcpLmF0dHIoJ2ZvcicpO1xuICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbaWQ9XCInKyBmaWVsZE5hbWUgKydcIl0nLCBjb250YWluZXIpLmFkZENsYXNzKCdpcy1pbnZhbGlkJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+PHNwYW4gY2xhc3M9XCJmb3JtLWVycm9yLW1lc3NhZ2UgZC1ibG9ja1wiPicgKyBmaWVsZEVycm9yICsgJzwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG59XG5cbi8qIEZpbGwgYWRkcmVzcyBmb3JtIGZpZWxkcyB0byBhdm9pZCBlcnJvcnMgKi9cbmZ1bmN0aW9uIGZpbGxBZGRyZXNzKGZpZWxkSWQsIGFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3Qga2VlcENhbWVsRmllbGQgPSBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdjb3VudHJ5Q29kZSddO1xuICBjb25zdCBkYXRhVG9GaWxsID0gJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmRhdGEoKTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmICgha2VlcENhbWVsRmllbGQuaW5jbHVkZXMoZmllbGROYW1lKSkge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgICQodGhpcykudmFsKGRhdGFUb0ZpbGxbZmllbGROYW1lXSk7XG4gIH0pO1xuICAkKCcjaW5BY2NvdW50X3NhdmVfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbn1cblxuLyogRmlsbCBhZGRyZXNzZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBuZXh0IGJ1dHRvbiAqL1xuZnVuY3Rpb24gZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpIHtcbiAgWydzaGlwcGluZycsICdiaWxsaW5nJ10uZm9yRWFjaCgoYWRkcmVzc1R5cGUpID0+IHtcbiAgICBjb25zdCBmaWVsZElkID0gJ3N5bGl1c19jaGVja291dF9hZGRyZXNzXycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzJztcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgJy5tYWluLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcilcbiAgfSlcbn1cblxuLyogRmlsbCBvdGhlciBhZGRyZXNzIHR5cGUgZm9ybSB3aGVuIHNhdmluZyBuZXcgYWRkcmVzcyAqL1xuZnVuY3Rpb24gZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IG90aGVyQWRkcmVzc1R5cGUgPSBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKTtcbiAgbGV0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gIGlmIChzYXZlQnV0dG9uLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgIGZpbGxPdGhlckZvcm0oYWRkcmVzc1R5cGUsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIGZpbGxBZGRyZXNzKGZpZWxkSWQsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9XG59XG5cbi8vIEZpbGwgb3RoZXIgbmV3IGFkZHJlc3MgZm9ybSBPTkxZIElGIHVzZXIgZG9uJ3QgaGF2ZSBhZGRyZXNzZXMgeWV0XG5mdW5jdGlvbiBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3QgZmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgYWRkcmVzc1R5cGU7XG4gIGNvbnN0IG90aGVyRmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmIChmaWVsZE5hbWUgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBjb25zdCBpZFRvRmlsbCA9ICcjJyArIG90aGVyRmllbGRJZCArICdfJyArIGZpZWxkTmFtZTtcbiAgICAkKGlkVG9GaWxsKS52YWwoJCh0aGlzKS52YWwoKSk7XG4gIH0pO1xufVxuXG4vLyBGaWxsIGZvcm0gYW5kIGRpdiBkYXRhIHdoZW4gc2F2ZSBuZXcgYWRkcmVzc1xuZnVuY3Rpb24gZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgY29udGFpbmVyKSB7XG4gIC8vIEdldCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gIGNvbnN0IG5ld1ZhbHVlID0gJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpO1xuXG4gIC8vIENyZWF0ZSBtYWluIGZvcm0gZmllbGQgc2VsZWN0b3JcbiAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ10nO1xuICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZm9ybUZpZWxkTmFtZTtcblxuICAvLyBSZXBsYWNlIGZpZWxkIHdpdGggdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICAkKGZpZWxkVG9SZXBsYWNlKS52YWwobmV3VmFsdWUpO1xuXG4gIC8vIFJlcGxhY2UgdGV4dCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChlbGVtZW50KS50ZXh0KG5ld1ZhbHVlKTtcbiAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICQoZWxlbWVudCkudGV4dCgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuY291bnRyeU5hbWUnLCBjb250YWluZXIpLmh0bWwoKSk7XG4gIH1cblxuICAvLyBTaG93IG9yIGhpZGUgc3RyZWV0MiBjb250YWluZXIgYWNjb3JkaW5nIHRvIHZhbHVlXG4gIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgIGlmICgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKS5odG1sKCkudHJpbSgpICE9PSAnJykge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBhZGRyZXNzIGRpdiBkYXRhXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIG5ld1ZhbHVlKTtcbn1cblxuLyogU2hvdyBNYWluIGZvcm0gd2hlbiB1c2VyIGhhdmUgbm8gYWRkcmVzc2VzICovXG5mdW5jdGlvbiBzaG93TWFpbkZvcm0oY29udGFpbmVyKSB7XG4gIC8vIEhpZGUgZGl2IG1lbnRpb25pbmcgdGhhdCB1c2UgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAkKCcubm8tYWRkcmVzcy15ZXQnLCBjb250YWluZXIpLnJlbW92ZSgpO1xuICAvLyBIaWRlIGFkZCBuZXcgYWRkcmVzcyBmb3JtXG4gICQoJy5hZGQtc2hpcHBpbmctYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybSB0aXRsZVxuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC51c2UnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC5hZGQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgLy8gU2hvdyBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBtYWluIGZvcm1cbiAgJCgnLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLm5leHQoJ2EuYnRuJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufVxuXG4vKiBIaWRlIGFkZHJlc3MgbW9kaWZpY2F0aW9uIGNvbnRhaW5lciAqL1xuZnVuY3Rpb24gaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5wcmV2KCkuc2hvdygpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICQoJyNtYWluQ29udGVudENvbnRhaW5lcicpWzBdLnNjcm9sbFRvcCA9IDA7XG59XG5cbi8qIFJlbW92ZSBlcnJvciBpbmRpY2F0b3JzIHdoZW4gc2F2ZSBhZGRyZXNzIGZvcm0gaXMgc3VibWl0dGVkICovXG5mdW5jdGlvbiBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcikge1xuICAvLyBVc2UgYWRkcmVzc1R5cGUgY2hvc2VuIHdoZW4gc2F2ZSBmb3JtIGlzIHNob3duXG4gIGxldCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVszXTtcbiAgaWYgKGFkZHJlc3NUeXBlID09PSAnbm8tYWRkcmVzc2VzJykge1xuICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHNhdmVCdXR0b25bMF0pWzRdO1xuICB9XG4gICQoJy5jaGFuZ2UtJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hhbmdlLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICctdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0LCAuc2F2ZS1hZGRyZXNzLWZvcm0gc2VsZWN0JywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmludmFsaWQtZmVlZGJhY2snLCBjb250YWluZXIpLnJlbW92ZSgpO1xufVxuXG4vKiBSZXBsYWNlIGFsbCBmb3JtIGFuZCBkaXNwbGF5ZWQgYWRkcmVzcyBkYXRhIHdoZW4gY2FuY2VsIG1vZGlmaWNhdGlvbnMgKi9cbmZ1bmN0aW9uIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9sZERhdGEgPSAkKHRoaXMpLmRhdGEoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9ICh0aGlzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pKVsxXTtcbiAgICBjb25zdCBmaWVsZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRGF0YSk7XG5cbiAgICBmaWVsZE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdjb3VudHJ5TmFtZScpIHtcbiAgICAgICAgZmllbGROYW1lID0gJ2NvdW50cnlDb2RlJ1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dFRvUmVwbGFjZSA9ICcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLicgKyBmaWVsZE5hbWU7XG4gICAgICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgICAgIC8vIFNldCBmb3JtIHdpdGggb2xkIGRhdGFcbiAgICAgICQoZmllbGRUb1JlcGxhY2UsIGNvbnRhaW5lcikudmFsKG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgaWYgKGVsZW1lbnQgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgICAgLy8gU2V0IGNob3NlbiBBZGRyZXNzIHdpdGggb2xkIGRhdGFcbiAgICAgICAgJCh0ZXh0VG9SZXBsYWNlKS50ZXh0KG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gU2hvdyBhZGQgYWRkcmVzcyBmb3JtXG5mdW5jdGlvbiBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nLCBjb250YWluZXIpLnZhbCgnJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcblxuICAvLyBIaWRlIGFsbCBzYXZlIGFkZHJlc3MgZm9ybXMgYmVmb3JlIHNob3dpbmcgdGhlIGNob3NlbiBvbmVcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAuYWRkLScgKyBhZGRyZXNzVHlwZSArICctYWRkcmVzcycsIGNvbnRhaW5lcikuc2hvdygpO1xufVxuXG4vKiBNYW5hZ2Ugd2hhdCB0eXBlIG9mIGFkZHJlc3Mgd2lsbCBiZSByZXBsYWNlIGFuZC9vciBzYXZlZCAqL1xuZnVuY3Rpb24gbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsIHNlbGVjdG9yVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgYWRkcmVzc1R5cGUgKyAnLXRpdGxlJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgLy8gQWxzbyBNYW5hZ2UgU2F2ZUJ1dHRvbiBjbGFzc1xuICBzYXZlQnV0dG9uLmFkZENsYXNzKGFkZHJlc3NUeXBlKTtcbiAgc2F2ZUJ1dHRvbi5yZW1vdmVDbGFzcyhnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTU1PTiBGVU5DVElPTlMgKi9cbi8qKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2V0IGNsYXNzIGxpc3QgZnJvbSBnaXZlbiBlbGVtZW50XG5mdW5jdGlvbiBnZXRDbGFzc0xpc3QoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbn1cblxuLy8gR2V0IGZpZWxkIG5hbWUgdG8gZmlsbCBkYXRhIGluZm8gaW4gLmNhbmNlbC1pbmZvIGRpdlxuZnVuY3Rpb24gZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IC9bQS1aXS9nbS5leGVjKGZpZWxkTmFtZSk7XG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIChmaWVsZE5hbWUuc3Vic3RyKDAsIG1hdGNoZXMuaW5kZXgpICsgJy0nICsgZmllbGROYW1lLnN1YnN0cihtYXRjaGVzLmluZGV4LCBmaWVsZE5hbWUubGVuZ3RoKSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZE5hbWU7XG59XG5cbi8vIEdldCBvdGhlciBhZGRyZXNzIHR5cGUgZnJvbSBhZGRyZXNzIHR5cGUgZ2l2ZVxuZnVuY3Rpb24gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkge1xuICByZXR1cm4gKGFkZHJlc3NUeXBlID09PSAnc2hpcHBpbmcnKSA/ICdiaWxsaW5nJyA6ICdzaGlwcGluZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrb3V0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTlRBQ1QgUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjb250YWN0UGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIEFqYXggY2FsbCB3aGVuIGNvbnRhY3QgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgJCgnI2NvbnRhY3RQYWdlIGZvcm0gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwgLm1vZGFsLWJvZHkgZGl2JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZXJyb3JzIG9mIGZvcm0gd2hlbiBzdWNjZXNzXG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXScpLnZhbCgnJykucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlICk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXSwgI2NvbnRhY3RQYWdlIFtmb3JePVwic3lsaXVzX2NvbnRhY3RfXCJdJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNikge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBlcnJvckxpc3QgPSAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJ3NwYW4nKS50b0FycmF5KCk7XG4gICAgICAgICAgZXJyb3JMaXN0LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLm91dGVyVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmNsYXNzTmFtZSAhPT0gJ2FjY2VwdENndicpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgICAgICAgICAgICAuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+JyArIGVycm9yLm91dGVyVGV4dCArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAubmV4dCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQxNykge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSAuY29udGFjdC1lcnJvcicpLmh0bWwoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbiAgLy8gQWRkIG5ldyBmaWVsZCB3aGVuIGNob3NlbiBzdWJqZWN0IGlzIFwib3RoZXJcIlxuICAkKCcjc3lsaXVzX2NvbnRhY3Rfc3ViamVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoJChlLnRhcmdldCkudmFsKCkgPT09ICdvdGhlcicpIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0Jykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogTE9HSU4gUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgbG9naW5QYWdlID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gT3BlbiByZXNldCBwYXNzd29yZCBtb2RhbFxuICAkKCcucmVzZXQtcGFzc3dvcmQtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQodGhpcykuZGF0YSgnbW9kYWxJZCcpO1xuICAgICQobW9kYWxJZCkubW9kYWwoJ3Nob3cnKTtcbiAgICAkKCcuaGVhZGVyLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSlcblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgbG9naW4tZm9ybSBleGlzdHMgaW4gcGFnZVxuICBpZigkKCcubG9naW4tZm9ybScpKSB7XG4gICAgJCgnLnN1Ym1pdC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50KS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiBjbGFzcyB2ZXJpZnktYWNjb3VudCBleGlzdHMgaW4gcGFnZVxuICBjb25zdCB2ZXJpZnlBY2NvdW50T2JqZWN0ID0gJCgnLnZlcmlmeS1hY2NvdW50Jyk7XG4gIGlmKHZlcmlmeUFjY291bnRPYmplY3QpIHtcbiAgICB2ZXJpZnlBY2NvdW50T2JqZWN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT25seSB3aGVuIHJlc2V0UGFzc3dvcmRTdWJtaXQgYnV0dG9uIGV4aXN0cyBpbiBwYWdlLCBBamF4IGNhbGwgdG8gcmVzZXQgcGFzc3dvcmRcbiAgaWYgKCQoJyNyZXNldFBhc3N3b3JkU3VibWl0JykpIHtcbiAgICAkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZycpLmFwcGVuZChyZXNwb25zZSk7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQ6bm90KC5zdWNjZXNzKScpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAkKCcubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3JzIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS50ZXh0KCQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3JzIHVsIGxpJykudGV4dCgpKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyBBY3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRNb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQnKS52YWwoJycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgIH0pXG4gIH1cblxuICAvLyBDaGVjayBpZiBlbWFpbCBpcyB2YWxpZCBiZWZvcmUgc3VibWl0IHJlZ2lzdGVyIGZvcm1cbiAgJCgnYnV0dG9uLnN1Ym1pdC1yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykpO1xuICAgIGNvbnN0IGlucHV0UmVnaXN0ZXJGb3JtID0gcmVnaXN0ZXJGb3JtLmZpbmQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWwgPSBpbnB1dFJlZ2lzdGVyRm9ybS52YWwoKTtcbiAgICBjb25zdCBpbnZhbGlkU3BhbiA9IGlucHV0UmVnaXN0ZXJGb3JtLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgIGludmFsaWRTcGFuLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICBpbnB1dFJlZ2lzdGVyRm9ybS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgcmVnaXN0ZXJGb3JtLnN1Ym1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkU3Bhbi5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0uYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFdoZW4gZW1haWwgZmllbGQgaXMgZmlsbGVkIGFuZCBjdXN0b21lciB3YW50cyB0byBtb2RpZnkgaXRzIHZhbHVlXG4gICQoJy5yZWdpc3Rlci1mb3JtIGlucHV0LCAuaGVhZGVyLXJlZ2lzdGVyLWZvcm0gaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkgJiYgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2lzLWludmFsaWQnKSkge1xuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnZGl2JykubmV4dCgnc3BhbicpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpblBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcblxuY29uc3QgcHJpY2VDb250YWluZXJTZWxlY3RvciA9ICcjcHJvZHVjdHNGaWx0ZXJzJztcbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUgPSAnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSc7XG5cbmNvbnN0IHByaWNlTWluU2VsZWN0b3IgPSAnaW5wdXRbbmFtZT1cImNyaXRlcmlhW3ByaWNlXVtwcmljZV8xXVwiXSc7XG5jb25zdCBwcmljZU1heFNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nO1xuXG5jb25zdCBwcm9kdWN0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgLy8gTWFuYWdlIHZhcmlhbnQgbGlzdCB3aGVuIGNsaWNraW5nIGluIHNpemUgYXZhaWxhYmxlXG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCgnLnZhcmlhbnQtbGlzdCAuaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIGlmICgkKHRoaXMpLmRhdGEoJ2FsbW9zdC1vdXQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5sYXN0LXByb2R1Y3QtaW4tc3RvY2snKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAvLyBTaG93IG9yIGhpZGUgdmFyaWFudHMgbGlzdCBpbiBwcm9kdWN0cyBjYXJvdXNlbCBhY2NvcmRpbmcgdG8gc2NyZWVuIHNpemVcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCAudmFyaWFudHMtY29udGFpbmVyJykuaGlkZSgpO1xuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wJylcbiAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTQ0MCkge1xuICAgICAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuc2hvdygpO1xuICAgICAgfVxuICAgIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLmhpZGUoKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiBjbGlja2luZyBvbiBhZGQgdG8gY2FydCBidXR0b25cbiAgJCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IC5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLnZhcmlhbnQtbGlzdCAuaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSAkKCdpbnB1dFtuYW1lXj1cIicgKyAkKGFkZFRvQ2FydEZvcm0pLmRhdGEoJ25hbWVUb0NoZWNrJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgY29uc3QgYnVuZGxlSXRlbXNDb3VudCA9ICQoJ2Rpdi5idW5kbGUtaXRlbScpLmxlbmd0aDtcbiAgICBpZihzZWxlY3RlZFNpemUgPiAwICYmIHNlbGVjdGVkU2l6ZSA8IGJ1bmRsZUl0ZW1zQ291bnQgKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0Om5vdCguaW5wdXQtY2hlY2tlZCknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PT0gMCkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSlcblxuICAkKCdpbnB1dFtpZF49XCJiaXRiYWdfc3lsaXVzX3Byb2R1Y3RfYnVuZGxlX3BsdWdpbl9hZGRfcHJvZHVjdF9idW5kbGVfdG9fY2FydF9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykuZmluZCgnc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykuYWRkQ2xhc3MoJ2lucHV0LWNoZWNrZWQnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSlcbn07XG5cbmNvbnN0IGZpbHRlclByb2R1Y3RzID0gZnVuY3Rpb24gZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBjcml0ZXJpYSA9IHF1ZXJ5U3RyaW5nLmluZGV4T2YoJ2NyaXRlcmlhJyk7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpO1xuXG4gIGxldCBwcmljZVNsaWRlcjtcbiAgbGV0IHByaWNlU2xpZGVyTW9iaWxlO1xuXG4gIGlmIChwcmljZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBwcmljZVNsaWRlciA9IGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIHByaWNlQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSk7XG5cbiAgICAvLyBXaGVuIHVzZXIgY2hhbmdlcyBwcmljZSBpbnB1dCB2YWx1ZVxuICAgIHByaWNlSW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYoZS53aGljaCAhPT0gOCAmJiAhaXNOYU4oU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKSkpe1xuICAgICAgICBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNQU5BR0UgREVTS1RPUCBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50XG4gIGNvbnN0IHNpemVGaWx0ZXJJbnB1dCA9ICQoJyNzaXplRmlsdGVyIGlucHV0Jyk7XG4gIHNpemVGaWx0ZXJJbnB1dC5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICBpZih0aGlzLmNoZWNrZWQpIHtcbiAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJ2lucHV0W2RhdGEtaWQ9XCInICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgc2l6ZUZpbHRlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzIG9uIGRlc2t0b3BcbiAgJCgnYS52YWxpZGF0ZS1maWx0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlckZvcm0nKS5zdWJtaXQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBNT0JJTEUgRklMVEVSU1xuICAgKi9cbiAgLy8gU2l6ZSBmaWx0ZXIgbWFuYWdlbWVudCBvbiBtb2JpbGVcbiAgJCgnI2NyaXRlcmlhU2l6ZU1vYmlsZSBpbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgaW5wdXRUb0NoZWNrID0gJChlLnRhcmdldCkuZGF0YSgnaWQnKTtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykucmVtb3ZlQXR0cignY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTb3J0aW5nXG4gICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIGlucHV0LmlucHV0LXNvcnRpbmcnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIGlucHV0JykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSAucmFkaW8tY29udGFpbmVyIC5jaGVja21hcmsgLmNoZWNrZWQnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoZS50YXJnZXQpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICQoZS50YXJnZXQpLm5leHQoJy5jaGVja21hcmsnKS5maW5kKCcuY2hlY2tlZCcpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gIH0pO1xuXG4gIC8vIFZhbGlkYXRlIGZpbHRlcnNcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnZhbCgpID09PSAnY3JlYXRlZEF0Jykge1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnJlbW92ZSgpO1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmctY3JlYXRlZEF0JykuYXR0cignY2hlY2tlZCcsIHRydWUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1pbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIC8vIE1vYmlsZSBmaWx0ZXJzIGJlaGF2aW91clxuICAkKCcucHJvZHVjdC1maWx0ZXJzLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgcmVzaXplRmlsdGVyTWVudSgpO1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBHRU5FUkFMIEZVTkNUSU9OU1xuICAgKi9cbiAgLy8gSGlkZSByZWluaXRpYWxpemF0aW9uIGJ1dHRvbiB3aGVuIGZpbHRlcnMgaGF2ZSBubyBjcml0ZXJpYVxuICBpZiAoY3JpdGVyaWEgIT09IC0xKSB7XG4gICAgJCgnLnJlaW5pdC1maWx0ZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgfVxuICAvLyBBZGQgYWN0aW9uIHRvIGNsb3NlIGljb25cbiAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuZHJvcGRvd24tdG9nZ2xlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkudHJpZ2dlcignY2xpY2snKTtcbiAgfSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB3aW5kb3cgaXMgcmVzaXplZCB0byBhdm9pZCBzaG93aW5nIGZpbHRlciBtb2JpbGUgbWVudSBvbiBkZXNrdG9wXG4gKi9cbmNvbnN0IHJlc2l6ZUZpbHRlck1lbnUgPSBmdW5jdGlvbiByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9ICQoJyNoZWFkZXJDb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkZXJCYW5uZXIgPSAkKCcuaGVhZGVyLWJhbm5lcicpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlckNvbnRhaW5lci5oZWlnaHQoKSAtIGhlYWRlckJhbm5lci5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9IGhlYWRlckNvbnRhaW5lci5vdXRlckhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGZpbHRlckxpc3RDb250YWluZXJIZWlnaHQgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51JykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNmaWx0ZXJTdWJtaXQnKS5vdXRlckhlaWdodCgpIC0gMTA7XG4gICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZScpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2ZpbHRlckxpc3QnKS5jc3MoJ2hlaWdodCcsIGZpbHRlckxpc3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcmljZSBzbGlkZXIgb24gdGF4b24gcGFnZXNcbiAqXG4gKiBAcGFyYW0gcHJpY2VJbnB1dFxuICogQHBhcmFtIGNvbnRhaW5lclNlbGVjdG9yXG4gKiBAcmV0dXJucyBub1VpU2xpZGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gIGNvbnN0IHByaWNlQ29udGFpbmVyID0gJChjb250YWluZXJTZWxlY3Rvcik7XG4gIGNvbnN0IHByaWNlUmFuZ2UgPSAkKCcjcHJpY2VSYW5nZScsIHByaWNlQ29udGFpbmVyKVswXTtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgLy8gUHJlcGFyZSBzbGlkZXIgb3B0aW9uc1xuICBjb25zdCB0YXhvbk1pblByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWluJykpO1xuICBjb25zdCB0YXhvbk1heFByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWF4JykpO1xuICBjb25zdCByYW5nZVNsaWRlck9wdGlvbnMgPSB7XG4gICAgc3RhcnQ6IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldLFxuXG4gICAgcmFuZ2U6IHtcbiAgICAgICdtaW4nOiBbdGF4b25NaW5QcmljZV0sXG4gICAgICAnbWF4JzogW3RheG9uTWF4UHJpY2VdXG4gICAgfSxcbiAgICBzdGVwOiAxLFxuICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgZm9ybWF0OiB7XG4gICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVoYXZpb3VyOiAndGFwJyxcbiAgICB0b29sdGlwczogZmFsc2VcbiAgfTtcblxuICBjb25zdCBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICBzbGlkZXIub24oJ3NsaWRlJywgZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICBwcmljZU1pbi52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICBwcmljZU1heC52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNsaWRlcjtcbn1cblxuZnVuY3Rpb24gc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXIsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3VmFsdWUgPSBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXTtcbiAgcHJpY2VTbGlkZXIuc2V0KG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBwcmljZSB2YWx1ZXMgYmVmb3JlIHNlbmQgZm9ybVxuICogQHBhcmFtIHByaWNlU2xpZGVyT2JqZWN0XG4gKiBAcGFyYW0gcHJpY2VDb250YWluZXJcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyT2JqZWN0LCBwcmljZUNvbnRhaW5lcikge1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKS5maXJzdCgpO1xuICBsZXQgcHJpY2VNaW5WYWx1ZSA9IHByaWNlTWluLnZhbCgpO1xuICBsZXQgcHJpY2VNYXhWYWx1ZSA9IHByaWNlTWF4LnZhbCgpO1xuICBpZiAocHJpY2VNaW4udmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgaWYgKHByaWNlTWluLnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIHByaWNlTWluLnZhbChwcmljZU1pblZhbHVlKTtcbiAgaWYgKHByaWNlTWF4LnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIGlmIChwcmljZU1heC52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBwcmljZU1heC52YWwocHJpY2VNYXhWYWx1ZSk7XG4gIHByaWNlU2xpZGVyT2JqZWN0LnNldChbcHJpY2VNaW5WYWx1ZSwgcHJpY2VNYXhWYWx1ZV0pO1xufVxuXG5leHBvcnQgeyBwcm9kdWN0LCBmaWx0ZXJQcm9kdWN0cywgcmVzaXplRmlsdGVyTWVudSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTSEFSRSBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBzaGFyZVByb2R1Y3QgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmVEcm9wZG93bicpKSB7XG4gICAgalF1ZXJ5KCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpO1xuICAgIC8vIEZhY2Vib29rIFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHdpblRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAoMzUwIC8gMik7XG4gICAgICBjb25zdCB3aW5MZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKDYwMCAvIDIpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5kYXRhc2V0LnVybDtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jyt1cmwsICdGYWNlYm9vayAtIE5vYmxlenogU2hvcCcsICd0b3A9JyArIHdpblRvcCArICcsbGVmdD0nICsgd2luTGVmdCArICcsdG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPTYwMCxoZWlnaHQ9MzUwJyk7XG4gICAgfSk7XG5cbiAgICAvLyBQaW50ZXJlc3QgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGludGVyZXN0U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsUGludGVyZXN0U2hhcmUnKS5jbGljaygpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDb3B5IHRvIENsaXBib2FyZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMaW5rJyk7XG4gICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZW5hYmxlJyk7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dC52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdzaG93Jyk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTsgfSwgMTUwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coYENvcHkgZmFpbGVkISAke2Vycm9yfWApIH0pXG4gICAgfSk7XG5cbiAgICAvLyBNYWlsIFRvXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBtYWlsVG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuZGF0YXNldC5tYWlsdG87XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1haWxUbztcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGFyZVByb2R1Y3Q7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uYmE5NjljOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYmFjay5jZDExZjBmYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jYXJkLmI3NTcxYjEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuZWVkZTZhYmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY29saXNzaW1vLjBiNzlhNzEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2RlbGl2ZXJ5LXRydWNrLjljM2RmY2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOWEzMTg1OWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lbi4zMDJlZTdiZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjZhYTcwN2Y1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZnIuODQ2ZDdlNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1pdC4zNTU1YTM2Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjJjMmE5Y2MzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuMDQwZjQxYmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS5lNzI2ODk3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9uZXh0LmZiNjQ2MDk1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC45NTI2MjVmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZWxvYWQuM2I3NTBkNDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmV0dXJuLXBvbGljeS42N2Q4YTc1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43ZmRlYzI3MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjY5OWM0MDM5LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=