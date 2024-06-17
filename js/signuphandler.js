let uname = document.getElementById("username");
let pwd = document.getElementById("password");
let cpwd = document.getElementById("cpassword");
let dob = document.getElementById("dateOfBirth");
let avatar = document.getElementById("profilephoto");
let email = document.getElementById("email");


email.addEventListener("blur", emailHandler);

uname.addEventListener("blur", usernameHandler);
pwd.addEventListener("blur", pwdHandler);
cpwd.addEventListener("blur", cpwdHandler);
dob.addEventListener("blur", dateOfBirthHandler);
avatar.addEventListener("blur", avatarHandler);


let form = document.getElementById("signup-form");
form.addEventListener("submit", validSignup);
