"use client";

import React, { useState } from "react";
import {
  PerfumeItem,
  buildWhatsAppUrl,
  generatePerfumeOrderMessage,
} from "@/data/catalog";
import { BottlePlaceholderIcon, DropSmallIcon, BottleSmallIcon } from "./Icons";

interface PerfumeCardProps {
  item: PerfumeItem;
  onOpenLightbox?: (item: PerfumeItem) => void;
  index?: number;
}

export function PerfumeCard({ item, onOpenLightbox, index = 0 }: PerfumeCardProps) {
  // Presentación seleccionada por el usuario (label y precio)
  const [selectedPresentation, setSelectedPresentation] = useState<{
    label: string;
    price: string;
  } | null>(() => {
    // Preselección por defecto: primera opción disponible para flujo directo
    if (item.decants.length > 0) {
      return item.decants[0];
    }
    return { label: "Completo", price: item.fullBottlePrice };
  });

  const orderMessage = generatePerfumeOrderMessage(
    item,
    selectedPresentation || undefined
  );
  const whatsappHref = buildWhatsAppUrl(orderMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppClick = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1800);
  };

  return (
    <article
      id={`perfume-${item.id}`}
      style={{
        animationDelay: `${Math.min(index * 45, 450)}ms`,
      }}
      className="group relative flex flex-col justify-between rounded-[14px] bg-sky-card border border-sky-borderSubtle p-[10px] transition-all duration-300 hover:border-sky-borderGold/80 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.65),0_0_24px_rgba(200,164,106,0.12)] scroll-mt-24 animate-fade-in"
    >
      {/* Top Content: Image Box + Details */}
      <div>
        {/* Image Box (160px on mobile single-column, 126px on sm+ matching desktop PDF) */}
        <div
          onClick={() => {
            if (item.image && onOpenLightbox) {
              onOpenLightbox(item);
            }
          }}
          className={`relative w-full h-[160px] sm:h-[126px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center select-none ${
            item.image ? "cursor-zoom-in group/img" : ""
          }`}
          style={
            item.image
              ? undefined
              : {
                  background:
                    "radial-gradient(ellipse at center, #252019 0%, #171410 65%, #12100d 100%)",
                }
          }
        >
          {/* Optional Category Badge (DISEÑADOR / ÁRABE) */}
          {item.tag && (
            <span className="absolute top-[10px] left-[10px] z-10 inline-flex items-center justify-center px-[10px] h-[18.3px] rounded-full border border-sky-gold font-montserrat font-semibold text-[8.3px] tracking-[0.06em] text-sky-goldBright uppercase bg-[#1a1714]/85 backdrop-blur-sm">
              {item.tag}
            </span>
          )}

          {item.image ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />
              {/* Subtle Zoom Hint Overlay */}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/75 text-sky-gold text-[8px] font-montserrat tracking-wider pointer-events-none">
                Ver detalle
              </span>
            </div>
          ) : (
            /* Bottle Icon + Imagen pendiente */
            <div className="flex flex-col items-center justify-center mt-2">
              <BottlePlaceholderIcon className="w-[18.7px] h-[25.6px] text-sky-borderMid transition-transform duration-300 group-hover:scale-105 group-hover:text-sky-gold" />
              <span className="mt-3 font-montserrat font-normal text-[9.2px] tracking-[0.08em] text-sky-textDarkMuted">
                Imagen pendiente
              </span>
            </div>
          )}
        </div>

        {/* Perfume Title & Brand */}
        <div className="mt-[14px] px-[2px]">
          <h3 className="font-playfair font-bold text-[13.3px] leading-[1.28] text-sky-cream">
            {item.name}
          </h3>
          <p className="mt-[3px] font-montserrat font-normal text-[10px] leading-[1.3] text-sky-textDim">
            {item.brandAndVolume}
          </p>

          {/* Olfactory Notes */}
          <div className="mt-[8px] space-y-[1.5px] font-montserrat text-[9.2px] leading-[1.38] text-sky-textDim">
            <p>
              <strong className="font-semibold text-sky-goldBright">Salida:</strong>{" "}
              {item.notes.salida}
            </p>
            <p>
              <strong className="font-semibold text-sky-goldBright">Corazón:</strong>{" "}
              {item.notes.corazon}
            </p>
            <p>
              <strong className="font-semibold text-sky-goldBright">Fondo:</strong>{" "}
              {item.notes.fondo}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content: Price Rows + CTA */}
      <div className="mt-[14px]">
        {/* Decant Rows */}
        <div className="space-y-[3.5px]">
          {item.decants.map((decant) => {
            const isSelected = selectedPresentation?.label === decant.label;
            const isConsultar = decant.price.toLowerCase() === "consultar" || decant.price.toLowerCase() === "inquire";
            return (
              <button
                key={decant.label}
                type="button"
                aria-pressed={isSelected}
                aria-label={`Seleccionar ${decant.label} for ${item.name} at ${decant.price}`}
                onClick={() =>
                  setSelectedPresentation({
                    label: decant.label,
                    price: decant.price,
                  })
                }
                title="Haz clic para seleccionar este tamaño para tu pedido por WhatsApp"
                className={`w-full h-[23.3px] px-[6px] rounded-[5px] border flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-sky-gold/20 border-sky-gold shadow-[0_0_10px_rgba(200,164,106,0.15)] ring-1 ring-sky-gold/40"
                    : "bg-sky-card border-sky-borderSubtle hover:border-sky-borderMid"
                }`}
              >
                <span className="flex items-center gap-[8px]">
                  <DropSmallIcon
                    className={`w-[7.6px] h-[10.1px] shrink-0 transition-colors ${
                      isSelected ? "text-sky-goldBright" : "text-sky-gold"
                    }`}
                  />
                  <span
                    className={`font-montserrat text-[10px] ${
                      isSelected
                        ? "font-semibold text-sky-cream"
                        : "font-normal text-sky-cream"
                    }`}
                  >
                    {decant.label}
                  </span>
                </span>
                <span
                  className={
                    isConsultar
                      ? "font-montserrat font-normal text-[9.2px] text-sky-goldBright"
                      : "font-playfair font-bold text-[10.8px] text-sky-goldBright"
                  }
                >
                  {decant.price}
                </span>
              </button>
            );
          })}
        </div>

        {/* Full Bottle Row */}
        {(() => {
          const isSelected = selectedPresentation?.label === "Completo" || selectedPresentation?.label === "Full Bottle";
          return (
            <button
              type="button"
              aria-pressed={isSelected}
              aria-label={`Seleccionar perfume completo para ${item.name} at ${item.fullBottlePrice}`}
              onClick={() =>
                setSelectedPresentation({
                  label: "Full Bottle",
                  price: item.fullBottlePrice,
                })
              }
              title="Haz clic para seleccionar perfume completo para tu pedido por WhatsApp"
              className={`mt-[5px] w-full h-[35px] px-[10px] rounded-[7px] border flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-sky-gold/25 border-sky-goldLight shadow-[0_0_14px_rgba(200,164,106,0.25)] ring-1 ring-sky-goldLight/50"
                  : "bg-transparent border-sky-gold hover:bg-sky-gold/10"
              }`}
            >
              <span className="flex items-center gap-[8px]">
                <BottleSmallIcon className="w-[10.3px] h-[13.8px] text-sky-gold shrink-0" />
                <span className="font-montserrat font-semibold text-[10px] text-sky-cream">
                  Full Bottle
                </span>
              </span>
              <span className="font-playfair font-bold text-[12.5px] text-sky-goldBright">
                {item.fullBottlePrice}
              </span>
            </button>
          );
        })()}

        {/* Preguntar por existencia */}
        <p className="mt-[6px] mb-[6px] font-montserrat font-normal text-[8.5px] text-sky-textDim">
          Preguntar por existencia
        </p>

        {/* Pedir por WhatsApp CTA Directo */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className={`w-full h-[28.3px] rounded-full border border-sky-gold flex items-center justify-center font-montserrat font-semibold text-[10px] text-sky-goldLight transition-all duration-200 hover:bg-sky-gold hover:text-[#14110c] hover:shadow-[0_4px_12px_rgba(200,164,106,0.2)] active:scale-[0.98] ${
            isSubmitting ? "opacity-75 cursor-wait" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-1.5">
              <svg
                className="animate-spin h-3 w-3 text-sky-goldLight"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Abriendo chat...</span>
            </span>
          ) : (
            "Pedir por WhatsApp →"
          )}
        </a>
      </div>
    </article>
  );
}

