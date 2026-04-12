// ===========================
//  Beatrice Sung — Portfolio
//  main.js
// ===========================

// ---------- Scroll fade-in animation ----------
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach((el) => observer.observe(el));

// ---------- Staggered children ----------
document.querySelectorAll('[data-stagger]').forEach((parent) => {
  const children = parent.children;
  Array.from(children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});

// ---------- Mobile nav toggle ----------
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ---------- Active nav link ----------
(function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = new URL(href, window.location.origin).pathname;
    if (path === linkPath || (path.startsWith(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
})();
