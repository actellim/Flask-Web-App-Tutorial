document.addEventListener('DOMContentLoaded', (event) => {
  const closeButtons = document.querySelectorAll('.alert .close');

  closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const alert = button.parentElement;
      alert.style.display = 'none';
    });
  });
});
