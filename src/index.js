
















//UI









function initButtons() {
    const navMenu = document.querySelector('nav');
    const hamburgerLeft = document.querySelector('.hamburger-left');
    const hamburgerRight = document.querySelector('.hamburger-right');
    const navClose = document.querySelector('.nav-close');
    const main = document.querySelector('main');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const taskForm = document.querySelector('.task-form');
   
    const addTaskContainer = document.querySelector('.add-task-container');
    const addProjBtn = document.querySelector('.add-proj-btn');
    const projForm = document.querySelector('.proj-form');
    const cancelProjBtn = document.querySelector('.proj-cancel-btn');

    hamburgerLeft.addEventListener('click', () => {
        navMenu.classList.remove('collapse');
        hamburgerLeft.classList.add('hidden');
        hamburgerRight.classList.add('hidden');
        main.classList.remove('center');
    });
    
    hamburgerRight.addEventListener('click', () => {
        navMenu.classList.remove('collapse');
        hamburgerLeft.classList.add('hidden');
        hamburgerRight.classList.add('hidden');
        main.classList.remove('center');
        addTaskContainer.classList.add('hidden');
    });
    
    navClose.addEventListener('click', () => {
        navMenu.classList.add('collapse');
        hamburgerLeft.classList.remove('hidden');
        hamburgerRight.classList.remove('hidden');
        main.classList.add('center');
        addTaskContainer.classList.remove('hidden');
    });
    
    addTaskBtn.addEventListener('click', () => {
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
}



function taskFormInit() {
    const addTaskBtn = document.querySelector('.add-task-btn');
    const cancelTaskBtn = document.querySelector('.task-cancel-btn');
    const tasklist = document.querySelector('.task-list');
    const taskForm = document.querySelector('.task-form');
    const taskNameInput = document.getElementById('taskNameInput');

    cancelTaskBtn.addEventListener('click', () => {
        taskForm.classList.add('hidden');
        addTaskBtn.classList.remove('hidden');
    });

    taskForm.addEventListener('submit', e => {
        tasklist.innerHTML +=   `
        <li class="task">
            <div class="task-left">
                <input type="checkbox" id="task-1">
                <label for="task-1">${taskNameInput.value}</label>
            </div>
            <div class="task-right">
                <p>date</p>
                <svg class="nav-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </div>
        </li>`;
        taskNameInput.value = "";
        addTaskBtn.classList.remove('hidden')
        taskForm.classList.add('hidden');
        e.preventDefault();
        
    });
}

function initWebsite() {
    initButtons()
    taskFormInit()
}


initWebsite();

