export type Brand = {
  id: string;
  name: string;
  logo: string;
  primary: boolean;
  description?: string;
};

export const brands: Brand[] = [
  {
    id: "carrier",
    name: "Carrier",
    logo: "/images/Carrier.png",
    primary: true,
    description:
      "Il marchio storico della climatizzazione mondiale. Tecnologia americana, qualità di costruzione di altissimo livello, gamma completa per residenziale e commerciale.",
  },
  {
    id: "maxa",
    name: "MAXA",
    logo: "/images/maxa-logo-removebg-preview.png",
    primary: true,
    description:
      "Eccellenza italiana. Pompe di calore e climatizzatori progettati e prodotti in Italia, garanzia estesa, rapporto qualità-prezzo imbattibile.",
  },
  {
    id: "daikin",
    name: "Daikin",
    logo: "/images/DAIKIN_logo.svg",
    primary: false,
  },
  {
    id: "sinclair",
    name: "Sinclair",
    logo: "/images/sinclair_logo.png",
    primary: false,
  },
  {
    id: "hsd",
    name: "Hermann Saunier Duval",
    logo: "/images/herman-saunier-duval_logo.png",
    primary: false,
  },
];

export const primaryBrands = brands.filter((b) => b.primary);
export const secondaryBrands = brands.filter((b) => !b.primary);
