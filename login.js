const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

usernameInput.addEventListener("input", () => {
  if (usernameInput.validity.valid) {
    usernameInput.classList.remove("invalid");
  } else {
    usernameInput.classList.add("invalid");
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.validity.valid) {
    passwordInput.classList.remove("invalid");
  } else {
    passwordInput.classList.add("invalid");
  }
});

submitButton.addEventListener("click", (event) => {
  if (!usernameInput.validity.valid || !passwordInput.validity.valid) {
    event.preventDefault();
  }
});
