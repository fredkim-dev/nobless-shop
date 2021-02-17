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
/* WEBPACK VAR INJECTION */(function($, jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeContent = exports.init = undefined;

__webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");

var _fresco = __webpack_require__(/*! ./fresco/js/fresco.min */ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js");

var _fresco2 = _interopRequireDefault(_fresco);

var _nouislider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");

var _nouislider2 = _interopRequireDefault(_nouislider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resize function to keep all the main-content visible
 */
function resizeMainContainer() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
}

function replaceCarouselArrow(carouselElement) {
  let imgSliderHeight;

  if (carouselElement != undefined) {
    imgSliderHeight = $('.slick-active .card-img-top', carouselElement).outerHeight();
    const arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $(carouselElement).next('.slider-controls').css('top', arrowTopValue + 'px');
  } else {
    imgSliderHeight = $('.slick-active .card-img-top').outerHeight();
    const arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $('.slider-controls').not('.product-gallery').css('top', arrowTopValue + 'px');
  }
}
/**
 * Carousel creation
 */


function createCarousel() {
  if (jQuery('#carouselLatestProducts') && !jQuery('#carouselLatestProducts').hasClass('slick-initialized')) {
    jQuery('#carouselLatestProducts').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      appendArrows: jQuery('#carouselLatestProducts').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
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
    });
    $('#carouselLatestProducts').on('setPosition', function (event, slick, currentSlide, nextSlide) {
      replaceCarouselArrow(jQuery('#carouselLatestProducts'));
    });
  }

  if (jQuery('#carouselLatestBundles') && !jQuery('#carouselLatestBundles').hasClass('slick-initialized')) {
    jQuery('#carouselLatestBundles').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      appendArrows: jQuery('#carouselLatestBundles').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
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
    });
    $('#carouselLatestBundles').on('setPosition', function (event, slick, currentSlide, nextSlide) {
      replaceCarouselArrow(jQuery('#carouselLatestBundles'));
    });
  }

  if (jQuery('#productGallery') && !jQuery('#productGallery').hasClass('slick-initialized')) {
    jQuery('#productGallery').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      appendArrows: jQuery('#productGallery').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
      nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Previous</button></div>',
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
    });
  } else {
    // Resize Product Gallery slider when resizing from desktop to mobile
    const opts = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      appendArrows: jQuery('#productGallery').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
      nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Previous</button></div>',
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
    var slider = $('#productGallery');

    if ($(document).width() < 768 && slider[0].slick && slider[0].slick.unslicked) {
      slider.slick(opts);
    }
  }

  if (jQuery('#carouselCompleteYourStyle') && !jQuery('#carouselCompleteYourStyle').hasClass('slick-initialized')) {
    jQuery('#carouselCompleteYourStyle').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      appendArrows: jQuery('#carouselCompleteYourStyle').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
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
          slidesToScroll: 4,
          infinite: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    });
    $('#carouselCompleteYourStyle').on('setPosition', function (event, slick, currentSlide, nextSlide) {
      replaceCarouselArrow(jQuery('#carouselCompleteYourStyle'));
    });
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
 * Fix product description div on top (right column) when scrolling
 */

/*function fixProductDescriptionDiv() {
  if ($('#images-container').height() - $('#product-sticky').height() - $('#headerContainer').height() - 24 >= -($('#images-container').offset().top)) {
    document.getElementById('product-sticky').classList.remove('sticky-bottom');
    document.getElementById('product-sticky').classList.add('sticky-top-custom');
  } else {
    document.getElementById('product-sticky').classList.add('sticky-bottom');
    document.getElementById('product-sticky').classList.remove('sticky-top-custom');
  }
}*/


