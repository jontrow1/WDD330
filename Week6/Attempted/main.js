import Task from "./Todos.js";

const myTasks = new Task('tasks');

window.addEventListener('load', () => {

    myTasks.showTaskList();
  
  });