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

eval("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//UI\n\n\n\n\n\n\n\n\n\nfunction initButtons() {\n    const navMenu = document.querySelector('nav');\n    const hamburgerLeft = document.querySelector('.hamburger-left');\n    const hamburgerRight = document.querySelector('.hamburger-right');\n    const navClose = document.querySelector('.nav-close');\n    const main = document.querySelector('main');\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const taskForm = document.querySelector('.task-form');\n   \n    const addTaskContainer = document.querySelector('.add-task-container');\n    const addProjBtn = document.querySelector('.add-proj-btn');\n    const projForm = document.querySelector('.proj-form');\n    const cancelProjBtn = document.querySelector('.proj-cancel-btn');\n\n    hamburgerLeft.addEventListener('click', () => {\n        navMenu.classList.remove('collapse');\n        hamburgerLeft.classList.add('hidden');\n        hamburgerRight.classList.add('hidden');\n        main.classList.remove('center');\n    });\n    \n    hamburgerRight.addEventListener('click', () => {\n        navMenu.classList.remove('collapse');\n        hamburgerLeft.classList.add('hidden');\n        hamburgerRight.classList.add('hidden');\n        main.classList.remove('center');\n        addTaskContainer.classList.add('hidden');\n    });\n    \n    navClose.addEventListener('click', () => {\n        navMenu.classList.add('collapse');\n        hamburgerLeft.classList.remove('hidden');\n        hamburgerRight.classList.remove('hidden');\n        main.classList.add('center');\n        addTaskContainer.classList.remove('hidden');\n    });\n    \n    addTaskBtn.addEventListener('click', () => {\n        taskForm.classList.toggle('hidden');\n        addTaskBtn.classList.toggle('hidden');\n    });\n    \n\n    \n    addProjBtn.addEventListener('click', () => {\n        projForm.classList.toggle('hidden');\n        addProjBtn.classList.toggle('hidden');\n    });\n    \n    cancelProjBtn.addEventListener('click', () => {\n        projForm.classList.toggle('hidden');\n        addProjBtn.classList.toggle('hidden');\n    });\n}\n\n\n\nfunction taskFormInit() {\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const cancelTaskBtn = document.querySelector('.task-cancel-btn');\n    const tasklist = document.querySelector('.task-list');\n    const taskForm = document.querySelector('.task-form');\n    const taskNameInput = document.getElementById('taskNameInput');\n\n    cancelTaskBtn.addEventListener('click', () => {\n        taskForm.classList.add('hidden');\n        addTaskBtn.classList.remove('hidden');\n    });\n\n    taskForm.addEventListener('submit', e => {\n        tasklist.innerHTML +=   `\n        <li class=\"task\">\n            <div class=\"task-left\">\n                <input type=\"checkbox\" id=\"task-1\">\n                <label for=\"task-1\">${taskNameInput.value}</label>\n            </div>\n            <div class=\"task-right\">\n                <p>date</p>\n                <svg class=\"nav-close\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"Menu / Close_MD\"> <path id=\"Vector\" d=\"M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> </g></svg>\n            </div>\n        </li>`;\n        taskNameInput.value = \"\";\n        addTaskBtn.classList.remove('hidden')\n        taskForm.classList.add('hidden');\n        e.preventDefault();\n        \n    });\n}\n\nfunction initWebsite() {\n    initButtons()\n    taskFormInit()\n}\n\n\ninitWebsite();\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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