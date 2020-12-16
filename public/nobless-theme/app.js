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
    $('.variant-list .variant-name').removeClass('variant-selected');
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

    if ($('input[name^="sylius_add_to_cart"]:checked').length === 0) {
      $(addToCartForm).find('.empty-product').removeClass('d-none');
    } else {
      $(addToCartForm).find('.empty-product').addClass('d-none');
      $(addToCartForm).trigger('submit');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZWxvYWQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JldHVybi1wb2xpY3kucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS92aXNhLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhU3RhciIsImZhUXVlc3Rpb25DaXJjbGUiLCJmYVNob3BwaW5nQmFnIiwiZmFDaGVjayIsImZhRXhjbGFtYXRpb25DaXJjbGUiLCJmYUluZm9DaXJjbGUiLCJmYUNoZXZyb25VcCIsImZhTWFwTWFya2VyQWx0IiwiZmFTaHV0dGxlVmFuIiwiZmFDcmVkaXRDYXJkIiwiZmFGbGFnIiwiZmFDY01hc3RlcmNhcmQiLCJmYUNjVmlzYSIsImZhQ2NQYXlwYWwiLCJmYVRpbWVzIiwiZmFTZWFyY2giLCJmYVBsdXMiLCJmYVBlbmNpbEFsdCIsImZhU3luY0FsdCIsImRvbSIsIndhdGNoIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWwiLCJlbGVtZW50IiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicmVkaXJlY3RVcmwiLCJ2YWxpZGF0aW9uRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlcXVlc3QiLCJheGlvcyIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjbGFzc0xpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVycm9yIiwicmVtb3ZlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJkYXRhIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJwYXJzZUtleSIsImtleSIsInJlcGxhY2UiLCJ3b3JkcyIsInRvVXBwZXJDYXNlIiwiU3lsaXVzQWRkcmVzc0Jvb2siLCJzZWxlY3QiLCJmaW5kQnlOYW1lIiwibmFtZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJ2YWx1ZSIsInByb3ZpbmNlQ29kZSIsInByb3ZpbmNlTmFtZSIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsImlucHV0IiwicHJvcGVydHkiLCJmaWVsZCIsImluZGV4T2YiLCJkaXNwYXRjaEV2ZW50IiwiZXhpc3RzIiwic2V0SW50ZXJ2YWwiLCJwcm92aW5jZUNvZGVGaWVsZCIsInByb3ZpbmNlTmFtZUZpZWxkIiwiaGFzQXR0cmlidXRlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJyZWxvYWQiLCJTeWxpdXNBcGlUb2dnbGUiLCJ0b2dnbGVhYmxlRWxlbWVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJTeWxpdXNSYXRpbmciLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsInNldHRpbmdzIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJvblJhdGUiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicHJvZHVjdEZ1bmN0aW9ucyIsImFkZFRvQ2FydEZvcm0iLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJoZWFkZXJPdXRlckhlaWdodCIsInByb2R1Y3RDb250YWluZXJIZWlnaHQiLCJyZXNpemVNZW51IiwiaGVhZGVySGVpZ2h0Iiwib2ZmY2FudmFzX2lkIiwiZGl2VG9PcGVuIiwibG9naW5GdW5jdGlvbnMiLCJmb3JtRWxlbWVudCIsImFqYXgiLCJzZXJpYWxpemUiLCJ0ZXh0IiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0Iiwic2hhcmVGdW5jdGlvbnMiLCJ0b29sdGlwIiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29uc29sZSIsImxvZyIsIm1haWxUbyIsIm1haWx0byIsImNhcnRGdW5jdGlvbnMiLCJjb3Vwb24iLCJuZXdRdHkiLCJpbnB1dFF0eU5hbWUiLCJvcmRlcnNHcmlkRnVuY3Rpb25zIiwicHJldiIsImxvZ2luUGFnZUZ1bmN0aW9ucyIsIm1vZGFsSWQiLCJtb2RhbCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhlYWRlcnMiLCJhY2NlcHQiLCJnbGlnaHRib3giLCJzeWxpdXNTaGlwcGluZ0FkZHJlc3MiLCJzeWxpdXNCaWxsaW5nQWRkcmVzcyIsImVsZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBdUJBQSw0QkFBUUMsR0FBUixDQUFZQyxjQUFaLEVBQW9CQyxrQ0FBcEIsRUFBc0NDLDRCQUF0QyxFQUFxREMsZ0JBQXJELEVBQThEQyx3Q0FBOUQsRUFBbUZDLDBCQUFuRixFQUFpR0Msd0JBQWpHLEVBQThHQyw4QkFBOUcsRUFBOEhDLDBCQUE5SCxFQUE0SUMsMEJBQTVJLEVBQTBKQyxjQUExSixFQUFrS0MsOEJBQWxLLEVBQWtMQyxrQkFBbEwsRUFBNExDLHNCQUE1TCxFQUF3TUMsZ0JBQXhNLEVBQWlOQyxrQkFBak4sRUFBMk5DLGNBQTNOLEVBQW1PQyx3QkFBbk8sRUFBZ1BDLG9CQUFoUDs7QUFDQUMsd0JBQUlDLEtBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7QUFDQTs7Ozs7O0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBLE1BQU1D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R0FBOEMsRTs7Ozs7Ozs7Ozs7O0FDQTdEO0FBQWUsa0hBQW1ELEU7Ozs7Ozs7Ozs7OztBQ0FsRTtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0F4RDtBQUFlLDhHQUErQyxFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0F4RDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSwwR0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUsaUhBQWtELEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLHFIQUFzRCxFOzs7Ozs7Ozs7Ozs7QUNBckU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBeEQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhUXVlc3Rpb25DaXJjbGUsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlLmVycm9ycztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBwYXJzZUtleSA9IGZ1bmN0aW9uIHBhcnNlS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhfXFx3KS9nLCB3b3JkcyA9PiB3b3Jkc1sxXS50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmNvbnN0IFN5bGl1c0FkZHJlc3NCb29rID0gZnVuY3Rpb24gU3lsaXVzQWRkcmVzc0Jvb2soZWwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICBjb25zdCBmaW5kQnlOYW1lID0gZnVuY3Rpb24gZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWUqPSR7cGFyc2VLZXkobmFtZSl9XWApO1xuICB9O1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2hvaWNlID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgY2hvaWNlRGF0YSA9IHt9O1xuXG4gICAgICBbLi4uY2hvaWNlLmF0dHJpYnV0ZXNdLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKGF0dHIubmFtZS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxDYXNlZCA9IGF0dHIubmFtZS5yZXBsYWNlKCdkYXRhLScsICcnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBnID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY2hvaWNlRGF0YVtjYW1lbENhc2VkXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHByb3ZpbmNlQ29kZSwgcHJvdmluY2VOYW1lIH0gPSBjaG9pY2VEYXRhO1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnW2RhdGEtanMtYWRkcmVzcy1ib29rXScpLnF1ZXJ5U2VsZWN0b3IoJy5wcm92aW5jZS1jb250YWluZXInKTtcblxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VEYXRhKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZpbmRCeU5hbWUocHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdjb3VudHJ5Q29kZScpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICBjb25zdCBleGlzdHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUNvZGVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlQ29kZScpO1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VOYW1lRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgICAgICAgaWYgKCFwcm92aW5jZUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgIGlmIChwcm92aW5jZUNvZGVGaWVsZCAmJiBwcm92aW5jZUNvZGVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlQ29kZSAhPT0gJycgfHwgcHJvdmluY2VDb2RlICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZUNvZGVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlQ29kZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aW5jZU5hbWVGaWVsZCAmJiBwcm92aW5jZU5hbWVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlTmFtZSAhPT0gJycgfHwgcHJvdmluY2VOYW1lICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZU5hbWVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlTmFtZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRyZXNzQm9vaztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2FjY291bnQtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYmFjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL25leHQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWZyLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1kZS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24taXQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVzLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JlbG9hZC5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJywgY2Fyb3VzZWxFbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJChjYXJvdXNlbEVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfSBlbHNlIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnKS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJCgnLnNsaWRlci1jb250cm9scycpLm5vdCgnLnByb2R1Y3QtZ2FsbGVyeScpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuXG4gIH1cbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgaWYgKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpICYmICFqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIHNsaWRlciA9ICQoJyNwcm9kdWN0R2FsbGVyeScpO1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgc2xpZGVyWzBdLnNsaWNrICYmIHNsaWRlclswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIHNsaWRlci5zbGljayhvcHRzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpICYmICFqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBnYWxsZXJ5IGZvciBkZXNrdG9wIHdoZW4gcmVzaXplXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCkge1xuICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgJCgnLmZyZXNjby1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHVybCA6ICQodGhpcykuZGF0YSgnaW1hZ2UnKSxcbiAgICAgIHRodW1ibmFpbCA6ICQodGhpcykuZGF0YSgndGh1bWJuYWlsJyksXG4gICAgfTtcbiAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBoZWlnaHRDb250ZW50ID0gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogRml4IHByb2R1Y3QgZGVzY3JpcHRpb24gZGl2IG9uIHRvcCAocmlnaHQgY29sdW1uKSB3aGVuIHNjcm9sbGluZ1xuICovXG4vKmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNpbWFnZXMtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcjcHJvZHVjdC1zdGlja3knKS5oZWlnaHQoKSAtICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtIDI0ID49IC0oJCgnI2ltYWdlcy1jb250YWluZXInKS5vZmZzZXQoKS50b3ApKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn0qL1xuXG5mdW5jdGlvbiBwcm9kdWN0RnVuY3Rpb25zKCkge1xuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gIH0pO1xuXG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AgLnZhcmlhbnRzLWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCcpXG4gIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTQ0MCkge1xuICAgICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLnNob3coKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLmhpZGUoKTtcbiAgfSk7XG5cbiAgJCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IC5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgIGlmKCQoJ2lucHV0W25hbWVePVwic3lsaXVzX2FkZF90b19jYXJ0XCJdOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VJbml0KCkge1xuICBqUXVlcnkoJyNtYWluTmF2YmFyJykuY29sbGFwc2Uoe1xuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1lZ2FtZW51IGZ1bmN0aW9uc1xuICogLmhhcy1tZWdhbWVudSB0byB1c2UgZHJvcGRvd24gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIG1lZ2FtZW51RnVuY3Rpb25zKCkge1xuICAvLyBCdXR0b24gaG92ZXIgc2ltdWxhdGVzIGNsaWNrIG9uIGl0XG4gICQoJyNtZW51QnV0dG9uTWFpbiwgI21lZ2FtZW51RHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qJCgnI21haW5Db250ZW50Q29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAzMykge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTsqL1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgaWYgKCQoJyNuYXZiYXJNYWluTW9iaWxlJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBNZWdhbWVudSBmdW5jdGlvbnMgOiBtYW5hZ2UgbW9iaWxlIG1lbnVcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG5cbiAgJCgnYS5uYXYtdGF4b24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKycgaW1nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCdkaXYubWVudS1pbWcnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSkuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChcIiNuYXZiYXJNYWluTW9iaWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoJy5hY3RpdmUubG9jYWxlLWxpbmssIC5uYXZiYXJUYXhvbnNMaW5rLCAubG9nLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCh0aGlzKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNvcGVuQWNjb3VudE1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKCcubG9nLWxpbmsnKS5kYXRhKCdkaXZUb09wZW4nKSk7XG4gIH0pO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuXG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5zaG93KCk7XG4gIH0pO1xuXG4gICQoJy5kcm9wZG93bi5jYXJ0LWJ0bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZW51SWNvbmVzRnVuY3Rpb25zKCkge1xuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1jYXJ0JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpXG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplTWVudShlbGVtZW50KSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgJChlbGVtZW50KS5jc3MoJ3RvcCcsIGhlYWRlckhlaWdodCArICdweCcpO1xuICAgICQoZWxlbWVudCkuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKGVsZW1lbnQgKyAnICNtZW51TW9iaWxlTGlua3MnKS5jc3MoJ2JvdHRvbScsIGhlYWRlckhlaWdodCArICdweCcpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheScpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9naW5GdW5jdGlvbnMoKSB7XG4gIGlmKCQoJy5sb2dpbi1mb3JtJykgfHwgJCgnLnJlZ2lzdGVyLWZvcm0nKSkge1xuICAgICQoJy5idG4tZm9ybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50ICsgJyBidXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoJCgnLnZlcmlmeS1hY2NvdW50JykpIHtcbiAgICAkKCcudmVyaWZ5LWFjY291bnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgLyokKCcucmVnaXN0ZXItZm9ybSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IGVtYWlsID0gJCgnLnJlZ2lzdGVyLWZvcm0gaW5wdXQnKS52YWwoKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmZpbmQoJ3NwYW4uaXMtaW52YWxpZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkucHJldignZGl2JykuZmluZCgnc3Bhbi5pcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfSk7Ki9cbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzaGFyZUZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FydEZ1bmN0aW9ucygpIHtcbiAgLy8gUmVsb2FkIFF0eVxuICAkKCcucmVsb2FkLXF0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGNvdXBvbiBjb2RlXG4gICQoJy5jb3Vwb24tY29kZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICBpZiAoY291cG9uID09PSAnJykge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgnJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbChjb3Vwb24pO1xuICAgIH1cblxuICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgfSk7XG5cbiAgJChcImJvZHlcIikub24oXCJrZXlkb3duXCIsIFwiLmNvdXBvbi1jb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIC8vIENoYW5nZSBxdWFudGl0eSBvbiBtb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmV3UXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICQoJ2lucHV0W25hbWU9XCInICsgaW5wdXRRdHlOYW1lICsgJ1wiXScpLnZhbChuZXdRdHkpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSAhPSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcmRlcnNHcmlkRnVuY3Rpb25zKCkge1xuICAvLyBEZXNrdG9wIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0cicsIHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAvLyBNb2JpbGUgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5yZW1vdmVDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5hZGRDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcuYXJyb3ctY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi5vcmRlci1kZXRhaWxzJykucHJldignZGl2JykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZ2luUGFnZUZ1bmN0aW9ucygpIHtcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHJlc2l6ZU1lbnUoJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKSk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcbiAgLy8gTWVudSBGdW5jdGlvbnNcbiAgbWVnYW1lbnVGdW5jdGlvbnMoKTtcbiAgbWVudUljb25lc0Z1bmN0aW9ucygpO1xuXG4gIGxvZ2luRnVuY3Rpb25zKCk7XG4gIG9yZGVyc0dyaWRGdW5jdGlvbnMoKTtcbiAgbG9naW5QYWdlRnVuY3Rpb25zKCk7XG4gIGNhcnRGdW5jdGlvbnMoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICAvKmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gIH0qL1xuICAvLyBTaG93IG1vYmlsZSBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBZGRUb0NhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG5pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbmltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICBTeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgfVxuICBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uYmE5NjljOTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYmFjay5jZDExZjBmYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jYXJkLmI3NTcxYjEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuZWVkZTZhYmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY29saXNzaW1vLjBiNzlhNzEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2RlbGl2ZXJ5LXRydWNrLjljM2RmY2Q4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOWEzMTg1OWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lbi4zMDJlZTdiZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjZhYTcwN2Y1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZnIuODQ2ZDdlNjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1pdC4zNTU1YTM2Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjJjMmE5Y2MzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuMDQwZjQxYmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS5lNzI2ODk3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9uZXh0LmZiNjQ2MDk1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC45NTI2MjVmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZWxvYWQuM2I3NTBkNDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmV0dXJuLXBvbGljeS42N2Q4YTc1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43ZmRlYzI3MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjY5OWM0MDM5LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=