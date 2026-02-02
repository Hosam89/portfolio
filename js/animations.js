/**
 * Animations Module
 * Handles all visual animations and effects on the page
 */

/**
 * Initializes all animations
 */
export function initAnimations() {
  initSmoothScroll();
  initScrollReveal();
  initFloatingParticles();
  initTypingAnimation();
  initParallaxEffect();
  initCardAnimations();
  initSectionTitleAnimations();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
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
}

/**
 * Scroll reveal animations using Intersection Observer
 */
function initScrollReveal() {
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
}

/**
 * Creates floating particles in the header
 */
function initFloatingParticles() {
  const header = document.querySelector(".header");
  if (!header) return;

  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = createParticle();
    header.appendChild(particle);
  }
}

/**
 * Creates a single particle element
 * @returns {HTMLElement} The particle element
 */
function createParticle() {
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

  return particle;
}

/**
 * Adds typing animation to the name element
 */
function initTypingAnimation() {
  const nameElement = document.querySelector(".name");
  if (!nameElement) return;

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

/**
 * Adds parallax effect to the header on scroll
 */
function initParallaxEffect() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
    header.style.opacity = Math.max(1 - scrolled / 500, 0.3);
  });
}

/**
 * Adds click animations to cards and skill categories
 */
function initCardAnimations() {
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
}

/**
 * Adds staggered animation delays to section titles
 */
function initSectionTitleAnimations() {
  document.querySelectorAll(".section-title").forEach((title, index) => {
    title.style.animationDelay = index * 0.1 + "s";
  });
}

/**
 * Animates an element with a fade effect
 * @param {HTMLElement} element - The element to animate
 * @param {Function} callback - Callback to run during animation
 */
export function fadeAnimation(element, callback) {
  element.style.opacity = "0";
  element.style.transform = "translateY(-10px)";

  setTimeout(() => {
    if (callback) callback();
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, 100);
}
