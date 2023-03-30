const userName = document.getElementById("userName");
const userPw = document.getElementById("userPw");

function check() {
  const users = JSON.parse(localStorage.getItem("users"));
  const loggedUser = users.filter((user) => user.username === userName.value && user.password === userPw.value);
  loggedUser.length > 0 ? localStorage.setItem("loggedUser", JSON.stringify(loggedUser)) : alert("We couldn't find such user :(");

  // var storedName = localStorage.getItem("name");
  // var storedPw = localStorage.getItem("pw");

  // var userName = document.getElementById("userName");
  // var userPw = document.getElementById("userPw");
  // var userRemember = document.getElementById("rememberMe");

  // if (userName.value == storedName && userPw.value == storedPw) {
  //   location.href = "/index.html";
  //   alert("You have successfully logged in!");
  // } else {
  //   alert("Error on login, try again :(");
  // }
}
