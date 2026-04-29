export type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Sopralluogo",
    description:
      "Veniamo a vedere. Misuriamo gli ambienti, valutiamo l'isolamento, individuiamo i percorsi delle linee. Prima di proporre, capiamo. Sopralluogo gratuito a Siracusa e provincia.",
    image: "/images/step-sopralluogo.jpeg",
    alt: "Tecnico Iacono Clima durante il sopralluogo in casa del cliente",
  },
  {
    number: "02",
    title: "Preventivo",
    description:
      "Documento chiaro, voci dettagliate. Marca, modello, BTU, costi di installazione, tempi. Niente promesse vaghe, nessuna sorpresa al saldo.",
    image: "/images/step-preventivo.jpeg",
    alt: "Preventivo dettagliato consegnato al cliente",
  },
  {
    number: "03",
    title: "Installazione",
    description:
      "Squadra interna, attrezzatura nostra. Linee in rame coibentate, scarico condensa eseguito correttamente, fissaggi a norma. Lasciamo l'ambiente come l'abbiamo trovato.",
    image: "/images/step-installazione.jpeg",
    alt: "Installazione di un'unità split da parte del team Iacono Clima",
  },
  {
    number: "04",
    title: "Manutenzione",
    description:
      "Controlli annuali, sanificazione, ricarica gas, verifica F-GAS. Programmiamo noi, ti chiamiamo noi. Un impianto che dura vent'anni si tiene così.",
    image: "/images/step-manutenzione.jpeg",
    alt: "Manutenzione programmata di un climatizzatore",
  },
];
