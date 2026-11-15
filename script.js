// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(function (card) {
  card.classList.add("project-highlight");
});

// Contact form
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message was sent.");
  form.reset();
});