import { site } from "@/data/site";

export function WhatsAppFab() {
  return (
    <>
      {/* Screen-reader description — visually hidden */}
      <span id="wa-fab-desc" className="sr-only">
        Apre WhatsApp con il numero {site.whatsapp1}. Si apre in una nuova scheda.
      </span>
      <a
        href={site.whatsapp1Link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Contattaci su WhatsApp"
        aria-describedby="wa-fab-desc"
        className="wa-pulse fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-40 inline-flex items-center justify-center w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-deep)] text-white transition-colors duration-200"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 lg:w-8 lg:h-8 fill-current"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.638 3.41 4.687 4.335.515.244 2.063.91 2.62.91.52 0 1.276-.227 1.66-.527.272-.225.44-.47.555-.78a.75.75 0 0 0 .087-.32c0-.27-.04-.555-.355-.555zm-2.97 7.7c-1.51 0-2.997-.412-4.288-1.183l-.315-.187-3.184.83.85-3.1-.2-.32a8.83 8.83 0 0 1-1.34-4.687c0-4.886 3.973-8.86 8.86-8.86s8.86 3.974 8.86 8.86-3.973 8.84-8.244 8.85zm0-19.612C9.55 5.293 4.317 10.526 4.317 16.972c0 1.99.515 3.93 1.49 5.65l-1.55 5.66 5.79-1.518a11.6 11.6 0 0 0 5.535 1.405c6.448 0 11.682-5.234 11.682-11.682 0-3.122-1.218-6.06-3.43-8.27a11.62 11.62 0 0 0-8.252-3.43z" />
        </svg>
      </a>
    </>
  );
}
