// Toggle Navbar Menu on Small Screens
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// Smooth Scroll for Internal Links
const navLinks = document.querySelectorAll(".navbar-menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
    navbarMenu.classList.remove("active"); // Close menu on click (for mobile)
  });
});

// Testimonials Carousel Auto Scroll
const carousel = document.querySelector(".testimonials-carousel");
let isMouseOver = false;

carousel.addEventListener("mouseover", () => (isMouseOver = true));
carousel.addEventListener("mouseout", () => (isMouseOver = false));

function autoScrollCarousel() {
  if (!isMouseOver) {
    carousel.scrollBy({
      left: 300,
      behavior: "smooth",
    });
    // Reset to start when reaching the end
    if (
      carousel.scrollLeft + carousel.clientWidth >=
      carousel.scrollWidth - 1
    ) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
}

setInterval(autoScrollCarousel, 3000);

// Form Submission Validation
const contactForm = document.querySelector(".contact form");
const formInputs = document.querySelectorAll(".contact input, .contact textarea");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  formInputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.border = "1px solid red";
      isValid = false;
    } else {
      input.style.border = "1px solid #ddd";
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
    contactForm.reset();
  } else {
    alert("Please fill out all fields!");
  }
});
