const saveTasks = (newTask) => {
  let todoList;
  let task = { taskName: newTask, favourite: false };
  console.log(task);
  if (!localStorage["todo-list"]) todoList = [];
  else todoList = JSON.parse(localStorage["todo-list"]);
  if (!(todoList instanceof Array)) todoList = [];
  task.id = todoList.length;
  todoList.push(task);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
};

module.exports = saveTasks;
