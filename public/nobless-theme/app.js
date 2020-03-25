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

/***/ "./themes/BootstrapTheme/assets/js/index.js":
/*!**************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _glightbox = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");

var _glightbox2 = _interopRequireDefault(_glightbox);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(/*! bootstrap.native/dist/bootstrap-native-v4 */ "./node_modules/bootstrap.native/dist/bootstrap-native-v4.js");

var _syliusRating = __webpack_require__(/*! ./sylius-rating */ "./themes/BootstrapTheme/assets/js/sylius-rating.js");

var _syliusRating2 = _interopRequireDefault(_syliusRating);

var _syliusToggle = __webpack_require__(/*! ./sylius-toggle */ "./themes/BootstrapTheme/assets/js/sylius-toggle.js");

var _syliusToggle2 = _interopRequireDefault(_syliusToggle);

var _syliusAddToCart = __webpack_require__(/*! ./sylius-add-to-cart */ "./themes/BootstrapTheme/assets/js/sylius-add-to-cart.js");

var _syliusAddToCart2 = _interopRequireDefault(_syliusAddToCart);

var _syliusRemoveFromCart = __webpack_require__(/*! ./sylius-remove-from-cart */ "./themes/BootstrapTheme/assets/js/sylius-remove-from-cart.js");

var _syliusRemoveFromCart2 = _interopRequireDefault(_syliusRemoveFromCart);

var _syliusApiToggle = __webpack_require__(/*! ./sylius-api-toggle */ "./themes/BootstrapTheme/assets/js/sylius-api-toggle.js");

var _syliusApiToggle2 = _interopRequireDefault(_syliusApiToggle);

var _syliusApiLogin = __webpack_require__(/*! ./sylius-api-login */ "./themes/BootstrapTheme/assets/js/sylius-api-login.js");

var _syliusApiLogin2 = _interopRequireDefault(_syliusApiLogin);

var _syliusVariantsPrices = __webpack_require__(/*! ./sylius-variants-prices */ "./themes/BootstrapTheme/assets/js/sylius-variants-prices.js");

var _syliusVariantsPrices2 = _interopRequireDefault(_syliusVariantsPrices);

var _syliusVariantImages = __webpack_require__(/*! ./sylius-variant-images */ "./themes/BootstrapTheme/assets/js/sylius-variant-images.js");

var _syliusVariantImages2 = _interopRequireDefault(_syliusVariantImages);

var _syliusProvinceField = __webpack_require__(/*! ./sylius-province-field */ "./themes/BootstrapTheme/assets/js/sylius-province-field.js");

var _syliusProvinceField2 = _interopRequireDefault(_syliusProvinceField);

var _syliusAddressBook = __webpack_require__(/*! ./sylius-address-book */ "./themes/BootstrapTheme/assets/js/sylius-address-book.js");

var _syliusAddressBook2 = _interopRequireDefault(_syliusAddressBook);

var _syliusLoadableForms = __webpack_require__(/*! ./sylius-loadable-forms */ "./themes/BootstrapTheme/assets/js/sylius-loadable-forms.js");

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

  const syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');

  if (syliusShippingAddress && syliusShippingAddress.querySelector('.dropdown')) {
    (0, _syliusAddressBook2.default)(syliusShippingAddress);
  }

  const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');

  if (syliusBillingAddress && syliusBillingAddress.querySelector('.dropdown')) {
    (0, _syliusAddressBook2.default)(syliusBillingAddress);
  } // Variant prices


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

