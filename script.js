document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-button");
  const loginError = document.getElementById("login-error");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Fetch stored user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the user exists
    if (storedUser) {
      // Check if the entered details match the stored user
      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        loginError.style.display = "none";
        alert("Login successful! Welcome back, " + storedUser.firstname + "!");
        // Redirect to another page if needed, e.g., window.location.href = "dashboard.html";
      } else {
        loginError.style.display = "block";
        loginError.textContent = "Invalid username or password!";
      }
    } else {
      loginError.style.display = "block";
      loginError.textContent = "No account found. Please sign up first!";
    }

    document.getElementById("toggle-password").addEventListener("click", function () {
  const passwordField = document.getElementById("password");

  if (passwordField.type === "password") {
    passwordField.type = "text"; // Show the password
    this.innerHTML = "&#128064;"; // Change the icon to a different eye (open eye emoji)
  } else {
    passwordField.type = "password"; // Hide the password
    this.innerHTML = "&#128065;"; // Change the icon back (closed eye emoji)
  }
});
  });
  document
    .getElementById("toggle-password")
    .addEventListener("click", function () {
      const passwordField = document.getElementById("password");

      if (passwordField.type === "password") {
        passwordField.type = "text"; // Show the password
        this.innerHTML = "&#128064;"; // Change the icon to a different eye (open eye emoji)
      } else {
        passwordField.type = "password"; // Hide the password
        this.innerHTML = "&#128065;"; // Change the icon back (closed eye emoji)
      }
    });

});
