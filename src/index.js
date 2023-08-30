//import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import {getProject, saveProject} from "./storage";
import { initNavBtns, initDefaultProjBtns, taskFormInit, projFormInit, loadProjectList, loadProject  } from "./UI";
import { format, compareAsc } from "date-fns";



initWebsite();
    

function initWebsite() {
    //if localStorage is empty create default projects
    if (window.localStorage.length == 0) {
        addProject("Inbox");
        addProject("Today");
        addProject("This Week");
    }

    initNavBtns();
    initDefaultProjBtns();
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

    const parsedDate = new Date(taskDate);
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');

    let newTask = new Task(taskName, taskDesc, formattedDate, taskPriority, checked);
    const currProjName = document.querySelector('.proj-name').textContent;

    const currProjObj = getProject(currProjName);

    
    currProjObj.taskList.push(newTask);

    saveProject(currProjObj);
}


export {addProject, addTask, deleteTask};