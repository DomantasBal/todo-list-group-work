const clearAll = document.querySelector("#clearAll-btn");
let list = JSON.parse(localStorage.getItem("todo-list"));

// ! If we have clearAll button !

clearAll.addEventListener("click", () => {
  isEditTask = false;
  list.splice(0, list.length);
  localStorage.setItem("todo-list", JSON.stringify(list));
  location.reload();
});

// let taskId = task.getAttribute("id");

function deleteTask(taskId) {
  list.splice(taskId, 1);
  list.forEach((item, index) => {
    item.id = index - 1 + 1;
    return item.id;
  });
  localStorage.setItem("todo-list", JSON.stringify(list));
  location.reload();
}
