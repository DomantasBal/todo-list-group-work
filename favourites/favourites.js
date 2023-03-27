let todos = JSON.parse(localStorage.getItem("todo-list"));

// Check if user is logged in

const userLogin = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const loggedUser = users.filter((user) => user.username === username.value && user.password === password.value);
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
};

// Add to-do task to favourites
const addToFavourites2 = (id) => {
  todos[id].favourite = true;
  localStorage.setItem("todo-list", JSON.stringify(todos));
};
