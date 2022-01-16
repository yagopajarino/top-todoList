export default class eventHandler {
    static addListeners(b,p,d){
        let newTaskButton = document.querySelector(".newTask")
        newTaskButton.addEventListener("click", function() {
            b.appendChild(d.displayNewTask(p))
        })

        let newPorjectButton = document.querySelector(".newProBtn")
        newPorjectButton.addEventListener("click", function() {
            b.appendChild(d.displayProjectForm())
        })

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName == "Escape"){
                let div = document.querySelector(".newItemDiv")
                div.remove()
            }
          });

          let checkboxes = document.querySelectorAll(".checkbox")
          checkboxes.forEach(box => {
              box.addEventListener("click", function() {
                  box.parentNode.parentNode.classList.toggle("boxSelected")
              })
          });
    }
}