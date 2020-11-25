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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1nYi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwidmFsdWUiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJmb3JtIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwidmFsIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsImNvdW50cnlTZWxlY3QiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHJ5Q29kZSIsImNvbnRlbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJvbnNjcm9sbCIsImZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0IiwicHJvZHVjdEZ1bmN0aW9ucyIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImNvbGxhcHNlIiwibWVnYW1lbnVGdW5jdGlvbnMiLCJjbG9zZU1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImRldmVsb3BNb2JpbGVNZW51IiwibWVudUljb25lc0Z1bmN0aW9ucyIsImhlYWRlck91dGVySGVpZ2h0IiwicHJvZHVjdENvbnRhaW5lckhlaWdodCIsInJlc2l6ZU1lbnUiLCJoZWFkZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJmb3JtRnVuY3Rpb25zIiwiZm9ybUVsZW1lbnQiLCJzaGFyZUZ1bmN0aW9ucyIsInRvb2x0aXAiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwib3JkZXJzR3JpZEZ1bmN0aW9ucyIsInByZXYiLCJsb2dpblBhZ2VGdW5jdGlvbnMiLCJtb2RhbElkIiwibW9kYWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94Iiwic3lsaXVzU2hpcHBpbmdBZGRyZXNzIiwic3lsaXVzQmlsbGluZ0FkZHJlc3MiLCJlbGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxLQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7O0FBQ0E7Ozs7OztBQVpBOzs7Ozs7Ozs7QUFTQTtBQUtBLE1BQU1DLGVBQWUsR0FBSUMsRUFBRCxJQUFRO0FBQzlCLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixRQUFyQixDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsZUFBckIsQ0FB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QSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9yLnJlc3BvbnNlLmRhdGEpLmZvckVhY2goKFssIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2UuZXJyb3JzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaG9pY2VEYXRhID0ge307XG5cbiAgICAgIFsuLi5jaG9pY2UuYXR0cmlidXRlc10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBjb25zdCBjYW1lbENhc2VkID0gYXR0ci5uYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpLnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBjaG9pY2VEYXRhW2NhbWVsQ2FzZWRdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZURhdGE7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCdbZGF0YS1qcy1hZGRyZXNzLWJvb2tdJykucXVlcnlTZWxlY3RvcignLnByb3ZpbmNlLWNvbnRhaW5lcicpO1xuXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZURhdGEpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlQ29kZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VDb2RlJyk7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkICYmIHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlQ29kZUZpZWxkLnZhbHVlID0gcHJvdmluY2VDb2RlO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpbmNlTmFtZUZpZWxkICYmIHByb3ZpbmNlTmFtZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VOYW1lICE9PSAnJyB8fCBwcm92aW5jZU5hbWUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbHVlID0gcHJvdmluY2VOYW1lO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZHJlc3NCb29rO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNMb2FkYWJsZUZvcm1zO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFByb3ZpbmNlSW5wdXRWYWx1ZSh2YWx1ZVNlbGVjdG9yKSB7XG4gIGNvbnN0IHZhbCA9IHZhbHVlU2VsZWN0b3IgPyB2YWx1ZVNlbGVjdG9yLnZhbHVlIDogbnVsbDtcbiAgcmV0dXJuICF2YWwgfHwgdmFsID09IHVuZGVmaW5lZCA/ICcnIDogYHZhbHVlPVwiJHt2YWx9XCJgO1xufTtcblxuXG5jb25zdCBTeWxpdXNQcm92aW5jZUZpZWxkID0gZnVuY3Rpb24gU3lsaXVzUHJvdmluY2VGaWVsZCgpIHtcbiAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdFtuYW1lJD1cIltjb3VudHJ5Q29kZV1cIl0nKTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIGNvdW50cnlTZWxlY3QuZm9yRWFjaCgoY291bnRyeVNlbGVjdEl0ZW0pID0+IHtcbiAgICBjb3VudHJ5U2VsZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICcnIHx8IHNlbGVjdC52YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJvdmluY2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnJyk7XG5cbiAgICAgIGF4aW9zLmdldChwcm92aW5jZUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIHsgcGFyYW1zOiB7IGNvdW50cnlDb2RlOiBzZWxlY3QudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5jb250ZW50LmluZGV4T2YoJ3NlbGVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgoXG4gICAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCA+IG9wdGlvbltzZWxlY3RlZCQ9XCJzZWxlY3RlZFwiXScpXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkTmFtZX1cIiR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnb3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJywgJ29wdGlvbiB2YWx1ZT1cIlwiJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YCwgYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9XCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VJbnB1dFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZE5hbWV9XCIke3Byb3ZpbmNlSW5wdXRWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZUlucHV0RmllbGRJZH1cImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50cnlTZWxlY3RJdGVtLnZhbHVlICE9PSAnJykge1xuICAgICAgY291bnRyeVNlbGVjdEl0ZW0uZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1Byb3ZpbmNlRmllbGQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNSYXRpbmcge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJhdGluZ01heCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nTWF4KSB8fCA1O1xuICAgICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlKSB8fCAwO1xuICAgICAgdGhpcy52aWV3T25seSA9IHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdWaWV3b25seSAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuYnRuT25FbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vbl0nKTtcbiAgICAgIHRoaXMuYnRuT2ZmRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb2ZmXScpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnJhdGluZ01heDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWxlbWVudC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUgPSBpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T25seSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPD0gdGhpcy5yYXRpbmdBdmVyYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PbkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9mZkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0VmFsdWUoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUpO1xuICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzLm9uUmF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmF0aW5nO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7IH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IodHJpZ2dlcikge1xuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50cmlnZ2VyLmRhdGFzZXQuanNUb2dnbGUpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlci5jaGVja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNsYXNzIFN5bGl1c1ZhcmlhbnRJbWFnZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LWltYWdlXScpO1xuICAgIHRoaXMubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2VMaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlTGluayA9IHRoaXMubWFpbkltYWdlTGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZVNyYyA9IHRoaXMubWFpbkltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldEltYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgaW5wdXRbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl06Y2hlY2tlZCwgXG4gICAgICBzZWxlY3RbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdIG9wdGlvbjpjaGVja2VkXG4gICAgYCk7XG5cbiAgICByZXR1cm4gWy4uLml0ZW1zXS5tYXAoZWwgPT4gZWwudmFsdWUpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUltYWdlU3JjKHZhcmlhbnQpIHtcbiAgICBsZXQgaW1hZ2VMaW5rID0gdGhpcy5kZWZhdWx0SW1hZ2VMaW5rO1xuICAgIGxldCBpbWFnZVNyYyA9IHRoaXMuZGVmYXVsdEltYWdlU3JjO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1jb2RlPVwiJHt2YXJpYW50fVwiXSwgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtb3B0aW9ucz1cIiR7dmFyaWFudH0gXCJdXG4gICAgYCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1qcy1wcm9kdWN0LXRodW1ibmFpbF0nKTtcbiAgICAgIGltYWdlTGluayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBpbWFnZVNyYyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFyZ2UtdGh1bWJuYWlsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1hZ2VMaW5rLCBpbWFnZVNyYyB9O1xuICB9XG5cbiAgc2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRBY3RpdmVJbWFnZVNyYyh0aGlzLmdldEFjdGl2ZVZhcmlhbnQoKSk7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGltZy5pbWFnZUxpbmspO1xuICAgIHRoaXMubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmltYWdlU3JjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50SW1hZ2VzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSAnJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IHNlbGVjdFtkYXRhLW9wdGlvbl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHNlbGVjdG9yICs9IGBbZGF0YS0ke3NlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAocHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdW5hdmFpbGFibGUtdGV4dCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtdmFyaWFudC1wcmljZV0nKS5pbm5lckhUTUw7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBzeWxpdXNWYXJpYW50c1ByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKSB8fCBudWxsO1xuICBjb25zdCBzeWxpdXNQcm9kdWN0VmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXByb2R1Y3QtdmFyaWFudHMnKSB8fCBudWxsO1xuXG4gIGlmIChzeWxpdXNWYXJpYW50c1ByaWNpbmcpIHtcbiAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICB9IGVsc2UgaWYgKHN5bGl1c1Byb2R1Y3RWYXJpYW50cykge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50c1ByaWNlcztcbiIsIi8qIEpTIHBsdWdpbnMgKi9cbmltcG9ydCAncG9wcGVyLmpzL2Rpc3QvcG9wcGVyLm1pbic7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0IHsgaW5pdCwgZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZ2IucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xud2luZG93Lm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG4vKipcbiAqIFJlc2l6ZSBmdW5jdGlvbiB0byBrZWVwIGFsbCB0aGUgbWFpbi1jb250ZW50IHZpc2libGVcbiAqL1xuZnVuY3Rpb24gcmVzaXplTWFpbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCI7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93KGNhcm91c2VsRWxlbWVudCkge1xuICBsZXQgaW1nU2xpZGVySGVpZ2h0O1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcsIGNhcm91c2VsRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoY2Fyb3VzZWxFbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH0gZWxzZSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJykub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTcpO1xuICAgICQoJy5zbGlkZXItY29udHJvbHMnKS5ub3QoJy5wcm9kdWN0LWdhbGxlcnknKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcblxuICB9XG59XG5cbi8qKlxuICogQ2Fyb3VzZWwgY3JlYXRpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoKSB7XG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZihqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTI4MCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKSAmJiAhalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5Jykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFsgXG4gICAgICAgIHsgXG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLCBcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9IFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCwgXG4gICAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiIFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVzaXplIFByb2R1Y3QgR2FsbGVyeSBzbGlkZXIgd2hlbiByZXNpemluZyBmcm9tIGRlc2t0b3AgdG8gbW9iaWxlXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbIFxuICAgICAgICB7IFxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCwgXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfSBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsIFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIiBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIHNsaWRlciA9ICQoJyNwcm9kdWN0R2FsbGVyeScpO1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgc2xpZGVyWzBdLnNsaWNrICYmIHNsaWRlclswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIHNsaWRlci5zbGljayhvcHRzKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBnYWxsZXJ5IGZvciBkZXNrdG9wIHdoZW4gcmVzaXplXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCkge1xuICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgJCgnLmZyZXNjby1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHVybCA6ICQodGhpcykuZGF0YSgnaW1hZ2UnKSxcbiAgICAgIHRodW1ibmFpbCA6ICQodGhpcykuZGF0YSgndGh1bWJuYWlsJyksXG4gICAgfTtcbiAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBoZWlnaHRDb250ZW50ID0gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJlc2NvLXNsaWRlJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBGcmVzY28uc2hvdyhcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICB7XG4gICAgICAgICAgdGh1bWJuYWlsczogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBOdW1iZXIoaW5kZXggKyAxKVxuICAgICAgKTtcblxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIEZpeCBwcm9kdWN0IGRlc2NyaXB0aW9uIGRpdiBvbiB0b3AgKHJpZ2h0IGNvbHVtbikgd2hlbiBzY3JvbGxpbmdcbiAqL1xuZnVuY3Rpb24gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2KCkge1xuICBpZiAoJCgnI2ltYWdlcy1jb250YWluZXInKS5oZWlnaHQoKSAtICQoJyNwcm9kdWN0LXN0aWNreScpLmhlaWdodCgpIC0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gMjQgPj0gLSgkKCcjaW1hZ2VzLWNvbnRhaW5lcicpLm9mZnNldCgpLnRvcCkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QuYWRkKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0RnVuY3Rpb25zKCkge1xuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gIH0pO1xuXG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AgLnZhcmlhbnRzLWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCcpXG4gIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTAwMCkge1xuICAgICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLnNob3coKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLmhpZGUoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gOTkyKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgfSBlbHNlIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiA5OTIpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICB9IGVsc2UgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiA5OTIpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA5OTIpIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDk5Mikge1xuICAgICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1jYXJ0JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpXG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gOTkyKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA5OTIpIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgICBcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG4gIFxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybUZ1bmN0aW9ucygpIHtcbiAgaWYoJCgnLmxvZ2luLWZvcm0nKSB8fCAkKCcucmVnaXN0ZXItZm9ybScpKSB7XG4gICAgJCgnLmJ0bi1mb3JtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybUVsZW1lbnQgKyAnIGJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZigkKCcudmVyaWZ5LWFjY291bnQnKSkge1xuICAgICQoJy52ZXJpZnktYWNjb3VudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogU2hhcmUgZnVuY3Rpb24gXG4gKi9cbmZ1bmN0aW9uIHNoYXJlRnVuY3Rpb25zKCkge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmVEcm9wZG93bicpKSB7XG4gICAgalF1ZXJ5KCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpO1xuICAgIC8vIEZhY2Vib29rIFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHdpblRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAoMzUwIC8gMik7XG4gICAgICBjb25zdCB3aW5MZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKDYwMCAvIDIpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rU2hhcmUnKS5kYXRhc2V0LnVybDtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jyt1cmwsICdGYWNlYm9vayAtIE5vYmxlenogU2hvcCcsICd0b3A9JyArIHdpblRvcCArICcsbGVmdD0nICsgd2luTGVmdCArICcsdG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPTYwMCxoZWlnaHQ9MzUwJyk7XG4gICAgfSk7XG5cbiAgICAvLyBQaW50ZXJlc3QgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGludGVyZXN0U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsUGludGVyZXN0U2hhcmUnKS5jbGljaygpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDb3B5IHRvIENsaXBib2FyZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5U2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMaW5rJyk7XG4gICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZW5hYmxlJyk7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dC52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyBcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpOyBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9yZGVyc0dyaWRGdW5jdGlvbnMoKSB7XG4gIC8vIERlc2t0b3AgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJ3RyJywgdGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gIC8vIE1vYmlsZSBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmFkZENsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJy5hcnJvdy1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2Lm9yZGVyLWRldGFpbHMnKS5wcmV2KCdkaXYnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9naW5QYWdlRnVuY3Rpb25zKCkge1xuICAkKCcucmVzZXQtcGFzc3dvcmQtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWxJZCA9ICQodGhpcykuZGF0YSgnbW9kYWxJZCcpO1xuICAgICQobW9kYWxJZCkubW9kYWwoJ3Nob3cnKTtcbiAgICAkKCcuaGVhZGVyLWRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVzaXplQ29udGVudCgpIHtcbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgc2hhcmVGdW5jdGlvbnMoKTtcbiAgcmVzaXplTWVudSgkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTiBcbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7ICAgXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcbiAgLy8gTWVudSBGdW5jdGlvbnNcbiAgbWVnYW1lbnVGdW5jdGlvbnMoKTtcbiAgbWVudUljb25lc0Z1bmN0aW9ucygpO1xuXG4gIGZvcm1GdW5jdGlvbnMoKTtcbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2VGdW5jdGlvbnMoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9XG4gIC8vIFNob3cgbW9iaWxlIG1lbnUgYWZ0ZXIgcGFnZSBpcyBsb2FkZWRcbiAgJCgnLm1vYmlsZS1vZmZjYW52YXMnKS5zaG93KCk7XG59XG5cbmV4cG9ydCB7IGluaXQsIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG5pbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9hY2NvdW50LWljb24uNmEwMjEwOWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLjUzM2JmZDAzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2FyZC5jZDQyYjE5Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuMTNhYjAxZGYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uNzI2NjM0MzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9kZWxpdmVyeS10cnVjay41YzFhM2NhMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZGUuOTYzYjI2YjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVzLjFlM2NjMGQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci42NDk1NDFjYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZ2IuOGFiZjgxZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LmFhOTIzNjZiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbG9nby5iNjk5NjA1My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuODBlOTU1ZjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5Ljk0NzFhY2RmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbmV4dC43MjA4OTE5OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC4zZWMxNmIxNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JldHVybi1wb2xpY3kuYTRkNTEwOWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9zaG9wcGluZy1iYWctaWNvbi43NTQ3YThiNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNDlhZGY1NGMucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==