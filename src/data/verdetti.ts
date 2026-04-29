export type Verdetto = {
  text: string;
  author: string;
  context: string;
  year: string;
};

export const verdetti: Verdetto[] = [
  {
    text: "Mi hanno consigliato il taglio giusto, non il più caro. Sopralluogo serio, preventivo chiaro, installazione pulita. Dopo un anno l'impianto va ancora come il primo giorno.",
    author: "Maria T.",
    context: "Multisplit residenziale",
    year: "Siracusa, 2024",
  },
  {
    text: "Avevamo bisogno di climatizzare sei stanze di un B&B in Ortigia prima di Pasqua. Lo hanno fatto in due giorni, senza un dito fuori posto. Tornano per la manutenzione ogni anno.",
    author: "Giuseppe L.",
    context: "B&B HoReCa",
    year: "Ortigia, 2024",
  },
  {
    text: "Sostituzione completa dell'impianto del condominio. Coordinamento perfetto con l'amministratore, lavori finiti nei tempi promessi, niente lamentele dai condomini. Cosa rara.",
    author: "Antonio R.",
    context: "Condominio 12 unità",
    year: "Tisia, 2024",
  },
  {
    text: "Negozio aperto tutti i giorni, due colonne installate senza chiudere mai. Funzionano benissimo e consumano meno del vecchio impianto. Squadra precisa, gente di parola.",
    author: "Francesca D.",
    context: "Punto vendita commerciale",
    year: "Siracusa, 2025",
  },
];
