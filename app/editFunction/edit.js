const isLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));
let editId = null;
let isEditTask = false;

function editTask(selectedItem) {
  if (isLoggedIn !== null) {
    let taskItem = selectedItem.closest(".task-list__item");
    let taskName = taskItem.querySelector(".task-list__text-output");

    // create a new input element with the existing task name as the value
    let inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("class", "edit-task__input");
    inputEl.value = taskName.textContent;

    // replace the task name with the input element
    taskName.replaceWith(inputEl);
    inputEl.focus();

    // add event listener to the input element to save the new task name when the user hits "Enter"
    inputEl.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();

        // get the new task name value
        let newTaskName = inputEl.value.trim();

        // validate that the new task name is not empty
        if (newTaskName === "") {
          alert("Task name cannot be empty!");
          return;
        }

        // update the task name in the localStorage array
        let todoList = JSON.parse(localStorage.getItem("todo-list"));
        let taskIndex = todoList.findIndex(
          (item) => item.id === parseInt(taskItem.getAttribute("id"))
        );

        if (taskIndex !== -1) {
          todoList[taskIndex].taskName = newTaskName;
          localStorage.setItem("todo-list", JSON.stringify(todoList));
        }

        // replace the input element with the updated task name
        let updatedTaskName = document.createElement("p");
        updatedTaskName.setAttribute("class", "task-list__text-output");
        updatedTaskName.textContent = newTaskName;

        inputEl.replaceWith(updatedTaskName);
      }
    });
  } else {
    showAlert();
  }
}

// ON ENTER NEW TASK EDIT
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
      todos.push(task);
    } else {
      isEditTask = false;
      todos[editId].taskName = userTask;
    }
    newTaskInput.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));
    location.reload();
  }
});

// ALERT BOX
function showAlert() {
  document.querySelector(".alert-box").style.display = "block";
}

function hideAlert() {
  document.querySelector(".alert-box").style.display = "none";
}
