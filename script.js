const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
});

const registerForm = document.querySelector('#register-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const newUsernameInput = document.querySelector('#new-username');
const newPasswordInput = document.querySelector('#new-password');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const newUsername = newUsernameInput.value;
  const newPassword = newPasswordInput.value;
});
 

let Shrek1 = 'Welcome to the club Buddy!';
alert(Shrek1);