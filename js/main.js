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

// ---------- Dark mode ----------
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ---------- Works dropdown ----------
const navDropdowns = document.querySelectorAll('.nav__dropdown');
navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector('.nav__dropdown-toggle');
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
});
document.addEventListener('click', () => {
  navDropdowns.forEach((d) => d.classList.remove('open'));
});

// ---------- Mobile nav toggle ----------
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ---------- Before / After Comparison Slider ----------
document.querySelectorAll('[data-slider]').forEach((slider) => {
  const beforeImg = slider.querySelector('.cs-slider__img--before');
  const divider = slider.querySelector('.cs-slider__divider');
  let dragging = false;

  function setPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    beforeImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    divider.style.left = `${pct}%`;
  }

  slider.addEventListener('mousedown', (e) => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', (e) => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });

  slider.addEventListener('touchstart', (e) => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });

  // Hint animation on scroll into view (plays once)
  const hintObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          slider.classList.add('is-hinting');
          divider.addEventListener('animationend', () => {
            slider.classList.remove('is-hinting');
          }, { once: true });
        }, 400);
        hintObserver.unobserve(slider);
      }
    });
  }, { threshold: 0.4 });

  hintObserver.observe(slider);
});

// ---------- Cursor glow ----------
(function initCursorGlow() {
  // Only on non-touch devices and homepage
  if (window.matchMedia('(hover: none)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let raf;
  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 2;
  let cx = tx;
  let cy = ty;

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function tick() {
    // Smooth follow with lerp
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    raf = requestAnimationFrame(tick);
  }
  tick();
})();

// ---------- Work card tilt ----------
(function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('.work-card:not(.work-card--coming-soon)').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.boxShadow = `0 24px 56px rgba(0,0,0,0.12)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
})();

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
