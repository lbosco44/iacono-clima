export type ProdottoCategoria =
  | "Residenziale"
  | "Commerciale"
  | "Monoblocco"
  | "Industriale";

export type Prodotto = {
  slug: string;
  nome: string;
  categoria: ProdottoCategoria;
  brand: string;
  descrizione: string;
  spec: string;
  pdf: string;
  image?: string;
};

export const prodotti: Prodotto[] = [
  // ── Residenziale ──────────────────────────────────────
  {
    slug: "residenziale-sette-mezzo",
    nome: "Sette e Mezzo",
    categoria: "Residenziale",
    brand: "MAXA",
    descrizione:
      "Monosplit compatto pensato per stanze singole fino a 30 mq. Estetica essenziale, pompa di calore inverter, classe A++.",
    spec: "9.000 BTU · A++ · R32",
    pdf: "/docs/residenziale-sette-e-mezzo.pdf",
    image: "/images/monosplit-settemezzo.png",
  },
  {
    slug: "residenziale-avion",
    nome: "Avion",
    categoria: "Residenziale",
    brand: "MAXA",
    descrizione:
      "Linea premium per ambienti di rappresentanza. Design ricercato, silenziosità sotto i 19 dB, gestione Wi-Fi integrata.",
    spec: "12.000 BTU · A+++ · Wi-Fi",
    pdf: "/docs/residenziale-avion.pdf",
    image: "/images/monosplit-avion.png",
  },
  {
    slug: "residenziale-light",
    nome: "Light",
    categoria: "Residenziale",
    brand: "MAXA",
    descrizione:
      "Soluzione entry level dimensionata bene. Filtro elettrostatico, deumidificazione attiva, consumi contenuti.",
    spec: "9.000 / 12.000 BTU · A++",
    pdf: "/docs/residenziale-light.pdf",
    image: "/images/residenziale-light.png",
  },

  // ── Commerciale ───────────────────────────────────────
  {
    slug: "commerciale-cassetta",
    nome: "Cassetta",
    categoria: "Commerciale",
    brand: "Carrier",
    descrizione:
      "Unità a cassetta da incasso a controsoffitto, 4 vie di mandata. Per uffici aperti, sale riunioni e showroom.",
    spec: "18.000 → 48.000 BTU · 4 vie",
    pdf: "/docs/commerciale-cassetta.pdf",
    image: "/images/mono-cassetta.png",
  },
  {
    slug: "commerciale-soffitto-pavimento",
    nome: "Soffitto-Pavimento",
    categoria: "Commerciale",
    brand: "Carrier",
    descrizione:
      "Versatile, installabile a parete alta o a basamento. Soluzione standard per locali commerciali e show-room.",
    spec: "24.000 → 60.000 BTU · doppio orientamento",
    pdf: "/docs/commerciale-soffitto-pavimento.pdf",
    image: "/images/soffitto-pavimento.png",
  },
  {
    slug: "commerciale-canalizzato",
    nome: "Canalizzato",
    categoria: "Commerciale",
    brand: "Carrier",
    descrizione:
      "Soluzione invisibile a canalizzazione. Per ristrutturazioni con controsoffitto, distribuisce aria su più ambienti da una sola macchina.",
    spec: "24.000 → 60.000 BTU · multi-ambiente",
    pdf: "/docs/commerciale-canalizzato.pdf",
    image: "/images/commerciale-canalizzato.png",
  },
  {
    slug: "commerciale-colonna",
    nome: "Colonna",
    categoria: "Commerciale",
    brand: "Carrier",
    descrizione:
      "Unità a colonna da terra ad alto rendimento. Negozi, hall, ambienti con vetrate ampie e soffitti alti.",
    spec: "24.000 → 60.000 BTU · alta resa",
    pdf: "/docs/commerciale-colonna.pdf",
    image: "/images/commerciale-colonna.png",
  },
  {
    slug: "commerciale-console",
    nome: "Console",
    categoria: "Commerciale",
    brand: "Carrier",
    descrizione:
      "Console da pavimento o pensile. Profilo basso, distribuzione orizzontale dell'aria, ideale sotto finestre.",
    spec: "12.000 → 24.000 BTU · slim design",
    pdf: "/docs/commerciale-console.pdf",
    image: "/images/commerciale-console.png",
  },
  {
    slug: "commerciale-universal",
    nome: "Universal DC",
    categoria: "Commerciale",
    brand: "Carrier",
    descrizione:
      "Linea VRF a corrente continua per impianti commerciali multi-ambiente. Bilanciamento di carico avanzato, Wi-Fi e supervisione.",
    spec: "VRF · DC inverter · multi-zona",
    pdf: "/docs/commerciale-universal.pdf",
    image: "/images/universal-dc.png",
  },

  // ── Monoblocco ────────────────────────────────────────
  {
    slug: "monoblocco-bello",
    nome: "Il Bello (Monoblocco)",
    categoria: "Monoblocco",
    brand: "Olimpia Splendid",
    descrizione:
      "Climatizzatore monoblocco senza unità esterna. Ideale per palazzi storici con vincoli paesaggistici. Soluzione elegante e silenziosa.",
    spec: "10.000 BTU · senza split esterno",
    pdf: "/docs/monoblocco-il-bello.pdf",
    image: "/images/monoblocco-ilbello.jpg",
  },
  {
    slug: "monoblocco-portatile",
    nome: "Portatile",
    categoria: "Monoblocco",
    brand: "MAXA",
    descrizione:
      "Climatizzatore portatile con tubo di scarico. Soluzione tampone o stagionale per uffici temporanei.",
    spec: "9.000 BTU · 3 modalità",
    pdf: "/docs/monoblocco-portatile.pdf",
    image: "/images/monoblocco-portatile.png",
  },

  // ── Industriale ───────────────────────────────────────
  {
    slug: "industriale-carrier-idronico",
    nome: "Carrier Idronico XP Energy",
    categoria: "Industriale",
    brand: "Carrier",
    descrizione:
      "Pompa di calore idronica industriale ad alta efficienza. Per uffici di grandi dimensioni, hotel, condomini con impianto centralizzato.",
    spec: "Idronica · alta potenza · A+++",
    pdf: "/docs/industriale-carrier-idronico.pdf",
    image: "/images/carrier-xp-energy.png",
  },
];

export const categorie: ProdottoCategoria[] = [
  "Residenziale",
  "Commerciale",
  "Monoblocco",
  "Industriale",
];
