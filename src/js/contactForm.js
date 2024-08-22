setTimeout(() => {
  const submit = document.getElementById('contactFormSubmitButton');
  submit.addEventListener('click', () => sendEmail());
}, 1000);



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

