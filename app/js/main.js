/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/graph-modal/src/graph-modal.js":
/*!*****************************************************!*\
  !*** ./node_modules/graph-modal/src/graph-modal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphModal)
/* harmony export */ });
class GraphModal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.graph-modal');
    this.speed = 300;
    this.animation = 'fade';
    this._reOpen = false;
    this._nextContainer = false;
    this.modalContainer = false;
    this.isOpen = false;
    this.previousActiveElement = false;
    this._focusElements = [
      'a[href]',
      'input',
      'select',
      'textarea',
      'button',
      'iframe',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])'
    ];
    this._fixBlocks = document.querySelectorAll('.fix-block');
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest(`[data-graph-path]`);
        if (clickedElement) {
          let target = clickedElement.dataset.graphPath;
          let animation = clickedElement.dataset.graphAnimation;
          let speed = clickedElement.dataset.graphSpeed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this._nextContainer = document.querySelector(`[data-graph-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.js-modal-close')) {
          this.close();
          return;
        }
      }.bind(this));

      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27 && this.isOpen) {
          this.close();
        }

        if (e.which == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      }.bind(this));

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('graph-modal') && e.target.classList.contains("is-open")) {
          this.close();
        }
      }.bind(this));
    }

  }

  open(selector) {
    this.previousActiveElement = document.activeElement;

    if (this.isOpen) {
      this.reOpen = true;
      this.close();
      return;
    }

    this.modalContainer = this._nextContainer;

    if (selector) {
      this.modalContainer = document.querySelector(`[data-graph-target="${selector}"]`);
    }
    
    this.modalContainer.scrollTo(0, 0)

    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');

    document.body.style.scrollBehavior = 'auto';
    document.documentElement.style.scrollBehavior = 'auto';

    this.disableScroll();

    this.modalContainer.classList.add('graph-modal-open');
    this.modalContainer.classList.add(this.animation);

    setTimeout(() => {
      this.options.isOpen(this);
      this.modalContainer.classList.add('animate-open');
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('graph-modal-open');

      this.enableScroll();

      document.body.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollBehavior = 'auto';

      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();

      if (this.reOpen) {
        this.reOpen = false;
        this.open();
      }
    }
  }

  focusCatch(e) {
    const nodes = this.modalContainer.querySelectorAll(this._focusElements);
    const nodesArray = Array.prototype.slice.call(nodes);
    const focusedItemIndex = nodesArray.indexOf(document.activeElement)
    if (e.shiftKey && focusedItemIndex === 0) {
      nodesArray[nodesArray.length - 1].focus();
      e.preventDefault();
    }
    if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
      nodesArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const nodes = this.modalContainer.querySelectorAll(this._focusElements);
    if (this.isOpen) {
      if (nodes.length) nodes[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scrollTo({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this._fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this._fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}


/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
console.log('components');

/***/ }),

/***/ "./src/js/scripts/modal.js":
/*!*********************************!*\
  !*** ./src/js/scripts/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graph_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-modal */ "./node_modules/graph-modal/src/graph-modal.js");
// Реализация модального окна

const modal = new graph_modal__WEBPACK_IMPORTED_MODULE_0__["default"]();
document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".js-block-catalog-btn");
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const item = trigger.closest(".js-block-catalog-item");
      const name = item.querySelector(".block-catalog__item-name").textContent.trim();
      const imageSrc = item.querySelector(".block-catalog__item-image img").getAttribute("src");
      const hiddenBlock = item.querySelector(".js-block-catalog-text-hide");
      const hiddenText = hiddenBlock ? hiddenBlock.innerHTML : "";
      document.querySelector(".js-modal-name").textContent = name;
      document.querySelector(".js-modal-image img").setAttribute("src", imageSrc);
      document.querySelector(".js-modal-content").innerHTML = hiddenText;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const videoTriggers = document.querySelectorAll(".block-video__image");
  const modalIframe = document.querySelector('[data-graph-target="modal-video"] iframe');
  videoTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const videoSrc = trigger.getAttribute("data-video-src");
      modalIframe.setAttribute("src", videoSrc);
    });
  });
  const modalClose = document.querySelector('[data-graph-target="modal-video"] .js-modal-close');
  modalClose.addEventListener("click", () => {
    modalIframe.setAttribute("src", "");
  });
});

/***/ }),

/***/ "./src/js/scripts/sliders.js":
/*!***********************************!*\
  !*** ./src/js/scripts/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const blockVideoSlider = new Swiper('.block-video__slider', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: '.block-video__swiper-pagination'
  },
  navigation: {
    nextEl: '.block-video__swiper-button-next',
    prevEl: '.block-video__swiper-button-prev'
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});
let heroProductionSlider = null;
let chooseUsSlider = null;
let whyUsSlider = null;
let blockCatalogSlider = null;
let chooseUsSliders = [];
let whyUsSliders = [];
function initSliders() {
  if (window.innerWidth < 769 && heroProductionSlider === null) {
    heroProductionSlider = new Swiper('.hero-production__slider', {
      pagination: {
        el: '.hero-production__swiper-pagination'
      },
      slidesPerView: 1,
      spaceBetween: 20
    });
  } else if (window.innerWidth >= 769 && heroProductionSlider !== null) {
    heroProductionSlider.destroy(true, true);
    heroProductionSlider = null;
  }
  if (window.innerWidth < 769 && chooseUsSlider === null) {
    chooseUsSlider = new Swiper('.choose-us__slider', {
      pagination: {
        el: '.choose-us__swiper-pagination'
      },
      slidesPerView: 1,
      spaceBetween: 20
    });
  } else if (window.innerWidth >= 769 && chooseUsSlider !== null) {
    chooseUsSlider.destroy(true, true);
    chooseUsSlider = null;
  }
  if (window.innerWidth < 769 && whyUsSlider === null) {
    whyUsSlider = new Swiper('.why-us__slider', {
      pagination: {
        el: '.why-us__swiper-pagination'
      },
      slidesPerView: 1,
      spaceBetween: 20
    });
  } else if (window.innerWidth >= 769 && whyUsSlider !== null) {
    whyUsSlider.destroy(true, true);
    whyUsSlider = null;
  }
  if (window.innerWidth < 769 && blockCatalogSlider === null) {
    blockCatalogSlider = new Swiper('.block-catalog__slider', {
      pagination: {
        el: '.block-catalog__swiper-pagination'
      },
      slidesPerView: 1,
      spaceBetween: 20
    });
  } else if (window.innerWidth >= 769 && blockCatalogSlider !== null) {
    blockCatalogSlider.destroy(true, true);
    blockCatalogSlider = null;
  }
}
initSliders();
window.addEventListener('resize', initSliders);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var _scripts_sliders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/sliders.js */ "./src/js/scripts/sliders.js");
/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/modal.js */ "./src/js/scripts/modal.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map