// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Typing Animation in Hero Section
const typingText = "I'm a Full-Stack Developer";
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
      document.getElementById("typing").textContent += typingText.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Dark Mode Toggle (Optional)
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  });
}
