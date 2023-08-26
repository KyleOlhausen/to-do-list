import { addProject, addTask } from "./index";
import { getProjectList } from "./storage";


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


    const inbox = document.querySelector('.inbox');
    const today = document.querySelector('.today');
    const thisWeek = document.querySelector('.this-week');


    inbox.addEventListener('click', () => {
        loadProject('Inbox');
    })

    today.addEventListener('click', () => {
        loadProject('Today');
    })

    thisWeek.addEventListener('click', () => {
        loadProject('This Week');
    })

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
}





function taskFormInit() {
    const addTaskBtn = document.querySelector('.add-task-btn');
    const cancelTaskBtn = document.querySelector('.task-cancel-btn');
    const taskForm = document.querySelector('.task-form');
    const taskNameInput = document.getElementById('taskNameInput');

    cancelTaskBtn.addEventListener('click', () => {
        taskForm.classList.add('hidden');
        addTaskBtn.classList.remove('hidden');
    });

    taskForm.addEventListener('submit', e => {
        e.preventDefault();
        addTask(taskNameInput.value)

        taskNameInput.value = "";
        addTaskBtn.classList.remove('hidden');
        taskForm.classList.add('hidden');
        
        let projName = document.querySelector('.proj-name').textContent;
        loadProject(projName);
        e.preventDefault();  
    });
}



function projFormInit() {
    const projForm = document.querySelector('.proj-form');
    const projNameInput = document.getElementById('projectNameInput');
    const cancelProjBtn = document.querySelector('.proj-cancel-btn');
    const addProjBtn = document.querySelector('.add-proj-btn');

    cancelProjBtn.addEventListener('click', () => {
        projForm.classList.add('hidden');
        addProjBtn.classList.remove('hidden');
    });

    projForm.addEventListener('submit', e => {
        e.preventDefault();
        addProject(projNameInput.value);
        loadProjectList();
        projNameInput.value = "";
        addProjBtn.classList.remove('hidden');
        projForm.classList.add('hidden');
    });
}


function loadProjectList() {
    const customProjList = document.querySelector('.custom-project-list');
    customProjList.innerHTML = ``;

    let projList = getProjectList();
    projList.forEach(proj => {
        const projName = proj.getName();
        if (projName !== 'Inbox' && projName !== 'Today' && projName !== 'This Week') {
            const newProjLi = document.createElement('li');
            newProjLi.textContent = projName;
            newProjLi.classList.add('project');
    
            newProjLi.addEventListener('click', () => {
                loadProject(projName);
            });
            //eventlistener for clicking X to deleteProject(get name of li(projname string))
            //after delete loadprojectlist()

    
            customProjList.appendChild(newProjLi);
        }
    })
}

function loadProject(projName) {
    let projList = getProjectList();

    let currProj = projList.find( item => { return item.getName() == projName; });
    
    const projTitle = document.querySelector('.proj-name');
    projTitle.textContent = projName;


    const tasklist = document.querySelector('.task-list');
    tasklist.innerHTML = ``;


    let i = 0;
    currProj.taskList.forEach(task => {
        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('task');

        const taskleft = document.createElement('div')
        taskleft.classList.add('task-left');

        taskleft.innerHTML = `<input type="checkbox" id="task-${i}"><label for="task-${i}">${task.getName()}</label>`;


        const taskright = document.createElement('div')
        taskright.classList.add('task-right');


        newTaskLi.appendChild(taskleft);
        newTaskLi.appendChild(taskright);

        // newTaskLi.addEventListener(() => {
        //     //delete task, etc
            //loadProject()
        // });

        tasklist.appendChild(newTaskLi);
        i++;
    });

}



export {initButtons, projFormInit, taskFormInit, loadProjectList, loadProject}