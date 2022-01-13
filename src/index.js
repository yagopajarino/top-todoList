import './style.css'
import dashboard from "./dashboard.js"
import icon from "./task.png"
import Task from "./task.js"

let body = document.querySelector("body")
body.appendChild(dashboard())

let tasks = []