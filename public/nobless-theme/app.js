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

var _cartNobless = __webpack_require__(/*! ./js/cart-nobless.js */ "./themes/NoblessTheme/assets/js/cart-nobless.js");

var _cartNobless2 = _interopRequireDefault(_cartNobless);

var _shareProduct = __webpack_require__(/*! ./js/share-product.js */ "./themes/NoblessTheme/assets/js/share-product.js");

var _shareProduct2 = _interopRequireDefault(_shareProduct);

var _loginNobless = __webpack_require__(/*! ./js/login-nobless.js */ "./themes/NoblessTheme/assets/js/login-nobless.js");

var _loginNobless2 = _interopRequireDefault(_loginNobless);

var _contactNobless = __webpack_require__(/*! ./js/contact-nobless */ "./themes/NoblessTheme/assets/js/contact-nobless.js");

var _contactNobless2 = _interopRequireDefault(_contactNobless);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// GENERAL FUNCTIONS
// MENU FUNCTIONS
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
  $('#navbarAccountLinks').hide();
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
  $('#navbarAccountLinks').hide();
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

function resizeContent() {
  resizeMainContainer();
  (0, _carousel.carousel)();

  if ($(document).width() > 768) {
    (0, _carousel.createGalleryDesktop)();
  }

  (0, _shareProduct2.default)();
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
  (0, _shareProduct2.default)();
  (0, _productNobless.product)();
  (0, _productNobless.filterProducts)(); // Menu Functions

  megamenuFunctions();
  menuIconesFunctions();
  ordersGridFunctions();
  (0, _loginNobless2.default)();
  (0, _cartNobless2.default)();
  (0, _checkoutNobless2.default)();
  (0, _contactNobless2.default)();
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

/***/ "./themes/NoblessTheme/assets/js/cart-nobless.js":
/*!*******************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/cart-nobless.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/************************/

/* CART PAGE MANAGEMENT */

/************************/
const container = $('#cartPage');
const bodyContainer = $('body');

const cart = function mainFunctions() {
  // When reloading quantities
  // Desktop
  $('.reload-qty', container).on('click', function () {
    if ($(this).hasClass('mobile')) {
      $('form.form-to-submit').trigger('submit');
    } else {
      $(this).closest('form').trigger('submit');
    }
  }); // Mobile

  $('.mobile-qty', container).on('input', function () {
    const newQty = parseInt($(this).val());

    if (newQty >= parseInt($(this).attr('max'))) {
      const inputQtyName = $(this).data('input-qty');
      $('input[name="' + inputQtyName + '"]').val(newQty);
    }
  }); // Prevent customer to add more than 5 times a product

  $('.qty', container).on('input', function (e) {
    if (parseInt($(this).val()) >= parseInt($(this).attr('max'))) {
      $(this).val($(this).attr('max'));
    }
  }); // Apply coupon code

  $('.coupon-code-btn', container).on('click', function () {
    // If cart has product not in stock, disable coupon code
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      const coupon = $('.coupon-code').val();

      if (coupon === '') {
        $('#sylius_cart_promotionCoupon').val('');
      } else {
        $('#sylius_cart_promotionCoupon').val(coupon);
      }

      $('form.form-to-submit').trigger('submit');
    }
  }); // When coupon code input is filled, hide error container

  bodyContainer.on("keydown", ".coupon-code", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.coupon-error').html('');
  });

  if ($('.coupon-code-error .form-error-message', container).html() !== undefined) {
    $('.coupon-input').addClass('invalid-code');
    $('.coupon-error').html($('.coupon-code-error .form-error-message').html());
    $('.coupon-code').val($('#sylius_cart_promotionCoupon').val());
  } // Apply bonus points


  $('.bonus-points-btn', container).on('click', function () {
    // If cart has product not in stock, disable coupon code
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      const bonusPoints = $('.bonus-points').val();

      if (bonusPoints === '') {
        $('#sylius_cart_bonusPoints').val('');
      } else {
        $('#sylius_cart_bonusPoints').val(bonusPoints);
      }

      $('form.form-to-submit').trigger('submit');
    }
  });
  $('.delete-bonus-points', container).on('click', function () {
    // If cart has product not in stock, disable bonus points
    if (!$('.btn-to-checkout').hasClass('disabled')) {
      $('#sylius_cart_bonusPoints').val('');
      $('form.form-to-submit').trigger('submit');
    }
  }); // When bonus points input is filled, hide error container

  bodyContainer.on("keydown", ".bonus-points", function () {
    $(this).closest('div').removeClass('invalid-code');
    $('.bonus-points-error').html('');
  });

  if ($('#bitbag-bonus-points .form-error-message', container).html() !== undefined) {
    $('.bonus-points-input').addClass('invalid-code');
    $('.bonus-points-error').html($('#bitbag-bonus-points .form-error-message').html());
    $('.bonus-points').val($('#sylius_cart_bonusPoints').val());
  } // If cart has product not in stock, disable button linked to checkout page


  $('a.btn-to-checkout', container).on('click', function (e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
    }
  });
};

exports.default = cart;
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

/***********************/

/* CHECKOUT MANAGEMENT */

/***********************/
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
          $('.no-addresses-text', container).addClass('d-none');
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

/***/ "./themes/NoblessTheme/assets/js/contact-nobless.js":
/*!**********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/contact-nobless.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/***************************/

/* CONTACT PAGE MANAGEMENT */

/***************************/
const contactPage = function mainFunctions() {
  // Ajax call when contact form is submitted
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
      error: function error(_error) {
        if (_error.status === 406) {
          $('#contactPage span.invalid-feedback').remove();
          const errorList = $($.parseHTML(_error.responseText)[1]).find('span').toArray();
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

        if (_error.status === 417) {
          $('#contactPage .contact-error').html($.parseHTML(_error.responseText)[1]);
        }

        $(form).removeClass('loading');
      }
    });
  }); // Add new field when chosen subject is "other"

  $('#sylius_contact_subject').on('change', function (e) {
    if ($(e.target).val() === 'other') {
      $('.other-subject').show();
    } else {
      $('.other-subject').hide();
    }
  });
};

exports.default = contactPage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./themes/NoblessTheme/assets/js/login-nobless.js":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/login-nobless.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*************************/

/* LOGIN PAGE MANAGEMENT */

/*************************/
const loginPage = function mainFunctions() {
  // Open reset password modal
  $('.reset-password-open').on('click', function (e) {
    e.preventDefault();
    const modalId = $(this).data('modalId');
    $(modalId).modal('show');
    $('.header-dropdown').removeClass('show');
  }); // Only when class login-form exists in page

  if ($('.login-form')) {
    $('.submit-login').on('click', function (e) {
      e.preventDefault();
      const formElement = $(this).data('form');
      $(formElement).submit();
    });
  } // Only when class verify-account exists in page


  const verifyAccountObject = $('.verify-account');

  if (verifyAccountObject) {
    verifyAccountObject.on('click', function (e) {
      e.preventDefault();
      $(this).closest('form').submit();
    });
  } // Only when resetPasswordSubmit button exists in page, Ajax call to reset password


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
    }); // Actions when modal is closed

    $('#resetPasswordModal').on('hide.bs.modal', function (e) {
      $('.reset-password .modal-dialog input.form-control').removeClass('is-invalid');
      $('.reset-password .modal-dialog form').removeClass('loading');
      $('.reset-password .modal-dialog form input').val('');
      $('.reset-password .modal-dialog .form-error-message').html('');
    });
  } // Check if email is valid before submit register form


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
  }); // When email field is filled and customer wants to modify its value

  $('.register-form input, .header-register-form input').on('keyup', function (e) {
    const regex = /\S+@\S+\.\S+/;
    const email = $(e.target).closest('form').find('input').val();

    if (regex.test(email) && $(e.target).hasClass('is-invalid')) {
      $(e.target).closest('div').next('span').removeClass('d-block');
      $(e.target).removeClass('is-invalid');
    }
  });
};

exports.default = loginPage;
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

/**********************/

/* PRODUCT MANAGEMENT */

/**********************/
const priceContainerSelector = '#productsFilters';
const priceContainerSelectorMobile = '#productsFiltersMobile';
const priceMinSelector = 'input[name="criteria[price][price_1]"]';
const priceMaxSelector = 'input[name="criteria[price][price_2]"]';

