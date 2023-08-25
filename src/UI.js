import { addProject, addTask } from "./index";
import Project from "./project";
import Task from "./task";


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





function taskFormInit(projList) {
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
        e.preventDefault();
        addTask(taskNameInput.value)
        // tasklist.innerHTML +=   `
        // <li class="task">
        //     <div class="task-left">
        //         <input type="checkbox" id="task-1">
        //         <label for="task-1">${taskNameInput.value}</label>
        //     </div>
        //     <div class="task-right">
        //         <p>date</p>
        //         <svg class="nav-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        //     </div>
        // </li>`;
        //console.log(Storage.getProjList());
        taskNameInput.value = "";
        addTaskBtn.classList.remove('hidden');
        taskForm.classList.add('hidden');
        
        const projName = document.querySelector('proj-name')
        loadProject(projName, projList);
        e.preventDefault();
        
        
    });
}



function projFormInit(projList) {
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
        loadProjectList(projList);
        projNameInput.value = "";
        addProjBtn.classList.remove('hidden');
        projForm.classList.add('hidden');
    });
}



function loadProjectList(projList) {
    const defaultProjList = document.querySelector('.default-project-list');
    const customProjList = document.querySelector('.custom-project-list');

    //clears the display
    defaultProjList.innerHTML = ``;
    customProjList.innerHTML = ``;

    projList.forEach(proj => {
        const projName = proj.getName();

        const newProjLi = document.createElement('li');
        newProjLi.textContent = projName;
        newProjLi.classList.add('project');

        if (projName == "Inbox" || projName == "Today" || projName == "This Week") {

            newProjLi.addEventListener('click', () => {
                loadProject(projName, projList);
            });

            defaultProjList.appendChild(newProjLi);
        }
        else {
            newProjLi.addEventListener('click', () => {
                loadProject(projName, projList);
            });

            customProjList.appendChild(newProjLi);

        }
    })
}

function loadProject(projName, projList) {
    //console.log(projName);

    let currProj = projList.find( item => { return item.getName() == projName; });

    const projTitle = document.querySelector('.proj-name');
    projTitle.textContent = projName;

    const tasklist = document.querySelector('.task-list');

    console.log(currProj.taskList);

    currProj.taskList.forEach(task => {
        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('task');
        const taskleft = document.createElement('div')
        taskleft.classList.add('task-left');
        const taskright = document.createElement('div')
        taskright.classList.add('task-right');

        taskleft.classList.add('task-left');
        newTaskLi.textContent = task.getName();

        // newTaskLi.addEventListener(() => {
        //     //delete task, etc
        // });

        tasklist.appendChild(newTaskLi);
    });

}






export {initButtons, projFormInit, taskFormInit, loadProjectList, loadProject}