export const site = {
  name: "Iacono Clima",
  legalName: "Iacono Climatizzazione S.r.l.",
  tagline: "Impianti che durano vent'anni. Come noi.",

  // Headline alternative — la definitiva si decide dopo confronto col cliente
  // headlines: [
  //   "Impianti che durano vent'anni. Come noi.",
  //   "Aria che funziona. Per davvero.",
  //   "Vent'anni di clima, fatto bene.",
  // ],

  phone: "0931 441616",
  phoneTel: "+390931441616",

  whatsapp1: "335 6511087",
  whatsapp1Number: "393356511087",
  whatsapp1Link: "https://wa.me/393356511087",

  whatsapp2: "335 6511287",
  whatsapp2Number: "393356511287",
  whatsapp2Link: "https://wa.me/393356511287",

  email: "info@iaconoclim.it",

  address: {
    street: "Via Filisto 71/73",
    zip: "96100",
    city: "Siracusa",
    province: "SR",
    full: "Via Filisto 71/73, 96100 Siracusa (SR)",
    geo: { lat: 37.085077, lng: 15.292039 }, // verificato via OSM Nominatim (Grottasanta, Siracusa)
  },

  hours: [
    { days: "Lun – Ven", time: "8:30 – 18:00" },
    { days: "Sabato", time: "8:30 – 13:00" },
  ],

  certifications: ["Certificati F-GAS", "Rivenditori autorizzati Carrier", "Partner MAXA"],

  nav: [
    { label: "I Sistemi", href: "/#i-sistemi" },
    { label: "Come lavoriamo", href: "/#come-lavoriamo" },
    { label: "Casi", href: "/#casi" },
    { label: "Sistema Iacono", href: "/#sistema-iacono" },
    { label: "Verdetti", href: "/#verdetti" },
    { label: "Briefing", href: "/#briefing" },
  ],

  socials: {
    instagram: "",
    facebook: "",
  },
} as const;

export type Site = typeof site;
