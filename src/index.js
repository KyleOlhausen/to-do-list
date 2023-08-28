//import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import {getProjectList, saveProject} from "./storage";
import { initButtons, taskFormInit, projFormInit, loadProjectList, loadProject  } from "./UI";
import { format, compareAsc } from "date-fns";



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


function deleteTask(taskname, currProj){
    for(let i=0; i < currProj.taskList.length; i++) {
        if (currProj.taskList[i].getName() == taskname){
            currProj.taskList.splice(i,1);
        }
    }
}


function addProject(projName) {
    let newProj = new Project(projName);
    saveProject(newProj);
}


function addTask(taskName, taskDesc, taskDate, taskPriority, checked) {
    console.log('add task');

    let newTask = new Task(taskName, taskDesc, taskDate, taskPriority, checked);
    const currProjName = document.querySelector('.proj-name').textContent;

    let projList = getProjectList();
    const currProjObj = projList.find( item => { return item.getName() == currProjName; });

    
    currProjObj.taskList.push(newTask);

    //valueAsDate

    saveProject(currProjObj);
    loadProject(currProjName);
}


export {addProject, addTask, deleteTask};