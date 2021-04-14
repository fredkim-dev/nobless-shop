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
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeContent = exports.init = undefined;

__webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");

var _fresco = __webpack_require__(/*! ./fresco/js/fresco.min */ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js");

var _fresco2 = _interopRequireDefault(_fresco);

var _carousel = __webpack_require__(/*! ./js/carousel.js */ "./themes/NoblessTheme/assets/js/carousel.js");

var _checkoutNobless = __webpack_require__(/*! ./js/checkout-nobless.js */ "./themes/NoblessTheme/assets/js/checkout-nobless.js");

var _checkoutNobless2 = _interopRequireDefault(_checkoutNobless);

var _productNobless = __webpack_require__(/*! ./js/product-nobless */ "./themes/NoblessTheme/assets/js/product-nobless.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// GENERAL FUNCTIONS
// MENU FUNCTIONS
// LOGIN FUNCTIONS
// CONTACT FUNCTIONS
// SHARE FUNCTIONS
// CART FUNCTIONS
// ORDERS GRID FUNCTIONS

/**
 * Resize function to keep all the main-content visible
 */
function resizeMainContainer() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
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
  $('#navbarTaxons').hide();
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
  $('#navbarTaxons').hide();
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
    const registerForm = $($(e.target).data('form'));
    const inputRegisterForm = registerForm.find('input');
    const email = inputRegisterForm.val();
    const invalidSpan = inputRegisterForm.closest('div').next('span');

    if (regex.test(email)) {
      invalidSpan.removeClass('d-block');
      inputRegisterForm.removeClass('is-invalid');
      registerForm.submit();
    } else {
      invalidSpan.addClass('d-block');
      inputRegisterForm.addClass('is-invalid');
    }
  });
}

$('.register-form input, .header-register-form input').on('keyup', function (e) {
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
  }); // Apply bonus points

  $('.bonus-points-btn').on('click', function () {
    const bonusPoints = $('.bonus-points').val();

    if (bonusPoints === '') {
      $('#sylius_cart_bonusPoints').val('');
    } else {
      $('#sylius_cart_bonusPoints').val(bonusPoints);
    }

    $('form.form-to-submit').trigger('submit');
  });
  $("body").on("keydown", ".bonus-points", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.bonus-points-error').html('');
  });

  if ($('#bitbag-bonus-points .form-error-message').html() != undefined) {
    $('.bonus-points-input').addClass('invalid-code');
    $('.bonus-points-error').html($('#bitbag-bonus-points .form-error-message').html());
    $('.bonus-points').val($('#sylius_cart_bonusPoints').val());
  } // Apply coupon code


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

  $('a.btn-to-checkout').on('click', function (e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
    }
  });
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
  (0, _carousel.carousel)();

  if ($(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  shareFunctions();
  resizeMenu($('#menuButton').attr('data-trigger'));
  (0, _productNobless.resizeFilterMenu)();
  $('.header-dropdown').show();

  _fresco2.default.hide();
}

function init() {
  (0, _carousel.carousel)();
  navbarCollapseInit();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // PREVENT INSIDE CLICK DROPDOWN

  $('.dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopImmediatePropagation();
  });
  shareFunctions();
  (0, _productNobless.product)();
  (0, _productNobless.filterProducts)(); // Menu Functions

  megamenuFunctions();
  menuIconesFunctions();
  loginFunctions();
  ordersGridFunctions();
  loginPageFunctions();
  cartFunctions();
  (0, _checkoutNobless2.default)();
  contactPageFunction();
  resizeMainContainer();

  if ($(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _carousel.replaceCarouselArrow)();
  (0, _carousel.replaceCarouselArrowCart)();
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
// import SyliusAddressBook from './js/sylius-address-book';
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
  // const syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');
  // if (syliusShippingAddress && syliusShippingAddress.querySelector('.choose-address')) {
  //   SyliusAddressBook(syliusShippingAddress);
  // }
  // const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');
  // if (syliusBillingAddress && syliusBillingAddress.querySelector('.choose-address')) {
  //   SyliusAddressBook(syliusBillingAddress);
  // }
  // Variant prices

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

/***/ "./themes/NoblessTheme/assets/js/carousel.js":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/carousel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGalleryDesktop = exports.createAddressCarousel = exports.replaceCarouselArrowCart = exports.replaceCarouselArrow = exports.carousel = undefined;

var _fresco = __webpack_require__(/*! ../fresco/js/fresco.min */ "./themes/NoblessTheme/assets/fresco/js/fresco.min.js");

var _fresco2 = _interopRequireDefault(_fresco);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***********************/

/* CAROUSEL MANAGEMENT */

/***********************/
const carousel = function mainFunctions() {
  createCarousel($('#carouselLatestProducts'));
  createCarousel($('#carouselLatestBundles'));
  createCarousel($('#carouselCompleteYourStyle'));
  createProductCarousel($('#productGallery'));
  createProductCarousel($('#carouselSummaryItemsMobile'));
};
/**
 * Create main carousels
 */


function createCarousel(carouselElement) {
  const options = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Next</button></div>',
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
  };

  if (carouselElement && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(options);
    carouselElement.on('setPosition', function (event, slick, currentSlide, nextSlide) {
      replaceCarouselArrow(carouselElement);
    });
  }
}
/**
 * Create product carousels
 */


function createProductCarousel(carouselElement) {
  let isCartItemsCarousel = carouselElement === $('#carouselSummaryItemsMobile');
  const options = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
    nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Next</button></div>',
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

  if (carouselElement && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(options);

    if (isCartItemsCarousel) {
      replaceCarouselArrowCart();
    }
  } else {
    if ($(document).width() < 768 && carouselElement[0].slick && carouselElement[0].slick.unslicked) {
      carouselElement.slick(options);
    }

    if (isCartItemsCarousel) {
      carouselElement.on('setPosition', function (slick) {
        replaceCarouselArrowCart();
      });
    }
  }
}
/**
 * Create carousel when user have more than 4 addresses in Checkout
 */


function createAddressCarousel(carouselElement) {
  const opts = {
    infinite: true,
    speed: 700,
    rows: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    adaptiveHeight: true,
    appendArrows: carouselElement.next('.slider-controls'),
    prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Next</button></div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        rows: 3,
        slidesPerRow: 1
      }
    }]
  };
  const visibleSliderDiv = !carouselElement.hasClass('d-none');

  if (visibleSliderDiv && !carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick(opts);
  } else if (carouselElement.hasClass('slick-initialized')) {
    carouselElement.slick('unslick');
    carouselElement.slick(opts);
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
 * Replace carousel arrows vertically
 */


function replaceCarouselArrow(carouselElement) {
  const imgSelector = '.slick-active .card-img-top';
  let imgSliderHeight;
  let arrowTopValue;

  if (carouselElement !== undefined) {
    imgSliderHeight = $(imgSelector, carouselElement).outerHeight();
    arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $(carouselElement).next('.slider-controls').css('top', arrowTopValue + 'px');
  } else {
    imgSliderHeight = $(imgSelector).outerHeight();
    arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $('.slider-controls').not('.product-gallery').css('top', arrowTopValue + 'px');
  }
}
/**
 * Replace carousel arrows only on cart items carousel
 * @param element
 */


function replaceCarouselArrowCart(element) {
  const imgSliderHeight = $('.slick-active img', element).outerHeight();
  const arrowTopValue = Math.round(imgSliderHeight);
  $(element).next('.slider-controls').css('top', arrowTopValue + 'px');
}

exports.carousel = carousel;
exports.replaceCarouselArrow = replaceCarouselArrow;
exports.replaceCarouselArrowCart = replaceCarouselArrowCart;
exports.createAddressCarousel = createAddressCarousel;
exports.createGalleryDesktop = createGalleryDesktop;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/checkout-nobless.js":
/*!***********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/checkout-nobless.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _carousel = __webpack_require__(/*! ./carousel */ "./themes/NoblessTheme/assets/js/carousel.js");

// Main function used in init
const saveButton = $('#checkoutPage .save-in-account');
const cancelBtn = $('#checkoutPage .cancel-change-address');

const checkout = function mainFunctions() {
  const container = $('#checkoutPage'); // When the user wants to change his address

  $('.chosen-address .change-address', container).on('click', function (e) {
    e.preventDefault();
    const addressType = getClassList(this)[1];

    if (!$(this).hasClass('clicked') && !$('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');
      cancelBtn.show();
      cancelBtn.prev().hide();
      $('.checkout-address-form', container).show();
      $('.checkout-address-form .new-address-title', container).hide();
      manageAddressType(addressType, 'change', container);
      (0, _carousel.createAddressCarousel)($('#carouselAddressList')); // Create event on address item after carousel is open

      $('.choose-address .choose-address-item address', container).on('click', function (e) {
        chooseAddress($(this), addressType, container);
      });
    } else if ($('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');
      manageAddressType(addressType, 'add', container);
    }
  }); // When user wants to add a new address to his account

  $('a.checkout-add-address', container).on('click', function (e) {
    e.preventDefault();
    const addressType = getClassList($('.chosen-address .change-address.clicked', container)[0])[1];
    showAddForm(addressType, container);
    manageAddressType(addressType, 'add', container);
  }); // When user save a new address

  saveButton.on('click', function (e) {
    e.preventDefault();
    let addressType = 'shipping';

    if (!$(this).hasClass('no-addresses')) {
      addressType = getClassList(this)[3];
      $('#checkoutPage .data-' + addressType).each(function () {
        const field = getClassList(this)[1];
        const fieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + field + ']';
        const toSave = '#checkoutPage .main-address-form ' + fieldName;
        const toReplace = '.change-' + addressType + '-address ' + fieldName;
        $(toReplace).val($(toSave).val());
      });
    }

    checkoutSaveAddress(this, addressType, container);
  }); // When user clicks on address page next button

  $('.main-address-form button.btn-primary', container).on('click', function (e) {
    e.preventDefault();
    $('.checkout-address-form', container).hide();
    fillAllAddresses(container);
    $(this).closest('form').addClass('loading').submit();
  }); // When user cancels the address changes

  $('a.cancel-change-address', container).on('click', function (e) {
    e.preventDefault();
    hideChangeAddress(container);
    hideSaveAddressForm(container);
    cancelChangeAddress(container);
  }); // When user cancels the address add

  $('a.cancel-add-checkout-address', container).on('click', function (e) {
    $('.checkout-address-form', container).show();
    $('.save-checkout-address-navigation', container).show();
    $('.save-address-form', container).removeClass('d-block');
    $('.save-address-form [class^="add-"]', container).hide();
    hideSaveAddressForm(container);
  });
}; // When user chose an address is the addresses list


function chooseAddress(element, addressType, container) {
  $('.data-address', element).each(function () {
    const fieldName = getClassList(this)[1];
    const fieldSelector = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
    const formField = '#checkoutPage .main-address-form ' + fieldSelector;
    const chosenAddressText = '.data-' + addressType + '.' + fieldName;
    let chosenValue = $(this).text();
    $(chosenAddressText).text(chosenValue);

    if (fieldName === 'countryCode') {
      chosenValue = $(this).text().substring(0, 2);
    }

    $(formField).val(chosenValue);

    if (fieldName === 'street2') {
      if ($(this).text().trim() !== '') {
        $('.street2-container-' + addressType).removeClass('d-none');
      } else {
        $('.street2-container-' + addressType).addClass('d-none');
      }
    }

    $(chosenAddressText).closest('address').attr('data-' + getDataFieldName(fieldName), chosenValue);
  });
  $('#sylius_checkout_address_differentBillingAddress', container).prop('checked', true);
  hideChangeAddress(container);
}
/* Save address in user account : Returns errors in form if not valid */


function checkoutSaveAddress(element, addressType, container) {
  const form = $(element).closest('form');
  $('input[name="address_type"]', form).val(addressType);
  fillOtherAddress(addressType, container);
  $('.save-address-form form', container).addClass('loading');
  $.ajax({
    type: "POST",
    url: form.attr('action'),
    data: form.serialize(),
    success: function success(response) {
      const dataSuccessDiv = $(response);
      const noAddress = saveButton.hasClass('no-addresses');

      if (dataSuccessDiv.hasClass('save-address-success')) {
        $('.chosen-address .data-' + addressType, container).each(function () {
          const fieldName = getClassList(this)[1];
          fillDataAfterSave(this, addressType, fieldName, dataSuccessDiv); // If User doesn't have addresses

          if (noAddress) {
            const element = $('.chosen-address .data-' + getOtherAddressType(addressType) + '.' + fieldName, container);
            fillDataAfterSave(element, getOtherAddressType(addressType), fieldName, dataSuccessDiv);
          }

          $('.address-book', container).html($('.address-book', dataSuccessDiv).html());
        });

        if (noAddress) {
          $('.chosen-address address.cancel-info').removeClass('d-none');
          showMainForm(container);
        }

        hideChangeAddress(container);
        hideSaveAddressForm(container);
      }
    },
    error: function error(_error) {
      hideSaveAddressForm(container);
      $($.parseHTML(_error.responseText)[1]).find('.form-error-message').each(function () {
        const fieldName = $(this).closest('label').attr('for');
        const fieldError = $(this).text();
        $('.save-address-form [id="' + fieldName + '"]', container).addClass('is-invalid').after('<span class="invalid-feedback d-block"><span class="form-error-message d-block">' + fieldError + '</span></span>');
      });
    }
  });
}
/* Fill address form fields to avoid errors */


function fillAddress(fieldId, addressType, form, container) {
  const keepCamelField = ['firstName', 'lastName', 'countryCode'];
  const dataToFill = $('.chosen-address address.cancel-info.' + addressType, container).data();
  $(form + ' [id^="' + fieldId + '"]', container).each(function () {
    const regex = /\[(\w+)\]$/gm;
    let fieldName = regex.exec($(this).attr('name'))[1];

    if (!keepCamelField.includes(fieldName)) {
      fieldName = fieldName.toLowerCase();
    }

    $(this).val(dataToFill[fieldName]);
  });
  $('#inAccount_save_differentBillingAddress', container).prop('checked', true);
}
/* Fill addresses when user clicks on next button */


function fillAllAddresses(container) {
  ['shipping', 'billing'].forEach(addressType => {
    const fieldId = 'sylius_checkout_address_' + addressType + 'Address';
    fillAddress(fieldId, addressType, '.main-address-form', container);
  });
}
/* Fill other address type form when saving new address */


function fillOtherAddress(addressType, container) {
  const otherAddressType = getOtherAddressType(addressType);
  let fieldId = 'inAccount_save_' + otherAddressType;

  if (saveButton.hasClass('no-addresses')) {
    fillOtherForm(addressType, otherAddressType, '.save-address-form', container);
  } else {
    fillAddress(fieldId, otherAddressType, '.save-address-form', container);
  }
} // Fill other new address form ONLY IF user don't have addresses yet


function fillOtherForm(addressType, otherAddressType, form, container) {
  const fieldId = 'inAccount_save_' + addressType;
  const otherFieldId = 'inAccount_save_' + otherAddressType;
  $(form + ' [id^="' + fieldId + '"]', container).each(function () {
    const regex = /\[(\w+)\]$/gm;
    let fieldName = regex.exec($(this).attr('name'))[1];

    if (fieldName !== 'countryCode') {
      fieldName = fieldName.toLowerCase();
    }

    const idToFill = '#' + otherFieldId + '_' + fieldName;
    $(idToFill).val($(this).val());
  });
} // Fill form and div data when save new address


function fillDataAfterSave(element, addressType, fieldName, container) {
  // Get value from ajax return
  const newValue = $('.data-' + addressType + '-success.' + fieldName, container).html(); // Create main form field selector

  const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
  const fieldToReplace = '#checkoutPage .main-address-form ' + formFieldName; // Replace field with value from ajax return

  $(fieldToReplace).val(newValue); // Replace text with value from ajax return

  $(element).text(newValue);

  if (fieldName === 'countryCode') {
    $(element).text($('.data-' + addressType + '-success.countryName', container).html());
  } // Show or hide street2 container according to value


  if (fieldName === 'street2') {
    if ($('.data-' + addressType + '-success.' + fieldName, container).html().trim() !== '') {
      $('.street2-container-' + addressType).removeClass('d-none');
    } else {
      $('.street2-container-' + addressType).addClass('d-none');
    }
  } // Fill address div data


  $('.chosen-address .cancel-info.' + addressType).attr('data-' + getDataFieldName(fieldName), newValue);
}
/* Show Main form when user have no addresses */


function showMainForm(container) {
  // Hide div mentioning that use doesn't have addresses
  $('.no-address-yet', container).remove(); // Hide add new address form

  $('.add-shipping-address', container).removeClass('d-block'); // Hide add new address form title

  $('.new-address-title', container).addClass('d-none');
  $('.new-address-title .use', container).removeClass('d-none');
  $('.new-address-title .add', container).addClass('d-none'); // Show navigation buttons from main form

  $('.cancel-add-checkout-address', container).removeClass('d-none').next('a.btn').addClass('d-none');
  $('.save-checkout-address-navigation', container).removeClass('d-none');
  $('.chosen-address .change-address', container).removeClass('d-none');
}
/* Hide address modification container */


function hideChangeAddress(container) {
  $('.save-checkout-address-navigation', container).show();
  $('.checkout-address-form', container).hide();
  cancelBtn.hide();
  cancelBtn.prev().show();
  $('.save-address-form', container).removeClass('d-block');
  $('.chosen-address .change-address', container).removeClass('clicked');
  $('#mainContentContainer')[0].scrollTop = 0;
}
/* Remove error indicators when save address form is submitted */


function hideSaveAddressForm(container) {
  // Use addressType chosen when save form is shown
  let addressType = getClassList(saveButton[0])[3];

  if (addressType === 'no-addresses') {
    addressType = getClassList(saveButton[0])[4];
  }

  $('.change-' + addressType + '-title', container).show();
  $('.change-' + getOtherAddressType(addressType) + '-title', container).hide();
  $('.save-address-form form', container).removeClass('loading');
  $('.save-address-form input, .save-address-form select', container).removeClass('is-invalid');
  $('.save-address-form .invalid-feedback', container).remove();
}
/* Replace all form and displayed address data when cancel modifications */


function cancelChangeAddress(container) {
  $('.chosen-address address.cancel-info', container).each(function () {
    const oldData = $(this).data();
    const addressType = this.className.split(/\s+/)[1];
    const fieldNames = Object.keys(oldData);
    fieldNames.forEach(element => {
      let fieldName = element;

      if (element === 'countryName') {
        fieldName = 'countryCode';
      }

      const textToReplace = '.data-' + addressType + '.' + fieldName;
      const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
      const fieldToReplace = '.main-address-form ' + formFieldName; // Set form with old data

      $(fieldToReplace, container).val(oldData[element]);

      if (element !== 'countryCode') {
        // Set chosen Address with old data
        $(textToReplace).text(oldData[element]);
      }
    });
  });
} // Show add address form


function showAddForm(addressType, container) {
  $('.checkout-address-form', container).hide();
  $('.save-checkout-address-navigation', container).hide();
  $('.save-address-form .new-address-title', container).removeClass('d-none');
  $('.save-address-form input[type="text"]', container).val('');
  $('.save-address-form', container).addClass('d-block'); // Hide all save address forms before showing the chosen one

  $('.save-address-form [class^="add-"]', container).hide();
  $('.save-address-form .add-' + addressType + '-address', container).show();
}
/* Manage what type of address will be replace and/or saved */


function manageAddressType(addressType, selectorType, container) {
  $('.' + selectorType + '-' + addressType + '-title', container).show();
  $('.' + selectorType + '-' + getOtherAddressType(addressType) + '-title', container).hide(); // Also Manage SaveButton class

  saveButton.addClass(addressType);
  saveButton.removeClass(getOtherAddressType(addressType));
}
/********************/

/* COMMON FUNCTIONS */

/********************/
// Get class list from given element


function getClassList(element) {
  return element.className.split(/\s+/);
} // Get field name to fill data info in .cancel-info div


function getDataFieldName(fieldName) {
  const matches = /[A-Z]/gm.exec(fieldName);

  if (matches !== null) {
    return (fieldName.substr(0, matches.index) + '-' + fieldName.substr(matches.index, fieldName.length)).toLowerCase();
  }

  return fieldName;
} // Get other address type from address type give


function getOtherAddressType(addressType) {
  return addressType === 'shipping' ? 'billing' : 'shipping';
}

exports.default = checkout;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/product-nobless.js":
/*!**********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/product-nobless.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeFilterMenu = exports.filterProducts = exports.product = undefined;

var _nouislider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");

var _nouislider2 = _interopRequireDefault(_nouislider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const priceContainerSelector = '#productsFilters';
const priceContainerSelectorMobile = '#productsFiltersMobile';
const priceMinSelector = 'input[name="criteria[price][price_1]"]';
const priceMaxSelector = 'input[name="criteria[price][price_2]"]';

const product = function mainFunctions() {
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
};

const filterProducts = function filterProductFunctions() {
  const queryString = window.location.search;
  const criteria = queryString.indexOf('criteria');
  const priceInput = $('.price-filter .price-input');
  let priceSlider;
  let priceSliderMobile;

  if (priceInput.length > 0) {
    priceSlider = createPriceSlider(priceInput, priceContainerSelector);
    priceSliderMobile = createPriceSlider(priceInput, priceContainerSelectorMobile); // When user changes price input value

    priceInput.on('keyup', function (e) {
      if (e.which !== 8 && !isNaN(String.fromCharCode(e.which))) {
        setSliderNewValue(priceSlider, $(priceContainerSelector));
        setSliderNewValue(priceSliderMobile, $(priceContainerSelectorMobile));
      }
    });
  }
  /**
   * MANAGE DESKTOP FILTERS
   */
  // Size filter management


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
  }); // Validate filters on desktop

  $('a.validate-filter').on('click', function (e) {
    e.preventDefault();
    checkPriceValue(priceSlider, $(priceContainerSelector));
    checkPriceValue(priceSliderMobile, $(priceContainerSelectorMobile));
    $('#productFilterForm').submit();
  });
  /**
   * MANAGE MOBILE FILTERS
   */
  // Size filter management on mobile

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

  $('#productFilterMobileForm button.btn-primary').on('click', function (e) {
    e.preventDefault();

    if ($('.input-sorting:checked').val() === 'createdAt') {
      $('.input-sorting:checked').remove();
      $('.input-sorting-createdAt').attr('checked', true).removeClass('d-none').addClass('d-inline-block');
    }

    checkPriceValue(priceSlider, $(priceContainerSelector));
    checkPriceValue(priceSliderMobile, $(priceContainerSelectorMobile));
    $(this).closest('form').submit();
  }); // Mobile filters behaviour

  $('.product-filters.dropdown').on('show.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      resizeFilterMenu();
      const headerOuterHeight = $('#headerContainer').outerHeight() - $('.header-banner').height();
      $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
      $(".screen-overlay-filters").addClass("show");
      $('body').addClass("offcanvas-active");
      $('.close', $(priceContainerSelectorMobile)).removeClass("d-none");
    }
  }).on('hidden.bs.dropdown', function (e) {
    if ($(document).width() <= 1200) {
      $(".screen-overlay-filters").removeClass("show");
      $('body').removeClass("offcanvas-active");
      $('.close', $(priceContainerSelectorMobile)).addClass("d-none");
    }
  });
  /**
   * GENERAL FUNCTIONS
   */
  // Hide reinitialization button when filters have no criteria

  if (criteria !== -1) {
    $('.reinit-filter').removeClass('d-none');
  } // Add action to close icon


  $('.close', $(priceContainerSelectorMobile)).on('click', function (e) {
    e.preventDefault();
    $('.dropdown-toggle', $(priceContainerSelectorMobile)).trigger('click');
  });
};
/**
 * Function called when window is resized to avoid showing filter mobile menu on desktop
 */


const resizeFilterMenu = function resizeFilterMobileMenu() {
  if ($(document).width() > 1200) {
    $(".screen-overlay-filters").removeClass("show");
  } else {
    const headerContainer = $('#headerContainer');
    const headerBanner = $('.header-banner');
    const headerHeight = headerContainer.height() - headerBanner.height();
    const headerOuterHeight = headerContainer.outerHeight() - headerBanner.height();
    const filterListContainerHeight = $('#productsFiltersMobile .dropdown-menu').height() - $('header').height() - $('#filterSubmit').outerHeight() - 10;
    $('#productsFiltersMobile').css('height', 'calc(100% - ' + headerHeight + 'px)');
    $('.screen-overlay-filters').css('top', headerOuterHeight + 'px');
    $('#filterList').css('height', filterListContainerHeight + 'px');
  }
};
/**
 * Create price slider on taxon pages
 *
 * @param priceInput
 * @param containerSelector
 * @returns noUiSlider
 */


function createPriceSlider(priceInput, containerSelector) {
  const priceContainer = $(containerSelector);
  const priceRange = $('#priceRange', priceContainer)[0];
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer); // Prepare slider options

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
  };

  const slider = _nouislider2.default.create(priceRange, rangeSliderOptions);

  slider.on('slide', function (newValue) {
    priceMin.val(parseInt(newValue[0]));
    priceMax.val(parseInt(newValue[1]));
  });
  return slider;
}

function setSliderNewValue(priceSlider, priceContainer) {
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);
  const newValue = [priceMin.val(), priceMax.val()];
  priceSlider.set(newValue);
}
/**
 * Check price values before send form
 * @param priceSliderObject
 * @param priceContainer
 */


function checkPriceValue(priceSliderObject, priceContainer) {
  const priceMin = $(priceMinSelector, priceContainer);
  const priceMax = $(priceMaxSelector, priceContainer);
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

exports.product = product;
exports.filterProducts = filterProducts;
exports.resizeFilterMenu = resizeFilterMenu;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnJlc2NvL2pzL2ZyZXNjby5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2luZGV4Qm9vdHN0cmFwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2hlY2tvdXQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9qcy9wcm9kdWN0LW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBZGRUb0NhcnQiLCJlbCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVxdWVzdCIsImF4aW9zIiwicG9zdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmb3JFYWNoIiwibWVzc2FnZSIsImVycm9ycyIsImlubmVySFRNTCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJ1bmRlZmluZWQiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50Iiwic2VsZWN0IiwiY3VycmVudFRhcmdldCIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsIm5leHRFbGVtZW50U2libGluZyIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicmVwbGFjZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImluZGV4T2YiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIlN5bGl1c1JhdGluZyIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsIm9uUmF0ZSIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJTeWxpdXNUb2dnbGUiLCJ0cmlnZ2VyIiwidG9nZ2xlIiwidG9nZ2xlRWxlbWVudCIsImpzVG9nZ2xlIiwiY2hlY2tlZCIsInN0eWxlIiwiZGlzcGxheSIsIlN5bGl1c1ZhcmlhbnRJbWFnZXMiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwiZGVmYXVsdEltYWdlTGluayIsImRlZmF1bHRJbWFnZVNyYyIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvbiIsIm9yaWdpbmFsRXZlbnQiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJGaXQiLCJ3aXRoaW4iLCJhcmd1bWVudHMiLCJzIiwibiIsIm8iLCJhIiwiaCIsInIiLCJkIiwiTWF0aCIsIm1pbiIsIm1heCIsImVhc2luZyIsImZyZXNjb0Vhc2VJbkN1YmljIiwiZnJlc2NvRWFzZUluU2luZSIsImNvcyIsIlBJIiwiZnJlc2NvRWFzZU91dFNpbmUiLCJzaW4iLCJTdXBwb3J0IiwiTyIsIlAiLCJzcGxpdCIsImNhbnZhcyIsImJhIiwiZ2V0Q29udGV4dCIsImNzcyIsImFuaW1hdGlvbiIsIlMiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJzdWJzdHIiLCJkZXRlY3RNb2JpbGVUb3VjaCIsIm1vYmlsZVRvdWNoIiwidGVzdCIsInBsYXRmb3JtIiwiSW1hZ2VSZWFkeSIsImluaXRpYWxpemUiLCJhcHBseSIsImNhbGwiLCJUaW1lcnMiLCJnZXRVUklEYXRhIiwidHlwZSIsImVhY2giLCJUeXBlcyIsImRldGVjdEV4dGVuc2lvbiIsInRvTG93ZXJDYXNlIiwic3VwcG9ydHMiLCJuYXR1cmFsV2lkdGgiLCJJbWFnZSIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJpc0xvYWRlZCIsIm9wdGlvbnMiLCJtZXRob2QiLCJwb2xsRmFsbGJhY2tBZnRlciIsImNvbXBsZXRlIiwic2V0VGltZW91dCIsInByb3h5Iiwic3VjY2VzcyIsImludGVydmFscyIsIl9pcG9zIiwiX3RpbWUiLCJfZGVsYXkiLCJwb2xsIiwiZmFsbGJhY2siLCJfcG9sbGluZyIsIl91c2VkUG9sbEZhbGxiYWNrIiwiX2ZhbGxiYWNrSW1nIiwibmF0dXJhbEhlaWdodCIsIm9uZXJyb3IiLCJzcmMiLCJhYm9ydCIsImNsZWFyVGltZW91dCIsIl9jYWxsZWRTdWNjZXNzIiwiX2NhbGxlZEVycm9yIiwiX3RpbWVycyIsInNldCIsImNsZWFyIiwiY2xlYXJBbGwiLCJUeXBlIiwiaXNWaWRlbyIsImltYWdlIiwiZXh0ZW5zaW9ucyIsImRldGVjdCIsImluQXJyYXkiLCJleHRlbnNpb24iLCJ2aW1lbyIsImlkIiwieW91dHViZSIsIlZpbWVvVGh1bWJuYWlsIiwibG9hZCIsInByb3RvY29sIiwiX3hociIsImdldEpTT04iLCJ0aHVtYm5haWxfdXJsIiwiY2FjaGUiLCJwdXNoIiwiVmltZW9SZWFkeSIsImNhbGxiYWNrIiwiZGltZW5zaW9ucyIsIk9wdGlvbnMiLCJkZWZhdWx0cyIsImVmZmVjdHMiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsImNsb3NlIiwicHJlbG9hZCIsInBvc2l0aW9uIiwic2tpbiIsInNwaW5uZXJEZWxheSIsInN5bmMiLCJ1aSIsInVpRGVsYXkiLCJhdXRvcGxheSIsImFwaSIsInRpdGxlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJjb250cm9scyIsImVuYWJsZWpzYXBpIiwiaGQiLCJpdl9sb2FkX3BvbGljeSIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwidnEiLCJpbml0aWFsVHlwZU9wdGlvbnMiLCJjcmVhdGUiLCJ4IiwieSIsIm92ZXJsYXAiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIk92ZXJsYXkiLCJidWlsZCIsInZpc2libGUiLCJhZGRDbGFzcyIsIlBhZ2VzIiwicGFnZSIsInZpZXciLCJXaW5kb3ciLCJzZXRTa2luIiwicmVtb3ZlQ2xhc3MiLCJhdHRhY2giLCJib2R5IiwiZGV0YWNoIiwic3RvcCIsImZhZGVUbyIsImZhZGVPdXQiLCJnZXRTY3JvbGxEaW1lbnNpb25zIiwicXVldWVzIiwicGFnZXMiLCJfdHJhY2tpbmciLCJfZmlyc3QiLCJ0aW1lcnMiLCJfYm94IiwiX3BhZ2VzIiwiX3RodW1ibmFpbHMiLCJUaHVtYm5haWxzIiwiU3Bpbm5lciIsIlVJIiwiX2F0dGFjaGVkIiwiX3NraW4iLCJzZXRTaG93aW5nVHlwZSIsIl9zaG93aW5nVHlwZSIsInN0YXJ0T2JzZXJ2aW5nUmVzaXplIiwiX29uV2luZG93UmVzaXplSGFuZGxlciIsIl9vbldpbmRvd1Jlc2l6ZSIsInN0b3BPYnNlcnZpbmdSZXNpemUiLCJvZmYiLCJfb25TY3JvbGwiLCJhZGp1c3RUb1Njcm9sbCIsImZpdFRvVmlld3BvcnQiLCJ1cGRhdGVCb3hEaW1lbnNpb25zIiwiZml0VG9Cb3giLCJ1cGRhdGUiLCJhZGp1c3RQcmV2TmV4dCIsImNlbnRlciIsInRvcCIsInNjcm9sbFRvcCIsImdldEJveERpbWVuc2lvbnMiLCJfYm94RGltZW5zaW9ucyIsImdldERpbWVuc2lvbnMiLCJfb3JpZW50YXRpb24iLCJfYm94UG9zaXRpb24iLCJvcGVuaW5nIiwiX3Nob3ciLCJxdWV1ZSIsImRpc2FibGUiLCJLZXlib2FyZCIsIl9oaWRlIiwiX3Jlc2V0IiwicmVtb3ZlQWxsIiwiX3Bvc2l0aW9uIiwiYWZ0ZXJIaWRlIiwiY2xvc2luZyIsInZpZXdzIiwic2V0UG9zaXRpb24iLCJzdG9wSGlkZVF1ZXVlIiwicmVzZXQiLCJtYXlQcmV2aW91cyIsInByZXZpb3VzIiwiZ2V0U3Vycm91bmRpbmdJbmRleGVzIiwibWF5TmV4dCIsIm5leHQiLCJlbmFibGVkIiwia2V5Q29kZSIsImVuYWJsZSIsIl9vbktleURvd25IYW5kbGVyIiwib25LZXlEb3duIiwiX29uS2V5VXBIYW5kbGVyIiwib25LZXlVcCIsImdldEtleUJ5S2V5Q29kZSIsIlBhZ2UiLCJMYyIsIk1jIiwiTmMiLCJPYyIsInVpZCIsIl90b3RhbCIsIl9mdWxsQ2xpY2siLCJfdmlzaWJsZSIsInNob3doaWRlIiwiX2NyZWF0ZWQiLCJvcGFjaXR5IiwiY2FwdGlvbiIsImluZm8iLCJjbG9uZSIsImluZm9QYWRkZXIiLCJwb3MiLCJodG1sIiwiYmFja2dyb3VuZCIsImF0dHIiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiZyIsIl9pbmZvSGVpZ2h0IiwiX3BhZGRpbmciLCJfYmFja2dyb3VuZERpbWVuc2lvbnMiLCJib3R0b20iLCJnZXRYWVAiLCJyZW1vdmVBdHRyIiwiZmluZCIsImdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAiLCJnZXRMb2FkaW5nQ291bnQiLCJoYW5kbGVUcmFja2luZyIsInNldFhZIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZVBvc2l0aW9ucyIsIl90cmFja2luZ190aW1lciIsImNsZWFyVHJhY2tpbmdUaW1lciIsInN0YXJ0VHJhY2tpbmciLCJfaGFuZGxlVHJhY2tpbmciLCJzdG9wVHJhY2tpbmciLCJzZXRUcmFja2luZyIsImlzVHJhY2tpbmciLCJjbGVhclRyYWNraW5nIiwiZ3JlcCIsIl94eSIsInNldFhZUCIsIl94eXAiLCJWaWV3Iiwib2JqZWN0IiwiZ3JvdXAiLCJldmFsIiwic3VwcG9ydGVkIiwidXBkYXRlRGltZW5zaW9ucyIsIl9kaW1lbnNpb25zIiwiX0ZyZXNjbyIsIl9kaXNhYmxlZCIsIl9mYWxsYmFjayIsInN0YXJ0RGVsZWdhdGluZyIsIl9kZWxlZ2F0ZUhhbmRsZXIiLCJkZWxlZ2F0ZSIsIl9zZXRDbGlja1hZSGFuZGxlciIsInNldENsaWNrWFkiLCJzdG9wRGVsZWdhdGluZyIsInNob3dGYWxsYmFjayIsIm9iamVjdF90eXBlIiwiX2RnbyIsImdyb3VwT3B0aW9ucyIsImVsZW1lbnRzIiwiZmlsdGVyIiwiZ3JvdXBFeHRlbmQiLCJmaXJzdFVJIiwicG9zaXRpb25JbkFQRyIsInNldERlZmF1bHRTa2luIiwiX3ZhcnMiLCJ0aHVtYm5haWxGcmFtZSIsInN0YXJ0T2JzZXJ2aW5nIiwid3JhcHBlciIsIl9zbGlkZXIiLCJfcHJldmlvdXMiLCJfcHJldmlvdXNfYnV0dG9uIiwiX3RodW1icyIsIl9zbGlkZSIsIl9uZXh0IiwiX25leHRfYnV0dG9uIiwic2V0QWN0aXZlIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJzZXRPcmllbnRhdGlvbiIsIl9kaXNhYmxlZEdyb3VwIiwiVGh1bWJuYWlsIiwiX3BhZ2UiLCJkaXNhYmxlZCIsInVwZGF0ZVZhcnMiLCJ3IiwicGFkZGluZ1RvcCIsInNpZGVzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYiIsImsiLCJDIiwiVyIsIk0iLCJUIiwiZmxvb3IiLCJJIiwiaXBwIiwicm91bmQiLCJfbW9kZSIsImNlaWwiLCJ0aHVtYnMiLCJyZXNpemUiLCJtb3ZlVG8iLCJtb3ZlVG9QYWdlIiwiYW5pbWF0ZSIsImxvYWRDdXJyZW50UGFnZSIsImFjdGl2YXRlIiwicmVmcmVzaCIsInByZUJ1aWxkIiwidGh1bWJuYWlsV3JhcHBlciIsImljb24iLCJyZWFkeSIsInZpbWVvVGh1bWJuYWlsIiwiX2xvYWRpbmciLCJfcmVtb3ZlZCIsIl9jbGVhckRlbGF5IiwiX2xvYWRlZCIsIl91cmwiLCJfbG9hZCIsIl9lcnJvciIsImZhZGVJblNwaW5uZXIiLCJfbW9kZXMiLCJfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yIiwiX2VuYWJsZWQiLCJmdWxsY2xpY2siLCJfc2Nyb2xsTGVmdCIsIl9jbG9zZSIsIl9vbk1vdXNlTW92ZSIsInVuYmluZCIsIl94IiwiX3kiLCJyZXNldFByZXZOZXh0IiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlVXBIYW5kbGVyIiwiX29uTW91c2VVcCIsIl9zaG93SGFuZGxlciIsIl9oaWRlSGFuZGxlciIsIl9tb3VzZW1vdmVIYW5kbGVyIiwiX2hvdmVyaW5nU2lkZUJ1dHRvbiIsInN0YXJ0VGltZXIiLCJfb25Nb3VzZU1vdmVIYW5kbGVyIiwiX29uTW91c2VMZWF2ZUhhbmRsZXIiLCJfb25Nb3VzZUVudGVySGFuZGxlciIsIl9vbk1vdXNlRW50ZXIiLCJfb25TaWRlTW91c2VFbnRlckhhbmRsZXIiLCJfb25TaWRlTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciIsIl9vblNpZGVNb3VzZUxlYXZlIiwiX29uU2Nyb2xsSGFuZGxlciIsInNjcm9sbExlZnQiLCJfZ2V0RXZlbnRTaWRlIiwiX2hvdmVyaW5nU2lkZSIsIl9tYXlDbGlja0hvdmVyaW5nU2lkZSIsIndoaWNoIiwiY2xlYXJUaW1lciIsImluc2lkZSIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIiLCJfZGVsZWdhdGVPdmVybGF5Q2xvc2UiLCJvdXRzaWRlIiwicmVzaXplTWFpbkNvbnRhaW5lciIsImZvb3RlckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJqUXVlcnkiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJoZWFkZXJPdXRlckhlaWdodCIsInByb2R1Y3RDb250YWluZXJIZWlnaHQiLCJyZXNpemVNZW51IiwiaGVhZGVySGVpZ2h0Iiwib2ZmY2FudmFzX2lkIiwiZGl2VG9PcGVuIiwibG9naW5GdW5jdGlvbnMiLCJmb3JtRWxlbWVudCIsInN1Ym1pdCIsImFqYXgiLCJzZXJpYWxpemUiLCJ0ZXh0IiwicGFyc2VIVE1MIiwicmVzcG9uc2VUZXh0IiwicmVnZXgiLCJyZWdpc3RlckZvcm0iLCJpbnB1dFJlZ2lzdGVyRm9ybSIsImludmFsaWRTcGFuIiwiY29udGFjdFBhZ2VGdW5jdGlvbiIsIm1vZGFsIiwicHJvcCIsInN0YXR1cyIsImVycm9yTGlzdCIsInRvQXJyYXkiLCJvdXRlclRleHQiLCJjbGFzc05hbWUiLCJhZnRlciIsImNvbnNvbGUiLCJsb2ciLCJzaGFyZUZ1bmN0aW9ucyIsInRvb2x0aXAiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJtYWlsVG8iLCJtYWlsdG8iLCJjYXJ0RnVuY3Rpb25zIiwiYm9udXNQb2ludHMiLCJjb3Vwb24iLCJuZXdRdHkiLCJpbnB1dFF0eU5hbWUiLCJvcmRlcnNHcmlkRnVuY3Rpb25zIiwicHJldiIsImxvZ2luUGFnZUZ1bmN0aW9ucyIsIm1vZGFsSWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94IiwiZWxlbSIsImNhcm91c2VsIiwibWFpbkZ1bmN0aW9ucyIsImNyZWF0ZUNhcm91c2VsIiwiY3JlYXRlUHJvZHVjdENhcm91c2VsIiwiY2Fyb3VzZWxFbGVtZW50IiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXBwZW5kQXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzbGljayIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiaXNDYXJ0SXRlbXNDYXJvdXNlbCIsIm1vYmlsZUZpcnN0IiwicmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0IiwidW5zbGlja2VkIiwiY3JlYXRlQWRkcmVzc0Nhcm91c2VsIiwib3B0cyIsInJvd3MiLCJzbGlkZXNQZXJSb3ciLCJhZGFwdGl2ZUhlaWdodCIsInZpc2libGVTbGlkZXJEaXYiLCJjcmVhdGVHYWxsZXJ5RGVza3RvcCIsImltYWdlcyIsImluZGV4IiwiaGVpZ2h0Q29udGVudCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImltZ1NlbGVjdG9yIiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsInNhdmVCdXR0b24iLCJjYW5jZWxCdG4iLCJjaGVja291dCIsImFkZHJlc3NUeXBlIiwiZ2V0Q2xhc3NMaXN0IiwibWFuYWdlQWRkcmVzc1R5cGUiLCJjaG9vc2VBZGRyZXNzIiwic2hvd0FkZEZvcm0iLCJmaWVsZCIsImZpZWxkTmFtZSIsInRvU2F2ZSIsInRvUmVwbGFjZSIsImNoZWNrb3V0U2F2ZUFkZHJlc3MiLCJmaWxsQWxsQWRkcmVzc2VzIiwiaGlkZUNoYW5nZUFkZHJlc3MiLCJoaWRlU2F2ZUFkZHJlc3NGb3JtIiwiY2FuY2VsQ2hhbmdlQWRkcmVzcyIsImZpZWxkU2VsZWN0b3IiLCJmb3JtRmllbGQiLCJjaG9zZW5BZGRyZXNzVGV4dCIsImNob3NlblZhbHVlIiwic3Vic3RyaW5nIiwidHJpbSIsImdldERhdGFGaWVsZE5hbWUiLCJmaWxsT3RoZXJBZGRyZXNzIiwiZGF0YVN1Y2Nlc3NEaXYiLCJub0FkZHJlc3MiLCJmaWxsRGF0YUFmdGVyU2F2ZSIsImdldE90aGVyQWRkcmVzc1R5cGUiLCJzaG93TWFpbkZvcm0iLCJmaWVsZEVycm9yIiwiZmlsbEFkZHJlc3MiLCJmaWVsZElkIiwia2VlcENhbWVsRmllbGQiLCJkYXRhVG9GaWxsIiwiaW5jbHVkZXMiLCJvdGhlckFkZHJlc3NUeXBlIiwiZmlsbE90aGVyRm9ybSIsIm90aGVyRmllbGRJZCIsImlkVG9GaWxsIiwibmV3VmFsdWUiLCJmb3JtRmllbGROYW1lIiwiZmllbGRUb1JlcGxhY2UiLCJvbGREYXRhIiwiZmllbGROYW1lcyIsImtleXMiLCJ0ZXh0VG9SZXBsYWNlIiwic2VsZWN0b3JUeXBlIiwibWF0Y2hlcyIsInByaWNlQ29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlIiwicHJpY2VNaW5TZWxlY3RvciIsInByaWNlTWF4U2VsZWN0b3IiLCJwcm9kdWN0IiwiYnVuZGxlSXRlbSIsImFkZFRvQ2FydEZvcm0iLCJzZWxlY3RlZFNpemUiLCJidW5kbGVJdGVtc0NvdW50IiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBdUJBQSw0QkFBUUMsR0FBUixDQUFZQyxjQUFaLEVBQW9CQyxrQ0FBcEIsRUFBc0NDLDRCQUF0QyxFQUFxREMsZ0JBQXJELEVBQThEQyx3Q0FBOUQsRUFBbUZDLDBCQUFuRixFQUFpR0Msd0JBQWpHLEVBQThHQyw4QkFBOUcsRUFBOEhDLDBCQUE5SCxFQUE0SUMsMEJBQTVJLEVBQTBKQyxjQUExSixFQUFrS0MsOEJBQWxLLEVBQWtMQyxrQkFBbEwsRUFBNExDLHNCQUE1TCxFQUF3TUMsZ0JBQXhNLEVBQWlOQyxrQkFBak4sRUFBMk5DLGNBQTNOLEVBQW1PQyx3QkFBbk8sRUFBZ1BDLG9CQUFoUDs7QUFDQUMsd0JBQUlDLEtBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7QUFDQTs7Ozs7O0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBLE1BQU1DLGVBQWUsR0FBSUMsRUFBRCxJQUFRO0FBQzlCLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixRQUFyQixDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsZUFBckIsQ0FBcEI7QUFDQSxRQUFNRSxpQkFBaUIsR0FBR0osT0FBTyxDQUFDSyxhQUFSLENBQXNCLCtCQUF0QixDQUExQjtBQUVBTCxTQUFPLENBQUNNLGdCQUFSLENBQXlCLFFBQXpCLEVBQW9DQyxDQUFELElBQU87QUFDeEMsVUFBTUMsT0FBTyxHQUFHQyxnQkFBTUMsSUFBTixDQUFXVCxHQUFYLEVBQWdCLDZCQUFVRCxPQUFWLENBQWhCLENBQWhCOztBQUVBTyxLQUFDLENBQUNJLGNBQUY7QUFFQUgsV0FBTyxDQUFDSSxJQUFSLENBQWEsTUFBTTtBQUNqQlIsdUJBQWlCLENBQUNTLFNBQWxCLENBQTRCckMsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFDQXNDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJiLFdBQXZCO0FBQ0QsS0FIRDtBQUtBSyxXQUFPLENBQUNTLEtBQVIsQ0FBZUMsS0FBRCxJQUFXO0FBQ3ZCZCx1QkFBaUIsQ0FBQ1MsU0FBbEIsQ0FBNEJNLE1BQTVCLENBQW1DLFFBQW5DO0FBQ0EsVUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFFQUMsWUFBTSxDQUFDQyxPQUFQLENBQWVKLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxJQUE5QixFQUFvQ0MsT0FBcEMsQ0FBNEMsQ0FBQyxHQUFHQyxPQUFILENBQUQsS0FBaUI7QUFDM0ROLHlCQUFpQixJQUFJTSxPQUFPLENBQUNDLE1BQTdCO0FBQ0QsT0FGRDtBQUlBdkIsdUJBQWlCLENBQUN3QixTQUFsQixHQUE4QlIsaUJBQTlCO0FBQ0FwQixhQUFPLENBQUNhLFNBQVIsQ0FBa0JNLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0QsS0FWRDtBQVdELEdBckJEO0FBc0JELENBNUJEOztrQkE4QmVyQixlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ2Y7Ozs7OztBQVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFJQSxNQUFNK0IsY0FBYyxHQUFJOUIsRUFBRCxJQUFRO0FBQzdCLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNK0IsWUFBWSxHQUFHOUIsT0FBTyxDQUFDSyxhQUFSLENBQXNCLE1BQXRCLENBQXJCO0FBQ0EsUUFBTTBCLGVBQWUsR0FBRy9CLE9BQU8sQ0FBQ0ssYUFBUixDQUFzQixRQUF0QixDQUF4QjtBQUNBLFFBQU1KLEdBQUcsR0FBRzZCLFlBQVksQ0FBQzVCLFlBQWIsQ0FBMEIsbUJBQTFCLENBQVo7QUFDQSxRQUFNOEIsVUFBVSxHQUFHaEMsT0FBTyxDQUFDSyxhQUFSLENBQXNCLHFCQUF0QixDQUFuQjtBQUNBLFFBQU00QixhQUFhLEdBQUdqQyxPQUFPLENBQUNLLGFBQVIsQ0FBc0Isd0JBQXRCLENBQXRCO0FBQ0EsUUFBTTZCLGNBQWMsR0FBR2xDLE9BQU8sQ0FBQ0ssYUFBUixDQUFzQixzQkFBdEIsQ0FBdkI7QUFDQSxRQUFNOEIsYUFBYSxHQUFHRCxjQUFjLENBQUNoQyxZQUFmLENBQTRCLE1BQTVCLENBQXRCO0FBRUE0QixjQUFZLENBQUN4QixnQkFBYixDQUE4QixPQUE5QixFQUF3Q0MsQ0FBRCxJQUFPO0FBQzVDQSxLQUFDLENBQUNJLGNBQUY7QUFFQSxVQUFNeUIsTUFBTSxHQUFHLElBQUlDLGVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLE1BQVAsQ0FBYyxXQUFkLEVBQTJCTixVQUFVLENBQUNPLEtBQXRDO0FBQ0FILFVBQU0sQ0FBQ0UsTUFBUCxDQUFjLFdBQWQsRUFBMkJMLGFBQWEsQ0FBQ00sS0FBekM7QUFDQUgsVUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBQ0gsYUFBRCxDQUFkLEVBQStCRCxjQUFjLENBQUNLLEtBQTlDOztBQUVBOUIsb0JBQU1DLElBQU4sQ0FBV1QsR0FBWCxFQUFnQm1DLE1BQWhCLEVBQ0d4QixJQURILENBQ1EsTUFBTTtBQUFFRSxZQUFNLENBQUNDLFFBQVAsQ0FBZ0J5QixNQUFoQjtBQUEyQixLQUQzQyxFQUVHdkIsS0FGSCxDQUVVQyxLQUFELElBQVc7QUFDaEJhLHFCQUFlLENBQUNsQixTQUFoQixDQUEwQk0sTUFBMUIsQ0FBaUMsUUFBakM7QUFDQVkscUJBQWUsQ0FBQ0gsU0FBaEIsR0FBNEJWLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxJQUFmLENBQW9CRSxPQUFoRDtBQUNELEtBTEg7QUFNRCxHQWREO0FBZUQsQ0F6QkQ7O2tCQTJCZUcsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmOzs7O0FBQ0E7Ozs7OztBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQSxNQUFNWSxlQUFlLEdBQUkxQyxFQUFELElBQVE7QUFDOUIsUUFBTUMsT0FBTyxHQUFHRCxFQUFoQjtBQUNBLFFBQU1FLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLENBQXFCLCtCQUFyQixDQUFaO0FBQ0EsUUFBTXdDLGlCQUFpQixHQUFHQyxRQUFRLENBQUN0QyxhQUFULENBQXVCLHdCQUF2QixDQUExQjtBQUVBTCxTQUFPLENBQUNNLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLHNCQUFVQyxDQUFELElBQU87QUFDaERtQyxxQkFBaUIsQ0FBQzdCLFNBQWxCLENBQTRCckMsR0FBNUIsQ0FBZ0MsUUFBaEM7O0FBRUEsUUFBSStCLENBQUMsQ0FBQ3FDLE1BQUYsQ0FBU0wsS0FBVCxDQUFlTSxNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQzdCcEMsc0JBQU1xQyxHQUFOLENBQVU3QyxHQUFWLEVBQWU7QUFBRW1DLGNBQU0sRUFBRTtBQUFFVyxlQUFLLEVBQUV4QyxDQUFDLENBQUNxQyxNQUFGLENBQVNMO0FBQWxCO0FBQVYsT0FBZixFQUNHM0IsSUFESCxDQUNRLE1BQU07QUFBRThCLHlCQUFpQixDQUFDN0IsU0FBbEIsQ0FBNEJNLE1BQTVCLENBQW1DLFFBQW5DO0FBQStDLE9BRC9ELEVBRUdGLEtBRkgsQ0FFUyxNQUFNO0FBQUV5Qix5QkFBaUIsQ0FBQzdCLFNBQWxCLENBQTRCckMsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFBNEMsT0FGN0Q7QUFHRDtBQUNGLEdBUmlDLEVBUS9CLElBUitCLENBQWxDO0FBU0QsQ0FkRDs7a0JBZ0JlaUUsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxNQUFNTyxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBVCxHQUErQjtBQUN6RCxRQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ3RDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWhCO0FBRUFzQyxVQUFRLENBQUNPLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDekIsT0FBM0MsQ0FBb0QwQixJQUFELElBQVU7QUFDM0RBLFFBQUksQ0FBQ0MsV0FBTCxDQUFpQkgsT0FBTyxDQUFDSSxTQUFSLENBQWtCLElBQWxCLENBQWpCO0FBQ0FGLFFBQUksQ0FBQzdDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU07QUFDcEM2QyxVQUFJLENBQUN0QyxTQUFMLENBQWVyQyxHQUFmLENBQW1CLFNBQW5CO0FBQ0QsS0FGRDtBQUdELEdBTEQ7QUFNRCxDQVREOztrQkFXZXdFLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZjs7Ozs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBLE1BQU1NLHFCQUFxQixHQUFHLFNBQVNBLHFCQUFULENBQStCQyxhQUEvQixFQUE4QztBQUMxRSxRQUFNQyxHQUFHLEdBQUdELGFBQWEsR0FBR0EsYUFBYSxDQUFDaEIsS0FBakIsR0FBeUIsSUFBbEQ7QUFDQSxTQUFPLENBQUNpQixHQUFELElBQVFBLEdBQUcsSUFBSUMsU0FBZixHQUEyQixFQUEzQixHQUFpQyxVQUFTRCxHQUFJLEdBQXJEO0FBQ0QsQ0FIRDs7QUFNQSxNQUFNRSxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBVCxHQUErQjtBQUN6RCxRQUFNQyxhQUFhLEdBQUdoQixRQUFRLENBQUNPLGdCQUFULENBQTBCLCtCQUExQixDQUF0QjtBQUNBLFFBQU1VLFdBQVcsR0FBRyxJQUFJQyxLQUFKLENBQVUsUUFBVixDQUFwQjtBQUVBRixlQUFhLENBQUNsQyxPQUFkLENBQXVCcUMsaUJBQUQsSUFBdUI7QUFDM0NBLHFCQUFpQixDQUFDeEQsZ0JBQWxCLENBQW1DLFFBQW5DLEVBQThDeUQsS0FBRCxJQUFXO0FBQ3RELFlBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxhQUFyQjtBQUNBLFlBQU1DLGlCQUFpQixHQUFHRixNQUFNLENBQUNHLE9BQVAsQ0FBZSxhQUFmLEVBQThCQyxrQkFBeEQ7QUFFQSxZQUFNQyx1QkFBdUIsR0FBR0wsTUFBTSxDQUFDOUQsWUFBUCxDQUFvQixNQUFwQixFQUE0Qm9FLE9BQTVCLENBQW9DLFNBQXBDLEVBQStDLFVBQS9DLENBQWhDO0FBQ0EsWUFBTUMsc0JBQXNCLEdBQUdQLE1BQU0sQ0FBQzlELFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEJvRSxPQUE1QixDQUFvQyxhQUFwQyxFQUFtRCxjQUFuRCxDQUEvQjtBQUVBLFlBQU1FLHFCQUFxQixHQUFHUixNQUFNLENBQUM5RCxZQUFQLENBQW9CLElBQXBCLEVBQTBCb0UsT0FBMUIsQ0FBa0MsU0FBbEMsRUFBNkMsVUFBN0MsQ0FBOUI7QUFDQSxZQUFNRyxvQkFBb0IsR0FBR1QsTUFBTSxDQUFDOUQsWUFBUCxDQUFvQixJQUFwQixFQUEwQm9FLE9BQTFCLENBQWtDLGFBQWxDLEVBQWlELGNBQWpELENBQTdCOztBQUVBLFVBQUlOLE1BQU0sQ0FBQ3pCLEtBQVAsS0FBaUIsRUFBakIsSUFBdUJ5QixNQUFNLENBQUN6QixLQUFQLElBQWdCa0IsU0FBM0MsRUFBc0Q7QUFDcERTLHlCQUFpQixDQUFDdEMsU0FBbEIsR0FBOEIsRUFBOUI7QUFDQTtBQUNEOztBQUVEc0MsdUJBQWlCLENBQUNRLFlBQWxCLENBQStCLGNBQS9CLEVBQStDLEVBQS9DOztBQUVBakUsc0JBQU1xQyxHQUFOLENBQVVvQixpQkFBaUIsQ0FBQ2hFLFlBQWxCLENBQStCLFVBQS9CLENBQVYsRUFBc0Q7QUFBRWtDLGNBQU0sRUFBRTtBQUFFdUMscUJBQVcsRUFBRVgsTUFBTSxDQUFDekI7QUFBdEI7QUFBVixPQUF0RCxFQUNHM0IsSUFESCxDQUNTVyxRQUFELElBQWM7QUFDbEIsWUFBSSxDQUFDQSxRQUFRLENBQUNDLElBQVQsQ0FBY29ELE9BQW5CLEVBQTRCO0FBQzFCViwyQkFBaUIsQ0FBQ1csZUFBbEIsQ0FBa0MsY0FBbEM7QUFDQVgsMkJBQWlCLENBQUN0QyxTQUFsQixHQUE4QixFQUE5QjtBQUNELFNBSEQsTUFHTyxJQUFJTCxRQUFRLENBQUNDLElBQVQsQ0FBY29ELE9BQWQsQ0FBc0JFLE9BQXRCLENBQThCLFFBQTlCLE1BQTRDLENBQUMsQ0FBakQsRUFBb0Q7QUFDekQsZ0JBQU1DLG1CQUFtQixHQUFHekIscUJBQXFCLENBQy9DWSxpQkFBaUIsQ0FBQzdELGFBQWxCLENBQWdDLHVDQUFoQyxDQUQrQyxDQUFqRDtBQUlBNkQsMkJBQWlCLENBQUN0QyxTQUFsQixHQUE4QkwsUUFBUSxDQUFDQyxJQUFULENBQWNvRCxPQUFkLENBQzNCTixPQUQyQixDQUNuQixnQ0FEbUIsRUFDZ0IsU0FBUUQsdUJBQXdCLElBQUdVLG1CQUFvQixFQUR2RSxFQUUzQlQsT0FGMkIsQ0FFbkIsOEJBRm1CLEVBRWMsT0FBTUUscUJBQXNCLEdBRjFDLEVBRzNCRixPQUgyQixDQUduQixxQ0FIbUIsRUFHb0IsaUJBSHBCLEVBSTNCQSxPQUoyQixDQUlsQixVQUFTUyxtQkFBb0IsRUFKWCxFQUllLFVBQVNBLG1CQUFvQix1QkFKNUMsQ0FBOUI7QUFNQWIsMkJBQWlCLENBQUM3RCxhQUFsQixDQUFnQyxRQUFoQyxFQUEwQ1EsU0FBMUMsQ0FBb0RyQyxHQUFwRCxDQUF3RCxjQUF4RDtBQUNBMEYsMkJBQWlCLENBQUNXLGVBQWxCLENBQWtDLGNBQWxDO0FBQ0QsU0FiTSxNQWFBO0FBQ0wsZ0JBQU1HLGtCQUFrQixHQUFHMUIscUJBQXFCLENBQUNZLGlCQUFpQixDQUFDN0QsYUFBbEIsQ0FBZ0MsT0FBaEMsQ0FBRCxDQUFoRDtBQUVBNkQsMkJBQWlCLENBQUN0QyxTQUFsQixHQUE4QkwsUUFBUSxDQUFDQyxJQUFULENBQWNvRCxPQUFkLENBQzNCTixPQUQyQixDQUNuQixnQ0FEbUIsRUFDZ0IsU0FBUUMsc0JBQXVCLElBQUdTLGtCQUFtQixFQURyRSxFQUUzQlYsT0FGMkIsQ0FFbkIsOEJBRm1CLEVBRWMsT0FBTUcsb0JBQXFCLEdBRnpDLENBQTlCO0FBSUFQLDJCQUFpQixDQUFDN0QsYUFBbEIsQ0FBZ0MsT0FBaEMsRUFBeUNRLFNBQXpDLENBQW1EckMsR0FBbkQsQ0FBdUQsY0FBdkQ7QUFDQTBGLDJCQUFpQixDQUFDVyxlQUFsQixDQUFrQyxjQUFsQztBQUNEO0FBQ0YsT0E1Qkg7QUE2QkQsS0E5Q0Q7O0FBZ0RBLFFBQUlmLGlCQUFpQixDQUFDdkIsS0FBbEIsS0FBNEIsRUFBaEMsRUFBb0M7QUFDbEN1Qix1QkFBaUIsQ0FBQ21CLGFBQWxCLENBQWdDckIsV0FBaEM7QUFDRDtBQUNGLEdBcEREO0FBcURELENBekREOztrQkEyRGVGLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU13QixZQUFOLENBQW1CO0FBQ2pCQyxhQUFXLENBQUNDLFNBQUQsRUFBWUMsUUFBWixFQUFzQjtBQUMvQixTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFFBQUksS0FBS0QsU0FBVCxFQUFvQjtBQUNsQixXQUFLRSxTQUFMLEdBQWlCQyxNQUFNLENBQUMsS0FBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCQyxXQUF4QixDQUFOLElBQThDLENBQS9EO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQkgsTUFBTSxDQUFDLEtBQUtILFNBQUwsQ0FBZUksT0FBZixDQUF1QkcsZUFBeEIsQ0FBTixJQUFrRCxDQUF2RTtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS1IsU0FBTCxDQUFlSSxPQUFmLENBQXVCSyxnQkFBdkIsS0FBNEMsT0FBNUQ7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQUtWLFNBQUwsQ0FBZS9FLGFBQWYsQ0FBNkIseUJBQTdCLENBQXBCO0FBQ0EsV0FBSzBGLGFBQUwsR0FBcUIsS0FBS1gsU0FBTCxDQUFlL0UsYUFBZixDQUE2QiwwQkFBN0IsQ0FBckI7QUFFQSxXQUFLMkYsTUFBTDtBQUNEO0FBQ0Y7O0FBRURBLFFBQU0sR0FBRztBQUNQLFNBQUtaLFNBQUwsQ0FBZXhELFNBQWYsR0FBMkIsRUFBM0I7QUFDQSxVQUFNcUUsYUFBYSxHQUFHdEQsUUFBUSxDQUFDdUQsYUFBVCxDQUF1QixLQUF2QixDQUF0Qjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksS0FBS2IsU0FBMUIsRUFBcUNhLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBTW5HLE9BQU8sR0FBRzJDLFFBQVEsQ0FBQ3VELGFBQVQsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQWxHLGFBQU8sQ0FBQ3dGLE9BQVIsQ0FBZ0JZLGFBQWhCLEdBQWdDRCxDQUFoQzs7QUFFQSxVQUFJLEtBQUtQLFFBQUwsS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0I1RixlQUFPLENBQUNNLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLEtBQUsrRixnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbEM7QUFDRDs7QUFFRCxVQUFJSCxDQUFDLElBQUksS0FBS1QsYUFBZCxFQUE2QjtBQUMzQjFGLGVBQU8sQ0FBQzRCLFNBQVIsR0FBb0IsS0FBS2tFLFlBQUwsQ0FBa0JsRSxTQUF0QztBQUNELE9BRkQsTUFFTztBQUNMNUIsZUFBTyxDQUFDNEIsU0FBUixHQUFvQixLQUFLbUUsYUFBTCxDQUFtQm5FLFNBQXZDO0FBQ0Q7O0FBRURxRSxtQkFBYSxDQUFDN0MsV0FBZCxDQUEwQnBELE9BQTFCO0FBQ0Q7O0FBQ0QsU0FBS29GLFNBQUwsQ0FBZWhDLFdBQWYsQ0FBMkI2QyxhQUEzQjtBQUNEOztBQUVESSxrQkFBZ0IsQ0FBQzlGLENBQUQsRUFBSTtBQUNsQixVQUFNZ0MsS0FBSyxHQUFHZ0QsTUFBTSxDQUFDaEYsQ0FBQyxDQUFDMEQsYUFBRixDQUFnQnVCLE9BQWhCLENBQXdCWSxhQUF6QixDQUFwQjtBQUNBLFNBQUtWLGFBQUwsR0FBcUJuRCxLQUFyQjtBQUNBLFNBQUs2QyxTQUFMLENBQWVJLE9BQWYsQ0FBdUJHLGVBQXZCLEdBQXlDcEQsS0FBekM7QUFDQSxTQUFLeUQsTUFBTDtBQUNBLFNBQUtYLFFBQUwsQ0FBY2tCLE1BQWQsQ0FBcUJoRSxLQUFyQjtBQUNEOztBQTdDZ0I7O2tCQWdESjJDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDZjs7Ozs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBLE1BQU1zQixvQkFBb0IsR0FBSXpHLEVBQUQsSUFBUTtBQUNuQyxRQUFNQyxPQUFPLEdBQUdELEVBQWhCO0FBQ0EsUUFBTUksV0FBVyxHQUFHSCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsdUNBQXJCLENBQXBCO0FBQ0EsUUFBTXVHLFNBQVMsR0FBR3pHLE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixxQ0FBckIsQ0FBbEI7QUFDQSxRQUFNRCxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixrQ0FBckIsQ0FBWjtBQUVBRixTQUFPLENBQUNNLGdCQUFSLENBQXlCLE9BQXpCLEVBQW1DQyxDQUFELElBQU87QUFDdkNBLEtBQUMsQ0FBQ0ksY0FBRjs7QUFFQUYsb0JBQU1pRyxNQUFOLENBQWF6RyxHQUFiLEVBQWtCO0FBQUV1QixVQUFJLEVBQUU7QUFBRW1GLG1CQUFXLEVBQUVGO0FBQWY7QUFBUixLQUFsQixFQUNHN0YsSUFESCxDQUNRLE1BQU07QUFBRUUsWUFBTSxDQUFDQyxRQUFQLENBQWdCdUQsT0FBaEIsQ0FBd0JuRSxXQUF4QjtBQUF1QyxLQUR2RDtBQUVELEdBTEQ7QUFNRCxDQVpEOztrQkFjZXFHLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1JLFlBQU4sQ0FBbUI7QUFDakJ6QixhQUFXLENBQUMwQixPQUFELEVBQVU7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0EsT0FBTCxDQUFhdkcsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBS3dHLE1BQUwsQ0FBWVIsSUFBWixDQUFpQixJQUFqQixDQUF4QztBQUNBLFNBQUtTLGFBQUwsR0FBcUJwRSxRQUFRLENBQUN0QyxhQUFULENBQXVCLEtBQUt3RyxPQUFMLENBQWFyQixPQUFiLENBQXFCd0IsUUFBNUMsQ0FBckI7QUFDQSxTQUFLRixNQUFMO0FBQ0Q7O0FBRURBLFFBQU0sR0FBRztBQUNQLFFBQUksS0FBS0QsT0FBTCxDQUFhSSxPQUFqQixFQUEwQjtBQUN4QixXQUFLRixhQUFMLENBQW1CRyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsRUFBbkM7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLSixhQUFMLENBQW1CRyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGOztBQWRnQjs7a0JBaUJKUCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBLE1BQU1RLG1CQUFOLENBQTBCO0FBQ3hCakMsYUFBVyxHQUFHO0FBQ1osU0FBS2tDLGFBQUwsR0FBcUIxRSxRQUFRLENBQUN0QyxhQUFULENBQXVCLHlCQUF2QixDQUFyQjtBQUNBLFNBQUtpSCxTQUFMLEdBQWlCLEtBQUtELGFBQUwsQ0FBbUJoSCxhQUFuQixDQUFpQyxLQUFqQyxDQUFqQjtBQUNBLFNBQUtrSCxnQkFBTCxHQUF3QixLQUFLRixhQUFMLENBQW1CbkgsWUFBbkIsQ0FBZ0MsTUFBaEMsQ0FBeEI7QUFDQSxTQUFLc0gsZUFBTCxHQUF1QixLQUFLRixTQUFMLENBQWVwSCxZQUFmLENBQTRCLEtBQTVCLENBQXZCO0FBRUF5QyxZQUFRLENBQUNPLGdCQUFULENBQTBCLGlEQUExQixFQUE2RXpCLE9BQTdFLENBQXNGZ0csSUFBRCxJQUFVO0FBQzdGQSxVQUFJLENBQUNuSCxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxNQUFNLEtBQUtvSCxRQUFMLEVBQXRDO0FBQ0QsS0FGRDtBQUlBLFNBQUtBLFFBQUw7QUFDRDs7QUFFREMsa0JBQWdCLEdBQUc7QUFDakIsVUFBTUMsS0FBSyxHQUFHakYsUUFBUSxDQUFDTyxnQkFBVCxDQUEyQjtBQUM3QztBQUNBO0FBQ0EsS0FIa0IsQ0FBZDtBQUtBLFdBQU8sQ0FBQyxHQUFHMEUsS0FBSixFQUFXQyxHQUFYLENBQWU5SCxFQUFFLElBQUlBLEVBQUUsQ0FBQ3dDLEtBQXhCLEVBQStCdUYsSUFBL0IsQ0FBb0MsR0FBcEMsQ0FBUDtBQUNEOztBQUVEQyxtQkFBaUIsQ0FBQ0MsT0FBRCxFQUFVO0FBQ3pCLFFBQUlDLFNBQVMsR0FBRyxLQUFLVixnQkFBckI7QUFDQSxRQUFJVyxRQUFRLEdBQUcsS0FBS1YsZUFBcEI7QUFDQSxVQUFNQyxJQUFJLEdBQUc5RSxRQUFRLENBQUN0QyxhQUFULENBQXdCO0FBQ3pDLG1EQUFtRDJILE9BQVE7QUFDM0Qsc0RBQXNEQSxPQUFRO0FBQzlELEtBSGlCLENBQWI7O0FBS0EsUUFBSVAsSUFBSixFQUFVO0FBQ1IsWUFBTVUsTUFBTSxHQUFHVixJQUFJLENBQUN0RCxPQUFMLENBQWEsNkJBQWIsQ0FBZjtBQUNBOEQsZUFBUyxHQUFHRSxNQUFNLENBQUM5SCxhQUFQLENBQXFCLEdBQXJCLEVBQTBCSCxZQUExQixDQUF1QyxNQUF2QyxDQUFaO0FBQ0FnSSxjQUFRLEdBQUdDLE1BQU0sQ0FBQzlILGFBQVAsQ0FBcUIsS0FBckIsRUFBNEJILFlBQTVCLENBQXlDLHNCQUF6QyxDQUFYO0FBQ0Q7O0FBRUQsV0FBTztBQUFFK0gsZUFBRjtBQUFhQztBQUFiLEtBQVA7QUFDRDs7QUFFRFIsVUFBUSxHQUFHO0FBQ1QsVUFBTVUsR0FBRyxHQUFHLEtBQUtMLGlCQUFMLENBQXVCLEtBQUtKLGdCQUFMLEVBQXZCLENBQVo7QUFDQSxTQUFLTixhQUFMLENBQW1CM0MsWUFBbkIsQ0FBZ0MsTUFBaEMsRUFBd0MwRCxHQUFHLENBQUNILFNBQTVDO0FBQ0EsU0FBS1gsU0FBTCxDQUFlNUMsWUFBZixDQUE0QixLQUE1QixFQUFtQzBELEdBQUcsQ0FBQ0YsUUFBdkM7QUFDRDs7QUE1Q3VCOztrQkErQ1hkLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBLE1BQU1pQiwwQkFBMEIsR0FBRyxTQUFTQSwwQkFBVCxHQUFzQztBQUN2RTFGLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsaURBQTFCLEVBQTZFekIsT0FBN0UsQ0FBc0ZnRyxJQUFELElBQVU7QUFDN0ZBLFFBQUksQ0FBQ25ILGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU07QUFDcEMsVUFBSWdJLFFBQVEsR0FBRyxFQUFmO0FBRUEzRixjQUFRLENBQUNPLGdCQUFULENBQTBCLG9EQUExQixFQUFnRnpCLE9BQWhGLENBQXlGekIsT0FBRCxJQUFhO0FBQ25HLGNBQU1nRSxNQUFNLEdBQUdoRSxPQUFmO0FBQ0EsY0FBTXVJLE1BQU0sR0FBR3ZFLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDd0UsYUFBUixDQUFOLENBQTZCakcsS0FBNUM7QUFDQStGLGdCQUFRLElBQUssU0FBUXRFLE1BQU0sQ0FBQzlELFlBQVAsQ0FBb0IsYUFBcEIsQ0FBbUMsS0FBSXFJLE1BQU8sSUFBbkU7QUFDRCxPQUpEO0FBTUEsWUFBTUUsS0FBSyxHQUFHOUYsUUFBUSxDQUFDdEMsYUFBVCxDQUF1QiwwQkFBdkIsRUFBbURBLGFBQW5ELENBQWlFaUksUUFBakUsRUFBMkVwSSxZQUEzRSxDQUF3RixZQUF4RixDQUFkOztBQUVBLFVBQUl1SSxLQUFLLEtBQUtoRixTQUFkLEVBQXlCO0FBQ3ZCZCxnQkFBUSxDQUFDdEMsYUFBVCxDQUF1Qix5QkFBdkIsRUFBa0R1QixTQUFsRCxHQUE4RDZHLEtBQTlEO0FBQ0E5RixnQkFBUSxDQUFDdEMsYUFBVCxDQUF1QixxQkFBdkIsRUFBOEN3RSxlQUE5QyxDQUE4RCxVQUE5RDtBQUNELE9BSEQsTUFHTztBQUNMbEMsZ0JBQVEsQ0FBQ3RDLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEdUIsU0FBbEQsR0FBOERlLFFBQVEsQ0FBQ3RDLGFBQVQsQ0FBdUIsMEJBQXZCLEVBQW1ESCxZQUFuRCxDQUFnRSx1QkFBaEUsQ0FBOUQ7QUFDQXlDLGdCQUFRLENBQUN0QyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q3FFLFlBQTlDLENBQTJELFVBQTNELEVBQXVFLFVBQXZFO0FBQ0Q7QUFDRixLQWxCRDtBQW1CRCxHQXBCRDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTWdFLDJCQUEyQixHQUFHLFNBQVNBLDJCQUFULEdBQXVDO0FBQ3pFL0YsVUFBUSxDQUFDTyxnQkFBVCxDQUEwQixnREFBMUIsRUFBNEV6QixPQUE1RSxDQUFxRmdHLElBQUQsSUFBVTtBQUM1RkEsUUFBSSxDQUFDbkgsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBaUNDLENBQUQsSUFBTztBQUNyQyxZQUFNa0ksS0FBSyxHQUFHaEIsSUFBSSxDQUFDdEQsT0FBTCxDQUFhLElBQWIsRUFBbUI5RCxhQUFuQixDQUFpQyxpQ0FBakMsRUFBb0V1QixTQUFsRjtBQUNBZSxjQUFRLENBQUN0QyxhQUFULENBQXVCLHlCQUF2QixFQUFrRHVCLFNBQWxELEdBQThENkcsS0FBOUQ7QUFDRCxLQUhEO0FBSUQsR0FMRDtBQU1ELENBUEQ7O0FBU0EsTUFBTUUsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQyxRQUFNQyxxQkFBcUIsR0FBR2pHLFFBQVEsQ0FBQ2tHLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGO0FBQ0EsUUFBTUMscUJBQXFCLEdBQUduRyxRQUFRLENBQUNrRyxjQUFULENBQXdCLHlCQUF4QixLQUFzRCxJQUFwRjs7QUFFQSxNQUFJRCxxQkFBSixFQUEyQjtBQUN6QlAsOEJBQTBCO0FBQzNCLEdBRkQsTUFFTyxJQUFJUyxxQkFBSixFQUEyQjtBQUNoQ0osK0JBQTJCO0FBQzVCO0FBQ0YsQ0FURDs7a0JBV2VDLG9COzs7Ozs7Ozs7Ozs7OztBQ3REZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUE5QkE7O0FBUUE7O0FBRUE7QUFzQkE3SCxNQUFNLENBQUNpSSxNQUFQLEdBQWdCQyxlQUFoQjtBQUNBbEksTUFBTSxDQUFDbUksUUFBUCxHQUFrQkMsd0JBQWxCLEM7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVMvQyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxVQUFzQzRJLGlDQUFPLENBQUMseUVBQUQsQ0FBRCxvQ0FBWTVJLENBQVo7QUFBQTtBQUFBO0FBQUEsb0dBQTVDLEdBQTJELFNBQTNEO0FBQTBKLENBQXhLLFlBQThLLFVBQVM2SSxDQUFULEVBQVc7QUFBQyxNQUFJQyxNQUFNLEdBQUMsRUFBWDtBQUFjRCxHQUFDLENBQUNFLE1BQUYsQ0FBU0QsTUFBVCxFQUFnQjtBQUFDRSxXQUFPLEVBQUM7QUFBVCxHQUFoQixHQUFtQ0YsTUFBTSxDQUFDRyxLQUFQLEdBQWE7QUFBQ0MsVUFBTSxFQUFDO0FBQVIsR0FBaEQ7QUFBNEQsTUFBSUMsTUFBTSxHQUFDO0FBQUNDLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFVBQUl4RCxDQUFDLEdBQUM7QUFBQ3lELGFBQUssRUFBQ1IsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVU4SSxLQUFWO0FBQVAsT0FBTjs7QUFBZ0MsVUFBR0MsT0FBTyxDQUFDQyxZQUFSLElBQXNCRCxPQUFPLENBQUNFLE9BQVIsSUFBaUJGLE9BQU8sQ0FBQ0csS0FBbEQsRUFBd0Q7QUFBQyxZQUFJekosQ0FBQyxHQUFDb0MsUUFBUSxDQUFDc0gsZUFBVCxDQUF5QkMsV0FBekIsR0FBcUNwSixNQUFNLENBQUNxSixVQUFsRDtBQUE2RGhFLFNBQUMsQ0FBQ2lFLE1BQUYsR0FBU3RKLE1BQU0sQ0FBQ3VKLFdBQVAsR0FBbUI5SixDQUE1QjtBQUE4QixPQUFwSixNQUF5SjRGLENBQUMsQ0FBQ2lFLE1BQUYsR0FBU2hCLENBQUMsQ0FBQ3RJLE1BQUQsQ0FBRCxDQUFVc0osTUFBVixFQUFUOztBQUE0QixhQUFPakUsQ0FBUDtBQUFTO0FBQW5QLEdBQVg7QUFBQSxNQUFnUTBELE9BQU8sSUFBRXRKLENBQUMsR0FBQytKLFNBQVMsQ0FBQ0MsU0FBWixFQUFzQjtBQUFDQyxNQUFFLEVBQUMsRUFBRSxDQUFDMUosTUFBTSxDQUFDMkosV0FBUixJQUFxQixDQUFDLENBQUQsS0FBS2xLLENBQUMsQ0FBQ3VFLE9BQUYsQ0FBVSxPQUFWLENBQTVCLEtBQWlENEYsQ0FBQyxDQUFDLE9BQUQsQ0FBdEQ7QUFBZ0VDLFNBQUssRUFBQyxDQUFDLENBQUQsR0FBR3BLLENBQUMsQ0FBQ3VFLE9BQUYsQ0FBVSxPQUFWLENBQUgsS0FBd0IsQ0FBQyxDQUFDaEUsTUFBTSxDQUFDOEosS0FBVCxJQUFnQkEsS0FBSyxDQUFDckIsT0FBdEIsSUFBK0JzQixVQUFVLENBQUNELEtBQUssQ0FBQ3JCLE9BQU4sRUFBRCxDQUF6QyxJQUE0RCxJQUFwRixDQUF0RTtBQUFnS3VCLFVBQU0sRUFBQyxDQUFDLENBQUQsR0FBR3ZLLENBQUMsQ0FBQ3VFLE9BQUYsQ0FBVSxjQUFWLENBQUgsSUFBOEI0RixDQUFDLENBQUMsY0FBRCxDQUF0TTtBQUF1TlYsU0FBSyxFQUFDLENBQUMsQ0FBRCxHQUFHekosQ0FBQyxDQUFDdUUsT0FBRixDQUFVLE9BQVYsQ0FBSCxJQUF1QixDQUFDLENBQUQsS0FBS3ZFLENBQUMsQ0FBQ3VFLE9BQUYsQ0FBVSxPQUFWLENBQTVCLElBQWdENEYsQ0FBQyxDQUFDLEtBQUQsQ0FBOVE7QUFBc1JaLGdCQUFZLEVBQUMsQ0FBQyxDQUFDdkosQ0FBQyxDQUFDd0ssS0FBRixDQUFRLHVCQUFSLENBQXJTO0FBQXNVQyxVQUFNLEVBQUMsQ0FBQyxDQUFELEdBQUd6SyxDQUFDLENBQUN1RSxPQUFGLENBQVUsUUFBVixDQUFILElBQXdCNEYsQ0FBQyxDQUFDLFNBQUQsQ0FBdFc7QUFBa1hPLGdCQUFZLEVBQUMsQ0FBQyxDQUFELEdBQUcxSyxDQUFDLENBQUN1RSxPQUFGLENBQVUsTUFBVixDQUFILElBQXNCNEYsQ0FBQyxDQUFDLE9BQUQsQ0FBdFo7QUFBZ2FYLFdBQU8sRUFBQyxDQUFDLENBQUQsR0FBR3hKLENBQUMsQ0FBQ3VFLE9BQUYsQ0FBVSxTQUFWLENBQUgsSUFBeUI0RixDQUFDLENBQUMsVUFBRCxDQUFsYztBQUErY1EsWUFBUSxFQUFDLENBQUMsQ0FBRCxHQUFHM0ssQ0FBQyxDQUFDdUUsT0FBRixDQUFVLFVBQVYsQ0FBSCxJQUEwQjRGLENBQUMsQ0FBQyxXQUFEO0FBQW5mLEdBQXhCLENBQXZRO0FBQUEsTUFBa3lCbkssQ0FBbHlCOztBQUFveUIsV0FBU21LLENBQVQsQ0FBV3ZFLENBQVgsRUFBYTtBQUFDLFFBQUlnRixDQUFDLEdBQUMsSUFBSUMsTUFBSixDQUFXakYsQ0FBQyxHQUFDLFdBQWIsRUFBMEJrRixJQUExQixDQUErQjlLLENBQS9CLENBQU47QUFBd0MsV0FBTSxDQUFDNEssQ0FBRCxJQUFJTixVQUFVLENBQUNNLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBcEI7QUFBMkI7O0FBQUEsTUFBSUcsTUFBTSxHQUFDQyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQTNCOztBQUFpQyxXQUFTQyxZQUFULENBQXNCdkYsQ0FBdEIsRUFBd0I7QUFBQyxXQUFNLFlBQVUsT0FBT0EsQ0FBakIsR0FBbUJBLENBQW5CLEdBQXFCLFFBQU1BLENBQU4sR0FBUSxFQUFSLEdBQVdBLENBQUMsR0FBQyxFQUF4QztBQUEyQzs7QUFBQSxNQUFJd0YsQ0FBQyxHQUFDO0FBQUNDLGFBQVMsRUFBQyxtQkFBU3pGLENBQVQsRUFBVztBQUFDLGFBQU9BLENBQUMsSUFBRSxNQUFJQSxDQUFDLENBQUMwRixRQUFoQjtBQUF5QixLQUFoRDtBQUFpREMsVUFBTSxFQUFDO0FBQUNDLGdCQUFVLEVBQUMsb0JBQVM1RixDQUFULEVBQVc7QUFBQyxlQUFNLENBQUNBLENBQUMsR0FBQ3VGLFlBQVksQ0FBQ3ZGLENBQUQsQ0FBZixLQUFxQkEsQ0FBQyxDQUFDNkYsTUFBRixDQUFTLENBQVQsRUFBWUMsV0FBWixLQUEwQjlGLENBQUMsQ0FBQ3NGLEtBQUYsQ0FBUSxDQUFSLENBQXJEO0FBQWdFO0FBQXhGO0FBQXhELEdBQU47QUFBeUpyQyxHQUFDLENBQUN6RyxRQUFRLENBQUNzSCxlQUFWLENBQUQsQ0FBNEJpQyxFQUE1QixDQUErQiwyQkFBL0IsRUFBMkQsVUFBUy9GLENBQVQsRUFBVztBQUFDLFFBQUk1RixDQUFKOztBQUFNLFFBQUc0RixDQUFDLENBQUNnRyxhQUFGLENBQWdCQyxVQUFoQixHQUEyQjdMLENBQUMsR0FBQzRGLENBQUMsQ0FBQ2dHLGFBQUYsQ0FBZ0JDLFVBQWhCLEdBQTJCLEdBQXhELEdBQTREakcsQ0FBQyxDQUFDZ0csYUFBRixDQUFnQkUsTUFBaEIsS0FBeUI5TCxDQUFDLEdBQUMsQ0FBQzRGLENBQUMsQ0FBQ2dHLGFBQUYsQ0FBZ0JFLE1BQWpCLEdBQXdCLENBQW5ELENBQTVELEVBQWtIOUwsQ0FBckgsRUFBdUg7QUFBQyxVQUFJNEssQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDdkYsS0FBRixDQUFRLG1CQUFSLENBQU47QUFBbUN1RixPQUFDLENBQUNqRCxDQUFDLENBQUN2RCxNQUFILENBQUQsQ0FBWWlFLE9BQVosQ0FBb0JzRSxDQUFwQixFQUFzQjVLLENBQXRCLEdBQXlCNEssQ0FBQyxDQUFDbUIsb0JBQUYsTUFBMEJuRyxDQUFDLENBQUNvRyxlQUFGLEVBQW5ELEVBQXVFcEIsQ0FBQyxDQUFDcUIsa0JBQUYsTUFBd0JyRyxDQUFDLENBQUN4RixjQUFGLEVBQS9GO0FBQWtIO0FBQUMsR0FBM1Y7QUFBNlYsTUFBSThMLEdBQUcsR0FBQztBQUFDQyxVQUFNLEVBQUMsZ0JBQVN2RyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUk0SyxDQUFDLEdBQUMvQixDQUFDLENBQUNFLE1BQUYsQ0FBUztBQUFDYyxjQUFNLEVBQUMsQ0FBQyxDQUFUO0FBQVdSLGFBQUssRUFBQyxDQUFDO0FBQWxCLE9BQVQsRUFBOEIrQyxTQUFTLENBQUMsQ0FBRCxDQUFULElBQWMsRUFBNUMsQ0FBTixFQUFzREMsQ0FBQyxHQUFDeEQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZL0ksQ0FBWixDQUF4RCxFQUF1RXNNLENBQUMsR0FBQyxDQUF6RSxFQUEyRUMsQ0FBQyxHQUFDLENBQTdFLEVBQStFQyxDQUFDLEdBQUM1QixDQUFDLENBQUN2QixLQUFuRixFQUF5Rm9ELENBQUMsR0FBQzdCLENBQUMsQ0FBQ2YsTUFBakcsRUFBd0csSUFBRTBDLENBQUYsS0FBTUMsQ0FBQyxJQUFFSCxDQUFDLENBQUNoRCxLQUFGLEdBQVF6RCxDQUFDLENBQUN5RCxLQUFiLElBQW9Cb0QsQ0FBQyxJQUFFSixDQUFDLENBQUN4QyxNQUFGLEdBQVNqRSxDQUFDLENBQUNpRSxNQUF4QyxDQUF4RyxHQUF5SjtBQUFDLFlBQUk2QyxDQUFDLEdBQUMsQ0FBTjtBQUFBLFlBQVFDLENBQUMsR0FBQyxDQUFWO0FBQVlILFNBQUMsSUFBRUgsQ0FBQyxDQUFDaEQsS0FBRixHQUFRekQsQ0FBQyxDQUFDeUQsS0FBYixLQUFxQnFELENBQUMsR0FBQzlHLENBQUMsQ0FBQ3lELEtBQUYsR0FBUWdELENBQUMsQ0FBQ2hELEtBQWpDLEdBQXdDb0QsQ0FBQyxJQUFFSixDQUFDLENBQUN4QyxNQUFGLEdBQVNqRSxDQUFDLENBQUNpRSxNQUFkLEtBQXVCOEMsQ0FBQyxHQUFDL0csQ0FBQyxDQUFDaUUsTUFBRixHQUFTd0MsQ0FBQyxDQUFDeEMsTUFBcEMsQ0FBeEMsRUFBb0Z5QyxDQUFDLEdBQUNNLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxDQUFULEVBQVdDLENBQVgsQ0FBdEYsRUFBb0dOLENBQUMsR0FBQztBQUFDaEQsZUFBSyxFQUFDckosQ0FBQyxDQUFDcUosS0FBRixHQUFRaUQsQ0FBZjtBQUFpQnpDLGdCQUFNLEVBQUM3SixDQUFDLENBQUM2SixNQUFGLEdBQVN5QztBQUFqQyxTQUF0RyxFQUEwSUMsQ0FBQyxFQUEzSTtBQUE4STs7QUFBQSxhQUFPRixDQUFDLENBQUNoRCxLQUFGLEdBQVF1RCxJQUFJLENBQUNFLEdBQUwsQ0FBU1QsQ0FBQyxDQUFDaEQsS0FBWCxFQUFpQixDQUFqQixDQUFSLEVBQTRCZ0QsQ0FBQyxDQUFDeEMsTUFBRixHQUFTK0MsSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsQ0FBQ3hDLE1BQVgsRUFBa0IsQ0FBbEIsQ0FBckMsRUFBMER3QyxDQUFqRTtBQUFtRTtBQUE3WSxHQUFSO0FBQXVaeEQsR0FBQyxDQUFDRSxNQUFGLENBQVNGLENBQUMsQ0FBQ2tFLE1BQVgsRUFBa0I7QUFBQ0MscUJBQWlCLEVBQUMsMkJBQVNwSCxDQUFULEVBQVc1RixDQUFYLEVBQWE0SyxDQUFiLEVBQWV5QixDQUFmLEVBQWlCQyxDQUFqQixFQUFtQjtBQUFDLGFBQU9ELENBQUMsSUFBRXJNLENBQUMsSUFBRXNNLENBQUwsQ0FBRCxHQUFTdE0sQ0FBVCxHQUFXQSxDQUFYLEdBQWE0SyxDQUFwQjtBQUFzQixLQUE3RDtBQUE4RHFDLG9CQUFnQixFQUFDLDBCQUFTckgsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhNEssQ0FBYixFQUFleUIsQ0FBZixFQUFpQkMsQ0FBakIsRUFBbUI7QUFBQyxhQUFNLENBQUNELENBQUQsR0FBR08sSUFBSSxDQUFDTSxHQUFMLENBQVNsTixDQUFDLEdBQUNzTSxDQUFGLElBQUtNLElBQUksQ0FBQ08sRUFBTCxHQUFRLENBQWIsQ0FBVCxDQUFILEdBQTZCZCxDQUE3QixHQUErQnpCLENBQXJDO0FBQXVDLEtBQTFJO0FBQTJJd0MscUJBQWlCLEVBQUMsMkJBQVN4SCxDQUFULEVBQVc1RixDQUFYLEVBQWE0SyxDQUFiLEVBQWV5QixDQUFmLEVBQWlCQyxDQUFqQixFQUFtQjtBQUFDLGFBQU9ELENBQUMsR0FBQ08sSUFBSSxDQUFDUyxHQUFMLENBQVNyTixDQUFDLEdBQUNzTSxDQUFGLElBQUtNLElBQUksQ0FBQ08sRUFBTCxHQUFRLENBQWIsQ0FBVCxDQUFGLEdBQTRCdkMsQ0FBbkM7QUFBcUM7QUFBdE4sR0FBbEI7QUFBMk8sTUFBSTBDLE9BQU8sSUFBRUMsQ0FBQyxHQUFDbkwsUUFBUSxDQUFDdUQsYUFBVCxDQUF1QixLQUF2QixDQUFGLEVBQWdDNkgsQ0FBQyxHQUFDLHdCQUF3QkMsS0FBeEIsQ0FBOEIsR0FBOUIsQ0FBbEMsRUFBcUU7QUFBQ0MsVUFBTSxHQUFFQyxFQUFFLEdBQUN2TCxRQUFRLENBQUN1RCxhQUFULENBQXVCLFFBQXZCLENBQUgsRUFBb0MsRUFBRSxDQUFDZ0ksRUFBRSxDQUFDQyxVQUFKLElBQWdCLENBQUNELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FBbkIsQ0FBdEMsQ0FBUDtBQUFzRkMsT0FBRyxFQUFDO0FBQUNDLGVBQVMsRUFBQ0MsQ0FBQyxDQUFDLFdBQUQsQ0FBWjtBQUEwQkMsZUFBUyxFQUFDRCxDQUFDLENBQUMsV0FBRCxDQUFyQztBQUFtREUsY0FBUSxFQUFDLGtCQUFTckksQ0FBVCxFQUFXO0FBQUMsZUFBT21JLENBQUMsQ0FBQ25JLENBQUQsRUFBRyxRQUFILENBQVI7QUFBcUI7QUFBN0YsS0FBMUY7QUFBeUxzSSxPQUFHLEVBQUMsQ0FBQyxDQUFDOUwsUUFBUSxDQUFDK0wsZUFBWCxJQUE0QixDQUFDLENBQUMvTCxRQUFRLENBQUMrTCxlQUFULENBQXlCLDRCQUF6QixFQUFzRCxLQUF0RCxFQUE2REMsYUFBeFI7QUFBc1NDLFNBQUssRUFBQyxZQUFVO0FBQUMsVUFBRztBQUFDLGVBQU0sQ0FBQyxFQUFFLGtCQUFpQjlOLE1BQWpCLElBQXlCQSxNQUFNLENBQUMrTixhQUFQLElBQXNCbE0sUUFBUSxZQUFZa00sYUFBckUsQ0FBUDtBQUEyRixPQUEvRixDQUErRixPQUFNMUksQ0FBTixFQUFRO0FBQUMsZUFBTSxDQUFDLENBQVA7QUFBUztBQUFDLEtBQTdIO0FBQTVTLEdBQXZFLENBQVg7QUFBQSxNQUFnZ0IrSCxFQUFoZ0I7QUFBQSxNQUFtZ0JKLENBQW5nQjtBQUFBLE1BQXFnQkMsQ0FBcmdCOztBQUF1Z0IsV0FBU08sQ0FBVCxDQUFXbkksQ0FBWCxFQUFhNUYsQ0FBYixFQUFlO0FBQUMsUUFBSTRLLENBQUMsR0FBQ2hGLENBQUMsQ0FBQzZGLE1BQUYsQ0FBUyxDQUFULEVBQVlDLFdBQVosS0FBMEI5RixDQUFDLENBQUMySSxNQUFGLENBQVMsQ0FBVCxDQUFoQztBQUE0QyxXQUFPLFVBQVMzSSxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUk0SyxDQUFSLElBQWFoRixDQUFiLEVBQWUsSUFBRyxLQUFLLENBQUwsS0FBUzJILENBQUMsQ0FBQzVHLEtBQUYsQ0FBUWYsQ0FBQyxDQUFDZ0YsQ0FBRCxDQUFULENBQVosRUFBMEIsT0FBTSxhQUFXNUssQ0FBWCxJQUFjNEYsQ0FBQyxDQUFDZ0YsQ0FBRCxDQUFyQjs7QUFBeUIsYUFBTSxDQUFDLENBQVA7QUFBUyxLQUF6RixDQUEwRixDQUFDaEYsQ0FBQyxHQUFDLEdBQUYsR0FBTTRILENBQUMsQ0FBQ2pHLElBQUYsQ0FBT3FELENBQUMsR0FBQyxHQUFULENBQU4sR0FBb0JBLENBQXJCLEVBQXdCNkMsS0FBeEIsQ0FBOEIsR0FBOUIsQ0FBMUYsRUFBNkh6TixDQUE3SCxDQUFQO0FBQXVJOztBQUFBc04sU0FBTyxDQUFDa0IsaUJBQVIsR0FBMEIsWUFBVTtBQUFDbEIsV0FBTyxDQUFDbUIsV0FBUixHQUFvQm5CLE9BQU8sQ0FBQ2UsS0FBUixLQUFnQi9FLE9BQU8sQ0FBQ0MsWUFBUixJQUFzQkQsT0FBTyxDQUFDRSxPQUE5QixJQUF1Q0YsT0FBTyxDQUFDcUIsUUFBL0MsSUFBeURyQixPQUFPLENBQUNvQixZQUFqRSxJQUErRSxDQUFDLG1CQUFtQmdFLElBQW5CLENBQXdCM0UsU0FBUyxDQUFDNEUsUUFBbEMsQ0FBaEcsQ0FBcEI7QUFBaUssR0FBdE0sRUFBdU1yQixPQUFPLENBQUNrQixpQkFBUixFQUF2TTs7QUFBbU8sTUFBSUksVUFBVSxHQUFDLFNBQVhBLFVBQVcsR0FBVTtBQUFDLFdBQU8sS0FBS0MsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkI5RCxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCNkQsSUFBdEIsQ0FBMkIzQyxTQUEzQixDQUEzQixDQUFQO0FBQXlFLEdBQW5HOztBQUFvRyxXQUFTNEMsTUFBVCxHQUFpQjtBQUFDLFdBQU8sS0FBS0gsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkIvRCxNQUFNLENBQUNnRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCLENBQVA7QUFBMEQ7O0FBQUEsV0FBUzZDLFVBQVQsQ0FBb0I1QyxDQUFwQixFQUFzQjtBQUFDLFFBQUlDLENBQUMsR0FBQztBQUFDNEMsVUFBSSxFQUFDO0FBQU4sS0FBTjtBQUFxQixXQUFPckcsQ0FBQyxDQUFDc0csSUFBRixDQUFPQyxLQUFQLEVBQWEsVUFBU3hKLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFVBQUk0SyxDQUFDLEdBQUM1SyxDQUFDLENBQUNpQixJQUFGLENBQU9vTCxDQUFQLENBQU47QUFBZ0J6QixPQUFDLEtBQUcsQ0FBQzBCLENBQUMsR0FBQzFCLENBQUgsRUFBTXNFLElBQU4sR0FBV3RKLENBQVgsRUFBYTBHLENBQUMsQ0FBQzVNLEdBQUYsR0FBTTJNLENBQXRCLENBQUQ7QUFBMEIsS0FBckUsR0FBdUVDLENBQTlFO0FBQWdGOztBQUFBLFdBQVMrQyxlQUFULENBQXlCekosQ0FBekIsRUFBMkI7QUFBQyxRQUFJNUYsQ0FBQyxHQUFDLENBQUM0RixDQUFDLElBQUUsRUFBSixFQUFRN0IsT0FBUixDQUFnQixPQUFoQixFQUF3QixFQUF4QixFQUE0QnlHLEtBQTVCLENBQWtDLGdCQUFsQyxDQUFOO0FBQTBELFdBQU94SyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3NQLFdBQUwsRUFBRCxHQUFvQixJQUE1QjtBQUFpQzs7QUFBQXpHLEdBQUMsQ0FBQ0UsTUFBRixDQUFTNkYsVUFBVSxDQUFDM0QsU0FBcEIsRUFBOEI7QUFBQ3NFLFlBQVEsRUFBQztBQUFDQyxrQkFBWSxFQUFDLGtCQUFpQixJQUFJQyxLQUFKO0FBQS9CLEtBQVY7QUFBb0RaLGNBQVUsRUFBQyxvQkFBU2pKLENBQVQsRUFBVzVGLENBQVgsRUFBYTRLLENBQWIsRUFBZTtBQUFDLFdBQUsvQyxHQUFMLEdBQVNnQixDQUFDLENBQUNqRCxDQUFELENBQUQsQ0FBSyxDQUFMLENBQVQsRUFBaUIsS0FBSzhKLGVBQUwsR0FBcUIxUCxDQUF0QyxFQUF3QyxLQUFLMlAsYUFBTCxHQUFtQi9FLENBQTNELEVBQTZELEtBQUtnRixRQUFMLEdBQWMsQ0FBQyxDQUE1RSxFQUE4RSxLQUFLQyxPQUFMLEdBQWFoSCxDQUFDLENBQUNFLE1BQUYsQ0FBUztBQUFDK0csY0FBTSxFQUFDLGNBQVI7QUFBdUJDLHlCQUFpQixFQUFDO0FBQXpDLE9BQVQsRUFBdUQzRCxTQUFTLENBQUMsQ0FBRCxDQUFULElBQWMsRUFBckUsQ0FBM0YsRUFBb0ssS0FBS21ELFFBQUwsQ0FBY0MsWUFBZCxJQUE0QixhQUFXLEtBQUtLLE9BQUwsQ0FBYUMsTUFBcEQsR0FBMkQsS0FBS2pJLEdBQUwsQ0FBU21JLFFBQVQsSUFBbUIsZ0JBQWNuSCxDQUFDLENBQUNxRyxJQUFGLENBQU8sS0FBS3JILEdBQUwsQ0FBUzJILFlBQWhCLENBQWpDLEdBQStEUyxVQUFVLENBQUNwSCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLFlBQUUsS0FBS3JJLEdBQUwsQ0FBUzJILFlBQVgsR0FBd0IsS0FBS1csT0FBTCxFQUF4QixHQUF1QyxLQUFLeFAsS0FBTCxFQUF2QztBQUFvRCxPQUF2RSxFQUF3RSxJQUF4RSxDQUFELENBQXpFLElBQTBKa0ksQ0FBQyxDQUFDLEtBQUtoQixHQUFOLENBQUQsQ0FBWTlCLElBQVosQ0FBaUIsT0FBakIsRUFBeUI4QyxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDRCxrQkFBVSxDQUFDcEgsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFLdlAsS0FBTDtBQUFhLFNBQWhDLEVBQWlDLElBQWpDLENBQUQsQ0FBVjtBQUFtRCxPQUF0RSxFQUF1RSxJQUF2RSxDQUF6QixHQUF1RyxLQUFLeVAsU0FBTCxHQUFlLENBQUMsQ0FBQyxHQUFELEVBQUssRUFBTCxDQUFELEVBQVUsQ0FBQyxHQUFELEVBQUssRUFBTCxDQUFWLEVBQW1CLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBbkIsRUFBNkIsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUE3QixDQUF0SCxFQUE4SixLQUFLQyxLQUFMLEdBQVcsQ0FBekssRUFBMkssS0FBS0MsS0FBTCxHQUFXLENBQXRMLEVBQXdMLEtBQUtDLE1BQUwsR0FBWSxLQUFLSCxTQUFMLENBQWUsS0FBS0MsS0FBcEIsRUFBMkIsQ0FBM0IsQ0FBcE0sRUFBa08sS0FBS0csSUFBTCxFQUE1WCxDQUEzRCxHQUFvY1AsVUFBVSxDQUFDcEgsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUtPLFFBQWIsRUFBc0IsSUFBdEIsQ0FBRCxDQUFsbkI7QUFBZ3BCLEtBQS90QjtBQUFndUJELFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUtFLFFBQUwsR0FBY1QsVUFBVSxDQUFDcEgsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQyxZQUFHLElBQUUsS0FBS3JJLEdBQUwsQ0FBUzJILFlBQWQsRUFBMkIsS0FBS1csT0FBTCxHQUEzQixLQUE4QztBQUFDLGNBQUcsS0FBS0csS0FBTCxJQUFZLEtBQUtDLE1BQWpCLEVBQXdCLEtBQUtWLE9BQUwsQ0FBYUUsaUJBQWIsSUFBZ0MsS0FBS08sS0FBTCxJQUFZLEtBQUtULE9BQUwsQ0FBYUUsaUJBQXpELElBQTRFLENBQUMsS0FBS1ksaUJBQWxGLEtBQXNHLEtBQUtBLGlCQUFMLEdBQXVCLENBQUMsQ0FBeEIsRUFBMEIsS0FBS0YsUUFBTCxFQUFoSSxDQUF4QixFQUF5SyxLQUFLSCxLQUFMLEdBQVcsS0FBS0YsU0FBTCxDQUFlLEtBQUtDLEtBQXBCLEVBQTJCLENBQTNCLENBQXZMLEVBQXFOO0FBQUMsZ0JBQUcsQ0FBQyxLQUFLRCxTQUFMLENBQWUsS0FBS0MsS0FBTCxHQUFXLENBQTFCLENBQUosRUFBaUMsT0FBTyxLQUFLLEtBQUsxUCxLQUFMLEVBQVo7QUFBeUIsaUJBQUswUCxLQUFMLElBQWEsS0FBS0UsTUFBTCxHQUFZLEtBQUtILFNBQUwsQ0FBZSxLQUFLQyxLQUFwQixFQUEyQixDQUEzQixDQUF6QjtBQUF1RDs7QUFBQSxlQUFLRyxJQUFMO0FBQVk7QUFBQyxPQUF0WixFQUF1WixJQUF2WixDQUFELEVBQThaLEtBQUtELE1BQW5hLENBQXhCO0FBQW1jLEtBQW5yQztBQUFvckNFLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFVBQUk3SyxDQUFDLEdBQUMsSUFBSTZKLEtBQUosRUFBTjtBQUFnQixPQUFDLEtBQUttQixZQUFMLEdBQWtCaEwsQ0FBbkIsRUFBc0I0QyxNQUF0QixHQUE2QkssQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQ3RLLFNBQUMsQ0FBQzRDLE1BQUYsR0FBUyxZQUFVLENBQUUsQ0FBckIsRUFBc0IsS0FBSytHLFFBQUwsQ0FBY0MsWUFBZCxLQUE2QixLQUFLM0gsR0FBTCxDQUFTMkgsWUFBVCxHQUFzQjVKLENBQUMsQ0FBQ3lELEtBQXhCLEVBQThCLEtBQUt4QixHQUFMLENBQVNnSixhQUFULEdBQXVCakwsQ0FBQyxDQUFDaUUsTUFBcEYsQ0FBdEIsRUFBa0gsS0FBS3NHLE9BQUwsRUFBbEg7QUFBaUksT0FBcEosRUFBcUosSUFBckosQ0FBN0IsRUFBd0x2SyxDQUFDLENBQUNrTCxPQUFGLEdBQVVqSSxDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS3ZQLEtBQWIsRUFBbUIsSUFBbkIsQ0FBbE0sRUFBMk5pRixDQUFDLENBQUNtTCxHQUFGLEdBQU0sS0FBS2xKLEdBQUwsQ0FBU2tKLEdBQTFPO0FBQThPLEtBQXQ4QztBQUF1OENDLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtKLFlBQUwsS0FBb0IsS0FBS0EsWUFBTCxDQUFrQnBJLE1BQWxCLEdBQXlCLFlBQVUsQ0FBRSxDQUF6RCxHQUEyRCxLQUFLa0ksUUFBTCxLQUFnQk8sWUFBWSxDQUFDLEtBQUtQLFFBQU4sQ0FBWixFQUE0QixLQUFLQSxRQUFMLEdBQWMsSUFBMUQsQ0FBM0Q7QUFBMkgsS0FBbmxEO0FBQW9sRFAsV0FBTyxFQUFDLG1CQUFVO0FBQUMsV0FBS2UsY0FBTCxLQUFzQixLQUFLQSxjQUFMLEdBQW9CLENBQUMsQ0FBckIsRUFBdUIsS0FBS3RCLFFBQUwsR0FBYyxDQUFDLENBQXRDLEVBQXdDLEtBQUtGLGVBQUwsQ0FBcUIsSUFBckIsQ0FBOUQ7QUFBMEYsS0FBanNEO0FBQWtzRC9PLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUt3USxZQUFMLEtBQW9CLEtBQUtBLFlBQUwsR0FBa0IsQ0FBQyxDQUFuQixFQUFxQixLQUFLSCxLQUFMLEVBQXJCLEVBQWtDLEtBQUtyQixhQUFMLElBQW9CLEtBQUtBLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBMUU7QUFBb0c7QUFBdnpELEdBQTlCLEdBQXcxRDlHLENBQUMsQ0FBQ0UsTUFBRixDQUFTaUcsTUFBTSxDQUFDL0QsU0FBaEIsRUFBMEI7QUFBQzRELGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUt1QyxPQUFMLEdBQWEsRUFBYjtBQUFnQixLQUF2QztBQUF3Q0MsT0FBRyxFQUFDLGFBQVN6TCxDQUFULEVBQVc1RixDQUFYLEVBQWE0SyxDQUFiLEVBQWU7QUFBQyxXQUFLd0csT0FBTCxDQUFheEwsQ0FBYixJQUFnQnFLLFVBQVUsQ0FBQ2pRLENBQUQsRUFBRzRLLENBQUgsQ0FBMUI7QUFBZ0MsS0FBNUY7QUFBNkZySSxPQUFHLEVBQUMsYUFBU3FELENBQVQsRUFBVztBQUFDLGFBQU8sS0FBS3dMLE9BQUwsQ0FBYXhMLENBQWIsQ0FBUDtBQUF1QixLQUFwSTtBQUFxSTBMLFNBQUssRUFBQyxlQUFTMUwsQ0FBVCxFQUFXO0FBQUNBLE9BQUMsR0FBQyxLQUFLd0wsT0FBTCxDQUFheEwsQ0FBYixNQUFrQnFMLFlBQVksQ0FBQyxLQUFLRyxPQUFMLENBQWF4TCxDQUFiLENBQUQsQ0FBWixFQUE4QixPQUFPLEtBQUt3TCxPQUFMLENBQWF4TCxDQUFiLENBQXZELENBQUQsR0FBeUUsS0FBSzJMLFFBQUwsRUFBMUU7QUFBMEYsS0FBalA7QUFBa1BBLFlBQVEsRUFBQyxvQkFBVTtBQUFDMUksT0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUtpQyxPQUFaLEVBQW9CLFVBQVN4TCxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ2lSLG9CQUFZLENBQUNqUixDQUFELENBQVo7QUFBZ0IsT0FBbEQsR0FBb0QsS0FBS29SLE9BQUwsR0FBYSxFQUFqRTtBQUFvRTtBQUExVSxHQUExQixDQUF4MUQ7O0FBQStyRSxNQUFJSSxJQUFJLEdBQUM7QUFBQ0MsV0FBTyxFQUFDLGlCQUFTN0wsQ0FBVCxFQUFXO0FBQUMsYUFBTSxvQkFBb0I4SSxJQUFwQixDQUF5QjlJLENBQXpCLENBQU47QUFBa0M7QUFBdkQsR0FBVDtBQUFBLE1BQWtFd0osS0FBSyxHQUFDO0FBQUNzQyxTQUFLLEVBQUM7QUFBQ0MsZ0JBQVUsRUFBQywyQkFBWjtBQUF3Q0MsWUFBTSxFQUFDLGdCQUFTaE0sQ0FBVCxFQUFXO0FBQUMsZUFBTSxDQUFDLENBQUQsR0FBR2lELENBQUMsQ0FBQ2dKLE9BQUYsQ0FBVXhDLGVBQWUsQ0FBQ3pKLENBQUQsQ0FBekIsRUFBNkIsS0FBSytMLFVBQUwsQ0FBZ0JsRSxLQUFoQixDQUFzQixHQUF0QixDQUE3QixDQUFUO0FBQWtFLE9BQTdIO0FBQThIeE0sVUFBSSxFQUFDLGNBQVMyRSxDQUFULEVBQVc7QUFBQyxlQUFNLENBQUMsQ0FBQyxLQUFLZ00sTUFBTCxFQUFGLElBQWlCO0FBQUNFLG1CQUFTLEVBQUN6QyxlQUFlLENBQUN6SixDQUFEO0FBQTFCLFNBQXZCO0FBQXNEO0FBQXJNLEtBQVA7QUFBOE1tTSxTQUFLLEVBQUM7QUFBQ0gsWUFBTSxFQUFDLGdCQUFTaE0sQ0FBVCxFQUFXO0FBQUMsWUFBSTVGLENBQUMsR0FBQywyQ0FBMkM4SyxJQUEzQyxDQUFnRGxGLENBQWhELENBQU47QUFBeUQsZUFBTSxFQUFFLENBQUM1RixDQUFELElBQUksQ0FBQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBUixLQUFjQSxDQUFDLENBQUMsQ0FBRCxDQUFyQjtBQUF5QixPQUF0RztBQUF1R2lCLFVBQUksRUFBQyxjQUFTMkUsQ0FBVCxFQUFXO0FBQUMsWUFBSTVGLENBQUMsR0FBQyxLQUFLNFIsTUFBTCxDQUFZaE0sQ0FBWixDQUFOO0FBQXFCLGVBQU0sQ0FBQyxDQUFDNUYsQ0FBRixJQUFLO0FBQUNnUyxZQUFFLEVBQUNoUztBQUFKLFNBQVg7QUFBa0I7QUFBL0osS0FBcE47QUFBcVhpUyxXQUFPLEVBQUM7QUFBQ0wsWUFBTSxFQUFDLGdCQUFTaE0sQ0FBVCxFQUFXO0FBQUMsWUFBSTVGLENBQUMsR0FBQyx1RUFBdUU4SyxJQUF2RSxDQUE0RWxGLENBQTVFLENBQU47QUFBcUYsZUFBTzVGLENBQUMsSUFBRUEsQ0FBQyxDQUFDLENBQUQsQ0FBSixHQUFRQSxDQUFDLENBQUMsQ0FBRCxDQUFULEdBQWEsRUFBRSxFQUFFQSxDQUFDLEdBQUMsMkVBQTJFOEssSUFBM0UsQ0FBZ0ZsRixDQUFoRixDQUFKLEtBQXlGLENBQUM1RixDQUFDLENBQUMsQ0FBRCxDQUE3RixLQUFtR0EsQ0FBQyxDQUFDLENBQUQsQ0FBeEg7QUFBNEgsT0FBck87QUFBc09pQixVQUFJLEVBQUMsY0FBUzJFLENBQVQsRUFBVztBQUFDLFlBQUk1RixDQUFDLEdBQUMsS0FBSzRSLE1BQUwsQ0FBWWhNLENBQVosQ0FBTjtBQUFxQixlQUFNLENBQUMsQ0FBQzVGLENBQUYsSUFBSztBQUFDZ1MsWUFBRSxFQUFDaFM7QUFBSixTQUFYO0FBQWtCO0FBQTlSO0FBQTdYLEdBQXhFO0FBQUEsTUFBc3VCa1MsY0FBYyxHQUFDLFlBQVU7QUFBQyxhQUFTdE0sQ0FBVCxHQUFZO0FBQUMsYUFBTyxLQUFLaUosVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkIvRCxNQUFNLENBQUNnRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCLENBQVA7QUFBMEQ7O0FBQUF2RCxLQUFDLENBQUNFLE1BQUYsQ0FBU25ELENBQUMsQ0FBQ3FGLFNBQVgsRUFBcUI7QUFBQzRELGdCQUFVLEVBQUMsb0JBQVNqSixDQUFULEVBQVc1RixDQUFYLEVBQWE0SyxDQUFiLEVBQWU7QUFBQyxhQUFLbEwsR0FBTCxHQUFTa0csQ0FBVCxFQUFXLEtBQUs4SixlQUFMLEdBQXFCMVAsQ0FBaEMsRUFBa0MsS0FBSzJQLGFBQUwsR0FBbUIvRSxDQUFyRCxFQUF1RCxLQUFLdUgsSUFBTCxFQUF2RDtBQUFtRSxPQUEvRjtBQUFnR0EsVUFBSSxFQUFDLGdCQUFVO0FBQUMsWUFBSXZNLENBQUMsR0FBQ3lHLENBQUMsQ0FBQzlKLEdBQUYsQ0FBTSxLQUFLN0MsR0FBWCxDQUFOO0FBQXNCLFlBQUdrRyxDQUFILEVBQUssT0FBTyxLQUFLOEosZUFBTCxDQUFxQjlKLENBQUMsQ0FBQzNFLElBQUYsQ0FBT3ZCLEdBQTVCLENBQVA7QUFBd0MsWUFBSU0sQ0FBQyxHQUFDLFVBQVFPLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixhQUFXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0I0UixRQUE1QyxHQUFxRCxHQUFyRCxHQUF5RCxFQUFqRSxJQUFxRSxHQUEzRTtBQUFBLFlBQStFeEgsQ0FBQyxHQUFDcUUsVUFBVSxDQUFDLEtBQUt2UCxHQUFOLENBQVYsQ0FBcUJzUyxFQUF0RztBQUF5RyxhQUFLSyxJQUFMLEdBQVV4SixDQUFDLENBQUN5SixPQUFGLENBQVV0UyxDQUFDLEdBQUMsa0NBQUYsR0FBcUNBLENBQXJDLEdBQXVDLGNBQXZDLEdBQXNENEssQ0FBdEQsR0FBd0QsYUFBbEUsRUFBZ0YvQixDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVztBQUFDLGNBQUdBLENBQUMsSUFBRUEsQ0FBQyxDQUFDMk0sYUFBUixFQUFzQjtBQUFDLGdCQUFJdlMsQ0FBQyxHQUFDO0FBQUNOLGlCQUFHLEVBQUNrRyxDQUFDLENBQUMyTTtBQUFQLGFBQU47QUFBNEJsRyxhQUFDLENBQUNnRixHQUFGLENBQU0sS0FBSzNSLEdBQVgsRUFBZU0sQ0FBZixHQUFrQixLQUFLMFAsZUFBTCxDQUFxQjFQLENBQUMsQ0FBQ04sR0FBdkIsQ0FBbEI7QUFBOEMsV0FBakcsTUFBc0csS0FBS2lRLGFBQUw7QUFBcUIsU0FBL0ksRUFBZ0osSUFBaEosQ0FBaEYsQ0FBVjtBQUFpUCxPQUE3Z0I7QUFBOGdCcUIsV0FBSyxFQUFDLGlCQUFVO0FBQUMsYUFBS3FCLElBQUwsS0FBWSxLQUFLQSxJQUFMLENBQVVyQixLQUFWLElBQWtCLEtBQUtxQixJQUFMLEdBQVUsSUFBeEM7QUFBOEM7QUFBN2tCLEtBQXJCO0FBQXFtQixRQUFJaEcsQ0FBQyxHQUFDO0FBQUNtRyxXQUFLLEVBQUMsRUFBUDtBQUFValEsU0FBRyxFQUFDLGFBQVNxRCxDQUFULEVBQVc7QUFBQyxhQUFJLElBQUk1RixDQUFDLEdBQUMsSUFBTixFQUFXNEssQ0FBQyxHQUFDLENBQWpCLEVBQW1CQSxDQUFDLEdBQUMsS0FBSzRILEtBQUwsQ0FBV2xRLE1BQWhDLEVBQXVDc0ksQ0FBQyxFQUF4QyxFQUEyQyxLQUFLNEgsS0FBTCxDQUFXNUgsQ0FBWCxLQUFlLEtBQUs0SCxLQUFMLENBQVc1SCxDQUFYLEVBQWNsTCxHQUFkLEtBQW9Ca0csQ0FBbkMsS0FBdUM1RixDQUFDLEdBQUMsS0FBS3dTLEtBQUwsQ0FBVzVILENBQVgsQ0FBekM7O0FBQXdELGVBQU81SyxDQUFQO0FBQVMsT0FBdEk7QUFBdUlxUixTQUFHLEVBQUMsYUFBU3pMLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLGFBQUtZLE1BQUwsQ0FBWWdGLENBQVosR0FBZSxLQUFLNE0sS0FBTCxDQUFXQyxJQUFYLENBQWdCO0FBQUMvUyxhQUFHLEVBQUNrRyxDQUFMO0FBQU8zRSxjQUFJLEVBQUNqQjtBQUFaLFNBQWhCLENBQWY7QUFBK0MsT0FBeE07QUFBeU1ZLFlBQU0sRUFBQyxnQkFBU2dGLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSTVGLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLd1MsS0FBTCxDQUFXbFEsTUFBekIsRUFBZ0N0QyxDQUFDLEVBQWpDLEVBQW9DLEtBQUt3UyxLQUFMLENBQVd4UyxDQUFYLEtBQWUsS0FBS3dTLEtBQUwsQ0FBV3hTLENBQVgsRUFBY04sR0FBZCxLQUFvQmtHLENBQW5DLElBQXNDLE9BQU8sS0FBSzRNLEtBQUwsQ0FBV3hTLENBQVgsQ0FBN0M7QUFBMkQ7QUFBM1QsS0FBTjtBQUFtVSxXQUFPNEYsQ0FBUDtBQUFTLEdBQW5nQyxFQUFydkI7QUFBQSxNQUEydkQ4TSxVQUFVLEdBQUMsWUFBVTtBQUFDLGFBQVM5TSxDQUFULEdBQVk7QUFBQyxhQUFPLEtBQUtpSixVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQi9ELE1BQU0sQ0FBQ2dFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsQ0FBUDtBQUEwRDs7QUFBQXZELEtBQUMsQ0FBQ0UsTUFBRixDQUFTbkQsQ0FBQyxDQUFDcUYsU0FBWCxFQUFxQjtBQUFDNEQsZ0JBQVUsRUFBQyxvQkFBU2pKLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLGFBQUtOLEdBQUwsR0FBU2tHLENBQVQsRUFBVyxLQUFLK00sUUFBTCxHQUFjM1MsQ0FBekIsRUFBMkIsS0FBS21TLElBQUwsRUFBM0I7QUFBdUMsT0FBakU7QUFBa0VBLFVBQUksRUFBQyxnQkFBVTtBQUFDLFlBQUl2TSxDQUFDLEdBQUN5RyxDQUFDLENBQUM5SixHQUFGLENBQU0sS0FBSzdDLEdBQVgsQ0FBTjtBQUFzQixZQUFHa0csQ0FBSCxFQUFLLE9BQU8sS0FBSytNLFFBQUwsQ0FBYy9NLENBQUMsQ0FBQzNFLElBQWhCLENBQVA7QUFBNkIsWUFBSWpCLENBQUMsR0FBQyxVQUFRTyxNQUFNLENBQUNDLFFBQVAsSUFBaUIsYUFBV0QsTUFBTSxDQUFDQyxRQUFQLENBQWdCNFIsUUFBNUMsR0FBcUQsR0FBckQsR0FBeUQsRUFBakUsSUFBcUUsR0FBM0U7QUFBQSxZQUErRXhILENBQUMsR0FBQ3FFLFVBQVUsQ0FBQyxLQUFLdlAsR0FBTixDQUFWLENBQXFCc1MsRUFBdEc7QUFBeUcsYUFBS0ssSUFBTCxHQUFVeEosQ0FBQyxDQUFDeUosT0FBRixDQUFVdFMsQ0FBQyxHQUFDLGtDQUFGLEdBQXFDQSxDQUFyQyxHQUF1QyxjQUF2QyxHQUFzRDRLLENBQXRELEdBQXdELGdEQUFsRSxFQUFtSC9CLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUMsY0FBSTVGLENBQUMsR0FBQztBQUFDNFMsc0JBQVUsRUFBQztBQUFDdkosbUJBQUssRUFBQ3pELENBQUMsQ0FBQ3lELEtBQVQ7QUFBZVEsb0JBQU0sRUFBQ2pFLENBQUMsQ0FBQ2lFO0FBQXhCO0FBQVosV0FBTjtBQUFtRHdDLFdBQUMsQ0FBQ2dGLEdBQUYsQ0FBTSxLQUFLM1IsR0FBWCxFQUFlTSxDQUFmLEdBQWtCLEtBQUsyUyxRQUFMLElBQWUsS0FBS0EsUUFBTCxDQUFjM1MsQ0FBZCxDQUFqQztBQUFrRCxTQUF6SCxFQUEwSCxJQUExSCxDQUFuSCxDQUFWO0FBQThQLE9BQWpmO0FBQWtmZ1IsV0FBSyxFQUFDLGlCQUFVO0FBQUMsYUFBS3FCLElBQUwsS0FBWSxLQUFLQSxJQUFMLENBQVVyQixLQUFWLElBQWtCLEtBQUtxQixJQUFMLEdBQVUsSUFBeEM7QUFBOEM7QUFBampCLEtBQXJCO0FBQXlrQixRQUFJaEcsQ0FBQyxHQUFDO0FBQUNtRyxXQUFLLEVBQUMsRUFBUDtBQUFValEsU0FBRyxFQUFDLGFBQVNxRCxDQUFULEVBQVc7QUFBQyxhQUFJLElBQUk1RixDQUFDLEdBQUMsSUFBTixFQUFXNEssQ0FBQyxHQUFDLENBQWpCLEVBQW1CQSxDQUFDLEdBQUMsS0FBSzRILEtBQUwsQ0FBV2xRLE1BQWhDLEVBQXVDc0ksQ0FBQyxFQUF4QyxFQUEyQyxLQUFLNEgsS0FBTCxDQUFXNUgsQ0FBWCxLQUFlLEtBQUs0SCxLQUFMLENBQVc1SCxDQUFYLEVBQWNsTCxHQUFkLEtBQW9Ca0csQ0FBbkMsS0FBdUM1RixDQUFDLEdBQUMsS0FBS3dTLEtBQUwsQ0FBVzVILENBQVgsQ0FBekM7O0FBQXdELGVBQU81SyxDQUFQO0FBQVMsT0FBdEk7QUFBdUlxUixTQUFHLEVBQUMsYUFBU3pMLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLGFBQUtZLE1BQUwsQ0FBWWdGLENBQVosR0FBZSxLQUFLNE0sS0FBTCxDQUFXQyxJQUFYLENBQWdCO0FBQUMvUyxhQUFHLEVBQUNrRyxDQUFMO0FBQU8zRSxjQUFJLEVBQUNqQjtBQUFaLFNBQWhCLENBQWY7QUFBK0MsT0FBeE07QUFBeU1ZLFlBQU0sRUFBQyxnQkFBU2dGLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSTVGLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLd1MsS0FBTCxDQUFXbFEsTUFBekIsRUFBZ0N0QyxDQUFDLEVBQWpDLEVBQW9DLEtBQUt3UyxLQUFMLENBQVd4UyxDQUFYLEtBQWUsS0FBS3dTLEtBQUwsQ0FBV3hTLENBQVgsRUFBY04sR0FBZCxLQUFvQmtHLENBQW5DLElBQXNDLE9BQU8sS0FBSzRNLEtBQUwsQ0FBV3hTLENBQVgsQ0FBN0M7QUFBMkQ7QUFBM1QsS0FBTjtBQUFtVSxXQUFPNEYsQ0FBUDtBQUFTLEdBQXYrQixFQUF0d0Q7QUFBQSxNQUFndkZpTixPQUFPLEdBQUM7QUFBQ0MsWUFBUSxFQUFDO0FBQUNDLGFBQU8sRUFBQztBQUFDMU8sZUFBTyxFQUFDO0FBQUMyTyxjQUFJLEVBQUMsQ0FBTjtBQUFRQyxjQUFJLEVBQUM7QUFBYixTQUFUO0FBQXlCQyxlQUFPLEVBQUM7QUFBQ0YsY0FBSSxFQUFDLEdBQU47QUFBVUMsY0FBSSxFQUFDO0FBQWYsU0FBakM7QUFBcUQxUyxjQUFNLEVBQUM7QUFBQ3lTLGNBQUksRUFBQyxHQUFOO0FBQVVDLGNBQUksRUFBQztBQUFmLFNBQTVEO0FBQWdGRSxpQkFBUyxFQUFDO0FBQUNILGNBQUksRUFBQyxHQUFOO0FBQVVJLGVBQUssRUFBQztBQUFoQixTQUExRjtBQUErR0Msa0JBQVUsRUFBQztBQUFDQyxlQUFLLEVBQUM7QUFBUDtBQUExSCxPQUFUO0FBQThJQyxjQUFRLEVBQUM7QUFBQ0MsWUFBSSxFQUFDLENBQUMsQ0FBUDtBQUFTQyxhQUFLLEVBQUMsQ0FBQyxDQUFoQjtBQUFrQkMsV0FBRyxFQUFDLENBQUM7QUFBdkIsT0FBdko7QUFBaUxDLGtCQUFZLEVBQUMsY0FBOUw7QUFBNk1DLFVBQUksRUFBQyxDQUFDLENBQW5OO0FBQXFOQyxhQUFPLEVBQUMsZUFBN047QUFBNk9DLGNBQVEsRUFBQyxDQUFDLENBQXZQO0FBQXlQcFIsYUFBTyxFQUFDO0FBQUNxUixhQUFLLEVBQUMsQ0FBQztBQUFSLE9BQWpRO0FBQTRRQyxhQUFPLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFwUjtBQUEwUkMsY0FBUSxFQUFDLENBQUMsQ0FBcFM7QUFBc1NDLFVBQUksRUFBQyxRQUEzUztBQUFvVGhCLGFBQU8sRUFBQyxDQUFDLENBQTdUO0FBQStUaUIsa0JBQVksRUFBQyxHQUE1VTtBQUFnVkMsVUFBSSxFQUFDLENBQUMsQ0FBdFY7QUFBd1ZmLGdCQUFVLEVBQUMsWUFBblc7QUFBZ1hnQixRQUFFLEVBQUMsU0FBblg7QUFBNlhDLGFBQU8sRUFBQyxHQUFyWTtBQUF5WXZDLFdBQUssRUFBQztBQUFDd0MsZ0JBQVEsRUFBQyxDQUFWO0FBQVlDLFdBQUcsRUFBQyxDQUFoQjtBQUFrQkMsYUFBSyxFQUFDLENBQXhCO0FBQTBCQyxjQUFNLEVBQUMsQ0FBakM7QUFBbUNDLGdCQUFRLEVBQUMsQ0FBNUM7QUFBOENmLFlBQUksRUFBQztBQUFuRCxPQUEvWTtBQUFxYzNCLGFBQU8sRUFBQztBQUFDc0MsZ0JBQVEsRUFBQyxDQUFWO0FBQVlLLGdCQUFRLEVBQUMsQ0FBckI7QUFBdUJDLG1CQUFXLEVBQUMsQ0FBbkM7QUFBcUNDLFVBQUUsRUFBQyxDQUF4QztBQUEwQ0Msc0JBQWMsRUFBQyxDQUF6RDtBQUEyRG5CLFlBQUksRUFBQyxDQUFoRTtBQUFrRW9CLHNCQUFjLEVBQUMsQ0FBakY7QUFBbUZDLFdBQUcsRUFBQyxDQUF2RjtBQUF5RkMsVUFBRSxFQUFDO0FBQTVGLE9BQTdjO0FBQW1qQkMsd0JBQWtCLEVBQUM7QUFBQ3pELGFBQUssRUFBQyxFQUFQO0FBQVVLLGFBQUssRUFBQztBQUFDMUksZUFBSyxFQUFDO0FBQVAsU0FBaEI7QUFBNkI0SSxlQUFPLEVBQUM7QUFBQzVJLGVBQUssRUFBQyxJQUFQO0FBQVlRLGdCQUFNLEVBQUM7QUFBbkI7QUFBckM7QUFBdGtCLEtBQVY7QUFBK29CdUwsVUFBTSxFQUFDLGdCQUFTeFAsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhNEssQ0FBYixFQUFlO0FBQUNBLE9BQUMsR0FBQ0EsQ0FBQyxJQUFFLEVBQUwsRUFBUSxDQUFDaEYsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBTixFQUFVc08sSUFBVixHQUFldE8sQ0FBQyxDQUFDc08sSUFBRixJQUFRLEtBQUtwQixRQUFMLENBQWNvQixJQUE3QztBQUFrRCxVQUFJN0gsQ0FBQyxHQUFDekcsQ0FBQyxDQUFDc08sSUFBRixHQUFPckwsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZRCxNQUFNLENBQUNHLEtBQVAsQ0FBYXJELENBQUMsQ0FBQ3NPLElBQWYsS0FBc0JwTCxNQUFNLENBQUNHLEtBQVAsQ0FBYSxLQUFLNkosUUFBTCxDQUFjb0IsSUFBM0IsQ0FBbEMsQ0FBUCxHQUEyRSxFQUFqRjtBQUFBLFVBQW9GNUgsQ0FBQyxHQUFDekQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBWixFQUFlLEtBQUsrSixRQUFwQixFQUE2QnpHLENBQTdCLENBQXRGO0FBQXNIQyxPQUFDLENBQUM2SSxrQkFBRixLQUF1Qm5WLENBQUMsSUFBRXNNLENBQUMsQ0FBQzZJLGtCQUFGLENBQXFCblYsQ0FBckIsQ0FBSCxLQUE2QnNNLENBQUMsR0FBQ3pELENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQUMsQ0FBVixFQUFZLEVBQVosRUFBZXVELENBQUMsQ0FBQzZJLGtCQUFGLENBQXFCblYsQ0FBckIsQ0FBZixFQUF1Q3NNLENBQXZDLENBQS9CLEdBQTBFLE9BQU9BLENBQUMsQ0FBQzZJLGtCQUExRztBQUE4SCxVQUFJNUksQ0FBQyxHQUFDMUQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBWixFQUFldUQsQ0FBZixFQUFpQjFHLENBQWpCLENBQU47O0FBQTBCLFVBQUcwSCxPQUFPLENBQUNtQixXQUFSLElBQXFCLGFBQVdsQyxDQUFDLENBQUM4SCxFQUFsQyxLQUF1QzlILENBQUMsQ0FBQzhILEVBQUYsR0FBSyxTQUE1QyxHQUF1RCxDQUFDLENBQUM5SCxDQUFDLENBQUN3RyxPQUFILElBQVl6SixPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBcEMsTUFBeUNzQyxDQUFDLENBQUN3RyxPQUFGLEdBQVUsRUFBVixFQUFhbEssQ0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUsyRCxRQUFMLENBQWNDLE9BQXJCLEVBQTZCLFVBQVMvUyxDQUFULEVBQVc0RixDQUFYLEVBQWE7QUFBQ2lELFNBQUMsQ0FBQ3NHLElBQUYsQ0FBTzVDLENBQUMsQ0FBQ3dHLE9BQUYsQ0FBVS9TLENBQVYsSUFBYTZJLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWW5ELENBQVosQ0FBcEIsRUFBbUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMyRyxXQUFDLENBQUN3RyxPQUFGLENBQVUvUyxDQUFWLEVBQWE0RixDQUFiLElBQWdCLENBQWhCO0FBQWtCLFNBQWpFO0FBQW1FLE9BQTlHLENBQWIsRUFBNkgyRyxDQUFDLENBQUMyRyxPQUFGLEdBQVUsQ0FBQyxDQUFqTCxDQUF2RCxFQUEyTzNHLENBQUMsQ0FBQ2dILFFBQUYsS0FBYSxjQUFZMUssQ0FBQyxDQUFDcUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDZ0gsUUFBVCxDQUFaLEtBQWlDaEgsQ0FBQyxDQUFDZ0gsUUFBRixHQUFXLEVBQVgsRUFBYzFLLENBQUMsQ0FBQ3NHLElBQUYsQ0FBTyxLQUFLMkQsUUFBTCxDQUFjUyxRQUFyQixFQUE4QixVQUFTM04sQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUN1TSxTQUFDLENBQUNnSCxRQUFGLENBQVczTixDQUFYLElBQWMsQ0FBQyxDQUFmO0FBQWlCLE9BQTdELENBQS9DLEdBQStHLFlBQVU1RixDQUFWLElBQWEsY0FBWUEsQ0FBekIsSUFBNEI2SSxDQUFDLENBQUNFLE1BQUYsQ0FBU3dELENBQUMsQ0FBQ2dILFFBQVgsRUFBb0I7QUFBQ0MsWUFBSSxFQUFDLENBQUMsQ0FBUDtBQUFTQyxhQUFLLEVBQUMsQ0FBQztBQUFoQixPQUFwQixDQUF4SixDQUEzTyxFQUE0YSxDQUFDbEgsQ0FBQyxDQUFDdUgsUUFBSCxJQUFheEcsT0FBTyxDQUFDbUIsV0FBckIsR0FBaUNsQyxDQUFDLENBQUN1SCxRQUFGLEdBQVc7QUFBQ3VCLFNBQUMsRUFBQyxDQUFDLENBQUo7QUFBTUMsU0FBQyxFQUFDLENBQUM7QUFBVCxPQUE1QyxHQUF3RCxjQUFZek0sQ0FBQyxDQUFDcUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDdUgsUUFBVCxDQUFaLEtBQWlDdkgsQ0FBQyxDQUFDdUgsUUFBRixHQUFXO0FBQUN1QixTQUFDLEVBQUMsQ0FBQyxDQUFKO0FBQU1DLFNBQUMsRUFBQyxDQUFDO0FBQVQsT0FBNUMsQ0FBcGUsRUFBNmhCLFlBQVV0VixDQUFWLElBQWEsY0FBWUEsQ0FBekIsS0FBNkJ1TSxDQUFDLENBQUNnSixPQUFGLEdBQVUsQ0FBQyxDQUF4QyxDQUE3aEIsRUFBd2tCLENBQUNqTSxPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLEdBQVcsQ0FBdkIsSUFBMEJxRCxPQUFPLENBQUNtQixXQUFuQyxNQUFrRGxDLENBQUMsQ0FBQzRHLFNBQUYsR0FBWSxDQUFDLENBQWIsRUFBZTVHLENBQUMsQ0FBQzhHLFVBQUYsR0FBYSxDQUFDLENBQS9FLENBQXhrQixFQUEwcEIsY0FBWXJULENBQVosS0FBZ0J1TSxDQUFDLENBQUNsRCxLQUFGLElBQVMsQ0FBQ2tELENBQUMsQ0FBQ2lKLFFBQVosS0FBdUJqSixDQUFDLENBQUNpSixRQUFGLEdBQVdqSixDQUFDLENBQUNsRCxLQUFwQyxHQUEyQ2tELENBQUMsQ0FBQzFDLE1BQUYsSUFBVSxDQUFDMEMsQ0FBQyxDQUFDa0osU0FBYixLQUF5QmxKLENBQUMsQ0FBQ2tKLFNBQUYsR0FBWWxKLENBQUMsQ0FBQzFDLE1BQXZDLENBQTNELENBQTFwQixFQUFxd0IsQ0FBQzBDLENBQUMsQ0FBQzRHLFNBQUgsSUFBYyxjQUFZdEssQ0FBQyxDQUFDcUcsSUFBRixDQUFPM0MsQ0FBQyxDQUFDNEcsU0FBVCxDQUFseUIsRUFBc3pCO0FBQUMsWUFBSTNHLENBQUMsR0FBQyxDQUFDLENBQVA7O0FBQVMsZ0JBQU94TSxDQUFQO0FBQVUsZUFBSSxTQUFKO0FBQWN3TSxhQUFDLEdBQUMsVUFBUWpNLE1BQU0sQ0FBQ0MsUUFBUCxJQUFpQixhQUFXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0I0UixRQUE1QyxHQUFxRCxHQUFyRCxHQUF5RCxFQUFqRSxJQUFxRSxHQUFyRSxHQUF5RSx1QkFBekUsR0FBaUd4SCxDQUFDLENBQUNvSCxFQUFuRyxHQUFzRyxRQUF4RztBQUFpSDs7QUFBTSxlQUFJLE9BQUo7QUFBWSxlQUFJLE9BQUo7QUFBWXhGLGFBQUMsR0FBQyxDQUFDLENBQUg7QUFBdks7O0FBQTRLRCxTQUFDLENBQUM0RyxTQUFGLEdBQVkzRyxDQUFaO0FBQWM7O0FBQUEsYUFBT0QsQ0FBUDtBQUFTO0FBQXorRCxHQUF4dkY7QUFBQSxNQUFtdUptSixPQUFPLEdBQUM7QUFBQzdHLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUs4RyxLQUFMLElBQWEsS0FBS0MsT0FBTCxHQUFhLENBQUMsQ0FBM0I7QUFBNkIsS0FBcEQ7QUFBcURELFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtsVyxPQUFMLEdBQWFvSixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLFlBQXBCLEVBQWtDNUMsSUFBbEMsR0FBeUNsUixNQUF6QyxDQUFnRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsdUJBQXBCLENBQWhELENBQWIsRUFBMkcsS0FBS3BXLE9BQUwsQ0FBYWtNLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0I5QyxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLFlBQUl0SyxDQUFDLEdBQUNrUSxLQUFLLENBQUNDLElBQVo7QUFBaUJuUSxTQUFDLElBQUVBLENBQUMsQ0FBQ29RLElBQUwsSUFBV3BRLENBQUMsQ0FBQ29RLElBQUYsQ0FBT25HLE9BQVAsQ0FBZW5OLE9BQTFCLElBQW1DLENBQUNrRCxDQUFDLENBQUNvUSxJQUFGLENBQU9uRyxPQUFQLENBQWVuTixPQUFmLENBQXVCcVIsS0FBM0QsSUFBa0VrQyxNQUFNLENBQUNoRCxJQUFQLEVBQWxFO0FBQWdGLE9BQXBILEVBQXFILElBQXJILENBQXhCLENBQTNHLEVBQStQM0YsT0FBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLaFAsT0FBTCxDQUFhb1csUUFBYixDQUFzQixpQkFBdEIsQ0FBcFIsRUFBNlQsS0FBS3BXLE9BQUwsQ0FBYWtNLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQW9DLFVBQVMvRixDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDeEYsY0FBRjtBQUFtQixPQUFuRSxDQUE3VDtBQUFrWSxLQUF4YztBQUF5YzhWLFdBQU8sRUFBQyxpQkFBU3RRLENBQVQsRUFBVztBQUFDLFdBQUtzTyxJQUFMLElBQVcsS0FBS3pVLE9BQUwsQ0FBYTBXLFdBQWIsQ0FBeUIscUJBQW1CLEtBQUtqQyxJQUFqRCxDQUFYLEVBQWtFLEtBQUt6VSxPQUFMLENBQWFvVyxRQUFiLENBQXNCLHFCQUFtQmpRLENBQXpDLENBQWxFLEVBQThHLEtBQUtzTyxJQUFMLEdBQVV0TyxDQUF4SDtBQUEwSCxLQUF2bEI7QUFBd2xCd1EsVUFBTSxFQUFDLGtCQUFVO0FBQUN2TixPQUFDLENBQUN6RyxRQUFRLENBQUNpVSxJQUFWLENBQUQsQ0FBaUJ0VSxNQUFqQixDQUF3QixLQUFLdEMsT0FBN0I7QUFBc0MsS0FBaHBCO0FBQWlwQjZXLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUs3VyxPQUFMLENBQWE2VyxNQUFiO0FBQXNCLEtBQXpyQjtBQUEwckJ0RCxRQUFJLEVBQUMsY0FBU3BOLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFVBQUcsS0FBSzRWLE9BQVIsRUFBZ0JoUSxDQUFDLElBQUVBLENBQUMsRUFBSixDQUFoQixLQUEyQjtBQUFDLGFBQUtnUSxPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCLEtBQUtRLE1BQUwsRUFBaEIsRUFBOEIsS0FBS3RKLEdBQUwsRUFBOUI7QUFBeUMsWUFBSWxDLENBQUMsR0FBQ2tMLEtBQUssQ0FBQ0MsSUFBTixJQUFZRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQm5HLE9BQWhCLENBQXdCa0QsT0FBeEIsQ0FBZ0N4UyxNQUFoQyxDQUF1Q3lTLElBQW5ELElBQXlELENBQS9EO0FBQUEsWUFBaUUzRyxDQUFDLEdBQUMsQ0FBQyxhQUFXeEQsQ0FBQyxDQUFDcUcsSUFBRixDQUFPbFAsQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QjRLLENBQXhCLEtBQTRCLENBQS9GO0FBQWlHLGFBQUtuTCxPQUFMLENBQWE4VyxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JDLE1BQXRCLENBQTZCbkssQ0FBN0IsRUFBK0IsQ0FBL0IsRUFBaUN6RyxDQUFqQztBQUFvQztBQUFDLEtBQXg1QjtBQUF5NUJxTixRQUFJLEVBQUMsY0FBU3JOLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFVBQUcsS0FBSzRWLE9BQVIsRUFBZ0I7QUFBQyxZQUFJaEwsQ0FBQyxHQUFDa0wsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCbkcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ3hTLE1BQWhDLENBQXVDMFMsSUFBbkQsSUFBeUQsQ0FBL0Q7QUFBQSxZQUFpRTVHLENBQUMsR0FBQyxDQUFDLGFBQVd4RCxDQUFDLENBQUNxRyxJQUFGLENBQU9sUCxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCNEssQ0FBeEIsS0FBNEIsQ0FBL0Y7QUFBaUcsYUFBS25MLE9BQUwsQ0FBYThXLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkUsT0FBdEIsQ0FBOEJwSyxDQUFDLElBQUUsQ0FBakMsRUFBbUN4RCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGVBQUtvRyxNQUFMLElBQWMsS0FBS1YsT0FBTCxHQUFhLENBQUMsQ0FBNUIsRUFBOEJoUSxDQUFDLElBQUVBLENBQUMsRUFBbEM7QUFBcUMsU0FBeEQsRUFBeUQsSUFBekQsQ0FBbkM7QUFBbUcsT0FBck4sTUFBME5BLENBQUMsSUFBRUEsQ0FBQyxFQUFKO0FBQU8sS0FBN29DO0FBQThvQzhRLHVCQUFtQixFQUFDLCtCQUFVO0FBQUMsVUFBSXBLLENBQUMsR0FBQyxFQUFOO0FBQVMsYUFBT3pELENBQUMsQ0FBQ3NHLElBQUYsQ0FBTyxDQUFDLE9BQUQsRUFBUyxRQUFULENBQVAsRUFBMEIsVUFBU3ZKLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFlBQUk0SyxDQUFDLEdBQUM1SyxDQUFDLENBQUN1TyxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYzdDLFdBQWQsS0FBNEIxTCxDQUFDLENBQUN1TyxNQUFGLENBQVMsQ0FBVCxDQUFsQztBQUFBLFlBQThDbEMsQ0FBQyxHQUFDakssUUFBUSxDQUFDc0gsZUFBekQ7QUFBeUU0QyxTQUFDLENBQUN0TSxDQUFELENBQUQsR0FBSyxDQUFDc0osT0FBTyxDQUFDVyxFQUFSLEdBQVcyQyxJQUFJLENBQUNFLEdBQUwsQ0FBU1QsQ0FBQyxDQUFDLFdBQVN6QixDQUFWLENBQVYsRUFBdUJ5QixDQUFDLENBQUMsV0FBU3pCLENBQVYsQ0FBeEIsQ0FBWCxHQUFpRHRCLE9BQU8sQ0FBQ2lCLE1BQVIsR0FBZW5JLFFBQVEsQ0FBQ2lVLElBQVQsQ0FBYyxXQUFTekwsQ0FBdkIsQ0FBZixHQUF5Q3lCLENBQUMsQ0FBQyxXQUFTekIsQ0FBVixDQUE1RixLQUEyRyxDQUFoSDtBQUFrSCxPQUFuTyxHQUFxTzBCLENBQTVPO0FBQThPLEtBQXA2QztBQUFxNkNRLE9BQUcsRUFBQyxlQUFVO0FBQUMsVUFBSWxILENBQUo7O0FBQU0sVUFBRzBELE9BQU8sQ0FBQ0MsWUFBUixJQUFzQkQsT0FBTyxDQUFDaUIsTUFBOUIsSUFBc0NqQixPQUFPLENBQUNpQixNQUFSLEdBQWUsTUFBckQsS0FBOEQzRSxDQUFDLEdBQUMsS0FBSzhRLG1CQUFMLEVBQUYsRUFBNkIsS0FBS2pYLE9BQUwsQ0FBYW9PLEdBQWIsQ0FBaUJqSSxDQUFqQixDQUEzRixHQUFnSDBELE9BQU8sQ0FBQ1csRUFBUixJQUFZWCxPQUFPLENBQUNXLEVBQVIsR0FBVyxDQUExSSxFQUE0STtBQUFDLFlBQUlqSyxDQUFDLEdBQUNtSixNQUFNLENBQUNDLFFBQVAsRUFBTjtBQUF3QixhQUFLM0osT0FBTCxDQUFhb08sR0FBYixDQUFpQjtBQUFDaEUsZ0JBQU0sRUFBQzdKLENBQUMsQ0FBQzZKLE1BQVY7QUFBaUJSLGVBQUssRUFBQ3JKLENBQUMsQ0FBQ3FKO0FBQXpCLFNBQWpCO0FBQWtEOztBQUFBaUUsYUFBTyxDQUFDbUIsV0FBUixJQUFxQixDQUFDN0ksQ0FBdEIsSUFBeUIsS0FBS25HLE9BQUwsQ0FBYW9PLEdBQWIsQ0FBaUI7QUFBQ2hFLGNBQU0sRUFBQyxLQUFLNk0sbUJBQUwsR0FBMkI3TTtBQUFuQyxPQUFqQixDQUF6QjtBQUFzRjtBQUF2dUQsR0FBM3VKO0FBQUEsTUFBbzlNb00sTUFBTSxHQUFDO0FBQUNwSCxjQUFVLEVBQUMsc0JBQVU7QUFBQyxXQUFLOEgsTUFBTCxHQUFZLEVBQVosRUFBZSxLQUFLQSxNQUFMLENBQVkxRCxJQUFaLEdBQWlCcEssQ0FBQyxDQUFDLEVBQUQsQ0FBakMsRUFBc0MsS0FBSytOLEtBQUwsR0FBVyxFQUFqRCxFQUFvRCxLQUFLQyxTQUFMLEdBQWUsRUFBbkUsRUFBc0UsS0FBS0MsTUFBTCxHQUFZLENBQUMsQ0FBbkYsRUFBcUYsS0FBS0MsTUFBTCxHQUFZLElBQUkvSCxNQUFKLEVBQWpHLEVBQTRHLEtBQUsyRyxLQUFMLEVBQTVHLEVBQXlILEtBQUtPLE9BQUwsQ0FBYXJELE9BQU8sQ0FBQ0MsUUFBUixDQUFpQm9CLElBQTlCLENBQXpIO0FBQTZKLEtBQXBMO0FBQXFMeUIsU0FBSyxFQUFDLGlCQUFVO0FBQUMsVUFBRyxLQUFLbFcsT0FBTCxHQUFhb0osQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQix1QkFBcEIsRUFBNkM1QyxJQUE3QyxHQUFvRGxSLE1BQXBELENBQTJELEtBQUtpVixJQUFMLEdBQVVuTyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLFFBQXBCLEVBQThCOVQsTUFBOUIsQ0FBcUMsS0FBS2tWLE1BQUwsR0FBWXBPLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsVUFBcEIsQ0FBakQsQ0FBckUsRUFBd0o5VCxNQUF4SixDQUErSixLQUFLbVYsV0FBTCxHQUFpQnJPLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsZUFBcEIsQ0FBaEwsQ0FBYixFQUFtT0gsT0FBTyxDQUFDN0csVUFBUixFQUFuTyxFQUF3UGlILEtBQUssQ0FBQ2pILFVBQU4sQ0FBaUIsS0FBS29JLE1BQXRCLENBQXhQLEVBQXNSRSxVQUFVLENBQUN0SSxVQUFYLENBQXNCLEtBQUtxSSxXQUEzQixDQUF0UixFQUE4VEUsT0FBTyxDQUFDdkksVUFBUixFQUE5VCxFQUFtVndJLEVBQUUsQ0FBQ3hJLFVBQUgsRUFBblYsRUFBbVcsS0FBS3BQLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsUUFBTXZJLE9BQU8sQ0FBQ21CLFdBQVIsR0FBb0IsRUFBcEIsR0FBdUIsS0FBN0IsSUFBb0MsZUFBMUQsQ0FBblcsRUFBOGEsS0FBS2hQLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsUUFBTXZJLE9BQU8sQ0FBQ1ksR0FBUixHQUFZLEVBQVosR0FBZSxLQUFyQixJQUE0QixNQUFsRCxDQUE5YSxFQUF3ZTVFLE9BQU8sQ0FBQ1csRUFBbmYsRUFBc2YsS0FBSSxJQUFJckUsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxJQUFFLENBQWYsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUIwRCxPQUFPLENBQUNXLEVBQVIsR0FBV3JFLENBQVgsSUFBYyxLQUFLbkcsT0FBTCxDQUFhb1csUUFBYixDQUFzQixZQUFValEsQ0FBaEMsQ0FBZDtBQUFpRCxXQUFLbkcsT0FBTCxDQUFha00sRUFBYixDQUFnQixtQkFBaEIsRUFBb0MsVUFBUy9GLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUN4RixjQUFGO0FBQW1CLE9BQW5FO0FBQXFFLEtBQXYwQjtBQUF3MEJnVyxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLa0IsU0FBTCxLQUFpQnpPLENBQUMsQ0FBQ3pHLFFBQVEsQ0FBQ2lVLElBQVYsQ0FBRCxDQUFpQnRVLE1BQWpCLENBQXdCLEtBQUt0QyxPQUE3QixHQUFzQyxLQUFLNlgsU0FBTCxHQUFlLENBQUMsQ0FBdkU7QUFBMEUsS0FBcDZCO0FBQXE2QmhCLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtnQixTQUFMLEtBQWlCLEtBQUs3WCxPQUFMLENBQWE2VyxNQUFiLElBQXNCLEtBQUtnQixTQUFMLEdBQWUsQ0FBQyxDQUF2RDtBQUEwRCxLQUFqL0I7QUFBay9CcEIsV0FBTyxFQUFDLGlCQUFTdFEsQ0FBVCxFQUFXO0FBQUMsV0FBSzJSLEtBQUwsSUFBWSxLQUFLOVgsT0FBTCxDQUFhMFcsV0FBYixDQUF5QixvQkFBa0IsS0FBS29CLEtBQWhELENBQVosRUFBbUUsS0FBSzlYLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0Isb0JBQWtCalEsQ0FBeEMsQ0FBbkUsRUFBOEc4UCxPQUFPLENBQUNRLE9BQVIsQ0FBZ0J0USxDQUFoQixDQUE5RyxFQUFpSSxLQUFLMlIsS0FBTCxHQUFXM1IsQ0FBNUk7QUFBOEksS0FBcHBDO0FBQXFwQzRSLGtCQUFjLEVBQUMsd0JBQVM1UixDQUFULEVBQVc7QUFBQyxXQUFLNlIsWUFBTCxLQUFvQjdSLENBQXBCLEtBQXdCLEtBQUs2UixZQUFMLEtBQW9CLEtBQUtoWSxPQUFMLENBQWEwVyxXQUFiLENBQXlCLHFCQUFtQixLQUFLc0IsWUFBakQsR0FBK0RqRyxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFLZ0csWUFBbEIsS0FBaUMsS0FBS2hZLE9BQUwsQ0FBYTBXLFdBQWIsQ0FBeUIsdUJBQXpCLENBQXBILEdBQXVLLEtBQUsxVyxPQUFMLENBQWFvVyxRQUFiLENBQXNCLHFCQUFtQmpRLENBQXpDLENBQXZLLEVBQW1ONEwsSUFBSSxDQUFDQyxPQUFMLENBQWE3TCxDQUFiLEtBQWlCLEtBQUtuRyxPQUFMLENBQWFvVyxRQUFiLENBQXNCLHVCQUF0QixDQUFwTyxFQUFtUixLQUFLNEIsWUFBTCxHQUFrQjdSLENBQTdUO0FBQWdVLEtBQWgvQztBQUFpL0M4Uix3QkFBb0IsRUFBQyxnQ0FBVTtBQUFDLFdBQUtDLHNCQUFMLElBQTZCOU8sQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVVvTCxFQUFWLENBQWEsMEJBQWIsRUFBd0MsS0FBS2dNLHNCQUFMLEdBQTRCOU8sQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUswSCxlQUFiLEVBQTZCLElBQTdCLENBQXBFLENBQTdCO0FBQXFJLEtBQXRwRDtBQUF1cERDLHVCQUFtQixFQUFDLCtCQUFVO0FBQUMsV0FBS0Ysc0JBQUwsS0FBOEI5TyxDQUFDLENBQUN0SSxNQUFELENBQUQsQ0FBVXVYLEdBQVYsQ0FBYywwQkFBZCxFQUF5QyxLQUFLSCxzQkFBOUMsR0FBc0UsS0FBS0Esc0JBQUwsR0FBNEIsSUFBaEk7QUFBc0ksS0FBNXpEO0FBQTZ6REksYUFBUyxFQUFDLHFCQUFVO0FBQUN6SyxhQUFPLENBQUNtQixXQUFSLElBQXFCLEtBQUtzSSxNQUFMLENBQVkxRixHQUFaLENBQWdCLFFBQWhCLEVBQXlCeEksQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUs4SCxjQUFiLEVBQTRCLElBQTVCLENBQXpCLEVBQTJELENBQTNELENBQXJCO0FBQW1GLEtBQXI2RDtBQUFzNkRKLG1CQUFlLEVBQUMsMkJBQVU7QUFBQyxVQUFJaFMsQ0FBSjtBQUFNLE9BQUNBLENBQUMsR0FBQ2tRLEtBQUssQ0FBQ0MsSUFBVCxNQUFpQm9CLFVBQVUsQ0FBQ2MsYUFBWCxJQUEyQixLQUFLQyxtQkFBTCxFQUEzQixFQUFzRHRTLENBQUMsQ0FBQ3VTLFFBQUYsRUFBdEQsRUFBbUVkLEVBQUUsQ0FBQ2UsTUFBSCxFQUFuRSxFQUErRWYsRUFBRSxDQUFDZ0IsY0FBSCxDQUFrQixJQUFsQixFQUF1QixDQUF2QixDQUEvRSxFQUF5R2pCLE9BQU8sQ0FBQ2tCLE1BQVIsRUFBekcsRUFBMEg1QyxPQUFPLENBQUM1SSxHQUFSLEVBQTFILEVBQXdJdUssRUFBRSxDQUFDTyxlQUFILEVBQXhJLEVBQTZKLEtBQUtHLFNBQUwsRUFBOUs7QUFBZ00sS0FBdm9FO0FBQXdvRUMsa0JBQWMsRUFBQywwQkFBVTtBQUFDMUssYUFBTyxDQUFDbUIsV0FBUixJQUFxQixLQUFLaFAsT0FBTCxDQUFhb08sR0FBYixDQUFpQjtBQUFDMEssV0FBRyxFQUFDMVAsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVVpWSxTQUFWO0FBQUwsT0FBakIsQ0FBckI7QUFBbUUsS0FBcnVFO0FBQXN1RUMsb0JBQWdCLEVBQUMsNEJBQVU7QUFBQyxhQUFPLEtBQUtDLGNBQVo7QUFBMkIsS0FBN3hFO0FBQTh4RVIsdUJBQW1CLEVBQUMsK0JBQVU7QUFBQyxVQUFHcEMsS0FBSyxDQUFDQyxJQUFULEVBQWM7QUFBQyxZQUFJblEsQ0FBQyxHQUFDdUQsTUFBTSxDQUFDQyxRQUFQLEVBQU47QUFBQSxZQUF3QnBKLENBQUMsR0FBQ21YLFVBQVUsQ0FBQ3dCLGFBQVgsRUFBMUI7QUFBQSxZQUFxRC9OLENBQUMsR0FBQyxpQkFBZXVNLFVBQVUsQ0FBQ3lCLFlBQWpGO0FBQThGLGFBQUtGLGNBQUwsR0FBb0I7QUFBQ3JQLGVBQUssRUFBQ3VCLENBQUMsR0FBQ2hGLENBQUMsQ0FBQ3lELEtBQUgsR0FBU3pELENBQUMsQ0FBQ3lELEtBQUYsR0FBUXJKLENBQUMsQ0FBQ3FKLEtBQTNCO0FBQWlDUSxnQkFBTSxFQUFDZSxDQUFDLEdBQUNoRixDQUFDLENBQUNpRSxNQUFGLEdBQVM3SixDQUFDLENBQUM2SixNQUFaLEdBQW1CakUsQ0FBQyxDQUFDaUU7QUFBOUQsU0FBcEIsRUFBMEYsS0FBS2dQLFlBQUwsR0FBa0I7QUFBQ04sYUFBRyxFQUFDLENBQUw7QUFBTy9FLGNBQUksRUFBQzVJLENBQUMsR0FBQyxDQUFELEdBQUc1SyxDQUFDLENBQUNxSjtBQUFsQixTQUE1RyxFQUFxSSxLQUFLMk4sSUFBTCxDQUFVbkosR0FBVixDQUFjaEYsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZLEtBQUsyUCxjQUFqQixFQUFnQyxLQUFLRyxZQUFyQyxDQUFkLENBQXJJO0FBQXVNO0FBQUMsS0FBbG5GO0FBQW1uRjdGLFFBQUksRUFBQyxjQUFTcE4sQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLNFYsT0FBUixFQUFnQmhRLENBQUMsSUFBRUEsQ0FBQyxFQUFKLENBQWhCLEtBQTJCO0FBQUMsYUFBS2dRLE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS2tELE9BQUwsR0FBYSxDQUFDLENBQTlCLEVBQWdDLEtBQUsxQyxNQUFMLEVBQWhDLEVBQThDLEtBQUtXLE1BQUwsQ0FBWXpGLEtBQVosQ0FBa0IsYUFBbEIsQ0FBOUMsRUFBK0UsS0FBS3lGLE1BQUwsQ0FBWXpGLEtBQVosQ0FBa0IsY0FBbEIsQ0FBL0UsRUFBaUgsS0FBSzBHLGNBQUwsRUFBakg7QUFBdUksWUFBSXBOLENBQUMsR0FBQyxDQUFDLGFBQVcvQixDQUFDLENBQUNxRyxJQUFGLENBQU9sUCxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCOFYsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCbkcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ3hTLE1BQWhDLENBQXVDeVMsSUFBM0UsS0FBa0YsQ0FBeEY7QUFBQSxZQUEwRjNHLENBQUMsR0FBQyxDQUE1RjtBQUE4RnFKLGVBQU8sQ0FBQ0ksS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCbkcsT0FBaEIsQ0FBd0JuTixPQUFwQyxHQUE0QyxNQUE1QyxHQUFtRCxNQUFwRCxDQUFQLENBQW1FLFlBQVU7QUFBQ2tELFdBQUMsSUFBRSxFQUFFeUcsQ0FBRixHQUFJLENBQVAsSUFBVXpHLENBQUMsRUFBWDtBQUFjLFNBQTVGLEVBQTZGZ0YsQ0FBN0YsR0FBZ0csS0FBS21NLE1BQUwsQ0FBWTFGLEdBQVosQ0FBZ0IsYUFBaEIsRUFBOEJ4SSxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGVBQUs2SSxLQUFMLENBQVdsUSxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGlCQUFLNEksT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQmxULENBQUMsSUFBRSxFQUFFeUcsQ0FBRixHQUFJLENBQVAsSUFBVXpHLENBQUMsRUFBM0I7QUFBOEIsV0FBakQsRUFBa0QsSUFBbEQsQ0FBWCxFQUFtRWdGLENBQW5FO0FBQXNFLFNBQXpGLEVBQTBGLElBQTFGLENBQTlCLEVBQThILElBQUVBLENBQUYsR0FBSWdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUdqQyxDQUFaLEVBQWMsRUFBZCxDQUFKLEdBQXNCLENBQXBKLENBQWhHO0FBQXVQO0FBQUMsS0FBL25HO0FBQWdvR21PLFNBQUssRUFBQyxlQUFTblQsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsVUFBSTRLLENBQUMsR0FBQyxDQUFDLGFBQVcvQixDQUFDLENBQUNxRyxJQUFGLENBQU9sUCxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCOFYsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCbkcsT0FBaEIsQ0FBd0JrRCxPQUF4QixDQUFnQ3hTLE1BQWhDLENBQXVDeVMsSUFBM0UsS0FBa0YsQ0FBeEY7QUFBMEYsV0FBS3ZULE9BQUwsQ0FBYThXLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkI1TCxDQUE3QixFQUErQixDQUEvQixFQUFpQ2hGLENBQWpDO0FBQW9DLEtBQWx4RztBQUFteEdxTixRQUFJLEVBQUMsY0FBU2pULENBQVQsRUFBVztBQUFDLFVBQUcsS0FBS2dXLElBQVIsRUFBYTtBQUFDLFlBQUlwUSxDQUFDLEdBQUMsS0FBSytRLE1BQUwsQ0FBWTFELElBQWxCO0FBQXVCck4sU0FBQyxDQUFDb1QsS0FBRixDQUFRLEVBQVIsR0FBWSxLQUFLakMsTUFBTCxDQUFZekYsS0FBWixDQUFrQixhQUFsQixDQUFaLEVBQTZDLEtBQUt5RixNQUFMLENBQVl6RixLQUFaLENBQWtCLGNBQWxCLENBQTdDO0FBQStFLFlBQUkxRyxDQUFDLEdBQUNrTCxLQUFLLENBQUNDLElBQU4sR0FBV0QsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JuRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDeFMsTUFBaEMsQ0FBdUMwUyxJQUFsRCxHQUF1RCxDQUE3RDtBQUErRHJOLFNBQUMsQ0FBQ29ULEtBQUYsQ0FBUW5RLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUNrUSxlQUFLLENBQUNTLElBQU4sSUFBYWEsT0FBTyxDQUFDbkUsSUFBUixFQUFiLEVBQTRCck4sQ0FBQyxFQUE3QjtBQUFnQyxTQUFwRCxFQUFxRCxJQUFyRCxDQUFSLEdBQW9FQSxDQUFDLENBQUNvVCxLQUFGLENBQVFuUSxDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVztBQUFDeVIsWUFBRSxDQUFDNEIsT0FBSCxJQUFhNUIsRUFBRSxDQUFDcEUsSUFBSCxDQUFRLElBQVIsRUFBYXJJLENBQWIsQ0FBYixFQUE2QnNPLFFBQVEsQ0FBQ0QsT0FBVCxFQUE3QixFQUFnRHJULENBQUMsRUFBakQ7QUFBb0QsU0FBeEUsRUFBeUUsSUFBekUsQ0FBUixDQUFwRSxFQUE0SkEsQ0FBQyxDQUFDb1QsS0FBRixDQUFRblEsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxjQUFJNUYsQ0FBQyxHQUFDLENBQU47QUFBUSxlQUFLbVosS0FBTCxDQUFXLFlBQVU7QUFBQyxjQUFFblosQ0FBRixHQUFJLENBQUosSUFBTzRGLENBQUMsRUFBUjtBQUFXLFdBQWpDLEVBQWtDZ0YsQ0FBbEMsR0FBcUMsS0FBS21NLE1BQUwsQ0FBWTFGLEdBQVosQ0FBZ0IsY0FBaEIsRUFBK0J4SSxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDd0YsbUJBQU8sQ0FBQ3pDLElBQVIsQ0FBYSxZQUFVO0FBQUMsZ0JBQUVqVCxDQUFGLEdBQUksQ0FBSixJQUFPNEYsQ0FBQyxFQUFSO0FBQVcsYUFBbkMsRUFBb0NnRixDQUFwQztBQUF1QyxXQUExRCxFQUEyRCxJQUEzRCxDQUEvQixFQUFnRyxJQUFFQSxDQUFGLEdBQUlnQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFHakMsQ0FBWixFQUFjLEdBQWQsQ0FBSixHQUF1QixDQUF2SCxDQUFyQyxFQUErSixLQUFLa00sTUFBTCxHQUFZLENBQUMsQ0FBNUs7QUFBOEssU0FBMU0sRUFBMk0sSUFBM00sQ0FBUixDQUE1SixFQUFzWGxSLENBQUMsQ0FBQ29ULEtBQUYsQ0FBUW5RLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUMsZUFBS3dULE1BQUwsSUFBYyxLQUFLdkIsbUJBQUwsRUFBZCxFQUF5Qy9CLEtBQUssQ0FBQ3VELFNBQU4sRUFBekMsRUFBMkRsQyxVQUFVLENBQUM3RixLQUFYLEVBQTNELEVBQThFLEtBQUt5RixNQUFMLENBQVl6RixLQUFaLEVBQTlFLEVBQWtHLEtBQUtnSSxTQUFMLEdBQWUsQ0FBQyxDQUFsSDtBQUFvSCxjQUFJdFosQ0FBQyxHQUFDOFYsS0FBSyxDQUFDQyxJQUFOLElBQVlELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCbkcsT0FBaEIsQ0FBd0IwSixTQUExQztBQUFvRCx5QkFBYTFRLENBQUMsQ0FBQ3FHLElBQUYsQ0FBT2xQLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxDQUFDK08sSUFBRixDQUFPakcsTUFBUCxDQUF4QixFQUF1QyxLQUFLa04sSUFBTCxHQUFVLElBQWpELEVBQXNELEtBQUs4QyxPQUFMLEdBQWEsQ0FBQyxDQUFwRSxFQUFzRSxLQUFLVSxPQUFMLEdBQWEsQ0FBQyxDQUFwRixFQUFzRixLQUFLbEQsTUFBTCxFQUF0RixFQUFvRzFRLENBQUMsRUFBckc7QUFBd0csU0FBcFMsRUFBcVMsSUFBclMsQ0FBUixDQUF0WCxFQUEwcUIsZUFBYWlELENBQUMsQ0FBQ3FHLElBQUYsQ0FBT2xQLENBQVAsQ0FBYixJQUF3QjRGLENBQUMsQ0FBQ29ULEtBQUYsQ0FBUW5RLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUM1RixXQUFDLElBQUc0RixDQUFDLEVBQUw7QUFBUSxTQUE1QixFQUE2QixJQUE3QixDQUFSLENBQWxzQjtBQUE4dUI7QUFBQyxLQUF0c0k7QUFBdXNJdVQsU0FBSyxFQUFDLGVBQVN2VCxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxVQUFJNEssQ0FBQyxHQUFDLENBQUMsYUFBVy9CLENBQUMsQ0FBQ3FHLElBQUYsQ0FBT2xQLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUI4VixLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JuRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDeFMsTUFBaEMsQ0FBdUMwUyxJQUEzRSxLQUFrRixDQUF4RjtBQUEwRixXQUFLeFQsT0FBTCxDQUFhOFcsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCRSxPQUF0QixDQUE4QjdMLENBQTlCLEVBQWdDaEYsQ0FBaEM7QUFBbUMsS0FBeDFJO0FBQXkxSXVNLFFBQUksRUFBQyxjQUFTdk0sQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsV0FBS3laLEtBQUwsR0FBVzdULENBQVgsRUFBYSxLQUFLd1EsTUFBTCxFQUFiLEVBQTJCZSxVQUFVLENBQUNoRixJQUFYLENBQWdCdk0sQ0FBaEIsQ0FBM0IsRUFBOENrUSxLQUFLLENBQUMzRCxJQUFOLENBQVd2TSxDQUFYLENBQTlDLEVBQTRELEtBQUs4UixvQkFBTCxFQUE1RCxFQUF3RjFYLENBQUMsSUFBRSxLQUFLMFosV0FBTCxDQUFpQjFaLENBQWpCLENBQTNGO0FBQStHLEtBQTM5STtBQUE0OUkwWixlQUFXLEVBQUMscUJBQVM5VCxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxXQUFLc1osU0FBTCxHQUFlMVQsQ0FBZixFQUFpQixLQUFLb1EsSUFBTCxHQUFVLEtBQUt5RCxLQUFMLENBQVc3VCxDQUFDLEdBQUMsQ0FBYixDQUEzQixFQUEyQyxLQUFLK1QsYUFBTCxFQUEzQyxFQUFnRSxLQUFLNUQsSUFBTCxHQUFVRCxLQUFLLENBQUM5QyxJQUFOLENBQVdwTixDQUFYLEVBQWFpRCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDbFEsU0FBQyxJQUFFQSxDQUFDLEVBQUo7QUFBTyxPQUExQixFQUEyQixJQUEzQixDQUFiLENBQTFFO0FBQXlILEtBQS9tSjtBQUFnbkoyWixpQkFBYSxFQUFDLHlCQUFVO0FBQUMsV0FBS2hELE1BQUwsQ0FBWTFELElBQVosQ0FBaUIrRixLQUFqQixDQUF1QixFQUF2QjtBQUEyQixLQUFwcUo7QUFBcXFKSSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLeEQsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQnlCLEVBQUUsQ0FBQ3BFLElBQUgsQ0FBUSxJQUFSLEVBQWEsQ0FBYixDQUFoQixFQUFnQ29FLEVBQUUsQ0FBQ3VDLEtBQUgsRUFBaEM7QUFBMkMsS0FBbHVKO0FBQW11SkMsZUFBVyxFQUFDLHVCQUFVO0FBQUMsYUFBTyxLQUFLN0QsSUFBTCxJQUFXLEtBQUtBLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0IrRCxJQUE3QixJQUFtQyxLQUFLNkYsS0FBeEMsSUFBK0MsSUFBRSxLQUFLQSxLQUFMLENBQVduWCxNQUE1RCxJQUFvRSxNQUFJLEtBQUtnWCxTQUFwRjtBQUE4RixLQUF4MUo7QUFBeTFKUSxZQUFRLEVBQUMsa0JBQVNsVSxDQUFULEVBQVc7QUFBQyxVQUFJNUYsQ0FBQyxHQUFDLEtBQUs2WixXQUFMLEVBQU47QUFBeUIsT0FBQ2pVLENBQUMsSUFBRTVGLENBQUosS0FBUSxLQUFLMFosV0FBTCxDQUFpQixLQUFLSyxxQkFBTCxHQUE2QkQsUUFBOUMsQ0FBUjtBQUFnRSxLQUF2OEo7QUFBdzhKRSxXQUFPLEVBQUMsbUJBQVU7QUFBQyxVQUFJcFUsQ0FBQyxHQUFDLEtBQUs2VCxLQUFMLElBQVksSUFBRSxLQUFLQSxLQUFMLENBQVduWCxNQUEvQjtBQUFzQyxhQUFPLEtBQUswVCxJQUFMLElBQVcsS0FBS0EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQitELElBQTdCLElBQW1DaE8sQ0FBbkMsSUFBc0NBLENBQUMsSUFBRSxNQUFJLEtBQUttVSxxQkFBTCxHQUE2QkUsSUFBakY7QUFBc0YsS0FBdmxLO0FBQXdsS0EsUUFBSSxFQUFDLGNBQVNyVSxDQUFULEVBQVc7QUFBQyxVQUFJNUYsQ0FBQyxHQUFDLEtBQUtnYSxPQUFMLEVBQU47QUFBcUIsT0FBQ3BVLENBQUMsSUFBRTVGLENBQUosS0FBUSxLQUFLMFosV0FBTCxDQUFpQixLQUFLSyxxQkFBTCxHQUE2QkUsSUFBOUMsQ0FBUjtBQUE0RCxLQUExcks7QUFBMnJLRix5QkFBcUIsRUFBQyxpQ0FBVTtBQUFDLFVBQUcsQ0FBQyxLQUFLTixLQUFULEVBQWUsT0FBTSxFQUFOO0FBQVMsVUFBSTdULENBQUMsR0FBQyxLQUFLMFQsU0FBWDtBQUFBLFVBQXFCdFosQ0FBQyxHQUFDLEtBQUt5WixLQUFMLENBQVduWCxNQUFsQztBQUF5QyxhQUFNO0FBQUN3WCxnQkFBUSxFQUFDbFUsQ0FBQyxJQUFFLENBQUgsR0FBSzVGLENBQUwsR0FBTzRGLENBQUMsR0FBQyxDQUFuQjtBQUFxQnFVLFlBQUksRUFBQ2phLENBQUMsSUFBRTRGLENBQUgsR0FBSyxDQUFMLEdBQU9BLENBQUMsR0FBQztBQUFuQyxPQUFOO0FBQTRDO0FBQXowSyxHQUEzOU07QUFBQSxNQUFzeVhzVCxRQUFRLEdBQUM7QUFBQ2dCLFdBQU8sRUFBQyxDQUFDLENBQVY7QUFBWUMsV0FBTyxFQUFDO0FBQUMzRyxVQUFJLEVBQUMsRUFBTjtBQUFTQyxXQUFLLEVBQUMsRUFBZjtBQUFrQkMsU0FBRyxFQUFDO0FBQXRCLEtBQXBCO0FBQThDMEcsVUFBTSxFQUFDLGdCQUFTeFUsQ0FBVCxFQUFXO0FBQUMsV0FBS3FULE9BQUwsSUFBZXJULENBQUMsS0FBR2lELENBQUMsQ0FBQ3pHLFFBQUQsQ0FBRCxDQUFZdUosRUFBWixDQUFlLFNBQWYsRUFBeUIsS0FBSzBPLGlCQUFMLEdBQXVCeFIsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUtvSyxTQUFiLEVBQXVCLElBQXZCLENBQWhELEVBQThFM08sRUFBOUUsQ0FBaUYsT0FBakYsRUFBeUYsS0FBSzRPLGVBQUwsR0FBcUIxUixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS3NLLE9BQWIsRUFBcUIsSUFBckIsQ0FBOUcsR0FBMEksS0FBS04sT0FBTCxHQUFhdFUsQ0FBMUosQ0FBaEI7QUFBNkssS0FBOU87QUFBK09xVCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLaUIsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLSyxlQUFMLEtBQXVCMVIsQ0FBQyxDQUFDekcsUUFBRCxDQUFELENBQVkwVixHQUFaLENBQWdCLE9BQWhCLEVBQXdCLEtBQUt5QyxlQUE3QixFQUE4Q3pDLEdBQTlDLENBQWtELFNBQWxELEVBQTRELEtBQUt1QyxpQkFBakUsR0FBb0YsS0FBS0UsZUFBTCxHQUFxQixLQUFLRixpQkFBTCxHQUF1QixJQUF2SixDQUFoQjtBQUE2SyxLQUEvYTtBQUFnYkMsYUFBUyxFQUFDLG1CQUFTMVUsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLc1UsT0FBUixFQUFnQjtBQUFDLFlBQUlsYSxDQUFDLEdBQUMsS0FBS3lhLGVBQUwsQ0FBcUI3VSxDQUFDLENBQUN1VSxPQUF2QixDQUFOO0FBQXNDLFlBQUduYSxDQUFDLEtBQUcsQ0FBQ0EsQ0FBRCxJQUFJLENBQUMsS0FBS2thLE9BQVYsSUFBbUIsS0FBS0EsT0FBTCxDQUFhbGEsQ0FBYixDQUF0QixDQUFKLEVBQTJDLFFBQU80RixDQUFDLENBQUN4RixjQUFGLElBQW1Cd0YsQ0FBQyxDQUFDb0csZUFBRixFQUFuQixFQUF1Q2hNLENBQTlDO0FBQWlELGVBQUksTUFBSjtBQUFXaVcsa0JBQU0sQ0FBQzZELFFBQVA7QUFBa0I7O0FBQU0sZUFBSSxPQUFKO0FBQVk3RCxrQkFBTSxDQUFDZ0UsSUFBUDtBQUFoRztBQUErRztBQUFDLEtBQXhwQjtBQUF5cEJPLFdBQU8sRUFBQyxpQkFBUzVVLENBQVQsRUFBVztBQUFDLFVBQUcsS0FBS3NVLE9BQVIsRUFBZ0I7QUFBQyxZQUFJbGEsQ0FBQyxHQUFDLEtBQUt5YSxlQUFMLENBQXFCN1UsQ0FBQyxDQUFDdVUsT0FBdkIsQ0FBTjtBQUFzQyxZQUFHbmEsQ0FBQyxLQUFHLENBQUNBLENBQUQsSUFBSSxDQUFDLEtBQUtrYSxPQUFWLElBQW1CLEtBQUtBLE9BQUwsQ0FBYWxhLENBQWIsQ0FBdEIsQ0FBSixFQUEyQyxRQUFPQSxDQUFQO0FBQVUsZUFBSSxLQUFKO0FBQVVpVyxrQkFBTSxDQUFDaEQsSUFBUDtBQUFwQjtBQUFtQztBQUFDLEtBQW56QjtBQUFvekJ3SCxtQkFBZSxFQUFDLHlCQUFTN1UsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJNUYsQ0FBUixJQUFhLEtBQUttYSxPQUFsQixFQUEwQixJQUFHLEtBQUtBLE9BQUwsQ0FBYW5hLENBQWIsTUFBa0I0RixDQUFyQixFQUF1QixPQUFPNUYsQ0FBUDs7QUFBUyxhQUFPLElBQVA7QUFBWTtBQUF0NUIsR0FBL3lYO0FBQUEsTUFBdXNaMGEsSUFBSSxJQUFFQyxFQUFFLEdBQUMsQ0FBSCxFQUFLQyxFQUFFLEdBQUMsRUFBUixFQUFXQyxFQUFFLEdBQUNoUyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDhDQUFwQixFQUFvRTlULE1BQXBFLENBQTJFOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixpQkFBcEIsQ0FBM0UsRUFBbUg1WCxHQUFuSCxDQUF1SDRLLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsaURBQXBCLEVBQXVFOVQsTUFBdkUsQ0FBOEU4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGlCQUFwQixDQUE5RSxDQUF2SCxFQUE4TzVYLEdBQTlPLENBQWtQNEssQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiw2Q0FBcEIsRUFBbUU5VCxNQUFuRSxDQUEwRThHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsaUJBQXBCLENBQTFFLENBQWxQLEVBQXFXNVgsR0FBclcsQ0FBeVc0SyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDhDQUFwQixFQUFvRTlULE1BQXBFLENBQTJFOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixpQkFBcEIsQ0FBM0UsQ0FBelcsQ0FBZCxFQUEyZWhOLENBQUMsQ0FBQ0UsTUFBRixDQUFTK1IsRUFBRSxDQUFDN1AsU0FBWixFQUFzQjtBQUFDNEQsY0FBVSxFQUFDLG9CQUFTakosQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhNEssQ0FBYixFQUFlO0FBQUMsV0FBS29MLElBQUwsR0FBVXBRLENBQVYsRUFBWSxLQUFLZ04sVUFBTCxHQUFnQjtBQUFDdkosYUFBSyxFQUFDLENBQVA7QUFBU1EsY0FBTSxFQUFDO0FBQWhCLE9BQTVCLEVBQStDLEtBQUtrUixHQUFMLEdBQVNKLEVBQUUsRUFBMUQsRUFBNkQsS0FBS3JCLFNBQUwsR0FBZXRaLENBQTVFLEVBQThFLEtBQUtnYixNQUFMLEdBQVlwUSxDQUExRixFQUE0RixLQUFLcVEsVUFBTCxHQUFnQixDQUFDLENBQTdHLEVBQStHLEtBQUtDLFFBQUwsR0FBYyxDQUFDLENBQTlILEVBQWdJLEtBQUt2RSxNQUFMLEdBQVksRUFBNUksRUFBK0ksS0FBS0EsTUFBTCxDQUFZd0UsUUFBWixHQUFxQnRTLENBQUMsQ0FBQyxFQUFELENBQXJLO0FBQTBLLEtBQXRNO0FBQXVNdU0sVUFBTSxFQUFDLGtCQUFVO0FBQUMsVUFBRyxDQUFDLEtBQUtnRyxRQUFULEVBQWtCO0FBQUN0RixhQUFLLENBQUNyVyxPQUFOLENBQWNzQyxNQUFkLENBQXFCLEtBQUt0QyxPQUFMLEdBQWFvSixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLFNBQXBCLEVBQStCOVQsTUFBL0IsQ0FBc0MsS0FBSzhDLFNBQUwsR0FBZWdFLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsY0FBcEIsQ0FBckQsRUFBMEZoSSxHQUExRixDQUE4RjtBQUFDd04saUJBQU8sRUFBQztBQUFULFNBQTlGLEVBQTJHcEksSUFBM0csRUFBbEM7QUFBcUosWUFBSXJOLENBQUMsR0FBQyxLQUFLb1EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQm9FLFFBQWxCLElBQTRCLElBQUUsS0FBSytHLE1BQXpDOztBQUFnRCxZQUFHcFYsQ0FBQyxJQUFFLEtBQUtuRyxPQUFMLENBQWFvVyxRQUFiLENBQXNCLGlCQUF0QixDQUFILEVBQTRDLENBQUMsS0FBS0csSUFBTCxDQUFVc0YsT0FBVixJQUFtQjFWLENBQXBCLE1BQXlCLEtBQUtuRyxPQUFMLENBQWFzQyxNQUFiLENBQW9CLEtBQUt3WixJQUFMLEdBQVUxUyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLFNBQXBCLEVBQStCOVQsTUFBL0IsQ0FBc0M4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLG9CQUFwQixDQUF0QyxFQUFpRjlULE1BQWpGLENBQXdGOFksRUFBRSxDQUFDVyxLQUFILENBQVMsQ0FBQyxDQUFWLENBQXhGLEVBQXNHelosTUFBdEcsQ0FBNkcsS0FBSzBaLFVBQUwsR0FBZ0I1UyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdCQUFwQixDQUE3SCxDQUE5QixHQUFtTWpRLENBQUMsS0FBRyxLQUFLbkcsT0FBTCxDQUFhb1csUUFBYixDQUFzQixpQkFBdEIsR0FBeUMsS0FBSzRGLFVBQUwsQ0FBZ0IxWixNQUFoQixDQUF1QixLQUFLMlosR0FBTCxHQUFTN1MsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixhQUFwQixFQUFtQzlULE1BQW5DLENBQTBDOEcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZ04sUUFBWixDQUFxQixrQkFBckIsRUFBeUM4RixJQUF6QyxDQUE4QyxLQUFLckMsU0FBTCxHQUFlLEtBQWYsR0FBcUIsS0FBSzBCLE1BQXhFLENBQTFDLENBQWhDLENBQTVDLENBQXBNLEVBQTZZLEtBQUtoRixJQUFMLENBQVVzRixPQUFWLElBQW1CLEtBQUtHLFVBQUwsQ0FBZ0IxWixNQUFoQixDQUF1QixLQUFLdVosT0FBTCxHQUFhelMsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixZQUFwQixFQUFrQzhGLElBQWxDLENBQXVDLEtBQUszRixJQUFMLENBQVVzRixPQUFqRCxDQUFwQyxDQUF6YixDQUE1QyxFQUFxa0IsS0FBS3pXLFNBQUwsQ0FBZTlDLE1BQWYsQ0FBc0IsS0FBSzZaLFVBQUwsR0FBZ0IvUyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHVCQUFwQixDQUF0QyxFQUFvRjlULE1BQXBGLENBQTJGLEtBQUtzQyxPQUFMLEdBQWF3RSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLFlBQXBCLENBQXhHLENBQXJrQixFQUFndEIsV0FBUyxLQUFLRyxJQUFMLENBQVU5RyxJQUFuQixLQUEwQixLQUFLN0ssT0FBTCxDQUFhdEMsTUFBYixDQUFvQixLQUFLMlAsS0FBTCxHQUFXN0ksQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixvQkFBcEIsRUFBMENnRyxJQUExQyxDQUErQztBQUFDOUssYUFBRyxFQUFDLEtBQUtpRixJQUFMLENBQVV0VztBQUFmLFNBQS9DLENBQS9CLEdBQW9HLEtBQUsyRSxPQUFMLENBQWF0QyxNQUFiLENBQW9COFksRUFBRSxDQUFDVyxLQUFILENBQVMsQ0FBQyxDQUFWLENBQXBCLENBQTlILENBQWh0QixFQUFpM0I1VixDQUFDLElBQUUsYUFBVyxLQUFLb1EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQndFLEVBQWhDLElBQW9DLEtBQUt4UCxTQUFMLENBQWU5QyxNQUFmLENBQXNCLEtBQUsrWixlQUFMLEdBQXFCalQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixxQkFBcEIsRUFBMkM5VCxNQUEzQyxDQUFrRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isd0JBQXBCLENBQWxELEVBQWlHOVQsTUFBakcsQ0FBd0c4RyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlnTixRQUFaLENBQXFCLGtCQUFyQixFQUF5QzhGLElBQXpDLENBQThDLEtBQUtyQyxTQUFMLEdBQWUsS0FBZixHQUFxQixLQUFLMEIsTUFBeEUsQ0FBeEcsQ0FBM0MsQ0FBcjVCLEVBQTBuQyxZQUFVLEtBQUtoRixJQUFMLENBQVVuRyxPQUFWLENBQWtCd0UsRUFBenBDLEVBQTRwQztBQUFDLGVBQUtoUSxPQUFMLENBQWF0QyxNQUFiLENBQW9CLEtBQUtnYSxjQUFMLEdBQW9CbFQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQix1Q0FBcEIsRUFBNkQ5VCxNQUE3RCxDQUFvRThHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDOVQsTUFBdEMsQ0FBNkM4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDJCQUFwQixDQUE3QyxFQUErRjlULE1BQS9GLENBQXNHOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBdEcsQ0FBcEUsQ0FBeEMsRUFBZ1E5VCxNQUFoUSxDQUF1USxLQUFLaWEsVUFBTCxHQUFnQm5ULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsbUNBQXBCLEVBQXlEOVQsTUFBekQsQ0FBZ0U4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdCQUFwQixFQUFzQzlULE1BQXRDLENBQTZDOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiwyQkFBcEIsQ0FBN0MsRUFBK0Y5VCxNQUEvRixDQUFzRzhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IscUJBQXBCLENBQXRHLENBQWhFLENBQXZSLEVBQTJlOVQsTUFBM2UsQ0FBa2YsS0FBS2thLFdBQUwsR0FBaUJwVCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHVCQUFwQixFQUE2QzlULE1BQTdDLENBQW9EOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBcEQsRUFBZ0c5VCxNQUFoRyxDQUF1RzhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsZUFBcEIsQ0FBdkcsQ0FBbmdCLEdBQWlwQixDQUFDLEtBQUtHLElBQUwsQ0FBVXNGLE9BQVYsSUFBbUIxVixDQUFDLElBQUUsS0FBS29RLElBQUwsQ0FBVWtHLE9BQVYsQ0FBa0JaLE9BQXpDLE1BQW9ELEtBQUtqWCxPQUFMLENBQWF0QyxNQUFiLENBQW9CLEtBQUtvYSxVQUFMLEdBQWdCdFQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixzQkFBcEIsRUFBNEM5VCxNQUE1QyxDQUFtRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isb0JBQXBCLENBQW5ELEVBQThGOVQsTUFBOUYsQ0FBcUc4WSxFQUFFLENBQUNXLEtBQUgsQ0FBUyxDQUFDLENBQVYsQ0FBckcsRUFBbUh6WixNQUFuSCxDQUEwSCxLQUFLcWEsZ0JBQUwsR0FBc0J2VCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdCQUFwQixDQUFoSixDQUFwQyxHQUE0TmpRLENBQUMsSUFBRSxLQUFLd1csZ0JBQUwsQ0FBc0JyYSxNQUF0QixDQUE2QixLQUFLc2EsU0FBTCxHQUFleFQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixhQUFwQixFQUFtQzlULE1BQW5DLENBQTBDOEcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZ04sUUFBWixDQUFxQixrQkFBckIsRUFBeUM4RixJQUF6QyxDQUE4QyxLQUFLckMsU0FBTCxHQUFlLEtBQWYsR0FBcUIsS0FBSzBCLE1BQXhFLENBQTFDLENBQTVDLENBQS9OLEVBQXVZLEtBQUtoRixJQUFMLENBQVVzRixPQUFWLElBQW1CLEtBQUtjLGdCQUFMLENBQXNCcmEsTUFBdEIsQ0FBNkIsS0FBS3VhLGFBQUwsR0FBbUJ6VCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLFlBQXBCLEVBQWtDOEYsSUFBbEMsQ0FBdUMsS0FBSzNGLElBQUwsQ0FBVXNGLE9BQWpELENBQWhELENBQTljLENBQWpwQixFQUEyc0MsS0FBS3RGLElBQUwsQ0FBVXNGLE9BQVYsSUFBbUIsQ0FBQzFWLENBQXBCLElBQXVCLEtBQUtvUSxJQUFMLENBQVVrRyxPQUFWLENBQWtCWixPQUF6QyxJQUFrRCxLQUFLalgsT0FBTCxDQUFhdEMsTUFBYixDQUFvQixLQUFLd2EsY0FBTCxHQUFvQjFULENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsaUNBQXBCLEVBQXVEOVQsTUFBdkQsQ0FBOEQ4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHdCQUFwQixDQUE5RCxFQUE2RzlULE1BQTdHLENBQW9IOEcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZ04sUUFBWixDQUFxQixrQkFBckIsRUFBeUM4RixJQUF6QyxDQUE4QyxLQUFLckMsU0FBTCxHQUFlLEtBQWYsR0FBcUIsS0FBSzBCLE1BQXhFLENBQXBILENBQXhDLENBQTd2QztBQUEyK0MsY0FBSWhiLENBQUMsR0FBQyxLQUFLZ1csSUFBTCxDQUFVbkcsT0FBVixDQUFrQitELElBQWxCLElBQXdCLElBQUUsS0FBS29ILE1BQS9CLElBQXVDLEtBQUcsS0FBSzFCLFNBQXJEO0FBQUEsY0FBK0QxTyxDQUFDLEdBQUMsS0FBS29MLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0IrRCxJQUFsQixJQUF3QixJQUFFLEtBQUtvSCxNQUEvQixJQUF1QyxLQUFLMUIsU0FBTCxHQUFlLEtBQUswQixNQUE1SDtBQUFtSSxlQUFLZSxjQUFMLENBQW9CLENBQUMvYixDQUFDLEdBQUMsUUFBRCxHQUFVLEtBQVosSUFBbUIsT0FBdkMsRUFBZ0Qsa0JBQWhELEdBQW9FLEtBQUtnYyxVQUFMLENBQWdCLENBQUNwUixDQUFDLEdBQUMsUUFBRCxHQUFVLEtBQVosSUFBbUIsT0FBbkMsRUFBNEMsa0JBQTVDLENBQXBFO0FBQW9JOztBQUFBL0IsU0FBQyxDQUFDc0csSUFBRixDQUFPLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBUCxFQUFpQnRHLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsZUFBS2dXLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JpRSxRQUFsQixDQUEyQjlULENBQTNCLEtBQStCLEtBQUtQLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsaUJBQWU3VixDQUFyQyxDQUEvQjtBQUF1RSxTQUE3RixFQUE4RixJQUE5RixDQUFqQixHQUFzSCxLQUFLUCxPQUFMLENBQWFvVyxRQUFiLENBQXNCLGFBQVcsS0FBS0csSUFBTCxDQUFVOUcsSUFBM0MsQ0FBdEgsRUFBdUtzQyxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFLdUUsSUFBTCxDQUFVOUcsSUFBdkIsS0FBOEIsS0FBS3pQLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBck0sRUFBNE8sS0FBS21GLE1BQUwsR0FBWSxDQUFaLElBQWUsS0FBS3ZiLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsYUFBdEIsQ0FBM1AsRUFBZ1MsS0FBS3VGLFFBQUwsR0FBYyxDQUFDLENBQS9TO0FBQWlUO0FBQUMsS0FBbG5IO0FBQW1uSG9CLHdCQUFvQixFQUFDLGdDQUFVO0FBQUMsVUFBSTVXLENBQUo7QUFBTSxVQUFHLEVBQUVBLENBQUMsR0FBQyxLQUFLb1EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQm1FLE9BQXRCLENBQUgsRUFBa0MsT0FBTSxFQUFOOztBQUFTLFdBQUksSUFBSWhVLENBQUMsR0FBQyxFQUFOLEVBQVM0SyxDQUFDLEdBQUNnQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxDQUFULEVBQVcsS0FBS3dNLFNBQUwsR0FBZTFULENBQUMsQ0FBQyxDQUFELENBQTNCLENBQVgsRUFBMkN5RyxDQUFDLEdBQUNPLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUt5TSxTQUFMLEdBQWUxVCxDQUFDLENBQUMsQ0FBRCxDQUF6QixFQUE2QixLQUFLb1YsTUFBbEMsQ0FBN0MsRUFBdUYxTyxDQUFDLEdBQUMsS0FBS2dOLFNBQTlGLEVBQXdHL00sQ0FBQyxHQUFDRCxDQUE5RyxFQUFnSEMsQ0FBQyxJQUFFRixDQUFuSCxFQUFxSEUsQ0FBQyxFQUF0SCxFQUF5SCxDQUFDQyxDQUFDLEdBQUNzSixLQUFLLENBQUNjLEtBQU4sQ0FBWXJLLENBQUMsR0FBQyxDQUFkLENBQUgsRUFBcUIrTSxTQUFyQixJQUFnQ2hOLENBQWhDLElBQW1DdE0sQ0FBQyxDQUFDeVMsSUFBRixDQUFPakcsQ0FBUCxDQUFuQzs7QUFBNkMsV0FBSUQsQ0FBQyxHQUFDRCxDQUFOLEVBQVExQixDQUFDLElBQUUyQixDQUFYLEVBQWFBLENBQUMsRUFBZCxFQUFpQjtBQUFDLFlBQUlDLENBQUo7QUFBTSxTQUFDQSxDQUFDLEdBQUNzSixLQUFLLENBQUNjLEtBQU4sQ0FBWXJLLENBQUMsR0FBQyxDQUFkLENBQUgsRUFBcUIrTSxTQUFyQixJQUFnQ2hOLENBQWhDLElBQW1DdE0sQ0FBQyxDQUFDeVMsSUFBRixDQUFPakcsQ0FBUCxDQUFuQztBQUE2Qzs7QUFBQSxhQUFPeE0sQ0FBUDtBQUFTLEtBQXg3SDtBQUF5N0h5Yyw0QkFBd0IsRUFBQyxvQ0FBVTtBQUFDLFVBQUk3VyxDQUFDLEdBQUMsS0FBSzRXLG9CQUFMLEVBQU47O0FBQWtDM1QsT0FBQyxDQUFDc0csSUFBRixDQUFPdkosQ0FBUCxFQUFTaUQsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDZ1UsT0FBRjtBQUFZLE9BQWxDLEVBQW1DLElBQW5DLENBQVQ7QUFBbUQsS0FBbGpJO0FBQW1qSUEsV0FBTyxFQUFDLG1CQUFVO0FBQUMsV0FBSzBJLFVBQUwsSUFBaUIsS0FBS0MsU0FBdEIsSUFBaUMsV0FBUyxLQUFLM0csSUFBTCxDQUFVOUcsSUFBcEQsSUFBMEQsQ0FBQyxLQUFLOEcsSUFBTCxDQUFVbkcsT0FBVixDQUFrQm1FLE9BQTdFLElBQXNGLEtBQUs0SSxNQUEzRixLQUFvRyxLQUFLeEgsTUFBTCxJQUFjLEtBQUtzSCxVQUFMLEdBQWdCLENBQUMsQ0FBL0IsRUFBaUMsS0FBS0csWUFBTCxHQUFrQixJQUFJak8sVUFBSixDQUFlLEtBQUs4QyxLQUFMLENBQVcsQ0FBWCxDQUFmLEVBQTZCN0ksQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxhQUFLZ1gsTUFBTCxHQUFZLENBQUMsQ0FBYixFQUFlaEMsRUFBRSxDQUFDLEtBQUs1RSxJQUFMLENBQVV0VyxHQUFYLENBQUYsR0FBa0IsQ0FBQyxDQUFsQyxFQUFvQyxLQUFLZ2QsVUFBTCxHQUFnQixDQUFDLENBQXJELEVBQXVELEtBQUtDLFNBQUwsR0FBZSxDQUFDLENBQXZFLEVBQXlFLEtBQUsvSixVQUFMLEdBQWdCO0FBQUN2SixlQUFLLEVBQUN6RCxDQUFDLENBQUNpQyxHQUFGLENBQU0ySCxZQUFiO0FBQTBCM0YsZ0JBQU0sRUFBQ2pFLENBQUMsQ0FBQ2lDLEdBQUYsQ0FBTWdKO0FBQXZDLFNBQXpGO0FBQStJLE9BQW5LLEVBQW9LLElBQXBLLENBQTdCLEVBQXVNLElBQXZNLEVBQTRNO0FBQUNmLGNBQU0sRUFBQztBQUFSLE9BQTVNLENBQXZKO0FBQTZYLEtBQW44STtBQUFvOElxQyxRQUFJLEVBQUMsY0FBU25TLENBQVQsRUFBVzRGLENBQVgsRUFBYTtBQUFDLFVBQUcsS0FBS3dQLE1BQUwsSUFBYyxLQUFLd0gsTUFBdEIsRUFBNkI1YyxDQUFDLElBQUVBLENBQUMsRUFBSixDQUE3QixLQUF5QyxRQUFPLEtBQUtnUixLQUFMLElBQWEsS0FBSzhMLE9BQUwsR0FBYSxDQUFDLENBQTNCLEVBQTZCLEtBQUs5RyxJQUFMLENBQVVuRyxPQUFWLENBQWtCcUQsT0FBbEIsS0FBNEIsS0FBSzZKLGFBQUwsR0FBbUI5TSxVQUFVLENBQUNwSCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDa0gsZUFBTyxDQUFDcEUsSUFBUjtBQUFlLE9BQWxDLEVBQW1DLElBQW5DLENBQUQsRUFBMEMsS0FBS2dELElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JzRSxZQUFsQixJQUFnQyxDQUExRSxDQUF6RCxDQUE3QixFQUFvSyxLQUFLNkIsSUFBTCxDQUFVOUcsSUFBckw7QUFBMkwsYUFBSSxPQUFKO0FBQVksY0FBRyxLQUFLdk8sS0FBUixFQUFjLE9BQU8sTUFBS1gsQ0FBQyxJQUFFQSxDQUFDLEVBQVQsQ0FBUDtBQUFvQixlQUFLZ2QsVUFBTCxHQUFnQixJQUFJcE8sVUFBSixDQUFlLEtBQUs4QyxLQUFMLENBQVcsQ0FBWCxDQUFmLEVBQTZCN0ksQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxpQkFBS3FYLGFBQUwsSUFBcUIsS0FBS0MsYUFBTCxDQUFtQjtBQUFDN1QsbUJBQUssRUFBQ3pELENBQUMsQ0FBQ2lDLEdBQUYsQ0FBTTJILFlBQWI7QUFBMEIzRixvQkFBTSxFQUFDakUsQ0FBQyxDQUFDaUMsR0FBRixDQUFNZ0o7QUFBdkMsYUFBbkIsQ0FBckIsRUFBK0Y3USxDQUFDLElBQUVBLENBQUMsRUFBbkc7QUFBc0csV0FBMUgsRUFBMkgsSUFBM0gsQ0FBN0IsRUFBOEo2SSxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGlCQUFLK00sYUFBTCxJQUFxQixLQUFLdkwsS0FBTCxDQUFXdUIsSUFBWCxFQUFyQixFQUF1QyxLQUFLNU8sT0FBTCxDQUFhOFksT0FBYixDQUFxQixLQUFLeGMsS0FBTCxHQUFXa0ksQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiw2QkFBcEIsRUFBbUQ5VCxNQUFuRCxDQUEwRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsZUFBcEIsQ0FBMUQsQ0FBaEMsQ0FBdkMsRUFBd0ssS0FBS3BXLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsY0FBdEIsQ0FBeEssRUFBOE0sS0FBS3FILGFBQUwsQ0FBbUI7QUFBQzdULG1CQUFLLEVBQUMsS0FBSzFJLEtBQUwsQ0FBV3ljLFVBQVgsRUFBUDtBQUErQnZULG9CQUFNLEVBQUMsS0FBS2xKLEtBQUwsQ0FBVzBjLFdBQVg7QUFBdEMsYUFBbkIsQ0FBOU0sRUFBa1MsS0FBSzFjLEtBQUwsQ0FBV2tOLEdBQVgsQ0FBZTtBQUFDeEUsbUJBQUssRUFBQyxNQUFQO0FBQWNRLG9CQUFNLEVBQUM7QUFBckIsYUFBZixDQUFsUyxFQUErVTdKLENBQUMsSUFBRUEsQ0FBQyxFQUFuVjtBQUFzVixXQUF6VyxFQUEwVyxJQUExVyxDQUE5SixFQUE4Z0I7QUFBQzhQLGtCQUFNLEVBQUMsS0FBS2tHLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0I4RDtBQUExQixXQUE5Z0IsQ0FBaEI7QUFBdWtCOztBQUFNLGFBQUksT0FBSjtBQUFZLGVBQUsySixVQUFMLEdBQWdCLElBQUk1SyxVQUFKLENBQWUsS0FBS3NELElBQUwsQ0FBVXRXLEdBQXpCLEVBQTZCbUosQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxpQkFBS3FYLGFBQUwsSUFBcUIsS0FBS0MsYUFBTCxDQUFtQjtBQUFDN1QsbUJBQUssRUFBQ3pELENBQUMsQ0FBQ2dOLFVBQUYsQ0FBYXZKLEtBQXBCO0FBQTBCUSxvQkFBTSxFQUFDakUsQ0FBQyxDQUFDZ04sVUFBRixDQUFhL0k7QUFBOUMsYUFBbkIsQ0FBckIsRUFBK0Y3SixDQUFDLElBQUVBLENBQUMsRUFBbkc7QUFBc0csV0FBMUgsRUFBMkgsSUFBM0gsQ0FBN0IsQ0FBaEI7QUFBK0s7O0FBQU0sYUFBSSxTQUFKO0FBQWMsZUFBS2lkLGFBQUwsSUFBcUIsS0FBS0MsYUFBTCxDQUFtQjtBQUFDN1QsaUJBQUssRUFBQyxLQUFLMk0sSUFBTCxDQUFVbkcsT0FBVixDQUFrQnhHLEtBQXpCO0FBQStCUSxrQkFBTSxFQUFDLEtBQUttTSxJQUFMLENBQVVuRyxPQUFWLENBQWtCaEc7QUFBeEQsV0FBbkIsQ0FBckIsRUFBeUc3SixDQUFDLElBQUVBLENBQUMsRUFBN0c7QUFBcmdDO0FBQXNuQyxLQUF0bkw7QUFBdW5Ma2QsaUJBQWEsRUFBQyx1QkFBU3RYLENBQVQsRUFBVztBQUFDLFVBQUcsS0FBS2dOLFVBQUwsR0FBZ0JoTixDQUFoQixFQUFrQixLQUFLb1EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQjJGLFFBQWxCLElBQTRCLEtBQUtRLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0I0RixTQUFuRSxFQUE2RTtBQUFDLFlBQUl6VixDQUFDLEdBQUMsS0FBS2dXLElBQUwsQ0FBVW5HLE9BQWhCO0FBQUEsWUFBd0JqRixDQUFDLEdBQUM7QUFBQ3ZCLGVBQUssRUFBQ3JKLENBQUMsQ0FBQ3dWLFFBQUYsR0FBV3hWLENBQUMsQ0FBQ3dWLFFBQWIsR0FBc0IsS0FBSzVDLFVBQUwsQ0FBZ0J2SixLQUE3QztBQUFtRFEsZ0JBQU0sRUFBQzdKLENBQUMsQ0FBQ3lWLFNBQUYsR0FBWXpWLENBQUMsQ0FBQ3lWLFNBQWQsR0FBd0IsS0FBSzdDLFVBQUwsQ0FBZ0IvSTtBQUFsRyxTQUExQjtBQUFvSSxhQUFLK0ksVUFBTCxHQUFnQjFHLEdBQUcsQ0FBQ0MsTUFBSixDQUFXdkIsQ0FBWCxFQUFhLEtBQUtnSSxVQUFsQixDQUFoQjtBQUE4QztBQUFDLEtBQWw1TDtBQUFtNUxxSyxpQkFBYSxFQUFDLHlCQUFVO0FBQUMsV0FBS00sa0JBQUwsSUFBMEIsS0FBS1QsT0FBTCxHQUFhLENBQUMsQ0FBeEMsRUFBMEMsS0FBS0YsTUFBTCxHQUFZLENBQUMsQ0FBdkQsRUFBeURoQyxFQUFFLENBQUMsS0FBSzVFLElBQUwsQ0FBVXRXLEdBQVgsQ0FBRixHQUFrQixDQUFDLENBQTVFLEVBQThFMFgsT0FBTyxDQUFDbkUsSUFBUixDQUFhLElBQWIsRUFBa0IsSUFBbEIsRUFBdUIsS0FBS3FHLFNBQTVCLENBQTlFO0FBQXFILEtBQWppTTtBQUFraU03SCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxhQUFPRCxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFLdUUsSUFBTCxDQUFVOUcsSUFBdkIsQ0FBUDtBQUFvQyxLQUF6bE07QUFBMGxNc08sZUFBVyxFQUFDLHFCQUFTNVgsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDLEtBQUs2WCxZQUFOLElBQW9CLEtBQUtoTSxPQUFMLEVBQXZCLEVBQXNDO0FBQUMsWUFBSXpSLENBQUMsR0FBQyxVQUFRTyxNQUFNLENBQUNDLFFBQVAsSUFBaUIsYUFBV0QsTUFBTSxDQUFDQyxRQUFQLENBQWdCNFIsUUFBNUMsR0FBcUQsR0FBckQsR0FBeUQsRUFBakUsSUFBcUUsR0FBM0U7QUFBQSxZQUErRXhILENBQUMsR0FBQy9CLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWSxLQUFLaU4sSUFBTCxDQUFVbkcsT0FBVixDQUFrQixLQUFLbUcsSUFBTCxDQUFVOUcsSUFBNUIsS0FBbUMsRUFBL0MsQ0FBakY7QUFBQSxZQUFvSTdDLENBQUMsR0FBQ3hELENBQUMsQ0FBQzZVLEtBQUYsQ0FBUTlTLENBQVIsQ0FBdEk7QUFBQSxZQUFpSjBCLENBQUMsR0FBQztBQUFDeUYsZUFBSyxFQUFDL1IsQ0FBQyxHQUFDLDZDQUFUO0FBQXVEaVMsaUJBQU8sRUFBQ2pTLENBQUMsR0FBQztBQUFqRSxVQUErRyxLQUFLZ1csSUFBTCxDQUFVOUcsSUFBekgsRUFBK0huTCxPQUEvSCxDQUF1SSxNQUF2SSxFQUE4SSxLQUFLaVMsSUFBTCxDQUFVMkgsS0FBVixDQUFnQjNMLEVBQTlKLEVBQWtLak8sT0FBbEssQ0FBMEssZUFBMUssRUFBMExzSSxDQUExTCxDQUFuSjtBQUFnVixhQUFLaEksT0FBTCxDQUFhOFksT0FBYixDQUFxQixLQUFLTSxZQUFMLEdBQWtCNVUsQ0FBQyxDQUFDLG1FQUFELENBQUQsQ0FBdUVnTixRQUF2RSxDQUFnRixvQkFBaEYsRUFBc0dnRyxJQUF0RyxDQUEyRztBQUFDOUssYUFBRyxFQUFDekUsQ0FBTDtBQUFPekMsZ0JBQU0sRUFBQyxLQUFLK1Qsa0JBQUwsQ0FBd0IvVCxNQUF0QztBQUE2Q1IsZUFBSyxFQUFDLEtBQUt1VSxrQkFBTCxDQUF3QnZVLEtBQTNFO0FBQWlGd1UscUJBQVcsRUFBQztBQUE3RixTQUEzRyxDQUF2QyxHQUFvUGpZLENBQUMsSUFBRUEsQ0FBQyxFQUF4UDtBQUEyUCxPQUFsbkIsTUFBdW5CQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQWh2TjtBQUFpdk5rWSxTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFJbFksQ0FBQyxHQUFDa1EsS0FBSyxDQUFDclcsT0FBTixDQUFjLENBQWQsRUFBaUJzZSxTQUF2QjtBQUFpQ25ZLE9BQUMsSUFBRUEsQ0FBQyxLQUFHLEtBQUtuRyxPQUFMLENBQWEsQ0FBYixDQUFQLElBQXdCcVcsS0FBSyxDQUFDclcsT0FBTixDQUFjc0MsTUFBZCxDQUFxQixLQUFLdEMsT0FBMUIsQ0FBeEI7QUFBMkQsS0FBOTFOO0FBQSsxTnVULFFBQUksRUFBQyxjQUFTaFQsQ0FBVCxFQUFXO0FBQUMsVUFBSTRGLENBQUMsR0FBQyxLQUFLK1EsTUFBTCxDQUFZd0UsUUFBbEI7QUFBMkJ2VixPQUFDLENBQUNvVCxLQUFGLENBQVEsRUFBUixHQUFZcFQsQ0FBQyxDQUFDb1QsS0FBRixDQUFRblEsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxZQUFJNUYsQ0FBQyxHQUFDLEtBQUtnVyxJQUFMLENBQVVuRyxPQUFWLENBQWtCcUQsT0FBbEIsSUFBMkIsQ0FBQzBILEVBQUUsQ0FBQyxLQUFLNUUsSUFBTCxDQUFVdFcsR0FBWCxDQUFwQztBQUFvRDBYLGVBQU8sQ0FBQzhELFFBQVIsSUFBa0IsQ0FBQ2xiLENBQW5CLElBQXNCb1gsT0FBTyxDQUFDbkUsSUFBUixFQUF0QixFQUFxQzZDLEtBQUssQ0FBQ2tJLFlBQU4sRUFBckMsRUFBMERwWSxDQUFDLEVBQTNEO0FBQThELE9BQXRJLEVBQXVJLElBQXZJLENBQVIsQ0FBWixFQUFrS0EsQ0FBQyxDQUFDb1QsS0FBRixDQUFRblEsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxhQUFLcVksUUFBTCxJQUFnQjVHLEVBQUUsQ0FBQ2hHLEdBQUgsQ0FBTyxLQUFLNk0sR0FBWixDQUFoQixFQUFpQ3RZLENBQUMsRUFBbEM7QUFBcUMsT0FBekQsRUFBMEQsSUFBMUQsQ0FBUixDQUFsSyxFQUEyT0EsQ0FBQyxDQUFDb1QsS0FBRixDQUFRblEsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ3NULGdCQUFRLENBQUNrQixNQUFULENBQWdCLEtBQUtwRSxJQUFMLENBQVVuRyxPQUFWLENBQWtCMEQsUUFBbEMsR0FBNEMzTixDQUFDLEVBQTdDO0FBQWdELE9BQXBFLEVBQXFFLElBQXJFLENBQVIsQ0FBM08sRUFBK1RBLENBQUMsQ0FBQ29ULEtBQUYsQ0FBUW5RLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUN3UixlQUFPLENBQUNsQixPQUFSLENBQWdCLEtBQUtGLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JxRSxJQUFsQyxHQUF3QyxLQUFLL0IsSUFBTCxDQUFVdEosQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQyxlQUFLdU0sd0JBQUwsSUFBZ0M3VyxDQUFDLEVBQWpDO0FBQW9DLFNBQXZELEVBQXdELElBQXhELENBQVYsQ0FBeEM7QUFBaUgsT0FBckksRUFBc0ksSUFBdEksQ0FBUixDQUEvVCxFQUFvZEEsQ0FBQyxDQUFDb1QsS0FBRixDQUFRblEsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxhQUFLa1ksS0FBTCxJQUFhN0gsTUFBTSxDQUFDQyxPQUFQLENBQWUsS0FBS0YsSUFBTCxDQUFVbkcsT0FBVixDQUFrQnFFLElBQWpDLENBQWIsRUFBb0RtRCxFQUFFLENBQUMrQyxNQUFILEVBQXBELEVBQWdFLEtBQUtqQyxRQUFMLEVBQWhFLEVBQWdGbEMsTUFBTSxDQUFDK0IsY0FBUCxFQUFoRixFQUF3R3BTLENBQUMsRUFBekc7QUFBNEcsT0FBaEksRUFBaUksSUFBakksQ0FBUixDQUFwZCxFQUFvbUIsS0FBSzZMLE9BQUwsTUFBZ0I3TCxDQUFDLENBQUNvVCxLQUFGLENBQVFuUSxDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVztBQUFDLGFBQUs0WCxXQUFMLENBQWlCM1UsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQ3RLLFdBQUM7QUFBRyxTQUF2QixDQUFqQjtBQUEyQyxPQUEvRCxFQUFnRSxJQUFoRSxDQUFSLENBQXBuQixFQUFtc0IsS0FBS29RLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0J1RSxJQUFsQixJQUF3QnhPLENBQUMsQ0FBQ29ULEtBQUYsQ0FBUW5RLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUNrUSxhQUFLLENBQUNxSSxZQUFOLENBQW1CdlksQ0FBbkI7QUFBc0IsT0FBMUMsRUFBMkMsSUFBM0MsQ0FBUixDQUEzdEIsRUFBcXhCQSxDQUFDLENBQUNvVCxLQUFGLENBQVFuUSxDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVztBQUFDLFlBQUk1RixDQUFDLEdBQUMsQ0FBTjtBQUFBLFlBQVE0SyxDQUFDLEdBQUMsS0FBS29MLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQjFPLE9BQTFCLENBQWtDMk8sSUFBNUM7QUFBaURpRCxjQUFNLENBQUN1QixjQUFQLENBQXNCLEtBQUt4QixJQUFMLENBQVU5RyxJQUFoQyxHQUFzQytHLE1BQU0sQ0FBQ0wsT0FBUCxLQUFpQmhMLENBQUMsR0FBQyxLQUFLb0wsSUFBTCxDQUFVbkcsT0FBVixDQUFrQmtELE9BQWxCLENBQTBCeFMsTUFBMUIsQ0FBaUN5UyxJQUFuQyxFQUF3QyxlQUFhbkssQ0FBQyxDQUFDcUcsSUFBRixDQUFPLEtBQUs4RyxJQUFMLENBQVVuRyxPQUFWLENBQWtCdU8sTUFBekIsQ0FBYixJQUErQyxLQUFLcEksSUFBTCxDQUFVbkcsT0FBVixDQUFrQnVPLE1BQWxCLENBQXlCclAsSUFBekIsQ0FBOEJqRyxNQUE5QixDQUF4RyxDQUF0QyxFQUFxTCxLQUFLa04sSUFBTCxDQUFVbkcsT0FBVixDQUFrQnVFLElBQWxCLEtBQXlCcFUsQ0FBQyxJQUFHOFYsS0FBSyxDQUFDcUksWUFBTixDQUFtQixZQUFVO0FBQUMsWUFBRW5lLENBQUYsR0FBSSxDQUFKLElBQU80RixDQUFDLEVBQVI7QUFBVyxTQUF6QyxDQUE3QixDQUFyTCxFQUE4UHFRLE1BQU0sQ0FBQ2pELElBQVAsQ0FBWSxZQUFVO0FBQUMsWUFBRWhULENBQUYsR0FBSSxDQUFKLElBQU80RixDQUFDLEVBQVI7QUFBVyxTQUFsQyxFQUFtQyxLQUFLb1EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQmtELE9BQWxCLENBQTBCeFMsTUFBMUIsQ0FBaUN5UyxJQUFwRSxDQUE5UCxFQUF3VSxLQUFLK0YsS0FBTCxDQUFXLFlBQVU7QUFBQyxZQUFFL1ksQ0FBRixHQUFJLENBQUosSUFBTzRGLENBQUMsRUFBUjtBQUFXLFNBQWpDLEVBQWtDZ0YsQ0FBbEMsQ0FBeFUsRUFBNld5TSxFQUFFLENBQUNnQixjQUFILENBQWtCLFlBQVU7QUFBQyxZQUFFclksQ0FBRixHQUFJLENBQUosSUFBTzRGLENBQUMsRUFBUjtBQUFXLFNBQXhDLEVBQXlDcVEsTUFBTSxDQUFDYSxNQUFQLEdBQWMsQ0FBZCxHQUFnQmxNLENBQXpELENBQTdXLEVBQXlhcUwsTUFBTSxDQUFDYSxNQUFQLElBQWVPLEVBQUUsQ0FBQ3JFLElBQUgsQ0FBUSxJQUFSLEVBQWEsQ0FBYixHQUFnQmlELE1BQU0sQ0FBQ2EsTUFBUCxHQUFjLENBQUMsQ0FBOUMsSUFBaURPLEVBQUUsQ0FBQ3JFLElBQUgsQ0FBUSxJQUFSLEVBQWEsQ0FBYixDQUExZDtBQUEwZSxZQUFJM0csQ0FBQyxHQUFDLEtBQUsySixJQUFMLENBQVVuRyxPQUFWLENBQWtCd08sYUFBeEI7QUFBc0MsdUJBQWF4VixDQUFDLENBQUNxRyxJQUFGLENBQU83QyxDQUFQLENBQWIsSUFBd0JBLENBQUMsQ0FBQzBDLElBQUYsQ0FBT2pHLE1BQVAsRUFBYyxLQUFLd1EsU0FBbkIsQ0FBeEI7QUFBc0QsT0FBM29CLEVBQTRvQixJQUE1b0IsQ0FBUixDQUFyeEIsRUFBZzdDMVQsQ0FBQyxDQUFDb1QsS0FBRixDQUFRblEsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxhQUFLc1YsUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQmxiLENBQUMsSUFBRUEsQ0FBQyxFQUFyQixFQUF3QjRGLENBQUMsRUFBekI7QUFBNEIsT0FBaEQsRUFBaUQsSUFBakQsQ0FBUixDQUFoN0M7QUFBZy9DLEtBQTMzUTtBQUE0M1FtVCxTQUFLLEVBQUMsZUFBU25ULENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFVBQUk0SyxDQUFDLEdBQUNxTCxNQUFNLENBQUNMLE9BQVAsR0FBZSxhQUFXL00sQ0FBQyxDQUFDcUcsSUFBRixDQUFPbFAsQ0FBUCxDQUFYLEdBQXFCQSxDQUFyQixHQUF1QixLQUFLZ1csSUFBTCxDQUFVbkcsT0FBVixDQUFrQmtELE9BQWxCLENBQTBCMU8sT0FBMUIsQ0FBa0MyTyxJQUF4RSxHQUE2RSxDQUFuRjtBQUFxRixXQUFLdlQsT0FBTCxDQUFhOFcsSUFBYixDQUFrQixDQUFDLENBQW5CLEVBQXNCdkQsSUFBdEIsR0FBNkJ3RCxNQUE3QixDQUFvQzVMLENBQUMsSUFBRSxDQUF2QyxFQUF5QyxDQUF6QyxFQUEyQ2hGLENBQTNDO0FBQThDLEtBQW5oUjtBQUFvaFJxTixRQUFJLEVBQUMsY0FBU3JOLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFVBQUcsS0FBS1AsT0FBUixFQUFnQjtBQUFDLGFBQUs2ZSxXQUFMLElBQW1CLEtBQUt0TixLQUFMLEVBQW5CO0FBQWdDLFlBQUlwRyxDQUFDLEdBQUMsYUFBVy9CLENBQUMsQ0FBQ3FHLElBQUYsQ0FBT2xQLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUIsS0FBS2dXLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQjFPLE9BQTFCLENBQWtDNE8sSUFBL0Q7QUFBb0UsYUFBS3hCLE9BQUwsT0FBaUI3RyxDQUFDLEdBQUMsQ0FBbkIsR0FBc0IsS0FBS25MLE9BQUwsQ0FBYThXLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkI1TCxDQUE3QixFQUErQixDQUEvQixFQUFpQyxtQkFBakMsRUFBcUQvQixDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGVBQUt6USxPQUFMLENBQWF3VCxJQUFiLElBQW9CLEtBQUtpSSxRQUFMLEdBQWMsQ0FBQyxDQUFuQyxFQUFxQ3BGLEtBQUssQ0FBQ3lJLGNBQU4sQ0FBcUIsS0FBS2pGLFNBQTFCLENBQXJDLEVBQTBFMVQsQ0FBQyxJQUFFQSxDQUFDLEVBQTlFO0FBQWlGLFNBQXBHLEVBQXFHLElBQXJHLENBQXJELENBQXRCO0FBQXVMLE9BQTVTLE1BQWlUQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQS8xUjtBQUFnMlIyUSxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLSSxNQUFMLENBQVl3RSxRQUFaLENBQXFCbkMsS0FBckIsQ0FBMkIsRUFBM0IsR0FBK0IsS0FBS3ZaLE9BQUwsSUFBYyxLQUFLQSxPQUFMLENBQWE4VyxJQUFiLENBQWtCLENBQUMsQ0FBbkIsQ0FBN0MsRUFBbUUsS0FBS3ZGLEtBQUwsRUFBbkU7QUFBZ0YsS0FBaDhSO0FBQWk4UnNOLGVBQVcsRUFBQyx1QkFBVTtBQUFDLFdBQUtiLFlBQUwsS0FBb0IsS0FBS0EsWUFBTCxDQUFrQixDQUFsQixFQUFxQjFNLEdBQXJCLEdBQXlCLGVBQXpCLEVBQXlDLEtBQUswTSxZQUFMLENBQWtCN2MsTUFBbEIsRUFBekMsRUFBb0UsS0FBSzZjLFlBQUwsR0FBa0IsSUFBMUc7QUFBZ0gsS0FBeGtTO0FBQXlrUzdjLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUsyVixJQUFMLElBQVksS0FBSytILFdBQUwsRUFBWixFQUErQixLQUFLN2UsT0FBTCxJQUFjLEtBQUtBLE9BQUwsQ0FBYW1CLE1BQWIsRUFBN0MsRUFBbUUsS0FBSzRkLE1BQUwsS0FBYzFJLEtBQUssQ0FBQ3lJLGNBQU4sQ0FBcUIsS0FBS2pGLFNBQTFCLEdBQXFDLEtBQUtrRixNQUFMLEdBQVksQ0FBQyxDQUFoRSxDQUFuRSxFQUFzSSxLQUFLM0IsWUFBTCxLQUFvQixLQUFLQSxZQUFMLENBQWtCN0wsS0FBbEIsSUFBMEIsS0FBSzZMLFlBQUwsR0FBa0IsSUFBNUMsRUFBaUQsS0FBS0gsVUFBTCxHQUFnQixJQUFqRSxFQUFzRSxLQUFLQyxTQUFMLEdBQWUsSUFBekcsQ0FBdEksRUFBcVAsS0FBS3pCLFFBQUwsR0FBYyxDQUFDLENBQXBRLEVBQXNRLEtBQUt1RCxPQUFMLEdBQWEsQ0FBQyxDQUFwUjtBQUFzUixLQUFqM1M7QUFBazNTek4sU0FBSyxFQUFDLGlCQUFVO0FBQUMsV0FBS2dNLFVBQUwsS0FBa0IsS0FBS0EsVUFBTCxDQUFnQmhNLEtBQWhCLElBQXdCLEtBQUtnTSxVQUFMLEdBQWdCLElBQTFELEdBQWdFLEtBQUtNLFVBQUwsS0FBa0IsS0FBS0EsVUFBTCxDQUFnQnRNLEtBQWhCLElBQXdCLEtBQUtzTSxVQUFMLEdBQWdCLElBQTFELENBQWhFLEVBQWdJLEtBQUtDLGtCQUFMLEVBQWhJLEVBQTBKLEtBQUtULE9BQUwsR0FBYSxDQUFDLENBQXhLO0FBQTBLLEtBQTdpVDtBQUE4aVRTLHNCQUFrQixFQUFDLDhCQUFVO0FBQUMsV0FBS1IsYUFBTCxLQUFxQjlMLFlBQVksQ0FBQyxLQUFLOEwsYUFBTixDQUFaLEVBQWlDLEtBQUtBLGFBQUwsR0FBbUIsSUFBekU7QUFBK0UsS0FBM3BUO0FBQTRwVDJCLGtCQUFjLEVBQUMsd0JBQVM5WSxDQUFULEVBQVc7QUFBQyxVQUFJNUYsQ0FBQyxHQUFDLEtBQUtnVyxJQUFMLENBQVVuRyxPQUFWLENBQWtCb0UsUUFBbEIsSUFBNEIsSUFBRSxLQUFLK0csTUFBekM7O0FBQWdELGNBQU8sS0FBS2tELEdBQVo7QUFBaUIsYUFBSSxXQUFKO0FBQWdCLGFBQUksUUFBSjtBQUFhLGNBQUcsQ0FBQyxLQUFLbEksSUFBTCxDQUFVc0YsT0FBWCxJQUFvQixDQUFDdGIsQ0FBeEIsRUFBMEIsT0FBTyxDQUFQO0FBQVM7O0FBQU0sYUFBSSxTQUFKO0FBQWMsY0FBRyxDQUFDLEtBQUtnVyxJQUFMLENBQVVzRixPQUFkLEVBQXNCLE9BQU8sQ0FBUDtBQUEzSDs7QUFBb0ksVUFBSTFRLENBQUMsR0FBQyxhQUFXLEtBQUtzVCxHQUFoQixHQUFvQixLQUFLL0IsVUFBekIsR0FBb0MsS0FBS1osSUFBL0M7QUFBb0Qsb0JBQVksS0FBSzJDLEdBQWpCLEtBQXVCdFksQ0FBQyxHQUFDZ0gsSUFBSSxDQUFDQyxHQUFMLENBQVNqSCxDQUFULEVBQVdxUSxNQUFNLENBQUN5QyxjQUFQLENBQXNCclAsS0FBakMsQ0FBekI7QUFBa0UsVUFBSWdELENBQUo7QUFBQSxVQUFNQyxDQUFDLEdBQUMxQixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqRSxLQUFMLENBQVcwQyxLQUFuQjtBQUF5QixhQUFNLGFBQVcsS0FBSzZVLEdBQWhCLElBQXFCLGdCQUFjLEtBQUtBLEdBQXhDLEtBQThDNVIsQ0FBQyxHQUFDLE1BQWhELEdBQXdEMUIsQ0FBQyxDQUFDaUQsR0FBRixDQUFNO0FBQUN4RSxhQUFLLEVBQUN6RCxDQUFDLEdBQUM7QUFBVCxPQUFOLENBQXhELEVBQThFeUcsQ0FBQyxHQUFDL0IsVUFBVSxDQUFDTSxDQUFDLENBQUN5UyxXQUFGLEVBQUQsQ0FBMUYsRUFBNEd6UyxDQUFDLENBQUNpRCxHQUFGLENBQU07QUFBQ3hFLGFBQUssRUFBQ2lEO0FBQVAsT0FBTixDQUE1RyxFQUE2SEQsQ0FBbkk7QUFBcUksS0FBL25VO0FBQWdvVXNTLGlCQUFhLEVBQUMsdUJBQVMvWSxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxVQUFJNEssQ0FBQyxHQUFDLEVBQU47QUFBQSxVQUFTeUIsQ0FBQyxHQUFDNEosTUFBTSxDQUFDeFcsT0FBUCxDQUFleEIsR0FBZixDQUFtQixLQUFLd0IsT0FBeEIsQ0FBWDtBQUE0Q08sT0FBQyxLQUFHcU0sQ0FBQyxHQUFDQSxDQUFDLENBQUNwTyxHQUFGLENBQU0rQixDQUFOLENBQUwsQ0FBRCxFQUFnQjZJLENBQUMsQ0FBQ3NHLElBQUYsQ0FBTzlDLENBQVAsRUFBUyxVQUFTekcsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUM2SSxTQUFDLENBQUM3SSxDQUFELENBQUQsQ0FBSzRlLEVBQUwsQ0FBUSxVQUFSLEtBQXFCaFUsQ0FBQyxDQUFDNkgsSUFBRixDQUFPNUosQ0FBQyxDQUFDN0ksQ0FBRCxDQUFELENBQUtnVCxJQUFMLEVBQVAsQ0FBckI7QUFBeUMsT0FBaEUsQ0FBaEI7QUFBa0YsVUFBSTFHLENBQUMsR0FBQyxLQUFLN00sT0FBTCxDQUFhb2YsUUFBYixDQUFzQixlQUF0QixDQUFOO0FBQTZDLFdBQUtwZixPQUFMLENBQWEwVyxXQUFiLENBQXlCLGVBQXpCO0FBQTBDLFVBQUk1SixDQUFDLEdBQUMsS0FBSzlNLE9BQUwsQ0FBYW9mLFFBQWIsQ0FBc0IsZ0JBQXRCLENBQU47QUFBOEMsV0FBS3BmLE9BQUwsQ0FBYW9XLFFBQWIsQ0FBc0IsZ0JBQXRCLEdBQXdDSSxNQUFNLENBQUN4VyxPQUFQLENBQWVvTyxHQUFmLENBQW1CO0FBQUNpUixrQkFBVSxFQUFDO0FBQVosT0FBbkIsQ0FBeEMsRUFBa0ZsWixDQUFDLEVBQW5GLEVBQXNGcVEsTUFBTSxDQUFDeFcsT0FBUCxDQUFlb08sR0FBZixDQUFtQjtBQUFDaVIsa0JBQVUsRUFBQztBQUFaLE9BQW5CLENBQXRGLEVBQWlJeFMsQ0FBQyxJQUFFLEtBQUs3TSxPQUFMLENBQWFvVyxRQUFiLENBQXNCLGVBQXRCLENBQXBJLEVBQTJLdEosQ0FBQyxJQUFFLEtBQUs5TSxPQUFMLENBQWEwVyxXQUFiLENBQXlCLGdCQUF6QixDQUE5SyxFQUF5TnROLENBQUMsQ0FBQ3NHLElBQUYsQ0FBT3ZFLENBQVAsRUFBUyxVQUFTaEYsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ2lULElBQUY7QUFBUyxPQUFoQyxDQUF6TjtBQUEyUCxLQUExcFY7QUFBMnBWOEwsZ0JBQVksRUFBQyx3QkFBVTtBQUFDLFdBQUszSixNQUFMLElBQWMsS0FBSzZGLFVBQUwsR0FBZ0IsS0FBS2pGLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JtUCxTQUFoRCxFQUEwRCxLQUFLQyxXQUFMLEdBQWlCLENBQUMsQ0FBNUUsRUFBOEUsSUFBRUMsUUFBUSxDQUFDLEtBQUt6ZixPQUFMLENBQWFvTyxHQUFiLENBQWlCLFdBQWpCLENBQUQsQ0FBVixLQUE0QyxLQUFLb04sVUFBTCxHQUFnQixDQUFDLENBQTdELENBQTlFLEVBQThJLElBQUVpRSxRQUFRLENBQUMsS0FBS3pmLE9BQUwsQ0FBYW9PLEdBQWIsQ0FBaUIsWUFBakIsQ0FBRCxDQUFWLEtBQTZDLEtBQUtvUixXQUFMLEdBQWlCLENBQUMsQ0FBL0QsQ0FBOUk7QUFBZ04sS0FBbjRWO0FBQW80VmhCLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFdBQUtjLFlBQUw7QUFBb0IsVUFBSW5aLENBQUMsR0FBQyxLQUFLcVYsVUFBTCxHQUFnQixXQUFoQixHQUE0QixLQUFLakYsSUFBTCxDQUFVbkcsT0FBVixDQUFrQndFLEVBQXBEO0FBQXVELFdBQUs2SixHQUFMLElBQVUsS0FBS3plLE9BQUwsQ0FBYTBXLFdBQWIsQ0FBeUIsV0FBUyxLQUFLK0gsR0FBdkMsQ0FBVixFQUFzRCxLQUFLemUsT0FBTCxDQUFhb1csUUFBYixDQUFzQixXQUFTalEsQ0FBL0IsQ0FBdEQsRUFBd0YsS0FBS3NZLEdBQUwsR0FBU3RZLENBQWpHO0FBQW1HLEtBQXRrVztBQUF1a1d1UyxZQUFRLEVBQUMsb0JBQVU7QUFBQyxVQUFHLEtBQUs5VCxPQUFSLEVBQWdCO0FBQUMsYUFBSzVFLE9BQUw7QUFBYSxZQUFJbUwsQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZa04sTUFBTSxDQUFDd0MsZ0JBQVAsRUFBWixDQUFOO0FBQUEsWUFBNkM3UyxDQUFDLEdBQUNpRCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBSzZKLFVBQWpCLENBQS9DO0FBQUEsWUFBNEU1UyxDQUFDLEdBQUMsS0FBSzZFLFNBQW5GO0FBQTZGLGFBQUtvWixRQUFMO0FBQWdCLFlBQUk1UixDQUFDLEdBQUM7QUFBQ21ILGNBQUksRUFBQzBMLFFBQVEsQ0FBQ2xmLENBQUMsQ0FBQzZOLEdBQUYsQ0FBTSxjQUFOLENBQUQsQ0FBZDtBQUFzQzBLLGFBQUcsRUFBQzJHLFFBQVEsQ0FBQ2xmLENBQUMsQ0FBQzZOLEdBQUYsQ0FBTSxhQUFOLENBQUQ7QUFBbEQsU0FBTjs7QUFBZ0YsWUFBRyxjQUFZLEtBQUtxUSxHQUFqQixJQUFzQixLQUFLaUIsZ0JBQTlCLEVBQStDO0FBQUMsY0FBSTdTLENBQUMsR0FBQyxDQUFOO0FBQVEsZUFBS3FTLGFBQUwsQ0FBbUI5VixDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGlCQUFLaVAsZ0JBQUwsQ0FBc0JQLEVBQXRCLENBQXlCLFVBQXpCLE1BQXVDdFMsQ0FBQyxHQUFDLEtBQUs2UyxnQkFBTCxDQUFzQi9CLFVBQXRCLENBQWlDLENBQUMsQ0FBbEMsQ0FBekM7QUFBK0UsV0FBbEcsRUFBbUcsSUFBbkcsQ0FBbkIsR0FBNkg5USxDQUFDLEdBQUNELENBQUMsQ0FBQ21ILElBQUosS0FBV25ILENBQUMsQ0FBQ21ILElBQUYsR0FBT2xILENBQWxCLENBQTdIO0FBQWtKOztBQUFBMUIsU0FBQyxDQUFDdkIsS0FBRixJQUFTLElBQUVnRCxDQUFDLENBQUNtSCxJQUFiLEVBQWtCNUksQ0FBQyxDQUFDZixNQUFGLElBQVUsSUFBRXdDLENBQUMsQ0FBQ2tNLEdBQWhDO0FBQW9DLFlBQUloTSxDQUFKO0FBQUEsWUFBTUMsQ0FBTjtBQUFBLFlBQVFDLENBQUMsR0FBQztBQUFDcEQsZUFBSyxFQUFDLENBQUMsQ0FBUjtBQUFVUSxnQkFBTSxFQUFDLENBQUMsQ0FBQyxLQUFLb1YsV0FBUCxJQUFvQixDQUFDLEtBQUtqSixJQUFMLENBQVVuRyxPQUFWLENBQWtCaUUsUUFBbEIsQ0FBMkJ3QjtBQUFqRSxTQUFWO0FBQUEsWUFBOEU1SSxDQUFDLEdBQUNSLEdBQUcsQ0FBQ0MsTUFBSixDQUFXdkIsQ0FBWCxFQUFhaEYsQ0FBYixFQUFlNkcsQ0FBZixDQUFoRjtBQUFBLFlBQWtHRSxDQUFDLEdBQUM5RCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVkyRCxDQUFaLENBQXBHO0FBQUEsWUFBbUgwUyxDQUFDLElBQUUsS0FBSy9hLE9BQUwsRUFBYSxDQUFmLENBQXBIO0FBQUEsWUFBc0lnYixDQUFDLEdBQUMsYUFBVyxLQUFLbkIsR0FBeEo7QUFBQSxZQUE0Sm9CLENBQUMsR0FBQ0QsQ0FBQyxHQUFDLEtBQUtsRCxVQUFOLEdBQWlCLEtBQUtaLElBQXJMO0FBQUEsWUFBMExnRSxDQUFDLEdBQUNGLENBQUMsR0FBQyxLQUFLL0MsYUFBTixHQUFvQixLQUFLaEIsT0FBdE47QUFBQSxZQUE4Tm5SLENBQUMsR0FBQ2tWLENBQUMsR0FBQyxLQUFLaEQsU0FBTixHQUFnQixLQUFLWCxHQUF0UDtBQUFBLFlBQTBQOEQsQ0FBQyxHQUFDLENBQUMsQ0FBQ0QsQ0FBOVA7O0FBQWdRLGdCQUFPLEtBQUtyQixHQUFaO0FBQWlCLGVBQUksU0FBSjtBQUFjLGdCQUFJdUIsQ0FBQyxHQUFDNVcsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZNEQsQ0FBWixDQUFOO0FBQXFCLGlCQUFLMk8sT0FBTCxLQUFlOU8sQ0FBQyxHQUFDLEtBQUs4TyxPQUFQLEVBQWUsS0FBS3FELGFBQUwsQ0FBbUI5VixDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLG1CQUFJLElBQUl0SyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsQ0FBZCxHQUFpQjtBQUFDd1osaUJBQUMsR0FBQyxLQUFLVixjQUFMLENBQW9CL1IsQ0FBQyxDQUFDdEQsS0FBdEIsQ0FBRjtBQUErQixvQkFBSXJKLENBQUMsR0FBQzRLLENBQUMsQ0FBQ2YsTUFBRixHQUFTOEMsQ0FBQyxDQUFDOUMsTUFBakI7QUFBd0I3SixpQkFBQyxHQUFDb2YsQ0FBRixLQUFNelMsQ0FBQyxHQUFDVCxHQUFHLENBQUNDLE1BQUosQ0FBVztBQUFDOUMsdUJBQUssRUFBQ3NELENBQUMsQ0FBQ3RELEtBQVQ7QUFBZVEsd0JBQU0sRUFBQytDLElBQUksQ0FBQ0UsR0FBTCxDQUFTSCxDQUFDLENBQUM5QyxNQUFGLElBQVV1VixDQUFDLEdBQUNwZixDQUFaLENBQVQsRUFBd0IsQ0FBeEI7QUFBdEIsaUJBQVgsRUFBNkQyTSxDQUE3RCxFQUErREYsQ0FBL0QsQ0FBUixHQUEyRTdHLENBQUMsRUFBNUU7QUFBK0U7O0FBQUF3WixlQUFDLEdBQUMsS0FBS1YsY0FBTCxDQUFvQi9SLENBQUMsQ0FBQ3RELEtBQXRCLENBQUYsRUFBK0IsQ0FBQyxDQUFDLEtBQUsyTSxJQUFMLENBQVVuRyxPQUFWLENBQWtCaUUsUUFBbEIsQ0FBMkJ3QixDQUE1QixJQUErQjhKLENBQUMsR0FBQ3pTLENBQUMsQ0FBQzlDLE1BQUosR0FBV2UsQ0FBQyxDQUFDZixNQUE1QyxJQUFvRHlWLENBQUMsSUFBRSxXQUFTQSxDQUFDLENBQUN6UixHQUFGLENBQU0sU0FBTixDQUFoRSxJQUFrRnVSLENBQUMsSUFBRSxLQUFHelMsQ0FBQyxDQUFDOUMsTUFBM0YsTUFBcUcyVixDQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUtKLENBQUMsR0FBQyxDQUFQLEVBQVN6UyxDQUFDLEdBQUM4UyxDQUFoSCxDQUEvQjtBQUFrSixhQUE3VCxFQUE4VCxJQUE5VCxDQUFuQixFQUF1VmpULENBQXZWLENBQTlCLEdBQXlYOFMsQ0FBQyxJQUFFQSxDQUFDLENBQUN6UixHQUFGLENBQU07QUFBQ3hFLG1CQUFLLEVBQUNzRCxDQUFDLENBQUN0RCxLQUFGLEdBQVE7QUFBZixhQUFOLENBQTVYLEVBQXdaa0QsQ0FBQyxHQUFDO0FBQUNsRCxtQkFBSyxFQUFDc0QsQ0FBQyxDQUFDdEQsS0FBVDtBQUFlUSxvQkFBTSxFQUFDOEMsQ0FBQyxDQUFDOUMsTUFBRixHQUFTdVY7QUFBL0IsYUFBMVo7QUFBNGI7O0FBQU0sZUFBSSxRQUFKO0FBQWEsaUJBQUs5RCxPQUFMLEtBQWU5TyxDQUFDLEdBQUMrUyxDQUFGLEVBQUksS0FBS1osYUFBTCxDQUFtQjlWLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBQ2tQLENBQUMsR0FBQyxLQUFLVixjQUFMLENBQW9CL1IsQ0FBQyxDQUFDdEQsS0FBdEIsQ0FBSCxLQUFrQyxNQUFJc0QsQ0FBQyxDQUFDOUMsTUFBeEMsS0FBaUQyVixDQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUtKLENBQUMsR0FBQyxDQUF4RDtBQUEyRCxhQUE5RSxFQUErRSxJQUEvRSxDQUFuQixFQUF3RzVTLENBQXhHLENBQW5CLEdBQStIRCxDQUFDLEdBQUNJLENBQWpJO0FBQW1JOztBQUFNLGVBQUksV0FBSjtBQUFnQixnQkFBSStTLENBQUMsR0FBQyxFQUFOO0FBQVNILGFBQUMsSUFBRUcsQ0FBQyxDQUFDak4sSUFBRixDQUFPOE0sQ0FBUCxDQUFILEVBQWEsS0FBS1osYUFBTCxDQUFtQjlWLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxZQUFVO0FBQUMsa0JBQUcsQ0FBQ3FQLENBQUMsSUFBRXBWLENBQUosS0FBUW1WLENBQUMsQ0FBQ3pSLEdBQUYsQ0FBTTtBQUFDeEUscUJBQUssRUFBQztBQUFQLGVBQU4sQ0FBUixFQUE4QitWLENBQUMsR0FBQyxLQUFLVixjQUFMLENBQW9CekksTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnJQLEtBQTFDLENBQWhDLEVBQWlGa1csQ0FBQyxJQUFFSCxDQUFDLEdBQUMsS0FBR3hVLENBQUMsQ0FBQ2YsTUFBOUYsRUFBcUcsSUFBRzJWLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS3JWLENBQVIsRUFBVTtBQUFDLG9CQUFJdkUsQ0FBQyxHQUFDLEtBQUswVixPQUFMLENBQWFzRCxFQUFiLENBQWdCLFVBQWhCLENBQU47QUFBa0MscUJBQUt0RCxPQUFMLENBQWFySSxJQUFiLElBQW9CbU0sQ0FBQyxHQUFDLEtBQUtWLGNBQUwsQ0FBb0J6SSxNQUFNLENBQUN5QyxjQUFQLENBQXNCclAsS0FBMUMsQ0FBdEIsRUFBdUV6RCxDQUFDLElBQUUsS0FBSzBWLE9BQUwsQ0FBYXRJLElBQWIsRUFBMUU7QUFBOEYsZUFBM0ksTUFBZ0pvTSxDQUFDLEdBQUMsQ0FBRjtBQUFJelMsZUFBQyxHQUFDVCxHQUFHLENBQUNDLE1BQUosQ0FBVztBQUFDOUMscUJBQUssRUFBQ3VCLENBQUMsQ0FBQ3ZCLEtBQVQ7QUFBZVEsc0JBQU0sRUFBQytDLElBQUksQ0FBQ0UsR0FBTCxDQUFTLENBQVQsRUFBV2xDLENBQUMsQ0FBQ2YsTUFBRixHQUFTdVYsQ0FBcEI7QUFBdEIsZUFBWCxFQUF5RHpTLENBQXpELEVBQTJERixDQUEzRCxDQUFGLEVBQWdFRixDQUFDLEdBQUNJLENBQWxFO0FBQW9FLGFBQWhWLEVBQWlWLElBQWpWLENBQW5CLEVBQTBXK1MsQ0FBMVcsQ0FBYixFQUEwWCxLQUFLcmIsT0FBTCxDQUFhd0osR0FBYixDQUFpQjtBQUFDLGdDQUFpQjtBQUFsQixhQUFqQixDQUExWDtBQUFycUI7O0FBQXNrQzBSLFNBQUMsSUFBRUEsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsTUFBRCxHQUFRLE1BQVYsQ0FBRCxFQUFILEVBQXdCLEtBQUsvZixPQUFMLENBQWEsQ0FBQytmLENBQUMsR0FBQyxRQUFELEdBQVUsS0FBWixJQUFtQixPQUFoQyxFQUF5QyxlQUF6QyxDQUF4QixFQUFrRixLQUFLL2YsT0FBTCxDQUFhLENBQUMrZixDQUFDLEdBQUMsS0FBRCxHQUFPLFFBQVQsSUFBbUIsT0FBaEMsRUFBeUMsZ0JBQXpDLENBQWxGLEVBQTZJLEtBQUtuYixPQUFMLENBQWF3SixHQUFiLENBQWlCbEIsQ0FBakIsQ0FBN0ksRUFBaUssS0FBS2lQLFVBQUwsQ0FBZ0IvTixHQUFoQixDQUFvQnRCLENBQXBCLENBQWpLLEVBQXdMLEtBQUtrUixZQUFMLElBQW1CLEtBQUtBLFlBQUwsQ0FBa0I1QixJQUFsQixDQUF1QmxQLENBQXZCLENBQTNNLEVBQXFPLEtBQUs0SSxPQUFMLEdBQWE7QUFBQ0QsV0FBQyxFQUFDL0ksQ0FBQyxDQUFDMUMsTUFBRixJQUFVLGdCQUFjLEtBQUtxVSxHQUFuQixHQUF1QmtCLENBQXZCLEdBQXlCLENBQW5DLElBQXNDbkosTUFBTSxDQUFDeUMsY0FBUCxDQUFzQjdPLE1BQS9EO0FBQXNFd0wsV0FBQyxFQUFDO0FBQXhFLFNBQWxQLEVBQTZULEtBQUttSixNQUFMLEdBQVksQ0FBQyxLQUFLUyxXQUFOLElBQW1CLEtBQUtqSixJQUFMLENBQVVuRyxPQUFWLENBQWtCaUUsUUFBbEIsQ0FBMkJ3QixDQUE5QyxJQUFpRCxJQUFFLEtBQUtDLE9BQUwsQ0FBYUQsQ0FBelksRUFBMlksS0FBS3FLLFdBQUwsR0FBaUJQLENBQTVaLEVBQThaLEtBQUtRLFFBQUwsR0FBY3ZULENBQTVhLEVBQThhLEtBQUt1UixrQkFBTCxHQUF3QmpSLENBQXRjLEVBQXdjLEtBQUtrVCxxQkFBTCxHQUEyQnRULENBQW5lLEVBQXFldUosS0FBSyxDQUFDLENBQUMsS0FBSzBJLE1BQUwsR0FBWSxLQUFaLEdBQWtCLFFBQW5CLElBQTZCLFVBQTlCLENBQUwsQ0FBK0MsS0FBS2xGLFNBQXBELENBQXJlLEVBQW9pQixLQUFLckYsUUFBTCxFQUFwaUI7QUFBb2pCO0FBQUMsS0FBLzVhO0FBQWc2YUEsWUFBUSxFQUFDLG9CQUFVO0FBQUMsVUFBRyxLQUFLNVAsT0FBUixFQUFnQjtBQUFDLFlBQUl1QixDQUFDLEdBQUMsS0FBS2dZLGtCQUFYO0FBQUEsWUFBOEI1ZCxDQUFDLEdBQUMsS0FBSzZmLHFCQUFyQztBQUFBLFlBQTJEalYsQ0FBQyxHQUFDO0FBQUMyTixhQUFHLEVBQUMsS0FBR3RDLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0I3TyxNQUF6QixHQUFnQyxLQUFHN0osQ0FBQyxDQUFDNkosTUFBMUM7QUFBaUQySixjQUFJLEVBQUMsS0FBR3lDLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JyUCxLQUF6QixHQUErQixLQUFHckosQ0FBQyxDQUFDcUo7QUFBMUYsU0FBN0Q7QUFBQSxZQUE4SmdELENBQUMsR0FBQztBQUFDa00sYUFBRyxFQUFDM04sQ0FBQyxDQUFDMk4sR0FBRixHQUFNM1MsQ0FBQyxDQUFDaUUsTUFBYjtBQUFvQjJKLGNBQUksRUFBQzVJLENBQUMsQ0FBQzRJO0FBQTNCLFNBQWhLO0FBQUEsWUFBaU1sSCxDQUFDLEdBQUMsQ0FBbk07QUFBQSxZQUFxTUMsQ0FBQyxHQUFDLGFBQVcsS0FBSzJSLEdBQWhCLEdBQW9CLEtBQUsvQixVQUF6QixHQUFvQyxLQUFLWixJQUFoUDs7QUFBcVAsZ0JBQU8sS0FBSzJDLEdBQVo7QUFBaUIsZUFBSSxXQUFKO0FBQWdCdFQsYUFBQyxDQUFDMk4sR0FBRixHQUFNLE1BQUl0QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCN08sTUFBdEIsR0FBNkIsS0FBSzhWLFdBQXRDLElBQW1ELEtBQUczZixDQUFDLENBQUM2SixNQUE5RCxFQUFxRXdDLENBQUMsR0FBQztBQUFDa00saUJBQUcsRUFBQ3RDLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0I3TyxNQUF0QixHQUE2QixLQUFLOFYsV0FBdkM7QUFBbURuTSxrQkFBSSxFQUFDLENBQXhEO0FBQTBEc00sb0JBQU0sRUFBQztBQUFqRSxhQUF2RSxFQUFnSnhULENBQUMsR0FBQyxLQUFLcVQsV0FBdko7QUFBbUs7O0FBQU0sZUFBSSxRQUFKO0FBQWF0VCxhQUFDLEdBQUM7QUFBQ2tNLGlCQUFHLEVBQUMsTUFBTDtBQUFZL0Usa0JBQUksRUFBQyxDQUFqQjtBQUFtQnNNLG9CQUFNLEVBQUM7QUFBMUIsYUFBRjtBQUF2Tjs7QUFBc1AsWUFBRyxJQUFFLEtBQUt2SyxPQUFMLENBQWFELENBQWxCLEVBQW9CO0FBQUMsY0FBSTlJLENBQUMsR0FBQ3NKLEtBQUssQ0FBQ2lLLE1BQU4sRUFBTjs7QUFBcUIsa0JBQU9uVixDQUFDLENBQUMyTixHQUFGLEdBQU0sSUFBRS9MLENBQUMsQ0FBQzhJLENBQUYsR0FBSSxLQUFLQyxPQUFMLENBQWFELENBQXpCLEVBQTJCLEtBQUs0SSxHQUF2QztBQUE0QyxpQkFBSSxTQUFKO0FBQWMsaUJBQUksV0FBSjtBQUFnQjdSLGVBQUMsQ0FBQ2tNLEdBQUYsR0FBTXRDLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0I3TyxNQUF0QixHQUE2QixLQUFLOFYsV0FBeEM7QUFBb0Q7O0FBQU0saUJBQUksUUFBSjtBQUFhLGtCQUFJbFQsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDMk4sR0FBRixHQUFNM1MsQ0FBQyxDQUFDaUUsTUFBUixHQUFlb00sTUFBTSxDQUFDeUMsY0FBUCxDQUFzQjdPLE1BQTNDO0FBQUEsa0JBQWtENkMsQ0FBQyxHQUFDLENBQUMsQ0FBRCxHQUFHOUIsQ0FBQyxDQUFDMk4sR0FBekQ7O0FBQTZELGtCQUFHbE0sQ0FBQyxDQUFDeVQsTUFBRixHQUFTclQsQ0FBVCxFQUFXLEtBQUt3UCxXQUFMLENBQWlCcE8sR0FBakIsQ0FBcUI7QUFBQzBLLG1CQUFHLEVBQUM3TDtBQUFMLGVBQXJCLENBQVgsRUFBeUMsSUFBRSxLQUFLc08sTUFBbkQsRUFBMEQ7QUFBQyxvQkFBSXJPLENBQUMsR0FBQ3NKLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZW1mLEVBQWYsQ0FBa0IsVUFBbEIsQ0FBTjtBQUFvQ2pTLGlCQUFDLElBQUVzSixNQUFNLENBQUN4VyxPQUFQLENBQWV1VCxJQUFmLEVBQUg7QUFBeUIsb0JBQUlvTSxDQUFDLEdBQUMsS0FBS3JELGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLE9BQXpCLENBQU47QUFBd0MscUJBQUtFLGNBQUwsQ0FBb0JpRSxVQUFwQixDQUErQixPQUEvQjtBQUF3QyxvQkFBSVgsQ0FBQyxHQUFDSCxRQUFRLENBQUMsS0FBS25ELGNBQUwsQ0FBb0JsTyxHQUFwQixDQUF3QixZQUF4QixDQUFELENBQWQ7QUFBc0QscUJBQUtrTyxjQUFMLENBQW9CRixJQUFwQixDQUF5QjtBQUFDbFYsdUJBQUssRUFBQ3lZO0FBQVAsaUJBQXpCLEdBQW9DelMsQ0FBQyxJQUFFc0osTUFBTSxDQUFDeFcsT0FBUCxDQUFld1QsSUFBZixFQUF2QztBQUE2RCxvQkFBSXFNLENBQUMsR0FBQyxLQUFLdkQsY0FBTCxDQUFvQjlkLEdBQXBCLENBQXdCLEtBQUsrZCxVQUE3QixDQUFOO0FBQUEsb0JBQStDdUQsQ0FBQyxHQUFDLEtBQUcsS0FBS2hLLE9BQUwsQ0FBYUQsQ0FBakU7QUFBbUVnSyxpQkFBQyxDQUFDelIsR0FBRixDQUFNO0FBQUMsZ0NBQWF3UixDQUFDLElBQUUzUyxDQUFDLEdBQUM2UyxDQUFKO0FBQWYsaUJBQU4sR0FBOEIsS0FBS2hELGNBQUwsSUFBcUIsS0FBS0EsY0FBTCxDQUFvQjFPLEdBQXBCLENBQXdCO0FBQUNpUyx3QkFBTSxFQUFDclQ7QUFBUixpQkFBeEIsQ0FBbkQ7QUFBdUY7O0FBQW5xQjtBQUFxcUIsU0FBL3NCLE1BQW10QixhQUFXLEtBQUt5UixHQUFoQixJQUFxQixLQUFLemUsT0FBTCxDQUFhd2dCLElBQWIsQ0FBa0Isb0RBQWxCLEVBQXdFRCxVQUF4RSxDQUFtRixPQUFuRixDQUFyQjs7QUFBaUh6VCxTQUFDLElBQUVBLENBQUMsQ0FBQ3NCLEdBQUYsQ0FBTXhCLENBQU4sQ0FBSCxFQUFZLEtBQUt4SCxTQUFMLENBQWVnSixHQUFmLENBQW1CO0FBQUNpUyxnQkFBTSxFQUFDeFQ7QUFBUixTQUFuQixDQUFaLEVBQTJDLEtBQUtqSSxPQUFMLENBQWF3SixHQUFiLENBQWlCakQsQ0FBakIsQ0FBM0MsRUFBK0QsS0FBS2dSLFVBQUwsQ0FBZ0IvTixHQUFoQixDQUFvQmpELENBQXBCLENBQS9EO0FBQXNGO0FBQUM7QUFBMzBkLEdBQXRCLENBQTNlLEVBQSswZWtRLEVBQWoxZSxDQUEzc1o7QUFBQSxNQUFnaTRCSCxFQUFoaTRCO0FBQUEsTUFBbWk0QkMsRUFBbmk0QjtBQUFBLE1BQXNpNEJDLEVBQXRpNEI7O0FBQXlpNEIsV0FBU0MsRUFBVCxHQUFhO0FBQUMsV0FBTyxLQUFLak0sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkIvRCxNQUFNLENBQUNnRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCLENBQVA7QUFBMEQ7O0FBQUEsTUFBSTBKLEtBQUssR0FBQztBQUFDakgsY0FBVSxFQUFDLG9CQUFTakosQ0FBVCxFQUFXO0FBQUMsV0FBS25HLE9BQUwsR0FBYW1HLENBQWIsRUFBZSxLQUFLZ1IsS0FBTCxHQUFXLEVBQTFCLEVBQTZCLEtBQUttRSxHQUFMLEdBQVMsQ0FBdEMsRUFBd0MsS0FBS2xFLFNBQUwsR0FBZSxFQUF2RDtBQUEwRCxLQUFsRjtBQUFtRjFFLFFBQUksRUFBQyxjQUFTdk0sQ0FBVCxFQUFXO0FBQUMsV0FBSzZULEtBQUwsR0FBVzdULENBQVgsRUFBYSxLQUFLeVQsU0FBTCxFQUFiLEVBQThCeFEsQ0FBQyxDQUFDc0csSUFBRixDQUFPdkosQ0FBUCxFQUFTaUQsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxhQUFLNFcsS0FBTCxDQUFXbkUsSUFBWCxDQUFnQixJQUFJaUksSUFBSixDQUFTMWEsQ0FBVCxFQUFXNEYsQ0FBQyxHQUFDLENBQWIsRUFBZSxLQUFLNlQsS0FBTCxDQUFXblgsTUFBMUIsQ0FBaEI7QUFBbUQsT0FBekUsRUFBMEUsSUFBMUUsQ0FBVCxDQUE5QjtBQUF3SCxLQUE1TjtBQUE2TjBRLFFBQUksRUFBQyxjQUFTcE4sQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsVUFBSTRLLENBQUMsR0FBQyxLQUFLZ00sS0FBTCxDQUFXaFIsQ0FBQyxHQUFDLENBQWIsQ0FBTjtBQUFzQixXQUFLbVEsSUFBTCxJQUFXLEtBQUtBLElBQUwsQ0FBVWdGLEdBQVYsS0FBZ0JuUSxDQUFDLENBQUNtUSxHQUE3QixLQUFtQyxLQUFLaEYsSUFBTCxHQUFVbkwsQ0FBVixFQUFZdU0sVUFBVSxDQUFDbkUsSUFBWCxDQUFnQnBOLENBQWhCLENBQVosRUFBK0JxUSxNQUFNLENBQUNpQyxtQkFBUCxFQUEvQixFQUE0RHROLENBQUMsQ0FBQ29JLElBQUYsQ0FBT25LLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxZQUFVO0FBQUNsUSxTQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLE9BQTFCLEVBQTJCLElBQTNCLENBQVAsQ0FBL0Y7QUFBeUksS0FBL1k7QUFBZ1prZ0IsZ0NBQTRCLEVBQUMsc0NBQVN0VixDQUFULEVBQVc7QUFBQyxVQUFJeUIsQ0FBQyxHQUFDLENBQU47QUFBUSxhQUFPeEQsQ0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUt5SCxLQUFaLEVBQWtCLFVBQVNoUixDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDZ1csSUFBRixDQUFPdlcsT0FBUCxJQUFnQk8sQ0FBQyxDQUFDZ1csSUFBRixDQUFPdlcsT0FBUCxLQUFpQm1MLENBQWpDLEtBQXFDeUIsQ0FBQyxHQUFDekcsQ0FBQyxHQUFDLENBQXpDO0FBQTRDLE9BQTVFLEdBQThFeUcsQ0FBckY7QUFBdUYsS0FBeGhCO0FBQXloQjhULG1CQUFlLEVBQUMsMkJBQVU7QUFBQyxVQUFJdlYsQ0FBQyxHQUFDLENBQU47QUFBUSxhQUFPL0IsQ0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUt5SCxLQUFaLEVBQWtCLFVBQVNoUixDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDOGMsT0FBRixJQUFXbFMsQ0FBQyxFQUFaO0FBQWUsT0FBL0MsR0FBaURBLENBQXhEO0FBQTBELEtBQXRuQjtBQUF1bkJ5TyxhQUFTLEVBQUMscUJBQVU7QUFBQ3hRLE9BQUMsQ0FBQ3NHLElBQUYsQ0FBTyxLQUFLeUgsS0FBWixFQUFrQixVQUFTaFIsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ1ksTUFBRjtBQUFXLE9BQTNDLEdBQTZDLEtBQUtnVyxLQUFMLEdBQVcsRUFBeEQ7QUFBMkQsS0FBdnNCO0FBQXdzQnVILGdCQUFZLEVBQUMsc0JBQVN2VCxDQUFULEVBQVd5QixDQUFYLEVBQWE7QUFBQyxVQUFJQyxDQUFDLEdBQUMsRUFBTjtBQUFTekQsT0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUt5SCxLQUFaLEVBQWtCL04sQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDK2EsR0FBRixLQUFRLEtBQUtoRixJQUFMLENBQVVnRixHQUFsQixJQUF1QnpPLENBQUMsQ0FBQ21HLElBQUYsQ0FBT3pTLENBQVAsQ0FBdkI7QUFBaUMsT0FBdkQsRUFBd0QsSUFBeEQsQ0FBbEI7QUFBaUYsVUFBSXVNLENBQUMsR0FBQyxJQUFFRCxDQUFDLENBQUNoSyxNQUFWO0FBQWlCLGFBQU9pSyxDQUFDLEdBQUMsQ0FBRixHQUFJM0IsQ0FBQyxJQUFFQSxDQUFDLEVBQVIsR0FBVy9CLENBQUMsQ0FBQ3NHLElBQUYsQ0FBTzdDLENBQVAsRUFBUyxVQUFTMUcsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ2lULElBQUYsQ0FBTyxZQUFVO0FBQUNySSxXQUFDLElBQUUsRUFBRTJCLENBQUYsR0FBSSxDQUFQLElBQVUzQixDQUFDLEVBQVg7QUFBYyxTQUFoQyxFQUFpQ3lCLENBQWpDO0FBQW9DLE9BQTNELENBQVgsRUFBd0VDLENBQUMsQ0FBQ2hLLE1BQWpGO0FBQXdGLEtBQXQ2QjtBQUF1NkIwYixnQkFBWSxFQUFDLHdCQUFVO0FBQUNuVixPQUFDLENBQUNzRyxJQUFGLENBQU8sS0FBS3lILEtBQVosRUFBa0IvTixDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUMrYSxHQUFGLEtBQVEsS0FBS2hGLElBQUwsQ0FBVWdGLEdBQWxCLElBQXVCL2EsQ0FBQyxDQUFDdVcsSUFBRixFQUF2QjtBQUFnQyxPQUF0RCxFQUF1RCxJQUF2RCxDQUFsQjtBQUFnRixLQUEvZ0M7QUFBZ2hDQSxRQUFJLEVBQUMsZ0JBQVU7QUFBQzFOLE9BQUMsQ0FBQ3NHLElBQUYsQ0FBTyxLQUFLeUgsS0FBWixFQUFrQixVQUFTaFIsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ3VXLElBQUY7QUFBUyxPQUF6QztBQUEyQyxLQUEza0M7QUFBNGtDNkosa0JBQWMsRUFBQyx3QkFBU3hhLENBQVQsRUFBVztBQUFDMEQsYUFBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixHQUFXLENBQXZCLElBQTBCLEtBQUtvVyxLQUFMLENBQVc7QUFBQ2hMLFNBQUMsRUFBQ3pQLENBQUMsQ0FBQzBhLEtBQUw7QUFBV2hMLFNBQUMsRUFBQzFQLENBQUMsQ0FBQzJhO0FBQWYsT0FBWCxHQUFrQyxLQUFLQyxlQUFMLEVBQTVELElBQW9GLEtBQUtDLGVBQUwsR0FBcUJ4USxVQUFVLENBQUNwSCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGFBQUttUSxLQUFMLENBQVc7QUFBQ2hMLFdBQUMsRUFBQ3pQLENBQUMsQ0FBQzBhLEtBQUw7QUFBV2hMLFdBQUMsRUFBQzFQLENBQUMsQ0FBQzJhO0FBQWYsU0FBWCxHQUFrQyxLQUFLQyxlQUFMLEVBQWxDO0FBQXlELE9BQTVFLEVBQTZFLElBQTdFLENBQUQsRUFBb0YsRUFBcEYsQ0FBbkg7QUFBMk0sS0FBbHpDO0FBQW16Q0Usc0JBQWtCLEVBQUMsOEJBQVU7QUFBQyxXQUFLRCxlQUFMLEtBQXVCeFAsWUFBWSxDQUFDLEtBQUt3UCxlQUFOLENBQVosRUFBbUMsS0FBS0EsZUFBTCxHQUFxQixJQUEvRTtBQUFxRixLQUF0NkM7QUFBdTZDRSxpQkFBYSxFQUFDLHlCQUFVO0FBQUNyVCxhQUFPLENBQUNtQixXQUFSLElBQXFCLEtBQUttUyxlQUExQixJQUEyQy9YLENBQUMsQ0FBQ3pHLFFBQVEsQ0FBQ3NILGVBQVYsQ0FBRCxDQUE0QmlDLEVBQTVCLENBQStCLFdBQS9CLEVBQTJDLEtBQUtpVixlQUFMLEdBQXFCL1gsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUtrUSxjQUFiLEVBQTRCLElBQTVCLENBQWhFLENBQTNDO0FBQThJLEtBQTlrRDtBQUEra0RTLGdCQUFZLEVBQUMsd0JBQVU7QUFBQyxPQUFDdlQsT0FBTyxDQUFDbUIsV0FBVCxJQUFzQixLQUFLbVMsZUFBM0IsS0FBNkMvWCxDQUFDLENBQUN6RyxRQUFRLENBQUNzSCxlQUFWLENBQUQsQ0FBNEJvTyxHQUE1QixDQUFnQyxXQUFoQyxFQUE0QyxLQUFLOEksZUFBakQsR0FBa0UsS0FBS0EsZUFBTCxHQUFxQixJQUF2RixFQUE0RixLQUFLRixrQkFBTCxFQUF6STtBQUFvSyxLQUEzd0Q7QUFBNHdESSxlQUFXLEVBQUMscUJBQVNsYixDQUFULEVBQVc7QUFBQyxXQUFLbWIsVUFBTCxDQUFnQm5iLENBQWhCLE1BQXFCLEtBQUtpUixTQUFMLENBQWVwRSxJQUFmLENBQW9CLEtBQUttRSxLQUFMLENBQVdoUixDQUFDLEdBQUMsQ0FBYixDQUFwQixHQUFxQyxNQUFJLEtBQUtpUixTQUFMLENBQWV2VSxNQUFuQixJQUEyQixLQUFLcWUsYUFBTCxFQUFyRjtBQUEyRyxLQUEvNEQ7QUFBZzVESyxpQkFBYSxFQUFDLHlCQUFVO0FBQUMsV0FBS25LLFNBQUwsR0FBZSxFQUFmO0FBQWtCLEtBQTM3RDtBQUE0N0QwSCxrQkFBYyxFQUFDLHdCQUFTdmUsQ0FBVCxFQUFXO0FBQUMsV0FBSzZXLFNBQUwsR0FBZWhPLENBQUMsQ0FBQ29ZLElBQUYsQ0FBTyxLQUFLcEssU0FBWixFQUFzQixVQUFTalIsQ0FBVCxFQUFXO0FBQUMsZUFBT0EsQ0FBQyxDQUFDMFQsU0FBRixLQUFjdFosQ0FBckI7QUFBdUIsT0FBekQsQ0FBZixFQUEwRSxLQUFLNlcsU0FBTCxDQUFldlUsTUFBZixHQUFzQixDQUF0QixJQUF5QixLQUFLdWUsWUFBTCxFQUFuRztBQUF1SCxLQUE5a0U7QUFBK2tFRSxjQUFVLEVBQUMsb0JBQVNuVyxDQUFULEVBQVc7QUFBQyxVQUFJeUIsQ0FBQyxHQUFDLENBQUMsQ0FBUDtBQUFTLGFBQU94RCxDQUFDLENBQUNzRyxJQUFGLENBQU8sS0FBSzBILFNBQVosRUFBc0IsVUFBU2pSLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFlBQUdBLENBQUMsQ0FBQ3NaLFNBQUYsS0FBYzFPLENBQWpCLEVBQW1CLE9BQU0sRUFBRXlCLENBQUMsR0FBQyxDQUFDLENBQUwsQ0FBTjtBQUFjLE9BQXJFLEdBQXVFQSxDQUE5RTtBQUFnRixLQUEvckU7QUFBZ3NFZ1UsU0FBSyxFQUFDLGVBQVN6YSxDQUFULEVBQVc7QUFBQyxXQUFLc2IsR0FBTCxHQUFTdGIsQ0FBVDtBQUFXLEtBQTd0RTtBQUE4dEVtYSxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFJbmEsQ0FBQyxHQUFDa1EsS0FBSyxDQUFDQyxJQUFaO0FBQUEsVUFBaUJuTCxDQUFDLEdBQUMvQixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVlrTixNQUFNLENBQUN5QyxjQUFuQixDQUFuQjtBQUFBLFVBQXNEMVksQ0FBQyxHQUFDNkksQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZLEtBQUttWSxHQUFqQixDQUF4RDtBQUE4RWxoQixPQUFDLENBQUNzVixDQUFGLElBQUt6TSxDQUFDLENBQUN0SSxNQUFELENBQUQsQ0FBVWlZLFNBQVYsRUFBTCxFQUEyQjVTLENBQUMsS0FBRyxjQUFZQSxDQUFDLENBQUNzWSxHQUFkLElBQW1CLGdCQUFjdFksQ0FBQyxDQUFDc1ksR0FBdEMsQ0FBRCxJQUE2QyxJQUFFdFksQ0FBQyxDQUFDK1osV0FBakQsS0FBK0QvVSxDQUFDLENBQUNmLE1BQUYsSUFBVWpFLENBQUMsQ0FBQytaLFdBQTNFLENBQTNCLEVBQW1IM2YsQ0FBQyxDQUFDc1YsQ0FBRixJQUFLVyxNQUFNLENBQUM0QyxZQUFQLENBQW9CTixHQUE1STtBQUFnSixVQUFJbE0sQ0FBQyxHQUFDO0FBQUNnSixTQUFDLEVBQUMsQ0FBSDtBQUFLQyxTQUFDLEVBQUMxSSxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVM5TSxDQUFDLENBQUNzVixDQUFGLEdBQUkxSyxDQUFDLENBQUNmLE1BQWYsRUFBc0IsQ0FBdEIsQ0FBVCxFQUFrQyxDQUFsQztBQUFQLE9BQU47QUFBQSxVQUFtRHlDLENBQUMsR0FBQztBQUFDK0ksU0FBQyxFQUFDLE9BQUg7QUFBV0MsU0FBQyxFQUFDO0FBQWIsT0FBckQ7QUFBQSxVQUE0RS9JLENBQUMsR0FBQyxFQUE5RTtBQUFpRixhQUFPMUQsQ0FBQyxDQUFDc0csSUFBRixDQUFPLElBQUkxQixLQUFKLENBQVUsR0FBVixDQUFQLEVBQXNCNUUsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ3VNLFNBQUMsQ0FBQ3ZNLENBQUQsQ0FBRCxHQUFLNE0sSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTLEtBQUdsQyxDQUFDLENBQUMwQixDQUFDLENBQUN0TSxDQUFELENBQUYsQ0FBYixFQUFvQixDQUFwQixDQUFULEVBQWdDLENBQWhDLENBQUwsRUFBd0NxTSxDQUFDLENBQUNyTSxDQUFELENBQUQsSUFBTSxJQUFFLElBQUV1TSxDQUFDLENBQUN2TSxDQUFELENBQW5ELEVBQXVEcU0sQ0FBQyxDQUFDck0sQ0FBRCxDQUFELElBQU11TSxDQUFDLENBQUN2TSxDQUFELENBQTlELEVBQWtFcU0sQ0FBQyxDQUFDck0sQ0FBRCxDQUFELEdBQUs0TSxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVNULENBQUMsQ0FBQ3JNLENBQUQsQ0FBVixFQUFjLENBQWQsQ0FBVCxFQUEwQixDQUExQixDQUF2RTtBQUFvRyxPQUExSCxFQUEySCxJQUEzSCxDQUF0QixHQUF3SixLQUFLbWhCLE1BQUwsQ0FBWTlVLENBQVosQ0FBeEosRUFBdUssS0FBSytVLElBQW5MO0FBQXdMLEtBQXZ0RjtBQUF3dEZELFVBQU0sRUFBQyxnQkFBU3ZiLENBQVQsRUFBVztBQUFDLFdBQUt3YixJQUFMLEdBQVV4YixDQUFWO0FBQVksS0FBdnZGO0FBQXd2RjRhLG1CQUFlLEVBQUMsMkJBQVU7QUFBQyxXQUFLM0osU0FBTCxDQUFldlUsTUFBZixHQUFzQixDQUF0QixJQUF5QnVHLENBQUMsQ0FBQ3NHLElBQUYsQ0FBTyxLQUFLMEgsU0FBWixFQUFzQixVQUFTalIsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ2lVLFFBQUY7QUFBYSxPQUFqRCxDQUF6QjtBQUE0RTtBQUEvMUYsR0FBVjs7QUFBMjJGLFdBQVNvTixJQUFULEdBQWU7QUFBQyxTQUFLeFMsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBMkIvRCxNQUFNLENBQUNnRSxJQUFQLENBQVkzQyxTQUFaLENBQTNCO0FBQW1EOztBQUFBdkQsR0FBQyxDQUFDRSxNQUFGLENBQVNzWSxJQUFJLENBQUNwVyxTQUFkLEVBQXdCO0FBQUM0RCxjQUFVLEVBQUMsb0JBQVN5UyxNQUFULEVBQWdCO0FBQUMsVUFBSXpSLE9BQU8sR0FBQ3pELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBYyxFQUExQjtBQUFBLFVBQTZCbkwsSUFBSSxHQUFDLEVBQWxDO0FBQXFDLFVBQUcsYUFBVzRILENBQUMsQ0FBQ3FHLElBQUYsQ0FBT29TLE1BQVAsQ0FBZCxFQUE2QkEsTUFBTSxHQUFDO0FBQUM1aEIsV0FBRyxFQUFDNGhCO0FBQUwsT0FBUCxDQUE3QixLQUFzRCxJQUFHQSxNQUFNLElBQUUsTUFBSUEsTUFBTSxDQUFDaFcsUUFBdEIsRUFBK0I7QUFBQyxZQUFJN0wsT0FBTyxHQUFDb0osQ0FBQyxDQUFDeVksTUFBRCxDQUFiO0FBQXNCQSxjQUFNLEdBQUM7QUFBQzdoQixpQkFBTyxFQUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFoQjtBQUFvQkMsYUFBRyxFQUFDRCxPQUFPLENBQUNvYyxJQUFSLENBQWEsTUFBYixDQUF4QjtBQUE2Q1AsaUJBQU8sRUFBQzdiLE9BQU8sQ0FBQ29jLElBQVIsQ0FBYSxxQkFBYixDQUFyRDtBQUF5RjBGLGVBQUssRUFBQzloQixPQUFPLENBQUNvYyxJQUFSLENBQWEsbUJBQWIsQ0FBL0Y7QUFBaUkvSixtQkFBUyxFQUFDclMsT0FBTyxDQUFDb2MsSUFBUixDQUFhLHVCQUFiLENBQTNJO0FBQWlMM00sY0FBSSxFQUFDelAsT0FBTyxDQUFDb2MsSUFBUixDQUFhLGtCQUFiLENBQXRMO0FBQXVOaE0saUJBQU8sRUFBQ3BRLE9BQU8sQ0FBQ29jLElBQVIsQ0FBYSxxQkFBYixLQUFxQzJGLElBQUksQ0FBQyxPQUFLL2hCLE9BQU8sQ0FBQ29jLElBQVIsQ0FBYSxxQkFBYixDQUFMLEdBQXlDLElBQTFDLENBQXpDLElBQTBGO0FBQXpULFNBQVA7QUFBb1U7QUFBQSxhQUFPeUYsTUFBTSxLQUFHQSxNQUFNLENBQUN4UCxTQUFQLEtBQW1Cd1AsTUFBTSxDQUFDeFAsU0FBUCxHQUFpQnpDLGVBQWUsQ0FBQ2lTLE1BQU0sQ0FBQzVoQixHQUFSLENBQW5ELEdBQWlFNGhCLE1BQU0sQ0FBQ3BTLElBQVAsS0FBY2pPLElBQUksR0FBQ2dPLFVBQVUsQ0FBQ3FTLE1BQU0sQ0FBQzVoQixHQUFSLENBQWYsRUFBNEI0aEIsTUFBTSxDQUFDM0QsS0FBUCxHQUFhMWMsSUFBekMsRUFBOENxZ0IsTUFBTSxDQUFDcFMsSUFBUCxHQUFZak8sSUFBSSxDQUFDaU8sSUFBN0UsQ0FBcEUsQ0FBTixFQUE4Sm9TLE1BQU0sQ0FBQzNELEtBQVAsS0FBZTJELE1BQU0sQ0FBQzNELEtBQVAsR0FBYTFPLFVBQVUsQ0FBQ3FTLE1BQU0sQ0FBQzVoQixHQUFSLENBQXRDLENBQTlKLEVBQWtONGhCLE1BQU0sSUFBRUEsTUFBTSxDQUFDelIsT0FBZixHQUF1QnlSLE1BQU0sQ0FBQ3pSLE9BQVAsR0FBZWhILENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQUMsQ0FBVixFQUFZRixDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVk4RyxPQUFaLENBQVosRUFBaUNoSCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVl1WSxNQUFNLENBQUN6UixPQUFuQixDQUFqQyxDQUF0QyxHQUFvR3lSLE1BQU0sQ0FBQ3pSLE9BQVAsR0FBZWhILENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWThHLE9BQVosQ0FBclUsRUFBMFZ5UixNQUFNLENBQUN6UixPQUFQLEdBQWVnRCxPQUFPLENBQUN1QyxNQUFSLENBQWVrTSxNQUFNLENBQUN6UixPQUF0QixFQUE4QnlSLE1BQU0sQ0FBQ3BTLElBQXJDLEVBQTBDb1MsTUFBTSxDQUFDM0QsS0FBakQsQ0FBelcsRUFBaWE5VSxDQUFDLENBQUNFLE1BQUYsQ0FBUyxJQUFULEVBQWN1WSxNQUFkLENBQWphLEVBQXViLElBQTliO0FBQW1jO0FBQXI3QixHQUF4QjtBQUFnOUIsTUFBSWxLLE9BQU8sR0FBQztBQUFDcUssYUFBUyxFQUFDblUsT0FBTyxDQUFDTyxHQUFSLENBQVlHLFNBQVosSUFBdUJWLE9BQU8sQ0FBQ08sR0FBUixDQUFZQyxTQUE5QztBQUF3RGUsY0FBVSxFQUFDLG9CQUFTakosQ0FBVCxFQUFXO0FBQUMsV0FBS25HLE9BQUwsR0FBYW9KLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0M1QyxJQUFsQyxFQUFiOztBQUFzRCxXQUFJLElBQUlqVCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLElBQUUsRUFBZixFQUFrQkEsQ0FBQyxFQUFuQixFQUFzQixLQUFLUCxPQUFMLENBQWFzQyxNQUFiLENBQW9COEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixhQUFXN1YsQ0FBL0IsQ0FBcEI7O0FBQXVELFdBQUtQLE9BQUwsQ0FBYWtNLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0I5QyxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDK0YsY0FBTSxDQUFDaEQsSUFBUDtBQUFjLE9BQWpDLEVBQWtDLElBQWxDLENBQXhCLEdBQWlFLEtBQUt4VCxPQUFMLENBQWFrTSxFQUFiLENBQWdCLG1CQUFoQixFQUFvQyxVQUFTL0YsQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ3hGLGNBQUY7QUFBbUIsT0FBbkUsQ0FBakU7QUFBc0ksS0FBeFY7QUFBeVY4VixXQUFPLEVBQUMsaUJBQVN0USxDQUFULEVBQVc7QUFBQyxXQUFLNmIsU0FBTCxLQUFpQixLQUFLbEssS0FBTCxJQUFZLEtBQUs5WCxPQUFMLENBQWEwVyxXQUFiLENBQXlCLHFCQUFtQixLQUFLb0IsS0FBakQsQ0FBWixFQUFvRSxLQUFLbUssZ0JBQUwsRUFBcEUsRUFBNEYsS0FBS2ppQixPQUFMLENBQWFvVyxRQUFiLENBQXNCLHFCQUFtQmpRLENBQXpDLENBQTVGLEVBQXdJLEtBQUsyUixLQUFMLEdBQVczUixDQUFwSztBQUF1SyxLQUFwaEI7QUFBcWhCOGIsb0JBQWdCLEVBQUMsNEJBQVU7QUFBQyxVQUFJOWIsQ0FBQyxHQUFDLEtBQUswUixTQUFYO0FBQXFCMVIsT0FBQyxJQUFFLEtBQUt3USxNQUFMLEVBQUgsRUFBaUIsS0FBS3VMLFdBQUwsR0FBaUI7QUFBQ3RZLGFBQUssRUFBQyxLQUFLNUosT0FBTCxDQUFhMmQsVUFBYixFQUFQO0FBQWlDdlQsY0FBTSxFQUFDLEtBQUtwSyxPQUFMLENBQWE0ZCxXQUFiO0FBQXhDLE9BQWxDLEVBQXNHelgsQ0FBQyxJQUFFLEtBQUswUSxNQUFMLEVBQXpHO0FBQXVILEtBQTdyQjtBQUE4ckJGLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtrQixTQUFMLEtBQWlCek8sQ0FBQyxDQUFDekcsUUFBUSxDQUFDaVUsSUFBVixDQUFELENBQWlCdFUsTUFBakIsQ0FBd0IsS0FBS3RDLE9BQTdCLEdBQXNDLEtBQUs2WCxTQUFMLEdBQWUsQ0FBQyxDQUF2RTtBQUEwRSxLQUExeEI7QUFBMnhCaEIsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS2dCLFNBQUwsS0FBaUIsS0FBSzdYLE9BQUwsQ0FBYTZXLE1BQWIsSUFBc0IsS0FBS2dCLFNBQUwsR0FBZSxDQUFDLENBQXZEO0FBQTBELEtBQXYyQjtBQUF3MkJ0RSxRQUFJLEVBQUMsY0FBU3BOLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDLFdBQUtrYixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCLEtBQUs5RSxNQUFMLEVBQWpCLEVBQStCLEtBQUtrQyxNQUFMLEVBQS9CO0FBQTZDLFVBQUkxTixDQUFDLEdBQUNrTCxLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JuRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDRyxPQUFoQyxDQUF3Q0YsSUFBcEQsSUFBMEQsQ0FBaEU7QUFBQSxVQUFrRTNHLENBQUMsR0FBQyxDQUFDLGFBQVd4RCxDQUFDLENBQUNxRyxJQUFGLENBQU9sUCxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCNEssQ0FBeEIsS0FBNEIsQ0FBaEc7QUFBa0csV0FBS25MLE9BQUwsQ0FBYThXLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkJuSyxDQUE3QixFQUErQixDQUEvQixFQUFpQ3pHLENBQWpDO0FBQW9DLEtBQTlpQztBQUEraUNxTixRQUFJLEVBQUMsY0FBU3JOLENBQVQsRUFBVzVGLENBQVgsRUFBYTRLLENBQWIsRUFBZTtBQUFDLFdBQUtzUSxRQUFMLEdBQWMsQ0FBQyxDQUFmO0FBQWlCLFVBQUk3TyxDQUFDLEdBQUN5SixLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JuRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDRyxPQUFoQyxDQUF3Q0QsSUFBcEQsSUFBMEQsQ0FBaEU7QUFBQSxVQUFrRTNHLENBQUMsR0FBQyxDQUFDLGFBQVd6RCxDQUFDLENBQUNxRyxJQUFGLENBQU9sUCxDQUFQLENBQVgsR0FBcUJBLENBQXJCLEdBQXVCcU0sQ0FBeEIsS0FBNEIsQ0FBaEc7QUFBa0csV0FBSzVNLE9BQUwsQ0FBYThXLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQkUsT0FBdEIsQ0FBOEJuSyxDQUFDLElBQUUsQ0FBakMsRUFBbUN6RCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGFBQUtvRyxNQUFMLElBQWMxUSxDQUFDLElBQUVBLENBQUMsRUFBbEI7QUFBcUIsT0FBeEMsRUFBeUMsSUFBekMsQ0FBbkM7QUFBbUYsS0FBMXdDO0FBQTJ3QzBTLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUcsS0FBS21KLFNBQVIsRUFBa0I7QUFBQyxhQUFLRSxXQUFMLElBQWtCLEtBQUtELGdCQUFMLEVBQWxCO0FBQTBDLFlBQUk5YixDQUFDLEdBQUNrUSxLQUFLLENBQUNDLElBQVo7QUFBQSxZQUFpQi9WLENBQUMsR0FBQyxDQUFuQjtBQUFxQjRGLFNBQUMsSUFBRSxnQkFBY0EsQ0FBQyxDQUFDc1ksR0FBbkIsSUFBd0J0WSxDQUFDLENBQUMrWSxhQUFGLENBQWdCLFlBQVU7QUFBQzNlLFdBQUMsR0FBQzRGLENBQUMsQ0FBQzhZLGNBQUYsQ0FBaUJ6SSxNQUFNLENBQUN5QyxjQUFQLENBQXNCclAsS0FBdkMsQ0FBRjtBQUFnRCxTQUEzRSxDQUF4QixFQUFxRyxLQUFLNUosT0FBTCxDQUFhb08sR0FBYixDQUFpQjtBQUFDMEssYUFBRyxFQUFDdEMsTUFBTSxDQUFDNEMsWUFBUCxDQUFvQk4sR0FBcEIsR0FBd0IsS0FBR3RDLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0I3TyxNQUFqRCxHQUF3RCxLQUFHLEtBQUs4WCxXQUFMLENBQWlCOVgsTUFBNUUsR0FBbUYsS0FBRzdKLENBQTNGO0FBQTZGd1QsY0FBSSxFQUFDeUMsTUFBTSxDQUFDNEMsWUFBUCxDQUFvQnJGLElBQXBCLEdBQXlCLEtBQUd5QyxNQUFNLENBQUN5QyxjQUFQLENBQXNCclAsS0FBbEQsR0FBd0QsS0FBRyxLQUFLc1ksV0FBTCxDQUFpQnRZO0FBQTlLLFNBQWpCLENBQXJHO0FBQTRTO0FBQUM7QUFBNXBELEdBQVo7QUFBQSxNQUEwcUR1WSxPQUFPLEdBQUM7QUFBQ0MsYUFBUyxFQUFDLENBQUMsQ0FBWjtBQUFjQyxhQUFTLEVBQUMsQ0FBQyxDQUF6QjtBQUEyQmpULGNBQVUsRUFBQyxzQkFBVTtBQUFDb0gsWUFBTSxDQUFDcEgsVUFBUCxJQUFvQixLQUFLZ1QsU0FBTCxJQUFnQixLQUFLRSxlQUFMLEVBQXBDO0FBQTJELEtBQTVHO0FBQTZHQSxtQkFBZSxFQUFDLDJCQUFVO0FBQUMsV0FBS0MsZ0JBQUwsSUFBdUJuWixDQUFDLENBQUN6RyxRQUFRLENBQUNzSCxlQUFWLENBQUQsQ0FBNEJpQyxFQUE1QixDQUErQixPQUEvQixFQUF1QyxlQUF2QyxFQUF1RCxLQUFLcVcsZ0JBQUwsR0FBc0JuWixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSytSLFFBQWIsRUFBc0IsSUFBdEIsQ0FBN0UsRUFBMEd0VyxFQUExRyxDQUE2RyxPQUE3RyxFQUFxSCxLQUFLdVcsa0JBQUwsR0FBd0JyWixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS2lTLFVBQWIsRUFBd0IsSUFBeEIsQ0FBN0ksQ0FBdkI7QUFBbU0sS0FBM1U7QUFBNFVDLGtCQUFjLEVBQUMsMEJBQVU7QUFBQyxXQUFLSixnQkFBTCxLQUF3Qm5aLENBQUMsQ0FBQ3pHLFFBQVEsQ0FBQ3NILGVBQVYsQ0FBRCxDQUE0Qm9PLEdBQTVCLENBQWdDLE9BQWhDLEVBQXdDLGVBQXhDLEVBQXdELEtBQUtrSyxnQkFBN0QsRUFBK0VsSyxHQUEvRSxDQUFtRixPQUFuRixFQUEyRixLQUFLb0ssa0JBQWhHLEdBQW9ILEtBQUtBLGtCQUFMLEdBQXdCLElBQTVJLEVBQWlKLEtBQUtGLGdCQUFMLEdBQXNCLElBQS9MO0FBQXFNLEtBQTNpQjtBQUE0aUJHLGNBQVUsRUFBQyxvQkFBU3ZjLENBQVQsRUFBVztBQUFDa1EsV0FBSyxDQUFDdUssS0FBTixDQUFZO0FBQUNoTCxTQUFDLEVBQUN6UCxDQUFDLENBQUMwYSxLQUFMO0FBQVdoTCxTQUFDLEVBQUMxUCxDQUFDLENBQUMyYTtBQUFmLE9BQVo7QUFBbUMsS0FBdG1CO0FBQXVtQjBCLFlBQVEsRUFBQyxrQkFBU3JjLENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQyxLQUFLaWMsU0FBVCxFQUFtQjtBQUFDamMsU0FBQyxDQUFDb0csZUFBRixJQUFvQnBHLENBQUMsQ0FBQ3hGLGNBQUYsRUFBcEI7QUFBdUMsWUFBSUosQ0FBQyxHQUFDNEYsQ0FBQyxDQUFDbEMsYUFBUjtBQUFzQixhQUFLeWUsVUFBTCxDQUFnQnZjLENBQWhCLEdBQW1CZ2MsT0FBTyxDQUFDNU8sSUFBUixDQUFhaFQsQ0FBYixDQUFuQjtBQUFtQztBQUFDLEtBQWp2QjtBQUFrdkJnVCxRQUFJLEVBQUMsY0FBU3NPLE1BQVQsRUFBZ0I7QUFBQyxVQUFHLEtBQUtPLFNBQVIsRUFBa0IsS0FBS1EsWUFBTCxDQUFrQnZULEtBQWxCLENBQXdCOFMsT0FBeEIsRUFBZ0M3VyxNQUFNLENBQUNnRSxJQUFQLENBQVkzQyxTQUFaLENBQWhDLEVBQWxCLEtBQThFO0FBQUMsWUFBSXlELE9BQU8sR0FBQ3pELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBYyxFQUExQjtBQUFBLFlBQTZCNkgsUUFBUSxHQUFDN0gsU0FBUyxDQUFDLENBQUQsQ0FBL0M7QUFBbURBLGlCQUFTLENBQUMsQ0FBRCxDQUFULElBQWMsYUFBV3ZELENBQUMsQ0FBQ3FHLElBQUYsQ0FBTzlDLFNBQVMsQ0FBQyxDQUFELENBQWhCLENBQXpCLEtBQWdENkgsUUFBUSxHQUFDN0gsU0FBUyxDQUFDLENBQUQsQ0FBbEIsRUFBc0J5RCxPQUFPLEdBQUMsRUFBOUU7O0FBQWtGLFlBQUk0SixLQUFLLEdBQUMsRUFBVjtBQUFBLFlBQWE2SSxXQUFiO0FBQUEsWUFBeUJqWCxTQUFTLEdBQUNELENBQUMsQ0FBQ0MsU0FBRixDQUFZaVcsTUFBWixDQUFuQzs7QUFBdUQsZ0JBQU9nQixXQUFXLEdBQUN6WixDQUFDLENBQUNxRyxJQUFGLENBQU9vUyxNQUFQLENBQW5CO0FBQW1DLGVBQUksUUFBSjtBQUFhLGVBQUksUUFBSjtBQUFhLGdCQUFJdEwsSUFBSSxHQUFDLElBQUlxTCxJQUFKLENBQVNDLE1BQVQsRUFBZ0J6UixPQUFoQixDQUFUO0FBQUEsZ0JBQWtDMFMsSUFBSSxHQUFDLDJCQUF2QztBQUFBLGdCQUFtRUMsWUFBWSxHQUFDLEVBQWhGOztBQUFtRixnQkFBR3hNLElBQUksQ0FBQ3VMLEtBQVIsRUFBYztBQUFDLGtCQUFHbFcsU0FBSCxFQUFhO0FBQUMsb0JBQUlvWCxRQUFRLEdBQUM1WixDQUFDLENBQUMsZ0NBQThCQSxDQUFDLENBQUN5WSxNQUFELENBQUQsQ0FBVXpGLElBQVYsQ0FBZSxtQkFBZixDQUE5QixHQUFrRSxJQUFuRSxDQUFkO0FBQXVGNEcsd0JBQVEsQ0FBQ0MsTUFBVCxDQUFnQixNQUFJSCxJQUFKLEdBQVMsR0FBekIsRUFBOEJwVCxJQUE5QixDQUFtQyxVQUFTdkosQ0FBVCxFQUFXbkcsT0FBWCxFQUFtQjtBQUFDb0osbUJBQUMsQ0FBQ0UsTUFBRixDQUFTeVosWUFBVCxFQUFzQmhCLElBQUksQ0FBQyxRQUFNM1ksQ0FBQyxDQUFDcEosT0FBRCxDQUFELENBQVdvYyxJQUFYLENBQWdCMEcsSUFBaEIsS0FBdUIsRUFBN0IsSUFBaUMsSUFBbEMsQ0FBMUI7QUFBbUUsaUJBQTFILEdBQTRIRSxRQUFRLENBQUN0VCxJQUFULENBQWMsVUFBU3ZKLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDaVUsMEJBQVEsSUFBRWpVLENBQUMsS0FBR3NoQixNQUFkLEtBQXVCck4sUUFBUSxHQUFDck8sQ0FBQyxHQUFDLENBQWxDLEdBQXFDNlQsS0FBSyxDQUFDaEgsSUFBTixDQUFXLElBQUk0TyxJQUFKLENBQVNyaEIsQ0FBVCxFQUFXNkksQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZeVosWUFBWixFQUF5QjNTLE9BQXpCLENBQVgsQ0FBWCxDQUFyQztBQUErRixpQkFBM0gsQ0FBNUg7QUFBeVA7QUFBQyxhQUE5VyxNQUFtWHhFLFNBQVMsSUFBRXhDLENBQUMsQ0FBQ3lZLE1BQUQsQ0FBRCxDQUFVMUMsRUFBVixDQUFhLE1BQUkyRCxJQUFKLEdBQVMsR0FBdEIsQ0FBWCxLQUF3QzFaLENBQUMsQ0FBQ0UsTUFBRixDQUFTeVosWUFBVCxFQUFzQmhCLElBQUksQ0FBQyxRQUFNM1ksQ0FBQyxDQUFDeVksTUFBRCxDQUFELENBQVV6RixJQUFWLENBQWUwRyxJQUFmLEtBQXNCLEVBQTVCLElBQWdDLElBQWpDLENBQTFCLEdBQWtFdk0sSUFBSSxHQUFDLElBQUlxTCxJQUFKLENBQVNDLE1BQVQsRUFBZ0J6WSxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVl5WixZQUFaLEVBQXlCM1MsT0FBekIsQ0FBaEIsQ0FBL0csR0FBbUs0SixLQUFLLENBQUNoSCxJQUFOLENBQVd1RCxJQUFYLENBQW5LOztBQUFvTDs7QUFBTSxlQUFJLE9BQUo7QUFBWW5OLGFBQUMsQ0FBQ3NHLElBQUYsQ0FBT21TLE1BQVAsRUFBYyxVQUFTMWIsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsa0JBQUk0SyxDQUFDLEdBQUMsSUFBSXlXLElBQUosQ0FBU3JoQixDQUFULEVBQVc2UCxPQUFYLENBQU47QUFBMEI0SixtQkFBSyxDQUFDaEgsSUFBTixDQUFXN0gsQ0FBWDtBQUFjLGFBQXBFO0FBQXpzQjs7QUFBK3dCLFlBQUkrWCxXQUFXLEdBQUM7QUFBQ3pHLGlCQUFPLEVBQUM7QUFBQ1osbUJBQU8sRUFBQyxDQUFDO0FBQVY7QUFBVCxTQUFoQjtBQUFBLFlBQXVDc0gsT0FBTyxHQUFDbkosS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTNUosT0FBVCxDQUFpQndFLEVBQWhFO0FBQUEsWUFBbUV3TyxhQUFuRTtBQUFpRmhhLFNBQUMsQ0FBQ3NHLElBQUYsQ0FBT3NLLEtBQVAsRUFBYSxVQUFTN1QsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFdBQUMsQ0FBQ3NiLE9BQUYsS0FBWXFILFdBQVcsQ0FBQ3pHLE9BQVosQ0FBb0JaLE9BQXBCLEdBQTRCLENBQUMsQ0FBekMsR0FBNEMsSUFBRTFWLENBQUYsSUFBSzVGLENBQUMsQ0FBQzZQLE9BQUYsQ0FBVXdFLEVBQVYsS0FBZXVPLE9BQXBCLEtBQThCNWlCLENBQUMsQ0FBQzZQLE9BQUYsQ0FBVXdFLEVBQVYsR0FBYXVPLE9BQTNDLENBQTVDO0FBQWdHLFNBQTNILEdBQTZIL1osQ0FBQyxDQUFDc0csSUFBRixDQUFPc0ssS0FBUCxFQUFhLFVBQVM3VCxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ0EsV0FBQyxHQUFDNkksQ0FBQyxDQUFDRSxNQUFGLENBQVMvSSxDQUFULEVBQVcyaUIsV0FBWCxDQUFGO0FBQTBCLFNBQXJELENBQTdILEVBQW9MLENBQUMsQ0FBQzFPLFFBQUQsSUFBV0EsUUFBUSxHQUFDLENBQXJCLE1BQTBCQSxRQUFRLEdBQUMsQ0FBbkMsQ0FBcEwsRUFBME5BLFFBQVEsR0FBQ3dGLEtBQUssQ0FBQ25YLE1BQWYsS0FBd0IyUixRQUFRLEdBQUN3RixLQUFLLENBQUNuWCxNQUF2QyxDQUExTixFQUF5UStJLFNBQVMsS0FBR3dYLGFBQWEsR0FBQy9NLEtBQUssQ0FBQ29LLDRCQUFOLENBQW1Db0IsTUFBbkMsQ0FBakIsQ0FBVCxHQUFzRXJMLE1BQU0sQ0FBQ3lELFdBQVAsQ0FBbUJtSixhQUFuQixDQUF0RSxHQUF3RzVNLE1BQU0sQ0FBQzlELElBQVAsQ0FBWXNILEtBQVosRUFBa0J4RixRQUFsQixDQUFqWDtBQUE2WTtBQUFDLEtBQWp3RTtBQUFrd0VvTyxnQkFBWSxFQUFDLHNCQUFTemMsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLa2MsU0FBUixFQUFrQjtBQUFDLFlBQUk5aEIsQ0FBQyxHQUFDLFNBQVM0RixDQUFULENBQVc1RixDQUFYLEVBQWE7QUFBQyxjQUFJNEssQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDcUcsSUFBRixDQUFPbFAsQ0FBUCxDQUFOO0FBQWdCLGlCQUFNLGFBQVc0SyxDQUFYLEdBQWE1SyxDQUFiLEdBQWUsWUFBVTRLLENBQVYsSUFBYTVLLENBQUMsQ0FBQyxDQUFELENBQWQsR0FBa0I0RixDQUFDLENBQUM1RixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQW5CLEdBQTBCb0wsQ0FBQyxDQUFDQyxTQUFGLENBQVlyTCxDQUFaLEtBQWdCNkksQ0FBQyxDQUFDN0ksQ0FBRCxDQUFELENBQUs2YixJQUFMLENBQVUsTUFBVixDQUFoQixHQUFrQ2hULENBQUMsQ0FBQzdJLENBQUQsQ0FBRCxDQUFLNmIsSUFBTCxDQUFVLE1BQVYsQ0FBbEMsR0FBb0QsQ0FBQyxDQUFDN2IsQ0FBQyxDQUFDTixHQUFKLElBQVNNLENBQUMsQ0FBQ04sR0FBOUc7QUFBa0gsU0FBaEosQ0FBaUprRyxDQUFqSixDQUFOOztBQUEwSjVGLFNBQUMsS0FBR08sTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUFxQlQsQ0FBeEIsQ0FBRDtBQUE0QjtBQUFDO0FBQXIrRSxHQUFsckQ7QUFBeXBJNkksR0FBQyxDQUFDRSxNQUFGLENBQVNELE1BQVQsRUFBZ0I7QUFBQ2tLLFFBQUksRUFBQyxjQUFTcE4sQ0FBVCxFQUFXO0FBQUMsYUFBT2djLE9BQU8sQ0FBQzVPLElBQVIsQ0FBYWxFLEtBQWIsQ0FBbUI4UyxPQUFuQixFQUEyQjdXLE1BQU0sQ0FBQ2dFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0IsR0FBbUQsSUFBMUQ7QUFBK0QsS0FBakY7QUFBa0Y2RyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxhQUFPZ0QsTUFBTSxDQUFDaEQsSUFBUCxJQUFjLElBQXJCO0FBQTBCLEtBQTVIO0FBQTZIZ0csV0FBTyxFQUFDLG1CQUFVO0FBQUMsYUFBTzJJLE9BQU8sQ0FBQ1EsY0FBUixJQUF5QlIsT0FBTyxDQUFDQyxTQUFSLEdBQWtCLENBQUMsQ0FBNUMsRUFBOEMsSUFBckQ7QUFBMEQsS0FBMU07QUFBMk16SCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxhQUFPd0gsT0FBTyxDQUFDQyxTQUFSLEdBQWtCLENBQUMsQ0FBbkIsRUFBcUJELE9BQU8sQ0FBQ0csZUFBUixFQUFyQixFQUErQyxJQUF0RDtBQUEyRCxLQUF4UjtBQUF5UnRSLFlBQVEsRUFBQyxrQkFBUzdLLENBQVQsRUFBVztBQUFDLGFBQU9nYyxPQUFPLENBQUNFLFNBQVIsR0FBa0JsYyxDQUFsQixFQUFvQixJQUEzQjtBQUFnQyxLQUE5VTtBQUErVWtkLGtCQUFjLEVBQUMsd0JBQVNsZCxDQUFULEVBQVc7QUFBQyxhQUFPaU4sT0FBTyxDQUFDQyxRQUFSLENBQWlCb0IsSUFBakIsR0FBc0J0TyxDQUF0QixFQUF3QixJQUEvQjtBQUFvQztBQUE5WSxHQUFoQixHQUFpYSxDQUFDMEQsT0FBTyxDQUFDVyxFQUFSLElBQVlYLE9BQU8sQ0FBQ1csRUFBUixHQUFXLENBQXZCLElBQTBCLGFBQVdwQixDQUFDLENBQUNxRyxJQUFGLENBQU81RixPQUFPLENBQUNFLE9BQWYsQ0FBWCxJQUFvQ0YsT0FBTyxDQUFDRSxPQUFSLEdBQWdCLENBQTlFLElBQWlGRixPQUFPLENBQUNDLFlBQVIsSUFBc0IsYUFBV1YsQ0FBQyxDQUFDcUcsSUFBRixDQUFPNUYsT0FBTyxDQUFDaUIsTUFBZixDQUFqQyxJQUF5RGpCLE9BQU8sQ0FBQ2lCLE1BQVIsR0FBZSxNQUExSixNQUFvS3FYLE9BQU8sQ0FBQzVPLElBQVIsR0FBYTRPLE9BQU8sQ0FBQ1MsWUFBekwsQ0FBamE7QUFBd21CLE1BQUlsTCxVQUFVLEdBQUM7QUFBQ3RJLGNBQVUsRUFBQyxvQkFBU2pKLENBQVQsRUFBVztBQUFDLFdBQUtuRyxPQUFMLEdBQWFtRyxDQUFiLEVBQWUsS0FBS3NSLFdBQUwsR0FBaUIsRUFBaEMsRUFBbUMsS0FBSzBCLFlBQUwsR0FBa0IsVUFBckQsRUFBZ0UsS0FBS21LLEtBQUwsR0FBVztBQUFDNVAsaUJBQVMsRUFBQyxFQUFYO0FBQWM2UCxzQkFBYyxFQUFDLEVBQTdCO0FBQWdDM1Asa0JBQVUsRUFBQztBQUEzQyxPQUEzRSxFQUEwSCxLQUFLc0MsS0FBTCxFQUExSCxFQUF1SSxLQUFLc04sY0FBTCxFQUF2STtBQUE2SixLQUFyTDtBQUFzTHROLFNBQUssRUFBQyxpQkFBVTtBQUFDLFdBQUtsVyxPQUFMLENBQWFzQyxNQUFiLENBQW9CLEtBQUttaEIsT0FBTCxHQUFhcmEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQix1QkFBcEIsRUFBNkM5VCxNQUE3QyxDQUFvRCxLQUFLb2hCLE9BQUwsR0FBYXRhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isc0JBQXBCLEVBQTRDOVQsTUFBNUMsQ0FBbUQsS0FBS3FoQixTQUFMLEdBQWV2YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdEQUFwQixFQUFzRTlULE1BQXRFLENBQTZFLEtBQUtzaEIsZ0JBQUwsR0FBc0J4YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDJCQUFwQixFQUFpRDlULE1BQWpELENBQXdEOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixzQ0FBcEIsQ0FBeEQsRUFBcUg5VCxNQUFySCxDQUE0SDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsZ0NBQXBCLENBQTVILENBQW5HLENBQWxFLEVBQTBWOVQsTUFBMVYsQ0FBaVcsS0FBS3VoQixPQUFMLEdBQWF6YSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHNCQUFwQixFQUE0QzlULE1BQTVDLENBQW1ELEtBQUt3aEIsTUFBTCxHQUFZMWEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixxQkFBcEIsQ0FBL0QsQ0FBOVcsRUFBMGQ5VCxNQUExZCxDQUFpZSxLQUFLeWhCLEtBQUwsR0FBVzNhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsNENBQXBCLEVBQWtFOVQsTUFBbEUsQ0FBeUUsS0FBSzBoQixZQUFMLEdBQWtCNWEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiwyQkFBcEIsRUFBaUQ5VCxNQUFqRCxDQUF3RDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isc0NBQXBCLENBQXhELEVBQXFIOVQsTUFBckgsQ0FBNEg4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdDQUFwQixDQUE1SCxDQUEzRixDQUE1ZSxDQUFqRSxDQUFqQztBQUFnMkIsS0FBdmlDO0FBQXdpQ29OLGtCQUFjLEVBQUMsMEJBQVU7QUFBQyxXQUFLRSxPQUFMLENBQWFsQixRQUFiLENBQXNCLGVBQXRCLEVBQXNDLE9BQXRDLEVBQThDcFosQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDb0csZUFBRjtBQUFvQixZQUFJaE0sQ0FBQyxHQUFDNkksQ0FBQyxDQUFDakQsQ0FBQyxDQUFDdkQsTUFBSCxDQUFELENBQVl1QixPQUFaLENBQW9CLGVBQXBCLEVBQXFDLENBQXJDLENBQU47QUFBQSxZQUE4Q2dILENBQUMsR0FBQzVLLENBQUMsSUFBRTZJLENBQUMsQ0FBQzdJLENBQUQsQ0FBRCxDQUFLaUIsSUFBTCxDQUFVLGFBQVYsQ0FBbkQ7QUFBNEUySixTQUFDLEtBQUcsS0FBSzhZLFNBQUwsQ0FBZTlZLENBQWYsR0FBa0JxTCxNQUFNLENBQUN5RCxXQUFQLENBQW1COU8sQ0FBbkIsQ0FBckIsQ0FBRDtBQUE2QyxPQUFqSyxFQUFrSyxJQUFsSyxDQUE5QyxHQUF1TixLQUFLdVksT0FBTCxDQUFhcGQsSUFBYixDQUFrQixPQUFsQixFQUEwQixVQUFTSCxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDb0csZUFBRjtBQUFvQixPQUExRCxDQUF2TixFQUFtUixLQUFLb1gsU0FBTCxDQUFlcmQsSUFBZixDQUFvQixPQUFwQixFQUE0QjhDLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLeVQsWUFBYixFQUEwQixJQUExQixDQUE1QixDQUFuUixFQUFnVixLQUFLSCxLQUFMLENBQVd6ZCxJQUFYLENBQWdCLE9BQWhCLEVBQXdCOEMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUswVCxRQUFiLEVBQXNCLElBQXRCLENBQXhCLENBQWhWO0FBQXFZLEtBQXY4QztBQUF3OEN6UixRQUFJLEVBQUMsY0FBU3ZNLENBQVQsRUFBVztBQUFDLFdBQUswTCxLQUFMO0FBQWEsVUFBSTFHLENBQUMsR0FBQyxZQUFOO0FBQUEsVUFBbUJ5QixDQUFDLEdBQUMsQ0FBQyxDQUF0QjtBQUF3QnhELE9BQUMsQ0FBQ3NHLElBQUYsQ0FBT3ZKLENBQVAsRUFBU2lELENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsdUJBQWFBLENBQUMsQ0FBQzZQLE9BQUYsQ0FBVXdELFVBQXZCLEtBQW9DekksQ0FBQyxHQUFDLFVBQXRDLEdBQWtENUssQ0FBQyxDQUFDNlAsT0FBRixDQUFVd0QsVUFBVixLQUF1QmhILENBQUMsR0FBQyxDQUFDLENBQTFCLENBQWxEO0FBQStFLE9BQXJHLEVBQXNHLElBQXRHLENBQVQsR0FBc0gsS0FBS3dYLGNBQUwsQ0FBb0JqWixDQUFwQixDQUF0SCxFQUE2SSxLQUFLa1osY0FBTCxHQUFvQnpYLENBQWpLLEVBQW1LeEQsQ0FBQyxDQUFDc0csSUFBRixDQUFPdkosQ0FBUCxFQUFTaUQsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxhQUFLa1gsV0FBTCxDQUFpQnpFLElBQWpCLENBQXNCLElBQUlzUixTQUFKLENBQWMvakIsQ0FBZCxFQUFnQjRGLENBQUMsR0FBQyxDQUFsQixDQUF0QjtBQUE0QyxPQUFsRSxFQUFtRSxJQUFuRSxDQUFULENBQW5LLEVBQXNQLEtBQUtxUyxhQUFMLEVBQXRQO0FBQTJRLEtBQXp3RDtBQUEwd0QzRyxTQUFLLEVBQUMsaUJBQVU7QUFBQ3pJLE9BQUMsQ0FBQ3NHLElBQUYsQ0FBTyxLQUFLK0gsV0FBWixFQUF3QixVQUFTdFIsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ1ksTUFBRjtBQUFXLE9BQWpELEdBQW1ELEtBQUtzVyxXQUFMLEdBQWlCLEVBQXBFLEVBQXVFLEtBQUtvQyxTQUFMLEdBQWUsQ0FBQyxDQUF2RixFQUF5RixLQUFLMEssS0FBTCxHQUFXLENBQUMsQ0FBckc7QUFBdUcsS0FBbDREO0FBQW00REgsa0JBQWMsRUFBQyx3QkFBU2plLENBQVQsRUFBVztBQUFDLFdBQUtnVCxZQUFMLElBQW1CM0MsTUFBTSxDQUFDeFcsT0FBUCxDQUFlMFcsV0FBZixDQUEyQixtQkFBaUIsS0FBS3lDLFlBQWpELENBQW5CLEVBQWtGM0MsTUFBTSxDQUFDeFcsT0FBUCxDQUFlb1csUUFBZixDQUF3QixtQkFBaUJqUSxDQUF6QyxDQUFsRixFQUE4SCxLQUFLZ1QsWUFBTCxHQUFrQmhULENBQWhKO0FBQWtKLEtBQWhqRTtBQUFpakVxVCxXQUFPLEVBQUMsbUJBQVU7QUFBQ2hELFlBQU0sQ0FBQ3hXLE9BQVAsQ0FBZTBXLFdBQWYsQ0FBMkIsdUJBQTNCLEVBQW9ETixRQUFwRCxDQUE2RCx3QkFBN0QsR0FBdUYsS0FBS2dNLFNBQUwsR0FBZSxDQUFDLENBQXZHO0FBQXlHLEtBQTdxRTtBQUE4cUV6SCxVQUFNLEVBQUMsa0JBQVU7QUFBQ25FLFlBQU0sQ0FBQ3hXLE9BQVAsQ0FBZTBXLFdBQWYsQ0FBMkIsd0JBQTNCLEVBQXFETixRQUFyRCxDQUE4RCx1QkFBOUQsR0FBdUYsS0FBS2dNLFNBQUwsR0FBZSxDQUFDLENBQXZHO0FBQXlHLEtBQXp5RTtBQUEweUUzSCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxhQUFNLENBQUMsS0FBSzJILFNBQVo7QUFBc0IsS0FBbjFFO0FBQW8xRW9DLFlBQVEsRUFBQyxvQkFBVTtBQUFDLGFBQU8sS0FBS3BDLFNBQVo7QUFBc0IsS0FBOTNFO0FBQSszRXFDLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFVBQUl0ZSxDQUFDLEdBQUNxUSxNQUFNLENBQUN4VyxPQUFiO0FBQUEsVUFBcUJPLENBQUMsR0FBQyxLQUFLK2lCLEtBQTVCO0FBQUEsVUFBa0NuWSxDQUFDLEdBQUMsaUJBQWUsS0FBS2dPLFlBQXhEO0FBQUEsVUFBcUV2TSxDQUFDLEdBQUN6QixDQUFDLEdBQUMsS0FBRCxHQUFPLE1BQS9FO0FBQUEsVUFBc0YwQixDQUFDLEdBQUMxQixDQUFDLEdBQUMsTUFBRCxHQUFRLEtBQWpHO0FBQUEsVUFBdUcyQixDQUFDLEdBQUMzQixDQUFDLEdBQUMsUUFBRCxHQUFVLE1BQXBIO0FBQUEsVUFBMkg0QixDQUFDLEdBQUM1QixDQUFDLEdBQUMsS0FBRCxHQUFPLE9BQXJJO0FBQUEsVUFBNkk2QixDQUFDLEdBQUM3QixDQUFDLEdBQUMsT0FBRCxHQUFTLFFBQXpKO0FBQUEsVUFBa0s4QixDQUFDLEdBQUM5QixDQUFDLEdBQUMsUUFBRCxHQUFVLE9BQS9LO0FBQUEsVUFBdUwrQixDQUFDLEdBQUM7QUFBQzZHLFlBQUksRUFBQyxPQUFOO0FBQWNDLGFBQUssRUFBQyxNQUFwQjtBQUEyQjhFLFdBQUcsRUFBQyxRQUEvQjtBQUF3Q3VILGNBQU0sRUFBQztBQUEvQyxPQUF6TDtBQUErTyxXQUFLcmdCLE9BQUwsQ0FBYTBXLFdBQWIsQ0FBeUIsd0JBQXpCO0FBQW1ELFVBQUlpSixDQUFDLEdBQUN4WixDQUFDLENBQUNnWixFQUFGLENBQUssVUFBTCxDQUFOO0FBQXVCLFVBQUdRLENBQUMsSUFBRXhaLENBQUMsQ0FBQ29OLElBQUYsRUFBSCxFQUFZLEtBQUtpUixRQUFMLE1BQWlCLEtBQUs3SixNQUFMLEVBQTdCLEVBQTJDLENBQUMsS0FBSzNhLE9BQUwsQ0FBYW1mLEVBQWIsQ0FBZ0IsVUFBaEIsQ0FBRCxJQUE4QixLQUFLMUgsV0FBTCxDQUFpQjVVLE1BQWpCLEdBQXdCLENBQXRELElBQXlELEtBQUt3aEIsY0FBNUcsRUFBMkgsT0FBTyxLQUFLN0ssT0FBTCxJQUFlcFEsQ0FBQyxDQUFDRSxNQUFGLENBQVMsS0FBS2dhLEtBQUwsQ0FBVzFQLFVBQXBCLEVBQStCO0FBQUNoSyxhQUFLLEVBQUMsQ0FBUDtBQUFTUSxjQUFNLEVBQUM7QUFBaEIsT0FBL0IsQ0FBZixFQUFrRXVWLENBQUMsSUFBRXhaLENBQUMsQ0FBQ3FOLElBQUYsRUFBckUsRUFBOEUsS0FBSyxLQUFLeFQsT0FBTCxDQUFhb1csUUFBYixDQUFzQix3QkFBdEIsQ0FBMUY7QUFBMEksV0FBS3VFLE1BQUw7O0FBQWMsVUFBSWlGLENBQUMsR0FBQyxLQUFLK0QsU0FBWDtBQUFBLFVBQXFCOUQsQ0FBQyxHQUFDLEtBQUtrRSxLQUE1QjtBQUFBLFVBQWtDakUsQ0FBQyxHQUFDcFcsTUFBTSxDQUFDQyxRQUFQLEVBQXBDO0FBQUEsVUFBc0RlLENBQUMsR0FBQyxLQUFLMUssT0FBTCxDQUFhLFVBQVEyTCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQmtCLENBQXBCLENBQXJCLEdBQXhEO0FBQUEsVUFBdUc4UyxDQUFDLEdBQUNOLFFBQVEsQ0FBQyxLQUFLb0UsT0FBTCxDQUFhelYsR0FBYixDQUFpQixhQUFXeEIsQ0FBNUIsQ0FBRCxDQUFSLElBQTBDLENBQW5KO0FBQUEsVUFBcUpvVCxDQUFDLEdBQUM3UyxJQUFJLENBQUNFLEdBQUwsQ0FBUzNDLENBQUMsR0FBQyxJQUFFcVYsQ0FBYixFQUFlLENBQWYsQ0FBdko7QUFBQSxVQUF5S0UsQ0FBQyxHQUFDUixRQUFRLENBQUMsS0FBS29FLE9BQUwsQ0FBYXpWLEdBQWIsQ0FBaUIsYUFBV3ZCLENBQTVCLENBQUQsQ0FBUixJQUEwQyxDQUFyTjtBQUFBLFVBQXVONlgsQ0FBQyxHQUFDLENBQUNqRixRQUFRLENBQUMsS0FBS3pmLE9BQUwsQ0FBYW9PLEdBQWIsQ0FBaUIsWUFBVXRCLENBQTNCLENBQUQsQ0FBUixJQUF5QyxDQUExQyxLQUE4QzJTLFFBQVEsQ0FBQyxLQUFLemYsT0FBTCxDQUFhb08sR0FBYixDQUFpQixZQUFVckIsQ0FBM0IsQ0FBRCxDQUFSLElBQXlDLENBQXZGLENBQXpOOztBQUFtVDNELE9BQUMsQ0FBQ0UsTUFBRixDQUFTL0ksQ0FBQyxDQUFDcVQsVUFBWCxFQUFzQjtBQUFDeEosY0FBTSxFQUFDTSxDQUFDLEdBQUNnYSxDQUFWO0FBQVk5YSxhQUFLLEVBQUNrVyxDQUFDLENBQUMzVSxDQUFDLEdBQUMsT0FBRCxHQUFTLFFBQVgsQ0FBbkI7QUFBd0N3WixrQkFBVSxFQUFDNUU7QUFBbkQsT0FBdEIsR0FBNkUzVyxDQUFDLENBQUNFLE1BQUYsQ0FBUy9JLENBQUMsQ0FBQ21ULFNBQVgsRUFBcUI7QUFBQ3RKLGNBQU0sRUFBQzRWLENBQVI7QUFBVXBXLGFBQUssRUFBQ29XO0FBQWhCLE9BQXJCLENBQTdFLEVBQXNINVcsQ0FBQyxDQUFDRSxNQUFGLENBQVMvSSxDQUFDLENBQUNnakIsY0FBWCxFQUEwQjtBQUFDM1osYUFBSyxFQUFDb1csQ0FBQyxHQUFDLElBQUVDLENBQVg7QUFBYTdWLGNBQU0sRUFBQ007QUFBcEIsT0FBMUIsQ0FBdEgsRUFBd0tuSyxDQUFDLENBQUNxa0IsS0FBRixHQUFRO0FBQUN2SyxnQkFBUSxFQUFDO0FBQUN6USxlQUFLLEVBQUNpVyxDQUFDLENBQUMsVUFBUWxVLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CaUIsQ0FBcEIsQ0FBVCxDQUFELEVBQVA7QUFBMkM2WCxvQkFBVSxFQUFDcEYsUUFBUSxDQUFDRyxDQUFDLENBQUN4UixHQUFGLENBQU0sWUFBVXZCLENBQWhCLENBQUQsQ0FBUixJQUE4QixDQUFwRjtBQUFzRmlZLHFCQUFXLEVBQUNyRixRQUFRLENBQUNHLENBQUMsQ0FBQ3hSLEdBQUYsQ0FBTSxZQUFVbEIsQ0FBQyxDQUFDTCxDQUFELENBQWpCLENBQUQsQ0FBUixJQUFpQztBQUFuSSxTQUFWO0FBQWdKMk4sWUFBSSxFQUFDO0FBQUM1USxlQUFLLEVBQUNpVyxDQUFDLENBQUMsVUFBUWxVLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CaUIsQ0FBcEIsQ0FBVCxDQUFELEVBQVA7QUFBMkM2WCxvQkFBVSxFQUFDcEYsUUFBUSxDQUFDSSxDQUFDLENBQUN6UixHQUFGLENBQU0sWUFBVXZCLENBQWhCLENBQUQsQ0FBUixJQUE4QixDQUFwRjtBQUFzRmlZLHFCQUFXLEVBQUNyRixRQUFRLENBQUNJLENBQUMsQ0FBQ3pSLEdBQUYsQ0FBTSxZQUFVbEIsQ0FBQyxDQUFDTCxDQUFELENBQWpCLENBQUQsQ0FBUixJQUFpQztBQUFuSTtBQUFySixPQUFoTDtBQUE0YyxVQUFJa1ksQ0FBQyxHQUFDakYsQ0FBQyxDQUFDOVMsQ0FBRCxDQUFQO0FBQUEsVUFBVzZJLENBQUMsR0FBQ3RWLENBQUMsQ0FBQ2dqQixjQUFGLENBQWlCM1osS0FBOUI7QUFBQSxVQUFvQ2dNLENBQUMsR0FBQyxLQUFLNkIsV0FBTCxDQUFpQjVVLE1BQXZEO0FBQThEdEMsT0FBQyxDQUFDcVQsVUFBRixDQUFhaEssS0FBYixHQUFtQm1iLENBQW5CLEVBQXFCeGtCLENBQUMsQ0FBQ3FrQixLQUFGLENBQVFuSyxPQUFSLEdBQWdCLElBQUU3RSxDQUFDLEdBQUNDLENBQUYsR0FBSWtQLENBQTNDO0FBQTZDLFVBQUlDLENBQUMsR0FBQ0QsQ0FBTjtBQUFBLFVBQVFFLENBQUMsR0FBQzFrQixDQUFDLENBQUNxa0IsS0FBWjtBQUFBLFVBQWtCdFcsQ0FBQyxHQUFDMlcsQ0FBQyxDQUFDNUssUUFBdEI7QUFBQSxVQUErQjZLLENBQUMsR0FBQ0QsQ0FBQyxDQUFDekssSUFBbkM7QUFBQSxVQUF3QzJLLENBQUMsR0FBQzdXLENBQUMsQ0FBQ3VXLFVBQUYsR0FBYXZXLENBQUMsQ0FBQzFFLEtBQWYsR0FBcUIwRSxDQUFDLENBQUN3VyxXQUF2QixHQUFtQ0ksQ0FBQyxDQUFDTCxVQUFyQyxHQUFnREssQ0FBQyxDQUFDdGIsS0FBbEQsR0FBd0RzYixDQUFDLENBQUNKLFdBQXBHO0FBQWdIdmtCLE9BQUMsQ0FBQ3FrQixLQUFGLENBQVFuSyxPQUFSLEtBQWtCdUssQ0FBQyxJQUFFRyxDQUFyQjtBQUF3QixVQUFJQyxDQUFDLEdBQUN4UCxDQUFDLEdBQUNDLENBQVI7QUFBVXVQLE9BQUMsSUFBRUosQ0FBQyxHQUFDN1gsSUFBSSxDQUFDa1ksS0FBTCxDQUFXTCxDQUFDLEdBQUNuUCxDQUFiLElBQWdCQSxDQUFwQixDQUFELEtBQTBCbVAsQ0FBQyxHQUFDSSxDQUE1QjtBQUErQixVQUFJRSxDQUFDLEdBQUNOLENBQUMsSUFBRXprQixDQUFDLENBQUNxa0IsS0FBRixDQUFRbkssT0FBUixHQUFnQjBLLENBQWhCLEdBQWtCLENBQXBCLENBQVA7QUFBOEI1a0IsT0FBQyxDQUFDZ2xCLEdBQUYsR0FBTXBZLElBQUksQ0FBQ3FZLEtBQUwsQ0FBV1IsQ0FBQyxHQUFDblAsQ0FBYixDQUFOLEVBQXNCLEtBQUs0UCxLQUFMLEdBQVcsTUFBakMsRUFBd0NsbEIsQ0FBQyxDQUFDZ2xCLEdBQUYsSUFBTyxDQUFQLEtBQVdELENBQUMsR0FBQ04sQ0FBQyxHQUFDRCxDQUFKLEVBQU14a0IsQ0FBQyxDQUFDcWtCLEtBQUYsQ0FBUW5LLE9BQVIsR0FBZ0IsQ0FBQyxDQUF2QixFQUF5QixLQUFLZ0wsS0FBTCxHQUFXLFFBQS9DLENBQXhDLEVBQWlHbGxCLENBQUMsQ0FBQzRXLEtBQUYsR0FBUWhLLElBQUksQ0FBQ3VZLElBQUwsQ0FBVTlQLENBQUMsR0FBQ0MsQ0FBRixHQUFJbVAsQ0FBZCxDQUF6RyxFQUEwSHprQixDQUFDLENBQUNrakIsT0FBRixHQUFVO0FBQUM3WixhQUFLLEVBQUMwYixDQUFDLEdBQUMsQ0FBVDtBQUFXbGIsY0FBTSxFQUFDTTtBQUFsQixPQUFwSSxFQUF5Sm5LLENBQUMsQ0FBQ29sQixNQUFGLEdBQVM7QUFBQy9iLGFBQUssRUFBQ29iLENBQVA7QUFBUzVhLGNBQU0sRUFBQ007QUFBaEIsT0FBbEssRUFBcUxuSyxDQUFDLENBQUNzVCxLQUFGLEdBQVE7QUFBQ2pLLGFBQUssRUFBQ2dNLENBQUMsR0FBQ0MsQ0FBRixHQUFJLENBQVg7QUFBYXpMLGNBQU0sRUFBQ007QUFBcEIsT0FBN0wsRUFBb05pVixDQUFDLElBQUV4WixDQUFDLENBQUNxTixJQUFGLEVBQXZOLEVBQWdPLEtBQUt4VCxPQUFMLENBQWFvVyxRQUFiLENBQXNCLHdCQUF0QixDQUFoTztBQUFnUixLQUExeUk7QUFBMnlJNUMsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS2dHLE9BQUwsSUFBZSxLQUFLNUYsVUFBTCxDQUFnQkosSUFBaEIsRUFBZixFQUFzQyxLQUFLaUksUUFBTCxHQUFjLENBQUMsQ0FBckQ7QUFBdUQsS0FBbDNJO0FBQW0zSXZDLGlCQUFhLEVBQUMseUJBQVU7QUFBQyxVQUFJL1MsQ0FBQyxHQUFDLGlCQUFlLEtBQUtnVCxZQUExQjtBQUF1QyxhQUFNO0FBQUN2UCxhQUFLLEVBQUN6RCxDQUFDLEdBQUMsS0FBS21kLEtBQUwsQ0FBVzFQLFVBQVgsQ0FBc0JoSyxLQUF2QixHQUE2QixLQUFLMFosS0FBTCxDQUFXMVAsVUFBWCxDQUFzQnhKLE1BQTNEO0FBQWtFQSxjQUFNLEVBQUNqRSxDQUFDLEdBQUMsS0FBS21kLEtBQUwsQ0FBVzFQLFVBQVgsQ0FBc0J4SixNQUF2QixHQUE4QixLQUFLa1osS0FBTCxDQUFXMVAsVUFBWCxDQUFzQmhLO0FBQTlILE9BQU47QUFBMkksS0FBOWpKO0FBQStqSjRPLGlCQUFhLEVBQUMseUJBQVU7QUFBQyxVQUFHLEtBQUtpTSxVQUFMLElBQWtCLENBQUMsS0FBS0QsUUFBTCxFQUF0QixFQUFzQztBQUFDLFlBQUlyZSxDQUFDLEdBQUNpRCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBS2dhLEtBQWpCLENBQU47QUFBQSxZQUE4Qi9pQixDQUFDLEdBQUMsaUJBQWUsS0FBSzRZLFlBQXBEO0FBQWlFL1AsU0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUsrSCxXQUFaLEVBQXdCLFVBQVN0UixDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ0EsV0FBQyxDQUFDcWxCLE1BQUY7QUFBVyxTQUFqRCxHQUFtRCxLQUFLakMsU0FBTCxDQUFleGQsQ0FBQyxDQUFDeWUsS0FBRixDQUFRbkssT0FBUixHQUFnQixNQUFoQixHQUF1QixNQUF0QyxHQUFuRCxFQUFtRyxLQUFLc0osS0FBTCxDQUFXNWQsQ0FBQyxDQUFDeWUsS0FBRixDQUFRbkssT0FBUixHQUFnQixNQUFoQixHQUF1QixNQUFsQyxHQUFuRyxFQUErSSxLQUFLb0osT0FBTCxDQUFhelYsR0FBYixDQUFpQjtBQUFDeEUsZUFBSyxFQUFDekQsQ0FBQyxDQUFDd2YsTUFBRixDQUFTcGxCLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBbkIsQ0FBUDtBQUFvQzZKLGdCQUFNLEVBQUNqRSxDQUFDLENBQUN3ZixNQUFGLENBQVNwbEIsQ0FBQyxHQUFDLFFBQUQsR0FBVSxPQUFwQjtBQUEzQyxTQUFqQixDQUEvSSxFQUEwTyxLQUFLdWpCLE1BQUwsQ0FBWTFWLEdBQVosQ0FBZ0I7QUFBQ3hFLGVBQUssRUFBQ3pELENBQUMsQ0FBQzBOLEtBQUYsQ0FBUXRULENBQUMsR0FBQyxPQUFELEdBQVMsUUFBbEIsQ0FBUDtBQUFtQzZKLGdCQUFNLEVBQUNqRSxDQUFDLENBQUMwTixLQUFGLENBQVF0VCxDQUFDLEdBQUMsUUFBRCxHQUFVLE9BQW5CO0FBQTFDLFNBQWhCLENBQTFPO0FBQWtVLFlBQUk0SyxDQUFDLEdBQUM7QUFBQ3ZCLGVBQUssRUFBQ3pELENBQUMsQ0FBQ3NkLE9BQUYsQ0FBVWxqQixDQUFDLEdBQUMsT0FBRCxHQUFTLFFBQXBCLENBQVA7QUFBcUM2SixnQkFBTSxFQUFDakUsQ0FBQyxDQUFDc2QsT0FBRixDQUFVbGpCLENBQUMsR0FBQyxRQUFELEdBQVUsT0FBckI7QUFBNUMsU0FBTjtBQUFpRjRLLFNBQUMsQ0FBQyxhQUFXNUssQ0FBQyxHQUFDLE1BQUQsR0FBUSxLQUFwQixDQUFELENBQUQsR0FBOEI0TSxJQUFJLENBQUNxWSxLQUFMLENBQVcsQ0FBQyxFQUFELEdBQUlyZixDQUFDLENBQUNzZCxPQUFGLENBQVU3WixLQUF6QixJQUFnQyxJQUE5RCxFQUFtRXVCLENBQUMsQ0FBQyxhQUFXNUssQ0FBQyxHQUFDLEtBQUQsR0FBTyxNQUFuQixDQUFELENBQUQsR0FBOEIsQ0FBakcsRUFBbUcsS0FBS2tqQixPQUFMLENBQWFyVixHQUFiLENBQWlCakQsQ0FBakIsQ0FBbkcsRUFBdUgsS0FBSzBPLFNBQUwsSUFBZ0IsS0FBS2dNLE1BQUwsQ0FBWSxLQUFLaE0sU0FBakIsRUFBMkIsQ0FBQyxDQUE1QixDQUF2STtBQUFzSztBQUFDLEtBQTF2SztBQUEydktpTSxjQUFVLEVBQUMsb0JBQVMzZixDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUVBLENBQUMsR0FBQyxDQUFGLElBQUtBLENBQUMsR0FBQyxLQUFLbWQsS0FBTCxDQUFXbk0sS0FBbEIsSUFBeUJoUixDQUFDLEtBQUcsS0FBS29lLEtBQXBDLENBQUgsRUFBOEM7QUFBQyxZQUFJaGtCLENBQUMsR0FBQyxLQUFLK2lCLEtBQUwsQ0FBV2lDLEdBQVgsSUFBZ0JwZixDQUFDLEdBQUMsQ0FBbEIsSUFBcUIsQ0FBM0I7QUFBNkIsYUFBSzBmLE1BQUwsQ0FBWXRsQixDQUFaO0FBQWU7QUFBQyxLQUE5Mks7QUFBKzJLMmpCLGdCQUFZLEVBQUMsd0JBQVU7QUFBQyxXQUFLNEIsVUFBTCxDQUFnQixLQUFLdkIsS0FBTCxHQUFXLENBQTNCO0FBQThCLEtBQXI2SztBQUFzNktKLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFdBQUsyQixVQUFMLENBQWdCLEtBQUt2QixLQUFMLEdBQVcsQ0FBM0I7QUFBOEIsS0FBeDlLO0FBQXk5S2hSLFFBQUksRUFBQyxjQUFTcE4sQ0FBVCxFQUFXO0FBQUMsVUFBSTVGLENBQUMsR0FBQyxLQUFLc1osU0FBTCxHQUFlLENBQXJCO0FBQXVCMVQsT0FBQyxHQUFDLENBQUYsS0FBTUEsQ0FBQyxHQUFDLENBQVI7QUFBVyxVQUFJZ0YsQ0FBQyxHQUFDLEtBQUtzTSxXQUFMLENBQWlCNVUsTUFBdkI7QUFBOEJzSSxPQUFDLEdBQUNoRixDQUFGLEtBQU1BLENBQUMsR0FBQ2dGLENBQVIsR0FBVyxLQUFLME8sU0FBTCxHQUFlMVQsQ0FBMUIsRUFBNEIsS0FBSzhkLFNBQUwsQ0FBZTlkLENBQWYsQ0FBNUIsRUFBOEMsV0FBUyxLQUFLc2YsS0FBZCxJQUFxQixLQUFLbEIsS0FBTCxLQUFhcFgsSUFBSSxDQUFDdVksSUFBTCxDQUFVdmYsQ0FBQyxHQUFDLEtBQUttZCxLQUFMLENBQVdpQyxHQUF2QixDQUFsQyxJQUErRCxLQUFLTSxNQUFMLENBQVkxZixDQUFaLEVBQWM1RixDQUFkLENBQTdHO0FBQThILEtBQXhxTDtBQUF5cUxzbEIsVUFBTSxFQUFDLGdCQUFTMWYsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsVUFBRyxLQUFLa2tCLFVBQUwsSUFBa0IsQ0FBQyxLQUFLRCxRQUFMLEVBQXRCLEVBQXNDO0FBQUMsWUFBSXJaLENBQUo7QUFBQSxZQUFNeUIsQ0FBTjtBQUFBLFlBQVFDLENBQUMsR0FBQyxpQkFBZSxLQUFLc00sWUFBOUI7QUFBQSxZQUEyQ3JNLENBQUMsR0FBQyxLQUFHcEQsTUFBTSxDQUFDQyxRQUFQLEdBQWtCa0QsQ0FBQyxHQUFDLE9BQUQsR0FBUyxRQUE1QixDQUFoRDtBQUFBLFlBQXNGRSxDQUFDLEdBQUMsS0FBS3VXLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQjNaLEtBQWxIOztBQUF3SCxZQUFHLFdBQVMsS0FBSzZiLEtBQWpCLEVBQXVCO0FBQUM3WSxXQUFDLEdBQUNPLElBQUksQ0FBQ3VZLElBQUwsQ0FBVXZmLENBQUMsR0FBQyxLQUFLbWQsS0FBTCxDQUFXaUMsR0FBdkIsQ0FBRixFQUE4QixLQUFLaEIsS0FBTCxHQUFXM1gsQ0FBekMsRUFBMkN6QixDQUFDLEdBQUM0QixDQUFDLElBQUUsS0FBS3dYLEtBQUwsR0FBVyxDQUFiLENBQUQsR0FBaUIsS0FBS2pCLEtBQUwsQ0FBV2lDLEdBQTVCLEdBQWdDLENBQUMsQ0FBOUU7QUFBZ0YsY0FBSXZZLENBQUMsR0FBQyxvQ0FBTjtBQUEyQyxlQUFLNFcsZ0JBQUwsQ0FBc0IsQ0FBQ2hYLENBQUMsR0FBQyxDQUFGLEdBQUksS0FBSixHQUFVLFFBQVgsSUFBcUIsT0FBM0MsRUFBb0RJLENBQXBELEdBQXVELEtBQUtnWCxZQUFMLENBQWtCLENBQUNwWCxDQUFDLElBQUUsS0FBSzBXLEtBQUwsQ0FBV25NLEtBQWQsR0FBb0IsS0FBcEIsR0FBMEIsUUFBM0IsSUFBcUMsT0FBdkQsRUFBZ0VuSyxDQUFoRSxDQUF2RDtBQUEwSCxTQUE3USxNQUFrUjdCLENBQUMsR0FBQzJCLENBQUMsR0FBQyxDQUFDLENBQUQsSUFBSUMsQ0FBQyxJQUFFNUcsQ0FBQyxHQUFDLENBQUosQ0FBRCxHQUFRLEtBQUc0RyxDQUFmLENBQUo7O0FBQXNCSCxTQUFDLEdBQUN5SixLQUFLLENBQUNDLElBQVI7QUFBYSxZQUFJckosQ0FBQyxHQUFDLEVBQU47QUFBQSxZQUFTQyxDQUFDLEdBQUMsRUFBWDtBQUFjRCxTQUFDLENBQUNKLENBQUMsR0FBQyxLQUFELEdBQU8sTUFBVCxDQUFELEdBQWtCLENBQWxCLEVBQW9CSyxDQUFDLENBQUNMLENBQUMsR0FBQyxNQUFELEdBQVEsS0FBVixDQUFELEdBQWtCMUIsQ0FBQyxHQUFDLElBQXhDLEVBQTZDLEtBQUsyWSxNQUFMLENBQVloTixJQUFaLENBQWlCLENBQUMsQ0FBbEIsRUFBcUIxSSxHQUFyQixDQUF5Qm5CLENBQXpCLEVBQTRCOFksT0FBNUIsQ0FBb0M3WSxDQUFwQyxFQUFzQzNNLENBQUMsR0FBQyxDQUFELEdBQUdxTSxDQUFDLElBQUVBLENBQUMsQ0FBQzJKLElBQUYsQ0FBT25HLE9BQVAsQ0FBZWtELE9BQWYsQ0FBdUJNLFVBQXZCLENBQWtDQyxLQUFyQyxJQUE0QyxDQUF0RixFQUF3RnpLLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxZQUFVO0FBQUMsZUFBS3VWLGVBQUw7QUFBdUIsU0FBMUMsRUFBMkMsSUFBM0MsQ0FBeEYsQ0FBN0M7QUFBdUw7QUFBQyxLQUF4MU07QUFBeTFNQSxtQkFBZSxFQUFDLDJCQUFVO0FBQUMsVUFBSTdmLENBQUosRUFBTTVGLENBQU47O0FBQVEsVUFBRyxLQUFLc1osU0FBTCxJQUFnQixLQUFLeUosS0FBTCxDQUFXQyxjQUFYLENBQTBCM1osS0FBMUMsSUFBaUQsRUFBRSxLQUFLNk4sV0FBTCxDQUFpQjVVLE1BQWpCLEdBQXdCLENBQTFCLENBQXBELEVBQWlGO0FBQUMsWUFBRyxXQUFTLEtBQUs0aUIsS0FBakIsRUFBdUI7QUFBQyxjQUFHLEtBQUtsQixLQUFMLEdBQVcsQ0FBZCxFQUFnQjtBQUFPcGUsV0FBQyxHQUFDLENBQUMsS0FBS29lLEtBQUwsR0FBVyxDQUFaLElBQWUsS0FBS2pCLEtBQUwsQ0FBV2lDLEdBQTFCLEdBQThCLENBQWhDLEVBQWtDaGxCLENBQUMsR0FBQzRNLElBQUksQ0FBQ0MsR0FBTCxDQUFTakgsQ0FBQyxHQUFDLENBQUYsR0FBSSxLQUFLbWQsS0FBTCxDQUFXaUMsR0FBeEIsRUFBNEIsS0FBSzlOLFdBQUwsQ0FBaUI1VSxNQUE3QyxDQUFwQztBQUF5RixTQUF4SSxNQUE0STtBQUFDLGNBQUlzSSxDQUFDLEdBQUNnQyxJQUFJLENBQUN1WSxJQUFMLENBQVUsS0FBS3BDLEtBQUwsQ0FBVzFQLFVBQVgsQ0FBc0JoSyxLQUF0QixHQUE0QixLQUFLMFosS0FBTCxDQUFXQyxjQUFYLENBQTBCM1osS0FBaEUsQ0FBTjtBQUE2RXpELFdBQUMsR0FBQ2dILElBQUksQ0FBQ0UsR0FBTCxDQUFTRixJQUFJLENBQUNrWSxLQUFMLENBQVdsWSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxLQUFLd00sU0FBTCxHQUFlLEtBQUcxTyxDQUEzQixFQUE2QixDQUE3QixDQUFYLENBQVQsRUFBcUQsQ0FBckQsQ0FBRixFQUEwRDVLLENBQUMsR0FBQzRNLElBQUksQ0FBQ3VZLElBQUwsQ0FBVXZZLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUt5TSxTQUFMLEdBQWUsS0FBRzFPLENBQTNCLENBQVYsQ0FBNUQsRUFBcUcsS0FBS3NNLFdBQUwsQ0FBaUI1VSxNQUFqQixHQUF3QnRDLENBQXhCLEtBQTRCQSxDQUFDLEdBQUMsS0FBS2tYLFdBQUwsQ0FBaUI1VSxNQUEvQyxDQUFyRztBQUE0Sjs7QUFBQSxhQUFJLElBQUkrSixDQUFDLEdBQUN6RyxDQUFWLEVBQVl5RyxDQUFDLElBQUVyTSxDQUFmLEVBQWlCcU0sQ0FBQyxFQUFsQixFQUFxQixLQUFLNkssV0FBTCxDQUFpQjdLLENBQUMsR0FBQyxDQUFuQixFQUFzQjhGLElBQXRCO0FBQTZCO0FBQUMsS0FBdjNOO0FBQXczTnVSLGFBQVMsRUFBQyxtQkFBUzlkLENBQVQsRUFBVztBQUFDLFdBQUsyZCxNQUFMLENBQVl0RCxJQUFaLENBQWlCLHNCQUFqQixFQUF5QzlKLFdBQXpDLENBQXFELHFCQUFyRDs7QUFBNEUsVUFBSW5XLENBQUMsR0FBQzRGLENBQUMsSUFBRSxLQUFLc1IsV0FBTCxDQUFpQnRSLENBQUMsR0FBQyxDQUFuQixDQUFUO0FBQStCNUYsT0FBQyxJQUFFQSxDQUFDLENBQUMwbEIsUUFBRixFQUFIO0FBQWdCLEtBQXpnTztBQUEwZ09DLFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUtyTSxTQUFMLElBQWdCLEtBQUtJLFdBQUwsQ0FBaUIsS0FBS0osU0FBdEIsQ0FBaEI7QUFBaUQ7QUFBOWtPLEdBQWY7O0FBQStsTyxXQUFTeUssU0FBVCxHQUFvQjtBQUFDLFNBQUtsVixVQUFMLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUEyQi9ELE1BQU0sQ0FBQ2dFLElBQVAsQ0FBWTNDLFNBQVosQ0FBM0I7QUFBbUQ7O0FBQUF2RCxHQUFDLENBQUNFLE1BQUYsQ0FBU2diLFNBQVMsQ0FBQzlZLFNBQW5CLEVBQTZCO0FBQUM0RCxjQUFVLEVBQUMsb0JBQVNqSixDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxXQUFLZ1csSUFBTCxHQUFVcFEsQ0FBVixFQUFZLEtBQUswVCxTQUFMLEdBQWV0WixDQUEzQixFQUE2QixLQUFLNGxCLFFBQUwsRUFBN0I7QUFBNkMsS0FBdkU7QUFBd0VBLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFdBQUt6UyxTQUFMLEdBQWV0SyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGNBQXBCLEVBQW9DNVUsSUFBcEMsQ0FBeUMsYUFBekMsRUFBdUQsS0FBS3FZLFNBQTVELENBQWY7QUFBc0YsS0FBbEw7QUFBbUwzRCxTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFHLENBQUMsS0FBS3FOLGNBQVQsRUFBd0I7QUFBQyxZQUFJcGQsQ0FBQyxHQUFDLEtBQUtvUSxJQUFMLENBQVVuRyxPQUFoQjtBQUF3QnNILGtCQUFVLENBQUNvTSxNQUFYLENBQWtCeGhCLE1BQWxCLENBQXlCLEtBQUtpaEIsY0FBTCxHQUFvQm5hLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isb0JBQXBCLEVBQTBDOVQsTUFBMUMsQ0FBaUQsS0FBS29SLFNBQUwsQ0FBZXBSLE1BQWYsQ0FBc0IsS0FBSzhqQixnQkFBTCxHQUFzQmhkLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isc0JBQXBCLENBQTVDLENBQWpELENBQTdDLEdBQXlMLFlBQVUsS0FBS0csSUFBTCxDQUFVOUcsSUFBcEIsSUFBMEIsS0FBS2lFLFNBQUwsQ0FBZTBDLFFBQWYsQ0FBd0IsbUJBQXhCLEVBQTZDNVUsSUFBN0MsQ0FBa0QsV0FBbEQsRUFBOEQ7QUFBQytVLGNBQUksRUFBQyxLQUFLQSxJQUFYO0FBQWdCakYsYUFBRyxFQUFDbkwsQ0FBQyxDQUFDdU4sU0FBRixJQUFhLEtBQUs2QyxJQUFMLENBQVV0VztBQUEzQyxTQUE5RCxDQUFuTjtBQUFrVSxZQUFJTSxDQUFDLEdBQUM0RixDQUFDLENBQUN1TixTQUFGLElBQWF2TixDQUFDLENBQUN1TixTQUFGLENBQVkyUyxJQUEvQjtBQUFvQzlsQixTQUFDLElBQUUsS0FBS21ULFNBQUwsQ0FBZXBSLE1BQWYsQ0FBc0I4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHlDQUF1QzdWLENBQTNELENBQXRCLENBQUgsRUFBd0YsS0FBS21ULFNBQUwsQ0FBZXBSLE1BQWYsQ0FBc0I4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHNCQUFwQixFQUE0QzlULE1BQTVDLENBQW1EOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixpQ0FBcEIsQ0FBbkQsRUFBMkc5VCxNQUEzRyxDQUFrSCxLQUFLK2EsT0FBTCxHQUFhalUsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixzQkFBcEIsRUFBNEM5VCxNQUE1QyxDQUFtRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsaUNBQXBCLENBQW5ELEVBQTJHOVQsTUFBM0csQ0FBa0gsS0FBS21SLE9BQUwsR0FBYXJLLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isc0JBQXBCLEVBQTRDNUMsSUFBNUMsR0FBbURsUixNQUFuRCxDQUEwRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTFELENBQS9ILENBQS9ILEVBQTRXOVQsTUFBNVcsQ0FBbVg4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDZCQUFwQixDQUFuWCxDQUF0QixDQUF4RixFQUFzaEIsS0FBSzFDLFNBQUwsQ0FBZXBSLE1BQWYsQ0FBc0I4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLG9CQUFwQixDQUF0QixDQUF0aEIsRUFBdWxCLEtBQUt3UCxNQUFMLEVBQXZsQjtBQUFxbUI7QUFBQyxLQUFqc0M7QUFBa3NDemtCLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtvaUIsY0FBTCxLQUFzQixLQUFLQSxjQUFMLENBQW9CcGlCLE1BQXBCLElBQTZCLEtBQUtvaUIsY0FBTCxHQUFvQixJQUFqRCxFQUFzRCxLQUFLdFIsS0FBTCxHQUFXLElBQXZGLEdBQTZGLEtBQUtxVSxLQUFMLEtBQWEsS0FBS0EsS0FBTCxDQUFXL1UsS0FBWCxJQUFtQixLQUFLK1UsS0FBTCxHQUFXLElBQTNDLENBQTdGLEVBQThJLEtBQUtDLGNBQUwsS0FBc0IsS0FBS0EsY0FBTCxDQUFvQmhWLEtBQXBCLElBQTRCLEtBQUtnVixjQUFMLEdBQW9CLElBQXRFLENBQTlJLEVBQTBOLEtBQUtDLFFBQUwsR0FBYyxDQUFDLENBQXpPLEVBQTJPLEtBQUtDLFFBQUwsR0FBYyxDQUFDLENBQTFQLEVBQTRQLEtBQUtsUSxJQUFMLEdBQVUsSUFBdFEsRUFBMlEsS0FBS21RLFdBQUwsRUFBM1E7QUFBOFIsS0FBbC9DO0FBQW0vQ2hVLFFBQUksRUFBQyxnQkFBVTtBQUFDLFVBQUcsRUFBRSxLQUFLaVUsT0FBTCxJQUFjLEtBQUtILFFBQW5CLElBQTZCLEtBQUtDLFFBQXBDLENBQUgsRUFBaUQ7QUFBQyxhQUFLTCxnQkFBTCxJQUF1QixLQUFLbFEsS0FBTCxFQUF2QixFQUFvQyxLQUFLc1EsUUFBTCxHQUFjLENBQUMsQ0FBbkQ7QUFBcUQsWUFBSXJnQixDQUFDLEdBQUMsS0FBS29RLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JzRCxTQUF4QjtBQUFBLFlBQWtDblQsQ0FBQyxHQUFDNEYsQ0FBQyxJQUFFLGNBQVlpRCxDQUFDLENBQUNxRyxJQUFGLENBQU90SixDQUFQLENBQWYsR0FBeUIsS0FBS29RLElBQUwsQ0FBVXRXLEdBQW5DLEdBQXVDa0csQ0FBQyxJQUFFLEtBQUtvUSxJQUFMLENBQVV0VyxHQUF4RjtBQUE0RixZQUFHLEtBQUsybUIsSUFBTCxHQUFVcm1CLENBQWIsRUFBZSxJQUFHLFlBQVUsS0FBS2dXLElBQUwsQ0FBVTlHLElBQXZCO0FBQTRCLGNBQUdsUCxDQUFDLEtBQUc0RixDQUFQLEVBQVMsS0FBS3lnQixJQUFMLEdBQVVybUIsQ0FBVixFQUFZLEtBQUtzbUIsS0FBTCxDQUFXLEtBQUtELElBQWhCLENBQVosQ0FBVCxLQUFnRCxRQUFPLEtBQUtyUSxJQUFMLENBQVU5RyxJQUFqQjtBQUF1QixpQkFBSSxPQUFKO0FBQVksbUJBQUs4VyxjQUFMLEdBQW9CLElBQUk5VCxjQUFKLENBQW1CLEtBQUs4RCxJQUFMLENBQVV0VyxHQUE3QixFQUFpQ21KLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUMscUJBQUt5Z0IsSUFBTCxHQUFVemdCLENBQVYsRUFBWSxLQUFLMGdCLEtBQUwsQ0FBVzFnQixDQUFYLENBQVo7QUFBMEIsZUFBOUMsRUFBK0MsSUFBL0MsQ0FBakMsRUFBc0ZpRCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLHFCQUFLcVcsTUFBTDtBQUFjLGVBQWpDLEVBQWtDLElBQWxDLENBQXRGLENBQXBCO0FBQW5DO0FBQTVFLGVBQXVRLEtBQUtELEtBQUwsQ0FBVyxLQUFLRCxJQUFoQjtBQUFzQjtBQUFDLEtBQW4vRDtBQUFvL0RYLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFdBQUt2UyxTQUFMLENBQWUwQyxRQUFmLENBQXdCLHFCQUF4QjtBQUErQyxLQUF2akU7QUFBd2pFeVEsU0FBSyxFQUFDLGVBQVMxZ0IsQ0FBVCxFQUFXO0FBQUMsV0FBS2lnQixnQkFBTCxDQUFzQjFJLE9BQXRCLENBQThCLEtBQUt6TCxLQUFMLEdBQVc3SSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLG9CQUFwQixFQUEwQ2dHLElBQTFDLENBQStDO0FBQUM5SyxXQUFHLEVBQUNuTDtBQUFMLE9BQS9DLEVBQXdEaUksR0FBeEQsQ0FBNEQ7QUFBQ3dOLGVBQU8sRUFBQztBQUFULE9BQTVELENBQXpDLEdBQXNILEtBQUttTCxhQUFMLEVBQXRILEVBQTJJLEtBQUtULEtBQUwsR0FBVyxJQUFJblgsVUFBSixDQUFlLEtBQUs4QyxLQUFMLENBQVcsQ0FBWCxDQUFmLEVBQTZCN0ksQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxZQUFJNUYsQ0FBQyxHQUFDNEYsQ0FBQyxDQUFDaUMsR0FBUjtBQUFZLGFBQUttYixjQUFMLElBQXFCLEtBQUtpRCxRQUExQixLQUFxQyxLQUFLRyxPQUFMLEdBQWEsQ0FBQyxDQUFkLEVBQWdCLEtBQUtILFFBQUwsR0FBYyxDQUFDLENBQS9CLEVBQWlDLEtBQUt0RSxXQUFMLEdBQWlCO0FBQUN0WSxlQUFLLEVBQUNySixDQUFDLENBQUN3UCxZQUFUO0FBQXNCM0YsZ0JBQU0sRUFBQzdKLENBQUMsQ0FBQzZRO0FBQS9CLFNBQWxELEVBQWdHLEtBQUt3VSxNQUFMLEVBQWhHLEVBQThHLEtBQUtyUyxJQUFMLEVBQW5KO0FBQWdLLE9BQWhNLEVBQWlNLElBQWpNLENBQTdCLEVBQW9PbkssQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQyxhQUFLcVcsTUFBTDtBQUFjLE9BQWpDLEVBQWtDLElBQWxDLENBQXBPLEVBQTRRO0FBQUN6VyxjQUFNLEVBQUMsS0FBS2tHLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0I4RDtBQUExQixPQUE1USxDQUF0SjtBQUEyYyxLQUFyaEY7QUFBc2hGNFMsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS0gsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLSCxRQUFMLEdBQWMsQ0FBQyxDQUEvQixFQUFpQyxLQUFLOVMsU0FBTCxDQUFlMEMsUUFBZixDQUF3QixvQkFBeEIsQ0FBakMsRUFBK0UsS0FBS25FLEtBQUwsSUFBWSxLQUFLQSxLQUFMLENBQVd1QixJQUFYLEVBQTNGLEVBQTZHLEtBQUs0UyxnQkFBTCxDQUFzQjlqQixNQUF0QixDQUE2QjhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isb0JBQXBCLENBQTdCLENBQTdHLEVBQXFMLEtBQUs3QyxJQUFMLEVBQXJMO0FBQWlNLEtBQXp1RjtBQUEwdUZ3VCxpQkFBYSxFQUFDLHlCQUFVO0FBQUMsVUFBR3BQLE9BQU8sQ0FBQ3FLLFNBQVIsSUFBbUIsS0FBS3pMLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JxRCxPQUF4QyxFQUFnRDtBQUFDLGFBQUtpVCxXQUFMOztBQUFtQixZQUFJdmdCLENBQUMsR0FBQyxLQUFLb1EsSUFBTCxDQUFVbkcsT0FBVixDQUFrQmtELE9BQWxCLENBQTBCSSxTQUFoQztBQUEwQyxhQUFLNUMsTUFBTCxHQUFZTixVQUFVLENBQUNwSCxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGVBQUtnRCxPQUFMLENBQWFxRCxJQUFiLENBQWtCLENBQUMsQ0FBbkIsRUFBc0JDLE1BQXRCLENBQTZCNVEsQ0FBQyxDQUFDb04sSUFBRixJQUFRLENBQXJDLEVBQXVDLENBQXZDO0FBQTBDLFNBQTdELEVBQThELElBQTlELENBQUQsRUFBcUUsS0FBS2dELElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JzRSxZQUFsQixJQUFnQyxDQUFyRyxDQUF0QjtBQUE4SDtBQUFDLEtBQWgvRjtBQUFpL0ZuQixRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLbVQsV0FBTDs7QUFBbUIsVUFBSXZnQixDQUFDLEdBQUMsS0FBS29RLElBQUwsQ0FBVW5HLE9BQVYsQ0FBa0JrRCxPQUFsQixDQUEwQkksU0FBaEM7QUFBMEMsV0FBSzJKLE9BQUwsQ0FBYXZHLElBQWIsQ0FBa0IsQ0FBQyxDQUFuQixFQUFzQm5ELEtBQXRCLENBQTRCeE4sQ0FBQyxDQUFDd04sS0FBOUIsRUFBcUNvRCxNQUFyQyxDQUE0QzVRLENBQUMsQ0FBQ29OLElBQTlDLEVBQW1ELENBQW5EO0FBQXNELEtBQXBuRztBQUFxbkdtVCxlQUFXLEVBQUMsdUJBQVU7QUFBQyxXQUFLNVYsTUFBTCxLQUFjVSxZQUFZLENBQUMsS0FBS1YsTUFBTixDQUFaLEVBQTBCLEtBQUtBLE1BQUwsR0FBWSxJQUFwRDtBQUEwRCxLQUF0c0c7QUFBdXNHOFUsVUFBTSxFQUFDLGtCQUFVO0FBQUMsVUFBRyxLQUFLckMsY0FBUixFQUF1QjtBQUFDLFlBQUlwZCxDQUFDLEdBQUMsaUJBQWV1UixVQUFVLENBQUN5QixZQUFoQzs7QUFBNkMsWUFBRyxLQUFLb0ssY0FBTCxDQUFvQm5WLEdBQXBCLENBQXdCO0FBQUN4RSxlQUFLLEVBQUM4TixVQUFVLENBQUM0TCxLQUFYLENBQWlCQyxjQUFqQixDQUFnQ3BkLENBQUMsR0FBQyxPQUFELEdBQVMsUUFBMUMsQ0FBUDtBQUEyRGlFLGdCQUFNLEVBQUNzTixVQUFVLENBQUM0TCxLQUFYLENBQWlCQyxjQUFqQixDQUFnQ3BkLENBQUMsR0FBQyxRQUFELEdBQVUsT0FBM0M7QUFBbEUsU0FBeEIsR0FBZ0osS0FBS29kLGNBQUwsQ0FBb0JuVixHQUFwQixDQUF3QjtBQUFDMEssYUFBRyxFQUFDM1MsQ0FBQyxHQUFDLENBQUQsR0FBR3VSLFVBQVUsQ0FBQzRMLEtBQVgsQ0FBaUJDLGNBQWpCLENBQWdDM1osS0FBaEMsSUFBdUMsS0FBS2lRLFNBQUwsR0FBZSxDQUF0RCxDQUFUO0FBQWtFOUYsY0FBSSxFQUFDNU4sQ0FBQyxHQUFDdVIsVUFBVSxDQUFDNEwsS0FBWCxDQUFpQkMsY0FBakIsQ0FBZ0MzWixLQUFoQyxJQUF1QyxLQUFLaVEsU0FBTCxHQUFlLENBQXRELENBQUQsR0FBMEQ7QUFBbEksU0FBeEIsQ0FBaEosRUFBOFMsS0FBS3VNLGdCQUF0VCxFQUF1VTtBQUFDLGNBQUk3bEIsQ0FBQyxHQUFDbVgsVUFBVSxDQUFDNEwsS0FBWCxDQUFpQjVQLFNBQXZCOztBQUFpQyxjQUFHLEtBQUtBLFNBQUwsQ0FBZXRGLEdBQWYsQ0FBbUI7QUFBQ3hFLGlCQUFLLEVBQUNySixDQUFDLENBQUNxSixLQUFUO0FBQWVRLGtCQUFNLEVBQUM3SixDQUFDLENBQUM2SixNQUF4QjtBQUErQiwwQkFBYStDLElBQUksQ0FBQ3FZLEtBQUwsQ0FBVyxDQUFDLEVBQUQsR0FBSWpsQixDQUFDLENBQUM2SixNQUFqQixDQUE1QztBQUFxRSwyQkFBYytDLElBQUksQ0FBQ3FZLEtBQUwsQ0FBVyxDQUFDLEVBQUQsR0FBSWpsQixDQUFDLENBQUNxSixLQUFqQixDQUFuRjtBQUEyRyw2QkFBZ0IsQ0FBM0g7QUFBNkgsNEJBQWU7QUFBNUksV0FBbkIsR0FBbUssS0FBS3NZLFdBQTNLLEVBQXVMO0FBQUMsZ0JBQUkvVyxDQUFKO0FBQUEsZ0JBQU15QixDQUFDLEdBQUM7QUFBQ2hELG1CQUFLLEVBQUNySixDQUFDLENBQUNxSixLQUFUO0FBQWVRLG9CQUFNLEVBQUM3SixDQUFDLENBQUM2SjtBQUF4QixhQUFSO0FBQUEsZ0JBQXdDeUMsQ0FBQyxHQUFDTSxJQUFJLENBQUNFLEdBQUwsQ0FBU1QsQ0FBQyxDQUFDaEQsS0FBWCxFQUFpQmdELENBQUMsQ0FBQ3hDLE1BQW5CLENBQTFDO0FBQUEsZ0JBQXFFMEMsQ0FBQyxHQUFDMUQsQ0FBQyxDQUFDRSxNQUFGLENBQVMsRUFBVCxFQUFZLEtBQUs0WSxXQUFqQixDQUF2RTs7QUFBcUcsZ0JBQUdwVixDQUFDLENBQUNsRCxLQUFGLEdBQVFnRCxDQUFDLENBQUNoRCxLQUFWLElBQWlCa0QsQ0FBQyxDQUFDMUMsTUFBRixHQUFTd0MsQ0FBQyxDQUFDeEMsTUFBL0IsRUFBc0M7QUFBQyxrQkFBSTJDLENBQUMsR0FBQyxDQUFOO0FBQUEsa0JBQVFDLENBQUMsR0FBQyxDQUFWO0FBQVksZUFBQzdCLENBQUMsR0FBQ3NCLEdBQUcsQ0FBQ0MsTUFBSixDQUFXRSxDQUFYLEVBQWFFLENBQWIsQ0FBSCxFQUFvQmxELEtBQXBCLEdBQTBCZ0QsQ0FBQyxDQUFDaEQsS0FBNUIsS0FBb0NtRCxDQUFDLEdBQUNILENBQUMsQ0FBQ2hELEtBQUYsR0FBUXVCLENBQUMsQ0FBQ3ZCLEtBQWhELEdBQXVEdUIsQ0FBQyxDQUFDZixNQUFGLEdBQVN3QyxDQUFDLENBQUN4QyxNQUFYLEtBQW9CNEMsQ0FBQyxHQUFDSixDQUFDLENBQUN4QyxNQUFGLEdBQVNlLENBQUMsQ0FBQ2YsTUFBakMsQ0FBdkQ7QUFBZ0csa0JBQUk2QyxDQUFDLEdBQUNFLElBQUksQ0FBQ0UsR0FBTCxDQUFTTixDQUFULEVBQVdDLENBQVgsQ0FBTjtBQUFvQixrQkFBRUMsQ0FBRixLQUFNOUIsQ0FBQyxDQUFDdkIsS0FBRixJQUFTcUQsQ0FBVCxFQUFXOUIsQ0FBQyxDQUFDZixNQUFGLElBQVU2QyxDQUEzQixHQUE4QjdELENBQUMsQ0FBQ3NHLElBQUYsQ0FBTyxlQUFlMUIsS0FBZixDQUFxQixHQUFyQixDQUFQLEVBQWlDLFVBQVM3SCxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQzRLLGlCQUFDLENBQUM1SyxDQUFELENBQUQsR0FBSzRNLElBQUksQ0FBQ3FZLEtBQUwsQ0FBV3JhLENBQUMsQ0FBQzVLLENBQUQsQ0FBWixDQUFMO0FBQXNCLGVBQXJFLENBQTlCO0FBQXFHLGFBQTVRLE1BQWlSNEssQ0FBQyxHQUFDc0IsR0FBRyxDQUFDQyxNQUFKLENBQVcsS0FBS3dWLFdBQWhCLEVBQTRCcFYsQ0FBQyxDQUFDbEQsS0FBRixHQUFRZ0QsQ0FBQyxDQUFDaEQsS0FBVixJQUFpQmtELENBQUMsQ0FBQzFDLE1BQUYsR0FBU3dDLENBQUMsQ0FBQ3hDLE1BQTVCLEdBQW1DO0FBQUNSLG1CQUFLLEVBQUNpRCxDQUFQO0FBQVN6QyxvQkFBTSxFQUFDeUM7QUFBaEIsYUFBbkMsR0FBc0RELENBQWxGLENBQUY7O0FBQXVGLGdCQUFJTSxDQUFDLEdBQUNDLElBQUksQ0FBQ3FZLEtBQUwsQ0FBVyxLQUFHNVksQ0FBQyxDQUFDaEQsS0FBTCxHQUFXLEtBQUd1QixDQUFDLENBQUN2QixLQUEzQixDQUFOO0FBQUEsZ0JBQXdDK1YsQ0FBQyxHQUFDeFMsSUFBSSxDQUFDcVksS0FBTCxDQUFXLEtBQUc1WSxDQUFDLENBQUN4QyxNQUFMLEdBQVksS0FBR2UsQ0FBQyxDQUFDZixNQUE1QixDQUExQztBQUE4RSxpQkFBSzZILEtBQUwsQ0FBV3NPLFVBQVgsQ0FBc0IsT0FBdEIsRUFBK0JuUyxHQUEvQixDQUFtQ2hGLENBQUMsQ0FBQ0UsTUFBRixDQUFTLEVBQVQsRUFBWTZCLENBQVosRUFBYztBQUFDMk4saUJBQUcsRUFBQzZHLENBQUw7QUFBTzVMLGtCQUFJLEVBQUM3RztBQUFaLGFBQWQsQ0FBbkM7QUFBa0U7QUFBQztBQUFDO0FBQUM7QUFBLzVJLEdBQTdCO0FBQSs3SSxNQUFJMEssRUFBRSxHQUFDO0FBQUNvUCxVQUFNLEVBQUMsQ0FBQyxXQUFELEVBQWEsU0FBYixFQUF1QixRQUF2QixDQUFSO0FBQXlDdkksT0FBRyxFQUFDLENBQUMsQ0FBOUM7QUFBZ0R3SSw2QkFBeUIsRUFBQyxDQUFDLHFCQUFELEVBQXVCLGFBQXZCLEVBQXFDLDBCQUFyQyxFQUFnRSwyQ0FBaEUsRUFBNkduZixJQUE3RyxDQUFrSCxJQUFsSCxDQUExRTtBQUFrTXNILGNBQVUsRUFBQyxvQkFBU2pKLENBQVQsRUFBVztBQUFDaUQsT0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUtzWCxNQUFaLEVBQW1CNWQsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxhQUFLQSxDQUFMLEVBQVE2TyxVQUFSO0FBQXFCLE9BQTNDLEVBQTRDLElBQTVDLENBQW5CLEdBQXNFb0gsTUFBTSxDQUFDeFcsT0FBUCxDQUFlb1csUUFBZixDQUF3Qiw0Q0FBeEIsQ0FBdEU7QUFBNEksS0FBclc7QUFBc1d4RSxPQUFHLEVBQUMsYUFBU3pMLENBQVQsRUFBVztBQUFDLFdBQUtzWSxHQUFMLEtBQVdqSSxNQUFNLENBQUN4VyxPQUFQLENBQWUwVyxXQUFmLENBQTJCLGtCQUFnQixLQUFLK0gsR0FBaEQsR0FBcUR4SSxPQUFPLENBQUNqVyxPQUFSLENBQWdCMFcsV0FBaEIsQ0FBNEIsbUJBQWlCLEtBQUsrSCxHQUFsRCxDQUFoRSxHQUF3SGpJLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZW9XLFFBQWYsQ0FBd0Isa0JBQWdCalEsQ0FBeEMsQ0FBeEgsRUFBbUs4UCxPQUFPLENBQUNqVyxPQUFSLENBQWdCb1csUUFBaEIsQ0FBeUIsbUJBQWlCalEsQ0FBMUMsQ0FBbkssRUFBZ04sS0FBSytnQixRQUFMLElBQWUsS0FBS3pJLEdBQXBCLElBQXlCLEtBQUtBLEdBQUwsS0FBV3RZLENBQXBDLEtBQXdDLEtBQUssS0FBS3NZLEdBQVYsRUFBZWpGLE9BQWYsSUFBeUIsS0FBS3JULENBQUwsRUFBUXdVLE1BQVIsRUFBekIsRUFBMEMvQyxFQUFFLENBQUN6UixDQUFELENBQUYsQ0FBTW9OLElBQU4sRUFBbEYsQ0FBaE4sRUFBZ1QsS0FBS2tMLEdBQUwsR0FBU3RZLENBQXpUO0FBQTJULEtBQWpyQjtBQUFrckJnUyxtQkFBZSxFQUFDLDJCQUFVO0FBQUN0SyxhQUFPLENBQUNtQixXQUFSLElBQXFCLEtBQUt1RSxJQUFMLEVBQXJCO0FBQWlDLEtBQTl1QjtBQUErdUJvSCxVQUFNLEVBQUMsa0JBQVU7QUFBQ3ZSLE9BQUMsQ0FBQ3NHLElBQUYsQ0FBTyxLQUFLc1gsTUFBWixFQUFtQjVkLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUNxWCxVQUFFLENBQUNyWCxDQUFELENBQUYsQ0FBTUEsQ0FBQyxLQUFHLEtBQUtrZSxHQUFULEdBQWEsUUFBYixHQUFzQixTQUE1QjtBQUF5QyxPQUEvRCxFQUFnRSxJQUFoRSxDQUFuQixHQUEwRixLQUFLeUksUUFBTCxHQUFjLENBQUMsQ0FBekc7QUFBMkcsS0FBNTJCO0FBQTYyQjFOLFdBQU8sRUFBQyxtQkFBVTtBQUFDcFEsT0FBQyxDQUFDc0csSUFBRixDQUFPLEtBQUtzWCxNQUFaLEVBQW1CNWQsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ3FYLFVBQUUsQ0FBQ3JYLENBQUQsQ0FBRixDQUFNaVosT0FBTjtBQUFnQixPQUF0QyxFQUF1QyxJQUF2QyxDQUFuQixHQUFpRSxLQUFLME4sUUFBTCxHQUFjLENBQUMsQ0FBaEY7QUFBa0YsS0FBbDlCO0FBQW05QnRPLGtCQUFjLEVBQUMsd0JBQVN6UyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ3FYLFFBQUUsQ0FBQyxLQUFLNkcsR0FBTixDQUFGLENBQWE3RixjQUFiLENBQTRCelMsQ0FBNUIsRUFBOEI1RixDQUE5QjtBQUFpQyxLQUFqaEM7QUFBa2hDZ1QsUUFBSSxFQUFDLGNBQVNwTixDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ3FYLFFBQUUsQ0FBQyxLQUFLNkcsR0FBTixDQUFGLENBQWFsTCxJQUFiLENBQWtCcE4sQ0FBbEIsRUFBb0I1RixDQUFwQjtBQUF1QixLQUE1akM7QUFBNmpDaVQsUUFBSSxFQUFDLGNBQVNyTixDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQ3FYLFFBQUUsQ0FBQyxLQUFLNkcsR0FBTixDQUFGLENBQWFqTCxJQUFiLENBQWtCck4sQ0FBbEIsRUFBb0I1RixDQUFwQjtBQUF1QixLQUF2bUM7QUFBd21DNFosU0FBSyxFQUFDLGlCQUFVO0FBQUMvUSxPQUFDLENBQUNzRyxJQUFGLENBQU8sS0FBS3NYLE1BQVosRUFBbUI1ZCxDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVzVGLENBQVgsRUFBYTtBQUFDcVgsVUFBRSxDQUFDclgsQ0FBRCxDQUFGLENBQU00WixLQUFOO0FBQWMsT0FBcEMsRUFBcUMsSUFBckMsQ0FBbkI7QUFBK0QsS0FBeHJDO0FBQXlyQ3hCLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUl4UyxDQUFDLEdBQUNrUSxLQUFLLENBQUNDLElBQVo7QUFBaUJuUSxPQUFDLElBQUUsS0FBS3lMLEdBQUwsQ0FBU3pMLENBQUMsQ0FBQ3NZLEdBQVgsQ0FBSDtBQUFtQjtBQUEvdUMsR0FBUDtBQUF3dkMsU0FBTzdHLEVBQUUsQ0FBQ3VQLFNBQUgsR0FBYTtBQUFDL1gsY0FBVSxFQUFDLHNCQUFVO0FBQUMsV0FBSzhHLEtBQUwsSUFBYSxLQUFLa1IsV0FBTCxHQUFpQixDQUFDLENBQS9CO0FBQWlDLEtBQXhEO0FBQXlEbFIsU0FBSyxFQUFDLGlCQUFVO0FBQUNNLFlBQU0sQ0FBQ2UsSUFBUCxDQUFZalYsTUFBWixDQUFtQixLQUFLcWhCLFNBQUwsR0FBZXZhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0Isa0VBQXBCLEVBQXdGOVQsTUFBeEYsQ0FBK0Y4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdCQUFwQixFQUFzQzlULE1BQXRDLENBQTZDOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiwyQkFBcEIsQ0FBN0MsRUFBK0Y5VCxNQUEvRixDQUFzRzhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IscUJBQXBCLENBQXRHLENBQS9GLENBQWxDLEVBQXFSOVQsTUFBclIsQ0FBNFIsS0FBS3loQixLQUFMLEdBQVczYSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDBEQUFwQixFQUFnRjlULE1BQWhGLENBQXVGOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0M5VCxNQUF0QyxDQUE2QzhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGOVQsTUFBL0YsQ0FBc0c4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUF2RixDQUF2UyxFQUFraEI5VCxNQUFsaEIsQ0FBeWhCLEtBQUsra0IsTUFBTCxHQUFZamUsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiw2QkFBcEIsRUFBbUQ5VCxNQUFuRCxDQUEwRDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IscUJBQXBCLENBQTFELEVBQXNHOVQsTUFBdEcsQ0FBNkc4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGVBQXBCLENBQTdHLENBQXJpQixHQUF5ckJ2TSxPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLElBQVksQ0FBeEIsSUFBMkIsS0FBS21aLFNBQUwsQ0FBZW5sQixHQUFmLENBQW1CLEtBQUt1bEIsS0FBeEIsRUFBK0J2bEIsR0FBL0IsQ0FBbUMsS0FBSzZvQixNQUF4QyxFQUFnRDdULElBQWhELEVBQXB0QixFQUEyd0IsS0FBSzZULE1BQUwsQ0FBWW5iLEVBQVosQ0FBZSxPQUFmLEVBQXVCOUMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDeEYsY0FBRixJQUFtQjZWLE1BQU0sQ0FBQ2hELElBQVAsRUFBbkI7QUFBaUMsT0FBckQsRUFBc0QsSUFBdEQsQ0FBdkIsQ0FBM3dCLEVBQSsxQixLQUFLbVEsU0FBTCxDQUFlelgsRUFBZixDQUFrQixPQUFsQixFQUEwQjlDLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUNxUSxjQUFNLENBQUM2RCxRQUFQLElBQWtCLEtBQUtpTixZQUFMLENBQWtCbmhCLENBQWxCLENBQWxCO0FBQXVDLE9BQTNELEVBQTRELElBQTVELENBQTFCLENBQS8xQixFQUE0N0IsS0FBSzRkLEtBQUwsQ0FBVzdYLEVBQVgsQ0FBYyxPQUFkLEVBQXNCOUMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ3FRLGNBQU0sQ0FBQ2dFLElBQVAsSUFBYyxLQUFLOE0sWUFBTCxDQUFrQm5oQixDQUFsQixDQUFkO0FBQW1DLE9BQXZELEVBQXdELElBQXhELENBQXRCLENBQTU3QjtBQUFpaEMsS0FBM2xDO0FBQTRsQ3dVLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtyVSxJQUFMO0FBQVksS0FBMW5DO0FBQTJuQ2tULFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUsrTixNQUFMO0FBQWMsS0FBNXBDO0FBQTZwQ3BOLFNBQUssRUFBQyxpQkFBVTtBQUFDM0QsWUFBTSxDQUFDYyxNQUFQLENBQWN6RixLQUFkLENBQW9CLGNBQXBCLEdBQW9DLEtBQUsyVixFQUFMLEdBQVEsQ0FBQyxDQUE3QyxFQUErQyxLQUFLQyxFQUFMLEdBQVEsQ0FBQyxDQUF4RCxFQUEwRCxLQUFLTCxXQUFMLEdBQWlCLENBQUMsQ0FBNUUsRUFBOEUsS0FBS00sYUFBTCxFQUE5RSxFQUFtRyxLQUFLQyxhQUFMLEVBQW5HO0FBQXdILEtBQXR5QztBQUF1eUNELGlCQUFhLEVBQUMseUJBQVU7QUFBQyxXQUFLL0QsU0FBTCxDQUFlbmxCLEdBQWYsQ0FBbUIsS0FBS3VsQixLQUF4QixFQUErQmpOLElBQS9CLENBQW9DLENBQUMsQ0FBckMsRUFBd0N5SixVQUF4QyxDQUFtRCxPQUFuRDtBQUE0RCxLQUE1M0M7QUFBNjNDamEsUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS3NoQixpQkFBTCxLQUF5QixLQUFLTCxNQUFMLElBQWMvUSxNQUFNLENBQUNnQixNQUFQLENBQWN0TCxFQUFkLENBQWlCLFNBQWpCLEVBQTJCLGVBQTNCLEVBQTJDLEtBQUswYixpQkFBTCxHQUF1QnhlLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLb1gsVUFBYixFQUF3QixJQUF4QixDQUFsRSxDQUFkLEVBQStHaGEsT0FBTyxDQUFDbUIsV0FBUixLQUFzQndILE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZWtNLEVBQWYsQ0FBa0IsWUFBbEIsRUFBK0IsS0FBSzRiLFlBQUwsR0FBa0IxZSxDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSzhDLElBQWIsRUFBa0IsSUFBbEIsQ0FBakQsRUFBMEVySCxFQUExRSxDQUE2RSxZQUE3RSxFQUEwRixLQUFLNmIsWUFBTCxHQUFrQjNlLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLK0MsSUFBYixFQUFrQixJQUFsQixDQUE1RyxHQUFxSWdELE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZWtNLEVBQWYsQ0FBa0IsV0FBbEIsRUFBOEIsS0FBSzhiLGlCQUFMLEdBQXVCNWUsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxZQUFJNUYsQ0FBQyxHQUFDNEYsQ0FBQyxDQUFDMGEsS0FBUjtBQUFBLFlBQWMxVixDQUFDLEdBQUNoRixDQUFDLENBQUMyYSxLQUFsQjtBQUF3QixhQUFLbUgsbUJBQUwsSUFBMEI5YyxDQUFDLEtBQUcsS0FBS3NjLEVBQVQsSUFBYWxuQixDQUFDLEtBQUcsS0FBS2luQixFQUFoRCxLQUFxRCxLQUFLQSxFQUFMLEdBQVFqbkIsQ0FBUixFQUFVLEtBQUtrbkIsRUFBTCxHQUFRdGMsQ0FBbEIsRUFBb0IsS0FBS29JLElBQUwsRUFBcEIsRUFBZ0MsS0FBSzJVLFVBQUwsRUFBckY7QUFBd0csT0FBcEosRUFBcUosSUFBckosQ0FBckQsQ0FBckksRUFBc1YxUixNQUFNLENBQUNnQixNQUFQLENBQWN0TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLGVBQTdCLEVBQTZDLEtBQUtpYyxtQkFBTCxHQUF5Qi9lLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLNlcsWUFBYixFQUEwQixJQUExQixDQUF0RSxFQUF1R3BiLEVBQXZHLENBQTBHLFlBQTFHLEVBQXVILGVBQXZILEVBQXVJLEtBQUtrYyxvQkFBTCxHQUEwQmhmLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLa1gsYUFBYixFQUEyQixJQUEzQixDQUFqSyxFQUFtTXpiLEVBQW5NLENBQXNNLFlBQXRNLEVBQW1OLGVBQW5OLEVBQW1PLEtBQUttYyxvQkFBTCxHQUEwQmpmLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLNlgsYUFBYixFQUEyQixJQUEzQixDQUE3UCxDQUF0VixFQUFxbkI5UixNQUFNLENBQUN4VyxPQUFQLENBQWVrTSxFQUFmLENBQWtCLFlBQWxCLEVBQStCLFVBQS9CLEVBQTBDLEtBQUtxYyx3QkFBTCxHQUE4Qm5mLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLK1gsaUJBQWIsRUFBK0IsSUFBL0IsQ0FBeEUsRUFBOEd0YyxFQUE5RyxDQUFpSCxZQUFqSCxFQUE4SCxVQUE5SCxFQUF5SSxLQUFLdWMsd0JBQUwsR0FBOEJyZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS2lZLGlCQUFiLEVBQStCLElBQS9CLENBQXZLLENBQXJuQixFQUFrMEJ0ZixDQUFDLENBQUN0SSxNQUFELENBQUQsQ0FBVW9MLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLEtBQUt5YyxnQkFBTCxHQUFzQnZmLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLNkgsU0FBYixFQUF1QixJQUF2QixDQUE1QyxDQUF4MUIsQ0FBeEk7QUFBNGlDLEtBQXo3RTtBQUEwN0VpUCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLSyxpQkFBTCxLQUF5QnBSLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY2EsR0FBZCxDQUFrQixTQUFsQixFQUE0QixlQUE1QixFQUE0QyxLQUFLdVAsaUJBQWpELEdBQW9FLEtBQUtBLGlCQUFMLEdBQXVCLElBQTNGLEVBQWdHLEtBQUtFLFlBQUwsS0FBb0J0UixNQUFNLENBQUN4VyxPQUFQLENBQWVxWSxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLEtBQUt5UCxZQUFyQyxFQUFtRHpQLEdBQW5ELENBQXVELFlBQXZELEVBQW9FLEtBQUswUCxZQUF6RSxFQUF1RjFQLEdBQXZGLENBQTJGLFdBQTNGLEVBQXVHLEtBQUsyUCxpQkFBNUcsR0FBK0h4UixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIsZUFBOUIsRUFBOEMsS0FBSzhQLG1CQUFuRCxFQUF3RTlQLEdBQXhFLENBQTRFLFlBQTVFLEVBQXlGLGVBQXpGLEVBQXlHLEtBQUsrUCxvQkFBOUcsRUFBb0kvUCxHQUFwSSxDQUF3SSxZQUF4SSxFQUFxSixlQUFySixFQUFxSyxLQUFLZ1Esb0JBQTFLLENBQS9ILEVBQStUN1IsTUFBTSxDQUFDeFcsT0FBUCxDQUFlcVksR0FBZixDQUFtQixZQUFuQixFQUFnQyxVQUFoQyxFQUEyQyxLQUFLa1Esd0JBQWhELEVBQTBFbFEsR0FBMUUsQ0FBOEUsWUFBOUUsRUFBMkYsVUFBM0YsRUFBc0csS0FBS29RLHdCQUEzRyxDQUEvVCxFQUFvY3JmLENBQUMsQ0FBQ3RJLE1BQUQsQ0FBRCxDQUFVdVgsR0FBVixDQUFjLFFBQWQsRUFBdUIsS0FBS3NRLGdCQUE1QixDQUFwYyxFQUFrZixLQUFLYixZQUFMLEdBQWtCLElBQXhoQixDQUF6SDtBQUF3cEIsS0FBcG1HO0FBQXFtR2xQLGtCQUFjLEVBQUMsd0JBQVN6UyxDQUFULEVBQVc1RixDQUFYLEVBQWE7QUFBQyxVQUFJNEssQ0FBQyxHQUFDa0wsS0FBSyxDQUFDQyxJQUFaOztBQUFpQixVQUFHbkwsQ0FBSCxFQUFLO0FBQUMsWUFBSXlCLENBQUMsR0FBQzRKLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZW1mLEVBQWYsQ0FBa0IsVUFBbEIsQ0FBTjtBQUFvQ3ZTLFNBQUMsSUFBRTRKLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZXVULElBQWYsRUFBSDs7QUFBeUIsWUFBSTFHLENBQUMsR0FBQyxLQUFLOFcsU0FBTCxDQUFldkgsSUFBZixDQUFvQixPQUFwQixDQUFOOztBQUFtQyxhQUFLdUgsU0FBTCxDQUFlcEQsVUFBZixDQUEwQixPQUExQjs7QUFBbUMsWUFBSXpULENBQUMsR0FBQzJTLFFBQVEsQ0FBQyxLQUFLa0UsU0FBTCxDQUFldlYsR0FBZixDQUFtQixZQUFuQixDQUFELENBQWQ7QUFBaUQsYUFBS3VWLFNBQUwsQ0FBZXZILElBQWYsQ0FBb0I7QUFBQ2xWLGVBQUssRUFBQzJGO0FBQVAsU0FBcEIsR0FBK0JELENBQUMsSUFBRTRKLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZXdULElBQWYsRUFBbEM7O0FBQXdELFlBQUl6RyxDQUFDLEdBQUM1QixDQUFDLENBQUMrVSxXQUFGLElBQWUsQ0FBckI7QUFBQSxZQUF1QmxULENBQUMsR0FBQyxLQUFLMlcsU0FBTCxDQUFlbmxCLEdBQWYsQ0FBbUIsS0FBS3VsQixLQUF4QixDQUF6QjtBQUFBLFlBQXdEOVcsQ0FBQyxHQUFDO0FBQUMsd0JBQWFILENBQUMsR0FBQyxLQUFHQztBQUFuQixTQUExRDtBQUFBLFlBQWdGRyxDQUFDLEdBQUMsYUFBVzlELENBQUMsQ0FBQ3FHLElBQUYsQ0FBT2xQLENBQVAsQ0FBWCxHQUFxQkEsQ0FBckIsR0FBdUI4VixLQUFLLENBQUNDLElBQU4sSUFBWUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JuRyxPQUFoQixDQUF3QmtELE9BQXhCLENBQWdDMU8sT0FBaEMsQ0FBd0MyTyxJQUFwRCxJQUEwRCxDQUFuSzs7QUFBcUssYUFBSzhGLE9BQUwsS0FBZW5NLENBQUMsR0FBQyxDQUFqQixHQUFvQkYsQ0FBQyxDQUFDOEosSUFBRixDQUFPLENBQUMsQ0FBUixFQUFXaVAsT0FBWCxDQUFtQjlZLENBQW5CLEVBQXFCQyxDQUFyQixFQUF1Qi9HLENBQXZCLENBQXBCLEVBQThDLEtBQUt3ZCxTQUFMLENBQWUsQ0FBQ25OLE1BQU0sQ0FBQzRELFdBQVAsS0FBcUIsUUFBckIsR0FBOEIsS0FBL0IsSUFBc0MsT0FBckQsRUFBOEQsa0JBQTlELENBQTlDLEVBQWdJLEtBQUsySixLQUFMLENBQVcsQ0FBQ3ZOLE1BQU0sQ0FBQytELE9BQVAsS0FBaUIsUUFBakIsR0FBMEIsS0FBM0IsSUFBa0MsT0FBN0MsRUFBc0Qsa0JBQXRELENBQWhJLEVBQTBNdk4sQ0FBQyxDQUFDLENBQUM3QixDQUFDLENBQUNvUSxNQUFGLEdBQVMsQ0FBVCxHQUFXLEtBQVgsR0FBaUIsUUFBbEIsSUFBNEIsT0FBN0IsQ0FBRCxDQUF1QyxnQkFBdkMsQ0FBMU0sRUFBbVFwVixDQUFDLElBQUVBLENBQUMsRUFBdlE7QUFBMFEsT0FBanFCLE1BQXNxQkEsQ0FBQyxJQUFFQSxDQUFDLEVBQUo7QUFBTyxLQUFoMEg7QUFBaTBIbVMsYUFBUyxFQUFDLHFCQUFVO0FBQUMsV0FBSzhPLFdBQUwsR0FBaUJoZSxDQUFDLENBQUN0SSxNQUFELENBQUQsQ0FBVThuQixVQUFWLEVBQWpCO0FBQXdDLEtBQTkzSDtBQUErM0h0QixnQkFBWSxFQUFDLHNCQUFTbmhCLENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQzBILE9BQU8sQ0FBQ21CLFdBQVosRUFBd0I7QUFBQyxZQUFJek8sQ0FBQyxHQUFDLEtBQUtzb0IsYUFBTCxDQUFtQjFpQixDQUFuQixDQUFOO0FBQUEsWUFBNEJnRixDQUFDLEdBQUNRLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CeEwsQ0FBcEIsQ0FBOUI7QUFBQSxZQUFxRHFNLENBQUMsR0FBQyxDQUFDLENBQUNyTSxDQUFGLElBQUtpVyxNQUFNLENBQUMsUUFBTXJMLENBQVAsQ0FBTixFQUE1RDs7QUFBOEUsWUFBRzVLLENBQUMsS0FBRyxLQUFLdW9CLGFBQVQsSUFBd0JsYyxDQUFDLEtBQUcsS0FBS21jLHFCQUFwQyxFQUEwRCxRQUFPLEtBQUtELGFBQUwsR0FBbUJ2b0IsQ0FBbkIsRUFBcUIsS0FBS3dvQixxQkFBTCxHQUEyQm5jLENBQWhELEVBQWtENEosTUFBTSxDQUFDZSxJQUFQLENBQVksQ0FBQzNLLENBQUMsR0FBQyxLQUFELEdBQU8sUUFBVCxJQUFtQixPQUEvQixFQUF3Qyx1QkFBeEMsQ0FBbEQsRUFBbUhyTSxDQUExSDtBQUE2SCxlQUFJLFVBQUo7QUFBZWlXLGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsc0JBQXJCLEVBQTZDTSxXQUE3QyxDQUF5RCxrQkFBekQ7O0FBQTZFOztBQUFNLGVBQUksTUFBSjtBQUFXRixrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLGtCQUFyQixFQUF5Q00sV0FBekMsQ0FBcUQsc0JBQXJEOztBQUExTztBQUF3VDtBQUFDLEtBQWwzSTtBQUFtM0lpUixpQkFBYSxFQUFDLHVCQUFTeGhCLENBQVQsRUFBVztBQUFDcVEsWUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCLEdBQXVGLEtBQUtvUyxhQUFMLEdBQW1CLENBQUMsQ0FBM0c7QUFBNkcsS0FBMS9JO0FBQTIvSWpCLGNBQVUsRUFBQyxvQkFBUzFoQixDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUUsSUFBRUEsQ0FBQyxDQUFDNmlCLEtBQU4sQ0FBSCxFQUFnQixJQUFHLE1BQUkzUyxLQUFLLENBQUNjLEtBQU4sQ0FBWXRVLE1BQW5CLEVBQTBCO0FBQUMsWUFBSXRDLENBQUMsR0FBQyxLQUFLc29CLGFBQUwsQ0FBbUIxaUIsQ0FBbkIsQ0FBTjs7QUFBNEJxUSxjQUFNLENBQUNqVyxDQUFELENBQU4sSUFBWSxLQUFLK21CLFlBQUwsQ0FBa0JuaEIsQ0FBbEIsQ0FBWjtBQUFpQyxPQUF4RixNQUE2RnFRLE1BQU0sQ0FBQ2hELElBQVA7QUFBYyxLQUE3b0o7QUFBOG9KOFUsaUJBQWEsRUFBQyx1QkFBU25pQixDQUFULEVBQVc7QUFBQyxXQUFLbWhCLFlBQUwsQ0FBa0JuaEIsQ0FBbEI7QUFBcUIsS0FBN3JKO0FBQThySjBpQixpQkFBYSxFQUFDLHVCQUFTMWlCLENBQVQsRUFBVztBQUFDLE9BQUMsQ0FBRCxHQUFHLEtBQUtpaEIsV0FBUixHQUFvQixLQUFLQSxXQUF6QixHQUFxQyxLQUFLQSxXQUFMLEdBQWlCaGUsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVU4bkIsVUFBVixFQUF0RDtBQUE2RSxhQUFPemlCLENBQUMsQ0FBQzBhLEtBQUYsR0FBUXJLLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUE1QixHQUFpQyxLQUFLcVQsV0FBdEMsR0FBa0QsS0FBRzVRLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JyUCxLQUEzRSxHQUFpRixVQUFqRixHQUE0RixNQUFuRztBQUEwRyxLQUEvNEo7QUFBZzVKNGUscUJBQWlCLEVBQUMsMkJBQVNyaUIsQ0FBVCxFQUFXO0FBQUMsV0FBSzhoQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsS0FBS0QsYUFBTCxDQUFtQjFpQixDQUFuQixDQUEvQyxFQUFxRSxLQUFLNGlCLHFCQUFMLEdBQTJCdlMsTUFBTSxDQUFDLFFBQU03SyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQixLQUFLK2MsYUFBekIsQ0FBUCxDQUFOLEVBQWhHLEVBQXdKLEtBQUtHLFVBQUwsRUFBeEo7QUFBMEssS0FBeGxLO0FBQXlsS1AscUJBQWlCLEVBQUMsMkJBQVN2aUIsQ0FBVCxFQUFXO0FBQUMsV0FBSzhoQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsQ0FBQyxDQUFoRCxFQUFrRCxLQUFLQyxxQkFBTCxHQUEyQixDQUFDLENBQTlFLEVBQWdGLEtBQUtiLFVBQUwsRUFBaEY7QUFBa0csS0FBenRLO0FBQTB0SzNVLFFBQUksRUFBQyxjQUFTcE4sQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLc1YsUUFBUixFQUFpQixPQUFPLEtBQUt5TSxVQUFMLElBQWtCLE1BQUssZUFBYTllLENBQUMsQ0FBQ3FHLElBQUYsQ0FBT3RKLENBQVAsQ0FBYixJQUF3QkEsQ0FBQyxFQUE5QixDQUF6QjtBQUEyRCxXQUFLc1YsUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQixLQUFLeU0sVUFBTCxFQUFqQixFQUFtQzFSLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZW9XLFFBQWYsQ0FBd0IseUJBQXhCLEVBQW1ETSxXQUFuRCxDQUErRCx3QkFBL0QsQ0FBbkMsRUFBNEg3TSxPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLElBQVksQ0FBeEIsSUFBMkIsS0FBS21aLFNBQUwsQ0FBZW5sQixHQUFmLENBQW1CLEtBQUt1bEIsS0FBeEIsRUFBK0J2bEIsR0FBL0IsQ0FBbUMsS0FBSzZvQixNQUF4QyxFQUFnRDlULElBQWhELEVBQXZKLEVBQThNLGVBQWFuSyxDQUFDLENBQUNxRyxJQUFGLENBQU90SixDQUFQLENBQWIsSUFBd0JBLENBQUMsRUFBdk87QUFBME8sS0FBamlMO0FBQWtpTHFOLFFBQUksRUFBQyxjQUFTck4sQ0FBVCxFQUFXO0FBQUMsVUFBSTVGLENBQUMsR0FBQzhWLEtBQUssQ0FBQ0MsSUFBTixJQUFZRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQjlHLElBQWxDO0FBQXVDLFdBQUtnTSxRQUFMLEtBQWdCLENBQUNsYixDQUFELElBQUksY0FBWUEsQ0FBWixJQUFlLFlBQVVBLENBQTdDLE1BQWtELEtBQUtrYixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCakYsTUFBTSxDQUFDeFcsT0FBUCxDQUFlMFcsV0FBZixDQUEyQix5QkFBM0IsRUFBc0ROLFFBQXRELENBQStELHdCQUEvRCxDQUFuRSxHQUE2SixlQUFhaE4sQ0FBQyxDQUFDcUcsSUFBRixDQUFPdEosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQXRMO0FBQXlMLEtBQW54TDtBQUFveEw4aUIsY0FBVSxFQUFDLHNCQUFVO0FBQUNwYixhQUFPLENBQUNtQixXQUFSLElBQXFCd0gsTUFBTSxDQUFDYyxNQUFQLENBQWN6RixLQUFkLENBQW9CLGNBQXBCLENBQXJCO0FBQXlELEtBQW4yTDtBQUFvMkxxVyxjQUFVLEVBQUMsc0JBQVU7QUFBQ3JhLGFBQU8sQ0FBQ21CLFdBQVIsS0FBc0IsS0FBS2lhLFVBQUwsSUFBa0J6UyxNQUFNLENBQUNjLE1BQVAsQ0FBYzFGLEdBQWQsQ0FBa0IsY0FBbEIsRUFBaUN4SSxDQUFDLENBQUNxSCxLQUFGLENBQVEsWUFBVTtBQUFDLGFBQUsrQyxJQUFMO0FBQVksT0FBL0IsRUFBZ0MsSUFBaEMsQ0FBakMsRUFBdUVnRCxNQUFNLENBQUNELElBQVAsR0FBWUMsTUFBTSxDQUFDRCxJQUFQLENBQVluRyxPQUFaLENBQW9CeUUsT0FBaEMsR0FBd0MsQ0FBL0csQ0FBeEM7QUFBMko7QUFBcmhNLEdBQWIsRUFBb2lNK0MsRUFBRSxDQUFDc1IsTUFBSCxHQUFVO0FBQUM5WixjQUFVLEVBQUMsc0JBQVUsQ0FBRSxDQUF4QjtBQUF5QnVMLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtyVSxJQUFMO0FBQVksS0FBdkQ7QUFBd0RrVCxXQUFPLEVBQUMsbUJBQVU7QUFBQyxXQUFLK04sTUFBTDtBQUFjLEtBQXpGO0FBQTBGamhCLFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUtzaEIsaUJBQUwsS0FBeUIsS0FBS0wsTUFBTCxJQUFjL1EsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjdEwsRUFBZCxDQUFpQixTQUFqQixFQUEyQixhQUEzQixFQUF5QyxLQUFLMGIsaUJBQUwsR0FBdUJ4ZSxDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS29YLFVBQWIsRUFBd0IsSUFBeEIsQ0FBaEUsQ0FBZCxFQUE2R3JSLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY3RMLEVBQWQsQ0FBaUIsT0FBakIsRUFBeUIsdUJBQXpCLEVBQWlEOUMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDeEYsY0FBRixJQUFtQjZWLE1BQU0sQ0FBQ2hELElBQVAsRUFBbkI7QUFBaUMsT0FBckQsRUFBc0QsSUFBdEQsQ0FBakQsRUFBOEd0SCxFQUE5RyxDQUFpSCxPQUFqSCxFQUF5SCwrQkFBekgsRUFBeUo5QyxDQUFDLENBQUNxSCxLQUFGLENBQVEsVUFBU3RLLENBQVQsRUFBVztBQUFDcVEsY0FBTSxDQUFDNkQsUUFBUCxJQUFrQixLQUFLaU4sWUFBTCxDQUFrQm5oQixDQUFsQixDQUFsQjtBQUF1QyxPQUEzRCxFQUE0RCxJQUE1RCxDQUF6SixFQUE0TitGLEVBQTVOLENBQStOLE9BQS9OLEVBQXVPLDJCQUF2TyxFQUFtUTlDLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUNxUSxjQUFNLENBQUNnRSxJQUFQLElBQWMsS0FBSzhNLFlBQUwsQ0FBa0JuaEIsQ0FBbEIsQ0FBZDtBQUFtQyxPQUF2RCxFQUF3RCxJQUF4RCxDQUFuUSxDQUE3RyxFQUErYXFRLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZWtNLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMEIsdURBQTFCLEVBQWtGLEtBQUtpZCw0QkFBTCxHQUFrQy9mLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLMlkscUJBQWIsRUFBbUMsSUFBbkMsQ0FBcEgsQ0FBL2EsRUFBNmtCdmIsT0FBTyxDQUFDbUIsV0FBUixLQUFzQndILE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZWtNLEVBQWYsQ0FBa0IsWUFBbEIsRUFBK0IsYUFBL0IsRUFBNkMsS0FBSzRiLFlBQUwsR0FBa0IxZSxDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSzhDLElBQWIsRUFBa0IsSUFBbEIsQ0FBL0QsRUFBd0ZySCxFQUF4RixDQUEyRixZQUEzRixFQUF3RyxhQUF4RyxFQUFzSCxLQUFLNmIsWUFBTCxHQUFrQjNlLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLK0MsSUFBYixFQUFrQixJQUFsQixDQUF4SSxHQUFpS2dELE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZWtNLEVBQWYsQ0FBa0IsV0FBbEIsRUFBOEIsYUFBOUIsRUFBNEMsS0FBSzhiLGlCQUFMLEdBQXVCNWUsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxZQUFJNUYsQ0FBQyxHQUFDNEYsQ0FBQyxDQUFDMGEsS0FBUjtBQUFBLFlBQWMxVixDQUFDLEdBQUNoRixDQUFDLENBQUMyYSxLQUFsQjtBQUF3QixhQUFLbUgsbUJBQUwsSUFBMEI5YyxDQUFDLEtBQUcsS0FBS3NjLEVBQVQsSUFBYWxuQixDQUFDLEtBQUcsS0FBS2luQixFQUFoRCxLQUFxRCxLQUFLQSxFQUFMLEdBQVFqbkIsQ0FBUixFQUFVLEtBQUtrbkIsRUFBTCxHQUFRdGMsQ0FBbEIsRUFBb0IsS0FBS29JLElBQUwsRUFBcEIsRUFBZ0MsS0FBSzJVLFVBQUwsRUFBckY7QUFBd0csT0FBcEosRUFBcUosSUFBckosQ0FBbkUsQ0FBakssRUFBZ1kxUixNQUFNLENBQUNnQixNQUFQLENBQWN0TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLHFCQUE3QixFQUFtRDlDLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUNBLFNBQUMsQ0FBQ29HLGVBQUYsSUFBb0IsS0FBS29iLGFBQUwsQ0FBbUJ4aEIsQ0FBbkIsQ0FBcEI7QUFBMEMsT0FBOUQsRUFBK0QsSUFBL0QsQ0FBbkQsQ0FBaFksRUFBeWZxUSxNQUFNLENBQUNnQixNQUFQLENBQWN0TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLFVBQTdCLEVBQXdDOUMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFlBQVU7QUFBQyxhQUFLd1ksVUFBTDtBQUFrQixPQUFyQyxFQUFzQyxJQUF0QyxDQUF4QyxDQUF6ZixFQUE4a0J6UyxNQUFNLENBQUNnQixNQUFQLENBQWN0TCxFQUFkLENBQWlCLFdBQWpCLEVBQTZCLGFBQTdCLEVBQTJDLEtBQUtpYyxtQkFBTCxHQUF5Qi9lLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLNlcsWUFBYixFQUEwQixJQUExQixDQUFwRSxFQUFxR3BiLEVBQXJHLENBQXdHLFlBQXhHLEVBQXFILGFBQXJILEVBQW1JLEtBQUtrYyxvQkFBTCxHQUEwQmhmLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLa1gsYUFBYixFQUEyQixJQUEzQixDQUE3SixFQUErTHpiLEVBQS9MLENBQWtNLFlBQWxNLEVBQStNLGFBQS9NLEVBQTZOLEtBQUttYyxvQkFBTCxHQUEwQmpmLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLNlgsYUFBYixFQUEyQixJQUEzQixDQUF2UCxDQUE5a0IsRUFBdTJCOVIsTUFBTSxDQUFDeFcsT0FBUCxDQUFla00sRUFBZixDQUFrQixZQUFsQixFQUErQixVQUEvQixFQUEwQyxLQUFLcWMsd0JBQUwsR0FBOEJuZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSytYLGlCQUFiLEVBQStCLElBQS9CLENBQXhFLEVBQThHdGMsRUFBOUcsQ0FBaUgsWUFBakgsRUFBOEgsVUFBOUgsRUFBeUksS0FBS3VjLHdCQUFMLEdBQThCcmYsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLEtBQUtpWSxpQkFBYixFQUErQixJQUEvQixDQUF2SyxDQUF2MkIsRUFBb2pDdGYsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVVvTCxFQUFWLENBQWEsUUFBYixFQUFzQixLQUFLeWMsZ0JBQUwsR0FBc0J2ZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSzZILFNBQWIsRUFBdUIsSUFBdkIsQ0FBNUMsQ0FBMWtDLENBQXRtQjtBQUE0dkQsS0FBdDJEO0FBQXUyRGlQLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtLLGlCQUFMLEtBQXlCcFIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFNBQWxCLEVBQTRCLGFBQTVCLEVBQTBDLEtBQUt1UCxpQkFBL0MsR0FBa0UsS0FBS0EsaUJBQUwsR0FBdUIsSUFBekYsRUFBOEZwUixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMEIsdUJBQTFCLEVBQW1EQSxHQUFuRCxDQUF1RCxPQUF2RCxFQUErRCwrQkFBL0QsRUFBZ0dBLEdBQWhHLENBQW9HLE9BQXBHLEVBQTRHLDJCQUE1RyxDQUE5RixFQUF1TzdCLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZXFZLEdBQWYsQ0FBbUIsT0FBbkIsRUFBMkIsdURBQTNCLEVBQW1GLEtBQUs4USw0QkFBeEYsQ0FBdk8sRUFBNlYsS0FBS3JCLFlBQUwsS0FBb0J0UixNQUFNLENBQUN4VyxPQUFQLENBQWVxWSxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLGFBQWhDLEVBQThDLEtBQUt5UCxZQUFuRCxFQUFpRXpQLEdBQWpFLENBQXFFLFlBQXJFLEVBQWtGLGFBQWxGLEVBQWdHLEtBQUswUCxZQUFyRyxFQUFtSDFQLEdBQW5ILENBQXVILFdBQXZILEVBQW1JLGFBQW5JLEVBQWlKLEtBQUsyUCxpQkFBdEosR0FBeUt4UixNQUFNLENBQUNnQixNQUFQLENBQWNhLEdBQWQsQ0FBa0IsV0FBbEIsRUFBOEIscUJBQTlCLENBQXpLLEVBQThON0IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLFVBQTlCLENBQTlOLEVBQXdRN0IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLHFCQUE5QixFQUFvRCxLQUFLOFAsbUJBQXpELEVBQThFOVAsR0FBOUUsQ0FBa0YsWUFBbEYsRUFBK0YsYUFBL0YsRUFBNkcsS0FBSytQLG9CQUFsSCxFQUF3SS9QLEdBQXhJLENBQTRJLFlBQTVJLEVBQXlKLGFBQXpKLEVBQXVLLEtBQUtnUSxvQkFBNUssQ0FBeFEsRUFBMGM3UixNQUFNLENBQUN4VyxPQUFQLENBQWVxWSxHQUFmLENBQW1CLFlBQW5CLEVBQWdDLFVBQWhDLEVBQTJDLEtBQUtrUSx3QkFBaEQsRUFBMEVsUSxHQUExRSxDQUE4RSxZQUE5RSxFQUEyRixVQUEzRixFQUFzRyxLQUFLb1Esd0JBQTNHLENBQTFjLEVBQStrQnJmLENBQUMsQ0FBQ3RJLE1BQUQsQ0FBRCxDQUFVdVgsR0FBVixDQUFjLFFBQWQsRUFBdUIsS0FBS3NRLGdCQUE1QixDQUEva0IsRUFBNm5CLEtBQUtiLFlBQUwsR0FBa0IsSUFBbnFCLENBQXRYO0FBQWdpQyxLQUF6NUY7QUFBMDVGM04sU0FBSyxFQUFDLGlCQUFVO0FBQUMzRCxZQUFNLENBQUNjLE1BQVAsQ0FBY3pGLEtBQWQsQ0FBb0IsY0FBcEIsR0FBb0MsS0FBSzJWLEVBQUwsR0FBUSxDQUFDLENBQTdDLEVBQStDLEtBQUtDLEVBQUwsR0FBUSxDQUFDLENBQXhELEVBQTBELEtBQUtMLFdBQUwsR0FBaUIsQ0FBQyxDQUE1RSxFQUE4RSxLQUFLMEIsYUFBTCxHQUFtQixDQUFDLENBQWxHLEVBQW9HLEtBQUtuQixhQUFMLEVBQXBHO0FBQXlILEtBQXBpRztBQUFxaUcvTyxrQkFBYyxFQUFDLHdCQUFTelMsQ0FBVCxFQUFXO0FBQUNBLE9BQUMsSUFBRUEsQ0FBQyxFQUFKO0FBQU8sS0FBdmtHO0FBQXdrR21TLGFBQVMsRUFBQyxxQkFBVTtBQUFDLFdBQUs4TyxXQUFMLEdBQWlCaGUsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVU4bkIsVUFBVixFQUFqQjtBQUF3QyxLQUFyb0c7QUFBc29HUSx5QkFBcUIsRUFBQywrQkFBU2pqQixDQUFULEVBQVc7QUFBQyxVQUFJNUYsQ0FBQyxHQUFDOFYsS0FBSyxDQUFDQyxJQUFaO0FBQWlCL1YsT0FBQyxJQUFFQSxDQUFDLENBQUNnVyxJQUFGLENBQU9uRyxPQUFQLENBQWVuTixPQUFsQixJQUEyQixDQUFDMUMsQ0FBQyxDQUFDZ1csSUFBRixDQUFPbkcsT0FBUCxDQUFlbk4sT0FBZixDQUF1QnFSLEtBQW5ELElBQTBEbEwsQ0FBQyxDQUFDakQsQ0FBQyxDQUFDdkQsTUFBSCxDQUFELENBQVl1YyxFQUFaLENBQWUsdURBQWYsTUFBMEVoWixDQUFDLENBQUN4RixjQUFGLElBQW1Cd0YsQ0FBQyxDQUFDb0csZUFBRixFQUFuQixFQUF1Q2lLLE1BQU0sQ0FBQ2hELElBQVAsRUFBakgsQ0FBMUQ7QUFBMEwsS0FBbjNHO0FBQW8zRzhULGdCQUFZLEVBQUMsc0JBQVNuaEIsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDMEgsT0FBTyxDQUFDbUIsV0FBWixFQUF3QjtBQUFDLFlBQUl6TyxDQUFDLEdBQUMsS0FBS3NvQixhQUFMLENBQW1CMWlCLENBQW5CLENBQU47QUFBQSxZQUE0QmdGLENBQUMsR0FBQ1EsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFVBQVQsQ0FBb0J4TCxDQUFwQixDQUE5QjtBQUFBLFlBQXFEcU0sQ0FBQyxHQUFDLENBQUMsQ0FBQ3JNLENBQUYsSUFBS2lXLE1BQU0sQ0FBQyxRQUFNckwsQ0FBUCxDQUFOLEVBQTVEOztBQUE4RSxZQUFHLENBQUMsTUFBSWtMLEtBQUssQ0FBQ2MsS0FBTixDQUFZdFUsTUFBaEIsSUFBd0J3VCxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQm5HLE9BQWhCLENBQXdCZ0UsT0FBdkUsTUFBa0Y3VCxDQUFDLEdBQUMsQ0FBQyxDQUFyRixHQUF3RkEsQ0FBQyxLQUFHLEtBQUt1b0IsYUFBVCxJQUF3QmxjLENBQUMsS0FBRyxLQUFLbWMscUJBQTVILEVBQWtKLElBQUcsS0FBS0QsYUFBTCxHQUFtQnZvQixDQUFuQixFQUFxQixLQUFLd29CLHFCQUFMLEdBQTJCbmMsQ0FBaEQsRUFBa0RyTSxDQUFyRCxFQUF1RCxRQUFPaVcsTUFBTSxDQUFDZSxJQUFQLENBQVksQ0FBQzNLLENBQUMsR0FBQyxLQUFELEdBQU8sUUFBVCxJQUFtQixPQUEvQixFQUF3Qyx1QkFBeEMsR0FBaUVyTSxDQUF4RTtBQUEyRSxlQUFJLFVBQUo7QUFBZWlXLGtCQUFNLENBQUNlLElBQVAsQ0FBWW5CLFFBQVosQ0FBcUIsc0JBQXJCLEVBQTZDTSxXQUE3QyxDQUF5RCxrQkFBekQ7O0FBQTZFOztBQUFNLGVBQUksTUFBSjtBQUFXRixrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLGtCQUFyQixFQUF5Q00sV0FBekMsQ0FBcUQsc0JBQXJEOztBQUF4TCxTQUF2RCxNQUFpVUYsTUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCO0FBQXVGO0FBQUMsS0FBL2hJO0FBQWdpSWlSLGlCQUFhLEVBQUMsdUJBQVN4aEIsQ0FBVCxFQUFXO0FBQUNxUSxZQUFNLENBQUNlLElBQVAsQ0FBWWIsV0FBWixDQUF3Qiw2REFBeEIsR0FBdUYsS0FBS29TLGFBQUwsR0FBbUIsQ0FBQyxDQUEzRztBQUE2RyxLQUF2cUk7QUFBd3FJakIsY0FBVSxFQUFDLG9CQUFTMWhCLENBQVQsRUFBVztBQUFDLFVBQUcsRUFBRSxJQUFFQSxDQUFDLENBQUM2aUIsS0FBTixLQUFjNWYsQ0FBQyxDQUFDakQsQ0FBQyxDQUFDdkQsTUFBSCxDQUFELENBQVl1YyxFQUFaLENBQWV2SCxFQUFFLENBQUNxUCx5QkFBbEIsQ0FBakIsRUFBOEQsSUFBRyxNQUFJNVEsS0FBSyxDQUFDYyxLQUFOLENBQVl0VSxNQUFoQixJQUF3QndULEtBQUssQ0FBQ0MsSUFBTixJQUFZLFlBQVVELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLENBQWdCbkcsT0FBaEIsQ0FBd0JnRSxPQUF6RSxFQUFpRm9DLE1BQU0sQ0FBQ2hELElBQVAsR0FBakYsS0FBbUc7QUFBQyxZQUFJalQsQ0FBQyxHQUFDLEtBQUtzb0IsYUFBTCxDQUFtQjFpQixDQUFuQixDQUFOOztBQUE0QnFRLGNBQU0sQ0FBQ2pXLENBQUQsQ0FBTixJQUFZLEtBQUsrbUIsWUFBTCxDQUFrQm5oQixDQUFsQixDQUFaO0FBQWlDO0FBQUMsS0FBLzVJO0FBQWc2SW1pQixpQkFBYSxFQUFDLHVCQUFTbmlCLENBQVQsRUFBVztBQUFDLFdBQUttaEIsWUFBTCxDQUFrQm5oQixDQUFsQjtBQUFxQixLQUEvOEk7QUFBZzlJMGlCLGlCQUFhLEVBQUMsdUJBQVMxaUIsQ0FBVCxFQUFXO0FBQUMsT0FBQyxDQUFELEdBQUcsS0FBS2loQixXQUFSLEdBQW9CLEtBQUtBLFdBQXpCLEdBQXFDLEtBQUtBLFdBQUwsR0FBaUJoZSxDQUFDLENBQUN0SSxNQUFELENBQUQsQ0FBVThuQixVQUFWLEVBQXREO0FBQTZFLGFBQU96aUIsQ0FBQyxDQUFDMGEsS0FBRixHQUFRckssTUFBTSxDQUFDNEMsWUFBUCxDQUFvQnJGLElBQTVCLEdBQWlDLEtBQUtxVCxXQUF0QyxHQUFrRCxLQUFHNVEsTUFBTSxDQUFDeUMsY0FBUCxDQUFzQnJQLEtBQTNFLEdBQWlGLFVBQWpGLEdBQTRGLE1BQW5HO0FBQTBHLEtBQWpxSjtBQUFrcUo0ZSxxQkFBaUIsRUFBQywyQkFBU3JpQixDQUFULEVBQVc7QUFBQyxXQUFLOGhCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixLQUFLRCxhQUFMLENBQW1CMWlCLENBQW5CLENBQS9DLEVBQXFFLEtBQUs0aUIscUJBQUwsR0FBMkJ2UyxNQUFNLENBQUMsUUFBTTdLLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CLEtBQUsrYyxhQUF6QixDQUFQLENBQU4sRUFBaEcsRUFBd0osS0FBS0csVUFBTCxFQUF4SjtBQUEwSyxLQUExMko7QUFBMjJKUCxxQkFBaUIsRUFBQywyQkFBU3ZpQixDQUFULEVBQVc7QUFBQyxXQUFLOGhCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixDQUFDLENBQWhELEVBQWtELEtBQUtDLHFCQUFMLEdBQTJCLENBQUMsQ0FBOUUsRUFBZ0YsS0FBS2IsVUFBTCxFQUFoRjtBQUFrRyxLQUEzK0o7QUFBNCtKM1UsUUFBSSxFQUFDLGNBQVNwTixDQUFULEVBQVc7QUFBQyxVQUFHLEtBQUtzVixRQUFSLEVBQWlCLE9BQU8sS0FBS3lNLFVBQUwsSUFBa0IsTUFBSyxlQUFhOWUsQ0FBQyxDQUFDcUcsSUFBRixDQUFPdEosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQTlCLENBQXpCO0FBQTJELFdBQUtzVixRQUFMLEdBQWMsQ0FBQyxDQUFmLEVBQWlCLEtBQUt5TSxVQUFMLEVBQWpCLEVBQW1DMVIsTUFBTSxDQUFDeFcsT0FBUCxDQUFlb1csUUFBZixDQUF3QixzQkFBeEIsRUFBZ0RNLFdBQWhELENBQTRELHFCQUE1RCxDQUFuQyxFQUFzSCxlQUFhdE4sQ0FBQyxDQUFDcUcsSUFBRixDQUFPdEosQ0FBUCxDQUFiLElBQXdCQSxDQUFDLEVBQS9JO0FBQWtKLEtBQTN0SztBQUE0dEtxTixRQUFJLEVBQUMsY0FBU3JOLENBQVQsRUFBVztBQUFDLFdBQUtzVixRQUFMLEtBQWdCLEtBQUtBLFFBQUwsR0FBYyxDQUFDLENBQWYsRUFBaUJqRixNQUFNLENBQUN4VyxPQUFQLENBQWUwVyxXQUFmLENBQTJCLHNCQUEzQixFQUFtRE4sUUFBbkQsQ0FBNEQscUJBQTVELENBQWpDLEdBQXFILGVBQWFoTixDQUFDLENBQUNxRyxJQUFGLENBQU90SixDQUFQLENBQWIsSUFBd0JBLENBQUMsRUFBOUk7QUFBaUosS0FBOTNLO0FBQSszSzhpQixjQUFVLEVBQUMsc0JBQVU7QUFBQ3BiLGFBQU8sQ0FBQ21CLFdBQVIsSUFBcUJ3SCxNQUFNLENBQUNjLE1BQVAsQ0FBY3pGLEtBQWQsQ0FBb0IsV0FBcEIsQ0FBckI7QUFBc0QsS0FBMzhLO0FBQTQ4S3FXLGNBQVUsRUFBQyxzQkFBVTtBQUFDcmEsYUFBTyxDQUFDbUIsV0FBUixLQUFzQixLQUFLaWEsVUFBTCxJQUFrQnpTLE1BQU0sQ0FBQ2MsTUFBUCxDQUFjMUYsR0FBZCxDQUFrQixXQUFsQixFQUE4QnhJLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxZQUFVO0FBQUMsYUFBSytDLElBQUw7QUFBWSxPQUEvQixFQUFnQyxJQUFoQyxDQUE5QixFQUFvRWdELE1BQU0sQ0FBQ0QsSUFBUCxHQUFZQyxNQUFNLENBQUNELElBQVAsQ0FBWW5HLE9BQVosQ0FBb0J5RSxPQUFoQyxHQUF3QyxDQUE1RyxDQUF4QztBQUF3SjtBQUExbkwsR0FBOWlNLEVBQTBxWCtDLEVBQUUsQ0FBQ3lSLE9BQUgsR0FBVztBQUFDamEsY0FBVSxFQUFDLHNCQUFVO0FBQUMsV0FBSzhHLEtBQUwsSUFBYSxLQUFLa1IsV0FBTCxHQUFpQixDQUFDLENBQS9CO0FBQWlDLEtBQXhEO0FBQXlEbFIsU0FBSyxFQUFDLGlCQUFVO0FBQUNNLFlBQU0sQ0FBQ2UsSUFBUCxDQUFZalYsTUFBWixDQUFtQixLQUFLcWhCLFNBQUwsR0FBZXZhLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsbURBQXBCLEVBQXlFOVQsTUFBekUsQ0FBZ0Y4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGdCQUFwQixFQUFzQzlULE1BQXRDLENBQTZDOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiwyQkFBcEIsQ0FBN0MsRUFBK0Y5VCxNQUEvRixDQUFzRzhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IscUJBQXBCLENBQXRHLENBQWhGLENBQWxDLEVBQXNROVQsTUFBdFEsQ0FBNlEsS0FBS3loQixLQUFMLEdBQVczYSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLDJDQUFwQixFQUFpRTlULE1BQWpFLENBQXdFOEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQixnQkFBcEIsRUFBc0M5VCxNQUF0QyxDQUE2QzhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IsMkJBQXBCLENBQTdDLEVBQStGOVQsTUFBL0YsQ0FBc0c4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLHFCQUFwQixDQUF0RyxDQUF4RSxDQUF4UixFQUFvZjlULE1BQXBmLENBQTJmLEtBQUsra0IsTUFBTCxHQUFZamUsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ04sUUFBWCxDQUFvQiwyQkFBcEIsRUFBaUQ5VCxNQUFqRCxDQUF3RDhHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dOLFFBQVgsQ0FBb0IscUJBQXBCLENBQXhELEVBQW9HOVQsTUFBcEcsQ0FBMkc4RyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnTixRQUFYLENBQW9CLGVBQXBCLENBQTNHLENBQXZnQixHQUF5cEJ2TSxPQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLElBQVksQ0FBeEIsSUFBMkIsS0FBS21aLFNBQUwsQ0FBZW5sQixHQUFmLENBQW1CLEtBQUt1bEIsS0FBeEIsRUFBK0J2bEIsR0FBL0IsQ0FBbUMsS0FBSzZvQixNQUF4QyxFQUFnRDdULElBQWhELEVBQXByQixFQUEydUIsS0FBSzZULE1BQUwsQ0FBWW5iLEVBQVosQ0FBZSxPQUFmLEVBQXVCOUMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDeEYsY0FBRixJQUFtQjZWLE1BQU0sQ0FBQ2hELElBQVAsRUFBbkI7QUFBaUMsT0FBckQsRUFBc0QsSUFBdEQsQ0FBdkIsQ0FBM3VCLEVBQSt6QixLQUFLbVEsU0FBTCxDQUFlelgsRUFBZixDQUFrQixPQUFsQixFQUEwQjlDLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxVQUFTdEssQ0FBVCxFQUFXO0FBQUNxUSxjQUFNLENBQUM2RCxRQUFQLElBQWtCLEtBQUtpTixZQUFMLENBQWtCbmhCLENBQWxCLENBQWxCO0FBQXVDLE9BQTNELEVBQTRELElBQTVELENBQTFCLENBQS96QixFQUE0NUIsS0FBSzRkLEtBQUwsQ0FBVzdYLEVBQVgsQ0FBYyxPQUFkLEVBQXNCOUMsQ0FBQyxDQUFDcUgsS0FBRixDQUFRLFVBQVN0SyxDQUFULEVBQVc7QUFBQ3FRLGNBQU0sQ0FBQ2dFLElBQVAsSUFBYyxLQUFLOE0sWUFBTCxDQUFrQm5oQixDQUFsQixDQUFkO0FBQW1DLE9BQXZELEVBQXdELElBQXhELENBQXRCLENBQTU1QjtBQUFpL0IsS0FBM2pDO0FBQTRqQ3dVLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFdBQUtyVSxJQUFMO0FBQVksS0FBMWxDO0FBQTJsQ2tULFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUsrTixNQUFMO0FBQWMsS0FBNW5DO0FBQTZuQ3BOLFNBQUssRUFBQyxpQkFBVTtBQUFDM0QsWUFBTSxDQUFDYyxNQUFQLENBQWN6RixLQUFkLENBQW9CLFlBQXBCLEdBQWtDLEtBQUsyVixFQUFMLEdBQVEsQ0FBQyxDQUEzQyxFQUE2QyxLQUFLQyxFQUFMLEdBQVEsQ0FBQyxDQUF0RCxFQUF3RCxLQUFLTCxXQUFMLEdBQWlCLENBQUMsQ0FBMUUsRUFBNEUsS0FBS08sYUFBTCxFQUE1RTtBQUFpRyxLQUEvdUM7QUFBZ3ZDcmhCLFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUtzaEIsaUJBQUwsS0FBeUIsS0FBS0wsTUFBTCxJQUFjL1EsTUFBTSxDQUFDeFcsT0FBUCxDQUFla00sRUFBZixDQUFrQixTQUFsQixFQUE0QixhQUE1QixFQUEwQyxLQUFLMGIsaUJBQUwsR0FBdUJ4ZSxDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS29YLFVBQWIsRUFBd0IsSUFBeEIsQ0FBakUsQ0FBZCxFQUE4R3JSLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZWtNLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMEIsdURBQTFCLEVBQWtGLEtBQUtpZCw0QkFBTCxHQUFrQy9mLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLMlkscUJBQWIsRUFBbUMsSUFBbkMsQ0FBcEgsQ0FBOUcsRUFBNFF2YixPQUFPLENBQUNtQixXQUFSLEtBQXNCd0gsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjdEwsRUFBZCxDQUFpQixXQUFqQixFQUE2QixhQUE3QixFQUEyQyxLQUFLaWMsbUJBQUwsR0FBeUIvZSxDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSzZXLFlBQWIsRUFBMEIsSUFBMUIsQ0FBcEUsRUFBcUdwYixFQUFyRyxDQUF3RyxZQUF4RyxFQUFxSCxhQUFySCxFQUFtSSxLQUFLa2Msb0JBQUwsR0FBMEJoZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS2tYLGFBQWIsRUFBMkIsSUFBM0IsQ0FBN0osRUFBK0x6YixFQUEvTCxDQUFrTSxZQUFsTSxFQUErTSxhQUEvTSxFQUE2TixLQUFLbWMsb0JBQUwsR0FBMEJqZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSzZYLGFBQWIsRUFBMkIsSUFBM0IsQ0FBdlAsR0FBeVI5UixNQUFNLENBQUN4VyxPQUFQLENBQWVrTSxFQUFmLENBQWtCLFlBQWxCLEVBQStCLFVBQS9CLEVBQTBDLEtBQUtxYyx3QkFBTCxHQUE4Qm5mLENBQUMsQ0FBQ3FILEtBQUYsQ0FBUSxLQUFLK1gsaUJBQWIsRUFBK0IsSUFBL0IsQ0FBeEUsRUFBOEd0YyxFQUE5RyxDQUFpSCxZQUFqSCxFQUE4SCxVQUE5SCxFQUF5SSxLQUFLdWMsd0JBQUwsR0FBOEJyZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBS2lZLGlCQUFiLEVBQStCLElBQS9CLENBQXZLLENBQXpSLEVBQXNldGYsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVVvTCxFQUFWLENBQWEsUUFBYixFQUFzQixLQUFLeWMsZ0JBQUwsR0FBc0J2ZixDQUFDLENBQUNxSCxLQUFGLENBQVEsS0FBSzZILFNBQWIsRUFBdUIsSUFBdkIsQ0FBNUMsQ0FBNWYsQ0FBclM7QUFBNjJCLEtBQTdtRTtBQUE4bUVpUCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxXQUFLSyxpQkFBTCxLQUF5QnBSLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZXFZLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsYUFBN0IsRUFBMkMsS0FBS3VQLGlCQUFoRCxHQUFtRSxLQUFLQSxpQkFBTCxHQUF1QixJQUExRixFQUErRnBSLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZXFZLEdBQWYsQ0FBbUIsT0FBbkIsRUFBMkIsdURBQTNCLEVBQW1GLEtBQUs4USw0QkFBeEYsQ0FBL0YsRUFBcU4sS0FBS2hCLG1CQUFMLEtBQTJCM1IsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjYSxHQUFkLENBQWtCLFdBQWxCLEVBQThCLGFBQTlCLEVBQTRDLEtBQUs4UCxtQkFBakQsRUFBc0U5UCxHQUF0RSxDQUEwRSxZQUExRSxFQUF1RixhQUF2RixFQUFxRyxLQUFLK1Asb0JBQTFHLEVBQWdJL1AsR0FBaEksQ0FBb0ksWUFBcEksRUFBaUosYUFBakosRUFBK0osS0FBS2dRLG9CQUFwSyxHQUEwTDdSLE1BQU0sQ0FBQ3hXLE9BQVAsQ0FBZXFZLEdBQWYsQ0FBbUIsWUFBbkIsRUFBZ0MsVUFBaEMsRUFBMkMsS0FBS2tRLHdCQUFoRCxFQUEwRWxRLEdBQTFFLENBQThFLFlBQTlFLEVBQTJGLFVBQTNGLEVBQXNHLEtBQUtvUSx3QkFBM0csQ0FBMUwsRUFBK1RyZixDQUFDLENBQUN0SSxNQUFELENBQUQsQ0FBVXVYLEdBQVYsQ0FBYyxRQUFkLEVBQXVCLEtBQUtzUSxnQkFBNUIsQ0FBL1QsRUFBNlcsS0FBS1IsbUJBQUwsR0FBeUIsSUFBamEsQ0FBOU87QUFBc3BCLEtBQXR4RjtBQUF1eEZ2UCxrQkFBYyxFQUFDLHdCQUFTelMsQ0FBVCxFQUFXNUYsQ0FBWCxFQUFhO0FBQUMsVUFBSTRLLENBQUMsR0FBQ2tMLEtBQUssQ0FBQ0MsSUFBWjs7QUFBaUIsVUFBR25MLENBQUgsRUFBSztBQUFDLFlBQUl5QixDQUFDLEdBQUMsS0FBSytXLFNBQUwsQ0FBZW5sQixHQUFmLENBQW1CLEtBQUt1bEIsS0FBeEIsQ0FBTjs7QUFBcUMsYUFBS0osU0FBTCxDQUFlLENBQUNuTixNQUFNLENBQUM0RCxXQUFQLEtBQXFCLFFBQXJCLEdBQThCLEtBQS9CLElBQXNDLE9BQXJELEVBQThELGtCQUE5RCxHQUFrRixLQUFLMkosS0FBTCxDQUFXLENBQUN2TixNQUFNLENBQUMrRCxPQUFQLEtBQWlCLFFBQWpCLEdBQTBCLEtBQTNCLElBQWtDLE9BQTdDLEVBQXNELGtCQUF0RCxDQUFsRixFQUE0SjNOLENBQUMsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDb1EsTUFBRixHQUFTLENBQVQsR0FBVyxLQUFYLEdBQWlCLFFBQWxCLElBQTRCLE9BQTdCLENBQUQsQ0FBdUMsZ0JBQXZDLENBQTVKLEVBQXFOcFYsQ0FBQyxJQUFFQSxDQUFDLEVBQXpOO0FBQTROLE9BQXZRLE1BQTRRQSxDQUFDLElBQUVBLENBQUMsRUFBSjtBQUFPLEtBQXhsRztBQUF5bEdtUyxhQUFTLEVBQUMscUJBQVU7QUFBQyxXQUFLOE8sV0FBTCxHQUFpQmhlLENBQUMsQ0FBQ3RJLE1BQUQsQ0FBRCxDQUFVOG5CLFVBQVYsRUFBakI7QUFBd0MsS0FBdHBHO0FBQXVwR1EseUJBQXFCLEVBQUMsK0JBQVNqakIsQ0FBVCxFQUFXO0FBQUMsVUFBSTVGLENBQUMsR0FBQzhWLEtBQUssQ0FBQ0MsSUFBWjtBQUFpQi9WLE9BQUMsSUFBRUEsQ0FBQyxDQUFDZ1csSUFBRixDQUFPbkcsT0FBUCxDQUFlbk4sT0FBbEIsSUFBMkIsQ0FBQzFDLENBQUMsQ0FBQ2dXLElBQUYsQ0FBT25HLE9BQVAsQ0FBZW5OLE9BQWYsQ0FBdUJxUixLQUFuRCxJQUEwRGxMLENBQUMsQ0FBQ2pELENBQUMsQ0FBQ3ZELE1BQUgsQ0FBRCxDQUFZdWMsRUFBWixDQUFlLHVEQUFmLE1BQTBFaFosQ0FBQyxDQUFDeEYsY0FBRixJQUFtQndGLENBQUMsQ0FBQ29HLGVBQUYsRUFBbkIsRUFBdUNpSyxNQUFNLENBQUNoRCxJQUFQLEVBQWpILENBQTFEO0FBQTBMLEtBQXA0RztBQUFxNEc4VCxnQkFBWSxFQUFDLHNCQUFTbmhCLENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQzBILE9BQU8sQ0FBQ21CLFdBQVosRUFBd0I7QUFBQyxZQUFJek8sQ0FBQyxHQUFDLEtBQUtzb0IsYUFBTCxDQUFtQjFpQixDQUFuQixDQUFOO0FBQUEsWUFBNEJnRixDQUFDLEdBQUNRLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CeEwsQ0FBcEIsQ0FBOUI7QUFBQSxZQUFxRHFNLENBQUMsR0FBQyxDQUFDLENBQUNyTSxDQUFGLElBQUtpVyxNQUFNLENBQUMsUUFBTXJMLENBQVAsQ0FBTixFQUE1RDs7QUFBOEUsWUFBRyxDQUFDLE1BQUlrTCxLQUFLLENBQUNjLEtBQU4sQ0FBWXRVLE1BQWhCLElBQXdCd1QsS0FBSyxDQUFDQyxJQUFOLElBQVksWUFBVUQsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JuRyxPQUFoQixDQUF3QmdFLE9BQXZFLE1BQWtGN1QsQ0FBQyxHQUFDLENBQUMsQ0FBckYsR0FBd0ZBLENBQUMsS0FBRyxLQUFLdW9CLGFBQVQsSUFBd0JsYyxDQUFDLEtBQUcsS0FBS21jLHFCQUE1SCxFQUFrSixJQUFHLEtBQUtELGFBQUwsR0FBbUJ2b0IsQ0FBbkIsRUFBcUIsS0FBS3dvQixxQkFBTCxHQUEyQm5jLENBQWhELEVBQWtEck0sQ0FBckQsRUFBdUQsUUFBT2lXLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZLENBQUMzSyxDQUFDLEdBQUMsS0FBRCxHQUFPLFFBQVQsSUFBbUIsT0FBL0IsRUFBd0MsdUJBQXhDLEdBQWlFck0sQ0FBeEU7QUFBMkUsZUFBSSxVQUFKO0FBQWVpVyxrQkFBTSxDQUFDZSxJQUFQLENBQVluQixRQUFaLENBQXFCLHNCQUFyQixFQUE2Q00sV0FBN0MsQ0FBeUQsa0JBQXpEOztBQUE2RTs7QUFBTSxlQUFJLE1BQUo7QUFBV0Ysa0JBQU0sQ0FBQ2UsSUFBUCxDQUFZbkIsUUFBWixDQUFxQixrQkFBckIsRUFBeUNNLFdBQXpDLENBQXFELHNCQUFyRDs7QUFBeEwsU0FBdkQsTUFBaVVGLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZYixXQUFaLENBQXdCLDZEQUF4QjtBQUF1RjtBQUFDLEtBQWhqSTtBQUFpaklpUixpQkFBYSxFQUFDLHVCQUFTeGhCLENBQVQsRUFBVztBQUFDcVEsWUFBTSxDQUFDZSxJQUFQLENBQVliLFdBQVosQ0FBd0IsNkRBQXhCLEdBQXVGLEtBQUtvUyxhQUFMLEdBQW1CLENBQUMsQ0FBM0c7QUFBNkcsS0FBeHJJO0FBQXlySWpCLGNBQVUsRUFBQyxvQkFBUzFoQixDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUUsSUFBRUEsQ0FBQyxDQUFDNmlCLEtBQU4sS0FBYzVmLENBQUMsQ0FBQ2pELENBQUMsQ0FBQ3ZELE1BQUgsQ0FBRCxDQUFZdWMsRUFBWixDQUFldkgsRUFBRSxDQUFDcVAseUJBQWxCLENBQWpCLEVBQThELElBQUcsTUFBSTVRLEtBQUssQ0FBQ2MsS0FBTixDQUFZdFUsTUFBaEIsSUFBd0J3VCxLQUFLLENBQUNDLElBQU4sSUFBWSxZQUFVRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxDQUFnQm5HLE9BQWhCLENBQXdCZ0UsT0FBekUsRUFBaUZvQyxNQUFNLENBQUNoRCxJQUFQLEdBQWpGLEtBQW1HO0FBQUMsWUFBSWpULENBQUMsR0FBQyxLQUFLc29CLGFBQUwsQ0FBbUIxaUIsQ0FBbkIsQ0FBTjs7QUFBNEJxUSxjQUFNLENBQUNqVyxDQUFELENBQU4sSUFBWSxLQUFLK21CLFlBQUwsQ0FBa0JuaEIsQ0FBbEIsQ0FBWjtBQUFpQztBQUFDLEtBQWg3STtBQUFpN0ltaUIsaUJBQWEsRUFBQyx1QkFBU25pQixDQUFULEVBQVc7QUFBQyxXQUFLbWhCLFlBQUwsQ0FBa0JuaEIsQ0FBbEI7QUFBcUIsS0FBaCtJO0FBQWkrSTBpQixpQkFBYSxFQUFDLHVCQUFTMWlCLENBQVQsRUFBVztBQUFDLE9BQUMsQ0FBRCxHQUFHLEtBQUtpaEIsV0FBUixHQUFvQixLQUFLQSxXQUF6QixHQUFxQyxLQUFLQSxXQUFMLEdBQWlCaGUsQ0FBQyxDQUFDdEksTUFBRCxDQUFELENBQVU4bkIsVUFBVixFQUF0RDtBQUE2RSxhQUFPemlCLENBQUMsQ0FBQzBhLEtBQUYsR0FBUXJLLE1BQU0sQ0FBQzRDLFlBQVAsQ0FBb0JyRixJQUE1QixHQUFpQyxLQUFLcVQsV0FBdEMsR0FBa0QsS0FBRzVRLE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JyUCxLQUEzRSxHQUFpRixVQUFqRixHQUE0RixNQUFuRztBQUEwRyxLQUFscko7QUFBbXJKMkosUUFBSSxFQUFDLGdCQUFVO0FBQUMxSixhQUFPLENBQUNXLEVBQVIsSUFBWVgsT0FBTyxDQUFDVyxFQUFSLElBQVksQ0FBeEIsSUFBMkIsS0FBS21aLFNBQUwsQ0FBZW5sQixHQUFmLENBQW1CLEtBQUt1bEIsS0FBeEIsRUFBK0J2bEIsR0FBL0IsQ0FBbUMsS0FBSzZvQixNQUF4QyxFQUFnRDlULElBQWhELEVBQTNCO0FBQWtGLEtBQXJ4SjtBQUFzeEpDLFFBQUksRUFBQyxnQkFBVSxDQUFFLENBQXZ5SjtBQUF3eUpnVixxQkFBaUIsRUFBQywyQkFBU3JpQixDQUFULEVBQVc7QUFBQyxXQUFLOGhCLG1CQUFMLEdBQXlCLENBQUMsQ0FBMUIsRUFBNEIsS0FBS2EsYUFBTCxHQUFtQixLQUFLRCxhQUFMLENBQW1CMWlCLENBQW5CLENBQS9DLEVBQXFFLEtBQUs0aUIscUJBQUwsR0FBMkJ2UyxNQUFNLENBQUMsUUFBTTdLLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CLEtBQUsrYyxhQUF6QixDQUFQLENBQU4sRUFBaEc7QUFBd0osS0FBOTlKO0FBQSs5SkoscUJBQWlCLEVBQUMsMkJBQVN2aUIsQ0FBVCxFQUFXO0FBQUMsV0FBSzhoQixtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLEtBQUthLGFBQUwsR0FBbUIsQ0FBQyxDQUFoRCxFQUFrRCxLQUFLQyxxQkFBTCxHQUEyQixDQUFDLENBQTlFO0FBQWdGLEtBQTdrSztBQUE4a0tFLGNBQVUsRUFBQyxzQkFBVSxDQUFFO0FBQXJtSyxHQUFyclgsRUFBNHhoQjdmLENBQUMsQ0FBQ3pHLFFBQUQsQ0FBRCxDQUFZMmpCLEtBQVosQ0FBa0IsVUFBU25nQixDQUFULEVBQVc7QUFBQ2djLFdBQU8sQ0FBQy9TLFVBQVI7QUFBcUIsR0FBbkQsQ0FBNXhoQixFQUFpMWhCL0YsTUFBeDFoQjtBQUErMWhCLENBQWx4d0UsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBQ0E7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7O0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBU2lnQixtQkFBVCxHQUErQjtBQUM3QixRQUFNQyxZQUFZLEdBQUc1bUIsUUFBUSxDQUFDa0csY0FBVCxDQUF3QixpQkFBeEIsRUFBMkMyZ0IsWUFBaEU7QUFDQSxRQUFNQyxhQUFhLEdBQUczb0IsTUFBTSxDQUFDdUosV0FBUCxHQUFxQjFILFFBQVEsQ0FBQ2tHLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDMmdCLFlBQWhFLEdBQStFRCxZQUFyRztBQUNBNW1CLFVBQVEsQ0FBQ2tHLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEM0IsS0FBaEQsQ0FBc0RrRCxNQUF0RCxHQUErRHFmLGFBQWEsR0FBRyxJQUEvRTtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QkMsUUFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQkMsUUFBdEIsQ0FBK0I7QUFDN0I5aUIsVUFBTSxFQUFFO0FBRHFCLEdBQS9CO0FBSUE2aUIsUUFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQnpkLEVBQXRCLENBQXlCLG1CQUF6QixFQUE4QyxVQUFTM0wsQ0FBVCxFQUFXO0FBQ3ZEMkksaUJBQWE7QUFDZCxHQUZEO0FBSUF5Z0IsUUFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQnpkLEVBQXRCLENBQXlCLG9CQUF6QixFQUErQyxVQUFTM0wsQ0FBVCxFQUFXO0FBQ3hEMkksaUJBQWE7QUFDZCxHQUZEO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzJnQixpQkFBVCxHQUE2QjtBQUMzQjtBQUNBemdCLEdBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDOEMsRUFBeEMsQ0FBMkMsWUFBM0MsRUFBeUQsWUFBVztBQUNsRSxRQUFJLENBQUM5QyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmdXLFFBQTdCLENBQXNDLE1BQXRDLENBQUQsSUFBa0RoVyxDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosS0FBc0IsSUFBNUUsRUFBa0Y7QUFDaEZSLE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJ2QyxPQUFqQixDQUF5QixPQUF6QjtBQUNEO0FBQ0YsR0FKRCxFQUlHcUYsRUFKSCxDQUlNLFlBSk4sRUFJb0IsWUFBVztBQUM3QixRQUFJOUMsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJnVyxRQUE3QixDQUFzQyxNQUF0QyxLQUFpRGhXLENBQUMsQ0FBQ3pHLFFBQUQsQ0FBRCxDQUFZaUgsS0FBWixLQUFzQixJQUEzRSxFQUFpRjtBQUMvRVIsT0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnZDLE9BQWpCLENBQXlCLE9BQXpCO0FBQ0Q7QUFDRixHQVJEO0FBVUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUV1QyxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjhDLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsUUFBSTlDLENBQUMsQ0FBQ3pHLFFBQUQsQ0FBRCxDQUFZaUgsS0FBWixLQUFzQixJQUExQixFQUFnQztBQUM5QixVQUFJUixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmdXLFFBQXZCLENBQWdDLE1BQWhDLENBQUosRUFBNkM7QUFDM0MwSyx1QkFBZTtBQUNoQixPQUZELE1BRU87QUFDTEMsc0JBQWM7QUFDZjtBQUNGO0FBQ0YsR0FSRCxFQXBCMkIsQ0E4QjNCOztBQUNBM2dCLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCOEMsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBUzNMLENBQVQsRUFBVztBQUMxQ3VwQixtQkFBZTtBQUNoQixHQUZEO0FBSUExZ0IsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjhDLEVBQWpCLENBQW9CLFlBQXBCLEVBQWtDLFVBQVNuSSxLQUFULEVBQWdCO0FBQ2hELFFBQUlxRixDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUIsVUFBSVIsQ0FBQyxDQUFDLGtCQUFnQkEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNUgsSUFBUixDQUFhLE9BQWIsQ0FBaEIsR0FBc0MsTUFBdkMsQ0FBRCxDQUFnRHFCLE1BQWhELEdBQXlELENBQTdELEVBQWdFO0FBQzlEdUcsU0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLElBQWxCO0FBQ0FwSyxTQUFDLENBQUMsa0JBQWdCQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE1SCxJQUFSLENBQWEsT0FBYixDQUFqQixDQUFELENBQXlDK1IsSUFBekM7QUFDRDtBQUNGO0FBQ0YsR0FQRDtBQVNBbkssR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI4QyxFQUF2QixDQUEwQixPQUExQixFQUFtQyxVQUFTM0wsQ0FBVCxFQUFZO0FBQzdDQSxLQUFDLENBQUNnTSxlQUFGO0FBQ0QsR0FGRDtBQUlBbkQsR0FBQyxDQUFDLG1EQUFELENBQUQsQ0FBdUQ4QyxFQUF2RCxDQUEwRCxPQUExRCxFQUFtRSxVQUFTM0wsQ0FBVCxFQUFZO0FBQzdFeXBCLHFCQUFpQixDQUFDNWdCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTVILElBQVIsQ0FBYSxXQUFiLENBQUQsQ0FBakI7QUFDRCxHQUZEO0FBSUE0SCxHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjhDLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFVBQVMzTCxDQUFULEVBQVk7QUFDNUN3cEIsa0JBQWM7QUFDZEMscUJBQWlCLENBQUM1Z0IsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNUgsSUFBZixDQUFvQixXQUFwQixDQUFELENBQWpCO0FBQ0QsR0FIRDtBQUtBNEgsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkI4QyxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxVQUFTM0wsQ0FBVCxFQUFZO0FBQ2pEQSxLQUFDLENBQUNJLGNBQUY7QUFDQUosS0FBQyxDQUFDZ00sZUFBRjtBQUNBbkQsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9LLElBQW5CO0FBQ0FwSyxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCbUssSUFBakI7QUFFQW5LLEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCb0ssSUFBM0I7QUFDQXBLLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCbUssSUFBNUI7QUFDRCxHQVJEO0FBVUFuSyxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjhDLEVBQXhCLENBQTJCLGtCQUEzQixFQUErQyxZQUFXO0FBQ3hENGQsbUJBQWU7QUFDaEIsR0FGRDtBQUdEOztBQUVELFNBQVNHLG1CQUFULEdBQStCO0FBQzdCN2dCLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCOEMsRUFBNUIsQ0FBK0Isa0JBQS9CLEVBQW1ELFVBQVMzTCxDQUFULEVBQVk7QUFDN0QsUUFBSTZJLENBQUMsQ0FBQ3pHLFFBQUQsQ0FBRCxDQUFZaUgsS0FBWixNQUF1QixJQUEzQixFQUFpQztBQUMvQixZQUFNc2dCLGlCQUFpQixHQUFHOWdCLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCd1UsV0FBdEIsS0FBc0N4VSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLE1BQXBCLEVBQWhFO0FBQ0EsWUFBTStmLHNCQUFzQixHQUFHL2dCLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0IsTUFBcEIsS0FBK0JoQixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlnQixNQUFaLEVBQS9CLEdBQXNEaEIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQndVLFdBQWxCLEVBQXJGO0FBQ0F4VSxPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmdGLEdBQTFCLENBQThCLEtBQTlCLEVBQXFDOGIsaUJBQWlCLEdBQUcsSUFBekQ7QUFDQTlnQixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdGLEdBQXRCLENBQTBCLFFBQTFCLEVBQW9DK2Isc0JBQXNCLEdBQUcsSUFBN0Q7QUFFQS9nQixPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmdOLFFBQTFCLENBQW1DLE1BQW5DO0FBQ0FoTixPQUFDLENBQUMsTUFBRCxDQUFELENBQVVnTixRQUFWLENBQW1CLGtCQUFuQjtBQUNEO0FBQ0YsR0FWRDtBQVlBaE4sR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI4QyxFQUE1QixDQUErQixvQkFBL0IsRUFBcUQsVUFBUzNMLENBQVQsRUFBWTtBQUMvRCxRQUFJNkksQ0FBQyxDQUFDekcsUUFBRCxDQUFELENBQVlpSCxLQUFaLE1BQXVCLElBQTNCLEVBQWlDO0FBQy9CUixPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnNOLFdBQTFCLENBQXNDLE1BQXRDO0FBQ0F0TixPQUFDLENBQUMsTUFBRCxDQUFELENBQVVzTixXQUFWLENBQXNCLGtCQUF0QjtBQUNEO0FBQ0YsR0FMRDtBQU1EOztBQUVELFNBQVMwVCxVQUFULENBQW9CcHFCLE9BQXBCLEVBQTZCO0FBQzNCLE1BQUlvSixDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJrZ0IsbUJBQWU7QUFDZjFnQixLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdGLEdBQXRCLENBQTBCLFFBQTFCLEVBQW9DLEVBQXBDO0FBQ0FoRixLQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnNOLFdBQXJCLENBQWlDLE1BQWpDO0FBQ0F0TixLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnNOLFdBQTFCLENBQXNDLE1BQXRDO0FBQ0QsR0FMRCxNQUtPO0FBQ0wsVUFBTTJULFlBQVksR0FBR2poQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdCLE1BQXRCLEtBQWlDaEIsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixFQUF0RDtBQUNBLFVBQU04ZixpQkFBaUIsR0FBRzlnQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQndVLFdBQXRCLEtBQXNDeFUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JnQixNQUFwQixFQUFoRTtBQUNBLFVBQU0rZixzQkFBc0IsR0FBRy9nQixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLE1BQXBCLEtBQStCaEIsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZ0IsTUFBWixFQUEvQixHQUFzRGhCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J3VSxXQUFsQixFQUFyRjtBQUNBeFUsS0FBQyxDQUFDcEosT0FBRCxDQUFELENBQVdvTyxHQUFYLENBQWUsS0FBZixFQUFzQmljLFlBQVksR0FBRyxJQUFyQztBQUNBamhCLEtBQUMsQ0FBQ3BKLE9BQUQsQ0FBRCxDQUFXb08sR0FBWCxDQUFlLFFBQWYsRUFBeUIsaUJBQWlCaWMsWUFBakIsR0FBZ0MsS0FBekQ7QUFDQWpoQixLQUFDLENBQUNwSixPQUFPLEdBQUcsbUJBQVgsQ0FBRCxDQUFpQ29PLEdBQWpDLENBQXFDLFFBQXJDLEVBQStDaWMsWUFBWSxHQUFHLElBQTlEO0FBQ0FqaEIsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJnRixHQUFyQixDQUF5QixLQUF6QixFQUFnQzhiLGlCQUFpQixHQUFHLElBQXBEO0FBQ0E5Z0IsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JnRixHQUF0QixDQUEwQixRQUExQixFQUFvQytiLHNCQUFzQixHQUFHLElBQTdEO0FBQ0Q7QUFDRjs7QUFHRCxTQUFTSixjQUFULEdBQTBCO0FBQ3hCLE1BQUlPLFlBQVksR0FBR2xoQixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCZ1QsSUFBakIsQ0FBc0IsY0FBdEIsQ0FBbkI7QUFDQWdPLFlBQVUsQ0FBQ0UsWUFBRCxDQUFWO0FBRUFsaEIsR0FBQyxDQUFDa2hCLFlBQUQsQ0FBRCxDQUFnQmxVLFFBQWhCLENBQXlCLE1BQXpCO0FBQ0FoTixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnNOLFdBQXJCLENBQWlDLE1BQWpDO0FBQ0F0TixHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmdOLFFBQTNCLENBQW9DLE1BQXBDO0FBRUFoTixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVnTixRQUFWLENBQW1CLGtCQUFuQjtBQUNBaE4sR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJnTixRQUFyQixDQUE4QixNQUE5QjtBQUVBaE4sR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQm1LLElBQWpCO0FBQ0FuSyxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0ssSUFBbkI7QUFDQXBLLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvSyxJQUFuQjtBQUVBcEssR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJtSyxJQUE1QjtBQUNBbkssR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJvSyxJQUEzQjtBQUNEOztBQUVELFNBQVNzVyxlQUFULEdBQTJCO0FBQ3pCLE1BQUlRLFlBQVksR0FBR2xoQixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCZ1QsSUFBakIsQ0FBc0IsY0FBdEIsQ0FBbkI7QUFFQWhULEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCc04sV0FBckIsQ0FBaUMsTUFBakM7QUFDQXROLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCc04sV0FBdkIsQ0FBbUMsTUFBbkM7QUFDQXROLEdBQUMsQ0FBQ2toQixZQUFELENBQUQsQ0FBZ0I1VCxXQUFoQixDQUE0QixNQUE1QjtBQUNBdE4sR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc04sV0FBVixDQUFzQixrQkFBdEI7QUFFQXROLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCc04sV0FBM0IsQ0FBdUMsTUFBdkM7QUFDQXROLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCZ04sUUFBckIsQ0FBOEIsTUFBOUI7QUFFQWhOLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXNOLFdBQVYsQ0FBc0Isa0JBQXRCO0FBQ0F0TixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnNOLFdBQXJCLENBQWlDLE1BQWpDO0FBRUF0TixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCbUssSUFBakI7QUFDQW5LLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvSyxJQUFuQjtBQUNBcEssR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm9LLElBQW5CO0FBRUFwSyxHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm9LLElBQTVCO0FBQ0FwSyxHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQm9LLElBQTNCO0FBQ0Q7O0FBRUQsU0FBU3dXLGlCQUFULENBQTJCTyxTQUEzQixFQUFzQztBQUNwQyxNQUFJQSxTQUFTLEtBQUs5bUIsU0FBbEIsRUFBNkI7QUFDM0IyRixLQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0ssSUFBbkI7QUFDQXBLLEtBQUMsQ0FBQ21oQixTQUFELENBQUQsQ0FBYWhYLElBQWI7QUFFQW5LLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCb0ssSUFBNUI7QUFDQXBLLEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCZ0YsR0FBM0IsQ0FBK0IsU0FBL0IsRUFBMEMsT0FBMUM7QUFDRDtBQUNGOztBQUVELFNBQVNvYyxjQUFULEdBQTBCO0FBQ3hCLE1BQUdwaEIsQ0FBQyxDQUFDLGFBQUQsQ0FBSixFQUFxQjtBQUNuQkEsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjhDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQVMzTCxDQUFULEVBQVk7QUFDekNBLE9BQUMsQ0FBQ0ksY0FBRjtBQUNBLFlBQU04cEIsV0FBVyxHQUFHcmhCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTVILElBQVIsQ0FBYSxNQUFiLENBQXBCO0FBQ0E0SCxPQUFDLENBQUNxaEIsV0FBRCxDQUFELENBQWVDLE1BQWY7QUFDRCxLQUpEO0FBS0Q7O0FBRUQsTUFBR3RoQixDQUFDLENBQUMsaUJBQUQsQ0FBSixFQUF5QjtBQUN2QkEsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4QyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFTM0wsQ0FBVCxFQUFZO0FBQzNDQSxPQUFDLENBQUNJLGNBQUY7QUFDQXlJLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWpGLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0J1bUIsTUFBeEI7QUFDRCxLQUhEO0FBSUQ7O0FBRUQsTUFBSXRoQixDQUFDLENBQUMsc0JBQUQsQ0FBTCxFQUErQjtBQUM3QkEsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEI4QyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxVQUFTbkksS0FBVCxFQUFnQjtBQUNwREEsV0FBSyxDQUFDcEQsY0FBTjtBQUNBeUksT0FBQyxDQUFDLG1EQUFELENBQUQsQ0FBdUQ4UyxJQUF2RCxDQUE0RCxFQUE1RDtBQUNBLFlBQU0vWSxJQUFJLEdBQUdpRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFqRixPQUFSLENBQWdCLE1BQWhCLENBQWI7QUFDQWlGLE9BQUMsQ0FBQ2pHLElBQUQsQ0FBRCxDQUFRaVQsUUFBUixDQUFpQixTQUFqQjtBQUNBaE4sT0FBQyxDQUFDdWhCLElBQUYsQ0FBTztBQUNMbGIsWUFBSSxFQUFFLE1BREQ7QUFFTHhQLFdBQUcsRUFBRWtELElBQUksQ0FBQ2laLElBQUwsQ0FBVSxRQUFWLENBRkE7QUFHTDVhLFlBQUksRUFBRTJCLElBQUksQ0FBQ3luQixTQUFMLEVBSEQ7QUFJTGxhLGVBQU8sRUFBRSxpQkFBU25QLFFBQVQsRUFBbUI7QUFDMUI2SCxXQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQzlHLE1BQW5DLENBQTBDZixRQUExQztBQUNBNkgsV0FBQyxDQUFDLDREQUFELENBQUQsQ0FBZ0VnTixRQUFoRSxDQUF5RSxRQUF6RTtBQUNBaE4sV0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NzTixXQUF0QyxDQUFrRCxZQUFsRDtBQUNBdE4sV0FBQyxDQUFDakcsSUFBRCxDQUFELENBQVF1VCxXQUFSLENBQW9CLFNBQXBCO0FBQ0QsU0FUSTtBQVVMeFYsYUFBSyxFQUFFLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckJrSSxXQUFDLENBQUMsa0RBQUQsQ0FBRCxDQUFzRGdOLFFBQXRELENBQStELFlBQS9EO0FBQ0FoTixXQUFDLENBQUMsZ0RBQUQsQ0FBRCxDQUFvRHloQixJQUFwRCxDQUF5RHpoQixDQUFDLENBQUNBLENBQUMsQ0FBQzBoQixTQUFGLENBQVk1cEIsTUFBSyxDQUFDNnBCLFlBQWxCLEVBQWdDLENBQWhDLENBQUQsQ0FBRCxDQUFzQ3ZLLElBQXRDLENBQTJDLG9CQUEzQyxFQUFpRXFLLElBQWpFLEVBQXpEO0FBQ0F6aEIsV0FBQyxDQUFDakcsSUFBRCxDQUFELENBQVF1VCxXQUFSLENBQW9CLFNBQXBCO0FBQ0Q7QUFkSSxPQUFQO0FBZ0JELEtBckJEO0FBdUJBdE4sS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI4QyxFQUF6QixDQUE0QixlQUE1QixFQUE2QyxVQUFVM0wsQ0FBVixFQUFhO0FBQ3hENkksT0FBQyxDQUFDLGtEQUFELENBQUQsQ0FBc0RzTixXQUF0RCxDQUFrRSxZQUFsRTtBQUNBdE4sT0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NzTixXQUF4QyxDQUFvRCxTQUFwRDtBQUNBdE4sT0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOEM1RixHQUE5QyxDQUFrRCxFQUFsRDtBQUNBNEYsT0FBQyxDQUFDLG1EQUFELENBQUQsQ0FBdUQ4UyxJQUF2RCxDQUE0RCxFQUE1RDtBQUNELEtBTEQ7QUFNRDs7QUFFRDlTLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCOEMsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBUzNMLENBQVQsRUFBWTtBQUNsREEsS0FBQyxDQUFDSSxjQUFGO0FBQ0EsVUFBTXFxQixLQUFLLEdBQUcsY0FBZDtBQUNBLFVBQU1DLFlBQVksR0FBRzdoQixDQUFDLENBQUNBLENBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZcEIsSUFBWixDQUFpQixNQUFqQixDQUFELENBQXRCO0FBQ0EsVUFBTTBwQixpQkFBaUIsR0FBR0QsWUFBWSxDQUFDekssSUFBYixDQUFrQixPQUFsQixDQUExQjtBQUNBLFVBQU16ZCxLQUFLLEdBQUdtb0IsaUJBQWlCLENBQUMxbkIsR0FBbEIsRUFBZDtBQUNBLFVBQU0ybkIsV0FBVyxHQUFHRCxpQkFBaUIsQ0FBQy9tQixPQUFsQixDQUEwQixLQUExQixFQUFpQ3FXLElBQWpDLENBQXNDLE1BQXRDLENBQXBCOztBQUNBLFFBQUl3USxLQUFLLENBQUMvYixJQUFOLENBQVdsTSxLQUFYLENBQUosRUFBdUI7QUFDckJvb0IsaUJBQVcsQ0FBQ3pVLFdBQVosQ0FBd0IsU0FBeEI7QUFDQXdVLHVCQUFpQixDQUFDeFUsV0FBbEIsQ0FBOEIsWUFBOUI7QUFDQXVVLGtCQUFZLENBQUNQLE1BQWI7QUFDRCxLQUpELE1BSU87QUFDTFMsaUJBQVcsQ0FBQy9VLFFBQVosQ0FBcUIsU0FBckI7QUFDQThVLHVCQUFpQixDQUFDOVUsUUFBbEIsQ0FBMkIsWUFBM0I7QUFDRDtBQUNGLEdBZkQ7QUFnQkQ7O0FBRURoTixDQUFDLENBQUMsbURBQUQsQ0FBRCxDQUF1RDhDLEVBQXZELENBQTBELE9BQTFELEVBQW1FLFVBQVMzTCxDQUFULEVBQVk7QUFDN0UsUUFBTXlxQixLQUFLLEdBQUcsY0FBZDtBQUNBLFFBQU1qb0IsS0FBSyxHQUFHcUcsQ0FBQyxDQUFDN0ksQ0FBQyxDQUFDcUMsTUFBSCxDQUFELENBQVl1QixPQUFaLENBQW9CLE1BQXBCLEVBQTRCcWMsSUFBNUIsQ0FBaUMsT0FBakMsRUFBMENoZCxHQUExQyxFQUFkOztBQUNBLE1BQUl3bkIsS0FBSyxDQUFDL2IsSUFBTixDQUFXbE0sS0FBWCxLQUFxQnFHLENBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZd2MsUUFBWixDQUFxQixZQUFyQixDQUF6QixFQUE2RDtBQUMzRGhXLEtBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZdUIsT0FBWixDQUFvQixLQUFwQixFQUEyQnFXLElBQTNCLENBQWdDLE1BQWhDLEVBQXdDOUQsV0FBeEMsQ0FBb0QsU0FBcEQ7QUFDQXROLEtBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZOFQsV0FBWixDQUF3QixZQUF4QjtBQUNEO0FBQ0YsQ0FQRDtBQVNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTMFUsbUJBQVQsR0FBK0I7QUFDN0JoaUIsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI4QyxFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxVQUFTM0wsQ0FBVCxFQUFZO0FBQ3BEQSxLQUFDLENBQUNJLGNBQUY7QUFDQSxVQUFNd0MsSUFBSSxHQUFHaUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRakYsT0FBUixDQUFnQixNQUFoQixDQUFiO0FBQ0FpRixLQUFDLENBQUNqRyxJQUFELENBQUQsQ0FBUWlULFFBQVIsQ0FBaUIsU0FBakI7QUFDQWhOLEtBQUMsQ0FBQ3VoQixJQUFGLENBQU87QUFDTGxiLFVBQUksRUFBRSxNQUREO0FBRUx4UCxTQUFHLEVBQUVrRCxJQUFJLENBQUNpWixJQUFMLENBQVUsUUFBVixDQUZBO0FBR0w1YSxVQUFJLEVBQUUyQixJQUFJLENBQUN5bkIsU0FBTCxFQUhEO0FBSUxsYSxhQUFPLEVBQUUsaUJBQVNuUCxRQUFULEVBQW1CO0FBQzFCNkgsU0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkM4UyxJQUEzQyxDQUFnRDNhLFFBQWhEO0FBQ0E2SCxTQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmlpQixLQUEzQixDQUFpQyxNQUFqQyxFQUYwQixDQUcxQjs7QUFDQWppQixTQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQzVGLEdBQTNDLENBQStDLEVBQS9DLEVBQW1EOG5CLElBQW5ELENBQXlELFNBQXpELEVBQW9FLEtBQXBFO0FBQ0FsaUIsU0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0ZzTixXQUFsRixDQUE4RixZQUE5RjtBQUNBdE4sU0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NqSSxNQUF4QztBQUNBaUksU0FBQyxDQUFDakcsSUFBRCxDQUFELENBQVF1VCxXQUFSLENBQW9CLFNBQXBCO0FBQ0QsT0FaSTtBQWFMeFYsV0FBSyxFQUFFLGVBQVNBLE9BQVQsRUFBZ0I7QUFDckIsWUFBSUEsT0FBSyxDQUFDcXFCLE1BQU4sS0FBaUIsR0FBckIsRUFBMEI7QUFDeEJuaUIsV0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NqSSxNQUF4QztBQUNBLGdCQUFNcXFCLFNBQVMsR0FBR3BpQixDQUFDLENBQUNBLENBQUMsQ0FBQzBoQixTQUFGLENBQVk1cEIsT0FBSyxDQUFDNnBCLFlBQWxCLEVBQWdDLENBQWhDLENBQUQsQ0FBRCxDQUFzQ3ZLLElBQXRDLENBQTJDLE1BQTNDLEVBQW1EaUwsT0FBbkQsRUFBbEI7QUFDQUQsbUJBQVMsQ0FBQy9wQixPQUFWLENBQWtCUCxLQUFLLElBQUk7QUFDekIsZ0JBQUlBLEtBQUssQ0FBQ3dxQixTQUFOLEtBQW9CLEVBQXhCLEVBQTRCO0FBQzFCLGtCQUFJeHFCLEtBQUssQ0FBQ3lxQixTQUFOLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DdmlCLGlCQUFDLENBQUMscUJBQXFCbEksS0FBSyxDQUFDeXFCLFNBQTVCLENBQUQsQ0FDR3ZWLFFBREgsQ0FDWSxZQURaLEVBRUd3VixLQUZILENBRVMsNENBQTRDMXFCLEtBQUssQ0FBQ3dxQixTQUFsRCxHQUE4RCxTQUZ2RTtBQUdELGVBSkQsTUFJTztBQUNMdGlCLGlCQUFDLENBQUMscUJBQXFCbEksS0FBSyxDQUFDeXFCLFNBQTVCLENBQUQsQ0FDR25SLElBREgsQ0FDUSxPQURSLEVBRUdwRSxRQUZILENBRVksWUFGWjtBQUdEO0FBQ0Y7QUFDRixXQVpEO0FBYUQ7O0FBRUQsWUFBSWxWLE9BQUssQ0FBQ3FxQixNQUFOLEtBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCbmlCLFdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDOFMsSUFBakMsQ0FBc0M5UyxDQUFDLENBQUMwaEIsU0FBRixDQUFZNXBCLE9BQUssQ0FBQzZwQixZQUFsQixFQUFnQyxDQUFoQyxDQUF0QztBQUNEOztBQUVEYyxlQUFPLENBQUNDLEdBQVIsQ0FBWTVxQixPQUFaO0FBRUFrSSxTQUFDLENBQUNqRyxJQUFELENBQUQsQ0FBUXVULFdBQVIsQ0FBb0IsU0FBcEI7QUFDRDtBQXZDSSxLQUFQO0FBeUNELEdBN0NEO0FBK0NBdE4sR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI4QyxFQUE3QixDQUFnQyxRQUFoQyxFQUEwQyxVQUFTM0wsQ0FBVCxFQUFZO0FBQ3BELFFBQUc2SSxDQUFDLENBQUM3SSxDQUFDLENBQUNxQyxNQUFILENBQUQsQ0FBWVksR0FBWixPQUFzQixPQUF6QixFQUFrQztBQUNoQzRGLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CbUssSUFBcEI7QUFDRCxLQUZELE1BRU87QUFDTG5LLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9Cb0ssSUFBcEI7QUFDRDtBQUNGLEdBTkQ7QUFPRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3VZLGNBQVQsR0FBMEI7QUFDeEIsTUFBR3BwQixRQUFRLENBQUNrRyxjQUFULENBQXdCLGVBQXhCLENBQUgsRUFBNkM7QUFDM0M4Z0IsVUFBTSxDQUFDLFlBQUQsQ0FBTixDQUFxQnFDLE9BQXJCLENBQTZCLFNBQTdCLEVBRDJDLENBRTNDOztBQUNBcnBCLFlBQVEsQ0FBQ2tHLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUN2SSxnQkFBekMsQ0FBMEQsT0FBMUQsRUFBbUUsVUFBVXlELEtBQVYsRUFBaUI7QUFDbEZBLFdBQUssQ0FBQ3BELGNBQU47QUFDQSxZQUFNc3JCLE1BQU0sR0FBSUMsTUFBTSxDQUFDOWhCLE1BQVAsR0FBZ0IsQ0FBakIsR0FBdUIsTUFBTSxDQUE1QztBQUNBLFlBQU0raEIsT0FBTyxHQUFJRCxNQUFNLENBQUN0aUIsS0FBUCxHQUFlLENBQWhCLEdBQXNCLE1BQU0sQ0FBNUM7QUFDQSxZQUFNM0osR0FBRyxHQUFHMEMsUUFBUSxDQUFDa0csY0FBVCxDQUF3QixlQUF4QixFQUF5Q3JELE9BQXpDLENBQWlEdkYsR0FBN0Q7QUFDQWEsWUFBTSxDQUFDc3JCLElBQVAsQ0FBWSwwQ0FBd0Nuc0IsR0FBcEQsRUFBeUQseUJBQXpELEVBQW9GLFNBQVNnc0IsTUFBVCxHQUFrQixRQUFsQixHQUE2QkUsT0FBN0IsR0FBdUMsMENBQTNIO0FBQ0QsS0FORCxFQUgyQyxDQVczQzs7QUFDQXhwQixZQUFRLENBQUNrRyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ3ZJLGdCQUExQyxDQUEyRCxPQUEzRCxFQUFvRSxVQUFVeUQsS0FBVixFQUFpQjtBQUNuRkEsV0FBSyxDQUFDcEQsY0FBTjtBQUNBZ0MsY0FBUSxDQUFDa0csY0FBVCxDQUF3QixvQkFBeEIsRUFBOEN3akIsS0FBOUM7QUFDRCxLQUhELEVBWjJDLENBa0IzQzs7QUFDQTFwQixZQUFRLENBQUNrRyxjQUFULENBQXdCLFdBQXhCLEVBQXFDdkksZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVV5RCxLQUFWLEVBQWlCO0FBQzlFQSxXQUFLLENBQUNwRCxjQUFOO0FBQ0EsWUFBTTJyQixRQUFRLEdBQUczcEIsUUFBUSxDQUFDa0csY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBTyxPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNGlCLE9BQWhCLENBQXdCLFFBQXhCO0FBQ0ExaEIsZUFBUyxDQUFDaWlCLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCRixRQUFRLENBQUMvcEIsS0FBdkMsRUFDRzNCLElBREgsQ0FDUSxNQUFNO0FBQ1Z3SSxTQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNGlCLE9BQWhCLENBQXdCLE1BQXhCO0FBQ0F4YixrQkFBVSxDQUFDLFlBQVc7QUFBRXBILFdBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0aUIsT0FBaEIsQ0FBd0IsU0FBeEI7QUFBcUMsU0FBbkQsRUFBcUQsSUFBckQsQ0FBVjtBQUNELE9BSkgsRUFLRy9xQixLQUxILENBS1VDLEtBQUQsSUFBVztBQUFFMnFCLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFlNXFCLEtBQU0sRUFBbEM7QUFBc0MsT0FMNUQ7QUFNRCxLQVZELEVBbkIyQyxDQStCM0M7O0FBQ0F5QixZQUFRLENBQUNrRyxjQUFULENBQXdCLFdBQXhCLEVBQXFDdkksZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVN5RCxLQUFULEVBQWdCO0FBQzdFQSxXQUFLLENBQUNwRCxjQUFOO0FBQ0EsWUFBTThyQixNQUFNLEdBQUc5cEIsUUFBUSxDQUFDa0csY0FBVCxDQUF3QixXQUF4QixFQUFxQ3JELE9BQXJDLENBQTZDa25CLE1BQTVEO0FBQ0E1ckIsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QnlyQixNQUF2QjtBQUNELEtBSkQ7QUFLRDtBQUNGOztBQUVELFNBQVNFLGFBQVQsR0FBeUI7QUFDdkI7QUFDQXZqQixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCOEMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVztBQUN0QyxRQUFJOUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ1csUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQzlCaFcsT0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ2QyxPQUF6QixDQUFpQyxRQUFqQztBQUNELEtBRkQsTUFFTztBQUNMdUMsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRakYsT0FBUixDQUFnQixNQUFoQixFQUF3QjBDLE9BQXhCLENBQWdDLFFBQWhDO0FBQ0Q7QUFDRixHQU5ELEVBRnVCLENBVXZCOztBQUNBdUMsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI4QyxFQUF2QixDQUEwQixPQUExQixFQUFtQyxZQUFXO0FBQzVDLFVBQU0wZ0IsV0FBVyxHQUFHeGpCLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUI1RixHQUFuQixFQUFwQjs7QUFDQSxRQUFJb3BCLFdBQVcsS0FBSyxFQUFwQixFQUF3QjtBQUN0QnhqQixPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjVGLEdBQTlCLENBQWtDLEVBQWxDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w0RixPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjVGLEdBQTlCLENBQWtDb3BCLFdBQWxDO0FBQ0Q7O0FBRUR4akIsS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ2QyxPQUF6QixDQUFpQyxRQUFqQztBQUNELEdBVEQ7QUFXQXVDLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVThDLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLGVBQXhCLEVBQXlDLFlBQVk7QUFDbkQ5QyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFqRixPQUFSLENBQWdCLEtBQWhCLEVBQXVCdVMsV0FBdkIsQ0FBbUMsY0FBbkM7QUFDQXROLEtBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCOFMsSUFBekIsQ0FBOEIsRUFBOUI7QUFDRCxHQUhEOztBQUtBLE1BQUc5UyxDQUFDLENBQUMsMENBQUQsQ0FBRCxDQUE4QzhTLElBQTlDLE1BQXdEelksU0FBM0QsRUFBc0U7QUFDcEUyRixLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QmdOLFFBQXpCLENBQWtDLGNBQWxDO0FBQ0FoTixLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjhTLElBQXpCLENBQThCOVMsQ0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOEM4UyxJQUE5QyxFQUE5QjtBQUNBOVMsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjVGLEdBQW5CLENBQXVCNEYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI1RixHQUE5QixFQUF2QjtBQUNELEdBL0JzQixDQWlDdkI7OztBQUNBNEYsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0I4QyxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFXO0FBQzNDLFVBQU0yZ0IsTUFBTSxHQUFHempCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I1RixHQUFsQixFQUFmOztBQUNBLFFBQUlxcEIsTUFBTSxLQUFLLEVBQWYsRUFBbUI7QUFDakJ6akIsT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0M1RixHQUFsQyxDQUFzQyxFQUF0QztBQUNELEtBRkQsTUFFTztBQUNMNEYsT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0M1RixHQUFsQyxDQUFzQ3FwQixNQUF0QztBQUNEOztBQUVEempCLEtBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCdkMsT0FBekIsQ0FBaUMsUUFBakM7QUFDRCxHQVREO0FBV0F1QyxHQUFDLENBQUMsTUFBRCxDQUFELENBQVU4QyxFQUFWLENBQWEsU0FBYixFQUF3QixjQUF4QixFQUF3QyxZQUFZO0FBQ2xEOUMsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRakYsT0FBUixDQUFnQixLQUFoQixFQUF1QnVTLFdBQXZCLENBQW1DLGNBQW5DO0FBQ0F0TixLQUFDLENBQUMsZUFBRCxDQUFELENBQW1COFMsSUFBbkIsQ0FBd0IsRUFBeEI7QUFDRCxHQUhELEVBN0N1QixDQWtEdkI7O0FBQ0E5UyxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCOEMsRUFBakIsQ0FBb0IsUUFBcEIsRUFBOEIsWUFBVztBQUN2QyxVQUFNNGdCLE1BQU0sR0FBRzFqQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE1RixHQUFSLEVBQWY7QUFDQSxVQUFNdXBCLFlBQVksR0FBRzNqQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE1SCxJQUFSLENBQWEsV0FBYixDQUFyQjtBQUNBNEgsS0FBQyxDQUFDLGlCQUFpQjJqQixZQUFqQixHQUFnQyxJQUFqQyxDQUFELENBQXdDdnBCLEdBQXhDLENBQTRDc3BCLE1BQTVDO0FBQ0QsR0FKRDs7QUFNQSxNQUFHMWpCLENBQUMsQ0FBQyx3Q0FBRCxDQUFELENBQTRDOFMsSUFBNUMsTUFBc0R6WSxTQUF6RCxFQUFvRTtBQUNsRTJGLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnTixRQUFuQixDQUE0QixjQUE1QjtBQUNBaE4sS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjhTLElBQW5CLENBQXdCOVMsQ0FBQyxDQUFDLHdDQUFELENBQUQsQ0FBNEM4UyxJQUE1QyxFQUF4QjtBQUNBOVMsS0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjVGLEdBQWxCLENBQXNCNEYsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0M1RixHQUFsQyxFQUF0QjtBQUNEOztBQUVENEYsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI4QyxFQUF2QixDQUEwQixPQUExQixFQUFtQyxVQUFTM0wsQ0FBVCxFQUFZO0FBQzdDLFFBQUk2SSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnVyxRQUFSLENBQWlCLFVBQWpCLENBQUosRUFBa0M7QUFDaEM3ZSxPQUFDLENBQUNJLGNBQUY7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFHRCxTQUFTcXNCLG1CQUFULEdBQStCO0FBQzdCO0FBQ0E1akIsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI4QyxFQUE1QixDQUErQixvQkFBL0IsRUFBcUQsVUFBUzNMLENBQVQsRUFBWTtBQUMvRDZJLEtBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZdUIsT0FBWixDQUFvQixJQUFwQixFQUEwQnVTLFdBQTFCLENBQXNDLE1BQXRDO0FBQ0QsR0FGRDtBQUlBdE4sR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI4QyxFQUE1QixDQUErQixrQkFBL0IsRUFBbUQsVUFBUzNMLENBQVQsRUFBWTtBQUM3RDZJLEtBQUMsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFELENBQWNzTixXQUFkLENBQTBCLE1BQTFCO0FBQ0F0TixLQUFDLENBQUM3SSxDQUFDLENBQUNxQyxNQUFILENBQUQsQ0FBWXVCLE9BQVosQ0FBb0IsSUFBcEIsRUFBMEJpUyxRQUExQixDQUFtQyxNQUFuQztBQUNELEdBSEQsRUFONkIsQ0FXN0I7O0FBQ0FoTixHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjhDLEVBQTNCLENBQThCLGtCQUE5QixFQUFrRCxVQUFVM0wsQ0FBVixFQUFhO0FBQzdENkksS0FBQyxDQUFDN0ksQ0FBQyxDQUFDcUMsTUFBSCxDQUFELENBQVlxcUIsSUFBWixDQUFpQixLQUFqQixFQUF3QnZXLFdBQXhCLENBQW9DLE1BQXBDO0FBQ0QsR0FGRDtBQUdBdE4sR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkI4QyxFQUEzQixDQUE4QixvQkFBOUIsRUFBb0QsVUFBVTNMLENBQVYsRUFBYTtBQUMvRDZJLEtBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZcXFCLElBQVosQ0FBaUIsS0FBakIsRUFBd0I3VyxRQUF4QixDQUFpQyxNQUFqQztBQUNELEdBRkQ7QUFHQWhOLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I4QyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFXO0FBQ3ZDOUMsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRakYsT0FBUixDQUFnQixtQkFBaEIsRUFBcUM4b0IsSUFBckMsQ0FBMEMsS0FBMUMsRUFBaURwbUIsT0FBakQsQ0FBeUQsT0FBekQ7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU3FtQixrQkFBVCxHQUE4QjtBQUM1QjlqQixHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjhDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFVBQVMzTCxDQUFULEVBQVk7QUFDaERBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBLFVBQU13c0IsT0FBTyxHQUFHL2pCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTVILElBQVIsQ0FBYSxTQUFiLENBQWhCO0FBQ0E0SCxLQUFDLENBQUMrakIsT0FBRCxDQUFELENBQVc5QixLQUFYLENBQWlCLE1BQWpCO0FBQ0FqaUIsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JzTixXQUF0QixDQUFrQyxNQUFsQztBQUNELEdBTEQ7QUFNRDs7QUFFRCxTQUFTeE4sYUFBVCxHQUF5QjtBQUN2Qm9nQixxQkFBbUI7QUFDbkI7O0FBQ0EsTUFBSWxnQixDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosS0FBc0IsR0FBMUIsRUFBK0I7QUFDN0I7QUFDRDs7QUFDRG1pQixnQkFBYztBQUNkM0IsWUFBVSxDQUFDaGhCLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJnVCxJQUFqQixDQUFzQixjQUF0QixDQUFELENBQVY7QUFDQTtBQUNBaFQsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JtSyxJQUF0Qjs7QUFDQWxLLG1CQUFPbUssSUFBUDtBQUNEOztBQUVELFNBQVN4SyxJQUFULEdBQWdCO0FBQ2Q7QUFDQTBnQixvQkFBa0I7QUFDbEJ0Z0IsR0FBQyxDQUFDLFlBQVk7QUFDWkEsS0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI0aUIsT0FBN0I7QUFDRCxHQUZBLENBQUQsQ0FIYyxDQU1kOztBQUNBNWlCLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9COEMsRUFBcEIsQ0FBdUIsbUJBQXZCLEVBQTRDLFVBQVUzTCxDQUFWLEVBQWE7QUFDdkRBLEtBQUMsQ0FBQzZzQix3QkFBRjtBQUNELEdBRkQ7QUFHQXJCLGdCQUFjO0FBQ2Q7QUFDQSx3Q0FaYyxDQWFkOztBQUNBbEMsbUJBQWlCO0FBQ2pCSSxxQkFBbUI7QUFFbkJPLGdCQUFjO0FBQ2R3QyxxQkFBbUI7QUFDbkJFLG9CQUFrQjtBQUNsQlAsZUFBYTtBQUNiO0FBRUF2QixxQkFBbUI7QUFFbkI5QixxQkFBbUI7O0FBQ25CLE1BQUlsZ0IsQ0FBQyxDQUFDekcsUUFBRCxDQUFELENBQVlpSCxLQUFaLEtBQXNCLEdBQTFCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBQ0Q7QUFDQTtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0U7O0FBQ0FSLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCbUssSUFBdkI7QUFDQW5LLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCbUssSUFBdEI7QUFDQW5LLEdBQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDbUssSUFBM0M7QUFDRDs7UUFFUXZLLEksR0FBQUEsSTtRQUFNRSxhLEdBQUFBLGE7Ozs7Ozs7Ozs7Ozs7OztBQ3JoQmY7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQWVBO0FBR0E7QUFDQXpJLGdCQUFNNFMsUUFBTixDQUFlZ2EsT0FBZixDQUF1QjNzQixJQUF2QixDQUE0QixjQUE1QixJQUE4QyxrREFBOUM7QUFDQUQsZ0JBQU00UyxRQUFOLENBQWVnYSxPQUFmLENBQXVCM3NCLElBQXZCLENBQTRCNHNCLE1BQTVCLEdBQXFDLGdEQUFyQztBQUNBN3NCLGdCQUFNNFMsUUFBTixDQUFlZ2EsT0FBZixDQUF1QjNzQixJQUF2QixDQUE0QixrQkFBNUIsSUFBa0QsZ0JBQWxEO0FBRUFpQyxRQUFRLENBQUNyQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtBQUNsRDtBQUNBLFFBQU1pdEIsU0FBUyxHQUFHLHlCQUFVO0FBQUVqbEIsWUFBUSxFQUFFO0FBQVosR0FBVixDQUFsQixDQUZrRCxDQUlsRDs7QUFDQTNGLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsOEJBQTFCLEVBQ0d6QixPQURILENBQ1cxQixFQUFFLElBQUksK0JBQWdCQSxFQUFoQixDQURqQixFQUxrRCxDQVFsRDs7QUFDQTRDLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsbUNBQTFCLEVBQ0d6QixPQURILENBQ1cxQixFQUFFLElBQUksb0NBQXFCQSxFQUFyQixDQURqQixFQVRrRCxDQVlsRDs7QUFDQSx1Q0Fia0QsQ0FlbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0Esd0NBMUJrRCxDQTRCbEQ7O0FBQ0E0QyxVQUFRLENBQUNPLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q3pCLE9BQTlDLENBQXVEK3JCLElBQUQsSUFBVTtBQUM5RCxRQUFJdG9CLHNCQUFKLENBQWlCc29CLElBQWpCLEVBQXVCO0FBQ3JCam5CLFlBQU0sQ0FBQ2hFLEtBQUQsRUFBUTtBQUNaSSxnQkFBUSxDQUFDdEMsYUFBVCxDQUF3QixpQ0FBZ0NrQyxLQUFLLEdBQUcsQ0FBRSxFQUFsRSxFQUFxRTBFLE9BQXJFLEdBQStFLElBQS9FO0FBQ0Q7O0FBSG9CLEtBQXZCO0FBS0QsR0FORCxFQTdCa0QsQ0FxQ2xEOztBQUNBLE1BQUl0RSxRQUFRLENBQUN0QyxhQUFULENBQXVCLGlCQUF2QixDQUFKLEVBQStDO0FBQzdDLG1DQUFnQnNDLFFBQVEsQ0FBQ3RDLGFBQVQsQ0FBdUIseUJBQXZCLENBQWhCO0FBQ0Esa0NBQWVzQyxRQUFRLENBQUN0QyxhQUFULENBQXVCLGlCQUF2QixDQUFmO0FBQ0QsR0F6Q2lELENBMkNsRDs7O0FBQ0FzQyxVQUFRLENBQUNPLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q3pCLE9BQTlDLENBQXNEK3JCLElBQUksSUFBSSxJQUFJNW1CLHNCQUFKLENBQWlCNG1CLElBQWpCLENBQTlELEVBNUNrRCxDQThDbEQ7O0FBQ0EsTUFBSTdxQixRQUFRLENBQUN0QyxhQUFULENBQXVCLDZDQUF2QixDQUFKLEVBQTJFO0FBQUUsUUFBSStHLDZCQUFKO0FBQTRCLEdBL0N2RCxDQWlEbEQ7OztBQUNBO0FBQ0QsQ0FuREQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7O0FBSEE7O0FBQ0E7O0FBQ0E7QUFHQSxNQUFNcW1CLFFBQVEsR0FBRyxTQUFTQyxhQUFULEdBQXlCO0FBQ3hDQyxnQkFBYyxDQUFDdmtCLENBQUMsQ0FBQyx5QkFBRCxDQUFGLENBQWQ7QUFDQXVrQixnQkFBYyxDQUFDdmtCLENBQUMsQ0FBQyx3QkFBRCxDQUFGLENBQWQ7QUFDQXVrQixnQkFBYyxDQUFDdmtCLENBQUMsQ0FBQyw0QkFBRCxDQUFGLENBQWQ7QUFFQXdrQix1QkFBcUIsQ0FBQ3hrQixDQUFDLENBQUMsaUJBQUQsQ0FBRixDQUFyQjtBQUNBd2tCLHVCQUFxQixDQUFDeGtCLENBQUMsQ0FBQyw2QkFBRCxDQUFGLENBQXJCO0FBQ0QsQ0FQRDtBQVNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3VrQixjQUFULENBQXdCRSxlQUF4QixFQUF5QztBQUN2QyxRQUFNemQsT0FBTyxHQUFHO0FBQ2QwZCxZQUFRLEVBQUUsSUFESTtBQUVkQyxTQUFLLEVBQUUsR0FGTztBQUdkQyxnQkFBWSxFQUFFLENBSEE7QUFJZEMsa0JBQWMsRUFBRSxDQUpGO0FBS2RDLGdCQUFZLEVBQUVMLGVBQWUsQ0FBQ3JULElBQWhCLENBQXFCLGtCQUFyQixDQUxBO0FBTWQyVCxhQUFTLEVBQUUsaUdBTkc7QUFPZEMsYUFBUyxFQUFFLDRGQVBHO0FBUWRDLGNBQVUsRUFBRSxDQUNWO0FBQ0VDLGdCQUFVLEVBQUUsSUFEZDtBQUVFanBCLGNBQVEsRUFBRTtBQUNSMm9CLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkgsZ0JBQVEsRUFBRTtBQUhGO0FBRlosS0FEVSxFQVNWO0FBQ0VRLGdCQUFVLEVBQUUsSUFEZDtBQUVFanBCLGNBQVEsRUFBRTtBQUNSMm9CLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkgsZ0JBQVEsRUFBRTtBQUhGO0FBRlosS0FUVSxFQWlCVjtBQUNFUSxnQkFBVSxFQUFFLEdBRGQ7QUFFRWpwQixjQUFRLEVBQUU7QUFDUjJvQixvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FqQlU7QUFSRSxHQUFoQjs7QUFrQ0EsTUFBSUosZUFBZSxJQUFJLENBQUNBLGVBQWUsQ0FBQ3pPLFFBQWhCLENBQXlCLG1CQUF6QixDQUF4QixFQUF1RTtBQUNyRXlPLG1CQUFlLENBQUNVLEtBQWhCLENBQXNCbmUsT0FBdEI7QUFFQXlkLG1CQUFlLENBQUMzaEIsRUFBaEIsQ0FBbUIsYUFBbkIsRUFBa0MsVUFBU25JLEtBQVQsRUFBZ0J3cUIsS0FBaEIsRUFBdUJDLFlBQXZCLEVBQXFDQyxTQUFyQyxFQUErQztBQUMvRUMsMEJBQW9CLENBQUNiLGVBQUQsQ0FBcEI7QUFDRCxLQUZEO0FBR0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0QscUJBQVQsQ0FBK0JDLGVBQS9CLEVBQWdEO0FBQzlDLE1BQUljLG1CQUFtQixHQUFJZCxlQUFlLEtBQUt6a0IsQ0FBQyxDQUFDLDZCQUFELENBQWhEO0FBQ0EsUUFBTWdILE9BQU8sR0FBRztBQUNaMGQsWUFBUSxFQUFFLElBREU7QUFFWkMsU0FBSyxFQUFFLEdBRks7QUFHWkMsZ0JBQVksRUFBRSxDQUhGO0FBSVpDLGtCQUFjLEVBQUUsQ0FKSjtBQUtaVyxlQUFXLEVBQUUsSUFMRDtBQU1aVixnQkFBWSxFQUFFTCxlQUFlLENBQUNyVCxJQUFoQixDQUFxQixrQkFBckIsQ0FORjtBQU9aMlQsYUFBUyxFQUFFLDRGQVBDO0FBUVpDLGFBQVMsRUFBRSx3RkFSQztBQVNaQyxjQUFVLEVBQUUsQ0FDWjtBQUNFQyxnQkFBVSxFQUFFLEdBRGQ7QUFFRWpwQixjQUFRLEVBQUU7QUFDUjJvQixvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FEWSxFQVFaO0FBQ0VLLGdCQUFVLEVBQUUsR0FEZDtBQUVFanBCLGNBQVEsRUFBRTtBQUZaLEtBUlk7QUFUQSxHQUFoQjs7QUF3QkEsTUFBSXdvQixlQUFlLElBQUksQ0FBQ0EsZUFBZSxDQUFDek8sUUFBaEIsQ0FBeUIsbUJBQXpCLENBQXhCLEVBQXVFO0FBQ3JFeU8sbUJBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0JuZSxPQUF0Qjs7QUFDQSxRQUFJdWUsbUJBQUosRUFBeUI7QUFDdkJFLDhCQUF3QjtBQUN6QjtBQUNGLEdBTEQsTUFLTztBQUNMLFFBQUd6bEIsQ0FBQyxDQUFDekcsUUFBRCxDQUFELENBQVlpSCxLQUFaLEtBQXNCLEdBQXRCLElBQTZCaWtCLGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJVLEtBQWhELElBQXlEVixlQUFlLENBQUMsQ0FBRCxDQUFmLENBQW1CVSxLQUFuQixDQUF5Qk8sU0FBckYsRUFBZ0c7QUFDOUZqQixxQkFBZSxDQUFDVSxLQUFoQixDQUFzQm5lLE9BQXRCO0FBQ0Q7O0FBQ0QsUUFBSXVlLG1CQUFKLEVBQXlCO0FBQ3ZCZCxxQkFBZSxDQUFDM2hCLEVBQWhCLENBQW1CLGFBQW5CLEVBQWtDLFVBQVNxaUIsS0FBVCxFQUFlO0FBQy9DTSxnQ0FBd0I7QUFDekIsT0FGRDtBQUdEO0FBQ0Y7QUFDRjtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0UscUJBQVQsQ0FBK0JsQixlQUEvQixFQUFnRDtBQUM5QyxRQUFNbUIsSUFBSSxHQUFHO0FBQ1hsQixZQUFRLEVBQUUsSUFEQztBQUVYQyxTQUFLLEVBQUUsR0FGSTtBQUdYa0IsUUFBSSxFQUFFLENBSEs7QUFJWGpCLGdCQUFZLEVBQUUsQ0FKSDtBQUtYQyxrQkFBYyxFQUFFLENBTEw7QUFNWGlCLGdCQUFZLEVBQUUsQ0FOSDtBQU9YQyxrQkFBYyxFQUFFLElBUEw7QUFRWGpCLGdCQUFZLEVBQUVMLGVBQWUsQ0FBQ3JULElBQWhCLENBQXFCLGtCQUFyQixDQVJIO0FBU1gyVCxhQUFTLEVBQUUsaUdBVEE7QUFVWEMsYUFBUyxFQUFFLDRGQVZBO0FBV1hDLGNBQVUsRUFBRSxDQUNWO0FBQ0VDLGdCQUFVLEVBQUUsSUFEZDtBQUVFanBCLGNBQVEsRUFBRTtBQUNSNHBCLFlBQUksRUFBRSxDQURFO0FBRVJDLG9CQUFZLEVBQUU7QUFGTjtBQUZaLEtBRFU7QUFYRCxHQUFiO0FBc0JBLFFBQU1FLGdCQUFnQixHQUFHLENBQUN2QixlQUFlLENBQUN6TyxRQUFoQixDQUF5QixRQUF6QixDQUExQjs7QUFDQSxNQUFHZ1EsZ0JBQWdCLElBQUksQ0FBQ3ZCLGVBQWUsQ0FBQ3pPLFFBQWhCLENBQXlCLG1CQUF6QixDQUF4QixFQUF1RTtBQUNyRXlPLG1CQUFlLENBQUNVLEtBQWhCLENBQXNCUyxJQUF0QjtBQUNELEdBRkQsTUFFTyxJQUFJbkIsZUFBZSxDQUFDek8sUUFBaEIsQ0FBeUIsbUJBQXpCLENBQUosRUFBbUQ7QUFDeER5TyxtQkFBZSxDQUFDVSxLQUFoQixDQUFzQixTQUF0QjtBQUNBVixtQkFBZSxDQUFDVSxLQUFoQixDQUFzQlMsSUFBdEI7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTSyxvQkFBVCxHQUFnQztBQUM5QixRQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBbG1CLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJzRyxJQUFuQixDQUF3QixVQUFTNmYsS0FBVCxFQUFnQjtBQUN0QyxVQUFNdGQsS0FBSyxHQUFHO0FBQ1poUyxTQUFHLEVBQUdtSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE1SCxJQUFSLENBQWEsT0FBYixDQURNO0FBRVprUyxlQUFTLEVBQUd0SyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE1SCxJQUFSLENBQWEsV0FBYjtBQUZBLEtBQWQ7QUFJQTh0QixVQUFNLENBQUN0YyxJQUFQLENBQVlmLEtBQVo7QUFDRCxHQU5EO0FBT0EsUUFBTXVkLGFBQWEsR0FBR3JpQixJQUFJLENBQUNFLEdBQUwsQ0FBVTFLLFFBQVEsQ0FBQ2lVLElBQVQsQ0FBYzZZLFlBQXhCLEVBQXNDOXNCLFFBQVEsQ0FBQ2lVLElBQVQsQ0FBYzhZLFlBQXBELEVBQ3BCL3NCLFFBQVEsQ0FBQ3NILGVBQVQsQ0FBeUJ1ZixZQURMLEVBQ21CN21CLFFBQVEsQ0FBQ3NILGVBQVQsQ0FBeUJ3bEIsWUFENUMsRUFDMEQ5c0IsUUFBUSxDQUFDc0gsZUFBVCxDQUF5QnlsQixZQURuRixDQUF0QjtBQUdBL3NCLFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkN6QixPQUEzQyxDQUFtRCxDQUFDZ0csSUFBRCxFQUFPOG5CLEtBQVAsS0FBaUI7QUFDbEU5bkIsUUFBSSxDQUFDbkgsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU3lELEtBQVQsRUFBZ0I7QUFDN0NBLFdBQUssQ0FBQ3BELGNBQU47O0FBQ0EwSSx1QkFBT2tLLElBQVAsQ0FDRStiLE1BREYsRUFFRTtBQUNFMWIsa0JBQVUsRUFBRSxVQURkO0FBRUVPLFlBQUksRUFBRSxJQUZSO0FBR0UvSixjQUFNLEVBQUVvbEI7QUFIVixPQUZGLEVBT0VqcUIsTUFBTSxDQUFDZ3FCLEtBQUssR0FBRyxDQUFULENBUFI7QUFVRCxLQVpEO0FBYUQsR0FkRDtBQWVEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTYixvQkFBVCxDQUE4QmIsZUFBOUIsRUFBK0M7QUFDN0MsUUFBTThCLFdBQVcsR0FBRyw2QkFBcEI7QUFDQSxNQUFJQyxlQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFDQSxNQUFJaEMsZUFBZSxLQUFLcHFCLFNBQXhCLEVBQW1DO0FBQ2pDbXNCLG1CQUFlLEdBQUd4bUIsQ0FBQyxDQUFDdW1CLFdBQUQsRUFBYzlCLGVBQWQsQ0FBRCxDQUFnQ2pRLFdBQWhDLEVBQWxCO0FBQ0FpUyxpQkFBYSxHQUFHMWlCLElBQUksQ0FBQ3FZLEtBQUwsQ0FBV29LLGVBQWUsR0FBRyxDQUFsQixHQUFzQixFQUFqQyxDQUFoQjtBQUNBeG1CLEtBQUMsQ0FBQ3lrQixlQUFELENBQUQsQ0FBbUJyVCxJQUFuQixDQUF3QixrQkFBeEIsRUFBNENwTSxHQUE1QyxDQUFnRCxLQUFoRCxFQUF1RHloQixhQUFhLEdBQUcsSUFBdkU7QUFDRCxHQUpELE1BSU87QUFDTEQsbUJBQWUsR0FBR3htQixDQUFDLENBQUN1bUIsV0FBRCxDQUFELENBQWUvUixXQUFmLEVBQWxCO0FBQ0FpUyxpQkFBYSxHQUFHMWlCLElBQUksQ0FBQ3FZLEtBQUwsQ0FBV29LLGVBQWUsR0FBRyxDQUFsQixHQUFzQixFQUFqQyxDQUFoQjtBQUNBeG1CLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCMG1CLEdBQXRCLENBQTBCLGtCQUExQixFQUE4QzFoQixHQUE5QyxDQUFrRCxLQUFsRCxFQUF5RHloQixhQUFhLEdBQUcsSUFBekU7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNoQix3QkFBVCxDQUFrQzd1QixPQUFsQyxFQUEyQztBQUN6QyxRQUFNNHZCLGVBQWUsR0FBR3htQixDQUFDLENBQUMsbUJBQUQsRUFBc0JwSixPQUF0QixDQUFELENBQWdDNGQsV0FBaEMsRUFBeEI7QUFDQSxRQUFNaVMsYUFBYSxHQUFHMWlCLElBQUksQ0FBQ3FZLEtBQUwsQ0FBV29LLGVBQVgsQ0FBdEI7QUFDQXhtQixHQUFDLENBQUNwSixPQUFELENBQUQsQ0FBV3dhLElBQVgsQ0FBZ0Isa0JBQWhCLEVBQW9DcE0sR0FBcEMsQ0FBd0MsS0FBeEMsRUFBK0N5aEIsYUFBYSxHQUFHLElBQS9EO0FBQ0Q7O1FBRU9wQyxRLEdBQUFBLFE7UUFBVWlCLG9CLEdBQUFBLG9CO1FBQXNCRyx3QixHQUFBQSx3QjtRQUEwQkUscUIsR0FBQUEscUI7UUFBdUJNLG9CLEdBQUFBLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU16Rjs7QUFFQTtBQUNBLE1BQU1VLFVBQVUsR0FBRzNtQixDQUFDLENBQUMsZ0NBQUQsQ0FBcEI7QUFDQSxNQUFNNG1CLFNBQVMsR0FBRzVtQixDQUFDLENBQUMsc0NBQUQsQ0FBbkI7O0FBRUEsTUFBTTZtQixRQUFRLEdBQUcsU0FBU3ZDLGFBQVQsR0FBeUI7QUFDeEMsUUFBTXRvQixTQUFTLEdBQUdnRSxDQUFDLENBQUMsZUFBRCxDQUFuQixDQUR3QyxDQUV4Qzs7QUFDQUEsR0FBQyxDQUFDLGlDQUFELEVBQW9DaEUsU0FBcEMsQ0FBRCxDQUFnRDhHLEVBQWhELENBQW1ELE9BQW5ELEVBQTRELFVBQVMzTCxDQUFULEVBQVk7QUFDdEVBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBLFVBQU11dkIsV0FBVyxHQUFHQyxZQUFZLENBQUMsSUFBRCxDQUFaLENBQW1CLENBQW5CLENBQXBCOztBQUNBLFFBQUksQ0FBQy9tQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnVyxRQUFSLENBQWlCLFNBQWpCLENBQUQsSUFBZ0MsQ0FBQ2hXLENBQUMsQ0FBQyxvQkFBRCxFQUF1QmhFLFNBQXZCLENBQUQsQ0FBbUNnYSxRQUFuQyxDQUE0QyxTQUE1QyxDQUFyQyxFQUE2RjtBQUMzRmhXLE9BQUMsQ0FBQyxpQ0FBRCxFQUFvQ2hFLFNBQXBDLENBQUQsQ0FBZ0RzUixXQUFoRCxDQUE0RCxTQUE1RDtBQUNBdE4sT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ04sUUFBUixDQUFpQixTQUFqQjtBQUVBNFosZUFBUyxDQUFDemMsSUFBVjtBQUNBeWMsZUFBUyxDQUFDL0MsSUFBVixHQUFpQnpaLElBQWpCO0FBRUFwSyxPQUFDLENBQUMsd0JBQUQsRUFBMkJoRSxTQUEzQixDQUFELENBQXVDbU8sSUFBdkM7QUFDQW5LLE9BQUMsQ0FBQywyQ0FBRCxFQUE4Q2hFLFNBQTlDLENBQUQsQ0FBMERvTyxJQUExRDtBQUVBNGMsdUJBQWlCLENBQUNGLFdBQUQsRUFBYyxRQUFkLEVBQXdCOXFCLFNBQXhCLENBQWpCO0FBQ0EsMkNBQXNCZ0UsQ0FBQyxDQUFDLHNCQUFELENBQXZCLEVBWDJGLENBWTNGOztBQUNBQSxPQUFDLENBQUMsOENBQUQsRUFBaURoRSxTQUFqRCxDQUFELENBQTZEOEcsRUFBN0QsQ0FBZ0UsT0FBaEUsRUFBeUUsVUFBUzNMLENBQVQsRUFBWTtBQUNuRjh2QixxQkFBYSxDQUFDam5CLENBQUMsQ0FBQyxJQUFELENBQUYsRUFBVThtQixXQUFWLEVBQXVCOXFCLFNBQXZCLENBQWI7QUFDRCxPQUZEO0FBR0QsS0FoQkQsTUFnQk8sSUFBSWdFLENBQUMsQ0FBQyxvQkFBRCxFQUF1QmhFLFNBQXZCLENBQUQsQ0FBbUNnYSxRQUFuQyxDQUE0QyxTQUE1QyxDQUFKLEVBQTREO0FBQ2pFaFcsT0FBQyxDQUFDLGlDQUFELEVBQW9DaEUsU0FBcEMsQ0FBRCxDQUFnRHNSLFdBQWhELENBQTRELFNBQTVEO0FBQ0F0TixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFnTixRQUFSLENBQWlCLFNBQWpCO0FBQ0FnYSx1QkFBaUIsQ0FBQ0YsV0FBRCxFQUFjLEtBQWQsRUFBcUI5cUIsU0FBckIsQ0FBakI7QUFDRDtBQUNGLEdBeEJELEVBSHdDLENBNkJ0Qzs7QUFDRmdFLEdBQUMsQ0FBQyx3QkFBRCxFQUEyQmhFLFNBQTNCLENBQUQsQ0FBdUM4RyxFQUF2QyxDQUEwQyxPQUExQyxFQUFtRCxVQUFTM0wsQ0FBVCxFQUFZO0FBQzdEQSxLQUFDLENBQUNJLGNBQUY7QUFDQSxVQUFNdXZCLFdBQVcsR0FBR0MsWUFBWSxDQUFDL21CLENBQUMsQ0FBQyx5Q0FBRCxFQUE0Q2hFLFNBQTVDLENBQUQsQ0FBd0QsQ0FBeEQsQ0FBRCxDQUFaLENBQXlFLENBQXpFLENBQXBCO0FBQ0FrckIsZUFBVyxDQUFDSixXQUFELEVBQWM5cUIsU0FBZCxDQUFYO0FBQ0FnckIscUJBQWlCLENBQUNGLFdBQUQsRUFBYyxLQUFkLEVBQXFCOXFCLFNBQXJCLENBQWpCO0FBQ0QsR0FMRCxFQTlCd0MsQ0FxQ3hDOztBQUNBMnFCLFlBQVUsQ0FBQzdqQixFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFTM0wsQ0FBVCxFQUFZO0FBQ2pDQSxLQUFDLENBQUNJLGNBQUY7QUFDQSxRQUFJdXZCLFdBQVcsR0FBRyxVQUFsQjs7QUFDQSxRQUFJLENBQUM5bUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ1csUUFBUixDQUFpQixjQUFqQixDQUFMLEVBQXVDO0FBQ3JDOFEsaUJBQVcsR0FBR0MsWUFBWSxDQUFDLElBQUQsQ0FBWixDQUFtQixDQUFuQixDQUFkO0FBQ0EvbUIsT0FBQyxDQUFDLHlCQUF5QjhtQixXQUExQixDQUFELENBQXdDeGdCLElBQXhDLENBQTZDLFlBQVc7QUFDdEQsY0FBTTZnQixLQUFLLEdBQUdKLFlBQVksQ0FBQyxJQUFELENBQVosQ0FBbUIsQ0FBbkIsQ0FBZDtBQUNBLGNBQU1LLFNBQVMsR0FBRyxvQ0FBb0NOLFdBQXBDLEdBQWtELFdBQWxELEdBQWdFSyxLQUFoRSxHQUF3RSxHQUExRjtBQUNBLGNBQU1FLE1BQU0sR0FBRyxzQ0FBc0NELFNBQXJEO0FBQ0EsY0FBTUUsU0FBUyxHQUFHLGFBQVlSLFdBQVosR0FBeUIsV0FBekIsR0FBdUNNLFNBQXpEO0FBQ0FwbkIsU0FBQyxDQUFDc25CLFNBQUQsQ0FBRCxDQUFhbHRCLEdBQWIsQ0FBaUI0RixDQUFDLENBQUNxbkIsTUFBRCxDQUFELENBQVVqdEIsR0FBVixFQUFqQjtBQUNELE9BTkQ7QUFPRDs7QUFDRG10Qix1QkFBbUIsQ0FBQyxJQUFELEVBQU9ULFdBQVAsRUFBb0I5cUIsU0FBcEIsQ0FBbkI7QUFDRCxHQWRELEVBdEN3QyxDQXNEeEM7O0FBQ0FnRSxHQUFDLENBQUMsdUNBQUQsRUFBMENoRSxTQUExQyxDQUFELENBQXNEOEcsRUFBdEQsQ0FBeUQsT0FBekQsRUFBa0UsVUFBUzNMLENBQVQsRUFBWTtBQUM1RUEsS0FBQyxDQUFDSSxjQUFGO0FBQ0F5SSxLQUFDLENBQUMsd0JBQUQsRUFBMkJoRSxTQUEzQixDQUFELENBQXVDb08sSUFBdkM7QUFDQW9kLG9CQUFnQixDQUFDeHJCLFNBQUQsQ0FBaEI7QUFDQWdFLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWpGLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0JpUyxRQUF4QixDQUFpQyxTQUFqQyxFQUE0Q3NVLE1BQTVDO0FBQ0QsR0FMRCxFQXZEd0MsQ0E4RHhDOztBQUNBdGhCLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmhFLFNBQTVCLENBQUQsQ0FBd0M4RyxFQUF4QyxDQUEyQyxPQUEzQyxFQUFvRCxVQUFTM0wsQ0FBVCxFQUFZO0FBQzlEQSxLQUFDLENBQUNJLGNBQUY7QUFDQWt3QixxQkFBaUIsQ0FBQ3pyQixTQUFELENBQWpCO0FBQ0EwckIsdUJBQW1CLENBQUMxckIsU0FBRCxDQUFuQjtBQUNBMnJCLHVCQUFtQixDQUFDM3JCLFNBQUQsQ0FBbkI7QUFDRCxHQUxELEVBL0R3QyxDQXNFeEM7O0FBQ0FnRSxHQUFDLENBQUMsK0JBQUQsRUFBa0NoRSxTQUFsQyxDQUFELENBQThDOEcsRUFBOUMsQ0FBaUQsT0FBakQsRUFBMEQsVUFBUzNMLENBQVQsRUFBWTtBQUNwRTZJLEtBQUMsQ0FBQyx3QkFBRCxFQUEyQmhFLFNBQTNCLENBQUQsQ0FBdUNtTyxJQUF2QztBQUNBbkssS0FBQyxDQUFDLG1DQUFELEVBQXNDaEUsU0FBdEMsQ0FBRCxDQUFrRG1PLElBQWxEO0FBQ0FuSyxLQUFDLENBQUMsb0JBQUQsRUFBdUJoRSxTQUF2QixDQUFELENBQW1Dc1IsV0FBbkMsQ0FBK0MsU0FBL0M7QUFDQXROLEtBQUMsQ0FBQyxvQ0FBRCxFQUF1Q2hFLFNBQXZDLENBQUQsQ0FBbURvTyxJQUFuRDtBQUNBc2QsdUJBQW1CLENBQUMxckIsU0FBRCxDQUFuQjtBQUNELEdBTkQ7QUFPRCxDQTlFRCxDLENBZ0ZBOzs7QUFDQSxTQUFTaXJCLGFBQVQsQ0FBdUJyd0IsT0FBdkIsRUFBZ0Nrd0IsV0FBaEMsRUFBNkM5cUIsU0FBN0MsRUFBd0Q7QUFDdERnRSxHQUFDLENBQUMsZUFBRCxFQUFrQnBKLE9BQWxCLENBQUQsQ0FBNEIwUCxJQUE1QixDQUFpQyxZQUFXO0FBQzFDLFVBQU04Z0IsU0FBUyxHQUFHTCxZQUFZLENBQUMsSUFBRCxDQUFaLENBQW1CLENBQW5CLENBQWxCO0FBQ0EsVUFBTWEsYUFBYSxHQUFHLG9DQUFvQ2QsV0FBcEMsR0FBa0QsV0FBbEQsR0FBZ0VNLFNBQWhFLEdBQTRFLEtBQWxHO0FBQ0EsVUFBTVMsU0FBUyxHQUFHLHNDQUFzQ0QsYUFBeEQ7QUFDQSxVQUFNRSxpQkFBaUIsR0FBRyxXQUFVaEIsV0FBVixHQUF1QixHQUF2QixHQUE2Qk0sU0FBdkQ7QUFFQSxRQUFJVyxXQUFXLEdBQUcvbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReWhCLElBQVIsRUFBbEI7QUFDQXpoQixLQUFDLENBQUM4bkIsaUJBQUQsQ0FBRCxDQUFxQnJHLElBQXJCLENBQTBCc0csV0FBMUI7O0FBRUEsUUFBSVgsU0FBUyxLQUFLLGFBQWxCLEVBQWlDO0FBQy9CVyxpQkFBVyxHQUFHL25CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXloQixJQUFSLEdBQWV1RyxTQUFmLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQWQ7QUFDRDs7QUFDRGhvQixLQUFDLENBQUM2bkIsU0FBRCxDQUFELENBQWF6dEIsR0FBYixDQUFpQjJ0QixXQUFqQjs7QUFFQSxRQUFJWCxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsVUFBSXBuQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5aEIsSUFBUixHQUFld0csSUFBZixPQUEwQixFQUE5QixFQUFrQztBQUNoQ2pvQixTQUFDLENBQUMsd0JBQXdCOG1CLFdBQXpCLENBQUQsQ0FBdUN4WixXQUF2QyxDQUFtRCxRQUFuRDtBQUNELE9BRkQsTUFFTztBQUNMdE4sU0FBQyxDQUFDLHdCQUF3QjhtQixXQUF6QixDQUFELENBQXVDOVosUUFBdkMsQ0FBZ0QsUUFBaEQ7QUFDRDtBQUNGOztBQUVEaE4sS0FBQyxDQUFDOG5CLGlCQUFELENBQUQsQ0FBcUIvc0IsT0FBckIsQ0FBNkIsU0FBN0IsRUFBd0NpWSxJQUF4QyxDQUE2QyxVQUFVa1YsZ0JBQWdCLENBQUNkLFNBQUQsQ0FBdkUsRUFBb0ZXLFdBQXBGO0FBQ0QsR0F2QkQ7QUF3QkEvbkIsR0FBQyxDQUFDLGtEQUFELEVBQXFEaEUsU0FBckQsQ0FBRCxDQUFpRWttQixJQUFqRSxDQUFzRSxTQUF0RSxFQUFpRixJQUFqRjtBQUNBdUYsbUJBQWlCLENBQUN6ckIsU0FBRCxDQUFqQjtBQUNEO0FBRUQ7OztBQUNBLFNBQVN1ckIsbUJBQVQsQ0FBNkIzd0IsT0FBN0IsRUFBc0Nrd0IsV0FBdEMsRUFBbUQ5cUIsU0FBbkQsRUFBOEQ7QUFDNUQsUUFBTWpDLElBQUksR0FBR2lHLENBQUMsQ0FBQ3BKLE9BQUQsQ0FBRCxDQUFXbUUsT0FBWCxDQUFtQixNQUFuQixDQUFiO0FBQ0FpRixHQUFDLENBQUMsNEJBQUQsRUFBK0JqRyxJQUEvQixDQUFELENBQXNDSyxHQUF0QyxDQUEwQzBzQixXQUExQztBQUNBcUIsa0JBQWdCLENBQUNyQixXQUFELEVBQWM5cUIsU0FBZCxDQUFoQjtBQUVBZ0UsR0FBQyxDQUFDLHlCQUFELEVBQTRCaEUsU0FBNUIsQ0FBRCxDQUF3Q2dSLFFBQXhDLENBQWlELFNBQWpEO0FBQ0FoTixHQUFDLENBQUN1aEIsSUFBRixDQUFPO0FBQ0xsYixRQUFJLEVBQUUsTUFERDtBQUVMeFAsT0FBRyxFQUFFa0QsSUFBSSxDQUFDaVosSUFBTCxDQUFVLFFBQVYsQ0FGQTtBQUdMNWEsUUFBSSxFQUFFMkIsSUFBSSxDQUFDeW5CLFNBQUwsRUFIRDtBQUlMbGEsV0FBTyxFQUFFLGlCQUFTblAsUUFBVCxFQUFtQjtBQUMxQixZQUFNaXdCLGNBQWMsR0FBR3BvQixDQUFDLENBQUM3SCxRQUFELENBQXhCO0FBQ0EsWUFBTWt3QixTQUFTLEdBQUcxQixVQUFVLENBQUMzUSxRQUFYLENBQW9CLGNBQXBCLENBQWxCOztBQUNBLFVBQUdvUyxjQUFjLENBQUNwUyxRQUFmLENBQXdCLHNCQUF4QixDQUFILEVBQW9EO0FBQ2xEaFcsU0FBQyxDQUFDLDJCQUEyQjhtQixXQUE1QixFQUF5QzlxQixTQUF6QyxDQUFELENBQXFEc0ssSUFBckQsQ0FBMEQsWUFBVztBQUNuRSxnQkFBTThnQixTQUFTLEdBQUdMLFlBQVksQ0FBQyxJQUFELENBQVosQ0FBbUIsQ0FBbkIsQ0FBbEI7QUFFQXVCLDJCQUFpQixDQUFDLElBQUQsRUFBT3hCLFdBQVAsRUFBb0JNLFNBQXBCLEVBQStCZ0IsY0FBL0IsQ0FBakIsQ0FIbUUsQ0FJbkU7O0FBQ0EsY0FBSUMsU0FBSixFQUFlO0FBQ2Isa0JBQU16eEIsT0FBTyxHQUFHb0osQ0FBQyxDQUFDLDJCQUEyQnVvQixtQkFBbUIsQ0FBQ3pCLFdBQUQsQ0FBOUMsR0FBOEQsR0FBOUQsR0FBb0VNLFNBQXJFLEVBQWdGcHJCLFNBQWhGLENBQWpCO0FBQ0Fzc0IsNkJBQWlCLENBQUMxeEIsT0FBRCxFQUFVMnhCLG1CQUFtQixDQUFDekIsV0FBRCxDQUE3QixFQUE0Q00sU0FBNUMsRUFBdURnQixjQUF2RCxDQUFqQjtBQUNEOztBQUVEcG9CLFdBQUMsQ0FBQyxlQUFELEVBQWtCaEUsU0FBbEIsQ0FBRCxDQUE4QjhXLElBQTlCLENBQW1DOVMsQ0FBQyxDQUFDLGVBQUQsRUFBa0Jvb0IsY0FBbEIsQ0FBRCxDQUFtQ3RWLElBQW5DLEVBQW5DO0FBQ0QsU0FYRDs7QUFZQSxZQUFJdVYsU0FBSixFQUFlO0FBQ2Jyb0IsV0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNzTixXQUF6QyxDQUFxRCxRQUFyRDtBQUNBa2Isc0JBQVksQ0FBQ3hzQixTQUFELENBQVo7QUFDRDs7QUFDRHlyQix5QkFBaUIsQ0FBQ3pyQixTQUFELENBQWpCO0FBQ0EwckIsMkJBQW1CLENBQUMxckIsU0FBRCxDQUFuQjtBQUNEO0FBQ0YsS0EzQkk7QUE0QkxsRSxTQUFLLEVBQUUsZUFBU0EsTUFBVCxFQUFnQjtBQUNyQjR2Qix5QkFBbUIsQ0FBQzFyQixTQUFELENBQW5CO0FBQ0FnRSxPQUFDLENBQUNBLENBQUMsQ0FBQzBoQixTQUFGLENBQVk1cEIsTUFBSyxDQUFDNnBCLFlBQWxCLEVBQWdDLENBQWhDLENBQUQsQ0FBRCxDQUFzQ3ZLLElBQXRDLENBQTJDLHFCQUEzQyxFQUFrRTlRLElBQWxFLENBQXVFLFlBQVc7QUFDaEYsY0FBTThnQixTQUFTLEdBQUdwbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRakYsT0FBUixDQUFnQixPQUFoQixFQUF5QmlZLElBQXpCLENBQThCLEtBQTlCLENBQWxCO0FBQ0EsY0FBTXlWLFVBQVUsR0FBR3pvQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5aEIsSUFBUixFQUFuQjtBQUNBemhCLFNBQUMsQ0FBQyw2QkFBNEJvbkIsU0FBNUIsR0FBdUMsSUFBeEMsRUFBOENwckIsU0FBOUMsQ0FBRCxDQUEwRGdSLFFBQTFELENBQW1FLFlBQW5FLEVBQWlGd1YsS0FBakYsQ0FBdUYscUZBQXFGaUcsVUFBckYsR0FBa0csZ0JBQXpMO0FBQ0QsT0FKRDtBQUtEO0FBbkNJLEdBQVA7QUFxQ0Q7QUFFRDs7O0FBQ0EsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI3QixXQUE5QixFQUEyQy9zQixJQUEzQyxFQUFpRGlDLFNBQWpELEVBQTREO0FBQzFELFFBQU00c0IsY0FBYyxHQUFHLENBQUMsV0FBRCxFQUFjLFVBQWQsRUFBMEIsYUFBMUIsQ0FBdkI7QUFDQSxRQUFNQyxVQUFVLEdBQUc3b0IsQ0FBQyxDQUFDLHlDQUF5QzhtQixXQUExQyxFQUF1RDlxQixTQUF2RCxDQUFELENBQW1FNUQsSUFBbkUsRUFBbkI7QUFDQTRILEdBQUMsQ0FBQ2pHLElBQUksR0FBRyxTQUFQLEdBQW1CNHVCLE9BQW5CLEdBQTZCLElBQTlCLEVBQW9DM3NCLFNBQXBDLENBQUQsQ0FBZ0RzSyxJQUFoRCxDQUFxRCxZQUFXO0FBQzlELFVBQU1zYixLQUFLLEdBQUcsY0FBZDtBQUNBLFFBQUl3RixTQUFTLEdBQUd4RixLQUFLLENBQUMzZixJQUFOLENBQVdqQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnVCxJQUFSLENBQWEsTUFBYixDQUFYLEVBQWlDLENBQWpDLENBQWhCOztBQUNBLFFBQUksQ0FBQzRWLGNBQWMsQ0FBQ0UsUUFBZixDQUF3QjFCLFNBQXhCLENBQUwsRUFBeUM7QUFDdkNBLGVBQVMsR0FBR0EsU0FBUyxDQUFDM2dCLFdBQVYsRUFBWjtBQUNEOztBQUNEekcsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNUYsR0FBUixDQUFZeXVCLFVBQVUsQ0FBQ3pCLFNBQUQsQ0FBdEI7QUFDRCxHQVBEO0FBUUFwbkIsR0FBQyxDQUFDLHlDQUFELEVBQTRDaEUsU0FBNUMsQ0FBRCxDQUF3RGttQixJQUF4RCxDQUE2RCxTQUE3RCxFQUF3RSxJQUF4RTtBQUNEO0FBRUQ7OztBQUNBLFNBQVNzRixnQkFBVCxDQUEwQnhyQixTQUExQixFQUFxQztBQUNuQyxHQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCM0QsT0FBeEIsQ0FBaUN5dUIsV0FBRCxJQUFpQjtBQUMvQyxVQUFNNkIsT0FBTyxHQUFHLDZCQUE2QjdCLFdBQTdCLEdBQTJDLFNBQTNEO0FBQ0E0QixlQUFXLENBQUNDLE9BQUQsRUFBVTdCLFdBQVYsRUFBdUIsb0JBQXZCLEVBQTZDOXFCLFNBQTdDLENBQVg7QUFDRCxHQUhEO0FBSUQ7QUFFRDs7O0FBQ0EsU0FBU21zQixnQkFBVCxDQUEwQnJCLFdBQTFCLEVBQXVDOXFCLFNBQXZDLEVBQWtEO0FBQ2hELFFBQU0rc0IsZ0JBQWdCLEdBQUdSLG1CQUFtQixDQUFDekIsV0FBRCxDQUE1QztBQUNBLE1BQUk2QixPQUFPLEdBQUcsb0JBQW9CSSxnQkFBbEM7O0FBQ0EsTUFBSXBDLFVBQVUsQ0FBQzNRLFFBQVgsQ0FBb0IsY0FBcEIsQ0FBSixFQUF5QztBQUN2Q2dULGlCQUFhLENBQUNsQyxXQUFELEVBQWNpQyxnQkFBZCxFQUFnQyxvQkFBaEMsRUFBc0Qvc0IsU0FBdEQsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMMHNCLGVBQVcsQ0FBQ0MsT0FBRCxFQUFVSSxnQkFBVixFQUE0QixvQkFBNUIsRUFBa0Qvc0IsU0FBbEQsQ0FBWDtBQUNEO0FBQ0YsQyxDQUVEOzs7QUFDQSxTQUFTZ3RCLGFBQVQsQ0FBdUJsQyxXQUF2QixFQUFvQ2lDLGdCQUFwQyxFQUFzRGh2QixJQUF0RCxFQUE0RGlDLFNBQTVELEVBQXVFO0FBQ3JFLFFBQU0yc0IsT0FBTyxHQUFHLG9CQUFvQjdCLFdBQXBDO0FBQ0EsUUFBTW1DLFlBQVksR0FBRyxvQkFBb0JGLGdCQUF6QztBQUNBL29CLEdBQUMsQ0FBQ2pHLElBQUksR0FBRyxTQUFQLEdBQW1CNHVCLE9BQW5CLEdBQTZCLElBQTlCLEVBQW9DM3NCLFNBQXBDLENBQUQsQ0FBZ0RzSyxJQUFoRCxDQUFxRCxZQUFXO0FBQzlELFVBQU1zYixLQUFLLEdBQUcsY0FBZDtBQUNBLFFBQUl3RixTQUFTLEdBQUd4RixLQUFLLENBQUMzZixJQUFOLENBQVdqQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnVCxJQUFSLENBQWEsTUFBYixDQUFYLEVBQWlDLENBQWpDLENBQWhCOztBQUNBLFFBQUlvVSxTQUFTLEtBQUssYUFBbEIsRUFBaUM7QUFDL0JBLGVBQVMsR0FBR0EsU0FBUyxDQUFDM2dCLFdBQVYsRUFBWjtBQUNEOztBQUNELFVBQU15aUIsUUFBUSxHQUFHLE1BQU1ELFlBQU4sR0FBcUIsR0FBckIsR0FBMkI3QixTQUE1QztBQUNBcG5CLEtBQUMsQ0FBQ2twQixRQUFELENBQUQsQ0FBWTl1QixHQUFaLENBQWdCNEYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNUYsR0FBUixFQUFoQjtBQUNELEdBUkQ7QUFTRCxDLENBRUQ7OztBQUNBLFNBQVNrdUIsaUJBQVQsQ0FBMkIxeEIsT0FBM0IsRUFBb0Nrd0IsV0FBcEMsRUFBaURNLFNBQWpELEVBQTREcHJCLFNBQTVELEVBQXVFO0FBQ3JFO0FBQ0EsUUFBTW10QixRQUFRLEdBQUducEIsQ0FBQyxDQUFDLFdBQVc4bUIsV0FBWCxHQUF5QixXQUF6QixHQUF1Q00sU0FBeEMsRUFBbURwckIsU0FBbkQsQ0FBRCxDQUErRDhXLElBQS9ELEVBQWpCLENBRnFFLENBSXJFOztBQUNBLFFBQU1zVyxhQUFhLEdBQUcsb0NBQW9DdEMsV0FBcEMsR0FBa0QsV0FBbEQsR0FBZ0VNLFNBQWhFLEdBQTRFLEdBQWxHO0FBQ0EsUUFBTWlDLGNBQWMsR0FBRyxzQ0FBc0NELGFBQTdELENBTnFFLENBUXJFOztBQUNBcHBCLEdBQUMsQ0FBQ3FwQixjQUFELENBQUQsQ0FBa0JqdkIsR0FBbEIsQ0FBc0IrdUIsUUFBdEIsRUFUcUUsQ0FXckU7O0FBQ0FucEIsR0FBQyxDQUFDcEosT0FBRCxDQUFELENBQVc2cUIsSUFBWCxDQUFnQjBILFFBQWhCOztBQUNBLE1BQUkvQixTQUFTLEtBQUssYUFBbEIsRUFBaUM7QUFDL0JwbkIsS0FBQyxDQUFDcEosT0FBRCxDQUFELENBQVc2cUIsSUFBWCxDQUFnQnpoQixDQUFDLENBQUMsV0FBVzhtQixXQUFYLEdBQXlCLHNCQUExQixFQUFrRDlxQixTQUFsRCxDQUFELENBQThEOFcsSUFBOUQsRUFBaEI7QUFDRCxHQWZvRSxDQWlCckU7OztBQUNBLE1BQUlzVSxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsUUFBSXBuQixDQUFDLENBQUMsV0FBVzhtQixXQUFYLEdBQXlCLFdBQXpCLEdBQXVDTSxTQUF4QyxFQUFtRHByQixTQUFuRCxDQUFELENBQStEOFcsSUFBL0QsR0FBc0VtVixJQUF0RSxPQUFpRixFQUFyRixFQUF5RjtBQUN2RmpvQixPQUFDLENBQUMsd0JBQXdCOG1CLFdBQXpCLENBQUQsQ0FBdUN4WixXQUF2QyxDQUFtRCxRQUFuRDtBQUNELEtBRkQsTUFFTztBQUNMdE4sT0FBQyxDQUFDLHdCQUF3QjhtQixXQUF6QixDQUFELENBQXVDOVosUUFBdkMsQ0FBZ0QsUUFBaEQ7QUFDRDtBQUNGLEdBeEJvRSxDQTBCckU7OztBQUNBaE4sR0FBQyxDQUFDLGtDQUFrQzhtQixXQUFuQyxDQUFELENBQWlEOVQsSUFBakQsQ0FBc0QsVUFBVWtWLGdCQUFnQixDQUFDZCxTQUFELENBQWhGLEVBQTZGK0IsUUFBN0Y7QUFDRDtBQUVEOzs7QUFDQSxTQUFTWCxZQUFULENBQXNCeHNCLFNBQXRCLEVBQWlDO0FBQy9CO0FBQ0FnRSxHQUFDLENBQUMsaUJBQUQsRUFBb0JoRSxTQUFwQixDQUFELENBQWdDakUsTUFBaEMsR0FGK0IsQ0FHL0I7O0FBQ0FpSSxHQUFDLENBQUMsdUJBQUQsRUFBMEJoRSxTQUExQixDQUFELENBQXNDc1IsV0FBdEMsQ0FBa0QsU0FBbEQsRUFKK0IsQ0FLL0I7O0FBQ0F0TixHQUFDLENBQUMsb0JBQUQsRUFBdUJoRSxTQUF2QixDQUFELENBQW1DZ1IsUUFBbkMsQ0FBNEMsUUFBNUM7QUFDQWhOLEdBQUMsQ0FBQyx5QkFBRCxFQUE0QmhFLFNBQTVCLENBQUQsQ0FBd0NzUixXQUF4QyxDQUFvRCxRQUFwRDtBQUNBdE4sR0FBQyxDQUFDLHlCQUFELEVBQTRCaEUsU0FBNUIsQ0FBRCxDQUF3Q2dSLFFBQXhDLENBQWlELFFBQWpELEVBUitCLENBUy9COztBQUNBaE4sR0FBQyxDQUFDLDhCQUFELEVBQWlDaEUsU0FBakMsQ0FBRCxDQUE2Q3NSLFdBQTdDLENBQXlELFFBQXpELEVBQW1FOEQsSUFBbkUsQ0FBd0UsT0FBeEUsRUFBaUZwRSxRQUFqRixDQUEwRixRQUExRjtBQUNBaE4sR0FBQyxDQUFDLG1DQUFELEVBQXNDaEUsU0FBdEMsQ0FBRCxDQUFrRHNSLFdBQWxELENBQThELFFBQTlEO0FBQ0F0TixHQUFDLENBQUMsaUNBQUQsRUFBb0NoRSxTQUFwQyxDQUFELENBQWdEc1IsV0FBaEQsQ0FBNEQsUUFBNUQ7QUFDRDtBQUVEOzs7QUFDQSxTQUFTbWEsaUJBQVQsQ0FBMkJ6ckIsU0FBM0IsRUFBc0M7QUFDcENnRSxHQUFDLENBQUMsbUNBQUQsRUFBc0NoRSxTQUF0QyxDQUFELENBQWtEbU8sSUFBbEQ7QUFDQW5LLEdBQUMsQ0FBQyx3QkFBRCxFQUEyQmhFLFNBQTNCLENBQUQsQ0FBdUNvTyxJQUF2QztBQUNBd2MsV0FBUyxDQUFDeGMsSUFBVjtBQUNBd2MsV0FBUyxDQUFDL0MsSUFBVixHQUFpQjFaLElBQWpCO0FBQ0FuSyxHQUFDLENBQUMsb0JBQUQsRUFBdUJoRSxTQUF2QixDQUFELENBQW1Dc1IsV0FBbkMsQ0FBK0MsU0FBL0M7QUFDQXROLEdBQUMsQ0FBQyxpQ0FBRCxFQUFvQ2hFLFNBQXBDLENBQUQsQ0FBZ0RzUixXQUFoRCxDQUE0RCxTQUE1RDtBQUNBdE4sR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIsQ0FBM0IsRUFBOEIyUCxTQUE5QixHQUEwQyxDQUExQztBQUNEO0FBRUQ7OztBQUNBLFNBQVMrWCxtQkFBVCxDQUE2QjFyQixTQUE3QixFQUF3QztBQUN0QztBQUNBLE1BQUk4cUIsV0FBVyxHQUFHQyxZQUFZLENBQUNKLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBWixDQUE0QixDQUE1QixDQUFsQjs7QUFDQSxNQUFJRyxXQUFXLEtBQUssY0FBcEIsRUFBb0M7QUFDbENBLGVBQVcsR0FBR0MsWUFBWSxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQVosQ0FBNEIsQ0FBNUIsQ0FBZDtBQUNEOztBQUNEM21CLEdBQUMsQ0FBQyxhQUFhOG1CLFdBQWIsR0FBMkIsUUFBNUIsRUFBc0M5cUIsU0FBdEMsQ0FBRCxDQUFrRG1PLElBQWxEO0FBQ0FuSyxHQUFDLENBQUMsYUFBYXVvQixtQkFBbUIsQ0FBQ3pCLFdBQUQsQ0FBaEMsR0FBZ0QsUUFBakQsRUFBMkQ5cUIsU0FBM0QsQ0FBRCxDQUF1RW9PLElBQXZFO0FBRUFwSyxHQUFDLENBQUMseUJBQUQsRUFBNEJoRSxTQUE1QixDQUFELENBQXdDc1IsV0FBeEMsQ0FBb0QsU0FBcEQ7QUFDQXROLEdBQUMsQ0FBQyxxREFBRCxFQUF3RGhFLFNBQXhELENBQUQsQ0FBb0VzUixXQUFwRSxDQUFnRixZQUFoRjtBQUNBdE4sR0FBQyxDQUFDLHNDQUFELEVBQXlDaEUsU0FBekMsQ0FBRCxDQUFxRGpFLE1BQXJEO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBUzR2QixtQkFBVCxDQUE2QjNyQixTQUE3QixFQUF3QztBQUN0Q2dFLEdBQUMsQ0FBQyxxQ0FBRCxFQUF3Q2hFLFNBQXhDLENBQUQsQ0FBb0RzSyxJQUFwRCxDQUF5RCxZQUFXO0FBQ2xFLFVBQU1nakIsT0FBTyxHQUFHdHBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTVILElBQVIsRUFBaEI7QUFDQSxVQUFNMHVCLFdBQVcsR0FBSSxLQUFLdkUsU0FBTCxDQUFlM2QsS0FBZixDQUFxQixLQUFyQixDQUFELENBQThCLENBQTlCLENBQXBCO0FBQ0EsVUFBTTJrQixVQUFVLEdBQUd0eEIsTUFBTSxDQUFDdXhCLElBQVAsQ0FBWUYsT0FBWixDQUFuQjtBQUVBQyxjQUFVLENBQUNseEIsT0FBWCxDQUFvQnpCLE9BQUQsSUFBYTtBQUM5QixVQUFJd3dCLFNBQVMsR0FBR3h3QixPQUFoQjs7QUFDQSxVQUFJQSxPQUFPLEtBQUssYUFBaEIsRUFBK0I7QUFDN0J3d0IsaUJBQVMsR0FBRyxhQUFaO0FBQ0Q7O0FBQ0QsWUFBTXFDLGFBQWEsR0FBRyxXQUFXM0MsV0FBWCxHQUF5QixHQUF6QixHQUErQk0sU0FBckQ7QUFDQSxZQUFNZ0MsYUFBYSxHQUFHLG9DQUFvQ3RDLFdBQXBDLEdBQWtELFdBQWxELEdBQWdFTSxTQUFoRSxHQUE0RSxLQUFsRztBQUNBLFlBQU1pQyxjQUFjLEdBQUcsd0JBQXdCRCxhQUEvQyxDQVA4QixDQVM5Qjs7QUFDQXBwQixPQUFDLENBQUNxcEIsY0FBRCxFQUFpQnJ0QixTQUFqQixDQUFELENBQTZCNUIsR0FBN0IsQ0FBaUNrdkIsT0FBTyxDQUFDMXlCLE9BQUQsQ0FBeEM7O0FBQ0EsVUFBSUEsT0FBTyxLQUFLLGFBQWhCLEVBQStCO0FBQzdCO0FBQ0FvSixTQUFDLENBQUN5cEIsYUFBRCxDQUFELENBQWlCaEksSUFBakIsQ0FBc0I2SCxPQUFPLENBQUMxeUIsT0FBRCxDQUE3QjtBQUNEO0FBQ0YsS0FmRDtBQWdCRCxHQXJCRDtBQXNCRCxDLENBRUQ7OztBQUNBLFNBQVNzd0IsV0FBVCxDQUFxQkosV0FBckIsRUFBa0M5cUIsU0FBbEMsRUFBNkM7QUFDM0NnRSxHQUFDLENBQUMsd0JBQUQsRUFBMkJoRSxTQUEzQixDQUFELENBQXVDb08sSUFBdkM7QUFDQXBLLEdBQUMsQ0FBQyxtQ0FBRCxFQUFzQ2hFLFNBQXRDLENBQUQsQ0FBa0RvTyxJQUFsRDtBQUVBcEssR0FBQyxDQUFDLHVDQUFELEVBQTBDaEUsU0FBMUMsQ0FBRCxDQUFzRHNSLFdBQXRELENBQWtFLFFBQWxFO0FBQ0F0TixHQUFDLENBQUMsdUNBQUQsRUFBMENoRSxTQUExQyxDQUFELENBQXNENUIsR0FBdEQsQ0FBMEQsRUFBMUQ7QUFDQTRGLEdBQUMsQ0FBQyxvQkFBRCxFQUF1QmhFLFNBQXZCLENBQUQsQ0FBbUNnUixRQUFuQyxDQUE0QyxTQUE1QyxFQU4yQyxDQVEzQzs7QUFDQWhOLEdBQUMsQ0FBQyxvQ0FBRCxFQUF1Q2hFLFNBQXZDLENBQUQsQ0FBbURvTyxJQUFuRDtBQUNBcEssR0FBQyxDQUFDLDZCQUE2QjhtQixXQUE3QixHQUEyQyxVQUE1QyxFQUF3RDlxQixTQUF4RCxDQUFELENBQW9FbU8sSUFBcEU7QUFDRDtBQUVEOzs7QUFDQSxTQUFTNmMsaUJBQVQsQ0FBMkJGLFdBQTNCLEVBQXdDNEMsWUFBeEMsRUFBc0QxdEIsU0FBdEQsRUFBaUU7QUFDL0RnRSxHQUFDLENBQUMsTUFBTTBwQixZQUFOLEdBQXFCLEdBQXJCLEdBQTJCNUMsV0FBM0IsR0FBeUMsUUFBMUMsRUFBb0Q5cUIsU0FBcEQsQ0FBRCxDQUFnRW1PLElBQWhFO0FBQ0FuSyxHQUFDLENBQUMsTUFBTTBwQixZQUFOLEdBQXFCLEdBQXJCLEdBQTJCbkIsbUJBQW1CLENBQUN6QixXQUFELENBQTlDLEdBQThELFFBQS9ELEVBQXlFOXFCLFNBQXpFLENBQUQsQ0FBcUZvTyxJQUFyRixHQUYrRCxDQUkvRDs7QUFDQXVjLFlBQVUsQ0FBQzNaLFFBQVgsQ0FBb0I4WixXQUFwQjtBQUNBSCxZQUFVLENBQUNyWixXQUFYLENBQXVCaWIsbUJBQW1CLENBQUN6QixXQUFELENBQTFDO0FBQ0Q7QUFFRDs7QUFDQTs7QUFDQTtBQUVBOzs7QUFDQSxTQUFTQyxZQUFULENBQXNCbndCLE9BQXRCLEVBQStCO0FBQzdCLFNBQU9BLE9BQU8sQ0FBQzJyQixTQUFSLENBQWtCM2QsS0FBbEIsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU3NqQixnQkFBVCxDQUEwQmQsU0FBMUIsRUFBcUM7QUFDbkMsUUFBTXVDLE9BQU8sR0FBRyxVQUFVMW5CLElBQVYsQ0FBZW1sQixTQUFmLENBQWhCOztBQUNBLE1BQUl1QyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsV0FBTyxDQUFDdkMsU0FBUyxDQUFDMWhCLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0Jpa0IsT0FBTyxDQUFDeEQsS0FBNUIsSUFBcUMsR0FBckMsR0FBMkNpQixTQUFTLENBQUMxaEIsTUFBVixDQUFpQmlrQixPQUFPLENBQUN4RCxLQUF6QixFQUFnQ2lCLFNBQVMsQ0FBQzN0QixNQUExQyxDQUE1QyxFQUErRmdOLFdBQS9GLEVBQVA7QUFDRDs7QUFFRCxTQUFPMmdCLFNBQVA7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNtQixtQkFBVCxDQUE2QnpCLFdBQTdCLEVBQTBDO0FBQ3hDLFNBQVFBLFdBQVcsS0FBSyxVQUFqQixHQUErQixTQUEvQixHQUEyQyxVQUFsRDtBQUNEOztrQkFFY0QsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0V2Y7Ozs7OztBQUVBLE1BQU0rQyxzQkFBc0IsR0FBRyxrQkFBL0I7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyx3QkFBckM7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyx3Q0FBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyx3Q0FBekI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVMxRixhQUFULEdBQXlCO0FBQ3ZDdGtCLEdBQUMsQ0FBQyxvREFBRCxDQUFELENBQXdEOEMsRUFBeEQsQ0FBMkQsT0FBM0QsRUFBb0UsVUFBU25JLEtBQVQsRUFBZ0I7QUFDbEYsVUFBTXN2QixVQUFVLEdBQUdqcUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNUgsSUFBUixDQUFhLGFBQWIsQ0FBbkI7O0FBQ0EsUUFBRzZ4QixVQUFVLEtBQUs1dkIsU0FBbEIsRUFBNkI7QUFDM0IyRixPQUFDLENBQUMscUNBQXFDaXFCLFVBQXJDLEdBQWtELElBQW5ELENBQUQsQ0FBMEQzYyxXQUExRCxDQUFzRSxrQkFBdEU7QUFDRCxLQUZELE1BRU87QUFDTHROLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDc04sV0FBakMsQ0FBNkMsa0JBQTdDO0FBQ0Q7O0FBQ0R0TixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFnTixRQUFSLENBQWlCLGtCQUFqQjtBQUNELEdBUkQ7QUFVQWhOLEdBQUMsQ0FBQyxrREFBRCxDQUFELENBQXNEb0ssSUFBdEQ7QUFDQXBLLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQ0c4QyxFQURILENBQ00sWUFETixFQUNvQixZQUFXO0FBQzNCLFFBQUk5QyxDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJSLE9BQUMsQ0FBQyxxQkFBRCxFQUF3QixJQUF4QixDQUFELENBQStCbUssSUFBL0I7QUFDRDtBQUNGLEdBTEgsRUFLS3JILEVBTEwsQ0FLUSxZQUxSLEVBS3NCLFlBQVc7QUFDL0I5QyxLQUFDLENBQUMscUJBQUQsRUFBd0IsSUFBeEIsQ0FBRCxDQUErQm9LLElBQS9CO0FBQ0QsR0FQRDtBQVNBcEssR0FBQyxDQUFDLDZDQUFELENBQUQsQ0FBaUQ4QyxFQUFqRCxDQUFvRCxPQUFwRCxFQUE2RCxVQUFTM0wsQ0FBVCxFQUFZO0FBQ3ZFQSxLQUFDLENBQUNJLGNBQUY7QUFDQSxVQUFNMnlCLGFBQWEsR0FBR2xxQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFqRixPQUFSLENBQWdCLE1BQWhCLENBQXRCO0FBQ0EsVUFBTW92QixZQUFZLEdBQUducUIsQ0FBQyxDQUFDLGtCQUFrQkEsQ0FBQyxDQUFDa3FCLGFBQUQsQ0FBRCxDQUFpQjl4QixJQUFqQixDQUFzQixhQUF0QixDQUFsQixHQUF5RCxZQUExRCxDQUFELENBQXlFcUIsTUFBOUY7QUFDQSxVQUFNMndCLGdCQUFnQixHQUFHcHFCLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCdkcsTUFBOUM7O0FBQ0EsUUFBRzB3QixZQUFZLEdBQUcsQ0FBZixJQUFvQkEsWUFBWSxHQUFHQyxnQkFBdEMsRUFBeUQ7QUFDdkRwcUIsT0FBQyxDQUFDa3FCLGFBQUQsQ0FBRCxDQUFpQjlTLElBQWpCLENBQXNCLG9DQUF0QixFQUE0RDlKLFdBQTVELENBQXdFLFFBQXhFLEVBQWtGTixRQUFsRixDQUEyRixTQUEzRjtBQUNELEtBRkQsTUFFTyxJQUFJbWQsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzdCbnFCLE9BQUMsQ0FBQ2txQixhQUFELENBQUQsQ0FBaUI5UyxJQUFqQixDQUFzQixnQkFBdEIsRUFBd0M5SixXQUF4QyxDQUFvRCxRQUFwRCxFQUE4RE4sUUFBOUQsQ0FBdUUsU0FBdkU7QUFDRCxLQUZNLE1BRUE7QUFDTGhOLE9BQUMsQ0FBQ2txQixhQUFELENBQUQsQ0FBaUI5UyxJQUFqQixDQUFzQixnQkFBdEIsRUFBd0NwSyxRQUF4QyxDQUFpRCxRQUFqRCxFQUEyRE0sV0FBM0QsQ0FBdUUsU0FBdkU7QUFDQXROLE9BQUMsQ0FBQ2txQixhQUFELENBQUQsQ0FBaUJ6c0IsT0FBakIsQ0FBeUIsUUFBekI7QUFDRDtBQUNGLEdBYkQ7QUFlQXVDLEdBQUMsQ0FBQyw4RUFBRCxDQUFELENBQWtGOEMsRUFBbEYsQ0FBcUYsUUFBckYsRUFBK0YsVUFBUzNMLENBQVQsRUFBWTtBQUN6RzZJLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWpGLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUJxYyxJQUF2QixDQUE0Qix1QkFBNUIsRUFBcURwSyxRQUFyRCxDQUE4RCxlQUE5RCxFQUErRUEsUUFBL0UsQ0FBd0YsUUFBeEYsRUFBa0dNLFdBQWxHLENBQThHLFNBQTlHO0FBQ0QsR0FGRDtBQUdELENBdkNEOztBQXlDQSxNQUFNK2MsY0FBYyxHQUFHLFNBQVNDLHNCQUFULEdBQWtDO0FBQ3ZELFFBQU1DLFdBQVcsR0FBRzd5QixNQUFNLENBQUNDLFFBQVAsQ0FBZ0I2eUIsTUFBcEM7QUFDQSxRQUFNQyxRQUFRLEdBQUdGLFdBQVcsQ0FBQzd1QixPQUFaLENBQW9CLFVBQXBCLENBQWpCO0FBQ0EsUUFBTWd2QixVQUFVLEdBQUcxcUIsQ0FBQyxDQUFDLDRCQUFELENBQXBCO0FBRUEsTUFBSTJxQixXQUFKO0FBQ0EsTUFBSUMsaUJBQUo7O0FBRUEsTUFBSUYsVUFBVSxDQUFDanhCLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekJreEIsZUFBVyxHQUFHRSxpQkFBaUIsQ0FBQ0gsVUFBRCxFQUFhZCxzQkFBYixDQUEvQjtBQUNBZ0IscUJBQWlCLEdBQUdDLGlCQUFpQixDQUFDSCxVQUFELEVBQWFiLDRCQUFiLENBQXJDLENBRnlCLENBSXpCOztBQUNBYSxjQUFVLENBQUM1bkIsRUFBWCxDQUFjLE9BQWQsRUFBdUIsVUFBUzNMLENBQVQsRUFBWTtBQUNqQyxVQUFHQSxDQUFDLENBQUN5b0IsS0FBRixLQUFZLENBQVosSUFBaUIsQ0FBQ2tMLEtBQUssQ0FBQ3BvQixNQUFNLENBQUNxb0IsWUFBUCxDQUFvQjV6QixDQUFDLENBQUN5b0IsS0FBdEIsQ0FBRCxDQUExQixFQUF5RDtBQUN2RG9MLHlCQUFpQixDQUFDTCxXQUFELEVBQWMzcUIsQ0FBQyxDQUFDNHBCLHNCQUFELENBQWYsQ0FBakI7QUFDQW9CLHlCQUFpQixDQUFDSixpQkFBRCxFQUFvQjVxQixDQUFDLENBQUM2cEIsNEJBQUQsQ0FBckIsQ0FBakI7QUFDRDtBQUNGLEtBTEQ7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNFOzs7QUFDQSxRQUFNb0IsZUFBZSxHQUFHanJCLENBQUMsQ0FBQyxtQkFBRCxDQUF6QjtBQUNBaXJCLGlCQUFlLENBQUMza0IsSUFBaEIsQ0FBcUIsVUFBVTZmLEtBQVYsRUFBa0I7QUFDckMsUUFBRyxLQUFLdG9CLE9BQVIsRUFBaUI7QUFDZm1DLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9SLElBQVIsQ0FBYSxPQUFiLEVBQXNCcEUsUUFBdEIsQ0FBK0IsVUFBL0I7QUFDQWhOLE9BQUMsQ0FBQyxvQkFBb0JBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdULElBQVIsQ0FBYSxJQUFiLENBQXBCLEdBQXlDLElBQTFDLENBQUQsQ0FBaURBLElBQWpELENBQXNELFNBQXRELEVBQWlFLFNBQWpFLEVBQTRFNUIsSUFBNUUsQ0FBaUYsT0FBakYsRUFBMEZwRSxRQUExRixDQUFtRyxVQUFuRztBQUNEO0FBQ0YsR0FMRDtBQU1BaWUsaUJBQWUsQ0FBQ25vQixFQUFoQixDQUFtQixRQUFuQixFQUE2QixVQUFTM0wsQ0FBVCxFQUFZO0FBQ3ZDLFFBQUdBLENBQUMsQ0FBQ3FDLE1BQUYsQ0FBU3FFLE9BQVosRUFBcUI7QUFDbkJtQyxPQUFDLENBQUM3SSxDQUFDLENBQUNxQyxNQUFILENBQUQsQ0FBWTRYLElBQVosQ0FBaUIsT0FBakIsRUFBMEJwRSxRQUExQixDQUFtQyxVQUFuQztBQUNELEtBRkQsTUFFTztBQUNMaE4sT0FBQyxDQUFDN0ksQ0FBQyxDQUFDcUMsTUFBSCxDQUFELENBQVk0WCxJQUFaLENBQWlCLE9BQWpCLEVBQTBCOUQsV0FBMUIsQ0FBc0MsVUFBdEM7QUFDRDtBQUNGLEdBTkQsRUFoQ3VELENBdUN2RDs7QUFDQXROLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCOEMsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBUzNMLENBQVQsRUFBWTtBQUM3Q0EsS0FBQyxDQUFDSSxjQUFGO0FBQ0EyekIsbUJBQWUsQ0FBQ1AsV0FBRCxFQUFjM3FCLENBQUMsQ0FBQzRwQixzQkFBRCxDQUFmLENBQWY7QUFDQXNCLG1CQUFlLENBQUNOLGlCQUFELEVBQW9CNXFCLENBQUMsQ0FBQzZwQiw0QkFBRCxDQUFyQixDQUFmO0FBQ0E3cEIsS0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JzaEIsTUFBeEI7QUFDRCxHQUxEO0FBT0E7QUFDRjtBQUNBO0FBQ0U7O0FBQ0F0aEIsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I4QyxFQUEvQixDQUFrQyxRQUFsQyxFQUE0QyxVQUFTM0wsQ0FBVCxFQUFZO0FBQ3RELFVBQU1nMEIsWUFBWSxHQUFHbnJCLENBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZcEIsSUFBWixDQUFpQixJQUFqQixDQUFyQjs7QUFDQSxRQUFHakIsQ0FBQyxDQUFDcUMsTUFBRixDQUFTcUUsT0FBWixFQUFxQjtBQUNuQm1DLE9BQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZNFgsSUFBWixDQUFpQixPQUFqQixFQUEwQnBFLFFBQTFCLENBQW1DLFVBQW5DO0FBQ0FoTixPQUFDLENBQUMsTUFBTW1yQixZQUFQLENBQUQsQ0FBc0JuWSxJQUF0QixDQUEyQixTQUEzQixFQUFzQyxTQUF0QyxFQUFpRDVCLElBQWpELENBQXNELE9BQXRELEVBQStEcEUsUUFBL0QsQ0FBd0UsVUFBeEU7QUFDRCxLQUhELE1BR087QUFDTGhOLE9BQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZNFgsSUFBWixDQUFpQixPQUFqQixFQUEwQjlELFdBQTFCLENBQXNDLFVBQXRDO0FBQ0F0TixPQUFDLENBQUMsTUFBTW1yQixZQUFQLENBQUQsQ0FBc0JoVSxVQUF0QixDQUFpQyxTQUFqQyxFQUE0Qy9GLElBQTVDLENBQWlELE9BQWpELEVBQTBEOUQsV0FBMUQsQ0FBc0UsVUFBdEU7QUFDRDtBQUNGLEdBVEQsRUFuRHVELENBOER2RDs7QUFDQXROLEdBQUMsQ0FBQywrREFBRCxDQUFELENBQW1FOEMsRUFBbkUsQ0FBc0UsUUFBdEUsRUFBZ0YsVUFBUzNMLENBQVQsRUFBWTtBQUMxRjZJLEtBQUMsQ0FBQyxpREFBRCxDQUFELENBQXFEbVgsVUFBckQsQ0FBZ0UsU0FBaEU7QUFDQW5YLEtBQUMsQ0FBQywrREFBRCxDQUFELENBQW1Fc04sV0FBbkUsQ0FBK0UsU0FBL0U7QUFDQXROLEtBQUMsQ0FBQzdJLENBQUMsQ0FBQ3FDLE1BQUgsQ0FBRCxDQUFZd1osSUFBWixDQUFpQixTQUFqQixFQUE0QixTQUE1QjtBQUNBaFQsS0FBQyxDQUFDN0ksQ0FBQyxDQUFDcUMsTUFBSCxDQUFELENBQVk0WCxJQUFaLENBQWlCLFlBQWpCLEVBQStCZ0csSUFBL0IsQ0FBb0MsVUFBcEMsRUFBZ0RwSyxRQUFoRCxDQUF5RCxTQUF6RDtBQUNELEdBTEQsRUEvRHVELENBc0V2RDs7QUFDQWhOLEdBQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEOEMsRUFBakQsQ0FBb0QsT0FBcEQsRUFBNkQsVUFBUzNMLENBQVQsRUFBWTtBQUN2RUEsS0FBQyxDQUFDSSxjQUFGOztBQUNBLFFBQUd5SSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjVGLEdBQTVCLE9BQXNDLFdBQXpDLEVBQXNEO0FBQ3BENEYsT0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJqSSxNQUE1QjtBQUNBaUksT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnVCxJQUE5QixDQUFtQyxTQUFuQyxFQUE4QyxJQUE5QyxFQUFvRDFGLFdBQXBELENBQWdFLFFBQWhFLEVBQTBFTixRQUExRSxDQUFtRixnQkFBbkY7QUFDRDs7QUFDRGtlLG1CQUFlLENBQUNQLFdBQUQsRUFBYzNxQixDQUFDLENBQUM0cEIsc0JBQUQsQ0FBZixDQUFmO0FBQ0FzQixtQkFBZSxDQUFDTixpQkFBRCxFQUFvQjVxQixDQUFDLENBQUM2cEIsNEJBQUQsQ0FBckIsQ0FBZjtBQUNBN3BCLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWpGLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0J1bUIsTUFBeEI7QUFDRCxHQVRELEVBdkV1RCxDQWtGdkQ7O0FBQ0F0aEIsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I4QyxFQUEvQixDQUFrQyxrQkFBbEMsRUFBc0QsVUFBUzNMLENBQVQsRUFBWTtBQUNoRSxRQUFJNkksQ0FBQyxDQUFDekcsUUFBRCxDQUFELENBQVlpSCxLQUFaLE1BQXVCLElBQTNCLEVBQWlDO0FBQy9CNHFCLHNCQUFnQjtBQUNoQixZQUFNdEssaUJBQWlCLEdBQUc5Z0IsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J3VSxXQUF0QixLQUFzQ3hVLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0IsTUFBcEIsRUFBaEU7QUFDQWhCLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZ0YsR0FBN0IsQ0FBaUMsS0FBakMsRUFBd0M4YixpQkFBaUIsR0FBRyxJQUE1RDtBQUVBOWdCLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZ04sUUFBN0IsQ0FBc0MsTUFBdEM7QUFDQWhOLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdOLFFBQVYsQ0FBbUIsa0JBQW5CO0FBQ0FoTixPQUFDLENBQUMsUUFBRCxFQUFXQSxDQUFDLENBQUM2cEIsNEJBQUQsQ0FBWixDQUFELENBQTZDdmMsV0FBN0MsQ0FBeUQsUUFBekQ7QUFDRDtBQUNGLEdBVkQsRUFVR3hLLEVBVkgsQ0FVTSxvQkFWTixFQVU0QixVQUFTM0wsQ0FBVCxFQUFZO0FBQ3RDLFFBQUk2SSxDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosTUFBdUIsSUFBM0IsRUFBaUM7QUFDL0JSLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCc04sV0FBN0IsQ0FBeUMsTUFBekM7QUFDQXROLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXNOLFdBQVYsQ0FBc0Isa0JBQXRCO0FBQ0F0TixPQUFDLENBQUMsUUFBRCxFQUFXQSxDQUFDLENBQUM2cEIsNEJBQUQsQ0FBWixDQUFELENBQTZDN2MsUUFBN0MsQ0FBc0QsUUFBdEQ7QUFDRDtBQUNGLEdBaEJEO0FBa0JBO0FBQ0Y7QUFDQTtBQUNFOztBQUNBLE1BQUl5ZCxRQUFRLEtBQUssQ0FBQyxDQUFsQixFQUFxQjtBQUNuQnpxQixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnNOLFdBQXBCLENBQWdDLFFBQWhDO0FBQ0QsR0EzR3NELENBNEd2RDs7O0FBQ0F0TixHQUFDLENBQUMsUUFBRCxFQUFXQSxDQUFDLENBQUM2cEIsNEJBQUQsQ0FBWixDQUFELENBQTZDL21CLEVBQTdDLENBQWdELE9BQWhELEVBQXlELFVBQVMzTCxDQUFULEVBQVk7QUFDbkVBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBeUksS0FBQyxDQUFDLGtCQUFELEVBQXFCQSxDQUFDLENBQUM2cEIsNEJBQUQsQ0FBdEIsQ0FBRCxDQUF1RHBzQixPQUF2RCxDQUErRCxPQUEvRDtBQUNELEdBSEQ7QUFJRCxDQWpIRDtBQW1IQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU0ydEIsZ0JBQWdCLEdBQUcsU0FBU0Msc0JBQVQsR0FBa0M7QUFDekQsTUFBSXJyQixDQUFDLENBQUN6RyxRQUFELENBQUQsQ0FBWWlILEtBQVosS0FBc0IsSUFBMUIsRUFBZ0M7QUFDOUJSLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCc04sV0FBN0IsQ0FBeUMsTUFBekM7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNZ2UsZUFBZSxHQUFHdHJCLENBQUMsQ0FBQyxrQkFBRCxDQUF6QjtBQUNBLFVBQU11ckIsWUFBWSxHQUFHdnJCLENBQUMsQ0FBQyxnQkFBRCxDQUF0QjtBQUNBLFVBQU1paEIsWUFBWSxHQUFHcUssZUFBZSxDQUFDdHFCLE1BQWhCLEtBQTJCdXFCLFlBQVksQ0FBQ3ZxQixNQUFiLEVBQWhEO0FBQ0EsVUFBTThmLGlCQUFpQixHQUFHd0ssZUFBZSxDQUFDOVcsV0FBaEIsS0FBZ0MrVyxZQUFZLENBQUN2cUIsTUFBYixFQUExRDtBQUNBLFVBQU13cUIseUJBQXlCLEdBQUd4ckIsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNnQixNQUEzQyxLQUFzRGhCLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLE1BQVosRUFBdEQsR0FBNkVoQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cd1UsV0FBbkIsRUFBN0UsR0FBZ0gsRUFBbEo7QUFDQXhVLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCZ0YsR0FBNUIsQ0FBZ0MsUUFBaEMsRUFBMEMsaUJBQWlCaWMsWUFBakIsR0FBZ0MsS0FBMUU7QUFDQWpoQixLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmdGLEdBQTdCLENBQWlDLEtBQWpDLEVBQXdDOGIsaUJBQWlCLEdBQUcsSUFBNUQ7QUFDQTlnQixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCZ0YsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0J3bUIseUJBQXlCLEdBQUcsSUFBM0Q7QUFDRDtBQUNGLENBYkQ7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1gsaUJBQVQsQ0FBMkJILFVBQTNCLEVBQXVDZSxpQkFBdkMsRUFBMEQ7QUFDeEQsUUFBTUMsY0FBYyxHQUFHMXJCLENBQUMsQ0FBQ3lyQixpQkFBRCxDQUF4QjtBQUNBLFFBQU1FLFVBQVUsR0FBRzNyQixDQUFDLENBQUMsYUFBRCxFQUFnQjByQixjQUFoQixDQUFELENBQWlDLENBQWpDLENBQW5CO0FBQ0EsUUFBTUUsUUFBUSxHQUFHNXJCLENBQUMsQ0FBQzhwQixnQkFBRCxFQUFtQjRCLGNBQW5CLENBQWxCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHN3JCLENBQUMsQ0FBQytwQixnQkFBRCxFQUFtQjJCLGNBQW5CLENBQWxCLENBSndELENBS3hEOztBQUNBLFFBQU1JLGFBQWEsR0FBR3JxQixVQUFVLENBQUNpcEIsVUFBVSxDQUFDcUIsS0FBWCxHQUFtQjN6QixJQUFuQixDQUF3QixLQUF4QixDQUFELENBQWhDO0FBQ0EsUUFBTTR6QixhQUFhLEdBQUd2cUIsVUFBVSxDQUFDaXBCLFVBQVUsQ0FBQ3FCLEtBQVgsR0FBbUIzekIsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBRCxDQUFoQztBQUNBLFFBQU02ekIsa0JBQWtCLEdBQUc7QUFDekJDLFNBQUssRUFBRSxDQUFDTixRQUFRLENBQUN4eEIsR0FBVCxFQUFELEVBQWlCeXhCLFFBQVEsQ0FBQ3p4QixHQUFULEVBQWpCLENBRGtCO0FBR3pCK3hCLFNBQUssRUFBRTtBQUNMLGFBQU8sQ0FBQ0wsYUFBRCxDQURGO0FBRUwsYUFBTyxDQUFDRSxhQUFEO0FBRkYsS0FIa0I7QUFPekJJLFFBQUksRUFBRSxDQVBtQjtBQVF6QkMsV0FBTyxFQUFFLElBUmdCO0FBU3pCQyxVQUFNLEVBQUU7QUFDTkMsUUFBRSxFQUFFLFlBQVVwekIsS0FBVixFQUFpQjtBQUNuQixlQUFPQSxLQUFQO0FBQ0QsT0FISztBQUlOcXpCLFVBQUksRUFBRSxjQUFVcnpCLEtBQVYsRUFBaUI7QUFDckIsZUFBT0EsS0FBUDtBQUNEO0FBTkssS0FUaUI7QUFpQnpCc3pCLGFBQVMsRUFBRSxLQWpCYztBQWtCekJDLFlBQVEsRUFBRTtBQWxCZSxHQUEzQjs7QUFxQkEsUUFBTUMsTUFBTSxHQUFHQyxxQkFBV3JnQixNQUFYLENBQWtCb2YsVUFBbEIsRUFBOEJNLGtCQUE5QixDQUFmOztBQUNBVSxRQUFNLENBQUM3cEIsRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU3FtQixRQUFULEVBQW1CO0FBQ3BDeUMsWUFBUSxDQUFDeHhCLEdBQVQsQ0FBYWljLFFBQVEsQ0FBQzhTLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBckI7QUFDQTBDLFlBQVEsQ0FBQ3p4QixHQUFULENBQWFpYyxRQUFRLENBQUM4UyxRQUFRLENBQUMsQ0FBRCxDQUFULENBQXJCO0FBQ0QsR0FIRDtBQUtBLFNBQU93RCxNQUFQO0FBQ0Q7O0FBRUQsU0FBUzNCLGlCQUFULENBQTJCTCxXQUEzQixFQUF3Q2UsY0FBeEMsRUFBd0Q7QUFDdEQsUUFBTUUsUUFBUSxHQUFHNXJCLENBQUMsQ0FBQzhwQixnQkFBRCxFQUFtQjRCLGNBQW5CLENBQWxCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHN3JCLENBQUMsQ0FBQytwQixnQkFBRCxFQUFtQjJCLGNBQW5CLENBQWxCO0FBRUEsUUFBTXZDLFFBQVEsR0FBRyxDQUFDeUMsUUFBUSxDQUFDeHhCLEdBQVQsRUFBRCxFQUFpQnl4QixRQUFRLENBQUN6eEIsR0FBVCxFQUFqQixDQUFqQjtBQUNBdXdCLGFBQVcsQ0FBQ25pQixHQUFaLENBQWdCMmdCLFFBQWhCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTK0IsZUFBVCxDQUF5QjJCLGlCQUF6QixFQUE0Q25CLGNBQTVDLEVBQTREO0FBQzFELFFBQU1FLFFBQVEsR0FBRzVyQixDQUFDLENBQUM4cEIsZ0JBQUQsRUFBbUI0QixjQUFuQixDQUFsQjtBQUNBLFFBQU1HLFFBQVEsR0FBRzdyQixDQUFDLENBQUMrcEIsZ0JBQUQsRUFBbUIyQixjQUFuQixDQUFsQjtBQUNBLFFBQU1oQixVQUFVLEdBQUcxcUIsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0MrckIsS0FBaEMsRUFBbkI7QUFDQSxNQUFJZSxhQUFhLEdBQUdsQixRQUFRLENBQUN4eEIsR0FBVCxFQUFwQjtBQUNBLE1BQUkyeUIsYUFBYSxHQUFHbEIsUUFBUSxDQUFDenhCLEdBQVQsRUFBcEI7O0FBQ0EsTUFBSXd4QixRQUFRLENBQUN4eEIsR0FBVCxLQUFpQnN3QixVQUFVLENBQUN0eUIsSUFBWCxDQUFnQixLQUFoQixDQUFyQixFQUE2QztBQUMzQzAwQixpQkFBYSxHQUFHcEMsVUFBVSxDQUFDdHlCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFDRDs7QUFDRCxNQUFJd3pCLFFBQVEsQ0FBQ3h4QixHQUFULEtBQWlCc3dCLFVBQVUsQ0FBQ3R5QixJQUFYLENBQWdCLEtBQWhCLENBQXJCLEVBQTZDO0FBQzNDMDBCLGlCQUFhLEdBQUdwQyxVQUFVLENBQUN0eUIsSUFBWCxDQUFnQixLQUFoQixDQUFoQjtBQUNEOztBQUNEd3pCLFVBQVEsQ0FBQ3h4QixHQUFULENBQWEweUIsYUFBYjs7QUFDQSxNQUFJakIsUUFBUSxDQUFDenhCLEdBQVQsS0FBaUJzd0IsVUFBVSxDQUFDdHlCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBckIsRUFBNkM7QUFDM0MyMEIsaUJBQWEsR0FBR3JDLFVBQVUsQ0FBQ3R5QixJQUFYLENBQWdCLEtBQWhCLENBQWhCO0FBQ0Q7O0FBQ0QsTUFBSXl6QixRQUFRLENBQUN6eEIsR0FBVCxLQUFpQnN3QixVQUFVLENBQUN0eUIsSUFBWCxDQUFnQixLQUFoQixDQUFyQixFQUE2QztBQUMzQzIwQixpQkFBYSxHQUFHckMsVUFBVSxDQUFDdHlCLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFDRDs7QUFDRHl6QixVQUFRLENBQUN6eEIsR0FBVCxDQUFhMnlCLGFBQWI7QUFDQUYsbUJBQWlCLENBQUNya0IsR0FBbEIsQ0FBc0IsQ0FBQ3NrQixhQUFELEVBQWdCQyxhQUFoQixDQUF0QjtBQUNEOztRQUVRL0MsTyxHQUFBQSxPO1FBQVNLLGMsR0FBQUEsYztRQUFnQmUsZ0IsR0FBQUEsZ0I7Ozs7Ozs7Ozs7Ozs7QUN2UWxDO0FBQWUsZ0hBQWlELEU7Ozs7Ozs7Ozs7OztBQ0FoRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxrSEFBbUQsRTs7Ozs7Ozs7Ozs7O0FDQWxFO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSwyR0FBNEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsOEdBQStDLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQXhEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUscUhBQXNELEU7Ozs7Ozs7Ozs7OztBQ0FyRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7OztBQ0F4RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250QXdlc29tZSBJY29uc1xuLy8gSW1wb3J0IGljb25zIG9uZSBieSBvbmUgdG8gcmVkdWNlIHNpemUgb2YgdGhlIG91dHB1dFxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3Rhcic7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2hvcHBpbmdCYWcnO1xuaW1wb3J0IHsgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrJztcbmltcG9ydCB7IGZhRXhjbGFtYXRpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQgeyBmYUluZm9DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcbmltcG9ydCB7IGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hldnJvblVwJztcbmltcG9ydCB7IGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTWFwTWFya2VyQWx0JztcbmltcG9ydCB7IGZhU2h1dHRsZVZhbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNodXR0bGVWYW4nO1xuaW1wb3J0IHsgZmFDcmVkaXRDYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ3JlZGl0Q2FyZCc7XG5pbXBvcnQgeyBmYUZsYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnJztcbmltcG9ydCB7IGZhQ2NNYXN0ZXJjYXJkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZCc7XG5pbXBvcnQgeyBmYUNjVmlzYSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1Zpc2EnO1xuaW1wb3J0IHsgZmFDY1BheXBhbCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY1BheXBhbCc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2gnO1xuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cyc7XG5pbXBvcnQgeyBmYVBlbmNpbEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdCc7XG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFRdWVzdGlvbkNpcmNsZSc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSwgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsIGZhU3luY0FsdCk7XG5kb20ud2F0Y2goKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9yLnJlc3BvbnNlLmRhdGEpLmZvckVhY2goKFssIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2UuZXJyb3JzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNMb2FkYWJsZUZvcm1zO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFByb3ZpbmNlSW5wdXRWYWx1ZSh2YWx1ZVNlbGVjdG9yKSB7XG4gIGNvbnN0IHZhbCA9IHZhbHVlU2VsZWN0b3IgPyB2YWx1ZVNlbGVjdG9yLnZhbHVlIDogbnVsbDtcbiAgcmV0dXJuICF2YWwgfHwgdmFsID09IHVuZGVmaW5lZCA/ICcnIDogYHZhbHVlPVwiJHt2YWx9XCJgO1xufTtcblxuXG5jb25zdCBTeWxpdXNQcm92aW5jZUZpZWxkID0gZnVuY3Rpb24gU3lsaXVzUHJvdmluY2VGaWVsZCgpIHtcbiAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdFtuYW1lJD1cIltjb3VudHJ5Q29kZV1cIl0nKTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIGNvdW50cnlTZWxlY3QuZm9yRWFjaCgoY291bnRyeVNlbGVjdEl0ZW0pID0+IHtcbiAgICBjb3VudHJ5U2VsZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICcnIHx8IHNlbGVjdC52YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJvdmluY2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnJyk7XG5cbiAgICAgIGF4aW9zLmdldChwcm92aW5jZUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIHsgcGFyYW1zOiB7IGNvdW50cnlDb2RlOiBzZWxlY3QudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5jb250ZW50LmluZGV4T2YoJ3NlbGVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgoXG4gICAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCA+IG9wdGlvbltzZWxlY3RlZCQ9XCJzZWxlY3RlZFwiXScpXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkTmFtZX1cIiR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnb3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJywgJ29wdGlvbiB2YWx1ZT1cIlwiJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YCwgYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9XCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VJbnB1dFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZE5hbWV9XCIke3Byb3ZpbmNlSW5wdXRWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZUlucHV0RmllbGRJZH1cImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50cnlTZWxlY3RJdGVtLnZhbHVlICE9PSAnJykge1xuICAgICAgY291bnRyeVNlbGVjdEl0ZW0uZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1Byb3ZpbmNlRmllbGQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNSYXRpbmcge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJhdGluZ01heCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nTWF4KSB8fCA1O1xuICAgICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlKSB8fCAwO1xuICAgICAgdGhpcy52aWV3T25seSA9IHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdWaWV3b25seSAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuYnRuT25FbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vbl0nKTtcbiAgICAgIHRoaXMuYnRuT2ZmRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb2ZmXScpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnJhdGluZ01heDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWxlbWVudC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUgPSBpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T25seSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPD0gdGhpcy5yYXRpbmdBdmVyYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PbkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9mZkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0VmFsdWUoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUpO1xuICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzLm9uUmF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmF0aW5nO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7IH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IodHJpZ2dlcikge1xuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50cmlnZ2VyLmRhdGFzZXQuanNUb2dnbGUpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlci5jaGVja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNsYXNzIFN5bGl1c1ZhcmlhbnRJbWFnZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LWltYWdlXScpO1xuICAgIHRoaXMubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2VMaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlTGluayA9IHRoaXMubWFpbkltYWdlTGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZVNyYyA9IHRoaXMubWFpbkltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldEltYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgaW5wdXRbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl06Y2hlY2tlZCwgXG4gICAgICBzZWxlY3RbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdIG9wdGlvbjpjaGVja2VkXG4gICAgYCk7XG5cbiAgICByZXR1cm4gWy4uLml0ZW1zXS5tYXAoZWwgPT4gZWwudmFsdWUpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUltYWdlU3JjKHZhcmlhbnQpIHtcbiAgICBsZXQgaW1hZ2VMaW5rID0gdGhpcy5kZWZhdWx0SW1hZ2VMaW5rO1xuICAgIGxldCBpbWFnZVNyYyA9IHRoaXMuZGVmYXVsdEltYWdlU3JjO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1jb2RlPVwiJHt2YXJpYW50fVwiXSwgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtb3B0aW9ucz1cIiR7dmFyaWFudH0gXCJdXG4gICAgYCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1qcy1wcm9kdWN0LXRodW1ibmFpbF0nKTtcbiAgICAgIGltYWdlTGluayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBpbWFnZVNyYyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFyZ2UtdGh1bWJuYWlsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1hZ2VMaW5rLCBpbWFnZVNyYyB9O1xuICB9XG5cbiAgc2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRBY3RpdmVJbWFnZVNyYyh0aGlzLmdldEFjdGl2ZVZhcmlhbnQoKSk7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGltZy5pbWFnZUxpbmspO1xuICAgIHRoaXMubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmltYWdlU3JjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50SW1hZ2VzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSAnJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IHNlbGVjdFtkYXRhLW9wdGlvbl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHNlbGVjdG9yICs9IGBbZGF0YS0ke3NlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAocHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdW5hdmFpbGFibGUtdGV4dCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtdmFyaWFudC1wcmljZV0nKS5pbm5lckhUTUw7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBzeWxpdXNWYXJpYW50c1ByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKSB8fCBudWxsO1xuICBjb25zdCBzeWxpdXNQcm9kdWN0VmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXByb2R1Y3QtdmFyaWFudHMnKSB8fCBudWxsO1xuXG4gIGlmIChzeWxpdXNWYXJpYW50c1ByaWNpbmcpIHtcbiAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICB9IGVsc2UgaWYgKHN5bGl1c1Byb2R1Y3RWYXJpYW50cykge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50c1ByaWNlcztcbiIsIi8qIEpTIHBsdWdpbnMgKi9cbmltcG9ydCAncG9wcGVyLmpzL2Rpc3QvcG9wcGVyLm1pbic7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCAnLi9pbmRleEJvb3RzdHJhcFRoZW1lJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcblxuLyogQ3NzIGZpbGVzICovXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbi8qIE1lZGlhIGZpbGVzICovXG5pbXBvcnQgJy4vbWVkaWEvbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JldHVybi1wb2xpY3kucG5nJztcbmltcG9ydCAnLi9tZWRpYS9kZWxpdmVyeS10cnVjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tYXN0ZXJjYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvdmlzYS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3BheXBhbC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2NvbGlzc2ltby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2Nocm9ub3Bvc3QucG5nJztcbmltcG9ydCAnLi9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYWNjb3VudC1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9iYWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbmV4dC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZnIucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWRlLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1pdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZXMucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVuLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmVsb2FkLnBuZyc7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcblxuIiwiLyoqXG4gKiBGcmVzY28gLSBBIEJlYXV0aWZ1bCBSZXNwb25zaXZlIExpZ2h0Ym94IC0gdjIuMy4wXG4gKiAoYykgMjAxMi0yMDE5IE5pY2sgU3Rha2VuYnVyZ1xuICpcbiAqIGh0dHBzOi8vd3d3LmZyZXNjb2pzLmNvbVxuICpcbiAqIEBsaWNlbnNlOiBodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wXG4gKi9cbiFmdW5jdGlvbihpLGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImpxdWVyeVwiKSk6aS5GcmVzY289ZShqUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKCQpe3ZhciBGcmVzY289e307JC5leHRlbmQoRnJlc2NvLHt2ZXJzaW9uOlwiMi4zLjBcIn0pLEZyZXNjby5Ta2lucz17ZnJlc2NvOnt9fTt2YXIgQm91bmRzPXt2aWV3cG9ydDpmdW5jdGlvbigpe3ZhciBpPXt3aWR0aDokKHdpbmRvdykud2lkdGgoKX07aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZCYmQnJvd3Nlci5HZWNrbyl7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoO2kuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCplfWVsc2UgaS5oZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3JldHVybiBpfX0sQnJvd3Nlcj0oZT1uYXZpZ2F0b3IudXNlckFnZW50LHtJRTohKCF3aW5kb3cuYXR0YWNoRXZlbnR8fC0xIT09ZS5pbmRleE9mKFwiT3BlcmFcIikpJiZmKFwiTVNJRSBcIiksT3BlcmE6LTE8ZS5pbmRleE9mKFwiT3BlcmFcIikmJighIXdpbmRvdy5vcGVyYSYmb3BlcmEudmVyc2lvbiYmcGFyc2VGbG9hdChvcGVyYS52ZXJzaW9uKCkpfHw3LjU1KSxXZWJLaXQ6LTE8ZS5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpJiZmKFwiQXBwbGVXZWJLaXQvXCIpLEdlY2tvOi0xPGUuaW5kZXhPZihcIkdlY2tvXCIpJiYtMT09PWUuaW5kZXhPZihcIktIVE1MXCIpJiZmKFwicnY6XCIpLE1vYmlsZVNhZmFyaTohIWUubWF0Y2goL0FwcGxlLipNb2JpbGUuKlNhZmFyaS8pLENocm9tZTotMTxlLmluZGV4T2YoXCJDaHJvbWVcIikmJmYoXCJDaHJvbWUvXCIpLENocm9tZU1vYmlsZTotMTxlLmluZGV4T2YoXCJDck1vXCIpJiZmKFwiQ3JNby9cIiksQW5kcm9pZDotMTxlLmluZGV4T2YoXCJBbmRyb2lkXCIpJiZmKFwiQW5kcm9pZCBcIiksSUVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiSUVNb2JpbGVcIikmJmYoXCJJRU1vYmlsZS9cIil9KSxlO2Z1bmN0aW9uIGYoaSl7dmFyIHQ9bmV3IFJlZ0V4cChpK1wiKFtcXFxcZC5dKylcIikuZXhlYyhlKTtyZXR1cm4hdHx8cGFyc2VGbG9hdCh0WzFdKX12YXIgX3NsaWNlPUFycmF5LnByb3RvdHlwZS5zbGljZTtmdW5jdGlvbiBiYXNlVG9TdHJpbmcoaSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGk/aTpudWxsPT1pP1wiXCI6aStcIlwifXZhciBfPXtpc0VsZW1lbnQ6ZnVuY3Rpb24oaSl7cmV0dXJuIGkmJjE9PT1pLm5vZGVUeXBlfSxTdHJpbmc6e2NhcGl0YWxpemU6ZnVuY3Rpb24oaSl7cmV0dXJuKGk9YmFzZVRvU3RyaW5nKGkpKSYmaS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnNsaWNlKDEpfX19OyQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIixmdW5jdGlvbihpKXt2YXIgZTtpZihpLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YT9lPWkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhLzEyMDppLm9yaWdpbmFsRXZlbnQuZGV0YWlsJiYoZT0taS5vcmlnaW5hbEV2ZW50LmRldGFpbC8zKSxlKXt2YXIgdD0kLkV2ZW50KFwiZnJlc2NvOm1vdXNld2hlZWxcIik7JChpLnRhcmdldCkudHJpZ2dlcih0LGUpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaS5zdG9wUHJvcGFnYXRpb24oKSx0LmlzRGVmYXVsdFByZXZlbnRlZCgpJiZpLnByZXZlbnREZWZhdWx0KCl9fSk7dmFyIEZpdD17d2l0aGluOmZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0PSQuZXh0ZW5kKHtoZWlnaHQ6ITAsd2lkdGg6ITB9LGFyZ3VtZW50c1syXXx8e30pLHM9JC5leHRlbmQoe30sZSksbj0xLG89NSxhPXQud2lkdGgsaD10LmhlaWdodDswPG8mJihhJiZzLndpZHRoPmkud2lkdGh8fGgmJnMuaGVpZ2h0PmkuaGVpZ2h0KTspe3ZhciByPTEsZD0xO2EmJnMud2lkdGg+aS53aWR0aCYmKHI9aS53aWR0aC9zLndpZHRoKSxoJiZzLmhlaWdodD5pLmhlaWdodCYmKGQ9aS5oZWlnaHQvcy5oZWlnaHQpLG49TWF0aC5taW4ocixkKSxzPXt3aWR0aDplLndpZHRoKm4saGVpZ2h0OmUuaGVpZ2h0Km59LG8tLX1yZXR1cm4gcy53aWR0aD1NYXRoLm1heChzLndpZHRoLDApLHMuaGVpZ2h0PU1hdGgubWF4KHMuaGVpZ2h0LDApLHN9fTskLmV4dGVuZCgkLmVhc2luZyx7ZnJlc2NvRWFzZUluQ3ViaWM6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcyooZS89bikqZSplK3R9LGZyZXNjb0Vhc2VJblNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4tcypNYXRoLmNvcyhlL24qKE1hdGguUEkvMikpK3MrdH0sZnJlc2NvRWFzZU91dFNpbmU6ZnVuY3Rpb24oaSxlLHQscyxuKXtyZXR1cm4gcypNYXRoLnNpbihlL24qKE1hdGguUEkvMikpK3R9fSk7dmFyIFN1cHBvcnQ9KE89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxQPVwiV2Via2l0IE1veiBPIG1zIEtodG1sXCIuc3BsaXQoXCIgXCIpLHtjYW52YXM6KGJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksISghYmEuZ2V0Q29udGV4dHx8IWJhLmdldENvbnRleHQoXCIyZFwiKSkpLGNzczp7YW5pbWF0aW9uOlMoXCJhbmltYXRpb25cIiksdHJhbnNmb3JtOlMoXCJ0cmFuc2Zvcm1cIikscHJlZml4ZWQ6ZnVuY3Rpb24oaSl7cmV0dXJuIFMoaSxcInByZWZpeFwiKX19LHN2ZzohIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyYmISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QsdG91Y2g6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl9Y2F0Y2goaSl7cmV0dXJuITF9fSgpfSksYmEsTyxQO2Z1bmN0aW9uIFMoaSxlKXt2YXIgdD1pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc3Vic3RyKDEpO3JldHVybiBmdW5jdGlvbihpLGUpe2Zvcih2YXIgdCBpbiBpKWlmKHZvaWQgMCE9PU8uc3R5bGVbaVt0XV0pcmV0dXJuXCJwcmVmaXhcIiE9PWV8fGlbdF07cmV0dXJuITF9KChpK1wiIFwiK1Auam9pbih0K1wiIFwiKSt0KS5zcGxpdChcIiBcIiksZSl9U3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaD1mdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2g9U3VwcG9ydC50b3VjaCYmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWR8fEJyb3dzZXIuSUVNb2JpbGV8fEJyb3dzZXIuQ2hyb21lTW9iaWxlfHwhL14oV2lufE1hY3xMaW51eCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSl9LFN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2goKTt2YXIgSW1hZ2VSZWFkeT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX07ZnVuY3Rpb24gVGltZXJzKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfWZ1bmN0aW9uIGdldFVSSURhdGEocyl7dmFyIG49e3R5cGU6XCJpbWFnZVwifTtyZXR1cm4gJC5lYWNoKFR5cGVzLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5kYXRhKHMpO3QmJigobj10KS50eXBlPWksbi51cmw9cyl9KSxufWZ1bmN0aW9uIGRldGVjdEV4dGVuc2lvbihpKXt2YXIgZT0oaXx8XCJcIikucmVwbGFjZSgvXFw/LiovZyxcIlwiKS5tYXRjaCgvXFwuKFteLl17Myw0fSkkLyk7cmV0dXJuIGU/ZVsxXS50b0xvd2VyQ2FzZSgpOm51bGx9JC5leHRlbmQoSW1hZ2VSZWFkeS5wcm90b3R5cGUse3N1cHBvcnRzOntuYXR1cmFsV2lkdGg6XCJuYXR1cmFsV2lkdGhcImluIG5ldyBJbWFnZX0saW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5pbWc9JChpKVswXSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMuaXNMb2FkZWQ9ITEsdGhpcy5vcHRpb25zPSQuZXh0ZW5kKHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixwb2xsRmFsbGJhY2tBZnRlcjoxZTN9LGFyZ3VtZW50c1szXXx8e30pLHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRoJiZcIm9ubG9hZFwiIT09dGhpcy5vcHRpb25zLm1ldGhvZD90aGlzLmltZy5jb21wbGV0ZSYmXCJ1bmRlZmluZWRcIiE9PSQudHlwZSh0aGlzLmltZy5uYXR1cmFsV2lkdGgpP3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpezA8dGhpcy5pbWcubmF0dXJhbFdpZHRoP3RoaXMuc3VjY2VzcygpOnRoaXMuZXJyb3IoKX0sdGhpcykpOigkKHRoaXMuaW1nKS5iaW5kKFwiZXJyb3JcIiwkLnByb3h5KGZ1bmN0aW9uKCl7c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lcnJvcigpfSx0aGlzKSl9LHRoaXMpKSx0aGlzLmludGVydmFscz1bWzFlMywxMF0sWzJlMyw1MF0sWzRlMywxMDBdLFsyZTQsNTAwXV0sdGhpcy5faXBvcz0wLHRoaXMuX3RpbWU9MCx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXSx0aGlzLnBvbGwoKSk6c2V0VGltZW91dCgkLnByb3h5KHRoaXMuZmFsbGJhY2ssdGhpcykpfSxwb2xsOmZ1bmN0aW9uKCl7dGhpcy5fcG9sbGluZz1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtpZigwPHRoaXMuaW1nLm5hdHVyYWxXaWR0aCl0aGlzLnN1Y2Nlc3MoKTtlbHNle2lmKHRoaXMuX3RpbWUrPXRoaXMuX2RlbGF5LHRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmdGhpcy5fdGltZT49dGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiYhdGhpcy5fdXNlZFBvbGxGYWxsYmFjayYmKHRoaXMuX3VzZWRQb2xsRmFsbGJhY2s9ITAsdGhpcy5mYWxsYmFjaygpKSx0aGlzLl90aW1lPnRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzBdKXtpZighdGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvcysxXSlyZXR1cm4gdm9pZCB0aGlzLmVycm9yKCk7dGhpcy5faXBvcysrLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdfXRoaXMucG9sbCgpfX0sdGhpcyksdGhpcy5fZGVsYXkpfSxmYWxsYmFjazpmdW5jdGlvbigpe3ZhciBpPW5ldyBJbWFnZTsodGhpcy5fZmFsbGJhY2tJbWc9aSkub25sb2FkPSQucHJveHkoZnVuY3Rpb24oKXtpLm9ubG9hZD1mdW5jdGlvbigpe30sdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGh8fCh0aGlzLmltZy5uYXR1cmFsV2lkdGg9aS53aWR0aCx0aGlzLmltZy5uYXR1cmFsSGVpZ2h0PWkuaGVpZ2h0KSx0aGlzLnN1Y2Nlc3MoKX0sdGhpcyksaS5vbmVycm9yPSQucHJveHkodGhpcy5lcnJvcix0aGlzKSxpLnNyYz10aGlzLmltZy5zcmN9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5fZmFsbGJhY2tJbWcmJih0aGlzLl9mYWxsYmFja0ltZy5vbmxvYWQ9ZnVuY3Rpb24oKXt9KSx0aGlzLl9wb2xsaW5nJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3BvbGxpbmcpLHRoaXMuX3BvbGxpbmc9bnVsbCl9LHN1Y2Nlc3M6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRTdWNjZXNzfHwodGhpcy5fY2FsbGVkU3VjY2Vzcz0hMCx0aGlzLmlzTG9hZGVkPSEwLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKHRoaXMpKX0sZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9jYWxsZWRFcnJvcnx8KHRoaXMuX2NhbGxlZEVycm9yPSEwLHRoaXMuYWJvcnQoKSx0aGlzLmVycm9yQ2FsbGJhY2smJnRoaXMuZXJyb3JDYWxsYmFjayh0aGlzKSl9fSksJC5leHRlbmQoVGltZXJzLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX3RpbWVycz17fX0sc2V0OmZ1bmN0aW9uKGksZSx0KXt0aGlzLl90aW1lcnNbaV09c2V0VGltZW91dChlLHQpfSxnZXQ6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXMuX3RpbWVyc1tpXX0sY2xlYXI6ZnVuY3Rpb24oaSl7aT90aGlzLl90aW1lcnNbaV0mJihjbGVhclRpbWVvdXQodGhpcy5fdGltZXJzW2ldKSxkZWxldGUgdGhpcy5fdGltZXJzW2ldKTp0aGlzLmNsZWFyQWxsKCl9LGNsZWFyQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RpbWVycyxmdW5jdGlvbihpLGUpe2NsZWFyVGltZW91dChlKX0pLHRoaXMuX3RpbWVycz17fX19KTt2YXIgVHlwZT17aXNWaWRlbzpmdW5jdGlvbihpKXtyZXR1cm4vXih5b3V0dWJlfHZpbWVvKSQvLnRlc3QoaSl9fSxUeXBlcz17aW1hZ2U6e2V4dGVuc2lvbnM6XCJibXAgZ2lmIGpwZWcganBnIHBuZyB3ZWJwXCIsZGV0ZWN0OmZ1bmN0aW9uKGkpe3JldHVybi0xPCQuaW5BcnJheShkZXRlY3RFeHRlbnNpb24oaSksdGhpcy5leHRlbnNpb25zLnNwbGl0KFwiIFwiKSl9LGRhdGE6ZnVuY3Rpb24oaSl7cmV0dXJuISF0aGlzLmRldGVjdCgpJiZ7ZXh0ZW5zaW9uOmRldGVjdEV4dGVuc2lvbihpKX19fSx2aW1lbzp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8odmltZW9cXC5jb20pXFwvKFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpO3JldHVybiEoIWV8fCFlWzJdKSYmZVsyXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19LHlvdXR1YmU6e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC93YXRjaFxcPyg/PS4qdmk/PShbYS16QS1aMC05LV9dKykpKD86XFxTKyk/JC8uZXhlYyhpKTtyZXR1cm4gZSYmZVsyXT9lWzJdOiEoIShlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLyh2aT9cXC98dVxcL3xlbWJlZFxcLyk/KFthLXpBLVowLTktX10rKSg/OlxcUyspPyQvaS5leGVjKGkpKXx8IWVbM10pJiZlWzNdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX19LFZpbWVvVGh1bWJuYWlsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy51cmw9aSx0aGlzLnN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXMuZXJyb3JDYWxsYmFjaz10LHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGkuZGF0YS51cmwpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2lmKGkmJmkudGh1bWJuYWlsX3VybCl7dmFyIGU9e3VybDppLnRodW1ibmFpbF91cmx9O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuc3VjY2Vzc0NhbGxiYWNrKGUudXJsKX1lbHNlIHRoaXMuZXJyb3JDYWxsYmFjaygpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksVmltZW9SZWFkeT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnVybD1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLmNhbGxiYWNrKGkuZGF0YSk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImbWF4d2lkdGg9OTk5OTk5OSZtYXhoZWlnaHQ9OTk5OTk5OSZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT17ZGltZW5zaW9uczp7d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHR9fTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrKGUpfSx0aGlzKSl9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5feGhyJiYodGhpcy5feGhyLmFib3J0KCksdGhpcy5feGhyPW51bGwpfX0pO3ZhciBzPXtjYWNoZTpbXSxnZXQ6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPW51bGwsdD0wO3Q8dGhpcy5jYWNoZS5sZW5ndGg7dCsrKXRoaXMuY2FjaGVbdF0mJnRoaXMuY2FjaGVbdF0udXJsPT09aSYmKGU9dGhpcy5jYWNoZVt0XSk7cmV0dXJuIGV9LHNldDpmdW5jdGlvbihpLGUpe3RoaXMucmVtb3ZlKGkpLHRoaXMuY2FjaGUucHVzaCh7dXJsOmksZGF0YTplfSl9LHJlbW92ZTpmdW5jdGlvbihpKXtmb3IodmFyIGU9MDtlPHRoaXMuY2FjaGUubGVuZ3RoO2UrKyl0aGlzLmNhY2hlW2VdJiZ0aGlzLmNhY2hlW2VdLnVybD09PWkmJmRlbGV0ZSB0aGlzLmNhY2hlW2VdfX07cmV0dXJuIGl9KCksT3B0aW9ucz17ZGVmYXVsdHM6e2VmZmVjdHM6e2NvbnRlbnQ6e3Nob3c6MCxoaWRlOjB9LHNwaW5uZXI6e3Nob3c6MTUwLGhpZGU6MTUwfSx3aW5kb3c6e3Nob3c6NDQwLGhpZGU6MzAwfSx0aHVtYm5haWw6e3Nob3c6MzAwLGRlbGF5OjE1MH0sdGh1bWJuYWlsczp7c2xpZGU6MH19LGtleWJvYXJkOntsZWZ0OiEwLHJpZ2h0OiEwLGVzYzohMH0sbG9hZGVkTWV0aG9kOlwibmF0dXJhbFdpZHRoXCIsbG9vcDohMSxvbkNsaWNrOlwicHJldmlvdXMtbmV4dFwiLG92ZXJmbG93OiExLG92ZXJsYXk6e2Nsb3NlOiEwfSxwcmVsb2FkOlsxLDJdLHBvc2l0aW9uOiEwLHNraW46XCJmcmVzY29cIixzcGlubmVyOiEwLHNwaW5uZXJEZWxheTozMDAsc3luYzohMCx0aHVtYm5haWxzOlwiaG9yaXpvbnRhbFwiLHVpOlwib3V0c2lkZVwiLHVpRGVsYXk6M2UzLHZpbWVvOnthdXRvcGxheToxLGFwaToxLHRpdGxlOjEsYnlsaW5lOjEscG9ydHJhaXQ6MCxsb29wOjB9LHlvdXR1YmU6e2F1dG9wbGF5OjEsY29udHJvbHM6MSxlbmFibGVqc2FwaToxLGhkOjEsaXZfbG9hZF9wb2xpY3k6Myxsb29wOjAsbW9kZXN0YnJhbmRpbmc6MSxyZWw6MCx2cTpcImhkMTA4MFwifSxpbml0aWFsVHlwZU9wdGlvbnM6e2ltYWdlOnt9LHZpbWVvOnt3aWR0aDoxMjgwfSx5b3V0dWJlOnt3aWR0aDoxMjgwLGhlaWdodDo3MjB9fX0sY3JlYXRlOmZ1bmN0aW9uKGksZSx0KXt0PXR8fHt9LChpPWl8fHt9KS5za2luPWkuc2tpbnx8dGhpcy5kZWZhdWx0cy5za2luO3ZhciBzPWkuc2tpbj8kLmV4dGVuZCh7fSxGcmVzY28uU2tpbnNbaS5za2luXXx8RnJlc2NvLlNraW5zW3RoaXMuZGVmYXVsdHMuc2tpbl0pOnt9LG49JC5leHRlbmQoITAse30sdGhpcy5kZWZhdWx0cyxzKTtuLmluaXRpYWxUeXBlT3B0aW9ucyYmKGUmJm4uaW5pdGlhbFR5cGVPcHRpb25zW2VdJiYobj0kLmV4dGVuZCghMCx7fSxuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSxuKSksZGVsZXRlIG4uaW5pdGlhbFR5cGVPcHRpb25zKTt2YXIgbz0kLmV4dGVuZCghMCx7fSxuLGkpO2lmKFN1cHBvcnQubW9iaWxlVG91Y2gmJlwiaW5zaWRlXCI9PT1vLnVpJiYoby51aT1cIm91dHNpZGVcIiksKCFvLmVmZmVjdHN8fEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSkmJihvLmVmZmVjdHM9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMuZWZmZWN0cyxmdW5jdGlvbihlLGkpeyQuZWFjaChvLmVmZmVjdHNbZV09JC5leHRlbmQoe30saSksZnVuY3Rpb24oaSl7by5lZmZlY3RzW2VdW2ldPTB9KX0pLG8uc3Bpbm5lcj0hMSksby5rZXlib2FyZCYmKFwiYm9vbGVhblwiPT09JC50eXBlKG8ua2V5Ym9hcmQpJiYoby5rZXlib2FyZD17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5rZXlib2FyZCxmdW5jdGlvbihpLGUpe28ua2V5Ym9hcmRbaV09ITB9KSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwkLmV4dGVuZChvLmtleWJvYXJkLHtsZWZ0OiExLHJpZ2h0OiExfSkpLCFvLm92ZXJmbG93fHxTdXBwb3J0Lm1vYmlsZVRvdWNoP28ub3ZlcmZsb3c9e3g6ITEseTohMX06XCJib29sZWFuXCI9PT0kLnR5cGUoby5vdmVyZmxvdykmJihvLm92ZXJmbG93PXt4OiExLHk6ITB9KSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fChvLm92ZXJsYXA9ITEpLChCcm93c2VyLklFJiZCcm93c2VyLklFPDl8fFN1cHBvcnQubW9iaWxlVG91Y2gpJiYoby50aHVtYm5haWw9ITEsby50aHVtYm5haWxzPSExKSxcInlvdXR1YmVcIiE9PWUmJihvLndpZHRoJiYhby5tYXhXaWR0aCYmKG8ubWF4V2lkdGg9by53aWR0aCksby5oZWlnaHQmJiFvLm1heEhlaWdodCYmKG8ubWF4SGVpZ2h0PW8uaGVpZ2h0KSksIW8udGh1bWJuYWlsJiZcImJvb2xlYW5cIiE9PSQudHlwZShvLnRodW1ibmFpbCkpe3ZhciBhPSExO3N3aXRjaChlKXtjYXNlXCJ5b3V0dWJlXCI6YT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiK1wiLy9pbWcueW91dHViZS5jb20vdmkvXCIrdC5pZCtcIi8wLmpwZ1wiO2JyZWFrO2Nhc2VcImltYWdlXCI6Y2FzZVwidmltZW9cIjphPSEwfW8udGh1bWJuYWlsPWF9cmV0dXJuIG99fSxPdmVybGF5PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMudmlzaWJsZT0hMX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheVwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXktYmFja2dyb3VuZFwiKSksdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZpLnZpZXcmJmkudmlldy5vcHRpb25zLm92ZXJsYXkmJiFpLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHxXaW5kb3cuaGlkZSgpfSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIrdGhpcy5za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXNraW4tXCIraSksdGhpcy5za2luPWl9LGF0dGFjaDpmdW5jdGlvbigpeyQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5kZXRhY2goKX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLm1heCgpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSl7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZXx8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQoc3x8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSx0aGlzLnZpc2libGU9ITEsaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LGdldFNjcm9sbERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgbj17fTtyZXR1cm4gJC5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oaSxlKXt2YXIgdD1lLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSkscz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7bltlXT0oQnJvd3Nlci5JRT9NYXRoLm1heChzW1wib2Zmc2V0XCIrdF0sc1tcInNjcm9sbFwiK3RdKTpCcm93c2VyLldlYktpdD9kb2N1bWVudC5ib2R5W1wic2Nyb2xsXCIrdF06c1tcInNjcm9sbFwiK3RdKXx8MH0pLG59LG1heDpmdW5jdGlvbigpe3ZhciBpO2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZCcm93c2VyLldlYktpdCYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4JiYoaT10aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuY3NzKGkpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpe3ZhciBlPUJvdW5kcy52aWV3cG9ydCgpO3RoaXMuZWxlbWVudC5jc3Moe2hlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRofSl9U3VwcG9ydC5tb2JpbGVUb3VjaCYmIWkmJnRoaXMuZWxlbWVudC5jc3Moe2hlaWdodDp0aGlzLmdldFNjcm9sbERpbWVuc2lvbnMoKS5oZWlnaHR9KX19LFdpbmRvdz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzPVtdLHRoaXMucXVldWVzLmhpZGU9JCh7fSksdGhpcy5wYWdlcz1bXSx0aGlzLl90cmFja2luZz1bXSx0aGlzLl9maXJzdD0hMCx0aGlzLnRpbWVycz1uZXcgVGltZXJzLHRoaXMuYnVpbGQoKSx0aGlzLnNldFNraW4oT3B0aW9ucy5kZWZhdWx0cy5za2luKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZih0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItd2luZG93IGZyLW1lYXN1cmVkXCIpLmhpZGUoKS5hcHBlbmQodGhpcy5fYm94PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWJveFwiKS5hcHBlbmQodGhpcy5fcGFnZXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZXNcIikpKS5hcHBlbmQodGhpcy5fdGh1bWJuYWlscz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzXCIpKSxPdmVybGF5LmluaXRpYWxpemUoKSxQYWdlcy5pbml0aWFsaXplKHRoaXMuX3BhZ2VzKSxUaHVtYm5haWxzLmluaXRpYWxpemUodGhpcy5fdGh1bWJuYWlscyksU3Bpbm5lci5pbml0aWFsaXplKCksVUkuaW5pdGlhbGl6ZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQubW9iaWxlVG91Y2g/XCJcIjpcIi1ub1wiKStcIi1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5zdmc/XCJcIjpcIi1ub1wiKStcIi1zdmdcIiksQnJvd3Nlci5JRSlmb3IodmFyIGk9NztpPD05O2krKylCcm93c2VyLklFPGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWx0SUVcIitpKTt0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXNraW4tXCIraSksT3ZlcmxheS5zZXRTa2luKGkpLHRoaXMuX3NraW49aX0sc2V0U2hvd2luZ1R5cGU6ZnVuY3Rpb24oaSl7dGhpcy5fc2hvd2luZ1R5cGUhPT1pJiYodGhpcy5fc2hvd2luZ1R5cGUmJih0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIrdGhpcy5fc2hvd2luZ1R5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLl9zaG93aW5nVHlwZSkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK2kpLFR5cGUuaXNWaWRlbyhpKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpLHRoaXMuX3Nob3dpbmdUeXBlPWkpfSxzdGFydE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcnx8JCh3aW5kb3cpLm9uKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPSQucHJveHkodGhpcy5fb25XaW5kb3dSZXNpemUsdGhpcykpfSxzdG9wT2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyJiYoJCh3aW5kb3cpLm9mZihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciksdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyPW51bGwpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnRpbWVycy5zZXQoXCJzY3JvbGxcIiwkLnByb3h5KHRoaXMuYWRqdXN0VG9TY3JvbGwsdGhpcyksMCl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3ZhciBpOyhpPVBhZ2VzLnBhZ2UpJiYoVGh1bWJuYWlscy5maXRUb1ZpZXdwb3J0KCksdGhpcy51cGRhdGVCb3hEaW1lbnNpb25zKCksaS5maXRUb0JveCgpLFVJLnVwZGF0ZSgpLFVJLmFkanVzdFByZXZOZXh0KG51bGwsMCksU3Bpbm5lci5jZW50ZXIoKSxPdmVybGF5Lm1heCgpLFVJLl9vbldpbmRvd1Jlc2l6ZSgpLHRoaXMuX29uU2Nyb2xsKCkpfSxhZGp1c3RUb1Njcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5jc3Moe3RvcDokKHdpbmRvdykuc2Nyb2xsVG9wKCl9KX0sZ2V0Qm94RGltZW5zaW9uczpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib3hEaW1lbnNpb25zfSx1cGRhdGVCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7aWYoUGFnZXMucGFnZSl7dmFyIGk9Qm91bmRzLnZpZXdwb3J0KCksZT1UaHVtYm5haWxzLmdldERpbWVuc2lvbnMoKSx0PVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247dGhpcy5fYm94RGltZW5zaW9ucz17d2lkdGg6dD9pLndpZHRoOmkud2lkdGgtZS53aWR0aCxoZWlnaHQ6dD9pLmhlaWdodC1lLmhlaWdodDppLmhlaWdodH0sdGhpcy5fYm94UG9zaXRpb249e3RvcDowLGxlZnQ6dD8wOmUud2lkdGh9LHRoaXMuX2JveC5jc3MoJC5leHRlbmQoe30sdGhpcy5fYm94RGltZW5zaW9ucyx0aGlzLl9ib3hQb3NpdGlvbikpfX0sc2hvdzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudmlzaWJsZSlpJiZpKCk7ZWxzZXt0aGlzLnZpc2libGU9ITAsdGhpcy5vcGVuaW5nPSEwLHRoaXMuYXR0YWNoKCksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKSx0aGlzLmFkanVzdFRvU2Nyb2xsKCk7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MCxzPTI7T3ZlcmxheVtQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vdmVybGF5P1wic2hvd1wiOlwiaGlkZVwiXShmdW5jdGlvbigpe2kmJi0tczwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcInNob3ctd2luZG93XCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Nob3coJC5wcm94eShmdW5jdGlvbigpe3RoaXMub3BlbmluZz0hMSxpJiYtLXM8MSYmaSgpfSx0aGlzKSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsNTApOjEpfX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGUpe2lmKHRoaXMudmlldyl7dmFyIGk9dGhpcy5xdWV1ZXMuaGlkZTtpLnF1ZXVlKFtdKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpO3ZhciB0PVBhZ2VzLnBhZ2U/UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZTowO2kucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5zdG9wKCksU3Bpbm5lci5oaWRlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1VJLmRpc2FibGUoKSxVSS5oaWRlKG51bGwsdCksS2V5Ym9hcmQuZGlzYWJsZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0yO3RoaXMuX2hpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJoaWRlLW92ZXJsYXlcIiwkLnByb3h5KGZ1bmN0aW9uKCl7T3ZlcmxheS5oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDE1MCk6MSksdGhpcy5fZmlyc3Q9ITB9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fcmVzZXQoKSx0aGlzLnN0b3BPYnNlcnZpbmdSZXNpemUoKSxQYWdlcy5yZW1vdmVBbGwoKSxUaHVtYm5haWxzLmNsZWFyKCksdGhpcy50aW1lcnMuY2xlYXIoKSx0aGlzLl9wb3NpdGlvbj0tMTt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5hZnRlckhpZGU7XCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZlLmNhbGwoRnJlc2NvKSx0aGlzLnZpZXc9bnVsbCx0aGlzLm9wZW5pbmc9ITEsdGhpcy5jbG9zaW5nPSExLHRoaXMuZGV0YWNoKCksaSgpfSx0aGlzKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGUpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7ZSgpLGkoKX0sdGhpcykpfX0sX2hpZGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGUpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHQsaSl9LGxvYWQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXdzPWksdGhpcy5hdHRhY2goKSxUaHVtYm5haWxzLmxvYWQoaSksUGFnZXMubG9hZChpKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nUmVzaXplKCksZSYmdGhpcy5zZXRQb3NpdGlvbihlKX0sc2V0UG9zaXRpb246ZnVuY3Rpb24oaSxlKXt0aGlzLl9wb3NpdGlvbj1pLHRoaXMudmlldz10aGlzLnZpZXdzW2ktMV0sdGhpcy5zdG9wSGlkZVF1ZXVlKCksdGhpcy5wYWdlPVBhZ2VzLnNob3coaSwkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSl9LHN0b3BIaWRlUXVldWU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5oaWRlLnF1ZXVlKFtdKX0sX3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy52aXNpYmxlPSExLFVJLmhpZGUobnVsbCwwKSxVSS5yZXNldCgpfSxtYXlQcmV2aW91czpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJnRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGh8fDEhPT10aGlzLl9wb3NpdGlvbn0scHJldmlvdXM6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlQcmV2aW91cygpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLnByZXZpb3VzKX0sbWF5TmV4dDpmdW5jdGlvbigpe3ZhciBpPXRoaXMudmlld3MmJjE8dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmaXx8aSYmMSE9PXRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dH0sbmV4dDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heU5leHQoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0KX0sZ2V0U3Vycm91bmRpbmdJbmRleGVzOmZ1bmN0aW9uKCl7aWYoIXRoaXMudmlld3MpcmV0dXJue307dmFyIGk9dGhpcy5fcG9zaXRpb24sZT10aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm57cHJldmlvdXM6aTw9MT9lOmktMSxuZXh0OmU8PWk/MTppKzF9fX0sS2V5Ym9hcmQ9e2VuYWJsZWQ6ITEsa2V5Q29kZTp7bGVmdDozNyxyaWdodDozOSxlc2M6Mjd9LGVuYWJsZTpmdW5jdGlvbihpKXt0aGlzLmRpc2FibGUoKSxpJiYoJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlEb3duLHRoaXMpKS5vbihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5VXAsdGhpcykpLHRoaXMuZW5hYmxlZD1pKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMSx0aGlzLl9vbktleVVwSGFuZGxlciYmKCQoZG9jdW1lbnQpLm9mZihcImtleXVwXCIsdGhpcy5fb25LZXlVcEhhbmRsZXIpLm9mZihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyKSx0aGlzLl9vbktleVVwSGFuZGxlcj10aGlzLl9vbktleURvd25IYW5kbGVyPW51bGwpfSxvbktleURvd246ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksZSl7Y2FzZVwibGVmdFwiOldpbmRvdy5wcmV2aW91cygpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6V2luZG93Lm5leHQoKX19fSxvbktleVVwOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGUpe2Nhc2VcImVzY1wiOldpbmRvdy5oaWRlKCl9fX0sZ2V0S2V5QnlLZXlDb2RlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZSBpbiB0aGlzLmtleUNvZGUpaWYodGhpcy5rZXlDb2RlW2VdPT09aSlyZXR1cm4gZTtyZXR1cm4gbnVsbH19LFBhZ2U9KExjPTAsTWM9e30sTmM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS10b3AgZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtYm90dG9tIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1sZWZ0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtcmlnaHQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKSwkLmV4dGVuZChPYy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudmlldz1pLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6MCxoZWlnaHQ6MH0sdGhpcy51aWQ9TGMrKyx0aGlzLl9wb3NpdGlvbj1lLHRoaXMuX3RvdGFsPXQsdGhpcy5fZnVsbENsaWNrPSExLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5xdWV1ZXM9e30sdGhpcy5xdWV1ZXMuc2hvd2hpZGU9JCh7fSl9LGNyZWF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9jcmVhdGVkKXtQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcGFnZVwiKS5hcHBlbmQodGhpcy5jb250YWluZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGFpbmVyXCIpKS5jc3Moe29wYWNpdHk6MH0pLmhpZGUoKSk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7aWYoaSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSkmJih0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuaW5mbz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiYodGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLXBvc2l0aW9uXCIpLHRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5wb3M9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlci5hcHBlbmQodGhpcy5jYXB0aW9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5iYWNrZ3JvdW5kPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuY29udGVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50XCIpKSxcImltYWdlXCI9PXRoaXMudmlldy50eXBlJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6dGhpcy52aWV3LnVybH0pKSx0aGlzLmNvbnRlbnQuYXBwZW5kKE5jLmNsb25lKCEwKSkpLGkmJlwib3V0c2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSYmdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucG9zaXRpb25PdXRzaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksXCJpbnNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkpe3RoaXMuY29udGVudC5hcHBlbmQodGhpcy5wcmV2aW91c0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMubmV4dEluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5jbG9zZUluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksKHRoaXMudmlldy5jYXB0aW9ufHxpJiZ0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9uKSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbmZvSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8gZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLWJhY2tncm91bmRcIikpLmFwcGVuZChOYy5jbG9uZSghMCkpLmFwcGVuZCh0aGlzLmluZm9QYWRkZXJJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1wYWRkZXJcIikpKSxpJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMucG9zSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSksdGhpcy52aWV3LmNhcHRpb24mJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5jYXB0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNhcHRpb25cIikuaHRtbCh0aGlzLnZpZXcuY2FwdGlvbikpKSx0aGlzLnZpZXcuY2FwdGlvbnx8IWl8fHRoaXMudmlldy5ncm91cGVkLmNhcHRpb258fHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5wb3NpdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1pbnNpZGUgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpO3ZhciBlPXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fDEhPXRoaXMuX3Bvc2l0aW9uLHQ9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8dGhpcy5fcG9zaXRpb248dGhpcy5fdG90YWw7dGhpcy5wcmV2aW91c0luc2lkZVsoZT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMubmV4dEluc2lkZVsodD9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpfSQuZWFjaChbXCJ4XCIsXCJ5XCJdLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvd1tlXSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmZsb3ctXCIrZSl9LHRoaXMpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLVwiK3RoaXMudmlldy50eXBlKSxUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10eXBlLXZpZGVvXCIpLHRoaXMuX3RvdGFsPDImJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLXNpZGVzXCIpLHRoaXMuX2NyZWF0ZWQ9ITB9fSxfZ2V0U3Vycm91bmRpbmdQYWdlczpmdW5jdGlvbigpe3ZhciBpO2lmKCEoaT10aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkKSlyZXR1cm5bXTtmb3IodmFyIGU9W10sdD1NYXRoLm1heCgxLHRoaXMuX3Bvc2l0aW9uLWlbMF0pLHM9TWF0aC5taW4odGhpcy5fcG9zaXRpb24raVsxXSx0aGlzLl90b3RhbCksbj10aGlzLl9wb3NpdGlvbixvPW47bzw9cztvKyspKGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSk7Zm9yKG89bjt0PD1vO28tLSl7dmFyIGE7KGE9UGFnZXMucGFnZXNbby0xXSkuX3Bvc2l0aW9uIT1uJiZlLnB1c2goYSl9cmV0dXJuIGV9LHByZWxvYWRTdXJyb3VuZGluZ0ltYWdlczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2dldFN1cnJvdW5kaW5nUGFnZXMoKTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS5wcmVsb2FkKCl9LHRoaXMpKX0scHJlbG9hZDpmdW5jdGlvbigpe3RoaXMucHJlbG9hZGluZ3x8dGhpcy5wcmVsb2FkZWR8fFwiaW1hZ2VcIiE9dGhpcy52aWV3LnR5cGV8fCF0aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkfHx0aGlzLmxvYWRlZHx8KHRoaXMuY3JlYXRlKCksdGhpcy5wcmVsb2FkaW5nPSEwLHRoaXMucHJlbG9hZFJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCx0aGlzLnByZWxvYWRpbmc9ITEsdGhpcy5wcmVsb2FkZWQ9ITAsdGhpcy5kaW1lbnNpb25zPXt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9fSx0aGlzKSxudWxsLHttZXRob2Q6XCJuYXR1cmFsV2lkdGhcIn0pKX0sbG9hZDpmdW5jdGlvbihlLGkpe2lmKHRoaXMuY3JlYXRlKCksdGhpcy5sb2FkZWQpZSYmZSgpO2Vsc2Ugc3dpdGNoKHRoaXMuYWJvcnQoKSx0aGlzLmxvYWRpbmc9ITAsdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmKHRoaXMuX3NwaW5uZXJEZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXtTcGlubmVyLnNob3coKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKSksdGhpcy52aWV3LnR5cGUpe2Nhc2VcImltYWdlXCI6aWYodGhpcy5lcnJvcilyZXR1cm4gdm9pZChlJiZlKCkpO3RoaXMuaW1hZ2VSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmltZy5uYXR1cmFsV2lkdGgsaGVpZ2h0OmkuaW1nLm5hdHVyYWxIZWlnaHR9KSxlJiZlKCl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLmltYWdlLmhpZGUoKSx0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLmVycm9yPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yIGZyLWNvbnRlbnQtZWxlbWVudFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3ItaWNvblwiKSkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1lcnJvclwiKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMuZXJyb3Iub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVycm9yLm91dGVySGVpZ2h0KCl9KSx0aGlzLmVycm9yLmNzcyh7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksZSYmZSgpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pO2JyZWFrO2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1JlYWR5PW5ldyBWaW1lb1JlYWR5KHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6aS5kaW1lbnNpb25zLmhlaWdodH0pLGUmJmUoKX0sdGhpcykpO2JyZWFrO2Nhc2VcInlvdXR1YmVcIjp0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOnRoaXMudmlldy5vcHRpb25zLndpZHRoLGhlaWdodDp0aGlzLnZpZXcub3B0aW9ucy5oZWlnaHR9KSxlJiZlKCl9fSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZGltZW5zaW9ucz1pLHRoaXMudmlldy5vcHRpb25zLm1heFdpZHRofHx0aGlzLnZpZXcub3B0aW9ucy5tYXhIZWlnaHQpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLHQ9e3dpZHRoOmUubWF4V2lkdGg/ZS5tYXhXaWR0aDp0aGlzLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmUubWF4SGVpZ2h0P2UubWF4SGVpZ2h0OnRoaXMuZGltZW5zaW9ucy5oZWlnaHR9O3RoaXMuZGltZW5zaW9ucz1GaXQud2l0aGluKHQsdGhpcy5kaW1lbnNpb25zKX19LF9tYXJrQXNMb2FkZWQ6ZnVuY3Rpb24oKXt0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMSx0aGlzLmxvYWRlZD0hMCxNY1t0aGlzLnZpZXcudXJsXT0hMCxTcGlubmVyLmhpZGUobnVsbCxudWxsLHRoaXMuX3Bvc2l0aW9uKX0saXNWaWRlbzpmdW5jdGlvbigpe3JldHVybiBUeXBlLmlzVmlkZW8odGhpcy52aWV3LnR5cGUpfSxpbnNlcnRWaWRlbzpmdW5jdGlvbihpKXtpZighdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMuaXNWaWRlbygpKXt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9JC5leHRlbmQoe30sdGhpcy52aWV3Lm9wdGlvbnNbdGhpcy52aWV3LnR5cGVdfHx7fSkscz0kLnBhcmFtKHQpLG49e3ZpbWVvOmUrXCIvL3BsYXllci52aW1lby5jb20vdmlkZW8ve2lkfT97cXVlcnlTdHJpbmd9XCIseW91dHViZTplK1wiLy93d3cueW91dHViZS5jb20vZW1iZWQve2lkfT97cXVlcnlTdHJpbmd9XCJ9W3RoaXMudmlldy50eXBlXS5yZXBsYWNlKFwie2lkfVwiLHRoaXMudmlldy5fZGF0YS5pZCkucmVwbGFjZShcIntxdWVyeVN0cmluZ31cIixzKTt0aGlzLmNvbnRlbnQucHJlcGVuZCh0aGlzLnBsYXllcklmcmFtZT0kKFwiPGlmcmFtZSB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOm4saGVpZ2h0OnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLmhlaWdodCx3aWR0aDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy53aWR0aCxmcmFtZWJvcmRlcjowfSkpLGkmJmkoKX1lbHNlIGkmJmkoKX0scmFpc2U6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5lbGVtZW50WzBdLmxhc3RDaGlsZDtpJiZpPT09dGhpcy5lbGVtZW50WzBdfHxQYWdlcy5lbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxzaG93OmZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMucXVldWVzLnNob3doaWRlO2kucXVldWUoW10pLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYhTWNbdGhpcy52aWV3LnVybF07U3Bpbm5lci5fdmlzaWJsZSYmIWUmJlNwaW5uZXIuaGlkZSgpLFBhZ2VzLnN0b3BJbmFjdGl2ZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnVwZGF0ZVVJKCksVUkuc2V0KHRoaXMuX3VpKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7S2V5Ym9hcmQuZW5hYmxlKHRoaXMudmlldy5vcHRpb25zLmtleWJvYXJkKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7U3Bpbm5lci5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLHRoaXMubG9hZCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMoKSxpKCl9LHRoaXMpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLnJhaXNlKCksV2luZG93LnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksVUkuZW5hYmxlKCksdGhpcy5maXRUb0JveCgpLFdpbmRvdy5hZGp1c3RUb1Njcm9sbCgpLGkoKX0sdGhpcykpLHRoaXMuaXNWaWRlbygpJiZpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5pbnNlcnRWaWRlbygkLnByb3h5KGZ1bmN0aW9uKCl7aSgpfSkpfSx0aGlzKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luY3x8aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLmhpZGVJbmFjdGl2ZShpKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT0zLHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c7V2luZG93LnNldFNob3dpbmdUeXBlKHRoaXMudmlldy50eXBlKSxXaW5kb3cudmlzaWJsZXx8KHQ9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyxcImZ1bmN0aW9uXCI9PT0kLnR5cGUodGhpcy52aWV3Lm9wdGlvbnMub25TaG93KSYmdGhpcy52aWV3Lm9wdGlvbnMub25TaG93LmNhbGwoRnJlc2NvKSksdGhpcy52aWV3Lm9wdGlvbnMuc3luYyYmKGUrKyxQYWdlcy5oaWRlSW5hY3RpdmUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSkpLFdpbmRvdy5zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyksdGhpcy5fc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLFVJLmFkanVzdFByZXZOZXh0KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sV2luZG93Ll9maXJzdD8wOnQpLFdpbmRvdy5fZmlyc3Q/KFVJLnNob3cobnVsbCwwKSxXaW5kb3cuX2ZpcnN0PSExKTpVSS5zaG93KG51bGwsMCk7dmFyIHM9dGhpcy52aWV3Lm9wdGlvbnMuYWZ0ZXJQb3NpdGlvbjtcImZ1bmN0aW9uXCI9PT0kLnR5cGUocykmJnMuY2FsbChGcmVzY28sdGhpcy5fcG9zaXRpb24pfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGU9ITAsZSYmZSgpLGkoKX0sdGhpcykpfSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PVdpbmRvdy52aXNpYmxlP1wibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdzowO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5zaG93KCkuZmFkZVRvKHR8fDAsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUpe2lmKHRoaXMuZWxlbWVudCl7dGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuYWJvcnQoKTt2YXIgdD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LmhpZGU7dGhpcy5pc1ZpZGVvKCkmJih0PTApLHRoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8odCwwLFwiZnJlc2NvRWFzZUluQ3ViaWNcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmhpZGUoKSx0aGlzLl92aXNpYmxlPSExLFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sc3RvcDpmdW5jdGlvbigpe3RoaXMucXVldWVzLnNob3doaWRlLnF1ZXVlKFtdKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5zdG9wKCEwKSx0aGlzLmFib3J0KCl9LHJlbW92ZVZpZGVvOmZ1bmN0aW9uKCl7dGhpcy5wbGF5ZXJJZnJhbWUmJih0aGlzLnBsYXllcklmcmFtZVswXS5zcmM9XCIvL2Fib3V0OmJsYW5rXCIsdGhpcy5wbGF5ZXJJZnJhbWUucmVtb3ZlKCksdGhpcy5wbGF5ZXJJZnJhbWU9bnVsbCl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpLHRoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmVsZW1lbnQmJnRoaXMuZWxlbWVudC5yZW1vdmUoKSx0aGlzLl90cmFjayYmKFBhZ2VzLnJlbW92ZVRyYWNraW5nKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLl90cmFjaz0hMSksdGhpcy5wcmVsb2FkUmVhZHkmJih0aGlzLnByZWxvYWRSZWFkeS5hYm9ydCgpLHRoaXMucHJlbG9hZFJlYWR5PW51bGwsdGhpcy5wcmVsb2FkaW5nPW51bGwsdGhpcy5wcmVsb2FkZWQ9bnVsbCksdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnJlbW92ZWQ9ITB9LGFib3J0OmZ1bmN0aW9uKCl7dGhpcy5pbWFnZVJlYWR5JiYodGhpcy5pbWFnZVJlYWR5LmFib3J0KCksdGhpcy5pbWFnZVJlYWR5PW51bGwpLHRoaXMudmltZW9SZWFkeSYmKHRoaXMudmltZW9SZWFkeS5hYm9ydCgpLHRoaXMudmltZW9SZWFkeT1udWxsKSx0aGlzLl9hYm9ydFNwaW5uZXJEZWxheSgpLHRoaXMubG9hZGluZz0hMX0sX2Fib3J0U3Bpbm5lckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fc3Bpbm5lckRlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX3NwaW5uZXJEZWxheSksdGhpcy5fc3Bpbm5lckRlbGF5PW51bGwpfSxfZ2V0SW5mb0hlaWdodDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOmNhc2VcImluc2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbiYmIWUpcmV0dXJuIDA7YnJlYWs7Y2FzZVwib3V0c2lkZVwiOmlmKCF0aGlzLnZpZXcuY2FwdGlvbilyZXR1cm4gMH12YXIgdD1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztcIm91dHNpZGVcIj09PXRoaXMuX3VpJiYoaT1NYXRoLm1pbihpLFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkpO3ZhciBzLG49dFswXS5zdHlsZS53aWR0aDtyZXR1cm5cImluc2lkZVwiIT09dGhpcy5fdWkmJlwiZnVsbGNsaWNrXCIhPT10aGlzLl91aXx8KG49XCIxMDAlXCIpLHQuY3NzKHt3aWR0aDppK1wicHhcIn0pLHM9cGFyc2VGbG9hdCh0Lm91dGVySGVpZ2h0KCkpLHQuY3NzKHt3aWR0aDpufSksc30sX3doaWxlVmlzaWJsZTpmdW5jdGlvbihpLGUpe3ZhciB0PVtdLHM9V2luZG93LmVsZW1lbnQuYWRkKHRoaXMuZWxlbWVudCk7ZSYmKHM9cy5hZGQoZSkpLCQuZWFjaChzLGZ1bmN0aW9uKGksZSl7JChlKS5pcyhcIjp2aXNpYmxlXCIpfHx0LnB1c2goJChlKS5zaG93KCkpfSk7dmFyIG49dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3ZhciBvPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksaSgpLFdpbmRvdy5lbGVtZW50LmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLG4mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW5vLWNhcHRpb25cIiksb3x8dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksJC5lYWNoKHQsZnVuY3Rpb24oaSxlKXtlLmhpZGUoKX0pfSx1cGRhdGVGb3JjZWQ6ZnVuY3Rpb24oKXt0aGlzLmNyZWF0ZSgpLHRoaXMuX2Z1bGxDbGljaz10aGlzLnZpZXcub3B0aW9ucy5mdWxsQ2xpY2ssdGhpcy5fbm9PdmVyZmxvdz0hMSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4td2lkdGhcIikpJiYodGhpcy5fZnVsbENsaWNrPSEwKSwwPHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtaW4taGVpZ2h0XCIpKSYmKHRoaXMuX25vT3ZlcmZsb3c9ITApfSx1cGRhdGVVSTpmdW5jdGlvbigpe3RoaXMudXBkYXRlRm9yY2VkKCk7dmFyIGk9dGhpcy5fZnVsbENsaWNrP1wiZnVsbGNsaWNrXCI6dGhpcy52aWV3Lm9wdGlvbnMudWk7dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXVpLVwiK3RoaXMuX3VpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1cIitpKSx0aGlzLl91aT1pfSxmaXRUb0JveDpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dGhpcy5lbGVtZW50O3ZhciB0PSQuZXh0ZW5kKHt9LFdpbmRvdy5nZXRCb3hEaW1lbnNpb25zKCkpLGk9JC5leHRlbmQoe30sdGhpcy5kaW1lbnNpb25zKSxlPXRoaXMuY29udGFpbmVyO3RoaXMudXBkYXRlVUkoKTt2YXIgcz17bGVmdDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctbGVmdFwiKSksdG9wOnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy10b3BcIikpfTtpZihcIm91dHNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLl9wb3NpdGlvbk91dHNpZGUpe3ZhciBuPTA7dGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbk91dHNpZGUuaXMoXCI6dmlzaWJsZVwiKSYmKG49dGhpcy5fcG9zaXRpb25PdXRzaWRlLm91dGVyV2lkdGgoITApKX0sdGhpcykpLG4+cy5sZWZ0JiYocy5sZWZ0PW4pfXQud2lkdGgtPTIqcy5sZWZ0LHQuaGVpZ2h0LT0yKnMudG9wO3ZhciBvLGEsaD17d2lkdGg6ITAsaGVpZ2h0OiEhdGhpcy5fbm9PdmVyZmxvd3x8IXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93Lnl9LHI9Rml0LndpdGhpbih0LGksaCksZD0kLmV4dGVuZCh7fSxyKSxsPSh0aGlzLmNvbnRlbnQsMCksdT1cImluc2lkZVwiPT09dGhpcy5fdWksYz11P3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm8scD11P3RoaXMuY2FwdGlvbkluc2lkZTp0aGlzLmNhcHRpb24sZj11P3RoaXMucG9zSW5zaWRlOnRoaXMucG9zLG09ISFwO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOnZhciB2PSQuZXh0ZW5kKHt9LGQpO3RoaXMuY2FwdGlvbiYmKGE9dGhpcy5jYXB0aW9uLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTwyOyl7bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpO3ZhciBlPXQuaGVpZ2h0LWQuaGVpZ2h0O2U8bCYmKGQ9Rml0LndpdGhpbih7d2lkdGg6ZC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoZC5oZWlnaHQtKGwtZSksMCl9LGQsaCkpLGkrK31sPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCksKCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiZsK2QuaGVpZ2h0PnQuaGVpZ2h0fHxjJiZcIm5vbmVcIj09PWMuY3NzKFwiZGlzcGxheVwiKXx8bD49LjUqZC5oZWlnaHQpJiYobT0hMSxsPTAsZD12KX0sdGhpcyksYSkpLGMmJmMuY3NzKHt3aWR0aDpkLndpZHRoK1wicHhcIn0pLG89e3dpZHRoOmQud2lkdGgsaGVpZ2h0OmQuaGVpZ2h0K2x9O2JyZWFrO2Nhc2VcImluc2lkZVwiOnRoaXMuY2FwdGlvbiYmKGE9cCx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpeyhsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCkpPj0uNDUqZC5oZWlnaHQmJihtPSExLGw9MCl9LHRoaXMpLGEpKSxvPWQ7YnJlYWs7Y2FzZVwiZnVsbGNsaWNrXCI6dmFyIGc9W107cCYmZy5wdXNoKHApLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoKHB8fGYpJiZjLmNzcyh7d2lkdGg6XCIxMDAlXCJ9KSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxwJiZsPi41KnQuaGVpZ2h0KWlmKG09ITEsZil7dmFyIGk9dGhpcy5jYXB0aW9uLmlzKFwiOnZpc2libGVcIik7dGhpcy5jYXB0aW9uLmhpZGUoKSxsPXRoaXMuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSxpJiZ0aGlzLmNhcHRpb24uc2hvdygpfWVsc2UgbD0wO2Q9Rml0LndpdGhpbih7d2lkdGg6dC53aWR0aCxoZWlnaHQ6TWF0aC5tYXgoMCx0LmhlaWdodC1sKX0sZCxoKSxvPWR9LHRoaXMpLGcpLHRoaXMuY29udGVudC5jc3Moe1wicGFkZGluZy1ib3R0b21cIjowfSl9cCYmcFttP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuZWxlbWVudFsobT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1uby1jYXB0aW9uXCIpLHRoaXMuZWxlbWVudFsobT9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1oYXMtY2FwdGlvblwiKSx0aGlzLmNvbnRlbnQuY3NzKGQpLHRoaXMuYmFja2dyb3VuZC5jc3MobyksdGhpcy5wbGF5ZXJJZnJhbWUmJnRoaXMucGxheWVySWZyYW1lLmF0dHIoZCksdGhpcy5vdmVybGFwPXt5Om8uaGVpZ2h0KyhcImZ1bGxjbGlja1wiPT09dGhpcy5fdWk/bDowKS1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHg6MH0sdGhpcy5fdHJhY2s9IXRoaXMuX25vT3ZlcmZsb3cmJnRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJjA8dGhpcy5vdmVybGFwLnksdGhpcy5faW5mb0hlaWdodD1sLHRoaXMuX3BhZGRpbmc9cyx0aGlzLl9jb250ZW50RGltZW5zaW9ucz1kLHRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zPW8sUGFnZXNbKHRoaXMuX3RyYWNrP1wic2V0XCI6XCJyZW1vdmVcIikrXCJUcmFja2luZ1wiXSh0aGlzLl9wb3NpdGlvbiksdGhpcy5wb3NpdGlvbigpfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3ZhciBpPXRoaXMuX2NvbnRlbnREaW1lbnNpb25zLGU9dGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnMsdD17dG9wOi41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqZS5oZWlnaHQsbGVmdDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqZS53aWR0aH0scz17dG9wOnQudG9wK2kuaGVpZ2h0LGxlZnQ6dC5sZWZ0fSxuPTAsbz1cImluc2lkZVwiPT09dGhpcy5fdWk/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbztzd2l0Y2godGhpcy5fdWkpe2Nhc2VcImZ1bGxjbGlja1wiOnQudG9wPS41KihXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQpLS41KmUuaGVpZ2h0LHM9e3RvcDpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQsbGVmdDowLGJvdHRvbTpcImF1dG9cIn0sbj10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnM9e3RvcDpcImF1dG9cIixsZWZ0OjAsYm90dG9tOjB9fWlmKDA8dGhpcy5vdmVybGFwLnkpe3ZhciBhPVBhZ2VzLmdldFhZUCgpO3N3aXRjaCh0LnRvcD0wLWEueSp0aGlzLm92ZXJsYXAueSx0aGlzLl91aSl7Y2FzZVwib3V0c2lkZVwiOmNhc2VcImZ1bGxjbGlja1wiOnMudG9wPVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjp2YXIgaD10LnRvcCtpLmhlaWdodC1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LHI9LTEqdC50b3A7aWYocy5ib3R0b209aCx0aGlzLmNsb3NlSW5zaWRlLmNzcyh7dG9wOnJ9KSwxPHRoaXMuX3RvdGFsKXt2YXIgZD1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO2R8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbD10aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoXCJzdHlsZVwiKTt0aGlzLnByZXZpb3VzSW5zaWRlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgdT1wYXJzZUludCh0aGlzLnByZXZpb3VzSW5zaWRlLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMucHJldmlvdXNJbnNpZGUuYXR0cih7c3R5bGU6bH0pLGR8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYz10aGlzLnByZXZpb3VzSW5zaWRlLmFkZCh0aGlzLm5leHRJbnNpZGUpLHA9LjUqdGhpcy5vdmVybGFwLnk7Yy5jc3Moe1wibWFyZ2luLXRvcFwiOnUrKHItcCl9KSx0aGlzLnBvc2l0aW9uSW5zaWRlJiZ0aGlzLnBvc2l0aW9uSW5zaWRlLmNzcyh7Ym90dG9tOmh9KX19fWVsc2VcImluc2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuZWxlbWVudC5maW5kKFwiLmZyLWluZm8sIC5mci1zaWRlLCAuZnItY2xvc2UsIC5mci1wb3NpdGlvbi1pbnNpZGVcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpO28mJm8uY3NzKHMpLHRoaXMuY29udGFpbmVyLmNzcyh7Ym90dG9tOm59KSx0aGlzLmNvbnRlbnQuY3NzKHQpLHRoaXMuYmFja2dyb3VuZC5jc3ModCl9fX0pLE9jKSxMYyxNYyxOYztmdW5jdGlvbiBPYygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX12YXIgUGFnZXM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5wYWdlcz1bXSx0aGlzLnVpZD0xLHRoaXMuX3RyYWNraW5nPVtdfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMudmlld3M9aSx0aGlzLnJlbW92ZUFsbCgpLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLnBhZ2VzLnB1c2gobmV3IFBhZ2UoZSxpKzEsdGhpcy52aWV3cy5sZW5ndGgpKX0sdGhpcykpfSxzaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpcy5wYWdlc1tpLTFdO3RoaXMucGFnZSYmdGhpcy5wYWdlLnVpZD09PXQudWlkfHwodGhpcy5wYWdlPXQsVGh1bWJuYWlscy5zaG93KGkpLFdpbmRvdy51cGRhdGVCb3hEaW1lbnNpb25zKCksdC5zaG93KCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKSl9LGdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXA6ZnVuY3Rpb24odCl7dmFyIHM9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnZpZXcuZWxlbWVudCYmZS52aWV3LmVsZW1lbnQ9PT10JiYocz1pKzEpfSksc30sZ2V0TG9hZGluZ0NvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gJC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLmxvYWRpbmcmJnQrK30pLHR9LHJlbW92ZUFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMucGFnZXM9W119LGhpZGVJbmFjdGl2ZTpmdW5jdGlvbih0LHMpe3ZhciBuPVtdOyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJm4ucHVzaChlKX0sdGhpcykpO3ZhciBvPTArbi5sZW5ndGg7cmV0dXJuIG88MT90JiZ0KCk6JC5lYWNoKG4sZnVuY3Rpb24oaSxlKXtlLmhpZGUoZnVuY3Rpb24oKXt0JiYtLW88MSYmdCgpfSxzKX0pLG4ubGVuZ3RofSxzdG9wSW5hY3RpdmU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZlLnN0b3AoKX0sdGhpcykpfSxzdG9wOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnN0b3AoKX0pfSxoYW5kbGVUcmFja2luZzpmdW5jdGlvbihpKXtCcm93c2VyLklFJiZCcm93c2VyLklFPDk/KHRoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpKTp0aGlzLl90cmFja2luZ190aW1lcj1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKX0sdGhpcyksMzApfSxjbGVhclRyYWNraW5nVGltZXI6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZ190aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLl90cmFja2luZ190aW1lciksdGhpcy5fdHJhY2tpbmdfdGltZXI9bnVsbCl9LHN0YXJ0VHJhY2tpbmc6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHx0aGlzLl9oYW5kbGVUcmFja2luZ3x8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmc9JC5wcm94eSh0aGlzLmhhbmRsZVRyYWNraW5nLHRoaXMpKX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7IVN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuX2hhbmRsZVRyYWNraW5nJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nKSx0aGlzLl9oYW5kbGVUcmFja2luZz1udWxsLHRoaXMuY2xlYXJUcmFja2luZ1RpbWVyKCkpfSxzZXRUcmFja2luZzpmdW5jdGlvbihpKXt0aGlzLmlzVHJhY2tpbmcoaSl8fCh0aGlzLl90cmFja2luZy5wdXNoKHRoaXMucGFnZXNbaS0xXSksMT09PXRoaXMuX3RyYWNraW5nLmxlbmd0aCYmdGhpcy5zdGFydFRyYWNraW5nKCkpfSxjbGVhclRyYWNraW5nOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmc9W119LHJlbW92ZVRyYWNraW5nOmZ1bmN0aW9uKGUpe3RoaXMuX3RyYWNraW5nPSQuZ3JlcCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpKXtyZXR1cm4gaS5fcG9zaXRpb24hPT1lfSksdGhpcy5fdHJhY2tpbmcubGVuZ3RoPDEmJnRoaXMuc3RvcFRyYWNraW5nKCl9LGlzVHJhY2tpbmc6ZnVuY3Rpb24odCl7dmFyIHM9ITE7cmV0dXJuICQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2lmKGUuX3Bvc2l0aW9uPT09dClyZXR1cm4hKHM9ITApfSksc30sc2V0WFk6ZnVuY3Rpb24oaSl7dGhpcy5feHk9aX0sZ2V0WFlQOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZSx0PSQuZXh0ZW5kKHt9LFdpbmRvdy5fYm94RGltZW5zaW9ucyksZT0kLmV4dGVuZCh7fSx0aGlzLl94eSk7ZS55LT0kKHdpbmRvdykuc2Nyb2xsVG9wKCksaSYmKFwib3V0c2lkZVwiPT09aS5fdWl8fFwiZnVsbGNsaWNrXCI9PT1pLl91aSkmJjA8aS5faW5mb0hlaWdodCYmKHQuaGVpZ2h0LT1pLl9pbmZvSGVpZ2h0KSxlLnktPVdpbmRvdy5fYm94UG9zaXRpb24udG9wO3ZhciBzPXt4OjAseTpNYXRoLm1pbihNYXRoLm1heChlLnkvdC5oZWlnaHQsMCksMSl9LG49e3g6XCJ3aWR0aFwiLHk6XCJoZWlnaHRcIn0sbz17fTtyZXR1cm4gJC5lYWNoKFwieVwiLnNwbGl0KFwiIFwiKSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7b1tlXT1NYXRoLm1pbihNYXRoLm1heCgyMC90W25bZV1dLDApLDEpLHNbZV0qPTErMipvW2VdLHNbZV0tPW9bZV0sc1tlXT1NYXRoLm1pbihNYXRoLm1heChzW2VdLDApLDEpfSx0aGlzKSksdGhpcy5zZXRYWVAocyksdGhpcy5feHlwfSxzZXRYWVA6ZnVuY3Rpb24oaSl7dGhpcy5feHlwPWl9LHVwZGF0ZVBvc2l0aW9uczpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nLmxlbmd0aDwxfHwkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtlLnBvc2l0aW9uKCl9KX19O2Z1bmN0aW9uIFZpZXcoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChWaWV3LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihvYmplY3Qpe3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30sZGF0YT17fTtpZihcInN0cmluZ1wiPT09JC50eXBlKG9iamVjdCkpb2JqZWN0PXt1cmw6b2JqZWN0fTtlbHNlIGlmKG9iamVjdCYmMT09PW9iamVjdC5ub2RlVHlwZSl7dmFyIGVsZW1lbnQ9JChvYmplY3QpO29iamVjdD17ZWxlbWVudDplbGVtZW50WzBdLHVybDplbGVtZW50LmF0dHIoXCJocmVmXCIpLGNhcHRpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tY2FwdGlvblwiKSxncm91cDplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSxleHRlbnNpb246ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZXh0ZW5zaW9uXCIpLHR5cGU6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tdHlwZVwiKSxvcHRpb25zOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikmJmV2YWwoXCIoe1wiK2VsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLW9wdGlvbnNcIikrXCJ9KVwiKXx8e319fXJldHVybiBvYmplY3QmJihvYmplY3QuZXh0ZW5zaW9ufHwob2JqZWN0LmV4dGVuc2lvbj1kZXRlY3RFeHRlbnNpb24ob2JqZWN0LnVybCkpLG9iamVjdC50eXBlfHwoZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpLG9iamVjdC5fZGF0YT1kYXRhLG9iamVjdC50eXBlPWRhdGEudHlwZSkpLG9iamVjdC5fZGF0YXx8KG9iamVjdC5fZGF0YT1nZXRVUklEYXRhKG9iamVjdC51cmwpKSxvYmplY3QmJm9iamVjdC5vcHRpb25zP29iamVjdC5vcHRpb25zPSQuZXh0ZW5kKCEwLCQuZXh0ZW5kKHt9LG9wdGlvbnMpLCQuZXh0ZW5kKHt9LG9iamVjdC5vcHRpb25zKSk6b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoe30sb3B0aW9ucyksb2JqZWN0Lm9wdGlvbnM9T3B0aW9ucy5jcmVhdGUob2JqZWN0Lm9wdGlvbnMsb2JqZWN0LnR5cGUsb2JqZWN0Ll9kYXRhKSwkLmV4dGVuZCh0aGlzLG9iamVjdCksdGhpc319KTt2YXIgU3Bpbm5lcj17c3VwcG9ydGVkOlN1cHBvcnQuY3NzLnRyYW5zZm9ybSYmU3VwcG9ydC5jc3MuYW5pbWF0aW9uLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW5uZXJcIikuaGlkZSgpO2Zvcih2YXIgZT0xO2U8PTEyO2UrKyl0aGlzLmVsZW1lbnQuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNwaW4tXCIrZSkpO3RoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe1dpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc3VwcG9ydGVkJiYodGhpcy5fc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMudXBkYXRlRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIitpKSx0aGlzLl9za2luPWkpfSx1cGRhdGVEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fYXR0YWNoZWQ7aXx8dGhpcy5hdHRhY2goKSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLGhlaWdodDp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKX0saXx8dGhpcy5kZXRhY2goKX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzaG93OmZ1bmN0aW9uKGksZSl7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMuY2VudGVyKCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLnNob3d8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlVG8ocywxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSx0KXt0aGlzLl92aXNpYmxlPSExO3ZhciBzPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5oaWRlfHwwLG49KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpzKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChufHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLGkmJmkoKX0sdGhpcykpfSxjZW50ZXI6ZnVuY3Rpb24oKXtpZih0aGlzLnN1cHBvcnRlZCl7dGhpcy5fZGltZW5zaW9uc3x8dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7dmFyIGk9UGFnZXMucGFnZSxlPTA7aSYmXCJmdWxsY2xpY2tcIj09PWkuX3VpJiZpLl93aGlsZVZpc2libGUoZnVuY3Rpb24oKXtlPWkuX2dldEluZm9IZWlnaHQoV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKX0pLHRoaXMuZWxlbWVudC5jc3Moe3RvcDpXaW5kb3cuX2JveFBvc2l0aW9uLnRvcCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KnRoaXMuX2RpbWVuc2lvbnMuaGVpZ2h0LS41KmUsbGVmdDpXaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQrLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KnRoaXMuX2RpbWVuc2lvbnMud2lkdGh9KX19fSxfRnJlc2NvPXtfZGlzYWJsZWQ6ITEsX2ZhbGxiYWNrOiEwLGluaXRpYWxpemU6ZnVuY3Rpb24oKXtXaW5kb3cuaW5pdGlhbGl6ZSgpLHRoaXMuX2Rpc2FibGVkfHx0aGlzLnN0YXJ0RGVsZWdhdGluZygpfSxzdGFydERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXJ8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPSQucHJveHkodGhpcy5kZWxlZ2F0ZSx0aGlzKSkub24oXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPSQucHJveHkodGhpcy5zZXRDbGlja1hZLHRoaXMpKX0sc3RvcERlbGVnYXRpbmc6ZnVuY3Rpb24oKXt0aGlzLl9kZWxlZ2F0ZUhhbmRsZXImJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXIpLm9mZihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXIpLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyPW51bGwsdGhpcy5fZGVsZWdhdGVIYW5kbGVyPW51bGwpfSxzZXRDbGlja1hZOmZ1bmN0aW9uKGkpe1BhZ2VzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSl9LGRlbGVnYXRlOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLl9kaXNhYmxlZCl7aS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9aS5jdXJyZW50VGFyZ2V0O3RoaXMuc2V0Q2xpY2tYWShpKSxfRnJlc2NvLnNob3coZSl9fSxzaG93OmZ1bmN0aW9uKG9iamVjdCl7aWYodGhpcy5fZGlzYWJsZWQpdGhpcy5zaG93RmFsbGJhY2suYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtlbHNle3ZhciBvcHRpb25zPWFyZ3VtZW50c1sxXXx8e30scG9zaXRpb249YXJndW1lbnRzWzJdO2FyZ3VtZW50c1sxXSYmXCJudW1iZXJcIj09PSQudHlwZShhcmd1bWVudHNbMV0pJiYocG9zaXRpb249YXJndW1lbnRzWzFdLG9wdGlvbnM9e30pO3ZhciB2aWV3cz1bXSxvYmplY3RfdHlwZSxpc0VsZW1lbnQ9Xy5pc0VsZW1lbnQob2JqZWN0KTtzd2l0Y2gob2JqZWN0X3R5cGU9JC50eXBlKG9iamVjdCkpe2Nhc2VcInN0cmluZ1wiOmNhc2VcIm9iamVjdFwiOnZhciB2aWV3PW5ldyBWaWV3KG9iamVjdCxvcHRpb25zKSxfZGdvPVwiZGF0YS1mcmVzY28tZ3JvdXAtb3B0aW9uc1wiLGdyb3VwT3B0aW9ucz17fTtpZih2aWV3Lmdyb3VwKXtpZihpc0VsZW1lbnQpe3ZhciBlbGVtZW50cz0kKCcuZnJlc2NvW2RhdGEtZnJlc2NvLWdyb3VwPVwiJyskKG9iamVjdCkuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpKydcIl0nKTtlbGVtZW50cy5maWx0ZXIoXCJbXCIrX2RnbytcIl1cIikuZWFjaChmdW5jdGlvbihpLGVsZW1lbnQpeyQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChlbGVtZW50KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKX0pLGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oaSxlKXtwb3NpdGlvbnx8ZSE9PW9iamVjdHx8KHBvc2l0aW9uPWkrMSksdmlld3MucHVzaChuZXcgVmlldyhlLCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpfSl9fWVsc2UgaXNFbGVtZW50JiYkKG9iamVjdCkuaXMoXCJbXCIrX2RnbytcIl1cIikmJigkLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQob2JqZWN0KS5hdHRyKF9kZ28pfHxcIlwiKStcIn0pXCIpKSx2aWV3PW5ldyBWaWV3KG9iamVjdCwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKSx2aWV3cy5wdXNoKHZpZXcpO2JyZWFrO2Nhc2VcImFycmF5XCI6JC5lYWNoKG9iamVjdCxmdW5jdGlvbihpLGUpe3ZhciB0PW5ldyBWaWV3KGUsb3B0aW9ucyk7dmlld3MucHVzaCh0KX0pfXZhciBncm91cEV4dGVuZD17Z3JvdXBlZDp7Y2FwdGlvbjohMX19LGZpcnN0VUk9dmlld3NbMF0ub3B0aW9ucy51aSxwb3NpdGlvbkluQVBHOyQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2UuY2FwdGlvbiYmKGdyb3VwRXh0ZW5kLmdyb3VwZWQuY2FwdGlvbj0hMCksMDxpJiZlLm9wdGlvbnMudWkhPT1maXJzdFVJJiYoZS5vcHRpb25zLnVpPWZpcnN0VUkpfSksJC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZT0kLmV4dGVuZChlLGdyb3VwRXh0ZW5kKX0pLCghcG9zaXRpb258fHBvc2l0aW9uPDEpJiYocG9zaXRpb249MSkscG9zaXRpb24+dmlld3MubGVuZ3RoJiYocG9zaXRpb249dmlld3MubGVuZ3RoKSxpc0VsZW1lbnQmJihwb3NpdGlvbkluQVBHPVBhZ2VzLmdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAob2JqZWN0KSk/V2luZG93LnNldFBvc2l0aW9uKHBvc2l0aW9uSW5BUEcpOldpbmRvdy5sb2FkKHZpZXdzLHBvc2l0aW9uKX19LHNob3dGYWxsYmFjazpmdW5jdGlvbihpKXtpZih0aGlzLl9mYWxsYmFjayl7dmFyIGU9ZnVuY3Rpb24gaShlKXt2YXIgdD0kLnR5cGUoZSk7cmV0dXJuXCJzdHJpbmdcIj09PXQ/ZTpcImFycmF5XCI9PT10JiZlWzBdP2koZVswXSk6Xy5pc0VsZW1lbnQoZSkmJiQoZSkuYXR0cihcImhyZWZcIik/JChlKS5hdHRyKFwiaHJlZlwiKTohIWUudXJsJiZlLnVybH0oaSk7ZSYmKHdpbmRvdy5sb2NhdGlvbi5ocmVmPWUpfX19OyQuZXh0ZW5kKEZyZXNjbyx7c2hvdzpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5zaG93LmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiBXaW5kb3cuaGlkZSgpLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5zdG9wRGVsZWdhdGluZygpLF9GcmVzY28uX2Rpc2FibGVkPSEwLHRoaXN9LGVuYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLl9kaXNhYmxlZD0hMSxfRnJlc2NvLnN0YXJ0RGVsZWdhdGluZygpLHRoaXN9LGZhbGxiYWNrOmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLl9mYWxsYmFjaz1pLHRoaXN9LHNldERlZmF1bHRTa2luOmZ1bmN0aW9uKGkpe3JldHVybiBPcHRpb25zLmRlZmF1bHRzLnNraW49aSx0aGlzfX0pLChCcm93c2VyLklFJiZCcm93c2VyLklFPDd8fFwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5BbmRyb2lkKSYmQnJvd3Nlci5BbmRyb2lkPDN8fEJyb3dzZXIuTW9iaWxlU2FmYXJpJiZcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuV2ViS2l0KSYmQnJvd3Nlci5XZWJLaXQ8NTMzLjE4KSYmKF9GcmVzY28uc2hvdz1fRnJlc2NvLnNob3dGYWxsYmFjayk7dmFyIFRodW1ibmFpbHM9e2luaXRpYWxpemU6ZnVuY3Rpb24oaSl7dGhpcy5lbGVtZW50PWksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIsdGhpcy5fdmFycz17dGh1bWJuYWlsOnt9LHRodW1ibmFpbEZyYW1lOnt9LHRodW1ibmFpbHM6e319LHRoaXMuYnVpbGQoKSx0aGlzLnN0YXJ0T2JzZXJ2aW5nKCl9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLndyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy13cmFwcGVyXCIpLmFwcGVuZCh0aGlzLl9zbGlkZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZXJcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtcHJldmlvdXNcIikuYXBwZW5kKHRoaXMuX3ByZXZpb3VzX2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX3RodW1icz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXRodW1ic1wiKS5hcHBlbmQodGhpcy5fc2xpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zbGlkZVwiKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZSBmci10aHVtYm5haWxzLXNpZGUtbmV4dFwiKS5hcHBlbmQodGhpcy5fbmV4dF9idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpKSl9LHN0YXJ0T2JzZXJ2aW5nOmZ1bmN0aW9uKCl7dGhpcy5fc2xpZGVyLmRlbGVnYXRlKFwiLmZyLXRodW1ibmFpbFwiLFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGU9JChpLnRhcmdldCkuY2xvc2VzdChcIi5mci10aHVtYm5haWxcIilbMF0sdD1lJiYkKGUpLmRhdGEoXCJmci1wb3NpdGlvblwiKTt0JiYodGhpcy5zZXRBY3RpdmUodCksV2luZG93LnNldFBvc2l0aW9uKHQpKX0sdGhpcykpLHRoaXMuX3NsaWRlci5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpfSksdGhpcy5fcHJldmlvdXMuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLnByZXZpb3VzUGFnZSx0aGlzKSksdGhpcy5fbmV4dC5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMubmV4dFBhZ2UsdGhpcykpfSxsb2FkOmZ1bmN0aW9uKGkpe3RoaXMuY2xlYXIoKTt2YXIgdD1cImhvcml6b250YWxcIixzPSExOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtcInZlcnRpY2FsXCI9PT1lLm9wdGlvbnMudGh1bWJuYWlscyYmKHQ9XCJ2ZXJ0aWNhbFwiKSxlLm9wdGlvbnMudGh1bWJuYWlsc3x8KHM9ITApfSx0aGlzKSksdGhpcy5zZXRPcmllbnRhdGlvbih0KSx0aGlzLl9kaXNhYmxlZEdyb3VwPXMsJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMuX3RodW1ibmFpbHMucHVzaChuZXcgVGh1bWJuYWlsKGUsaSsxKSl9LHRoaXMpKSx0aGlzLmZpdFRvVmlld3BvcnQoKX0sY2xlYXI6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX3Bvc2l0aW9uPS0xLHRoaXMuX3BhZ2U9LTF9LHNldE9yaWVudGF0aW9uOmZ1bmN0aW9uKGkpe3RoaXMuX29yaWVudGF0aW9uJiZXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIrdGhpcy5fb3JpZW50YXRpb24pLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1cIitpKSx0aGlzLl9vcmllbnRhdGlvbj1pfSxkaXNhYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSEwfSxlbmFibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLWVuYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITF9LGVuYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5fZGlzYWJsZWR9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rpc2FibGVkfSx1cGRhdGVWYXJzOmZ1bmN0aW9uKCl7dmFyIGk9V2luZG93LmVsZW1lbnQsZT10aGlzLl92YXJzLHQ9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixzPXQ/XCJ0b3BcIjpcImxlZnRcIixuPXQ/XCJsZWZ0XCI6XCJ0b3BcIixvPXQ/XCJib3R0b21cIjpcImxlZnRcIixhPXQ/XCJ0b3BcIjpcInJpZ2h0XCIsaD10P1wid2lkdGhcIjpcImhlaWdodFwiLHI9dD9cImhlaWdodFwiOlwid2lkdGhcIixkPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIix0b3A6XCJib3R0b21cIixib3R0b206XCJ0b3BcIn07dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt2YXIgbD1pLmlzKFwiOnZpc2libGVcIik7aWYobHx8aS5zaG93KCksdGhpcy5kaXNhYmxlZCgpJiZ0aGlzLmVuYWJsZSgpLCF0aGlzLmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKXx8dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8Mnx8dGhpcy5fZGlzYWJsZWRHcm91cClyZXR1cm4gdGhpcy5kaXNhYmxlKCksJC5leHRlbmQodGhpcy5fdmFycy50aHVtYm5haWxzLHt3aWR0aDowLGhlaWdodDowfSksbHx8aS5oaWRlKCksdm9pZCB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3RoaXMuZW5hYmxlKCk7dmFyIHU9dGhpcy5fcHJldmlvdXMsYz10aGlzLl9uZXh0LHA9Qm91bmRzLnZpZXdwb3J0KCksZj10aGlzLmVsZW1lbnRbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUocildKCksbT1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIitzKSl8fDAsdj1NYXRoLm1heChmLTIqbSwwKSxnPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK24pKXx8MCx3PShwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK28pKXx8MCkrKHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrYSkpfHwwKTskLmV4dGVuZChlLnRodW1ibmFpbHMse2hlaWdodDpmK3csd2lkdGg6cFt0P1wid2lkdGhcIjpcImhlaWdodFwiXSxwYWRkaW5nVG9wOm19KSwkLmV4dGVuZChlLnRodW1ibmFpbCx7aGVpZ2h0OnYsd2lkdGg6dn0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsRnJhbWUse3dpZHRoOnYrMipnLGhlaWdodDpmfSksZS5zaWRlcz17cHJldmlvdXM6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfSxuZXh0Ont3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH19O3ZhciBiPXBbaF0seT1lLnRodW1ibmFpbEZyYW1lLndpZHRoLHg9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7ZS50aHVtYm5haWxzLndpZHRoPWIsZS5zaWRlcy5lbmFibGVkPTE8eCp5L2I7dmFyIGs9YixDPWUuc2lkZXMsUz1DLnByZXZpb3VzLFc9Qy5uZXh0LE09Uy5tYXJnaW5MZWZ0K1Mud2lkdGgrUy5tYXJnaW5SaWdodCtXLm1hcmdpbkxlZnQrVy53aWR0aCtXLm1hcmdpblJpZ2h0O2Uuc2lkZXMuZW5hYmxlZCYmKGstPU0pO3ZhciBUPXgqeTtUPChrPU1hdGguZmxvb3Ioay95KSp5KSYmKGs9VCk7dmFyIEk9aysoZS5zaWRlcy5lbmFibGVkP006MCk7ZS5pcHA9TWF0aC5yb3VuZChrL3kpLHRoaXMuX21vZGU9XCJwYWdlXCIsZS5pcHA8PTEmJihJPWs9YixlLnNpZGVzLmVuYWJsZWQ9ITEsdGhpcy5fbW9kZT1cImNlbnRlclwiKSxlLnBhZ2VzPU1hdGguY2VpbCh4KnkvayksZS53cmFwcGVyPXt3aWR0aDpJKzEsaGVpZ2h0OmZ9LGUudGh1bWJzPXt3aWR0aDprLGhlaWdodDpmfSxlLnNsaWRlPXt3aWR0aDp4KnkrMSxoZWlnaHQ6Zn0sbHx8aS5oaWRlKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKX0saGlkZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZSgpLHRoaXMudGh1bWJuYWlscy5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247cmV0dXJue3dpZHRoOmk/dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoOnRoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQsaGVpZ2h0Omk/dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodDp0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGh9fSxmaXRUb1ZpZXdwb3J0OmZ1bmN0aW9uKCl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIGk9JC5leHRlbmQoe30sdGhpcy5fdmFycyksZT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uOyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZXNpemUoKX0pLHRoaXMuX3ByZXZpb3VzW2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl9uZXh0W2kuc2lkZXMuZW5hYmxlZD9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLl90aHVtYnMuY3NzKHt3aWR0aDppLnRodW1ic1tlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS50aHVtYnNbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLl9zbGlkZS5jc3Moe3dpZHRoOmkuc2xpZGVbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkuc2xpZGVbZT9cImhlaWdodFwiOlwid2lkdGhcIl19KTt2YXIgdD17d2lkdGg6aS53cmFwcGVyW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLndyYXBwZXJbZT9cImhlaWdodFwiOlwid2lkdGhcIl19O3RbXCJtYXJnaW4tXCIrKGU/XCJsZWZ0XCI6XCJ0b3BcIildPU1hdGgucm91bmQoLS41Kmkud3JhcHBlci53aWR0aCkrXCJweFwiLHRbXCJtYXJnaW4tXCIrKGU/XCJ0b3BcIjpcImxlZnRcIildPTAsdGhpcy53cmFwcGVyLmNzcyh0KSx0aGlzLl9wb3NpdGlvbiYmdGhpcy5tb3ZlVG8odGhpcy5fcG9zaXRpb24sITApfX0sbW92ZVRvUGFnZTpmdW5jdGlvbihpKXtpZighKGk8MXx8aT50aGlzLl92YXJzLnBhZ2VzfHxpPT09dGhpcy5fcGFnZSkpe3ZhciBlPXRoaXMuX3ZhcnMuaXBwKihpLTEpKzE7dGhpcy5tb3ZlVG8oZSl9fSxwcmV2aW91c1BhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZS0xKX0sbmV4dFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLm1vdmVUb1BhZ2UodGhpcy5fcGFnZSsxKX0sc2hvdzpmdW5jdGlvbihpKXt2YXIgZT10aGlzLl9wb3NpdGlvbjwwO2k8MSYmKGk9MSk7dmFyIHQ9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGg7dDxpJiYoaT10KSx0aGlzLl9wb3NpdGlvbj1pLHRoaXMuc2V0QWN0aXZlKGkpLFwicGFnZVwiPT09dGhpcy5fbW9kZSYmdGhpcy5fcGFnZT09PU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKXx8dGhpcy5tb3ZlVG8oaSxlKX0sbW92ZVRvOmZ1bmN0aW9uKGksZSl7aWYodGhpcy51cGRhdGVWYXJzKCksIXRoaXMuZGlzYWJsZWQoKSl7dmFyIHQscyxuPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24sbz0uNSpCb3VuZHMudmlld3BvcnQoKVtuP1wid2lkdGhcIjpcImhlaWdodFwiXSxhPXRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGg7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtzPU1hdGguY2VpbChpL3RoaXMuX3ZhcnMuaXBwKSx0aGlzLl9wYWdlPXMsdD1hKih0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKi0xO3ZhciBoPVwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1kaXNhYmxlZFwiO3RoaXMuX3ByZXZpb3VzX2J1dHRvblsoczwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKSx0aGlzLl9uZXh0X2J1dHRvblsocz49dGhpcy5fdmFycy5wYWdlcz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCl9ZWxzZSB0PW8rLTEqKGEqKGktMSkrLjUqYSk7cz1QYWdlcy5wYWdlO3ZhciByPXt9LGQ9e307cltuP1widG9wXCI6XCJsZWZ0XCJdPTAsZFtuP1wibGVmdFwiOlwidG9wXCJdPXQrXCJweFwiLHRoaXMuX3NsaWRlLnN0b3AoITApLmNzcyhyKS5hbmltYXRlKGQsZT8wOnMmJnMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlscy5zbGlkZXx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5sb2FkQ3VycmVudFBhZ2UoKX0sdGhpcykpfX0sbG9hZEN1cnJlbnRQYWdlOmZ1bmN0aW9uKCl7dmFyIGksZTtpZih0aGlzLl9wb3NpdGlvbiYmdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCYmISh0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwxKSl7aWYoXCJwYWdlXCI9PT10aGlzLl9tb2RlKXtpZih0aGlzLl9wYWdlPDEpcmV0dXJuO2k9KHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHArMSxlPU1hdGgubWluKGktMSt0aGlzLl92YXJzLmlwcCx0aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9ZWxzZXt2YXIgdD1NYXRoLmNlaWwodGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRoL3RoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgpO2k9TWF0aC5tYXgoTWF0aC5mbG9vcihNYXRoLm1heCh0aGlzLl9wb3NpdGlvbi0uNSp0LDApKSwxKSxlPU1hdGguY2VpbChNYXRoLm1pbih0aGlzLl9wb3NpdGlvbisuNSp0KSksdGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8ZSYmKGU9dGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWZvcih2YXIgcz1pO3M8PWU7cysrKXRoaXMuX3RodW1ibmFpbHNbcy0xXS5sb2FkKCl9fSxzZXRBY3RpdmU6ZnVuY3Rpb24oaSl7dGhpcy5fc2xpZGUuZmluZChcIi5mci10aHVtYm5haWwtYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKTt2YXIgZT1pJiZ0aGlzLl90aHVtYm5haWxzW2ktMV07ZSYmZS5hY3RpdmF0ZSgpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb24mJnRoaXMuc2V0UG9zaXRpb24odGhpcy5fcG9zaXRpb24pfX07ZnVuY3Rpb24gVGh1bWJuYWlsKCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVGh1bWJuYWlsLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudmlldz1pLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5wcmVCdWlsZCgpfSxwcmVCdWlsZDpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbFwiKS5kYXRhKFwiZnItcG9zaXRpb25cIix0aGlzLl9wb3NpdGlvbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYoIXRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPXRoaXMudmlldy5vcHRpb25zO1RodW1ibmFpbHMuX3NsaWRlLmFwcGVuZCh0aGlzLnRodW1ibmFpbEZyYW1lPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1mcmFtZVwiKS5hcHBlbmQodGhpcy50aHVtYm5haWwuYXBwZW5kKHRoaXMudGh1bWJuYWlsV3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtd3JhcHBlclwiKSkpKSxcImltYWdlXCI9PT10aGlzLnZpZXcudHlwZSYmdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci1sb2FkLXRodW1ibmFpbFwiKS5kYXRhKFwidGh1bWJuYWlsXCIse3ZpZXc6dGhpcy52aWV3LHNyYzppLnRodW1ibmFpbHx8dGhpcy52aWV3LnVybH0pO3ZhciBlPWkudGh1bWJuYWlsJiZpLnRodW1ibmFpbC5pY29uO2UmJnRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaWNvbiBmci10aHVtYm5haWwtaWNvbi1cIitlKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5sb2FkaW5nPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZy1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5zcGlubmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyXCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXItc3BpblwiKSkpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYm9yZGVyXCIpKSksdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zdGF0ZVwiKSksdGhpcy5yZXNpemUoKX19LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsRnJhbWUmJih0aGlzLnRodW1ibmFpbEZyYW1lLnJlbW92ZSgpLHRoaXMudGh1bWJuYWlsRnJhbWU9bnVsbCx0aGlzLmltYWdlPW51bGwpLHRoaXMucmVhZHkmJih0aGlzLnJlYWR5LmFib3J0KCksdGhpcy5yZWFkeT1udWxsKSx0aGlzLnZpbWVvVGh1bWJuYWlsJiYodGhpcy52aW1lb1RodW1ibmFpbC5hYm9ydCgpLHRoaXMudmltZW9UaHVtYm5haWw9bnVsbCksdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9yZW1vdmVkPSEwLHRoaXMudmlldz1udWxsLHRoaXMuX2NsZWFyRGVsYXkoKX0sbG9hZDpmdW5jdGlvbigpe2lmKCEodGhpcy5fbG9hZGVkfHx0aGlzLl9sb2FkaW5nfHx0aGlzLl9yZW1vdmVkKSl7dGhpcy50aHVtYm5haWxXcmFwcGVyfHx0aGlzLmJ1aWxkKCksdGhpcy5fbG9hZGluZz0hMDt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy50aHVtYm5haWwsZT1pJiZcImJvb2xlYW5cIj09PSQudHlwZShpKT90aGlzLnZpZXcudXJsOml8fHRoaXMudmlldy51cmw7aWYodGhpcy5fdXJsPWUpaWYoXCJ2aW1lb1wiPT09dGhpcy52aWV3LnR5cGUpaWYoZT09PWkpdGhpcy5fdXJsPWUsdGhpcy5fbG9hZCh0aGlzLl91cmwpO2Vsc2Ugc3dpdGNoKHRoaXMudmlldy50eXBlKXtjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9UaHVtYm5haWw9bmV3IFZpbWVvVGh1bWJuYWlsKHRoaXMudmlldy51cmwsJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl91cmw9aSx0aGlzLl9sb2FkKGkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykpfWVsc2UgdGhpcy5fbG9hZCh0aGlzLl91cmwpfX0sYWN0aXZhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIil9LF9sb2FkOmZ1bmN0aW9uKGkpe3RoaXMudGh1bWJuYWlsV3JhcHBlci5wcmVwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpLmF0dHIoe3NyYzppfSkuY3NzKHtvcGFjaXR5OjFlLTR9KSksdGhpcy5mYWRlSW5TcGlubmVyKCksdGhpcy5yZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5pbWc7dGhpcy50aHVtYm5haWxGcmFtZSYmdGhpcy5fbG9hZGluZyYmKHRoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOmUubmF0dXJhbFdpZHRoLGhlaWdodDplLm5hdHVyYWxIZWlnaHR9LHRoaXMucmVzaXplKCksdGhpcy5zaG93KCkpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fZXJyb3IoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KX0sX2Vycm9yOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZXJyb3JcIiksdGhpcy5pbWFnZSYmdGhpcy5pbWFnZS5oaWRlKCksdGhpcy50aHVtYm5haWxXcmFwcGVyLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikpLHRoaXMuc2hvdygpfSxmYWRlSW5TcGlubmVyOmZ1bmN0aW9uKCl7aWYoU3Bpbm5lci5zdXBwb3J0ZWQmJnRoaXMudmlldy5vcHRpb25zLnNwaW5uZXIpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLl9kZWxheT1zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnNwaW5uZXIuc3RvcCghMCkuZmFkZVRvKGkuc2hvd3x8MCwxKX0sdGhpcyksdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lckRlbGF5fHwwKX19LHNob3c6ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5sb2FkaW5nLnN0b3AoITApLmRlbGF5KGkuZGVsYXkpLmZhZGVUbyhpLnNob3csMCl9LF9jbGVhckRlbGF5OmZ1bmN0aW9uKCl7dGhpcy5fZGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpLHRoaXMuX2RlbGF5PW51bGwpfSxyZXNpemU6ZnVuY3Rpb24oKXtpZih0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO2lmKHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt3aWR0aDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lW2k/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3RvcDppPzA6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSksbGVmdDppP1RodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpOjB9KSx0aGlzLnRodW1ibmFpbFdyYXBwZXIpe3ZhciBlPVRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsO2lmKHRoaXMudGh1bWJuYWlsLmNzcyh7d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHQsXCJtYXJnaW4tdG9wXCI6TWF0aC5yb3VuZCgtLjUqZS5oZWlnaHQpLFwibWFyZ2luLWxlZnRcIjpNYXRoLnJvdW5kKC0uNSplLndpZHRoKSxcIm1hcmdpbi1ib3R0b21cIjowLFwibWFyZ2luLXJpZ2h0XCI6MH0pLHRoaXMuX2RpbWVuc2lvbnMpe3ZhciB0LHM9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxuPU1hdGgubWF4KHMud2lkdGgscy5oZWlnaHQpLG89JC5leHRlbmQoe30sdGhpcy5fZGltZW5zaW9ucyk7aWYoby53aWR0aD5zLndpZHRoJiZvLmhlaWdodD5zLmhlaWdodCl7dmFyIGE9MSxoPTE7KHQ9Rml0LndpdGhpbihzLG8pKS53aWR0aDxzLndpZHRoJiYoYT1zLndpZHRoL3Qud2lkdGgpLHQuaGVpZ2h0PHMuaGVpZ2h0JiYoaD1zLmhlaWdodC90LmhlaWdodCk7dmFyIHI9TWF0aC5tYXgoYSxoKTsxPHImJih0LndpZHRoKj1yLHQuaGVpZ2h0Kj1yKSwkLmVhY2goXCJ3aWR0aCBoZWlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oaSxlKXt0W2VdPU1hdGgucm91bmQodFtlXSl9KX1lbHNlIHQ9Rml0LndpdGhpbih0aGlzLl9kaW1lbnNpb25zLG8ud2lkdGg8cy53aWR0aHx8by5oZWlnaHQ8cy5oZWlnaHQ/e3dpZHRoOm4saGVpZ2h0Om59OnMpO3ZhciBkPU1hdGgucm91bmQoLjUqcy53aWR0aC0uNSp0LndpZHRoKSxsPU1hdGgucm91bmQoLjUqcy5oZWlnaHQtLjUqdC5oZWlnaHQpO3RoaXMuaW1hZ2UucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcygkLmV4dGVuZCh7fSx0LHt0b3A6bCxsZWZ0OmR9KSl9fX19fSk7dmFyIFVJPXtfbW9kZXM6W1wiZnVsbGNsaWNrXCIsXCJvdXRzaWRlXCIsXCJpbnNpZGVcIl0sX3VpOiExLF92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3I6W1wiLmZyLWNvbnRlbnQtZWxlbWVudFwiLFwiLmZyLWNvbnRlbnRcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZVwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlIC5mci1zdHJva2UtY29sb3JcIl0uam9pbihcIiwgXCIpLGluaXRpYWxpemU6ZnVuY3Rpb24oaSl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzW2VdLmluaXRpYWxpemUoKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktaW5zaWRlLWhpZGRlbiBmci11aS1mdWxsY2xpY2staGlkZGVuXCIpfSxzZXQ6ZnVuY3Rpb24oaSl7dGhpcy5fdWkmJihXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy11aS1cIit0aGlzLl91aSksT3ZlcmxheS5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS11aS1cIit0aGlzLl91aSkpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItd2luZG93LXVpLVwiK2kpLE92ZXJsYXkuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktdWktXCIraSksdGhpcy5fZW5hYmxlZCYmdGhpcy5fdWkmJnRoaXMuX3VpIT09aSYmKHRoaXNbdGhpcy5fdWldLmRpc2FibGUoKSx0aGlzW2ldLmVuYWJsZSgpLFVJW2ldLnNob3coKSksdGhpcy5fdWk9aX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5zaG93KCl9LGVuYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV1bZT09PXRoaXMuX3VpP1wiZW5hYmxlXCI6XCJkaXNhYmxlXCJdKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSEwfSxkaXNhYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5kaXNhYmxlKCl9LHRoaXMpKSx0aGlzLl9lbmFibGVkPSExfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5hZGp1c3RQcmV2TmV4dChpLGUpfSxzaG93OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLnNob3coaSxlKX0saGlkZTpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5oaWRlKGksZSl9LHJlc2V0OmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXS5yZXNldCgpfSx0aGlzKSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmdGhpcy5zZXQoaS5fdWkpfX07cmV0dXJuIFVJLmZ1bGxjbGljaz17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2UtZnVsbGNsaWNrXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMucmVzZXRQcmV2TmV4dCgpLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxyZXNldFByZXZOZXh0OmZ1bmN0aW9uKCl7dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLnN0b3AoITApLnJlbW92ZUF0dHIoXCJzdHlsZVwiKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtzfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIG49dGhpcy5fcHJldmlvdXMuYXR0cihcInN0eWxlXCIpO3RoaXMuX3ByZXZpb3VzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTt2YXIgbz1wYXJzZUludCh0aGlzLl9wcmV2aW91cy5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLl9wcmV2aW91cy5hdHRyKHtzdHlsZTpufSksc3x8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBhPXQuX2luZm9IZWlnaHR8fDAsaD10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkscj17XCJtYXJnaW4tdG9wXCI6by0uNSphfSxkPVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvd3x8MDt0aGlzLm9wZW5pbmcmJihkPTApLGguc3RvcCghMCkuYW5pbWF0ZShyLGQsaSksdGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLGhbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZihlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpc3dpdGNoKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpKWlmKDEhPT1QYWdlcy5wYWdlcy5sZW5ndGgpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX1lbHNlIFdpbmRvdy5oaWRlKCl9LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3LnR5cGU7dGhpcy5fdmlzaWJsZSYmKCFlfHxcInlvdXR1YmVcIiE9PWUmJlwidmltZW9cIiE9PWUpJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtZnVsbGNsaWNrLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWZ1bGxjbGljay11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktZnVsbGNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkuaW5zaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7fSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKS5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyPSQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9aS5wYWdlWCx0PWkucGFnZVk7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9ufHx0PT09dGhpcy5feSYmZT09PXRoaXMuX3h8fCh0aGlzLl94PWUsdGhpcy5feT10LHRoaXMuc2hvdygpLHRoaXMuc3RhcnRUaW1lcigpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5fb25Nb3VzZUxlYXZlKGkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5jbGVhclRpbWVyKCl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuX3BhZ2VzLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1uZXh0XCIpLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlciksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvLCAuZnItY2xvc2VcIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudC1lbGVtZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fc2hvd0hhbmRsZXI9bnVsbCkpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpKXtpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3RoaXMuX3Zpc2libGUmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1pbnNpZGUtdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4taW5zaWRlLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1pbnNpZGVcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1pbnNpZGVcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5vdXRzaWRlPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLmhpZGUoKSx0aGlzLl9jbG9zZS5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuX3ByZXZpb3VzLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSksdGhpcy5fbmV4dC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cubmV4dCgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktb3V0c2lkZVwiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5lbGVtZW50Lm9mZihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlciksV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciksJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlciksdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KTt0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksc1sodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX2RlbGVnYXRlT3ZlcmxheUNsb3NlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2U7ZSYmZS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWUudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fCQoaS50YXJnZXQpLmlzKFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIikmJihpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxXaW5kb3cuaGlkZSgpKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKCgxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKSYmKGU9ITEpLGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlpZih0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLGUpc3dpdGNoKFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX1lbHNlIFdpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIil9fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSYmJChpLnRhcmdldCkuaXMoVUkuX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcikpaWYoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaylXaW5kb3cuaGlkZSgpO2Vsc2V7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LHNob3c6ZnVuY3Rpb24oKXtCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5zaG93KCl9LGhpZGU6ZnVuY3Rpb24oKXt9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe319LCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGkpe19GcmVzY28uaW5pdGlhbGl6ZSgpfSksRnJlc2NvfSk7IiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuaW1wb3J0IEZyZXNjbyBmcm9tICcuL2ZyZXNjby9qcy9mcmVzY28ubWluJztcblxuLy8gR0VORVJBTCBGVU5DVElPTlNcbmltcG9ydCB7IGNhcm91c2VsLCByZXBsYWNlQ2Fyb3VzZWxBcnJvdywgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0LCBjcmVhdGVHYWxsZXJ5RGVza3RvcCB9IGZyb20gJy4vanMvY2Fyb3VzZWwuanMnO1xuaW1wb3J0IGNoZWNrb3V0IGZyb20gJy4vanMvY2hlY2tvdXQtbm9ibGVzcy5qcyc7XG5pbXBvcnQge3Byb2R1Y3QsIGZpbHRlclByb2R1Y3RzLCByZXNpemVGaWx0ZXJNZW51fSBmcm9tICcuL2pzL3Byb2R1Y3Qtbm9ibGVzcyc7XG4vLyBNRU5VIEZVTkNUSU9OU1xuLy8gTE9HSU4gRlVOQ1RJT05TXG4vLyBDT05UQUNUIEZVTkNUSU9OU1xuLy8gU0hBUkUgRlVOQ1RJT05TXG4vLyBDQVJUIEZVTkNUSU9OU1xuLy8gT1JERVJTIEdSSUQgRlVOQ1RJT05TXG5cblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZU1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWVnYW1lbnUgZnVuY3Rpb25zXG4gKiAuaGFzLW1lZ2FtZW51IHRvIHVzZSBkcm9wZG93biBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gbWVnYW1lbnVGdW5jdGlvbnMoKSB7XG4gIC8vIEJ1dHRvbiBob3ZlciBzaW11bGF0ZXMgY2xpY2sgb24gaXRcbiAgJCgnI21lbnVCdXR0b25NYWluLCAjbWVnYW1lbnVEcm9wZG93bicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyokKCcjbWFpbkNvbnRlbnRDb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMDMzKSB7XG4gICAgICAgICQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyovXG5cbiAgJCgnI21lbnVCdXR0b25NYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICBpZiAoJCgnI25hdmJhck1haW5Nb2JpbGUnKS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lZ2FtZW51IGZ1bmN0aW9ucyA6IG1hbmFnZSBtb2JpbGUgbWVudVxuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcblxuICAkKCdhLm5hdi10YXhvbicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykrJyBpbWcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZycpLmhpZGUoKTtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiI25hdmJhck1haW5Nb2JpbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJCgnLmFjdGl2ZS5sb2NhbGUtbGluaywgLm5hdmJhclRheG9uc0xpbmssIC5sb2ctbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKHRoaXMpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI29wZW5BY2NvdW50TWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQoJy5sb2ctbGluaycpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgfSk7XG5cbiAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJY29uZXNGdW5jdGlvbnMoKSB7XG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWNhcnQnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4JylcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJUYXhvbnMnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ2luRnVuY3Rpb25zKCkge1xuICBpZigkKCcubG9naW4tZm9ybScpKSB7XG4gICAgJCgnLnN1Ym1pdC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdmb3JtJyk7XG4gICAgICAkKGZvcm1FbGVtZW50KS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCQoJy52ZXJpZnktYWNjb3VudCcpKSB7XG4gICAgJCgnLnZlcmlmeS1hY2NvdW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKSkge1xuICAgICQoJyNyZXNldFBhc3N3b3JkU3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgnJyk7XG4gICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nJykuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudDpub3QoLnN1Y2Nlc3MpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICQoJy5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyAuZm9ybS1lcnJvcnMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLnRleHQoJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvcnMgdWwgbGknKS50ZXh0KCkpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgJCgnYnV0dG9uLnN1Ym1pdC1yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVnZXggPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykpO1xuICAgIGNvbnN0IGlucHV0UmVnaXN0ZXJGb3JtID0gcmVnaXN0ZXJGb3JtLmZpbmQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWwgPSBpbnB1dFJlZ2lzdGVyRm9ybS52YWwoKTtcbiAgICBjb25zdCBpbnZhbGlkU3BhbiA9IGlucHV0UmVnaXN0ZXJGb3JtLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKTtcbiAgICBpZiAocmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgIGludmFsaWRTcGFuLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICBpbnB1dFJlZ2lzdGVyRm9ybS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgcmVnaXN0ZXJGb3JtLnN1Ym1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkU3Bhbi5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0uYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kKCcucmVnaXN0ZXItZm9ybSBpbnB1dCwgLmhlYWRlci1yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgY29uc3QgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICB9XG59KTtcblxuLyoqXG4gKiBDb250YWN0IFBhZ2UgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gY29udGFjdFBhZ2VGdW5jdGlvbigpIHtcbiAgJCgnI2NvbnRhY3RQYWdlIGZvcm0gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgJChmb3JtKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwgLm1vZGFsLWJvZHkgZGl2JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZXJyb3JzIG9mIGZvcm0gd2hlbiBzdWNjZXNzXG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXScpLnZhbCgnJykucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlICk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBbbmFtZV49XCJzeWxpdXNfY29udGFjdFwiXSwgI2NvbnRhY3RQYWdlIFtmb3JePVwic3lsaXVzX2NvbnRhY3RfXCJdJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNikge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBlcnJvckxpc3QgPSAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJ3NwYW4nKS50b0FycmF5KCk7XG4gICAgICAgICAgZXJyb3JMaXN0LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLm91dGVyVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmNsYXNzTmFtZSAhPT0gJ2FjY2VwdENndicpIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgICAgICAgICAgICAuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+JyArIGVycm9yLm91dGVyVGV4dCArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAubmV4dCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQxNykge1xuICAgICAgICAgICQoJyNjb250YWN0UGFnZSAuY29udGFjdC1lcnJvcicpLmh0bWwoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gICQoJyNzeWxpdXNfY29udGFjdF9zdWJqZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZigkKGUudGFyZ2V0KS52YWwoKSA9PT0gJ290aGVyJykge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5vdGhlci1zdWJqZWN0JykuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2hhcmUgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gc2hhcmVGdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhcnRGdW5jdGlvbnMoKSB7XG4gIC8vIFJlbG9hZCBRdHlcbiAgJCgnLnJlbG9hZC1xdHknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBcHBseSBib251cyBwb2ludHNcbiAgJCgnLmJvbnVzLXBvaW50cy1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBib251c1BvaW50cyA9ICQoJy5ib251cy1wb2ludHMnKS52YWwoKTtcbiAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgIH1cblxuICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgfSk7XG5cbiAgJChcImJvZHlcIikub24oXCJrZXlkb3duXCIsIFwiLmJvbnVzLXBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpICE9IHVuZGVmaW5lZCkge1xuICAgICQoJy5ib251cy1wb2ludHMtaW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmJvbnVzLXBvaW50cycpLnZhbCgkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoKSk7XG4gIH1cblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY291cG9uID0gJCgnLmNvdXBvbi1jb2RlJykudmFsKCk7XG4gICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICB9XG5cbiAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gIH0pO1xuXG4gICQoXCJib2R5XCIpLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICAvLyBDaGFuZ2UgcXVhbnRpdHkgb24gbW9iaWxlXG4gICQoJy5tb2JpbGUtcXR5Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1F0eSA9ICQodGhpcykudmFsKCk7XG4gICAgY29uc3QgaW5wdXRRdHlOYW1lID0gJCh0aGlzKS5kYXRhKCdpbnB1dC1xdHknKTtcbiAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgfSk7XG5cbiAgaWYoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmNvdXBvbi1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmNvdXBvbi1jb2RlJykudmFsKCQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoKSk7XG4gIH1cblxuICAkKCdhLmJ0bi10by1jaGVja291dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dpblBhZ2VGdW5jdGlvbnMoKSB7XG4gICQoJy5yZXNldC1wYXNzd29yZC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJCh0aGlzKS5kYXRhKCdtb2RhbElkJyk7XG4gICAgJChtb2RhbElkKS5tb2RhbCgnc2hvdycpO1xuICAgICQoJy5oZWFkZXItZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGNhcm91c2VsKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBzaGFyZUZ1bmN0aW9ucygpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3QoKTtcbiAgZmlsdGVyUHJvZHVjdHMoKTtcbiAgLy8gTWVudSBGdW5jdGlvbnNcbiAgbWVnYW1lbnVGdW5jdGlvbnMoKTtcbiAgbWVudUljb25lc0Z1bmN0aW9ucygpO1xuXG4gIGxvZ2luRnVuY3Rpb25zKCk7XG4gIG9yZGVyc0dyaWRGdW5jdGlvbnMoKTtcbiAgbG9naW5QYWdlRnVuY3Rpb25zKCk7XG4gIGNhcnRGdW5jdGlvbnMoKTtcbiAgY2hlY2tvdXQoKTtcblxuICBjb250YWN0UGFnZUZ1bmN0aW9uKCk7XG5cbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgcmVwbGFjZUNhcm91c2VsQXJyb3coKTtcbiAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgfSovXG4gIC8vIFNob3cgbWVudSBhZnRlciBwYWdlIGlzIGxvYWRlZFxuICAkKCcubW9iaWxlLW9mZmNhbnZhcycpLnNob3coKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLnNob3coKTtcbn1cblxuZXhwb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG4vLyBpbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi9qcy9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgLy8gY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICAvLyB9XG4gIC8vIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICAvLyBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIC8vIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUk9VU0VMIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBGcmVzY28gZnJvbSAnLi4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG5jb25zdCBjYXJvdXNlbCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcblxuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI3Byb2R1Y3RHYWxsZXJ5JykpO1xuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgbWFpbiBjYXJvdXNlbHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG5cbiAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGlzQ2FydEl0ZW1zQ2Fyb3VzZWwgPSAoY2Fyb3VzZWxFbGVtZW50ID09PSAkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrICYmIGNhcm91c2VsRWxlbWVudFswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGlzQ2FydEl0ZW1zQ2Fyb3VzZWwpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihzbGljayl7XG4gICAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGNhcm91c2VsIHdoZW4gdXNlciBoYXZlIG1vcmUgdGhhbiA0IGFkZHJlc3NlcyBpbiBDaGVja291dFxuICovXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICByb3dzOiAyLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzbGlkZXNQZXJSb3c6IDIsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByb3dzOiAzLFxuICAgICAgICAgIHNsaWRlc1BlclJvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IHZpc2libGVTbGlkZXJEaXYgPSAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdkLW5vbmUnKTtcbiAgaWYodmlzaWJsZVNsaWRlckRpdiAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9IGVsc2UgaWYgKGNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljaygndW5zbGljaycpO1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRzKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJlc2NvLXNsaWRlJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBGcmVzY28uc2hvdyhcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICB7XG4gICAgICAgICAgdGh1bWJuYWlsczogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBOdW1iZXIoaW5kZXggKyAxKVxuICAgICAgKTtcblxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIHZlcnRpY2FsbHlcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NlbGVjdG9yID0gJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCc7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGxldCBhcnJvd1RvcFZhbHVlO1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKGltZ1NlbGVjdG9yLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIGNhcm91c2VsIGFycm93cyBvbmx5IG9uIGNhcnQgaXRlbXMgY2Fyb3VzZWxcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydChlbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgaW1nJywgZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0KTtcbiAgJChlbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG59XG5cbmV4cG9ydCB7Y2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCwgY3JlYXRlR2FsbGVyeURlc2t0b3B9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQWRkcmVzc0Nhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5cbi8vIE1haW4gZnVuY3Rpb24gdXNlZCBpbiBpbml0XG5jb25zdCBzYXZlQnV0dG9uID0gJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1pbi1hY2NvdW50Jyk7XG5jb25zdCBjYW5jZWxCdG4gPSAkKCcjY2hlY2tvdXRQYWdlIC5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnKTtcblxuY29uc3QgY2hlY2tvdXQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICBjb25zdCBjb250YWluZXIgPSAkKCcjY2hlY2tvdXRQYWdlJyk7XG4gIC8vIFdoZW4gdGhlIHVzZXIgd2FudHMgdG8gY2hhbmdlIGhpcyBhZGRyZXNzXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdjbGlja2VkJykgJiYgISQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGFzQ2xhc3MoJ2QtYmxvY2snKSkge1xuICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcblxuICAgICAgY2FuY2VsQnRuLnNob3coKTtcbiAgICAgIGNhbmNlbEJ0bi5wcmV2KCkuaGlkZSgpO1xuXG4gICAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2NoYW5nZScsIGNvbnRhaW5lcik7XG4gICAgICBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoJCgnI2Nhcm91c2VsQWRkcmVzc0xpc3QnKSk7XG4gICAgICAvLyBDcmVhdGUgZXZlbnQgb24gYWRkcmVzcyBpdGVtIGFmdGVyIGNhcm91c2VsIGlzIG9wZW5cbiAgICAgICQoJy5jaG9vc2UtYWRkcmVzcyAuY2hvb3NlLWFkZHJlc3MtaXRlbSBhZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNob29zZUFkZHJlc3MoJCh0aGlzKSwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGFzQ2xhc3MoJ2QtYmxvY2snKSkge1xuICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnYWRkJywgY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gICAgLy8gV2hlbiB1c2VyIHdhbnRzIHRvIGFkZCBhIG5ldyBhZGRyZXNzIHRvIGhpcyBhY2NvdW50XG4gICQoJ2EuY2hlY2tvdXQtYWRkLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3QoJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcy5jbGlja2VkJywgY29udGFpbmVyKVswXSlbMV07XG4gICAgc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdhZGQnLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgc2F2ZSBhIG5ldyBhZGRyZXNzXG4gIHNhdmVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYWRkcmVzc1R5cGUgPSAnc2hpcHBpbmcnO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzNdO1xuICAgICAgJCgnI2NoZWNrb3V0UGFnZSAuZGF0YS0nICsgYWRkcmVzc1R5cGUpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkICsgJ10nO1xuICAgICAgICBjb25zdCB0b1NhdmUgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZpZWxkTmFtZTtcbiAgICAgICAgY29uc3QgdG9SZXBsYWNlID0gJy5jaGFuZ2UtJysgYWRkcmVzc1R5cGUgKyctYWRkcmVzcyAnICsgZmllbGROYW1lO1xuICAgICAgICAkKHRvUmVwbGFjZSkudmFsKCQodG9TYXZlKS52YWwoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2hlY2tvdXRTYXZlQWRkcmVzcyh0aGlzLCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiBhZGRyZXNzIHBhZ2UgbmV4dCBidXR0b25cbiAgJCgnLm1haW4tYWRkcmVzcy1mb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmFkZENsYXNzKCdsb2FkaW5nJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgY2hhbmdlc1xuICAkKCdhLmNhbmNlbC1jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBjYW5jZWxzIHRoZSBhZGRyZXNzIGFkZFxuICAkKCdhLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICB9KTtcbn07XG5cbi8vIFdoZW4gdXNlciBjaG9zZSBhbiBhZGRyZXNzIGlzIHRoZSBhZGRyZXNzZXMgbGlzdFxuZnVuY3Rpb24gY2hvb3NlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5kYXRhLWFkZHJlc3MnLCBlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICBjb25zdCBmaWVsZFNlbGVjdG9yID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZFNlbGVjdG9yO1xuICAgIGNvbnN0IGNob3NlbkFkZHJlc3NUZXh0ID0gJy5kYXRhLScrIGFkZHJlc3NUeXBlICsnLicgKyBmaWVsZE5hbWU7XG5cbiAgICBsZXQgY2hvc2VuVmFsdWUgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS50ZXh0KGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCkuc3Vic3RyaW5nKDAsIDIpO1xuICAgIH1cbiAgICAkKGZvcm1GaWVsZCkudmFsKGNob3NlblZhbHVlKTtcblxuICAgIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgICAgaWYgKCQodGhpcykudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLmNsb3Nlc3QoJ2FkZHJlc3MnKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIGNob3NlblZhbHVlKTtcbiAgfSk7XG4gICQoJyNzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc19kaWZmZXJlbnRCaWxsaW5nQWRkcmVzcycsIGNvbnRhaW5lcikucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xufVxuXG4vKiBTYXZlIGFkZHJlc3MgaW4gdXNlciBhY2NvdW50IDogUmV0dXJucyBlcnJvcnMgaW4gZm9ybSBpZiBub3QgdmFsaWQgKi9cbmZ1bmN0aW9uIGNoZWNrb3V0U2F2ZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBmb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJyk7XG4gICQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX3R5cGVcIl0nLCBmb3JtKS52YWwoYWRkcmVzc1R5cGUpO1xuICBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBmb3JtJywgY29udGFpbmVyKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBkYXRhU3VjY2Vzc0RpdiA9ICQocmVzcG9uc2UpO1xuICAgICAgY29uc3Qgbm9BZGRyZXNzID0gc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJyk7XG4gICAgICBpZihkYXRhU3VjY2Vzc0Rpdi5oYXNDbGFzcygnc2F2ZS1hZGRyZXNzLXN1Y2Nlc3MnKSkge1xuICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuXG4gICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUodGhpcywgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIC8vIElmIFVzZXIgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAgICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKCcuY2hvc2VuLWFkZHJlc3MgLmRhdGEtJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy4nICsgZmllbGROYW1lLCBjb250YWluZXIpO1xuICAgICAgICAgICAgZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSksIGZpZWxkTmFtZSwgZGF0YVN1Y2Nlc3NEaXYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQoJy5hZGRyZXNzLWJvb2snLCBjb250YWluZXIpLmh0bWwoJCgnLmFkZHJlc3MtYm9vaycsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vQWRkcmVzcykge1xuICAgICAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgIHNob3dNYWluRm9ybShjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCcuZm9ybS1lcnJvci1tZXNzYWdlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJCh0aGlzKS5jbG9zZXN0KCdsYWJlbCcpLmF0dHIoJ2ZvcicpO1xuICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbaWQ9XCInKyBmaWVsZE5hbWUgKydcIl0nLCBjb250YWluZXIpLmFkZENsYXNzKCdpcy1pbnZhbGlkJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+PHNwYW4gY2xhc3M9XCJmb3JtLWVycm9yLW1lc3NhZ2UgZC1ibG9ja1wiPicgKyBmaWVsZEVycm9yICsgJzwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG59XG5cbi8qIEZpbGwgYWRkcmVzcyBmb3JtIGZpZWxkcyB0byBhdm9pZCBlcnJvcnMgKi9cbmZ1bmN0aW9uIGZpbGxBZGRyZXNzKGZpZWxkSWQsIGFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3Qga2VlcENhbWVsRmllbGQgPSBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdjb3VudHJ5Q29kZSddO1xuICBjb25zdCBkYXRhVG9GaWxsID0gJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlLCBjb250YWluZXIpLmRhdGEoKTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmICgha2VlcENhbWVsRmllbGQuaW5jbHVkZXMoZmllbGROYW1lKSkge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgICQodGhpcykudmFsKGRhdGFUb0ZpbGxbZmllbGROYW1lXSk7XG4gIH0pO1xuICAkKCcjaW5BY2NvdW50X3NhdmVfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbn1cblxuLyogRmlsbCBhZGRyZXNzZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBuZXh0IGJ1dHRvbiAqL1xuZnVuY3Rpb24gZmlsbEFsbEFkZHJlc3Nlcyhjb250YWluZXIpIHtcbiAgWydzaGlwcGluZycsICdiaWxsaW5nJ10uZm9yRWFjaCgoYWRkcmVzc1R5cGUpID0+IHtcbiAgICBjb25zdCBmaWVsZElkID0gJ3N5bGl1c19jaGVja291dF9hZGRyZXNzXycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzJztcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgJy5tYWluLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcilcbiAgfSlcbn1cblxuLyogRmlsbCBvdGhlciBhZGRyZXNzIHR5cGUgZm9ybSB3aGVuIHNhdmluZyBuZXcgYWRkcmVzcyAqL1xuZnVuY3Rpb24gZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IG90aGVyQWRkcmVzc1R5cGUgPSBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKTtcbiAgbGV0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gIGlmIChzYXZlQnV0dG9uLmhhc0NsYXNzKCduby1hZGRyZXNzZXMnKSkge1xuICAgIGZpbGxPdGhlckZvcm0oYWRkcmVzc1R5cGUsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIGZpbGxBZGRyZXNzKGZpZWxkSWQsIG90aGVyQWRkcmVzc1R5cGUsICcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpO1xuICB9XG59XG5cbi8vIEZpbGwgb3RoZXIgbmV3IGFkZHJlc3MgZm9ybSBPTkxZIElGIHVzZXIgZG9uJ3QgaGF2ZSBhZGRyZXNzZXMgeWV0XG5mdW5jdGlvbiBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCBmb3JtLCBjb250YWluZXIpIHtcbiAgY29uc3QgZmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgYWRkcmVzc1R5cGU7XG4gIGNvbnN0IG90aGVyRmllbGRJZCA9ICdpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZTtcbiAgJChmb3JtICsgJyBbaWRePVwiJyArIGZpZWxkSWQgKyAnXCJdJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyhcXHcrKVxcXSQvZ207XG4gICAgbGV0IGZpZWxkTmFtZSA9IHJlZ2V4LmV4ZWMoJCh0aGlzKS5hdHRyKCduYW1lJykpWzFdO1xuICAgIGlmIChmaWVsZE5hbWUgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBjb25zdCBpZFRvRmlsbCA9ICcjJyArIG90aGVyRmllbGRJZCArICdfJyArIGZpZWxkTmFtZTtcbiAgICAkKGlkVG9GaWxsKS52YWwoJCh0aGlzKS52YWwoKSk7XG4gIH0pO1xufVxuXG4vLyBGaWxsIGZvcm0gYW5kIGRpdiBkYXRhIHdoZW4gc2F2ZSBuZXcgYWRkcmVzc1xuZnVuY3Rpb24gZmlsbERhdGFBZnRlclNhdmUoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGZpZWxkTmFtZSwgY29udGFpbmVyKSB7XG4gIC8vIEdldCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gIGNvbnN0IG5ld1ZhbHVlID0gJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpO1xuXG4gIC8vIENyZWF0ZSBtYWluIGZvcm0gZmllbGQgc2VsZWN0b3JcbiAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ10nO1xuICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZm9ybUZpZWxkTmFtZTtcblxuICAvLyBSZXBsYWNlIGZpZWxkIHdpdGggdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICAkKGZpZWxkVG9SZXBsYWNlKS52YWwobmV3VmFsdWUpO1xuXG4gIC8vIFJlcGxhY2UgdGV4dCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChlbGVtZW50KS50ZXh0KG5ld1ZhbHVlKTtcbiAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICQoZWxlbWVudCkudGV4dCgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuY291bnRyeU5hbWUnLCBjb250YWluZXIpLmh0bWwoKSk7XG4gIH1cblxuICAvLyBTaG93IG9yIGhpZGUgc3RyZWV0MiBjb250YWluZXIgYWNjb3JkaW5nIHRvIHZhbHVlXG4gIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgIGlmICgkKCcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLXN1Y2Nlc3MuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKS5odG1sKCkudHJpbSgpICE9PSAnJykge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBhZGRyZXNzIGRpdiBkYXRhXG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2FuY2VsLWluZm8uJyArIGFkZHJlc3NUeXBlKS5hdHRyKCdkYXRhLScgKyBnZXREYXRhRmllbGROYW1lKGZpZWxkTmFtZSksIG5ld1ZhbHVlKTtcbn1cblxuLyogU2hvdyBNYWluIGZvcm0gd2hlbiB1c2VyIGhhdmUgbm8gYWRkcmVzc2VzICovXG5mdW5jdGlvbiBzaG93TWFpbkZvcm0oY29udGFpbmVyKSB7XG4gIC8vIEhpZGUgZGl2IG1lbnRpb25pbmcgdGhhdCB1c2UgZG9lc24ndCBoYXZlIGFkZHJlc3Nlc1xuICAkKCcubm8tYWRkcmVzcy15ZXQnLCBjb250YWluZXIpLnJlbW92ZSgpO1xuICAvLyBIaWRlIGFkZCBuZXcgYWRkcmVzcyBmb3JtXG4gICQoJy5hZGQtc2hpcHBpbmctYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybSB0aXRsZVxuICAkKCcubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC51c2UnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlIC5hZGQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgLy8gU2hvdyBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBtYWluIGZvcm1cbiAgJCgnLmNhbmNlbC1hZGQtY2hlY2tvdXQtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLm5leHQoJ2EuYnRuJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcycsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufVxuXG4vKiBIaWRlIGFkZHJlc3MgbW9kaWZpY2F0aW9uIGNvbnRhaW5lciAqL1xuZnVuY3Rpb24gaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5oaWRlKCk7XG4gIGNhbmNlbEJ0bi5wcmV2KCkuc2hvdygpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICQoJyNtYWluQ29udGVudENvbnRhaW5lcicpWzBdLnNjcm9sbFRvcCA9IDA7XG59XG5cbi8qIFJlbW92ZSBlcnJvciBpbmRpY2F0b3JzIHdoZW4gc2F2ZSBhZGRyZXNzIGZvcm0gaXMgc3VibWl0dGVkICovXG5mdW5jdGlvbiBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcikge1xuICAvLyBVc2UgYWRkcmVzc1R5cGUgY2hvc2VuIHdoZW4gc2F2ZSBmb3JtIGlzIHNob3duXG4gIGxldCBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVszXTtcbiAgaWYgKGFkZHJlc3NUeXBlID09PSAnbm8tYWRkcmVzc2VzJykge1xuICAgIGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHNhdmVCdXR0b25bMF0pWzRdO1xuICB9XG4gICQoJy5jaGFuZ2UtJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuY2hhbmdlLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICctdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0LCAuc2F2ZS1hZGRyZXNzLWZvcm0gc2VsZWN0JywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmludmFsaWQtZmVlZGJhY2snLCBjb250YWluZXIpLnJlbW92ZSgpO1xufVxuXG4vKiBSZXBsYWNlIGFsbCBmb3JtIGFuZCBkaXNwbGF5ZWQgYWRkcmVzcyBkYXRhIHdoZW4gY2FuY2VsIG1vZGlmaWNhdGlvbnMgKi9cbmZ1bmN0aW9uIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKSB7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvJywgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9sZERhdGEgPSAkKHRoaXMpLmRhdGEoKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9ICh0aGlzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pKVsxXTtcbiAgICBjb25zdCBmaWVsZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRGF0YSk7XG5cbiAgICBmaWVsZE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdjb3VudHJ5TmFtZScpIHtcbiAgICAgICAgZmllbGROYW1lID0gJ2NvdW50cnlDb2RlJ1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dFRvUmVwbGFjZSA9ICcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLicgKyBmaWVsZE5hbWU7XG4gICAgICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgICAgIC8vIFNldCBmb3JtIHdpdGggb2xkIGRhdGFcbiAgICAgICQoZmllbGRUb1JlcGxhY2UsIGNvbnRhaW5lcikudmFsKG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgaWYgKGVsZW1lbnQgIT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgICAgLy8gU2V0IGNob3NlbiBBZGRyZXNzIHdpdGggb2xkIGRhdGFcbiAgICAgICAgJCh0ZXh0VG9SZXBsYWNlKS50ZXh0KG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gU2hvdyBhZGQgYWRkcmVzcyBmb3JtXG5mdW5jdGlvbiBzaG93QWRkRm9ybShhZGRyZXNzVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy5jaGVja291dC1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5uZXctYWRkcmVzcy10aXRsZScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nLCBjb250YWluZXIpLnZhbCgnJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcblxuICAvLyBIaWRlIGFsbCBzYXZlIGFkZHJlc3MgZm9ybXMgYmVmb3JlIHNob3dpbmcgdGhlIGNob3NlbiBvbmVcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtjbGFzc149XCJhZGQtXCJdJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAuYWRkLScgKyBhZGRyZXNzVHlwZSArICctYWRkcmVzcycsIGNvbnRhaW5lcikuc2hvdygpO1xufVxuXG4vKiBNYW5hZ2Ugd2hhdCB0eXBlIG9mIGFkZHJlc3Mgd2lsbCBiZSByZXBsYWNlIGFuZC9vciBzYXZlZCAqL1xuZnVuY3Rpb24gbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsIHNlbGVjdG9yVHlwZSwgY29udGFpbmVyKSB7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgYWRkcmVzc1R5cGUgKyAnLXRpdGxlJywgY29udGFpbmVyKS5zaG93KCk7XG4gICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgLy8gQWxzbyBNYW5hZ2UgU2F2ZUJ1dHRvbiBjbGFzc1xuICBzYXZlQnV0dG9uLmFkZENsYXNzKGFkZHJlc3NUeXBlKTtcbiAgc2F2ZUJ1dHRvbi5yZW1vdmVDbGFzcyhnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKi9cbi8qIENPTU1PTiBGVU5DVElPTlMgKi9cbi8qKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2V0IGNsYXNzIGxpc3QgZnJvbSBnaXZlbiBlbGVtZW50XG5mdW5jdGlvbiBnZXRDbGFzc0xpc3QoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbn1cblxuLy8gR2V0IGZpZWxkIG5hbWUgdG8gZmlsbCBkYXRhIGluZm8gaW4gLmNhbmNlbC1pbmZvIGRpdlxuZnVuY3Rpb24gZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IC9bQS1aXS9nbS5leGVjKGZpZWxkTmFtZSk7XG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIChmaWVsZE5hbWUuc3Vic3RyKDAsIG1hdGNoZXMuaW5kZXgpICsgJy0nICsgZmllbGROYW1lLnN1YnN0cihtYXRjaGVzLmluZGV4LCBmaWVsZE5hbWUubGVuZ3RoKSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZE5hbWU7XG59XG5cbi8vIEdldCBvdGhlciBhZGRyZXNzIHR5cGUgZnJvbSBhZGRyZXNzIHR5cGUgZ2l2ZVxuZnVuY3Rpb24gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkge1xuICByZXR1cm4gKGFkZHJlc3NUeXBlID09PSAnc2hpcHBpbmcnKSA/ICdiaWxsaW5nJyA6ICdzaGlwcGluZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrb3V0O1xuIiwiaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3IgPSAnI3Byb2R1Y3RzRmlsdGVycyc7XG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlID0gJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnO1xuXG5jb25zdCBwcmljZU1pblNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nO1xuY29uc3QgcHJpY2VNYXhTZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJztcblxuY29uc3QgcHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgICB9XG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAkKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gJCgnaW5wdXRbbmFtZV49XCInICsgJChhZGRUb0NhcnRGb3JtKS5kYXRhKCduYW1lVG9DaGVjaycpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoO1xuICAgIGNvbnN0IGJ1bmRsZUl0ZW1zQ291bnQgPSAkKCdkaXYuYnVuZGxlLWl0ZW0nKS5sZW5ndGg7XG4gICAgaWYoc2VsZWN0ZWRTaXplID4gMCAmJiBzZWxlY3RlZFNpemUgPCBidW5kbGVJdGVtc0NvdW50ICkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdDpub3QoLmlucHV0LWNoZWNrZWQpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPT09IDApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pXG5cbiAgJCgnaW5wdXRbaWRePVwiYml0YmFnX3N5bGl1c19wcm9kdWN0X2J1bmRsZV9wbHVnaW5fYWRkX3Byb2R1Y3RfYnVuZGxlX3RvX2NhcnRfXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLmZpbmQoJ3NwYW4uaW52YWxpZC1mZWVkYmFjaycpLmFkZENsYXNzKCdpbnB1dC1jaGVja2VkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIH0pXG59O1xuXG5jb25zdCBmaWx0ZXJQcm9kdWN0cyA9IGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgY3JpdGVyaWEgPSBxdWVyeVN0cmluZy5pbmRleE9mKCdjcml0ZXJpYScpO1xuICBjb25zdCBwcmljZUlucHV0ID0gJCgnLnByaWNlLWZpbHRlciAucHJpY2UtaW5wdXQnKTtcblxuICBsZXQgcHJpY2VTbGlkZXI7XG4gIGxldCBwcmljZVNsaWRlck1vYmlsZTtcblxuICBpZiAocHJpY2VJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgcHJpY2VTbGlkZXIgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICBwcmljZVNsaWRlck1vYmlsZSA9IGNyZWF0ZVByaWNlU2xpZGVyKHByaWNlSW5wdXQsIHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpO1xuXG4gICAgLy8gV2hlbiB1c2VyIGNoYW5nZXMgcHJpY2UgaW5wdXQgdmFsdWVcbiAgICBwcmljZUlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKGUud2hpY2ggIT09IDggJiYgIWlzTmFOKFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKXtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgICAgICBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTUFOQUdFIERFU0tUT1AgRklMVEVSU1xuICAgKi9cbiAgLy8gU2l6ZSBmaWx0ZXIgbWFuYWdlbWVudFxuICBjb25zdCBzaXplRmlsdGVySW5wdXQgPSAkKCcjc2l6ZUZpbHRlciBpbnB1dCcpO1xuICBzaXplRmlsdGVySW5wdXQuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgaWYodGhpcy5jaGVja2VkKSB7XG4gICAgICAkKHRoaXMpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCdpbnB1dFtkYXRhLWlkPVwiJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIHNpemVGaWx0ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gVmFsaWRhdGUgZmlsdGVycyBvbiBkZXNrdG9wXG4gICQoJ2EudmFsaWRhdGUtZmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJGb3JtJykuc3VibWl0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNQU5BR0UgTU9CSUxFIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnQgb24gbW9iaWxlXG4gICQoJyNjcml0ZXJpYVNpemVNb2JpbGUgaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlucHV0VG9DaGVjayA9ICQoZS50YXJnZXQpLmRhdGEoJ2lkJyk7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydGluZ1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dC5pbnB1dC1zb3J0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dCcpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciAuY2hlY2ttYXJrIC5jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAkKGUudGFyZ2V0KS5uZXh0KCcuY2hlY2ttYXJrJykuZmluZCgnLmNoZWNrZWQnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICB9KTtcblxuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzXG4gICQoJyNwcm9kdWN0RmlsdGVyTW9iaWxlRm9ybSBidXR0b24uYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCQoJy5pbnB1dC1zb3J0aW5nOmNoZWNrZWQnKS52YWwoKSA9PT0gJ2NyZWF0ZWRBdCcpIHtcbiAgICAgICQoJy5pbnB1dC1zb3J0aW5nOmNoZWNrZWQnKS5yZW1vdmUoKTtcbiAgICAgICQoJy5pbnB1dC1zb3J0aW5nLWNyZWF0ZWRBdCcpLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtaW5saW5lLWJsb2NrJyk7XG4gICAgfVxuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlciwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yKSk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBNb2JpbGUgZmlsdGVycyBiZWhhdmlvdXJcbiAgJCgnLnByb2R1Y3QtZmlsdGVycy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIHJlc2l6ZUZpbHRlck1lbnUoKTtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnLmNsb3NlJywgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSkuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogR0VORVJBTCBGVU5DVElPTlNcbiAgICovXG4gIC8vIEhpZGUgcmVpbml0aWFsaXphdGlvbiBidXR0b24gd2hlbiBmaWx0ZXJzIGhhdmUgbm8gY3JpdGVyaWFcbiAgaWYgKGNyaXRlcmlhICE9PSAtMSkge1xuICAgICQoJy5yZWluaXQtZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gIH1cbiAgLy8gQWRkIGFjdGlvbiB0byBjbG9zZSBpY29uXG4gICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmRyb3Bkb3duLXRvZ2dsZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pXG59XG5cbi8qKlxuICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gd2luZG93IGlzIHJlc2l6ZWQgdG8gYXZvaWQgc2hvd2luZyBmaWx0ZXIgbW9iaWxlIG1lbnUgb24gZGVza3RvcFxuICovXG5jb25zdCByZXNpemVGaWx0ZXJNZW51ID0gZnVuY3Rpb24gcmVzaXplRmlsdGVyTW9iaWxlTWVudSgpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSAkKCcjaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyQmFubmVyID0gJCgnLmhlYWRlci1iYW5uZXInKTtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXJDb250YWluZXIuaGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgaGVhZGVyT3V0ZXJIZWlnaHQgPSBoZWFkZXJDb250YWluZXIub3V0ZXJIZWlnaHQoKSAtIGhlYWRlckJhbm5lci5oZWlnaHQoKTtcbiAgICBjb25zdCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjZmlsdGVyU3VibWl0Jykub3V0ZXJIZWlnaHQoKSAtIDEwO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnKS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNmaWx0ZXJMaXN0JykuY3NzKCdoZWlnaHQnLCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgcHJpY2Ugc2xpZGVyIG9uIHRheG9uIHBhZ2VzXG4gKlxuICogQHBhcmFtIHByaWNlSW5wdXRcbiAqIEBwYXJhbSBjb250YWluZXJTZWxlY3RvclxuICogQHJldHVybnMgbm9VaVNsaWRlclxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBjb250YWluZXJTZWxlY3Rvcikge1xuICBjb25zdCBwcmljZUNvbnRhaW5lciA9ICQoY29udGFpbmVyU2VsZWN0b3IpO1xuICBjb25zdCBwcmljZVJhbmdlID0gJCgnI3ByaWNlUmFuZ2UnLCBwcmljZUNvbnRhaW5lcilbMF07XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIC8vIFByZXBhcmUgc2xpZGVyIG9wdGlvbnNcbiAgY29uc3QgdGF4b25NaW5QcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21pbicpKTtcbiAgY29uc3QgdGF4b25NYXhQcmljZSA9IHBhcnNlRmxvYXQocHJpY2VJbnB1dC5maXJzdCgpLmRhdGEoJ21heCcpKTtcbiAgY29uc3QgcmFuZ2VTbGlkZXJPcHRpb25zID0ge1xuICAgIHN0YXJ0OiBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXSxcblxuICAgIHJhbmdlOiB7XG4gICAgICAnbWluJzogW3RheG9uTWluUHJpY2VdLFxuICAgICAgJ21heCc6IFt0YXhvbk1heFByaWNlXVxuICAgIH0sXG4gICAgc3RlcDogMSxcbiAgICBjb25uZWN0OiB0cnVlLFxuICAgIGZvcm1hdDoge1xuICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZnJvbTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJlaGF2aW91cjogJ3RhcCcsXG4gICAgdG9vbHRpcHM6IGZhbHNlXG4gIH07XG5cbiAgY29uc3Qgc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUocHJpY2VSYW5nZSwgcmFuZ2VTbGlkZXJPcHRpb25zKTtcbiAgc2xpZGVyLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgcHJpY2VNaW4udmFsKHBhcnNlSW50KG5ld1ZhbHVlWzBdKSk7XG4gICAgcHJpY2VNYXgudmFsKHBhcnNlSW50KG5ld1ZhbHVlWzFdKSk7XG4gIH0pO1xuXG4gIHJldHVybiBzbGlkZXI7XG59XG5cbmZ1bmN0aW9uIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCBwcmljZUNvbnRhaW5lcikge1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld1ZhbHVlID0gW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV07XG4gIHByaWNlU2xpZGVyLnNldChuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgcHJpY2UgdmFsdWVzIGJlZm9yZSBzZW5kIGZvcm1cbiAqIEBwYXJhbSBwcmljZVNsaWRlck9iamVjdFxuICogQHBhcmFtIHByaWNlQ29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck9iamVjdCwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0JykuZmlyc3QoKTtcbiAgbGV0IHByaWNlTWluVmFsdWUgPSBwcmljZU1pbi52YWwoKTtcbiAgbGV0IHByaWNlTWF4VmFsdWUgPSBwcmljZU1heC52YWwoKTtcbiAgaWYgKHByaWNlTWluLnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWluVmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIGlmIChwcmljZU1pbi52YWwoKSA+IHByaWNlSW5wdXQuZGF0YSgnbWF4JykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKTtcbiAgfVxuICBwcmljZU1pbi52YWwocHJpY2VNaW5WYWx1ZSk7XG4gIGlmIChwcmljZU1heC52YWwoKSA+IHByaWNlSW5wdXQuZGF0YSgnbWF4JykpIHtcbiAgICBwcmljZU1heFZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtYXgnKTtcbiAgfVxuICBpZiAocHJpY2VNYXgudmFsKCkgPCBwcmljZUlucHV0LmRhdGEoJ21pbicpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWluJyk7XG4gIH1cbiAgcHJpY2VNYXgudmFsKHByaWNlTWF4VmFsdWUpO1xuICBwcmljZVNsaWRlck9iamVjdC5zZXQoW3ByaWNlTWluVmFsdWUsIHByaWNlTWF4VmFsdWVdKTtcbn1cblxuZXhwb3J0IHsgcHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==