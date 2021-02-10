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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2ZyZXNjby9qcy9mcmVzY28ubWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2FjY291bnQtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY2hyb25vcG9zdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvY29saXNzaW1vLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1lcy5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1mci5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvaWNvbi1pdC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbW9uZGlhbC1yZWxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvbmV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZWxvYWQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JldHVybi1wb2xpY3kucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS92aXNhLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhU3RhciIsImZhUXVlc3Rpb25DaXJjbGUiLCJmYVNob3BwaW5nQmFnIiwiZmFDaGVjayIsImZhRXhjbGFtYXRpb25DaXJjbGUiLCJmYUluZm9DaXJjbGUiLCJmYUNoZXZyb25VcCIsImZhTWFwTWFya2VyQWx0IiwiZmFTaHV0dGxlVmFuIiwiZmFDcmVkaXRDYXJkIiwiZmFGbGFnIiwiZmFDY01hc3RlcmNhcmQiLCJmYUNjVmlzYSIsImZhQ2NQYXlwYWwiLCJmYVRpbWVzIiwiZmFTZWFyY2giLCJmYVBsdXMiLCJmYVBlbmNpbEFsdCIsImZhU3luY0FsdCIsImRvbSIsIndhdGNoIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWwiLCJlbGVtZW50IiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicmVkaXJlY3RVcmwiLCJ2YWxpZGF0aW9uRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlcXVlc3QiLCJheGlvcyIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjbGFzc0xpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVycm9yIiwicmVtb3ZlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJkYXRhIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJwYXJzZUtleSIsImtleSIsInJlcGxhY2UiLCJ3b3JkcyIsInRvVXBwZXJDYXNlIiwiU3lsaXVzQWRkcmVzc0Jvb2siLCJzZWxlY3QiLCJmaW5kQnlOYW1lIiwibmFtZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJ2YWx1ZSIsInByb3ZpbmNlQ29kZSIsInByb3ZpbmNlTmFtZSIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsImlucHV0IiwicHJvcGVydHkiLCJmaWVsZCIsImluZGV4T2YiLCJkaXNwYXRjaEV2ZW50IiwiZXhpc3RzIiwic2V0SW50ZXJ2YWwiLCJwcm92aW5jZUNvZGVGaWVsZCIsInByb3ZpbmNlTmFtZUZpZWxkIiwiaGFzQXR0cmlidXRlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJyZWxvYWQiLCJTeWxpdXNBcGlUb2dnbGUiLCJ0b2dnbGVhYmxlRWxlbWVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwiZ2V0IiwiZW1haWwiLCJTeWxpdXNMb2FkYWJsZUZvcm1zIiwib3ZlcmxheSIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJTeWxpdXNSYXRpbmciLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsInNldHRpbmdzIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJvblJhdGUiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsImNzcmZUb2tlbiIsImRlbGV0ZSIsIl9jc3JmX3Rva2VuIiwiU3lsaXVzVG9nZ2xlIiwidHJpZ2dlciIsInRvZ2dsZSIsInRvZ2dsZUVsZW1lbnQiLCJqc1RvZ2dsZSIsImNoZWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwibWFpbkltYWdlTGluayIsIm1haW5JbWFnZSIsImRlZmF1bHRJbWFnZUxpbmsiLCJkZWZhdWx0SW1hZ2VTcmMiLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0Iiwib24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSIsImRldGFpbCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiRml0Iiwid2l0aGluIiwiYXJndW1lbnRzIiwicyIsIm4iLCJvIiwiYSIsImgiLCJyIiwiZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJlYXNpbmciLCJmcmVzY29FYXNlSW5DdWJpYyIsImZyZXNjb0Vhc2VJblNpbmUiLCJjb3MiLCJQSSIsImZyZXNjb0Vhc2VPdXRTaW5lIiwic2luIiwiU3VwcG9ydCIsIk8iLCJQIiwic3BsaXQiLCJjYW52YXMiLCJiYSIsImdldENvbnRleHQiLCJjc3MiLCJhbmltYXRpb24iLCJTIiwidHJhbnNmb3JtIiwicHJlZml4ZWQiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwic3Vic3RyIiwiZGV0ZWN0TW9iaWxlVG91Y2giLCJtb2JpbGVUb3VjaCIsInRlc3QiLCJwbGF0Zm9ybSIsIkltYWdlUmVhZHkiLCJpbml0aWFsaXplIiwiYXBwbHkiLCJjYWxsIiwiVGltZXJzIiwiZ2V0VVJJRGF0YSIsInR5cGUiLCJlYWNoIiwiVHlwZXMiLCJkZXRlY3RFeHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsInN1cHBvcnRzIiwibmF0dXJhbFdpZHRoIiwiSW1hZ2UiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaXNMb2FkZWQiLCJvcHRpb25zIiwibWV0aG9kIiwicG9sbEZhbGxiYWNrQWZ0ZXIiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJwcm94eSIsInN1Y2Nlc3MiLCJpbnRlcnZhbHMiLCJfaXBvcyIsIl90aW1lIiwiX2RlbGF5IiwicG9sbCIsImZhbGxiYWNrIiwiX3BvbGxpbmciLCJfdXNlZFBvbGxGYWxsYmFjayIsIl9mYWxsYmFja0ltZyIsIm5hdHVyYWxIZWlnaHQiLCJvbmVycm9yIiwic3JjIiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJfY2FsbGVkU3VjY2VzcyIsIl9jYWxsZWRFcnJvciIsIl90aW1lcnMiLCJzZXQiLCJjbGVhciIsImNsZWFyQWxsIiwiVHlwZSIsImlzVmlkZW8iLCJpbWFnZSIsImV4dGVuc2lvbnMiLCJkZXRlY3QiLCJpbkFycmF5IiwiZXh0ZW5zaW9uIiwidmltZW8iLCJpZCIsInlvdXR1YmUiLCJWaW1lb1RodW1ibmFpbCIsImxvYWQiLCJwcm90b2NvbCIsIl94aHIiLCJnZXRKU09OIiwidGh1bWJuYWlsX3VybCIsImNhY2hlIiwicHVzaCIsIlZpbWVvUmVhZHkiLCJjYWxsYmFjayIsImRpbWVuc2lvbnMiLCJPcHRpb25zIiwiZGVmYXVsdHMiLCJlZmZlY3RzIiwic2hvdyIsImhpZGUiLCJzcGlubmVyIiwidGh1bWJuYWlsIiwiZGVsYXkiLCJ0aHVtYm5haWxzIiwic2xpZGUiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsImVzYyIsImxvYWRlZE1ldGhvZCIsImxvb3AiLCJvbkNsaWNrIiwib3ZlcmZsb3ciLCJjbG9zZSIsInByZWxvYWQiLCJwb3NpdGlvbiIsInNraW4iLCJzcGlubmVyRGVsYXkiLCJzeW5jIiwidWkiLCJ1aURlbGF5IiwiYXV0b3BsYXkiLCJhcGkiLCJ0aXRsZSIsImJ5bGluZSIsInBvcnRyYWl0IiwiY29udHJvbHMiLCJlbmFibGVqc2FwaSIsImhkIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInZxIiwiaW5pdGlhbFR5cGVPcHRpb25zIiwiY3JlYXRlIiwieCIsInkiLCJvdmVybGFwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJPdmVybGF5IiwiYnVpbGQiLCJ2aXNpYmxlIiwiYWRkQ2xhc3MiLCJQYWdlcyIsInBhZ2UiLCJ2aWV3IiwiV2luZG93Iiwic2V0U2tpbiIsInJlbW92ZUNsYXNzIiwiYXR0YWNoIiwiYm9keSIsImRldGFjaCIsInN0b3AiLCJmYWRlVG8iLCJmYWRlT3V0IiwiZ2V0U2Nyb2xsRGltZW5zaW9ucyIsInF1ZXVlcyIsInBhZ2VzIiwiX3RyYWNraW5nIiwiX2ZpcnN0IiwidGltZXJzIiwiX2JveCIsIl9wYWdlcyIsIl90aHVtYm5haWxzIiwiVGh1bWJuYWlscyIsIlNwaW5uZXIiLCJVSSIsIl9hdHRhY2hlZCIsIl9za2luIiwic2V0U2hvd2luZ1R5cGUiLCJfc2hvd2luZ1R5cGUiLCJzdGFydE9ic2VydmluZ1Jlc2l6ZSIsIl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJfb25XaW5kb3dSZXNpemUiLCJzdG9wT2JzZXJ2aW5nUmVzaXplIiwib2ZmIiwiX29uU2Nyb2xsIiwiYWRqdXN0VG9TY3JvbGwiLCJmaXRUb1ZpZXdwb3J0IiwidXBkYXRlQm94RGltZW5zaW9ucyIsImZpdFRvQm94IiwidXBkYXRlIiwiYWRqdXN0UHJldk5leHQiLCJjZW50ZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJnZXRCb3hEaW1lbnNpb25zIiwiX2JveERpbWVuc2lvbnMiLCJnZXREaW1lbnNpb25zIiwiX29yaWVudGF0aW9uIiwiX2JveFBvc2l0aW9uIiwib3BlbmluZyIsIl9zaG93IiwicXVldWUiLCJkaXNhYmxlIiwiS2V5Ym9hcmQiLCJfaGlkZSIsIl9yZXNldCIsInJlbW92ZUFsbCIsIl9wb3NpdGlvbiIsImFmdGVySGlkZSIsImNsb3NpbmciLCJ2aWV3cyIsInNldFBvc2l0aW9uIiwic3RvcEhpZGVRdWV1ZSIsInJlc2V0IiwibWF5UHJldmlvdXMiLCJwcmV2aW91cyIsImdldFN1cnJvdW5kaW5nSW5kZXhlcyIsIm1heU5leHQiLCJuZXh0IiwiZW5hYmxlZCIsImtleUNvZGUiLCJlbmFibGUiLCJfb25LZXlEb3duSGFuZGxlciIsIm9uS2V5RG93biIsIl9vbktleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJnZXRLZXlCeUtleUNvZGUiLCJQYWdlIiwiTGMiLCJNYyIsIk5jIiwiT2MiLCJ1aWQiLCJfdG90YWwiLCJfZnVsbENsaWNrIiwiX3Zpc2libGUiLCJzaG93aGlkZSIsIl9jcmVhdGVkIiwib3BhY2l0eSIsImNhcHRpb24iLCJpbmZvIiwiY2xvbmUiLCJpbmZvUGFkZGVyIiwicG9zIiwiaHRtbCIsImJhY2tncm91bmQiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsImNyZWF0ZUNhcm91c2VsIiwialF1ZXJ5Iiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicHJvZHVjdEZ1bmN0aW9ucyIsImJ1bmRsZUl0ZW0iLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsImZpbHRlclByb2R1Y3RGdW5jdGlvbnMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImNyaXRlcmlhIiwicHJpY2VJbnB1dCIsInByaWNlU2xpZGVyIiwicHJpY2VTbGlkZXJNb2JpbGUiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VNaW5Nb2JpbGUiLCJwcmljZU1heE1vYmlsZSIsInRheG9uTWluUHJpY2UiLCJmaXJzdCIsInRheG9uTWF4UHJpY2UiLCJyYW5nZVNsaWRlck9wdGlvbnMiLCJzdGFydCIsInJhbmdlIiwic3RlcCIsImNvbm5lY3QiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJiZWhhdmlvdXIiLCJ0b29sdGlwcyIsInByaWNlUmFuZ2UiLCJub1VpU2xpZGVyIiwibmV3VmFsdWUiLCJwcmljZVJhbmdlTW9iaWxlIiwiaXNOYU4iLCJmcm9tQ2hhckNvZGUiLCJuZXdWYWx1ZU1vYmlsZSIsInNpemVGaWx0ZXJJbnB1dCIsImlucHV0VG9DaGVjayIsImNoZWNrUHJpY2VWYWx1ZSIsInN1Ym1pdCIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJPdXRlckhlaWdodCIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsImZpbHRlckxpc3RDb250YWluZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJsb2dpbkZ1bmN0aW9ucyIsImZvcm1FbGVtZW50IiwiYWpheCIsInNlcmlhbGl6ZSIsInRleHQiLCJwYXJzZUhUTUwiLCJyZXNwb25zZVRleHQiLCJyZWdleCIsInJlZ2lzdGVyRm9ybSIsImludmFsaWRTcGFuIiwicHJldiIsImNvbnRhY3RQYWdlRnVuY3Rpb24iLCJzaGFyZUZ1bmN0aW9ucyIsInRvb2x0aXAiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIiwiY2FydEZ1bmN0aW9ucyIsImNvdXBvbiIsIm5ld1F0eSIsImlucHV0UXR5TmFtZSIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJsb2dpblBhZ2VGdW5jdGlvbnMiLCJtb2RhbElkIiwibW9kYWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94Iiwic3lsaXVzU2hpcHBpbmdBZGRyZXNzIiwic3lsaXVzQmlsbGluZ0FkZHJlc3MiLCJlbGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxLQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7O0FBQ0E7Ozs7OztBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQSxNQUFNQyxlQUFlLEdBQUlDLEVBQUQsSUFBUTtBQUM5QixRQUFNQyxPQUFPLEdBQUdELEVBQWhCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHRCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsUUFBckIsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDRSxZQUFSLENBQXFCLGVBQXJCLENBQXBCO0FBQ0EsUUFBTUUsaUJBQWlCLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixDQUFzQiwrQkFBdEIsQ0FBMUI7QUFFQUwsU0FBTyxD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Ozs7O0FDQXhELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcGFyc2VLZXkgPSBmdW5jdGlvbiBwYXJzZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG5jb25zdCBTeWxpdXNBZGRyZXNzQm9vayA9IGZ1bmN0aW9uIFN5bGl1c0FkZHJlc3NCb29rKGVsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgY29uc3QgZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lKj0ke3BhcnNlS2V5KG5hbWUpfV1gKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNob2ljZURhdGEgPSB7fTtcblxuICAgICAgWy4uLmNob2ljZS5hdHRyaWJ1dGVzXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZWQgPSBhdHRyLm5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJykucmVwbGFjZSgvLShbYS16XSkvZywgZyA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNob2ljZURhdGFbY2FtZWxDYXNlZF0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlRGF0YTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLWpzLWFkZHJlc3MtYm9va10nKS5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UtY29udGFpbmVyJyk7XG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlRGF0YSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaW5kQnlOYW1lKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlTmFtZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvdmluY2VDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQgJiYgcHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsdWUgPSBwcm92aW5jZUNvZGU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQgJiYgcHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VOYW1lRmllbGQudmFsdWUgPSBwcm92aW5jZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkcmVzc0Jvb2s7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSAuY2FyZC1pbWctdG9wJywgY2Fyb3VzZWxFbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJChjYXJvdXNlbEVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbiAgfSBlbHNlIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnKS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGFycm93VG9wVmFsdWUgPSBNYXRoLnJvdW5kKGltZ1NsaWRlckhlaWdodCAvIDIgLSAxNyk7XG4gICAgJCgnLnNsaWRlci1jb250cm9scycpLm5vdCgnLnByb2R1Y3QtZ2FsbGVyeScpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuXG4gIH1cbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgaWYgKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpICYmICFqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKS5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcbiAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93KGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpICYmICFqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIHNsaWRlciA9ICQoJyNwcm9kdWN0R2FsbGVyeScpO1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgc2xpZGVyWzBdLnNsaWNrICYmIHNsaWRlclswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIHNsaWRlci5zbGljayhvcHRzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpICYmICFqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJvZHVjdCBnYWxsZXJ5IGZvciBkZXNrdG9wIHdoZW4gcmVzaXplXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCkge1xuICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgJCgnLmZyZXNjby1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHVybCA6ICQodGhpcykuZGF0YSgnaW1hZ2UnKSxcbiAgICAgIHRodW1ibmFpbCA6ICQodGhpcykuZGF0YSgndGh1bWJuYWlsJyksXG4gICAgfTtcbiAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBoZWlnaHRDb250ZW50ID0gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVzY28tc2xpZGUnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIEZyZXNjby5zaG93KFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICB0aHVtYm5haWxzOiAndmVydGljYWwnLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIE51bWJlcihpbmRleCArIDEpXG4gICAgICApO1xuXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxuICogRml4IHByb2R1Y3QgZGVzY3JpcHRpb24gZGl2IG9uIHRvcCAocmlnaHQgY29sdW1uKSB3aGVuIHNjcm9sbGluZ1xuICovXG4vKmZ1bmN0aW9uIGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdigpIHtcbiAgaWYgKCQoJyNpbWFnZXMtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcjcHJvZHVjdC1zdGlja3knKS5oZWlnaHQoKSAtICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtIDI0ID49IC0oJCgnI2ltYWdlcy1jb250YWluZXInKS5vZmZzZXQoKS50b3ApKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWJvdHRvbScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXN0aWNreScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS10b3AtY3VzdG9tJyk7XG4gIH1cbn0qL1xuXG5mdW5jdGlvbiBwcm9kdWN0RnVuY3Rpb25zKCkge1xuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnVuZGxlSXRlbSA9ICQodGhpcykuZGF0YSgnYnVuZGxlLWl0ZW0nKTtcbiAgICBpZihidW5kbGVJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICQoJy52YXJpYW50LW5hbWVbZGF0YS1idW5kbGUtaXRlbT1cIicgKyBidW5kbGVJdGVtICsgJ1wiXScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZScpLnJlbW92ZUNsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgJCgnLmNhcmQtY2Fyb3VzZWwgLmNhcmQtaW1nLXRvcCAudmFyaWFudHMtY29udGFpbmVyJykuaGlkZSgpO1xuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wJylcbiAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuc2hvdygpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAkKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gJCgnaW5wdXRbbmFtZV49XCInICsgJChhZGRUb0NhcnRGb3JtKS5kYXRhKCduYW1lVG9DaGVjaycpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoO1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW1zQ291bnQgPSAkKCdkaXYuYnVuZGxlLWl0ZW0nKS5sZW5ndGg7XG4gICAgaWYoc2VsZWN0ZWRTaXplID4gMCAmJiBzZWxlY3RlZFNpemUgPCBidW5kbGVJdGVtc0NvdW50ICkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdDpub3QoLmlucHV0LWNoZWNrZWQpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPT09IDApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pXG5cbiAgJCgnaW5wdXRbaWRePVwiYml0YmFnX3N5bGl1c19wcm9kdWN0X2J1bmRsZV9wbHVnaW5fYWRkX3Byb2R1Y3RfYnVuZGxlX3RvX2NhcnRfXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLmZpbmQoJ3NwYW4uaW52YWxpZC1mZWVkYmFjaycpLmFkZENsYXNzKCdpbnB1dC1jaGVja2VkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZpbHRlclByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgY3JpdGVyaWEgPSBxdWVyeVN0cmluZy5pbmRleE9mKCdjcml0ZXJpYScpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKTtcbiAgbGV0IHByaWNlU2xpZGVyO1xuICBsZXQgcHJpY2VTbGlkZXJNb2JpbGU7XG4gIGNvbnN0IHByaWNlTWluID0gJCgnI3Byb2R1Y3RzRmlsdGVycyBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzFdXCJdJyk7XG4gIGNvbnN0IHByaWNlTWF4ID0gJCgnI3Byb2R1Y3RzRmlsdGVycyBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJyk7XG4gIGNvbnN0IHByaWNlTWluTW9iaWxlID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzFdXCJdJyk7XG4gIGNvbnN0IHByaWNlTWF4TW9iaWxlID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSBpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJyk7XG4gIGlmIChwcmljZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBQcmVwYXJlIHNsaWRlciBvcHRpb25zXG4gICAgY29uc3QgdGF4b25NaW5QcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21pbicpKTtcbiAgICBjb25zdCB0YXhvbk1heFByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWF4JykpO1xuICAgIGNvbnN0IHJhbmdlU2xpZGVyT3B0aW9ucyA9IHtcbiAgICAgIHN0YXJ0OiBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXSxcblxuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgJ21pbic6IFt0YXhvbk1pblByaWNlXSxcbiAgICAgICAgJ21heCc6IFt0YXhvbk1heFByaWNlXVxuICAgICAgfSxcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJlaGF2aW91cjogJ3RhcCcsXG4gICAgICB0b29sdGlwczogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gRGVza3RvcCBTbGlkZXJcbiAgICBjb25zdCBwcmljZVJhbmdlID0gJCgnI3Byb2R1Y3RzRmlsdGVycyAjcHJpY2VSYW5nZScpO1xuICAgIHByaWNlU2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZVswXSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgICBwcmljZVNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgcHJpY2VNaW4udmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgICBwcmljZU1heC52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgICB9KTtcblxuICAgIC8vIE1vYmlsZSBTbGlkZXJcbiAgICBjb25zdCBwcmljZVJhbmdlTW9iaWxlID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAjcHJpY2VSYW5nZScpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZU1vYmlsZVswXSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgICBwcmljZVNsaWRlck1vYmlsZS5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgcHJpY2VNaW5Nb2JpbGUudmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgICBwcmljZU1heE1vYmlsZS52YWwocGFyc2VJbnQobmV3VmFsdWVbMV0pKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdXNlciBjaGFuZ2VzIHByaWNlIGlucHV0IHZhbHVlXG4gICAgcHJpY2VJbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZihlLndoaWNoICE9PSA4ICYmICFpc05hTihTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSl7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV07XG4gICAgICAgIHByaWNlU2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlTW9iaWxlID0gW3ByaWNlTWluTW9iaWxlLnZhbCgpLCBwcmljZU1heE1vYmlsZS52YWwoKV07XG4gICAgICAgIHByaWNlU2xpZGVyTW9iaWxlLnNldChuZXdWYWx1ZU1vYmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzaXplRmlsdGVySW5wdXQgPSAkKCcjc2l6ZUZpbHRlciBpbnB1dCcpO1xuICBzaXplRmlsdGVySW5wdXQuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgaWYodGhpcy5jaGVja2VkKSB7XG4gICAgICAkKHRoaXMpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCdpbnB1dFtkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIHNpemVGaWx0ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcjY3JpdGVyaWFTaXplTW9iaWxlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSAkKGUudGFyZ2V0KS5kYXRhKCdpZCcpO1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5yZW1vdmVBdHRyKCdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQuaW5wdXQtc29ydGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyayAuY2hlY2tlZCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJChlLnRhcmdldCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgJChlLnRhcmdldCkubmV4dCgnLmNoZWNrbWFyaycpLmZpbmQoJy5jaGVja2VkJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSk7XG5cbiAgLy8gVmFsaWRhdGUgZmlsdGVyc1xuICAkKCdhLnZhbGlkYXRlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCBwcmljZU1pbiwgcHJpY2VNYXgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgcHJpY2VNaW5Nb2JpbGUsIHByaWNlTWF4TW9iaWxlKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlckZvcm0nKS5zdWJtaXQoKTtcbiAgfSk7XG5cbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnZhbCgpID09PSAnY3JlYXRlZEF0Jykge1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmc6Y2hlY2tlZCcpLnJlbW92ZSgpO1xuICAgICAgJCgnLmlucHV0LXNvcnRpbmctY3JlYXRlZEF0JykuYXR0cignY2hlY2tlZCcsIHRydWUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1pbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCBwcmljZU1pbiwgcHJpY2VNYXgpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgcHJpY2VNaW5Nb2JpbGUsIHByaWNlTWF4TW9iaWxlKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgfSlcblxuICBpZiAoY3JpdGVyaWEgIT09IC0xKSB7XG4gICAgJCgnLnJlaW5pdC1maWx0ZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgfVxuXG4gIC8vIE1vYmlsZSBmaWx0ZXJzXG4gICQoJy5wcm9kdWN0LWZpbHRlcnMuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCk7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmNsb3NlJykucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuY2xvc2UnKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJPYmplY3QsIHByaWNlTWluLCBwcmljZU1heCkge1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKS5maXJzdCgpO1xuICBsZXQgcHJpY2VNaW5WYWx1ZSA9IHByaWNlTWluLnZhbCgpO1xuICBsZXQgcHJpY2VNYXhWYWx1ZSA9IHByaWNlTWF4LnZhbCgpO1xuICBpZiAocHJpY2VNaW4udmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgaWYgKHByaWNlTWluLnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIHByaWNlTWluLnZhbChwcmljZU1pblZhbHVlKTtcbiAgaWYgKHByaWNlTWF4LnZhbCgpID4gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21heCcpO1xuICB9XG4gIGlmIChwcmljZU1heC52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBwcmljZU1heC52YWwocHJpY2VNYXhWYWx1ZSk7XG4gIHByaWNlU2xpZGVyT2JqZWN0LnNldChbcHJpY2VNaW5WYWx1ZSwgcHJpY2VNYXhWYWx1ZV0pO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWVnYW1lbnUgZnVuY3Rpb25zXG4gKiAuaGFzLW1lZ2FtZW51IHRvIHVzZSBkcm9wZG93biBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gbWVnYW1lbnVGdW5jdGlvbnMoKSB7XG4gIC8vIEJ1dHRvbiBob3ZlciBzaW11bGF0ZXMgY2xpY2sgb24gaXRcbiAgJCgnI21lbnVCdXR0b25NYWluLCAjbWVnYW1lbnVEcm9wZG93bicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyokKCcjbWFpbkNvbnRlbnRDb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMDMzKSB7XG4gICAgICAgICQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyovXG5cbiAgJCgnI21lbnVCdXR0b25NYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICBpZiAoJCgnI25hdmJhck1haW5Nb2JpbGUnKS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lZ2FtZW51IGZ1bmN0aW9ucyA6IG1hbmFnZSBtb2JpbGUgbWVudVxuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcblxuICAkKCdhLm5hdi10YXhvbicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykrJyBpbWcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZycpLmhpZGUoKTtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiI25hdmJhck1haW5Nb2JpbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJCgnLmFjdGl2ZS5sb2NhbGUtbGluaywgLm5hdmJhclRheG9uc0xpbmssIC5sb2ctbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKHRoaXMpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI29wZW5BY2NvdW50TWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQoJy5sb2ctbGluaycpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgfSk7XG5cbiAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJY29uZXNGdW5jdGlvbnMoKSB7XG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWNhcnQnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4JylcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5oZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykub3V0ZXJIZWlnaHQoKSAtICQoJy5oZWFkZXItYmFubmVyJykuaGVpZ2h0KCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCA9ICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2ZpbHRlclN1Ym1pdCcpLm91dGVySGVpZ2h0KCkgLSAxMDtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJykuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjZmlsdGVyTGlzdCcpLmNzcygnaGVpZ2h0JywgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ2luRnVuY3Rpb25zKCkge1xuICBpZigkKCcubG9naW4tZm9ybScpKSB7XG4gICAgJCgnLnN1Ym1pdC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50KS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCQoJy52ZXJpZnktYWNjb3VudCcpKSB7XG4gICAgJCgnLnZlcmlmeS1hY2NvdW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKSkge1xuICAgICQoJyNyZXNldFBhc3N3b3JkU3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgJCgnYnV0dG9uLnN1Ym1pdC1yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgbGV0IGVtYWlsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgbGV0IHJlZ2lzdGVyRm9ybSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBsZXQgaW52YWxpZFNwYW4gPSAkKGUudGFyZ2V0KS5wcmV2KCdzcGFuJyk7XG4gICAgaWYoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyRm9ybSA9ICQoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpKTtcbiAgICAgIGVtYWlsID0gJChyZWdpc3RlckZvcm0pLmZpbmQoJ2lucHV0JykudmFsKClcbiAgICAgIGludmFsaWRTcGFuID0gJCgkKHJlZ2lzdGVyRm9ybSkuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKSk7XG4gICAgfVxuICAgIGlmIChyZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgaW52YWxpZFNwYW4ucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICByZWdpc3RlckZvcm0uc3VibWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludmFsaWRTcGFuLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgICByZWdpc3RlckZvcm0uZmluZCgnaW5wdXQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbiQoJy5yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgY29uc3QgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICB9XG59KTtcblxuLyoqXG4gKiBDb250YWN0IFBhZ2UgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gY29udGFjdFBhZ2VGdW5jdGlvbigpIHtcbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzaGFyZUZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FydEZ1bmN0aW9ucygpIHtcbiAgLy8gUmVsb2FkIFF0eVxuICAkKCcucmVsb2FkLXF0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGNvdXBvbiBjb2RlXG4gICQoJy5jb3Vwb24tY29kZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb3Vwb24gPSAkKCcuY291cG9uLWNvZGUnKS52YWwoKTtcbiAgICBpZiAoY291cG9uID09PSAnJykge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgnJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbChjb3Vwb24pO1xuICAgIH1cblxuICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgfSk7XG5cbiAgJChcImJvZHlcIikub24oXCJrZXlkb3duXCIsIFwiLmNvdXBvbi1jb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIC8vIENoYW5nZSBxdWFudGl0eSBvbiBtb2JpbGVcbiAgJCgnLm1vYmlsZS1xdHknKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmV3UXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICBjb25zdCBpbnB1dFF0eU5hbWUgPSAkKHRoaXMpLmRhdGEoJ2lucHV0LXF0eScpO1xuICAgICQoJ2lucHV0W25hbWU9XCInICsgaW5wdXRRdHlOYW1lICsgJ1wiXScpLnZhbChuZXdRdHkpO1xuICB9KTtcblxuICBpZigkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSAhPSB1bmRlZmluZWQpIHtcbiAgICAkKCcuY291cG9uLWlucHV0JykuYWRkQ2xhc3MoJ2ludmFsaWQtY29kZScpO1xuICAgICQoJy5jb3Vwb24tZXJyb3InKS5odG1sKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpKTtcbiAgICAkKCcuY291cG9uLWNvZGUnKS52YWwoJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcmRlcnNHcmlkRnVuY3Rpb25zKCkge1xuICAvLyBEZXNrdG9wIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0cicsIHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAvLyBNb2JpbGUgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5yZW1vdmVDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5hZGRDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcuYXJyb3ctY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi5vcmRlci1kZXRhaWxzJykucHJldignZGl2JykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZ2luUGFnZUZ1bmN0aW9ucygpIHtcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHJlc2l6ZU1lbnUoJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKSk7XG4gIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTlxuICAkKCcuZHJvcGRvd24tbWVudScpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgc2hhcmVGdW5jdGlvbnMoKTtcbiAgcHJvZHVjdEZ1bmN0aW9ucygpO1xuICBmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICBsb2dpbkZ1bmN0aW9ucygpO1xuICBvcmRlcnNHcmlkRnVuY3Rpb25zKCk7XG4gIGxvZ2luUGFnZUZ1bmN0aW9ucygpO1xuICBjYXJ0RnVuY3Rpb25zKCk7XG5cbiAgY29udGFjdFBhZ2VGdW5jdGlvbigpO1xuXG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHJlcGxhY2VDYXJvdXNlbEFycm93KCk7XG4gIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgfSovXG4gIC8vIFNob3cgbW9iaWxlIG1lbnUgYWZ0ZXIgcGFnZSBpcyBsb2FkZWRcbiAgJCgnLm1vYmlsZS1vZmZjYW52YXMnKS5zaG93KCk7XG59XG5cbmV4cG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9mb250YXdlc29tZSc7XG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICB9XG4gIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==