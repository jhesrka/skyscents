export type PerfumeTag = "DESIGNER" | "ARABIC";

export interface PerfumeSizeOption {
  label: "Decant 3 ml" | "Decant 5 ml" | "Decant 10 ml";
  price: string;
}

export interface PerfumeItem {
  id: string;
  section: "mas-vendidos" | "mujer" | "disenador" | "arabes";
  tag?: PerfumeTag;
  name: string;
  brandAndVolume: string;
  brand: string;
  volume: string;
  notes: {
    salida: string;
    corazon: string;
    fondo: string;
  };
  decants: PerfumeSizeOption[];
  fullBottlePrice: string;
  image?: string;
  imageBgWhite?: boolean;
}

export const SITE_CONFIG = {
  name: "Sky Scents",
  arabicSubtitle: "عطر السماء",
  tagline: "Bespoke signature fragrances, tailored for you",
  heroSubtitle: "Decants & Full Bottles · Designer & Arabic Fragrances",
  whatsappNumber: "527552217915",
  whatsappDisplay: "+52 755 221 7915",
  whatsappDefaultMessage:
    "Hello Sky Scents ✨, I would like to inquire about your catalog of perfumes and decants.",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
    whatsapp: "https://wa.me/527552217915",
  },
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

export function generatePerfumeOrderMessage(
  item: PerfumeItem,
  selectedPresentation?: { label: string; price: string }
): string {
  const presentationLabel = selectedPresentation?.label || "Decant or Full Bottle";
  const presentationPrice = selectedPresentation?.price || "Inquire";

  return `✨ NEW ORDER — SKY SCENTS ✨

📦 Perfume: ${item.name}
🏷️ Details: ${item.brandAndVolume}
🧪 Size: ${presentationLabel}
💰 Price: ${presentationPrice}

📍 Shipping & Customer Details:
• Full Name: 
• City / State or Zip Code: 
• Payment Method: [SPEI Bank Transfer / Deposit / Cash]

Is this available for immediate dispatch?`;
}

export const MAS_VENDIDOS: PerfumeItem[] = [
  {
    id: "mv-valentino-born-in-roma-intense",
    section: "mas-vendidos",
    tag: "DESIGNER",
    name: "Valentino Born in Roma Intense",
    brandAndVolume: "Valentino Uomo · 100 ml",
    brand: "Valentino Uomo",
    volume: "100 ml",
    image: "/mas-vendidos/BIR INTENSE.webp",
    notes: {
      salida: "Vanilla, bourbon, ginger",
      corazon: "Nutmeg, salty accord, lavandin",
      fondo: "Smoky vetiver",
    },
    decants: [
      { label: "Decant 3 ml", price: "$185 MXN" },
      { label: "Decant 5 ml", price: "$255 MXN" },
      { label: "Decant 10 ml", price: "$399 MXN" },
    ],
    fullBottlePrice: "$3,100 MXN",
  },
  {
    id: "mv-afnan-9pm-night-out",
    section: "mas-vendidos",
    tag: "ARABIC",
    name: "Afnan 9PM Night Out",
    brandAndVolume: "Afnan · 100 ml",
    brand: "Afnan",
    volume: "100 ml",
    image: "/mas-vendidos/9PM Night Out.webp",
    notes: {
      salida: "Dragon fruit, bergamot, cognac, lavender, apple",
      corazon: "Cardamom, majonial, suede, toffee, cedarwood",
      fondo: "Tonka bean, aquilawood, ambrofix, patchouli",
    },
    decants: [
      { label: "Decant 5 ml", price: "$118 MXN" },
      { label: "Decant 10 ml", price: "$195 MXN" },
    ],
    fullBottlePrice: "$1,350 MXN",
  },
  {
    id: "mv-jpg-le-beau-le-parfum",
    section: "mas-vendidos",
    tag: "DESIGNER",
    name: "Jean Paul Gaultier Le Beau Le Parfum",
    brandAndVolume: "Jean Paul Gaultier · 125 ml",
    brand: "Jean Paul Gaultier",
    volume: "125 ml",
    image: "/mas-vendidos/JPG LE BEAU LE PARFUM.webp",
    notes: {
      salida: "Pineapple, coconutnut",
      corazon: "Tonka bean",
      fondo: "Sandalwood, ambergris, woods",
    },
    decants: [
      { label: "Decant 3 ml", price: "$145 MXN" },
      { label: "Decant 5 ml", price: "$210 MXN" },
      { label: "Decant 10 ml", price: "$370 MXN" },
    ],
    fullBottlePrice: "$2,690 MXN",
  },
  {
    id: "mv-stronger-with-you-intensely",
    section: "mas-vendidos",
    tag: "DESIGNER",
    name: "Emporio Armani Stronger With You Intensely",
    brandAndVolume: "Emporio Armani · 100 ml",
    brand: "Emporio Armani",
    volume: "100 ml",
    image: "/mas-vendidos/SWY INTENSILY.webp",
    notes: {
      salida: "Pink pepper, juniper, violet",
      corazon: "Tofee, cinnamon, lavender, sage",
      fondo: "Vanilla, amber, tonka bean, suede",
    },
    decants: [
      { label: "Decant 3 ml", price: "$148 MXN" },
      { label: "Decant 5 ml", price: "$225 MXN" },
      { label: "Decant 10 ml", price: "$387 MXN" },
    ],
    fullBottlePrice: "$2,450 MXN",
  },
];

