// • Develop a function for checking off completed tasks
const completedTasks = document.querySelector("#completed-tasks");

// CROSS OUT FUNCTIONALITY ON ELEMENT CLICK
function markDone(text, id) {
  // taskName.classList.contains("crossOut") ? taskName.classList.remove("crossOut") : taskName.classList.add("crossOut");
  // saveCompletedTask(taskName, taskId);
  console.log(todos[id]);
  if (todos[id].completed === false) {
    todos[id].completed = true;
    text.style = "text-decoration:line-through";
  } else {
    todos[id].completed = false;
    text.style = "text-decoration:none";
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

const displayCompleted = () => {
  let completedTasksArr = todos.filter((task) => task.completed === true);
  tasksContainer.innerHTML = "";
  completedTasksArr.forEach((task) => {
    tasksContainer.innerHTML += taskTemplate(task);
  });
};

completedTasks.addEventListener("click", (e) => {
  e.preventDefault();
  displayCompleted();
});
