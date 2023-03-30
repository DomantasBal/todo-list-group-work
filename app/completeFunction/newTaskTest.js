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
  task.id = todoList.length;
  todoList.push(task);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
};

// Function for displaying task
const taskTemplate = (todo) => {
  return `
  <li class="task-list__item" id=${todo.id}>
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
                <i class="" onclick="addToFavourites(this, ${todo.id}); console.log(this)"></i>
              </span>
                <i class="dot-menu fa-solid fa-ellipsis" onclick="showEditMenu(this)"></i>
            </div>          
  </li>`;
};

window.onload = (e) => {
  e.preventDefault();
  todos.forEach((task) => {
    facIconChange(task, task.id);
    tasksContainer.innerHTML += taskTemplate(task);
  });
};

// Function to add task to favourites

const addToFavourites = (icon, id) => {
  console.log();
  if (todos[id].favourite === true) {
    todos[id].favourite = false;
    facIconChange(icon, id);
  } else {
    todos[id].favourite = true;
    facIconChange(icon, id);
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
};

function facIconChange(icon, id) {
  console.log(id);
  if (todos[id].favourite === false) {
    iconFilled(icon);
  } else {
    iconEmpty(icon);
  }
}

function iconFilled(icon) {
  icon.classList.add("fa-solid", "fa-heart", "favorite-icon");
}

function iconEmpty(icon) {
  favEd.classList.add("fa-regular", "fa-heart", "favorite-icon");
  favEd.setAttribute("onclick", "facIconChange(this)");
}

// function iconFilled(icon) {
//   // let favEd = document.querySelector(".favourite-icon");
//   icon.className = "favourite-icon fa-solid fa-heart favorite-icon";
// }

// function iconEmpty(icon) {
//   // let favEd = icon;
//   icon.className = "favourite-icon fa-regular fa-heart favorite-icon";
// }

// function facIconChange2(id) {
//   console.log(id);
//   if (todos[id].favourite === false) {
//     return "favourite-icon fa-regular fa-heart favorite-icon";
//   } else {
//     return "favourite-icon fa-solid fa-heart favorite-icon";
//   }
// }
