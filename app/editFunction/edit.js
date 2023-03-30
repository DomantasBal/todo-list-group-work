const localUsername = localStorage.getItem("name");
const localPass = localStorage.getItem("pw");

let isEditTask = false;

function editTask(taskId, textName) {
  editId = taskId;
  isEditTask = true;
  newTaskInput.value = textName;
  newTaskInput.focus();
  newTaskInput.classList.add("active");
}

newTaskInput.addEventListener("keyup", (e) => {
  let userTask = newTaskInput.value.trim();
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
    newTaskInput.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));
    location.reload();
  }
});
