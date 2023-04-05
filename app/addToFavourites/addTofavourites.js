let loggedUser2 = JSON.parse(localStorage.getItem("loggedUser"));

export const addToFavourites = (icon, id) => {
  console.log();
  if (loggedUser2 && loggedUser2.length > 0) {
    if (todos[id].favourite === true) {
      todos[id].favourite = false;
      facIconChange(icon, id);
    } else {
      todos[id].favourite = true;
      facIconChange(icon, id);
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
  } else {
    alert("You need to log in!");
  }
};

function facIconChange(icon, id) {
  console.log(id);
  if (todos[id].favourite === false) {
    icon.classList.remove("fa-solid", "fa-heart", "favorite-icon");
    icon.classList.add("fa-regular", "fa-heart", "favorite-icon");
  } else {
    icon.classList.remove("fa-regular", "fa-heart", "favorite-icon");
    icon.classList.add("fa-solid", "fa-heart", "favorite-icon");
  }
}
