document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector("#button"),
    input = document.querySelector("#tweet-box"),
    flipCardInner = document.querySelector(".flip-card-inner"),
    tweetBoxBack = document.querySelector(".tweet-box-back"),
    tweet = document.querySelector(".tweet"),
    tweeter = document.querySelector(".tweeter");

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.firstname);
  console.log(user.lastname);

  submitButton.disabled = true;

  input.addEventListener("input", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!submitButton.disabled) {
      flipCardInner.classList.add("rotate");
      tweet.innerHTML = input.value;
      tweeter.innerHTML = ` - ${user.firstname} ${user.lastname}`;
    }
  });

  tweetBoxBack.addEventListener("click", (e) => {
    e.preventDefault();
    flipCardInner.classList.remove("rotate");
  });
});
