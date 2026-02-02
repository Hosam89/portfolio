/**
 * Language Switcher Module
 * Handles bilingual support (English/German) with persistence
 */

import { createRipple, getStorageItem, setStorageItem } from "./utils.js";

let currentLang = "en";
let langButtons = [];
let elementsWithTranslation = [];

/**
 * Initializes the language switcher functionality
 */
export function initLanguageSwitcher() {
  langButtons = document.querySelectorAll(".lang-btn");
  elementsWithTranslation = document.querySelectorAll("[data-en][data-de]");

  if (langButtons.length === 0) {
    console.warn("Language buttons not found");
    return;
  }

  // Get saved language or default to English
  currentLang = getStorageItem("preferredLanguage", "en");

  // Initialize language on page load
  switchLanguage(currentLang);

  // Add click handlers to language buttons
  langButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const lang = this.getAttribute("data-lang");
      handleLanguageChange(lang, this, event);
    });
  });
}

/**
 * Handles language change when button is clicked
 * @param {string} lang - The language code ('en' or 'de')
 * @param {HTMLElement} button - The clicked button
 * @param {MouseEvent} event - The click event
 */
function handleLanguageChange(lang, button, event) {
  switchLanguage(lang);

  // Save preference
  setStorageItem("preferredLanguage", lang);

  // Update active state with animation
  updateButtonStates(button);

  // Add ripple effect
  createRipple(button, event);
}

/**
 * Updates the active state of language buttons
 * @param {HTMLElement} activeButton - The button to set as active
 */
function updateButtonStates(activeButton) {
  langButtons.forEach((btn) => {
    btn.classList.remove("active");
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
  activeButton.classList.add("active");
}

/**
 * Switches the page language
 * @param {string} lang - The language code ('en' or 'de')
 */
function switchLanguage(lang) {
  currentLang = lang;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all elements with translations
  elementsWithTranslation.forEach((element, index) => {
    const translation = element.getAttribute(`data-${lang}`);
    if (translation) {
      animateTextChange(element, translation, index);
    }
  });

  // Update active button state
  updateActiveButton(lang);
}

/**
 * Animates text change for an element
 * @param {HTMLElement} element - The element to update
 * @param {string} translation - The translated text
 * @param {number} index - The element index for staggered animation
 */
function animateTextChange(element, translation, index) {
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

/**
 * Updates the active button state based on current language
 * @param {string} lang - The current language code
 */
function updateActiveButton(lang) {
  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

/**
 * Gets the current language
 * @returns {string} The current language code
 */
export function getCurrentLanguage() {
  return currentLang;
}
