

function validateName(name) {
	let nameRegEx = /^[a-zA-Z]+$/;
	if (nameRegEx.test(name)) { return true; }
	else { return false }

}

function validateChoice(selecting){
	if(selecting === " "){
		return true;
	}
	else{
		return false;
	}
	
}

function validateEmail(email) {
	let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	if (emailRegEx.test(email)) {
		return true;
	}
	else {
		return false;
	}
}


function validatePassword(password) {
	let passwordRegEx = /^[a-zA-Z0-9]{6}$/;

	if (passwordRegEx.test(password)) {
		return true;
	}
	else {
		return false;
	}

}

function validateUsername(username) {
	let usernameRegEx = /^[a-zA-Z0-9_]+$/;

	if (usernameRegEx.test(username)) {
		return true;
	}
	else {
		return false;
	}
}

function validatedateOfBirth(dateOfBirth) {
	let dateOfBirthRegEx = /^\d{4}[-]\d{2}[-]\d{2}$/;

	if (dateOfBirthRegEx.test(dateOfBirth)) {
		return true;
	}
	else {
		return false;
	}
}

function validateAvatar(avatar) {
	let avatarRegEx = /^\d{4}[-]\d{2}[-]\d{2}$/;

	if (avatarRegEx.test(avatar)) {
		return true;
	}
	else {
		return false;
	}
}


