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
  $('.active.locale-link, .navbarTaxonsLink').on('click', function (e) {
    const divToOpen = $(this).data('divToOpen');
    $('.navbar > div').hide();
    $(divToOpen).show();
    $('#menuButtonMain .close').hide();
    $('#menuButtonMain .back').css('display', 'block');
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
  $('.menu-icones .btn-group.dropdown:last').on('mouseenter', function () {
    if (!$('.dropdown-menu', this).hasClass('show')) {
      $('a.dropdown-icon', this).trigger('click');
    }
  }).on('mouseleave', function () {
    if ($('.dropdown-menu', this).hasClass('show')) {
      $('a.dropdown-icon', this).trigger('click');
    }
  });
}

function resizeMenu(element) {
  if ($(document).width() > 992) {
    closeMobileMenu();
  } else {
    const headerHeight = $('#headerContainer').height() - $('.header-banner').height();
    const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
    $(element).css('top', headerHeight + 'px');
    $(element).css('height', 'calc(100% - ' + headerHeight + 'px)');
    $(element + ' #menuMobileLinks').css('bottom', headerHeight + 'px');
    $('.screen-overlay').css('top', headerOuterHeight + 'px');
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

  $('.dropdown-menu:not(.login-dropdown, .cart-dropdown)').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  shareFunctions();
  productFunctions(); // Menu Functions

  megamenuFunctions();
  menuIconesFunctions();
  resizeMainContainer();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  replaceCarouselArrow();

  if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }
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

/***/ "./themes/NoblessTheme/assets/media/icon-en.png":
/*!******************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/icon-en.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/icon-en.8abf81e8.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwidmFsdWUiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJmb3JtIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwidmFsIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsImNvdW50cnlTZWxlY3QiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHJ5Q29kZSIsImNvbnRlbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJvbnNjcm9sbCIsImZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0IiwicHJvZHVjdEZ1bmN0aW9ucyIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImRpdlRvT3BlbiIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJyZXNpemVNZW51IiwiaGVhZGVySGVpZ2h0IiwiaGVhZGVyT3V0ZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJzaGFyZUZ1bmN0aW9ucyIsInRvb2x0aXAiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInN5bGl1c0JpbGxpbmdBZGRyZXNzIiwiZWxlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtCQUFqTixFQUEyTkMsY0FBM04sRUFBbU9DLHdCQUFuTyxFQUFnUEMsb0JBQWhQOztBQUNBQyx3QkFBSUMsS0FBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7OztBQUNBOzs7Ozs7QUFaQTs7Ozs7Ozs7O0FBU0E7QUFLQSxNQUFNQyxlQUFlLEdBQUlDLEVBQUQsSUFBUTtBQUM5QixRQUFNQyxPQUFPLEdBQUdELEVBQWhCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHRCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsUUFBckIsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDRSxZQUFSLENBQXFCLGVBQXJCLENBQXBCO0FBQ0EsUUFBTUUsaUJBQWlCLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixDQUFzQiwrQkFBdEIsQ0FBMUI7QUFFQUwsU0FBTyxDQUFDTSxnQkFBUixDQUF5QixRQUF6QixFQUFvQ0MsQ0FBRCxJQUFPO0FBQ3hDLFVBQU1DLE9BQU8sR0FBR0MsZ0JBQU1D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SSxJQUFJMW1CLHNCQUFKLENBQWlCMG1CLElBQWpCLENBQTlELEVBNUNrRCxDQThDbEQ7O0FBQ0EsTUFBSS9wQixRQUFRLENBQUM1RSxhQUFULENBQXVCLDZDQUF2QixDQUFKLEVBQTJFO0FBQUUsUUFBSXlJLDZCQUFKO0FBQTRCLEdBL0N2RCxDQWlEbEQ7OztBQUNBO0FBQ0QsQ0FuREQsRTs7Ozs7Ozs7Ozs7QUNoQ0EsbUU7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhUXVlc3Rpb25DaXJjbGUsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlLmVycm9ycztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBwYXJzZUtleSA9IGZ1bmN0aW9uIHBhcnNlS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhfXFx3KS9nLCB3b3JkcyA9PiB3b3Jkc1sxXS50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmNvbnN0IFN5bGl1c0FkZHJlc3NCb29rID0gZnVuY3Rpb24gU3lsaXVzQWRkcmVzc0Jvb2soZWwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICBjb25zdCBmaW5kQnlOYW1lID0gZnVuY3Rpb24gZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWUqPSR7cGFyc2VLZXkobmFtZSl9XWApO1xuICB9O1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2hvaWNlID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgY2hvaWNlRGF0YSA9IHt9O1xuXG4gICAgICBbLi4uY2hvaWNlLmF0dHJpYnV0ZXNdLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKGF0dHIubmFtZS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxDYXNlZCA9IGF0dHIubmFtZS5yZXBsYWNlKCdkYXRhLScsICcnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBnID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY2hvaWNlRGF0YVtjYW1lbENhc2VkXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHByb3ZpbmNlQ29kZSwgcHJvdmluY2VOYW1lIH0gPSBjaG9pY2VEYXRhO1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnW2RhdGEtanMtYWRkcmVzcy1ib29rXScpLnF1ZXJ5U2VsZWN0b3IoJy5wcm92aW5jZS1jb250YWluZXInKTtcblxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VEYXRhKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZpbmRCeU5hbWUocHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdjb3VudHJ5Q29kZScpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICBjb25zdCBleGlzdHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUNvZGVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlQ29kZScpO1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VOYW1lRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgICAgICAgaWYgKCFwcm92aW5jZUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgIGlmIChwcm92aW5jZUNvZGVGaWVsZCAmJiBwcm92aW5jZUNvZGVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlQ29kZSAhPT0gJycgfHwgcHJvdmluY2VDb2RlICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZUNvZGVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlQ29kZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aW5jZU5hbWVGaWVsZCAmJiBwcm92aW5jZU5hbWVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlTmFtZSAhPT0gJycgfHwgcHJvdmluY2VOYW1lICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZU5hbWVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlTmFtZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRyZXNzQm9vaztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiwgcmVzaXplQ29udGVudCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCAnLi9pbmRleEJvb3RzdHJhcFRoZW1lJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcblxuLyogQ3NzIGZpbGVzICovXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbi8qIE1lZGlhIGZpbGVzICovXG5pbXBvcnQgJy4vbWVkaWEvbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JldHVybi1wb2xpY3kucG5nJztcbmltcG9ydCAnLi9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tYXN0ZXJjYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvdmlzYS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3BheXBhbC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NvbGlzc2ltby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2Nocm9ub3Bvc3QucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYWNjb3VudC1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9iYWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbmV4dC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZnIucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWRlLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1pdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZXMucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVuLnBuZyc7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcbndpbmRvdy5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcblxuIiwiLyoqXG4gKiBGcmVzY28gLSBBIEJlYXV0aWZ1bCBSZXNwb25zaXZlIExpZ2h0Ym94IC0gdjIuMy4wXG4gKiAoYykgMjAxMi0yMDE5IE5pY2sgU3Rha2VuYnVyZ1xuICpcbiAqIGh0dHBzOi8vd3d3LmZyZXNjb2pzLmNvbVxuICpcbiAqIEBsaWNlbnNlOiBodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wXG4gKi9cbiFmdW5jdGlvbihpLGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImpxdWVyeVwiKSk6aS5GcmVzY289ZShqUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKCQpe3ZhciBGcmVzY289e307JC5leHRlbmQoRnJlc2NvLHt2ZXJzaW9uOlwiMi4zLjBcIn0pLEZyZXNjby5Ta2lucz17ZnJlc2NvOnt9fTt2YXIgQm91bmRzPXt2aWV3cG9ydDpmdW5jdGlvbigpe3ZhciBpPXt3aWR0aDokKHdpbmRvdykud2lkdGgoKX07aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZCYmQnJvd3Nlci5HZWNrbyl7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoO2kuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCplfWVsc2UgaS5oZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3JldHVybiBpfX0sQnJvd3Nlcj0oZT1uYXZpZ2F0b3IudXNlckFnZW50LHtJRTohKCF3aW5kb3cuYXR0YWNoRXZlbnR8fC0xIT09ZS5pbmRleE9mKFwiT3BlcmFcIikpJiZmKFwiTVNJRSBcIiksT3BlcmE6LTE8ZS5pbmRleE9mKFwiT3BlcmFcIikmJighIXdpbmRvdy5vcGVyYSYmb3BlcmEudmVyc2lvbiYmcGFyc2VGbG9hdChvcGVyYS52ZXJzaW9uKCkpfHw3LjU1KSxXZWJLaXQ6LTE8ZS5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpJiZmKFwiQXBwbGVXZWJLaXQvXCIpLEdlY2tvOi0xPGUuaW5kZXhPZihcIkdlY2tvXCIpJiYtMT09PWUuaW5kZXhPZihcIktIVE1MXCIpJiZmKFwicnY6XCIpLE1vYmlsZVNhZmFyaTohIWUubWF0Y2goL0FwcGxlLipNb2JpbGUuKlNhZmFyaS8pLENocm9tZTotMTxlLmluZGV4T2YoXCJDaHJvbWVcIikmJmYoXCJDaHJvbWUvXCIpLENocm9tZU1vYmlsZTotMTxlLmluZGV4T2YoXCJDck1vXCIpJiZmKFwiQ3JNby9cIiksQW5kcm9pZDotMTxlLmluZGV4T2YoXCJBbmRyb2lkXCIpJiZmKFwiQW5kcm9pZCBcIiksSUVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiSUVNb2JpbGVcIikmJmYoXCJJRU1vYmlsZS9cIil9KSxlO2Z1bmN0aW9uIGYoaSl7dmFyIHQ9bmV3IFJlZ0V4cChpK1wiKFtcXFxcZC5dKylcIikuZXhlYyhlKTtyZXR1cm4hdHx8cGFyc2VGbG9hdCh0WzFdKX12YXIgX3NsaWNlPUFycmF5LnByb3RvdHlwZS5zbGljZTtmdW5jdGlvbiBiYXNlVG9TdHJpbmcoaSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGk/aTpudWxsPT1pP1wiXCI6aStcIlwifXZhciBfPXtpc0VsZW1lbnQ6ZnVuY3Rpb24oaSl7cmV0dXJuIGkmJjE9PT1pLm5vZGVUeXBlfSxTdHJpbmc6e2NhcGl0YWxpemU6ZnVuY3Rpb24oaSl7cmV0dXJuKGk9YmFzZVRvU3RyaW5nKGkpKSYmaS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnNsaWNlKDEpfX19OyQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIixmdW5jdGlvbihpKXt2YXIgZTtpZihpLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YT9lPWkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhLzEyMDppLm9yaWdpbmFsRXZlbnQuZGV0YWlsJiYoZT0taS5vcmlnaW5hbEV2ZW50LmRldGFpbC8zKSxlKXt2YXIgdD0kLkV2ZW50KFwiZnJlc2NvOm1vdXNld2hlZWxcIik7JChpLnRhcmdldCkudHJpZ2dlcih0LGUpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaS5zdG9wUHJvcGFnYXRpb24oKSx0LmlzRGVmYXVsdFByZXZlbnRlZCgpJiZpLnByZXZlbnREZWZhdWx0KCl9fSk7dmFyIEZpdD17d2l0aGluOmZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0PSQuZXh0ZW5kKHtoZWlnaHQ6ITAsd2lkdGg6ITB9LGFyZ3VtZW50c1syXXx8e30pLHM9JC5leHRlbmQoe30sZSksbj0xLG89NSxhPXQud2lkdGgsaD10LmhlaWdodDswPG8mJihhJiZzLndpZHRoPmkud2lkdGh8fGgmJnMuaGVpZ2h0PmkuaGVpZ2h0KTspe3ZhciByPTEsZD0xO2EmJnMud2lkdGg+aS53aWR0aCYmKHI9aS53aWR0aC9zLndpZHRoKSxoJiZzLmhlaWdodD5pLmhlaWdodCYmKGQ9aS5oZWlnaHQvcy5oZWlnaHQpLG49TWF0aC5taW4ocixkKSxzPXt3aWR0aDplLndpZHRoKm4saGVpZ2h0OmUuaGVpZ2h0Km59LG8tLX1yZXR1cm4gcy53aWR0aD1NYXRoLm1heChzLndpZHRoLDApLHMuaGVpZ2h0PU1hdGgubWF4KHMuaGVpZ2h0LDApLHN9fTskLmV4dGVuZCgkLmVhc2luZyx7ZnJlc2NvRWFzZUluQ3ViaWM6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcyooZS89bikqZSplK3R9LGZyZXNjb0Vhc2VJblNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4tcypNYXRoLmNvcyhlL24qKE1hdGguUEkvMikpK3MrdH0sZnJlc2NvRWFzZU91dFNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcypNYXRoLnNpbihlL24qKE1hdGguUEkvMikpK3R9fSk7dmFyIFN1cHBvcnQ9KE89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxQPVwiV2Via2l0IE1veiBPIG1zIEtodG1sXCIuc3BsaXQoXCIgXCIpLHtjYW52YXM6KGJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksISghYmEuZ2V0Q29udGV4dHx8IWJhLmdldENvbnRleHQoXCIyZFwiKSkpLGNzczp7YW5pbWF0aW9uOlMoXCJhbmltYXRpb25cIiksdHJhbnNmb3JtOlMoXCJ0cmFuc2Zvcm1cIikscHJlZml4ZWQ6ZnVuY3Rpb24oaSl7cmV0dXJuIFMoaSxcInByZWZpeFwiKX19LHN2ZzohIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyYmISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QsdG91Y2g6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl9Y2F0Y2goaSl7cmV0dXJuITF9fSgpfSksYmEsTyxQO2Z1bmN0aW9uIFMoaSxlKXt2YXIgdD1pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc3Vic3RyKDEpO3JldHVybiBmdW5jdGlvbihpLGUpe2Zvcih2YXIgdCBpbiBpKWlmKHZvaWQgMCE9PU8uc3R5bGVbaVt0XV0pcmV0dXJuXCJwcmVmaXhcIiE9PWV8fGlbdF07cmV0dXJuITF9KChpK1wiIFwiK1Auam9pbih0K1wiIFwiKSt0KS5zcGxpdChcIiBcIiksZSl9U3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaD1mdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2g9U3VwcG9ydC50b3VjaCYmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWR8fEJyb3dzZXIuSUVNb2JpbGV8fEJyb3dzZXIuQ2hyb21lTW9iaWxlfHwhL14oV2lufE1hY3xMaW51eCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSl9LFN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2goKTt2YXIgSW1hZ2VSZWFkeT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07ZnVuY3Rpb24gVGltZXJzKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfWZ1bmN0aW9uIGdldFVSSURhdGEocyl7dmFyIG49e3R5cGU6XCJpbWFnZVwifTtyZXR1cm4gJC5lYWNoKFR5cGVzLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5kYXRhKHMpO3QmJigobj10KS50eXBlPWksbi51cmw9cyl9KSxufWZ1bmN0aW9uIGRldGVjdEV4dGVuc2lvbihpKXt2YXIgZT0oaXx8XCJcIikucmVwbGFjZSgvXFw/LiovZyxcIlwiKS5tYXRjaCgvXFwuKFteLl17Myw0fSkkLyk7cmV0dXJuIGU/ZVsxXS50b0xvd2VyQ2FzZSgpOm51bGx9JC5leHRlbmQoSW1hZ2VSZWFkeS5wcm90b3R5cGUse3N1cHBvcnRzOntuYXR1cmFsV2lkdGg6XCJuYXR1cmFsV2lkdGhcImluIG5ldyBJbWFnZX0saW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5pbWc9JChpKVswXSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMuaXNMb2FkZWQ9ITEsdGhpcy5vcHRpb25zPSQuZXh0ZW5kKHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixwb2xsRmFsbGJhY2tBZnRlcjoxZTN9LGFyZ3VtZW50c1szXXx8e30pLHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRoJiZcIm9ubG9hZFwiIT09dGhpcy5vcHRpb25zLm1ldGhvZD90aGlzLmltZy5jb21wbGV0ZSYmXCJ1bmRlZmluZWRcIiE9PSQudHlwZSh0aGlzLmltZy5uYXR1cmFsV2lkdGgpP3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpezA8dGhpcy5pbWcubmF0dXJhbFdpZHRoP3RoaXMuc3VjY2VzcygpOnRoaXMuZXJyb3IoKX0sdGhpcykpOigkKHRoaXMuaW1nKS5iaW5kKFwiZXJyb3JcIiwkLnByb3h5KGZ1bmN0aW9uKCl7c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lcnJvcigpfSx0aGlzKSl9LHRoaXMpKSx0aGlzLmludGVydmFscz1bWzFlMywxMF0sWzJlMyw1MF0sWzRlMywxMDBdLFsyZTQsNTAwXV0sdGhpcy5faXBvcz0wLHRoaXMuX3RpbWU9MCx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXSx0aGlzLnBvbGwoKSk6c2V0VGltZW91dCgkLnByb3h5KHRoaXMuZmFsbGJhY2ssdGhpcykpfSxwb2xsOmZ1bmN0aW9uKCl7dGhpcy5fcG9sbGluZz1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtpZigwPHRoaXMuaW1nLm5hdHVyYWxXaWR0aCl0aGlzLnN1Y2Nlc3MoKTtlbHNle2lmKHRoaXMuX3RpbWUrPXRoaXMuX2RlbGF5LHRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmdGhpcy5fdGltZT49dGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiYhdGhpcy5fdXNlZFBvbGxGYWxsYmFjayYmKHRoaXMuX3VzZWRQb2xsRmFsbGJhY2s9ITAsdGhpcy5mYWxsYmFjaygpKSx0aGlzLl90aW1lPnRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzBdKXtpZighdGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvcysxXSlyZXR1cm4gdm9pZCB0aGlzLmVycm9yKCk7dGhpcy5faXBvcysrLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdfXRoaXMucG9sbCgpfX0sdGhpcyksdGhpcy5fZGVsYXkpfSxmYWxsYmFjazpmdW5jdGlvbigpe3ZhciBpPW5ldyBJbWFnZTsodGhpcy5fZmFsbGJhY2tJbWc9aSkub25sb2FkPSQucHJveHkoZnVuY3Rpb24oKXtpLm9ubG9hZD1mdW5jdGlvbigpe30sdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGh8fCh0aGlzLmltZy5uYXR1cmFsV2lkdGg9aS53aWR0aCx0aGlzLmltZy5uYXR1cmFsSGVpZ2h0PWkuaGVpZ2h0KSx0aGlzLnN1Y2Nlc3MoKX0sdGhpcyksaS5vbmVycm9yPSQucHJveHkodGhpcy5lcnJvcix0aGlzKSxpLnNyYz10aGlzLmltZy5zcmN9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5fZmFsbGJhY2tJbWcmJih0aGlzLl9mYWxsYmFja0ltZy5vbmxvYWQ9ZnVuY3Rpb24oKXt9KSx0aGlzLl9wb2xsaW5nJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3BvbGxpbmcpLHRoaXMuX3BvbGxpbmc9bnVsbCl9LHN1Y2Nlc3M6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRTdWNjZXNzfHwodGhpcy5fY2FsbGVkU3VjY2Vzcz0hMCx0aGlzLmlzTG9hZGVkPSEwLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKHRoaXMpKX0sZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRFcnJvcnx8KHRoaXMuX2NhbGxlZEVycm9yPSEwLHRoaXMuYWJvcnQoKSx0aGlzLmVycm9yQ2FsbGJhY2smJnRoaXMuZXJyb3JDYWxsYmFjayh0aGlzKSl9fSksJC5leHRlbmQoVGltZXJzLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX3RpbWVycz17fX0sc2V0OmZ1bmN0aW9uKGksZSx0KXt0aGlzLl90aW1lcnNbaV09c2V0VGltZW91dChlLHQpfSxnZXQ6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXMuX3RpbWVyc1tpXX0sY2xlYXI6ZnVuY3Rpb24oaSl7aT90aGlzLl90aW1lcnNbaV0mJihjbGVhclRpbWVvdXQodGhpcy5fdGltZXJzW2ldKSxkZWxldGUgdGhpcy5fdGltZXJzW2ldKTp0aGlzLmNsZWFyQWxsKCl9LGNsZWFyQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RpbWVycyxmdW5jdGlvbihpLGUpe2NsZWFyVGltZW91dChlKX0pLHRoaXMuX3RpbWVycz17fX19KTt2YXIgVHlwZT17aXNWaWRlbzpmdW5jdGlvbihpKXtyZXR1cm4vXih5b3V0dWJlfHZpbWVvKSQvLnRlc3QoaSl9fSxUeXBlcz17aW1hZ2U6e2V4dGVuc2lvbnM6XCJibXAgZ2lmIGpwZWcganBnIHBuZyB3ZWJwXCIsZGV0ZWN0OmZ1bmN0aW9uKGkpe3JldHVybi0xPCQuaW5BcnJheShkZXRlY3RFeHRlbnNpb24oaSksdGhpcy5leHRlbnNpb25zLnNwbGl0KFwiIFwiKSl9LGRhdGE6ZnVuY3Rpb24oaSl7cmV0dXJuISF0aGlzLmRldGVjdCgpJiZ7ZXh0ZW5zaW9uOmRldGVjdEV4dGVuc2lvbihpKX19fSx2aW1lbzp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8odmltZW9cXC5jb20pXFwvKFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpO3JldHVybiEoIWV8fCFlWzJdKSYmZVsyXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19LHlvdXR1YmU6e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC93YXRjaFxcPyg/PS4qdmk/PShbYS16QS1aMC05LV9dKykpKD86XFxTKyk/JC8uZXhlYyhpKTtyZXR1cm4gZSYmZVsyXT9lWzJdOiEoIShlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLyh2aT9cXC98dVxcL3xlbWJlZFxcLyk/KFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpKXx8IWVbM10pJiZlWzNdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX19LFZpbWVvVGh1bWJuYWlsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy51cmw9aSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGkuZGF0YS51cmwpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2lmKGkmJmkudGh1bWJuYWlsX3VybCl7dmFyIGU9e3VybDppLnRodW1ibmFpbF91cmx9O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGUudXJsKX1lbHNlIHRoaXMuZXJyb3JDYWxsYmFjaygpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksVmltZW9SZWFkeT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnVybD1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLmNhbGxiYWNrKGkuZGF0YSk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImbWF4d2lkdGg9OTk5OTk5OSZtYXhoZWlnaHQ9OTk5OTk5OSZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT17ZGltZW5zaW9uczp7d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHR9fTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrKGUpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksT3B0aW9ucz17ZGVmYXVsdHM6e2VmZmVjdHM6e2NvbnRlbnQ6e3Nob3c6MCxoaWRlOjB9LHNwaW5uZXI6e3Nob3c6MTUwLGhpZGU6MTUwfSx3aW5kb3c6e3Nob3c6NDQwLGhpZGU6MzAwfSx0aHVtYm5haWw6e3Nob3c6MzAwLGRlbGF5OjE1MH0sdGh1bWJuYWlsczp7c2xpZGU6MH19LGtleWJvYXJkOntsZWZ0OiEwLHJpZ2h0OiEwLGVzYzohMH0sbG9hZGVkTWV0aG9kOlwibmF0dXJhbFdpZHRoXCIsbG9vcDohMSxvbkNsaWNrOlwicHJldmlvdXMtbmV4dFwiLG92ZXJmbG93OiExLG92ZXJsYXk6e2Nsb3NlOiEwfSxwcmVsb2FkOlsxLDJdLHBvc2l0aW9uOiEwLHNraW46XCJmcmVzY29cIixzcGlubmVyOiEwLHNwaW5uZXJEZWxheTozMDAsc3luYzohMCx0aHVtYm5haWxzOlwiaG9yaXpvbnRhbFwiLHVpOlwib3V0c2lkZVwiLHVpRGVsYXk6M2UzLHZpbWVvOnthdXRvcGxheToxLGFwaToxLHRpdGxlOjEsYnlsaW5lOjEscG9ydHJhaXQ6MCxsb29wOjB9LHlvdXR1YmU6e2F1dG9wbGF5OjEsY29udHJvbHM6MSxlbmFibGVqc2FwaToxLGhkOjEsaXZfbG9hZF9wb2xpY3k6Myxsb29wOjAsbW9kZXN0YnJhbmRpbmc6MSxyZWw6MCx2cTpcImhkMTA4MFwifSxpbml0aWFsVHlwZU9wdGlvbnM6e2ltYWdlOnt9LHZpbWVvOnt3aWR0aDoxMjgwfSx5b3V0dWJlOnt3aWR0aDoxMjgwLGhlaWdodDo3MjB9fX0sY3JlYXRlOmZ1bmN0aW9uKGksZSx0KXt0PXR8fHt9LChpPWl8fHt9KS5za2luPWkuc2tpbnx8dGhpcy5kZWZhdWx0cy5za2luO3ZhciBzPWkuc2tpbj8kLmV4dGVuZCh7fSxGcmVzY28uU2tpbnNbaS5za2luXXx8RnJlc2NvLlNraW5zW3RoaXMuZGVmYXVsdHMuc2tpbl0pOnt9LG49JC5leHRlbmQoITAse30sdGhpcy5kZWZhdWx0cyxzKTtuLmluaXRpYWxUeXBlT3B0aW9ucyYmKGUmJm4uaW5pdGlhbFR5cGVPcHRpb25zW2VdJiYobj0kLmV4dGVuZCghMCx7fSxuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSxuKSksZGVsZXRlIG4uaW5pdGlhbFR5cGVPcHRpb25zKTt2YXIgbz0kLmV4dGVuZCghMCx7fSxuLGkpO2lmKFN1cHBvcnQubW9iaWxlVG91Y2gmJlwiaW5zaWRlXCI9PT1vLnVpJiYoby51aT1cIm91dHNpZGVcIiksKCFvLmVmZmVjdHN8fEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSkmJihvLmVmZmVjdHM9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMuZWZmZWN0cyxmdW5jdGlvbihlLGkpeyQuZWFjaChvLmVmZmVjdHNbZV09JC5leHRlbmQoe30saSksZnVuY3Rpb24oaSl7by5lZmZlY3RzW2VdW2ldPTB9KX0pLG8uc3Bpbm5lcj0hMSksby5rZXlib2FyZCYmKFwiYm9vbGVhblwiPT09JC50eXBlKG8ua2V5Ym9hcmQpJiYoby5rZXlib2FyZD17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5rZXlib2FyZCxmdW5jdGlvbihpLGUpe28ua2V5Ym9hcmRbaV09ITB9KSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwkLmV4dGVuZChvLmtleWJvYXJkLHtsZWZ0OiExLHJpZ2h0OiExfSkpLCFvLm92ZXJmbG93fHxTdXBwb3J0Lm1vYmlsZVRvdWNoP28ub3ZlcmZsb3c9e3g6ITEseTohMX06XCJib29sZWFuXCI9PT0kLnR5cGUoby5vdmVyZmxvdykmJihvLm92ZXJmbG93PXt4OiExLHk6ITB9KSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fChvLm92ZXJsYXA9ITEpLChCcm93c2VyLklFJiZCcm93c2VyLklFPDl8fFN1cHBvcnQubW9iaWxlVG91Y2gpJiYoby50aHVtYm5haWw9ITEsby50aHVtYm5haWxzPSExKSxcInlvdXR1YmVcIiE9PWUmJihvLndpZHRoJiYhby5tYXhXaWR0aCYmKG8ubWF4V2lkdGg9by53aWR0aCksby5oZWlnaHQmJiFvLm1heEhlaWdodCYmKG8ubWF4SGVpZ2h0PW8uaGVpZ2h0KSksIW8udGh1bWJuYWlsJiZcImJvb2xlYW5cIiE9PSQudHlwZShvLnRodW1ibmFpbCkpe3ZhciBhPSExO3N3aXRjaChlKXtjYXNlXCJ5b3V0dWJlXCI6YT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiK1wiLy9pbWcueW91dHViZS5jb20vdmkvXCIrdC5pZCtcIi8wLmpwZ1wiO2JyZWFrO2Nhc2VcImltYWdlXCI6Y2FzZVwidmltZW9cIjphPSEwfW8udGh1bWJuYWlsPWF9cmV0dXJuIG99fSxPdmVybGF5PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMudmlzaWJsZT0hMX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheVwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXktYmFja2dyb3VuZFwiKSksdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZpLnZpZXcmJmkudmlldy5vcHRpb25zLm92ZXJsYXkmJiFpLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHxXaW5kb3cuaGlkZSgpfSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIrdGhpcy5za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIraSksdGhpcy5za2luPWl9LGF0dGFjaDpmdW5jdGlvbigpeyQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5kZXRhY2goKX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLm1heCgpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSl7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZXx8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQoc3x8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSx0aGlzLnZpc2libGU9ITEsaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LGdldFNjcm9sbERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgbj17fTtyZXR1cm4gJC5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oaSxlKXt2YXIgdD1lLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSkscz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7bltlXT0oQnJvd3Nlci5JRT9NYXRoLm1heChzW1wib2Zmc2V0XCIrdF0sc1tcInNjcm9sbFwiK3RdKTpCcm93c2VyLldlYktpdD9kb2N1bWVudC5ib2R5W1wic2Nyb2xsXCIrdF06c1tcInNjcm9sbFwiK3RdKXx8MH0pLG59LG1heDpmdW5jdGlvbigpe3ZhciBpO2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZCcm93c2VyLldlYktpdCYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4JiYoaT10aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuY3NzKGkpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpe3ZhciBlPUJvdW5kcy52aWV3cG9ydCgpO3RoaXMuZWxlbWVudC5jc3Moe2hlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRofSl9U3VwcG9ydC5tb2JpbGVUb3VjaCYmIWkmJnRoaXMuZWxlbWVudC5jc3Moe2hlaWdodDp0aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKS5oZWlnaHR9KX19LFdpbmRvdz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzPVtdLHRoaXMucXVldWVzLmhpZGU9JCh7fSksdGhpcy5wYWdlcz1bXSx0aGlzLl90cmFja2luZz1bXSx0aGlzLl9maXJzdD0hMCx0aGlzLnRpbWVycz1uZXcgVGltZXJzLHRoaXMuYnVpbGQoKSx0aGlzLnNldFNraW4oT3B0aW9ucy5kZWZhdWx0cy5za2luKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZih0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItd2luZG93IGZyLW1lYXN1cmVkXCIpLmhpZGUoKS5hcHBlbmQodGhpcy5fYm94PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWJveFwiKS5hcHBlbmQodGhpcy5fcGFnZXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZXNcIikpKS5hcHBlbmQodGhpcy5fdGh1bWJuYWlscz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzXCIpKSxPdmVybGF5LmluaXRpYWxpemUoKSxQYWdlcy5pbml0aWFsaXplKHRoaXMuX3BhZ2VzKSxUaHVtYm5haWxzLmluaXRpYWxpemUodGhpcy5fdGh1bWJuYWlscyksU3Bpbm5lci5pbml0aWFsaXplKCksVUkuaW5pdGlhbGl6ZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQubW9iaWxlVG91Y2g/XCJcIjpcIi1ub1wiKStcIi1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5zdmc/XCJcIjpcIi1ub1wiKStcIi1zdmdcIiksQnJvd3Nlci5JRSlmb3IodmFyIGk9NztpPD05O2krKylCcm93c2VyLklFPGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWx0SUVcIitpKTt0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXNraW4tXCIraSksT3ZlcmxheS5zZXRTa2luKGkpLHRoaXMuX3NraW49aX0sc2V0U2hvd2luZ1R5cGU6ZnVuY3Rpb24oaSl7dGhpcy5fc2hvd2luZ1R5cGUhPT1pJiYodGhpcy5fc2hvd2luZ1R5cGUmJih0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIrdGhpcy5fc2hvd2luZ1R5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLl9zaG93aW5nVHlwZSkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK2kpLFR5cGUuaXNWaWRlbyhpKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpLHRoaXMuX3Nob3dpbmdUeXBlPWkpfSxzdGFydE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcnx8JCh3aW5kb3cpLm9uKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPSQucHJveHkodGhpcy5fb25XaW5kb3dSZXNpemUsdGhpcykpfSxzdG9wT2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyJiYoJCh3aW5kb3cpLm9mZihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciksdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPW51bGwpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnRpbWVycy5zZXQoXCJzY3JvbGxcIiwkLnByb3h5KHRoaXMuYWRqdXN0VG9TY3JvbGwsdGhpcyksMCl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3ZhciBpOyhpPVBhZ2VzLnBhZ2UpJiYoVGh1bWJuYWlscy5maXRUb1ZpZXdwb3J0KCksdGhpcy51cGRhdGVCb3hEaW1lbnNpb25zKCksaS5maXRUb0JveCgpLFVJLnVwZGF0ZSgpLFVJLmFkanVzdFByZXZOZXh0KG51bGwsMCksU3Bpbm5lci5jZW50ZXIoKSxPdmVybGF5Lm1heCgpLFVJLl9vbldpbmRvd1Jlc2l6ZSgpLHRoaXMuX29uU2Nyb2xsKCkpfSxhZGp1c3RUb1Njcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5jc3Moe3RvcDokKHdpbmRvdykuc2Nyb2xsVG9wKCl9KX0sZ2V0Qm94RGltZW5zaW9uczpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib3hEaW1lbnNpb25zfSx1cGRhdGVCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7aWYoUGFnZXMucGFnZSl7dmFyIGk9Qm91bmRzLnZpZXdwb3J0KCksZT1UaHVtYm5haWxzLmdldERpbWVuc2lvbnMoKSx0PVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247dGhpcy5fYm94RGltZW5zaW9ucz17d2lkdGg6dD9pLndpZHRoOmkud2lkdGgtZS53aWR0aCxoZWlnaHQ6dD9pLmhlaWdodC1lLmhlaWdodDppLmhlaWdodH0sdGhpcy5fYm94UG9zaXRpb249e3RvcDowLGxlZnQ6dD8wOmUud2lkdGh9LHRoaXMuX2JveC5jc3MoJC5leHRlbmQoe30sdGhpcy5fYm94RGltZW5zaW9ucyx0aGlzLl9ib3hQb3NpdGlvbikpfX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5vcGVuaW5nPSEwLHRoaXMuYXR0YWNoKCksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKSx0aGlzLmFkanVzdFRvU2Nyb2xsKCk7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MCxzPTI7T3ZlcmxheVtQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vdmVybGF5P1wic2hvd1wiOlwiaGlkZVwiXShmdW5jdGlvbigpe2kmJi0tczwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcInNob3ctd2luZG93XCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Nob3coJC5wcm94eShmdW5jdGlvbigpe3RoaXMub3BlbmluZz0hMSxpJiYtLXM8MSYmaSgpfSx0aGlzKSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsNTApOjEpfX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGUpe2lmKHRoaXMudmlldyl7dmFyIGk9dGhpcy5xdWV1ZXMuaGlkZTtpLnF1ZXVlKFtdKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpO3ZhciB0PVBhZ2VzLnBhZ2U/UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZTowO2kucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5zdG9wKCksU3Bpbm5lci5oaWRlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1VJLmRpc2FibGUoKSxVSS5oaWRlKG51bGwsdCksS2V5Ym9hcmQuZGlzYWJsZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0yO3RoaXMuX2hpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJoaWRlLW92ZXJsYXlcIiwkLnByb3h5KGZ1bmN0aW9uKCl7T3ZlcmxheS5oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDE1MCk6MSksdGhpcy5fZmlyc3Q9ITB9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fcmVzZXQoKSx0aGlzLnN0b3BPYnNlcnZpbmdSZXNpemUoKSxQYWdlcy5yZW1vdmVBbGwoKSxUaHVtYm5haWxzLmNsZWFyKCksdGhpcy50aW1lcnMuY2xlYXIoKSx0aGlzLl9wb3NpdGlvbj0tMTt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5hZnRlckhpZGU7XCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZlLmNhbGwoRnJlc2NvKSx0aGlzLnZpZXc9bnVsbCx0aGlzLm9wZW5pbmc9ITEsdGhpcy5jbG9zaW5nPSExLHRoaXMuZGV0YWNoKCksaSgpfSx0aGlzKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7ZSgpLGkoKX0sdGhpcykpfX0sX2hpZGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGUpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHQsaSl9LGxvYWQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXdzPWksdGhpcy5hdHRhY2goKSxUaHVtYm5haWxzLmxvYWQoaSksUGFnZXMubG9hZChpKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nUmVzaXplKCksZSYmdGhpcy5zZXRQb3NpdGlvbihlKX0sc2V0UG9zaXRpb246ZnVuY3Rpb24oaSxlKXt0aGlzLl9wb3NpdGlvbj1pLHRoaXMudmlldz10aGlzLnZpZXdzW2ktMV0sdGhpcy5zdG9wSGlkZVF1ZXVlKCksdGhpcy5wYWdlPVBhZ2VzLnNob3coaSwkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSl9LHN0b3BIaWRlUXVldWU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5oaWRlLnF1ZXVlKFtdKX0sX3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy52aXNpYmxlPSExLFVJLmhpZGUobnVsbCwwKSxVSS5yZXNldCgpfSxtYXlQcmV2aW91czpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJnRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGh8fDEhPT10aGlzLl9wb3NpdGlvbn0scHJldmlvdXM6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlQcmV2aW91cygpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLnByZXZpb3VzKX0sbWF5TmV4dDpmdW5jdGlvbigpe3ZhciBpPXRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmaXx8aSYmMSE9PXRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dH0sbmV4dDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heU5leHQoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0KX0sZ2V0U3Vycm91bmRpbmdJbmRleGVzOmZ1bmN0aW9uKCl7aWYoIXRoaXMudmlld3MpcmV0dXJue307dmFyIGk9dGhpcy5fcG9zaXRpb24sZT10aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm57cHJldmlvdXM6aTw9MT9lOmktMSxuZXh0OmU8PWk/MTppKzF9fX0sS2V5Ym9hcmQ9e2VuYWJsZWQ6ITEsa2V5Q29kZTp7bGVmdDozNyxyaWdodDozOSxlc2M6Mjd9LGVuYWJsZTpmdW5jdGlvbihpKXt0aGlzLmRpc2FibGUoKSxpJiYoJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlEb3duLHRoaXMpKS5vbihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5VXAsdGhpcykpLHRoaXMuZW5hYmxlZD1pKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMSx0aGlzLl9vbktleVVwSGFuZGxlciYmKCQoZG9jdW1lbnQpLm9mZihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXIpLm9mZihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyKSx0aGlzLl9vbktleVVwSGFuZGxlcj10aGlzLl9vbktleURvd25IYW5kbGVyPW51bGwpfSxvbktleURvd246ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksZSl7Y2FzZVwibGVmdFwiOldpbmRvdy5wcmV2aW91cygpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6V2luZG93Lm5leHQoKX19fSxvbktleVVwOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGUpe2Nhc2VcImVzY1wiOldpbmRvdy5oaWRlKCl9fX0sZ2V0S2V5QnlLZXlDb2RlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZSBpbiB0aGlzLmtleUNvZGUpaWYodGhpcy5rZXlDb2RlW2VdPT09aSlyZXR1cm4gZTtyZXR1cm4gbnVsbH19LFBhZ2U9KExjPTAsTWM9e30sTmM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS10b3AgZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtYm90dG9tIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1sZWZ0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtcmlnaHQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKSwkLmV4dGVuZChPYy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudmlldz1pLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6MCxoZWlnaHQ6MH0sdGhpcy51aWQ9TGMrKyx0aGlzLl9wb3NpdGlvbj1lLHRoaXMuX3RvdGFsPXQsdGhpcy5fZnVsbENsaWNrPSExLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5xdWV1ZXM9e30sdGhpcy5xdWV1ZXMuc2hvd2hpZGU9JCh7fSl9LGNyZWF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9jcmVhdGVkKXtQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZVwiKS5hcHBlbmQodGhpcy5jb250YWluZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGFpbmVyXCIpKS5jc3Moe29wYWNpdHk6MH0pLmhpZGUoKSk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7aWYoaSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSkmJih0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuaW5mbz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiYodGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLHRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5wb3M9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5jYXB0aW9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5iYWNrZ3JvdW5kPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuY29udGVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50XCIpKSxcImltYWdlXCI9PXRoaXMudmlldy50eXBlJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6dGhpcy52aWV3LnVybH0pKSx0aGlzLmNvbnRlbnQuYXBwZW5kKE5jLmNsb25lKCEwKSkpLGkmJlwib3V0c2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSYmdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucG9zaXRpb25PdXRzaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksXCJpbnNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkpe3RoaXMuY29udGVudC5hcHBlbmQodGhpcy5wcmV2aW91c0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMubmV4dEluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5jbG9zZUluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksKHRoaXMudmlldy5jYXB0aW9ufHxpJiZ0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9uKSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbmZvSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8gZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXJJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMucG9zSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5jYXB0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLnZpZXcuY2FwdGlvbnx8IWl8fHRoaXMudmlldy5ncm91cGVkLmNhcHRpb258fHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5wb3NpdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1pbnNpZGUgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpO3ZhciBlPXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fDEhPXRoaXMuX3Bvc2l0aW9uLHQ9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8dGhpcy5fcG9zaXRpb248dGhpcy5fdG90YWw7dGhpcy5wcmV2aW91c0luc2lkZVsoZT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMubmV4dEluc2lkZVsodD9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpfSQuZWFjaChbXCJ4XCIsXCJ5XCJdLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvd1tlXSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmZsb3ctXCIrZSl9LHRoaXMpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLVwiK3RoaXMudmlldy50eXBlKSxUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLXZpZGVvXCIpLHRoaXMuX3RvdGFsPDImJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLXNpZGVzXCIpLHRoaXMuX2NyZWF0ZWQ9ITB9fSxfZ2V0U3Vycm91bmRpbmdQYWdlczpmdW5jdGlvbigpe3ZhciBpO2lmKCEoaT10aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkKSlyZXR1cm5bXTtmb3IodmFyIGU9W10sdD1NYXRoLm1heCgxLHRoaXMuX3Bvc2l0aW9uLWlbMF0pLHM9TWF0aC5taW4odGhpcy5fcG9zaXRpb24raVsxXSx0aGlzLl90b3RhbCksbj10aGlzLl9wb3NpdGlvbixvPW47bzw9cztvKyspKGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSk7Zm9yKG89bjt0PD1vO28tLSl7dmFyIGE7KGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSl9cmV0dXJuIGV9LHByZWxvYWRTdXJyb3VuZGluZ0ltYWdlczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2dldFN1cnJvdW5kaW5nUGFnZXMoKTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS5wcmVsb2FkKCl9LHRoaXMpKX0scHJlbG9hZDpmdW5jdGlvbigpe3RoaXMucHJlbG9hZGluZ3x8dGhpcy5wcmVsb2FkZWR8fFwiaW1hZ2VcIiE9dGhpcy52aWV3LnR5cGV8fCF0aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkfHx0aGlzLmxvYWRlZHx8KHRoaXMuY3JlYXRlKCksdGhpcy5wcmVsb2FkaW5nPSEwLHRoaXMucHJlbG9hZFJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCx0aGlzLnByZWxvYWRpbmc9ITEsdGhpcy5wcmVsb2FkZWQ9ITAsdGhpcy5kaW1lbnNpb25zPXt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9fSx0aGlzKSxudWxsLHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIn0pKX0sbG9hZDpmdW5jdGlvbihlLGkpe2lmKHRoaXMuY3JlYXRlKCksdGhpcy5sb2FkZWQpZSYmZSgpO2Vsc2Ugc3dpdGNoKHRoaXMuYWJvcnQoKSx0aGlzLmxvYWRpbmc9ITAsdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmKHRoaXMuX3NwaW5uZXJEZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtTcGlubmVyLnNob3coKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKSksdGhpcy52aWV3LnR5cGUpe2Nhc2VcImltYWdlXCI6aWYodGhpcy5lcnJvcilyZXR1cm4gdm9pZChlJiZlKCkpO3RoaXMuaW1hZ2VSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9KSxlJiZlKCl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLmltYWdlLmhpZGUoKSx0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLmVycm9yPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yIGZyLWNvbnRlbnQtZWxlbWVudFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3ItaWNvblwiKSkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1lcnJvclwiKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMuZXJyb3Iub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVycm9yLm91dGVySGVpZ2h0KCl9KSx0aGlzLmVycm9yLmNzcyh7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksZSYmZSgpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pO2JyZWFrO2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1JlYWR5PW5ldyBWaW1lb1JlYWR5KHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6aS5kaW1lbnNpb25zLmhlaWdodH0pLGUmJmUoKX0sdGhpcykpO2JyZWFrO2Nhc2VcInlvdXR1YmVcIjp0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMudmlldy5vcHRpb25zLndpZHRoLGhlaWdodDp0aGlzLnZpZXcub3B0aW9ucy5oZWlnaHR9KSxlJiZlKCl9fSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZGltZW5zaW9ucz1pLHRoaXMudmlldy5vcHRpb25zLm1heFdpZHRofHx0aGlzLnZpZXcub3B0aW9ucy5tYXhIZWlnaHQpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLHQ9e3dpZHRoOmUubWF4V2lkdGg/ZS5tYXhXaWR0aDp0aGlzLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmUubWF4SGVpZ2h0P2UubWF4SGVpZ2h0OnRoaXMuZGltZW5zaW9ucy5oZWlnaHR9O3RoaXMuZGltZW5zaW9ucz1GaXQud2l0aGluKHQsdGhpcy5kaW1lbnNpb25zKX19LF9tYXJrQXNMb2FkZWQ6ZnVuY3Rpb24oKXt0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMSx0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCxTcGlubmVyLmhpZGUobnVsbCxudWxsLHRoaXMuX3Bvc2l0aW9uKX0saXNWaWRlbzpmdW5jdGlvbigpe3JldHVybiBUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpfSxpbnNlcnRWaWRlbzpmdW5jdGlvbihpKXtpZighdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMuaXNWaWRlbygpKXt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9JC5leHRlbmQoe30sdGhpcy52aWV3Lm9wdGlvbnNbdGhpcy52aWV3LnR5cGVdfHx7fSkscz0kLnBhcmFtKHQpLG49e3ZpbWVvOmUrXCIvL3BsYXllci52aW1lby5jb20vdmlkZW8ve2lkfT97cXVlcnlTdHJpbmd9XCIseW91dHViZTplK1wiLy93d3cueW91dHViZS5jb20vZW1iZWQve2lkfT97cXVlcnlTdHJpbmd9XCJ9W3RoaXMudmlldy50eXBlXS5yZXBsYWNlKFwie2lkfVwiLHRoaXMudmlldy5fZGF0YS5pZCkucmVwbGFjZShcIntxdWVyeVN0cmluZ31cIixzKTt0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLnBsYXllcklmcmFtZT0kKFwiPGlmcmFtZSB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOm4saGVpZ2h0OnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLmhlaWdodCx3aWR0aDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy53aWR0aCxmcmFtZWJvcmRlcjowfSkpLGkmJmkoKX1lbHNlIGkmJmkoKX0scmFpc2U6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5lbGVtZW50WzBdLmxhc3RDaGlsZDtpJiZpPT09dGhpcy5lbGVtZW50WzBdfHxQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxzaG93OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMucXVldWVzLnNob3doaWRlO2kucXVldWUoW10pLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYhTWNbdGhpcy52aWV3LnVybF07U3Bpbm5lci5fdmlzaWJsZSYmIWUmJlNwaW5uZXIuaGlkZSgpLFBhZ2VzLnN0b3BJbmFjdGl2ZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnVwZGF0ZVVJKCksVUkuc2V0KHRoaXMuX3VpKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7S2V5Ym9hcmQuZW5hYmxlKHRoaXMudmlldy5vcHRpb25zLmtleWJvYXJkKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7U3Bpbm5lci5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLHRoaXMubG9hZCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMoKSxpKCl9LHRoaXMpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnJhaXNlKCksV2luZG93LnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksVUkuZW5hYmxlKCksdGhpcy5maXRUb0JveCgpLFdpbmRvdy5hZGp1c3RUb1Njcm9sbCgpLGkoKX0sdGhpcykpLHRoaXMuaXNWaWRlbygpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5pbnNlcnRWaWRlbygkLnByb3h5KGZ1bmN0aW9uKCl7aSgpfSkpfSx0aGlzKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luY3x8aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLmhpZGVJbmFjdGl2ZShpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0zLHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c7V2luZG93LnNldFNob3dpbmdUeXBlKHRoaXMudmlldy50eXBlKSxXaW5kb3cudmlzaWJsZXx8KHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyxcImZ1bmN0aW9uXCI9PT0kLnR5cGUodGhpcy52aWV3Lm9wdGlvbnMub25TaG93KSYmdGhpcy52aWV3Lm9wdGlvbnMub25TaG93LmNhbGwoRnJlc2NvKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luYyYmKGUrKyxQYWdlcy5oaWRlSW5hY3RpdmUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSkpLFdpbmRvdy5zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyksdGhpcy5fc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLFVJLmFkanVzdFByZXZOZXh0KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sV2luZG93Ll9maXJzdD8wOnQpLFdpbmRvdy5fZmlyc3Q/KFVJLnNob3cobnVsbCwwKSxXaW5kb3cuX2ZpcnN0PSExKTpVSS5zaG93KG51bGwsMCk7dmFyIHM9dGhpcy52aWV3Lm9wdGlvbnMuYWZ0ZXJQb3NpdGlvbjtcImZ1bmN0aW9uXCI9PT0kLnR5cGUocykmJnMuY2FsbChGcmVzY28sdGhpcy5fcG9zaXRpb24pfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGU9ITAsZSYmZSgpLGkoKX0sdGhpcykpfSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PVdpbmRvdy52aXNpYmxlP1wibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdzowO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5zaG93KCkuZmFkZVRvKHR8fDAsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMuZWxlbWVudCl7dGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuYWJvcnQoKTt2YXIgdD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LmhpZGU7dGhpcy5pc1ZpZGVvKCkmJih0PTApLHRoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwwLFwiZnJlc2NvRWFzZUluQ3ViaWNcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmhpZGUoKSx0aGlzLl92aXNpYmxlPSExLFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sc3RvcDpmdW5jdGlvbigpe3RoaXMucXVldWVzLnNob3doaWRlLnF1ZXVlKFtdKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5zdG9wKCEwKSx0aGlzLmFib3J0KCl9LHJlbW92ZVZpZGVvOmZ1bmN0aW9uKCl7dGhpcy5wbGF5ZXJJZnJhbWUmJih0aGlzLnBsYXllcklmcmFtZVswXS5zcmM9XCIvL2Fib3V0OmJsYW5rXCIsdGhpcy5wbGF5ZXJJZnJhbWUucmVtb3ZlKCksdGhpcy5wbGF5ZXJJZnJhbWU9bnVsbCl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpLHRoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5yZW1vdmUoKSx0aGlzLl90cmFjayYmKFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLl90cmFjaz0hMSksdGhpcy5wcmVsb2FkUmVhZHkmJih0aGlzLnByZWxvYWRSZWFkeS5hYm9ydCgpLHRoaXMucHJlbG9hZFJlYWR5PW51bGwsdGhpcy5wcmVsb2FkaW5nPW51bGwsdGhpcy5wcmVsb2FkZWQ9bnVsbCksdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnJlbW92ZWQ9ITB9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5pbWFnZVJlYWR5JiYodGhpcy5pbWFnZVJlYWR5LmFib3J0KCksdGhpcy5pbWFnZVJlYWR5PW51bGwpLHRoaXMudmltZW9SZWFkeSYmKHRoaXMudmltZW9SZWFkeS5hYm9ydCgpLHRoaXMudmltZW9SZWFkeT1udWxsKSx0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMX0sX2Fib3J0U3Bpbm5lckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fc3Bpbm5lckRlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX3NwaW5uZXJEZWxheSksdGhpcy5fc3Bpbm5lckRlbGF5PW51bGwpfSxfZ2V0SW5mb0hlaWdodDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOmNhc2VcImluc2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbiYmIWUpcmV0dXJuIDA7YnJlYWs7Y2FzZVwib3V0c2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbilyZXR1cm4gMH12YXIgdD1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztcIm91dHNpZGVcIj09PXRoaXMuX3VpJiYoaT1NYXRoLm1pbihpLFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkpO3ZhciBzLG49dFswXS5zdHlsZS53aWR0aDtyZXR1cm5cImluc2lkZVwiIT09dGhpcy5fdWkmJlwiZnVsbGNsaWNrXCIhPT10aGlzLl91aXx8KG49XCIxMDAlXCIpLHQuY3NzKHt3aWR0aDppK1wicHhcIn0pLHM9cGFyc2VGbG9hdCh0Lm91dGVySGVpZ2h0KCkpLHQuY3NzKHt3aWR0aDpufSksc30sX3doaWxlVmlzaWJsZTpmdW5jdGlvbihpLGUpe3ZhciB0PVtdLHM9V2luZG93LmVsZW1lbnQuYWRkKHRoaXMuZWxlbWVudCk7ZSYmKHM9cy5hZGQoZSkpLCQuZWFjaChzLGZ1bmN0aW9uKGksZSl7JChlKS5pcyhcIjp2aXNpYmxlXCIpfHx0LnB1c2goJChlKS5zaG93KCkpfSk7dmFyIG49dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3ZhciBvPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksaSgpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLG4mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLWNhcHRpb25cIiksb3x8dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksJC5lYWNoKHQsZnVuY3Rpb24oaSxlKXtlLmhpZGUoKX0pfSx1cGRhdGVGb3JjZWQ6ZnVuY3Rpb24oKXt0aGlzLmNyZWF0ZSgpLHRoaXMuX2Z1bGxDbGljaz10aGlzLnZpZXcub3B0aW9ucy5mdWxsQ2xpY2ssdGhpcy5fbm9PdmVyZmxvdz0hMSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4td2lkdGhcIikpJiYodGhpcy5fZnVsbENsaWNrPSEwKSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4taGVpZ2h0XCIpKSYmKHRoaXMuX25vT3ZlcmZsb3c9ITApfSx1cGRhdGVVSTpmdW5jdGlvbigpe3RoaXMudXBkYXRlRm9yY2VkKCk7dmFyIGk9dGhpcy5fZnVsbENsaWNrP1wiZnVsbGNsaWNrXCI6dGhpcy52aWV3Lm9wdGlvbnMudWk7dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXVpLVwiK3RoaXMuX3VpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1cIitpKSx0aGlzLl91aT1pfSxmaXRUb0JveDpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dGhpcy5lbGVtZW50O3ZhciB0PSQuZXh0ZW5kKHt9LFdpbmRvdy5nZXRCb3hEaW1lbnNpb25zKCkpLGk9JC5leHRlbmQoe30sdGhpcy5kaW1lbnNpb25zKSxlPXRoaXMuY29udGFpbmVyO3RoaXMudXBkYXRlVUkoKTt2YXIgcz17bGVmdDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctbGVmdFwiKSksdG9wOnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy10b3BcIikpfTtpZihcIm91dHNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLl9wb3NpdGlvbk91dHNpZGUpe3ZhciBuPTA7dGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbk91dHNpZGUuaXMoXCI6dmlzaWJsZVwiKSYmKG49dGhpcy5fcG9zaXRpb25PdXRzaWRlLm91dGVyV2lkdGgoITApKX0sdGhpcykpLG4+cy5sZWZ0JiYocy5sZWZ0PW4pfXQud2lkdGgtPTIqcy5sZWZ0LHQuaGVpZ2h0LT0yKnMudG9wO3ZhciBvLGEsaD17d2lkdGg6ITAsaGVpZ2h0OiEhdGhpcy5fbm9PdmVyZmxvd3x8IXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93Lnl9LHI9Rml0LndpdGhpbih0LGksaCksZD0kLmV4dGVuZCh7fSxyKSxsPSh0aGlzLmNvbnRlbnQsMCksdT1cImluc2lkZVwiPT09dGhpcy5fdWksYz11P3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm8scD11P3RoaXMuY2FwdGlvbkluc2lkZTp0aGlzLmNhcHRpb24sZj11P3RoaXMucG9zSW5zaWRlOnRoaXMucG9zLG09ISFwO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOnZhciB2PSQuZXh0ZW5kKHt9LGQpO3RoaXMuY2FwdGlvbiYmKGE9dGhpcy5jYXB0aW9uLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTwyOyl7bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpO3ZhciBlPXQuaGVpZ2h0LWQuaGVpZ2h0O2U8bCYmKGQ9Rml0LndpdGhpbih7d2lkdGg6ZC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoZC5oZWlnaHQtKGwtZSksMCl9LGQsaCkpLGkrK31sPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCksKCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiZsK2QuaGVpZ2h0PnQuaGVpZ2h0fHxjJiZcIm5vbmVcIj09PWMuY3NzKFwiZGlzcGxheVwiKXx8bD49LjUqZC5oZWlnaHQpJiYobT0hMSxsPTAsZD12KX0sdGhpcyksYSkpLGMmJmMuY3NzKHt3aWR0aDpkLndpZHRoK1wicHhcIn0pLG89e3dpZHRoOmQud2lkdGgsaGVpZ2h0OmQuaGVpZ2h0K2x9O2JyZWFrO2Nhc2VcImluc2lkZVwiOnRoaXMuY2FwdGlvbiYmKGE9cCx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpeyhsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCkpPj0uNDUqZC5oZWlnaHQmJihtPSExLGw9MCl9LHRoaXMpLGEpKSxvPWQ7YnJlYWs7Y2FzZVwiZnVsbGNsaWNrXCI6dmFyIGc9W107cCYmZy5wdXNoKHApLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoKHB8fGYpJiZjLmNzcyh7d2lkdGg6XCIxMDAlXCJ9KSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxwJiZsPi41KnQuaGVpZ2h0KWlmKG09ITEsZil7dmFyIGk9dGhpcy5jYXB0aW9uLmlzKFwiOnZpc2libGVcIik7dGhpcy5jYXB0aW9uLmhpZGUoKSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxpJiZ0aGlzLmNhcHRpb24uc2hvdygpfWVsc2UgbD0wO2Q9Rml0LndpdGhpbih7d2lkdGg6dC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoMCx0LmhlaWdodC1sKX0sZCxoKSxvPWR9LHRoaXMpLGcpLHRoaXMuY29udGVudC5jc3Moe1wicGFkZGluZy1ib3R0b21cIjowfSl9cCYmcFttP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuZWxlbWVudFsobT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1uby1jYXB0aW9uXCIpLHRoaXMuZWxlbWVudFsobT9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1oYXMtY2FwdGlvblwiKSx0aGlzLmNvbnRlbnQuY3NzKGQpLHRoaXMuYmFja2dyb3VuZC5jc3MobyksdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMucGxheWVySWZyYW1lLmF0dHIoZCksdGhpcy5vdmVybGFwPXt5Om8uaGVpZ2h0KyhcImZ1bGxjbGlja1wiPT09dGhpcy5fdWk/bDowKS1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHg6MH0sdGhpcy5fdHJhY2s9IXRoaXMuX25vT3ZlcmZsb3cmJnRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJjA8dGhpcy5vdmVybGFwLnksdGhpcy5faW5mb0hlaWdodD1sLHRoaXMuX3BhZGRpbmc9cyx0aGlzLl9jb250ZW50RGltZW5zaW9ucz1kLHRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zPW8sUGFnZXNbKHRoaXMuX3RyYWNrP1wic2V0XCI6XCJyZW1vdmVcIikrXCJUcmFja2luZ1wiXSh0aGlzLl9wb3NpdGlvbiksdGhpcy5wb3NpdGlvbigpfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3ZhciBpPXRoaXMuX2NvbnRlbnREaW1lbnNpb25zLGU9dGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnMsdD17dG9wOi41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqZS5oZWlnaHQsbGVmdDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqZS53aWR0aH0scz17dG9wOnQudG9wK2kuaGVpZ2h0LGxlZnQ6dC5sZWZ0fSxuPTAsbz1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOnQudG9wPS41KihXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQpLS41KmUuaGVpZ2h0LHM9e3RvcDpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQsbGVmdDowLGJvdHRvbTpcImF1dG9cIn0sbj10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnM9e3RvcDpcImF1dG9cIixsZWZ0OjAsYm90dG9tOjB9fWlmKDA8dGhpcy5vdmVybGFwLnkpe3ZhciBhPVBhZ2VzLmdldFhZUCgpO3N3aXRjaCh0LnRvcD0wLWEueSp0aGlzLm92ZXJsYXAueSx0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOmNhc2VcImZ1bGxjbGlja1wiOnMudG9wPVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjp2YXIgaD10LnRvcCtpLmhlaWdodC1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHI9LTEqdC50b3A7aWYocy5ib3R0b209aCx0aGlzLmNsb3NlSW5zaWRlLmNzcyh7dG9wOnJ9KSwxPHRoaXMuX3RvdGFsKXt2YXIgZD1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO2R8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbD10aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoXCJzdHlsZVwiKTt0aGlzLnByZXZpb3VzSW5zaWRlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgdT1wYXJzZUludCh0aGlzLnByZXZpb3VzSW5zaWRlLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMucHJldmlvdXNJbnNpZGUuYXR0cih7c3R5bGU6bH0pLGR8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYz10aGlzLnByZXZpb3VzSW5zaWRlLmFkZCh0aGlzLm5leHRJbnNpZGUpLHA9LjUqdGhpcy5vdmVybGFwLnk7Yy5jc3Moe1wibWFyZ2luLXRvcFwiOnUrKHItcCl9KSx0aGlzLnBvc2l0aW9uSW5zaWRlJiZ0aGlzLnBvc2l0aW9uSW5zaWRlLmNzcyh7Ym90dG9tOmh9KX19fWVsc2VcImluc2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5maW5kKFwiLmZyLWluZm8sIC5mci1zaWRlLCAuZnItY2xvc2UsIC5mci1wb3NpdGlvbi1pbnNpZGVcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpO28mJm8uY3NzKHMpLHRoaXMuY29udGFpbmVyLmNzcyh7Ym90dG9tOm59KSx0aGlzLmNvbnRlbnQuY3NzKHQpLHRoaXMuYmFja2dyb3VuZC5jc3ModCl9fX0pLE9jKSxMYyxNYyxOYztmdW5jdGlvbiBPYygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX12YXIgUGFnZXM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5wYWdlcz1bXSx0aGlzLnVpZD0xLHRoaXMuX3RyYWNraW5nPVtdfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMudmlld3M9aSx0aGlzLnJlbW92ZUFsbCgpLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnBhZ2VzLnB1c2gobmV3IFBhZ2UoZSxpKzEsdGhpcy52aWV3cy5sZW5ndGgpKX0sdGhpcykpfSxzaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpcy5wYWdlc1tpLTFdO3RoaXMucGFnZSYmdGhpcy5wYWdlLnVpZD09PXQudWlkfHwodGhpcy5wYWdlPXQsVGh1bWJuYWlscy5zaG93KGkpLFdpbmRvdy51cGRhdGVCb3hEaW1lbnNpb25zKCksdC5zaG93KCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKSl9LGdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXA6ZnVuY3Rpb24odCl7dmFyIHM9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnZpZXcuZWxlbWVudCYmZS52aWV3LmVsZW1lbnQ9PT10JiYocz1pKzEpfSksc30sZ2V0TG9hZGluZ0NvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLmxvYWRpbmcmJnQrK30pLHR9LHJlbW92ZUFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMucGFnZXM9W119LGhpZGVJbmFjdGl2ZTpmdW5jdGlvbih0LHMpe3ZhciBuPVtdOyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJm4ucHVzaChlKX0sdGhpcykpO3ZhciBvPTArbi5sZW5ndGg7cmV0dXJuIG88MT90JiZ0KCk6JC5lYWNoKG4sZnVuY3Rpb24oaSxlKXtlLmhpZGUoZnVuY3Rpb24oKXt0JiYtLW88MSYmdCgpfSxzKX0pLG4ubGVuZ3RofSxzdG9wSW5hY3RpdmU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZlLnN0b3AoKX0sdGhpcykpfSxzdG9wOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnN0b3AoKX0pfSxoYW5kbGVUcmFja2luZzpmdW5jdGlvbihpKXtCcm93c2VyLklFJiZCcm93c2VyLklFPDk/KHRoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpKTp0aGlzLl90cmFja2luZ190aW1lcj1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKX0sdGhpcyksMzApfSxjbGVhclRyYWNraW5nVGltZXI6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZ190aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLl90cmFja2luZ190aW1lciksdGhpcy5fdHJhY2tpbmdfdGltZXI9bnVsbCl9LHN0YXJ0VHJhY2tpbmc6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHx0aGlzLl9oYW5kbGVUcmFja2luZ3x8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmc9JC5wcm94eSh0aGlzLmhhbmRsZVRyYWNraW5nLHRoaXMpKX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7IVN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuX2hhbmRsZVRyYWNraW5nJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nKSx0aGlzLl9oYW5kbGVUcmFja2luZz1udWxsLHRoaXMuY2xlYXJUcmFja2luZ1RpbWVyKCkpfSxzZXRUcmFja2luZzpmdW5jdGlvbihpKXt0aGlzLmlzVHJhY2tpbmcoaSl8fCh0aGlzLl90cmFja2luZy5wdXNoKHRoaXMucGFnZXNbaS0xXSksMT09PXRoaXMuX3RyYWNraW5nLmxlbmd0aCYmdGhpcy5zdGFydFRyYWNraW5nKCkpfSxjbGVhclRyYWNraW5nOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmc9W119LHJlbW92ZVRyYWNraW5nOmZ1bmN0aW9uKGUpe3RoaXMuX3RyYWNraW5nPSQuZ3JlcCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpKXtyZXR1cm4gaS5fcG9zaXRpb24hPT1lfSksdGhpcy5fdHJhY2tpbmcubGVuZ3RoPDEmJnRoaXMuc3RvcFRyYWNraW5nKCl9LGlzVHJhY2tpbmc6ZnVuY3Rpb24odCl7dmFyIHM9ITE7cmV0dXJuICQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2lmKGUuX3Bvc2l0aW9uPT09dClyZXR1cm4hKHM9ITApfSksc30sc2V0WFk6ZnVuY3Rpb24oaSl7dGhpcy5feHk9aX0sZ2V0WFlQOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZSx0PSQuZXh0ZW5kKHt9LFdpbmRvdy5fYm94RGltZW5zaW9ucyksZT0kLmV4dGVuZCh7fSx0aGlzLl94eSk7ZS55LT0kKHdpbmRvdykuc2Nyb2xsVG9wKCksaSYmKFwib3V0c2lkZVwiPT09aS5fdWl8fFwiZnVsbGNsaWNrXCI9PT1pLl91aSkmJjA8aS5faW5mb0hlaWdodCYmKHQuaGVpZ2h0LT1pLl9pbmZvSGVpZ2h0KSxlLnktPVdpbmRvdy5fYm94UG9zaXRpb24udG9wO3ZhciBzPXt4OjAseTpNYXRoLm1pbihNYXRoLm1heChlLnkvdC5oZWlnaHQsMCksMSl9LG49e3g6XCJ3aWR0aFwiLHk6XCJoZWlnaHRcIn0sbz17fTtyZXR1cm4gJC5lYWNoKFwieVwiLnNwbGl0KFwiIFwiKSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7b1tlXT1NYXRoLm1pbihNYXRoLm1heCgyMC90W25bZV1dLDApLDEpLHNbZV0qPTErMipvW2VdLHNbZV0tPW9bZV0sc1tlXT1NYXRoLm1pbihNYXRoLm1heChzW2VdLDApLDEpfSx0aGlzKSksdGhpcy5zZXRYWVAocyksdGhpcy5feHlwfSxzZXRYWVA6ZnVuY3Rpb24oaSl7dGhpcy5feHlwPWl9LHVwZGF0ZVBvc2l0aW9uczpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nLmxlbmd0aDwxfHwkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtlLnBvc2l0aW9uKCl9KX19O2Z1bmN0aW9uIFZpZXcoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChWaWV3LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihvYmplY3Qpe3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30sZGF0YT17fTtpZihcInN0cmluZ1wiPT09JC50eXBlKG9iamVjdCkpb2JqZWN0PXt1cmw6b2JqZWN0fTtlbHNlIGlmKG9iamVjdCYmMT09PW9iamVjdC5ub2RlVHlwZSl7dmFyIGVsZW1lbnQ9JChvYmplY3QpO29iamVjdD17ZWxlbWVudDplbGVtZW50WzBdLHVybDplbGVtZW50LmF0dHIoXCJocmVmXCIpLGNhcHRpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tY2FwdGlvblwiKSxncm91cDplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSxleHRlbnNpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZXh0ZW5zaW9uXCIpLHR5cGU6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tdHlwZVwiKSxvcHRpb25zOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikmJmV2YWwoXCIoe1wiK2VsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikrXCJ9KVwiKXx8e319fXJldHVybiBvYmplY3QmJihvYmplY3QuZXh0ZW5zaW9ufHwob2JqZWN0LmV4dGVuc2lvbj1kZXRlY3RFeHRlbnNpb24ob2JqZWN0LnVybCkpLG9iamVjdC50eXBlfHwoZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpLG9iamVjdC5fZGF0YT1kYXRhLG9iamVjdC50eXBlPWRhdGEudHlwZSkpLG9iamVjdC5fZGF0YXx8KG9iamVjdC5fZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpKSxvYmplY3QmJm9iamVjdC5vcHRpb25zP29iamVjdC5vcHRpb25zPSQuZXh0ZW5kKCEwLCQuZXh0ZW5kKHt9LG9wdGlvbnMpLCQuZXh0ZW5kKHt9LG9iamVjdC5vcHRpb25zKSk6b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoe30sb3B0aW9ucyksb2JqZWN0Lm9wdGlvbnM9T3B0aW9ucy5jcmVhdGUob2JqZWN0Lm9wdGlvbnMsb2JqZWN0LnR5cGUsb2JqZWN0Ll9kYXRhKSwkLmV4dGVuZCh0aGlzLG9iamVjdCksdGhpc319KTt2YXIgU3Bpbm5lcj17c3VwcG9ydGVkOlN1cHBvcnQuY3NzLnRyYW5zZm9ybSYmU3VwcG9ydC5jc3MuYW5pbWF0aW9uLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW5uZXJcIikuaGlkZSgpO2Zvcih2YXIgZT0xO2U8PTEyO2UrKyl0aGlzLmVsZW1lbnQuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW4tXCIrZSkpO3RoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe1dpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc3VwcG9ydGVkJiYodGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMudXBkYXRlRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIitpKSx0aGlzLl9za2luPWkpfSx1cGRhdGVEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fYXR0YWNoZWQ7aXx8dGhpcy5hdHRhY2goKSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKX0saXx8dGhpcy5kZXRhY2goKX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzaG93OmZ1bmN0aW9uKGksZSl7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMuY2VudGVyKCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSx0KXt0aGlzLl92aXNpYmxlPSExO3ZhciBzPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5oaWRlfHwwLG49KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpzKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChufHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLGkmJmkoKX0sdGhpcykpfSxjZW50ZXI6ZnVuY3Rpb24oKXtpZih0aGlzLnN1cHBvcnRlZCl7dGhpcy5fZGltZW5zaW9uc3x8dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7dmFyIGk9UGFnZXMucGFnZSxlPTA7aSYmXCJmdWxsY2xpY2tcIj09PWkuX3VpJiZpLl93aGlsZVZpc2libGUoZnVuY3Rpb24oKXtlPWkuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKX0pLHRoaXMuZWxlbWVudC5jc3Moe3RvcDpXaW5kb3cuX2JveFBvc2l0aW9uLnRvcCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KnRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LS41KmUsbGVmdDpXaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQrLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KnRoaXMuX2RpbWVuc2lvbnMud2lkdGh9KX19fSxfRnJlc2NvPXtfZGlzYWJsZWQ6ITEsX2ZhbGxiYWNrOiEwLGluaXRpYWxpemU6ZnVuY3Rpb24oKXtXaW5kb3cuaW5pdGlhbGl6ZSgpLHRoaXMuX2Rpc2FibGVkfHx0aGlzLnN0YXJ0RGVsZWdhdGluZygpfSxzdGFydERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXJ8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPSQucHJveHkodGhpcy5kZWxlZ2F0ZSx0aGlzKSkub24oXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPSQucHJveHkodGhpcy5zZXRDbGlja1hZLHRoaXMpKX0sc3RvcERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXImJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXIpLm9mZihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXIpLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPW51bGwsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPW51bGwpfSxzZXRDbGlja1hZOmZ1bmN0aW9uKGkpe1BhZ2VzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSl9LGRlbGVnYXRlOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLl9kaXNhYmxlZCl7aS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9aS5jdXJyZW50VGFyZ2V0O3RoaXMuc2V0Q2xpY2tYWShpKSxfRnJlc2NvLnNob3coZSl9fSxzaG93OmZ1bmN0aW9uKG9iamVjdCl7aWYodGhpcy5fZGlzYWJsZWQpdGhpcy5zaG93RmFsbGJhY2suYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtlbHNle3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30scG9zaXRpb249YXJndW1lbnRzWzJdO2FyZ3VtZW50c1sxXSYmXCJudW1iZXJcIj09PSQudHlwZShhcmd1bWVudHNbMV0pJiYocG9zaXRpb249YXJndW1lbnRzWzFdLG9wdGlvbnM9e30pO3ZhciB2aWV3cz1bXSxvYmplY3RfdHlwZSxpc0VsZW1lbnQ9Xy5pc0VsZW1lbnQob2JqZWN0KTtzd2l0Y2gob2JqZWN0X3R5cGU9JC50eXBlKG9iamVjdCkpe2Nhc2VcInN0cmluZ1wiOmNhc2VcIm9iamVjdFwiOnZhciB2aWV3PW5ldyBWaWV3KG9iamVjdCxvcHRpb25zKSxfZGdvPVwiZGF0YS1mcmVzY28tZ3JvdXAtb3B0aW9uc1wiLGdyb3VwT3B0aW9ucz17fTtpZih2aWV3Lmdyb3VwKXtpZihpc0VsZW1lbnQpe3ZhciBlbGVtZW50cz0kKCcuZnJlc2NvW2RhdGEtZnJlc2NvLWdyb3VwPVwiJyskKG9iamVjdCkuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpKydcIl0nKTtlbGVtZW50cy5maWx0ZXIoXCJbXCIrX2RnbytcIl1cIikuZWFjaChmdW5jdGlvbihpLGVsZW1lbnQpeyQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChlbGVtZW50KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKX0pLGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oaSxlKXtwb3NpdGlvbnx8ZSE9PW9iamVjdHx8KHBvc2l0aW9uPWkrMSksdmlld3MucHVzaChuZXcgVmlldyhlLCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpfSl9fWVsc2UgaXNFbGVtZW50JiYkKG9iamVjdCkuaXMoXCJbXCIrX2RnbytcIl1cIikmJigkLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQob2JqZWN0KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKSx2aWV3PW5ldyBWaWV3KG9iamVjdCwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKSx2aWV3cy5wdXNoKHZpZXcpO2JyZWFrO2Nhc2VcImFycmF5XCI6JC5lYWNoKG9iamVjdCxmdW5jdGlvbihpLGUpe3ZhciB0PW5ldyBWaWV3KGUsb3B0aW9ucyk7dmlld3MucHVzaCh0KX0pfXZhciBncm91cEV4dGVuZD17Z3JvdXBlZDp7Y2FwdGlvbjohMX19LGZpcnN0VUk9dmlld3NbMF0ub3B0aW9ucy51aSxwb3NpdGlvbkluQVBHOyQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2UuY2FwdGlvbiYmKGdyb3VwRXh0ZW5kLmdyb3VwZWQuY2FwdGlvbj0hMCksMDxpJiZlLm9wdGlvbnMudWkhPT1maXJzdFVJJiYoZS5vcHRpb25zLnVpPWZpcnN0VUkpfSksJC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZT0kLmV4dGVuZChlLGdyb3VwRXh0ZW5kKX0pLCghcG9zaXRpb258fHBvc2l0aW9uPDEpJiYocG9zaXRpb249MSkscG9zaXRpb24+dmlld3MubGVuZ3RoJiYocG9zaXRpb249dmlld3MubGVuZ3RoKSxpc0VsZW1lbnQmJihwb3NpdGlvbkluQVBHPVBhZ2VzLmdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAob2JqZWN0KSk/V2luZG93LnNldFBvc2l0aW9uKHBvc2l0aW9uSW5BUEcpOldpbmRvdy5sb2FkKHZpZXdzLHBvc2l0aW9uKX19LHNob3dGYWxsYmFjazpmdW5jdGlvbihpKXtpZih0aGlzLl9mYWxsYmFjayl7dmFyIGU9ZnVuY3Rpb24gaShlKXt2YXIgdD0kLnR5cGUoZSk7cmV0dXJuXCJzdHJpbmdcIj09PXQ/ZTpcImFycmF5XCI9PT10JiZlWzBdP2koZVswXSk6Xy5pc0VsZW1lbnQoZSkmJiQoZSkuYXR0cihcImhyZWZcIik/JChlKS5hdHRyKFwiaHJlZlwiKTohIWUudXJsJiZlLnVybH0oaSk7ZSYmKHdpbmRvdy5sb2NhdGlvbi5ocmVmPWUpfX19OyQuZXh0ZW5kKEZyZXNjbyx7c2hvdzpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5zaG93LmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiBXaW5kb3cuaGlkZSgpLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5zdG9wRGVsZWdhdGluZygpLF9GcmVzY28uX2Rpc2FibGVkPSEwLHRoaXN9LGVuYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLl9kaXNhYmxlZD0hMSxfRnJlc2NvLnN0YXJ0RGVsZWdhdGluZygpLHRoaXN9LGZhbGxiYWNrOmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLl9mYWxsYmFjaz1pLHRoaXN9LHNldERlZmF1bHRTa2luOmZ1bmN0aW9uKGkpe3JldHVybiBPcHRpb25zLmRlZmF1bHRzLnNraW49aSx0aGlzfX0pLChCcm93c2VyLklFJiZCcm93c2VyLklFPDd8fFwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5BbmRyb2lkKSYmQnJvd3Nlci5BbmRyb2lkPDN8fEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuV2ViS2l0KSYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4KSYmKF9GcmVzY28uc2hvdz1fRnJlc2NvLnNob3dGYWxsYmFjayk7dmFyIFRodW1ibmFpbHM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIsdGhpcy5fdmFycz17dGh1bWJuYWlsOnt9LHRodW1ibmFpbEZyYW1lOnt9LHRodW1ibmFpbHM6e319LHRoaXMuYnVpbGQoKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nKCl9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLndyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy13cmFwcGVyXCIpLmFwcGVuZCh0aGlzLl9zbGlkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZXJcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtcHJldmlvdXNcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzX2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX3RodW1icz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXRodW1ic1wiKS5hcHBlbmQodGhpcy5fc2xpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZVwiKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtbmV4dFwiKS5hcHBlbmQodGhpcy5fbmV4dF9idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpKSl9LHN0YXJ0T2JzZXJ2aW5nOmZ1bmN0aW9uKCl7dGhpcy5fc2xpZGVyLmRlbGVnYXRlKFwiLmZyLXRodW1ibmFpbFwiLFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGU9JChpLnRhcmdldCkuY2xvc2VzdChcIi5mci10aHVtYm5haWxcIilbMF0sdD1lJiYkKGUpLmRhdGEoXCJmci1wb3NpdGlvblwiKTt0JiYodGhpcy5zZXRBY3RpdmUodCksV2luZG93LnNldFBvc2l0aW9uKHQpKX0sdGhpcykpLHRoaXMuX3NsaWRlci5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpfSksdGhpcy5fcHJldmlvdXMuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLnByZXZpb3VzUGFnZSx0aGlzKSksdGhpcy5fbmV4dC5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMubmV4dFBhZ2UsdGhpcykpfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMuY2xlYXIoKTt2YXIgdD1cImhvcml6b250YWxcIixzPSExOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtcInZlcnRpY2FsXCI9PT1lLm9wdGlvbnMudGh1bWJuYWlscyYmKHQ9XCJ2ZXJ0aWNhbFwiKSxlLm9wdGlvbnMudGh1bWJuYWlsc3x8KHM9ITApfSx0aGlzKSksdGhpcy5zZXRPcmllbnRhdGlvbih0KSx0aGlzLl9kaXNhYmxlZEdyb3VwPXMsJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMuX3RodW1ibmFpbHMucHVzaChuZXcgVGh1bWJuYWlsKGUsaSsxKSl9LHRoaXMpKSx0aGlzLmZpdFRvVmlld3BvcnQoKX0sY2xlYXI6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX3Bvc2l0aW9uPS0xLHRoaXMuX3BhZ2U9LTF9LHNldE9yaWVudGF0aW9uOmZ1bmN0aW9uKGkpe3RoaXMuX29yaWVudGF0aW9uJiZXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIrdGhpcy5fb3JpZW50YXRpb24pLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1cIitpKSx0aGlzLl9vcmllbnRhdGlvbj1pfSxkaXNhYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSEwfSxlbmFibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITF9LGVuYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5fZGlzYWJsZWR9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rpc2FibGVkfSx1cGRhdGVWYXJzOmZ1bmN0aW9uKCl7dmFyIGk9V2luZG93LmVsZW1lbnQsZT10aGlzLl92YXJzLHQ9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixzPXQ/XCJ0b3BcIjpcImxlZnRcIixuPXQ/XCJsZWZ0XCI6XCJ0b3BcIixvPXQ/XCJib3R0b21cIjpcImxlZnRcIixhPXQ/XCJ0b3BcIjpcInJpZ2h0XCIsaD10P1wid2lkdGhcIjpcImhlaWdodFwiLHI9dD9cImhlaWdodFwiOlwid2lkdGhcIixkPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIix0b3A6XCJib3R0b21cIixib3R0b206XCJ0b3BcIn07dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt2YXIgbD1pLmlzKFwiOnZpc2libGVcIik7aWYobHx8aS5zaG93KCksdGhpcy5kaXNhYmxlZCgpJiZ0aGlzLmVuYWJsZSgpLCF0aGlzLmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKXx8dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8Mnx8dGhpcy5fZGlzYWJsZWRHcm91cClyZXR1cm4gdGhpcy5kaXNhYmxlKCksJC5leHRlbmQodGhpcy5fdmFycy50aHVtYm5haWxzLHt3aWR0aDowLGhlaWdodDowfSksbHx8aS5oaWRlKCksdm9pZCB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3RoaXMuZW5hYmxlKCk7dmFyIHU9dGhpcy5fcHJldmlvdXMsYz10aGlzLl9uZXh0LHA9Qm91bmRzLnZpZXdwb3J0KCksZj10aGlzLmVsZW1lbnRbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUocildKCksbT1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIitzKSl8fDAsdj1NYXRoLm1heChmLTIqbSwwKSxnPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK24pKXx8MCx3PShwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK28pKXx8MCkrKHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrYSkpfHwwKTskLmV4dGVuZChlLnRodW1ibmFpbHMse2hlaWdodDpmK3csd2lkdGg6cFt0P1wid2lkdGhcIjpcImhlaWdodFwiXSxwYWRkaW5nVG9wOm19KSwkLmV4dGVuZChlLnRodW1ibmFpbCx7aGVpZ2h0OnYsd2lkdGg6dn0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsRnJhbWUse3dpZHRoOnYrMipnLGhlaWdodDpmfSksZS5zaWRlcz17cHJldmlvdXM6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfSxuZXh0Ont3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH19O3ZhciBiPXBbaF0seT1lLnRodW1ibmFpbEZyYW1lLndpZHRoLHg9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7ZS50aHVtYm5haWxzLndpZHRoPWIsZS5zaWRlcy5lbmFibGVkPTE8eCp5L2I7dmFyIGs9YixDPWUuc2lkZXMsUz1DLnByZXZpb3VzLFc9Qy5uZXh0LE09Uy5tYXJnaW5MZWZ0K1Mud2lkdGgrUy5tYXJnaW5SaWdodCtXLm1hcmdpbkxlZnQrVy53aWR0aCtXLm1hcmdpblJpZ2h0O2Uuc2lkZXMuZW5hYmxlZCYmKGstPU0pO3ZhciBUPXgqeTtUPChrPU1hdGguZmxvb3Ioay95KSp5KSYmKGs9VCk7dmFyIEk9aysoZS5zaWRlcy5lbmFibGVkP006MCk7ZS5pcHA9TWF0aC5yb3VuZChrL3kpLHRoaXMuX21vZGU9XCJwYWdlXCIsZS5pcHA8PTEmJihJPWs9YixlLnNpZGVzLmVuYWJsZWQ9ITEsdGhpcy5fbW9kZT1cImNlbnRlclwiKSxlLnBhZ2VzPU1hdGguY2VpbCh4KnkvayksZS53cmFwcGVyPXt3aWR0aDpJKzEsaGVpZ2h0OmZ9LGUudGh1bWJzPXt3aWR0aDprLGhlaWdodDpmfSxlLnNsaWRlPXt3aWR0aDp4KnkrMSxoZWlnaHQ6Zn0sbHx8aS5oaWRlKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKX0saGlkZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZSgpLHRoaXMudGh1bWJuYWlscy5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247cmV0dXJue3dpZHRoOmk/dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoOnRoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQsaGVpZ2h0Omk/dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodDp0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGh9fSxmaXRUb1ZpZXdwb3J0OmZ1bmN0aW9uKCl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIGk9JC5leHRlbmQoe30sdGhpcy5fdmFycyksZT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uOyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZXNpemUoKX0pLHRoaXMuX3ByZXZpb3VzW2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl9uZXh0W2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl90aHVtYnMuY3NzKHt3aWR0aDppLnRodW1ic1tlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS50aHVtYnNbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLl9zbGlkZS5jc3Moe3dpZHRoOmkuc2xpZGVbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkuc2xpZGVbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KTt2YXIgdD17d2lkdGg6aS53cmFwcGVyW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLndyYXBwZXJbZT9cImhlaWdodFwiOlwid2lkdGhcIl19O3RbXCJtYXJnaW4tXCIrKGU/XCJsZWZ0XCI6XCJ0b3BcIildPU1hdGgucm91bmQoLS41Kmkud3JhcHBlci53aWR0aCkrXCJweFwiLHRbXCJtYXJnaW4tXCIrKGU/XCJ0b3BcIjpcImxlZnRcIildPTAsdGhpcy53cmFwcGVyLmNzcyh0KSx0aGlzLl9wb3NpdGlvbiYmdGhpcy5tb3ZlVG8odGhpcy5fcG9zaXRpb24sITApfX0sbW92ZVRvUGFnZTpmdW5jdGlvbihpKXtpZighKGk8MXx8aT50aGlzLl92YXJzLnBhZ2VzfHxpPT09dGhpcy5fcGFnZSkpe3ZhciBlPXRoaXMuX3ZhcnMuaXBwKihpLTEpKzE7dGhpcy5tb3ZlVG8oZSl9fSxwcmV2aW91c1BhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZS0xKX0sbmV4dFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZSsxKX0sc2hvdzpmdW5jdGlvbihpKXt2YXIgZT10aGlzLl9wb3NpdGlvbjwwO2k8MSYmKGk9MSk7dmFyIHQ9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7dDxpJiYoaT10KSx0aGlzLl9wb3NpdGlvbj1pLHRoaXMuc2V0QWN0aXZlKGkpLFwicGFnZVwiPT09dGhpcy5fbW9kZSYmdGhpcy5fcGFnZT09PU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKXx8dGhpcy5tb3ZlVG8oaSxlKX0sbW92ZVRvOmZ1bmN0aW9uKGksZSl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIHQscyxuPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24sbz0uNSpCb3VuZHMudmlld3BvcnQoKVtuP1wid2lkdGhcIjpcImhlaWdodFwiXSxhPXRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGg7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtzPU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKSx0aGlzLl9wYWdlPXMsdD1hKih0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKi0xO3ZhciBoPVwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1kaXNhYmxlZFwiO3RoaXMuX3ByZXZpb3VzX2J1dHRvblsoczwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKSx0aGlzLl9uZXh0X2J1dHRvblsocz49dGhpcy5fdmFycy5wYWdlcz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCl9ZWxzZSB0PW8rLTEqKGEqKGktMSkrLjUqYSk7cz1QYWdlcy5wYWdlO3ZhciByPXt9LGQ9e307cltuP1widG9wXCI6XCJsZWZ0XCJdPTAsZFtuP1wibGVmdFwiOlwidG9wXCJdPXQrXCJweFwiLHRoaXMuX3NsaWRlLnN0b3AoITApLmNzcyhyKS5hbmltYXRlKGQsZT8wOnMmJnMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlscy5zbGlkZXx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5sb2FkQ3VycmVudFBhZ2UoKX0sdGhpcykpfX0sbG9hZEN1cnJlbnRQYWdlOmZ1bmN0aW9uKCl7dmFyIGksZTtpZih0aGlzLl9wb3NpdGlvbiYmdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCYmISh0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwxKSl7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtpZih0aGlzLl9wYWdlPDEpcmV0dXJuO2k9KHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHArMSxlPU1hdGgubWluKGktMSt0aGlzLl92YXJzLmlwcCx0aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9ZWxzZXt2YXIgdD1NYXRoLmNlaWwodGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoL3RoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgpO2k9TWF0aC5tYXgoTWF0aC5mbG9vcihNYXRoLm1heCh0aGlzLl9wb3NpdGlvbi0uNSp0LDApKSwxKSxlPU1hdGguY2VpbChNYXRoLm1pbih0aGlzLl9wb3NpdGlvbisuNSp0KSksdGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8ZSYmKGU9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWZvcih2YXIgcz1pO3M8PWU7cysrKXRoaXMuX3RodW1ibmFpbHNbcy0xXS5sb2FkKCl9fSxzZXRBY3RpdmU6ZnVuY3Rpb24oaSl7dGhpcy5fc2xpZGUuZmluZChcIi5mci10aHVtYm5haWwtYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKTt2YXIgZT1pJiZ0aGlzLl90aHVtYm5haWxzW2ktMV07ZSYmZS5hY3RpdmF0ZSgpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb24mJnRoaXMuc2V0UG9zaXRpb24odGhpcy5fcG9zaXRpb24pfX07ZnVuY3Rpb24gVGh1bWJuYWlsKCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVGh1bWJuYWlsLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudmlldz1pLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5wcmVCdWlsZCgpfSxwcmVCdWlsZDpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbFwiKS5kYXRhKFwiZnItcG9zaXRpb25cIix0aGlzLl9wb3NpdGlvbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYoIXRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPXRoaXMudmlldy5vcHRpb25zO1RodW1ibmFpbHMuX3NsaWRlLmFwcGVuZCh0aGlzLnRodW1ibmFpbEZyYW1lPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1mcmFtZVwiKS5hcHBlbmQodGhpcy50aHVtYm5haWwuYXBwZW5kKHRoaXMudGh1bWJuYWlsV3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtd3JhcHBlclwiKSkpKSxcImltYWdlXCI9PT10aGlzLnZpZXcudHlwZSYmdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci1sb2FkLXRodW1ibmFpbFwiKS5kYXRhKFwidGh1bWJuYWlsXCIse3ZpZXc6dGhpcy52aWV3LHNyYzppLnRodW1ibmFpbHx8dGhpcy52aWV3LnVybH0pO3ZhciBlPWkudGh1bWJuYWlsJiZpLnRodW1ibmFpbC5pY29uO2UmJnRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaWNvbiBmci10aHVtYm5haWwtaWNvbi1cIitlKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5sb2FkaW5nPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZy1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5zcGlubmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyXCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXItc3BpblwiKSkpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYm9yZGVyXCIpKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zdGF0ZVwiKSksdGhpcy5yZXNpemUoKX19LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsRnJhbWUmJih0aGlzLnRodW1ibmFpbEZyYW1lLnJlbW92ZSgpLHRoaXMudGh1bWJuYWlsRnJhbWU9bnVsbCx0aGlzLmltYWdlPW51bGwpLHRoaXMucmVhZHkmJih0aGlzLnJlYWR5LmFib3J0KCksdGhpcy5yZWFkeT1udWxsKSx0aGlzLnZpbWVvVGh1bWJuYWlsJiYodGhpcy52aW1lb1RodW1ibmFpbC5hYm9ydCgpLHRoaXMudmltZW9UaHVtYm5haWw9bnVsbCksdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9yZW1vdmVkPSEwLHRoaXMudmlldz1udWxsLHRoaXMuX2NsZWFyRGVsYXkoKX0sbG9hZDpmdW5jdGlvbigpe2lmKCEodGhpcy5fbG9hZGVkfHx0aGlzLl9sb2FkaW5nfHx0aGlzLl9yZW1vdmVkKSl7dGhpcy50aHVtYm5haWxXcmFwcGVyfHx0aGlzLmJ1aWxkKCksdGhpcy5fbG9hZGluZz0hMDt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy50aHVtYm5haWwsZT1pJiZcImJvb2xlYW5cIj09PSQudHlwZShpKT90aGlzLnZpZXcudXJsOml8fHRoaXMudmlldy51cmw7aWYodGhpcy5fdXJsPWUpaWYoXCJ2aW1lb1wiPT09dGhpcy52aWV3LnR5cGUpaWYoZT09PWkpdGhpcy5fdXJsPWUsdGhpcy5fbG9hZCh0aGlzLl91cmwpO2Vsc2Ugc3dpdGNoKHRoaXMudmlldy50eXBlKXtjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9UaHVtYm5haWw9bmV3IFZpbWVvVGh1bWJuYWlsKHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl91cmw9aSx0aGlzLl9sb2FkKGkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykpfWVsc2UgdGhpcy5fbG9hZCh0aGlzLl91cmwpfX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIil9LF9sb2FkOmZ1bmN0aW9uKGkpe3RoaXMudGh1bWJuYWlsV3JhcHBlci5wcmVwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpLmF0dHIoe3NyYzppfSkuY3NzKHtvcGFjaXR5OjFlLTR9KSksdGhpcy5mYWRlSW5TcGlubmVyKCksdGhpcy5yZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5pbWc7dGhpcy50aHVtYm5haWxGcmFtZSYmdGhpcy5fbG9hZGluZyYmKHRoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOmUubmF0dXJhbFdpZHRoLGhlaWdodDplLm5hdHVyYWxIZWlnaHR9LHRoaXMucmVzaXplKCksdGhpcy5zaG93KCkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KX0sX2Vycm9yOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZXJyb3JcIiksdGhpcy5pbWFnZSYmdGhpcy5pbWFnZS5oaWRlKCksdGhpcy50aHVtYm5haWxXcmFwcGVyLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikpLHRoaXMuc2hvdygpfSxmYWRlSW5TcGlubmVyOmZ1bmN0aW9uKCl7aWYoU3Bpbm5lci5zdXBwb3J0ZWQmJnRoaXMudmlldy5vcHRpb25zLnNwaW5uZXIpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLl9kZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNwaW5uZXIuc3RvcCghMCkuZmFkZVRvKGkuc2hvd3x8MCwxKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKX19LHNob3c6ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5sb2FkaW5nLnN0b3AoITApLmRlbGF5KGkuZGVsYXkpLmZhZGVUbyhpLnNob3csMCl9LF9jbGVhckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fZGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpLHRoaXMuX2RlbGF5PW51bGwpfSxyZXNpemU6ZnVuY3Rpb24oKXtpZih0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO2lmKHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt3aWR0aDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3RvcDppPzA6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSksbGVmdDppP1RodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpOjB9KSx0aGlzLnRodW1ibmFpbFdyYXBwZXIpe3ZhciBlPVRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsO2lmKHRoaXMudGh1bWJuYWlsLmNzcyh7d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHQsXCJtYXJnaW4tdG9wXCI6TWF0aC5yb3VuZCgtLjUqZS5oZWlnaHQpLFwibWFyZ2luLWxlZnRcIjpNYXRoLnJvdW5kKC0uNSplLndpZHRoKSxcIm1hcmdpbi1ib3R0b21cIjowLFwibWFyZ2luLXJpZ2h0XCI6MH0pLHRoaXMuX2RpbWVuc2lvbnMpe3ZhciB0LHM9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxuPU1hdGgubWF4KHMud2lkdGgscy5oZWlnaHQpLG89JC5leHRlbmQoe30sdGhpcy5fZGltZW5zaW9ucyk7aWYoby53aWR0aD5zLndpZHRoJiZvLmhlaWdodD5zLmhlaWdodCl7dmFyIGE9MSxoPTE7KHQ9Rml0LndpdGhpbihzLG8pKS53aWR0aDxzLndpZHRoJiYoYT1zLndpZHRoL3Qud2lkdGgpLHQuaGVpZ2h0PHMuaGVpZ2h0JiYoaD1zLmhlaWdodC90LmhlaWdodCk7dmFyIHI9TWF0aC5tYXgoYSxoKTsxPHImJih0LndpZHRoKj1yLHQuaGVpZ2h0Kj1yKSwkLmVhY2goXCJ3aWR0aCBoZWlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oaSxlKXt0W2VdPU1hdGgucm91bmQodFtlXSl9KX1lbHNlIHQ9Rml0LndpdGhpbih0aGlzLl9kaW1lbnNpb25zLG8ud2lkdGg8cy53aWR0aHx8by5oZWlnaHQ8cy5oZWlnaHQ/e3dpZHRoOm4saGVpZ2h0Om59OnMpO3ZhciBkPU1hdGgucm91bmQoLjUqcy53aWR0aC0uNSp0LndpZHRoKSxsPU1hdGgucm91bmQoLjUqcy5oZWlnaHQtLjUqdC5oZWlnaHQpO3RoaXMuaW1hZ2UucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcygkLmV4dGVuZCh7fSx0LHt0b3A6bCxsZWZ0OmR9KSl9fX19fSk7dmFyIFVJPXtfbW9kZXM6W1wiZnVsbGNsaWNrXCIsXCJvdXRzaWRlXCIsXCJpbnNpZGVcIl0sX3VpOiExLF92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3I6W1wiLmZyLWNvbnRlbnQtZWxlbWVudFwiLFwiLmZyLWNvbnRlbnRcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZVwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlIC5mci1zdHJva2UtY29sb3JcIl0uam9pbihcIiwgXCIpLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzW2VdLmluaXRpYWxpemUoKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktaW5zaWRlLWhpZGRlbiBmci11aS1mdWxsY2xpY2staGlkZGVuXCIpfSxzZXQ6ZnVuY3Rpb24oaSl7dGhpcy5fdWkmJihXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy11aS1cIit0aGlzLl91aSksT3ZlcmxheS5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS11aS1cIit0aGlzLl91aSkpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXVpLVwiK2kpLE92ZXJsYXkuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktdWktXCIraSksdGhpcy5fZW5hYmxlZCYmdGhpcy5fdWkmJnRoaXMuX3VpIT09aSYmKHRoaXNbdGhpcy5fdWldLmRpc2FibGUoKSx0aGlzW2ldLmVuYWJsZSgpLFVJW2ldLnNob3coKSksdGhpcy5fdWk9aX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5zaG93KCl9LGVuYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV1bZT09PXRoaXMuX3VpP1wiZW5hYmxlXCI6XCJkaXNhYmxlXCJdKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSEwfSxkaXNhYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5kaXNhYmxlKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSExfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5hZGp1c3RQcmV2TmV4dChpLGUpfSxzaG93OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLnNob3coaSxlKX0saGlkZTpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5oaWRlKGksZSl9LHJlc2V0OmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5yZXNldCgpfSx0aGlzKSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmdGhpcy5zZXQoaS5fdWkpfX07cmV0dXJuIFVJLmZ1bGxjbGljaz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2UtZnVsbGNsaWNrXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMucmVzZXRQcmV2TmV4dCgpLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxyZXNldFByZXZOZXh0OmZ1bmN0aW9uKCl7dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLnN0b3AoITApLnJlbW92ZUF0dHIoXCJzdHlsZVwiKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtzfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIG49dGhpcy5fcHJldmlvdXMuYXR0cihcInN0eWxlXCIpO3RoaXMuX3ByZXZpb3VzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgbz1wYXJzZUludCh0aGlzLl9wcmV2aW91cy5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLl9wcmV2aW91cy5hdHRyKHtzdHlsZTpufSksc3x8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBhPXQuX2luZm9IZWlnaHR8fDAsaD10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkscj17XCJtYXJnaW4tdG9wXCI6by0uNSphfSxkPVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvd3x8MDt0aGlzLm9wZW5pbmcmJihkPTApLGguc3RvcCghMCkuYW5pbWF0ZShyLGQsaSksdGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLGhbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZihlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpc3dpdGNoKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpKWlmKDEhPT1QYWdlcy5wYWdlcy5sZW5ndGgpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX1lbHNlIFdpbmRvdy5oaWRlKCl9LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3LnR5cGU7dGhpcy5fdmlzaWJsZSYmKCFlfHxcInlvdXR1YmVcIiE9PWUmJlwidmltZW9cIiE9PWUpJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktZnVsbGNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkuaW5zaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7fSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5fb25Nb3VzZUxlYXZlKGkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5jbGVhclRpbWVyKCl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuX3BhZ2VzLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIpLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudC1lbGVtZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpKXtpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGUmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1pbnNpZGVcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1pbnNpZGVcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5vdXRzaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktb3V0c2lkZVwiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KTt0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksc1sodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LHNob3c6ZnVuY3Rpb24oKXtCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCl9LGhpZGU6ZnVuY3Rpb24oKXt9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe319LCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGkpe19GcmVzY28uaW5pdGlhbGl6ZSgpfSksRnJlc2NvfSk7IiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuaW1wb3J0IEZyZXNjbyBmcm9tICcuL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZU1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG5cbiAgfVxufVxuXG4vKipcbiAqIENhcm91c2VsIGNyZWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKCkge1xuICBpZiAoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjgwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykgJiYgIWpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbIFxuICAgICAgICB7IFxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCwgXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfSBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsIFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIiBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogWyBcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsIFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH0gXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LCBcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIHZhciBzbGlkZXIgPSAkKCcjcHJvZHVjdEdhbGxlcnknKTtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIHNsaWRlclswXS5zbGljayAmJiBzbGlkZXJbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBzbGlkZXIuc2xpY2sob3B0cyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNpbWFnZXMtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcjcHJvZHVjdC1zdGlja3knKS5oZWlnaHQoKSAtICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtIDI0ID49IC0oJCgnI2ltYWdlcy1jb250YWluZXInKS5vZmZzZXQoKS50b3ApKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lOm5vdCgudmFyaWFudC1kaXNhYmxlZCknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEwMDApIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gOTkyKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgfSBlbHNlIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiA5OTIpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICB9IGVsc2UgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiA5OTIpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA5OTIpIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBkaXZUb09wZW4gPSAkKHRoaXMpLmRhdGEoJ2RpdlRvT3BlbicpO1xuXG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKGRpdlRvT3Blbikuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5idG4tZ3JvdXAuZHJvcGRvd246bGFzdCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKCcuZHJvcGRvd24tbWVudScsIHRoaXMpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICQoJ2EuZHJvcGRvd24taWNvbicsIHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudScsIHRoaXMpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICQoJ2EuZHJvcGRvd24taWNvbicsIHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplTWVudShlbGVtZW50KSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gOTkyKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgICBcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG4gIFxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvbiBcbiAqL1xuZnVuY3Rpb24gc2hhcmVGdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7IFxuICAgICAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdzaG93Jyk7IFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplQ29udGVudCgpIHtcbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgc2hhcmVGdW5jdGlvbnMoKTtcbiAgcmVzaXplTWVudSgkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTiBcbiAgJCgnLmRyb3Bkb3duLW1lbnU6bm90KC5sb2dpbi1kcm9wZG93biwgLmNhcnQtZHJvcGRvd24pJykub24oXCJjbGljay5icy5kcm9wZG93blwiLCBmdW5jdGlvbiAoZSkgeyAgIFxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICBzaGFyZUZ1bmN0aW9ucygpO1xuICBwcm9kdWN0RnVuY3Rpb25zKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9XG4gIFxufVxuXG5leHBvcnQgeyBpbml0LCBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXYsIHJlc2l6ZUNvbnRlbnQgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9mb250YXdlc29tZSc7XG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICB9XG4gIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYWNjb3VudC1pY29uLjZhMDIxMDlmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYmFjay41MzNiZmQwMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuY2Q0MmIxOWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jaHJvbm9wb3N0LjEzYWIwMWRmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY29saXNzaW1vLjcyNjYzNDMzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suNWMxYTNjYTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWRlLjk2M2IyNmI5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lbi44YWJmODFlOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuMWUzY2MwZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWZyLjY0OTU0MWNiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1pdC5hYTkyMzY2Yi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uYjY5OTYwNTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tYXN0ZXJjYXJkLjgwZTk1NWYxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS45NDcxYWNkZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuNzIwODkxOTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9wYXlwYWwuM2VjMTZiMTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LmE0ZDUxMDlmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvc2hvcHBpbmctYmFnLWljb24uNzU0N2E4YjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjQ5YWRmNTRjLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=