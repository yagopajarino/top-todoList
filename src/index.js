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

//body.appendChild(Dm.displayProjectForm())

tasks.push(new Task("Supermercado","Tengo que ir al super", "2022-01-17","Casa"))
tasks.push(new Task("Estudiar","Estudiar para el examen", "2022-01-18","Facultad"))

projects.push(new Project("Casa","#959743"))
projects.push(new Project("Trabajo","#34267e"))
projects.push(new Project("Facultad","#bf7e0d"))
Dm.displayProjects(projects)
projectsEvent()
newTaskBtn()
Dm.displayTasks(tasks)
checkboxes()


// body.appendChild(Dm.displayNewTask(p))

function newTaskBtn(){
    let newTaskButton = document.querySelector(".newTask")
    newTaskButton.addEventListener("click", function() {
        let p = projects.map(p => {
            return p.name
            })
        body.appendChild(Dm.displayNewTask(p))
        let saveTaskBtn = document.querySelector("#newTaskButton")
        console.log("here")
        saveTaskBtn.addEventListener("click", function(){
            console.log("inside saveclick")
            let title = document.querySelector("#taskTitle")
            let disc = document.querySelector("#taskDesc")
            let date = document.querySelector("#taskDate")
            let proj = document.querySelector("#taskProj")
            tasks
            tasks.push(new Task(title.value, disc.value, date.value, proj.value))
            tasks
            let div = document.querySelector(".newItemDiv")
                div.remove()
            Dm.displayTasks(tasks)
            checkboxes()
        })
    })
}

let newPorjectButton = document.querySelector(".newProBtn")
newPorjectButton.addEventListener("click", function() {
    body.appendChild(Dm.displayProjectForm())
    let newProjBtn = document.querySelector("#newProjectButton")
    newProjBtn.addEventListener("click", function() {
        let name = document.querySelector("#projectName")
        let color = document.querySelector("#projectColor")
        projects.push(new Project(name.value, color.value))
        Dm.displayProjects(projects)
        projectsEvent()
        removeNewTaskBtn()
        newTaskBtn()
        let div = document.querySelector(".newItemDiv")
        div.remove()
  })
})

function removeNewTaskBtn(){
    let btn = document.querySelector(".newProBtn")
    let addProject = document.createElement("span")
    addProject.textContent = "New"
    addProject.classList.toggle("newProBtn")
    addProject.classList.toggle("qa")
    let div = document.querySelector(".projHeaders")
    btn.remove()
    div.appendChild(addProject)
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == "Escape"){
        let div = document.querySelector(".newItemDiv")
        div.remove()
    }
});

function checkboxes(){
    let checkboxes = document.querySelectorAll(".checkbox")
    checkboxes.forEach(box => {
        box.addEventListener("click", function() {
            box.parentNode.parentNode.classList.toggle("boxSelected")
        })
    });
}

function projectsEvent(){
    let projItem = document.querySelectorAll(".projItem")
    projItem.forEach(project => {
    project.addEventListener("click", function() {
        let name = project.querySelector("span").textContent
        let arr = tasks.filter(t => t.project == name)
        Dm.displayTasks(arr)
        checkboxes()
        })
    });
}

let allNotes = document.querySelector("#allNotes")
allNotes.addEventListener("click", function(){
    Dm.displayTasks(tasks)
    checkboxes()
})

let today = document.querySelector("#todayNotes")
today.addEventListener("click", function(){
    let today = new Date()
    let f = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, '0')+'-'+today.getDate()
    let arr = tasks.filter(t => t.date==f)
    Dm.displayTasks(arr)
    checkboxes()
})
