let todos2 = JSON.parse(localStorage.getItem("todo-list"));
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const favouriteTasks = document.querySelector("#favourite-tasks");

// Check if user is logged in

const userLogin = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const loggedUser = users.filter(
    (user) =>
      user.username === username.value && user.password === password.value
  );
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
};

// Add to-do task to favourites
// const addToFavourites2 = (id) => {
//   // if (loggedUser.length > 0) {
//   //   todos2[id].favourite = true;
//   //   localStorage.setItem("todo-list", JSON.stringify(todos));
//   // } else {
//   //   alert("You need to log in!");
//   // }
//   todos2[id].favourite = true;
//   localStorage.setItem("todo-list", JSON.stringify(todos));
// };

//Task template. Can we reuse it from newTask.js?
const taskTemplate2 = (todo) => {
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
                <i class="fa-solid fa-pen-to-square edit-icon"></i>
                <i class="fa-solid fa-trash delete-icon"></i>
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
    tasksContainer.innerHTML += taskTemplate2(task);
  });
};

favouriteTasks.addEventListener("click", (e) => {
  e.preventDefault();
  displayFavouriteTasks();
});