function productFunctions() {
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function (event) {
    const bundleItem = $(this).data('bundle-item');

    if (bundleItem !== undefined) {
      $('.variant-name[data-bundle-item="' + bundleItem + '"]').removeClass('variant-selected');
    } else {
      $('.variant-list .variant-name').removeClass('variant-selected');
    }

    $(this).addClass('variant-selected');
  });
  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top').on('mouseenter', function () {
    if ($(document).width() > 1440) {
      $('.variants-container', this).show();
    }
  }).on('mouseleave', function () {
    $('.variants-container', this).hide();
  });
  $('#sylius-product-adding-to-cart .btn-primary').on('click', function (e) {
    e.preventDefault();
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
}

function filterProductFunctions() {
  const queryString = window.location.search;
  const criteria = queryString.indexOf('criteria');
  const priceInput = $('.price-filter .price-input');
  let priceSlider;
  let priceSliderMobile;
  const priceMin = $('#productsFilters input[name="criteria[price][price_1]"]');
  const priceMax = $('#productsFilters input[name="criteria[price][price_2]"]');
  const priceMinMobile = $('#productsFiltersMobile input[name="criteria[price][price_1]"]');
  const priceMaxMobile = $('#productsFiltersMobile input[name="criteria[price][price_2]"]');

  if (priceInput.length > 0) {
    // Prepare slider options
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
    }; // Desktop Slider

    const priceRange = $('#productsFilters #priceRange');
    priceSlider = _nouislider2.default.create(priceRange[0], rangeSliderOptions);
    priceSlider.on('slide', function (newValue) {
      priceMin.val(parseInt(newValue[0]));
      priceMax.val(parseInt(newValue[1]));
    }); // Mobile Slider

    const priceRangeMobile = $('#productsFiltersMobile #priceRange');
    priceSliderMobile = _nouislider2.default.create(priceRangeMobile[0], rangeSliderOptions);
    priceSliderMobile.on('slide', function (newValue) {
      priceMinMobile.val(parseInt(newValue[0]));
      priceMaxMobile.val(parseInt(newValue[1]));
    }); // When user changes price input value

    priceInput.on('keyup', function (e) {
      if (e.which !== 8 && !isNaN(String.fromCharCode(e.which))) {
        const newValue = [priceMin.val(), priceMax.val()];
        priceSlider.set(newValue);
        const newValueMobile = [priceMinMobile.val(), priceMaxMobile.val()];
        priceSliderMobile.set(newValueMobile);
      }
    });
  }

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
  });
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

  $('a.validate-filter').on('click', function (e) {
    e.preventDefault();
    checkPriceValue(priceSlider, priceMin, priceMax);
    checkPriceValue(priceSliderMobile, priceMinMobile, priceMaxMobile);
    $('#productFilterForm').submit();
  });
  $('#productFilterMobileForm button.btn-primary').on('click', function (e) {
    e.preventDefault();

    if ($('.input-sorting:checked').val() === 'createdAt') {
      $('.input-sorting:checked').remove();
      $('.input-sorting-createdAt').attr('checked', true).removeClass('d-none').addClass('d-inline-block');
    }

    checkPriceValue(priceSlider, priceMin, priceMax);
    checkPriceValue(priceSliderMobile, priceMinMobile, priceMaxMobile);
    $(this).closest('form').submit();
  });

  if (criteria !== -1) {
    $('.reinit-filter').removeClass('d-none');
  } // Mobile filters


  $('.product-filters.dropdown').on('show.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      resizeFilterMobileMenu();
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
      $(".screen-overlay-filters").addClass("show");
      $('body').addClass("offcanvas-active");
      $('#productsFiltersMobile .close').removeClass("d-none");
    }
  }).on('hidden.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-filters").removeClass("show");
      $('body').removeClass("offcanvas-active");
      $('#productsFiltersMobile .close').addClass("d-none");
    }
  });
  $('#productsFiltersMobile .close').on('click', function (e) {
    e.preventDefault();
    $('#productsFiltersMobile .dropdown-toggle').trigger('click');
  });
}

function checkPriceValue(priceSliderObject, priceMin, priceMax) {
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

function resizeFilterMobileMenu() {
  if ($(document).width() > 1200) {
    $(".screen-overlay-filters").removeClass("show");
  } else {
    const headerHeight = $('#headerContainer').height() - $('.header-banner').height();
    const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
    const filterListContainerHeight = $('#productsFiltersMobile .dropdown-menu').height() - $('header').height() - $('#filterSubmit').outerHeight() - 10;
    $('#productsFiltersMobile').css('height', 'calc(100% - ' + headerHeight + 'px)');
    $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
    $('#filterList').css('height', filterListContainerHeight + 'px');
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

function loginFunctions() {
  if ($('.login-form')) {
    $('.submit-login').on('click', function (e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement).submit();
    });
  }

  if ($('.verify-account')) {
    $('.verify-account').on('click', function (e) {
      e.preventDefault();
      $(this).closest('form').submit();
    });
  }

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
    });
    $('#resetPasswordModal').on('hide.bs.modal', function (e) {
      $('.reset-password .modal-dialog input.form-control').removeClass('is-invalid');
      $('.reset-password .modal-dialog form').removeClass('loading');
      $('.reset-password .modal-dialog form input').val('');
      $('.reset-password .modal-dialog .form-error-message').html('');
    });
  }

  $('button.submit-register').on('click', function (e) {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    let email = $(e.target).closest('form').find('input').val();
    let registerForm = $(e.target).closest('form');
    let invalidSpan = $(e.target).prev('span');

    if ($(e.target).data('form') !== undefined) {
      registerForm = $($(e.target).data('form'));
      email = $(registerForm).find('input').val();
      invalidSpan = $($(registerForm).find('.invalid-feedback'));
    }

    if (regex.test(email)) {
      invalidSpan.removeClass('d-block');
      registerForm.find('input').removeClass('is-invalid');
      registerForm.submit();
    } else {
      invalidSpan.addClass('d-block');
      registerForm.find('input').addClass('is-invalid');
    }
  });
}

