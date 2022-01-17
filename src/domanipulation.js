export default class Dm {
    static displayProjectForm(){
        let div = document.createElement("div")
        div.classList.toggle("newItemDiv")

        let formContainer = document.createElement("div")
        formContainer.classList.toggle("formContainer")

        let title = document.createElement("h2")
        title.textContent = "Add project"
        title.classList.toggle("formTitle")
        let form = document.createElement("form")
        form.classList.toggle("newItemForm")
        
        let name = document.createElement("input")
        name.type = "text"
        name.placeholder = "Name"
        name.id = "projectName"

        let colorDiv = document.createElement("div")
        colorDiv.classList.toggle("colorDiv")
        let colorLabel = document.createElement("label")
        colorLabel.textContent = "Color"
        let colorSelector = document.createElement("input")
        colorSelector.id = "projectColor"
        colorSelector.type = "color"
        colorSelector.value = "#ff0000"
        colorDiv.appendChild(colorLabel)
        colorDiv.appendChild(colorSelector)

        let button = document.createElement("button")
        button.type = "button"
        button.classList.toggle("newItemButton")
        button.id = "newProjectButton"
        button.textContent = "Save"

        form.appendChild(name)
        form.appendChild(colorDiv)
        form.appendChild(button)

        formContainer.appendChild(title)
        formContainer.appendChild(form)
        div.appendChild(formContainer)
        return div
    }

    static displayNewTask(proyectos){
        let div = document.createElement("div")
        div.classList.toggle("newItemDiv")

        let formContainer = document.createElement("div")
        formContainer.classList.toggle("formContainer")

        let title = document.createElement("h2")
        title.textContent = "Add Task"
        title.classList.toggle("formTitle")
        let form = document.createElement("form")
        form.classList.toggle("newItemForm")

        let name = document.createElement("input")
        name.type = "text"
        name.placeholder = "Title"
        name.id = "taskTitle"

        let description = document.createElement("input")
        description.type = "text"
        description.placeholder = "Description"
        description.id = "taskDesc"

        let date = document.createElement("input")
        date.type = "date"
        date.id = "taskDate"
        let today = new Date();
        let k = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        date.value = k

        let proj = document.createElement("select")
        proj.id = "taskProj"
        let op = document.createElement("option")
        op.textContent = "Project"
        op.selected = true
        op.disabled = true
        proj.appendChild(op)

        proyectos.forEach(element => {
            let opcion = document.createElement("option")
            opcion.textContent = element
            proj.appendChild(opcion)

        });

        let button = document.createElement("button")
        button.type = "button"
        button.classList.toggle("newItemButton")
        button.id = "newTaskButton"
        button.textContent = "Save"

        form.appendChild(name)
        form.appendChild(description)
        form.appendChild(date)
        form.appendChild(proj)
        form.appendChild(button)

        formContainer.appendChild(title)
        formContainer.appendChild(form)
        div.appendChild(formContainer)
        return div
    }

    static displayProjects(projectsArray) {
        let proyListDiv = document.querySelector(".projectsList")
        while (proyListDiv.firstChild) {
            proyListDiv.removeChild(proyListDiv.lastChild);
        }
        projectsArray.forEach(project => {
            let div = document.createElement("div")
            div.classList.toggle("projItem")
            let colorBox = document.createElement("div")
            colorBox.classList.toggle("colorBox")
            let name = document.createElement("span")
            colorBox.style.backgroundColor = project.color
            name.textContent = project.name

            div.appendChild(colorBox)
            div.appendChild(name)
            proyListDiv.appendChild(div)
        });
    }

    static displayTasks(tasksArray) {
        let listDiv = document.querySelector(".tasksList")
        while (listDiv.firstChild) {
            listDiv.removeChild(listDiv.lastChild);
        }
        tasksArray.forEach(task => {
            let div = document.createElement("div")
            div.classList.toggle("taskItem")
            let title = document.createElement("span")
            title.classList.toggle("taskTitle")
            let taskone = document.createElement("div")
            title.textContent = task.title
            let description = document.createElement("span")
            description.classList.toggle("taskDescription")
            description.textContent = task.description

            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.classList.toggle("checkbox")
            taskone.appendChild(checkbox)
            taskone.appendChild(title)
            taskone.appendChild(description)

            let tasktwo = document.createElement("div")
            let date = document.createElement("span")
            let project = document.createElement("span")
            date.classList.toggle("taskDate")
            project.classList.toggle("taskProj")
            date.textContent = task.date
            project.textContent = task.project
            tasktwo.appendChild(project)
            tasktwo.appendChild(date)

            div.appendChild(taskone)
            div.appendChild(tasktwo)
            listDiv.appendChild(div)
        });
    }
}