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
  let arrowTopValue;

  if (carouselElement !== undefined) {
    imgSliderHeight = $('.slick-active .card-img-top', carouselElement).outerHeight();
    arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $(carouselElement).next('.slider-controls').css('top', arrowTopValue + 'px');
  } else {
    imgSliderHeight = $('.slick-active .card-img-top').outerHeight();
    arrowTopValue = Math.round(imgSliderHeight / 2 - 17);
    $('.slider-controls').not('.product-gallery').css('top', arrowTopValue + 'px');
  }
}

function replaceCarouselArrowCart() {
  const element = jQuery('#carouselSummaryItemsMobile');
  const imgSliderHeight = $('.slick-active img', element).outerHeight();
  const arrowTopValue = Math.round(imgSliderHeight);
  $(element).next('.slider-controls').css('top', arrowTopValue + 'px');
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
    let slider = $('#productGallery');

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

  if (jQuery('#carouselSummaryItemsMobile') && !jQuery('#carouselSummaryItemsMobile').hasClass('slick-initialized')) {
    let slider = jQuery('#carouselSummaryItemsMobile');
    slider.slick({
      infinite: true,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 2,
      appendArrows: jQuery('#carouselSummaryItemsMobile').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev-btn"><button type="button" class="slick-prev ">Previous</button></div>',
      nextArrow: '<div class="div-btn next-btn"><button type="button" class="slick-next">Next</button></div>',
      responsive: [{
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 992,
        settings: "unslick"
      }]
    });
    replaceCarouselArrowCart();
  } else {
    const opts = {
      infinite: true,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 2,
      mobileFirst: true,
      appendArrows: jQuery('#carouselSummaryItemsMobile').next('.slider-controls'),
      prevArrow: '<div class="div-btn prev"><button type="button" class="slick-prev">Previous</button></div>',
      nextArrow: '<div class="div-btn next"><button type="button" class="slick-next">Next</button></div>',
      responsive: [{
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 992,
        settings: "unslick"
      }]
    };
    let slider = $('#carouselSummaryItemsMobile');

    if ($(document).width() < 768 && slider[0].slick && slider[0].slick.unslicked) {
      slider.slick(opts);
    }

    slider.on('setPosition', function (slick) {
      replaceCarouselArrowCart();
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
    console.log(bonusPoints);

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
}

function checkoutFunctions() {
  $('.chosen-address .change-address').on('click', function (e) {
    e.preventDefault();

    if (!$(this).hasClass('clicked')) {
      $('.chosen-address .change-address').removeClass('clicked');
      $(this).addClass('clicked');
      const saveAddressNavigation = $('#checkoutPage .save-address-navigation');
      saveAddressNavigation.addClass('d-flex').removeClass('d-none');
      $('#checkoutPage .save-checkout-address-navigation').hide();

      if ($(this).hasClass('shipping')) {
        $('.change-shipping-address').show();
        $('.change-billing-address').hide();
        $('button', saveAddressNavigation).removeClass('billing');
        $('button', saveAddressNavigation).addClass('shipping');
      }

      if ($(this).hasClass('billing')) {
        $('.change-shipping-address').hide();
        $('.change-billing-address').show();
        $('button', saveAddressNavigation).removeClass('shipping');
        $('button', saveAddressNavigation).addClass('billing');
      }

      $('#sylius_checkout_address_differentBillingAddress').prop('checked', true);
      $('#checkoutPage .checkout-address-form').removeClass('d-none').addClass('d-block');
    }
  });
  $('#checkoutPage .save-address-navigation button').on('click', function (e) {
    e.preventDefault();
    const classListBtn = e.currentTarget.className.split(/\s+/);
    $('#checkoutPage .data-' + classListBtn[3]).each(function () {
      const classList = this.className.split(/\s+/);
      const fieldName = '[name="sylius_checkout_address[' + classListBtn[3] + 'Address][' + classList[1] + ']';
      const toSave = '#checkoutPage .main-address-form ' + fieldName;
      const toReplace = '.change-' + classListBtn[3] + '-address ' + fieldName;
      $(toReplace).val($(toSave).val());
    });
    checkoutSaveAddress(e.currentTarget, classListBtn[3]);
  });
  $('#checkoutPage .save-address-navigation .btn-link').on('click', function (e) {
    e.preventDefault();
    hideChangeAddress();
    cancelChangeAddress();
  });
}

function checkoutSaveAddress(element, addressType) {
  const form = $(element).closest('form');

  if ($('input[name="address_type"]', form).length) {
    $('input[name="address_type"]', form).val(addressType);
  }

  $('input[id$="_save_shipping_differentBillingAddress"]').prop('checked', true);
  $('.main-address-form').addClass('loading');
  $.ajax({
    type: "POST",
    url: form.attr('action'),
    data: form.serialize(),
    success: function success(response) {
      const dataSuccessDiv = $(response);

      if (dataSuccessDiv.hasClass('save-address-success')) {
        $('#checkoutPage .chosen-address .data-' + addressType).each(function () {
          const classList = this.className.split(/\s+/);
          const fieldName = classList[1];
          $(this).text($('.data-' + addressType + '-success.' + fieldName, dataSuccessDiv).html());

          if (fieldName === 'street2') {
            if ($('.data-' + addressType + '-success.' + fieldName, dataSuccessDiv).html().trim() !== '') {
              $('.street2-container-' + addressType).removeClass('d-none');
            } else {
              $('.street2-container-' + addressType).addClass('d-none');
            }
          }
        });
        hideChangeAddress();
        $('.main-address-form').removeClass('loading');
        $('.main-address-form input').removeClass('is-invalid');
        $('.main-address-form .invalid-feedback').remove();
      }
    },
    error: function error(_error3) {
      $($.parseHTML(_error3.responseText)[1]).find('.form-error-message').each(function () {
        const fieldName = $(this).closest('label').next('input').attr('name');
        const fieldError = $(this).text();
        $('.main-address-form [name="' + fieldName + '"]').addClass('is-invalid').after('<span class="invalid-feedback d-block"><span class="form-error-message d-block">' + fieldError + '</span></span>');
      });
      $('.main-address-form').removeClass('loading');
    }
  });
}

function hideChangeAddress() {
  $('#checkoutPage .save-checkout-address-navigation').toggle();
  $('#checkoutPage .save-address-navigation').addClass('d-none').removeClass('d-flex');
  $('#mainContentContainer')[0].scrollTop = 0;
  $('.change-shipping-address').hide();
  $('.change-billing-address').hide();
  $('.chosen-address .change-address').removeClass('clicked');
}

function cancelChangeAddress() {
  $('#checkoutPage .chosen-address span[class^="data-"]').each(function () {
    const classList = this.className.split(/\s+/);
    const addressType = classList[0].split('-')[1];
    const fieldName = classList[1];
    const toSave = '.data-' + addressType + '.' + fieldName;
    const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
    const toReplace = '#checkoutPage .main-address-form ' + formFieldName;

    if (fieldName === 'countryCode') {
      $(toReplace).val($(toSave).text().substring(0, 2));
    } else {
      $(toReplace).val($(toSave).text());
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
  createCarousel();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  shareFunctions();
  resizeMenu($('#menuButton').attr('data-trigger'));
  resizeFilterMobileMenu();
  $('.header-dropdown').show();

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
  checkoutFunctions();
  contactPageFunction();
  resizeMainContainer();

  if ($(document).width() > 768) {
    createGalleryDesktop();
  }

  replaceCarouselArrow();
  replaceCarouselArrowCart();
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

var _syliusAddressBook = __webpack_require__(/*! ./js/sylius-address-book */ "./themes/NoblessTheme/assets/js/sylius-address-book.js");

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

  if (syliusShippingAddress && syliusShippingAddress.querySelector('.choose-address')) {
    (0, _syliusAddressBook2.default)(syliusShippingAddress);
  }

  const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');

  if (syliusBillingAddress && syliusBillingAddress.querySelector('.choose-address')) {
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

/***/ "./themes/NoblessTheme/assets/js/sylius-address-book.js":
/*!**************************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/sylius-address-book.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file overrides the sylius package file
 * BootstrapTheme/assets/js/sylius-address-book.js
 */

/* eslint-env browser */
const parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, words => words[1].toUpperCase());
};

const SyliusAddressBook = function SyliusAddressBook(el) {
  const element = el;
  const select = element.querySelector('.choose-address');

  const findByName = function findByName(name) {
    return element.querySelector(`[name*=${parseKey(name)}]`);
  };

  const changeEvent = new Event('change');
  select.querySelectorAll('.dropdown-item').forEach(item => {
    item.parentElement.addEventListener('change', e => {
      const choice = e.target[e.currentTarget.value];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnJlc2NvL2pzL2ZyZXNjby5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2luZGV4Qm9vdHN0cmFwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9hY2NvdW50LWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2JhY2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2Nocm9ub3Bvc3QucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NvbGlzc2ltby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZGUucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZW4ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZXMucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZnIucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24taXQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21vbmRpYWwtcmVsYXkucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL25leHQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmVsb2FkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiU3lsaXVzQXBpTG9naW4iLCJzaWduSW5CdXR0b24iLCJ2YWxpZGF0aW9uRmllbGQiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInZhbHVlIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImxlbmd0aCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZ2V0UHJvdmluY2VJbnB1dFZhbHVlIiwidmFsdWVTZWxlY3RvciIsInZhbCIsInVuZGVmaW5lZCIsIlN5bGl1c1Byb3ZpbmNlRmllbGQiLCJjb3VudHJ5U2VsZWN0IiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJzZWxlY3QiLCJjdXJyZW50VGFyZ2V0IiwicHJvdmluY2VDb250YWluZXIiLCJjbG9zZXN0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJyZXBsYWNlIiwicHJvdmluY2VJbnB1dEZpZWxkTmFtZSIsInByb3ZpbmNlU2VsZWN0RmllbGRJZCIsInByb3ZpbmNlSW5wdXRGaWVsZElkIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUNvZGUiLCJjb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5kZXhPZiIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwiaXRlbSIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiaW1nIiwiaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UiLCJzZWxlY3RvciIsIm9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJwcmljZSIsImhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSIsIlN5bGl1c1ZhcmlhbnRzUHJpY2VzIiwic3lsaXVzVmFyaWFudHNQcmljaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzeWxpdXNQcm9kdWN0VmFyaWFudHMiLCJvbmxvYWQiLCJpbml0Iiwib25yZXNpemUiLCJyZXNpemVDb250ZW50IiwiZGVmaW5lIiwiJCIsIkZyZXNjbyIsImV4dGVuZCIsInZlcnNpb24iLCJTa2lucyIsImZyZXNjbyIsIkJvdW5kcyIsInZpZXdwb3J0Iiwid2lkdGgiLCJCcm93c2VyIiwiTW9iaWxlU2FmYXJpIiwiQW5kcm9pZCIsIkdlY2tvIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJRSIsImF0dGFjaEV2ZW50IiwiZiIsIk9wZXJhIiwib3BlcmEiLCJwYXJzZUZsb2F0IiwiV2ViS2l0IiwibWF0Y2giLCJDaHJvbWUiLCJDaHJvbWVNb2JpbGUiLCJJRU1vYmlsZSIsInQiLCJSZWdFeHAiLCJleGVjIiwiX3NsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImJhc2VUb1N0cmluZyIsIl8iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsIlN0cmluZyIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9uIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInN0b3BQcm9wYWdhdGlvbiIsImlzRGVmYXVsdFByZXZlbnRlZCIsIkZpdCIsIndpdGhpbiIsImFyZ3VtZW50cyIsInMiLCJuIiwibyIsImEiLCJoIiwiciIsImQiLCJNYXRoIiwibWluIiwibWF4IiwiZWFzaW5nIiwiZnJlc2NvRWFzZUluQ3ViaWMiLCJmcmVzY29FYXNlSW5TaW5lIiwiY29zIiwiUEkiLCJmcmVzY29FYXNlT3V0U2luZSIsInNpbiIsIlN1cHBvcnQiLCJPIiwiUCIsInNwbGl0IiwiY2FudmFzIiwiYmEiLCJnZXRDb250ZXh0IiwiY3NzIiwiYW5pbWF0aW9uIiwiUyIsInRyYW5zZm9ybSIsInByZWZpeGVkIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlU1ZHUmVjdCIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsInN1YnN0ciIsImRldGVjdE1vYmlsZVRvdWNoIiwibW9iaWxlVG91Y2giLCJ0ZXN0IiwicGxhdGZvcm0iLCJJbWFnZVJlYWR5IiwiaW5pdGlhbGl6ZSIsImFwcGx5IiwiY2FsbCIsIlRpbWVycyIsImdldFVSSURhdGEiLCJ0eXBlIiwiZWFjaCIsIlR5cGVzIiwiZGV0ZWN0RXh0ZW5zaW9uIiwidG9Mb3dlckNhc2UiLCJzdXBwb3J0cyIsIm5hdHVyYWxXaWR0aCIsIkltYWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImlzTG9hZGVkIiwib3B0aW9ucyIsIm1ldGhvZCIsInBvbGxGYWxsYmFja0FmdGVyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwicHJveHkiLCJzdWNjZXNzIiwiaW50ZXJ2YWxzIiwiX2lwb3MiLCJfdGltZSIsIl9kZWxheSIsInBvbGwiLCJmYWxsYmFjayIsIl9wb2xsaW5nIiwiX3VzZWRQb2xsRmFsbGJhY2siLCJfZmFsbGJhY2tJbWciLCJuYXR1cmFsSGVpZ2h0Iiwib25lcnJvciIsInNyYyIsImFib3J0IiwiY2xlYXJUaW1lb3V0IiwiX2NhbGxlZFN1Y2Nlc3MiLCJfY2FsbGVkRXJyb3IiLCJfdGltZXJzIiwic2V0IiwiY2xlYXIiLCJjbGVhckFsbCIsIlR5cGUiLCJpc1ZpZGVvIiwiaW1hZ2UiLCJleHRlbnNpb25zIiwiZGV0ZWN0IiwiaW5BcnJheSIsImV4dGVuc2lvbiIsInZpbWVvIiwiaWQiLCJ5b3V0dWJlIiwiVmltZW9UaHVtYm5haWwiLCJsb2FkIiwicHJvdG9jb2wiLCJfeGhyIiwiZ2V0SlNPTiIsInRodW1ibmFpbF91cmwiLCJjYWNoZSIsInB1c2giLCJWaW1lb1JlYWR5IiwiY2FsbGJhY2siLCJkaW1lbnNpb25zIiwiT3B0aW9ucyIsImRlZmF1bHRzIiwiZWZmZWN0cyIsInNob3ciLCJoaWRlIiwic3Bpbm5lciIsInRodW1ibmFpbCIsImRlbGF5IiwidGh1bWJuYWlscyIsInNsaWRlIiwia2V5Ym9hcmQiLCJsZWZ0IiwicmlnaHQiLCJlc2MiLCJsb2FkZWRNZXRob2QiLCJsb29wIiwib25DbGljayIsIm92ZXJmbG93IiwiY2xvc2UiLCJwcmVsb2FkIiwicG9zaXRpb24iLCJza2luIiwic3Bpbm5lckRlbGF5Iiwic3luYyIsInVpIiwidWlEZWxheSIsImF1dG9wbGF5IiwiYXBpIiwidGl0bGUiLCJieWxpbmUiLCJwb3J0cmFpdCIsImNvbnRyb2xzIiwiZW5hYmxlanNhcGkiLCJoZCIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJ2cSIsImluaXRpYWxUeXBlT3B0aW9ucyIsImNyZWF0ZSIsIngiLCJ5Iiwib3ZlcmxhcCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiT3ZlcmxheSIsImJ1aWxkIiwidmlzaWJsZSIsImFkZENsYXNzIiwiUGFnZXMiLCJwYWdlIiwidmlldyIsIldpbmRvdyIsInNldFNraW4iLCJyZW1vdmVDbGFzcyIsImF0dGFjaCIsImJvZHkiLCJkZXRhY2giLCJzdG9wIiwiZmFkZVRvIiwiZmFkZU91dCIsImdldFNjcm9sbERpbWVuc2lvbnMiLCJxdWV1ZXMiLCJwYWdlcyIsIl90cmFja2luZyIsIl9maXJzdCIsInRpbWVycyIsIl9ib3giLCJfcGFnZXMiLCJfdGh1bWJuYWlscyIsIlRodW1ibmFpbHMiLCJTcGlubmVyIiwiVUkiLCJfYXR0YWNoZWQiLCJfc2tpbiIsInNldFNob3dpbmdUeXBlIiwiX3Nob3dpbmdUeXBlIiwic3RhcnRPYnNlcnZpbmdSZXNpemUiLCJfb25XaW5kb3dSZXNpemVIYW5kbGVyIiwiX29uV2luZG93UmVzaXplIiwic3RvcE9ic2VydmluZ1Jlc2l6ZSIsIm9mZiIsIl9vblNjcm9sbCIsImFkanVzdFRvU2Nyb2xsIiwiZml0VG9WaWV3cG9ydCIsInVwZGF0ZUJveERpbWVuc2lvbnMiLCJmaXRUb0JveCIsInVwZGF0ZSIsImFkanVzdFByZXZOZXh0IiwiY2VudGVyIiwidG9wIiwic2Nyb2xsVG9wIiwiZ2V0Qm94RGltZW5zaW9ucyIsIl9ib3hEaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsIl9vcmllbnRhdGlvbiIsIl9ib3hQb3NpdGlvbiIsIm9wZW5pbmciLCJfc2hvdyIsInF1ZXVlIiwiZGlzYWJsZSIsIktleWJvYXJkIiwiX2hpZGUiLCJfcmVzZXQiLCJyZW1vdmVBbGwiLCJfcG9zaXRpb24iLCJhZnRlckhpZGUiLCJjbG9zaW5nIiwidmlld3MiLCJzZXRQb3NpdGlvbiIsInN0b3BIaWRlUXVldWUiLCJyZXNldCIsIm1heVByZXZpb3VzIiwicHJldmlvdXMiLCJnZXRTdXJyb3VuZGluZ0luZGV4ZXMiLCJtYXlOZXh0IiwibmV4dCIsImVuYWJsZWQiLCJrZXlDb2RlIiwiZW5hYmxlIiwiX29uS2V5RG93bkhhbmRsZXIiLCJvbktleURvd24iLCJfb25LZXlVcEhhbmRsZXIiLCJvbktleVVwIiwiZ2V0S2V5QnlLZXlDb2RlIiwiUGFnZSIsIkxjIiwiTWMiLCJOYyIsIk9jIiwidWlkIiwiX3RvdGFsIiwiX2Z1bGxDbGljayIsIl92aXNpYmxlIiwic2hvd2hpZGUiLCJfY3JlYXRlZCIsIm9wYWNpdHkiLCJjYXB0aW9uIiwiaW5mbyIsImNsb25lIiwiaW5mb1BhZGRlciIsInBvcyIsImh0bWwiLCJiYWNrZ3JvdW5kIiwiYXR0ciIsInBvc2l0aW9uT3V0c2lkZSIsInByZXZpb3VzSW5zaWRlIiwibmV4dEluc2lkZSIsImNsb3NlSW5zaWRlIiwiZ3JvdXBlZCIsImluZm9JbnNpZGUiLCJpbmZvUGFkZGVySW5zaWRlIiwicG9zSW5zaWRlIiwiY2FwdGlvbkluc2lkZSIsInBvc2l0aW9uSW5zaWRlIiwiX2dldFN1cnJvdW5kaW5nUGFnZXMiLCJwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMiLCJwcmVsb2FkaW5nIiwicHJlbG9hZGVkIiwibG9hZGVkIiwicHJlbG9hZFJlYWR5IiwibG9hZGluZyIsIl9zcGlubmVyRGVsYXkiLCJpbWFnZVJlYWR5IiwiX21hcmtBc0xvYWRlZCIsInNldERpbWVuc2lvbnMiLCJwcmVwZW5kIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwidmltZW9SZWFkeSIsIl9hYm9ydFNwaW5uZXJEZWxheSIsImluc2VydFZpZGVvIiwicGxheWVySWZyYW1lIiwicGFyYW0iLCJfZGF0YSIsIl9jb250ZW50RGltZW5zaW9ucyIsImZyYW1lYm9yZGVyIiwicmFpc2UiLCJsYXN0Q2hpbGQiLCJzdG9wSW5hY3RpdmUiLCJ1cGRhdGVVSSIsIl91aSIsImhpZGVJbmFjdGl2ZSIsIm9uU2hvdyIsImFmdGVyUG9zaXRpb24iLCJyZW1vdmVWaWRlbyIsInJlbW92ZVRyYWNraW5nIiwiX3RyYWNrIiwicmVtb3ZlZCIsIl9nZXRJbmZvSGVpZ2h0IiwiX3doaWxlVmlzaWJsZSIsImlzIiwiaGFzQ2xhc3MiLCJ2aXNpYmlsaXR5IiwidXBkYXRlRm9yY2VkIiwiZnVsbENsaWNrIiwiX25vT3ZlcmZsb3ciLCJwYXJzZUludCIsIl9wb3NpdGlvbk91dHNpZGUiLCJsIiwidSIsImMiLCJwIiwibSIsInYiLCJnIiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsInJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCIsImpRdWVyeSIsImNyZWF0ZUNhcm91c2VsIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicHJvZHVjdEZ1bmN0aW9ucyIsImJ1bmRsZUl0ZW0iLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsImZpbHRlclByb2R1Y3RGdW5jdGlvbnMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImNyaXRlcmlhIiwicHJpY2VJbnB1dCIsInByaWNlU2xpZGVyIiwicHJpY2VTbGlkZXJNb2JpbGUiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VNaW5Nb2JpbGUiLCJwcmljZU1heE1vYmlsZSIsInRheG9uTWluUHJpY2UiLCJmaXJzdCIsInRheG9uTWF4UHJpY2UiLCJyYW5nZVNsaWRlck9wdGlvbnMiLCJzdGFydCIsInJhbmdlIiwic3RlcCIsImNvbm5lY3QiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJiZWhhdmlvdXIiLCJ0b29sdGlwcyIsInByaWNlUmFuZ2UiLCJub1VpU2xpZGVyIiwibmV3VmFsdWUiLCJwcmljZVJhbmdlTW9iaWxlIiwiaXNOYU4iLCJmcm9tQ2hhckNvZGUiLCJuZXdWYWx1ZU1vYmlsZSIsInNpemVGaWx0ZXJJbnB1dCIsImlucHV0VG9DaGVjayIsImNoZWNrUHJpY2VWYWx1ZSIsInN1Ym1pdCIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJPdXRlckhlaWdodCIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsImZpbHRlckxpc3RDb250YWluZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJsb2dpbkZ1bmN0aW9ucyIsImZvcm1FbGVtZW50IiwiYWpheCIsInNlcmlhbGl6ZSIsInRleHQiLCJwYXJzZUhUTUwiLCJyZXNwb25zZVRleHQiLCJyZWdleCIsInJlZ2lzdGVyRm9ybSIsImludmFsaWRTcGFuIiwicHJldiIsImNvbnRhY3RQYWdlRnVuY3Rpb24iLCJtb2RhbCIsInByb3AiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJ0b0FycmF5Iiwib3V0ZXJUZXh0IiwiY2xhc3NOYW1lIiwiYWZ0ZXIiLCJjb25zb2xlIiwibG9nIiwic2hhcmVGdW5jdGlvbnMiLCJ0b29sdGlwIiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWFpbFRvIiwibWFpbHRvIiwiY2FydEZ1bmN0aW9ucyIsImJvbnVzUG9pbnRzIiwiY291cG9uIiwibmV3UXR5IiwiaW5wdXRRdHlOYW1lIiwiY2hlY2tvdXRGdW5jdGlvbnMiLCJzYXZlQWRkcmVzc05hdmlnYXRpb24iLCJjbGFzc0xpc3RCdG4iLCJmaWVsZE5hbWUiLCJ0b1NhdmUiLCJ0b1JlcGxhY2UiLCJjaGVja291dFNhdmVBZGRyZXNzIiwiaGlkZUNoYW5nZUFkZHJlc3MiLCJjYW5jZWxDaGFuZ2VBZGRyZXNzIiwiYWRkcmVzc1R5cGUiLCJkYXRhU3VjY2Vzc0RpdiIsInRyaW0iLCJmaWVsZEVycm9yIiwiZm9ybUZpZWxkTmFtZSIsInN1YnN0cmluZyIsIm9yZGVyc0dyaWRGdW5jdGlvbnMiLCJsb2dpblBhZ2VGdW5jdGlvbnMiLCJtb2RhbElkIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInN5bGl1c0JpbGxpbmdBZGRyZXNzIiwiZWxlbSIsInBhcnNlS2V5Iiwia2V5Iiwid29yZHMiLCJTeWxpdXNBZGRyZXNzQm9vayIsImZpbmRCeU5hbWUiLCJuYW1lIiwicGFyZW50RWxlbWVudCIsImNob2ljZSIsImNob2ljZURhdGEiLCJhdHRyaWJ1dGVzIiwic3RhcnRzV2l0aCIsImNhbWVsQ2FzZWQiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJleGlzdHMiLCJzZXRJbnRlcnZhbCIsInByb3ZpbmNlQ29kZUZpZWxkIiwicHJvdmluY2VOYW1lRmllbGQiLCJoYXNBdHRyaWJ1dGUiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF0QkE7QUFDQTtBQXVCQUEsNEJBQVFDLEdBQVIsQ0FBWUMsY0FBWixFQUFvQkMsa0NBQXBCLEVBQXNDQyw0QkFBdEMsRUFBcURDLGdCQUFyRCxFQUE4REMsd0NBQTlELEVBQW1GQywwQkFBbkYsRUFBaUdDLHdCQUFqRyxFQUE4R0MsOEJBQTlHLEVBQThIQywwQkFBOUgsRUFBNElDLDBCQUE1SSxFQUEwSkMsY0FBMUosRUFBa0tDLDhCQUFsSyxFQUFrTEMsa0JBQWxMLEVBQTRMQyxzQkFBNUwsRUFBd01DLGdCQUF4TSxFQUFpTkMsa0JBQWpOLEVBQTJOQyxjQUEzTixFQUFtT0Msd0JBQW5P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NEMsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQWUsMkdBQTRDLEU7Ozs7Ozs7Ozs7OztBQ0EzRDtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSw4R0FBK0MsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsaUhBQWtELEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLHdHQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSwwR0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLGlIQUFrRCxFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxxSEFBc0QsRTs7Ozs7Ozs7Ozs7O0FDQXJFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7O0FDQXhELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRBd2Vzb21lIEljb25zXG4vLyBJbXBvcnQgaWNvbnMgb25lIGJ5IG9uZSB0byByZWR1Y2Ugc2l6ZSBvZiB0aGUgb3V0cHV0XG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyJztcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaG9wcGluZ0JhZyc7XG5pbXBvcnQgeyBmYUNoZWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2snO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7IGZhSW5mb0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGV2cm9uVXAnO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQnO1xuaW1wb3J0IHsgZmFTaHV0dGxlVmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2h1dHRsZVZhbic7XG5pbXBvcnQgeyBmYUNyZWRpdENhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDcmVkaXRDYXJkJztcbmltcG9ydCB7IGZhRmxhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUZsYWcnO1xuaW1wb3J0IHsgZmFDY01hc3RlcmNhcmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NNYXN0ZXJjYXJkJztcbmltcG9ydCB7IGZhQ2NWaXNhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjVmlzYSc7XG5pbXBvcnQgeyBmYUNjUGF5cGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsJztcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNlYXJjaCc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQbHVzJztcbmltcG9ydCB7IGZhUGVuY2lsQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGVuY2lsQWx0JztcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVF1ZXN0aW9uQ2lyY2xlJztcblxubGlicmFyeS5hZGQoZmFTdGFyLCBmYVF1ZXN0aW9uQ2lyY2xlLCBmYVNob3BwaW5nQmFnLCBmYUNoZWNrLCBmYUV4Y2xhbWF0aW9uQ2lyY2xlLCBmYUluZm9DaXJjbGUsIGZhQ2hldnJvblVwLCBmYU1hcE1hcmtlckFsdCwgZmFTaHV0dGxlVmFuLCBmYUNyZWRpdENhcmQsIGZhRmxhZywgZmFDY01hc3RlcmNhcmQsIGZhQ2NWaXNhLCBmYUNjUGF5cGFsLCBmYVRpbWVzLCBmYVNlYXJjaCwgZmFQbHVzLCBmYVBlbmNpbEFsdCwgZmFTeW5jQWx0KTtcbmRvbS53YXRjaCgpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ2Zvcm0tc2VyaWFsaXplJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgc2VyaWFsaXplKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuXG5jb25zdCBTeWxpdXNBcGlUb2dnbGUgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi1jaGVjay1lbWFpbC11cmwnKTtcbiAgY29uc3QgdG9nZ2xlYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImZvcm1cIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhyb3R0bGUoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChwcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiLyogSlMgcGx1Z2lucyAqL1xuaW1wb3J0ICdwb3BwZXIuanMvZGlzdC9wb3BwZXIubWluJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL2luZGV4Qm9vdHN0cmFwVGhlbWUnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuXG4vKiBDc3MgZmlsZXMgKi9cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuLyogTWVkaWEgZmlsZXMgKi9cbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcmV0dXJuLXBvbGljeS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2RlbGl2ZXJ5LXRydWNrLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21hc3RlcmNhcmQucG5nJztcbmltcG9ydCAnLi9tZWRpYS92aXNhLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvcGF5cGFsLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY29saXNzaW1vLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvY2hyb25vcG9zdC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL21vbmRpYWwtcmVsYXkucG5nJztcbmltcG9ydCAnLi9tZWRpYS9hY2NvdW50LWljb24ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2JhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9uZXh0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1mci5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZGUucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWl0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lcy5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24tZW4ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZWxvYWQucG5nJztcblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG53aW5kb3cub25yZXNpemUgPSByZXNpemVDb250ZW50O1xuXG4iLCIvKipcbiAqIEZyZXNjbyAtIEEgQmVhdXRpZnVsIFJlc3BvbnNpdmUgTGlnaHRib3ggLSB2Mi4zLjBcbiAqIChjKSAyMDEyLTIwMTkgTmljayBTdGFrZW5idXJnXG4gKlxuICogaHR0cHM6Ly93d3cuZnJlc2NvanMuY29tXG4gKlxuICogQGxpY2Vuc2U6IGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjBcbiAqL1xuIWZ1bmN0aW9uKGksZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTppLkZyZXNjbz1lKGpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oJCl7dmFyIEZyZXNjbz17fTskLmV4dGVuZChGcmVzY28se3ZlcnNpb246XCIyLjMuMFwifSksRnJlc2NvLlNraW5zPXtmcmVzY286e319O3ZhciBCb3VuZHM9e3ZpZXdwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9e3dpZHRoOiQod2luZG93KS53aWR0aCgpfTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkJiZCcm93c2VyLkdlY2tvKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGg7aS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KmV9ZWxzZSBpLmhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7cmV0dXJuIGl9fSxCcm93c2VyPShlPW5hdmlnYXRvci51c2VyQWdlbnQse0lFOiEoIXdpbmRvdy5hdHRhY2hFdmVudHx8LTEhPT1lLmluZGV4T2YoXCJPcGVyYVwiKSkmJmYoXCJNU0lFIFwiKSxPcGVyYTotMTxlLmluZGV4T2YoXCJPcGVyYVwiKSYmKCEhd2luZG93Lm9wZXJhJiZvcGVyYS52ZXJzaW9uJiZwYXJzZUZsb2F0KG9wZXJhLnZlcnNpb24oKSl8fDcuNTUpLFdlYktpdDotMTxlLmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikmJmYoXCJBcHBsZVdlYktpdC9cIiksR2Vja286LTE8ZS5pbmRleE9mKFwiR2Vja29cIikmJi0xPT09ZS5pbmRleE9mKFwiS0hUTUxcIikmJmYoXCJydjpcIiksTW9iaWxlU2FmYXJpOiEhZS5tYXRjaCgvQXBwbGUuKk1vYmlsZS4qU2FmYXJpLyksQ2hyb21lOi0xPGUuaW5kZXhPZihcIkNocm9tZVwiKSYmZihcIkNocm9tZS9cIiksQ2hyb21lTW9iaWxlOi0xPGUuaW5kZXhPZihcIkNyTW9cIikmJmYoXCJDck1vL1wiKSxBbmRyb2lkOi0xPGUuaW5kZXhPZihcIkFuZHJvaWRcIikmJmYoXCJBbmRyb2lkIFwiKSxJRU1vYmlsZTotMTxlLmluZGV4T2YoXCJJRU1vYmlsZVwiKSYmZihcIklFTW9iaWxlL1wiKX0pLGU7ZnVuY3Rpb24gZihpKXt2YXIgdD1uZXcgUmVnRXhwKGkrXCIoW1xcXFxkLl0rKVwiKS5leGVjKGUpO3JldHVybiF0fHxwYXJzZUZsb2F0KHRbMV0pfXZhciBfc2xpY2U9QXJyYXkucHJvdG90eXBlLnNsaWNlO2Z1bmN0aW9uIGJhc2VUb1N0cmluZyhpKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgaT9pOm51bGw9PWk/XCJcIjppK1wiXCJ9dmFyIF89e2lzRWxlbWVudDpmdW5jdGlvbihpKXtyZXR1cm4gaSYmMT09PWkubm9kZVR5cGV9LFN0cmluZzp7Y2FwaXRhbGl6ZTpmdW5jdGlvbihpKXtyZXR1cm4oaT1iYXNlVG9TdHJpbmcoaSkpJiZpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2kuc2xpY2UoMSl9fX07JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLGZ1bmN0aW9uKGkpe3ZhciBlO2lmKGkub3JpZ2luYWxFdmVudC53aGVlbERlbHRhP2U9aS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwOmkub3JpZ2luYWxFdmVudC5kZXRhaWwmJihlPS1pLm9yaWdpbmFsRXZlbnQuZGV0YWlsLzMpLGUpe3ZhciB0PSQuRXZlbnQoXCJmcmVzY286bW91c2V3aGVlbFwiKTskKGkudGFyZ2V0KS50cmlnZ2VyKHQsZSksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZpLnN0b3BQcm9wYWdhdGlvbigpLHQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmkucHJldmVudERlZmF1bHQoKX19KTt2YXIgRml0PXt3aXRoaW46ZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQ9JC5leHRlbmQoe2hlaWdodDohMCx3aWR0aDohMH0sYXJndW1lbnRzWzJdfHx7fSkscz0kLmV4dGVuZCh7fSxlKSxuPTEsbz01LGE9dC53aWR0aCxoPXQuaGVpZ2h0OzA8byYmKGEmJnMud2lkdGg+aS53aWR0aHx8aCYmcy5oZWlnaHQ+aS5oZWlnaHQpOyl7dmFyIHI9MSxkPTE7YSYmcy53aWR0aD5pLndpZHRoJiYocj1pLndpZHRoL3Mud2lkdGgpLGgmJnMuaGVpZ2h0PmkuaGVpZ2h0JiYoZD1pLmhlaWdodC9zLmhlaWdodCksbj1NYXRoLm1pbihyLGQpLHM9e3dpZHRoOmUud2lkdGgqbixoZWlnaHQ6ZS5oZWlnaHQqbn0sby0tfXJldHVybiBzLndpZHRoPU1hdGgubWF4KHMud2lkdGgsMCkscy5oZWlnaHQ9TWF0aC5tYXgocy5oZWlnaHQsMCksc319OyQuZXh0ZW5kKCQuZWFzaW5nLHtmcmVzY29FYXNlSW5DdWJpYzpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKihlLz1uKSplKmUrdH0sZnJlc2NvRWFzZUluU2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybi1zKk1hdGguY29zKGUvbiooTWF0aC5QSS8yKSkrcyt0fSxmcmVzY29FYXNlT3V0U2luZTpmdW5jdGlvbihpLGUsdCxzLG4pe3JldHVybiBzKk1hdGguc2luKGUvbiooTWF0aC5QSS8yKSkrdH19KTt2YXIgU3VwcG9ydD0oTz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFA9XCJXZWJraXQgTW96IE8gbXMgS2h0bWxcIi5zcGxpdChcIiBcIikse2NhbnZhczooYmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwhKCFiYS5nZXRDb250ZXh0fHwhYmEuZ2V0Q29udGV4dChcIjJkXCIpKSksY3NzOnthbmltYXRpb246UyhcImFuaW1hdGlvblwiKSx0cmFuc2Zvcm06UyhcInRyYW5zZm9ybVwiKSxwcmVmaXhlZDpmdW5jdGlvbihpKXtyZXR1cm4gUyhpLFwicHJlZml4XCIpfX0sc3ZnOiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TJiYhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIikuY3JlYXRlU1ZHUmVjdCx0b3VjaDpmdW5jdGlvbigpe3RyeXtyZXR1cm4hIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKX1jYXRjaChpKXtyZXR1cm4hMX19KCl9KSxiYSxPLFA7ZnVuY3Rpb24gUyhpLGUpe3ZhciB0PWkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zdWJzdHIoMSk7cmV0dXJuIGZ1bmN0aW9uKGksZSl7Zm9yKHZhciB0IGluIGkpaWYodm9pZCAwIT09Ty5zdHlsZVtpW3RdXSlyZXR1cm5cInByZWZpeFwiIT09ZXx8aVt0XTtyZXR1cm4hMX0oKGkrXCIgXCIrUC5qb2luKHQrXCIgXCIpK3QpLnNwbGl0KFwiIFwiKSxlKX1TdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoPWZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaD1TdXBwb3J0LnRvdWNoJiYoQnJvd3Nlci5Nb2JpbGVTYWZhcml8fEJyb3dzZXIuQW5kcm9pZHx8QnJvd3Nlci5JRU1vYmlsZXx8QnJvd3Nlci5DaHJvbWVNb2JpbGV8fCEvXihXaW58TWFjfExpbnV4KS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKX0sU3VwcG9ydC5kZXRlY3RNb2JpbGVUb3VjaCgpO3ZhciBJbWFnZVJlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfTtmdW5jdGlvbiBUaW1lcnMoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9ZnVuY3Rpb24gZ2V0VVJJRGF0YShzKXt2YXIgbj17dHlwZTpcImltYWdlXCJ9O3JldHVybiAkLmVhY2goVHlwZXMsZnVuY3Rpb24oaSxlKXt2YXIgdD1lLmRhdGEocyk7dCYmKChuPXQpLnR5cGU9aSxuLnVybD1zKX0pLG59ZnVuY3Rpb24gZGV0ZWN0RXh0ZW5zaW9uKGkpe3ZhciBlPShpfHxcIlwiKS5yZXBsYWNlKC9cXD8uKi9nLFwiXCIpLm1hdGNoKC9cXC4oW14uXXszLDR9KSQvKTtyZXR1cm4gZT9lWzFdLnRvTG93ZXJDYXNlKCk6bnVsbH0kLmV4dGVuZChJbWFnZVJlYWR5LnByb3RvdHlwZSx7c3VwcG9ydHM6e25hdHVyYWxXaWR0aDpcIm5hdHVyYWxXaWR0aFwiaW4gbmV3IEltYWdlfSxpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLmltZz0kKGkpWzBdLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5pc0xvYWRlZD0hMSx0aGlzLm9wdGlvbnM9JC5leHRlbmQoe21ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLHBvbGxGYWxsYmFja0FmdGVyOjFlM30sYXJndW1lbnRzWzNdfHx7fSksdGhpcy5zdXBwb3J0cy5uYXR1cmFsV2lkdGgmJlwib25sb2FkXCIhPT10aGlzLm9wdGlvbnMubWV0aG9kP3RoaXMuaW1nLmNvbXBsZXRlJiZcInVuZGVmaW5lZFwiIT09JC50eXBlKHRoaXMuaW1nLm5hdHVyYWxXaWR0aCk/c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7MDx0aGlzLmltZy5uYXR1cmFsV2lkdGg/dGhpcy5zdWNjZXNzKCk6dGhpcy5lcnJvcigpfSx0aGlzKSk6KCQodGhpcy5pbWcpLmJpbmQoXCJlcnJvclwiLCQucHJveHkoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVycm9yKCl9LHRoaXMpKX0sdGhpcykpLHRoaXMuaW50ZXJ2YWxzPVtbMWUzLDEwXSxbMmUzLDUwXSxbNGUzLDEwMF0sWzJlNCw1MDBdXSx0aGlzLl9pcG9zPTAsdGhpcy5fdGltZT0wLHRoaXMuX2RlbGF5PXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3NdWzFdLHRoaXMucG9sbCgpKTpzZXRUaW1lb3V0KCQucHJveHkodGhpcy5mYWxsYmFjayx0aGlzKSl9LHBvbGw6ZnVuY3Rpb24oKXt0aGlzLl9wb2xsaW5nPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe2lmKDA8dGhpcy5pbWcubmF0dXJhbFdpZHRoKXRoaXMuc3VjY2VzcygpO2Vsc2V7aWYodGhpcy5fdGltZSs9dGhpcy5fZGVsYXksdGhpcy5vcHRpb25zLnBvbGxGYWxsYmFja0FmdGVyJiZ0aGlzLl90aW1lPj10aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJiF0aGlzLl91c2VkUG9sbEZhbGxiYWNrJiYodGhpcy5fdXNlZFBvbGxGYWxsYmFjaz0hMCx0aGlzLmZhbGxiYWNrKCkpLHRoaXMuX3RpbWU+dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMF0pe2lmKCF0aGlzLmludGVydmFsc1t0aGlzLl9pcG9zKzFdKXJldHVybiB2b2lkIHRoaXMuZXJyb3IoKTt0aGlzLl9pcG9zKyssdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV19dGhpcy5wb2xsKCl9fSx0aGlzKSx0aGlzLl9kZWxheSl9LGZhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGk9bmV3IEltYWdlOyh0aGlzLl9mYWxsYmFja0ltZz1pKS5vbmxvYWQ9JC5wcm94eShmdW5jdGlvbigpe2kub25sb2FkPWZ1bmN0aW9uKCl7fSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aHx8KHRoaXMuaW1nLm5hdHVyYWxXaWR0aD1pLndpZHRoLHRoaXMuaW1nLm5hdHVyYWxIZWlnaHQ9aS5oZWlnaHQpLHRoaXMuc3VjY2VzcygpfSx0aGlzKSxpLm9uZXJyb3I9JC5wcm94eSh0aGlzLmVycm9yLHRoaXMpLGkuc3JjPXRoaXMuaW1nLnNyY30sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl9mYWxsYmFja0ltZyYmKHRoaXMuX2ZhbGxiYWNrSW1nLm9ubG9hZD1mdW5jdGlvbigpe30pLHRoaXMuX3BvbGxpbmcmJihjbGVhclRpbWVvdXQodGhpcy5fcG9sbGluZyksdGhpcy5fcG9sbGluZz1udWxsKX0sc3VjY2VzczpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZFN1Y2Nlc3N8fCh0aGlzLl9jYWxsZWRTdWNjZXNzPSEwLHRoaXMuaXNMb2FkZWQ9ITAsdGhpcy5zdWNjZXNzQ2FsbGJhY2sodGhpcykpfSxlcnJvcjpmdW5jdGlvbigpe3RoaXMuX2NhbGxlZEVycm9yfHwodGhpcy5fY2FsbGVkRXJyb3I9ITAsdGhpcy5hYm9ydCgpLHRoaXMuZXJyb3JDYWxsYmFjayYmdGhpcy5lcnJvckNhbGxiYWNrKHRoaXMpKX19KSwkLmV4dGVuZChUaW1lcnMucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fdGltZXJzPXt9fSxzZXQ6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3RpbWVyc1tpXT1zZXRUaW1lb3V0KGUsdCl9LGdldDpmdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5fdGltZXJzW2ldfSxjbGVhcjpmdW5jdGlvbihpKXtpP3RoaXMuX3RpbWVyc1tpXSYmKGNsZWFyVGltZW91dCh0aGlzLl90aW1lcnNbaV0pLGRlbGV0ZSB0aGlzLl90aW1lcnNbaV0pOnRoaXMuY2xlYXJBbGwoKX0sY2xlYXJBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fdGltZXJzLGZ1bmN0aW9uKGksZSl7Y2xlYXJUaW1lb3V0KGUpfSksdGhpcy5fdGltZXJzPXt9fX0pO3ZhciBUeXBlPXtpc1ZpZGVvOmZ1bmN0aW9uKGkpe3JldHVybi9eKHlvdXR1YmV8dmltZW8pJC8udGVzdChpKX19LFR5cGVzPXtpbWFnZTp7ZXh0ZW5zaW9uczpcImJtcCBnaWYganBlZyBqcGcgcG5nIHdlYnBcIixkZXRlY3Q6ZnVuY3Rpb24oaSl7cmV0dXJuLTE8JC5pbkFycmF5KGRldGVjdEV4dGVuc2lvbihpKSx0aGlzLmV4dGVuc2lvbnMuc3BsaXQoXCIgXCIpKX0sZGF0YTpmdW5jdGlvbihpKXtyZXR1cm4hIXRoaXMuZGV0ZWN0KCkmJntleHRlbnNpb246ZGV0ZWN0RXh0ZW5zaW9uKGkpfX19LHZpbWVvOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh2aW1lb1xcLmNvbSlcXC8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSk7cmV0dXJuISghZXx8IWVbMl0pJiZlWzJdfSxkYXRhOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuZGV0ZWN0KGkpO3JldHVybiEhZSYme2lkOmV9fX0seW91dHViZTp7ZGV0ZWN0OmZ1bmN0aW9uKGkpe3ZhciBlPS8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcL3dhdGNoXFw/KD89Lip2aT89KFthLXpBLVowLTktX10rKSkoPzpcXFMrKT8kLy5leGVjKGkpO3JldHVybiBlJiZlWzJdP2VbMl06ISghKGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvKHZpP1xcL3x1XFwvfGVtYmVkXFwvKT8oW2EtekEtWjAtOS1fXSspKD86XFxTKyk/JC9pLmV4ZWMoaSkpfHwhZVszXSkmJmVbM119LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fX0sVmltZW9UaHVtYm5haWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnVybD1pLHRoaXMuc3VjY2Vzc0NhbGxiYWNrPWUsdGhpcy5lcnJvckNhbGxiYWNrPXQsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5zdWNjZXNzQ2FsbGJhY2soaS5kYXRhLnVybCk7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PWdldFVSSURhdGEodGhpcy51cmwpLmlkO3RoaXMuX3hocj0kLmdldEpTT04oZStcIi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZStcIi8vdmltZW8uY29tL1wiK3QrXCImY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aWYoaSYmaS50aHVtYm5haWxfdXJsKXt2YXIgZT17dXJsOmkudGh1bWJuYWlsX3VybH07cy5zZXQodGhpcy51cmwsZSksdGhpcy5zdWNjZXNzQ2FsbGJhY2soZS51cmwpfWVsc2UgdGhpcy5lcnJvckNhbGxiYWNrKCl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxWaW1lb1JlYWR5PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSgpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChpLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUpe3RoaXMudXJsPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMubG9hZCgpfSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGk9cy5nZXQodGhpcy51cmwpO2lmKGkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaS5kYXRhKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZtYXh3aWR0aD05OTk5OTk5Jm1heGhlaWdodD05OTk5OTk5JmNhbGxiYWNrPT9cIiwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXtkaW1lbnNpb25zOnt3aWR0aDppLndpZHRoLGhlaWdodDppLmhlaWdodH19O3Muc2V0KHRoaXMudXJsLGUpLHRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2soZSl9LHRoaXMpKX0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLl94aHImJih0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9bnVsbCl9fSk7dmFyIHM9e2NhY2hlOltdLGdldDpmdW5jdGlvbihpKXtmb3IodmFyIGU9bnVsbCx0PTA7dDx0aGlzLmNhY2hlLmxlbmd0aDt0KyspdGhpcy5jYWNoZVt0XSYmdGhpcy5jYWNoZVt0XS51cmw9PT1pJiYoZT10aGlzLmNhY2hlW3RdKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGksZSl7dGhpcy5yZW1vdmUoaSksdGhpcy5jYWNoZS5wdXNoKHt1cmw6aSxkYXRhOmV9KX0scmVtb3ZlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT0wO2U8dGhpcy5jYWNoZS5sZW5ndGg7ZSsrKXRoaXMuY2FjaGVbZV0mJnRoaXMuY2FjaGVbZV0udXJsPT09aSYmZGVsZXRlIHRoaXMuY2FjaGVbZV19fTtyZXR1cm4gaX0oKSxPcHRpb25zPXtkZWZhdWx0czp7ZWZmZWN0czp7Y29udGVudDp7c2hvdzowLGhpZGU6MH0sc3Bpbm5lcjp7c2hvdzoxNTAsaGlkZToxNTB9LHdpbmRvdzp7c2hvdzo0NDAsaGlkZTozMDB9LHRodW1ibmFpbDp7c2hvdzozMDAsZGVsYXk6MTUwfSx0aHVtYm5haWxzOntzbGlkZTowfX0sa2V5Ym9hcmQ6e2xlZnQ6ITAscmlnaHQ6ITAsZXNjOiEwfSxsb2FkZWRNZXRob2Q6XCJuYXR1cmFsV2lkdGhcIixsb29wOiExLG9uQ2xpY2s6XCJwcmV2aW91cy1uZXh0XCIsb3ZlcmZsb3c6ITEsb3ZlcmxheTp7Y2xvc2U6ITB9LHByZWxvYWQ6WzEsMl0scG9zaXRpb246ITAsc2tpbjpcImZyZXNjb1wiLHNwaW5uZXI6ITAsc3Bpbm5lckRlbGF5OjMwMCxzeW5jOiEwLHRodW1ibmFpbHM6XCJob3Jpem9udGFsXCIsdWk6XCJvdXRzaWRlXCIsdWlEZWxheTozZTMsdmltZW86e2F1dG9wbGF5OjEsYXBpOjEsdGl0bGU6MSxieWxpbmU6MSxwb3J0cmFpdDowLGxvb3A6MH0seW91dHViZTp7YXV0b3BsYXk6MSxjb250cm9sczoxLGVuYWJsZWpzYXBpOjEsaGQ6MSxpdl9sb2FkX3BvbGljeTozLGxvb3A6MCxtb2Rlc3RicmFuZGluZzoxLHJlbDowLHZxOlwiaGQxMDgwXCJ9LGluaXRpYWxUeXBlT3B0aW9uczp7aW1hZ2U6e30sdmltZW86e3dpZHRoOjEyODB9LHlvdXR1YmU6e3dpZHRoOjEyODAsaGVpZ2h0OjcyMH19fSxjcmVhdGU6ZnVuY3Rpb24oaSxlLHQpe3Q9dHx8e30sKGk9aXx8e30pLnNraW49aS5za2lufHx0aGlzLmRlZmF1bHRzLnNraW47dmFyIHM9aS5za2luPyQuZXh0ZW5kKHt9LEZyZXNjby5Ta2luc1tpLnNraW5dfHxGcmVzY28uU2tpbnNbdGhpcy5kZWZhdWx0cy5za2luXSk6e30sbj0kLmV4dGVuZCghMCx7fSx0aGlzLmRlZmF1bHRzLHMpO24uaW5pdGlhbFR5cGVPcHRpb25zJiYoZSYmbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0mJihuPSQuZXh0ZW5kKCEwLHt9LG4uaW5pdGlhbFR5cGVPcHRpb25zW2VdLG4pKSxkZWxldGUgbi5pbml0aWFsVHlwZU9wdGlvbnMpO3ZhciBvPSQuZXh0ZW5kKCEwLHt9LG4saSk7aWYoU3VwcG9ydC5tb2JpbGVUb3VjaCYmXCJpbnNpZGVcIj09PW8udWkmJihvLnVpPVwib3V0c2lkZVwiKSwoIW8uZWZmZWN0c3x8QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KSYmKG8uZWZmZWN0cz17fSwkLmVhY2godGhpcy5kZWZhdWx0cy5lZmZlY3RzLGZ1bmN0aW9uKGUsaSl7JC5lYWNoKG8uZWZmZWN0c1tlXT0kLmV4dGVuZCh7fSxpKSxmdW5jdGlvbihpKXtvLmVmZmVjdHNbZV1baV09MH0pfSksby5zcGlubmVyPSExKSxvLmtleWJvYXJkJiYoXCJib29sZWFuXCI9PT0kLnR5cGUoby5rZXlib2FyZCkmJihvLmtleWJvYXJkPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmtleWJvYXJkLGZ1bmN0aW9uKGksZSl7by5rZXlib2FyZFtpXT0hMH0pKSxcInZpbWVvXCIhPT1lJiZcInlvdXR1YmVcIiE9PWV8fCQuZXh0ZW5kKG8ua2V5Ym9hcmQse2xlZnQ6ITEscmlnaHQ6ITF9KSksIW8ub3ZlcmZsb3d8fFN1cHBvcnQubW9iaWxlVG91Y2g/by5vdmVyZmxvdz17eDohMSx5OiExfTpcImJvb2xlYW5cIj09PSQudHlwZShvLm92ZXJmbG93KSYmKG8ub3ZlcmZsb3c9e3g6ITEseTohMH0pLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8KG8ub3ZlcmxhcD0hMSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OXx8U3VwcG9ydC5tb2JpbGVUb3VjaCkmJihvLnRodW1ibmFpbD0hMSxvLnRodW1ibmFpbHM9ITEpLFwieW91dHViZVwiIT09ZSYmKG8ud2lkdGgmJiFvLm1heFdpZHRoJiYoby5tYXhXaWR0aD1vLndpZHRoKSxvLmhlaWdodCYmIW8ubWF4SGVpZ2h0JiYoby5tYXhIZWlnaHQ9by5oZWlnaHQpKSwhby50aHVtYm5haWwmJlwiYm9vbGVhblwiIT09JC50eXBlKG8udGh1bWJuYWlsKSl7dmFyIGE9ITE7c3dpdGNoKGUpe2Nhc2VcInlvdXR1YmVcIjphPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIrXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIit0LmlkK1wiLzAuanBnXCI7YnJlYWs7Y2FzZVwiaW1hZ2VcIjpjYXNlXCJ2aW1lb1wiOmE9ITB9by50aHVtYm5haWw9YX1yZXR1cm4gb319LE92ZXJsYXk9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy52aXNpYmxlPSExfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5XCIpLmhpZGUoKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItb3ZlcmxheS1iYWNrZ3JvdW5kXCIpKSx0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJmkudmlldyYmaS52aWV3Lm9wdGlvbnMub3ZlcmxheSYmIWkudmlldy5vcHRpb25zLm92ZXJsYXkuY2xvc2V8fFdpbmRvdy5oaWRlKCl9LHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1tb2JpbGUtdG91Y2hcIiksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnNraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIit0aGlzLnNraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJsYXktc2tpbi1cIitpKSx0aGlzLnNraW49aX0sYXR0YWNoOmZ1bmN0aW9uKCl7JChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmRldGFjaCgpfSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLmF0dGFjaCgpLHRoaXMubWF4KCk7dmFyIHQ9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9fSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKXt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlfHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dChzfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmRldGFjaCgpLHRoaXMudmlzaWJsZT0hMSxpJiZpKCl9LHRoaXMpKX1lbHNlIGkmJmkoKX0sZ2V0U2Nyb2xsRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiAkLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihpLGUpe3ZhciB0PWUuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKSxzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtuW2VdPShCcm93c2VyLklFP01hdGgubWF4KHNbXCJvZmZzZXRcIit0XSxzW1wic2Nyb2xsXCIrdF0pOkJyb3dzZXIuV2ViS2l0P2RvY3VtZW50LmJvZHlbXCJzY3JvbGxcIit0XTpzW1wic2Nyb2xsXCIrdF0pfHwwfSksbn0sbWF4OmZ1bmN0aW9uKCl7dmFyIGk7aWYoQnJvd3Nlci5Nb2JpbGVTYWZhcmkmJkJyb3dzZXIuV2ViS2l0JiZCcm93c2VyLldlYktpdDw1MzMuMTgmJihpPXRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLHRoaXMuZWxlbWVudC5jc3MoaSkpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OSl7dmFyIGU9Qm91bmRzLnZpZXdwb3J0KCk7dGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OmUuaGVpZ2h0LHdpZHRoOmUud2lkdGh9KX1TdXBwb3J0Lm1vYmlsZVRvdWNoJiYhaSYmdGhpcy5lbGVtZW50LmNzcyh7aGVpZ2h0OnRoaXMuZ2V0U2Nyb2xsRGltZW5zaW9ucygpLmhlaWdodH0pfX0sV2luZG93PXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXM9W10sdGhpcy5xdWV1ZXMuaGlkZT0kKHt9KSx0aGlzLnBhZ2VzPVtdLHRoaXMuX3RyYWNraW5nPVtdLHRoaXMuX2ZpcnN0PSEwLHRoaXMudGltZXJzPW5ldyBUaW1lcnMsdGhpcy5idWlsZCgpLHRoaXMuc2V0U2tpbihPcHRpb25zLmRlZmF1bHRzLnNraW4pfSxidWlsZDpmdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci13aW5kb3cgZnItbWVhc3VyZWRcIikuaGlkZSgpLmFwcGVuZCh0aGlzLl9ib3g9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItYm94XCIpLmFwcGVuZCh0aGlzLl9wYWdlcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlc1wiKSkpLmFwcGVuZCh0aGlzLl90aHVtYm5haWxzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHNcIikpLE92ZXJsYXkuaW5pdGlhbGl6ZSgpLFBhZ2VzLmluaXRpYWxpemUodGhpcy5fcGFnZXMpLFRodW1ibmFpbHMuaW5pdGlhbGl6ZSh0aGlzLl90aHVtYm5haWxzKSxTcGlubmVyLmluaXRpYWxpemUoKSxVSS5pbml0aWFsaXplKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnJcIisoU3VwcG9ydC5tb2JpbGVUb3VjaD9cIlwiOlwiLW5vXCIpK1wiLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0LnN2Zz9cIlwiOlwiLW5vXCIpK1wiLXN2Z1wiKSxCcm93c2VyLklFKWZvcih2YXIgaT03O2k8PTk7aSsrKUJyb3dzZXIuSUU8aSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbHRJRVwiK2kpO3RoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctc2tpbi1cIitpKSxPdmVybGF5LnNldFNraW4oaSksdGhpcy5fc2tpbj1pfSxzZXRTaG93aW5nVHlwZTpmdW5jdGlvbihpKXt0aGlzLl9zaG93aW5nVHlwZSE9PWkmJih0aGlzLl9zaG93aW5nVHlwZSYmKHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIit0aGlzLl9zaG93aW5nVHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMuX3Nob3dpbmdUeXBlKSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLXZpZGVvXCIpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtXCIraSksVHlwZS5pc1ZpZGVvKGkpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIiksdGhpcy5fc2hvd2luZ1R5cGU9aSl9LHN0YXJ0T2JzZXJ2aW5nUmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyfHwkKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbldpbmRvd1Jlc2l6ZSx0aGlzKSl9LHN0b3BPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXImJigkKHdpbmRvdykub2ZmKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcy5fb25XaW5kb3dSZXNpemVIYW5kbGVyKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXI9bnVsbCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMudGltZXJzLnNldChcInNjcm9sbFwiLCQucHJveHkodGhpcy5hZGp1c3RUb1Njcm9sbCx0aGlzKSwwKX0sX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dmFyIGk7KGk9UGFnZXMucGFnZSkmJihUaHVtYm5haWxzLmZpdFRvVmlld3BvcnQoKSx0aGlzLnVwZGF0ZUJveERpbWVuc2lvbnMoKSxpLmZpdFRvQm94KCksVUkudXBkYXRlKCksVUkuYWRqdXN0UHJldk5leHQobnVsbCwwKSxTcGlubmVyLmNlbnRlcigpLE92ZXJsYXkubWF4KCksVUkuX29uV2luZG93UmVzaXplKCksdGhpcy5fb25TY3JvbGwoKSl9LGFkanVzdFRvU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5lbGVtZW50LmNzcyh7dG9wOiQod2luZG93KS5zY3JvbGxUb3AoKX0pfSxnZXRCb3hEaW1lbnNpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JveERpbWVuc2lvbnN9LHVwZGF0ZUJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtpZihQYWdlcy5wYWdlKXt2YXIgaT1Cb3VuZHMudmlld3BvcnQoKSxlPVRodW1ibmFpbHMuZ2V0RGltZW5zaW9ucygpLHQ9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjt0aGlzLl9ib3hEaW1lbnNpb25zPXt3aWR0aDp0P2kud2lkdGg6aS53aWR0aC1lLndpZHRoLGhlaWdodDp0P2kuaGVpZ2h0LWUuaGVpZ2h0OmkuaGVpZ2h0fSx0aGlzLl9ib3hQb3NpdGlvbj17dG9wOjAsbGVmdDp0PzA6ZS53aWR0aH0sdGhpcy5fYm94LmNzcygkLmV4dGVuZCh7fSx0aGlzLl9ib3hEaW1lbnNpb25zLHRoaXMuX2JveFBvc2l0aW9uKSl9fSxzaG93OmZ1bmN0aW9uKGksZSl7aWYodGhpcy52aXNpYmxlKWkmJmkoKTtlbHNle3RoaXMudmlzaWJsZT0hMCx0aGlzLm9wZW5pbmc9ITAsdGhpcy5hdHRhY2goKSx0aGlzLnRpbWVycy5jbGVhcihcInNob3ctd2luZG93XCIpLHRoaXMudGltZXJzLmNsZWFyKFwiaGlkZS1vdmVybGF5XCIpLHRoaXMuYWRqdXN0VG9TY3JvbGwoKTt2YXIgdD0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpfHwwLHM9MjtPdmVybGF5W1BhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm92ZXJsYXk/XCJzaG93XCI6XCJoaWRlXCJdKGZ1bmN0aW9uKCl7aSYmLS1zPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwic2hvdy13aW5kb3dcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5vcGVuaW5nPSExLGkmJi0tczwxJiZpKCl9LHRoaXMpLHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCw1MCk6MSl9fSxfc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDEsaSl9LGhpZGU6ZnVuY3Rpb24oZSl7aWYodGhpcy52aWV3KXt2YXIgaT10aGlzLnF1ZXVlcy5oaWRlO2kucXVldWUoW10pLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIik7dmFyIHQ9UGFnZXMucGFnZT9QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlOjA7aS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1BhZ2VzLnN0b3AoKSxTcGlubmVyLmhpZGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7VUkuZGlzYWJsZSgpLFVJLmhpZGUobnVsbCx0KSxLZXlib2FyZC5kaXNhYmxlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTI7dGhpcy5faGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpLHRoaXMudGltZXJzLnNldChcImhpZGUtb3ZlcmxheVwiLCQucHJveHkoZnVuY3Rpb24oKXtPdmVybGF5LmhpZGUoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KX0sdGhpcyksMTx0P01hdGgubWluKC41KnQsMTUwKToxKSx0aGlzLl9maXJzdD0hMH0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9yZXNldCgpLHRoaXMuc3RvcE9ic2VydmluZ1Jlc2l6ZSgpLFBhZ2VzLnJlbW92ZUFsbCgpLFRodW1ibmFpbHMuY2xlYXIoKSx0aGlzLnRpbWVycy5jbGVhcigpLHRoaXMuX3Bvc2l0aW9uPS0xO3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmFmdGVySGlkZTtcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmUuY2FsbChGcmVzY28pLHRoaXMudmlldz1udWxsLHRoaXMub3BlbmluZz0hMSx0aGlzLmNsb3Npbmc9ITEsdGhpcy5kZXRhY2goKSxpKCl9LHRoaXMpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoZSkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtlKCksaSgpfSx0aGlzKSl9fSxfaGlkZTpmdW5jdGlvbihpLGUpe3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuaGlkZSl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQodCxpKX0sbG9hZDpmdW5jdGlvbihpLGUpe3RoaXMudmlld3M9aSx0aGlzLmF0dGFjaCgpLFRodW1ibmFpbHMubG9hZChpKSxQYWdlcy5sb2FkKGkpLHRoaXMuc3RhcnRPYnNlcnZpbmdSZXNpemUoKSxlJiZ0aGlzLnNldFBvc2l0aW9uKGUpfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihpLGUpe3RoaXMuX3Bvc2l0aW9uPWksdGhpcy52aWV3PXRoaXMudmlld3NbaS0xXSx0aGlzLnN0b3BIaWRlUXVldWUoKSx0aGlzLnBhZ2U9UGFnZXMuc2hvdyhpLCQucHJveHkoZnVuY3Rpb24oKXtlJiZlKCl9LHRoaXMpKX0sc3RvcEhpZGVRdWV1ZTpmdW5jdGlvbigpe3RoaXMucXVldWVzLmhpZGUucXVldWUoW10pfSxfcmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsVUkuaGlkZShudWxsLDApLFVJLnJlc2V0KCl9LG1heVByZXZpb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlldyYmdGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmdGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aHx8MSE9PXRoaXMuX3Bvc2l0aW9ufSxwcmV2aW91czpmdW5jdGlvbihpKXt2YXIgZT10aGlzLm1heVByZXZpb3VzKCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkucHJldmlvdXMpfSxtYXlOZXh0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy52aWV3cyYmMTx0aGlzLnZpZXdzLmxlbmd0aDtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZpfHxpJiYxIT09dGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5uZXh0fSxuZXh0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5TmV4dCgpOyhpfHxlKSYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHQpfSxnZXRTdXJyb3VuZGluZ0luZGV4ZXM6ZnVuY3Rpb24oKXtpZighdGhpcy52aWV3cylyZXR1cm57fTt2YXIgaT10aGlzLl9wb3NpdGlvbixlPXRoaXMudmlld3MubGVuZ3RoO3JldHVybntwcmV2aW91czppPD0xP2U6aS0xLG5leHQ6ZTw9aT8xOmkrMX19fSxLZXlib2FyZD17ZW5hYmxlZDohMSxrZXlDb2RlOntsZWZ0OjM3LHJpZ2h0OjM5LGVzYzoyN30sZW5hYmxlOmZ1bmN0aW9uKGkpe3RoaXMuZGlzYWJsZSgpLGkmJigkKGRvY3VtZW50KS5vbihcImtleWRvd25cIix0aGlzLl9vbktleURvd25IYW5kbGVyPSQucHJveHkodGhpcy5vbktleURvd24sdGhpcykpLm9uKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcj0kLnByb3h5KHRoaXMub25LZXlVcCx0aGlzKSksdGhpcy5lbmFibGVkPWkpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExLHRoaXMuX29uS2V5VXBIYW5kbGVyJiYoJChkb2N1bWVudCkub2ZmKFwia2V5dXBcIix0aGlzLl9vbktleVVwSGFuZGxlcikub2ZmKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXIpLHRoaXMuX29uS2V5VXBIYW5kbGVyPXRoaXMuX29uS2V5RG93bkhhbmRsZXI9bnVsbCl9LG9uS2V5RG93bjpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChpLnByZXZlbnREZWZhdWx0KCksaS5zdG9wUHJvcGFnYXRpb24oKSxlKXtjYXNlXCJsZWZ0XCI6V2luZG93LnByZXZpb3VzKCk7YnJlYWs7Y2FzZVwicmlnaHRcIjpXaW5kb3cubmV4dCgpfX19LG9uS2V5VXA6ZnVuY3Rpb24oaSl7aWYodGhpcy5lbmFibGVkKXt2YXIgZT10aGlzLmdldEtleUJ5S2V5Q29kZShpLmtleUNvZGUpO2lmKGUmJighZXx8IXRoaXMuZW5hYmxlZHx8dGhpcy5lbmFibGVkW2VdKSlzd2l0Y2goZSl7Y2FzZVwiZXNjXCI6V2luZG93LmhpZGUoKX19fSxnZXRLZXlCeUtleUNvZGU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlIGluIHRoaXMua2V5Q29kZSlpZih0aGlzLmtleUNvZGVbZV09PT1pKXJldHVybiBlO3JldHVybiBudWxsfX0sUGFnZT0oTGM9MCxNYz17fSxOYz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXRvcCBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1ib3R0b20gZnItc3Ryb2tlLWhvcml6b250YWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWxlZnQgZnItc3Ryb2tlLXZlcnRpY2FsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpKS5hZGQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlIGZyLXN0cm9rZS1yaWdodCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLCQuZXh0ZW5kKE9jLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbihpLGUsdCl7dGhpcy52aWV3PWksdGhpcy5kaW1lbnNpb25zPXt3aWR0aDowLGhlaWdodDowfSx0aGlzLnVpZD1MYysrLHRoaXMuX3Bvc2l0aW9uPWUsdGhpcy5fdG90YWw9dCx0aGlzLl9mdWxsQ2xpY2s9ITEsdGhpcy5fdmlzaWJsZT0hMSx0aGlzLnF1ZXVlcz17fSx0aGlzLnF1ZXVlcy5zaG93aGlkZT0kKHt9KX0sY3JlYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2NyZWF0ZWQpe1BhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wYWdlXCIpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250YWluZXJcIikpLmNzcyh7b3BhY2l0eTowfSkuaGlkZSgpKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5wb3NpdGlvbiYmMTx0aGlzLl90b3RhbDtpZihpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksKHRoaXMudmlldy5jYXB0aW9ufHxpKSYmKHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5pbmZvPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm9cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJih0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtcG9zaXRpb25cIiksdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLnBvcz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVyLmFwcGVuZCh0aGlzLmNhcHRpb249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmJhY2tncm91bmQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQodGhpcy5jb250ZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnRcIikpLFwiaW1hZ2VcIj09dGhpcy52aWV3LnR5cGUmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW1hZ2U9JChcIjxpbWc+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzp0aGlzLnZpZXcudXJsfSkpLHRoaXMuY29udGVudC5hcHBlbmQoTmMuY2xvbmUoITApKSksaSYmXCJvdXRzaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5wb3NpdGlvbk91dHNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSxcImluc2lkZVwiPT10aGlzLnZpZXcub3B0aW9ucy51aSl7dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnByZXZpb3VzSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5uZXh0SW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLmNsb3NlSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSwodGhpcy52aWV3LmNhcHRpb258fGkmJnRoaXMudmlldy5ncm91cGVkLmNhcHRpb24pJiYodGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmluZm9JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mbyBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tYmFja2dyb3VuZFwiKSkuYXBwZW5kKE5jLmNsb25lKCEwKSkuYXBwZW5kKHRoaXMuaW5mb1BhZGRlckluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvLXBhZGRlclwiKSkpLGkmJnRoaXMuaW5mb1BhZGRlckluc2lkZS5hcHBlbmQodGhpcy5wb3NJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb25cIikuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKSx0aGlzLnZpZXcuY2FwdGlvbiYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLmNhcHRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2FwdGlvblwiKS5odG1sKHRoaXMudmlldy5jYXB0aW9uKSkpLHRoaXMudmlldy5jYXB0aW9ufHwhaXx8dGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbnx8dGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLnBvc2l0aW9uSW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWluc2lkZSBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSk7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMubG9vcCYmMTx0aGlzLl90b3RhbHx8MSE9dGhpcy5fcG9zaXRpb24sdD10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHx0aGlzLl9wb3NpdGlvbjx0aGlzLl90b3RhbDt0aGlzLnByZXZpb3VzSW5zaWRlWyhlP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5uZXh0SW5zaWRlWyh0P1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIil9JC5lYWNoKFtcInhcIixcInlcIl0sJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMudmlldy5vcHRpb25zLm92ZXJmbG93W2VdJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVyZmxvdy1cIitlKX0sdGhpcykpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtXCIrdGhpcy52aWV3LnR5cGUpLFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXR5cGUtdmlkZW9cIiksdGhpcy5fdG90YWw8MiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tc2lkZXNcIiksdGhpcy5fY3JlYXRlZD0hMH19LF9nZXRTdXJyb3VuZGluZ1BhZ2VzOmZ1bmN0aW9uKCl7dmFyIGk7aWYoIShpPXRoaXMudmlldy5vcHRpb25zLnByZWxvYWQpKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PU1hdGgubWF4KDEsdGhpcy5fcG9zaXRpb24taVswXSkscz1NYXRoLm1pbih0aGlzLl9wb3NpdGlvbitpWzFdLHRoaXMuX3RvdGFsKSxuPXRoaXMuX3Bvc2l0aW9uLG89bjtvPD1zO28rKykoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKTtmb3Iobz1uO3Q8PW87by0tKXt2YXIgYTsoYT1QYWdlcy5wYWdlc1tvLTFdKS5fcG9zaXRpb24hPW4mJmUucHVzaChhKX1yZXR1cm4gZX0scHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5fZ2V0U3Vycm91bmRpbmdQYWdlcygpOyQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnByZWxvYWQoKX0sdGhpcykpfSxwcmVsb2FkOmZ1bmN0aW9uKCl7dGhpcy5wcmVsb2FkaW5nfHx0aGlzLnByZWxvYWRlZHx8XCJpbWFnZVwiIT10aGlzLnZpZXcudHlwZXx8IXRoaXMudmlldy5vcHRpb25zLnByZWxvYWR8fHRoaXMubG9hZGVkfHwodGhpcy5jcmVhdGUoKSx0aGlzLnByZWxvYWRpbmc9ITAsdGhpcy5wcmVsb2FkUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLHRoaXMucHJlbG9hZGluZz0hMSx0aGlzLnByZWxvYWRlZD0hMCx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH19LHRoaXMpLG51bGwse21ldGhvZDpcIm5hdHVyYWxXaWR0aFwifSkpfSxsb2FkOmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5jcmVhdGUoKSx0aGlzLmxvYWRlZCllJiZlKCk7ZWxzZSBzd2l0Y2godGhpcy5hYm9ydCgpLHRoaXMubG9hZGluZz0hMCx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyJiYodGhpcy5fc3Bpbm5lckRlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1NwaW5uZXIuc2hvdygpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApKSx0aGlzLnZpZXcudHlwZSl7Y2FzZVwiaW1hZ2VcIjppZih0aGlzLmVycm9yKXJldHVybiB2b2lkKGUmJmUoKSk7dGhpcy5pbWFnZVJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl9tYXJrQXNMb2FkZWQoKSx0aGlzLnNldERpbWVuc2lvbnMoe3dpZHRoOmkuaW1nLm5hdHVyYWxXaWR0aCxoZWlnaHQ6aS5pbWcubmF0dXJhbEhlaWdodH0pLGUmJmUoKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMuY29udGVudC5wcmVwZW5kKHRoaXMuZXJyb3I9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItZXJyb3IgZnItY29udGVudC1lbGVtZW50XCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvci1pY29uXCIpKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWVycm9yXCIpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy5lcnJvci5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZXJyb3Iub3V0ZXJIZWlnaHQoKX0pLHRoaXMuZXJyb3IuY3NzKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9KSxlJiZlKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSk7YnJlYWs7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvUmVhZHk9bmV3IFZpbWVvUmVhZHkodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5kaW1lbnNpb25zLndpZHRoLGhlaWdodDppLmRpbWVuc2lvbnMuaGVpZ2h0fSksZSYmZSgpfSx0aGlzKSk7YnJlYWs7Y2FzZVwieW91dHViZVwiOnRoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6dGhpcy52aWV3Lm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMudmlldy5vcHRpb25zLmhlaWdodH0pLGUmJmUoKX19LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oaSl7aWYodGhpcy5kaW1lbnNpb25zPWksdGhpcy52aWV3Lm9wdGlvbnMubWF4V2lkdGh8fHRoaXMudmlldy5vcHRpb25zLm1heEhlaWdodCl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMsdD17d2lkdGg6ZS5tYXhXaWR0aD9lLm1heFdpZHRoOnRoaXMuZGltZW5zaW9ucy53aWR0aCxoZWlnaHQ6ZS5tYXhIZWlnaHQ/ZS5tYXhIZWlnaHQ6dGhpcy5kaW1lbnNpb25zLmhlaWdodH07dGhpcy5kaW1lbnNpb25zPUZpdC53aXRoaW4odCx0aGlzLmRpbWVuc2lvbnMpfX0sX21hcmtBc0xvYWRlZDpmdW5jdGlvbigpe3RoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExLHRoaXMubG9hZGVkPSEwLE1jW3RoaXMudmlldy51cmxdPSEwLFNwaW5uZXIuaGlkZShudWxsLG51bGwsdGhpcy5fcG9zaXRpb24pfSxpc1ZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuIFR5cGUuaXNWaWRlbyh0aGlzLnZpZXcudHlwZSl9LGluc2VydFZpZGVvOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5pc1ZpZGVvKCkpe3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD0kLmV4dGVuZCh7fSx0aGlzLnZpZXcub3B0aW9uc1t0aGlzLnZpZXcudHlwZV18fHt9KSxzPSQucGFyYW0odCksbj17dmltZW86ZStcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby97aWR9P3txdWVyeVN0cmluZ31cIix5b3V0dWJlOmUrXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC97aWR9P3txdWVyeVN0cmluZ31cIn1bdGhpcy52aWV3LnR5cGVdLnJlcGxhY2UoXCJ7aWR9XCIsdGhpcy52aWV3Ll9kYXRhLmlkKS5yZXBsYWNlKFwie3F1ZXJ5U3RyaW5nfVwiLHMpO3RoaXMuY29udGVudC5wcmVwZW5kKHRoaXMucGxheWVySWZyYW1lPSQoXCI8aWZyYW1lIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuPlwiKS5hZGRDbGFzcyhcImZyLWNvbnRlbnQtZWxlbWVudFwiKS5hdHRyKHtzcmM6bixoZWlnaHQ6dGhpcy5fY29udGVudERpbWVuc2lvbnMuaGVpZ2h0LHdpZHRoOnRoaXMuX2NvbnRlbnREaW1lbnNpb25zLndpZHRoLGZyYW1lYm9yZGVyOjB9KSksaSYmaSgpfWVsc2UgaSYmaSgpfSxyYWlzZTpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLmVsZW1lbnRbMF0ubGFzdENoaWxkO2kmJmk9PT10aGlzLmVsZW1lbnRbMF18fFBhZ2VzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCl9LHNob3c6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcy5xdWV1ZXMuc2hvd2hpZGU7aS5xdWV1ZShbXSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJiFNY1t0aGlzLnZpZXcudXJsXTtTcGlubmVyLl92aXNpYmxlJiYhZSYmU3Bpbm5lci5oaWRlKCksUGFnZXMuc3RvcEluYWN0aXZlKCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMudXBkYXRlVUkoKSxVSS5zZXQodGhpcy5fdWkpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtLZXlib2FyZC5lbmFibGUodGhpcy52aWV3Lm9wdGlvbnMua2V5Ym9hcmQpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtTcGlubmVyLnNldFNraW4odGhpcy52aWV3Lm9wdGlvbnMuc2tpbiksdGhpcy5sb2FkKCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRTdXJyb3VuZGluZ0ltYWdlcygpLGkoKX0sdGhpcykpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMucmFpc2UoKSxXaW5kb3cuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSxVSS5lbmFibGUoKSx0aGlzLmZpdFRvQm94KCksV2luZG93LmFkanVzdFRvU2Nyb2xsKCksaSgpfSx0aGlzKSksdGhpcy5pc1ZpZGVvKCkmJmkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLmluc2VydFZpZGVvKCQucHJveHkoZnVuY3Rpb24oKXtpKCl9KSl9LHRoaXMpKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jfHxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuaGlkZUluYWN0aXZlKGkpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPTMsdD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuc2hvdztXaW5kb3cuc2V0U2hvd2luZ1R5cGUodGhpcy52aWV3LnR5cGUpLFdpbmRvdy52aXNpYmxlfHwodD10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93LFwiZnVuY3Rpb25cIj09PSQudHlwZSh0aGlzLnZpZXcub3B0aW9ucy5vblNob3cpJiZ0aGlzLnZpZXcub3B0aW9ucy5vblNob3cuY2FsbChGcmVzY28pKSx0aGlzLnZpZXcub3B0aW9ucy5zeW5jJiYoZSsrLFBhZ2VzLmhpZGVJbmFjdGl2ZShmdW5jdGlvbigpey0tZTwxJiZpKCl9KSksV2luZG93LnNob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KSx0aGlzLl9zaG93KGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksVUkuYWRqdXN0UHJldk5leHQoZnVuY3Rpb24oKXstLWU8MSYmaSgpfSxXaW5kb3cuX2ZpcnN0PzA6dCksV2luZG93Ll9maXJzdD8oVUkuc2hvdyhudWxsLDApLFdpbmRvdy5fZmlyc3Q9ITEpOlVJLnNob3cobnVsbCwwKTt2YXIgcz10aGlzLnZpZXcub3B0aW9ucy5hZnRlclBvc2l0aW9uO1wiZnVuY3Rpb25cIj09PSQudHlwZShzKSYmcy5jYWxsKEZyZXNjbyx0aGlzLl9wb3NpdGlvbil9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZT0hMCxlJiZlKCksaSgpfSx0aGlzKSl9LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9V2luZG93LnZpc2libGU/XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93OjA7dGhpcy5lbGVtZW50LnN0b3AoITApLnNob3coKS5mYWRlVG8odHx8MCwxLGkpfSxoaWRlOmZ1bmN0aW9uKGksZSl7aWYodGhpcy5lbGVtZW50KXt0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5hYm9ydCgpO3ZhciB0PVwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLmNvbnRlbnQuaGlkZTt0aGlzLmlzVmlkZW8oKSYmKHQ9MCksdGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyh0LDAsXCJmcmVzY29FYXNlSW5DdWJpY1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITEsUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuc2hvd2hpZGUucXVldWUoW10pLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnN0b3AoITApLHRoaXMuYWJvcnQoKX0scmVtb3ZlVmlkZW86ZnVuY3Rpb24oKXt0aGlzLnBsYXllcklmcmFtZSYmKHRoaXMucGxheWVySWZyYW1lWzBdLnNyYz1cIi8vYWJvdXQ6YmxhbmtcIix0aGlzLnBsYXllcklmcmFtZS5yZW1vdmUoKSx0aGlzLnBsYXllcklmcmFtZT1udWxsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5yZW1vdmVWaWRlbygpLHRoaXMuZWxlbWVudCYmdGhpcy5lbGVtZW50LnJlbW92ZSgpLHRoaXMuX3RyYWNrJiYoUGFnZXMucmVtb3ZlVHJhY2tpbmcodGhpcy5fcG9zaXRpb24pLHRoaXMuX3RyYWNrPSExKSx0aGlzLnByZWxvYWRSZWFkeSYmKHRoaXMucHJlbG9hZFJlYWR5LmFib3J0KCksdGhpcy5wcmVsb2FkUmVhZHk9bnVsbCx0aGlzLnByZWxvYWRpbmc9bnVsbCx0aGlzLnByZWxvYWRlZD1udWxsKSx0aGlzLl92aXNpYmxlPSExLHRoaXMucmVtb3ZlZD0hMH0sYWJvcnQ6ZnVuY3Rpb24oKXt0aGlzLmltYWdlUmVhZHkmJih0aGlzLmltYWdlUmVhZHkuYWJvcnQoKSx0aGlzLmltYWdlUmVhZHk9bnVsbCksdGhpcy52aW1lb1JlYWR5JiYodGhpcy52aW1lb1JlYWR5LmFib3J0KCksdGhpcy52aW1lb1JlYWR5PW51bGwpLHRoaXMuX2Fib3J0U3Bpbm5lckRlbGF5KCksdGhpcy5sb2FkaW5nPSExfSxfYWJvcnRTcGlubmVyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9zcGlubmVyRGVsYXkmJihjbGVhclRpbWVvdXQodGhpcy5fc3Bpbm5lckRlbGF5KSx0aGlzLl9zcGlubmVyRGVsYXk9bnVsbCl9LF9nZXRJbmZvSGVpZ2h0OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6Y2FzZVwiaW5zaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uJiYhZSlyZXR1cm4gMDticmVhaztjYXNlXCJvdXRzaWRlXCI6aWYoIXRoaXMudmlldy5jYXB0aW9uKXJldHVybiAwfXZhciB0PVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO1wib3V0c2lkZVwiPT09dGhpcy5fdWkmJihpPU1hdGgubWluKGksV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoKSk7dmFyIHMsbj10WzBdLnN0eWxlLndpZHRoO3JldHVyblwiaW5zaWRlXCIhPT10aGlzLl91aSYmXCJmdWxsY2xpY2tcIiE9PXRoaXMuX3VpfHwobj1cIjEwMCVcIiksdC5jc3Moe3dpZHRoOmkrXCJweFwifSkscz1wYXJzZUZsb2F0KHQub3V0ZXJIZWlnaHQoKSksdC5jc3Moe3dpZHRoOm59KSxzfSxfd2hpbGVWaXNpYmxlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9W10scz1XaW5kb3cuZWxlbWVudC5hZGQodGhpcy5lbGVtZW50KTtlJiYocz1zLmFkZChlKSksJC5lYWNoKHMsZnVuY3Rpb24oaSxlKXskKGUpLmlzKFwiOnZpc2libGVcIil8fHQucHVzaCgkKGUpLnNob3coKSl9KTt2YXIgbj10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpO3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dmFyIG89dGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZnItaGFzLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItaGFzLWNhcHRpb25cIiksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxpKCksV2luZG93LmVsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksbiYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItbm8tY2FwdGlvblwiKSxvfHx0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSwkLmVhY2godCxmdW5jdGlvbihpLGUpe2UuaGlkZSgpfSl9LHVwZGF0ZUZvcmNlZDpmdW5jdGlvbigpe3RoaXMuY3JlYXRlKCksdGhpcy5fZnVsbENsaWNrPXRoaXMudmlldy5vcHRpb25zLmZ1bGxDbGljayx0aGlzLl9ub092ZXJmbG93PSExLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi13aWR0aFwiKSkmJih0aGlzLl9mdWxsQ2xpY2s9ITApLDA8cGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1pbi1oZWlnaHRcIikpJiYodGhpcy5fbm9PdmVyZmxvdz0hMCl9LHVwZGF0ZVVJOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVGb3JjZWQoKTt2YXIgaT10aGlzLl9mdWxsQ2xpY2s/XCJmdWxsY2xpY2tcIjp0aGlzLnZpZXcub3B0aW9ucy51aTt0aGlzLl91aSYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdWktXCIrdGhpcy5fdWkpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLVwiK2kpLHRoaXMuX3VpPWl9LGZpdFRvQm94OmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt0aGlzLmVsZW1lbnQ7dmFyIHQ9JC5leHRlbmQoe30sV2luZG93LmdldEJveERpbWVuc2lvbnMoKSksaT0kLmV4dGVuZCh7fSx0aGlzLmRpbWVuc2lvbnMpLGU9dGhpcy5jb250YWluZXI7dGhpcy51cGRhdGVVSSgpO3ZhciBzPXtsZWZ0OnBhcnNlSW50KGUuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSx0b3A6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSl9O2lmKFwib3V0c2lkZVwiPT09dGhpcy5fdWkmJnRoaXMuX3Bvc2l0aW9uT3V0c2lkZSl7dmFyIG49MDt0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uT3V0c2lkZS5pcyhcIjp2aXNpYmxlXCIpJiYobj10aGlzLl9wb3NpdGlvbk91dHNpZGUub3V0ZXJXaWR0aCghMCkpfSx0aGlzKSksbj5zLmxlZnQmJihzLmxlZnQ9bil9dC53aWR0aC09MipzLmxlZnQsdC5oZWlnaHQtPTIqcy50b3A7dmFyIG8sYSxoPXt3aWR0aDohMCxoZWlnaHQ6ISF0aGlzLl9ub092ZXJmbG93fHwhdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueX0scj1GaXQud2l0aGluKHQsaSxoKSxkPSQuZXh0ZW5kKHt9LHIpLGw9KHRoaXMuY29udGVudCwwKSx1PVwiaW5zaWRlXCI9PT10aGlzLl91aSxjPXU/dGhpcy5pbmZvSW5zaWRlOnRoaXMuaW5mbyxwPXU/dGhpcy5jYXB0aW9uSW5zaWRlOnRoaXMuY2FwdGlvbixmPXU/dGhpcy5wb3NJbnNpZGU6dGhpcy5wb3MsbT0hIXA7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6dmFyIHY9JC5leHRlbmQoe30sZCk7dGhpcy5jYXB0aW9uJiYoYT10aGlzLmNhcHRpb24sdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPDI7KXtsPXRoaXMuX2dldEluZm9IZWlnaHQoZC53aWR0aCk7dmFyIGU9dC5oZWlnaHQtZC5oZWlnaHQ7ZTxsJiYoZD1GaXQud2l0aGluKHt3aWR0aDpkLndpZHRoLGhlaWdodDpNYXRoLm1heChkLmhlaWdodC0obC1lKSwwKX0sZCxoKSksaSsrfWw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSwoIXRoaXMudmlldy5vcHRpb25zLm92ZXJmbG93LnkmJmwrZC5oZWlnaHQ+dC5oZWlnaHR8fGMmJlwibm9uZVwiPT09Yy5jc3MoXCJkaXNwbGF5XCIpfHxsPj0uNSpkLmhlaWdodCkmJihtPSExLGw9MCxkPXYpfSx0aGlzKSxhKSksYyYmYy5jc3Moe3dpZHRoOmQud2lkdGgrXCJweFwifSksbz17d2lkdGg6ZC53aWR0aCxoZWlnaHQ6ZC5oZWlnaHQrbH07YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dGhpcy5jYXB0aW9uJiYoYT1wLHRoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7KGw9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKSk+PS40NSpkLmhlaWdodCYmKG09ITEsbD0wKX0sdGhpcyksYSkpLG89ZDticmVhaztjYXNlXCJmdWxsY2xpY2tcIjp2YXIgZz1bXTtwJiZnLnB1c2gocCksdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXtpZigocHx8ZikmJmMuY3NzKHt3aWR0aDpcIjEwMCVcIn0pLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLHAmJmw+LjUqdC5oZWlnaHQpaWYobT0hMSxmKXt2YXIgaT10aGlzLmNhcHRpb24uaXMoXCI6dmlzaWJsZVwiKTt0aGlzLmNhcHRpb24uaGlkZSgpLGw9dGhpcy5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpLGkmJnRoaXMuY2FwdGlvbi5zaG93KCl9ZWxzZSBsPTA7ZD1GaXQud2l0aGluKHt3aWR0aDp0LndpZHRoLGhlaWdodDpNYXRoLm1heCgwLHQuaGVpZ2h0LWwpfSxkLGgpLG89ZH0sdGhpcyksZyksdGhpcy5jb250ZW50LmNzcyh7XCJwYWRkaW5nLWJvdHRvbVwiOjB9KX1wJiZwW20/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5lbGVtZW50WyhtP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLW5vLWNhcHRpb25cIiksdGhpcy5lbGVtZW50WyhtP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhhcy1jYXB0aW9uXCIpLHRoaXMuY29udGVudC5jc3MoZCksdGhpcy5iYWNrZ3JvdW5kLmNzcyhvKSx0aGlzLnBsYXllcklmcmFtZSYmdGhpcy5wbGF5ZXJJZnJhbWUuYXR0cihkKSx0aGlzLm92ZXJsYXA9e3k6by5oZWlnaHQrKFwiZnVsbGNsaWNrXCI9PT10aGlzLl91aT9sOjApLVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQseDowfSx0aGlzLl90cmFjaz0hdGhpcy5fbm9PdmVyZmxvdyYmdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmMDx0aGlzLm92ZXJsYXAueSx0aGlzLl9pbmZvSGVpZ2h0PWwsdGhpcy5fcGFkZGluZz1zLHRoaXMuX2NvbnRlbnREaW1lbnNpb25zPWQsdGhpcy5fYmFja2dyb3VuZERpbWVuc2lvbnM9byxQYWdlc1sodGhpcy5fdHJhY2s/XCJzZXRcIjpcInJlbW92ZVwiKStcIlRyYWNraW5nXCJdKHRoaXMuX3Bvc2l0aW9uKSx0aGlzLnBvc2l0aW9uKCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXMuY29udGVudCl7dmFyIGk9dGhpcy5fY29udGVudERpbWVuc2lvbnMsZT10aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucyx0PXt0b3A6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSplLmhlaWdodCxsZWZ0Oi41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSplLndpZHRofSxzPXt0b3A6dC50b3AraS5oZWlnaHQsbGVmdDp0LmxlZnR9LG49MCxvPVwiaW5zaWRlXCI9PT10aGlzLl91aT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvO3N3aXRjaCh0aGlzLl91aSl7Y2FzZVwiZnVsbGNsaWNrXCI6dC50b3A9LjUqKFdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCktLjUqZS5oZWlnaHQscz17dG9wOldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtdGhpcy5faW5mb0hlaWdodCxsZWZ0OjAsYm90dG9tOlwiYXV0b1wifSxuPXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6cz17dG9wOlwiYXV0b1wiLGxlZnQ6MCxib3R0b206MH19aWYoMDx0aGlzLm92ZXJsYXAueSl7dmFyIGE9UGFnZXMuZ2V0WFlQKCk7c3dpdGNoKHQudG9wPTAtYS55KnRoaXMub3ZlcmxhcC55LHRoaXMuX3VpKXtjYXNlXCJvdXRzaWRlXCI6Y2FzZVwiZnVsbGNsaWNrXCI6cy50b3A9V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0O2JyZWFrO2Nhc2VcImluc2lkZVwiOnZhciBoPXQudG9wK2kuaGVpZ2h0LVdpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQscj0tMSp0LnRvcDtpZihzLmJvdHRvbT1oLHRoaXMuY2xvc2VJbnNpZGUuY3NzKHt0b3A6cn0pLDE8dGhpcy5fdG90YWwpe3ZhciBkPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7ZHx8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBsPXRoaXMucHJldmlvdXNJbnNpZGUuYXR0cihcInN0eWxlXCIpO3RoaXMucHJldmlvdXNJbnNpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciB1PXBhcnNlSW50KHRoaXMucHJldmlvdXNJbnNpZGUuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKHtzdHlsZTpsfSksZHx8V2luZG93LmVsZW1lbnQuaGlkZSgpO3ZhciBjPXRoaXMucHJldmlvdXNJbnNpZGUuYWRkKHRoaXMubmV4dEluc2lkZSkscD0uNSp0aGlzLm92ZXJsYXAueTtjLmNzcyh7XCJtYXJnaW4tdG9wXCI6dSsoci1wKX0pLHRoaXMucG9zaXRpb25JbnNpZGUmJnRoaXMucG9zaXRpb25JbnNpZGUuY3NzKHtib3R0b206aH0pfX19ZWxzZVwiaW5zaWRlXCI9PT10aGlzLl91aSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuZnItaW5mbywgLmZyLXNpZGUsIC5mci1jbG9zZSwgLmZyLXBvc2l0aW9uLWluc2lkZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7byYmby5jc3MocyksdGhpcy5jb250YWluZXIuY3NzKHtib3R0b206bn0pLHRoaXMuY29udGVudC5jc3ModCksdGhpcy5iYWNrZ3JvdW5kLmNzcyh0KX19fSksT2MpLExjLE1jLE5jO2Z1bmN0aW9uIE9jKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfXZhciBQYWdlcz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLnBhZ2VzPVtdLHRoaXMudWlkPTEsdGhpcy5fdHJhY2tpbmc9W119LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy52aWV3cz1pLHRoaXMucmVtb3ZlQWxsKCksJC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXMucGFnZXMucHVzaChuZXcgUGFnZShlLGkrMSx0aGlzLnZpZXdzLmxlbmd0aCkpfSx0aGlzKSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzLnBhZ2VzW2ktMV07dGhpcy5wYWdlJiZ0aGlzLnBhZ2UudWlkPT09dC51aWR8fCh0aGlzLnBhZ2U9dCxUaHVtYm5haWxzLnNob3coaSksV2luZG93LnVwZGF0ZUJveERpbWVuc2lvbnMoKSx0LnNob3coJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpKX0sZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cDpmdW5jdGlvbih0KXt2YXIgcz0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uudmlldy5lbGVtZW50JiZlLnZpZXcuZWxlbWVudD09PXQmJihzPWkrMSl9KSxzfSxnZXRMb2FkaW5nQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiAkLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UubG9hZGluZyYmdCsrfSksdH0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5wYWdlcz1bXX0saGlkZUluYWN0aXZlOmZ1bmN0aW9uKHQscyl7dmFyIG49W107JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmbi5wdXNoKGUpfSx0aGlzKSk7dmFyIG89MCtuLmxlbmd0aDtyZXR1cm4gbzwxP3QmJnQoKTokLmVhY2gobixmdW5jdGlvbihpLGUpe2UuaGlkZShmdW5jdGlvbigpe3QmJi0tbzwxJiZ0KCl9LHMpfSksbi5sZW5ndGh9LHN0b3BJbmFjdGl2ZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtlLnVpZCE9PXRoaXMucGFnZS51aWQmJmUuc3RvcCgpfSx0aGlzKSl9LHN0b3A6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2Uuc3RvcCgpfSl9LGhhbmRsZVRyYWNraW5nOmZ1bmN0aW9uKGkpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8OT8odGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCkpOnRoaXMuX3RyYWNraW5nX3RpbWVyPXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KSx0aGlzLnVwZGF0ZVBvc2l0aW9ucygpfSx0aGlzKSwzMCl9LGNsZWFyVHJhY2tpbmdUaW1lcjpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nX3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RyYWNraW5nX3RpbWVyKSx0aGlzLl90cmFja2luZ190aW1lcj1udWxsKX0sc3RhcnRUcmFja2luZzpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fHRoaXMuX2hhbmRsZVRyYWNraW5nfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZz0kLnByb3h5KHRoaXMuaGFuZGxlVHJhY2tpbmcsdGhpcykpfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXshU3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy5faGFuZGxlVHJhY2tpbmcmJigkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub2ZmKFwibW91c2Vtb3ZlXCIsdGhpcy5faGFuZGxlVHJhY2tpbmcpLHRoaXMuX2hhbmRsZVRyYWNraW5nPW51bGwsdGhpcy5jbGVhclRyYWNraW5nVGltZXIoKSl9LHNldFRyYWNraW5nOmZ1bmN0aW9uKGkpe3RoaXMuaXNUcmFja2luZyhpKXx8KHRoaXMuX3RyYWNraW5nLnB1c2godGhpcy5wYWdlc1tpLTFdKSwxPT09dGhpcy5fdHJhY2tpbmcubGVuZ3RoJiZ0aGlzLnN0YXJ0VHJhY2tpbmcoKSl9LGNsZWFyVHJhY2tpbmc6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZz1bXX0scmVtb3ZlVHJhY2tpbmc6ZnVuY3Rpb24oZSl7dGhpcy5fdHJhY2tpbmc9JC5ncmVwKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGkpe3JldHVybiBpLl9wb3NpdGlvbiE9PWV9KSx0aGlzLl90cmFja2luZy5sZW5ndGg8MSYmdGhpcy5zdG9wVHJhY2tpbmcoKX0saXNUcmFja2luZzpmdW5jdGlvbih0KXt2YXIgcz0hMTtyZXR1cm4gJC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7aWYoZS5fcG9zaXRpb249PT10KXJldHVybiEocz0hMCl9KSxzfSxzZXRYWTpmdW5jdGlvbihpKXt0aGlzLl94eT1pfSxnZXRYWVA6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlLHQ9JC5leHRlbmQoe30sV2luZG93Ll9ib3hEaW1lbnNpb25zKSxlPSQuZXh0ZW5kKHt9LHRoaXMuX3h5KTtlLnktPSQod2luZG93KS5zY3JvbGxUb3AoKSxpJiYoXCJvdXRzaWRlXCI9PT1pLl91aXx8XCJmdWxsY2xpY2tcIj09PWkuX3VpKSYmMDxpLl9pbmZvSGVpZ2h0JiYodC5oZWlnaHQtPWkuX2luZm9IZWlnaHQpLGUueS09V2luZG93Ll9ib3hQb3NpdGlvbi50b3A7dmFyIHM9e3g6MCx5Ok1hdGgubWluKE1hdGgubWF4KGUueS90LmhlaWdodCwwKSwxKX0sbj17eDpcIndpZHRoXCIseTpcImhlaWdodFwifSxvPXt9O3JldHVybiAkLmVhY2goXCJ5XCIuc3BsaXQoXCIgXCIpLCQucHJveHkoZnVuY3Rpb24oaSxlKXtvW2VdPU1hdGgubWluKE1hdGgubWF4KDIwL3RbbltlXV0sMCksMSksc1tlXSo9MSsyKm9bZV0sc1tlXS09b1tlXSxzW2VdPU1hdGgubWluKE1hdGgubWF4KHNbZV0sMCksMSl9LHRoaXMpKSx0aGlzLnNldFhZUChzKSx0aGlzLl94eXB9LHNldFhZUDpmdW5jdGlvbihpKXt0aGlzLl94eXA9aX0sdXBkYXRlUG9zaXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmcubGVuZ3RoPDF8fCQuZWFjaCh0aGlzLl90cmFja2luZyxmdW5jdGlvbihpLGUpe2UucG9zaXRpb24oKX0pfX07ZnVuY3Rpb24gVmlldygpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKG9iamVjdCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxkYXRhPXt9O2lmKFwic3RyaW5nXCI9PT0kLnR5cGUob2JqZWN0KSlvYmplY3Q9e3VybDpvYmplY3R9O2Vsc2UgaWYob2JqZWN0JiYxPT09b2JqZWN0Lm5vZGVUeXBlKXt2YXIgZWxlbWVudD0kKG9iamVjdCk7b2JqZWN0PXtlbGVtZW50OmVsZW1lbnRbMF0sdXJsOmVsZW1lbnQuYXR0cihcImhyZWZcIiksY2FwdGlvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1jYXB0aW9uXCIpLGdyb3VwOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWdyb3VwXCIpLGV4dGVuc2lvbjplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1leHRlbnNpb25cIiksdHlwZTplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby10eXBlXCIpLG9wdGlvbnM6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKSYmZXZhbChcIih7XCIrZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tb3B0aW9uc1wiKStcIn0pXCIpfHx7fX19cmV0dXJuIG9iamVjdCYmKG9iamVjdC5leHRlbnNpb258fChvYmplY3QuZXh0ZW5zaW9uPWRldGVjdEV4dGVuc2lvbihvYmplY3QudXJsKSksb2JqZWN0LnR5cGV8fChkYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCksb2JqZWN0Ll9kYXRhPWRhdGEsb2JqZWN0LnR5cGU9ZGF0YS50eXBlKSksb2JqZWN0Ll9kYXRhfHwob2JqZWN0Ll9kYXRhPWdldFVSSURhdGEob2JqZWN0LnVybCkpLG9iamVjdCYmb2JqZWN0Lm9wdGlvbnM/b2JqZWN0Lm9wdGlvbnM9JC5leHRlbmQoITAsJC5leHRlbmQoe30sb3B0aW9ucyksJC5leHRlbmQoe30sb2JqZWN0Lm9wdGlvbnMpKTpvYmplY3Qub3B0aW9ucz0kLmV4dGVuZCh7fSxvcHRpb25zKSxvYmplY3Qub3B0aW9ucz1PcHRpb25zLmNyZWF0ZShvYmplY3Qub3B0aW9ucyxvYmplY3QudHlwZSxvYmplY3QuX2RhdGEpLCQuZXh0ZW5kKHRoaXMsb2JqZWN0KSx0aGlzfX0pO3ZhciBTcGlubmVyPXtzdXBwb3J0ZWQ6U3VwcG9ydC5jc3MudHJhbnNmb3JtJiZTdXBwb3J0LmNzcy5hbmltYXRpb24saW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbm5lclwiKS5oaWRlKCk7Zm9yKHZhciBlPTE7ZTw9MTI7ZSsrKXRoaXMuZWxlbWVudC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Bpbi1cIitlKSk7dGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7V2luZG93LmhpZGUoKX0sdGhpcykpLHRoaXMuZWxlbWVudC5vbihcImZyZXNjbzptb3VzZXdoZWVsXCIsZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSl9LHNldFNraW46ZnVuY3Rpb24oaSl7dGhpcy5zdXBwb3J0ZWQmJih0aGlzLl9za2luJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIrdGhpcy5fc2tpbiksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItc3Bpbm5lci1za2luLVwiK2kpLHRoaXMuX3NraW49aSl9LHVwZGF0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9hdHRhY2hlZDtpfHx0aGlzLmF0dGFjaCgpLHRoaXMuX2RpbWVuc2lvbnM9e3dpZHRoOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksaGVpZ2h0OnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpfSxpfHx0aGlzLmRldGFjaCgpfSxhdHRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZHx8KCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuZWxlbWVudCksdGhpcy5fYXR0YWNoZWQ9ITApfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLl9hdHRhY2hlZCYmKHRoaXMuZWxlbWVudC5kZXRhY2goKSx0aGlzLl9hdHRhY2hlZD0hMSl9LHNob3c6ZnVuY3Rpb24oaSxlKXt0aGlzLl92aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5jZW50ZXIoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuc2hvd3x8MCxzPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6dCl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVUbyhzLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuX3Zpc2libGU9ITE7dmFyIHM9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5zcGlubmVyLmhpZGV8fDAsbj0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnMpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KG58fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksaSYmaSgpfSx0aGlzKSl9LGNlbnRlcjpmdW5jdGlvbigpe2lmKHRoaXMuc3VwcG9ydGVkKXt0aGlzLl9kaW1lbnNpb25zfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTt2YXIgaT1QYWdlcy5wYWdlLGU9MDtpJiZcImZ1bGxjbGlja1wiPT09aS5fdWkmJmkuX3doaWxlVmlzaWJsZShmdW5jdGlvbigpe2U9aS5fZ2V0SW5mb0hlaWdodChXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpfSksdGhpcy5lbGVtZW50LmNzcyh7dG9wOldpbmRvdy5fYm94UG9zaXRpb24udG9wKy41KldpbmRvdy5fYm94RGltZW5zaW9ucy5oZWlnaHQtLjUqdGhpcy5fZGltZW5zaW9ucy5oZWlnaHQtLjUqZSxsZWZ0OldpbmRvdy5fYm94UG9zaXRpb24ubGVmdCsuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgtLjUqdGhpcy5fZGltZW5zaW9ucy53aWR0aH0pfX19LF9GcmVzY289e19kaXNhYmxlZDohMSxfZmFsbGJhY2s6ITAsaW5pdGlhbGl6ZTpmdW5jdGlvbigpe1dpbmRvdy5pbml0aWFsaXplKCksdGhpcy5fZGlzYWJsZWR8fHRoaXMuc3RhcnREZWxlZ2F0aW5nKCl9LHN0YXJ0RGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlcnx8JChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5mcmVzY29baHJlZl1cIix0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9JC5wcm94eSh0aGlzLmRlbGVnYXRlLHRoaXMpKS5vbihcImNsaWNrXCIsdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9JC5wcm94eSh0aGlzLnNldENsaWNrWFksdGhpcykpfSxzdG9wRGVsZWdhdGluZzpmdW5jdGlvbigpe3RoaXMuX2RlbGVnYXRlSGFuZGxlciYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcikub2ZmKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlciksdGhpcy5fc2V0Q2xpY2tYWUhhbmRsZXI9bnVsbCx0aGlzLl9kZWxlZ2F0ZUhhbmRsZXI9bnVsbCl9LHNldENsaWNrWFk6ZnVuY3Rpb24oaSl7UGFnZXMuc2V0WFkoe3g6aS5wYWdlWCx5OmkucGFnZVl9KX0sZGVsZWdhdGU6ZnVuY3Rpb24oaSl7aWYoIXRoaXMuX2Rpc2FibGVkKXtpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKTt2YXIgZT1pLmN1cnJlbnRUYXJnZXQ7dGhpcy5zZXRDbGlja1hZKGkpLF9GcmVzY28uc2hvdyhlKX19LHNob3c6ZnVuY3Rpb24ob2JqZWN0KXtpZih0aGlzLl9kaXNhYmxlZCl0aGlzLnNob3dGYWxsYmFjay5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpO2Vsc2V7dmFyIG9wdGlvbnM9YXJndW1lbnRzWzFdfHx7fSxwb3NpdGlvbj1hcmd1bWVudHNbMl07YXJndW1lbnRzWzFdJiZcIm51bWJlclwiPT09JC50eXBlKGFyZ3VtZW50c1sxXSkmJihwb3NpdGlvbj1hcmd1bWVudHNbMV0sb3B0aW9ucz17fSk7dmFyIHZpZXdzPVtdLG9iamVjdF90eXBlLGlzRWxlbWVudD1fLmlzRWxlbWVudChvYmplY3QpO3N3aXRjaChvYmplY3RfdHlwZT0kLnR5cGUob2JqZWN0KSl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwib2JqZWN0XCI6dmFyIHZpZXc9bmV3IFZpZXcob2JqZWN0LG9wdGlvbnMpLF9kZ289XCJkYXRhLWZyZXNjby1ncm91cC1vcHRpb25zXCIsZ3JvdXBPcHRpb25zPXt9O2lmKHZpZXcuZ3JvdXApe2lmKGlzRWxlbWVudCl7dmFyIGVsZW1lbnRzPSQoJy5mcmVzY29bZGF0YS1mcmVzY28tZ3JvdXA9XCInKyQob2JqZWN0KS5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIikrJ1wiXScpO2VsZW1lbnRzLmZpbHRlcihcIltcIitfZGdvK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKGksZWxlbWVudCl7JC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKGVsZW1lbnQpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpfSksZWxlbWVudHMuZWFjaChmdW5jdGlvbihpLGUpe3Bvc2l0aW9ufHxlIT09b2JqZWN0fHwocG9zaXRpb249aSsxKSx2aWV3cy5wdXNoKG5ldyBWaWV3KGUsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSl9KX19ZWxzZSBpc0VsZW1lbnQmJiQob2JqZWN0KS5pcyhcIltcIitfZGdvK1wiXVwiKSYmKCQuZXh0ZW5kKGdyb3VwT3B0aW9ucyxldmFsKFwiKHtcIisoJChvYmplY3QpLmF0dHIoX2Rnbyl8fFwiXCIpK1wifSlcIikpLHZpZXc9bmV3IFZpZXcob2JqZWN0LCQuZXh0ZW5kKHt9LGdyb3VwT3B0aW9ucyxvcHRpb25zKSkpLHZpZXdzLnB1c2godmlldyk7YnJlYWs7Y2FzZVwiYXJyYXlcIjokLmVhY2gob2JqZWN0LGZ1bmN0aW9uKGksZSl7dmFyIHQ9bmV3IFZpZXcoZSxvcHRpb25zKTt2aWV3cy5wdXNoKHQpfSl9dmFyIGdyb3VwRXh0ZW5kPXtncm91cGVkOntjYXB0aW9uOiExfX0sZmlyc3RVST12aWV3c1swXS5vcHRpb25zLnVpLHBvc2l0aW9uSW5BUEc7JC5lYWNoKHZpZXdzLGZ1bmN0aW9uKGksZSl7ZS5jYXB0aW9uJiYoZ3JvdXBFeHRlbmQuZ3JvdXBlZC5jYXB0aW9uPSEwKSwwPGkmJmUub3B0aW9ucy51aSE9PWZpcnN0VUkmJihlLm9wdGlvbnMudWk9Zmlyc3RVSSl9KSwkLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlPSQuZXh0ZW5kKGUsZ3JvdXBFeHRlbmQpfSksKCFwb3NpdGlvbnx8cG9zaXRpb248MSkmJihwb3NpdGlvbj0xKSxwb3NpdGlvbj52aWV3cy5sZW5ndGgmJihwb3NpdGlvbj12aWV3cy5sZW5ndGgpLGlzRWxlbWVudCYmKHBvc2l0aW9uSW5BUEc9UGFnZXMuZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cChvYmplY3QpKT9XaW5kb3cuc2V0UG9zaXRpb24ocG9zaXRpb25JbkFQRyk6V2luZG93LmxvYWQodmlld3MscG9zaXRpb24pfX0sc2hvd0ZhbGxiYWNrOmZ1bmN0aW9uKGkpe2lmKHRoaXMuX2ZhbGxiYWNrKXt2YXIgZT1mdW5jdGlvbiBpKGUpe3ZhciB0PSQudHlwZShlKTtyZXR1cm5cInN0cmluZ1wiPT09dD9lOlwiYXJyYXlcIj09PXQmJmVbMF0/aShlWzBdKTpfLmlzRWxlbWVudChlKSYmJChlKS5hdHRyKFwiaHJlZlwiKT8kKGUpLmF0dHIoXCJocmVmXCIpOiEhZS51cmwmJmUudXJsfShpKTtlJiYod2luZG93LmxvY2F0aW9uLmhyZWY9ZSl9fX07JC5leHRlbmQoRnJlc2NvLHtzaG93OmZ1bmN0aW9uKGkpe3JldHVybiBfRnJlc2NvLnNob3cuYXBwbHkoX0ZyZXNjbyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdpbmRvdy5oaWRlKCksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBfRnJlc2NvLnN0b3BEZWxlZ2F0aW5nKCksX0ZyZXNjby5fZGlzYWJsZWQ9ITAsdGhpc30sZW5hYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uX2Rpc2FibGVkPSExLF9GcmVzY28uc3RhcnREZWxlZ2F0aW5nKCksdGhpc30sZmFsbGJhY2s6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uX2ZhbGxiYWNrPWksdGhpc30sc2V0RGVmYXVsdFNraW46ZnVuY3Rpb24oaSl7cmV0dXJuIE9wdGlvbnMuZGVmYXVsdHMuc2tpbj1pLHRoaXN9fSksKEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8N3x8XCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLkFuZHJvaWQpJiZCcm93c2VyLkFuZHJvaWQ8M3x8QnJvd3Nlci5Nb2JpbGVTYWZhcmkmJlwibnVtYmVyXCI9PT0kLnR5cGUoQnJvd3Nlci5XZWJLaXQpJiZCcm93c2VyLldlYktpdDw1MzMuMTgpJiYoX0ZyZXNjby5zaG93PV9GcmVzY28uc2hvd0ZhbGxiYWNrKTt2YXIgVGh1bWJuYWlscz17aW5pdGlhbGl6ZTpmdW5jdGlvbihpKXt0aGlzLmVsZW1lbnQ9aSx0aGlzLl90aHVtYm5haWxzPVtdLHRoaXMuX29yaWVudGF0aW9uPVwidmVydGljYWxcIix0aGlzLl92YXJzPXt0aHVtYm5haWw6e30sdGh1bWJuYWlsRnJhbWU6e30sdGh1bWJuYWlsczp7fX0sdGhpcy5idWlsZCgpLHRoaXMuc3RhcnRPYnNlcnZpbmcoKX0sYnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMud3JhcHBlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXdyYXBwZXJcIikuYXBwZW5kKHRoaXMuX3NsaWRlcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlclwiKS5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1wcmV2aW91c1wiKS5hcHBlbmQodGhpcy5fcHJldmlvdXNfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fdGh1bWJzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtdGh1bWJzXCIpLmFwcGVuZCh0aGlzLl9zbGlkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNsaWRlXCIpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlIGZyLXRodW1ibmFpbHMtc2lkZS1uZXh0XCIpLmFwcGVuZCh0aGlzLl9uZXh0X2J1dHRvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWljb25cIikpKSkpKX0sc3RhcnRPYnNlcnZpbmc6ZnVuY3Rpb24oKXt0aGlzLl9zbGlkZXIuZGVsZWdhdGUoXCIuZnItdGh1bWJuYWlsXCIsXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZT0kKGkudGFyZ2V0KS5jbG9zZXN0KFwiLmZyLXRodW1ibmFpbFwiKVswXSx0PWUmJiQoZSkuZGF0YShcImZyLXBvc2l0aW9uXCIpO3QmJih0aGlzLnNldEFjdGl2ZSh0KSxXaW5kb3cuc2V0UG9zaXRpb24odCkpfSx0aGlzKSksdGhpcy5fc2xpZGVyLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCl9KSx0aGlzLl9wcmV2aW91cy5iaW5kKFwiY2xpY2tcIiwkLnByb3h5KHRoaXMucHJldmlvdXNQYWdlLHRoaXMpKSx0aGlzLl9uZXh0LmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5uZXh0UGFnZSx0aGlzKSl9LGxvYWQ6ZnVuY3Rpb24oaSl7dGhpcy5jbGVhcigpO3ZhciB0PVwiaG9yaXpvbnRhbFwiLHM9ITE7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe1widmVydGljYWxcIj09PWUub3B0aW9ucy50aHVtYm5haWxzJiYodD1cInZlcnRpY2FsXCIpLGUub3B0aW9ucy50aHVtYm5haWxzfHwocz0hMCl9LHRoaXMpKSx0aGlzLnNldE9yaWVudGF0aW9uKHQpLHRoaXMuX2Rpc2FibGVkR3JvdXA9cywkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5fdGh1bWJuYWlscy5wdXNoKG5ldyBUaHVtYm5haWwoZSxpKzEpKX0sdGhpcykpLHRoaXMuZml0VG9WaWV3cG9ydCgpfSxjbGVhcjpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aHVtYm5haWxzLGZ1bmN0aW9uKGksZSl7ZS5yZW1vdmUoKX0pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fcG9zaXRpb249LTEsdGhpcy5fcGFnZT0tMX0sc2V0T3JpZW50YXRpb246ZnVuY3Rpb24oaSl7dGhpcy5fb3JpZW50YXRpb24mJldpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1cIit0aGlzLl9vcmllbnRhdGlvbiksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK2kpLHRoaXMuX29yaWVudGF0aW9uPWl9LGRpc2FibGU6ZnVuY3Rpb24oKXtXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZGlzYWJsZWRcIiksdGhpcy5fZGlzYWJsZWQ9ITB9LGVuYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtZW5hYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiF0aGlzLl9kaXNhYmxlZH0sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGlzYWJsZWR9LHVwZGF0ZVZhcnM6ZnVuY3Rpb24oKXt2YXIgaT1XaW5kb3cuZWxlbWVudCxlPXRoaXMuX3ZhcnMsdD1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLHM9dD9cInRvcFwiOlwibGVmdFwiLG49dD9cImxlZnRcIjpcInRvcFwiLG89dD9cImJvdHRvbVwiOlwibGVmdFwiLGE9dD9cInRvcFwiOlwicmlnaHRcIixoPXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIscj10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGQ9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLHRvcDpcImJvdHRvbVwiLGJvdHRvbTpcInRvcFwifTt0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpO3ZhciBsPWkuaXMoXCI6dmlzaWJsZVwiKTtpZihsfHxpLnNob3coKSx0aGlzLmRpc2FibGVkKCkmJnRoaXMuZW5hYmxlKCksIXRoaXMuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpfHx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDwyfHx0aGlzLl9kaXNhYmxlZEdyb3VwKXJldHVybiB0aGlzLmRpc2FibGUoKSwkLmV4dGVuZCh0aGlzLl92YXJzLnRodW1ibmFpbHMse3dpZHRoOjAsaGVpZ2h0OjB9KSxsfHxpLmhpZGUoKSx2b2lkIHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dGhpcy5lbmFibGUoKTt2YXIgdT10aGlzLl9wcmV2aW91cyxjPXRoaXMuX25leHQscD1Cb3VuZHMudmlld3BvcnQoKSxmPXRoaXMuZWxlbWVudFtcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShyKV0oKSxtPXBhcnNlSW50KHRoaXMuX3RodW1icy5jc3MoXCJwYWRkaW5nLVwiK3MpKXx8MCx2PU1hdGgubWF4KGYtMiptLDApLGc9cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrbikpfHwwLHc9KHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoXCJtYXJnaW4tXCIrbykpfHwwKSsocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIithKSl8fDApOyQuZXh0ZW5kKGUudGh1bWJuYWlscyx7aGVpZ2h0OmYrdyx3aWR0aDpwW3Q/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLHBhZGRpbmdUb3A6bX0pLCQuZXh0ZW5kKGUudGh1bWJuYWlsLHtoZWlnaHQ6dix3aWR0aDp2fSksJC5leHRlbmQoZS50aHVtYm5haWxGcmFtZSx7d2lkdGg6disyKmcsaGVpZ2h0OmZ9KSxlLnNpZGVzPXtwcmV2aW91czp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludCh1LmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9LG5leHQ6e3dpZHRoOmNbXCJpbm5lclwiK18uU3RyaW5nLmNhcGl0YWxpemUoaCldKCksbWFyZ2luTGVmdDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIituKSl8fDAsbWFyZ2luUmlnaHQ6cGFyc2VJbnQoYy5jc3MoXCJtYXJnaW4tXCIrZFtuXSkpfHwwfX07dmFyIGI9cFtoXSx5PWUudGh1bWJuYWlsRnJhbWUud2lkdGgseD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDtlLnRodW1ibmFpbHMud2lkdGg9YixlLnNpZGVzLmVuYWJsZWQ9MTx4KnkvYjt2YXIgaz1iLEM9ZS5zaWRlcyxTPUMucHJldmlvdXMsVz1DLm5leHQsTT1TLm1hcmdpbkxlZnQrUy53aWR0aCtTLm1hcmdpblJpZ2h0K1cubWFyZ2luTGVmdCtXLndpZHRoK1cubWFyZ2luUmlnaHQ7ZS5zaWRlcy5lbmFibGVkJiYoay09TSk7dmFyIFQ9eCp5O1Q8KGs9TWF0aC5mbG9vcihrL3kpKnkpJiYoaz1UKTt2YXIgST1rKyhlLnNpZGVzLmVuYWJsZWQ/TTowKTtlLmlwcD1NYXRoLnJvdW5kKGsveSksdGhpcy5fbW9kZT1cInBhZ2VcIixlLmlwcDw9MSYmKEk9az1iLGUuc2lkZXMuZW5hYmxlZD0hMSx0aGlzLl9tb2RlPVwiY2VudGVyXCIpLGUucGFnZXM9TWF0aC5jZWlsKHgqeS9rKSxlLndyYXBwZXI9e3dpZHRoOkkrMSxoZWlnaHQ6Zn0sZS50aHVtYnM9e3dpZHRoOmssaGVpZ2h0OmZ9LGUuc2xpZGU9e3dpZHRoOngqeSsxLGhlaWdodDpmfSxsfHxpLmhpZGUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLW1lYXN1cmVkXCIpfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlKCksdGhpcy50aHVtYm5haWxzLmhpZGUoKSx0aGlzLl92aXNpYmxlPSExfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjtyZXR1cm57d2lkdGg6aT90aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGg6dGhpcy5fdmFycy50aHVtYm5haWxzLmhlaWdodCxoZWlnaHQ6aT90aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0OnRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aH19LGZpdFRvVmlld3BvcnQ6ZnVuY3Rpb24oKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgaT0kLmV4dGVuZCh7fSx0aGlzLl92YXJzKSxlPVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb247JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlc2l6ZSgpfSksdGhpcy5fcHJldmlvdXNbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX25leHRbaS5zaWRlcy5lbmFibGVkP1wic2hvd1wiOlwiaGlkZVwiXSgpLHRoaXMuX3RodW1icy5jc3Moe3dpZHRoOmkudGh1bWJzW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnRodW1ic1tlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMuX3NsaWRlLmNzcyh7d2lkdGg6aS5zbGlkZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS5zbGlkZVtlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pO3ZhciB0PXt3aWR0aDppLndyYXBwZXJbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0Omkud3JhcHBlcltlP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX07dFtcIm1hcmdpbi1cIisoZT9cImxlZnRcIjpcInRvcFwiKV09TWF0aC5yb3VuZCgtLjUqaS53cmFwcGVyLndpZHRoKStcInB4XCIsdFtcIm1hcmdpbi1cIisoZT9cInRvcFwiOlwibGVmdFwiKV09MCx0aGlzLndyYXBwZXIuY3NzKHQpLHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLm1vdmVUbyh0aGlzLl9wb3NpdGlvbiwhMCl9fSxtb3ZlVG9QYWdlOmZ1bmN0aW9uKGkpe2lmKCEoaTwxfHxpPnRoaXMuX3ZhcnMucGFnZXN8fGk9PT10aGlzLl9wYWdlKSl7dmFyIGU9dGhpcy5fdmFycy5pcHAqKGktMSkrMTt0aGlzLm1vdmVUbyhlKX19LHByZXZpb3VzUGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlLTEpfSxuZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMubW92ZVRvUGFnZSh0aGlzLl9wYWdlKzEpfSxzaG93OmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMuX3Bvc2l0aW9uPDA7aTwxJiYoaT0xKTt2YXIgdD10aGlzLl90aHVtYm5haWxzLmxlbmd0aDt0PGkmJihpPXQpLHRoaXMuX3Bvc2l0aW9uPWksdGhpcy5zZXRBY3RpdmUoaSksXCJwYWdlXCI9PT10aGlzLl9tb2RlJiZ0aGlzLl9wYWdlPT09TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApfHx0aGlzLm1vdmVUbyhpLGUpfSxtb3ZlVG86ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnVwZGF0ZVZhcnMoKSwhdGhpcy5kaXNhYmxlZCgpKXt2YXIgdCxzLG49XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbixvPS41KkJvdW5kcy52aWV3cG9ydCgpW24/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGE9dGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aDtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe3M9TWF0aC5jZWlsKGkvdGhpcy5fdmFycy5pcHApLHRoaXMuX3BhZ2U9cyx0PWEqKHRoaXMuX3BhZ2UtMSkqdGhpcy5fdmFycy5pcHAqLTE7dmFyIGg9XCJmci10aHVtYm5haWxzLXNpZGUtYnV0dG9uLWRpc2FibGVkXCI7dGhpcy5fcHJldmlvdXNfYnV0dG9uWyhzPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpLHRoaXMuX25leHRfYnV0dG9uWyhzPj10aGlzLl92YXJzLnBhZ2VzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShoKX1lbHNlIHQ9bystMSooYSooaS0xKSsuNSphKTtzPVBhZ2VzLnBhZ2U7dmFyIHI9e30sZD17fTtyW24/XCJ0b3BcIjpcImxlZnRcIl09MCxkW24/XCJsZWZ0XCI6XCJ0b3BcIl09dCtcInB4XCIsdGhpcy5fc2xpZGUuc3RvcCghMCkuY3NzKHIpLmFuaW1hdGUoZCxlPzA6cyYmcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWxzLnNsaWRlfHwwLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmxvYWRDdXJyZW50UGFnZSgpfSx0aGlzKSl9fSxsb2FkQ3VycmVudFBhZ2U6ZnVuY3Rpb24oKXt2YXIgaSxlO2lmKHRoaXMuX3Bvc2l0aW9uJiZ0aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoJiYhKHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDEpKXtpZihcInBhZ2VcIj09PXRoaXMuX21vZGUpe2lmKHRoaXMuX3BhZ2U8MSlyZXR1cm47aT0odGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCsxLGU9TWF0aC5taW4oaS0xK3RoaXMuX3ZhcnMuaXBwLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1lbHNle3ZhciB0PU1hdGguY2VpbCh0aGlzLl92YXJzLnRodW1ibmFpbHMud2lkdGgvdGhpcy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCk7aT1NYXRoLm1heChNYXRoLmZsb29yKE1hdGgubWF4KHRoaXMuX3Bvc2l0aW9uLS41KnQsMCkpLDEpLGU9TWF0aC5jZWlsKE1hdGgubWluKHRoaXMuX3Bvc2l0aW9uKy41KnQpKSx0aGlzLl90aHVtYm5haWxzLmxlbmd0aDxlJiYoZT10aGlzLl90aHVtYm5haWxzLmxlbmd0aCl9Zm9yKHZhciBzPWk7czw9ZTtzKyspdGhpcy5fdGh1bWJuYWlsc1tzLTFdLmxvYWQoKX19LHNldEFjdGl2ZTpmdW5jdGlvbihpKXt0aGlzLl9zbGlkZS5maW5kKFwiLmZyLXRodW1ibmFpbC1hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpO3ZhciBlPWkmJnRoaXMuX3RodW1ibmFpbHNbaS0xXTtlJiZlLmFjdGl2YXRlKCl9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLl9wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbil9fTtmdW5jdGlvbiBUaHVtYm5haWwoKXt0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX0kLmV4dGVuZChUaHVtYm5haWwucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3PWksdGhpcy5fcG9zaXRpb249ZSx0aGlzLnByZUJ1aWxkKCl9LHByZUJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWw9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsXCIpLmRhdGEoXCJmci1wb3NpdGlvblwiLHRoaXMuX3Bvc2l0aW9uKX0sYnVpbGQ6ZnVuY3Rpb24oKXtpZighdGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnM7VGh1bWJuYWlscy5fc2xpZGUuYXBwZW5kKHRoaXMudGh1bWJuYWlsRnJhbWU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWZyYW1lXCIpLmFwcGVuZCh0aGlzLnRodW1ibmFpbC5hcHBlbmQodGhpcy50aHVtYm5haWxXcmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC13cmFwcGVyXCIpKSkpLFwiaW1hZ2VcIj09PXRoaXMudmlldy50eXBlJiZ0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLWxvYWQtdGh1bWJuYWlsXCIpLmRhdGEoXCJ0aHVtYm5haWxcIix7dmlldzp0aGlzLnZpZXcsc3JjOmkudGh1bWJuYWlsfHx0aGlzLnZpZXcudXJsfSk7dmFyIGU9aS50aHVtYm5haWwmJmkudGh1bWJuYWlsLmljb247ZSYmdGhpcy50aHVtYm5haWwuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pY29uIGZyLXRodW1ibmFpbC1pY29uLVwiK2UpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmxvYWRpbmc9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmdcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1sb2FkaW5nLWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLnNwaW5uZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXNwaW5uZXJcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lci1zcGluXCIpKSkpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheS1ib3JkZXJcIikpKSx0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXN0YXRlXCIpKSx0aGlzLnJlc2l6ZSgpfX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWxGcmFtZSYmKHRoaXMudGh1bWJuYWlsRnJhbWUucmVtb3ZlKCksdGhpcy50aHVtYm5haWxGcmFtZT1udWxsLHRoaXMuaW1hZ2U9bnVsbCksdGhpcy5yZWFkeSYmKHRoaXMucmVhZHkuYWJvcnQoKSx0aGlzLnJlYWR5PW51bGwpLHRoaXMudmltZW9UaHVtYm5haWwmJih0aGlzLnZpbWVvVGh1bWJuYWlsLmFib3J0KCksdGhpcy52aW1lb1RodW1ibmFpbD1udWxsKSx0aGlzLl9sb2FkaW5nPSExLHRoaXMuX3JlbW92ZWQ9ITAsdGhpcy52aWV3PW51bGwsdGhpcy5fY2xlYXJEZWxheSgpfSxsb2FkOmZ1bmN0aW9uKCl7aWYoISh0aGlzLl9sb2FkZWR8fHRoaXMuX2xvYWRpbmd8fHRoaXMuX3JlbW92ZWQpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXJ8fHRoaXMuYnVpbGQoKSx0aGlzLl9sb2FkaW5nPSEwO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnRodW1ibmFpbCxlPWkmJlwiYm9vbGVhblwiPT09JC50eXBlKGkpP3RoaXMudmlldy51cmw6aXx8dGhpcy52aWV3LnVybDtpZih0aGlzLl91cmw9ZSlpZihcInZpbWVvXCI9PT10aGlzLnZpZXcudHlwZSlpZihlPT09aSl0aGlzLl91cmw9ZSx0aGlzLl9sb2FkKHRoaXMuX3VybCk7ZWxzZSBzd2l0Y2godGhpcy52aWV3LnR5cGUpe2Nhc2VcInZpbWVvXCI6dGhpcy52aW1lb1RodW1ibmFpbD1uZXcgVmltZW9UaHVtYm5haWwodGhpcy52aWV3LnVybCwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3VybD1pLHRoaXMuX2xvYWQoaSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSl9ZWxzZSB0aGlzLl9sb2FkKHRoaXMuX3VybCl9fSxhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWFjdGl2ZVwiKX0sX2xvYWQ6ZnVuY3Rpb24oaSl7dGhpcy50aHVtYm5haWxXcmFwcGVyLnByZXBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtaW1hZ2VcIikuYXR0cih7c3JjOml9KS5jc3Moe29wYWNpdHk6MWUtNH0pKSx0aGlzLmZhZGVJblNwaW5uZXIoKSx0aGlzLnJlYWR5PW5ldyBJbWFnZVJlYWR5KHRoaXMuaW1hZ2VbMF0sJC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLmltZzt0aGlzLnRodW1ibmFpbEZyYW1lJiZ0aGlzLl9sb2FkaW5nJiYodGhpcy5fbG9hZGVkPSEwLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6ZS5uYXR1cmFsV2lkdGgsaGVpZ2h0OmUubmF0dXJhbEhlaWdodH0sdGhpcy5yZXNpemUoKSx0aGlzLnNob3coKSl9LHRoaXMpLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9lcnJvcigpfSx0aGlzKSx7bWV0aG9kOnRoaXMudmlldy5vcHRpb25zLmxvYWRlZE1ldGhvZH0pfSxfZXJyb3I6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLnRodW1ibmFpbC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1lcnJvclwiKSx0aGlzLmltYWdlJiZ0aGlzLmltYWdlLmhpZGUoKSx0aGlzLnRodW1ibmFpbFdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKSksdGhpcy5zaG93KCl9LGZhZGVJblNwaW5uZXI6ZnVuY3Rpb24oKXtpZihTcGlubmVyLnN1cHBvcnRlZCYmdGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lcil7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuc3Bpbm5lci5zdG9wKCEwKS5mYWRlVG8oaS5zaG93fHwwLDEpfSx0aGlzKSx0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyRGVsYXl8fDApfX0sc2hvdzpmdW5jdGlvbigpe3RoaXMuX2NsZWFyRGVsYXkoKTt2YXIgaT10aGlzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbDt0aGlzLmxvYWRpbmcuc3RvcCghMCkuZGVsYXkoaS5kZWxheSkuZmFkZVRvKGkuc2hvdywwKX0sX2NsZWFyRGVsYXk6ZnVuY3Rpb24oKXt0aGlzLl9kZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9bnVsbCl9LHJlc2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMudGh1bWJuYWlsRnJhbWUpe3ZhciBpPVwiaG9yaXpvbnRhbFwiPT09VGh1bWJuYWlscy5fb3JpZW50YXRpb247aWYodGhpcy50aHVtYm5haWxGcmFtZS5jc3Moe3dpZHRoOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWVbaT9cImhlaWdodFwiOlwid2lkdGhcIl19KSx0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7dG9wOmk/MDpUaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKSxsZWZ0Omk/VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZS53aWR0aCoodGhpcy5fcG9zaXRpb24tMSk6MH0pLHRoaXMudGh1bWJuYWlsV3JhcHBlcil7dmFyIGU9VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWw7aWYodGhpcy50aHVtYm5haWwuY3NzKHt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxcIm1hcmdpbi10b3BcIjpNYXRoLnJvdW5kKC0uNSplLmhlaWdodCksXCJtYXJnaW4tbGVmdFwiOk1hdGgucm91bmQoLS41KmUud2lkdGgpLFwibWFyZ2luLWJvdHRvbVwiOjAsXCJtYXJnaW4tcmlnaHRcIjowfSksdGhpcy5fZGltZW5zaW9ucyl7dmFyIHQscz17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LG49TWF0aC5tYXgocy53aWR0aCxzLmhlaWdodCksbz0kLmV4dGVuZCh7fSx0aGlzLl9kaW1lbnNpb25zKTtpZihvLndpZHRoPnMud2lkdGgmJm8uaGVpZ2h0PnMuaGVpZ2h0KXt2YXIgYT0xLGg9MTsodD1GaXQud2l0aGluKHMsbykpLndpZHRoPHMud2lkdGgmJihhPXMud2lkdGgvdC53aWR0aCksdC5oZWlnaHQ8cy5oZWlnaHQmJihoPXMuaGVpZ2h0L3QuaGVpZ2h0KTt2YXIgcj1NYXRoLm1heChhLGgpOzE8ciYmKHQud2lkdGgqPXIsdC5oZWlnaHQqPXIpLCQuZWFjaChcIndpZHRoIGhlaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihpLGUpe3RbZV09TWF0aC5yb3VuZCh0W2VdKX0pfWVsc2UgdD1GaXQud2l0aGluKHRoaXMuX2RpbWVuc2lvbnMsby53aWR0aDxzLndpZHRofHxvLmhlaWdodDxzLmhlaWdodD97d2lkdGg6bixoZWlnaHQ6bn06cyk7dmFyIGQ9TWF0aC5yb3VuZCguNSpzLndpZHRoLS41KnQud2lkdGgpLGw9TWF0aC5yb3VuZCguNSpzLmhlaWdodC0uNSp0LmhlaWdodCk7dGhpcy5pbWFnZS5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKCQuZXh0ZW5kKHt9LHQse3RvcDpsLGxlZnQ6ZH0pKX19fX19KTt2YXIgVUk9e19tb2RlczpbXCJmdWxsY2xpY2tcIixcIm91dHNpZGVcIixcImluc2lkZVwiXSxfdWk6ITEsX3ZhbGlkQ2xpY2tUYXJnZXRTZWxlY3RvcjpbXCIuZnItY29udGVudC1lbGVtZW50XCIsXCIuZnItY29udGVudFwiLFwiLmZyLWNvbnRlbnQgPiAuZnItc3Ryb2tlXCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2UgLmZyLXN0cm9rZS1jb2xvclwiXS5qb2luKFwiLCBcIiksaW5pdGlhbGl6ZTpmdW5jdGlvbihpKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe3RoaXNbZV0uaW5pdGlhbGl6ZSgpfSx0aGlzKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci11aS1pbnNpZGUtaGlkZGVuIGZyLXVpLWZ1bGxjbGljay1oaWRkZW5cIil9LHNldDpmdW5jdGlvbihpKXt0aGlzLl91aSYmKFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItd2luZG93LXVpLVwiK3RoaXMuX3VpKSxPdmVybGF5LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK3RoaXMuX3VpKSksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci13aW5kb3ctdWktXCIraSksT3ZlcmxheS5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS11aS1cIitpKSx0aGlzLl9lbmFibGVkJiZ0aGlzLl91aSYmdGhpcy5fdWkhPT1pJiYodGhpc1t0aGlzLl91aV0uZGlzYWJsZSgpLHRoaXNbaV0uZW5hYmxlKCksVUlbaV0uc2hvdygpKSx0aGlzLl91aT1pfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLnNob3coKX0sZW5hYmxlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX21vZGVzLCQucHJveHkoZnVuY3Rpb24oaSxlKXtVSVtlXVtlPT09dGhpcy5fdWk/XCJlbmFibGVcIjpcImRpc2FibGVcIl0oKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITB9LGRpc2FibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLmRpc2FibGUoKX0sdGhpcykpLHRoaXMuX2VuYWJsZWQ9ITF9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmFkanVzdFByZXZOZXh0KGksZSl9LHNob3c6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uc2hvdyhpLGUpfSxoaWRlOmZ1bmN0aW9uKGksZSl7VUlbdGhpcy5fdWldLmhpZGUoaSxlKX0scmVzZXQ6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdLnJlc2V0KCl9LHRoaXMpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMucGFnZTtpJiZ0aGlzLnNldChpLl91aSl9fTtyZXR1cm4gVUkuZnVsbGNsaWNrPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5idWlsZCgpLHRoaXMuX3Njcm9sbExlZnQ9LTF9LGJ1aWxkOmZ1bmN0aW9uKCl7V2luZG93Ll9ib3guYXBwZW5kKHRoaXMuX3ByZXZpb3VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1wcmV2aW91cyBmci1zaWRlLXByZXZpb3VzLWZ1bGxjbGljayBmci10b2dnbGUtdWlcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtbmV4dCBmci1zaWRlLW5leHQtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9jbG9zZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZSBmci1jbG9zZS1mdWxsY2xpY2tcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5yZXNldFByZXZOZXh0KCksdGhpcy5fb25Nb3VzZUxlYXZlKCl9LHJlc2V0UHJldk5leHQ6ZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuc3RvcCghMCkucmVtb3ZlQXR0cihcInN0eWxlXCIpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZVVwLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyPSQucHJveHkodGhpcy5oaWRlLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLHRoaXMuX2hpZGVIYW5kbGVyKS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXIpLm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250YWluZXJcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz1XaW5kb3cuZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpO3N8fFdpbmRvdy5lbGVtZW50LnNob3coKTt2YXIgbj10aGlzLl9wcmV2aW91cy5hdHRyKFwic3R5bGVcIik7dGhpcy5fcHJldmlvdXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO3ZhciBvPXBhcnNlSW50KHRoaXMuX3ByZXZpb3VzLmNzcyhcIm1hcmdpbi10b3BcIikpO3RoaXMuX3ByZXZpb3VzLmF0dHIoe3N0eWxlOm59KSxzfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGE9dC5faW5mb0hlaWdodHx8MCxoPXRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KSxyPXtcIm1hcmdpbi10b3BcIjpvLS41KmF9LGQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOlBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93fHwwO3RoaXMub3BlbmluZyYmKGQ9MCksaC5zdG9wKCEwKS5hbmltYXRlKHIsZCxpKSx0aGlzLl9wcmV2aW91c1soV2luZG93Lm1heVByZXZpb3VzKCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLl9uZXh0WyhXaW5kb3cubWF5TmV4dCgpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksaFsodC5fdG90YWw8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWhpZGRlblwiKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LF9vblNjcm9sbDpmdW5jdGlvbigpe3RoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKX0sX29uTW91c2VNb3ZlOmZ1bmN0aW9uKGkpe2lmKCFTdXBwb3J0Lm1vYmlsZVRvdWNoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdD1fLlN0cmluZy5jYXBpdGFsaXplKGUpLHM9ISFlJiZXaW5kb3dbXCJtYXlcIit0XSgpO2lmKGUhPT10aGlzLl9ob3ZlcmluZ1NpZGV8fHMhPT10aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZSlzd2l0Y2godGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9fX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkpaWYoMSE9PVBhZ2VzLnBhZ2VzLmxlbmd0aCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpO1dpbmRvd1tlXSgpLHRoaXMuX29uTW91c2VNb3ZlKGkpfWVsc2UgV2luZG93LmhpZGUoKX0sX29uTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9vbk1vdXNlTW92ZShpKX0sX2dldEV2ZW50U2lkZTpmdW5jdGlvbihpKXstMTx0aGlzLl9zY3JvbGxMZWZ0P3RoaXMuX3Njcm9sbExlZnQ6dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpO3JldHVybiBpLnBhZ2VYLVdpbmRvdy5fYm94UG9zaXRpb24ubGVmdC10aGlzLl9zY3JvbGxMZWZ0PC41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9LF9vblNpZGVNb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMCx0aGlzLl9ob3ZlcmluZ1NpZGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPVdpbmRvd1tcIm1heVwiK18uU3RyaW5nLmNhcGl0YWxpemUodGhpcy5faG92ZXJpbmdTaWRlKV0oKSx0aGlzLmNsZWFyVGltZXIoKX0sX29uU2lkZU1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSExLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT0hMSx0aGlzLnN0YXJ0VGltZXIoKX0sc2hvdzpmdW5jdGlvbihpKXtpZih0aGlzLl92aXNpYmxlKXJldHVybiB0aGlzLnN0YXJ0VGltZXIoKSx2b2lkKFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpKTt0aGlzLl92aXNpYmxlPSEwLHRoaXMuc3RhcnRUaW1lcigpLFdpbmRvdy5lbGVtZW50LmFkZENsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikucmVtb3ZlQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpLEJyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcudHlwZTt0aGlzLl92aXNpYmxlJiYoIWV8fFwieW91dHViZVwiIT09ZSYmXCJ2aW1lb1wiIT09ZSkmJih0aGlzLl92aXNpYmxlPSExLFdpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdmlzaWJsZS1mdWxsY2xpY2stdWlcIikuYWRkQ2xhc3MoXCJmci1oaWRkZW4tZnVsbGNsaWNrLXVpXCIpKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0sY2xlYXJUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fFdpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1mdWxsY2xpY2tcIil9LHN0YXJ0VGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHwodGhpcy5jbGVhclRpbWVyKCksV2luZG93LnRpbWVycy5zZXQoXCJ1aS1mdWxsY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCl9LHRoaXMpLFdpbmRvdy52aWV3P1dpbmRvdy52aWV3Lm9wdGlvbnMudWlEZWxheTowKSl9fSxVSS5pbnNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuYmluZCgpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmQoKX0sYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXJ8fCh0aGlzLnVuYmluZCgpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCksV2luZG93LmhpZGUoKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLXByZXZpb3VzXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLm9uKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcImNsaWNrXCIsXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiLHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlcj0kLnByb3h5KHRoaXMuX2RlbGVnYXRlT3ZlcmxheUNsb3NlLHRoaXMpKSxTdXBwb3J0Lm1vYmlsZVRvdWNofHwoV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX3Nob3dIYW5kbGVyPSQucHJveHkodGhpcy5zaG93LHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXI9JC5wcm94eShmdW5jdGlvbihpKXt2YXIgZT1pLnBhZ2VYLHQ9aS5wYWdlWTt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b258fHQ9PT10aGlzLl95JiZlPT09dGhpcy5feHx8KHRoaXMuX3g9ZSx0aGlzLl95PXQsdGhpcy5zaG93KCksdGhpcy5zdGFydFRpbWVyKCkpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLl9vbk1vdXNlTGVhdmUoaSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmNsZWFyVGltZXIoKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLFdpbmRvdy5fcGFnZXMub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1jbG9zZVwiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIikub2ZmKFwiY2xpY2tcIixcIi5mci1jb250ZW50IC5mci1zaWRlLW5leHRcIiksV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlciYmKFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9tb3VzZW1vdmVIYW5kbGVyKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm8sIC5mci1jbG9zZVwiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWluZm9cIiksV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50LWVsZW1lbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9zaG93SGFuZGxlcj1udWxsKSl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGkpe2kmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIiksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGhpZGU6ZnVuY3Rpb24oaSl7dGhpcy5fdmlzaWJsZSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWluc2lkZS11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1pbnNpZGUtdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWluc2lkZVwiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWluc2lkZVwiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLm91dHNpZGU9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1pY29uXCIpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuaGlkZSgpLHRoaXMuX2Nsb3NlLm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5fcHJldmlvdXMub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93LnByZXZpb3VzKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKSx0aGlzLl9uZXh0Lm9uKFwiY2xpY2tcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5uZXh0KCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9LHRoaXMpKX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxyZXNldDpmdW5jdGlvbigpe1dpbmRvdy50aW1lcnMuY2xlYXIoXCJ1aS1vdXRzaWRlXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX29uTW91c2VMZWF2ZSgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VNb3ZlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VMZWF2ZSx0aGlzKSkub24oXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93LmVsZW1lbnQub2ZmKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXImJihXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyKSwkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyKSx0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9bnVsbCkpfSxhZGp1c3RQcmV2TmV4dDpmdW5jdGlvbihpLGUpe3ZhciB0PVBhZ2VzLnBhZ2U7aWYodCl7dmFyIHM9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpO3RoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxzWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfZGVsZWdhdGVPdmVybGF5Q2xvc2U6ZnVuY3Rpb24oaSl7dmFyIGU9UGFnZXMucGFnZTtlJiZlLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhZS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8JChpLnRhcmdldCkuaXMoXCIuZnItY29udGFpbmVyLCAuZnItdGh1bWJuYWlscywgLmZyLXRodW1ibmFpbHMtd3JhcHBlclwiKSYmKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLFdpbmRvdy5oaWRlKCkpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spJiYoZT0hMSksZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKWlmKHRoaXMuX2hvdmVyaW5nU2lkZT1lLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPXMsZSlzd2l0Y2goV2luZG93Ll9ib3hbKHM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaG92ZXJpbmctY2xpY2thYmxlXCIpLGUpe2Nhc2VcInByZXZpb3VzXCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIik7YnJlYWs7Y2FzZVwibmV4dFwiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKS5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpfWVsc2UgV2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKX19LF9vbk1vdXNlTGVhdmU6ZnVuY3Rpb24oaSl7V2luZG93Ll9ib3gucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1jbGlja2FibGUgZnItaG92ZXJpbmctcHJldmlvdXMgZnItaG92ZXJpbmctbmV4dFwiKSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITF9LF9vbk1vdXNlVXA6ZnVuY3Rpb24oaSl7aWYoISgxPGkud2hpY2gpJiYkKGkudGFyZ2V0KS5pcyhVSS5fdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yKSlpZigxPT09UGFnZXMucGFnZXMubGVuZ3RofHxQYWdlcy5wYWdlJiZcImNsb3NlXCI9PT1QYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5vbkNsaWNrKVdpbmRvdy5oaWRlKCk7ZWxzZXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9fSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sc2hvdzpmdW5jdGlvbigpe0Jyb3dzZXIuSUUmJkJyb3dzZXIuSUU8PTcmJnRoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5hZGQodGhpcy5fY2xvc2UpLnNob3coKX0saGlkZTpmdW5jdGlvbigpe30sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7fX0sJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oaSl7X0ZyZXNjby5pbml0aWFsaXplKCl9KSxGcmVzY299KTsiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5pbXBvcnQgRnJlc2NvIGZyb20gJy4vZnJlc2NvL2pzL2ZyZXNjby5taW4nO1xuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGxldCBhcnJvd1RvcFZhbHVlO1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCkge1xuICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKTtcbiAgY29uc3QgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSBpbWcnLCBlbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICBjb25zdCBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQpO1xuICAkKGVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgaWYgKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKSAmJiAhalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5Jykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICBsZXQgc2xpZGVyID0gJCgnI3Byb2R1Y3RHYWxsZXJ5Jyk7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBzbGlkZXJbMF0uc2xpY2sgJiYgc2xpZGVyWzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgc2xpZGVyLnNsaWNrKG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpICYmICFqUXVlcnkoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgbGV0IHNsaWRlciA9IGpRdWVyeSgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJyk7XG4gICAgc2xpZGVyLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGxldCBzbGlkZXIgPSAkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKTtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIHNsaWRlclswXS5zbGljayAmJiBzbGlkZXJbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBzbGlkZXIuc2xpY2sob3B0cyk7XG4gICAgfVxuICAgIHNsaWRlci5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihzbGljayl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbi8qZnVuY3Rpb24gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2KCkge1xuICBpZiAoJCgnI2ltYWdlcy1jb250YWluZXInKS5oZWlnaHQoKSAtICQoJyNwcm9kdWN0LXN0aWNreScpLmhlaWdodCgpIC0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gMjQgPj0gLSgkKCcjaW1hZ2VzLWNvbnRhaW5lcicpLm9mZnNldCgpLnRvcCkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QuYWRkKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfVxufSovXG5cbmZ1bmN0aW9uIHByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDE0NDApIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xuXG4gICQoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCAuYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSAkKCdpbnB1dFtuYW1lXj1cIicgKyAkKGFkZFRvQ2FydEZvcm0pLmRhdGEoJ25hbWVUb0NoZWNrJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgY29uc3QgYnVuZGxlSXRlbXNDb3VudCA9ICQoJ2Rpdi5idW5kbGUtaXRlbScpLmxlbmd0aDtcbiAgICBpZihzZWxlY3RlZFNpemUgPiAwICYmIHNlbGVjdGVkU2l6ZSA8IGJ1bmRsZUl0ZW1zQ291bnQgKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0Om5vdCguaW5wdXQtY2hlY2tlZCknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PT0gMCkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSlcblxuICAkKCdpbnB1dFtpZF49XCJiaXRiYWdfc3lsaXVzX3Byb2R1Y3RfYnVuZGxlX3BsdWdpbl9hZGRfcHJvZHVjdF9idW5kbGVfdG9fY2FydF9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykuZmluZCgnc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykuYWRkQ2xhc3MoJ2lucHV0LWNoZWNrZWQnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBjcml0ZXJpYSA9IHF1ZXJ5U3RyaW5nLmluZGV4T2YoJ2NyaXRlcmlhJyk7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpO1xuICBsZXQgcHJpY2VTbGlkZXI7XG4gIGxldCBwcmljZVNsaWRlck1vYmlsZTtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKCcjcHJvZHVjdHNGaWx0ZXJzIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKCcjcHJvZHVjdHNGaWx0ZXJzIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nKTtcbiAgY29uc3QgcHJpY2VNaW5Nb2JpbGUgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nKTtcbiAgY29uc3QgcHJpY2VNYXhNb2JpbGUgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nKTtcbiAgaWYgKHByaWNlSW5wdXQubGVuZ3RoID4gMCkge1xuICAgIC8vIFByZXBhcmUgc2xpZGVyIG9wdGlvbnNcbiAgICBjb25zdCB0YXhvbk1pblByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWluJykpO1xuICAgIGNvbnN0IHRheG9uTWF4UHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtYXgnKSk7XG4gICAgY29uc3QgcmFuZ2VTbGlkZXJPcHRpb25zID0ge1xuICAgICAgc3RhcnQ6IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldLFxuXG4gICAgICByYW5nZToge1xuICAgICAgICAnbWluJzogW3RheG9uTWluUHJpY2VdLFxuICAgICAgICAnbWF4JzogW3RheG9uTWF4UHJpY2VdXG4gICAgICB9LFxuICAgICAgc3RlcDogMSxcbiAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmVoYXZpb3VyOiAndGFwJyxcbiAgICAgIHRvb2x0aXBzOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBEZXNrdG9wIFNsaWRlclxuICAgIGNvbnN0IHByaWNlUmFuZ2UgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzICNwcmljZVJhbmdlJyk7XG4gICAgcHJpY2VTbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlWzBdLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICAgIHByaWNlU2xpZGVyLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICBwcmljZU1pbi52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICAgIHByaWNlTWF4LnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICAgIH0pO1xuXG4gICAgLy8gTW9iaWxlIFNsaWRlclxuICAgIGNvbnN0IHByaWNlUmFuZ2VNb2JpbGUgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlICNwcmljZVJhbmdlJyk7XG4gICAgcHJpY2VTbGlkZXJNb2JpbGUgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlTW9iaWxlWzBdLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICBwcmljZU1pbk1vYmlsZS52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICAgIHByaWNlTWF4TW9iaWxlLnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB1c2VyIGNoYW5nZXMgcHJpY2UgaW5wdXQgdmFsdWVcbiAgICBwcmljZUlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKGUud2hpY2ggIT09IDggJiYgIWlzTmFOKFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKXtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXTtcbiAgICAgICAgcHJpY2VTbGlkZXIuc2V0KG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVNb2JpbGUgPSBbcHJpY2VNaW5Nb2JpbGUudmFsKCksIHByaWNlTWF4TW9iaWxlLnZhbCgpXTtcbiAgICAgICAgcHJpY2VTbGlkZXJNb2JpbGUuc2V0KG5ld1ZhbHVlTW9iaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNpemVGaWx0ZXJJbnB1dCA9ICQoJyNzaXplRmlsdGVyIGlucHV0Jyk7XG4gIHNpemVGaWx0ZXJJbnB1dC5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICBpZih0aGlzLmNoZWNrZWQpIHtcbiAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJ2lucHV0W2RhdGEtaWQ9XCInICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgc2l6ZUZpbHRlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNjcml0ZXJpYVNpemVNb2JpbGUgaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlucHV0VG9DaGVjayA9ICQoZS50YXJnZXQpLmRhdGEoJ2lkJyk7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydGluZ1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dC5pbnB1dC1zb3J0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dCcpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciAuY2hlY2ttYXJrIC5jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAkKGUudGFyZ2V0KS5uZXh0KCcuY2hlY2ttYXJrJykuZmluZCgnLmNoZWNrZWQnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICB9KTtcblxuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzXG4gICQoJ2EudmFsaWRhdGUtZmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsIHByaWNlTWluLCBwcmljZU1heCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCBwcmljZU1pbk1vYmlsZSwgcHJpY2VNYXhNb2JpbGUpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyRm9ybScpLnN1Ym1pdCgpO1xuICB9KTtcblxuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZigkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykudmFsKCkgPT09ICdjcmVhdGVkQXQnKSB7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykucmVtb3ZlKCk7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZy1jcmVhdGVkQXQnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWlubGluZS1ibG9jaycpO1xuICAgIH1cbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsIHByaWNlTWluLCBwcmljZU1heCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCBwcmljZU1pbk1vYmlsZSwgcHJpY2VNYXhNb2JpbGUpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIGlmIChjcml0ZXJpYSAhPT0gLTEpIHtcbiAgICAkKCcucmVpbml0LWZpbHRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICB9XG5cbiAgLy8gTW9iaWxlIGZpbHRlcnNcbiAgJCgnLnByb2R1Y3QtZmlsdGVycy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKTtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuY2xvc2UnKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5jbG9zZScpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLXRvZ2dsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck9iamVjdCwgcHJpY2VNaW4sIHByaWNlTWF4KSB7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpLmZpcnN0KCk7XG4gIGxldCBwcmljZU1pblZhbHVlID0gcHJpY2VNaW4udmFsKCk7XG4gIGxldCBwcmljZU1heFZhbHVlID0gcHJpY2VNYXgudmFsKCk7XG4gIGlmIChwcmljZU1pbi52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBpZiAocHJpY2VNaW4udmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgcHJpY2VNaW4udmFsKHByaWNlTWluVmFsdWUpO1xuICBpZiAocHJpY2VNYXgudmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgaWYgKHByaWNlTWF4LnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIHByaWNlTWF4LnZhbChwcmljZU1heFZhbHVlKTtcbiAgcHJpY2VTbGlkZXJPYmplY3Quc2V0KFtwcmljZU1pblZhbHVlLCBwcmljZU1heFZhbHVlXSk7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAvKiQoJyNtYWluQ29udGVudENvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Ki9cblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKVxuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjZmlsdGVyU3VibWl0Jykub3V0ZXJIZWlnaHQoKSAtIDEwO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnKS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNmaWx0ZXJMaXN0JykuY3NzKCdoZWlnaHQnLCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9naW5GdW5jdGlvbnMoKSB7XG4gIGlmKCQoJy5sb2dpbi1mb3JtJykpIHtcbiAgICAkKCcuc3VibWl0LWxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybUVsZW1lbnQpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoJCgnLnZlcmlmeS1hY2NvdW50JykpIHtcbiAgICAkKCcudmVyaWZ5LWFjY291bnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50Om5vdCguc3VjY2VzcyknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKCcubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9ycyAuZm9ybS1lcnJvci1tZXNzYWdlJykudGV4dCgkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9ycyB1bCBsaScpLnRleHQoKSk7XG4gICAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRNb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQnKS52YWwoJycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgIH0pXG4gIH1cblxuICAkKCdidXR0b24uc3VibWl0LXJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICBsZXQgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICBsZXQgcmVnaXN0ZXJGb3JtID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBpbnZhbGlkU3BhbiA9ICQoZS50YXJnZXQpLnByZXYoJ3NwYW4nKTtcbiAgICBpZigkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJGb3JtID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykpO1xuICAgICAgZW1haWwgPSAkKHJlZ2lzdGVyRm9ybSkuZmluZCgnaW5wdXQnKS52YWwoKVxuICAgICAgaW52YWxpZFNwYW4gPSAkKCQocmVnaXN0ZXJGb3JtKS5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpKTtcbiAgICB9XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBpbnZhbGlkU3Bhbi5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgcmVnaXN0ZXJGb3JtLmZpbmQoJ2lucHV0JykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFNwYW4uYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcbn1cblxuJCgnLnJlZ2lzdGVyLWZvcm0gaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICBjb25zdCBlbWFpbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICBpZiAocmVnZXgudGVzdChlbWFpbCkgJiYgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2lzLWludmFsaWQnKSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENvbnRhY3QgUGFnZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBjb250YWN0UGFnZUZ1bmN0aW9uKCkge1xuICAkKCcjY29udGFjdFBhZ2UgZm9ybSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCAubW9kYWwtYm9keSBkaXYnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgLy8gRGVsZXRlIGFsbCBlcnJvcnMgb2YgZm9ybSB3aGVuIHN1Y2Nlc3NcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdJykudmFsKCcnKS5wcm9wKCBcImNoZWNrZWRcIiwgZmFsc2UgKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdLCAjY29udGFjdFBhZ2UgW2Zvcl49XCJzeWxpdXNfY29udGFjdF9cIl0nKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA2KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAgIGNvbnN0IGVycm9yTGlzdCA9ICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnc3BhbicpLnRvQXJyYXkoKTtcbiAgICAgICAgICBlcnJvckxpc3QuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iub3V0ZXJUZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IuY2xhc3NOYW1lICE9PSAnYWNjZXB0Q2d2Jykge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgICAgICAgICAgICAgIC5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj4nICsgZXJyb3Iub3V0ZXJUZXh0ICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5uZXh0KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDE3KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIC5jb250YWN0LWVycm9yJykuaHRtbCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzaGFyZUZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FydEZ1bmN0aW9ucygpIHtcbiAgLy8gUmVsb2FkIFF0eVxuICAkKCcucmVsb2FkLXF0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGJvbnVzIHBvaW50c1xuICAkKCcuYm9udXMtcG9pbnRzLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJvbnVzUG9pbnRzID0gJCgnLmJvbnVzLXBvaW50cycpLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKGJvbnVzUG9pbnRzKTtcbiAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgIH1cblxuICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgfSk7XG5cbiAgJChcImJvZHlcIikub24oXCJrZXlkb3duXCIsIFwiLmJvbnVzLXBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpICE9IHVuZGVmaW5lZCkge1xuICAgICQoJy5ib251cy1wb2ludHMtaW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmJvbnVzLXBvaW50cycpLnZhbCgkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoKSk7XG4gIH1cblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY291cG9uID0gJCgnLmNvdXBvbi1jb2RlJykudmFsKCk7XG4gICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICB9XG5cbiAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gIH0pO1xuXG4gICQoXCJib2R5XCIpLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICAvLyBDaGFuZ2UgcXVhbnRpdHkgb24gbW9iaWxlXG4gICQoJy5tb2JpbGUtcXR5Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1F0eSA9ICQodGhpcykudmFsKCk7XG4gICAgY29uc3QgaW5wdXRRdHlOYW1lID0gJCh0aGlzKS5kYXRhKCdpbnB1dC1xdHknKTtcbiAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgfSk7XG5cbiAgaWYoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmNvdXBvbi1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmNvdXBvbi1jb2RlJykudmFsKCQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tvdXRGdW5jdGlvbnMoKSB7XG4gICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY2xpY2tlZCcpKSB7XG4gICAgICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgIGNvbnN0IHNhdmVBZGRyZXNzTmF2aWdhdGlvbiA9ICQoJyNjaGVja291dFBhZ2UgLnNhdmUtYWRkcmVzcy1uYXZpZ2F0aW9uJyk7XG4gICAgICBzYXZlQWRkcmVzc05hdmlnYXRpb24uYWRkQ2xhc3MoJ2QtZmxleCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNjaGVja291dFBhZ2UgLnNhdmUtY2hlY2tvdXQtYWRkcmVzcy1uYXZpZ2F0aW9uJykuaGlkZSgpO1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NoaXBwaW5nJykpIHtcbiAgICAgICAgJCgnLmNoYW5nZS1zaGlwcGluZy1hZGRyZXNzJykuc2hvdygpO1xuICAgICAgICAkKCcuY2hhbmdlLWJpbGxpbmctYWRkcmVzcycpLmhpZGUoKTtcbiAgICAgICAgJCgnYnV0dG9uJywgc2F2ZUFkZHJlc3NOYXZpZ2F0aW9uKS5yZW1vdmVDbGFzcygnYmlsbGluZycpO1xuICAgICAgICAkKCdidXR0b24nLCBzYXZlQWRkcmVzc05hdmlnYXRpb24pLmFkZENsYXNzKCdzaGlwcGluZycpO1xuICAgICAgfVxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2JpbGxpbmcnKSkge1xuICAgICAgICAkKCcuY2hhbmdlLXNoaXBwaW5nLWFkZHJlc3MnKS5oaWRlKCk7XG4gICAgICAgICQoJy5jaGFuZ2UtYmlsbGluZy1hZGRyZXNzJykuc2hvdygpO1xuICAgICAgICAkKCdidXR0b24nLCBzYXZlQWRkcmVzc05hdmlnYXRpb24pLnJlbW92ZUNsYXNzKCdzaGlwcGluZycpO1xuICAgICAgICAkKCdidXR0b24nLCBzYXZlQWRkcmVzc05hdmlnYXRpb24pLmFkZENsYXNzKCdiaWxsaW5nJyk7XG4gICAgICB9XG4gICAgICAkKCcjc3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAkKCcjY2hlY2tvdXRQYWdlIC5jaGVja291dC1hZGRyZXNzLWZvcm0nKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9XG4gIH0pXG5cbiAgJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1hZGRyZXNzLW5hdmlnYXRpb24gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjbGFzc0xpc3RCdG4gPSBlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG4gICAgJCgnI2NoZWNrb3V0UGFnZSAuZGF0YS0nICsgY2xhc3NMaXN0QnRuWzNdKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBjbGFzc0xpc3RCdG5bM10gKyAnQWRkcmVzc11bJyArIGNsYXNzTGlzdFsxXSArICddJztcbiAgICAgIGNvbnN0IHRvU2F2ZSA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGROYW1lO1xuICAgICAgY29uc3QgdG9SZXBsYWNlID0gJy5jaGFuZ2UtJysgY2xhc3NMaXN0QnRuWzNdICsnLWFkZHJlc3MgJyArIGZpZWxkTmFtZTtcbiAgICAgICQodG9SZXBsYWNlKS52YWwoJCh0b1NhdmUpLnZhbCgpKTtcbiAgICB9KTtcbiAgICBjaGVja291dFNhdmVBZGRyZXNzKGUuY3VycmVudFRhcmdldCwgY2xhc3NMaXN0QnRuWzNdKTtcbiAgfSk7XG5cbiAgJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1hZGRyZXNzLW5hdmlnYXRpb24gLmJ0bi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoaWRlQ2hhbmdlQWRkcmVzcygpO1xuICAgIGNhbmNlbENoYW5nZUFkZHJlc3MoKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tvdXRTYXZlQWRkcmVzcyhlbGVtZW50LCBhZGRyZXNzVHlwZSkge1xuICBjb25zdCBmb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJylcbiAgaWYgKCQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX3R5cGVcIl0nLCBmb3JtKS5sZW5ndGgpIHtcbiAgICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc190eXBlXCJdJywgZm9ybSkudmFsKGFkZHJlc3NUeXBlKTtcbiAgfVxuICAkKCdpbnB1dFtpZCQ9XCJfc2F2ZV9zaGlwcGluZ19kaWZmZXJlbnRCaWxsaW5nQWRkcmVzc1wiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgJCgnLm1haW4tYWRkcmVzcy1mb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc3QgZGF0YVN1Y2Nlc3NEaXYgPSAkKHJlc3BvbnNlKTtcbiAgICAgIGlmKGRhdGFTdWNjZXNzRGl2Lmhhc0NsYXNzKCdzYXZlLWFkZHJlc3Mtc3VjY2VzcycpKSB7XG4gICAgICAgICQoJyNjaGVja291dFBhZ2UgLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBhZGRyZXNzVHlwZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNsYXNzTGlzdFsxXTtcbiAgICAgICAgICAkKHRoaXMpLnRleHQoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkpO1xuICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgICAgICAgICAgaWYgKCQoJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICctc3VjY2Vzcy4nICsgZmllbGROYW1lLCBkYXRhU3VjY2Vzc0RpdikuaHRtbCgpLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJCgnLnN0cmVldDItY29udGFpbmVyLScgKyBhZGRyZXNzVHlwZSkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaGlkZUNoYW5nZUFkZHJlc3MoKTtcbiAgICAgICAgJCgnLm1haW4tYWRkcmVzcy1mb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgJCgnLm1haW4tYWRkcmVzcy1mb3JtIGlucHV0JykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJCgnLm1haW4tYWRkcmVzcy1mb3JtIC5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnLmZvcm0tZXJyb3ItbWVzc2FnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9ICQodGhpcykuY2xvc2VzdCgnbGFiZWwnKS5uZXh0KCdpbnB1dCcpLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAkKCcubWFpbi1hZGRyZXNzLWZvcm0gW25hbWU9XCInKyBmaWVsZE5hbWUgKydcIl0nKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1lcnJvci1tZXNzYWdlIGQtYmxvY2tcIj4nICsgZmllbGRFcnJvciArICc8L3NwYW4+PC9zcGFuPicpO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5tYWluLWFkZHJlc3MtZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBoaWRlQ2hhbmdlQWRkcmVzcygpIHtcbiAgJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nKS50b2dnbGUoKTtcbiAgJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1hZGRyZXNzLW5hdmlnYXRpb24nKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtZmxleCcpO1xuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKVswXS5zY3JvbGxUb3AgPSAwO1xuICAkKCcuY2hhbmdlLXNoaXBwaW5nLWFkZHJlc3MnKS5oaWRlKCk7XG4gICQoJy5jaGFuZ2UtYmlsbGluZy1hZGRyZXNzJykuaGlkZSgpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsQ2hhbmdlQWRkcmVzcygpIHtcbiAgJCgnI2NoZWNrb3V0UGFnZSAuY2hvc2VuLWFkZHJlc3Mgc3BhbltjbGFzc149XCJkYXRhLVwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICBjb25zdCBhZGRyZXNzVHlwZSA9IChjbGFzc0xpc3RbMF0uc3BsaXQoJy0nKSlbMV07XG4gICAgY29uc3QgZmllbGROYW1lID0gY2xhc3NMaXN0WzFdO1xuXG4gICAgY29uc3QgdG9TYXZlID0gJy5kYXRhLScgKyBhZGRyZXNzVHlwZSArICcuJyArIGZpZWxkTmFtZTtcbiAgICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXSc7XG4gICAgY29uc3QgdG9SZXBsYWNlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gJ2NvdW50cnlDb2RlJykge1xuICAgICAgJCh0b1JlcGxhY2UpLnZhbCgkKHRvU2F2ZSkudGV4dCgpLnN1YnN0cmluZygwLCAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodG9SZXBsYWNlKS52YWwoJCh0b1NhdmUpLnRleHQoKSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJzR3JpZEZ1bmN0aW9ucygpIHtcbiAgLy8gRGVza3RvcCBBY2NvcmRpb25cbiAgJCgnI29yZGVyQWNjb3JkaW9uRGVza3RvcCcpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgndHInLCB0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLy8gTW9iaWxlIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykucmVtb3ZlQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnI29yZGVyQWNjb3JkaW9uTW9iaWxlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucHJldignZGl2JykuYWRkQ2xhc3MoJ2luaXQnKTtcbiAgfSlcbiAgJCgnLmFycm93LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYub3JkZXItZGV0YWlscycpLnByZXYoJ2RpdicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dpblBhZ2VGdW5jdGlvbnMoKSB7XG4gICQoJy5yZXNldC1wYXNzd29yZC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb2RhbElkID0gJCh0aGlzKS5kYXRhKCdtb2RhbElkJyk7XG4gICAgJChtb2RhbElkKS5tb2RhbCgnc2hvdycpO1xuICAgICQoJy5oZWFkZXItZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGNyZWF0ZUNhcm91c2VsKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICBzaGFyZUZ1bmN0aW9ucygpO1xuICByZXNpemVNZW51KCQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJykpO1xuICByZXNpemVGaWx0ZXJNb2JpbGVNZW51KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gIEZyZXNjby5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZUNhcm91c2VsKCk7XG4gIG5hdmJhckNvbGxhcHNlSW5pdCgpO1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICB9KTtcbiAgLy8gUFJFVkVOVCBJTlNJREUgQ0xJQ0sgRFJPUERPV05cbiAgJCgnLmRyb3Bkb3duLW1lbnUnKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHByb2R1Y3RGdW5jdGlvbnMoKTtcbiAgZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpO1xuICAvLyBNZW51IEZ1bmN0aW9uc1xuICBtZWdhbWVudUZ1bmN0aW9ucygpO1xuICBtZW51SWNvbmVzRnVuY3Rpb25zKCk7XG5cbiAgbG9naW5GdW5jdGlvbnMoKTtcbiAgb3JkZXJzR3JpZEZ1bmN0aW9ucygpO1xuICBsb2dpblBhZ2VGdW5jdGlvbnMoKTtcbiAgY2FydEZ1bmN0aW9ucygpO1xuICBjaGVja291dEZ1bmN0aW9ucygpO1xuXG4gIGNvbnRhY3RQYWdlRnVuY3Rpb24oKTtcblxuICByZXNpemVNYWluQ29udGFpbmVyKCk7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gNzY4KSB7XG4gICAgY3JlYXRlR2FsbGVyeURlc2t0b3AoKTtcbiAgfVxuICByZXBsYWNlQ2Fyb3VzZWxBcnJvdygpO1xuICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgLyppZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtaW5mbycpLm9uc2Nyb2xsID0gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2O1xuICB9Ki9cbiAgLy8gU2hvdyBtZW51IGFmdGVyIHBhZ2UgaXMgbG9hZGVkXG4gICQoJy5tb2JpbGUtb2ZmY2FudmFzJykuc2hvdygpO1xuICAkKCcuaGVhZGVyLWRyb3Bkb3duJykuc2hvdygpO1xuICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5kcm9wZG93bi1tZW51Jykuc2hvdygpO1xufVxuXG5leHBvcnQgeyBpbml0LCByZXNpemVDb250ZW50IH07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBZGRUb0NhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlJztcbmltcG9ydCBTeWxpdXNBcGlMb2dpbiBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcyc7XG5pbXBvcnQgU3lsaXVzUHJvdmluY2VGaWVsZCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbmltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWFkZHJlc3MnKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWFkZHJlc3MnKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBvdmVycmlkZXMgdGhlIHN5bGl1cyBwYWNrYWdlIGZpbGVcbiAqIEJvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rLmpzXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNob29zZS1hZGRyZXNzJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLnRhcmdldFtlLmN1cnJlbnRUYXJnZXQudmFsdWVdO1xuICAgICAgY29uc3QgY2hvaWNlRGF0YSA9IHt9O1xuXG4gICAgICBbLi4uY2hvaWNlLmF0dHJpYnV0ZXNdLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKGF0dHIubmFtZS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxDYXNlZCA9IGF0dHIubmFtZS5yZXBsYWNlKCdkYXRhLScsICcnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBnID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY2hvaWNlRGF0YVtjYW1lbENhc2VkXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHByb3ZpbmNlQ29kZSwgcHJvdmluY2VOYW1lIH0gPSBjaG9pY2VEYXRhO1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnW2RhdGEtanMtYWRkcmVzcy1ib29rXScpLnF1ZXJ5U2VsZWN0b3IoJy5wcm92aW5jZS1jb250YWluZXInKTtcblxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VEYXRhKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZpbmRCeU5hbWUocHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdjb3VudHJ5Q29kZScpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICBjb25zdCBleGlzdHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUNvZGVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlQ29kZScpO1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VOYW1lRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgICAgICAgaWYgKCFwcm92aW5jZUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgIGlmIChwcm92aW5jZUNvZGVGaWVsZCAmJiBwcm92aW5jZUNvZGVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlQ29kZSAhPT0gJycgfHwgcHJvdmluY2VDb2RlICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZUNvZGVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlQ29kZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aW5jZU5hbWVGaWVsZCAmJiBwcm92aW5jZU5hbWVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlTmFtZSAhPT0gJycgfHwgcHJvdmluY2VOYW1lICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZU5hbWVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlTmFtZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRyZXNzQm9vaztcbiIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2FjY291bnQtaWNvbi5iYTk2OWM5OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9iYWNrLmNkMTFmMGZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NhcmQuYjc1NzFiMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2hyb25vcG9zdC5lZWRlNmFiYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jb2xpc3NpbW8uMGI3OWE3MTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvZGVsaXZlcnktdHJ1Y2suOWMzZGZjZDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1kZS45YTMxODU5ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWVuLjMwMmVlN2JmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZXMuNmFhNzA3ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1mci44NDZkN2U2OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWl0LjM1NTVhMzZiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2xvZ28uMmMyYTljYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbWFzdGVyY2FyZC4wNDBmNDFiYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tb25kaWFsLXJlbGF5LmU3MjY4OTdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL25leHQuZmI2NDYwOTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcGF5cGFsLjk1MjYyNWY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JlbG9hZC4zYjc1MGQ0Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9yZXR1cm4tcG9saWN5LjY3ZDhhNzUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Nob3BwaW5nLWJhZy1pY29uLjdmZGVjMjcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3Zpc2EuNjk5YzQwMzkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==