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
  document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
  });
  });
   