const newTaskInput = document.querySelector("#new-task__input");
let todos = JSON.parse(localStorage.getItem("todo-list"));
let tasksContainer = document.querySelector(".task-list");

// Enter event:
newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    saveTasks();
    location.reload();
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
              <span class="task-menu show">
                <i class="fa-solid fa-pen-to-square edit-icon" onclick="editTask(this)"></i>
                <i class="fa-solid fa-trash delete-icon"></i>
                <i class="fa-regular fa-heart favorite-icon" onclick="facIconChange(this)"></i>
              </span>
                <i class="dot-menu fa-solid fa-ellipsis" onclick="showEditMenu(this)"></i>
            </div>
          </li>`;
};

window.onload = (e) => {
  e.preventDefault();
  todos.forEach((task) => {
    tasksContainer.innerHTML += taskTemplate(task);
  });
};
