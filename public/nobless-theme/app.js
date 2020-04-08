(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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
/* WEBPACK VAR INJECTION */(function(jQuery) {

__webpack_require__(/*! popper.js/dist/popper.min */ "./node_modules/popper.js/dist/popper.min.js");

__webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

__webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");

__webpack_require__(/*! ./indexBootstrapTheme */ "./themes/NoblessTheme/assets/indexBootstrapTheme.js");

__webpack_require__(/*! ./scss/index.scss */ "./themes/NoblessTheme/assets/scss/index.scss");

__webpack_require__(/*! ./media/logo.png */ "./themes/NoblessTheme/assets/media/logo.png");

/*import '../../BootstrapTheme/assets/js/fontawesome';*/

/**
 * Resize function to keep all the main-content visible
 */
function resizeContent() {
  const footerHeight = document.getElementById('footerContainer').clientHeight;
  const contentHeight = window.innerHeight - document.getElementById('headerContainer').clientHeight - footerHeight;
  document.getElementById('mainContentContainer').style.height = contentHeight + "px";
}
/**
 * Carousel creation
 */


function createCarousel() {
  jQuery('#carouselLatest').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: jQuery('#carouselLatest').next("#slider-controls"),
    prevArrow: '<div class="div-btn"><button type="button" class="slick-prev ">Previous</button></div>',
    nextArrow: '<div class="div-btn"><button type="button" class="slick-next">Previous</button></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}
/**
 * Manage dropdown on mobile size
 */


const menuDropdown = document.getElementById('mainNavbar');

if (menuDropdown) {
  menuDropdown.addEventListener('shown.bs.collapse', function (e) {
    resizeContent();
  }, false);
  menuDropdown.addEventListener('hidden.bs.collapse', function (e) {
    resizeContent();
  }, false);
}

function init() {
  createCarousel();
  resizeContent();
}

window.onload = init;
window.onresize = resizeContent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./themes/NoblessTheme/assets/media/logo.png":
/*!***************************************************!*\
  !*** ./themes/NoblessTheme/assets/media/logo.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/nobless-theme/images/logo.6c0a5a54.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGQtdG8tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2suanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFwaS10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtbG9hZGFibGUtZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmF0aW5nLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXJlbW92ZS1mcm9tLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnQtaW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXZhcmlhbnRzLXByaWNlcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTm9ibGVzc1RoZW1lL2Fzc2V0cy9pbmRleEJvb3RzdHJhcFRoZW1lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9Ob2JsZXNzVGhlbWUvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTeWxpdXNBZGRUb0NhcnQiLCJlbCIsImVsZW1lbnQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVxdWVzdCIsImF4aW9zIiwicG9zdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJmb3JFYWNoIiwibWVzc2FnZSIsImVycm9ycyIsImlubmVySFRNTCIsInBhcnNlS2V5Iiwia2V5IiwicmVwbGFjZSIsIndvcmRzIiwidG9VcHBlckNhc2UiLCJTeWxpdXNBZGRyZXNzQm9vayIsInNlbGVjdCIsImZpbmRCeU5hbWUiLCJuYW1lIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwiY2hvaWNlIiwiY3VycmVudFRhcmdldCIsImNob2ljZURhdGEiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsInN0YXJ0c1dpdGgiLCJjYW1lbENhc2VkIiwiZyIsInZhbHVlIiwicHJvdmluY2VDb2RlIiwicHJvdmluY2VOYW1lIiwicHJvdmluY2VDb250YWluZXIiLCJjbG9zZXN0IiwiaW5wdXQiLCJwcm9wZXJ0eSIsImZpZWxkIiwiaW5kZXhPZiIsImRpc3BhdGNoRXZlbnQiLCJleGlzdHMiLCJzZXRJbnRlcnZhbCIsInByb3ZpbmNlQ29kZUZpZWxkIiwicHJvdmluY2VOYW1lRmllbGQiLCJoYXNBdHRyaWJ1dGUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjbGVhckludGVydmFsIiwiU3lsaXVzQXBpTG9naW4iLCJzaWduSW5CdXR0b24iLCJ2YWxpZGF0aW9uRmllbGQiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInJlbG9hZCIsIlN5bGl1c0FwaVRvZ2dsZSIsInRvZ2dsZWFibGVFbGVtZW50IiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZ2V0UHJvdmluY2VJbnB1dFZhbHVlIiwidmFsdWVTZWxlY3RvciIsInZhbCIsIlN5bGl1c1Byb3ZpbmNlRmllbGQiLCJjb3VudHJ5U2VsZWN0IiwiY291bnRyeVNlbGVjdEl0ZW0iLCJldmVudCIsIm5leHRFbGVtZW50U2libGluZyIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicHJvdmluY2VJbnB1dEZpZWxkTmFtZSIsInByb3ZpbmNlU2VsZWN0RmllbGRJZCIsInByb3ZpbmNlSW5wdXRGaWVsZElkIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUNvZGUiLCJjb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwicHJvdmluY2VTZWxlY3RWYWx1ZSIsInByb3ZpbmNlSW5wdXRWYWx1ZSIsIlN5bGl1c1JhdGluZyIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwic2V0dGluZ3MiLCJyYXRpbmdNYXgiLCJOdW1iZXIiLCJkYXRhc2V0IiwianNSYXRpbmdNYXgiLCJyYXRpbmdBdmVyYWdlIiwianNSYXRpbmdBdmVyYWdlIiwidmlld09ubHkiLCJqc1JhdGluZ1ZpZXdvbmx5IiwiYnRuT25FbGVtZW50IiwiYnRuT2ZmRWxlbWVudCIsInJlbmRlciIsInJlbmRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImpzUmF0aW5nVmFsdWUiLCJjaGFuZ2VJbnB1dFZhbHVlIiwiYmluZCIsIm9uUmF0ZSIsIlN5bGl1c1JlbW92ZUZyb21DYXJ0IiwiY3NyZlRva2VuIiwiZGVsZXRlIiwiX2NzcmZfdG9rZW4iLCJTeWxpdXNUb2dnbGUiLCJ0cmlnZ2VyIiwidG9nZ2xlIiwidG9nZ2xlRWxlbWVudCIsImpzVG9nZ2xlIiwiY2hlY2tlZCIsInN0eWxlIiwiZGlzcGxheSIsIlN5bGl1c1ZhcmlhbnRJbWFnZXMiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwiZGVmYXVsdEltYWdlTGluayIsImRlZmF1bHRJbWFnZVNyYyIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiaW1nIiwiaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UiLCJzZWxlY3RvciIsIm9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJwcmljZSIsImhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSIsIlN5bGl1c1ZhcmlhbnRzUHJpY2VzIiwic3lsaXVzVmFyaWFudHNQcmljaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzeWxpdXNQcm9kdWN0VmFyaWFudHMiLCJyZXNpemVDb250ZW50IiwiZm9vdGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0IiwiY3JlYXRlQ2Fyb3VzZWwiLCJqUXVlcnkiLCJzbGljayIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFwcGVuZEFycm93cyIsIm5leHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1lbnVEcm9wZG93biIsImluaXQiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsImRlZmF1bHRzIiwiaGVhZGVycyIsImFjY2VwdCIsImdsaWdodGJveCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInN5bGl1c0JpbGxpbmdBZGRyZXNzIiwiZWxlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVdBOzs7O0FBQ0E7Ozs7OztBQVpBOzs7Ozs7Ozs7QUFTQTtBQUtBLE1BQU1BLGVBQWUsR0FBSUMsRUFBRCxJQUFRO0FBQzlCLFFBQU1DLE9BQU8sR0FBR0QsRUFBaEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixRQUFyQixDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsZUFBckIsQ0FBcEI7QUFDQSxRQUFNRSxpQkFBaUIsR0FBR0osT0FBTyxDQUFDSyxhQUFSLENBQXNCLCtCQUF0QixDQUExQjtBQUVBTCxTQUFPLENBQUNNLGdCQUFSLENBQXlCLFFBQXpCLEVBQW9DQyxDQUFELElBQU87QUFDeEMsVUFBTUMsT0FBTyxHQUFHQyxnQkFBTUMsSUFBTixDQUFXVCxHQUFYLEVBQWdCLDZCQUFVRCxPQUFWLENBQWhCLENBQWhCOztBQUVBTyxLQUFDLENBQUNJLGNBQUY7QUFFQUgsV0FBTyxDQUFDSSxJQUFSLENBQWEsTUFBTTtBQUNqQlIsdUJBQWlCLENBQUNTLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxRQUFoQztBQUNBQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCZCxXQUF2QjtBQUNELEtBSEQ7QUFLQUssV0FBTyxDQUFDVSxLQUFSLENBQWVDLEtBQUQsSUFBVztBQUN2QmYsdUJBQWlCLENBQUNTLFNBQWxCLENBQTRCTyxNQUE1QixDQUFtQyxRQUFuQztBQUNBLFVBQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBRUFDLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlSixLQUFLLENBQUNLLFFBQU4sQ0FBZUMsSUFBOUIsRUFBb0NDLE9BQXBDLENBQTRDLENBQUMsR0FBR0MsT0FBSCxDQUFELEtBQWlCO0FBQzNETix5QkFB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QVEsQ0FBQzdFLGFBQVQsQ0FBdUIsNkNBQXZCLENBQUosRUFBMkU7QUFBRSxRQUFJMEksNkJBQUo7QUFBNEIsR0EvQ3ZELENBaURsRDs7O0FBQ0E7QUFDRCxDQW5ERCxFOzs7Ozs7Ozs7OztBQy9CQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xuXG5jb25zdCBTeWxpdXNBZGRUb0NhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVkaXJlY3QnKTtcbiAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZXJyb3JcIl0nKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QodXJsLCBzZXJpYWxpemUoZWxlbWVudCkpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICB9KTtcblxuICAgIHJlcXVlc3QuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhlcnJvci5yZXNwb25zZS5kYXRhKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSArPSBtZXNzYWdlLmVycm9ycztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZFRvQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBwYXJzZUtleSA9IGZ1bmN0aW9uIHBhcnNlS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhfXFx3KS9nLCB3b3JkcyA9PiB3b3Jkc1sxXS50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmNvbnN0IFN5bGl1c0FkZHJlc3NCb29rID0gZnVuY3Rpb24gU3lsaXVzQWRkcmVzc0Jvb2soZWwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICBjb25zdCBmaW5kQnlOYW1lID0gZnVuY3Rpb24gZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWUqPSR7cGFyc2VLZXkobmFtZSl9XWApO1xuICB9O1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2hvaWNlID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgY2hvaWNlRGF0YSA9IHt9O1xuXG4gICAgICBbLi4uY2hvaWNlLmF0dHJpYnV0ZXNdLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKGF0dHIubmFtZS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxDYXNlZCA9IGF0dHIubmFtZS5yZXBsYWNlKCdkYXRhLScsICcnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBnID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY2hvaWNlRGF0YVtjYW1lbENhc2VkXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHByb3ZpbmNlQ29kZSwgcHJvdmluY2VOYW1lIH0gPSBjaG9pY2VEYXRhO1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnW2RhdGEtanMtYWRkcmVzcy1ib29rXScpLnF1ZXJ5U2VsZWN0b3IoJy5wcm92aW5jZS1jb250YWluZXInKTtcblxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VEYXRhKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZpbmRCeU5hbWUocHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdjb3VudHJ5Q29kZScpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cbiAgICAgICAgICBjb25zdCBleGlzdHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUNvZGVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlQ29kZScpO1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VOYW1lRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgICAgICAgaWYgKCFwcm92aW5jZUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgIGlmIChwcm92aW5jZUNvZGVGaWVsZCAmJiBwcm92aW5jZUNvZGVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlQ29kZSAhPT0gJycgfHwgcHJvdmluY2VDb2RlICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZUNvZGVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlQ29kZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aW5jZU5hbWVGaWVsZCAmJiBwcm92aW5jZU5hbWVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlTmFtZSAhPT0gJycgfHwgcHJvdmluY2VOYW1lICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZU5hbWVGaWVsZC52YWx1ZSA9IHByb3ZpbmNlTmFtZTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRyZXNzQm9vaztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNBcGlMb2dpbiA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCB2YWxpZGF0aW9uRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xuICBjb25zdCB1cmwgPSBzaWduSW5CdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLXVybCcpO1xuICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gIGNvbnN0IGNzcmZUb2tlbk5hbWUgPSBjc3JmVG9rZW5GaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICBzaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfdXNlcm5hbWUnLCBlbWFpbEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdfcGFzc3dvcmQnLCBwYXNzd29yZEZpZWxkLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKFtjc3JmVG9rZW5OYW1lXSwgY3NyZlRva2VuRmllbGQudmFsdWUpO1xuXG4gICAgYXhpb3MucG9zdCh1cmwsIHBhcmFtcylcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5pbm5lckhUTUwgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlMb2dpbjtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5cbmNvbnN0IFN5bGl1c0FwaVRvZ2dsZSA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWxvZ2luLWNoZWNrLWVtYWlsLXVybCcpO1xuICBjb25zdCB0b2dnbGVhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZm9ybVwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwsIHsgcGFyYW1zOiB7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7IH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpOyB9KTtcbiAgICB9XG4gIH0sIDE1MDApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaVRvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBTeWxpdXNMb2FkYWJsZUZvcm1zID0gZnVuY3Rpb24gU3lsaXVzTG9hZGFibGVGb3JtcygpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvYWRpbmctb3ZlcmxheV0nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmxvYWRhYmxlJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBzZWxlY3QuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBpZiAoc2VsZWN0LnZhbHVlID09PSAnJyB8fCBzZWxlY3QudmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJycpO1xuXG4gICAgICBheGlvcy5nZXQocHJvdmluY2VDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc2VsZWN0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlU2VsZWN0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUoKFxuICAgICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QgPiBvcHRpb25bc2VsZWN0ZWQkPVwic2VsZWN0ZWRcIl0nKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZElkfVwiYClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ29wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicsICdvcHRpb24gdmFsdWU9XCJcIicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZShwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZUlucHV0RmllbGROYW1lfVwiJHtwcm92aW5jZUlucHV0VmFsdWV9YClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0SXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvdW50cnlTZWxlY3RJdGVtLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNQcm92aW5jZUZpZWxkO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzUmF0aW5nIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yYXRpbmdNYXggPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ01heCkgfHwgNTtcbiAgICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSkgfHwgMDtcbiAgICAgIHRoaXMudmlld09ubHkgPSB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nVmlld29ubHkgIT09ICdmYWxzZSc7XG4gICAgICB0aGlzLmJ0bk9uRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb25dJyk7XG4gICAgICB0aGlzLmJ0bk9mZkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9mZl0nKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5yYXRpbmdNYXg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlID0gaTtcblxuICAgICAgaWYgKHRoaXMudmlld09ubHkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDw9IHRoaXMucmF0aW5nQXZlcmFnZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT25FbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PZmZFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWxlbWVudCk7XG4gIH1cblxuICBjaGFuZ2VJbnB1dFZhbHVlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5qc1JhdGluZ1ZhbHVlKTtcbiAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vblJhdGUodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JhdGluZztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBTeWxpdXNSZW1vdmVGcm9tQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1yZWRpcmVjdC11cmwnKTtcbiAgY29uc3QgY3NyZlRva2VuID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1jc3JmLXRva2VuJyk7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYXBpLXVybCcpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHsgZGF0YTogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcbiAgICAgIC50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3RVcmwpOyB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSZW1vdmVGcm9tQ2FydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1RvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHRyaWdnZXIpIHtcbiAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudHJpZ2dlci5kYXRhc2V0LmpzVG9nZ2xlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIuY2hlY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1RvZ2dsZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jbGFzcyBTeWxpdXNWYXJpYW50SW1hZ2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1pbWFnZV0nKTtcbiAgICB0aGlzLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlTGluay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZUxpbmsgPSB0aGlzLm1haW5JbWFnZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VTcmMgPSB0aGlzLm1haW5JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRJbWFnZSgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVZhcmlhbnQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgIGlucHV0W25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdOmNoZWNrZWQsIFxuICAgICAgc2VsZWN0W25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXSBvcHRpb246Y2hlY2tlZFxuICAgIGApO1xuXG4gICAgcmV0dXJuIFsuLi5pdGVtc10ubWFwKGVsID0+IGVsLnZhbHVlKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRBY3RpdmVJbWFnZVNyYyh2YXJpYW50KSB7XG4gICAgbGV0IGltYWdlTGluayA9IHRoaXMuZGVmYXVsdEltYWdlTGluaztcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVNyYztcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtY29kZT1cIiR7dmFyaWFudH1cIl0sIFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LW9wdGlvbnM9XCIke3ZhcmlhbnR9IFwiXVxuICAgIGApO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtanMtcHJvZHVjdC10aHVtYm5haWxdJyk7XG4gICAgICBpbWFnZUxpbmsgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaW1hZ2VTcmMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGltYWdlTGluaywgaW1hZ2VTcmMgfTtcbiAgfVxuXG4gIHNldEltYWdlKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0QWN0aXZlSW1hZ2VTcmModGhpcy5nZXRBY3RpdmVWYXJpYW50KCkpO1xuICAgIHRoaXMubWFpbkltYWdlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbWcuaW1hZ2VMaW5rKTtcbiAgICB0aGlzLm1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5pbWFnZVNyYyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudEltYWdlcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3RbZGF0YS1vcHRpb25dJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Rbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBzZWxlY3RvciArPSBgW2RhdGEtJHtzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpfT1cIiR7b3B0aW9ufVwiXWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuICAgICAgaWYgKHByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0uY2xvc2VzdCgndHInKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXZhcmlhbnQtcHJpY2VdJykuaW5uZXJIVE1MO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBTeWxpdXNWYXJpYW50c1ByaWNlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3lsaXVzVmFyaWFudHNQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykgfHwgbnVsbDtcbiAgY29uc3Qgc3lsaXVzUHJvZHVjdFZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykgfHwgbnVsbDtcblxuICBpZiAoc3lsaXVzVmFyaWFudHNQcmljaW5nKSB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKTtcbiAgfSBlbHNlIGlmIChzeWxpdXNQcm9kdWN0VmFyaWFudHMpIHtcbiAgICBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVmFyaWFudHNQcmljZXM7XG4iLCJpbXBvcnQgJ3BvcHBlci5qcy9kaXN0L3BvcHBlci5taW4nO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4nO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCAnLi9pbmRleEJvb3RzdHJhcFRoZW1lJztcbi8qaW1wb3J0ICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvZm9udGF3ZXNvbWUnOyovXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9tZWRpYS9sb2dvLnBuZyc7XG5cbi8qKlxuICogUmVzaXplIGZ1bmN0aW9uIHRvIGtlZXAgYWxsIHRoZSBtYWluLWNvbnRlbnQgdmlzaWJsZVxuICovXG5mdW5jdGlvbiByZXNpemVDb250ZW50KCkge1xuICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKS5jbGllbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Q29udGFpbmVyJykuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIjtcbn1cblxuLyoqXG4gKiBDYXJvdXNlbCBjcmVhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpIHtcbiAgalF1ZXJ5KCcjY2Fyb3VzZWxMYXRlc3QnKS5zbGljayh7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDcwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXBwZW5kQXJyb3dzOiBqUXVlcnkoJyNjYXJvdXNlbExhdGVzdCcpLm5leHQoXCIjc2xpZGVyLWNvbnRyb2xzXCIpLFxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJkaXYtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiZGl2LWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPlByZXZpb3VzPC9idXR0b24+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9KTtcbn1cblxuLyoqXG4gKiBNYW5hZ2UgZHJvcGRvd24gb24gbW9iaWxlIHNpemVcbiAqL1xuY29uc3QgbWVudURyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5OYXZiYXInKTtcblxuaWYgKG1lbnVEcm9wZG93bikge1xuICBtZW51RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKXtcbiAgICByZXNpemVDb250ZW50KCk7XG4gIH0sIGZhbHNlKTtcbiAgbWVudURyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpe1xuICAgIHJlc2l6ZUNvbnRlbnQoKTtcbiAgfSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjcmVhdGVDYXJvdXNlbCgpO1xuICByZXNpemVDb250ZW50KCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQ29udGVudDtcblxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBHTGlnaHRib3ggZnJvbSAnZ2xpZ2h0Ym94JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBTeWxpdXNSYXRpbmcgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuLi8uLi9Cb290c3RyYXBUaGVtZS9hc3NldHMvanMvc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IFN5bGl1c1JlbW92ZUZyb21DYXJ0IGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4nO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4uLy4uL0Jvb3RzdHJhcFRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZCc7XG5pbXBvcnQgU3lsaXVzQWRkcmVzc0Jvb2sgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi4vLi4vQm9vdHN0cmFwVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICdnbGlnaHRib3gnIH0pO1xuXG4gIC8vIEFkZCB0byBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWFkZC10by1jYXJ0PVwiZm9ybVwiXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzQWRkVG9DYXJ0KGVsKSk7XG5cbiAgLy8gUmVtb3ZlIGZyb20gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWJ1dHRvbl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c1JlbW92ZUZyb21DYXJ0KGVsKSk7XG5cbiAgLy8gUHJvdmluY2UgZmllbGRcbiAgU3lsaXVzUHJvdmluY2VGaWVsZCgpO1xuXG4gIC8vIEFkZHJlc3MgYm9va1xuICBjb25zdCBzeWxpdXNTaGlwcGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtc2hpcHBpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzU2hpcHBpbmdBZGRyZXNzICYmIHN5bGl1c1NoaXBwaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyk7XG4gIH1cbiAgY29uc3Qgc3lsaXVzQmlsbGluZ0FkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGRyZXNzLWJvb2s9XCJzeWxpdXMtYmlsbGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNCaWxsaW5nQWRkcmVzcyAmJiBzeWxpdXNCaWxsaW5nQWRkcmVzcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKSkge1xuICAgIFN5bGl1c0FkZHJlc3NCb29rKHN5bGl1c0JpbGxpbmdBZGRyZXNzKTtcbiAgfVxuXG4gIC8vIFZhcmlhbnQgcHJpY2VzXG4gIFN5bGl1c1ZhcmlhbnRzUHJpY2VzKCk7XG5cbiAgLy8gU3RhciByYXRpbmdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmF0aW5nXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBuZXcgU3lsaXVzUmF0aW5nKGVsZW0sIHtcbiAgICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3lsaXVzX3Byb2R1Y3RfcmV2aWV3X3JhdGluZ18ke3ZhbHVlIC0gMX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBhbmQgbG9naW4gZnJvbSBjaGVja291dFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpIHtcbiAgICBTeWxpdXNBcGlUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJlbWFpbFwiXScpKTtcbiAgICBTeWxpdXNBcGlMb2dpbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYmlsbGluZyBhZGRyZXNzIG9uIHRoZSBjaGVja291dCBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXRvZ2dsZV0nKS5mb3JFYWNoKGVsZW0gPT4gbmV3IFN5bGl1c1RvZ2dsZShlbGVtKSk7XG5cbiAgLy8gUHJvZHVjdCBpbWFnZXMgZm9yIHZhcmlhbnRzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YXJpYW50LW9wdGlvbnNdLCBbZGF0YS12YXJpYW50LWNvZGVdJykpIHsgbmV3IFN5bGl1c1ZhcmlhbnRJbWFnZXMoKTsgfVxuXG4gIC8vIExvYWRhYmxlIGZvcm1zXG4gIFN5bGl1c0xvYWRhYmxlRm9ybXMoKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9ub2JsZXNzLXRoZW1lL2ltYWdlcy9sb2dvLjZjMGE1YTU0LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=