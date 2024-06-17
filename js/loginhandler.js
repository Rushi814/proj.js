let password= document.getElementById("password");
password.addEventListener("blur", pwdHandler);

let email = document.getElementById("email");
email.addEventListener("blur", emailHandler);

let form = document.getElementById("login-form");
form.addEventListener("submit", validateLogin);