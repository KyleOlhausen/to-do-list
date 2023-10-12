import { addProject, addTask } from "./index";
import { deleteProject, getProjectList, getProject, saveProject } from "./storage";
import { deleteTask } from "./index";
import { format, isSameWeek, parseISO } from "date-fns";

//add eventListeners for default projects
function initDefaultProjBtns() {
    const inbox = document.querySelector('.inbox');
    inbox.addEventListener('click', () => {
        loadProject('Inbox');
    });

    const today = document.querySelector('.today');
    today.addEventListener('click', () => {
        loadProject('Today');
    });

    const thisWeek = document.querySelector('.this-week');
    thisWeek.addEventListener('click', () => {
        loadProject('This Week');
    });
}

//add eventListeners for hamburger buttons and close nav button
function initNavBtns() {
    const navMenu = document.querySelector('nav');
    const hamburgerLeft = document.querySelector('.hamburger-left');
    const hamburgerRight = document.querySelector('.hamburger-right');
    const main = document.querySelector('main');
    const taskListContainer = document.querySelector('.task-list-container');

    hamburgerLeft.addEventListener('click', () => {
        navMenu.classList.remove('collapse');
        hamburgerLeft.classList.add('hidden');
        hamburgerRight.classList.add('hidden');
        main.classList.remove('center');
    });
    //hamburgerRight used for mobile
    hamburgerRight.addEventListener('click', () => {
        navMenu.classList.remove('collapse');
        hamburgerLeft.classList.add('hidden');
        hamburgerRight.classList.add('hidden');
        main.classList.remove('center');
        taskListContainer.classList.add('hidden');
    });
    
    const navClose = document.querySelector('.nav-close');
    navClose.addEventListener('click', () => {
        navMenu.classList.add('collapse');
        hamburgerLeft.classList.remove('hidden');
        hamburgerRight.classList.remove('hidden');
        main.classList.add('center');
        taskListContainer.classList.remove('hidden');
    });
}

//add eventListeners for add new task form
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
        addTaskPopup.close();

        //create task and add to project
        const taskPriorityInput = document.querySelector('input[name="add-priority"]:checked');
        addTask(taskNameInput.value, taskDescInput.value, taskDateInput.value, taskPriorityInput.value, false);

        //clear add task form
        taskNameInput.value = "";
        taskDescInput.value = "";
        taskDateInput.value = "";
        
        //reload updated project
        let projName = document.querySelector('.proj-name').textContent;
        loadProject(projName);
    });
}

//add eventListeners for add new project form
function projFormInit() {
    const addProjBtn = document.querySelector('.add-proj-btn');
    const addProjPopup = document.querySelector('.add-project-popup');
    const closeProjPopup = document.querySelector('.close-project-popup');
    addProjBtn.addEventListener('click', () => {
        addProjPopup.showModal();
    });
    closeProjPopup.addEventListener('click', () => {
        addProjPopup.close();
    });

    const projForm = document.querySelector('.proj-form');
    const projNameInput = document.getElementById('projectNameInput');
    projForm.addEventListener('submit', e => {
        e.preventDefault();
        addProjPopup.close();
        addProject(projNameInput.value);
        loadProjectList();
        projNameInput.value = "";
    });
}


//load list of projects into nav
function loadProjectList() {
    //clear list of custom projects
    const customProjList = document.querySelector('.custom-project-list');
    customProjList.innerHTML = ``;

    getProjectList().forEach(proj => {
        const projName = proj.getName();
        //if project is not a default project create elements for project
        if (projName !== 'Inbox' && projName !== 'Today' && projName !== 'This Week') {
            const newProjLi = document.createElement('li');
            newProjLi.textContent = projName;
            newProjLi.classList.add('project');
            newProjLi.innerHTML += `<svg class="project-delete" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`
            customProjList.appendChild(newProjLi);
    
            newProjLi.addEventListener('click', (e) => {
                if (e.target.classList[0] == 'project') {
                    //if clicked on project load project
                    loadProject(projName);
                }
                else if (e.target.classList[0] == 'project-delete') {
                    //if clicked on delete button delete project
                    const targetName = e.target.parentElement.textContent.trim();
                    const currProj = document.querySelector('.proj-name').textContent;
                    deleteProject(targetName);
                    loadProjectList();

                    //if project that is currently loaded was deleted, load Inbox
                    if (targetName === currProj){
                        loadProject('Inbox');
                    }
                }
            });
        }
    });
}

function createTaskDom(task, currProj, i) {
    //create li task container
    const newTaskLi = document.createElement('li');
    newTaskLi.classList.add('task');

    //create left and right parts of task element
    const taskleft = createTaskLeftDom(task, i, currProj);
    const taskright = createTaskRightDom(task);
    newTaskLi.appendChild(taskleft);
    newTaskLi.appendChild(taskright);

    //check what part of the taskLi was clicked and execute
    newTaskLi.addEventListener('click', e => executeTaskClick(e.target, task, currProj));

    return newTaskLi;
}

