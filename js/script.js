document.getElementById('year').textContent = new Date().getFullYear();

// mock window: fake progress + launch button
const fill = document.getElementById('mockFill');
const pending = document.getElementById('mockPending');
const launchBtn = document.getElementById('mockLaunch');

function runMockCheck(){
  fill.style.width = '0%';
  pending.textContent = 'Проверка…';
  pending.className = 'mock-status pending';
  requestAnimationFrame(() => { fill.style.width = '100%'; });
  setTimeout(() => {
    pending.textContent = 'Готово';
    pending.className = 'mock-status ok';
  }, 1400);
}
runMockCheck();

launchBtn.addEventListener('click', () => {
  launchBtn.textContent = 'Запускается…';
  launchBtn.disabled = true;
  setTimeout(() => {
    launchBtn.textContent = 'Запущено ✓';
    setTimeout(() => {
      launchBtn.textContent = 'Запустить';
      launchBtn.disabled = false;
      runMockCheck();
    }, 1600);
  }, 900);
});

// header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.35)';
  else header.style.boxShadow = 'none';
});

// download button placeholder — replace href with your real release link
document.getElementById('downloadBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Замени этот alert на ссылку на свой релиз, например GitHub Releases (.zip / .exe).');
});
