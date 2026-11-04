const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-link')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));
document.getElementById('year').textContent = new Date().getFullYear();

const roles = ['Post-Quantum Cryptography', 'Hardware Security', 'Cryptographic Engineering', 'FPGA-Based Security'];
let roleIndex = 0;
const roleElement = document.getElementById('role-word');
setInterval(() => {
  roleElement.style.opacity = '0';
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
    roleElement.style.opacity = '1';
  }, 250);
}, 2600);
roleElement.style.transition = 'opacity .25s ease';
