document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector("#button"),
    input = document.querySelector("#tweet-box"),
    flipCardInner = document.querySelector(".flip-card-inner"),
    tweetBoxBack = document.querySelector(".tweet-box-back"),
    tweet = document.querySelector(".tweet"),
    tweeter = document.querySelector(".tweeter");

  // Check if user exists in localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("User information not found. Please enter your details first.");
    // Optionally, redirect the user to the details entry page
    return;
  }

  console.log(user.firstname);
  console.log(user.lastname);

  // Initially disable the button
  submitButton.disabled = true;

  // Listen for input changes
  input.addEventListener("input", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();

    // Enable button only if the input has content
    if (inputValue === "") {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });

  // Handle submit button click
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!submitButton.disabled) {
      // Rotate card and display the quote
      flipCardInner.classList.add("rotate");
      tweet.innerHTML = input.value;
      tweeter.innerHTML = ` - ${user.firstname} ${user.lastname}`;
    }
  });

  // Handle card flip back
  tweetBoxBack.addEventListener("click", (e) => {
    e.preventDefault();
    flipCardInner.classList.remove("rotate");
  });
});