//loop current project tasklist and create each task
function createAllTasksInProject(){
    //clear tasklist
    const tasklistDom = document.querySelector('.task-list');
    tasklistDom.innerHTML = ``;

    const name = document.querySelector('.proj-name').textContent;

    const currProj = getProject(name);

    let i = 0;
    currProj.taskList.forEach(task => {
        const newTaskLi = createTaskDom(task, currProj, i);
        tasklistDom.appendChild(newTaskLi);
        i++;
    });
}

function isTaskInProject(task, projectName) {
    const project = getProject(projectName);

    for (const projTask of project.taskList) {
        if (
            projTask.getName() === task.getName() &&
            projTask.getDescription() === task.getDescription() &&
            projTask.getDueDate() === task.getDueDate()
        ) {
            return true;
        }
    }
    return false;
}

function createTodayTasklist() {
    //clear task list
    const currProj = getProject('Today');
    
    const newDate = new Date();
    const todayDate = format(newDate, 'yyyy-MM-dd');

    //build tasklist from other projects
    getProjectList().forEach( proj => {
        if (proj.getName() !== "Today" && proj.getName() !== "This Week"){
            proj.taskList.forEach(task => {
                if (isTaskInProject(task, "Today")){
                    if(task.getDueDate() != todayDate ){
                        deleteTask(task, currProj);
                        saveProject(currProj);
                    }
                } else {
                    if(task.getDueDate() == todayDate ) {
                        addTask(task.getName(), task.getDescription(), task.getDueDate(), task.getPriority(), task.getChecked());
                    }
                }
            });
        }
    });
}

function createThisWeekTasklist() {
    //clear task list
    const currProj = getProject('This Week');

    const newDate = new Date();

    getProjectList().forEach( proj => {
        if (proj.getName() !== "Today" && proj.getName() !== "This Week"){
            proj.taskList.forEach(task => {
                const taskDate = task.getDueDate();
                const taskDateObj = parseISO(taskDate);
                if (isTaskInProject(task, "This Week")){
                    if(!isSameWeek(taskDateObj, newDate, { weekStartsOn: 1 })){
                        deleteTask(task, currProj);
                        saveProject(currProj);
                    }
                } else {
                    if(isSameWeek(taskDateObj, newDate, { weekStartsOn: 1 })) {
                        addTask(task.getName(), task.getDescription(), task.getDueDate(), task.getPriority(), task.getChecked());
                    }
                }
            });
        }
    });
    
}


//Load given project title and tasks into DOM
function loadProject(projName) {
    //change header to project title
    const projTitle = document.querySelector('.proj-name');
    projTitle.textContent = projName;

    if (projName !== "Today" && projName !== "This Week") {    
        createAllTasksInProject();
    }
    else if (projName === "Today") {
        createTodayTasklist();
        createAllTasksInProject();
    }
    else if (projName === "This Week") {
        createThisWeekTasklist();
        createAllTasksInProject();
    }
}


//create DOM for left half of task
function createTaskLeftDom(task, i, currProj) {
    const taskleft = document.createElement('div')
    taskleft.classList.add('task-left');

    //add priority bar
    const priorityBar = document.createElement('div');
    const taskPriorityLevel = task.getPriority();
    priorityBar.classList.add(`task-priority-${taskPriorityLevel}`);

    //add checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `task-${i}`);
    checkbox.classList.add('task-checkbox');
    checkbox.checked = task.getChecked();

    //add checkbox label
    const checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('task-name');
    checkboxLabel.setAttribute('for', `task-${i}`);
    checkboxLabel.textContent = `${task.getName()}`;

    //when checkbox clicked toggle checked status and save
    checkbox.addEventListener('click', () => {
        task.setChecked(checkbox.checked);
        saveProject(currProj);
    });

    taskleft.appendChild(priorityBar);
    taskleft.appendChild(checkbox);
    taskleft.appendChild(checkboxLabel);

    return taskleft
}

