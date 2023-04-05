const newTaskInput2 = document.querySelector("#new-task__input");
const isLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));
console.log(isLoggedIn);

let isEditTask = false;
function editTask(taskId, textName) {
  if (isLoggedIn) {
    editId = taskId;
    isEditTask = true;
    newTaskInput2.value = textName;
    newTaskInput2.focus();
    newTaskInput2.classList.add("active");
  } else {
    alert("Sorry you need to login to edit tasks");
  }
}

newTaskInput2.addEventListener("keyup", (e) => {
  let userTask = newTaskInput2.value.trim();
  if (e.key == "Enter" && userTask) {
    if (!isEditTask) {
      let task = { taskName: userTask, favourite: false };
      if (!localStorage.getItem("todo-list")) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem("todo-list"));
      }
      task.id = todos.length;
    } else {
      isEditTask = false;
      todos[editId].taskName = userTask;
    }
    newTaskInput2.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));
    location.reload();
  }
});
