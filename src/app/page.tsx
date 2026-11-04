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
        inLanguage: "en",
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
        name: "Sky Scents Perfumes and Decants Catalog",
        description:
          "3 ml, 5 ml, and 10 ml decants and full bottles of designer and Arabic perfumes in Mexican pesos (MXN).",
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
              description: `Top notes: ${product.notes.salida}. Heart notes: ${product.notes.corazon}. Base notes: ${product.notes.fondo}.`,
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
          name: `Who is the ${faq.size} ${faq.unit} decant (${faq.subtitle}) recommended for?`,
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
