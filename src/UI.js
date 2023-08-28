import { addProject, addTask } from "./index";
import { deleteProject, getProjectList, saveProject } from "./storage";
import { deleteTask } from "./index";


function initButtons() {
    const inbox = document.querySelector('.inbox');
    inbox.addEventListener('click', () => {
        loadProject('Inbox');
    })

    const today = document.querySelector('.today');
    today.addEventListener('click', () => {
        loadProject('Today');
    })

    const thisWeek = document.querySelector('.this-week');
    thisWeek.addEventListener('click', () => {
        loadProject('This Week');
    })

    const navMenu = document.querySelector('nav');
    const hamburgerLeft = document.querySelector('.hamburger-left');
    const hamburgerRight = document.querySelector('.hamburger-right');
    const navClose = document.querySelector('.nav-close');
    const main = document.querySelector('main');
    const addTaskContainer = document.querySelector('.add-task-container');
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
    

    const addProjBtn = document.querySelector('.add-proj-btn');
    const projForm = document.querySelector('.proj-form');
    addProjBtn.addEventListener('click', () => {
        projForm.classList.toggle('hidden');
        addProjBtn.classList.toggle('hidden');
    });
}



function taskFormInit() {

    const addTaskBtn = document.querySelector('.add-task-btn');
    const addTaskPopup = document.querySelector('.add-task-popup');
    const closeTaskPopup = document.querySelector('.close-task-popup');
    addTaskBtn.addEventListener('click', () => {
        addTaskPopup.showModal();
    });
    closeTaskPopup.addEventListener('click', () => {
        addTaskPopup.close();
    });
    

    const taskForm = document.querySelector('.task-form');

    const taskNameInput = document.getElementById('taskNameInput');
    const taskDescInput = document.getElementById('taskDescInput');
    const taskDateInput = document.getElementById('taskDateInput');
    

    taskForm.addEventListener('submit', e => {
        e.preventDefault();
        const taskPriorityInput = document.querySelector('input[name="priority"]:checked');
        addTaskPopup.close();
        addTask(taskNameInput.value, taskDescInput.value, taskDateInput.valueAsDate, taskPriorityInput.value, false);

        taskNameInput.value = "";
        
        let projName = document.querySelector('.proj-name').textContent;
        loadProject(projName);
        
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
            newProjLi.innerHTML += `<svg class="project-delete" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`
            customProjList.appendChild(newProjLi);
    
            newProjLi.addEventListener('click', (e) => {
                if (e.target.classList[0] == 'project') {
                    loadProject(projName);
                }
                else if (e.target.classList[0] == 'project-delete') {
                    deleteProject(e.target.parentElement.textContent.trim());
                }

                loadProjectList();
            });
        }
    });
}


function loadProject(projName) {
    //get list of project objects from local storage and find current project
    let projList = getProjectList();
    let currProj = projList.find( item => { return item.getName() == projName; });
    
    //change header to project title
    const projTitle = document.querySelector('.proj-name');
    projTitle.textContent = projName;

    //clear tasklist
    const tasklist = document.querySelector('.task-list');
    tasklist.innerHTML = ``;

    //loop current project tasklist and create each task
    let i = 0;
    currProj.taskList.forEach(task => {
        //create li task container
        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('task');

        //create checkbox and task title (taskleft)
        const taskleft = document.createElement('div')
        taskleft.classList.add('task-left');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `task-${i}`)
        checkbox.checked = task.getChecked();

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('task-name');
        checkboxLabel.setAttribute('for', `task-${i}`);
        checkboxLabel.textContent = `${task.getName()}`;

        taskleft.appendChild(checkbox);
        taskleft.appendChild(checkboxLabel);

        //when checkbox clicked toggle checked status and save
        checkbox.addEventListener('click', () => {
            task.setChecked(checkbox.checked);
            saveProject(currProj);
        });
        
        


      

        const taskright = document.createElement('div');
        taskright.classList.add('task-right');
        //taskright.innerHTML += `<input type="date" class="input-due-date-${i}">`;

        const taskEdit = document.createElement('div');
        taskEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>`
        const taskDelete = document.createElement('div');
        taskDelete.innerHTML = `<svg class="task-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`

        taskright.appendChild(taskEdit);
        taskright.appendChild(taskDelete);
        newTaskLi.appendChild(taskleft);
        newTaskLi.appendChild(taskright);

        newTaskLi.addEventListener('click', e => {
            const target = e.target;
            if(target.classList[0] === 'task-close'){
                let taskname = target.parentElement.parentElement.previousElementSibling.textContent;

                deleteTask(taskname, currProj);
                saveProject(currProj);
                loadProject(currProj.getName());
            }
        });

        tasklist.appendChild(newTaskLi);

        // const dateI = document.querySelector(`.input-due-date-${i}`);
        // console.log(dateI);
        // dateI.addEventListener('submit', () => {
        //     console.log('submit');
        // });

        i++;
    });
}



export {initButtons, projFormInit, taskFormInit, loadProjectList, loadProject}