export const MUJER_CATALOG: PerfumeItem[] = [
  {
    id: "mujer-la-bomba-edp",
    section: "mujer",
    name: "La Bomba EDP",
    brandAndVolume: "Carolina Herrera · 80 ml",
    brand: "Carolina Herrera",
    volume: "80 ml",
    image: "/mujer/carolina-herrera-la-bomba-16x9.webp",
    notes: {
      salida: "Mandarin orange, dragon fruit (fruta del dragón)",
      corazon: "Peony, cherry",
      fondo: "Vanilla, sandalwood, patchouli",
    },
    decants: [
      { label: "Decant 3 ml", price: "$180 MXN" },
      { label: "Decant 5 ml", price: "$290 MXN" },
      { label: "Decant 10 ml", price: "$495 MXN" },
    ],
    fullBottlePrice: "$2,900 MXN",
  },
  {
    id: "mujer-miss-dior-parfum",
    section: "mujer",
    name: "Miss Dior Parfum",
    brandAndVolume: "Christian Dior · 80 ml",
    brand: "Christian Dior",
    volume: "80 ml",
    image: "/mujer/christian-dior-miss-dior-16x9.webp",
    notes: {
      salida: "Mandarin orange",
      corazon: "Star jasmine, wild strawberry",
      fondo: "Amber woods, patchouli, cedarwood, oakmoss",
    },
    decants: [
      { label: "Decant 3 ml", price: "$220 MXN" },
      { label: "Decant 5 ml", price: "$390 MXN" },
      { label: "Decant 10 ml", price: "$698 MXN" },
    ],
    fullBottlePrice: "$3,450 MXN",
  },
  {
    id: "mujer-bright-crystal-parfum",
    section: "mujer",
    name: "Bright Crystal Parfum",
    brandAndVolume: "Versace · 90 ml",
    brand: "Versace",
    volume: "90 ml",
    image: "/mujer/versace-bright-crystal-16x9.webp",
    notes: {
      salida: "Red fruits, yuzu, pomegranate, caramel",
      corazon: "Peony, magnolia, lotus flower, helvetolida",
      fondo: "Ambroxan super, norlimbanol, musk",
    },
    decants: [
      { label: "Decant 3 ml", price: "$115 MXN" },
      { label: "Decant 5 ml", price: "$180 MXN" },
      { label: "Decant 10 ml", price: "$320 MXN" },
    ],
    fullBottlePrice: "$1,980 MXN",
  },
];

