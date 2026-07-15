document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Scroll reveal for custom Kingsdale sections ---------- */
  var revealEls = document.querySelectorAll('.ks-reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ks-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('ks-in'); });
  }

  /* ---------- Theme toggle: Dark by default, manual switch to Light ----------
     Applied on <html> so it cascades through Dawn's native product, cart,
     and account pages too — not just our custom sections. The very first
     application happens inline in theme.liquid (before paint) to avoid a
     flash of the wrong theme; this just wires up the button + persistence. */
  var root = document.documentElement;
  var themeBtn = document.getElementById('ks-theme-btn');

  if (themeBtn) {
    var themeIcon = document.getElementById('ks-theme-icon');
    var modeLabel = document.getElementById('ks-mode-label');

    var SUN = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/>';
    var MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>';

    function applyTheme(mode) {
      root.setAttribute('data-theme', mode);
      themeIcon.innerHTML = mode === 'dark' ? MOON : SUN;
      modeLabel.textContent = mode === 'dark' ? 'Dark' : 'Light';
    }

    function render() {
      var mode = localStorage.getItem('kingsdale-theme') || 'dark';
      applyTheme(mode);
    }

    themeBtn.addEventListener('click', function () {
      var current = localStorage.getItem('kingsdale-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('kingsdale-theme', next);
      render();
    });

    render();
  }

  /* ---------- Bespoke Monogram Studio ---------- */
  var monoInput = document.getElementById('ks-mono-input');
  var monoPreview = document.getElementById('ks-mono-preview');
  var waLink = document.getElementById('ks-wa-link');
  var waNumber = waLink ? waLink.getAttribute('data-wa-number') : null;

  function updateWaLink() {
    if (!waLink || !waNumber) return;
    var val = ((monoInput && monoInput.value) || 'KE').toUpperCase();
    var msg = 'Hello Kingsdale Emporio! I\'d like to enquire about corporate gifting with the monogram "' + val + '".';
    waLink.href = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg);
  }

  if (monoInput) {
    monoInput.addEventListener('input', function () {
      var val = monoInput.value.toUpperCase().replace(/[^A-Z]/g, '');
      monoInput.value = val;
      if (monoPreview) monoPreview.textContent = val || 'KE';
      updateWaLink();
    });
  }
  updateWaLink();
});
