import * as ls from './ls.js';
const toDoList = ls.readFromLS('todo');

export default class Task {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.setupTaskButton();
    };

    getAllTasks(){
        return toDoList;
    };
    
    showTaskList() {
        this.parentElement.innerHTML = '';
        renderTaskList(this.parentElement, this.getAllTasks());

    };

    addToDo() {
        const userInput = document.getElementById('newTask').value;
        const newTodo = {id: Date.now(), content: userInput, completed: false}
        const allTasks = this.getAllTasks();
        allTasks.push(newTodo);
        saveToDo(allTasks);
        document.getElementById('newTask').value = "";
        this.showTaskList();
    };

    removeToDo(id) {
        const allTasks = this.getAllTasks();
        const removeTask = document.getElementById(todo.id);
        allTasks.splice(allTasks.indexOf(removeTask), 1);
        this.showTaskList();
        
    };

    setupTaskButton() {
        const addTaskButton = document.getElementById('addTask');
        addTaskButton.addEventListener('click', () => {
            this.addToDo();
        });
    };

    setupRemoveButton() {
        const addRemoveButtons = document.getElementsByClassName('remove');
        addRemoveButtons.forEach(item => {
            item.addEventListener('click', () => {
                this.removeToDo(item.id);
            });
        });
    }
};

function saveToDo(addedList) {
    ls.writeToLS('todo', addedList);
};

function renderTaskList(parent, objectList) { //list of all objects in toDoList
    objectList.forEach(item => { //for each item in the objectlist
        parent.appendChild(renderOneTask(item));
    });
};

function renderOneTask(object) { //Singular object in toDoList
    const item = document.createElement('li');
    //item.classList.add('light');

    item.setAttribute('data-name', object.id);
    item.innerHTML = `
        <div>
            <input type="checkbox" class=""/>
            <span class="">${object.content}</span>
            <button class="remove" id="${object.id}">X</button>
        </div>
    `;
  
    return item;
};