export const DISENADOR_CATALOG: PerfumeItem[] = [
  {
    id: "dis-stronger-with-you-intensely",
    section: "disenador",
    tag: "DESIGNER",
    name: "Stronger With You Intensely",
    brandAndVolume: "Emporio Armani · 100 ml",
    brand: "Emporio Armani",
    volume: "100 ml",
    image: "/mas-vendidos/SWY INTENSILY.webp",
    notes: {
      salida: "Pink pepper, juniper, violet",
      corazon: "Tofee, cinnamon, lavender, sage",
      fondo: "Vanilla, amber, tonka bean, suede",
    },
    decants: [
      { label: "Decant 3 ml", price: "$148 MXN" },
      { label: "Decant 5 ml", price: "$225 MXN" },
      { label: "Decant 10 ml", price: "$387 MXN" },
    ],
    fullBottlePrice: "$2,450 MXN",
  },
  {
    id: "dis-born-in-roma-intense",
    section: "disenador",
    tag: "DESIGNER",
    name: "Born in Roma Intense",
    brandAndVolume: "Valentino Uomo · 100 ml",
    brand: "Valentino Uomo",
    volume: "100 ml",
    image: "/mas-vendidos/BIR INTENSE.webp",
    notes: {
      salida: "Vanilla, bourbon, ginger",
      corazon: "Nutmeg, salty accord, lavandin",
      fondo: "Smoky vetiver",
    },
    decants: [
      { label: "Decant 3 ml", price: "$185 MXN" },
      { label: "Decant 5 ml", price: "$255 MXN" },
      { label: "Decant 10 ml", price: "$399 MXN" },
    ],
    fullBottlePrice: "$3,100 MXN",
  },
  {
    id: "dis-eros-flame",
    section: "disenador",
    tag: "DESIGNER",
    name: "Eros Flame",
    brandAndVolume: "Versace · 100 ml",
    brand: "Versace",
    volume: "100 ml",
    image: "/disenador/versace-eros-flame-extracto-16x9.webp",
    notes: {
      salida: "Mandarin orange italiana, pimienta negra, rosemary, lemon italiano, chinotto",
      corazon: "Geranio, rosa, pimienta de Madagascar",
      fondo: "Tonka bean, vanilla, sandalwood, patchouli, oakmoss de roble, cedarwood",
    },
    decants: [
      { label: "Decant 3 ml", price: "$115 MXN" },
      { label: "Decant 5 ml", price: "$170 MXN" },
      { label: "Decant 10 ml", price: "$288 MXN" },
    ],
    fullBottlePrice: "$1,890 MXN",
  },
  {
    id: "dis-acqua-di-gio-parfum",
    section: "disenador",
    tag: "DESIGNER",
    name: "Acqua di Giò Parfum",
    brandAndVolume: "Giorgio Armani · 100 ml",
    brand: "Giorgio Armani",
    volume: "100 ml",
    image: "/disenador/acqua-di-gio-parfum-16x9.webp",
    notes: {
      salida: "Marine notes, bergamot",
      corazon: "Romero, sage, geranio",
      fondo: "Incienso, patchouli",
    },
    decants: [
      { label: "Decant 3 ml", price: "$159 MXN" },
      { label: "Decant 5 ml", price: "$225 MXN" },
      { label: "Decant 10 ml", price: "$360 MXN" },
    ],
    fullBottlePrice: "$2,900 MXN",
  },
  {
    id: "dis-eros-edp",
    section: "disenador",
    tag: "DESIGNER",
    name: "Eros EDP",
    brandAndVolume: "Versace · 100 ml",
    brand: "Versace",
    volume: "100 ml",
    image: "/disenador/versace-eros-eau-de-parfum-16x9.webp",
    notes: {
      salida: "Menta, lemon italiano, apple verde",
      corazon: "Tonka bean, geranio, ambroxan",
      fondo: "Vanilla de Madagascar, cedarwood de Virginia, cedarwood del Atlas, oakmoss de roble",
    },
    decants: [
      { label: "Decant 3 ml", price: "$99 MXN" },
      { label: "Decant 5 ml", price: "$145 MXN" },
      { label: "Decant 10 ml", price: "$250 MXN" },
    ],
    fullBottlePrice: "$1,650 MXN",
  },
  {
    id: "dis-phantom-parfum",
    section: "disenador",
    tag: "DESIGNER",
    name: "Phantom Parfum",
    brandAndVolume: "Paco Rabanne · 100 ml",
    brand: "Paco Rabanne",
    volume: "100 ml",
    image: "/disenador/paco-rabanne-phantom-parfum-16x9.webp",
    notes: {
      salida: "Bergamota, lemon, cardamom",
      corazon: "Lavanda, geranio, patchouli, cedarwood",
      fondo: "Vanilla, bálsamo de tolú, vetiver",
    },
    decants: [
      { label: "Decant 3 ml", price: "$120 MXN" },
      { label: "Decant 5 ml", price: "$199 MXN" },
      { label: "Decant 10 ml", price: "$335 MXN" },
    ],
    fullBottlePrice: "$2,350 MXN",
  },
  {
    id: "dis-le-beau-le-parfum",
    section: "disenador",
    tag: "DESIGNER",
    name: "Le Beau Le Parfum",
    brandAndVolume: "Jean Paul Gaultier · 125 ml",
    brand: "Jean Paul Gaultier",
    volume: "125 ml",
    image: "/mas-vendidos/JPG LE BEAU LE PARFUM.webp",
    notes: {
      salida: "Pineapple, coconutnut",
      corazon: "Tonka bean",
      fondo: "Sandalwood, ambergris, woods",
    },
    decants: [
      { label: "Decant 3 ml", price: "$145 MXN" },
      { label: "Decant 5 ml", price: "$210 MXN" },
      { label: "Decant 10 ml", price: "$370 MXN" },
    ],
    fullBottlePrice: "$2,690 MXN",
  },
  {
    id: "dis-the-most-wanted-parfum",
    section: "disenador",
    tag: "DESIGNER",
    name: "The Most Wanted Parfum",
    brandAndVolume: "Azzaro · 100 ml",
    brand: "Azzaro",
    volume: "100 ml",
    image: "/disenador/azzaro-the-most-wanted-parfum-16x9.webp",
    notes: {
      salida: "Jengibre",
      corazon: "Borbón de vanilla",
      fondo: "Borbón de vanilla, acorde amaderado",
    },
    decants: [
      { label: "Decant 3 ml", price: "$115 MXN" },
      { label: "Decant 5 ml", price: "$188 MXN" },
      { label: "Decant 10 ml", price: "$315 MXN" },
    ],
    fullBottlePrice: "$2,090 MXN",
  },
  {
    id: "dis-imagination",
    section: "disenador",
    tag: "DESIGNER",
    name: "Imagination",
    brandAndVolume: "Louis Vuitton · 100 ml",
    brand: "Louis Vuitton",
    volume: "100 ml",
    image: "/disenador/louis-vuitton-imagination-16x9.webp",
    notes: {
      salida: "Ámbar, té negro",
      corazon: "Bergamota",
      fondo: "Cítricos, especias, ambroxan",
    },
    decants: [
      { label: "Decant 3 ml", price: "$295 MXN" },
      { label: "Decant 5 ml", price: "$490 MXN" },
      { label: "Decant 10 ml", price: "$940 MXN" },
    ],
    fullBottlePrice: "Consultar",
  },
  {
    id: "dis-one-million-edt",
    section: "disenador",
    tag: "DESIGNER",
    name: "One Million EDT",
    brandAndVolume: "Paco Rabanne · 100 ml",
    brand: "Paco Rabanne",
    volume: "100 ml",
    image: "/disenador/paco-rabanne-1-million-16x9.webp",
    notes: {
      salida: "Mandarin orange sanguina, toronja, mint",
      corazon: "Canela, notas especiadas",
      fondo: "Cuero, amber, patchouli, notas amaderadas",
    },
    decants: [
      { label: "Decant 3 ml", price: "$95 MXN" },
      { label: "Decant 5 ml", price: "$160 MXN" },
      { label: "Decant 10 ml", price: "$255 MXN" },
    ],
    fullBottlePrice: "$2,150 MXN",
  },
  {
    id: "dis-voyage-edt",
    section: "disenador",
    tag: "DESIGNER",
    name: "Voyage EDT",
    brandAndVolume: "Nautica · 100 ml",
    brand: "Nautica",
    volume: "100 ml",
    image: "/disenador/nautica-voyage-16x9.webp",
    notes: {
      salida: "Hojas verdes, apple",
      corazon: "Loto, mimosa",
      fondo: "Almizcle, cedarwood, oakmoss de roble, amber",
    },
    decants: [
      { label: "Decant 3 ml", price: "$35 MXN" },
      { label: "Decant 5 ml", price: "$57 MXN" },
      { label: "Decant 10 ml", price: "$88 MXN" },
    ],
    fullBottlePrice: "$440 MXN",
  },
  {
    id: "dis-nautica-blue-edt",
    section: "disenador",
    tag: "DESIGNER",
    name: "Nautica Blue EDT",
    brandAndVolume: "Nautica · 100 ml",
    brand: "Nautica",
    volume: "100 ml",
    image: "/disenador/nautica-blue-edt-16x9.webp",
    notes: {
      salida: "Pineapple, durazno, bergamot",
      corazon: "Jazmín, nenúfar (lirio de agua)",
      fondo: "Sandalwood, cedarwood, musk",
    },
    decants: [
      { label: "Decant 3 ml", price: "$40 MXN" },
      { label: "Decant 5 ml", price: "$60 MXN" },
      { label: "Decant 10 ml", price: "$80 MXN" },
    ],
    fullBottlePrice: "$480 MXN",
  },
];

