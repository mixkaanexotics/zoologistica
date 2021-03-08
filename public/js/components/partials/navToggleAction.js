const toggleButton = document.getElementsByClassName('burger')[0];
const navbarLinks = document.getElementsByClassName('nav__links')[0];

toggleButton.addEventListener('click', () => {
  console.log('object');
  navbarLinks.classList.toggle('toggle-active');
});