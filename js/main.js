// Mobile Navigation Toggle (optional if you add hamburger menu)
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav ul');
  const toggleBtn = document.querySelector('.nav-toggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Basic Contact Form Validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
        return;
      }

      // Simple email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
      }
    });
  }
});
