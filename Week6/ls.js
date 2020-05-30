function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

function completeTodo(id) {
    const toDoList = getTodoList();
    let i = 0;
    while (i < toDoList.length) {
        if (toDoList[i].id == id) {
            toDoList[i].completed = true;
        }
        i++;
    }

    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    completeTodo
}