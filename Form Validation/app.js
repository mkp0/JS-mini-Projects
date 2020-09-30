const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("Password");
const confirm_password = document.getElementById("Confirm-Password");
const email = document.getElementById("Email");

function showError(x, y) {
  const parentE = x.parentNode;
  parentE.classList.add("failure");
  const parentS = parentE.querySelector("small");
  parentS.innerText = y;
}

function showSuccess(x) {
  const parentE = x.parentNode;
  parentE.classList.remove("failure");
  parentE.classList.add("success");
}

function checkRequired(arr) {
  arr.forEach((val, ind) => {
    if (val.value === "") {
      showError(val, val.id + " Required");
    } else {
      showSuccess(val);
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, password, confirm_password, email]);

  if (password.value !== confirm_password.value) {
    showError(confirm_password, "Password not match with confirm password");
  } else {
    showSuccess(confirm_password);
  }

  if (password.value.length < 6) {
    showError(password, "Password length is smaller than 6");
  } else {
    showSuccess(password);
  }

  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email.value) == false) {
    showError(email, "Email is Not Valid");
  } else {
    showSuccess(email);
  }
});
