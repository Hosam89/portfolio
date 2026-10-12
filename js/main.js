/**
 * Main Application Entry Point
 * Initializes all modules and functionality
 */

import { initTheme } from "./theme.js";
import { initI18n } from "./i18n.js";
import { initNavigation } from "./navigation.js";
import { initReveal } from "./reveal.js";
import { initCopyButtons } from "./copy.js";

initTheme();
initI18n();
initNavigation();
initReveal();
initCopyButtons();

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// The 3D scene (and three.js) only loads on pages that have a viewport for it
const sceneContainer = document.querySelector("[data-hero-scene]");
if (sceneContainer) {
  import("./hero-scene.js")
    .then(({ initHeroScene }) => initHeroScene(sceneContainer))
    .catch((error) => {
      console.warn("3D scene unavailable:", error);
      sceneContainer.classList.add("is-fallback");
    });
}
