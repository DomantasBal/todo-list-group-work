import { saveTasks } from "./testFunctions";

test("creates new task and saves it to localstorage", () => {
  const newTask = "Eat pizza";
  const createNewTask = saveTasks(newTask);
  expect(createNewTask).toEqual([{ taskName: newTask, favourite: false, id: 0 }]);
});