$('.register-form input').on('keyup', function (e) {
  const regex = /\S+@\S+\.\S+/;
  const email = $(e.target).closest('form').find('input').val();

  if (regex.test(email) && $(e.target).hasClass('is-invalid')) {
    $(e.target).closest('div').next('span').removeClass('d-block');
    $(e.target).removeClass('is-invalid');
  }
});
/**
 * Contact Page function
 */

function contactPageFunction() {
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
      error: function error(_error2) {
        if (_error2.status === 406) {
          $('#contactPage span.invalid-feedback').remove();
          const errorList = $($.parseHTML(_error2.responseText)[1]).find('span').toArray();
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

        if (_error2.status === 417) {
          $('#contactPage .contact-error').html($.parseHTML(_error2.responseText)[1]);
        }

        console.log(_error2);
        $(form).removeClass('loading');
      }
    });
  });
  $('#sylius_contact_subject').on('change', function (e) {
    if ($(e.target).val() === 'other') {
      $('.other-subject').show();
    } else {
      $('.other-subject').hide();
    }
  });
}
/**
 * Share function
 */


function shareFunctions() {
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
}

function cartFunctions() {
  // Reload Qty
  $('.reload-qty').on('click', function () {
    if ($(this).hasClass('mobile')) {
      $('form.form-to-submit').trigger('submit');
    } else {
      $(this).closest('form').trigger('submit');
    }
  }); // Apply coupon code

  $('.coupon-code-btn').on('click', function () {
    const coupon = $('.coupon-code').val();

    if (coupon === '') {
      $('#sylius_cart_promotionCoupon').val('');
    } else {
      $('#sylius_cart_promotionCoupon').val(coupon);
    }

    $('form.form-to-submit').trigger('submit');
  });
  $("body").on("keydown", ".coupon-code", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.coupon-error').html('');
  }); // Change quantity on mobile

  $('.mobile-qty').on('change', function () {
    const newQty = $(this).val();
    const inputQtyName = $(this).data('input-qty');
    $('input[name="' + inputQtyName + '"]').val(newQty);
  });

  if ($('.coupon-code-error .form-error-message').html() != undefined) {
    $('.coupon-input').addClass('invalid-code');
    $('.coupon-error').html($('.coupon-code-error .form-error-message').html());
    $('.coupon-code').val($('#sylius_cart_promotionCoupon').val());
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

function loginPageFunctions() {
  $('.reset-password-open').on('click', function (e) {
    e.preventDefault();
    const modalId = $(this).data('modalId');
    $(modalId).modal('show');
    $('.header-dropdown').removeClass('show');
  });
}

function resizeContent() {
  resizeMainContainer();
  createCarousel();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  shareFunctions();
  resizeMenu($('#menuButton').attr('data-trigger'));
  resizeFilterMobileMenu();

  _fresco2.default.hide();
}

function init() {
  createCarousel();
  navbarCollapseInit();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // PREVENT INSIDE CLICK DROPDOWN

  $('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  shareFunctions();
  productFunctions();
  filterProductFunctions(); // Menu Functions

  megamenuFunctions();
  menuIconesFunctions();
  loginFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  cartFunctions();
  contactPageFunction();
  resizeMainContainer();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  replaceCarouselArrow();
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

var _syliusAddressBook = __webpack_require__(/*! ../../BootstrapTheme/assets/js/sylius-address-book */ "./themes/BootstrapTheme/assets/js/sylius-address-book.js");

var _syliusAddressBook2 = _interopRequireDefault(_syliusAddressBook);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZWxvYWQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JldHVybi1wb2xpY3kucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS92aXNhLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhU3RhciIsImZhUXVlc3Rpb25DaXJjbGUiLCJmYVNob3BwaW5nQmFnIiwiZmFDaGVjayIsImZhRXhjbGFtYXRpb25DaXJjbGUiLCJmYUluZm9DaXJjbGUiLCJmYUNoZXZyb25VcCIsImZhTWFwTWFya2VyQWx0IiwiZmFTaHV0dGxlVmFuIiwiZmFDcmVkaXRDYXJkIiwiZmFGbGFnIiwiZmFDY01hc3RlcmNhcmQiLCJmYUNjVmlzYSIsImZhQ2NQYXlwYWwiLCJmYVRpbWVzIiwiZmFTZWFyY2giLCJmYVBsdXMiLCJmYVBlbmNpbEFsdCIsImZhU3luY0FsdCIsImRvbSIsIndhdGNoIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWwiLCJlbGVtZW50IiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicmVkaXJlY3RVcmwiLCJ2YWxpZGF0aW9uRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlcXVlc3QiLCJheGlvcyIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjbGFzc0xpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVycm9yIiwicmVtb3ZlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJkYXRhIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJwYXJzZUtleSIsImtleSIsInJlcGxhY2UiLCJ3b3JkcyIsInRvVXBwZXJDYXNlIiwiU3lsaXVzQWRkcmVzc0Jvb2siLCJzZWxlY3QiLCJmaW5kQnlOYW1lIiwibmFtZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJ2YWx1ZSIsInByb3ZpbmNlQ29kZSIsInByb3ZpbmNlTmFtZSIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsImlucHV0IiwicHJvcGVydHkiLCJmaWVsZCIsImluZGV4T2YiLCJkaXNwYXRjaEV2ZW50IiwiZXhpc3RzIiwic2V0SW50ZXJ2YWwiLCJwcm92aW5jZUNvZGVGaWVsZCIsInByb3ZpbmNlTmFtZUZpZWxkIiwiaGFzQXR0cmlidXRlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJyZWxvYWQiLCJTeWxpdXNBcGlUb2dnbGUiLCJ0b2dnbGVhYmxlRWxlbWVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJTeWxpdXNSYXRpbmciLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsInNldHRpbmdzIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJvblJhdGUiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicHJvZHVjdEZ1bmN0aW9ucyIsImJ1bmRsZUl0ZW0iLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsImZpbHRlclByb2R1Y3RGdW5jdGlvbnMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImNyaXRlcmlhIiwicHJpY2VJbnB1dCIsInByaWNlU2xpZGVyIiwicHJpY2VTbGlkZXJNb2JpbGUiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VNaW5Nb2JpbGUiLCJwcmljZU1heE1vYmlsZSIsInRheG9uTWluUHJpY2UiLCJmaXJzdCIsInRheG9uTWF4UHJpY2UiLCJyYW5nZVNsaWRlck9wdGlvbnMiLCJzdGFydCIsInJhbmdlIiwic3RlcCIsImNvbm5lY3QiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJiZWhhdmlvdXIiLCJ0b29sdGlwcyIsInByaWNlUmFuZ2UiLCJub1VpU2xpZGVyIiwibmV3VmFsdWUiLCJwcmljZVJhbmdlTW9iaWxlIiwiaXNOYU4iLCJmcm9tQ2hhckNvZGUiLCJuZXdWYWx1ZU1vYmlsZSIsInNpemVGaWx0ZXJJbnB1dCIsImlucHV0VG9DaGVjayIsImNoZWNrUHJpY2VWYWx1ZSIsInN1Ym1pdCIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJPdXRlckhlaWdodCIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsImZpbHRlckxpc3RDb250YWluZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJsb2dpbkZ1bmN0aW9ucyIsImZvcm1FbGVtZW50IiwiYWpheCIsInNlcmlhbGl6ZSIsInRleHQiLCJwYXJzZUhUTUwiLCJyZXNwb25zZVRleHQiLCJyZWdleCIsInJlZ2lzdGVyRm9ybSIsImludmFsaWRTcGFuIiwicHJldiIsImNvbnRhY3RQYWdlRnVuY3Rpb24iLCJtb2RhbCIsInByb3AiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJ0b0FycmF5Iiwib3V0ZXJUZXh0IiwiY2xhc3NOYW1lIiwiYWZ0ZXIiLCJjb25zb2xlIiwibG9nIiwic2hhcmVGdW5jdGlvbnMiLCJ0b29sdGlwIiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWFpbFRvIiwibWFpbHRvIiwiY2FydEZ1bmN0aW9ucyIsImNvdXBvbiIsIm5ld1F0eSIsImlucHV0UXR5TmFtZSIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJsb2dpblBhZ2VGdW5jdGlvbnMiLCJtb2RhbElkIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInN5bGl1c0JpbGxpbmdBZGRyZXNzIiwiZWxlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtCQUFqTixFQUEyTkMsY0FBM04sRUFBbU9DLHdCQUFuTyxFQUFnUEMsb0JBQWhQOztBQUNBQyx3QkFBSUMsS0FBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7OztBQUNBOzs7Ozs7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBS0EsTUFBTUMsZUFBZSxHQUFJQyxFQUFELElBQVE7QUFDOUIsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1FLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLENBQXFCLFFBQXJCLENBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdILE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixlQUFyQixDQUFwQjtB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QTFEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxxSEFBc0QsRTs7Ozs7Ozs7Ozs7O0FDQXJFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7O0FDQXhELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcGFyc2VLZXkgPSBmdW5jdGlvbiBwYXJzZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG5jb25zdCBTeWxpdXNBZGRyZXNzQm9vayA9IGZ1bmN0aW9uIFN5bGl1c0FkZHJlc3NCb29rKGVsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgY29uc3QgZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lKj0ke3BhcnNlS2V5KG5hbWUpfV1gKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNob2ljZURhdGEgPSB7fTtcblxuICAgICAgWy4uLmNob2ljZS5hdHRyaWJ1dGVzXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZWQgPSBhdHRyLm5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJykucmVwbGFjZSgvLShbYS16XSkvZywgZyA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNob2ljZURhdGFbY2FtZWxDYXNlZF0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlRGF0YTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLWpzLWFkZHJlc3MtYm9va10nKS5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UtY29udGFpbmVyJyk7XG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlRGF0YSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaW5kQnlOYW1lKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlTmFtZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvdmluY2VDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQgJiYgcHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsdWUgPSBwcm92aW5jZUNvZGU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQgJiYgcHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VOYW1lRmllbGQudmFsdWUgPSBwcm92aW5jZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkcmVzc0Jvb2s7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJywgY2Fyb3VzZWxFbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJChjYXJvdXNlbEVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfSBlbHNlIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnKS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJCgnLnNsaWRlci1jb250cm9scycpLm5vdCgnLnByb2R1Y3QtZ2FsbGVyeScpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuXG4gIH1cbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgaWYgKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpICYmICFqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIHNsaWRlciA9ICQoJyNwcm9kdWN0R2FsbGVyeScpO1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgc2xpZGVyWzBdLnNsaWNrICYmIHNsaWRlclswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIHNsaWRlci5zbGljayhvcHRzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpICYmICFqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBnYWxsZXJ5IGZvciBkZXNrdG9wIHdoZW4gcmVzaXplXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCkge1xuICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgJCgnLmZyZXNjby1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHVybCA6ICQodGhpcykuZGF0YSgnaW1hZ2UnKSxcbiAgICAgIHRodW1ibmFpbCA6ICQodGhpcykuZGF0YSgndGh1bWJuYWlsJyksXG4gICAgfTtcbiAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBoZWlnaHRDb250ZW50ID0gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogRml4IHByb2R1Y3QgZGVzY3JpcHRpb24gZGl2IG9uIHRvcCAocmlnaHQgY29sdW1uKSB3aGVuIHNjcm9sbGluZ1xuICovXG4vKmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNpbWFnZXMtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcjcHJvZHVjdC1zdGlja3knKS5oZWlnaHQoKSAtICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtIDI0ID49IC0oJCgnI2ltYWdlcy1jb250YWluZXInKS5vZmZzZXQoKS50b3ApKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn0qL1xuXG5mdW5jdGlvbiBwcm9kdWN0RnVuY3Rpb25zKCkge1xuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnVuZGxlSXRlbSA9ICQodGhpcykuZGF0YSgnYnVuZGxlLWl0ZW0nKTtcbiAgICBpZihidW5kbGVJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICQoJy52YXJpYW50LW5hbWVbZGF0YS1idW5kbGUtaXRlbT1cIicgKyBidW5kbGVJdGVtICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCAudmFyaWFudHMtY29udGFpbmVyJykuaGlkZSgpO1xuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wJylcbiAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuc2hvdygpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAkKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gJCgnaW5wdXRbbmFtZV49XCInICsgJChhZGRUb0NhcnRGb3JtKS5kYXRhKCduYW1lVG9DaGVjaycpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoO1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW1zQ291bnQgPSAkKCdkaXYuYnVuZGxlLWl0ZW0nKS5sZW5ndGg7XG4gICAgaWYoc2VsZWN0ZWRTaXplID4gMCAmJiBzZWxlY3RlZFNpemUgPCBidW5kbGVJdGVtc0NvdW50ICkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdDpub3QoLmlucHV0LWNoZWNrZWQpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPT09IDApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pXG5cbiAgJCgnaW5wdXRbaWRePVwiYml0YmFnX3N5bGl1c19wcm9kdWN0X2J1bmRsZV9wbHVnaW5fYWRkX3Byb2R1Y3RfYnVuZGxlX3RvX2NhcnRfXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLmZpbmQoJ3NwYW4uaW52YWxpZC1mZWVkYmFjaycpLmFkZENsYXNzKCdpbnB1dC1jaGVja2VkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZpbHRlclByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgY3JpdGVyaWEgPSBxdWVyeVN0cmluZy5pbmRleE9mKCdjcml0ZXJpYScpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKTtcbiAgbGV0IHByaWNlU2xpZGVyO1xuICBsZXQgcHJpY2VTbGlkZXJNb2JpbGU7XG4gIGNvbnN0IHByaWNlTWluID0gJCgnI3Byb2R1Y3RzRmlsdGVycyBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzFdXCJdJyk7XG4gIGNvbnN0IHByaWNlTWF4ID0gJCgnI3Byb2R1Y3RzRmlsdGVycyBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJyk7XG4gIGNvbnN0IHByaWNlTWluTW9iaWxlID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzFdXCJdJyk7XG4gIGNvbnN0IHByaWNlTWF4TW9iaWxlID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJyk7XG4gIGlmIChwcmljZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBQcmVwYXJlIHNsaWRlciBvcHRpb25zXG4gICAgY29uc3QgdGF4b25NaW5QcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21pbicpKTtcbiAgICBjb25zdCB0YXhvbk1heFByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWF4JykpO1xuICAgIGNvbnN0IHJhbmdlU2xpZGVyT3B0aW9ucyA9IHtcbiAgICAgIHN0YXJ0OiBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXSxcblxuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgJ21pbic6IFt0YXhvbk1pblByaWNlXSxcbiAgICAgICAgJ21heCc6IFt0YXhvbk1heFByaWNlXVxuICAgICAgfSxcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJlaGF2aW91cjogJ3RhcCcsXG4gICAgICB0b29sdGlwczogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gRGVza3RvcCBTbGlkZXJcbiAgICBjb25zdCBwcmljZVJhbmdlID0gJCgnI3Byb2R1Y3RzRmlsdGVycyAjcHJpY2VSYW5nZScpO1xuICAgIHByaWNlU2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZVswXSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgICBwcmljZVNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgcHJpY2VNaW4udmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgICBwcmljZU1heC52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgICB9KTtcblxuICAgIC8vIE1vYmlsZSBTbGlkZXJcbiAgICBjb25zdCBwcmljZVJhbmdlTW9iaWxlID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAjcHJpY2VSYW5nZScpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZU1vYmlsZVswXSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgICBwcmljZVNsaWRlck1vYmlsZS5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgcHJpY2VNaW5Nb2JpbGUudmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgICBwcmljZU1heE1vYmlsZS52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdXNlciBjaGFuZ2VzIHByaWNlIGlucHV0IHZhbHVlXG4gICAgcHJpY2VJbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZihlLndoaWNoICE9PSA4ICYmICFpc05hTihTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSl7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV07XG4gICAgICAgIHByaWNlU2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlTW9iaWxlID0gW3ByaWNlTWluTW9iaWxlLnZhbCgpLCBwcmljZU1heE1vYmlsZS52YWwoKV07XG4gICAgICAgIHByaWNlU2xpZGVyTW9iaWxlLnNldChuZXdWYWx1ZU1vYmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzaXplRmlsdGVySW5wdXQgPSAkKCcjc2l6ZUZpbHRlciBpbnB1dCcpO1xuICBzaXplRmlsdGVySW5wdXQuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgaWYodGhpcy5jaGVja2VkKSB7XG4gICAgICAkKHRoaXMpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCdpbnB1dFtkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIHNpemVGaWx0ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcjY3JpdGVyaWFTaXplTW9iaWxlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSAkKGUudGFyZ2V0KS5kYXRhKCdpZCcpO1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5yZW1vdmVBdHRyKCdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQuaW5wdXQtc29ydGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyayAuY2hlY2tlZCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJChlLnRhcmdldCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgJChlLnRhcmdldCkubmV4dCgnLmNoZWNrbWFyaycpLmZpbmQoJy5jaGVja2VkJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSk7XG5cbiAgLy8gVmFsaWRhdGUgZmlsdGVyc1xuICAkKCdhLnZhbGlkYXRlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCBwcmljZU1pbiwgcHJpY2VNYXgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgcHJpY2VNaW5Nb2JpbGUsIHByaWNlTWF4TW9iaWxlKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlckZvcm0nKS5zdWJtaXQoKTtcbiAgfSk7XG5cbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnZhbCgpID09PSAnY3JlYXRlZEF0Jykge1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnJlbW92ZSgpO1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmctY3JlYXRlZEF0JykuYXR0cignY2hlY2tlZCcsIHRydWUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1pbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCBwcmljZU1pbiwgcHJpY2VNYXgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgcHJpY2VNaW5Nb2JpbGUsIHByaWNlTWF4TW9iaWxlKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgfSlcblxuICBpZiAoY3JpdGVyaWEgIT09IC0xKSB7XG4gICAgJCgnLnJlaW5pdC1maWx0ZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgfVxuXG4gIC8vIE1vYmlsZSBmaWx0ZXJzXG4gICQoJy5wcm9kdWN0LWZpbHRlcnMuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCk7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmNsb3NlJykucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuY2xvc2UnKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJPYmplY3QsIHByaWNlTWluLCBwcmljZU1heCkge1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKS5maXJzdCgpO1xuICBsZXQgcHJpY2VNaW5WYWx1ZSA9IHByaWNlTWluLnZhbCgpO1xuICBsZXQgcHJpY2VNYXhWYWx1ZSA9IHByaWNlTWF4LnZhbCgpO1xuICBpZiAocHJpY2VNaW4udmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgaWYgKHByaWNlTWluLnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIHByaWNlTWluLnZhbChwcmljZU1pblZhbHVlKTtcbiAgaWYgKHByaWNlTWF4LnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIGlmIChwcmljZU1heC52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBwcmljZU1heC52YWwocHJpY2VNYXhWYWx1ZSk7XG4gIHByaWNlU2xpZGVyT2JqZWN0LnNldChbcHJpY2VNaW5WYWx1ZSwgcHJpY2VNYXhWYWx1ZV0pO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWVnYW1lbnUgZnVuY3Rpb25zXG4gKiAuaGFzLW1lZ2FtZW51IHRvIHVzZSBkcm9wZG93biBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gbWVnYW1lbnVGdW5jdGlvbnMoKSB7XG4gIC8vIEJ1dHRvbiBob3ZlciBzaW11bGF0ZXMgY2xpY2sgb24gaXRcbiAgJCgnI21lbnVCdXR0b25NYWluLCAjbWVnYW1lbnVEcm9wZG93bicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyokKCcjbWFpbkNvbnRlbnRDb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMDMzKSB7XG4gICAgICAgICQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyovXG5cbiAgJCgnI21lbnVCdXR0b25NYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICBpZiAoJCgnI25hdmJhck1haW5Nb2JpbGUnKS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lZ2FtZW51IGZ1bmN0aW9ucyA6IG1hbmFnZSBtb2JpbGUgbWVudVxuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcblxuICAkKCdhLm5hdi10YXhvbicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykrJyBpbWcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZycpLmhpZGUoKTtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiI25hdmJhck1haW5Nb2JpbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJCgnLmFjdGl2ZS5sb2NhbGUtbGluaywgLm5hdmJhclRheG9uc0xpbmssIC5sb2ctbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKHRoaXMpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI29wZW5BY2NvdW50TWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQoJy5sb2ctbGluaycpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgfSk7XG5cbiAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJY29uZXNGdW5jdGlvbnMoKSB7XG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWNhcnQnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4JylcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCA9ICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2ZpbHRlclN1Ym1pdCcpLm91dGVySGVpZ2h0KCkgLSAxMDtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJykuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjZmlsdGVyTGlzdCcpLmNzcygnaGVpZ2h0JywgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ2luRnVuY3Rpb25zKCkge1xuICBpZigkKCcubG9naW4tZm9ybScpKSB7XG4gICAgJCgnLnN1Ym1pdC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50KS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCQoJy52ZXJpZnktYWNjb3VudCcpKSB7XG4gICAgJCgnLnZlcmlmeS1hY2NvdW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKSkge1xuICAgICQoJyNyZXNldFBhc3N3b3JkU3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgJCgnYnV0dG9uLnN1Ym1pdC1yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgbGV0IGVtYWlsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgbGV0IHJlZ2lzdGVyRm9ybSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBsZXQgaW52YWxpZFNwYW4gPSAkKGUudGFyZ2V0KS5wcmV2KCdzcGFuJyk7XG4gICAgaWYoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyRm9ybSA9ICQoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpKTtcbiAgICAgIGVtYWlsID0gJChyZWdpc3RlckZvcm0pLmZpbmQoJ2lucHV0JykudmFsKClcbiAgICAgIGludmFsaWRTcGFuID0gJCgkKHJlZ2lzdGVyRm9ybSkuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKSk7XG4gICAgfVxuICAgIGlmIChyZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgaW52YWxpZFNwYW4ucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICByZWdpc3RlckZvcm0uc3VibWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludmFsaWRTcGFuLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgICByZWdpc3RlckZvcm0uZmluZCgnaW5wdXQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbiQoJy5yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgY29uc3QgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICB9XG59KTtcblxuLyoqXG4gKiBDb250YWN0IFBhZ2UgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gY29udGFjdFBhZ2VGdW5jdGlvbigpIHtcbiAgJCgnI2NvbnRhY3RQYWdlIGZvcm0gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwgLm1vZGFsLWJvZHkgZGl2JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZXJyb3JzIG9mIGZvcm0gd2hlbiBzdWNjZXNzXG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXScpLnZhbCgnJykucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlICk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXSwgI2NvbnRhY3RQYWdlIFtmb3JePVwic3lsaXVzX2NvbnRhY3RfXCJdJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNikge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBlcnJvckxpc3QgPSAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJ3NwYW4nKS50b0FycmF5KCk7XG4gICAgICAgICAgZXJyb3JMaXN0LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLm91dGVyVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmNsYXNzTmFtZSAhPT0gJ2FjY2VwdENndicpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgICAgICAgICAgICAuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+JyArIGVycm9yLm91dGVyVGV4dCArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAubmV4dCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQxNykge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSAuY29udGFjdC1lcnJvcicpLmh0bWwoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gICQoJyNzeWxpdXNfY29udGFjdF9zdWJqZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZigkKGUudGFyZ2V0KS52YWwoKSA9PT0gJ290aGVyJykge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0JykuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2hhcmUgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gc2hhcmVGdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhcnRGdW5jdGlvbnMoKSB7XG4gIC8vIFJlbG9hZCBRdHlcbiAgJCgnLnJlbG9hZC1xdHknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY291cG9uID0gJCgnLmNvdXBvbi1jb2RlJykudmFsKCk7XG4gICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICB9XG5cbiAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gIH0pO1xuXG4gICQoXCJib2R5XCIpLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICAvLyBDaGFuZ2UgcXVhbnRpdHkgb24gbW9iaWxlXG4gICQoJy5tb2JpbGUtcXR5Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1F0eSA9ICQodGhpcykudmFsKCk7XG4gICAgY29uc3QgaW5wdXRRdHlOYW1lID0gJCh0aGlzKS5kYXRhKCdpbnB1dC1xdHknKTtcbiAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgfSk7XG5cbiAgaWYoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmNvdXBvbi1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmNvdXBvbi1jb2RlJykudmFsKCQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dpblBhZ2VGdW5jdGlvbnMoKSB7XG4gICQoJy5yZXNldC1wYXNzd29yZC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJCh0aGlzKS5kYXRhKCdtb2RhbElkJyk7XG4gICAgJChtb2RhbElkKS5tb2RhbCgnc2hvdycpO1xuICAgICQoJy5oZWFkZXItZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGNyZWF0ZUNhcm91c2VsKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBzaGFyZUZ1bmN0aW9ucygpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcbiAgZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpO1xuICAvLyBNZW51IEZ1bmN0aW9uc1xuICBtZWdhbWVudUZ1bmN0aW9ucygpO1xuICBtZW51SWNvbmVzRnVuY3Rpb25zKCk7XG5cbiAgbG9naW5GdW5jdGlvbnMoKTtcbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2VGdW5jdGlvbnMoKTtcbiAgY2FydEZ1bmN0aW9ucygpO1xuXG4gIGNvbnRhY3RQYWdlRnVuY3Rpb24oKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICAvKmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gIH0qL1xuICAvLyBTaG93IG1lbnUgYWZ0ZXIgcGFnZSBpcyBsb2FkZWRcbiAgJCgnLm1vYmlsZS1vZmZjYW52YXMnKS5zaG93KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5zaG93KCk7XG59XG5cbmV4cG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9mb250YXdlc29tZSc7XG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICB9XG4gIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==