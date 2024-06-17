const qbox = document.getElementById("qbox");
qbox.addEventListener("input", boxcntd);



let counter = document.getElementById("qbox");
counter.addEventListener("blur", countHandler);

let submit = document.getElementById("tuqform");
submit.addEventListener("submit", validatetechbox);