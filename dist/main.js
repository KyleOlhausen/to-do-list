/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const navMenu = document.querySelector('nav');\nconst hamburgerLeft = document.querySelector('.hamburger-left');\nconst hamburgerRight = document.querySelector('.hamburger-right');\nconst navClose = document.querySelector('.nav-close');\nconst taskList = document.querySelector('main');\n\nhamburgerLeft.addEventListener('click', () => {\n    navMenu.classList.remove('collapse');\n    hamburgerLeft.classList.add('hidden');\n    hamburgerRight.classList.add('hidden');\n    taskList.classList.remove('center');\n})\n\nhamburgerRight.addEventListener('click', () => {\n    navMenu.classList.remove('collapse');\n    hamburgerLeft.classList.add('hidden');\n    hamburgerRight.classList.add('hidden');\n    taskList.classList.remove('center');\n})\n\nnavClose.addEventListener('click', () => {\n    navMenu.classList.add('collapse');\n    hamburgerLeft.classList.remove('hidden');\n    hamburgerRight.classList.remove('hidden');\n    taskList.classList.add('center');\n})\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;