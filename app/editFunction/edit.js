function editTask(task) {
  const listItem = task.closest(".task-list__item");
  const taskNameElement = listItem.querySelector(".task-list__text-output");

  // INLINE EDIT ENABLE
  taskNameElement.setAttribute("contenteditable", true);

  // FINISH EDIT - STORE EDIT TO VARIABLE
  taskNameElement.addEventListener("blur", function () {
    const editedTaskName = taskNameElement.textContent.trim();
    taskNameElement.setAttribute("contenteditable", false);
    taskNameElement.textContent = editedTaskName;

    // Do something with the edited task name (such as saving it to a database)
    console.log(`Edited task name: ${editedTaskName}`);
  });
}
