import utils from './utils.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#all').onclick = loadTodos;
document.querySelector('#active').onclick = incompleteClicked;
document.querySelector('#complete').onclick = completedClicked;

window.addEventListener('load', () => {

    loadTodos();
    countRemaining();
  
});


function loadTodos() {
    const todoList = ls.getTodoList();

    document.querySelector('#todos').innerHTML = '';

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    })
}

function loadFiltered(list) {
    const todoList = list;

    document.querySelector('#todos').innerHTML = '';

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    })
}

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = { id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    // todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = completeTodo;
    if (todo.completed === true) {
        completeBtn.innerHTML = 'X';
    }

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');
    if (todo.completed === true) {
        todoContent.style.setProperty("text-decoration", "line-through");
    }

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;


    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    // add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

function countRemaining() {
    const count = utils.filterIncompTodo().length;
    document.querySelector('#count').innerHTML = count + ' task(s) left';
}

// Event handlers
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function completeTodo(e){
    const btn = e.currentTarget;
    ls.completeTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    countRemaining();
    loadTodos();
}

function incompleteClicked() {
    const filteredList = utils.filterIncompTodo();
    loadFiltered(filteredList);
}

function completedClicked() {
    const filteredList = utils.filterCompleteTodo();
    loadFiltered(filteredList);
}