/***/ "./themes/BootstrapTheme/assets/js/sylius-address-book.js":
/*!****************************************************************!*\
  !*** ./themes/BootstrapTheme/assets/js/sylius-address-book.js ***!
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
const parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, words => words[1].toUpperCase());
};

const SyliusAddressBook = function SyliusAddressBook(el) {
  const element = el;
  const select = element.querySelector('.dropdown');

  const findByName = function findByName(name) {
    return element.querySelector(`[name*=${parseKey(name)}]`);
  };

  const changeEvent = new Event('change');
  select.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
      const choice = e.currentTarget;
      const choiceData = {};
      [...choice.attributes].forEach(attr => {
        if (attr.name.startsWith('data-')) {
          const camelCased = attr.name.replace('data-', '').replace(/-([a-z])/g, g => g[1].toUpperCase());
          choiceData[camelCased] = attr.value;
        }
      });
      const provinceCode = choiceData.provinceCode,
            provinceName = choiceData.provinceName;
      const provinceContainer = select.closest('[data-js-address-book]').querySelector('.province-container');
      element.querySelectorAll('input, select').forEach(input => {
        input.value = '';
      });
      Object.entries(choiceData).forEach(([property, value]) => {
        const field = findByName(property);

        if (property.indexOf('countryCode') !== -1) {
          field.value = value;
          field.dispatchEvent(changeEvent);
          const exists = setInterval(() => {
            const provinceCodeField = findByName('provinceCode');
            const provinceNameField = findByName('provinceName');

            if (!provinceContainer.hasAttribute('data-loading')) {
              if (provinceCodeField && provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                provinceCodeField.value = provinceCode;
                clearInterval(exists);
              } else if (provinceNameField && provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                provinceNameField.value = provinceName;
                clearInterval(exists);
              }
            }
          }, 100);
        } else if (field) {
          field.value = value;
        }
      });
    });
  });
};

exports.default = SyliusAddressBook;

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


__webpack_require__(/*! ../../BootstrapTheme/assets/js/index */ "./themes/BootstrapTheme/assets/js/index.js");

__webpack_require__(/*! ./scss/index.scss */ "./themes/NoblessTheme/assets/scss/index.scss");

__webpack_require__(/*! ./media/logo.png */ "./themes/NoblessTheme/assets/media/logo.png");

