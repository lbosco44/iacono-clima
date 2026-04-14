const ICONS = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  store: (
    <>
      <path d="M3 9h18l-1.5-5h-15L3 9z" />
      <path d="M5 9v12h14V9" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 3V9l6 3V6h6v15z" />
      <path d="M7 15h2M12 15h2M17 15h2" />
    </>
  ),
  tool: (
    <>
      <path d="M14 6a4 4 0 0 1 5 5l-8 8-5 2 2-5 6-6a3 3 0 0 1 0-4z" />
      <path d="M16 8 8 16" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 1 5 5L18 13l-7 7-5 2 2-5 7-7 1.7-1.7a4 4 0 0 1-2 2z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="14" r="4" />
      <path d="M11 12 22 2" />
      <path d="m17 7 3 3M18 5l3 3" />
    </>
  ),
  gas: (
    <>
      <path d="M12 3c-1 2 1 4 1 6a5 5 0 1 1-8 3c0-3 3-5 3-9 2 2 4 0 4 0z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  star: (
    <>
      <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.9 9.1 9z" />
    </>
  ),
  map: (
    <>
      <path d="M3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  phone: (
    <>
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4c0 1.1-.9 2-2 2A17 17 0 0 1 3 5c0-1.1.9-2 2-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 3.5A10 10 0 0 0 3.3 14.2L2 22l7.9-1.2a10 10 0 0 0 10.6-17.3z" />
      <path d="M8.5 8.5c.3 1 1 2 1.5 2.8a9 9 0 0 0 4 3.9c1 .4 2-.2 2.7-.7.3-.3.4-.8.1-1.2l-1.6-1.6c-.3-.3-.8-.3-1.1 0l-.5.4a7 7 0 0 1-3.5-3.6l.4-.4c.3-.3.3-.8 0-1.1L8.9 5.5a.8.8 0 0 0-1.2.1c-.6.6-1.1 1.5-.8 2.6z" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 5 5L20 7" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 3v18M3 12h18" />
      <path d="M6 6l12 12M6 18 18 6" />
      <path d="M12 7l-2-2M12 7l2-2M12 17l-2 2M12 17l2 2" />
      <path d="m5 10-2 2 2 2M19 10l2 2-2 2M7 5l-2 2M17 5l2 2M7 19l-2-2M17 19l2-2" />
    </>
  ),
};

export function Icon({ name, size = 24, stroke = 1.8, className, ...rest }) {
  const paths = ICONS[name];
  if (!paths) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths}
    </svg>
  );
}
