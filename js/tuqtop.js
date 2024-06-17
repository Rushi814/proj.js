function validateCount(count) {

  if (count.value.length > 1) {
    if (count.value.length <= 1500) {

      return true;

    }
  }
  else {

    return false;
  }

}

function boxcntd(event) {

  const qbox = document.getElementById("qbox").value.length;
  const number = qbox;

  countnum.innerHTML = number;
  remaining.innerHTML = 1500 - number;

}
function countHandler(event) {

  let count = event.target;
  const qbox = document.getElementById("qbox");
  let remaining = document.getElementById("remaining").nextElementSibling;
  if (validateCount(count)) {
    qbox.classList.remove("invalid");
    remaining.classList.add("hidden");

    return true;
  }
  else {
    qbox.classList.add("invalid");
    remaining.classList.remove("hidden");

    return false;
  }
}


function validatetechbox(event) {
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