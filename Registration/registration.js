function store() {
  // var name = document.getElementById("name");
  // var pw = document.getElementById("pw");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (username.value.length == 0) {
    alert("Please fill in email!");
  } else if (pw.value.length == 0) {
    alert("Please fill in password!");
  } else if (username.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password!");
  } else if (pw.value.length < 8) {
    alert("Atleast 8 symbols!");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number!");
  } else if (!pw.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter!");
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter!");
  } else {
    // localStorage.setItem("name", name.value);
    // localStorage.setItem("pw", pw.value);
    saveUser();
    location.href = "../Login/login.html";
    alert("Your account has been created! :)");
  }
}

// Function to save registered user
const username = document.getElementById("name");
const pw = document.getElementById("pw");

const saveUser = () => {
  let users;
  let user = { username: username.value, password: pw.value };
  console.log(user);
  if (!localStorage["users"]) users = [];
  else users = JSON.parse(localStorage["users"]);
  if (!(users instanceof Array)) users = [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
