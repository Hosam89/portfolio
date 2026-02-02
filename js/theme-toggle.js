/**
 * Theme Toggle Module
 * Handles dark/light theme switching with persistence
 */

import { createThemeRipple, getStorageItem, setStorageItem } from "./utils.js";

/**
 * Initializes the theme toggle functionality
 */
export function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) {
    console.warn("Theme toggle button not found");
    return;
  }

  const body = document.body;

  // Get saved theme or default to light
  const currentTheme = getStorageItem("theme", "light");

  // Apply saved theme on page load
  applyTheme(currentTheme);

  // Theme toggle click handler
  themeToggle.addEventListener("click", function () {
    toggleTheme(this);
  });
}

/**
 * Applies a theme to the page
 * @param {string} theme - 'light' or 'dark'
 */
function applyTheme(theme) {
  const body = document.body;

  if (theme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
}

/**
 * Toggles between light and dark theme
 * @param {HTMLElement} button - The theme toggle button
 */
function toggleTheme(button) {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // Save preference
  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  setStorageItem("theme", currentTheme);

  // Add animation
  button.style.transform = "rotate(360deg) scale(1.2)";
  setTimeout(() => {
    button.style.transform = "";
  }, 300);

  // Add ripple effect to theme button
  createThemeRipple(button);
}

/**
 * Gets the current theme
 * @returns {string} 'light' or 'dark'
 */
export function getCurrentTheme() {
  return document.body.classList.contains("dark-theme") ? "dark" : "light";
}
