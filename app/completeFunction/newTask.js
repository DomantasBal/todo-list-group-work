const newTaskInput = document.querySelector("#new-task__input");
let todos = JSON.parse(localStorage.getItem("todo-list"));
let tasksContainer = document.querySelector(".task-list");

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

// Function for displaying task
const taskTemplate = (todo) => {
  return `
  <li class="task-list__item">
            <div class="task-list__left">
              <form action="" class="done-task-form">
                <input type="checkbox" class="checkbox" onclick="markDone(this)" />
                <p class="task-list__text-output" onclick="markDone(this)">${todo.taskName}</p>
              </form>
            </div>
            <div class="task-list__right">
              <i class="dot-menu fa-solid fa-ellipsis" onclick="showEditMenu()"></i>
            </div>
          </li>`;
};

window.onload = (e) => {
  e.preventDefault();
  todos.forEach((task) => {
    tasksContainer.innerHTML += taskTemplate(task);
  });
};
