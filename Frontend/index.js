// JavaScript code for form validation
function validateForm() {
  var email = document.forms["loginForm"]["email"].value;
  var password = document.forms["loginForm"]["password"].value;
  if (email == "" || password == "") {
    alert("Email and password must be filled out");
    return false;
  }
}

// JavaScript code for button actions
var customerBtn = document.querySelector(".customer-btn");
var signupLink = document.querySelector(".signup a");
var container = document.querySelector(".container");

customerBtn.addEventListener("click", function () {
  container.classList.add("customer-active");
});

signupLink.addEventListener("click", function () {
  container.classList.add("signup-active");
});

// JavaScript code for cancel button
var cancelBtn = document.querySelector(".cancelbtn");

cancelBtn.addEventListener("click", function () {
  container.classList.remove("customer-active");
  container.classList.remove("signup-active");
});
