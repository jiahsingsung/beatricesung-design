// ===========================
//  GA4 Custom Event Tracking
// ===========================

(function () {
  function track(event, params) {
    if (typeof gtag !== 'function') return;
    gtag('event', event, params);
  }

  // 點擊 case study — work cards on homepage
  document.querySelectorAll('.work-card:not(.work-card--coming-soon)').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.work-card__title')?.textContent?.trim() || 'Unknown';
      track('case_study_click', { case_study_name: title });
    });
  });

  // 展開作品 — Works nav dropdown
  // main.js toggles the class first (registered before this script),
  // so .open is already set when this listener fires.
  document.querySelectorAll('.nav__dropdown').forEach((dropdown) => {
    const toggle = dropdown.querySelector('.nav__dropdown-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      if (dropdown.classList.contains('open')) {
        track('works_dropdown_open', { page: window.location.pathname });
      }
    });
  });

  // About page — album tab switch
  document.querySelectorAll('.album__tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      track('about_tab_click', { tab_name: tab.dataset.panel });
    });
  });

})();
