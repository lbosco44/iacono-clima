export type CasoNicchia = "horeca" | "condominio" | "residenziale" | "commerciale";

export type Caso = {
  id: string;
  nicchia: CasoNicchia;
  tag: string;
  title: string;
  story: string;
  spec: string;
  image: string;
  alt: string;
};

export const casi: Caso[] = [
  {
    id: "horeca-ortigia",
    nicchia: "horeca",
    tag: "HoReCa",
    title: "B&B in Ortigia, sei stanze climatizzate in due giorni.",
    story:
      "Un B&B nel cuore di Ortigia, edificio storico, vincoli architettonici, alta stagione alle porte. Multisplit Carrier dimensionato sui carichi reali, linee passate dietro i cornicioni esistenti, intervento concluso prima dell'apertura.",
    spec: "6 split · multisplit Carrier · Ortigia · 2025",
    image: "/images/caso-horeca.jpeg",
    alt: "Interno climatizzato di B&B in Ortigia con split installato",
  },
  {
    id: "condominio-tisia",
    nicchia: "condominio",
    tag: "Condominio",
    title: "Condominio a Tisia, 12 appartamenti rifatti in tre settimane.",
    story:
      "Sostituzione completa degli impianti su un palazzo di otto piani. Coordinamento col condominio, lavori in successione, scarichi condensa consolidati per evitare le infiltrazioni che il vecchio impianto causava da anni.",
    spec: "12 monosplit · MAXA · Tisia, Siracusa · 2024",
    image: "/images/caso-condominio.jpeg",
    alt: "Facciata di un condominio con unità esterne installate ordinatamente",
  },
  {
    id: "residenziale-villa",
    nicchia: "residenziale",
    tag: "Residenziale",
    title: "Villa singola con pompa di calore e idronica integrata.",
    story:
      "Una villa di duecento metri quadri, raffrescamento estivo e riscaldamento invernale gestiti da un'unica pompa di calore Carrier. Comfort lineare tutto l'anno, bolletta più bassa del previsto.",
    spec: "1 PdC idronica · 4 fan-coil · Carrier · 2024",
    image: "/images/caso-residenziale.jpeg",
    alt: "Soggiorno residenziale con sistema idronico integrato",
  },
  {
    id: "commerciale-negozio",
    nicchia: "commerciale",
    tag: "Commerciale",
    title: "Negozio in centro, due colonne ad alta efficienza.",
    story:
      "Un punto vendita aperto sette giorni su sette, vetrine grandi, soffitti alti. Due unità a colonna che lavorano in tandem, controllo da remoto, intervento senza chiudere il negozio nemmeno un giorno.",
    spec: "2 unità a colonna · Carrier · Siracusa centro · 2025",
    image: "/images/caso-commerciale.jpeg",
    alt: "Negozio in Siracusa con climatizzatori a colonna installati",
  },
];
