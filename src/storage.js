import Project from "./project";
import Task from "./task";


// export default class Storage {

//     static projList = [];
    

//     static saveProjList() {
//         localStorage.setItem('projList', JSON.stringify(this.projList));
//     }

//     static getProjList() {
//         console.log(this.projList);
//         this.projList = JSON.parse(localStorage.getItem('projList'));
//         return this.projList;
//     }

//     static addProject(projName) {
//         Storage.projList.push(new Project(projName));
//         Storage.saveProjList();
//     }

//     static getProject(projName) {
//         return this.projList.find((proj) => proj.getName() === projName);
//     }

//     static removeProject(projName) {
//         Storage.projList = this.projList.filter((proj) => {proj.getName() != projName});
//         Storage.saveProjList();
//     }

//     static addTask(taskName) {
//         let currProj = Storage.getProject(document.querySelector('.proj-name').textContent);
//         let newTask = new Task(taskName);
//         currProj.addTaskToProj(newTask);
//         Storage.saveProjList();//FOR SOME REASON WHEN I REFRESH TASKS DISAPPEAR
//     }

//     // removeTask() {

//     // }

// }


function saveProject(projObj) {
    localStorage.setItem(projObj.getName(), JSON.stringify(projObj));
}


function getProjectList() {
    let projList = [];
    let keys = Object.keys(localStorage);

    keys.forEach(key => {
        let newProj = new Project(JSON.parse(localStorage.getItem(key))['name']);
        newProj.getTaskList = JSON.parse(localStorage.getItem(key))['taskList'];
        projList.push(newProj);
    })

    return projList;
}


export {saveProject, getProjectList};