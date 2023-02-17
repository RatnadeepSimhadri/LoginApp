const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

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
