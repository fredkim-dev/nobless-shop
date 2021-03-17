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

var _checkoutNobless = __webpack_require__(/*! ./js/checkout-nobless.js */ "./themes/NoblessTheme/assets/js/checkout-nobless.js");

var _checkoutNobless2 = _interopRequireDefault(_checkoutNobless);

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
  (0, _checkoutNobless2.default)($('#checkoutPage'));
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

/***/ "./themes/NoblessTheme/assets/js/checkout-nobless.js":
/*!***********************************************************!*\
  !*** ./themes/NoblessTheme/assets/js/checkout-nobless.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Main function used in init
const saveButton = $('#checkoutPage .save-in-account');
const cancelBtn = $('#checkoutPage .cancel-change-address');

const checkout = function mainFunctions(container) {
  // When the user wants to change his address
  $('.chosen-address .change-address', container).on('click', function (e) {
    e.preventDefault();

    if (!$(this).hasClass('clicked') && !$('.save-address-form', container).hasClass('d-block')) {
      $('.chosen-address .change-address', container).removeClass('clicked');
      $(this).addClass('clicked');
      cancelBtn.show();
      cancelBtn.prev().hide();
      $('.checkout-address-form', container).show();
      addressTypeManage(this, 'change', container);
      setAddressCarousel();
    } else if ($('.save-address-form', container).hasClass('d-block')) {
      addressTypeManage(this, 'add', container);
    }

    setChooseNewAddress($('.choose-address-item', container), container);
  }); // When user wants to add a new address to his account

  $('a.checkout-add-address', container).on('click', function (e) {
    e.preventDefault();
    const classListBtn = $('.chosen-address .change-address.clicked', container)[0].className.split(/\s+/);
    $('.checkout-address-form', container).hide();
    $('.save-checkout-address-navigation', container).hide();
    $('.save-address-form input[type="text"]', container).val('');
    $('.save-address-form', container).addClass('d-block');
    $('.save-address-form .add-' + classListBtn[1] + '-address', container).show();
    addressTypeManage(saveButton, 'add', container);
  }); // When user save a new address

  $('.save-address-navigation button', container).on('click', function (e) {
    e.preventDefault();
    const classListBtn = e.currentTarget.className.split(/\s+/);
    $('#checkoutPage .data-' + classListBtn[3]).each(function () {
      const classList = this.className.split(/\s+/);
      const fieldName = '[name="sylius_checkout_address[' + classListBtn[3] + 'Address][' + classList[1] + ']';
      const toSave = '#checkoutPage .main-address-form ' + fieldName;
      const toReplace = '.change-' + classListBtn[3] + '-address ' + fieldName;
      $(toReplace).val($(toSave).val());
    });
    checkoutSaveAddress(e.currentTarget, classListBtn[3], container);
  }); // When user clicks on address page next button

  $('.main-address-form button.btn-primary', container).on('click', function (e) {
    e.preventDefault();
    $('.checkout-address-form', container).hide();
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
};

const setChooseNewAddress = function chooseAddress(element, container) {
  // When user chose an address
  element.on('click', function (e) {
    $('.data-address', this).each(function () {
      const fieldName = this.className.split(/\s+/)[1];
      const addressType = $('.chosen-address .change-address.clicked', container)[0].className.split(/\s+/)[1];
      const fieldSelector = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
      const formField = '#checkoutPage .main-address-form ' + fieldSelector;
      const chosenAddressText = '.data-' + addressType + '.' + fieldName;

      if (fieldName === 'countryCode') {
        $(formField).val($(this).text().substring(0, 2));
      } else {
        $(formField).val($(this).text());
      }

      if (fieldName === 'street2') {
        if ($(this).text().trim() !== '') {
          $('.street2-container-' + addressType).removeClass('d-none');
        } else {
          $('.street2-container-' + addressType).addClass('d-none');
        }
      }

      $(chosenAddressText).text($(this).text());
    });
    hideChangeAddress(container);
  });
};
/* Save address in user account : Returns errors in form if not valid */


