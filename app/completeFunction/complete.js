// • Develop a function for checking off completed tasks

// CROSS OUT FUNCTIONALITY ON ELEMENT CLICK
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
