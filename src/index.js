import './style.css'
import dashboard from "./dashboard.js"
import icon from "./task.png"
import Task from "./task.js"
import Project from "./projects.js"
import Dm from "./domanipulation.js"


let body = document.querySelector("body")
body.appendChild(dashboard())

let tasks = []
let projects = []

let dm = new Dm()
//body.appendChild(Dm.displayProjectForm())

projects.push(new Project("Casa","#959743"))
projects.push(new Project("Trabajo","#34267e"))
Dm.displayProjects(projects)