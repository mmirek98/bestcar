attachMetaEvents();

function attachMetaEvents() {
  addMessengerButtonEvent();
  addPhoneButtonEvent();
  addContactFormButton();
}
 
function addMessengerButtonEvent() {
  const MESSENGER_BUTTON_ID = 'contactMessengerButton';
  document.getElementById(MESSENGER_BUTTON_ID).addEventListener('click', () => {
    fbq('trackCustom', 'MessengerButton');
  });
}

function addPhoneButtonEvent() {
  const PHONE_BUTTON_ID = 'contactPhoneButton';
  document.getElementById(PHONE_BUTTON_ID).addEventListener('click', () => {
    fbq('trackCustom', 'PhoneButton');
  });
}

function addContactFormButton() {
  const CONCACT_FORM_BUTTON = 'contactFormSubmitButton';
  document.getElementById(CONCACT_FORM_BUTTON).addEventListener('click', () => {
    fbq('trackCustom', 'ContactFormButton');
  });
}