const product = function mainFunctions() {
  // Manage variant list when clicking in size available
  $('.variant-list .variant-name:not(.variant-disabled)').on('click', function (event) {
    const bundleItem = $(this).data('bundle-item');
    const variantListContainer = $(this).closest('div.variant-list');

    if (bundleItem !== undefined) {
      $('.variant-name[data-bundle-item="' + bundleItem + '"]').removeClass('variant-selected');
    } else {
      $('.variant-list .variant-name').removeClass('variant-selected');
    }

    $('.invalid-feedback', variantListContainer).removeClass('d-block').addClass('d-none');

    if ($(this).data('almost-out') !== undefined) {
      $('.last-product-in-stock', variantListContainer).removeClass('d-none').addClass('d-block');
    } else {
      $('.last-product-in-stock', variantListContainer).removeClass('d-block').addClass('d-none');
    }

    $(this).addClass('variant-selected');
  }); // Show or hide variants list in products carousel according to screen size

  $('.card-carousel .card-img-top .variants-container').hide();
  $('.card-carousel .card-img-top').on('mouseenter', function () {
    if ($(document).width() > 1440) {
      $('.variants-container', this).show();
    }
  }).on('mouseleave', function () {
    $('.variants-container', this).hide();
  }); // When clicking on add to cart button

  $('#sylius-product-adding-to-cart .btn-primary').on('click', function (e) {
    e.preventDefault();
    $('.variant-list .invalid-feedback').removeClass('d-block').addClass('d-none');
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

/***/ "./themes/NoblessTheme/assets/js/share-product.js":
/*!********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/share-product.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/****************************/

/* SHARE PRODUCT MANAGEMENT */

/****************************/
const shareProduct = function mainFunctions() {
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
};

exports.default = shareProduct;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnJlc2NvL2pzL2ZyZXNjby5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2luZGV4Qm9vdHN0cmFwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2FydC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2NoZWNrb3V0LW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY29udGFjdC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL2xvZ2luLW5vYmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvcHJvZHVjdC1ub2JsZXNzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2pzL3NoYXJlLXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvYWNjb3VudC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jaHJvbm9wb3N0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9jb2xpc3NpbW8ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWRlLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVuLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWVzLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWZyLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9pY29uLWl0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9tb25kaWFsLXJlbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9wYXlwYWwucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3JlbG9hZC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmV0dXJuLXBvbGljeS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvc2hvcHBpbmctYmFnLWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFTdGFyIiwiZmFRdWVzdGlvbkNpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJmYUNoZWNrIiwiZmFFeGNsYW1hdGlvbkNpcmNsZSIsImZhSW5mb0NpcmNsZSIsImZhQ2hldnJvblVwIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNodXR0bGVWYW4iLCJmYUNyZWRpdENhcmQiLCJmYUZsYWciLCJmYUNjTWFzdGVyY2FyZCIsImZhQ2NWaXNhIiwiZmFDY1BheXBhbCIsImZhVGltZXMiLCJmYVNlYXJjaCIsImZhUGx1cyIsImZhUGVuY2lsQWx0IiwiZmFTeW5jQWx0IiwiZG9tIiwid2F0Y2giLCJTeWxpdXNBZGRUb0NhcnQiLCJlbCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVxdWVzdCIsImF4aW9zIiwicG9zdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmb3JFYWNoIiwibWVzc2FnZSIsImVycm9ycyIsImlubmVySFRNTCIsIlN5bGl1c0FwaUxvZ2luIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiZW1haWxGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJjc3JmVG9rZW5GaWVsZCIsImNzcmZUb2tlbk5hbWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJ1bmRlZmluZWQiLCJTeWxpdXNQcm92aW5jZUZpZWxkIiwiY291bnRyeVNlbGVjdCIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImV2ZW50Iiwic2VsZWN0IiwiY3VycmVudFRhcmdldCIsInByb3ZpbmNlQ29udGFpbmVyIiwiY2xvc2VzdCIsIm5leHRFbGVtZW50U2libGluZyIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicmVwbGFjZSIsInByb3ZpbmNlSW5wdXRGaWVsZE5hbWUiLCJwcm92aW5jZVNlbGVjdEZpZWxkSWQiLCJwcm92aW5jZUlucHV0RmllbGRJZCIsInNldEF0dHJpYnV0ZSIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImluZGV4T2YiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIlN5bGl1c1JhdGluZyIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsIm9uUmF0ZSIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJTeWxpdXNUb2dnbGUiLCJ0cmlnZ2VyIiwidG9nZ2xlIiwidG9nZ2xlRWxlbWVudCIsImpzVG9nZ2xlIiwiY2hlY2tlZCIsInN0eWxlIiwiZGlzcGxheSIsIlN5bGl1c1ZhcmlhbnRJbWFnZXMiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwiZGVmYXVsdEltYWdlTGluayIsImRlZmF1bHRJbWFnZVNyYyIsIml0ZW0iLCJzZXRJbWFnZSIsImdldEFjdGl2ZVZhcmlhbnQiLCJpdGVtcyIsIm1hcCIsImpvaW4iLCJnZXRBY3RpdmVJbWFnZVNyYyIsInZhcmlhbnQiLCJpbWFnZUxpbmsiLCJpbWFnZVNyYyIsInBhcmVudCIsImltZyIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIiwib25sb2FkIiwiaW5pdCIsIm9ucmVzaXplIiwicmVzaXplQ29udGVudCIsImRlZmluZSIsIiQiLCJGcmVzY28iLCJleHRlbmQiLCJ2ZXJzaW9uIiwiU2tpbnMiLCJmcmVzY28iLCJCb3VuZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiQnJvd3NlciIsIk1vYmlsZVNhZmFyaSIsIkFuZHJvaWQiLCJHZWNrbyIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSUUiLCJhdHRhY2hFdmVudCIsImYiLCJPcGVyYSIsIm9wZXJhIiwicGFyc2VGbG9hdCIsIldlYktpdCIsIm1hdGNoIiwiQ2hyb21lIiwiQ2hyb21lTW9iaWxlIiwiSUVNb2JpbGUiLCJ0IiwiUmVnRXhwIiwiZXhlYyIsIl9zbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJiYXNlVG9TdHJpbmciLCJfIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJTdHJpbmciLCJjYXBpdGFsaXplIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvbiIsIm9yaWdpbmFsRXZlbnQiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJGaXQiLCJ3aXRoaW4iLCJhcmd1bWVudHMiLCJzIiwibiIsIm8iLCJhIiwiaCIsInIiLCJkIiwiTWF0aCIsIm1pbiIsIm1heCIsImVhc2luZyIsImZyZXNjb0Vhc2VJbkN1YmljIiwiZnJlc2NvRWFzZUluU2luZSIsImNvcyIsIlBJIiwiZnJlc2NvRWFzZU91dFNpbmUiLCJzaW4iLCJTdXBwb3J0IiwiTyIsIlAiLCJzcGxpdCIsImNhbnZhcyIsImJhIiwiZ2V0Q29udGV4dCIsImNzcyIsImFuaW1hdGlvbiIsIlMiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJzdWJzdHIiLCJkZXRlY3RNb2JpbGVUb3VjaCIsIm1vYmlsZVRvdWNoIiwidGVzdCIsInBsYXRmb3JtIiwiSW1hZ2VSZWFkeSIsImluaXRpYWxpemUiLCJhcHBseSIsImNhbGwiLCJUaW1lcnMiLCJnZXRVUklEYXRhIiwidHlwZSIsImVhY2giLCJUeXBlcyIsImRldGVjdEV4dGVuc2lvbiIsInRvTG93ZXJDYXNlIiwic3VwcG9ydHMiLCJuYXR1cmFsV2lkdGgiLCJJbWFnZSIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJpc0xvYWRlZCIsIm9wdGlvbnMiLCJtZXRob2QiLCJwb2xsRmFsbGJhY2tBZnRlciIsImNvbXBsZXRlIiwic2V0VGltZW91dCIsInByb3h5Iiwic3VjY2VzcyIsImludGVydmFscyIsIl9pcG9zIiwiX3RpbWUiLCJfZGVsYXkiLCJwb2xsIiwiZmFsbGJhY2siLCJfcG9sbGluZyIsIl91c2VkUG9sbEZhbGxiYWNrIiwiX2ZhbGxiYWNrSW1nIiwibmF0dXJhbEhlaWdodCIsIm9uZXJyb3IiLCJzcmMiLCJhYm9ydCIsImNsZWFyVGltZW91dCIsIl9jYWxsZWRTdWNjZXNzIiwiX2NhbGxlZEVycm9yIiwiX3RpbWVycyIsInNldCIsImNsZWFyIiwiY2xlYXJBbGwiLCJUeXBlIiwiaXNWaWRlbyIsImltYWdlIiwiZXh0ZW5zaW9ucyIsImRldGVjdCIsImluQXJyYXkiLCJleHRlbnNpb24iLCJ2aW1lbyIsImlkIiwieW91dHViZSIsIlZpbWVvVGh1bWJuYWlsIiwibG9hZCIsInByb3RvY29sIiwiX3hociIsImdldEpTT04iLCJ0aHVtYm5haWxfdXJsIiwiY2FjaGUiLCJwdXNoIiwiVmltZW9SZWFkeSIsImNhbGxiYWNrIiwiZGltZW5zaW9ucyIsIk9wdGlvbnMiLCJkZWZhdWx0cyIsImVmZmVjdHMiLCJzaG93IiwiaGlkZSIsInNwaW5uZXIiLCJ0aHVtYm5haWwiLCJkZWxheSIsInRodW1ibmFpbHMiLCJzbGlkZSIsImtleWJvYXJkIiwibGVmdCIsInJpZ2h0IiwiZXNjIiwibG9hZGVkTWV0aG9kIiwibG9vcCIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsImNsb3NlIiwicHJlbG9hZCIsInBvc2l0aW9uIiwic2tpbiIsInNwaW5uZXJEZWxheSIsInN5bmMiLCJ1aSIsInVpRGVsYXkiLCJhdXRvcGxheSIsImFwaSIsInRpdGxlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJjb250cm9scyIsImVuYWJsZWpzYXBpIiwiaGQiLCJpdl9sb2FkX3BvbGljeSIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwidnEiLCJpbml0aWFsVHlwZU9wdGlvbnMiLCJjcmVhdGUiLCJ4IiwieSIsIm92ZXJsYXAiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIk92ZXJsYXkiLCJidWlsZCIsInZpc2libGUiLCJhZGRDbGFzcyIsIlBhZ2VzIiwicGFnZSIsInZpZXciLCJXaW5kb3ciLCJzZXRTa2luIiwicmVtb3ZlQ2xhc3MiLCJhdHRhY2giLCJib2R5IiwiZGV0YWNoIiwic3RvcCIsImZhZGVUbyIsImZhZGVPdXQiLCJnZXRTY3JvbGxEaW1lbnNpb25zIiwicXVldWVzIiwicGFnZXMiLCJfdHJhY2tpbmciLCJfZmlyc3QiLCJ0aW1lcnMiLCJfYm94IiwiX3BhZ2VzIiwiX3RodW1ibmFpbHMiLCJUaHVtYm5haWxzIiwiU3Bpbm5lciIsIlVJIiwiX2F0dGFjaGVkIiwiX3NraW4iLCJzZXRTaG93aW5nVHlwZSIsIl9zaG93aW5nVHlwZSIsInN0YXJ0T2JzZXJ2aW5nUmVzaXplIiwiX29uV2luZG93UmVzaXplSGFuZGxlciIsIl9vbldpbmRvd1Jlc2l6ZSIsInN0b3BPYnNlcnZpbmdSZXNpemUiLCJvZmYiLCJfb25TY3JvbGwiLCJhZGp1c3RUb1Njcm9sbCIsImZpdFRvVmlld3BvcnQiLCJ1cGRhdGVCb3hEaW1lbnNpb25zIiwiZml0VG9Cb3giLCJ1cGRhdGUiLCJhZGp1c3RQcmV2TmV4dCIsImNlbnRlciIsInRvcCIsInNjcm9sbFRvcCIsImdldEJveERpbWVuc2lvbnMiLCJfYm94RGltZW5zaW9ucyIsImdldERpbWVuc2lvbnMiLCJfb3JpZW50YXRpb24iLCJfYm94UG9zaXRpb24iLCJvcGVuaW5nIiwiX3Nob3ciLCJxdWV1ZSIsImRpc2FibGUiLCJLZXlib2FyZCIsIl9oaWRlIiwiX3Jlc2V0IiwicmVtb3ZlQWxsIiwiX3Bvc2l0aW9uIiwiYWZ0ZXJIaWRlIiwiY2xvc2luZyIsInZpZXdzIiwic2V0UG9zaXRpb24iLCJzdG9wSGlkZVF1ZXVlIiwicmVzZXQiLCJtYXlQcmV2aW91cyIsInByZXZpb3VzIiwiZ2V0U3Vycm91bmRpbmdJbmRleGVzIiwibWF5TmV4dCIsIm5leHQiLCJlbmFibGVkIiwia2V5Q29kZSIsImVuYWJsZSIsIl9vbktleURvd25IYW5kbGVyIiwib25LZXlEb3duIiwiX29uS2V5VXBIYW5kbGVyIiwib25LZXlVcCIsImdldEtleUJ5S2V5Q29kZSIsIlBhZ2UiLCJMYyIsIk1jIiwiTmMiLCJPYyIsInVpZCIsIl90b3RhbCIsIl9mdWxsQ2xpY2siLCJfdmlzaWJsZSIsInNob3doaWRlIiwiX2NyZWF0ZWQiLCJvcGFjaXR5IiwiY2FwdGlvbiIsImluZm8iLCJjbG9uZSIsImluZm9QYWRkZXIiLCJwb3MiLCJodG1sIiwiYmFja2dyb3VuZCIsImF0dHIiLCJwb3NpdGlvbk91dHNpZGUiLCJwcmV2aW91c0luc2lkZSIsIm5leHRJbnNpZGUiLCJjbG9zZUluc2lkZSIsImdyb3VwZWQiLCJpbmZvSW5zaWRlIiwiaW5mb1BhZGRlckluc2lkZSIsInBvc0luc2lkZSIsImNhcHRpb25JbnNpZGUiLCJwb3NpdGlvbkluc2lkZSIsIl9nZXRTdXJyb3VuZGluZ1BhZ2VzIiwicHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzIiwicHJlbG9hZGluZyIsInByZWxvYWRlZCIsImxvYWRlZCIsInByZWxvYWRSZWFkeSIsImxvYWRpbmciLCJfc3Bpbm5lckRlbGF5IiwiaW1hZ2VSZWFkeSIsIl9tYXJrQXNMb2FkZWQiLCJzZXREaW1lbnNpb25zIiwicHJlcGVuZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInZpbWVvUmVhZHkiLCJfYWJvcnRTcGlubmVyRGVsYXkiLCJpbnNlcnRWaWRlbyIsInBsYXllcklmcmFtZSIsInBhcmFtIiwiX2RhdGEiLCJfY29udGVudERpbWVuc2lvbnMiLCJmcmFtZWJvcmRlciIsInJhaXNlIiwibGFzdENoaWxkIiwic3RvcEluYWN0aXZlIiwidXBkYXRlVUkiLCJfdWkiLCJoaWRlSW5hY3RpdmUiLCJvblNob3ciLCJhZnRlclBvc2l0aW9uIiwicmVtb3ZlVmlkZW8iLCJyZW1vdmVUcmFja2luZyIsIl90cmFjayIsInJlbW92ZWQiLCJfZ2V0SW5mb0hlaWdodCIsIl93aGlsZVZpc2libGUiLCJpcyIsImhhc0NsYXNzIiwidmlzaWJpbGl0eSIsInVwZGF0ZUZvcmNlZCIsImZ1bGxDbGljayIsIl9ub092ZXJmbG93IiwicGFyc2VJbnQiLCJfcG9zaXRpb25PdXRzaWRlIiwibCIsInUiLCJjIiwicCIsIm0iLCJ2IiwiZyIsIl9pbmZvSGVpZ2h0IiwiX3BhZGRpbmciLCJfYmFja2dyb3VuZERpbWVuc2lvbnMiLCJib3R0b20iLCJnZXRYWVAiLCJyZW1vdmVBdHRyIiwiZmluZCIsImdldFBvc2l0aW9uSW5BY3RpdmVQYWdlR3JvdXAiLCJnZXRMb2FkaW5nQ291bnQiLCJoYW5kbGVUcmFja2luZyIsInNldFhZIiwicGFnZVgiLCJwYWdlWSIsInVwZGF0ZVBvc2l0aW9ucyIsIl90cmFja2luZ190aW1lciIsImNsZWFyVHJhY2tpbmdUaW1lciIsInN0YXJ0VHJhY2tpbmciLCJfaGFuZGxlVHJhY2tpbmciLCJzdG9wVHJhY2tpbmciLCJzZXRUcmFja2luZyIsImlzVHJhY2tpbmciLCJjbGVhclRyYWNraW5nIiwiZ3JlcCIsIl94eSIsInNldFhZUCIsIl94eXAiLCJWaWV3Iiwib2JqZWN0IiwiZ3JvdXAiLCJldmFsIiwic3VwcG9ydGVkIiwidXBkYXRlRGltZW5zaW9ucyIsIl9kaW1lbnNpb25zIiwiX0ZyZXNjbyIsIl9kaXNhYmxlZCIsIl9mYWxsYmFjayIsInN0YXJ0RGVsZWdhdGluZyIsIl9kZWxlZ2F0ZUhhbmRsZXIiLCJkZWxlZ2F0ZSIsIl9zZXRDbGlja1hZSGFuZGxlciIsInNldENsaWNrWFkiLCJzdG9wRGVsZWdhdGluZyIsInNob3dGYWxsYmFjayIsIm9iamVjdF90eXBlIiwiX2RnbyIsImdyb3VwT3B0aW9ucyIsImVsZW1lbnRzIiwiZmlsdGVyIiwiZ3JvdXBFeHRlbmQiLCJmaXJzdFVJIiwicG9zaXRpb25JbkFQRyIsInNldERlZmF1bHRTa2luIiwiX3ZhcnMiLCJ0aHVtYm5haWxGcmFtZSIsInN0YXJ0T2JzZXJ2aW5nIiwid3JhcHBlciIsIl9zbGlkZXIiLCJfcHJldmlvdXMiLCJfcHJldmlvdXNfYnV0dG9uIiwiX3RodW1icyIsIl9zbGlkZSIsIl9uZXh0IiwiX25leHRfYnV0dG9uIiwic2V0QWN0aXZlIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJzZXRPcmllbnRhdGlvbiIsIl9kaXNhYmxlZEdyb3VwIiwiVGh1bWJuYWlsIiwiX3BhZ2UiLCJkaXNhYmxlZCIsInVwZGF0ZVZhcnMiLCJ3IiwicGFkZGluZ1RvcCIsInNpZGVzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYiIsImsiLCJDIiwiVyIsIk0iLCJUIiwiZmxvb3IiLCJJIiwiaXBwIiwicm91bmQiLCJfbW9kZSIsImNlaWwiLCJ0aHVtYnMiLCJyZXNpemUiLCJtb3ZlVG8iLCJtb3ZlVG9QYWdlIiwiYW5pbWF0ZSIsImxvYWRDdXJyZW50UGFnZSIsImFjdGl2YXRlIiwicmVmcmVzaCIsInByZUJ1aWxkIiwidGh1bWJuYWlsV3JhcHBlciIsImljb24iLCJyZWFkeSIsInZpbWVvVGh1bWJuYWlsIiwiX2xvYWRpbmciLCJfcmVtb3ZlZCIsIl9jbGVhckRlbGF5IiwiX2xvYWRlZCIsIl91cmwiLCJfbG9hZCIsIl9lcnJvciIsImZhZGVJblNwaW5uZXIiLCJfbW9kZXMiLCJfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yIiwiX2VuYWJsZWQiLCJmdWxsY2xpY2siLCJfc2Nyb2xsTGVmdCIsIl9jbG9zZSIsIl9vbk1vdXNlTW92ZSIsInVuYmluZCIsIl94IiwiX3kiLCJyZXNldFByZXZOZXh0IiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlVXBIYW5kbGVyIiwiX29uTW91c2VVcCIsIl9zaG93SGFuZGxlciIsIl9oaWRlSGFuZGxlciIsIl9tb3VzZW1vdmVIYW5kbGVyIiwiX2hvdmVyaW5nU2lkZUJ1dHRvbiIsInN0YXJ0VGltZXIiLCJfb25Nb3VzZU1vdmVIYW5kbGVyIiwiX29uTW91c2VMZWF2ZUhhbmRsZXIiLCJfb25Nb3VzZUVudGVySGFuZGxlciIsIl9vbk1vdXNlRW50ZXIiLCJfb25TaWRlTW91c2VFbnRlckhhbmRsZXIiLCJfb25TaWRlTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlciIsIl9vblNpZGVNb3VzZUxlYXZlIiwiX29uU2Nyb2xsSGFuZGxlciIsInNjcm9sbExlZnQiLCJfZ2V0RXZlbnRTaWRlIiwiX2hvdmVyaW5nU2lkZSIsIl9tYXlDbGlja0hvdmVyaW5nU2lkZSIsIndoaWNoIiwiY2xlYXJUaW1lciIsImluc2lkZSIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIiLCJfZGVsZWdhdGVPdmVybGF5Q2xvc2UiLCJvdXRzaWRlIiwicmVzaXplTWFpbkNvbnRhaW5lciIsImZvb3RlckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJqUXVlcnkiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJoZWFkZXJPdXRlckhlaWdodCIsInByb2R1Y3RDb250YWluZXJIZWlnaHQiLCJyZXNpemVNZW51IiwiaGVhZGVySGVpZ2h0Iiwib2ZmY2FudmFzX2lkIiwiZGl2VG9PcGVuIiwib3JkZXJzR3JpZEZ1bmN0aW9ucyIsInByZXYiLCJ0b29sdGlwIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsImVsZW0iLCJjYXJvdXNlbCIsIm1haW5GdW5jdGlvbnMiLCJjcmVhdGVDYXJvdXNlbCIsImNyZWF0ZVByb2R1Y3RDYXJvdXNlbCIsImNhcm91c2VsRWxlbWVudCIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFwcGVuZEFycm93cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2xpY2siLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJyZXBsYWNlQ2Fyb3VzZWxBcnJvdyIsImlzQ2FydEl0ZW1zQ2Fyb3VzZWwiLCJtb2JpbGVGaXJzdCIsInJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCIsInVuc2xpY2tlZCIsImNyZWF0ZUFkZHJlc3NDYXJvdXNlbCIsIm9wdHMiLCJyb3dzIiwic2xpZGVzUGVyUm93IiwiYWRhcHRpdmVIZWlnaHQiLCJ2aXNpYmxlU2xpZGVyRGl2IiwiY3JlYXRlR2FsbGVyeURlc2t0b3AiLCJpbWFnZXMiLCJpbmRleCIsImhlaWdodENvbnRlbnQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpbWdTZWxlY3RvciIsImltZ1NsaWRlckhlaWdodCIsImFycm93VG9wVmFsdWUiLCJub3QiLCJib2R5Q29udGFpbmVyIiwiY2FydCIsIm5ld1F0eSIsImlucHV0UXR5TmFtZSIsImNvdXBvbiIsImJvbnVzUG9pbnRzIiwic2F2ZUJ1dHRvbiIsImNhbmNlbEJ0biIsImNoZWNrb3V0IiwiYWRkcmVzc1R5cGUiLCJnZXRDbGFzc0xpc3QiLCJtYW5hZ2VBZGRyZXNzVHlwZSIsImNob29zZUFkZHJlc3MiLCJzaG93QWRkRm9ybSIsImZpZWxkIiwiZmllbGROYW1lIiwidG9TYXZlIiwidG9SZXBsYWNlIiwiY2hlY2tvdXRTYXZlQWRkcmVzcyIsImZpbGxBbGxBZGRyZXNzZXMiLCJzdWJtaXQiLCJoaWRlQ2hhbmdlQWRkcmVzcyIsImhpZGVTYXZlQWRkcmVzc0Zvcm0iLCJjYW5jZWxDaGFuZ2VBZGRyZXNzIiwiZmllbGRTZWxlY3RvciIsImZvcm1GaWVsZCIsImNob3NlbkFkZHJlc3NUZXh0IiwiY2hvc2VuVmFsdWUiLCJ0ZXh0Iiwic3Vic3RyaW5nIiwidHJpbSIsImdldERhdGFGaWVsZE5hbWUiLCJwcm9wIiwiZmlsbE90aGVyQWRkcmVzcyIsImFqYXgiLCJzZXJpYWxpemUiLCJkYXRhU3VjY2Vzc0RpdiIsIm5vQWRkcmVzcyIsImZpbGxEYXRhQWZ0ZXJTYXZlIiwiZ2V0T3RoZXJBZGRyZXNzVHlwZSIsInNob3dNYWluRm9ybSIsInBhcnNlSFRNTCIsInJlc3BvbnNlVGV4dCIsImZpZWxkRXJyb3IiLCJhZnRlciIsImZpbGxBZGRyZXNzIiwiZmllbGRJZCIsImtlZXBDYW1lbEZpZWxkIiwiZGF0YVRvRmlsbCIsInJlZ2V4IiwiaW5jbHVkZXMiLCJvdGhlckFkZHJlc3NUeXBlIiwiZmlsbE90aGVyRm9ybSIsIm90aGVyRmllbGRJZCIsImlkVG9GaWxsIiwibmV3VmFsdWUiLCJmb3JtRmllbGROYW1lIiwiZmllbGRUb1JlcGxhY2UiLCJvbGREYXRhIiwiY2xhc3NOYW1lIiwiZmllbGROYW1lcyIsImtleXMiLCJ0ZXh0VG9SZXBsYWNlIiwic2VsZWN0b3JUeXBlIiwibWF0Y2hlcyIsImNvbnRhY3RQYWdlIiwibW9kYWwiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJ0b0FycmF5Iiwib3V0ZXJUZXh0IiwibG9naW5QYWdlIiwibW9kYWxJZCIsImZvcm1FbGVtZW50IiwidmVyaWZ5QWNjb3VudE9iamVjdCIsInJlZ2lzdGVyRm9ybSIsImlucHV0UmVnaXN0ZXJGb3JtIiwiaW52YWxpZFNwYW4iLCJwcmljZUNvbnRhaW5lclNlbGVjdG9yIiwicHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSIsInByaWNlTWluU2VsZWN0b3IiLCJwcmljZU1heFNlbGVjdG9yIiwicHJvZHVjdCIsImJ1bmRsZUl0ZW0iLCJ2YXJpYW50TGlzdENvbnRhaW5lciIsImFkZFRvQ2FydEZvcm0iLCJzZWxlY3RlZFNpemUiLCJidW5kbGVJdGVtc0NvdW50IiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJjcml0ZXJpYSIsInByaWNlSW5wdXQiLCJwcmljZVNsaWRlciIsInByaWNlU2xpZGVyTW9iaWxlIiwiY3JlYXRlUHJpY2VTbGlkZXIiLCJpc05hTiIsImZyb21DaGFyQ29kZSIsInNldFNsaWRlck5ld1ZhbHVlIiwic2l6ZUZpbHRlcklucHV0IiwiY2hlY2tQcmljZVZhbHVlIiwiaW5wdXRUb0NoZWNrIiwicmVzaXplRmlsdGVyTWVudSIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJCYW5uZXIiLCJmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJwcmljZUNvbnRhaW5lciIsInByaWNlUmFuZ2UiLCJwcmljZU1pbiIsInByaWNlTWF4IiwidGF4b25NaW5QcmljZSIsImZpcnN0IiwidGF4b25NYXhQcmljZSIsInJhbmdlU2xpZGVyT3B0aW9ucyIsInN0YXJ0IiwicmFuZ2UiLCJzdGVwIiwiY29ubmVjdCIsImZvcm1hdCIsInRvIiwiZnJvbSIsImJlaGF2aW91ciIsInRvb2x0aXBzIiwic2xpZGVyIiwibm9VaVNsaWRlciIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJzaGFyZVByb2R1Y3QiLCJ3aW5Ub3AiLCJzY3JlZW4iLCJ3aW5MZWZ0Iiwib3BlbiIsImNsaWNrIiwiY29weVRleHQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWFpbFRvIiwibWFpbHRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5PLEVBQWdQQyxvQkFBaFA7O0FBQ0FDLHdCQUFJQyxLQUFK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O0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxxSEFBc0QsRTs7Ozs7Ozs7Ozs7O0FDQXJFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7O0FDQXhELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG4vLyBHRU5FUkFMIEZVTkNUSU9OU1xuaW1wb3J0IHsgY2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUdhbGxlcnlEZXNrdG9wIH0gZnJvbSAnLi9qcy9jYXJvdXNlbC5qcyc7XG5pbXBvcnQgY2hlY2tvdXQgZnJvbSAnLi9qcy9jaGVja291dC1ub2JsZXNzLmpzJztcbmltcG9ydCB7cHJvZHVjdCwgZmlsdGVyUHJvZHVjdHMsIHJlc2l6ZUZpbHRlck1lbnV9IGZyb20gJy4vanMvcHJvZHVjdC1ub2JsZXNzJztcbmltcG9ydCBjYXJ0IGZyb20gJy4vanMvY2FydC1ub2JsZXNzLmpzJztcbmltcG9ydCBzaGFyZVByb2R1Y3QgZnJvbSAnLi9qcy9zaGFyZS1wcm9kdWN0LmpzJztcbmltcG9ydCBsb2dpblBhZ2UgZnJvbSAnLi9qcy9sb2dpbi1ub2JsZXNzLmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2pzL2NvbnRhY3Qtbm9ibGVzcyc7XG4vLyBNRU5VIEZVTkNUSU9OU1xuLy8gT1JERVJTIEdSSUQgRlVOQ1RJT05TXG5cblxuLyoqXG4gKiBSZXNpemUgZnVuY3Rpb24gdG8ga2VlcCBhbGwgdGhlIG1haW4tY29udGVudCB2aXNpYmxlXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZU1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiO1xufVxuXG4vKipcbiAqIE1hbmFnZSBkcm9wZG93biBvbiBtb2JpbGUgc2l6ZVxuICovXG5mdW5jdGlvbiBuYXZiYXJDb2xsYXBzZUluaXQoKSB7XG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5jb2xsYXBzZSh7XG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcblxuICBqUXVlcnkoJyNtYWluTmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWVnYW1lbnUgZnVuY3Rpb25zXG4gKiAuaGFzLW1lZ2FtZW51IHRvIHVzZSBkcm9wZG93biBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gbWVnYW1lbnVGdW5jdGlvbnMoKSB7XG4gIC8vIEJ1dHRvbiBob3ZlciBzaW11bGF0ZXMgY2xpY2sgb24gaXRcbiAgJCgnI21lbnVCdXR0b25NYWluLCAjbWVnYW1lbnVEcm9wZG93bicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgICQoJyNtZW51QnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyokKCcjbWFpbkNvbnRlbnRDb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMDMzKSB7XG4gICAgICAgICQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyovXG5cbiAgJCgnI21lbnVCdXR0b25NYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICBpZiAoJCgnI25hdmJhck1haW5Nb2JpbGUnKS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3Blbk1vYmlsZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lZ2FtZW51IGZ1bmN0aW9ucyA6IG1hbmFnZSBtb2JpbGUgbWVudVxuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcblxuICAkKCdhLm5hdi10YXhvbicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykrJyBpbWcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJ2Rpdi5tZW51LWltZycpLmhpZGUoKTtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nLScrJCh0aGlzKS5kYXRhKCd0YXhvbicpKS5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiI25hdmJhck1haW5Nb2JpbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJCgnLmFjdGl2ZS5sb2NhbGUtbGluaywgLm5hdmJhclRheG9uc0xpbmssIC5sb2ctbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBkZXZlbG9wTW9iaWxlTWVudSgkKHRoaXMpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI29wZW5BY2NvdW50TWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQoJy5sb2ctbGluaycpLmRhdGEoJ2RpdlRvT3BlbicpKTtcbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgfSk7XG5cbiAgJCgnLmRyb3Bkb3duLmNhcnQtYnRuJykub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJY29uZXNGdW5jdGlvbnMoKSB7XG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWNhcnQnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4JylcblxuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKCcubWVudS1pY29uZXMgLmRyb3Bkb3duJykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVNZW51KGVsZW1lbnQpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVySGVpZ2h0ID0gJCgnLmNhcnQtZHJvcGRvd24nKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2NhcnRBY3Rpb25zJykub3V0ZXJIZWlnaHQoKTtcbiAgICAkKGVsZW1lbnQpLmNzcygndG9wJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJChlbGVtZW50KS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoZWxlbWVudCArICcgI21lbnVNb2JpbGVMaW5rcycpLmNzcygnYm90dG9tJywgaGVhZGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnLnNjcmVlbi1vdmVybGF5JykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xuICB2YXIgb2ZmY2FudmFzX2lkID0gJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKTtcbiAgcmVzaXplTWVudShvZmZjYW52YXNfaWQpO1xuXG4gICQob2ZmY2FudmFzX2lkKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICQoJyNtZW51QnV0dG9uTWFpbicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5kcm9wZG93biBhLmJ0bi1jbG9zZScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5hZGRDbGFzcyhcInNob3dcIik7XG5cbiAgJCgnI25hdmJhck1haW4nKS5zaG93KCk7XG4gICQoJyNuYXZiYXJMb2NhbGUnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJUYXhvbnMnKS5oaWRlKCk7XG4gICQoJyNuYXZiYXJBY2NvdW50TGlua3MnKS5oaWRlKCk7XG5cbiAgJCgnI21lbnVCdXR0b25NYWluIC5jbG9zZScpLnNob3coKTtcbiAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuXG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiLm1vYmlsZS1vZmZjYW52YXNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKG9mZmNhbnZhc19pZCkucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG5cbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcbiAgJCgnI25hdmJhclRheG9ucycpLmhpZGUoKTtcbiAgJCgnI25hdmJhckFjY291bnRMaW5rcycpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGRldmVsb3BNb2JpbGVNZW51KGRpdlRvT3Blbikge1xuICBpZiAoZGl2VG9PcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAkKCcubmF2YmFyID4gZGl2JykuaGlkZSgpO1xuICAgICQoZGl2VG9PcGVuKS5zaG93KCk7XG5cbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuaGlkZSgpO1xuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9yZGVyc0dyaWRGdW5jdGlvbnMoKSB7XG4gIC8vIERlc2t0b3AgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuICAgICQoJ3RyJywgdGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gIC8vIE1vYmlsZSBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnByZXYoJ2RpdicpLmFkZENsYXNzKCdpbml0Jyk7XG4gIH0pXG4gICQoJy5hcnJvdy1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2Lm9yZGVyLWRldGFpbHMnKS5wcmV2KCdkaXYnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGNhcm91c2VsKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBzaGFyZVByb2R1Y3QoKTtcbiAgcmVzaXplTWVudSgkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpKTtcbiAgcmVzaXplRmlsdGVyTWVudSgpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICBGcmVzY28uaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjYXJvdXNlbCgpO1xuICBuYXZiYXJDb2xsYXBzZUluaXQoKTtcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgfSk7XG4gIC8vIFBSRVZFTlQgSU5TSURFIENMSUNLIERST1BET1dOXG4gICQoJy5kcm9wZG93bi1tZW51Jykub24oXCJjbGljay5icy5kcm9wZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICBzaGFyZVByb2R1Y3QoKTtcbiAgcHJvZHVjdCgpO1xuICBmaWx0ZXJQcm9kdWN0cygpO1xuICAvLyBNZW51IEZ1bmN0aW9uc1xuICBtZWdhbWVudUZ1bmN0aW9ucygpO1xuICBtZW51SWNvbmVzRnVuY3Rpb25zKCk7XG5cbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2UoKTtcbiAgY2FydCgpO1xuICBjaGVja291dCgpO1xuXG4gIGNvbnRhY3RQYWdlKCk7XG5cbiAgcmVzaXplTWFpbkNvbnRhaW5lcigpO1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCkge1xuICAgIGNyZWF0ZUdhbGxlcnlEZXNrdG9wKCk7XG4gIH1cbiAgcmVwbGFjZUNhcm91c2VsQXJyb3coKTtcbiAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gIC8qaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudENvbnRhaW5lcicpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWluZm8nKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgfSovXG4gIC8vIFNob3cgbWVudSBhZnRlciBwYWdlIGlzIGxvYWRlZFxuICAkKCcubW9iaWxlLW9mZmNhbnZhcycpLnNob3coKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLnNob3coKTtcbn1cblxuZXhwb3J0IHsgaW5pdCwgcmVzaXplQ29udGVudCB9O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lJztcbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG4vLyBpbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi9qcy9zeWxpdXMtYWRkcmVzcy1ib29rJztcbmltcG9ydCBTeWxpdXNMb2FkYWJsZUZvcm1zIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgLy8gY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICAvLyB9XG4gIC8vIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICAvLyBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJykpIHtcbiAgLy8gICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIC8vIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUk9VU0VMIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBGcmVzY28gZnJvbSAnLi4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuXG5jb25zdCBjYXJvdXNlbCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykpO1xuICBjcmVhdGVDYXJvdXNlbCgkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcblxuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI3Byb2R1Y3RHYWxsZXJ5JykpO1xuICBjcmVhdGVQcm9kdWN0Q2Fyb3VzZWwoJCgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgbWFpbiBjYXJvdXNlbHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTkyMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICYmICFjYXJvdXNlbEVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICBjYXJvdXNlbEVsZW1lbnQuc2xpY2sob3B0aW9ucyk7XG5cbiAgICBjYXJvdXNlbEVsZW1lbnQub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhjYXJvdXNlbEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByb2R1Y3QgY2Fyb3VzZWxzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RDYXJvdXNlbChjYXJvdXNlbEVsZW1lbnQpIHtcbiAgbGV0IGlzQ2FydEl0ZW1zQ2Fyb3VzZWwgPSAoY2Fyb3VzZWxFbGVtZW50ID09PSAkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGlmIChjYXJvdXNlbEVsZW1lbnQgJiYgIWNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICBpZiAoaXNDYXJ0SXRlbXNDYXJvdXNlbCkge1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCA3NjggJiYgY2Fyb3VzZWxFbGVtZW50WzBdLnNsaWNrICYmIGNhcm91c2VsRWxlbWVudFswXS5zbGljay51bnNsaWNrZWQpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGlzQ2FydEl0ZW1zQ2Fyb3VzZWwpIHtcbiAgICAgIGNhcm91c2VsRWxlbWVudC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihzbGljayl7XG4gICAgICAgIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGNhcm91c2VsIHdoZW4gdXNlciBoYXZlIG1vcmUgdGhhbiA0IGFkZHJlc3NlcyBpbiBDaGVja291dFxuICovXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzQ2Fyb3VzZWwoY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICByb3dzOiAyLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzbGlkZXNQZXJSb3c6IDIsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgYXBwZW5kQXJyb3dzOiBjYXJvdXNlbEVsZW1lbnQubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByb3dzOiAzLFxuICAgICAgICAgIHNsaWRlc1BlclJvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IHZpc2libGVTbGlkZXJEaXYgPSAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdkLW5vbmUnKTtcbiAgaWYodmlzaWJsZVNsaWRlckRpdiAmJiAhY2Fyb3VzZWxFbGVtZW50Lmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgY2Fyb3VzZWxFbGVtZW50LnNsaWNrKG9wdHMpO1xuICB9IGVsc2UgaWYgKGNhcm91c2VsRWxlbWVudC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljaygndW5zbGljaycpO1xuICAgIGNhcm91c2VsRWxlbWVudC5zbGljayhvcHRzKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJlc2NvLXNsaWRlJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBGcmVzY28uc2hvdyhcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICB7XG4gICAgICAgICAgdGh1bWJuYWlsczogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBOdW1iZXIoaW5kZXggKyAxKVxuICAgICAgKTtcblxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgY2Fyb3VzZWwgYXJyb3dzIHZlcnRpY2FsbHlcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NlbGVjdG9yID0gJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCc7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGxldCBhcnJvd1RvcFZhbHVlO1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKGltZ1NlbGVjdG9yLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoaW1nU2VsZWN0b3IpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIGNhcm91c2VsIGFycm93cyBvbmx5IG9uIGNhcnQgaXRlbXMgY2Fyb3VzZWxcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydChlbGVtZW50KSB7XG4gIGNvbnN0IGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgaW1nJywgZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgY29uc3QgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0KTtcbiAgJChlbGVtZW50KS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG59XG5cbmV4cG9ydCB7Y2Fyb3VzZWwsIHJlcGxhY2VDYXJvdXNlbEFycm93LCByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQsIGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCwgY3JlYXRlR2FsbGVyeURlc2t0b3B9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIENBUlQgUEFHRSBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjb250YWluZXIgPSAkKCcjY2FydFBhZ2UnKTtcbmNvbnN0IGJvZHlDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IGNhcnQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBXaGVuIHJlbG9hZGluZyBxdWFudGl0aWVzXG4gIC8vIERlc2t0b3BcbiAgJCgnLnJlbG9hZC1xdHknLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1vYmlsZVxuICAkKCcubW9iaWxlLXF0eScsIGNvbnRhaW5lcikub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSk7XG4gICAgaWYgKG5ld1F0eSA+PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ21heCcpKSkge1xuICAgICAgY29uc3QgaW5wdXRRdHlOYW1lID0gJCh0aGlzKS5kYXRhKCdpbnB1dC1xdHknKTtcbiAgICAgICQoJ2lucHV0W25hbWU9XCInICsgaW5wdXRRdHlOYW1lICsgJ1wiXScpLnZhbChuZXdRdHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUHJldmVudCBjdXN0b21lciB0byBhZGQgbW9yZSB0aGFuIDUgdGltZXMgYSBwcm9kdWN0XG4gICQoJy5xdHknLCBjb250YWluZXIpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHBhcnNlSW50KCQodGhpcykudmFsKCkpID49IHBhcnNlSW50KCQodGhpcykuYXR0cignbWF4JykpKSB7XG4gICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmF0dHIoJ21heCcpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGNvdXBvbiBjb2RlXG4gICQoJy5jb3Vwb24tY29kZS1idG4nLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIGNhcnQgaGFzIHByb2R1Y3Qgbm90IGluIHN0b2NrLCBkaXNhYmxlIGNvdXBvbiBjb2RlXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGNvdXBvbiA9ICQoJy5jb3Vwb24tY29kZScpLnZhbCgpO1xuICAgICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X3Byb21vdGlvbkNvdXBvbicpLnZhbCgnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICAgIH1cblxuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2hlbiBjb3Vwb24gY29kZSBpbnB1dCBpcyBmaWxsZWQsIGhpZGUgZXJyb3IgY29udGFpbmVyXG4gIGJvZHlDb250YWluZXIub24oXCJrZXlkb3duXCIsIFwiLmNvdXBvbi1jb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZUNsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgnJyk7XG4gIH0pO1xuXG4gIGlmKCQoJy5jb3Vwb24tY29kZS1lcnJvciAuZm9ybS1lcnJvci1tZXNzYWdlJywgY29udGFpbmVyKS5odG1sKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5jb3Vwb24taW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkpO1xuICAgICQoJy5jb3Vwb24tY29kZScpLnZhbCgkKCcjc3lsaXVzX2NhcnRfcHJvbW90aW9uQ291cG9uJykudmFsKCkpO1xuICB9XG5cbiAgLy8gQXBwbHkgYm9udXMgcG9pbnRzXG4gICQoJy5ib251cy1wb2ludHMtYnRuJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBjb3Vwb24gY29kZVxuICAgIGlmICghJCgnLmJ0bi10by1jaGVja291dCcpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICBjb25zdCBib251c1BvaW50cyA9ICQoJy5ib251cy1wb2ludHMnKS52YWwoKTtcbiAgICAgIGlmIChib251c1BvaW50cyA9PT0gJycpIHtcbiAgICAgICAgJCgnI3N5bGl1c19jYXJ0X2JvbnVzUG9pbnRzJykudmFsKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbChib251c1BvaW50cyk7XG4gICAgICB9XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAkKCcuZGVsZXRlLWJvbnVzLXBvaW50cycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgY2FydCBoYXMgcHJvZHVjdCBub3QgaW4gc3RvY2ssIGRpc2FibGUgYm9udXMgcG9pbnRzXG4gICAgaWYgKCEkKCcuYnRuLXRvLWNoZWNrb3V0JykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9ib251c1BvaW50cycpLnZhbCgnJyk7XG4gICAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGJvbnVzIHBvaW50cyBpbnB1dCBpcyBmaWxsZWQsIGhpZGUgZXJyb3IgY29udGFpbmVyXG4gIGJvZHlDb250YWluZXIub24oXCJrZXlkb3duXCIsIFwiLmJvbnVzLXBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJywgY29udGFpbmVyKS5odG1sKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5ib251cy1wb2ludHMtaW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmJvbnVzLXBvaW50cycpLnZhbCgkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoKSk7XG4gIH1cblxuICAvLyBJZiBjYXJ0IGhhcyBwcm9kdWN0IG5vdCBpbiBzdG9jaywgZGlzYWJsZSBidXR0b24gbGlua2VkIHRvIGNoZWNrb3V0IHBhZ2VcbiAgJCgnYS5idG4tdG8tY2hlY2tvdXQnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcnQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDSEVDS09VVCBNQU5BR0VNRU5UICovXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7IGNyZWF0ZUFkZHJlc3NDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuXG4vLyBNYWluIGZ1bmN0aW9uIHVzZWQgaW4gaW5pdFxuY29uc3Qgc2F2ZUJ1dHRvbiA9ICQoJyNjaGVja291dFBhZ2UgLnNhdmUtaW4tYWNjb3VudCcpO1xuY29uc3QgY2FuY2VsQnRuID0gJCgnI2NoZWNrb3V0UGFnZSAuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJyk7XG5cbmNvbnN0IGNoZWNrb3V0ID0gZnVuY3Rpb24gbWFpbkZ1bmN0aW9ucygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gJCgnI2NoZWNrb3V0UGFnZScpO1xuICAvLyBXaGVuIHRoZSB1c2VyIHdhbnRzIHRvIGNoYW5nZSBoaXMgYWRkcmVzc1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KHRoaXMpWzFdO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY2xpY2tlZCcpICYmICEkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG5cbiAgICAgIGNhbmNlbEJ0bi5zaG93KCk7XG4gICAgICBjYW5jZWxCdG4ucHJldigpLmhpZGUoKTtcblxuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLmhpZGUoKTtcblxuICAgICAgbWFuYWdlQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUsICdjaGFuZ2UnLCBjb250YWluZXIpO1xuICAgICAgY3JlYXRlQWRkcmVzc0Nhcm91c2VsKCQoJyNjYXJvdXNlbEFkZHJlc3NMaXN0JykpO1xuICAgICAgLy8gQ3JlYXRlIGV2ZW50IG9uIGFkZHJlc3MgaXRlbSBhZnRlciBjYXJvdXNlbCBpcyBvcGVuXG4gICAgICAkKCcuY2hvb3NlLWFkZHJlc3MgLmNob29zZS1hZGRyZXNzLWl0ZW0gYWRkcmVzcycsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjaG9vc2VBZGRyZXNzKCQodGhpcyksIGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICBtYW5hZ2VBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSwgJ2FkZCcsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICAgIC8vIFdoZW4gdXNlciB3YW50cyB0byBhZGQgYSBuZXcgYWRkcmVzcyB0byBoaXMgYWNjb3VudFxuICAkKCdhLmNoZWNrb3V0LWFkZC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gZ2V0Q2xhc3NMaXN0KCQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MuY2xpY2tlZCcsIGNvbnRhaW5lcilbMF0pWzFdO1xuICAgIHNob3dBZGRGb3JtKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAgIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCAnYWRkJywgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIHNhdmUgYSBuZXcgYWRkcmVzc1xuICBzYXZlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFkZHJlc3NUeXBlID0gJ3NoaXBwaW5nJztcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpKSB7XG4gICAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdCh0aGlzKVszXTtcbiAgICAgICQoJyNjaGVja291dFBhZ2UgLmRhdGEtJyArIGFkZHJlc3NUeXBlKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZCArICddJztcbiAgICAgICAgY29uc3QgdG9TYXZlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmaWVsZE5hbWU7XG4gICAgICAgIGNvbnN0IHRvUmVwbGFjZSA9ICcuY2hhbmdlLScrIGFkZHJlc3NUeXBlICsnLWFkZHJlc3MgJyArIGZpZWxkTmFtZTtcbiAgICAgICAgJCh0b1JlcGxhY2UpLnZhbCgkKHRvU2F2ZSkudmFsKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrb3V0U2F2ZUFkZHJlc3ModGhpcywgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciBjbGlja3Mgb24gYWRkcmVzcyBwYWdlIG5leHQgYnV0dG9uXG4gICQoJy5tYWluLWFkZHJlc3MtZm9ybSBidXR0b24uYnRuLXByaW1hcnknLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKTtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRDbGFzcygnbG9hZGluZycpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIC8vIFdoZW4gdXNlciBjYW5jZWxzIHRoZSBhZGRyZXNzIGNoYW5nZXNcbiAgJCgnYS5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgY2FuY2VsQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBhZGRcbiAgJCgnYS5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5zaG93KCk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG4vLyBXaGVuIHVzZXIgY2hvc2UgYW4gYWRkcmVzcyBpcyB0aGUgYWRkcmVzc2VzIGxpc3RcbmZ1bmN0aW9uIGNob29zZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuZGF0YS1hZGRyZXNzJywgZWxlbWVudCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBnZXRDbGFzc0xpc3QodGhpcylbMV07XG4gICAgY29uc3QgZmllbGRTZWxlY3RvciA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgIGNvbnN0IGZvcm1GaWVsZCA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGRTZWxlY3RvcjtcbiAgICBjb25zdCBjaG9zZW5BZGRyZXNzVGV4dCA9ICcuZGF0YS0nKyBhZGRyZXNzVHlwZSArJy4nICsgZmllbGROYW1lO1xuXG4gICAgbGV0IGNob3NlblZhbHVlID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgJChjaG9zZW5BZGRyZXNzVGV4dCkudGV4dChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBjaG9zZW5WYWx1ZSA9ICQodGhpcykudGV4dCgpLnN1YnN0cmluZygwLCAyKTtcbiAgICB9XG4gICAgJChmb3JtRmllbGQpLnZhbChjaG9zZW5WYWx1ZSk7XG5cbiAgICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICAgIGlmICgkKHRoaXMpLnRleHQoKS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGNob3NlbkFkZHJlc3NUZXh0KS5jbG9zZXN0KCdhZGRyZXNzJykuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBjaG9zZW5WYWx1ZSk7XG4gIH0pO1xuICAkKCcjc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbn1cblxuLyogU2F2ZSBhZGRyZXNzIGluIHVzZXIgYWNjb3VudCA6IFJldHVybnMgZXJyb3JzIGluIGZvcm0gaWYgbm90IHZhbGlkICovXG5mdW5jdGlvbiBjaGVja291dFNhdmVBZGRyZXNzKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBjb250YWluZXIpIHtcbiAgY29uc3QgZm9ybSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnZm9ybScpO1xuICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc190eXBlXCJdJywgZm9ybSkudmFsKGFkZHJlc3NUeXBlKTtcbiAgZmlsbE90aGVyQWRkcmVzcyhhZGRyZXNzVHlwZSwgY29udGFpbmVyKTtcblxuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc3QgZGF0YVN1Y2Nlc3NEaXYgPSAkKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IG5vQWRkcmVzcyA9IHNhdmVCdXR0b24uaGFzQ2xhc3MoJ25vLWFkZHJlc3NlcycpO1xuICAgICAgaWYoZGF0YVN1Y2Nlc3NEaXYuaGFzQ2xhc3MoJ3NhdmUtYWRkcmVzcy1zdWNjZXNzJykpIHtcbiAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGdldENsYXNzTGlzdCh0aGlzKVsxXTtcblxuICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKHRoaXMsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICAvLyBJZiBVc2VyIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgICAgICAgICBpZiAobm9BZGRyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBnZXRPdGhlckFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlKSArICcuJyArIGZpZWxkTmFtZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpLCBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKCcuYWRkcmVzcy1ib29rJywgY29udGFpbmVyKS5odG1sKCQoJy5hZGRyZXNzLWJvb2snLCBkYXRhU3VjY2Vzc0RpdikuaHRtbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub0FkZHJlc3MpIHtcbiAgICAgICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICAkKCcubm8tYWRkcmVzc2VzLXRleHQnLCBjb250YWluZXIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgICBzaG93TWFpbkZvcm0oY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlQ2hhbmdlQWRkcmVzcyhjb250YWluZXIpO1xuICAgICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGhpZGVTYXZlQWRkcmVzc0Zvcm0oY29udGFpbmVyKTtcbiAgICAgICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICQodGhpcykuY2xvc2VzdCgnbGFiZWwnKS5hdHRyKCdmb3InKTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2lkPVwiJysgZmllbGROYW1lICsnXCJdJywgY29udGFpbmVyKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1lcnJvci1tZXNzYWdlIGQtYmxvY2tcIj4nICsgZmllbGRFcnJvciArICc8L3NwYW4+PC9zcGFuPicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KVxufVxuXG4vKiBGaWxsIGFkZHJlc3MgZm9ybSBmaWVsZHMgdG8gYXZvaWQgZXJyb3JzICovXG5mdW5jdGlvbiBmaWxsQWRkcmVzcyhmaWVsZElkLCBhZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGtlZXBDYW1lbEZpZWxkID0gWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnY291bnRyeUNvZGUnXTtcbiAgY29uc3QgZGF0YVRvRmlsbCA9ICQoJy5jaG9zZW4tYWRkcmVzcyBhZGRyZXNzLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5kYXRhKCk7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoIWtlZXBDYW1lbEZpZWxkLmluY2x1ZGVzKGZpZWxkTmFtZSkpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICAkKHRoaXMpLnZhbChkYXRhVG9GaWxsW2ZpZWxkTmFtZV0pO1xuICB9KTtcbiAgJCgnI2luQWNjb3VudF9zYXZlX2RpZmZlcmVudEJpbGxpbmdBZGRyZXNzJywgY29udGFpbmVyKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG59XG5cbi8qIEZpbGwgYWRkcmVzc2VzIHdoZW4gdXNlciBjbGlja3Mgb24gbmV4dCBidXR0b24gKi9cbmZ1bmN0aW9uIGZpbGxBbGxBZGRyZXNzZXMoY29udGFpbmVyKSB7XG4gIFsnc2hpcHBpbmcnLCAnYmlsbGluZyddLmZvckVhY2goKGFkZHJlc3NUeXBlKSA9PiB7XG4gICAgY29uc3QgZmllbGRJZCA9ICdzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc18nICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzcyc7XG4gICAgZmlsbEFkZHJlc3MoZmllbGRJZCwgYWRkcmVzc1R5cGUsICcubWFpbi1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpXG4gIH0pXG59XG5cbi8qIEZpbGwgb3RoZXIgYWRkcmVzcyB0eXBlIGZvcm0gd2hlbiBzYXZpbmcgbmV3IGFkZHJlc3MgKi9cbmZ1bmN0aW9uIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBvdGhlckFkZHJlc3NUeXBlID0gZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSk7XG4gIGxldCBmaWVsZElkID0gJ2luQWNjb3VudF9zYXZlXycgKyBvdGhlckFkZHJlc3NUeXBlO1xuICBpZiAoc2F2ZUJ1dHRvbi5oYXNDbGFzcygnbm8tYWRkcmVzc2VzJykpIHtcbiAgICBmaWxsT3RoZXJGb3JtKGFkZHJlc3NUeXBlLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBmaWxsQWRkcmVzcyhmaWVsZElkLCBvdGhlckFkZHJlc3NUeXBlLCAnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKTtcbiAgfVxufVxuXG4vLyBGaWxsIG90aGVyIG5ldyBhZGRyZXNzIGZvcm0gT05MWSBJRiB1c2VyIGRvbid0IGhhdmUgYWRkcmVzc2VzIHlldFxuZnVuY3Rpb24gZmlsbE90aGVyRm9ybShhZGRyZXNzVHlwZSwgb3RoZXJBZGRyZXNzVHlwZSwgZm9ybSwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIGFkZHJlc3NUeXBlO1xuICBjb25zdCBvdGhlckZpZWxkSWQgPSAnaW5BY2NvdW50X3NhdmVfJyArIG90aGVyQWRkcmVzc1R5cGU7XG4gICQoZm9ybSArICcgW2lkXj1cIicgKyBmaWVsZElkICsgJ1wiXScsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoXFx3KylcXF0kL2dtO1xuICAgIGxldCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBpZiAoZmllbGROYW1lICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgY29uc3QgaWRUb0ZpbGwgPSAnIycgKyBvdGhlckZpZWxkSWQgKyAnXycgKyBmaWVsZE5hbWU7XG4gICAgJChpZFRvRmlsbCkudmFsKCQodGhpcykudmFsKCkpO1xuICB9KTtcbn1cblxuLy8gRmlsbCBmb3JtIGFuZCBkaXYgZGF0YSB3aGVuIHNhdmUgbmV3IGFkZHJlc3NcbmZ1bmN0aW9uIGZpbGxEYXRhQWZ0ZXJTYXZlKGVsZW1lbnQsIGFkZHJlc3NUeXBlLCBmaWVsZE5hbWUsIGNvbnRhaW5lcikge1xuICAvLyBHZXQgdmFsdWUgZnJvbSBhamF4IHJldHVyblxuICBjb25zdCBuZXdWYWx1ZSA9ICQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBjb250YWluZXIpLmh0bWwoKTtcblxuICAvLyBDcmVhdGUgbWFpbiBmb3JtIGZpZWxkIHNlbGVjdG9yXG4gIGNvbnN0IGZvcm1GaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddJztcbiAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgLy8gUmVwbGFjZSBmaWVsZCB3aXRoIHZhbHVlIGZyb20gYWpheCByZXR1cm5cbiAgJChmaWVsZFRvUmVwbGFjZSkudmFsKG5ld1ZhbHVlKTtcblxuICAvLyBSZXBsYWNlIHRleHQgd2l0aCB2YWx1ZSBmcm9tIGFqYXggcmV0dXJuXG4gICQoZWxlbWVudCkudGV4dChuZXdWYWx1ZSk7XG4gIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAkKGVsZW1lbnQpLnRleHQoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLmNvdW50cnlOYW1lJywgY29udGFpbmVyKS5odG1sKCkpO1xuICB9XG5cbiAgLy8gU2hvdyBvciBoaWRlIHN0cmVldDIgY29udGFpbmVyIGFjY29yZGluZyB0byB2YWx1ZVxuICBpZiAoZmllbGROYW1lID09PSAnc3RyZWV0MicpIHtcbiAgICBpZiAoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGNvbnRhaW5lcikuaHRtbCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbGwgYWRkcmVzcyBkaXYgZGF0YVxuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNhbmNlbC1pbmZvLicgKyBhZGRyZXNzVHlwZSkuYXR0cignZGF0YS0nICsgZ2V0RGF0YUZpZWxkTmFtZShmaWVsZE5hbWUpLCBuZXdWYWx1ZSk7XG59XG5cbi8qIFNob3cgTWFpbiBmb3JtIHdoZW4gdXNlciBoYXZlIG5vIGFkZHJlc3NlcyAqL1xuZnVuY3Rpb24gc2hvd01haW5Gb3JtKGNvbnRhaW5lcikge1xuICAvLyBIaWRlIGRpdiBtZW50aW9uaW5nIHRoYXQgdXNlIGRvZXNuJ3QgaGF2ZSBhZGRyZXNzZXNcbiAgJCgnLm5vLWFkZHJlc3MteWV0JywgY29udGFpbmVyKS5yZW1vdmUoKTtcbiAgLy8gSGlkZSBhZGQgbmV3IGFkZHJlc3MgZm9ybVxuICAkKCcuYWRkLXNoaXBwaW5nLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gIC8vIEhpZGUgYWRkIG5ldyBhZGRyZXNzIGZvcm0gdGl0bGVcbiAgJCgnLm5ldy1hZGRyZXNzLXRpdGxlJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAudXNlJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5uZXctYWRkcmVzcy10aXRsZSAuYWRkJywgY29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gIC8vIFNob3cgbmF2aWdhdGlvbiBidXR0b25zIGZyb20gbWFpbiBmb3JtXG4gICQoJy5jYW5jZWwtYWRkLWNoZWNrb3V0LWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5uZXh0KCdhLmJ0bicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn1cblxuLyogSGlkZSBhZGRyZXNzIG1vZGlmaWNhdGlvbiBjb250YWluZXIgKi9cbmZ1bmN0aW9uIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICBjYW5jZWxCdG4uaGlkZSgpO1xuICBjYW5jZWxCdG4ucHJldigpLnNob3coKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKVswXS5zY3JvbGxUb3AgPSAwO1xufVxuXG4vKiBSZW1vdmUgZXJyb3IgaW5kaWNhdG9ycyB3aGVuIHNhdmUgYWRkcmVzcyBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuZnVuY3Rpb24gaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpIHtcbiAgLy8gVXNlIGFkZHJlc3NUeXBlIGNob3NlbiB3aGVuIHNhdmUgZm9ybSBpcyBzaG93blxuICBsZXQgYWRkcmVzc1R5cGUgPSBnZXRDbGFzc0xpc3Qoc2F2ZUJ1dHRvblswXSlbM107XG4gIGlmIChhZGRyZXNzVHlwZSA9PT0gJ25vLWFkZHJlc3NlcycpIHtcbiAgICBhZGRyZXNzVHlwZSA9IGdldENsYXNzTGlzdChzYXZlQnV0dG9uWzBdKVs0XTtcbiAgfVxuICAkKCcuY2hhbmdlLScgKyBhZGRyZXNzVHlwZSArICctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoYW5nZS0nICsgZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkgKyAnLXRpdGxlJywgY29udGFpbmVyKS5oaWRlKCk7XG5cbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dCwgLnNhdmUtYWRkcmVzcy1mb3JtIHNlbGVjdCcsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5pbnZhbGlkLWZlZWRiYWNrJywgY29udGFpbmVyKS5yZW1vdmUoKTtcbn1cblxuLyogUmVwbGFjZSBhbGwgZm9ybSBhbmQgZGlzcGxheWVkIGFkZHJlc3MgZGF0YSB3aGVuIGNhbmNlbCBtb2RpZmljYXRpb25zICovXG5mdW5jdGlvbiBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvbGREYXRhID0gJCh0aGlzKS5kYXRhKCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSAodGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKSlbMV07XG4gICAgY29uc3QgZmllbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZERhdGEpO1xuXG4gICAgZmllbGROYW1lcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgZmllbGROYW1lID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnY291bnRyeU5hbWUnKSB7XG4gICAgICAgIGZpZWxkTmFtZSA9ICdjb3VudHJ5Q29kZSdcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRUb1JlcGxhY2UgPSAnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy4nICsgZmllbGROYW1lO1xuICAgICAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ11cIl0nO1xuICAgICAgY29uc3QgZmllbGRUb1JlcGxhY2UgPSAnLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gICAgICAvLyBTZXQgZm9ybSB3aXRoIG9sZCBkYXRhXG4gICAgICAkKGZpZWxkVG9SZXBsYWNlLCBjb250YWluZXIpLnZhbChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIGlmIChlbGVtZW50ICE9PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICAgIC8vIFNldCBjaG9zZW4gQWRkcmVzcyB3aXRoIG9sZCBkYXRhXG4gICAgICAgICQodGV4dFRvUmVwbGFjZSkudGV4dChvbGREYXRhW2VsZW1lbnRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIFNob3cgYWRkIGFkZHJlc3MgZm9ybVxuZnVuY3Rpb24gc2hvd0FkZEZvcm0oYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSAubmV3LWFkZHJlc3MtdGl0bGUnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJywgY29udGFpbmVyKS52YWwoJycpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG5cbiAgLy8gSGlkZSBhbGwgc2F2ZSBhZGRyZXNzIGZvcm1zIGJlZm9yZSBzaG93aW5nIHRoZSBjaG9zZW4gb25lXG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBbY2xhc3NePVwiYWRkLVwiXScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gLmFkZC0nICsgYWRkcmVzc1R5cGUgKyAnLWFkZHJlc3MnLCBjb250YWluZXIpLnNob3coKTtcbn1cblxuLyogTWFuYWdlIHdoYXQgdHlwZSBvZiBhZGRyZXNzIHdpbGwgYmUgcmVwbGFjZSBhbmQvb3Igc2F2ZWQgKi9cbmZ1bmN0aW9uIG1hbmFnZUFkZHJlc3NUeXBlKGFkZHJlc3NUeXBlLCBzZWxlY3RvclR5cGUsIGNvbnRhaW5lcikge1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGFkZHJlc3NUeXBlICsgJy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctJyArIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpICsgJy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuXG4gIC8vIEFsc28gTWFuYWdlIFNhdmVCdXR0b24gY2xhc3NcbiAgc2F2ZUJ1dHRvbi5hZGRDbGFzcyhhZGRyZXNzVHlwZSk7XG4gIHNhdmVCdXR0b24ucmVtb3ZlQ2xhc3MoZ2V0T3RoZXJBZGRyZXNzVHlwZShhZGRyZXNzVHlwZSkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT01NT04gRlVOQ1RJT05TICovXG4vKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEdldCBjbGFzcyBsaXN0IGZyb20gZ2l2ZW4gZWxlbWVudFxuZnVuY3Rpb24gZ2V0Q2xhc3NMaXN0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG59XG5cbi8vIEdldCBmaWVsZCBuYW1lIHRvIGZpbGwgZGF0YSBpbmZvIGluIC5jYW5jZWwtaW5mbyBkaXZcbmZ1bmN0aW9uIGdldERhdGFGaWVsZE5hbWUoZmllbGROYW1lKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSAvW0EtWl0vZ20uZXhlYyhmaWVsZE5hbWUpO1xuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoZmllbGROYW1lLnN1YnN0cigwLCBtYXRjaGVzLmluZGV4KSArICctJyArIGZpZWxkTmFtZS5zdWJzdHIobWF0Y2hlcy5pbmRleCwgZmllbGROYW1lLmxlbmd0aCkpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gZmllbGROYW1lO1xufVxuXG4vLyBHZXQgb3RoZXIgYWRkcmVzcyB0eXBlIGZyb20gYWRkcmVzcyB0eXBlIGdpdmVcbmZ1bmN0aW9uIGdldE90aGVyQWRkcmVzc1R5cGUoYWRkcmVzc1R5cGUpIHtcbiAgcmV0dXJuIChhZGRyZXNzVHlwZSA9PT0gJ3NoaXBwaW5nJykgPyAnYmlsbGluZycgOiAnc2hpcHBpbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja291dDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBDT05UQUNUIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgY29udGFjdFBhZ2UgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKCkge1xuICAvLyBBamF4IGNhbGwgd2hlbiBjb250YWN0IGZvcm0gaXMgc3VibWl0dGVkXG4gICQoJyNjb250YWN0UGFnZSBmb3JtIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsIC5tb2RhbC1ib2R5IGRpdicpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAkKCcjY29udGFjdFJlc3BvbnNlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAvLyBEZWxldGUgYWxsIGVycm9ycyBvZiBmb3JtIHdoZW4gc3VjY2Vzc1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0nKS52YWwoJycpLnByb3AoIFwiY2hlY2tlZFwiLCBmYWxzZSApO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2UgW25hbWVePVwic3lsaXVzX2NvbnRhY3RcIl0sICNjb250YWN0UGFnZSBbZm9yXj1cInN5bGl1c19jb250YWN0X1wiXScpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICQoJyNjb250YWN0UGFnZSBzcGFuLmludmFsaWQtZmVlZGJhY2snKS5yZW1vdmUoKTtcbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDYpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgZXJyb3JMaXN0ID0gJCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKS5maW5kKCdzcGFuJykudG9BcnJheSgpO1xuICAgICAgICAgIGVycm9yTGlzdC5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5vdXRlclRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5jbGFzc05hbWUgIT09ICdhY2NlcHRDZ3YnKSB7XG4gICAgICAgICAgICAgICAgJCgnI3N5bGl1c19jb250YWN0XycgKyBlcnJvci5jbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICAgICAgICAgICAgLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPicgKyBlcnJvci5vdXRlclRleHQgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLm5leHQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MTcpIHtcbiAgICAgICAgICAkKCcjY29udGFjdFBhZ2UgLmNvbnRhY3QtZXJyb3InKS5odG1sKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIC8vIEFkZCBuZXcgZmllbGQgd2hlbiBjaG9zZW4gc3ViamVjdCBpcyBcIm90aGVyXCJcbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIExPR0lOIFBBR0UgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGxvZ2luUGFnZSA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE9wZW4gcmVzZXQgcGFzc3dvcmQgbW9kYWxcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG5cbiAgLy8gT25seSB3aGVuIGNsYXNzIGxvZ2luLWZvcm0gZXhpc3RzIGluIHBhZ2VcbiAgaWYoJCgnLmxvZ2luLWZvcm0nKSkge1xuICAgICQoJy5zdWJtaXQtbG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRWxlbWVudCA9ICQodGhpcykuZGF0YSgnZm9ybScpO1xuICAgICAgJChmb3JtRWxlbWVudCkuc3VibWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHdoZW4gY2xhc3MgdmVyaWZ5LWFjY291bnQgZXhpc3RzIGluIHBhZ2VcbiAgY29uc3QgdmVyaWZ5QWNjb3VudE9iamVjdCA9ICQoJy52ZXJpZnktYWNjb3VudCcpO1xuICBpZih2ZXJpZnlBY2NvdW50T2JqZWN0KSB7XG4gICAgdmVyaWZ5QWNjb3VudE9iamVjdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgd2hlbiByZXNldFBhc3N3b3JkU3VibWl0IGJ1dHRvbiBleGlzdHMgaW4gcGFnZSwgQWpheCBjYWxsIHRvIHJlc2V0IHBhc3N3b3JkXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50Om5vdCguc3VjY2VzcyknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKCcubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9ycyAuZm9ybS1lcnJvci1tZXNzYWdlJykudGV4dCgkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9ycyB1bCBsaScpLnRleHQoKSk7XG4gICAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gQWN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICQoJyNyZXNldFBhc3N3b3JkTW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtIGlucHV0JykudmFsKCcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgdmFsaWQgYmVmb3JlIHN1Ym1pdCByZWdpc3RlciBmb3JtXG4gICQoJ2J1dHRvbi5zdWJtaXQtcmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICQoJChlLnRhcmdldCkuZGF0YSgnZm9ybScpKTtcbiAgICBjb25zdCBpbnB1dFJlZ2lzdGVyRm9ybSA9IHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsID0gaW5wdXRSZWdpc3RlckZvcm0udmFsKCk7XG4gICAgY29uc3QgaW52YWxpZFNwYW4gPSBpbnB1dFJlZ2lzdGVyRm9ybS5jbG9zZXN0KCdkaXYnKS5uZXh0KCdzcGFuJyk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBpbnZhbGlkU3Bhbi5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgaW5wdXRSZWdpc3RlckZvcm0ucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFNwYW4uYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIGlucHV0UmVnaXN0ZXJGb3JtLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBXaGVuIGVtYWlsIGZpZWxkIGlzIGZpbGxlZCBhbmQgY3VzdG9tZXIgd2FudHMgdG8gbW9kaWZ5IGl0cyB2YWx1ZVxuICAkKCcucmVnaXN0ZXItZm9ybSBpbnB1dCwgLmhlYWRlci1yZWdpc3Rlci1mb3JtIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgIGNvbnN0IGVtYWlsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpICYmICQoZS50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbnZhbGlkJykpIHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5QYWdlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKiovXG4vKiBQUk9EVUNUIE1BTkFHRU1FTlQgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmNvbnN0IHByaWNlQ29udGFpbmVyU2VsZWN0b3IgPSAnI3Byb2R1Y3RzRmlsdGVycyc7XG5jb25zdCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlID0gJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnO1xuXG5jb25zdCBwcmljZU1pblNlbGVjdG9yID0gJ2lucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nO1xuY29uc3QgcHJpY2VNYXhTZWxlY3RvciA9ICdpbnB1dFtuYW1lPVwiY3JpdGVyaWFbcHJpY2VdW3ByaWNlXzJdXCJdJztcblxuY29uc3QgcHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIC8vIE1hbmFnZSB2YXJpYW50IGxpc3Qgd2hlbiBjbGlja2luZyBpbiBzaXplIGF2YWlsYWJsZVxuICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWU6bm90KC52YXJpYW50LWRpc2FibGVkKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnVuZGxlSXRlbSA9ICQodGhpcykuZGF0YSgnYnVuZGxlLWl0ZW0nKTtcbiAgICBjb25zdCB2YXJpYW50TGlzdENvbnRhaW5lciA9ICQodGhpcykuY2xvc2VzdCgnZGl2LnZhcmlhbnQtbGlzdCcpO1xuXG4gICAgaWYoYnVuZGxlSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcudmFyaWFudC1uYW1lW2RhdGEtYnVuZGxlLWl0ZW09XCInICsgYnVuZGxlSXRlbSArICdcIl0nKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcudmFyaWFudC1saXN0IC52YXJpYW50LW5hbWUnKS5yZW1vdmVDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICAkKCcuaW52YWxpZC1mZWVkYmFjaycsIHZhcmlhbnRMaXN0Q29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpLmFkZENsYXNzKCdkLW5vbmUnKTtcblxuICAgIGlmICgkKHRoaXMpLmRhdGEoJ2FsbW9zdC1vdXQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubGFzdC1wcm9kdWN0LWluLXN0b2NrJywgdmFyaWFudExpc3RDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgICAkKHRoaXMpLmFkZENsYXNzKCd2YXJpYW50LXNlbGVjdGVkJyk7XG4gIH0pO1xuXG4gIC8vIFNob3cgb3IgaGlkZSB2YXJpYW50cyBsaXN0IGluIHByb2R1Y3RzIGNhcm91c2VsIGFjY29yZGluZyB0byBzY3JlZW4gc2l6ZVxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiAxNDQwKSB7XG4gICAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgICB9XG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcudmFyaWFudHMtY29udGFpbmVyJywgdGhpcykuaGlkZSgpO1xuICB9KTtcblxuICAvLyBXaGVuIGNsaWNraW5nIG9uIGFkZCB0byBjYXJ0IGJ1dHRvblxuICAkKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcudmFyaWFudC1saXN0IC5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xuICAgIGNvbnN0IHNlbGVjdGVkU2l6ZSA9ICQoJ2lucHV0W25hbWVePVwiJyArICQoYWRkVG9DYXJ0Rm9ybSkuZGF0YSgnbmFtZVRvQ2hlY2snKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aDtcbiAgICBjb25zdCBidW5kbGVJdGVtc0NvdW50ID0gJCgnZGl2LmJ1bmRsZS1pdGVtJykubGVuZ3RoO1xuICAgIGlmKHNlbGVjdGVkU2l6ZSA+IDAgJiYgc2VsZWN0ZWRTaXplIDwgYnVuZGxlSXRlbXNDb3VudCApIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3Q6bm90KC5pbnB1dC1jaGVja2VkKScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaXplID09PSAwKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkuZmluZCgnLmVtcHR5LXByb2R1Y3QnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgICQoYWRkVG9DYXJ0Rm9ybSkudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgfVxuICB9KVxuXG4gICQoJ2lucHV0W2lkXj1cImJpdGJhZ19zeWxpdXNfcHJvZHVjdF9idW5kbGVfcGx1Z2luX2FkZF9wcm9kdWN0X2J1bmRsZV90b19jYXJ0X1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5maW5kKCdzcGFuLmludmFsaWQtZmVlZGJhY2snKS5hZGRDbGFzcygnaW5wdXQtY2hlY2tlZCcpLmFkZENsYXNzKCdkLW5vbmUnKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICB9KVxufTtcblxuY29uc3QgZmlsdGVyUHJvZHVjdHMgPSBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zKCkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IGNyaXRlcmlhID0gcXVlcnlTdHJpbmcuaW5kZXhPZignY3JpdGVyaWEnKTtcbiAgY29uc3QgcHJpY2VJbnB1dCA9ICQoJy5wcmljZS1maWx0ZXIgLnByaWNlLWlucHV0Jyk7XG5cbiAgbGV0IHByaWNlU2xpZGVyO1xuICBsZXQgcHJpY2VTbGlkZXJNb2JpbGU7XG5cbiAgaWYgKHByaWNlSW5wdXQubGVuZ3RoID4gMCkge1xuICAgIHByaWNlU2xpZGVyID0gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgcHJpY2VDb250YWluZXJTZWxlY3Rvcik7XG4gICAgcHJpY2VTbGlkZXJNb2JpbGUgPSBjcmVhdGVQcmljZVNsaWRlcihwcmljZUlucHV0LCBwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKTtcblxuICAgIC8vIFdoZW4gdXNlciBjaGFuZ2VzIHByaWNlIGlucHV0IHZhbHVlXG4gICAgcHJpY2VJbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZihlLndoaWNoICE9PSA4ICYmICFpc05hTihTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSl7XG4gICAgICAgIHNldFNsaWRlck5ld1ZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICAgICAgc2V0U2xpZGVyTmV3VmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1BTkFHRSBERVNLVE9QIEZJTFRFUlNcbiAgICovXG4gIC8vIFNpemUgZmlsdGVyIG1hbmFnZW1lbnRcbiAgY29uc3Qgc2l6ZUZpbHRlcklucHV0ID0gJCgnI3NpemVGaWx0ZXIgaW5wdXQnKTtcbiAgc2l6ZUZpbHRlcklucHV0LmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuICAgIGlmKHRoaXMuY2hlY2tlZCkge1xuICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnaW5wdXRbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuICBzaXplRmlsdGVySW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZihlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG4gIC8vIFZhbGlkYXRlIGZpbHRlcnMgb24gZGVza3RvcFxuICAkKCdhLnZhbGlkYXRlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3IpKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJNb2JpbGUsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyRm9ybScpLnN1Ym1pdCgpO1xuICB9KTtcblxuICAvKipcbiAgICogTUFOQUdFIE1PQklMRSBGSUxURVJTXG4gICAqL1xuICAvLyBTaXplIGZpbHRlciBtYW5hZ2VtZW50IG9uIG1vYmlsZVxuICAkKCcjY3JpdGVyaWFTaXplTW9iaWxlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSAkKGUudGFyZ2V0KS5kYXRhKCdpZCcpO1xuICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICQoZS50YXJnZXQpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkKCcjJyArIGlucHV0VG9DaGVjaykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5yZW1vdmVBdHRyKCdjaGVja2VkJykubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQuaW5wdXQtc29ydGluZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgJCgnI3Byb2R1Y3RGaWx0ZXJNb2JpbGVGb3JtIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyayAuY2hlY2tlZCcpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgJChlLnRhcmdldCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgJChlLnRhcmdldCkubmV4dCgnLmNoZWNrbWFyaycpLmZpbmQoJy5jaGVja2VkJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSk7XG5cbiAgLy8gVmFsaWRhdGUgZmlsdGVyc1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZigkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykudmFsKCkgPT09ICdjcmVhdGVkQXQnKSB7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykucmVtb3ZlKCk7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZy1jcmVhdGVkQXQnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWlubGluZS1ibG9jaycpO1xuICAgIH1cbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsICQocHJpY2VDb250YWluZXJTZWxlY3RvcikpO1xuICAgIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck1vYmlsZSwgJChwcmljZUNvbnRhaW5lclNlbGVjdG9yTW9iaWxlKSk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG4gIH0pXG5cbiAgLy8gTW9iaWxlIGZpbHRlcnMgYmVoYXZpb3VyXG4gICQoJy5wcm9kdWN0LWZpbHRlcnMuZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICByZXNpemVGaWx0ZXJNZW51KCk7XG4gICAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSkub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8PSAxMjAwKSB7XG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWZpbHRlcnNcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICAgICQoJy5jbG9zZScsICQocHJpY2VDb250YWluZXJTZWxlY3Rvck1vYmlsZSkpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdFTkVSQUwgRlVOQ1RJT05TXG4gICAqL1xuICAvLyBIaWRlIHJlaW5pdGlhbGl6YXRpb24gYnV0dG9uIHdoZW4gZmlsdGVycyBoYXZlIG5vIGNyaXRlcmlhXG4gIGlmIChjcml0ZXJpYSAhPT0gLTEpIHtcbiAgICAkKCcucmVpbml0LWZpbHRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICB9XG4gIC8vIEFkZCBhY3Rpb24gdG8gY2xvc2UgaWNvblxuICAkKCcuY2xvc2UnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5kcm9wZG93bi10b2dnbGUnLCAkKHByaWNlQ29udGFpbmVyU2VsZWN0b3JNb2JpbGUpKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkIHRvIGF2b2lkIHNob3dpbmcgZmlsdGVyIG1vYmlsZSBtZW51IG9uIGRlc2t0b3BcbiAqL1xuY29uc3QgcmVzaXplRmlsdGVyTWVudSA9IGZ1bmN0aW9uIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gJCgnI2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlckJhbm5lciA9ICQoJy5oZWFkZXItYmFubmVyJyk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLmhlaWdodCgpIC0gaGVhZGVyQmFubmVyLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gaGVhZGVyQ29udGFpbmVyLm91dGVySGVpZ2h0KCkgLSBoZWFkZXJCYW5uZXIuaGVpZ2h0KCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCA9ICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5oZWlnaHQoKSAtICQoJ2hlYWRlcicpLmhlaWdodCgpIC0gJCgnI2ZpbHRlclN1Ym1pdCcpLm91dGVySGVpZ2h0KCkgLSAxMDtcbiAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlJykuY3NzKCdoZWlnaHQnLCAnY2FsYygxMDAlIC0gJyArIGhlYWRlckhlaWdodCArICdweCknKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXktZmlsdGVycycpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcjZmlsdGVyTGlzdCcpLmNzcygnaGVpZ2h0JywgZmlsdGVyTGlzdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHByaWNlIHNsaWRlciBvbiB0YXhvbiBwYWdlc1xuICpcbiAqIEBwYXJhbSBwcmljZUlucHV0XG4gKiBAcGFyYW0gY29udGFpbmVyU2VsZWN0b3JcbiAqIEByZXR1cm5zIG5vVWlTbGlkZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJpY2VTbGlkZXIocHJpY2VJbnB1dCwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgY29uc3QgcHJpY2VDb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgY29uc3QgcHJpY2VSYW5nZSA9ICQoJyNwcmljZVJhbmdlJywgcHJpY2VDb250YWluZXIpWzBdO1xuICBjb25zdCBwcmljZU1pbiA9ICQocHJpY2VNaW5TZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICBjb25zdCBwcmljZU1heCA9ICQocHJpY2VNYXhTZWxlY3RvciwgcHJpY2VDb250YWluZXIpO1xuICAvLyBQcmVwYXJlIHNsaWRlciBvcHRpb25zXG4gIGNvbnN0IHRheG9uTWluUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtaW4nKSk7XG4gIGNvbnN0IHRheG9uTWF4UHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtYXgnKSk7XG4gIGNvbnN0IHJhbmdlU2xpZGVyT3B0aW9ucyA9IHtcbiAgICBzdGFydDogW3ByaWNlTWluLnZhbCgpLCBwcmljZU1heC52YWwoKV0sXG5cbiAgICByYW5nZToge1xuICAgICAgJ21pbic6IFt0YXhvbk1pblByaWNlXSxcbiAgICAgICdtYXgnOiBbdGF4b25NYXhQcmljZV1cbiAgICB9LFxuICAgIHN0ZXA6IDEsXG4gICAgY29ubmVjdDogdHJ1ZSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWhhdmlvdXI6ICd0YXAnLFxuICAgIHRvb2x0aXBzOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKHByaWNlUmFuZ2UsIHJhbmdlU2xpZGVyT3B0aW9ucyk7XG4gIHNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIHByaWNlTWluLnZhbChwYXJzZUludChuZXdWYWx1ZVswXSkpO1xuICAgIHByaWNlTWF4LnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICB9KTtcblxuICByZXR1cm4gc2xpZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRTbGlkZXJOZXdWYWx1ZShwcmljZVNsaWRlciwgcHJpY2VDb250YWluZXIpIHtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKHByaWNlTWluU2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKHByaWNlTWF4U2VsZWN0b3IsIHByaWNlQ29udGFpbmVyKTtcblxuICBjb25zdCBuZXdWYWx1ZSA9IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldO1xuICBwcmljZVNsaWRlci5zZXQobmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrIHByaWNlIHZhbHVlcyBiZWZvcmUgc2VuZCBmb3JtXG4gKiBAcGFyYW0gcHJpY2VTbGlkZXJPYmplY3RcbiAqIEBwYXJhbSBwcmljZUNvbnRhaW5lclxuICovXG5mdW5jdGlvbiBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXJPYmplY3QsIHByaWNlQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByaWNlTWluID0gJChwcmljZU1pblNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlTWF4ID0gJChwcmljZU1heFNlbGVjdG9yLCBwcmljZUNvbnRhaW5lcik7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpLmZpcnN0KCk7XG4gIGxldCBwcmljZU1pblZhbHVlID0gcHJpY2VNaW4udmFsKCk7XG4gIGxldCBwcmljZU1heFZhbHVlID0gcHJpY2VNYXgudmFsKCk7XG4gIGlmIChwcmljZU1pbi52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBpZiAocHJpY2VNaW4udmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgcHJpY2VNaW4udmFsKHByaWNlTWluVmFsdWUpO1xuICBpZiAocHJpY2VNYXgudmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgaWYgKHByaWNlTWF4LnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIHByaWNlTWF4LnZhbChwcmljZU1heFZhbHVlKTtcbiAgcHJpY2VTbGlkZXJPYmplY3Quc2V0KFtwcmljZU1pblZhbHVlLCBwcmljZU1heFZhbHVlXSk7XG59XG5cbmV4cG9ydCB7IHByb2R1Y3QsIGZpbHRlclByb2R1Y3RzLCByZXNpemVGaWx0ZXJNZW51IH07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNIQVJFIFBST0RVQ1QgTUFOQUdFTUVOVCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IHNoYXJlUHJvZHVjdCA9IGZ1bmN0aW9uIG1haW5GdW5jdGlvbnMoKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZURyb3Bkb3duJykpIHtcbiAgICBqUXVlcnkoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7XG4gICAgLy8gRmFjZWJvb2sgU2hhcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgd2luVG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICgzNTAgLyAyKTtcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAoNjAwIC8gMik7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZWJvb2tTaGFyZScpLmRhdGFzZXQudXJsO1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3VybCwgJ0ZhY2Vib29rIC0gTm9ibGV6eiBTaG9wJywgJ3RvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0ICsgJyx0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjAwLGhlaWdodD0zNTAnKTtcbiAgICB9KTtcblxuICAgIC8vIFBpbnRlcmVzdCBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW50ZXJlc3RTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWxQaW50ZXJlc3RTaGFyZScpLmNsaWNrKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIENvcHkgdG8gQ2xpcGJvYXJkXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlTaGFyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpbmsnKTtcbiAgICAgICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdlbmFibGUnKTtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnZGlzYWJsZScpOyB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhgQ29weSBmYWlsZWQhICR7ZXJyb3J9YCkgfSlcbiAgICB9KTtcblxuICAgIC8vIE1haWwgVG9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1haWxUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5kYXRhc2V0Lm1haWx0bztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFpbFRvO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlUHJvZHVjdDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==