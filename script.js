// Language Switcher and Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  // ============ THEME TOGGLE ============
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  // Get saved theme or default to light
  let currentTheme = localStorage.getItem("theme") || "light";

  // Apply saved theme on page load
  if (currentTheme === "dark") {
    body.classList.add("dark-theme");
  }

  // Theme toggle click handler
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    // Save preference
    currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    // Add animation
    this.style.transform = "rotate(360deg) scale(1.2)";
    setTimeout(() => {
      this.style.transform = "";
    }, 300);

    // Add ripple effect to theme button
    createThemeRipple(this);
  });

  function createThemeRipple(button) {
    const ripple = document.createElement("span");
    ripple.classList.add("theme-ripple");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(94, 231, 223, 0.6)";
    ripple.style.width = "100px";
    ripple.style.height = "100px";
    ripple.style.left = "-25px";
    ripple.style.top = "-25px";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "rippleAnimation 0.6s ease-out";
    ripple.style.pointerEvents = "none";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // ============ LANGUAGE SWITCHER ============
  const langButtons = document.querySelectorAll(".lang-btn");
  const elementsWithTranslation =
    document.querySelectorAll("[data-en][data-de]");

  // Get saved language or default to English
  let currentLang = localStorage.getItem("preferredLanguage") || "en";

  // Initialize language on page load
  switchLanguage(currentLang);

  // Add click handlers to language buttons
  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      switchLanguage(lang);

      // Save preference
      localStorage.setItem("preferredLanguage", lang);

      // Update active state with animation
      langButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
          btn.style.transform = "";
        }, 150);
      });
      this.classList.add("active");

      // Add ripple effect
      createRipple(this, event);
    });
  });

  function switchLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with translations
    elementsWithTranslation.forEach((element, index) => {
      const translation = element.getAttribute(`data-${lang}`);
      if (translation) {
        // Add fade animation
        element.style.opacity = "0";
        element.style.transform = "translateY(-10px)";

        setTimeout(
          () => {
            // Handle different element types
            if (element.tagName === "P" && element.querySelector("strong")) {
              // For paragraphs with strong tags, preserve HTML
              element.innerHTML = translation.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>",
              );
            } else {
              element.textContent = translation;
            }

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          },
          100 + index * 20,
        );
      }
    });

    // Update active button state
    langButtons.forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Ripple effect for button clicks
  function createRipple(button, event) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Smooth scroll animation for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  document.querySelectorAll(".section, .card, .timeline-item").forEach((el) => {
    el.classList.add("reveal-element");
    observer.observe(el);
  });

  // Add floating particles animation
  createFloatingParticles();

  function createFloatingParticles() {
    const header = document.querySelector(".header");
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random position
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      // Random animation delay
      particle.style.animationDelay = Math.random() * 5 + "s";
      particle.style.animationDuration = 10 + Math.random() * 10 + "s";

      // Random size
      const size = 2 + Math.random() * 4;
      particle.style.width = size + "px";
      particle.style.height = size + "px";

      header.appendChild(particle);
    }
  }

  // Add typing animation to name
  const nameElement = document.querySelector(".name");
  if (nameElement) {
    const text = nameElement.textContent;
    nameElement.textContent = "";
    nameElement.style.opacity = "1";

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        nameElement.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }

  // Add parallax effect to header
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const header = document.querySelector(".header");
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.5}px)`;
      header.style.opacity = Math.max(1 - scrolled / 500, 0.3);
    }
  });

  // Add click animation to project cards and skill categories
  document
    .querySelectorAll(".project-card, .skill-category")
    .forEach((card) => {
      card.addEventListener("click", function () {
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });

  // Add gradient animation to section titles
  document.querySelectorAll(".section-title").forEach((title, index) => {
    title.style.animationDelay = index * 0.1 + "s";
  });
});
