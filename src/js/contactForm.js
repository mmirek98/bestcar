const CONTACT_FORM_SUBMIT_BUTTON_ID = 'contactFormSubmitButton';
const NAME_INPUT_ID = 'name';
const EMAIL_INPUT_ID = 'email';
const EMAIL_MESSAGE_INPUT_ID = 'msg';
const PHONE_NUMBER_INPUT_ID = 'phone-number';
const MESSAGE_TOPIC_INPUT_ID = 'msg-topic';
const ENABLED_SUBMIT_BTN_CLASS = 'btn-primary';
const DISABLED_SUBMIT_BTN_CLASS = 'btn-secodnary';

setTimeout(() => {
  const submit = document.getElementById(CONTACT_FORM_SUBMIT_BUTTON_ID);
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    sendEmail();
  });
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
  return !isEmpty(document.getElementById(EMAIL_MESSAGE_INPUT_ID).value);
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
  const data = retrieveData();
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "bc.smtp.proxy@gmail.com",
    Password : "34539A0CC99F2026D59B46CC74BD47B9AB0D",
    To : 'bc.smtp.proxy@gmail.com',
    From : "bc.smtp.proxy@gmail.com",
    Subject : `[Formularz kontaktowy] ${data.topic}`,
    Body : `<div style="background-color: #292724; color: #FC0; padding: 20px; margin-bottom: 20px;">
      <div><span>Email kontaktowy: ${data.email},</span></div>
      <div><span>Imię i nazwisko: ${data.name},</span></div>
      <div><span>Nr telefonu (+48): ${data.phone},</span></div>
    </div>
    <div>Treść wiadomości:</div>
    <span style="font-style: italic;">${data.message}</span>
    `
  }).then(
    message => {
      if (message === 'OK') {
        console.log('Send email successfuly');
        alert('Dziękujemy za kontakt. Skontaktujemy się z Tobą w przeciągu 24 godzin!')
        return;
      }
      console.error('Failed to send email: ', message);
      fbq('trackCustom', 'FailedToSendEmail', { error: message });
    }
  );
}

function retrieveData() {
  return {
    name: document.getElementById(NAME_INPUT_ID).value,
    email: document.getElementById(EMAIL_INPUT_ID).value,
    phone: document.getElementById(PHONE_NUMBER_INPUT_ID).value,
    topic: document.getElementById(MESSAGE_TOPIC_INPUT_ID).value,
    message: document.getElementById(EMAIL_MESSAGE_INPUT_ID).value
  }
}
