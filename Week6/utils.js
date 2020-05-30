import ls from './ls.js'; 

function filterIncompTodo() {
    const unfilteredList = ls.getTodoList();
    let incompleteList = unfilteredList.filter(item => item.completed === false);

    return incompleteList;
}

function filterCompleteTodo() {
    const unfilteredList = ls.getTodoList();
    let completedList = unfilteredList.filter(item => item.completed === true);

    return completedList;
}

export default {
    filterIncompTodo,
    filterCompleteTodo
}