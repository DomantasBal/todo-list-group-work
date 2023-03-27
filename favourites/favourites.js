let todos = JSON.parse(localStorage.getItem("todo-list"));
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

// Check if user is logged in

const userLogin = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const loggedUser = users.filter((user) => user.username === username.value && user.password === password.value);
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
};

// Add to-do task to favourites
const addToFavourites2 = (id) => {
  if (loggedUser.length > 0) {
    todos[id].favourite = true;
    localStorage.setItem("todo-list", JSON.stringify(todos));
  } else {
    alert("You need to log in!");
  }
};
