/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {


function myModule() {
    this.hello = function() {
        console.log('hello');
    };
    this.goodbye = function(){
        console.log('bye!');
    };
}
//потрібно щоб функція myModule перейшла з файлу main.js ---> index.js
// де будемо використовувати її багато раз і використовувати її методи

//-------CommonJS 
module.exports = myModule;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/

//імпортуємо функцію з файлу main.js

//називати можна будь як, require для імпорту , і шлях без .js розширення
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js");

const myModuleInstance = new myModule();//обєкт

//тепер можна використовувати методи з файлу main.js
myModuleInstance.hello();
myModuleInstance.goodbye();
//!!!!!!!!-- наш браузер не збирає модулі самостійно---!!! видасть помилку
//модульна система має бути зірана в 1 файл
// для зборки модулів зборщик ----- webpack

//gulp планувальник задач!!
// за допомогою нього виконуються різні таски при різних ситуаціях
//галп не збирає, лише підключає модулі і запускає задачі

//webpack - зборщик модулів!!! настроюєм і запускаємо щоб збирав проект

//за допомогою галп можна запустити вебпак


// головний файл має називатись index.js , строгов в папці src

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map