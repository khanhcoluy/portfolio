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
