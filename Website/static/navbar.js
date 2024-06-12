document.addEventListener('DOMContentLoaded', (event) => {
  const toggler = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('.navbar-collapse');

  toggler.addEventListener('click', (event) => {
    nav.classList.toggle('show');
  });
});