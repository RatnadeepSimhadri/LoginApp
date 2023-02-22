const usernameInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');
if (window?.xprops?.prefilledEmail) {
  document.querySelector('#email').value = window.xprops.prefilledEmail;
}

function onClick() {
  const email = document.getElementById('email').value;
  if (window?.xprops?.onLogin) {
    window?.xprops?.onLogin(email);
  }
}
