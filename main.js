<!--Javascript for Features-->
<script>
  function activateCard(element) {
    // Remove "active" from all cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active');
    });

    // Add "active" to clicked card
    element.classList.add('active');
  }
  </script>

<!--Javascript for Testimonials-->

  <script>
  const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
})
  </script>