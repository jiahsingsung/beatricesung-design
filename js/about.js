// ===========================
//  about.js — album tab interaction
// ===========================

(function () {
  const tabs   = document.querySelectorAll('.album__tab');
  const panels = document.querySelectorAll('.album__content');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      tabs.forEach(t => t.classList.remove('album__tab--active'));
      panels.forEach(p => p.classList.remove('album__content--active'));

      tab.classList.add('album__tab--active');
      document.getElementById(`panel-${target}`).classList.add('album__content--active');
    });
  });
})();
