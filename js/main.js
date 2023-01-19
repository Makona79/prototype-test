/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ex.js */ "./src/js/components/ex.js");
/* harmony import */ var _components_ex_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_ex_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ (() => {

const card = document?.querySelectorAll(".card__body");
const link = document?.querySelectorAll(".card__link");
// Выделение выбранной карточки при нажатии на карточку
card.forEach(el => {
  el.addEventListener("click", () => {
    if (el?.classList.contains("disabled")) {
      console.log("disabled");
    } else {
      const cardEl = el.closest(".card");
      const cardElBody = cardEl.querySelector(".card__body");
      const cardElLabel = cardEl.querySelector(".card__label");
      const cardElSubText = cardEl.querySelectorAll(".card__subcard-text");
      cardEl.classList.toggle("selected");
      cardElBody.classList.toggle("selected");
      cardElLabel.classList.toggle("selected");
      cardElSubText.forEach(el => {
        el.classList.toggle("selected");
      });
    }
  });
});
// Выделение выбранной карточки при нажатии на ссылку
link.forEach(el => {
  el.addEventListener("click", () => {
    const cardEl = el.closest(".card");
    const cardElBody = cardEl.querySelector(".card__body");
    const cardElLabel = cardEl.querySelector(".card__label");
    const cardElSubText = cardEl.querySelectorAll(".card__subcard-text");
    cardEl.classList.toggle("selected");
    cardElBody.classList.toggle("selected");
    cardElLabel.classList.toggle("selected");
    cardElSubText.forEach(el => {
      el.classList.toggle("selected");
    });
  });
});
// Эффект hover после увода курсора с выбранной карточки
card.forEach(el => {
  el.addEventListener("mouseout", () => {
    if (el?.classList.contains("selected")) {
      setTimeout(() => {
        const cardEl = el.closest(".card");
        const cardElText = cardEl.querySelectorAll(".card__text");
        cardElText.forEach(el => {
          el.classList.add("sel");
        });
      }, 300);
    } else {}
  });
});
card.forEach(el => {
  el.addEventListener("mouseover", () => {
    if (el?.classList.contains("selected")) {
      setTimeout(() => {
        const cardEl = el.closest(".card");
        const cardElText = cardEl.querySelectorAll(".card__text");
        cardElText.forEach(el => {
          el.classList.remove("sel");
        });
      }, 300);
    } else {}
  });
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");

})();

/******/ })()
;