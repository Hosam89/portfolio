/**
 * Navigation Module
 * Handles full-screen section navigation and smooth transitions
 */

export function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".fullscreen-section");

  // Function to show a specific section
  function showSection(targetId) {
    // Remove active class from all sections and nav links
    sections.forEach((section) => section.classList.remove("active"));
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to target section
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.classList.add("active");

      // Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Add active class to corresponding nav link
    const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // Update URL hash without jumping
    history.pushState(null, null, targetId);
  }

  // Handle nav link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      showSection(targetId);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    const hash = window.location.hash || "#home";
    showSection(hash);
  });

  // Initialize: show section from URL hash or default to home
  const initialHash = window.location.hash || "#home";
  showSection(initialHash);

  // Keyboard navigation (arrow keys)
  document.addEventListener("keydown", (e) => {
    const currentIndex = Array.from(sections).findIndex((section) =>
      section.classList.contains("active"),
    );

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % sections.length;
      const nextSection = sections[nextIndex];
      showSection(`#${nextSection.id}`);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
      const prevSection = sections[prevIndex];
      showSection(`#${prevSection.id}`);
    }
  });
}
