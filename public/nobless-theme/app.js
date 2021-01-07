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
        breakpoint: 1200,
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
        breakpoint: 1200,
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
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselCompleteYourStyle').next('.slider-controls'),
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
        breakpoint: 1200,
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
  /*$('.register-form button').on('click', function(e) {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    const email = $('.register-form input').val();
    if (regex.test(email)) {
      $(e.target).prev('div').find('span.is-invalid').addClass('d-none');
      $(e.target).closest('form').trigger('submit');
    } else {
      $(e.target).prev('div').find('span.is-invalid').removeClass('d-none');
    }
  });*/

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
  loginFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  cartFunctions();
  resizeMainContainer();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  replaceCarouselArrow();
  /*if (document.getElementById('mainContentContainer') && document.getElementById('product-info')) {
    document.getElementById('mainContentContainer').onscroll = fixProductDescriptionDiv;
    document.getElementById('product-info').onscroll = fixProductDescriptionDiv;
  }*/
  // Show mobile menu after page is loaded

  $('.mobile-offcanvas').show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZWxvYWQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JldHVybi1wb2xpY3kucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS92aXNhLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhU3RhciIsImZhUXVlc3Rpb25DaXJjbGUiLCJmYVNob3BwaW5nQmFnIiwiZmFDaGVjayIsImZhRXhjbGFtYXRpb25DaXJjbGUiLCJmYUluZm9DaXJjbGUiLCJmYUNoZXZyb25VcCIsImZhTWFwTWFya2VyQWx0IiwiZmFTaHV0dGxlVmFuIiwiZmFDcmVkaXRDYXJkIiwiZmFGbGFnIiwiZmFDY01hc3RlcmNhcmQiLCJmYUNjVmlzYSIsImZhQ2NQYXlwYWwiLCJmYVRpbWVzIiwiZmFTZWFyY2giLCJmYVBsdXMiLCJmYVBlbmNpbEFsdCIsImZhU3luY0FsdCIsImRvbSIsIndhdGNoIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWwiLCJlbGVtZW50IiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicmVkaXJlY3RVcmwiLCJ2YWxpZGF0aW9uRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlcXVlc3QiLCJheGlvcyIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjbGFzc0xpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVycm9yIiwicmVtb3ZlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJkYXRhIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJwYXJzZUtleSIsImtleSIsInJlcGxhY2UiLCJ3b3JkcyIsInRvVXBwZXJDYXNlIiwiU3lsaXVzQWRkcmVzc0Jvb2siLCJzZWxlY3QiLCJmaW5kQnlOYW1lIiwibmFtZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJ2YWx1ZSIsInByb3ZpbmNlQ29kZSIsInByb3ZpbmNlTmFtZSIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsImlucHV0IiwicHJvcGVydHkiLCJmaWVsZCIsImluZGV4T2YiLCJkaXNwYXRjaEV2ZW50IiwiZXhpc3RzIiwic2V0SW50ZXJ2YWwiLCJwcm92aW5jZUNvZGVGaWVsZCIsInByb3ZpbmNlTmFtZUZpZWxkIiwiaGFzQXR0cmlidXRlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJyZWxvYWQiLCJTeWxpdXNBcGlUb2dnbGUiLCJ0b2dnbGVhYmxlRWxlbWVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJTeWxpdXNSYXRpbmciLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsInNldHRpbmdzIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJvblJhdGUiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicHJvZHVjdEZ1bmN0aW9ucyIsImJ1bmRsZUl0ZW0iLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImRldmVsb3BNb2JpbGVNZW51IiwibWVudUljb25lc0Z1bmN0aW9ucyIsImhlYWRlck91dGVySGVpZ2h0IiwicHJvZHVjdENvbnRhaW5lckhlaWdodCIsInJlc2l6ZU1lbnUiLCJoZWFkZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJsb2dpbkZ1bmN0aW9ucyIsImZvcm1FbGVtZW50IiwiYWpheCIsInNlcmlhbGl6ZSIsInRleHQiLCJwYXJzZUhUTUwiLCJyZXNwb25zZVRleHQiLCJzaGFyZUZ1bmN0aW9ucyIsInRvb2x0aXAiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwiY2FydEZ1bmN0aW9ucyIsImNvdXBvbiIsIm5ld1F0eSIsImlucHV0UXR5TmFtZSIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJwcmV2IiwibG9naW5QYWdlRnVuY3Rpb25zIiwibW9kYWxJZCIsIm1vZGFsIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInN5bGl1c0JpbGxpbmdBZGRyZXNzIiwiZWxlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtCQUFqTixFQUEyTkMsY0FBM04sRUFBbU9DLHdCQUFuTyxFQUFnUEMsb0JBQWhQOztBQUNBQyx3QkFBSUMsS0FBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7OztBQUNBOzs7Ozs7QUFaQTtBQUNB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Ozs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9yLnJlc3BvbnNlLmRhdGEpLmZvckVhY2goKFssIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2UuZXJyb3JzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaG9pY2VEYXRhID0ge307XG5cbiAgICAgIFsuLi5jaG9pY2UuYXR0cmlidXRlc10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBjb25zdCBjYW1lbENhc2VkID0gYXR0ci5uYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpLnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBjaG9pY2VEYXRhW2NhbWVsQ2FzZWRdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZURhdGE7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCdbZGF0YS1qcy1hZGRyZXNzLWJvb2tdJykucXVlcnlTZWxlY3RvcignLnByb3ZpbmNlLWNvbnRhaW5lcicpO1xuXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZURhdGEpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlQ29kZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VDb2RlJyk7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkICYmIHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlQ29kZUZpZWxkLnZhbHVlID0gcHJvdmluY2VDb2RlO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpbmNlTmFtZUZpZWxkICYmIHByb3ZpbmNlTmFtZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VOYW1lICE9PSAnJyB8fCBwcm92aW5jZU5hbWUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbHVlID0gcHJvdmluY2VOYW1lO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZHJlc3NCb29rO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNMb2FkYWJsZUZvcm1zO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFByb3ZpbmNlSW5wdXRWYWx1ZSh2YWx1ZVNlbGVjdG9yKSB7XG4gIGNvbnN0IHZhbCA9IHZhbHVlU2VsZWN0b3IgPyB2YWx1ZVNlbGVjdG9yLnZhbHVlIDogbnVsbDtcbiAgcmV0dXJuICF2YWwgfHwgdmFsID09IHVuZGVmaW5lZCA/ICcnIDogYHZhbHVlPVwiJHt2YWx9XCJgO1xufTtcblxuXG5jb25zdCBTeWxpdXNQcm92aW5jZUZpZWxkID0gZnVuY3Rpb24gU3lsaXVzUHJvdmluY2VGaWVsZCgpIHtcbiAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdFtuYW1lJD1cIltjb3VudHJ5Q29kZV1cIl0nKTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIGNvdW50cnlTZWxlY3QuZm9yRWFjaCgoY291bnRyeVNlbGVjdEl0ZW0pID0+IHtcbiAgICBjb3VudHJ5U2VsZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICcnIHx8IHNlbGVjdC52YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJvdmluY2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnJyk7XG5cbiAgICAgIGF4aW9zLmdldChwcm92aW5jZUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIHsgcGFyYW1zOiB7IGNvdW50cnlDb2RlOiBzZWxlY3QudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5jb250ZW50LmluZGV4T2YoJ3NlbGVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgoXG4gICAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCA+IG9wdGlvbltzZWxlY3RlZCQ9XCJzZWxlY3RlZFwiXScpXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkTmFtZX1cIiR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnb3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJywgJ29wdGlvbiB2YWx1ZT1cIlwiJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YCwgYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9XCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VJbnB1dFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZE5hbWV9XCIke3Byb3ZpbmNlSW5wdXRWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZUlucHV0RmllbGRJZH1cImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50cnlTZWxlY3RJdGVtLnZhbHVlICE9PSAnJykge1xuICAgICAgY291bnRyeVNlbGVjdEl0ZW0uZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1Byb3ZpbmNlRmllbGQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNSYXRpbmcge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJhdGluZ01heCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nTWF4KSB8fCA1O1xuICAgICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlKSB8fCAwO1xuICAgICAgdGhpcy52aWV3T25seSA9IHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdWaWV3b25seSAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuYnRuT25FbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vbl0nKTtcbiAgICAgIHRoaXMuYnRuT2ZmRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb2ZmXScpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnJhdGluZ01heDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWxlbWVudC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUgPSBpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T25seSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPD0gdGhpcy5yYXRpbmdBdmVyYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PbkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9mZkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0VmFsdWUoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUpO1xuICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzLm9uUmF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmF0aW5nO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7IH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IodHJpZ2dlcikge1xuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50cmlnZ2VyLmRhdGFzZXQuanNUb2dnbGUpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlci5jaGVja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNsYXNzIFN5bGl1c1ZhcmlhbnRJbWFnZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LWltYWdlXScpO1xuICAgIHRoaXMubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2VMaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlTGluayA9IHRoaXMubWFpbkltYWdlTGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZVNyYyA9IHRoaXMubWFpbkltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldEltYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgaW5wdXRbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl06Y2hlY2tlZCwgXG4gICAgICBzZWxlY3RbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdIG9wdGlvbjpjaGVja2VkXG4gICAgYCk7XG5cbiAgICByZXR1cm4gWy4uLml0ZW1zXS5tYXAoZWwgPT4gZWwudmFsdWUpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUltYWdlU3JjKHZhcmlhbnQpIHtcbiAgICBsZXQgaW1hZ2VMaW5rID0gdGhpcy5kZWZhdWx0SW1hZ2VMaW5rO1xuICAgIGxldCBpbWFnZVNyYyA9IHRoaXMuZGVmYXVsdEltYWdlU3JjO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1jb2RlPVwiJHt2YXJpYW50fVwiXSwgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtb3B0aW9ucz1cIiR7dmFyaWFudH0gXCJdXG4gICAgYCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1qcy1wcm9kdWN0LXRodW1ibmFpbF0nKTtcbiAgICAgIGltYWdlTGluayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBpbWFnZVNyYyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFyZ2UtdGh1bWJuYWlsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1hZ2VMaW5rLCBpbWFnZVNyYyB9O1xuICB9XG5cbiAgc2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRBY3RpdmVJbWFnZVNyYyh0aGlzLmdldEFjdGl2ZVZhcmlhbnQoKSk7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGltZy5pbWFnZUxpbmspO1xuICAgIHRoaXMubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmltYWdlU3JjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50SW1hZ2VzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSAnJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IHNlbGVjdFtkYXRhLW9wdGlvbl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHNlbGVjdG9yICs9IGBbZGF0YS0ke3NlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAocHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdW5hdmFpbGFibGUtdGV4dCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtdmFyaWFudC1wcmljZV0nKS5pbm5lckhUTUw7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBzeWxpdXNWYXJpYW50c1ByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKSB8fCBudWxsO1xuICBjb25zdCBzeWxpdXNQcm9kdWN0VmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXByb2R1Y3QtdmFyaWFudHMnKSB8fCBudWxsO1xuXG4gIGlmIChzeWxpdXNWYXJpYW50c1ByaWNpbmcpIHtcbiAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICB9IGVsc2UgaWYgKHN5bGl1c1Byb2R1Y3RWYXJpYW50cykge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50c1ByaWNlcztcbiIsIi8qIEpTIHBsdWdpbnMgKi9cbmltcG9ydCAncG9wcGVyLmpzL2Rpc3QvcG9wcGVyLm1pbic7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCAnLi9pbmRleEJvb3RzdHJhcFRoZW1lJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcblxuLyogQ3NzIGZpbGVzICovXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbi8qIE1lZGlhIGZpbGVzICovXG5pbXBvcnQgJy4vbWVkaWEvbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JldHVybi1wb2xpY3kucG5nJztcbmltcG9ydCAnLi9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tYXN0ZXJjYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvdmlzYS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3BheXBhbC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NvbGlzc2ltby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2Nocm9ub3Bvc3QucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYWNjb3VudC1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9iYWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbmV4dC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZnIucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWRlLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1pdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZXMucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVuLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmVsb2FkLnBuZyc7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcblxuIiwiLyoqXG4gKiBGcmVzY28gLSBBIEJlYXV0aWZ1bCBSZXNwb25zaXZlIExpZ2h0Ym94IC0gdjIuMy4wXG4gKiAoYykgMjAxMi0yMDE5IE5pY2sgU3Rha2VuYnVyZ1xuICpcbiAqIGh0dHBzOi8vd3d3LmZyZXNjb2pzLmNvbVxuICpcbiAqIEBsaWNlbnNlOiBodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wXG4gKi9cbiFmdW5jdGlvbihpLGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImpxdWVyeVwiKSk6aS5GcmVzY289ZShqUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKCQpe3ZhciBGcmVzY289e307JC5leHRlbmQoRnJlc2NvLHt2ZXJzaW9uOlwiMi4zLjBcIn0pLEZyZXNjby5Ta2lucz17ZnJlc2NvOnt9fTt2YXIgQm91bmRzPXt2aWV3cG9ydDpmdW5jdGlvbigpe3ZhciBpPXt3aWR0aDokKHdpbmRvdykud2lkdGgoKX07aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZCYmQnJvd3Nlci5HZWNrbyl7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoO2kuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCplfWVsc2UgaS5oZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3JldHVybiBpfX0sQnJvd3Nlcj0oZT1uYXZpZ2F0b3IudXNlckFnZW50LHtJRTohKCF3aW5kb3cuYXR0YWNoRXZlbnR8fC0xIT09ZS5pbmRleE9mKFwiT3BlcmFcIikpJiZmKFwiTVNJRSBcIiksT3BlcmE6LTE8ZS5pbmRleE9mKFwiT3BlcmFcIikmJighIXdpbmRvdy5vcGVyYSYmb3BlcmEudmVyc2lvbiYmcGFyc2VGbG9hdChvcGVyYS52ZXJzaW9uKCkpfHw3LjU1KSxXZWJLaXQ6LTE8ZS5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpJiZmKFwiQXBwbGVXZWJLaXQvXCIpLEdlY2tvOi0xPGUuaW5kZXhPZihcIkdlY2tvXCIpJiYtMT09PWUuaW5kZXhPZihcIktIVE1MXCIpJiZmKFwicnY6XCIpLE1vYmlsZVNhZmFyaTohIWUubWF0Y2goL0FwcGxlLipNb2JpbGUuKlNhZmFyaS8pLENocm9tZTotMTxlLmluZGV4T2YoXCJDaHJvbWVcIikmJmYoXCJDaHJvbWUvXCIpLENocm9tZU1vYmlsZTotMTxlLmluZGV4T2YoXCJDck1vXCIpJiZmKFwiQ3JNby9cIiksQW5kcm9pZDotMTxlLmluZGV4T2YoXCJBbmRyb2lkXCIpJiZmKFwiQW5kcm9pZCBcIiksSUVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiSUVNb2JpbGVcIikmJmYoXCJJRU1vYmlsZS9cIil9KSxlO2Z1bmN0aW9uIGYoaSl7dmFyIHQ9bmV3IFJlZ0V4cChpK1wiKFtcXFxcZC5dKylcIikuZXhlYyhlKTtyZXR1cm4hdHx8cGFyc2VGbG9hdCh0WzFdKX12YXIgX3NsaWNlPUFycmF5LnByb3RvdHlwZS5zbGljZTtmdW5jdGlvbiBiYXNlVG9TdHJpbmcoaSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGk/aTpudWxsPT1pP1wiXCI6aStcIlwifXZhciBfPXtpc0VsZW1lbnQ6ZnVuY3Rpb24oaSl7cmV0dXJuIGkmJjE9PT1pLm5vZGVUeXBlfSxTdHJpbmc6e2NhcGl0YWxpemU6ZnVuY3Rpb24oaSl7cmV0dXJuKGk9YmFzZVRvU3RyaW5nKGkpKSYmaS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnNsaWNlKDEpfX19OyQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIixmdW5jdGlvbihpKXt2YXIgZTtpZihpLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YT9lPWkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhLzEyMDppLm9yaWdpbmFsRXZlbnQuZGV0YWlsJiYoZT0taS5vcmlnaW5hbEV2ZW50LmRldGFpbC8zKSxlKXt2YXIgdD0kLkV2ZW50KFwiZnJlc2NvOm1vdXNld2hlZWxcIik7JChpLnRhcmdldCkudHJpZ2dlcih0LGUpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaS5zdG9wUHJvcGFnYXRpb24oKSx0LmlzRGVmYXVsdFByZXZlbnRlZCgpJiZpLnByZXZlbnREZWZhdWx0KCl9fSk7dmFyIEZpdD17d2l0aGluOmZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0PSQuZXh0ZW5kKHtoZWlnaHQ6ITAsd2lkdGg6ITB9LGFyZ3VtZW50c1syXXx8e30pLHM9JC5leHRlbmQoe30sZSksbj0xLG89NSxhPXQud2lkdGgsaD10LmhlaWdodDswPG8mJihhJiZzLndpZHRoPmkud2lkdGh8fGgmJnMuaGVpZ2h0PmkuaGVpZ2h0KTspe3ZhciByPTEsZD0xO2EmJnMud2lkdGg+aS53aWR0aCYmKHI9aS53aWR0aC9zLndpZHRoKSxoJiZzLmhlaWdodD5pLmhlaWdodCYmKGQ9aS5oZWlnaHQvcy5oZWlnaHQpLG49TWF0aC5taW4ocixkKSxzPXt3aWR0aDplLndpZHRoKm4saGVpZ2h0OmUuaGVpZ2h0Km59LG8tLX1yZXR1cm4gcy53aWR0aD1NYXRoLm1heChzLndpZHRoLDApLHMuaGVpZ2h0PU1hdGgubWF4KHMuaGVpZ2h0LDApLHN9fTskLmV4dGVuZCgkLmVhc2luZyx7ZnJlc2NvRWFzZUluQ3ViaWM6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcyooZS89bikqZSplK3R9LGZyZXNjb0Vhc2VJblNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4tcypNYXRoLmNvcyhlL24qKE1hdGguUEkvMikpK3MrdH0sZnJlc2NvRWFzZU91dFNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcypNYXRoLnNpbihlL24qKE1hdGguUEkvMikpK3R9fSk7dmFyIFN1cHBvcnQ9KE89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxQPVwiV2Via2l0IE1veiBPIG1zIEtodG1sXCIuc3BsaXQoXCIgXCIpLHtjYW52YXM6KGJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksISghYmEuZ2V0Q29udGV4dHx8IWJhLmdldENvbnRleHQoXCIyZFwiKSkpLGNzczp7YW5pbWF0aW9uOlMoXCJhbmltYXRpb25cIiksdHJhbnNmb3JtOlMoXCJ0cmFuc2Zvcm1cIikscHJlZml4ZWQ6ZnVuY3Rpb24oaSl7cmV0dXJuIFMoaSxcInByZWZpeFwiKX19LHN2ZzohIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyYmISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QsdG91Y2g6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl9Y2F0Y2goaSl7cmV0dXJuITF9fSgpfSksYmEsTyxQO2Z1bmN0aW9uIFMoaSxlKXt2YXIgdD1pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc3Vic3RyKDEpO3JldHVybiBmdW5jdGlvbihpLGUpe2Zvcih2YXIgdCBpbiBpKWlmKHZvaWQgMCE9PU8uc3R5bGVbaVt0XV0pcmV0dXJuXCJwcmVmaXhcIiE9PWV8fGlbdF07cmV0dXJuITF9KChpK1wiIFwiK1Auam9pbih0K1wiIFwiKSt0KS5zcGxpdChcIiBcIiksZSl9U3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaD1mdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2g9U3VwcG9ydC50b3VjaCYmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWR8fEJyb3dzZXIuSUVNb2JpbGV8fEJyb3dzZXIuQ2hyb21lTW9iaWxlfHwhL14oV2lufE1hY3xMaW51eCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSl9LFN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2goKTt2YXIgSW1hZ2VSZWFkeT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07ZnVuY3Rpb24gVGltZXJzKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfWZ1bmN0aW9uIGdldFVSSURhdGEocyl7dmFyIG49e3R5cGU6XCJpbWFnZVwifTtyZXR1cm4gJC5lYWNoKFR5cGVzLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5kYXRhKHMpO3QmJigobj10KS50eXBlPWksbi51cmw9cyl9KSxufWZ1bmN0aW9uIGRldGVjdEV4dGVuc2lvbihpKXt2YXIgZT0oaXx8XCJcIikucmVwbGFjZSgvXFw/LiovZyxcIlwiKS5tYXRjaCgvXFwuKFteLl17Myw0fSkkLyk7cmV0dXJuIGU/ZVsxXS50b0xvd2VyQ2FzZSgpOm51bGx9JC5leHRlbmQoSW1hZ2VSZWFkeS5wcm90b3R5cGUse3N1cHBvcnRzOntuYXR1cmFsV2lkdGg6XCJuYXR1cmFsV2lkdGhcImluIG5ldyBJbWFnZX0saW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5pbWc9JChpKVswXSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMuaXNMb2FkZWQ9ITEsdGhpcy5vcHRpb25zPSQuZXh0ZW5kKHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixwb2xsRmFsbGJhY2tBZnRlcjoxZTN9LGFyZ3VtZW50c1szXXx8e30pLHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRoJiZcIm9ubG9hZFwiIT09dGhpcy5vcHRpb25zLm1ldGhvZD90aGlzLmltZy5jb21wbGV0ZSYmXCJ1bmRlZmluZWRcIiE9PSQudHlwZSh0aGlzLmltZy5uYXR1cmFsV2lkdGgpP3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpezA8dGhpcy5pbWcubmF0dXJhbFdpZHRoP3RoaXMuc3VjY2VzcygpOnRoaXMuZXJyb3IoKX0sdGhpcykpOigkKHRoaXMuaW1nKS5iaW5kKFwiZXJyb3JcIiwkLnByb3h5KGZ1bmN0aW9uKCl7c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lcnJvcigpfSx0aGlzKSl9LHRoaXMpKSx0aGlzLmludGVydmFscz1bWzFlMywxMF0sWzJlMyw1MF0sWzRlMywxMDBdLFsyZTQsNTAwXV0sdGhpcy5faXBvcz0wLHRoaXMuX3RpbWU9MCx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXSx0aGlzLnBvbGwoKSk6c2V0VGltZW91dCgkLnByb3h5KHRoaXMuZmFsbGJhY2ssdGhpcykpfSxwb2xsOmZ1bmN0aW9uKCl7dGhpcy5fcG9sbGluZz1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtpZigwPHRoaXMuaW1nLm5hdHVyYWxXaWR0aCl0aGlzLnN1Y2Nlc3MoKTtlbHNle2lmKHRoaXMuX3RpbWUrPXRoaXMuX2RlbGF5LHRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmdGhpcy5fdGltZT49dGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiYhdGhpcy5fdXNlZFBvbGxGYWxsYmFjayYmKHRoaXMuX3VzZWRQb2xsRmFsbGJhY2s9ITAsdGhpcy5mYWxsYmFjaygpKSx0aGlzLl90aW1lPnRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzBdKXtpZighdGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvcysxXSlyZXR1cm4gdm9pZCB0aGlzLmVycm9yKCk7dGhpcy5faXBvcysrLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdfXRoaXMucG9sbCgpfX0sdGhpcyksdGhpcy5fZGVsYXkpfSxmYWxsYmFjazpmdW5jdGlvbigpe3ZhciBpPW5ldyBJbWFnZTsodGhpcy5fZmFsbGJhY2tJbWc9aSkub25sb2FkPSQucHJveHkoZnVuY3Rpb24oKXtpLm9ubG9hZD1mdW5jdGlvbigpe30sdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGh8fCh0aGlzLmltZy5uYXR1cmFsV2lkdGg9aS53aWR0aCx0aGlzLmltZy5uYXR1cmFsSGVpZ2h0PWkuaGVpZ2h0KSx0aGlzLnN1Y2Nlc3MoKX0sdGhpcyksaS5vbmVycm9yPSQucHJveHkodGhpcy5lcnJvcix0aGlzKSxpLnNyYz10aGlzLmltZy5zcmN9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5fZmFsbGJhY2tJbWcmJih0aGlzLl9mYWxsYmFja0ltZy5vbmxvYWQ9ZnVuY3Rpb24oKXt9KSx0aGlzLl9wb2xsaW5nJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3BvbGxpbmcpLHRoaXMuX3BvbGxpbmc9bnVsbCl9LHN1Y2Nlc3M6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRTdWNjZXNzfHwodGhpcy5fY2FsbGVkU3VjY2Vzcz0hMCx0aGlzLmlzTG9hZGVkPSEwLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKHRoaXMpKX0sZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRFcnJvcnx8KHRoaXMuX2NhbGxlZEVycm9yPSEwLHRoaXMuYWJvcnQoKSx0aGlzLmVycm9yQ2FsbGJhY2smJnRoaXMuZXJyb3JDYWxsYmFjayh0aGlzKSl9fSksJC5leHRlbmQoVGltZXJzLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX3RpbWVycz17fX0sc2V0OmZ1bmN0aW9uKGksZSx0KXt0aGlzLl90aW1lcnNbaV09c2V0VGltZW91dChlLHQpfSxnZXQ6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXMuX3RpbWVyc1tpXX0sY2xlYXI6ZnVuY3Rpb24oaSl7aT90aGlzLl90aW1lcnNbaV0mJihjbGVhclRpbWVvdXQodGhpcy5fdGltZXJzW2ldKSxkZWxldGUgdGhpcy5fdGltZXJzW2ldKTp0aGlzLmNsZWFyQWxsKCl9LGNsZWFyQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RpbWVycyxmdW5jdGlvbihpLGUpe2NsZWFyVGltZW91dChlKX0pLHRoaXMuX3RpbWVycz17fX19KTt2YXIgVHlwZT17aXNWaWRlbzpmdW5jdGlvbihpKXtyZXR1cm4vXih5b3V0dWJlfHZpbWVvKSQvLnRlc3QoaSl9fSxUeXBlcz17aW1hZ2U6e2V4dGVuc2lvbnM6XCJibXAgZ2lmIGpwZWcganBnIHBuZyB3ZWJwXCIsZGV0ZWN0OmZ1bmN0aW9uKGkpe3JldHVybi0xPCQuaW5BcnJheShkZXRlY3RFeHRlbnNpb24oaSksdGhpcy5leHRlbnNpb25zLnNwbGl0KFwiIFwiKSl9LGRhdGE6ZnVuY3Rpb24oaSl7cmV0dXJuISF0aGlzLmRldGVjdCgpJiZ7ZXh0ZW5zaW9uOmRldGVjdEV4dGVuc2lvbihpKX19fSx2aW1lbzp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8odmltZW9cXC5jb20pXFwvKFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpO3JldHVybiEoIWV8fCFlWzJdKSYmZVsyXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19LHlvdXR1YmU6e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC93YXRjaFxcPyg/PS4qdmk/PShbYS16QS1aMC05LV9dKykpKD86XFxTKyk/JC8uZXhlYyhpKTtyZXR1cm4gZSYmZVsyXT9lWzJdOiEoIShlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLyh2aT9cXC98dVxcL3xlbWJlZFxcLyk/KFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpKXx8IWVbM10pJiZlWzNdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX19LFZpbWVvVGh1bWJuYWlsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy51cmw9aSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGkuZGF0YS51cmwpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2lmKGkmJmkudGh1bWJuYWlsX3VybCl7dmFyIGU9e3VybDppLnRodW1ibmFpbF91cmx9O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGUudXJsKX1lbHNlIHRoaXMuZXJyb3JDYWxsYmFjaygpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksVmltZW9SZWFkeT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnVybD1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLmNhbGxiYWNrKGkuZGF0YSk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImbWF4d2lkdGg9OTk5OTk5OSZtYXhoZWlnaHQ9OTk5OTk5OSZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT17ZGltZW5zaW9uczp7d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHR9fTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrKGUpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksT3B0aW9ucz17ZGVmYXVsdHM6e2VmZmVjdHM6e2NvbnRlbnQ6e3Nob3c6MCxoaWRlOjB9LHNwaW5uZXI6e3Nob3c6MTUwLGhpZGU6MTUwfSx3aW5kb3c6e3Nob3c6NDQwLGhpZGU6MzAwfSx0aHVtYm5haWw6e3Nob3c6MzAwLGRlbGF5OjE1MH0sdGh1bWJuYWlsczp7c2xpZGU6MH19LGtleWJvYXJkOntsZWZ0OiEwLHJpZ2h0OiEwLGVzYzohMH0sbG9hZGVkTWV0aG9kOlwibmF0dXJhbFdpZHRoXCIsbG9vcDohMSxvbkNsaWNrOlwicHJldmlvdXMtbmV4dFwiLG92ZXJmbG93OiExLG92ZXJsYXk6e2Nsb3NlOiEwfSxwcmVsb2FkOlsxLDJdLHBvc2l0aW9uOiEwLHNraW46XCJmcmVzY29cIixzcGlubmVyOiEwLHNwaW5uZXJEZWxheTozMDAsc3luYzohMCx0aHVtYm5haWxzOlwiaG9yaXpvbnRhbFwiLHVpOlwib3V0c2lkZVwiLHVpRGVsYXk6M2UzLHZpbWVvOnthdXRvcGxheToxLGFwaToxLHRpdGxlOjEsYnlsaW5lOjEscG9ydHJhaXQ6MCxsb29wOjB9LHlvdXR1YmU6e2F1dG9wbGF5OjEsY29udHJvbHM6MSxlbmFibGVqc2FwaToxLGhkOjEsaXZfbG9hZF9wb2xpY3k6Myxsb29wOjAsbW9kZXN0YnJhbmRpbmc6MSxyZWw6MCx2cTpcImhkMTA4MFwifSxpbml0aWFsVHlwZU9wdGlvbnM6e2ltYWdlOnt9LHZpbWVvOnt3aWR0aDoxMjgwfSx5b3V0dWJlOnt3aWR0aDoxMjgwLGhlaWdodDo3MjB9fX0sY3JlYXRlOmZ1bmN0aW9uKGksZSx0KXt0PXR8fHt9LChpPWl8fHt9KS5za2luPWkuc2tpbnx8dGhpcy5kZWZhdWx0cy5za2luO3ZhciBzPWkuc2tpbj8kLmV4dGVuZCh7fSxGcmVzY28uU2tpbnNbaS5za2luXXx8RnJlc2NvLlNraW5zW3RoaXMuZGVmYXVsdHMuc2tpbl0pOnt9LG49JC5leHRlbmQoITAse30sdGhpcy5kZWZhdWx0cyxzKTtuLmluaXRpYWxUeXBlT3B0aW9ucyYmKGUmJm4uaW5pdGlhbFR5cGVPcHRpb25zW2VdJiYobj0kLmV4dGVuZCghMCx7fSxuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSxuKSksZGVsZXRlIG4uaW5pdGlhbFR5cGVPcHRpb25zKTt2YXIgbz0kLmV4dGVuZCghMCx7fSxuLGkpO2lmKFN1cHBvcnQubW9iaWxlVG91Y2gmJlwiaW5zaWRlXCI9PT1vLnVpJiYoby51aT1cIm91dHNpZGVcIiksKCFvLmVmZmVjdHN8fEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSkmJihvLmVmZmVjdHM9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMuZWZmZWN0cyxmdW5jdGlvbihlLGkpeyQuZWFjaChvLmVmZmVjdHNbZV09JC5leHRlbmQoe30saSksZnVuY3Rpb24oaSl7by5lZmZlY3RzW2VdW2ldPTB9KX0pLG8uc3Bpbm5lcj0hMSksby5rZXlib2FyZCYmKFwiYm9vbGVhblwiPT09JC50eXBlKG8ua2V5Ym9hcmQpJiYoby5rZXlib2FyZD17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5rZXlib2FyZCxmdW5jdGlvbihpLGUpe28ua2V5Ym9hcmRbaV09ITB9KSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwkLmV4dGVuZChvLmtleWJvYXJkLHtsZWZ0OiExLHJpZ2h0OiExfSkpLCFvLm92ZXJmbG93fHxTdXBwb3J0Lm1vYmlsZVRvdWNoP28ub3ZlcmZsb3c9e3g6ITEseTohMX06XCJib29sZWFuXCI9PT0kLnR5cGUoby5vdmVyZmxvdykmJihvLm92ZXJmbG93PXt4OiExLHk6ITB9KSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fChvLm92ZXJsYXA9ITEpLChCcm93c2VyLklFJiZCcm93c2VyLklFPDl8fFN1cHBvcnQubW9iaWxlVG91Y2gpJiYoby50aHVtYm5haWw9ITEsby50aHVtYm5haWxzPSExKSxcInlvdXR1YmVcIiE9PWUmJihvLndpZHRoJiYhby5tYXhXaWR0aCYmKG8ubWF4V2lkdGg9by53aWR0aCksby5oZWlnaHQmJiFvLm1heEhlaWdodCYmKG8ubWF4SGVpZ2h0PW8uaGVpZ2h0KSksIW8udGh1bWJuYWlsJiZcImJvb2xlYW5cIiE9PSQudHlwZShvLnRodW1ibmFpbCkpe3ZhciBhPSExO3N3aXRjaChlKXtjYXNlXCJ5b3V0dWJlXCI6YT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiK1wiLy9pbWcueW91dHViZS5jb20vdmkvXCIrdC5pZCtcIi8wLmpwZ1wiO2JyZWFrO2Nhc2VcImltYWdlXCI6Y2FzZVwidmltZW9cIjphPSEwfW8udGh1bWJuYWlsPWF9cmV0dXJuIG99fSxPdmVybGF5PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMudmlzaWJsZT0hMX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheVwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXktYmFja2dyb3VuZFwiKSksdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZpLnZpZXcmJmkudmlldy5vcHRpb25zLm92ZXJsYXkmJiFpLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHxXaW5kb3cuaGlkZSgpfSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIrdGhpcy5za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIraSksdGhpcy5za2luPWl9LGF0dGFjaDpmdW5jdGlvbigpeyQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5kZXRhY2goKX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLm1heCgpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSl7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZXx8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQoc3x8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSx0aGlzLnZpc2libGU9ITEsaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LGdldFNjcm9sbERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgbj17fTtyZXR1cm4gJC5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oaSxlKXt2YXIgdD1lLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSkscz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7bltlXT0oQnJvd3Nlci5JRT9NYXRoLm1heChzW1wib2Zmc2V0XCIrdF0sc1tcInNjcm9sbFwiK3RdKTpCcm93c2VyLldlYktpdD9kb2N1bWVudC5ib2R5W1wic2Nyb2xsXCIrdF06c1tcInNjcm9sbFwiK3RdKXx8MH0pLG59LG1heDpmdW5jdGlvbigpe3ZhciBpO2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZCcm93c2VyLldlYktpdCYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4JiYoaT10aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuY3NzKGkpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpe3ZhciBlPUJvdW5kcy52aWV3cG9ydCgpO3RoaXMuZWxlbWVudC5jc3Moe2hlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRofSl9U3VwcG9ydC5tb2JpbGVUb3VjaCYmIWkmJnRoaXMuZWxlbWVudC5jc3Moe2hlaWdodDp0aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKS5oZWlnaHR9KX19LFdpbmRvdz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzPVtdLHRoaXMucXVldWVzLmhpZGU9JCh7fSksdGhpcy5wYWdlcz1bXSx0aGlzLl90cmFja2luZz1bXSx0aGlzLl9maXJzdD0hMCx0aGlzLnRpbWVycz1uZXcgVGltZXJzLHRoaXMuYnVpbGQoKSx0aGlzLnNldFNraW4oT3B0aW9ucy5kZWZhdWx0cy5za2luKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZih0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItd2luZG93IGZyLW1lYXN1cmVkXCIpLmhpZGUoKS5hcHBlbmQodGhpcy5fYm94PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWJveFwiKS5hcHBlbmQodGhpcy5fcGFnZXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZXNcIikpKS5hcHBlbmQodGhpcy5fdGh1bWJuYWlscz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzXCIpKSxPdmVybGF5LmluaXRpYWxpemUoKSxQYWdlcy5pbml0aWFsaXplKHRoaXMuX3BhZ2VzKSxUaHVtYm5haWxzLmluaXRpYWxpemUodGhpcy5fdGh1bWJuYWlscyksU3Bpbm5lci5pbml0aWFsaXplKCksVUkuaW5pdGlhbGl6ZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQubW9iaWxlVG91Y2g/XCJcIjpcIi1ub1wiKStcIi1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5zdmc/XCJcIjpcIi1ub1wiKStcIi1zdmdcIiksQnJvd3Nlci5JRSlmb3IodmFyIGk9NztpPD05O2krKylCcm93c2VyLklFPGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWx0SUVcIitpKTt0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXNraW4tXCIraSksT3ZlcmxheS5zZXRTa2luKGkpLHRoaXMuX3NraW49aX0sc2V0U2hvd2luZ1R5cGU6ZnVuY3Rpb24oaSl7dGhpcy5fc2hvd2luZ1R5cGUhPT1pJiYodGhpcy5fc2hvd2luZ1R5cGUmJih0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIrdGhpcy5fc2hvd2luZ1R5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLl9zaG93aW5nVHlwZSkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK2kpLFR5cGUuaXNWaWRlbyhpKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpLHRoaXMuX3Nob3dpbmdUeXBlPWkpfSxzdGFydE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcnx8JCh3aW5kb3cpLm9uKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPSQucHJveHkodGhpcy5fb25XaW5kb3dSZXNpemUsdGhpcykpfSxzdG9wT2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyJiYoJCh3aW5kb3cpLm9mZihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciksdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPW51bGwpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnRpbWVycy5zZXQoXCJzY3JvbGxcIiwkLnByb3h5KHRoaXMuYWRqdXN0VG9TY3JvbGwsdGhpcyksMCl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3ZhciBpOyhpPVBhZ2VzLnBhZ2UpJiYoVGh1bWJuYWlscy5maXRUb1ZpZXdwb3J0KCksdGhpcy51cGRhdGVCb3hEaW1lbnNpb25zKCksaS5maXRUb0JveCgpLFVJLnVwZGF0ZSgpLFVJLmFkanVzdFByZXZOZXh0KG51bGwsMCksU3Bpbm5lci5jZW50ZXIoKSxPdmVybGF5Lm1heCgpLFVJLl9vbldpbmRvd1Jlc2l6ZSgpLHRoaXMuX29uU2Nyb2xsKCkpfSxhZGp1c3RUb1Njcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5jc3Moe3RvcDokKHdpbmRvdykuc2Nyb2xsVG9wKCl9KX0sZ2V0Qm94RGltZW5zaW9uczpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib3hEaW1lbnNpb25zfSx1cGRhdGVCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7aWYoUGFnZXMucGFnZSl7dmFyIGk9Qm91bmRzLnZpZXdwb3J0KCksZT1UaHVtYm5haWxzLmdldERpbWVuc2lvbnMoKSx0PVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247dGhpcy5fYm94RGltZW5zaW9ucz17d2lkdGg6dD9pLndpZHRoOmkud2lkdGgtZS53aWR0aCxoZWlnaHQ6dD9pLmhlaWdodC1lLmhlaWdodDppLmhlaWdodH0sdGhpcy5fYm94UG9zaXRpb249e3RvcDowLGxlZnQ6dD8wOmUud2lkdGh9LHRoaXMuX2JveC5jc3MoJC5leHRlbmQoe30sdGhpcy5fYm94RGltZW5zaW9ucyx0aGlzLl9ib3hQb3NpdGlvbikpfX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5vcGVuaW5nPSEwLHRoaXMuYXR0YWNoKCksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKSx0aGlzLmFkanVzdFRvU2Nyb2xsKCk7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MCxzPTI7T3ZlcmxheVtQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vdmVybGF5P1wic2hvd1wiOlwiaGlkZVwiXShmdW5jdGlvbigpe2kmJi0tczwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcInNob3ctd2luZG93XCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Nob3coJC5wcm94eShmdW5jdGlvbigpe3RoaXMub3BlbmluZz0hMSxpJiYtLXM8MSYmaSgpfSx0aGlzKSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsNTApOjEpfX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGUpe2lmKHRoaXMudmlldyl7dmFyIGk9dGhpcy5xdWV1ZXMuaGlkZTtpLnF1ZXVlKFtdKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpO3ZhciB0PVBhZ2VzLnBhZ2U/UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZTowO2kucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5zdG9wKCksU3Bpbm5lci5oaWRlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1VJLmRpc2FibGUoKSxVSS5oaWRlKG51bGwsdCksS2V5Ym9hcmQuZGlzYWJsZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0yO3RoaXMuX2hpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJoaWRlLW92ZXJsYXlcIiwkLnByb3h5KGZ1bmN0aW9uKCl7T3ZlcmxheS5oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDE1MCk6MSksdGhpcy5fZmlyc3Q9ITB9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fcmVzZXQoKSx0aGlzLnN0b3BPYnNlcnZpbmdSZXNpemUoKSxQYWdlcy5yZW1vdmVBbGwoKSxUaHVtYm5haWxzLmNsZWFyKCksdGhpcy50aW1lcnMuY2xlYXIoKSx0aGlzLl9wb3NpdGlvbj0tMTt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5hZnRlckhpZGU7XCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZlLmNhbGwoRnJlc2NvKSx0aGlzLnZpZXc9bnVsbCx0aGlzLm9wZW5pbmc9ITEsdGhpcy5jbG9zaW5nPSExLHRoaXMuZGV0YWNoKCksaSgpfSx0aGlzKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7ZSgpLGkoKX0sdGhpcykpfX0sX2hpZGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGUpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHQsaSl9LGxvYWQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXdzPWksdGhpcy5hdHRhY2goKSxUaHVtYm5haWxzLmxvYWQoaSksUGFnZXMubG9hZChpKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nUmVzaXplKCksZSYmdGhpcy5zZXRQb3NpdGlvbihlKX0sc2V0UG9zaXRpb246ZnVuY3Rpb24oaSxlKXt0aGlzLl9wb3NpdGlvbj1pLHRoaXMudmlldz10aGlzLnZpZXdzW2ktMV0sdGhpcy5zdG9wSGlkZVF1ZXVlKCksdGhpcy5wYWdlPVBhZ2VzLnNob3coaSwkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSl9LHN0b3BIaWRlUXVldWU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5oaWRlLnF1ZXVlKFtdKX0sX3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy52aXNpYmxlPSExLFVJLmhpZGUobnVsbCwwKSxVSS5yZXNldCgpfSxtYXlQcmV2aW91czpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJnRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGh8fDEhPT10aGlzLl9wb3NpdGlvbn0scHJldmlvdXM6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlQcmV2aW91cygpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLnByZXZpb3VzKX0sbWF5TmV4dDpmdW5jdGlvbigpe3ZhciBpPXRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmaXx8aSYmMSE9PXRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dH0sbmV4dDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heU5leHQoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0KX0sZ2V0U3Vycm91bmRpbmdJbmRleGVzOmZ1bmN0aW9uKCl7aWYoIXRoaXMudmlld3MpcmV0dXJue307dmFyIGk9dGhpcy5fcG9zaXRpb24sZT10aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm57cHJldmlvdXM6aTw9MT9lOmktMSxuZXh0OmU8PWk/MTppKzF9fX0sS2V5Ym9hcmQ9e2VuYWJsZWQ6ITEsa2V5Q29kZTp7bGVmdDozNyxyaWdodDozOSxlc2M6Mjd9LGVuYWJsZTpmdW5jdGlvbihpKXt0aGlzLmRpc2FibGUoKSxpJiYoJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlEb3duLHRoaXMpKS5vbihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5VXAsdGhpcykpLHRoaXMuZW5hYmxlZD1pKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMSx0aGlzLl9vbktleVVwSGFuZGxlciYmKCQoZG9jdW1lbnQpLm9mZihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXIpLm9mZihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyKSx0aGlzLl9vbktleVVwSGFuZGxlcj10aGlzLl9vbktleURvd25IYW5kbGVyPW51bGwpfSxvbktleURvd246ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksZSl7Y2FzZVwibGVmdFwiOldpbmRvdy5wcmV2aW91cygpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6V2luZG93Lm5leHQoKX19fSxvbktleVVwOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGUpe2Nhc2VcImVzY1wiOldpbmRvdy5oaWRlKCl9fX0sZ2V0S2V5QnlLZXlDb2RlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZSBpbiB0aGlzLmtleUNvZGUpaWYodGhpcy5rZXlDb2RlW2VdPT09aSlyZXR1cm4gZTtyZXR1cm4gbnVsbH19LFBhZ2U9KExjPTAsTWM9e30sTmM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS10b3AgZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtYm90dG9tIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1sZWZ0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtcmlnaHQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKSwkLmV4dGVuZChPYy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudmlldz1pLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6MCxoZWlnaHQ6MH0sdGhpcy51aWQ9TGMrKyx0aGlzLl9wb3NpdGlvbj1lLHRoaXMuX3RvdGFsPXQsdGhpcy5fZnVsbENsaWNrPSExLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5xdWV1ZXM9e30sdGhpcy5xdWV1ZXMuc2hvd2hpZGU9JCh7fSl9LGNyZWF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9jcmVhdGVkKXtQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZVwiKS5hcHBlbmQodGhpcy5jb250YWluZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGFpbmVyXCIpKS5jc3Moe29wYWNpdHk6MH0pLmhpZGUoKSk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7aWYoaSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSkmJih0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuaW5mbz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiYodGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLHRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5wb3M9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5jYXB0aW9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5iYWNrZ3JvdW5kPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuY29udGVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50XCIpKSxcImltYWdlXCI9PXRoaXMudmlldy50eXBlJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6dGhpcy52aWV3LnVybH0pKSx0aGlzLmNvbnRlbnQuYXBwZW5kKE5jLmNsb25lKCEwKSkpLGkmJlwib3V0c2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSYmdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucG9zaXRpb25PdXRzaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksXCJpbnNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkpe3RoaXMuY29udGVudC5hcHBlbmQodGhpcy5wcmV2aW91c0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMubmV4dEluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5jbG9zZUluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksKHRoaXMudmlldy5jYXB0aW9ufHxpJiZ0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9uKSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbmZvSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8gZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXJJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMucG9zSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5jYXB0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLnZpZXcuY2FwdGlvbnx8IWl8fHRoaXMudmlldy5ncm91cGVkLmNhcHRpb258fHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5wb3NpdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1pbnNpZGUgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpO3ZhciBlPXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fDEhPXRoaXMuX3Bvc2l0aW9uLHQ9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8dGhpcy5fcG9zaXRpb248dGhpcy5fdG90YWw7dGhpcy5wcmV2aW91c0luc2lkZVsoZT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMubmV4dEluc2lkZVsodD9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpfSQuZWFjaChbXCJ4XCIsXCJ5XCJdLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvd1tlXSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmZsb3ctXCIrZSl9LHRoaXMpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLVwiK3RoaXMudmlldy50eXBlKSxUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLXZpZGVvXCIpLHRoaXMuX3RvdGFsPDImJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLXNpZGVzXCIpLHRoaXMuX2NyZWF0ZWQ9ITB9fSxfZ2V0U3Vycm91bmRpbmdQYWdlczpmdW5jdGlvbigpe3ZhciBpO2lmKCEoaT10aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkKSlyZXR1cm5bXTtmb3IodmFyIGU9W10sdD1NYXRoLm1heCgxLHRoaXMuX3Bvc2l0aW9uLWlbMF0pLHM9TWF0aC5taW4odGhpcy5fcG9zaXRpb24raVsxXSx0aGlzLl90b3RhbCksbj10aGlzLl9wb3NpdGlvbixvPW47bzw9cztvKyspKGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSk7Zm9yKG89bjt0PD1vO28tLSl7dmFyIGE7KGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSl9cmV0dXJuIGV9LHByZWxvYWRTdXJyb3VuZGluZ0ltYWdlczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2dldFN1cnJvdW5kaW5nUGFnZXMoKTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS5wcmVsb2FkKCl9LHRoaXMpKX0scHJlbG9hZDpmdW5jdGlvbigpe3RoaXMucHJlbG9hZGluZ3x8dGhpcy5wcmVsb2FkZWR8fFwiaW1hZ2VcIiE9dGhpcy52aWV3LnR5cGV8fCF0aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkfHx0aGlzLmxvYWRlZHx8KHRoaXMuY3JlYXRlKCksdGhpcy5wcmVsb2FkaW5nPSEwLHRoaXMucHJlbG9hZFJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCx0aGlzLnByZWxvYWRpbmc9ITEsdGhpcy5wcmVsb2FkZWQ9ITAsdGhpcy5kaW1lbnNpb25zPXt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9fSx0aGlzKSxudWxsLHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIn0pKX0sbG9hZDpmdW5jdGlvbihlLGkpe2lmKHRoaXMuY3JlYXRlKCksdGhpcy5sb2FkZWQpZSYmZSgpO2Vsc2Ugc3dpdGNoKHRoaXMuYWJvcnQoKSx0aGlzLmxvYWRpbmc9ITAsdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmKHRoaXMuX3NwaW5uZXJEZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtTcGlubmVyLnNob3coKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKSksdGhpcy52aWV3LnR5cGUpe2Nhc2VcImltYWdlXCI6aWYodGhpcy5lcnJvcilyZXR1cm4gdm9pZChlJiZlKCkpO3RoaXMuaW1hZ2VSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9KSxlJiZlKCl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLmltYWdlLmhpZGUoKSx0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLmVycm9yPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yIGZyLWNvbnRlbnQtZWxlbWVudFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3ItaWNvblwiKSkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1lcnJvclwiKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMuZXJyb3Iub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVycm9yLm91dGVySGVpZ2h0KCl9KSx0aGlzLmVycm9yLmNzcyh7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksZSYmZSgpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pO2JyZWFrO2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1JlYWR5PW5ldyBWaW1lb1JlYWR5KHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6aS5kaW1lbnNpb25zLmhlaWdodH0pLGUmJmUoKX0sdGhpcykpO2JyZWFrO2Nhc2VcInlvdXR1YmVcIjp0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMudmlldy5vcHRpb25zLndpZHRoLGhlaWdodDp0aGlzLnZpZXcub3B0aW9ucy5oZWlnaHR9KSxlJiZlKCl9fSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZGltZW5zaW9ucz1pLHRoaXMudmlldy5vcHRpb25zLm1heFdpZHRofHx0aGlzLnZpZXcub3B0aW9ucy5tYXhIZWlnaHQpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLHQ9e3dpZHRoOmUubWF4V2lkdGg/ZS5tYXhXaWR0aDp0aGlzLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmUubWF4SGVpZ2h0P2UubWF4SGVpZ2h0OnRoaXMuZGltZW5zaW9ucy5oZWlnaHR9O3RoaXMuZGltZW5zaW9ucz1GaXQud2l0aGluKHQsdGhpcy5kaW1lbnNpb25zKX19LF9tYXJrQXNMb2FkZWQ6ZnVuY3Rpb24oKXt0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMSx0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCxTcGlubmVyLmhpZGUobnVsbCxudWxsLHRoaXMuX3Bvc2l0aW9uKX0saXNWaWRlbzpmdW5jdGlvbigpe3JldHVybiBUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpfSxpbnNlcnRWaWRlbzpmdW5jdGlvbihpKXtpZighdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMuaXNWaWRlbygpKXt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9JC5leHRlbmQoe30sdGhpcy52aWV3Lm9wdGlvbnNbdGhpcy52aWV3LnR5cGVdfHx7fSkscz0kLnBhcmFtKHQpLG49e3ZpbWVvOmUrXCIvL3BsYXllci52aW1lby5jb20vdmlkZW8ve2lkfT97cXVlcnlTdHJpbmd9XCIseW91dHViZTplK1wiLy93d3cueW91dHViZS5jb20vZW1iZWQve2lkfT97cXVlcnlTdHJpbmd9XCJ9W3RoaXMudmlldy50eXBlXS5yZXBsYWNlKFwie2lkfVwiLHRoaXMudmlldy5fZGF0YS5pZCkucmVwbGFjZShcIntxdWVyeVN0cmluZ31cIixzKTt0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLnBsYXllcklmcmFtZT0kKFwiPGlmcmFtZSB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOm4saGVpZ2h0OnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLmhlaWdodCx3aWR0aDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy53aWR0aCxmcmFtZWJvcmRlcjowfSkpLGkmJmkoKX1lbHNlIGkmJmkoKX0scmFpc2U6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5lbGVtZW50WzBdLmxhc3RDaGlsZDtpJiZpPT09dGhpcy5lbGVtZW50WzBdfHxQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxzaG93OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMucXVldWVzLnNob3doaWRlO2kucXVldWUoW10pLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYhTWNbdGhpcy52aWV3LnVybF07U3Bpbm5lci5fdmlzaWJsZSYmIWUmJlNwaW5uZXIuaGlkZSgpLFBhZ2VzLnN0b3BJbmFjdGl2ZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnVwZGF0ZVVJKCksVUkuc2V0KHRoaXMuX3VpKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7S2V5Ym9hcmQuZW5hYmxlKHRoaXMudmlldy5vcHRpb25zLmtleWJvYXJkKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7U3Bpbm5lci5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLHRoaXMubG9hZCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMoKSxpKCl9LHRoaXMpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnJhaXNlKCksV2luZG93LnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksVUkuZW5hYmxlKCksdGhpcy5maXRUb0JveCgpLFdpbmRvdy5hZGp1c3RUb1Njcm9sbCgpLGkoKX0sdGhpcykpLHRoaXMuaXNWaWRlbygpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5pbnNlcnRWaWRlbygkLnByb3h5KGZ1bmN0aW9uKCl7aSgpfSkpfSx0aGlzKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luY3x8aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLmhpZGVJbmFjdGl2ZShpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0zLHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c7V2luZG93LnNldFNob3dpbmdUeXBlKHRoaXMudmlldy50eXBlKSxXaW5kb3cudmlzaWJsZXx8KHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyxcImZ1bmN0aW9uXCI9PT0kLnR5cGUodGhpcy52aWV3Lm9wdGlvbnMub25TaG93KSYmdGhpcy52aWV3Lm9wdGlvbnMub25TaG93LmNhbGwoRnJlc2NvKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luYyYmKGUrKyxQYWdlcy5oaWRlSW5hY3RpdmUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSkpLFdpbmRvdy5zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyksdGhpcy5fc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLFVJLmFkanVzdFByZXZOZXh0KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sV2luZG93Ll9maXJzdD8wOnQpLFdpbmRvdy5fZmlyc3Q/KFVJLnNob3cobnVsbCwwKSxXaW5kb3cuX2ZpcnN0PSExKTpVSS5zaG93KG51bGwsMCk7dmFyIHM9dGhpcy52aWV3Lm9wdGlvbnMuYWZ0ZXJQb3NpdGlvbjtcImZ1bmN0aW9uXCI9PT0kLnR5cGUocykmJnMuY2FsbChGcmVzY28sdGhpcy5fcG9zaXRpb24pfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGU9ITAsZSYmZSgpLGkoKX0sdGhpcykpfSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PVdpbmRvdy52aXNpYmxlP1wibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdzowO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5zaG93KCkuZmFkZVRvKHR8fDAsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMuZWxlbWVudCl7dGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuYWJvcnQoKTt2YXIgdD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LmhpZGU7dGhpcy5pc1ZpZGVvKCkmJih0PTApLHRoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwwLFwiZnJlc2NvRWFzZUluQ3ViaWNcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmhpZGUoKSx0aGlzLl92aXNpYmxlPSExLFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sc3RvcDpmdW5jdGlvbigpe3RoaXMucXVldWVzLnNob3doaWRlLnF1ZXVlKFtdKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5zdG9wKCEwKSx0aGlzLmFib3J0KCl9LHJlbW92ZVZpZGVvOmZ1bmN0aW9uKCl7dGhpcy5wbGF5ZXJJZnJhbWUmJih0aGlzLnBsYXllcklmcmFtZVswXS5zcmM9XCIvL2Fib3V0OmJsYW5rXCIsdGhpcy5wbGF5ZXJJZnJhbWUucmVtb3ZlKCksdGhpcy5wbGF5ZXJJZnJhbWU9bnVsbCl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpLHRoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5yZW1vdmUoKSx0aGlzLl90cmFjayYmKFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLl90cmFjaz0hMSksdGhpcy5wcmVsb2FkUmVhZHkmJih0aGlzLnByZWxvYWRSZWFkeS5hYm9ydCgpLHRoaXMucHJlbG9hZFJlYWR5PW51bGwsdGhpcy5wcmVsb2FkaW5nPW51bGwsdGhpcy5wcmVsb2FkZWQ9bnVsbCksdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnJlbW92ZWQ9ITB9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5pbWFnZVJlYWR5JiYodGhpcy5pbWFnZVJlYWR5LmFib3J0KCksdGhpcy5pbWFnZVJlYWR5PW51bGwpLHRoaXMudmltZW9SZWFkeSYmKHRoaXMudmltZW9SZWFkeS5hYm9ydCgpLHRoaXMudmltZW9SZWFkeT1udWxsKSx0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMX0sX2Fib3J0U3Bpbm5lckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fc3Bpbm5lckRlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX3NwaW5uZXJEZWxheSksdGhpcy5fc3Bpbm5lckRlbGF5PW51bGwpfSxfZ2V0SW5mb0hlaWdodDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOmNhc2VcImluc2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbiYmIWUpcmV0dXJuIDA7YnJlYWs7Y2FzZVwib3V0c2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbilyZXR1cm4gMH12YXIgdD1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztcIm91dHNpZGVcIj09PXRoaXMuX3VpJiYoaT1NYXRoLm1pbihpLFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkpO3ZhciBzLG49dFswXS5zdHlsZS53aWR0aDtyZXR1cm5cImluc2lkZVwiIT09dGhpcy5fdWkmJlwiZnVsbGNsaWNrXCIhPT10aGlzLl91aXx8KG49XCIxMDAlXCIpLHQuY3NzKHt3aWR0aDppK1wicHhcIn0pLHM9cGFyc2VGbG9hdCh0Lm91dGVySGVpZ2h0KCkpLHQuY3NzKHt3aWR0aDpufSksc30sX3doaWxlVmlzaWJsZTpmdW5jdGlvbihpLGUpe3ZhciB0PVtdLHM9V2luZG93LmVsZW1lbnQuYWRkKHRoaXMuZWxlbWVudCk7ZSYmKHM9cy5hZGQoZSkpLCQuZWFjaChzLGZ1bmN0aW9uKGksZSl7JChlKS5pcyhcIjp2aXNpYmxlXCIpfHx0LnB1c2goJChlKS5zaG93KCkpfSk7dmFyIG49dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3ZhciBvPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksaSgpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLG4mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLWNhcHRpb25cIiksb3x8dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksJC5lYWNoKHQsZnVuY3Rpb24oaSxlKXtlLmhpZGUoKX0pfSx1cGRhdGVGb3JjZWQ6ZnVuY3Rpb24oKXt0aGlzLmNyZWF0ZSgpLHRoaXMuX2Z1bGxDbGljaz10aGlzLnZpZXcub3B0aW9ucy5mdWxsQ2xpY2ssdGhpcy5fbm9PdmVyZmxvdz0hMSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4td2lkdGhcIikpJiYodGhpcy5fZnVsbENsaWNrPSEwKSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4taGVpZ2h0XCIpKSYmKHRoaXMuX25vT3ZlcmZsb3c9ITApfSx1cGRhdGVVSTpmdW5jdGlvbigpe3RoaXMudXBkYXRlRm9yY2VkKCk7dmFyIGk9dGhpcy5fZnVsbENsaWNrP1wiZnVsbGNsaWNrXCI6dGhpcy52aWV3Lm9wdGlvbnMudWk7dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXVpLVwiK3RoaXMuX3VpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1cIitpKSx0aGlzLl91aT1pfSxmaXRUb0JveDpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dGhpcy5lbGVtZW50O3ZhciB0PSQuZXh0ZW5kKHt9LFdpbmRvdy5nZXRCb3hEaW1lbnNpb25zKCkpLGk9JC5leHRlbmQoe30sdGhpcy5kaW1lbnNpb25zKSxlPXRoaXMuY29udGFpbmVyO3RoaXMudXBkYXRlVUkoKTt2YXIgcz17bGVmdDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctbGVmdFwiKSksdG9wOnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy10b3BcIikpfTtpZihcIm91dHNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLl9wb3NpdGlvbk91dHNpZGUpe3ZhciBuPTA7dGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbk91dHNpZGUuaXMoXCI6dmlzaWJsZVwiKSYmKG49dGhpcy5fcG9zaXRpb25PdXRzaWRlLm91dGVyV2lkdGgoITApKX0sdGhpcykpLG4+cy5sZWZ0JiYocy5sZWZ0PW4pfXQud2lkdGgtPTIqcy5sZWZ0LHQuaGVpZ2h0LT0yKnMudG9wO3ZhciBvLGEsaD17d2lkdGg6ITAsaGVpZ2h0OiEhdGhpcy5fbm9PdmVyZmxvd3x8IXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93Lnl9LHI9Rml0LndpdGhpbih0LGksaCksZD0kLmV4dGVuZCh7fSxyKSxsPSh0aGlzLmNvbnRlbnQsMCksdT1cImluc2lkZVwiPT09dGhpcy5fdWksYz11P3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm8scD11P3RoaXMuY2FwdGlvbkluc2lkZTp0aGlzLmNhcHRpb24sZj11P3RoaXMucG9zSW5zaWRlOnRoaXMucG9zLG09ISFwO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOnZhciB2PSQuZXh0ZW5kKHt9LGQpO3RoaXMuY2FwdGlvbiYmKGE9dGhpcy5jYXB0aW9uLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTwyOyl7bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpO3ZhciBlPXQuaGVpZ2h0LWQuaGVpZ2h0O2U8bCYmKGQ9Rml0LndpdGhpbih7d2lkdGg6ZC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoZC5oZWlnaHQtKGwtZSksMCl9LGQsaCkpLGkrK31sPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCksKCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiZsK2QuaGVpZ2h0PnQuaGVpZ2h0fHxjJiZcIm5vbmVcIj09PWMuY3NzKFwiZGlzcGxheVwiKXx8bD49LjUqZC5oZWlnaHQpJiYobT0hMSxsPTAsZD12KX0sdGhpcyksYSkpLGMmJmMuY3NzKHt3aWR0aDpkLndpZHRoK1wicHhcIn0pLG89e3dpZHRoOmQud2lkdGgsaGVpZ2h0OmQuaGVpZ2h0K2x9O2JyZWFrO2Nhc2VcImluc2lkZVwiOnRoaXMuY2FwdGlvbiYmKGE9cCx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpeyhsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCkpPj0uNDUqZC5oZWlnaHQmJihtPSExLGw9MCl9LHRoaXMpLGEpKSxvPWQ7YnJlYWs7Y2FzZVwiZnVsbGNsaWNrXCI6dmFyIGc9W107cCYmZy5wdXNoKHApLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoKHB8fGYpJiZjLmNzcyh7d2lkdGg6XCIxMDAlXCJ9KSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxwJiZsPi41KnQuaGVpZ2h0KWlmKG09ITEsZil7dmFyIGk9dGhpcy5jYXB0aW9uLmlzKFwiOnZpc2libGVcIik7dGhpcy5jYXB0aW9uLmhpZGUoKSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxpJiZ0aGlzLmNhcHRpb24uc2hvdygpfWVsc2UgbD0wO2Q9Rml0LndpdGhpbih7d2lkdGg6dC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoMCx0LmhlaWdodC1sKX0sZCxoKSxvPWR9LHRoaXMpLGcpLHRoaXMuY29udGVudC5jc3Moe1wicGFkZGluZy1ib3R0b21cIjowfSl9cCYmcFttP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuZWxlbWVudFsobT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1uby1jYXB0aW9uXCIpLHRoaXMuZWxlbWVudFsobT9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1oYXMtY2FwdGlvblwiKSx0aGlzLmNvbnRlbnQuY3NzKGQpLHRoaXMuYmFja2dyb3VuZC5jc3MobyksdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMucGxheWVySWZyYW1lLmF0dHIoZCksdGhpcy5vdmVybGFwPXt5Om8uaGVpZ2h0KyhcImZ1bGxjbGlja1wiPT09dGhpcy5fdWk/bDowKS1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHg6MH0sdGhpcy5fdHJhY2s9IXRoaXMuX25vT3ZlcmZsb3cmJnRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJjA8dGhpcy5vdmVybGFwLnksdGhpcy5faW5mb0hlaWdodD1sLHRoaXMuX3BhZGRpbmc9cyx0aGlzLl9jb250ZW50RGltZW5zaW9ucz1kLHRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zPW8sUGFnZXNbKHRoaXMuX3RyYWNrP1wic2V0XCI6XCJyZW1vdmVcIikrXCJUcmFja2luZ1wiXSh0aGlzLl9wb3NpdGlvbiksdGhpcy5wb3NpdGlvbigpfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3ZhciBpPXRoaXMuX2NvbnRlbnREaW1lbnNpb25zLGU9dGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnMsdD17dG9wOi41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqZS5oZWlnaHQsbGVmdDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqZS53aWR0aH0scz17dG9wOnQudG9wK2kuaGVpZ2h0LGxlZnQ6dC5sZWZ0fSxuPTAsbz1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOnQudG9wPS41KihXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQpLS41KmUuaGVpZ2h0LHM9e3RvcDpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQsbGVmdDowLGJvdHRvbTpcImF1dG9cIn0sbj10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnM9e3RvcDpcImF1dG9cIixsZWZ0OjAsYm90dG9tOjB9fWlmKDA8dGhpcy5vdmVybGFwLnkpe3ZhciBhPVBhZ2VzLmdldFhZUCgpO3N3aXRjaCh0LnRvcD0wLWEueSp0aGlzLm92ZXJsYXAueSx0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOmNhc2VcImZ1bGxjbGlja1wiOnMudG9wPVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjp2YXIgaD10LnRvcCtpLmhlaWdodC1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHI9LTEqdC50b3A7aWYocy5ib3R0b209aCx0aGlzLmNsb3NlSW5zaWRlLmNzcyh7dG9wOnJ9KSwxPHRoaXMuX3RvdGFsKXt2YXIgZD1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO2R8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbD10aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoXCJzdHlsZVwiKTt0aGlzLnByZXZpb3VzSW5zaWRlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgdT1wYXJzZUludCh0aGlzLnByZXZpb3VzSW5zaWRlLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMucHJldmlvdXNJbnNpZGUuYXR0cih7c3R5bGU6bH0pLGR8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYz10aGlzLnByZXZpb3VzSW5zaWRlLmFkZCh0aGlzLm5leHRJbnNpZGUpLHA9LjUqdGhpcy5vdmVybGFwLnk7Yy5jc3Moe1wibWFyZ2luLXRvcFwiOnUrKHItcCl9KSx0aGlzLnBvc2l0aW9uSW5zaWRlJiZ0aGlzLnBvc2l0aW9uSW5zaWRlLmNzcyh7Ym90dG9tOmh9KX19fWVsc2VcImluc2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5maW5kKFwiLmZyLWluZm8sIC5mci1zaWRlLCAuZnItY2xvc2UsIC5mci1wb3NpdGlvbi1pbnNpZGVcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpO28mJm8uY3NzKHMpLHRoaXMuY29udGFpbmVyLmNzcyh7Ym90dG9tOm59KSx0aGlzLmNvbnRlbnQuY3NzKHQpLHRoaXMuYmFja2dyb3VuZC5jc3ModCl9fX0pLE9jKSxMYyxNYyxOYztmdW5jdGlvbiBPYygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX12YXIgUGFnZXM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5wYWdlcz1bXSx0aGlzLnVpZD0xLHRoaXMuX3RyYWNraW5nPVtdfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMudmlld3M9aSx0aGlzLnJlbW92ZUFsbCgpLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnBhZ2VzLnB1c2gobmV3IFBhZ2UoZSxpKzEsdGhpcy52aWV3cy5sZW5ndGgpKX0sdGhpcykpfSxzaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpcy5wYWdlc1tpLTFdO3RoaXMucGFnZSYmdGhpcy5wYWdlLnVpZD09PXQudWlkfHwodGhpcy5wYWdlPXQsVGh1bWJuYWlscy5zaG93KGkpLFdpbmRvdy51cGRhdGVCb3hEaW1lbnNpb25zKCksdC5zaG93KCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKSl9LGdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXA6ZnVuY3Rpb24odCl7dmFyIHM9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnZpZXcuZWxlbWVudCYmZS52aWV3LmVsZW1lbnQ9PT10JiYocz1pKzEpfSksc30sZ2V0TG9hZGluZ0NvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLmxvYWRpbmcmJnQrK30pLHR9LHJlbW92ZUFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMucGFnZXM9W119LGhpZGVJbmFjdGl2ZTpmdW5jdGlvbih0LHMpe3ZhciBuPVtdOyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJm4ucHVzaChlKX0sdGhpcykpO3ZhciBvPTArbi5sZW5ndGg7cmV0dXJuIG88MT90JiZ0KCk6JC5lYWNoKG4sZnVuY3Rpb24oaSxlKXtlLmhpZGUoZnVuY3Rpb24oKXt0JiYtLW88MSYmdCgpfSxzKX0pLG4ubGVuZ3RofSxzdG9wSW5hY3RpdmU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZlLnN0b3AoKX0sdGhpcykpfSxzdG9wOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnN0b3AoKX0pfSxoYW5kbGVUcmFja2luZzpmdW5jdGlvbihpKXtCcm93c2VyLklFJiZCcm93c2VyLklFPDk/KHRoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpKTp0aGlzLl90cmFja2luZ190aW1lcj1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKX0sdGhpcyksMzApfSxjbGVhclRyYWNraW5nVGltZXI6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZ190aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLl90cmFja2luZ190aW1lciksdGhpcy5fdHJhY2tpbmdfdGltZXI9bnVsbCl9LHN0YXJ0VHJhY2tpbmc6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHx0aGlzLl9oYW5kbGVUcmFja2luZ3x8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmc9JC5wcm94eSh0aGlzLmhhbmRsZVRyYWNraW5nLHRoaXMpKX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7IVN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuX2hhbmRsZVRyYWNraW5nJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nKSx0aGlzLl9oYW5kbGVUcmFja2luZz1udWxsLHRoaXMuY2xlYXJUcmFja2luZ1RpbWVyKCkpfSxzZXRUcmFja2luZzpmdW5jdGlvbihpKXt0aGlzLmlzVHJhY2tpbmcoaSl8fCh0aGlzLl90cmFja2luZy5wdXNoKHRoaXMucGFnZXNbaS0xXSksMT09PXRoaXMuX3RyYWNraW5nLmxlbmd0aCYmdGhpcy5zdGFydFRyYWNraW5nKCkpfSxjbGVhclRyYWNraW5nOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmc9W119LHJlbW92ZVRyYWNraW5nOmZ1bmN0aW9uKGUpe3RoaXMuX3RyYWNraW5nPSQuZ3JlcCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpKXtyZXR1cm4gaS5fcG9zaXRpb24hPT1lfSksdGhpcy5fdHJhY2tpbmcubGVuZ3RoPDEmJnRoaXMuc3RvcFRyYWNraW5nKCl9LGlzVHJhY2tpbmc6ZnVuY3Rpb24odCl7dmFyIHM9ITE7cmV0dXJuICQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2lmKGUuX3Bvc2l0aW9uPT09dClyZXR1cm4hKHM9ITApfSksc30sc2V0WFk6ZnVuY3Rpb24oaSl7dGhpcy5feHk9aX0sZ2V0WFlQOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZSx0PSQuZXh0ZW5kKHt9LFdpbmRvdy5fYm94RGltZW5zaW9ucyksZT0kLmV4dGVuZCh7fSx0aGlzLl94eSk7ZS55LT0kKHdpbmRvdykuc2Nyb2xsVG9wKCksaSYmKFwib3V0c2lkZVwiPT09aS5fdWl8fFwiZnVsbGNsaWNrXCI9PT1pLl91aSkmJjA8aS5faW5mb0hlaWdodCYmKHQuaGVpZ2h0LT1pLl9pbmZvSGVpZ2h0KSxlLnktPVdpbmRvdy5fYm94UG9zaXRpb24udG9wO3ZhciBzPXt4OjAseTpNYXRoLm1pbihNYXRoLm1heChlLnkvdC5oZWlnaHQsMCksMSl9LG49e3g6XCJ3aWR0aFwiLHk6XCJoZWlnaHRcIn0sbz17fTtyZXR1cm4gJC5lYWNoKFwieVwiLnNwbGl0KFwiIFwiKSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7b1tlXT1NYXRoLm1pbihNYXRoLm1heCgyMC90W25bZV1dLDApLDEpLHNbZV0qPTErMipvW2VdLHNbZV0tPW9bZV0sc1tlXT1NYXRoLm1pbihNYXRoLm1heChzW2VdLDApLDEpfSx0aGlzKSksdGhpcy5zZXRYWVAocyksdGhpcy5feHlwfSxzZXRYWVA6ZnVuY3Rpb24oaSl7dGhpcy5feHlwPWl9LHVwZGF0ZVBvc2l0aW9uczpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nLmxlbmd0aDwxfHwkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtlLnBvc2l0aW9uKCl9KX19O2Z1bmN0aW9uIFZpZXcoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChWaWV3LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihvYmplY3Qpe3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30sZGF0YT17fTtpZihcInN0cmluZ1wiPT09JC50eXBlKG9iamVjdCkpb2JqZWN0PXt1cmw6b2JqZWN0fTtlbHNlIGlmKG9iamVjdCYmMT09PW9iamVjdC5ub2RlVHlwZSl7dmFyIGVsZW1lbnQ9JChvYmplY3QpO29iamVjdD17ZWxlbWVudDplbGVtZW50WzBdLHVybDplbGVtZW50LmF0dHIoXCJocmVmXCIpLGNhcHRpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tY2FwdGlvblwiKSxncm91cDplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSxleHRlbnNpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZXh0ZW5zaW9uXCIpLHR5cGU6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tdHlwZVwiKSxvcHRpb25zOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikmJmV2YWwoXCIoe1wiK2VsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikrXCJ9KVwiKXx8e319fXJldHVybiBvYmplY3QmJihvYmplY3QuZXh0ZW5zaW9ufHwob2JqZWN0LmV4dGVuc2lvbj1kZXRlY3RFeHRlbnNpb24ob2JqZWN0LnVybCkpLG9iamVjdC50eXBlfHwoZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpLG9iamVjdC5fZGF0YT1kYXRhLG9iamVjdC50eXBlPWRhdGEudHlwZSkpLG9iamVjdC5fZGF0YXx8KG9iamVjdC5fZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpKSxvYmplY3QmJm9iamVjdC5vcHRpb25zP29iamVjdC5vcHRpb25zPSQuZXh0ZW5kKCEwLCQuZXh0ZW5kKHt9LG9wdGlvbnMpLCQuZXh0ZW5kKHt9LG9iamVjdC5vcHRpb25zKSk6b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoe30sb3B0aW9ucyksb2JqZWN0Lm9wdGlvbnM9T3B0aW9ucy5jcmVhdGUob2JqZWN0Lm9wdGlvbnMsb2JqZWN0LnR5cGUsb2JqZWN0Ll9kYXRhKSwkLmV4dGVuZCh0aGlzLG9iamVjdCksdGhpc319KTt2YXIgU3Bpbm5lcj17c3VwcG9ydGVkOlN1cHBvcnQuY3NzLnRyYW5zZm9ybSYmU3VwcG9ydC5jc3MuYW5pbWF0aW9uLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW5uZXJcIikuaGlkZSgpO2Zvcih2YXIgZT0xO2U8PTEyO2UrKyl0aGlzLmVsZW1lbnQuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW4tXCIrZSkpO3RoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe1dpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc3VwcG9ydGVkJiYodGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMudXBkYXRlRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIitpKSx0aGlzLl9za2luPWkpfSx1cGRhdGVEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fYXR0YWNoZWQ7aXx8dGhpcy5hdHRhY2goKSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKX0saXx8dGhpcy5kZXRhY2goKX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzaG93OmZ1bmN0aW9uKGksZSl7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMuY2VudGVyKCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSx0KXt0aGlzLl92aXNpYmxlPSExO3ZhciBzPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5oaWRlfHwwLG49KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpzKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChufHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLGkmJmkoKX0sdGhpcykpfSxjZW50ZXI6ZnVuY3Rpb24oKXtpZih0aGlzLnN1cHBvcnRlZCl7dGhpcy5fZGltZW5zaW9uc3x8dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7dmFyIGk9UGFnZXMucGFnZSxlPTA7aSYmXCJmdWxsY2xpY2tcIj09PWkuX3VpJiZpLl93aGlsZVZpc2libGUoZnVuY3Rpb24oKXtlPWkuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKX0pLHRoaXMuZWxlbWVudC5jc3Moe3RvcDpXaW5kb3cuX2JveFBvc2l0aW9uLnRvcCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KnRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LS41KmUsbGVmdDpXaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQrLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KnRoaXMuX2RpbWVuc2lvbnMud2lkdGh9KX19fSxfRnJlc2NvPXtfZGlzYWJsZWQ6ITEsX2ZhbGxiYWNrOiEwLGluaXRpYWxpemU6ZnVuY3Rpb24oKXtXaW5kb3cuaW5pdGlhbGl6ZSgpLHRoaXMuX2Rpc2FibGVkfHx0aGlzLnN0YXJ0RGVsZWdhdGluZygpfSxzdGFydERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXJ8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPSQucHJveHkodGhpcy5kZWxlZ2F0ZSx0aGlzKSkub24oXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPSQucHJveHkodGhpcy5zZXRDbGlja1hZLHRoaXMpKX0sc3RvcERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXImJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXIpLm9mZihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXIpLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPW51bGwsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPW51bGwpfSxzZXRDbGlja1hZOmZ1bmN0aW9uKGkpe1BhZ2VzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSl9LGRlbGVnYXRlOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLl9kaXNhYmxlZCl7aS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9aS5jdXJyZW50VGFyZ2V0O3RoaXMuc2V0Q2xpY2tYWShpKSxfRnJlc2NvLnNob3coZSl9fSxzaG93OmZ1bmN0aW9uKG9iamVjdCl7aWYodGhpcy5fZGlzYWJsZWQpdGhpcy5zaG93RmFsbGJhY2suYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtlbHNle3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30scG9zaXRpb249YXJndW1lbnRzWzJdO2FyZ3VtZW50c1sxXSYmXCJudW1iZXJcIj09PSQudHlwZShhcmd1bWVudHNbMV0pJiYocG9zaXRpb249YXJndW1lbnRzWzFdLG9wdGlvbnM9e30pO3ZhciB2aWV3cz1bXSxvYmplY3RfdHlwZSxpc0VsZW1lbnQ9Xy5pc0VsZW1lbnQob2JqZWN0KTtzd2l0Y2gob2JqZWN0X3R5cGU9JC50eXBlKG9iamVjdCkpe2Nhc2VcInN0cmluZ1wiOmNhc2VcIm9iamVjdFwiOnZhciB2aWV3PW5ldyBWaWV3KG9iamVjdCxvcHRpb25zKSxfZGdvPVwiZGF0YS1mcmVzY28tZ3JvdXAtb3B0aW9uc1wiLGdyb3VwT3B0aW9ucz17fTtpZih2aWV3Lmdyb3VwKXtpZihpc0VsZW1lbnQpe3ZhciBlbGVtZW50cz0kKCcuZnJlc2NvW2RhdGEtZnJlc2NvLWdyb3VwPVwiJyskKG9iamVjdCkuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpKydcIl0nKTtlbGVtZW50cy5maWx0ZXIoXCJbXCIrX2RnbytcIl1cIikuZWFjaChmdW5jdGlvbihpLGVsZW1lbnQpeyQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChlbGVtZW50KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKX0pLGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oaSxlKXtwb3NpdGlvbnx8ZSE9PW9iamVjdHx8KHBvc2l0aW9uPWkrMSksdmlld3MucHVzaChuZXcgVmlldyhlLCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpfSl9fWVsc2UgaXNFbGVtZW50JiYkKG9iamVjdCkuaXMoXCJbXCIrX2RnbytcIl1cIikmJigkLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQob2JqZWN0KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKSx2aWV3PW5ldyBWaWV3KG9iamVjdCwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKSx2aWV3cy5wdXNoKHZpZXcpO2JyZWFrO2Nhc2VcImFycmF5XCI6JC5lYWNoKG9iamVjdCxmdW5jdGlvbihpLGUpe3ZhciB0PW5ldyBWaWV3KGUsb3B0aW9ucyk7dmlld3MucHVzaCh0KX0pfXZhciBncm91cEV4dGVuZD17Z3JvdXBlZDp7Y2FwdGlvbjohMX19LGZpcnN0VUk9dmlld3NbMF0ub3B0aW9ucy51aSxwb3NpdGlvbkluQVBHOyQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2UuY2FwdGlvbiYmKGdyb3VwRXh0ZW5kLmdyb3VwZWQuY2FwdGlvbj0hMCksMDxpJiZlLm9wdGlvbnMudWkhPT1maXJzdFVJJiYoZS5vcHRpb25zLnVpPWZpcnN0VUkpfSksJC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZT0kLmV4dGVuZChlLGdyb3VwRXh0ZW5kKX0pLCghcG9zaXRpb258fHBvc2l0aW9uPDEpJiYocG9zaXRpb249MSkscG9zaXRpb24+dmlld3MubGVuZ3RoJiYocG9zaXRpb249dmlld3MubGVuZ3RoKSxpc0VsZW1lbnQmJihwb3NpdGlvbkluQVBHPVBhZ2VzLmdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAob2JqZWN0KSk/V2luZG93LnNldFBvc2l0aW9uKHBvc2l0aW9uSW5BUEcpOldpbmRvdy5sb2FkKHZpZXdzLHBvc2l0aW9uKX19LHNob3dGYWxsYmFjazpmdW5jdGlvbihpKXtpZih0aGlzLl9mYWxsYmFjayl7dmFyIGU9ZnVuY3Rpb24gaShlKXt2YXIgdD0kLnR5cGUoZSk7cmV0dXJuXCJzdHJpbmdcIj09PXQ/ZTpcImFycmF5XCI9PT10JiZlWzBdP2koZVswXSk6Xy5pc0VsZW1lbnQoZSkmJiQoZSkuYXR0cihcImhyZWZcIik/JChlKS5hdHRyKFwiaHJlZlwiKTohIWUudXJsJiZlLnVybH0oaSk7ZSYmKHdpbmRvdy5sb2NhdGlvbi5ocmVmPWUpfX19OyQuZXh0ZW5kKEZyZXNjbyx7c2hvdzpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5zaG93LmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiBXaW5kb3cuaGlkZSgpLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5zdG9wRGVsZWdhdGluZygpLF9GcmVzY28uX2Rpc2FibGVkPSEwLHRoaXN9LGVuYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLl9kaXNhYmxlZD0hMSxfRnJlc2NvLnN0YXJ0RGVsZWdhdGluZygpLHRoaXN9LGZhbGxiYWNrOmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLl9mYWxsYmFjaz1pLHRoaXN9LHNldERlZmF1bHRTa2luOmZ1bmN0aW9uKGkpe3JldHVybiBPcHRpb25zLmRlZmF1bHRzLnNraW49aSx0aGlzfX0pLChCcm93c2VyLklFJiZCcm93c2VyLklFPDd8fFwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5BbmRyb2lkKSYmQnJvd3Nlci5BbmRyb2lkPDN8fEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuV2ViS2l0KSYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4KSYmKF9GcmVzY28uc2hvdz1fRnJlc2NvLnNob3dGYWxsYmFjayk7dmFyIFRodW1ibmFpbHM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIsdGhpcy5fdmFycz17dGh1bWJuYWlsOnt9LHRodW1ibmFpbEZyYW1lOnt9LHRodW1ibmFpbHM6e319LHRoaXMuYnVpbGQoKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nKCl9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLndyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy13cmFwcGVyXCIpLmFwcGVuZCh0aGlzLl9zbGlkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZXJcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtcHJldmlvdXNcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzX2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX3RodW1icz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXRodW1ic1wiKS5hcHBlbmQodGhpcy5fc2xpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZVwiKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtbmV4dFwiKS5hcHBlbmQodGhpcy5fbmV4dF9idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpKSl9LHN0YXJ0T2JzZXJ2aW5nOmZ1bmN0aW9uKCl7dGhpcy5fc2xpZGVyLmRlbGVnYXRlKFwiLmZyLXRodW1ibmFpbFwiLFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGU9JChpLnRhcmdldCkuY2xvc2VzdChcIi5mci10aHVtYm5haWxcIilbMF0sdD1lJiYkKGUpLmRhdGEoXCJmci1wb3NpdGlvblwiKTt0JiYodGhpcy5zZXRBY3RpdmUodCksV2luZG93LnNldFBvc2l0aW9uKHQpKX0sdGhpcykpLHRoaXMuX3NsaWRlci5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpfSksdGhpcy5fcHJldmlvdXMuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLnByZXZpb3VzUGFnZSx0aGlzKSksdGhpcy5fbmV4dC5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMubmV4dFBhZ2UsdGhpcykpfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMuY2xlYXIoKTt2YXIgdD1cImhvcml6b250YWxcIixzPSExOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtcInZlcnRpY2FsXCI9PT1lLm9wdGlvbnMudGh1bWJuYWlscyYmKHQ9XCJ2ZXJ0aWNhbFwiKSxlLm9wdGlvbnMudGh1bWJuYWlsc3x8KHM9ITApfSx0aGlzKSksdGhpcy5zZXRPcmllbnRhdGlvbih0KSx0aGlzLl9kaXNhYmxlZEdyb3VwPXMsJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMuX3RodW1ibmFpbHMucHVzaChuZXcgVGh1bWJuYWlsKGUsaSsxKSl9LHRoaXMpKSx0aGlzLmZpdFRvVmlld3BvcnQoKX0sY2xlYXI6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX3Bvc2l0aW9uPS0xLHRoaXMuX3BhZ2U9LTF9LHNldE9yaWVudGF0aW9uOmZ1bmN0aW9uKGkpe3RoaXMuX29yaWVudGF0aW9uJiZXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIrdGhpcy5fb3JpZW50YXRpb24pLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1cIitpKSx0aGlzLl9vcmllbnRhdGlvbj1pfSxkaXNhYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSEwfSxlbmFibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITF9LGVuYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5fZGlzYWJsZWR9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rpc2FibGVkfSx1cGRhdGVWYXJzOmZ1bmN0aW9uKCl7dmFyIGk9V2luZG93LmVsZW1lbnQsZT10aGlzLl92YXJzLHQ9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixzPXQ/XCJ0b3BcIjpcImxlZnRcIixuPXQ/XCJsZWZ0XCI6XCJ0b3BcIixvPXQ/XCJib3R0b21cIjpcImxlZnRcIixhPXQ/XCJ0b3BcIjpcInJpZ2h0XCIsaD10P1wid2lkdGhcIjpcImhlaWdodFwiLHI9dD9cImhlaWdodFwiOlwid2lkdGhcIixkPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIix0b3A6XCJib3R0b21cIixib3R0b206XCJ0b3BcIn07dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt2YXIgbD1pLmlzKFwiOnZpc2libGVcIik7aWYobHx8aS5zaG93KCksdGhpcy5kaXNhYmxlZCgpJiZ0aGlzLmVuYWJsZSgpLCF0aGlzLmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKXx8dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8Mnx8dGhpcy5fZGlzYWJsZWRHcm91cClyZXR1cm4gdGhpcy5kaXNhYmxlKCksJC5leHRlbmQodGhpcy5fdmFycy50aHVtYm5haWxzLHt3aWR0aDowLGhlaWdodDowfSksbHx8aS5oaWRlKCksdm9pZCB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3RoaXMuZW5hYmxlKCk7dmFyIHU9dGhpcy5fcHJldmlvdXMsYz10aGlzLl9uZXh0LHA9Qm91bmRzLnZpZXdwb3J0KCksZj10aGlzLmVsZW1lbnRbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUocildKCksbT1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIitzKSl8fDAsdj1NYXRoLm1heChmLTIqbSwwKSxnPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK24pKXx8MCx3PShwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK28pKXx8MCkrKHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrYSkpfHwwKTskLmV4dGVuZChlLnRodW1ibmFpbHMse2hlaWdodDpmK3csd2lkdGg6cFt0P1wid2lkdGhcIjpcImhlaWdodFwiXSxwYWRkaW5nVG9wOm19KSwkLmV4dGVuZChlLnRodW1ibmFpbCx7aGVpZ2h0OnYsd2lkdGg6dn0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsRnJhbWUse3dpZHRoOnYrMipnLGhlaWdodDpmfSksZS5zaWRlcz17cHJldmlvdXM6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfSxuZXh0Ont3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH19O3ZhciBiPXBbaF0seT1lLnRodW1ibmFpbEZyYW1lLndpZHRoLHg9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7ZS50aHVtYm5haWxzLndpZHRoPWIsZS5zaWRlcy5lbmFibGVkPTE8eCp5L2I7dmFyIGs9YixDPWUuc2lkZXMsUz1DLnByZXZpb3VzLFc9Qy5uZXh0LE09Uy5tYXJnaW5MZWZ0K1Mud2lkdGgrUy5tYXJnaW5SaWdodCtXLm1hcmdpbkxlZnQrVy53aWR0aCtXLm1hcmdpblJpZ2h0O2Uuc2lkZXMuZW5hYmxlZCYmKGstPU0pO3ZhciBUPXgqeTtUPChrPU1hdGguZmxvb3Ioay95KSp5KSYmKGs9VCk7dmFyIEk9aysoZS5zaWRlcy5lbmFibGVkP006MCk7ZS5pcHA9TWF0aC5yb3VuZChrL3kpLHRoaXMuX21vZGU9XCJwYWdlXCIsZS5pcHA8PTEmJihJPWs9YixlLnNpZGVzLmVuYWJsZWQ9ITEsdGhpcy5fbW9kZT1cImNlbnRlclwiKSxlLnBhZ2VzPU1hdGguY2VpbCh4KnkvayksZS53cmFwcGVyPXt3aWR0aDpJKzEsaGVpZ2h0OmZ9LGUudGh1bWJzPXt3aWR0aDprLGhlaWdodDpmfSxlLnNsaWRlPXt3aWR0aDp4KnkrMSxoZWlnaHQ6Zn0sbHx8aS5oaWRlKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKX0saGlkZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZSgpLHRoaXMudGh1bWJuYWlscy5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247cmV0dXJue3dpZHRoOmk/dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoOnRoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQsaGVpZ2h0Omk/dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodDp0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGh9fSxmaXRUb1ZpZXdwb3J0OmZ1bmN0aW9uKCl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIGk9JC5leHRlbmQoe30sdGhpcy5fdmFycyksZT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uOyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZXNpemUoKX0pLHRoaXMuX3ByZXZpb3VzW2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl9uZXh0W2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl90aHVtYnMuY3NzKHt3aWR0aDppLnRodW1ic1tlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS50aHVtYnNbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLl9zbGlkZS5jc3Moe3dpZHRoOmkuc2xpZGVbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkuc2xpZGVbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KTt2YXIgdD17d2lkdGg6aS53cmFwcGVyW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLndyYXBwZXJbZT9cImhlaWdodFwiOlwid2lkdGhcIl19O3RbXCJtYXJnaW4tXCIrKGU/XCJsZWZ0XCI6XCJ0b3BcIildPU1hdGgucm91bmQoLS41Kmkud3JhcHBlci53aWR0aCkrXCJweFwiLHRbXCJtYXJnaW4tXCIrKGU/XCJ0b3BcIjpcImxlZnRcIildPTAsdGhpcy53cmFwcGVyLmNzcyh0KSx0aGlzLl9wb3NpdGlvbiYmdGhpcy5tb3ZlVG8odGhpcy5fcG9zaXRpb24sITApfX0sbW92ZVRvUGFnZTpmdW5jdGlvbihpKXtpZighKGk8MXx8aT50aGlzLl92YXJzLnBhZ2VzfHxpPT09dGhpcy5fcGFnZSkpe3ZhciBlPXRoaXMuX3ZhcnMuaXBwKihpLTEpKzE7dGhpcy5tb3ZlVG8oZSl9fSxwcmV2aW91c1BhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZS0xKX0sbmV4dFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZSsxKX0sc2hvdzpmdW5jdGlvbihpKXt2YXIgZT10aGlzLl9wb3NpdGlvbjwwO2k8MSYmKGk9MSk7dmFyIHQ9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7dDxpJiYoaT10KSx0aGlzLl9wb3NpdGlvbj1pLHRoaXMuc2V0QWN0aXZlKGkpLFwicGFnZVwiPT09dGhpcy5fbW9kZSYmdGhpcy5fcGFnZT09PU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKXx8dGhpcy5tb3ZlVG8oaSxlKX0sbW92ZVRvOmZ1bmN0aW9uKGksZSl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIHQscyxuPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24sbz0uNSpCb3VuZHMudmlld3BvcnQoKVtuP1wid2lkdGhcIjpcImhlaWdodFwiXSxhPXRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGg7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtzPU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKSx0aGlzLl9wYWdlPXMsdD1hKih0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKi0xO3ZhciBoPVwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1kaXNhYmxlZFwiO3RoaXMuX3ByZXZpb3VzX2J1dHRvblsoczwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKSx0aGlzLl9uZXh0X2J1dHRvblsocz49dGhpcy5fdmFycy5wYWdlcz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCl9ZWxzZSB0PW8rLTEqKGEqKGktMSkrLjUqYSk7cz1QYWdlcy5wYWdlO3ZhciByPXt9LGQ9e307cltuP1widG9wXCI6XCJsZWZ0XCJdPTAsZFtuP1wibGVmdFwiOlwidG9wXCJdPXQrXCJweFwiLHRoaXMuX3NsaWRlLnN0b3AoITApLmNzcyhyKS5hbmltYXRlKGQsZT8wOnMmJnMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlscy5zbGlkZXx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5sb2FkQ3VycmVudFBhZ2UoKX0sdGhpcykpfX0sbG9hZEN1cnJlbnRQYWdlOmZ1bmN0aW9uKCl7dmFyIGksZTtpZih0aGlzLl9wb3NpdGlvbiYmdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCYmISh0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwxKSl7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtpZih0aGlzLl9wYWdlPDEpcmV0dXJuO2k9KHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHArMSxlPU1hdGgubWluKGktMSt0aGlzLl92YXJzLmlwcCx0aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9ZWxzZXt2YXIgdD1NYXRoLmNlaWwodGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoL3RoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgpO2k9TWF0aC5tYXgoTWF0aC5mbG9vcihNYXRoLm1heCh0aGlzLl9wb3NpdGlvbi0uNSp0LDApKSwxKSxlPU1hdGguY2VpbChNYXRoLm1pbih0aGlzLl9wb3NpdGlvbisuNSp0KSksdGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8ZSYmKGU9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWZvcih2YXIgcz1pO3M8PWU7cysrKXRoaXMuX3RodW1ibmFpbHNbcy0xXS5sb2FkKCl9fSxzZXRBY3RpdmU6ZnVuY3Rpb24oaSl7dGhpcy5fc2xpZGUuZmluZChcIi5mci10aHVtYm5haWwtYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKTt2YXIgZT1pJiZ0aGlzLl90aHVtYm5haWxzW2ktMV07ZSYmZS5hY3RpdmF0ZSgpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb24mJnRoaXMuc2V0UG9zaXRpb24odGhpcy5fcG9zaXRpb24pfX07ZnVuY3Rpb24gVGh1bWJuYWlsKCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVGh1bWJuYWlsLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudmlldz1pLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5wcmVCdWlsZCgpfSxwcmVCdWlsZDpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbFwiKS5kYXRhKFwiZnItcG9zaXRpb25cIix0aGlzLl9wb3NpdGlvbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYoIXRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPXRoaXMudmlldy5vcHRpb25zO1RodW1ibmFpbHMuX3NsaWRlLmFwcGVuZCh0aGlzLnRodW1ibmFpbEZyYW1lPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1mcmFtZVwiKS5hcHBlbmQodGhpcy50aHVtYm5haWwuYXBwZW5kKHRoaXMudGh1bWJuYWlsV3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtd3JhcHBlclwiKSkpKSxcImltYWdlXCI9PT10aGlzLnZpZXcudHlwZSYmdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci1sb2FkLXRodW1ibmFpbFwiKS5kYXRhKFwidGh1bWJuYWlsXCIse3ZpZXc6dGhpcy52aWV3LHNyYzppLnRodW1ibmFpbHx8dGhpcy52aWV3LnVybH0pO3ZhciBlPWkudGh1bWJuYWlsJiZpLnRodW1ibmFpbC5pY29uO2UmJnRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaWNvbiBmci10aHVtYm5haWwtaWNvbi1cIitlKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5sb2FkaW5nPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZy1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5zcGlubmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyXCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXItc3BpblwiKSkpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYm9yZGVyXCIpKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zdGF0ZVwiKSksdGhpcy5yZXNpemUoKX19LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsRnJhbWUmJih0aGlzLnRodW1ibmFpbEZyYW1lLnJlbW92ZSgpLHRoaXMudGh1bWJuYWlsRnJhbWU9bnVsbCx0aGlzLmltYWdlPW51bGwpLHRoaXMucmVhZHkmJih0aGlzLnJlYWR5LmFib3J0KCksdGhpcy5yZWFkeT1udWxsKSx0aGlzLnZpbWVvVGh1bWJuYWlsJiYodGhpcy52aW1lb1RodW1ibmFpbC5hYm9ydCgpLHRoaXMudmltZW9UaHVtYm5haWw9bnVsbCksdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9yZW1vdmVkPSEwLHRoaXMudmlldz1udWxsLHRoaXMuX2NsZWFyRGVsYXkoKX0sbG9hZDpmdW5jdGlvbigpe2lmKCEodGhpcy5fbG9hZGVkfHx0aGlzLl9sb2FkaW5nfHx0aGlzLl9yZW1vdmVkKSl7dGhpcy50aHVtYm5haWxXcmFwcGVyfHx0aGlzLmJ1aWxkKCksdGhpcy5fbG9hZGluZz0hMDt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy50aHVtYm5haWwsZT1pJiZcImJvb2xlYW5cIj09PSQudHlwZShpKT90aGlzLnZpZXcudXJsOml8fHRoaXMudmlldy51cmw7aWYodGhpcy5fdXJsPWUpaWYoXCJ2aW1lb1wiPT09dGhpcy52aWV3LnR5cGUpaWYoZT09PWkpdGhpcy5fdXJsPWUsdGhpcy5fbG9hZCh0aGlzLl91cmwpO2Vsc2Ugc3dpdGNoKHRoaXMudmlldy50eXBlKXtjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9UaHVtYm5haWw9bmV3IFZpbWVvVGh1bWJuYWlsKHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl91cmw9aSx0aGlzLl9sb2FkKGkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykpfWVsc2UgdGhpcy5fbG9hZCh0aGlzLl91cmwpfX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIil9LF9sb2FkOmZ1bmN0aW9uKGkpe3RoaXMudGh1bWJuYWlsV3JhcHBlci5wcmVwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpLmF0dHIoe3NyYzppfSkuY3NzKHtvcGFjaXR5OjFlLTR9KSksdGhpcy5mYWRlSW5TcGlubmVyKCksdGhpcy5yZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5pbWc7dGhpcy50aHVtYm5haWxGcmFtZSYmdGhpcy5fbG9hZGluZyYmKHRoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOmUubmF0dXJhbFdpZHRoLGhlaWdodDplLm5hdHVyYWxIZWlnaHR9LHRoaXMucmVzaXplKCksdGhpcy5zaG93KCkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KX0sX2Vycm9yOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZXJyb3JcIiksdGhpcy5pbWFnZSYmdGhpcy5pbWFnZS5oaWRlKCksdGhpcy50aHVtYm5haWxXcmFwcGVyLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikpLHRoaXMuc2hvdygpfSxmYWRlSW5TcGlubmVyOmZ1bmN0aW9uKCl7aWYoU3Bpbm5lci5zdXBwb3J0ZWQmJnRoaXMudmlldy5vcHRpb25zLnNwaW5uZXIpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLl9kZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNwaW5uZXIuc3RvcCghMCkuZmFkZVRvKGkuc2hvd3x8MCwxKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKX19LHNob3c6ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5sb2FkaW5nLnN0b3AoITApLmRlbGF5KGkuZGVsYXkpLmZhZGVUbyhpLnNob3csMCl9LF9jbGVhckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fZGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpLHRoaXMuX2RlbGF5PW51bGwpfSxyZXNpemU6ZnVuY3Rpb24oKXtpZih0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO2lmKHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt3aWR0aDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3RvcDppPzA6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSksbGVmdDppP1RodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpOjB9KSx0aGlzLnRodW1ibmFpbFdyYXBwZXIpe3ZhciBlPVRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsO2lmKHRoaXMudGh1bWJuYWlsLmNzcyh7d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHQsXCJtYXJnaW4tdG9wXCI6TWF0aC5yb3VuZCgtLjUqZS5oZWlnaHQpLFwibWFyZ2luLWxlZnRcIjpNYXRoLnJvdW5kKC0uNSplLndpZHRoKSxcIm1hcmdpbi1ib3R0b21cIjowLFwibWFyZ2luLXJpZ2h0XCI6MH0pLHRoaXMuX2RpbWVuc2lvbnMpe3ZhciB0LHM9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxuPU1hdGgubWF4KHMud2lkdGgscy5oZWlnaHQpLG89JC5leHRlbmQoe30sdGhpcy5fZGltZW5zaW9ucyk7aWYoby53aWR0aD5zLndpZHRoJiZvLmhlaWdodD5zLmhlaWdodCl7dmFyIGE9MSxoPTE7KHQ9Rml0LndpdGhpbihzLG8pKS53aWR0aDxzLndpZHRoJiYoYT1zLndpZHRoL3Qud2lkdGgpLHQuaGVpZ2h0PHMuaGVpZ2h0JiYoaD1zLmhlaWdodC90LmhlaWdodCk7dmFyIHI9TWF0aC5tYXgoYSxoKTsxPHImJih0LndpZHRoKj1yLHQuaGVpZ2h0Kj1yKSwkLmVhY2goXCJ3aWR0aCBoZWlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oaSxlKXt0W2VdPU1hdGgucm91bmQodFtlXSl9KX1lbHNlIHQ9Rml0LndpdGhpbih0aGlzLl9kaW1lbnNpb25zLG8ud2lkdGg8cy53aWR0aHx8by5oZWlnaHQ8cy5oZWlnaHQ/e3dpZHRoOm4saGVpZ2h0Om59OnMpO3ZhciBkPU1hdGgucm91bmQoLjUqcy53aWR0aC0uNSp0LndpZHRoKSxsPU1hdGgucm91bmQoLjUqcy5oZWlnaHQtLjUqdC5oZWlnaHQpO3RoaXMuaW1hZ2UucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcygkLmV4dGVuZCh7fSx0LHt0b3A6bCxsZWZ0OmR9KSl9fX19fSk7dmFyIFVJPXtfbW9kZXM6W1wiZnVsbGNsaWNrXCIsXCJvdXRzaWRlXCIsXCJpbnNpZGVcIl0sX3VpOiExLF92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3I6W1wiLmZyLWNvbnRlbnQtZWxlbWVudFwiLFwiLmZyLWNvbnRlbnRcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZVwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlIC5mci1zdHJva2UtY29sb3JcIl0uam9pbihcIiwgXCIpLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzW2VdLmluaXRpYWxpemUoKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktaW5zaWRlLWhpZGRlbiBmci11aS1mdWxsY2xpY2staGlkZGVuXCIpfSxzZXQ6ZnVuY3Rpb24oaSl7dGhpcy5fdWkmJihXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy11aS1cIit0aGlzLl91aSksT3ZlcmxheS5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS11aS1cIit0aGlzLl91aSkpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXVpLVwiK2kpLE92ZXJsYXkuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktdWktXCIraSksdGhpcy5fZW5hYmxlZCYmdGhpcy5fdWkmJnRoaXMuX3VpIT09aSYmKHRoaXNbdGhpcy5fdWldLmRpc2FibGUoKSx0aGlzW2ldLmVuYWJsZSgpLFVJW2ldLnNob3coKSksdGhpcy5fdWk9aX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5zaG93KCl9LGVuYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV1bZT09PXRoaXMuX3VpP1wiZW5hYmxlXCI6XCJkaXNhYmxlXCJdKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSEwfSxkaXNhYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5kaXNhYmxlKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSExfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5hZGp1c3RQcmV2TmV4dChpLGUpfSxzaG93OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLnNob3coaSxlKX0saGlkZTpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5oaWRlKGksZSl9LHJlc2V0OmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5yZXNldCgpfSx0aGlzKSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmdGhpcy5zZXQoaS5fdWkpfX07cmV0dXJuIFVJLmZ1bGxjbGljaz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2UtZnVsbGNsaWNrXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMucmVzZXRQcmV2TmV4dCgpLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxyZXNldFByZXZOZXh0OmZ1bmN0aW9uKCl7dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLnN0b3AoITApLnJlbW92ZUF0dHIoXCJzdHlsZVwiKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtzfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIG49dGhpcy5fcHJldmlvdXMuYXR0cihcInN0eWxlXCIpO3RoaXMuX3ByZXZpb3VzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgbz1wYXJzZUludCh0aGlzLl9wcmV2aW91cy5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLl9wcmV2aW91cy5hdHRyKHtzdHlsZTpufSksc3x8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBhPXQuX2luZm9IZWlnaHR8fDAsaD10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkscj17XCJtYXJnaW4tdG9wXCI6by0uNSphfSxkPVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvd3x8MDt0aGlzLm9wZW5pbmcmJihkPTApLGguc3RvcCghMCkuYW5pbWF0ZShyLGQsaSksdGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLGhbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZihlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpc3dpdGNoKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpKWlmKDEhPT1QYWdlcy5wYWdlcy5sZW5ndGgpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX1lbHNlIFdpbmRvdy5oaWRlKCl9LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3LnR5cGU7dGhpcy5fdmlzaWJsZSYmKCFlfHxcInlvdXR1YmVcIiE9PWUmJlwidmltZW9cIiE9PWUpJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktZnVsbGNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkuaW5zaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7fSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5fb25Nb3VzZUxlYXZlKGkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5jbGVhclRpbWVyKCl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuX3BhZ2VzLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIpLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudC1lbGVtZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpKXtpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGUmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1pbnNpZGVcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1pbnNpZGVcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5vdXRzaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktb3V0c2lkZVwiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KTt0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksc1sodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LHNob3c6ZnVuY3Rpb24oKXtCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCl9LGhpZGU6ZnVuY3Rpb24oKXt9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe319LCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGkpe19GcmVzY28uaW5pdGlhbGl6ZSgpfSksRnJlc2NvfSk7IiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuaW1wb3J0IEZyZXNjbyBmcm9tICcuL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZU1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGltZ1NsaWRlckhlaWdodDtcbiAgaWYgKGNhcm91c2VsRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcpLm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG5cbiAgfVxufVxuXG4vKipcbiAqIENhcm91c2VsIGNyZWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsKCkge1xuICBpZiAoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykgJiYgIWpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVzaXplIFByb2R1Y3QgR2FsbGVyeSBzbGlkZXIgd2hlbiByZXNpemluZyBmcm9tIGRlc2t0b3AgdG8gbW9iaWxlXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICB2YXIgc2xpZGVyID0gJCgnI3Byb2R1Y3RHYWxsZXJ5Jyk7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBzbGlkZXJbMF0uc2xpY2sgJiYgc2xpZGVyWzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgc2xpZGVyLnNsaWNrKG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbi8qZnVuY3Rpb24gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2KCkge1xuICBpZiAoJCgnI2ltYWdlcy1jb250YWluZXInKS5oZWlnaHQoKSAtICQoJyNwcm9kdWN0LXN0aWNreScpLmhlaWdodCgpIC0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gMjQgPj0gLSgkKCcjaW1hZ2VzLWNvbnRhaW5lcicpLm9mZnNldCgpLnRvcCkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QuYWRkKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfVxufSovXG5cbmZ1bmN0aW9uIHByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDE0NDApIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xuXG4gICQoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCAuYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSAkKCdpbnB1dFtuYW1lXj1cIicgKyAkKGFkZFRvQ2FydEZvcm0pLmRhdGEoJ25hbWVUb0NoZWNrJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgY29uc3QgYnVuZGxlSXRlbXNDb3VudCA9ICQoJ2Rpdi5idW5kbGUtaXRlbScpLmxlbmd0aDtcbiAgICBpZihzZWxlY3RlZFNpemUgPiAwICYmIHNlbGVjdGVkU2l6ZSA8IGJ1bmRsZUl0ZW1zQ291bnQgKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0Om5vdCguaW5wdXQtY2hlY2tlZCknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PT0gMCkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSlcblxuICAkKCdpbnB1dFtpZF49XCJiaXRiYWdfc3lsaXVzX3Byb2R1Y3RfYnVuZGxlX3BsdWdpbl9hZGRfcHJvZHVjdF9idW5kbGVfdG9fY2FydF9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykuZmluZCgnc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykuYWRkQ2xhc3MoJ2lucHV0LWNoZWNrZWQnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSlcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VJbml0KCkge1xuICBqUXVlcnkoJyNtYWluTmF2YmFyJykuY29sbGFwc2Uoe1xuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1lZ2FtZW51IGZ1bmN0aW9uc1xuICogLmhhcy1tZWdhbWVudSB0byB1c2UgZHJvcGRvd24gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIG1lZ2FtZW51RnVuY3Rpb25zKCkge1xuICAvLyBCdXR0b24gaG92ZXIgc2ltdWxhdGVzIGNsaWNrIG9uIGl0XG4gICQoJyNtZW51QnV0dG9uTWFpbiwgI21lZ2FtZW51RHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qJCgnI21haW5Db250ZW50Q29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAzMykge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTsqL1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgaWYgKCQoJyNuYXZiYXJNYWluTW9iaWxlJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNZWdhbWVudSBmdW5jdGlvbnMgOiBtYW5hZ2UgbW9iaWxlIG1lbnVcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG5cbiAgJCgnYS5uYXYtdGF4b24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKycgaW1nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCdkaXYubWVudS1pbWcnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChcIiNuYXZiYXJNYWluTW9iaWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoJy5hY3RpdmUubG9jYWxlLWxpbmssIC5uYXZiYXJUYXhvbnNMaW5rLCAubG9nLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCh0aGlzKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNvcGVuQWNjb3VudE1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKCcubG9nLWxpbmsnKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5zaG93KCk7XG4gIH0pO1xuXG4gICQoJy5kcm9wZG93bi5jYXJ0LWJ0bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51SWNvbmVzRnVuY3Rpb25zKCkge1xuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1jYXJ0JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpXG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplTWVudShlbGVtZW50KSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgJChlbGVtZW50KS5jc3MoJ3RvcCcsIGhlYWRlckhlaWdodCArICdweCcpO1xuICAgICQoZWxlbWVudCkuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKGVsZW1lbnQgKyAnICNtZW51TW9iaWxlTGlua3MnKS5jc3MoJ2JvdHRvbScsIGhlYWRlckhlaWdodCArICdweCcpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheScpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9naW5GdW5jdGlvbnMoKSB7XG4gIGlmKCQoJy5sb2dpbi1mb3JtJykgfHwgJCgnLnJlZ2lzdGVyLWZvcm0nKSkge1xuICAgICQoJy5idG4tZm9ybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50ICsgJyBidXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoJCgnLnZlcmlmeS1hY2NvdW50JykpIHtcbiAgICAkKCcudmVyaWZ5LWFjY291bnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgLyokKCcucmVnaXN0ZXItZm9ybSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IGVtYWlsID0gJCgnLnJlZ2lzdGVyLWZvcm0gaW5wdXQnKS52YWwoKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmZpbmQoJ3NwYW4uaXMtaW52YWxpZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkucHJldignZGl2JykuZmluZCgnc3Bhbi5pcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfSk7Ki9cbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzaGFyZUZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FydEZ1bmN0aW9ucygpIHtcbiAgLy8gUmVsb2FkIFF0eVxuICAkKCcucmVsb2FkLXF0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGNvdXBvbiBjb2RlXG4gICQoJy5jb3Vwb24tY29kZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICBpZiAoY291cG9uID09PSAnJykge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgnJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbChjb3Vwb24pO1xuICAgIH1cblxuICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgfSk7XG5cbiAgJChcImJvZHlcIikub24oXCJrZXlkb3duXCIsIFwiLmNvdXBvbi1jb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIC8vIENoYW5nZSBxdWFudGl0eSBvbiBtb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmV3UXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICQoJ2lucHV0W25hbWU9XCInICsgaW5wdXRRdHlOYW1lICsgJ1wiXScpLnZhbChuZXdRdHkpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSAhPSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcmRlcnNHcmlkRnVuY3Rpb25zKCkge1xuICAvLyBEZXNrdG9wIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0cicsIHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAvLyBNb2JpbGUgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5yZW1vdmVDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5hZGRDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcuYXJyb3ctY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi5vcmRlci1kZXRhaWxzJykucHJldignZGl2JykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZ2luUGFnZUZ1bmN0aW9ucygpIHtcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHJlc2l6ZU1lbnUoJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKSk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcbiAgLy8gTWVudSBGdW5jdGlvbnNcbiAgbWVnYW1lbnVGdW5jdGlvbnMoKTtcbiAgbWVudUljb25lc0Z1bmN0aW9ucygpO1xuXG4gIGxvZ2luRnVuY3Rpb25zKCk7XG4gIG9yZGVyc0dyaWRGdW5jdGlvbnMoKTtcbiAgbG9naW5QYWdlRnVuY3Rpb25zKCk7XG4gIGNhcnRGdW5jdGlvbnMoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICAvKmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gIH0qL1xuICAvLyBTaG93IG1vYmlsZSBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBZGRUb0NhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG5pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbmltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICBTeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgfVxuICBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uYmE5NjljOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYmFjay5jZDExZjBmYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jYXJkLmI3NTcxYjEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuZWVkZTZhYmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY29saXNzaW1vLjBiNzlhNzEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2RlbGl2ZXJ5LXRydWNrLjljM2RmY2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOWEzMTg1OWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lbi4zMDJlZTdiZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjZhYTcwN2Y1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZnIuODQ2ZDdlNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1pdC4zNTU1YTM2Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjJjMmE5Y2MzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuMDQwZjQxYmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS5lNzI2ODk3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9uZXh0LmZiNjQ2MDk1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC45NTI2MjVmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZWxvYWQuM2I3NTBkNDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmV0dXJuLXBvbGljeS42N2Q4YTc1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43ZmRlYzI3MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjY5OWM0MDM5LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=