import './style.css'
import dashboard from "./dashboard.js"
import icon from "./task.png"
import Task from "./task.js"
import Project from "./projects.js"
import Dm from "./domanipulation.js"
import eventHandler from "./eventHandlers.js"

let body = document.querySelector("body")
body.appendChild(dashboard())

let tasks = []
let projects = []

let dm = new Dm()
//body.appendChild(Dm.displayProjectForm())

tasks.push(new Task("Supermercado","Tengo que ir al super", "date","Casa"))
tasks.push(new Task("Facultad","Estudiar para el examen", "date","Estudios"))

projects.push(new Project("Casa","#959743"))
projects.push(new Project("Trabajo","#34267e"))
projects.push(new Project("Facultad","#bf7e0d"))
Dm.displayProjects(projects)
Dm.displayTasks(tasks)

let p = projects.map(p => {
    return p.name
})
// body.appendChild(Dm.displayNewTask(p))

eventHandler.addListeners(body, p, Dm)