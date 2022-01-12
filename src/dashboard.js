export default function dashboard(){
    let main = document.createElement("main")
    main.classList.toggle("dashboardContainer")
    
    let barraLateral = document.createElement("div")
    barraLateral.classList.toggle("barraLateral")
    let quickAccess = document.createElement("div")
    quickAccess.classList="quickTasks"
    let h2q = document.createElement("h2")
    h2q.textContent = "Quick Access"
    let inbox = document.createElement("span")
    inbox.textContent = "Inbox"
    let today = document.createElement("span")
    today.textContent = "Today"

    quickAccess.appendChild(h2q)
    quickAccess.appendChild(inbox)
    quickAccess.appendChild(today)
    barraLateral.appendChild(quickAccess)

    let projectsDiv = document.createElement("div")
    projectsDiv.classList.toggle("projectsDiv")
    let h2p = document.createElement("h2")
    h2p.textContent = "Projects"
    projectsDiv.appendChild(h2p)
    barraLateral.appendChild(projectsDiv)

    let dash = document.createElement("div")
    dash.classList.toggle("dash")

    main.appendChild(barraLateral)
    main.appendChild(dash)
    return main
}