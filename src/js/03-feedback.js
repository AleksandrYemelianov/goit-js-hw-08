import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
const FEEDBACK_KEY = "feedback-form-state";

formFeedback.addEventListener("input", throttle(getValueInput, 500));
const { email, message } = formFeedback.elements;
function getValueInput() {
  
  const currentValueUser = {
    email: email.value.trim(),
    message: message.value.trim(),
  }

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(currentValueUser));
}

formFeedback.addEventListener("submit", onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();

  const userFeedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY))
  console.log(userFeedback);

  localStorage.removeItem(FEEDBACK_KEY);

  formFeedback.reset()
}

window.addEventListener("load", onLoadInputValue);
function onLoadInputValue() {
  const getInputValueStorage = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};

  email.value = getInputValueStorage.email || '';
  message.value = getInputValueStorage.message || '';
}





