const CONTACT_FORM_SUBMIT_BUTTON_ID = 'contactFormSubmitButton';
const NAME_INPUT_ID = 'name';
const EMAIL_INPUT_ID = 'email';
const EMAIL_MESSAGE_ID = 'msg';
const ENABLED_SUBMIT_BTN_CLASS = 'btn-primary';
const DISABLED_SUBMIT_BTN_CLASS = 'btn-secodnary';

setTimeout(() => {
  const submit = document.getElementById(CONTACT_FORM_SUBMIT_BUTTON_ID);
  submit.addEventListener('click', () => sendEmail());
}, 1000);


function validate() {
  const areFieldsCorrect = [validateName(), validateEmail(), validateMessage()]
    .every(isValid => isValid);

  if (areFieldsCorrect) {
    enableSubmitButton();
  } else {
    disableSubmitButton();
  }
}

function validateName() {
  return !isEmpty(document.getElementById(NAME_INPUT_ID).value);
}

function validateEmail() {
  const email = document.getElementById(EMAIL_INPUT_ID);
  if (isEmpty(email.value)) {
    return false;
  }
  return !email.validity.typeMismatch;
}

function validateMessage() {
  return !isEmpty(document.getElementById(EMAIL_MESSAGE_ID).value);
}

function isEmpty(value) {
  return !value;
}

function disableSubmitButton() {
  const submit = document.getElementById(CONTACT_FORM_SUBMIT_BUTTON_ID);
  submit.disabled = true;
  submit.classList.remove(ENABLED_SUBMIT_BTN_CLASS);
  submit.classList.add(DISABLED_SUBMIT_BTN_CLASS);
}

function enableSubmitButton() {
  const submit = document.getElementById(CONTACT_FORM_SUBMIT_BUTTON_ID);
  submit.disabled = false;
  submit.classList.remove(DISABLED_SUBMIT_BTN_CLASS);
  submit.classList.add(ENABLED_SUBMIT_BTN_CLASS);
}


function sendEmail() {
  console.log('trying to send email...');
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "bc.smtp.proxy@gmail.com",
    Password : "61C7791CE929D048D591CC6940BA0D78B755",
    To : 'michal.mirek98@gmail.com',
    From : "michal.mirek98@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

