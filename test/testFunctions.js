export const saveTasks = (newTask) => {
  let todoList;
  let task = { taskName: newTask, favourite: false, completed: false };
  if (!localStorage["todo-list"]) todoList = [];
  else todoList = JSON.parse(localStorage["todo-list"]);
  if (!(todoList instanceof Array)) todoList = [];
  todoList.push(task);
  todoList.forEach((item, index) => {
    return (item.id = index - 1 + 1);
  });
  localStorage.setItem("todo-list", JSON.stringify(todoList));
  console.log(task);
  return todoList;
};

export function deleteTask(list, taskId) {
  list.splice(taskId, 1);
  list.forEach((item, index) => {
    item.id = index - 1 + 1;
    return item.id;
  });
  return list;
}

export function editTask(todo, taskId, inputEl) {
  let newTaskName = inputEl;
  if (newTaskName === "") {
    return "Task name cannot be empty!";
  } else {
    let todoList = todo.map((item) => {
      if (item.id === taskId) {
        item.taskName = newTaskName;
      } else {
        item.taskName = item.taskName;
      }
      return item;
    });
    console.log(todoList);
    return todoList;
  }
}

// Favourite function

export const addToFavourites = (loggedUser, todos, id) => {
  if (loggedUser && loggedUser.length > 0) {
    if (todos[id].favourite === true) {
      todos[id].favourite = false;
    } else {
      todos[id].favourite = true;
    }
    return todos;
  } else {
    return "You need to log in!";
  }
};
