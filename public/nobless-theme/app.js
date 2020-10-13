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

  if (carouselElement === undefined) {
    imgSliderHeight = $('.slick-active .card-img-top').height();
  } else {
    imgSliderHeight = $('.slick-active .card-img-top', carouselElement).height();
  }

  const arrowTopValue = Math.ceil(imgSliderHeight / 2 - 10);
  $('.slider-controls').css('top', arrowTopValue + 'px');
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
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
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
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
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
  } //replaceCarouselArrow();


  shareFunctions();

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
    e.preventDefault();
  });
  shareFunctions();
  productFunctions();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2Nocm9ub3Bvc3QucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NvbGlzc2ltby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21vbmRpYWwtcmVsYXkucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwidmFsdWUiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJmb3JtIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwidmFsIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsImNvdW50cnlTZWxlY3QiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHJ5Q29kZSIsImNvbnRlbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJvbnNjcm9sbCIsImZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0IiwicHJvZHVjdEZ1bmN0aW9ucyIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImNvbGxhcHNlIiwic2hhcmVGdW5jdGlvbnMiLCJ0b29sdGlwIiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29uc29sZSIsImxvZyIsIm1haWxUbyIsIm1haWx0byIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhlYWRlcnMiLCJhY2NlcHQiLCJnbGlnaHRib3giLCJzeWxpdXNTaGlwcGluZ0FkZHJlc3MiLCJzeWxpdXNCaWxsaW5nQWRkcmVzcyIsImVsZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBdUJBQSw0QkFBUUMsR0FBUixDQUFZQyxjQUFaLEVBQW9CQyxrQ0FBcEIsRUFBc0NDLDRCQUF0QyxFQUFxREMsZ0JBQXJELEVBQThEQyx3Q0FBOUQsRUFBbUZDLDBCQUFuRixFQUFpR0Msd0JBQWpHLEVBQThHQyw4QkFBOUcsRUFBOEhDLDBCQUE5SCxFQUE0SUMsMEJBQTVJLEVBQTBKQyxjQUExSixFQUFrS0MsOEJBQWxLLEVBQWtMQyxrQkFBbEwsRUFBNExDLHNCQUE1TCxFQUF3TUMsZ0JBQXhNLEVBQWlOQyxrQkFBak4sRUFBMk5DLGNBQTNOLEVBQW1PQyx3QkFBbk8sRUFBZ1BDLG9CQUFoUDs7QUFDQUMsd0JBQUlDLEtBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7QUFDQTs7Ozs7O0FBWkE7Ozs7Ozs7OztBQVNBO0FBS0EsTUFBTUMsZUFBZSxHQUFJQyxFQUFELElBQVE7QUFDOUIsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1FLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLENBQXFCLFFBQXJCLENBQVo7QUFD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Q0FBSixFQUEyRTtBQUFFLFFBQUl5SSw2QkFBSjtBQUE0QixHQS9DdkQsQ0FpRGxEOzs7QUFDQTtBQUNELENBbkRELEU7Ozs7Ozs7Ozs7O0FDaENBLDJEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcGFyc2VLZXkgPSBmdW5jdGlvbiBwYXJzZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG5jb25zdCBTeWxpdXNBZGRyZXNzQm9vayA9IGZ1bmN0aW9uIFN5bGl1c0FkZHJlc3NCb29rKGVsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgY29uc3QgZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lKj0ke3BhcnNlS2V5KG5hbWUpfV1gKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNob2ljZURhdGEgPSB7fTtcblxuICAgICAgWy4uLmNob2ljZS5hdHRyaWJ1dGVzXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZWQgPSBhdHRyLm5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJykucmVwbGFjZSgvLShbYS16XSkvZywgZyA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNob2ljZURhdGFbY2FtZWxDYXNlZF0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlRGF0YTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLWpzLWFkZHJlc3MtYm9va10nKS5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UtY29udGFpbmVyJyk7XG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlRGF0YSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaW5kQnlOYW1lKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlTmFtZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvdmluY2VDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQgJiYgcHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsdWUgPSBwcm92aW5jZUNvZGU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQgJiYgcHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VOYW1lRmllbGQudmFsdWUgPSBwcm92aW5jZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkcmVzc0Jvb2s7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXYsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG53aW5kb3cub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcpLmhlaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcsIGNhcm91c2VsRWxlbWVudCkuaGVpZ2h0KCk7XG4gIH1cbiAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGguY2VpbChpbWdTbGlkZXJIZWlnaHQgLyAyIC0gMTApO1xuICAkKCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG59XG5cbi8qKlxuICogQ2Fyb3VzZWwgY3JlYXRpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoKSB7XG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgJCgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKS5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZihqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTI4MCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKSAmJiAhalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5Jykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogWyBcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsIFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH0gXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LCBcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZXNpemUgUHJvZHVjdCBHYWxsZXJ5IHNsaWRlciB3aGVuIHJlc2l6aW5nIGZyb20gZGVza3RvcCB0byBtb2JpbGVcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogWyBcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsIFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH0gXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LCBcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIHZhciBzbGlkZXIgPSAkKCcjcHJvZHVjdEdhbGxlcnknKTtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIHNsaWRlclswXS5zbGljayAmJiBzbGlkZXJbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBzbGlkZXIuc2xpY2sob3B0cyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNpbWFnZXMtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcjcHJvZHVjdC1zdGlja3knKS5oZWlnaHQoKSAtICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtIDI0ID49IC0oJCgnI2ltYWdlcy1jb250YWluZXInKS5vZmZzZXQoKS50b3ApKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lOm5vdCgudmFyaWFudC1kaXNhYmxlZCknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEwMDApIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvbiBcbiAqL1xuZnVuY3Rpb24gc2hhcmVGdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7IFxuICAgICAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdzaG93Jyk7IFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplQ29udGVudCgpIHtcbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgLy9yZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICBzaGFyZUZ1bmN0aW9ucygpO1xuICBGcmVzY28uaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICBuYXZiYXJDb2xsYXBzZUluaXQoKTtcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgfSk7XG4gIC8vIFBSRVZFTlQgSU5TSURFIENMSUNLIERST1BET1dOIFxuICAkKCcuZHJvcGRvd24tbWVudScpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIiwgZnVuY3Rpb24gKGUpIHsgICBcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyAgICAgICAgICAgICAgICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgIFxuICB9KTtcbiAgc2hhcmVGdW5jdGlvbnMoKTtcbiAgcHJvZHVjdEZ1bmN0aW9ucygpO1xuXG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHJlcGxhY2VDYXJvdXNlbEFycm93KCk7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCB7IGluaXQsIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG5pbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jYXJkLmNkNDJiMTlmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC4xM2FiMDFkZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NvbGlzc2ltby43MjY2MzQzMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2RlbGl2ZXJ5LXRydWNrLjVjMWEzY2EwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbG9nby5iNjk5NjA1My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21hc3RlcmNhcmQuODBlOTU1ZjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5Ljk0NzFhY2RmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjNlYzE2YjE1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmV0dXJuLXBvbGljeS5hNGQ1MTA5Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNDlhZGY1NGMucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==