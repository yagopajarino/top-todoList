export default class Task {
    constructor(title, description, date, project, priority){
        this.title = title
        this.description = description
        this.date = date
        this.project = project
        this.done = false
    }
    
    changeDone(){
        this.done = true
    }

}