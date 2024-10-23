document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const passError = document.getElementById("pass-error");
  const fnError = document.getElementById("fn-error");
  const lnError = document.getElementById("ln-error");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation flags
    let isValid = true;

    // Clear all existing error messages
    clearError(fnError);
    clearError(lnError);
    clearError(passError);

    // Validate first name
    if (firstName === "") {
      isValid = false;
      displayError(fnError, "First name cannot be empty.");
    } else if (firstName.length < 2) {
      isValid = false;
      displayError(fnError, "First name must be at least 2 characters long.");
    }

    // Validate last name
    if (lastName === "") {
      isValid = false;
      displayError(lnError, "Last name cannot be empty.");
    } else if (lastName.length < 2) {
      isValid = false;
      displayError(lnError, "Last name must be at least 2 characters long.");
    }

    // Validate password
    if (password === "") {
      isValid = false;
      displayError(passError, "Password cannot be empty.");
    } else if (password.length < 8) {
      isValid = false;
      displayError(passError, "Password must be at least 8 characters long.");
    }

    // If all fields are valid, proceed with login check
    if (isValid) {
      // Fetch stored user details from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      // Check if the user exists
      if (storedUser) {
        // Check if the entered details match the stored user
        if (
          storedUser.firstname === firstName &&
          storedUser.lastname === lastName &&
          storedUser.password === password
        ) {
          passError.style.display = "none";
          location.assign("./index1.html"); // Redirect to another page if needed
        } else {
          displayError(
            passError,
            "Invalid first name, last name, or password!"
          );
        }
      } else {
        displayError(passError, "No account found. Please sign up first!");
      }
    }
  });

  // Password visibility toggle
  document
    .getElementById("toggle-password")
    .addEventListener("click", function () {
      const passwordField = document.getElementById("password");

      if (passwordField.type === "password") {
        passwordField.type = "text"; // Show the password
        this.innerHTML = "&#128064;"; // Change the icon to open eye
      } else {
        passwordField.type = "password"; // Hide the password
        this.innerHTML = "&#128065;"; // Change the icon back to closed eye
      }
    });

  // Helper functions to display and clear error messages
  function displayError(node, message) {
    node.style.display = "block";
    node.textContent = message;
  }

  function clearError(node) {
    node.style.display = "none";
  }
});