export const ARABES_CATALOG: PerfumeItem[] = [
  {
    id: "ara-hawas-ice",
    section: "arabes",
    tag: "ARABIC",
    name: "Hawas Ice",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-ice-16x9.webp",
    notes: {
      salida: "Manzana, lemon italiano, bergamot siciliana, anís estrellado",
      corazon: "Ciruela, flor de azahar, cardamom",
      fondo: "Almizcle, amber, madera flotante, oakmoss",
    },
    decants: [
      { label: "Decant 5 ml", price: "$95 MXN" },
      { label: "Decant 10 ml", price: "$160 MXN" },
    ],
    fullBottlePrice: "$990 MXN",
  },
  {
    id: "ara-hawas-tropical",
    section: "arabes",
    tag: "ARABIC",
    name: "Hawas Tropical",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-tropical-16x9.webp",
    notes: {
      salida: "Agua de coconut, hoja de higuera, ginger",
      corazon: "Coco, higo, mint",
      fondo: "Sandalwood, tonka bean, musk",
    },
    decants: [
      { label: "Decant 5 ml", price: "$105 MXN" },
      { label: "Decant 10 ml", price: "$178 MXN" },
    ],
    fullBottlePrice: "$1,120 MXN",
  },
  {
    id: "ara-hawas-malibu",
    section: "arabes",
    tag: "ARABIC",
    name: "Hawas Malibu",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-malibu-16x9.webp",
    notes: {
      salida: "Pineapple, naranja, toronja",
      corazon: "Iris, amber, lavender",
      fondo: "Tonka bean, musk, patchouli, cashmerán",
    },
    decants: [
      { label: "Decant 5 ml", price: "$95 MXN" },
      { label: "Decant 10 ml", price: "$160 MXN" },
    ],
    fullBottlePrice: "$1,150 MXN",
  },
  {
    id: "ara-hawas-kobra",
    section: "arabes",
    tag: "ARABIC",
    name: "Hawas Kobra",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-kobra-16x9.webp",
    notes: {
      salida: "Jengibre, bergamot, mandarin orange",
      corazon: "Té verde, cinnamon, neroli",
      fondo: "Almizcle, woods, amber",
    },
    decants: [
      { label: "Decant 5 ml", price: "$95 MXN" },
      { label: "Decant 10 ml", price: "$160 MXN" },
    ],
    fullBottlePrice: "$990 MXN",
  },
  {
    id: "ara-hawas-verde",
    section: "arabes",
    tag: "ARABIC",
    name: "Hawas Verde",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-verde-16x9.webp",
    notes: {
      salida: "Manzana, lemon, bergamot, cinnamon",
      corazon: "Notas acuáticas, lavender, violet, cardamom, ciruela",
      fondo: "Almizcle, amber, sandalwood, patchouli, oakmoss",
    },
    decants: [
      { label: "Decant 5 ml", price: "Consultar" },
      { label: "Decant 10 ml", price: "Consultar" },
    ],
    fullBottlePrice: "Consultar",
  },
  {
    id: "ara-kamrah",
    section: "arabes",
    tag: "ARABIC",
    name: "Kamrah",
    brandAndVolume: "Lattafa · 100 ml",
    brand: "Lattafa",
    volume: "100 ml",
    image: "/varios/lattafa-khamrah-16x9.webp",
    notes: {
      salida: "Bergamota, cinnamon, nutmeg",
      corazon: "Dátiles, lirio de los valles, praliné, nardo",
      fondo: "Tonka bean tostada, vanilla, mirra, benjuí, amberwood, aquilawood",
    },
    decants: [
      { label: "Decant 5 ml", price: "$88 MXN" },
      { label: "Decant 10 ml", price: "$150 MXN" },
    ],
    fullBottlePrice: "$780 MXN",
  },
  {
    id: "ara-kamrah-waha",
    section: "arabes",
    tag: "ARABIC",
    name: "Kamrah Waha",
    brandAndVolume: "Lattafa · 100 ml",
    brand: "Lattafa",
    volume: "100 ml",
    image: "/varios/lattafa-khamrah-waha-16x9.webp",
    notes: {
      salida: "Bergamota, yuzu, juniper, ginger",
      corazon: "Iris, pepino, sage, acorde de sal marina",
      fondo: "Aquilawood, tonka bean, vanilla, musk, ambrofix",
    },
    decants: [
      { label: "Decant 5 ml", price: "$88 MXN" },
      { label: "Decant 10 ml", price: "$150 MXN" },
    ],
    fullBottlePrice: "$1,100 MXN",
  },
  {
    id: "ara-kamrah-qahwa",
    section: "arabes",
    tag: "ARABIC",
    name: "Kamrah Qahwa",
    brandAndVolume: "Lattafa · 100 ml",
    brand: "Lattafa",
    volume: "100 ml",
    image: "/varios/lattafa-khamrah-qahwa-16x9.webp",
    notes: {
      salida: "Canela, cardamom, ginger",
      corazon: "Praliné, frutas confitadas, flores blancas",
      fondo: "Café, vanilla, tonka bean, benjuí, musk",
    },
    decants: [
      { label: "Decant 5 ml", price: "$95 MXN" },
      { label: "Decant 10 ml", price: "$160 MXN" },
    ],
    fullBottlePrice: "$780 MXN",
  },
  {
    id: "ara-odyssey-aqua",
    section: "arabes",
    tag: "ARABIC",
    name: "Odyssey Aqua",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-aqua-16x9.webp",
    notes: {
      salida: "Toronja, naranja, artemisia",
      corazon: "Lavanda, mint",
      fondo: "Ciprés, patchouli, ambroxan",
    },
    decants: [
      { label: "Decant 5 ml", price: "$85 MXN" },
      { label: "Decant 10 ml", price: "$140 MXN" },
    ],
    fullBottlePrice: "$950 MXN",
  },
  {
    id: "ara-mandarin-sky-elixir",
    section: "arabes",
    tag: "ARABIC",
    name: "Mandarin Sky Elixir",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-mandarinsky-elixir-16x9.webp",
    notes: {
      salida: "Mandarin orange, naranja, lavender, cardamom, pimienta negra",
      corazon: "Caramelo, tonka bean, patchouli, incense",
      fondo: "Vanilla, vetiver",
    },
    decants: [
      { label: "Decant 5 ml", price: "$99 MXN" },
      { label: "Decant 10 ml", price: "$167 MXN" },
    ],
    fullBottlePrice: "$1,050 MXN",
  },
  {
    id: "ara-odyssey-mega",
    section: "arabes",
    tag: "ARABIC",
    name: "Odyssey Mega",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-mega-16x9.webp",
    notes: {
      salida: "Jengibre, bergamot, naranja, lemon, mint",
      corazon: "Pineapple, sage, juniper, geranio",
      fondo: "Almizcle, cedarwood, vetiver, tonka bean",
    },
    decants: [
      { label: "Decant 5 ml", price: "$88 MXN" },
      { label: "Decant 10 ml", price: "$150 MXN" },
    ],
    fullBottlePrice: "$700 MXN",
  },
  {
    id: "ara-9pm-night-out",
    section: "arabes",
    tag: "ARABIC",
    name: "9PM Night Out",
    brandAndVolume: "Afnan · 100 ml",
    brand: "Afnan",
    volume: "100 ml",
    image: "/varios/afnan-9pm-night-out-16x9.webp",
    notes: {
      salida: "Dragon fruit, bergamot, cognac, lavender, apple",
      corazon: "Cardamom, majonial, suede, toffee, cedarwood",
      fondo: "Tonka bean, aquilawood, ambrofix, patchouli",
    },
    decants: [
      { label: "Decant 5 ml", price: "$118 MXN" },
      { label: "Decant 10 ml", price: "$195 MXN" },
    ],
    fullBottlePrice: "$1,350 MXN",
  },
  {
    id: "ara-stallion-53",
    section: "arabes",
    tag: "ARABIC",
    name: "Stallion 53",
    brandAndVolume: "Emper · 100 ml",
    brand: "Emper",
    volume: "100 ml",
    image: "/varios/stallion-53-16x9.webp",
    notes: {
      salida: "Cardamom, violet",
      corazon: "Ámbar, iris",
      fondo: "Sandalwood, cuero, cedarwood de Virginia, papiro",
    },
    decants: [
      { label: "Decant 5 ml", price: "$88 MXN" },
      { label: "Decant 10 ml", price: "$150 MXN" },
    ],
    fullBottlePrice: "$720 MXN",
  },
  {
    id: "ara-odyssey-homme",
    section: "arabes",
    tag: "ARABIC",
    name: "Odyssey Homme",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-homme-16x9.webp",
    notes: {
      salida: "Cardamom, mandarin orange, neroli",
      corazon: "Flor de azahar, rosa",
      fondo: "Vanilla, notas amaderadas, sandalwood, amber",
    },
    decants: [
      { label: "Decant 5 ml", price: "$88 MXN" },
      { label: "Decant 10 ml", price: "$150 MXN" },
    ],
    fullBottlePrice: "$790 MXN",
  },
  {
    id: "ara-rayhaan-aquatica",
    section: "arabes",
    tag: "ARABIC",
    name: "Rayhaan Aquatica",
    brandAndVolume: "Rayhaan · 100 ml",
    brand: "Rayhaan",
    volume: "100 ml",
    image: "/varios/rayhaan-aquatica-16x9.webp",
    notes: {
      salida: "Lima, leche de coconut, bergamot, mandarin orange",
      corazon: "Caña de azúcar, hibisco, jasmine, gardenia",
      fondo: "Ron, musk, tonka bean, patchouli",
    },
    decants: [
      { label: "Decant 5 ml", price: "$115 MXN" },
      { label: "Decant 10 ml", price: "$190 MXN" },
    ],
    fullBottlePrice: "$1,100 MXN",
  },
  {
    id: "ara-9am-dive",
    section: "arabes",
    tag: "ARABIC",
    name: "9AM Dive",
    brandAndVolume: "Afnan · 100 ml",
    brand: "Afnan",
    volume: "100 ml",
    image: "/varios/afnan-9am-dive-16x9.webp",
    notes: {
      salida: "Limón, pimienta, mint, blackcurrant",
      corazon: "Manzana, incense, cedarwood",
      fondo: "Patchouli, jasmine, ginger, sandalwood",
    },
    decants: [
      { label: "Decant 5 ml", price: "$98 MXN" },
      { label: "Decant 10 ml", price: "$155 MXN" },
    ],
    fullBottlePrice: "$740 MXN",
  },
];

