const passwordInputs = document.querySelector('#password');
const confirmPasswordInputs = document.querySelector('#confirm-password');
const passwordMessage = document.querySelector('#password-msg');

passwordInputs.addEventListener('input', (e) => {
  if (e.target.value === confirmPasswordInputs.value) {
    passwordInputs.classList.remove('error');
    confirmPasswordInputs.classList.remove('error');
    passwordMessage.classList.add('hide');
  } else {
    passwordInputs.classList.add('error');
    confirmPasswordInputs.classList.add('error');
    passwordMessage.classList.remove('hide');
  }
});

confirmPasswordInputs.addEventListener('input', (e) => {
  if (e.target.value === passwordInputs.value) {
    passwordInputs.classList.remove('error');
    confirmPasswordInputs.classList.remove('error');
    passwordMessage.classList.add('hide');
  } else {
    passwordInputs.classList.add('error');
    confirmPasswordInputs.classList.add('error');
    passwordMessage.classList.remove('hide');
  }
});