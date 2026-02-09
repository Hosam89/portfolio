/**
 * Utility Functions
 * Reusable helper functions for UI effects
 */

/**
 * Creates a ripple effect on a button element
 * @param {HTMLElement} button - The button element to add ripple to
 * @param {MouseEvent} event - The mouse event for positioning
 */
export function createRipple(button, event) {
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

/**
 * Creates a themed ripple effect for theme toggle button
 * @param {HTMLElement} button - The button element to add ripple to
 */
export function createThemeRipple(button) {
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

/**
 * Gets a value from localStorage with fallback
 * @param {string} key - The localStorage key
 * @param {string} defaultValue - Default value if key doesn't exist
 * @returns {string} The stored value or default
 */
export function getStorageItem(key, defaultValue) {
  return localStorage.getItem(key) || defaultValue;
}

/**
 * Sets a value in localStorage
 * @param {string} key - The localStorage key
 * @param {string} value - The value to store
 */
export function setStorageItem(key, value) {
  localStorage.setItem(key, value);
}

/**
 * Types text into an element with a typewriter effect
 * @param {HTMLElement} element - The element to type into
 * @param {string} text - The text to type
 * @param {object} options - Timing configuration
 * @param {number} options.speed - Milliseconds per character
 * @param {number} options.startDelay - Delay before typing starts
 */
export function typewriterText(element, text, options = {}) {
  const speed = options.speed ?? 80;
  const startDelay = options.startDelay ?? 0;

  if (element.__typewriterTimer) {
    clearInterval(element.__typewriterTimer);
  }
  if (element.__typewriterTimeout) {
    clearTimeout(element.__typewriterTimeout);
  }

  element.textContent = "";
  element.style.opacity = "1";

  let i = 0;
  element.__typewriterTimeout = setTimeout(() => {
    element.__typewriterTimer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i += 1;
      } else {
        clearInterval(element.__typewriterTimer);
      }
    }, speed);
  }, startDelay);
}
