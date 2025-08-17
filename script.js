/*Features*/
  function activateCard(element) {
    // Remove "active" from all cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active');
    });

    // Add "active" to clicked card
    element.classList.add('active');
  }


  /*Testimonials*/
  document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonial-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // First, remove the 'active' class from all cards
      cards.forEach(c => c.classList.remove('active'));

      // Then, add the 'active' class to the clicked card
      card.classList.add('active');
    });
  });
});
  /*Menu-bar*/
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('menu-open');
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !isExpanded);
});
