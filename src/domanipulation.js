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

        let colorDiv = document.createElement("div")
        colorDiv.classList.toggle("colorDiv")
        let colorLabel = document.createElement("label")
        colorLabel.textContent = "Color"
        let colorSelector = document.createElement("input")
        colorSelector.type = "color"
        colorSelector.value = "#ff0000"
        colorDiv.appendChild(colorLabel)
        colorDiv.appendChild(colorSelector)

        let button = document.createElement("button")
        button.type = "button"
        button.classList.toggle("newItemButton")
        button.textContent = "Save"

        form.appendChild(name)
        form.appendChild(colorDiv)
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
            console.log(project)

            div.appendChild(colorBox)
            div.appendChild(name)
            proyListDiv.appendChild(div)
        });
    }
}