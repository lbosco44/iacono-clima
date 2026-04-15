export function smoothScrollTo(hash) {
  if (!hash || !hash.startsWith("#")) return;
  const el = document.querySelector(hash);
  if (!el) return;
  const headerOffset = 72;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function handleAnchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href) return;

  // Plain anchor on same page (e.g. #servizi)
  if (href.startsWith("#")) {
    e.preventDefault();
    smoothScrollTo(href);
    return;
  }

  // Root + anchor (e.g. /#servizi): smooth scroll only if already on home
  if (href.startsWith("/#")) {
    if (window.location.pathname === "/") {
      e.preventDefault();
      smoothScrollTo(href.slice(1));
    }
    // else native navigation handles loading home + hash
  }
}
