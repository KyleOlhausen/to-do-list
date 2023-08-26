//import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import {getProjectList, saveProject} from "./storage";
import { initButtons, taskFormInit, projFormInit, loadProjectList, loadProject  } from "./UI";
import { add } from "date-fns";










initWebsite();
    

function initWebsite() {


    if (window.localStorage.length == 0) {
        addProject("Inbox");
        addProject("Today");
        addProject("This Week");
    }

    initButtons();
    taskFormInit();
    projFormInit();


    loadProjectList();
    loadProject('Inbox');

}

function deleteProject(projName) {
    
}

function deleteTask(taskName) {

}


function addProject(projName) {
    let newProj = new Project(projName);
    saveProject(newProj);
}

function addTask(taskName) {
    console.log('add task');

    let newTask = new Task(taskName);
    const currProjName = document.querySelector('.proj-name').textContent;
    //console.log(currProjName);
    let projList = getProjectList();
    const currProjObj = projList.find( item => { return item.getName() == currProjName; });
    
    //console.log(currProjObj);
    
    currProjObj.taskList.push(newTask);

    //console.log(currProjObj.taskList);

    saveProject(currProjObj);

    //console.log(currProjName);
    loadProject(currProjName);
}


export {addProject, addTask};