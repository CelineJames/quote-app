document.addEventListener("DOMContentLoaded", function () {
  const fName = document.getElementById("fname"),
    lName = document.getElementById("lname"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("cpassword"),
    form = document.querySelector("form");

  const fNameError = document.querySelector(".fn-error");
  const lNameError = document.querySelector(".ln-error");
  const passwordError = document.querySelector(".password-error");
  const cpasswordError = document.querySelector(".cpassword-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate first name field
    if (fName.value.trim() === "") {
      fNameError.innerHTML = "Please fill in your first name.";
      fName.style.border = "1px solid red";
      return;
    } else if (fName.value.includes(" ")) {
      fNameError.innerHTML = "First name cannot contain spaces.";
      fName.style.border = "1px solid red";
      return;
    } else if (fName.value.trim().length < 2) {
      fNameError.innerHTML = "First name must be at least 2 characters long.";
      fName.style.border = "1px solid red";
      return;
    } else {
      fNameError.innerHTML = "";
      fName.style.border = "none";
    }

    // Validate last name field
    if (lName.value.trim() === "") {
      lNameError.innerHTML = "Please fill in your last name.";
      lName.style.border = "1px solid red";
      return;
    } else if (lName.value.includes(" ")) {
      lNameError.innerHTML = "Last name cannot contain spaces.";
      lName.style.border = "1px solid red";
      return;
    } else if (lName.value.trim().length < 2) {
      lNameError.innerHTML = "Last name must be at least 2 characters long.";
      lName.style.border = "1px solid red";
      return;
    } else {
      lNameError.innerHTML = "";
      lName.style.border = "none";
    }

    // Validate passwords
    const passwordd = password.value;
    const confirmPasswordd = confirmPassword.value;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(passwordd)) {
      passwordError.innerHTML =
        "Password must be at least 8 characters long, contain a number, an uppercase letter, a lowercase letter, and a special character.";
      password.style.border = "1px solid red";
      return;
    } else {
      passwordError.innerHTML = "";
      password.style.border = "none";
    }

    // Confirm Password validation
    if (passwordd !== confirmPasswordd) {
      cpasswordError.innerHTML = "Passwords do not match.";
      confirmPassword.style.border = "1px solid red";
      return;
    } else {
      cpasswordError.innerHTML = "";
      confirmPassword.style.border = "none";
    }

    // If all validations pass, store user details
    let userDetails = {
      firstname: fName.value,
      lastname: lName.value,
      password: password.value,
    };

    storeUserDetails(userDetails);
  });

  // Password toggle functionality
  document
    .getElementById("toggle-password")
    .addEventListener("click", function () {
      if (password.type === "password") {
        password.type = "text"; // Show the password
        this.innerHTML = "&#128064;"; // Change the icon to open eye
      } else {
        password.type = "password"; // Hide the password
        this.innerHTML = "&#128065;"; // Change the icon back to closed eye
      }
    });

  document
    .getElementById("toggle-confirm-password")
    .addEventListener("click", function () {
      if (confirmPassword.type === "password") {
        confirmPassword.type = "text"; // Show the confirm password
        this.innerHTML = "&#128064;"; // Change the icon to open eye
      } else {
        confirmPassword.type = "password"; // Hide the confirm password
        this.innerHTML = "&#128065;"; // Change the icon back to closed eye
      }
    });

  function storeUserDetails(data) {
    localStorage.setItem("user", JSON.stringify(data));
    location.assign("./index1.html"); // Redirect after storing details
  }
});
