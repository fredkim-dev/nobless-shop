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
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

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
/**
 * Carousel creation
 */


function createCarousel() {
  if (jQuery('#carouselLatestProducts') && !jQuery('#carouselLatestProducts').hasClass('slick-initialized')) {
    jQuery('#carouselLatestProducts').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestProducts').next('.slider-controls'),
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 992,
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
  }

  if (jQuery('#carouselLatestBundles') && !jQuery('#carouselLatestBundles').hasClass('slick-initialized')) {
    jQuery('#carouselLatestBundles').slick({
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      appendArrows: jQuery('#carouselLatestBundles').next('.slider-controls'),
      prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 992,
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
      nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
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
      nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
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
  if ($('#product-info').offset().top + $('#product-info').height() >= $('#last-products').offset().top - 50) {
    document.getElementById('product-info').classList.add('sticky-bottom');
    document.getElementById('product-info').classList.remove('sticky-top-custom');
  }

  if ($(document).scrollTop() + window.innerHeight < $('#last-products').offset().top + 50) {
    document.getElementById('product-info').classList.remove('sticky-bottom');
    document.getElementById('product-info').classList.add('sticky-top-custom');
  }
}

function productFunctions() {
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function (event) {
    $('.variant-list .variant-name').removeClass('variant-selected');
    $(this).addClass('variant-selected');
  });
  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top').on('mouseenter', function () {
    if ($(document).width() > 768) {
      $('.variants-container', this).addClass('d-flex');
    }
  }).on('mouseleave', function () {
    if ($(document).width() > 768) {
      $('.variants-container', this).removeClass('d-flex');
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
 * Share function 
 */


function shareFunctions() {
  if (document.getElementById('shareDropdown')) {
    $('#copyShare').tooltip('disable'); // Facebook Share

    document.getElementById('facebookShare').addEventListener('click', function (event) {
      event.preventDefault();
      const winTop = screen.height / 2 - 350 / 2;
      const winLeft = screen.width / 2 - 600 / 2;
      const url = document.getElementById('facebookShare').dataset.url;
      window.open('http://www.facebook.com/sharer.php?u=' + url, 'Facebook - Noblezz Shop', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=600,height=350');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2Nocm9ub3Bvc3QucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NvbGlzc2ltby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21vbmRpYWwtcmVsYXkucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJjaG9pY2UiLCJjdXJyZW50VGFyZ2V0IiwiY2hvaWNlRGF0YSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJnIiwidmFsdWUiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJmb3JtIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwidmFsIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsImNvdW50cnlTZWxlY3QiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHJ5Q29kZSIsImNvbnRlbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwic2V0SW1hZ2UiLCJnZXRBY3RpdmVWYXJpYW50IiwiaXRlbXMiLCJtYXAiLCJqb2luIiwiZ2V0QWN0aXZlSW1hZ2VTcmMiLCJ2YXJpYW50IiwiaW1hZ2VMaW5rIiwiaW1hZ2VTcmMiLCJwYXJlbnQiLCJpbWciLCJoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSIsInNlbGVjdG9yIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInByaWNlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJzeWxpdXNWYXJpYW50c1ByaWNpbmciLCJnZXRFbGVtZW50QnlJZCIsInN5bGl1c1Byb2R1Y3RWYXJpYW50cyIsIm9ubG9hZCIsImluaXQiLCJvbnJlc2l6ZSIsInJlc2l6ZUNvbnRlbnQiLCJvbnNjcm9sbCIsImZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdiIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0IiwicHJvZHVjdEZ1bmN0aW9ucyIsIm5hdmJhckNvbGxhcHNlSW5pdCIsImNvbGxhcHNlIiwic2hhcmVGdW5jdGlvbnMiLCJ0b29sdGlwIiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjb3B5VGV4dCIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJtYWlsVG8iLCJtYWlsdG8iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94Iiwic3lsaXVzU2hpcHBpbmdBZGRyZXNzIiwic3lsaXVzQmlsbGluZ0FkZHJlc3MiLCJlbGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxLQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7O0FBQ0E7Ozs7OztBQVpBOzs7Ozs7Ozs7QUFTQTtBQUtBLE1BQU1DLGVBQWUsR0FBSUMsRUFBRCxJQUFRO0FBQzlCLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixRQUFyQixDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsZUFBckIsQ0FBcEI7QUFDQSxRQUFNRSxpQkFBaUIsR0FBR0osT0FBTyxDQUFDSyxhQUFSLENBQXNCLCtCQUF0QixDQUEx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NEUsUUFBUSxDQUFDNUUsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZjtBQUNELEdBekNpRCxDQTJDbEQ7OztBQUNBNEUsVUFBUSxDQUFDekMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDZixPQUE5QyxDQUFzRHNzQixJQUFJLElBQUksSUFBSXpsQixzQkFBSixDQUFpQnlsQixJQUFqQixDQUE5RCxFQTVDa0QsQ0E4Q2xEOztBQUNBLE1BQUk5b0IsUUFBUSxDQUFDNUUsYUFBVCxDQUF1Qiw2Q0FBdkIsQ0FBSixFQUEyRTtBQUFFLFFBQUl5SSw2QkFBSjtBQUE0QixHQS9DdkQsQ0FpRGxEOzs7QUFDQTtBQUNELENBbkRELEU7Ozs7Ozs7Ozs7O0FDaENBLDJEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcGFyc2VLZXkgPSBmdW5jdGlvbiBwYXJzZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG5jb25zdCBTeWxpdXNBZGRyZXNzQm9vayA9IGZ1bmN0aW9uIFN5bGl1c0FkZHJlc3NCb29rKGVsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgY29uc3QgZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lKj0ke3BhcnNlS2V5KG5hbWUpfV1gKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNob2ljZURhdGEgPSB7fTtcblxuICAgICAgWy4uLmNob2ljZS5hdHRyaWJ1dGVzXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZWQgPSBhdHRyLm5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJykucmVwbGFjZSgvLShbYS16XSkvZywgZyA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNob2ljZURhdGFbY2FtZWxDYXNlZF0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlRGF0YTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLWpzLWFkZHJlc3MtYm9va10nKS5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UtY29udGFpbmVyJyk7XG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlRGF0YSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaW5kQnlOYW1lKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlTmFtZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvdmluY2VDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQgJiYgcHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsdWUgPSBwcm92aW5jZUNvZGU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQgJiYgcHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VOYW1lRmllbGQudmFsdWUgPSBwcm92aW5jZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkcmVzc0Jvb2s7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXYsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG53aW5kb3cub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgaWYgKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTI4MCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgfVxuXG4gIGlmKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjgwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykgJiYgIWpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbIFxuICAgICAgICB7IFxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCwgXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfSBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsIFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIiBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogWyBcbiAgICAgICAgeyBcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsIFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH0gXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LCBcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIHZhciBzbGlkZXIgPSAkKCcjcHJvZHVjdEdhbGxlcnknKTtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIHNsaWRlclswXS5zbGljayAmJiBzbGlkZXJbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBzbGlkZXIuc2xpY2sob3B0cyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgZ2FsbGVyeSBmb3IgZGVza3RvcCB3aGVuIHJlc2l6ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gW107XG4gICQoJy5mcmVzY28tc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB1cmwgOiAkKHRoaXMpLmRhdGEoJ2ltYWdlJyksXG4gICAgICB0aHVtYm5haWwgOiAkKHRoaXMpLmRhdGEoJ3RodW1ibmFpbCcpLFxuICAgIH07XG4gICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9KTtcbiAgY29uc3QgaGVpZ2h0Q29udGVudCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNwcm9kdWN0LWluZm8nKS5vZmZzZXQoKS50b3AgKyAkKCcjcHJvZHVjdC1pbmZvJykuaGVpZ2h0KCkgPj0gJCgnI2xhc3QtcHJvZHVjdHMnKS5vZmZzZXQoKS50b3AgLSA1MCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5jbGFzc0xpc3QuYWRkKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbiAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgd2luZG93LmlubmVySGVpZ2h0IDwgJCgnI2xhc3QtcHJvZHVjdHMnKS5vZmZzZXQoKS50b3AgKyA1MCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lOm5vdCgudmFyaWFudC1kaXNhYmxlZCknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgICAgJCgnLnZhcmlhbnRzLWNvbnRhaW5lcicsIHRoaXMpLmFkZENsYXNzKCdkLWZsZXgnKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5yZW1vdmVDbGFzcygnZC1mbGV4Jyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuZnVuY3Rpb24gbmF2YmFyQ29sbGFwc2VJbml0KCkge1xuICBqUXVlcnkoJyNtYWluTmF2YmFyJykuY29sbGFwc2Uoe1xuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG59IFxuXG4vKipcbiAqIFNoYXJlIGZ1bmN0aW9uIFxuICovXG5mdW5jdGlvbiBzaGFyZUZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7IFxuICAgICAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdzaG93Jyk7IFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplQ29udGVudCgpIHtcbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTiBcbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7ICAgXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgICAgICAgICAgICAgICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTsgICBcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9XG4gIFxufVxuXG5leHBvcnQgeyBpbml0LCBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXYsIHJlc2l6ZUNvbnRlbnQgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9mb250YXdlc29tZSc7XG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICB9XG4gIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2FyZC5jZDQyYjE5Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2Nocm9ub3Bvc3QuMTNhYjAxZGYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uNzI2NjM0MzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9kZWxpdmVyeS10cnVjay41YzFhM2NhMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uYjY5OTYwNTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tYXN0ZXJjYXJkLjgwZTk1NWYxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbW9uZGlhbC1yZWxheS45NDcxYWNkZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3BheXBhbC4zZWMxNmIxNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JldHVybi1wb2xpY3kuYTRkNTEwOWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy92aXNhLjQ5YWRmNTRjLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=