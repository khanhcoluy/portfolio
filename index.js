const sections = document.querySelectorAll('.section');
const buttonControlsBars = document.querySelectorAll('.controls');
const controlButtons = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransition() {
  controlButtons.forEach((controlButton) => {
    controlButton.addEventListener('click', () => {
      document.querySelector('.active-btn').classList.remove('active-btn');
      controlButton.classList.add('active-btn');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(controlButton.dataset.id).classList.add('active');
    });
  });
}
PageTransition();

// send email via contact form
function sendEmail(e) {
  e.preventDefault();
  emailjs.init('cTy18X7QbqztVR9aS');
  // Fetch the user's input from the form

  // Set EmailJS service ID, template ID, and user ID
  const serviceID = 'service_orweqzm';
  const templateID = 'template_sczuxy8';

  // Get the form values
  var templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  // Send the email using EmailJS
  emailjs
    .send(serviceID, templateID, templateParams)
    .then(() => {
      showToastr('success', 'Your message has been sent!');
      document.getElementById('contact-form').reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      showToastr(
        'error',
        'Oops! An error occurred while sending your message.'
      );
    });
}

function showToastr(type, message) {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 3000,
    extendedTimeOut: 1000,
  };

  if (type === 'success') {
    toastr.success(message);
  } else if (type === 'error') {
    toastr.error(message);
  }
}

const themeToggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;

themeToggleCheckbox.addEventListener('change', () => {
  body.classList.toggle('light-theme');
});