__webpack_require__(/*! ../../BootstrapTheme/assets/js/fontawesome */ "./themes/BootstrapTheme/assets/js/fontawesome.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

/**
 * Resize function to keep all the main-content visible
 */
function resizeContent() {
  var footerHeight = document.getElementById('footerContainer').clientHeight;
  var contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById("mainContentContainer").style.height = contentHeight + "px";
}

window.onload = resizeContent;
window.onresize = resizeContent;
var menuDropdown = document.getElementById('mainNavbar');
menuDropdown.addEventListener('shown.bs.collapse', function (e) {
  resizeContent();
}, false);
menuDropdown.addEventListener('hidden.bs.collapse', function (e) {
  resizeContent();
}, false);

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/logo.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/logo.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/logo.6c0a5a54.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImFjY2VwdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsaWdodGJveCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInF1ZXJ5U2VsZWN0b3IiLCJzeWxpdXNCaWxsaW5nQWRkcmVzcyIsImVsZW0iLCJTeWxpdXNSYXRpbmciLCJvblJhdGUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJTeWxpdXNUb2dnbGUiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJlIiwicmVxdWVzdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJ0YXJnZXQiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZ2V0UHJvdmluY2VJbnB1dFZhbHVlIiwidmFsdWVTZWxlY3RvciIsInZhbCIsIlN5bGl1c1Byb3ZpbmNlRmllbGQiLCJjb3VudHJ5U2VsZWN0IiwiY291bnRyeVNlbGVjdEl0ZW0iLCJldmVudCIsIm5leHRFbGVtZW50U2libGluZyIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicHJvdmluY2VJbnB1dEZpZWxkTmFtZSIsInByb3ZpbmNlU2VsZWN0RmllbGRJZCIsInByb3ZpbmNlSW5wdXRGaWVsZElkIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUNvZGUiLCJjb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwicHJvdmluY2VTZWxlY3RWYWx1ZSIsInByb3ZpbmNlSW5wdXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJ0cmlnZ2VyIiwidG9nZ2xlIiwidG9nZ2xlRWxlbWVudCIsImpzVG9nZ2xlIiwic3R5bGUiLCJkaXNwbGF5IiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsInJlc2l6ZUNvbnRlbnQiLCJmb290ZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsIm1lbnVEcm9wZG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtCQUFqTixFQUEyTkMsY0FBM04sRUFBbU9DLHdCQUFuTyxFQUFnUEMsb0JBQWhQOztBQUNBQyx3QkFBSUMsS0FBSixHOzs7Ozs7Ozs7Ozs7OztBQ2RBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUF6QkE7Ozs7Ozs7OztBQVNBO0FBa0JBO0FBQ0FDLGdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZC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Ii8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC5uYXRpdmUvZGlzdC9ib290c3RyYXAtbmF0aXZlLXY0JztcblxuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4vc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4vc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4vc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4vc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbmltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICB9XG4gIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9yLnJlc3BvbnNlLmRhdGEpLmZvckVhY2goKFssIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2UuZXJyb3JzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaG9pY2VEYXRhID0ge307XG5cbiAgICAgIFsuLi5jaG9pY2UuYXR0cmlidXRlc10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBjb25zdCBjYW1lbENhc2VkID0gYXR0ci5uYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpLnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBjaG9pY2VEYXRhW2NhbWVsQ2FzZWRdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZURhdGE7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCdbZGF0YS1qcy1hZGRyZXNzLWJvb2tdJykucXVlcnlTZWxlY3RvcignLnByb3ZpbmNlLWNvbnRhaW5lcicpO1xuXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZURhdGEpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlQ29kZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VDb2RlJyk7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkICYmIHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlQ29kZUZpZWxkLnZhbHVlID0gcHJvdmluY2VDb2RlO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpbmNlTmFtZUZpZWxkICYmIHByb3ZpbmNlTmFtZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VOYW1lICE9PSAnJyB8fCBwcm92aW5jZU5hbWUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbHVlID0gcHJvdmluY2VOYW1lO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZHJlc3NCb29rO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNMb2FkYWJsZUZvcm1zO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFByb3ZpbmNlSW5wdXRWYWx1ZSh2YWx1ZVNlbGVjdG9yKSB7XG4gIGNvbnN0IHZhbCA9IHZhbHVlU2VsZWN0b3IgPyB2YWx1ZVNlbGVjdG9yLnZhbHVlIDogbnVsbDtcbiAgcmV0dXJuICF2YWwgfHwgdmFsID09IHVuZGVmaW5lZCA/ICcnIDogYHZhbHVlPVwiJHt2YWx9XCJgO1xufTtcblxuXG5jb25zdCBTeWxpdXNQcm92aW5jZUZpZWxkID0gZnVuY3Rpb24gU3lsaXVzUHJvdmluY2VGaWVsZCgpIHtcbiAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdFtuYW1lJD1cIltjb3VudHJ5Q29kZV1cIl0nKTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIGNvdW50cnlTZWxlY3QuZm9yRWFjaCgoY291bnRyeVNlbGVjdEl0ZW0pID0+IHtcbiAgICBjb3VudHJ5U2VsZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICcnIHx8IHNlbGVjdC52YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJvdmluY2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnJyk7XG5cbiAgICAgIGF4aW9zLmdldChwcm92aW5jZUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIHsgcGFyYW1zOiB7IGNvdW50cnlDb2RlOiBzZWxlY3QudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5jb250ZW50LmluZGV4T2YoJ3NlbGVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgoXG4gICAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCA+IG9wdGlvbltzZWxlY3RlZCQ9XCJzZWxlY3RlZFwiXScpXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkTmFtZX1cIiR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnb3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJywgJ29wdGlvbiB2YWx1ZT1cIlwiJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YCwgYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9XCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VJbnB1dFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZE5hbWV9XCIke3Byb3ZpbmNlSW5wdXRWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZUlucHV0RmllbGRJZH1cImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50cnlTZWxlY3RJdGVtLnZhbHVlICE9PSAnJykge1xuICAgICAgY291bnRyeVNlbGVjdEl0ZW0uZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1Byb3ZpbmNlRmllbGQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNSYXRpbmcge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJhdGluZ01heCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nTWF4KSB8fCA1O1xuICAgICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlKSB8fCAwO1xuICAgICAgdGhpcy52aWV3T25seSA9IHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdWaWV3b25seSAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuYnRuT25FbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vbl0nKTtcbiAgICAgIHRoaXMuYnRuT2ZmRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb2ZmXScpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnJhdGluZ01heDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWxlbWVudC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUgPSBpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T25seSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPD0gdGhpcy5yYXRpbmdBdmVyYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PbkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9mZkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0VmFsdWUoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUpO1xuICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzLm9uUmF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmF0aW5nO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7IH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IodHJpZ2dlcikge1xuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50cmlnZ2VyLmRhdGFzZXQuanNUb2dnbGUpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlci5jaGVja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNsYXNzIFN5bGl1c1ZhcmlhbnRJbWFnZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LWltYWdlXScpO1xuICAgIHRoaXMubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2VMaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlTGluayA9IHRoaXMubWFpbkltYWdlTGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZVNyYyA9IHRoaXMubWFpbkltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldEltYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgaW5wdXRbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl06Y2hlY2tlZCwgXG4gICAgICBzZWxlY3RbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdIG9wdGlvbjpjaGVja2VkXG4gICAgYCk7XG5cbiAgICByZXR1cm4gWy4uLml0ZW1zXS5tYXAoZWwgPT4gZWwudmFsdWUpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUltYWdlU3JjKHZhcmlhbnQpIHtcbiAgICBsZXQgaW1hZ2VMaW5rID0gdGhpcy5kZWZhdWx0SW1hZ2VMaW5rO1xuICAgIGxldCBpbWFnZVNyYyA9IHRoaXMuZGVmYXVsdEltYWdlU3JjO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1jb2RlPVwiJHt2YXJpYW50fVwiXSwgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtb3B0aW9ucz1cIiR7dmFyaWFudH0gXCJdXG4gICAgYCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1qcy1wcm9kdWN0LXRodW1ibmFpbF0nKTtcbiAgICAgIGltYWdlTGluayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBpbWFnZVNyYyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFyZ2UtdGh1bWJuYWlsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1hZ2VMaW5rLCBpbWFnZVNyYyB9O1xuICB9XG5cbiAgc2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRBY3RpdmVJbWFnZVNyYyh0aGlzLmdldEFjdGl2ZVZhcmlhbnQoKSk7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGltZy5pbWFnZUxpbmspO1xuICAgIHRoaXMubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmltYWdlU3JjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50SW1hZ2VzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSAnJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IHNlbGVjdFtkYXRhLW9wdGlvbl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHNlbGVjdG9yICs9IGBbZGF0YS0ke3NlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAocHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdW5hdmFpbGFibGUtdGV4dCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtdmFyaWFudC1wcmljZV0nKS5pbm5lckhUTUw7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBzeWxpdXNWYXJpYW50c1ByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKSB8fCBudWxsO1xuICBjb25zdCBzeWxpdXNQcm9kdWN0VmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXByb2R1Y3QtdmFyaWFudHMnKSB8fCBudWxsO1xuXG4gIGlmIChzeWxpdXNWYXJpYW50c1ByaWNpbmcpIHtcbiAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICB9IGVsc2UgaWYgKHN5bGl1c1Byb2R1Y3RWYXJpYW50cykge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50c1ByaWNlcztcbiIsImltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2luZGV4JztcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7IFxuICAgIHZhciBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIikuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCtcInB4XCI7XG59XG5cbndpbmRvdy5vbmxvYWQgPSByZXNpemVDb250ZW50O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcblxudmFyIG1lbnVEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTmF2YmFyJyk7XG5cbm1lbnVEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbn0sIGZhbHNlKTtcbm1lbnVEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG59LCBmYWxzZSk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjZjMGE1YTU0LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=