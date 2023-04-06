const newTaskInput = document.querySelector("#new-task__input");
let todos = JSON.parse(localStorage.getItem("todo-list"));
let loggedUser2 = JSON.parse(localStorage.getItem("loggedUser"));
let tasksContainer = document.querySelector(".task-list");

// Enter event:
newTaskInput?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    saveTasks(newTaskInput.value);
    location.reload();
  }
});

// Function for adding tasks to localStorage todo list
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
  return todoList;
};

// Function for displaying task if not favourite
const taskTemplate = (todo) => {
  return `
  <li class="task-list__item" id=${todo.id}>
            <div class="task-list__left">
              <form action="" class="done-task-form">
                <p class="task-list__text-output" onclick="markDone(this)">${todo.taskName}</p>
              </form>
            </div>
            <div class="task-list__right">
              <span class="task-menu show">
                <i class="fa-solid fa-pen-to-square edit-icon" onclick="editTask(this)")></i>
                <i class="fa-solid fa-trash delete-icon" onclick='deleteTask(${todo.id}, "${todo.taskName}")'></i>
                <i class="fa-regular fa-heart favorite-icon" onclick="addToFavourites(this, ${todo.id}); console.log(this)"></i>
              </span>
                <i class="dot-menu fa-solid fa-ellipsis" onclick="showEditMenu(this)"></i>
            </div>          
  </li>`;
};

// Function to display task if favourite
const taskTemplateFavourite = (todo) => {
  return `
  <li class="task-list__item" id=${todo.id}>
            <div class="task-list__left">
              <form action="" class="done-task-form">
                <p class="task-list__text-output" onclick="markDone(this)">${todo.taskName}</p>
              </form>
            </div>
            <div class="task-list__right">
              <span class="task-menu show">
                <i class="fa-solid fa-pen-to-square edit-icon" onclick="editTask(this)"></i>
                <i class="fa-solid fa-trash delete-icon" onclick='deleteTask(${todo.id}, "${todo.taskName}")'></i>
                <i class="fa-solid fa-heart favorite-icon" onclick="addToFavourites(this, ${todo.id}); console.log(this)"></i>
              </span>
                <i class="dot-menu fa-solid fa-ellipsis" onclick="showEditMenu(this)"></i>
            </div>          
  </li>`;
};

window.onload = (e) => {
  e.preventDefault();
  todos.forEach((task) => {
    if (task.favourite === false) {
      tasksContainer.innerHTML += taskTemplate(task);
    } else {
      tasksContainer.innerHTML += taskTemplateFavourite(task);
    }
  });
};

// Function to add task to favourites

const addToFavourites = (icon, id) => {
  console.log();
  if (loggedUser2 && loggedUser2.length > 0) {
    if (todos[id].favourite === true) {
      todos[id].favourite = false;
      facIconChange(icon, id);
    } else {
      todos[id].favourite = true;
      facIconChange(icon, id);
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
  } else {
    alert("You need to log in!");
  }
};

function facIconChange(icon, id) {
  console.log(id);
  if (todos[id].favourite === false) {
    icon.classList.remove("fa-solid", "fa-heart", "favorite-icon");
    icon.classList.add("fa-regular", "fa-heart", "favorite-icon");
  } else {
    icon.classList.remove("fa-regular", "fa-heart", "favorite-icon");
    icon.classList.add("fa-solid", "fa-heart", "favorite-icon");
  }
}
