/**
 * Copy Module
 * Copies the value of [data-copy] buttons to the clipboard.
 */

import { t } from "./i18n.js";

export function initCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.querySelector(".copy-text");

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
      } catch {
        return;
      }

      button.classList.add("is-copied");
      if (label) label.textContent = t("contact.copied");

      clearTimeout(button._copyTimer);
      button._copyTimer = setTimeout(() => {
        button.classList.remove("is-copied");
        if (label) label.textContent = t("contact.copy");
      }, 1800);
    });
  });
}
