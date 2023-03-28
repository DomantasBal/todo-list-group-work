console.log(todos);
function editTask(task) {
  const listItem = task.closest(".task-list__item");
  const taskText = listItem.querySelector(".task-list__text-output");

  // INLINE EDIT ENABLE
  taskText.setAttribute("contenteditable", true);

  // EDIT BOX STYLES
  taskText.style.border = "1px solid #EF785E";
  taskText.style.padding = "15px 30px 15px 5px";
  taskText.style.maxWidth = "200px";
  taskText.style.whiteSpace = "break-word";
  taskText.style.borderRadius = "6px";

  // FINISH EDIT - STORE EDIT TO VARIABLE ON OUTSIDE CLICK
  taskText.addEventListener("blur", function () {
    const editedTaskName = taskText.textContent.trim();
    taskText.setAttribute("contenteditable", false);
    taskText.textContent = editedTaskName;

    // REMOVE EDIT BOX STYLES
    taskText.style.border = "";
    taskText.style.padding = "";

    let taskId = task.getAttribute("id");

    // EDIT VALUES SEND TO LOCALSTORAGE
    editLocalStorage(editedTaskName, taskId);
  });
}

function editLocalStorage(textToSave, taskId) {
  // COLLECTED VALUE GOES TO LOCALSTORAGE HERE
  console.log(textToSave);

  //  EDITED TASK ID TO MATCH LOCALSTORAGE EDITED ITEM ID
  console.log(taskId);
}
