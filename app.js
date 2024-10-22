// const {
//   LoadableContext,
// } = require("next/dist/shared/lib/loadable-context.shared-runtime");

// const username = "SD",
//   password = "lookwell";

// const userDetails = [
//   {
//     id: 1,
//     username,
//     password,
//   },
// ];

// localStorage.setItem("users", JSON.stringify(userDetails));

// // localStorage.setItem accepts key and value

// var storedUserDetails = JSON.parse(localStorage.getItem("users"));

// if (storedUserDetails) {
//   storedUserDetails.push({
//     id: 2,
//     username: "Username 2",
//     password: "password 2",
//   });
//   localStorage.setItem("users", JSON.stringify(storedUserDetails));
// }

// storedUserDetails = JSON.parse(localStorage.getItem("users"));

// localStorage.setItem("users", JSON.stringify(userDetails)); // string null
// let user = JSON.parse(localStorage.getItem("users"));

// console.log(userDetails);
// console.log(user);

document.addEventListener("DOMContentLoaded", function () {
    const fName = document.getElementById("fname"),
    lName = document.getElementById("lname"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("cpassword"),
    form = document.querySelector("form");

  // error messsages

  const fNameError = document.querySelector(".fn-error");
  const lNameError = document.querySelector(".ln-error");
  const passwordError = document.querySelector(".password-error");
  const cpasswordError = document.querySelector(".cpassword-error");
  console.log(fNameError);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validate firstName field

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
    // validate lastName field
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

    // validate passwoeds fields

    const passwordd = document.getElementById("password").value;
    const confirmPasswordd = document.getElementById("cpassword").value;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(passwordd)) {
      passwordError.innerHTML =
        "Password must be at least 8 characters long, contain a number, an uppercase letter, a lowercase letter, and a special character.";
      password.style.border = "1px solid red";
      return;
    } else {
      cpasswordError.innerHTML = "";
      confirmPassword.style.border = "none";
    }

    // Confirm Password validation

    if (passwordd !== confirmPasswordd) {
      cpasswordError.innerHTML = "Passwords do not match.";
      confirmPassword.style.border = "1px solid red";
      return;
    } else {
      cpasswordError.innerHTML = "";
      confirmPassword.style.border = "none";

      // password is complete
      let userDetails = {
        firstname: fName.value,
        lastname: lName.value,
        password: password.value,
      };
    
      storeUserDetails(userDetails);
    }
  });

  

  function storeUserDetails(data) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        password: data.password,
      })
    );
    location.assign("./index.html");
  }
});


// chceck user authentication
