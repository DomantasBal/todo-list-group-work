const newTaskInput = document.querySelector("#new-task__input");
// let todos = JSON.parse(localStorage.getItem("todo-list"));

// Enter event:
newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    saveTasks();
  }
});

// Function for adding tasks to localStorage todo list
const saveTasks = () => {
  let todoList;
  let task = { taskName: newTaskInput.value, favourite: false };
  console.log(task);
  if (!localStorage["todo-list"]) todoList = [];
  else todoList = JSON.parse(localStorage["todo-list"]);
  if (!(todoList instanceof Array)) todoList = [];
  todoList.push(task);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
};
