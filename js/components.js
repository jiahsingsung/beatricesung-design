// ===========================
//  Beatrice Sung — Portfolio
//  components.js
//  Shared nav + footer injection
// ===========================

(function () {
  const inEn = window.location.pathname.includes('/en/');
  const e = inEn ? '' : 'en/';          // prefix to reach en/ pages
  const r = inEn ? '../' : '';           // prefix to reach root

  const RESUME = 'https://drive.google.com/file/d/1y4C-jhE_W__KV4J6Wyw2Uy5J8vODWqsi/view';
  const LOGO_IMG = 'https://cdn.prod.website-files.com/6989f088d5faa64f49f5910e/698b0ffdcd13e1ce814c77a6_yy-face-icon-2-05.svg';

  // ---------- NAV ----------
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.outerHTML = `
  <nav class="nav">
    <div class="container">
      <div class="nav__inner">
        <a href="${r}index.html" class="nav__logo">
          <img src="${LOGO_IMG}" alt="Beatrice Sung" />
          Beatrice.design
        </a>
        <nav class="nav__links">
          <div class="nav__dropdown">
            <button class="nav__dropdown-toggle">🚲 Works</button>
            <div class="nav__dropdown-menu">
              <a href="${e}case-study-moovo.html" class="nav__dropdown-item">Bike rental for tourists</a>
              <a href="${e}case-study-booking-website.html" class="nav__dropdown-item">Bike rental booking in US & EU</a>
              <a href="${e}case-study-rider-app.html" class="nav__dropdown-item">Rider App optimization</a>
            </div>
          </div>
          <a href="${e}about-me.html" class="nav__link">🐘 About me</a>
          <a href="${RESUME}" target="_blank" class="nav__link nav__link--resume">🔗 Resume</a>
        </nav>
        <button class="nav__hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav__mobile">
      <a href="${e}case-study-moovo.html" class="nav__link">Bike rental for tourists</a>
      <a href="${e}case-study-booking-website.html" class="nav__link">Bike rental booking in US & EU</a>
      <a href="${e}case-study-rider-app.html" class="nav__link">Rider App optimization</a>
      <a href="${e}about-me.html" class="nav__link">🐘 About me</a>
      <a href="${RESUME}" target="_blank" class="nav__link nav__link--resume">🔗 Resume</a>
    </div>
  </nav>`;
  }

  // ---------- FOOTER + THEME TOGGLE ----------
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div>
          <p class="footer__heading">Works</p>
          <ul class="footer__link-list">
            <li><a href="${e}case-study-moovo.html">Bike rental for tourists</a></li>
            <li><a href="${e}case-study-booking-website.html">Booking process optimization</a></li>
            <li><a href="${e}case-study-rider-app.html">Rider App optimization</a></li>
          </ul>
        </div>
        <div>
          <p class="footer__heading">Contact</p>
          <div class="footer__contact-item"><a href="mailto:beatricesung@gmail.com">beatricesung@gmail.com</a></div>
          <div class="footer__contact-item">New Taipei City, Taiwan</div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">Ⓒ 2026, Beatrice Sung</p>
        <div class="footer__social">
          <a href="https://www.linkedin.com/in/beatricesung" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/beatricesung" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  </footer>

  <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
    <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  </button>`;
  }
})();
