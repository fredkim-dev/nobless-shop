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

__webpack_require__(/*! ./media/icon-gb.png */ "./themes/NoblessTheme/assets/media/icon-gb.png");

/* JS plugins */

/* Css files */

/* Media files */
window.onload = _functions.init;
window.onresize = _functions.resizeContent;
window.onscroll = _functions.fixProductDescriptionDiv;

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
exports.resizeContent = exports.fixProductDescriptionDiv = exports.init = undefined;

__webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");

var _fresco = __webpack_require__(/*! ./fresco/js/fresco.min */ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js");

var _fresco2 = _interopRequireDefault(_fresco);

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
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestProducts').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestBundles').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
        breakpoint: 768,
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
        breakpoint: 768,
        settings: "unslick"
      }]
    };
    var slider = $('#productGallery');

    if ($(document).width() < 768 && slider[0].slick && slider[0].slick.unslicked) {
      slider.slick(opts);
    }
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


function fixProductDescriptionDiv() {
  if ($('#images-container').height() - $('#product-sticky').height() - $('#headerContainer').height() - 24 >= -$('#images-container').offset().top) {
    document.getElementById('product-sticky').classList.remove('sticky-bottom');
    document.getElementById('product-sticky').classList.add('sticky-top-custom');
  } else {
    document.getElementById('product-sticky').classList.add('sticky-bottom');
    document.getElementById('product-sticky').classList.remove('sticky-top-custom');
  }
}

function productFunctions() {
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function (event) {
    $('.variant-list .variant-name').removeClass('variant-selected');
    $(this).addClass('variant-selected');
  });
  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top').on('mouseenter', function () {
    if ($(document).width() > 1000) {
      $('.variants-container', this).show();
    }
  }).on('mouseleave', function () {
    $('.variants-container', this).hide();
  });
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
    if (!$('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 992) {
      if ($(document).width() > 1024) {
        $('#menuButton').trigger('click');
      } else if ($(document).width() <= 1024) {
        $('.dropdown-menu.megamenu').addClass('show');
      }
    }
  }).on('mouseleave', function () {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 992) {
      if ($(document).width() > 1024) {
        $('#menuButton').trigger('click');
      } else if ($(document).width() <= 1024) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });
  $('#mainContentContainer').on('click', function () {
    if ($('.dropdown-menu.megamenu').hasClass('show') && $(document).width() > 992) {
      if ($(document).width() <= 1033) {
        $('.dropdown-menu.megamenu').removeClass('show');
      }
    }
  });
  $('#menuButtonMain').on('click', function () {
    if ($(document).width() < 992) {
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
    if ($(document).width() <= 992) {
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      const productContainerHeight = $('.cart-dropdown').height() - $('header').height() - $('#cartActions').outerHeight();
      $('.screen-overlay-cart').css('top', headerOuterHeight + 'px');
      $('#headerCartItems').css('height', productContainerHeight + 'px');
      $(".screen-overlay-cart").addClass("show");
      $('body').addClass("offcanvas-active");
    }
  });
  $('.menu-icones .dropdown').on('hidden.bs.dropdown', function (e) {
    if ($(document).width() <= 992) {
      $(".screen-overlay-cart").removeClass("show");
      $('body').removeClass("offcanvas-active");
    }
  });
}

