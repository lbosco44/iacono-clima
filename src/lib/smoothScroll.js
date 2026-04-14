export function smoothScrollTo(href) {
  if (!href || !href.startsWith("#")) return;
  const el = document.querySelector(href);
  if (!el) return;
  const headerOffset = 72;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function handleAnchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (href?.startsWith("#")) {
    e.preventDefault();
    smoothScrollTo(href);
  }
}
