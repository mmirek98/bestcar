attachMetaEvents();

function attachMetaEvents() {
  addMessengerButtonEvent();
  addPhoneButtonEvent();
}
 
function addMessengerButtonEvent() {
  const MESSENGER_BUTTON_ID = 'contactMessengerButton';
  document.getElementById(MESSENGER_BUTTON_ID).addEventListener('click', () => {
    console.log('tracking msg button, fbq=', fbq);
    fbq('trackCustom', 'MessengerButton');
  });
}

function addPhoneButtonEvent() {
  const PHONE_BUTTON_ID = 'contactPhoneButton';
  document.getElementById(PHONE_BUTTON_ID).addEventListener('click', () => {
    console.log('tracking call btn, fbq=', fbq);
    fbq('trackCustom', 'PhoneButton');
  });
}