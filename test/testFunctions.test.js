import { saveTasks, deleteTask, editTask, addToFavourites } from "./testFunctions";

// Test function for creating a task
test("creates new task", () => {
  const newTask = "Eat pizza";
  const createNewTask = saveTasks(newTask);
  expect(createNewTask).toEqual([{ taskName: newTask, favourite: false, completed: false, id: 0 }]);
});

// Test function for deleting the task
test("delete the task", () => {
  const myList = [
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Read", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: false, completed: true, id: 2 },
  ];
  const deleteMyTask = deleteTask(myList, 1);
  expect(deleteMyTask).toEqual([
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Homework", favourite: false, completed: true, id: 1 },
  ]);
});

// Test function for editing the task
test("edit the task", () => {
  let todoList = [
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Read", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: false, completed: true, id: 2 },
  ];
  const editMyTask = editTask(todoList, 1, "Watch TV");
  expect(editMyTask).toEqual([
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Watch TV", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: false, completed: true, id: 2 },
  ]);
});

test("return message if input value is empty", () => {
  let todoList = [
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Read", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: false, completed: true, id: 2 },
  ];
  const editMyTask = editTask(todoList, 1, "");
  expect(editMyTask).toEqual("Task name cannot be empty!");
});

// Test function for marking task as favourite
test("mark task as favourite", () => {
  let loggedUser = [{ userName: "Peter", password: "Hello123" }];
  let todosList = [
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Read", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: false, completed: true, id: 2 },
  ];
  const markFavouriteTask = addToFavourites(loggedUser, todosList, 2);
  expect(markFavouriteTask).toEqual([
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Read", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: true, completed: true, id: 2 },
  ]);
});

test("return you need to log in message, if want to mark task as favourite when not logged in", () => {
  let loggedUser = [];
  let todosList = [
    { taskName: "Buy Milk", favourite: true, completed: false, id: 0 },
    { taskName: "Read", favourite: false, completed: true, id: 1 },
    { taskName: "Homework", favourite: false, completed: true, id: 2 },
  ];
  const markFavouriteTask = addToFavourites(loggedUser, todosList, 2);
  expect(markFavouriteTask).toEqual("You need to log in!");
});
