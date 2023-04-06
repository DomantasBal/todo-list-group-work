let counter = 0;
function showEditMenu(selected) {
  counter++;
  counter % 2 == 1 ? openEditMenu(selected) : closeEditMenu(selected);
}

// OPENS EDIT MENU - SHOWS EDIT ELEMENTS
function openEditMenu(selected) {
  let taskItem = selected.closest(".task-list__item");
  let taskMenu = taskItem.querySelector(".task-menu");

  taskMenu.style.opacity = 1;

  let xMark = document.createElement("i");
  xMark.classList.add("fa-solid", "fa-xmark", "close-icon");
  xMark.setAttribute("onclick", "showEditMenu(this)");

  selected.replaceWith(xMark);
}

// CLOSES EDIT MENU - HIDES EDIT ELEMENTS
function closeEditMenu(selected) {
  let taskItem = selected.closest(".task-list__item");
  let taskMenu = taskItem.querySelector(".task-menu");

  taskMenu.style.opacity = 0;

  let dotMenu = document.createElement("i");
  dotMenu.classList.add("fa-solid", "fa-ellipsis", "dot-menu");
  dotMenu.setAttribute("onclick", "showEditMenu(this)");

  selected.replaceWith(dotMenu);
}