export const ALL_PERFUMES: PerfumeItem[] = [
  ...MAS_VENDIDOS,
  ...MUJER_CATALOG,
  ...DISENADOR_CATALOG,
  ...ARABES_CATALOG,
];

export const FAQ_SIZES = [
  {
    size: "3",
    unit: "ml",
    subtitle: "TO SAMPLE",
    description:
      "If you have never smelled the fragrance and want to see how it performs on your skin, start with 3 ml to discover if it is truly for you.",
  },
  {
    size: "5",
    unit: "ml",
    subtitle: "TO EXPLORE & WEAR",
    description:
      "If it caught your attention and you want to wear it for several days to evaluate longevity, sillage and dry-down before committing, 5 ml is ideal.",
  },
  {
    size: "10",
    unit: "ml",
    subtitle: "WHEN YOU LOVE IT",
    description:
      "Perfect when you already know and love the scent. You get a generous amount for multiple occasions without needing to buy the full bottle immediately.",
  },
];

export const SHIPPING_HIGHLIGHTS = [
  {
    id: "mexico",
    icon: "truck" as const,
    title: "Shipping Across Mexico",
    subtitle: "Flat rate $189 MXN",
  },
  {
    id: "free",
    icon: "tag" as const,
    title: "100% Free Shipping",
    subtitle: "On decant orders over $1,850 MXN",
  },
  {
    id: "half",
    icon: "drop" as const,
    title: "50% Off Shipping",
    subtitle: "On orders over $1,400 MXN",
  },
  {
    id: "days",
    icon: "clock" as const,
    title: "3–5 Business Days",
    subtitle: "Estimated delivery time",
  },
];

export const SHIPPING_DAYS = [
  { day: "Mon", variant: "gold" as const },
  { day: "Tue", variant: "gold" as const },
  { day: "Wed", variant: "gold" as const },
  { day: "Thu", variant: "gold" as const },
  { day: "Fri", variant: "cream" as const },
  { day: "Sat", variant: "cream" as const },
  { day: "Sun", variant: "cream" as const },
];

