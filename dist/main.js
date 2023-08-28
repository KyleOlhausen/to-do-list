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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initButtons: () => (/* binding */ initButtons),\n/* harmony export */   loadProject: () => (/* binding */ loadProject),\n/* harmony export */   loadProjectList: () => (/* binding */ loadProjectList),\n/* harmony export */   projFormInit: () => (/* binding */ projFormInit),\n/* harmony export */   taskFormInit: () => (/* binding */ taskFormInit)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nfunction initButtons() {\n    const inbox = document.querySelector('.inbox');\n    inbox.addEventListener('click', () => {\n        loadProject('Inbox');\n    })\n\n    const today = document.querySelector('.today');\n    today.addEventListener('click', () => {\n        loadProject('Today');\n    })\n\n    const thisWeek = document.querySelector('.this-week');\n    thisWeek.addEventListener('click', () => {\n        loadProject('This Week');\n    })\n\n    const navMenu = document.querySelector('nav');\n    const hamburgerLeft = document.querySelector('.hamburger-left');\n    const hamburgerRight = document.querySelector('.hamburger-right');\n    const navClose = document.querySelector('.nav-close');\n    const main = document.querySelector('main');\n    const addTaskContainer = document.querySelector('.add-task-container');\n    hamburgerLeft.addEventListener('click', () => {\n        navMenu.classList.remove('collapse');\n        hamburgerLeft.classList.add('hidden');\n        hamburgerRight.classList.add('hidden');\n        main.classList.remove('center');\n    });\n    \n    hamburgerRight.addEventListener('click', () => {\n        navMenu.classList.remove('collapse');\n        hamburgerLeft.classList.add('hidden');\n        hamburgerRight.classList.add('hidden');\n        main.classList.remove('center');\n        addTaskContainer.classList.add('hidden');\n    });\n    \n    navClose.addEventListener('click', () => {\n        navMenu.classList.add('collapse');\n        hamburgerLeft.classList.remove('hidden');\n        hamburgerRight.classList.remove('hidden');\n        main.classList.add('center');\n        addTaskContainer.classList.remove('hidden');\n    });\n    \n\n    const addProjBtn = document.querySelector('.add-proj-btn');\n    const projForm = document.querySelector('.proj-form');\n    addProjBtn.addEventListener('click', () => {\n        projForm.classList.toggle('hidden');\n        addProjBtn.classList.toggle('hidden');\n    });\n}\n\n\n\nfunction taskFormInit() {\n\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const addTaskPopup = document.querySelector('.add-task-popup');\n    const closeTaskPopup = document.querySelector('.close-task-popup');\n    addTaskBtn.addEventListener('click', () => {\n        addTaskPopup.showModal();\n    });\n    closeTaskPopup.addEventListener('click', () => {\n        addTaskPopup.close();\n    });\n    \n\n    const taskForm = document.querySelector('.task-form');\n\n    const taskNameInput = document.getElementById('taskNameInput');\n    const taskDescInput = document.getElementById('taskDescInput');\n    const taskDateInput = document.getElementById('taskDateInput');\n    \n\n    taskForm.addEventListener('submit', e => {\n        e.preventDefault();\n        const taskPriorityInput = document.querySelector('input[name=\"priority\"]:checked');\n        addTaskPopup.close();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskNameInput.value, taskDescInput.value, taskDateInput.valueAsDate, taskPriorityInput.value, false);\n\n        taskNameInput.value = \"\";\n        \n        let projName = document.querySelector('.proj-name').textContent;\n        loadProject(projName);\n        \n    });\n}\n\n\n\nfunction projFormInit() {\n    const projForm = document.querySelector('.proj-form');\n    const projNameInput = document.getElementById('projectNameInput');\n    const cancelProjBtn = document.querySelector('.proj-cancel-btn');\n    const addProjBtn = document.querySelector('.add-proj-btn');\n\n    cancelProjBtn.addEventListener('click', () => {\n        projForm.classList.add('hidden');\n        addProjBtn.classList.remove('hidden');\n    });\n\n    projForm.addEventListener('submit', e => {\n        e.preventDefault();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.addProject)(projNameInput.value);\n        loadProjectList();\n        projNameInput.value = \"\";\n        addProjBtn.classList.remove('hidden');\n        projForm.classList.add('hidden');\n    });\n}\n\n\nfunction loadProjectList() {\n    const customProjList = document.querySelector('.custom-project-list');\n    customProjList.innerHTML = ``;\n\n    let projList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();\n    projList.forEach(proj => {\n        const projName = proj.getName();\n        if (projName !== 'Inbox' && projName !== 'Today' && projName !== 'This Week') {\n            const newProjLi = document.createElement('li');\n            newProjLi.textContent = projName;\n            newProjLi.classList.add('project');\n            newProjLi.innerHTML += `<svg class=\"project-delete\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"Menu / Close_MD\"> <path id=\"Vector\" d=\"M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> </g></svg>`\n            customProjList.appendChild(newProjLi);\n    \n            newProjLi.addEventListener('click', (e) => {\n                if (e.target.classList[0] == 'project') {\n                    loadProject(projName);\n                }\n                else if (e.target.classList[0] == 'project-delete') {\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(e.target.parentElement.textContent.trim());\n                }\n\n                loadProjectList();\n            });\n        }\n    });\n}\n\n\nfunction loadProject(projName) {\n    //get list of project objects from local storage and find current project\n    let projList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();\n    let currProj = projList.find( item => { return item.getName() == projName; });\n    \n    //change header to project title\n    const projTitle = document.querySelector('.proj-name');\n    projTitle.textContent = projName;\n\n    //clear tasklist\n    const tasklist = document.querySelector('.task-list');\n    tasklist.innerHTML = ``;\n\n    //loop current project tasklist and create each task\n    let i = 0;\n    currProj.taskList.forEach(task => {\n        //create li task container\n        const newTaskLi = document.createElement('li');\n        newTaskLi.classList.add('task');\n\n        //create checkbox and task title (taskleft)\n        const taskleft = document.createElement('div')\n        taskleft.classList.add('task-left');\n\n        const checkbox = document.createElement('input');\n        checkbox.setAttribute('type', 'checkbox');\n        checkbox.setAttribute('id', `task-${i}`)\n        checkbox.checked = task.getChecked();\n\n        const checkboxLabel = document.createElement('label');\n        checkboxLabel.classList.add('task-name');\n        checkboxLabel.setAttribute('for', `task-${i}`);\n        checkboxLabel.textContent = `${task.getName()}`;\n\n        taskleft.appendChild(checkbox);\n        taskleft.appendChild(checkboxLabel);\n\n        //when checkbox clicked toggle checked status and save\n        checkbox.addEventListener('click', () => { //add to event listener at bottom?\n            task.setChecked(checkbox.checked);\n            (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveProject)(currProj);\n        });\n        \n        \n\n        //create description button, date, edit button, delete button (taskright)\n        const taskright = document.createElement('div');\n        taskright.classList.add('task-right');\n        //taskright.innerHTML += `<input type=\"date\" class=\"input-due-date-${i}\">`;\n\n        const taskEdit = document.createElement('div');\n        taskEdit.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z\" /></svg>`\n        taskEdit.classList.add('task-edit');\n        // const taskDelete = document.createElement('div');\n        // taskDelete.innerHTML = `<svg class=\"task-close\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g id=\"Menu / Close_MD\"> <path id=\"Vector\" d=\"M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> </g></svg>`\n        const taskDelete = document.createElement('button');\n        taskDelete.textContent = \"X\";\n        taskDelete.classList.add('task-close');\n\n        const taskDetails = document.createElement('button');\n        taskDetails.textContent = \"Details\"\n        taskDetails.classList.add('task-details');\n\n        const taskDate = document.createElement('div');\n        taskDate.classList.add('task-date');\n        taskDate.textContent = task.getDueDate();\n\n\n\n        taskright.appendChild(taskDetails);\n        // taskright.appendChild(taskEdit);\n        taskright.appendChild(taskDelete);\n        newTaskLi.appendChild(taskleft);\n        newTaskLi.appendChild(taskright);\n\n        newTaskLi.addEventListener('click', e => {\n            const target = e.target;\n            if(target.classList[0] === 'task-close'){\n                //taskname probably off by 1 parentelement\n                let taskname = target.parentElement.previousElementSibling.textContent;\n\n                (0,_index__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskname, currProj);\n                (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveProject)(currProj);\n                loadProject(currProj.getName());\n            }\n            else if (target.classList[0] === 'task-details') {\n                //open details popup\n                const taskDetailsPopup = document.querySelector('.task-details-popup');\n                taskDetailsPopup.showModal();\n\n                //fill out detail popup\n                const detailsTitle = document.querySelector('.task-popup-title');\n                detailsTitle.textContent = task.getName();\n                const detailsDescription = document.querySelector('.task-popup-description');\n                detailsDescription.textContent = task.getDescription();\n                const detailsDate = document.querySelector('.task-popup-date');\n                detailsDate.textContent = task.getDueDate();\n                const detailsPriority = document.querySelector('.task-popup-priority');\n                detailsPriority.textContent = task.getPriority();\n\n                //close details popup when button clicked\n                const closeDetailsPopup = document.querySelector('.close-details-popup');\n                closeDetailsPopup.addEventListener('click', () => {\n                    taskDetailsPopup.close();\n                });\n                \n            }\n            // else if (target.classList[0] === 'task-edit') {\n\n            // }\n        });\n\n        tasklist.appendChild(newTaskLi);\n\n        // const dateI = document.querySelector(`.input-due-date-${i}`);\n        // console.log(dateI);\n        // dateI.addEventListener('submit', () => {\n        //     console.log('submit');\n        // });\n\n        i++;\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n//import Storage from \"./storage\";\n\n\n\n\n\n\n\n\ninitWebsite();\n    \n\nfunction initWebsite() {\n\n    if (window.localStorage.length == 0) {\n        addProject(\"Inbox\");\n        addProject(\"Today\");\n        addProject(\"This Week\");\n    }\n\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.initButtons)();\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.taskFormInit)();\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.projFormInit)();\n\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.loadProjectList)();\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.loadProject)('Inbox');\n}\n\n\nfunction deleteTask(taskname, currProj){\n    for(let i=0; i < currProj.taskList.length; i++) {\n        if (currProj.taskList[i].getName() == taskname){\n            currProj.taskList.splice(i,1);\n        }\n    }\n}\n\n\nfunction addProject(projName) {\n    let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projName);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProject)(newProj);\n}\n\n\nfunction addTask(taskName, taskDesc, taskDate, taskPriority, checked) {\n    console.log('add task');\n\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName, taskDesc, taskDate, taskPriority, checked);\n    const currProjName = document.querySelector('.proj-name').textContent;\n\n    let projList = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getProjectList)();\n    const currProjObj = projList.find( item => { return item.getName() == currProjName; });\n\n    \n    currProjObj.taskList.push(newTask);\n\n    //valueAsDate\n\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProject)(currProjObj);\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.loadProject)(currProjName);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.taskList = [];\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   getProjectList: () => (/* binding */ getProjectList),\n/* harmony export */   saveProject: () => (/* binding */ saveProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\nfunction deleteProject(projName) {\n    localStorage.removeItem(projName);\n}\n\nfunction saveProject(projObj) {\n    localStorage.setItem(projObj.getName(), JSON.stringify(projObj));\n}\n\nfunction getProjectList() {\n    let projList = [];\n    let keys = Object.keys(localStorage);\n\n    keys.forEach(key => {\n        projList.push(makeObjectFromStorage(key));\n    });\n\n    return projList;\n}\n\nfunction makeObjectFromStorage(key) {\n    let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.parse(localStorage.getItem(key))['name']);\n    let tempTaskList = [];\n\n    tempTaskList = JSON.parse(localStorage.getItem(key))['taskList'];\n    tempTaskList.forEach( item => {\n        newProj.taskList.push(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item['name'], item['description'], item['dueDate'], item['priority'], item['checked']));\n    });\n\n    return newProj;\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, description, dueDate, priority, checked){\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.checked = checked;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setDescription(description) {\n        this.description = description;\n    }\n\n    getDescription() {\n        return this.description;\n    }\n\n    setDueDate(dueDate) {\n        this.dueDate = dueDate;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n\n    setPriority(priority) {\n        this.priority = priority;\n    }\n\n    getPriority() {\n        return this.priority;\n    }\n\n\n    setChecked(checked) {\n        this.checked = checked;\n    }\n\n    getChecked() {\n        return this.checked;\n    }\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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