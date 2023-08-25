//import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import {getProjectList, saveProject} from "./storage";
import { initButtons, taskFormInit, projFormInit, loadProjectList, loadProject  } from "./UI";








let listOfProjObj = getProjectList();


initWebsite();
    

function initWebsite() {


    if (window.localStorage.length == 0) {
        addProject("Inbox");
        addProject("Today");
        addProject("This Week");
    }

    initButtons();
    taskFormInit();
    projFormInit(listOfProjObj);


    loadProjectList(listOfProjObj);
    loadProject('Inbox', listOfProjObj);
}


function addProject(projName) {
    let newProj = new Project(projName);

    listOfProjObj.push(newProj);

    saveProject(newProj);
}

function addTask(taskName) {
    let newTask = new Task(taskName);
    const currProjName = document.querySelector('.proj-name').textContent;
    console.log(currProjName);
    const currProjObj = listOfProjObj.find( item => { return item.getName() == currProjName; });
    
    //console.log(currProjObj);
    currProjObj.taskList.push(newTask);
    saveProject(currProjObj);
    loadProject(currProjName, listOfProjObj);
}


export {addProject, addTask};
