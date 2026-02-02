/**
 * Main Application Entry Point
 * Initializes all modules and functionality
 */

import { initThemeToggle } from "./theme-toggle.js";
import { initLanguageSwitcher } from "./language-switcher.js";
import { initAnimations } from "./animations.js";

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Initialize theme toggle
    initThemeToggle();

    // Initialize language switcher
    initLanguageSwitcher();

    // Initialize all animations
    initAnimations();

    console.log("Portfolio application initialized successfully");
  } catch (error) {
    console.error("Error initializing portfolio:", error);
  }
});
