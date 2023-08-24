export default class Task {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }


    // setDueDate(dueDate) {
    //     this.dueDate = dueDate;
    // }

    // getDueDate() {
    //     return this.dueDate;
    // }

    // setPriority(priority) {
    //     this.priority = priority;
    // }

    // getPriority() {
    //     return this.priority;
    // }
 
}