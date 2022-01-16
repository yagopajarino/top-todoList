export default function dashboard(){
    let main = document.createElement("main")
    main.classList.toggle("dashboardContainer")
    
    let barraLateral = document.createElement("div")
    barraLateral.classList.toggle("barraLateral")
    let quickAccess = document.createElement("div")
    quickAccess.classList="quickTasks"
    let h2q = document.createElement("h2")
    h2q.textContent = "Quick Access"
    let all = document.createElement("span")
    all.textContent = "All"
    all.classList.toggle("qa")
    let today = document.createElement("span")
    today.classList.toggle("qa")
    today.textContent = "Today"

    quickAccess.appendChild(h2q)
    quickAccess.appendChild(all)
    quickAccess.appendChild(today)
    barraLateral.appendChild(quickAccess)

    let projectsDiv = document.createElement("div")
    projectsDiv.classList.toggle("projectsDiv")
    let projectsHeaderDiv = document.createElement("div")
    projectsHeaderDiv.classList.toggle("projHeaders")

    let h2p = document.createElement("h2")
    let addProject = document.createElement("span")
    addProject.textContent = "New"
    addProject.classList.toggle("newProBtn")
    addProject.classList.toggle("qa")
    h2p.textContent = "Projects"
    projectsHeaderDiv.appendChild(h2p)
    projectsHeaderDiv.appendChild(addProject)

    let projects = document.createElement("div")
    projects.classList.toggle("projectsList")

    projectsDiv.appendChild(projectsHeaderDiv)
    projectsDiv.appendChild(projects)
    barraLateral.appendChild(projectsDiv)

    let dash = document.createElement("div")
    dash.classList.toggle("dash")
    let dashTitle = document.createElement("h2")
    let phrases = ["Here are your notes ", "Do today, not tomorrow ", "Hi there ", "The secret of getting ahead is getting started "]
    let p = phrases[Math.floor(Math.random() * phrases.length)]
    dashTitle.textContent = p + String.fromCodePoint(0x1f603);
    let taskDiv = document.createElement("div")
    taskDiv.classList.toggle("tasksList")
    dash.appendChild(dashTitle)
    dash.appendChild(taskDiv)

    let newTaskButton = document.createElement("div")
    newTaskButton.classList.toggle("newTask")

    main.appendChild(barraLateral)
    main.appendChild(dash)
    main.appendChild(newTaskButton)
    return main
}