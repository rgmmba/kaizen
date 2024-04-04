function jumpToSection(target) {
  const section = document.getElementById(target);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Attach event listeners to your navigation links:
const navLinks = document.querySelectorAll('nav a');
for (const link of navLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    jumpToSection(this.getAttribute('href').slice(1)); // Extract target ID from href
  });
}
