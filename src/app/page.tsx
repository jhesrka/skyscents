import React from "react";
import { CatalogClient } from "@/components/CatalogClient";
import {
  DISENADOR_CATALOG,
  ARABES_CATALOG,
  MUJER_CATALOG,
  FAQ_SIZES,
  SITE_CONFIG,
} from "@/data/catalog";

export default function HomePage() {
  const uniqueProducts = [
    ...MUJER_CATALOG,
    ...DISENADOR_CATALOG,
    ...ARABES_CATALOG,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "http://skyscentsclub.com/#website",
        url: "http://skyscentsclub.com/",
        name: "Sky Scents Club",
        description: SITE_CONFIG.heroSubtitle,
        inLanguage: "es-MX",
        publisher: {
          "@id": "http://skyscentsclub.com/#organization",
        },
      },
      {
        "@type": ["Organization", "Store"],
        "@id": "http://skyscentsclub.com/#organization",
        name: SITE_CONFIG.name,
        alternateName: ["Sky Scents Club", "عطر السماء"],
        url: "http://skyscentsclub.com/",
        logo: {
          "@type": "ImageObject",
          url: "http://skyscentsclub.com/og-image.png",
          width: 1200,
          height: 630,
        },
        image: "http://skyscentsclub.com/og-image.png",
        description: SITE_CONFIG.heroSubtitle,
        telephone: "+527552217915",
        priceRange: "$$",
        currenciesAccepted: "MXN",
        paymentAccepted: "Cash, Credit Card, Bank Transfer, SPEI",
        areaServed: {
          "@type": "Country",
          name: "Mexico",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+527552217915",
          contactType: "customer service",
          contactOption: "WhatsApp",
          availableLanguage: ["en", "es"],
        },
      },
      {
        "@type": "ItemList",
        "@id": "http://skyscentsclub.com/#catalog",
        name: "Catálogo de Perfumes y Decants Sky Scents",
        description:
          "Decants de 3 ml, 5 ml y 10 ml y perfumes completos de diseñador y árabes en pesos mexicanos (MXN).",
        numberOfItems: uniqueProducts.length,
        itemListElement: uniqueProducts.map((product, index) => {
          const numericPrice = product.fullBottlePrice.replace(/[^0-9]/g, "");
          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: product.name,
              image: product.image
                ? `http://skyscentsclub.com${product.image}`
                : "http://skyscentsclub.com/og-image.png",
              brand: {
                "@type": "Brand",
                name: product.brand,
              },
              description: `Notas de salida: ${product.notes.salida}. Corazón: ${product.notes.corazon}. Fondo: ${product.notes.fondo}.`,
              category: product.section,
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "MXN",
                lowPrice: product.decants[0]?.price.replace(/[^0-9]/g, "") || numericPrice,
                highPrice: numericPrice,
                offerCount: product.decants.length + 1,
                price: numericPrice,
                availability: "https://schema.org/InStock",
                seller: {
                  "@id": "http://skyscentsclub.com/#organization",
                },
              },
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        "@id": "http://skyscentsclub.com/#faq",
        mainEntity: FAQ_SIZES.map((faq) => ({
          "@type": "Question",
          name: `¿Para quién se recomienda el decant de ${faq.size} ${faq.unit} (${faq.subtitle})?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.description,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogClient />
    </>
  );
}
