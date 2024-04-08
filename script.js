const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const html = document.documentElement;

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  html.dataset.theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

darkModeToggle.addEventListener('change', toggleDarkMode);

// Restore user's preference from localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  body.classList.add('dark-mode');
  html.dataset.theme = 'dark';
  darkModeToggle.checked = true;
}
