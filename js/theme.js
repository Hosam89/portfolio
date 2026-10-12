/**
 * Theme Module
 * Light/dark theme switching with persistence.
 * The initial theme is applied by the inline script in each page's <head>
 * to avoid a flash of the wrong theme.
 */

const STORAGE_KEY = "theme";

/**
 * Returns the active theme
 * @returns {"light" | "dark"}
 */
export function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/**
 * Applies a theme and notifies listeners (e.g. the 3D scene)
 * @param {"light" | "dark"} theme
 */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode) — theme still applies for this page
  }
  document.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

/**
 * Wires up the theme toggle button
 */
export function initTheme() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
}