//create DOM for right half of task
function createTaskRightDom(task){
    const taskright = document.createElement('div');
    taskright.classList.add('task-right');

    //create edit task button
    const taskEdit = document.createElement('button');
    taskEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="task-edit" viewBox="0 0 24 24"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>`
    taskEdit.classList.add('task-edit');

    //create delete task button
    const taskDelete = document.createElement('button');
    taskDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="task-close" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`
    taskDelete.classList.add('task-close');

    //create task details button
    const taskDetails = document.createElement('button');
    taskDetails.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="task-details" viewBox="0 0 24 24"><path d="M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z" /></svg>`
    taskDetails.classList.add('task-details');

    //create task date
    const taskDateContainer = document.createElement('div')
    taskDateContainer.classList.add('task-date-container');

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');

    const dateTokens = task.getDueDate().split('-');//yyyy-mm-dd
    const dateRearranged = dateTokens[1] + '-' + dateTokens[2] + '-' + dateTokens[0]
    const parsedDate = new Date(dateRearranged);
    const formattedDate = format(parsedDate, 'MMM d yyyy');
    taskDate.textContent = formattedDate;

    taskDateContainer.appendChild(taskDate);

    taskright.appendChild(taskDateContainer);
    taskright.appendChild(taskDetails);
    taskright.appendChild(taskEdit);
    taskright.appendChild(taskDelete);

    return taskright;
}


function searchForTaskProj(taskname){
    const projectList = getProjectList();
    for (const proj of projectList) {
        if (proj.getName() !== "Today" && proj.getName() !== "This Week") {
            for (const task of proj.taskList) {
                if (taskname === task.getName()) {
                    return proj;
                }
            }
        }
    }
    return null;
}

//execute target button clicked on newTaskLi
function executeTaskClick(target, task, currProj) {
    if(target.classList[0] === 'task-close'){
        //if task delete button clicked
        const taskname = target.parentElement.previousElementSibling.textContent;

        if(currProj.getName() == "This Week" || currProj.getName() == "Today"){
            const originalProj = searchForTaskProj(task.getName());
            if(originalProj != null){
                deleteTask(taskname, originalProj);
                saveProject(originalProj);
            }
        }
        deleteTask(taskname, currProj);
        saveProject(currProj);
        loadProject(currProj.getName());
    }
    else if (target.classList[0] === 'task-details') {
        //if task details button clicked
        createDetailsPopupDom(task)
    }
    else if (target.classList[0] === 'task-edit') {
        //if task edit button clicked
        createTaskEditPopupDom(task, currProj);
    }
}

//create DOM for task details popup
function createDetailsPopupDom(task) {
    const taskDetailsPopup = document.querySelector('.task-details-popup');
    taskDetailsPopup.showModal();

    //fill out details popup
    const detailsTitle = document.querySelector('.task-popup-title');
    detailsTitle.textContent = task.getName();
    const detailsDescription = document.querySelector('.task-popup-description');
    detailsDescription.textContent = task.getDescription();
    const detailsDate = document.querySelector('.task-popup-date');
    detailsDate.textContent = task.getDueDate();
    const detailsPriority = document.querySelector('.task-popup-priority');
    detailsPriority.textContent = task.getPriority();

    //close details popup when button clicked
    const closeDetailsPopup = document.querySelector('.close-details-popup');
    closeDetailsPopup.addEventListener('click', () => {
        taskDetailsPopup.close();
    });
}

//create DOM for task edit popup
function createTaskEditPopupDom(task, currProj) {
    const editTaskPopup = document.querySelector('.edit-task-popup');
    editTaskPopup.showModal();

    //set edit fields to current task settings
    const editTitle = document.getElementById('editTaskNameInput');
    editTitle.value = task.getName();
    const editDescription = document.getElementById('editTaskDescInput');
    editDescription.value = task.getDescription();
    const editDate = document.getElementById('editTaskDateInput');
    editDate.value = task.getDueDate();

    //set radio button to currrent priority level
    if(task.getPriority() == "low"){
        const editPriorityLow = document.getElementById('editPriorityLow');
        editPriorityLow.checked = true;
    }else if (task.getPriority() == "medium"){
        const editPriorityMedium = document.getElementById('editPriorityMedium');
        editPriorityMedium.checked = true;
    }else if (task.getPriority() == "high"){
        const editPriorityHigh = document.getElementById('editPriorityHigh');
        editPriorityHigh.checked = true;
    }

    //set edited task fields when form submitted
    const editTaskForm = document.querySelector('.edit-task-form');
    editTaskForm.addEventListener('submit', e => {
        e.preventDefault();
        if(currProj.getName() == "This Week" || currProj.getName() == "Today"){
            const originalProj = searchForTaskProj(task.getName());
            for (const originalTask of originalProj.taskList) {
                if (task.getName() === originalTask.getName()) {
                    originalTask.setName(editTitle.value);
                    originalTask.setDescription(editDescription.value);
                    originalTask.setDueDate(editDate.value);
                    const taskPriorityInput = document.querySelector('input[name="edit-priority"]:checked');
                    originalTask.setPriority(taskPriorityInput.value);
                }
            }
            saveProject(originalProj);
        }else {
            task.setName(editTitle.value);
            task.setDescription(editDescription.value);
            task.setDueDate(editDate.value);
            const taskPriorityInput = document.querySelector('input[name="edit-priority"]:checked');
            task.setPriority(taskPriorityInput.value);
            saveProject(currProj);
        }        
        loadProject(currProj.getName());
        editTaskPopup.close();
    });

    //close edit popup when button clicked
    const closeEditPopup = document.querySelector('.close-edit-popup');
    closeEditPopup.addEventListener('click', () => {
        editTaskPopup.close();
    });
}

export {initNavBtns, initDefaultProjBtns, projFormInit, taskFormInit, loadProjectList, loadProject}