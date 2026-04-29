export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:inline-flex focus:items-center focus:h-10 focus:px-4 focus:bg-[var(--color-ink)] focus:text-[var(--color-bg)] focus:font-body focus:font-semibold focus:text-sm focus:rounded-[3px] focus:outline-none focus:shadow-lg"
    >
      Vai al contenuto principale
    </a>
  );
}
