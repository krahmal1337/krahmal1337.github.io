document.getElementById('year').textContent = new Date().getFullYear();

/* header shadow on scroll */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8 ? '0 8px 30px rgba(0,0,0,0.35)' : 'none';
});

/* download button placeholder — replace with your real release link */
document.getElementById('downloadBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Replace this alert with a real link to your release (e.g. a GitHub Releases .zip / .exe).');
});

/* ---- Scroll reveal ---- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

/* ---- Animated counters ---- */
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString('en-US');
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach((el) => counterObserver.observe(el));

/* ---- Compare slider ---- */
const compareRange = document.getElementById('compareRange');
const compareClip = document.getElementById('compareClip');
const compareHandle = document.getElementById('compareHandle');
const compareSlider = document.getElementById('compareSlider');

function syncClipImageWidth(){
  const w = compareSlider.getBoundingClientRect().width;
  compareClip.querySelector('.compare-img').style.width = w + 'px';
}

function setCompare(value){
  compareClip.style.width = value + '%';
  compareHandle.style.left = value + '%';
}
syncClipImageWidth();
setCompare(50);
window.addEventListener('resize', syncClipImageWidth);

/* ---- Scrolling tab title ---- */
(function(){
  const baseText = 'NADELOADER — fast, lightweight, always up to date • ';
  const text = baseText.repeat(2); // repeat so the scroll loops smoothly
  let pos = 0;
  const speedMs = 260;

  function tick(){
    document.title = text.slice(pos) + text.slice(0, pos);
    pos = (pos + 1) % baseText.length;
  }

  let timer = setInterval(tick, speedMs);

  // pause the scroll while the tab isn't visible (saves a bit of CPU, keeps it tidy)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
    } else {
      timer = setInterval(tick, speedMs);
    }
  });
})();

compareRange.addEventListener('input', (e) => setCompare(e.target.value));

/* allow dragging directly on the image, not just the invisible range track */
let dragging = false;
compareSlider.addEventListener('pointerdown', () => { dragging = true; });
window.addEventListener('pointerup', () => { dragging = false; });
compareSlider.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const rect = compareSlider.getBoundingClientRect();
  const pct = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 0), 100);
  compareRange.value = pct;
  setCompare(pct);
});
