import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090807",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "http://skyscentsclub.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sky Scents | Decants y Perfumes Completos · Diseñador y Árabes",
    template: "%s | Sky Scents Club",
  },
  description:
    "Catálogo oficial de Sky Scents Club (عطر السماء). Perfumes de autor a tu medida: decants de 3 ml, 5 ml y 10 ml y perfumes completos de diseñador y árabes con envío a todo México por FedEx, DHL y Estafeta.",
  applicationName: "Sky Scents Club",
  keywords: [
    "Sky Scents",
    "Sky Scents Club",
    "perfume decants",
    "designer perfumes",
    "Arabic perfumes",
    "perfumes Mexico",
    "decant 3 ml",
    "decant 5 ml",
    "decant 10 ml",
    "Valentino Born in Roma Intense",
    "Afnan 9PM Night Out",
    "Jean Paul Gaultier Le Beau Le Parfum",
    "Stronger With You Intensely",
    "Rasasi Hawas",
    "Lattafa Khamrah",
    "Louis Vuitton Imagination decant",
  ],
  authors: [{ name: "Sky Scents Club", url: SITE_URL }],
  creator: "Palacios MKT",
  publisher: "Sky Scents Club",
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Sky Scents Club",
    title: "Sky Scents | Perfumes de Autor, a tu Medida",
    description:
      "Catálogo oficial de Sky Scents Club (عطر السماء). Decants de 3, 5 y 10 ml y botellas completas de diseñador y árabes con envío a todo México.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sky Scents Club - عطر السماء - Bespoke Fragrances",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Scents | Decants y Perfumes Completos · Diseñador y Árabes",
    description:
      "Prueba 3, 5 o 10 ml antes de comprar el frasco completo. Catálogo oficial de perfumes de diseñador y árabes en México.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
