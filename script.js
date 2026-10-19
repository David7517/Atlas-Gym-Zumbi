// ATLAS GYM ZUMBI — Interacciones sin librerías externas.

const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');

function closeMenu() {
  if (!menuButton || !navMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  navMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  navMenu.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

// Precios observados en las promociones del gimnasio (USD por persona/mes).
const plans = {
  1: { name: 'PLAN INDIVIDUAL', price: 20 },
  2: { name: 'PLAN DÚO', price: 19 },
  3: { name: 'PLAN TRÍO', price: 18 },
  4: { name: 'PLAN CREW', price: 17 },
};
const options = document.querySelectorAll('.price-option');
const selectedName = document.getElementById('selected-name');
const selectedPrice = document.getElementById('selected-price');
const selectedPeople = document.getElementById('selected-people');
const selectedTotal = document.getElementById('selected-total');
const selectedContact = document.getElementById('selected-contact');

function selectPlan(people) {
  const plan = plans[people];
  if (!plan) return;
  options.forEach((option) => {
    const active = Number(option.dataset.people) === people;
    option.classList.toggle('is-selected', active);
    option.setAttribute('aria-pressed', String(active));
  });
  selectedName.textContent = plan.name;
  selectedPrice.textContent = String(plan.price);
  selectedPeople.textContent = `${people} ${people === 1 ? 'persona' : 'personas'}`;
  selectedTotal.textContent = `$${people * plan.price}`;
  selectedContact.setAttribute('aria-label', `Consultar ${plan.name} para ${people} personas en Instagram`);
}
options.forEach((option) => option.addEventListener('click', () => selectPlan(Number(option.dataset.people))));
selectPlan(1);

// Aparición sutil al hacer scroll; compatible con preferencias de movimiento reducido.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.getElementById('year').textContent = String(new Date().getFullYear());

// Video horizontal completo; en celular los controles permiten reproducirlo manualmente.
const atlasVideo = document.getElementById('atlas-main-video');
const videoContainer = document.getElementById('video-container');
if (atlasVideo) {
  atlasVideo.muted = true;
  atlasVideo.loop = true;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) atlasVideo.pause();
  else atlasVideo.play().catch(() => {
    // Algunos navegadores bloquean reproducción automática; los controles permanecen visibles.
  });
  atlasVideo.addEventListener('error', () => {
    const error = videoContainer.querySelector('.cinema-error');
    if (error) error.hidden = false;
  });
  const source = atlasVideo.querySelector('source');
  source?.addEventListener('error', () => {
    const error = videoContainer.querySelector('.cinema-error');
    if (error) error.hidden = false;
  });
}
