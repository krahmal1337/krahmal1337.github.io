document.getElementById('year').textContent = new Date().getFullYear();

// header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8 ? '0 8px 30px rgba(0,0,0,0.4)' : 'none';
});

// download placeholder — replace with your real release link
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Замени этот alert на ссылку на свой релиз (например GitHub Releases .zip).');
});

// close other accordion items when one opens (optional, keeps it tidy)
document.querySelectorAll('.acc-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.acc-item').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
