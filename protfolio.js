// Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

// Remember theme preference
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
  }
};

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill all the fields!');
  } else {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById('contactForm').reset();
  }
});
