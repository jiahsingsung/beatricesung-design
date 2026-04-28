// ===========================
//  about.js — scroll animations for about-me.html
// ===========================

(function () {

  // ── 1. Character split on hero name ──────────────────────────────
  const nameEl = document.querySelector('.about-hero__name');
  if (nameEl) {
    nameEl.style.opacity = '0';          // hide raw text before split
    const text = nameEl.textContent;
    nameEl.textContent = '';
    nameEl.setAttribute('aria-label', text);
    nameEl.style.opacity = '';           // chars control visibility from here
    [...text].forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.style.setProperty('--i', i);
      span.textContent = ch === ' ' ? ' ' : ch;
      nameEl.appendChild(span);
    });
    // Trigger after a short paint delay
    requestAnimationFrame(() => {
      requestAnimationFrame(() => nameEl.classList.add('chars-ready'));
    });
  }

  // ── 2. IntersectionObserver for scroll-reveal classes ────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

  // ── 3. Staggered bio paragraphs ──────────────────────────────────
  const bioParas = document.querySelectorAll('.about-hero__bio');
  bioParas.forEach((p, i) => {
    p.classList.add('bio-reveal');
    p.style.setProperty('--bio-i', i);
    revealObserver.observe(p);
  });

  // ── 4. Section content stagger ───────────────────────────────────
  document.querySelectorAll('.about-section__body p').forEach((p, i) => {
    p.classList.add('scroll-reveal', 'scroll-reveal--stagger');
    p.style.setProperty('--stagger-i', i);
    revealObserver.observe(p);
  });

  // ── 5. Interest tags spring-in ───────────────────────────────────
  document.querySelectorAll('.interest-tag').forEach((tag, i) => {
    tag.classList.add('tag-reveal');
    tag.style.setProperty('--tag-i', i);
    revealObserver.observe(tag);
  });

  // ── 6. Section title reveals ─────────────────────────────────────
  document.querySelectorAll('.about-section__title').forEach(el => {
    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
  });

  // ── 7. Parallax on hero photo ────────────────────────────────────
  const heroPhoto = document.querySelector('.about-hero__photo img');
  if (heroPhoto && window.matchMedia('(min-width: 768px)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const offset = scrollY * 0.12;
          heroPhoto.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

})();