function checkoutSaveAddress(element, addressType, container) {
  const form = $(element).closest('form');

  if ($('input[name="address_type"]', form).length) {
    $('input[name="address_type"]', form).val(addressType);
  }

  fillOtherAddress(addressType, container);
  $('.save-address-form form', container).addClass('loading');
  $.ajax({
    type: "POST",
    url: form.attr('action'),
    data: form.serialize(),
    success: function success(response) {
      const dataSuccessDiv = $(response);

      if (dataSuccessDiv.hasClass('save-address-success')) {
        $('.chosen-address .data-' + addressType, container).each(function () {
          const classList = this.className.split(/\s+/);
          const fieldName = classList[1];
          const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']';
          const fieldToReplace = '#checkoutPage .main-address-form ' + formFieldName;
          let newValue = $('.data-' + addressType + '-success.' + fieldName, dataSuccessDiv).html();
          $(fieldToReplace).val(newValue);
          $(this).text(newValue);

          if (fieldName === 'countryCode') {
            $(this).text($('.data-' + addressType + '-success.countryName', dataSuccessDiv).html());
          }

          if (fieldName === 'street2') {
            if ($('.data-' + addressType + '-success.' + fieldName, dataSuccessDiv).html().trim() !== '') {
              $('.street2-container-' + addressType).removeClass('d-none');
            } else {
              $('.street2-container-' + addressType).addClass('d-none');
            }
          }

          $('.address-book', container).html($('.address-book', dataSuccessDiv).html());
        });
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
/* Fill other address fields to avoid errors */


function fillOtherAddress(addressType, container) {
  const otherAddressType = addressType === 'shipping' ? 'billing' : 'shipping';
  $('.save-address-form input[id^="inAccount_save_' + otherAddressType + '"]', container).each(function () {
    const regex = /\[(\w+)\]$/gm;
    const fieldName = regex.exec($(this).attr('name'))[1];
    const dataToFill = $('.chosen-address address.cancel-info.' + otherAddressType, container).data();
    $(this).val(dataToFill[fieldName]);
  });
  $('#inAccount_save_differentBillingAddress', container).prop('checked', true);
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
  $('.save-address-form form', container).removeClass('loading');
  $('.save-address-form input', container).removeClass('is-invalid');
  $('.save-address-form .invalid-feedback', container).remove();
}
/* Replace all form and displayed address data when cancel modifications */


function cancelChangeAddress(container) {
  $('.chosen-address address.cancel-info', container).each(function () {
    const oldData = $(this).data();
    const addressType = this.className.split(/\s+/)[1];
    const fieldNames = Object.keys(oldData);
    fieldNames.forEach(function (element) {
      let fieldName = element;

      if (element === 'countryName') {
        fieldName = 'countryCode';
      }

      const textToReplace = '.data-' + addressType + '.' + fieldName;
      const formFieldName = '[name="sylius_checkout_address[' + addressType + 'Address][' + fieldName + ']"]';
      const fieldToReplace = '.main-address-form ' + formFieldName; // Set form with old data

      $(fieldToReplace, container).val(oldData[element]);

      if (element === 'countryCode') {
        $(fieldToReplace, container).val(oldData[element]);
      } else {
        // Set chosen Address with old data
        $(textToReplace).text(oldData[element]);
      }
    });
  });
}
/* Create carousel when user have more than 4 addresses */


function setAddressCarousel() {
  const opts = {
    infinite: true,
    speed: 700,
    rows: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    adaptiveHeight: true,
    appendArrows: jQuery('#carouselAddressList').next('.slider-controls'),
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
  let slider = $('#carouselAddressList');

  if (slider && !slider.hasClass('slick-initialized')) {
    slider.slick(opts);
  }
}
/* Manage what type of address will be replace and/or saved */


function addressTypeManage(btnElement, selectorType, container) {
  if ($(btnElement).hasClass('shipping')) {
    $('.' + selectorType + '-shipping-title', container).show();
    $('.' + selectorType + '-billing-title', container).hide();
    saveButton.removeClass('billing');
    saveButton.addClass('shipping');
  }

  if ($(btnElement).hasClass('billing')) {
    $('.' + selectorType + '-billing-title', container).show();
    $('.' + selectorType + '-shipping-title', container).hide();
    saveButton.removeClass('shipping');
    saveButton.addClass('billing');
  }
}

exports.default = checkout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnJlc2NvL2pzL2ZyZXNjby5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL2luZGV4Qm9vdHN0cmFwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvanMvY2hlY2tvdXQtbm9ibGVzcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9hY2NvdW50LWljb24ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2JhY2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2Nocm9ub3Bvc3QucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2NvbGlzc2ltby5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZGUucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZW4ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZXMucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24tZnIucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2ljb24taXQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL21vbmRpYWwtcmVsYXkucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL25leHQucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvcmVsb2FkLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9tZWRpYS9zaG9wcGluZy1iYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvbWVkaWEvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL05vYmxlc3NUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJkb20iLCJ3YXRjaCIsIlN5bGl1c0FkZFRvQ2FydCIsImVsIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiT2JqZWN0IiwiZW50cmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImZvckVhY2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiU3lsaXVzQXBpTG9naW4iLCJzaWduSW5CdXR0b24iLCJ2YWxpZGF0aW9uRmllbGQiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInZhbHVlIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJkb2N1bWVudCIsInRhcmdldCIsImxlbmd0aCIsImdldCIsImVtYWlsIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsIm92ZXJsYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZ2V0UHJvdmluY2VJbnB1dFZhbHVlIiwidmFsdWVTZWxlY3RvciIsInZhbCIsInVuZGVmaW5lZCIsIlN5bGl1c1Byb3ZpbmNlRmllbGQiLCJjb3VudHJ5U2VsZWN0IiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImNvdW50cnlTZWxlY3RJdGVtIiwiZXZlbnQiLCJzZWxlY3QiLCJjdXJyZW50VGFyZ2V0IiwicHJvdmluY2VDb250YWluZXIiLCJjbG9zZXN0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJyZXBsYWNlIiwicHJvdmluY2VJbnB1dEZpZWxkTmFtZSIsInByb3ZpbmNlU2VsZWN0RmllbGRJZCIsInByb3ZpbmNlSW5wdXRGaWVsZElkIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUNvZGUiLCJjb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5kZXhPZiIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJwcm92aW5jZUlucHV0VmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiU3lsaXVzUmF0aW5nIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwib25SYXRlIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsIlN5bGl1c1RvZ2dsZSIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwiU3lsaXVzVmFyaWFudEltYWdlcyIsIm1haW5JbWFnZUxpbmsiLCJtYWluSW1hZ2UiLCJkZWZhdWx0SW1hZ2VMaW5rIiwiZGVmYXVsdEltYWdlU3JjIiwiaXRlbSIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiaW1nIiwiaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UiLCJzZWxlY3RvciIsIm9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJwcmljZSIsImhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSIsIlN5bGl1c1ZhcmlhbnRzUHJpY2VzIiwic3lsaXVzVmFyaWFudHNQcmljaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzeWxpdXNQcm9kdWN0VmFyaWFudHMiLCJvbmxvYWQiLCJpbml0Iiwib25yZXNpemUiLCJyZXNpemVDb250ZW50IiwiZGVmaW5lIiwiJCIsIkZyZXNjbyIsImV4dGVuZCIsInZlcnNpb24iLCJTa2lucyIsImZyZXNjbyIsIkJvdW5kcyIsInZpZXdwb3J0Iiwid2lkdGgiLCJCcm93c2VyIiwiTW9iaWxlU2FmYXJpIiwiQW5kcm9pZCIsIkdlY2tvIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJRSIsImF0dGFjaEV2ZW50IiwiZiIsIk9wZXJhIiwib3BlcmEiLCJwYXJzZUZsb2F0IiwiV2ViS2l0IiwibWF0Y2giLCJDaHJvbWUiLCJDaHJvbWVNb2JpbGUiLCJJRU1vYmlsZSIsInQiLCJSZWdFeHAiLCJleGVjIiwiX3NsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImJhc2VUb1N0cmluZyIsIl8iLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsIlN0cmluZyIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9uIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInN0b3BQcm9wYWdhdGlvbiIsImlzRGVmYXVsdFByZXZlbnRlZCIsIkZpdCIsIndpdGhpbiIsImFyZ3VtZW50cyIsInMiLCJuIiwibyIsImEiLCJoIiwiciIsImQiLCJNYXRoIiwibWluIiwibWF4IiwiZWFzaW5nIiwiZnJlc2NvRWFzZUluQ3ViaWMiLCJmcmVzY29FYXNlSW5TaW5lIiwiY29zIiwiUEkiLCJmcmVzY29FYXNlT3V0U2luZSIsInNpbiIsIlN1cHBvcnQiLCJPIiwiUCIsInNwbGl0IiwiY2FudmFzIiwiYmEiLCJnZXRDb250ZXh0IiwiY3NzIiwiYW5pbWF0aW9uIiwiUyIsInRyYW5zZm9ybSIsInByZWZpeGVkIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlU1ZHUmVjdCIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsInN1YnN0ciIsImRldGVjdE1vYmlsZVRvdWNoIiwibW9iaWxlVG91Y2giLCJ0ZXN0IiwicGxhdGZvcm0iLCJJbWFnZVJlYWR5IiwiaW5pdGlhbGl6ZSIsImFwcGx5IiwiY2FsbCIsIlRpbWVycyIsImdldFVSSURhdGEiLCJ0eXBlIiwiZWFjaCIsIlR5cGVzIiwiZGV0ZWN0RXh0ZW5zaW9uIiwidG9Mb3dlckNhc2UiLCJzdXBwb3J0cyIsIm5hdHVyYWxXaWR0aCIsIkltYWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImlzTG9hZGVkIiwib3B0aW9ucyIsIm1ldGhvZCIsInBvbGxGYWxsYmFja0FmdGVyIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0IiwicHJveHkiLCJzdWNjZXNzIiwiaW50ZXJ2YWxzIiwiX2lwb3MiLCJfdGltZSIsIl9kZWxheSIsInBvbGwiLCJmYWxsYmFjayIsIl9wb2xsaW5nIiwiX3VzZWRQb2xsRmFsbGJhY2siLCJfZmFsbGJhY2tJbWciLCJuYXR1cmFsSGVpZ2h0Iiwib25lcnJvciIsInNyYyIsImFib3J0IiwiY2xlYXJUaW1lb3V0IiwiX2NhbGxlZFN1Y2Nlc3MiLCJfY2FsbGVkRXJyb3IiLCJfdGltZXJzIiwic2V0IiwiY2xlYXIiLCJjbGVhckFsbCIsIlR5cGUiLCJpc1ZpZGVvIiwiaW1hZ2UiLCJleHRlbnNpb25zIiwiZGV0ZWN0IiwiaW5BcnJheSIsImV4dGVuc2lvbiIsInZpbWVvIiwiaWQiLCJ5b3V0dWJlIiwiVmltZW9UaHVtYm5haWwiLCJsb2FkIiwicHJvdG9jb2wiLCJfeGhyIiwiZ2V0SlNPTiIsInRodW1ibmFpbF91cmwiLCJjYWNoZSIsInB1c2giLCJWaW1lb1JlYWR5IiwiY2FsbGJhY2siLCJkaW1lbnNpb25zIiwiT3B0aW9ucyIsImRlZmF1bHRzIiwiZWZmZWN0cyIsInNob3ciLCJoaWRlIiwic3Bpbm5lciIsInRodW1ibmFpbCIsImRlbGF5IiwidGh1bWJuYWlscyIsInNsaWRlIiwia2V5Ym9hcmQiLCJsZWZ0IiwicmlnaHQiLCJlc2MiLCJsb2FkZWRNZXRob2QiLCJsb29wIiwib25DbGljayIsIm92ZXJmbG93IiwiY2xvc2UiLCJwcmVsb2FkIiwicG9zaXRpb24iLCJza2luIiwic3Bpbm5lckRlbGF5Iiwic3luYyIsInVpIiwidWlEZWxheSIsImF1dG9wbGF5IiwiYXBpIiwidGl0bGUiLCJieWxpbmUiLCJwb3J0cmFpdCIsImNvbnRyb2xzIiwiZW5hYmxlanNhcGkiLCJoZCIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJ2cSIsImluaXRpYWxUeXBlT3B0aW9ucyIsImNyZWF0ZSIsIngiLCJ5Iiwib3ZlcmxhcCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiT3ZlcmxheSIsImJ1aWxkIiwidmlzaWJsZSIsImFkZENsYXNzIiwiUGFnZXMiLCJwYWdlIiwidmlldyIsIldpbmRvdyIsInNldFNraW4iLCJyZW1vdmVDbGFzcyIsImF0dGFjaCIsImJvZHkiLCJkZXRhY2giLCJzdG9wIiwiZmFkZVRvIiwiZmFkZU91dCIsImdldFNjcm9sbERpbWVuc2lvbnMiLCJxdWV1ZXMiLCJwYWdlcyIsIl90cmFja2luZyIsIl9maXJzdCIsInRpbWVycyIsIl9ib3giLCJfcGFnZXMiLCJfdGh1bWJuYWlscyIsIlRodW1ibmFpbHMiLCJTcGlubmVyIiwiVUkiLCJfYXR0YWNoZWQiLCJfc2tpbiIsInNldFNob3dpbmdUeXBlIiwiX3Nob3dpbmdUeXBlIiwic3RhcnRPYnNlcnZpbmdSZXNpemUiLCJfb25XaW5kb3dSZXNpemVIYW5kbGVyIiwiX29uV2luZG93UmVzaXplIiwic3RvcE9ic2VydmluZ1Jlc2l6ZSIsIm9mZiIsIl9vblNjcm9sbCIsImFkanVzdFRvU2Nyb2xsIiwiZml0VG9WaWV3cG9ydCIsInVwZGF0ZUJveERpbWVuc2lvbnMiLCJmaXRUb0JveCIsInVwZGF0ZSIsImFkanVzdFByZXZOZXh0IiwiY2VudGVyIiwidG9wIiwic2Nyb2xsVG9wIiwiZ2V0Qm94RGltZW5zaW9ucyIsIl9ib3hEaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsIl9vcmllbnRhdGlvbiIsIl9ib3hQb3NpdGlvbiIsIm9wZW5pbmciLCJfc2hvdyIsInF1ZXVlIiwiZGlzYWJsZSIsIktleWJvYXJkIiwiX2hpZGUiLCJfcmVzZXQiLCJyZW1vdmVBbGwiLCJfcG9zaXRpb24iLCJhZnRlckhpZGUiLCJjbG9zaW5nIiwidmlld3MiLCJzZXRQb3NpdGlvbiIsInN0b3BIaWRlUXVldWUiLCJyZXNldCIsIm1heVByZXZpb3VzIiwicHJldmlvdXMiLCJnZXRTdXJyb3VuZGluZ0luZGV4ZXMiLCJtYXlOZXh0IiwibmV4dCIsImVuYWJsZWQiLCJrZXlDb2RlIiwiZW5hYmxlIiwiX29uS2V5RG93bkhhbmRsZXIiLCJvbktleURvd24iLCJfb25LZXlVcEhhbmRsZXIiLCJvbktleVVwIiwiZ2V0S2V5QnlLZXlDb2RlIiwiUGFnZSIsIkxjIiwiTWMiLCJOYyIsIk9jIiwidWlkIiwiX3RvdGFsIiwiX2Z1bGxDbGljayIsIl92aXNpYmxlIiwic2hvd2hpZGUiLCJfY3JlYXRlZCIsIm9wYWNpdHkiLCJjYXB0aW9uIiwiaW5mbyIsImNsb25lIiwiaW5mb1BhZGRlciIsInBvcyIsImh0bWwiLCJiYWNrZ3JvdW5kIiwiYXR0ciIsInBvc2l0aW9uT3V0c2lkZSIsInByZXZpb3VzSW5zaWRlIiwibmV4dEluc2lkZSIsImNsb3NlSW5zaWRlIiwiZ3JvdXBlZCIsImluZm9JbnNpZGUiLCJpbmZvUGFkZGVySW5zaWRlIiwicG9zSW5zaWRlIiwiY2FwdGlvbkluc2lkZSIsInBvc2l0aW9uSW5zaWRlIiwiX2dldFN1cnJvdW5kaW5nUGFnZXMiLCJwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXMiLCJwcmVsb2FkaW5nIiwicHJlbG9hZGVkIiwibG9hZGVkIiwicHJlbG9hZFJlYWR5IiwibG9hZGluZyIsIl9zcGlubmVyRGVsYXkiLCJpbWFnZVJlYWR5IiwiX21hcmtBc0xvYWRlZCIsInNldERpbWVuc2lvbnMiLCJwcmVwZW5kIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwidmltZW9SZWFkeSIsIl9hYm9ydFNwaW5uZXJEZWxheSIsImluc2VydFZpZGVvIiwicGxheWVySWZyYW1lIiwicGFyYW0iLCJfZGF0YSIsIl9jb250ZW50RGltZW5zaW9ucyIsImZyYW1lYm9yZGVyIiwicmFpc2UiLCJsYXN0Q2hpbGQiLCJzdG9wSW5hY3RpdmUiLCJ1cGRhdGVVSSIsIl91aSIsImhpZGVJbmFjdGl2ZSIsIm9uU2hvdyIsImFmdGVyUG9zaXRpb24iLCJyZW1vdmVWaWRlbyIsInJlbW92ZVRyYWNraW5nIiwiX3RyYWNrIiwicmVtb3ZlZCIsIl9nZXRJbmZvSGVpZ2h0IiwiX3doaWxlVmlzaWJsZSIsImlzIiwiaGFzQ2xhc3MiLCJ2aXNpYmlsaXR5IiwidXBkYXRlRm9yY2VkIiwiZnVsbENsaWNrIiwiX25vT3ZlcmZsb3ciLCJwYXJzZUludCIsIl9wb3NpdGlvbk91dHNpZGUiLCJsIiwidSIsImMiLCJwIiwibSIsInYiLCJnIiwiX2luZm9IZWlnaHQiLCJfcGFkZGluZyIsIl9iYWNrZ3JvdW5kRGltZW5zaW9ucyIsImJvdHRvbSIsImdldFhZUCIsInJlbW92ZUF0dHIiLCJmaW5kIiwiZ2V0UG9zaXRpb25JbkFjdGl2ZVBhZ2VHcm91cCIsImdldExvYWRpbmdDb3VudCIsImhhbmRsZVRyYWNraW5nIiwic2V0WFkiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlUG9zaXRpb25zIiwiX3RyYWNraW5nX3RpbWVyIiwiY2xlYXJUcmFja2luZ1RpbWVyIiwic3RhcnRUcmFja2luZyIsIl9oYW5kbGVUcmFja2luZyIsInN0b3BUcmFja2luZyIsInNldFRyYWNraW5nIiwiaXNUcmFja2luZyIsImNsZWFyVHJhY2tpbmciLCJncmVwIiwiX3h5Iiwic2V0WFlQIiwiX3h5cCIsIlZpZXciLCJvYmplY3QiLCJncm91cCIsImV2YWwiLCJzdXBwb3J0ZWQiLCJ1cGRhdGVEaW1lbnNpb25zIiwiX2RpbWVuc2lvbnMiLCJfRnJlc2NvIiwiX2Rpc2FibGVkIiwiX2ZhbGxiYWNrIiwic3RhcnREZWxlZ2F0aW5nIiwiX2RlbGVnYXRlSGFuZGxlciIsImRlbGVnYXRlIiwiX3NldENsaWNrWFlIYW5kbGVyIiwic2V0Q2xpY2tYWSIsInN0b3BEZWxlZ2F0aW5nIiwic2hvd0ZhbGxiYWNrIiwib2JqZWN0X3R5cGUiLCJfZGdvIiwiZ3JvdXBPcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJncm91cEV4dGVuZCIsImZpcnN0VUkiLCJwb3NpdGlvbkluQVBHIiwic2V0RGVmYXVsdFNraW4iLCJfdmFycyIsInRodW1ibmFpbEZyYW1lIiwic3RhcnRPYnNlcnZpbmciLCJ3cmFwcGVyIiwiX3NsaWRlciIsIl9wcmV2aW91cyIsIl9wcmV2aW91c19idXR0b24iLCJfdGh1bWJzIiwiX3NsaWRlIiwiX25leHQiLCJfbmV4dF9idXR0b24iLCJzZXRBY3RpdmUiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInNldE9yaWVudGF0aW9uIiwiX2Rpc2FibGVkR3JvdXAiLCJUaHVtYm5haWwiLCJfcGFnZSIsImRpc2FibGVkIiwidXBkYXRlVmFycyIsInciLCJwYWRkaW5nVG9wIiwic2lkZXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiIiwiayIsIkMiLCJXIiwiTSIsIlQiLCJmbG9vciIsIkkiLCJpcHAiLCJyb3VuZCIsIl9tb2RlIiwiY2VpbCIsInRodW1icyIsInJlc2l6ZSIsIm1vdmVUbyIsIm1vdmVUb1BhZ2UiLCJhbmltYXRlIiwibG9hZEN1cnJlbnRQYWdlIiwiYWN0aXZhdGUiLCJyZWZyZXNoIiwicHJlQnVpbGQiLCJ0aHVtYm5haWxXcmFwcGVyIiwiaWNvbiIsInJlYWR5IiwidmltZW9UaHVtYm5haWwiLCJfbG9hZGluZyIsIl9yZW1vdmVkIiwiX2NsZWFyRGVsYXkiLCJfbG9hZGVkIiwiX3VybCIsIl9sb2FkIiwiX2Vycm9yIiwiZmFkZUluU3Bpbm5lciIsIl9tb2RlcyIsIl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IiLCJfZW5hYmxlZCIsImZ1bGxjbGljayIsIl9zY3JvbGxMZWZ0IiwiX2Nsb3NlIiwiX29uTW91c2VNb3ZlIiwidW5iaW5kIiwiX3giLCJfeSIsInJlc2V0UHJldk5leHQiLCJfb25Nb3VzZUxlYXZlIiwiX29uTW91c2VVcEhhbmRsZXIiLCJfb25Nb3VzZVVwIiwiX3Nob3dIYW5kbGVyIiwiX2hpZGVIYW5kbGVyIiwiX21vdXNlbW92ZUhhbmRsZXIiLCJfaG92ZXJpbmdTaWRlQnV0dG9uIiwic3RhcnRUaW1lciIsIl9vbk1vdXNlTW92ZUhhbmRsZXIiLCJfb25Nb3VzZUxlYXZlSGFuZGxlciIsIl9vbk1vdXNlRW50ZXJIYW5kbGVyIiwiX29uTW91c2VFbnRlciIsIl9vblNpZGVNb3VzZUVudGVySGFuZGxlciIsIl9vblNpZGVNb3VzZUVudGVyIiwiX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyIiwiX29uU2lkZU1vdXNlTGVhdmUiLCJfb25TY3JvbGxIYW5kbGVyIiwic2Nyb2xsTGVmdCIsIl9nZXRFdmVudFNpZGUiLCJfaG92ZXJpbmdTaWRlIiwiX21heUNsaWNrSG92ZXJpbmdTaWRlIiwid2hpY2giLCJjbGVhclRpbWVyIiwiaW5zaWRlIiwiX2RlbGVnYXRlT3ZlcmxheUNsb3NlSGFuZGxlciIsIl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSIsIm91dHNpZGUiLCJyZXNpemVNYWluQ29udGFpbmVyIiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInJlcGxhY2VDYXJvdXNlbEFycm93IiwiY2Fyb3VzZWxFbGVtZW50IiwiaW1nU2xpZGVySGVpZ2h0IiwiYXJyb3dUb3BWYWx1ZSIsIm5vdCIsInJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCIsImpRdWVyeSIsImNyZWF0ZUNhcm91c2VsIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIm1vYmlsZUZpcnN0Iiwib3B0cyIsInNsaWRlciIsInVuc2xpY2tlZCIsImNyZWF0ZUdhbGxlcnlEZXNrdG9wIiwiaW1hZ2VzIiwiaW5kZXgiLCJoZWlnaHRDb250ZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicHJvZHVjdEZ1bmN0aW9ucyIsImJ1bmRsZUl0ZW0iLCJhZGRUb0NhcnRGb3JtIiwic2VsZWN0ZWRTaXplIiwiYnVuZGxlSXRlbXNDb3VudCIsImZpbHRlclByb2R1Y3RGdW5jdGlvbnMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImNyaXRlcmlhIiwicHJpY2VJbnB1dCIsInByaWNlU2xpZGVyIiwicHJpY2VTbGlkZXJNb2JpbGUiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VNaW5Nb2JpbGUiLCJwcmljZU1heE1vYmlsZSIsInRheG9uTWluUHJpY2UiLCJmaXJzdCIsInRheG9uTWF4UHJpY2UiLCJyYW5nZVNsaWRlck9wdGlvbnMiLCJzdGFydCIsInJhbmdlIiwic3RlcCIsImNvbm5lY3QiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJiZWhhdmlvdXIiLCJ0b29sdGlwcyIsInByaWNlUmFuZ2UiLCJub1VpU2xpZGVyIiwibmV3VmFsdWUiLCJwcmljZVJhbmdlTW9iaWxlIiwiaXNOYU4iLCJmcm9tQ2hhckNvZGUiLCJuZXdWYWx1ZU1vYmlsZSIsInNpemVGaWx0ZXJJbnB1dCIsImlucHV0VG9DaGVjayIsImNoZWNrUHJpY2VWYWx1ZSIsInN1Ym1pdCIsInJlc2l6ZUZpbHRlck1vYmlsZU1lbnUiLCJoZWFkZXJPdXRlckhlaWdodCIsInByaWNlU2xpZGVyT2JqZWN0IiwicHJpY2VNaW5WYWx1ZSIsInByaWNlTWF4VmFsdWUiLCJuYXZiYXJDb2xsYXBzZUluaXQiLCJjb2xsYXBzZSIsIm1lZ2FtZW51RnVuY3Rpb25zIiwiY2xvc2VNb2JpbGVNZW51Iiwib3Blbk1vYmlsZU1lbnUiLCJkZXZlbG9wTW9iaWxlTWVudSIsIm1lbnVJY29uZXNGdW5jdGlvbnMiLCJwcm9kdWN0Q29udGFpbmVySGVpZ2h0IiwicmVzaXplTWVudSIsImhlYWRlckhlaWdodCIsImZpbHRlckxpc3RDb250YWluZXJIZWlnaHQiLCJvZmZjYW52YXNfaWQiLCJkaXZUb09wZW4iLCJsb2dpbkZ1bmN0aW9ucyIsImZvcm1FbGVtZW50IiwiYWpheCIsInNlcmlhbGl6ZSIsInRleHQiLCJwYXJzZUhUTUwiLCJyZXNwb25zZVRleHQiLCJyZWdleCIsInJlZ2lzdGVyRm9ybSIsImludmFsaWRTcGFuIiwicHJldiIsImNvbnRhY3RQYWdlRnVuY3Rpb24iLCJtb2RhbCIsInByb3AiLCJzdGF0dXMiLCJlcnJvckxpc3QiLCJ0b0FycmF5Iiwib3V0ZXJUZXh0IiwiY2xhc3NOYW1lIiwiYWZ0ZXIiLCJjb25zb2xlIiwibG9nIiwic2hhcmVGdW5jdGlvbnMiLCJ0b29sdGlwIiwid2luVG9wIiwic2NyZWVuIiwid2luTGVmdCIsIm9wZW4iLCJjbGljayIsImNvcHlUZXh0IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWFpbFRvIiwibWFpbHRvIiwiY2FydEZ1bmN0aW9ucyIsImJvbnVzUG9pbnRzIiwiY291cG9uIiwibmV3UXR5IiwiaW5wdXRRdHlOYW1lIiwib3JkZXJzR3JpZEZ1bmN0aW9ucyIsImxvZ2luUGFnZUZ1bmN0aW9ucyIsIm1vZGFsSWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2xpZ2h0Ym94IiwiZWxlbSIsInNhdmVCdXR0b24iLCJjYW5jZWxCdG4iLCJjaGVja291dCIsIm1haW5GdW5jdGlvbnMiLCJhZGRyZXNzVHlwZU1hbmFnZSIsInNldEFkZHJlc3NDYXJvdXNlbCIsInNldENob29zZU5ld0FkZHJlc3MiLCJjbGFzc0xpc3RCdG4iLCJmaWVsZE5hbWUiLCJ0b1NhdmUiLCJ0b1JlcGxhY2UiLCJjaGVja291dFNhdmVBZGRyZXNzIiwiaGlkZUNoYW5nZUFkZHJlc3MiLCJoaWRlU2F2ZUFkZHJlc3NGb3JtIiwiY2FuY2VsQ2hhbmdlQWRkcmVzcyIsImNob29zZUFkZHJlc3MiLCJhZGRyZXNzVHlwZSIsImZpZWxkU2VsZWN0b3IiLCJmb3JtRmllbGQiLCJjaG9zZW5BZGRyZXNzVGV4dCIsInN1YnN0cmluZyIsInRyaW0iLCJmaWxsT3RoZXJBZGRyZXNzIiwiZGF0YVN1Y2Nlc3NEaXYiLCJmb3JtRmllbGROYW1lIiwiZmllbGRUb1JlcGxhY2UiLCJmaWVsZEVycm9yIiwib3RoZXJBZGRyZXNzVHlwZSIsImRhdGFUb0ZpbGwiLCJvbGREYXRhIiwiZmllbGROYW1lcyIsImtleXMiLCJ0ZXh0VG9SZXBsYWNlIiwicm93cyIsInNsaWRlc1BlclJvdyIsImFkYXB0aXZlSGVpZ2h0IiwiYnRuRWxlbWVudCIsInNlbGVjdG9yVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUF1QkFBLDRCQUFRQyxHQUFSLENBQVlDLGNBQVosRUFBb0JDLGtDQUFwQixFQUFzQ0MsNEJBQXRDLEVBQXFEQyxnQkFBckQsRUFBOERDLHdDQUE5RCxFQUFtRkMsMEJBQW5GLEVBQWlHQyx3QkFBakcsRUFBOEdDLDhCQUE5RyxFQUE4SEMsMEJBQTlILEVBQTRJQywwQkFBNUksRUFBMEpDLGNBQTFKLEVBQWtLQyw4QkFBbEssRUFBa0xDLGtCQUFsTCxFQUE0TEMsc0JBQTVMLEVBQXdNQyxnQkFBeE0sRUFBaU5DLGtCQUFqTixFQUEyTkMsY0FBM04sRUFBbU9DLHdCQUFuTyxFQUFn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Ozs7Ozs7Ozs7OztBQ0F4RDtBQUFlLDhHQUErQyxFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0F4RDtBQUFlLDBHQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSwwR0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUsaUhBQWtELEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLHFIQUFzRCxFOzs7Ozs7Ozs7Ozs7QUNBckU7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBeEQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuXG5saWJyYXJ5LmFkZChmYVN0YXIsIGZhUXVlc3Rpb25DaXJjbGUsIGZhU2hvcHBpbmdCYWcsIGZhQ2hlY2ssIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFDaGV2cm9uVXAsIGZhTWFwTWFya2VyQWx0LCBmYVNodXR0bGVWYW4sIGZhQ3JlZGl0Q2FyZCwgZmFGbGFnLCBmYUNjTWFzdGVyY2FyZCwgZmFDY1Zpc2EsIGZhQ2NQYXlwYWwsIGZhVGltZXMsIGZhU2VhcmNoLCBmYVBsdXMsIGZhUGVuY2lsQWx0LCBmYVN5bmNBbHQpO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlLmVycm9ycztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCIvKiBKUyBwbHVnaW5zICovXG5pbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgJy4vaW5kZXhCb290c3RyYXBUaGVtZSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XG5cbi8qIENzcyBmaWxlcyAqL1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG4vKiBNZWRpYSBmaWxlcyAqL1xuaW1wb3J0ICcuL21lZGlhL2xvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9yZXR1cm4tcG9saWN5LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvZGVsaXZlcnktdHJ1Y2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jYXJkLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbWFzdGVyY2FyZC5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Zpc2EucG5nJztcbmltcG9ydCAnLi9tZWRpYS9wYXlwYWwucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jb2xpc3NpbW8ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9jaHJvbm9wb3N0LnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvbW9uZGlhbC1yZWxheS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2FjY291bnQtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3Nob3BwaW5nLWJhZy1pY29uLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvYmFjay5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL25leHQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWZyLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1kZS5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2ljb24taXQucG5nJztcbmltcG9ydCAnLi9tZWRpYS9pY29uLWVzLnBuZyc7XG5pbXBvcnQgJy4vbWVkaWEvaWNvbi1lbi5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL3JlbG9hZC5wbmcnO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbndpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUNvbnRlbnQ7XG5cbiIsIi8qKlxuICogRnJlc2NvIC0gQSBCZWF1dGlmdWwgUmVzcG9uc2l2ZSBMaWdodGJveCAtIHYyLjMuMFxuICogKGMpIDIwMTItMjAxOSBOaWNrIFN0YWtlbmJ1cmdcbiAqXG4gKiBodHRwczovL3d3dy5mcmVzY29qcy5jb21cbiAqXG4gKiBAbGljZW5zZTogaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMFxuICovXG4hZnVuY3Rpb24oaSxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkuRnJlc2NvPWUoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbigkKXt2YXIgRnJlc2NvPXt9OyQuZXh0ZW5kKEZyZXNjbyx7dmVyc2lvbjpcIjIuMy4wXCJ9KSxGcmVzY28uU2tpbnM9e2ZyZXNjbzp7fX07dmFyIEJvdW5kcz17dmlld3BvcnQ6ZnVuY3Rpb24oKXt2YXIgaT17d2lkdGg6JCh3aW5kb3cpLndpZHRoKCl9O2lmKEJyb3dzZXIuTW9iaWxlU2FmYXJpfHxCcm93c2VyLkFuZHJvaWQmJkJyb3dzZXIuR2Vja28pe3ZhciBlPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC93aW5kb3cuaW5uZXJXaWR0aDtpLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQqZX1lbHNlIGkuaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTtyZXR1cm4gaX19LEJyb3dzZXI9KGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx7SUU6ISghd2luZG93LmF0dGFjaEV2ZW50fHwtMSE9PWUuaW5kZXhPZihcIk9wZXJhXCIpKSYmZihcIk1TSUUgXCIpLE9wZXJhOi0xPGUuaW5kZXhPZihcIk9wZXJhXCIpJiYoISF3aW5kb3cub3BlcmEmJm9wZXJhLnZlcnNpb24mJnBhcnNlRmxvYXQob3BlcmEudmVyc2lvbigpKXx8Ny41NSksV2ViS2l0Oi0xPGUuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmZihcIkFwcGxlV2ViS2l0L1wiKSxHZWNrbzotMTxlLmluZGV4T2YoXCJHZWNrb1wiKSYmLTE9PT1lLmluZGV4T2YoXCJLSFRNTFwiKSYmZihcInJ2OlwiKSxNb2JpbGVTYWZhcmk6ISFlLm1hdGNoKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvKSxDaHJvbWU6LTE8ZS5pbmRleE9mKFwiQ2hyb21lXCIpJiZmKFwiQ2hyb21lL1wiKSxDaHJvbWVNb2JpbGU6LTE8ZS5pbmRleE9mKFwiQ3JNb1wiKSYmZihcIkNyTW8vXCIpLEFuZHJvaWQ6LTE8ZS5pbmRleE9mKFwiQW5kcm9pZFwiKSYmZihcIkFuZHJvaWQgXCIpLElFTW9iaWxlOi0xPGUuaW5kZXhPZihcIklFTW9iaWxlXCIpJiZmKFwiSUVNb2JpbGUvXCIpfSksZTtmdW5jdGlvbiBmKGkpe3ZhciB0PW5ldyBSZWdFeHAoaStcIihbXFxcXGQuXSspXCIpLmV4ZWMoZSk7cmV0dXJuIXR8fHBhcnNlRmxvYXQodFsxXSl9dmFyIF9zbGljZT1BcnJheS5wcm90b3R5cGUuc2xpY2U7ZnVuY3Rpb24gYmFzZVRvU3RyaW5nKGkpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBpP2k6bnVsbD09aT9cIlwiOmkrXCJcIn12YXIgXz17aXNFbGVtZW50OmZ1bmN0aW9uKGkpe3JldHVybiBpJiYxPT09aS5ub2RlVHlwZX0sU3RyaW5nOntjYXBpdGFsaXplOmZ1bmN0aW9uKGkpe3JldHVybihpPWJhc2VUb1N0cmluZyhpKSkmJmkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkraS5zbGljZSgxKX19fTskKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsZnVuY3Rpb24oaSl7dmFyIGU7aWYoaS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE/ZT1pLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YS8xMjA6aS5vcmlnaW5hbEV2ZW50LmRldGFpbCYmKGU9LWkub3JpZ2luYWxFdmVudC5kZXRhaWwvMyksZSl7dmFyIHQ9JC5FdmVudChcImZyZXNjbzptb3VzZXdoZWVsXCIpOyQoaS50YXJnZXQpLnRyaWdnZXIodCxlKSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmkuc3RvcFByb3BhZ2F0aW9uKCksdC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmaS5wcmV2ZW50RGVmYXVsdCgpfX0pO3ZhciBGaXQ9e3dpdGhpbjpmdW5jdGlvbihpLGUpe2Zvcih2YXIgdD0kLmV4dGVuZCh7aGVpZ2h0OiEwLHdpZHRoOiEwfSxhcmd1bWVudHNbMl18fHt9KSxzPSQuZXh0ZW5kKHt9LGUpLG49MSxvPTUsYT10LndpZHRoLGg9dC5oZWlnaHQ7MDxvJiYoYSYmcy53aWR0aD5pLndpZHRofHxoJiZzLmhlaWdodD5pLmhlaWdodCk7KXt2YXIgcj0xLGQ9MTthJiZzLndpZHRoPmkud2lkdGgmJihyPWkud2lkdGgvcy53aWR0aCksaCYmcy5oZWlnaHQ+aS5oZWlnaHQmJihkPWkuaGVpZ2h0L3MuaGVpZ2h0KSxuPU1hdGgubWluKHIsZCkscz17d2lkdGg6ZS53aWR0aCpuLGhlaWdodDplLmhlaWdodCpufSxvLS19cmV0dXJuIHMud2lkdGg9TWF0aC5tYXgocy53aWR0aCwwKSxzLmhlaWdodD1NYXRoLm1heChzLmhlaWdodCwwKSxzfX07JC5leHRlbmQoJC5lYXNpbmcse2ZyZXNjb0Vhc2VJbkN1YmljOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqKGUvPW4pKmUqZSt0fSxmcmVzY29FYXNlSW5TaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuLXMqTWF0aC5jb3MoZS9uKihNYXRoLlBJLzIpKStzK3R9LGZyZXNjb0Vhc2VPdXRTaW5lOmZ1bmN0aW9uKGksZSx0LHMsbil7cmV0dXJuIHMqTWF0aC5zaW4oZS9uKihNYXRoLlBJLzIpKSt0fX0pO3ZhciBTdXBwb3J0PShPPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUD1cIldlYmtpdCBNb3ogTyBtcyBLaHRtbFwiLnNwbGl0KFwiIFwiKSx7Y2FudmFzOihiYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCEoIWJhLmdldENvbnRleHR8fCFiYS5nZXRDb250ZXh0KFwiMmRcIikpKSxjc3M6e2FuaW1hdGlvbjpTKFwiYW5pbWF0aW9uXCIpLHRyYW5zZm9ybTpTKFwidHJhbnNmb3JtXCIpLHByZWZpeGVkOmZ1bmN0aW9uKGkpe3JldHVybiBTKGksXCJwcmVmaXhcIil9fSxzdmc6ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJiEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5jcmVhdGVTVkdSZWN0LHRvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiEhKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpfWNhdGNoKGkpe3JldHVybiExfX0oKX0pLGJhLE8sUDtmdW5jdGlvbiBTKGksZSl7dmFyIHQ9aS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStpLnN1YnN0cigxKTtyZXR1cm4gZnVuY3Rpb24oaSxlKXtmb3IodmFyIHQgaW4gaSlpZih2b2lkIDAhPT1PLnN0eWxlW2lbdF1dKXJldHVyblwicHJlZml4XCIhPT1lfHxpW3RdO3JldHVybiExfSgoaStcIiBcIitQLmpvaW4odCtcIiBcIikrdCkuc3BsaXQoXCIgXCIpLGUpfVN1cHBvcnQuZGV0ZWN0TW9iaWxlVG91Y2g9ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoPVN1cHBvcnQudG91Y2gmJihCcm93c2VyLk1vYmlsZVNhZmFyaXx8QnJvd3Nlci5BbmRyb2lkfHxCcm93c2VyLklFTW9iaWxlfHxCcm93c2VyLkNocm9tZU1vYmlsZXx8IS9eKFdpbnxNYWN8TGludXgpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpfSxTdXBwb3J0LmRldGVjdE1vYmlsZVRvdWNoKCk7dmFyIEltYWdlUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9O2Z1bmN0aW9uIFRpbWVycygpe3JldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxfc2xpY2UuY2FsbChhcmd1bWVudHMpKX1mdW5jdGlvbiBnZXRVUklEYXRhKHMpe3ZhciBuPXt0eXBlOlwiaW1hZ2VcIn07cmV0dXJuICQuZWFjaChUeXBlcyxmdW5jdGlvbihpLGUpe3ZhciB0PWUuZGF0YShzKTt0JiYoKG49dCkudHlwZT1pLG4udXJsPXMpfSksbn1mdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24oaSl7dmFyIGU9KGl8fFwiXCIpLnJlcGxhY2UoL1xcPy4qL2csXCJcIikubWF0Y2goL1xcLihbXi5dezMsNH0pJC8pO3JldHVybiBlP2VbMV0udG9Mb3dlckNhc2UoKTpudWxsfSQuZXh0ZW5kKEltYWdlUmVhZHkucHJvdG90eXBlLHtzdXBwb3J0czp7bmF0dXJhbFdpZHRoOlwibmF0dXJhbFdpZHRoXCJpbiBuZXcgSW1hZ2V9LGluaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMuaW1nPSQoaSlbMF0sdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmlzTG9hZGVkPSExLHRoaXMub3B0aW9ucz0kLmV4dGVuZCh7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCIscG9sbEZhbGxiYWNrQWZ0ZXI6MWUzfSxhcmd1bWVudHNbM118fHt9KSx0aGlzLnN1cHBvcnRzLm5hdHVyYWxXaWR0aCYmXCJvbmxvYWRcIiE9PXRoaXMub3B0aW9ucy5tZXRob2Q/dGhpcy5pbWcuY29tcGxldGUmJlwidW5kZWZpbmVkXCIhPT0kLnR5cGUodGhpcy5pbWcubmF0dXJhbFdpZHRoKT9zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKXswPHRoaXMuaW1nLm5hdHVyYWxXaWR0aD90aGlzLnN1Y2Nlc3MoKTp0aGlzLmVycm9yKCl9LHRoaXMpKTooJCh0aGlzLmltZykuYmluZChcImVycm9yXCIsJC5wcm94eShmdW5jdGlvbigpe3NldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZXJyb3IoKX0sdGhpcykpfSx0aGlzKSksdGhpcy5pbnRlcnZhbHM9W1sxZTMsMTBdLFsyZTMsNTBdLFs0ZTMsMTAwXSxbMmU0LDUwMF1dLHRoaXMuX2lwb3M9MCx0aGlzLl90aW1lPTAsdGhpcy5fZGVsYXk9dGhpcy5pbnRlcnZhbHNbdGhpcy5faXBvc11bMV0sdGhpcy5wb2xsKCkpOnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmZhbGxiYWNrLHRoaXMpKX0scG9sbDpmdW5jdGlvbigpe3RoaXMuX3BvbGxpbmc9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7aWYoMDx0aGlzLmltZy5uYXR1cmFsV2lkdGgpdGhpcy5zdWNjZXNzKCk7ZWxzZXtpZih0aGlzLl90aW1lKz10aGlzLl9kZWxheSx0aGlzLm9wdGlvbnMucG9sbEZhbGxiYWNrQWZ0ZXImJnRoaXMuX3RpbWU+PXRoaXMub3B0aW9ucy5wb2xsRmFsbGJhY2tBZnRlciYmIXRoaXMuX3VzZWRQb2xsRmFsbGJhY2smJih0aGlzLl91c2VkUG9sbEZhbGxiYWNrPSEwLHRoaXMuZmFsbGJhY2soKSksdGhpcy5fdGltZT50aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVswXSl7aWYoIXRoaXMuaW50ZXJ2YWxzW3RoaXMuX2lwb3MrMV0pcmV0dXJuIHZvaWQgdGhpcy5lcnJvcigpO3RoaXMuX2lwb3MrKyx0aGlzLl9kZWxheT10aGlzLmludGVydmFsc1t0aGlzLl9pcG9zXVsxXX10aGlzLnBvbGwoKX19LHRoaXMpLHRoaXMuX2RlbGF5KX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgaT1uZXcgSW1hZ2U7KHRoaXMuX2ZhbGxiYWNrSW1nPWkpLm9ubG9hZD0kLnByb3h5KGZ1bmN0aW9uKCl7aS5vbmxvYWQ9ZnVuY3Rpb24oKXt9LHRoaXMuc3VwcG9ydHMubmF0dXJhbFdpZHRofHwodGhpcy5pbWcubmF0dXJhbFdpZHRoPWkud2lkdGgsdGhpcy5pbWcubmF0dXJhbEhlaWdodD1pLmhlaWdodCksdGhpcy5zdWNjZXNzKCl9LHRoaXMpLGkub25lcnJvcj0kLnByb3h5KHRoaXMuZXJyb3IsdGhpcyksaS5zcmM9dGhpcy5pbWcuc3JjfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX2ZhbGxiYWNrSW1nJiYodGhpcy5fZmFsbGJhY2tJbWcub25sb2FkPWZ1bmN0aW9uKCl7fSksdGhpcy5fcG9sbGluZyYmKGNsZWFyVGltZW91dCh0aGlzLl9wb2xsaW5nKSx0aGlzLl9wb2xsaW5nPW51bGwpfSxzdWNjZXNzOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkU3VjY2Vzc3x8KHRoaXMuX2NhbGxlZFN1Y2Nlc3M9ITAsdGhpcy5pc0xvYWRlZD0hMCx0aGlzLnN1Y2Nlc3NDYWxsYmFjayh0aGlzKSl9LGVycm9yOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbGVkRXJyb3J8fCh0aGlzLl9jYWxsZWRFcnJvcj0hMCx0aGlzLmFib3J0KCksdGhpcy5lcnJvckNhbGxiYWNrJiZ0aGlzLmVycm9yQ2FsbGJhY2sodGhpcykpfX0pLCQuZXh0ZW5kKFRpbWVycy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl90aW1lcnM9e319LHNldDpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdGltZXJzW2ldPXNldFRpbWVvdXQoZSx0KX0sZ2V0OmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLl90aW1lcnNbaV19LGNsZWFyOmZ1bmN0aW9uKGkpe2k/dGhpcy5fdGltZXJzW2ldJiYoY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyc1tpXSksZGVsZXRlIHRoaXMuX3RpbWVyc1tpXSk6dGhpcy5jbGVhckFsbCgpfSxjbGVhckFsbDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl90aW1lcnMsZnVuY3Rpb24oaSxlKXtjbGVhclRpbWVvdXQoZSl9KSx0aGlzLl90aW1lcnM9e319fSk7dmFyIFR5cGU9e2lzVmlkZW86ZnVuY3Rpb24oaSl7cmV0dXJuL14oeW91dHViZXx2aW1lbykkLy50ZXN0KGkpfX0sVHlwZXM9e2ltYWdlOntleHRlbnNpb25zOlwiYm1wIGdpZiBqcGVnIGpwZyBwbmcgd2VicFwiLGRldGVjdDpmdW5jdGlvbihpKXtyZXR1cm4tMTwkLmluQXJyYXkoZGV0ZWN0RXh0ZW5zaW9uKGkpLHRoaXMuZXh0ZW5zaW9ucy5zcGxpdChcIiBcIikpfSxkYXRhOmZ1bmN0aW9uKGkpe3JldHVybiEhdGhpcy5kZXRlY3QoKSYme2V4dGVuc2lvbjpkZXRlY3RFeHRlbnNpb24oaSl9fX0sdmltZW86e2RldGVjdDpmdW5jdGlvbihpKXt2YXIgZT0vKHZpbWVvXFwuY29tKVxcLyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKTtyZXR1cm4hKCFlfHwhZVsyXSkmJmVbMl19LGRhdGE6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5kZXRlY3QoaSk7cmV0dXJuISFlJiZ7aWQ6ZX19fSx5b3V0dWJlOntkZXRlY3Q6ZnVuY3Rpb24oaSl7dmFyIGU9Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUpXFwvd2F0Y2hcXD8oPz0uKnZpPz0oW2EtekEtWjAtOS1fXSspKSg/OlxcUyspPyQvLmV4ZWMoaSk7cmV0dXJuIGUmJmVbMl0/ZVsyXTohKCEoZT0vKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZSlcXC8odmk/XFwvfHVcXC98ZW1iZWRcXC8pPyhbYS16QS1aMC05LV9dKykoPzpcXFMrKT8kL2kuZXhlYyhpKSl8fCFlWzNdKSYmZVszXX0sZGF0YTpmdW5jdGlvbihpKXt2YXIgZT10aGlzLmRldGVjdChpKTtyZXR1cm4hIWUmJntpZDplfX19fSxWaW1lb1RodW1ibmFpbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoaS5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlLHQpe3RoaXMudXJsPWksdGhpcy5zdWNjZXNzQ2FsbGJhY2s9ZSx0aGlzLmVycm9yQ2FsbGJhY2s9dCx0aGlzLmxvYWQoKX0sbG9hZDpmdW5jdGlvbigpe3ZhciBpPXMuZ2V0KHRoaXMudXJsKTtpZihpKXJldHVybiB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhpLmRhdGEudXJsKTt2YXIgZT1cImh0dHBcIisod2luZG93LmxvY2F0aW9uJiZcImh0dHBzOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sP1wic1wiOlwiXCIpK1wiOlwiLHQ9Z2V0VVJJRGF0YSh0aGlzLnVybCkuaWQ7dGhpcy5feGhyPSQuZ2V0SlNPTihlK1wiLy92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlK1wiLy92aW1lby5jb20vXCIrdCtcIiZjYWxsYmFjaz0/XCIsJC5wcm94eShmdW5jdGlvbihpKXtpZihpJiZpLnRodW1ibmFpbF91cmwpe3ZhciBlPXt1cmw6aS50aHVtYm5haWxfdXJsfTtzLnNldCh0aGlzLnVybCxlKSx0aGlzLnN1Y2Nlc3NDYWxsYmFjayhlLnVybCl9ZWxzZSB0aGlzLmVycm9yQ2FsbGJhY2soKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLFZpbWVvUmVhZHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKCl7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKGkucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSl7dGhpcy51cmw9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5sb2FkKCl9LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT1zLmdldCh0aGlzLnVybCk7aWYoaSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpLmRhdGEpO3ZhciBlPVwiaHR0cFwiKyh3aW5kb3cubG9jYXRpb24mJlwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJzXCI6XCJcIikrXCI6XCIsdD1nZXRVUklEYXRhKHRoaXMudXJsKS5pZDt0aGlzLl94aHI9JC5nZXRKU09OKGUrXCIvL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2UrXCIvL3ZpbWVvLmNvbS9cIit0K1wiJm1heHdpZHRoPTk5OTk5OTkmbWF4aGVpZ2h0PTk5OTk5OTkmY2FsbGJhY2s9P1wiLCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9e2RpbWVuc2lvbnM6e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX07cy5zZXQodGhpcy51cmwsZSksdGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjayhlKX0sdGhpcykpfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuX3hociYmKHRoaXMuX3hoci5hYm9ydCgpLHRoaXMuX3hocj1udWxsKX19KTt2YXIgcz17Y2FjaGU6W10sZ2V0OmZ1bmN0aW9uKGkpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PHRoaXMuY2FjaGUubGVuZ3RoO3QrKyl0aGlzLmNhY2hlW3RdJiZ0aGlzLmNhY2hlW3RdLnVybD09PWkmJihlPXRoaXMuY2FjaGVbdF0pO3JldHVybiBlfSxzZXQ6ZnVuY3Rpb24oaSxlKXt0aGlzLnJlbW92ZShpKSx0aGlzLmNhY2hlLnB1c2goe3VybDppLGRhdGE6ZX0pfSxyZW1vdmU6ZnVuY3Rpb24oaSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNhY2hlLmxlbmd0aDtlKyspdGhpcy5jYWNoZVtlXSYmdGhpcy5jYWNoZVtlXS51cmw9PT1pJiZkZWxldGUgdGhpcy5jYWNoZVtlXX19O3JldHVybiBpfSgpLE9wdGlvbnM9e2RlZmF1bHRzOntlZmZlY3RzOntjb250ZW50OntzaG93OjAsaGlkZTowfSxzcGlubmVyOntzaG93OjE1MCxoaWRlOjE1MH0sd2luZG93OntzaG93OjQ0MCxoaWRlOjMwMH0sdGh1bWJuYWlsOntzaG93OjMwMCxkZWxheToxNTB9LHRodW1ibmFpbHM6e3NsaWRlOjB9fSxrZXlib2FyZDp7bGVmdDohMCxyaWdodDohMCxlc2M6ITB9LGxvYWRlZE1ldGhvZDpcIm5hdHVyYWxXaWR0aFwiLGxvb3A6ITEsb25DbGljazpcInByZXZpb3VzLW5leHRcIixvdmVyZmxvdzohMSxvdmVybGF5OntjbG9zZTohMH0scHJlbG9hZDpbMSwyXSxwb3NpdGlvbjohMCxza2luOlwiZnJlc2NvXCIsc3Bpbm5lcjohMCxzcGlubmVyRGVsYXk6MzAwLHN5bmM6ITAsdGh1bWJuYWlsczpcImhvcml6b250YWxcIix1aTpcIm91dHNpZGVcIix1aURlbGF5OjNlMyx2aW1lbzp7YXV0b3BsYXk6MSxhcGk6MSx0aXRsZToxLGJ5bGluZToxLHBvcnRyYWl0OjAsbG9vcDowfSx5b3V0dWJlOnthdXRvcGxheToxLGNvbnRyb2xzOjEsZW5hYmxlanNhcGk6MSxoZDoxLGl2X2xvYWRfcG9saWN5OjMsbG9vcDowLG1vZGVzdGJyYW5kaW5nOjEscmVsOjAsdnE6XCJoZDEwODBcIn0saW5pdGlhbFR5cGVPcHRpb25zOntpbWFnZTp7fSx2aW1lbzp7d2lkdGg6MTI4MH0seW91dHViZTp7d2lkdGg6MTI4MCxoZWlnaHQ6NzIwfX19LGNyZWF0ZTpmdW5jdGlvbihpLGUsdCl7dD10fHx7fSwoaT1pfHx7fSkuc2tpbj1pLnNraW58fHRoaXMuZGVmYXVsdHMuc2tpbjt2YXIgcz1pLnNraW4/JC5leHRlbmQoe30sRnJlc2NvLlNraW5zW2kuc2tpbl18fEZyZXNjby5Ta2luc1t0aGlzLmRlZmF1bHRzLnNraW5dKTp7fSxuPSQuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMscyk7bi5pbml0aWFsVHlwZU9wdGlvbnMmJihlJiZuLmluaXRpYWxUeXBlT3B0aW9uc1tlXSYmKG49JC5leHRlbmQoITAse30sbi5pbml0aWFsVHlwZU9wdGlvbnNbZV0sbikpLGRlbGV0ZSBuLmluaXRpYWxUeXBlT3B0aW9ucyk7dmFyIG89JC5leHRlbmQoITAse30sbixpKTtpZihTdXBwb3J0Lm1vYmlsZVRvdWNoJiZcImluc2lkZVwiPT09by51aSYmKG8udWk9XCJvdXRzaWRlXCIpLCghby5lZmZlY3RzfHxCcm93c2VyLklFJiZCcm93c2VyLklFPDkpJiYoby5lZmZlY3RzPXt9LCQuZWFjaCh0aGlzLmRlZmF1bHRzLmVmZmVjdHMsZnVuY3Rpb24oZSxpKXskLmVhY2goby5lZmZlY3RzW2VdPSQuZXh0ZW5kKHt9LGkpLGZ1bmN0aW9uKGkpe28uZWZmZWN0c1tlXVtpXT0wfSl9KSxvLnNwaW5uZXI9ITEpLG8ua2V5Ym9hcmQmJihcImJvb2xlYW5cIj09PSQudHlwZShvLmtleWJvYXJkKSYmKG8ua2V5Ym9hcmQ9e30sJC5lYWNoKHRoaXMuZGVmYXVsdHMua2V5Ym9hcmQsZnVuY3Rpb24oaSxlKXtvLmtleWJvYXJkW2ldPSEwfSkpLFwidmltZW9cIiE9PWUmJlwieW91dHViZVwiIT09ZXx8JC5leHRlbmQoby5rZXlib2FyZCx7bGVmdDohMSxyaWdodDohMX0pKSwhby5vdmVyZmxvd3x8U3VwcG9ydC5tb2JpbGVUb3VjaD9vLm92ZXJmbG93PXt4OiExLHk6ITF9OlwiYm9vbGVhblwiPT09JC50eXBlKG8ub3ZlcmZsb3cpJiYoby5vdmVyZmxvdz17eDohMSx5OiEwfSksXCJ2aW1lb1wiIT09ZSYmXCJ5b3V0dWJlXCIhPT1lfHwoby5vdmVybGFwPSExKSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5fHxTdXBwb3J0Lm1vYmlsZVRvdWNoKSYmKG8udGh1bWJuYWlsPSExLG8udGh1bWJuYWlscz0hMSksXCJ5b3V0dWJlXCIhPT1lJiYoby53aWR0aCYmIW8ubWF4V2lkdGgmJihvLm1heFdpZHRoPW8ud2lkdGgpLG8uaGVpZ2h0JiYhby5tYXhIZWlnaHQmJihvLm1heEhlaWdodD1vLmhlaWdodCkpLCFvLnRodW1ibmFpbCYmXCJib29sZWFuXCIhPT0kLnR5cGUoby50aHVtYm5haWwpKXt2YXIgYT0hMTtzd2l0Y2goZSl7Y2FzZVwieW91dHViZVwiOmE9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIitcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiK3QuaWQrXCIvMC5qcGdcIjticmVhaztjYXNlXCJpbWFnZVwiOmNhc2VcInZpbWVvXCI6YT0hMH1vLnRodW1ibmFpbD1hfXJldHVybiBvfX0sT3ZlcmxheT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLnZpc2libGU9ITF9LGJ1aWxkOmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLW92ZXJsYXlcIikuaGlkZSgpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1vdmVybGF5LWJhY2tncm91bmRcIikpLHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2U7aSYmaS52aWV3JiZpLnZpZXcub3B0aW9ucy5vdmVybGF5JiYhaS52aWV3Lm9wdGlvbnMub3ZlcmxheS5jbG9zZXx8V2luZG93LmhpZGUoKX0sdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW1vYmlsZS10b3VjaFwiKSx0aGlzLmVsZW1lbnQub24oXCJmcmVzY286bW91c2V3aGVlbFwiLGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0pfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuc2tpbiYmdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK3RoaXMuc2tpbiksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItb3ZlcmxheS1za2luLVwiK2kpLHRoaXMuc2tpbj1pfSxhdHRhY2g6ZnVuY3Rpb24oKXskKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpfSxkZXRhY2g6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuZGV0YWNoKCl9LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMuYXR0YWNoKCksdGhpcy5tYXgoKTt2YXIgdD1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX19LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpe3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGV8fDAscz0oXCJudW1iZXJcIj09PSQudHlwZShlKT9lOnQpfHwwO3RoaXMuZWxlbWVudC5zdG9wKCEwKS5mYWRlT3V0KHN8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZGV0YWNoKCksdGhpcy52aXNpYmxlPSExLGkmJmkoKX0sdGhpcykpfWVsc2UgaSYmaSgpfSxnZXRTY3JvbGxEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuICQuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGksZSl7dmFyIHQ9ZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpLHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O25bZV09KEJyb3dzZXIuSUU/TWF0aC5tYXgoc1tcIm9mZnNldFwiK3RdLHNbXCJzY3JvbGxcIit0XSk6QnJvd3Nlci5XZWJLaXQ/ZG9jdW1lbnQuYm9keVtcInNjcm9sbFwiK3RdOnNbXCJzY3JvbGxcIit0XSl8fDB9KSxufSxtYXg6ZnVuY3Rpb24oKXt2YXIgaTtpZihCcm93c2VyLk1vYmlsZVNhZmFyaSYmQnJvd3Nlci5XZWJLaXQmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCYmKGk9dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCksdGhpcy5lbGVtZW50LmNzcyhpKSksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5KXt2YXIgZT1Cb3VuZHMudmlld3BvcnQoKTt0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6ZS5oZWlnaHQsd2lkdGg6ZS53aWR0aH0pfVN1cHBvcnQubW9iaWxlVG91Y2gmJiFpJiZ0aGlzLmVsZW1lbnQuY3NzKHtoZWlnaHQ6dGhpcy5nZXRTY3JvbGxEaW1lbnNpb25zKCkuaGVpZ2h0fSl9fSxXaW5kb3c9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcz1bXSx0aGlzLnF1ZXVlcy5oaWRlPSQoe30pLHRoaXMucGFnZXM9W10sdGhpcy5fdHJhY2tpbmc9W10sdGhpcy5fZmlyc3Q9ITAsdGhpcy50aW1lcnM9bmV3IFRpbWVycyx0aGlzLmJ1aWxkKCksdGhpcy5zZXRTa2luKE9wdGlvbnMuZGVmYXVsdHMuc2tpbil9LGJ1aWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXdpbmRvdyBmci1tZWFzdXJlZFwiKS5oaWRlKCkuYXBwZW5kKHRoaXMuX2JveD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1ib3hcIikuYXBwZW5kKHRoaXMuX3BhZ2VzPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VzXCIpKSkuYXBwZW5kKHRoaXMuX3RodW1ibmFpbHM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsc1wiKSksT3ZlcmxheS5pbml0aWFsaXplKCksUGFnZXMuaW5pdGlhbGl6ZSh0aGlzLl9wYWdlcyksVGh1bWJuYWlscy5pbml0aWFsaXplKHRoaXMuX3RodW1ibmFpbHMpLFNwaW5uZXIuaW5pdGlhbGl6ZSgpLFVJLmluaXRpYWxpemUoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmclwiKyhTdXBwb3J0Lm1vYmlsZVRvdWNoP1wiXCI6XCItbm9cIikrXCItbW9iaWxlLXRvdWNoXCIpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyXCIrKFN1cHBvcnQuc3ZnP1wiXCI6XCItbm9cIikrXCItc3ZnXCIpLEJyb3dzZXIuSUUpZm9yKHZhciBpPTc7aTw9OTtpKyspQnJvd3Nlci5JRTxpJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1sdElFXCIraSk7dGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sYXR0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWR8fCgkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLmVsZW1lbnQpLHRoaXMuX2F0dGFjaGVkPSEwKX0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5fYXR0YWNoZWQmJih0aGlzLmVsZW1lbnQuZGV0YWNoKCksdGhpcy5fYXR0YWNoZWQ9ITEpfSxzZXRTa2luOmZ1bmN0aW9uKGkpe3RoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK3RoaXMuX3NraW4pLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy1za2luLVwiK2kpLE92ZXJsYXkuc2V0U2tpbihpKSx0aGlzLl9za2luPWl9LHNldFNob3dpbmdUeXBlOmZ1bmN0aW9uKGkpe3RoaXMuX3Nob3dpbmdUeXBlIT09aSYmKHRoaXMuX3Nob3dpbmdUeXBlJiYodGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItc2hvd2luZy10eXBlLVwiK3RoaXMuX3Nob3dpbmdUeXBlKSxUeXBlLmlzVmlkZW8odGhpcy5fc2hvd2luZ1R5cGUpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci1zaG93aW5nLXR5cGUtdmlkZW9cIikpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS1cIitpKSxUeXBlLmlzVmlkZW8oaSkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXNob3dpbmctdHlwZS12aWRlb1wiKSx0aGlzLl9zaG93aW5nVHlwZT1pKX0sc3RhcnRPYnNlcnZpbmdSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXJ8fCQod2luZG93KS5vbihcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uV2luZG93UmVzaXplLHRoaXMpKX0sc3RvcE9ic2VydmluZ1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuX29uV2luZG93UmVzaXplSGFuZGxlciYmKCQod2luZG93KS5vZmYoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZUhhbmRsZXIpLHRoaXMuX29uV2luZG93UmVzaXplSGFuZGxlcj1udWxsKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaCYmdGhpcy50aW1lcnMuc2V0KFwic2Nyb2xsXCIsJC5wcm94eSh0aGlzLmFkanVzdFRvU2Nyb2xsLHRoaXMpLDApfSxfb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt2YXIgaTsoaT1QYWdlcy5wYWdlKSYmKFRodW1ibmFpbHMuZml0VG9WaWV3cG9ydCgpLHRoaXMudXBkYXRlQm94RGltZW5zaW9ucygpLGkuZml0VG9Cb3goKSxVSS51cGRhdGUoKSxVSS5hZGp1c3RQcmV2TmV4dChudWxsLDApLFNwaW5uZXIuY2VudGVyKCksT3ZlcmxheS5tYXgoKSxVSS5fb25XaW5kb3dSZXNpemUoKSx0aGlzLl9vblNjcm9sbCgpKX0sYWRqdXN0VG9TY3JvbGw6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLmVsZW1lbnQuY3NzKHt0b3A6JCh3aW5kb3cpLnNjcm9sbFRvcCgpfSl9LGdldEJveERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm94RGltZW5zaW9uc30sdXBkYXRlQm94RGltZW5zaW9uczpmdW5jdGlvbigpe2lmKFBhZ2VzLnBhZ2Upe3ZhciBpPUJvdW5kcy52aWV3cG9ydCgpLGU9VGh1bWJuYWlscy5nZXREaW1lbnNpb25zKCksdD1cImhvcml6b250YWxcIj09PVRodW1ibmFpbHMuX29yaWVudGF0aW9uO3RoaXMuX2JveERpbWVuc2lvbnM9e3dpZHRoOnQ/aS53aWR0aDppLndpZHRoLWUud2lkdGgsaGVpZ2h0OnQ/aS5oZWlnaHQtZS5oZWlnaHQ6aS5oZWlnaHR9LHRoaXMuX2JveFBvc2l0aW9uPXt0b3A6MCxsZWZ0OnQ/MDplLndpZHRofSx0aGlzLl9ib3guY3NzKCQuZXh0ZW5kKHt9LHRoaXMuX2JveERpbWVuc2lvbnMsdGhpcy5fYm94UG9zaXRpb24pKX19LHNob3c6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLnZpc2libGUpaSYmaSgpO2Vsc2V7dGhpcy52aXNpYmxlPSEwLHRoaXMub3BlbmluZz0hMCx0aGlzLmF0dGFjaCgpLHRoaXMudGltZXJzLmNsZWFyKFwic2hvdy13aW5kb3dcIiksdGhpcy50aW1lcnMuY2xlYXIoXCJoaWRlLW92ZXJsYXlcIiksdGhpcy5hZGp1c3RUb1Njcm9sbCgpO3ZhciB0PShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy53aW5kb3cuc2hvdyl8fDAscz0yO092ZXJsYXlbUGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub3ZlcmxheT9cInNob3dcIjpcImhpZGVcIl0oZnVuY3Rpb24oKXtpJiYtLXM8MSYmaSgpfSx0KSx0aGlzLnRpbWVycy5zZXQoXCJzaG93LXdpbmRvd1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLl9zaG93KCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLm9wZW5pbmc9ITEsaSYmLS1zPDEmJmkoKX0sdGhpcyksdCl9LHRoaXMpLDE8dD9NYXRoLm1pbiguNSp0LDUwKToxKX19LF9zaG93OmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5zaG93KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMSxpKX0saGlkZTpmdW5jdGlvbihlKXtpZih0aGlzLnZpZXcpe3ZhciBpPXRoaXMucXVldWVzLmhpZGU7aS5xdWV1ZShbXSksdGhpcy50aW1lcnMuY2xlYXIoXCJzaG93LXdpbmRvd1wiKSx0aGlzLnRpbWVycy5jbGVhcihcImhpZGUtb3ZlcmxheVwiKTt2YXIgdD1QYWdlcy5wYWdlP1BhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LmhpZGU6MDtpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7UGFnZXMuc3RvcCgpLFNwaW5uZXIuaGlkZSgpLGkoKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtVSS5kaXNhYmxlKCksVUkuaGlkZShudWxsLHQpLEtleWJvYXJkLmRpc2FibGUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Mjt0aGlzLl9oaWRlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0sdCksdGhpcy50aW1lcnMuc2V0KFwiaGlkZS1vdmVybGF5XCIsJC5wcm94eShmdW5jdGlvbigpe092ZXJsYXkuaGlkZShmdW5jdGlvbigpey0tZTwxJiZpKCl9LHQpfSx0aGlzKSwxPHQ/TWF0aC5taW4oLjUqdCwxNTApOjEpLHRoaXMuX2ZpcnN0PSEwfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX3Jlc2V0KCksdGhpcy5zdG9wT2JzZXJ2aW5nUmVzaXplKCksUGFnZXMucmVtb3ZlQWxsKCksVGh1bWJuYWlscy5jbGVhcigpLHRoaXMudGltZXJzLmNsZWFyKCksdGhpcy5fcG9zaXRpb249LTE7dmFyIGU9UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuYWZ0ZXJIaWRlO1wiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmZS5jYWxsKEZyZXNjbyksdGhpcy52aWV3PW51bGwsdGhpcy5vcGVuaW5nPSExLHRoaXMuY2xvc2luZz0hMSx0aGlzLmRldGFjaCgpLGkoKX0sdGhpcykpLFwiZnVuY3Rpb25cIj09PSQudHlwZShlKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe2UoKSxpKCl9LHRoaXMpKX19LF9oaWRlOmZ1bmN0aW9uKGksZSl7dmFyIHQ9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTpQYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLndpbmRvdy5oaWRlKXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZU91dCh0LGkpfSxsb2FkOmZ1bmN0aW9uKGksZSl7dGhpcy52aWV3cz1pLHRoaXMuYXR0YWNoKCksVGh1bWJuYWlscy5sb2FkKGkpLFBhZ2VzLmxvYWQoaSksdGhpcy5zdGFydE9ic2VydmluZ1Jlc2l6ZSgpLGUmJnRoaXMuc2V0UG9zaXRpb24oZSl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKGksZSl7dGhpcy5fcG9zaXRpb249aSx0aGlzLnZpZXc9dGhpcy52aWV3c1tpLTFdLHRoaXMuc3RvcEhpZGVRdWV1ZSgpLHRoaXMucGFnZT1QYWdlcy5zaG93KGksJC5wcm94eShmdW5jdGlvbigpe2UmJmUoKX0sdGhpcykpfSxzdG9wSGlkZVF1ZXVlOmZ1bmN0aW9uKCl7dGhpcy5xdWV1ZXMuaGlkZS5xdWV1ZShbXSl9LF9yZXNldDpmdW5jdGlvbigpe3RoaXMudmlzaWJsZT0hMSxVSS5oaWRlKG51bGwsMCksVUkucmVzZXQoKX0sbWF5UHJldmlvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3JiZ0aGlzLnZpZXcub3B0aW9ucy5sb29wJiZ0aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RofHwxIT09dGhpcy5fcG9zaXRpb259LHByZXZpb3VzOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMubWF5UHJldmlvdXMoKTsoaXx8ZSkmJnRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRTdXJyb3VuZGluZ0luZGV4ZXMoKS5wcmV2aW91cyl9LG1heU5leHQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnZpZXdzJiYxPHRoaXMudmlld3MubGVuZ3RoO3JldHVybiB0aGlzLnZpZXcmJnRoaXMudmlldy5vcHRpb25zLmxvb3AmJml8fGkmJjEhPT10aGlzLmdldFN1cnJvdW5kaW5nSW5kZXhlcygpLm5leHR9LG5leHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5tYXlOZXh0KCk7KGl8fGUpJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0U3Vycm91bmRpbmdJbmRleGVzKCkubmV4dCl9LGdldFN1cnJvdW5kaW5nSW5kZXhlczpmdW5jdGlvbigpe2lmKCF0aGlzLnZpZXdzKXJldHVybnt9O3ZhciBpPXRoaXMuX3Bvc2l0aW9uLGU9dGhpcy52aWV3cy5sZW5ndGg7cmV0dXJue3ByZXZpb3VzOmk8PTE/ZTppLTEsbmV4dDplPD1pPzE6aSsxfX19LEtleWJvYXJkPXtlbmFibGVkOiExLGtleUNvZGU6e2xlZnQ6MzcscmlnaHQ6MzksZXNjOjI3fSxlbmFibGU6ZnVuY3Rpb24oaSl7dGhpcy5kaXNhYmxlKCksaSYmKCQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHRoaXMuX29uS2V5RG93bkhhbmRsZXI9JC5wcm94eSh0aGlzLm9uS2V5RG93bix0aGlzKSkub24oXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyPSQucHJveHkodGhpcy5vbktleVVwLHRoaXMpKSx0aGlzLmVuYWJsZWQ9aSl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITEsdGhpcy5fb25LZXlVcEhhbmRsZXImJigkKGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiLHRoaXMuX29uS2V5VXBIYW5kbGVyKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duSGFuZGxlciksdGhpcy5fb25LZXlVcEhhbmRsZXI9dGhpcy5fb25LZXlEb3duSGFuZGxlcj1udWxsKX0sb25LZXlEb3duOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZW5hYmxlZCl7dmFyIGU9dGhpcy5nZXRLZXlCeUtleUNvZGUoaS5rZXlDb2RlKTtpZihlJiYoIWV8fCF0aGlzLmVuYWJsZWR8fHRoaXMuZW5hYmxlZFtlXSkpc3dpdGNoKGkucHJldmVudERlZmF1bHQoKSxpLnN0b3BQcm9wYWdhdGlvbigpLGUpe2Nhc2VcImxlZnRcIjpXaW5kb3cucHJldmlvdXMoKTticmVhaztjYXNlXCJyaWdodFwiOldpbmRvdy5uZXh0KCl9fX0sb25LZXlVcDpmdW5jdGlvbihpKXtpZih0aGlzLmVuYWJsZWQpe3ZhciBlPXRoaXMuZ2V0S2V5QnlLZXlDb2RlKGkua2V5Q29kZSk7aWYoZSYmKCFlfHwhdGhpcy5lbmFibGVkfHx0aGlzLmVuYWJsZWRbZV0pKXN3aXRjaChlKXtjYXNlXCJlc2NcIjpXaW5kb3cuaGlkZSgpfX19LGdldEtleUJ5S2V5Q29kZTpmdW5jdGlvbihpKXtmb3IodmFyIGUgaW4gdGhpcy5rZXlDb2RlKWlmKHRoaXMua2V5Q29kZVtlXT09PWkpcmV0dXJuIGU7cmV0dXJuIG51bGx9fSxQYWdlPShMYz0wLE1jPXt9LE5jPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtdG9wIGZyLXN0cm9rZS1ob3Jpem9udGFsXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UtY29sb3JcIikpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLWJvdHRvbSBmci1zdHJva2UtaG9yaXpvbnRhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSkuYWRkKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZSBmci1zdHJva2UtbGVmdCBmci1zdHJva2UtdmVydGljYWxcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXN0cm9rZS1jb2xvclwiKSkpLmFkZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zdHJva2UgZnItc3Ryb2tlLXJpZ2h0IGZyLXN0cm9rZS12ZXJ0aWNhbFwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc3Ryb2tlLWNvbG9yXCIpKSksJC5leHRlbmQoT2MucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKGksZSx0KXt0aGlzLnZpZXc9aSx0aGlzLmRpbWVuc2lvbnM9e3dpZHRoOjAsaGVpZ2h0OjB9LHRoaXMudWlkPUxjKyssdGhpcy5fcG9zaXRpb249ZSx0aGlzLl90b3RhbD10LHRoaXMuX2Z1bGxDbGljaz0hMSx0aGlzLl92aXNpYmxlPSExLHRoaXMucXVldWVzPXt9LHRoaXMucXVldWVzLnNob3doaWRlPSQoe30pfSxjcmVhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fY3JlYXRlZCl7UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBhZ2VcIikuYXBwZW5kKHRoaXMuY29udGFpbmVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNvbnRhaW5lclwiKSkuY3NzKHtvcGFjaXR5OjB9KS5oaWRlKCkpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLnBvc2l0aW9uJiYxPHRoaXMuX3RvdGFsO2lmKGkmJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSwodGhpcy52aWV3LmNhcHRpb258fGkpJiYodGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmluZm89JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mb1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmKHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLWhhcy1wb3NpdGlvblwiKSx0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMucG9zPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uXCIpLmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tdGV4dFwiKS5odG1sKHRoaXMuX3Bvc2l0aW9uK1wiIC8gXCIrdGhpcy5fdG90YWwpKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXIuYXBwZW5kKHRoaXMuY2FwdGlvbj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYmFja2dyb3VuZD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWJhY2tncm91bmRcIikpLmFwcGVuZCh0aGlzLmNvbnRlbnQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY29udGVudFwiKSksXCJpbWFnZVwiPT10aGlzLnZpZXcudHlwZSYmKHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5pbWFnZT0kKFwiPGltZz5cIikuYWRkQ2xhc3MoXCJmci1jb250ZW50LWVsZW1lbnRcIikuYXR0cih7c3JjOnRoaXMudmlldy51cmx9KSksdGhpcy5jb250ZW50LmFwcGVuZChOYy5jbG9uZSghMCkpKSxpJiZcIm91dHNpZGVcIj09dGhpcy52aWV3Lm9wdGlvbnMudWkmJnRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc2l0aW9uT3V0c2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLFwiaW5zaWRlXCI9PXRoaXMudmlldy5vcHRpb25zLnVpKXt0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucHJldmlvdXNJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLm5leHRJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuY2xvc2VJbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jbG9zZS1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtaWNvblwiKSkpLCh0aGlzLnZpZXcuY2FwdGlvbnx8aSYmdGhpcy52aWV3Lmdyb3VwZWQuY2FwdGlvbikmJih0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuaW5mb0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1pbmZvIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItaW5mby1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoTmMuY2xvbmUoITApKS5hcHBlbmQodGhpcy5pbmZvUGFkZGVySW5zaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWluZm8tcGFkZGVyXCIpKSksaSYmdGhpcy5pbmZvUGFkZGVySW5zaWRlLmFwcGVuZCh0aGlzLnBvc0luc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvblwiKS5hcHBlbmQoJChcIjxzcGFuPlwiKS5hZGRDbGFzcyhcImZyLXBvc2l0aW9uLXRleHRcIikuaHRtbCh0aGlzLl9wb3NpdGlvbitcIiAvIFwiK3RoaXMuX3RvdGFsKSkpLHRoaXMudmlldy5jYXB0aW9uJiZ0aGlzLmluZm9QYWRkZXJJbnNpZGUuYXBwZW5kKHRoaXMuY2FwdGlvbkluc2lkZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1jYXB0aW9uXCIpLmh0bWwodGhpcy52aWV3LmNhcHRpb24pKSksdGhpcy52aWV3LmNhcHRpb258fCFpfHx0aGlzLnZpZXcuZ3JvdXBlZC5jYXB0aW9ufHx0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMucG9zaXRpb25JbnNpZGU9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24taW5zaWRlIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItcG9zaXRpb24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJmci1wb3NpdGlvbi10ZXh0XCIpLmh0bWwodGhpcy5fcG9zaXRpb24rXCIgLyBcIit0aGlzLl90b3RhbCkpKTt2YXIgZT10aGlzLnZpZXcub3B0aW9ucy5sb29wJiYxPHRoaXMuX3RvdGFsfHwxIT10aGlzLl9wb3NpdGlvbix0PXRoaXMudmlldy5vcHRpb25zLmxvb3AmJjE8dGhpcy5fdG90YWx8fHRoaXMuX3Bvc2l0aW9uPHRoaXMuX3RvdGFsO3RoaXMucHJldmlvdXNJbnNpZGVbKGU/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSx0aGlzLm5leHRJbnNpZGVbKHQ/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKX0kLmVhY2goW1wieFwiLFwieVwiXSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3dbZV0mJnRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLW92ZXJmbG93LVwiK2UpfSx0aGlzKSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS1cIit0aGlzLnZpZXcudHlwZSksVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKSYmdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdHlwZS12aWRlb1wiKSx0aGlzLl90b3RhbDwyJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1zaWRlc1wiKSx0aGlzLl9jcmVhdGVkPSEwfX0sX2dldFN1cnJvdW5kaW5nUGFnZXM6ZnVuY3Rpb24oKXt2YXIgaTtpZighKGk9dGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZCkpcmV0dXJuW107Zm9yKHZhciBlPVtdLHQ9TWF0aC5tYXgoMSx0aGlzLl9wb3NpdGlvbi1pWzBdKSxzPU1hdGgubWluKHRoaXMuX3Bvc2l0aW9uK2lbMV0sdGhpcy5fdG90YWwpLG49dGhpcy5fcG9zaXRpb24sbz1uO288PXM7bysrKShhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpO2ZvcihvPW47dDw9bztvLS0pe3ZhciBhOyhhPVBhZ2VzLnBhZ2VzW28tMV0pLl9wb3NpdGlvbiE9biYmZS5wdXNoKGEpfXJldHVybiBlfSxwcmVsb2FkU3Vycm91bmRpbmdJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLl9nZXRTdXJyb3VuZGluZ1BhZ2VzKCk7JC5lYWNoKGksJC5wcm94eShmdW5jdGlvbihpLGUpe2UucHJlbG9hZCgpfSx0aGlzKSl9LHByZWxvYWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWxvYWRpbmd8fHRoaXMucHJlbG9hZGVkfHxcImltYWdlXCIhPXRoaXMudmlldy50eXBlfHwhdGhpcy52aWV3Lm9wdGlvbnMucHJlbG9hZHx8dGhpcy5sb2FkZWR8fCh0aGlzLmNyZWF0ZSgpLHRoaXMucHJlbG9hZGluZz0hMCx0aGlzLnByZWxvYWRSZWFkeT1uZXcgSW1hZ2VSZWFkeSh0aGlzLmltYWdlWzBdLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsdGhpcy5wcmVsb2FkaW5nPSExLHRoaXMucHJlbG9hZGVkPSEwLHRoaXMuZGltZW5zaW9ucz17d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fX0sdGhpcyksbnVsbCx7bWV0aG9kOlwibmF0dXJhbFdpZHRoXCJ9KSl9LGxvYWQ6ZnVuY3Rpb24oZSxpKXtpZih0aGlzLmNyZWF0ZSgpLHRoaXMubG9hZGVkKWUmJmUoKTtlbHNlIHN3aXRjaCh0aGlzLmFib3J0KCksdGhpcy5sb2FkaW5nPSEwLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXImJih0aGlzLl9zcGlubmVyRGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7U3Bpbm5lci5zaG93KCl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCkpLHRoaXMudmlldy50eXBlKXtjYXNlXCJpbWFnZVwiOmlmKHRoaXMuZXJyb3IpcmV0dXJuIHZvaWQoZSYmZSgpKTt0aGlzLmltYWdlUmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuX21hcmtBc0xvYWRlZCgpLHRoaXMuc2V0RGltZW5zaW9ucyh7d2lkdGg6aS5pbWcubmF0dXJhbFdpZHRoLGhlaWdodDppLmltZy5uYXR1cmFsSGVpZ2h0fSksZSYmZSgpfSx0aGlzKSwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5pbWFnZS5oaWRlKCksdGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5lcnJvcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1lcnJvciBmci1jb250ZW50LWVsZW1lbnRcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWVycm9yLWljb25cIikpKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtZXJyb3JcIiksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLmVycm9yLm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lcnJvci5vdXRlckhlaWdodCgpfSksdGhpcy5lcnJvci5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pLGUmJmUoKX0sdGhpcykse21ldGhvZDp0aGlzLnZpZXcub3B0aW9ucy5sb2FkZWRNZXRob2R9KTticmVhaztjYXNlXCJ2aW1lb1wiOnRoaXMudmltZW9SZWFkeT1uZXcgVmltZW9SZWFkeSh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDppLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmkuZGltZW5zaW9ucy5oZWlnaHR9KSxlJiZlKCl9LHRoaXMpKTticmVhaztjYXNlXCJ5b3V0dWJlXCI6dGhpcy5fbWFya0FzTG9hZGVkKCksdGhpcy5zZXREaW1lbnNpb25zKHt3aWR0aDp0aGlzLnZpZXcub3B0aW9ucy53aWR0aCxoZWlnaHQ6dGhpcy52aWV3Lm9wdGlvbnMuaGVpZ2h0fSksZSYmZSgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihpKXtpZih0aGlzLmRpbWVuc2lvbnM9aSx0aGlzLnZpZXcub3B0aW9ucy5tYXhXaWR0aHx8dGhpcy52aWV3Lm9wdGlvbnMubWF4SGVpZ2h0KXt2YXIgZT10aGlzLnZpZXcub3B0aW9ucyx0PXt3aWR0aDplLm1heFdpZHRoP2UubWF4V2lkdGg6dGhpcy5kaW1lbnNpb25zLndpZHRoLGhlaWdodDplLm1heEhlaWdodD9lLm1heEhlaWdodDp0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0fTt0aGlzLmRpbWVuc2lvbnM9Rml0LndpdGhpbih0LHRoaXMuZGltZW5zaW9ucyl9fSxfbWFya0FzTG9hZGVkOmZ1bmN0aW9uKCl7dGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5sb2FkZWQ9ITAsTWNbdGhpcy52aWV3LnVybF09ITAsU3Bpbm5lci5oaWRlKG51bGwsbnVsbCx0aGlzLl9wb3NpdGlvbil9LGlzVmlkZW86ZnVuY3Rpb24oKXtyZXR1cm4gVHlwZS5pc1ZpZGVvKHRoaXMudmlldy50eXBlKX0saW5zZXJ0VmlkZW86ZnVuY3Rpb24oaSl7aWYoIXRoaXMucGxheWVySWZyYW1lJiZ0aGlzLmlzVmlkZW8oKSl7dmFyIGU9XCJodHRwXCIrKHdpbmRvdy5sb2NhdGlvbiYmXCJodHRwczpcIj09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbD9cInNcIjpcIlwiKStcIjpcIix0PSQuZXh0ZW5kKHt9LHRoaXMudmlldy5vcHRpb25zW3RoaXMudmlldy50eXBlXXx8e30pLHM9JC5wYXJhbSh0KSxuPXt2aW1lbzplK1wiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL3tpZH0/e3F1ZXJ5U3RyaW5nfVwiLHlvdXR1YmU6ZStcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3tpZH0/e3F1ZXJ5U3RyaW5nfVwifVt0aGlzLnZpZXcudHlwZV0ucmVwbGFjZShcIntpZH1cIix0aGlzLnZpZXcuX2RhdGEuaWQpLnJlcGxhY2UoXCJ7cXVlcnlTdHJpbmd9XCIscyk7dGhpcy5jb250ZW50LnByZXBlbmQodGhpcy5wbGF5ZXJJZnJhbWU9JChcIjxpZnJhbWUgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+XCIpLmFkZENsYXNzKFwiZnItY29udGVudC1lbGVtZW50XCIpLmF0dHIoe3NyYzpuLGhlaWdodDp0aGlzLl9jb250ZW50RGltZW5zaW9ucy5oZWlnaHQsd2lkdGg6dGhpcy5fY29udGVudERpbWVuc2lvbnMud2lkdGgsZnJhbWVib3JkZXI6MH0pKSxpJiZpKCl9ZWxzZSBpJiZpKCl9LHJhaXNlOmZ1bmN0aW9uKCl7dmFyIGk9UGFnZXMuZWxlbWVudFswXS5sYXN0Q2hpbGQ7aSYmaT09PXRoaXMuZWxlbWVudFswXXx8UGFnZXMuZWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KX0sc2hvdzpmdW5jdGlvbihlKXt2YXIgaT10aGlzLnF1ZXVlcy5zaG93aGlkZTtpLnF1ZXVlKFtdKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMuc3Bpbm5lciYmIU1jW3RoaXMudmlldy51cmxdO1NwaW5uZXIuX3Zpc2libGUmJiFlJiZTcGlubmVyLmhpZGUoKSxQYWdlcy5zdG9wSW5hY3RpdmUoKSxpKCl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy51cGRhdGVVSSgpLFVJLnNldCh0aGlzLl91aSksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe0tleWJvYXJkLmVuYWJsZSh0aGlzLnZpZXcub3B0aW9ucy5rZXlib2FyZCksaSgpfSx0aGlzKSksaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe1NwaW5uZXIuc2V0U2tpbih0aGlzLnZpZXcub3B0aW9ucy5za2luKSx0aGlzLmxvYWQoJC5wcm94eShmdW5jdGlvbigpe3RoaXMucHJlbG9hZFN1cnJvdW5kaW5nSW1hZ2VzKCksaSgpfSx0aGlzKSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5yYWlzZSgpLFdpbmRvdy5zZXRTa2luKHRoaXMudmlldy5vcHRpb25zLnNraW4pLFVJLmVuYWJsZSgpLHRoaXMuZml0VG9Cb3goKSxXaW5kb3cuYWRqdXN0VG9TY3JvbGwoKSxpKCl9LHRoaXMpKSx0aGlzLmlzVmlkZW8oKSYmaS5xdWV1ZSgkLnByb3h5KGZ1bmN0aW9uKGkpe3RoaXMuaW5zZXJ0VmlkZW8oJC5wcm94eShmdW5jdGlvbigpe2koKX0pKX0sdGhpcykpLHRoaXMudmlldy5vcHRpb25zLnN5bmN8fGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXtQYWdlcy5oaWRlSW5hY3RpdmUoaSl9LHRoaXMpKSxpLnF1ZXVlKCQucHJveHkoZnVuY3Rpb24oaSl7dmFyIGU9Myx0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5zaG93O1dpbmRvdy5zZXRTaG93aW5nVHlwZSh0aGlzLnZpZXcudHlwZSksV2luZG93LnZpc2libGV8fCh0PXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3csXCJmdW5jdGlvblwiPT09JC50eXBlKHRoaXMudmlldy5vcHRpb25zLm9uU2hvdykmJnRoaXMudmlldy5vcHRpb25zLm9uU2hvdy5jYWxsKEZyZXNjbykpLHRoaXMudmlldy5vcHRpb25zLnN5bmMmJihlKyssUGFnZXMuaGlkZUluYWN0aXZlKGZ1bmN0aW9uKCl7LS1lPDEmJmkoKX0pKSxXaW5kb3cuc2hvdyhmdW5jdGlvbigpey0tZTwxJiZpKCl9LHRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMud2luZG93LnNob3cpLHRoaXMuX3Nob3coZnVuY3Rpb24oKXstLWU8MSYmaSgpfSx0KSxVSS5hZGp1c3RQcmV2TmV4dChmdW5jdGlvbigpey0tZTwxJiZpKCl9LFdpbmRvdy5fZmlyc3Q/MDp0KSxXaW5kb3cuX2ZpcnN0PyhVSS5zaG93KG51bGwsMCksV2luZG93Ll9maXJzdD0hMSk6VUkuc2hvdyhudWxsLDApO3ZhciBzPXRoaXMudmlldy5vcHRpb25zLmFmdGVyUG9zaXRpb247XCJmdW5jdGlvblwiPT09JC50eXBlKHMpJiZzLmNhbGwoRnJlc2NvLHRoaXMuX3Bvc2l0aW9uKX0sdGhpcykpLGkucXVldWUoJC5wcm94eShmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlPSEwLGUmJmUoKSxpKCl9LHRoaXMpKX0sX3Nob3c6ZnVuY3Rpb24oaSxlKXt2YXIgdD1XaW5kb3cudmlzaWJsZT9cIm51bWJlclwiPT09JC50eXBlKGUpP2U6dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3c6MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuc2hvdygpLmZhZGVUbyh0fHwwLDEsaSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMucmVtb3ZlVmlkZW8oKSx0aGlzLmFib3J0KCk7dmFyIHQ9XCJudW1iZXJcIj09PSQudHlwZShlKT9lOnRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMuY29udGVudC5oaWRlO3RoaXMuaXNWaWRlbygpJiYodD0wKSx0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHQsMCxcImZyZXNjb0Vhc2VJbkN1YmljXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5oaWRlKCksdGhpcy5fdmlzaWJsZT0hMSxQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksaSYmaSgpfSx0aGlzKSl9ZWxzZSBpJiZpKCl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLnF1ZXVlcy5zaG93aGlkZS5xdWV1ZShbXSksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQuc3RvcCghMCksdGhpcy5hYm9ydCgpfSxyZW1vdmVWaWRlbzpmdW5jdGlvbigpe3RoaXMucGxheWVySWZyYW1lJiYodGhpcy5wbGF5ZXJJZnJhbWVbMF0uc3JjPVwiLy9hYm91dDpibGFua1wiLHRoaXMucGxheWVySWZyYW1lLnJlbW92ZSgpLHRoaXMucGxheWVySWZyYW1lPW51bGwpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLnJlbW92ZVZpZGVvKCksdGhpcy5lbGVtZW50JiZ0aGlzLmVsZW1lbnQucmVtb3ZlKCksdGhpcy5fdHJhY2smJihQYWdlcy5yZW1vdmVUcmFja2luZyh0aGlzLl9wb3NpdGlvbiksdGhpcy5fdHJhY2s9ITEpLHRoaXMucHJlbG9hZFJlYWR5JiYodGhpcy5wcmVsb2FkUmVhZHkuYWJvcnQoKSx0aGlzLnByZWxvYWRSZWFkeT1udWxsLHRoaXMucHJlbG9hZGluZz1udWxsLHRoaXMucHJlbG9hZGVkPW51bGwpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5yZW1vdmVkPSEwfSxhYm9ydDpmdW5jdGlvbigpe3RoaXMuaW1hZ2VSZWFkeSYmKHRoaXMuaW1hZ2VSZWFkeS5hYm9ydCgpLHRoaXMuaW1hZ2VSZWFkeT1udWxsKSx0aGlzLnZpbWVvUmVhZHkmJih0aGlzLnZpbWVvUmVhZHkuYWJvcnQoKSx0aGlzLnZpbWVvUmVhZHk9bnVsbCksdGhpcy5fYWJvcnRTcGlubmVyRGVsYXkoKSx0aGlzLmxvYWRpbmc9ITF9LF9hYm9ydFNwaW5uZXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX3NwaW5uZXJEZWxheSYmKGNsZWFyVGltZW91dCh0aGlzLl9zcGlubmVyRGVsYXkpLHRoaXMuX3NwaW5uZXJEZWxheT1udWxsKX0sX2dldEluZm9IZWlnaHQ6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy52aWV3Lm9wdGlvbnMucG9zaXRpb24mJjE8dGhpcy5fdG90YWw7c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjpjYXNlXCJpbnNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24mJiFlKXJldHVybiAwO2JyZWFrO2Nhc2VcIm91dHNpZGVcIjppZighdGhpcy52aWV3LmNhcHRpb24pcmV0dXJuIDB9dmFyIHQ9XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87XCJvdXRzaWRlXCI9PT10aGlzLl91aSYmKGk9TWF0aC5taW4oaSxXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGgpKTt2YXIgcyxuPXRbMF0uc3R5bGUud2lkdGg7cmV0dXJuXCJpbnNpZGVcIiE9PXRoaXMuX3VpJiZcImZ1bGxjbGlja1wiIT09dGhpcy5fdWl8fChuPVwiMTAwJVwiKSx0LmNzcyh7d2lkdGg6aStcInB4XCJ9KSxzPXBhcnNlRmxvYXQodC5vdXRlckhlaWdodCgpKSx0LmNzcyh7d2lkdGg6bn0pLHN9LF93aGlsZVZpc2libGU6ZnVuY3Rpb24oaSxlKXt2YXIgdD1bXSxzPVdpbmRvdy5lbGVtZW50LmFkZCh0aGlzLmVsZW1lbnQpO2UmJihzPXMuYWRkKGUpKSwkLmVhY2gocyxmdW5jdGlvbihpLGUpeyQoZSkuaXMoXCI6dmlzaWJsZVwiKXx8dC5wdXNoKCQoZSkuc2hvdygpKX0pO3ZhciBuPXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImZyLW5vLWNhcHRpb25cIik7dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItbm8tY2FwdGlvblwiKTt2YXIgbz10aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKTt0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1oYXMtY2FwdGlvblwiKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGkoKSxXaW5kb3cuZWxlbWVudC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSxuJiZ0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1uby1jYXB0aW9uXCIpLG98fHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLWhhcy1jYXB0aW9uXCIpLCQuZWFjaCh0LGZ1bmN0aW9uKGksZSl7ZS5oaWRlKCl9KX0sdXBkYXRlRm9yY2VkOmZ1bmN0aW9uKCl7dGhpcy5jcmVhdGUoKSx0aGlzLl9mdWxsQ2xpY2s9dGhpcy52aWV3Lm9wdGlvbnMuZnVsbENsaWNrLHRoaXMuX25vT3ZlcmZsb3c9ITEsMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLXdpZHRoXCIpKSYmKHRoaXMuX2Z1bGxDbGljaz0hMCksMDxwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWluLWhlaWdodFwiKSkmJih0aGlzLl9ub092ZXJmbG93PSEwKX0sdXBkYXRlVUk6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUZvcmNlZCgpO3ZhciBpPXRoaXMuX2Z1bGxDbGljaz9cImZ1bGxjbGlja1wiOnRoaXMudmlldy5vcHRpb25zLnVpO3RoaXMuX3VpJiZ0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci11aS1cIit0aGlzLl91aSksdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdWktXCIraSksdGhpcy5fdWk9aX0sZml0VG9Cb3g6ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRlbnQpe3RoaXMuZWxlbWVudDt2YXIgdD0kLmV4dGVuZCh7fSxXaW5kb3cuZ2V0Qm94RGltZW5zaW9ucygpKSxpPSQuZXh0ZW5kKHt9LHRoaXMuZGltZW5zaW9ucyksZT10aGlzLmNvbnRhaW5lcjt0aGlzLnVwZGF0ZVVJKCk7dmFyIHM9e2xlZnQ6cGFyc2VJbnQoZS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLHRvcDpwYXJzZUludChlLmNzcyhcInBhZGRpbmctdG9wXCIpKX07aWYoXCJvdXRzaWRlXCI9PT10aGlzLl91aSYmdGhpcy5fcG9zaXRpb25PdXRzaWRlKXt2YXIgbj0wO3RoaXMuX3doaWxlVmlzaWJsZSgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5fcG9zaXRpb25PdXRzaWRlLmlzKFwiOnZpc2libGVcIikmJihuPXRoaXMuX3Bvc2l0aW9uT3V0c2lkZS5vdXRlcldpZHRoKCEwKSl9LHRoaXMpKSxuPnMubGVmdCYmKHMubGVmdD1uKX10LndpZHRoLT0yKnMubGVmdCx0LmhlaWdodC09MipzLnRvcDt2YXIgbyxhLGg9e3dpZHRoOiEwLGhlaWdodDohIXRoaXMuX25vT3ZlcmZsb3d8fCF0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55fSxyPUZpdC53aXRoaW4odCxpLGgpLGQ9JC5leHRlbmQoe30sciksbD0odGhpcy5jb250ZW50LDApLHU9XCJpbnNpZGVcIj09PXRoaXMuX3VpLGM9dT90aGlzLmluZm9JbnNpZGU6dGhpcy5pbmZvLHA9dT90aGlzLmNhcHRpb25JbnNpZGU6dGhpcy5jYXB0aW9uLGY9dT90aGlzLnBvc0luc2lkZTp0aGlzLnBvcyxtPSEhcDtzd2l0Y2godGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjp2YXIgdj0kLmV4dGVuZCh7fSxkKTt0aGlzLmNhcHRpb24mJihhPXRoaXMuY2FwdGlvbix0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8Mjspe2w9dGhpcy5fZ2V0SW5mb0hlaWdodChkLndpZHRoKTt2YXIgZT10LmhlaWdodC1kLmhlaWdodDtlPGwmJihkPUZpdC53aXRoaW4oe3dpZHRoOmQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KGQuaGVpZ2h0LShsLWUpLDApfSxkLGgpKSxpKyt9bD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpLCghdGhpcy52aWV3Lm9wdGlvbnMub3ZlcmZsb3cueSYmbCtkLmhlaWdodD50LmhlaWdodHx8YyYmXCJub25lXCI9PT1jLmNzcyhcImRpc3BsYXlcIil8fGw+PS41KmQuaGVpZ2h0KSYmKG09ITEsbD0wLGQ9dil9LHRoaXMpLGEpKSxjJiZjLmNzcyh7d2lkdGg6ZC53aWR0aCtcInB4XCJ9KSxvPXt3aWR0aDpkLndpZHRoLGhlaWdodDpkLmhlaWdodCtsfTticmVhaztjYXNlXCJpbnNpZGVcIjp0aGlzLmNhcHRpb24mJihhPXAsdGhpcy5fd2hpbGVWaXNpYmxlKCQucHJveHkoZnVuY3Rpb24oKXsobD10aGlzLl9nZXRJbmZvSGVpZ2h0KGQud2lkdGgpKT49LjQ1KmQuaGVpZ2h0JiYobT0hMSxsPTApfSx0aGlzKSxhKSksbz1kO2JyZWFrO2Nhc2VcImZ1bGxjbGlja1wiOnZhciBnPVtdO3AmJmcucHVzaChwKSx0aGlzLl93aGlsZVZpc2libGUoJC5wcm94eShmdW5jdGlvbigpe2lmKChwfHxmKSYmYy5jc3Moe3dpZHRoOlwiMTAwJVwifSksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCkscCYmbD4uNSp0LmhlaWdodClpZihtPSExLGYpe3ZhciBpPXRoaXMuY2FwdGlvbi5pcyhcIjp2aXNpYmxlXCIpO3RoaXMuY2FwdGlvbi5oaWRlKCksbD10aGlzLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCksaSYmdGhpcy5jYXB0aW9uLnNob3coKX1lbHNlIGw9MDtkPUZpdC53aXRoaW4oe3dpZHRoOnQud2lkdGgsaGVpZ2h0Ok1hdGgubWF4KDAsdC5oZWlnaHQtbCl9LGQsaCksbz1kfSx0aGlzKSxnKSx0aGlzLmNvbnRlbnQuY3NzKHtcInBhZGRpbmctYm90dG9tXCI6MH0pfXAmJnBbbT9cInNob3dcIjpcImhpZGVcIl0oKSx0aGlzLmVsZW1lbnRbKG0/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItbm8tY2FwdGlvblwiKSx0aGlzLmVsZW1lbnRbKG0/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItaGFzLWNhcHRpb25cIiksdGhpcy5jb250ZW50LmNzcyhkKSx0aGlzLmJhY2tncm91bmQuY3NzKG8pLHRoaXMucGxheWVySWZyYW1lJiZ0aGlzLnBsYXllcklmcmFtZS5hdHRyKGQpLHRoaXMub3ZlcmxhcD17eTpvLmhlaWdodCsoXCJmdWxsY2xpY2tcIj09PXRoaXMuX3VpP2w6MCktV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCx4OjB9LHRoaXMuX3RyYWNrPSF0aGlzLl9ub092ZXJmbG93JiZ0aGlzLnZpZXcub3B0aW9ucy5vdmVyZmxvdy55JiYwPHRoaXMub3ZlcmxhcC55LHRoaXMuX2luZm9IZWlnaHQ9bCx0aGlzLl9wYWRkaW5nPXMsdGhpcy5fY29udGVudERpbWVuc2lvbnM9ZCx0aGlzLl9iYWNrZ3JvdW5kRGltZW5zaW9ucz1vLFBhZ2VzWyh0aGlzLl90cmFjaz9cInNldFwiOlwicmVtb3ZlXCIpK1wiVHJhY2tpbmdcIl0odGhpcy5fcG9zaXRpb24pLHRoaXMucG9zaXRpb24oKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpcy5jb250ZW50KXt2YXIgaT10aGlzLl9jb250ZW50RGltZW5zaW9ucyxlPXRoaXMuX2JhY2tncm91bmREaW1lbnNpb25zLHQ9e3RvcDouNSpXaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LS41KmUuaGVpZ2h0LGxlZnQ6LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoLS41KmUud2lkdGh9LHM9e3RvcDp0LnRvcCtpLmhlaWdodCxsZWZ0OnQubGVmdH0sbj0wLG89XCJpbnNpZGVcIj09PXRoaXMuX3VpP3RoaXMuaW5mb0luc2lkZTp0aGlzLmluZm87c3dpdGNoKHRoaXMuX3VpKXtjYXNlXCJmdWxsY2xpY2tcIjp0LnRvcD0uNSooV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0KS0uNSplLmhlaWdodCxzPXt0b3A6V2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC10aGlzLl9pbmZvSGVpZ2h0LGxlZnQ6MCxib3R0b206XCJhdXRvXCJ9LG49dGhpcy5faW5mb0hlaWdodDticmVhaztjYXNlXCJpbnNpZGVcIjpzPXt0b3A6XCJhdXRvXCIsbGVmdDowLGJvdHRvbTowfX1pZigwPHRoaXMub3ZlcmxhcC55KXt2YXIgYT1QYWdlcy5nZXRYWVAoKTtzd2l0Y2godC50b3A9MC1hLnkqdGhpcy5vdmVybGFwLnksdGhpcy5fdWkpe2Nhc2VcIm91dHNpZGVcIjpjYXNlXCJmdWxsY2xpY2tcIjpzLnRvcD1XaW5kb3cuX2JveERpbWVuc2lvbnMuaGVpZ2h0LXRoaXMuX2luZm9IZWlnaHQ7YnJlYWs7Y2FzZVwiaW5zaWRlXCI6dmFyIGg9dC50b3AraS5oZWlnaHQtV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodCxyPS0xKnQudG9wO2lmKHMuYm90dG9tPWgsdGhpcy5jbG9zZUluc2lkZS5jc3Moe3RvcDpyfSksMTx0aGlzLl90b3RhbCl7dmFyIGQ9V2luZG93LmVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKTtkfHxXaW5kb3cuZWxlbWVudC5zaG93KCk7dmFyIGw9dGhpcy5wcmV2aW91c0luc2lkZS5hdHRyKFwic3R5bGVcIik7dGhpcy5wcmV2aW91c0luc2lkZS5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIHU9cGFyc2VJbnQodGhpcy5wcmV2aW91c0luc2lkZS5jc3MoXCJtYXJnaW4tdG9wXCIpKTt0aGlzLnByZXZpb3VzSW5zaWRlLmF0dHIoe3N0eWxlOmx9KSxkfHxXaW5kb3cuZWxlbWVudC5oaWRlKCk7dmFyIGM9dGhpcy5wcmV2aW91c0luc2lkZS5hZGQodGhpcy5uZXh0SW5zaWRlKSxwPS41KnRoaXMub3ZlcmxhcC55O2MuY3NzKHtcIm1hcmdpbi10b3BcIjp1KyhyLXApfSksdGhpcy5wb3NpdGlvbkluc2lkZSYmdGhpcy5wb3NpdGlvbkluc2lkZS5jc3Moe2JvdHRvbTpofSl9fX1lbHNlXCJpbnNpZGVcIj09PXRoaXMuX3VpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5mci1pbmZvLCAuZnItc2lkZSwgLmZyLWNsb3NlLCAuZnItcG9zaXRpb24taW5zaWRlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtvJiZvLmNzcyhzKSx0aGlzLmNvbnRhaW5lci5jc3Moe2JvdHRvbTpufSksdGhpcy5jb250ZW50LmNzcyh0KSx0aGlzLmJhY2tncm91bmQuY3NzKHQpfX19KSxPYyksTGMsTWMsTmM7ZnVuY3Rpb24gT2MoKXtyZXR1cm4gdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9dmFyIFBhZ2VzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMucGFnZXM9W10sdGhpcy51aWQ9MSx0aGlzLl90cmFja2luZz1bXX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLnZpZXdzPWksdGhpcy5yZW1vdmVBbGwoKSwkLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpcy5wYWdlcy5wdXNoKG5ldyBQYWdlKGUsaSsxLHRoaXMudmlld3MubGVuZ3RoKSl9LHRoaXMpKX0sc2hvdzpmdW5jdGlvbihpLGUpe3ZhciB0PXRoaXMucGFnZXNbaS0xXTt0aGlzLnBhZ2UmJnRoaXMucGFnZS51aWQ9PT10LnVpZHx8KHRoaXMucGFnZT10LFRodW1ibmFpbHMuc2hvdyhpKSxXaW5kb3cudXBkYXRlQm94RGltZW5zaW9ucygpLHQuc2hvdygkLnByb3h5KGZ1bmN0aW9uKCl7ZSYmZSgpfSx0aGlzKSkpfSxnZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBzPTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS52aWV3LmVsZW1lbnQmJmUudmlldy5lbGVtZW50PT09dCYmKHM9aSsxKX0pLHN9LGdldExvYWRpbmdDb3VudDpmdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuICQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5sb2FkaW5nJiZ0Kyt9KSx0fSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5wYWdlcyxmdW5jdGlvbihpLGUpe2UucmVtb3ZlKCl9KSx0aGlzLnBhZ2VzPVtdfSxoaWRlSW5hY3RpdmU6ZnVuY3Rpb24odCxzKXt2YXIgbj1bXTskLmVhY2godGhpcy5wYWdlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7ZS51aWQhPT10aGlzLnBhZ2UudWlkJiZuLnB1c2goZSl9LHRoaXMpKTt2YXIgbz0wK24ubGVuZ3RoO3JldHVybiBvPDE/dCYmdCgpOiQuZWFjaChuLGZ1bmN0aW9uKGksZSl7ZS5oaWRlKGZ1bmN0aW9uKCl7dCYmLS1vPDEmJnQoKX0scyl9KSxuLmxlbmd0aH0sc3RvcEluYWN0aXZlOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMucGFnZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe2UudWlkIT09dGhpcy5wYWdlLnVpZCYmZS5zdG9wKCl9LHRoaXMpKX0sc3RvcDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLnBhZ2VzLGZ1bmN0aW9uKGksZSl7ZS5zdG9wKCl9KX0saGFuZGxlVHJhY2tpbmc6ZnVuY3Rpb24oaSl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw5Pyh0aGlzLnNldFhZKHt4OmkucGFnZVgseTppLnBhZ2VZfSksdGhpcy51cGRhdGVQb3NpdGlvbnMoKSk6dGhpcy5fdHJhY2tpbmdfdGltZXI9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pLHRoaXMudXBkYXRlUG9zaXRpb25zKCl9LHRoaXMpLDMwKX0sY2xlYXJUcmFja2luZ1RpbWVyOmZ1bmN0aW9uKCl7dGhpcy5fdHJhY2tpbmdfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5fdHJhY2tpbmdfdGltZXIpLHRoaXMuX3RyYWNraW5nX3RpbWVyPW51bGwpfSxzdGFydFRyYWNraW5nOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8dGhpcy5faGFuZGxlVHJhY2tpbmd8fCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vbihcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZVRyYWNraW5nPSQucHJveHkodGhpcy5oYW5kbGVUcmFja2luZyx0aGlzKSl9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpeyFTdXBwb3J0Lm1vYmlsZVRvdWNoJiZ0aGlzLl9oYW5kbGVUcmFja2luZyYmKCQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5vZmYoXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVUcmFja2luZyksdGhpcy5faGFuZGxlVHJhY2tpbmc9bnVsbCx0aGlzLmNsZWFyVHJhY2tpbmdUaW1lcigpKX0sc2V0VHJhY2tpbmc6ZnVuY3Rpb24oaSl7dGhpcy5pc1RyYWNraW5nKGkpfHwodGhpcy5fdHJhY2tpbmcucHVzaCh0aGlzLnBhZ2VzW2ktMV0pLDE9PT10aGlzLl90cmFja2luZy5sZW5ndGgmJnRoaXMuc3RhcnRUcmFja2luZygpKX0sY2xlYXJUcmFja2luZzpmdW5jdGlvbigpe3RoaXMuX3RyYWNraW5nPVtdfSxyZW1vdmVUcmFja2luZzpmdW5jdGlvbihlKXt0aGlzLl90cmFja2luZz0kLmdyZXAodGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSl7cmV0dXJuIGkuX3Bvc2l0aW9uIT09ZX0pLHRoaXMuX3RyYWNraW5nLmxlbmd0aDwxJiZ0aGlzLnN0b3BUcmFja2luZygpfSxpc1RyYWNraW5nOmZ1bmN0aW9uKHQpe3ZhciBzPSExO3JldHVybiAkLmVhY2godGhpcy5fdHJhY2tpbmcsZnVuY3Rpb24oaSxlKXtpZihlLl9wb3NpdGlvbj09PXQpcmV0dXJuIShzPSEwKX0pLHN9LHNldFhZOmZ1bmN0aW9uKGkpe3RoaXMuX3h5PWl9LGdldFhZUDpmdW5jdGlvbigpe3ZhciBpPVBhZ2VzLnBhZ2UsdD0kLmV4dGVuZCh7fSxXaW5kb3cuX2JveERpbWVuc2lvbnMpLGU9JC5leHRlbmQoe30sdGhpcy5feHkpO2UueS09JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGkmJihcIm91dHNpZGVcIj09PWkuX3VpfHxcImZ1bGxjbGlja1wiPT09aS5fdWkpJiYwPGkuX2luZm9IZWlnaHQmJih0LmhlaWdodC09aS5faW5mb0hlaWdodCksZS55LT1XaW5kb3cuX2JveFBvc2l0aW9uLnRvcDt2YXIgcz17eDowLHk6TWF0aC5taW4oTWF0aC5tYXgoZS55L3QuaGVpZ2h0LDApLDEpfSxuPXt4Olwid2lkdGhcIix5OlwiaGVpZ2h0XCJ9LG89e307cmV0dXJuICQuZWFjaChcInlcIi5zcGxpdChcIiBcIiksJC5wcm94eShmdW5jdGlvbihpLGUpe29bZV09TWF0aC5taW4oTWF0aC5tYXgoMjAvdFtuW2VdXSwwKSwxKSxzW2VdKj0xKzIqb1tlXSxzW2VdLT1vW2VdLHNbZV09TWF0aC5taW4oTWF0aC5tYXgoc1tlXSwwKSwxKX0sdGhpcykpLHRoaXMuc2V0WFlQKHMpLHRoaXMuX3h5cH0sc2V0WFlQOmZ1bmN0aW9uKGkpe3RoaXMuX3h5cD1pfSx1cGRhdGVQb3NpdGlvbnM6ZnVuY3Rpb24oKXt0aGlzLl90cmFja2luZy5sZW5ndGg8MXx8JC5lYWNoKHRoaXMuX3RyYWNraW5nLGZ1bmN0aW9uKGksZSl7ZS5wb3NpdGlvbigpfSl9fTtmdW5jdGlvbiBWaWV3KCl7dGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsX3NsaWNlLmNhbGwoYXJndW1lbnRzKSl9JC5leHRlbmQoVmlldy5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LGRhdGE9e307aWYoXCJzdHJpbmdcIj09PSQudHlwZShvYmplY3QpKW9iamVjdD17dXJsOm9iamVjdH07ZWxzZSBpZihvYmplY3QmJjE9PT1vYmplY3Qubm9kZVR5cGUpe3ZhciBlbGVtZW50PSQob2JqZWN0KTtvYmplY3Q9e2VsZW1lbnQ6ZWxlbWVudFswXSx1cmw6ZWxlbWVudC5hdHRyKFwiaHJlZlwiKSxjYXB0aW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWNhcHRpb25cIiksZ3JvdXA6ZWxlbWVudC5hdHRyKFwiZGF0YS1mcmVzY28tZ3JvdXBcIiksZXh0ZW5zaW9uOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLWV4dGVuc2lvblwiKSx0eXBlOmVsZW1lbnQuYXR0cihcImRhdGEtZnJlc2NvLXR5cGVcIiksb3B0aW9uczplbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpJiZldmFsKFwiKHtcIitlbGVtZW50LmF0dHIoXCJkYXRhLWZyZXNjby1vcHRpb25zXCIpK1wifSlcIil8fHt9fX1yZXR1cm4gb2JqZWN0JiYob2JqZWN0LmV4dGVuc2lvbnx8KG9iamVjdC5leHRlbnNpb249ZGV0ZWN0RXh0ZW5zaW9uKG9iamVjdC51cmwpKSxvYmplY3QudHlwZXx8KGRhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSxvYmplY3QuX2RhdGE9ZGF0YSxvYmplY3QudHlwZT1kYXRhLnR5cGUpKSxvYmplY3QuX2RhdGF8fChvYmplY3QuX2RhdGE9Z2V0VVJJRGF0YShvYmplY3QudXJsKSksb2JqZWN0JiZvYmplY3Qub3B0aW9ucz9vYmplY3Qub3B0aW9ucz0kLmV4dGVuZCghMCwkLmV4dGVuZCh7fSxvcHRpb25zKSwkLmV4dGVuZCh7fSxvYmplY3Qub3B0aW9ucykpOm9iamVjdC5vcHRpb25zPSQuZXh0ZW5kKHt9LG9wdGlvbnMpLG9iamVjdC5vcHRpb25zPU9wdGlvbnMuY3JlYXRlKG9iamVjdC5vcHRpb25zLG9iamVjdC50eXBlLG9iamVjdC5fZGF0YSksJC5leHRlbmQodGhpcyxvYmplY3QpLHRoaXN9fSk7dmFyIFNwaW5uZXI9e3N1cHBvcnRlZDpTdXBwb3J0LmNzcy50cmFuc2Zvcm0mJlN1cHBvcnQuY3NzLmFuaW1hdGlvbixpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGlubmVyXCIpLmhpZGUoKTtmb3IodmFyIGU9MTtlPD0xMjtlKyspdGhpcy5lbGVtZW50LmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zcGluLVwiK2UpKTt0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXtXaW5kb3cuaGlkZSgpfSx0aGlzKSksdGhpcy5lbGVtZW50Lm9uKFwiZnJlc2NvOm1vdXNld2hlZWxcIixmdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9KX0sc2V0U2tpbjpmdW5jdGlvbihpKXt0aGlzLnN1cHBvcnRlZCYmKHRoaXMuX3NraW4mJnRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXNwaW5uZXItc2tpbi1cIit0aGlzLl9za2luKSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1zcGlubmVyLXNraW4tXCIraSksdGhpcy5fc2tpbj1pKX0sdXBkYXRlRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBpPXRoaXMuX2F0dGFjaGVkO2l8fHRoaXMuYXR0YWNoKCksdGhpcy5fZGltZW5zaW9ucz17d2lkdGg6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxoZWlnaHQ6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCl9LGl8fHRoaXMuZGV0YWNoKCl9LGF0dGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkfHwoJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5lbGVtZW50KSx0aGlzLl9hdHRhY2hlZD0hMCl9LGRldGFjaDpmdW5jdGlvbigpe3RoaXMuX2F0dGFjaGVkJiYodGhpcy5lbGVtZW50LmRldGFjaCgpLHRoaXMuX2F0dGFjaGVkPSExKX0sc2hvdzpmdW5jdGlvbihpLGUpe3RoaXMuX3Zpc2libGU9ITAsdGhpcy5hdHRhY2goKSx0aGlzLmNlbnRlcigpO3ZhciB0PVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLmVmZmVjdHMuc3Bpbm5lci5zaG93fHwwLHM9KFwibnVtYmVyXCI9PT0kLnR5cGUoZSk/ZTp0KXx8MDt0aGlzLmVsZW1lbnQuc3RvcCghMCkuZmFkZVRvKHMsMSxpKX0saGlkZTpmdW5jdGlvbihpLGUsdCl7dGhpcy5fdmlzaWJsZT0hMTt2YXIgcz1QYWdlcy5wYWdlJiZQYWdlcy5wYWdlLnZpZXcub3B0aW9ucy5lZmZlY3RzLnNwaW5uZXIuaGlkZXx8MCxuPShcIm51bWJlclwiPT09JC50eXBlKGUpP2U6cyl8fDA7dGhpcy5lbGVtZW50LnN0b3AoITApLmZhZGVPdXQobnx8MCwkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5kZXRhY2goKSxpJiZpKCl9LHRoaXMpKX0sY2VudGVyOmZ1bmN0aW9uKCl7aWYodGhpcy5zdXBwb3J0ZWQpe3RoaXMuX2RpbWVuc2lvbnN8fHRoaXMudXBkYXRlRGltZW5zaW9ucygpO3ZhciBpPVBhZ2VzLnBhZ2UsZT0wO2kmJlwiZnVsbGNsaWNrXCI9PT1pLl91aSYmaS5fd2hpbGVWaXNpYmxlKGZ1bmN0aW9uKCl7ZT1pLl9nZXRJbmZvSGVpZ2h0KFdpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aCl9KSx0aGlzLmVsZW1lbnQuY3NzKHt0b3A6V2luZG93Ll9ib3hQb3NpdGlvbi50b3ArLjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLmhlaWdodC0uNSp0aGlzLl9kaW1lbnNpb25zLmhlaWdodC0uNSplLGxlZnQ6V2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0Ky41KldpbmRvdy5fYm94RGltZW5zaW9ucy53aWR0aC0uNSp0aGlzLl9kaW1lbnNpb25zLndpZHRofSl9fX0sX0ZyZXNjbz17X2Rpc2FibGVkOiExLF9mYWxsYmFjazohMCxpbml0aWFsaXplOmZ1bmN0aW9uKCl7V2luZG93LmluaXRpYWxpemUoKSx0aGlzLl9kaXNhYmxlZHx8dGhpcy5zdGFydERlbGVnYXRpbmcoKX0sc3RhcnREZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyfHwkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkub24oXCJjbGlja1wiLFwiLmZyZXNjb1tocmVmXVwiLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj0kLnByb3h5KHRoaXMuZGVsZWdhdGUsdGhpcykpLm9uKFwiY2xpY2tcIix0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj0kLnByb3h5KHRoaXMuc2V0Q2xpY2tYWSx0aGlzKSl9LHN0b3BEZWxlZ2F0aW5nOmZ1bmN0aW9uKCl7dGhpcy5fZGVsZWdhdGVIYW5kbGVyJiYoJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm9mZihcImNsaWNrXCIsXCIuZnJlc2NvW2hyZWZdXCIsdGhpcy5fZGVsZWdhdGVIYW5kbGVyKS5vZmYoXCJjbGlja1wiLHRoaXMuX3NldENsaWNrWFlIYW5kbGVyKSx0aGlzLl9zZXRDbGlja1hZSGFuZGxlcj1udWxsLHRoaXMuX2RlbGVnYXRlSGFuZGxlcj1udWxsKX0sc2V0Q2xpY2tYWTpmdW5jdGlvbihpKXtQYWdlcy5zZXRYWSh7eDppLnBhZ2VYLHk6aS5wYWdlWX0pfSxkZWxlZ2F0ZTpmdW5jdGlvbihpKXtpZighdGhpcy5fZGlzYWJsZWQpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWkuY3VycmVudFRhcmdldDt0aGlzLnNldENsaWNrWFkoaSksX0ZyZXNjby5zaG93KGUpfX0sc2hvdzpmdW5jdGlvbihvYmplY3Qpe2lmKHRoaXMuX2Rpc2FibGVkKXRoaXMuc2hvd0ZhbGxiYWNrLmFwcGx5KF9GcmVzY28sX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7ZWxzZXt2YXIgb3B0aW9ucz1hcmd1bWVudHNbMV18fHt9LHBvc2l0aW9uPWFyZ3VtZW50c1syXTthcmd1bWVudHNbMV0mJlwibnVtYmVyXCI9PT0kLnR5cGUoYXJndW1lbnRzWzFdKSYmKHBvc2l0aW9uPWFyZ3VtZW50c1sxXSxvcHRpb25zPXt9KTt2YXIgdmlld3M9W10sb2JqZWN0X3R5cGUsaXNFbGVtZW50PV8uaXNFbGVtZW50KG9iamVjdCk7c3dpdGNoKG9iamVjdF90eXBlPSQudHlwZShvYmplY3QpKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJvYmplY3RcIjp2YXIgdmlldz1uZXcgVmlldyhvYmplY3Qsb3B0aW9ucyksX2Rnbz1cImRhdGEtZnJlc2NvLWdyb3VwLW9wdGlvbnNcIixncm91cE9wdGlvbnM9e307aWYodmlldy5ncm91cCl7aWYoaXNFbGVtZW50KXt2YXIgZWxlbWVudHM9JCgnLmZyZXNjb1tkYXRhLWZyZXNjby1ncm91cD1cIicrJChvYmplY3QpLmF0dHIoXCJkYXRhLWZyZXNjby1ncm91cFwiKSsnXCJdJyk7ZWxlbWVudHMuZmlsdGVyKFwiW1wiK19kZ28rXCJdXCIpLmVhY2goZnVuY3Rpb24oaSxlbGVtZW50KXskLmV4dGVuZChncm91cE9wdGlvbnMsZXZhbChcIih7XCIrKCQoZWxlbWVudCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSl9KSxlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGksZSl7cG9zaXRpb258fGUhPT1vYmplY3R8fChwb3NpdGlvbj1pKzEpLHZpZXdzLnB1c2gobmV3IFZpZXcoZSwkLmV4dGVuZCh7fSxncm91cE9wdGlvbnMsb3B0aW9ucykpKX0pfX1lbHNlIGlzRWxlbWVudCYmJChvYmplY3QpLmlzKFwiW1wiK19kZ28rXCJdXCIpJiYoJC5leHRlbmQoZ3JvdXBPcHRpb25zLGV2YWwoXCIoe1wiKygkKG9iamVjdCkuYXR0cihfZGdvKXx8XCJcIikrXCJ9KVwiKSksdmlldz1uZXcgVmlldyhvYmplY3QsJC5leHRlbmQoe30sZ3JvdXBPcHRpb25zLG9wdGlvbnMpKSksdmlld3MucHVzaCh2aWV3KTticmVhaztjYXNlXCJhcnJheVwiOiQuZWFjaChvYmplY3QsZnVuY3Rpb24oaSxlKXt2YXIgdD1uZXcgVmlldyhlLG9wdGlvbnMpO3ZpZXdzLnB1c2godCl9KX12YXIgZ3JvdXBFeHRlbmQ9e2dyb3VwZWQ6e2NhcHRpb246ITF9fSxmaXJzdFVJPXZpZXdzWzBdLm9wdGlvbnMudWkscG9zaXRpb25JbkFQRzskLmVhY2godmlld3MsZnVuY3Rpb24oaSxlKXtlLmNhcHRpb24mJihncm91cEV4dGVuZC5ncm91cGVkLmNhcHRpb249ITApLDA8aSYmZS5vcHRpb25zLnVpIT09Zmlyc3RVSSYmKGUub3B0aW9ucy51aT1maXJzdFVJKX0pLCQuZWFjaCh2aWV3cyxmdW5jdGlvbihpLGUpe2U9JC5leHRlbmQoZSxncm91cEV4dGVuZCl9KSwoIXBvc2l0aW9ufHxwb3NpdGlvbjwxKSYmKHBvc2l0aW9uPTEpLHBvc2l0aW9uPnZpZXdzLmxlbmd0aCYmKHBvc2l0aW9uPXZpZXdzLmxlbmd0aCksaXNFbGVtZW50JiYocG9zaXRpb25JbkFQRz1QYWdlcy5nZXRQb3NpdGlvbkluQWN0aXZlUGFnZUdyb3VwKG9iamVjdCkpP1dpbmRvdy5zZXRQb3NpdGlvbihwb3NpdGlvbkluQVBHKTpXaW5kb3cubG9hZCh2aWV3cyxwb3NpdGlvbil9fSxzaG93RmFsbGJhY2s6ZnVuY3Rpb24oaSl7aWYodGhpcy5fZmFsbGJhY2spe3ZhciBlPWZ1bmN0aW9uIGkoZSl7dmFyIHQ9JC50eXBlKGUpO3JldHVyblwic3RyaW5nXCI9PT10P2U6XCJhcnJheVwiPT09dCYmZVswXT9pKGVbMF0pOl8uaXNFbGVtZW50KGUpJiYkKGUpLmF0dHIoXCJocmVmXCIpPyQoZSkuYXR0cihcImhyZWZcIik6ISFlLnVybCYmZS51cmx9KGkpO2UmJih3aW5kb3cubG9jYXRpb24uaHJlZj1lKX19fTskLmV4dGVuZChGcmVzY28se3Nob3c6ZnVuY3Rpb24oaSl7cmV0dXJuIF9GcmVzY28uc2hvdy5hcHBseShfRnJlc2NvLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2luZG93LmhpZGUoKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIF9GcmVzY28uc3RvcERlbGVnYXRpbmcoKSxfRnJlc2NvLl9kaXNhYmxlZD0hMCx0aGlzfSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gX0ZyZXNjby5fZGlzYWJsZWQ9ITEsX0ZyZXNjby5zdGFydERlbGVnYXRpbmcoKSx0aGlzfSxmYWxsYmFjazpmdW5jdGlvbihpKXtyZXR1cm4gX0ZyZXNjby5fZmFsbGJhY2s9aSx0aGlzfSxzZXREZWZhdWx0U2tpbjpmdW5jdGlvbihpKXtyZXR1cm4gT3B0aW9ucy5kZWZhdWx0cy5za2luPWksdGhpc319KSwoQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw3fHxcIm51bWJlclwiPT09JC50eXBlKEJyb3dzZXIuQW5kcm9pZCkmJkJyb3dzZXIuQW5kcm9pZDwzfHxCcm93c2VyLk1vYmlsZVNhZmFyaSYmXCJudW1iZXJcIj09PSQudHlwZShCcm93c2VyLldlYktpdCkmJkJyb3dzZXIuV2ViS2l0PDUzMy4xOCkmJihfRnJlc2NvLnNob3c9X0ZyZXNjby5zaG93RmFsbGJhY2spO3ZhciBUaHVtYm5haWxzPXtpbml0aWFsaXplOmZ1bmN0aW9uKGkpe3RoaXMuZWxlbWVudD1pLHRoaXMuX3RodW1ibmFpbHM9W10sdGhpcy5fb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiLHRoaXMuX3ZhcnM9e3RodW1ibmFpbDp7fSx0aHVtYm5haWxGcmFtZTp7fSx0aHVtYm5haWxzOnt9fSx0aGlzLmJ1aWxkKCksdGhpcy5zdGFydE9ic2VydmluZygpfSxidWlsZDpmdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hcHBlbmQodGhpcy53cmFwcGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtd3JhcHBlclwiKS5hcHBlbmQodGhpcy5fc2xpZGVyPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVyXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLXByZXZpb3VzXCIpLmFwcGVuZCh0aGlzLl9wcmV2aW91c19idXR0b249JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl90aHVtYnM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy10aHVtYnNcIikuYXBwZW5kKHRoaXMuX3NsaWRlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2xpZGVcIikpKS5hcHBlbmQodGhpcy5fbmV4dD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxzLXNpZGUgZnItdGh1bWJuYWlscy1zaWRlLW5leHRcIikuYXBwZW5kKHRoaXMuX25leHRfYnV0dG9uPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24taWNvblwiKSkpKSkpfSxzdGFydE9ic2VydmluZzpmdW5jdGlvbigpe3RoaXMuX3NsaWRlci5kZWxlZ2F0ZShcIi5mci10aHVtYm5haWxcIixcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlPSQoaS50YXJnZXQpLmNsb3Nlc3QoXCIuZnItdGh1bWJuYWlsXCIpWzBdLHQ9ZSYmJChlKS5kYXRhKFwiZnItcG9zaXRpb25cIik7dCYmKHRoaXMuc2V0QWN0aXZlKHQpLFdpbmRvdy5zZXRQb3NpdGlvbih0KSl9LHRoaXMpKSx0aGlzLl9zbGlkZXIuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oaSl7aS5zdG9wUHJvcGFnYXRpb24oKX0pLHRoaXMuX3ByZXZpb3VzLmJpbmQoXCJjbGlja1wiLCQucHJveHkodGhpcy5wcmV2aW91c1BhZ2UsdGhpcykpLHRoaXMuX25leHQuYmluZChcImNsaWNrXCIsJC5wcm94eSh0aGlzLm5leHRQYWdlLHRoaXMpKX0sbG9hZDpmdW5jdGlvbihpKXt0aGlzLmNsZWFyKCk7dmFyIHQ9XCJob3Jpem9udGFsXCIscz0hMTskLmVhY2goaSwkLnByb3h5KGZ1bmN0aW9uKGksZSl7XCJ2ZXJ0aWNhbFwiPT09ZS5vcHRpb25zLnRodW1ibmFpbHMmJih0PVwidmVydGljYWxcIiksZS5vcHRpb25zLnRodW1ibmFpbHN8fChzPSEwKX0sdGhpcykpLHRoaXMuc2V0T3JpZW50YXRpb24odCksdGhpcy5fZGlzYWJsZWRHcm91cD1zLCQuZWFjaChpLCQucHJveHkoZnVuY3Rpb24oaSxlKXt0aGlzLl90aHVtYm5haWxzLnB1c2gobmV3IFRodW1ibmFpbChlLGkrMSkpfSx0aGlzKSksdGhpcy5maXRUb1ZpZXdwb3J0KCl9LGNsZWFyOmZ1bmN0aW9uKCl7JC5lYWNoKHRoaXMuX3RodW1ibmFpbHMsZnVuY3Rpb24oaSxlKXtlLnJlbW92ZSgpfSksdGhpcy5fdGh1bWJuYWlscz1bXSx0aGlzLl9wb3NpdGlvbj0tMSx0aGlzLl9wYWdlPS0xfSxzZXRPcmllbnRhdGlvbjpmdW5jdGlvbihpKXt0aGlzLl9vcmllbnRhdGlvbiYmV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLVwiK3RoaXMuX29yaWVudGF0aW9uKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtXCIraSksdGhpcy5fb3JpZW50YXRpb249aX0sZGlzYWJsZTpmdW5jdGlvbigpe1dpbmRvdy5lbGVtZW50LnJlbW92ZUNsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1kaXNhYmxlZFwiKSx0aGlzLl9kaXNhYmxlZD0hMH0sZW5hYmxlOmZ1bmN0aW9uKCl7V2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci10aHVtYm5haWxzLWRpc2FibGVkXCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1lbmFibGVkXCIpLHRoaXMuX2Rpc2FibGVkPSExfSxlbmFibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2Rpc2FibGVkfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXNhYmxlZH0sdXBkYXRlVmFyczpmdW5jdGlvbigpe3ZhciBpPVdpbmRvdy5lbGVtZW50LGU9dGhpcy5fdmFycyx0PVwiaG9yaXpvbnRhbFwiPT09dGhpcy5fb3JpZW50YXRpb24scz10P1widG9wXCI6XCJsZWZ0XCIsbj10P1wibGVmdFwiOlwidG9wXCIsbz10P1wiYm90dG9tXCI6XCJsZWZ0XCIsYT10P1widG9wXCI6XCJyaWdodFwiLGg9dD9cIndpZHRoXCI6XCJoZWlnaHRcIixyPXQ/XCJoZWlnaHRcIjpcIndpZHRoXCIsZD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsdG9wOlwiYm90dG9tXCIsYm90dG9tOlwidG9wXCJ9O3RoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIik7dmFyIGw9aS5pcyhcIjp2aXNpYmxlXCIpO2lmKGx8fGkuc2hvdygpLHRoaXMuZGlzYWJsZWQoKSYmdGhpcy5lbmFibGUoKSwhdGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIil8fHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPDJ8fHRoaXMuX2Rpc2FibGVkR3JvdXApcmV0dXJuIHRoaXMuZGlzYWJsZSgpLCQuZXh0ZW5kKHRoaXMuX3ZhcnMudGh1bWJuYWlscyx7d2lkdGg6MCxoZWlnaHQ6MH0pLGx8fGkuaGlkZSgpLHZvaWQgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiZnItdGh1bWJuYWlscy1tZWFzdXJlZFwiKTt0aGlzLmVuYWJsZSgpO3ZhciB1PXRoaXMuX3ByZXZpb3VzLGM9dGhpcy5fbmV4dCxwPUJvdW5kcy52aWV3cG9ydCgpLGY9dGhpcy5lbGVtZW50W1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKHIpXSgpLG09cGFyc2VJbnQodGhpcy5fdGh1bWJzLmNzcyhcInBhZGRpbmctXCIrcykpfHwwLHY9TWF0aC5tYXgoZi0yKm0sMCksZz1wYXJzZUludCh0aGlzLl90aHVtYnMuY3NzKFwicGFkZGluZy1cIituKSl8fDAsdz0ocGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1cIitvKSl8fDApKyhwYXJzZUludCh0aGlzLmVsZW1lbnQuY3NzKFwibWFyZ2luLVwiK2EpKXx8MCk7JC5leHRlbmQoZS50aHVtYm5haWxzLHtoZWlnaHQ6Zit3LHdpZHRoOnBbdD9cIndpZHRoXCI6XCJoZWlnaHRcIl0scGFkZGluZ1RvcDptfSksJC5leHRlbmQoZS50aHVtYm5haWwse2hlaWdodDp2LHdpZHRoOnZ9KSwkLmV4dGVuZChlLnRodW1ibmFpbEZyYW1lLHt3aWR0aDp2KzIqZyxoZWlnaHQ6Zn0pLGUuc2lkZXM9e3ByZXZpb3VzOnt3aWR0aDpjW1wiaW5uZXJcIitfLlN0cmluZy5jYXBpdGFsaXplKGgpXSgpLG1hcmdpbkxlZnQ6cGFyc2VJbnQodS5jc3MoXCJtYXJnaW4tXCIrbikpfHwwLG1hcmdpblJpZ2h0OnBhcnNlSW50KHUuY3NzKFwibWFyZ2luLVwiK2Rbbl0pKXx8MH0sbmV4dDp7d2lkdGg6Y1tcImlubmVyXCIrXy5TdHJpbmcuY2FwaXRhbGl6ZShoKV0oKSxtYXJnaW5MZWZ0OnBhcnNlSW50KGMuY3NzKFwibWFyZ2luLVwiK24pKXx8MCxtYXJnaW5SaWdodDpwYXJzZUludChjLmNzcyhcIm1hcmdpbi1cIitkW25dKSl8fDB9fTt2YXIgYj1wW2hdLHk9ZS50aHVtYm5haWxGcmFtZS53aWR0aCx4PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO2UudGh1bWJuYWlscy53aWR0aD1iLGUuc2lkZXMuZW5hYmxlZD0xPHgqeS9iO3ZhciBrPWIsQz1lLnNpZGVzLFM9Qy5wcmV2aW91cyxXPUMubmV4dCxNPVMubWFyZ2luTGVmdCtTLndpZHRoK1MubWFyZ2luUmlnaHQrVy5tYXJnaW5MZWZ0K1cud2lkdGgrVy5tYXJnaW5SaWdodDtlLnNpZGVzLmVuYWJsZWQmJihrLT1NKTt2YXIgVD14Knk7VDwoaz1NYXRoLmZsb29yKGsveSkqeSkmJihrPVQpO3ZhciBJPWsrKGUuc2lkZXMuZW5hYmxlZD9NOjApO2UuaXBwPU1hdGgucm91bmQoay95KSx0aGlzLl9tb2RlPVwicGFnZVwiLGUuaXBwPD0xJiYoST1rPWIsZS5zaWRlcy5lbmFibGVkPSExLHRoaXMuX21vZGU9XCJjZW50ZXJcIiksZS5wYWdlcz1NYXRoLmNlaWwoeCp5L2spLGUud3JhcHBlcj17d2lkdGg6SSsxLGhlaWdodDpmfSxlLnRodW1icz17d2lkdGg6ayxoZWlnaHQ6Zn0sZS5zbGlkZT17d2lkdGg6eCp5KzEsaGVpZ2h0OmZ9LGx8fGkuaGlkZSgpLHRoaXMuZWxlbWVudC5hZGRDbGFzcyhcImZyLXRodW1ibmFpbHMtbWVhc3VyZWRcIil9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGUoKSx0aGlzLnRodW1ibmFpbHMuaGlkZSgpLHRoaXMuX3Zpc2libGU9ITF9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgaT1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uO3JldHVybnt3aWR0aDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aDp0aGlzLl92YXJzLnRodW1ibmFpbHMuaGVpZ2h0LGhlaWdodDppP3RoaXMuX3ZhcnMudGh1bWJuYWlscy5oZWlnaHQ6dGhpcy5fdmFycy50aHVtYm5haWxzLndpZHRofX0sZml0VG9WaWV3cG9ydDpmdW5jdGlvbigpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciBpPSQuZXh0ZW5kKHt9LHRoaXMuX3ZhcnMpLGU9XCJob3Jpem9udGFsXCI9PT10aGlzLl9vcmllbnRhdGlvbjskLmVhY2godGhpcy5fdGh1bWJuYWlscyxmdW5jdGlvbihpLGUpe2UucmVzaXplKCl9KSx0aGlzLl9wcmV2aW91c1tpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fbmV4dFtpLnNpZGVzLmVuYWJsZWQ/XCJzaG93XCI6XCJoaWRlXCJdKCksdGhpcy5fdGh1bWJzLmNzcyh7d2lkdGg6aS50aHVtYnNbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl0saGVpZ2h0OmkudGh1bWJzW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSksdGhpcy5fc2xpZGUuY3NzKHt3aWR0aDppLnNsaWRlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdLGhlaWdodDppLnNsaWRlW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfSk7dmFyIHQ9e3dpZHRoOmkud3JhcHBlcltlP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6aS53cmFwcGVyW2U/XCJoZWlnaHRcIjpcIndpZHRoXCJdfTt0W1wibWFyZ2luLVwiKyhlP1wibGVmdFwiOlwidG9wXCIpXT1NYXRoLnJvdW5kKC0uNSppLndyYXBwZXIud2lkdGgpK1wicHhcIix0W1wibWFyZ2luLVwiKyhlP1widG9wXCI6XCJsZWZ0XCIpXT0wLHRoaXMud3JhcHBlci5jc3ModCksdGhpcy5fcG9zaXRpb24mJnRoaXMubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLCEwKX19LG1vdmVUb1BhZ2U6ZnVuY3Rpb24oaSl7aWYoIShpPDF8fGk+dGhpcy5fdmFycy5wYWdlc3x8aT09PXRoaXMuX3BhZ2UpKXt2YXIgZT10aGlzLl92YXJzLmlwcCooaS0xKSsxO3RoaXMubW92ZVRvKGUpfX0scHJldmlvdXNQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UtMSl9LG5leHRQYWdlOmZ1bmN0aW9uKCl7dGhpcy5tb3ZlVG9QYWdlKHRoaXMuX3BhZ2UrMSl9LHNob3c6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcy5fcG9zaXRpb248MDtpPDEmJihpPTEpO3ZhciB0PXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoO3Q8aSYmKGk9dCksdGhpcy5fcG9zaXRpb249aSx0aGlzLnNldEFjdGl2ZShpKSxcInBhZ2VcIj09PXRoaXMuX21vZGUmJnRoaXMuX3BhZ2U9PT1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCl8fHRoaXMubW92ZVRvKGksZSl9LG1vdmVUbzpmdW5jdGlvbihpLGUpe2lmKHRoaXMudXBkYXRlVmFycygpLCF0aGlzLmRpc2FibGVkKCkpe3ZhciB0LHMsbj1cImhvcml6b250YWxcIj09PXRoaXMuX29yaWVudGF0aW9uLG89LjUqQm91bmRzLnZpZXdwb3J0KClbbj9cIndpZHRoXCI6XCJoZWlnaHRcIl0sYT10aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoO2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7cz1NYXRoLmNlaWwoaS90aGlzLl92YXJzLmlwcCksdGhpcy5fcGFnZT1zLHQ9YSoodGhpcy5fcGFnZS0xKSp0aGlzLl92YXJzLmlwcCotMTt2YXIgaD1cImZyLXRodW1ibmFpbHMtc2lkZS1idXR0b24tZGlzYWJsZWRcIjt0aGlzLl9wcmV2aW91c19idXR0b25bKHM8Mj9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oaCksdGhpcy5fbmV4dF9idXR0b25bKHM+PXRoaXMuX3ZhcnMucGFnZXM/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKGgpfWVsc2UgdD1vKy0xKihhKihpLTEpKy41KmEpO3M9UGFnZXMucGFnZTt2YXIgcj17fSxkPXt9O3Jbbj9cInRvcFwiOlwibGVmdFwiXT0wLGRbbj9cImxlZnRcIjpcInRvcFwiXT10K1wicHhcIix0aGlzLl9zbGlkZS5zdG9wKCEwKS5jc3MocikuYW5pbWF0ZShkLGU/MDpzJiZzLnZpZXcub3B0aW9ucy5lZmZlY3RzLnRodW1ibmFpbHMuc2xpZGV8fDAsJC5wcm94eShmdW5jdGlvbigpe3RoaXMubG9hZEN1cnJlbnRQYWdlKCl9LHRoaXMpKX19LGxvYWRDdXJyZW50UGFnZTpmdW5jdGlvbigpe3ZhciBpLGU7aWYodGhpcy5fcG9zaXRpb24mJnRoaXMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgmJiEodGhpcy5fdGh1bWJuYWlscy5sZW5ndGg8MSkpe2lmKFwicGFnZVwiPT09dGhpcy5fbW9kZSl7aWYodGhpcy5fcGFnZTwxKXJldHVybjtpPSh0aGlzLl9wYWdlLTEpKnRoaXMuX3ZhcnMuaXBwKzEsZT1NYXRoLm1pbihpLTErdGhpcy5fdmFycy5pcHAsdGhpcy5fdGh1bWJuYWlscy5sZW5ndGgpfWVsc2V7dmFyIHQ9TWF0aC5jZWlsKHRoaXMuX3ZhcnMudGh1bWJuYWlscy53aWR0aC90aGlzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKTtpPU1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5tYXgodGhpcy5fcG9zaXRpb24tLjUqdCwwKSksMSksZT1NYXRoLmNlaWwoTWF0aC5taW4odGhpcy5fcG9zaXRpb24rLjUqdCkpLHRoaXMuX3RodW1ibmFpbHMubGVuZ3RoPGUmJihlPXRoaXMuX3RodW1ibmFpbHMubGVuZ3RoKX1mb3IodmFyIHM9aTtzPD1lO3MrKyl0aGlzLl90aHVtYm5haWxzW3MtMV0ubG9hZCgpfX0sc2V0QWN0aXZlOmZ1bmN0aW9uKGkpe3RoaXMuX3NsaWRlLmZpbmQoXCIuZnItdGh1bWJuYWlsLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImZyLXRodW1ibmFpbC1hY3RpdmVcIik7dmFyIGU9aSYmdGhpcy5fdGh1bWJuYWlsc1tpLTFdO2UmJmUuYWN0aXZhdGUoKX0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX3Bvc2l0aW9uJiZ0aGlzLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKX19O2Z1bmN0aW9uIFRodW1ibmFpbCgpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLF9zbGljZS5jYWxsKGFyZ3VtZW50cykpfSQuZXh0ZW5kKFRodW1ibmFpbC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oaSxlKXt0aGlzLnZpZXc9aSx0aGlzLl9wb3NpdGlvbj1lLHRoaXMucHJlQnVpbGQoKX0scHJlQnVpbGQ6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbD0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWxcIikuZGF0YShcImZyLXBvc2l0aW9uXCIsdGhpcy5fcG9zaXRpb24pfSxidWlsZDpmdW5jdGlvbigpe2lmKCF0aGlzLnRodW1ibmFpbEZyYW1lKXt2YXIgaT10aGlzLnZpZXcub3B0aW9ucztUaHVtYm5haWxzLl9zbGlkZS5hcHBlbmQodGhpcy50aHVtYm5haWxGcmFtZT0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtZnJhbWVcIikuYXBwZW5kKHRoaXMudGh1bWJuYWlsLmFwcGVuZCh0aGlzLnRodW1ibmFpbFdyYXBwZXI9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLXdyYXBwZXJcIikpKSksXCJpbWFnZVwiPT09dGhpcy52aWV3LnR5cGUmJnRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItbG9hZC10aHVtYm5haWxcIikuZGF0YShcInRodW1ibmFpbFwiLHt2aWV3OnRoaXMudmlldyxzcmM6aS50aHVtYm5haWx8fHRoaXMudmlldy51cmx9KTt2YXIgZT1pLnRodW1ibmFpbCYmaS50aHVtYm5haWwuaWNvbjtlJiZ0aGlzLnRodW1ibmFpbC5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWljb24gZnItdGh1bWJuYWlsLWljb24tXCIrZSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtb3ZlcmxheVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLW92ZXJsYXktYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMubG9hZGluZz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtbG9hZGluZ1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWxvYWRpbmctYmFja2dyb3VuZFwiKSkuYXBwZW5kKHRoaXMuc3Bpbm5lcj0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3Bpbm5lclwiKS5oaWRlKCkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1zcGlubmVyLXNwaW5cIikpKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1vdmVybGF5LWJvcmRlclwiKSkpLHRoaXMudGh1bWJuYWlsLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtc3RhdGVcIikpLHRoaXMucmVzaXplKCl9fSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLnRodW1ibmFpbEZyYW1lJiYodGhpcy50aHVtYm5haWxGcmFtZS5yZW1vdmUoKSx0aGlzLnRodW1ibmFpbEZyYW1lPW51bGwsdGhpcy5pbWFnZT1udWxsKSx0aGlzLnJlYWR5JiYodGhpcy5yZWFkeS5hYm9ydCgpLHRoaXMucmVhZHk9bnVsbCksdGhpcy52aW1lb1RodW1ibmFpbCYmKHRoaXMudmltZW9UaHVtYm5haWwuYWJvcnQoKSx0aGlzLnZpbWVvVGh1bWJuYWlsPW51bGwpLHRoaXMuX2xvYWRpbmc9ITEsdGhpcy5fcmVtb3ZlZD0hMCx0aGlzLnZpZXc9bnVsbCx0aGlzLl9jbGVhckRlbGF5KCl9LGxvYWQ6ZnVuY3Rpb24oKXtpZighKHRoaXMuX2xvYWRlZHx8dGhpcy5fbG9hZGluZ3x8dGhpcy5fcmVtb3ZlZCkpe3RoaXMudGh1bWJuYWlsV3JhcHBlcnx8dGhpcy5idWlsZCgpLHRoaXMuX2xvYWRpbmc9ITA7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMudGh1bWJuYWlsLGU9aSYmXCJib29sZWFuXCI9PT0kLnR5cGUoaSk/dGhpcy52aWV3LnVybDppfHx0aGlzLnZpZXcudXJsO2lmKHRoaXMuX3VybD1lKWlmKFwidmltZW9cIj09PXRoaXMudmlldy50eXBlKWlmKGU9PT1pKXRoaXMuX3VybD1lLHRoaXMuX2xvYWQodGhpcy5fdXJsKTtlbHNlIHN3aXRjaCh0aGlzLnZpZXcudHlwZSl7Y2FzZVwidmltZW9cIjp0aGlzLnZpbWVvVGh1bWJuYWlsPW5ldyBWaW1lb1RodW1ibmFpbCh0aGlzLnZpZXcudXJsLCQucHJveHkoZnVuY3Rpb24oaSl7dGhpcy5fdXJsPWksdGhpcy5fbG9hZChpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpKX1lbHNlIHRoaXMuX2xvYWQodGhpcy5fdXJsKX19LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYm5haWwuYWRkQ2xhc3MoXCJmci10aHVtYm5haWwtYWN0aXZlXCIpfSxfbG9hZDpmdW5jdGlvbihpKXt0aGlzLnRodW1ibmFpbFdyYXBwZXIucHJlcGVuZCh0aGlzLmltYWdlPSQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImZyLXRodW1ibmFpbC1pbWFnZVwiKS5hdHRyKHtzcmM6aX0pLmNzcyh7b3BhY2l0eToxZS00fSkpLHRoaXMuZmFkZUluU3Bpbm5lcigpLHRoaXMucmVhZHk9bmV3IEltYWdlUmVhZHkodGhpcy5pbWFnZVswXSwkLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkuaW1nO3RoaXMudGh1bWJuYWlsRnJhbWUmJnRoaXMuX2xvYWRpbmcmJih0aGlzLl9sb2FkZWQ9ITAsdGhpcy5fbG9hZGluZz0hMSx0aGlzLl9kaW1lbnNpb25zPXt3aWR0aDplLm5hdHVyYWxXaWR0aCxoZWlnaHQ6ZS5uYXR1cmFsSGVpZ2h0fSx0aGlzLnJlc2l6ZSgpLHRoaXMuc2hvdygpKX0sdGhpcyksJC5wcm94eShmdW5jdGlvbigpe3RoaXMuX2Vycm9yKCl9LHRoaXMpLHttZXRob2Q6dGhpcy52aWV3Lm9wdGlvbnMubG9hZGVkTWV0aG9kfSl9LF9lcnJvcjpmdW5jdGlvbigpe3RoaXMuX2xvYWRlZD0hMCx0aGlzLl9sb2FkaW5nPSExLHRoaXMudGh1bWJuYWlsLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWVycm9yXCIpLHRoaXMuaW1hZ2UmJnRoaXMuaW1hZ2UuaGlkZSgpLHRoaXMudGh1bWJuYWlsV3JhcHBlci5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItdGh1bWJuYWlsLWltYWdlXCIpKSx0aGlzLnNob3coKX0sZmFkZUluU3Bpbm5lcjpmdW5jdGlvbigpe2lmKFNwaW5uZXIuc3VwcG9ydGVkJiZ0aGlzLnZpZXcub3B0aW9ucy5zcGlubmVyKXt0aGlzLl9jbGVhckRlbGF5KCk7dmFyIGk9dGhpcy52aWV3Lm9wdGlvbnMuZWZmZWN0cy50aHVtYm5haWw7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5zcGlubmVyLnN0b3AoITApLmZhZGVUbyhpLnNob3d8fDAsMSl9LHRoaXMpLHRoaXMudmlldy5vcHRpb25zLnNwaW5uZXJEZWxheXx8MCl9fSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJEZWxheSgpO3ZhciBpPXRoaXMudmlldy5vcHRpb25zLmVmZmVjdHMudGh1bWJuYWlsO3RoaXMubG9hZGluZy5zdG9wKCEwKS5kZWxheShpLmRlbGF5KS5mYWRlVG8oaS5zaG93LDApfSxfY2xlYXJEZWxheTpmdW5jdGlvbigpe3RoaXMuX2RlbGF5JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KSx0aGlzLl9kZWxheT1udWxsKX0scmVzaXplOmZ1bmN0aW9uKCl7aWYodGhpcy50aHVtYm5haWxGcmFtZSl7dmFyIGk9XCJob3Jpem9udGFsXCI9PT1UaHVtYm5haWxzLl9vcmllbnRhdGlvbjtpZih0aGlzLnRodW1ibmFpbEZyYW1lLmNzcyh7d2lkdGg6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoZWlnaHQ6VGh1bWJuYWlscy5fdmFycy50aHVtYm5haWxGcmFtZVtpP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiXX0pLHRoaXMudGh1bWJuYWlsRnJhbWUuY3NzKHt0b3A6aT8wOlRodW1ibmFpbHMuX3ZhcnMudGh1bWJuYWlsRnJhbWUud2lkdGgqKHRoaXMuX3Bvc2l0aW9uLTEpLGxlZnQ6aT9UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbEZyYW1lLndpZHRoKih0aGlzLl9wb3NpdGlvbi0xKTowfSksdGhpcy50aHVtYm5haWxXcmFwcGVyKXt2YXIgZT1UaHVtYm5haWxzLl92YXJzLnRodW1ibmFpbDtpZih0aGlzLnRodW1ibmFpbC5jc3Moe3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0LFwibWFyZ2luLXRvcFwiOk1hdGgucm91bmQoLS41KmUuaGVpZ2h0KSxcIm1hcmdpbi1sZWZ0XCI6TWF0aC5yb3VuZCgtLjUqZS53aWR0aCksXCJtYXJnaW4tYm90dG9tXCI6MCxcIm1hcmdpbi1yaWdodFwiOjB9KSx0aGlzLl9kaW1lbnNpb25zKXt2YXIgdCxzPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0sbj1NYXRoLm1heChzLndpZHRoLHMuaGVpZ2h0KSxvPSQuZXh0ZW5kKHt9LHRoaXMuX2RpbWVuc2lvbnMpO2lmKG8ud2lkdGg+cy53aWR0aCYmby5oZWlnaHQ+cy5oZWlnaHQpe3ZhciBhPTEsaD0xOyh0PUZpdC53aXRoaW4ocyxvKSkud2lkdGg8cy53aWR0aCYmKGE9cy53aWR0aC90LndpZHRoKSx0LmhlaWdodDxzLmhlaWdodCYmKGg9cy5oZWlnaHQvdC5oZWlnaHQpO3ZhciByPU1hdGgubWF4KGEsaCk7MTxyJiYodC53aWR0aCo9cix0LmhlaWdodCo9ciksJC5lYWNoKFwid2lkdGggaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksZSl7dFtlXT1NYXRoLnJvdW5kKHRbZV0pfSl9ZWxzZSB0PUZpdC53aXRoaW4odGhpcy5fZGltZW5zaW9ucyxvLndpZHRoPHMud2lkdGh8fG8uaGVpZ2h0PHMuaGVpZ2h0P3t3aWR0aDpuLGhlaWdodDpufTpzKTt2YXIgZD1NYXRoLnJvdW5kKC41KnMud2lkdGgtLjUqdC53aWR0aCksbD1NYXRoLnJvdW5kKC41KnMuaGVpZ2h0LS41KnQuaGVpZ2h0KTt0aGlzLmltYWdlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3MoJC5leHRlbmQoe30sdCx7dG9wOmwsbGVmdDpkfSkpfX19fX0pO3ZhciBVST17X21vZGVzOltcImZ1bGxjbGlja1wiLFwib3V0c2lkZVwiLFwiaW5zaWRlXCJdLF91aTohMSxfdmFsaWRDbGlja1RhcmdldFNlbGVjdG9yOltcIi5mci1jb250ZW50LWVsZW1lbnRcIixcIi5mci1jb250ZW50XCIsXCIuZnItY29udGVudCA+IC5mci1zdHJva2VcIixcIi5mci1jb250ZW50ID4gLmZyLXN0cm9rZSAuZnItc3Ryb2tlLWNvbG9yXCJdLmpvaW4oXCIsIFwiKSxpbml0aWFsaXplOmZ1bmN0aW9uKGkpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7dGhpc1tlXS5pbml0aWFsaXplKCl9LHRoaXMpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXVpLWluc2lkZS1oaWRkZW4gZnItdWktZnVsbGNsaWNrLWhpZGRlblwiKX0sc2V0OmZ1bmN0aW9uKGkpe3RoaXMuX3VpJiYoV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci13aW5kb3ctdWktXCIrdGhpcy5fdWkpLE92ZXJsYXkuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLW92ZXJsYXktdWktXCIrdGhpcy5fdWkpKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXdpbmRvdy11aS1cIitpKSxPdmVybGF5LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci1vdmVybGF5LXVpLVwiK2kpLHRoaXMuX2VuYWJsZWQmJnRoaXMuX3VpJiZ0aGlzLl91aSE9PWkmJih0aGlzW3RoaXMuX3VpXS5kaXNhYmxlKCksdGhpc1tpXS5lbmFibGUoKSxVSVtpXS5zaG93KCkpLHRoaXMuX3VpPWl9LF9vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2gmJnRoaXMuc2hvdygpfSxlbmFibGU6ZnVuY3Rpb24oKXskLmVhY2godGhpcy5fbW9kZXMsJC5wcm94eShmdW5jdGlvbihpLGUpe1VJW2VdW2U9PT10aGlzLl91aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiXSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0uZGlzYWJsZSgpfSx0aGlzKSksdGhpcy5fZW5hYmxlZD0hMX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uYWRqdXN0UHJldk5leHQoaSxlKX0sc2hvdzpmdW5jdGlvbihpLGUpe1VJW3RoaXMuX3VpXS5zaG93KGksZSl9LGhpZGU6ZnVuY3Rpb24oaSxlKXtVSVt0aGlzLl91aV0uaGlkZShpLGUpfSxyZXNldDpmdW5jdGlvbigpeyQuZWFjaCh0aGlzLl9tb2RlcywkLnByb3h5KGZ1bmN0aW9uKGksZSl7VUlbZV0ucmVzZXQoKX0sdGhpcykpfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgaT1QYWdlcy5wYWdlO2kmJnRoaXMuc2V0KGkuX3VpKX19O3JldHVybiBVSS5mdWxsY2xpY2s9e2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmJ1aWxkKCksdGhpcy5fc2Nyb2xsTGVmdD0tMX0sYnVpbGQ6ZnVuY3Rpb24oKXtXaW5kb3cuX2JveC5hcHBlbmQodGhpcy5fcHJldmlvdXM9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLXByZXZpb3VzIGZyLXNpZGUtcHJldmlvdXMtZnVsbGNsaWNrIGZyLXRvZ2dsZS11aVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b25cIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWJhY2tncm91bmRcIikpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1pY29uXCIpKSkpLmFwcGVuZCh0aGlzLl9uZXh0PSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUgZnItc2lkZS1uZXh0IGZyLXNpZGUtbmV4dC1mdWxsY2xpY2sgZnItdG9nZ2xlLXVpXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX2Nsb3NlPSQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlIGZyLWNsb3NlLWZ1bGxjbGlja1wiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKSx0aGlzLl94PS0xLHRoaXMuX3k9LTEsdGhpcy5fc2Nyb2xsTGVmdD0tMSx0aGlzLnJlc2V0UHJldk5leHQoKSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0scmVzZXRQcmV2TmV4dDpmdW5jdGlvbigpe3RoaXMuX3ByZXZpb3VzLmFkZCh0aGlzLl9uZXh0KS5zdG9wKCEwKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2V1cFwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlVXAsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLl9zaG93SGFuZGxlcj0kLnByb3h5KHRoaXMuc2hvdyx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXI9JC5wcm94eSh0aGlzLmhpZGUsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2Vtb3ZlXCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlRW50ZXIsdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlRW50ZXIsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLXNpZGVcIix0aGlzLl9vblNpZGVNb3VzZUxlYXZlSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2lkZU1vdXNlTGVhdmUsdGhpcykpLCQod2luZG93KS5vbihcInNjcm9sbFwiLHRoaXMuX29uU2Nyb2xsSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMpKSkpfSx1bmJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyJiYoV2luZG93Ll9wYWdlcy5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlciksdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj1udWxsLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLHRoaXMuX3Nob3dIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsdGhpcy5faGlkZUhhbmRsZXIpLm9mZihcIm1vdXNlbW92ZVwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGFpbmVyXCIsdGhpcy5fb25Nb3VzZUxlYXZlSGFuZGxlcikub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRhaW5lclwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSxlKXt2YXIgdD1QYWdlcy5wYWdlO2lmKHQpe3ZhciBzPVdpbmRvdy5lbGVtZW50LmlzKFwiOnZpc2libGVcIik7c3x8V2luZG93LmVsZW1lbnQuc2hvdygpO3ZhciBuPXRoaXMuX3ByZXZpb3VzLmF0dHIoXCJzdHlsZVwiKTt0aGlzLl9wcmV2aW91cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7dmFyIG89cGFyc2VJbnQodGhpcy5fcHJldmlvdXMuY3NzKFwibWFyZ2luLXRvcFwiKSk7dGhpcy5fcHJldmlvdXMuYXR0cih7c3R5bGU6bn0pLHN8fFdpbmRvdy5lbGVtZW50LmhpZGUoKTt2YXIgYT10Ll9pbmZvSGVpZ2h0fHwwLGg9dGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLHI9e1wibWFyZ2luLXRvcFwiOm8tLjUqYX0sZD1cIm51bWJlclwiPT09JC50eXBlKGUpP2U6UGFnZXMucGFnZSYmUGFnZXMucGFnZS52aWV3Lm9wdGlvbnMuZWZmZWN0cy5jb250ZW50LnNob3d8fDA7dGhpcy5vcGVuaW5nJiYoZD0wKSxoLnN0b3AoITApLmFuaW1hdGUocixkLGkpLHRoaXMuX3ByZXZpb3VzWyhXaW5kb3cubWF5UHJldmlvdXMoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHRoaXMuX25leHRbKFdpbmRvdy5tYXlOZXh0KCk/XCJyZW1vdmVcIjpcImFkZFwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1kaXNhYmxlZFwiKSxoWyh0Ll90b3RhbDwyP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtaGlkZGVuXCIpLGkmJmkoKX1lbHNlIGkmJmkoKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5fc2Nyb2xsTGVmdD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpfSxfb25Nb3VzZU1vdmU6ZnVuY3Rpb24oaSl7aWYoIVN1cHBvcnQubW9iaWxlVG91Y2gpe3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0PV8uU3RyaW5nLmNhcGl0YWxpemUoZSkscz0hIWUmJldpbmRvd1tcIm1heVwiK3RdKCk7aWYoZSE9PXRoaXMuX2hvdmVyaW5nU2lkZXx8cyE9PXRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlKXN3aXRjaCh0aGlzLl9ob3ZlcmluZ1NpZGU9ZSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1zLFdpbmRvdy5fYm94WyhzP1wiYWRkXCI6XCJyZW1vdmVcIikrXCJDbGFzc1wiXShcImZyLWhvdmVyaW5nLWNsaWNrYWJsZVwiKSxlKXtjYXNlXCJwcmV2aW91c1wiOldpbmRvdy5fYm94LmFkZENsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpO2JyZWFrO2Nhc2VcIm5leHRcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJmci1ob3ZlcmluZy1wcmV2aW91c1wiKX19fSxfb25Nb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe1dpbmRvdy5fYm94LnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctY2xpY2thYmxlIGZyLWhvdmVyaW5nLXByZXZpb3VzIGZyLWhvdmVyaW5nLW5leHRcIiksdGhpcy5faG92ZXJpbmdTaWRlPSExfSxfb25Nb3VzZVVwOmZ1bmN0aW9uKGkpe2lmKCEoMTxpLndoaWNoKSlpZigxIT09UGFnZXMucGFnZXMubGVuZ3RoKXt2YXIgZT10aGlzLl9nZXRFdmVudFNpZGUoaSk7V2luZG93W2VdKCksdGhpcy5fb25Nb3VzZU1vdmUoaSl9ZWxzZSBXaW5kb3cuaGlkZSgpfSxfb25Nb3VzZUVudGVyOmZ1bmN0aW9uKGkpe3RoaXMuX29uTW91c2VNb3ZlKGkpfSxfZ2V0RXZlbnRTaWRlOmZ1bmN0aW9uKGkpey0xPHRoaXMuX3Njcm9sbExlZnQ/dGhpcy5fc2Nyb2xsTGVmdDp0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCk7cmV0dXJuIGkucGFnZVgtV2luZG93Ll9ib3hQb3NpdGlvbi5sZWZ0LXRoaXMuX3Njcm9sbExlZnQ8LjUqV2luZG93Ll9ib3hEaW1lbnNpb25zLndpZHRoP1wicHJldmlvdXNcIjpcIm5leHRcIn0sX29uU2lkZU1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5faG92ZXJpbmdTaWRlQnV0dG9uPSEwLHRoaXMuX2hvdmVyaW5nU2lkZT10aGlzLl9nZXRFdmVudFNpZGUoaSksdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9V2luZG93W1wibWF5XCIrXy5TdHJpbmcuY2FwaXRhbGl6ZSh0aGlzLl9ob3ZlcmluZ1NpZGUpXSgpLHRoaXMuY2xlYXJUaW1lcigpfSxfb25TaWRlTW91c2VMZWF2ZTpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITEsdGhpcy5faG92ZXJpbmdTaWRlPSExLHRoaXMuX21heUNsaWNrSG92ZXJpbmdTaWRlPSExLHRoaXMuc3RhcnRUaW1lcigpfSxzaG93OmZ1bmN0aW9uKGkpe2lmKHRoaXMuX3Zpc2libGUpcmV0dXJuIHRoaXMuc3RhcnRUaW1lcigpLHZvaWQoXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCkpO3RoaXMuX3Zpc2libGU9ITAsdGhpcy5zdGFydFRpbWVyKCksV2luZG93LmVsZW1lbnQuYWRkQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5yZW1vdmVDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIiksQnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxoaWRlOmZ1bmN0aW9uKGkpe3ZhciBlPVBhZ2VzLnBhZ2UmJlBhZ2VzLnBhZ2Uudmlldy50eXBlO3RoaXMuX3Zpc2libGUmJighZXx8XCJ5b3V0dWJlXCIhPT1lJiZcInZpbWVvXCIhPT1lKSYmKHRoaXMuX3Zpc2libGU9ITEsV2luZG93LmVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJmci12aXNpYmxlLWZ1bGxjbGljay11aVwiKS5hZGRDbGFzcyhcImZyLWhpZGRlbi1mdWxsY2xpY2stdWlcIikpLFwiZnVuY3Rpb25cIj09PSQudHlwZShpKSYmaSgpfSxjbGVhclRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8V2luZG93LnRpbWVycy5jbGVhcihcInVpLWZ1bGxjbGlja1wiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe1N1cHBvcnQubW9iaWxlVG91Y2h8fCh0aGlzLmNsZWFyVGltZXIoKSxXaW5kb3cudGltZXJzLnNldChcInVpLWZ1bGxjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKX0sdGhpcyksV2luZG93LnZpZXc/V2luZG93LnZpZXcub3B0aW9ucy51aURlbGF5OjApKX19LFVJLmluc2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe30sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5iaW5kKCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLnVuYmluZCgpfSxiaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlcnx8KHRoaXMudW5iaW5kKCksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItY2xvc2VcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxXaW5kb3cuaGlkZSgpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtcHJldmlvdXNcIiwkLnByb3h5KGZ1bmN0aW9uKGkpe1dpbmRvdy5wcmV2aW91cygpLHRoaXMuX29uTW91c2VNb3ZlKGkpfSx0aGlzKSkub24oXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLFdpbmRvdy5lbGVtZW50Lm9uKFwiY2xpY2tcIixcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIsdGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2VIYW5kbGVyPSQucHJveHkodGhpcy5fZGVsZWdhdGVPdmVybGF5Q2xvc2UsdGhpcykpLFN1cHBvcnQubW9iaWxlVG91Y2h8fChXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fc2hvd0hhbmRsZXI9JC5wcm94eSh0aGlzLnNob3csdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcj0kLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fbW91c2Vtb3ZlSGFuZGxlcj0kLnByb3h5KGZ1bmN0aW9uKGkpe3ZhciBlPWkucGFnZVgsdD1pLnBhZ2VZO3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbnx8dD09PXRoaXMuX3kmJmU9PT10aGlzLl94fHwodGhpcy5feD1lLHRoaXMuX3k9dCx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSl9LHRoaXMpKSxXaW5kb3cuX3BhZ2VzLm9uKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIsJC5wcm94eShmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuX29uTW91c2VMZWF2ZShpKX0sdGhpcykpLFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1pbmZvXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuY2xlYXJUaW1lcigpfSx0aGlzKSksV2luZG93Ll9wYWdlcy5vbihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTW92ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTW92ZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vbk1vdXNlTGVhdmUsdGhpcykpLm9uKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUVudGVyLHRoaXMpKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUVudGVyLHRoaXMpKS5vbihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNpZGVNb3VzZUxlYXZlLHRoaXMpKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXI9JC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzKSkpKX0sdW5iaW5kOmZ1bmN0aW9uKCl7dGhpcy5fb25Nb3VzZVVwSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2V1cFwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlVXBIYW5kbGVyKSx0aGlzLl9vbk1vdXNlVXBIYW5kbGVyPW51bGwsV2luZG93Ll9wYWdlcy5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLWNsb3NlXCIpLm9mZihcImNsaWNrXCIsXCIuZnItY29udGVudCAuZnItc2lkZS1wcmV2aW91c1wiKS5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRlbnQgLmZyLXNpZGUtbmV4dFwiKSxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyJiYoV2luZG93LmVsZW1lbnQub2ZmKFwibW91c2VlbnRlclwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9zaG93SGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9oaWRlSGFuZGxlcikub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX21vdXNlbW92ZUhhbmRsZXIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mbywgLmZyLWNsb3NlXCIpLFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItaW5mb1wiKSxXaW5kb3cuX3BhZ2VzLm9mZihcIm1vdXNlbW92ZVwiLFwiLmZyLWNvbnRlbnQtZWxlbWVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX3Nob3dIYW5kbGVyPW51bGwpKX0scmVzZXQ6ZnVuY3Rpb24oKXtXaW5kb3cudGltZXJzLmNsZWFyKFwidWktZnVsbGNsaWNrXCIpLHRoaXMuX3g9LTEsdGhpcy5feT0tMSx0aGlzLl9zY3JvbGxMZWZ0PS0xLHRoaXMuX2hvdmVyaW5nU2lkZT0hMSx0aGlzLl9vbk1vdXNlTGVhdmUoKX0sYWRqdXN0UHJldk5leHQ6ZnVuY3Rpb24oaSl7aSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCksdGhpcy5jbGVhclRpbWVyKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITEsdGhpcy5zdGFydFRpbWVyKCl9LHNob3c6ZnVuY3Rpb24oaSl7aWYodGhpcy5fdmlzaWJsZSlyZXR1cm4gdGhpcy5zdGFydFRpbWVyKCksdm9pZChcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKSk7dGhpcy5fdmlzaWJsZT0hMCx0aGlzLnN0YXJ0VGltZXIoKSxXaW5kb3cuZWxlbWVudC5hZGRDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLnJlbW92ZUNsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSxcImZ1bmN0aW9uXCI9PT0kLnR5cGUoaSkmJmkoKX0saGlkZTpmdW5jdGlvbihpKXt0aGlzLl92aXNpYmxlJiYodGhpcy5fdmlzaWJsZT0hMSxXaW5kb3cuZWxlbWVudC5yZW1vdmVDbGFzcyhcImZyLXZpc2libGUtaW5zaWRlLXVpXCIpLmFkZENsYXNzKFwiZnItaGlkZGVuLWluc2lkZS11aVwiKSksXCJmdW5jdGlvblwiPT09JC50eXBlKGkpJiZpKCl9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXtTdXBwb3J0Lm1vYmlsZVRvdWNofHxXaW5kb3cudGltZXJzLmNsZWFyKFwidWktaW5zaWRlXCIpfSxzdGFydFRpbWVyOmZ1bmN0aW9uKCl7U3VwcG9ydC5tb2JpbGVUb3VjaHx8KHRoaXMuY2xlYXJUaW1lcigpLFdpbmRvdy50aW1lcnMuc2V0KFwidWktaW5zaWRlXCIsJC5wcm94eShmdW5jdGlvbigpe3RoaXMuaGlkZSgpfSx0aGlzKSxXaW5kb3cudmlldz9XaW5kb3cudmlldy5vcHRpb25zLnVpRGVsYXk6MCkpfX0sVUkub3V0c2lkZT17aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuYnVpbGQoKSx0aGlzLl9zY3JvbGxMZWZ0PS0xfSxidWlsZDpmdW5jdGlvbigpe1dpbmRvdy5fYm94LmFwcGVuZCh0aGlzLl9wcmV2aW91cz0kKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlIGZyLXNpZGUtcHJldmlvdXMgZnItc2lkZS1wcmV2aW91cy1vdXRzaWRlXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvblwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24tYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uLWljb25cIikpKSkuYXBwZW5kKHRoaXMuX25leHQ9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZSBmci1zaWRlLW5leHQgZnItc2lkZS1uZXh0LW91dHNpZGVcIikuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLXNpZGUtYnV0dG9uXCIpLmFwcGVuZCgkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmci1zaWRlLWJ1dHRvbi1iYWNrZ3JvdW5kXCIpKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItc2lkZS1idXR0b24taWNvblwiKSkpKS5hcHBlbmQodGhpcy5fY2xvc2U9JChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UgZnItY2xvc2Utb3V0c2lkZVwiKS5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiZnItY2xvc2UtYmFja2dyb3VuZFwiKSkuYXBwZW5kKCQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImZyLWNsb3NlLWljb25cIikpKSxCcm93c2VyLklFJiZCcm93c2VyLklFPD03JiZ0aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCkuYWRkKHRoaXMuX2Nsb3NlKS5oaWRlKCksdGhpcy5fY2xvc2Uub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLFdpbmRvdy5oaWRlKCl9LHRoaXMpKSx0aGlzLl9wcmV2aW91cy5vbihcImNsaWNrXCIsJC5wcm94eShmdW5jdGlvbihpKXtXaW5kb3cucHJldmlvdXMoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpLHRoaXMuX25leHQub24oXCJjbGlja1wiLCQucHJveHkoZnVuY3Rpb24oaSl7V2luZG93Lm5leHQoKSx0aGlzLl9vbk1vdXNlTW92ZShpKX0sdGhpcykpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmJpbmQoKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMudW5iaW5kKCl9LHJlc2V0OmZ1bmN0aW9uKCl7V2luZG93LnRpbWVycy5jbGVhcihcInVpLW91dHNpZGVcIiksdGhpcy5feD0tMSx0aGlzLl95PS0xLHRoaXMuX3Njcm9sbExlZnQ9LTEsdGhpcy5fb25Nb3VzZUxlYXZlKCl9LGJpbmQ6ZnVuY3Rpb24oKXt0aGlzLl9vbk1vdXNlVXBIYW5kbGVyfHwodGhpcy51bmJpbmQoKSxXaW5kb3cuZWxlbWVudC5vbihcIm1vdXNldXBcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZVVwSGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VVcCx0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXI9JC5wcm94eSh0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZSx0aGlzKSksU3VwcG9ydC5tb2JpbGVUb3VjaHx8KFdpbmRvdy5fcGFnZXMub24oXCJtb3VzZW1vdmVcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZU1vdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZU1vdmUsdGhpcykpLm9uKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25Nb3VzZUxlYXZlLHRoaXMpKS5vbihcIm1vdXNlZW50ZXJcIixcIi5mci1jb250ZW50XCIsdGhpcy5fb25Nb3VzZUVudGVySGFuZGxlcj0kLnByb3h5KHRoaXMuX29uTW91c2VFbnRlcix0aGlzKSksV2luZG93LmVsZW1lbnQub24oXCJtb3VzZWVudGVyXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlRW50ZXJIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VFbnRlcix0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsXCIuZnItc2lkZVwiLHRoaXMuX29uU2lkZU1vdXNlTGVhdmVIYW5kbGVyPSQucHJveHkodGhpcy5fb25TaWRlTW91c2VMZWF2ZSx0aGlzKSksJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsdGhpcy5fb25TY3JvbGxIYW5kbGVyPSQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcykpKSl9LHVuYmluZDpmdW5jdGlvbigpe3RoaXMuX29uTW91c2VVcEhhbmRsZXImJihXaW5kb3cuZWxlbWVudC5vZmYoXCJtb3VzZXVwXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VVcEhhbmRsZXIpLHRoaXMuX29uTW91c2VVcEhhbmRsZXI9bnVsbCxXaW5kb3cuZWxlbWVudC5vZmYoXCJjbGlja1wiLFwiLmZyLWNvbnRhaW5lciwgLmZyLXRodW1ibmFpbHMsIC5mci10aHVtYm5haWxzLXdyYXBwZXJcIix0aGlzLl9kZWxlZ2F0ZU92ZXJsYXlDbG9zZUhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlciYmKFdpbmRvdy5fcGFnZXMub2ZmKFwibW91c2Vtb3ZlXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcikub2ZmKFwibW91c2VsZWF2ZVwiLFwiLmZyLWNvbnRlbnRcIix0aGlzLl9vbk1vdXNlTGVhdmVIYW5kbGVyKS5vZmYoXCJtb3VzZWVudGVyXCIsXCIuZnItY29udGVudFwiLHRoaXMuX29uTW91c2VFbnRlckhhbmRsZXIpLFdpbmRvdy5lbGVtZW50Lm9mZihcIm1vdXNlZW50ZXJcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VFbnRlckhhbmRsZXIpLm9mZihcIm1vdXNlbGVhdmVcIixcIi5mci1zaWRlXCIsdGhpcy5fb25TaWRlTW91c2VMZWF2ZUhhbmRsZXIpLCQod2luZG93KS5vZmYoXCJzY3JvbGxcIix0aGlzLl9vblNjcm9sbEhhbmRsZXIpLHRoaXMuX29uTW91c2VNb3ZlSGFuZGxlcj1udWxsKSl9LGFkanVzdFByZXZOZXh0OmZ1bmN0aW9uKGksZSl7dmFyIHQ9UGFnZXMucGFnZTtpZih0KXt2YXIgcz10aGlzLl9wcmV2aW91cy5hZGQodGhpcy5fbmV4dCk7dGhpcy5fcHJldmlvdXNbKFdpbmRvdy5tYXlQcmV2aW91cygpP1wicmVtb3ZlXCI6XCJhZGRcIikrXCJDbGFzc1wiXShcImZyLXNpZGUtZGlzYWJsZWRcIiksdGhpcy5fbmV4dFsoV2luZG93Lm1heU5leHQoKT9cInJlbW92ZVwiOlwiYWRkXCIpK1wiQ2xhc3NcIl0oXCJmci1zaWRlLWRpc2FibGVkXCIpLHNbKHQuX3RvdGFsPDI/XCJhZGRcIjpcInJlbW92ZVwiKStcIkNsYXNzXCJdKFwiZnItc2lkZS1oaWRkZW5cIiksaSYmaSgpfWVsc2UgaSYmaSgpfSxfb25TY3JvbGw6ZnVuY3Rpb24oKXt0aGlzLl9zY3JvbGxMZWZ0PSQod2luZG93KS5zY3JvbGxMZWZ0KCl9LF9kZWxlZ2F0ZU92ZXJsYXlDbG9zZTpmdW5jdGlvbihpKXt2YXIgZT1QYWdlcy5wYWdlO2UmJmUudmlldy5vcHRpb25zLm92ZXJsYXkmJiFlLnZpZXcub3B0aW9ucy5vdmVybGF5LmNsb3NlfHwkKGkudGFyZ2V0KS5pcyhcIi5mci1jb250YWluZXIsIC5mci10aHVtYm5haWxzLCAuZnItdGh1bWJuYWlscy13cmFwcGVyXCIpJiYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksV2luZG93LmhpZGUoKSl9LF9vbk1vdXNlTW92ZTpmdW5jdGlvbihpKXtpZighU3VwcG9ydC5tb2JpbGVUb3VjaCl7dmFyIGU9dGhpcy5fZ2V0RXZlbnRTaWRlKGkpLHQ9Xy5TdHJpbmcuY2FwaXRhbGl6ZShlKSxzPSEhZSYmV2luZG93W1wibWF5XCIrdF0oKTtpZigoMT09PVBhZ2VzLnBhZ2VzLmxlbmd0aHx8UGFnZXMucGFnZSYmXCJjbG9zZVwiPT09UGFnZXMucGFnZS52aWV3Lm9wdGlvbnMub25DbGljaykmJihlPSExKSxlIT09dGhpcy5faG92ZXJpbmdTaWRlfHxzIT09dGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGUpaWYodGhpcy5faG92ZXJpbmdTaWRlPWUsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9cyxlKXN3aXRjaChXaW5kb3cuX2JveFsocz9cImFkZFwiOlwicmVtb3ZlXCIpK1wiQ2xhc3NcIl0oXCJmci1ob3ZlcmluZy1jbGlja2FibGVcIiksZSl7Y2FzZVwicHJldmlvdXNcIjpXaW5kb3cuX2JveC5hZGRDbGFzcyhcImZyLWhvdmVyaW5nLXByZXZpb3VzXCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctbmV4dFwiKTticmVhaztjYXNlXCJuZXh0XCI6V2luZG93Ll9ib3guYWRkQ2xhc3MoXCJmci1ob3ZlcmluZy1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZnItaG92ZXJpbmctcHJldmlvdXNcIil9ZWxzZSBXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpfX0sX29uTW91c2VMZWF2ZTpmdW5jdGlvbihpKXtXaW5kb3cuX2JveC5yZW1vdmVDbGFzcyhcImZyLWhvdmVyaW5nLWNsaWNrYWJsZSBmci1ob3ZlcmluZy1wcmV2aW91cyBmci1ob3ZlcmluZy1uZXh0XCIpLHRoaXMuX2hvdmVyaW5nU2lkZT0hMX0sX29uTW91c2VVcDpmdW5jdGlvbihpKXtpZighKDE8aS53aGljaCkmJiQoaS50YXJnZXQpLmlzKFVJLl92YWxpZENsaWNrVGFyZ2V0U2VsZWN0b3IpKWlmKDE9PT1QYWdlcy5wYWdlcy5sZW5ndGh8fFBhZ2VzLnBhZ2UmJlwiY2xvc2VcIj09PVBhZ2VzLnBhZ2Uudmlldy5vcHRpb25zLm9uQ2xpY2spV2luZG93LmhpZGUoKTtlbHNle3ZhciBlPXRoaXMuX2dldEV2ZW50U2lkZShpKTtXaW5kb3dbZV0oKSx0aGlzLl9vbk1vdXNlTW92ZShpKX19LF9vbk1vdXNlRW50ZXI6ZnVuY3Rpb24oaSl7dGhpcy5fb25Nb3VzZU1vdmUoaSl9LF9nZXRFdmVudFNpZGU6ZnVuY3Rpb24oaSl7LTE8dGhpcy5fc2Nyb2xsTGVmdD90aGlzLl9zY3JvbGxMZWZ0OnRoaXMuX3Njcm9sbExlZnQ9JCh3aW5kb3cpLnNjcm9sbExlZnQoKTtyZXR1cm4gaS5wYWdlWC1XaW5kb3cuX2JveFBvc2l0aW9uLmxlZnQtdGhpcy5fc2Nyb2xsTGVmdDwuNSpXaW5kb3cuX2JveERpbWVuc2lvbnMud2lkdGg/XCJwcmV2aW91c1wiOlwibmV4dFwifSxzaG93OmZ1bmN0aW9uKCl7QnJvd3Nlci5JRSYmQnJvd3Nlci5JRTw9NyYmdGhpcy5fcHJldmlvdXMuYWRkKHRoaXMuX25leHQpLmFkZCh0aGlzLl9jbG9zZSkuc2hvdygpfSxoaWRlOmZ1bmN0aW9uKCl7fSxfb25TaWRlTW91c2VFbnRlcjpmdW5jdGlvbihpKXt0aGlzLl9ob3ZlcmluZ1NpZGVCdXR0b249ITAsdGhpcy5faG92ZXJpbmdTaWRlPXRoaXMuX2dldEV2ZW50U2lkZShpKSx0aGlzLl9tYXlDbGlja0hvdmVyaW5nU2lkZT1XaW5kb3dbXCJtYXlcIitfLlN0cmluZy5jYXBpdGFsaXplKHRoaXMuX2hvdmVyaW5nU2lkZSldKCl9LF9vblNpZGVNb3VzZUxlYXZlOmZ1bmN0aW9uKGkpe3RoaXMuX2hvdmVyaW5nU2lkZUJ1dHRvbj0hMSx0aGlzLl9ob3ZlcmluZ1NpZGU9ITEsdGhpcy5fbWF5Q2xpY2tIb3ZlcmluZ1NpZGU9ITF9LGNsZWFyVGltZXI6ZnVuY3Rpb24oKXt9fSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihpKXtfRnJlc2NvLmluaXRpYWxpemUoKX0pLEZyZXNjb30pOyIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2subWluJztcbmltcG9ydCBGcmVzY28gZnJvbSAnLi9mcmVzY28vanMvZnJlc2NvLm1pbic7XG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcblxuaW1wb3J0IGNoZWNrb3V0IGZyb20gJy4vanMvY2hlY2tvdXQtbm9ibGVzcy5qcyc7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyQ29udGFpbmVyJykuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBjb250ZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpLmNsaWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3coY2Fyb3VzZWxFbGVtZW50KSB7XG4gIGxldCBpbWdTbGlkZXJIZWlnaHQ7XG4gIGxldCBhcnJvd1RvcFZhbHVlO1xuICBpZiAoY2Fyb3VzZWxFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWdTbGlkZXJIZWlnaHQgPSAkKCcuc2xpY2stYWN0aXZlIC5jYXJkLWltZy10b3AnLCBjYXJvdXNlbEVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKGNhcm91c2VsRWxlbWVudCkubmV4dCgnLnNsaWRlci1jb250cm9scycpLmNzcygndG9wJywgYXJyb3dUb3BWYWx1ZSArICdweCcpO1xuICB9IGVsc2Uge1xuICAgIGltZ1NsaWRlckhlaWdodCA9ICQoJy5zbGljay1hY3RpdmUgLmNhcmQtaW1nLXRvcCcpLm91dGVySGVpZ2h0KCk7XG4gICAgYXJyb3dUb3BWYWx1ZSA9IE1hdGgucm91bmQoaW1nU2xpZGVySGVpZ2h0IC8gMiAtIDE3KTtcbiAgICAkKCcuc2xpZGVyLWNvbnRyb2xzJykubm90KCcucHJvZHVjdC1nYWxsZXJ5JykuY3NzKCd0b3AnLCBhcnJvd1RvcFZhbHVlICsgJ3B4Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCkge1xuICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKTtcbiAgY29uc3QgaW1nU2xpZGVySGVpZ2h0ID0gJCgnLnNsaWNrLWFjdGl2ZSBpbWcnLCBlbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICBjb25zdCBhcnJvd1RvcFZhbHVlID0gTWF0aC5yb3VuZChpbWdTbGlkZXJIZWlnaHQpO1xuICAkKGVsZW1lbnQpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKS5jc3MoJ3RvcCcsIGFycm93VG9wVmFsdWUgKyAncHgnKTtcbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgaWYgKGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0UHJvZHVjdHMnKSAmJiAhalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RQcm9kdWN0cycpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldi1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgXCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE5MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgICQoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdFByb2R1Y3RzJykpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsTGF0ZXN0QnVuZGxlcycpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxMYXRlc3RCdW5kbGVzJykub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvdyhqUXVlcnkoJyNjYXJvdXNlbExhdGVzdEJ1bmRsZXMnKSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKSAmJiAhalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI3Byb2R1Y3RHYWxsZXJ5Jykuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjcHJvZHVjdEdhbGxlcnknKS5uZXh0KCcuc2xpZGVyLWNvbnRyb2xzJyksXG4gICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBwcmV2XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+UHJldmlvdXM8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gbmV4dFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2l6ZSBQcm9kdWN0IEdhbGxlcnkgc2xpZGVyIHdoZW4gcmVzaXppbmcgZnJvbSBkZXNrdG9wIHRvIG1vYmlsZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNwcm9kdWN0R2FsbGVyeScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXZcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj5QcmV2aW91czwvYnV0dG9uPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICBsZXQgc2xpZGVyID0gJCgnI3Byb2R1Y3RHYWxsZXJ5Jyk7XG4gICAgaWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDc2OCAmJiBzbGlkZXJbMF0uc2xpY2sgJiYgc2xpZGVyWzBdLnNsaWNrLnVuc2xpY2tlZCkge1xuICAgICAgc2xpZGVyLnNsaWNrKG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbENvbXBsZXRlWW91clN0eWxlJykgJiYgIWpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIGpRdWVyeSgnI2Nhcm91c2VsQ29tcGxldGVZb3VyU3R5bGUnKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgIGFwcGVuZEFycm93czogalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxOTIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAkKCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgcmVwbGFjZUNhcm91c2VsQXJyb3coalF1ZXJ5KCcjY2Fyb3VzZWxDb21wbGV0ZVlvdXJTdHlsZScpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChqUXVlcnkoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpICYmICFqUXVlcnkoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgbGV0IHNsaWRlciA9IGpRdWVyeSgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJyk7XG4gICAgc2xpZGVyLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbFN1bW1hcnlJdGVtc01vYmlsZScpLm5leHQoJy5zbGlkZXItY29udHJvbHMnKSxcbiAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHQtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+TmV4dDwvYnV0dG9uPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgcmVwbGFjZUNhcm91c2VsQXJyb3dDYXJ0KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICBhcHBlbmRBcnJvd3M6IGpRdWVyeSgnI2Nhcm91c2VsU3VtbWFyeUl0ZW1zTW9iaWxlJykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImRpdi1idG4gcHJldlwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIG5leHRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj5OZXh0PC9idXR0b24+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGxldCBzbGlkZXIgPSAkKCcjY2Fyb3VzZWxTdW1tYXJ5SXRlbXNNb2JpbGUnKTtcbiAgICBpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgNzY4ICYmIHNsaWRlclswXS5zbGljayAmJiBzbGlkZXJbMF0uc2xpY2sudW5zbGlja2VkKSB7XG4gICAgICBzbGlkZXIuc2xpY2sob3B0cyk7XG4gICAgfVxuICAgIHNsaWRlci5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbihzbGljayl7XG4gICAgICByZXBsYWNlQ2Fyb3VzZWxBcnJvd0NhcnQoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBwcm9kdWN0IGdhbGxlcnkgZm9yIGRlc2t0b3Agd2hlbiByZXNpemVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURlc2t0b3AoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdO1xuICAkKCcuZnJlc2NvLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgdXJsIDogJCh0aGlzKS5kYXRhKCdpbWFnZScpLFxuICAgICAgdGh1bWJuYWlsIDogJCh0aGlzKS5kYXRhKCd0aHVtYm5haWwnKSxcbiAgICB9O1xuICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGhlaWdodENvbnRlbnQgPSBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyZXNjby1zbGlkZScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgRnJlc2NvLnNob3coXG4gICAgICAgIGltYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHRodW1ibmFpbHM6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgTnVtYmVyKGluZGV4ICsgMSlcbiAgICAgICk7XG5cbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaXggcHJvZHVjdCBkZXNjcmlwdGlvbiBkaXYgb24gdG9wIChyaWdodCBjb2x1bW4pIHdoZW4gc2Nyb2xsaW5nXG4gKi9cbi8qZnVuY3Rpb24gZml4UHJvZHVjdERlc2NyaXB0aW9uRGl2KCkge1xuICBpZiAoJCgnI2ltYWdlcy1jb250YWluZXInKS5oZWlnaHQoKSAtICQoJyNwcm9kdWN0LXN0aWNreScpLmhlaWdodCgpIC0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gMjQgPj0gLSgkKCcjaW1hZ2VzLWNvbnRhaW5lcicpLm9mZnNldCgpLnRvcCkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zdGlja3knKS5jbGFzc0xpc3QuYWRkKCdzdGlja3ktYm90dG9tJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc3RpY2t5JykuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LXRvcC1jdXN0b20nKTtcbiAgfVxufSovXG5cbmZ1bmN0aW9uIHByb2R1Y3RGdW5jdGlvbnMoKSB7XG4gICQoJy52YXJpYW50LWxpc3QgLnZhcmlhbnQtbmFtZTpub3QoLnZhcmlhbnQtZGlzYWJsZWQpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBidW5kbGVJdGVtID0gJCh0aGlzKS5kYXRhKCdidW5kbGUtaXRlbScpO1xuICAgIGlmKGJ1bmRsZUl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnLnZhcmlhbnQtbmFtZVtkYXRhLWJ1bmRsZS1pdGVtPVwiJyArIGJ1bmRsZUl0ZW0gKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnZhcmlhbnQtbGlzdCAudmFyaWFudC1uYW1lJykucmVtb3ZlQ2xhc3MoJ3ZhcmlhbnQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hZGRDbGFzcygndmFyaWFudC1zZWxlY3RlZCcpO1xuICB9KTtcblxuICAkKCcuY2FyZC1jYXJvdXNlbCAuY2FyZC1pbWctdG9wIC52YXJpYW50cy1jb250YWluZXInKS5oaWRlKCk7XG4gICQoJy5jYXJkLWNhcm91c2VsIC5jYXJkLWltZy10b3AnKVxuICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDE0NDApIHtcbiAgICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5zaG93KCk7XG4gICAgfVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy52YXJpYW50cy1jb250YWluZXInLCB0aGlzKS5oaWRlKCk7XG4gIH0pO1xuXG4gICQoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCAuYnRuLXByaW1hcnknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFRvQ2FydEZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSAkKCdpbnB1dFtuYW1lXj1cIicgKyAkKGFkZFRvQ2FydEZvcm0pLmRhdGEoJ25hbWVUb0NoZWNrJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGg7XG4gICAgY29uc3QgYnVuZGxlSXRlbXNDb3VudCA9ICQoJ2Rpdi5idW5kbGUtaXRlbScpLmxlbmd0aDtcbiAgICBpZihzZWxlY3RlZFNpemUgPiAwICYmIHNlbGVjdGVkU2l6ZSA8IGJ1bmRsZUl0ZW1zQ291bnQgKSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0Om5vdCguaW5wdXQtY2hlY2tlZCknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PT0gMCkge1xuICAgICAgJChhZGRUb0NhcnRGb3JtKS5maW5kKCcuZW1wdHktcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLmZpbmQoJy5lbXB0eS1wcm9kdWN0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XG4gICAgICAkKGFkZFRvQ2FydEZvcm0pLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfSlcblxuICAkKCdpbnB1dFtpZF49XCJiaXRiYWdfc3lsaXVzX3Byb2R1Y3RfYnVuZGxlX3BsdWdpbl9hZGRfcHJvZHVjdF9idW5kbGVfdG9fY2FydF9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykuY2xvc2VzdCgnZGl2JykuZmluZCgnc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykuYWRkQ2xhc3MoJ2lucHV0LWNoZWNrZWQnKS5hZGRDbGFzcygnZC1ub25lJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmlsdGVyUHJvZHVjdEZ1bmN0aW9ucygpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBjcml0ZXJpYSA9IHF1ZXJ5U3RyaW5nLmluZGV4T2YoJ2NyaXRlcmlhJyk7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpO1xuICBsZXQgcHJpY2VTbGlkZXI7XG4gIGxldCBwcmljZVNsaWRlck1vYmlsZTtcbiAgY29uc3QgcHJpY2VNaW4gPSAkKCcjcHJvZHVjdHNGaWx0ZXJzIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nKTtcbiAgY29uc3QgcHJpY2VNYXggPSAkKCcjcHJvZHVjdHNGaWx0ZXJzIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nKTtcbiAgY29uc3QgcHJpY2VNaW5Nb2JpbGUgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMV1cIl0nKTtcbiAgY29uc3QgcHJpY2VNYXhNb2JpbGUgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIGlucHV0W25hbWU9XCJjcml0ZXJpYVtwcmljZV1bcHJpY2VfMl1cIl0nKTtcbiAgaWYgKHByaWNlSW5wdXQubGVuZ3RoID4gMCkge1xuICAgIC8vIFByZXBhcmUgc2xpZGVyIG9wdGlvbnNcbiAgICBjb25zdCB0YXhvbk1pblByaWNlID0gcGFyc2VGbG9hdChwcmljZUlucHV0LmZpcnN0KCkuZGF0YSgnbWluJykpO1xuICAgIGNvbnN0IHRheG9uTWF4UHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5wdXQuZmlyc3QoKS5kYXRhKCdtYXgnKSk7XG4gICAgY29uc3QgcmFuZ2VTbGlkZXJPcHRpb25zID0ge1xuICAgICAgc3RhcnQ6IFtwcmljZU1pbi52YWwoKSwgcHJpY2VNYXgudmFsKCldLFxuXG4gICAgICByYW5nZToge1xuICAgICAgICAnbWluJzogW3RheG9uTWluUHJpY2VdLFxuICAgICAgICAnbWF4JzogW3RheG9uTWF4UHJpY2VdXG4gICAgICB9LFxuICAgICAgc3RlcDogMSxcbiAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmVoYXZpb3VyOiAndGFwJyxcbiAgICAgIHRvb2x0aXBzOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBEZXNrdG9wIFNsaWRlclxuICAgIGNvbnN0IHByaWNlUmFuZ2UgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzICNwcmljZVJhbmdlJyk7XG4gICAgcHJpY2VTbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlWzBdLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICAgIHByaWNlU2xpZGVyLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICBwcmljZU1pbi52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICAgIHByaWNlTWF4LnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICAgIH0pO1xuXG4gICAgLy8gTW9iaWxlIFNsaWRlclxuICAgIGNvbnN0IHByaWNlUmFuZ2VNb2JpbGUgPSAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlICNwcmljZVJhbmdlJyk7XG4gICAgcHJpY2VTbGlkZXJNb2JpbGUgPSBub1VpU2xpZGVyLmNyZWF0ZShwcmljZVJhbmdlTW9iaWxlWzBdLCByYW5nZVNsaWRlck9wdGlvbnMpO1xuICAgIHByaWNlU2xpZGVyTW9iaWxlLm9uKCdzbGlkZScsIGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICBwcmljZU1pbk1vYmlsZS52YWwocGFyc2VJbnQobmV3VmFsdWVbMF0pKTtcbiAgICAgIHByaWNlTWF4TW9iaWxlLnZhbChwYXJzZUludChuZXdWYWx1ZVsxXSkpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB1c2VyIGNoYW5nZXMgcHJpY2UgaW5wdXQgdmFsdWVcbiAgICBwcmljZUlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKGUud2hpY2ggIT09IDggJiYgIWlzTmFOKFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKXtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBbcHJpY2VNaW4udmFsKCksIHByaWNlTWF4LnZhbCgpXTtcbiAgICAgICAgcHJpY2VTbGlkZXIuc2V0KG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVNb2JpbGUgPSBbcHJpY2VNaW5Nb2JpbGUudmFsKCksIHByaWNlTWF4TW9iaWxlLnZhbCgpXTtcbiAgICAgICAgcHJpY2VTbGlkZXJNb2JpbGUuc2V0KG5ld1ZhbHVlTW9iaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNpemVGaWx0ZXJJbnB1dCA9ICQoJyNzaXplRmlsdGVyIGlucHV0Jyk7XG4gIHNpemVGaWx0ZXJJbnB1dC5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICBpZih0aGlzLmNoZWNrZWQpIHtcbiAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJ2lucHV0W2RhdGEtaWQ9XCInICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLm5leHQoJ2xhYmVsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9KTtcbiAgc2l6ZUZpbHRlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJyNjcml0ZXJpYVNpemVNb2JpbGUgaW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlucHV0VG9DaGVjayA9ICQoZS50YXJnZXQpLmRhdGEoJ2lkJyk7XG4gICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgJChlLnRhcmdldCkubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICQoJyMnICsgaW5wdXRUb0NoZWNrKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGUudGFyZ2V0KS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJCgnIycgKyBpbnB1dFRvQ2hlY2spLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5uZXh0KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydGluZ1xuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dC5pbnB1dC1zb3J0aW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciBpbnB1dCcpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gLnJhZGlvLWNvbnRhaW5lciAuY2hlY2ttYXJrIC5jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKGUudGFyZ2V0KS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAkKGUudGFyZ2V0KS5uZXh0KCcuY2hlY2ttYXJrJykuZmluZCgnLmNoZWNrZWQnKS5hZGRDbGFzcygnZC1ibG9jaycpO1xuICB9KTtcblxuICAvLyBWYWxpZGF0ZSBmaWx0ZXJzXG4gICQoJ2EudmFsaWRhdGUtZmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsIHByaWNlTWluLCBwcmljZU1heCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCBwcmljZU1pbk1vYmlsZSwgcHJpY2VNYXhNb2JpbGUpO1xuICAgICQoJyNwcm9kdWN0RmlsdGVyRm9ybScpLnN1Ym1pdCgpO1xuICB9KTtcblxuICAkKCcjcHJvZHVjdEZpbHRlck1vYmlsZUZvcm0gYnV0dG9uLmJ0bi1wcmltYXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZigkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykudmFsKCkgPT09ICdjcmVhdGVkQXQnKSB7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZzpjaGVja2VkJykucmVtb3ZlKCk7XG4gICAgICAkKCcuaW5wdXQtc29ydGluZy1jcmVhdGVkQXQnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWlubGluZS1ibG9jaycpO1xuICAgIH1cbiAgICBjaGVja1ByaWNlVmFsdWUocHJpY2VTbGlkZXIsIHByaWNlTWluLCBwcmljZU1heCk7XG4gICAgY2hlY2tQcmljZVZhbHVlKHByaWNlU2xpZGVyTW9iaWxlLCBwcmljZU1pbk1vYmlsZSwgcHJpY2VNYXhNb2JpbGUpO1xuICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICB9KVxuXG4gIGlmIChjcml0ZXJpYSAhPT0gLTEpIHtcbiAgICAkKCcucmVpbml0LWZpbHRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICB9XG5cbiAgLy8gTW9iaWxlIGZpbHRlcnNcbiAgJCgnLnByb2R1Y3QtZmlsdGVycy5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKTtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgJCgnLnNjcmVlbi1vdmVybGF5LWZpbHRlcnMnKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG5cbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgICAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuY2xvc2UnKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPD0gMTIwMCkge1xuICAgICAgJChcIi5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICAgICAkKCcjcHJvZHVjdHNGaWx0ZXJzTW9iaWxlIC5jbG9zZScpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLXRvZ2dsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJpY2VWYWx1ZShwcmljZVNsaWRlck9iamVjdCwgcHJpY2VNaW4sIHByaWNlTWF4KSB7XG4gIGNvbnN0IHByaWNlSW5wdXQgPSAkKCcucHJpY2UtZmlsdGVyIC5wcmljZS1pbnB1dCcpLmZpcnN0KCk7XG4gIGxldCBwcmljZU1pblZhbHVlID0gcHJpY2VNaW4udmFsKCk7XG4gIGxldCBwcmljZU1heFZhbHVlID0gcHJpY2VNYXgudmFsKCk7XG4gIGlmIChwcmljZU1pbi52YWwoKSA8IHByaWNlSW5wdXQuZGF0YSgnbWluJykpIHtcbiAgICBwcmljZU1pblZhbHVlID0gcHJpY2VJbnB1dC5kYXRhKCdtaW4nKTtcbiAgfVxuICBpZiAocHJpY2VNaW4udmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNaW5WYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgcHJpY2VNaW4udmFsKHByaWNlTWluVmFsdWUpO1xuICBpZiAocHJpY2VNYXgudmFsKCkgPiBwcmljZUlucHV0LmRhdGEoJ21heCcpKSB7XG4gICAgcHJpY2VNYXhWYWx1ZSA9IHByaWNlSW5wdXQuZGF0YSgnbWF4Jyk7XG4gIH1cbiAgaWYgKHByaWNlTWF4LnZhbCgpIDwgcHJpY2VJbnB1dC5kYXRhKCdtaW4nKSkge1xuICAgIHByaWNlTWF4VmFsdWUgPSBwcmljZUlucHV0LmRhdGEoJ21pbicpO1xuICB9XG4gIHByaWNlTWF4LnZhbChwcmljZU1heFZhbHVlKTtcbiAgcHJpY2VTbGlkZXJPYmplY3Quc2V0KFtwcmljZU1pblZhbHVlLCBwcmljZU1heFZhbHVlXSk7XG59XG5cbi8qKlxuICogTWFuYWdlIGRyb3Bkb3duIG9uIG1vYmlsZSBzaXplXG4gKi9cbmZ1bmN0aW9uIG5hdmJhckNvbGxhcHNlSW5pdCgpIHtcbiAgalF1ZXJ5KCcjbWFpbk5hdmJhcicpLmNvbGxhcHNlKHtcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGpRdWVyeSgnI21haW5OYXZiYXInKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSl7XG4gICAgcmVzaXplQ29udGVudCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZWdhbWVudSBmdW5jdGlvbnNcbiAqIC5oYXMtbWVnYW1lbnUgdG8gdXNlIGRyb3Bkb3duIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBtZWdhbWVudUZ1bmN0aW9ucygpIHtcbiAgLy8gQnV0dG9uIGhvdmVyIHNpbXVsYXRlcyBjbGljayBvbiBpdFxuICAkKCcjbWVudUJ1dHRvbk1haW4sICNtZWdhbWVudURyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQoJy5kcm9wZG93bi1tZW51Lm1lZ2FtZW51JykuaGFzQ2xhc3MoJ3Nob3cnKSAmJiAkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgJCgnI21lbnVCdXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5oYXNDbGFzcygnc2hvdycpICYmICQoZG9jdW1lbnQpLndpZHRoKCkgPiAxMjAwKSB7XG4gICAgICAkKCcjbWVudUJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcblxuICAvKiQoJyNtYWluQ29udGVudENvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuZHJvcGRvd24tbWVudS5tZWdhbWVudScpLmhhc0NsYXNzKCdzaG93JykgJiYgJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEwMzMpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUubWVnYW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7Ki9cblxuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgIGlmICgkKCcjbmF2YmFyTWFpbk1vYmlsZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVnYW1lbnUgZnVuY3Rpb25zIDogbWFuYWdlIG1vYmlsZSBtZW51XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gIH0pO1xuXG4gICQoJ2EubmF2LXRheG9uJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICAgaWYgKCQoJ2Rpdi5tZW51LWltZy0nKyQodGhpcykuZGF0YSgndGF4b24nKSsnIGltZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnZGl2Lm1lbnUtaW1nJykuaGlkZSgpO1xuICAgICAgICAkKCdkaXYubWVudS1pbWctJyskKHRoaXMpLmRhdGEoJ3RheG9uJykpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjbmF2YmFyTWFpbk1vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCcuYWN0aXZlLmxvY2FsZS1saW5rLCAubmF2YmFyVGF4b25zTGluaywgLmxvZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGRldmVsb3BNb2JpbGVNZW51KCQodGhpcykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjb3BlbkFjY291bnRNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgZGV2ZWxvcE1vYmlsZU1lbnUoJCgnLmxvZy1saW5rJykuZGF0YSgnZGl2VG9PcGVuJykpO1xuICB9KTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnLm5hdmJhciA+IGRpdicpLmhpZGUoKTtcbiAgICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbiAgICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICB9KTtcblxuICAkKCcuZHJvcGRvd24uY2FydC1idG4nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUljb25lc0Z1bmN0aW9ucygpIHtcbiAgJCgnLm1lbnUtaWNvbmVzIC5kcm9wZG93bicpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lckhlaWdodCA9ICQoJy5jYXJ0LWRyb3Bkb3duJykuaGVpZ2h0KCkgLSAkKCdoZWFkZXInKS5oZWlnaHQoKSAtICQoJyNjYXJ0QWN0aW9ucycpLm91dGVySGVpZ2h0KCk7XG4gICAgICAkKCcuc2NyZWVuLW92ZXJsYXktY2FydCcpLmNzcygndG9wJywgaGVhZGVyT3V0ZXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICQoJyNoZWFkZXJDYXJ0SXRlbXMnKS5jc3MoJ2hlaWdodCcsIHByb2R1Y3RDb250YWluZXJIZWlnaHQgKyAncHgnKVxuXG4gICAgICAkKFwiLnNjcmVlbi1vdmVybGF5LWNhcnRcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWljb25lcyAuZHJvcGRvd24nKS5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDw9IDEyMDApIHtcbiAgICAgICQoXCIuc2NyZWVuLW92ZXJsYXktY2FydFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU1lbnUoZWxlbWVudCkge1xuICBpZiAoJChkb2N1bWVudCkud2lkdGgoKSA+IDEyMDApIHtcbiAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAkKCcjaGVhZGVyQ2FydEl0ZW1zJykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgJChcIi5zY3JlZW4tb3ZlcmxheS1jYXJ0XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyQ29udGFpbmVyJykuaGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IGhlYWRlck91dGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgLSAkKCcuaGVhZGVyLWJhbm5lcicpLmhlaWdodCgpO1xuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXJIZWlnaHQgPSAkKCcuY2FydC1kcm9wZG93bicpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjY2FydEFjdGlvbnMnKS5vdXRlckhlaWdodCgpO1xuICAgICQoZWxlbWVudCkuY3NzKCd0b3AnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgJ2NhbGMoMTAwJSAtICcgKyBoZWFkZXJIZWlnaHQgKyAncHgpJyk7XG4gICAgJChlbGVtZW50ICsgJyAjbWVudU1vYmlsZUxpbmtzJykuY3NzKCdib3R0b20nLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcbiAgICAkKCcuc2NyZWVuLW92ZXJsYXknKS5jc3MoJ3RvcCcsIGhlYWRlck91dGVySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgJCgnI2hlYWRlckNhcnRJdGVtcycpLmNzcygnaGVpZ2h0JywgcHJvZHVjdENvbnRhaW5lckhlaWdodCArICdweCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKSB7XG4gIGlmICgkKGRvY3VtZW50KS53aWR0aCgpID4gMTIwMCkge1xuICAgICQoXCIuc2NyZWVuLW92ZXJsYXktZmlsdGVyc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnI2hlYWRlckNvbnRhaW5lcicpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBoZWFkZXJPdXRlckhlaWdodCA9ICQoJyNoZWFkZXJDb250YWluZXInKS5vdXRlckhlaWdodCgpIC0gJCgnLmhlYWRlci1iYW5uZXInKS5oZWlnaHQoKTtcbiAgICBjb25zdCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ID0gJCgnI3Byb2R1Y3RzRmlsdGVyc01vYmlsZSAuZHJvcGRvd24tbWVudScpLmhlaWdodCgpIC0gJCgnaGVhZGVyJykuaGVpZ2h0KCkgLSAkKCcjZmlsdGVyU3VibWl0Jykub3V0ZXJIZWlnaHQoKSAtIDEwO1xuICAgICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUnKS5jc3MoJ2hlaWdodCcsICdjYWxjKDEwMCUgLSAnICsgaGVhZGVySGVpZ2h0ICsgJ3B4KScpO1xuICAgICQoJy5zY3JlZW4tb3ZlcmxheS1maWx0ZXJzJykuY3NzKCd0b3AnLCBoZWFkZXJPdXRlckhlaWdodCArICdweCcpO1xuICAgICQoJyNmaWx0ZXJMaXN0JykuY3NzKCdoZWlnaHQnLCBmaWx0ZXJMaXN0Q29udGFpbmVySGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XG4gIHZhciBvZmZjYW52YXNfaWQgPSAkKCcjbWVudUJ1dHRvbicpLmF0dHIoJ2RhdGEtdHJpZ2dlcicpO1xuICByZXNpemVNZW51KG9mZmNhbnZhc19pZCk7XG5cbiAgJChvZmZjYW52YXNfaWQpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgJCgnI21lbnVCdXR0b25NYWluJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJCgnLmRyb3Bkb3duIGEuYnRuLWNsb3NlJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblxuICAkKCdib2R5JykuYWRkQ2xhc3MoXCJvZmZjYW52YXMtYWN0aXZlXCIpO1xuICAkKFwiLnNjcmVlbi1vdmVybGF5XCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblxuICAkKCcjbmF2YmFyTWFpbicpLnNob3coKTtcbiAgJCgnI25hdmJhckxvY2FsZScpLmhpZGUoKTtcblxuICAkKCcjbWVudUJ1dHRvbk1haW4gLmNsb3NlJykuc2hvdygpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4gLmJhY2snKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcbiAgdmFyIG9mZmNhbnZhc19pZCA9ICQoJyNtZW51QnV0dG9uJykuYXR0cignZGF0YS10cmlnZ2VyJyk7XG5cbiAgJChcIi5zY3JlZW4tb3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCIubW9iaWxlLW9mZmNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQob2ZmY2FudmFzX2lkKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAkKCcuZHJvcGRvd24gYS5idG4tY2xvc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKCcjbWVudUJ1dHRvbk1haW4nKS5hZGRDbGFzcygnc2hvdycpO1xuXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIik7XG4gICQoXCIuc2NyZWVuLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICQoJyNuYXZiYXJNYWluJykuc2hvdygpO1xuICAkKCcjbmF2YmFyTG9jYWxlJykuaGlkZSgpO1xuXG4gICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICQoJyNtZW51QnV0dG9uTWFpbiAuYmFjaycpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gZGV2ZWxvcE1vYmlsZU1lbnUoZGl2VG9PcGVuKSB7XG4gIGlmIChkaXZUb09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICQoJy5uYXZiYXIgPiBkaXYnKS5oaWRlKCk7XG4gICAgJChkaXZUb09wZW4pLnNob3coKTtcblxuICAgICQoJyNtZW51QnV0dG9uTWFpbiAuY2xvc2UnKS5oaWRlKCk7XG4gICAgJCgnI21lbnVCdXR0b25NYWluIC5iYWNrJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9naW5GdW5jdGlvbnMoKSB7XG4gIGlmKCQoJy5sb2dpbi1mb3JtJykpIHtcbiAgICAkKCcuc3VibWl0LWxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybUVsZW1lbnQpLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoJCgnLnZlcmlmeS1hY2NvdW50JykpIHtcbiAgICAkKCcudmVyaWZ5LWFjY291bnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgkKCcjcmVzZXRQYXNzd29yZFN1Ym1pdCcpKSB7XG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRTdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCcnKTtcbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICQoZm9ybSkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cnKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50Om5vdCguc3VjY2VzcyknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgJCgnLm1vZGFsLWRpYWxvZyBpbnB1dC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgaW5wdXQuZm9ybS1jb250cm9sJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAkKCcubW9kYWwtZGlhbG9nIC5mb3JtLWVycm9ycyAuZm9ybS1lcnJvci1tZXNzYWdlJykudGV4dCgkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9ycyB1bCBsaScpLnRleHQoKSk7XG4gICAgICAgICAgJChmb3JtKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgJCgnI3Jlc2V0UGFzc3dvcmRNb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGlucHV0LmZvcm0tY29udHJvbCcpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAkKCcucmVzZXQtcGFzc3dvcmQgLm1vZGFsLWRpYWxvZyBmb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICQoJy5yZXNldC1wYXNzd29yZCAubW9kYWwtZGlhbG9nIGZvcm0gaW5wdXQnKS52YWwoJycpO1xuICAgICAgJCgnLnJlc2V0LXBhc3N3b3JkIC5tb2RhbC1kaWFsb2cgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoJycpO1xuICAgIH0pXG4gIH1cblxuICAkKCdidXR0b24uc3VibWl0LXJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZWdleCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICBsZXQgZW1haWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICBsZXQgcmVnaXN0ZXJGb3JtID0gJChlLnRhcmdldCkuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBpbnZhbGlkU3BhbiA9ICQoZS50YXJnZXQpLnByZXYoJ3NwYW4nKTtcbiAgICBpZigkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJGb3JtID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdmb3JtJykpO1xuICAgICAgZW1haWwgPSAkKHJlZ2lzdGVyRm9ybSkuZmluZCgnaW5wdXQnKS52YWwoKVxuICAgICAgaW52YWxpZFNwYW4gPSAkKCQocmVnaXN0ZXJGb3JtKS5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpKTtcbiAgICB9XG4gICAgaWYgKHJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBpbnZhbGlkU3Bhbi5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICAgcmVnaXN0ZXJGb3JtLmZpbmQoJ2lucHV0JykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFNwYW4uYWRkQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAgIHJlZ2lzdGVyRm9ybS5maW5kKCdpbnB1dCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgfVxuICB9KTtcbn1cblxuJCgnLnJlZ2lzdGVyLWZvcm0gaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gIGNvbnN0IHJlZ2V4ID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICBjb25zdCBlbWFpbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICBpZiAocmVnZXgudGVzdChlbWFpbCkgJiYgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2lzLWludmFsaWQnKSkge1xuICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2RpdicpLm5leHQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENvbnRhY3QgUGFnZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBjb250YWN0UGFnZUZ1bmN0aW9uKCkge1xuICAkKCcjY29udGFjdFBhZ2UgZm9ybSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAkKGZvcm0pLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICQoJyNjb250YWN0UmVzcG9uc2VNb2RhbCAubW9kYWwtYm9keSBkaXYnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgJCgnI2NvbnRhY3RSZXNwb25zZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgLy8gRGVsZXRlIGFsbCBlcnJvcnMgb2YgZm9ybSB3aGVuIHN1Y2Nlc3NcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdJykudmFsKCcnKS5wcm9wKCBcImNoZWNrZWRcIiwgZmFsc2UgKTtcbiAgICAgICAgJCgnI2NvbnRhY3RQYWdlIFtuYW1lXj1cInN5bGl1c19jb250YWN0XCJdLCAjY29udGFjdFBhZ2UgW2Zvcl49XCJzeWxpdXNfY29udGFjdF9cIl0nKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkKCcjY29udGFjdFBhZ2Ugc3Bhbi5pbnZhbGlkLWZlZWRiYWNrJykucmVtb3ZlKCk7XG4gICAgICAgICQoZm9ybSkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA2KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIHNwYW4uaW52YWxpZC1mZWVkYmFjaycpLnJlbW92ZSgpO1xuICAgICAgICAgIGNvbnN0IGVycm9yTGlzdCA9ICQoJC5wYXJzZUhUTUwoZXJyb3IucmVzcG9uc2VUZXh0KVsxXSkuZmluZCgnc3BhbicpLnRvQXJyYXkoKTtcbiAgICAgICAgICBlcnJvckxpc3QuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iub3V0ZXJUZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IuY2xhc3NOYW1lICE9PSAnYWNjZXB0Q2d2Jykge1xuICAgICAgICAgICAgICAgICQoJyNzeWxpdXNfY29udGFjdF8nICsgZXJyb3IuY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgICAgICAgICAgICAgIC5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj4nICsgZXJyb3Iub3V0ZXJUZXh0ICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjc3lsaXVzX2NvbnRhY3RfJyArIGVycm9yLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5uZXh0KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDE3KSB7XG4gICAgICAgICAgJCgnI2NvbnRhY3RQYWdlIC5jb250YWN0LWVycm9yJykuaHRtbCgkLnBhcnNlSFRNTChlcnJvci5yZXNwb25zZVRleHQpWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICAkKGZvcm0pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbiAgJCgnI3N5bGl1c19jb250YWN0X3N1YmplY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmKCQoZS50YXJnZXQpLnZhbCgpID09PSAnb3RoZXInKSB7XG4gICAgICAkKCcub3RoZXItc3ViamVjdCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm90aGVyLXN1YmplY3QnKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTaGFyZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzaGFyZUZ1bmN0aW9ucygpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlRHJvcGRvd24nKSkge1xuICAgIGpRdWVyeSgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2Rpc2FibGUnKTtcbiAgICAvLyBGYWNlYm9vayBTaGFyZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB3aW5Ub3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKDM1MCAvIDIpO1xuICAgICAgY29uc3Qgd2luTGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtICg2MDAgLyAyKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlYm9va1NoYXJlJykuZGF0YXNldC51cmw7XG4gICAgICB3aW5kb3cub3BlbignaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrdXJsLCAnRmFjZWJvb2sgLSBOb2JsZXp6IFNob3AnLCAndG9wPScgKyB3aW5Ub3AgKyAnLGxlZnQ9JyArIHdpbkxlZnQgKyAnLHRvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD02MDAsaGVpZ2h0PTM1MCcpO1xuICAgIH0pO1xuXG4gICAgLy8gUGludGVyZXN0IFNoYXJlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnRlcmVzdFNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbFBpbnRlcmVzdFNoYXJlJykuY2xpY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ29weSB0byBDbGlwYm9hcmRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weVNoYXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTGluaycpO1xuICAgICAgJCgnI2NvcHlTaGFyZScpLnRvb2x0aXAoJ2VuYWJsZScpO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkKCcjY29weVNoYXJlJykudG9vbHRpcCgnc2hvdycpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ICQoJyNjb3B5U2hhcmUnKS50b29sdGlwKCdkaXNhYmxlJyk7IH0sIDE1MDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGBDb3B5IGZhaWxlZCEgJHtlcnJvcn1gKSB9KVxuICAgIH0pO1xuXG4gICAgLy8gTWFpbCBUb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlsU2hhcmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbWFpbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxTaGFyZScpLmRhdGFzZXQubWFpbHRvO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtYWlsVG87XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FydEZ1bmN0aW9ucygpIHtcbiAgLy8gUmVsb2FkIFF0eVxuICAkKCcucmVsb2FkLXF0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgICAgJCgnZm9ybS5mb3JtLXRvLXN1Ym1pdCcpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFwcGx5IGJvbnVzIHBvaW50c1xuICAkKCcuYm9udXMtcG9pbnRzLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJvbnVzUG9pbnRzID0gJCgnLmJvbnVzLXBvaW50cycpLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKGJvbnVzUG9pbnRzKTtcbiAgICBpZiAoYm9udXNQb2ludHMgPT09ICcnKSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoYm9udXNQb2ludHMpO1xuICAgIH1cblxuICAgICQoJ2Zvcm0uZm9ybS10by1zdWJtaXQnKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgfSk7XG5cbiAgJChcImJvZHlcIikub24oXCJrZXlkb3duXCIsIFwiLmJvbnVzLXBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICBpZigkKCcjYml0YmFnLWJvbnVzLXBvaW50cyAuZm9ybS1lcnJvci1tZXNzYWdlJykuaHRtbCgpICE9IHVuZGVmaW5lZCkge1xuICAgICQoJy5ib251cy1wb2ludHMtaW5wdXQnKS5hZGRDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmJvbnVzLXBvaW50cy1lcnJvcicpLmh0bWwoJCgnI2JpdGJhZy1ib251cy1wb2ludHMgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmJvbnVzLXBvaW50cycpLnZhbCgkKCcjc3lsaXVzX2NhcnRfYm9udXNQb2ludHMnKS52YWwoKSk7XG4gIH1cblxuICAvLyBBcHBseSBjb3Vwb24gY29kZVxuICAkKCcuY291cG9uLWNvZGUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY291cG9uID0gJCgnLmNvdXBvbi1jb2RlJykudmFsKCk7XG4gICAgaWYgKGNvdXBvbiA9PT0gJycpIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoJycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoY291cG9uKTtcbiAgICB9XG5cbiAgICAkKCdmb3JtLmZvcm0tdG8tc3VibWl0JykudHJpZ2dlcignc3VibWl0Jyk7XG4gIH0pO1xuXG4gICQoXCJib2R5XCIpLm9uKFwia2V5ZG93blwiLCBcIi5jb3Vwb24tY29kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5yZW1vdmVDbGFzcygnaW52YWxpZC1jb2RlJyk7XG4gICAgJCgnLmNvdXBvbi1lcnJvcicpLmh0bWwoJycpO1xuICB9KTtcblxuICAvLyBDaGFuZ2UgcXVhbnRpdHkgb24gbW9iaWxlXG4gICQoJy5tb2JpbGUtcXR5Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1F0eSA9ICQodGhpcykudmFsKCk7XG4gICAgY29uc3QgaW5wdXRRdHlOYW1lID0gJCh0aGlzKS5kYXRhKCdpbnB1dC1xdHknKTtcbiAgICAkKCdpbnB1dFtuYW1lPVwiJyArIGlucHV0UXR5TmFtZSArICdcIl0nKS52YWwobmV3UXR5KTtcbiAgfSk7XG5cbiAgaWYoJCgnLmNvdXBvbi1jb2RlLWVycm9yIC5mb3JtLWVycm9yLW1lc3NhZ2UnKS5odG1sKCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgJCgnLmNvdXBvbi1pbnB1dCcpLmFkZENsYXNzKCdpbnZhbGlkLWNvZGUnKTtcbiAgICAkKCcuY291cG9uLWVycm9yJykuaHRtbCgkKCcuY291cG9uLWNvZGUtZXJyb3IgLmZvcm0tZXJyb3ItbWVzc2FnZScpLmh0bWwoKSk7XG4gICAgJCgnLmNvdXBvbi1jb2RlJykudmFsKCQoJyNzeWxpdXNfY2FydF9wcm9tb3Rpb25Db3Vwb24nKS52YWwoKSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBvcmRlcnNHcmlkRnVuY3Rpb25zKCkge1xuICAvLyBEZXNrdG9wIEFjY29yZGlvblxuICAkKCcjb3JkZXJBY2NvcmRpb25EZXNrdG9wJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pO1xuXG4gICQoJyNvcmRlckFjY29yZGlvbkRlc2t0b3AnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0cicsIHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgJChlLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnc2hvdycpO1xuICB9KTtcblxuICAvLyBNb2JpbGUgQWNjb3JkaW9uXG4gICQoJyNvcmRlckFjY29yZGlvbk1vYmlsZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5yZW1vdmVDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcjb3JkZXJBY2NvcmRpb25Nb2JpbGUnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5wcmV2KCdkaXYnKS5hZGRDbGFzcygnaW5pdCcpO1xuICB9KVxuICAkKCcuYXJyb3ctY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi5vcmRlci1kZXRhaWxzJykucHJldignZGl2JykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZ2luUGFnZUZ1bmN0aW9ucygpIHtcbiAgJCgnLnJlc2V0LXBhc3N3b3JkLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1vZGFsSWQgPSAkKHRoaXMpLmRhdGEoJ21vZGFsSWQnKTtcbiAgICAkKG1vZGFsSWQpLm1vZGFsKCdzaG93Jyk7XG4gICAgJCgnLmhlYWRlci1kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUNvbnRlbnQoKSB7XG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHNoYXJlRnVuY3Rpb25zKCk7XG4gIHJlc2l6ZU1lbnUoJCgnI21lbnVCdXR0b24nKS5hdHRyKCdkYXRhLXRyaWdnZXInKSk7XG4gIHJlc2l6ZUZpbHRlck1vYmlsZU1lbnUoKTtcbiAgJCgnLmhlYWRlci1kcm9wZG93bicpLnNob3coKTtcbiAgRnJlc2NvLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlQ2Fyb3VzZWwoKTtcbiAgbmF2YmFyQ29sbGFwc2VJbml0KCk7XG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIH0pO1xuICAvLyBQUkVWRU5UIElOU0lERSBDTElDSyBEUk9QRE9XTlxuICAkKCcuZHJvcGRvd24tbWVudScpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgc2hhcmVGdW5jdGlvbnMoKTtcbiAgcHJvZHVjdEZ1bmN0aW9ucygpO1xuICBmaWx0ZXJQcm9kdWN0RnVuY3Rpb25zKCk7XG4gIC8vIE1lbnUgRnVuY3Rpb25zXG4gIG1lZ2FtZW51RnVuY3Rpb25zKCk7XG4gIG1lbnVJY29uZXNGdW5jdGlvbnMoKTtcblxuICBsb2dpbkZ1bmN0aW9ucygpO1xuICBvcmRlcnNHcmlkRnVuY3Rpb25zKCk7XG4gIGxvZ2luUGFnZUZ1bmN0aW9ucygpO1xuICBjYXJ0RnVuY3Rpb25zKCk7XG4gIGNoZWNrb3V0KCQoJyNjaGVja291dFBhZ2UnKSk7XG5cbiAgY29udGFjdFBhZ2VGdW5jdGlvbigpO1xuXG4gIHJlc2l6ZU1haW5Db250YWluZXIoKTtcbiAgaWYgKCQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjgpIHtcbiAgICBjcmVhdGVHYWxsZXJ5RGVza3RvcCgpO1xuICB9XG4gIHJlcGxhY2VDYXJvdXNlbEFycm93KCk7XG4gIHJlcGxhY2VDYXJvdXNlbEFycm93Q2FydCgpO1xuICAvKmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnRDb250YWluZXInKS5vbnNjcm9sbCA9IGZpeFByb2R1Y3REZXNjcmlwdGlvbkRpdjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1pbmZvJykub25zY3JvbGwgPSBmaXhQcm9kdWN0RGVzY3JpcHRpb25EaXY7XG4gIH0qL1xuICAvLyBTaG93IG1lbnUgYWZ0ZXIgcGFnZSBpcyBsb2FkZWRcbiAgJCgnLm1vYmlsZS1vZmZjYW52YXMnKS5zaG93KCk7XG4gICQoJy5oZWFkZXItZHJvcGRvd24nKS5zaG93KCk7XG4gICQoJyNwcm9kdWN0c0ZpbHRlcnNNb2JpbGUgLmRyb3Bkb3duLW1lbnUnKS5zaG93KCk7XG59XG5cbmV4cG9ydCB7IGluaXQsIHJlc2l6ZUNvbnRlbnQgfTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgR0xpZ2h0Ym94IGZyb20gJ2dsaWdodGJveCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9mb250YXdlc29tZSc7XG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nJztcbmltcG9ydCBTeWxpdXNUb2dnbGUgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQnO1xuaW1wb3J0IFN5bGl1c0FwaVRvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcyc7XG5pbXBvcnQgU3lsaXVzVmFyaWFudEltYWdlcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuLy8gaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vanMvc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zJztcblxuLy8gR2xvYmFsIGF4aW9zIHNldHRpbmdzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuYWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBMaWdodGJveFxuICBjb25zdCBnbGlnaHRib3ggPSBHTGlnaHRib3goeyBzZWxlY3RvcjogJ2dsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICBTeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIC8vIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIC8vIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgLy8gfVxuICAvLyBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgLy8gaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtYWRkcmVzcycpKSB7XG4gIC8vICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICAvLyB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCJcbi8vIE1haW4gZnVuY3Rpb24gdXNlZCBpbiBpbml0XG5jb25zdCBzYXZlQnV0dG9uID0gJCgnI2NoZWNrb3V0UGFnZSAuc2F2ZS1pbi1hY2NvdW50Jyk7XG5jb25zdCBjYW5jZWxCdG4gPSAkKCcjY2hlY2tvdXRQYWdlIC5jYW5jZWwtY2hhbmdlLWFkZHJlc3MnKTtcblxuY29uc3QgY2hlY2tvdXQgPSBmdW5jdGlvbiBtYWluRnVuY3Rpb25zKGNvbnRhaW5lcikge1xuICAvLyBXaGVuIHRoZSB1c2VyIHdhbnRzIHRvIGNoYW5nZSBoaXMgYWRkcmVzc1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY2xpY2tlZCcpICYmICEkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmhhc0NsYXNzKCdkLWJsb2NrJykpIHtcbiAgICAgICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MnLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG5cbiAgICAgIGNhbmNlbEJ0bi5zaG93KCk7XG4gICAgICBjYW5jZWxCdG4ucHJldigpLmhpZGUoKTtcblxuICAgICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuXG4gICAgICBhZGRyZXNzVHlwZU1hbmFnZSh0aGlzLCAnY2hhbmdlJywgY29udGFpbmVyKTtcbiAgICAgIHNldEFkZHJlc3NDYXJvdXNlbCgpO1xuICAgIH0gZWxzZSBpZiAoJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oYXNDbGFzcygnZC1ibG9jaycpKSB7XG4gICAgICBhZGRyZXNzVHlwZU1hbmFnZSh0aGlzLCAnYWRkJywgY29udGFpbmVyKTtcbiAgICB9XG4gICAgc2V0Q2hvb3NlTmV3QWRkcmVzcygkKCcuY2hvb3NlLWFkZHJlc3MtaXRlbScsIGNvbnRhaW5lciksIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdXNlciB3YW50cyB0byBhZGQgYSBuZXcgYWRkcmVzcyB0byBoaXMgYWNjb3VudFxuICAkKCdhLmNoZWNrb3V0LWFkZC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNsYXNzTGlzdEJ0biA9ICQoJy5jaG9zZW4tYWRkcmVzcyAuY2hhbmdlLWFkZHJlc3MuY2xpY2tlZCcsIGNvbnRhaW5lcilbMF0uY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXScsIGNvbnRhaW5lcikudmFsKCcnKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0nLCBjb250YWluZXIpLmFkZENsYXNzKCdkLWJsb2NrJyk7XG4gICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5hZGQtJyArIGNsYXNzTGlzdEJ0blsxXSArICctYWRkcmVzcycsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgIGFkZHJlc3NUeXBlTWFuYWdlKHNhdmVCdXR0b24sICdhZGQnLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBXaGVuIHVzZXIgc2F2ZSBhIG5ldyBhZGRyZXNzXG4gICQoJy5zYXZlLWFkZHJlc3MtbmF2aWdhdGlvbiBidXR0b24nLCBjb250YWluZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2xhc3NMaXN0QnRuID0gZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuICAgICQoJyNjaGVja291dFBhZ2UgLmRhdGEtJyArIGNsYXNzTGlzdEJ0blszXSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgY2xhc3NMaXN0QnRuWzNdICsgJ0FkZHJlc3NdWycgKyBjbGFzc0xpc3RbMV0gKyAnXSc7XG4gICAgICBjb25zdCB0b1NhdmUgPSAnI2NoZWNrb3V0UGFnZSAubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZpZWxkTmFtZTtcbiAgICAgIGNvbnN0IHRvUmVwbGFjZSA9ICcuY2hhbmdlLScrIGNsYXNzTGlzdEJ0blszXSArJy1hZGRyZXNzICcgKyBmaWVsZE5hbWU7XG4gICAgICAkKHRvUmVwbGFjZSkudmFsKCQodG9TYXZlKS52YWwoKSk7XG4gICAgfSk7XG4gICAgY2hlY2tvdXRTYXZlQWRkcmVzcyhlLmN1cnJlbnRUYXJnZXQsIGNsYXNzTGlzdEJ0blszXSwgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiBhZGRyZXNzIHBhZ2UgbmV4dCBidXR0b25cbiAgJCgnLm1haW4tYWRkcmVzcy1mb3JtIGJ1dHRvbi5idG4tcHJpbWFyeScsIGNvbnRhaW5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuY2hlY2tvdXQtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5oaWRlKCk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKS5zdWJtaXQoKTtcbiAgfSlcblxuICAvLyBXaGVuIHVzZXIgY2FuY2VscyB0aGUgYWRkcmVzcyBjaGFuZ2VzXG4gICQoJ2EuY2FuY2VsLWNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgIGNhbmNlbENoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB1c2VyIGNhbmNlbHMgdGhlIGFkZHJlc3MgYWRkXG4gICQoJ2EuY2FuY2VsLWFkZC1jaGVja291dC1hZGRyZXNzJywgY29udGFpbmVyKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWNoZWNrb3V0LWFkZHJlc3MtbmF2aWdhdGlvbicsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy5zYXZlLWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKTtcbiAgICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gW2NsYXNzXj1cImFkZC1cIl0nLCBjb250YWluZXIpLmhpZGUoKTtcbiAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0Q2hvb3NlTmV3QWRkcmVzcyA9IGZ1bmN0aW9uIGNob29zZUFkZHJlc3MoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gIC8vIFdoZW4gdXNlciBjaG9zZSBhbiBhZGRyZXNzXG4gIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICQoJy5kYXRhLWFkZHJlc3MnLCB0aGlzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gdGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKVsxXTtcbiAgICAgIGNvbnN0IGFkZHJlc3NUeXBlID0gJCgnLmNob3Nlbi1hZGRyZXNzIC5jaGFuZ2UtYWRkcmVzcy5jbGlja2VkJywgY29udGFpbmVyKVswXS5jbGFzc05hbWUuc3BsaXQoL1xccysvKVsxXTtcbiAgICAgIGNvbnN0IGZpZWxkU2VsZWN0b3IgPSAnW25hbWU9XCJzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc1snICsgYWRkcmVzc1R5cGUgKyAnQWRkcmVzc11bJyArIGZpZWxkTmFtZSArICddXCJdJztcbiAgICAgIGNvbnN0IGZvcm1GaWVsZCA9ICcjY2hlY2tvdXRQYWdlIC5tYWluLWFkZHJlc3MtZm9ybSAnICsgZmllbGRTZWxlY3RvcjtcbiAgICAgIGNvbnN0IGNob3NlbkFkZHJlc3NUZXh0ID0gJy5kYXRhLScrIGFkZHJlc3NUeXBlICsnLicgKyBmaWVsZE5hbWU7XG5cbiAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgICAgJChmb3JtRmllbGQpLnZhbCgkKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwgMikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChmb3JtRmllbGQpLnZhbCgkKHRoaXMpLnRleHQoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdzdHJlZXQyJykge1xuICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICQoJy5zdHJlZXQyLWNvbnRhaW5lci0nICsgYWRkcmVzc1R5cGUpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICQoY2hvc2VuQWRkcmVzc1RleHQpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuICAgIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG4vKiBTYXZlIGFkZHJlc3MgaW4gdXNlciBhY2NvdW50IDogUmV0dXJucyBlcnJvcnMgaW4gZm9ybSBpZiBub3QgdmFsaWQgKi9cbmZ1bmN0aW9uIGNoZWNrb3V0U2F2ZUFkZHJlc3MoZWxlbWVudCwgYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBmb3JtID0gJChlbGVtZW50KS5jbG9zZXN0KCdmb3JtJylcbiAgaWYgKCQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX3R5cGVcIl0nLCBmb3JtKS5sZW5ndGgpIHtcbiAgICAkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc190eXBlXCJdJywgZm9ybSkudmFsKGFkZHJlc3NUeXBlKTtcbiAgfVxuICBmaWxsT3RoZXJBZGRyZXNzKGFkZHJlc3NUeXBlLCBjb250YWluZXIpO1xuICAkKCcuc2F2ZS1hZGRyZXNzLWZvcm0gZm9ybScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBkYXRhU3VjY2Vzc0RpdiA9ICQocmVzcG9uc2UpO1xuICAgICAgaWYoZGF0YVN1Y2Nlc3NEaXYuaGFzQ2xhc3MoJ3NhdmUtYWRkcmVzcy1zdWNjZXNzJykpIHtcbiAgICAgICAgJCgnLmNob3Nlbi1hZGRyZXNzIC5kYXRhLScgKyBhZGRyZXNzVHlwZSwgY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gY2xhc3NMaXN0WzFdO1xuXG4gICAgICAgICAgY29uc3QgZm9ybUZpZWxkTmFtZSA9ICdbbmFtZT1cInN5bGl1c19jaGVja291dF9hZGRyZXNzWycgKyBhZGRyZXNzVHlwZSArICdBZGRyZXNzXVsnICsgZmllbGROYW1lICsgJ10nO1xuICAgICAgICAgIGNvbnN0IGZpZWxkVG9SZXBsYWNlID0gJyNjaGVja291dFBhZ2UgLm1haW4tYWRkcmVzcy1mb3JtICcgKyBmb3JtRmllbGROYW1lO1xuXG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCk7XG5cbiAgICAgICAgICAkKGZpZWxkVG9SZXBsYWNlKS52YWwobmV3VmFsdWUpO1xuICAgICAgICAgICQodGhpcykudGV4dChuZXdWYWx1ZSlcbiAgICAgICAgICBpZiAoZmllbGROYW1lID09PSAnY291bnRyeUNvZGUnKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLmNvdW50cnlOYW1lJywgZGF0YVN1Y2Nlc3NEaXYpLmh0bWwoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gJ3N0cmVldDInKSB7XG4gICAgICAgICAgICBpZiAoJCgnLmRhdGEtJyArIGFkZHJlc3NUeXBlICsgJy1zdWNjZXNzLicgKyBmaWVsZE5hbWUsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKCcuc3RyZWV0Mi1jb250YWluZXItJyArIGFkZHJlc3NUeXBlKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICQoJy5hZGRyZXNzLWJvb2snLCBjb250YWluZXIpLmh0bWwoJCgnLmFkZHJlc3MtYm9vaycsIGRhdGFTdWNjZXNzRGl2KS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGlkZUNoYW5nZUFkZHJlc3MoY29udGFpbmVyKTtcbiAgICAgICAgaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBoaWRlU2F2ZUFkZHJlc3NGb3JtKGNvbnRhaW5lcik7XG4gICAgICAkKCQucGFyc2VIVE1MKGVycm9yLnJlc3BvbnNlVGV4dClbMV0pLmZpbmQoJy5mb3JtLWVycm9yLW1lc3NhZ2UnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xhYmVsJykuYXR0cignZm9yJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIFtpZD1cIicrIGZpZWxkTmFtZSArJ1wiXScsIGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj48c3BhbiBjbGFzcz1cImZvcm0tZXJyb3ItbWVzc2FnZSBkLWJsb2NrXCI+JyArIGZpZWxkRXJyb3IgKyAnPC9zcGFuPjwvc3Bhbj4nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcbn1cblxuLyogRmlsbCBvdGhlciBhZGRyZXNzIGZpZWxkcyB0byBhdm9pZCBlcnJvcnMgKi9cbmZ1bmN0aW9uIGZpbGxPdGhlckFkZHJlc3MoYWRkcmVzc1R5cGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBvdGhlckFkZHJlc3NUeXBlID0gKGFkZHJlc3NUeXBlID09PSAnc2hpcHBpbmcnKSA/ICdiaWxsaW5nJyA6ICdzaGlwcGluZyc7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dFtpZF49XCJpbkFjY291bnRfc2F2ZV8nICsgb3RoZXJBZGRyZXNzVHlwZSArICdcIl0nLCBjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKFxcdyspXFxdJC9nbTtcbiAgICBjb25zdCBmaWVsZE5hbWUgPSByZWdleC5leGVjKCQodGhpcykuYXR0cignbmFtZScpKVsxXTtcbiAgICBjb25zdCBkYXRhVG9GaWxsID0gJCgnLmNob3Nlbi1hZGRyZXNzIGFkZHJlc3MuY2FuY2VsLWluZm8uJyArIG90aGVyQWRkcmVzc1R5cGUsIGNvbnRhaW5lcikuZGF0YSgpO1xuICAgICQodGhpcykudmFsKGRhdGFUb0ZpbGxbZmllbGROYW1lXSk7XG4gIH0pO1xuICAkKCcjaW5BY2NvdW50X3NhdmVfZGlmZmVyZW50QmlsbGluZ0FkZHJlc3MnLCBjb250YWluZXIpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbn1cblxuLyogSGlkZSBhZGRyZXNzIG1vZGlmaWNhdGlvbiBjb250YWluZXIgKi9cbmZ1bmN0aW9uIGhpZGVDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuc2F2ZS1jaGVja291dC1hZGRyZXNzLW5hdmlnYXRpb24nLCBjb250YWluZXIpLnNob3coKTtcbiAgJCgnLmNoZWNrb3V0LWFkZHJlc3MtZm9ybScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICBjYW5jZWxCdG4uaGlkZSgpO1xuICBjYW5jZWxCdG4ucHJldigpLnNob3coKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ibG9jaycpO1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgLmNoYW5nZS1hZGRyZXNzJywgY29udGFpbmVyKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAkKCcjbWFpbkNvbnRlbnRDb250YWluZXInKVswXS5zY3JvbGxUb3AgPSAwO1xufVxuXG4vKiBSZW1vdmUgZXJyb3IgaW5kaWNhdG9ycyB3aGVuIHNhdmUgYWRkcmVzcyBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuZnVuY3Rpb24gaGlkZVNhdmVBZGRyZXNzRm9ybShjb250YWluZXIpIHtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIGZvcm0nLCBjb250YWluZXIpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICQoJy5zYXZlLWFkZHJlc3MtZm9ybSBpbnB1dCcsIGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgJCgnLnNhdmUtYWRkcmVzcy1mb3JtIC5pbnZhbGlkLWZlZWRiYWNrJywgY29udGFpbmVyKS5yZW1vdmUoKTtcbn1cblxuLyogUmVwbGFjZSBhbGwgZm9ybSBhbmQgZGlzcGxheWVkIGFkZHJlc3MgZGF0YSB3aGVuIGNhbmNlbCBtb2RpZmljYXRpb25zICovXG5mdW5jdGlvbiBjYW5jZWxDaGFuZ2VBZGRyZXNzKGNvbnRhaW5lcikge1xuICAkKCcuY2hvc2VuLWFkZHJlc3MgYWRkcmVzcy5jYW5jZWwtaW5mbycsIGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvbGREYXRhID0gJCh0aGlzKS5kYXRhKCk7XG4gICAgY29uc3QgYWRkcmVzc1R5cGUgPSAodGhpcy5jbGFzc05hbWUuc3BsaXQoL1xccysvKSlbMV07XG4gICAgY29uc3QgZmllbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZERhdGEpO1xuXG4gICAgZmllbGROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdjb3VudHJ5TmFtZScpIHtcbiAgICAgICAgZmllbGROYW1lID0gJ2NvdW50cnlDb2RlJ1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dFRvUmVwbGFjZSA9ICcuZGF0YS0nICsgYWRkcmVzc1R5cGUgKyAnLicgKyBmaWVsZE5hbWU7XG4gICAgICBjb25zdCBmb3JtRmllbGROYW1lID0gJ1tuYW1lPVwic3lsaXVzX2NoZWNrb3V0X2FkZHJlc3NbJyArIGFkZHJlc3NUeXBlICsgJ0FkZHJlc3NdWycgKyBmaWVsZE5hbWUgKyAnXVwiXSc7XG4gICAgICBjb25zdCBmaWVsZFRvUmVwbGFjZSA9ICcubWFpbi1hZGRyZXNzLWZvcm0gJyArIGZvcm1GaWVsZE5hbWU7XG5cbiAgICAgIC8vIFNldCBmb3JtIHdpdGggb2xkIGRhdGFcbiAgICAgICQoZmllbGRUb1JlcGxhY2UsIGNvbnRhaW5lcikudmFsKG9sZERhdGFbZWxlbWVudF0pO1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdjb3VudHJ5Q29kZScpIHtcbiAgICAgICAgJChmaWVsZFRvUmVwbGFjZSwgY29udGFpbmVyKS52YWwob2xkRGF0YVtlbGVtZW50XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgY2hvc2VuIEFkZHJlc3Mgd2l0aCBvbGQgZGF0YVxuICAgICAgICAkKHRleHRUb1JlcGxhY2UpLnRleHQob2xkRGF0YVtlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKiBDcmVhdGUgY2Fyb3VzZWwgd2hlbiB1c2VyIGhhdmUgbW9yZSB0aGFuIDQgYWRkcmVzc2VzICovXG5mdW5jdGlvbiBzZXRBZGRyZXNzQ2Fyb3VzZWwoKSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICByb3dzOiAyLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzbGlkZXNQZXJSb3c6IDIsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbEFkZHJlc3NMaXN0JykubmV4dCgnLnNsaWRlci1jb250cm9scycpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuIHByZXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0biBuZXh0LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPk5leHQ8L2J1dHRvbj48L2Rpdj4nLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByb3dzOiAzLFxuICAgICAgICAgIHNsaWRlc1BlclJvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGxldCBzbGlkZXIgPSAkKCcjY2Fyb3VzZWxBZGRyZXNzTGlzdCcpO1xuICBpZihzbGlkZXIgJiYgIXNsaWRlci5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgIHNsaWRlci5zbGljayhvcHRzKTtcbiAgfVxufVxuXG4vKiBNYW5hZ2Ugd2hhdCB0eXBlIG9mIGFkZHJlc3Mgd2lsbCBiZSByZXBsYWNlIGFuZC9vciBzYXZlZCAqL1xuZnVuY3Rpb24gYWRkcmVzc1R5cGVNYW5hZ2UoYnRuRWxlbWVudCwgc2VsZWN0b3JUeXBlLCBjb250YWluZXIpIHtcbiAgaWYgKCQoYnRuRWxlbWVudCkuaGFzQ2xhc3MoJ3NoaXBwaW5nJykpIHtcbiAgICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctc2hpcHBpbmctdGl0bGUnLCBjb250YWluZXIpLnNob3coKTtcbiAgICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctYmlsbGluZy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIHNhdmVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2JpbGxpbmcnKTtcbiAgICBzYXZlQnV0dG9uLmFkZENsYXNzKCdzaGlwcGluZycpO1xuICB9XG4gIGlmICgkKGJ0bkVsZW1lbnQpLmhhc0NsYXNzKCdiaWxsaW5nJykpIHtcbiAgICAkKCcuJyArIHNlbGVjdG9yVHlwZSArICctYmlsbGluZy10aXRsZScsIGNvbnRhaW5lcikuc2hvdygpO1xuICAgICQoJy4nICsgc2VsZWN0b3JUeXBlICsgJy1zaGlwcGluZy10aXRsZScsIGNvbnRhaW5lcikuaGlkZSgpO1xuICAgIHNhdmVCdXR0b24ucmVtb3ZlQ2xhc3MoJ3NoaXBwaW5nJyk7XG4gICAgc2F2ZUJ1dHRvbi5hZGRDbGFzcygnYmlsbGluZycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrb3V0O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvYWNjb3VudC1pY29uLmJhOTY5Yzk5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2JhY2suY2QxMWYwZmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvY2FyZC5iNzU3MWIxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9jaHJvbm9wb3N0LmVlZGU2YWJjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2NvbGlzc2ltby4wYjc5YTcxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9kZWxpdmVyeS10cnVjay45YzNkZmNkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWRlLjlhMzE4NTlkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24tZW4uMzAyZWU3YmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvaWNvbi1lcy42YWE3MDdmNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9pY29uLWZyLjg0NmQ3ZTY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL2ljb24taXQuMzU1NWEzNmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbG9nby4yYzJhOWNjMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9tYXN0ZXJjYXJkLjA0MGY0MWJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL21vbmRpYWwtcmVsYXkuZTcyNjg5N2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvbmV4dC5mYjY0NjA5NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9wYXlwYWwuOTUyNjI1ZjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvcmVsb2FkLjNiNzUwZDQ2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL25vYmxlc3MtdGhlbWUvaW1hZ2VzL3JldHVybi1wb2xpY3kuNjdkOGE3NTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvc2hvcHBpbmctYmFnLWljb24uN2ZkZWMyNzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvbm9ibGVzcy10aGVtZS9pbWFnZXMvdmlzYS42OTljNDAzOS5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9