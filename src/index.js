const navMenu = document.querySelector('nav');
const hamburgerLeft = document.querySelector('.hamburger-left');
const hamburgerRight = document.querySelector('.hamburger-right');
const navClose = document.querySelector('.nav-close');
const taskList = document.querySelector('main');
const addTaskBtn = document.querySelector('.add-task-btn');
const taskForm = document.querySelector('.task-form')

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
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('collapse');
    hamburgerLeft.classList.remove('hidden');
    hamburgerRight.classList.remove('hidden');
    taskList.classList.add('center');
});

addTaskBtn.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
});