/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initButtons: () => (/* binding */ initButtons),\n/* harmony export */   loadProject: () => (/* binding */ loadProject),\n/* harmony export */   loadProjectList: () => (/* binding */ loadProjectList),\n/* harmony export */   projFormInit: () => (/* binding */ projFormInit),\n/* harmony export */   taskFormInit: () => (/* binding */ taskFormInit)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\nfunction initButtons() {\n    const navMenu = document.querySelector('nav');\n    const hamburgerLeft = document.querySelector('.hamburger-left');\n    const hamburgerRight = document.querySelector('.hamburger-right');\n    const navClose = document.querySelector('.nav-close');\n    const main = document.querySelector('main');\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const taskForm = document.querySelector('.task-form');\n   \n    const addTaskContainer = document.querySelector('.add-task-container');\n    const addProjBtn = document.querySelector('.add-proj-btn');\n    const projForm = document.querySelector('.proj-form');\n    \n\n    hamburgerLeft.addEventListener('click', () => {\n        navMenu.classList.remove('collapse');\n        hamburgerLeft.classList.add('hidden');\n        hamburgerRight.classList.add('hidden');\n        main.classList.remove('center');\n    });\n    \n    hamburgerRight.addEventListener('click', () => {\n        navMenu.classList.remove('collapse');\n        hamburgerLeft.classList.add('hidden');\n        hamburgerRight.classList.add('hidden');\n        main.classList.remove('center');\n        addTaskContainer.classList.add('hidden');\n    });\n    \n    navClose.addEventListener('click', () => {\n        navMenu.classList.add('collapse');\n        hamburgerLeft.classList.remove('hidden');\n        hamburgerRight.classList.remove('hidden');\n        main.classList.add('center');\n        addTaskContainer.classList.remove('hidden');\n    });\n    \n    addTaskBtn.addEventListener('click', () => {\n        taskForm.classList.toggle('hidden');\n        addTaskBtn.classList.toggle('hidden');\n    });\n    \n    \n    addProjBtn.addEventListener('click', () => {\n        projForm.classList.toggle('hidden');\n        addProjBtn.classList.toggle('hidden');\n    });\n    \n\n}\n\n\n\n\n\nfunction taskFormInit(projList) {\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const cancelTaskBtn = document.querySelector('.task-cancel-btn');\n    const tasklist = document.querySelector('.task-list');\n    const taskForm = document.querySelector('.task-form');\n    const taskNameInput = document.getElementById('taskNameInput');\n\n    cancelTaskBtn.addEventListener('click', () => {\n        taskForm.classList.add('hidden');\n        addTaskBtn.classList.remove('hidden');\n    });\n\n    taskForm.addEventListener('submit', e => {\n        e.preventDefault();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskNameInput.value)\n        // tasklist.innerHTML +=   `\n        // <li class=\"task\">\n        //     <div class=\"task-left\">\n        //         <input type=\"checkbox\" id=\"task-1\">\n        //         <label for=\"task-1\">${taskNameInput.value}</label>\n        //     </div>\n        //     <div class=\"task-right\">\n        //         <p>date</p>\n        //         <svg class=\"nav-close\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"Menu / Close_MD\"> <path id=\"Vector\" d=\"M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> </g></svg>\n        //     </div>\n        // </li>`;\n        //console.log(Storage.getProjList());\n        taskNameInput.value = \"\";\n        addTaskBtn.classList.remove('hidden');\n        taskForm.classList.add('hidden');\n        \n        const projName = document.querySelector('proj-name')\n        loadProject(projName, projList);\n        e.preventDefault();\n        \n        \n    });\n}\n\n\n\nfunction projFormInit(projList) {\n    const projForm = document.querySelector('.proj-form');\n    const projNameInput = document.getElementById('projectNameInput');\n    const cancelProjBtn = document.querySelector('.proj-cancel-btn');\n    const addProjBtn = document.querySelector('.add-proj-btn');\n\n    cancelProjBtn.addEventListener('click', () => {\n        projForm.classList.add('hidden');\n        addProjBtn.classList.remove('hidden');\n    });\n\n    projForm.addEventListener('submit', e => {\n        e.preventDefault();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addProject)(projNameInput.value);\n        loadProjectList(projList);\n        projNameInput.value = \"\";\n        addProjBtn.classList.remove('hidden');\n        projForm.classList.add('hidden');\n    });\n}\n\n\n\nfunction loadProjectList(projList) {\n    const defaultProjList = document.querySelector('.default-project-list');\n    const customProjList = document.querySelector('.custom-project-list');\n\n    //clears the display\n    defaultProjList.innerHTML = ``;\n    customProjList.innerHTML = ``;\n\n    projList.forEach(proj => {\n        const projName = proj.getName();\n\n        const newProjLi = document.createElement('li');\n        newProjLi.textContent = projName;\n        newProjLi.classList.add('project');\n\n        if (projName == \"Inbox\" || projName == \"Today\" || projName == \"This Week\") {\n\n            newProjLi.addEventListener('click', () => {\n                loadProject(projName, projList);\n            });\n\n            defaultProjList.appendChild(newProjLi);\n        }\n        else {\n            newProjLi.addEventListener('click', () => {\n                loadProject(projName, projList);\n            });\n\n            customProjList.appendChild(newProjLi);\n\n        }\n    })\n}\n\nfunction loadProject(projName, projList) {\n    //console.log(projName);\n\n    let currProj = projList.find( item => { return item.getName() == projName; });\n\n    const projTitle = document.querySelector('.proj-name');\n    projTitle.textContent = projName;\n\n    const tasklist = document.querySelector('.task-list');\n\n    console.log(currProj.taskList);\n\n    currProj.taskList.forEach(task => {\n        const newTaskLi = document.createElement('li');\n        newTaskLi.classList.add('task');\n        const taskleft = document.createElement('div')\n        taskleft.classList.add('task-left');\n        const taskright = document.createElement('div')\n        taskright.classList.add('task-right');\n\n        taskleft.classList.add('task-left');\n        newTaskLi.textContent = task.getName();\n\n        // newTaskLi.addEventListener(() => {\n        //     //delete task, etc\n        // });\n\n        tasklist.appendChild(newTaskLi);\n    });\n\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n//import Storage from \"./storage\";\n\n\n\n\n\n\n\n\n\n\n\n\nlet listOfProjObj = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getProjectList)();\n\n\ninitWebsite();\n    \n\nfunction initWebsite() {\n\n\n    if (window.localStorage.length == 0) {\n        addProject(\"Inbox\");\n        addProject(\"Today\");\n        addProject(\"This Week\");\n    }\n\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.initButtons)();\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.taskFormInit)();\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.projFormInit)(listOfProjObj);\n\n\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.loadProjectList)(listOfProjObj);\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.loadProject)('Inbox', listOfProjObj);\n}\n\n\nfunction addProject(projName) {\n    let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projName);\n\n    listOfProjObj.push(newProj);\n\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProject)(newProj);\n}\n\nfunction addTask(taskName) {\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName);\n    const currProjName = document.querySelector('.proj-name').textContent;\n    console.log(currProjName);\n    const currProjObj = listOfProjObj.find( item => { return item.getName() == currProjName; });\n    \n    //console.log(currProjObj);\n    currProjObj.taskList.push(newTask);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProject)(currProjObj);\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.loadProject)(currProjName, listOfProjObj);\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.taskList = [];\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    addTaskToProj(task) {\n        this.taskList.push(task);\n    }\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjectList: () => (/* binding */ getProjectList),\n/* harmony export */   saveProject: () => (/* binding */ saveProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n// export default class Storage {\n\n//     static projList = [];\n    \n\n//     static saveProjList() {\n//         localStorage.setItem('projList', JSON.stringify(this.projList));\n//     }\n\n//     static getProjList() {\n//         console.log(this.projList);\n//         this.projList = JSON.parse(localStorage.getItem('projList'));\n//         return this.projList;\n//     }\n\n//     static addProject(projName) {\n//         Storage.projList.push(new Project(projName));\n//         Storage.saveProjList();\n//     }\n\n//     static getProject(projName) {\n//         return this.projList.find((proj) => proj.getName() === projName);\n//     }\n\n//     static removeProject(projName) {\n//         Storage.projList = this.projList.filter((proj) => {proj.getName() != projName});\n//         Storage.saveProjList();\n//     }\n\n//     static addTask(taskName) {\n//         let currProj = Storage.getProject(document.querySelector('.proj-name').textContent);\n//         let newTask = new Task(taskName);\n//         currProj.addTaskToProj(newTask);\n//         Storage.saveProjList();//FOR SOME REASON WHEN I REFRESH TASKS DISAPPEAR\n//     }\n\n//     // removeTask() {\n\n//     // }\n\n// }\n\n\nfunction saveProject(projObj) {\n    localStorage.setItem(projObj.getName(), JSON.stringify(projObj));\n}\n\n\nfunction getProjectList() {\n    let projList = [];\n    let keys = Object.keys(localStorage);\n\n    keys.forEach(key => {\n        let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.parse(localStorage.getItem(key))['name']);\n        newProj.getTaskList = JSON.parse(localStorage.getItem(key))['taskList'];\n        projList.push(newProj);\n    })\n\n    return projList;\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name){\n        this.name = name;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    // setStatus(){\n\n    // }\n\n    // getStatus(){\n\n    // }\n\n\n    // setDueDate(dueDate) {\n    //     this.dueDate = dueDate;\n    // }\n\n    // getDueDate() {\n    //     return this.dueDate;\n    // }\n\n    // setPriority(priority) {\n    //     this.priority = priority;\n    // }\n\n    // getPriority() {\n    //     return this.priority;\n    // }\n \n}\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;