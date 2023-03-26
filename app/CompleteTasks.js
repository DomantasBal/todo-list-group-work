// • Develop a function for checking off completed tasks
const taskList = document.querySelector(".task-list");
const checkboxes = document.querySelectorAll(".checkbox");
const textOutputs = document.querySelectorAll(".task-list__text-output");

// NEEDS TO CHECK THE STATE OF BOXES CHECKED
// OR UNCHECKED ON WINDOW LOAD TO ADD OR REMOVE CLASSES
// LATER WILL STORE THE CHECKED OR UNCHECKED STATES IN LOCAL STORAGE

// FUNCTIONALITY DRAFT - WILL FINISH LATER

// window.onload = checkboxState();
// function checkboxState() {
//   checkboxes.forEach((checkbox) => {
//     console.log(checkbox.checked);
//   });
// }

// STILL HAVE BUG WITH CROSSING OUT ELEMENTS WHEN DONE
// WHEN CLICKED ON UL CONTAINER IR CROSSES OUT ALL ELEMENTS AT ONCE
// WHEN CLICKED ON 3DOT MENU IT CROSSES OUT 3DOT MENU

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("click", () => {
    checkbox.checked
      ? textOutputs[index].classList.add("crossOut")
      : textOutputs[index].classList.remove("crossOut");
  });
});

// LINE THROUGH FUNCTIONALITY
let clickCounter = 0;
taskList.addEventListener("click", (event) => {
  // CLICK ON TEXT TO CROSS OUT FUNCTIONALITY
  clickCounter++;
  clickCounter % 2 == 1
    ? event.target.classList.add("crossOut")
    : event.target.classList.remove("crossOut");
});
