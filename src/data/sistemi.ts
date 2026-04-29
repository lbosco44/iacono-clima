export type SistemaTag =
  | "mono"
  | "multi"
  | "idronica"
  | "refrigerazione"
  | "caldaie";

export type Sistema = {
  id: SistemaTag;
  tag: string;
  title: string;
  description: string;
  brands: string;
};

export const sistemi: Sistema[] = [
  {
    id: "mono",
    tag: "Mono",
    title: "Singola unità, ambiente singolo.",
    description:
      "Il monosplit per chi ha una stanza, un ufficio o uno studio. Installato senza compromessi: dimensionamento corretto, scarico condensa fatto bene, garanzia integrale.",
    brands: "Carrier · MAXA",
  },
  {
    id: "multi",
    tag: "Multi",
    title: "Più ambienti, una sola macchina.",
    description:
      "Multisplit fino a nove unità interne. Ideale per case grandi, B&B, uffici multipiano. Bilanciamento delle linee e progetto frigorifero su misura.",
    brands: "Carrier · MAXA",
  },
  {
    id: "idronica",
    tag: "Idronica",
    title: "Pompe di calore e riscaldamento ad acqua.",
    description:
      "Climatizzazione idronica integrata con caldaia o sistema ibrido. Comfort lineare in inverno, efficienza che si vede in bolletta.",
    brands: "Carrier",
  },
  {
    id: "refrigerazione",
    tag: "Refrigerazione",
    title: "Celle, armadi, banchi commerciali.",
    description:
      "Refrigerazione professionale per HoReCa, GDO e laboratori. Scelta del compressore, gestione dello sbrinamento, manutenzione programmata.",
    brands: "Carrier",
  },
  {
    id: "caldaie",
    tag: "Caldaie",
    title: "Riscaldamento a gas e ibrido.",
    description:
      "Sostituzione caldaie, sistemi ibridi caldaia + pompa di calore, pratiche conto termico. Tutto messo in regola, niente sorprese.",
    brands: "Hermann Saunier Duval",
  },
];

export const sistemiManifesto = `// La filosofia.
//
// Vent'anni di impianti
// ci hanno insegnato una cosa:
// la durata non si vende.
// Si costruisce.
//
// Per questo lavoriamo
// con due brand certificati,
// dimensioniamo ogni progetto
// e firmiamo ogni intervento.`;
