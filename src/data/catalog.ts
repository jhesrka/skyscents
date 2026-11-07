export type PerfumeTag = "DISEÑADOR" | "ÁRABE";

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
  tagline: "Perfumes de autor, a tu medida",
  heroSubtitle: "Decants y perfumes completos · Diseñador y árabes",
  whatsappNumber: "527552217915",
  whatsappDisplay: "+52 755 221 7915",
  whatsappDefaultMessage:
    "Hola Sky Scents ✨, me gustaría recibir asesoría sobre su catálogo de perfumes y decants.",
  socials: {
    instagram: "https://www.instagram.com/skyscents.club?dlrf=MWhzNGRyaXVra3BzOQ==",
    facebook: "https://www.facebook.com/profile.php?id=61593120072470",
    tiktok: "https://www.tiktok.com/@skyscentsclub?_r=1&_t=ZS-9B9nDzhzCvX",
    whatsapp: "https://wa.me/c/5217552217915",
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
  const presentationLabel = selectedPresentation?.label || "Decant o Botella Completa";
  const presentationPrice = selectedPresentation?.price || "Consultar";

  return `✨ NUEVO PEDIDO — SKY SCENTS ✨

📦 Perfume: ${item.name}
🏷️ Detalle: ${item.brandAndVolume}
🧪 Presentación: ${presentationLabel}
💰 Precio: ${presentationPrice}

📍 Mis datos para el pedido y envío:
• Nombre completo: 
• Ciudad / Estado o Código Postal: 
• Método de pago: [Transferencia SPEI / Depósito / Efectivo]

¿Tienen disponibilidad para envío inmediato?`;
}