function resizeMenu(element) {
  if ($(document).width() > 992) {
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

function formFunctions() {
  if ($('.login-form') || $('.register-form')) {
    $('.btn-form').on('click', function (e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement + ' button').trigger('click');
    });
  }

  if ($('.verify-account')) {
    $('.verify-account').on('click', function (e) {
      e.preventDefault();
      $(this).closest('form').trigger('submit');
    });
  }

  if ($('#resetPasswordSubmit')) {
    $('#resetPasswordSubmit').on('click', function (e) {
      e.preventDefault();
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
  productFunctions(); // Menu Functions

  megamenuFunctions();
  menuIconesFunctions();
  formFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  resizeMainContainer();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  replaceCarouselArrow();

  if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  } // Show mobile menu after page is loaded


  $('.mobile-offcanvas').show();
}

exports.init = init;
exports.fixProductDescriptionDiv = fixProductDescriptionDiv;
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/account-icon.6a02109f.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/back.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/back.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/back.533bfd03.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/card.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/card.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/card.cd42b19f.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/chronopost.png":
/*!*********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/chronopost.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/chronopost.13ab01df.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/colissimo.png":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/colissimo.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/colissimo.72663433.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/delivery-truck.png":
/*!*************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/delivery-truck.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/delivery-truck.5c1a3ca0.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-de.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-de.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/icon-de.963b26b9.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-es.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-es.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/icon-es.1e3cc0d1.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-fr.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-fr.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/icon-fr.649541cb.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-gb.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-gb.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/icon-gb.8abf81e8.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/icon-it.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-it.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/icon-it.aa92366b.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/logo.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/logo.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/logo.b6996053.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/mastercard.png":
/*!*********************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/mastercard.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/mastercard.80e955f1.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/mondial-relay.png":
/*!************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/mondial-relay.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/mondial-relay.9471acdf.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/next.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/next.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/next.72089198.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/paypal.png":
/*!*****************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/paypal.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/paypal.3ec16b15.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/return-policy.png":
/*!************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/return-policy.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/return-policy.a4d5109f.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/shopping-bag-icon.png":
/*!****************************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/shopping-bag-icon.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/shopping-bag-icon.7547a8b7.png";

/***/ }),

/***/ "./themes/NoblessTheme/assets/media/visa.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/visa.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/visa.49adf54c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1nYi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwidmFsdWUiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJmb3JtIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwidmFsIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsImNvdW50cnlTZWxlY3QiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHJ5Q29kZSIsImNvbnRlbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJvbnNjcm9sbCIsImZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0IiwicHJvZHVjdEZ1bmN0aW9ucyIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImRldmVsb3BNb2JpbGVNZW51IiwibWVudUljb25lc0Z1bmN0aW9ucyIsImhlYWRlck91dGVySGVpZ2h0IiwicHJvZHVjdENvbnRhaW5lckhlaWdodCIsInJlc2l6ZU1lbnUiLCJoZWFkZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJmb3JtRnVuY3Rpb25zIiwiZm9ybUVsZW1lbnQiLCJhamF4Iiwic2VyaWFsaXplIiwidGV4dCIsInBhcnNlSFRNTCIsInJlc3BvbnNlVGV4dCIsInNoYXJlRnVuY3Rpb25zIiwidG9vbHRpcCIsIndpblRvcCIsInNjcmVlbiIsIndpbkxlZnQiLCJvcGVuIiwiY2xpY2siLCJjb3B5VGV4dCIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJtYWlsVG8iLCJtYWlsdG8iLCJvcmRlcnNHcmlkRnVuY3Rpb25zIiwicHJldiIsImxvZ2luUGFnZUZ1bmN0aW9ucyIsIm1vZGFsSWQiLCJtb2RhbCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhlYWRlcnMiLCJhY2NlcHQiLCJnbGlnaHRib3giLCJzeWxpdXNTaGlwcGluZ0FkZHJlc3MiLCJzeWxpdXNCaWxsaW5nQWRkcmVzcyIsImVsZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBdUJBQSw0QkFBUUMsR0FBUixDQUFZQyxjQUFaLEVBQW9CQyxrQ0FBcEIsRUFBc0NDLDRCQUF0QyxFQUFxREMsZ0JBQXJELEVBQThEQyx3Q0FBOUQsRUFBbUZDLDBCQUFuRixFQUFpR0Msd0JBQWpHLEVBQThHQyw4QkFBOUcsRUFBOEhDLDBCQUE5SCxFQUE0SUMsMEJBQTVJLEVBQTBKQyxjQUExSixFQUFrS0MsOEJBQWxLLEVBQWtMQyxrQkFBbEwsRUFBNExDLHNCQUE1TCxFQUF3TUMsZ0JBQXhNLEVBQWlOQyxrQkFBak4sRUFBMk5DLGNBQTNOLEVBQW1PQyx3QkFBbk8sRUFBZ1BDLG9CQUFoUDs7QUFDQUMsd0JBQUlDLEtBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7QUFDQTs7Ozs7O0FBWkE7Ozs7Ozs7OztBQVNBO0FBS0EsTUFBTUMsZUFBZSxHQUFJQyxFQUFELElBQVE7QUFDOUIsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1FLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLENBQXFCLFFBQXJCLENBQVo7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RXlGLE9BQXJFLEdBQStFLElBQS9FO0FBQ0Q7O0FBSG9CLEtBQXZCO0FBS0QsR0FORCxFQTdCa0QsQ0FxQ2xEOztBQUNBLE1BQUkxRCxRQUFRLENBQUM1RSxhQUFULENBQXVCLGlCQUF2QixDQUFKLEVBQStDO0FBQzdDLG1DQUFnQjRFLFFBQVEsQ0FBQzVFLGFBQVQsQ0FBdUIseUJBQXZCLENBQWhCO0FBQ0Esa0NBQWU0RSxRQUFRLENBQUM1RSxhQUFULENBQXVCLGlCQUF2QixDQUFmO0FBQ0QsR0F6Q2lELENBMkNsRDs7O0FBQ0E0RSxVQUFRLENBQUN6QyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENmLE9BQTlDLENBQXNEcXVCLElBQUksSUFBSSxJQUFJeG5CLHNCQUFKLENBQWlCd25CLElBQWpCLENBQTlELEVBNUNrRCxDQThDbEQ7O0FBQ0EsTUFBSTdxQixRQUFRLENBQUM1RSxhQUFULENBQXVCLDZDQUF2QixDQUFKLEVBQTJFO0FBQUUsUUFBSXlJLDZCQUFKO0FBQTRCLEdBL0N2RCxDQWlEbEQ7OztBQUNBO0FBQ0QsQ0FuREQsRTs7Ozs7Ozs7Ozs7QUNoQ0EsbUU7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhUXVlc3Rpb25DaXJjbGUsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlLmVycm9ycztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBwYXJzZUtleSA9IGZ1bmN0aW9uIHBhcnNlS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhfXFx3KS9nLCB3b3JkcyA9PiB3b3Jkc1sxXS50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmNvbnN0IFN5bGl1c0FkZHJlc3NCb29rID0gZnVuY3Rpb24gU3lsaXVzQWRkcmVzc0Jvb2soZWwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICBjb25zdCBmaW5kQnlOYW1lID0gZnVuY3Rpb24gZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWUqPSR7cGFyc2VLZXkobmFtZSl9XWApO1xuICB9O1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2hvaWNlID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgY2hvaWNlRGF0YSA9IHt9O1xuXG4gICAgICBbLi4uY2hvaWNlLmF0dHJpYnV0ZXNdLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKGF0dHIubmFtZS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxDYXNlZCA9IGF0dHIubmFtZS5yZXBsYWNlKCdkYXRhLScsICcnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBnID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY2hvaWNlRGF0YVtjYW1lbENhc2VkXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHByb3ZpbmNlQ29kZSwgcHJvdmluY2VOYW1lIH0gPSBjaG9pY2VEYXRhO1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnW2RhdGEtanMtYWRkcmVzcy1ib29rXScpLnF1ZXJ5U2VsZWN0b3IoJy5wcm92aW5jZS1jb250YWluZXInKTtcblxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VEYXRhKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZpbmRCeU5hbWUocHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdjb3VudHJ5Q29kZScpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICBjb25zdCBleGlzdHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUNvZGVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlQ29kZScpO1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VOYW1lRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgICAgICAgaWYgKCFwcm92aW5jZUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgIGlmIChwcm92aW5jZUNvZGVGaWVsZCAmJiBwcm92aW5jZUNvZGVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlQ29kZSAhPT0gJycgfHwgcHJvdmluY2VDb2RlICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZUNvZGVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlQ29kZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aW5jZU5hbWVGaWVsZCAmJiBwcm92aW5jZU5hbWVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlTmFtZSAhPT0gJycgfHwgcHJvdmluY2VOYW1lICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZU5hbWVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlTmFtZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRyZXNzQm9vaztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiwgcmVzaXplQ29udGVudCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCAnLi9pbmRleEJvb3RzdHJhcFRoZW1lJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcblxuLyogQ3NzIGZpbGVzICovXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbi8qIE1lZGlhIGZpbGVzICovXG5pbXBvcnQgJy4vbWVkaWEvbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JldHVybi1wb2xpY3kucG5nJztcbmltcG9ydCAnLi9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tYXN0ZXJjYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvdmlzYS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3BheXBhbC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NvbGlzc2ltby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2Nocm9ub3Bvc3QucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYWNjb3VudC1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9iYWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbmV4dC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZnIucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWRlLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1pdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZXMucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWdiLnBuZyc7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcbndpbmRvdy5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcblxuIiwiLyoqXG4gKiBGcmVzY28gLSBBIEJlYXV0aWZ1bCBSZXNwb25zaXZlIExpZ2h0Ym94IC0gdjIuMy4wXG4gKiAoYykgMjAxMi0yMDE5IE5pY2sgU3Rha2VuYnVyZ1xuICpcbiAqIGh0dHBzOi8vd3d3LmZyZXNjb2pzLmNvbVxuICpcbiAqIEBsaWNlbnNlOiBodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wXG4gKi9cbiFmdW5jdGlvbihpLGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImpxdWVyeVwiKSk6aS5GcmVzY289ZShqUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKCQpe3ZhciBGcmVzY289e307JC5leHRlbmQoRnJlc2NvLHt2ZXJzaW9uOlwiMi4zLjBcIn0pLEZyZXNjby5Ta2lucz17ZnJlc2NvOnt9fTt2YXIgQm91bmRzPXt2aWV3cG9ydDpmdW5jdGlvbigpe3ZhciBpPXt3aWR0aDokKHdpbmRvdykud2lkdGgoKX07aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZCYmQnJvd3Nlci5HZWNrbyl7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoO2kuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCplfWVsc2UgaS5oZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3JldHVybiBpfX0sQnJvd3Nlcj0oZT1uYXZpZ2F0b3IudXNlckFnZW50LHtJRTohKCF3aW5kb3cuYXR0YWNoRXZlbnR8fC0xIT09ZS5pbmRleE9mKFwiT3BlcmFcIikpJiZmKFwiTVNJRSBcIiksT3BlcmE6LTE8ZS5pbmRleE9mKFwiT3BlcmFcIikmJighIXdpbmRvdy5vcGVyYSYmb3BlcmEudmVyc2lvbiYmcGFyc2VGbG9hdChvcGVyYS52ZXJzaW9uKCkpfHw3LjU1KSxXZWJLaXQ6LTE8ZS5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpJiZmKFwiQXBwbGVXZWJLaXQvXCIpLEdlY2tvOi0xPGUuaW5kZXhPZihcIkdlY2tvXCIpJiYtMT09PWUuaW5kZXhPZihcIktIVE1MXCIpJiZmKFwicnY6XCIpLE1vYmlsZVNhZmFyaTohIWUubWF0Y2goL0FwcGxlLipNb2JpbGUuKlNhZmFyaS8pLENocm9tZTotMTxlLmluZGV4T2YoXCJDaHJvbWVcIikmJmYoXCJDaHJvbWUvXCIpLENocm9tZU1vYmlsZTotMTxlLmluZGV4T2YoXCJDck1vXCIpJiZmKFwiQ3JNby9cIiksQW5kcm9pZDotMTxlLmluZGV4T2YoXCJBbmRyb2lkXCIpJiZmKFwiQW5kcm9pZCBcIiksSUVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiSUVNb2JpbGVcIikmJmYoXCJJRU1vYmlsZS9cIil9KSxlO2Z1bmN0aW9uIGYoaSl7dmFyIHQ9bmV3IFJlZ0V4cChpK1wiKFtcXFxcZC5dKylcIikuZXhlYyhlKTtyZXR1cm4hdHx8cGFyc2VGbG9hdCh0WzFdKX12YXIgX3NsaWNlPUFycmF5LnByb3RvdHlwZS5zbGljZTtmdW5jdGlvbiBiYXNlVG9TdHJpbmcoaSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGk/aTpudWxsPT1pP1wiXCI6aStcIlwifXZhciBfPXtpc0VsZW1lbnQ6ZnVuY3Rpb24oaSl7cmV0dXJuIGkmJjE9PT1pLm5vZGVUeXBlfSxTdHJpbmc6e2NhcGl0YWxpemU6ZnVuY3Rpb24oaSl7cmV0dXJuKGk9YmFzZVRvU3RyaW5nKGkpKSYmaS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnNsaWNlKDEpfX19OyQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIixmdW5jdGlvbihpKXt2YXIgZTtpZihpLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YT9lPWkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhLzEyMDppLm9yaWdpbmFsRXZlbnQuZGV0YWlsJiYoZT0taS5vcmlnaW5hbEV2ZW50LmRldGFpbC8zKSxlKXt2YXIgdD0kLkV2ZW50KFwiZnJlc2NvOm1vdXNld2hlZWxcIik7JChpLnRhcmdldCkudHJpZ2dlcih0LGUpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaS5zdG9wUHJvcGFnYXRpb24oKSx0LmlzRGVmYXVsdFByZXZlbnRlZCgpJiZpLnByZXZlbnREZWZhdWx0KCl9fSk7dmFyIEZpdD17d2l0aGluOmZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0PSQuZXh0ZW5kKHtoZWlnaHQ6ITAsd2lkdGg6ITB9LGFyZ3VtZW50c1syXXx8e30pLHM9JC5leHRlbmQoe30sZSksbj0xLG89NSxhPXQud2lkdGgsaD10LmhlaWdodDswPG8mJihhJiZzLndpZHRoPmkud2lkdGh8fGgmJnMuaGVpZ2h0PmkuaGVpZ2h0KTspe3ZhciByPTEsZD0xO2EmJnMud2lkdGg+aS53aWR0aCYmKHI9aS53aWR0aC9zLndpZHRoKSxoJiZzLmhlaWdodD5pLmhlaWdodCYmKGQ9aS5oZWlnaHQvcy5oZWlnaHQpLG49TWF0aC5taW4ocixkKSxzPXt3aWR0aDplLndpZHRoKm4saGVpZ2h0OmUuaGVpZ2h0Km59LG8tLX1yZXR1cm4gcy53aWR0aD1NYXRoLm1heChzLndpZHRoLDApLHMuaGVpZ2h0PU1hdGgubWF4KHMuaGVpZ2h0LDApLHN9fTskLmV4dGVuZCgkLmVhc2luZyx7ZnJlc2NvRWFzZUluQ3ViaWM6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcyooZS89bikqZSplK3R9LGZyZXNjb0Vhc2VJblNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4tcypNYXRoLmNvcyhlL24qKE1hdGguUEkvMikpK3MrdH0sZnJlc2NvRWFzZU91dFNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcypNYXRoLnNpbihlL24qKE1hdGguUEkvMikpK3R9fSk7dmFyIFN1cHBvcnQ9KE89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxQPVwiV2Via2l0IE1veiBPIG1zIEtodG1sXCIuc3BsaXQoXCIgXCIpLHtjYW52YXM6KGJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksISghYmEuZ2V0Q29udGV4dHx8IWJhLmdldENvbnRleHQoXCIyZFwiKSkpLGNzczp7YW5pbWF0aW9uOlMoXCJhbmltYXRpb25cIiksdHJhbnNmb3JtOlMoXCJ0cmFuc2Zvcm1cIikscHJlZml4ZWQ6ZnVuY3Rpb24oaSl7cmV0dXJuIFMoaSxcInByZWZpeFwiKX19LHN2ZzohIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyYmISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QsdG91Y2g6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl9Y2F0Y2goaSl7cmV0dXJuITF9fSgpfSksYmEsTyxQO2Z1bmN0aW9uIFMoaSxlKXt2YXIgdD1pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc3Vic3RyKDEpO3JldHVybiBmdW5jdGlvbihpLGUpe2Zvcih2YXIgdCBpbiBpKWlmKHZvaWQgMCE9PU8uc3R5bGVbaVt0XV0pcmV0dXJuXCJwcmVmaXhcIiE9PWV8fGlbdF07cmV0dXJuITF9KChpK1wiIFwiK1Auam9pbih0K1wiIFwiKSt0KS5zcGxpdChcIiBcIiksZSl9U3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaD1mdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2g9U3VwcG9ydC50b3VjaCYmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWR8fEJyb3dzZXIuSUVNb2JpbGV8fEJyb3dzZXIuQ2hyb21lTW9iaWxlfHwhL14oV2lufE1hY3xMaW51eCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSl9LFN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2goKTt2YXIgSW1hZ2VSZWFkeT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07ZnVuY3Rpb24gVGltZXJzKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfWZ1bmN0aW9uIGdldFVSSURhdGEocyl7dmFyIG49e3R5cGU6XCJpbWFnZVwifTtyZXR1cm4gJC5lYWNoKFR5cGVzLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5kYXRhKHMpO3QmJigobj10KS50eXBlPWksbi51cmw9cyl9KSxufWZ1bmN0aW9uIGRldGVjdEV4dGVuc2lvbihpKXt2YXIgZT0oaXx8XCJcIikucmVwbGFjZSgvXFw/LiovZyxcIlwiKS5tYXRjaCgvXFwuKFteLl17Myw0fSkkLyk7cmV0dXJuIGU/ZVsxXS50b0xvd2VyQ2FzZSgpOm51bGx9JC5leHRlbmQoSW1hZ2VSZWFkeS5wcm90b3R5cGUse3N1cHBvcnRzOntuYXR1cmFsV2lkdGg6XCJuYXR1cmFsV2lkdGhcImluIG5ldyBJbWFnZX0saW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5pbWc9JChpKVswXSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMuaXNMb2FkZWQ9ITEsdGhpcy5vcHRpb25zPSQuZXh0ZW5kKHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixwb2xsRmFsbGJhY2tBZnRlcjoxZTN9LGFyZ3VtZW50c1szXXx8e30pLHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRoJiZcIm9ubG9hZFwiIT09dGhpcy5vcHRpb25zLm1ldGhvZD90aGlzLmltZy5jb21wbGV0ZSYmXCJ1bmRlZmluZWRcIiE9PSQudHlwZSh0aGlzLmltZy5uYXR1cmFsV2lkdGgpP3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpezA8dGhpcy5pbWcubmF0dXJhbFdpZHRoP3RoaXMuc3VjY2VzcygpOnRoaXMuZXJyb3IoKX0sdGhpcykpOigkKHRoaXMuaW1nKS5iaW5kKFwiZXJyb3JcIiwkLnByb3h5KGZ1bmN0aW9uKCl7c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lcnJvcigpfSx0aGlzKSl9LHRoaXMpKSx0aGlzLmludGVydmFscz1bWzFlMywxMF0sWzJlMyw1MF0sWzRlMywxMDBdLFsyZTQsNTAwXV0sdGhpcy5faXBvcz0wLHRoaXMuX3RpbWU9MCx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXSx0aGlzLnBvbGwoKSk6c2V0VGltZW91dCgkLnByb3h5KHRoaXMuZmFsbGJhY2ssdGhpcykpfSxwb2xsOmZ1bmN0aW9uKCl7dGhpcy5fcG9sbGluZz1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtpZigwPHRoaXMuaW1nLm5hdHVyYWxXaWR0aCl0aGlzLnN1Y2Nlc3MoKTtlbHNle2lmKHRoaXMuX3RpbWUrPXRoaXMuX2RlbGF5LHRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmdGhpcy5fdGltZT49dGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiYhdGhpcy5fdXNlZFBvbGxGYWxsYmFjayYmKHRoaXMuX3VzZWRQb2xsRmFsbGJhY2s9ITAsdGhpcy5mYWxsYmFjaygpKSx0aGlzLl90aW1lPnRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzBdKXtpZighdGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvcysxXSlyZXR1cm4gdm9pZCB0aGlzLmVycm9yKCk7dGhpcy5faXBvcysrLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdfXRoaXMucG9sbCgpfX0sdGhpcyksdGhpcy5fZGVsYXkpfSxmYWxsYmFjazpmdW5jdGlvbigpe3ZhciBpPW5ldyBJbWFnZTsodGhpcy5fZmFsbGJhY2tJbWc9aSkub25sb2FkPSQucHJveHkoZnVuY3Rpb24oKXtpLm9ubG9hZD1mdW5jdGlvbigpe30sdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGh8fCh0aGlzLmltZy5uYXR1cmFsV2lkdGg9aS53aWR0aCx0aGlzLmltZy5uYXR1cmFsSGVpZ2h0PWkuaGVpZ2h0KSx0aGlzLnN1Y2Nlc3MoKX0sdGhpcyksaS5vbmVycm9yPSQucHJveHkodGhpcy5lcnJvcix0aGlzKSxpLnNyYz10aGlzLmltZy5zcmN9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5fZmFsbGJhY2tJbWcmJih0aGlzLl9mYWxsYmFja0ltZy5vbmxvYWQ9ZnVuY3Rpb24oKXt9KSx0aGlzLl9wb2xsaW5nJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3BvbGxpbmcpLHRoaXMuX3BvbGxpbmc9bnVsbCl9LHN1Y2Nlc3M6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRTdWNjZXNzfHwodGhpcy5fY2FsbGVkU3VjY2Vzcz0hMCx0aGlzLmlzTG9hZGVkPSEwLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKHRoaXMpKX0sZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRFcnJvcnx8KHRoaXMuX2NhbGxlZEVycm9yPSEwLHRoaXMuYWJvcnQoKSx0aGlzLmVycm9yQ2FsbGJhY2smJnRoaXMuZXJyb3JDYWxsYmFjayh0aGlzKSl9fSksJC5leHRlbmQoVGltZXJzLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX3RpbWVycz17fX0sc2V0OmZ1bmN0aW9uKGksZSx0KXt0aGlzLl90aW1lcnNbaV09c2V0VGltZW91dChlLHQpfSxnZXQ6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXMuX3RpbWVyc1tpXX0sY2xlYXI6ZnVuY3Rpb24oaSl7aT90aGlzLl90aW1lcnNbaV0mJihjbGVhclRpbWVvdXQodGhpcy5fdGltZXJzW2ldKSxkZWxldGUgdGhpcy5fdGltZXJzW2ldKTp0aGlzLmNsZWFyQWxsKCl9LGNsZWFyQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RpbWVycyxmdW5jdGlvbihpLGUpe2NsZWFyVGltZW91dChlKX0pLHRoaXMuX3RpbWVycz17fX19KTt2YXIgVHlwZT17aXNWaWRlbzpmdW5jdGlvbihpKXtyZXR1cm4vXih5b3V0dWJlfHZpbWVvKSQvLnRlc3QoaSl9fSxUeXBlcz17aW1hZ2U6e2V4dGVuc2lvbnM6XCJibXAgZ2lmIGpwZWcganBnIHBuZyB3ZWJwXCIsZGV0ZWN0OmZ1bmN0aW9uKGkpe3JldHVybi0xPCQuaW5BcnJheShkZXRlY3RFeHRlbnNpb24oaSksdGhpcy5leHRlbnNpb25zLnNwbGl0KFwiIFwiKSl9LGRhdGE6ZnVuY3Rpb24oaSl7cmV0dXJuISF0aGlzLmRldGVjdCgpJiZ7ZXh0ZW5zaW9uOmRldGVjdEV4dGVuc2lvbihpKX19fSx2aW1lbzp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8odmltZW9cXC5jb20pXFwvKFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpO3JldHVybiEoIWV8fCFlWzJdKSYmZVsyXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19LHlvdXR1YmU6e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC93YXRjaFxcPyg/PS4qdmk/PShbYS16QS1aMC05LV9dKykpKD86XFxTKyk/JC8uZXhlYyhpKTtyZXR1cm4gZSYmZVsyXT9lWzJdOiEoIShlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLyh2aT9cXC98dVxcL3xlbWJlZFxcLyk/KFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpKXx8IWVbM10pJiZlWzNdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX19LFZpbWVvVGh1bWJuYWlsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy51cmw9aSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGkuZGF0YS51cmwpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2lmKGkmJmkudGh1bWJuYWlsX3VybCl7dmFyIGU9e3VybDppLnRodW1ibmFpbF91cmx9O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGUudXJsKX1lbHNlIHRoaXMuZXJyb3JDYWxsYmFjaygpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksVmltZW9SZWFkeT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnVybD1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLmNhbGxiYWNrKGkuZGF0YSk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImbWF4d2lkdGg9OTk5OTk5OSZtYXhoZWlnaHQ9OTk5OTk5OSZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT17ZGltZW5zaW9uczp7d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHR9fTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrKGUpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksT3B0aW9ucz17ZGVmYXVsdHM6e2VmZmVjdHM6e2NvbnRlbnQ6e3Nob3c6MCxoaWRlOjB9LHNwaW5uZXI6e3Nob3c6MTUwLGhpZGU6MTUwfSx3aW5kb3c6e3Nob3c6NDQwLGhpZGU6MzAwfSx0aHVtYm5haWw6e3Nob3c6MzAwLGRlbGF5OjE1MH0sdGh1bWJuYWlsczp7c2xpZGU6MH19LGtleWJvYXJkOntsZWZ0OiEwLHJpZ2h0OiEwLGVzYzohMH0sbG9hZGVkTWV0aG9kOlwibmF0dXJhbFdpZHRoXCIsbG9vcDohMSxvbkNsaWNrOlwicHJldmlvdXMtbmV4dFwiLG92ZXJmbG93OiExLG92ZXJsYXk6e2Nsb3NlOiEwfSxwcmVsb2FkOlsxLDJdLHBvc2l0aW9uOiEwLHNraW46XCJmcmVzY29cIixzcGlubmVyOiEwLHNwaW5uZXJEZWxheTozMDAsc3luYzohMCx0aHVtYm5haWxzOlwiaG9yaXpvbnRhbFwiLHVpOlwib3V0c2lkZVwiLHVpRGVsYXk6M2UzLHZpbWVvOnthdXRvcGxheToxLGFwaToxLHRpdGxlOjEsYnlsaW5lOjEscG9ydHJhaXQ6MCxsb29wOjB9LHlvdXR1YmU6e2F1dG9wbGF5OjEsY29udHJvbHM6MSxlbmFibGVqc2FwaToxLGhkOjEsaXZfbG9hZF9wb2xpY3k6Myxsb29wOjAsbW9kZXN0YnJhbmRpbmc6MSxyZWw6MCx2cTpcImhkMTA4MFwifSxpbml0aWFsVHlwZU9wdGlvbnM6e2ltYWdlOnt9LHZpbWVvOnt3aWR0aDoxMjgwfSx5b3V0dWJlOnt3aWR0aDoxMjgwLGhlaWdodDo3MjB9fX0sY3JlYXRlOmZ1bmN0aW9uKGksZSx0KXt0PXR8fHt9LChpPWl8fHt9KS5za2luPWkuc2tpbnx8dGhpcy5kZWZhdWx0cy5za2luO3ZhciBzPWkuc2tpbj8kLmV4dGVuZCh7fSxGcmVzY28uU2tpbnNbaS5za2luXXx8RnJlc2NvLlNraW5zW3RoaXMuZGVmYXVsdHMuc2tpbl0pOnt9LG49JC5leHRlbmQoITAse30sdGhpcy5kZWZhdWx0cyxzKTtuLmluaXRpYWxUeXBlT3B0aW9ucyYmKGUmJm4uaW5pdGlhbFR5cGVPcHRpb25zW2VdJiYobj0kLmV4dGVuZCghMCx7fSxuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSxuKSksZGVsZXRlIG4uaW5pdGlhbFR5cGVPcHRpb25zKTt2YXIgbz0kLmV4dGVuZCghMCx7fSxuLGkpO2lmKFN1cHBvcnQubW9iaWxlVG91Y2gmJlwiaW5zaWRlXCI9PT1vLnVpJiYoby51aT1cIm91dHNpZGVcIiksKCFvLmVmZmVjdHN8fEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSkmJihvLmVmZmVjdHM9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMuZWZmZWN0cyxmdW5jdGlvbihlLGkpeyQuZWFjaChvLmVmZmVjdHNbZV09JC5leHRlbmQoe30saSksZnVuY3Rpb24oaSl7by5lZmZlY3RzW2VdW2ldPTB9KX0pLG8uc3Bpbm5lcj0hMSksby5rZXlib2FyZCYmKFwiYm9vbGVhblwiPT09JC50eXBlKG8ua2V5Ym9hcmQpJiYoby5rZXlib2FyZD17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5rZXlib2FyZCxmdW5jdGlvbihpLGUpe28ua2V5Ym9hcmRbaV09ITB9KSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwkLmV4dGVuZChvLmtleWJvYXJkLHtsZWZ0OiExLHJpZ2h0OiExfSkpLCFvLm92ZXJmbG93fHxTdXBwb3J0Lm1vYmlsZVRvdWNoP28ub3ZlcmZsb3c9e3g6ITEseTohMX06XCJib29sZWFuXCI9PT0kLnR5cGUoby5vdmVyZmxvdykmJihvLm92ZXJmbG93PXt4OiExLHk6ITB9KSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fChvLm92ZXJsYXA9ITEpLChCcm93c2VyLklFJiZCcm93c2VyLklFPDl8fFN1cHBvcnQubW9iaWxlVG91Y2gpJiYoby50aHVtYm5haWw9ITEsby50aHVtYm5haWxzPSExKSxcInlvdXR1YmVcIiE9PWUmJihvLndpZHRoJiYhby5tYXhXaWR0aCYmKG8ubWF4V2lkdGg9by53aWR0aCksby5oZWlnaHQmJiFvLm1heEhlaWdodCYmKG8ubWF4SGVpZ2h0PW8uaGVpZ2h0KSksIW8udGh1bWJuYWlsJiZcImJvb2xlYW5cIiE9PSQudHlwZShvLnRodW1ibmFpbCkpe3ZhciBhPSExO3N3aXRjaChlKXtjYXNlXCJ5b3V0dWJlXCI6YT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiK1wiLy9pbWcueW91dHViZS5jb20vdmkvXCIrdC5pZCtcIi8wLmpwZ1wiO2JyZWFrO2Nhc2VcImltYWdlXCI6Y2FzZVwidmltZW9cIjphPSEwfW8udGh1bWJuYWlsPWF9cmV0dXJuIG99fSxPdmVybGF5PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMudmlzaWJsZT0hMX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheVwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXktYmFja2dyb3VuZFwiKSksdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZpLnZpZXcmJmkudmlldy5vcHRpb25zLm92ZXJsYXkmJiFpLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHxXaW5kb3cuaGlkZSgpfSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIrdGhpcy5za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIraSksdGhpcy5za2luPWl9LGF0dGFjaDpmdW5jdGlvbigpeyQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5kZXRhY2goKX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLm1heCgpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSl7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZXx8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQoc3x8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSx0aGlzLnZpc2libGU9ITEsaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LGdldFNjcm9sbERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgbj17fTtyZXR1cm4gJC5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oaSxlKXt2YXIgdD1lLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSkscz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7bltlXT0oQnJvd3Nlci5JRT9NYXRoLm1heChzW1wib2Zmc2V0XCIrdF0sc1tcInNjcm9sbFwiK3RdKTpCcm93c2VyLldlYktpdD9kb2N1bWVudC5ib2R5W1wic2Nyb2xsXCIrdF06c1tcInNjcm9sbFwiK3RdKXx8MH0pLG59LG1heDpmdW5jdGlvbigpe3ZhciBpO2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZCcm93c2VyLldlYktpdCYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4JiYoaT10aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuY3NzKGkpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpe3ZhciBlPUJvdW5kcy52aWV3cG9ydCgpO3RoaXMuZWxlbWVudC5jc3Moe2hlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRofSl9U3VwcG9ydC5tb2JpbGVUb3VjaCYmIWkmJnRoaXMuZWxlbWVudC5jc3Moe2hlaWdodDp0aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKS5oZWlnaHR9KX19LFdpbmRvdz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzPVtdLHRoaXMucXVldWVzLmhpZGU9JCh7fSksdGhpcy5wYWdlcz1bXSx0aGlzLl90cmFja2luZz1bXSx0aGlzLl9maXJzdD0hMCx0aGlzLnRpbWVycz1uZXcgVGltZXJzLHRoaXMuYnVpbGQoKSx0aGlzLnNldFNraW4oT3B0aW9ucy5kZWZhdWx0cy5za2luKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZih0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItd2luZG93IGZyLW1lYXN1cmVkXCIpLmhpZGUoKS5hcHBlbmQodGhpcy5fYm94PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWJveFwiKS5hcHBlbmQodGhpcy5fcGFnZXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZXNcIikpKS5hcHBlbmQodGhpcy5fdGh1bWJuYWlscz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzXCIpKSxPdmVybGF5LmluaXRpYWxpemUoKSxQYWdlcy5pbml0aWFsaXplKHRoaXMuX3BhZ2VzKSxUaHVtYm5haWxzLmluaXRpYWxpemUodGhpcy5fdGh1bWJuYWlscyksU3Bpbm5lci5pbml0aWFsaXplKCksVUkuaW5pdGlhbGl6ZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQubW9iaWxlVG91Y2g/XCJcIjpcIi1ub1wiKStcIi1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5zdmc/XCJcIjpcIi1ub1wiKStcIi1zdmdcIiksQnJvd3Nlci5JRSlmb3IodmFyIGk9NztpPD05O2krKylCcm93c2VyLklFPGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWx0SUVcIitpKTt0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXNraW4tXCIraSksT3ZlcmxheS5zZXRTa2luKGkpLHRoaXMuX3NraW49aX0sc2V0U2hvd2luZ1R5cGU6ZnVuY3Rpb24oaSl7dGhpcy5fc2hvd2luZ1R5cGUhPT1pJiYodGhpcy5fc2hvd2luZ1R5cGUmJih0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIrdGhpcy5fc2hvd2luZ1R5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLl9zaG93aW5nVHlwZSkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK2kpLFR5cGUuaXNWaWRlbyhpKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpLHRoaXMuX3Nob3dpbmdUeXBlPWkpfSxzdGFydE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcnx8JCh3aW5kb3cpLm9uKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPSQucHJveHkodGhpcy5fb25XaW5kb3dSZXNpemUsdGhpcykpfSxzdG9wT2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyJiYoJCh3aW5kb3cpLm9mZihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciksdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPW51bGwpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnRpbWVycy5zZXQoXCJzY3JvbGxcIiwkLnByb3h5KHRoaXMuYWRqdXN0VG9TY3JvbGwsdGhpcyksMCl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3ZhciBpOyhpPVBhZ2VzLnBhZ2UpJiYoVGh1bWJuYWlscy5maXRUb1ZpZXdwb3J0KCksdGhpcy51cGRhdGVCb3hEaW1lbnNpb25zKCksaS5maXRUb0JveCgpLFVJLnVwZGF0ZSgpLFVJLmFkanVzdFByZXZOZXh0KG51bGwsMCksU3Bpbm5lci5jZW50ZXIoKSxPdmVybGF5Lm1heCgpLFVJLl9vbldpbmRvd1Jlc2l6ZSgpLHRoaXMuX29uU2Nyb2xsKCkpfSxhZGp1c3RUb1Njcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5jc3Moe3RvcDokKHdpbmRvdykuc2Nyb2xsVG9wKCl9KX0sZ2V0Qm94RGltZW5zaW9uczpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib3hEaW1lbnNpb25zfSx1cGRhdGVCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7aWYoUGFnZXMucGFnZSl7dmFyIGk9Qm91bmRzLnZpZXdwb3J0KCksZT1UaHVtYm5haWxzLmdldERpbWVuc2lvbnMoKSx0PVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247dGhpcy5fYm94RGltZW5zaW9ucz17d2lkdGg6dD9pLndpZHRoOmkud2lkdGgtZS53aWR0aCxoZWlnaHQ6dD9pLmhlaWdodC1lLmhlaWdodDppLmhlaWdodH0sdGhpcy5fYm94UG9zaXRpb249e3RvcDowLGxlZnQ6dD8wOmUud2lkdGh9LHRoaXMuX2JveC5jc3MoJC5leHRlbmQoe30sdGhpcy5fYm94RGltZW5zaW9ucyx0aGlzLl9ib3hQb3NpdGlvbikpfX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5vcGVuaW5nPSEwLHRoaXMuYXR0YWNoKCksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKSx0aGlzLmFkanVzdFRvU2Nyb2xsKCk7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MCxzPTI7T3ZlcmxheVtQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vdmVybGF5P1wic2hvd1wiOlwiaGlkZVwiXShmdW5jdGlvbigpe2kmJi0tczwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcInNob3ctd2luZG93XCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Nob3coJC5wcm94eShmdW5jdGlvbigpe3RoaXMub3BlbmluZz0hMSxpJiYtLXM8MSYmaSgpfSx0aGlzKSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsNTApOjEpfX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGUpe2lmKHRoaXMudmlldyl7dmFyIGk9dGhpcy5xdWV1ZXMuaGlkZTtpLnF1ZXVlKFtdKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpO3ZhciB0PVBhZ2VzLnBhZ2U/UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZTowO2kucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5zdG9wKCksU3Bpbm5lci5oaWRlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1VJLmRpc2FibGUoKSxVSS5oaWRlKG51bGwsdCksS2V5Ym9hcmQuZGlzYWJsZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0yO3RoaXMuX2hpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJoaWRlLW92ZXJsYXlcIiwkLnByb3h5KGZ1bmN0aW9uKCl7T3ZlcmxheS5oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDE1MCk6MSksdGhpcy5fZmlyc3Q9ITB9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fcmVzZXQoKSx0aGlzLnN0b3BPYnNlcnZpbmdSZXNpemUoKSxQYWdlcy5yZW1vdmVBbGwoKSxUaHVtYm5haWxzLmNsZWFyKCksdGhpcy50aW1lcnMuY2xlYXIoKSx0aGlzLl9wb3NpdGlvbj0tMTt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5hZnRlckhpZGU7XCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZlLmNhbGwoRnJlc2NvKSx0aGlzLnZpZXc9bnVsbCx0aGlzLm9wZW5pbmc9ITEsdGhpcy5jbG9zaW5nPSExLHRoaXMuZGV0YWNoKCksaSgpfSx0aGlzKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7ZSgpLGkoKX0sdGhpcykpfX0sX2hpZGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGUpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHQsaSl9LGxvYWQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXdzPWksdGhpcy5hdHRhY2goKSxUaHVtYm5haWxzLmxvYWQoaSksUGFnZXMubG9hZChpKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nUmVzaXplKCksZSYmdGhpcy5zZXRQb3NpdGlvbihlKX0sc2V0UG9zaXRpb246ZnVuY3Rpb24oaSxlKXt0aGlzLl9wb3NpdGlvbj1pLHRoaXMudmlldz10aGlzLnZpZXdzW2ktMV0sdGhpcy5zdG9wSGlkZVF1ZXVlKCksdGhpcy5wYWdlPVBhZ2VzLnNob3coaSwkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSl9LHN0b3BIaWRlUXVldWU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5oaWRlLnF1ZXVlKFtdKX0sX3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy52aXNpYmxlPSExLFVJLmhpZGUobnVsbCwwKSxVSS5yZXNldCgpfSxtYXlQcmV2aW91czpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJnRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGh8fDEhPT10aGlzLl9wb3NpdGlvbn0scHJldmlvdXM6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlQcmV2aW91cygpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLnByZXZpb3VzKX0sbWF5TmV4dDpmdW5jdGlvbigpe3ZhciBpPXRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmaXx8aSYmMSE9PXRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dH0sbmV4dDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heU5leHQoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0KX0sZ2V0U3Vycm91bmRpbmdJbmRleGVzOmZ1bmN0aW9uKCl7aWYoIXRoaXMudmlld3MpcmV0dXJue307dmFyIGk9dGhpcy5fcG9zaXRpb24sZT10aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm57cHJldmlvdXM6aTw9MT9lOmktMSxuZXh0OmU8PWk/MTppKzF9fX0sS2V5Ym9hcmQ9e2VuYWJsZWQ6ITEsa2V5Q29kZTp7bGVmdDozNyxyaWdodDozOSxlc2M6Mjd9LGVuYWJsZTpmdW5jdGlvbihpKXt0aGlzLmRpc2FibGUoKSxpJiYoJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlEb3duLHRoaXMpKS5vbihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5VXAsdGhpcykpLHRoaXMuZW5hYmxlZD1pKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMSx0aGlzLl9vbktleVVwSGFuZGxlciYmKCQoZG9jdW1lbnQpLm9mZihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXIpLm9mZihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyKSx0aGlzLl9vbktleVVwSGFuZGxlcj10aGlzLl9vbktleURvd25IYW5kbGVyPW51bGwpfSxvbktleURvd246ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksZSl7Y2FzZVwibGVmdFwiOldpbmRvdy5wcmV2aW91cygpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6V2luZG93Lm5leHQoKX19fSxvbktleVVwOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGUpe2Nhc2VcImVzY1wiOldpbmRvdy5oaWRlKCl9fX0sZ2V0S2V5QnlLZXlDb2RlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZSBpbiB0aGlzLmtleUNvZGUpaWYodGhpcy5rZXlDb2RlW2VdPT09aSlyZXR1cm4gZTtyZXR1cm4gbnVsbH19LFBhZ2U9KExjPTAsTWM9e30sTmM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS10b3AgZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtYm90dG9tIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1sZWZ0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtcmlnaHQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKSwkLmV4dGVuZChPYy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudmlldz1pLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6MCxoZWlnaHQ6MH0sdGhpcy51aWQ9TGMrKyx0aGlzLl9wb3NpdGlvbj1lLHRoaXMuX3RvdGFsPXQsdGhpcy5fZnVsbENsaWNrPSExLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5xdWV1ZXM9e30sdGhpcy5xdWV1ZXMuc2hvd2hpZGU9JCh7fSl9LGNyZWF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9jcmVhdGVkKXtQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZVwiKS5hcHBlbmQodGhpcy5jb250YWluZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGFpbmVyXCIpKS5jc3Moe29wYWNpdHk6MH0pLmhpZGUoKSk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7aWYoaSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSkmJih0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuaW5mbz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiYodGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLHRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5wb3M9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5jYXB0aW9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5iYWNrZ3JvdW5kPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuY29udGVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50XCIpKSxcImltYWdlXCI9PXRoaXMudmlldy50eXBlJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6dGhpcy52aWV3LnVybH0pKSx0aGlzLmNvbnRlbnQuYXBwZW5kKE5jLmNsb25lKCEwKSkpLGkmJlwib3V0c2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSYmdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucG9zaXRpb25PdXRzaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksXCJpbnNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkpe3RoaXMuY29udGVudC5hcHBlbmQodGhpcy5wcmV2aW91c0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMubmV4dEluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5jbG9zZUluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksKHRoaXMudmlldy5jYXB0aW9ufHxpJiZ0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9uKSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbmZvSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8gZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXJJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMucG9zSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5jYXB0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLnZpZXcuY2FwdGlvbnx8IWl8fHRoaXMudmlldy5ncm91cGVkLmNhcHRpb258fHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5wb3NpdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1pbnNpZGUgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpO3ZhciBlPXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fDEhPXRoaXMuX3Bvc2l0aW9uLHQ9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8dGhpcy5fcG9zaXRpb248dGhpcy5fdG90YWw7dGhpcy5wcmV2aW91c0luc2lkZVsoZT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMubmV4dEluc2lkZVsodD9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpfSQuZWFjaChbXCJ4XCIsXCJ5XCJdLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvd1tlXSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmZsb3ctXCIrZSl9LHRoaXMpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLVwiK3RoaXMudmlldy50eXBlKSxUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLXZpZGVvXCIpLHRoaXMuX3RvdGFsPDImJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLXNpZGVzXCIpLHRoaXMuX2NyZWF0ZWQ9ITB9fSxfZ2V0U3Vycm91bmRpbmdQYWdlczpmdW5jdGlvbigpe3ZhciBpO2lmKCEoaT10aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkKSlyZXR1cm5bXTtmb3IodmFyIGU9W10sdD1NYXRoLm1heCgxLHRoaXMuX3Bvc2l0aW9uLWlbMF0pLHM9TWF0aC5taW4odGhpcy5fcG9zaXRpb24raVsxXSx0aGlzLl90b3RhbCksbj10aGlzLl9wb3NpdGlvbixvPW47bzw9cztvKyspKGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSk7Zm9yKG89bjt0PD1vO28tLSl7dmFyIGE7KGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSl9cmV0dXJuIGV9LHByZWxvYWRTdXJyb3VuZGluZ0ltYWdlczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2dldFN1cnJvdW5kaW5nUGFnZXMoKTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS5wcmVsb2FkKCl9LHRoaXMpKX0scHJlbG9hZDpmdW5jdGlvbigpe3RoaXMucHJlbG9hZGluZ3x8dGhpcy5wcmVsb2FkZWR8fFwiaW1hZ2VcIiE9dGhpcy52aWV3LnR5cGV8fCF0aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkfHx0aGlzLmxvYWRlZHx8KHRoaXMuY3JlYXRlKCksdGhpcy5wcmVsb2FkaW5nPSEwLHRoaXMucHJlbG9hZFJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCx0aGlzLnByZWxvYWRpbmc9ITEsdGhpcy5wcmVsb2FkZWQ9ITAsdGhpcy5kaW1lbnNpb25zPXt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9fSx0aGlzKSxudWxsLHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIn0pKX0sbG9hZDpmdW5jdGlvbihlLGkpe2lmKHRoaXMuY3JlYXRlKCksdGhpcy5sb2FkZWQpZSYmZSgpO2Vsc2Ugc3dpdGNoKHRoaXMuYWJvcnQoKSx0aGlzLmxvYWRpbmc9ITAsdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmKHRoaXMuX3NwaW5uZXJEZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtTcGlubmVyLnNob3coKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKSksdGhpcy52aWV3LnR5cGUpe2Nhc2VcImltYWdlXCI6aWYodGhpcy5lcnJvcilyZXR1cm4gdm9pZChlJiZlKCkpO3RoaXMuaW1hZ2VSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9KSxlJiZlKCl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLmltYWdlLmhpZGUoKSx0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLmVycm9yPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yIGZyLWNvbnRlbnQtZWxlbWVudFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3ItaWNvblwiKSkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1lcnJvclwiKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMuZXJyb3Iub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVycm9yLm91dGVySGVpZ2h0KCl9KSx0aGlzLmVycm9yLmNzcyh7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksZSYmZSgpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pO2JyZWFrO2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1JlYWR5PW5ldyBWaW1lb1JlYWR5KHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6aS5kaW1lbnNpb25zLmhlaWdodH0pLGUmJmUoKX0sdGhpcykpO2JyZWFrO2Nhc2VcInlvdXR1YmVcIjp0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMudmlldy5vcHRpb25zLndpZHRoLGhlaWdodDp0aGlzLnZpZXcub3B0aW9ucy5oZWlnaHR9KSxlJiZlKCl9fSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZGltZW5zaW9ucz1pLHRoaXMudmlldy5vcHRpb25zLm1heFdpZHRofHx0aGlzLnZpZXcub3B0aW9ucy5tYXhIZWlnaHQpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLHQ9e3dpZHRoOmUubWF4V2lkdGg/ZS5tYXhXaWR0aDp0aGlzLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmUubWF4SGVpZ2h0P2UubWF4SGVpZ2h0OnRoaXMuZGltZW5zaW9ucy5oZWlnaHR9O3RoaXMuZGltZW5zaW9ucz1GaXQud2l0aGluKHQsdGhpcy5kaW1lbnNpb25zKX19LF9tYXJrQXNMb2FkZWQ6ZnVuY3Rpb24oKXt0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMSx0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCxTcGlubmVyLmhpZGUobnVsbCxudWxsLHRoaXMuX3Bvc2l0aW9uKX0saXNWaWRlbzpmdW5jdGlvbigpe3JldHVybiBUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpfSxpbnNlcnRWaWRlbzpmdW5jdGlvbihpKXtpZighdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMuaXNWaWRlbygpKXt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9JC5leHRlbmQoe30sdGhpcy52aWV3Lm9wdGlvbnNbdGhpcy52aWV3LnR5cGVdfHx7fSkscz0kLnBhcmFtKHQpLG49e3ZpbWVvOmUrXCIvL3BsYXllci52aW1lby5jb20vdmlkZW8ve2lkfT97cXVlcnlTdHJpbmd9XCIseW91dHViZTplK1wiLy93d3cueW91dHViZS5jb20vZW1iZWQve2lkfT97cXVlcnlTdHJpbmd9XCJ9W3RoaXMudmlldy50eXBlXS5yZXBsYWNlKFwie2lkfVwiLHRoaXMudmlldy5fZGF0YS5pZCkucmVwbGFjZShcIntxdWVyeVN0cmluZ31cIixzKTt0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLnBsYXllcklmcmFtZT0kKFwiPGlmcmFtZSB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOm4saGVpZ2h0OnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLmhlaWdodCx3aWR0aDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy53aWR0aCxmcmFtZWJvcmRlcjowfSkpLGkmJmkoKX1lbHNlIGkmJmkoKX0scmFpc2U6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5lbGVtZW50WzBdLmxhc3RDaGlsZDtpJiZpPT09dGhpcy5lbGVtZW50WzBdfHxQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxzaG93OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMucXVldWVzLnNob3doaWRlO2kucXVldWUoW10pLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYhTWNbdGhpcy52aWV3LnVybF07U3Bpbm5lci5fdmlzaWJsZSYmIWUmJlNwaW5uZXIuaGlkZSgpLFBhZ2VzLnN0b3BJbmFjdGl2ZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnVwZGF0ZVVJKCksVUkuc2V0KHRoaXMuX3VpKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7S2V5Ym9hcmQuZW5hYmxlKHRoaXMudmlldy5vcHRpb25zLmtleWJvYXJkKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7U3Bpbm5lci5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLHRoaXMubG9hZCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMoKSxpKCl9LHRoaXMpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnJhaXNlKCksV2luZG93LnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksVUkuZW5hYmxlKCksdGhpcy5maXRUb0JveCgpLFdpbmRvdy5hZGp1c3RUb1Njcm9sbCgpLGkoKX0sdGhpcykpLHRoaXMuaXNWaWRlbygpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5pbnNlcnRWaWRlbygkLnByb3h5KGZ1bmN0aW9uKCl7aSgpfSkpfSx0aGlzKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luY3x8aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLmhpZGVJbmFjdGl2ZShpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0zLHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c7V2luZG93LnNldFNob3dpbmdUeXBlKHRoaXMudmlldy50eXBlKSxXaW5kb3cudmlzaWJsZXx8KHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyxcImZ1bmN0aW9uXCI9PT0kLnR5cGUodGhpcy52aWV3Lm9wdGlvbnMub25TaG93KSYmdGhpcy52aWV3Lm9wdGlvbnMub25TaG93LmNhbGwoRnJlc2NvKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luYyYmKGUrKyxQYWdlcy5oaWRlSW5hY3RpdmUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSkpLFdpbmRvdy5zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyksdGhpcy5fc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLFVJLmFkanVzdFByZXZOZXh0KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sV2luZG93Ll9maXJzdD8wOnQpLFdpbmRvdy5fZmlyc3Q/KFVJLnNob3cobnVsbCwwKSxXaW5kb3cuX2ZpcnN0PSExKTpVSS5zaG93KG51bGwsMCk7dmFyIHM9dGhpcy52aWV3Lm9wdGlvbnMuYWZ0ZXJQb3NpdGlvbjtcImZ1bmN0aW9uXCI9PT0kLnR5cGUocykmJnMuY2FsbChGcmVzY28sdGhpcy5fcG9zaXRpb24pfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGU9ITAsZSYmZSgpLGkoKX0sdGhpcykpfSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PVdpbmRvdy52aXNpYmxlP1wibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdzowO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5zaG93KCkuZmFkZVRvKHR8fDAsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMuZWxlbWVudCl7dGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuYWJvcnQoKTt2YXIgdD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LmhpZGU7dGhpcy5pc1ZpZGVvKCkmJih0PTApLHRoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwwLFwiZnJlc2NvRWFzZUluQ3ViaWNcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmhpZGUoKSx0aGlzLl92aXNpYmxlPSExLFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sc3RvcDpmdW5jdGlvbigpe3RoaXMucXVldWVzLnNob3doaWRlLnF1ZXVlKFtdKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5zdG9wKCEwKSx0aGlzLmFib3J0KCl9LHJlbW92ZVZpZGVvOmZ1bmN0aW9uKCl7dGhpcy5wbGF5ZXJJZnJhbWUmJih0aGlzLnBsYXllcklmcmFtZVswXS5zcmM9XCIvL2Fib3V0OmJsYW5rXCIsdGhpcy5wbGF5ZXJJZnJhbWUucmVtb3ZlKCksdGhpcy5wbGF5ZXJJZnJhbWU9bnVsbCl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpLHRoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5yZW1vdmUoKSx0aGlzLl90cmFjayYmKFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLl90cmFjaz0hMSksdGhpcy5wcmVsb2FkUmVhZHkmJih0aGlzLnByZWxvYWRSZWFkeS5hYm9ydCgpLHRoaXMucHJlbG9hZFJlYWR5PW51bGwsdGhpcy5wcmVsb2FkaW5nPW51bGwsdGhpcy5wcmVsb2FkZWQ9bnVsbCksdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnJlbW92ZWQ9ITB9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5pbWFnZVJlYWR5JiYodGhpcy5pbWFnZVJlYWR5LmFib3J0KCksdGhpcy5pbWFnZVJlYWR5PW51bGwpLHRoaXMudmltZW9SZWFkeSYmKHRoaXMudmltZW9SZWFkeS5hYm9ydCgpLHRoaXMudmltZW9SZWFkeT1udWxsKSx0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMX0sX2Fib3J0U3Bpbm5lckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fc3Bpbm5lckRlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX3NwaW5uZXJEZWxheSksdGhpcy5fc3Bpbm5lckRlbGF5PW51bGwpfSxfZ2V0SW5mb0hlaWdodDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOmNhc2VcImluc2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbiYmIWUpcmV0dXJuIDA7YnJlYWs7Y2FzZVwib3V0c2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbilyZXR1cm4gMH12YXIgdD1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztcIm91dHNpZGVcIj09PXRoaXMuX3VpJiYoaT1NYXRoLm1pbihpLFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkpO3ZhciBzLG49dFswXS5zdHlsZS53aWR0aDtyZXR1cm5cImluc2lkZVwiIT09dGhpcy5fdWkmJlwiZnVsbGNsaWNrXCIhPT10aGlzLl91aXx8KG49XCIxMDAlXCIpLHQuY3NzKHt3aWR0aDppK1wicHhcIn0pLHM9cGFyc2VGbG9hdCh0Lm91dGVySGVpZ2h0KCkpLHQuY3NzKHt3aWR0aDpufSksc30sX3doaWxlVmlzaWJsZTpmdW5jdGlvbihpLGUpe3ZhciB0PVtdLHM9V2luZG93LmVsZW1lbnQuYWRkKHRoaXMuZWxlbWVudCk7ZSYmKHM9cy5hZGQoZSkpLCQuZWFjaChzLGZ1bmN0aW9uKGksZSl7JChlKS5pcyhcIjp2aXNpYmxlXCIpfHx0LnB1c2goJChlKS5zaG93KCkpfSk7dmFyIG49dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3ZhciBvPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksaSgpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLG4mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLWNhcHRpb25cIiksb3x8dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksJC5lYWNoKHQsZnVuY3Rpb24oaSxlKXtlLmhpZGUoKX0pfSx1cGRhdGVGb3JjZWQ6ZnVuY3Rpb24oKXt0aGlzLmNyZWF0ZSgpLHRoaXMuX2Z1bGxDbGljaz10aGlzLnZpZXcub3B0aW9ucy5mdWxsQ2xpY2ssdGhpcy5fbm9PdmVyZmxvdz0hMSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4td2lkdGhcIikpJiYodGhpcy5fZnVsbENsaWNrPSEwKSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4taGVpZ2h0XCIpKSYmKHRoaXMuX25vT3ZlcmZsb3c9ITApfSx1cGRhdGVVSTpmdW5jdGlvbigpe3RoaXMudXBkYXRlRm9yY2VkKCk7dmFyIGk9dGhpcy5fZnVsbENsaWNrP1wiZnVsbGNsaWNrXCI6dGhpcy52aWV3Lm9wdGlvbnMudWk7dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXVpLVwiK3RoaXMuX3VpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1cIitpKSx0aGlzLl91aT1pfSxmaXRUb0JveDpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dGhpcy5lbGVtZW50O3ZhciB0PSQuZXh0ZW5kKHt9LFdpbmRvdy5nZXRCb3hEaW1lbnNpb25zKCkpLGk9JC5leHRlbmQoe30sdGhpcy5kaW1lbnNpb25zKSxlPXRoaXMuY29udGFpbmVyO3RoaXMudXBkYXRlVUkoKTt2YXIgcz17bGVmdDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctbGVmdFwiKSksdG9wOnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy10b3BcIikpfTtpZihcIm91dHNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLl9wb3NpdGlvbk91dHNpZGUpe3ZhciBuPTA7dGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbk91dHNpZGUuaXMoXCI6dmlzaWJsZVwiKSYmKG49dGhpcy5fcG9zaXRpb25PdXRzaWRlLm91dGVyV2lkdGgoITApKX0sdGhpcykpLG4+cy5sZWZ0JiYocy5sZWZ0PW4pfXQud2lkdGgtPTIqcy5sZWZ0LHQuaGVpZ2h0LT0yKnMudG9wO3ZhciBvLGEsaD17d2lkdGg6ITAsaGVpZ2h0OiEhdGhpcy5fbm9PdmVyZmxvd3x8IXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93Lnl9LHI9Rml0LndpdGhpbih0LGksaCksZD0kLmV4dGVuZCh7fSxyKSxsPSh0aGlzLmNvbnRlbnQsMCksdT1cImluc2lkZVwiPT09dGhpcy5fdWksYz11P3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm8scD11P3RoaXMuY2FwdGlvbkluc2lkZTp0aGlzLmNhcHRpb24sZj11P3RoaXMucG9zSW5zaWRlOnRoaXMucG9zLG09ISFwO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOnZhciB2PSQuZXh0ZW5kKHt9LGQpO3RoaXMuY2FwdGlvbiYmKGE9dGhpcy5jYXB0aW9uLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTwyOyl7bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpO3ZhciBlPXQuaGVpZ2h0LWQuaGVpZ2h0O2U8bCYmKGQ9Rml0LndpdGhpbih7d2lkdGg6ZC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoZC5oZWlnaHQtKGwtZSksMCl9LGQsaCkpLGkrK31sPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCksKCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiZsK2QuaGVpZ2h0PnQuaGVpZ2h0fHxjJiZcIm5vbmVcIj09PWMuY3NzKFwiZGlzcGxheVwiKXx8bD49LjUqZC5oZWlnaHQpJiYobT0hMSxsPTAsZD12KX0sdGhpcyksYSkpLGMmJmMuY3NzKHt3aWR0aDpkLndpZHRoK1wicHhcIn0pLG89e3dpZHRoOmQud2lkdGgsaGVpZ2h0OmQuaGVpZ2h0K2x9O2JyZWFrO2Nhc2VcImluc2lkZVwiOnRoaXMuY2FwdGlvbiYmKGE9cCx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpeyhsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCkpPj0uNDUqZC5oZWlnaHQmJihtPSExLGw9MCl9LHRoaXMpLGEpKSxvPWQ7YnJlYWs7Y2FzZVwiZnVsbGNsaWNrXCI6dmFyIGc9W107cCYmZy5wdXNoKHApLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoKHB8fGYpJiZjLmNzcyh7d2lkdGg6XCIxMDAlXCJ9KSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxwJiZsPi41KnQuaGVpZ2h0KWlmKG09ITEsZil7dmFyIGk9dGhpcy5jYXB0aW9uLmlzKFwiOnZpc2libGVcIik7dGhpcy5jYXB0aW9uLmhpZGUoKSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxpJiZ0aGlzLmNhcHRpb24uc2hvdygpfWVsc2UgbD0wO2Q9Rml0LndpdGhpbih7d2lkdGg6dC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoMCx0LmhlaWdodC1sKX0sZCxoKSxvPWR9LHRoaXMpLGcpLHRoaXMuY29udGVudC5jc3Moe1wicGFkZGluZy1ib3R0b21cIjowfSl9cCYmcFttP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuZWxlbWVudFsobT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1uby1jYXB0aW9uXCIpLHRoaXMuZWxlbWVudFsobT9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1oYXMtY2FwdGlvblwiKSx0aGlzLmNvbnRlbnQuY3NzKGQpLHRoaXMuYmFja2dyb3VuZC5jc3MobyksdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMucGxheWVySWZyYW1lLmF0dHIoZCksdGhpcy5vdmVybGFwPXt5Om8uaGVpZ2h0KyhcImZ1bGxjbGlja1wiPT09dGhpcy5fdWk/bDowKS1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHg6MH0sdGhpcy5fdHJhY2s9IXRoaXMuX25vT3ZlcmZsb3cmJnRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJjA8dGhpcy5vdmVybGFwLnksdGhpcy5faW5mb0hlaWdodD1sLHRoaXMuX3BhZGRpbmc9cyx0aGlzLl9jb250ZW50RGltZW5zaW9ucz1kLHRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zPW8sUGFnZXNbKHRoaXMuX3RyYWNrP1wic2V0XCI6XCJyZW1vdmVcIikrXCJUcmFja2luZ1wiXSh0aGlzLl9wb3NpdGlvbiksdGhpcy5wb3NpdGlvbigpfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3ZhciBpPXRoaXMuX2NvbnRlbnREaW1lbnNpb25zLGU9dGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnMsdD17dG9wOi41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqZS5oZWlnaHQsbGVmdDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqZS53aWR0aH0scz17dG9wOnQudG9wK2kuaGVpZ2h0LGxlZnQ6dC5sZWZ0fSxuPTAsbz1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOnQudG9wPS41KihXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQpLS41KmUuaGVpZ2h0LHM9e3RvcDpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQsbGVmdDowLGJvdHRvbTpcImF1dG9cIn0sbj10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnM9e3RvcDpcImF1dG9cIixsZWZ0OjAsYm90dG9tOjB9fWlmKDA8dGhpcy5vdmVybGFwLnkpe3ZhciBhPVBhZ2VzLmdldFhZUCgpO3N3aXRjaCh0LnRvcD0wLWEueSp0aGlzLm92ZXJsYXAueSx0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOmNhc2VcImZ1bGxjbGlja1wiOnMudG9wPVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjp2YXIgaD10LnRvcCtpLmhlaWdodC1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHI9LTEqdC50b3A7aWYocy5ib3R0b209aCx0aGlzLmNsb3NlSW5zaWRlLmNzcyh7dG9wOnJ9KSwxPHRoaXMuX3RvdGFsKXt2YXIgZD1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO2R8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbD10aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoXCJzdHlsZVwiKTt0aGlzLnByZXZpb3VzSW5zaWRlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgdT1wYXJzZUludCh0aGlzLnByZXZpb3VzSW5zaWRlLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMucHJldmlvdXNJbnNpZGUuYXR0cih7c3R5bGU6bH0pLGR8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYz10aGlzLnByZXZpb3VzSW5zaWRlLmFkZCh0aGlzLm5leHRJbnNpZGUpLHA9LjUqdGhpcy5vdmVybGFwLnk7Yy5jc3Moe1wibWFyZ2luLXRvcFwiOnUrKHItcCl9KSx0aGlzLnBvc2l0aW9uSW5zaWRlJiZ0aGlzLnBvc2l0aW9uSW5zaWRlLmNzcyh7Ym90dG9tOmh9KX19fWVsc2VcImluc2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5maW5kKFwiLmZyLWluZm8sIC5mci1zaWRlLCAuZnItY2xvc2UsIC5mci1wb3NpdGlvbi1pbnNpZGVcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpO28mJm8uY3NzKHMpLHRoaXMuY29udGFpbmVyLmNzcyh7Ym90dG9tOm59KSx0aGlzLmNvbnRlbnQuY3NzKHQpLHRoaXMuYmFja2dyb3VuZC5jc3ModCl9fX0pLE9jKSxMYyxNYyxOYztmdW5jdGlvbiBPYygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX12YXIgUGFnZXM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5wYWdlcz1bXSx0aGlzLnVpZD0xLHRoaXMuX3RyYWNraW5nPVtdfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMudmlld3M9aSx0aGlzLnJlbW92ZUFsbCgpLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnBhZ2VzLnB1c2gobmV3IFBhZ2UoZSxpKzEsdGhpcy52aWV3cy5sZW5ndGgpKX0sdGhpcykpfSxzaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpcy5wYWdlc1tpLTFdO3RoaXMucGFnZSYmdGhpcy5wYWdlLnVpZD09PXQudWlkfHwodGhpcy5wYWdlPXQsVGh1bWJuYWlscy5zaG93KGkpLFdpbmRvdy51cGRhdGVCb3hEaW1lbnNpb25zKCksdC5zaG93KCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKSl9LGdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXA6ZnVuY3Rpb24odCl7dmFyIHM9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnZpZXcuZWxlbWVudCYmZS52aWV3LmVsZW1lbnQ9PT10JiYocz1pKzEpfSksc30sZ2V0TG9hZGluZ0NvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLmxvYWRpbmcmJnQrK30pLHR9LHJlbW92ZUFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMucGFnZXM9W119LGhpZGVJbmFjdGl2ZTpmdW5jdGlvbih0LHMpe3ZhciBuPVtdOyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJm4ucHVzaChlKX0sdGhpcykpO3ZhciBvPTArbi5sZW5ndGg7cmV0dXJuIG88MT90JiZ0KCk6JC5lYWNoKG4sZnVuY3Rpb24oaSxlKXtlLmhpZGUoZnVuY3Rpb24oKXt0JiYtLW88MSYmdCgpfSxzKX0pLG4ubGVuZ3RofSxzdG9wSW5hY3RpdmU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZlLnN0b3AoKX0sdGhpcykpfSxzdG9wOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnN0b3AoKX0pfSxoYW5kbGVUcmFja2luZzpmdW5jdGlvbihpKXtCcm93c2VyLklFJiZCcm93c2VyLklFPDk/KHRoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpKTp0aGlzLl90cmFja2luZ190aW1lcj1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKX0sdGhpcyksMzApfSxjbGVhclRyYWNraW5nVGltZXI6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZ190aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLl90cmFja2luZ190aW1lciksdGhpcy5fdHJhY2tpbmdfdGltZXI9bnVsbCl9LHN0YXJ0VHJhY2tpbmc6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHx0aGlzLl9oYW5kbGVUcmFja2luZ3x8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmc9JC5wcm94eSh0aGlzLmhhbmRsZVRyYWNraW5nLHRoaXMpKX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7IVN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuX2hhbmRsZVRyYWNraW5nJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nKSx0aGlzLl9oYW5kbGVUcmFja2luZz1udWxsLHRoaXMuY2xlYXJUcmFja2luZ1RpbWVyKCkpfSxzZXRUcmFja2luZzpmdW5jdGlvbihpKXt0aGlzLmlzVHJhY2tpbmcoaSl8fCh0aGlzLl90cmFja2luZy5wdXNoKHRoaXMucGFnZXNbaS0xXSksMT09PXRoaXMuX3RyYWNraW5nLmxlbmd0aCYmdGhpcy5zdGFydFRyYWNraW5nKCkpfSxjbGVhclRyYWNraW5nOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmc9W119LHJlbW92ZVRyYWNraW5nOmZ1bmN0aW9uKGUpe3RoaXMuX3RyYWNraW5nPSQuZ3JlcCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpKXtyZXR1cm4gaS5fcG9zaXRpb24hPT1lfSksdGhpcy5fdHJhY2tpbmcubGVuZ3RoPDEmJnRoaXMuc3RvcFRyYWNraW5nKCl9LGlzVHJhY2tpbmc6ZnVuY3Rpb24odCl7dmFyIHM9ITE7cmV0dXJuICQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2lmKGUuX3Bvc2l0aW9uPT09dClyZXR1cm4hKHM9ITApfSksc30sc2V0WFk6ZnVuY3Rpb24oaSl7dGhpcy5feHk9aX0sZ2V0WFlQOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZSx0PSQuZXh0ZW5kKHt9LFdpbmRvdy5fYm94RGltZW5zaW9ucyksZT0kLmV4dGVuZCh7fSx0aGlzLl94eSk7ZS55LT0kKHdpbmRvdykuc2Nyb2xsVG9wKCksaSYmKFwib3V0c2lkZVwiPT09aS5fdWl8fFwiZnVsbGNsaWNrXCI9PT1pLl91aSkmJjA8aS5faW5mb0hlaWdodCYmKHQuaGVpZ2h0LT1pLl9pbmZvSGVpZ2h0KSxlLnktPVdpbmRvdy5fYm94UG9zaXRpb24udG9wO3ZhciBzPXt4OjAseTpNYXRoLm1pbihNYXRoLm1heChlLnkvdC5oZWlnaHQsMCksMSl9LG49e3g6XCJ3aWR0aFwiLHk6XCJoZWlnaHRcIn0sbz17fTtyZXR1cm4gJC5lYWNoKFwieVwiLnNwbGl0KFwiIFwiKSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7b1tlXT1NYXRoLm1pbihNYXRoLm1heCgyMC90W25bZV1dLDApLDEpLHNbZV0qPTErMipvW2VdLHNbZV0tPW9bZV0sc1tlXT1NYXRoLm1pbihNYXRoLm1heChzW2VdLDApLDEpfSx0aGlzKSksdGhpcy5zZXRYWVAocyksdGhpcy5feHlwfSxzZXRYWVA6ZnVuY3Rpb24oaSl7dGhpcy5feHlwPWl9LHVwZGF0ZVBvc2l0aW9uczpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nLmxlbmd0aDwxfHwkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtlLnBvc2l0aW9uKCl9KX19O2Z1bmN0aW9uIFZpZXcoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChWaWV3LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihvYmplY3Qpe3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30sZGF0YT17fTtpZihcInN0cmluZ1wiPT09JC50eXBlKG9iamVjdCkpb2JqZWN0PXt1cmw6b2JqZWN0fTtlbHNlIGlmKG9iamVjdCYmMT09PW9iamVjdC5ub2RlVHlwZSl7dmFyIGVsZW1lbnQ9JChvYmplY3QpO29iamVjdD17ZWxlbWVudDplbGVtZW50WzBdLHVybDplbGVtZW50LmF0dHIoXCJocmVmXCIpLGNhcHRpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tY2FwdGlvblwiKSxncm91cDplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSxleHRlbnNpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZXh0ZW5zaW9uXCIpLHR5cGU6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tdHlwZVwiKSxvcHRpb25zOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikmJmV2YWwoXCIoe1wiK2VsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikrXCJ9KVwiKXx8e319fXJldHVybiBvYmplY3QmJihvYmplY3QuZXh0ZW5zaW9ufHwob2JqZWN0LmV4dGVuc2lvbj1kZXRlY3RFeHRlbnNpb24ob2JqZWN0LnVybCkpLG9iamVjdC50eXBlfHwoZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpLG9iamVjdC5fZGF0YT1kYXRhLG9iamVjdC50eXBlPWRhdGEudHlwZSkpLG9iamVjdC5fZGF0YXx8KG9iamVjdC5fZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpKSxvYmplY3QmJm9iamVjdC5vcHRpb25zP29iamVjdC5vcHRpb25zPSQuZXh0ZW5kKCEwLCQuZXh0ZW5kKHt9LG9wdGlvbnMpLCQuZXh0ZW5kKHt9LG9iamVjdC5vcHRpb25zKSk6b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoe30sb3B0aW9ucyksb2JqZWN0Lm9wdGlvbnM9T3B0aW9ucy5jcmVhdGUob2JqZWN0Lm9wdGlvbnMsb2JqZWN0LnR5cGUsb2JqZWN0Ll9kYXRhKSwkLmV4dGVuZCh0aGlzLG9iamVjdCksdGhpc319KTt2YXIgU3Bpbm5lcj17c3VwcG9ydGVkOlN1cHBvcnQuY3NzLnRyYW5zZm9ybSYmU3VwcG9ydC5jc3MuYW5pbWF0aW9uLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW5uZXJcIikuaGlkZSgpO2Zvcih2YXIgZT0xO2U8PTEyO2UrKyl0aGlzLmVsZW1lbnQuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW4tXCIrZSkpO3RoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe1dpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc3VwcG9ydGVkJiYodGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMudXBkYXRlRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIitpKSx0aGlzLl9za2luPWkpfSx1cGRhdGVEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fYXR0YWNoZWQ7aXx8dGhpcy5hdHRhY2goKSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKX0saXx8dGhpcy5kZXRhY2goKX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzaG93OmZ1bmN0aW9uKGksZSl7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMuY2VudGVyKCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSx0KXt0aGlzLl92aXNpYmxlPSExO3ZhciBzPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5oaWRlfHwwLG49KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpzKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChufHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLGkmJmkoKX0sdGhpcykpfSxjZW50ZXI6ZnVuY3Rpb24oKXtpZih0aGlzLnN1cHBvcnRlZCl7dGhpcy5fZGltZW5zaW9uc3x8dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7dmFyIGk9UGFnZXMucGFnZSxlPTA7aSYmXCJmdWxsY2xpY2tcIj09PWkuX3VpJiZpLl93aGlsZVZpc2libGUoZnVuY3Rpb24oKXtlPWkuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKX0pLHRoaXMuZWxlbWVudC5jc3Moe3RvcDpXaW5kb3cuX2JveFBvc2l0aW9uLnRvcCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KnRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LS41KmUsbGVmdDpXaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQrLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KnRoaXMuX2RpbWVuc2lvbnMud2lkdGh9KX19fSxfRnJlc2NvPXtfZGlzYWJsZWQ6ITEsX2ZhbGxiYWNrOiEwLGluaXRpYWxpemU6ZnVuY3Rpb24oKXtXaW5kb3cuaW5pdGlhbGl6ZSgpLHRoaXMuX2Rpc2FibGVkfHx0aGlzLnN0YXJ0RGVsZWdhdGluZygpfSxzdGFydERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXJ8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPSQucHJveHkodGhpcy5kZWxlZ2F0ZSx0aGlzKSkub24oXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPSQucHJveHkodGhpcy5zZXRDbGlja1hZLHRoaXMpKX0sc3RvcERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXImJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXIpLm9mZihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXIpLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPW51bGwsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPW51bGwpfSxzZXRDbGlja1hZOmZ1bmN0aW9uKGkpe1BhZ2VzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSl9LGRlbGVnYXRlOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLl9kaXNhYmxlZCl7aS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9aS5jdXJyZW50VGFyZ2V0O3RoaXMuc2V0Q2xpY2tYWShpKSxfRnJlc2NvLnNob3coZSl9fSxzaG93OmZ1bmN0aW9uKG9iamVjdCl7aWYodGhpcy5fZGlzYWJsZWQpdGhpcy5zaG93RmFsbGJhY2suYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtlbHNle3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30scG9zaXRpb249YXJndW1lbnRzWzJdO2FyZ3VtZW50c1sxXSYmXCJudW1iZXJcIj09PSQudHlwZShhcmd1bWVudHNbMV0pJiYocG9zaXRpb249YXJndW1lbnRzWzFdLG9wdGlvbnM9e30pO3ZhciB2aWV3cz1bXSxvYmplY3RfdHlwZSxpc0VsZW1lbnQ9Xy5pc0VsZW1lbnQob2JqZWN0KTtzd2l0Y2gob2JqZWN0X3R5cGU9JC50eXBlKG9iamVjdCkpe2Nhc2VcInN0cmluZ1wiOmNhc2VcIm9iamVjdFwiOnZhciB2aWV3PW5ldyBWaWV3KG9iamVjdCxvcHRpb25zKSxfZGdvPVwiZGF0YS1mcmVzY28tZ3JvdXAtb3B0aW9uc1wiLGdyb3VwT3B0aW9ucz17fTtpZih2aWV3Lmdyb3VwKXtpZihpc0VsZW1lbnQpe3ZhciBlbGVtZW50cz0kKCcuZnJlc2NvW2RhdGEtZnJlc2NvLWdyb3VwPVwiJyskKG9iamVjdCkuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpKydcIl0nKTtlbGVtZW50cy5maWx0ZXIoXCJbXCIrX2RnbytcIl1cIikuZWFjaChmdW5jdGlvbihpLGVsZW1lbnQpeyQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChlbGVtZW50KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKX0pLGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oaSxlKXtwb3NpdGlvbnx8ZSE9PW9iamVjdHx8KHBvc2l0aW9uPWkrMSksdmlld3MucHVzaChuZXcgVmlldyhlLCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpfSl9fWVsc2UgaXNFbGVtZW50JiYkKG9iamVjdCkuaXMoXCJbXCIrX2RnbytcIl1cIikmJigkLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQob2JqZWN0KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKSx2aWV3PW5ldyBWaWV3KG9iamVjdCwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKSx2aWV3cy5wdXNoKHZpZXcpO2JyZWFrO2Nhc2VcImFycmF5XCI6JC5lYWNoKG9iamVjdCxmdW5jdGlvbihpLGUpe3ZhciB0PW5ldyBWaWV3KGUsb3B0aW9ucyk7dmlld3MucHVzaCh0KX0pfXZhciBncm91cEV4dGVuZD17Z3JvdXBlZDp7Y2FwdGlvbjohMX19LGZpcnN0VUk9dmlld3NbMF0ub3B0aW9ucy51aSxwb3NpdGlvbkluQVBHOyQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2UuY2FwdGlvbiYmKGdyb3VwRXh0ZW5kLmdyb3VwZWQuY2FwdGlvbj0hMCksMDxpJiZlLm9wdGlvbnMudWkhPT1maXJzdFVJJiYoZS5vcHRpb25zLnVpPWZpcnN0VUkpfSksJC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZT0kLmV4dGVuZChlLGdyb3VwRXh0ZW5kKX0pLCghcG9zaXRpb258fHBvc2l0aW9uPDEpJiYocG9zaXRpb249MSkscG9zaXRpb24+dmlld3MubGVuZ3RoJiYocG9zaXRpb249dmlld3MubGVuZ3RoKSxpc0VsZW1lbnQmJihwb3NpdGlvbkluQVBHPVBhZ2VzLmdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAob2JqZWN0KSk/V2luZG93LnNldFBvc2l0aW9uKHBvc2l0aW9uSW5BUEcpOldpbmRvdy5sb2FkKHZpZXdzLHBvc2l0aW9uKX19LHNob3dGYWxsYmFjazpmdW5jdGlvbihpKXtpZih0aGlzLl9mYWxsYmFjayl7dmFyIGU9ZnVuY3Rpb24gaShlKXt2YXIgdD0kLnR5cGUoZSk7cmV0dXJuXCJzdHJpbmdcIj09PXQ/ZTpcImFycmF5XCI9PT10JiZlWzBdP2koZVswXSk6Xy5pc0VsZW1lbnQoZSkmJiQoZSkuYXR0cihcImhyZWZcIik/JChlKS5hdHRyKFwiaHJlZlwiKTohIWUudXJsJiZlLnVybH0oaSk7ZSYmKHdpbmRvdy5sb2NhdGlvbi5ocmVmPWUpfX19OyQuZXh0ZW5kKEZyZXNjbyx7c2hvdzpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5zaG93LmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiBXaW5kb3cuaGlkZSgpLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5zdG9wRGVsZWdhdGluZygpLF9GcmVzY28uX2Rpc2FibGVkPSEwLHRoaXN9LGVuYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLl9kaXNhYmxlZD0hMSxfRnJlc2NvLnN0YXJ0RGVsZWdhdGluZygpLHRoaXN9LGZhbGxiYWNrOmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLl9mYWxsYmFjaz1pLHRoaXN9LHNldERlZmF1bHRTa2luOmZ1bmN0aW9uKGkpe3JldHVybiBPcHRpb25zLmRlZmF1bHRzLnNraW49aSx0aGlzfX0pLChCcm93c2VyLklFJiZCcm93c2VyLklFPDd8fFwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5BbmRyb2lkKSYmQnJvd3Nlci5BbmRyb2lkPDN8fEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuV2ViS2l0KSYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4KSYmKF9GcmVzY28uc2hvdz1fRnJlc2NvLnNob3dGYWxsYmFjayk7dmFyIFRodW1ibmFpbHM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIsdGhpcy5fdmFycz17dGh1bWJuYWlsOnt9LHRodW1ibmFpbEZyYW1lOnt9LHRodW1ibmFpbHM6e319LHRoaXMuYnVpbGQoKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nKCl9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLndyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy13cmFwcGVyXCIpLmFwcGVuZCh0aGlzLl9zbGlkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZXJcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtcHJldmlvdXNcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzX2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX3RodW1icz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXRodW1ic1wiKS5hcHBlbmQodGhpcy5fc2xpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZVwiKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtbmV4dFwiKS5hcHBlbmQodGhpcy5fbmV4dF9idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpKSl9LHN0YXJ0T2JzZXJ2aW5nOmZ1bmN0aW9uKCl7dGhpcy5fc2xpZGVyLmRlbGVnYXRlKFwiLmZyLXRodW1ibmFpbFwiLFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGU9JChpLnRhcmdldCkuY2xvc2VzdChcIi5mci10aHVtYm5haWxcIilbMF0sdD1lJiYkKGUpLmRhdGEoXCJmci1wb3NpdGlvblwiKTt0JiYodGhpcy5zZXRBY3RpdmUodCksV2luZG93LnNldFBvc2l0aW9uKHQpKX0sdGhpcykpLHRoaXMuX3NsaWRlci5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpfSksdGhpcy5fcHJldmlvdXMuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLnByZXZpb3VzUGFnZSx0aGlzKSksdGhpcy5fbmV4dC5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMubmV4dFBhZ2UsdGhpcykpfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMuY2xlYXIoKTt2YXIgdD1cImhvcml6b250YWxcIixzPSExOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtcInZlcnRpY2FsXCI9PT1lLm9wdGlvbnMudGh1bWJuYWlscyYmKHQ9XCJ2ZXJ0aWNhbFwiKSxlLm9wdGlvbnMudGh1bWJuYWlsc3x8KHM9ITApfSx0aGlzKSksdGhpcy5zZXRPcmllbnRhdGlvbih0KSx0aGlzLl9kaXNhYmxlZEdyb3VwPXMsJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMuX3RodW1ibmFpbHMucHVzaChuZXcgVGh1bWJuYWlsKGUsaSsxKSl9LHRoaXMpKSx0aGlzLmZpdFRvVmlld3BvcnQoKX0sY2xlYXI6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX3Bvc2l0aW9uPS0xLHRoaXMuX3BhZ2U9LTF9LHNldE9yaWVudGF0aW9uOmZ1bmN0aW9uKGkpe3RoaXMuX29yaWVudGF0aW9uJiZXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIrdGhpcy5fb3JpZW50YXRpb24pLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1cIitpKSx0aGlzLl9vcmllbnRhdGlvbj1pfSxkaXNhYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSEwfSxlbmFibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITF9LGVuYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5fZGlzYWJsZWR9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rpc2FibGVkfSx1cGRhdGVWYXJzOmZ1bmN0aW9uKCl7dmFyIGk9V2luZG93LmVsZW1lbnQsZT10aGlzLl92YXJzLHQ9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixzPXQ/XCJ0b3BcIjpcImxlZnRcIixuPXQ/XCJsZWZ0XCI6XCJ0b3BcIixvPXQ/XCJib3R0b21cIjpcImxlZnRcIixhPXQ/XCJ0b3BcIjpcInJpZ2h0XCIsaD10P1wid2lkdGhcIjpcImhlaWdodFwiLHI9dD9cImhlaWdodFwiOlwid2lkdGhcIixkPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIix0b3A6XCJib3R0b21cIixib3R0b206XCJ0b3BcIn07dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt2YXIgbD1pLmlzKFwiOnZpc2libGVcIik7aWYobHx8aS5zaG93KCksdGhpcy5kaXNhYmxlZCgpJiZ0aGlzLmVuYWJsZSgpLCF0aGlzLmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKXx8dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8Mnx8dGhpcy5fZGlzYWJsZWRHcm91cClyZXR1cm4gdGhpcy5kaXNhYmxlKCksJC5leHRlbmQodGhpcy5fdmFycy50aHVtYm5haWxzLHt3aWR0aDowLGhlaWdodDowfSksbHx8aS5oaWRlKCksdm9pZCB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3RoaXMuZW5hYmxlKCk7dmFyIHU9dGhpcy5fcHJldmlvdXMsYz10aGlzLl9uZXh0LHA9Qm91bmRzLnZpZXdwb3J0KCksZj10aGlzLmVsZW1lbnRbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUocildKCksbT1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIitzKSl8fDAsdj1NYXRoLm1heChmLTIqbSwwKSxnPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK24pKXx8MCx3PShwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK28pKXx8MCkrKHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrYSkpfHwwKTskLmV4dGVuZChlLnRodW1ibmFpbHMse2hlaWdodDpmK3csd2lkdGg6cFt0P1wid2lkdGhcIjpcImhlaWdodFwiXSxwYWRkaW5nVG9wOm19KSwkLmV4dGVuZChlLnRodW1ibmFpbCx7aGVpZ2h0OnYsd2lkdGg6dn0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsRnJhbWUse3dpZHRoOnYrMipnLGhlaWdodDpmfSksZS5zaWRlcz17cHJldmlvdXM6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfSxuZXh0Ont3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH19O3ZhciBiPXBbaF0seT1lLnRodW1ibmFpbEZyYW1lLndpZHRoLHg9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7ZS50aHVtYm5haWxzLndpZHRoPWIsZS5zaWRlcy5lbmFibGVkPTE8eCp5L2I7dmFyIGs9YixDPWUuc2lkZXMsUz1DLnByZXZpb3VzLFc9Qy5uZXh0LE09Uy5tYXJnaW5MZWZ0K1Mud2lkdGgrUy5tYXJnaW5SaWdodCtXLm1hcmdpbkxlZnQrVy53aWR0aCtXLm1hcmdpblJpZ2h0O2Uuc2lkZXMuZW5hYmxlZCYmKGstPU0pO3ZhciBUPXgqeTtUPChrPU1hdGguZmxvb3Ioay95KSp5KSYmKGs9VCk7dmFyIEk9aysoZS5zaWRlcy5lbmFibGVkP006MCk7ZS5pcHA9TWF0aC5yb3VuZChrL3kpLHRoaXMuX21vZGU9XCJwYWdlXCIsZS5pcHA8PTEmJihJPWs9YixlLnNpZGVzLmVuYWJsZWQ9ITEsdGhpcy5fbW9kZT1cImNlbnRlclwiKSxlLnBhZ2VzPU1hdGguY2VpbCh4KnkvayksZS53cmFwcGVyPXt3aWR0aDpJKzEsaGVpZ2h0OmZ9LGUudGh1bWJzPXt3aWR0aDprLGhlaWdodDpmfSxlLnNsaWRlPXt3aWR0aDp4KnkrMSxoZWlnaHQ6Zn0sbHx8aS5oaWRlKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKX0saGlkZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZSgpLHRoaXMudGh1bWJuYWlscy5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247cmV0dXJue3dpZHRoOmk/dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoOnRoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQsaGVpZ2h0Omk/dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodDp0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGh9fSxmaXRUb1ZpZXdwb3J0OmZ1bmN0aW9uKCl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIGk9JC5leHRlbmQoe30sdGhpcy5fdmFycyksZT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uOyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZXNpemUoKX0pLHRoaXMuX3ByZXZpb3VzW2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl9uZXh0W2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl90aHVtYnMuY3NzKHt3aWR0aDppLnRodW1ic1tlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS50aHVtYnNbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLl9zbGlkZS5jc3Moe3dpZHRoOmkuc2xpZGVbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkuc2xpZGVbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KTt2YXIgdD17d2lkdGg6aS53cmFwcGVyW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLndyYXBwZXJbZT9cImhlaWdodFwiOlwid2lkdGhcIl19O3RbXCJtYXJnaW4tXCIrKGU/XCJsZWZ0XCI6XCJ0b3BcIildPU1hdGgucm91bmQoLS41Kmkud3JhcHBlci53aWR0aCkrXCJweFwiLHRbXCJtYXJnaW4tXCIrKGU/XCJ0b3BcIjpcImxlZnRcIildPTAsdGhpcy53cmFwcGVyLmNzcyh0KSx0aGlzLl9wb3NpdGlvbiYmdGhpcy5tb3ZlVG8odGhpcy5fcG9zaXRpb24sITApfX0sbW92ZVRvUGFnZTpmdW5jdGlvbihpKXtpZighKGk8MXx8aT50aGlzLl92YXJzLnBhZ2VzfHxpPT09dGhpcy5fcGFnZSkpe3ZhciBlPXRoaXMuX3ZhcnMuaXBwKihpLTEpKzE7dGhpcy5tb3ZlVG8oZSl9fSxwcmV2aW91c1BhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZS0xKX0sbmV4dFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZSsxKX0sc2hvdzpmdW5jdGlvbihpKXt2YXIgZT10aGlzLl9wb3NpdGlvbjwwO2k8MSYmKGk9MSk7dmFyIHQ9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7dDxpJiYoaT10KSx0aGlzLl9wb3NpdGlvbj1pLHRoaXMuc2V0QWN0aXZlKGkpLFwicGFnZVwiPT09dGhpcy5fbW9kZSYmdGhpcy5fcGFnZT09PU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKXx8dGhpcy5tb3ZlVG8oaSxlKX0sbW92ZVRvOmZ1bmN0aW9uKGksZSl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIHQscyxuPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24sbz0uNSpCb3VuZHMudmlld3BvcnQoKVtuP1wid2lkdGhcIjpcImhlaWdodFwiXSxhPXRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGg7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtzPU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKSx0aGlzLl9wYWdlPXMsdD1hKih0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKi0xO3ZhciBoPVwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1kaXNhYmxlZFwiO3RoaXMuX3ByZXZpb3VzX2J1dHRvblsoczwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKSx0aGlzLl9uZXh0X2J1dHRvblsocz49dGhpcy5fdmFycy5wYWdlcz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCl9ZWxzZSB0PW8rLTEqKGEqKGktMSkrLjUqYSk7cz1QYWdlcy5wYWdlO3ZhciByPXt9LGQ9e307cltuP1widG9wXCI6XCJsZWZ0XCJdPTAsZFtuP1wibGVmdFwiOlwidG9wXCJdPXQrXCJweFwiLHRoaXMuX3NsaWRlLnN0b3AoITApLmNzcyhyKS5hbmltYXRlKGQsZT8wOnMmJnMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlscy5zbGlkZXx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5sb2FkQ3VycmVudFBhZ2UoKX0sdGhpcykpfX0sbG9hZEN1cnJlbnRQYWdlOmZ1bmN0aW9uKCl7dmFyIGksZTtpZih0aGlzLl9wb3NpdGlvbiYmdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCYmISh0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwxKSl7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtpZih0aGlzLl9wYWdlPDEpcmV0dXJuO2k9KHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHArMSxlPU1hdGgubWluKGktMSt0aGlzLl92YXJzLmlwcCx0aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9ZWxzZXt2YXIgdD1NYXRoLmNlaWwodGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoL3RoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgpO2k9TWF0aC5tYXgoTWF0aC5mbG9vcihNYXRoLm1heCh0aGlzLl9wb3NpdGlvbi0uNSp0LDApKSwxKSxlPU1hdGguY2VpbChNYXRoLm1pbih0aGlzLl9wb3NpdGlvbisuNSp0KSksdGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8ZSYmKGU9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWZvcih2YXIgcz1pO3M8PWU7cysrKXRoaXMuX3RodW1ibmFpbHNbcy0xXS5sb2FkKCl9fSxzZXRBY3RpdmU6ZnVuY3Rpb24oaSl7dGhpcy5fc2xpZGUuZmluZChcIi5mci10aHVtYm5haWwtYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKTt2YXIgZT1pJiZ0aGlzLl90aHVtYm5haWxzW2ktMV07ZSYmZS5hY3RpdmF0ZSgpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb24mJnRoaXMuc2V0UG9zaXRpb24odGhpcy5fcG9zaXRpb24pfX07ZnVuY3Rpb24gVGh1bWJuYWlsKCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVGh1bWJuYWlsLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudmlldz1pLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5wcmVCdWlsZCgpfSxwcmVCdWlsZDpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbFwiKS5kYXRhKFwiZnItcG9zaXRpb25cIix0aGlzLl9wb3NpdGlvbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYoIXRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPXRoaXMudmlldy5vcHRpb25zO1RodW1ibmFpbHMuX3NsaWRlLmFwcGVuZCh0aGlzLnRodW1ibmFpbEZyYW1lPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1mcmFtZVwiKS5hcHBlbmQodGhpcy50aHVtYm5haWwuYXBwZW5kKHRoaXMudGh1bWJuYWlsV3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtd3JhcHBlclwiKSkpKSxcImltYWdlXCI9PT10aGlzLnZpZXcudHlwZSYmdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci1sb2FkLXRodW1ibmFpbFwiKS5kYXRhKFwidGh1bWJuYWlsXCIse3ZpZXc6dGhpcy52aWV3LHNyYzppLnRodW1ibmFpbHx8dGhpcy52aWV3LnVybH0pO3ZhciBlPWkudGh1bWJuYWlsJiZpLnRodW1ibmFpbC5pY29uO2UmJnRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaWNvbiBmci10aHVtYm5haWwtaWNvbi1cIitlKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5sb2FkaW5nPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZy1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5zcGlubmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyXCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXItc3BpblwiKSkpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYm9yZGVyXCIpKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zdGF0ZVwiKSksdGhpcy5yZXNpemUoKX19LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsRnJhbWUmJih0aGlzLnRodW1ibmFpbEZyYW1lLnJlbW92ZSgpLHRoaXMudGh1bWJuYWlsRnJhbWU9bnVsbCx0aGlzLmltYWdlPW51bGwpLHRoaXMucmVhZHkmJih0aGlzLnJlYWR5LmFib3J0KCksdGhpcy5yZWFkeT1udWxsKSx0aGlzLnZpbWVvVGh1bWJuYWlsJiYodGhpcy52aW1lb1RodW1ibmFpbC5hYm9ydCgpLHRoaXMudmltZW9UaHVtYm5haWw9bnVsbCksdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9yZW1vdmVkPSEwLHRoaXMudmlldz1udWxsLHRoaXMuX2NsZWFyRGVsYXkoKX0sbG9hZDpmdW5jdGlvbigpe2lmKCEodGhpcy5fbG9hZGVkfHx0aGlzLl9sb2FkaW5nfHx0aGlzLl9yZW1vdmVkKSl7dGhpcy50aHVtYm5haWxXcmFwcGVyfHx0aGlzLmJ1aWxkKCksdGhpcy5fbG9hZGluZz0hMDt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy50aHVtYm5haWwsZT1pJiZcImJvb2xlYW5cIj09PSQudHlwZShpKT90aGlzLnZpZXcudXJsOml8fHRoaXMudmlldy51cmw7aWYodGhpcy5fdXJsPWUpaWYoXCJ2aW1lb1wiPT09dGhpcy52aWV3LnR5cGUpaWYoZT09PWkpdGhpcy5fdXJsPWUsdGhpcy5fbG9hZCh0aGlzLl91cmwpO2Vsc2Ugc3dpdGNoKHRoaXMudmlldy50eXBlKXtjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9UaHVtYm5haWw9bmV3IFZpbWVvVGh1bWJuYWlsKHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl91cmw9aSx0aGlzLl9sb2FkKGkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykpfWVsc2UgdGhpcy5fbG9hZCh0aGlzLl91cmwpfX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIil9LF9sb2FkOmZ1bmN0aW9uKGkpe3RoaXMudGh1bWJuYWlsV3JhcHBlci5wcmVwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpLmF0dHIoe3NyYzppfSkuY3NzKHtvcGFjaXR5OjFlLTR9KSksdGhpcy5mYWRlSW5TcGlubmVyKCksdGhpcy5yZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5pbWc7dGhpcy50aHVtYm5haWxGcmFtZSYmdGhpcy5fbG9hZGluZyYmKHRoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOmUubmF0dXJhbFdpZHRoLGhlaWdodDplLm5hdHVyYWxIZWlnaHR9LHRoaXMucmVzaXplKCksdGhpcy5zaG93KCkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KX0sX2Vycm9yOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZXJyb3JcIiksdGhpcy5pbWFnZSYmdGhpcy5pbWFnZS5oaWRlKCksdGhpcy50aHVtYm5haWxXcmFwcGVyLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikpLHRoaXMuc2hvdygpfSxmYWRlSW5TcGlubmVyOmZ1bmN0aW9uKCl7aWYoU3Bpbm5lci5zdXBwb3J0ZWQmJnRoaXMudmlldy5vcHRpb25zLnNwaW5uZXIpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLl9kZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNwaW5uZXIuc3RvcCghMCkuZmFkZVRvKGkuc2hvd3x8MCwxKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKX19LHNob3c6ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5sb2FkaW5nLnN0b3AoITApLmRlbGF5KGkuZGVsYXkpLmZhZGVUbyhpLnNob3csMCl9LF9jbGVhckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fZGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpLHRoaXMuX2RlbGF5PW51bGwpfSxyZXNpemU6ZnVuY3Rpb24oKXtpZih0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO2lmKHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt3aWR0aDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3RvcDppPzA6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSksbGVmdDppP1RodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpOjB9KSx0aGlzLnRodW1ibmFpbFdyYXBwZXIpe3ZhciBlPVRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsO2lmKHRoaXMudGh1bWJuYWlsLmNzcyh7d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHQsXCJtYXJnaW4tdG9wXCI6TWF0aC5yb3VuZCgtLjUqZS5oZWlnaHQpLFwibWFyZ2luLWxlZnRcIjpNYXRoLnJvdW5kKC0uNSplLndpZHRoKSxcIm1hcmdpbi1ib3R0b21cIjowLFwibWFyZ2luLXJpZ2h0XCI6MH0pLHRoaXMuX2RpbWVuc2lvbnMpe3ZhciB0LHM9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxuPU1hdGgubWF4KHMud2lkdGgscy5oZWlnaHQpLG89JC5leHRlbmQoe30sdGhpcy5fZGltZW5zaW9ucyk7aWYoby53aWR0aD5zLndpZHRoJiZvLmhlaWdodD5zLmhlaWdodCl7dmFyIGE9MSxoPTE7KHQ9Rml0LndpdGhpbihzLG8pKS53aWR0aDxzLndpZHRoJiYoYT1zLndpZHRoL3Qud2lkdGgpLHQuaGVpZ2h0PHMuaGVpZ2h0JiYoaD1zLmhlaWdodC90LmhlaWdodCk7dmFyIHI9TWF0aC5tYXgoYSxoKTsxPHImJih0LndpZHRoKj1yLHQuaGVpZ2h0Kj1yKSwkLmVhY2goXCJ3aWR0aCBoZWlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oaSxlKXt0W2VdPU1hdGgucm91bmQodFtlXSl9KX1lbHNlIHQ9Rml0LndpdGhpbih0aGlzLl9kaW1lbnNpb25zLG8ud2lkdGg8cy53aWR0aHx8by5oZWlnaHQ8cy5oZWlnaHQ/e3dpZHRoOm4saGVpZ2h0Om59OnMpO3ZhciBkPU1hdGgucm91bmQoLjUqcy53aWR0aC0uNSp0LndpZHRoKSxsPU1hdGgucm91bmQoLjUqcy5oZWlnaHQtLjUqdC5oZWlnaHQpO3RoaXMuaW1hZ2UucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcygkLmV4dGVuZCh7fSx0LHt0b3A6bCxsZWZ0OmR9KSl9fX19fSk7dmFyIFVJPXtfbW9kZXM6W1wiZnVsbGNsaWNrXCIsXCJvdXRzaWRlXCIsXCJpbnNpZGVcIl0sX3VpOiExLF92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3I6W1wiLmZyLWNvbnRlbnQtZWxlbWVudFwiLFwiLmZyLWNvbnRlbnRcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZVwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlIC5mci1zdHJva2UtY29sb3JcIl0uam9pbihcIiwgXCIpLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzW2VdLmluaXRpYWxpemUoKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktaW5zaWRlLWhpZGRlbiBmci11aS1mdWxsY2xpY2staGlkZGVuXCIpfSxzZXQ6ZnVuY3Rpb24oaSl7dGhpcy5fdWkmJihXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy11aS1cIit0aGlzLl91aSksT3ZlcmxheS5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS11aS1cIit0aGlzLl91aSkpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXVpLVwiK2kpLE92ZXJsYXkuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktdWktXCIraSksdGhpcy5fZW5hYmxlZCYmdGhpcy5fdWkmJnRoaXMuX3VpIT09aSYmKHRoaXNbdGhpcy5fdWldLmRpc2FibGUoKSx0aGlzW2ldLmVuYWJsZSgpLFVJW2ldLnNob3coKSksdGhpcy5fdWk9aX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5zaG93KCl9LGVuYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV1bZT09PXRoaXMuX3VpP1wiZW5hYmxlXCI6XCJkaXNhYmxlXCJdKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSEwfSxkaXNhYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5kaXNhYmxlKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSExfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5hZGp1c3RQcmV2TmV4dChpLGUpfSxzaG93OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLnNob3coaSxlKX0saGlkZTpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5oaWRlKGksZSl9LHJlc2V0OmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5yZXNldCgpfSx0aGlzKSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmdGhpcy5zZXQoaS5fdWkpfX07cmV0dXJuIFVJLmZ1bGxjbGljaz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2UtZnVsbGNsaWNrXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMucmVzZXRQcmV2TmV4dCgpLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxyZXNldFByZXZOZXh0OmZ1bmN0aW9uKCl7dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLnN0b3AoITApLnJlbW92ZUF0dHIoXCJzdHlsZVwiKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtzfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIG49dGhpcy5fcHJldmlvdXMuYXR0cihcInN0eWxlXCIpO3RoaXMuX3ByZXZpb3VzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgbz1wYXJzZUludCh0aGlzLl9wcmV2aW91cy5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLl9wcmV2aW91cy5hdHRyKHtzdHlsZTpufSksc3x8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBhPXQuX2luZm9IZWlnaHR8fDAsaD10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkscj17XCJtYXJnaW4tdG9wXCI6by0uNSphfSxkPVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvd3x8MDt0aGlzLm9wZW5pbmcmJihkPTApLGguc3RvcCghMCkuYW5pbWF0ZShyLGQsaSksdGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLGhbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZihlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpc3dpdGNoKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpKWlmKDEhPT1QYWdlcy5wYWdlcy5sZW5ndGgpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX1lbHNlIFdpbmRvdy5oaWRlKCl9LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3LnR5cGU7dGhpcy5fdmlzaWJsZSYmKCFlfHxcInlvdXR1YmVcIiE9PWUmJlwidmltZW9cIiE9PWUpJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktZnVsbGNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkuaW5zaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7fSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5fb25Nb3VzZUxlYXZlKGkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5jbGVhclRpbWVyKCl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuX3BhZ2VzLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIpLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudC1lbGVtZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpKXtpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGUmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1pbnNpZGVcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1pbnNpZGVcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5vdXRzaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktb3V0c2lkZVwiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KTt0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksc1sodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LHNob3c6ZnVuY3Rpb24oKXtCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCl9LGhpZGU6ZnVuY3Rpb24oKXt9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe319LCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGkpe19GcmVzY28uaW5pdGlhbGl6ZSgpfSksRnJlc2NvfSk7IiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuaW1wb3J0IEZyZXNjbyBmcm9tICcuL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZU1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG5cbiAgfVxufVxuXG4vKipcbiAqIENhcm91c2VsIGNyZWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKCkge1xuICBpZiAoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjgwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykgJiYgIWpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbIFxuICAgICAgICB7IFxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCwgXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfSBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsIFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIiBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogWyBcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsIFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH0gXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LCBcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIHZhciBzbGlkZXIgPSAkKCcjcHJvZHVjdEdhbGxlcnknKTtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIHNsaWRlclswXS5zbGljayAmJiBzbGlkZXJbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBzbGlkZXIuc2xpY2sob3B0cyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNpbWFnZXMtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcjcHJvZHVjdC1zdGlja3knKS5oZWlnaHQoKSAtICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtIDI0ID49IC0oJCgnI2ltYWdlcy1jb250YWluZXInKS5vZmZzZXQoKS50b3ApKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lOm5vdCgudmFyaWFudC1kaXNhYmxlZCknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEwMDApIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWVnYW1lbnUgZnVuY3Rpb25zXG4gKiAuaGFzLW1lZ2FtZW51IHRvIHVzZSBkcm9wZG93biBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gbWVnYW1lbnVGdW5jdGlvbnMoKSB7XG4gIC8vIEJ1dHRvbiBob3ZlciBzaW11bGF0ZXMgY2xpY2sgb24gaXRcbiAgJCgnI21lbnVCdXR0b25NYWluLCAjbWVnYW1lbnVEcm9wZG93bicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDk5Mikge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMDI0KSB7XG4gICAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgIH0gZWxzZSBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgICAgICQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gOTkyKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgfSBlbHNlIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI21haW5Db250ZW50Q29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gOTkyKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMDMzKSB7XG4gICAgICAgICQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICBpZiAoJCgnI25hdmJhck1haW5Nb2JpbGUnKS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lZ2FtZW51IGZ1bmN0aW9ucyA6IG1hbmFnZSBtb2JpbGUgbWVudVxuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcblxuICAkKCdhLm5hdi10YXhvbicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykrJyBpbWcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZycpLmhpZGUoKTtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiI25hdmJhck1haW5Nb2JpbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJCgnLmFjdGl2ZS5sb2NhbGUtbGluaywgLm5hdmJhclRheG9uc0xpbmssIC5sb2ctbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKHRoaXMpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI29wZW5BY2NvdW50TWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQoJy5sb2ctbGluaycpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgfSk7XG5cbiAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJY29uZXNGdW5jdGlvbnMoKSB7XG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSA5OTIpIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKVxuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDk5Mikge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplTWVudShlbGVtZW50KSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gOTkyKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG4gICAgXG4gIHJlc2l6ZU1lbnUob2ZmY2FudmFzX2lkKTtcblxuICAkKG9mZmNhbnZhc19pZCkuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5hZGRDbGFzcygnc2hvdycpO1xuICBcbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1GdW5jdGlvbnMoKSB7XG4gIGlmKCQoJy5sb2dpbi1mb3JtJykgfHwgJCgnLnJlZ2lzdGVyLWZvcm0nKSkge1xuICAgICQoJy5idG4tZm9ybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50ICsgJyBidXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoJCgnLnZlcmlmeS1hY2NvdW50JykpIHtcbiAgICAkKCcudmVyaWZ5LWFjY291bnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogU2hhcmUgZnVuY3Rpb24gXG4gKi9cbmZ1bmN0aW9uIHNoYXJlRnVuY3Rpb25zKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmVEcm9wZG93bicpKSB7XG4gICAgalF1ZXJ5KCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpO1xuICAgIC8vIEZhY2Vib29rIFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHdpblRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAoMzUwIC8gMik7XG4gICAgICBjb25zdCB3aW5MZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKDYwMCAvIDIpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5kYXRhc2V0LnVybDtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jyt1cmwsICdGYWNlYm9vayAtIE5vYmxlenogU2hvcCcsICd0b3A9JyArIHdpblRvcCArICcsbGVmdD0nICsgd2luTGVmdCArICcsdG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPTYwMCxoZWlnaHQ9MzUwJyk7XG4gICAgfSk7XG5cbiAgICAvLyBQaW50ZXJlc3QgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGludGVyZXN0U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsUGludGVyZXN0U2hhcmUnKS5jbGljaygpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDb3B5IHRvIENsaXBib2FyZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMaW5rJyk7XG4gICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZW5hYmxlJyk7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dC52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyBcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpOyBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9yZGVyc0dyaWRGdW5jdGlvbnMoKSB7XG4gIC8vIERlc2t0b3AgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJ3RyJywgdGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gIC8vIE1vYmlsZSBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmFkZENsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJy5hcnJvdy1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2Lm9yZGVyLWRldGFpbHMnKS5wcmV2KCdkaXYnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9naW5QYWdlRnVuY3Rpb25zKCkge1xuICAkKCcucmVzZXQtcGFzc3dvcmQtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQodGhpcykuZGF0YSgnbW9kYWxJZCcpO1xuICAgICQobW9kYWxJZCkubW9kYWwoJ3Nob3cnKTtcbiAgICAkKCcuaGVhZGVyLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVzaXplQ29udGVudCgpIHtcbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgc2hhcmVGdW5jdGlvbnMoKTtcbiAgcmVzaXplTWVudSgkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTiBcbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7ICAgXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcbiAgLy8gTWVudSBGdW5jdGlvbnNcbiAgbWVnYW1lbnVGdW5jdGlvbnMoKTtcbiAgbWVudUljb25lc0Z1bmN0aW9ucygpO1xuXG4gIGZvcm1GdW5jdGlvbnMoKTtcbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2VGdW5jdGlvbnMoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9XG4gIC8vIFNob3cgbW9iaWxlIG1lbnUgYWZ0ZXIgcGFnZSBpcyBsb2FkZWRcbiAgJCgnLm1vYmlsZS1vZmZjYW52YXMnKS5zaG93KCk7XG59XG5cbmV4cG9ydCB7IGluaXQsIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG5pbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uNmEwMjEwOWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLjUzM2JmZDAzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2FyZC5jZDQyYjE5Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuMTNhYjAxZGYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uNzI2NjM0MzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9kZWxpdmVyeS10cnVjay41YzFhM2NhMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOTYzYjI2YjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjFlM2NjMGQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci42NDk1NDFjYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZ2IuOGFiZjgxZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LmFhOTIzNjZiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbG9nby5iNjk5NjA1My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuODBlOTU1ZjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5Ljk0NzFhY2RmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbmV4dC43MjA4OTE5OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC4zZWMxNmIxNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JldHVybi1wb2xpY3kuYTRkNTEwOWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43NTQ3YThiNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNDlhZGY1NGMucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==