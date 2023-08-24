const navMenu = document.querySelector('nav');
const hamburgerLeft = document.querySelector('.hamburger-left');
const hamburgerRight = document.querySelector('.hamburger-right');
const navClose = document.querySelector('.nav-close');
const taskList = document.querySelector('main');
const addTaskBtn = document.querySelector('.add-task-btn');
const taskForm = document.querySelector('.task-form');
const cancelTaskBtn = document.querySelector('.task-cancel-btn');
const addTaskContainer = document.querySelector('.add-task-container');
const addProjBtn = document.querySelector('.add-proj-btn');
const projForm = document.querySelector('.proj-form');
const cancelProjBtn = document.querySelector('.proj-cancel-btn');
const addProjContainer = document.querySelector('.add-proj-container');

hamburgerLeft.addEventListener('click', () => {
    navMenu.classList.remove('collapse');
    hamburgerLeft.classList.add('hidden');
    hamburgerRight.classList.add('hidden');
    taskList.classList.remove('center');
});

hamburgerRight.addEventListener('click', () => {
    navMenu.classList.remove('collapse');
    hamburgerLeft.classList.add('hidden');
    hamburgerRight.classList.add('hidden');
    taskList.classList.remove('center');
    addTaskContainer.classList.add('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('collapse');
    hamburgerLeft.classList.remove('hidden');
    hamburgerRight.classList.remove('hidden');
    taskList.classList.add('center');
    addTaskContainer.classList.remove('hidden');
});

addTaskBtn.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
    addTaskBtn.classList.toggle('hidden');
});

cancelTaskBtn.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
    addTaskBtn.classList.toggle('hidden');
});

addProjBtn.addEventListener('click', () => {
    projForm.classList.toggle('hidden');
    addProjBtn.classList.toggle('hidden');
});

cancelProjBtn.addEventListener('click', () => {
    projForm.classList.toggle('hidden');
    addProjBtn.classList.toggle('hidden');
});