///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////LOGIN/////PAGE///////////////////////////////////////
function validateLogin(event) {


	let email = document.getElementById("email");
	let errr_msg = document.getElementById("password").nextElementSibling;
	let emar_msg = document.getElementById("email").nextElementSibling;
	let pwd = document.getElementById("password");
	let formIsValid = true;

	if (!validateEmail(email.value)) {
		emar_msg.previousElementSibling.classList.add("invalid");
		emar_msg.classList.remove("hidden");
		formIsValid = false;
	}
	else {

		emar_msg.previousElementSibling.classList.remove("invalid");
		emar_msg.classList.add("hidden");
		formIsValid = true;
	}


	if (!validatePassword(pwd.value)) {

		errr_msg.previousElementSibling.classList.add("invalid");
		errr_msg.classList.remove("hidden");
		formIsValid = false;
	}
	else {
		errr_msg.previousElementSibling.classList.remove("invalid");
		errr_msg.classList.add("hidden");
		formIsValid = true;
	}

	if (formIsValid === false) {


		event.preventDefault();

	}
	else {
		console.log("validation successful, sending data to the server");
	}
	event.preventDefault();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////sign up/////////////////////////////////////////////////////
function emailHandler(event) {
	let eemail = event.target;
	if (validateEmail(eemail.value)) {
		eemail.classList.remove("invalid");
		eemail.nextElementSibling.classList.add("hidden");
	}
	else {
		eemail.classList.add("invalid");
		eemail.nextElementSibling.classList.remove("hidden");
	}
}

function choiceHandler(event){
	let selecting = event.target;
	if(validateChoice(selecting.value)){
		selecting.classList.remove("invalid");
		selecting.nextElementSibling.classList.add("hidden");
	}
	else {
		selecting.classList.remove("invalid");
		selecting.nextElementSibling.classList.add("hidden");
	}
}
function fNameHandler(event) {
	let fname = event.target;


	if (validateName(fname.value)) {
		console.log("\t- first name is: " + fname);
		fname.classList.remove("invalid");
		fname.nextElementSibling.classList.add("hidden");
	}
	else {

		fname.classList.add("invalid");
		fname.nextElementSibling.classList.remove("hidden");
		return false;
	}
}
function lNameHandler(event) {
	let lname = event.target;


	if (validateName(lname.value)) {
		console.log("\t- last name is: " + lname);
		lname.classList.remove("invalid");
		lname.nextElementSibling.classList.add("hidden");
	}
	else {
		console.log("\t- last name is not valid");
		lname.classList.add("invalid");
		lname.nextElementSibling.classList.remove("hidden");
	}
}

function pwdHandler(event) {
	let pwd = event.target;


	if (validatePassword(pwd.value)) {
		pwd.classList.remove("invalid");
		pwd.nextElementSibling.classList.add("hidden");
	}
	else {
		pwd.classList.add("invalid");
		pwd.nextElementSibling.classList.remove("hidden");
		return false;

	}
}

function cpwdHandler(event) {
	let pwd = password.value;

	let cpwd = event.target.value;
	let ccpwd = event.target;

	if (cpwd === pwd) {
		console.log("\t- cpassword  is: " + cpwd);
		ccpwd.classList.remove("invalid");
		ccpwd.nextElementSibling.classList.add("hidden");
	}
	else {
		console.log("\t- cpassword  is not matching. ");
		ccpwd.classList.add("invalid");
		ccpwd.nextElementSibling.classList.remove("hidden");
		return false;
	}
}

function avatarHandler(event) {
	let avatar = event.target;


	if (validateAvatar(avatar.value)) {

		avatar.classList.remove("invalid");
		avatar.nextElementSibling.classList.add("hidden");
	}
	else {
		avatar.classList.add("invalid");
		avatar.nextElementSibling.classList.remove("hidden");
	}
}

function usernameHandler(event) {

	let uname = event.target;
	if (validateUsername(username.value)) {

		uname.classList.remove("invalid");
		uname.nextElementSibling.classList.add("hidden");
	}
	else {

		uname.classList.add("invalid");
		uname.nextElementSibling.classList.remove("hidden");
	}
}
function dateOfBirthHandler(event) {

	let dateOfBirth = event.target;

	if (validatedateOfBirth(dateOfBirth.value)) {
		dateOfBirth.classList.remove("invalid");
		dateOfBirth.nextElementSibling.classList.add("hidden");
	}
	else {
		dateOfBirth.classList.add("invalid");
		dateOfBirth.nextElementSibling.classList.remove("hidden");
		return false;
	}
}


//////////////////////////////////validating signup//////////////////////////////
function validSignup(event) {

	let fname = document.getElementById("fname");
	let formIsValid = true;
	
		let eemail = document.getElementById("email");
		let emaill  = document.getElementById("error-text-ename");

	
	if (!validateEmail(email.value)) {
		formIsValid = false;
		emaill.previousElementSibling.classList.add("invalid");
		emaill.classList.remove("hidden");
	}
	else{
	    emaill.previousElementSibling.classList.remove("invalid");
       emaill.classList.add("hidden");
	}

	

	
	let password = document.getElementById("password");
		let passwordd  = document.getElementById("error-text-password");

	if (!validatePassword(password.value)) {
		formIsValid = false;
		passwordd.previousElementSibling.classList.add("invalid");
		passwordd.classList.remove("hidden");	}
	else{
		passwordd.previousElementSibling.classList.remove("invalid");
		passwordd.classList.add("hidden");
	}


	let cpassword = document.getElementById("cpassword");
	let cpasswordd = document.getElementById("error-text-password");
	if (!validatePassword(cpassword.value)) {
		formIsValid = false;
		console.log("confirm password is not valid");
		cpasswordd.previousElementSibling.classList.add("invalid");
       cpasswordd.classList.remove("hidden");
	}
    else{
		cpasswordd.previousElementSibling.classList.remove("invalid");
       cpasswordd.classList.add("hidden");
	}

	let username = document.getElementById("username");
	let usernamee = document.getElementById("error-text-uname");
	if (!validateUsername(username.value)) {
		formIsValid = false;
		console.log("username is not valid");
		usernamee.previousElementSibling.classList.add("invalid");
       usernamee.classList.remove("hidden");
	}
	else{
		usernamee.previousElementSibling.classList.remove("invalid");
       usernamee.classList.add("hidden");
	}

	let dob = document.getElementById("dateOfBirth");
	let dobb = document.getElementById("error-text-dateOfBirth");
	if (!validatedateOfBirth(dob.value)) {
		formIsValid = false;
		console.log("date of birth is not valid");
		dobb.previousElementSibling.classList.add("invalid");
		dobb.classList.remove("hidden");
	}

	else{
		dobb.previousElementSibling.classList.remove("invalid");
		dobb.classList.add("hidden");
	}


	if (formIsValid === false) {
		event.preventDefault();
	}

	else {
		console.log("validation successful, sending data to the server");
	}
	event.preventDefault();

}





////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////user///que///page///////////////////////////////////////////


function validateCount(count) {

	if (count.value.length > 5) {
		if (count.value.length <= 1500) {

			return true;

		}
	}
	else {
		return false;
	}

}

function boxcntd(event) {


	const qboxx = document.getElementById("qbox").value.length;
	let count = qboxx;


	countnum.innerHTML = count;
	remaining.innerHTML = 1500 - count;

}
function countHandler(event) {
	let count = event.target;
	const qbox1 = document.getElementById("qbox");
	let remaiining = document.getElementById("remaining").nextElementSibling;
	if (validateCount(count)) {
		qbox.classList.remove("invalid");
		remaiining.classList.add("hidden");
		return true;
	}
	else {
		qbox.classList.add("invalid");
		remaiining1.classList.remove("hidden");
		return false;
	}
}


function validatequebox(event) {
	let formIsValid = true;

	let qbox = document.getElementById("qbox");
	let remaining1 = document.getElementById("error-text-password");


	if (!validateCount(qbox)) {
		qbox.classList.add("invalid");
		remaining1.classList.remove("hidden");

		formIsValid = false;

	}
	else {
		qbox.classList.remove("invalid");
		remaining1.classList.add("hidden");
	}

	if (formIsValid === false) {
		event.preventDefault();
	}
	else {
		console.log("Validation Successful , sending data to the server");
	}

}
