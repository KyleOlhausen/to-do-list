import Project from "./project";
import Task from "./task";


function deleteProject(projName) {
    localStorage.removeItem(projName);
}

function saveProject(projObj) {
    localStorage.setItem(projObj.getName(), JSON.stringify(projObj));
}

function getProjectList() {
    let projList = [];
    let keys = Object.keys(localStorage);

    keys.forEach(key => {
        projList.push(makeObjectFromStorage(key));
    });

    return projList;
}

function makeObjectFromStorage(key) {
    let newProj = new Project(JSON.parse(localStorage.getItem(key))['name']);
    let tempTaskList = [];

    tempTaskList = JSON.parse(localStorage.getItem(key))['taskList'];
    tempTaskList.forEach( item => {
        newProj.taskList.push(new Task(item['name']));
    });

    return newProj;
}


export {saveProject, getProjectList, deleteProject};