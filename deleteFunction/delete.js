const clearAll = document.querySelector("#clearAll-btn");
let list = JSON.parse(localStorage.getItem("todo-list"));

// ! If we have clearAll button !

clearAll.addEventListener("click", () => {
  isEditTask = false;
  list.splice(0, list.length);
  localStorage.setItem("todo-list", JSON.stringify(list));
});