console.log("Entrou");

class Todo {

    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(){
        //clona template
        let template= document.querySelector('.task').cloneNode(true);

        //remove classe hide
        template.classList.remove('hide');
        
        //manipular texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        
        let list = document.querySelector('#tasks-container');

        // inserir na lista
        list.appendChild(template);

        console.log("funcionou");
    }
}

let todo = new Todo();

// events
let addBtn = document.querySelector("#add");

addBtn.addEventListener('click', function(e) {

    e.preventDefault();

    let taskText = document.querySelector('#task');

    if(taskText.value != ''){
        todo.addTask(taskText.value)
        console.log(taskText.Value);
    }

    todo.addTask(taskText.value);

    //limpa campo de texto
    taskText.value = '';

})