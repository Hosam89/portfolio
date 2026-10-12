/**
 * Reveal Module
 * Fades elements marked with [data-reveal] in as they enter the viewport.
 */

export function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Elements already on screen stay visible; only the rest get hidden and
  // revealed, so nothing flashes and content survives if this script fails.
  const fold = window.innerHeight;
  items.forEach((el) => {
    if (el.getBoundingClientRect().top < fold) el.classList.add("is-visible");
  });
  document.documentElement.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  items.forEach((el) => {
    if (!el.classList.contains("is-visible")) observer.observe(el);
  });
}
