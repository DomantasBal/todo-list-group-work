let todos = JSON.parse(localStorage.getItem("todo-list"));

// Check if user is logged in

const userLogin = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const loggedUser = users.filter((user) => user.username === username.value && user.password === password.value);
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
};
