// • Develop a function for checking off completed tasks
const taskList = document.querySelector(".task-list");
const checkboxes = document.querySelectorAll(".checkbox");
const textOutputs = document.querySelectorAll(".task-list__text-output");

function markDone(selectedItem) {
  let taskName = selectedItem.parentElement.lastElementChild;

  if (selectedItem.nodeName == "P") {
    taskName.classList.contains("crossOut")
      ? taskName.classList.remove("crossOut")
      : taskName.classList.add("crossOut");
  } else {
    selectedItem.checked
      ? taskName.classList.add("crossOut")
      : taskName.classList.remove("crossOut");
  }
}

// // LINE THROUGH FUNCTIONALITY
