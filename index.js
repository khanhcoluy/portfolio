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
      // Reset the form fields
      document.getElementById('contact-form').reset();
      alert('Your message has been sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(
        'An error occurred while sending the message. Please try again later.'
      );
    });
}
PageTransition();