export const MAS_VENDIDOS: PerfumeItem[] = [
  {
    id: "mv-valentino-born-in-roma-intense",
    section: "mas-vendidos",
    tag: "DISEÑADOR",
    name: "Valentino Born in Roma Intense",
    brandAndVolume: "Valentino Uomo · 100 ml",
    brand: "Valentino Uomo",
    volume: "100 ml",
    image: "/mas-vendidos/BIR INTENSE.webp",
    notes: {
      salida: "Vainilla, borbón, jengibre",
      corazon: "Nuez moscada, acorde salado, lavandín",
      fondo: "Vetiver ahumado",
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
    tag: "ÁRABE",
    name: "Afnan 9PM Night Out",
    brandAndVolume: "Afnan · 100 ml",
    brand: "Afnan",
    volume: "100 ml",
    image: "/mas-vendidos/9PM Night Out.webp",
    notes: {
      salida: "Fruta del dragón, bergamotaa, coñac, lavanda, manzana",
      corazon: "Cardamomo, majonial, gamuza, tofee, cedro",
      fondo: "Haba tonka, aquilawood, ambrofix, pachulí",
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
    tag: "DISEÑADOR",
    name: "Jean Paul Gaultier Le Beau Le Parfum",
    brandAndVolume: "Jean Paul Gaultier · 125 ml",
    brand: "Jean Paul Gaultier",
    volume: "125 ml",
    image: "/mas-vendidos/JPG LE BEAU LE PARFUM.webp",
    notes: {
      salida: "Piña, coco",
      corazon: "Haba tonka",
      fondo: "Sándalo, ámbar gris, maderas",
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
    tag: "DISEÑADOR",
    name: "Emporio Armani Stronger With You Intensely",
    brandAndVolume: "Emporio Armani · 100 ml",
    brand: "Emporio Armani",
    volume: "100 ml",
    image: "/mas-vendidos/SWY INTENSILY.webp",
    notes: {
      salida: "Pimienta rosa, enebro, violetaa",
      corazon: "Tofee, canela, lavanda, salvia",
      fondo: "Vainilla, ámbar, haba tonka, gamuza",
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
      salida: "Mandarina, fruta del dragón (fruta del dragón)",
      corazon: "Peonía, cereza",
      fondo: "Vainilla, sándalo, pachulí",
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
      salida: "Mandarina",
      corazon: "Jazmín estrellado, fresa silvestre",
      fondo: "Amber maderas, pachulí, cedro, musgo",
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
      salida: "Frutos rojos, yuzu, granada, carameloo",
      corazon: "Peonía, magnolia, flor de loto, helvetolida",
      fondo: "Ambroxan super, norlimbanol, almizcle",
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
    tag: "DISEÑADOR",
    name: "Stronger With You Intensely",
    brandAndVolume: "Emporio Armani · 100 ml",
    brand: "Emporio Armani",
    volume: "100 ml",
    image: "/mas-vendidos/SWY INTENSILY.webp",
    notes: {
      salida: "Pimienta rosa, enebro, violetaa",
      corazon: "Tofee, canela, lavanda, salvia",
      fondo: "Vainilla, ámbar, haba tonka, gamuza",
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
    tag: "DISEÑADOR",
    name: "Born in Roma Intense",
    brandAndVolume: "Valentino Uomo · 100 ml",
    brand: "Valentino Uomo",
    volume: "100 ml",
    image: "/mas-vendidos/BIR INTENSE.webp",
    notes: {
      salida: "Vainilla, borbón, jengibre",
      corazon: "Nuez moscada, acorde salado, lavandín",
      fondo: "Vetiver ahumado",
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
    tag: "DISEÑADOR",
    name: "Eros Flame",
    brandAndVolume: "Versace · 100 ml",
    brand: "Versace",
    volume: "100 ml",
    image: "/disenador/versace-eros-flame-extracto-16x9.webp",
    notes: {
      salida: "Mandarina italiana, pimienta negra, romero, limón italiano, chinotto",
      corazon: "Geranio, rosa, pimienta de Madagascar",
      fondo: "Haba tonka, vainilla, sándalo, pachulí, musgo de roble, cedro",
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
    tag: "DISEÑADOR",
    name: "Acqua di Giò Parfum",
    brandAndVolume: "Giorgio Armani · 100 ml",
    brand: "Giorgio Armani",
    volume: "100 ml",
    image: "/disenador/acqua-di-gio-parfum-16x9.webp",
    notes: {
      salida: "Notas marinas, bergamotaa",
      corazon: "Romero, salvia, geranio",
      fondo: "Incienso, pachulí",
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
    tag: "DISEÑADOR",
    name: "Eros EDP",
    brandAndVolume: "Versace · 100 ml",
    brand: "Versace",
    volume: "100 ml",
    image: "/disenador/versace-eros-eau-de-parfum-16x9.webp",
    notes: {
      salida: "Menta, limón italiano, manzana verde",
      corazon: "Haba tonka, geranio, ambroxan",
      fondo: "Vainilla de Madagascar, cedro de Virginia, cedro del Atlas, musgo de roble",
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
    tag: "DISEÑADOR",
    name: "Phantom Parfum",
    brandAndVolume: "Paco Rabanne · 100 ml",
    brand: "Paco Rabanne",
    volume: "100 ml",
    image: "/disenador/paco-rabanne-phantom-parfum-16x9.webp",
    notes: {
      salida: "Bergamota, limón, cardamom",
      corazon: "Lavanda, geranio, pachulí, cedro",
      fondo: "Vainilla, bálsamo de tolú, vetiver",
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
    tag: "DISEÑADOR",
    name: "Le Beau Le Parfum",
    brandAndVolume: "Jean Paul Gaultier · 125 ml",
    brand: "Jean Paul Gaultier",
    volume: "125 ml",
    image: "/mas-vendidos/JPG LE BEAU LE PARFUM.webp",
    notes: {
      salida: "Piña, coco",
      corazon: "Haba tonka",
      fondo: "Sándalo, ámbar gris, maderas",
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
    tag: "DISEÑADOR",
    name: "The Most Wanted Parfum",
    brandAndVolume: "Azzaro · 100 ml",
    brand: "Azzaro",
    volume: "100 ml",
    image: "/disenador/azzaro-the-most-wanted-parfum-16x9.webp",
    notes: {
      salida: "Jengibre",
      corazon: "Borbón de vainilla",
      fondo: "Borbón de vainilla, acorde amaderado",
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
    tag: "DISEÑADOR",
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
    tag: "DISEÑADOR",
    name: "One Million EDT",
    brandAndVolume: "Paco Rabanne · 100 ml",
    brand: "Paco Rabanne",
    volume: "100 ml",
    image: "/disenador/paco-rabanne-1-million-16x9.webp",
    notes: {
      salida: "Mandarina sanguina, toronja, menta",
      corazon: "Canela, notas especiadas",
      fondo: "Cuero, ámbar, pachulí, notas amaderadas",
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
    tag: "DISEÑADOR",
    name: "Voyage EDT",
    brandAndVolume: "Nautica · 100 ml",
    brand: "Nautica",
    volume: "100 ml",
    image: "/disenador/nautica-voyage-16x9.webp",
    notes: {
      salida: "Hojas verdes, manzana",
      corazon: "Loto, mimosa",
      fondo: "Almizcle, cedro, musgo de roble, ámbar",
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
    tag: "DISEÑADOR",
    name: "Nautica Blue EDT",
    brandAndVolume: "Nautica · 100 ml",
    brand: "Nautica",
    volume: "100 ml",
    image: "/disenador/nautica-blue-edt-16x9.webp",
    notes: {
      salida: "Piña, durazno, bergamotaa",
      corazon: "Jazmín, nenúfar (lirio de agua)",
      fondo: "Sándalo, cedro, almizcle",
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
    tag: "ÁRABE",
    name: "Hawas Ice",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-ice-16x9.webp",
    notes: {
      salida: "Manzana, limón italiano, bergamotaa siciliana, anís estrellado",
      corazon: "Ciruela, flor de azahar, cardamom",
      fondo: "Almizcle, ámbar, madera flotante, musgo",
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
    tag: "ÁRABE",
    name: "Hawas Tropical",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-tropical-16x9.webp",
    notes: {
      salida: "Agua de coco, hoja de higuera, jengibre",
      corazon: "Coco, higo, menta",
      fondo: "Sándalo, haba tonka, almizcle",
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
    tag: "ÁRABE",
    name: "Hawas Malibu",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-malibu-16x9.webp",
    notes: {
      salida: "Piña, naranja, toronja",
      corazon: "Iris, ámbar, lavanda",
      fondo: "Haba tonka, almizcle, pachulí, cashmerán",
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
    tag: "ÁRABE",
    name: "Hawas Kobra",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-kobra-16x9.webp",
    notes: {
      salida: "Jengibre, bergamotaa, mandarina",
      corazon: "Té verde, canela, neroli",
      fondo: "Almizcle, maderas, ámbar",
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
    tag: "ÁRABE",
    name: "Hawas Verde",
    brandAndVolume: "Rasasi · 100 ml",
    brand: "Rasasi",
    volume: "100 ml",
    image: "/varios/rasasi-hawas-verde-16x9.webp",
    notes: {
      salida: "Manzana, limón, bergamotaa, canela",
      corazon: "Notas acuáticas, lavanda, violetaa, cardamom, ciruela",
      fondo: "Almizcle, ámbar, sándalo, pachulí, musgo",
    },
    decants: [
      { label: "Decant 5 ml", price: "$130 MXN" },
      { label: "Decant 10 ml", price: "$220 MXN" },
    ],
    fullBottlePrice: "Consultar",
  },
  {
    id: "ara-kamrah",
    section: "arabes",
    tag: "ÁRABE",
    name: "Kamrah",
    brandAndVolume: "Lattafa · 100 ml",
    brand: "Lattafa",
    volume: "100 ml",
    image: "/varios/lattafa-khamrah-16x9.webp",
    notes: {
      salida: "Bergamota, canela, nuez moscada",
      corazon: "Dátiles, lirio de los valles, praliné, nardo",
      fondo: "Haba tonka tostada, vainilla, mirra, benjuí, ámbarwood, aquilawood",
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
    tag: "ÁRABE",
    name: "Kamrah Waha",
    brandAndVolume: "Lattafa · 100 ml",
    brand: "Lattafa",
    volume: "100 ml",
    image: "/varios/lattafa-khamrah-waha-16x9.webp",
    notes: {
      salida: "Bergamota, yuzu, enebro, jengibre",
      corazon: "Iris, pepino, salvia, acorde de sal marina",
      fondo: "Aquilawood, haba tonka, vainilla, almizcle, ambrofix",
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
    tag: "ÁRABE",
    name: "Kamrah Qahwa",
    brandAndVolume: "Lattafa · 100 ml",
    brand: "Lattafa",
    volume: "100 ml",
    image: "/varios/lattafa-khamrah-qahwa-16x9.webp",
    notes: {
      salida: "Canela, cardamom, jengibre",
      corazon: "Praliné, frutas confitadas, flores blancas",
      fondo: "Café, vainilla, haba tonka, benjuí, almizcle",
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
    tag: "ÁRABE",
    name: "Odyssey Aqua",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-aqua-16x9.webp",
    notes: {
      salida: "Toronja, naranja, artemisia",
      corazon: "Lavanda, menta",
      fondo: "Ciprés, pachulí, ambroxan",
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
    tag: "ÁRABE",
    name: "Mandarin Sky Elixir",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-mandarinsky-elixir-16x9.webp",
    notes: {
      salida: "Mandarina, naranja, lavanda, cardamom, pimienta negra",
      corazon: "Caramelo, haba tonka, pachulí, incienso",
      fondo: "Vainilla, vetiver",
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
    tag: "ÁRABE",
    name: "Odyssey Mega",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-mega-16x9.webp",
    notes: {
      salida: "Jengibre, bergamotaa, naranja, limón, menta",
      corazon: "Piña, salvia, enebro, geranio",
      fondo: "Almizcle, cedro, vetiver, haba tonka",
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
    tag: "ÁRABE",
    name: "9PM Night Out",
    brandAndVolume: "Afnan · 100 ml",
    brand: "Afnan",
    volume: "100 ml",
    image: "/varios/afnan-9pm-night-out-16x9.webp",
    notes: {
      salida: "Fruta del dragón, bergamotaa, coñac, lavanda, manzana",
      corazon: "Cardamomo, majonial, gamuza, tofee, cedro",
      fondo: "Haba tonka, aquilawood, ambrofix, pachulí",
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
    tag: "ÁRABE",
    name: "Stallion 53",
    brandAndVolume: "Emper · 100 ml",
    brand: "Emper",
    volume: "100 ml",
    image: "/varios/stallion-53-16x9.webp",
    notes: {
      salida: "Cardamomo, violetaa",
      corazon: "Ámbar, iris",
      fondo: "Sándalo, cuero, cedro de Virginia, papiro",
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
    tag: "ÁRABE",
    name: "Odyssey Homme",
    brandAndVolume: "Armaf · 100 ml",
    brand: "Armaf",
    volume: "100 ml",
    image: "/varios/armaf-odyssey-homme-16x9.webp",
    notes: {
      salida: "Cardamomo, mandarina, neroli",
      corazon: "Flor de azahar, rosa",
      fondo: "Vainilla, notas amaderadas, sándalo, ámbar",
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
    tag: "ÁRABE",
    name: "Rayhaan Aquatica",
    brandAndVolume: "Rayhaan · 100 ml",
    brand: "Rayhaan",
    volume: "100 ml",
    image: "/varios/rayhaan-aquatica-16x9.webp",
    notes: {
      salida: "Lima, leche de coco, bergamotaa, mandarina",
      corazon: "Caña de azúcar, hibisco, jazmín, gardenia",
      fondo: "Ron, almizcle, haba tonka, pachulí",
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
    tag: "ÁRABE",
    name: "9AM Dive",
    brandAndVolume: "Afnan · 100 ml",
    brand: "Afnan",
    volume: "100 ml",
    image: "/varios/afnan-9am-dive-16x9.webp",
    notes: {
      salida: "Limón, pimienta, menta, grosella negra",
      corazon: "Manzana, incienso, cedro",
      fondo: "Patchouli, jazmín, jengibre, sándalo",
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
    subtitle: "PARA PROBAR",
    description:
      "Si jamás has olido el perfume y no sabes si te va a gustar, empieza con 3 ml. Así lo pruebas en tu piel y descubres si realmente es para ti.",
  },
  {
    size: "5",
    unit: "ml",
    subtitle: "PARA CONOCERLO MÁS",
    description:
      "Si ya te llamó la atención, pero quieres usarlo varios días, ver cómo evoluciona, cuánto dura y decidir si algún día comprarías la botella completa, 5 ml es una buena opción.",
  },
  {
    size: "10",
    unit: "ml",
    subtitle: "PARA CUANDO YA TE GUSTA",
    description:
      "Es para cuando ya conoces el perfume y sabes que te gusta. Quieres una buena cantidad para usarlo varias veces, pero por su precio todavía no quieres comprar la botella completa.",
  },
];

export const SHIPPING_HIGHLIGHTS = [
  {
    id: "mexico",
    icon: "truck" as const,
    title: "Envío a todo México",
    subtitle: "Por $189 MXN",
  },
  {
    id: "free",
    icon: "tag" as const,
    title: "Envío 100% gratis",
    subtitle: "A partir de $1,850 en decants",
  },
  {
    id: "half",
    icon: "drop" as const,
    title: "50% off en envíos",
    subtitle: "A partir de $1,400",
  },
  {
    id: "days",
    icon: "clock" as const,
    title: "3–5 días hábiles",
    subtitle: "Tiempo estimado de entrega",
  },
];

export const SHIPPING_DAYS = [
  { day: "Lun", variant: "gold" as const },
  { day: "Mar", variant: "gold" as const },
  { day: "Mié", variant: "gold" as const },
  { day: "Jue", variant: "gold" as const },
  { day: "Vie", variant: "cream" as const },
  { day: "Sáb", variant: "cream" as const },
  { day: "Dom", variant: "cream" as const },
];

