
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => nav?.classList.toggle('open'));

document.querySelectorAll('.dropdown > button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.innerWidth <= 1000) {
      e.preventDefault();
      const parent = btn.closest('.dropdown');
      parent?.classList.toggle('open');
    }
  });
});
