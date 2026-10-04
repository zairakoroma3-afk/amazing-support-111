
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav');

toggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

document.querySelectorAll('.dropdown > button').forEach(button => {
  button.addEventListener('click', (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      const parent = button.closest('.dropdown');
      parent?.classList.toggle('open');
    }
  });
});
