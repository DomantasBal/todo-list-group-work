let todos2 = JSON.parse(localStorage.getItem("todo-list"));
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const favouriteTasks = document.querySelector("#favourite-tasks");

// Check if user is logged in

const userLogin = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const loggedUser = users.filter((user) => user.username === username.value && user.password === password.value);
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
};

const taskTemplateFavourite2 = (todo) => {
  return `
  <li class="task-list__item" id=${todo.id}>
            <div class="task-list__left">
              <form action="" class="done-task-form">
                <p class="task-list__text-output" id=task.${todo.id} onclick="markDone(this, ${todo.id})"">${todo.taskName}</p>
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

//Display favourites
const displayFavouriteTasks = () => {
  let favouriteTasksArr = todos2.filter((task) => task.favourite === true);
  tasksContainer.innerHTML = "";
  favouriteTasksArr.forEach((task) => {
    tasksContainer.innerHTML += taskTemplateFavourite2(task);
    if (task.completed === false) {
      document.getElementById(`task.${task.id}`).style = "text-decoration:none";
    } else {
      document.getElementById(`task.${task.id}`).style = "text-decoration:line-through";
    }
  });
};

favouriteTasks.addEventListener("click", (e) => {
  e.preventDefault();
  displayFavouriteTasks();
});
