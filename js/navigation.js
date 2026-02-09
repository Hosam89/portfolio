/**
 * Navigation Module
 * Sets active navigation state for multi-page layout
 */

export function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length === 0) {
    return;
  }

  const currentPath = normalizePath(window.location.pathname);

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const linkUrl = new URL(href, window.location.href);
    const linkPath = normalizePath(linkUrl.pathname);

    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/index.html";
  }

  if (pathname.endsWith("/")) {
    return `${pathname}index.html`;
  }

  return pathname;
}
